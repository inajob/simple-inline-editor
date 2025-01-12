import Te, { useState as se, useEffect as G, useRef as X, forwardRef as wt, useCallback as ae, createRef as pt } from "react";
var ke = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Et() {
  if (Be) return ie;
  Be = 1;
  var g = Te, t = Symbol.for("react.element"), b = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, F = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(M, f, x) {
    var C, D = {}, B = null, $ = null;
    x !== void 0 && (B = "" + x), f.key !== void 0 && (B = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (C in f) y.call(f, C) && !Y.hasOwnProperty(C) && (D[C] = f[C]);
    if (M && M.defaultProps) for (C in f = M.defaultProps, f) D[C] === void 0 && (D[C] = f[C]);
    return { $$typeof: t, type: M, key: B, ref: $, props: D, _owner: F.current };
  }
  return ie.Fragment = b, ie.jsx = U, ie.jsxs = U, ie;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function kt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Te, t = Symbol.for("react.element"), b = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), M = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), N = Symbol.iterator, A = "@@iterator";
    function K(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = N && e[N] || e[A];
      return typeof a == "function" ? a : null;
    }
    var d = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), v = 1; v < a; v++)
          s[v - 1] = arguments[v];
        R("error", e, s);
      }
    }
    function R(e, a, s) {
      {
        var v = d.ReactDebugCurrentFrame, S = v.getStackAddendum();
        S !== "" && (a += "%s", s = s.concat([S]));
        var j = s.map(function(T) {
          return String(T);
        });
        j.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var O = !1, W = !1, l = !1, o = !1, i = !1, n;
    n = Symbol.for("react.module.reference");
    function h(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === Y || i || e === F || e === x || e === C || o || e === $ || O || W || l || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === D || e.$$typeof === U || e.$$typeof === M || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === n || e.getModuleId !== void 0));
    }
    function r(e, a, s) {
      var v = e.displayName;
      if (v)
        return v;
      var S = a.displayName || a.name || "";
      return S !== "" ? s + "(" + S + ")" : s;
    }
    function u(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case b:
          return "Portal";
        case Y:
          return "Profiler";
        case F:
          return "StrictMode";
        case x:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            var a = e;
            return u(a) + ".Consumer";
          case U:
            var s = e;
            return u(s._context) + ".Provider";
          case f:
            return r(e, e.render, "ForwardRef");
          case D:
            var v = e.displayName || null;
            return v !== null ? v : w(e.type) || "Memo";
          case B: {
            var S = e, j = S._payload, T = S._init;
            try {
              return w(T(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, c = 0, P, _, Z, z, re, Ce, Re;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ve() {
      {
        if (c === 0) {
          P = console.log, _ = console.info, Z = console.warn, z = console.error, re = console.group, Ce = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        c++;
      }
    }
    function qe() {
      {
        if (c--, c === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: P
            }),
            info: k({}, e, {
              value: _
            }),
            warn: k({}, e, {
              value: Z
            }),
            error: k({}, e, {
              value: z
            }),
            group: k({}, e, {
              value: re
            }),
            groupCollapsed: k({}, e, {
              value: Ce
            }),
            groupEnd: k({}, e, {
              value: Re
            })
          });
        }
        c < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = d.ReactCurrentDispatcher, ge;
    function ce(e, a, s) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (S) {
            var v = S.stack.trim().match(/\n( *(at )?)/);
            ge = v && v[1] || "";
          }
        return `
` + ge + e;
      }
    }
    var ve = !1, ue;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new Je();
    }
    function xe(e, a) {
      if (!e || ve)
        return "";
      {
        var s = ue.get(e);
        if (s !== void 0)
          return s;
      }
      var v;
      ve = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = he.current, he.current = null, Ve();
      try {
        if (a) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (V) {
              v = V;
            }
            Reflect.construct(e, [], T);
          } else {
            try {
              T.call();
            } catch (V) {
              v = V;
            }
            e.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            v = V;
          }
          e();
        }
      } catch (V) {
        if (V && v && typeof V.stack == "string") {
          for (var p = V.stack.split(`
`), H = v.stack.split(`
`), L = p.length - 1, I = H.length - 1; L >= 1 && I >= 0 && p[L] !== H[I]; )
            I--;
          for (; L >= 1 && I >= 0; L--, I--)
            if (p[L] !== H[I]) {
              if (L !== 1 || I !== 1)
                do
                  if (L--, I--, I < 0 || p[L] !== H[I]) {
                    var q = `
` + p[L].replace(" at new ", " at ");
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && ue.set(e, q), q;
                  }
                while (L >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        ve = !1, he.current = j, qe(), Error.prepareStackTrace = S;
      }
      var te = e ? e.displayName || e.name : "", Q = te ? ce(te) : "";
      return typeof e == "function" && ue.set(e, Q), Q;
    }
    function Ge(e, a, s) {
      return xe(e, !1);
    }
    function ze(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function fe(e, a, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, ze(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case x:
          return ce("Suspense");
        case C:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ge(e.render);
          case D:
            return fe(e.type, a, s);
          case B: {
            var v = e, S = v._payload, j = v._init;
            try {
              return fe(j(S), a, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, _e = {}, je = d.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var a = e._owner, s = fe(e.type, e._source, a ? a.type : null);
        je.setExtraStackFrame(s);
      } else
        je.setExtraStackFrame(null);
    }
    function Xe(e, a, s, v, S) {
      {
        var j = Function.call.bind(ne);
        for (var T in e)
          if (j(e, T)) {
            var p = void 0;
            try {
              if (typeof e[T] != "function") {
                var H = Error((v || "React class") + ": " + s + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw H.name = "Invariant Violation", H;
              }
              p = e[T](a, T, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              p = L;
            }
            p && !(p instanceof Error) && (de(S), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, T, typeof p), de(null)), p instanceof Error && !(p.message in _e) && (_e[p.message] = !0, de(S), m("Failed %s type: %s", s, p.message), de(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ye(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, s = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function et(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function Oe(e) {
      if (et(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Pe(e);
    }
    var oe = d.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Fe, me;
    me = {};
    function rt(e) {
      if (ne.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nt(e) {
      if (ne.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ot(e, a) {
      if (typeof e.ref == "string" && oe.current && a && oe.current.stateNode !== a) {
        var s = w(oe.current.type);
        me[s] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(oe.current.type), e.ref), me[s] = !0);
      }
    }
    function at(e, a) {
      {
        var s = function() {
          De || (De = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function it(e, a) {
      {
        var s = function() {
          Fe || (Fe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var lt = function(e, a, s, v, S, j, T) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: s,
        props: T,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function st(e, a, s, v, S) {
      {
        var j, T = {}, p = null, H = null;
        s !== void 0 && (Oe(s), p = "" + s), nt(a) && (Oe(a.key), p = "" + a.key), rt(a) && (H = a.ref, ot(a, S));
        for (j in a)
          ne.call(a, j) && !tt.hasOwnProperty(j) && (T[j] = a[j]);
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (j in L)
            T[j] === void 0 && (T[j] = L[j]);
        }
        if (p || H) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && at(T, I), H && it(T, I);
        }
        return lt(e, p, H, S, v, oe.current, T);
      }
    }
    var be = d.ReactCurrentOwner, Ne = d.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var a = e._owner, s = fe(e.type, e._source, a ? a.type : null);
        Ne.setExtraStackFrame(s);
      } else
        Ne.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ae() {
      {
        if (be.current) {
          var e = w(be.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ct(e) {
      return "";
    }
    var Le = {};
    function ut(e) {
      {
        var a = Ae();
        if (!a) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (a = `

Check the top-level render call using <` + s + ">.");
        }
        return a;
      }
    }
    function Ie(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = ut(a);
        if (Le[s])
          return;
        Le[s] = !0;
        var v = "";
        e && e._owner && e._owner !== be.current && (v = " It was passed a child from " + w(e._owner.type) + "."), ee(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), ee(null);
      }
    }
    function Me(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var v = e[s];
            pe(v) && Ie(v, a);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var S = K(e);
          if (typeof S == "function" && S !== e.entries)
            for (var j = S.call(e), T; !(T = j.next()).done; )
              pe(T.value) && Ie(T.value, a);
        }
      }
    }
    function ft(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var s;
        if (typeof a == "function")
          s = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === D))
          s = a.propTypes;
        else
          return;
        if (s) {
          var v = w(a);
          Xe(s, e.props, "prop", v, e);
        } else if (a.PropTypes !== void 0 && !we) {
          we = !0;
          var S = w(a);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var a = Object.keys(e.props), s = 0; s < a.length; s++) {
          var v = a[s];
          if (v !== "children" && v !== "key") {
            ee(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var We = {};
    function $e(e, a, s, v, S, j) {
      {
        var T = h(e);
        if (!T) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var H = ct();
          H ? p += H : p += Ae();
          var L;
          e === null ? L = "null" : ye(e) ? L = "array" : e !== void 0 && e.$$typeof === t ? (L = "<" + (w(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : L = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, p);
        }
        var I = st(e, a, s, S, j);
        if (I == null)
          return I;
        if (T) {
          var q = a.children;
          if (q !== void 0)
            if (v)
              if (ye(q)) {
                for (var te = 0; te < q.length; te++)
                  Me(q[te], e);
                Object.freeze && Object.freeze(q);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(q, e);
        }
        if (ne.call(a, "key")) {
          var Q = w(e), V = Object.keys(a).filter(function(bt) {
            return bt !== "key";
          }), Ee = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[Q + Ee]) {
            var mt = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, Q, mt, Q), We[Q + Ee] = !0;
          }
        }
        return e === y ? dt(I) : ft(I), I;
      }
    }
    function ht(e, a, s) {
      return $e(e, a, s, !0);
    }
    function gt(e, a, s) {
      return $e(e, a, s, !1);
    }
    var vt = gt, yt = ht;
    le.Fragment = y, le.jsx = vt, le.jsxs = yt;
  }()), le;
}
process.env.NODE_ENV === "production" ? ke.exports = Et() : ke.exports = kt();
var E = ke.exports;
function J(g, t) {
  const b = g.match(/^(\s*)(```|> )/);
  return t === !0 ? b : b != null;
}
const Tt = (g) => g.match(/^(\s*)> /) != null, Ct = (g) => g.split(/[\r\n]/), Rt = (g) => g.split(/[\r\n]/).length, He = (g, t) => {
  const b = t.split(/[\r\n]/);
  let y = 0;
  for (let F = 0; F < b.length; F++)
    if (y += b[F].length + 1, y > g)
      return [g - (y - b[F].length - 1), F];
  throw new Error("error getPos");
}, St = (g, t) => {
  const b = He(g, t), y = Rt(t);
  return b[1] === y - 1;
}, xt = (g, t) => He(g, t)[1] === 0, _t = (g) => {
  const t = g.match(/^\s*`{3}(.*)/), b = Ct(g).slice(1).join(`
`);
  return [t == null ? void 0 : t[1], b];
}, Ue = (g) => {
  const t = g.match(/^(\s*-)( .*)$/);
  let b = "";
  if (t)
    g = t[2], b = t[1];
  else {
    const y = g.match(/^(\s*)(```.*|> )/);
    y && (b = y[1], g = g.slice(y[1].length));
  }
  return [b, g];
}, Ye = Te.forwardRef(
  function(t, b) {
    const [y, F] = se({
      prefix: "",
      selection: "",
      suffix: ""
    }), Y = () => {
      F({ prefix: "", selection: "", suffix: "" });
    }, [U, M] = se({
      index: 0
    }), f = (d, m) => {
      let R = 0, O = "", W = !1;
      for (let o = 0; o < d.length; o++) {
        const i = d[o];
        i === "[" ? (R++, O = "") : i === "]" ? (R > 0 && (R--, O = "", W = !0), R === 0 && (W = !1)) : R > 0 && !W && (O += i);
      }
      let l = "";
      if (R > 0) {
        let o = 0, i = !1;
        for (let n = 0; n < m.length; n++) {
          const h = m[n];
          h === "[" ? o++ : h === "]" ? (o--, i = !0) : i || (l += h);
        }
        return o === 0 && (l = ""), O + l;
      }
      return "";
    }, x = (d) => {
      let m = d.length - 1;
      for (let R = d.length - 1; R >= 0; R--)
        if (d[R] === "[") {
          m = R;
          break;
        }
      return d.slice(0, -(d.length - 1 - m));
    }, C = (d) => {
      let m = 0;
      for (let R = 0; R < d.length; R++)
        if (d[R] === "]") {
          m = R;
          break;
        }
      return d.slice(m);
    }, D = f(y.prefix, y.suffix);
    G(() => {
      !A.current || !K.current || (A.current.style.display = "inline", y.selection === "" && D === "" ? K.current.style.display = "none" : K.current.style.display = "inline", K.current.style.left = A.current.getBoundingClientRect().width + "px", K.current.style.top = A.current.getBoundingClientRect().height + "px", A.current.style.display = "none");
    }, [y, D]), G(() => {
      M({ index: 0 });
    }, [t.value]);
    const B = function(d) {
      F({
        prefix: d.currentTarget.value.slice(
          0,
          d.currentTarget.selectionStart
        ),
        selection: d.currentTarget.value.slice(
          d.currentTarget.selectionStart,
          d.currentTarget.selectionEnd
        ),
        suffix: d.currentTarget.value.slice(d.currentTarget.selectionEnd)
      });
    };
    let $ = t.popupHandlers, N = !1;
    y.selection === "" && D !== "" && ($ = t.keywords.map((d) => d.value).filter((d) => d.toLowerCase().indexOf(D.toLowerCase()) != -1).map((d, m) => ({
      name: d,
      handler: () => {
        const R = x(y.prefix), O = $[m].name;
        let W = C(y.suffix), l = (R + O).length;
        return (W.length == 0 || W[0] != "]") && (W = "]" + W, l += 1), {
          value: R + O + W,
          column: l
        };
      }
    })), $.length > 0 && (N = !0));
    const A = X(null), K = X(null);
    return /* @__PURE__ */ E.jsxs(
      "div",
      {
        className: t.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ E.jsx(
            "textarea",
            {
              ref: b,
              value: t.value,
              onPaste: t.onPaste,
              onCompositionStart: t.onCompositionStart,
              onCompositionEnd: (d) => {
                t.onCompositionEnd(d), B(d);
              },
              onChange: t.onChange,
              onKeyDown: (d) => {
                if (d.key === "Enter" && d.keyCode === 13 && N) {
                  const m = $[U.index].handler(null);
                  t.setLine(m.value), t.setCursor(m.column), d.preventDefault();
                } else d.key == "Tab" && N ? (M((m) => {
                  let R = m.index + 1;
                  return R >= $.length && (R = 0), { index: R };
                }), d.preventDefault()) : d.key == "Enter" && d.shiftKey ? (t.onMagicFunc(), d.preventDefault()) : t.onKeyDown(y)(d);
              },
              onSelect: B
            }
          ),
          /* @__PURE__ */ E.jsx("div", { className: "popup", ref: K, children: $.map((d, m) => /* @__PURE__ */ E.jsx(
            "div",
            {
              className: U.index == m ? "selected" : "",
              onClick: () => {
                const R = d.handler(y);
                t.setLine(R.value), t.setCursor(R.column), Y();
              },
              children: d.name
            },
            m
          )) }),
          /* @__PURE__ */ E.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: A, children: y.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), jt = (g, t = null) => {
  const b = X(t);
  return G(() => {
    g && (typeof g == "function" ? g(b.current) : g.current = b.current);
  }, [g]), b;
}, Pt = wt(
  function(t, b) {
    const y = jt(b), [F, Y] = se();
    G(() => {
      if (!y.current) return;
      const l = y.current.style.display;
      y.current.style.display = "block", y.current.style.height = "0px", y.current.style.height = y.current.scrollHeight + "px", y.current.style.display = l;
    }, [t.value, y, t.isFocus]);
    const U = (l, o, i) => {
      var r;
      const n = ["line"], h = l.match(/^(\s*)- /);
      if (l.indexOf("# ") === 0)
        n.push("h1-style");
      else if (l.indexOf("## ") === 0)
        n.push("h2-style");
      else if (l.indexOf("### ") === 0)
        n.push("h3-style");
      else if (h)
        n.push("list-style"), n.push("list-indent-" + h[1].length / 2);
      else if (J(l)) {
        const u = J(l, !0);
        n.push("list-indent-" + (((r = u == null ? void 0 : u[1]) == null ? void 0 : r.length) ?? 0) / 2);
      }
      return o && n.push("focus"), i && n.push("select"), n.join(" ");
    }, M = (l) => l ? [] : ["hide"], f = (l) => l ? "hide" : "", x = (l, o, i) => {
      let n = -1, h = "";
      return o.forEach(function(r) {
        const u = l.indexOf(r, i);
        u !== -1 && (n === -1 || n > u) && (n = u, h = r);
      }), { pos: n, target: h };
    }, C = t.onLinkClick, D = t.onSubLinkClick, B = ae((l) => {
      let o = 0;
      const i = [];
      for (; ; ) {
        const n = x(l, ["http://", "https://", " ", "["], o);
        if (n.target === "https://" || n.target === "http://") {
          o !== n.pos && i.push(l.slice(o, n.pos));
          const h = x(
            l,
            [" ", "\r", `
`],
            n.pos + n.target.length
          );
          if (h.pos !== -1) {
            const r = l.slice(n.pos, h.pos);
            i.push(/* @__PURE__ */ E.jsx("a", { href: r, children: r }, o)), o = h.pos;
          } else {
            const r = l.slice(n.pos, l.length);
            i.push(/* @__PURE__ */ E.jsx("a", { href: r, children: r }, o)), o = l.length;
            break;
          }
        } else if (n.target == " ")
          i.push(l.slice(o, n.pos)), i.push(" "), o = n.pos + n.target.length;
        else if (n.target == "[") {
          o !== n.pos && (i.push(l.slice(o, n.pos)), o = n.pos);
          const h = x(l, ["]"], n.pos + n.target.length);
          if (h.pos !== -1) {
            const r = l.slice(n.pos, h.pos + 1), u = r.slice(1, r.length - 1), w = t.keywords.find((c) => c.value == u);
            console.log("K", u, t.keywords, w);
            let k = " unknown";
            w && (k = " " + w.style), i.push([/* @__PURE__ */ E.jsxs("span", { children: [
              /* @__PURE__ */ E.jsxs("span", { className: "braket" + k, onClick: (c) => {
                C(u), c.stopPropagation();
              }, children: [
                /* @__PURE__ */ E.jsx("span", { className: "invisible", children: "[" }),
                u,
                /* @__PURE__ */ E.jsx("span", { className: "invisible", children: "]" })
              ] }),
              /* @__PURE__ */ E.jsx("span", { className: "bracket-icon", onClick: (c) => {
                D(u), c.stopPropagation();
              }, children: "[]" })
            ] }, o)]), o = h.pos + 1;
          } else
            i.push(l.slice(o, l.length)), o = l.length;
        } else {
          i.push(l.slice(o, l.length)), o = l.length;
          break;
        }
      }
      return i;
    }, [C, D, t.keywords]), $ = ae((l, o) => {
      const i = l ? t.blockStyles[l] : void 0;
      return i ? i(o, Y) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        /* @__PURE__ */ E.jsx("span", { className: "block-type", children: l }),
        /* @__PURE__ */ E.jsx("pre", { children: o })
      ] });
    }, [t.blockStyles]), N = ae((l) => {
      const o = l.match(/^(\s*)```.*/), i = (o == null ? void 0 : o[1]) ?? "";
      return l = l.slice(i.length).split(`
`).map((n) => i + n).join(`
`), l;
    }, []), A = ae((l) => {
      const o = l.match(/^(\s*)> /), i = (o == null ? void 0 : o[1]) ?? "";
      return l = l.slice(i.length).split(`
`).map(
        (n, h) => i + (h === 0 ? "" : "> ") + n
      ).join(`
`), l;
    }, []), K = ae((l) => {
      var o;
      if (console.log(l), J(l))
        if (Tt(l)) {
          const i = l.match(/\s*> /), n = l.slice((o = i == null ? void 0 : i[0]) == null ? void 0 : o.length);
          Y(
            /* @__PURE__ */ E.jsxs("div", { children: [
              /* @__PURE__ */ E.jsx("pre", { className: "for-copy", children: A(l) }),
              /* @__PURE__ */ E.jsx("div", { className: "no-select", children: $("pre", n) })
            ] })
          );
          return;
        } else {
          const i = _t(l), n = $(i[0], i[1]);
          Y(
            /* @__PURE__ */ E.jsxs("div", { children: [
              /* @__PURE__ */ E.jsx("pre", { className: "for-copy", children: N(l + "\n```") }),
              /* @__PURE__ */ E.jsx("div", { className: "no-select", children: n })
            ] })
          );
          return;
        }
      else {
        const i = ["elm"], n = l.match(/^(\s*)-( .*)$/);
        let h = null;
        l.indexOf("# ") === 0 || l.indexOf("## ") === 0 || l.indexOf("### ") === 0 || n && (l = n[2], h = /* @__PURE__ */ E.jsx("pre", { className: "for-copy-inline", children: n[1] + "-" })), Y(
          /* @__PURE__ */ E.jsxs("div", { className: i.join(" "), children: [
            h,
            B(l)
          ] })
        );
        return;
      }
    }, [N, A, $, B]), d = X(null), m = (l) => (o) => {
      if (o.buttons !== 0 && d.current) {
        l();
        const i = new Range();
        i.selectNodeContents(d.current);
        const n = document.getSelection();
        if (!n) throw new Error("selection is null");
        n.empty(), n.addRange(i);
      }
    }, R = Ue(t.value), O = R[0], W = R[1];
    return G(() => {
      K(t.value);
    }, [K, t.value]), J(W) ? /* @__PURE__ */ E.jsxs(
      "div",
      {
        className: U(t.value, t.isFocus, t.isSelect),
        ref: d,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ E.jsx(
            "div",
            {
              className: ["line-item"].concat(M(t.isFocus)).join(" "),
              onMouseLeave: m(t.selectThisLine),
              children: /* @__PURE__ */ E.jsx(
                Ye,
                {
                  ref: y,
                  value: W,
                  keywords: t.keywords,
                  setLine: t.setLine(O),
                  setCursor: t.setCursor,
                  onCompositionStart: t.onCompositionStart,
                  onCompositionEnd: t.onCompositionEnd,
                  onChange: t.onChange(O),
                  popupHandlers: [],
                  onMagicFunc: () => {
                  },
                  onKeyDown: () => t.onKeyDown(O, W)
                }
              )
            }
          ),
          /* @__PURE__ */ E.jsx("div", { className: "line-item", children: F })
        ]
      }
    ) : /* @__PURE__ */ E.jsxs(
      "div",
      {
        className: U(t.value, t.isFocus, t.isSelect),
        ref: d,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ E.jsx(
            "div",
            {
              className: M(t.isFocus) + " container",
              onMouseLeave: m(t.selectThisLine),
              children: /* @__PURE__ */ E.jsx(
                Ye,
                {
                  ref: y,
                  value: W,
                  keywords: t.keywords,
                  setLine: t.setLine(O),
                  setCursor: t.setCursor,
                  onPaste: t.onPaste(t.row),
                  onCompositionStart: t.onCompositionStart,
                  onCompositionEnd: t.onCompositionEnd,
                  onChange: t.onChange(O),
                  popupHandlers: t.textPopupHandlers,
                  onMagicFunc: t.onMagicFunc,
                  onKeyDown: (l) => (o) => {
                    o.key === "Enter" && o.keyCode === 13 && l.selection !== "" ? o.preventDefault() : t.onKeyDown(O, W)(o);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ E.jsx("div", { className: f(t.isFocus), children: F })
        ]
      }
    );
  }
), Dt = (g) => {
  const t = g.lines, b = g.setLines;
  let y = 0;
  t.forEach((o) => {
    o.key > y && (y = o.key);
  });
  const F = X(y);
  G(() => {
    let o = 0;
    t.forEach((i) => {
      i.key > o && (o = i.key);
    }), F.current = o;
  }, [t]);
  const Y = () => (F.current = F.current + 1, F.current), U = g.onChange;
  G(() => {
    U(t.map((o) => o.body));
  }, [t, U]);
  const M = X(!1), [f, x] = se({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [C, D] = se([0, 0]), B = (o) => o == null ? null : o instanceof HTMLElement && o.classList.contains("line") ? o : B(o.parentElement), $ = X(null);
  let N, A, K = !1;
  const d = () => {
    K = !0;
    const o = document.getSelection();
    o && (N = B(o.anchorNode), A = B(o.focusNode), (N == null ? void 0 : N.parentNode) != $.current && (N = null, A = null), N !== A && x({ row: -1, col: 0 }));
  }, m = () => {
    var o, i, n, h;
    if (K && (K = !1, N && A && N !== A)) {
      const r = new Range();
      if (r.setStart(N, 0), r.setEnd(A, A.children.length), document.getSelection().empty(), document.getSelection().addRange(r), !((o = N.dataset) != null && o.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const u = parseInt((i = N.dataset) == null ? void 0 : i.lineno);
      if (!((n = A.dataset) != null && n.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const w = parseInt((h = A.dataset) == null ? void 0 : h.lineno);
      D([u, w]);
    }
  }, R = () => () => {
    x(() => ({ row: -1, col: 0 })), K = !0;
  }, O = X(null);
  G(() => {
    var o;
    if (O.current)
      if (C[1] - C[0] >= 1) {
        O.current.style.display = "block";
        const i = (o = document.getSelection()) == null ? void 0 : o.focusNode;
        if (!i) throw new Error("focusNode is null");
        if (!(i instanceof Element))
          throw new Error("focusNode is not Element");
        const n = i.getBoundingClientRect(), h = n.bottom, r = n.x + n.width / 2;
        O.current.style.left = r + "px", O.current.style.top = h + "px";
      } else
        O.current.style.display = "none";
  }, [C]);
  const W = (o) => (i) => {
    const h = i.clipboardData.getData("text").split(/\r\n|\n/);
    if (h.length === 1)
      return !0;
    const r = [];
    let u = [], w = !1, k = "";
    return h.forEach((c) => {
      const P = c.match(/^(\s*)(```.*)/);
      w ? c.indexOf(k + "```") === 0 ? (r.push(u.join(`
`)), w = !1, u = []) : (k !== "" && c.indexOf(k) !== 0 && (r.push(u.join(`
`)), w = !1, u = [], r.push(c)), u.push(c.slice(k.length))) : P ? (w = !0, k = P[1], u.push(c)) : r.push(c);
    }), u.length !== 0 && r.push(u.join(`
`)), b((c) => (c[o] = { body: c[o].body + r[0], key: c[o].key }, c.splice(o + 1, 0, ...r.slice(1).map((P) => ({ body: P, key: Y() }))), [...c])), i.preventDefault(), !1;
  };
  G(() => {
    document.addEventListener("selectionchange", d), document.addEventListener("pointerup", m);
  }, []);
  const l = X([]);
  return G(() => {
    if (f.row !== -1 && M.current === !1) {
      const o = l.current[f.row];
      if (!o || !o.current) return;
      o.current.focus();
      let i = f.colEnd;
      (i === void 0 || i === -1) && (i = f.col), console.log("EFFECT", "col:", f.col, "end:", i), o.current.setSelectionRange(f.col, i, f.direction);
      const n = document.styleSheets;
      for (const h of n) {
        const r = h.cssRules || h.rules;
        for (const u of r)
          u instanceof CSSStyleRule && u.selectorText === ".line" && (u.style.wordBreak = "normal");
      }
      setTimeout(() => {
        for (const h of n) {
          const r = h.cssRules || h.rules;
          for (const u of r)
            u instanceof CSSStyleRule && u.selectorText === ".line" && (u.style.wordBreak = "break-all");
        }
      }, 100);
    }
  }, [f, t]), t.forEach((o, i) => {
    l.current[i] = pt();
  }), /* @__PURE__ */ E.jsxs("div", { className: "editor", ref: $, children: [
    t.map((o, i) => /* @__PURE__ */ E.jsx(
      Pt,
      {
        key_debug: o.key,
        ref: l.current[i],
        isFocus: i === f.row,
        isSelect: C[0] <= i && i <= C[1],
        row: i,
        value: o.body,
        textPopupHandlers: g.textPopupHandlers,
        onMagicFunc: g.onMagicFunc(i),
        keywords: g.keywords,
        blockStyles: g.blockStyles,
        selectThisLine: R(),
        setLine: (n) => (h) => ((r) => {
          b((u) => (u[r].body = n + h, [...u]));
        })(i),
        setCursor: (n) => ((h) => {
          x((r) => ({
            row: h,
            col: n,
            colEnd: -1,
            direction: r.direction
          }));
        })(i),
        onPaste: W,
        onCompositionStart: () => {
          M.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          M.current = !1, console.log("composition end");
        },
        onChange: (n) => (h) => ((r) => {
          if (console.log("onChange", M.current), M.current === !1) {
            const u = h.target.selectionStart, w = h.target.selectionEnd, k = h.target.selectionDirection;
            x((c) => ({
              row: c.row,
              col: u,
              colEnd: w,
              direction: k
            }));
          }
          b((u) => (u[r].body = n + h.target.value, [...u]));
        })(i),
        onKeyDown: (n, h) => (r) => {
          let u = r.currentTarget.selectionStart, w = r.currentTarget.selectionEnd, k = r.currentTarget.selectionDirection;
          switch (r.key) {
            case "ArrowLeft": {
              if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                r.preventDefault(), x((c) => {
                  if (c.row === 0) return c;
                  const P = t[f.row - 1].body.length;
                  return {
                    row: c.row - 1,
                    col: P,
                    colEnd: -1,
                    direction: k
                  };
                });
                break;
              }
              r.shiftKey ? u == w ? (u--, k = "backward") : k === "forward" ? w-- : k === "backward" && u-- : (u--, w = -1), r.preventDefault(), x((c) => ({
                row: c.row,
                col: u,
                colEnd: w,
                direction: k
              }));
              break;
            }
            case "ArrowRight": {
              const c = -n.length + t[f.row].body.length;
              if (r.currentTarget != null && r.currentTarget.selectionStart === c && r.currentTarget.selectionEnd === c) {
                x((P) => P.row === t.length - 1 ? P : (r.preventDefault(), {
                  row: P.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: k
                }));
                break;
              }
              r.shiftKey ? k === "forward" ? w++ : k === "backward" && u++ : (u < w && (u = w), u++, w = -1), r.preventDefault(), x((P) => ({
                row: P.row,
                col: u,
                colEnd: w,
                direction: k
              }));
              break;
            }
            case "ArrowUp":
              J(h) && r.currentTarget != null && !xt(r.currentTarget.selectionStart, h) || (r.preventDefault(), x((c) => c.row === 0 || r.currentTarget == null ? c : {
                row: c.row - 1,
                col: r.currentTarget.selectionStart,
                colEnd: -1,
                direction: k
              }));
              break;
            case "ArrowDown":
              J(h) && r.currentTarget != null && !St(r.currentTarget.selectionStart, h) || x((c) => c.row === t.length - 1 || r.currentTarget == null ? c : (r.preventDefault(), {
                row: c.row + 1,
                col: r.currentTarget.selectionStart,
                colEnd: -1,
                direction: k
              }));
              break;
            case "Backspace":
              if (!r.currentTarget) return;
              if (n.length !== 0 && (r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0 || r.currentTarget.selectionStart === 1 && r.currentTarget.selectionEnd === 1))
                n.length !== 0 && (b((c) => (n.length === 1 ? (c[f.row].body = r.currentTarget.value.slice(1), u--, u === -1 ? u++ : u === 0 && w !== 0 && (w = 0)) : n.length > 0 && (c[f.row].body = n.slice(2) + r.currentTarget.value), [...c])), r.preventDefault());
              else if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                if (f.row === 0) break;
                const P = Ue(t[f.row - 1].body)[1].length;
                b((_) => (J(_[f.row - 1].body) ? _[f.row - 1].body += `
` + _[f.row].body : _[f.row - 1].body += _[f.row].body, _.splice(f.row, 1), [..._])), x((_) => ({
                  row: _.row - 1,
                  col: P,
                  colEnd: -1,
                  direction: k
                })), r.preventDefault();
                break;
              }
              x((c) => ({
                row: c.row,
                col: u,
                colEnd: w,
                direction: k
              }));
              break;
            case "Tab":
              b((c) => {
                if (!r.currentTarget)
                  return c;
                if (r.shiftKey)
                  n.length === 1 ? (c[f.row].body = r.currentTarget.value.slice(1), u--) : n.length > 0 && (c[f.row].body = n.slice(2) + r.currentTarget.value);
                else {
                  let P = "-";
                  J(r.currentTarget.value) && (P = " "), n.length === 0 ? (c[f.row].body = P + " " + r.currentTarget.value, u++) : c[f.row].body = "  " + n + r.currentTarget.value;
                }
                return [...c];
              }), r.preventDefault(), x((c) => ({
                row: c.row,
                col: u,
                colEnd: -1,
                direction: k
              }));
              break;
            case "Enter":
              if (r.keyCode === 13) {
                if (J(h) && !r.shiftKey)
                  break;
                {
                  if (r.currentTarget == null || r.currentTarget.selectionStart === void 0) {
                    r.preventDefault();
                    break;
                  }
                  let c = 0;
                  const P = r.currentTarget.selectionStart;
                  b((_) => {
                    const Z = n.length + P;
                    let z = _[f.row].body.slice(Z);
                    if (J(h)) {
                      const re = _[f.row].body;
                      re[re.length - 1] === `
` ? _[f.row].body = _[f.row].body.slice(
                        0,
                        Z - 1
                      ) : _[f.row].body = _[f.row].body.slice(
                        0,
                        Z
                      ), z.length > 0 && z[0] === `
` && (z = z.slice(1));
                    } else
                      _[f.row].body = _[f.row].body.slice(
                        0,
                        Z
                      );
                    return n.length !== 0 ? (_.splice(
                      f.row + 1,
                      0,
                      { body: n + " " + z, key: Y() }
                    ), c = 1) : _.splice(f.row + 1, 0, { body: z, key: Y() }), [..._];
                  }), r.preventDefault(), x((_) => ({
                    row: _.row + 1,
                    col: c,
                    colEnd: -1,
                    direction: k
                  }));
                }
              } else
                break;
              break;
            case " ":
              console.log("space", u), (u === 0 || u === 1 && n.length >= 1) && (b((c) => {
                if (!r.currentTarget)
                  return c;
                let P = "-";
                return J(r.currentTarget.value) && (P = " "), n.length === 0 ? (c[f.row].body = P + " " + r.currentTarget.value, u++) : c[f.row].body = "  " + n + r.currentTarget.value, [...c];
              }), r.preventDefault()), x((c) => ({
                row: c.row,
                col: u,
                colEnd: -1,
                direction: k
              }));
              break;
          }
        },
        onLinkClick: g.onLinkClick,
        onSubLinkClick: g.onSubLinkClick,
        onClick: (n) => {
          if (f.row !== i) {
            const h = n.target.selectionStart;
            D([i, i]), x(() => ({ row: i, col: h }));
          }
        }
      },
      o.key
    )),
    /* @__PURE__ */ E.jsx("div", { className: "popup", ref: O, children: g.linePopupHandlers.map((o, i) => /* @__PURE__ */ E.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (o.handler(
            t.slice(C[0], C[1] + 1).map((n) => n.body),
            C
          ), D([C[1], C[1]]));
        },
        onTouchStart: () => {
          o.handler(t.slice(C[0], C[1] + 1).map((n) => n.body)), D([C[1], C[1]]);
        },
        children: o.name
      },
      i
    )) })
  ] });
};
export {
  Dt as Editor,
  J as isBlock,
  _t as parseBlock
};
