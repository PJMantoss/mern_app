webpackJsonp([1],{100:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(101),i=(n.n(a),function(e){return o.a.createElement("div",{className:"avatar "+e.className,style:e.style},o.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))});t.a=i},101:function(e,t,n){var r=n(102);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(68)(r,o);r.locals&&(e.exports=r.locals)},102:function(e,t,n){t=e.exports=n(67)(!0),t.push([e.i,".avatar{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.avatar,.avatar img{width:100%;height:100%}.avatar img{display:block;border-radius:50%;-o-object-fit:cover;object-fit:cover}","",{version:3,sources:["/home/mantoss/mern_app/frontend/src/shared/components/UIElements/Avatar.css"],names:[],mappings:"AAAA,QAGI,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,kBAAoB,CAC3B,AAED,oBAVI,WAAY,AACZ,WAAa,CAgBhB,AAPD,YACI,cAAe,AACf,kBAAmB,AAGnB,oBAAqB,AAClB,gBAAkB,CACxB",file:"Avatar.css",sourcesContent:[".avatar {\n    width: 100%;\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex; \n    -ms-flex-pack: center; \n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.avatar img {\n    display: block;\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}"],sourceRoot:""}])},103:function(e,t,n){var r=n(104);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(68)(r,o);r.locals&&(e.exports=r.locals)},104:function(e,t,n){t=e.exports=n(67)(!0),t.push([e.i,".user-item{margin:1rem;width:calc(45% - 2rem);min-width:17.5rem;list-style:none}.user-item a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;height:100%;text-decoration:none;padding:1rem;color:#fff;background:#292929}.user-item a:active,.user-item a:hover{background:#ffd900}.card.user-item__content{padding:0}.user-item__image{width:4rem;height:4rem;margin-right:1rem}.user-item__info h2{font-size:1.5rem;margin:0 0 .5rem;font-weight:400;color:#ffd900}.user-item:active h2,.user-item:active h3,.user-item:hover h2,.user-item:hover h3{color:#292929}.user-item__info h3{margin:0}","",{version:3,sources:["/home/mantoss/mern_app/frontend/src/user/components/UserItem.css"],names:[],mappings:"AAAA,WACI,YAAa,AACb,uBAAwB,AACxB,kBAAmB,AACnB,eAAiB,CACpB,AAED,aACI,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,WAAY,AACZ,YAAa,AACb,qBAAsB,AACtB,aAAc,AACd,WAAa,AACb,kBAAoB,CACvB,AAED,uCAEE,kBAAoB,CACrB,AAED,yBACI,SAAW,CACd,AAED,kBACI,WAAY,AACZ,YAAa,AACb,iBAAmB,CACtB,AAED,oBACI,iBAAkB,AAClB,iBAAqB,AACrB,gBAAoB,AACpB,aAAe,CAClB,AAED,kFAIE,aAAe,CAChB,AAED,oBACI,QAAU,CACb",file:"UserItem.css",sourcesContent:[".user-item {\n    margin: 1rem;\n    width: calc(45% - 2rem);\n    min-width: 17.5rem;\n    list-style: none;\n}\n\n.user-item a {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    width: 100%;\n    height: 100%;\n    text-decoration: none;\n    padding: 1rem;\n    color: white;\n    background: #292929;\n}\n\n.user-item a:hover,\n.user-item a:active {\n  background: #ffd900;\n}\n\n.card.user-item__content {\n    padding: 0;\n}\n\n.user-item__image {\n    width: 4rem;\n    height: 4rem;\n    margin-right: 1rem;\n}\n\n.user-item__info h2 {\n    font-size: 1.5rem;\n    margin: 0 0 0.5rem 0;\n    font-weight: normal;\n    color: #ffd900;\n}\n\n.user-item:hover h2,\n.user-item:active h2,\n.user-item:hover h3,\n.user-item:active h3 {\n  color: #292929;\n}\n\n.user-item__info h3 {\n    margin: 0;\n}"],sourceRoot:""}])},105:function(e,t,n){var r=n(106);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(68)(r,o);r.locals&&(e.exports=r.locals)},106:function(e,t,n){t=e.exports=n(67)(!0),t.push([e.i,".users-list{margin:0 auto;padding:0;width:90%;max-width:50rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}","",{version:3,sources:["/home/mantoss/mern_app/frontend/src/user/components/UsersList.css"],names:[],mappings:"AAAA,YACI,cAAe,AACf,UAAW,AACX,UAAW,AACX,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,mBAAoB,AAChB,cAAgB,CACvB",file:"UsersList.css",sourcesContent:[".users-list {\n    margin: 0 auto;\n    padding: 0;\n    width: 90%;\n    max-width: 50rem;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}"],sourceRoot:""}])},69:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(75),a=n.n(o),i=n(0),s=n.n(i),c=n(98),A=n(76),l=n(21),u=n(78),m=this,f=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){var e=Object(u.a)(),t=e.isLoading,n=e.error,o=e.sendRequest,d=e.clearError,h=Object(i.useState)(),p=f(h,2),C=p[0],g=p[1];return Object(i.useEffect)(function(){!function(){var e=r(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("https://mern-application21.herokuapp.com/api/users");case 3:t=e.sent,g(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}},e,m,[[0,7]])}));return function(){return e.apply(this,arguments)}}()()},[o]),s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,{error:n,onClear:d}),t&&s.a.createElement("div",{className:"center"},s.a.createElement(l.a,null)),!t&&C&&s.a.createElement(c.a,{items:C}))};t.default=d},74:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n(84),s=(n.n(i),function(e){return e.href?o.a.createElement("a",{className:"button button--"+(e.size||"default")+" "+(e.inverse&&"button--inverse")+" "+(e.danger&&"button--danger"),href:e.href},e.children):e.to?o.a.createElement(a.b,{to:e.to,exact:e.exact,className:"button button--"+(e.size||"default")+" "+(e.inverse&&"button--inverse")+" "+(e.danger&&"button--danger")},e.children):o.a.createElement("button",{className:"button button--"+(e.size||"default")+" "+(e.inverse&&"button--inverse")+" "+(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)});t.a=s},75:function(e,t,n){e.exports=n(79)},76:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(77),i=n(74),s=function(e){return o.a.createElement(a.a,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:o.a.createElement(i.a,{onClick:e.onClear},"Okay")},o.a.createElement("p",null,e.error))};t.a=s},77:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a),s=n(23),c=n(22),A=n(82),l=(n.n(A),function(e){var t=o.a.createElement("div",{className:"modal "+e.className,style:e.style},o.a.createElement("header",{className:"modal__header "+e.headerClass},o.a.createElement("h2",null,e.header)),o.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},o.a.createElement("div",{className:"modal__content "+e.contentClass},e.children),o.a.createElement("footer",{className:"modal__footer "+e.footerClass},e.footer)));return i.a.createPortal(t,document.getElementById("modal-hook"))}),u=function(e){return o.a.createElement(o.a.Fragment,null,e.show&&o.a.createElement(s.a,{onClick:e.onCancel}),o.a.createElement(c.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},o.a.createElement(l,e)))};t.a=u},78:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}n.d(t,"a",function(){return l});var o=n(75),a=n.n(o),i=n(0),s=(n.n(i),this),c=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),A=window.AbortController,l=function(){var e=Object(i.useState)(!1),t=c(e,2),n=t[0],o=t[1],l=Object(i.useState)(),u=c(l,2),m=u[0],f=u[1],d=Object(i.useRef)([]),h=Object(i.useCallback)(function(){var e=r(a.a.mark(function e(t){var n,r,i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),n=new A,d.current.push(n),e.prev=3,e.next=6,fetch(t,{method:c,body:l,headers:u,signal:n.signal});case 6:return r=e.sent,e.next=9,r.json();case 9:if(i=e.sent,d.current=d.current.filter(function(e){return e!==n}),r.ok){e.next=13;break}throw new Error(i.message);case 13:return o(!1),e.abrupt("return",i);case 17:throw e.prev=17,e.t0=e.catch(3),f(e.t0.message),o(!1),e.t0;case 22:case"end":return e.stop()}},e,s,[[3,17]])}));return function(t){return e.apply(this,arguments)}}(),[]),p=function(){f(null)};return Object(i.useEffect)(function(){return function(){d.current.forEach(function(e){return e.abort()})}},[]),{isLoading:n,error:m,sendRequest:h,clearError:p}}},79:function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(80),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},80:function(e,t){!function(t){"use strict";function n(e,t,n,r){var a=t&&t.prototype instanceof o?t:o,i=Object.create(a.prototype),s=new f(r||[]);return i._invoke=A(e,n,s),i}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function a(){}function i(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(n,o,a,i){var s=r(e[n],e,o);if("throw"!==s.type){var c=s.arg,A=c.value;return A&&"object"===typeof A&&g.call(A,"__await")?Promise.resolve(A.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(A).then(function(e){c.value=e,a(c)},i)}i(s.arg)}function n(e,n){function r(){return new Promise(function(r,o){t(e,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function A(e,t,n){var o=E;return function(a,i){if(o===_)throw new Error("Generator is already running");if(o===j){if("throw"===a)throw i;return h()}for(n.method=a,n.arg=i;;){var s=n.delegate;if(s){var c=l(s,n);if(c){if(c===Y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===E)throw o=j,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=_;var A=r(e,t,n);if("normal"===A.type){if(o=n.done?j:k,A.arg===Y)continue;return{value:A.arg,done:n.done}}"throw"===A.type&&(o=j,n.method="throw",n.arg=A.arg)}}}function l(e,t){var n=e.iterator[t.method];if(n===p){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=p,l(e,t),"throw"===t.method))return Y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return Y}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,Y;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=p),t.delegate=null,Y):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,Y)}function u(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function m(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function f(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(u,this),this.reset(!0)}function d(e){if(e){var t=e[B];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(g.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=p,t.done=!0,t};return r.next=r}}return{next:h}}function h(){return{value:p,done:!0}}var p,C=Object.prototype,g=C.hasOwnProperty,v="function"===typeof Symbol?Symbol:{},B=v.iterator||"@@iterator",b=v.asyncIterator||"@@asyncIterator",y=v.toStringTag||"@@toStringTag",w="object"===typeof e,x=t.regeneratorRuntime;if(x)return void(w&&(e.exports=x));x=t.regeneratorRuntime=w?e.exports:{},x.wrap=n;var E="suspendedStart",k="suspendedYield",_="executing",j="completed",Y={},L={};L[B]=function(){return this};var D=Object.getPrototypeOf,O=D&&D(D(d([])));O&&O!==C&&g.call(O,B)&&(L=O);var N=i.prototype=o.prototype=Object.create(L);a.prototype=N.constructor=i,i.constructor=a,i[y]=a.displayName="GeneratorFunction",x.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},x.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,y in e||(e[y]="GeneratorFunction")),e.prototype=Object.create(N),e},x.awrap=function(e){return{__await:e}},s(c.prototype),c.prototype[b]=function(){return this},x.AsyncIterator=c,x.async=function(e,t,r,o){var a=new c(n(e,t,r,o));return x.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},s(N),N[y]="Generator",N[B]=function(){return this},N.toString=function(){return"[object Generator]"},x.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},x.values=d,f.prototype={constructor:f,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=p,this.done=!1,this.delegate=null,this.method="next",this.arg=p,this.tryEntries.forEach(m),!e)for(var t in this)"t"===t.charAt(0)&&g.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=p)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return a.type="throw",a.arg=e,n.next=t,r&&(n.method="next",n.arg=p),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=g.call(o,"catchLoc"),s=g.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,Y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),Y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),m(n),Y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;m(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:d(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=p),Y}}}(function(){return this}()||Function("return this")())},81:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(87),i=(n.n(a),function(e){return o.a.createElement("div",{className:"card "+e.className,style:e.style},e.children)});t.a=i},82:function(e,t,n){var r=n(83);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(68)(r,o);r.locals&&(e.exports=r.locals)},83:function(e,t,n){t=e.exports=n(67)(!0),t.push([e.i,".modal{z-index:100;position:fixed;top:22vh;left:10%;width:80%;background:#fff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);border-radius:8px}.modal__header{width:100%;padding:1rem .5rem;background:#2a006e;color:#fff}.modal__header h2{margin:.5rem}.modal__content,.modal__footer{padding:1rem .5rem}@media (min-width:768px){.modal{left:calc(50% - 20rem);width:40rem}}.modal-enter{-webkit-transform:translateY(-10rem);-ms-transform:translateY(-10rem);transform:translateY(-10rem);opacity:0}.modal-enter-active{-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}.modal-enter-active,.modal-exit{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1}.modal-exit-active{-webkit-transform:translateY(-10rem);-ms-transform:translateY(-10rem);transform:translateY(-10rem);opacity:0;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}","",{version:3,sources:["/home/mantoss/mern_app/frontend/src/shared/components/UIElements/Modal.css"],names:[],mappings:"AAAA,OACE,YAAa,AACb,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAW,AACX,gBAAkB,AAClB,6CAAkD,AAC1C,qCAA0C,AAClD,iBAAmB,CACpB,AAED,eACE,WAAY,AACZ,mBAAqB,AACrB,mBAAoB,AACpB,UAAa,CACd,AAED,kBACE,YAAe,CAChB,AAMD,+BACE,kBAAqB,CACtB,AAED,yBACE,OACE,uBAAwB,AACxB,WAAa,CACd,CACF,AAED,aACE,qCAAsC,AAClC,iCAAkC,AAC9B,6BAA8B,AACtC,SAAW,CACZ,AAED,oBAKE,2BAA8B,AAC9B,sBAAyB,AACzB,kBAAsB,CACvB,AAED,gCATE,gCAAiC,AAC7B,4BAA6B,AACzB,wBAAyB,AACjC,SAAW,CAWZ,AAED,mBACE,qCAAsC,AAClC,iCAAkC,AAC9B,6BAA8B,AACtC,UAAW,AACX,2BAA8B,AAC9B,sBAAyB,AACzB,kBAAsB,CACvB",file:"Modal.css",sourcesContent:[".modal {\n  z-index: 100;\n  position: fixed;\n  top: 22vh;\n  left: 10%;\n  width: 80%;\n  background: white;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n  border-radius: 8px;\n}\n\n.modal__header {\n  width: 100%;\n  padding: 1rem 0.5rem;\n  background: #2a006e;\n  color: white;\n}\n\n.modal__header h2 {\n  margin: 0.5rem;\n}\n\n.modal__content {\n  padding: 1rem 0.5rem;\n}\n\n.modal__footer {\n  padding: 1rem 0.5rem;\n}\n\n@media (min-width: 768px) {\n  .modal {\n    left: calc(50% - 20rem);\n    width: 40rem;\n  }\n}\n\n.modal-enter {\n  -webkit-transform: translateY(-10rem);\n      -ms-transform: translateY(-10rem);\n          transform: translateY(-10rem);\n  opacity: 0;\n}\n\n.modal-enter-active {\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n  -webkit-transition: all 200ms;\n  -o-transition: all 200ms;\n  transition: all 200ms;\n}\n\n.modal-exit {\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n  opacity: 1;\n}\n\n.modal-exit-active {\n  -webkit-transform: translateY(-10rem);\n      -ms-transform: translateY(-10rem);\n          transform: translateY(-10rem);\n  opacity: 0;\n  -webkit-transition: all 200ms;\n  -o-transition: all 200ms;\n  transition: all 200ms;\n}\n"],sourceRoot:""}])},84:function(e,t,n){var r=n(85);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(68)(r,o);r.locals&&(e.exports=r.locals)},85:function(e,t,n){t=e.exports=n(67)(!0),t.push([e.i,".button{font:inherit;padding:.5rem 1.5rem;border:1px solid #f05;border-radius:4px;background:#f05;color:#fff;cursor:pointer;margin-right:1rem;text-decoration:none;display:inline-block}.button:focus{outline:none}.button:active,.button:hover{background:#ff4382;border-color:#ff4382}.button--inverse{background:transparent;color:#f05}.button--inverse:active,.button--inverse:hover{color:#fff;background:#f05}.button--danger{background:#830000;border-color:#830000}.button--danger:active,.button--danger:hover{background:#f34343;border-color:#f34343}.button:active:disabled,.button:disabled,.button:hover:disabled{background:#ccc;color:#979797;border-color:#ccc;cursor:not-allowed}.button--small{font-size:.8rem}.button--big{font-size:1.5rem}","",{version:3,sources:["/home/mantoss/mern_app/frontend/src/shared/components/FormElements/Button.css"],names:[],mappings:"AAAA,QACE,aAAc,AACd,qBAAuB,AACvB,sBAA0B,AAC1B,kBAAmB,AACnB,gBAAoB,AACpB,WAAa,AACb,eAAgB,AAChB,kBAAmB,AACnB,qBAAsB,AACtB,oBAAsB,CACvB,AAED,cACE,YAAc,CACf,AAED,6BAEE,mBAAoB,AACpB,oBAAsB,CACvB,AAED,iBACE,uBAAwB,AACxB,UAAe,CAChB,AAED,+CAEE,WAAa,AACb,eAAoB,CACrB,AAED,gBACE,mBAAoB,AACpB,oBAAsB,CACvB,AAED,6CAEE,mBAAoB,AACpB,oBAAsB,CACvB,AAED,gEAGE,gBAAiB,AACjB,cAAe,AACf,kBAAmB,AACnB,kBAAoB,CACrB,AAED,eACE,eAAkB,CACnB,AAED,aACE,gBAAkB,CACnB",file:"Button.css",sourcesContent:[".button {\n  font: inherit;\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #ff0055;\n  border-radius: 4px;\n  background: #ff0055;\n  color: white;\n  cursor: pointer;\n  margin-right: 1rem;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.button:focus {\n  outline: none;\n}\n\n.button:hover,\n.button:active {\n  background: #ff4382;\n  border-color: #ff4382;\n}\n\n.button--inverse {\n  background: transparent;\n  color: #ff0055;\n}\n\n.button--inverse:hover,\n.button--inverse:active {\n  color: white;\n  background: #ff0055;\n}\n\n.button--danger {\n  background: #830000;\n  border-color: #830000;\n}\n\n.button--danger:hover,\n.button--danger:active {\n  background: #f34343;\n  border-color: #f34343;\n}\n\n.button:disabled,\n.button:hover:disabled,\n.button:active:disabled {\n  background: #ccc;\n  color: #979797;\n  border-color: #ccc;\n  cursor: not-allowed;\n}\n\n.button--small {\n  font-size: 0.8rem;\n}\n\n.button--big {\n  font-size: 1.5rem;\n}"],sourceRoot:""}])},87:function(e,t,n){var r=n(88);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(68)(r,o);r.locals&&(e.exports=r.locals)},88:function(e,t,n){t=e.exports=n(67)(!0),t.push([e.i,".card{position:relative;margin:0;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);border-radius:6px;padding:1rem;overflow:hidden;background:#fff}","",{version:3,sources:["/home/mantoss/mern_app/frontend/src/shared/components/UIElements/Card.css"],names:[],mappings:"AAAA,MACI,kBAAmB,AACnB,SAAU,AACV,6CAAkD,AAC1C,qCAA0C,AAClD,kBAAmB,AACnB,aAAc,AACd,gBAAiB,AACjB,eAAkB,CACrB",file:"Card.css",sourcesContent:[".card {\n    position: relative;\n    margin: 0;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n    border-radius: 6px;\n    padding: 1rem;\n    overflow: hidden;\n    background: white;\n}"],sourceRoot:""}])},98:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(99),i=n(81),s=n(105),c=(n.n(s),function(e){return 0===e.items.length?o.a.createElement("div",{className:"center"},o.a.createElement(i.a,null,o.a.createElement("h2",null,"No users found."))):o.a.createElement("ul",{className:"users-list"},e.items.map(function(e){return o.a.createElement(a.a,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})}))});t.a=c},99:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(7),i=n(100),s=n(81),c=n(103),A=(n.n(c),function(e){return o.a.createElement("li",{className:"user-item"},o.a.createElement(s.a,{className:"user-item__content"},o.a.createElement(a.b,{to:"/"+e.id+"/places"},o.a.createElement("div",{className:"user-item__image"},o.a.createElement(i.a,{image:"https://mern-application21.herokuapp.com/"+e.image,alt:e.alt})),o.a.createElement("div",{className:"user-item__info"},o.a.createElement("h2",null,e.name),o.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"Place":"Places")))))});t.a=A}});
//# sourceMappingURL=1.15b26b7c.chunk.js.map