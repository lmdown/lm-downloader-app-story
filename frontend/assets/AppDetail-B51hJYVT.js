import{m as e,f as a,d as t,g as l,h as s,n,p,r as i,o,i as r,b as c,w as m,u,q as d,e as f,t as A,F as v,j as D,k as _,s as y,a as g,c as h,v as k,_ as x,x as L,y as w,z as I,B as b}from"./index-DDUgBJ1S.js";import"./index-B1WxPTSC.js";import{c as F}from"./install-instance-NPgSHpai.js";import{A as M}from"./AppScriptType-tEOJIb0R.js";import{A as T,_ as $}from"./installed-instance-item.vue_vue_type_script_setup_true_lang-BEGOMbS3.js";import{u as j}from"./lmapp-CVCzYaBH.js";import{_ as C}from"./top-right-controls.vue_vue_type_style_index_0_lang-CNgJqRzw.js";import"./IPCChannelName-ChmutG-C.js";const O=e("installedInstance",{state:()=>({instancesForApp:[],instanceForRunning:{}}),actions:{async getInstalledInstanceForApp(e){try{const t=await a.get(`/self-manage/installed-instance/app/${e}`);this.instancesForApp=t.data}catch(t){console.error("Failed to fetch app:",t)}},async getInstalledInstanceForRunning(e){try{const t=await a.get(`/self-manage/installed-instance/${e}`);this.instanceForRunning=t.data}catch(t){console.error("Failed to fetch app:",t)}}}}),R={key:0,class:"d-flex justify-end ga-3"},z={key:1,class:"d-flex justify-end ga-3"},S={class:"fullDescBlock overflow-y-hidden"},V=["innerHTML"],H=x(t({__name:"basic-info-and-tags",props:{lmAppData:{}},setup(e){const a=e,t=l(null),x=l(!1),L=l(!1);let w;s((()=>{w=new ResizeObserver((e=>{for(let a of e)a.target===t.value&&(x.value=a.contentRect.height>=200)})),t.value&&w.observe(t.value),t.value&&(x.value=t.value.scrollHeight>=200)})),n((()=>{w&&w.unobserve(t.value)}));const I=p((()=>{if(!a.lmAppData.installLimit)return[];return[...a.lmAppData.installLimit.os,...a.lmAppData.installLimit.hardware]}));return(e,a)=>{const l=i("VCardTitle"),s=i("v-card-text"),n=i("v-chip"),p=i("v-fab"),w=i("v-btn"),b=i("v-card"),F=i("v-dialog");return o(),r(v,null,[c(u(y),null,{default:m((()=>[c(u(d),{cols:"12",md:"6",sm:"6"},{default:m((()=>[c(l,null,{default:m((()=>[f(A(e.lmAppData.name),1)])),_:1}),c(s,null,{default:m((()=>[f(A(e.lmAppData.shortDesc),1)])),_:1})])),_:1}),c(u(d),{cols:"12",md:"6",sm:"6",class:"d-flex flex-column ga-2 pt-4"},{default:m((()=>[e.lmAppData.tags?(o(),r("div",R,[(o(!0),r(v,null,D(e.lmAppData.tags,((e,a)=>(o(),h(n,{variant:"tonal",size:"x-small",key:a},{default:m((()=>[f(A(e),1)])),_:2},1024)))),128))])):_("",!0),e.lmAppData.tags?(o(),r("div",z,[(o(!0),r(v,null,D(u(I),((e,a)=>(o(),h(n,{variant:"tonal",size:"x-small",key:a},{default:m((()=>[f(A(e?.trim()),1)])),_:2},1024)))),128))])):_("",!0)])),_:1})])),_:1}),c(u(y),null,{default:m((()=>[g("div",S,[g("p",{ref_key:"visibleText",ref:t,innerHTML:e.lmAppData.desc},null,8,V)]),u(x)?(o(),h(p,{key:0,active:!0,class:"me-4",onClick:a[0]||(a[0]=e=>L.value=!0),"prepend-icon":"mdi-unfold-more-horizontal",location:"bottom right",extended:"",absolute:"",offset:"",text:"More"})):_("",!0)])),_:1}),c(F,{modelValue:u(L),"onUpdate:modelValue":a[2]||(a[2]=e=>k(L)?L.value=e:null),width:"auto"},{default:m((()=>[c(b,{"prepend-icon":"mdi-update",title:e.lmAppData.name},{actions:m((()=>[c(w,{class:"ms-auto",text:"Ok",onClick:a[1]||(a[1]=e=>L.value=!1)})])),default:m((()=>[c(s,{innerHTML:e.lmAppData.desc},null,8,["innerHTML"])])),_:1},8,["title"])])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-4ea4d096"]]),B={class:"text-medium-emphasis mr-2"},N=["href"],P={key:1},q={class:"text-medium-emphasis mr-2"},G={key:2},U={class:"text-medium-emphasis mr-2"},W={key:3},E={class:"text-medium-emphasis mr-2"},J={key:4},K={class:"text-medium-emphasis mr-2"},Q={key:5},X={class:"text-medium-emphasis mr-2"},Y={key:6},Z={class:"text-medium-emphasis mr-2"},ee={key:7},ae={class:"text-medium-emphasis mr-2"},te=t({__name:"extra-info",props:{lmAppData:{}},setup(e){const{t:a}=L(),t=e=>{let t=a("LMAppDetail.refLinkOther");return"homepage"===e.type?t=a("LMAppDetail.refLinkHomePage"):"github"===e.type&&(t=a("LMAppDetail.refLinkGithub")),t};return(e,a)=>{const l=i("v-col"),s=i("v-row"),n=i("v-container");return o(),h(n,{class:"mx-10"},{default:m((()=>[c(s,null,{default:m((()=>[c(l,null,{default:m((()=>[e.lmAppData.refLinks&&e.lmAppData.refLinks.length>0?(o(!0),r(v,{key:0},D(e.lmAppData.refLinks,((e,a)=>(o(),r("p",{key:a},[g("span",B,A(t(e)),1),g("a",{href:e.url,target:"_blank"},A(e.url),9,N)])))),128)):_("",!0),e.lmAppData?.newVersion?(o(),r("p",P,[g("span",q,A(e.$t("LMAppDetail.newVersion")),1),f(" "+A(e.lmAppData.newVersion),1)])):_("",!0),e.lmAppData?.releaseTime?(o(),r("p",G,[g("span",U,A(e.$t("LMAppDetail.releaseTime")),1),f(" "+A(e.lmAppData.releaseTime),1)])):_("",!0),e.lmAppData?.licenseInfo?.licenseType?(o(),r("p",W,[g("span",E,A(e.$t("LMAppDetail.licenseType")),1),f(" "+A(e.lmAppData?.licenseInfo?.licenseType),1)])):_("",!0),e.lmAppData?.licenseInfo?.isOpenSource?(o(),r("p",J,[g("span",K,A(e.$t("LMAppDetail.isOpenSource")),1),f(" "+A(e.lmAppData?.licenseInfo?.isOpenSource),1)])):_("",!0),e.lmAppData?.licenseInfo?.isFullOpenSource?(o(),r("p",Q,[g("span",X,A(e.$t("LMAppDetail.isFullOpenSource")),1),f(" "+A(e.lmAppData?.licenseInfo?.isFullOpenSource),1)])):_("",!0),e.lmAppData?.licenseInfo?.isFree?(o(),r("p",Y,[g("span",Z,A(e.$t("LMAppDetail.isFree")),1),f(" "+A(e.lmAppData?.licenseInfo?.isFree),1)])):_("",!0),e.lmAppData?.licenseInfo?.sourceCodeRepo?(o(),r("p",ee,[g("span",ae,A(e.$t("LMAppDetail.sourceCodeRepo")),1),f(" "+A(e.lmAppData?.licenseInfo?.sourceCodeRepo),1)])):_("",!0)])),_:1})])),_:1})])),_:1})}}}),le=t({__name:"installed-info-list",props:{lmAppData:{}},setup(e){const a=O(),t=l(),n=e;s((async()=>{p()}));const p=async()=>{await a.getInstalledInstanceForApp(n.lmAppData?.id),t.value=a.instancesForApp},d=async()=>{try{if(await F(n.lmAppData),await p(),t.value){const e=t.value[0];if(e){const a=e.id;T.openAppRunningWindow(a,M.INSTALL)}else console.error("data err firstInstallInstance",e)}}catch(e){console.error("install app err ",e)}},_=async()=>{p()};return(e,a)=>{const l=i("v-col"),s=i("v-row"),n=i("v-container"),p=i("v-card-title"),y=i("v-spacer"),g=i("v-btn"),k=i("v-card");return u(t)&&u(t).length>0?(o(),h(n,{key:0,class:"mx-10 d-flex flex-column ga-2",style:{width:"100%"}},{default:m((()=>[c(s,null,{default:m((()=>[(o(!0),r(v,null,D(u(t),((e,a)=>(o(),h(l,{key:a,cols:"6"},{default:m((()=>[c($,{"instance-data":e,onDeleted:_,"app-name-visible":!0,"icon-visible":!1},null,8,["instance-data"])])),_:2},1024)))),128))])),_:1})])),_:1})):(o(),h(n,{key:1,class:"mx-10 d-flex flex-column ga-2"},{default:m((()=>[c(s,null,{default:m((()=>[c(l,{cols:"6"},{default:m((()=>[c(k,{class:"common-instance-card rounded-lg"},{actions:m((()=>[c(y),c(g,{color:"primary",variant:"outlined",onClick:d},{default:m((()=>[f(A(e.$t("LMAppDetail.install")),1)])),_:1})])),default:m((()=>[c(p,null,{default:m((()=>[f(A(e.$t("LMAppDetail.notInstalled")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}))}}}),se={style:{"font-size":"20px"}},ne=t({__name:"AppDetail",setup(e){const a=w(),t=j(),n=l({}),p=I();b((()=>a.params.id),((e,a)=>{console.log("app detail ",e,a)})),s((async()=>{const e=a.params.id;await t.fetchApp(e),n.value=t.currentLmApp}));const d=()=>{p.go(-1)};return(e,a)=>{const t=i("v-icon"),l=i("v-btn"),s=i("v-app-bar"),p=i("v-img"),f=i("v-col"),D=i("v-row"),y=i("v-container");return o(),r(v,null,[c(s,{elevation:"0",class:"window-drag pt-4"},{prepend:m((()=>[c(l,{class:"window-no-drag",onClick:d,variant:"plain"},{default:m((()=>[c(t,{class:"lmd-back-icon mr-3",style:{"font-size":"1.4rem"},size:"36",icon:"mdi-chevron-left",color:"#FB6C00"}),g("span",se,A(e.$t("LMAppDetail.goBack")),1)])),_:1})])),append:m((()=>[c(C)])),_:1}),c(y,{class:"mt-4"},{default:m((()=>[c(D,null,{default:m((()=>[c(f,{cols:"12",lg:"1",md:"2",sm:"3"},{default:m((()=>[c(p,{src:u(n).icon,cover:"",style:{"border-radius":"8px"}},null,8,["src"])])),_:1}),c(f,{cols:"12",lg:"11",md:"10",sm:"9"},{default:m((()=>[c(H,{lmAppData:u(n)},null,8,["lmAppData"])])),_:1})])),_:1}),c(D,null,{default:m((()=>[u(n).id?(o(),h(le,{key:0,lmAppData:u(n)},null,8,["lmAppData"])):_("",!0),c(te,{lmAppData:u(n)},null,8,["lmAppData"])])),_:1})])),_:1})],64)}}});export{ne as default};
