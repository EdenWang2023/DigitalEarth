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
define(["./defined-b681f02d","./Transforms-99c89742","./Matrix4-d3db9505","./Check-436535f3","./ComponentDatatype-46a1cf7a","./FrustumGeometry-147a767e","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./Rectangle-0610a1c7","./Math-5b6faca9","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./Plane-172c23d7","./VertexFormat-1359575c","./Matrix2-7384588e"],(function(e,t,r,n,a,i,u,o,c,s,p,m,d,f,h,g,l,_,k){"use strict";function y(n){const a=n.frustum,u=n.orientation,o=n.origin,c=e.defaultValue(n._drawNearPlane,!0);let s,p;a instanceof i.PerspectiveFrustum?(s=0,p=i.PerspectiveFrustum.packedLength):a instanceof i.OrthographicFrustum&&(s=1,p=i.OrthographicFrustum.packedLength),this._frustumType=s,this._frustum=a.clone(),this._origin=r.Cartesian3.clone(o),this._orientation=t.Quaternion.clone(u),this._drawNearPlane=c,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+p+r.Cartesian3.packedLength+t.Quaternion.packedLength}y.pack=function(n,a,u){u=e.defaultValue(u,0);const o=n._frustumType,c=n._frustum;return a[u++]=o,0===o?(i.PerspectiveFrustum.pack(c,a,u),u+=i.PerspectiveFrustum.packedLength):(i.OrthographicFrustum.pack(c,a,u),u+=i.OrthographicFrustum.packedLength),r.Cartesian3.pack(n._origin,a,u),u+=r.Cartesian3.packedLength,t.Quaternion.pack(n._orientation,a,u),a[u+=t.Quaternion.packedLength]=n._drawNearPlane?1:0,a};const F=new i.PerspectiveFrustum,b=new i.OrthographicFrustum,w=new t.Quaternion,P=new r.Cartesian3;return y.unpack=function(n,a,u){a=e.defaultValue(a,0);const o=n[a++];let c;0===o?(c=i.PerspectiveFrustum.unpack(n,a,F),a+=i.PerspectiveFrustum.packedLength):(c=i.OrthographicFrustum.unpack(n,a,b),a+=i.OrthographicFrustum.packedLength);const s=r.Cartesian3.unpack(n,a,P);a+=r.Cartesian3.packedLength;const p=t.Quaternion.unpack(n,a,w),m=1===n[a+=t.Quaternion.packedLength];if(!e.defined(u))return new y({frustum:c,origin:s,orientation:p,_drawNearPlane:m});const d=o===u._frustumType?u._frustum:void 0;return u._frustum=c.clone(d),u._frustumType=o,u._origin=r.Cartesian3.clone(s,u._origin),u._orientation=t.Quaternion.clone(p,u._orientation),u._drawNearPlane=m,u},y.createGeometry=function(e){const r=e._frustumType,n=e._frustum,c=e._origin,s=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);i.FrustumGeometry._computeNearFarPlanes(c,s,r,n,m);const d=new o.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let f,h;const g=p?2:1,l=new Uint16Array(8*(g+1));let _=p?0:1;for(;_<2;++_)f=p?8*_:0,h=4*_,l[f]=h,l[f+1]=h+1,l[f+2]=h+1,l[f+3]=h+2,l[f+4]=h+2,l[f+5]=h+3,l[f+6]=h+3,l[f+7]=h;for(_=0;_<2;++_)f=8*(g+_),h=4*_,l[f]=h,l[f+1]=h+4,l[f+2]=h+1,l[f+3]=h+5,l[f+4]=h+2,l[f+5]=h+6,l[f+6]=h+3,l[f+7]=h+7;return new u.Geometry({attributes:d,indices:l,primitiveType:u.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=y.unpack(t,r)),y.createGeometry(t)}}));
