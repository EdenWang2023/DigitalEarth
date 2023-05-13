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
define(["exports","./Math-5b6faca9"],(function(t,n){"use strict";const o={computePositions:function(t,o,e,s,r){const c=.5*t,i=-c,a=s+s,u=new Float64Array(3*(r?2*a:a));let f,h=0,y=0;const M=r?3*a:0,l=r?3*(a+s):3*s;for(f=0;f<s;f++){const t=f/s*n.CesiumMath.TWO_PI,a=Math.cos(t),m=Math.sin(t),b=a*e,d=m*e,p=a*o,C=m*o;u[y+M]=b,u[y+M+1]=d,u[y+M+2]=i,u[y+l]=p,u[y+l+1]=C,u[y+l+2]=c,y+=3,r&&(u[h++]=b,u[h++]=d,u[h++]=i,u[h++]=p,u[h++]=C,u[h++]=c)}return u}};t.CylinderGeometryLibrary=o}));
