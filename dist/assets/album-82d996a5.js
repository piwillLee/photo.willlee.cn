import{g as x,h as S,e as T}from"./element-plus-310d5728.js";import"./vue-feca26f7.js";import{r as d,_ as D}from"./index-1f3a11a1.js";import{u as E}from"./albumStore-c231181f.js";import{g as R}from"./gsap-10963069.js";import{s as A}from"./pinia-fd6dbd4c.js";import{a as L}from"./vue-router-c1c73eb7.js";import{F as N,r as B,d as V,n as O,o as c,c as i,a as t,P as o,J as s,u as n,a0 as u,a4 as p,a6 as f,Q as F,am as P,aj as W,ak as j}from"./@vue-cf37faed.js";import"./@vueuse-91afb95b.js";import"./@element-plus-000711a9.js";import"./@ctrl-43a4208a.js";import"./lodash-es-020babd1.js";import"./@popperjs-c75af06c.js";import"./viewerjs-b920bff4.js";import"./v-viewer-22cdac6c.js";import"./vue-lazyload-96b8d3d2.js";import"./axios-c47e0cf1.js";import"./form-data-d2a9677b.js";const q=a=>(W("data-v-03aaaf9a"),a=a(),j(),a),H={class:"album",ref:"albumRef"},J={class:"header"},M=["src"],Q={class:"cover-content"},z={class:"left"},G=q(()=>t("div",{class:"cover-title time"},"📷",-1)),K={class:"cover-title time"},U={class:"cover-title"},X={class:"right"},Y={class:"content"},Z=["src"],$=N({__name:"album",setup(a){const l=E(),{currentAlbum:r}=A(l),v=L().query.id;l.getAlbumById(v);const h=e=>e.links.url,_=B();V(()=>{O(()=>{_.value.scrollIntoView(0,0)});const e=R.timeline({duration:.75,ease:"power2.out"});e.fromTo(".cover-title",{x:-200},{x:0,stagger:.3}),e.fromTo(".right",{y:-10,opacity:0},{y:10,opacity:1,repeat:-1,yoyo:!0})});const g=()=>{d.push("/")},w=()=>{d.push("/contents")};return(e,ot)=>{const m=x,y=S,k=p("ArrowDown"),C=T,b=p("viewer");return c(),i("div",H,[t("div",J,[o(y,{class:"header-content"},{default:s(()=>[o(m,{span:12,class:"header-item logo",onClick:g},{default:s(()=>[f("WILLLEE·PHOTO")]),_:1}),o(m,{span:12,class:"header-item about",onClick:w},{default:s(()=>[f("CONTENTS")]),_:1})]),_:1})]),t("div",{class:"cover",ref_key:"coverRef",ref:_},[t("img",{src:n(r).itemData[0].links.url,alt:""},null,8,M),t("div",Q,[t("div",z,[G,t("div",K,u(n(r).idData.intro),1),t("div",U,u(n(r).idData.name),1)]),t("div",X,[o(C,null,{default:s(()=>[o(k)]),_:1})])])],512),t("div",Y,[o(b,null,{default:s(()=>[(c(!0),i(F,null,P(n(r).itemData,I=>(c(),i("img",{src:h(I),alt:""},null,8,Z))),256))]),_:1})])],512)}}});const yt=D($,[["__scopeId","data-v-03aaaf9a"]]);export{yt as default};
