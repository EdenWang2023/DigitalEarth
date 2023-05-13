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

define(["./when-14cc665a","./createTaskProcessorWorker"],function(C,h){"use strict";function d(a){for(var c=a.width,r=a.height,e=Math.ceil(a.radius),n=1-a.blur,v=new OffscreenCanvas(c,r),t=v.getContext("2d"),u=f(e,n),g=a.data,w=g.length,o=0;o<w;o++){var l=g[o];t.globalAlpha=l.value;var b=l.x-e,x=l.y-e;t.drawImage(u,b,x)}return{imageData:t.getImageData(0,0,c,r),radius:e}}function f(a,c){var r=new OffscreenCanvas(a*2,a*2),e=r.getContext("2d"),n=a,v=a;e.beginPath(),e.arc(n,v,a,0,2*Math.PI,!1);var t=e.createRadialGradient(n,v,a*c,n,v,a);return t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0.1)"),e.fillStyle=t,e.fill(),r}var i=h(d);return i});
