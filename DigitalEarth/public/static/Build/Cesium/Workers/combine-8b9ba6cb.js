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
define(["exports","./defined-b681f02d"],(function(e,n){"use strict";e.combine=function e(t,o,f){f=n.defaultValue(f,!1);const r={},i=n.defined(t),d=n.defined(o);let s,c,p;if(i)for(s in t)t.hasOwnProperty(s)&&(c=t[s],d&&f&&"object"==typeof c&&o.hasOwnProperty(s)?(p=o[s],r[s]="object"==typeof p?e(c,p,f):c):r[s]=c);if(d)for(s in o)o.hasOwnProperty(s)&&!r.hasOwnProperty(s)&&(p=o[s],r[s]=p);return r}}));
