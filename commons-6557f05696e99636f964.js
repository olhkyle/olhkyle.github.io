(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{9542:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),o=r(1883),a=r(8193),i=r(3493),l=r.n(i);var c=()=>{const[e,t]=n.useState(0),r=l()((()=>{t(window.scrollY)}),300);return n.useEffect((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[]),e};var u=e=>{let{location:t,title:r,children:i}=e;const l="/"===t.pathname;let u;u=l?n.createElement("h1",{className:"main-heading"},n.createElement(o.Link,{to:"/"},r)):n.createElement(o.Link,{className:"header-link-home",to:"/"},r);const s=c();return n.createElement("div",{className:"global-wrapper","data-is-root-path":l},n.createElement("header",{className:"global-header"},u),n.createElement("main",null,i),n.createElement("footer",{className:"border-t-2"},n.createElement("div",{className:"flex justify-between font-semibold relative"},n.createElement("div",null,"© Kyle.dot"),n.createElement("div",{className:"flex gap-4"},n.createElement("a",{href:"https://github.com/olhkyle",target:"_blank",rel:"noreferrer",className:"underline underline-offset-4 hover:underline hover:text-blue-hover"},"Github"),n.createElement("a",{href:"https://olhkyle.me",target:"_blank",rel:"noreferrer",className:"underline underline-offset-4 hover:underline hover:text-blue-hover"},"Olhkyle.me")),s>=300&&n.createElement("button",{type:"button",className:"absolute -top-20 left-0 border-[1px] border-gray-500 hover:border-blue-primary rounded-full",onClick:()=>window.scrollTo({top:0,behavior:"smooth"})},n.createElement(a.y1n,{size:"32",className:"hover:text-blue-primary"})))))}},9357:function(e,t,r){"use strict";var n=r(7294),o=r(1883);t.Z=e=>{var t,r,a;let{description:i,title:l,children:c}=e;const{site:u}=(0,o.useStaticQuery)("805692932"),s=i||u.siteMetadata.description;null===(t=u.siteMetadata)||void 0===t||t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,l),n.createElement("meta",{name:"description",content:s}),n.createElement("meta",{property:"og:title",content:l}),n.createElement("meta",{property:"og:description",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(r=u.siteMetadata)||void 0===r||null===(a=r.social)||void 0===a?void 0:a.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:l}),n.createElement("meta",{name:"twitter:description",content:s}),c)}},2705:function(e,t,r){var n=r(5639).Symbol;e.exports=n},4239:function(e,t,r){var n=r(2705),o=r(9607),a=r(2333),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},7561:function(e,t,r){var n=r(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},1957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},9607:function(e,t,r){var n=r(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(c){}var o=i.call(e);return n&&(t?e[l]=r:delete e[l]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,r){var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},7990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},3279:function(e,t,r){var n=r(3218),o=r(7771),a=r(4841),i=Math.max,l=Math.min;e.exports=function(e,t,r){var c,u,s,f,m,v,p=0,d=!1,h=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var r=c,n=u;return c=u=void 0,p=t,f=e.apply(n,r)}function g(e){var r=e-v;return void 0===v||r>=t||r<0||h&&e-p>=s}function E(){var e=o();if(g(e))return w(e);m=setTimeout(E,function(e){var r=t-(e-v);return h?l(r,s-(e-p)):r}(e))}function w(e){return m=void 0,b&&c?y(e):(c=u=void 0,f)}function x(){var e=o(),r=g(e);if(c=arguments,u=this,v=e,r){if(void 0===m)return function(e){return p=e,m=setTimeout(E,t),d?y(e):f}(v);if(h)return clearTimeout(m),m=setTimeout(E,t),y(v)}return void 0===m&&(m=setTimeout(E,t)),f}return t=a(t)||0,n(r)&&(d=!!r.leading,s=(h="maxWait"in r)?i(a(r.maxWait)||0,t):s,b="trailing"in r?!!r.trailing:b),x.cancel=function(){void 0!==m&&clearTimeout(m),p=0,c=v=u=m=void 0},x.flush=function(){return void 0===m?f:w(o())},x}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,r){var n=r(4239),o=r(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},7771:function(e,t,r){var n=r(5639);e.exports=function(){return n.Date.now()}},3493:function(e,t,r){var n=r(3279),o=r(3218);e.exports=function(e,t,r){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(r)&&(a="leading"in r?!!r.leading:a,i="trailing"in r?!!r.trailing:i),n(e,t,{leading:a,maxWait:t,trailing:i})}},4841:function(e,t,r){var n=r(7561),o=r(3218),a=r(3448),i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=l.test(e);return r||c.test(e)?u(e.slice(2),r?2:8):i.test(e)?NaN:+e}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var r,o=e.attr,a=e.size,c=e.title,u=l(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);
//# sourceMappingURL=commons-6557f05696e99636f964.js.map