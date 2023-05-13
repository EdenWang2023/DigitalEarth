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
define(["exports","./AxisAlignedBoundingBox-321a482b","./Matrix4-d3db9505","./Check-436535f3","./defined-b681f02d","./Rectangle-0610a1c7","./IntersectionTests-3ac7f0c9","./Plane-172c23d7","./Transforms-99c89742"],(function(t,n,e,i,o,r,s,a,l){"use strict";const c=new e.Cartesian4;function d(t,n){t=(n=o.defaultValue(n,r.Ellipsoid.WGS84)).scaleToGeodeticSurface(t);const i=l.Transforms.eastNorthUpToFixedFrame(t,n);this._ellipsoid=n,this._origin=t,this._xAxis=e.Cartesian3.fromCartesian4(e.Matrix4.getColumn(i,0,c)),this._yAxis=e.Cartesian3.fromCartesian4(e.Matrix4.getColumn(i,1,c));const s=e.Cartesian3.fromCartesian4(e.Matrix4.getColumn(i,2,c));this._plane=a.Plane.fromPointNormal(t,s)}Object.defineProperties(d.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});const f=new n.AxisAlignedBoundingBox;d.fromPoints=function(t,e){return new d(n.AxisAlignedBoundingBox.fromPoints(t,f).center,e)};const p=new s.Ray,u=new e.Cartesian3;d.prototype.projectPointOntoPlane=function(t,n){const i=p;i.origin=t,e.Cartesian3.normalize(t,i.direction);let r=s.IntersectionTests.rayPlane(i,this._plane,u);if(o.defined(r)||(e.Cartesian3.negate(i.direction,i.direction),r=s.IntersectionTests.rayPlane(i,this._plane,u)),o.defined(r)){const t=e.Cartesian3.subtract(r,this._origin,r),i=e.Cartesian3.dot(this._xAxis,t),s=e.Cartesian3.dot(this._yAxis,t);return o.defined(n)?(n.x=i,n.y=s,n):new e.Cartesian2(i,s)}},d.prototype.projectPointsOntoPlane=function(t,n){o.defined(n)||(n=[]);let e=0;const i=t.length;for(let r=0;r<i;r++){const i=this.projectPointOntoPlane(t[r],n[e]);o.defined(i)&&(n[e]=i,e++)}return n.length=e,n},d.prototype.projectPointToNearestOnPlane=function(t,n){o.defined(n)||(n=new e.Cartesian2);const i=p;i.origin=t,e.Cartesian3.clone(this._plane.normal,i.direction);let r=s.IntersectionTests.rayPlane(i,this._plane,u);o.defined(r)||(e.Cartesian3.negate(i.direction,i.direction),r=s.IntersectionTests.rayPlane(i,this._plane,u));const a=e.Cartesian3.subtract(r,this._origin,r),l=e.Cartesian3.dot(this._xAxis,a),c=e.Cartesian3.dot(this._yAxis,a);return n.x=l,n.y=c,n},d.prototype.projectPointsToNearestOnPlane=function(t,n){o.defined(n)||(n=[]);const e=t.length;n.length=e;for(let i=0;i<e;i++)n[i]=this.projectPointToNearestOnPlane(t[i],n[i]);return n};const h=new e.Cartesian3;d.prototype.projectPointOntoEllipsoid=function(t,n){o.defined(n)||(n=new e.Cartesian3);const i=this._ellipsoid,r=this._origin,s=this._xAxis,a=this._yAxis,l=h;return e.Cartesian3.multiplyByScalar(s,t.x,l),n=e.Cartesian3.add(r,l,n),e.Cartesian3.multiplyByScalar(a,t.y,l),e.Cartesian3.add(n,l,n),i.scaleToGeocentricSurface(n,n),n},d.prototype.projectPointsOntoEllipsoid=function(t,n){const e=t.length;o.defined(n)?n.length=e:n=new Array(e);for(let i=0;i<e;++i)n[i]=this.projectPointOntoEllipsoid(t[i],n[i]);return n},t.EllipsoidTangentPlane=d}));
