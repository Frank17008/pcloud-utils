const e=/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|17[0-9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;const t=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;const n=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;const r=/^([1-9]{1})(\d{14}|\d{18})$/;const o=/^[u4e00-u9fa5]$/;const s=/^[A-Za-z]*$/;const a=/^(https?:|mailto:|tel:)$/;const c=/^[\u4e00-\u9fa5a-zA-Z0-9]{1,50}$/;const i=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\.])[A-Za-z0-9!@#$%^&*()_+\.]{8,20}$/;var l,u=Object.freeze({__proto__:null,TelRegExp:e,ValidatorTel:function(t){return e.test(t)},EmailRegExp:t,ValidatorEmail:function(e){return t.test(e)},IdCardRegExp:n,ValidatorIdCard:function(e){return n.test(e)},BankCardRegExp:r,ValidatorBankCard:function(e){return r.test(e)},ChineseRegExp:o,ValidatorChinese:function(e){return o.test(e)},LetterRegExp:s,ValidatorLetter:function(e){return s.test(e)},UrlRegExp:a,ValidatorUrl:function(e){return a.test(e)},CCARegExp:c,ValidatorCCA:function(e){return c.test(e)},PswRegExp:i,ValidatorPsw:function(e){return i.test(e)}});!function(e){e.excel="application/vnd.ms-excel",e.xls="application/vnd.ms-excel",e.xlsx="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.pdf="application/pdf",e.doc="application/msword",e.docx="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.zip="application/zip",e.rar="application/rar",e.png="image/png",e.webp="image/webp",e.bmp="image/bmp",e.jpeg="image/jpeg",e.gif="image/gif",e.tiff="image/tiff",e.svg="image/svg+xml",e.mp4="video/mp4"}(l||(l={}));var d=Object.freeze({__proto__:null,tagADownload:function(e){const{url:t="",title:n="",target:r="_blank"}=e,o=document.createElement("a");o.setAttribute("href",t),o.setAttribute("download",n),o.setAttribute("target",r),document.body.appendChild(o),o.click(),document.body.removeChild(o)},downloadBlobFile:(e,t,n)=>{const r=n?new Blob([e],{type:l[n]}):new Blob([e]);if("download"in document.createElement("a")){const e=document.createElement("a");e.download=t,e.style.display="none",e.href=URL.createObjectURL(r),document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}},previewPdf:(e,t=!0)=>{const n=new Blob([e],{type:"application/pdf"});if("download"in document.createElement("a")){const e=document.createElement("a");e.style.display="none",e.href=`${URL.createObjectURL(n)}${t?"#scrollbars=0&toolbar=0&statusbar=0":""}`,e.target="_blank",document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}},previewImage:e=>{if("download"in document.createElement("a")){const t=document.createElement("a");t.style.display="none",t.href=URL.createObjectURL(e),t.target="_blank",document.body.appendChild(t),t.click(),URL.revokeObjectURL(t.href),document.body.removeChild(t)}},convertSize:e=>{if(null===e||""===e)return"0Kb";let t=0;const n=parseFloat(e);t=Math.floor(Math.log(n)/Math.log(1024));return(n/Math.pow(1024,t)).toFixed(2)+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},getFileExtension:e=>{const t=e.lastIndexOf(".");return e.substring(t+1)?.toLowerCase()||""}});
/*! js-cookie v3.0.5 | MIT */function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var f=function e(t,n){function r(e,r,o){if("undefined"!=typeof document){"number"==typeof(o=h({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var a in o)o[a]&&(s+="; "+a,!0!==o[a]&&(s+="="+o[a].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+s}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var s=n[o].split("="),a=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(r[c]=t.read(a,c),e===c)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){r(e,"",h({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,h({},this.attributes,t))},withConverter:function(t){return e(h({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});var p=Object.freeze({__proto__:null,getCache:function(e,t="local"){let n;switch(t){case"cookie":n=f.get(e);break;case"session":const t=sessionStorage.getItem(e)||"";try{n=JSON.parse(t)}catch(e){n=t}break;default:const r=localStorage.getItem(e)||"";try{n=JSON.parse(r)}catch(e){n=r}}return n},setCache:function(e,t,n="local"){switch(n){case"cookie":f.set(e,t,{expires:7});break;case"session":sessionStorage.setItem(e,JSON.stringify(t));break;default:localStorage.setItem(e,JSON.stringify(t))}},clearCache:function(e,t="local"){switch(t){case"cookie":f.remove(e);break;case"session":sessionStorage.removeItem(e);break;default:localStorage.removeItem(e)}},clearAll:function(e="local",t){switch(e){case"cookie":t?.forEach((e=>f.remove(e)));break;case"session":sessionStorage.clear();break;default:localStorage.clear()}}});var m=Object.freeze({__proto__:null,deepFind:function e(t,n){const r=t instanceof Array?t:[t];for(let t=0;t<r.length;t++){if(n(r[t]))return r[t];{const o=e(r[t].children||[],n);if(o)return o}}},deepFindPath:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++){if(n(o[t]))return r.push(o[t]),r;if(e(o[t].children||[],n,r))return r.push(o[t]),r}},findFirstNode:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++)n(o[t])&&r.push(o[t]),o[t].children&&e(o[t].children,n,r);return r[0]},deepTraversal:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++)n&&!n(o[t])||r.push(o[t]),o[t].children&&e(o[t].children||[],n,r);return r},wideTraversal:function e(t,n,r=[]){const o=t instanceof Array?t:[t],s=[];for(let t=0;t<o.length;t++)n&&!n(o[t])||r.push(o[t]),o[t].children&&s.push(...o[t].children),o.length===t+1&&e(s,n,r);return r},getTreeLeaf:function e(t,n=[]){return Array.isArray(t)?t.forEach((t=>{t.children&&t.children.length?e(t.children,n):n.push(t)})):t?.children?.length?e(t.children,n):n.push(t),n},getParentIdsByTreeId:(e,t,n)=>{if(!e||!Array.isArray(e)||!t)return[];const{children:r="children",id:o="id"}=n||{},s=(e,t)=>e.reduce(((e,n)=>{const a=n[r];return[...e,t?{...n,parentId:t}:n,...a&&a.length?s(a,n[o]):[]]}),[]);return(e=>{let n=[t],r=e.find((e=>e[o]===t));for(;r&&r.parentId;)n=[r.parentId,...n],r=e.find((e=>e[o]===r.parentId));return n})(s(e))}});const b=[];let g=0;function w(e,t){b.filter((t=>t.type===e)).forEach((e=>e.action(t)))}var v=Object.freeze({__proto__:null,subscribe:(e,t)=>{b.push({type:e,action:t})},unsubscribe:e=>{const t=b.findIndex((t=>t.action===e));b.splice(t,1)},execAction:w,initWS:(e,t,n)=>{if(!("WebSocket"in window))return g++,w("wsError",{hasError:!0,errorCounter:g,name:"BrowserError",errMessage:"您的浏览器不支持WebSocket"}),null;try{const r=new WebSocket(e);return r.onopen=()=>{window.console.info("websocket连接成功...")},r.onmessage=e=>{t&&t(e),w("all",e.data)},r.onclose=()=>{w("wsClose"),window.console.info("websocket断开连接...")},r.onerror=e=>{window.console.info("websocket连接异常..."),n&&n(e),w("wsError",{hasError:!0,errorCounter:g,name:"connectionError",errMessage:`无法连接到: ${e?.target?.url}`,err:e})},r}catch(e){return g++,w("wsError",{hasError:!0,errorCounter:g,name:e?.name,errMessage:e?.message,err:e}),null}}});var M=Object.freeze({__proto__:null,convertToChinese:function(e){if(e){const t=["零","一","二","三","四","五","六","七","八","九"],n=["","十","百","千","万"],r=parseInt(e,10);if(!r)return"未知";const o=e=>{const r=e.toString().split("").reverse();let o="";const s=[];r.forEach(((e,r)=>{s.unshift("0"===e?t[Number(e)]:t[Number(e)]+n[r])}));const a=[];return s.forEach(((e,t)=>{"零"!==e&&a.push(t)})),s.length>1?s.forEach(((e,t)=>{"零"===s[s.length-1]?t<=a[a.length-1]&&(o+=e):o+=e})):o=s[0],o},s=Math.floor(r/1e4);let a=r%1e4;return a.toString().length<4&&(a=`0${a}`),s?`${o(s)}万${o(a)}`:o(r)}return"一"},thousand:function(e){return(e||0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}});function x(){return document.fullscreenElement||!1}var y=Object.freeze({__proto__:null,fullscreen:function(e){e.requestFullscreen()},exitFullscreen:function(){x()&&document.exitFullscreen()},fullscreenEnabled:function(){return document.fullscreenEnabled},isFullscreen:x,fullScreenListener:function(e,t){document[e]("fullscreenchange",t)}});class E{dbName;version;dbInstance;constructor(e,t){this.dbName=e,this.version=t||1,this.dbInstance=null,this.__init()}async __init(){window.indexedDB?this.dbInstance=await this.openDB():console.error("Your browser doesn't support a stable version of IndexedDB.")}openDB(){return new Promise(((e,t)=>{if(this.dbInstance)e(this.dbInstance);else{let n;const r=window.indexedDB.open(this.dbName,this.version);r.onsuccess=t=>{n=t.target.result,e(n)},r.onerror=e=>{t(e)},r.onupgradeneeded=e=>{n=e.target.result;const t=this.dbName;n.createObjectStore(t,{keyPath:"id",autoIncrement:!1})}}}))}put(e,t){return new Promise(((n,r)=>{const o=this.dbInstance.transaction([e],"readwrite").objectStore(e).add(t);o.onsuccess=()=>{n(o.result)},o.onerror=e=>{r(e)}}))}update(e,t){return new Promise(((n,r)=>{const o=this.dbInstance.transaction([e],"readwrite").objectStore(e).put(t);o.onsuccess=()=>{n(o.result)},o.onerror=e=>{r(e)}}))}get(e,t){return new Promise(((n,r)=>{const o=this.dbInstance.transaction([e]).objectStore(e).get(t);o.onsuccess=()=>{n(o.result)},o.onerror=e=>{r(e)}}))}remove(e,t){return new Promise(((n,r)=>{const o=this.dbInstance.transaction([e],"readwrite").objectStore(e).delete(t);o.onsuccess=()=>{n(o.result)},o.onerror=e=>{r(e)}}))}closeDB(){this.dbInstance.close()}deleteDB(e){return new Promise(((t,n)=>{const r=window.indexedDB.deleteDatabase(e);r.onsuccess=()=>{t(r.result)},r.onerror=e=>{n(e)}}))}}const _=52.35987755982988,C=3.141592653589793,k=6378137,I=.006693421622965943,j=(e,t)=>{const n=+t,r=+e;let o=2*r-100+3*n+.2*n*n+.1*r*n+.2*Math.sqrt(Math.abs(r));return o+=2*(20*Math.sin(6*r*C)+20*Math.sin(2*r*C))/3,o+=2*(20*Math.sin(n*C)+40*Math.sin(n/3*C))/3,o+=2*(160*Math.sin(n/12*C)+320*Math.sin(n*C/30))/3,o},B=(e,t)=>{const n=+t,r=+e;let o=300+r+2*n+.1*r*r+.1*r*n+.1*Math.sqrt(Math.abs(r));return o+=2*(20*Math.sin(6*r*C)+20*Math.sin(2*r*C))/3,o+=2*(20*Math.sin(r*C)+40*Math.sin(r/3*C))/3,o+=2*(150*Math.sin(r/12*C)+300*Math.sin(r/30*C))/3,o},S=(e,t)=>{const n=+t,r=+e;return!(r>73.66&&r<135.05&&n>3.86&&n<53.55)};var R=Object.freeze({__proto__:null,bd09togcj02:(e,t)=>{const n=+e-.0065,r=+t-.006,o=Math.sqrt(n*n+r*r)-2e-5*Math.sin(r*_),s=Math.atan2(r,n)-3e-6*Math.cos(n*_);return[o*Math.cos(s),o*Math.sin(s)]},gcj02tobd09:(e,t)=>{const n=+t,r=+e,o=Math.sqrt(r*r+n*n)+2e-5*Math.sin(n*_),s=Math.atan2(n,r)+3e-6*Math.cos(r*_);return[o*Math.cos(s)+.0065,o*Math.sin(s)+.006]},wgs84togcj02:(e,t)=>{const n=+t,r=+e;if(S(r,n))return[r,n];{let e=j(r-105,n-35),t=B(r-105,n-35);const o=n/180*C;let s=Math.sin(o);s=1-I*s*s;const a=Math.sqrt(s);e=180*e/(6335445.439889961/(s*a)*C),t=180*t/(k/a*Math.cos(o)*C);return[r+t,n+e]}},gcj02towgs84:(e,t)=>{const n=+t,r=+e;if(S(r,n))return[r,n];{let e=j(r-105,n-35),t=B(r-105,n-35);const o=n/180*C;let s=Math.sin(o);s=1-I*s*s;const a=Math.sqrt(s);e=180*e/(6335445.439889961/(s*a)*C),t=180*t/(k/a*Math.cos(o)*C);return[2*r-(r+t),2*n-(n+e)]}},outOfChina:S,lonLatToMercator:(e,t)=>{const n=+t,r=+e*k*C/180;let o=Math.log(Math.tan((90+n)*C/360))/(C/180);return o=o*k*C/180,[r,o]},mercatorToLonLat:(e,t)=>{const n=+e/(k*C)*180;let r=+t/(k*C)*180;return r=180/C*(2*Math.atan(Math.exp(r*C/180))-C/2),[n,r]}});function O(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function A(e){return new Function("return "+e)()}function U(e,t){return((e,t)=>{const n={};return e.forEach((e=>{const r=t(e)||"未知";n[r]=n[r]||[],n[r].push(e)})),Object.keys(n).map((e=>({label:e,data:n[e]})))})(e,(e=>e[t]))}export{E as IndexDB,v as SocketEmitter,p as cache,R as coordTransform,A as evil,d as file,u as formTest,y as fscHelper,U as groupByField,M as numHelper,m as treeHelper,O as uuid};
