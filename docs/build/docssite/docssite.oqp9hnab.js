/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-core='docssite.oqp9hnab.js'][data-path]");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t){const e=n.n(t);e.t&&e.t.forEach(e=>{e.e||((t.o=t.o||{})[e.i]=f(n,t,e.i,u(t,e.c),e.u,e.r))})}function u(n,t){return e=>{n.l?n.l[t](e):(n.f=n.f||[]).push(t,e)}}function r(n,t){const e=n.f;if(e){for(t=0;t<e.length;t+=2)n.l[e[t]](e[t+1]);n.f=null}}function l(n,t,e,o,i){if(t){const d=t.s,m=n.n(d).t;if(m){const t=d.o=d.o||{};for(var c=0;c<m.length;c++){var r=m[c];if(r.i===e){var l=t[e];if(o&&!l){var s=e,a=d;"string"==typeof i?s=`${i}:${e}`:"object"==typeof i&&(a=i),t[e]=f(n,a,s,u(d,r.c),r.u,r.r)}else!o&&l&&(t[e](),t[e]=null);return!0}}}}return!1}function f(n,t,e,o,i,c,u,r){return u=e.split(":"),t&&u.length>1&&(t=n.d.a(t,u[0]),e=u[1]),t?(r=o,(u=e.split(".")).length>1&&(e=u[0],r=(n=>{n.keyCode===en[u[1]]&&o(n)})),n.d.m(t,e,r,i,c)):Y}function s(n){n.o&&(Object.keys(n.o).forEach(t=>n.o[t]()),n.o=null)}function a(n,t,e){const o={p:t.documentElement,v:t.head,b:t.body,h:n=>n.nodeType,y:n=>t.createElement(n),g:(n,e)=>t.createElementNS(n,e),w:n=>t.createTextNode(n),C:n=>t.createComment(n),N:(n,t,e)=>n.insertBefore(t,e),j:(n,t)=>n.removeChild(t),T:(n,t)=>n.appendChild(t),O:n=>n.childNodes,x:n=>n.parentNode,k:n=>n.nextSibling,A:n=>W(n.tagName),M:n=>n.textContent,P:(n,t)=>n.textContent=t,S:(n,t)=>n.getAttribute(t),B:(n,t,e)=>n.setAttribute(t,e),R:(n,t,e,o)=>n.setAttributeNS(t,e,o),q:(n,t)=>n.removeAttribute(t),m:(n,t,e,i,c,u)=>(u=o.D?{capture:!!i,passive:!!c}:!!i,n.addEventListener(t,e,u),()=>n&&n.removeEventListener(t,e,u)),a:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.H(e):"body"===i?o.b:"document"===i?t:"window"===i?n:e};return o.H=((n,t)=>(t=o.x(n))&&11===o.h(t)?t.host:t),o}function d(n,t,e,o,i){const c=11===e.I.nodeType&&e.I.host?e.I.host:e.I,u=t&&t.L||nn,r=e.L||nn;for(i in u)r&&null!=r[i]||null==u[i]||m(n,c,i,u[i],void 0,o);for(i in r)i in u&&r[i]===("value"===i||"checked"===i?c[i]:u[i])||m(n,c,i,u[i],r[i],o)}function m(n,t,e,o,i,c,u,r){if("class"!==e||c)if("style"===e){o=o||nn,i=i||nn;for(u in o)i[u]||(t.style[u]="");for(u in i)i[u]!==o[u]&&(t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.n(t);o&&o.z&&e in o.z?p(t,e,i):(p(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(u=e!==(e=e.replace(/^xlink\:?/,"")),1!==on[e]||i&&"false"!==i?"function"!=typeof i&&(u?t.setAttributeNS(cn,W(e),i):t.setAttribute(e,i)):u?t.removeAttributeNS(cn,W(e)):t.removeAttribute(e));else{e=W(e).substring(2);const c=t.o=t.o||{};i?o||(c[e]=f(n,t,e,i)):c[e]&&c[e]()}else if(o!==i){const n=null==o||""===o?tn:o.trim().split(/\s+/),e=null==i||""===i?tn:i.trim().split(/\s+/);let c=null==t.className||""===t.className?tn:t.className.trim().split(/\s+/);for(u=0,r=n.length;u<r;u++)-1===e.indexOf(n[u])&&(c=c.filter(t=>t!==n[u]));for(u=0,r=e.length;u<r;u++)-1===n.indexOf(e[u])&&(c=[...c,e[u]]);t.className=c.join(" ")}}function p(n,t,e){try{n[t]=e}catch(n){}}function v(n,t){function e(o,i,c){let u=0;if("function"==typeof o.F&&(o=o.F(Object.assign({},o.L,{Z:o._}))),U(o.G))o.I=t.w(o.G);else{const i=o.I=un||"svg"===o.F?t.g("http://www.w3.org/2000/svg",o.F):t.y(o.F);un="svg"===o.F||"foreignObject"!==o.F&&un,d(n,null,o,un),null!==a&&i.J!==a&&t.B(i,i.J=a,"");const c=o._;if(c){let n;for(;u<c.length;++u)(n=e(c[u],i,u))&&t.T(i,n)}}return o.I}function o(n,o,i,c,u){const r=n.$defaultHolder&&t.x(n.$defaultHolder)||n;let l;for(;c<=u;++c){var f=i[c];U(f)&&(l=U(f.G)?t.w(f.G):e(f,n,c),U(l)&&(f.I=l,t.N(r,l,o)))}}function i(n,e,o,i){for(;o<=i;++o)U(e[o])&&t.j(n,e[o].I)}function c(n,c,f){let s,a,d,m,p=0,v=0,b=c.length-1,h=c[0],y=c[b],$=f.length-1,g=f[0],w=f[$];for(;p<=b&&v<=$;)null==h?h=c[++p]:null==y?y=c[--b]:null==g?g=f[++v]:null==w?w=f[--$]:u(h,g)?(l(h,g),h=c[++p],g=f[++v]):u(y,w)?(l(y,w),y=c[--b],w=f[--$]):u(h,w)?(l(h,w),t.N(n,h.I,t.k(y.I)),h=c[++p],w=f[--$]):u(y,g)?(l(y,g),t.N(n,y.I,h.I),y=c[--b],g=f[++v]):(V(s)&&(s=r(c,p,b)),a=s[g.K],V(a)?(m=e(g,n,v),g=f[++v]):((d=c[a]).F!==g.F?m=e(g,n,a):(l(d,g),c[a]=void 0,m=d.I),g=f[++v]),m&&t.N(n,m,h.I));p>b?o(n,null==f[$+1]?null:f[$+1].I,f,v,$):v>$&&i(n,c,p,b)}function u(n,t){return n.F===t.F&&n.K===t.K}function r(n,t,e){let o,i,c,u={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.K)&&(u.Q=o);return u}function l(e,u){const r=u.I=e.I,l=e._,f=u._;if(un=u.I&&null!=u.I.parentElement&&void 0!==u.I.U,un="svg"===u.F||"foreignObject"!==u.F&&un,V(u.G))"slot"!==u.F&&d(n,e,u,un),U(l)&&U(f)?c(r,l,f):U(f)?(U(e.G)&&t.P(r,""),o(r,null,f,0,f.length-1)):U(l)&&i(r,l,0,l.length-1);else if(r.V&&r.V.W){let n=r.V.W[0].parentElement;t.P(n,u.G),r.V.W=[n.childNodes[0]]}else e.G!==u.G&&t.P(r,u.G)}let f,s,a;return function n(e,o,i,c,u,r){return f=i,s=c,a=2===u||1===u&&!t.X?"data-"+t.A(e.I):null,f||a&&t.B(e.I,a+"-host",""),l(e,o),o}}function b(n,t){n&&(n.Y&&n.Y(t?null:n.I),n._&&n._.forEach(n=>{b(n,t)}))}function h(n,t,e){for(var o,i=!1,c=!1,u=arguments.length;u-- >2;)ln.push(arguments[u]);for(;ln.length;)if((e=ln.pop())&&void 0!==e.pop)for(u=e.length;u--;)ln.push(e[u]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].G+=e:void 0===o?o=[c?y(e):e]:o.push(c?y(e):e),i=c;const r=new rn;if(r.F=n,r._=o,t&&(r.L=t,r.K=t.nn,r.Y=t.tn,t.className&&(t.class=t.className),"object"==typeof t.class)){for(u in t.class)t.class[u]&&ln.push(u);t.class=ln.join(" "),ln.length=0}return r}function y(n){const t=new rn;return t.G=n,t}function $(n,t,e,o){function i(){for(;l.length>0;)l.shift()();e=!1}function c(e){for(e=t(),i();f.length>0&&t()-e<40;)f.shift()();(o=f.length>0)&&n(u)}function u(e){for(i(),e=4+t();f.length>0&&t()<e;)f.shift()();(o=f.length>0)&&n(c)}const r=Promise.resolve(),l=[],f=[];return{add:(t,u)=>{3===u?(l.push(t),e||(e=!0,r.then(i))):(f.push(t),o||(o=!0,n(c)))}}}function g(n,t,e){const o={en:n[0],z:{mode:{on:1},color:{on:1,in:"color"}}};return o.cn=n[1],C(o,n[3],e),o.un=n[4],o.rn=n[5],n[6]&&(o.t=n[6].map(w)),o.ln=n[7],t[o.en]=o}function w(n){return{i:n[0],c:n[1],e:!!n[2],r:!!n[3],u:!!n[4]}}function C(n,t,e){if(t){n.z=n.z||{};for(var o=0;o<t.length;o++){var i=t[o];n.z[i[0]]={on:i[1],in:i[2]?1===e?W(i[0]):X(i[0]):0,fn:i[3],sn:i[4]}}}}function N(n,t,e,o){const i=n[e[0]];i.an=t[e[0]],C(i,e[1],o),i.dn=e[2],e[3]&&(i.mn=e[3].map(j)),i.pn=e[4],i.vn=e[5]}function j(n){return{i:n[0],c:n[1]||n[0],bn:!n[2],hn:!n[3],yn:!n[4]}}function T(n,t){if(U(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function O(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].on;1===i||2===i?M(e,o,function n(){return(this.$n=this.$n||{})[o]},function t(e){k(n,this,o,e)}):6===i&&A(e,o,Y)})}function x(n,t,e,o){o.s=e,e.$n=e.$n||{},t.z&&Object.keys(t.z).forEach(i=>{E(n,t,e,o,i)})}function E(n,t,e,o,i){const c=t.z[i],u=c.on;if(1===u||5===u||2===u){if(5!==u){if(c.in&&(void 0===e.$n[i]||""===e.$n[i])){const n=e.getAttribute(c.in);null!=n&&(e.$n[i]=T(c.fn,n))}e.hasOwnProperty(i)&&(void 0===e.$n[i]&&(e.$n[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.$n[i]&&(e.$n[i]=o[i]),M(o,i,function r(){const n=this.s;return n&&n.$n&&n.$n[i]},function l(t){const e=this.s;1!==u&&k(n,e,i,t)})}}function k(n,t,e,o){const i=t.$n=t.$n||{};o!==i[e]&&(i[e]=o,t.l&&!n.gn&&I(n,t))}function A(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function M(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function P(n,t,e){return{create:B(n,t,e,"create"),componentOnReady:B(n,t,e,"componentOnReady")}}function S(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.b.querySelector(e)),i||(i=t[e]=n.y(e),n.T(n.b,i)),i.componentOnReady(o)})}function B(n,t,e,o){return function(){const i=arguments;return S(n,t,e).then(n=>n[o].apply(n,i))}}function R(n,t,e){try{e=n.n(t),t.l=new e.an,x(n,e,t,t.l);try{r(t)}catch(e){n.wn(e,2,t)}}catch(e){t.l={},n.wn(e,7,t,!0)}}function q(n,t,e){if(t.l&&!t.Cn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.Nn=!0;try{t.jn&&(t.jn.forEach(n=>n(t)),t.jn=null),b(t.Tn)}catch(e){n.wn(e,4,t)}t.classList.add(e),D(t)}}function D(n,t,e){n.On&&((e=n.On.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.On.$initLoad()),n.On=null)}function H(n,t,e,o){const i=t.l,c=e.dn;if(i.render||i.hostData||c){n.gn=!0;const c=i.render&&i.render();n.gn=!1;const u=t.Tn||new rn;u.I=t,t.Tn=n.render(u,h(null,void 0,c),o,t.V,e.un)}n.xn(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function I(n,t){t.En||(t.En=!0,n.kn.add(()=>{t.En=!1,L(n,t)}))}function L(n,t){if(!t.Cn){const e=!t.l;let o;if(e){const e=t.On;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{L(n,t)});R(n,t);try{t.l.componentWillLoad&&(o=t.l.componentWillLoad())}catch(e){n.wn(e,3,t)}}o&&o.then?o.then(()=>z(n,t,e)):z(n,t,e)}}function z(n,t,e){try{H(n,t,n.n(t),!e)}catch(e){n.wn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.wn(e,6,t,!0)}}function F(n,t,e){e.$connected||(e.$connected=!0,e.Cn=null,c(n,e),Z(n,e),n.kn.add(()=>{n.An(t,e),n.Mn(t,e,()=>I(n,e))},3))}function Z(n,t,e){for(e=t;e=n.d.H(e);)if(n.Pn(e)){e.Nn||(t.On=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function _(n,t){!n.Sn&&G(n.d,t)&&(t.Cn=!0,D(t),b(t.Tn,!0),s(t),t.l&&(t.l=t.l.s=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Bn=t.$n=t.Tn=t.On=t.Nn=t.En=t.Rn=null)}function G(n,t){for(;t;){if(!n.x(t))return 9!==n.h(t);t=n.x(t)}}function J(n,t,e,o){e.connectedCallback=function(){F(n,t,this)},e.disconnectedCallback=function(){_(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),K(this,n),t},e.$initLoad=function(){q(n,this,o)},O(n,t.z,e)}function K(n,t){n.Cn||(n.Nn?t(n):(n.jn=n.jn||[]).push(t))}function Q(n,t){return 2===t.un||1===t.un&&!n}const U=n=>void 0!==n&&null!==n,V=n=>void 0===n||null===n,W=n=>n.toLowerCase(),X=n=>n.replace(/([A-Z])/g,n=>"-"+W(n[0])),Y=()=>{},nn={},tn=[],en={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},on={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},cn="http://www.w3.org/1999/xlink";let un=!1;class rn{}const ln=[],fn=n[o]=n[o]||{},sn=function an(t,e,o,i,c,u){function r(n,t,e,o,i){function u(){clearTimeout(o),i.onerror=i.onload=null,C.j(C.x(i),i),y[e]=!1}e=c+t+(Q(C.X,n)?".sc":"")+".js",y[e]||(y[e]=!0,(i=C.y("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(u,12e4),i.onerror=i.onload=u,C.T(C.v,i))}const s={html:{}},d={},m={},p={},b={},y={},w={},C=a(o,i);t.addListener=((n,t,e,o)=>f(T,n,t,e,o&&o.capture,o&&o.passive)),t.enableListener=((n,t,e,o)=>l(T,n,t,e,o)),t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i;const j=o.qn=o.qn||{},T={An:function O(n,e){e.mode||(e.mode=C.S(e,"mode")||t.mode),C.X||1!==n.un||(e.shadowRoot=e)},d:C,Dn:function x(n,t){const e=n.en;j[e]||(j[e]=!0,J(T,n,t.prototype,u),o.customElements.define(e,t))},Hn:t.emit,n:n=>s[C.A(n)],In:n=>t[n],isClient:!0,Pn:n=>!(!j[C.A(n)]&&!T.n(n)),Mn:function E(n,t,e,o){o=(n.cn[t.mode]||n.cn)[0],p[o]?e():((m[o]=m[o]||[]).push(e),r(n,o))},wn:(n,t,e)=>void 0,Ln:n=>P(C,w,n),kn:$(t=>n.requestAnimationFrame(t),()=>o.performance.now()),zn:n=>(n||[]).map(n=>g(n,s))};T.render=v(T,C);const k=C.p;return k.$rendered=!0,k.$activeLoading=[],k.$initLoad=(()=>k.Nn=!0),e.loadComponents=function n(e,o){const i=arguments;o(d,h,t,c);for(var u=2;u<i.length;u++)N(s,d,i[u]);var r=m[e];if(r){for(u=0;u<r.length;u++)r[u]();m[e]=null}p[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)b[t[o]]=e=C.y("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,C.T(C.v,e)},T.xn=((n,t,e)=>{{const o=b[n.en+"_"+t]||b[n.en];if(o){let t=C.v;if(C.X)if(1===n.un)t=e.shadowRoot;else for(;e=C.x(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.Fn=t.Fn||{};if(!i[o.id]){const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");C.N(t,n,e&&e.nextSibling||t.Zn),i[o.id]=!0}}}}),T}(e,fn,n,t,i,hydratedCssClass);sn.zn(fn.components).forEach(n=>sn.Dn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"DocsSite","hydrated","/build/docssite/");