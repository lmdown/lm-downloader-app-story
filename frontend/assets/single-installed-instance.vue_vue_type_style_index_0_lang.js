import{e as t,c as a,a2 as e,a8 as n,a3 as s,ac as r,a4 as i,a6 as l,a5 as o,j as p,Q as d,V as c,m,u,U as f}from"./vue.js";import{b as h,c as _,I as y,L as v,r as D,A as g,o as Y}from"./index.js";import{g as M}from"./xterm.js";import{r as x}from"./dayjs.js";import{C as L,D as A,z as w,b as I,A as b,B as k,d as S,E as C}from"./vuetify.js";class N{static openAppRunningWindow(t,a){let e=h.AppRunning.replace(":id",t);e=_(e,{script:a}),window.ipcRenderer?.invoke(y.OPEN_RUNNING_WINDOW,t,e)}}const H=M(x());var V,j={exports:{}};V||(V=1,j.exports=function(t){function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=a(t),n={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,a){return"W"===a?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,a){var e=100*t+a;return e<600?"凌晨":e<900?"早上":e<1100?"上午":e<1300?"中午":e<1800?"下午":"晚上"}};return e.default.locale(n,null,!0),n}(x()));var T,B={exports:{}};const R=M(T?B.exports:(T=1,B.exports=function(t,a,e){t=t||{};var n=a.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(t,a,e,s){return n.fromToBase(t,a,e,s)}e.en.relativeTime=s,n.fromToBase=function(a,n,r,i,l){for(var o,p,d,c=r.$locale().relativeTime||s,m=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],u=m.length,f=0;f<u;f+=1){var h=m[f];h.d&&(o=i?e(a).diff(r,h.d,!0):r.diff(a,h.d,!0));var _=(t.rounding||Math.round)(Math.abs(o));if(d=o>0,_<=h.r||!h.r){_<=1&&f>0&&(h=m[f-1]);var y=c[h.l];l&&(_=l(""+_)),p="string"==typeof y?y.replace("%d",_):y(_,n,h.l,d);break}}if(n)return p;var v=d?c.future:c.past;return"function"==typeof v?v(p):v.replace("%s",p)},n.to=function(t,a){return r(t,a,this,!0)},n.from=function(t,a){return r(t,a,this)};var i=function(t){return t.$u?e.utc():e()};n.toNow=function(t){return this.to(i(this),t)},n.fromNow=function(t){return this.from(i(this),t)}}));H.extend(R);class U{static getLocaleStr(){return{en:"en-US",zhHans:"zh-CN"}[v.getCurrentLocale()]||"en-US"}static format(t){if(void 0===t)return"";let a;return a="string"==typeof t?new Date(t):t,v.localeIsEn()?H.locale("en"):H.locale("zh-cn"),H(a).fromNow()}}const $={style:{flex:"1"}},z={key:1,class:"small-title-for-version"},P={class:"app-info-item align-center"},W={class:"mx-1"},E={style:{flex:"1"},class:"text-left mx-1"},O={class:"app-info-item align-center"},G={class:"mx-1"},Q=t({__name:"single-installed-instance",props:{appNameVisible:{type:Boolean},iconVisible:{type:Boolean},appVersionVisible:{type:Boolean},appIconUrl:{},cardColorStyleClass:{},instanceData:{}},emits:["deleted","refresh"],setup(t,{emit:h}){const{t:_}=L(),y=t;a((()=>{const t={};if(!y.instanceData)return null;return"import"===y.instanceData.installMethod?(t.type="icon",t.value="mdi-application-import",t.installMethodStr=_("InstalledApps.Imported")):(t.type="img",t.value="./images/icons/lmd-logo.png",t.installMethodStr=_("InstalledApps.InstalledByLMD")),t}));const v=()=>{console.log("gotoDetailPage",y.instanceData.appId);D.currentRoute.value.name!==g.AppDetail&&D.push({name:g.AppDetail,params:{id:y.instanceData.appId}})},M=()=>{y.instanceData.appInstallPath&&Y(y.instanceData.appInstallPath)};return(t,a)=>t.instanceData?(s(),e(A,{key:0,class:r(["single-instance-card","rounded-lg",t.cardColorStyleClass||"instance-card-default"]),style:""},{default:i((()=>[t.iconVisible&&t.appIconUrl?(s(),e(w,{key:0,style:{display:"flex"}},{default:i((()=>[o("div",null,[p(I,{width:"68",height:"68",cover:"",style:{"border-radius":"8px",cursor:"pointer"},onClick:v,alt:t.instanceData.name,src:t.appIconUrl},null,8,["alt","src"])]),o("div",$,[t.appNameVisible?(s(),e(b,{key:0,onClick:v,style:{"font-size":"1.125rem","font-weight":"bold",color:"rgba(0,0,0,0.75)"}},{default:i((()=>[d(c(t.instanceData.name),1)])),_:1})):n("",!0),p(k,null,{default:i((()=>[d(c(t.$t("LMAppDetail.version"))+" "+c(t.instanceData.version),1)])),_:1})])])),_:1})):n("",!0),t.appVersionVisible?(s(),l("div",z,c(t.$t("LMAppDetail.version"))+" "+c(t.instanceData.version),1)):n("",!0),o("div",P,[p(S,{text:t.$t("LMAppDetail.installedAt"),location:"top"},{activator:i((({props:t})=>[o("div",W,[p(I,m({width:"1.8rem",height:"1.8rem"},t,{src:"./images/app/install-time-gray.png"}),null,16)])])),_:1},8,["text"]),o("div",E,c(u(U).format(t.instanceData.createTime)),1)]),o("div",O,[o("div",G,[p(I,{width:"1.8rem",height:"1.8rem",src:"./images/app/model-dir-gray.png"})]),o("a",{href:"#",style:{flex:"1"},class:"text-left mx-1",onClick:f(M,["prevent"])},[d(c(t.$t("LMAppDetail.appDirectory"))+" > ",1),p(S,{activator:"parent",location:"top"},{default:i((()=>[d(c(t.instanceData.appInstallPath),1)])),_:1})])]),p(C,{class:"mt-6"}),o("a",{href:"#",variant:"flat",class:"control-btn",onClick:a[0]||(a[0]=f((a=>{return e=t.instanceData.id,void N.openAppRunningWindow(e,"start");var e}),["prevent"]))},c(t.$t("LMAppDetail.RunApp")),1)])),_:1},8,["class"])):n("",!0)}});export{N as A,Q as _};
