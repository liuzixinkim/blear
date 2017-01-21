/**
 * home 控制器
 * @author ydr.me
 * @create 2016-01-13 14:45
 */


'use strict';

var Router = require('express').Router;
var fse = require('fs-extra');
var path = require('blear.node.path');
var object = require('blear.utils.object');

var configs = require('../../configs');
var midBook = require('../middlewares/book');


var router = new Router();
var modulesData = fse.readJSONSync(path.join(configs.bookroot, 'modules.json'));
var introductionRE = /\{\{\s*?introduction\s*?}}/i;
var dependenciesRE = /\{\{\s*?dependencies\s*?}}/i;

var buildTravisBadge = function (module) {
    return '<a target="_blank" rel="nofollow" href="https://travis-ci.org/blearjs/' + module + '">' +
        '<img src="https://img.shields.io/travis/blearjs/' + module + '/master.svg?style=flat-square">' +
        '</a>';
};

var buildNomBadge = function (module) {
    return '<a target="_blank" rel="nofollow" href="https://www.npmjs.com/package/' + module + '">' +
        '<img src="https://img.shields.io/npm/v/' + module + '.svg?style=flat-square">' +
        '</a>';
};

var buildCoverallsBadge = function (module) {
    return '<a target="_blank" rel="nofollow" href="https://coveralls.io/github/blearjs/' + module + '?branch=master">' +
        '<img src="https://img.shields.io/coveralls/blearjs/' + module + '/master.svg?style=flat-square">' +
        '</a>';
};


// 生成模块描述
var generateIntroduction = function (module) {
    var desc = modulesData[module];

    if (!desc) {
        return '';
    }

    var html = '<ul>';
    var list = [
        'description',
        'author',
        'create',
        'update',
        'github'
    ];

    object.each(list, function (index, key) {
        var val = desc[key];

        if (key === 'github') {
            var old = val;
            val = '' +
                '<img width="16" height="16" class="favicon" src="https://f.ydr.me/' + old + '">' +
                '<a href="' + old + '" target="_blank">' +
                old +
                '</a>';
        }

        html += '<li>' +
            key +
            '：' +
            val +
            '</li>'
    });

    html += '<li>' +
        buildTravisBadge(module) +
        buildNomBadge(module) +
        buildCoverallsBadge(module) +
        '</li>';

    html += '</ul>';

    return html;
};

// 生成依赖信息
var generateDependencies = function (module) {
    var desc = modulesData[module];

    if (!desc) {
        return '';
    }

    var markdown = '\n\n';
    var dependenciesLenth = 0;

    object.each(desc.dependencies, function (mod, ver) {
        var arr = mod.split('.');
        var parent = arr[1];
        var name = arr[2];
        var href = ['', parent, name].join('/');

        // 忽略补丁模块
        if (/\.polyfills|shims\./.test(mod)) {
            return;
        }

        dependenciesLenth++;
        markdown += '- [' + mod + '](' + href + ')\n';
    });

    if (!dependenciesLenth) {
        markdown += '- 无依赖';
    }

    markdown += '\n\n';

    return markdown;
};

// 生成编辑链接
var generateEditLink = function (renderData) {
    var repo = renderData.book.repo;
    var path = renderData.page.path;
    var url = repo + '/blob/master/bookroot' + path;

    return '\n\n-----\n\n' +
        '[编辑此页面](' + url + ')\n\n';
};


router.use('/', midBook({
    baseURL: '/',
    rootDirname: configs.bookroot,
    cache: configs.env !== 'local',
    preMarkdown: function (markdown, renderData) {
        markdown = markdown.replace(introductionRE, generateIntroduction(renderData.page.title));
        markdown = markdown.replace(dependenciesRE, generateDependencies(renderData.page.title));
        markdown += generateEditLink(renderData);
        return markdown;
    }
}));


module.exports = router;

