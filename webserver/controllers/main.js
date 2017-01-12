/**
 * home 控制器
 * @author ydr.me
 * @create 2016-01-13 14:45
 */


'use strict';

var Router = require('express').Router;

var configs = require('../../configs');
var pkg = require('../../package.json');
var book = require('../utils/book.js');


var router = new Router();

// book
var buildController = function (name, uri, data) {
    return function (req, res, next) {
        var isAjax = req.headers['x-requested-with'] === 'XMLHttpRequest';

        data.pageName = name;


        if (isAjax) {
            return res.json({
                title: data.title,
                pageName: data.pageName,
                content: data.content
            });
        }

        res.render('index.html', data);
    };
};


book.buildRouters(router, buildController, configs.bookroot);



module.exports = router;
