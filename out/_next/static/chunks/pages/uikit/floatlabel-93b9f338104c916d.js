(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3559],{2597:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uikit/floatlabel",function(){return t(535)}])},4337:function(e,n,t){"use strict";t.d(n,{T:function(){return c}});var r=t(1438),l=t(2951),u=t(1752),a=t.n(u),c=function(){function e(){(0,r.Z)(this,e),this.contextPath=a()().publicRuntimeConfig.contextPath}return(0,l.Z)(e,[{key:"getCountries",value:function(){return fetch(this.contextPath+"/demo/data/countries.json",{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}()},535:function(e,n,t){"use strict";t.r(n);var r=t(5893),l=t(7294),u=t(6094),a=t(2552),c=t(3401),i=t(1176),o=t(7730),s=t(8751),d=t(7506),f=t(1202),h=t(3621),p=t(4337);n.default=function(){var e=(0,l.useState)([]),n=e[0],t=e[1],m=(0,l.useState)(null),v=m[0],g=m[1],x=(0,l.useState)(""),b=x[0],j=x[1],C=(0,l.useState)(null),N=C[0],k=C[1],y=(0,l.useState)(""),R=y[0],S=y[1],E=(0,l.useState)(""),w=E[0],F=E[1],I=(0,l.useState)(""),O=I[0],P=I[1],T=(0,l.useState)([]),_=T[0],L=T[1],A=(0,l.useState)(""),D=A[0],M=A[1],K=(0,l.useState)(null),z=K[0],q=K[1],B=(0,l.useState)(""),Z=B[0],U=B[1],Y=(0,l.useState)(null),H=Y[0],X=Y[1],G=(0,l.useState)(null),Q=G[0],V=G[1],J=(0,l.useState)(""),W=J[0],$=J[1],ee=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}];(0,l.useEffect)((function(){(new p.T).getCountries().then((function(e){t(e)}))}),[]);return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h5",{children:"Float Label"}),(0,r.jsxs)("div",{className:"grid p-fluid mt-3",children:[(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(u.o,{type:"text",id:"inputtext",value:b,onChange:function(e){return j(e.target.value)}}),(0,r.jsx)("label",{htmlFor:"inputtext",children:"InputText"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(o.Q,{id:"autocomplete",value:N,onChange:function(e){return k(e.value)},suggestions:v,completeMethod:function(e){for(var t=[],r=e.query,l=0;l<n.length;l++){var u=n[l];0===u.name.toLowerCase().indexOf(r.toLowerCase())&&t.push(u)}g(t)},field:"name"}),(0,r.jsx)("label",{htmlFor:"autocomplete",children:"AutoComplete"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label p-input-icon-left",children:[(0,r.jsx)("i",{className:"pi pi-search"}),(0,r.jsx)(u.o,{id:"lefticon",value:R,onChange:function(e){return S(e.target.value)}}),(0,r.jsx)("label",{htmlFor:"lefticon",children:"Left Icon"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label p-input-icon-right",children:[(0,r.jsx)("i",{className:"pi pi-spin pi-spinner"}),(0,r.jsx)(u.o,{id:"righticon",value:w,onChange:function(e){return F(e.target.value)}}),(0,r.jsx)("label",{htmlFor:"righticon",children:"Right Icon"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(s.f,{inputId:"calendar",value:O,onChange:function(e){return P(e.value)}}),(0,r.jsx)("label",{htmlFor:"calendar",children:"Calendar"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(d.c,{inputId:"chips",value:_,onChange:function(e){return L(e.value)}}),(0,r.jsx)("label",{htmlFor:"chips",children:"Chips"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(c.v,{id:"inputmask",mask:"99/99/9999",slotChar:"mm/dd/yyyy",value:D,onChange:function(e){return M(e.value)}}),(0,r.jsx)("label",{htmlFor:"inputmask",children:"InputMask"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(i.R,{id:"inputnumber",value:z,onValueChange:function(e){return q(e.target.value)}}),(0,r.jsx)("label",{htmlFor:"inputnumber",children:"InputNumber"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("div",{className:"p-inputgroup",children:[(0,r.jsx)("span",{className:"p-inputgroup-addon",children:(0,r.jsx)("i",{className:"pi pi-user"})}),(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(u.o,{type:"text",id:"inputgroup",value:Z,onChange:function(e){return U(e.target.value)}}),(0,r.jsx)("label",{htmlFor:"inputgroup",children:"InputGroup"})]})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(f.L,{id:"dropdown",options:ee,value:H,onChange:function(e){return X(e.value)},optionLabel:"name"}),(0,r.jsx)("label",{htmlFor:"dropdown",children:"Dropdown"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(h.N,{id:"multiselect",options:ee,value:Q,onChange:function(e){return V(e.value)},optionLabel:"name"}),(0,r.jsx)("label",{htmlFor:"multiselect",children:"MultiSelect"})]})}),(0,r.jsx)("div",{className:"field col-12 md:col-4",children:(0,r.jsxs)("span",{className:"p-float-label",children:[(0,r.jsx)(a.g,{id:"textarea",rows:"3",value:W,onChange:function(e){return $(e.target.value)},autoResize:!0}),(0,r.jsx)("label",{htmlFor:"textarea",children:"Textarea"})]})})]})]})}},3401:function(e,n,t){"use strict";t.d(n,{v:function(){return i}});var r=t(7294),l=t(3308),u=t(6094),a=t(3643);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var i=r.memo(r.forwardRef((function(e,n){var t=r.useRef(n),o=r.useRef(null),s=r.useRef(0),d=r.useRef([]),f=r.useRef([]),h=r.useRef(0),p=r.useRef(null),m=r.useRef(!1),v=r.useRef(null),g=r.useRef(null),x=r.useRef(null),b=r.useRef(null),j=r.useRef(null),C=r.useRef(!1),N=function(e,n){var r,l,u,a=t.current;if(a&&a.offsetParent&&a===document.activeElement)return"number"!==typeof e?(a.setSelectionRange?(l=a.selectionStart,u=a.selectionEnd):document.selection&&document.selection.createRange&&(u=(l=0-(r=document.selection.createRange()).duplicate().moveStart("character",-1e5))+r.text.length),{begin:l,end:u}):(l=e,u="number"===typeof n?n:l,void(a.setSelectionRange?a.setSelectionRange(l,u):a.createTextRange&&((r=a.createTextRange()).collapse(!0),r.moveEnd("character",u),r.moveStart("character",l),r.select())))},k=function(){for(var e=o.current;e<=s.current;e++)if(d.current[e]&&f.current[e]===y(e))return!1;return!0},y=r.useCallback((function(n){return n<e.slotChar.length?e.slotChar.charAt(n):e.slotChar.charAt(0)}),[e.slotChar]),R=function(){return e.unmask?T():t.current&&t.current.value},S=function(e){for(;++e<h.current&&!d.current[e];);return e},E=function(e,n){var t,r;if(!(e<0)){for(t=e,r=S(n);t<h.current;t++)if(d.current[t]){if(!(r<h.current&&d.current[t].test(f.current[r])))break;f.current[t]=f.current[r],f.current[r]=y(r),r=S(r)}I(),N(Math.max(o.current,e))}},w=function(n){if(m.current=!1,O(),_(n),L(),e.onBlur&&e.onBlur(n),t.current.value!==v.current){var r=document.createEvent("HTMLEvents");r.initEvent("change",!0,!1),t.current.dispatchEvent(r)}},F=function(e,n){var t;for(t=e;t<n&&t<h.current;t++)d.current[t]&&(f.current[t]=y(t))},I=function(){t.current.value=f.current.join("")},O=function(n){g.current=!0;var r,l,u,a=t.current.value,c=-1;for(r=0,u=0;r<h.current;r++)if(d.current[r]){for(f.current[r]=y(r);u++<a.length;)if(l=a.charAt(u-1),d.current[r].test(l)){f.current[r]=l,c=r;break}if(u>a.length){F(r+1,h.current);break}}else f.current[r]===a.charAt(u)&&u++,r<x.current&&(c=r);return n?I():c+1<x.current?e.autoClear||f.current.join("")===b.current?(t.current.value&&(t.current.value=""),F(0,h.current)):I():(I(),t.current.value=t.current.value.substring(0,c+1)),x.current?r:o.current},P=function(n){if(!e.readOnly){var t=O(!0);N(t),_(n),e.onComplete&&k()&&e.onComplete({originalEvent:n,value:R()})}},T=r.useCallback((function(){for(var e=[],n=0;n<f.current.length;n++){var t=f.current[n];d.current[n]&&t!==y(n)&&e.push(t)}return e.join("")}),[y]),_=function(n){if(e.onChange){var t=e.unmask?T():n&&n.target.value;e.onChange({originalEvent:n,value:b.current!==t?t:"",stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:b.current!==t?t:""}})}},L=function(){t.current&&t.current.value&&t.current.value.length>0?a.p7.addClass(t.current,"p-filled"):a.p7.removeClass(t.current,"p-filled")},A=function(n){var r;return t.current&&(null==e.value?t.current.value="":(t.current.value=e.value,r=O(n),setTimeout((function(){if(t.current)return I(),O(n)}),10)),v.current=t.current.value),L(),r},D=r.useCallback((function(){return e.unmask?e.value!==T():b.current!==t.current.value&&t.current.value!==e.value}),[e.unmask,e.value,T]),M=function(){if(e.mask){d.current=[],x.current=e.mask.length,h.current=e.mask.length,o.current=null;var n={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},t=a.p7.getUserAgent();C.current=/chrome/i.test(t)&&/android/i.test(t);for(var r=e.mask.split(""),l=0;l<r.length;l++){var u=r[l];"?"===u?(h.current--,x.current=l):n[u]?(d.current.push(new RegExp(n[u])),null===o.current&&(o.current=d.current.length-1),l<x.current&&(s.current=d.current.length-1)):d.current.push(null)}f.current=[];for(var c=0;c<r.length;c++){var i=r[c];"?"!==i&&(n[i]?f.current.push(y(c)):f.current.push(i))}b.current=f.current.join("")}};r.useImperativeHandle(n,(function(){return{props:e,getElement:function(){return t.current}}})),r.useEffect((function(){a.gb.combinedRefs(t,n)}),[t,n]),(0,l.nw)((function(){M(),A()})),(0,l.rf)((function(){M(),N(A(!0)),e.unmask&&_()}),[e.mask]),(0,l.rf)((function(){D()&&A()}),[D]);var K=a.gb.findDiffKeys(e,i.defaultProps),z=(0,a.AK)("p-inputmask",e.className);return r.createElement(u.o,c({ref:t,id:e.id,type:e.type,name:e.name,style:e.style,className:z},K,{placeholder:e.placeholder,size:e.size,maxLength:e.maxLength,tabIndex:e.tabIndex,disabled:e.disabled,readOnly:e.readOnly,onFocus:function(n){var r;e.readOnly||(m.current=!0,clearTimeout(j.current),v.current=t.current.value,r=O(),j.current=setTimeout((function(){t.current===document.activeElement&&(I(),r===e.mask.replace("?","").length?N(0,r):N(r),L())}),10),e.onFocus&&e.onFocus(n))},onBlur:w,onKeyDown:function(n){if(!e.readOnly){var r,l,u,c=n.which||n.keyCode,i=/iphone/i.test(a.p7.getUserAgent());p.current=t.current.value,8===c||46===c||i&&127===c?(l=(r=N()).begin,(u=r.end)-l===0&&(l=46!==c?function(e){for(;--e>=0&&!d.current[e];);return e}(l):u=S(l-1),u=46===c?S(u):u),F(l,u),E(l,u-1),_(n),n.preventDefault()):13===c?(w(n),_(n)):27===c&&(t.current.value=v.current,N(0,O()),_(n),n.preventDefault())}},onKeyPress:function(n){if(!e.readOnly){var t,r,l,u,c=n.which||n.keyCode,i=N();if(!(n.ctrlKey||n.altKey||n.metaKey||c<32)){if(c&&13!==c){if(i.end-i.begin!==0&&(F(i.begin,i.end),E(i.begin,i.end-1)),(t=S(i.begin-1))<h.current&&(r=String.fromCharCode(c),d.current[t].test(r))){if(function(e){var n,t,r,l;for(n=e,t=y(e);n<h.current;n++)if(d.current[n]){if(r=S(n),l=f.current[n],f.current[n]=t,!(r<h.current&&d.current[r].test(l)))break;t=l}}(t),f.current[t]=r,I(),l=S(t),/android/i.test(a.p7.getUserAgent())){setTimeout((function(){N(l)}),0)}else N(l);i.begin<=s.current&&(u=k())}n.preventDefault()}_(n),e.onComplete&&u&&e.onComplete({originalEvent:n,value:R()})}}},onInput:function(n){C.current?function(n){var r=t.current.value,l=N();if(p.current.length&&p.current.length>r.length){for(O(!0);l.begin>0&&!d.current[l.begin-1];)l.begin--;if(0===l.begin)for(;l.begin<o.current&&!d.current[l.begin];)l.begin++;N(l.begin,l.begin)}else{for(O(!0);l.begin<h.current&&!d.current[l.begin];)l.begin++;N(l.begin,l.begin)}e.onComplete&&k()&&e.onComplete({originalEvent:n,value:R()}),_(n)}(n):P(n)},onPaste:P,required:e.required,tooltip:e.tooltip,tooltipOptions:e.tooltipOptions}))})));i.displayName="InputMask",i.defaultProps={__TYPE:"InputMask",id:null,value:null,type:"text",mask:null,slotChar:"_",autoClear:!0,unmask:!1,style:null,className:null,placeholder:null,size:null,maxLength:null,tabIndex:null,disabled:!1,readOnly:!1,name:null,required:!1,tooltip:null,tooltipOptions:null,onComplete:null,onChange:null,onFocus:null,onBlur:null}}},function(e){e.O(0,[8725,1635,7479,6185,9774,2888,179],(function(){return n=2597,e(e.s=n);var n}));var n=e.O();_N_E=n}]);