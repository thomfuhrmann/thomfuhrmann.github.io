System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/rest/print","esri/rest/support/PrintParameters","esri/rest/support/PrintTemplate","esri/geometry/Point","calcite-components"],(function(e,t){var a={},r={},c={},n={},o={},l={},i={},s={};return{setters:[function(e){a.React=e.React,a.ReactDOM=e.ReactDOM},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent},function(e){c.WidgetPlaceholder=e.WidgetPlaceholder},function(e){n.execute=e.execute},function(e){o.default=e.default},function(e){l.default=e.default},function(e){i.default=e.default},function(e){s.CalciteButton=e.CalciteButton,s.CalciteInputText=e.CalciteInputText,s.CalciteLabel=e.CalciteLabel,s.CalciteOption=e.CalciteOption,s.CalcitePanel=e.CalcitePanel,s.CalciteProgress=e.CalciteProgress,s.CalciteSelect=e.CalciteSelect}],execute:function(){e((()=>{var e={72:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10 4H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM22 12h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0-6h4v4h-4V6zM10 20H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H6v-4h4v4zM26 20h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z"></path><path d="M28 16h-2c-2.671 0-5.182-1.04-7.071-2.929S16 8.671 16 6V4c0-2.2-1.8-4-4-4H4C1.8 0 0 1.8 0 4v8c0 2.2 1.8 4 4 4h2c2.671 0 5.182 1.04 7.071 2.929S16 23.329 16 26v2c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zm2 12c0 .53-.209 1.031-.589 1.411S28.53 30 28 30h-8c-.53 0-1.031-.209-1.411-.589S18 28.53 18 28v-2c0-6.627-5.373-12-12-12H4c-.53 0-1.031-.209-1.411-.589S2 12.53 2 12V4c0-.53.209-1.031.589-1.411S3.47 2 4 2h8c.53 0 1.031.209 1.411.589S14 3.47 14 4v2c0 6.627 5.373 12 12 12h2c.53 0 1.031.209 1.411.589S30 19.47 30 20v8z"></path></svg>'},4145:e=>{"use strict";e.exports=s},8294:e=>{"use strict";e.exports=i},5191:e=>{"use strict";e.exports=n},2641:e=>{"use strict";e.exports=o},8347:e=>{"use strict";e.exports=l},6826:e=>{"use strict";e.exports=r},8891:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=c}},t={};function u(a){var r=t[a];if(void 0!==r)return r.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,u),c.exports}u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},u.d=(e,t)=>{for(var a in t)u.o(t,a)&&!u.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="";var d={};return u.p=window.jimuConfig.baseUrl,(()=>{"use strict";u.r(d),u.d(d,{default:()=>M});var e=u(8891),t=u(6826),a=u(726),r=u(72),c=u.n(r),n=u(5191),o=u(2641),l=u(8347),i=u(8294),s=u(4145);const m={_widgetLabel:"Print",heading:"PDF drucken",titleLabel:"Titel",scaleLabel:"Maßstab",formatLabel:"Format","A4 Hochformat":"A4 Hochformat","A4 Hochformat mit Legende":"A4 Hochformat mit Legende","A4 Querformat":"A4 Querformat","A4 Querformat mit Legende":"A4 Querformat mit Legende","A3 Hochformat":"A3 Hochformat","A3 Hochformat mit Legende":"A3 Hochformat mit Legende","A3 Querformat":"A3 Querformat","A3 Querformat mit Legende":"A3 Querformat mit Legende",buttonPrint:"Drucken",buttonCancel:"Abbrechen"},{useEffect:f,useRef:p,useState:g}=e.React;function h(e,t,a){return e<t?t:e>a?a:e}const v=[1e4,25e3,5e4,1e5,2e5,5e5,1e6,35e5],b={"A4 Hochformat":[190,265],"A4 Hochformat mit Legende":[190,225],"A4 Querformat":[277,178],"A4 Querformat mit Legende":[277,140],"A3 Hochformat":[277,385],"A3 Hochformat mit Legende":[277,335],"A3 Querformat":[400,264],"A3 Querformat mit Legende":[400,215]};function C({view:t,intl:a}){const[r,c]=g("GeoSphere Austria"),[u,d]=g(Object.keys(b)[0]),[C,x]=g(1e4),[M,w]=g(!1),y=p(null),R=p();R.current=C;const A=p();A.current=u;const L=p(null);function S(e){fetch(e.url).then((e=>e.blob())).then((e=>{const t=document.createElement("a");t.setAttribute("href",URL.createObjectURL(e)),t.setAttribute("download","GeoSphere_Maps_Print.pdf"),document.body.appendChild(t),t.click(),document.body.removeChild(t),w(!1)}))}function E(e){"AbortError"===e.name||console.error("Error encountered: ",e)}const P=(e,t)=>{const a=b[t][0]*e/1e3,r=b[t][1]*e/1e3;H(a,r)},H=(e,a)=>{const r=t.center,c=r.x-e/2,n=r.x+e/2,o=r.y-a/2,l=r.y+a/2,s=t.toScreen(new i.default({x:c,y:l,spatialReference:{wkid:t.spatialReference.wkid}})),u=t.toScreen(new i.default({x:n,y:o,spatialReference:{wkid:t.spatialReference.wkid}})),d=h(Math.round(s.x),0,t.width),m=h(Math.round(s.y),0,t.height),f=h(Math.round(u.x-s.x),0,t.width),p=h(Math.round(u.y-s.y),0,t.height);y&&y.current&&(y.current.style.display="block",y.current.style.left=d+"px",y.current.style.top=m+"px",y.current.style.width=f+"px",y.current.style.height=p+"px")};return f((()=>{R.current&&A.current&&P(R.current,A.current);const a=t.watch("extent",(e=>{R.current&&A.current&&P(R.current,A.current)})),r=document.querySelector(".esri-view-root"),c=document.createElement("div");r.append(c);const n=e.React.createElement("div",{style:{display:"none",position:"absolute",backgroundColor:"#fca5a5",opacity:"50%",border:"2px solid #db2525",pointerEvents:"none"},ref:y});return e.ReactDOM.render(n,c),()=>{a.remove()}}),[]),e.React.createElement(s.CalcitePanel,{heading:a.formatMessage({id:"heading",defaultMessage:m.heading}),className:"px-3 vw-25"},e.React.createElement("div",null,M&&e.React.createElement(s.CalciteProgress,{type:"indeterminate"})),e.React.createElement(s.CalciteLabel,{className:"mt-5 mx-5"},a.formatMessage({id:"titleLabel",defaultMessage:m.titleLabel}),e.React.createElement(s.CalciteInputText,{placeholder:a.formatMessage({id:"titleLabel",defaultMessage:m.titleLabel}),onCalciteInputTextInput:e=>{c(e.target.value)},className:"mx-0"})),e.React.createElement(s.CalciteLabel,{className:"mx-5"},a.formatMessage({id:"formatLabel",defaultMessage:m.formatLabel}),e.React.createElement(s.CalciteSelect,{label:"format",onCalciteSelectChange:e=>{const t=e.target.value;d(t),P(C,t)}},Object.keys(b).map((t=>e.React.createElement(s.CalciteOption,{key:`${t}`,value:`${t}`},a.formatMessage({id:t,defaultMessage:m[t]})))))),e.React.createElement(s.CalciteLabel,{className:"mx-5"},a.formatMessage({id:"scaleLabel",defaultMessage:m.scaleLabel}),e.React.createElement(s.CalciteSelect,{label:"scale",onCalciteSelectChange:e=>{const t=parseInt(e.target.value);console.log(t),x(t),P(t,u)}},v.map((t=>{var a;return e.React.createElement(s.CalciteOption,{value:`${t}`,key:t},`1:${null===(a=t.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g))||void 0===a?void 0:a.join(".")}`)})))),M?e.React.createElement(e.React.Fragment,null,e.React.createElement(s.CalciteButton,{width:"half",slot:"footer",onClick:()=>{L.current&&(L.current.abort(),w(!1))}},a.formatMessage({id:"buttonCancel",defaultMessage:m.buttonCancel}))):e.React.createElement(s.CalciteButton,{width:"half",slot:"footer",onClick:()=>{w(!0);const e=new l.default({layout:u,format:"pdf",layoutOptions:{titleText:r,scalebarUnit:"Kilometers",customTextElements:[]},exportOptions:{dpi:98},scalePreserved:!0,outScale:C}),a=new o.default({view:t,template:e});L.current=new AbortController,n.execute("https://gis.geosphere.at/maps/rest/services/tools/printing/GPServer/Export%20Web%20Map",a,{signal:L.current.signal}).then(S).catch(E)}},a.formatMessage({id:"buttonPrint",defaultMessage:m.buttonPrint})))}const{useState:x}=e.React,M=r=>{const[n,o]=x(null);return e.React.createElement("div",{className:"widget-print",style:{width:"100%",height:"100%",overflowY:"auto"}},r.useMapWidgetIds&&0===r.useMapWidgetIds.length&&e.React.createElement(a.WidgetPlaceholder,{icon:c(),widgetId:r.id,message:"Please select a map widget!"}),r.useMapWidgetIds&&1===r.useMapWidgetIds.length&&e.React.createElement(t.JimuMapViewComponent,{useMapWidgetId:r.useMapWidgetIds[0],onActiveViewChange:e=>{o(e)}}),n&&n.view&&r.intl&&e.React.createElement(C,{view:n.view,intl:r.intl}))}})(),d})())}}}));