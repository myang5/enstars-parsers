!function(e){function t(t){for(var n,l,c=t[0],i=t[1],u=t[2],s=0,m=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&m.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(t);m.length;)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={0:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=i;o.push([276,1]),r()}({234:function(e,t,r){},239:function(e,t,r){},240:function(e,t,r){},272:function(e,t,r){},273:function(e,t,r){},274:function(e,t,r){},275:function(e,t,r){},276:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(225),l=r(228),c=r(186),i=r(36),u={MashiroFormatter:"mashiro-formatter",MarkdownStylingToHtml:"markdown-styling-to-html",JayFormatter:"jay-formatter"},f=u.MashiroFormatter,s=(r(234),Object.values(u));function m(){var e=Object(i.g)(),t=Object(i.f)(),r=e.pathname.split("/")[1],n=r||f;return a.a.createElement("header",null,a.a.createElement("h1",null,a.a.createElement(c.b,{className:"star-link",to:"/"},"ENSTARS PARSERS")),a.a.createElement("ul",{id:"navbar"},a.a.createElement("li",null,a.a.createElement("select",{value:n,onChange:function(e){var r=e.target.value;t.push("/".concat(r))}},s.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://twitter.com/gayandasleep"},"CONTACT")),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://github.com/myang5/enstars-parsers/issues"},"REPORT ISSUE")),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://github.com/myang5/enstars-parsers"},"GITHUB"))))}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d="Copy Output",v="Copied",y=function(e){var t=e.outputRef,r=e.onConvert,o=p(Object(n.useState)(d),2),l=o[0],c=o[1];return a.a.createElement("div",{className:"actions"},a.a.createElement("button",{type:"button",onClick:function(){c(d),r()},id:"convert-button"},"CONVERT"),a.a.createElement("button",{type:"button",onClick:function(){t.current.select(),document.execCommand("copy"),c(v)},id:"copy-button"},l))},h=(r(239),r(187)),g=r.n(h),E=function(e){var t=e.clickedValue,r=e.value,n=e.children;return a.a.createElement("div",{className:g()("tab-content","tab-content--".concat(r.replace(" ","-").toLowerCase()),{"tab-content--active":t===r})},n)},O=(r(240),function(e){var t=e.tabs,r=e.clicked,n=e.onClick;return a.a.createElement("div",{className:"tab-menu"},t.map((function(e){return a.a.createElement("button",{type:"button",key:e,className:"tablink".concat(r===e?" active":""),onClick:function(){return n(e)}},e)})))});function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=Object(n.createContext)(),A=function(){return Object(n.useContext)(w)},C=JSON.parse(localStorage.getItem(u.MashiroFormatter))||{},N=function(e){var t=e.children,r=j(Object(n.useState)(C.nav||JSON.parse(localStorage.getItem("nav"))||{}),2),o={nav:r[0],setNav:r[1],inputRef:Object(n.useRef)(null)};return a.a.createElement(w.Provider,{value:o},t)},k=r(119),T=r(128),P=r(123),I=r(129),x=r(126),R=r(127),M=r(122),L=r(125);function _(){var e=A().inputRef,t={plugins:[P.a,I.a,x.a,R.a,M.a,L.a],toolbar:["bold","italic","link","|","undo","redo"]};return Object(n.useEffect)((function(){try{e.current.editor.editing.view.change((function(t){t.setAttribute("spellcheck","false",e.current.editor.editing.view.document.getRoot())}))}catch(e){}return function(){}}),[]),a.a.createElement(k.CKEditor,{editor:T.a,config:t,data:"\n<p>Location: Pool</p>\n<p>CW: Death threats</p>\n<p>Narration: Time: Several minutes later</p>\n<p>Narration: Several minutes later</p>\n<p>Image: /img/es/eventstory/meteorimpact/firsthalfch2.jpg</p>\n<p>Natsume: HoweVER. Wi<i>th</i>in a ga<i>me</i> where <i>every</i>thing is <i>proGRAMMED</i></p>\n<p>In this world where everything obeys my every <hold>garDEN—</hold></p>\n<p>Image: /img/es/eventstory/meteorimpact/firsthalfch2.jpg</p>\n<p><th>And I will give everyone an equal opportunity to experience their own happily ever afTER.</th></p>\n<p><spell>—Welcome to paradise, my <hold>idols♪</hold></spell></p>\n<p>Tsumugi: Um, but, no matter how you look at it, I'm pretty sure this world is a dystopia, right?</p>\n",ref:e})}var D="index",F="prev-url",$="prev-title",J="next-url",H="next-title",K=function(e){var t=e.formatter,r=e.key,n=e.value,a=localStorage.getItem(t);a?a=JSON.parse(a):((a={})[r]=JSON.parse(localStorage.getItem(r)),localStorage.removeItem(r)),a[r]=n,localStorage.setItem(t,JSON.stringify(a))},W=function(e){return(new DOMParser).parseFromString(e,"text/html")},q=function(e){var t=e.querySelectorAll("br");if(t.length>0){for(var r=t[0].parentNode,n=r.parentNode,a=0;a<t.length;a++){var o=new Range;if(o.setStart(t[a].parentNode,0),o.setEndBefore(t[a]),!o.collapsed){var l=document.createElement(r.tagName.toLowerCase());l.append(o.extractContents()),n.insertBefore(l,r)}t[a].remove()}0===r.innerHTML.length&&r.remove()}return e},U=r(68);function V(e){return Z(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||X(e)||G()}function B(e,t){return Z(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||X(e,t)||G()}function G(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function X(e,t){if(e){if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(e,t):void 0}}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(e){if(Array.isArray(e))return e}var z=function(e){return e.toUpperCase().startsWith("LOCATION:")},Q=function(e){return e.toUpperCase().startsWith("CW:")},ee=function(e){return e.toUpperCase().startsWith("IMAGE:")},te=function(e){return e.match(/^\w*:(.*)/)[1].trim()},re=function(e){return e.toUpperCase().startsWith("NARRATION:")},ne=function(e){var t=e.match(/^\w*:( ?\w*?):(.*)/);return t?{label:t[1].trim(),value:t[2].trim()}:{value:te(e)}},ae=function(e){if(Object(U.chain)(e).split(":").map((function(e){return e.trim()})).compact().value().length<2)return!1;var t=e.split(":")[0];return Object(U.inRange)(Object(U.chain)(t).split(",").map((function(e){return e.trim()})).compact().value().length,1,3)},oe=function(e){var t=V(e.split(":")),r=t[0],n=t.slice(1);return[Object(U.chain)(r).split(",").map((function(e){return e.trim()})).join(" ").value(),n.join(":").trim()]},le=function(e){e.querySelectorAll("i").forEach((function(e){e.replaceWith("*".concat(e.textContent,"*"))})),e.innerHTML=e.innerHTML.replace(/\*( ?)(.+?)( ?)\*/g,"$1*$2*$3"),e.innerHTML=e.innerHTML.replace(/\*(\w+?)\*([^ ])/g,"<em>$1</em>$2"),e.innerHTML=e.innerHTML.replace(/([^ ])\*(\w+?)\*/g,"$1<em>$2</em>"),e.querySelectorAll("strong").forEach((function(e){e.replaceWith("**".concat(e.textContent,"**"))})),e.innerHTML=e.innerHTML.replace(/\*\*( ?)(.+?)( ?)\*\*/g,"$1**$2**$3"),e.innerHTML=e.innerHTML.replace(/\*\*(\w+?)\*\*([^ ])/g,"<b>$1</b>$2"),e.innerHTML=e.innerHTML.replace(/([^ ])\*\*(\w+?)\*\*/g,"$1<b>$2</b>");var t=e.innerHTML.replace(/&nbsp;/g," ").trim();if(t.startsWith("**")){var r=t.match(/^\*\*(.*?)\*\*/),n=r[0],a=r[1],o=t.replace(n,a);if(ae(o))return o}return t};function ce(e){var t=e.inputData,r=e.nav,n=ie(),a=q(W(t));K({formatter:u.MashiroFormatter,key:"nav",value:r});for(var o=a.querySelectorAll("p"),l="",c=function(e){var t="",r="";return function(n){var a=n.textContent.replace(/&nbsp;/g," ").trim();if(!a)return"";var o="";if(ee(a)?o+=e.image(te(a)):z(a)?o+=e.noteLocation(te(a)):Q(a)?o+=e.noteCw(te(a)):re(a)&&(o+=e.noteNarration(ne(a))),o)return t?(r=t,t="",e.endBubble()+o):o;if(a=le(n),ae(a)){r="";var l=B(oe(a),2),c=l[0],i=l[1];if(t===c)return e.dialogue(i);var u="";return t&&(u+=e.endBubble()),t=c,u+=e.startBubble(c),u+=e.dialogue(i,!0)}if(r){t=r,r="";var f="";return f+=e.startBubble(t),f+=e.dialogue(a,!0)}return t?e.dialogue(a):""}}(n),i=0;i<o.length;i++)l+=c(o[i]);return l+=n.endBubble(),l+=function(e){var t="<div toc>\n";e[F]&&(t+="{% btn ".concat(e[F],",, arrow-left, ").concat(e[$]," %}\n"));t+="{% btn ".concat(e[D],",, star, Index %}\n"),e[J]&&(t+="{% btn ".concat(e[J],",, arrow-right, ").concat(e[H]," %}\n"));return t+="</div>\n"}(r)}var ie=function(){var e={startBubble:function(e){return"{% bubble ".concat(e," %}\n")},endBubble:function(){return"{% endbubble %}\n\n"},dialogue:function(e,t){return"".concat(t?"":"\n").concat(e,"\n")},noteLocation:function(e){return"{% note location %}\n**Location:** ".concat(e,"\n{% endnote %}\n\n")},noteCw:function(e){return"{% note cw %}\n**Content Warning:** ".concat(e,"\n{% endnote %}\n\n")},noteNarration:function(e){var t=e.label,r=e.value;return"{% note narration %}\n".concat(t?"**".concat(t,":** "):"").concat(r,"\n{% endnote %}\n\n")},image:function(e){return"{% img ".concat(e," %}\n\n")}};return e};function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var me=function(e){var t=e.nav,r=e.navKey,n=e.label,o=e.onChange,l=e.placeholder;return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{className:"row__spacer",htmlFor:r},n),a.a.createElement("input",{type:"text",id:r,value:t[r],onChange:o,placeholder:l}))},pe=function(){var e=A(),t=e.nav,r=e.setNav,n=function(e){var n=e.target,a=n.id,o=n.value;r(fe(fe({},t),{},se({},a,o)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,'Links for the navigation at the end of each chapter page. "Title" refers to the text that appears when hovering over each navigation button.'),a.a.createElement("div",{className:"tab-content__grid"},a.a.createElement(me,{nav:t,navKey:D,label:"Index URL",placeholder:"Ex. /dead_end_land",onChange:n}),a.a.createElement(me,{nav:t,navKey:F,label:"Prev URL",placeholder:"Ex. /dead_end_land/6",onChange:n}),a.a.createElement(me,{nav:t,navKey:$,label:"Prev Title",placeholder:"Ex. Previous Chapter: Dead End Street (6)",onChange:n}),a.a.createElement(me,{nav:t,navKey:J,label:"Next URL",placeholder:"Ex. /dead_end_land/8",onChange:n}),a.a.createElement(me,{nav:t,navKey:H,label:"Next Title",placeholder:"Ex. Next Chapter: Epilogue (1)",onChange:n})))};function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return de(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return de(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ve={TEXT:"Text",NAV:"Story Nav"},ye=Object.values(ve),he=function(){return a.a.createElement(N,null,a.a.createElement(ge,null))},ge=function(){var e=A(),t=e.nav,r=e.inputRef,o=Object(n.useRef)(null);return a.a.createElement("div",{className:"main-page mashiro-formatter"},a.a.createElement(Ee,null),a.a.createElement(y,{outputRef:o,onConvert:function(){var e=ce({inputData:r.current.editor.getData(),nav:t});o.current.value=e}}),a.a.createElement("textarea",{className:"output",ref:o,spellCheck:!1}))},Ee=function(){var e=be(Object(n.useState)(ve.TEXT),2),t=e[0],r=e[1];return a.a.createElement("div",{className:"input"},a.a.createElement(O,{tabs:ye,clicked:t,onClick:r}),a.a.createElement(E,{value:ve.TEXT,clickedValue:t},a.a.createElement(_,null)),a.a.createElement(E,{value:ve.NAV,clickedValue:t},a.a.createElement(pe,null)))},Oe=Object(n.createContext)(),je=function(e){var t=e.children,r={inputRef:Object(n.useRef)(null)};return a.a.createElement(Oe.Provider,{value:r},t)},Se=function(){return Object(n.useContext)(Oe)};function we(){var e=Se().inputRef,t={plugins:[P.a,I.a,x.a,R.a,M.a,L.a],toolbar:["bold","italic","link","|","undo","redo"]};return Object(n.useEffect)((function(){console.log("JayFormatter editor useEffect");try{e.current.editor.editing.view.change((function(t){t.setAttribute("spellcheck","false",e.current.editor.editing.view.document.getRoot())}))}catch(e){}return function(){}}),[]),a.a.createElement(k.CKEditor,{editor:T.a,config:t,data:"\n<p>Jun: normal text '''bold text''' text with: colon ''italic text''</p>\n<p>'''bold text''' '''more bold text''' ''italic text'' ''more italic text''</p>\n",ref:e})}var Ae=function(e){return e.replace(/'''(.*?)'''/g,"<b>$1</b>")},Ce=function(e){return e.replace(/''(.*?)''/g,"<i>$1</i>")},Ne=function(e){return e.replace(/^([A-Z]\w*:)/g,"<b>$1</b>")};function ke(e){for(var t=e.inputData,r=q(W(t)).querySelectorAll("p"),n=function(e){var t=e.textContent.replace(/&nbsp;/g," ").trim();return t?(t=Ae(t),t=Ce(t),(t=Ne(t))+"\n\n"):""},a="",o=0;o<r.length;o++)a+=n(r[o]);return a}r(272);var Te=function(){return a.a.createElement(je,null,a.a.createElement(Pe,null))},Pe=function(){var e=Se().inputRef,t=Object(n.useRef)(null);return a.a.createElement("div",{className:"main-page markdown-styling-to-html"},a.a.createElement(Ie,null),a.a.createElement(y,{outputRef:t,onConvert:function(){var r=ke({inputData:e.current.editor.getData()});t.current.value=r}}),a.a.createElement("textarea",{className:"output",ref:t,spellCheck:!1}))},Ie=function(){return a.a.createElement("div",{className:"input"},a.a.createElement(E,{value:"Text",clickedValue:"Text"},a.a.createElement(we,null)))},xe="all-url",Re="prev-url",Me="next-url";function Le(e){return Je(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Fe(e)||De()}function _e(e,t){return Je(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||Fe(e,t)||De()}function De(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Fe(e,t){if(e){if("string"==typeof e)return $e(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$e(e,t):void 0}}function $e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Je(e){if(Array.isArray(e))return e}function He(e){var t="";return function(r){var n=r.textContent.replace(/&nbsp;/g," ").trim();if(!n||Ke(n))return"";if(We(n))return e.info(n);if(n=r.innerHTML.replace(/&nbsp;/g," ").trim(),qe(n)){var a=_e(Ue(n),2),o=a[0],l=a[1];if(t===o)return e.dialogue(l);var c="";return t=o,c+=e.boldName(o),c+=l,e.dialogue(c)}return t?e.dialogue(n):""}}var Ke=function(e){return/[一-龠ぁ-ゔァ-ヴーａ-ｚＡ-Ｚ０-９々〆〤、-〻！-～]/.test(e)},We=function(e){return e.startsWith("[")},qe=function(e){var t;return!(Object(U.chain)(e).split(":").map((function(e){return e.trim()})).compact().value().length<2)&&!((null===(t=Object(U.chain)(e).split(":").first().trim())||void 0===t?void 0:t.split(" ").value().length)>1)},Ue=function(e){var t=Le(e.split(":")),r=t[0],n=t.slice(1);return[r.trim(),n.join(":").trim()]};var Ve=function(){var e={dialogue:function(e){return"<p>".concat(e,"</p>\n")},boldName:function(e){return"<strong>".concat(e,":</strong> ")},info:function(e){return"<p><strong><i>".concat(e,"</i></strong></p>\n")}};return e},Be=function(e){return Object(U.mapValues)(e,(function(e){return e.trim()}))},Ge=function(e){return e.filter((function(e){return e[ze.NAME]})).map((function(e){return Be(e)}))},Xe=function(e,t){return e.map((function(e){return e[ze.LINK]?(t=e[ze.LINK],r=e[ze.NAME],'<a href="'.concat(t,'">').concat(r,"</a>")):e[ze.NAME];var t,r})).join(t)},Ye=function(e){for(var t=e.details,r=e.characters,n=e.jpProofreaders,a=e.engProofreaders,o=e.translators,l=e.blockquote,c=Xe(n," + "),i=c?c+" (JP)":"",u=Xe(a," + "),f=u?u+" (ENG)":"",s=Xe(o," & "),m=c||u?"\n<p><b>Proofreading:</b> ".concat(Object(U.compact)([i,f]).join(" &amp; "),"</p>"):"",p="",b=He(Ve()),d=0;d<l.length;d++)p+=b(l[d]);return p=(p=p.replace(/(<p>)/,"$1<i>")).replace(/(<\/p>)/,"</i>$1"),"<p><b>Writer:</b> ".concat(t[ze.WRITER],"</p>\n<p><b>Season:</b> ").concat(t[ze.SEASON],"</p>\n<p><b>Characters:</b> ").concat(r,"</p>").concat(m,"\n<p><b>Translation:</b> ").concat(s,"</p>\n<blockquote>").concat(p.trim(),"</blockquote>\n[[MORE]]\n")},Ze=function(e){var t="<p>✦✦✦✦✦</p>\n<p>";return e[Re]&&(t+='<a href="'.concat(e[Re],'">← prev</a> ')),t+='✦ <a href="'.concat(e[xe],'">all</a> ✦'),e[Me]&&(t+=' <a href="'.concat(e[Me],'">next →</a>')),t+="</p>\n"},ze={WRITER:"writer",SEASON:"season",CHARACTERS:"characters",PROOFREADING:"proofreading",TRANSLATION:"translation",NAME:"name",LINK:"link"};function Qe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var et=function(){var e;return Qe(e={},ze.NAME,""),Qe(e,ze.LINK,""),e};function tt(e){return function(e){if(Array.isArray(e))return at(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||nt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||nt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(e,t){if(e){if("string"==typeof e)return at(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?at(e,t):void 0}}function at(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ot(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return lt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return lt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function lt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ct=Object(n.createContext)(),it=function(){return Object(n.useContext)(ct)},ut=JSON.parse(localStorage.getItem(u.JayFormatter))||{},ft=function(e){return Object(U.isEmpty)(e)?[et()]:e},st=function(e){var t=e.children,r=ot(Object(n.useState)(ut.details||{}),2),o=r[0],l=r[1],c=ot(Object(n.useState)(),2),i=c[0],u=c[1],f=ot(Object(n.useState)(ft(ut.jpProofreaders)),2),s=f[0],m=f[1],p=ot(Object(n.useState)(ft(ut.engProofreaders)),2),b=p[0],d=p[1],v=ot(Object(n.useState)(ft(ut.translators)),2),y=v[0],h=v[1],g=ot(Object(n.useState)((null==ut?void 0:ut.nav)||JSON.parse(localStorage.getItem("nav"))||{}),2),E={nav:g[0],setNav:g[1],details:o,setDetails:l,characters:i,setCharacters:u,jpProofreaders:s,setJpProofreaders:m,engProofreaders:b,setEngProofreaders:d,translators:y,setTranslators:h,inputRef:Object(n.useRef)(null),blockquoteRef:Object(n.useRef)(null)};return a.a.createElement(ct.Provider,{value:E},t)};function mt(){var e=it(),t=e.inputRef,r=e.setCharacters,n={plugins:[P.a,I.a,x.a,R.a,M.a,L.a],toolbar:["bold","italic","link","|","undo","redo"]};return a.a.createElement(k.CKEditor,{editor:T.a,config:n,data:"\n  <p>[A few days later…]</p>\n  <p>[Location: Outside ES]</p>\n  <p>Jun: Hmm... At this rate, I should be able to make it to the venue with time to spare.</p>\n  <p>えぇっと？　この時間なら現場に余裕で間に合いそうっすね</p>\n  <p>Jun: (Right, I'm working with Ibara today. It’s been a while since we had last had a job together as just the two of us, since I usually work either with everyone in Eden or just as Eve.)  </p>\n  <p>（たしか今日は茨との仕事だっけ。茨と二人の仕事っていうのも久しぶりっすねぇ。基本『Eden』か『Eve』で仕事をすることがおおいですし）</p>\n  \n",ref:t,onChange:function(e,t){var n=function(e){for(var t=q(W(e.getData())).querySelectorAll("p"),r=new Set,n=0;n<t.length;n++){var a=t[n].textContent.replace(/&nbsp;/g," ").trim();if(!Ke(a)&&!We(a)&&qe(a)){var o=rt(Ue(a),1)[0];r.add(o)}}return tt(r).join(", ")}(t);r(n)}})}function pt(){var e=it().blockquoteRef,t={plugins:[P.a,I.a,x.a,R.a,M.a,L.a],toolbar:["bold","italic","link","|","undo","redo"]};return a.a.createElement(k.CKEditor,{editor:T.a,config:t,ref:e})}function bt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?bt(Object(r),!0).forEach((function(t){vt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):bt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function vt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var yt=function(e){var t=e.nav,r=e.navKey,n=e.label,o=e.onChange;return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{className:"row__spacer",htmlFor:r},n),a.a.createElement("input",{type:"text",id:r,value:t[r],onChange:o}))},ht=function(){var e=it(),t=e.nav,r=e.setNav,n=function(e){var n=e.target,a=n.id,o=n.value;r(dt(dt({},t),{},vt({},a,o)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Links for the navigation at the end of each post."),a.a.createElement("div",{className:"tab-content__grid"},a.a.createElement(yt,{navKey:xe,label:"All Link",nav:t,onChange:n}),a.a.createElement(yt,{navKey:Re,label:"Prev Link",nav:t,onChange:n}),a.a.createElement(yt,{navKey:Me,label:"Next Link",nav:t,onChange:n})))};r(273);function gt(e){return function(e){if(Array.isArray(e))return jt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Ot(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Et(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||Ot(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ot(e,t){if(e){if("string"==typeof e)return jt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?jt(e,t):void 0}}function jt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function St(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function wt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?St(Object(r),!0).forEach((function(t){At(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):St(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function At(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ct=["Akira","Yuuki Yoshino","Nishioka Maiko","Yuumasu","Kino Seitaro","Happy Elements K.K","Umeda Chitose"],Nt=["Spring","Summer","Autumn","Winter"];function kt(){var e=it(),t=e.details,r=e.setDetails,n=e.characters,o=e.setCharacters,l=e.jpProofreaders,c=e.setJpProofreaders,i=e.engProofreaders,u=e.setEngProofreaders,f=e.translators,s=e.setTranslators,m=function(e){var n=e.target,a=n.id,o=n.value;r(wt(wt({},t),{},At({},a,o)))};return a.a.createElement("div",{className:"tab-content__grid"},a.a.createElement(Tt,{keyForValue:ze.WRITER,label:"Writer"},a.a.createElement("select",{id:ze.WRITER,value:t[ze.WRITER]||Ct[0],onChange:m},Ct.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement(Tt,{keyForValue:ze.SEASON,label:"Season"},a.a.createElement("select",{id:ze.SEASON,value:t[ze.SEASON]||Nt[0],onChange:m},Nt.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement(Tt,{keyForValue:ze.CHARACTERS,label:"Characters"},a.a.createElement("input",{type:"text",id:ze.CHARACTERS,value:n,onChange:function(e){return o(e.target.value)}})),a.a.createElement(Pt,{staff:l,label:"Proofreading (JP)",labelForClassName:"jp-proofreaders",onChange:c,showColumnLabels:!0}),a.a.createElement(Pt,{staff:i,label:"Proofreading (ENG)",labelForClassName:"eng-proofreaders",onChange:u}),a.a.createElement(Pt,{staff:f,label:"Translation",onChange:s}),a.a.createElement(Tt,{label:"Blockquote",labelClassNames:"align-self-start"},a.a.createElement(pt,null)))}var Tt=function(e){var t=e.keyForValue,r=e.label,n=e.labelClassNames,o=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{className:g()("row__spacer",n),htmlFor:t},r),o)},Pt=function(e){var t=e.staff,r=e.label,n=e.labelForClassName,o=e.onChange,l=e.showColumnLabels,c=function(e){var r=e.target,n=r.value,a=Et(r.id.split("_"),3),l=(a[0],a[1]),c=a[2],i=gt(t);i[c]=wt(wt({},i[c]),{},At({},l,n)),o(i)};return a.a.createElement(a.a.Fragment,null,l&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"row__spacer"}),a.a.createElement("div",{className:"staff-column-labels"},a.a.createElement("label",{id:"".concat(n,"-name-label")},"Name"),a.a.createElement("label",{id:"".concat(n,"-credit-label")},"Link (optional)"))),a.a.createElement("label",{className:"row__spacer align-self-start",id:"".concat(n,"-label")},r),a.a.createElement("div",{className:"staff-grid"},a.a.createElement(a.a.Fragment,null,t.map((function(e,t){return a.a.createElement(a.a.Fragment,{key:"".concat(n,"_").concat(t)},a.a.createElement("input",{type:"text","aria-labelledby":"".concat(n,"-label ").concat(n,"-name-label"),id:"".concat(n,"_").concat(ze.NAME,"_").concat(t),value:e[ze.NAME],onChange:c}),a.a.createElement("input",{type:"text","aria-labelledby":"".concat(n,"-label ").concat(n,"-credit-label"),id:"".concat(n,"_").concat(ze.LINK,"_").concat(t),value:e[ze.LINK],onChange:c}))})),a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn--add-person",onClick:function(){var e=gt(t);e.push(et()),o(e)}},"+ Add")))))};function It(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return xt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function xt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Rt={TEXT:"Text",DETAILS:"Details",NAV:"Story Nav"},Mt=Object.values(Rt),Lt=function(){return a.a.createElement(st,null,a.a.createElement(_t,null))},_t=function(){var e=it(),t=e.inputRef,r=e.blockquoteRef,o=e.nav,l=e.details,c=e.characters,i=e.jpProofreaders,f=e.engProofreaders,s=e.translators,m=Object(n.useRef)(null);return a.a.createElement("div",{className:"main-page jay-formatter"},a.a.createElement(Dt,null),a.a.createElement(y,{outputRef:m,onConvert:function(){var e=function(e){var t=e.inputData,r=e.blockquoteData,n=e.nav,a=e.details,o=e.characters,l=e.jpProofreaders,c=e.engProofreaders,i=e.translators;n=Be(n),K({formatter:u.JayFormatter,key:"nav",value:n}),a=Be(a),K({formatter:u.JayFormatter,key:"details",value:a}),l=Ge(l),K({formatter:u.JayFormatter,key:"jpProofreaders",value:l}),c=Ge(c),K({formatter:u.JayFormatter,key:"engProofreaders",value:c}),i=Ge(i),K({formatter:u.JayFormatter,key:"translators",value:i});for(var f=Ve(),s=q(W(t)),m=q(W(r)),p=s.querySelectorAll("p"),b=m.querySelectorAll("p"),d=Ye({details:a,characters:o,jpProofreaders:l,engProofreaders:c,translators:i,blockquote:b}),v=He(f),y=0;y<p.length;y++)d+=v(p[y]);return d+=Ze(n)}({inputData:t.current.editor.getData(),blockquoteData:r.current.editor.getData(),nav:o,details:l,characters:c,jpProofreaders:i,engProofreaders:f,translators:s});m.current.value=e}}),a.a.createElement("textarea",{className:"output",ref:m,spellCheck:!1}))},Dt=function(){var e=It(Object(n.useState)(Rt.TEXT),2),t=e[0],r=e[1];return a.a.createElement("div",{className:"input"},a.a.createElement(O,{tabs:Mt,clicked:t,onClick:r}),a.a.createElement(E,{value:Rt.TEXT,clickedValue:t},a.a.createElement(mt,null)),a.a.createElement(E,{value:Rt.DETAILS,clickedValue:t},a.a.createElement(kt,null)),a.a.createElement(E,{value:Rt.NAV,clickedValue:t},a.a.createElement(ht,null)))};r(274),r(275);var Ft=Object(l.hot)((function(){return a.a.createElement(c.a,{basename:"/"},a.a.createElement(m,null),a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/".concat(u.MashiroFormatter)},a.a.createElement(he,null)),a.a.createElement(i.a,{path:"/".concat(u.MarkdownStylingToHtml)},a.a.createElement(Te,null)),a.a.createElement(i.a,{path:"/".concat(u.JayFormatter)},a.a.createElement(Lt,null)),a.a.createElement(i.a,{exact:!0,path:"/"},a.a.createElement(he,null))))}));Object(o.render)(a.a.createElement(Ft,null),document.querySelector("#root"))}});