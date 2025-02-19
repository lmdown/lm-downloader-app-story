import{a}from"./index.js";import{_ as s}from"./app-list.vue_vue_type_style_index_0_lang.js";import{_ as t}from"./top-right-controls.vue_vue_type_style_index_0_lang.js";import{e,b as l,G as o,aa as i,a6 as n,j as p,a4 as r,a5 as c,V as d,a2 as m,a8 as u,Q as f,u as _,F as y,ab as v,a3 as x}from"./vue.js";import{h as g,F as w,G as b,p as h,A as j,b as A,z as k,s as z}from"./vuetify.js";import"./pinia.js";import"./vuei18n.js";import"./lmd-locales.js";import"./common-util.js";const F={style:{"font-size":"20px"}},$=["innerHTML"],B=e({__name:"StoryPostDetail",setup(e){const B=l({}),I=l([]),L=i(),M=v();o((async()=>{const s=L.params.id,t=await(async s=>(await a.get(`/app-store/app-story/${s}`)).data)(s);B.value=t;const e=B.value.relatedAppIds;if(e){const s=await(async s=>(await a.get(`/app-store/ai-app-info/?ids=${s}`)).data.data)(e);I.value=s}}));const C=()=>{M.go(-1)};return(a,e)=>(x(),n(y,null,[p(b,{elevation:"0",class:"window-drag pt-4"},{prepend:r((()=>[p(g,{class:"window-no-drag",onClick:C,variant:"plain"},{default:r((()=>[p(w,{class:"lmd-back-icon mr-3",style:{"font-size":"1.4rem"},size:"36",icon:"mdi-chevron-left",color:"#FB6C00"}),c("span",F,d(a.$t("LMAppDetail.goBack")),1)])),_:1})])),append:r((()=>[p(t)])),_:1}),p(z,{style:{"max-width":"none"},class:"mx-8 mt-4"},{default:r((()=>[p(h,{class:"story-post-content flex-column align-content-center"},{default:r((()=>[p(j,{class:"text-center pt-8 pb-6 px-8",width:"100%",style:{flex:"1","font-weight":"bold"}},{default:r((()=>[f(d(_(B).title),1)])),_:1}),p(A,{src:_(B).coverImageUrl,width:"80%",class:"mx-auto","aspect-ratio":"16/9",cover:""},null,8,["src"]),p(k,{class:"px-8 py-8"},{default:r((()=>[c("div",{innerHTML:_(B).content},null,8,$)])),_:1}),p(k,{class:"responsive-iframe-container"},{default:r((()=>e[0]||(e[0]=[c("iframe",{src:"//player.bilibili.com/player.html?isOutside=true&aid=113882819465634&bvid=BV1QdfnYwEFc&cid=28053735497&p=1&autoplay=0",scrolling:"no",border:"2",frameborder:"no",framespacing:"0",allowfullscreen:"true"},null,-1)]))),_:1})])),_:1}),_(B).relatedAppIds?(x(),m(h,{key:0,class:"flex-column"},{default:r((()=>[p(j,{class:"text-left py-6 px-0",width:"100%",style:{flex:"1","font-weight":"bold"}},{default:r((()=>[f(d(a.$t("StoryPost.RelatedApps")),1)])),_:1}),p(s,{apps:_(I)},null,8,["apps"]),e[1]||(e[1]=c("div",{height:"12px",class:"mb-7"},null,-1))])),_:1})):u("",!0)])),_:1})],64))}});export{B as default};
