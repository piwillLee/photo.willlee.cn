import{g as x,h as L}from"./element-plus-310d5728.js";import"./vue-feca26f7.js";import{g as o}from"./gsap-10963069.js";import{u as R}from"./albumStore-e5211051.js";import{F as E,r as l,d as C,n as m,h as D,o as s,c as i,K as u,P as I,J as d,an as f,Q as S,am as W,I as z,a as _}from"./@vue-cf37faed.js";import{_ as B}from"./index-1cc81d04.js";import"./@vueuse-91afb95b.js";import"./@element-plus-000711a9.js";import"./@ctrl-43a4208a.js";import"./lodash-es-020babd1.js";import"./@popperjs-c75af06c.js";import"./pinia-fd6dbd4c.js";import"./axios-c47e0cf1.js";import"./form-data-d2a9677b.js";import"./vue-router-e8322968.js";import"./viewerjs-b920bff4.js";import"./v-viewer-22cdac6c.js";import"./vue3-lazyload-135b9c17.js";const A={class:"viewer"},F=["data-src"],U=E({__name:"all",setup(V){const n=l([]);R().albumItemsList.forEach(e=>{e.itemData.forEach(r=>{n.value.push({thumbnail:r.links.thumbnail_url,source:r.links.url})})});const p=l({url:"data-src"}),h=l(null),a=[],t=[],g=e=>{a.push(e)},v=e=>{t.push(e)};return C(()=>{for(let e=0;e<a.length;e++)t[e].onload=()=>{o.to(".img",{height:t[0].offsetWidth}),a[e].style.backdropFilter="none",t[e].style.display="block",o.from(t[e],{autoAlpha:0,zIndex:-9,duration:1,stagger:1})};m(()=>{t[0].scrollIntoView()}),window.addEventListener("resize",()=>{o.to(".img",{height:t[0].offsetWidth})}),window.addEventListener("beforeunload",()=>{setTimeout(()=>{t[0].offsetWidth},50),m(()=>{o.to(".img",{height:t[0].offsetWidth})})})}),new URL("@/assets/album/qtgy/l1.jpg",self.location).href,D(()=>({background:`url(${new URL("@/assets/album/qtgy/l1.jpg",self.location).href})`})),(e,r)=>{const b=x,w=L,k=f("lazy"),y=f("viewer");return s(),i("div",{class:"all",ref_key:"albumRef",ref:h},[u((s(),i("div",A,[I(w,{class:"content"},{default:d(()=>[(s(!0),i(S,null,W(n.value,c=>(s(),z(b,{xs:12,sm:12,md:8,lg:8,xl:8},{default:d(()=>[_("div",{ref_for:!0,ref:g,class:"imgContainer"},[u(_("img",{ref_for:!0,ref:v,class:"img","data-src":c.source},null,8,F),[[k,c.thumbnail]])])]),_:2},1024))),256))]),_:1})])),[[y,p.value]])],512)}}});const se=B(U,[["__scopeId","data-v-7c9da532"]]);export{se as default};