/**
 * 文档构建
 * @author ydr.me
 * @created 2016-12-15 16:22
 */


'use strict';

var fse = require('fs-extra');
var dox = require('dox');
var path = require('blear.node.path');
var array = require('blear.utils.array');
var object = require('blear.utils.object');
var typeis = require('blear.utils.typeis');
var plan = require('blear.utils.plan');
var Template = require('blear.classes.template');

var configs = require('../configs');
var parseRequires = require('./parser/requires');


var getTpl = function (template) {
    var dirname = 'clis/_templates/';
    var filename = template + '.html';
    var filepath = path.join(configs.root, dirname, filename);
    var content = fse.readFileSync(filepath, 'utf8');
    return new Template(content);
};
var tplRequires = getTpl('requires');
var tplDesc = getTpl('desc');
var tplUsage = getTpl('usage');
var tplParams = getTpl('params');
var tplReturns = getTpl('returns');
var tplExamples = getTpl('examples');
var requireFiles = {};
var absoluteDirname = path.join(configs.root, '..');


// 1、查找指定模块的文件
var findModulesFiles = function () {
    var modules = require('../modules.json');
    var defaultSource = 'src/index.js';
    var allFiles = [];

    array.each(modules, function (categoryIndex, item) {
        array.each(item.list, function (moduleIndex, module) {
            var globArray = [];
            var source = module.source;

            if (source && !typeis.Array(source)) {
                source = [source];
            }

            if (source) {
                source = array.map(source, function (_source) {
                    return 'src/' + _source;
                });
            } else {
                source = [defaultSource];
            }

            array.each(source, function (index, _source) {
                globArray.push(path.join(module.name, _source));
            });

            var files = path.glob(globArray, {
                srcDirname: path.resolve(configs.root, '..')
            });

            var moduleName = module.name;
            var moduleNameArr = moduleName.split('.');
            var moduleDir = path.join(absoluteDirname, moduleName);

            files = array.map(files, function (file) {
                return {
                    moduleIndex: moduleIndex,
                    categoryIndex: categoryIndex,
                    categoryName: item.category,
                    moduleDir: moduleDir,
                    moduleName: moduleName,
                    moduleNamespace: moduleNameArr[0],
                    moduleCategory: moduleNameArr[1],
                    moduleFlag: moduleNameArr[2],
                    filename: path.relative(moduleDir, file),
                    file: file
                };
            });

            allFiles = allFiles.concat(files);
        });
    });

    return allFiles;
};


// 2、解析源码的文档注释
var parseSourceComment = function (files) {
    var astList = [];
    array.each(files, function (index, item) {
        var file = item.file;
        var code = fse.readFileSync(file, 'utf8');
        var ast = dox.parseComments(code);
        var dirname = item.categoryIndex + '-' + item.categoryName;
        var filename = item.moduleIndex + '-' + item.moduleName + '/' + item.filename;
        var wf = path.join(configs.root, 'dist', dirname, filename + '.dox.json');

        fse.outputJSONSync(wf, ast);
        astList.push({
            moduleName: item.moduleName,
            moduleCategory: item.moduleCategory,
            moduleFlag: item.moduleFlag,
            categoryName: item.categoryName,
            file: file,
            code: code,
            ast: ast,
            dirname: dirname,
            filename: filename
        });
    });

    return astList;
};


var parseForModuleRequires = function (ast) {
    var requires = parseRequires(ast.code);
    var dirname = path.dirname(ast.file);

    requires = array.map(requires, function (require) {
        var href = '';
        var name = require[0];
        var inType = require[1];
        var outType = require[2];
        var relative = /^\.{1,2}\//.test(name);
        var relFile = path.join(
            relative ? dirname : absoluteDirname,
            name + (relative ? '' : '/src/index.js')
        );
        var to = path.relative(absoluteDirname, relFile);
        var type = '';

        if (inType === 'js') {
            href = path.join('/doc', to);
            type = 'doc/';
        } else {
            href = path.join('/file', to);
            requireFiles[relFile] = {
                relFile: relFile,
                href: href
            };
            type = 'file/';
        }

        return {
            href: href,
            name: type + path.basename(name),
            inType: inType,
            outType: outType
        };
    });

    return tplRequires.render({
        requires: requires
    });
};

var parseForModuleDesc = function (token, ast) {
    var data = {
        author: '佚名',
        created: '未知',
        updated: '未知',
        description: '暂无描述'
    };
    var map = {
        create: 'created',
        update: 'created',
        desc: 'description'
    };

    array.each(token.tags, function (index, tag) {
        var type = map[tag.type] || tag.type;
        data[type] = type === 'description' ? tag.html : tag.string;
    });

    return tplDesc.render(data);
};

var parseForModuleUsage = function (token, ast) {
    var args = [];

    array.each(token.tags, function (index, tag) {
        if (tag.type === 'param') {
            args.push(tag.name);
        }
    });

    return tplUsage.render({
        flag: ast.moduleFlag,
        args: args.join(', '),
        name: token.ctx.name,
        description: token.full
    });
};

var parseForModuleParams = function (token, ast) {
    var params = [];

    array.each(token.tags, function (index, tag) {
        if (tag.type === 'param') {
            var param = object.assign({
                description: '暂无描述',
                types: [],
                default: 'undefined'
            }, tag);

            if (tag.optional) {
                // [param=default]
                var nameArr = tag.name.replace(/^\[|]$/g, '').split('=');
                param.name = nameArr[0].slice(1);
                param.default = nameArr[1] || '未指定';
            }

            params.push(param);
        }
    });

    return tplParams.render({
        params: params
    });
};

var parseForModuleReturns = function (token, ast) {
    var returns = [];
    array.each(token.tags, function (index, tag) {
        if (tag.type === 'return' || tag.type === 'returns') {
            returns.push({
                types: tag.types,
                description: tag.description
            });
        }
    });

    return tplReturns.render({
        returns: returns
    });
};

var parseForModuleExamples = function (token, ast) {
    var examples = [];
    array.each(token.tags, function (index, tag) {
        if (tag.type === 'example' || tag.type === 'examples') {
            examples.push(tag.string);
        }
    });

    return tplExamples.render({
        examples: examples
    });
};

// 3、根据注释生成文档片段
var generateAstToFragment = function (astList) {
    var hasDesc = false;
    array.each(astList, function (index, ast) {
        var wf = path.resolve(configs.root, 'docs', ast.dirname, ast.filename + '.html');
        var md = '';

        md += parseForModuleRequires(ast);

        array.each(ast.ast, function (index, token) {

            if (token.ctx) {
                md += parseForModuleUsage(token, ast);
                md += parseForModuleExamples(token, ast);
                md += parseForModuleParams(token, ast);
                md += parseForModuleReturns(token, ast);
            } else if (!hasDesc) {
                hasDesc = true;
                md += parseForModuleDesc(token, ast);
            }
        });

        console.info(wf);
        fse.outputFileSync(wf, md, 'utf8');
    });
};

// 4、根据文档片段顺序和其他 markdown 文件，生成最后的站点


// =====================================
plan
    .taskSync(function () {
        return findModulesFiles();
    })
    .taskSync(function (files) {
        return parseSourceComment(files);
    })
    .taskSync(function (astList) {
        return generateAstToFragment(astList);
    })
    .serial();


