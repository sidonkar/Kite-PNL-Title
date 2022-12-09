// ==UserScript==
// @name         PnL Title
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Onkar
// @match        https://kite.zerodha.com/*
// @match        https://kite.zerodha.com/positions
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zerodha.com
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';
 /*   var observer=new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            var title = ""
            title=document.querySelector("section.open-positions.table-wrapper div div table tfoot tr td:nth-child(4)")?document.querySelector("section.open-positions.table-wrapper div div table tfoot tr td:nth-child(4)").textContent+" // "+document.querySelector("section.day-positions.table-wrapper div div table tfoot tr td:nth-child(3)").textContent:""
            document.title=title;
        });
    });
    var config = {
        characterData: true,
        subtree: true,
        childList: true
    };
    //need time out for dom to get constructed
    setTimeout(()=>observer.observe(document.querySelector("section.open-positions.table-wrapper div div table tfoot tr td:nth-child(4)"),config),5000);
    setPnlTitle()
---------------
    (new MutationObserver(check)).observe(document, {childList: true, subtree: true});

    function check(changes, observer) {
        if(document.querySelector(elementSelector.positionLabelSelector)) {
            observer.disconnect();
            document.querySelector(elementSelector.positionLabelSelector).addEventListener("click ", setPnlTitle);
        }
    }



*/
    var observer=null,mutationConfig = {
        characterData: true,
        subtree: true,
        childList: true
    };
    var elementSelector = {
        openPositionPnLSelector : "section.open-positions.table-wrapper div div table tfoot tr td:nth-child(4)",
        dayPnLSelector : "section.day-positions.table-wrapper div div table tfoot tr td:nth-child(3)",
        positionLabelSelector : "section.open-positions.table-wrapper header .page-title"
    };
    function setPnlTitle(){
        observer?observer.disconnect():"";
        observer=new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                var title = ""
                title=document.querySelector(elementSelector.openPositionPnLSelector)?document.querySelector(elementSelector.openPositionPnLSelector).textContent+"|"+document.querySelector(elementSelector.dayPnLSelector).textContent:""
                document.title=title;
            });
        });

        //need time out for dom to get constructed
        setTimeout(()=>observer.observe(document.querySelector(elementSelector.openPositionPnLSelector),mutationConfig),2000);
    }
    setPnlTitle();
})();
