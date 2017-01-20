/**
 * 文件描述
 * @author ydr.me
 * @create 2017-01-19 09:59
 * @update 2017-01-19 09:59
 */


'use strict';

var Router = require('express').Router;
var object = require('blear.utils.object');
var path = require('blear.node.path');
var pathUtil = require('blear.utils.path');
var fse = require('fs-extra');
var marked = require('blear.classes.markdown').marked;
var SafeMakrdown = require('blear.classes.safe-markdown');

var defaults = {
    /**
     * 基准路径
     */
    baseURL: '/',

    /**
     * 根目录
     */
    rootDirname: __dirname,

    /**
     * data 文件名
     */
    dataFileName: 'data.json',

    /**
     * 索引文件名
     */
    indexFileName: 'index.md',

    /**
     * readme 文件名
     */
    readmeFileName: 'readme.md',

    /**
     * uri 后缀
     */
    uriExtname: '',

    /**
     * 模板文件路径
     */
    templateFilePath: 'index.html',

    /**
     * 是否输出目录
     */
    toc: true,

    /**
     * 是否缓存
     */
    cache: false,

    /**
     * 渲染预处理器
     */
    preMarkdown: function (markdown) {
        return markdown;
    },

    /**
     * 渲染后处理器
     */
    postHTML: function (html) {
        return html;
    }
};
var indexSMD = new SafeMakrdown({
    xssable: false,
    mention: false
});
var bodySMD = new SafeMakrdown({
    xssable: false,
    mention: false,
    hadingMinLevel: 2,
    linkTrustedDomains: [
        'ydr.me',
        'frontenddev.org',
        'qianduanblog.com'
    ]
});

module.exports = function (options) {
    options = object.assign({}, defaults, options);
    var router = new Router();
    var rootDirname = options.rootDirname;
    var index = getIndex(options);
    var indexFile = index.file;
    var indexFiles = index.files;
    var sidebarMarkdown = index.markdown;
    var data = fse.readJSONSync(path.join(rootDirname, options.dataFileName));
    var cache = Object.create(null);
    var sidebarHTML = indexSMD.render(sidebarMarkdown).content;

    sidebarHTML = postHTMLAsHref(sidebarHTML, options);
    indexFiles.unshift({
        title: '',
        uri: '/',
        file: path.join(rootDirname, options.readmeFileName)
    });
    indexFiles.forEach(function (meta) {
        var file = meta.file;
        var title = meta.title;
        var uri = meta.uri;
        var renderData = {
            book: data,
            page: {
                path: meta.path,
                uri: uri,
                title: title,
                sidebar: sidebarHTML
            }
        };

        router.get(uri, function (req, res, next) {
            var cached = cache[uri];
            var isAJAX = req.headers['x-requested-with'] === 'XMLHttpRequest';

            if (cached) {
                return isAJAX ?
                    res.api(returnAjaxData(cached)) :
                    res.render(options.templateFilePath, cached);
            }

            var markdown;

            try {
                markdown = fse.readFileSync(file, 'utf8');
            } catch (err) {
                markdown = '<br>';
            }

            markdown = options.preMarkdown(markdown, renderData);
            var result = bodySMD.render(markdown);
            var content = result.content;

            content = postHTMLAsHref(content, options);
            content = options.postHTML(content, renderData);
            renderData.page.content = content;
            renderData.page.toc = result.toc;

            if (options.cache) {
                cache[uri] = renderData;
            }

            if (isAJAX) {
                return res.api(returnAjaxData(renderData));
            }

            res.render(options.templateFilePath, renderData);
        });
    });

    return router;
};


/**
 * 替换后缀
 * @param uri
 * @param extname
 * @returns {void|XML|string}
 */
function replaceExtname(uri, extname) {
    var extnameRE = /\.[^/.]*$/;

    return uri.replace(extnameRE, extname);
}


/**
 * 获取文件
 * @param options
 * @returns {Object}
 */
function getIndex(options) {
    var rootDirname = options.rootDirname;
    var file = path.join(rootDirname, options.indexFileName);
    var markdown = fse.readFileSync(file, 'utf8');
    var indexTokens = marked.lexer(markdown);
    var files = [];
    var textLinkRE = /^\[([^\]]*)]\((.*?)\)?$/;
    var hashRE = /^#/;

    indexTokens.forEach(function (token) {
        if (token.type === 'text') {
            var matches = token.text.match(textLinkRE);

            if (!matches) {
                return;
            }

            var title = matches[1];
            var file = matches[2];

            if (hashRE.test(file)) {
                return;
            }

            file = path.join(rootDirname, file);
            var _path = '/' + path.relative(rootDirname, file);
            var uri = replaceExtname(_path, options.uriExtname);

            files.push({
                title: title,
                path: _path,
                uri: uri,
                file: file
            });
        }
    });

    return {files: files, file: file, markdown: markdown};
}


/**
 * 后处理 href
 * @param content
 * @param options
 * @returns {string}
 */
function postHTMLAsHref(content, options) {
    var linkRE = /<a([^>]*?)\shref="(.*?)">/g;
    var mailtoRE = /^mailto:/i;
    var hashStartRE = /^#/;
    var mdRE = /\.(markdown|md)$/i;

    return content.replace(linkRE, function (source, prev, href) {
        // 如果是静态的
        if (pathUtil.isStatic(href)) {
            return source;
        }

        // mailto:
        if (mailtoRE.test(href)) {
            return source;
        }

        // #开头的
        if (hashStartRE.test(href)) {
            return source;
        }

        // 如果 markdown，则添加 baseURL
        if (mdRE.test(href)) {
            href = path.join(options.baseURL, href.slice(1));
        }

        href = replaceExtname(href, options.uriExtname);
        return '<a' + prev + ' class="jPjax" ' + ' href="' + href + '">';
    });
}

/**
 * 处理为 ajaxData
 * @param renderData
 */
function returnAjaxData(renderData) {
    var ajaxData = object.assign(true, {}, renderData);

    delete ajaxData.page.sidebar;

    return ajaxData;
}
