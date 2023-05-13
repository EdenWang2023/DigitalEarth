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
define(["./Transforms-99c89742","./Matrix4-d3db9505","./Check-436535f3","./ComponentDatatype-46a1cf7a","./CylinderGeometryLibrary-2359532f","./defined-b681f02d","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./IndexDatatype-1b44a4e6","./Rectangle-0610a1c7","./Math-5b6faca9","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd","./Matrix2-7384588e"],(function(t,e,i,n,o,a,r,s,u,f,c,d,l,b,m,p,y,_,h){"use strict";const A=new e.Cartesian2;function R(t){const e=(t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,n=t.bottomRadius,o=a.defaultValue(t.slices,128),r=Math.max(a.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=n,this._slices=o,this._numberOfVerticalLines=r,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}R.packedLength=6,R.pack=function(t,e,i){return i=a.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=a.defaultValue(t._offsetAttribute,-1),e};const G={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return R.unpack=function(t,e,i){e=a.defaultValue(e,0);const n=t[e++],o=t[e++],r=t[e++],s=t[e++],u=t[e++],f=t[e];return a.defined(i)?(i._length=n,i._topRadius=o,i._bottomRadius=r,i._slices=s,i._numberOfVerticalLines=u,i._offsetAttribute=-1===f?void 0:f,i):(G.length=n,G.topRadius=o,G.bottomRadius=r,G.slices=s,G.numberOfVerticalLines=u,G.offsetAttribute=-1===f?void 0:f,new R(G))},R.createGeometry=function(i){let c=i._length;const d=i._topRadius,l=i._bottomRadius,b=i._slices,m=i._numberOfVerticalLines;if(c<=0||d<0||l<0||0===d&&0===l)return;const p=2*b,y=o.CylinderGeometryLibrary.computePositions(c,d,l,b,!1);let _,h=2*b;if(m>0){const t=Math.min(m,b);_=Math.round(b/t),h+=t}const R=f.IndexDatatype.createTypedArray(p,2*h);let G,O=0;for(G=0;G<b-1;G++)R[O++]=G,R[O++]=G+1,R[O++]=G+b,R[O++]=G+1+b;if(R[O++]=b-1,R[O++]=0,R[O++]=b+b-1,R[O++]=b,m>0)for(G=0;G<b;G+=_)R[O++]=G,R[O++]=G+b;const V=new s.GeometryAttributes;V.position=new r.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:y}),A.x=.5*c,A.y=Math.max(l,d);const g=new t.BoundingSphere(e.Cartesian3.ZERO,e.Cartesian2.magnitude(A));if(a.defined(i._offsetAttribute)){c=y.length;const t=i._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,e=new Uint8Array(c/3).fill(t);V.applyOffset=new r.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}return new r.Geometry({attributes:V,indices:R,primitiveType:r.PrimitiveType.LINES,boundingSphere:g,offsetAttribute:i._offsetAttribute})},function(t,e){return a.defined(e)&&(t=R.unpack(t,e)),R.createGeometry(t)}}));
