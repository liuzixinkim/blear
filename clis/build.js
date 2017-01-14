/**
 * 生成文档内的模块描述
 * @author ydr.me
 * @created 2017-01-13 16:38
 */


'use strict';

var fse = require('fs-extra');
var path = require('blear.node.path');
var console = require('blear.node.console');
var plan = require('blear.utils.plan');
var array = require('blear.utils.array');

var configs = require('../configs');

var githubBlearjsDirname = path.join(configs.root, '..');

plan
    .taskSync(function () {
        var folders = [
            'classes', 'components', 'core',
            'css', 'express', 'node',
            'scss', 'ui', 'utils'
        ];
        return array.map(folders, function (fold) {
            return fold + '/**/*.md';
        });
    })
    .taskSync(function (files) {
        return path.glob(files, {
            srcDirname: configs.bookroot
        });
    })
    .taskSync(function (files) {
        var descCommentRE = /^\/\*\*\s*$([\s\S]*?)^\s*\*\/\s$/m;
        var flagRE = /^\s*\*\s*/;
        var lineRE = /^@([^\s]+)\s*(.*)$/;
        var modulesData = {};

        array.each(files, function (index, file) {
            var dirname = path.basename(path.dirname(file));
            var basename = path.basename(file, '.md');
            var moduleName = ['blear', dirname, basename].join('.');
            var indexFile = dirname === 'css' || dirname === 'scss' ? 'index.scss' : 'index.js';
            var pkgFile = path.join(githubBlearjsDirname, moduleName, 'package.json');
            var moduleFile = path.join(githubBlearjsDirname, moduleName, 'src', indexFile);
            var moduleData = fse.readFileSync(moduleFile, 'utf8');
            var matchedComment = moduleData.match(descCommentRE);
            var descCommentList = matchedComment ? matchedComment[1].split('\n') : [];
            var json = {};
            var pkg = fse.readJSONSync(pkgFile);

            array.each(descCommentList, function (index, line) {
                line = line.replace(flagRE, '');

                var mathes = line.match(lineRE);

                if (!mathes) {
                    return;
                }

                var key = mathes[1].trim();

                if (/create/.test(key)) {
                    json.create = mathes[2].trim();
                }

                if (/update/.test(key)) {
                    json.update = mathes[2].trim();
                }
            });

            if (!json.update) {
                json.update = json.create;
            }

            if (!json.create) {
                json.create = json.update;
            }

            json.create = json.create || '未明确';
            json.update = json.update || '未明确';
            json.name = pkg.name;
            json.version = pkg.version;
            json.github = pkg.repository.url;
            json.keywords = pkg.keywords;
            json.description = pkg.description;
            json.dependencies = pkg.dependencies;
            modulesData[moduleName] = json;
            console.info('[build]', moduleName);
        });

        return modulesData;
    })
    .taskSync(function (modulesData) {
        var jsonFile = path.join(configs.bookroot, 'modules.json');
        fse.outputJSONSync(jsonFile, modulesData);
    })
    .serial()
    .catch(function (err) {
        console.error(err);
    });







