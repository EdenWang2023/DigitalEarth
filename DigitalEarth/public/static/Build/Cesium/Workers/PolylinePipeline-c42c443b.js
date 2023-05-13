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
define(["exports","./Matrix4-d3db9505","./defined-b681f02d","./Check-436535f3","./Rectangle-0610a1c7","./EllipsoidGeodesic-bd79a412","./EllipsoidRhumbLine-65d4aeca","./IntersectionTests-3ac7f0c9","./Math-5b6faca9","./Plane-172c23d7"],(function(e,t,a,n,i,r,o,s,c,l){"use strict";const u={numberOfPoints:function(e,a,n){const i=t.Cartesian3.distance(e,a);return Math.ceil(i/n)},numberOfPointsRhumbLine:function(e,t,a){const n=Math.pow(e.longitude-t.longitude,2)+Math.pow(e.latitude-t.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(n/(a*a))))}},h=new t.Cartographic;u.extractHeights=function(e,t){const a=e.length,n=new Array(a);for(let i=0;i<a;i++){const a=e[i];n[i]=t.cartesianToCartographic(a,h).height}return n};const f=new t.Matrix4,g=new t.Cartesian3,d=new t.Cartesian3,C=new l.Plane(t.Cartesian3.UNIT_X,0),p=new t.Cartesian3,m=new l.Plane(t.Cartesian3.UNIT_X,0),w=new t.Cartesian3,P=new t.Cartesian3,T=[];function y(e,t,a){const n=T;let i;if(n.length=e,t===a){for(i=0;i<e;i++)n[i]=t;return n}const r=(a-t)/e;for(i=0;i<e;i++){const e=t+i*r;n[i]=e}return n}const A=new t.Cartographic,b=new t.Cartographic,E=new t.Cartesian3,R=new t.Cartesian3,M=new t.Cartesian3,S=new r.EllipsoidGeodesic;let x=new o.EllipsoidRhumbLine;function D(e,a,n,i,r,o,s,c){const l=i.scaleToGeodeticSurface(e,R),h=i.scaleToGeodeticSurface(a,M),f=u.numberOfPoints(e,a,n),g=i.cartesianToCartographic(l,A),d=i.cartesianToCartographic(h,b),C=y(f,r,o);S.setEndPoints(g,d);const p=S.surfaceDistance/f;let m=c;g.height=r;let w=i.cartographicToCartesian(g,E);t.Cartesian3.pack(w,s,m),m+=3;for(let e=1;e<f;e++){const a=S.interpolateUsingSurfaceDistance(e*p,b);a.height=C[e],w=i.cartographicToCartesian(a,E),t.Cartesian3.pack(w,s,m),m+=3}return m}function N(e,a,n,i,r,s,c,l){const h=i.cartesianToCartographic(e,A),f=i.cartesianToCartographic(a,b),g=u.numberOfPointsRhumbLine(h,f,n);h.height=0,f.height=0;const d=y(g,r,s);x.ellipsoid.equals(i)||(x=new o.EllipsoidRhumbLine(void 0,void 0,i)),x.setEndPoints(h,f);const C=x.surfaceDistance/g;let p=l;h.height=r;let m=i.cartographicToCartesian(h,E);t.Cartesian3.pack(m,c,p),p+=3;for(let e=1;e<g;e++){const a=x.interpolateUsingSurfaceDistance(e*C,b);a.height=d[e],m=i.cartographicToCartesian(a,E),t.Cartesian3.pack(m,c,p),p+=3}return p}u.wrapLongitude=function(e,n){const i=[],r=[];if(a.defined(e)&&e.length>0){n=a.defaultValue(n,t.Matrix4.IDENTITY);const o=t.Matrix4.inverseTransformation(n,f),c=t.Matrix4.multiplyByPoint(o,t.Cartesian3.ZERO,g),u=t.Cartesian3.normalize(t.Matrix4.multiplyByPointAsVector(o,t.Cartesian3.UNIT_Y,d),d),h=l.Plane.fromPointNormal(c,u,C),T=t.Cartesian3.normalize(t.Matrix4.multiplyByPointAsVector(o,t.Cartesian3.UNIT_X,p),p),y=l.Plane.fromPointNormal(c,T,m);let A=1;i.push(t.Cartesian3.clone(e[0]));let b=i[0];const E=e.length;for(let n=1;n<E;++n){const o=e[n];if(l.Plane.getPointDistance(y,b)<0||l.Plane.getPointDistance(y,o)<0){const e=s.IntersectionTests.lineSegmentPlane(b,o,h,w);if(a.defined(e)){const a=t.Cartesian3.multiplyByScalar(u,5e-9,P);l.Plane.getPointDistance(h,b)<0&&t.Cartesian3.negate(a,a),i.push(t.Cartesian3.add(e,a,new t.Cartesian3)),r.push(A+1),t.Cartesian3.negate(a,a),i.push(t.Cartesian3.add(e,a,new t.Cartesian3)),A=1}}i.push(t.Cartesian3.clone(e[n])),A++,b=o}r.push(A)}return{positions:i,lengths:r}},u.generateArc=function(e){a.defined(e)||(e={});const n=e.positions,r=n.length,o=a.defaultValue(e.ellipsoid,i.Ellipsoid.WGS84);let s=a.defaultValue(e.height,0);const l=Array.isArray(s);if(r<1)return[];if(1===r){const e=o.scaleToGeodeticSurface(n[0],R);if(s=l?s[0]:s,0!==s){const a=o.geodeticSurfaceNormal(e,E);t.Cartesian3.multiplyByScalar(a,s,a),t.Cartesian3.add(e,a,e)}return[e.x,e.y,e.z]}let h=e.minDistance;if(!a.defined(h)){const t=a.defaultValue(e.granularity,c.CesiumMath.RADIANS_PER_DEGREE);h=c.CesiumMath.chordLength(t,o.maximumRadius)}let f,g=0;for(f=0;f<r-1;f++)g+=u.numberOfPoints(n[f],n[f+1],h);const d=3*(g+1),C=new Array(d);let p=0;for(f=0;f<r-1;f++){p=D(n[f],n[f+1],h,o,l?s[f]:s,l?s[f+1]:s,C,p)}T.length=0;const m=n[r-1],w=o.cartesianToCartographic(m,A);w.height=l?s[r-1]:s;const P=o.cartographicToCartesian(w,E);return t.Cartesian3.pack(P,C,d-3),C};const G=new t.Cartographic,I=new t.Cartographic;u.generateRhumbArc=function(e){a.defined(e)||(e={});const n=e.positions,r=n.length,o=a.defaultValue(e.ellipsoid,i.Ellipsoid.WGS84);let s=a.defaultValue(e.height,0);const l=Array.isArray(s);if(r<1)return[];if(1===r){const e=o.scaleToGeodeticSurface(n[0],R);if(s=l?s[0]:s,0!==s){const a=o.geodeticSurfaceNormal(e,E);t.Cartesian3.multiplyByScalar(a,s,a),t.Cartesian3.add(e,a,e)}return[e.x,e.y,e.z]}const h=a.defaultValue(e.granularity,c.CesiumMath.RADIANS_PER_DEGREE);let f,g,d=0,C=o.cartesianToCartographic(n[0],G);for(f=0;f<r-1;f++)g=o.cartesianToCartographic(n[f+1],I),d+=u.numberOfPointsRhumbLine(C,g,h),C=t.Cartographic.clone(g,G);const p=3*(d+1),m=new Array(p);let w=0;for(f=0;f<r-1;f++){w=N(n[f],n[f+1],h,o,l?s[f]:s,l?s[f+1]:s,m,w)}T.length=0;const P=n[r-1],y=o.cartesianToCartographic(P,A);y.height=l?s[r-1]:s;const b=o.cartographicToCartesian(y,E);return t.Cartesian3.pack(b,m,p-3),m},u.generateCartesianArc=function(e){const a=u.generateArc(e),n=a.length/3,i=new Array(n);for(let e=0;e<n;e++)i[e]=t.Cartesian3.unpack(a,3*e);return i},u.generateCartesianRhumbArc=function(e){const a=u.generateRhumbArc(e),n=a.length/3,i=new Array(n);for(let e=0;e<n;e++)i[e]=t.Cartesian3.unpack(a,3*e);return i},e.PolylinePipeline=u}));
