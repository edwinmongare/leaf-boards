(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8146],{9474:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilities/icons",function(){return t(6492)}])},1042:function(e,n,t){"use strict";t.d(n,{P:function(){return s}});var i=t(1799),r=t(9396),o=t(5893);t(7294);function s(e){return(0,o.jsx)("pre",(0,r.Z)((0,i.Z)({},e),{className:"border-round surface-ground text-900 p-5 overflow-auto",children:(0,o.jsx)("code",{className:"-mt-4 p-0 line-height-3 block",style:{fontFamily:'monaco, Consolas, "Lucida Console", monospace'},children:e.children})}))}},6492:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var i=t(5893),r=t(7294),o=t(6094),s=t(1042),a=t(1438),c=t(2951),l=t(1752),u=t.n(l),p=function(){function e(){(0,a.Z)(this,e),this.icons=[],this.selectedIcon=null,this.contextPath=u()().publicRuntimeConfig.contextPath}return(0,c.Z)(e,[{key:"getIcons",value:function(){return fetch(this.contextPath+"/demo/data/icons.json",{headers:{"Cache-Control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return e.icons}))}},{key:"getIcon",value:function(e){if(this.icons)return this.selectedIcon=this.icons.find((function(n){return n.properties.id===e})),this.selectedIcon}}]),e}(),d=t(1664),f=t.n(d),m=function(){var e=(0,r.useState)([]),n=e[0],t=e[1],a=(0,r.useState)([]),c=a[0],l=a[1];(0,r.useEffect)((function(){(new p).getIcons().then((function(e){e.sort((function(e,n){return e.properties.name<n.properties.name?-1:e.properties.name<n.properties.name?1:0})),t(e),l(e)}))}),[]);return(0,i.jsxs)("div",{className:"card docs",children:[(0,i.jsx)("h4",{children:"Icons"}),(0,i.jsxs)("p",{children:["PrimeReact components internally use"," ",(0,i.jsx)(f(),{href:"https://github.com/primefaces/primeicons",children:(0,i.jsx)("a",{className:"font-medium hover:underline",target:"_blank",children:"PrimeIcons"})})," ","library, the official icons suite from"," ",(0,i.jsx)(f(),{href:"https://www.primetek.com.tr",children:(0,i.jsx)("a",{className:"font-medium hover:underline",target:"_blank",children:"PrimeTek"})}),"."]}),(0,i.jsx)("h5",{children:"Download"}),(0,i.jsx)("p",{children:"PrimeIcons is available at npm, run the following command to download it to your project."}),(0,i.jsx)(s.P,{children:"\nnpm install primeicons --save\n"}),(0,i.jsx)("h5",{children:"Getting Started"}),(0,i.jsxs)("p",{children:["PrimeIcons use the ",(0,i.jsx)("strong",{children:"pi pi-{icon}"})," syntax such as ",(0,i.jsx)("strong",{children:"pi pi-check"}),". A standalone icon can be displayed using an element like ",(0,i.jsx)("i",{children:"i"})," or ",(0,i.jsx)("i",{children:"span"})]}),(0,i.jsx)(s.P,{children:'\n<i className="pi pi-check" style={{ marginRight: \'.5rem\' }}></i>\n<i className="pi pi-times"></i>\n'}),(0,i.jsx)("h5",{children:"Size"}),(0,i.jsx)("p",{children:"Size of the icons can easily be changed using font-size property."}),(0,i.jsx)(s.P,{children:'\n<i className="pi pi-check"></i>\n'}),(0,i.jsx)("i",{className:"pi pi-check"}),(0,i.jsx)(s.P,{children:"\n<i className=\"pi pi-check\" style={{ fontSize: '2rem' }}></i>\n"}),(0,i.jsx)("i",{className:"pi pi-check",style:{fontSize:"2rem"}}),(0,i.jsx)("h5",{children:"Spinning Animation"}),(0,i.jsx)("p",{children:"Special pi-spin class applies continuous rotation to an icon."}),(0,i.jsx)(s.P,{children:"\n<i className=\"pi pi-spin pi-spinner\" style={{ fontSize: '2rem' }}></i>\n"}),(0,i.jsx)("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}}),(0,i.jsx)("h5",{children:"Constants"}),(0,i.jsx)("p",{children:"PrimeIcons constants API is provided to easily choose an icon with typescript e.g. when defining a menu model."}),(0,i.jsx)(s.P,{children:"\n<Menu model={items} />\n"}),(0,i.jsx)(s.P,{lang:"js",children:"\nimport {PrimeIcons} from 'primereact/api';\n\nconst items = [\n    {\n        label: 'Update',\n        icon: PrimeIcons.REFRESH,\n        to: '/update'\n    },\n    {\n        label: 'Delete',\n        icon: PrimeIcons.TIMES,\n        to: '/delete'\n    }\n]\n"}),(0,i.jsx)("h5",{children:"List of Icons"}),(0,i.jsxs)("p",{children:["Here is the current list of PrimeIcons, more icons are added periodically. You may also"," ",(0,i.jsx)(f(),{href:"https://github.com/primefaces/primeicons/issues",children:(0,i.jsx)("a",{className:"font-medium hover:underline",target:"_blank",children:"request new icons"})})," ","at the issue tracker."]}),(0,i.jsx)("div",{children:(0,i.jsx)(o.o,{type:"text",className:"w-full p-3 mt-3 mb-5",onInput:function(e){e.target.value?l(n.filter((function(n){return n.icon.tags[0].includes(e.target.value)}))):l(n)},placeholder:"Search an icon"})}),(0,i.jsx)("div",{className:"grid icons-list text-center",children:c&&c.map((function(e){var n=e.icon,t=e.properties;return-1===n.tags.indexOf("deprecate")&&(0,i.jsxs)("div",{className:"col-6 sm:col-4 lg:col-3 xl:col-2 pb-5",children:[(0,i.jsx)("i",{className:"text-2xl mb-2 pi pi-"+t.name}),(0,i.jsxs)("div",{children:["pi-",t.name]})]},t.name)}))})]})}},6094:function(e,n,t){"use strict";t.d(n,{o:function(){return c}});var i=t(7294),r=t(411),o=t(7074),s=t(3643);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}var c=i.memo(i.forwardRef((function(e,n){var t=i.useRef(n),l=t.current&&t.current.value,u=i.useMemo((function(){return s.gb.isNotEmpty(e.value)||s.gb.isNotEmpty(e.defaultValue)||s.gb.isNotEmpty(l)}),[e.value,e.defaultValue,l]);i.useEffect((function(){s.gb.combinedRefs(t,n)}),[t,n]);var p=s.gb.isNotEmpty(e.tooltip),d=s.gb.findDiffKeys(e,c.defaultProps),f=(0,s.AK)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":u},e.className);return i.createElement(i.Fragment,null,i.createElement("input",a({ref:t},d,{className:f,onInput:function(n){var t=!0;if(e.keyfilter&&e.validateOnly&&(t=r.F.validate(n,e.keyfilter)),e.onInput&&e.onInput(n,t),!e.onChange){var i=n.target;s.gb.isNotEmpty(i.value)?s.p7.addClass(i,"p-filled"):s.p7.removeClass(i,"p-filled")}},onKeyDown:function(n){e.onKeyDown&&e.onKeyDown(n),e.keyfilter&&r.F.onKeyPress(n,e.keyfilter,e.validateOnly)},onPaste:function(n){e.onPaste&&e.onPaste(n),e.keyfilter&&r.F.onPaste(n,e.keyfilter,e.validateOnly)}})),p&&i.createElement(o.u,a({target:t,content:e.tooltip},e.tooltipOptions)))})));c.displayName="InputText",c.defaultProps={__TYPE:"InputText",keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,onInput:null,onKeyDown:null,onPaste:null}},411:function(e,n,t){"use strict";function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{F:function(){return o}});var o={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return o.DEFAULT_MASKS[e]?o.DEFAULT_MASKS[e]:e},onKeyPress:function(e,n,t){t||(e.ctrlKey||e.altKey||1===e.key.length&&(this.getRegex(n).test(e.key)||e.preventDefault()))},onPaste:function(e,n,t){if(!t){var i=this.getRegex(n);r(e.clipboardData.getData("text")).forEach((function(n){if(!i.test(n))return e.preventDefault(),!1}))}},validate:function(e,n){var t=e.target.value,i=!0,r=this.getRegex(n);return t&&!r.test(t)&&(i=!1),i}}},1438:function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return i}})},2951:function(e,n,t){"use strict";function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return n=9474,e(e.s=n);var n}));var n=e.O();_N_E=n}]);