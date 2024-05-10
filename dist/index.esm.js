const e=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|17[0-9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;const t=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;const n=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;const r=/^([1-9]{1})(\d{14}|\d{18})$/;const o=/^[u4e00-u9fa5]$/;const c=/^[A-Za-z]*$/;const s=/^(https?:|mailto:|tel:)$/;const a=/^[\u4e00-\u9fa5a-zA-Z0-9]{1,50}$/;const i=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$/;var l,u=Object.freeze({__proto__:null,TelRegExp:e,ValidatorTel:function(t){return e.test(t)},EmailRegExp:t,ValidatorEmail:function(e){return t.test(e)},IdCardRegExp:n,ValidatorIdCard:function(e){return n.test(e)},BankCardRegExp:r,ValidatorBankCard:function(e){return r.test(e)},ChineseRegExp:o,ValidatorChinese:function(e){return o.test(e)},LetterRegExp:c,ValidatorLetter:function(e){return c.test(e)},UrlRegExp:s,ValidatorUrl:function(e){return s.test(e)},CCARegExp:a,ValidatorCCA:function(e){return a.test(e)},PswRegExp:i,ValidatorPsw:function(e){return i.test(e)}});!function(e){e.excel="application/vnd.ms-excel",e.xls="application/vnd.ms-excel",e.xlsx="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.pdf="application/pdf",e.doc="application/msword",e.docx="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.zip="application/zip",e.rar="application/rar",e.png="image/png",e.webp="image/webp",e.bmp="image/bmp",e.jpeg="image/jpeg",e.gif="image/gif",e.tiff="image/tiff",e.svg="image/svg+xml",e.mp4="video/mp4"}(l||(l={}));var d=Object.freeze({__proto__:null,tagADownload:function(e){const{url:t="",title:n="",target:r="_blank"}=e,o=document.createElement("a");o.setAttribute("href",t),o.setAttribute("download",n),o.setAttribute("target",r),document.body.appendChild(o),o.click(),document.body.removeChild(o)},downloadBlobFile:(e,t,n)=>{const r=n?new Blob([e],{type:l[n]}):new Blob([e]);if("download"in document.createElement("a")){const e=document.createElement("a");e.download=t,e.style.display="none",e.href=URL.createObjectURL(r),document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}},previewPdf:e=>{const t=new Blob([e],{type:"application/pdf"});if("download"in document.createElement("a")){const e=document.createElement("a");e.style.display="none",e.href=`${URL.createObjectURL(t)}#scrollbars=0&toolbar=0&statusbar=0`,e.target="_blank",document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}},previewImage:e=>{if("download"in document.createElement("a")){const t=document.createElement("a");t.style.display="none",t.href=URL.createObjectURL(e),t.target="_blank",document.body.appendChild(t),t.click(),URL.revokeObjectURL(t.href),document.body.removeChild(t)}},convertSize:e=>{if(null===e||""===e)return"0Kb";let t=0;const n=parseFloat(e);t=Math.floor(Math.log(n)/Math.log(1024));return(n/Math.pow(1024,t)).toFixed(2)+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}});
/*! js-cookie v3.0.5 | MIT */function f(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var p=function e(t,n){function r(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=f({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var s in o)o[s]&&(c+="; "+s,!0!==o[s]&&(c+="="+o[s].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var c=n[o].split("="),s=c.slice(1).join("=");try{var a=decodeURIComponent(c[0]);if(r[a]=t.read(s,a),e===a)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){r(e,"",f({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,f({},this.attributes,t))},withConverter:function(t){return e(f({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});var h=Object.freeze({__proto__:null,getCache:function(e,t="local"){let n;switch(t){case"cookie":n=p.get(e);break;case"session":const t=sessionStorage.getItem(e)||"";try{n=JSON.parse(t)}catch(e){n=t}break;default:const r=localStorage.getItem(e)||"";try{n=JSON.parse(r)}catch(e){n=r}}return n},setCache:function(e,t,n="local"){switch(n){case"cookie":p.set(e,t,{expires:7});break;case"session":sessionStorage.setItem(e,JSON.stringify(t));break;default:localStorage.setItem(e,JSON.stringify(t))}},clearCache:function(e,t="local"){switch(t){case"cookie":p.remove(e);break;case"session":sessionStorage.removeItem(e);break;default:localStorage.removeItem(e)}},clearAll:function(e="local",t){switch(e){case"cookie":t?.forEach((e=>p.remove(e)));break;case"session":sessionStorage.clear();break;default:localStorage.clear()}}});var m=Object.freeze({__proto__:null,deepFind:function e(t,n){const r=t instanceof Array?t:[t];for(let t=0;t<r.length;t++){if(n(r[t]))return r[t];{const o=e(r[t].children||[],n);if(o)return o}}},deepFindPath:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++){if(n(o[t]))return r.push(o[t]),r;if(e(o[t].children||[],n,r))return r.push(o[t]),r}},findFirstNode:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++)n(o[t])&&r.push(o[t]),o[t].children&&e(o[t].children,n,r);return r[0]},deepTraversal:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++)n&&!n(o[t])||r.push(o[t]),o[t].children&&e(o[t].children||[],n,r);return r},wideTraversal:function e(t,n,r=[]){const o=t instanceof Array?t:[t],c=[];for(let t=0;t<o.length;t++)n&&!n(o[t])||r.push(o[t]),o[t].children&&c.push(...o[t].children),o.length===t+1&&e(c,n,r);return r},getTreeLeaf:function e(t,n=[]){return Array.isArray(t)?t.forEach((t=>{t.children&&t.children.length?e(t.children,n):n.push(t)})):t?.children?.length?e(t.children,n):n.push(t),n},getParentIdsByTreeId:(e,t,n)=>{if(!e||!Array.isArray(e)||!t)return[];const{children:r="children",id:o="id"}=n||{},c=(e,t)=>e.reduce(((e,n)=>{const s=n[r];return[...e,t?{...n,parentId:t}:n,...s&&s.length?c(s,n[o]):[]]}),[]);return(e=>{let n=[t],r=e.find((e=>e[o]===t));for(;r&&r.parentId;)n=[r.parentId,...n],r=e.find((e=>e[o]===r.parentId));return n})(c(e))}});const b=[];let g=0;function w(e,t){b.filter((t=>t.type===e)).forEach((e=>e.action(t)))}var v=Object.freeze({__proto__:null,subscribe:(e,t)=>{b.push({type:e,action:t})},unsubscribe:e=>{const t=b.findIndex((t=>t.action===e));b.splice(t,1)},execAction:w,initWS:(e,t,n)=>{if(!("WebSocket"in window))return g++,w("wsError",{hasError:!0,errorCounter:g,name:"BrowserError",errMessage:"您的浏览器不支持WebSocket"}),null;try{const r=new WebSocket(e);return r.onopen=()=>{window.console.info("websocket连接成功...")},r.onmessage=e=>{t&&t(e),w("all",e.data)},r.onclose=()=>{w("wsClose"),window.console.info("websocket断开连接...")},r.onerror=e=>{window.console.info("websocket连接异常..."),n&&n(e),w("wsError",{hasError:!0,errorCounter:g,name:"connectionError",errMessage:`无法连接到: ${e?.target?.url}`,err:e})},r}catch(e){return g++,w("wsError",{hasError:!0,errorCounter:g,name:e?.name,errMessage:e?.message,err:e}),null}}});var y=Object.freeze({__proto__:null,convertToChinese:function(e){if(e){const t=["零","一","二","三","四","五","六","七","八","九"],n=["","十","百","千","万"],r=parseInt(e,10);if(!r)return"未知";const o=e=>{const r=e.toString().split("").reverse();let o="";const c=[];r.forEach(((e,r)=>{c.unshift("0"===e?t[Number(e)]:t[Number(e)]+n[r])}));const s=[];return c.forEach(((e,t)=>{"零"!==e&&s.push(t)})),c.length>1?c.forEach(((e,t)=>{"零"===c[c.length-1]?t<=s[s.length-1]&&(o+=e):o+=e})):o=c[0],o},c=Math.floor(r/1e4);let s=r%1e4;return s.toString().length<4&&(s=`0${s}`),c?`${o(c)}万${o(s)}`:o(r)}return"一"},thousand:function(e){return(e||0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}});function E(){return document.fullscreenElement||!1}var x=Object.freeze({__proto__:null,fullscreen:function(e){e.requestFullscreen()},exitFullscreen:function(){E()&&document.exitFullscreen()},fullscreenEnabled:function(){return document.fullscreenEnabled},isFullscreen:E,fullScreenListener:function(e,t){document[e]("fullscreenchange",t)}});class k{dbName;version;dbInstance;constructor(e,t){this.dbName=e,this.version=t||1,this.dbInstance=null,this.__init()}async __init(){window.indexedDB?this.dbInstance=await this.openDB():console.error("Your browser doesn't support a stable version of IndexedDB.")}openDB(){return new Promise(((e,t)=>{if(this.dbInstance)e(this.dbInstance);else{let n;const r=window.indexedDB.open(this.dbName,this.version);r.onsuccess=t=>{n=t.target.result,e(n)},r.onerror=e=>{t(e)},r.onupgradeneeded=e=>{n=e.target.result;const t=this.dbName;n.createObjectStore(t,{keyPath:"id",autoIncrement:!1})}}}))}put(e,t){return new Promise(((n,r)=>{const o=this.dbInstance.transaction([e],"readwrite").objectStore(e).add(t);o.onsuccess=()=>{n(o.result)},o.onerror=e=>{r(e)}}))}update(e,t){return new Promise(((n,r)=>{const o=this.dbInstance.transaction([e],"readwrite").objectStore(e).put(t);o.onsuccess=()=>{n(o.result)},o.onerror=e=>{r(e)}}))}get(e,t){return new Promise(((n,r)=>{const o=this.dbInstance.transaction([e]).objectStore(e).get(t);o.onsuccess=()=>{n(o.result)},o.onerror=e=>{r(e)}}))}remove(e,t){return new Promise(((n,r)=>{const o=this.dbInstance.transaction([e],"readwrite").objectStore(e).delete(t);o.onsuccess=()=>{n(o.result)},o.onerror=e=>{r(e)}}))}closeDB(){this.dbInstance.close()}deleteDB(e){return new Promise(((t,n)=>{const r=window.indexedDB.deleteDatabase(e);r.onsuccess=()=>{t(r.result)},r.onerror=e=>{n(e)}}))}}function C(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function _(e,t){return((e,t)=>{const n={};return e.forEach((e=>{const r=t(e)||"未知";n[r]=n[r]||[],n[r].push(e)})),Object.keys(n).map((e=>({label:e,data:n[e]})))})(e,(e=>e[t]))}export{k as IndexDB,v as SocketEmitter,h as cache,d as file,u as formTest,x as fscHelper,_ as groupByField,y as numHelper,m as treeHelper,C as uuid};
