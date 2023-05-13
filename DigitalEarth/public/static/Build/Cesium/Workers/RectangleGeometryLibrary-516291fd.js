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
define(["exports","./Matrix4-d3db9505","./defined-b681f02d","./Check-436535f3","./Transforms-99c89742","./Math-5b6faca9","./Matrix2-7384588e","./Rectangle-0610a1c7"],(function(t,n,a,e,o,r,s,i){"use strict";const c=Math.cos,g=Math.sin,h=Math.sqrt,u={computePosition:function(t,n,e,o,r,s,i){const u=n.radiiSquared,l=t.nwCorner,C=t.boundingRectangle;let d=l.latitude-t.granYCos*o+r*t.granXSin;const S=c(d),M=g(d),w=u.z*M;let X=l.longitude+o*t.granYSin+r*t.granXCos;const Y=S*c(X),f=S*g(X),m=u.x*Y,p=u.y*f,x=h(m*Y+p*f+w*M);if(s.x=m/x,s.y=p/x,s.z=w/x,e){const n=t.stNwCorner;a.defined(n)?(d=n.latitude-t.stGranYCos*o+r*t.stGranXSin,X=n.longitude+o*t.stGranYSin+r*t.stGranXCos,i.x=(X-t.stWest)*t.lonScalar,i.y=(d-t.stSouth)*t.latScalar):(i.x=(X-C.west)*t.lonScalar,i.y=(d-C.south)*t.latScalar)}}},l=new s.Matrix2;let C=new n.Cartesian3;const d=new n.Cartographic;let S=new n.Cartesian3;const M=new o.GeographicProjection;function w(t,a,e,o,r,i,c){const g=Math.cos(a),h=o*g,u=e*g,d=Math.sin(a),w=o*d,X=e*d;C=M.project(t,C),C=n.Cartesian3.subtract(C,S,C);const Y=s.Matrix2.fromRotation(a,l);C=s.Matrix2.multiplyByVector(Y,C,C),C=n.Cartesian3.add(C,S,C),i-=1,c-=1;const f=(t=M.unproject(C,t)).latitude,m=f+i*X,p=f-h*c,x=f-h*c+i*X,R=Math.max(f,m,p,x),G=Math.min(f,m,p,x),y=t.longitude,b=y+i*u,O=y+c*w,P=y+c*w+i*u;return{north:R,south:G,east:Math.max(y,b,O,P),west:Math.min(y,b,O,P),granYCos:h,granYSin:w,granXCos:u,granXSin:X,nwCorner:t}}u.computeOptions=function(t,n,a,e,o,s,c){let g,h=t.east,u=t.west,l=t.north,C=t.south,X=!1,Y=!1;l===r.CesiumMath.PI_OVER_TWO&&(X=!0),C===-r.CesiumMath.PI_OVER_TWO&&(Y=!0);const f=l-C;g=u>h?r.CesiumMath.TWO_PI-u+h:h-u;const m=Math.ceil(g/n)+1,p=Math.ceil(f/n)+1,x=g/(m-1),R=f/(p-1),G=i.Rectangle.northwest(t,s),y=i.Rectangle.center(t,d);0===a&&0===e||(y.longitude<G.longitude&&(y.longitude+=r.CesiumMath.TWO_PI),S=M.project(y,S));const b=R,O=x,P=i.Rectangle.clone(t,o),W={granYCos:b,granYSin:0,granXCos:O,granXSin:0,nwCorner:G,boundingRectangle:P,width:m,height:p,northCap:X,southCap:Y};if(0!==a){const t=w(G,a,x,R,0,m,p);l=t.north,C=t.south,h=t.east,u=t.west,W.granYCos=t.granYCos,W.granYSin=t.granYSin,W.granXCos=t.granXCos,W.granXSin=t.granXSin,P.north=l,P.south=C,P.east=h,P.west=u}if(0!==e){a-=e;const t=i.Rectangle.northwest(P,c),n=w(t,a,x,R,0,m,p);W.stGranYCos=n.granYCos,W.stGranXCos=n.granXCos,W.stGranYSin=n.granYSin,W.stGranXSin=n.granXSin,W.stNwCorner=t,W.stWest=n.west,W.stSouth=n.south}return W},t.RectangleGeometryLibrary=u}));
