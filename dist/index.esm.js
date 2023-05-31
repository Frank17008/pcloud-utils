var e,t=Object.freeze({__proto__:null,ValidatorBankCard:function(e){return/^([1-9]{1})(\d{14}|\d{18})$/.test(e)},ValidatorCCA:function(e){return/^[\u4e00-\u9fa5a-zA-Z0-9]{1,50}$/.test(e)},ValidatorChinese:function(e){return/^[u4e00-u9fa5]$/.test(e)},ValidatorEmail:function(e){return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)},ValidatorIdCard:function(e){return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)},ValidatorLetter:function(e){return/^[A-Za-z]*$/.test(e)},ValidatorScore:function(e){return/^([0-9]|10)$/.test(e)},ValidatorTel:function(e){return/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(e)},ValidatorUrl:function(e){return/^(https?:|mailto:|tel:)$/.test(e)}});!function(e){e.excel="application/vnd.ms-excel",e.xls="application/vnd.ms-excel",e.xlsx="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.pdf="application/pdf",e.doc="application/msword",e.docx="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.zip="application/zip",e.rar="application/rar",e.png="image/png",e.webp="image/webp",e.bmp="image/bmp",e.jpeg="image/jpeg",e.gif="image/gif",e.tiff="image/tiff",e.svg="image/svg+xml",e.mp4="video/mp4"}(e||(e={}));var n=Object.freeze({__proto__:null,convertSize:e=>{if(null===e||""===e)return"0Kb";let t=0;const n=parseFloat(e);t=Math.floor(Math.log(n)/Math.log(1024));return(n/Math.pow(1024,t)).toFixed(2)+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},downloadBlobFile:(t,n,r)=>{const o=r?new Blob([t],{type:e[r]}):new Blob([t]);if("download"in document.createElement("a")){const e=document.createElement("a");e.download=n,e.style.display="none",e.href=URL.createObjectURL(o),document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}},previewImage:e=>{if("download"in document.createElement("a")){const t=document.createElement("a");t.style.display="none",t.href=URL.createObjectURL(e),t.target="_blank",document.body.appendChild(t),t.click(),URL.revokeObjectURL(t.href),document.body.removeChild(t)}},previewPdf:e=>{const t=new Blob([e],{type:"application/pdf"});if("download"in document.createElement("a")){const e=document.createElement("a");e.style.display="none",e.href=`${URL.createObjectURL(t)}#scrollbars=0&toolbar=0&statusbar=0`,e.target="_blank",document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}},tagADownload:function(e){const{url:t="",title:n="",target:r="_blank"}=e,o=document.createElement("a");o.setAttribute("href",t),o.setAttribute("download",n),o.setAttribute("target",r),document.body.appendChild(o),o.click(),document.body.removeChild(o)}});
/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var o=function e(t,n){function o(e,o,a){if("undefined"!=typeof document){"number"==typeof(a=r({},n,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var i in a)a[i]&&(c+="; "+i,!0!==a[i]&&(c+="="+a[i].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var a=n[o].split("="),c=a.slice(1).join("=");try{var i=decodeURIComponent(a[0]);if(r[i]=t.read(c,i),e===i)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){o(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});var a=Object.freeze({__proto__:null,clearAll:function(e="local",t){switch(e){case"cookie":t?.forEach((e=>o.remove(e)));break;case"session":sessionStorage.clear();break;default:localStorage.clear()}},clearCache:function(e,t="local"){switch(t){case"cookie":o.remove(e);break;case"session":sessionStorage.removeItem(e);break;default:localStorage.removeItem(e)}},getCache:function(e,t="local"){let n;switch(t){case"cookie":n=o.get(e);break;case"session":const t=sessionStorage.getItem(e)||"";try{n=JSON.parse(t)}catch(e){n=t}break;default:const r=localStorage.getItem(e)||"";try{n=JSON.parse(r)}catch(e){n=r}}return n},setCache:function(e,t,n="local"){switch(n){case"cookie":o.set(e,t,{expires:7});break;case"session":sessionStorage.setItem(e,JSON.stringify(t));break;default:localStorage.setItem(e,JSON.stringify(t))}}});var c=Object.freeze({__proto__:null,deepFindPath:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++){if(n(o[t]))return r.push(o[t]),r;if(e(o[t].children||[],n,r))return r.push(o[t]),r}},deepTraversal:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++)n&&!n(o[t])||r.push(o[t]),o[t].children&&e(o[t].children||[],n,r);return r},findFirstNode:function e(t,n,r=[]){const o=t instanceof Array?t:[t];for(let t=0;t<o.length;t++)n(o[t])&&r.push(o[t]),o[t].children&&e(o[t].children,n,r);return r[0]},getParentIdsByTreeId:(e,t,n)=>{if(!e||!Array.isArray(e)||!t)return[];const{children:r="children",id:o="id"}=n||{},a=(e,t)=>e.reduce(((e,n)=>{const c=n[r];return[...e,t?{...n,parentId:t}:n,...c&&c.length?a(c,n[o]):[]]}),[]);return(e=>{let n=[t],r=e.find((e=>e[o]===t));for(;r&&r.parentId;)n=[r.parentId,...n],r=e.find((e=>e[o]===r.parentId));return n})(a(e))},getTreeLeaf:function e(t,n=[]){return Array.isArray(t)?t.forEach((t=>{t.children&&t.children.length?e(t.children,n):n.push(t)})):t?.children?.length?e(t.children,n):n.push(t),n},wideTraversal:function e(t,n,r=[]){const o=t instanceof Array?t:[t],a=[];for(let t=0;t<o.length;t++)n&&!n(o[t])||r.push(o[t]),o[t].children&&a.push(...o[t].children),o.length===t+1&&e(a,n,r);return r}});function i(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}function l(e){if(e){const t=["零","一","二","三","四","五","六","七","八","九"],n=["","十","百","千","万"],r=parseInt(e,10);if(!r)return"未知";const o=e=>{const r=e.toString().split("").reverse();let o="";const a=[];r.forEach(((e,r)=>{a.unshift("0"===e?t[Number(e)]:t[Number(e)]+n[r])}));const c=[];return a.forEach(((e,t)=>{"零"!==e&&c.push(t)})),a.length>1?a.forEach(((e,t)=>{"零"===a[a.length-1]?t<=c[c.length-1]&&(o+=e):o+=e})):o=a[0],o},a=Math.floor(r/1e4);let c=r%1e4;return c.toString().length<4&&(c=`0${c}`),a?`${o(a)}万${o(c)}`:o(r)}return"一"}function s(e,t){return((e,t)=>{const n={};return e.forEach((e=>{const r=t(e)||"未知";n[r]=n[r]||[],n[r].push(e)})),Object.keys(n).map((e=>({label:e,data:n[e]})))})(e,(e=>e[t]))}export{a as cache,n as file,t as formTest,s as groupByField,l as numConvertToChinese,c as treeHelper,i as uuid};
