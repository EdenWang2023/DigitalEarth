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
define(["exports","./Transforms-99c89742","./Matrix4-d3db9505","./ComponentDatatype-46a1cf7a","./defined-b681f02d","./Check-436535f3","./Rectangle-0610a1c7","./GeometryAttribute-ef6ca9ab","./GeometryAttributes-18ccc0d6","./GeometryOffsetAttribute-3e5f3e97","./IndexDatatype-1b44a4e6","./Math-5b6faca9","./VertexFormat-1359575c"],(function(t,e,a,n,i,r,o,s,m,u,c,l,f){"use strict";const d=new a.Cartesian3,C=new a.Cartesian3,p=new a.Cartesian3,y=new a.Cartesian3,_=new a.Cartesian3,h=new a.Cartesian3(1,1,1),x=Math.cos,A=Math.sin;function b(t){t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT);const e=i.defaultValue(t.radii,h),n=i.defaultValue(t.innerRadii,e),r=i.defaultValue(t.minimumClock,0),o=i.defaultValue(t.maximumClock,l.CesiumMath.TWO_PI),s=i.defaultValue(t.minimumCone,0),m=i.defaultValue(t.maximumCone,l.CesiumMath.PI),u=Math.round(i.defaultValue(t.stackPartitions,64)),c=Math.round(i.defaultValue(t.slicePartitions,64)),d=i.defaultValue(t.vertexFormat,f.VertexFormat.DEFAULT);this._radii=a.Cartesian3.clone(e),this._innerRadii=a.Cartesian3.clone(n),this._minimumClock=r,this._maximumClock=o,this._minimumCone=s,this._maximumCone=m,this._stackPartitions=u,this._slicePartitions=c,this._vertexFormat=f.VertexFormat.clone(d),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}b.packedLength=2*a.Cartesian3.packedLength+f.VertexFormat.packedLength+7,b.pack=function(t,e,n){return n=i.defaultValue(n,0),a.Cartesian3.pack(t._radii,e,n),n+=a.Cartesian3.packedLength,a.Cartesian3.pack(t._innerRadii,e,n),n+=a.Cartesian3.packedLength,f.VertexFormat.pack(t._vertexFormat,e,n),n+=f.VertexFormat.packedLength,e[n++]=t._minimumClock,e[n++]=t._maximumClock,e[n++]=t._minimumCone,e[n++]=t._maximumCone,e[n++]=t._stackPartitions,e[n++]=t._slicePartitions,e[n]=i.defaultValue(t._offsetAttribute,-1),e};const k=new a.Cartesian3,w=new a.Cartesian3,g=new f.VertexFormat,P={radii:k,innerRadii:w,vertexFormat:g,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};let v;b.unpack=function(t,e,n){e=i.defaultValue(e,0);const r=a.Cartesian3.unpack(t,e,k);e+=a.Cartesian3.packedLength;const o=a.Cartesian3.unpack(t,e,w);e+=a.Cartesian3.packedLength;const s=f.VertexFormat.unpack(t,e,g);e+=f.VertexFormat.packedLength;const m=t[e++],u=t[e++],c=t[e++],l=t[e++],d=t[e++],C=t[e++],p=t[e];return i.defined(n)?(n._radii=a.Cartesian3.clone(r,n._radii),n._innerRadii=a.Cartesian3.clone(o,n._innerRadii),n._vertexFormat=f.VertexFormat.clone(s,n._vertexFormat),n._minimumClock=m,n._maximumClock=u,n._minimumCone=c,n._maximumCone=l,n._stackPartitions=d,n._slicePartitions=C,n._offsetAttribute=-1===p?void 0:p,n):(P.minimumClock=m,P.maximumClock=u,P.minimumCone=c,P.maximumCone=l,P.stackPartitions=d,P.slicePartitions=C,P.offsetAttribute=-1===p?void 0:p,new b(P))},b.createGeometry=function(t){const r=t._radii;if(r.x<=0||r.y<=0||r.z<=0)return;const f=t._innerRadii;if(f.x<=0||f.y<=0||f.z<=0)return;const h=t._minimumClock,b=t._maximumClock,k=t._minimumCone,w=t._maximumCone,g=t._vertexFormat;let P,v,F=t._slicePartitions+1,V=t._stackPartitions+1;F=Math.round(F*Math.abs(b-h)/l.CesiumMath.TWO_PI),V=Math.round(V*Math.abs(w-k)/l.CesiumMath.PI),F<2&&(F=2),V<2&&(V=2);let M=0;const T=[k],D=[h];for(P=0;P<V;P++)T.push(k+P*(w-k)/(V-1));for(T.push(w),v=0;v<F;v++)D.push(h+v*(b-h)/(F-1));D.push(b);const G=T.length,L=D.length;let O=0,I=1;const E=f.x!==r.x||f.y!==r.y||f.z!==r.z;let z=!1,N=!1,R=!1;E&&(I=2,k>0&&(z=!0,O+=F-1),w<Math.PI&&(N=!0,O+=F-1),(b-h)%l.CesiumMath.TWO_PI?(R=!0,O+=2*(V-1)+1):O+=1);const U=L*G*I,S=new Float64Array(3*U),B=new Array(U).fill(!1),W=new Array(U).fill(!1),Y=F*V*I,J=6*(Y+O+1-(F+V)*I),X=c.IndexDatatype.createTypedArray(Y,J),Z=g.normal?new Float32Array(3*U):void 0,j=g.tangent?new Float32Array(3*U):void 0,q=g.bitangent?new Float32Array(3*U):void 0,H=g.st?new Float32Array(2*U):void 0,K=new Array(G),Q=new Array(G);for(P=0;P<G;P++)K[P]=A(T[P]),Q[P]=x(T[P]);const $=new Array(L),tt=new Array(L);for(v=0;v<L;v++)tt[v]=x(D[v]),$[v]=A(D[v]);for(P=0;P<G;P++)for(v=0;v<L;v++)S[M++]=r.x*K[P]*tt[v],S[M++]=r.y*K[P]*$[v],S[M++]=r.z*Q[P];let et,at,nt,it,rt=U/2;if(E)for(P=0;P<G;P++)for(v=0;v<L;v++)S[M++]=f.x*K[P]*tt[v],S[M++]=f.y*K[P]*$[v],S[M++]=f.z*Q[P],B[rt]=!0,P>0&&P!==G-1&&0!==v&&v!==L-1&&(W[rt]=!0),rt++;for(M=0,P=1;P<G-2;P++)for(et=P*L,at=(P+1)*L,v=1;v<L-2;v++)X[M++]=at+v,X[M++]=at+v+1,X[M++]=et+v+1,X[M++]=at+v,X[M++]=et+v+1,X[M++]=et+v;if(E){const t=G*L;for(P=1;P<G-2;P++)for(et=t+P*L,at=t+(P+1)*L,v=1;v<L-2;v++)X[M++]=at+v,X[M++]=et+v,X[M++]=et+v+1,X[M++]=at+v,X[M++]=et+v+1,X[M++]=at+v+1}if(E){if(z)for(it=G*L,P=1;P<L-2;P++)X[M++]=P,X[M++]=P+1,X[M++]=it+P+1,X[M++]=P,X[M++]=it+P+1,X[M++]=it+P;if(N)for(nt=G*L-L,it=G*L*I-L,P=1;P<L-2;P++)X[M++]=nt+P+1,X[M++]=nt+P,X[M++]=it+P,X[M++]=nt+P+1,X[M++]=it+P,X[M++]=it+P+1}if(R){for(P=1;P<G-2;P++)it=L*G+L*P,nt=L*P,X[M++]=it,X[M++]=nt+L,X[M++]=nt,X[M++]=it,X[M++]=it+L,X[M++]=nt+L;for(P=1;P<G-2;P++)it=L*G+L*(P+1)-1,nt=L*(P+1)-1,X[M++]=nt+L,X[M++]=it,X[M++]=nt,X[M++]=nt+L,X[M++]=it+L,X[M++]=it}const ot=new m.GeometryAttributes;g.position&&(ot.position=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:S}));let st=0,mt=0,ut=0,ct=0;const lt=U/2;let ft;const dt=o.Ellipsoid.fromCartesian3(r),Ct=o.Ellipsoid.fromCartesian3(f);if(g.st||g.normal||g.tangent||g.bitangent){for(P=0;P<U;P++){ft=B[P]?Ct:dt;const t=a.Cartesian3.fromArray(S,3*P,d),e=ft.geodeticSurfaceNormal(t,C);if(W[P]&&a.Cartesian3.negate(e,e),g.st){const t=a.Cartesian2.negate(e,_);H[st++]=Math.atan2(t.y,t.x)/l.CesiumMath.TWO_PI+.5,H[st++]=Math.asin(e.z)/Math.PI+.5}if(g.normal&&(Z[mt++]=e.x,Z[mt++]=e.y,Z[mt++]=e.z),g.tangent||g.bitangent){const t=p;let n,i=0;if(B[P]&&(i=lt),n=!z&&P>=i&&P<i+2*L?a.Cartesian3.UNIT_X:a.Cartesian3.UNIT_Z,a.Cartesian3.cross(n,e,t),a.Cartesian3.normalize(t,t),g.tangent&&(j[ut++]=t.x,j[ut++]=t.y,j[ut++]=t.z),g.bitangent){const n=a.Cartesian3.cross(e,t,y);a.Cartesian3.normalize(n,n),q[ct++]=n.x,q[ct++]=n.y,q[ct++]=n.z}}}g.st&&(ot.st=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:H})),g.normal&&(ot.normal=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:Z})),g.tangent&&(ot.tangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j})),g.bitangent&&(ot.bitangent=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:q}))}if(i.defined(t._offsetAttribute)){const e=S.length,a=t._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,i=new Uint8Array(e/3).fill(a);ot.applyOffset=new s.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}return new s.Geometry({attributes:ot,indices:X,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:e.BoundingSphere.fromEllipsoid(dt),offsetAttribute:t._offsetAttribute})},b.getUnitEllipsoid=function(){return i.defined(v)||(v=b.createGeometry(new b({radii:new a.Cartesian3(1,1,1),vertexFormat:f.VertexFormat.POSITION_ONLY}))),v},t.EllipsoidGeometry=b}));
