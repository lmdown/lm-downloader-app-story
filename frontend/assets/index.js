const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Home.js","./top-app-bar.vue_vue_type_style_index_0_lang.js","./top-right-controls.vue_vue_type_style_index_0_lang.js","./vuei18n.js","./vue.js","./common-util.js","./vuetify.js","./top-right-controls.css","./top-app-bar.css","./index2.js","./pinia.js","./app-list.vue_vue_type_style_index_0_lang.js","./app-list.css","./lmapp.js","./lmd-locales.js","./Home.css","./AppDetail.js","./vue-easy-lightbox.js","./install-instance.js","./AppScriptType.js","./single-installed-instance.vue_vue_type_style_index_0_lang.js","./xterm.js","./dayjs.js","./single-installed-instance.css","./AppDetail.css","./StoryPostDetail.js","./StoryPostDetail.css","./InstalledApps.js","./MyResource.js","./AppRunningWindow.js","./debounce.js","./pretty-bytes.js","./AppRunningWindow.css"])))=>i.map(i=>d[i]);
import{a0 as e,a1 as t,e as a,b as r,G as n,a2 as o,a3 as s,a4 as i,a5 as l,j as c,a6 as u,a7 as p,V as d,u as m,F as g,k as f,Q as _,x as h,a8 as A,Y as y,c as v,J as w,p as E,a9 as S}from"./vue.js";import{V as R,a as L,b,c as I,d as N,e as O,f as k,g as C,h as D,v as T,i as P,j as M,k as G,l as x,m as V}from"./vuetify.js";import{d as F,c as U}from"./pinia.js";import{c as j,u as B}from"./vuei18n.js";import{z as H,e as q}from"./lmd-locales.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const $={Home:"/",InstalledApps:"/installed",AppRunning:"/app/running/:id",StoryPostDetail:"/app/story-post/:id",MyResource:"/my-resources"},z={Home:"home",AppDetail:"app-detail",InstalledApps:"installed-apps",AppRunning:"app-running",StoryPostDetail:"story-post-detail",MyResource:"my-resources"},W=[{name:"AppMenu.FastDownloadHome",subtitle:"AppMenu.MyComputerResourcesSubtitle",icon:"./images/nav/fast-download.png",iconActive:"./images/nav/fast-download-active.png",path:$.Home,routerName:z.Home},{name:"AppMenu.MyInstalledApps",subtitle:"AppMenu.MyInstalledAppsSubtitle",icon:"./images/nav/my-ai.png",iconActive:"./images/nav/my-ai-active.png",path:$.InstalledApps,routerName:z.InstalledApps},{name:"AppMenu.MyComputerResources",subtitle:"AppMenu.MyComputerResourcesSubtitle",icon:"./images/nav/my-devices.png",iconActive:"./images/nav/my-devices-active.png",path:$.MyResource,routerName:z.MyResource}],J={},K=function(e,t,a){let r=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),o=n?.nonce||n?.getAttribute("nonce");r=Promise.allSettled(t.map((t=>{if(t=function(e,t){return new URL(e,t).href}(t,a),t in J)return;J[t]=!0;const r=t.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(!!a)for(let a=e.length-1;a>=0;a--){const n=e[a];if(n.href===t&&(!r||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${t}"]${n}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":"modulepreload",r||(s.as="script"),s.crossOrigin="",s.href=t,o&&s.setAttribute("nonce",o),document.head.appendChild(s),r?new Promise(((e,a)=>{s.addEventListener("load",e),s.addEventListener("error",(()=>a(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then((t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)}))},Q=[{path:$.Home,name:z.Home,component:()=>K((()=>import("./Home.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url),meta:{requiresSidebar:!0}},{path:"/app/:id",name:"app-detail",component:()=>K((()=>import("./AppDetail.js")),__vite__mapDeps([16,17,4,6,9,10,18,19,20,21,22,23,13,2,3,5,7,14,24]),import.meta.url),meta:{requiresSidebar:!0}},{path:$.StoryPostDetail,name:z.StoryPostDetail,component:()=>K((()=>import("./StoryPostDetail.js")),__vite__mapDeps([25,11,6,4,12,2,3,5,7,10,14,26]),import.meta.url),meta:{requiresSidebar:!0}},{path:$.InstalledApps,name:z.InstalledApps,component:()=>K((()=>import("./InstalledApps.js")),__vite__mapDeps([27,18,20,4,21,22,6,23,1,2,3,5,7,8,10,14]),import.meta.url),meta:{requiresSidebar:!0}},{path:$.MyResource,name:z.MyResource,component:()=>K((()=>import("./MyResource.js")),__vite__mapDeps([28,2,3,4,5,6,7,10,14]),import.meta.url),meta:{requiresSidebar:!0}},{path:$.AppRunning,name:z.AppRunning,component:()=>K((()=>import("./AppRunningWindow.js")),__vite__mapDeps([29,4,13,10,21,30,5,18,19,31,6,3,14,32]),import.meta.url),meta:{requiresSidebar:!1}}],X=e({history:t(),routes:Q}),Y={OPEN_RUNNING_WINDOW:"open-running-window",OPEN_RUNNING_WINDOW_AND_INSTALL:"open-running-window-and-install",RUNNING_STATUS_CHANGE:"running-status-change",GET_BASE_CONFIG:"get-base-config",GET_DEFAULT_CONFIG:"get-default-config",GET_DEFAULT_ROOT_DIR:"get-default-root-dir",GET_DEFAULT_CONFIG_AND_ROOT_DIR:"get-default-config-and-root-dir",SAVE_BASE_CONFIG:"save-base-config",GET_ENV_VARIABLES:"get-env-variables",SAVE_ENV_VARIABLES:"save-env-variables",SHOW_ABOUT:"show-about",OPEN_PATH:"open-path",SELECT_DIR:"select-dir",GET_PROCESS_ENV:"get-process-env",RESTART_APP:"restart-app",EXIT_APP:"exit-app",RUN_COMMAND:"run-command",KILL_PROCESSES:"kill-processes"};class Z{static info(){window.ipcRenderer?.invoke(Y.SHOW_ABOUT)}}class ee{static getCurrentIndex(e){let t=W.findIndex((t=>t.routerName===e));if(-1===t)switch(e){case z.AppDetail:case z.StoryPostDetail:t=0}return t}}const te={class:"pa-4 text-center mx-auto"},ae={style:{width:"192px"}},re={class:"lmd-left-bottom-link"},ne={class:"lmd-left-bottom-link"},oe=(e,t)=>{const a=e.__vccOpts||e;for(const[r,n]of t)a[r]=n;return a},se=oe(a({__name:"left-nav-drawer",setup(e){const t=r([0]);n((()=>{const e=X.currentRoute.value.name;if(e){const a=ee.getCurrentIndex(e.toString());t.value=[a]}}));const a=(e,t)=>{let a;return a=t?e.iconActive:e.icon,a},h=e=>{e.preventDefault(),Z.info()},A=e=>{e.preventDefault()};return X.afterEach(((e,a)=>{const r=e.name;if(r){const e=ee.getCurrentIndex(String(r));t.value=[e]}})),(e,r)=>(s(),o(R,{app:"",width:"240",class:"lmd-bg-gray lmd-left-nav window-drag",permanent:""},{prepend:i((()=>r[1]||(r[1]=[l("div",{class:"pt-10"},null,-1)]))),append:i((()=>[c(I,{class:"mb-2 window-no-drag"},{default:i((()=>[c(L,null,{prepend:i((()=>[c(b,{src:"./images/icons/about.png",width:"24",height:"24"})])),default:i((()=>[l("div",re,[l("a",{href:"#",onClick:h},d(e.$t("App.about")),1)])])),_:1}),c(L,null,{prepend:i((()=>[c(b,{src:"./images/icons/help.png",width:"24",height:"24"})])),default:i((()=>[l("div",ne,[l("a",{href:"#",onClick:A},[_(d(e.$t("App.help"))+" ",1),c(N,{activator:"parent",location:"right"},{default:i((()=>[_(d(e.$t("App.UnderConstruction")),1)])),_:1})])])])),_:1})])),_:1})])),default:i((()=>[l("div",te,[c(I,{nav:"",style:{padding:"0px"},class:"d-flex flex-column ga-6",selected:m(t),"onUpdate:selected":r[0]||(r[0]=e=>f(t)?t.value=e:null),color:"#FA6400","base-color":"#424254"},{default:i((()=>[(s(!0),u(g,null,p(m(W),((t,r)=>(s(),o(L,{key:r,"active-class":"nav-item-active",class:"nav-item window-no-drag",draggable:"false",variant:"plain",rounded:"lg",style:{height:"118px","background-color":"#fff"},onClick:e=>(e=>{X.push({name:e.routerName})})(t),value:r},{default:i((r=>[c(b,{class:"mx-auto nav-item-icon",draggable:"false",src:a(t,r.isActive),width:"60",height:"60"},null,8,["src"]),l("div",ae,d(e.$t(t.name)),1)])),_:2},1032,["onClick","value"])))),128))])),_:1},8,["selected"])])])),_:1}))}}),[["__scopeId","data-v-daaf0dda"]]),ie=axios.create({baseURL:"https://jsonplaceholder.typicode.com"}),le=F("user",{state:()=>({users:[],token:""}),actions:{async fetchUsers(){try{const e=await ie.get("/users");this.users=e.data}catch(e){console.error("Failed to fetch users:",e)}},setToken(e){this.token=e}}});function ce(e,t){const[a,r]=e.split("?",2),n=new URLSearchParams(r);for(const[s,i]of Object.entries(t))null!=i&&(Array.isArray(i)?i.forEach((e=>n.append(s,e.toString()))):n.append(s,i.toString()));const o=n.toString();return o?`${a}?${o}`:a}function ue(e){const t=window.location.search,a={};if(!t)return null;const r=new URLSearchParams(t);for(const[n,o]of r.entries())a.hasOwnProperty(n)?(Array.isArray(a[n])||(a[n]=[a[n]]),a[n].push(o)):a[n]=o;return a[e]}class pe{static LMD_BASE_CONFIG="lmd_base_config"}const de=async()=>window.ipcRenderer?await(window.ipcRenderer?.invoke(Y.GET_BASE_CONFIG)):JSON.parse(localStorage.getItem(pe.LMD_BASE_CONFIG)||"{}"),me=async()=>{let e=null;if(window.ipcRenderer)try{e=await(window.ipcRenderer?.invoke(Y.GET_DEFAULT_CONFIG_AND_ROOT_DIR))||null}catch(t){return console.log(t),null}return e},ge=async()=>await(window.ipcRenderer?.invoke(Y.GET_ENV_VARIABLES)),fe=async e=>{const t=JSON.stringify(e);if(localStorage.setItem(pe.LMD_BASE_CONFIG,JSON.stringify(e)),window.ipcRenderer)return window.ipcRenderer?.invoke(Y.SAVE_BASE_CONFIG,t)},_e=async e=>{const t=JSON.stringify(e);return window.ipcRenderer?.invoke(Y.SAVE_ENV_VARIABLES,t)},he=async e=>await(window.ipcRenderer?.invoke(Y.OPEN_PATH,e));class Ae{static getSystemLocale(){return navigator.language}static getDefaultLocale(){let e="en";try{const t=this.getSystemLocale();switch(t.split("-")[0]){case"en":default:e="en";break;case"zh":e="zhHans"}}catch(t){console.log("get system locale error, use default en.",t)}return e}static getLocaleIcon(e){let t="";switch(e){case"en":default:t="./images/icons/locale-en.png";break;case"zhHans":t="./images/icons/locale-zhHans.png"}return t}static saveLocaleToStorage=(e,t)=>{t.LMD_LOCALE=e,fe(t)};static getCurrentLocale(){let e="en";try{e=JSON.parse(localStorage.getItem(pe.LMD_BASE_CONFIG)||"").LMD_LOCALE}catch(t){console.error("getCurrentLocale error: ",t)}return e}static localeIsEn(){return"en"===this.getCurrentLocale()}}const ye=axios.create({baseURL:"http://localhost:19312/api",timeout:6e3});async function ve(e,t={},a=100){return async function r(n){try{console.log(`Attempt ${n}: Calling API...`);return await ye(e,t)}catch(s){if(n<a)return console.error(`Attempt ${n} failed. Retrying in 1000ms...`),await(o=1e3,new Promise((e=>setTimeout(e,o)))),r(n+1);throw console.error("All attempts failed. Throwing error..."),new Error("Failed to call API after 100 attempts")}var o}(1)}ye.interceptors.request.use((e=>{const t=le().token;if(t&&(e.headers.Authorization=`Bearer ${t}`),e.url){const t=Ae.getCurrentLocale();e.url=ce(e.url,{locale:t})}return e}),(e=>(console.error("Request Error:",e),Promise.reject(e)))),ye.interceptors.response.use((e=>(e.data&&"string"==typeof e.data&&(e.data=JSON.parse(e.data)),e)),(e=>{if(console.error("Response Error:",e),e.response)switch(e.response.status){case 401:console.warn("Unauthorized access. Redirecting to login...");break;case 403:console.warn("Forbidden access.");break;case 404:console.warn("Resource not found.");break;case 500:console.error("Server internal error.");break;default:console.error("Unexpected error occurred.")}return Promise.reject(e)}));const we=a({__name:"AppDefaultLayout",setup(e){const t=r(!1);return n((()=>{(async()=>{let e;try{e=(await ve("/health-check")).data}catch(t){return console.log("health check err",t),e}})().then((()=>{t.value=!0,postMessage({payload:"removeLoading"},"*")}));document.querySelector("html").setAttribute("main-window","")})),h((()=>{const e=document.querySelector("html");e&&e.removeAttribute("main-window")})),(e,a)=>{const r=y("router-view");return m(t)?(s(),o(O,{key:0,class:"lmd-application"},{default:i((()=>[c(se),c(k,{class:"d-flex justify-center",style:{"min-height":"300px"}},{default:i((()=>[c(r)])),_:1})])),_:1})):A("",!0)}}}),Ee=a({__name:"AppNoSidebarLayout",setup:e=>(n((()=>{document.querySelector("html").setAttribute("running-window","")})),h((()=>{const e=document.querySelector("html");e&&e.removeAttribute("running-window")})),(e,t)=>{const a=y("router-view");return s(),o(O,null,{default:i((()=>[c(k,{class:"d-flex justify-center",style:{"min-height":"300px"}},{default:i((()=>[c(a)])),_:1})])),_:1})})}),Se=a({__name:"toast-message",props:{color:{},variant:{},message:{},showCloseBtn:{type:Boolean}},setup(e,{expose:t}){const a=r(),n=()=>{a.value=!1};return t({show:()=>{a.value=!0},hide:n}),(e,t)=>(s(),o(C,{timeout:3e3,color:e.color,variant:e.variant,modelValue:m(a),"onUpdate:modelValue":t[0]||(t[0]=e=>f(a)?a.value=e:null)},{actions:i((()=>[e.showCloseBtn?(s(),o(D,{key:0,color:"white",variant:"text",onClick:n},{default:i((()=>[_(d(e.$t("Common.close")),1)])),_:1})):A("",!0)])),default:i((()=>[_(d(e.message)+" ",1)])),_:1},8,["color","variant","modelValue"]))}}),Re=a({__name:"App",setup(e){const t=r(""),a=r(),n=r("primary"),i=v((()=>{const e=X.currentRoute.value?.meta?.requiresSidebar;return!0===e?we:!1===e?Ee:null}));return E("showToastMessage",((e,r)=>{t.value=e,n.value=r,a.value?.show()})),(e,r)=>(s(),u(g,null,[m(i)?(s(),o(w(m(i)),{key:0})):A("",!0),c(Se,{message:m(t),ref_key:"toastMsg",ref:a,color:m(n),variant:"flat",showCloseBtn:!1},null,8,["message","color"])],64))}}),Le={en:{...q,$vuetify:{...T}},zhHans:{...H,$vuetify:{...P}}};window.ipcRenderer?.on("main-process-message",((e,...t)=>{console.log("[Receive Main-process message]:",...t)}));const be=U(),Ie=e=>{const t=e.LMD_LOCALE||Ae.getDefaultLocale();Ae.saveLocaleToStorage(t,e);const a=(e=>j({legacy:!1,locale:e,fallbackLocale:"en",messages:Le}))(e.LMD_LOCALE),r=M({defaults:{global:{ripple:!1}},components:V,directives:x,locale:{adapter:G({i18n:a,useI18n:B})},theme:{defaultTheme:"light",themes:{light:{dark:!1,colors:{primary:"#FA6400"}},dark:{dark:!0,colors:{primary:"#FA6400"}}}}}),n=S(Re);n.config.errorHandler=(e,t,a)=>{console.error("Global Error Handler:",e,a)},n.use(r).use(a).use(X).use(be).mount("#app")};de().then((e=>{Ie(e)}));export{z as A,Y as I,Ae as L,oe as _,ye as a,$ as b,ce as c,ge as d,me as e,fe as f,de as g,ue as h,he as o,X as r,_e as s};
