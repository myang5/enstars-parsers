!function(e){function t(t){for(var n,l,c=t[0],i=t[1],u=t[2],f=0,m=[];f<c.length;f++)l=c[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&m.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);m.length;)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={0:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;o.push([276,1]),r()}({234:function(e,t,r){},239:function(e,t,r){},240:function(e,t,r){},272:function(e,t,r){},273:function(e,t,r){},274:function(e,t,r){},275:function(e,t,r){},276:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(225),l=r(228),c=r(186),i=r(36),u={MashiroFormatter:"mashiro-formatter",MarkdownStylingToHtml:"markdown-styling-to-html",JayFormatter:"jay-formatter"},s=u.MashiroFormatter,f=(r(234),Object.values(u));function m(){var e=Object(i.g)(),t=Object(i.f)(),r=e.pathname.split("/")[1],n=r||s;return a.a.createElement("header",null,a.a.createElement("h1",null,a.a.createElement(c.b,{className:"star-link",to:"/"},"ENSTARS PARSERS")),a.a.createElement("ul",{id:"navbar"},a.a.createElement("li",null,a.a.createElement("select",{value:n,onChange:function(e){var r=e.target.value;t.push("/".concat(r))}},f.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://twitter.com/gayandasleep"},"CONTACT")),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://github.com/myang5/enstars-parsers/issues"},"REPORT ISSUE")),a.a.createElement("li",null,a.a.createElement("a",{className:"star-link",target:"_blank",rel:"noreferrer",href:"https://github.com/myang5/enstars-parsers"},"GITHUB"))))}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v="Copy Output",d="Copied",y=function(e){var t=e.outputRef,r=e.onConvert,o=p(Object(n.useState)(v),2),l=o[0],c=o[1];return a.a.createElement("div",{className:"actions"},a.a.createElement("button",{type:"button",onClick:function(){c(v),r()},id:"convert-button"},"CONVERT"),a.a.createElement("button",{type:"button",onClick:function(){t.current.select(),document.execCommand("copy"),c(d)},id:"copy-button"},l))},h=(r(239),r(187)),g=r.n(h),E=function(e){var t=e.clickedValue,r=e.value,n=e.children;return a.a.createElement("div",{className:g()("tab-content","tab-content--".concat(r.replace(" ","-").toLowerCase()),{"tab-content--active":t===r})},n)},O=(r(240),function(e){var t=e.tabs,r=e.clicked,n=e.onClick;return a.a.createElement("div",{className:"tab-menu"},t.map((function(e){return a.a.createElement("button",{type:"button",key:e,className:"tablink".concat(r===e?" active":""),onClick:function(){return n(e)}},e)})))});function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w=Object(n.createContext)(),C=function(){return Object(n.useContext)(w)},A=JSON.parse(localStorage.getItem(u.MashiroFormatter))||{},k=function(e){var t=e.children,r=j(Object(n.useState)(A.nav||JSON.parse(localStorage.getItem("nav"))||{}),2),o={nav:r[0],setNav:r[1],inputRef:Object(n.useRef)(null)};return a.a.createElement(w.Provider,{value:o},t)},N=r(119),P=r(128),x=r(123),T=r(129),I=r(126),R=r(127),M=r(122),_=r(125);function D(){var e=C().inputRef,t={plugins:[x.a,T.a,I.a,R.a,M.a,_.a],toolbar:["bold","italic","link","|","undo","redo"]};return Object(n.useEffect)((function(){try{e.current.editor.editing.view.change((function(t){t.setAttribute("spellcheck","false",e.current.editor.editing.view.document.getRoot())}))}catch(e){}return function(){}}),[]),a.a.createElement(N.CKEditor,{editor:P.a,config:t,data:"\n<p>Location: Pool</p>\n<p>CW: Death threats</p>\n<p>Narration: Time: Several minutes later</p>\n<p>Narration: Several minutes later</p>\n<p>Image: /img/es/eventstory/meteorimpact/firsthalfch2.jpg</p>\n<p>Natsume: HoweVER. Wi<i>th</i>in a ga<i>me</i> where <i>every</i>thing is <i>proGRAMMED</i></p>\n<p>In this world where everything obeys my every <hold>garDEN—</hold></p>\n<p>Image: /img/es/eventstory/meteorimpact/firsthalfch2.jpg</p>\n<p><th>And I will give everyone an equal opportunity to experience their own happily ever afTER.</th></p>\n<p><spell>—Welcome to paradise, my <hold>idols♪</hold></spell></p>\n<p>Tsumugi: Um, but, no matter how you look at it, I'm pretty sure this world is a dystopia, right?</p>\n",ref:e})}var F="index",L="prev-url",$="prev-title",J="next-url",H="next-title",q=function(e){var t=e.formatter,r=e.key,n=e.value,a=localStorage.getItem(t);a?a=JSON.parse(a):((a={})[r]=JSON.parse(localStorage.getItem(r)),localStorage.removeItem(r)),a[r]=n,localStorage.setItem(t,JSON.stringify(a))},U=function(e){return(new DOMParser).parseFromString(e,"text/html")},V=function(e){var t=e.querySelectorAll("br");if(t.length>0){for(var r=t[0].parentNode,n=r.parentNode,a=0;a<t.length;a++){var o=new Range;if(o.setStart(t[a].parentNode,0),o.setEndBefore(t[a]),!o.collapsed){var l=document.createElement(r.tagName.toLowerCase());l.append(o.extractContents()),n.insertBefore(l,r)}t[a].remove()}0===r.innerHTML.length&&r.remove()}return e},K=r(66);function W(e){return Z(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||G(e)||X()}function B(e,t){return Z(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||G(e,t)||X()}function X(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function G(e,t){if(e){if("string"==typeof e)return Y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(e,t):void 0}}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Z(e){if(Array.isArray(e))return e}var z=function(e){return e.toUpperCase().startsWith("LOCATION:")},Q=function(e){return e.toUpperCase().startsWith("CW:")},ee=function(e){return e.toUpperCase().startsWith("IMAGE:")},te=function(e){return e.match(/^\w*:(.*)/)[1].trim()},re=function(e){return e.toUpperCase().startsWith("NARRATION:")},ne=function(e){var t=e.match(/^\w*:( ?\w*?):(.*)/);return t?{label:t[1].trim(),value:t[2].trim()}:{value:te(e)}},ae=function(e){var t=e.split(":")[0].trim();if(!t)return!1;var r=Object(K.chain)(t).split(" ").map((function(e){return e.trim()})).compact().value();if(r.length>2||r.length>1&&!r[0].includes(","))return!1;var n=e.split(":")[0];return Object(K.inRange)(Object(K.chain)(n).split(",").map((function(e){return e.trim()})).compact().value().length,1,3)},oe=function(e){var t=W(e.split(":")),r=t[0],n=t.slice(1);return[Object(K.chain)(r).split(",").map((function(e){return e.trim()})).join(" ").value(),n.join(":").trim()]},le=function(e){e.querySelectorAll("i").forEach((function(e){e.replaceWith("*".concat(e.textContent,"*"))})),e.innerHTML=e.innerHTML.replace(/\*( ?)(.+?)( ?)\*/g,"$1*$2*$3"),e.innerHTML=e.innerHTML.replace(/\*(\w+?)\*([^ ])/g,"<em>$1</em>$2"),e.innerHTML=e.innerHTML.replace(/([^ ])\*(\w+?)\*/g,"$1<em>$2</em>"),e.querySelectorAll("strong").forEach((function(e){e.replaceWith("**".concat(e.textContent,"**"))})),e.innerHTML=e.innerHTML.replace(/\*\*( ?)(.+?)( ?)\*\*/g,"$1**$2**$3"),e.innerHTML=e.innerHTML.replace(/\*\*(\w+?)\*\*([^ ])/g,"<b>$1</b>$2"),e.innerHTML=e.innerHTML.replace(/([^ ])\*\*(\w+?)\*\*/g,"$1<b>$2</b>");var t=e.innerHTML;if(t.startsWith("**")){var r=t.match(/^\*\*(.*?)\*\*/),n=r[0],a=r[1],o=t.replace(n,a);if(ae(o))return o}return t},ce=function(e){return(e=(e=(e=e.replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/&nbsp;/g," ")).trim()};function ie(e){var t=e.inputData,r=e.nav,n=ue(),a=V(U(t));q({formatter:u.MashiroFormatter,key:"nav",value:r});for(var o=a.querySelectorAll("p"),l="",c=function(e){var t="",r="";return function(n){var a=n.textContent.replace(/&nbsp;/g," ").trim();if(!a)return"";var o="";if(ee(a)?o+=e.image(te(a)):z(a)?o+=e.noteLocation(te(a)):Q(a)?o+=e.noteCw(te(a)):re(a)&&(o+=e.noteNarration(ne(a))),o)return t?(r=t,t="",e.endBubble()+o):o;if(a=le(n),a=ce(a),ae(a)){r="";var l=B(oe(a),2),c=l[0],i=l[1];if(t===c)return e.dialogue(i);var u="";return t&&(u+=e.endBubble()),t=c,u+=e.startBubble(c),u+=e.dialogue(i,!0)}if(r){t=r,r="";var s="";return s+=e.startBubble(t),s+=e.dialogue(a,!0)}return t?e.dialogue(a):""}}(n),i=0;i<o.length;i++)l+=c(o[i]);return l+=n.endBubble(),l+=function(e){var t="<div toc>\n";e[L]&&(t+="{% btn ".concat(e[L],",, arrow-left, ").concat(e[$]," %}\n"));t+="{% btn ".concat(e[F],",, star, Index %}\n"),e[J]&&(t+="{% btn ".concat(e[J],",, arrow-right, ").concat(e[H]," %}\n"));return t+="</div>\n"}(r)}var ue=function(){var e={startBubble:function(e){return"{% bubble ".concat(e," %}\n")},endBubble:function(){return"{% endbubble %}\n\n"},dialogue:function(e,t){return"".concat(t?"":"\n").concat(e,"\n")},noteLocation:function(e){return"{% note location %}\n**Location:** ".concat(e,"\n{% endnote %}\n\n")},noteCw:function(e){return"{% note cw %}\n**Content Warning:** ".concat(e,"\n{% endnote %}\n\n")},noteNarration:function(e){var t=e.label,r=e.value;return"{% note narration %}\n".concat(t?"**".concat(t,":** "):"").concat(r,"\n{% endnote %}\n\n")},image:function(e){return"{% img ".concat(e," %}\n\n")}};return e};function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){me(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function me(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var pe=function(e){var t=e.nav,r=e.navKey,n=e.label,o=e.onChange,l=e.placeholder;return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{className:"row__spacer",htmlFor:r},n),a.a.createElement("input",{type:"text",id:r,value:t[r],onChange:o,placeholder:l}))},be=function(){var e=C(),t=e.nav,r=e.setNav,n=function(e){var n=e.target,a=n.id,o=n.value;r(fe(fe({},t),{},me({},a,o)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,'Links for the navigation at the end of each chapter page. "Title" refers to the text that appears when hovering over each navigation button.'),a.a.createElement("div",{className:"tab-content__grid"},a.a.createElement(pe,{nav:t,navKey:F,label:"Index URL",placeholder:"Ex. /dead_end_land",onChange:n}),a.a.createElement(pe,{nav:t,navKey:L,label:"Prev URL",placeholder:"Ex. /dead_end_land/6",onChange:n}),a.a.createElement(pe,{nav:t,navKey:$,label:"Prev Title",placeholder:"Ex. Previous Chapter: Dead End Street (6)",onChange:n}),a.a.createElement(pe,{nav:t,navKey:J,label:"Next URL",placeholder:"Ex. /dead_end_land/8",onChange:n}),a.a.createElement(pe,{nav:t,navKey:H,label:"Next Title",placeholder:"Ex. Next Chapter: Epilogue (1)",onChange:n})))};function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return de(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return de(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ye={TEXT:"Text",NAV:"Story Nav"},he=Object.values(ye),ge=function(){return a.a.createElement(k,null,a.a.createElement(Ee,null))},Ee=function(){var e=C(),t=e.nav,r=e.inputRef,o=Object(n.useRef)(null);return a.a.createElement("div",{className:"main-page mashiro-formatter"},a.a.createElement(Oe,null),a.a.createElement(y,{outputRef:o,onConvert:function(){var e=ie({inputData:r.current.editor.getData(),nav:t});o.current.value=e}}),a.a.createElement("textarea",{className:"output",ref:o,spellCheck:!1}))},Oe=function(){var e=ve(Object(n.useState)(ye.TEXT),2),t=e[0],r=e[1];return a.a.createElement("div",{className:"input"},a.a.createElement(O,{tabs:he,clicked:t,onClick:r}),a.a.createElement(E,{value:ye.TEXT,clickedValue:t},a.a.createElement(D,null)),a.a.createElement(E,{value:ye.NAV,clickedValue:t},a.a.createElement(be,null)))},je=Object(n.createContext)(),Se=function(e){var t=e.children,r={inputRef:Object(n.useRef)(null)};return a.a.createElement(je.Provider,{value:r},t)},we=function(){return Object(n.useContext)(je)};function Ce(){var e=we().inputRef,t={plugins:[x.a,T.a,I.a,R.a,M.a,_.a],toolbar:["bold","italic","link","|","undo","redo"]};return Object(n.useEffect)((function(){console.log("JayFormatter editor useEffect");try{e.current.editor.editing.view.change((function(t){t.setAttribute("spellcheck","false",e.current.editor.editing.view.document.getRoot())}))}catch(e){}return function(){}}),[]),a.a.createElement(N.CKEditor,{editor:P.a,config:t,data:"\n<p>Jun: normal text '''bold text''' text with: colon ''italic text''</p>\n<p>'''bold text''' '''more bold text''' ''italic text'' ''more italic text''</p>\n",ref:e})}var Ae=function(e){return e.replace(/'''(.*?)'''/g,"<b>$1</b>")},ke=function(e){return e.replace(/''(.*?)''/g,"<i>$1</i>")},Ne=function(e){return e.replace(/^([A-Z]\w*:)/g,"<b>$1</b>")};function Pe(e){for(var t=e.inputData,r=V(U(t)).querySelectorAll("p"),n=function(e){var t=e.textContent.replace(/&nbsp;/g," ").trim();return t?(t=Ae(t),t=ke(t),(t=Ne(t))+"\n\n"):""},a="",o=0;o<r.length;o++)a+=n(r[o]);return a}r(272);var xe=function(){return a.a.createElement(Se,null,a.a.createElement(Te,null))},Te=function(){var e=we().inputRef,t=Object(n.useRef)(null);return a.a.createElement("div",{className:"main-page markdown-styling-to-html"},a.a.createElement(Ie,null),a.a.createElement(y,{outputRef:t,onConvert:function(){var r=Pe({inputData:e.current.editor.getData()});t.current.value=r}}),a.a.createElement("textarea",{className:"output",ref:t,spellCheck:!1}))},Ie=function(){return a.a.createElement("div",{className:"input"},a.a.createElement(E,{value:"Text",clickedValue:"Text"},a.a.createElement(Ce,null)))},Re="all-url",Me="prev-url",_e="next-url";function De(e){return He(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||$e(e)||Le()}function Fe(e,t){return He(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||$e(e,t)||Le()}function Le(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $e(e,t){if(e){if("string"==typeof e)return Je(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Je(e,t):void 0}}function Je(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function He(e){if(Array.isArray(e))return e}var qe=function(e){var t="";return function(r){var n=r.textContent.replace(/&nbsp;/g," ").trim();if(!n||Ue(n))return"";if(Ve(n))return e.info(n);if(n=r.innerHTML.replace(/&nbsp;/g," ").trim(),Ke(n)){var a=Fe(We(n),2),o=a[0],l=a[1];if(t===o)return e.dialogue(l);var c="";return t=o,c+=e.boldName(o),c+=l,e.dialogue(c)}return t?e.dialogue(n):""}},Ue=function(e){return/[一-龠ぁ-ゔァ-ヴーａ-ｚＡ-Ｚ０-９々〆〤、-〻！-～]/.test(e)},Ve=function(e){return e.startsWith("[")},Ke=function(e){var t;return!(Object(K.chain)(e).split(":").map((function(e){return e.trim()})).compact().value().length<2)&&!((null===(t=Object(K.chain)(e).split(":").first().trim())||void 0===t?void 0:t.split(" ").value().length)>1)},We=function(e){var t=De(e.split(":")),r=t[0],n=t.slice(1);return[r.trim(),n.join(":").trim()]},Be="writer",Xe="season",Ge="characters",Ye="image",Ze="name",ze="link",Qe=function(e,t){return e.map((function(e){return e[ze]?(t=e[ze],r=e[Ze],'<a href="'.concat(t,'">').concat(r,"</a>")):e[Ze];var t,r})).join(t)};function et(e){var t=e.inputData,r=e.blockquoteData,n=e.nav,a=e.details,o=e.characters,l=e.jpProofreaders,c=e.engProofreaders,i=e.translators;n=rt(n),q({formatter:u.JayFormatter,key:"nav",value:n}),a=rt(a),q({formatter:u.JayFormatter,key:"details",value:a}),l=nt(l),q({formatter:u.JayFormatter,key:"jpProofreaders",value:l}),c=nt(c),q({formatter:u.JayFormatter,key:"engProofreaders",value:c}),i=nt(i),q({formatter:u.JayFormatter,key:"translators",value:i});var s=V(U(r)).querySelectorAll("p"),f=tt(),m=function(e){for(var t=e.details,r=e.characters,n=e.jpProofreaders,a=e.engProofreaders,o=e.translators,l=e.blockquote,c=Qe(n," + "),i=c?c+" (JP)":"",u=Qe(a," + "),s=u?u+" (ENG)":"",f=Qe(o," & "),m=c||u?"\n<p><b>Proofreading:</b> ".concat(Object(K.compact)([i,s]).join(" &amp; "),"</p>"):"",p="",b=tt(),v=qe(b),d=0;d<l.length;d++)p+=v(l[d]);return p=(p=p.replace(/(<p>)/,"$1<i>")).replace(/(<\/p>)/,"</i>$1"),"<p><b>Writer:</b> ".concat(t[Be],"</p>\n<p><b>Season:</b> ").concat(t[Xe],"</p>\n<p><b>Characters:</b> ").concat(r,"</p>").concat(m,"\n<p><b>Translation:</b> ").concat(f,"</p>\n<blockquote>").concat(p.trim(),'</blockquote>\n<img src="').concat(t[Ye],'">\n[[MORE]]\n')}({details:a,characters:o,jpProofreaders:l,engProofreaders:c,translators:i,blockquote:s});m+=f.oissuOpen();for(var p=V(U(t)).querySelectorAll("p"),b=qe(f),v=0;v<p.length;v++)m+=b(p[v]);return m+=f.oissuClose(),m+=at(n)}var tt=function(){var e={dialogue:function(e){return"<p>".concat(e,"</p>\n")},boldName:function(e){return"<strong>".concat(e,":</strong> ")},info:function(e){return"<p><strong><i>".concat(e,"</i></strong></p>\n")},separator:function(){return"<p>✦✦✦✦✦</p>\n"},oissuOpen:function(){return'<div class="oissu">\n'},oissuClose:function(){return"</div>\n"}};return e},rt=function(e){return Object(K.mapValues)(e,(function(e){return e.trim()}))},nt=function(e){return e.filter((function(e){return e[Ze]})).map((function(e){return rt(e)}))},at=function(e){var t=tt(),r="".concat(t.separator(),"<p>");return e[Me]&&(r+='<a href="'.concat(e[Me],'">← prev</a> ')),r+='✦ <a href="'.concat(e[Re],'">all</a> ✦'),e[_e]&&(r+=' <a href="'.concat(e[_e],'">next →</a>')),r+="</p>\n"};function ot(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var lt=function(){var e;return ot(e={},Ze,""),ot(e,ze,""),e};function ct(e){return function(e){if(Array.isArray(e))return st(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||ut(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function it(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||ut(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ut(e,t){if(e){if("string"==typeof e)return st(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?st(e,t):void 0}}function st(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ft(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return mt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return mt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function mt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var pt=Object(n.createContext)(),bt=function(){return Object(n.useContext)(pt)},vt=JSON.parse(localStorage.getItem(u.JayFormatter))||{},dt=function(e){return Object(K.isEmpty)(e)?[lt()]:e},yt=function(e){var t=e.children,r=ft(Object(n.useState)(vt.details||{}),2),o=r[0],l=r[1],c=ft(Object(n.useState)(),2),i=c[0],u=c[1],s=ft(Object(n.useState)(dt(vt.jpProofreaders)),2),f=s[0],m=s[1],p=ft(Object(n.useState)(dt(vt.engProofreaders)),2),b=p[0],v=p[1],d=ft(Object(n.useState)(dt(vt.translators)),2),y=d[0],h=d[1],g=ft(Object(n.useState)((null==vt?void 0:vt.nav)||JSON.parse(localStorage.getItem("nav"))||{}),2),E={nav:g[0],setNav:g[1],details:o,setDetails:l,characters:i,setCharacters:u,jpProofreaders:f,setJpProofreaders:m,engProofreaders:b,setEngProofreaders:v,translators:y,setTranslators:h,inputRef:Object(n.useRef)(null),blockquoteRef:Object(n.useRef)(null)};return a.a.createElement(pt.Provider,{value:E},t)};function ht(){var e=bt(),t=e.inputRef,r=e.setCharacters,n={plugins:[x.a,T.a,I.a,R.a,M.a,_.a],toolbar:["bold","italic","link","|","undo","redo"]};return a.a.createElement(N.CKEditor,{editor:P.a,config:n,data:"\n  <p>[A few days later…]</p>\n  <p>[Location: Outside ES]</p>\n  <p>Jun: Hmm... At this rate, I should be able to make it to the venue with time to spare.</p>\n  <p>えぇっと？　この時間なら現場に余裕で間に合いそうっすね</p>\n  <p>Jun: (Right, I'm working with Ibara today. It’s been a while since we had last had a job together as just the two of us, since I usually work either with everyone in Eden or just as Eve.)  </p>\n  <p>（たしか今日は茨との仕事だっけ。茨と二人の仕事っていうのも久しぶりっすねぇ。基本『Eden』か『Eve』で仕事をすることがおおいですし）</p>\n  \n",ref:t,onChange:function(e,t){var n=function(e){for(var t=V(U(e.getData())).querySelectorAll("p"),r=new Set,n=0;n<t.length;n++){var a=t[n].textContent.replace(/&nbsp;/g," ").trim();if(!Ue(a)&&!Ve(a)&&Ke(a)){var o=it(We(a),1)[0];r.add(o)}}return ct(r).join(", ")}(t);r(n)}})}function gt(){var e=bt().blockquoteRef,t={plugins:[x.a,T.a,I.a,R.a,M.a,_.a],toolbar:["bold","italic","link","|","undo","redo"]};return a.a.createElement(N.CKEditor,{editor:P.a,config:t,ref:e})}function Et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ot(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Et(Object(r),!0).forEach((function(t){jt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Et(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function jt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function St(){var e=bt(),t=e.nav,r=e.setNav,n=function(e){var n=e.target,a=n.id,o=n.value;r(Ot(Ot({},t),{},jt({},a,o)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Links for the navigation at the end of each post."),a.a.createElement("div",{className:"tab-content__grid"},a.a.createElement(wt,{navKey:Re,label:"All Link",nav:t,onChange:n}),a.a.createElement(wt,{navKey:Me,label:"Prev Link",nav:t,onChange:n}),a.a.createElement(wt,{navKey:_e,label:"Next Link",nav:t,onChange:n})))}var wt=function(e){var t=e.nav,r=e.navKey,n=e.label,o=e.onChange;return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{className:"row__spacer",htmlFor:r},n),a.a.createElement("input",{type:"text",id:r,value:t[r],onChange:o}))};r(273);function Ct(e){return function(e){if(Array.isArray(e))return Nt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||kt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function At(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||kt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function kt(e,t){if(e){if("string"==typeof e)return Nt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Nt(e,t):void 0}}function Nt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Pt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pt(Object(r),!0).forEach((function(t){Tt(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Tt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var It=["Akira","Yuuki Yoshino","Nishioka Maiko","Yuumasu","Kino Seitaro","Happy Elements K.K","Umeda Chitose"],Rt=["Spring","Summer","Autumn","Winter"];function Mt(){var e=bt(),t=e.details,r=e.setDetails,n=e.characters,o=e.setCharacters,l=e.jpProofreaders,c=e.setJpProofreaders,i=e.engProofreaders,u=e.setEngProofreaders,s=e.translators,f=e.setTranslators,m=function(e){var n=e.target,a=n.id,o=n.value;r(xt(xt({},t),{},Tt({},a,o)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"tab-content__grid"},a.a.createElement(_t,{keyForValue:Be,label:"Writer"},a.a.createElement("select",{id:Be,value:t[Be]||It[0],onChange:m},It.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement(_t,{keyForValue:Xe,label:"Season"},a.a.createElement("select",{id:Xe,value:t[Xe]||Rt[0],onChange:m},Rt.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement(_t,{keyForValue:Ge,label:"Characters"},a.a.createElement("input",{type:"text",id:Ge,value:n,onChange:function(e){return o(e.target.value)}})),a.a.createElement("div",{className:"row__spacer",style:{marginBottom:"-12px"}}),a.a.createElement("div",{className:"staff-column-labels",style:{marginBottom:"-12px"}},a.a.createElement("label",{id:"person-name-label"},"Name"),a.a.createElement("label",{id:"person-credit-label"},"Link (optional)")),a.a.createElement(Dt,{staff:l,label:"Proofreading (JP)",labelForClassName:"jp-proofreaders",onChange:c}),a.a.createElement(Dt,{staff:i,label:"Proofreading (ENG)",labelForClassName:"eng-proofreaders",onChange:u}),a.a.createElement(Dt,{staff:s,label:"Translation",onChange:f}),a.a.createElement(_t,{label:"Blockquote",labelClassNames:"align-self-start"},a.a.createElement(gt,null)),a.a.createElement(_t,{keyForValue:Ye,label:"Image link"},a.a.createElement("input",{type:"text",id:Ye,value:t[Ye],onChange:m}))))}var _t=function(e){var t=e.keyForValue,r=e.label,n=e.labelClassNames,o=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{className:g()("row__spacer",n),htmlFor:t},r),o)},Dt=function(e){var t=e.staff,r=e.label,n=e.labelForClassName,o=e.onChange,l=function(e){var r=e.target,n=r.value,a=At(r.id.split("_"),3),l=(a[0],a[1]),c=a[2],i=Ct(t);i[c]=xt(xt({},i[c]),{},Tt({},l,n)),o(i)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{className:"row__spacer align-self-start",id:"".concat(n,"-label")},r),a.a.createElement("div",{className:"staff-grid"},a.a.createElement(a.a.Fragment,null,t.map((function(e,t){return a.a.createElement(a.a.Fragment,{key:"".concat(n,"_").concat(t)},a.a.createElement("input",{type:"text","aria-labelledby":"".concat(n,"-label person-name-label"),id:"".concat(n,"_").concat(Ze,"_").concat(t),value:e[Ze],onChange:l}),a.a.createElement("input",{type:"text","aria-labelledby":"".concat(n,"-label person-credit-label"),id:"".concat(n,"_").concat(ze,"_").concat(t),value:e[ze],onChange:l}))})),a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn--add-person",onClick:function(){var e=Ct(t);e.push(lt()),o(e)}},"+ Add")))))};function Ft(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Lt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Lt(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Lt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $t={TEXT:"Text",DETAILS:"Details",NAV:"Story Nav"},Jt=Object.values($t),Ht=function(){return a.a.createElement(yt,null,a.a.createElement(qt,null))},qt=function(){var e=bt(),t=e.inputRef,r=e.blockquoteRef,o=e.nav,l=e.details,c=e.characters,i=e.jpProofreaders,u=e.engProofreaders,s=e.translators,f=Object(n.useRef)(null);return a.a.createElement("div",{className:"main-page jay-formatter"},a.a.createElement(Ut,null),a.a.createElement(y,{outputRef:f,onConvert:function(){var e=et({inputData:t.current.editor.getData(),blockquoteData:r.current.editor.getData(),nav:o,details:l,characters:c,jpProofreaders:i,engProofreaders:u,translators:s});f.current.value=e}}),a.a.createElement("textarea",{className:"output",ref:f,spellCheck:!1}))},Ut=function(){var e=Ft(Object(n.useState)($t.TEXT),2),t=e[0],r=e[1];return a.a.createElement("div",{className:"input"},a.a.createElement(O,{tabs:Jt,clicked:t,onClick:r}),a.a.createElement(E,{value:$t.TEXT,clickedValue:t},a.a.createElement(ht,null)),a.a.createElement(E,{value:$t.DETAILS,clickedValue:t},a.a.createElement(Mt,null)),a.a.createElement(E,{value:$t.NAV,clickedValue:t},a.a.createElement(St,null)))};r(274),r(275);var Vt=Object(l.hot)((function(){return a.a.createElement(c.a,{basename:"/"},a.a.createElement(m,null),a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/".concat(u.MashiroFormatter)},a.a.createElement(ge,null)),a.a.createElement(i.a,{path:"/".concat(u.MarkdownStylingToHtml)},a.a.createElement(xe,null)),a.a.createElement(i.a,{path:"/".concat(u.JayFormatter)},a.a.createElement(Ht,null)),a.a.createElement(i.a,{exact:!0,path:"/"},a.a.createElement(ge,null))))}));Object(o.render)(a.a.createElement(Vt,null),document.querySelector("#root"))}});