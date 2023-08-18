System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/core/reactiveUtils","esri/widgets/ScaleBar"],(function(e,a){var t={},r={},o={},i={},n={};return{setters:[function(e){t.React=e.React},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent},function(e){o.Loading=e.Loading},function(e){i.default=e.default},function(e){n.default=e.default}],execute:function(){e((()=>{var e={963:(e,a,t)=>{"use strict";t.d(a,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),n=t.n(i)()(o());n.push([e.id,"div.esri-attribution__powered-by{display:none}div.esri-component.esri-scale-bar{margin-bottom:15px}body .app-dialog-wrap.app-dialog-wrap-dialog_1 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_2 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_3 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_4 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_5 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_6 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_7 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_8 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_9 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_10 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_11 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_12 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_13 .app-dialog-backdrop,body .app-dialog-wrap.app-dialog-wrap-dialog_14 .app-dialog-backdrop{background-color:transparent}.app-dialog-wrap{pointer-events:none}\n",""]);const p=n},645:e=>{"use strict";e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t="",r=void 0!==a[5];return a[4]&&(t+="@supports (".concat(a[4],") {")),a[2]&&(t+="@media ".concat(a[2]," {")),r&&(t+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),t+=e(a),r&&(t+="}"),a[2]&&(t+="}"),a[4]&&(t+="}"),t})).join("")},a.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(r)for(var p=0;p<this.length;p++){var d=this[p][0];null!=d&&(n[d]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&n[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),a.push(s))}},a}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var a=[];function t(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},n=[],p=0;p<e.length;p++){var d=e[p],c=r.base?d[0]+r.base:d[0],s=i[c]||0,l="".concat(c," ").concat(s);i[c]=s+1;var u=t(l),g={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)a[u].references++,a[u].updater(g);else{var f=o(g,r);r.byIndex=p,a.splice(p,0,{identifier:l,updater:f,references:1})}n.push(l)}return n}function o(e,a){var t=a.domAPI(a);return t.update(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap&&a.supports===e.supports&&a.layer===e.layer)return;t.update(e=a)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var n=0;n<i.length;n++){var p=t(i[n]);a[p].references--}for(var d=r(e,o),c=0;c<i.length;c++){var s=t(i[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}i=d}}},569:e=>{"use strict";var a={};e.exports=function(e,t){var r=function(e){if(void 0===a[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var a=document.createElement("style");return e.setAttributes(a,e.attributes),e.insert(a,e.options),a}},565:(e,a,t)=>{"use strict";e.exports=function(e){var a=t.nc;a&&e.setAttribute("nonce",a)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var a=e.insertStyleElement(e);return{update:function(t){!function(e,a,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),a.styleTagTransform(r,e,a.options)}(a,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)}}}},589:e=>{"use strict";e.exports=function(e,a){if(a.styleSheet)a.styleSheet.cssText=e;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(e))}}},135:e=>{"use strict";e.exports=i},277:e=>{"use strict";e.exports=n},826:e=>{"use strict";e.exports=r},891:e=>{"use strict";e.exports=t},726:e=>{"use strict";e.exports=o}},a={};function p(t){var r=a[t];if(void 0!==r)return r.exports;var o=a[t]={id:t,exports:{}};return e[t](o,o.exports,p),o.exports}p.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return p.d(a,{a}),a},p.d=(e,a)=>{for(var t in a)p.o(a,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},p.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.p="",p.nc=void 0;var d={};return p.p=window.jimuConfig.baseUrl,(()=>{"use strict";p.r(d),p.d(d,{__set_webpack_public_path__:()=>k,default:()=>x});var e=p(891),a=p(826),t=p(726),r=p(135),o=p(277),i=p(379),n=p.n(i),c=p(795),s=p.n(c),l=p(569),u=p.n(l),g=p(565),f=p.n(g),v=p(216),m=p.n(v),b=p(589),y=p.n(b),w=p(963),h={};h.styleTagTransform=y(),h.setAttributes=f(),h.insert=u().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=m(),n()(w.Z,h),w.Z&&w.Z.locals&&w.Z.locals;const{useState:_}=e.React,x=i=>{var n;const[p,d]=_(!1);return e.React.createElement(e.React.Fragment,null,e.React.createElement(a.JimuMapViewComponent,{useMapWidgetId:null===(n=i.useMapWidgetIds)||void 0===n?void 0:n[0],onViewsCreate:e=>{for(let a in e){const t=e[a].view,i=new o.default({view:t,unit:"metric"});t.ui.add(i,{position:"bottom-left"});let n=e[a].view.layerViews;r.default.watch((()=>n.filter((e=>"group"===e.type)).map((e=>e.updating))),(e=>{e.includes(!0)?d(!0):d(!1)}))}}}),e.React.createElement("div",{className:"loading-spinner"},p&&e.React.createElement(t.Loading,{type:"DONUT",width:50,height:50})))};function k(e){p.p=e}})(),d})())}}}));