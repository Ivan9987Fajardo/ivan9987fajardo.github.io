import{A as x,B as F,C as Dt,D as Qe,E as ie,F as Rt,H as jt,J as $t,K as Ee,L as Ze,M as Yt,N as Wt,O as Bt,P as Ut,Q as Vt,R as Xt,S as Gt,U as Te,a as Ke,b as we,c as I,d as _e,e as Pt,f as Ce,g as Ae,h as Se,i as Et,j as Tt,k as Mt,l as w,m as B,n as Ht,o as ae,p as Lt,q as P,r as v,s as g,t as _,u as Oe,v as Nt,w as Ie,x as Pe,y as zt,z as Ft}from"./chunk-5KAGERKV.js";var la={home:"Home",about:"About",experience:"Experience",web_developer:"Web Developer",name:"John Ivan Fajardo",technologies:"Technologies"},U=la;var qt=(()=>{let t=class t{constructor(){this.stringTranslation=U}ngOnInit(){let n=document.querySelector(".HomeHeader");document.addEventListener("scroll",i=>{n!==null&&(window.scrollY===0?n.classList.remove("Active"):n.classList.add("Active"))})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=I({type:t,selectors:[["home-header"]],decls:8,vars:3,consts:[[1,"HomeHeader"],[1,"HomeHeader__Buttons"],["href","#HomeLanding",1,"HomeHeader__Button"],["href","#HomeAbout",1,"HomeHeader__Button"],["href","#HomeTechnologies",1,"HomeHeader__Button"]],template:function(i,r){i&1&&(v(0,"div",0)(1,"div",1)(2,"a",2),x(3),g(),v(4,"a",3),x(5),g(),v(6,"a",4),x(7),g()()()),i&2&&(w(3),F(r.stringTranslation.home),w(2),F(r.stringTranslation.about),w(2),F(r.stringTranslation.technologies))},styles:[".HomeHeader[_ngcontent-%COMP%]{height:6rem;width:100%;display:flex;align-items:center;text-align:center;font-size:16px;color:#f55;padding:0 10%;transition:background-color .3s}.HomeHeader.Active[_ngcontent-%COMP%]{background-color:#222;transition:background-color .3s;border-bottom:2px solid #ff5555}.HomeHeader__Button[_ngcontent-%COMP%]{color:#f55;text-decoration:none;font-weight:500}.HomeHeader__Button[_ngcontent-%COMP%]:hover{cursor:pointer}.HomeHeader__Buttons[_ngcontent-%COMP%]{margin-left:auto;display:flex;flex-direction:row;gap:6rem}"]});let e=t;return e})();var Jt={particles:{number:{value:100,density:{enable:!0,value_area:1400}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:1,color:"#ffffff"},polygon:{nb_sides:4}},opacity:{value:.5,random:!0,anim:{enable:!0,speed:.8,opacity_min:.25,sync:!0}},size:{value:2,random:!0,anim:{enable:!1,speed:10,size_min:1.25,sync:!0}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.5,width:1},move:{enable:!0,speed:1.2,direction:"none",random:!0,straight:!1,out_mode:"bounce",bounce:!0,attract:{enable:!0,rotateX:2e3,rotateY:2e3}}},interactivity:{events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"repulse"},resize:!1}}};function Kt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Kt(Object(a),!0).forEach(function(n){C(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Kt(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function We(e){"@babel/helpers - typeof";return We=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},We(e)}function ca(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qt(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ua(e,t,a){return t&&Qt(e.prototype,t),a&&Qt(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function vt(e,t){return da(e)||va(e,t)||Cn(e,t)||ha()}function ye(e){return ma(e)||pa(e)||Cn(e)||ga()}function ma(e){if(Array.isArray(e))return it(e)}function da(e){if(Array.isArray(e))return e}function pa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function va(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n=[],i=!0,r=!1,o,s;try{for(a=a.call(e);!(i=(o=a.next()).done)&&(n.push(o.value),!(t&&n.length===t));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&a.return!=null&&a.return()}finally{if(r)throw s}}return n}}function Cn(e,t){if(e){if(typeof e=="string")return it(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return it(e,t)}}function it(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ga(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ha(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zt=function(){},gt={},An={},Sn=null,On={mark:Zt,measure:Zt};try{typeof window<"u"&&(gt=window),typeof document<"u"&&(An=document),typeof MutationObserver<"u"&&(Sn=MutationObserver),typeof performance<"u"&&(On=performance)}catch{}var ba=gt.navigator||{},en=ba.userAgent,tn=en===void 0?"":en,X=gt,y=An,nn=Sn,Me=On,fr=!!X.document,Y=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",In=~tn.indexOf("MSIE")||~tn.indexOf("Trident/"),He,Le,Ne,ze,Fe,R="___FONT_AWESOME___",rt=16,Pn="fa",En="svg-inline--fa",te="data-fa-i2svg",ot="data-fa-pseudo-element",ya="data-fa-pseudo-element-pending",ht="data-prefix",bt="data-icon",an="fontawesome-i2svg",xa="async",ka=["HTML","HEAD","STYLE","SCRIPT"],Tn=function(){try{return!0}catch{return!1}}(),b="classic",k="sharp",yt=[b,k];function xe(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[b]}})}var pe=xe((He={},C(He,b,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),C(He,k,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),He)),ve=xe((Le={},C(Le,b,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),C(Le,k,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Le)),ge=xe((Ne={},C(Ne,b,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),C(Ne,k,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ne)),wa=xe((ze={},C(ze,b,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),C(ze,k,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ze)),_a=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Mn="fa-layers-text",Ca=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Aa=xe((Fe={},C(Fe,b,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),C(Fe,k,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Fe)),Hn=[1,2,3,4,5,6,7,8,9,10],Sa=Hn.concat([11,12,13,14,15,16,17,18,19,20]),Oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},he=new Set;Object.keys(ve[b]).map(he.add.bind(he));Object.keys(ve[k]).map(he.add.bind(he));var Ia=[].concat(yt,ye(he),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(Hn.map(function(e){return"".concat(e,"x")})).concat(Sa.map(function(e){return"w-".concat(e)})),me=X.FontAwesomeConfig||{};function Pa(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ea(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&(rn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],rn.forEach(function(e){var t=vt(e,2),a=t[0],n=t[1],i=Ea(Pa(a));i!=null&&(me[n]=i)}));var rn,Ln={styleDefault:"solid",familyDefault:"classic",cssPrefix:Pn,replacementClass:En,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};me.familyPrefix&&(me.cssPrefix=me.familyPrefix);var le=c(c({},Ln),me);le.autoReplaceSvg||(le.observeMutations=!1);var m={};Object.keys(Ln).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){le[e]=a,de.forEach(function(n){return n(m)})},get:function(){return le[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){le.cssPrefix=t,de.forEach(function(a){return a(m)})},get:function(){return le.cssPrefix}});X.FontAwesomeConfig=m;var de=[];function Ta(e){return de.push(e),function(){de.splice(de.indexOf(e),1)}}var V=rt,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ma(e){if(!(!e||!Y)){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=y.head.childNodes,n=null,i=a.length-1;i>-1;i--){var r=a[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=r)}return y.head.insertBefore(t,n),e}}var Ha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function be(){for(var e=12,t="";e-- >0;)t+=Ha[Math.random()*62|0];return t}function fe(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function xt(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Nn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function La(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Nn(e[a]),'" ')},"").trim()}function Ve(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function kt(e){return e.size!==D.size||e.x!==D.x||e.y!==D.y||e.rotate!==D.rotate||e.flipX||e.flipY}function Na(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,i={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:i,inner:l,path:u}}function za(e){var t=e.transform,a=e.width,n=a===void 0?rt:a,i=e.height,r=i===void 0?rt:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&In?l+="translate(".concat(t.x/V-n/2,"em, ").concat(t.y/V-r/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "):l+="translate(".concat(t.x/V,"em, ").concat(t.y/V,"em) "),l+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Fa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zn(){var e=Pn,t=En,a=m.cssPrefix,n=m.replacementClass,i=Fa;if(a!==e||n!==t){var r=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(r,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return i}var on=!1;function et(){m.autoAddCss&&!on&&(Ma(zn()),on=!0)}var Da={mixout:function(){return{dom:{css:zn,insertCss:et}}},hooks:function(){return{beforeDOMElementCreation:function(){et()},beforeI2svg:function(){et()}}}},j=X||{};j[R]||(j[R]={});j[R].styles||(j[R].styles={});j[R].hooks||(j[R].hooks={});j[R].shims||(j[R].shims=[]);var L=j[R],Fn=[],Ra=function e(){y.removeEventListener("DOMContentLoaded",e),Be=1,Fn.map(function(t){return t()})},Be=!1;Y&&(Be=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Be||y.addEventListener("DOMContentLoaded",Ra));function ja(e){Y&&(Be?setTimeout(e,0):Fn.push(e))}function ke(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,i=e.children,r=i===void 0?[]:i;return typeof e=="string"?Nn(e):"<".concat(t," ").concat(La(n),">").concat(r.map(ke).join(""),"</").concat(t,">")}function sn(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var $a=function(t,a){return function(n,i,r,o){return t.call(a,n,i,r,o)}},tt=function(t,a,n,i){var r=Object.keys(t),o=r.length,s=i!==void 0?$a(a,i):a,l,u,f;for(n===void 0?(l=1,f=t[r[0]]):(l=0,f=n);l<o;l++)u=r[l],f=s(f,t[u],u,t);return f};function Ya(e){for(var t=[],a=0,n=e.length;a<n;){var i=e.charCodeAt(a++);if(i>=55296&&i<=56319&&a<n){var r=e.charCodeAt(a++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),a--)}else t.push(i)}return t}function st(e){var t=Ya(e);return t.length===1?t[0].toString(16):null}function Wa(e,t){var a=e.length,n=e.charCodeAt(t),i;return n>=55296&&n<=56319&&a>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(n-55296)*1024+i-56320+65536:n}function ln(e){return Object.keys(e).reduce(function(t,a){var n=e[a],i=!!n.icon;return i?t[n.iconName]=n.icon:t[a]=n,t},{})}function lt(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,i=n===void 0?!1:n,r=ln(t);typeof L.hooks.addPack=="function"&&!i?L.hooks.addPack(e,ln(t)):L.styles[e]=c(c({},L.styles[e]||{}),r),e==="fas"&&lt("fa",t)}var De,Re,je,re=L.styles,Ba=L.shims,Ua=(De={},C(De,b,Object.values(ge[b])),C(De,k,Object.values(ge[k])),De),wt=null,Dn={},Rn={},jn={},$n={},Yn={},Va=(Re={},C(Re,b,Object.keys(pe[b])),C(Re,k,Object.keys(pe[k])),Re);function Xa(e){return~Ia.indexOf(e)}function Ga(e,t){var a=t.split("-"),n=a[0],i=a.slice(1).join("-");return n===e&&i!==""&&!Xa(i)?i:null}var Wn=function(){var t=function(r){return tt(re,function(o,s,l){return o[l]=tt(s,r,{}),o},{})};Dn=t(function(i,r,o){if(r[3]&&(i[r[3]]=o),r[2]){var s=r[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Rn=t(function(i,r,o){if(i[o]=o,r[2]){var s=r[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Yn=t(function(i,r,o){var s=r[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var a="far"in re||m.autoFetchSvg,n=tt(Ba,function(i,r){var o=r[0],s=r[1],l=r[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});jn=n.names,$n=n.unicodes,wt=Xe(m.styleDefault,{family:m.familyDefault})};Ta(function(e){wt=Xe(e.styleDefault,{family:m.familyDefault})});Wn();function _t(e,t){return(Dn[e]||{})[t]}function qa(e,t){return(Rn[e]||{})[t]}function ee(e,t){return(Yn[e]||{})[t]}function Bn(e){return jn[e]||{prefix:null,iconName:null}}function Ja(e){var t=$n[e],a=_t("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function G(){return wt}var Ct=function(){return{prefix:null,iconName:null,rest:[]}};function Xe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?b:a,i=pe[n][e],r=ve[n][e]||ve[n][i],o=e in L.styles?e:null;return r||o||null}var fn=(je={},C(je,b,Object.keys(ge[b])),C(je,k,Object.keys(ge[k])),je);function Ge(e){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,i=n===void 0?!1:n,r=(t={},C(t,b,"".concat(m.cssPrefix,"-").concat(b)),C(t,k,"".concat(m.cssPrefix,"-").concat(k)),t),o=null,s=b;(e.includes(r[b])||e.some(function(u){return fn[b].includes(u)}))&&(s=b),(e.includes(r[k])||e.some(function(u){return fn[k].includes(u)}))&&(s=k);var l=e.reduce(function(u,f){var d=Ga(m.cssPrefix,f);if(re[f]?(f=Ua[s].includes(f)?wa[s][f]:f,o=f,u.prefix=f):Va[s].indexOf(f)>-1?(o=f,u.prefix=Xe(f,{family:s})):d?u.iconName=d:f!==m.replacementClass&&f!==r[b]&&f!==r[k]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var p=o==="fa"?Bn(u.iconName):{},h=ee(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||h||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!re.far&&re.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},Ct());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===k&&(re.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=ee(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=G()||"fas"),l}var Ka=function(){function e(){ca(this,e),this.definitions={}}return ua(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=c(c({},a.definitions[s]||{}),o[s]),lt(s,o[s]);var l=ge[b][s];l&&lt(l,o[s]),Wn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(function(r){var o=i[r],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];a[s]||(a[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][l]=u}),a}}]),e}(),cn=[],oe={},se={},Qa=Object.keys(se);function Za(e,t){var a=t.mixoutsTo;return cn=e,oe={},Object.keys(se).forEach(function(n){Qa.indexOf(n)===-1&&delete se[n]}),cn.forEach(function(n){var i=n.mixout?n.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(a[o]=i[o]),We(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=i[o][s]})}),n.hooks){var r=n.hooks();Object.keys(r).forEach(function(o){oe[o]||(oe[o]=[]),oe[o].push(r[o])})}n.provides&&n.provides(se)}),a}function ft(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];var r=oe[e]||[];return r.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function ne(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var i=oe[e]||[];i.forEach(function(r){r.apply(null,a)})}function $(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return se[e]?se[e].apply(null,t):void 0}function ct(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||G();if(t)return t=ee(a,t)||t,sn(Un.definitions,a,t)||sn(L.styles,a,t)}var Un=new Ka,ei=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,ne("noAuto")},ti={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(ne("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ja(function(){ai({autoReplaceSvgRoot:a}),ne("watch",t)})}},ni={icon:function(t){if(t===null)return null;if(We(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ee(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Xe(t[0]);return{prefix:n,iconName:ee(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(_a))){var i=Ge(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||G(),iconName:ee(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var r=G();return{prefix:r,iconName:ee(r,t)||t}}}},T={noAuto:ei,config:m,dom:ti,parse:ni,library:Un,findIconDefinition:ct,toHtml:ke},ai=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?y:a;(Object.keys(L.styles).length>0||m.autoFetchSvg)&&Y&&m.autoReplaceSvg&&T.dom.i2svg({node:n})};function qe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return ke(n)})}}),Object.defineProperty(e,"node",{get:function(){if(Y){var n=y.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function ii(e){var t=e.children,a=e.main,n=e.mask,i=e.attributes,r=e.styles,o=e.transform;if(kt(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};i.style=Ve(c(c({},r),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function ri(e){var t=e.prefix,a=e.iconName,n=e.children,i=e.attributes,r=e.symbol,o=r===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},i),{},{id:o}),children:n}]}]}function At(e){var t=e.icons,a=t.main,n=t.mask,i=e.prefix,r=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,h=p===void 0?!1:p,S=n.found?n:a,M=S.width,H=S.height,N=i==="fak",A=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),O={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":i,"data-icon":r,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(H)})},z=N&&!~d.classes.indexOf("fa-fw")?{width:"".concat(M/H*16*.0625,"em")}:{};h&&(O.attributes[te]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||be())},children:[l]}),delete O.attributes.title);var E=c(c({},O),{},{prefix:i,iconName:r,main:a,mask:n,maskId:u,transform:o,symbol:s,styles:c(c({},z),d.styles)}),J=n.found&&a.found?$("generateAbstractMask",E)||{children:[],attributes:{}}:$("generateAbstractIcon",E)||{children:[],attributes:{}},K=J.children,Je=J.attributes;return E.children=K,E.attributes=Je,s?ri(E):ii(E)}function un(e){var t=e.content,a=e.width,n=e.height,i=e.transform,r=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=c(c(c({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(u[te]="");var f=c({},o.styles);kt(i)&&(f.transform=za({transform:i,startCentered:!0,width:a,height:n}),f["-webkit-transform"]=f.transform);var d=Ve(f);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function oi(e){var t=e.content,a=e.title,n=e.extra,i=c(c(c({},n.attributes),a?{title:a}:{}),{},{class:n.classes.join(" ")}),r=Ve(n.styles);r.length>0&&(i.style=r);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var nt=L.styles;function ut(e){var t=e[0],a=e[1],n=e.slice(4),i=vt(n,1),r=i[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Z.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Z.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:a,icon:o}}var si={found:!1,width:512,height:512};function li(e,t){!Tn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function mt(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=G()),new Promise(function(n,i){var r={found:!1,width:512,height:512,icon:$("missingIconAbstract")||{}};if(a==="fa"){var o=Bn(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&nt[t]&&nt[t][e]){var s=nt[t][e];return n(ut(s))}li(e,t),n(c(c({},si),{},{icon:m.showMissingIcons&&e?$("missingIconAbstract")||{}:{}}))})}var mn=function(){},dt=m.measurePerformance&&Me&&Me.mark&&Me.measure?Me:{mark:mn,measure:mn},ue='FA "6.5.1"',fi=function(t){return dt.mark("".concat(ue," ").concat(t," begins")),function(){return Vn(t)}},Vn=function(t){dt.mark("".concat(ue," ").concat(t," ends")),dt.measure("".concat(ue," ").concat(t),"".concat(ue," ").concat(t," begins"),"".concat(ue," ").concat(t," ends"))},St={begin:fi,end:Vn},$e=function(){};function dn(e){var t=e.getAttribute?e.getAttribute(te):null;return typeof t=="string"}function ci(e){var t=e.getAttribute?e.getAttribute(ht):null,a=e.getAttribute?e.getAttribute(bt):null;return t&&a}function ui(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function mi(){if(m.autoReplaceSvg===!0)return Ye.replace;var e=Ye[m.autoReplaceSvg];return e||Ye.replace}function di(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function pi(e){return y.createElement(e)}function Xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?di:pi:a;if(typeof e=="string")return y.createTextNode(e);var i=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var r=e.children||[];return r.forEach(function(o){i.appendChild(Xn(o,{ceFn:n}))}),i}function vi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ye={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(i){a.parentNode.insertBefore(Xn(i),a)}),a.getAttribute(te)===null&&m.keepOriginalSource){var n=y.createComment(vi(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~xt(a).indexOf(m.replacementClass))return Ye.replace(t);var i=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var r=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",r.toNode.join(" "))}var o=n.map(function(s){return ke(s)}).join(`
`);a.setAttribute(te,""),a.innerHTML=o}};function pn(e){e()}function Gn(e,t){var a=typeof t=="function"?t:$e;if(e.length===0)a();else{var n=pn;m.mutateApproach===xa&&(n=X.requestAnimationFrame||pn),n(function(){var i=mi(),r=St.begin("mutate");e.map(i),r(),a()})}}var Ot=!1;function qn(){Ot=!0}function pt(){Ot=!1}var Ue=null;function vn(e){if(nn&&m.observeMutations){var t=e.treeCallback,a=t===void 0?$e:t,n=e.nodeCallback,i=n===void 0?$e:n,r=e.pseudoElementsCallback,o=r===void 0?$e:r,s=e.observeMutationsRoot,l=s===void 0?y:s;Ue=new nn(function(u){if(!Ot){var f=G();fe(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!dn(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&dn(d.target)&&~Oa.indexOf(d.attributeName))if(d.attributeName==="class"&&ci(d.target)){var p=Ge(xt(d.target)),h=p.prefix,S=p.iconName;d.target.setAttribute(ht,h||f),S&&d.target.setAttribute(bt,S)}else ui(d.target)&&i(d.target)})}}),Y&&Ue.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gi(){Ue&&Ue.disconnect()}function hi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,i){var r=i.split(":"),o=r[0],s=r.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function bi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",i=Ge(xt(e));return i.prefix||(i.prefix=G()),t&&a&&(i.prefix=t,i.iconName=a),i.iconName&&i.prefix||(i.prefix&&n.length>0&&(i.iconName=qa(i.prefix,e.innerText)||_t(i.prefix,st(e.innerText))),!i.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function yi(e){var t=fe(e.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),a=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return m.autoA11y&&(a?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(n||be()):(t["aria-hidden"]="true",t.focusable="false")),t}function xi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=bi(e),n=a.iconName,i=a.prefix,r=a.rest,o=yi(e),s=ft("parseNodeAttributes",{},e),l=t.styleParser?hi(e):[];return c({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},s)}var ki=L.styles;function Jn(e){var t=m.autoReplaceSvg==="nest"?gn(e,{styleParser:!1}):gn(e);return~t.extra.classes.indexOf(Mn)?$("generateLayersText",e,t):$("generateSvgReplacementMutation",e,t)}var q=new Set;yt.map(function(e){q.add("fa-".concat(e))});Object.keys(pe[b]).map(q.add.bind(q));Object.keys(pe[k]).map(q.add.bind(q));q=ye(q);function hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var a=y.documentElement.classList,n=function(d){return a.add("".concat(an,"-").concat(d))},i=function(d){return a.remove("".concat(an,"-").concat(d))},r=m.autoFetchSvg?q:yt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(ki));r.includes("fa")||r.push("fa");var o=[".".concat(Mn,":not([").concat(te,"])")].concat(r.map(function(f){return".".concat(f,":not([").concat(te,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=fe(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),i("complete");else return Promise.resolve();var l=St.begin("onTree"),u=s.reduce(function(f,d){try{var p=Jn(d);p&&f.push(p)}catch(h){Tn||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(p){Gn(p,function(){n("active"),n("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(p){l(),d(p)})})}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jn(e).then(function(a){a&&Gn([a],t)})}function _i(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:ct(t||{}),i=a.mask;return i&&(i=(i||{}).icon?i:ct(i||{})),e(n,c(c({},a),{},{mask:i}))}}var Ci=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,i=n===void 0?D:n,r=a.symbol,o=r===void 0?!1:r,s=a.mask,l=s===void 0?null:s,u=a.maskId,f=u===void 0?null:u,d=a.title,p=d===void 0?null:d,h=a.titleId,S=h===void 0?null:h,M=a.classes,H=M===void 0?[]:M,N=a.attributes,A=N===void 0?{}:N,O=a.styles,z=O===void 0?{}:O;if(t){var E=t.prefix,J=t.iconName,K=t.icon;return qe(c({type:"icon"},t),function(){return ne("beforeDOMElementCreation",{iconDefinition:t,params:a}),m.autoA11y&&(p?A["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||be()):(A["aria-hidden"]="true",A.focusable="false")),At({icons:{main:ut(K),mask:l?ut(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:J,transform:c(c({},D),i),symbol:o,title:p,maskId:f,titleId:S,extra:{attributes:A,styles:z,classes:H}})})}},Ai={mixout:function(){return{icon:_i(Ci)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=hn,a.nodeCallback=wi,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,i=n===void 0?y:n,r=a.callback,o=r===void 0?function(){}:r;return hn(i,o)},t.generateSvgReplacementMutation=function(a,n){var i=n.iconName,r=n.title,o=n.titleId,s=n.prefix,l=n.transform,u=n.symbol,f=n.mask,d=n.maskId,p=n.extra;return new Promise(function(h,S){Promise.all([mt(i,s),f.iconName?mt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var H=vt(M,2),N=H[0],A=H[1];h([a,At({icons:{main:N,mask:A},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:r,titleId:o,extra:p,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(a){var n=a.children,i=a.attributes,r=a.main,o=a.transform,s=a.styles,l=Ve(s);l.length>0&&(i.style=l);var u;return kt(o)&&(u=$("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:i}}}},Si={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.classes,r=i===void 0?[]:i;return qe({type:"layer"},function(){ne("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ye(r)).join(" ")},children:o}]})}}}},Oi={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.title,r=i===void 0?null:i,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,f=n.styles,d=f===void 0?{}:f;return qe({type:"counter",content:a},function(){return ne("beforeDOMElementCreation",{content:a,params:n}),oi({content:a.toString(),title:r,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ye(s))}})})}}}},Ii={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?D:i,o=n.title,s=o===void 0?null:o,l=n.classes,u=l===void 0?[]:l,f=n.attributes,d=f===void 0?{}:f,p=n.styles,h=p===void 0?{}:p;return qe({type:"text",content:a},function(){return ne("beforeDOMElementCreation",{content:a,params:n}),un({content:a,transform:c(c({},D),r),title:s,extra:{attributes:d,styles:h,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ye(u))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var i=n.title,r=n.transform,o=n.extra,s=null,l=null;if(In){var u=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();s=f.width/u,l=f.height/u}return m.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,un({content:a.innerHTML,width:s,height:l,transform:r,title:i,extra:o,watchable:!0})])}}},Pi=new RegExp('"',"ug"),bn=[1105920,1112319];function Ei(e){var t=e.replace(Pi,""),a=Wa(t,0),n=a>=bn[0]&&a<=bn[1],i=t.length===2?t[0]===t[1]:!1;return{value:st(i?t[0]:t),isSecondary:n||i}}function yn(e,t){var a="".concat(ya).concat(t.replace(":","-"));return new Promise(function(n,i){if(e.getAttribute(a)!==null)return n();var r=fe(e.children),o=r.filter(function(K){return K.getAttribute(ot)===t})[0],s=X.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ca),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),n();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?k:b,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ve[p][l[2].toLowerCase()]:Aa[p][u],S=Ei(d),M=S.value,H=S.isSecondary,N=l[0].startsWith("FontAwesome"),A=_t(h,M),O=A;if(N){var z=Ja(M);z.iconName&&z.prefix&&(A=z.iconName,h=z.prefix)}if(A&&!H&&(!o||o.getAttribute(ht)!==h||o.getAttribute(bt)!==O)){e.setAttribute(a,O),o&&e.removeChild(o);var E=xi(),J=E.extra;J.attributes[ot]=t,mt(A,h).then(function(K){var Je=At(c(c({},E),{},{icons:{main:K,mask:Ct()},prefix:h,iconName:O,extra:J,watchable:!0})),W=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(W,e.firstChild):e.appendChild(W),W.outerHTML=Je.map(function(sa){return ke(sa)}).join(`
`),e.removeAttribute(a),n()}).catch(i)}else n()}else n()})}function Ti(e){return Promise.all([yn(e,"::before"),yn(e,"::after")])}function Mi(e){return e.parentNode!==document.head&&!~ka.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ot)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xn(e){if(Y)return new Promise(function(t,a){var n=fe(e.querySelectorAll("*")).filter(Mi).map(Ti),i=St.begin("searchPseudoElements");qn(),Promise.all(n).then(function(){i(),pt(),t()}).catch(function(){i(),pt(),a()})})}var Hi={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=xn,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,i=n===void 0?y:n;m.searchPseudoElements&&xn(i)}}},kn=!1,Li={mixout:function(){return{dom:{unwatch:function(){qn(),kn=!0}}}},hooks:function(){return{bootstrap:function(){vn(ft("mutationObserverCallbacks",{}))},noAuto:function(){gi()},watch:function(a){var n=a.observeMutationsRoot;kn?pt():vn(ft("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},wn=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,i){var r=i.toLowerCase().split("-"),o=r[0],s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},Ni={mixout:function(){return{parse:{transform:function(a){return wn(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-transform");return i&&(a.transform=wn(i)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,i=a.transform,r=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:d,path:p};return{tag:"g",attributes:c({},h.outer),children:[{tag:"g",attributes:c({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),h.path)}]}]}}}},at={x:0,y:0,width:"100%",height:"100%"};function _n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zi(e){return e.tag==="g"?e.children:[e]}var Fi={hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-mask"),r=i?Ge(i.split(" ").map(function(o){return o.trim()})):Ct();return r.prefix||(r.prefix=G()),a.mask=r,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,i=a.attributes,r=a.main,o=a.mask,s=a.maskId,l=a.transform,u=r.width,f=r.icon,d=o.width,p=o.icon,h=Na({transform:l,containerWidth:d,iconWidth:u}),S={tag:"rect",attributes:c(c({},at),{},{fill:"white"})},M=f.children?{children:f.children.map(_n)}:{},H={tag:"g",attributes:c({},h.inner),children:[_n(c({tag:f.tag,attributes:c(c({},f.attributes),h.path)},M))]},N={tag:"g",attributes:c({},h.outer),children:[H]},A="mask-".concat(s||be()),O="clip-".concat(s||be()),z={tag:"mask",attributes:c(c({},at),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,N]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:zi(p)},z]};return n.push(E,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(A,")")},at)}),{children:n,attributes:i}}}},Di={provides:function(t){var a=!1;X.matchMedia&&(a=X.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:c(c({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:c(c({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ri={hooks:function(){return{parseNodeAttributes:function(a,n){var i=n.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return a.symbol=r,a}}}},ji=[Da,Ai,Si,Oi,Ii,Hi,Li,Ni,Fi,Di,Ri];Za(ji,{mixoutsTo:T});var cr=T.noAuto,ur=T.config,mr=T.library,dr=T.dom,Kn=T.parse,pr=T.findIconDefinition,vr=T.toHtml,Qn=T.icon,gr=T.layer,$i=T.text,Yi=T.counter;var Wi=["*"],Bi=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},Ui=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Vi=e=>{let t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:e.rotate!==null,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(a=>t[a]?a:null).filter(a=>a)},Xi=e=>e.prefix!==void 0&&e.iconName!==void 0,Gi=(e,t)=>Xi(e)?e:typeof e=="string"?{prefix:t,iconName:e}:{prefix:e[0],iconName:e[1]},qi=(()=>{let t=class t{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=Ke({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Ji=(()=>{let t=class t{constructor(){this.definitions={}}addIcons(...n){for(let i of n){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let r of i.icon[2])typeof r=="string"&&(this.definitions[i.prefix][r]=i)}}addIconPacks(...n){for(let i of n){let r=Object.keys(i).map(o=>i[o]);this.addIcons(...r)}}getIconDefinition(n,i){return n in this.definitions&&i in this.definitions[n]?this.definitions[n][i]:null}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=Ke({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Ki=(()=>{let t=class t{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=Pt({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Ce]});let e=t;return e})(),Qi=(()=>{let t=class t{constructor(n,i){this.renderer=n,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}};t.\u0275fac=function(i){return new(i||t)(B(Ht),B(Et))},t.\u0275cmp=I({type:t,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Ce,Qe],ngContentSelectors:Wi,decls:1,vars:0,template:function(i,r){i&1&&(zt(),Ft(0))},encapsulation:2});let e=t;return e})(),ce=(()=>{let t=class t{set spin(n){this.animation=n?"spin":void 0}set pulse(n){this.animation=n?"spin-pulse":void 0}constructor(n,i,r,o,s){this.sanitizer=n,this.config=i,this.iconLibrary=r,this.stackItem=o,this.classes=[],s!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){Ui();return}if(n){let i=this.icon!=null?this.icon:this.config.fallbackIcon,r=this.findIconDefinition(i);if(r!=null){let o=this.buildParams();this.renderIcon(r,o)}}}render(){this.ngOnChanges({})}findIconDefinition(n){let i=Gi(n,this.config.defaultPrefix);if("icon"in i)return i;let r=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return r??(Bi(i),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?Kn.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:[...Vi(n),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(n,i){let r=Qn(n,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}};t.\u0275fac=function(i){return new(i||t)(B(jt),B(qi),B(Ji),B(Ki,8),B(Qi,8))},t.\u0275cmp=I({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,r){i&2&&(Nt("innerHTML",r.renderedIconHTML,Tt),Lt("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Ce,Qe],decls:0,vars:0,template:function(i,r){},encapsulation:2});let e=t;return e})();var Zn=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=_e({type:t}),t.\u0275inj=we({});let e=t;return e})();function Zi(e,t){if(e&1){let a=Oe();v(0,"div",8),Ie("click",function(){let i=Ae(a).$implicit,r=Pe();return Se(r.openLink(i.url))}),_(1,"fa-icon",6),g()}if(e&2){let a=t.$implicit;P("title",a.name),w(),P("icon",a.icon)}}var ta=(()=>{let t=class t{constructor(){this.faCode=Ee,this.links=Te,this.stringTranslation=U}invokeParticles(){particlesJS("particles-js",Jt,function(){})}openLink(n){window.open(n,"_blank")}ngOnInit(){this.invokeParticles()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=I({type:t,selectors:[["home-landing"]],decls:14,vars:4,consts:[[1,"HomeLanding"],[1,"HomeLanding__Content"],[1,"HomeLanding__Text"],[1,"HomeLanding__Links"],["class","HomeLanding__Link",3,"title","click",4,"ngFor","ngForOf"],[1,"HomeLanding__Icon"],[3,"icon"],["id","particles-js",1,"HomeLanding__Background"],[1,"HomeLanding__Link",3,"click","title"]],template:function(i,r){i&1&&(v(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),x(4,"Hi, I'am"),g(),v(5,"h1"),x(6),g(),v(7,"h2"),x(8),g(),v(9,"div",3),ae(10,Zi,2,2,"div",4),g()(),v(11,"div",5),_(12,"fa-icon",6),g()(),_(13,"div",7),g()),i&2&&(w(6),F(r.stringTranslation.name),w(2),F(r.stringTranslation.web_developer),w(2),P("ngForOf",r.links),w(2),P("icon",r.faCode))},dependencies:[ie,ce],styles:[".HomeLanding[_ngcontent-%COMP%]{height:100vh}.HomeLanding__Background[_ngcontent-%COMP%]{width:100%;height:100vh;position:absolute;top:0;z-index:1}.HomeLanding__Content[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;height:100%;position:absolute;top:0;z-index:2;padding:20% 10%}.HomeLanding__Content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(24px,6vw,28px);color:#fff}.HomeLanding__Content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(32px,8vw,62px);color:#f55;font-weight:500}.HomeLanding__Content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(28px,6vw,36px);color:#fff;font-style:italic}.HomeLanding__Icon[_ngcontent-%COMP%]{font-size:280px;margin:auto;width:40%;color:#f55;text-align:center}.HomeLanding__Text[_ngcontent-%COMP%]{margin:auto;width:60%}.HomeLanding__Links[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1.5rem;margin-top:2rem}.HomeLanding__Link[_ngcontent-%COMP%]{background-color:#f55;width:4rem;height:4rem;font-size:24px;color:#fff;border-radius:50%;display:flex;justify-content:center;align-items:center}.HomeLanding__Link[_ngcontent-%COMP%]:hover{cursor:pointer}@media only screen and (max-width: 1100px){.HomeLanding__Icon[_ngcontent-%COMP%]{display:none}.HomeLanding__Text[_ngcontent-%COMP%]{width:100%}}"]});let e=t;return e})();function tr(e,t){if(e&1&&(v(0,"div",4),_(1,"fa-icon",5),v(2,"div",6),x(3),g()()),e&2){let a=t.$implicit;w(),P("icon",a.icon),w(2),F(a.name)}}var na=(()=>{let t=class t{constructor(){this.items=[{icon:Yt,name:"Angular"},{icon:Wt,name:"Bootstrap"},{icon:Bt,name:"HTML5"},{icon:Ut,name:"Scss/Css"},{icon:Vt,name:"Javascript"},{icon:Gt,name:"NodeJs"},{icon:Xt,name:"PHP"},{icon:Ee,name:"VS Code"},{icon:Ze,name:"MySql"},{icon:Ze,name:"MSSql"}],this.stringTranslation=U}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=I({type:t,selectors:[["home-tech"]],decls:5,vars:2,consts:[[1,"HomeTech"],[1,"HomeTech__Title"],[1,"HomeTech__Content"],["class","HomeTech__Item",4,"ngFor","ngForOf"],[1,"HomeTech__Item"],[3,"icon"],[1,"HomeTech__ItemLabel"]],template:function(i,r){i&1&&(v(0,"div",0)(1,"div",1),x(2),g(),v(3,"div",2),ae(4,tr,4,2,"div",3),g()()),i&2&&(w(2),F(r.stringTranslation.technologies),w(2),P("ngForOf",r.items))},dependencies:[ie,ce],styles:[".HomeTech[_ngcontent-%COMP%]{max-width:100%;height:100vh;margin:auto;padding:15rem 10%;background-color:#272727}.HomeTech__Title[_ngcontent-%COMP%]{text-align:center;font-size:31.36px;color:#f55}.HomeTech__Content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(8,1fr);gap:2rem;margin-top:5rem}.HomeTech__Item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:84px;margin:auto;color:#fff;border-radius:10px}.HomeTech__ItemLabel[_ngcontent-%COMP%]{font-size:16px}@media only screen and (max-width: 1100px){.HomeTech__Content[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}"]});let e=t;return e})();function ar(e,t){if(e&1){let a=Oe();v(0,"span",4),Ie("click",function(){let i=Ae(a).$implicit,r=Pe();return Se(r.openLink(i.url))}),_(1,"fa-icon",5),g()}if(e&2){let a=t.$implicit;P("title",a.name),w(),P("icon",a.icon)}}var aa=(()=>{let t=class t{constructor(){this.links=Te,this.stringTranslation=U}openLink(n){window.open(n,"_blank")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=I({type:t,selectors:[["home-footer"]],decls:5,vars:2,consts:[[1,"HomeFooter"],[1,"HomeFooter__Details"],[1,"HomeFooter__Links"],["class","HomeFooter__Link",3,"title","click",4,"ngFor","ngForOf"],[1,"HomeFooter__Link",3,"click","title"],[3,"icon"]],template:function(i,r){i&1&&(v(0,"div",0)(1,"div",1),x(2),g(),v(3,"div",2),ae(4,ar,2,2,"span",3),g()()),i&2&&(w(2),Dt("\xA9 2024 ",r.stringTranslation.name,""),w(2),P("ngForOf",r.links))},dependencies:[ie,ce],styles:[".HomeFooter[_ngcontent-%COMP%]{width:100%;height:10rem;background-color:#222;display:flex;flex-direction:row;align-items:center;border-top:2px solid #ff5555}.HomeFooter__Details[_ngcontent-%COMP%]{color:#fff;margin-left:5rem}.HomeFooter__Links[_ngcontent-%COMP%]{display:flex;gap:2rem;margin-left:auto;margin-right:5rem;color:#fff;font-size:28px}.HomeFooter__Link[_ngcontent-%COMP%]:hover{cursor:pointer}"]});let e=t;return e})();var ia=(()=>{let t=class t{constructor(){this.imgUrl="assets/image/myImage.jpg"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=I({type:t,selectors:[["home-about"]],decls:24,vars:1,consts:[[1,"HomeAbout"],[1,"HomeAbout__Container"],[1,"HomeAbout__Image"],["alt","","srcset","",3,"src"],[1,"HomeAbout__Description"],[1,"HomeAbout__Title"],[1,"TextHighlight"]],template:function(i,r){i&1&&(v(0,"div",0)(1,"div",1)(2,"div",2),_(3,"img",3),g(),v(4,"div",4)(5,"div",5),x(6,"About Me"),g(),v(7,"p"),x(8," Hi! I'm "),v(9,"span",6),x(10,"John Ivan A. Fajardo"),g(),x(11," a dedicated web developer with over 5 years of experience, focused on creating intuitive and user-friendly web applications. "),_(12,"br")(13,"br"),x(14," Close collaboration with design teams ensures seamless digital experiences that look great and function flawlessly. "),_(15,"br")(16,"br"),x(17," Specializing in building responsive websites that perform well on any device, adapting smoothly to different screen sizes. "),_(18,"br")(19,"br"),x(20," Staying up-to-date with the latest trends and technologies helps maintain high standards of clean, efficient, and reliable code. "),_(21,"br")(22,"br"),x(23," Thank you for visiting this portfolio, looking forward to the possibility of working together! "),g()()()()),i&2&&(w(3),P("src",r.imgUrl,Mt))},styles:[".HomeAbout[_ngcontent-%COMP%]{background-color:#5a5a5a;max-width:100%;margin:auto;padding:15rem 15%;height:100vh}.HomeAbout__Title[_ngcontent-%COMP%]{text-align:center;font-size:31.36px;color:#f55;margin-bottom:2rem}.HomeAbout__Description[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;font-size:20px;color:#fff;text-align:justify;width:100%;height:100%;margin-left:2rem}.HomeAbout__Image[_ngcontent-%COMP%]{width:100%}.HomeAbout__Image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-height:600px;border-radius:2rem}.HomeAbout__Container[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%}.TextHighlight[_ngcontent-%COMP%]{color:#f55;font-weight:500}@media only screen and (max-width: 1100px){.HomeAbout__Image[_ngcontent-%COMP%]{display:none}.HomeAbout__Title[_ngcontent-%COMP%]{width:100%}}"]});let e=t;return e})();var ra=(()=>{let t=class t{resetSlider(){document.querySelector("#slider-landing")?.classList.remove("Active"),document.querySelector("#slider-about")?.classList.remove("Active"),document.querySelector("#slider-technologies")?.classList.remove("Active")}ngOnInit(){document.addEventListener("scroll",n=>{console.log(window.scrollY),window.scrollY<911?(this.resetSlider(),document.querySelector("#slider-landing").classList.add("Active")):window.scrollY<1491?(this.resetSlider(),document.querySelector("#slider-about").classList.add("Active")):window.scrollY<2091&&(this.resetSlider(),document.querySelector("#slider-technologies").classList.add("Active"))})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=I({type:t,selectors:[["ng-component"]],decls:15,vars:0,consts:[[1,"Home"],[1,"Home__Slider"],["id","slider-landing","href","#HomeLanding",1,"Home__SliderCircle"],["id","slider-about","href","#HomeAbout",1,"Home__SliderCircle"],["id","slider-technologies","href","#HomeTechnologies",1,"Home__SliderCircle"],["id","HomeHeader",1,"Home__Header"],["id","HomeLanding",1,"Home__Landing"],["id","HomeAbout",1,"Home__About"],["id","HomeTechnologies",1,"Home__Technologies"],[1,"Home__Footer"]],template:function(i,r){i&1&&(v(0,"div",0)(1,"div",1),_(2,"a",2)(3,"a",3)(4,"a",4),g(),v(5,"header",5),_(6,"home-header"),g(),v(7,"section",6),_(8,"home-landing"),g(),v(9,"section",7),_(10,"home-about"),g(),v(11,"section",8),_(12,"home-tech"),g(),v(13,"footer",9),_(14,"home-footer"),g()())},dependencies:[qt,ta,na,aa,ia],styles:[".Home[_ngcontent-%COMP%]{background:linear-gradient(#404040,#0d0d0d);height:100%;font-size:16px}.Home__Slider[_ngcontent-%COMP%]{position:fixed;top:50%;right:5rem;display:flex;flex-direction:column;gap:2rem;opacity:50%;z-index:3}.Home__SliderCircle[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;width:1rem;height:1rem}.Home__SliderCircle.Active[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;background-color:#f55}.Home__Header[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;z-index:100}@media only screen and (max-width: 1100px){.Home__Header[_ngcontent-%COMP%]{display:none}}"]});let e=t;return e})();var oa=[{path:"",component:ra}];var Kr=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=_e({type:t}),t.\u0275inj=we({imports:[Rt,$t.forChild(oa),Zn]});let e=t;return e})();export{Kr as HomeModule};
