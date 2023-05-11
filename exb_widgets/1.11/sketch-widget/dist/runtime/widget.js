System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-ui/basic/color-picker","esri/widgets/Sketch","esri/layers/GraphicsLayer"],(function(e,t){var o={},r={},c={},s={},n={},l={};return{setters:[function(e){o.React=e.React,o.classNames=e.classNames,o.css=e.css,o.jsx=e.jsx},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent},function(e){c.Button=e.Button,c.Popper=e.Popper,c.WidgetPlaceholder=e.WidgetPlaceholder},function(e){s.ColorPicker=e.ColorPicker},function(e){n.default=e.default},function(e){l.default=e.default}],execute:function(){e((()=>{var e={339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z" fill="#000"></path></svg>'},659:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},844:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10 4H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM22 12h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0-6h4v4h-4V6zM10 20H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H6v-4h4v4zM26 20h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z"></path><path d="M28 16h-2c-2.671 0-5.182-1.04-7.071-2.929S16 8.671 16 6V4c0-2.2-1.8-4-4-4H4C1.8 0 0 1.8 0 4v8c0 2.2 1.8 4 4 4h2c2.671 0 5.182 1.04 7.071 2.929S16 23.329 16 26v2c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zm2 12c0 .53-.209 1.031-.589 1.411S28.53 30 28 30h-8c-.53 0-1.031-.209-1.411-.589S18 28.53 18 28v-2c0-6.627-5.373-12-12-12H4c-.53 0-1.031-.209-1.411-.589S2 12.53 2 12V4c0-.53.209-1.031.589-1.411S3.47 2 4 2h8c.53 0 1.031.209 1.411.589S14 3.47 14 4v2c0 6.627 5.373 12 12 12h2c.53 0 1.031.209 1.411.589S30 19.47 30 20v8z"></path></svg>'},231:e=>{"use strict";e.exports=l},560:e=>{"use strict";e.exports=n},826:e=>{"use strict";e.exports=r},891:e=>{"use strict";e.exports=o},726:e=>{"use strict";e.exports=c},362:e=>{"use strict";e.exports=s}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,a),c.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(i),a.d(i,{default:()=>y});var e=a(891),t=a(826),o=a(726),r=a(339),c=a.n(r);const s=t=>{const o=window.SVG,{className:r}=t,s=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(o[r[c]]=e[r[c]])}return o}(t,["className"]),n=(0,e.classNames)("jimu-icon jimu-icon-component",r);return o?e.React.createElement(o,Object.assign({className:n,src:c()},s)):e.React.createElement("svg",Object.assign({className:n},s))};var n=a(659),l=a.n(n);const u=t=>{const o=window.SVG,{className:r}=t,c=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(o[r[c]]=e[r[c]])}return o}(t,["className"]),s=(0,e.classNames)("jimu-icon jimu-icon-component",r);return o?e.React.createElement(o,Object.assign({className:s,src:l()},c)):e.React.createElement("svg",Object.assign({className:s},c))};var p=a(362),d=a(560),m=a(231),f=a(844),v=a.n(f);const{useEffect:g,useState:h,useRef:w}=e.React,y=r=>{var c;const n="#A92A4E",l=w(null),a=w(),[i,f]=h(null),[y,b]=h(null),[x,j]=h(!1),[O,S]=h(n);g((()=>{if(i&&!y){const e=i.view,t=document.createElement("div");if(l.current.append(t),e&&e.map){const o=new m.default({title:"Sketches"});e.map.add(o),b(new d.default({layer:o,view:e,creationMode:"continuous",container:t,layout:"vertical",visibleElements:{createTools:{rectangle:!1,circle:!1},selectionTools:{"lasso-selection":!1},settingsMenu:!1}}))}}return y&&M(n),()=>{y&&(y.destroy(),b(null))}}),[y,i]);const M=e=>{const t=y.viewModel;t&&(t.pointSymbol.color=e,t.polylineSymbol.color=e,t.polygonSymbol.color=e)},P=e.css`
    width: 100%;
    height: 100%;
    border-width: 0px;
    &:hover {
      background-color: #b4c0c3;
    }
  `;return(0,e.jsx)("div",{className:"widget-sketch",style:{width:"100%",height:"100%",overflowY:"auto"}},r.useMapWidgetIds&&0===r.useMapWidgetIds.length&&(0,e.jsx)(o.WidgetPlaceholder,{icon:v(),widgetId:r.id,message:"Please select a map widget."}),(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(c=r.useMapWidgetIds)||void 0===c?void 0:c[0],onActiveViewChange:e=>{y&&(y.destroy(),b(null)),f(e)}}),(0,e.jsx)(o.Button,{ref:a,onClick:()=>j((e=>!e)),css:P},x?(0,e.jsx)(s,{style:{marginRight:"0"}}):(0,e.jsx)(u,{style:{marginRight:"0"}})),(0,e.jsx)(o.Popper,{floating:!1,open:x,reference:a.current,keepMount:!0,showArrow:!1,placement:"right"},(0,e.jsx)("div",null,(0,e.jsx)("div",{style:{width:"fit-content",height:"fit-content",backgroundColor:"#fff"},ref:l}),(0,e.jsx)(p.ColorPicker,{onChange:e=>{S(e),y&&M(e)},color:O,type:"default",width:"100%",style:{backgroundColor:"#fff",boxShadow:"none"}}))))}})(),i})())}}}));