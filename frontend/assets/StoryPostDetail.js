import{a}from"./index.js";import{_ as t}from"./app-list.vue_vue_type_style_index_0_lang.js";import{_ as s}from"./top-right-controls.vue_vue_type_style_index_0_lang.js";import{e,b as l,G as o,aa as n,a6 as p,j as i,a4 as r,a5 as c,V as d,a2 as m,a8 as u,Q as f,u as _,F as y,ab as x,a3 as v}from"./vue.js";import{h as w,F as g,G as j,p as h,A as b,b as A,z as k,s as z}from"./vuetify.js";import"./pinia.js";import"./vuei18n.js";import"./lmd-locales.js";import"./common-util.js";const $={style:{"font-size":"20px"}},F=["innerHTML"],I=e({__name:"StoryPostDetail",setup(e){const I=l({}),L=l([]),M=n(),B=x();o((async()=>{const t=M.params.id,s=await(async t=>(await a.get(`/app-store/app-story/${t}`)).data)(t);I.value=s;const e=I.value.relatedAppIds;if(e){const t=await(async t=>(await a.get(`/app-store/ai-app-info/?ids=${t}`)).data.data)(e);L.value=t}}));const C=()=>{B.go(-1)};return(a,e)=>(v(),p(y,null,[i(j,{elevation:"0",class:"window-drag pt-4"},{prepend:r((()=>[i(w,{class:"window-no-drag",onClick:C,variant:"plain"},{default:r((()=>[i(g,{class:"lmd-back-icon mr-3",style:{"font-size":"1.4rem"},size:"36",icon:"mdi-chevron-left",color:"#FB6C00"}),c("span",$,d(a.$t("LMAppDetail.goBack")),1)])),_:1})])),append:r((()=>[i(s)])),_:1}),i(z,{style:{"max-width":"none"},class:"mx-8 mt-4"},{default:r((()=>[i(h,{class:"story-post-content flex-column align-content-center"},{default:r((()=>[i(b,{class:"text-center pt-8 pb-6 px-8",width:"100%",style:{flex:"1","font-weight":"bold"}},{default:r((()=>[f(d(_(I).title),1)])),_:1}),i(A,{src:_(I).coverImageUrl,width:"80%",class:"mx-auto","aspect-ratio":"16/9",cover:""},null,8,["src"]),i(k,{class:"px-8 py-8"},{default:r((()=>[c("div",{innerHTML:_(I).content},null,8,F)])),_:1})])),_:1}),_(I).relatedAppIds?(v(),m(h,{key:0,class:"flex-column"},{default:r((()=>[i(b,{class:"text-left py-6 px-0",width:"100%",style:{flex:"1","font-weight":"bold"}},{default:r((()=>[f(d(a.$t("StoryPost.RelatedApps")),1)])),_:1}),i(t,{apps:_(L)},null,8,["apps"])])),_:1})):u("",!0)])),_:1})],64))}});export{I as default};
