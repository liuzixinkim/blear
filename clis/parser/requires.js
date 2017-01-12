/**
 * 解析 require()
 * @author ydr.me
 * @created 2016-12-15 22:17
 */


'use strict';

var array = require('blear.utils.array');

var JS = 'js';
var reExtname = /\.[^.]+$/;
var reRelativePath = /^\.{1,2}\//;
var reLineComments = /^\s*\/\/.*$/gm;
var reBlockComments = /\/\*[\s\S]*?\*\//gm;
/**
 * 提取 require
 * @type {RegExp}
 */
var reRequire = /(?:[^.\[]|)\brequire\((['"])([^'"]*)\1(\s*,\s*(['"])([^'"]*)\4)?/g;


/**
 * 获取文件的扩展名
 * @param path
 * @returns {*|string}
 */
var getPathExtname = function (path) {
    return (path.toLowerCase().match(reExtname) || [''])[0];
};

/**
 * 是否为相对路径
 * @param path
 * @returns {boolean}
 */
var isRelativePath = function (path) {
    return reRelativePath.test(path);
};


/**
 * 默认的入口模块类型匹配规则
 * @type {*[]}
 */
var moduleInTypeMatches = [
    [JS, /^js$/],
    ['html', /^html$/],
    ['css', /^css$/],
    ['json', /^json$/],
    ['text', /^txt$/]
];


/**
 * 模块入口类型
 * @type {{}}
 */
var moduleInTypeMap = {
    js: 'js',
    image: 'file',
    file: 'file',
    text: 'text',
    html: 'text',
    json: 'json',
    css: 'css'
};


/**
 * 模块出口类型
 * @type {{}}
 */
var moduleOutTypeMap = {
    js: {
        js: 1,
        d: 'js'
    },
    file: {
        url: 1,
        base64: 1,
        d: 'url'
    },
    text: {
        text: 1,
        url: 2,
        base64: 2,
        d: 'text'
    },
    css: {
        text: 1,
        url: 2,
        base64: 2,
        style: 3,
        d: 'text'
    },
    json: {
        js: 1,
        text: 2,
        url: 3,
        base64: 3,
        d: 'js'
    }
};

/**
 * 获取出口类型
 * @param inType
 * @param outType
 * @returns {*}
 */
var getOutType = function (inType, outType) {
    var dfnOutType = moduleOutTypeMap[inType];
    var foundOutType = dfnOutType[outType];

    if (!foundOutType) {
        return dfnOutType.d;
    }

    return outType;
};

/**
 * 解析 require 信息
 * @param name
 * @param pipeline
 * @returns {*[]}
 */
var parseRequire = function (name, pipeline) {
    var dftInType = JS;
    var extension = getPathExtname(name).slice(1);

    if (isRelativePath(name) && extension && !pipeline) {
        array.each(moduleInTypeMatches, function (index, rule) {
            var inType = rule[0];
            var regexp = rule[1];

            if (regexp.test(extension)) {
                dftInType = inType;
                return false;
            }
        });

        dftInType = dftInType || 'file';
    }

    pipeline = (pipeline ? pipeline.toLowerCase() : dftInType).split('|');
    var inType = pipeline[0];
    var outType = pipeline[1];

    inType = moduleInTypeMap[inType];

    if (!inType) {
        throw new TypeError('不支持的模块类型：' + inType);
    }

    outType = getOutType(inType, outType);

    return [name, inType, outType];
};

/**
 * 解析代码里的依赖信息
 * @param code {String} 代码
 */
var parseRequires = function (code) {
    var ret = [];

    code
        .replace(reBlockComments, '')
        .replace(reLineComments, '')
        .replace(reRequire, function (source, quote0, name, combine, quote1, pipleLine) {
            ret.push(parseRequire(name, pipleLine));
        });

    return ret;
};

module.exports = parseRequires;
