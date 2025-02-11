import{a4 as pe,d as Z,r as D,l as J,ad as Me,o as y,n as j,a as G,k as X,$ as me,C as Re,K as fe,a2 as Ne,D as H,J as Ee,z as f,c as L,w as c,g as T,t as w,m as O,s as z,b as S,a9 as Ve,R as se,a8 as Ce,a6 as ge,M as ie,U as Le,N as xe,I as ve,a7 as Oe,i as ze,G as $e,F as Y,a5 as Be,p as te,L as le,ae as q,af as he,ag as Pe,a3 as We,S as Ue,ah as Fe,V as Se,f as Ge,h as He,ai as we,aj as Ae,j as je,ak as qe,al as Ke,am as Ye,an as Ze,ao as Je}from"./index.js";import{u as Qe}from"./lmapp.js";import{I as re}from"./IPCChannelName.js";import{a as Xe}from"./install-instance.js";import{A as et}from"./AppScriptType.js";function tt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ce={exports:{}},be;function nt(){return be||(be=1,function(n,e){(function(t,i){n.exports=i()})(self,()=>(()=>{var t={};return(()=>{var i=t;Object.defineProperty(i,"__esModule",{value:!0}),i.FitAddon=void 0,i.FitAddon=class{activate(o){this._terminal=o}dispose(){}fit(){const o=this.proposeDimensions();if(!o||!this._terminal||isNaN(o.cols)||isNaN(o.rows))return;const a=this._terminal._core;this._terminal.rows===o.rows&&this._terminal.cols===o.cols||(a._renderService.clear(),this._terminal.resize(o.cols,o.rows))}proposeDimensions(){if(!this._terminal||!this._terminal.element||!this._terminal.element.parentElement)return;const o=this._terminal._core,a=o._renderService.dimensions;if(a.css.cell.width===0||a.css.cell.height===0)return;const l=this._terminal.options.scrollback===0?0:o.viewport.scrollBarWidth,s=window.getComputedStyle(this._terminal.element.parentElement),m=parseInt(s.getPropertyValue("height")),h=Math.max(0,parseInt(s.getPropertyValue("width"))),g=window.getComputedStyle(this._terminal.element),r=m-(parseInt(g.getPropertyValue("padding-top"))+parseInt(g.getPropertyValue("padding-bottom"))),p=h-(parseInt(g.getPropertyValue("padding-right"))+parseInt(g.getPropertyValue("padding-left")))-l;return{cols:Math.max(2,Math.floor(p/a.css.cell.width)),rows:Math.max(1,Math.floor(r/a.css.cell.height))}}}})(),t})())}(ce)),ce.exports}var at=nt(),de={exports:{}},_e;function st(){return _e||(_e=1,function(n,e){(function(t,i){n.exports=i()})(self,()=>(()=>{var t={};return(()=>{var i=t;function o(a,l,s){return a.addEventListener(l,s),{dispose:()=>{s&&a.removeEventListener(l,s)}}}Object.defineProperty(i,"__esModule",{value:!0}),i.AttachAddon=void 0,i.AttachAddon=class{constructor(a,l){this._disposables=[],this._socket=a,this._socket.binaryType="arraybuffer",this._bidirectional=!(l&&l.bidirectional===!1)}activate(a){this._disposables.push(o(this._socket,"message",l=>{const s=l.data;a.write(typeof s=="string"?s:new Uint8Array(s))})),this._bidirectional&&(this._disposables.push(a.onData(l=>this._sendData(l))),this._disposables.push(a.onBinary(l=>this._sendBinary(l)))),this._disposables.push(o(this._socket,"close",()=>this.dispose())),this._disposables.push(o(this._socket,"error",()=>this.dispose()))}dispose(){for(const a of this._disposables)a.dispose()}_sendData(a){this._checkOpenSocket()&&this._socket.send(a)}_sendBinary(a){if(!this._checkOpenSocket())return;const l=new Uint8Array(a.length);for(let s=0;s<a.length;++s)l[s]=255&a.charCodeAt(s);this._socket.send(l)}_checkOpenSocket(){switch(this._socket.readyState){case WebSocket.OPEN:return!0;case WebSocket.CONNECTING:throw new Error("Attach addon was loaded before socket was open");case WebSocket.CLOSING:return console.warn("Attach addon socket is closing"),!1;case WebSocket.CLOSED:throw new Error("Attach addon socket is closed");default:throw new Error("Unexpected socket state")}}}})(),t})())}(de)),de.exports}var it=st(),ue={exports:{}},ye;function lt(){return ye||(ye=1,function(n,e){(function(t,i){n.exports=i()})(self,()=>(()=>{var t={6:(l,s)=>{function m(g){try{const r=new URL(g),p=r.password&&r.username?`${r.protocol}//${r.username}:${r.password}@${r.host}`:r.username?`${r.protocol}//${r.username}@${r.host}`:`${r.protocol}//${r.host}`;return g.toLocaleLowerCase().startsWith(p.toLocaleLowerCase())}catch{return!1}}Object.defineProperty(s,"__esModule",{value:!0}),s.LinkComputer=s.WebLinkProvider=void 0,s.WebLinkProvider=class{constructor(g,r,p,A={}){this._terminal=g,this._regex=r,this._handler=p,this._options=A}provideLinks(g,r){const p=h.computeLink(g,this._regex,this._terminal,this._handler);r(this._addCallbacks(p))}_addCallbacks(g){return g.map(r=>(r.leave=this._options.leave,r.hover=(p,A)=>{if(this._options.hover){const{range:R}=r;this._options.hover(p,A,R)}},r))}};class h{static computeLink(r,p,A,R){const V=new RegExp(p.source,(p.flags||"")+"g"),[x,N]=h._getWindowedLineStrings(r-1,A),v=x.join("");let b;const _=[];for(;b=V.exec(v);){const C=b[0];if(!m(C))continue;const[B,U]=h._mapStrIdx(A,N,0,b.index),[F,$]=h._mapStrIdx(A,B,U,C.length);if(B===-1||U===-1||F===-1||$===-1)continue;const K={start:{x:U+1,y:B+1},end:{x:$,y:F+1}};_.push({range:K,text:C,activate:R})}return _}static _getWindowedLineStrings(r,p){let A,R=r,V=r,x=0,N="";const v=[];if(A=p.buffer.active.getLine(r)){const b=A.translateToString(!0);if(A.isWrapped&&b[0]!==" "){for(x=0;(A=p.buffer.active.getLine(--R))&&x<2048&&(N=A.translateToString(!0),x+=N.length,v.push(N),A.isWrapped&&N.indexOf(" ")===-1););v.reverse()}for(v.push(b),x=0;(A=p.buffer.active.getLine(++V))&&A.isWrapped&&x<2048&&(N=A.translateToString(!0),x+=N.length,v.push(N),N.indexOf(" ")===-1););}return[v,R]}static _mapStrIdx(r,p,A,R){const V=r.buffer.active,x=V.getNullCell();let N=A;for(;R;){const v=V.getLine(p);if(!v)return[-1,-1];for(let b=N;b<v.length;++b){v.getCell(b,x);const _=x.getChars();if(x.getWidth()&&(R-=_.length||1,b===v.length-1&&_==="")){const C=V.getLine(p+1);C&&C.isWrapped&&(C.getCell(0,x),x.getWidth()===2&&(R+=1))}if(R<0)return[p,b]}p++,N=0}return[p,N]}}s.LinkComputer=h}},i={};function o(l){var s=i[l];if(s!==void 0)return s.exports;var m=i[l]={exports:{}};return t[l](m,m.exports,o),m.exports}var a={};return(()=>{var l=a;Object.defineProperty(l,"__esModule",{value:!0}),l.WebLinksAddon=void 0;const s=o(6),m=/(https?|HTTPS?):[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/;function h(g,r){const p=window.open();if(p){try{p.opener=null}catch{}p.location.href=r}else console.warn("Opening link blocked as opener could not be cleared")}l.WebLinksAddon=class{constructor(g=h,r={}){this._handler=g,this._options=r}activate(g){this._terminal=g;const r=this._options,p=r.urlRegex||m;this._linkProvider=this._terminal.registerLinkProvider(new s.WebLinkProvider(this._terminal,p,this._handler,r))}dispose(){this._linkProvider?.dispose()}}})(),a})())}(ue)),ue.exports}var ot=lt(),ae={exports:{}},De;function rt(){if(De)return ae.exports;De=1;function n(e,t=100,i={}){if(typeof e!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);if(t<0)throw new RangeError("`wait` must not be negative.");const{immediate:o}=typeof i=="boolean"?{immediate:i}:i;let a,l,s,m,h;function g(){const A=a,R=l;return a=void 0,l=void 0,h=e.apply(A,R),h}function r(){const A=Date.now()-m;A<t&&A>=0?s=setTimeout(r,t-A):(s=void 0,o||(h=g()))}const p=function(...A){if(a&&this!==a&&Object.getPrototypeOf(this)===Object.getPrototypeOf(a))throw new Error("Debounced method called with different contexts of the same prototype.");a=this,l=A,m=Date.now();const R=o&&!s;return s||(s=setTimeout(r,t)),R&&(h=g()),h};return Object.defineProperty(p,"isPending",{get(){return s!==void 0}}),p.clear=()=>{s&&(clearTimeout(s),s=void 0)},p.flush=()=>{s&&p.trigger()},p.trigger=()=>{h=g(),p.clear()},p}return ae.exports.debounce=n,ae.exports=n,ae.exports}var ct=rt();const dt=tt(ct),ut=()=>"",pt=n=>{let e="";if(n)for(const t in n)e+=`${t}=${n[t]}
`;return e},mt=async n=>{const e=n.installName;return`
export LMD_BASE_INSTALL_SCRIPT_DIR="${(await pe()).LMD_SCRIPTS_DIR}/lmd-install-scripts"
git clone --depth=1 https://gitee.com/lmdown/lmd-install-scripts $LMD_BASE_INSTALL_SCRIPT_DIR
cd $LMD_BASE_INSTALL_SCRIPT_DIR && git fetch origin master && git reset --hard origin/master
sh $LMD_BASE_INSTALL_SCRIPT_DIR/apps/${e}/install.sh`},ft=async n=>{const e=n.installName;return`
export LMD_BASE_INSTALL_SCRIPT_DIR="${(await pe()).LMD_SCRIPTS_DIR}/lmd-install-scripts"
sh $LMD_BASE_INSTALL_SCRIPT_DIR/apps/${e}/start.sh`},gt=async n=>{const e=n.installName;return`
export LMD_BASE_INSTALL_SCRIPT_DIR="${(await pe()).LMD_SCRIPTS_DIR}/lmd-install-scripts"
sh $LMD_BASE_INSTALL_SCRIPT_DIR/apps/${e}/update.sh
`},Ie=Z({__name:"index",props:{socketURI:{},initCommand:{},commandExecuteEndKeywords:{}},emits:["executeEnd"],setup(n,{expose:e,emit:t}){const i=t,o=D([]),a=D(!1),l=n,s=D(null),m=D(null),h=D(null),g=D(null);let r;J(()=>{b(),v()}),Me(()=>{s.value?.close(),m.value?.dispose(),r&&g.value&&(r.unobserve(g.value),r.disconnect())});const p=I=>{console.log("runCommand",I),console.log("runCommand socket.value",s.value),s.value?.send(I+`
`)};e({runCommand:p,runStopCommand:()=>{const I=ut();p(I)},exitTerminal:()=>{p("exit")}});const V=()=>{if(!g.value||!s.value)return;const I=new window.Terminal({fontSize:14,cursorBlink:!0}),d=new it.AttachAddon(s.value),k=new at.FitAddon,u=new ot.WebLinksAddon((E,M)=>{const P=document.createElement("a");P.setAttribute("href",M),P.setAttribute("target","_blank"),P.setAttribute("id","lmdTempLink");const ne=document.getElementById("lmdTempLink");ne&&document.body.removeChild(ne),document.body.appendChild(P),P.click()});I.loadAddon(d),I.loadAddon(k),I.loadAddon(u),I.open(g.value),k.fit(),I.focus(),m.value=I},N=dt(I=>{for(const d of I)K(d.contentRect.width,d.contentRect.height)},50),v=()=>{h.value&&(r=new ResizeObserver(N),r.observe(h.value))},b=()=>{s.value=new WebSocket(l.socketURI),B(),C(),U(),_()},_=()=>{if(l.commandExecuteEndKeywords&&s.value){const I=l.commandExecuteEndKeywords;s.value.onmessage=d=>{const k=d.data;I.forEach(u=>{k.includes(u)&&!o.value.includes(u)&&o.value.push(u)}),o.value.length===I.length&&(a.value||(i("executeEnd"),a.value=!0))}}},C=()=>{s.value&&(s.value.onopen=()=>{V(),l.initCommand&&p(l.initCommand)})},B=()=>{s.value&&(s.value.onclose=I=>{console.log("close socket",I)})},U=()=>{s.value&&(s.value.onerror=I=>{console.log("socket 链接失败",I)})},F=D(80),$=D(30),K=(I,d)=>{const k=Math.floor(I/8.5),u=Math.round(d/16);if(console.log("cols",I,k),console.log("rows",d,u),!(u===0||k===0)&&(F.value!==k||$.value!==u)){F.value=k,$.value=u,m.value?.resize(k,u);const E=`lmd_action:resize:${k},${u}`;s.value?.send(E)}};return(I,d)=>(y(),j("div",{ref_key:"terminalOutContainer",ref:h,class:"mb-2",style:{height:"100%",width:"100%"}},[G("div",{ref_key:"terminalContainer",ref:g,class:"terminal",style:{height:"300px",width:"100%"}},null,512)],512))}}),vt=async n=>{let e;try{return(await X.post("/self-manage/common-util/app-running-base-env-info",{keys:n})).data}catch(t){return console.log("err",t),e}},ht=async n=>{let e;try{return(await X.post("/self-manage/common-util/save-app-running-base-env-info",{envObj:n})).data}catch(t){return console.log("err",t),e}},St=async()=>{let n;try{n=(await X.get("/self-manage/common-util/lan-ip")).data?.ip}catch(e){console.log("err",e)}return n},wt=async()=>{let n;try{n=(await X.get("/self-manage/common-util/user-home-dir")).data?.userHomeDir}catch(e){console.log("err",e)}return n},At=async n=>{let e=0;try{e=(await X.get(`/self-manage/common-util/dir-file-size?dirPath=${n}`)).data?.fileSize}catch(t){console.log("err",t)}return e},bt=async n=>{let e=[];try{e=(await X.get(`/self-manage/common-util/installed-model-files/${n}`)).data?.models}catch(t){console.log("err",t)}return e},_t=async(n,e=!1)=>{if(window.ipcRenderer)return await window.ipcRenderer?.invoke(me.SELECT_DIR,n,e)},ke="OLLAMA_MODELS",yt="OLLAMA_HOST",Dt={DISPLAY_ENV:["OLLAMA_MODELS","OLLAMA_HOST"]},It=[{displayName:"Deepseek-R1",installName:"deepseek-r1",tags:[{parameterSize:"1.5b",fileSize:"1.1GB"},{parameterSize:"7b",fileSize:"4.7GB"},{parameterSize:"8b",fileSize:"4.9GB"},{parameterSize:"14b",fileSize:"9.0GB"},{parameterSize:"32b",fileSize:"20GB"},{parameterSize:"70b",fileSize:"43GB"},{parameterSize:"671b",fileSize:"404GB"}]},{displayName:"Llama 3.1",installName:"llama3.1",tags:[{parameterSize:"8b",fileSize:"4.9GB"},{parameterSize:"70b",fileSize:"43GB"},{parameterSize:"405b",fileSize:"243GB"}]},{displayName:"Qwen 2.5",installName:"qwen2.5",tags:[{parameterSize:"0.5b",fileSize:"398MB"},{parameterSize:"1.5b",fileSize:"986MB"},{parameterSize:"3b",fileSize:"1.9GB "},{parameterSize:"7b",fileSize:"4.7GB"},{parameterSize:"14b",fileSize:"9.0GB"},{parameterSize:"32b",fileSize:"20GB"},{parameterSize:"72b",fileSize:"47GB"}]}],kt=async()=>{if(window.ipcRenderer)return await window.ipcRenderer?.invoke(me.RESTART_APP)},Tt=async n=>{if(window.ipcRenderer)return await window.ipcRenderer?.invoke(me.KILL_PROCESSES,n)},Et=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Ct=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],Lt=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],xt=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],Te=(n,e,t)=>{let i=n;return typeof e=="string"||Array.isArray(e)?i=n.toLocaleString(e,t):(e===!0||t!==void 0)&&(i=n.toLocaleString(void 0,t)),i};function Mt(n,e){if(!Number.isFinite(n))throw new TypeError(`Expected a finite number, got ${typeof n}: ${n}`);e={bits:!1,binary:!1,space:!0,...e};const t=e.bits?e.binary?xt:Lt:e.binary?Ct:Et,i=e.space?" ":"";if(e.signed&&n===0)return` 0${i}${t[0]}`;const o=n<0,a=o?"-":e.signed?"+":"";o&&(n=-n);let l;if(e.minimumFractionDigits!==void 0&&(l={minimumFractionDigits:e.minimumFractionDigits}),e.maximumFractionDigits!==void 0&&(l={maximumFractionDigits:e.maximumFractionDigits,...l}),n<1){const g=Te(n,e.locale,l);return a+g+i+t[0]}const s=Math.min(Math.floor(e.binary?Math.log(n)/Math.log(1024):Math.log10(n)/3),t.length-1);n/=(e.binary?1024:1e3)**s,l||(n=n.toPrecision(3));const m=Te(Number(n),e.locale,l),h=t[s];return a+m+i+h}class W{static appIsOllama(e){return e==="ollama"}static async getModelFileSize(e,t){if(this.appIsOllama(e)&&t){const i=t[ke];if(i){const o=await At(i);return Mt(o)}}return""}static async getModelsDir(e,t){return this.appIsOllama(e)&&t?t[ke]:""}static genModelDownloadCommand(e,t){return this.appIsOllama(e)&&t?`ollama pull ${t}`:""}static async mergeModelsList(e,t){if(e){const i=await bt(e);console.log("installedModelList",i),i.forEach(o=>{const[a,l]=o.name.split(":"),s=t.find(m=>m.installName===a);if(s){const m=s.tags.find(h=>h.parameterSize===l);m?m.installed=!0:s.tags.push({parameterSize:l,fileSize:o.size||"",installed:!0})}else t.push({displayName:a,installName:a,tags:[{parameterSize:l,fileSize:o.size||"",installed:!0}]})})}return t}static killAppProcessed(e){this.appIsOllama(e)&&Tt(["ollama.exe","ollama app.exe"])}static needPreStartApp(e){return!!this.appIsOllama(e)}}class Q{static async getAppSettings(){const e=await this.getOSEnvObj();return{modelsDir:e.OLLAMA_MODELS,externalAccessHost:e.OLLAMA_HOST}}static async getOSEnvObj(){return await vt(Dt.DISPLAY_ENV)}static async getAccessHosts(e){const t="11434",i=[`http://127.0.0.1:${t}`];if(!(!e||e==="127.0.0.1")){const o=e.split(":"),a=o[0];let l=[a];const s=o[1]||t;a==="0.0.0.0"&&(l=await St()),l&&l.length>0&&l.forEach(m=>{i.push(`http://${m}:${s}`)})}return i}static async saveAppSettings(e,t){e.modelsDir===t&&(e.modelsDir="");const i={OLLAMA_MODELS:e.modelsDir,OLLAMA_HOST:e.externalAccessHost};return await ht(i)}static filterSpecialFiles(e){if(!e)return e;const t=["desktop.ini",".ds_store","thumbs.db"];return e.filter(i=>{const o=i.toLowerCase();return!t.includes(o)})}static checkModelsDirValid(e,t){if(e.subdirs=this.filterSpecialFiles(e.subdirs),e.files=this.filterSpecialFiles(e.files),(!e.subdirs||e.subdirs.length===0)&&(!e.files||e.files.length===0))return!0;const i=new Set(e.subdirs);return t.every(a=>i.has(a))}static getDownloadableModels(){return It}}const oe=Re("runningInstance",{state:()=>({runningInstances:[],appSettingsSaved:!1,terminals:[],currentTerminalTab:""}),actions:{addRunningInstance(n){this.runningInstances.find(t=>t.id===n.id)||this.runningInstances.push(n)},removeRunningInstance(n){const e=this.runningInstances.findIndex(t=>t.id===n.id);e!=-1&&this.runningInstances.splice(e,1)},resetAppSettingsSavedStatus(){this.appSettingsSaved=!1},onAppSettingsSaved(){this.appSettingsSaved=!0},initTerminal(n){this.terminals=[n],this.currentTerminalTab=n.tabName},addTerminal(n,e,t){this.terminals.find(o=>o.tabName===n)||this.terminals.push({text:e,tabName:n,initCommand:t,closable:!0,commandExecuteEndKeywords:["digest","writing manifest","success"]}),this.currentTerminalTab=n},removeTerminal(n,e){this.terminals.splice(e,1)}}});class ee{static isWindows(){const e=navigator.userAgentData;return e&&e.platform?e.platform==="Windows":navigator.userAgent?/Win(dows )?NT/.test(navigator.userAgent):!1}}const Rt={style:{"font-size":"12px"}},Nt={style:{"font-size":"12px"}},Vt=Z({__name:"app-settings-btn",props:{installedInstance:{}},setup(n){const{t:e}=fe(),t=D(!1),i=D(!1),o=D(!1),a=D(!1),l=D(""),s=oe(),m=Ne("showToastMessage"),h=D({}),g=D(!0),r=n;H(()=>r.installedInstance,()=>{p()});const p=()=>{$()?t.value=!0:t.value=!1};J(()=>{p()});const A=async()=>{i.value=!0,await V(),await F()},R=()=>{i.value=!1},V=async()=>{const d=await wt();l.value=d+"/.ollama/models"},x=async()=>{if(!o.value||!h)return;if(l.value===""){const E=e("AppSettingDialog.DataNotValid");m&&m(E,"error");return}a.value=!0;const d=Object.assign({},h.value),k=await Q.saveAppSettings(d,l.value);console.log("save result ",k);const u=e("Common.saveSuccess");m&&m(u,"success"),a.value=!1,s.onAppSettingsSaved(),setTimeout(()=>{s.resetAppSettingsSavedStatus()},100),R(),ee.isWindows()&&(W.killAppProcessed(r.installedInstance?.installName),setTimeout(()=>{kt()},1500))},N=d=>!!d||e("Common.fieldRequired"),v=async()=>{const d=await _t(h.value.modelsDir,!0);d&&d.path&&(h.value.modelsDir=d.path,console.log("dirInfo",d),g.value=Q.checkModelsDirValid(d,["blobs"]),console.log("dirValid.value",g.value))},b=[N,()=>g.value||e("AppSettingDialog.ModelsDirNotValid")],_=/^(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?$/,C=[d=>d===""?!0:_.test(d)||e("AppSettingDialog.HostNotValid")],B=async()=>{h.value.modelsDir=l.value},U=Ee(()=>{if($())return e("AppSettingDialog.OllamaModelsDirInfoIconTip")}),F=async()=>{if($()){const d=await Q.getAppSettings();console.log("getOSEnvForCurrentApp",d),h.value=Object.assign({},d),d.modelsDir===""&&(console.log("getOSEnvForCurrentApp",d),h.value.modelsDir=l.value)}},$=()=>W.appIsOllama(r.installedInstance?.installName),K=()=>{let d=e("AppSettingDialog.ModelsDirTip");return ee.isWindows()?d+=e("AppSettingDialog.ModelsDirTipExtraWindows"):d+=e("AppSettingDialog.ModelsDirTipExtraMac"),d},I=()=>{let d=e("AppSettingDialog.ServerHostTip");return ee.isWindows()?d+=e("AppSettingDialog.ServerHostTipExtraWindows"):d+=e("AppSettingDialog.ServerHostTipExtraMac"),d};return(d,k)=>(y(),j(Y,null,[f(t)?(y(),L(O,{key:0,"prepend-icon":"mdi-cog",stacked:"",onClick:A},{default:c(()=>[T(w(d.$t("AppRunningWindow.Settings")),1)]),_:1})):z("",!0),S($e,{modelValue:f(i),"onUpdate:modelValue":k[5]||(k[5]=u=>se(i)?i.value=u:null),"min-width":"400","max-width":"800"},{default:c(()=>[d.installedInstance?(y(),L(ze,{key:0,class:"mx-auto px-0 py-0 window-no-drag",width:"100%",title:d.$t("AppSettingDialog.Title")+d.installedInstance.name},{append:c(()=>[S(O,{icon:"mdi-close",class:"ms-auto",size:"compact",text:"Ok",elevation:"0",onClick:k[0]||(k[0]=u=>i.value=!1)})]),default:c(()=>[f(h)?(y(),L(Ve,{key:0,class:"pt-0 pb-3 px-6",modelValue:f(o),"onUpdate:modelValue":k[4]||(k[4]=u=>se(o)?o.value=u:null),onSubmit:Ce(x,["prevent"])},{default:c(()=>[S(ge,{modelValue:f(h).modelsDir,"onUpdate:modelValue":k[1]||(k[1]=u=>f(h).modelsDir=u),density:"comfortable",readonly:f(a),rules:b,label:d.$t("AppSettingDialog.ModelsDirLabel")},{append:c(()=>[S(ie,{location:"bottom"},{activator:c(({props:u})=>[S(Le,xe(u,{icon:"mdi-information-slab-circle-outline"}),null,16)]),default:c(()=>[G("pre",null,w(f(U)),1)]),_:1}),S(O,{class:"ml-1",onClick:v},{default:c(()=>[T(w(d.$t("AppSettingDialog.Browse")),1)]),_:1}),S(O,{class:"ml-1",onClick:B},{default:c(()=>[T(w(d.$t("AppSettingDialog.UseDefaultValue")),1)]),_:1})]),_:1},8,["modelValue","readonly","label"]),S(ve,{class:"pt-0"},{default:c(()=>[G("pre",Rt,w(K()),1)]),_:1}),S(ge,{modelValue:f(h).externalAccessHost,"onUpdate:modelValue":k[2]||(k[2]=u=>f(h).externalAccessHost=u),density:"comfortable",readonly:f(a),rules:C,label:d.$t("AppSettingDialog.ServerHostLabel")},null,8,["modelValue","readonly","label"]),S(ve,{class:"pt-0"},{default:c(()=>[G("pre",Nt,w(I()),1)]),_:1}),S(Oe,{class:"text-center justify-center"},{default:c(()=>[S(O,{variant:"outlined",onClick:k[3]||(k[3]=u=>i.value=!1)},{default:c(()=>[T(w(d.$t("AppSettingDialog.close")),1)]),_:1}),S(O,{color:"primary",variant:"flat",type:"submit",loading:f(a)},{default:c(()=>[T(w(d.$t("AppSettingDialog.saveConfig")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["modelValue"])):z("",!0)]),_:1},8,["title"])):z("",!0)]),_:1},8,["modelValue"])],64))}}),Ot=Z({__name:"app-env-row",props:{installedInstance:{},appEnv:{}},setup(n){const e=D(null);return J(async()=>{e.value=await Be()}),(t,i)=>(y(),L(le,{class:"my-1 py-1 mx-3"},{default:c(()=>[T(w(t.$t("AppRunningWindow.EnvVars"))+": ",1),(y(!0),j(Y,null,te(f(e),(o,a)=>(y(),L(q,{variant:"tonal",size:"x-small",style:{"min-width":"50px","max-width":"120px","margin-left":"4px"},key:a},{default:c(()=>[T(w(a)+" ",1),S(ie,{activator:"parent",location:"bottom"},{default:c(()=>[T(w(o),1)]),_:2},1024)]),_:2},1024))),128)),(y(!0),j(Y,null,te(t.appEnv,(o,a)=>(y(),L(q,{variant:"tonal",size:"x-small",color:"orange-darken-4",style:{"min-width":"50px","max-width":"120px","margin-left":"4px"},key:a},{default:c(()=>[T(w(a)+" ",1),S(ie,{activator:"parent",location:"bottom"},{default:c(()=>[T(w(o),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}))}}),zt=["href"],$t=Z({__name:"app-access-row",props:{lmAppData:{},installedInstance:{},appEnv:{}},setup(n){const e=n,t=D([]),i=D(!1),o=async()=>{if(e.lmAppData?.accessInfo){const a=e.lmAppData.accessInfo,{accessType:l}=a;if(!l)return!1;if(l==="browser")return t.value.push(e.lmAppData.accessInfo?.webUrl||""),!0;if(l==="exec"&&W.appIsOllama(e.installedInstance?.installName)){if(e.appEnv){const s=e.appEnv[yt];t.value=await Q.getAccessHosts(s)}return!0}}return!1};return J(async()=>{i.value=await o()}),H(()=>e.appEnv,async()=>{i.value=await o()}),(a,l)=>a.lmAppData&&f(i)?(y(),L(le,{key:0,class:"my-1 py-1 mx-3"},{default:c(()=>[T(w(a.$t("AppRunningWindow.Access"))+": ",1),f(t)&&f(t).length>0?(y(!0),j(Y,{key:0},te(f(t),s=>(y(),j("a",{class:"mx-2",key:s,href:s,target:"_blank"},w(s),9,zt))),128)):z("",!0)]),_:1})):z("",!0)}}),Bt=Z({__name:"model-download-row",props:{lmAppData:{},installedInstance:{},appEnv:{}},setup(n){const e=oe(),t=D([]),i=D([]),o=D(!1),a=D(null),l=D(null),s=D(null),m=D(!1),{t:h}=fe(),g=n,r=async()=>{const v=await W.getModelsDir(g.installedInstance?.installName,g.appEnv);We(v)};J(async()=>{p(),V(),await x()}),H(()=>g.lmAppData,()=>{p()}),H(()=>g.installedInstance,()=>{V(),x()}),H(()=>g.appEnv,()=>{V(),x()});const p=()=>{o.value=W.appIsOllama(g.lmAppData?.installName)};H(a,()=>{R()}),H(l,v=>{A(v)});const A=v=>{const b=i.value.find(_=>_.parameterSize===v);b&&(b.installed===void 0?m.value=!0:m.value=!b.installed)},R=()=>{const v=a.value,_=t.value.find(C=>C.installName===v)?.tags||[];if(i.value=_,_.length>0){const C=_[0].parameterSize;l.value=C,A(C)}},V=async()=>{s.value=await W.getModelFileSize(g.installedInstance?.installName,g.appEnv)},x=async()=>{const v=g.installedInstance?.installName;if(v&&o.value){const b=Q.getDownloadableModels(),_=await W.mergeModelsList(v,b);if(t.value=_,t.value&&t.value.length>0){const C=t.value[0];a.value=C.installName}}},N=async()=>{const v=`${a.value}:${l.value}`,b=W.genModelDownloadCommand(g.installedInstance?.installName,v),_=h("AppRunningWindow.ModelDownloadBtnLabel")+" "+v;b&&a.value&&e.addTerminal(v,_,b)};return(v,b)=>v.lmAppData&&f(o)?(y(),L(le,{key:0,class:"my-0 py-0 mx-3 d-flex flex-row",style:{gap:"0.5rem","align-items":"center"}},{default:c(()=>[G("div",null,w(v.$t("AppRunningWindow.ModelDownload"))+": ",1),S(he,{class:"flex-1",items:f(t),"item-title":"displayName","item-value":"installName",modelValue:f(a),"onUpdate:modelValue":b[0]||(b[0]=_=>se(a)?a.value=_:null),density:"compact","hide-details":"",label:v.$t("AppRunningWindow.ModelName")},null,8,["items","modelValue","label"]),S(he,{class:"flex-1",items:f(i),"item-title":"parameterSize","item-value":"parameterSize",modelValue:f(l),"onUpdate:modelValue":b[1]||(b[1]=_=>se(l)?l.value=_:null),density:"compact","hide-details":"",label:v.$t("AppRunningWindow.ParameterSize")},{selection:c(({item:_})=>[T(w(_.title)+" ",1),S(q,{density:"compact",class:"mx-1",variant:"flat",color:"yellow-darken-2"},{default:c(()=>[T(w(_.raw.fileSize),1)]),_:2},1024),_.raw.installed?(y(),L(q,{key:0,density:"compact",variant:"flat",color:"green"},{default:c(()=>[G("span",null,w(v.$t("AppRunningWindow.ModelDownloaded")),1)]),_:1})):(y(),L(q,{key:1,density:"compact"},{default:c(()=>[G("span",null,w(v.$t("AppRunningWindow.ModelNotDownloaded")),1)]),_:1}))]),item:c(({props:_,item:C})=>[S(Pe,xe(_,{density:"compact"}),{title:c(()=>[T(w(C.title)+" ",1),S(q,{density:"compact",class:"mx-1",variant:"flat",color:"yellow-darken-2"},{default:c(()=>[T(w(C.raw.fileSize),1)]),_:2},1024),C.raw.installed?(y(),L(q,{key:0,density:"compact",variant:"flat",color:"green"},{default:c(()=>[G("span",null,w(v.$t("AppRunningWindow.ModelDownloaded")),1)]),_:1})):(y(),L(q,{key:1,density:"compact"},{default:c(()=>[G("span",null,w(v.$t("AppRunningWindow.ModelNotDownloaded")),1)]),_:1}))]),_:2},1040)]),_:1},8,["items","modelValue","label"]),f(m)?(y(),L(O,{key:0,"prepend-icon":"mdi-download-outline",onClick:N,color:"green-lighten-5"},{default:c(()=>[T(w(v.$t("AppRunningWindow.ModelDownloadBtnLabel")),1)]),_:1})):z("",!0),S(O,{"prepend-icon":"mdi-folder-file-outline",color:"amber-lighten-5",onClick:r},{default:c(()=>[T(w(f(s))+" ",1),S(ie,{activator:"parent",location:"top"},{default:c(()=>[T(w(v.$t("AppRunningWindow.StorageBtnTip")),1)]),_:1})]),_:1})]),_:1})):z("",!0)}}),Pt=Z({__name:"app-env-and-access",props:{installedInstance:{},lmAppData:{}},emits:["appEnvSavedAndUpdated"],setup(n,{expose:e,emit:t}){const i=n,o=oe(),a=D({}),l=t;J(async()=>{s()});const s=async()=>{const m=i.installedInstance?.installName;W.appIsOllama(m)&&(a.value=await Q.getOSEnvObj()||{})};return e({updateAppEnvData:s}),H(()=>i.installedInstance,()=>{s()}),H(()=>o.appSettingsSaved,async m=>{m&&(a.value=null,await s(),l("appEnvSavedAndUpdated",a.value))}),(m,h)=>f(a)&&m.installedInstance?(y(),j(Y,{key:0},[S($t,{appEnv:f(a),lmAppData:m.lmAppData,installedInstance:m.installedInstance},null,8,["appEnv","lmAppData","installedInstance"]),S(Ot,{appEnv:f(a),installedInstance:m.installedInstance},null,8,["appEnv","installedInstance"]),S(Bt,{appEnv:f(a),installedInstance:m.installedInstance,lmAppData:m.lmAppData},null,8,["appEnv","installedInstance","lmAppData"])],64)):z("",!0)}}),qt=Z({__name:"AppRunningWindow",setup(n){const e=Ue(),t=Qe(),i=D(null),o=D(),a=D(),l=D(null),s=D(!1),m=D(!1),h=D("--"),{t:g}=fe(),r=oe(),p=Ee(()=>!(s.value&&!t.currentLmApp.runtimeUpdateAllowed));J(async()=>{A();const u=e.params.id,E=await Xe(u);l.value=E;const M=E.appId;await t.fetchApp(M),i.value=t.currentLmApp,window.ipcRenderer?.on(re.STOP_AI_RUNNING_INSTANCE,(ne,...Wt)=>{_(),C()}),$();const P=i?.value.name;document.title=P,I()});const A=()=>{const u={icon:"mdi-application-brackets-outline",text:g("AppRunningWindow.MainProcessTab"),tabName:"main-process",closable:!1,commandExecuteEndKeywords:["lmd start script end."]};r.initTerminal(u)},R=()=>{_(),V()},V=async()=>{if(s.value=!0,i.value){const u=await ft(i.value);b(u),window.ipcRenderer?.send(re.RUNNING_STATUS_CHANGE,!0)}},x=async()=>{if(i.value){const u=await gt(i.value);b(u)}},N=()=>{B()},v=()=>Array.isArray(o.value)?o.value[0]:o.value,b=u=>{const E=v();console.log("terminalComponent",E,u),E?.runCommand(u)},_=()=>{s.value=!1,F(),v()?.runStopCommand(),window.ipcRenderer.send(re.RUNNING_STATUS_CHANGE,!1)},C=()=>{v()?.exitTerminal()},B=async()=>{if(i.value){const u=await mt(i.value);b(u)}},U=(u,E)=>{r.removeTerminal(u,E)},F=()=>{h.value="--"},$=()=>{e.query.script===et.INSTALL&&B()},K=u=>{if(ee.isWindows())return;_();const E=pt(u);v()?.runCommand(E),V()},I=async()=>{if(ee.isWindows()&&W.needPreStartApp(l.value?.installName)){V();return}m.value=!0},d=()=>{m.value=!0},k=()=>{a.value?.updateAppEnvData()};return(u,E)=>(y(),L(Fe,null,{default:c(()=>[S(je,{elevation:"1",class:"px-2"},{prepend:c(()=>[S(Se,{src:f(i)?.icon,width:"60",height:"60"},null,8,["src"]),S(Ge,null,{default:c(()=>[T(w(f(i)?.name),1)]),_:1}),f(l)?.version&&f(l)?.version!=="--"?(y(),L(He,{key:0},{default:c(()=>[T(w(u.$t("AppRunningWindow.Version"))+" "+w(f(l)?.version),1)]),_:1})):z("",!0)]),append:c(()=>[we(S(O,{stacked:"",onClick:N},{prepend:c(()=>[S(Se,{src:"./images/icons/lmd-logo.png",size:"20",width:"25",height:"25"})]),default:c(()=>[T(" "+w(u.$t("AppRunningWindow.Install")),1)]),_:1},512),[[Ae,f(p)]]),we(S(O,{"prepend-icon":"mdi-autorenew",stacked:"",onClick:x},{default:c(()=>[T(w(u.$t("AppRunningWindow.Update")),1)]),_:1},512),[[Ae,f(p)]]),f(s)?(y(),L(O,{key:0,stacked:"","prepend-icon":"mdi-stop",onClick:E[0]||(E[0]=M=>_())},{default:c(()=>[T(w(u.$t("AppRunningWindow.Stop")),1)]),_:1})):(y(),L(O,{key:1,stacked:"","prepend-icon":"mdi-play",onClick:E[1]||(E[1]=M=>V())},{default:c(()=>[T(w(u.$t("AppRunningWindow.Start")),1)]),_:1})),f(s)?(y(),L(O,{key:2,stacked:"","prepend-icon":"mdi-refresh-circle",onClick:E[2]||(E[2]=M=>R())},{default:c(()=>[T(w(u.$t("AppRunningWindow.Restart")),1)]),_:1})):z("",!0),S(Vt,{installedInstance:f(l)},null,8,["installedInstance"])]),_:1}),S(Ye,{class:"mx-1 running-window-main mb-3"},{default:c(()=>[S(le,{fluid:"",class:"d-flex flex-column",style:{height:"100%"}},{default:c(()=>[f(l)&&f(i)&&f(m)?(y(),L(Pt,{key:0,ref_key:"appEnvAndAccessComponent",ref:a,onAppEnvSavedAndUpdated:K,lmAppData:f(i),installedInstance:f(l)},null,8,["lmAppData","installedInstance"])):z("",!0),S(qe,{class:"mx-2",modelValue:f(r).currentTerminalTab,"onUpdate:modelValue":E[3]||(E[3]=M=>f(r).currentTerminalTab=M),"align-tabs":"start",color:"primary"},{default:c(()=>[(y(!0),j(Y,null,te(f(r).terminals,(M,P)=>(y(),L(Ze,{value:M.tabName,key:M.tabName},{append:c(()=>[M.closable?(y(),L(Le,{key:0,icon:"mdi-close-circle-outline",onClick:Ce(ne=>U(M,P),["stop"])},null,8,["onClick"])):z("",!0)]),default:c(()=>[T(" "+w(M.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),S(Ke,{modelValue:f(r).currentTerminalTab,"onUpdate:modelValue":E[4]||(E[4]=M=>f(r).currentTerminalTab=M),class:"mx-2 my-0 px-0 pt-0 mb-0",style:{flex:"1","background-color":"black"}},{default:c(()=>[(y(!0),j(Y,null,te(f(r).terminals,(M,P)=>(y(),L(Je,{style:{flex:"1"},key:M.text,value:M.tabName,eager:""},{default:c(()=>[M.tabName==="main-process"?(y(),L(Ie,{key:0,onExecuteEnd:d,"command-execute-end-keywords":M.commandExecuteEndKeywords,ref_for:!0,ref_key:"generalTerminal",ref:o,socketURI:"ws://localhost:19312"},null,8,["command-execute-end-keywords"])):(y(),L(Ie,{key:1,onExecuteEnd:k,"command-execute-end-keywords":M.commandExecuteEndKeywords,initCommand:M.initCommand,socketURI:"ws://localhost:19312"},null,8,["command-execute-end-keywords","initCommand"]))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}});export{qt as default};
