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
var Ke;
function Et() {
  if (Ke) return ie;
  Ke = 1;
  var g = Te, t = Symbol.for("react.element"), b = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, F = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(M, f, S) {
    var C, D = {}, K = null, $ = null;
    S !== void 0 && (K = "" + S), f.key !== void 0 && (K = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (C in f) y.call(f, C) && !B.hasOwnProperty(C) && (D[C] = f[C]);
    if (M && M.defaultProps) for (C in f = M.defaultProps, f) D[C] === void 0 && (D[C] = f[C]);
    return { $$typeof: t, type: M, key: K, ref: $, props: D, _owner: F.current };
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
var Ye;
function kt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Te, t = Symbol.for("react.element"), b = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), M = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), N = Symbol.iterator, A = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = N && e[N] || e[A];
      return typeof n == "function" ? n : null;
    }
    var d = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), v = 1; v < n; v++)
          s[v - 1] = arguments[v];
        R("error", e, s);
      }
    }
    function R(e, n, s) {
      {
        var v = d.ReactDebugCurrentFrame, x = v.getStackAddendum();
        x !== "" && (n += "%s", s = s.concat([x]));
        var j = s.map(function(T) {
          return String(T);
        });
        j.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var O = !1, W = !1, l = !1, r = !1, i = !1, o;
    o = Symbol.for("react.module.reference");
    function h(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === B || i || e === F || e === S || e === C || r || e === $ || O || W || l || typeof e == "object" && e !== null && (e.$$typeof === K || e.$$typeof === D || e.$$typeof === U || e.$$typeof === M || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === o || e.getModuleId !== void 0));
    }
    function a(e, n, s) {
      var v = e.displayName;
      if (v)
        return v;
      var x = n.displayName || n.name || "";
      return x !== "" ? s + "(" + x + ")" : s;
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
        case B:
          return "Profiler";
        case F:
          return "StrictMode";
        case S:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            var n = e;
            return u(n) + ".Consumer";
          case U:
            var s = e;
            return u(s._context) + ".Provider";
          case f:
            return a(e, e.render, "ForwardRef");
          case D:
            var v = e.displayName || null;
            return v !== null ? v : w(e.type) || "Memo";
          case K: {
            var x = e, j = x._payload, T = x._init;
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
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (c === 0) {
          P = console.log, _ = console.info, Z = console.warn, z = console.error, re = console.group, Ce = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
    function ce(e, n, s) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (x) {
            var v = x.stack.trim().match(/\n( *(at )?)/);
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
    function Se(e, n) {
      if (!e || ve)
        return "";
      {
        var s = ue.get(e);
        if (s !== void 0)
          return s;
      }
      var v;
      ve = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = he.current, he.current = null, Ve();
      try {
        if (n) {
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
        ve = !1, he.current = j, qe(), Error.prepareStackTrace = x;
      }
      var te = e ? e.displayName || e.name : "", Q = te ? ce(te) : "";
      return typeof e == "function" && ue.set(e, Q), Q;
    }
    function Ge(e, n, s) {
      return Se(e, !1);
    }
    function ze(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function fe(e, n, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, ze(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case S:
          return ce("Suspense");
        case C:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ge(e.render);
          case D:
            return fe(e.type, n, s);
          case K: {
            var v = e, x = v._payload, j = v._init;
            try {
              return fe(j(x), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, _e = {}, je = d.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var n = e._owner, s = fe(e.type, e._source, n ? n.type : null);
        je.setExtraStackFrame(s);
      } else
        je.setExtraStackFrame(null);
    }
    function Xe(e, n, s, v, x) {
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
              p = e[T](n, T, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              p = L;
            }
            p && !(p instanceof Error) && (de(x), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, T, typeof p), de(null)), p instanceof Error && !(p.message in _e) && (_e[p.message] = !0, de(x), m("Failed %s type: %s", s, p.message), de(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ye(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nt(e) {
      if (ne.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ot(e, n) {
      if (typeof e.ref == "string" && oe.current && n && oe.current.stateNode !== n) {
        var s = w(oe.current.type);
        me[s] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(oe.current.type), e.ref), me[s] = !0);
      }
    }
    function at(e, n) {
      {
        var s = function() {
          De || (De = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function it(e, n) {
      {
        var s = function() {
          Fe || (Fe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var lt = function(e, n, s, v, x, j, T) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
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
        value: x
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function st(e, n, s, v, x) {
      {
        var j, T = {}, p = null, H = null;
        s !== void 0 && (Oe(s), p = "" + s), nt(n) && (Oe(n.key), p = "" + n.key), rt(n) && (H = n.ref, ot(n, x));
        for (j in n)
          ne.call(n, j) && !tt.hasOwnProperty(j) && (T[j] = n[j]);
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (j in L)
            T[j] === void 0 && (T[j] = L[j]);
        }
        if (p || H) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && at(T, I), H && it(T, I);
        }
        return lt(e, p, H, x, v, oe.current, T);
      }
    }
    var be = d.ReactCurrentOwner, Ne = d.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var n = e._owner, s = fe(e.type, e._source, n ? n.type : null);
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
        var n = Ae();
        if (!n) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (n = `

Check the top-level render call using <` + s + ">.");
        }
        return n;
      }
    }
    function Ie(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = ut(n);
        if (Le[s])
          return;
        Le[s] = !0;
        var v = "";
        e && e._owner && e._owner !== be.current && (v = " It was passed a child from " + w(e._owner.type) + "."), ee(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), ee(null);
      }
    }
    function Me(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var v = e[s];
            pe(v) && Ie(v, n);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = Y(e);
          if (typeof x == "function" && x !== e.entries)
            for (var j = x.call(e), T; !(T = j.next()).done; )
              pe(T.value) && Ie(T.value, n);
        }
      }
    }
    function ft(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var s;
        if (typeof n == "function")
          s = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === D))
          s = n.propTypes;
        else
          return;
        if (s) {
          var v = w(n);
          Xe(s, e.props, "prop", v, e);
        } else if (n.PropTypes !== void 0 && !we) {
          we = !0;
          var x = w(n);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var n = Object.keys(e.props), s = 0; s < n.length; s++) {
          var v = n[s];
          if (v !== "children" && v !== "key") {
            ee(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var We = {};
    function $e(e, n, s, v, x, j) {
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
        var I = st(e, n, s, x, j);
        if (I == null)
          return I;
        if (T) {
          var q = n.children;
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
        if (ne.call(n, "key")) {
          var Q = w(e), V = Object.keys(n).filter(function(bt) {
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
    function ht(e, n, s) {
      return $e(e, n, s, !0);
    }
    function gt(e, n, s) {
      return $e(e, n, s, !1);
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
}, xt = (g, t) => {
  const b = He(g, t), y = Rt(t);
  return b[1] === y - 1;
}, St = (g, t) => He(g, t)[1] === 0, _t = (g) => {
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
}, Be = Te.forwardRef(
  function(t, b) {
    const [y, F] = se({
      prefix: "",
      selection: "",
      suffix: ""
    }), B = () => {
      F({ prefix: "", selection: "", suffix: "" });
    }, [U, M] = se({
      index: 0
    }), f = (d, m) => {
      let R = 0, O = "", W = !1;
      for (let r = 0; r < d.length; r++) {
        const i = d[r];
        i === "[" ? (R++, O = "") : i === "]" ? (R > 0 && (R--, O = "", W = !0), R === 0 && (W = !1)) : R > 0 && !W && (O += i);
      }
      let l = "";
      if (R > 0) {
        let r = 0, i = !1;
        for (let o = 0; o < m.length; o++) {
          const h = m[o];
          h === "[" ? r++ : h === "]" ? (r--, i = !0) : i || (l += h);
        }
        return r === 0 && (l = ""), O + l;
      }
      return "";
    }, S = (d) => {
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
      !A.current || !Y.current || (A.current.style.display = "inline", y.selection === "" && D === "" ? Y.current.style.display = "none" : Y.current.style.display = "inline", Y.current.style.left = A.current.getBoundingClientRect().width + "px", Y.current.style.top = A.current.getBoundingClientRect().height + "px", A.current.style.display = "none");
    }, [y, D]), G(() => {
      M({ index: 0 });
    }, [t.value]);
    const K = function(d) {
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
        const R = S(y.prefix), O = $[m].name;
        let W = C(y.suffix), l = (R + O).length;
        return (W.length == 0 || W[0] != "]") && (W = "]" + W, l += 1), {
          value: R + O + W,
          column: l
        };
      }
    })), $.length > 0 && (N = !0));
    const A = X(null), Y = X(null);
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
                t.onCompositionEnd(d), K(d);
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
              onSelect: K
            }
          ),
          /* @__PURE__ */ E.jsx("div", { className: "popup", ref: Y, children: $.map((d, m) => /* @__PURE__ */ E.jsx(
            "div",
            {
              className: U.index == m ? "selected" : "",
              onClick: () => {
                const R = d.handler(y);
                t.setLine(R.value), t.setCursor(R.column), B();
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
    const y = jt(b), [F, B] = se();
    G(() => {
      if (!y.current) return;
      const l = y.current.style.display;
      y.current.style.display = "block", y.current.style.height = "0px", y.current.style.height = y.current.scrollHeight + "px", y.current.style.display = l;
    }, [t.value, y, t.isFocus]);
    const U = (l, r, i) => {
      var a;
      const o = ["line"], h = l.match(/^(\s*)- /);
      if (l.indexOf("# ") === 0)
        o.push("h1-style");
      else if (l.indexOf("## ") === 0)
        o.push("h2-style");
      else if (l.indexOf("### ") === 0)
        o.push("h3-style");
      else if (h)
        o.push("list-style"), o.push("list-indent-" + h[1].length / 2);
      else if (J(l)) {
        const u = J(l, !0);
        o.push("list-indent-" + (((a = u == null ? void 0 : u[1]) == null ? void 0 : a.length) ?? 0) / 2);
      }
      return r && o.push("focus"), i && o.push("select"), o.join(" ");
    }, M = (l) => l ? [] : ["hide"], f = (l) => l ? "hide" : "", S = (l, r, i) => {
      let o = -1, h = "";
      return r.forEach(function(a) {
        const u = l.indexOf(a, i);
        u !== -1 && (o === -1 || o > u) && (o = u, h = a);
      }), { pos: o, target: h };
    }, C = t.onLinkClick, D = t.onSubLinkClick, K = ae((l) => {
      let r = 0;
      const i = [];
      for (; ; ) {
        const o = S(l, ["http://", "https://", " ", "["], r);
        if (o.target === "https://" || o.target === "http://") {
          r !== o.pos && i.push(l.slice(r, o.pos));
          const h = S(
            l,
            [" ", "\r", `
`],
            o.pos + o.target.length
          );
          if (h.pos !== -1) {
            const a = l.slice(o.pos, h.pos);
            i.push(/* @__PURE__ */ E.jsx("a", { href: a, children: a }, r)), r = h.pos;
          } else {
            const a = l.slice(o.pos, l.length);
            i.push(/* @__PURE__ */ E.jsx("a", { href: a, children: a }, r)), r = l.length;
            break;
          }
        } else if (o.target == " ")
          i.push(l.slice(r, o.pos)), i.push(" "), r = o.pos + o.target.length;
        else if (o.target == "[") {
          r !== o.pos && (i.push(l.slice(r, o.pos)), r = o.pos);
          const h = S(l, ["]"], o.pos + o.target.length);
          if (h.pos !== -1) {
            const a = l.slice(o.pos, h.pos + 1), u = a.slice(1, a.length - 1), w = t.keywords.find((c) => c.value == u);
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
            ] }, r)]), r = h.pos + 1;
          } else
            i.push(l.slice(r, l.length)), r = l.length;
        } else {
          i.push(l.slice(r, l.length)), r = l.length;
          break;
        }
      }
      return i;
    }, [C, D, t.keywords]), $ = ae((l, r) => {
      const i = l ? t.blockStyles[l] : void 0;
      return i ? i(r, B) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
        /* @__PURE__ */ E.jsx("span", { className: "block-type", children: l }),
        /* @__PURE__ */ E.jsx("pre", { children: r })
      ] });
    }, [t.blockStyles]), N = ae((l) => {
      const r = l.match(/^(\s*)```.*/), i = (r == null ? void 0 : r[1]) ?? "";
      return l = l.slice(i.length).split(`
`).map((o) => i + o).join(`
`), l;
    }, []), A = ae((l) => {
      const r = l.match(/^(\s*)> /), i = (r == null ? void 0 : r[1]) ?? "";
      return l = l.slice(i.length).split(`
`).map(
        (o, h) => i + (h === 0 ? "" : "> ") + o
      ).join(`
`), l;
    }, []), Y = ae((l) => {
      var r;
      if (console.log(l), J(l))
        if (Tt(l)) {
          const i = l.match(/\s*> /), o = l.slice((r = i == null ? void 0 : i[0]) == null ? void 0 : r.length);
          B(
            /* @__PURE__ */ E.jsxs("div", { children: [
              /* @__PURE__ */ E.jsx("pre", { className: "for-copy", children: A(l) }),
              /* @__PURE__ */ E.jsx("div", { className: "no-select", children: $("pre", o) })
            ] })
          );
          return;
        } else {
          const i = _t(l), o = $(i[0], i[1]);
          B(
            /* @__PURE__ */ E.jsxs("div", { children: [
              /* @__PURE__ */ E.jsx("pre", { className: "for-copy", children: N(l + "\n```") }),
              /* @__PURE__ */ E.jsx("div", { className: "no-select", children: o })
            ] })
          );
          return;
        }
      else {
        const i = ["elm"], o = l.match(/^(\s*)-( .*)$/);
        let h = null;
        l.indexOf("# ") === 0 || l.indexOf("## ") === 0 || l.indexOf("### ") === 0 || o && (l = o[2], h = /* @__PURE__ */ E.jsx("pre", { className: "for-copy-inline", children: o[1] + "-" })), B(
          /* @__PURE__ */ E.jsxs("div", { className: i.join(" "), children: [
            h,
            K(l)
          ] })
        );
        return;
      }
    }, [N, A, $, K]), d = X(null), m = (l) => (r) => {
      if (r.buttons !== 0 && d.current) {
        l();
        const i = new Range();
        i.selectNodeContents(d.current);
        const o = document.getSelection();
        if (!o) throw new Error("selection is null");
        o.empty(), o.addRange(i);
      }
    }, R = Ue(t.value), O = R[0], W = R[1];
    return G(() => {
      Y(t.value);
    }, [Y, t.value]), J(W) ? /* @__PURE__ */ E.jsxs(
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
                Be,
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
                Be,
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
                  onKeyDown: (l) => (r) => {
                    r.key === "Enter" && r.keyCode === 13 && l.selection !== "" ? r.preventDefault() : t.onKeyDown(O, W)(r);
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
  t.forEach((r) => {
    r.key > y && (y = r.key);
  });
  const F = X(y);
  G(() => {
    let r = 0;
    t.forEach((i) => {
      i.key > r && (r = i.key);
    }), F.current = r;
  }, [t]);
  const B = () => (F.current = F.current + 1, F.current), U = g.onChange;
  G(() => {
    U(t.map((r) => r.body));
  }, [t, U]);
  const M = X(!1), [f, S] = se({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [C, D] = se([0, 0]), K = (r) => r == null ? null : r instanceof HTMLElement && r.classList.contains("line") ? r : K(r.parentElement), $ = X(null);
  let N, A, Y = !1;
  const d = () => {
    Y = !0;
    const r = document.getSelection();
    r && (N = K(r.anchorNode), A = K(r.focusNode), (N == null ? void 0 : N.parentNode) != $.current && (N = null, A = null), N !== A && S({ row: -1, col: 0 }));
  }, m = () => {
    var r, i, o, h;
    if (Y && (Y = !1, N && A && N !== A)) {
      const a = new Range();
      if (a.setStart(N, 0), a.setEnd(A, A.children.length), document.getSelection().empty(), document.getSelection().addRange(a), !((r = N.dataset) != null && r.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const u = parseInt((i = N.dataset) == null ? void 0 : i.lineno);
      if (!((o = A.dataset) != null && o.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const w = parseInt((h = A.dataset) == null ? void 0 : h.lineno);
      D([u, w]);
    }
  }, R = () => () => {
    S(() => ({ row: -1, col: 0 })), Y = !0;
  }, O = X(null);
  G(() => {
    var r;
    if (O.current)
      if (C[1] - C[0] >= 1) {
        O.current.style.display = "block";
        const i = (r = document.getSelection()) == null ? void 0 : r.focusNode;
        if (!i) throw new Error("focusNode is null");
        if (!(i instanceof Element))
          throw new Error("focusNode is not Element");
        const o = i.getBoundingClientRect(), h = o.bottom, a = o.x + o.width / 2;
        O.current.style.left = a + "px", O.current.style.top = h + "px";
      } else
        O.current.style.display = "none";
  }, [C]);
  const W = (r) => (i) => {
    const h = i.clipboardData.getData("text").split(/\r\n|\n/);
    if (h.length === 1)
      return !0;
    const a = [];
    let u = [], w = !1, k = "";
    return h.forEach((c) => {
      const P = c.match(/^(\s*)(```.*)/);
      w ? c.indexOf(k + "```") === 0 ? (a.push(u.join(`
`)), w = !1, u = []) : (k !== "" && c.indexOf(k) !== 0 && (a.push(u.join(`
`)), w = !1, u = [], a.push(c)), u.push(c.slice(k.length))) : P ? (w = !0, k = P[1], u.push(c)) : a.push(c);
    }), u.length !== 0 && a.push(u.join(`
`)), b((c) => (c[r] = { body: c[r].body + a[0], key: c[r].key }, c.splice(r + 1, 0, ...a.slice(1).map((P) => ({ body: P, key: B() }))), [...c])), i.preventDefault(), !1;
  };
  G(() => {
    document.addEventListener("selectionchange", d), document.addEventListener("pointerup", m);
  }, []);
  const l = X([]);
  return G(() => {
    if (f.row !== -1 && M.current === !1) {
      const r = l.current[f.row];
      if (!r || !r.current) return;
      r.current.focus();
      let i = f.colEnd;
      (i === void 0 || i === -1) && (i = f.col), console.log("EFFECT", "col:", f.col, "end:", i), r.current.setSelectionRange(f.col, i, f.direction);
    }
  }, [f, t]), t.forEach((r, i) => {
    l.current[i] = pt();
  }), /* @__PURE__ */ E.jsxs("div", { className: "editor", ref: $, children: [
    t.map((r, i) => /* @__PURE__ */ E.jsx(
      Pt,
      {
        key_debug: r.key,
        ref: l.current[i],
        isFocus: i === f.row,
        isSelect: C[0] <= i && i <= C[1],
        row: i,
        value: r.body,
        textPopupHandlers: g.textPopupHandlers,
        onMagicFunc: g.onMagicFunc(i),
        keywords: g.keywords,
        blockStyles: g.blockStyles,
        selectThisLine: R(),
        setLine: (o) => (h) => ((a) => {
          b((u) => (u[a].body = o + h, [...u]));
        })(i),
        setCursor: (o) => ((h) => {
          S((a) => ({
            row: h,
            col: o,
            colEnd: -1,
            direction: a.direction
          }));
        })(i),
        onPaste: W,
        onCompositionStart: () => {
          M.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          M.current = !1, console.log("composition end");
        },
        onChange: (o) => (h) => ((a) => {
          if (console.log("onChange", M.current), M.current === !1) {
            const u = h.target.selectionStart, w = h.target.selectionEnd, k = h.target.selectionDirection;
            S((c) => ({
              row: c.row,
              col: u,
              colEnd: w,
              direction: k
            }));
          }
          b((u) => (u[a].body = o + h.target.value, [...u]));
        })(i),
        onKeyDown: (o, h) => (a) => {
          let u = a.currentTarget.selectionStart, w = a.currentTarget.selectionEnd, k = a.currentTarget.selectionDirection;
          switch (a.key) {
            case "ArrowLeft": {
              if (a.currentTarget != null && a.currentTarget.selectionStart === 0 && a.currentTarget.selectionEnd === 0) {
                a.preventDefault(), S((c) => {
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
              a.shiftKey ? u == w ? (u--, k = "backward") : k === "forward" ? w-- : k === "backward" && u-- : (u--, w = -1), a.preventDefault(), S((c) => ({
                row: c.row,
                col: u,
                colEnd: w,
                direction: k
              }));
              break;
            }
            case "ArrowRight": {
              const c = -o.length + t[f.row].body.length;
              if (a.currentTarget != null && a.currentTarget.selectionStart === c && a.currentTarget.selectionEnd === c) {
                S((P) => P.row === t.length - 1 ? P : (a.preventDefault(), {
                  row: P.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: k
                }));
                break;
              }
              a.shiftKey ? k === "forward" ? w++ : k === "backward" && u++ : (u < w && (u = w), u++, w = -1), a.preventDefault(), S((P) => ({
                row: P.row,
                col: u,
                colEnd: w,
                direction: k
              }));
              break;
            }
            case "ArrowUp":
              J(h) && a.currentTarget != null && !St(a.currentTarget.selectionStart, h) || (a.preventDefault(), S((c) => c.row === 0 || a.currentTarget == null ? c : {
                row: c.row - 1,
                col: a.currentTarget.selectionStart,
                colEnd: -1,
                direction: k
              }));
              break;
            case "ArrowDown":
              J(h) && a.currentTarget != null && !xt(a.currentTarget.selectionStart, h) || S((c) => c.row === t.length - 1 || a.currentTarget == null ? c : (a.preventDefault(), {
                row: c.row + 1,
                col: a.currentTarget.selectionStart,
                colEnd: -1,
                direction: k
              }));
              break;
            case "Backspace":
              if (!a.currentTarget) return;
              if (o.length !== 0 && (a.currentTarget.selectionStart === 0 && a.currentTarget.selectionEnd === 0 || a.currentTarget.selectionStart === 1 && a.currentTarget.selectionEnd === 1))
                o.length !== 0 && (b((c) => (o.length === 1 ? (c[f.row].body = a.currentTarget.value.slice(1), u--, u === -1 ? u++ : u === 0 && w !== 0 && (w = 0)) : o.length > 0 && (c[f.row].body = o.slice(2) + a.currentTarget.value), [...c])), a.preventDefault());
              else if (a.currentTarget != null && a.currentTarget.selectionStart === 0 && a.currentTarget.selectionEnd === 0) {
                if (f.row === 0) break;
                const P = Ue(t[f.row - 1].body)[1].length;
                b((_) => (J(_[f.row - 1].body) ? _[f.row - 1].body += `
` + _[f.row].body : _[f.row - 1].body += _[f.row].body, _.splice(f.row, 1), [..._])), S((_) => ({
                  row: _.row - 1,
                  col: P,
                  colEnd: -1,
                  direction: k
                })), a.preventDefault();
                break;
              }
              S((c) => ({
                row: c.row,
                col: u,
                colEnd: w,
                direction: k
              }));
              break;
            case "Tab":
              b((c) => {
                if (!a.currentTarget)
                  return c;
                if (a.shiftKey)
                  o.length === 1 ? (c[f.row].body = a.currentTarget.value.slice(1), u--) : o.length > 0 && (c[f.row].body = o.slice(2) + a.currentTarget.value);
                else {
                  let P = "-";
                  J(a.currentTarget.value) && (P = " "), o.length === 0 ? (c[f.row].body = P + " " + a.currentTarget.value, u++) : c[f.row].body = "  " + o + a.currentTarget.value;
                }
                return [...c];
              }), a.preventDefault(), S((c) => ({
                row: c.row,
                col: u,
                colEnd: -1,
                direction: k
              }));
              break;
            case "Enter":
              if (a.keyCode === 13) {
                if (J(h) && !a.shiftKey)
                  break;
                {
                  if (a.currentTarget == null || a.currentTarget.selectionStart === void 0) {
                    a.preventDefault();
                    break;
                  }
                  let c = 0;
                  const P = a.currentTarget.selectionStart;
                  b((_) => {
                    const Z = o.length + P;
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
                    return o.length !== 0 ? (_.splice(
                      f.row + 1,
                      0,
                      { body: o + " " + z, key: B() }
                    ), c = 1) : _.splice(f.row + 1, 0, { body: z, key: B() }), [..._];
                  }), a.preventDefault(), S((_) => ({
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
              console.log("space", u), (u === 0 || u === 1 && o.length >= 1) && (b((c) => {
                if (!a.currentTarget)
                  return c;
                let P = "-";
                return J(a.currentTarget.value) && (P = " "), o.length === 0 ? (c[f.row].body = P + " " + a.currentTarget.value, u++) : c[f.row].body = "  " + o + a.currentTarget.value, [...c];
              }), a.preventDefault()), S((c) => ({
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
        onClick: (o) => {
          if (f.row !== i) {
            const h = o.target.selectionStart;
            D([i, i]), S(() => ({ row: i, col: h }));
          }
        }
      },
      r.key
    )),
    /* @__PURE__ */ E.jsx("div", { className: "popup", ref: O, children: g.linePopupHandlers.map((r, i) => /* @__PURE__ */ E.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (r.handler(
            t.slice(C[0], C[1] + 1).map((o) => o.body),
            C
          ), D([C[1], C[1]]));
        },
        onTouchStart: () => {
          r.handler(t.slice(C[0], C[1] + 1).map((o) => o.body)), D([C[1], C[1]]);
        },
        children: r.name
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
