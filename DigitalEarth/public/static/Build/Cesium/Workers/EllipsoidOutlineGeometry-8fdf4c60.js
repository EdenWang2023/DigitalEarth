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
define(["exports","./Transforms-99c89742","./Matrix4-d3db9505","./ComponentDatatype-46a1cf7a","./defined-b681f02d","./Check-436535f3","./Rectangle-0610a1c7","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./IndexDatatype-1b44a4e6","./Math-5b6faca9"],(function(t,i,e,a,n,o,r,s,m,u,f,c){"use strict";const l=new e.Cartesian3(1,1,1),d=Math.cos,C=Math.sin;function _(t){t=n.defaultValue(t,n.defaultValue.EMPTY_OBJECT);const i=n.defaultValue(t.radii,l),a=n.defaultValue(t.innerRadii,i),o=n.defaultValue(t.minimumClock,0),r=n.defaultValue(t.maximumClock,c.CesiumMath.TWO_PI),s=n.defaultValue(t.minimumCone,0),m=n.defaultValue(t.maximumCone,c.CesiumMath.PI),u=Math.round(n.defaultValue(t.stackPartitions,10)),f=Math.round(n.defaultValue(t.slicePartitions,8)),d=Math.round(n.defaultValue(t.subdivisions,128));this._radii=e.Cartesian3.clone(i),this._innerRadii=e.Cartesian3.clone(a),this._minimumClock=o,this._maximumClock=r,this._minimumCone=s,this._maximumCone=m,this._stackPartitions=u,this._slicePartitions=f,this._subdivisions=d,this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}_.packedLength=2*e.Cartesian3.packedLength+8,_.pack=function(t,i,a){return a=n.defaultValue(a,0),e.Cartesian3.pack(t._radii,i,a),a+=e.Cartesian3.packedLength,e.Cartesian3.pack(t._innerRadii,i,a),a+=e.Cartesian3.packedLength,i[a++]=t._minimumClock,i[a++]=t._maximumClock,i[a++]=t._minimumCone,i[a++]=t._maximumCone,i[a++]=t._stackPartitions,i[a++]=t._slicePartitions,i[a++]=t._subdivisions,i[a]=n.defaultValue(t._offsetAttribute,-1),i};const h=new e.Cartesian3,p=new e.Cartesian3,y={radii:h,innerRadii:p,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};_.unpack=function(t,i,a){i=n.defaultValue(i,0);const o=e.Cartesian3.unpack(t,i,h);i+=e.Cartesian3.packedLength;const r=e.Cartesian3.unpack(t,i,p);i+=e.Cartesian3.packedLength;const s=t[i++],m=t[i++],u=t[i++],f=t[i++],c=t[i++],l=t[i++],d=t[i++],C=t[i];return n.defined(a)?(a._radii=e.Cartesian3.clone(o,a._radii),a._innerRadii=e.Cartesian3.clone(r,a._innerRadii),a._minimumClock=s,a._maximumClock=m,a._minimumCone=u,a._maximumCone=f,a._stackPartitions=c,a._slicePartitions=l,a._subdivisions=d,a._offsetAttribute=-1===C?void 0:C,a):(y.minimumClock=s,y.maximumClock=m,y.minimumCone=u,y.maximumCone=f,y.stackPartitions=c,y.slicePartitions=l,y.subdivisions=d,y.offsetAttribute=-1===C?void 0:C,new _(y))},_.createGeometry=function(t){const e=t._radii;if(e.x<=0||e.y<=0||e.z<=0)return;const o=t._innerRadii;if(o.x<=0||o.y<=0||o.z<=0)return;const l=t._minimumClock,_=t._maximumClock,h=t._minimumCone,p=t._maximumCone,y=t._subdivisions,b=r.Ellipsoid.fromCartesian3(e);let k=t._slicePartitions+1,x=t._stackPartitions+1;k=Math.round(k*Math.abs(_-l)/c.CesiumMath.TWO_PI),x=Math.round(x*Math.abs(p-h)/c.CesiumMath.PI),k<2&&(k=2),x<2&&(x=2);let A=0,P=1;const v=o.x!==e.x||o.y!==e.y||o.z!==e.z;let M=!1,w=!1;v&&(P=2,h>0&&(M=!0,A+=k),p<Math.PI&&(w=!0,A+=k));const g=y*P*(x+k),V=new Float64Array(3*g),G=2*(g+A-(k+x)*P),E=f.IndexDatatype.createTypedArray(g,G);let O,D,I,T,z=0;const L=new Array(x),R=new Array(x);for(O=0;O<x;O++)T=h+O*(p-h)/(x-1),L[O]=C(T),R[O]=d(T);const N=new Array(y),B=new Array(y);for(O=0;O<y;O++)I=l+O*(_-l)/(y-1),N[O]=C(I),B[O]=d(I);for(O=0;O<x;O++)for(D=0;D<y;D++)V[z++]=e.x*L[O]*B[D],V[z++]=e.y*L[O]*N[D],V[z++]=e.z*R[O];if(v)for(O=0;O<x;O++)for(D=0;D<y;D++)V[z++]=o.x*L[O]*B[D],V[z++]=o.y*L[O]*N[D],V[z++]=o.z*R[O];for(L.length=y,R.length=y,O=0;O<y;O++)T=h+O*(p-h)/(y-1),L[O]=C(T),R[O]=d(T);for(N.length=k,B.length=k,O=0;O<k;O++)I=l+O*(_-l)/(k-1),N[O]=C(I),B[O]=d(I);for(O=0;O<y;O++)for(D=0;D<k;D++)V[z++]=e.x*L[O]*B[D],V[z++]=e.y*L[O]*N[D],V[z++]=e.z*R[O];if(v)for(O=0;O<y;O++)for(D=0;D<k;D++)V[z++]=o.x*L[O]*B[D],V[z++]=o.y*L[O]*N[D],V[z++]=o.z*R[O];for(z=0,O=0;O<x*P;O++){const t=O*y;for(D=0;D<y-1;D++)E[z++]=t+D,E[z++]=t+D+1}let S=x*y*P;for(O=0;O<k;O++)for(D=0;D<y-1;D++)E[z++]=S+O+D*k,E[z++]=S+O+(D+1)*k;if(v)for(S=x*y*P+k*y,O=0;O<k;O++)for(D=0;D<y-1;D++)E[z++]=S+O+D*k,E[z++]=S+O+(D+1)*k;if(v){let t=x*y*P,i=t+y*k;if(M)for(O=0;O<k;O++)E[z++]=t+O,E[z++]=i+O;if(w)for(t+=y*k-k,i+=y*k-k,O=0;O<k;O++)E[z++]=t+O,E[z++]=i+O}const U=new m.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:V})});if(n.defined(t._offsetAttribute)){const i=V.length,e=t._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,n=new Uint8Array(i/3).fill(e);U.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new s.Geometry({attributes:U,indices:E,primitiveType:s.PrimitiveType.LINES,boundingSphere:i.BoundingSphere.fromEllipsoid(b),offsetAttribute:t._offsetAttribute})},t.EllipsoidOutlineGeometry=_}));