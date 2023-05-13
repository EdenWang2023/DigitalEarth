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
define(["./createTaskProcessorWorker","./Transforms-99c89742","./defined-b681f02d","./Matrix4-d3db9505","./IndexDatatype-1b44a4e6","./Color-151cb095","./Math-5b6faca9","./EncodedCartesian3-e8f321af","./Check-436535f3","./Rectangle-0610a1c7","./Interval-49d6e8fc","./_commonjsHelpers-a32ac251","./combine-8b9ba6cb","./RequestType-e53aab71","./RuntimeError-14317824","./WebGLConstants-f100e3dd"],(function(a,e,n,t,r,i,o,s,l,f,u,c,w,p,d,C){"use strict";return a((function(a,l){for(var f=a.ribbons,u=e.Transforms.localFrameToFixedFrameGenerator("north","west"),c=new t.Matrix4,w=f.length,p=[],d=0,C=0,m=0;m<w;m++)if(n.defined(f[m])&&f[m].trackPoints.length>1){f[m].scale=o.CesiumMath.equalsEpsilon(f[m].scale,0,o.CesiumMath.EPSILON7)?1:f[m].scale;var h=1/f[m].scale,y=f[m].scale,P=f[m].trackPoints,x=[],b=P.length;if(b>300){for(var g=b-100,M=Math.floor(g/200)+1,B=b-100-M,v=0;v<B;v+=M){var O=e.Quaternion.fromHeadingPitchRoll(P[v].headingPitchRoll,new e.Quaternion),T=t.Matrix4.fromTranslationQuaternionRotationScale(new t.Cartesian3(0,0,0),O,new t.Cartesian3(y,y,y));c=u(P[v].wcPosition,void 0,c),c=t.Matrix4.multiply(c,T,c);var R=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(0,0,1),new t.Cartesian3);R=t.Cartesian3.subtract(R,P[v].wcPosition,R);var Q=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(f[m].forwardOffset*h,f[m].upOffset,0),new t.Cartesian3),S=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(f[m].forwardOffset*h,-f[m].upOffset,0),new t.Cartesian3);x.push({position:Q,normal:R}),x.push({position:S,normal:R}),d+=2}for(;v<b-1;v++){O=e.Quaternion.fromHeadingPitchRoll(P[v].headingPitchRoll,new e.Quaternion),T=t.Matrix4.fromTranslationQuaternionRotationScale(new t.Cartesian3(0,0,0),O,new t.Cartesian3(y,y,y));c=u(P[v].wcPosition,void 0,c),c=t.Matrix4.multiply(c,T,c);R=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(0,0,1),new t.Cartesian3);R=t.Cartesian3.subtract(R,P[v].wcPosition,R);Q=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(f[m].forwardOffset*h,f[m].upOffset,0),new t.Cartesian3),S=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(f[m].forwardOffset*h,-f[m].upOffset,0),new t.Cartesian3);x.push({position:Q,normal:R}),x.push({position:S,normal:R}),d+=2}}else for(var E=0;E<P.length;E++){O=e.Quaternion.fromHeadingPitchRoll(P[E].headingPitchRoll,new e.Quaternion),T=t.Matrix4.fromTranslationQuaternionRotationScale(new t.Cartesian3(0,0,0),O,new t.Cartesian3(y,y,y));c=u(P[E].wcPosition,void 0,c),c=t.Matrix4.multiply(c,T,c);R=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(0,0,1),new t.Cartesian3);R=t.Cartesian3.subtract(R,P[E].wcPosition,R);Q=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(f[m].forwardOffset*h,f[m].upOffset,0),new t.Cartesian3),S=t.Matrix4.multiplyByPoint(c,new t.Cartesian3(f[m].forwardOffset*h,-f[m].upOffset,0),new t.Cartesian3);x.push({position:Q,normal:R}),x.push({position:S,normal:R}),d+=2}p.push(x),C+=6*(x.length/2-1)}if(0!=p.length){var F=new e.BoundingSphere,k=r.IndexDatatype.createTypedArray(d,C),A=new Float64Array(3*d),H=new Float64Array(3*d),D=(R=new Float64Array(3*d),new Uint8Array(4*d)),I=new s.EncodedCartesian3,z=0,L=0;for(m=0;m<p.length;m++){for(var q=f[m].color,G=(x=p[m]).length,W=0;W<G;W++){F=e.BoundingSphere.expand(F,x[W].position),s.EncodedCartesian3.fromCartesian(x[W].position,I);var j=I.high,N=I.low;A[3*(L+W)]=j.x,A[3*(L+W)+1]=j.y,A[3*(L+W)+2]=j.z,H[3*(L+W)]=N.x,H[3*(L+W)+1]=N.y,H[3*(L+W)+2]=N.z,R[3*(L+W)]=x[W].normal.x,R[3*(L+W)+1]=x[W].normal.y,R[3*(L+W)+2]=x[W].normal.z;var U=1-(G-W)/G*1;D[4*(L+W)]=i.Color.floatToByte(q.red),D[4*(L+W)+1]=i.Color.floatToByte(q.green),D[4*(L+W)+2]=i.Color.floatToByte(q.blue),D[4*(L+W)+3]=i.Color.floatToByte(q.alpha*U)}for(var _=0;_+3<G;_+=2)k[z++]=L+_,k[z++]=L+_+1,k[z++]=L+_+2,k[z++]=L+_+1,k[z++]=L+_+3,k[z++]=L+_+2;L+=G}return a.ribbons=void 0,{position3DHighBuffer:A,position3DLowBuffer:H,normalBuffer:R.buffer,colorBuffer:D.buffer,indices:k.buffer,boundingSphere:F}}}))}));
