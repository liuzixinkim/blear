/**
 * 文件描述
 * @author ydr.me
 * @create 2017-01-24 13:17
 * @update 2017-01-24 13:17
 */


'use strict';

var attribute = require('blear.core.attribute');
var object = require('blear.utils.object');

var prettify = require('./prettify');

var defaults = {
    lineNumber: true,
    startLine: 1
};

require('./style.css', 'css|style');

module.exports = function (el, options) {
    var langMatched = (el.className || '').match(/(?:^|\s)lang-(.*?)(\s|$)/);

    options = object.assign({}, defaults, options);
    attribute.addClass(el, 'prettify');
    langMatched = langMatched || ['', 'html'];
    prettify.applyDecorator({
        langExtension: langMatched[1],
        sourceNode: el,
        lineNumber: options.lineNumber,
        startLine: options.startLine,
        pre: true
    });
};


