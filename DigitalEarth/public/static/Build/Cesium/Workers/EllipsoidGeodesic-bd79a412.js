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
define(["exports","./Matrix4-d3db9505","./Check-436535f3","./defined-b681f02d","./Rectangle-0610a1c7","./Math-5b6faca9"],(function(t,a,i,n,e,s){"use strict";function o(t,a,i,n,e,s,o){const r=function(t,a){return t*a*(4+t*(4-3*a))/16}(t,i);return(1-r)*t*a*(n+r*e*(o+r*s*(2*o*o-1)))}const r=new a.Cartesian3,h=new a.Cartesian3;function c(t,i,n,e){a.Cartesian3.normalize(e.cartographicToCartesian(i,h),r),a.Cartesian3.normalize(e.cartographicToCartesian(n,h),h),function(t,a,i,n,e,r,h){const c=(a-i)/a,d=r-n,u=Math.atan((1-c)*Math.tan(e)),l=Math.atan((1-c)*Math.tan(h)),M=Math.cos(u),g=Math.sin(u),_=Math.cos(l),p=Math.sin(l),f=M*_,m=M*p,C=g*p,H=g*_;let v,O,S,q,b,U=d,A=s.CesiumMath.TWO_PI,R=Math.cos(U),w=Math.sin(U);do{R=Math.cos(U),w=Math.sin(U);const t=m-H*R;let a;S=Math.sqrt(_*_*w*w+t*t),O=C+f*R,v=Math.atan2(S,O),0===S?(a=0,q=1):(a=f*w/S,q=1-a*a),A=U,b=O-2*C/q,isFinite(b)||(b=0),U=d+o(c,a,q,v,S,O,b)}while(Math.abs(U-A)>s.CesiumMath.EPSILON12);const x=q*(a*a-i*i)/(i*i),y=x*(256+x*(x*(74-47*x)-128))/1024,E=b*b,P=i*(1+x*(4096+x*(x*(320-175*x)-768))/16384)*(v-y*S*(b+y*(O*(2*E-1)-y*b*(4*S*S-3)*(4*E-3)/6)/4)),D=Math.atan2(_*w,m-H*R),T=Math.atan2(M*w,m*R-H);t._distance=P,t._startHeading=D,t._endHeading=T,t._uSquared=x}(t,e.maximumRadius,e.minimumRadius,i.longitude,i.latitude,n.longitude,n.latitude),t._start=a.Cartographic.clone(i,t._start),t._end=a.Cartographic.clone(n,t._end),t._start.height=0,t._end.height=0,function(t){const a=t._uSquared,i=t._ellipsoid.maximumRadius,n=t._ellipsoid.minimumRadius,e=(i-n)/i,s=Math.cos(t._startHeading),o=Math.sin(t._startHeading),r=(1-e)*Math.tan(t._start.latitude),h=1/Math.sqrt(1+r*r),c=h*r,d=Math.atan2(r,s),u=h*o,l=u*u,M=1-l,g=Math.sqrt(M),_=a/4,p=_*_,f=p*_,m=p*p,C=1+_-3*p/4+5*f/4-175*m/64,H=1-_+15*p/8-35*f/8,v=1-3*_+35*p/4,O=1-5*_,S=C*d-H*Math.sin(2*d)*_/2-v*Math.sin(4*d)*p/16-O*Math.sin(6*d)*f/48-5*Math.sin(8*d)*m/512,q=t._constants;q.a=i,q.b=n,q.f=e,q.cosineHeading=s,q.sineHeading=o,q.tanU=r,q.cosineU=h,q.sineU=c,q.sigma=d,q.sineAlpha=u,q.sineSquaredAlpha=l,q.cosineSquaredAlpha=M,q.cosineAlpha=g,q.u2Over4=_,q.u4Over16=p,q.u6Over64=f,q.u8Over256=m,q.a0=C,q.a1=H,q.a2=v,q.a3=O,q.distanceRatio=S}(t)}function d(t,i,s){const o=n.defaultValue(s,e.Ellipsoid.WGS84);this._ellipsoid=o,this._start=new a.Cartographic,this._end=new a.Cartographic,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,n.defined(t)&&n.defined(i)&&c(this,t,i,o)}Object.defineProperties(d.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return this._startHeading}},endHeading:{get:function(){return this._endHeading}}}),d.prototype.setEndPoints=function(t,a){c(this,t,a,this._ellipsoid)},d.prototype.interpolateUsingFraction=function(t,a){return this.interpolateUsingSurfaceDistance(this._distance*t,a)},d.prototype.interpolateUsingSurfaceDistance=function(t,i){const e=this._constants,s=e.distanceRatio+t/e.b,r=Math.cos(2*s),h=Math.cos(4*s),c=Math.cos(6*s),d=Math.sin(2*s),u=Math.sin(4*s),l=Math.sin(6*s),M=Math.sin(8*s),g=s*s,_=s*g,p=e.u8Over256,f=e.u2Over4,m=e.u6Over64,C=e.u4Over16;let H=2*_*p*r/3+s*(1-f+7*C/4-15*m/4+579*p/64-(C-15*m/4+187*p/16)*r-(5*m/4-115*p/16)*h-29*p*c/16)+(f/2-C+71*m/32-85*p/16)*d+(5*C/16-5*m/4+383*p/96)*u-g*((m-11*p/2)*d+5*p*u/2)+(29*m/96-29*p/16)*l+539*p*M/1536;const v=Math.asin(Math.sin(H)*e.cosineAlpha),O=Math.atan(e.a/e.b*Math.tan(v));H-=e.sigma;const S=Math.cos(2*e.sigma+H),q=Math.sin(H),b=Math.cos(H),U=e.cosineU*b,A=e.sineU*q,R=Math.atan2(q*e.sineHeading,U-A*e.cosineHeading)-o(e.f,e.sineAlpha,e.cosineSquaredAlpha,H,q,b,S);return n.defined(i)?(i.longitude=this._start.longitude+R,i.latitude=O,i.height=0,i):new a.Cartographic(this._start.longitude+R,O,0)},t.EllipsoidGeodesic=d}));
