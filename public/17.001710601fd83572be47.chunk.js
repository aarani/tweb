(this.webpackJsonp=this.webpackJsonp||[]).push([[17,18,29],{17:function(e,t,n){"use strict";n.r(t),n.d(t,"ripple",(function(){return c}));var i=n(5),a=n(51),o=n(1),s=n(15);let r=0;function c(e,t=(()=>Promise.resolve()),n=null,c=!1){if(e.querySelector(".c-ripple"))return;e.classList.add("rp");let l=document.createElement("div");l.classList.add("c-ripple");let d;e.classList.contains("rp-square")&&l.classList.add("is-square"),e[c?"prepend":"append"](l);const u=(e,i)=>{const s=Date.now(),c=document.createElement("div"),u=r++,h=1e3*+window.getComputedStyle(l).getPropertyValue("--ripple-duration").replace("s","");d=()=>{let e=Date.now()-s;const t=()=>{a.a.mutate(()=>{c.remove()}),n&&n(u)};if(e<h){let n=Math.max(h-e,h/2);setTimeout(()=>c.classList.add("hiding"),Math.max(n-h/2,0)),setTimeout(t,n)}else c.classList.add("hiding"),setTimeout(t,h/2);o.isTouchSupported||window.removeEventListener("contextmenu",d),d=null,p=!1},t&&t(u),window.requestAnimationFrame(()=>{const t=l.getBoundingClientRect();c.classList.add("c-ripple__circle");const n=e-t.left,a=i-t.top,o=Math.sqrt(Math.pow(Math.abs(a-t.height/2)+t.height/2,2)+Math.pow(Math.abs(n-t.width/2)+t.width/2,2)),s=n-o/2,r=a-o/2;c.style.width=c.style.height=o+"px",c.style.left=s+"px",c.style.top=r+"px",l.append(c)})},h=t=>t.target!==e&&(["BUTTON","A"].includes(t.target.tagName)||Object(i.a)(t.target,"c-ripple")!==l);let p=!1;if(o.isTouchSupported){let t=()=>{d&&d()};e.addEventListener("touchstart",n=>{if(!s.default.settings.animationsEnabled)return;if(n.touches.length>1||p||h(n))return;p=!0;let{clientX:i,clientY:a}=n.touches[0];u(i,a),e.addEventListener("touchend",t,{once:!0}),window.addEventListener("touchmove",n=>{n.cancelBubble=!0,n.stopPropagation(),t(),e.removeEventListener("touchend",t)},{once:!0})},{passive:!0})}else e.addEventListener("mousedown",t=>{if(![0,2].includes(t.button))return;if(!s.default.settings.animationsEnabled)return;if("0"===e.dataset.ripple||h(t))return;if(p)return void(p=!1);let{clientX:n,clientY:i}=t;u(n,i),window.addEventListener("mouseup",d,{once:!0,passive:!0}),window.addEventListener("contextmenu",d,{once:!0,passive:!0})},{passive:!0})}},19:function(e,t,n){"use strict";n.r(t);var i=n(33),a=n(45),o=n(16),s=n(30),r=n(29),c=n(61),l=n(38),d=n(50),u=n(31),h=n(0),p=n(80),m=n(1),g=n(7),f=n(14),v=n(46),b=n(17),y=n(58),w=n(5),L=n(66),E=n(91),O=n(101),S=n(21),_=n(87),j=n(4),k=n(28),x=n(34),T=n(52),P=n(57),A=n(97),C=n(84),M=n(92),R=n(47),N=n(75),I=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function r(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};let D,B=null;const q=new c.a("page-sign",!0,()=>{const e=f.default.countriesList.filter(e=>{var t;return!(null===(t=e.pFlags)||void 0===t?void 0:t.hidden)}).sort((e,t)=>(e.name||e.default_name).localeCompare(t.name||t.default_name)),t=new Map;let c,b;const H=document.createElement("div");H.classList.add("input-wrapper");const Q=new l.b({label:"Login.CountrySelectorLabel",name:Object(L.b)()});Q.container.classList.add("input-select");const V=Q.input;V.autocomplete=Object(L.b)();const F=document.createElement("div");F.classList.add("select-wrapper","z-depth-3","hide");const U=document.createElement("span");U.classList.add("arrow","arrow-down"),Q.container.append(U);const $=document.createElement("ul");F.appendChild($);new a.b(F);let W=()=>{W=null,e.forEach(e=>{const n=Object(M.c)(e.iso2),i=[];e.country_codes.forEach(t=>{const a=document.createElement("li");let o=r.a.wrapEmojiText(n);if(r.a.emojiSupported){const e=document.createElement("span");e.innerHTML=o,a.append(e)}else a.innerHTML=o;const s=Object(f.i18n)(e.default_name);s.dataset.defaultName=e.default_name,a.append(s);const c=document.createElement("span");c.classList.add("phone-code"),c.innerText="+"+t.country_code,a.appendChild(c),i.push(a),$.append(a)}),t.set(e.iso2,i)}),$.addEventListener("mousedown",e=>{if(0!==e.button)return;const t=Object(y.a)(e.target,"LI");X(t)}),Q.container.appendChild(F)};const X=t=>{const n=t.childNodes[1].dataset.defaultName,i=t.querySelector(".phone-code").innerText;Object(x.a)(V,Object(f.i18n)(n)),Object(R.a)(V,"input"),c=e.find(e=>e.default_name===n),ee.value=Z=i,J(),setTimeout(()=>{te.focus(),Object(A.a)(te,!0)},0)};let Y;W(),V.addEventListener("focus",(function(n){W?W():e.forEach(e=>{t.get(e.iso2).forEach(e=>e.style.display="")}),clearTimeout(Y),Y=void 0,F.classList.remove("hide"),F.offsetWidth,F.classList.add("active"),Q.select(),Object(p.b)(q.pageEl.parentElement.parentElement,V,"start",4),setTimeout(()=>{K||(document.addEventListener("mousedown",z,{capture:!0}),K=!0)},0)}));let K=!1;const z=e=>{Object(w.a)(e.target,"input-select")||e.target!==V&&(J(),document.removeEventListener("mousedown",z,{capture:!0}),K=!1)},J=()=>{void 0===Y&&(F.classList.remove("active"),Y=window.setTimeout(()=>{F.classList.add("hide"),Y=void 0},200))};V.addEventListener("keyup",(function(n){if(n.ctrlKey||"Control"===n.key)return!1;let i=this.value.toLowerCase(),a=[];e.forEach(e=>{let n=!![e.name,e.default_name].filter(Boolean).find(e=>-1!==e.toLowerCase().indexOf(i));t.get(e.iso2).forEach(e=>e.style.display=n?"":"none"),n&&a.push(e)}),0===a.length?e.forEach(e=>{t.get(e.iso2).forEach(e=>e.style.display="")}):1===a.length&&"Enter"===n.key&&X(t.get(a[0].iso2)[0])})),U.addEventListener("mousedown",(function(e){e.cancelBubble=!0,e.preventDefault(),V.matches(":focus")?V.blur():V.focus()}));let G=!1,Z="";const ee=new l.b({label:"Login.PhoneLabel",name:"phone"});ee.container.classList.add("input-field-phone");let te=ee.input;if(te instanceof HTMLInputElement)te.type="tel",te.autocomplete="rr55RandomRR55";else{te.inputMode="decimal";const e=window.devicePixelRatio;if(e>1){let t;h.isApple?t=-.16*e:h.isAndroid&&(t=0),te.style.setProperty("--letter-spacing",t+"px")}const t=ee.setValueSilently.bind(ee);ee.setValueSilently=e=>{t(e),Object(A.a)(ee.input,!0)}}te.addEventListener("input",()=>{te.classList.remove("error"),v.b.loadLottieWorkers();const e=ee.value;Math.abs(e.length-Z.length)>1&&!G&&h.isAppleMobile&&ee.setValueSilently(Z+e),G=!1,ee.setLabel();let t,n,i,a="";if("+"===ee.value.replace(/\++/,"+"))ee.setValueSilently("+");else{const e=Object(C.a)(ee.value);t=e.formatted,n=e.country,a=e.leftPattern,i=e.code,ee.setValueSilently(Z=t?"+"+t:"")}te.dataset.leftPattern=a;let o=n?n.name||n.default_name:"";o===Q.value||c&&n&&(c===n||b.country_code===i.country_code)||(Object(x.a)(V,n?Object(f.i18n)(n.default_name):o),c=n,b=i),n||ee.value.length-1>1?B.style.visibility="":B.style.visibility="hidden"}),te.addEventListener("paste",()=>{G=!0}),te.addEventListener("keypress",e=>B.style.visibility||"Enter"!==e.key?!/\D/.test(e.key)||e.metaKey||e.ctrlKey||"Backspace"===e.key||"+"===e.key&&e.shiftKey?void 0:(e.preventDefault(),!1):ie());const ne=new d.a({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});ne.input.addEventListener("change",()=>{const e=ne.checked;o.default.pushToState("keepSigned",e),E.a.toggleStorage(e),O.a.toggleStorage(e),s.a.toggleStorage(e),P.a.toggleStorage(e)}),o.default.getState().then(e=>{o.default.storage.isAvailable()?ne.checked=e.keepSigned:(ne.checked=!1,ne.label.classList.add("checkbox-disabled"))}),B=Object(u.a)("btn-primary btn-color-primary",{text:"Login.Next"}),B.style.visibility="hidden";const ie=e=>{e&&Object(j.a)(e);const t=Object(T.a)([B,D],!0);Object(x.a)(B,Object(f.i18n)("PleaseWait")),Object(i.f)(B);let a=ee.value;s.a.invokeApi("auth.sendCode",{phone_number:a,api_id:g.a.id,api_hash:g.a.hash,settings:{_:"codeSettings"}}).then(e=>{n.e(22).then(n.bind(null,22)).then(t=>t.default.mount(Object.assign(e,{phone_number:a})))}).catch(e=>{switch(t(),e.type){case"PHONE_NUMBER_INVALID":ee.setError(),Object(x.a)(ee.label,Object(f.i18n)("Login.PhoneLabelInvalid")),te.classList.add("error"),Object(x.a)(B,Object(f.i18n)("Login.Next"));break;default:console.error("auth.sendCode error:",e),B.innerText=e.type}})};Object(k.b)(B,ie),D=Object(u.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"});D.addEventListener("click",()=>{S.default.mount()}),H.append(Q.container,ee.container,ne.label,B,D);const ae=document.createElement("h4");ae.classList.add("text-center"),Object(f._i18n)(ae,"Login.Title");const oe=document.createElement("div");oe.classList.add("subtitle","text-center"),Object(f._i18n)(oe,"Login.StartText"),q.pageEl.querySelector(".container").append(ae,oe,H);m.isTouchSupported||setTimeout(()=>{te.focus()},0),Object(_.a)(H),s.a.invokeApi("help.getNearestDc").then(e=>{var t;const n=N.a.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&f.default.getLangPack(n.lang_code).then(()=>{Object(R.a)(te,"input")});const i=new Set([1,2,3,4,5]),a=[e.this_dc];let o;return e.nearest_dc!==e.this_dc&&(o=s.a.getNetworker(e.nearest_dc).then(()=>{a.push(e.nearest_dc)})),(o||Promise.resolve()).then(()=>{a.forEach(e=>{i.delete(e)});const e=[...i],t=()=>I(void 0,void 0,void 0,(function*(){const n=e.shift();if(!n)return;const i=`dc${n}_auth_key`;if(yield P.a.get(i))return t();setTimeout(()=>{s.a.getNetworker(n).finally(t)},3e3)}));t()}),e}).then(e=>{Q.value.length||ee.value.length||X(t.get(e.country)[0])})},()=>{B&&(Object(x.a)(B,Object(f.i18n)("Login.Next")),Object(b.ripple)(B,void 0,void 0,!0),B.removeAttribute("disabled")),D&&D.removeAttribute("disabled"),o.default.pushToState("authState",{_:"authStateSignIn"})});t.default=q},21:function(e,t,n){"use strict";n.r(t);var i=n(30),a=n(61),o=n(59),s=n(70),r=n(7),c=n(31),l=n(14),d=n(16),u=n(15),h=n(33),p=n(87),m=n(76),g=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function r(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};let f;const v=new a.a("page-signQR",!0,()=>f,()=>{f||(f=g(void 0,void 0,void 0,(function*(){const e=v.pageEl.querySelector(".auth-image");let t=Object(h.f)(e,!0);const a=document.createElement("div");a.classList.add("input-wrapper");const d=Object(c.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Cancel"});a.append(d),Object(p.a)(a);const b=e.parentElement,y=document.createElement("h4");Object(l._i18n)(y,"Login.QR.Title");const w=document.createElement("ol");w.classList.add("qr-description"),["Login.QR.Help1","Login.QR.Help2","Login.QR.Help3"].forEach(e=>{const t=document.createElement("li");t.append(Object(l.i18n)(e)),w.append(t)}),b.append(y,w,a),d.addEventListener("click",()=>{Promise.all([n.e(4),n.e(29)]).then(n.bind(null,19)).then(e=>e.default.mount()),E=!0});const L=(yield Promise.all([n.e(11).then(n.t.bind(null,123,7))]))[0].default;let E=!1;u.default.addEventListener("user_auth",()=>{E=!0,f=null},{once:!0});let O,S={ignoreErrors:!0};const _=a=>g(void 0,void 0,void 0,(function*(){try{let c=yield i.a.invokeApi("auth.exportLoginToken",{api_id:r.a.id,api_hash:r.a.hash,except_ids:[]},{ignoreErrors:!0});if("auth.loginTokenMigrateTo"===c._&&(S.dcId||(S.dcId=c.dc_id,i.a.setBaseDcId(c.dc_id)),c=yield i.a.invokeApi("auth.importLoginToken",{token:c.token},S)),"auth.loginTokenSuccess"===c._){const e=c.authorization;return i.a.setUserAuth(e.user.id),n.e(5).then(n.bind(null,18)).then(e=>e.default.mount()),!0}if(!O||!Object(s.b)(O,c.token)){O=c.token;let n="tg://login?token="+Object(s.d)(c.token).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,"");const i=window.getComputedStyle(document.documentElement),a=i.getPropertyValue("--surface-color").trim(),o=i.getPropertyValue("--primary-text-color").trim(),r=i.getPropertyValue("--primary-color").trim(),l=yield fetch("assets/img/logo_padded.svg").then(e=>e.text()).then(e=>{e=e.replace(/(fill:).+?(;)/,`$1${r}$2`);const t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return new Promise(e=>{const n=new FileReader;n.onload=t=>{e(t.target.result)},n.readAsDataURL(t)})}),d=new L({width:240*window.devicePixelRatio,height:240*window.devicePixelRatio,data:n,image:l,dotsOptions:{color:o,type:"rounded"},cornersSquareOptions:{type:"extra-rounded"},imageOptions:{imageSize:1,margin:0},backgroundOptions:{color:a},qrOptions:{errorCorrectionLevel:"L"}});let u;d.append(e),e.lastChild.classList.add("qr-canvas"),u=d._drawingPromise?d._drawingPromise:Promise.race([Object(m.a)(1e3),new Promise(e=>{d._canvas._image.addEventListener("load",()=>{window.requestAnimationFrame(()=>e())},{once:!0})})]),yield u.then(()=>{if(t){t.style.animation="hide-icon .4s forwards";const n=e.children[1];n.style.display="none",n.style.animation="grow-icon .4s forwards",setTimeout(()=>{n.style.display=""},150),setTimeout(()=>{n.style.animation=""},500),t=void 0}else Array.from(e.children).slice(0,-1).forEach(e=>{e.remove()})})}if(a){let e=Date.now()/1e3,t=c.expires-e-o.a.serverTimeOffset;yield Object(m.a)(t>3?3e3:1e3*t|0)}}catch(e){switch(e.type){case"SESSION_PASSWORD_NEEDED":console.warn("pageSignQR: SESSION_PASSWORD_NEEDED"),e.handled=!0,Promise.all([n.e(3),n.e(16)]).then(n.bind(null,20)).then(e=>e.default.mount()),E=!0,f=null;break;default:console.error("pageSignQR: default error:",e),E=!0}return!0}return!1}));return()=>g(void 0,void 0,void 0,(function*(){for(E=!1;!E&&!(yield _(!0)););}))}))),f.then(e=>{e()}),d.default.pushToState("authState",{_:"authStateSignQr"})});t.default=v},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c}));var i=n(1),a=n(47);const o=i.isTouchSupported?"mousedown":"click";function s(e,t,n={}){const i=n.listenerSetter?n.listenerSetter.add(e):e.addEventListener.bind(e);n.touchMouseDown=!0,i(o,t,n)}function r(e,t,n){"touchend"===o?e.removeEventListener("touchstart",t,n):e.removeEventListener(o,t,n)}function c(e){Object(a.a)(e,o)}},31:function(e,t,n){"use strict";var i=n(14),a=n(17);t.a=(e,t={})=>{const n=document.createElement(t.asDiv?"div":"button");return n.className=e+(t.icon?" tgico-"+t.icon:""),t.noRipple||(t.rippleSquare&&n.classList.add("rp-square"),Object(a.ripple)(n)),t.onlyMobile&&n.classList.add("only-handhelds"),t.disabled&&n.setAttribute("disabled","true"),t.text&&n.append(Object(i.i18n)(t.text)),n}},33:function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return w})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return S}));var i=n(27),a=n(4),o=n(28),s=n(36),r=n(1),c=n(0),l=n(15),d=n(44);function u(e,t=!1){const n='\n  <svg xmlns="http://www.w3.org/2000/svg" class="preloader-circular" viewBox="25 25 50 50">\n  <circle class="preloader-path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"/>\n  </svg>';if(t){const t=document.createElement("div");return t.classList.add("preloader"),t.innerHTML=n,e&&e.appendChild(t),t}return e.insertAdjacentHTML("beforeend",n),e.lastElementChild}function h(e,t="check"){return e.classList.remove("tgico-"+t),e.disabled=!0,u(e),()=>{e.innerHTML="",e.classList.add("tgico-"+t),e.removeAttribute("disabled")}}i.a.putPreloader=u;let p=e=>{let t=f.getBoundingClientRect(),{clientX:n,clientY:i}=e,a=n>=t.right?n-t.right:t.left-n,o=i>=t.bottom?i-t.bottom:t.top-i;(a>=100||o>=100)&&g()};const m=e=>{g()},g=()=>{f&&(f.classList.remove("active"),f.parentElement.classList.remove("menu-open"),b&&b.remove(),f=null,l.default.dispatchEvent("context_menu_toggle",!1)),v&&(v(),v=null),r.isTouchSupported||(window.removeEventListener("mousemove",p),window.removeEventListener("contextmenu",m)),document.removeEventListener(o.a,m),c.isMobileSafari||d.a.removeByType("menu")};window.addEventListener("resize",()=>{f&&g()});let f=null,v=null,b=null;function y(e,t){g(),c.isMobileSafari||d.a.pushItem({type:"menu",onPop:e=>{g()}}),f=e,f.classList.add("active"),f.parentElement.classList.add("menu-open"),b||(b=document.createElement("div"),b.classList.add("btn-menu-overlay"),b.addEventListener(o.a,e=>{Object(a.a)(e),m()})),f.parentElement.insertBefore(b,f),v=t,r.isTouchSupported||(window.addEventListener("mousemove",p),window.addEventListener("contextmenu",m,{once:!0})),document.addEventListener(o.a,m),l.default.dispatchEvent("context_menu_toggle",!0)}function w({pageX:e,pageY:t},n,i){let{scrollWidth:a,scrollHeight:o}=n;const r=document.body.getBoundingClientRect(),c=r.width,l=r.height;i=s.b.isMobile?"right":"left";let d="top";const u={x:{left:e,right:e-a},intermediateX:"right"===i?8:c-a-8,y:{top:t,bottom:t-o},intermediateY:t<l/2?8:l-o-8},h={left:u.x.left+a+8<=c,right:u.x.right>=8},p={top:u.y.top+o+8<=l,bottom:u.y.bottom-8>=8};{let e;e=h[i]?u.x[i]:(i="center",u.intermediateX),n.style.left=e+"px"}{let e;e=p[d]?u.y[d]:(d="center",u.intermediateY),n.style.top=e+"px"}n.className=n.className.replace(/(top|center|bottom)-(left|center|right)/g,""),n.classList.add(("center"===d?d:"bottom")+"-"+("center"===i?i:"left"===i?"right":"left"))}let L=!1,E=0;function O(){E&&clearTimeout(E),E=window.setTimeout(()=>{E=0,L=!1},400),L=!0}function S(e,t,n){const i=n?n.add(e):e.addEventListener.bind(e),o=n?n.removeManual.bind(n,e):e.removeEventListener.bind(e);if(c.isApple&&r.isTouchSupported){let n;const s={capture:!0},r=()=>{clearTimeout(n),o("touchmove",r,s),o("touchend",r,s),o("touchcancel",r,s)};i("touchstart",o=>{o.touches.length>1?r():(i("touchmove",r,s),i("touchend",r,s),i("touchcancel",r,s),n=window.setTimeout(()=>{L?r():(t(o.touches[0]),r(),f&&e.addEventListener("touchend",a.a,{once:!0}))},400))})}else i("contextmenu",r.isTouchSupported?n=>{t(n),f&&e.addEventListener("touchend",a.a,{once:!0})}:t)}},44:function(e,t,n){"use strict";var i=n(27),a=n(0),o=n(40),s=n(37),r=n(6),c=n(4);const l=new class{constructor(){this.navigations=[],this.id=Date.now(),this.manual=!1,this.log=Object(o.b)("NC"),this.debug=!0,this.currentHash=window.location.hash;let e=!1;if(window.addEventListener("popstate",t=>{if(this.debug&&this.log("popstate",t,e),window.location.hash!==this.currentHash)return this.onHashChange&&this.onHashChange(),void this.replaceState();this.currentHash=window.location.hash;if(t.state!==this.id)return void this.pushState();const n=this.navigations.pop();n?(this.manual=!e,this.handleItem(n)):this.pushState()}),window.addEventListener("keydown",e=>{const t=this.navigations[this.navigations.length-1];t&&("Escape"!==e.key||t.onEscape&&!t.onEscape()||(Object(c.a)(e),this.back(t.type)))},{capture:!0,passive:!1}),a.isMobileSafari){const t={passive:!0};window.addEventListener("touchstart",n=>{if(n.touches.length>1)return;this.debug&&this.log("touchstart");const i=()=>{window.removeEventListener("touchend",r),window.removeEventListener("touchmove",o)};let a=!1;const o=e=>{this.debug&&this.log("touchmove"),e.touches.length>1?i():a=!0},r=t=>{this.debug&&this.log("touchend"),t.touches.length>1||!a||(e=!0,Object(s.a)().then(()=>{e=!1})),i()};window.addEventListener("touchend",r,t),window.addEventListener("touchmove",o,t)},t)}history.scrollRestoration="manual",this.pushState()}handleItem(e){const t=e.onPop(!!this.manual&&void 0);this.debug&&this.log("popstate, navigation:",e,this.navigations),!1===t?this.pushItem(e):e.noBlurOnPop||Object(r.a)(),this.manual=!1}findItemByType(e){for(let t=this.navigations.length-1;t>=0;--t){const n=this.navigations[t];if(n.type===e)return{item:n,index:t}}}back(e){if(e){const t=this.findItemByType(e);if(t)return this.manual=!0,this.navigations.splice(t.index,1),void this.handleItem(t.item)}history.back()}pushItem(e){this.navigations.push(e),this.debug&&this.log("pushstate",e,this.navigations),e.noHistory||this.pushState()}pushState(){this.manual=!1,history.pushState(this.id,"")}replaceState(){history.replaceState(this.id,"",location.origin+location.pathname)}removeItem(e){this.navigations.findAndSplice(t=>t===e)}removeByType(e,t=!1){for(let n=this.navigations.length-1;n>=0;--n){if(this.navigations[n].type===e&&(this.navigations.splice(n,1),t))break}}};i.a.appNavigationController=l,t.a=l},47:function(e,t,n){"use strict";function i(e,t){const n=new Event(t,{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}n.d(t,"a",(function(){return i}))},51:function(e,t,n){"use strict";var i=n(37),a=n(41),o=n(27),s=n(62);const r=new class{constructor(){this.promises={},this.raf=i.b.bind(null),this.scheduled=!1}do(e,t){let n=this.promises[e];return n||(this.scheduleFlush(),n=this.promises[e]=Object(a.a)()),void 0!==t&&n.then(()=>t()),n}measure(e){return this.do("read",e)}mutate(e){return this.do("write",e)}mutateElement(e,t){const n=Object(s.a)(e)?this.mutate():Promise.resolve();return void 0!==t&&n.then(()=>t()),n}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}};o.a&&(o.a.sequentialDom=r),t.a=r},59:function(e,t,n){"use strict";var i=n(27),a=n(57),o=n(30);const s=new class{constructor(){this.serverTimeOffset=0,a.a.get("server_time_offset").then(e=>{e&&(this.serverTimeOffset=e)}),o.a.addTaskListener("applyServerTimeOffset",e=>{this.serverTimeOffset=e.payload})}};i.a&&(i.a.serverTimeManager=s),t.a=s},70:function(e,t,n){"use strict";function i(e){const t=new Array(e.length);for(let n=0;n<e.length;++n)t[n]=(e[n]<16?"0":"")+(e[n]||0).toString(16);return t.join("")}function a(e){const t=e.length,n=new Uint8Array(Math.ceil(t/2));let i=0;t%2&&(n[i++]=parseInt(e.charAt(0),16));for(let a=i;a<t;a+=2)n[i++]=parseInt(e.substr(a,2),16);return n}function o(e){let t,n="";for(let i=e.length,a=0,o=0;o<i;++o)t=o%3,a|=e[o]<<(16>>>t&24),2!==t&&i-o!=1||(n+=String.fromCharCode(s(a>>>18&63),s(a>>>12&63),s(a>>>6&63),s(63&a)),a=0);return n.replace(/A(?=A$|$)/g,"=")}function s(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}function r(e,t){const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;++i)if(e[i]!==t[i])return!1;return!0}function c(...e){const t=e.reduce((e,t)=>e+(t.byteLength||t.length),0),n=new Uint8Array(t);let i=0;return e.forEach(e=>{n.set(e instanceof ArrayBuffer?new Uint8Array(e):e,i),i+=e.byteLength||e.length}),n}n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}))},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(4),a=n(28),o=n(8),s=n(14),r=n(30),c=n(15),l=n(31),d=n(33);let u,h=!1,p=0;function m(e){h||(u||(u=r.a.getConfig().then(e=>e.suggested_lang_code!==s.default.lastRequestedLangCode?Promise.all([e,s.default.getStrings(e.suggested_lang_code,["Login.ContinueOnLanguage"]),s.default.getCacheLangPack()]):[]))).then(([t,n])=>{if(!t)return;const r=[];n.forEach(e=>{const t=s.default.strings.get(e.key);t&&(r.push(t),s.default.strings.set(e.key,e))});const u=Object(l.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.ContinueOnLanguage"});Object(o.a)().then(()=>{window.requestAnimationFrame(()=>{e.append(u)})}),c.default.addEventListener("language_change",()=>{u.remove()},{once:!0}),r.forEach(e=>{s.default.strings.set(e.key,e)}),Object(a.b)(u,e=>{Object(i.a)(e),u.disabled=!0,Object(d.f)(u),s.default.getLangPack(t.suggested_lang_code)})})}c.default.addEventListener("language_change",()=>{++p<2||(console.log("language_change"),h=!0)})}}]);
//# sourceMappingURL=17.001710601fd83572be47.chunk.js.map