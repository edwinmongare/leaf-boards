(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2843],{2129:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uikit/message",function(){return t(4763)}])},4763:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(5893),a=t(7294),s=t(4420),i=t(6479),l=t(3643);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var c=a.memo(a.forwardRef((function(e,n){var t=a.useRef(null);a.useImperativeHandle(n,(function(){return{props:e,getElement:function(){return t.current}}}));var r=l.gb.findDiffKeys(e,c.defaultProps),s=(0,l.AK)("p-inline-message p-component",{"p-inline-message-info":"info"===e.severity,"p-inline-message-warn":"warn"===e.severity,"p-inline-message-error":"error"===e.severity,"p-inline-message-success":"success"===e.severity,"p-inline-message-icon-only":!e.text},e.className),i=function(){if(e.content)return l.gb.getJSXElement(e.content,e);var n=l.gb.getJSXElement(e.text,e),t=e.icon;t||(t=(0,l.AK)("pi",{"pi-info-circle":"info"===e.severity,"pi-exclamation-triangle":"warn"===e.severity,"pi-times-circle":"error"===e.severity,"pi-check":"success"===e.severity}));var r=l.Cz.getJSXIcon(t,{className:"p-inline-message-icon"},{props:e});return a.createElement(a.Fragment,null,r,a.createElement("span",{className:"p-inline-message-text"},n))}();return a.createElement("div",o({id:e.id,ref:t,className:s,style:e.style},r,{role:"alert","aria-live":"polite"}),i)})));c.displayName="Message",c.defaultProps={__TYPE:"Message",id:null,className:null,style:null,text:null,icon:null,severity:"info",content:null};var u=t(6094),f=t(9403),m=function(){var e=(0,a.useState)(""),n=e[0],t=e[1],l=(0,a.useState)(""),o=l[0],m=l[1],p=(0,a.useRef)(),d=(0,a.useRef)();return(0,r.jsxs)("div",{className:"grid",children:[(0,r.jsx)("div",{className:"col-12 lg:col-6",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Toast"}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(s.F,{ref:p}),(0,r.jsx)(f.z,{type:"button",onClick:function(){p.current.show({severity:"success",summary:"Success Message",detail:"Message Detail",life:3e3})},label:"Success",className:"p-button-success"}),(0,r.jsx)(f.z,{type:"button",onClick:function(){p.current.show({severity:"info",summary:"Info Message",detail:"Message Detail",life:3e3})},label:"Info",className:"p-button-info"}),(0,r.jsx)(f.z,{type:"button",onClick:function(){p.current.show({severity:"warn",summary:"Warn Message",detail:"Message Detail",life:3e3})},label:"Warn",className:"p-button-warning"}),(0,r.jsx)(f.z,{type:"button",onClick:function(){p.current.show({severity:"error",summary:"Error Message",detail:"Message Detail",life:3e3})},label:"Error",className:"p-button-danger"})]})]})}),(0,r.jsx)("div",{className:"col-12 lg:col-6",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Messages"}),(0,r.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,r.jsx)(f.z,{label:"Success",type:"button",onClick:function(){d.current.show({severity:"success",content:"Message Detail"})},className:"p-button-success"}),(0,r.jsx)(f.z,{label:"Info",type:"button",onClick:function(){d.current.show({severity:"info",content:"Message Detail"})},className:"p-button-info"}),(0,r.jsx)(f.z,{label:"Warn",type:"button",onClick:function(){d.current.show({severity:"warn",content:"Message Detail"})},className:"p-button-warning"}),(0,r.jsx)(f.z,{label:"Error",type:"button",onClick:function(){d.current.show({severity:"error",content:"Message Detail"})},className:"p-button-danger"})]}),(0,r.jsx)(i.V,{ref:d})]})}),(0,r.jsx)("div",{className:"col-12 lg:col-8",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Inline"}),(0,r.jsxs)("div",{className:"flex align-items-center flex-wrap gap-2 mb-3",children:[(0,r.jsx)("label",{htmlFor:"username1",className:"col-fixed w-9rem",children:"Username"}),(0,r.jsx)(u.o,{id:"username1",value:n,onChange:function(e){return t(e.target.value)},required:!0,className:"p-invalid"}),(0,r.jsx)(c,{severity:"error",text:"Username is required"})]}),(0,r.jsxs)("div",{className:"flex align-items-center flex-wrap gap-2",children:[(0,r.jsx)("label",{htmlFor:"email",className:"col-fixed w-9rem",children:"Email"}),(0,r.jsx)(u.o,{id:"email",value:o,onChange:function(e){return m(e.target.value)},required:!0,className:"p-invalid"}),(0,r.jsx)(c,{severity:"error"})]})]})}),(0,r.jsx)("div",{className:"col-12 lg:col-4",children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Help Text"}),(0,r.jsxs)("div",{className:"field p-fluid",children:[(0,r.jsx)("label",{htmlFor:"username2",children:"Username"}),(0,r.jsx)(u.o,{id:"username2",type:"text",className:"p-invalid","aria-describedby":"username-help"}),(0,r.jsx)("small",{id:"username-help",className:"p-error",children:"Enter your username to reset your password."})]})]})})]})}},6094:function(e,n,t){"use strict";t.d(n,{o:function(){return o}});var r=t(7294),a=t(411),s=t(7074),i=t(3643);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}var o=r.memo(r.forwardRef((function(e,n){var t=r.useRef(n),c=t.current&&t.current.value,u=r.useMemo((function(){return i.gb.isNotEmpty(e.value)||i.gb.isNotEmpty(e.defaultValue)||i.gb.isNotEmpty(c)}),[e.value,e.defaultValue,c]);r.useEffect((function(){i.gb.combinedRefs(t,n)}),[t,n]);var f=i.gb.isNotEmpty(e.tooltip),m=i.gb.findDiffKeys(e,o.defaultProps),p=(0,i.AK)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":u},e.className);return r.createElement(r.Fragment,null,r.createElement("input",l({ref:t},m,{className:p,onInput:function(n){var t=!0;if(e.keyfilter&&e.validateOnly&&(t=a.F.validate(n,e.keyfilter)),e.onInput&&e.onInput(n,t),!e.onChange){var r=n.target;i.gb.isNotEmpty(r.value)?i.p7.addClass(r,"p-filled"):i.p7.removeClass(r,"p-filled")}},onKeyDown:function(n){e.onKeyDown&&e.onKeyDown(n),e.keyfilter&&a.F.onKeyPress(n,e.keyfilter,e.validateOnly)},onPaste:function(n){e.onPaste&&e.onPaste(n),e.keyfilter&&a.F.onPaste(n,e.keyfilter,e.validateOnly)}})),f&&r.createElement(s.u,l({target:t,content:e.tooltip},e.tooltipOptions)))})));o.displayName="InputText",o.defaultProps={__TYPE:"InputText",keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,onInput:null,onKeyDown:null,onPaste:null}},411:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{F:function(){return s}});var s={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return s.DEFAULT_MASKS[e]?s.DEFAULT_MASKS[e]:e},onKeyPress:function(e,n,t){t||(e.ctrlKey||e.altKey||1===e.key.length&&(this.getRegex(n).test(e.key)||e.preventDefault()))},onPaste:function(e,n,t){if(!t){var r=this.getRegex(n);a(e.clipboardData.getData("text")).forEach((function(n){if(!r.test(n))return e.preventDefault(),!1}))}},validate:function(e,n){var t=e.target.value,r=!0,a=this.getRegex(n);return t&&!a.test(t)&&(r=!1),r}}},6479:function(e,n,t){"use strict";t.d(n,{V:function(){return g}});var r=t(7294),a=t(9747),s=t(4388),i=t(3643),l=t(6367),o=t(3308),c=t(9868);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){if(e){if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function p(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,s,i,l=[],o=!0,c=!1;try{if(s=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;o=!1}else for(;!(o=(r=s.call(t)).done)&&(l.push(r.value),l.length!==n);o=!0);}catch(u){c=!0,a=u}finally{try{if(!o&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,n)||m(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=r.memo(r.forwardRef((function(e,n){var t=e.message,a=t.severity,s=t.content,u=t.summary,f=t.detail,m=t.closable,p=t.life,y=t.sticky,v=t.icon,g=d((0,o.KS)((function(){b(null)}),p||3e3,!y),1)[0],b=function(n){g(),e.onClose&&e.onClose(e.message),n&&(n.preventDefault(),n.stopPropagation())},h=(0,i.AK)("p-message p-component p-message-"+a),x=function(){if(!1!==m){var e=(0,l.qJ)("close");return r.createElement("button",{type:"button",className:"p-message-close p-link","aria-label":e,onClick:b},r.createElement("i",{className:"p-message-close-icon pi pi-times","aria-hidden":"true"}),r.createElement(c.H,null))}return null}(),N=function(){if(e.message){var n=v;n||(n=(0,i.AK)("pi",{"pi-info-circle":"info"===a,"pi-exclamation-triangle":"warn"===a,"pi-times-circle":"error"===a,"pi-check":"success"===a}));var t=i.Cz.getJSXIcon(n,{className:"p-message-icon"},{props:e});return s||r.createElement(r.Fragment,null,t,r.createElement("span",{className:"p-message-summary"},u),r.createElement("span",{className:"p-message-detail"},f))}return null}();return r.createElement("div",{ref:n,className:h,onClick:function(){e.onClick&&e.onClick(e.message)}},r.createElement("div",{className:"p-message-wrapper"},N,x))})));y.displayName="UIMessage";var v=0,g=r.memo(r.forwardRef((function(e,n){var t=d(r.useState([]),2),l=t[0],o=t[1],c=r.useRef(null),f=function(e){if(e){var n=m(e,!0);if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t].id=v++,n=[].concat(p(l),p(e));else e.id=v++,n=l?[].concat(p(l),[e]):[e];o(n)}},m=function(e,n){var t;if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r].id=v++,t=n?[].concat(p(l),p(e)):e;else e.id=v++,t=n&&l?[].concat(p(l),[e]):[e];return t},b=function(){o([])},h=function(e){var n=m(e,!1);o(n)},x=function(n){o(l.filter((function(e){return e.id!==n.id}))),e.onRemove&&e.onRemove(n)};r.useImperativeHandle(n,(function(){return{props:e,show:f,replace:h,clear:b,getElement:function(){return c.current}}}));var N=i.gb.findDiffKeys(e,g.defaultProps);return r.createElement("div",u({id:e.id,ref:c,className:e.className,style:e.style},N),r.createElement(a.Z,null,l&&l.map((function(n){var t=r.createRef();return r.createElement(s.K,{nodeRef:t,key:n.id,classNames:"p-message",unmountOnExit:!0,timeout:{enter:300,exit:300},options:e.transitionOptions},r.createElement(y,{ref:t,message:n,onClick:e.onClick,onClose:x}))}))))})));g.displayName="Messages",g.defaultProps={__TYPE:"Messages",id:null,className:null,style:null,transitionOptions:null,onRemove:null,onClick:null}}},function(e){e.O(0,[4420,9774,2888,179],(function(){return n=2129,e(e.s=n);var n}));var n=e.O();_N_E=n}]);