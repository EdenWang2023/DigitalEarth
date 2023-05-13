/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

define(["exports"],function(b){"use strict";function k(n,e){return n??e}k.EMPTY_OBJECT=Object.freeze({});function Y(n){return n!=null}/**
    @license
    when.js - https://github.com/cujojs/when

    MIT License (c) copyright B Cavalier & J Hann

   * A lightweight CommonJS Promises/A and when() implementation
   * when is part of the cujo.js family of libraries (http://cujojs.com/)
   *
   * Licensed under the MIT License at:
   * http://www.opensource.org/licenses/mit-license.php
   *
   * @version 1.7.1
   */var H,z,E;f.defer=_,f.resolve=w,f.reject=q,f.join=G,f.all=C,f.map=P,f.reduce=I,f.any=D,f.some=B,f.chain=K,f.isPromise=A;function f(n,e,t,r){return w(n).then(e,t,r)}function w(n){var e,t;return n instanceof R?e=n:A(n)?(t=_(),n.then(function(r){t.resolve(r)},function(r){t.reject(r)},function(r){t.progress(r)}),e=t.promise):e=x(n),e}function q(n){return f(n,y)}function R(n){this.then=n}R.prototype={always:function(n,e){return this.then(n,n,e)},otherwise:function(n){return this.then(E,n)},yield:function(n){return this.then(function(){return n})},spread:function(n){return this.then(function(e){return C(e,function(t){return n.apply(E,t)})})}};function x(n){var e=new R(function(t){try{return w(t?t(n):n)}catch(r){return y(r)}});return e}function y(n){var e=new R(function(t,r){try{return r?w(r(n)):y(n)}catch(u){return y(u)}});return e}function _(){var n,e,t,r,u,i,s;return e=new R(h),n={then:h,resolve:c,reject:d,progress:p,promise:e,resolver:{resolve:c,reject:d,progress:p}},t=[],r=[],u=function(o,a,v){var l,g;return l=_(),g=typeof v=="function"?function(m){try{l.progress(v(m))}catch(T){l.progress(T)}}:function(m){l.progress(m)},t.push(function(m){m.then(o,a).then(l.resolve,l.reject,g)}),r.push(g),l.promise},i=function(o){return J(r,o),o},s=function(o){return o=w(o),u=o.then,s=w,i=M,J(t,o),r=t=E,o},n;function h(o,a,v){return u(o,a,v)}function c(o){return s(o)}function d(o){return s(y(o))}function p(o){return i(o)}}function A(n){return n&&typeof n.then=="function"}function B(n,e,t,r,u){return Q(2,arguments),f(n,function(i){var s,h,c,d,p,o,a,v,l,g;if(l=i.length>>>0,s=Math.max(0,Math.min(e,l)),c=[],h=l-s+1,d=[],p=_(),!s)p.resolve(c);else for(v=p.progress,a=function(j){d.push(j),--h||(o=a=M,p.reject(d))},o=function(j){c.push(j),--s||(o=a=M,p.resolve(c))},g=0;g<l;++g)g in i&&f(i[g],T,m,v);return p.then(t,r,u);function m(j){a(j)}function T(j){o(j)}})}function D(n,e,t,r){function u(i){return e?e(i[0]):i[0]}return B(n,1,u,t,r)}function C(n,e,t,r){return Q(1,arguments),P(n,S).then(e,t,r)}function G(){return P(arguments,S)}function P(n,e){return f(n,function(t){var r,u,i,s,h,c;if(i=u=t.length>>>0,r=[],c=_(),!i)c.resolve(r);else for(s=function(p,o){f(p,e).then(function(a){r[o]=a,--i||c.resolve(r)},c.reject)},h=0;h<u;h++)h in t?s(t[h],h):--i;return c.promise})}function I(n,e){var t=z.call(arguments,1);return f(n,function(r){var u;return u=r.length,t[0]=function(i,s,h){return f(i,function(c){return f(s,function(d){return e(c,d,h,u)})})},H.apply(r,t)})}function K(n,e,t){var r=arguments.length>2;return f(n,function(u){return u=r?t:u,e.resolve(u),u},function(u){return e.reject(u),y(u)},e.progress)}function J(n,e){for(var t,r=0;t=n[r++];)t(e)}function Q(n,e){for(var t,r=e.length;r>n;)if(t=e[--r],t!=null&&typeof t!="function")throw new Error("arg "+r+" must be a function")}function M(){}z=[].slice,H=[].reduce||function(n){var e,t,r,u,i;if(i=0,e=Object(this),u=e.length>>>0,t=arguments,t.length<=1)for(;;){if(i in e){r=e[i++];break}if(++i>=u)throw new TypeError}else r=t[1];for(;i<u;++i)i in e&&(r=n(r,e[i],i,e));return r};function S(n){return n}b.defaultValue=k,b.defined=Y,b.when=f});
