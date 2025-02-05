import{a2 as F,d as Z,r as D,l as ee,ab as oe,o as N,n as te,a as ne,N as re,E as ae,a3 as ie,c as E,w,ac as le,b as R,V as G,z as S,f as ce,g as T,t as y,h as de,s as O,ad as H,ae as K,m as $,j as ue,af as pe,G as V,p as me,F as fe,ag as he,K as _e,T as ge}from"./index.js";import{u as ve}from"./lmapp.js";import{I as B}from"./IPCChannelName.js";import{a as we}from"./install-instance.js";import{A as be}from"./AppScriptType.js";function Ae(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var U={exports:{}},J;function ke(){return J||(J=1,function(p,b){(function(u,e){p.exports=e()})(self,()=>(()=>{var u={};return(()=>{var e=u;Object.defineProperty(e,"__esModule",{value:!0}),e.FitAddon=void 0,e.FitAddon=class{activate(a){this._terminal=a}dispose(){}fit(){const a=this.proposeDimensions();if(!a||!this._terminal||isNaN(a.cols)||isNaN(a.rows))return;const s=this._terminal._core;this._terminal.rows===a.rows&&this._terminal.cols===a.cols||(s._renderService.clear(),this._terminal.resize(a.cols,a.rows))}proposeDimensions(){if(!this._terminal||!this._terminal.element||!this._terminal.element.parentElement)return;const a=this._terminal._core,s=a._renderService.dimensions;if(s.css.cell.width===0||s.css.cell.height===0)return;const o=this._terminal.options.scrollback===0?0:a.viewport.scrollBarWidth,t=window.getComputedStyle(this._terminal.element.parentElement),g=parseInt(t.getPropertyValue("height")),m=Math.max(0,parseInt(t.getPropertyValue("width"))),d=window.getComputedStyle(this._terminal.element),n=g-(parseInt(d.getPropertyValue("padding-top"))+parseInt(d.getPropertyValue("padding-bottom"))),r=m-(parseInt(d.getPropertyValue("padding-right"))+parseInt(d.getPropertyValue("padding-left")))-o;return{cols:Math.max(2,Math.floor(r/s.css.cell.width)),rows:Math.max(1,Math.floor(n/s.css.cell.height))}}}})(),u})())}(U)),U.exports}var Ce=ke(),z={exports:{}},Q;function Se(){return Q||(Q=1,function(p,b){(function(u,e){p.exports=e()})(self,()=>(()=>{var u={};return(()=>{var e=u;function a(s,o,t){return s.addEventListener(o,t),{dispose:()=>{t&&s.removeEventListener(o,t)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.AttachAddon=void 0,e.AttachAddon=class{constructor(s,o){this._disposables=[],this._socket=s,this._socket.binaryType="arraybuffer",this._bidirectional=!(o&&o.bidirectional===!1)}activate(s){this._disposables.push(a(this._socket,"message",o=>{const t=o.data;s.write(typeof t=="string"?t:new Uint8Array(t))})),this._bidirectional&&(this._disposables.push(s.onData(o=>this._sendData(o))),this._disposables.push(s.onBinary(o=>this._sendBinary(o)))),this._disposables.push(a(this._socket,"close",()=>this.dispose())),this._disposables.push(a(this._socket,"error",()=>this.dispose()))}dispose(){for(const s of this._disposables)s.dispose()}_sendData(s){this._checkOpenSocket()&&this._socket.send(s)}_sendBinary(s){if(!this._checkOpenSocket())return;const o=new Uint8Array(s.length);for(let t=0;t<s.length;++t)o[t]=255&s.charCodeAt(t);this._socket.send(o)}_checkOpenSocket(){switch(this._socket.readyState){case WebSocket.OPEN:return!0;case WebSocket.CONNECTING:throw new Error("Attach addon was loaded before socket was open");case WebSocket.CLOSING:return console.warn("Attach addon socket is closing"),!1;case WebSocket.CLOSED:throw new Error("Attach addon socket is closed");default:throw new Error("Unexpected socket state")}}}})(),u})())}(z)),z.exports}var ye=Se(),j={exports:{}},X;function Le(){return X||(X=1,function(p,b){(function(u,e){p.exports=e()})(self,()=>(()=>{var u={6:(o,t)=>{function g(d){try{const n=new URL(d),r=n.password&&n.username?`${n.protocol}//${n.username}:${n.password}@${n.host}`:n.username?`${n.protocol}//${n.username}@${n.host}`:`${n.protocol}//${n.host}`;return d.toLocaleLowerCase().startsWith(r.toLocaleLowerCase())}catch{return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.LinkComputer=t.WebLinkProvider=void 0,t.WebLinkProvider=class{constructor(d,n,r,l={}){this._terminal=d,this._regex=n,this._handler=r,this._options=l}provideLinks(d,n){const r=m.computeLink(d,this._regex,this._terminal,this._handler);n(this._addCallbacks(r))}_addCallbacks(d){return d.map(n=>(n.leave=this._options.leave,n.hover=(r,l)=>{if(this._options.hover){const{range:f}=n;this._options.hover(r,l,f)}},n))}};class m{static computeLink(n,r,l,f){const L=new RegExp(r.source,(r.flags||"")+"g"),[v,h]=m._getWindowedLineStrings(n-1,l),C=v.join("");let A;const c=[];for(;A=L.exec(C);){const _=A[0];if(!g(_))continue;const[i,k]=m._mapStrIdx(l,h,0,A.index),[I,x]=m._mapStrIdx(l,i,k,_.length);if(i===-1||k===-1||I===-1||x===-1)continue;const W={start:{x:k+1,y:i+1},end:{x,y:I+1}};c.push({range:W,text:_,activate:f})}return c}static _getWindowedLineStrings(n,r){let l,f=n,L=n,v=0,h="";const C=[];if(l=r.buffer.active.getLine(n)){const A=l.translateToString(!0);if(l.isWrapped&&A[0]!==" "){for(v=0;(l=r.buffer.active.getLine(--f))&&v<2048&&(h=l.translateToString(!0),v+=h.length,C.push(h),l.isWrapped&&h.indexOf(" ")===-1););C.reverse()}for(C.push(A),v=0;(l=r.buffer.active.getLine(++L))&&l.isWrapped&&v<2048&&(h=l.translateToString(!0),v+=h.length,C.push(h),h.indexOf(" ")===-1););}return[C,f]}static _mapStrIdx(n,r,l,f){const L=n.buffer.active,v=L.getNullCell();let h=l;for(;f;){const C=L.getLine(r);if(!C)return[-1,-1];for(let A=h;A<C.length;++A){C.getCell(A,v);const c=v.getChars();if(v.getWidth()&&(f-=c.length||1,A===C.length-1&&c==="")){const _=L.getLine(r+1);_&&_.isWrapped&&(_.getCell(0,v),v.getWidth()===2&&(f+=1))}if(f<0)return[r,A]}r++,h=0}return[r,h]}}t.LinkComputer=m}},e={};function a(o){var t=e[o];if(t!==void 0)return t.exports;var g=e[o]={exports:{}};return u[o](g,g.exports,a),g.exports}var s={};return(()=>{var o=s;Object.defineProperty(o,"__esModule",{value:!0}),o.WebLinksAddon=void 0;const t=a(6),g=/(https?|HTTPS?):[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/;function m(d,n){const r=window.open();if(r){try{r.opener=null}catch{}r.location.href=n}else console.warn("Opening link blocked as opener could not be cleared")}o.WebLinksAddon=class{constructor(d=m,n={}){this._handler=d,this._options=n}activate(d){this._terminal=d;const n=this._options,r=n.urlRegex||g;this._linkProvider=this._terminal.registerLinkProvider(new t.WebLinkProvider(this._terminal,r,this._handler,n))}dispose(){this._linkProvider?.dispose()}}})(),s})())}(j)),j.exports}var Ie=Le(),M={exports:{}},Y;function xe(){if(Y)return M.exports;Y=1;function p(b,u=100,e={}){if(typeof b!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof b}\`.`);if(u<0)throw new RangeError("`wait` must not be negative.");const{immediate:a}=typeof e=="boolean"?{immediate:e}:e;let s,o,t,g,m;function d(){const l=s,f=o;return s=void 0,o=void 0,m=b.apply(l,f),m}function n(){const l=Date.now()-g;l<u&&l>=0?t=setTimeout(n,u-l):(t=void 0,a||(m=d()))}const r=function(...l){if(s&&this!==s&&Object.getPrototypeOf(this)===Object.getPrototypeOf(s))throw new Error("Debounced method called with different contexts of the same prototype.");s=this,o=l,g=Date.now();const f=a&&!t;return t||(t=setTimeout(n,u)),f&&(m=d()),m};return Object.defineProperty(r,"isPending",{get(){return t!==void 0}}),r.clear=()=>{t&&(clearTimeout(t),t=void 0)},r.flush=()=>{t&&r.trigger()},r.trigger=()=>{m=d(),r.clear()},r}return M.exports.debounce=p,M.exports=p,M.exports}var Re=xe();const Te=Ae(Re),De=()=>"",Ne=async p=>{const b=p.installName;return`
export LMD_BASE_INSTALL_SCRIPT_DIR="${(await F()).LMD_SCRIPTS_DIR}/lmd-install-scripts"
git clone --depth=1 https://gitee.com/lmdown/lmd-install-scripts $LMD_BASE_INSTALL_SCRIPT_DIR
#cd $LMD_BASE_INSTALL_SCRIPT_DIR && git fetch origin master && git reset --hard origin/master
sh $LMD_BASE_INSTALL_SCRIPT_DIR/apps/${b}/install.sh`},Ee=async p=>{const b=p.installName;return`
export LMD_BASE_INSTALL_SCRIPT_DIR="${(await F()).LMD_SCRIPTS_DIR}/lmd-install-scripts"
sh $LMD_BASE_INSTALL_SCRIPT_DIR/apps/${b}/start.sh`},Pe=async p=>{const b=p.installName;return`
export LMD_BASE_INSTALL_SCRIPT_DIR="${(await F()).LMD_SCRIPTS_DIR}/lmd-install-scripts"
sh $LMD_BASE_INSTALL_SCRIPT_DIR/apps/${b}/update.sh
`},$e=Z({__name:"index",props:{socketURI:{}},setup(p,{expose:b}){const u=p,e=D(null),a=D(null),s=D(null),o=D(null);let t;ee(()=>{L(),f()}),oe(()=>{e.value?.close(),a.value?.dispose(),t&&o.value&&(t.unobserve(o.value),t.disconnect())});const g=i=>{console.log("runCommand",i),console.log("runCommand socket.value",e.value),e.value?.send(i+`
`)};b({runCommand:g,runStopCommand:()=>{const i=De();g(i)},exitTerminal:()=>{g("exit")}});const n=()=>{if(!o.value||!e.value)return;const i=new window.Terminal({fontSize:14,cursorBlink:!0}),k=new ye.AttachAddon(e.value),I=new Ce.FitAddon,x=new Ie.WebLinksAddon((W,se)=>{var P=document.createElement("a");P.setAttribute("href",se),P.setAttribute("target","_blank"),P.setAttribute("id","lmdTempLink");const q=document.getElementById("lmdTempLink");q&&document.body.removeChild(q),document.body.appendChild(P),P.click()});i.loadAddon(k),i.loadAddon(I),i.loadAddon(x),i.open(o.value),I.fit(),i.focus(),a.value=i},l=Te(i=>{for(let k of i)_(k.contentRect.width,k.contentRect.height)},50),f=()=>{s.value&&(t=new ResizeObserver(l),t.observe(s.value))},L=()=>{e.value=new WebSocket(u.socketURI),h(),v(),C()},v=()=>{e.value&&(e.value.onopen=()=>{n()})},h=()=>{e.value&&(e.value.onclose=i=>{console.log("close socket",i)})},C=()=>{e.value&&(e.value.onerror=i=>{console.log("socket 链接失败",i)})},A=D(80),c=D(30),_=(i,k)=>{const I=Math.floor(i/8.5),x=Math.round(k/16);if(console.log("cols",i,I),console.log("rows",k,x),!(x===0||I===0)&&(A.value!==I||c.value!==x)){A.value=I,c.value=x,a.value?.resize(I,x);const W=`lmd_action:resize:${I},${x}`;e.value?.send(W)}};return(i,k)=>(N(),te("div",{ref_key:"terminalOutContainer",ref:s,class:"mb-2",style:{height:"100%",width:"100%"}},[ne("div",{ref_key:"terminalContainer",ref:o,class:"terminal",style:{height:"300px",width:"100%"}},null,512)],512))}}),We=["href"],ze=Z({__name:"AppRunningWindow",setup(p){const b=re(),u=ve(),e=D(null),a=D(null),s=D(),o=D(null),t=D(!1),g=D("--"),m=ae(()=>!(t.value&&!u.currentLmApp.runtimeUpdateAllowed));ee(async()=>{const c=b.params.id,_=await we(c);o.value=_;const i=_.appId;await u.fetchApp(i),e.value=u.currentLmApp,window.ipcRenderer?.on(B.STOP_AI_RUNNING_INSTANCE,(I,...x)=>{L(),v()}),a.value=await ie(),A();const k=e?.value.name;document.title=k});const d=()=>{L(),n()},n=async()=>{if(t.value=!0,e.value){const c=await Ee(e.value);f(c),window.ipcRenderer?.send(B.RUNNING_STATUS_CHANGE,!0)}},r=async()=>{if(e.value){const c=await Pe(e.value);f(c)}},l=()=>{h()},f=c=>{s.value?.runCommand(c)},L=()=>{t.value=!1,C(),s.value?.runStopCommand(),window.ipcRenderer.send(B.RUNNING_STATUS_CHANGE,!1)},v=()=>{s.value?.exitTerminal()},h=async()=>{if(e.value){const c=await Ne(e.value);f(c)}},C=()=>{g.value="--"},A=()=>{b.query.script===be.INSTALL&&h()};return(c,_)=>(N(),E(le,null,{default:w(()=>[R(ue,{elevation:"1",class:"px-2"},{prepend:w(()=>[R(G,{src:S(e)?.icon,width:"60",height:"60"},null,8,["src"]),R(ce,null,{default:w(()=>[T(y(S(e)?.name),1)]),_:1}),S(o)?.version&&S(o)?.version!=="--"?(N(),E(de,{key:0},{default:w(()=>[T(y(c.$t("AppRunningWindow.Version"))+" "+y(S(o)?.version),1)]),_:1})):O("",!0)]),append:w(()=>[H(R($,{stacked:"",onClick:l},{prepend:w(()=>[R(G,{src:"./images/icons/lmd-logo.png",size:"20",width:"25",height:"25"})]),default:w(()=>[T(" "+y(c.$t("AppRunningWindow.Install")),1)]),_:1},512),[[K,S(m)]]),H(R($,{"prepend-icon":"mdi-autorenew",stacked:"",onClick:r},{default:w(()=>[T(y(c.$t("AppRunningWindow.Update")),1)]),_:1},512),[[K,S(m)]]),S(t)?(N(),E($,{key:0,stacked:"","prepend-icon":"mdi-stop",onClick:_[0]||(_[0]=i=>L())},{default:w(()=>[T(y(c.$t("AppRunningWindow.Stop")),1)]),_:1})):(N(),E($,{key:1,stacked:"","prepend-icon":"mdi-play",onClick:_[1]||(_[1]=i=>n())},{default:w(()=>[T(y(c.$t("AppRunningWindow.Start")),1)]),_:1})),S(t)?(N(),E($,{key:2,stacked:"","prepend-icon":"mdi-refresh-circle",onClick:_[2]||(_[2]=i=>d())},{default:w(()=>[T(y(c.$t("AppRunningWindow.Restart")),1)]),_:1})):O("",!0)]),_:1}),R(he,{class:"mx-1"},{default:w(()=>[R(pe,{fluid:"",class:"d-flex flex-column",style:{height:"100%"}},{default:w(()=>[S(e)?.accessInfo&&S(e).accessInfo.accessType==="browser"?(N(),E(V,{key:0,class:"my-1 py-1"},{default:w(()=>[T(y(c.$t("AppRunningWindow.Access"))+": ",1),ne("a",{href:S(e).accessInfo?.webUrl||"",target:"_blank"},y(S(e).accessInfo.webUrl),9,We)]),_:1})):O("",!0),R(V,{class:"my-1 py-1"},{default:w(()=>[T(y(c.$t("AppRunningWindow.EnvVars"))+" ",1),S(a)?(N(!0),te(fe,{key:0},me(S(a),(i,k)=>(N(),E(_e,{variant:"tonal",size:"x-small",style:{"min-width":"50px","max-width":"120px","margin-left":"4px"},key:k},{default:w(()=>[T(y(k)+" ",1),R(ge,{activator:"parent",location:"bottom"},{default:w(()=>[T(y(i),1)]),_:2},1024)]),_:2},1024))),128)):O("",!0)]),_:1}),R(V,{class:"my-1 py-1"},{default:w(()=>[T(y(c.$t("AppRunningWindow.AppTerminal"))+": ",1)]),_:1}),R($e,{ref_key:"generalTerminal",ref:s,socketURI:"ws://localhost:19312"},null,512)]),_:1})]),_:1})]),_:1}))}});export{ze as default};
