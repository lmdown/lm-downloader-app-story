import{Z as mt,$ as pt,a0 as $t,a1 as it,d as vt,a2 as _t,K as gt,r as Mt,n as yt,o as nt,F as Dt,a as A,q as at,w as C,h as St,t as Z,c as ot,T as ut,G as wt,z as Yt,R as Tt,f as xt,I as kt,b as K,O as bt,a3 as Ot}from"./index.js";import{a as ft,d as Lt}from"./_commonjsHelpers.js";class Ft{static openAppRunningWindow(S,d){let p=mt.AppRunning.replace(":id",S);p=pt(p,{script:d}),window.ipcRenderer?.invoke($t.OPEN_RUNNING_WINDOW,S,p)}}var X={exports:{}},Ct=X.exports,lt;function ht(){return lt||(lt=1,function(O,S){(function(d,_){O.exports=_()})(Ct,function(){var d=1e3,_=6e4,p=36e5,y="millisecond",l="second",D="minute",g="hour",o="day",m="week",f="month",P="quarter",k="year",b="date",I="Invalid Date",F=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,U=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,z={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var r=["th","st","nd","rd"],t=a%100;return"["+a+(r[(t-20)%10]||r[t]||r[0])+"]"}},E=function(a,r,t){var n=String(a);return!n||n.length>=r?a:""+Array(r+1-n.length).join(t)+a},H={s:E,z:function(a){var r=-a.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+E(n,2,"0")+":"+E(e,2,"0")},m:function a(r,t){if(r.date()<t.date())return-a(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(n,f),s=t-e<0,i=r.clone().add(n+(s?-1:1),f);return+(-(n+(t-e)/(s?e-i:i-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:f,y:k,w:m,d:o,D:b,h:g,m:D,s:l,ms:y,Q:P}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},w="en",Y={};Y[w]=z;var R="$isDayjsObject",N=function(a){return a instanceof G||!(!a||!a[R])},J=function a(r,t,n){var e;if(!r)return w;if(typeof r=="string"){var s=r.toLowerCase();Y[s]&&(e=s),t&&(Y[s]=t,e=s);var i=r.split("-");if(!e&&i.length>1)return a(i[0])}else{var c=r.name;Y[c]=r,e=c}return!n&&e&&(w=e),e||!n&&w},$=function(a,r){if(N(a))return a.clone();var t=typeof r=="object"?r:{};return t.date=a,t.args=arguments,new G(t)},u=H;u.l=J,u.i=N,u.w=function(a,r){return $(a,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var G=function(){function a(t){this.$L=J(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[R]=!0}var r=a.prototype;return r.parse=function(t){this.$d=function(n){var e=n.date,s=n.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var i=e.match(F);if(i){var c=i[2]-1||0,h=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)):new Date(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return u},r.isValid=function(){return this.$d.toString()!==I},r.isSame=function(t,n){var e=$(t);return this.startOf(n)<=e&&e<=this.endOf(n)},r.isAfter=function(t,n){return $(t)<this.startOf(n)},r.isBefore=function(t,n){return this.endOf(n)<$(t)},r.$g=function(t,n,e){return u.u(t)?this[n]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,n){var e=this,s=!!u.u(n)||n,i=u.p(t),c=function(j,T){var L=u.w(e.$u?Date.UTC(e.$y,T,j):new Date(e.$y,T,j),e);return s?L:L.endOf(o)},h=function(j,T){return u.w(e.toDate()[j].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(T)),e)},v=this.$W,M=this.$M,x=this.$D,W="set"+(this.$u?"UTC":"");switch(i){case k:return s?c(1,0):c(31,11);case f:return s?c(1,M):c(0,M+1);case m:var V=this.$locale().weekStart||0,q=(v<V?v+7:v)-V;return c(s?x-q:x+(6-q),M);case o:case b:return h(W+"Hours",0);case g:return h(W+"Minutes",1);case D:return h(W+"Seconds",2);case l:return h(W+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,n){var e,s=u.p(t),i="set"+(this.$u?"UTC":""),c=(e={},e[o]=i+"Date",e[b]=i+"Date",e[f]=i+"Month",e[k]=i+"FullYear",e[g]=i+"Hours",e[D]=i+"Minutes",e[l]=i+"Seconds",e[y]=i+"Milliseconds",e)[s],h=s===o?this.$D+(n-this.$W):n;if(s===f||s===k){var v=this.clone().set(b,1);v.$d[c](h),v.init(),this.$d=v.set(b,Math.min(this.$D,v.daysInMonth())).$d}else c&&this.$d[c](h);return this.init(),this},r.set=function(t,n){return this.clone().$set(t,n)},r.get=function(t){return this[u.p(t)]()},r.add=function(t,n){var e,s=this;t=Number(t);var i=u.p(n),c=function(M){var x=$(s);return u.w(x.date(x.date()+Math.round(M*t)),s)};if(i===f)return this.set(f,this.$M+t);if(i===k)return this.set(k,this.$y+t);if(i===o)return c(1);if(i===m)return c(7);var h=(e={},e[D]=_,e[g]=p,e[l]=d,e)[i]||1,v=this.$d.getTime()+t*h;return u.w(v,this)},r.subtract=function(t,n){return this.add(-1*t,n)},r.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||I;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),c=this.$H,h=this.$m,v=this.$M,M=e.weekdays,x=e.months,W=e.meridiem,V=function(T,L,B,Q){return T&&(T[L]||T(n,s))||B[L].slice(0,Q)},q=function(T){return u.s(c%12||12,T,"0")},j=W||function(T,L,B){var Q=T<12?"AM":"PM";return B?Q.toLowerCase():Q};return s.replace(U,function(T,L){return L||function(B){switch(B){case"YY":return String(n.$y).slice(-2);case"YYYY":return u.s(n.$y,4,"0");case"M":return v+1;case"MM":return u.s(v+1,2,"0");case"MMM":return V(e.monthsShort,v,x,3);case"MMMM":return V(x,v);case"D":return n.$D;case"DD":return u.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return V(e.weekdaysMin,n.$W,M,2);case"ddd":return V(e.weekdaysShort,n.$W,M,3);case"dddd":return M[n.$W];case"H":return String(c);case"HH":return u.s(c,2,"0");case"h":return q(1);case"hh":return q(2);case"a":return j(c,h,!0);case"A":return j(c,h,!1);case"m":return String(h);case"mm":return u.s(h,2,"0");case"s":return String(n.$s);case"ss":return u.s(n.$s,2,"0");case"SSS":return u.s(n.$ms,3,"0");case"Z":return i}return null}(T)||i.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,n,e){var s,i=this,c=u.p(n),h=$(t),v=(h.utcOffset()-this.utcOffset())*_,M=this-h,x=function(){return u.m(i,h)};switch(c){case k:s=x()/12;break;case f:s=x();break;case P:s=x()/3;break;case m:s=(M-v)/6048e5;break;case o:s=(M-v)/864e5;break;case g:s=M/p;break;case D:s=M/_;break;case l:s=M/d;break;default:s=M}return e?s:u.a(s)},r.daysInMonth=function(){return this.endOf(f).$D},r.$locale=function(){return Y[this.$L]},r.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),s=J(t,n,!0);return s&&(e.$L=s),e},r.clone=function(){return u.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},a}(),st=G.prototype;return $.prototype=st,[["$ms",y],["$s",l],["$m",D],["$H",g],["$W",o],["$M",f],["$y",k],["$D",b]].forEach(function(a){st[a[1]]=function(r){return this.$g(r,a[0],a[1])}}),$.extend=function(a,r){return a.$i||(a(r,G,$),a.$i=!0),$},$.locale=J,$.isDayjs=N,$.unix=function(a){return $(1e3*a)},$.en=Y[w],$.Ls=Y,$.p={},$})}(X)),X.exports}var It=ht();const tt=ft(It);var et={exports:{}},Ht=et.exports,ct;function Nt(){return ct||(ct=1,function(O,S){(function(d,_){O.exports=_(ht())})(Ht,function(d){function _(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var p=_(d),y={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(l,D){return D==="W"?l+"周":l+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(l,D){var g=100*l+D;return g<600?"凌晨":g<900?"早上":g<1100?"上午":g<1300?"中午":g<1800?"下午":"晚上"}};return p.default.locale(y,null,!0),y})}(et)),et.exports}Nt();var rt={exports:{}},Vt=rt.exports,dt;function jt(){return dt||(dt=1,function(O,S){(function(d,_){O.exports=_()})(Vt,function(){return function(d,_,p){d=d||{};var y=_.prototype,l={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function D(o,m,f,P){return y.fromToBase(o,m,f,P)}p.en.relativeTime=l,y.fromToBase=function(o,m,f,P,k){for(var b,I,F,U=f.$locale().relativeTime||l,z=d.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],E=z.length,H=0;H<E;H+=1){var w=z[H];w.d&&(b=P?p(o).diff(f,w.d,!0):f.diff(o,w.d,!0));var Y=(d.rounding||Math.round)(Math.abs(b));if(F=b>0,Y<=w.r||!w.r){Y<=1&&H>0&&(w=z[H-1]);var R=U[w.l];k&&(Y=k(""+Y)),I=typeof R=="string"?R.replace("%d",Y):R(Y,m,w.l,F);break}}if(m)return I;var N=F?U.future:U.past;return typeof N=="function"?N(I):N.replace("%s",I)},y.to=function(o,m){return D(o,m,this,!0)},y.from=function(o,m){return D(o,m,this)};var g=function(o){return o.$u?p.utc():p()};y.toNow=function(o){return this.to(g(this),o)},y.fromNow=function(o){return this.from(g(this),o)}}})}(rt)),rt.exports}var At=jt();const Pt=ft(At);tt.extend(Pt);class Ut{static getLocaleStr(){const S=it.getCurrentLocale();return{en:"en-US",zhHans:"zh-CN"}[S]||"en-US"}static format(S){if(S===void 0)return"";let d;return typeof S=="string"?d=new Date(S):d=S,it.localeIsEn()?tt.locale("en"):tt.locale("zh-cn"),tt(d).fromNow()}}const zt=vt({__name:"storage-simple-btn",props:{installedInstance:{}},emits:["deleted"],setup(O,{emit:S}){const d=_t("showToastMessage"),{t:_}=gt(),p=O,y=S,l=Mt(!1),D=async()=>{try{await Lt(p.installedInstance.id),d&&d(_("StorageDialog.DeleteFinished"),"success"),y("deleted"),l.value=!1}catch(o){const m=o;let f="Error";f=m.response?.data?.error,d&&f&&d(_(`Api.${f}`),"error")}},g=()=>{p.installedInstance.appInstallPath?Ot(p.installedInstance.appInstallPath):l.value=!0};return(o,m)=>(nt(),yt(Dt,null,[A(at,{variant:"flat",color:"amber-lighten-5",onClick:g},{prepend:C(()=>[p.installedInstance.appInstallPath?(nt(),ot(ut,{key:1,icon:"mdi-folder-outline"})):(nt(),ot(ut,{key:0,color:"error",icon:"mdi-folder-alert-outline"}))]),default:C(()=>[St(" "+Z(o.$t("StorageDialog.installDir")),1)]),_:1}),A(wt,{modelValue:Yt(l),"onUpdate:modelValue":m[1]||(m[1]=f=>Tt(l)?l.value=f:null),"max-width":"400"},{default:C(()=>[A(xt,{"prepend-icon":"mdi-folder-alert-outline",title:o.$t("StorageDialog.MissingFiles")},{actions:C(()=>[A(bt),A(at,{onClick:m[0]||(m[0]=f=>l.value=!1)},{default:C(()=>[K("p",null,Z(o.$t("StorageDialog.Cancel")),1)]),_:1}),A(at,{color:"error",onClick:D},{default:C(()=>[K("p",null,Z(o.$t("StorageDialog.Delete")),1)]),_:1})]),default:C(()=>[A(kt,null,{default:C(()=>[K("p",null,Z(o.$t("StorageDialog.FilesErrorTip")),1),K("p",null,Z(o.$t("StorageDialog.FilesDeleteTip")),1)]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])],64))}});export{Ft as A,Ut as D,zt as _};
