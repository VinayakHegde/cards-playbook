(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({Pack:"Pack",home:"home"}[e]||e)+"."+{Pack:"a9446db2",home:"f3fceb66"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={Pack:1,home:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({Pack:"Pack",home:"home"}[e]||e)+"."+{Pack:"425bc28f",home:"ef1a68c8"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cards-playbook/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d95":function(e,t,n){},5357:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"cards-playbook"}},[e.$store.getters.loading?n("Loader"):e._e(),n("Header",{attrs:{text:e.$route.meta.header}}),n("router-view")],1)},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[e._v(e._s(e.text))])},u=[],i={props:{text:String}},s=i,l=(n("7a19"),n("2877")),f=Object(l["a"])(s,o,u,!1,null,"2a90c9b4",null),d=f.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overlay"},[n("div",{staticClass:"loader"})])}],m=(n("c301"),{}),v=Object(l["a"])(m,p,h,!1,null,"7eaf97b2",null),b=v.exports,g={components:{Header:d,Loader:b}},O=g,w=(n("72b9"),Object(l["a"])(O,a,c,!1,null,null,null)),k=w.exports,j=n("8c4f"),y=(n("d3b7"),[{path:"/",redirect:{name:"Home"}},{path:"/deck/",redirect:{name:"Home"}},{path:"/deck/new",name:"Home",meta:{header:"CARDS"},component:function(){return n.e("home").then(n.bind(null,"b3d7"))}},{path:"/deck/:hash",name:"Pack",meta:{header:"Ordered Pile"},component:function(){return n.e("Pack").then(n.bind(null,"de20"))},props:!0},{path:"/error",name:"Error",meta:{header:"404 | Page not found"},component:function(){return n.e("Pack").then(n.bind(null,"2609"))},props:!0},{path:"*",redirect:{name:"Error"}}]);r["a"].use(j["a"]);var E=new j["a"]({mode:"history",base:"/cards-playbook/",routes:y}),x=E,T=n("2f62"),_={hash:null,cards:null,rotation:null,loading:!1},A={MUTATE_STATE:function(e,t){var n=t.hash,r=t.cards,a=t.rotation;e.hash=n,e.cards=r,e.rotation=a},MUTATE_LOADER:function(e,t){e.loading=t}},P=(n("13d5"),n("5530")),C=n("15fd"),R=(n("96cf"),n("1da1")),S=(n("99af"),n("caad"),n("a15b"),n("d81d"),n("6062"),n("2532"),n("3ca3"),n("ddb0"),n("2909")),U=n("bc3a"),L=n.n(U),M="https://deckofcardsapi.com/api/",D="Rotation",H=function(e){return"".concat(e?"with":"no").concat(D)},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(S["a"])(new Set([].concat(Object(S["a"])(e),[t]))),r="cards=".concat(n.join(","));return new Promise((function(a,c){L.a.get("".concat(M,"deck/new?").concat(r)).then(function(){var r=Object(R["a"])(regeneratorRuntime.mark((function r(c){var o,u,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=c.data,!o.success){r.next=12;break}return u=o.deck_id,i="".concat(M,"deck/").concat(u),s=H(e.includes(t)),r.next=7,L.a.get("".concat(i,"/draw?count=").concat(n.length));case 7:return r.next=9,L.a.get("".concat(i,"/pile/table/add?cards=").concat(e.join(",")));case 9:return r.next=11,L.a.get("".concat(i,"/pile/").concat(s,"/add?cards=").concat(t));case 11:a({hash:u,cards:n,rotation:t});case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).catch((function(){return c(Error("API Error: Failed to create the deck"))}))}))},$=function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){L.a.get("".concat(M,"deck/").concat(t,"/pile/table/list")).then(function(){var n=Object(R["a"])(regeneratorRuntime.mark((function n(r){var a,c,o,u,i,s,l,f,d,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=r.data,c=a.piles,o=a.success,!o){n.next=11;break}return u=c.table.cards,i=c.withRotation,s=H(i),n.next=6,L.a.get("".concat(M,"deck/").concat(t,"/pile/").concat(s,"/list"));case 6:l=n.sent,f=l.data,f.success?(d=u.map((function(e){return e.code})),p=f.piles[s].cards.map((function(e){return e.code}))[0],s.includes("with")&&d.push(p),e({rotation:p,cards:d,hash:t})):e({rotation:null,cards:null,hash:null}),n.next=12;break;case 11:e({rotation:null,cards:null,hash:null});case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(){return e({error:!0})}))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=(n("4160"),n("159b"),n("a434"),n("ac1f"),n("1276"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?e.split("").splice(0,e.length-1).join("").toUpperCase():""}),I=(n("b0c0"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?{H:{name:"hearts"},D:{name:"diamonds"},C:{name:"clubs"},S:{name:"spades"}}[e.split("").pop().toUpperCase()]:""}),J=I,q=function(e){if(!e)return null;var t=I(e);return t?t.name.split("").shift().toUpperCase():null},F={value:1,suit:999},K=["H","D","C","S"],Q=["2","A","K","Q","J","10","9","8","7","6","5","4","3"],z=5,G=function(e,t){if(!e||!t)return!1;var n=!0,r=function(e){if(n&&e){var t=q(e);n=!!t&&(Q.includes(B(e))&&K.includes(t))}};return r(t),e.forEach(r),n},V=function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c,o,u,i,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,a=n.cards,c=n.rotation,o=a.reduce((function(e,t){return t.value&&e.push(t.value),e}),[]),u=c.value,o.length&&u){e.next=6;break}return e.abrupt("return",null);case 6:if(G(o,u)){e.next=8;break}return e.abrupt("return",null);case 8:return r("MUTATE_LOADER",!0),e.next=11,N(o,u);case 11:return i=e.sent,s=i.hash,l=Object(C["a"])(i,["hash"]),r("MUTATE_STATE",Object(P["a"])({hash:s},l)),r("MUTATE_LOADER",!1),e.abrupt("return",s);case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,n){e.next=3;break}return e.abrupt("return",null);case 3:return r("MUTATE_LOADER",!0),e.next=6,$(n);case 6:if(a=e.sent,c=a.error,o=a.hash,u=Object(C["a"])(a,["error","hash"]),!c){e.next=12;break}return e.abrupt("return",{error:c});case 12:return r("MUTATE_STATE",Object(P["a"])({hash:o},u)),r("MUTATE_LOADER",!1),e.abrupt("return",u);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(e,t){var n=e.commit;n("MUTATE_LOADER",t)},Y={submitAction:V,getAction:W,setLoader:X},Z=(n("c740"),n("c975"),n("fb6a"),function(e,t){if(!e||!e.length)return[];var n=e.indexOf(t);return n<0?[].concat(Object(S["a"])(e.slice(n)),Object(S["a"])(e.slice(0,e.length+n))):[].concat(Object(S["a"])(e.slice(n,e.length)),Object(S["a"])(e.slice(0,n)))}),ee=function(e,t,n,r){return e&&e.length&&t&&n&&!isNaN(r)?Z(e,t).findIndex((function(e){return e===n}))*r:-1},te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!t)return-1;if(!G([e],t))return-1;var r=ee(Q,B(t),B(e),n?F.suit:F.value),a=ee(K,q(t),q(e),n?F.value:F.suit);return r+a},ne=function(e){return Object(P["a"])(Object(P["a"])({},J(e)),{},{value:B(e)})},re=function(e){if(!e)return[];var t=e.cards,n=e.rotation,r=e.reverse;return(t||[]).map((function(e){return Object(P["a"])(Object(P["a"])({},ne(e)),{},{order:te(e,n,r)})})).sort((function(e,t){return e.order-t.order}))},ae=function(e){var t=re(e).shift();return t?"".concat(t.value).concat(t.name.split("").shift().toUpperCase()):null},ce=(n("4de4"),function(e){if(!e||2!==e.length||!e.sort)return!1;var t=e.sort();return 2===t.length&&2===t[0]&&3===t[1]}),oe=function e(t,n){return n>t.length||n<=0?[]:n===t.length?[t]:1===n?t.reduce((function(e,t){return[].concat(Object(S["a"])(e),[[t]])}),[]):t.reduce((function(r,a,c){return e(t.slice(c+1),n-1).forEach((function(e){return r.push([a].concat(Object(S["a"])(e)))})),r}),[])},ue=function(e){return e&&e.length?oe(e,z).filter((function(e){var t=e.map((function(e){return B(e)})),n=Object(S["a"])(new Set(t.filter((function(e,n){return t.indexOf(e)!=n}))));return ce(n.reduce((function(e,n){return e.push(t.reduce((function(e,t){return t.toUpperCase()===n.toUpperCase()&&(e+=1),e}),0)),e}),[]).sort())})):[]},ie=function(e){var t=e.cards,n=e.rotation;return t?ue(t).map((function(e){var t=re({cards:e,rotation:n,reverse:!0});return t.map((function(e){return"".concat(e.value).concat(e.name.split("").shift().toUpperCase())}))})):[]},se={hash:function(e){var t=e.hash;return t},cards:function(e){return re(e)},rotation:function(e){var t=e.rotation;return t},highCard:ae,fullHouseCombi:ie,canAnalyse:function(e){return re(e).length>0},loading:function(e){var t=e.loading;return t}},le={state:_,mutations:A,actions:Y,getters:se};r["a"].use(T["a"]);var fe=new T["a"].Store(le);r["a"].config.productionTip=!1,new r["a"]({router:x,store:fe,render:function(e){return e(k)}}).$mount("#app")},"72b9":function(e,t,n){"use strict";var r=n("1d95"),a=n.n(r);a.a},"7a19":function(e,t,n){"use strict";var r=n("5357"),a=n.n(r);a.a},a9a8:function(e,t,n){},c301:function(e,t,n){"use strict";var r=n("a9a8"),a=n.n(r);a.a}});
//# sourceMappingURL=app.98e80ba9.js.map