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
define(["exports","./Check-436535f3","./defined-b681f02d","./Math-5b6faca9"],(function(e,n,d,i){"use strict";const f=i.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,i,t){if(!d.defined(e))return;i=d.defaultValue(i,!1);const s=d.defined(t),u=e.length;if(u<2)return e;let c,r,l,a=e[0],h=0,o=-1;for(c=1;c<u;++c)r=e[c],n(a,r,f)?(d.defined(l)||(l=e.slice(0,c),h=c-1,o=0),s&&t.push(c)):(d.defined(l)&&(l.push(r),h=c,s&&(o=t.length)),a=r);return i&&n(e[0],e[u-1],f)&&(s&&(d.defined(l)?t.splice(o,0,h):t.push(u-1)),d.defined(l)?l.length-=1:l=e.slice(0,-1)),d.defined(l)?l:e}}));
