import{e,b as t,r as o,c as l,o as a,G as n,x as r,j as i,M as s,l as c,U as d,i as u,F as p,v as b}from"./vue.js";function v(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&l.firstChild?l.insertBefore(a,l.firstChild):l.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}v(".vel-fade-enter-active,.vel-fade-leave-active{-webkit-transition:all .3s ease;transition:all .3s ease}.vel-fade-enter-from,.vel-fade-leave-to{opacity:0}.vel-img-swiper{display:block;position:relative}.vel-modal{background:rgba(0,0,0,.5);bottom:0;left:0;margin:0;position:fixed;right:0;top:0;z-index:9998}.vel-img-wrapper{left:50%;margin:0;position:absolute;top:50%;-webkit-transform:translate(-50% -50%);transform:translate(-50% -50%);-webkit-transition:.3s linear;transition:.3s linear;will-change:transform opacity}.vel-img,.vel-img-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-img{background-color:rgba(0,0,0,.7);-webkit-box-shadow:0 5px 20px 2px rgba(0,0,0,.7);box-shadow:0 5px 20px 2px rgba(0,0,0,.7);display:block;max-height:80vh;max-width:80vw;position:relative;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}@media (max-width:750px){.vel-img{max-height:95vh;max-width:85vw}}.vel-btns-wrapper{position:static}.vel-btns-wrapper .btn__close,.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;font-size:32px;opacity:.6;outline:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.15s linear;transition:.15s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-btns-wrapper .btn__close:hover,.vel-btns-wrapper .btn__next:hover,.vel-btns-wrapper .btn__prev:hover{opacity:1}.vel-btns-wrapper .btn__close.disable,.vel-btns-wrapper .btn__close.disable:hover,.vel-btns-wrapper .btn__next.disable,.vel-btns-wrapper .btn__next.disable:hover,.vel-btns-wrapper .btn__prev.disable,.vel-btns-wrapper .btn__prev.disable:hover{cursor:default;opacity:.2}.vel-btns-wrapper .btn__next{right:12px}.vel-btns-wrapper .btn__prev{left:12px}.vel-btns-wrapper .btn__close{right:10px;top:24px}@media (max-width:750px){.vel-btns-wrapper .btn__next,.vel-btns-wrapper .btn__prev{font-size:20px}.vel-btns-wrapper .btn__close{font-size:24px}.vel-btns-wrapper .btn__next{right:4px}.vel-btns-wrapper .btn__prev{left:4px}}.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:12px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:12px}@media (max-width:750px){.vel-modal.is-rtl .vel-btns-wrapper .btn__next{left:4px;right:auto}.vel-modal.is-rtl .vel-btns-wrapper .btn__prev{left:auto;right:4px}}.vel-modal.is-rtl .vel-img-title{direction:rtl}"),v('.vel-loading{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-loading .ring{display:inline-block;height:64px;width:64px}.vel-loading .ring:after{-webkit-animation:ring 1.2s linear infinite;animation:ring 1.2s linear infinite;border-color:hsla(0,0%,100%,.7) transparent;border-radius:50%;border-style:solid;border-width:5px;content:" ";display:block;height:46px;margin:1px;width:46px}@-webkit-keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}'),v(".vel-on-error{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vel-on-error .icon{color:#aaa;font-size:80px}"),v(".vel-img-title{bottom:60px;color:#ccc;cursor:default;font-size:12px;left:50%;line-height:1;max-width:80%;opacity:.8;overflow:hidden;position:absolute;text-align:center;text-overflow:ellipsis;-webkit-transform:translate(-50%);transform:translate(-50%);-webkit-transition:opacity .15s;transition:opacity .15s;white-space:nowrap}.vel-img-title:hover{opacity:1}"),v(".vel-icon{fill:currentColor;height:1em;overflow:hidden;vertical-align:-.15em;width:1em}"),v(".vel-toolbar{border-radius:4px;bottom:8px;display:-webkit-box;display:-ms-flexbox;display:flex;left:50%;opacity:.9;overflow:hidden;padding:0;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%)}.vel-toolbar,.vel-toolbar .toolbar-btn{background-color:#2d2d2d;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vel-toolbar .toolbar-btn{-ms-flex-negative:0;-webkit-tap-highlight-color:transparent;color:#fff;cursor:pointer;flex-shrink:0;font-size:20px;outline:none;padding:6px 10px}.vel-toolbar .toolbar-btn:active,.vel-toolbar .toolbar-btn:hover{background-color:#3d3d3d}");const m="vel",g=e({name:"SvgIcon",props:{type:{type:String,default:""}},setup:e=>()=>i("svg",{class:`${m}-icon icon`,"aria-hidden":"true"},[i("use",{"xlink:href":`#icon-${e.type}`},null)])}),f="undefined"!=typeof window,h=()=>{};let w=!1;if(f)try{const e={};Object.defineProperty(e,"passive",{get(){w=!0}}),window.addEventListener("test-passive",h,e)}catch(R){}const x=function(e,t,o){let l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];f&&e.addEventListener(t,o,!!w&&{capture:!1,passive:l})},y=(e,t,o)=>{f&&e.removeEventListener(t,o)},z=e=>{e.preventDefault()},k=Object.prototype.toString,_=e=>t=>k.call(t).slice(8,-1)===e,D=e=>!!e&&_("String")(e);function M(e){return null!=e}const S=e({name:"Toolbar",props:{zoomIn:{type:Function,default:h},zoomOut:{type:Function,default:h},rotateLeft:{type:Function,default:h},rotateRight:{type:Function,default:h},resize:{type:Function,default:h},rotateDisabled:{type:Boolean,default:!1},zoomDisabled:{type:Boolean,default:!1}},setup:e=>()=>i("div",{class:`${m}-toolbar`},[!e.zoomDisabled&&i(p,null,[i("div",{role:"button","aria-label":"zoom in button",class:"toolbar-btn toolbar-btn__zoomin",onClick:e.zoomIn},[i(g,{type:"zoomin"},null)]),i("div",{role:"button","aria-label":"zoom out button",class:"toolbar-btn toolbar-btn__zoomout",onClick:e.zoomOut},[i(g,{type:"zoomout"},null)])]),i("div",{role:"button","aria-label":"resize image button",class:"toolbar-btn toolbar-btn__resize",onClick:e.resize},[i(g,{type:"resize"},null)]),!e.rotateDisabled&&i(p,null,[i("div",{role:"button","aria-label":"image rotate left button",class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateLeft},[i(g,{type:"rotate-left"},null)]),i("div",{role:"button","aria-label":"image rotate right button",class:"toolbar-btn toolbar-btn__rotate",onClick:e.rotateRight},[i(g,{type:"rotate-right"},null)])])])}),L=()=>i("div",{class:`${m}-loading`},[i("div",{class:"ring"},null)]),C=()=>i("div",{class:`${m}-on-error`},[i("div",{class:"ring"},null),i(g,{type:"img-broken"},null)]),Y=(e,t)=>{let{slots:o}=t;return i("div",{class:`${m}-img-title`},[o.default?o.default():""])},B=e({name:"DefaultIcons",setup:()=>()=>i("svg",{"aria-hidden":!0,style:"position: absolute; width: 0; height: 0; overflow: hidden; visibility: hidden;"},[i("symbol",{id:"icon-rotate-right",viewBox:"0 0 1024 1024"},[i("path",{d:"M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973z m282.559912-479.07185A509.887841 509.887841 0 0 0 511.99984 0.00032C229.215928 0.00032 0 229.216248 0 512.00016s229.215928 511.99984 511.99984 511.99984 511.99984-229.215928 511.99984-511.99984c0-3.743999-0.032-7.455998-0.128-11.167997-1.631999-11.295996-8.159997-27.103992-31.87199-27.103991-27.487991 0-31.67999 21.247993-32.03199 32.06399l0.032 4.127999a30.62399 30.62399 0 0 0 0.16 2.079999H959.9997c0 247.423923-200.575937 447.99986-447.99986 447.99986S63.99998 759.424083 63.99998 512.00016 264.575917 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 1 277.439913 96.22397l-94.91197 91.679971c-25.439992 24.607992-17.439995 44.991986 17.887994 45.599986l188.031942 3.295999a64.31998 64.31998 0 0 0 65.055979-62.84798l3.295999-188.127942C969.407697 15.040315 949.311703 5.792318 923.871711 30.368311l-87.999972 85.023973z",fill:""},null)]),i("symbol",{id:"icon-rotate-left",viewBox:"0 0 1024 1024"},[i("path",{d:"M275.199914 450.496179v20.031994c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399a120.255962 120.255962 0 0 1-72.991978-24.895992c-21.503993-15.839995-35.359989-38.751988-41.567987-68.735979h60.831981c9.247997 23.007993 27.167992 34.495989 53.759983 34.49599 37.535988-0.384 56.863982-21.407993 57.983982-63.071981v-38.751988c-28.095991 8.863997-54.303983 13.119996-78.623975 12.735996a91.263971 91.263971 0 0 1-68.447979-27.711991c-18.847994-18.303994-28.095991-47.231985-27.711991-86.847973z m62.55998 24.863992c7.103998 24.799992 25.215992 37.343988 54.271983 37.663989 27.103992-0.288 44.703986-11.327996 52.831984-33.11999 3.135999-8.383997 2.655999-29.599991-1.28-38.559988-8.607997-19.615994-25.791992-29.695991-51.551984-30.20799-28.383991 0.576-46.303986 12.639996-53.759983 36.159988a58.719982 58.719982 0 0 0-0.512 28.063991z m390.335878 115.711964v-116.895963c-1.12-41.311987-20.447994-62.335981-57.983981-63.07198-37.727988 0.768-56.959982 21.791993-57.695982 63.07198v116.895963c0.768 41.663987 19.999994 62.68798 57.695982 63.071981 37.535988-0.384 56.863982-21.407993 57.983981-63.071981z m-174.815945 3.391999v-123.935961c0.384-38.079988 12.543996-67.423979 36.479989-87.967973 22.431993-20.351994 49.215985-30.55999 80.319975-30.55999 32.06399 0 59.295981 10.175997 81.759974 30.55999 22.815993 20.543994 34.591989 49.887984 35.359989 87.967973v123.935961c-0.768 37.887988-12.543996 67.135979-35.359989 87.679973-22.431993 20.351994-49.695984 30.75199-81.759974 31.10399-31.10399-0.384-57.887982-10.751997-80.319975-31.10399-23.935993-20.543994-36.127989-49.791984-36.479989-87.679973zM188.159941 115.392284A509.887841 509.887841 0 0 1 511.99984 0.00032c282.783912 0 511.99984 229.215928 511.99984 511.99984s-229.215928 511.99984-511.99984 511.99984S0 794.784072 0 512.00016c0-3.743999 0.032-7.455998 0.128-11.167997 1.631999-11.295996 8.159997-27.103992 31.87199-27.103991 27.487991 0 31.67999 21.247993 32.03199 32.06399L63.99998 509.920161a30.62399 30.62399 0 0 1-0.16 2.079999H63.99998c0 247.423923 200.575937 447.99986 447.99986 447.99986s447.99986-200.575937 447.99986-447.99986S759.423763 64.0003 511.99984 64.0003a446.079861 446.079861 0 0 0-277.439913 96.22397l94.91197 91.679971c25.439992 24.607992 17.439995 44.991986-17.887994 45.599986L123.551961 300.800226a64.31998 64.31998 0 0 1-65.055979-62.84798l-3.295999-188.127942C54.591983 15.040315 74.687977 5.792318 100.127969 30.368311l87.999972 85.023973z",fill:""},null)]),i("symbol",{id:"icon-resize",viewBox:"0 0 1024 1024"},[i("path",{d:"M456.036919 791.8108 270.553461 791.8108 460.818829 601.572038l-39.593763-39.567157L231.314785 751.915162l0.873903-183.953615c0-15.465227-12.515035-27.981285-27.981285-27.981285s-27.981285 12.515035-27.981285 27.981285l0 251.829516c0 8.3072 3.415796 14.975063 8.826016 19.564591 5.082762 5.192256 12.132318 8.416693 19.947308 8.416693l251.036453 0c15.46625 0 27.981285-12.514012 27.981285-27.981285C484.018204 804.325835 471.504192 791.8108 456.036919 791.8108zM838.945819 184.644347c-5.082762-5.191232-12.132318-8.416693-19.947308-8.416693L567.961034 176.227654c-15.46625 0-27.981285 12.515035-27.981285 27.981285 0 15.46625 12.514012 27.981285 27.981285 27.981285l185.483458 0L563.206754 422.427962l39.567157 39.567157 189.910281-189.910281-0.873903 183.953615c0 15.46625 12.514012 27.981285 27.981285 27.981285s27.981285-12.514012 27.981285-27.981285L847.772858 204.208938C847.771835 195.902762 844.356039 189.234899 838.945819 184.644347zM847.771835 64.303538 176.227142 64.303538c-61.809741 0-111.924115 50.115398-111.924115 111.924115l0 671.544693c0 61.809741 50.114374 111.924115 111.924115 111.924115l671.544693 0c61.809741 0 111.924115-50.114374 111.924115-111.924115l0-671.544693C959.69595 114.418936 909.581576 64.303538 847.771835 64.303538zM903.733381 847.772346c0 30.878265-25.056676 55.962569-55.962569 55.962569L176.227142 903.734916c-30.90487 0-55.962569-25.084305-55.962569-55.962569l0-671.544693c0-30.9325 25.056676-55.962569 55.962569-55.962569l671.544693 0c30.90487 0 55.962569 25.03007 55.962569 55.962569L903.734404 847.772346z"},null)]),i("symbol",{id:"icon-img-broken",viewBox:"0 0 1024 1024"},[i("path",{d:"M810.666667 128H213.333333c-46.933333 0-85.333333 38.4-85.333333 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333333 85.333333h597.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V213.333333c0-46.933333-38.4-85.333333-85.333333-85.333333z m0 682.666667H213.333333v-195.413334l42.24 42.24 170.666667-170.666666 170.666667 170.666666 170.666666-170.24L810.666667 530.346667V810.666667z m0-401.493334l-43.093334-43.093333-170.666666 171.093333-170.666667-170.666666-170.666667 170.666666-42.24-42.666666V213.333333h597.333334v195.84z"},null)]),i("symbol",{id:"icon-prev",viewBox:"0 0 1024 1024"},[i("path",{d:"M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"},null)]),i("symbol",{id:"icon-next",viewBox:"0 0 1024 1024"},[i("path",{d:"M246.121279 955.6957l438.050717-438.050717c2.822492-2.822492 2.822492-7.902977 0-11.289967L244.992282 67.175303c-6.77398-6.77398-10.725469-16.370452-10.725469-25.966924L234.266814 36.692393C234.266814 16.370452 250.637266 0 270.959206 0l4.515987 0c9.596472 0 19.192944 3.951488 25.966924 10.725469l478.694598 478.694598c12.418964 12.418964 12.418964 32.740904 0 45.159868l-477.565601 477.565601c-7.338479 7.338479-17.499449 11.854465-28.224917 11.854465l0 0c-22.015436 0-40.079383-18.063947-40.079383-40.079383l0 0C234.266814 973.759647 238.7828 963.598677 246.121279 955.6957z"},null)]),i("symbol",{id:"icon-zoomin",viewBox:"0 0 1024 1024"},[i("path",{d:"M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"},null),i("path",{d:"M235.712 369.92h390.72v127.104H235.712z"},null),i("path",{d:"M367.488 238.144h127.104v390.72H367.488z"},null)]),i("symbol",{id:"icon-close",viewBox:"0 0 1024 1024"},[i("path",{d:"M570.24 512l259.2 259.2-58.88 58.24L512 570.24l-261.12 261.12-58.24-58.24L453.76 512 194.56 252.8l58.24-58.24L512 453.76l261.12-261.12 58.24 58.24z"},null)]),i("symbol",{id:"icon-zoomout",viewBox:"0 0 1024 1024"},[i("path",{d:"M725.504 652.864c46.4-61.44 71.744-136.448 71.744-218.752C797.248 230.464 632.768 64 430.656 64S64 230.464 64 434.112C64 639.36 228.48 805.76 430.656 805.76c86.656 0 164.48-30.144 227.52-81.088L889.984 960 960 891.264l-234.496-238.4z m-294.848 67.456c-155.776 0-282.624-128.896-282.624-286.208s126.848-286.208 282.624-286.208 282.624 128.896 282.624 286.208-126.912 286.208-282.624 286.208z"},null),i("path",{d:"M235.712 369.92h390.72v127.104H235.712z"},null)])])}),X=f?window:global;let T=Date.now();function E(e){const t=Date.now(),o=Math.max(0,16-(t-T)),l=setTimeout(e,o);return T=t+o,l}function $(e){return(X.requestAnimationFrame||E).call(X,e)}function O(e){(X.cancelAnimationFrame||X.clearTimeout).call(X,e)}function j(e,t){const o=e.clientX-t.clientX,l=e.clientY-t.clientY;return Math.sqrt(o*o+l*l)}function I(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!u(e)}var A=e({name:"VueEasyLightbox",props:{imgs:{type:[Array,String],default:()=>""},visible:{type:Boolean,default:!1},index:{type:Number,default:0},scrollDisabled:{type:Boolean,default:!0},escDisabled:{type:Boolean,default:!1},moveDisabled:{type:Boolean,default:!1},titleDisabled:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},teleport:{type:[String,Object],default:null},swipeTolerance:{type:Number,default:50},loop:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},zoomScale:{type:Number,default:.12},maxZoom:{type:Number,default:3},minZoom:{type:Number,default:.1},rotateDisabled:{type:Boolean,default:!1},zoomDisabled:{type:Boolean,default:!1},pinchDisabled:{type:Boolean,default:!1},dblclickDisabled:{type:Boolean,default:!1}},emits:{hide:()=>!0,"on-error":e=>!0,"on-prev":(e,t)=>!0,"on-next":(e,t)=>!0,"on-prev-click":(e,t)=>!0,"on-next-click":(e,t)=>!0,"on-index-change":(e,t)=>!0,"on-rotate":e=>!0},setup(e,u){let{emit:p,slots:v}=u;const{imgRef:f,imgState:h,setImgSize:w}=(()=>{const e=t(),l=o({width:0,height:0,maxScale:1});return{imgRef:e,imgState:l,setImgSize:()=>{if(e.value){const{width:t,height:o,naturalWidth:a}=e.value;l.maxScale=a/t,l.width=t,l.height=o}}}})(),k=t(e.index),X=t(""),T=o({scale:1,lastScale:1,rotateDeg:0,top:0,left:0,initX:0,initY:0,lastX:0,lastY:0,touches:[]}),E=o({loadError:!1,loading:!1,dragging:!1,gesturing:!1,wheeling:!1}),A=l((()=>{return t=e.imgs,_("Array")(t)?e.imgs.map((e=>{return"string"==typeof e?{src:e}:(e=>!!e&&_("Object")(e))(t=e)&&D(t.src)?e:void 0;var t})).filter(M):D(e.imgs)?[{src:e.imgs}]:[];var t})),F=l((()=>A.value[k.value])),R=l((()=>A.value[k.value]?.src)),H=l((()=>A.value[k.value]?.title)),N=l((()=>A.value[k.value]?.alt)),P=l((()=>({cursor:E.loadError?"default":e.moveDisabled?E.dragging?"grabbing":"grab":"move",top:`calc(50% + ${T.top}px)`,left:`calc(50% + ${T.left}px)`,transition:E.dragging||E.gesturing?"none":"",transform:`translate(-50%, -50%) scale(${T.scale}) rotate(${T.rotateDeg}deg)`}))),V=()=>{p("hide")},Z=()=>{T.scale=1,T.lastScale=1,T.rotateDeg=0,T.top=0,T.left=0,E.loadError=!1,E.dragging=!1,E.loading=!0},U=(t,o)=>{const l=k.value;Z(),k.value=t,A.value[k.value]===A.value[t]&&b((()=>{E.loading=!1})),e.visible&&l!==t&&(o&&o(l,t),p("on-index-change",l,t))},q=()=>{const t=k.value,o=e.loop?(t+1)%A.value.length:t+1;!e.loop&&o>A.value.length-1||U(o,((e,t)=>{p("on-next",e,t),p("on-next-click",e,t)}))},W=()=>{const t=k.value;let o=t-1;if(0===t){if(!e.loop)return;o=A.value.length-1}U(o,((e,t)=>{p("on-prev",e,t),p("on-prev-click",e,t)}))},G=e=>{Math.abs(1-e)<.05?e=1:Math.abs(h.maxScale-e)<.05&&(e=h.maxScale),T.lastScale=T.scale,T.scale=e},J=()=>{const t=T.scale+e.zoomScale;t<h.maxScale*e.maxZoom&&G(t)},K=()=>{const t=T.scale-e.zoomScale;t>e.minZoom&&G(t)},Q=()=>{const e=T.rotateDeg%360;p("on-rotate",Math.abs(e<0?e+360:e))},ee=()=>{T.rotateDeg-=90,Q()},te=()=>{T.rotateDeg+=90,Q()},oe=()=>{T.scale=1,T.top=0,T.left=0},le=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return!e.moveDisabled&&0===t},{onMouseDown:ae,onMouseMove:ne,onMouseUp:re}=((e,t,o)=>{let l,a=!1;return{onMouseDown:o=>{e.initX=e.lastX=o.clientX,e.initY=e.lastY=o.clientY,t.dragging=!0,a=!1,o.stopPropagation()},onMouseUp:e=>{o(e.button)&&O(l),t.dragging=!1,a=!1},onMouseMove:n=>{if(t.dragging)if(o(n.button)){if(a)return;a=!0,l=$((()=>{const{top:t,left:o,lastY:l,lastX:r}=e;e.top=t-l+n.clientY,e.left=o-r+n.clientX,e.lastX=n.clientX,e.lastY=n.clientY,a=!1}))}else e.lastX=n.clientX,e.lastY=n.clientY;n.stopPropagation()}}})(T,E,le),{onTouchStart:ie,onTouchMove:se,onTouchEnd:ce}=((e,t,o,l,a)=>{let n,r=!1;return{onTouchStart:e=>{const{touches:l}=e;l.length>1&&a()?(o.gesturing=!0,t.touches=l):(t.initX=t.lastX=l[0].clientX,t.initY=t.lastY=l[0].clientY,o.dragging=!0),e.stopPropagation()},onTouchMove:i=>{if(r)return;const{touches:s}=i,{lastX:c,lastY:d,left:u,top:p,scale:b}=t;if(!o.gesturing&&o.dragging){if(!s[0])return;const{clientX:e,clientY:o}=s[0];l()?n=$((()=>{t.lastX=e,t.lastY=o,t.top=p-d+o,t.left=u-c+e,r=!1})):(t.lastX=e,t.lastY=o)}else o.gesturing&&t.touches.length>1&&s.length>1&&a()&&(n=$((()=>{const o=(j(t.touches[0],t.touches[1])-j(s[0],s[1]))/e.width;t.touches=s;const l=b-1.3*o;l>.5&&l<1.5*e.maxScale&&(t.scale=l),r=!1})))},onTouchEnd:()=>{O(n),o.dragging=!1,o.gesturing=!1,r=!1}}})(h,T,E,le,(()=>!e.pinchDisabled)),de=()=>{e.dblclickDisabled||(T.scale!==h.maxScale?(T.lastScale=T.scale,T.scale=h.maxScale):T.scale=T.lastScale)},ue=t=>{E.loadError||E.gesturing||E.loading||E.dragging||E.wheeling||!e.scrollDisabled||e.zoomDisabled||(E.wheeling=!0,setTimeout((()=>{E.wheeling=!1}),80),t.deltaY<0?J():K())},pe=t=>{const o=t;e.visible&&(!e.escDisabled&&"Escape"===o.key&&e.visible&&V(),"ArrowLeft"===o.key&&(e.rtl?q():W()),"ArrowRight"===o.key&&(e.rtl?W():q()))},be=()=>{e.maskClosable&&V()},ve=()=>{w()},me=()=>{E.loading=!1},ge=e=>{E.loading=!1,E.loadError=!0,p("on-error",e)},fe=()=>{e.visible&&w()};a((()=>e.index),(e=>{e<0||e>=A.value.length||U(e)})),a((()=>E.dragging),((t,o)=>{const l=!t&&o;if(!le()&&l){const t=T.lastX-T.initX,o=T.lastY-T.initY,l=e.swipeTolerance;Math.abs(t)>Math.abs(o)&&(t<-1*l?q():t>l&&W())}})),a((()=>e.visible),(t=>{if(t){Z();const t=A.value.length;if(0===t)return k.value=0,E.loading=!1,void b((()=>E.loadError=!0));k.value=e.index>=t?t-1:e.index<0?0:e.index,e.scrollDisabled&&he()}else e.scrollDisabled&&we()}));const he=()=>{document&&(X.value=document.body.style.overflowY,document.body.style.overflowY="hidden")},we=()=>{document&&(document.body.style.overflowY=X.value)};n((()=>{x(document,"keydown",pe),x(window,"resize",fe)})),r((()=>{y(document,"keydown",pe),y(window,"resize",fe),e.scrollDisabled&&we()}));const xe=()=>{if(v["prev-btn"])return v["prev-btn"]({prev:W});if(A.value.length<=1)return;const t=!e.loop&&k.value<=0;return i("div",{role:"button","aria-label":"previous image button",class:"btn__prev "+(t?"disable":""),onClick:W},[e.rtl?i(g,{type:"next"},null):i(g,{type:"prev"},null)])},ye=()=>{if(v["next-btn"])return v["next-btn"]({next:q});if(A.value.length<=1)return;const t=!e.loop&&k.value>=A.value.length-1;return i("div",{role:"button","aria-label":"next image button",class:"btn__next "+(t?"disable":""),onClick:q},[e.rtl?i(g,{type:"prev"},null):i(g,{type:"next"},null)])},ze=()=>{if(!(e.titleDisabled||E.loading||E.loadError))return v.title?v.title({currentImg:F.value}):H.value?i(Y,null,{default:()=>[H.value]}):void 0},ke=()=>{let t;if(e.visible)return i("div",{onTouchmove:z,class:[`${m}-modal`,e.rtl?"is-rtl":""],onClick:d(be,["self"]),onWheel:ue},[i(B,null,null),i(c,{name:`${m}-fade`,mode:"out-in"},I(t=E.loading?v.loading?v.loading({key:"loading"}):i(L,{key:"img-loading"},null):E.loadError?v.onerror?v.onerror({key:"onerror"}):i(C,{key:"img-on-error"},null):i("div",{class:`${m}-img-wrapper`,style:P.value,key:"img-wrapper"},[i("img",{alt:N.value,ref:f,draggable:"false",class:`${m}-img`,src:R.value,onMousedown:ae,onMouseup:re,onMousemove:ne,onTouchstart:ie,onTouchmove:se,onTouchend:ce,onLoad:ve,onDblclick:de,onDragstart:e=>{e.preventDefault()}},null)]))?t:{default:()=>[t]}),i("img",{style:"display:none;",src:R.value,onError:ge,onLoad:me},null),i("div",{class:`${m}-btns-wrapper`},[xe(),ye(),ze(),v["close-btn"]?v["close-btn"]({close:V}):i("div",{role:"button","aria-label":"close image preview button",class:"btn__close",onClick:V},[i(g,{type:"close"},null)]),v.toolbar?v.toolbar({toolbarMethods:{zoomIn:J,zoomOut:K,rotate:ee,rotateLeft:ee,rotateRight:te,resize:oe},zoomIn:J,zoomOut:K,rotate:ee,rotateLeft:ee,rotateRight:te,resize:oe}):i(S,{zoomIn:J,zoomOut:K,resize:oe,rotateLeft:ee,rotateRight:te,rotateDisabled:e.rotateDisabled,zoomDisabled:e.zoomDisabled},null)])])};return()=>{let t;if(e.teleport){let t;return i(s,{to:e.teleport},{default:()=>[i(c,{name:`${m}-fade`},I(t=ke())?t:{default:()=>[t]})]})}return i(c,{name:`${m}-fade`},I(t=ke())?t:{default:()=>[t]})}}});const F=Object.assign(A,{install:e=>{e.component(A.name,A)}});export{F as N};
