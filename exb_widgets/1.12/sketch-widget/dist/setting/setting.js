System.register(["jimu-core","jimu-ui/advanced/setting-components"],(function(e,t){var r={},n={};return{setters:[function(e){r.React=e.React},function(e){n.MapWidgetSelector=e.MapWidgetSelector}],execute:function(){e((()=>{var e={891:e=>{"use strict";e.exports=r},756:e=>{"use strict";e.exports=n}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var i={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(i),o.d(i,{__set_webpack_public_path__:()=>n,default:()=>r});var e=o(891),t=o(756);function r(r){return e.React.createElement("div",{className:"widget-setting-print"},e.React.createElement("p",null,"Please select a map:"),e.React.createElement(t.MapWidgetSelector,{useMapWidgetIds:r.useMapWidgetIds,onSelect:e=>{r.onSettingChange({id:r.id,useMapWidgetIds:e})}}))}function n(e){o.p=e}})(),i})())}}}));