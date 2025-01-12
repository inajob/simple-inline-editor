import Te, { useState as se, useEffect as G, useRef as X, forwardRef as wt, useCallback as ie, createRef as pt } from "react";
var ke = { exports: {} }, ae = {};
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
  if (Be) return ae;
  Be = 1;
  var g = Te, t = Symbol.for("react.element"), p = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, F = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U(M, f, x) {
    var C, D = {}, B = null, $ = null;
    x !== void 0 && (B = "" + x), f.key !== void 0 && (B = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (C in f) y.call(f, C) && !Y.hasOwnProperty(C) && (D[C] = f[C]);
    if (M && M.defaultProps) for (C in f = M.defaultProps, f) D[C] === void 0 && (D[C] = f[C]);
    return { $$typeof: t, type: M, key: B, ref: $, props: D, _owner: F.current };
  }
  return ae.Fragment = p, ae.jsx = U, ae.jsxs = U, ae;
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
    var g = Te, t = Symbol.for("react.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), M = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), N = Symbol.iterator, A = "@@iterator";
    function K(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = N && e[N] || e[A];
      return typeof i == "function" ? i : null;
    }
    var d = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), v = 1; v < i; v++)
          s[v - 1] = arguments[v];
        R("error", e, s);
      }
    }
    function R(e, i, s) {
      {
        var v = d.ReactDebugCurrentFrame, S = v.getStackAddendum();
        S !== "" && (i += "%s", s = s.concat([S]));
        var j = s.map(function(T) {
          return String(T);
        });
        j.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var O = !1, W = !1, l = !1, n = !1, a = !1, o;
    o = Symbol.for("react.module.reference");
    function h(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === Y || a || e === F || e === x || e === C || n || e === $ || O || W || l || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === D || e.$$typeof === U || e.$$typeof === M || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === o || e.getModuleId !== void 0));
    }
    function r(e, i, s) {
      var v = e.displayName;
      if (v)
        return v;
      var S = i.displayName || i.name || "";
      return S !== "" ? s + "(" + S + ")" : s;
    }
    function u(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case p:
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
            var i = e;
            return u(i) + ".Consumer";
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
    var m = Object.assign, c = 0, P, _, Z, z, re, Ce, Re;
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
            log: m({}, e, {
              value: P
            }),
            info: m({}, e, {
              value: _
            }),
            warn: m({}, e, {
              value: Z
            }),
            error: m({}, e, {
              value: z
            }),
            group: m({}, e, {
              value: re
            }),
            groupCollapsed: m({}, e, {
              value: Ce
            }),
            groupEnd: m({}, e, {
              value: Re
            })
          });
        }
        c < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = d.ReactCurrentDispatcher, ge;
    function ce(e, i, s) {
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
    function xe(e, i) {
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
        if (i) {
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
          for (var E = V.stack.split(`
`), H = v.stack.split(`
`), L = E.length - 1, I = H.length - 1; L >= 1 && I >= 0 && E[L] !== H[I]; )
            I--;
          for (; L >= 1 && I >= 0; L--, I--)
            if (E[L] !== H[I]) {
              if (L !== 1 || I !== 1)
                do
                  if (L--, I--, I < 0 || E[L] !== H[I]) {
                    var q = `
` + E[L].replace(" at new ", " at ");
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
    function Ge(e, i, s) {
      return xe(e, !1);
    }
    function ze(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function fe(e, i, s) {
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
            return fe(e.type, i, s);
          case B: {
            var v = e, S = v._payload, j = v._init;
            try {
              return fe(j(S), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, _e = {}, je = d.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var i = e._owner, s = fe(e.type, e._source, i ? i.type : null);
        je.setExtraStackFrame(s);
      } else
        je.setExtraStackFrame(null);
    }
    function Xe(e, i, s, v, S) {
      {
        var j = Function.call.bind(ne);
        for (var T in e)
          if (j(e, T)) {
            var E = void 0;
            try {
              if (typeof e[T] != "function") {
                var H = Error((v || "React class") + ": " + s + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw H.name = "Invariant Violation", H;
              }
              E = e[T](i, T, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              E = L;
            }
            E && !(E instanceof Error) && (de(S), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, T, typeof E), de(null)), E instanceof Error && !(E.message in _e) && (_e[E.message] = !0, de(S), b("Failed %s type: %s", s, E.message), de(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ye(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Pe(e);
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
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nt(e) {
      if (ne.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ot(e, i) {
      if (typeof e.ref == "string" && oe.current && i && oe.current.stateNode !== i) {
        var s = w(oe.current.type);
        me[s] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(oe.current.type), e.ref), me[s] = !0);
      }
    }
    function it(e, i) {
      {
        var s = function() {
          De || (De = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function at(e, i) {
      {
        var s = function() {
          Fe || (Fe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var lt = function(e, i, s, v, S, j, T) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: s,
        props: T,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function st(e, i, s, v, S) {
      {
        var j, T = {}, E = null, H = null;
        s !== void 0 && (Oe(s), E = "" + s), nt(i) && (Oe(i.key), E = "" + i.key), rt(i) && (H = i.ref, ot(i, S));
        for (j in i)
          ne.call(i, j) && !tt.hasOwnProperty(j) && (T[j] = i[j]);
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (j in L)
            T[j] === void 0 && (T[j] = L[j]);
        }
        if (E || H) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          E && it(T, I), H && at(T, I);
        }
        return lt(e, E, H, S, v, oe.current, T);
      }
    }
    var be = d.ReactCurrentOwner, Ne = d.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var i = e._owner, s = fe(e.type, e._source, i ? i.type : null);
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
        var i = Ae();
        if (!i) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function Ie(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = ut(i);
        if (Le[s])
          return;
        Le[s] = !0;
        var v = "";
        e && e._owner && e._owner !== be.current && (v = " It was passed a child from " + w(e._owner.type) + "."), ee(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), ee(null);
      }
    }
    function Me(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var v = e[s];
            pe(v) && Ie(v, i);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var S = K(e);
          if (typeof S == "function" && S !== e.entries)
            for (var j = S.call(e), T; !(T = j.next()).done; )
              pe(T.value) && Ie(T.value, i);
        }
      }
    }
    function ft(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === D))
          s = i.propTypes;
        else
          return;
        if (s) {
          var v = w(i);
          Xe(s, e.props, "prop", v, e);
        } else if (i.PropTypes !== void 0 && !we) {
          we = !0;
          var S = w(i);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var i = Object.keys(e.props), s = 0; s < i.length; s++) {
          var v = i[s];
          if (v !== "children" && v !== "key") {
            ee(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var We = {};
    function $e(e, i, s, v, S, j) {
      {
        var T = h(e);
        if (!T) {
          var E = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var H = ct();
          H ? E += H : E += Ae();
          var L;
          e === null ? L = "null" : ye(e) ? L = "array" : e !== void 0 && e.$$typeof === t ? (L = "<" + (w(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : L = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, E);
        }
        var I = st(e, i, s, S, j);
        if (I == null)
          return I;
        if (T) {
          var q = i.children;
          if (q !== void 0)
            if (v)
              if (ye(q)) {
                for (var te = 0; te < q.length; te++)
                  Me(q[te], e);
                Object.freeze && Object.freeze(q);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(q, e);
        }
        if (ne.call(i, "key")) {
          var Q = w(e), V = Object.keys(i).filter(function(bt) {
            return bt !== "key";
          }), Ee = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[Q + Ee]) {
            var mt = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
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
    function ht(e, i, s) {
      return $e(e, i, s, !0);
    }
    function gt(e, i, s) {
      return $e(e, i, s, !1);
    }
    var vt = gt, yt = ht;
    le.Fragment = y, le.jsx = vt, le.jsxs = yt;
  }()), le;
}
process.env.NODE_ENV === "production" ? ke.exports = Et() : ke.exports = kt();
var k = ke.exports;
function J(g, t) {
  const p = g.match(/^(\s*)(```|> )/);
  return t === !0 ? p : p != null;
}
const Tt = (g) => g.match(/^(\s*)> /) != null, Ct = (g) => g.split(/[\r\n]/), Rt = (g) => g.split(/[\r\n]/).length, He = (g, t) => {
  const p = t.split(/[\r\n]/);
  let y = 0;
  for (let F = 0; F < p.length; F++)
    if (y += p[F].length + 1, y > g)
      return [g - (y - p[F].length - 1), F];
  throw new Error("error getPos");
}, St = (g, t) => {
  const p = He(g, t), y = Rt(t);
  return p[1] === y - 1;
}, xt = (g, t) => He(g, t)[1] === 0, _t = (g) => {
  const t = g.match(/^\s*`{3}(.*)/), p = Ct(g).slice(1).join(`
`);
  return [t == null ? void 0 : t[1], p];
}, Ue = (g) => {
  const t = g.match(/^(\s*-)( .*)$/);
  let p = "";
  if (t)
    g = t[2], p = t[1];
  else {
    const y = g.match(/^(\s*)(```.*|> )/);
    y && (p = y[1], g = g.slice(y[1].length));
  }
  return [p, g];
}, Ye = Te.forwardRef(
  function(t, p) {
    const [y, F] = se({
      prefix: "",
      selection: "",
      suffix: ""
    }), Y = () => {
      F({ prefix: "", selection: "", suffix: "" });
    }, [U, M] = se({
      index: 0
    }), f = (d, b) => {
      let R = 0, O = "", W = !1;
      for (let n = 0; n < d.length; n++) {
        const a = d[n];
        a === "[" ? (R++, O = "") : a === "]" ? (R > 0 && (R--, O = "", W = !0), R === 0 && (W = !1)) : R > 0 && !W && (O += a);
      }
      let l = "";
      if (R > 0) {
        let n = 0, a = !1;
        for (let o = 0; o < b.length; o++) {
          const h = b[o];
          h === "[" ? n++ : h === "]" ? (n--, a = !0) : a || (l += h);
        }
        return n === 0 && (l = ""), O + l;
      }
      return "";
    }, x = (d) => {
      let b = d.length - 1;
      for (let R = d.length - 1; R >= 0; R--)
        if (d[R] === "[") {
          b = R;
          break;
        }
      return d.slice(0, -(d.length - 1 - b));
    }, C = (d) => {
      let b = 0;
      for (let R = 0; R < d.length; R++)
        if (d[R] === "]") {
          b = R;
          break;
        }
      return d.slice(b);
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
    y.selection === "" && D !== "" && ($ = t.keywords.map((d) => d.value).filter((d) => d.toLowerCase().indexOf(D.toLowerCase()) != -1).map((d, b) => ({
      name: d,
      handler: () => {
        const R = x(y.prefix), O = $[b].name;
        let W = C(y.suffix), l = (R + O).length;
        return (W.length == 0 || W[0] != "]") && (W = "]" + W, l += 1), {
          value: R + O + W,
          column: l
        };
      }
    })), $.length > 0 && (N = !0));
    const A = X(null), K = X(null);
    return /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: t.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ k.jsx(
            "textarea",
            {
              ref: p,
              value: t.value,
              onPaste: t.onPaste,
              onCompositionStart: t.onCompositionStart,
              onCompositionEnd: (d) => {
                t.onCompositionEnd(d), B(d);
              },
              onChange: t.onChange,
              onKeyDown: (d) => {
                if (d.key === "Enter" && d.keyCode === 13 && N) {
                  const b = $[U.index].handler(null);
                  t.setLine(b.value), t.setCursor(b.column), d.preventDefault();
                } else d.key == "Tab" && N ? (M((b) => {
                  let R = b.index + 1;
                  return R >= $.length && (R = 0), { index: R };
                }), d.preventDefault()) : d.key == "Enter" && d.shiftKey ? (t.onMagicFunc(), d.preventDefault()) : t.onKeyDown(y)(d);
              },
              onSelect: B
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: "popup", ref: K, children: $.map((d, b) => /* @__PURE__ */ k.jsx(
            "div",
            {
              className: U.index == b ? "selected" : "",
              onClick: () => {
                const R = d.handler(y);
                t.setLine(R.value), t.setCursor(R.column), Y();
              },
              children: d.name
            },
            b
          )) }),
          /* @__PURE__ */ k.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: A, children: y.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), jt = (g, t = null) => {
  const p = X(t);
  return G(() => {
    g && (typeof g == "function" ? g(p.current) : g.current = p.current);
  }, [g]), p;
}, Pt = wt(
  function(t, p) {
    const y = jt(p), [F, Y] = se();
    G(() => {
      if (!y.current) return;
      const l = y.current.style.display;
      y.current.style.display = "block", y.current.style.height = "0px", y.current.style.height = y.current.scrollHeight + "px", y.current.style.display = l;
    }, [t.value, y, t.isFocus]);
    const U = (l, n, a) => {
      var r;
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
        o.push("list-indent-" + (((r = u == null ? void 0 : u[1]) == null ? void 0 : r.length) ?? 0) / 2);
      }
      return n && o.push("focus"), a && o.push("select"), o.join(" ");
    }, M = (l) => l ? [] : ["hide"], f = (l) => l ? "hide" : "", x = (l, n, a) => {
      let o = -1, h = "";
      return n.forEach(function(r) {
        const u = l.indexOf(r, a);
        u !== -1 && (o === -1 || o > u) && (o = u, h = r);
      }), { pos: o, target: h };
    }, C = t.onLinkClick, D = t.onSubLinkClick, B = ie((l) => {
      let n = 0;
      const a = [];
      for (; ; ) {
        const o = x(l, ["http://", "https://", " ", "["], n);
        if (o.target === "https://" || o.target === "http://") {
          n !== o.pos && a.push(l.slice(n, o.pos));
          const h = x(
            l,
            [" ", "\r", `
`],
            o.pos + o.target.length
          );
          if (h.pos !== -1) {
            const r = l.slice(o.pos, h.pos);
            a.push(/* @__PURE__ */ k.jsx("a", { href: r, children: r }, n)), n = h.pos;
          } else {
            const r = l.slice(o.pos, l.length);
            a.push(/* @__PURE__ */ k.jsx("a", { href: r, children: r }, n)), n = l.length;
            break;
          }
        } else if (o.target == " ")
          a.push(l.slice(n, o.pos)), a.push(" "), n = o.pos + o.target.length;
        else if (o.target == "[") {
          n !== o.pos && (a.push(l.slice(n, o.pos)), n = o.pos);
          const h = x(l, ["]"], o.pos + o.target.length);
          if (h.pos !== -1) {
            const r = l.slice(o.pos, h.pos + 1), u = r.slice(1, r.length - 1), w = t.keywords.find((c) => c.value == u);
            console.log("K", u, t.keywords, w);
            let m = " unknown";
            w && (m = " " + w.style), a.push([/* @__PURE__ */ k.jsxs("span", { children: [
              /* @__PURE__ */ k.jsxs("span", { className: "braket" + m, onClick: (c) => {
                C(u), c.stopPropagation();
              }, children: [
                /* @__PURE__ */ k.jsx("span", { className: "invisible", children: "[" }),
                u,
                /* @__PURE__ */ k.jsx("span", { className: "invisible", children: "]" })
              ] }),
              /* @__PURE__ */ k.jsx("span", { className: "bracket-icon", onClick: (c) => {
                D(u), c.stopPropagation();
              }, children: "[]" })
            ] }, n)]), n = h.pos + 1;
          } else
            a.push(l.slice(n, l.length)), n = l.length;
        } else {
          a.push(l.slice(n, l.length)), n = l.length;
          break;
        }
      }
      return a;
    }, [C, D, t.keywords]), $ = ie((l, n) => {
      const a = l ? t.blockStyles[l] : void 0;
      return a ? a(n, Y) : /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx("span", { className: "block-type", children: l }),
        /* @__PURE__ */ k.jsx("pre", { children: n })
      ] });
    }, [t.blockStyles]), N = ie((l) => {
      const n = l.match(/^(\s*)```.*/), a = (n == null ? void 0 : n[1]) ?? "";
      return l = l.slice(a.length).split(`
`).map((o) => a + o).join(`
`), l;
    }, []), A = ie((l) => {
      const n = l.match(/^(\s*)> /), a = (n == null ? void 0 : n[1]) ?? "";
      return l = l.slice(a.length).split(`
`).map(
        (o, h) => a + (h === 0 ? "" : "> ") + o
      ).join(`
`), l;
    }, []), K = ie((l) => {
      var n;
      if (console.log(l), J(l))
        if (Tt(l)) {
          const a = l.match(/\s*> /), o = l.slice((n = a == null ? void 0 : a[0]) == null ? void 0 : n.length);
          Y(
            /* @__PURE__ */ k.jsxs("div", { children: [
              /* @__PURE__ */ k.jsx("pre", { className: "for-copy", children: A(l) }),
              /* @__PURE__ */ k.jsx("div", { className: "no-select", children: $("pre", o) })
            ] })
          );
          return;
        } else {
          const a = _t(l), o = $(a[0], a[1]);
          Y(
            /* @__PURE__ */ k.jsxs("div", { children: [
              /* @__PURE__ */ k.jsx("pre", { className: "for-copy", children: N(l + "\n```") }),
              /* @__PURE__ */ k.jsx("div", { className: "no-select", children: o })
            ] })
          );
          return;
        }
      else {
        const a = ["elm"], o = l.match(/^(\s*)-( .*)$/);
        let h = null;
        l.indexOf("# ") === 0 || l.indexOf("## ") === 0 || l.indexOf("### ") === 0 || o && (l = o[2], h = /* @__PURE__ */ k.jsx("pre", { className: "for-copy-inline", children: o[1] + "-" })), Y(
          /* @__PURE__ */ k.jsxs("div", { className: a.join(" "), children: [
            h,
            B(l)
          ] })
        );
        return;
      }
    }, [N, A, $, B]), d = X(null), b = (l) => (n) => {
      if (n.buttons !== 0 && d.current) {
        l();
        const a = new Range();
        a.selectNodeContents(d.current);
        const o = document.getSelection();
        if (!o) throw new Error("selection is null");
        o.empty(), o.addRange(a);
      }
    }, R = Ue(t.value), O = R[0], W = R[1];
    return G(() => {
      K(t.value);
    }, [K, t.value]), J(W) ? /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: U(t.value, t.isFocus, t.isSelect),
        ref: d,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ k.jsx(
            "div",
            {
              className: ["line-item"].concat(M(t.isFocus)).join(" "),
              onMouseLeave: b(t.selectThisLine),
              children: /* @__PURE__ */ k.jsx(
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
          /* @__PURE__ */ k.jsx("div", { className: "line-item", children: F })
        ]
      }
    ) : /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: U(t.value, t.isFocus, t.isSelect),
        ref: d,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ k.jsx(
            "div",
            {
              className: M(t.isFocus) + " container",
              onMouseLeave: b(t.selectThisLine),
              children: /* @__PURE__ */ k.jsx(
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
                  onKeyDown: (l) => (n) => {
                    n.key === "Enter" && n.keyCode === 13 && l.selection !== "" ? n.preventDefault() : t.onKeyDown(O, W)(n);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: f(t.isFocus), children: F })
        ]
      }
    );
  }
), Dt = (g) => {
  const t = g.lines, p = g.setLines;
  let y = 0;
  t.forEach((n) => {
    n.key > y && (y = n.key);
  });
  const F = X(y);
  G(() => {
    let n = 0;
    t.forEach((a) => {
      a.key > n && (n = a.key);
    }), F.current = n;
  }, [t]);
  const Y = () => (F.current = F.current + 1, F.current), U = g.onChange;
  G(() => {
    U(t.map((n) => n.body));
  }, [t, U]);
  const M = X(!1), [f, x] = se({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [C, D] = se([0, 0]), B = (n) => n == null ? null : n instanceof HTMLElement && n.classList.contains("line") ? n : B(n.parentElement), $ = X(null);
  let N, A, K = !1;
  const d = () => {
    K = !0;
    const n = document.getSelection();
    n && (N = B(n.anchorNode), A = B(n.focusNode), (N == null ? void 0 : N.parentNode) != $.current && (N = null, A = null), N !== A && x({ row: -1, col: 0 }));
  }, b = () => {
    var n, a, o, h;
    if (K && (K = !1, N && A && N !== A)) {
      const r = new Range();
      if (r.setStart(N, 0), r.setEnd(A, A.children.length), document.getSelection().empty(), document.getSelection().addRange(r), !((n = N.dataset) != null && n.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const u = parseInt((a = N.dataset) == null ? void 0 : a.lineno);
      if (!((o = A.dataset) != null && o.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const w = parseInt((h = A.dataset) == null ? void 0 : h.lineno);
      D([u, w]);
    }
  }, R = () => () => {
    x(() => ({ row: -1, col: 0 })), K = !0;
  }, O = X(null);
  G(() => {
    var n;
    if (O.current)
      if (C[1] - C[0] >= 1) {
        O.current.style.display = "block";
        const a = (n = document.getSelection()) == null ? void 0 : n.focusNode;
        if (!a) throw new Error("focusNode is null");
        if (!(a instanceof Element))
          throw new Error("focusNode is not Element");
        const o = a.getBoundingClientRect(), h = o.bottom, r = o.x + o.width / 2;
        O.current.style.left = r + "px", O.current.style.top = h + "px";
      } else
        O.current.style.display = "none";
  }, [C]);
  const W = (n) => (a) => {
    const h = a.clipboardData.getData("text").split(/\r\n|\n/);
    if (h.length === 1)
      return !0;
    const r = [];
    let u = [], w = !1, m = "";
    return h.forEach((c) => {
      const P = c.match(/^(\s*)(```.*)/);
      w ? c.indexOf(m + "```") === 0 ? (r.push(u.join(`
`)), w = !1, u = []) : (m !== "" && c.indexOf(m) !== 0 && (r.push(u.join(`
`)), w = !1, u = [], r.push(c)), u.push(c.slice(m.length))) : P ? (w = !0, m = P[1], u.push(c)) : r.push(c);
    }), u.length !== 0 && r.push(u.join(`
`)), p((c) => (c[n] = { body: c[n].body + r[0], key: c[n].key }, c.splice(n + 1, 0, ...r.slice(1).map((P) => ({ body: P, key: Y() }))), [...c])), a.preventDefault(), !1;
  };
  G(() => {
    document.addEventListener("selectionchange", d), document.addEventListener("pointerup", b);
  }, []);
  const l = X([]);
  return G(() => {
    if (f.row !== -1 && M.current === !1) {
      const n = l.current[f.row];
      if (!n || !n.current) return;
      n.current.focus();
      let a = f.colEnd;
      (a === void 0 || a === -1) && (a = f.col), console.log("EFFECT", "col:", f.col, "end:", a), n.current.setSelectionRange(f.col, a, f.direction);
      const o = navigator.userAgent || navigator.vendor;
      if (/Android/i.test(o)) {
        const r = document.styleSheets;
        for (const u of r) {
          const w = u.cssRules || u.rules;
          for (const m of w)
            m instanceof CSSStyleRule && m.selectorText === ".line" && (m.style.wordBreak = "normal");
        }
        setTimeout(() => {
          for (const u of r) {
            const w = u.cssRules || u.rules;
            for (const m of w)
              m instanceof CSSStyleRule && m.selectorText === ".line" && (m.style.wordBreak = "break-all");
          }
        }, 100);
      }
    }
  }, [f, t]), t.forEach((n, a) => {
    l.current[a] = pt();
  }), /* @__PURE__ */ k.jsxs("div", { className: "editor", ref: $, children: [
    t.map((n, a) => /* @__PURE__ */ k.jsx(
      Pt,
      {
        key_debug: n.key,
        ref: l.current[a],
        isFocus: a === f.row,
        isSelect: C[0] <= a && a <= C[1],
        row: a,
        value: n.body,
        textPopupHandlers: g.textPopupHandlers,
        onMagicFunc: g.onMagicFunc(a),
        keywords: g.keywords,
        blockStyles: g.blockStyles,
        selectThisLine: R(),
        setLine: (o) => (h) => ((r) => {
          p((u) => (u[r].body = o + h, [...u]));
        })(a),
        setCursor: (o) => ((h) => {
          x((r) => ({
            row: h,
            col: o,
            colEnd: -1,
            direction: r.direction
          }));
        })(a),
        onPaste: W,
        onCompositionStart: () => {
          M.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          M.current = !1, console.log("composition end");
        },
        onChange: (o) => (h) => ((r) => {
          if (console.log("onChange", M.current), M.current === !1) {
            const u = h.target.selectionStart, w = h.target.selectionEnd, m = h.target.selectionDirection;
            x((c) => ({
              row: c.row,
              col: u,
              colEnd: w,
              direction: m
            }));
          }
          p((u) => (u[r].body = o + h.target.value, [...u]));
        })(a),
        onKeyDown: (o, h) => (r) => {
          let u = r.currentTarget.selectionStart, w = r.currentTarget.selectionEnd, m = r.currentTarget.selectionDirection;
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
                    direction: m
                  };
                });
                break;
              }
              r.shiftKey ? u == w ? (u--, m = "backward") : m === "forward" ? w-- : m === "backward" && u-- : (u--, w = -1), r.preventDefault(), x((c) => ({
                row: c.row,
                col: u,
                colEnd: w,
                direction: m
              }));
              break;
            }
            case "ArrowRight": {
              const c = -o.length + t[f.row].body.length;
              if (r.currentTarget != null && r.currentTarget.selectionStart === c && r.currentTarget.selectionEnd === c) {
                x((P) => P.row === t.length - 1 ? P : (r.preventDefault(), {
                  row: P.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: m
                }));
                break;
              }
              r.shiftKey ? m === "forward" ? w++ : m === "backward" && u++ : (u < w && (u = w), u++, w = -1), r.preventDefault(), x((P) => ({
                row: P.row,
                col: u,
                colEnd: w,
                direction: m
              }));
              break;
            }
            case "ArrowUp":
              J(h) && r.currentTarget != null && !xt(r.currentTarget.selectionStart, h) || (r.preventDefault(), x((c) => c.row === 0 || r.currentTarget == null ? c : {
                row: c.row - 1,
                col: r.currentTarget.selectionStart,
                colEnd: -1,
                direction: m
              }));
              break;
            case "ArrowDown":
              J(h) && r.currentTarget != null && !St(r.currentTarget.selectionStart, h) || x((c) => c.row === t.length - 1 || r.currentTarget == null ? c : (r.preventDefault(), {
                row: c.row + 1,
                col: r.currentTarget.selectionStart,
                colEnd: -1,
                direction: m
              }));
              break;
            case "Backspace":
              if (!r.currentTarget) return;
              if (o.length !== 0 && (r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0 || r.currentTarget.selectionStart === 1 && r.currentTarget.selectionEnd === 1))
                o.length !== 0 && (p((c) => (o.length === 1 ? (c[f.row].body = r.currentTarget.value.slice(1), u--, u === -1 ? u++ : u === 0 && w !== 0 && (w = 0)) : o.length > 0 && (c[f.row].body = o.slice(2) + r.currentTarget.value), [...c])), r.preventDefault());
              else if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                if (f.row === 0) break;
                const P = Ue(t[f.row - 1].body)[1].length;
                p((_) => (J(_[f.row - 1].body) ? _[f.row - 1].body += `
` + _[f.row].body : _[f.row - 1].body += _[f.row].body, _.splice(f.row, 1), [..._])), x((_) => ({
                  row: _.row - 1,
                  col: P,
                  colEnd: -1,
                  direction: m
                })), r.preventDefault();
                break;
              }
              x((c) => ({
                row: c.row,
                col: u,
                colEnd: w,
                direction: m
              }));
              break;
            case "Tab":
              p((c) => {
                if (!r.currentTarget)
                  return c;
                if (r.shiftKey)
                  o.length === 1 ? (c[f.row].body = r.currentTarget.value.slice(1), u--) : o.length > 0 && (c[f.row].body = o.slice(2) + r.currentTarget.value);
                else {
                  let P = "-";
                  J(r.currentTarget.value) && (P = " "), o.length === 0 ? (c[f.row].body = P + " " + r.currentTarget.value, u++) : c[f.row].body = "  " + o + r.currentTarget.value;
                }
                return [...c];
              }), r.preventDefault(), x((c) => ({
                row: c.row,
                col: u,
                colEnd: -1,
                direction: m
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
                  p((_) => {
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
                      { body: o + " " + z, key: Y() }
                    ), c = 1) : _.splice(f.row + 1, 0, { body: z, key: Y() }), [..._];
                  }), r.preventDefault(), x((_) => ({
                    row: _.row + 1,
                    col: c,
                    colEnd: -1,
                    direction: m
                  }));
                }
              } else
                break;
              break;
            case " ":
              console.log("space", u), (u === 0 || u === 1 && o.length >= 1) && (p((c) => {
                if (!r.currentTarget)
                  return c;
                let P = "-";
                return J(r.currentTarget.value) && (P = " "), o.length === 0 ? (c[f.row].body = P + " " + r.currentTarget.value, u++) : c[f.row].body = "  " + o + r.currentTarget.value, [...c];
              }), r.preventDefault()), x((c) => ({
                row: c.row,
                col: u,
                colEnd: -1,
                direction: m
              }));
              break;
          }
        },
        onLinkClick: g.onLinkClick,
        onSubLinkClick: g.onSubLinkClick,
        onClick: (o) => {
          if (f.row !== a) {
            const h = o.target.selectionStart;
            D([a, a]), x(() => ({ row: a, col: h }));
          }
        }
      },
      n.key
    )),
    /* @__PURE__ */ k.jsx("div", { className: "popup", ref: O, children: g.linePopupHandlers.map((n, a) => /* @__PURE__ */ k.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (n.handler(
            t.slice(C[0], C[1] + 1).map((o) => o.body),
            C
          ), D([C[1], C[1]]));
        },
        onTouchStart: () => {
          n.handler(t.slice(C[0], C[1] + 1).map((o) => o.body)), D([C[1], C[1]]);
        },
        children: n.name
      },
      a
    )) })
  ] });
};
export {
  Dt as Editor,
  J as isBlock,
  _t as parseBlock
};
