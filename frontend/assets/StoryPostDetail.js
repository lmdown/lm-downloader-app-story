import{a as g,d as h,r as d,o as v,P as k,e as A,g as t,w as e,V as B,p as l,Q as C,t as p,R as b,c as I,b as R,m as u,G as m,H as f,u as s,k as S,D as $,s as T,F as D,S as L,i as _}from"./index.js";import{_ as M}from"./app-list.vue_vue_type_style_index_0_lang.js";import{_ as N}from"./top-right-controls.vue_vue_type_style_index_0_lang.js";import"./IPCChannelName.js";const z=async o=>(await g.get(`/app-store/ai-app-info/?ids=${o}`)).data.data,F=async o=>(await g.get(`/app-store/app-story/${o}`)).data,H={style:{"font-size":"20px"}},P=["innerHTML"],j=h({__name:"StoryPostDetail",setup(o){const a=d({}),c=d([]),y=k(),w=L();v(async()=>{const n=y.params.id,r=await F(n);a.value=r;const i=a.value.relatedAppIds;if(i){const V=await z(i);c.value=V}});const x=()=>{w.go(-1)};return(n,r)=>(_(),A(D,null,[t(b,{elevation:"0",class:"window-drag pt-4"},{prepend:e(()=>[t(B,{class:"window-no-drag",onClick:x,variant:"plain"},{default:e(()=>[t(C,{class:"lmd-back-icon mr-3",style:{"font-size":"1.4rem"},size:"36",icon:"mdi-chevron-left",color:"#FB6C00"}),l("span",H,p(n.$t("LMAppDetail.goBack")),1)]),_:1})]),append:e(()=>[t(N)]),_:1}),t(T,{style:{"max-width":"none"},class:"mx-8 mt-4"},{default:e(()=>[t(u,{class:"story-post-content flex-column align-content-center"},{default:e(()=>[t(m,{class:"text-center pt-8 pb-6 px-8",width:"100%",style:{flex:"1","font-weight":"bold"}},{default:e(()=>[f(p(s(a).title),1)]),_:1}),t(S,{src:s(a).coverImageUrl,width:"80%",class:"mx-auto","aspect-ratio":"16/9",cover:""},null,8,["src"]),t($,{class:"px-8 py-8"},{default:e(()=>[l("div",{innerHTML:s(a).content},null,8,P)]),_:1})]),_:1}),s(a).relatedAppIds?(_(),I(u,{key:0,class:"flex-column"},{default:e(()=>[t(m,{class:"text-left py-6 px-0",width:"100%",style:{flex:"1","font-weight":"bold"}},{default:e(()=>[f(p(n.$t("StoryPost.RelatedApps")),1)]),_:1}),t(M,{apps:s(c)},null,8,["apps"]),r[0]||(r[0]=l("div",{height:"12px",class:"mb-7"},null,-1))]),_:1})):R("",!0)]),_:1})],64))}});export{j as default};
