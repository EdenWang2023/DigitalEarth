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
define(["exports","./defined-b681f02d"],(function(e,t){"use strict";function n(e){let t;this.name="DeveloperError",this.message=e;try{throw new Error}catch(e){t=e.stack}this.stack=t}t.defined(Object.create)&&(n.prototype=Object.create(Error.prototype),n.prototype.constructor=n),n.prototype.toString=function(){let e=`${this.name}: ${this.message}`;return t.defined(this.stack)&&(e+=`\n${this.stack.toString()}`),e},n.throwInstantiationError=function(){throw new n("This function defines an interface and should not be called directly.")};const o={};function r(e,t,n){return`Expected ${n} to be typeof ${t}, actual typeof was ${e}`}o.typeOf={},o.defined=function(e,o){if(!t.defined(o))throw new n(function(e){return`${e} is required, actual value was undefined`}(e))},o.typeOf.func=function(e,t){if("function"!=typeof t)throw new n(r(typeof t,"function",e))},o.typeOf.string=function(e,t){if("string"!=typeof t)throw new n(r(typeof t,"string",e))},o.typeOf.number=function(e,t){if("number"!=typeof t)throw new n(r(typeof t,"number",e))},o.typeOf.number.lessThan=function(e,t,r){if(o.typeOf.number(e,t),t>=r)throw new n(`Expected ${e} to be less than ${r}, actual value was ${t}`)},o.typeOf.number.lessThanOrEquals=function(e,t,r){if(o.typeOf.number(e,t),t>r)throw new n(`Expected ${e} to be less than or equal to ${r}, actual value was ${t}`)},o.typeOf.number.greaterThan=function(e,t,r){if(o.typeOf.number(e,t),t<=r)throw new n(`Expected ${e} to be greater than ${r}, actual value was ${t}`)},o.typeOf.number.greaterThanOrEquals=function(e,t,r){if(o.typeOf.number(e,t),t<r)throw new n(`Expected ${e} to be greater than or equal to ${r}, actual value was ${t}`)},o.typeOf.object=function(e,t){if("object"!=typeof t)throw new n(r(typeof t,"object",e))},o.typeOf.bool=function(e,t){if("boolean"!=typeof t)throw new n(r(typeof t,"boolean",e))},o.typeOf.bigint=function(e,t){if("bigint"!=typeof t)throw new n(r(typeof t,"bigint",e))},o.typeOf.number.equals=function(e,t,r,f){if(o.typeOf.number(e,r),o.typeOf.number(t,f),r!==f)throw new n(`${e} must be equal to ${t}, the actual values are ${r} and ${f}`)},e.Check=o,e.DeveloperError=n}));
