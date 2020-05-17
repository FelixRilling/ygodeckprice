(function(t){function e(e){for(var r,a,u=e[0],c=e[1],s=e[2],p=0,l=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={tooltip:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var f=c;i.push([1,"common"]),n()})({1:function(t,e,n){t.exports=n("647d")},"647d":function(t,e,n){"use strict";n.r(e);n("a79d"),n("fcc1");var r=n("0c51");const o=r["n"].createChild(),i=Object.assign({},r["m"]);n("ddb0");var a=n("f2af");const u=o.get(i.PriceService),c=(t,e)=>{const n=document.createElement(e);return t.forEach(t=>n.classList.add(t)),n},s=(t,e)=>{const n=c(t,"div");return e.forEach(t=>n.appendChild(t)),n},f=(t,e)=>{const n=c(t,"ul");return e.forEach(t=>n.appendChild(t)),n},p=(t,e)=>{const n=c(t,"li");return n.textContent=e,n},l=(t,e)=>{const n=c(t,"span");return n.textContent=e,n},d=(t,e)=>{const n=c(t,"p");return n.textContent=e,n},h=(t,e)=>{const n=c(t,"img");return n.src=e,n},v=()=>s(["card-tooltip__content","card-tooltip__content--loading"],[s(["card-tooltip__loading"],[l(["fas","fa-spinner","fa-spin"],""),l([],"Loading...")])]),y=t=>s(["card-tooltip__content","card-tooltip__content--error"],[s(["card-tooltip__error"],[l(["fas","fa-times"],""),l([],t)])]),m=t=>{const e=[],n=h([],Object(a["b"])());return e.push(n),null!=t.atk&&e.push(l([],"ATK/ "+t.atk)),null!=t.def?e.push(l([],"DEF/ "+t.def)):null!=t.linkRating&&e.push(l([],"LINK-"+t.linkRating)),s(["card-tooltip__stats"],e)},g=t=>{const e=[];return t.type.group===r["a"].MONSTER&&(e.push(h([],Object(a["c"])(t))),e.push(l([],"Attribute: "+t.attribute))),e.push(h([],Object(a["g"])(t))),e.push(l([],"Type: "+t.subType)),s(["card-tooltip__subtype"],e)},b=t=>{const e=[];for(const n of r["e"]){const r=u.getPrice([t],n,null);if(r.missing.length>0)continue;const o=p(["card-tooltip__price__vendor","card-tooltip__price__vendor--"+n.id],`${n.name}: ${u.formatPrice(r.price,n.currency)}`);e.push(o)}return f(["card-tooltip__price"],e)},w=t=>s(["card-tooltip__description"],t.description.split("\n").map(t=>d([],t))),_=t=>{const e=[],n=s(["card-tooltip__details"],[h([],Object(a["h"])(t)),l(["card-tooltip__name"],t.name),h([],Object(a["d"])(t,r["i"].TCG))]);if(e.push(n),t.type.group===r["a"].MONSTER&&e.push(m(t)),t.type.group!==r["a"].SKILL&&e.push(g(t)),t.type.group===r["a"].MONSTER)if(null!=t.level){const n=s(["card-tooltip__level"],[h([],Object(a["e"])()),l([],"Level/Rank: "+t.level)]);e.push(n)}else if(null!=t.linkMarkers){const n=s(["card-tooltip__link-markers"],[h([],Object(a["f"])()),l([],"Link Markers: "+t.linkMarkers.join(", "))]);e.push(n)}return e.push(w(t)),e.push(b(t)),s(["card-tooltip__details__col"],e)},O=t=>{var e,n;const r=h(["card-tooltip__image"],null!==(e=null===(n=t.image)||void 0===n?void 0:n.url)&&void 0!==e?e:"#");return s(["card-tooltip__image__col"],[r])},x=t=>s(["card-tooltip"],[s(["card-tooltip__content"],[_(t),O(t)])]),E=o.get(i.CardService),j=()=>navigator.maxTouchPoints>0,k=t=>{var e;const n=null===(e=t.attributes.getNamedItem("href"))||void 0===e?void 0:e.value;return null==n||""===n},M=(t,e)=>{!j()&&k(t)&&(t.href=E.getReferenceLink(e),t.target="_blank")};var T=n("2332"),P=n("26ee"),L=function(){return P["a"].Date.now()},S=L,A=n("4a24"),D="Expected a function",C=Math.max,R=Math.min;function B(t,e,n){var r,o,i,a,u,c,s=0,f=!1,p=!1,l=!0;if("function"!=typeof t)throw new TypeError(D);function d(e){var n=r,i=o;return r=o=void 0,s=e,a=t.apply(i,n),a}function h(t){return s=t,u=setTimeout(m,e),f?d(t):a}function v(t){var n=t-c,r=t-s,o=e-n;return p?R(o,i-r):o}function y(t){var n=t-c,r=t-s;return void 0===c||n>=e||n<0||p&&r>=i}function m(){var t=S();if(y(t))return g(t);u=setTimeout(m,v(t))}function g(t){return u=void 0,l&&r?d(t):(r=o=void 0,a)}function b(){void 0!==u&&clearTimeout(u),s=0,r=c=o=u=void 0}function w(){return void 0===u?a:g(S())}function _(){var t=S(),n=y(t);if(r=arguments,o=this,c=t,n){if(void 0===u)return h(c);if(p)return clearTimeout(u),u=setTimeout(m,e),d(c)}return void 0===u&&(u=setTimeout(m,e)),a}return e=Object(A["a"])(e)||0,Object(T["a"])(n)&&(f=!!n.leading,p="maxWait"in n,i=p?C(Object(A["a"])(n.maxWait)||0,e):i,l="trailing"in n?!!n.trailing:l),_.cancel=b,_.flush=w,_}var W=B;function I(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function N(t){if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e?e.defaultView:window}return t}function H(t){var e=N(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function U(t){var e=N(t).Element;return t instanceof e||t instanceof Element}function K(t){var e=N(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function V(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function q(t){return t!==N(t)&&K(t)?V(t):H(t)}function z(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){return(U(t)?t.ownerDocument:t.document).documentElement}function $(t){return I(F(t)).left+H(t).scrollLeft}function Y(t){return N(t).getComputedStyle(t)}function J(t){var e=Y(t),n=e.overflow,r=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function X(t,e,n){void 0===n&&(n=!1);var r=F(e),o=I(t),i={scrollLeft:0,scrollTop:0},a={x:0,y:0};return n||(("body"!==z(e)||J(r))&&(i=q(e)),K(e)?(a=I(e),a.x+=e.clientLeft,a.y+=e.clientTop):r&&(a.x=$(r))),{x:o.left+i.scrollLeft-a.x,y:o.top+i.scrollTop-a.y,width:o.width,height:o.height}}function G(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function Q(t){return"html"===z(t)?t:t.assignedSlot||t.parentNode||t.host||F(t)}function Z(t){return["html","body","#document"].indexOf(z(t))>=0?t.ownerDocument.body:K(t)&&J(t)?t:Z(Q(t))}function tt(t,e){void 0===e&&(e=[]);var n=Z(t),r="body"===z(n),o=N(n),i=r?[o].concat(o.visualViewport||[],J(n)?n:[]):n,a=e.concat(i);return r?a:a.concat(tt(Q(i)))}function et(t){return["table","td","th"].indexOf(z(t))>=0}function nt(t){return K(t)&&"fixed"!==Y(t).position?t.offsetParent:null}function rt(t){var e=N(t),n=nt(t);while(n&&et(n))n=nt(n);return n&&"body"===z(n)&&"static"===Y(n).position?e:n||e}var ot="top",it="bottom",at="right",ut="left",ct="auto",st=[ot,it,at,ut],ft="start",pt="end",lt="clippingParents",dt="viewport",ht="popper",vt="reference",yt=st.reduce((function(t,e){return t.concat([e+"-"+ft,e+"-"+pt])}),[]),mt=[].concat(st,[ct]).reduce((function(t,e){return t.concat([e,e+"-"+ft,e+"-"+pt])}),[]),gt="beforeRead",bt="read",wt="afterRead",_t="beforeMain",Ot="main",xt="afterMain",Et="beforeWrite",jt="write",kt="afterWrite",Mt=[gt,bt,wt,_t,Ot,xt,Et,jt,kt];function Tt(t){var e=new Map,n=new Set,r=[];function o(t){n.add(t.name);var i=[].concat(t.requires||[],t.requiresIfExists||[]);i.forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),r}function Pt(t){var e=Tt(t);return Mt.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}function Lt(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}function St(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,{},e,{options:Object.assign({},n.options,{},e.options),data:Object.assign({},n.data,{},e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}var At={placement:"bottom",modifiers:[],strategy:"absolute"};function Dt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function Ct(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,o=e.defaultOptions,i=void 0===o?At:o;return function(t,e,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},At,{},i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},a=[],u=!1,c={state:o,setOptions:function(n){f(),o.options=Object.assign({},i,{},o.options,{},n),o.scrollParents={reference:U(t)?tt(t):t.contextElement?tt(t.contextElement):[],popper:tt(e)};var a=Pt(St([].concat(r,o.options.modifiers)));return o.orderedModifiers=a.filter((function(t){return t.enabled})),s(),c.update()},forceUpdate:function(){if(!u){var t=o.elements,e=t.reference,n=t.popper;if(Dt(e,n)){o.rects={reference:X(e,rt(n),"fixed"===o.options.strategy),popper:G(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(t){return o.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,f=void 0===s?{}:s,p=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:p,instance:c})||o)}else o.reset=!1,r=-1}}},update:Lt((function(){return new Promise((function(t){c.forceUpdate(),t(o)}))})),destroy:function(){f(),u=!0}};if(!Dt(t,e))return c;function s(){o.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,i=t.effect;if("function"===typeof i){var u=i({state:o,name:e,instance:c,options:r}),s=function(){};a.push(u||s)}}))}function f(){a.forEach((function(t){return t()})),a=[]}return c.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var Rt={passive:!0};function Bt(t){var e=t.state,n=t.instance,r=t.options,o=r.scroll,i=void 0===o||o,a=r.resize,u=void 0===a||a,c=N(e.elements.popper),s=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&s.forEach((function(t){t.addEventListener("scroll",n.update,Rt)})),u&&c.addEventListener("resize",n.update,Rt),function(){i&&s.forEach((function(t){t.removeEventListener("scroll",n.update,Rt)})),u&&c.removeEventListener("resize",n.update,Rt)}}var Wt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bt,data:{}};function It(t){return t.split("-")[0]}function Nt(t){return t.split("-")[1]}function Ht(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ut(t){var e,n=t.reference,r=t.element,o=t.placement,i=o?It(o):null,a=o?Nt(o):null,u=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case ot:e={x:u,y:n.y-r.height};break;case it:e={x:u,y:n.y+n.height};break;case at:e={x:n.x+n.width,y:c};break;case ut:e={x:n.x-r.width,y:c};break;default:e={x:n.x,y:n.y}}var s=i?Ht(i):null;if(null!=s){var f="y"===s?"height":"width";switch(a){case ft:e[s]=Math.floor(e[s])-Math.floor(n[f]/2-r[f]/2);break;case pt:e[s]=Math.floor(e[s])+Math.ceil(n[f]/2-r[f]/2);break;default:}}return e}function Kt(t){var e=t.state,n=t.name;e.modifiersData[n]=Ut({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Vt={name:"popperOffsets",enabled:!0,phase:"read",fn:Kt,data:{}},qt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zt(t){var e=t.x,n=t.y,r=window,o=r.devicePixelRatio||1;return{x:Math.round(e*o)/o||0,y:Math.round(n*o)/o||0}}function Ft(t){var e,n=t.popper,r=t.popperRect,o=t.placement,i=t.offsets,a=t.position,u=t.gpuAcceleration,c=t.adaptive,s=zt(i),f=s.x,p=s.y,l=i.hasOwnProperty("x"),d=i.hasOwnProperty("y"),h=ut,v=ot,y=window;if(c){var m=rt(n);m===N(n)&&(m=F(n)),o===ot&&(v=it,p-=m.clientHeight-r.height,p*=u?1:-1),o===ut&&(h=at,f-=m.clientWidth-r.width,f*=u?1:-1)}var g,b=Object.assign({position:a},c&&qt);return u?Object.assign({},b,(g={},g[v]=d?"0":"",g[h]=l?"0":"",g.transform=(y.devicePixelRatio||1)<2?"translate("+f+"px, "+p+"px)":"translate3d("+f+"px, "+p+"px, 0)",g)):Object.assign({},b,(e={},e[v]=d?p+"px":"",e[h]=l?f+"px":"",e.transform="",e))}function $t(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,u={placement:It(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,{},Ft(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,{},Ft(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Yt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:$t,data:{}};function Jt(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},o=e.elements[t];K(o)&&z(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))}function Xt(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],o=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]),a=i.reduce((function(t,e){return t[e]="",t}),{});K(r)&&z(r)&&(Object.assign(r.style,a),Object.keys(o).forEach((function(t){r.removeAttribute(t)})))}))}}var Gt={name:"applyStyles",enabled:!0,phase:"write",fn:Jt,effect:Xt,requires:["computeStyles"]};function Qt(t,e,n){var r=It(t),o=[ut,ot].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},e,{placement:t})):n,a=i[0],u=i[1];return a=a||0,u=(u||0)*o,[ut,at].indexOf(r)>=0?{x:u,y:a}:{x:a,y:u}}function Zt(t){var e=t.state,n=t.options,r=t.name,o=n.offset,i=void 0===o?[0,0]:o,a=mt.reduce((function(t,n){return t[n]=Qt(n,e.rects,i),t}),{}),u=a[e.placement],c=u.x,s=u.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=s),e.modifiersData[r]=a}var te={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Zt},ee={left:"right",right:"left",bottom:"top",top:"bottom"};function ne(t){return t.replace(/left|right|bottom|top/g,(function(t){return ee[t]}))}var re={start:"end",end:"start"};function oe(t){return t.replace(/start|end/g,(function(t){return re[t]}))}function ie(t){var e=N(t),n=e.visualViewport,r=e.innerWidth,o=e.innerHeight;return n&&/iPhone|iPod|iPad/.test(navigator.platform)&&(r=n.width,o=n.height),{width:r,height:o,x:0,y:0}}function ae(t){var e=N(t),n=H(t),r=X(F(t),e);return r.height=Math.max(r.height,e.innerHeight),r.width=Math.max(r.width,e.innerWidth),r.x=-n.scrollLeft,r.y=-n.scrollTop,r}function ue(t){return parseFloat(t)||0}function ce(t){var e=K(t)?Y(t):{};return{top:ue(e.borderTopWidth),right:ue(e.borderRightWidth),bottom:ue(e.borderBottomWidth),left:ue(e.borderLeftWidth)}}function se(t){var e=N(t),n=ce(t),r="html"===z(t),o=$(t),i=t.clientWidth+n.right,a=t.clientHeight+n.bottom;return r&&e.innerHeight-t.clientHeight>50&&(a=e.innerHeight-n.bottom),{top:r?0:t.clientTop,right:t.clientLeft>n.left?n.right:r?e.innerWidth-i-o:t.offsetWidth-i,bottom:r?e.innerHeight-a:t.offsetHeight-a,left:r?o:t.clientLeft}}function fe(t,e){var n=Boolean(e.getRootNode&&e.getRootNode().host);if(t.contains(e))return!0;if(n){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function pe(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function le(t,e){return e===dt?pe(ie(t)):K(e)?I(e):pe(ae(F(t)))}function de(t){var e=tt(t),n=["absolute","fixed"].indexOf(Y(t).position)>=0,r=n&&K(t)?rt(t):t;return U(r)?e.filter((function(t){return U(t)&&fe(t,r)})):[]}function he(t,e,n){var r="clippingParents"===e?de(t):[].concat(e),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(e,n){var r=le(t,n),o=se(K(n)?n:F(t));return e.top=Math.max(r.top+o.top,e.top),e.right=Math.min(r.right-o.right,e.right),e.bottom=Math.min(r.bottom-o.bottom,e.bottom),e.left=Math.max(r.left+o.left,e.left),e}),le(t,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ve(){return{top:0,right:0,bottom:0,left:0}}function ye(t){return Object.assign({},ve(),{},t)}function me(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function ge(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=void 0===r?t.placement:r,i=n.boundary,a=void 0===i?lt:i,u=n.rootBoundary,c=void 0===u?dt:u,s=n.elementContext,f=void 0===s?ht:s,p=n.altBoundary,l=void 0!==p&&p,d=n.padding,h=void 0===d?0:d,v=ye("number"!==typeof h?h:me(h,st)),y=f===ht?vt:ht,m=t.elements.reference,g=t.rects.popper,b=t.elements[l?y:f],w=he(U(b)?b:b.contextElement||F(t.elements.popper),a,c),_=I(m),O=Ut({reference:_,element:g,strategy:"absolute",placement:o}),x=pe(Object.assign({},g,{},O)),E=f===ht?x:_,j={top:w.top-E.top+v.top,bottom:E.bottom-w.bottom+v.bottom,left:w.left-E.left+v.left,right:E.right-w.right+v.right},k=t.modifiersData.offset;if(f===ht&&k){var M=k[o];Object.keys(j).forEach((function(t){var e=[at,it].indexOf(t)>=0?1:-1,n=[ot,it].indexOf(t)>=0?"y":"x";j[t]+=M[n]*e}))}return j}function be(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,u=n.flipVariations,c=n.allowedAutoPlacements,s=void 0===c?mt:c,f=Nt(r),p=(f?u?yt:yt.filter((function(t){return Nt(t)===f})):st).filter((function(t){return s.indexOf(t)>=0})),l=p.reduce((function(e,n){return e[n]=ge(t,{placement:n,boundary:o,rootBoundary:i,padding:a})[It(n)],e}),{});return Object.keys(l).sort((function(t,e){return l[t]-l[e]}))}function we(t){if(It(t)===ct)return[];var e=ne(t);return[oe(t),e,oe(e)]}function _e(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,u=void 0===a||a,c=n.fallbackPlacements,s=n.padding,f=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,v=n.allowedAutoPlacements,y=e.options.placement,m=It(y),g=m===y,b=c||(g||!h?[ne(y)]:we(y)),w=[y].concat(b).reduce((function(t,n){return t.concat(It(n)===ct?be(e,{placement:n,boundary:f,rootBoundary:p,padding:s,flipVariations:h,allowedAutoPlacements:v}):n)}),[]),_=e.rects.reference,O=e.rects.popper,x=new Map,E=!0,j=w[0],k=0;k<w.length;k++){var M=w[k],T=It(M),P=Nt(M)===ft,L=[ot,it].indexOf(T)>=0,S=L?"width":"height",A=ge(e,{placement:M,boundary:f,rootBoundary:p,altBoundary:l,padding:s}),D=L?P?at:ut:P?it:ot;_[S]>O[S]&&(D=ne(D));var C=ne(D),R=[];if(i&&R.push(A[T]<=0),u&&R.push(A[D]<=0,A[C]<=0),R.every((function(t){return t}))){j=M,E=!1;break}x.set(M,R)}if(E)for(var B=h?3:1,W=function(t){var e=w.find((function(e){var n=x.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return j=e,"break"},I=B;I>0;I--){var N=W(I);if("break"===N)break}e.placement!==j&&(e.modifiersData[r]._skip=!0,e.placement=j,e.reset=!0)}}var Oe={name:"flip",enabled:!0,phase:"main",fn:_e,requiresIfExists:["offset"],data:{_skip:!1}};function xe(t){return"x"===t?"y":"x"}function Ee(t,e,n){return Math.max(t,Math.min(e,n))}function je(t){var e=t.state,n=t.options,r=t.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,u=void 0!==a&&a,c=n.boundary,s=n.rootBoundary,f=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,h=n.tetherOffset,v=void 0===h?0:h,y=ge(e,{boundary:c,rootBoundary:s,padding:p,altBoundary:f}),m=It(e.placement),g=Nt(e.placement),b=!g,w=Ht(m),_=xe(w),O=e.modifiersData.popperOffsets,x=e.rects.reference,E=e.rects.popper,j="function"===typeof v?v(Object.assign({},e.rects,{placement:e.placement})):v,k={x:0,y:0};if(O){if(i){var M="y"===w?ot:ut,T="y"===w?it:at,P="y"===w?"height":"width",L=O[w],S=O[w]+y[M],A=O[w]-y[T],D=d?-E[P]/2:0,C=g===ft?x[P]:E[P],R=g===ft?-E[P]:-x[P],B=e.elements.arrow,W=d&&B?G(B):{width:0,height:0},I=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ve(),N=I[M],H=I[T],U=Ee(0,x[P],W[P]),K=b?x[P]/2-D-U-N-j:C-U-N-j,V=b?-x[P]/2+D+U+H+j:R+U+H+j,q=e.elements.arrow&&rt(e.elements.arrow),z=q?"y"===w?q.clientTop||0:q.clientLeft||0:0,F=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,$=O[w]+K-F-z,Y=O[w]+V-F,J=Ee(d?Math.min(S,$):S,L,d?Math.max(A,Y):A);O[w]=J,k[w]=J-L}if(u){var X="x"===w?ot:ut,Q="x"===w?it:at,Z=O[_],tt=Z+y[X],et=Z-y[Q],nt=Ee(tt,Z,et);O[_]=nt,k[_]=nt-Z}e.modifiersData[r]=k}}var ke={name:"preventOverflow",enabled:!0,phase:"main",fn:je,requiresIfExists:["offset"]};function Me(t){var e,n=t.state,r=t.name,o=n.elements.arrow,i=n.modifiersData.popperOffsets,a=It(n.placement),u=Ht(a),c=[ut,at].indexOf(a)>=0,s=c?"height":"width";if(o&&i){var f=n.modifiersData[r+"#persistent"].padding,p=G(o),l="y"===u?ot:ut,d="y"===u?it:at,h=n.rects.reference[s]+n.rects.reference[u]-i[u]-n.rects.popper[s],v=i[u]-n.rects.reference[u],y=rt(o),m=y?"y"===u?y.clientHeight||0:y.clientWidth||0:0,g=h/2-v/2,b=f[l],w=m-p[s]-f[d],_=m/2-p[s]/2+g,O=Ee(b,_,w),x=u;n.modifiersData[r]=(e={},e[x]=O,e.centerOffset=O-_,e)}}function Te(t){var e=t.state,n=t.options,r=t.name,o=n.element,i=void 0===o?"[data-popper-arrow]":o,a=n.padding,u=void 0===a?0:a;null!=i&&("string"!==typeof i||(i=e.elements.popper.querySelector(i),i))&&fe(e.elements.popper,i)&&(e.elements.arrow=i,e.modifiersData[r+"#persistent"]={padding:ye("number"!==typeof u?u:me(u,st))})}var Pe={name:"arrow",enabled:!0,phase:"main",fn:Me,effect:Te,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Le(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Se(t){return[ot,at,it,ut].some((function(e){return t[e]>=0}))}function Ae(t){var e=t.state,n=t.name,r=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,a=ge(e,{elementContext:"reference"}),u=ge(e,{altBoundary:!0}),c=Le(a,r),s=Le(u,o,i),f=Se(c),p=Se(s);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:s,isReferenceHidden:f,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}var De={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ae},Ce=[Wt,Vt,Yt,Gt,te,Oe,ke,Pe,De],Re=Ct({defaultModifiers:Ce});const Be=o.get(i.CardDatabase),We=o.get(i.CardDataLoaderService),Ie=Object(r["o"])("bindTooltip");class Ne{constructor(t){this.tooltipContainerElement=t,this.tooltipElement=null,this.popperInstance=null}close(){var t;null!=this.tooltipElement&&(this.tooltipElement.remove(),null===(t=this.popperInstance)||void 0===t||t.destroy())}open(t,e){this.close(),this.tooltipElement=e,this.popperInstance=Re(t,this.tooltipElement,{placement:"auto"}),this.tooltipContainerElement.appendChild(this.tooltipElement)}}const He=async t=>{let e=await Be.prepareCard(t,r["h"].NAME);if(null!=e&&Be.hasCard(e,r["h"].NAME))return Be.getCard(e,r["h"].NAME);if(e=await Be.prepareCard(t,r["h"].PASSCODE),null!=e&&Be.hasCard(e,r["h"].PASSCODE))return Be.getCard(e,r["h"].PASSCODE);throw new Error(`Could not find card '${t}'.`)},Ue=(t,e)=>{const n=new Ne(e),r=(t,e)=>{Ie.trace(`Attempting to show tooltip for '${e}'.`),n.open(t,v()),He(e).then(e=>{Ie.trace("Loaded card.",e),n.open(t,x(e)),t instanceof HTMLAnchorElement&&M(t,e),We.updateViews(e).then(()=>Ie.trace("Updated view count.")).catch(t=>Ie.warn("Could not update view count.",t))}).catch(e=>{n.open(t,y("Error while loading card.")),Ie.error("Error while loading card.",e)})},o=t=>{const e=t.target;if(e instanceof HTMLElement){const t=e.dataset["name"];null!=t&&r(e,t)}},i=()=>n.close();t.addEventListener("mouseover",W(o,200)),t.addEventListener("mouseout",i)};n("c1bb");const Ke="cardTooltipContainer",Ve=Object(r["o"])("tooltip");document.addEventListener("readystatechange",()=>{if(null==document.getElementById(Ke)){Ve.debug("Setting up card tooltip.");const t=document.body,e=document.createElement("div");e.id=Ke,t.appendChild(e),Ue(t,e)}})},c1bb:function(t,e,n){},fcc1:function(t,e,n){(function(t,e){
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n;(function(n){(function(t){var r="object"===typeof e?e:"object"===typeof self?self:"object"===typeof this?this:Function("return this;")(),o=i(n);function i(t,e){return function(n,r){"function"!==typeof t[n]&&Object.defineProperty(t,n,{configurable:!0,writable:!0,value:r}),e&&e(n,r)}}"undefined"===typeof r.Reflect?r.Reflect=n:o=i(r.Reflect,o),t(o)})((function(e){var n=Object.prototype.hasOwnProperty,r="function"===typeof Symbol,o=r&&"undefined"!==typeof Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=r&&"undefined"!==typeof Symbol.iterator?Symbol.iterator:"@@iterator",a="function"===typeof Object.create,u={__proto__:[]}instanceof Array,c=!a&&!u,s={create:a?function(){return it(Object.create(null))}:u?function(){return it({__proto__:null})}:function(){return it({})},has:c?function(t,e){return n.call(t,e)}:function(t,e){return e in t},get:c?function(t,e){return n.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},f=Object.getPrototypeOf(Function),p="object"===typeof t&&Object({NODE_ENV:"production",BASE_URL:""})&&"true"===Object({NODE_ENV:"production",BASE_URL:""})["REFLECT_METADATA_USE_MAP_POLYFILL"],l=p||"function"!==typeof Map||"function"!==typeof Map.prototype.entries?nt():Map,d=p||"function"!==typeof Set||"function"!==typeof Set.prototype.entries?rt():Set,h=p||"function"!==typeof WeakMap?ot():WeakMap,v=new h;function y(t,e,n,r){if(W(n)){if(!F(t))throw new TypeError;if(!Y(e))throw new TypeError;return k(t,e)}if(!F(t))throw new TypeError;if(!H(e))throw new TypeError;if(!H(r)&&!W(r)&&!I(r))throw new TypeError;return I(r)&&(r=void 0),n=z(n),M(t,e,n,r)}function m(t,e){function n(n,r){if(!H(n))throw new TypeError;if(!W(r)&&!J(r))throw new TypeError;D(t,e,n,r)}return n}function g(t,e,n,r){if(!H(n))throw new TypeError;return W(r)||(r=z(r)),D(t,e,n,r)}function b(t,e,n){if(!H(e))throw new TypeError;return W(n)||(n=z(n)),P(t,e,n)}function w(t,e,n){if(!H(e))throw new TypeError;return W(n)||(n=z(n)),L(t,e,n)}function _(t,e,n){if(!H(e))throw new TypeError;return W(n)||(n=z(n)),S(t,e,n)}function O(t,e,n){if(!H(e))throw new TypeError;return W(n)||(n=z(n)),A(t,e,n)}function x(t,e){if(!H(t))throw new TypeError;return W(e)||(e=z(e)),C(t,e)}function E(t,e){if(!H(t))throw new TypeError;return W(e)||(e=z(e)),R(t,e)}function j(t,e,n){if(!H(e))throw new TypeError;W(n)||(n=z(n));var r=T(e,n,!1);if(W(r))return!1;if(!r.delete(t))return!1;if(r.size>0)return!0;var o=v.get(e);return o.delete(n),o.size>0||v.delete(e),!0}function k(t,e){for(var n=t.length-1;n>=0;--n){var r=t[n],o=r(e);if(!W(o)&&!I(o)){if(!Y(o))throw new TypeError;e=o}}return e}function M(t,e,n,r){for(var o=t.length-1;o>=0;--o){var i=t[o],a=i(e,n,r);if(!W(a)&&!I(a)){if(!H(a))throw new TypeError;r=a}}return r}function T(t,e,n){var r=v.get(t);if(W(r)){if(!n)return;r=new l,v.set(t,r)}var o=r.get(e);if(W(o)){if(!n)return;o=new l,r.set(e,o)}return o}function P(t,e,n){var r=L(t,e,n);if(r)return!0;var o=et(e);return!I(o)&&P(t,o,n)}function L(t,e,n){var r=T(e,n,!1);return!W(r)&&V(r.has(t))}function S(t,e,n){var r=L(t,e,n);if(r)return A(t,e,n);var o=et(e);return I(o)?void 0:S(t,o,n)}function A(t,e,n){var r=T(e,n,!1);if(!W(r))return r.get(t)}function D(t,e,n,r){var o=T(n,r,!0);o.set(t,e)}function C(t,e){var n=R(t,e),r=et(t);if(null===r)return n;var o=C(r,e);if(o.length<=0)return n;if(n.length<=0)return o;for(var i=new d,a=[],u=0,c=n;u<c.length;u++){var s=c[u],f=i.has(s);f||(i.add(s),a.push(s))}for(var p=0,l=o;p<l.length;p++){s=l[p],f=i.has(s);f||(i.add(s),a.push(s))}return a}function R(t,e){var n=[],r=T(t,e,!1);if(W(r))return n;var o=r.keys(),i=G(o),a=0;while(1){var u=Z(i);if(!u)return n.length=a,n;var c=Q(u);try{n[a]=c}catch(s){try{tt(i)}finally{throw s}}a++}}function B(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function W(t){return void 0===t}function I(t){return null===t}function N(t){return"symbol"===typeof t}function H(t){return"object"===typeof t?null!==t:"function"===typeof t}function U(t,e){switch(B(t)){case 0:return t;case 1:return t;case 2:return t;case 3:return t;case 4:return t;case 5:return t}var n=3===e?"string":5===e?"number":"default",r=X(t,o);if(void 0!==r){var i=r.call(t,n);if(H(i))throw new TypeError;return i}return K(t,"default"===n?"number":n)}function K(t,e){if("string"===e){var n=t.toString;if($(n)){var r=n.call(t);if(!H(r))return r}var o=t.valueOf;if($(o)){r=o.call(t);if(!H(r))return r}}else{o=t.valueOf;if($(o)){r=o.call(t);if(!H(r))return r}var i=t.toString;if($(i)){r=i.call(t);if(!H(r))return r}}throw new TypeError}function V(t){return!!t}function q(t){return""+t}function z(t){var e=U(t,3);return N(e)?e:q(e)}function F(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function $(t){return"function"===typeof t}function Y(t){return"function"===typeof t}function J(t){switch(B(t)){case 3:return!0;case 4:return!0;default:return!1}}function X(t,e){var n=t[e];if(void 0!==n&&null!==n){if(!$(n))throw new TypeError;return n}}function G(t){var e=X(t,i);if(!$(e))throw new TypeError;var n=e.call(t);if(!H(n))throw new TypeError;return n}function Q(t){return t.value}function Z(t){var e=t.next();return!e.done&&e}function tt(t){var e=t["return"];e&&e.call(t)}function et(t){var e=Object.getPrototypeOf(t);if("function"!==typeof t||t===f)return e;if(e!==f)return e;var n=t.prototype,r=n&&Object.getPrototypeOf(n);if(null==r||r===Object.prototype)return e;var o=r.constructor;return"function"!==typeof o||o===t?e:o}function nt(){var t={},e=[],n=function(){function t(t,e,n){this._index=0,this._keys=t,this._values=e,this._selector=n}return t.prototype["@@iterator"]=function(){return this},t.prototype[i]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var n=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:n,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var n=this._find(t,!0);return this._values[n]=e,this},e.prototype.delete=function(e){var n=this._find(e,!1);if(n>=0){for(var r=this._keys.length,o=n+1;o<r;o++)this._keys[o-1]=this._keys[o],this._values[o-1]=this._values[o];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new n(this._keys,this._values,r)},e.prototype.values=function(){return new n(this._keys,this._values,o)},e.prototype.entries=function(){return new n(this._keys,this._values,a)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[i]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function r(t,e){return t}function o(t,e){return e}function a(t,e){return[t,e]}}function rt(){return function(){function t(){this._map=new l}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[i]=function(){return this.keys()},t}()}function ot(){var t=16,e=s.create(),r=o();return function(){function t(){this._key=o()}return t.prototype.has=function(t){var e=i(t,!1);return void 0!==e&&s.has(e,this._key)},t.prototype.get=function(t){var e=i(t,!1);return void 0!==e?s.get(e,this._key):void 0},t.prototype.set=function(t,e){var n=i(t,!0);return n[this._key]=e,this},t.prototype.delete=function(t){var e=i(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=o()},t}();function o(){var t;do{t="@@WeakMap@@"+c()}while(s.has(e,t));return e[t]=!0,t}function i(t,e){if(!n.call(t,r)){if(!e)return;Object.defineProperty(t,r,{value:s.create()})}return t[r]}function a(t,e){for(var n=0;n<e;++n)t[n]=255*Math.random()|0;return t}function u(t){return"function"===typeof Uint8Array?"undefined"!==typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!==typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):a(new Uint8Array(t),t):a(new Array(t),t)}function c(){var e=u(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var n="",r=0;r<t;++r){var o=e[r];4!==r&&6!==r&&8!==r||(n+="-"),o<16&&(n+="0"),n+=o.toString(16).toLowerCase()}return n}}function it(t){return t.__=void 0,delete t.__,t}e("decorate",y),e("metadata",m),e("defineMetadata",g),e("hasMetadata",b),e("hasOwnMetadata",w),e("getMetadata",_),e("getOwnMetadata",O),e("getMetadataKeys",x),e("getOwnMetadataKeys",E),e("deleteMetadata",j)}))})(n||(n={}))}).call(this,n("4362"),n("c8ba"))}});
//# sourceMappingURL=tooltip.js.map