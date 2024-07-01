(function(X,b){typeof exports=="object"&&typeof module<"u"?b(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],b):(X=typeof globalThis<"u"?globalThis:X||self,b(X.InlineEditor={},X.React))})(this,function(X,b){"use strict";var ue={exports:{}},te={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function Ke(){if(Ee)return te;Ee=1;var g=b,t=Symbol.for("react.element"),w=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,N=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function J(W,f,_){var R,F={},K=null,Y=null;_!==void 0&&(K=""+_),f.key!==void 0&&(K=""+f.key),f.ref!==void 0&&(Y=f.ref);for(R in f)y.call(f,R)&&!U.hasOwnProperty(R)&&(F[R]=f[R]);if(W&&W.defaultProps)for(R in f=W.defaultProps,f)F[R]===void 0&&(F[R]=f[R]);return{$$typeof:t,type:W,key:K,ref:Y,props:F,_owner:N.current}}return te.Fragment=w,te.jsx=J,te.jsxs=J,te}var ne={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function He(){return we||(we=1,process.env.NODE_ENV!=="production"&&function(){var g=b,t=Symbol.for("react.element"),w=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),W=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),A=Symbol.iterator,I="@@iterator";function H(e){if(e===null||typeof e!="object")return null;var r=A&&e[A]||e[I];return typeof r=="function"?r:null}var d=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){{for(var r=arguments.length,s=new Array(r>1?r-1:0),v=1;v<r;v++)s[v-1]=arguments[v];S("error",e,s)}}function S(e,r,s){{var v=d.ReactDebugCurrentFrame,x=v.getStackAddendum();x!==""&&(r+="%s",s=s.concat([x]));var P=s.map(function(C){return String(C)});P.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,P)}}var D=!1,B=!1,i=!1,n=!1,l=!1,o;o=Symbol.for("react.module.reference");function h(e){return!!(typeof e=="string"||typeof e=="function"||e===y||e===U||l||e===N||e===_||e===R||n||e===Y||D||B||i||typeof e=="object"&&e!==null&&(e.$$typeof===K||e.$$typeof===F||e.$$typeof===J||e.$$typeof===W||e.$$typeof===f||e.$$typeof===o||e.getModuleId!==void 0))}function a(e,r,s){var v=e.displayName;if(v)return v;var x=r.displayName||r.name||"";return x!==""?s+"("+x+")":s}function u(e){return e.displayName||"Context"}function k(e){if(e==null)return null;if(typeof e.tag=="number"&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case w:return"Portal";case U:return"Profiler";case N:return"StrictMode";case _:return"Suspense";case R:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case W:var r=e;return u(r)+".Consumer";case J:var s=e;return u(s._context)+".Provider";case f:return a(e,e.render,"ForwardRef");case F:var v=e.displayName||null;return v!==null?v:k(e.type)||"Memo";case K:{var x=e,P=x._payload,C=x._init;try{return k(C(P))}catch{return null}}}return null}var T=Object.assign,c=0,O,j,q,Z,re,Re,Se;function xe(){}xe.__reactDisabledLog=!0;function qe(){{if(c===0){O=console.log,j=console.info,q=console.warn,Z=console.error,re=console.group,Re=console.groupCollapsed,Se=console.groupEnd;var e={configurable:!0,enumerable:!0,value:xe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}c++}}function $e(){{if(c--,c===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:T({},e,{value:O}),info:T({},e,{value:j}),warn:T({},e,{value:q}),error:T({},e,{value:Z}),group:T({},e,{value:re}),groupCollapsed:T({},e,{value:Re}),groupEnd:T({},e,{value:Se})})}c<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var fe=d.ReactCurrentDispatcher,de;function ae(e,r,s){{if(de===void 0)try{throw Error()}catch(x){var v=x.stack.trim().match(/\n( *(at )?)/);de=v&&v[1]||""}return`
`+de+e}}var he=!1,le;{var et=typeof WeakMap=="function"?WeakMap:Map;le=new et}function _e(e,r){if(!e||he)return"";{var s=le.get(e);if(s!==void 0)return s}var v;he=!0;var x=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var P;P=fe.current,fe.current=null,qe();try{if(r){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(Q){v=Q}Reflect.construct(e,[],C)}else{try{C.call()}catch(Q){v=Q}e.call(C.prototype)}}else{try{throw Error()}catch(Q){v=Q}e()}}catch(Q){if(Q&&v&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),V=v.stack.split(`
`),L=p.length-1,M=V.length-1;L>=1&&M>=0&&p[L]!==V[M];)M--;for(;L>=1&&M>=0;L--,M--)if(p[L]!==V[M]){if(L!==1||M!==1)do if(L--,M--,M<0||p[L]!==V[M]){var z=`
`+p[L].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),typeof e=="function"&&le.set(e,z),z}while(L>=1&&M>=0);break}}}finally{he=!1,fe.current=P,$e(),Error.prepareStackTrace=x}var ee=e?e.displayName||e.name:"",Ye=ee?ae(ee):"";return typeof e=="function"&&le.set(e,Ye),Ye}function tt(e,r,s){return _e(e,!1)}function nt(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function ie(e,r,s){if(e==null)return"";if(typeof e=="function")return _e(e,nt(e));if(typeof e=="string")return ae(e);switch(e){case _:return ae("Suspense");case R:return ae("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case f:return tt(e.render);case F:return ie(e.type,r,s);case K:{var v=e,x=v._payload,P=v._init;try{return ie(P(x),r,s)}catch{}}}return""}var se=Object.prototype.hasOwnProperty,je={},Pe=d.ReactDebugCurrentFrame;function ce(e){if(e){var r=e._owner,s=ie(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(s)}else Pe.setExtraStackFrame(null)}function rt(e,r,s,v,x){{var P=Function.call.bind(se);for(var C in e)if(P(e,C)){var p=void 0;try{if(typeof e[C]!="function"){var V=Error((v||"React class")+": "+s+" type `"+C+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[C]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw V.name="Invariant Violation",V}p=e[C](r,C,v,s,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(L){p=L}p&&!(p instanceof Error)&&(ce(x),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",v||"React class",s,C,typeof p),ce(null)),p instanceof Error&&!(p.message in je)&&(je[p.message]=!0,ce(x),m("Failed %s type: %s",s,p.message),ce(null))}}}var ot=Array.isArray;function ge(e){return ot(e)}function at(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,s=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s}}function lt(e){try{return Oe(e),!1}catch{return!0}}function Oe(e){return""+e}function De(e){if(lt(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",at(e)),Oe(e)}var oe=d.ReactCurrentOwner,it={key:!0,ref:!0,__self:!0,__source:!0},Fe,Ne,ve;ve={};function st(e){if(se.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ct(e){if(se.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ut(e,r){if(typeof e.ref=="string"&&oe.current&&r&&oe.current.stateNode!==r){var s=k(oe.current.type);ve[s]||(m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k(oe.current.type),e.ref),ve[s]=!0)}}function ft(e,r){{var s=function(){Fe||(Fe=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}}function dt(e,r){{var s=function(){Ne||(Ne=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};s.isReactWarning=!0,Object.defineProperty(e,"ref",{get:s,configurable:!0})}}var ht=function(e,r,s,v,x,P,C){var p={$$typeof:t,type:e,key:r,ref:s,props:C,_owner:P};return p._store={},Object.defineProperty(p._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(p,"_self",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.defineProperty(p,"_source",{configurable:!1,enumerable:!1,writable:!1,value:x}),Object.freeze&&(Object.freeze(p.props),Object.freeze(p)),p};function gt(e,r,s,v,x){{var P,C={},p=null,V=null;s!==void 0&&(De(s),p=""+s),ct(r)&&(De(r.key),p=""+r.key),st(r)&&(V=r.ref,ut(r,x));for(P in r)se.call(r,P)&&!it.hasOwnProperty(P)&&(C[P]=r[P]);if(e&&e.defaultProps){var L=e.defaultProps;for(P in L)C[P]===void 0&&(C[P]=L[P])}if(p||V){var M=typeof e=="function"?e.displayName||e.name||"Unknown":e;p&&ft(C,M),V&&dt(C,M)}return ht(e,p,V,x,v,oe.current,C)}}var ye=d.ReactCurrentOwner,Ae=d.ReactDebugCurrentFrame;function $(e){if(e){var r=e._owner,s=ie(e.type,e._source,r?r.type:null);Ae.setExtraStackFrame(s)}else Ae.setExtraStackFrame(null)}var me;me=!1;function be(e){return typeof e=="object"&&e!==null&&e.$$typeof===t}function Ie(){{if(ye.current){var e=k(ye.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function vt(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),s=e.lineNumber;return`

Check your code at `+r+":"+s+"."}return""}}var Le={};function yt(e){{var r=Ie();if(!r){var s=typeof e=="string"?e:e.displayName||e.name;s&&(r=`

Check the top-level render call using <`+s+">.")}return r}}function Me(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var s=yt(r);if(Le[s])return;Le[s]=!0;var v="";e&&e._owner&&e._owner!==ye.current&&(v=" It was passed a child from "+k(e._owner.type)+"."),$(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',s,v),$(null)}}function We(e,r){{if(typeof e!="object")return;if(ge(e))for(var s=0;s<e.length;s++){var v=e[s];be(v)&&Me(v,r)}else if(be(e))e._store&&(e._store.validated=!0);else if(e){var x=H(e);if(typeof x=="function"&&x!==e.entries)for(var P=x.call(e),C;!(C=P.next()).done;)be(C.value)&&Me(C.value,r)}}}function mt(e){{var r=e.type;if(r==null||typeof r=="string")return;var s;if(typeof r=="function")s=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===f||r.$$typeof===F))s=r.propTypes;else return;if(s){var v=k(r);rt(s,e.props,"prop",v,e)}else if(r.PropTypes!==void 0&&!me){me=!0;var x=k(r);m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",x||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function bt(e){{for(var r=Object.keys(e.props),s=0;s<r.length;s++){var v=r[s];if(v!=="children"&&v!=="key"){$(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",v),$(null);break}}e.ref!==null&&($(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),$(null))}}function Be(e,r,s,v,x,P){{var C=h(e);if(!C){var p="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(p+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var V=vt(x);V?p+=V:p+=Ie();var L;e===null?L="null":ge(e)?L="array":e!==void 0&&e.$$typeof===t?(L="<"+(k(e.type)||"Unknown")+" />",p=" Did you accidentally export a JSX literal instead of a component?"):L=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",L,p)}var M=gt(e,r,s,x,P);if(M==null)return M;if(C){var z=r.children;if(z!==void 0)if(v)if(ge(z)){for(var ee=0;ee<z.length;ee++)We(z[ee],e);Object.freeze&&Object.freeze(z)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else We(z,e)}return e===y?bt(M):mt(M),M}}function Et(e,r,s){return Be(e,r,s,!0)}function wt(e,r,s){return Be(e,r,s,!1)}var pt=wt,kt=Et;ne.Fragment=y,ne.jsx=pt,ne.jsxs=kt}()),ne}process.env.NODE_ENV==="production"?ue.exports=Ke():ue.exports=He();var E=ue.exports;function G(g,t){const w=g.match(/^(\s*)(```|> )/);return t===!0?w:w!=null}const Ue=g=>g.match(/^(\s*)> /)!=null,Ve=g=>g.split(/[\r\n]/),Je=g=>g.split(/[\r\n]/).length,pe=(g,t)=>{const w=t.split(/[\r\n]/);let y=0;for(let N=0;N<w.length;N++)if(y+=w[N].length+1,y>g)return[g-(y-w[N].length-1),N];throw new Error("error getPos")},Ge=(g,t)=>{const w=pe(g,t),y=Je(t);return w[1]===y-1},ze=(g,t)=>pe(g,t)[1]===0,ke=g=>{const t=g.match(/^\s*`{3}(.*)/),w=Ve(g).slice(1).join(`
`);return[t==null?void 0:t[1],w]},Te=g=>{const t=g.match(/^(\s*-)( .*)$/);let w="";if(t)g=t[2],w=t[1];else{const y=g.match(/^(\s*)(```.*|> )/);y&&(w=y[1],g=g.slice(y[1].length))}return[w,g]},Ce=b.forwardRef(function(t,w){const[y,N]=b.useState({prefix:"",selection:"",suffix:""}),U=()=>{N({prefix:"",selection:"",suffix:""})},[J,W]=b.useState({index:0}),f=(d,m)=>{let S=0,D="",B=!1;for(let n=0;n<d.length;n++){const l=d[n];l==="["?(S++,D=""):l==="]"?(S>0&&(S--,D="",B=!0),S===0&&(B=!1)):S>0&&!B&&(D+=l)}let i="";if(S>0){let n=0,l=!1;for(let o=0;o<m.length;o++){const h=m[o];h==="["?n++:h==="]"?(n--,l=!0):l||(i+=h)}return n===0&&(i=""),D+i}return""},_=d=>{let m=d.length-1;for(let S=d.length-1;S>=0;S--)if(d[S]==="["){m=S;break}return d.slice(0,-(d.length-1-m))},R=d=>{let m=0;for(let S=0;S<d.length;S++)if(d[S]==="]"){m=S;break}return d.slice(m)},F=f(y.prefix,y.suffix);b.useEffect(()=>{!I.current||!H.current||(I.current.style.display="inline",y.selection===""&&F===""?H.current.style.display="none":H.current.style.display="inline",H.current.style.left=I.current.getBoundingClientRect().width+"px",H.current.style.top=I.current.getBoundingClientRect().height+"px",I.current.style.display="none")},[y,F]),b.useEffect(()=>{W({index:0})},[t.value]);const K=function(d){N({prefix:d.currentTarget.value.slice(0,d.currentTarget.selectionStart),selection:d.currentTarget.value.slice(d.currentTarget.selectionStart,d.currentTarget.selectionEnd),suffix:d.currentTarget.value.slice(d.currentTarget.selectionEnd)})};let Y=t.popupHandlers,A=!1;y.selection===""&&F!==""&&(Y=t.keywords.map(d=>d.value).filter(d=>d.indexOf(F)!=-1).map((d,m)=>({name:d,handler:()=>{const S=_(y.prefix),D=Y[m].name;let B=R(y.suffix),i=(S+D).length;return(B.length==0||B[0]!="]")&&(B="]"+B,i+=1),{value:S+D+B,column:i}}})),Y.length>0&&(A=!0));const I=b.useRef(null),H=b.useRef(null);return E.jsxs("div",{className:t.className+" container",style:{position:"relative"},children:[E.jsx("textarea",{ref:w,value:t.value,onPaste:t.onPaste,onCompositionStart:t.onCompositionStart,onCompositionEnd:d=>{t.onCompositionEnd(d),K(d)},onChange:t.onChange,onKeyDown:d=>{if(d.key==="Enter"&&d.keyCode===13&&A){const m=Y[J.index].handler(null);t.setLine(m.value),t.setCursor(m.column),d.preventDefault()}else d.key=="Tab"&&A?(W(m=>{let S=m.index+1;return S>=Y.length&&(S=0),{index:S}}),d.preventDefault()):d.key=="Enter"&&d.shiftKey?(t.onMagicFunc(),d.preventDefault()):t.onKeyDown(y)(d)},onSelect:K}),E.jsx("div",{className:"popup",ref:H,children:Y.map((d,m)=>E.jsx("div",{className:J.index==m?"selected":"",onClick:()=>{const S=d.handler(y);t.setLine(S.value),t.setCursor(S.column),U()},children:d.name},m))}),E.jsx("span",{className:"menu-pos",style:{display:"none"},ref:I,children:y.prefix.replace(" "," ")})]})}),Xe=(g,t=null)=>{const w=b.useRef(t);return b.useEffect(()=>{g&&(typeof g=="function"?g(w.current):g.current=w.current)},[g]),w},Ze=b.forwardRef(function(t,w){const y=Xe(w),[N,U]=b.useState();b.useEffect(()=>{if(!y.current)return;const i=y.current.style.display;y.current.style.display="block",y.current.style.height="0px",y.current.style.height=y.current.scrollHeight+"px",y.current.style.display=i},[t.value,y,t.isFocus]);const J=(i,n,l)=>{var a;const o=["line"],h=i.match(/^(\s*)- /);if(i.indexOf("# ")===0)o.push("h1-style");else if(i.indexOf("## ")===0)o.push("h2-style");else if(i.indexOf("### ")===0)o.push("h3-style");else if(h)o.push("list-style"),o.push("list-indent-"+h[1].length/2);else if(G(i)){const u=G(i,!0);o.push("list-indent-"+(((a=u==null?void 0:u[1])==null?void 0:a.length)??0)/2)}return n&&o.push("focus"),l&&o.push("select"),o.join(" ")},W=i=>i?[]:["hide"],f=i=>i?"hide":"",_=(i,n,l)=>{let o=-1,h="";return n.forEach(function(a){const u=i.indexOf(a,l);u!==-1&&(o===-1||o>u)&&(o=u,h=a)}),{pos:o,target:h}},R=t.onLinkClick,F=t.onSubLinkClick,K=b.useCallback(i=>{let n=0;const l=[];for(;;){const o=_(i,["http://","https://"," ","["],n);if(o.target==="https://"||o.target==="http://"){n!==o.pos&&l.push(i.slice(n,o.pos));const h=_(i,[" ","\r",`
`],o.pos+o.target.length);if(h.pos!==-1){const a=i.slice(o.pos,h.pos);l.push(E.jsx("a",{href:a,children:a},n)),n=h.pos}else{const a=i.slice(o.pos,i.length);l.push(E.jsx("a",{href:a,children:a},n)),n=i.length;break}}else if(o.target==" ")l.push(i.slice(n,o.pos)),l.push(" "),n=o.pos+o.target.length;else if(o.target=="["){n!==o.pos&&(l.push(i.slice(n,o.pos)),n=o.pos);const h=_(i,["]"],o.pos+o.target.length);if(h.pos!==-1){const a=i.slice(o.pos,h.pos+1),u=a.slice(1,a.length-1),k=t.keywords.find(c=>c.value==u);console.log("K",u,t.keywords,k);let T=" unknown";k&&(T=" "+k.style),l.push([E.jsxs("span",{children:[E.jsxs("span",{className:"braket"+T,onClick:c=>{R(u),c.stopPropagation()},children:[E.jsx("span",{className:"invisible",children:"["}),u,E.jsx("span",{className:"invisible",children:"]"})]}),E.jsx("span",{className:"bracket-icon",onClick:c=>{F(u),c.stopPropagation()},children:"[]"})]},n)]),n=h.pos+1}else l.push(i.slice(n,i.length)),n=i.length}else{l.push(i.slice(n,i.length)),n=i.length;break}}return l},[R,F,t.keywords]),Y=b.useCallback((i,n)=>{const l=i?t.blockStyles[i]:void 0;return l?l(n,U):E.jsxs(E.Fragment,{children:[E.jsx("span",{className:"block-type",children:i}),E.jsx("pre",{children:n})]})},[t.blockStyles]),A=b.useCallback(i=>{const n=i.match(/^(\s*)```.*/),l=(n==null?void 0:n[1])??"";return i=i.slice(l.length).split(`
`).map(o=>l+o).join(`
`),i},[]),I=b.useCallback(i=>{const n=i.match(/^(\s*)> /),l=(n==null?void 0:n[1])??"";return i=i.slice(l.length).split(`
`).map((o,h)=>l+(h===0?"":"> ")+o).join(`
`),i},[]),H=b.useCallback(i=>{var n;if(console.log(i),G(i))if(Ue(i)){const l=i.match(/\s*> /),o=i.slice((n=l==null?void 0:l[0])==null?void 0:n.length);U(E.jsxs("div",{children:[E.jsx("pre",{className:"for-copy",children:I(i)}),E.jsx("div",{className:"no-select",children:Y("pre",o)})]}));return}else{const l=ke(i),o=Y(l[0],l[1]);U(E.jsxs("div",{children:[E.jsx("pre",{className:"for-copy",children:A(i+"\n```")}),E.jsx("div",{className:"no-select",children:o})]}));return}else{const l=["elm"],o=i.match(/^(\s*)-( .*)$/);let h=null;i.indexOf("# ")===0||i.indexOf("## ")===0||i.indexOf("### ")===0||o&&(i=o[2],h=E.jsx("pre",{className:"for-copy-inline",children:o[1]+"-"})),U(E.jsxs("div",{className:l.join(" "),children:[h,K(i)]}));return}},[A,I,Y,K]),d=b.useRef(null),m=i=>n=>{if(n.buttons!==0&&d.current){i();const l=new Range;l.selectNodeContents(d.current);const o=document.getSelection();if(!o)throw new Error("selection is null");o.empty(),o.addRange(l)}},S=Te(t.value),D=S[0],B=S[1];return b.useEffect(()=>{H(t.value)},[H,t.value]),G(B)?E.jsxs("div",{className:J(t.value,t.isFocus,t.isSelect),ref:d,"data-lineno":t.row,onClick:t.onClick,children:[E.jsx("div",{className:["line-item"].concat(W(t.isFocus)).join(" "),onMouseLeave:m(t.selectThisLine),children:E.jsx(Ce,{ref:y,value:B,keywords:t.keywords,setLine:t.setLine(D),setCursor:t.setCursor,onCompositionStart:t.onCompositionStart,onCompositionEnd:t.onCompositionEnd,onChange:t.onChange(D),popupHandlers:[],onMagicFunc:()=>{},onKeyDown:()=>t.onKeyDown(D,B)})}),E.jsx("div",{className:"line-item",children:N})]}):E.jsxs("div",{className:J(t.value,t.isFocus,t.isSelect),ref:d,"data-lineno":t.row,onClick:t.onClick,children:[E.jsx("div",{className:W(t.isFocus)+" container",onMouseLeave:m(t.selectThisLine),children:E.jsx(Ce,{ref:y,value:B,keywords:t.keywords,setLine:t.setLine(D),setCursor:t.setCursor,onPaste:t.onPaste(t.row),onCompositionStart:t.onCompositionStart,onCompositionEnd:t.onCompositionEnd,onChange:t.onChange(D),popupHandlers:t.textPopupHandlers,onMagicFunc:t.onMagicFunc,onKeyDown:i=>n=>{n.key==="Enter"&&n.keyCode===13&&i.selection!==""?n.preventDefault():t.onKeyDown(D,B)(n)}})}),E.jsx("div",{className:f(t.isFocus),children:N})]})}),Qe=g=>{const t=g.lines,w=g.setLines;let y=0;t.forEach(n=>{n.key>y&&(y=n.key)});const N=b.useRef(y);b.useEffect(()=>{let n=0;t.forEach(l=>{l.key>n&&(n=l.key)}),N.current=n},[t]);const U=()=>(N.current=N.current+1,N.current),J=g.onChange;b.useEffect(()=>{J(t.map(n=>n.body))},[t,J]);const W=b.useRef(!1),[f,_]=b.useState({row:0,col:0,colEnd:-1,direction:"none"}),[R,F]=b.useState([0,0]),K=n=>n==null?null:n instanceof HTMLElement&&n.classList.contains("line")?n:K(n.parentElement),Y=b.useRef(null);let A,I,H=!1;const d=()=>{H=!0;const n=document.getSelection();n&&(A=K(n.anchorNode),I=K(n.focusNode),(A==null?void 0:A.parentNode)!=Y.current&&(A=null,I=null),A!==I&&_({row:-1,col:0}))},m=()=>{var n,l,o,h;if(H&&(H=!1,A&&I&&A!==I)){const a=new Range;if(a.setStart(A,0),a.setEnd(I,I.children.length),document.getSelection().empty(),document.getSelection().addRange(a),!((n=A.dataset)!=null&&n.lineno))throw new Error("fromLine.dataset?.lineno is undefined");const u=parseInt((l=A.dataset)==null?void 0:l.lineno);if(!((o=I.dataset)!=null&&o.lineno))throw new Error("toLine.dataset?.lineno is undefined");const k=parseInt((h=I.dataset)==null?void 0:h.lineno);F([u,k])}},S=()=>()=>{_(()=>({row:-1,col:0})),H=!0},D=b.useRef(null);b.useEffect(()=>{var n;if(D.current)if(R[1]-R[0]>=1){D.current.style.display="block";const l=(n=document.getSelection())==null?void 0:n.focusNode;if(!l)throw new Error("focusNode is null");if(!(l instanceof Element))throw new Error("focusNode is not Element");const o=l.getBoundingClientRect(),h=o.bottom,a=o.x+o.width/2;D.current.style.left=a+"px",D.current.style.top=h+"px"}else D.current.style.display="none"},[R]);const B=n=>l=>{const h=l.clipboardData.getData("text").split(/\r\n|\n/);if(h.length===1)return!0;const a=[];let u=[],k=!1,T="";return h.forEach(c=>{const O=c.match(/^(\s*)(```.*)/);k?c.indexOf(T+"```")===0?(a.push(u.join(`
`)),k=!1,u=[]):(T!==""&&c.indexOf(T)!==0&&(a.push(u.join(`
`)),k=!1,u=[],a.push(c)),u.push(c.slice(T.length))):O?(k=!0,T=O[1],u.push(c)):a.push(c)}),u.length!==0&&a.push(u.join(`
`)),w(c=>(c[n]={body:c[n].body+a[0],key:c[n].key},c.splice(n+1,0,...a.slice(1).map(O=>({body:O,key:U()}))),[...c])),l.preventDefault(),!1};b.useEffect(()=>{document.addEventListener("selectionchange",d),document.addEventListener("pointerup",m)},[]);const i=b.useRef([]);return b.useEffect(()=>{if(f.row!==-1&&W.current===!1){const n=i.current[f.row];if(!n||!n.current)return;n.current.focus();let l=f.colEnd;(l===void 0||l===-1)&&(l=f.col),console.log("EFFECT","col:",f.col,"end:",l),n.current.setSelectionRange(f.col,l,f.direction)}},[f,t]),t.forEach((n,l)=>{i.current[l]=b.createRef()}),E.jsxs("div",{className:"editor",ref:Y,children:[t.map((n,l)=>E.jsx(Ze,{key_debug:n.key,ref:i.current[l],isFocus:l===f.row,isSelect:R[0]<=l&&l<=R[1],row:l,value:n.body,textPopupHandlers:g.textPopupHandlers,onMagicFunc:g.onMagicFunc(l),keywords:g.keywords,blockStyles:g.blockStyles,selectThisLine:S(),setLine:o=>h=>(a=>{w(u=>(u[a].body=o+h,[...u]))})(l),setCursor:o=>(h=>{_(a=>({row:h,col:o,colEnd:-1,direction:a.direction}))})(l),onPaste:B,onCompositionStart:()=>{W.current=!0,console.log("composition start")},onCompositionEnd:()=>{W.current=!1,console.log("composition end")},onChange:o=>h=>(a=>{if(console.log("onChange",W.current),W.current===!1){const u=h.target.selectionStart,k=h.target.selectionEnd,T=h.target.selectionDirection;_(c=>({row:c.row,col:u,colEnd:k,direction:T}))}w(u=>(u[a].body=o+h.target.value,[...u]))})(l),onKeyDown:(o,h)=>a=>{let u=a.currentTarget.selectionStart,k=a.currentTarget.selectionEnd,T=a.currentTarget.selectionDirection;switch(a.key){case"ArrowLeft":{if(a.currentTarget!=null&&a.currentTarget.selectionStart===0&&a.currentTarget.selectionEnd===0){a.preventDefault(),_(c=>{if(c.row===0)return c;const O=t[f.row-1].body.length;return{row:c.row-1,col:O,colEnd:-1,direction:T}});break}a.shiftKey?u==k?(u--,T="backward"):T==="forward"?k--:T==="backward"&&u--:(u--,k=-1),a.preventDefault(),_(c=>({row:c.row,col:u,colEnd:k,direction:T}));break}case"ArrowRight":{const c=-o.length+t[f.row].body.length;if(a.currentTarget!=null&&a.currentTarget.selectionStart===c&&a.currentTarget.selectionEnd===c){_(O=>O.row===t.length-1?O:(a.preventDefault(),{row:O.row+1,col:0,colEnd:-1,direction:T}));break}a.shiftKey?T==="forward"?k++:T==="backward"&&u++:(u<k&&(u=k),u++,k=-1),a.preventDefault(),_(O=>({row:O.row,col:u,colEnd:k,direction:T}));break}case"ArrowUp":G(h)&&a.currentTarget!=null&&!ze(a.currentTarget.selectionStart,h)||(a.preventDefault(),_(c=>c.row===0||a.currentTarget==null?c:{row:c.row-1,col:a.currentTarget.selectionStart,colEnd:-1,direction:T}));break;case"ArrowDown":G(h)&&a.currentTarget!=null&&!Ge(a.currentTarget.selectionStart,h)||_(c=>c.row===t.length-1||a.currentTarget==null?c:(a.preventDefault(),{row:c.row+1,col:a.currentTarget.selectionStart,colEnd:-1,direction:T}));break;case"Backspace":if(!a.currentTarget)return;if(o.length!==0&&(a.currentTarget.selectionStart===0&&a.currentTarget.selectionEnd===0||a.currentTarget.selectionStart===1&&a.currentTarget.selectionEnd===1))o.length!==0&&(w(c=>(o.length===1?(c[f.row].body=a.currentTarget.value.slice(1),u--,u===-1?u++:u===0&&k!==0&&(k=0)):o.length>0&&(c[f.row].body=o.slice(2)+a.currentTarget.value),[...c])),a.preventDefault());else if(a.currentTarget!=null&&a.currentTarget.selectionStart===0&&a.currentTarget.selectionEnd===0){if(f.row===0)break;const O=Te(t[f.row-1].body)[1].length;w(j=>(G(j[f.row-1].body)?j[f.row-1].body+=`
`+j[f.row].body:j[f.row-1].body+=j[f.row].body,j.splice(f.row,1),[...j])),_(j=>({row:j.row-1,col:O,colEnd:-1,direction:T})),a.preventDefault();break}_(c=>({row:c.row,col:u,colEnd:k,direction:T}));break;case"Tab":w(c=>{if(!a.currentTarget)return c;if(a.shiftKey)o.length===1?(c[f.row].body=a.currentTarget.value.slice(1),u--):o.length>0&&(c[f.row].body=o.slice(2)+a.currentTarget.value);else{let O="-";G(a.currentTarget.value)&&(O=" "),o.length===0?(c[f.row].body=O+" "+a.currentTarget.value,u++):c[f.row].body="  "+o+a.currentTarget.value}return[...c]}),a.preventDefault(),_(c=>({row:c.row,col:u,colEnd:-1,direction:T}));break;case"Enter":if(a.keyCode===13){if(G(h)&&!a.shiftKey)break;{if(a.currentTarget==null||a.currentTarget.selectionStart===void 0){a.preventDefault();break}let c=0;const O=a.currentTarget.selectionStart;w(j=>{const q=o.length+O;let Z=j[f.row].body.slice(q);if(G(h)){const re=j[f.row].body;re[re.length-1]===`
`?j[f.row].body=j[f.row].body.slice(0,q-1):j[f.row].body=j[f.row].body.slice(0,q),Z.length>0&&Z[0]===`
`&&(Z=Z.slice(1))}else j[f.row].body=j[f.row].body.slice(0,q);return o.length!==0?(j.splice(f.row+1,0,{body:o+" "+Z,key:U()}),c=1):j.splice(f.row+1,0,{body:Z,key:U()}),[...j]}),a.preventDefault(),_(j=>({row:j.row+1,col:c,colEnd:-1,direction:T}))}}else break;break;case" ":console.log("space",u),(u===0||u===1&&o.length>=1)&&(w(c=>{if(!a.currentTarget)return c;let O="-";return G(a.currentTarget.value)&&(O=" "),o.length===0?(c[f.row].body=O+" "+a.currentTarget.value,u++):c[f.row].body="  "+o+a.currentTarget.value,[...c]}),a.preventDefault()),_(c=>({row:c.row,col:u,colEnd:-1,direction:T}));break}},onLinkClick:g.onLinkClick,onSubLinkClick:g.onSubLinkClick,onClick:o=>{if(f.row!==l){const h=o.target.selectionStart;F([l,l]),_(()=>({row:l,col:h}))}}},n.key)),E.jsx("div",{className:"popup",ref:D,children:g.linePopupHandlers.map((n,l)=>E.jsx("div",{onClick:()=>{globalThis.ontouchstart!==null&&(n.handler(t.slice(R[0],R[1]+1).map(o=>o.body),R),F([R[1],R[1]]))},onTouchStart:()=>{n.handler(t.slice(R[0],R[1]+1).map(o=>o.body)),F([R[1],R[1]])},children:n.name},l))})]})};X.Editor=Qe,X.isBlock=G,X.parseBlock=ke,Object.defineProperty(X,Symbol.toStringTag,{value:"Module"})});
