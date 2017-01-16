/**
 * book
 * @author ydr.me
 * @created 2015-09-02 17:30
 * @updated 2017年01月12日18:21:23
 */


'use strict';

var fse = require('fs-extra');
var path = require('blear.node.path');
var object = require('blear.utils.object');
var marked = require('blear.classes.markdown').marked;
var SafeMakrdown = require('blear.classes.safe-markdown');

var configs = require('../../configs');

var REG_TEXT_LINK = /^\[([^\]]*)]\((.*?)\)?$/;
var REG_MD = /\/(index|readme)\.md$/i;
var REG_EXTEND = /\.md$/i;
var REG_HASH = /^#/;


var indexMD = new SafeMakrdown({
    xssable: false,
    mentionable: false
});
var contentMD = new SafeMakrdown({
    xssable: false,
    mentionable: false,
    hadingMinLevel: 2,
    linkTrustedDomains: [
        'ydr.me',
        'frontenddev.org',
        'qianduanblog.com'
    ]
});


/**
 * 获取文件
 * @param bookroot
 * @returns {Object}
 */
var getFiles = function (bookroot) {
    var indexCode = fse.readFileSync(path.join(bookroot, 'index.md'), 'utf8');
    var indexTokens = marked.lexer(indexCode);
    var indexFiles = [];

    indexTokens.forEach(function (token) {
        if (token.type === 'text') {
            var matches = token.text.match(REG_TEXT_LINK);

            if (!matches) {
                return;
            }

            var name = matches[1];
            var file = matches[2];

            if (REG_HASH.test(file)) {
                return;
            }

            file = path.join(bookroot, file);
            indexFiles.push({
                name: name,
                file: file
            });
        }
    });

    return {
        files: indexFiles,
        code: indexCode
    };
};


var REG_HREF = /<a([^>]*?)\shref="(.*?)">/g;
var REG_HTTP = /^(https?:)?\/\//;
var REG_ABSOLUTE = /^\//;


/**
 * 构建路由
 * @param router
 * @param controller
 * @param bookroot
 */
exports.buildRouters = function (router, controller, bookroot) {
    var ret = getFiles(bookroot);
    var contentFiles = ret.files;
    var sidebarCode = ret.code;
    var sidebarContent = contentMD.render(sidebarCode).content;
    var indexFile = path.join(bookroot, './readme.md');
    var indexCode = fse.readFileSync(indexFile, 'utf8');
    var indexContent = indexMD.render(indexCode).content;

    sidebarContent = fixHref(sidebarContent);
    indexContent = fixHref(indexContent);

    router.get('/', controller(object.assign({
        name: 'index',
        file: indexFile,
        toc: '',
        sidebar: sidebarContent,
        content: indexContent
    })));
    contentFiles.forEach(function (item) {
        var name = item.name;
        var file = item.file;
        var uri = path.relative(bookroot, file);
        var markdown = fse.readFileSync(file, 'utf8');

        uri = path.join('/', uri);
        uri = uri
            .replace(REG_MD, '/')
            .replace(REG_EXTEND, '');
        var ret = contentMD.render(markdown);
        var toc = ret.toc;

        var content = ret.content;
        content = fixHref(content, file);

        router.get(uri, controller(object.assign({
            name: name,
            file: file,
            sidebar: sidebarContent,
            toc: toc,
            content: content
        })));
    });
};


/**
 * 修正 a href
 * @param content
 * @param [srcFile]
 * @returns {string}
 */
function fixHref(content, srcFile) {
    return content.replace(REG_HREF, function (source, prev, href) {
        var attr = '';

        if (srcFile && !REG_HTTP.test(href) && !REG_HASH.test(href)) {
            if (!REG_ABSOLUTE.test(href)) {
                var hrefFile = path.join(path.dirname(srcFile), href);
                var hrefRelative = path.relative(configs.bookroot, hrefFile);

                href = '/' + hrefRelative;
            }

            attr = ' class="j-pjax" ';
        }

        return '<a' + prev + attr + ' href="' +
            href
                .replace(REG_MD, '/')
                .replace(REG_EXTEND, '') +
            '">';
    });
}
