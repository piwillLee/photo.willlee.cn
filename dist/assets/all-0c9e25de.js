import{g as w,h as k}from"./element-plus-310d5728.js";import"./vue-feca26f7.js";import{g as o}from"./gsap-10963069.js";import{u as x}from"./albumStore-c231181f.js";import{F as y,r as l,d as L,n as m,h as R,o as s,c as i,K as E,P as C,J as u,an as D,Q as I,am as S,I as W,a as f}from"./@vue-cf37faed.js";import{_ as B}from"./index-1f3a11a1.js";import"./@vueuse-91afb95b.js";import"./@element-plus-000711a9.js";import"./@ctrl-43a4208a.js";import"./lodash-es-020babd1.js";import"./@popperjs-c75af06c.js";import"./pinia-fd6dbd4c.js";import"./axios-c47e0cf1.js";import"./form-data-d2a9677b.js";import"./vue-router-c1c73eb7.js";import"./viewerjs-b920bff4.js";import"./v-viewer-22cdac6c.js";import"./vue-lazyload-96b8d3d2.js";const A={class:"viewer"},F=["src","data-src"],U=y({__name:"all",setup(V){const n=l([]);x().albumItemsList.forEach(e=>{e.itemData.forEach(a=>{n.value.push({thumbnail:a.links.thumbnail_url,source:a.links.url})})});const d=l({url:"data-src"}),p=l(null),r=[],t=[],_=e=>{r.push(e)},h=e=>{t.push(e)};return L(()=>{for(let e=0;e<r.length;e++)t[e].onload=()=>{o.to(".img",{height:t[0].offsetWidth}),r[e].style.backdropFilter="none",t[e].style.display="block",o.from(t[e],{autoAlpha:0,zIndex:-9,duration:1,stagger:1})};m(()=>{t[0].scrollIntoView()}),window.addEventListener("resize",()=>{o.to(".img",{height:t[0].offsetWidth})}),window.addEventListener("beforeunload",()=>{setTimeout(()=>{t[0].offsetWidth},50),m(()=>{o.to(".img",{height:t[0].offsetWidth})})})}),new URL("@/assets/album/qtgy/l1.jpg",self.location).href,R(()=>({background:`url(${new URL("@/assets/album/qtgy/l1.jpg",self.location).href})`})),(e,a)=>{const g=w,b=k,v=D("viewer");return s(),i("div",{class:"all",ref_key:"albumRef",ref:p},[E((s(),i("div",A,[C(b,{class:"content"},{default:u(()=>[(s(!0),i(I,null,S(n.value,c=>(s(),W(g,{xs:12,sm:12,md:8,lg:8,xl:8},{default:u(()=>[f("div",{ref_for:!0,ref:_,class:"imgContainer"},[f("img",{ref_for:!0,ref:h,class:"img",src:c.thumbnail,"data-src":c.source},null,8,F)])]),_:2},1024))),256))]),_:1})])),[[v,d.value]])],512)}}});const oe=B(U,[["__scopeId","data-v-367b73b3"]]);export{oe as default};
