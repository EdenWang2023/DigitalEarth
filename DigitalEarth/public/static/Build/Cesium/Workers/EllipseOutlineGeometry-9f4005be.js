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
define(["exports","./Transforms-99c89742","./Matrix4-d3db9505","./ComponentDatatype-46a1cf7a","./defined-b681f02d","./Check-436535f3","./EllipseGeometryLibrary-b010fa13","./Rectangle-0610a1c7","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./IndexDatatype-1b44a4e6","./Math-5b6faca9"],(function(e,t,i,r,n,a,o,s,l,u,c,d,f){"use strict";const p=new i.Cartesian3;let m=new i.Cartesian3;const h=new t.BoundingSphere,y=new t.BoundingSphere;function b(e){const t=(e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT)).center,r=n.defaultValue(e.ellipsoid,s.Ellipsoid.WGS84),a=e.semiMajorAxis,o=e.semiMinorAxis,l=n.defaultValue(e.granularity,f.CesiumMath.RADIANS_PER_DEGREE),u=n.defaultValue(e.height,0),c=n.defaultValue(e.extrudedHeight,u);this._center=i.Cartesian3.clone(t),this._semiMajorAxis=a,this._semiMinorAxis=o,this._ellipsoid=s.Ellipsoid.clone(r),this._rotation=n.defaultValue(e.rotation,0),this._height=Math.max(c,u),this._granularity=l,this._extrudedHeight=Math.min(c,u),this._numberOfVerticalLines=Math.max(n.defaultValue(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}b.packedLength=i.Cartesian3.packedLength+s.Ellipsoid.packedLength+8,b.pack=function(e,t,r){return r=n.defaultValue(r,0),i.Cartesian3.pack(e._center,t,r),r+=i.Cartesian3.packedLength,s.Ellipsoid.pack(e._ellipsoid,t,r),r+=s.Ellipsoid.packedLength,t[r++]=e._semiMajorAxis,t[r++]=e._semiMinorAxis,t[r++]=e._rotation,t[r++]=e._height,t[r++]=e._granularity,t[r++]=e._extrudedHeight,t[r++]=e._numberOfVerticalLines,t[r]=n.defaultValue(e._offsetAttribute,-1),t};const A=new i.Cartesian3,_=new s.Ellipsoid,g={center:A,ellipsoid:_,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};b.unpack=function(e,t,r){t=n.defaultValue(t,0);const a=i.Cartesian3.unpack(e,t,A);t+=i.Cartesian3.packedLength;const o=s.Ellipsoid.unpack(e,t,_);t+=s.Ellipsoid.packedLength;const l=e[t++],u=e[t++],c=e[t++],d=e[t++],f=e[t++],p=e[t++],m=e[t++],h=e[t];return n.defined(r)?(r._center=i.Cartesian3.clone(a,r._center),r._ellipsoid=s.Ellipsoid.clone(o,r._ellipsoid),r._semiMajorAxis=l,r._semiMinorAxis=u,r._rotation=c,r._height=d,r._granularity=f,r._extrudedHeight=p,r._numberOfVerticalLines=m,r._offsetAttribute=-1===h?void 0:h,r):(g.height=d,g.extrudedHeight=p,g.granularity=f,g.rotation=c,g.semiMajorAxis=l,g.semiMinorAxis=u,g.numberOfVerticalLines=m,g.offsetAttribute=-1===h?void 0:h,new b(g))},b.createGeometry=function(e){if(e._semiMajorAxis<=0||e._semiMinorAxis<=0)return;const a=e._height,s=e._extrudedHeight,b=!f.CesiumMath.equalsEpsilon(a,s,0,f.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);const A={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:a,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines};let _;if(b)A.extrudedHeight=s,A.offsetAttribute=e._offsetAttribute,_=function(e){const a=e.center,s=e.ellipsoid,m=e.semiMajorAxis;let b=i.Cartesian3.multiplyByScalar(s.geodeticSurfaceNormal(a,p),e.height,p);h.center=i.Cartesian3.add(a,b,h.center),h.radius=m,b=i.Cartesian3.multiplyByScalar(s.geodeticSurfaceNormal(a,b),e.extrudedHeight,b),y.center=i.Cartesian3.add(a,b,y.center),y.radius=m;let A=o.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions;const _=new u.GeometryAttributes({position:new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o.EllipseGeometryLibrary.raisePositionsToHeight(A,e,!0)})});A=_.position.values;const g=t.BoundingSphere.union(h,y);let x=A.length/3;if(n.defined(e.offsetAttribute)){let t=new Uint8Array(x);if(e.offsetAttribute===c.GeometryOffsetAttribute.TOP)t=t.fill(1,0,x/2);else{const i=e.offsetAttribute===c.GeometryOffsetAttribute.NONE?0:1;t=t.fill(i)}_.applyOffset=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}let E=n.defaultValue(e.numberOfVerticalLines,16);E=f.CesiumMath.clamp(E,0,x/2);const M=d.IndexDatatype.createTypedArray(x,2*x+2*E);x/=2;let C,G,L=0;for(C=0;C<x;++C)M[L++]=C,M[L++]=(C+1)%x,M[L++]=C+x,M[L++]=(C+1)%x+x;if(E>0){const e=Math.min(E,x);G=Math.round(x/e);const t=Math.min(G*E,x);for(C=0;C<t;C+=G)M[L++]=C,M[L++]=C+x}return{boundingSphere:g,attributes:_,indices:M}}(A);else if(_=function(e){const n=e.center;m=i.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(n,m),e.height,m),m=i.Cartesian3.add(n,m,m);const a=new t.BoundingSphere(m,e.semiMajorAxis),s=o.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,c=new u.GeometryAttributes({position:new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o.EllipseGeometryLibrary.raisePositionsToHeight(s,e,!1)})}),f=s.length/3,p=d.IndexDatatype.createTypedArray(f,2*f);let h=0;for(let e=0;e<f;++e)p[h++]=e,p[h++]=(e+1)%f;return{boundingSphere:a,attributes:c,indices:p}}(A),n.defined(e._offsetAttribute)){const t=_.attributes.position.values.length,i=e._offsetAttribute===c.GeometryOffsetAttribute.NONE?0:1,n=new Uint8Array(t/3).fill(i);_.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new l.Geometry({attributes:_.attributes,indices:_.indices,primitiveType:l.PrimitiveType.LINES,boundingSphere:_.boundingSphere,offsetAttribute:e._offsetAttribute})},e.EllipseOutlineGeometry=b}));