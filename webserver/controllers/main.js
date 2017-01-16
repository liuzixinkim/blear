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
var pkg = require('../../package.json');
var book = require('../utils/book.js');


var router = new Router();
var bookData = fse.readJSONSync(path.join(configs.bookroot, 'data.json'));
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
        'create',
        'update',
        'version',
        'github'
    ];

    object.each(list, function (index, key) {
        var val = desc[key];

        if (key === 'github') {
            var old = val;
            val = '' +
                '<img width="16" height="16" class="favicon" src="https://f.ydr.me/' + old + '">' +
                '<a href="' + old + '">' +
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

    var html = '<ul>';
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
        html += '<li>' +
            '<a class="j-pjax" href="' + href + '">' + mod + '@' + ver + '</a>' +
            '</li>';
    });

    if (!dependenciesLenth) {
        html += '<li>无依赖</li>';
    }

    html += '</ul>';

    return html;
};


// 生成标题
var generateTitle = function (pageName) {
    if (!pageName) {
        return '';
    }

    return '<h1 class="title">' + pageName + '</h1>';
};


// book
var buildController = function (pageData) {
    return function (req, res, next) {
        var data = object.assign({}, bookData, {
            page: pageData
        });
        var isAjax = req.headers['x-requested-with'] === 'XMLHttpRequest';

        pageData.name = 'index' === pageData.name ? '' : pageData.name;
        pageData.content = pageData.content.replace(introductionRE, generateIntroduction(pageData.name));
        pageData.content = pageData.content.replace(dependenciesRE, generateDependencies(pageData.name));

        if (isAjax) {
            return res.json({
                title: data.title,
                name: pageData.name,
                toc: pageData.toc,
                content: pageData.content
            });
        }

        res.render('index.html', data);
    };
};


book.buildRouters(router, buildController, configs.bookroot);


module.exports = router;
