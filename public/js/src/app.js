'use strict';

require('babel/polyfill');


const _ = require('lodash');


$(function() {
    const paraFade = require('./para-fade');
    let $win  = $(window);


    require('./nospam')('.nospam-email-address');
    require('./header-anchors');
    require('./bootstrap-fixes');

    paraFade($win, '#welcome', 'header');





    let $nav = $('#navbar');
    const navHeight = $nav.height();

    let $nav2 = $nav
        .clone()
        .attr('id', 'nav2')
        .addClass('navbar-fixed-bottom')
        .css({
            bottom: '-' + navHeight + 'px'
        })
        .appendTo('body');


    $win.scroll(_.throttle(function() {
        const winScroll = $win.scrollTop();

        if (winScroll <= navHeight) {
            $nav2
                .css({
                    bottom: '-' + (navHeight - winScroll) + 'px'
                });
        }
        else {
            $nav2
                .css({
                    bottom: '0px'
                });
        }

    }, 1000 / 60));

});