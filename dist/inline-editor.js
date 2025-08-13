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
  var h = Te, t = Symbol.for("react.element"), E = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, F = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(M, f, j) {
    var S, D = {}, B = null, $ = null;
    j !== void 0 && (B = "" + j), f.key !== void 0 && (B = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (S in f) m.call(f, S) && !Y.hasOwnProperty(S) && (D[S] = f[S]);
    if (M && M.defaultProps) for (S in f = M.defaultProps, f) D[S] === void 0 && (D[S] = f[S]);
    return { $$typeof: t, type: M, key: B, ref: $, props: D, _owner: F.current };
  }
  return ae.Fragment = E, ae.jsx = H, ae.jsxs = H, ae;
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
    var h = Te, t = Symbol.for("react.element"), E = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), M = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), A = Symbol.iterator, N = "@@iterator";
    function K(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = A && e[A] || e[N];
      return typeof o == "function" ? o : null;
    }
    var d = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), v = 1; v < o; v++)
          s[v - 1] = arguments[v];
        x("error", e, s);
      }
    }
    function x(e, o, s) {
      {
        var v = d.ReactDebugCurrentFrame, _ = v.getStackAddendum();
        _ !== "" && (o += "%s", s = s.concat([_]));
        var P = s.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, P);
      }
    }
    var O = !1, W = !1, l = !1, n = !1, a = !1, r;
    r = Symbol.for("react.module.reference");
    function g(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === Y || a || e === F || e === j || e === S || n || e === $ || O || W || l || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === D || e.$$typeof === H || e.$$typeof === M || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === r || e.getModuleId !== void 0));
    }
    function i(e, o, s) {
      var v = e.displayName;
      if (v)
        return v;
      var _ = o.displayName || o.name || "";
      return _ !== "" ? s + "(" + _ + ")" : s;
    }
    function c(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case E:
          return "Portal";
        case Y:
          return "Profiler";
        case F:
          return "StrictMode";
        case j:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            var o = e;
            return c(o) + ".Consumer";
          case H:
            var s = e;
            return c(s._context) + ".Provider";
          case f:
            return i(e, e.render, "ForwardRef");
          case D:
            var v = e.displayName || null;
            return v !== null ? v : y(e.type) || "Memo";
          case B: {
            var _ = e, P = _._payload, R = _._init;
            try {
              return y(R(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, u = 0, p, C, Z, z, re, Ce, Re;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ve() {
      {
        if (u === 0) {
          p = console.log, C = console.info, Z = console.warn, z = console.error, re = console.group, Ce = console.groupCollapsed, Re = console.groupEnd;
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
        u++;
      }
    }
    function qe() {
      {
        if (u--, u === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, e, {
              value: p
            }),
            info: b({}, e, {
              value: C
            }),
            warn: b({}, e, {
              value: Z
            }),
            error: b({}, e, {
              value: z
            }),
            group: b({}, e, {
              value: re
            }),
            groupCollapsed: b({}, e, {
              value: Ce
            }),
            groupEnd: b({}, e, {
              value: Re
            })
          });
        }
        u < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = d.ReactCurrentDispatcher, he;
    function ce(e, o, s) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (_) {
            var v = _.stack.trim().match(/\n( *(at )?)/);
            he = v && v[1] || "";
          }
        return `
` + he + e;
      }
    }
    var ve = !1, ue;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new Je();
    }
    function xe(e, o) {
      if (!e || ve)
        return "";
      {
        var s = ue.get(e);
        if (s !== void 0)
          return s;
      }
      var v;
      ve = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = ge.current, ge.current = null, Ve();
      try {
        if (o) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (V) {
              v = V;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (V) {
              v = V;
            }
            e.call(R.prototype);
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
          for (var k = V.stack.split(`
`), U = v.stack.split(`
`), I = k.length - 1, L = U.length - 1; I >= 1 && L >= 0 && k[I] !== U[L]; )
            L--;
          for (; I >= 1 && L >= 0; I--, L--)
            if (k[I] !== U[L]) {
              if (I !== 1 || L !== 1)
                do
                  if (I--, L--, L < 0 || k[I] !== U[L]) {
                    var q = `
` + k[I].replace(" at new ", " at ");
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && ue.set(e, q), q;
                  }
                while (I >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        ve = !1, ge.current = P, qe(), Error.prepareStackTrace = _;
      }
      var te = e ? e.displayName || e.name : "", Q = te ? ce(te) : "";
      return typeof e == "function" && ue.set(e, Q), Q;
    }
    function Ge(e, o, s) {
      return xe(e, !1);
    }
    function ze(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function fe(e, o, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, ze(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case j:
          return ce("Suspense");
        case S:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ge(e.render);
          case D:
            return fe(e.type, o, s);
          case B: {
            var v = e, _ = v._payload, P = v._init;
            try {
              return fe(P(_), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, _e = {}, je = d.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var o = e._owner, s = fe(e.type, e._source, o ? o.type : null);
        je.setExtraStackFrame(s);
      } else
        je.setExtraStackFrame(null);
    }
    function Xe(e, o, s, v, _) {
      {
        var P = Function.call.bind(ne);
        for (var R in e)
          if (P(e, R)) {
            var k = void 0;
            try {
              if (typeof e[R] != "function") {
                var U = Error((v || "React class") + ": " + s + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              k = e[R](o, R, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              k = I;
            }
            k && !(k instanceof Error) && (de(_), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, R, typeof k), de(null)), k instanceof Error && !(k.message in _e) && (_e[k.message] = !0, de(_), w("Failed %s type: %s", s, k.message), de(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ye(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Pe(e);
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
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nt(e) {
      if (ne.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ot(e, o) {
      if (typeof e.ref == "string" && oe.current && o && oe.current.stateNode !== o) {
        var s = y(oe.current.type);
        me[s] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(oe.current.type), e.ref), me[s] = !0);
      }
    }
    function it(e, o) {
      {
        var s = function() {
          De || (De = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function at(e, o) {
      {
        var s = function() {
          Fe || (Fe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var lt = function(e, o, s, v, _, P, R) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: s,
        props: R,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function st(e, o, s, v, _) {
      {
        var P, R = {}, k = null, U = null;
        s !== void 0 && (Oe(s), k = "" + s), nt(o) && (Oe(o.key), k = "" + o.key), rt(o) && (U = o.ref, ot(o, _));
        for (P in o)
          ne.call(o, P) && !tt.hasOwnProperty(P) && (R[P] = o[P]);
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (P in I)
            R[P] === void 0 && (R[P] = I[P]);
        }
        if (k || U) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && it(R, L), U && at(R, L);
        }
        return lt(e, k, U, _, v, oe.current, R);
      }
    }
    var be = d.ReactCurrentOwner, Ae = d.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var o = e._owner, s = fe(e.type, e._source, o ? o.type : null);
        Ae.setExtraStackFrame(s);
      } else
        Ae.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ne() {
      {
        if (be.current) {
          var e = y(be.current.type);
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
    var Ie = {};
    function ut(e) {
      {
        var o = Ne();
        if (!o) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (o = `

Check the top-level render call using <` + s + ">.");
        }
        return o;
      }
    }
    function Le(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = ut(o);
        if (Ie[s])
          return;
        Ie[s] = !0;
        var v = "";
        e && e._owner && e._owner !== be.current && (v = " It was passed a child from " + y(e._owner.type) + "."), ee(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), ee(null);
      }
    }
    function Me(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var v = e[s];
            pe(v) && Le(v, o);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var _ = K(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var P = _.call(e), R; !(R = P.next()).done; )
              pe(R.value) && Le(R.value, o);
        }
      }
    }
    function ft(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var s;
        if (typeof o == "function")
          s = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === D))
          s = o.propTypes;
        else
          return;
        if (s) {
          var v = y(o);
          Xe(s, e.props, "prop", v, e);
        } else if (o.PropTypes !== void 0 && !we) {
          we = !0;
          var _ = y(o);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var o = Object.keys(e.props), s = 0; s < o.length; s++) {
          var v = o[s];
          if (v !== "children" && v !== "key") {
            ee(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var We = {};
    function $e(e, o, s, v, _, P) {
      {
        var R = g(e);
        if (!R) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = ct();
          U ? k += U : k += Ne();
          var I;
          e === null ? I = "null" : ye(e) ? I = "array" : e !== void 0 && e.$$typeof === t ? (I = "<" + (y(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : I = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, k);
        }
        var L = st(e, o, s, _, P);
        if (L == null)
          return L;
        if (R) {
          var q = o.children;
          if (q !== void 0)
            if (v)
              if (ye(q)) {
                for (var te = 0; te < q.length; te++)
                  Me(q[te], e);
                Object.freeze && Object.freeze(q);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(q, e);
        }
        if (ne.call(o, "key")) {
          var Q = y(e), V = Object.keys(o).filter(function(bt) {
            return bt !== "key";
          }), Ee = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[Q + Ee]) {
            var mt = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, Q, mt, Q), We[Q + Ee] = !0;
          }
        }
        return e === m ? dt(L) : ft(L), L;
      }
    }
    function gt(e, o, s) {
      return $e(e, o, s, !0);
    }
    function ht(e, o, s) {
      return $e(e, o, s, !1);
    }
    var vt = ht, yt = gt;
    le.Fragment = m, le.jsx = vt, le.jsxs = yt;
  }()), le;
}
process.env.NODE_ENV === "production" ? ke.exports = Et() : ke.exports = kt();
var T = ke.exports;
function J(h, t) {
  const E = h.match(/^(\s*)(```|> )/);
  return t === !0 ? E : E != null;
}
const Tt = (h) => h.match(/^(\s*)> /) != null, Ct = (h) => h.split(/[\r\n]/), Rt = (h) => h.split(/[\r\n]/).length, Ue = (h, t) => {
  const E = t.split(/[\r\n]/);
  let m = 0;
  for (let F = 0; F < E.length; F++)
    if (m += E[F].length + 1, m > h)
      return [h - (m - E[F].length - 1), F];
  throw new Error("error getPos");
}, St = (h, t) => {
  const E = Ue(h, t), m = Rt(t);
  return E[1] === m - 1;
}, xt = (h, t) => Ue(h, t)[1] === 0, _t = (h) => {
  const t = h.match(/^\s*`{3}(.*)/), E = Ct(h).slice(1).join(`
`);
  return [t == null ? void 0 : t[1], E];
}, He = (h) => {
  const t = h.match(/^(\s*-)( .*)$/);
  let E = "";
  if (t)
    h = t[2], E = t[1];
  else {
    const m = h.match(/^(\s*)(```.*|> )/);
    m && (E = m[1], h = h.slice(m[1].length));
  }
  return [E, h];
}, Ye = Te.forwardRef(
  function(t, E) {
    const [m, F] = se({
      prefix: "",
      selection: "",
      suffix: ""
    }), Y = () => {
      F({ prefix: "", selection: "", suffix: "" });
    }, [H, M] = se({
      index: 0
    }), f = (d, w) => {
      let x = 0, O = "", W = !1;
      for (let n = 0; n < d.length; n++) {
        const a = d[n];
        a === "[" ? (x++, O = "") : a === "]" ? (x > 0 && (x--, O = "", W = !0), x === 0 && (W = !1)) : x > 0 && !W && (O += a);
      }
      let l = "";
      if (x > 0) {
        let n = 0, a = !1;
        for (let r = 0; r < w.length; r++) {
          const g = w[r];
          g === "[" ? n++ : g === "]" ? (n--, a = !0) : a || (l += g);
        }
        return n === 0 && (l = ""), O + l;
      }
      return "";
    }, j = (d) => {
      let w = d.length - 1;
      for (let x = d.length - 1; x >= 0; x--)
        if (d[x] === "[") {
          w = x;
          break;
        }
      return d.slice(0, -(d.length - 1 - w));
    }, S = (d) => {
      let w = 0;
      for (let x = 0; x < d.length; x++)
        if (d[x] === "]") {
          w = x;
          break;
        }
      return d.slice(w);
    }, D = f(m.prefix, m.suffix);
    G(() => {
      !N.current || !K.current || (N.current.style.display = "inline", m.selection === "" && D === "" ? K.current.style.display = "none" : K.current.style.display = "inline", K.current.style.left = N.current.getBoundingClientRect().width + "px", K.current.style.top = N.current.getBoundingClientRect().height + "px", N.current.style.display = "none");
    }, [m, D]), G(() => {
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
    let $ = t.popupHandlers, A = !1;
    m.selection === "" && D !== "" && ($ = t.keywords.map((d) => d.value).filter((d) => d.toLowerCase().indexOf(D.toLowerCase()) != -1).map((d, w) => ({
      name: d,
      handler: () => {
        const x = j(m.prefix), O = $[w].name;
        let W = S(m.suffix), l = (x + O).length;
        return (W.length == 0 || W[0] != "]") && (W = "]" + W, l += 1), {
          value: x + O + W,
          column: l
        };
      }
    })), $.length > 0 && (A = !0));
    const N = X(null), K = X(null);
    return /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: t.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ T.jsx(
            "textarea",
            {
              ref: E,
              value: t.value,
              onPaste: t.onPaste,
              onCompositionStart: t.onCompositionStart,
              onCompositionEnd: (d) => {
                t.onCompositionEnd(d), B(d);
              },
              onChange: t.onChange,
              onKeyDown: (d) => {
                if (d.key === "Enter" && d.keyCode === 13 && A) {
                  const w = $[H.index].handler(null);
                  t.setLine(w.value), t.setCursor(w.column), d.preventDefault();
                } else d.key == "Tab" && A ? (M((w) => {
                  let x = w.index + 1;
                  return x >= $.length && (x = 0), { index: x };
                }), d.preventDefault()) : d.key == "Enter" && d.shiftKey ? (t.onMagicFunc(), d.preventDefault()) : t.onKeyDown(m)(d);
              },
              onSelect: B
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: "popup", ref: K, children: $.map((d, w) => /* @__PURE__ */ T.jsx(
            "div",
            {
              className: H.index == w ? "selected" : "",
              onClick: () => {
                const x = d.handler(m);
                t.setLine(x.value), t.setCursor(x.column), Y();
              },
              children: d.name
            },
            w
          )) }),
          /* @__PURE__ */ T.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: N, children: m.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), jt = (h, t = null) => {
  const E = X(t);
  return G(() => {
    h && (typeof h == "function" ? h(E.current) : h.current = E.current);
  }, [h]), E;
}, Pt = wt(
  function(t, E) {
    const m = jt(E), [F, Y] = se();
    G(() => {
      if (!m.current) return;
      const l = m.current.style.display;
      m.current.style.display = "block", m.current.style.height = "0px", m.current.style.height = m.current.scrollHeight + "px", m.current.style.display = l;
    }, [t.value, m, t.isFocus]);
    const H = (l, n, a) => {
      var i;
      const r = ["line"], g = l.match(/^(\s*)- /);
      if (l.indexOf("# ") === 0)
        r.push("h1-style");
      else if (l.indexOf("## ") === 0)
        r.push("h2-style");
      else if (l.indexOf("### ") === 0)
        r.push("h3-style");
      else if (g)
        r.push("list-style"), r.push("list-indent-" + g[1].length / 2);
      else if (J(l)) {
        const c = J(l, !0);
        r.push("list-indent-" + (((i = c == null ? void 0 : c[1]) == null ? void 0 : i.length) ?? 0) / 2);
      }
      return n && r.push("focus"), a && r.push("select"), r.join(" ");
    }, M = (l) => l ? [] : ["hide"], f = (l) => l ? "hide" : "", j = (l, n, a) => {
      let r = -1, g = "";
      return n.forEach(function(i) {
        const c = l.indexOf(i, a);
        c !== -1 && (r === -1 || r > c) && (r = c, g = i);
      }), { pos: r, target: g };
    }, S = t.onLinkClick, D = t.onSubLinkClick, B = ie((l) => {
      let n = 0;
      const a = [];
      for (; ; ) {
        const r = j(l, ["http://", "https://", " ", "["], n);
        if (r.target === "https://" || r.target === "http://") {
          n !== r.pos && a.push(l.slice(n, r.pos));
          const g = j(
            l,
            [" ", "\r", `
`],
            r.pos + r.target.length
          );
          if (g.pos !== -1) {
            const i = l.slice(r.pos, g.pos);
            a.push(/* @__PURE__ */ T.jsxs("a", { href: i, children: [
              "AAA",
              decodeURIComponent(i)
            ] }, n)), n = g.pos;
          } else {
            const i = l.slice(r.pos, l.length);
            a.push(/* @__PURE__ */ T.jsxs("a", { href: i, children: [
              "AAA",
              decodeURIComponent(i)
            ] }, n)), n = l.length;
            break;
          }
        } else if (r.target == " ")
          a.push(l.slice(n, r.pos)), a.push(" "), n = r.pos + r.target.length;
        else if (r.target == "[") {
          n !== r.pos && (a.push(l.slice(n, r.pos)), n = r.pos);
          const g = j(l, ["]"], r.pos + r.target.length);
          if (g.pos !== -1) {
            const i = l.slice(r.pos, g.pos + 1), c = i.slice(1, i.length - 1), y = t.keywords.find((u) => u.value == c);
            console.log("K", c, t.keywords, y);
            let b = " unknown";
            y && (b = " " + y.style), a.push([/* @__PURE__ */ T.jsxs("span", { children: [
              /* @__PURE__ */ T.jsxs("span", { className: "braket" + b, onClick: (u) => {
                S(c), u.stopPropagation();
              }, children: [
                /* @__PURE__ */ T.jsx("span", { className: "invisible", children: "[" }),
                c,
                /* @__PURE__ */ T.jsx("span", { className: "invisible", children: "]" })
              ] }),
              /* @__PURE__ */ T.jsx("span", { className: "bracket-icon", onClick: (u) => {
                D(c), u.stopPropagation();
              }, children: "[]" })
            ] }, n)]), n = g.pos + 1;
          } else
            a.push(l.slice(n, l.length)), n = l.length;
        } else {
          a.push(l.slice(n, l.length)), n = l.length;
          break;
        }
      }
      return a;
    }, [S, D, t.keywords]), $ = ie((l, n) => {
      const a = l ? t.blockStyles[l] : void 0;
      return a ? a(n, Y) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("span", { className: "block-type", children: l }),
        /* @__PURE__ */ T.jsx("pre", { children: n })
      ] });
    }, [t.blockStyles]), A = ie((l) => {
      const n = l.match(/^(\s*)```.*/), a = (n == null ? void 0 : n[1]) ?? "";
      return l = l.slice(a.length).split(`
`).map((r) => a + r).join(`
`), l;
    }, []), N = ie((l) => {
      const n = l.match(/^(\s*)> /), a = (n == null ? void 0 : n[1]) ?? "";
      return l = l.slice(a.length).split(`
`).map(
        (r, g) => a + (g === 0 ? "" : "> ") + r
      ).join(`
`), l;
    }, []), K = ie((l) => {
      var n;
      if (console.log(l), J(l))
        if (Tt(l)) {
          const a = l.match(/\s*> /), r = l.slice((n = a == null ? void 0 : a[0]) == null ? void 0 : n.length);
          Y(
            /* @__PURE__ */ T.jsxs("div", { children: [
              /* @__PURE__ */ T.jsx("pre", { className: "for-copy", children: N(l) }),
              /* @__PURE__ */ T.jsx("div", { className: "no-select", children: $("pre", r) })
            ] })
          );
          return;
        } else {
          const a = _t(l), r = $(a[0], a[1]);
          Y(
            /* @__PURE__ */ T.jsxs("div", { children: [
              /* @__PURE__ */ T.jsx("pre", { className: "for-copy", children: A(l + "\n```") }),
              /* @__PURE__ */ T.jsx("div", { className: "no-select", children: r })
            ] })
          );
          return;
        }
      else {
        const a = ["elm"], r = l.match(/^(\s*)-( .*)$/);
        let g = null;
        l.indexOf("# ") === 0 || l.indexOf("## ") === 0 || l.indexOf("### ") === 0 || r && (l = r[2], g = /* @__PURE__ */ T.jsx("pre", { className: "for-copy-inline", children: r[1] + "-" })), Y(
          /* @__PURE__ */ T.jsxs("div", { className: a.join(" "), children: [
            g,
            B(l)
          ] })
        );
        return;
      }
    }, [A, N, $, B]), d = X(null), w = (l) => (n) => {
      if (n.buttons !== 0 && d.current) {
        l();
        const a = new Range();
        a.selectNodeContents(d.current);
        const r = document.getSelection();
        if (!r) throw new Error("selection is null");
        r.empty(), r.addRange(a);
      }
    }, x = He(t.value), O = x[0], W = x[1];
    return G(() => {
      K(t.value);
    }, [K, t.value]), J(W) ? /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: H(t.value, t.isFocus, t.isSelect),
        ref: d,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ T.jsx(
            "div",
            {
              className: ["line-item"].concat(M(t.isFocus)).join(" "),
              onMouseLeave: w(t.selectThisLine),
              children: /* @__PURE__ */ T.jsx(
                Ye,
                {
                  ref: m,
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
          /* @__PURE__ */ T.jsx("div", { className: "line-item", children: F })
        ]
      }
    ) : /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: H(t.value, t.isFocus, t.isSelect),
        ref: d,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ T.jsx(
            "div",
            {
              className: M(t.isFocus) + " container",
              onMouseLeave: w(t.selectThisLine),
              children: /* @__PURE__ */ T.jsx(
                Ye,
                {
                  ref: m,
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
          /* @__PURE__ */ T.jsx("div", { className: f(t.isFocus), children: F })
        ]
      }
    );
  }
), Dt = (h) => {
  const t = h.lines, E = h.setLines;
  let m = 0;
  t.forEach((n) => {
    n.key > m && (m = n.key);
  });
  const F = X(m);
  G(() => {
    let n = 0;
    t.forEach((a) => {
      a.key > n && (n = a.key);
    }), F.current = n;
  }, [t]);
  const Y = () => (F.current = F.current + 1, F.current), H = h.onChange;
  G(() => {
    H(t.map((n) => n.body));
  }, [t, H]);
  const M = X(!1), [f, j] = se({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, D] = se([0, 0]), B = (n) => n == null ? null : n instanceof HTMLElement && n.classList.contains("line") ? n : B(n.parentElement), $ = X(null);
  let A, N, K = !1;
  const d = () => {
    K = !0;
    const n = document.getSelection();
    n && (A = B(n.anchorNode), N = B(n.focusNode), (A == null ? void 0 : A.parentNode) != $.current && (A = null, N = null), A !== N && j({ row: -1, col: 0 }));
  }, w = () => {
    var n, a, r, g;
    if (K && (K = !1, A && N && A !== N)) {
      const i = new Range();
      if (i.setStart(A, 0), i.setEnd(N, N.children.length), document.getSelection().empty(), document.getSelection().addRange(i), !((n = A.dataset) != null && n.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const c = parseInt((a = A.dataset) == null ? void 0 : a.lineno);
      if (!((r = N.dataset) != null && r.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const y = parseInt((g = N.dataset) == null ? void 0 : g.lineno);
      D([c, y]);
    }
  }, x = () => () => {
    j(() => ({ row: -1, col: 0 })), K = !0;
  }, O = X(null);
  G(() => {
    var n;
    if (O.current)
      if (S[1] - S[0] >= 1) {
        O.current.style.display = "block";
        const a = (n = document.getSelection()) == null ? void 0 : n.focusNode;
        if (!a) throw new Error("focusNode is null");
        if (!(a instanceof Element))
          throw new Error("focusNode is not Element");
        const r = a.getBoundingClientRect(), g = r.bottom, i = r.x + r.width / 2;
        O.current.style.left = i + "px", O.current.style.top = g + "px";
      } else
        O.current.style.display = "none";
  }, [S]);
  const W = (n) => (a) => {
    const r = a.clipboardData.items;
    for (let p = 0; p < r.length; p++)
      if (console.log(r[p]), r[p].type.indexOf("image") !== -1) {
        console.log("capture image");
        const C = r[p].getAsFile();
        if (C !== null)
          return h.onUploadImage(C, f.row), !1;
      }
    const i = a.clipboardData.getData("text").split(/\r\n|\n/);
    if (i.length === 1)
      return !0;
    const c = [];
    let y = [], b = !1, u = "";
    return i.forEach((p) => {
      const C = p.match(/^(\s*)(```.*)/);
      b ? p.indexOf(u + "```") === 0 ? (c.push(y.join(`
`)), b = !1, y = []) : (u !== "" && p.indexOf(u) !== 0 && (c.push(y.join(`
`)), b = !1, y = [], c.push(p)), y.push(p.slice(u.length))) : C ? (b = !0, u = C[1], y.push(p)) : c.push(p);
    }), y.length !== 0 && c.push(y.join(`
`)), E((p) => (p[n] = { body: p[n].body + c[0], key: p[n].key }, p.splice(n + 1, 0, ...c.slice(1).map((C) => ({ body: C, key: Y() }))), [...p])), a.preventDefault(), !1;
  };
  G(() => {
    document.addEventListener("selectionchange", d), document.addEventListener("pointerup", w);
  }, []);
  const l = X([]);
  return G(() => {
    if (f.row !== -1 && M.current === !1) {
      const n = l.current[f.row];
      if (!n || !n.current) return;
      n.current.focus();
      let a = f.colEnd;
      (a === void 0 || a === -1) && (a = f.col), console.log("EFFECT", "col:", f.col, "end:", a), n.current.setSelectionRange(f.col, a, f.direction);
      const r = navigator.userAgent || navigator.vendor;
      if (/Android/i.test(r)) {
        const i = document.styleSheets;
        for (const c of i) {
          const y = c.cssRules || c.rules;
          for (const b of y)
            b instanceof CSSStyleRule && b.selectorText === ".line" && (b.style.wordBreak = "normal");
        }
        setTimeout(() => {
          for (const c of i) {
            const y = c.cssRules || c.rules;
            for (const b of y)
              b instanceof CSSStyleRule && b.selectorText === ".line" && (b.style.wordBreak = "break-all");
          }
        }, 100);
      }
    }
  }, [f, t]), t.forEach((n, a) => {
    l.current[a] = pt();
  }), /* @__PURE__ */ T.jsxs("div", { className: "editor", ref: $, children: [
    t.map((n, a) => /* @__PURE__ */ T.jsx(
      Pt,
      {
        key_debug: n.key,
        ref: l.current[a],
        isFocus: a === f.row,
        isSelect: S[0] <= a && a <= S[1],
        row: a,
        value: n.body,
        textPopupHandlers: h.textPopupHandlers,
        onMagicFunc: h.onMagicFunc(a),
        keywords: h.keywords,
        blockStyles: h.blockStyles,
        selectThisLine: x(),
        setLine: (r) => (g) => ((i) => {
          E((c) => (c[i].body = r + g, [...c]));
        })(a),
        setCursor: (r) => ((g) => {
          j((i) => ({
            row: g,
            col: r,
            colEnd: -1,
            direction: i.direction
          }));
        })(a),
        onPaste: W,
        onCompositionStart: () => {
          M.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          M.current = !1, console.log("composition end");
        },
        onChange: (r) => (g) => ((i) => {
          if (console.log("onChange", M.current), M.current === !1) {
            const c = g.target.selectionStart, y = g.target.selectionEnd, b = g.target.selectionDirection;
            j((u) => ({
              row: u.row,
              col: c,
              colEnd: y,
              direction: b
            }));
          }
          E((c) => (c[i].body = r + g.target.value, [...c]));
        })(a),
        onKeyDown: (r, g) => (i) => {
          let c = i.currentTarget.selectionStart, y = i.currentTarget.selectionEnd, b = i.currentTarget.selectionDirection;
          switch (i.key) {
            case "ArrowLeft": {
              if (i.currentTarget != null && i.currentTarget.selectionStart === 0 && i.currentTarget.selectionEnd === 0) {
                i.preventDefault(), j((u) => {
                  if (u.row === 0) return u;
                  const p = t[f.row - 1].body.length;
                  return {
                    row: u.row - 1,
                    col: p,
                    colEnd: -1,
                    direction: b
                  };
                });
                break;
              }
              i.shiftKey ? c == y ? (c--, b = "backward") : b === "forward" ? y-- : b === "backward" && c-- : (c--, y = -1), i.preventDefault(), j((u) => ({
                row: u.row,
                col: c,
                colEnd: y,
                direction: b
              }));
              break;
            }
            case "ArrowRight": {
              const u = -r.length + t[f.row].body.length;
              if (i.currentTarget != null && i.currentTarget.selectionStart === u && i.currentTarget.selectionEnd === u) {
                j((p) => p.row === t.length - 1 ? p : (i.preventDefault(), {
                  row: p.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: b
                }));
                break;
              }
              i.shiftKey ? b === "forward" ? y++ : b === "backward" && c++ : (c < y && (c = y), c++, y = -1), i.preventDefault(), j((p) => ({
                row: p.row,
                col: c,
                colEnd: y,
                direction: b
              }));
              break;
            }
            case "ArrowUp":
              J(g) && i.currentTarget != null && !xt(i.currentTarget.selectionStart, g) || (i.preventDefault(), j((u) => u.row === 0 || i.currentTarget == null ? u : {
                row: u.row - 1,
                col: i.currentTarget.selectionStart,
                colEnd: -1,
                direction: b
              }));
              break;
            case "ArrowDown":
              J(g) && i.currentTarget != null && !St(i.currentTarget.selectionStart, g) || j((u) => u.row === t.length - 1 || i.currentTarget == null ? u : (i.preventDefault(), {
                row: u.row + 1,
                col: i.currentTarget.selectionStart,
                colEnd: -1,
                direction: b
              }));
              break;
            case "Backspace":
              if (!i.currentTarget) return;
              if (r.length !== 0 && (i.currentTarget.selectionStart === 0 && i.currentTarget.selectionEnd === 0 || i.currentTarget.selectionStart === 1 && i.currentTarget.selectionEnd === 1))
                r.length !== 0 && (E((u) => (r.length === 1 ? (u[f.row].body = i.currentTarget.value.slice(1), c--, c === -1 ? c++ : c === 0 && y !== 0 && (y = 0)) : r.length > 0 && (u[f.row].body = r.slice(2) + i.currentTarget.value), [...u])), i.preventDefault());
              else if (i.currentTarget != null && i.currentTarget.selectionStart === 0 && i.currentTarget.selectionEnd === 0) {
                if (f.row === 0) break;
                const p = He(t[f.row - 1].body)[1].length;
                E((C) => (J(C[f.row - 1].body) ? C[f.row - 1].body += `
` + C[f.row].body : C[f.row - 1].body += C[f.row].body, C.splice(f.row, 1), [...C])), j((C) => ({
                  row: C.row - 1,
                  col: p,
                  colEnd: -1,
                  direction: b
                })), i.preventDefault();
                break;
              }
              j((u) => ({
                row: u.row,
                col: c,
                colEnd: y,
                direction: b
              }));
              break;
            case "Tab":
              E((u) => {
                if (!i.currentTarget)
                  return u;
                if (i.shiftKey)
                  r.length === 1 ? (u[f.row].body = i.currentTarget.value.slice(1), c--) : r.length > 0 && (u[f.row].body = r.slice(2) + i.currentTarget.value);
                else {
                  let p = "-";
                  J(i.currentTarget.value) && (p = " "), r.length === 0 ? (u[f.row].body = p + " " + i.currentTarget.value, c++) : u[f.row].body = "  " + r + i.currentTarget.value;
                }
                return [...u];
              }), i.preventDefault(), j((u) => ({
                row: u.row,
                col: c,
                colEnd: -1,
                direction: b
              }));
              break;
            case "Enter":
              if (i.keyCode === 13) {
                if (J(g) && !i.shiftKey)
                  break;
                {
                  if (i.currentTarget == null || i.currentTarget.selectionStart === void 0) {
                    i.preventDefault();
                    break;
                  }
                  let u = 0;
                  const p = i.currentTarget.selectionStart;
                  E((C) => {
                    const Z = r.length + p;
                    let z = C[f.row].body.slice(Z);
                    if (J(g)) {
                      const re = C[f.row].body;
                      re[re.length - 1] === `
` ? C[f.row].body = C[f.row].body.slice(
                        0,
                        Z - 1
                      ) : C[f.row].body = C[f.row].body.slice(
                        0,
                        Z
                      ), z.length > 0 && z[0] === `
` && (z = z.slice(1));
                    } else
                      C[f.row].body = C[f.row].body.slice(
                        0,
                        Z
                      );
                    return r.length !== 0 ? (C.splice(
                      f.row + 1,
                      0,
                      { body: r + " " + z, key: Y() }
                    ), u = 1) : C.splice(f.row + 1, 0, { body: z, key: Y() }), [...C];
                  }), i.preventDefault(), j((C) => ({
                    row: C.row + 1,
                    col: u,
                    colEnd: -1,
                    direction: b
                  }));
                }
              } else
                break;
              break;
            case " ":
              console.log("space", c), (c === 0 || c === 1 && r.length >= 1) && (E((u) => {
                if (!i.currentTarget)
                  return u;
                let p = "-";
                return J(i.currentTarget.value) && (p = " "), r.length === 0 ? (u[f.row].body = p + " " + i.currentTarget.value, c++) : u[f.row].body = "  " + r + i.currentTarget.value, [...u];
              }), i.preventDefault()), j((u) => ({
                row: u.row,
                col: c,
                colEnd: -1,
                direction: b
              }));
              break;
          }
        },
        onLinkClick: h.onLinkClick,
        onSubLinkClick: h.onSubLinkClick,
        onClick: (r) => {
          if (f.row !== a) {
            const g = r.target.selectionStart;
            D([a, a]), j(() => ({ row: a, col: g }));
          }
        }
      },
      n.key
    )),
    /* @__PURE__ */ T.jsx("div", { className: "popup", ref: O, children: h.linePopupHandlers.map((n, a) => /* @__PURE__ */ T.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (n.handler(
            t.slice(S[0], S[1] + 1).map((r) => r.body),
            S
          ), D([S[1], S[1]]));
        },
        onTouchStart: () => {
          n.handler(t.slice(S[0], S[1] + 1).map((r) => r.body)), D([S[1], S[1]]);
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
