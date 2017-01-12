/**
 * public
 * @author ydr.me
 * @create 2016-01-20 11:44
 */


'use strict';

var express = require('express');
var path = require('blear.node.path');


var configs = require('../../configs.js');

module.exports = express.static(configs.public, {
    dotfiles: 'allow',
    etag: configs.env !== 'local',
    extensions: false,
    index: false,
    maxAge: '30d',
    redirect: true,
    lastModified: false,
    setHeaders: function (res) {
        if (configs.env !== 'local') {
            return;
        }

        res.setHeader('cache-control', 'no-cache');
    }
});


