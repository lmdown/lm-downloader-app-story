import{_ as a}from"./top-right-controls.vue_vue_type_style_index_0_lang-CGCtm50i.js";import{d as s,o as e,c as t,w as l,a as p,b as o,V as n,e as i,f as c,g as r,t as u,h as d,i as m,j as _,k as f,r as v,l as g,m as h,n as y,p as b,F as k,q as x,s as w,u as C,v as j,A,x as B,y as E,z as F,B as I,_ as $}from"./index-BuM7Vul5.js";import"./index-CX5Ot8TN.js";import{_ as z}from"./app-list.vue_vue_type_style_index_0_lang-DWf0W9WX.js";import{u as H}from"./lmapp-BnuOWh9y.js";import"./IPCChannelName-ChmutG-C.js";const P={class:"lmd-logo-and-app-title"},S=s({__name:"top-app-bar",setup:s=>(s,f)=>(e(),t(_,{density:"default",height:"84",elevation:"0",class:"window-drag"},{prepend:l((()=>[p("div",P,[o(n,{width:"48",height:"48",class:"ml-7 mr-4",src:"./images/icons/lmd-logo.png"}),o(i,{vertical:"",style:{opacity:"1"},color:"#EBEBF7"}),o(m,{elevation:"0",class:"ml-0"},{default:l((()=>[o(c,{class:"lmd-app-title"},{default:l((()=>[r(u(s.$t("App.title")),1)])),_:1}),o(d,{class:"lmd-app-subtitle"},{default:l((()=>[r(u(s.$t("App.subtitle")),1)])),_:1})])),_:1})])])),append:l((()=>[o(a)])),_:1}))}),q=s({__name:"top-slide",setup(a){const s=v(null);return g((async()=>{const a=await(async()=>(await f.get("/app-store/home-banner/")).data)();s.value=a})),(a,p)=>s.value?(e(),t(x,{key:0,"hide-delimiters":"",height:"auto",cycle:"",class:"home-banners-carousel"},{prev:l((({props:a})=>[o(h,{variant:"flat",class:"switch-button-prev pl-10 pr-6",onClick:a.onClick,icon:"mdi-chevron-left"},null,8,["onClick"])])),next:l((({props:a})=>[o(h,{class:"switch-button-next pl-6 pr-10",variant:"flat",onClick:a.onClick,icon:"mdi-chevron-right"},null,8,["onClick"])])),default:l((()=>[(e(!0),y(k,null,b(s.value,((a,s)=>(e(),t(C,{cover:"",key:s,onClick:s=>(a=>{j.push({name:A.StoryPostDetail,params:{id:a.id}})})(a)},{default:l((()=>[o(n,{class:"v-img",style:{"border-radius":"8px"},src:a.coverImageUrl,"aspect-ratio":3.75,cover:"",width:"100%"},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1})):w("",!0)}}),D={style:{"font-size":"1.25rem"}},L=s({__name:"suggested-apps",setup(a){const s=H(),n=v([]);return g((async()=>{await s.fetchLMApps(),n.value=s.lmApps})),(a,s)=>(e(),t(I,{class:"pl-0 pr-0 suggested-apps"},{default:l((()=>[o(E,null,{default:l((()=>[o(B,{cols:"12"},{default:l((()=>[o(i,{class:"mt-2 mb-4",style:{opacity:"1"},color:"#EBEBF7"}),p("h2",D,u(a.$t("Home.SuggestedApps")),1)])),_:1})])),_:1}),o(z,{apps:F(n)},null,8,["apps"])])),_:1}))}}),M=$(s({__name:"Home",setup:a=>(a,s)=>(e(),y(k,null,[o(S),o(I,{class:"home-page mt-0 mx-9 px-2 py-4"},{default:l((()=>[o(E,null,{default:l((()=>[o(q)])),_:1}),o(E,null,{default:l((()=>[o(L)])),_:1})])),_:1})],64))}),[["__scopeId","data-v-2544f493"]]);export{M as default};
