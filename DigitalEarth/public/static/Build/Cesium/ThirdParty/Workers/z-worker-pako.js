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

(function(){"use strict";const{Array:Q,Object:S,Math:I,Error:z,Uint8Array:w,Uint16Array:Je,Uint32Array:Y,Int32Array:Qe,Map:Z,DataView:M,Promise:P,TextEncoder:$,crypto:H,postMessage:V,TransformStream:k,ReadableStream:Re,WritableStream:Ae,CompressionStream:Ye,DecompressionStream:Ze}=self,ee=[];for(let e=0;256>e;e++){let t=e;for(let n=0;8>n;n++)1&t?t=t>>>1^3988292384:t>>>=1;ee[e]=t}class F{constructor(t){this.crc=t||-1}append(t){let n=0|this.crc;for(let s=0,r=0|t.length;r>s;s++)n=n>>>8^ee[255&(n^t[s])];this.crc=n}get(){return~this.crc}}class te extends k{constructor(){const t=new F;super({transform(n){t.append(n)},flush(n){const s=new w(4);new M(s.buffer).setUint32(0,t.get()),n.enqueue(s)}})}}const _={concat(e,t){if(e.length===0||t.length===0)return e.concat(t);const n=e[e.length-1],s=_.getPartial(n);return s===32?e.concat(t):_._shiftRight(t,s,0|n,e.slice(0,e.length-1))},bitLength(e){const t=e.length;if(t===0)return 0;const n=e[t-1];return 32*(t-1)+_.getPartial(n)},clamp(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,I.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=_.partial(t,e[n-1]&2147483648>>t-1,1)),e},partial:(e,t,n)=>e===32?t:(n?0|t:t<<32-e)+1099511627776*e,getPartial:e=>I.round(e/1099511627776)||32,_shiftRight(e,t,n,s){for(s===void 0&&(s=[]);t>=32;t-=32)s.push(n),n=0;if(t===0)return s.concat(e);for(let o=0;o<e.length;o++)s.push(n|e[o]>>>t),n=e[o]<<32-t;const r=e.length?e[e.length-1]:0,a=_.getPartial(r);return s.push(_.partial(t+a&31,t+a>32?n:s.pop(),1)),s}},U={bytes:{fromBits(e){const t=_.bitLength(e)/8,n=new w(t);let s;for(let r=0;t>r;r++)(3&r)==0&&(s=e[r/4]),n[r]=s>>>24,s<<=8;return n},toBits(e){const t=[];let n,s=0;for(n=0;n<e.length;n++)s=s<<8|e[n],(3&n)==3&&(t.push(s),s=0);return 3&n&&t.push(_.partial(8*(3&n),s)),t}}},ne={sha1:function(e){e?(this._h=e._h.slice(0),this._buffer=e._buffer.slice(0),this._length=e._length):this.reset()}};ne.sha1.prototype={blockSize:512,reset(){const e=this;return e._h=this._init.slice(0),e._buffer=[],e._length=0,e},update(e){const t=this;typeof e=="string"&&(e=U.utf8String.toBits(e));const n=t._buffer=_.concat(t._buffer,e),s=t._length,r=t._length=s+_.bitLength(e);if(r>9007199254740991)throw new z("Cannot hash more than 2^53 - 1 bits");const a=new Y(n);let o=0;for(let l=t.blockSize+s-(t.blockSize+s&t.blockSize-1);r>=l;l+=t.blockSize)t._block(a.subarray(16*o,16*(o+1))),o+=1;return n.splice(0,16*o),t},finalize(){const e=this;let t=e._buffer;const n=e._h;t=_.concat(t,[_.partial(1,1)]);for(let s=t.length+2;15&s;s++)t.push(0);for(t.push(I.floor(e._length/4294967296)),t.push(0|e._length);t.length;)e._block(t.splice(0,16));return e.reset(),n},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:(e,t,n,s)=>e>19?e>39?e>59?e>79?void 0:t^n^s:t&n|t&s|n&s:t^n^s:t&n|~t&s,_S:(e,t)=>t<<e|t>>>32-e,_block(e){const t=this,n=t._h,s=Q(80);for(let i=0;16>i;i++)s[i]=e[i];let r=n[0],a=n[1],o=n[2],l=n[3],h=n[4];for(let i=0;79>=i;i++){16>i||(s[i]=t._S(1,s[i-3]^s[i-8]^s[i-14]^s[i-16]));const c=t._S(5,r)+t._f(i,a,o,l)+h+s[i]+t._key[I.floor(i/20)]|0;h=l,l=o,o=t._S(30,a),a=r,r=c}n[0]=n[0]+r|0,n[1]=n[1]+a|0,n[2]=n[2]+o|0,n[3]=n[3]+l|0,n[4]=n[4]+h|0}};const qe={getRandomValues(e){const t=new Y(e.buffer),n=s=>{let r=987654321;const a=4294967295;return()=>(r=36969*(65535&r)+(r>>16)&a,(((r<<16)+(s=18e3*(65535&s)+(s>>16)&a)&a)/4294967296+.5)*(I.random()>.5?1:-1))};for(let s,r=0;r<e.length;r+=4){const a=n(4294967296*(s||I.random()));s=987654071*a(),t[r/4]=4294967296*a()|0}return e}},W={importKey:e=>new W.hmacSha1(U.bytes.toBits(e)),pbkdf2(e,t,n,s){if(n=n||1e4,0>s||0>n)throw new z("invalid params to pbkdf2");const r=1+(s>>5)<<2;let a,o,l,h,i;const c=new ArrayBuffer(r),u=new M(c);let f=0;const p=_;for(t=U.bytes.toBits(t),i=1;(r||1)>f;i++){for(a=o=e.encrypt(p.concat(t,[i])),l=1;n>l;l++)for(o=e.encrypt(o),h=0;h<o.length;h++)a[h]^=o[h];for(l=0;(r||1)>f&&l<a.length;l++)u.setInt32(f,a[l]),f+=4}return c.slice(0,s/8)},hmacSha1:class{constructor(e){const t=this,n=t._hash=ne.sha1,s=[[],[]],r=n.prototype.blockSize/32;t._baseHash=[new n,new n],e.length>r&&(e=n.hash(e));for(let a=0;r>a;a++)s[0][a]=909522486^e[a],s[1][a]=1549556828^e[a];t._baseHash[0].update(s[0]),t._baseHash[1].update(s[1]),t._resultHash=new n(t._baseHash[0])}reset(){const e=this;e._resultHash=new e._hash(e._baseHash[0]),e._updated=!1}update(e){this._updated=!0,this._resultHash.update(e)}digest(){const e=this,t=e._resultHash.finalize(),n=new e._hash(e._baseHash[1]).update(t).finalize();return e.reset(),n}encrypt(e){if(this._updated)throw new z("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},Be=H!==void 0&&typeof H.getRandomValues=="function",se="Invalid password",re="Invalid signature";function ae(e){return Be?H.getRandomValues(e):qe.getRandomValues(e)}const B=16,oe={name:"PBKDF2"},He=S.assign({hash:{name:"HMAC"}},oe),ie=S.assign({iterations:1e3,hash:{name:"SHA-1"}},oe),Ve=["deriveBits"],K=[8,12,16],x=[16,24,32],R=10,Ke=[0,0,0,0],ce="undefined",le="function",L=typeof H!=ce,E=L&&H.subtle,he=L&&typeof E!=ce,xe=L&&he&&typeof E.importKey==le,Ee=L&&he&&typeof E.deriveBits==le,C=U.bytes,Te=class{constructor(e){const t=this;t._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],t._tables[0][0][0]||t._precompute();const n=t._tables[0][4],s=t._tables[1],r=e.length;let a,o,l,h=1;if(r!==4&&r!==6&&r!==8)throw new z("invalid aes key size");for(t._key=[o=e.slice(0),l=[]],a=r;4*r+28>a;a++){let i=o[a-1];(a%r==0||r===8&&a%r==4)&&(i=n[i>>>24]<<24^n[i>>16&255]<<16^n[i>>8&255]<<8^n[255&i],a%r==0&&(i=i<<8^i>>>24^h<<24,h=h<<1^283*(h>>7))),o[a]=o[a-r]^i}for(let i=0;a;i++,a--){const c=o[3&i?a:a-4];l[i]=4>=a||4>i?c:s[0][n[c>>>24]]^s[1][n[c>>16&255]]^s[2][n[c>>8&255]]^s[3][n[255&c]]}}encrypt(e){return this._crypt(e,0)}decrypt(e){return this._crypt(e,1)}_precompute(){const e=this._tables[0],t=this._tables[1],n=e[4],s=t[4],r=[],a=[];let o,l,h,i;for(let c=0;256>c;c++)a[(r[c]=c<<1^283*(c>>7))^c]=c;for(let c=o=0;!n[c];c^=l||1,o=a[o]||1){let u=o^o<<1^o<<2^o<<3^o<<4;u=u>>8^255&u^99,n[c]=u,s[u]=c,i=r[h=r[l=r[c]]];let f=16843009*i^65537*h^257*l^16843008*c,p=257*r[u]^16843008*u;for(let d=0;4>d;d++)e[d][c]=p=p<<24^p>>>8,t[d][u]=f=f<<24^f>>>8}for(let c=0;5>c;c++)e[c]=e[c].slice(0),t[c]=t[c].slice(0)}_crypt(e,t){if(e.length!==4)throw new z("invalid aes block size");const n=this._key[t],s=n.length/4-2,r=[0,0,0,0],a=this._tables[t],o=a[0],l=a[1],h=a[2],i=a[3],c=a[4];let u,f,p,d=e[0]^n[0],y=e[t?3:1]^n[1],g=e[2]^n[2],m=e[t?1:3]^n[3],b=4;for(let q=0;s>q;q++)u=o[d>>>24]^l[y>>16&255]^h[g>>8&255]^i[255&m]^n[b],f=o[y>>>24]^l[g>>16&255]^h[m>>8&255]^i[255&d]^n[b+1],p=o[g>>>24]^l[m>>16&255]^h[d>>8&255]^i[255&y]^n[b+2],m=o[m>>>24]^l[d>>16&255]^h[y>>8&255]^i[255&g]^n[b+3],b+=4,d=u,y=f,g=p;for(let q=0;4>q;q++)r[t?3&-q:q]=c[d>>>24]<<24^c[y>>16&255]<<16^c[g>>8&255]<<8^c[255&m]^n[b++],u=d,d=y,y=g,g=m,m=u;return r}},Ne=class{constructor(e,t){this._prf=e,this._initIv=t,this._iv=t}reset(){this._iv=this._initIv}update(e){return this.calculate(this._prf,e,this._iv)}incWord(e){if((e>>24&255)==255){let t=e>>16&255,n=e>>8&255,s=255&e;t===255?(t=0,n===255?(n=0,s===255?s=0:++s):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=s}else e+=1<<24;return e}incCounter(e){(e[0]=this.incWord(e[0]))===0&&(e[1]=this.incWord(e[1]))}calculate(e,t,n){let s;if(!(s=t.length))return[];const r=_.bitLength(t);for(let a=0;s>a;a+=4){this.incCounter(n);const o=e.encrypt(n);t[a]^=o[0],t[a+1]^=o[1],t[a+2]^=o[2],t[a+3]^=o[3]}return _.clamp(t,r)}},Me=W.hmacSha1;class Pe extends k{constructor(t,n,s){super({start(){S.assign(this,{ready:new P(r=>this.resolveReady=r),password:t,signed:n,strength:s-1,pending:new w})},async transform(r,a){const o=this,{password:l,strength:h,resolveReady:i,ready:c}=o;l?(await(async(f,p,d,y)=>{const g=await fe(f,p,d,v(y,0,K[p])),m=v(y,K[p]);if(g[0]!=m[0]||g[1]!=m[1])throw new z(se)})(o,h,l,v(r,0,K[h]+2)),r=v(r,K[h]+2),i()):await c;const u=new w(r.length-R-(r.length-R)%B);a.enqueue(ue(o,r,u,0,R,!0))},async flush(r){const{signed:a,ctr:o,hmac:l,pending:h,ready:i}=this;await i;const c=v(h,0,h.length-R),u=v(h,h.length-R);let f=new w;if(c.length){const p=N(C,c);l.update(p);const d=o.update(p);f=T(C,d)}if(a){const p=v(T(C,l.digest()),0,R);for(let d=0;R>d;d++)if(p[d]!=u[d])throw new z(re)}r.enqueue(f)}})}}class Ue extends k{constructor(t,n){let s;super({start(){S.assign(this,{ready:new P(r=>this.resolveReady=r),password:t,strength:n-1,pending:new w})},async transform(r,a){const o=this,{password:l,strength:h,resolveReady:i,ready:c}=o;let u=new w;l?(u=await(async(p,d,y)=>{const g=ae(new w(K[d]));return G(g,await fe(p,d,y,g))})(o,h,l),i()):await c;const f=new w(u.length+r.length-r.length%B);f.set(u,0),a.enqueue(ue(o,r,f,u.length,0))},async flush(r){const{ctr:a,hmac:o,pending:l,ready:h}=this;await h;let i=new w;if(l.length){const c=a.update(N(C,l));o.update(c),i=T(C,c)}s.signature=T(C,o.digest()).slice(0,R),r.enqueue(G(i,s.signature))}}),s=this}}function ue(e,t,n,s,r,a){const{ctr:o,hmac:l,pending:h}=e,i=t.length-r;let c;for(h.length&&(t=G(h,t),n=((u,f)=>{if(f&&f>u.length){const p=u;(u=new w(f)).set(p,0)}return u})(n,i-i%B)),c=0;i-B>=c;c+=B){const u=N(C,v(t,c,c+B));a&&l.update(u);const f=o.update(u);a||l.update(f),n.set(T(C,f),c+s)}return e.pending=v(t,c),n}async function fe(e,t,n,s){e.password=null;const r=(u=>{if($===void 0){const f=new w((u=unescape(encodeURIComponent(u))).length);for(let p=0;p<f.length;p++)f[p]=u.charCodeAt(p);return f}return new $().encode(u)})(n),a=await((u,f,p,d,y)=>xe?E.importKey("raw",f,p,!1,y):W.importKey(f))(0,r,He,0,Ve),o=await(async(u,f,p)=>Ee?await E.deriveBits(u,f,p):W.pbkdf2(f,u.salt,ie.iterations,p))(S.assign({salt:s},ie),a,8*(2*x[t]+2)),l=new w(o),h=N(C,v(l,0,x[t])),i=N(C,v(l,x[t],2*x[t])),c=v(l,2*x[t]);return S.assign(e,{keys:{key:h,authentication:i,passwordVerification:c},ctr:new Ne(new Te(h),Q.from(Ke)),hmac:new Me(i)}),c}function G(e,t){let n=e;return e.length+t.length&&(n=new w(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function v(e,t,n){return e.subarray(t,n)}function T(e,t){return e.fromBits(t)}function N(e,t){return e.toBits(t)}class We extends k{constructor(t,n){super({start(){S.assign(this,{password:t,passwordVerification:n}),ge(this,t)},transform(s,r){const a=this;if(a.password){const o=pe(a,s.subarray(0,12));if(a.password=null,o[11]!=a.passwordVerification)throw new z(se);s=s.subarray(12)}r.enqueue(pe(a,s))}})}}class Le extends k{constructor(t,n){super({start(){S.assign(this,{password:t,passwordVerification:n}),ge(this,t)},transform(s,r){const a=this;let o,l;if(a.password){a.password=null;const h=ae(new w(12));h[11]=a.passwordVerification,o=new w(s.length+h.length),o.set(de(a,h),0),l=12}else o=new w(s.length),l=0;o.set(de(a,s),l),r.enqueue(o)}})}}function pe(e,t){const n=new w(t.length);for(let s=0;s<t.length;s++)n[s]=we(e)^t[s],O(e,n[s]);return n}function de(e,t){const n=new w(t.length);for(let s=0;s<t.length;s++)n[s]=we(e)^t[s],O(e,t[s]);return n}function ge(e,t){const n=[305419896,591751049,878082192];S.assign(e,{keys:n,crcKey0:new F(n[0]),crcKey2:new F(n[2])});for(let s=0;s<t.length;s++)O(e,t.charCodeAt(s))}function O(e,t){let[n,s,r]=e.keys;e.crcKey0.append([t]),n=~e.crcKey0.get(),s=me(I.imul(me(s+ye(n)),134775813)+1),e.crcKey2.append([s>>>24]),r=~e.crcKey2.get(),e.keys=[n,s,r]}function we(e){const t=2|e.keys[2];return ye(I.imul(t,1^t)>>>8)}function ye(e){return 255&e}function me(e){return 4294967295&e}const _e="deflate-raw";class Fe extends k{constructor(t,{chunkSize:n,CompressionStream:s,CompressionStreamNative:r}){super({});const{compressed:a,encrypted:o,useCompressionStream:l,password:h,passwordVerification:i,encryptionStrength:c,zipCrypto:u,signed:f,level:p}=t,d=this;let y,g,m=be(super.readable);o&&!u||!f||([m,y]=m.tee(),y=D(y,new te)),a&&(m=ve(m,l,{level:p,chunkSize:n},r,s)),o&&(u?m=D(m,new Le(h,i)):(g=new Ue(h,c),m=D(m,g))),Se(d,m,async()=>{let b;o&&!u&&(b=g.signature),o&&!u||!f||(b=await y.getReader().read(),b=new M(b.value.buffer).getUint32(0)),d.signature=b})}}class Ge extends k{constructor(t,{chunkSize:n,DecompressionStream:s,DecompressionStreamNative:r}){super({});const{zipCrypto:a,encrypted:o,password:l,passwordVerification:h,signed:i,signature:c,encryptionStrength:u,compressed:f,useCompressionStream:p}=t;let d,y,g=be(super.readable);o&&(a?g=D(g,new We(l,h)):(y=new Pe(l,i,u),g=D(g,y))),f&&(g=ve(g,p,{chunkSize:n},r,s)),o&&!a||!i||([g,d]=g.tee(),d=D(d,new te)),Se(this,g,async()=>{if((!o||a)&&i){const m=await d.getReader().read(),b=new M(m.value.buffer);if(c!=b.getUint32(0,!1))throw new z(re)}})}}function be(e){return D(e,new k({transform(t,n){t&&t.length&&n.enqueue(t)}}))}function Se(e,t,n){t=D(t,new k({flush:n})),S.defineProperty(e,"readable",{get:()=>t})}function ve(e,t,n,s,r){try{e=D(e,new(t&&s?s:r)(_e,n))}catch(a){if(!t)throw a;e=D(e,new r(_e,n))}return e}function D(e,t){return e.pipeThrough(t)}class Oe extends k{constructor(t,n){const s=new t(n);super({transform(r,a){a.enqueue(s.append(r))},flush(r){const a=s.flush();a&&r.enqueue(a)}})}}const ke="data";class Xe{constructor(t,n,s,r){const{codecType:a}=s;let o;a.startsWith("deflate")?o=Fe:a.startsWith("inflate")&&(o=Ge),S.assign(this,{CodecStream:o,readable:t,writable:n,options:s,config:r})}async run(){const{CodecStream:t,readable:n,writable:s,options:r,config:a}=this,o=new t(r,a);let l=0;await n.pipeThrough(o).pipeThrough(new k({transform(i,c){i&&i.length&&(l+=i.length,c.enqueue(i))}})).pipeTo(s,{preventClose:!0,preventAbort:!0});const{signature:h}=o;return{size:l,signature:h}}}function Ce(e){return class extends Oe{constructor(t,n){super(e,n)}}}const X=new Z,j=new Z;let De,A=0;async function je(e){try{const{options:t,scripts:n,config:s}=e;n&&n.length&&importScripts.apply(void 0,n),self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=Ce(self.Deflate)),self.Inflate&&(s.DecompressionStream=Ce(self.Inflate));const r={highWaterMark:1,size:()=>s.chunkSize},a=e.readable||new Re({async pull(h){let i=new P(f=>X.set(A,f));J({type:"pull",messageId:A}),A=(A+1)%Number.MAX_SAFE_INTEGER;const{value:c,done:u}=await i;h.enqueue(c),u&&h.close()}},r),o=e.writable||new Ae({async write(h){let i;const c=new P(u=>i=u);j.set(A,i),J({type:ke,data:h,messageId:A}),A=(A+1)%Number.MAX_SAFE_INTEGER,await c}},r);De=new Xe(a,o,t,s);const l=await De.run();try{await o.close()}catch{}J({type:"close",result:l})}catch(t){ze(t)}}function J(e){if(e.data){let{data:t}=e;if(t&&t.length)try{t=new w(t),e.data=t.buffer,V(e,[e.data])}catch{V(e)}else V(e)}else V(e)}function ze(e){const{message:t,stack:n,code:s,name:r}=e;V({error:{message:t,stack:n,code:s,name:r}})}function Ie(e,t,n){return class{constructor(r){const a=this;S.hasOwn(r,"level")&&r.level===void 0&&delete r.level,a.codec=new e(S.assign({},t,r)),n(a.codec,o=>{if(a.pendingData){const{pendingData:l}=a;a.pendingData=new w(l.length+o.length),l.set(l,0),l.set(o,l.length)}else a.pendingData=new w(o)})}append(r){return this.codec.push(r),s(this)}flush(){return this.codec.push(new w,!0),s(this)}};function s(r){if(r.pendingData){const a=r.pendingData;return r.pendingData=null,a}return new w}}addEventListener("message",async e=>{const t=e.data,{type:n,messageId:s,data:r,done:a}=t;try{if(n=="start"&&je(t),n==ke){const o=X.get(s);X.delete(s),o({value:new w(r),done:a})}if(n=="ack"){const o=j.get(s);j.delete(s),o()}}catch(o){ze(o)}}),self.initCodec=()=>{const{Deflate:e,Inflate:t}=((n,s={},r)=>({Deflate:Ie(n.Deflate,s.deflate,r),Inflate:Ie(n.Inflate,s.inflate,r)}))(pako,{deflate:{raw:!0},inflate:{raw:!0}},(n,s)=>n.onData=s);self.Deflate=e,self.Inflate=t}})();