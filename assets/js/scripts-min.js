!function(){return function e(t,n,o){function r(c,i){if(!n[c]){if(!t[c]){var s="function"==typeof require&&require;if(!i&&s)return s(c,!0);if(u)return u(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=n[c]={exports:{}};t[c][0].call(l.exports,function(e){return r(t[c][1][e]||e)},l,l.exports,e,t,n,o)}return n[c].exports}for(var u="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}}()({1:[function(e,t,n){"use strict";(0,e("./modules/topNav").topNav)(),document.body.classList.contains("home")||document.body.classList.contains("page2")||document.body.classList.contains("page3")||document.body.classList.contains("page4")},{"./modules/topNav":2}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.topNav=function(){document.querySelector(".hamburger").addEventListener("click",function(e){e.preventDefault(),[].map.call(document.querySelectorAll(".hamburger"),function(e){e.classList.toggle("is-active")}),[].map.call(document.querySelectorAll(".top-nav__menu"),function(e){e.classList.toggle("show-top-nav")})})}},{}]},{},[1]);
//# sourceMappingURL=scripts-min.js.map
