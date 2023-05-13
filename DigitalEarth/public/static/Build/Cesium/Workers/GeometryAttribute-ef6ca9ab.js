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
define(["exports","./Matrix4-d3db9505","./Check-436535f3","./defined-b681f02d","./Matrix2-7384588e","./WebGLConstants-f100e3dd","./Transforms-99c89742","./Rectangle-0610a1c7"],(function(t,e,n,a,i,r,o,s){"use strict";var u=Object.freeze({NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3});const I={POINTS:r.WebGLConstants.POINTS,LINES:r.WebGLConstants.LINES,LINE_LOOP:r.WebGLConstants.LINE_LOOP,LINE_STRIP:r.WebGLConstants.LINE_STRIP,TRIANGLES:r.WebGLConstants.TRIANGLES,TRIANGLE_STRIP:r.WebGLConstants.TRIANGLE_STRIP,TRIANGLE_FAN:r.WebGLConstants.TRIANGLE_FAN,isLines:function(t){return t===I.LINES||t===I.LINE_LOOP||t===I.LINE_STRIP},isTriangles:function(t){return t===I.TRIANGLES||t===I.TRIANGLE_STRIP||t===I.TRIANGLE_FAN},validate:function(t){return t===I.POINTS||t===I.LINES||t===I.LINE_LOOP||t===I.LINE_STRIP||t===I.TRIANGLES||t===I.TRIANGLE_STRIP||t===I.TRIANGLE_FAN}};var N=Object.freeze(I);function c(t){t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT),this.attributes=t.attributes,this.indices=t.indices,this.primitiveType=a.defaultValue(t.primitiveType,N.TRIANGLES),this.boundingSphere=t.boundingSphere,this.geometryType=a.defaultValue(t.geometryType,u.NONE),this.boundingSphereCV=t.boundingSphereCV,this.offsetAttribute=t.offsetAttribute}c.computeNumberOfVertices=function(t){let e=-1;for(const n in t.attributes)if(t.attributes.hasOwnProperty(n)&&a.defined(t.attributes[n])&&a.defined(t.attributes[n].values)){const a=t.attributes[n];e=a.values.length/a.componentsPerAttribute}return e};const T=new e.Cartographic,l=new e.Cartesian3,L=new e.Matrix4,E=[new e.Cartographic,new e.Cartographic,new e.Cartographic],f=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],p=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],m=new e.Cartesian3,y=new o.Quaternion,b=new e.Matrix4,d=new i.Matrix2;c._textureCoordinateRotationPoints=function(t,n,a,r){let u;const I=s.Rectangle.center(r,T),N=e.Cartographic.toCartesian(I,a,l),c=o.Transforms.eastNorthUpToFixedFrame(N,a,L),C=e.Matrix4.inverse(c,L),h=f,A=E;A[0].longitude=r.west,A[0].latitude=r.south,A[1].longitude=r.west,A[1].latitude=r.north,A[2].longitude=r.east,A[2].latitude=r.south;let x=m;for(u=0;u<3;u++)e.Cartographic.toCartesian(A[u],a,x),x=e.Matrix4.multiplyByPointAsVector(C,x,x),h[u].x=x.x,h[u].y=x.y;const S=o.Quaternion.fromAxisAngle(e.Cartesian3.UNIT_Z,-n,y),P=e.Matrix3.fromQuaternion(S,b),G=t.length;let R=Number.POSITIVE_INFINITY,_=Number.POSITIVE_INFINITY,O=Number.NEGATIVE_INFINITY,g=Number.NEGATIVE_INFINITY;for(u=0;u<G;u++)x=e.Matrix4.multiplyByPointAsVector(C,t[u],x),x=e.Matrix3.multiplyByVector(P,x,x),R=Math.min(R,x.x),_=Math.min(_,x.y),O=Math.max(O,x.x),g=Math.max(g,x.y);const w=i.Matrix2.fromRotation(n,d),M=p;M[0].x=R,M[0].y=_,M[1].x=R,M[1].y=g,M[2].x=O,M[2].y=_;const V=h[0],v=h[2].x-V.x,F=h[1].y-V.y;for(u=0;u<3;u++){const t=M[u];i.Matrix2.multiplyByVector(w,t,t),t.x=(t.x-V.x)/v,t.y=(t.y-V.y)/F}const W=M[0],Y=M[1],B=M[2],k=new Array(6);return e.Cartesian2.pack(W,k),e.Cartesian2.pack(Y,k,2),e.Cartesian2.pack(B,k,4),k},t.Geometry=c,t.GeometryAttribute=function(t){t=a.defaultValue(t,a.defaultValue.EMPTY_OBJECT),this.componentDatatype=t.componentDatatype,this.componentsPerAttribute=t.componentsPerAttribute,this.normalize=a.defaultValue(t.normalize,!1),this.values=t.values},t.GeometryType=u,t.PrimitiveType=N}));
