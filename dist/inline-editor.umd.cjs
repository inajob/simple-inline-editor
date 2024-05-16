(function(Z,b){typeof exports=="object"&&typeof module<"u"?b(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],b):(Z=typeof globalThis<"u"?globalThis:Z||self,b(Z.InlineEditor={},Z.React))})(this,function(Z,b){"use strict";var se={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function Ye(){if(ve)return $;ve=1;var v=b,o=Symbol.for("react.element"),k=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,L=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H={key:!0,ref:!0,__self:!0,__source:!0};function B(S,x,_){var D,F={},M=null,j=null;_!==void 0&&(M=""+_),x.key!==void 0&&(M=""+x.key),x.ref!==void 0&&(j=x.ref);for(D in x)E.call(x,D)&&!H.hasOwnProperty(D)&&(F[D]=x[D]);if(S&&S.defaultProps)for(D in x=S.defaultProps,x)F[D]===void 0&&(F[D]=x[D]);return{$$typeof:o,type:S,key:M,ref:j,props:F,_owner:L.current}}return $.Fragment=k,$.jsx=B,$.jsxs=B,$}var ee={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function Me(){return Ee||(Ee=1,process.env.NODE_ENV!=="production"&&function(){var v=b,o=Symbol.for("react.element"),k=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),S=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),W=Symbol.iterator,U="@@iterator";function Y(e){if(e===null||typeof e!="object")return null;var r=W&&e[W]||e[U];return typeof r=="function"?r:null}var u=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function y(e){{for(var r=arguments.length,i=new Array(r>1?r-1:0),h=1;h<r;h++)i[h-1]=arguments[h];w("error",e,i)}}function w(e,r,i){{var h=u.ReactDebugCurrentFrame,T=h.getStackAddendum();T!==""&&(r+="%s",i=i.concat([T]));var P=i.map(function(R){return String(R)});P.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,P)}}var K=!1,N=!1,f=!1,n=!1,l=!1,s;s=Symbol.for("react.module.reference");function t(e){return!!(typeof e=="string"||typeof e=="function"||e===E||e===H||l||e===L||e===_||e===D||n||e===j||K||N||f||typeof e=="object"&&e!==null&&(e.$$typeof===M||e.$$typeof===F||e.$$typeof===B||e.$$typeof===S||e.$$typeof===x||e.$$typeof===s||e.getModuleId!==void 0))}function c(e,r,i){var h=e.displayName;if(h)return h;var T=r.displayName||r.name||"";return T!==""?i+"("+T+")":i}function g(e){return e.displayName||"Context"}function d(e){if(e==null)return null;if(typeof e.tag=="number"&&y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case k:return"Portal";case H:return"Profiler";case L:return"StrictMode";case _:return"Suspense";case D:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case S:var r=e;return g(r)+".Consumer";case B:var i=e;return g(i._context)+".Provider";case x:return c(e,e.render,"ForwardRef");case F:var h=e.displayName||null;return h!==null?h:d(e.type)||"Memo";case M:{var T=e,P=T._payload,R=T._init;try{return d(R(P))}catch{return null}}}return null}var a=Object.assign,m=0,O,z,te,pe,Ce,Re,ke;function Te(){}Te.__reactDisabledLog=!0;function Qe(){{if(m===0){O=console.log,z=console.info,te=console.warn,pe=console.error,Ce=console.group,Re=console.groupCollapsed,ke=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Te,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}m++}}function qe(){{if(m--,m===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:a({},e,{value:O}),info:a({},e,{value:z}),warn:a({},e,{value:te}),error:a({},e,{value:pe}),group:a({},e,{value:Ce}),groupCollapsed:a({},e,{value:Re}),groupEnd:a({},e,{value:ke})})}m<0&&y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ce=u.ReactCurrentDispatcher,ue;function re(e,r,i){{if(ue===void 0)try{throw Error()}catch(T){var h=T.stack.trim().match(/\n( *(at )?)/);ue=h&&h[1]||""}return`
`+ue+e}}var fe=!1,oe;{var $e=typeof WeakMap=="function"?WeakMap:Map;oe=new $e}function Se(e,r){if(!e||fe)return"";{var i=oe.get(e);if(i!==void 0)return i}var h;fe=!0;var T=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var P;P=ce.current,ce.current=null,Qe();try{if(r){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(X){h=X}Reflect.construct(e,[],R)}else{try{R.call()}catch(X){h=X}e.call(R.prototype)}}else{try{throw Error()}catch(X){h=X}e()}}catch(X){if(X&&h&&typeof X.stack=="string"){for(var C=X.stack.split(`
`),V=h.stack.split(`
`),A=C.length-1,I=V.length-1;A>=1&&I>=0&&C[A]!==V[I];)I--;for(;A>=1&&I>=0;A--,I--)if(C[A]!==V[I]){if(A!==1||I!==1)do if(A--,I--,I<0||C[A]!==V[I]){var J=`
`+C[A].replace(" at new "," at ");return e.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",e.displayName)),typeof e=="function"&&oe.set(e,J),J}while(A>=1&&I>=0);break}}}finally{fe=!1,ce.current=P,qe(),Error.prepareStackTrace=T}var q=e?e.displayName||e.name:"",Be=q?re(q):"";return typeof e=="function"&&oe.set(e,Be),Be}function et(e,r,i){return Se(e,!1)}function tt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function le(e,r,i){if(e==null)return"";if(typeof e=="function")return Se(e,tt(e));if(typeof e=="string")return re(e);switch(e){case _:return re("Suspense");case D:return re("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case x:return et(e.render);case F:return le(e.type,r,i);case M:{var h=e,T=h._payload,P=h._init;try{return le(P(T),r,i)}catch{}}}return""}var ae=Object.prototype.hasOwnProperty,xe={},_e=u.ReactDebugCurrentFrame;function ie(e){if(e){var r=e._owner,i=le(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(i)}else _e.setExtraStackFrame(null)}function nt(e,r,i,h,T){{var P=Function.call.bind(ae);for(var R in e)if(P(e,R)){var C=void 0;try{if(typeof e[R]!="function"){var V=Error((h||"React class")+": "+i+" type `"+R+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[R]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw V.name="Invariant Violation",V}C=e[R](r,R,h,i,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(A){C=A}C&&!(C instanceof Error)&&(ie(T),y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",h||"React class",i,R,typeof C),ie(null)),C instanceof Error&&!(C.message in xe)&&(xe[C.message]=!0,ie(T),y("Failed %s type: %s",i,C.message),ie(null))}}}var rt=Array.isArray;function de(e){return rt(e)}function ot(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,i=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return i}}function lt(e){try{return je(e),!1}catch{return!0}}function je(e){return""+e}function Pe(e){if(lt(e))return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ot(e)),je(e)}var ne=u.ReactCurrentOwner,at={key:!0,ref:!0,__self:!0,__source:!0},Oe,De,he;he={};function it(e){if(ae.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function st(e){if(ae.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ct(e,r){if(typeof e.ref=="string"&&ne.current&&r&&ne.current.stateNode!==r){var i=d(ne.current.type);he[i]||(y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',d(ne.current.type),e.ref),he[i]=!0)}}function ut(e,r){{var i=function(){Oe||(Oe=!0,y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"key",{get:i,configurable:!0})}}function ft(e,r){{var i=function(){De||(De=!0,y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};i.isReactWarning=!0,Object.defineProperty(e,"ref",{get:i,configurable:!0})}}var dt=function(e,r,i,h,T,P,R){var C={$$typeof:o,type:e,key:r,ref:i,props:R,_owner:P};return C._store={},Object.defineProperty(C._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(C,"_self",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.defineProperty(C,"_source",{configurable:!1,enumerable:!1,writable:!1,value:T}),Object.freeze&&(Object.freeze(C.props),Object.freeze(C)),C};function ht(e,r,i,h,T){{var P,R={},C=null,V=null;i!==void 0&&(Pe(i),C=""+i),st(r)&&(Pe(r.key),C=""+r.key),it(r)&&(V=r.ref,ct(r,T));for(P in r)ae.call(r,P)&&!at.hasOwnProperty(P)&&(R[P]=r[P]);if(e&&e.defaultProps){var A=e.defaultProps;for(P in A)R[P]===void 0&&(R[P]=A[P])}if(C||V){var I=typeof e=="function"?e.displayName||e.name||"Unknown":e;C&&ut(R,I),V&&ft(R,I)}return dt(e,C,V,T,h,ne.current,R)}}var ge=u.ReactCurrentOwner,Ne=u.ReactDebugCurrentFrame;function Q(e){if(e){var r=e._owner,i=le(e.type,e._source,r?r.type:null);Ne.setExtraStackFrame(i)}else Ne.setExtraStackFrame(null)}var me;me=!1;function ye(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function Fe(){{if(ge.current){var e=d(ge.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function gt(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),i=e.lineNumber;return`

Check your code at `+r+":"+i+"."}return""}}var Ae={};function mt(e){{var r=Fe();if(!r){var i=typeof e=="string"?e:e.displayName||e.name;i&&(r=`

Check the top-level render call using <`+i+">.")}return r}}function Le(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var i=mt(r);if(Ae[i])return;Ae[i]=!0;var h="";e&&e._owner&&e._owner!==ge.current&&(h=" It was passed a child from "+d(e._owner.type)+"."),Q(e),y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',i,h),Q(null)}}function Ie(e,r){{if(typeof e!="object")return;if(de(e))for(var i=0;i<e.length;i++){var h=e[i];ye(h)&&Le(h,r)}else if(ye(e))e._store&&(e._store.validated=!0);else if(e){var T=Y(e);if(typeof T=="function"&&T!==e.entries)for(var P=T.call(e),R;!(R=P.next()).done;)ye(R.value)&&Le(R.value,r)}}}function yt(e){{var r=e.type;if(r==null||typeof r=="string")return;var i;if(typeof r=="function")i=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===x||r.$$typeof===F))i=r.propTypes;else return;if(i){var h=d(r);nt(i,e.props,"prop",h,e)}else if(r.PropTypes!==void 0&&!me){me=!0;var T=d(r);y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",T||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function vt(e){{for(var r=Object.keys(e.props),i=0;i<r.length;i++){var h=r[i];if(h!=="children"&&h!=="key"){Q(e),y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",h),Q(null);break}}e.ref!==null&&(Q(e),y("Invalid attribute `ref` supplied to `React.Fragment`."),Q(null))}}function We(e,r,i,h,T,P){{var R=t(e);if(!R){var C="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(C+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var V=gt(T);V?C+=V:C+=Fe();var A;e===null?A="null":de(e)?A="array":e!==void 0&&e.$$typeof===o?(A="<"+(d(e.type)||"Unknown")+" />",C=" Did you accidentally export a JSX literal instead of a component?"):A=typeof e,y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",A,C)}var I=ht(e,r,i,T,P);if(I==null)return I;if(R){var J=r.children;if(J!==void 0)if(h)if(de(J)){for(var q=0;q<J.length;q++)Ie(J[q],e);Object.freeze&&Object.freeze(J)}else y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ie(J,e)}return e===E?vt(I):yt(I),I}}function Et(e,r,i){return We(e,r,i,!0)}function wt(e,r,i){return We(e,r,i,!1)}var bt=wt,pt=Et;ee.Fragment=E,ee.jsx=bt,ee.jsxs=pt}()),ee}process.env.NODE_ENV==="production"?se.exports=Ye():se.exports=Me();var p=se.exports;function G(v,o){const k=v.match(/^(\s*)(```|> )/);return o===!0?k:k!=null}const He=v=>v.match(/^(\s*)> /)!=null,Ue=v=>v.split(/[\r\n]/),Ve=v=>v.split(/[\r\n]/).length,we=(v,o)=>{const k=o.split(/[\r\n]/);let E=0;for(let L=0;L<k.length;L++)if(E+=k[L].length+1,E>v)return[v-(E-k[L].length-1),L];throw new Error("error getPos")},Ke=(v,o)=>{const k=we(v,o),E=Ve(o);return k[1]===E-1},Je=(v,o)=>we(v,o)[1]===0,Ge=v=>{const o=v.match(/^\s*`{3}(.*)/),k=Ue(v).slice(1).join(`
`);return[o==null?void 0:o[1],k]},be=b.forwardRef(function(o,k){const[E,L]=b.useState({prefix:"",selection:"",suffix:""}),H=()=>{L({prefix:"",selection:"",suffix:""})},[B,S]=b.useState({index:0}),x=(u,y)=>{let w=0,K="",N=!1;for(let n=0;n<u.length;n++){const l=u[n];l==="["?(w++,K=""):l==="]"?(w>0&&(w--,K="",N=!0),w===0&&(N=!1)):w>0&&!N&&(K+=l)}let f="";if(w>0){let n=0,l=!1;for(let s=0;s<y.length;s++){const t=y[s];t==="["?n++:t==="]"?(n--,l=!0):l||(f+=t)}return n===0&&(f=""),K+f}return""},_=u=>{let y=u.length-1;for(let w=u.length-1;w>=0;w--)if(u[w]==="["){y=w;break}return u.slice(0,-(u.length-1-y))},D=u=>{let y=0;for(let w=0;w<u.length;w++)if(u[w]==="]"){y=w;break}return u.slice(y)},F=x(E.prefix,E.suffix);b.useEffect(()=>{if(!U.current||!Y.current)return;U.current.style.display="inline",E.selection===""&&F===""?Y.current.style.display="none":Y.current.style.display="inline",Y.current.style.left=U.current.getBoundingClientRect().width+"px",Y.current.style.top=-Y.current.getBoundingClientRect().height+"px";const u=Y.current.getBoundingClientRect().top+window.scrollY;u<0&&(Y.current.style.top=-Y.current.getBoundingClientRect().height-u+"px"),U.current.style.display="none"},[E,F]),b.useEffect(()=>{S({index:0})},[o.value]);const M=function(u){L({prefix:u.currentTarget.value.slice(0,u.currentTarget.selectionStart),selection:u.currentTarget.value.slice(u.currentTarget.selectionStart,u.currentTarget.selectionEnd),suffix:u.currentTarget.value.slice(u.currentTarget.selectionEnd)})};let j=o.popupHandlers,W=!1;E.selection===""&&F!==""&&(j=o.keywords.filter(u=>u.indexOf(F)!=-1).map((u,y)=>({name:u,handler:()=>{const w=_(E.prefix),K=j[y].name;let N=D(E.suffix),f=(w+K).length;return(N.length==0||N[0]!="]")&&(N="]"+N,f+=1),{value:w+K+N,column:f}}})),j.length>0&&(W=!0));const U=b.useRef(null),Y=b.useRef(null);return p.jsxs("div",{className:o.className+" container",style:{position:"relative"},children:[p.jsx("textarea",{ref:k,value:o.value,onPaste:o.onPaste,onCompositionStart:o.onCompositionStart,onCompositionEnd:u=>{o.onCompositionEnd(u),M(u)},onChange:o.onChange,onKeyDown:u=>{if(u.key==="Enter"&&u.keyCode===13&&W){const y=j[B.index].handler(null);o.setLine(y.value),o.setCursor(y.column),u.preventDefault()}else u.key=="Tab"&&W?(S(y=>{let w=y.index+1;return w>=j.length&&(w=0),{index:w}}),u.preventDefault()):o.onKeyDown(E)(u)},onSelect:M}),p.jsx("div",{className:"popup",ref:Y,children:j.map((u,y)=>p.jsx("div",{className:B.index==y?"selected":"",onClick:()=>{const w=u.handler(E);o.setLine(w.value),o.setCursor(w.column),H()},children:u.name},y))}),p.jsx("span",{className:"menu-pos",style:{display:"none"},ref:U,children:E.prefix.replace(" "," ")})]})}),ze=(v,o=null)=>{const k=b.useRef(o);return b.useEffect(()=>{v&&(typeof v=="function"?v(k.current):v.current=k.current)},[v]),k},Xe=b.forwardRef(function(o,k){const E=ze(k),[L,H]=b.useState();b.useEffect(()=>{if(!E.current)return;const n=E.current.style.display;E.current.style.display="block",E.current.style.height="0px",E.current.style.height=E.current.scrollHeight+"px",E.current.style.display=n},[o.value,E,o.isFocus]);const B=(n,l,s)=>{var g;const t=["line"],c=n.match(/^(\s*)- /);if(n.indexOf("# ")===0)t.push("h1-style");else if(n.indexOf("## ")===0)t.push("h2-style");else if(n.indexOf("### ")===0)t.push("h3-style");else if(c)t.push("list-style"),t.push("list-indent-"+c[1].length/2);else if(G(n)){const d=G(n,!0);t.push("list-indent-"+(((g=d==null?void 0:d[1])==null?void 0:g.length)??0)/2)}return l&&t.push("focus"),s&&t.push("select"),t.join(" ")},S=n=>n?[]:["hide"],x=n=>n?"hide":"",_=(n,l,s)=>{let t=-1,c="";return l.forEach(function(g){const d=n.indexOf(g,s);d!==-1&&(t===-1||t>d)&&(t=d,c=g)}),{pos:t,target:c}},D=o.onLinkClick,F=o.onSubLinkClick,M=b.useCallback(n=>{let l=0;const s=[];for(;;){const t=_(n,["http://","https://"," ","["],l);if(t.target==="https://"||t.target==="http://"){l!==t.pos&&s.push(n.slice(l,t.pos));const c=_(n,[" ","\r",`
`],t.pos+t.target.length);if(c.pos!==-1){const g=n.slice(t.pos,c.pos);s.push(p.jsx("a",{href:g,children:g})),l=c.pos}else{const g=n.slice(t.pos,n.length);s.push(p.jsx("a",{href:g,children:g})),l=n.length;break}}else if(t.target==" ")s.push(n.slice(l,t.pos)),s.push(" "),l=t.pos+t.target.length;else if(t.target=="["){l!==t.pos&&s.push(n.slice(l,t.pos));const c=_(n,["]"],t.pos+t.target.length);if(c.pos!==-1){const g=n.slice(t.pos,c.pos+1);s.push([p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"braket",onClick:d=>{D(g.slice(1,g.length-1)),d.stopPropagation()},children:g.slice(1,g.length-1)},l),p.jsx("span",{className:"bracket-icon",onClick:d=>{F(g.slice(1,g.length-1)),d.stopPropagation()},children:"[]"},"icon-"+l)]})]),l=c.pos+1}else s.push(n.slice(l,n.length)),l=n.length}else{s.push(n.slice(l,n.length)),l=n.length;break}}return s},[D,F]),j=b.useCallback((n,l)=>{const s=n?o.blockStyles[n]:void 0;return s?s(l):p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"block-type",children:n}),p.jsx("pre",{children:l})]})},[o.blockStyles]),W=b.useCallback(n=>{const l=n.match(/^(\s*)```.*/),s=(l==null?void 0:l[1])??"";return n=n.slice(s.length).split(`
`).map(t=>s+t).join(`
`),n},[]),U=b.useCallback(n=>{const l=n.match(/^(\s*)> /),s=(l==null?void 0:l[1])??"";return n=n.slice(s.length).split(`
`).map((t,c)=>s+(c===0?"":"> ")+t).join(`
`),n},[]),Y=b.useCallback(n=>{var l;if(console.log(n),G(n))if(He(n)){const s=n.match(/\s*> /),t=n.slice((l=s==null?void 0:s[0])==null?void 0:l.length);H(p.jsxs("div",{children:[p.jsx("pre",{className:"for-copy",children:U(n)}),p.jsx("div",{className:"no-select",children:j("pre",t)})]}));return}else{const s=Ge(n);try{const t=j(s[0],s[1]);H(p.jsxs("div",{children:[p.jsx("pre",{className:"for-copy",children:W(n+"\n```")}),p.jsx("div",{className:"no-select",children:t})]}))}catch(t){t instanceof Promise&&t.then(c=>{console.log(c),H(c)}),H(p.jsx("div",{children:"loading..."}))}return}else{const s=["elm"],t=n.match(/^(\s*)-( .*)$/);let c=null;n.indexOf("# ")===0||n.indexOf("## ")===0||n.indexOf("### ")===0||t&&(n=t[2],c=p.jsx("pre",{className:"for-copy-inline",children:t[1]+"-"})),H(p.jsxs("div",{className:s.join(" "),children:[c,M(n)]}));return}},[W,U,j,M]),u=n=>{const l=n.match(/^(\s*-)( .*)$/);let s="";if(l)n=l[2],s=l[1];else{const t=n.match(/^(\s*)(```.*|> )/);t&&(s=t[1],n=n.slice(t[1].length))}return[s,n]},y=b.useRef(null),w=n=>l=>{if(l.buttons!==0&&y.current){n();const s=new Range;s.selectNodeContents(y.current);const t=document.getSelection();if(!t)throw new Error("selection is null");t.empty(),t.addRange(s)}},K=u(o.value),N=K[0],f=K[1];return b.useEffect(()=>{Y(o.value)},[Y,o.value]),G(f)?p.jsxs("div",{className:B(o.value,o.isFocus,o.isSelect),ref:y,"data-lineno":o.row,onClick:o.onClick,children:[p.jsx("div",{className:["line-item"].concat(S(o.isFocus)).join(" "),onMouseLeave:w(o.selectThisLine),children:p.jsx(be,{ref:E,value:f,keywords:o.keywords,setLine:o.setLine(N),setCursor:o.setCursor,onCompositionStart:o.onCompositionStart,onCompositionEnd:o.onCompositionEnd,onChange:o.onChange(N),popupHandlers:[],onKeyDown:()=>o.onKeyDown(N,f)})}),p.jsx("div",{className:"line-item",children:L})]}):p.jsxs("div",{className:B(o.value,o.isFocus,o.isSelect),ref:y,"data-lineno":o.row,onClick:o.onClick,children:[p.jsx("div",{className:S(o.isFocus)+" container",onMouseLeave:w(o.selectThisLine),children:p.jsx(be,{ref:E,value:f,keywords:o.keywords,setLine:o.setLine(N),setCursor:o.setCursor,onPaste:o.onPaste(o.row),onCompositionStart:o.onCompositionStart,onCompositionEnd:o.onCompositionEnd,onChange:o.onChange(N),popupHandlers:o.textPopupHandlers,onKeyDown:n=>l=>{l.key==="Enter"&&l.keyCode===13&&n.selection!==""?l.preventDefault():o.onKeyDown(N,f)(l)}})}),p.jsx("div",{className:x(o.isFocus),children:L})]})}),Ze=v=>{const o=v.lines,k=v.setLines,E=b.useRef(o.length),L=()=>(E.current=E.current+1,E.current),H=v.onChange;b.useEffect(()=>{H(o.map(f=>f.body))},[o,H]);const B=b.useRef(!1),[S,x]=b.useState({row:0,col:0,colEnd:-1,direction:"none"}),[_,D]=b.useState([0,0]),F=f=>f==null?null:f instanceof HTMLElement&&f.classList.contains("line")?f:F(f.parentElement),M=b.useRef(null);let j,W,U=!1;const Y=()=>{U=!0;const f=document.getSelection();f&&(j=F(f.anchorNode),W=F(f.focusNode),(j==null?void 0:j.parentNode)!=M.current&&(j=null,W=null),j!==W&&x({row:-1,col:0}))},u=()=>{var f,n,l,s;if(U&&(U=!1,j&&W&&j!==W)){const t=new Range;if(t.setStart(j,0),t.setEnd(W,W.children.length),document.getSelection().empty(),document.getSelection().addRange(t),!((f=j.dataset)!=null&&f.lineno))throw new Error("fromLine.dataset?.lineno is undefined");const c=parseInt((n=j.dataset)==null?void 0:n.lineno);if(!((l=W.dataset)!=null&&l.lineno))throw new Error("toLine.dataset?.lineno is undefined");const g=parseInt((s=W.dataset)==null?void 0:s.lineno);D([c,g])}},y=()=>()=>{x(()=>({row:-1,col:0})),U=!0},w=b.useRef(null);b.useEffect(()=>{var f;if(w.current)if(_[1]-_[0]>=1){w.current.style.display="block";const n=(f=document.getSelection())==null?void 0:f.focusNode;if(!n)throw new Error("focusNode is null");if(!(n instanceof Element))throw new Error("focusNode is not Element");const l=n.getBoundingClientRect(),s=l.bottom,t=l.x+l.width/2;w.current.style.left=t+"px",w.current.style.top=s+"px"}else w.current.style.display="none"},[_]);const K=f=>n=>{const s=n.clipboardData.getData("text").split(/\r\n|\n/);if(s.length===1)return!0;const t=[];let c=[],g=!1,d="";return s.forEach(a=>{const m=a.match(/^(\s*)(```.*)/);g?a.indexOf(d+"```")===0?(t.push(c.join(`
`)),g=!1,c=[]):(d!==""&&a.indexOf(d)!==0&&(t.push(c.join(`
`)),g=!1,c=[],t.push(a)),c.push(a.slice(d.length))):m?(g=!0,d=m[1],c.push(a)):t.push(a)}),c.length!==0&&t.push(c.join(`
`)),k(a=>(a[f]={body:a[f]+t[0],key:a[f].key},a.splice(f+1,0,...t.slice(1).map(m=>({body:m,key:L()}))),[...a])),n.preventDefault(),!1};b.useEffect(()=>{document.addEventListener("selectionchange",Y),document.addEventListener("pointerup",u)},[]);const N=b.useRef([]);return b.useEffect(()=>{if(S.row!==-1&&B.current===!1){const f=N.current[S.row];if(!f||!f.current)return;f.current.focus();let n=S.colEnd;(n===void 0||n===-1)&&(n=S.col),console.log("EFFECT","col:",S.col,"end:",n),f.current.setSelectionRange(S.col,n,S.direction)}},[S,o]),o.forEach((f,n)=>{N.current[n]=b.createRef()}),p.jsxs("div",{className:"editor",ref:M,children:[o.map((f,n)=>p.jsx(Xe,{ref:N.current[n],isFocus:n===S.row,isSelect:_[0]<=n&&n<=_[1],row:n,value:f.body,textPopupHandlers:v.textPopupHandlers,keywords:v.keywords,blockStyles:v.blockStyles,selectThisLine:y(),setLine:l=>s=>(t=>{k(c=>(c[t].body=l+s,[...c]))})(n),setCursor:l=>(s=>{x(t=>({row:s,col:l,colEnd:-1,direction:t.direction}))})(n),onPaste:K,onCompositionStart:()=>{B.current=!0,console.log("composition start")},onCompositionEnd:()=>{B.current=!1,console.log("composition end")},onChange:l=>s=>(t=>{if(console.log("onChange",B.current),B.current===!1){const c=s.target.selectionStart,g=s.target.selectionEnd,d=s.target.selectionDirection;x(a=>({row:a.row,col:c,colEnd:g,direction:d}))}k(c=>(c[t].body=l+s.target.value,[...c]))})(n),onKeyDown:(l,s)=>t=>{let c=t.currentTarget.selectionStart,g=t.currentTarget.selectionEnd,d=t.currentTarget.selectionDirection;x(a=>{switch(t.key){case"ArrowLeft":{if(t.currentTarget!=null&&t.currentTarget.selectionStart===0&&t.currentTarget.selectionEnd===0){if(a.row===0)return a;const m=o[S.row-1].body.length;return t.preventDefault(),{row:a.row-1,col:m,colEnd:-1,direction:d}}return t.shiftKey?c==g?(c--,d="backward"):d==="forward"?g--:d==="backward"&&c--:(c--,g=-1),t.preventDefault(),{row:a.row,col:c,colEnd:g,direction:d}}case"ArrowRight":{const m=-l.length+o[S.row].body.length;return t.currentTarget!=null&&t.currentTarget.selectionStart===m&&t.currentTarget.selectionEnd===m?a.row===o.length-1?a:(t.preventDefault(),{row:a.row+1,col:0,colEnd:-1,direction:d}):(t.shiftKey?d==="forward"?g++:d==="backward"&&c++:(c<g&&(c=g),c++,g=-1),t.preventDefault(),{row:a.row,col:c,colEnd:g,direction:d})}case"ArrowUp":return G(s)&&!Je(t.currentTarget.selectionStart,s)||a.row===0?a:(t.preventDefault(),{row:a.row-1,col:t.currentTarget.selectionStart,colEnd:-1,direction:d});case"ArrowDown":return G(s)&&!Ke(t.currentTarget.selectionStart,s)||a.row===o.length-1?a:(t.preventDefault(),{row:a.row+1,col:t.currentTarget.selectionStart,colEnd:-1,direction:d});case"Backspace":if(l.length!==0&&(t.currentTarget.selectionStart===0&&t.currentTarget.selectionEnd===0||t.currentTarget.selectionStart===1&&t.currentTarget.selectionEnd===1))l.length!==0&&(k(m=>(l.length===1?(m[a.row].body=t.currentTarget.value.slice(1),c--,c===-1?c++:c===0&&g!==0&&(g=0)):l.length>0&&(m[a.row].body=l.slice(2)+t.currentTarget.value),[...m])),t.preventDefault());else if(t.currentTarget!=null&&t.currentTarget.selectionStart===0&&t.currentTarget.selectionEnd===0){if(a.row===0)return a;const m=o[S.row-1].body.length-1;return k(O=>(G(O[a.row-1].body)?O[a.row-1].body+=`
`+O[a.row].body:O[a.row-1].body+=O[a.row].body,O.splice(a.row,1),[...O])),t.preventDefault(),{row:a.row-1,col:m,colEnd:-1,direction:d}}return console.log("normal Backspace",c),{row:a.row,col:c,colEnd:g,direction:d};case"Tab":return k(m=>{if(t.shiftKey)l.length===1?(m[a.row].body=t.currentTarget.value.slice(1),c--):l.length>0&&(m[a.row].body=l.slice(2)+t.currentTarget.value);else{let O="-";G(t.currentTarget.value)&&(O=" "),l.length===0?(m[a.row].body=O+" "+t.currentTarget.value,c++):m[a.row].body="  "+l+t.currentTarget.value}return x(O=>({row:O.row,col:c,colEnd:-1,direction:d})),[...m]}),t.preventDefault(),{row:a.row,col:c,colEnd:-1,direction:d};case"Enter":return t.keyCode===13?G(s)&&!t.shiftKey?a:(k(m=>{const O=l.length+t.currentTarget.selectionStart;let z=m[a.row].body.slice(O);if(G(s)){const te=m[a.row].body;te[te.length-1]===`
`?m[a.row].body=m[a.row].body.slice(0,O-1):m[a.row].body=m[a.row].body.slice(0,O),z.length>0&&z[0]===`
`&&(z=z.slice(1))}else m[a.row].body=m[a.row].body.slice(0,O);return l.length!==0?m.splice(a.row+1,0,{body:l+" "+z,key:L()}):m.splice(a.row+1,0,{body:z,key:L()}),[...m]}),t.preventDefault(),{row:a.row+1,col:l.length,colEnd:-1,direction:d}):a;case" ":return console.log("space",c),(c===0||c===1&&l.length>=1)&&(k(m=>{let O="-";return G(t.currentTarget.value)&&(O=" "),l.length===0?(m[a.row].body=O+" "+t.currentTarget.value,c++):m[a.row].body="  "+l+t.currentTarget.value,[...m]}),t.preventDefault()),{row:a.row,col:c,colEnd:-1,direction:d};default:return a}})},onLinkClick:v.onLinkClick,onSubLinkClick:v.onSubLinkClick,onClick:l=>{if(S.row!==n){const s=l.target.selectionStart;D([n,n]),x(()=>({row:n,col:s}))}}},f.key)),p.jsx("div",{className:"popup",ref:w,children:v.linePopupHandlers.map((f,n)=>p.jsx("div",{onClick:()=>{globalThis.ontouchstart!==null&&(f.handler(o.slice(_[0],_[1]+1).map(l=>l.body),_),D([_[1],_[1]]))},onTouchStart:()=>{f.handler(o.slice(_[0],_[1]+1).map(l=>l.body)),D([_[1],_[1]])},children:f.name},n))})]})};Z.Editor=Ze,Object.defineProperty(Z,Symbol.toStringTag,{value:"Module"})});
