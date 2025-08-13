import Te, { useState as se, useEffect as G, useRef as X, forwardRef as wt, useCallback as ie, createRef as bt } from "react";
var ke = { exports: {} }, le = {};
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
  if (Be) return le;
  Be = 1;
  var h = Te, t = Symbol.for("react.element"), E = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, F = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(M, f, _) {
    var S, D = {}, B = null, $ = null;
    _ !== void 0 && (B = "" + _), f.key !== void 0 && (B = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (S in f) p.call(f, S) && !Y.hasOwnProperty(S) && (D[S] = f[S]);
    if (M && M.defaultProps) for (S in f = M.defaultProps, f) D[S] === void 0 && (D[S] = f[S]);
    return { $$typeof: t, type: M, key: B, ref: $, props: D, _owner: F.current };
  }
  return le.Fragment = E, le.jsx = H, le.jsxs = H, le;
}
var ae = {};
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
    var h = Te, t = Symbol.for("react.element"), E = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), H = Symbol.for("react.provider"), M = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), N = Symbol.iterator, A = "@@iterator";
    function K(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = N && e[N] || e[A];
      return typeof i == "function" ? i : null;
    }
    var d = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), y = 1; y < i; y++)
          s[y - 1] = arguments[y];
        x("error", e, s);
      }
    }
    function x(e, i, s) {
      {
        var y = d.ReactDebugCurrentFrame, j = y.getStackAddendum();
        j !== "" && (i += "%s", s = s.concat([j]));
        var P = s.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, P);
      }
    }
    var O = !1, W = !1, a = !1, r = !1, l = !1, n;
    n = Symbol.for("react.module.reference");
    function g(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === Y || l || e === F || e === _ || e === S || r || e === $ || O || W || a || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === D || e.$$typeof === H || e.$$typeof === M || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === n || e.getModuleId !== void 0));
    }
    function o(e, i, s) {
      var y = e.displayName;
      if (y)
        return y;
      var j = i.displayName || i.name || "";
      return j !== "" ? s + "(" + j + ")" : s;
    }
    function c(e) {
      return e.displayName || "Context";
    }
    function v(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case E:
          return "Portal";
        case Y:
          return "Profiler";
        case F:
          return "StrictMode";
        case _:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            var i = e;
            return c(i) + ".Consumer";
          case H:
            var s = e;
            return c(s._context) + ".Provider";
          case f:
            return o(e, e.render, "ForwardRef");
          case D:
            var y = e.displayName || null;
            return y !== null ? y : v(e.type) || "Memo";
          case B: {
            var j = e, P = j._payload, R = j._init;
            try {
              return v(R(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var m = Object.assign, u = 0, b, C, Z, z, ne, Ce, Re;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function Ve() {
      {
        if (u === 0) {
          b = console.log, C = console.info, Z = console.warn, z = console.error, ne = console.group, Ce = console.groupCollapsed, Re = console.groupEnd;
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
            log: m({}, e, {
              value: b
            }),
            info: m({}, e, {
              value: C
            }),
            warn: m({}, e, {
              value: Z
            }),
            error: m({}, e, {
              value: z
            }),
            group: m({}, e, {
              value: ne
            }),
            groupCollapsed: m({}, e, {
              value: Ce
            }),
            groupEnd: m({}, e, {
              value: Re
            })
          });
        }
        u < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = d.ReactCurrentDispatcher, he;
    function ce(e, i, s) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (j) {
            var y = j.stack.trim().match(/\n( *(at )?)/);
            he = y && y[1] || "";
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
    function xe(e, i) {
      if (!e || ve)
        return "";
      {
        var s = ue.get(e);
        if (s !== void 0)
          return s;
      }
      var y;
      ve = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = ge.current, ge.current = null, Ve();
      try {
        if (i) {
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
              y = V;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (V) {
              y = V;
            }
            e.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            y = V;
          }
          e();
        }
      } catch (V) {
        if (V && y && typeof V.stack == "string") {
          for (var k = V.stack.split(`
`), U = y.stack.split(`
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
        ve = !1, ge.current = P, qe(), Error.prepareStackTrace = j;
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
        case _:
          return ce("Suspense");
        case S:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ge(e.render);
          case D:
            return fe(e.type, i, s);
          case B: {
            var y = e, j = y._payload, P = y._init;
            try {
              return fe(P(j), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, _e = {}, je = d.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var i = e._owner, s = fe(e.type, e._source, i ? i.type : null);
        je.setExtraStackFrame(s);
      } else
        je.setExtraStackFrame(null);
    }
    function Xe(e, i, s, y, j) {
      {
        var P = Function.call.bind(re);
        for (var R in e)
          if (P(e, R)) {
            var k = void 0;
            try {
              if (typeof e[R] != "function") {
                var U = Error((y || "React class") + ": " + s + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              k = e[R](i, R, y, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              k = I;
            }
            k && !(k instanceof Error) && (de(j), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", s, R, typeof k), de(null)), k instanceof Error && !(k.message in _e) && (_e[k.message] = !0, de(j), w("Failed %s type: %s", s, k.message), de(null));
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
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Pe(e);
    }
    var oe = d.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Fe, me;
    me = {};
    function nt(e) {
      if (re.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rt(e) {
      if (re.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ot(e, i) {
      if (typeof e.ref == "string" && oe.current && i && oe.current.stateNode !== i) {
        var s = v(oe.current.type);
        me[s] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', v(oe.current.type), e.ref), me[s] = !0);
      }
    }
    function it(e, i) {
      {
        var s = function() {
          De || (De = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function lt(e, i) {
      {
        var s = function() {
          Fe || (Fe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var at = function(e, i, s, y, j, P, R) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: i,
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
        value: y
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function st(e, i, s, y, j) {
      {
        var P, R = {}, k = null, U = null;
        s !== void 0 && (Oe(s), k = "" + s), rt(i) && (Oe(i.key), k = "" + i.key), nt(i) && (U = i.ref, ot(i, j));
        for (P in i)
          re.call(i, P) && !tt.hasOwnProperty(P) && (R[P] = i[P]);
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (P in I)
            R[P] === void 0 && (R[P] = I[P]);
        }
        if (k || U) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && it(R, L), U && lt(R, L);
        }
        return at(e, k, U, j, y, oe.current, R);
      }
    }
    var pe = d.ReactCurrentOwner, Ne = d.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var i = e._owner, s = fe(e.type, e._source, i ? i.type : null);
        Ne.setExtraStackFrame(s);
      } else
        Ne.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function be(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ae() {
      {
        if (pe.current) {
          var e = v(pe.current.type);
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
        var i = Ae();
        if (!i) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function Le(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = ut(i);
        if (Ie[s])
          return;
        Ie[s] = !0;
        var y = "";
        e && e._owner && e._owner !== pe.current && (y = " It was passed a child from " + v(e._owner.type) + "."), ee(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, y), ee(null);
      }
    }
    function Me(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var y = e[s];
            be(y) && Le(y, i);
          }
        else if (be(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = K(e);
          if (typeof j == "function" && j !== e.entries)
            for (var P = j.call(e), R; !(R = P.next()).done; )
              be(R.value) && Le(R.value, i);
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
          var y = v(i);
          Xe(s, e.props, "prop", y, e);
        } else if (i.PropTypes !== void 0 && !we) {
          we = !0;
          var j = v(i);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var i = Object.keys(e.props), s = 0; s < i.length; s++) {
          var y = i[s];
          if (y !== "children" && y !== "key") {
            ee(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var We = {};
    function $e(e, i, s, y, j, P) {
      {
        var R = g(e);
        if (!R) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = ct();
          U ? k += U : k += Ae();
          var I;
          e === null ? I = "null" : ye(e) ? I = "array" : e !== void 0 && e.$$typeof === t ? (I = "<" + (v(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : I = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, k);
        }
        var L = st(e, i, s, j, P);
        if (L == null)
          return L;
        if (R) {
          var q = i.children;
          if (q !== void 0)
            if (y)
              if (ye(q)) {
                for (var te = 0; te < q.length; te++)
                  Me(q[te], e);
                Object.freeze && Object.freeze(q);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(q, e);
        }
        if (re.call(i, "key")) {
          var Q = v(e), V = Object.keys(i).filter(function(pt) {
            return pt !== "key";
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
        return e === p ? dt(L) : ft(L), L;
      }
    }
    function gt(e, i, s) {
      return $e(e, i, s, !0);
    }
    function ht(e, i, s) {
      return $e(e, i, s, !1);
    }
    var vt = ht, yt = gt;
    ae.Fragment = p, ae.jsx = vt, ae.jsxs = yt;
  }()), ae;
}
process.env.NODE_ENV === "production" ? ke.exports = Et() : ke.exports = kt();
var T = ke.exports;
function J(h, t) {
  const E = h.match(/^(\s*)(```|> )/);
  return t === !0 ? E : E != null;
}
const Tt = (h) => h.match(/^(\s*)> /) != null, Ct = (h) => h.split(/[\r\n]/), Rt = (h) => h.split(/[\r\n]/).length, Ue = (h, t) => {
  const E = t.split(/[\r\n]/);
  let p = 0;
  for (let F = 0; F < E.length; F++)
    if (p += E[F].length + 1, p > h)
      return [h - (p - E[F].length - 1), F];
  throw new Error("error getPos");
}, St = (h, t) => {
  const E = Ue(h, t), p = Rt(t);
  return E[1] === p - 1;
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
    const p = h.match(/^(\s*)(```.*|> )/);
    p && (E = p[1], h = h.slice(p[1].length));
  }
  return [E, h];
}, Ye = Te.forwardRef(
  function(t, E) {
    const [p, F] = se({
      prefix: "",
      selection: "",
      suffix: ""
    }), Y = () => {
      F({ prefix: "", selection: "", suffix: "" });
    }, [H, M] = se({
      index: 0
    }), f = (d, w) => {
      let x = 0, O = "", W = !1;
      for (let r = 0; r < d.length; r++) {
        const l = d[r];
        l === "[" ? (x++, O = "") : l === "]" ? (x > 0 && (x--, O = "", W = !0), x === 0 && (W = !1)) : x > 0 && !W && (O += l);
      }
      let a = "";
      if (x > 0) {
        let r = 0, l = !1;
        for (let n = 0; n < w.length; n++) {
          const g = w[n];
          g === "[" ? r++ : g === "]" ? (r--, l = !0) : l || (a += g);
        }
        return r === 0 && (a = ""), O + a;
      }
      return "";
    }, _ = (d) => {
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
    }, D = f(p.prefix, p.suffix);
    G(() => {
      !A.current || !K.current || (A.current.style.display = "inline", p.selection === "" && D === "" ? K.current.style.display = "none" : K.current.style.display = "inline", K.current.style.left = A.current.getBoundingClientRect().width + "px", K.current.style.top = A.current.getBoundingClientRect().height + "px", A.current.style.display = "none");
    }, [p, D]), G(() => {
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
    p.selection === "" && D !== "" && ($ = t.keywords.map((d) => d.value).filter((d) => d.toLowerCase().indexOf(D.toLowerCase()) != -1).map((d, w) => ({
      name: d,
      handler: () => {
        const x = _(p.prefix), O = $[w].name;
        let W = S(p.suffix), a = (x + O).length;
        return (W.length == 0 || W[0] != "]") && (W = "]" + W, a += 1), {
          value: x + O + W,
          column: a
        };
      }
    })), $.length > 0 && (N = !0));
    const A = X(null), K = X(null);
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
                if (d.key === "Enter" && d.keyCode === 13 && N) {
                  const w = $[H.index].handler(null);
                  t.setLine(w.value), t.setCursor(w.column), d.preventDefault();
                } else d.key == "Tab" && N ? (M((w) => {
                  let x = w.index + 1;
                  return x >= $.length && (x = 0), { index: x };
                }), d.preventDefault()) : d.key == "Enter" && d.shiftKey ? (t.onMagicFunc(), d.preventDefault()) : t.onKeyDown(p)(d);
              },
              onSelect: B
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: "popup", ref: K, children: $.map((d, w) => /* @__PURE__ */ T.jsx(
            "div",
            {
              className: H.index == w ? "selected" : "",
              onClick: () => {
                const x = d.handler(p);
                t.setLine(x.value), t.setCursor(x.column), Y();
              },
              children: d.name
            },
            w
          )) }),
          /* @__PURE__ */ T.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: A, children: p.prefix.replace(" ", " ") })
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
    const p = jt(E), [F, Y] = se();
    G(() => {
      if (!p.current) return;
      const a = p.current.style.display;
      p.current.style.display = "block", p.current.style.height = "0px", p.current.style.height = p.current.scrollHeight + "px", p.current.style.display = a;
    }, [t.value, p, t.isFocus]);
    const H = (a, r, l) => {
      var o;
      const n = ["line"], g = a.match(/^(\s*)- /);
      if (a.indexOf("# ") === 0)
        n.push("h1-style");
      else if (a.indexOf("## ") === 0)
        n.push("h2-style");
      else if (a.indexOf("### ") === 0)
        n.push("h3-style");
      else if (g)
        n.push("list-style"), n.push("list-indent-" + g[1].length / 2);
      else if (J(a)) {
        const c = J(a, !0);
        n.push("list-indent-" + (((o = c == null ? void 0 : c[1]) == null ? void 0 : o.length) ?? 0) / 2);
      }
      return r && n.push("focus"), l && n.push("select"), n.join(" ");
    }, M = (a) => a ? [] : ["hide"], f = (a) => a ? "hide" : "", _ = (a, r, l) => {
      let n = -1, g = "";
      return r.forEach(function(o) {
        const c = a.indexOf(o, l);
        c !== -1 && (n === -1 || n > c) && (n = c, g = o);
      }), { pos: n, target: g };
    }, S = t.onLinkClick, D = t.onSubLinkClick, B = ie((a) => {
      let r = 0;
      const l = [];
      for (; ; ) {
        const n = _(a, ["http://", "https://", " ", "[", "{{"], r);
        if (n.target === "https://" || n.target === "http://") {
          r !== n.pos && l.push(a.slice(r, n.pos));
          const g = _(
            a,
            [" ", "\r", `
`],
            n.pos + n.target.length
          );
          if (g.pos !== -1) {
            const o = a.slice(n.pos, g.pos);
            l.push(/* @__PURE__ */ T.jsx("a", { href: o, children: decodeURIComponent(o) }, r)), r = g.pos;
          } else {
            const o = a.slice(n.pos, a.length);
            l.push(/* @__PURE__ */ T.jsx("a", { href: o, children: decodeURIComponent(o) }, r)), r = a.length;
            break;
          }
        } else if (n.target == " ")
          l.push(a.slice(r, n.pos)), l.push(" "), r = n.pos + n.target.length;
        else if (n.target == "[") {
          r !== n.pos && (l.push(a.slice(r, n.pos)), r = n.pos);
          const g = _(a, ["]"], n.pos + n.target.length);
          if (g.pos !== -1) {
            const o = a.slice(n.pos, g.pos + 1), c = o.slice(1, o.length - 1), v = t.keywords.find((u) => u.value == c);
            console.log("K", c, t.keywords, v);
            let m = " unknown";
            v && (m = " " + v.style), l.push([/* @__PURE__ */ T.jsxs("span", { children: [
              /* @__PURE__ */ T.jsxs("span", { className: "braket" + m, onClick: (u) => {
                S(c), u.stopPropagation();
              }, children: [
                /* @__PURE__ */ T.jsx("span", { className: "invisible", children: "[" }),
                c,
                /* @__PURE__ */ T.jsx("span", { className: "invisible", children: "]" })
              ] }),
              /* @__PURE__ */ T.jsx("span", { className: "bracket-icon", onClick: (u) => {
                D(c), u.stopPropagation();
              }, children: "[]" })
            ] }, r)]), r = g.pos + 1;
          } else
            l.push(a.slice(r, a.length)), r = a.length;
        } else if (n.target == "{{") {
          r !== n.pos && l.push(a.slice(r, n.pos));
          const g = _(a, ["}}"], n.pos + n.target.length);
          if (g.pos !== -1) {
            const o = a.slice(n.pos + 2, g.pos), [c, v] = o.split(" ", 2);
            if (Object.keys(t.inlineStyles).includes(c)) {
              const m = t.inlineStyles[c](v);
              l.push(m);
            } else
              l.push("unknown command:" + o);
            r = g.pos + 2;
          } else
            l.push(a.slice(r, a.length)), r = a.length;
        } else {
          l.push(a.slice(r, a.length)), r = a.length;
          break;
        }
      }
      return l;
    }, [S, D, t.keywords, t.inlineStyles]), $ = ie((a, r) => {
      const l = a ? t.blockStyles[a] : void 0;
      return l ? l(r, Y) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("span", { className: "block-type", children: a }),
        /* @__PURE__ */ T.jsx("pre", { children: r })
      ] });
    }, [t.blockStyles]), N = ie((a) => {
      const r = a.match(/^(\s*)```.*/), l = (r == null ? void 0 : r[1]) ?? "";
      return a = a.slice(l.length).split(`
`).map((n) => l + n).join(`
`), a;
    }, []), A = ie((a) => {
      const r = a.match(/^(\s*)> /), l = (r == null ? void 0 : r[1]) ?? "";
      return a = a.slice(l.length).split(`
`).map(
        (n, g) => l + (g === 0 ? "" : "> ") + n
      ).join(`
`), a;
    }, []), K = ie((a) => {
      var r;
      if (console.log(a), J(a))
        if (Tt(a)) {
          const l = a.match(/\s*> /), n = a.slice((r = l == null ? void 0 : l[0]) == null ? void 0 : r.length);
          Y(
            /* @__PURE__ */ T.jsxs("div", { children: [
              /* @__PURE__ */ T.jsx("pre", { className: "for-copy", children: A(a) }),
              /* @__PURE__ */ T.jsx("div", { className: "no-select", children: $("pre", n) })
            ] })
          );
          return;
        } else {
          const l = _t(a), n = $(l[0], l[1]);
          Y(
            /* @__PURE__ */ T.jsxs("div", { children: [
              /* @__PURE__ */ T.jsx("pre", { className: "for-copy", children: N(a + "\n```") }),
              /* @__PURE__ */ T.jsx("div", { className: "no-select", children: n })
            ] })
          );
          return;
        }
      else {
        const l = ["elm"], n = a.match(/^(\s*)-( .*)$/);
        let g = null;
        a.indexOf("# ") === 0 || a.indexOf("## ") === 0 || a.indexOf("### ") === 0 || n && (a = n[2], g = /* @__PURE__ */ T.jsx("pre", { className: "for-copy-inline", children: n[1] + "-" })), Y(
          /* @__PURE__ */ T.jsxs("div", { className: l.join(" "), children: [
            g,
            B(a)
          ] })
        );
        return;
      }
    }, [N, A, $, B]), d = X(null), w = (a) => (r) => {
      if (r.buttons !== 0 && d.current) {
        a();
        const l = new Range();
        l.selectNodeContents(d.current);
        const n = document.getSelection();
        if (!n) throw new Error("selection is null");
        n.empty(), n.addRange(l);
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
                  ref: p,
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
                  ref: p,
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
                  onKeyDown: (a) => (r) => {
                    r.key === "Enter" && r.keyCode === 13 && a.selection !== "" ? r.preventDefault() : t.onKeyDown(O, W)(r);
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
  let p = 0;
  t.forEach((r) => {
    r.key > p && (p = r.key);
  });
  const F = X(p);
  G(() => {
    let r = 0;
    t.forEach((l) => {
      l.key > r && (r = l.key);
    }), F.current = r;
  }, [t]);
  const Y = () => (F.current = F.current + 1, F.current), H = h.onChange;
  G(() => {
    H(t.map((r) => r.body));
  }, [t, H]);
  const M = X(!1), [f, _] = se({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, D] = se([0, 0]), B = (r) => r == null ? null : r instanceof HTMLElement && r.classList.contains("line") ? r : B(r.parentElement), $ = X(null);
  let N, A, K = !1;
  const d = () => {
    K = !0;
    const r = document.getSelection();
    r && (N = B(r.anchorNode), A = B(r.focusNode), (N == null ? void 0 : N.parentNode) != $.current && (N = null, A = null), N !== A && _({ row: -1, col: 0 }));
  }, w = () => {
    var r, l, n, g;
    if (K && (K = !1, N && A && N !== A)) {
      const o = new Range();
      if (o.setStart(N, 0), o.setEnd(A, A.children.length), document.getSelection().empty(), document.getSelection().addRange(o), !((r = N.dataset) != null && r.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const c = parseInt((l = N.dataset) == null ? void 0 : l.lineno);
      if (!((n = A.dataset) != null && n.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const v = parseInt((g = A.dataset) == null ? void 0 : g.lineno);
      D([c, v]);
    }
  }, x = () => () => {
    _(() => ({ row: -1, col: 0 })), K = !0;
  }, O = X(null);
  G(() => {
    var r;
    if (O.current)
      if (S[1] - S[0] >= 1) {
        O.current.style.display = "block";
        const l = (r = document.getSelection()) == null ? void 0 : r.focusNode;
        if (!l) throw new Error("focusNode is null");
        if (!(l instanceof Element))
          throw new Error("focusNode is not Element");
        const n = l.getBoundingClientRect(), g = n.bottom, o = n.x + n.width / 2;
        O.current.style.left = o + "px", O.current.style.top = g + "px";
      } else
        O.current.style.display = "none";
  }, [S]);
  const W = (r) => (l) => {
    const n = l.clipboardData.items;
    for (let b = 0; b < n.length; b++)
      if (console.log(n[b]), n[b].type.indexOf("image") !== -1) {
        console.log("capture image");
        const C = n[b].getAsFile();
        if (C !== null)
          return h.onUploadImage(C, f.row), !1;
      }
    const o = l.clipboardData.getData("text").split(/\r\n|\n/);
    if (o.length === 1)
      return !0;
    const c = [];
    let v = [], m = !1, u = "";
    return o.forEach((b) => {
      const C = b.match(/^(\s*)(```.*)/);
      m ? b.indexOf(u + "```") === 0 ? (c.push(v.join(`
`)), m = !1, v = []) : (u !== "" && b.indexOf(u) !== 0 && (c.push(v.join(`
`)), m = !1, v = [], c.push(b)), v.push(b.slice(u.length))) : C ? (m = !0, u = C[1], v.push(b)) : c.push(b);
    }), v.length !== 0 && c.push(v.join(`
`)), E((b) => (b[r] = { body: b[r].body + c[0], key: b[r].key }, b.splice(r + 1, 0, ...c.slice(1).map((C) => ({ body: C, key: Y() }))), [...b])), l.preventDefault(), !1;
  };
  G(() => {
    document.addEventListener("selectionchange", d), document.addEventListener("pointerup", w);
  }, []);
  const a = X([]);
  return G(() => {
    if (f.row !== -1 && M.current === !1) {
      const r = a.current[f.row];
      if (!r || !r.current) return;
      r.current.focus();
      let l = f.colEnd;
      (l === void 0 || l === -1) && (l = f.col), console.log("EFFECT", "col:", f.col, "end:", l), r.current.setSelectionRange(f.col, l, f.direction);
      const n = navigator.userAgent || navigator.vendor;
      if (/Android/i.test(n)) {
        const o = document.styleSheets;
        for (const c of o) {
          const v = c.cssRules || c.rules;
          for (const m of v)
            m instanceof CSSStyleRule && m.selectorText === ".line" && (m.style.wordBreak = "normal");
        }
        setTimeout(() => {
          for (const c of o) {
            const v = c.cssRules || c.rules;
            for (const m of v)
              m instanceof CSSStyleRule && m.selectorText === ".line" && (m.style.wordBreak = "break-all");
          }
        }, 100);
      }
    }
  }, [f, t]), t.forEach((r, l) => {
    a.current[l] = bt();
  }), /* @__PURE__ */ T.jsxs("div", { className: "editor", ref: $, children: [
    t.map((r, l) => /* @__PURE__ */ T.jsx(
      Pt,
      {
        key_debug: r.key,
        ref: a.current[l],
        isFocus: l === f.row,
        isSelect: S[0] <= l && l <= S[1],
        row: l,
        value: r.body,
        textPopupHandlers: h.textPopupHandlers,
        onMagicFunc: h.onMagicFunc(l),
        keywords: h.keywords,
        inlineStyles: h.inlineStyles,
        blockStyles: h.blockStyles,
        selectThisLine: x(),
        setLine: (n) => (g) => ((o) => {
          E((c) => (c[o].body = n + g, [...c]));
        })(l),
        setCursor: (n) => ((g) => {
          _((o) => ({
            row: g,
            col: n,
            colEnd: -1,
            direction: o.direction
          }));
        })(l),
        onPaste: W,
        onCompositionStart: () => {
          M.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          M.current = !1, console.log("composition end");
        },
        onChange: (n) => (g) => ((o) => {
          if (console.log("onChange", M.current), M.current === !1) {
            const c = g.target.selectionStart, v = g.target.selectionEnd, m = g.target.selectionDirection;
            _((u) => ({
              row: u.row,
              col: c,
              colEnd: v,
              direction: m
            }));
          }
          E((c) => (c[o].body = n + g.target.value, [...c]));
        })(l),
        onKeyDown: (n, g) => (o) => {
          let c = o.currentTarget.selectionStart, v = o.currentTarget.selectionEnd, m = o.currentTarget.selectionDirection;
          switch (o.key) {
            case "ArrowLeft": {
              if (o.currentTarget != null && o.currentTarget.selectionStart === 0 && o.currentTarget.selectionEnd === 0) {
                o.preventDefault(), _((u) => {
                  if (u.row === 0) return u;
                  const b = t[f.row - 1].body.length;
                  return {
                    row: u.row - 1,
                    col: b,
                    colEnd: -1,
                    direction: m
                  };
                });
                break;
              }
              o.shiftKey ? c == v ? (c--, m = "backward") : m === "forward" ? v-- : m === "backward" && c-- : (c--, v = -1), o.preventDefault(), _((u) => ({
                row: u.row,
                col: c,
                colEnd: v,
                direction: m
              }));
              break;
            }
            case "ArrowRight": {
              const u = -n.length + t[f.row].body.length;
              if (o.currentTarget != null && o.currentTarget.selectionStart === u && o.currentTarget.selectionEnd === u) {
                _((b) => b.row === t.length - 1 ? b : (o.preventDefault(), {
                  row: b.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: m
                }));
                break;
              }
              o.shiftKey ? m === "forward" ? v++ : m === "backward" && c++ : (c < v && (c = v), c++, v = -1), o.preventDefault(), _((b) => ({
                row: b.row,
                col: c,
                colEnd: v,
                direction: m
              }));
              break;
            }
            case "ArrowUp":
              J(g) && o.currentTarget != null && !xt(o.currentTarget.selectionStart, g) || (o.preventDefault(), _((u) => u.row === 0 || o.currentTarget == null ? u : {
                row: u.row - 1,
                col: o.currentTarget.selectionStart,
                colEnd: -1,
                direction: m
              }));
              break;
            case "ArrowDown":
              J(g) && o.currentTarget != null && !St(o.currentTarget.selectionStart, g) || _((u) => u.row === t.length - 1 || o.currentTarget == null ? u : (o.preventDefault(), {
                row: u.row + 1,
                col: o.currentTarget.selectionStart,
                colEnd: -1,
                direction: m
              }));
              break;
            case "Backspace":
              if (!o.currentTarget) return;
              if (n.length !== 0 && (o.currentTarget.selectionStart === 0 && o.currentTarget.selectionEnd === 0 || o.currentTarget.selectionStart === 1 && o.currentTarget.selectionEnd === 1))
                n.length !== 0 && (E((u) => (n.length === 1 ? (u[f.row].body = o.currentTarget.value.slice(1), c--, c === -1 ? c++ : c === 0 && v !== 0 && (v = 0)) : n.length > 0 && (u[f.row].body = n.slice(2) + o.currentTarget.value), [...u])), o.preventDefault());
              else if (o.currentTarget != null && o.currentTarget.selectionStart === 0 && o.currentTarget.selectionEnd === 0) {
                if (f.row === 0) break;
                const b = He(t[f.row - 1].body)[1].length;
                E((C) => (J(C[f.row - 1].body) ? C[f.row - 1].body += `
` + C[f.row].body : C[f.row - 1].body += C[f.row].body, C.splice(f.row, 1), [...C])), _((C) => ({
                  row: C.row - 1,
                  col: b,
                  colEnd: -1,
                  direction: m
                })), o.preventDefault();
                break;
              }
              _((u) => ({
                row: u.row,
                col: c,
                colEnd: v,
                direction: m
              }));
              break;
            case "Tab":
              E((u) => {
                if (!o.currentTarget)
                  return u;
                if (o.shiftKey)
                  n.length === 1 ? (u[f.row].body = o.currentTarget.value.slice(1), c--) : n.length > 0 && (u[f.row].body = n.slice(2) + o.currentTarget.value);
                else {
                  let b = "-";
                  J(o.currentTarget.value) && (b = " "), n.length === 0 ? (u[f.row].body = b + " " + o.currentTarget.value, c++) : u[f.row].body = "  " + n + o.currentTarget.value;
                }
                return [...u];
              }), o.preventDefault(), _((u) => ({
                row: u.row,
                col: c,
                colEnd: -1,
                direction: m
              }));
              break;
            case "Enter":
              if (o.keyCode === 13) {
                if (J(g) && !o.shiftKey)
                  break;
                {
                  if (o.currentTarget == null || o.currentTarget.selectionStart === void 0) {
                    o.preventDefault();
                    break;
                  }
                  let u = 0;
                  const b = o.currentTarget.selectionStart;
                  E((C) => {
                    const Z = n.length + b;
                    let z = C[f.row].body.slice(Z);
                    if (J(g)) {
                      const ne = C[f.row].body;
                      ne[ne.length - 1] === `
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
                    return n.length !== 0 ? (C.splice(
                      f.row + 1,
                      0,
                      { body: n + " " + z, key: Y() }
                    ), u = 1) : C.splice(f.row + 1, 0, { body: z, key: Y() }), [...C];
                  }), o.preventDefault(), _((C) => ({
                    row: C.row + 1,
                    col: u,
                    colEnd: -1,
                    direction: m
                  }));
                }
              } else
                break;
              break;
            case " ":
              console.log("space", c), (c === 0 || c === 1 && n.length >= 1) && (E((u) => {
                if (!o.currentTarget)
                  return u;
                let b = "-";
                return J(o.currentTarget.value) && (b = " "), n.length === 0 ? (u[f.row].body = b + " " + o.currentTarget.value, c++) : u[f.row].body = "  " + n + o.currentTarget.value, [...u];
              }), o.preventDefault()), _((u) => ({
                row: u.row,
                col: c,
                colEnd: -1,
                direction: m
              }));
              break;
          }
        },
        onLinkClick: h.onLinkClick,
        onSubLinkClick: h.onSubLinkClick,
        onClick: (n) => {
          if (f.row !== l) {
            const g = n.target.selectionStart;
            D([l, l]), _(() => ({ row: l, col: g }));
          }
        }
      },
      r.key
    )),
    /* @__PURE__ */ T.jsx("div", { className: "popup", ref: O, children: h.linePopupHandlers.map((r, l) => /* @__PURE__ */ T.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (r.handler(
            t.slice(S[0], S[1] + 1).map((n) => n.body),
            S
          ), D([S[1], S[1]]));
        },
        onTouchStart: () => {
          r.handler(t.slice(S[0], S[1] + 1).map((n) => n.body)), D([S[1], S[1]]);
        },
        children: r.name
      },
      l
    )) })
  ] });
};
export {
  Dt as Editor,
  J as isBlock,
  _t as parseBlock
};
