!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Devino=t():e.Devino=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return p})),n.d(t,"getVariables",(function(){return h})),n.d(t,"updateCustomerData",(function(){return i})),n.d(t,"customerSubscribe",(function(){return c})),n.d(t,"sendEvent",(function(){return s})),n.d(t,"askNotificationPermission",(function(){return b}));const o=(e,t={})=>{const{BASE_URL:n,API_KEY:o,APP_ID:r}=h();return fetch(`${n}${e}`,{credentials:"include",...t,headers:{"Content-Type":"application/json","X-API-KEY":o,"X-DEVINO-APP-ID":r,...t.headers}})},r=e=>e.ok?e:e.json().then(e=>Promise.reject(e.message)),i=((()=>{let e=window.location.href,t=e;const n=[];setInterval((function(){e=window.location.href,e!==t&&(n.forEach(t=>{t(e)}),t=e)}),500)})(),({email:e,phone:t,pushToken:n,customData:i={}})=>o("/customers/data",{method:"PUT",body:JSON.stringify({email:e,phone:t,pushToken:n,customData:i,reportedDateTimeUtc:new Date})}).then(r).then(e=>e.json()).then(e=>(console.log(e),e)).catch(e=>(console.error(e),e))),c=({subscribtionChannel:e,subscribed:t})=>o("/customers/subscription",{method:"PUT",body:JSON.stringify({subscribtionChannel:e,subscribed:t,reportedDateTimeUtc:new Date})}).then(r).then(e=>e.json()).then(e=>(console.log(e),e)).catch(e=>(console.error(e),e)),s=({eventName:e,eventData:t={}})=>o("/users/event",{method:"POST",body:JSON.stringify({eventName:e,eventData:t,reportedDateTimeUtc:new Date})}).then(r).then(e=>e.json()).then(e=>(console.log(e),e)).catch(e=>(console.error(e),e));let u="",a="",f="http://localhost:3000";let l=!1,d=!1;const p=({apiKey:e,appId:t,baseUrl:n,isServiceWorker:o=!1})=>{u=e,a=t,d=o,n&&(f=n),l||d||(m(window.location.href),l=!0)},h=()=>({API_KEY:u,APP_ID:a,BASE_URL:f}),m=e=>{new RegExp("email_marker").test(e)&&s({eventName:"EMAIL_LINK",eventData:{url:e}})},b=()=>new Promise((function(e,t){const n=Notification.requestPermission((function(t){e(t)}));n&&n.then(t=>{e(t)},t)})).then((function(e){"granted"==e?y():console.warn("We weren't granted permission.")})),y=()=>{}}])}));