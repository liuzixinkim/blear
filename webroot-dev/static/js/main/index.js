/**
 * 首页
 * @author ydr.me
 * @created 2017-01-13 17:46
 */


'use strict';


var Mask = require('blear.ui.mask');
var selector = require('blear.core.selector');
var event = require('blear.core.event');
var attribute = require('blear.core.attribute');
var transform = require('blear.core.transform');
var animation = require('blear.core.animation');
var layout = require('blear.core.layout');
var UI = require('blear.ui');
var tips = require('blear.components.tips');
var array = require('blear.utils.array');
var random = require('blear.utils.random');
var url = require('blear.utils.url');

require('blear.core.touch');

var api = require('../utils/api');
var highlight = require('../common/highlight.pack');

var win = window;

// 侧边栏
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

// 高亮代码
var buildHightlightPre = function () {
    var els = selector.query('#content pre');
    array.each(els, function (index, el) {
        highlight.highlightBlock(el);
    });
};

// 进度
var progress = (function () {
    var progressEl = selector.query('#progress')[0];
    var setWidth = function (percentage) {
        attribute.style(progressEl, 'width', percentage + '%');
    };
    var hideTimer;
    var percentage = 0;
    var runTimer;
    var run = function () {
        var timeout = random.number(50, 500);

        runTimer = setTimeout(function () {
            percentage += random.number(1, 10);

            if (percentage >= 100) {
                percentage = 100;
            }

            setWidth(percentage);
            run();
        }, timeout);
    };

    return {
        start: function () {
            clearTimeout(hideTimer);
            clearTimeout(runTimer);
            percentage = 10;
            setWidth(10);
            run();
            attribute.show(progressEl);
        },

        stop: function () {
            clearTimeout(hideTimer);
            clearTimeout(runTimer);
            setWidth(100);
            hideTimer = setTimeout(function () {
                attribute.hide(progressEl);
            }, 400);
        }
    };
}());

// 滚动到指定位置
var scrollTo = function () {
    var st = 0;
    var hash = location.hash;
    // 默认目标为 hash 值对应点
    var targetEl = selector.query(hash)[0];

    if (targetEl) {
        st = layout.offsetTop(targetEl) - 20;
    }

    animation.animate(win, {
        scrollTop: st
    });
};

// 快捷访问
var buildQuickAccess = function () {
    var titleEl = selector.query('#title')[0];
    var tocEl = selector.query('#toc')[0];
    var contentEl = selector.query('#content')[0];
    var pagePathname = location.pathname;

    var loadPage = function (href) {
        var pathname = url.parse(href).pathname;

        if (pathname === pagePathname) {
            return;
        }

        pagePathname = pathname;
        progress.start();
        api({
            url: href
        }, function (err, ret) {
            progress.stop();

            if (err) {
                return tips.danger(err);
            }

            var book = ret.book;
            var page = ret.page;

            document.title = (page.uri === '/' ? '' : page.title + ' - ') + book.title;
            attribute.html(titleEl, page.title);
            attribute.html(tocEl, page.toc);
            attribute.html(contentEl, page.content);
            scrollTo();
            buildHightlightPre();
        });
    };

    event.on(window, 'popstate', function (ev) {
        loadPage(location.href);
    });

    event.on(document, 'click', '.jPjax', function () {
        var href = this.href;

        history.pushState(null, '', href);
        loadPage(href);

        return false;
    });
};

// ============================================================
buildSidebar();
buildQuickAccess();
buildHightlightPre();

