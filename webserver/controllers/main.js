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
var descriptionRE = /\{\{description}}/;
var dependenciesRE = /\{\{dependencies}}/;


// 生成模块描述
var generateDescription = function (module) {
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

    object.each(desc.dependencies, function (mod, ver) {
        var arr = mod.split('.');
        var parent = arr[1];
        var name = arr[2];
        var href = ['', parent, name].join('/');

        // 忽略补丁模块
        if (/\.polyfills|shims\./.test(mod)) {
            return;
        }

        html += '<li>' +
            '<a class="j-pjax" href="' + href + '">' + mod + '@' + ver + '</a>' +
            '</li>';
    });

    html += '</ul>';

    return html;
};


// book
var buildController = function (pageData) {
    return function (req, res, next) {
        var data = object.assign({}, bookData, {
            page: pageData
        });
        var isAjax = req.headers['x-requested-with'] === 'XMLHttpRequest';

        pageData.name = 'index' === pageData.name ? '' : pageData.name;
        pageData.content = pageData.content.replace(descriptionRE, generateDescription(pageData.name));
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
