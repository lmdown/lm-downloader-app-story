import{e,b as a,G as t,R as n,a6 as l,a3 as s,a5 as i,o,c as r,a2 as d,a8 as p,j as c,u as m,a4 as u,Q as v,V as g,k as f,U as S,m as w,F as A,d as y,ad as h,a7 as _,aa as b}from"./vue.js";import{u as I}from"./lmapp.js";import{r as D,a as x,b as T,g as E}from"./xterm.js";import{r as M}from"./debounce.js";import{g as N,h as z,I as k,d as L,o as R}from"./index.js";import{a as C,b as $,c as O,d as B,e as W,g as V,s as U,D as G,I as P}from"./common-util.js";import{a as j,A as F}from"./install-instance.js";import{p as H}from"./pretty-bytes.js";import{d as K}from"./pinia.js";import{C as q,h as Q,u as J,w as X,I as Y,J as Z,d as ee,F as ae,z as te,K as ne,A as le,D as se,L as ie,c as oe,a as re,b as de,B as pe,M as ce,G as me,N as ue,O as ve,f as ge,P as fe,Q as Se,R as we}from"./vuetify.js";import"./vuei18n.js";import"./lmd-locales.js";var Ae=D(),ye=x(),he=T();const _e=E(M());class be{static getLMDScriptRepoUrl(e){let a="https://gitee.com/lmdown/lmd-install-scripts";if(e?.downloadInfo&&e?.downloadInfo.length>0){a=e.downloadInfo[0].scriptGitRepoUrl}return{repoUrl:a,repoLocalFolderName:this.getLastPathSegment(a)||"lmd-install-scripts"}}static getLastPathSegment(e){const a=e.match(/[^\/?#]+(?=[/?#]*$)/);return a?a[0]:null}}const Ie=async e=>{const a=e.installName,t=(await N()).LMD_SCRIPTS_DIR,{repoUrl:n,repoLocalFolderName:l}=be.getLMDScriptRepoUrl(e),s=(e=>"0"===z("UPDATE_INSTALL_SCRIPTS")?"":`\ngit clone --depth=1 ${e} $LMD_BASE_INSTALL_SCRIPT_DIR\ncd $LMD_BASE_INSTALL_SCRIPT_DIR && git fetch origin master && git reset --hard origin/master`)(n);console.log("repoLocalFolderName",l);return`\nexport LMD_BASE_INSTALL_SCRIPT_DIR="${t}/${l}"\n${s}\nsh $LMD_BASE_INSTALL_SCRIPT_DIR/apps/${a}/install.sh`},De=e({__name:"index",props:{socketURI:{},initCommand:{},commandExecuteEndKeywords:{}},emits:["executeEnd"],setup(e,{expose:o,emit:r}){const d=r,p=a([]),c=a(!1),m=e,u=a(null),v=a(null),g=a(null),f=a(null);let S;t((()=>{h(),y()})),n((()=>{u.value?.close(),v.value?.dispose(),S&&f.value&&(S.unobserve(f.value),S.disconnect())}));const w=e=>{console.log("runCommand",e),console.log("runCommand socket.value",u.value),u.value?.send(e+"\n")};o({runCommand:w,runStopCommand:()=>{w("")},exitTerminal:()=>{w("exit")}});const A=_e((e=>{for(const a of e)E(a.contentRect.width,a.contentRect.height)}),50),y=()=>{g.value&&(S=new ResizeObserver(A),S.observe(g.value))},h=()=>{u.value=new WebSocket(m.socketURI),I(),b(),D(),_()},_=()=>{u.value&&(u.value.onmessage=e=>{const a=e.data,t=m.commandExecuteEndKeywords;t&&(t.forEach((e=>{a.includes(e)&&!p.value.includes(e)&&p.value.push(e)})),p.value.length===t.length&&(d("executeEnd"),c.value=!0,p.value=[]))})},b=()=>{u.value&&(u.value.onopen=()=>{(()=>{if(!f.value)return;if(!u.value)return;const e=new window.Terminal({fontSize:14,cursorBlink:!0}),a=new ye.AttachAddon(u.value),t=new Ae.FitAddon,n=new he.WebLinksAddon(((e,a)=>{const t=document.createElement("a");t.setAttribute("href",a),t.setAttribute("target","_blank"),t.setAttribute("id","lmdTempLink");const n=document.getElementById("lmdTempLink");n&&document.body.removeChild(n),document.body.appendChild(t),t.click()}));e.loadAddon(a),e.loadAddon(t),e.loadAddon(n),e.open(f.value),t.fit(),e.focus(),v.value=e})(),m.initCommand&&w(m.initCommand)})},I=()=>{u.value&&(u.value.onclose=e=>{console.log("close socket",e)})},D=()=>{u.value&&(u.value.onerror=e=>{console.log("socket 链接失败",e)})},x=a(80),T=a(30),E=(e,a)=>{const t=Math.floor(e/8.5),n=Math.round(a/16);if(console.log("cols",e,t),console.log("rows",a,n),0!==n&&0!==t&&(x.value!==t||T.value!==n)){x.value=t,T.value=n,v.value?.resize(t,n);const e=`lmd_action:resize:${t},${n}`;u.value?.send(e)}};return(e,a)=>(s(),l("div",{ref_key:"terminalOutContainer",ref:g,class:"mb-0",style:{height:"100%",width:"100%"}},[i("div",{ref_key:"terminalContainer",ref:f,class:"terminal",style:{height:"300px",width:"100%"}},null,512)],512))}}),xe=["OLLAMA_MODELS","OLLAMA_HOST"],Te=[{displayName:"Deepseek-R1",installName:"deepseek-r1",tags:[{parameterSize:"1.5b",fileSize:"1.1GB"},{parameterSize:"7b",fileSize:"4.7GB"},{parameterSize:"8b",fileSize:"4.9GB"},{parameterSize:"14b",fileSize:"9.0GB"},{parameterSize:"32b",fileSize:"20GB"},{parameterSize:"70b",fileSize:"43GB"},{parameterSize:"671b",fileSize:"404GB"}]},{displayName:"Llama 3.1",installName:"llama3.1",tags:[{parameterSize:"8b",fileSize:"4.9GB"},{parameterSize:"70b",fileSize:"43GB"},{parameterSize:"405b",fileSize:"243GB"}]},{displayName:"Qwen 2.5",installName:"qwen2.5",tags:[{parameterSize:"0.5b",fileSize:"398MB"},{parameterSize:"1.5b",fileSize:"986MB"},{parameterSize:"3b",fileSize:"1.9GB "},{parameterSize:"7b",fileSize:"4.7GB"},{parameterSize:"14b",fileSize:"9.0GB"},{parameterSize:"32b",fileSize:"20GB"},{parameterSize:"72b",fileSize:"47GB"}]},{displayName:"Mistral",installName:"mistral",tags:[{parameterSize:"7b",fileSize:"4.1GB"}]},{displayName:"Phi-4",installName:"phi4",tags:[{parameterSize:"14b",fileSize:"9.1GB"}]},{displayName:"Qwen 2.5 Coder",installName:"qwen2.5-coder",tags:[{parameterSize:"0.5b",fileSize:"531MB"},{parameterSize:"1.5b",fileSize:"986MB"},{parameterSize:"3b",fileSize:"1.9GB"},{parameterSize:"7b",fileSize:"4.7GB"},{parameterSize:"14b",fileSize:"9.0GB"},{parameterSize:"32b",fileSize:"20GB"}]}];class Ee{static appIsOllama(e){return"ollama"===e}static appIsSillyTavern(e){return"sillytavern"===e}static async getModelFileSize(e,a){if(console.log("getModelFileSize",e,a),this.appIsOllama(e)&&a&&a){const e=await C(a);return H(e)}return""}static async getModelsDir(e,a){return this.appIsOllama(e)&&a?a.OLLAMA_MODELS:""}static genModelDownloadCommand(e,a){return this.appIsOllama(e)&&a?`\nollama pull ${a}`:""}static genModelDeleteCommand(e,a){return this.appIsOllama(e)&&a?`\nollama rm ${a}`:""}static async mergeModelsList(e,a){if(e){const t=await $(e);console.log("installedModelList",t),t.forEach((e=>{const[t,n]=e.name.split(":"),l=a.find((e=>e.installName===t));if(l){const a=l.tags.find((e=>e.parameterSize===n));a?a.installed=!0:l.tags.push({parameterSize:n,fileSize:e.size||"",installed:!0})}else a.push({displayName:t,installName:t,tags:[{parameterSize:n,fileSize:e.size||"",installed:!0}]})}))}return a}static killAppProcessed(e){if(this.appIsOllama(e)){(async e=>{if(window.ipcRenderer)await(window.ipcRenderer?.invoke(k.KILL_PROCESSES,e))})(["ollama.exe","ollama app.exe"])}}static needPreStartApp(e){return!!this.appIsOllama(e)}}class Me{static async getAppSettings(){const e=await this.getOSEnvObj();return{modelsDir:e.OLLAMA_MODELS,externalAccessHost:e.OLLAMA_HOST}}static async getOSEnvObj(){return await O(xe)}static async getAccessHosts(e){const a="11434",t=[`http://127.0.0.1:${a}`];if(e&&"127.0.0.1"!==e){const n=e.split(":"),l=n[0];let s=[l];const i=n[1]||a;"0.0.0.0"===l&&(s=await B()),s&&s.length>0&&s.forEach((e=>{t.push(`http://${e}:${i}`)}))}else;return t}static async saveAppSettings(e,a){e.modelsDir===a&&(e.modelsDir="");const t={OLLAMA_MODELS:e.modelsDir,OLLAMA_HOST:e.externalAccessHost};return await W(t)}static getDownloadableModels(){return JSON.parse(JSON.stringify(Te))}}const Ne=K("runningInstance",{state:()=>({runningInstances:[],appSettingsSaved:!1,terminals:[],currentTerminalTab:""}),actions:{addRunningInstance(e){this.runningInstances.find((a=>a.id===e.id))||this.runningInstances.push(e)},removeRunningInstance(e){const a=this.runningInstances.findIndex((a=>a.id===e.id));-1!=a&&this.runningInstances.splice(a,1)},resetAppSettingsSavedStatus(){this.appSettingsSaved=!1},onAppSettingsSaved(){this.appSettingsSaved=!0},changeMainTerminalScriptType(e,a){try{const t=this.terminals[0];t.commandExecuteEndKeywords=[`lmd ${e} script end.`],t.commandExecuteEndToastMsg=a}catch(t){console.error(t)}},initTerminal(e){const a={icon:"mdi-application-brackets-outline",text:e,tabName:"main-process",closable:!1};this.terminals=[a],this.currentTerminalTab=a.tabName},addTerminal(e){this.terminals.find((a=>a.tabName===e.tabName))||(console.log("addTerminal",e.commandExecuteEndKeywords),this.terminals.push(e)),this.currentTerminalTab=e.tabName},removeTerminal(e,a){this.currentTerminalTab="main-process",this.terminals.splice(a,1)},addInstallModelTerminal(e,a,t,n){const l={text:a,tabName:a,initCommand:t,closable:!0,commandExecuteEndKeywords:["digest","writing manifest","success"],commandExecuteEndToastMsg:n};this.addTerminal(l)},addDeleteModelTerminal(e,a,t,n){const l={text:a,tabName:a,initCommand:t,closable:!0,commandExecuteEndKeywords:[`deleted '${e}'`],commandExecuteEndToastMsg:n};this.addTerminal(l)}}});class ze{static isWindows(){const e=navigator.userAgentData;return e&&e.platform?"Windows"===e.platform:!!navigator.userAgent&&/Win(dows )?NT/.test(navigator.userAgent)}static isMacOS(){const e=navigator.userAgentData;return e&&e.platform?"macOS"===e.platform||"MacOS"===e.platform:!!navigator.userAgent&&/Macintosh|Mac OS X/i.test(navigator.userAgent)}}const ke={style:{"font-size":"12px"}},Le={style:{"font-size":"12px"}},Re=e({__name:"app-settings-btn",props:{installedInstance:{}},setup(e){const{t:n}=q(),h=a(!1),_=a(!1),b=a(!1),I=a(!1),D=a(""),x=Ne(),T=y("showToastMessage"),E=a({}),M=a(!0),N=e;o((()=>N.installedInstance),(()=>{z()}));const z=()=>{H()?h.value=!0:h.value=!1};t((()=>{z()}));const L=async()=>{_.value=!0,await R(),await F()},R=async()=>{const e=await V();D.value=e+"/.ollama/models"},C=async()=>{if(!b.value)return;if(!E)return;if(""===D.value){const e=n("AppSettingDialog.DataNotValid");return void(T&&T(e,"error"))}I.value=!0;const e=Object.assign({},E.value),a=await Me.saveAppSettings(e,D.value);console.log("save result ",a);const t=n("Common.saveSuccess");T&&T(t,"success"),I.value=!1,x.onAppSettingsSaved(),setTimeout((()=>{x.resetAppSettingsSavedStatus()}),100),_.value=!1,ze.isWindows()&&(Ee.killAppProcessed(N.installedInstance?.installName),setTimeout((()=>{(async()=>{if(window.ipcRenderer)await(window.ipcRenderer?.invoke(k.EXIT_APP))})()}),1500))},$=async()=>{const e=await U(E.value.modelsDir,!0);e&&e.path&&(E.value.modelsDir=e.path,console.log("dirInfo",e),M.value=G.checkModelsDirValid(e,["blobs"]),console.log("dirValid.value",M.value))},O=[e=>!!e||n("Common.fieldRequired"),()=>M.value||n("AppSettingDialog.ModelsDirNotValid")],B=/^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?$/,W=[e=>""===e||(B.test(e)||n("AppSettingDialog.HostNotValid"))],P=async()=>{E.value.modelsDir=D.value},j=r((()=>{if(H())return n("AppSettingDialog.OllamaModelsDirInfoIconTip")})),F=async()=>{if(H()){const e=await Me.getAppSettings();console.log("getOSEnvForCurrentApp",e),E.value=Object.assign({},e),""===e.modelsDir&&(console.log("getOSEnvForCurrentApp",e),E.value.modelsDir=D.value)}},H=()=>Ee.appIsOllama(N.installedInstance?.installName),K=()=>{let e=n("AppSettingDialog.ModelsDirTip");return ze.isWindows()?e+=n("AppSettingDialog.ModelsDirTipExtraWindows"):e+=n("AppSettingDialog.ModelsDirTipExtraMac"),e},le=()=>{let e=n("AppSettingDialog.ServerHostTip");return ze.isWindows()?e+=n("AppSettingDialog.ServerHostTipExtraWindows"):e+=n("AppSettingDialog.ServerHostTipExtraMac"),e};return(e,a)=>(s(),l(A,null,[m(h)?(s(),d(Q,{key:0,width:"80",height:"40px",variant:"flat",color:"#CCC",onClick:L},{default:u((()=>[v(g(e.$t("AppRunningWindow.Settings")),1)])),_:1})):p("",!0),c(J,{modelValue:m(_),"onUpdate:modelValue":a[5]||(a[5]=e=>f(_)?_.value=e:null),"min-width":"400","max-width":"800"},{default:u((()=>[e.installedInstance?(s(),d(X,{key:0,class:"mx-auto px-0 py-0 window-no-drag",width:"100%",title:e.$t("AppSettingDialog.Title")+e.installedInstance.name},{append:u((()=>[c(Q,{icon:"mdi-close",class:"ms-auto",size:"compact",text:"Ok",elevation:"0",onClick:a[0]||(a[0]=e=>_.value=!1)})])),default:u((()=>[m(E)?(s(),d(Y,{key:0,class:"pt-0 pb-3 px-6",modelValue:m(b),"onUpdate:modelValue":a[4]||(a[4]=e=>f(b)?b.value=e:null),onSubmit:S(C,["prevent"])},{default:u((()=>[c(Z,{modelValue:m(E).modelsDir,"onUpdate:modelValue":a[1]||(a[1]=e=>m(E).modelsDir=e),density:"comfortable",readonly:m(I),rules:O,label:e.$t("AppSettingDialog.ModelsDirLabel")},{append:u((()=>[c(ee,{location:"bottom"},{activator:u((({props:e})=>[c(ae,w(e,{icon:"mdi-information-slab-circle-outline"}),null,16)])),default:u((()=>[i("pre",null,g(m(j)),1)])),_:1}),c(Q,{class:"ml-1",onClick:$},{default:u((()=>[v(g(e.$t("AppSettingDialog.Browse")),1)])),_:1}),c(Q,{class:"ml-1",onClick:P},{default:u((()=>[v(g(e.$t("AppSettingDialog.UseDefaultValue")),1)])),_:1})])),_:1},8,["modelValue","readonly","label"]),c(te,{class:"pt-0"},{default:u((()=>[i("pre",ke,g(K()),1)])),_:1}),c(Z,{modelValue:m(E).externalAccessHost,"onUpdate:modelValue":a[2]||(a[2]=e=>m(E).externalAccessHost=e),density:"comfortable",readonly:m(I),rules:W,label:e.$t("AppSettingDialog.ServerHostLabel")},null,8,["modelValue","readonly","label"]),c(te,{class:"pt-0"},{default:u((()=>[i("pre",Le,g(le()),1)])),_:1}),c(ne,{class:"text-center justify-center"},{default:u((()=>[c(Q,{variant:"outlined",onClick:a[3]||(a[3]=e=>_.value=!1)},{default:u((()=>[v(g(e.$t("AppSettingDialog.close")),1)])),_:1}),c(Q,{color:"primary",variant:"flat",type:"submit",loading:m(I)},{default:u((()=>[v(g(e.$t("AppSettingDialog.saveConfig")),1)])),_:1},8,["loading"])])),_:1})])),_:1},8,["modelValue"])):p("",!0)])),_:1},8,["title"])):p("",!0)])),_:1},8,["modelValue"])],64))}}),Ce=e({__name:"floating-title-card",props:{title:{}},setup:e=>(e,a)=>(s(),d(X,{class:"floating-title-card mt-4",variant:"outlined"},{default:u((()=>[c(le,{class:"floating-title mx-1"},{default:u((()=>[v(g(e.title),1)])),_:1}),i("div",null,[h(e.$slots,"default")])])),_:3}))}),$e=e({__name:"app-env-row",props:{installedInstance:{},appEnv:{}},setup(e){const n=a(null);return t((async()=>{n.value=await L()})),(e,a)=>(s(),d(Ce,{title:e.$t("AppRunningWindow.EnvVars")},{default:u((()=>[c(se,{class:"my-1 pt-1 pb-5 mx-5"},{default:u((()=>[(s(!0),l(A,null,_(m(n),((e,a)=>(s(),d(ie,{variant:"tonal",size:"x-small",style:{"min-width":"50px","max-width":"120px","margin-left":"4px"},key:a},{default:u((()=>[v(g(a)+" ",1),c(ee,{activator:"parent",location:"bottom"},{default:u((()=>[v(g(e),1)])),_:2},1024)])),_:2},1024)))),128)),(s(!0),l(A,null,_(e.appEnv,((e,a)=>(s(),d(ie,{variant:"tonal",size:"x-small",color:"orange-darken-4",style:{"min-width":"50px","max-width":"120px","margin-left":"4px"},key:a},{default:u((()=>[v(g(a)+" ",1),c(ee,{activator:"parent",location:"bottom"},{default:u((()=>[v(g(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["title"]))}}),Oe=["href"],Be=e({__name:"app-access-row",props:{lmAppData:{},installedInstance:{},appEnv:{}},setup(e){const n=e,i=a([]),r=a(!1),v=async()=>{if(n.lmAppData?.accessInfo){const e=n.lmAppData.accessInfo,{accessType:a}=e;if(!a)return!1;if("browser"===a)return i.value.push(n.lmAppData.accessInfo?.webUrl||""),!0;if("exec"===a&&Ee.appIsOllama(n.installedInstance?.installName)){if(n.appEnv){const e=n.appEnv.OLLAMA_HOST;i.value=await Me.getAccessHosts(e)}return!0}}return!1};return t((async()=>{r.value=await v()})),o((()=>n.appEnv),(async()=>{r.value=await v()})),(e,a)=>e.lmAppData&&m(r)?(s(),d(Ce,{key:0,title:e.$t("AppRunningWindow.Access")},{default:u((()=>[m(i)&&m(i).length>0?(s(),d(oe,{key:0,class:"pt-1 pb-2"},{default:u((()=>[(s(!0),l(A,null,_(m(i),((e,a)=>(s(),d(re,{key:a,density:"compact","min-height":"1.1rem",class:"px-5"},{prepend:u((()=>[c(de,{width:"16",height:"16",src:"./images/icons/link.png"})])),default:u((()=>[(s(),l("a",{class:"mx-2",key:e,href:e,target:"_blank"},g(e),9,Oe))])),_:2},1024)))),128))])),_:1})):p("",!0)])),_:1},8,["title"])):p("",!0)}}),We=e({__name:"model-download-row",props:{lmAppData:{},installedInstance:{},appEnv:{}},setup(e){const n=Ne(),l=a([]),r=a([]),S=a(!1),A=a(null),y=a(null);a(null);const h=a(!1),_=a(!1),{t:b}=q(),I=e;t((async()=>{D(),await E()})),o((()=>I.lmAppData),(()=>{D()})),o((()=>I.installedInstance),(()=>{E()})),o((()=>I.appEnv),(()=>{E()}));const D=()=>{S.value=Ee.appIsOllama(I.lmAppData?.installName)};o(A,(()=>{T()})),o(y,(e=>{x(e)}));const x=e=>{const a=r.value.find((a=>a.parameterSize===e));a&&(void 0===a.installed?(h.value=!0,_.value=!1):(h.value=!a.installed,_.value=a.installed))},T=()=>{const e=A.value,a=l.value.find((a=>a.installName===e)),t=a?.tags||[];if(r.value=t,t.length>0){const e=t[0].parameterSize;y.value=e,x(e)}},E=async()=>{const e=I.installedInstance?.installName;if(e&&S.value){l.value=[],r.value=[];const a=Me.getDownloadableModels(),t=await Ee.mergeModelsList(e,a);if(l.value=t,console.log("mergedModelsList",t),A.value)T();else if(l.value&&l.value.length>0){const e=l.value[0];A.value=e.installName}}},M=async()=>{const e=`${A.value}:${y.value}`,a=Ee.genModelDeleteCommand(I.installedInstance?.installName,e),t=b("AppRunningWindow.ModelDeleteBtnLabel")+" "+e;if(a&&A.value&&Ee.appIsOllama(I.lmAppData?.installName)){const l=t+" "+b("AppRunningWindow.ModelDeleteSuccessful");n.addDeleteModelTerminal(e,t,a,l)}},N=async()=>{const e=`${A.value}:${y.value}`,a=Ee.genModelDownloadCommand(I.installedInstance?.installName,e),t=b("AppRunningWindow.ModelDownloadBtnLabel")+" "+e;if(a&&A.value&&Ee.appIsOllama(I.lmAppData?.installName)){const l=t+" "+b("AppRunningWindow.ModelDownloadSuccessful");n.addInstallModelTerminal(e,t,a,l)}};return(e,a)=>e.lmAppData&&m(S)?(s(),d(Ce,{key:0,title:e.$t("AppRunningWindow.ModelDownload")},{default:u((()=>[c(se,{class:"mx-5 model-download-sheet"},{default:u((()=>[c(pe,{class:"px-0 mt-3 mb-1",style:{color:"#4F4F67"}},{default:u((()=>[v(g(e.$t("AppRunningWindow.ModelName")),1)])),_:1}),c(ce,{items:m(l),"item-title":"displayName","item-value":"installName",modelValue:m(A),"onUpdate:modelValue":a[0]||(a[0]=e=>f(A)?A.value=e:null),variant:"outlined",density:"compact","hide-details":""},null,8,["items","modelValue"]),c(pe,{class:"px-0 mt-3 mb-1",style:{color:"#4F4F67"}},{default:u((()=>[v(g(e.$t("AppRunningWindow.ParameterSize")),1)])),_:1}),c(ce,{items:m(r),"item-title":"parameterSize","item-value":"parameterSize",modelValue:m(y),"onUpdate:modelValue":a[1]||(a[1]=e=>f(y)?y.value=e:null),variant:"outlined",density:"compact","hide-details":""},{selection:u((({item:a})=>[v(g(a.title)+" ",1),c(ie,{density:"default",class:"mx-1 file-size-chip"},{default:u((()=>[v(g(a.raw.fileSize),1)])),_:2},1024),a.raw.installed?(s(),d(ie,{key:0,density:"default",class:"installed-chip"},{default:u((()=>[i("span",null,g(e.$t("AppRunningWindow.ModelDownloaded")),1)])),_:1})):(s(),d(ie,{key:1,density:"default",class:"not-installed-chip"},{default:u((()=>[i("span",null,g(e.$t("AppRunningWindow.ModelNotDownloaded")),1)])),_:1}))])),item:u((({props:a,item:t})=>[c(re,w(a,{density:"compact"}),{title:u((()=>[v(g(t.title)+" ",1),c(ie,{density:"compact",class:"mx-1 file-size-chip"},{default:u((()=>[v(g(t.raw.fileSize),1)])),_:2},1024),t.raw.installed?(s(),d(ie,{key:0,density:"compact",class:"installed-chip"},{default:u((()=>[i("span",null,g(e.$t("AppRunningWindow.ModelDownloaded")),1)])),_:1})):(s(),d(ie,{key:1,density:"compact",class:"not-installed-chip"},{default:u((()=>[i("span",null,g(e.$t("AppRunningWindow.ModelNotDownloaded")),1)])),_:1}))])),_:2},1040)])),_:1},8,["items","modelValue"]),c(ne,{class:"text-center justify-center py-6"},{default:u((()=>[m(h)?(s(),d(Q,{key:0,onClick:N,variant:"flat","min-width":"8rem",color:"primary"},{default:u((()=>[v(g(e.$t("AppRunningWindow.ModelDownloadBtnLabel")),1)])),_:1})):p("",!0),m(_)?(s(),d(Q,{key:1,onClick:M,class:"del-btn","min-width":"8rem"},{default:u((()=>[v(g(e.$t("AppRunningWindow.ModelDeleteBtnLabel")),1)])),_:1})):p("",!0)])),_:1})])),_:1})])),_:1},8,["title"])):p("",!0)}}),Ve=e({__name:"app-model-storage-row",props:{installedInstance:{},appEnv:{}},setup(e){const n=e,l=a("");t((async()=>{await f(),w()}));const r=a(null),f=async()=>{const e=await V();l.value=e+"/.ollama/models"},w=async()=>{const e=await Ee.getModelsDir(n.installedInstance?.installName,n.appEnv);console.log("dir",e),A.value=e||l.value,console.log("modelDir.value",A.value),r.value=await Ee.getModelFileSize(n.installedInstance?.installName,A.value)},A=a("");o((()=>n.appEnv),(()=>{w()})),o((()=>n.installedInstance),(()=>{w()}));const y=async()=>{R(A.value)};return(e,a)=>m(r)?(s(),d(Ce,{key:0,title:e.$t("AppRunningWindow.ModelStorageLabel")},{default:u((()=>[c(se,{class:"py-2 pb-3 px-5"},{default:u((()=>[i("a",{href:"#",onClick:S(y,["prevent"])},[v(g(e.$t("AppRunningWindow.StorageUsage"))+" "+g(m(r))+" > ",1),m(A)?(s(),d(ee,{key:0,activator:"parent",location:"top"},{default:u((()=>[v(g(m(A)),1)])),_:1})):p("",!0)])])),_:1})])),_:1},8,["title"])):p("",!0)}}),Ue=e({__name:"app-env-and-access",props:{installedInstance:{},lmAppData:{}},emits:["appEnvSavedAndUpdated"],setup(e,{expose:n,emit:i}){const r=e,d=Ne(),u=a({}),v=i;t((async()=>{g()}));const g=async()=>{const e=r.installedInstance?.installName;Ee.appIsOllama(e)&&(u.value=await Me.getOSEnvObj()||{})};return n({updateAppEnvData:g}),o((()=>r.installedInstance),(()=>{g()})),o((()=>d.appSettingsSaved),(async e=>{e&&(u.value=null,await g(),v("appEnvSavedAndUpdated",u.value))})),(e,a)=>m(u)&&e.installedInstance?(s(),l(A,{key:0},[c(We,{appEnv:m(u),installedInstance:e.installedInstance,lmAppData:e.lmAppData},null,8,["appEnv","installedInstance","lmAppData"]),c(Ve,{appEnv:m(u),installedInstance:e.installedInstance},null,8,["appEnv","installedInstance"]),c(Be,{appEnv:m(u),lmAppData:e.lmAppData,installedInstance:e.installedInstance},null,8,["appEnv","lmAppData","installedInstance"]),c($e,{appEnv:m(u),installedInstance:e.installedInstance},null,8,["appEnv","installedInstance"])],64)):p("",!0)}}),Ge={class:"d-flex flex-row"},Pe={class:"d-flex flex-column justify-center"},je=e({__name:"AppRunningWindow",setup(e){const n=b(),o=I(),f=a(null),w=a(),h=a(),D=a(null),x=a(!1),T=a(!1),E=a("--"),M=a(""),{t:z}=q(),k=y("showToastMessage"),L=Ne();r((()=>!(x.value&&!o.currentLmApp.runtimeUpdateAllowed))),t((async()=>{R();const e=n.params.id,a=await j(e);D.value=a;const t=a.appId;await o.fetchApp(t),f.value=o.currentLmApp,window.ipcRenderer?.on(P.STOP_AI_RUNNING_INSTANCE,((e,...a)=>{W(),V()})),G();const l=f?.value.name;document.title=l}));const R=()=>{const e=z("AppRunningWindow.MainProcessTab");L.initTerminal(e)},C=e=>{M.value=e;let a="";e===F.INSTALL&&(a=z("AppRunningWindow.InstallSuccess")),console.log("changeMainTerminalScriptType",e,a),L.changeMainTerminalScriptType(e,a)},$=async()=>{if(C(F.START),x.value=!0,f.value){const e=await(async e=>{const a=e.installName,t=(await N()).LMD_SCRIPTS_DIR,{repoLocalFolderName:n}=be.getLMDScriptRepoUrl(e);return`\nexport LMD_BASE_INSTALL_SCRIPT_DIR="${t}/${n}"\nsh $LMD_BASE_INSTALL_SCRIPT_DIR/apps/${a}/start.sh`})(f.value);B(e),window.ipcRenderer?.send(P.RUNNING_STATUS_CHANGE,!0)}},O=()=>Array.isArray(w.value)?w.value[0]:w.value,B=e=>{const a=O();console.log("main terminal run command",a,e),a?.runCommand(e)},W=()=>{x.value=!1,U(),O()?.runStopCommand(),window.ipcRenderer.send(P.RUNNING_STATUS_CHANGE,!1)},V=()=>{O()?.exitTerminal()},U=()=>{E.value="--"},G=()=>{const e=n.query.script;console.log("runDefaultScript",e),e===F.INSTALL?((async()=>{if(C(F.INSTALL),f.value){const e=await Ie(f.value);B(e)}})(),J()):e===F.START&&K()},H=e=>{if(ze.isWindows())return;W();const a=(e=>{let a="";if(e)for(const t in e)a+=`${t}=${e[t]}\n`;return a})(e);O()?.runCommand(a),$()},K=async()=>{if($(),Ee.needPreStartApp(D.value?.installName))return ze.isMacOS()?void setTimeout((()=>{J()}),1e3):void 0;J()},J=()=>{T.value=!0},X=e=>{console.log("onCommandExecuteEnd",e),k&&e&&k(e,"success"),setTimeout((()=>{h.value?.updateAppEnvData()}),400)};return(e,a)=>(s(),d(fe,null,{default:u((()=>[c(me,{elevation:"0",class:"px-6 running-app-bar",height:"92",style:{"background-color":"#F3F3FA"}},{prepend:u((()=>[i("div",Ge,[c(de,{src:m(f)?.icon,width:"60",height:"60"},null,8,["src"]),i("div",Pe,[c(le,{class:"pt-1 pb-0"},{default:u((()=>[v(g(m(f)?.name),1)])),_:1}),m(D)?.version&&"--"!==m(D)?.version?(s(),d(pe,{key:0,class:"py-0"},{default:u((()=>[v(g(e.$t("AppRunningWindow.Version"))+" "+g(m(D)?.version),1)])),_:1})):p("",!0)])])])),append:u((()=>[m(x)?(s(),d(Q,{key:0,variant:"flat",color:"#F2313F",class:"mx-2",width:"80",height:"40",onClick:a[0]||(a[0]=e=>W())},{default:u((()=>[v(g(e.$t("AppRunningWindow.Stop")),1)])),_:1})):(s(),d(Q,{key:1,color:"primary",variant:"flat",class:"mx-2",width:"80",height:"40",onClick:a[1]||(a[1]=e=>$())},{default:u((()=>[v(g(e.$t("AppRunningWindow.Start")),1)])),_:1})),c(Re,{installedInstance:m(D)},null,8,["installedInstance"])])),_:1}),c(ge,{class:"running-window-main mb-0 d-flex"},{default:u((()=>[c(se,{fluid:"",class:"d-flex flex-column",style:{height:"100%",flex:"1","min-width":"0",overflow:"hidden"}},{default:u((()=>[c(ue,{class:"mx-0",modelValue:m(L).currentTerminalTab,"onUpdate:modelValue":a[2]||(a[2]=e=>m(L).currentTerminalTab=e),"align-tabs":"start",color:"primary"},{default:u((()=>[(s(!0),l(A,null,_(m(L).terminals,((e,a)=>(s(),d(Se,{value:e.tabName,key:e.tabName},{append:u((()=>[e.closable?(s(),d(ae,{key:0,icon:"mdi-close-circle-outline",onClick:S((t=>((e,a)=>{L.removeTerminal(e,a)})(e,a)),["stop"])},null,8,["onClick"])):p("",!0)])),default:u((()=>[v(" "+g(e.text),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"]),c(ve,{modelValue:m(L).currentTerminalTab,"onUpdate:modelValue":a[3]||(a[3]=e=>m(L).currentTerminalTab=e),class:"mx-0 my-0 pt-0 mb-0",style:{flex:"1","padding-left":"4px","background-color":"black","padding-bottom":"6px"}},{default:u((()=>[(s(!0),l(A,null,_(m(L).terminals,((e,a)=>(s(),d(we,{style:{flex:"1"},key:e.text,value:e.tabName,eager:""},{default:u((()=>["main-process"===e.tabName?(s(),d(De,{key:0,onExecuteEnd:a=>{return t=e.commandExecuteEndToastMsg,J(),console.log("onMainTerminalCommandEnd"),void X(t);var t},"command-execute-end-keywords":e.commandExecuteEndKeywords,ref_for:!0,ref_key:"generalTerminal",ref:w,socketURI:"ws://localhost:19312"},null,8,["onExecuteEnd","command-execute-end-keywords"])):(s(),d(De,{key:1,onExecuteEnd:a=>X(e.commandExecuteEndToastMsg),"command-execute-end-keywords":e.commandExecuteEndKeywords,initCommand:e.initCommand,socketURI:"ws://localhost:19312"},null,8,["onExecuteEnd","command-execute-end-keywords","initCommand"]))])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(se,{class:"running-app-right-side-bar"},{default:u((()=>[m(D)&&m(f)&&m(T)?(s(),d(Ue,{key:0,ref_key:"appEnvAndAccessComponent",ref:h,onAppEnvSavedAndUpdated:H,lmAppData:m(f),installedInstance:m(D)},null,8,["lmAppData","installedInstance"])):p("",!0)])),_:1})])),_:1})])),_:1}))}});export{je as default};
