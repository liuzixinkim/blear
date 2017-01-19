/**
 * 文件描述
 * @author ydr.me
 * @created 2017-01-13 17:46
 */


'use strict';


var Mask = require('blear.ui.mask');
var selector = require('blear.core.selector');
var event = require('blear.core.event');
var attribute = require('blear.core.attribute');
var transform = require('blear.core.transform');
var UI = require('blear.ui');

require('blear.core.touch');

var buildSidebar = function () {
    var mask = new Mask();
    var navEl = selector.query('#nav')[0];
    var sidebarToggleEl = selector.query('#sidebarToggle')[0];
    var active = false;
    var activeClassName = 'active';

    mask.on('open', function () {
        attribute.style(navEl, 'zIndex', UI.zIndex());
    });

    mask.on('hit', function () {
        transform.transit(navEl, {
            transform: {
                translateX: '-100%'
            }
        }, {
            duration: 345
        });
        mask.close();
    });

    event.on(sidebarToggleEl, 'click', function () {
        mask.open(function () {
            transform.transit(navEl, {
                transform: {
                    translateX: 0
                }
            }, {
                duration: 345
            });
            attribute.addClass(navEl, activeClassName);
        });
        active = !active;
    });
};


// ============================================================
buildSidebar();

