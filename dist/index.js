!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("prop-types"),require("react-router-dom"),require("react-dom"),require("noop"),require("object-assign")):"function"==typeof define&&define.amd?define(["react","classnames","prop-types","react-router-dom","react-dom","noop","object-assign"],t):"object"==typeof exports?exports.BoilerplateReactComponent=t(require("react"),require("classnames"),require("prop-types"),require("react-router-dom"),require("react-dom"),require("noop"),require("object-assign")):e.BoilerplateReactComponent=t(e.react,e.classnames,e["prop-types"],e["react-router-dom"],e["react-dom"],e.noop,e["object-assign"])}(window,function(e,t,r,n,o,a,u){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=(r(4),r(2)),u=r.n(a),c=r(1),i=r.n(c),f=(r(5),r(6),r(3));function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,m(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=s(e,["className"]);return o.a.createElement("div",p({className:i()("react-route-tab",t)},r))}}])&&y(r.prototype,n),a&&y(r,a),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}h.displayName="react-route-tab";var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,_(t).apply(this,arguments))}var r,a,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.headerExtra,n=e.bodyExtra,a=(e.children,e.type),u=j(e,["className","headerExtra","bodyExtra","children","type"]),c=this.items;return o.a.createElement("section",v({className:i()("react-route-tabs",t)},u),o.a.createElement(f.HashRouter,null,o.a.createElement("header",{className:i()("".concat("react-route-tabs","__header"))},o.a.createElement("nav",null,c.map(function(e){e.title;var t=j(e,["title"]),r="nav"===a?f.NavLink:f.Link;return o.a.createElement(r,v({key:e.to},t),e.title)})),r),o.a.createElement("div",{className:i()("".concat("react-route-tabs","__body"))},c.map(function(e){return o.a.createElement(f.Route,{key:e.to,path:e.to,component:function(){return o.a.createElement(h,{className:"".concat("react-route-tabs","__content"),children:e.children})}})}),n)))}},{key:"items",get:function(){var e=this.props.children;return o.a.Children.map(e,function(e){return console.log(e.props),e.props})}}])&&g(r.prototype,a),u&&g(r,u),t}();E.displayName="react-route-tabs",E.propTypes={className:u.a.string,type:u.a.oneOf(["nav","link"]),headerExtra:u.a.element,bodyExtra:u.a.element},E.defaultProps={type:"nav"},r.d(t,"ReactRouteTabs",function(){return E}),r.d(t,"ReactRouteTab",function(){return h})}])});