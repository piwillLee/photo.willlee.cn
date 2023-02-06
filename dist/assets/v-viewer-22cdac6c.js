import{V as O}from"./viewerjs-b920bff4.js";import"./vue-feca26f7.js";import{F as ye,r as be,w as S,d as pe,z as ge,a3 as U,ae as B,n as A,o as $e,c as me,G as Te}from"./@vue-cf37faed.js";/*!
 * v-viewer v3.0.11
 * https://github.com/mirari/v-viewer#readme
 *
 * Copyright 2022 mirari
 * Released under the MIT license
 *
 * Date: 2022-10-25T08:49:33.301Z
 */var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function we(e){return e}var re=we;function _e(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}var he=_e,Oe=he,G=Math.max;function je(e,r,t){return r=G(r===void 0?e.length-1:r,0),function(){for(var n=arguments,i=-1,c=G(n.length-r,0),u=Array(c);++i<c;)u[i]=n[r+i];i=-1;for(var s=Array(r+1);++i<r;)s[i]=n[i];return s[r]=t(u),Oe(e,this,s)}}var Ie=je;function Se(e){return function(){return e}}var Ae=Se,xe=typeof I=="object"&&I&&I.Object===Object&&I,te=xe,Ee=te,Pe=typeof self=="object"&&self&&self.Object===Object&&self,ke=Ee||Pe||Function("return this")(),E=ke,Me=E,Le=Me.Symbol,ne=Le,D=ne,ie=Object.prototype,Ve=ie.hasOwnProperty,Ce=ie.toString,h=D?D.toStringTag:void 0;function Fe(e){var r=Ve.call(e,h),t=e[h];try{e[h]=void 0;var n=!0}catch{}var i=Ce.call(e);return n&&(r?e[h]=t:delete e[h]),i}var Ne=Fe,Re=Object.prototype,Ue=Re.toString;function Be(e){return Ue.call(e)}var Ge=Be,W=ne,De=Ne,We=Ge,Ke="[object Null]",qe="[object Undefined]",K=W?W.toStringTag:void 0;function He(e){return e==null?e===void 0?qe:Ke:K&&K in Object(e)?De(e):We(e)}var P=He;function Je(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var w=Je,Xe=P,ze=w,Qe="[object AsyncFunction]",Ye="[object Function]",Ze="[object GeneratorFunction]",er="[object Proxy]";function rr(e){if(!ze(e))return!1;var r=Xe(e);return r==Ye||r==Ze||r==Qe||r==er}var oe=rr,tr=E,nr=tr["__core-js_shared__"],ir=nr,V=ir,q=function(){var e=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function or(e){return!!q&&q in e}var ar=or,sr=Function.prototype,cr=sr.toString;function ur(e){if(e!=null){try{return cr.call(e)}catch{}try{return e+""}catch{}}return""}var fr=ur,vr=oe,dr=ar,lr=w,yr=fr,br=/[\\^$.*+?()[\]{}|]/g,pr=/^\[object .+?Constructor\]$/,gr=Function.prototype,$r=Object.prototype,mr=gr.toString,Tr=$r.hasOwnProperty,wr=RegExp("^"+mr.call(Tr).replace(br,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _r(e){if(!lr(e)||dr(e))return!1;var r=vr(e)?wr:pr;return r.test(yr(e))}var hr=_r;function Or(e,r){return e==null?void 0:e[r]}var jr=Or,Ir=hr,Sr=jr;function Ar(e,r){var t=Sr(e,r);return Ir(t)?t:void 0}var xr=Ar,Er=xr,Pr=function(){try{var e=Er(Object,"defineProperty");return e({},"",{}),e}catch{}}(),kr=Pr,Mr=Ae,H=kr,Lr=re,Vr=H?function(e,r){return H(e,"toString",{configurable:!0,enumerable:!1,value:Mr(r),writable:!0})}:Lr,Cr=Vr,Fr=800,Nr=16,Rr=Date.now;function Ur(e){var r=0,t=0;return function(){var n=Rr(),i=Nr-(n-t);if(t=n,i>0){if(++r>=Fr)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}var Br=Ur,Gr=Cr,Dr=Br,Wr=Dr(Gr),Kr=Wr,qr=re,Hr=Ie,Jr=Kr;function Xr(e,r){return Jr(Hr(e,r,qr),e+"")}var zr=Xr;function Qr(e,r){return e===r||e!==e&&r!==r}var ae=Qr,Yr=9007199254740991;function Zr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Yr}var se=Zr,et=oe,rt=se;function tt(e){return e!=null&&rt(e.length)&&!et(e)}var ce=tt,nt=9007199254740991,it=/^(?:0|[1-9]\d*)$/;function ot(e,r){var t=typeof e;return r=r??nt,!!r&&(t=="number"||t!="symbol"&&it.test(e))&&e>-1&&e%1==0&&e<r}var ue=ot,at=ae,st=ce,ct=ue,ut=w;function ft(e,r,t){if(!ut(t))return!1;var n=typeof r;return(n=="number"?st(t)&&ct(r,t.length):n=="string"&&r in t)?at(t[r],e):!1}var vt=ft;function dt(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var lt=dt;function yt(e){return e!=null&&typeof e=="object"}var k=yt,bt=P,pt=k,gt="[object Arguments]";function $t(e){return pt(e)&&bt(e)==gt}var mt=$t,J=mt,Tt=k,fe=Object.prototype,wt=fe.hasOwnProperty,_t=fe.propertyIsEnumerable,ht=J(function(){return arguments}())?J:function(e){return Tt(e)&&wt.call(e,"callee")&&!_t.call(e,"callee")},Ot=ht,jt=Array.isArray,It=jt,F={exports:{}};function St(){return!1}var At=St;(function(e,r){var t=E,n=At,i=r&&!r.nodeType&&r,c=i&&!0&&e&&!e.nodeType&&e,u=c&&c.exports===i,s=u?t.Buffer:void 0,v=s?s.isBuffer:void 0,a=v||n;e.exports=a})(F,F.exports);var xt=P,Et=se,Pt=k,kt="[object Arguments]",Mt="[object Array]",Lt="[object Boolean]",Vt="[object Date]",Ct="[object Error]",Ft="[object Function]",Nt="[object Map]",Rt="[object Number]",Ut="[object Object]",Bt="[object RegExp]",Gt="[object Set]",Dt="[object String]",Wt="[object WeakMap]",Kt="[object ArrayBuffer]",qt="[object DataView]",Ht="[object Float32Array]",Jt="[object Float64Array]",Xt="[object Int8Array]",zt="[object Int16Array]",Qt="[object Int32Array]",Yt="[object Uint8Array]",Zt="[object Uint8ClampedArray]",en="[object Uint16Array]",rn="[object Uint32Array]",f={};f[Ht]=f[Jt]=f[Xt]=f[zt]=f[Qt]=f[Yt]=f[Zt]=f[en]=f[rn]=!0;f[kt]=f[Mt]=f[Kt]=f[Lt]=f[qt]=f[Vt]=f[Ct]=f[Ft]=f[Nt]=f[Rt]=f[Ut]=f[Bt]=f[Gt]=f[Dt]=f[Wt]=!1;function tn(e){return Pt(e)&&Et(e.length)&&!!f[xt(e)]}var nn=tn;function on(e){return function(r){return e(r)}}var an=on,N={exports:{}};(function(e,r){var t=te,n=r&&!r.nodeType&&r,i=n&&!0&&e&&!e.nodeType&&e,c=i&&i.exports===n,u=c&&t.process,s=function(){try{var v=i&&i.require&&i.require("util").types;return v||u&&u.binding&&u.binding("util")}catch{}}();e.exports=s})(N,N.exports);var sn=nn,cn=an,X=N.exports,z=X&&X.isTypedArray,un=z?cn(z):sn,fn=un,vn=lt,dn=Ot,ln=It,yn=F.exports,bn=ue,pn=fn,gn=Object.prototype,$n=gn.hasOwnProperty;function mn(e,r){var t=ln(e),n=!t&&dn(e),i=!t&&!n&&yn(e),c=!t&&!n&&!i&&pn(e),u=t||n||i||c,s=u?vn(e.length,String):[],v=s.length;for(var a in e)(r||$n.call(e,a))&&!(u&&(a=="length"||i&&(a=="offset"||a=="parent")||c&&(a=="buffer"||a=="byteLength"||a=="byteOffset")||bn(a,v)))&&s.push(a);return s}var Tn=mn,wn=Object.prototype;function _n(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||wn;return e===t}var hn=_n;function On(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var jn=On,In=w,Sn=hn,An=jn,xn=Object.prototype,En=xn.hasOwnProperty;function Pn(e){if(!In(e))return An(e);var r=Sn(e),t=[];for(var n in e)n=="constructor"&&(r||!En.call(e,n))||t.push(n);return t}var kn=Pn,Mn=Tn,Ln=kn,Vn=ce;function Cn(e){return Vn(e)?Mn(e,!0):Ln(e)}var Fn=Cn,Nn=zr,Rn=ae,Un=vt,Bn=Fn,ve=Object.prototype,Gn=ve.hasOwnProperty,Dn=Nn(function(e,r){e=Object(e);var t=-1,n=r.length,i=n>2?r[2]:void 0;for(i&&Un(r[0],r[1],i)&&(n=1);++t<n;)for(var c=r[t],u=Bn(c),s=-1,v=u.length;++s<v;){var a=u[s],g=e[a];(g===void 0||Rn(g,ve[a])&&!Gn.call(e,a))&&(e[a]=c[a])}return e}),Wn=Dn;const Kn=typeof window<"u"&&window!==null;Xn();const qn=Object.prototype.propertyIsEnumerable,Q=Object.getOwnPropertySymbols;function x(e){return typeof e=="function"||toString.call(e)==="[object Object]"}function Hn(e){return typeof e=="object"?e===null:typeof e!="function"}function Jn(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"}function Xn(){return Kn&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function zn(e,...r){if(!x(e))throw new TypeError("expected the first argument to be an object");if(r.length===0||typeof Symbol!="function"||typeof Q!="function")return e;for(const t of r){const n=Q(t);for(const i of n)qn.call(t,i)&&(e[i]=t[i])}return e}function de(e,...r){let t=0;for(Hn(e)&&(e=r[t++]),e||(e={});t<r.length;t++)if(x(r[t])){for(const n of Object.keys(r[t]))Jn(n)&&(x(e[n])&&x(r[t][n])?de(e[n],r[t][n]):e[n]=r[t][n]);zn(e,r[t])}return e}const Qn=({images:e=[],options:r})=>{r=de(r,{inline:!1});const t=document.createElement("div"),n=U("div",{style:{display:"none"},class:["__viewer-token"]},e.map(s=>U("img",typeof s=="string"?{src:s}:s)));B(n,t);const i=t.firstElementChild;document.body.appendChild(i);const c=new O(i,r),u=c.destroy.bind(c);return c.destroy=function(){return u(),B(null,t),c},c.show(),i.addEventListener("hidden",function(){this.viewer===c&&c.destroy()}),c};var Yn=E,Zn=function(){return Yn.Date.now()},ei=Zn,ri=/\s/;function ti(e){for(var r=e.length;r--&&ri.test(e.charAt(r)););return r}var ni=ti,ii=ni,oi=/^\s+/;function ai(e){return e&&e.slice(0,ii(e)+1).replace(oi,"")}var si=ai,ci=P,ui=k,fi="[object Symbol]";function vi(e){return typeof e=="symbol"||ui(e)&&ci(e)==fi}var di=vi,li=si,Y=w,yi=di,Z=0/0,bi=/^[-+]0x[0-9a-f]+$/i,pi=/^0b[01]+$/i,gi=/^0o[0-7]+$/i,$i=parseInt;function mi(e){if(typeof e=="number")return e;if(yi(e))return Z;if(Y(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Y(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=li(e);var t=pi.test(e);return t||gi.test(e)?$i(e.slice(2),t?2:8):bi.test(e)?Z:+e}var Ti=mi,wi=w,C=ei,ee=Ti,_i="Expected a function",hi=Math.max,Oi=Math.min;function ji(e,r,t){var n,i,c,u,s,v,a=0,g=!1,o=!1,d=!0;if(typeof e!="function")throw new TypeError(_i);r=ee(r)||0,wi(t)&&(g=!!t.leading,o="maxWait"in t,c=o?hi(ee(t.maxWait)||0,r):c,d="trailing"in t?!!t.trailing:d);function y(l){var p=n,_=i;return n=i=void 0,a=l,u=e.apply(_,p),u}function b(l){return a=l,s=setTimeout(T,r),g?y(l):u}function $(l){var p=l-v,_=l-a,R=r-p;return o?Oi(R,c-_):R}function m(l){var p=l-v,_=l-a;return v===void 0||p>=r||p<0||o&&_>=c}function T(){var l=C();if(m(l))return j(l);s=setTimeout(T,$(l))}function j(l){return s=void 0,d&&n?y(l):(n=i=void 0,u)}function M(){s!==void 0&&clearTimeout(s),a=0,n=v=i=s=void 0}function le(){return s===void 0?u:j(C())}function L(){var l=C(),p=m(l);if(n=arguments,i=this,v=l,p){if(s===void 0)return b(v);if(o)return clearTimeout(s),s=setTimeout(T,r),y(v)}return s===void 0&&(s=setTimeout(T,r)),u}return L.cancel=M,L.flush=le,L}var Ii=ji;const Si=({name:e="viewer",debug:r=!1}={})=>{async function t(o,d,y=!1,b=!1){await A(),!(b&&!n(o))&&(y||!o[`$${e}`]?(u(o),o[`$${e}`]=new O(o,d),a("Viewer created")):(o[`$${e}`].update(),a("Viewer updated")))}function n(o){const d=o.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g),y=d?d.join(""):void 0;return o.__viewerImageDiffCache===y?(a("Element change detected, but image(s) has not changed"),!1):(a("Image change detected"),o.__viewerImageDiffCache=y,!0)}function i(o,d,y,b){s(o);const $=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(!$){a("Observer not supported");return}const m=new $(j=>{j.forEach(M=>{a(`Viewer mutation:${M.type}`),y(o,d,b,!0)})}),T={attributes:!0,childList:!0,characterData:!0,subtree:!0};m.observe(o,T),o.__viewerMutationObserver=m,a("Observer created")}function c(o,d,y,b){o.__viewerUnwatch=S(()=>d.value,($,m)=>{a("Change detected by watcher: ",d.value),b(o,$,!0,!1)},{deep:!0}),a("Watcher created, expression: ",d.value)}function u(o){o[`$${e}`]&&(o[`$${e}`].destroy(),delete o[`$${e}`],a("Viewer destroyed"))}function s(o){o.__viewerMutationObserver&&(o.__viewerMutationObserver.disconnect(),delete o.__viewerMutationObserver,a("observer destroyed"))}function v(o){o.__viewerUnwatch&&(o.__viewerUnwatch(),delete o.__viewerUnwatch,a("Watcher destroyed"))}function a(...o){r&&console.log(...o)}return{mounted(o,d,y){a("Viewer bind");const b=Ii(t,50);b(o,d.value),c(o,d,y,b),d.modifiers.static||i(o,d.value,b,d.modifiers.rebuild)},unmounted(o){a("Viewer unbind"),s(o),v(o),u(o)}}};var Ai=(e,r)=>{const t=e.__vccOpts||e;for(const[n,i]of r)t[n]=i;return t};const xi=ye({name:"Viewer",props:{images:{type:Array,default:()=>[]},rebuild:{type:Boolean,default:!1},trigger:{type:Object,default:null},options:{type:Object,default:()=>null}},emits:["inited"],setup(e,{emit:r}){let t;const n=be();function i(){t=new O(n.value,e.options),r("inited",t)}function c(){t&&t.destroy()}function u(){c(),i()}function s(){t?(t.update(),r("inited",t)):i()}function v(){e.rebuild?u():s()}const a={deep:!0};return S(()=>e.images,()=>A(()=>v()),a),S(()=>e.trigger,()=>A(()=>v()),a),S(()=>e.options,()=>A(()=>u()),a),pe(()=>i()),ge(()=>c()),{root:n,createViewer:i,rebuildViewer:u,updateViewer:s,destroyViewer:c}}}),Ei={ref:"root"};function Pi(e,r,t,n,i,c){return $e(),me("div",Ei,[Te(e.$slots,"default",{images:e.images,options:e.options})],512)}var ki=Ai(xi,[["render",Pi]]),Ci={install(e,{name:r="viewer",debug:t=!1,defaultOptions:n}={}){n&&O.setDefaults(n),e.config.globalProperties[`$${r}Api`]=Qn,e.component(r,Wn(ki,{name:r})),e.directive(r,Si({name:r,debug:t}))},setDefaults(e){O.setDefaults(e)}};export{Ci as i};
