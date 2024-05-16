import Ee, { useState as oe, useEffect as z, useRef as G, forwardRef as gt, useCallback as te, createRef as mt } from "react";
var we = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function yt() {
  if (We)
    return ne;
  We = 1;
  var v = Ee, o = Symbol.for("react.element"), R = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, A = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(k, x, S) {
    var O, N = {}, B = null, _ = null;
    S !== void 0 && (B = "" + S), x.key !== void 0 && (B = "" + x.key), x.ref !== void 0 && (_ = x.ref);
    for (O in x)
      w.call(x, O) && !Y.hasOwnProperty(O) && (N[O] = x[O]);
    if (k && k.defaultProps)
      for (O in x = k.defaultProps, x)
        N[O] === void 0 && (N[O] = x[O]);
    return { $$typeof: o, type: k, key: B, ref: _, props: N, _owner: A.current };
  }
  return ne.Fragment = R, ne.jsx = $, ne.jsxs = $, ne;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function vt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Ee, o = Symbol.for("react.element"), R = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), k = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), I = Symbol.iterator, M = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[M];
      return typeof r == "function" ? r : null;
    }
    var u = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), h = 1; h < r; h++)
          a[h - 1] = arguments[h];
        E("error", e, a);
      }
    }
    function E(e, r, a) {
      {
        var h = u.ReactDebugCurrentFrame, T = h.getStackAddendum();
        T !== "" && (r += "%s", a = a.concat([T]));
        var j = a.map(function(C) {
          return String(C);
        });
        j.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var U = !1, D = !1, f = !1, n = !1, i = !1, s;
    s = Symbol.for("react.module.reference");
    function t(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === Y || i || e === A || e === S || e === O || n || e === _ || U || D || f || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === N || e.$$typeof === $ || e.$$typeof === k || e.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === s || e.getModuleId !== void 0));
    }
    function c(e, r, a) {
      var h = e.displayName;
      if (h)
        return h;
      var T = r.displayName || r.name || "";
      return T !== "" ? a + "(" + T + ")" : a;
    }
    function g(e) {
      return e.displayName || "Context";
    }
    function d(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case R:
          return "Portal";
        case Y:
          return "Profiler";
        case A:
          return "StrictMode";
        case S:
          return "Suspense";
        case O:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var r = e;
            return g(r) + ".Consumer";
          case $:
            var a = e;
            return g(a._context) + ".Provider";
          case x:
            return c(e, e.render, "ForwardRef");
          case N:
            var h = e.displayName || null;
            return h !== null ? h : d(e.type) || "Memo";
          case B: {
            var T = e, j = T._payload, C = T._init;
            try {
              return d(C(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var l = Object.assign, m = 0, P, q, Q, be, pe, Ce, Re;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function He() {
      {
        if (m === 0) {
          P = console.log, q = console.info, Q = console.warn, be = console.error, pe = console.group, Ce = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        m++;
      }
    }
    function Ue() {
      {
        if (m--, m === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: l({}, e, {
              value: P
            }),
            info: l({}, e, {
              value: q
            }),
            warn: l({}, e, {
              value: Q
            }),
            error: l({}, e, {
              value: be
            }),
            group: l({}, e, {
              value: pe
            }),
            groupCollapsed: l({}, e, {
              value: Ce
            }),
            groupEnd: l({}, e, {
              value: Re
            })
          });
        }
        m < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = u.ReactCurrentDispatcher, fe;
    function ie(e, r, a) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (T) {
            var h = T.stack.trim().match(/\n( *(at )?)/);
            fe = h && h[1] || "";
          }
        return `
` + fe + e;
      }
    }
    var de = !1, le;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ve();
    }
    function ke(e, r) {
      if (!e || de)
        return "";
      {
        var a = le.get(e);
        if (a !== void 0)
          return a;
      }
      var h;
      de = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = ue.current, ue.current = null, He();
      try {
        if (r) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (J) {
              h = J;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (J) {
              h = J;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            h = J;
          }
          e();
        }
      } catch (J) {
        if (J && h && typeof J.stack == "string") {
          for (var b = J.stack.split(`
`), H = h.stack.split(`
`), F = b.length - 1, L = H.length - 1; F >= 1 && L >= 0 && b[F] !== H[L]; )
            L--;
          for (; F >= 1 && L >= 0; F--, L--)
            if (b[F] !== H[L]) {
              if (F !== 1 || L !== 1)
                do
                  if (F--, L--, L < 0 || b[F] !== H[L]) {
                    var V = `
` + b[F].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, V), V;
                  }
                while (F >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        de = !1, ue.current = j, Ue(), Error.prepareStackTrace = T;
      }
      var Z = e ? e.displayName || e.name : "", $e = Z ? ie(Z) : "";
      return typeof e == "function" && le.set(e, $e), $e;
    }
    function Ke(e, r, a) {
      return ke(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, qe(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case S:
          return ie("Suspense");
        case O:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            return Ke(e.render);
          case N:
            return ae(e.type, r, a);
          case B: {
            var h = e, T = h._payload, j = h._init;
            try {
              return ae(j(T), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, xe = {}, Se = u.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(a);
      } else
        Se.setExtraStackFrame(null);
    }
    function Je(e, r, a, h, T) {
      {
        var j = Function.call.bind(se);
        for (var C in e)
          if (j(e, C)) {
            var b = void 0;
            try {
              if (typeof e[C] != "function") {
                var H = Error((h || "React class") + ": " + a + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw H.name = "Invariant Violation", H;
              }
              b = e[C](r, C, h, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              b = F;
            }
            b && !(b instanceof Error) && (ce(T), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", a, C, typeof b), ce(null)), b instanceof Error && !(b.message in xe) && (xe[b.message] = !0, ce(T), y("Failed %s type: %s", a, b.message), ce(null));
          }
      }
    }
    var Ge = Array.isArray;
    function he(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Xe(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function je(e) {
      if (Xe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), _e(e);
    }
    var ee = u.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, ge;
    ge = {};
    function Qe(e) {
      if (se.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function et(e) {
      if (se.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, r) {
      if (typeof e.ref == "string" && ee.current && r && ee.current.stateNode !== r) {
        var a = d(ee.current.type);
        ge[a] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', d(ee.current.type), e.ref), ge[a] = !0);
      }
    }
    function nt(e, r) {
      {
        var a = function() {
          Pe || (Pe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function rt(e, r) {
      {
        var a = function() {
          Oe || (Oe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ot = function(e, r, a, h, T, j, C) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: C,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function it(e, r, a, h, T) {
      {
        var j, C = {}, b = null, H = null;
        a !== void 0 && (je(a), b = "" + a), et(r) && (je(r.key), b = "" + r.key), Qe(r) && (H = r.ref, tt(r, T));
        for (j in r)
          se.call(r, j) && !Ze.hasOwnProperty(j) && (C[j] = r[j]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (j in F)
            C[j] === void 0 && (C[j] = F[j]);
        }
        if (b || H) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && nt(C, L), H && rt(C, L);
        }
        return ot(e, b, H, T, h, ee.current, C);
      }
    }
    var me = u.ReactCurrentOwner, De = u.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(a);
      } else
        De.setExtraStackFrame(null);
    }
    var ye;
    ye = !1;
    function ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ne() {
      {
        if (me.current) {
          var e = d(me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lt(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function at(e) {
      {
        var r = Ne();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = at(r);
        if (Fe[a])
          return;
        Fe[a] = !0;
        var h = "";
        e && e._owner && e._owner !== me.current && (h = " It was passed a child from " + d(e._owner.type) + "."), X(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, h), X(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (he(e))
          for (var a = 0; a < e.length; a++) {
            var h = e[a];
            ve(h) && Ae(h, r);
          }
        else if (ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var T = W(e);
          if (typeof T == "function" && T !== e.entries)
            for (var j = T.call(e), C; !(C = j.next()).done; )
              ve(C.value) && Ae(C.value, r);
        }
      }
    }
    function st(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === N))
          a = r.propTypes;
        else
          return;
        if (a) {
          var h = d(r);
          Je(a, e.props, "prop", h, e);
        } else if (r.PropTypes !== void 0 && !ye) {
          ye = !0;
          var T = d(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var h = r[a];
          if (h !== "children" && h !== "key") {
            X(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    function Ie(e, r, a, h, T, j) {
      {
        var C = t(e);
        if (!C) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var H = lt(T);
          H ? b += H : b += Ne();
          var F;
          e === null ? F = "null" : he(e) ? F = "array" : e !== void 0 && e.$$typeof === o ? (F = "<" + (d(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, b);
        }
        var L = it(e, r, a, T, j);
        if (L == null)
          return L;
        if (C) {
          var V = r.children;
          if (V !== void 0)
            if (h)
              if (he(V)) {
                for (var Z = 0; Z < V.length; Z++)
                  Le(V[Z], e);
                Object.freeze && Object.freeze(V);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(V, e);
        }
        return e === w ? ct(L) : st(L), L;
      }
    }
    function ut(e, r, a) {
      return Ie(e, r, a, !0);
    }
    function ft(e, r, a) {
      return Ie(e, r, a, !1);
    }
    var dt = ft, ht = ut;
    re.Fragment = w, re.jsx = dt, re.jsxs = ht;
  }()), re;
}
process.env.NODE_ENV === "production" ? we.exports = yt() : we.exports = vt();
var p = we.exports;
function K(v, o) {
  const R = v.match(/^(\s*)(```|> )/);
  return o === !0 ? R : R != null;
}
const wt = (v) => v.match(/^(\s*)> /) != null, Et = (v) => v.split(/[\r\n]/), bt = (v) => v.split(/[\r\n]/).length, Me = (v, o) => {
  const R = o.split(/[\r\n]/);
  let w = 0;
  for (let A = 0; A < R.length; A++)
    if (w += R[A].length + 1, w > v)
      return [v - (w - R[A].length - 1), A];
  throw new Error("error getPos");
}, pt = (v, o) => {
  const R = Me(v, o), w = bt(o);
  return R[1] === w - 1;
}, Ct = (v, o) => Me(v, o)[1] === 0, Rt = (v) => {
  const o = v.match(/^\s*`{3}(.*)/), R = Et(v).slice(1).join(`
`);
  return [o == null ? void 0 : o[1], R];
}, Ye = Ee.forwardRef(
  function(o, R) {
    const [w, A] = oe({
      prefix: "",
      selection: "",
      suffix: ""
    }), Y = () => {
      A({ prefix: "", selection: "", suffix: "" });
    }, [$, k] = oe({
      index: 0
    }), x = (u, y) => {
      let E = 0, U = "", D = !1;
      for (let n = 0; n < u.length; n++) {
        const i = u[n];
        i === "[" ? (E++, U = "") : i === "]" ? (E > 0 && (E--, U = "", D = !0), E === 0 && (D = !1)) : E > 0 && !D && (U += i);
      }
      let f = "";
      if (E > 0) {
        let n = 0, i = !1;
        for (let s = 0; s < y.length; s++) {
          const t = y[s];
          t === "[" ? n++ : t === "]" ? (n--, i = !0) : i || (f += t);
        }
        return n === 0 && (f = ""), U + f;
      }
      return "";
    }, S = (u) => {
      let y = u.length - 1;
      for (let E = u.length - 1; E >= 0; E--)
        if (u[E] === "[") {
          y = E;
          break;
        }
      return u.slice(0, -(u.length - 1 - y));
    }, O = (u) => {
      let y = 0;
      for (let E = 0; E < u.length; E++)
        if (u[E] === "]") {
          y = E;
          break;
        }
      return u.slice(y);
    }, N = x(w.prefix, w.suffix);
    z(() => {
      if (!M.current || !W.current)
        return;
      M.current.style.display = "inline", w.selection === "" && N === "" ? W.current.style.display = "none" : W.current.style.display = "inline", W.current.style.left = M.current.getBoundingClientRect().width + "px", W.current.style.top = -W.current.getBoundingClientRect().height + "px";
      const u = W.current.getBoundingClientRect().top + window.scrollY;
      u < 0 && (W.current.style.top = -W.current.getBoundingClientRect().height - u + "px"), M.current.style.display = "none";
    }, [w, N]), z(() => {
      k({ index: 0 });
    }, [o.value]);
    const B = function(u) {
      A({
        prefix: u.currentTarget.value.slice(
          0,
          u.currentTarget.selectionStart
        ),
        selection: u.currentTarget.value.slice(
          u.currentTarget.selectionStart,
          u.currentTarget.selectionEnd
        ),
        suffix: u.currentTarget.value.slice(u.currentTarget.selectionEnd)
      });
    };
    let _ = o.popupHandlers, I = !1;
    w.selection === "" && N !== "" && (_ = o.keywords.filter((u) => u.indexOf(N) != -1).map((u, y) => ({
      name: u,
      handler: () => {
        const E = S(w.prefix), U = _[y].name;
        let D = O(w.suffix), f = (E + U).length;
        return (D.length == 0 || D[0] != "]") && (D = "]" + D, f += 1), {
          value: E + U + D,
          column: f
        };
      }
    })), _.length > 0 && (I = !0));
    const M = G(null), W = G(null);
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: o.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ p.jsx(
            "textarea",
            {
              ref: R,
              value: o.value,
              onPaste: o.onPaste,
              onCompositionStart: o.onCompositionStart,
              onCompositionEnd: (u) => {
                o.onCompositionEnd(u), B(u);
              },
              onChange: o.onChange,
              onKeyDown: (u) => {
                if (u.key === "Enter" && u.keyCode === 13 && I) {
                  const y = _[$.index].handler(null);
                  o.setLine(y.value), o.setCursor(y.column), u.preventDefault();
                } else
                  u.key == "Tab" && I ? (k((y) => {
                    let E = y.index + 1;
                    return E >= _.length && (E = 0), { index: E };
                  }), u.preventDefault()) : o.onKeyDown(w)(u);
              },
              onSelect: B
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "popup", ref: W, children: _.map((u, y) => /* @__PURE__ */ p.jsx(
            "div",
            {
              className: $.index == y ? "selected" : "",
              onClick: () => {
                const E = u.handler(w);
                o.setLine(E.value), o.setCursor(E.column), Y();
              },
              children: u.name
            },
            y
          )) }),
          /* @__PURE__ */ p.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: M, children: w.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), Tt = (v, o = null) => {
  const R = G(o);
  return z(() => {
    v && (typeof v == "function" ? v(R.current) : v.current = R.current);
  }, [v]), R;
}, kt = gt(
  function(o, R) {
    const w = Tt(R), [A, Y] = oe();
    z(() => {
      if (!w.current)
        return;
      const n = w.current.style.display;
      w.current.style.display = "block", w.current.style.height = "0px", w.current.style.height = w.current.scrollHeight + "px", w.current.style.display = n;
    }, [o.value, w, o.isFocus]);
    const $ = (n, i, s) => {
      var g;
      const t = ["line"], c = n.match(/^(\s*)- /);
      if (n.indexOf("# ") === 0)
        t.push("h1-style");
      else if (n.indexOf("## ") === 0)
        t.push("h2-style");
      else if (n.indexOf("### ") === 0)
        t.push("h3-style");
      else if (c)
        t.push("list-style"), t.push("list-indent-" + c[1].length / 2);
      else if (K(n)) {
        const d = K(n, !0);
        t.push("list-indent-" + (((g = d == null ? void 0 : d[1]) == null ? void 0 : g.length) ?? 0) / 2);
      }
      return i && t.push("focus"), s && t.push("select"), t.join(" ");
    }, k = (n) => n ? [] : ["hide"], x = (n) => n ? "hide" : "", S = (n, i, s) => {
      let t = -1, c = "";
      return i.forEach(function(g) {
        const d = n.indexOf(g, s);
        d !== -1 && (t === -1 || t > d) && (t = d, c = g);
      }), { pos: t, target: c };
    }, O = o.onLinkClick, N = o.onSubLinkClick, B = te((n) => {
      let i = 0;
      const s = [];
      for (; ; ) {
        const t = S(n, ["http://", "https://", " ", "["], i);
        if (t.target === "https://" || t.target === "http://") {
          i !== t.pos && s.push(n.slice(i, t.pos));
          const c = S(
            n,
            [" ", "\r", `
`],
            t.pos + t.target.length
          );
          if (c.pos !== -1) {
            const g = n.slice(t.pos, c.pos);
            s.push(/* @__PURE__ */ p.jsx("a", { href: g, children: g })), i = c.pos;
          } else {
            const g = n.slice(t.pos, n.length);
            s.push(/* @__PURE__ */ p.jsx("a", { href: g, children: g })), i = n.length;
            break;
          }
        } else if (t.target == " ")
          s.push(n.slice(i, t.pos)), s.push(" "), i = t.pos + t.target.length;
        else if (t.target == "[") {
          i !== t.pos && s.push(n.slice(i, t.pos));
          const c = S(n, ["]"], t.pos + t.target.length);
          if (c.pos !== -1) {
            const g = n.slice(t.pos, c.pos + 1);
            s.push([/* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              /* @__PURE__ */ p.jsx("span", { className: "braket", onClick: (d) => {
                O(g.slice(1, g.length - 1)), d.stopPropagation();
              }, children: g.slice(1, g.length - 1) }, i),
              /* @__PURE__ */ p.jsx("span", { className: "bracket-icon", onClick: (d) => {
                N(g.slice(1, g.length - 1)), d.stopPropagation();
              }, children: "[]" }, "icon-" + i)
            ] })]), i = c.pos + 1;
          } else
            s.push(n.slice(i, n.length)), i = n.length;
        } else {
          s.push(n.slice(i, n.length)), i = n.length;
          break;
        }
      }
      return s;
    }, [O, N]), _ = te((n, i) => {
      const s = n ? o.blockStyles[n] : void 0;
      return s ? s(i) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx("span", { className: "block-type", children: n }),
        /* @__PURE__ */ p.jsx("pre", { children: i })
      ] });
    }, [o.blockStyles]), I = te((n) => {
      const i = n.match(/^(\s*)```.*/), s = (i == null ? void 0 : i[1]) ?? "";
      return n = n.slice(s.length).split(`
`).map((t) => s + t).join(`
`), n;
    }, []), M = te((n) => {
      const i = n.match(/^(\s*)> /), s = (i == null ? void 0 : i[1]) ?? "";
      return n = n.slice(s.length).split(`
`).map(
        (t, c) => s + (c === 0 ? "" : "> ") + t
      ).join(`
`), n;
    }, []), W = te((n) => {
      var i;
      if (console.log(n), K(n))
        if (wt(n)) {
          const s = n.match(/\s*> /), t = n.slice((i = s == null ? void 0 : s[0]) == null ? void 0 : i.length);
          Y(
            /* @__PURE__ */ p.jsxs("div", { children: [
              /* @__PURE__ */ p.jsx("pre", { className: "for-copy", children: M(n) }),
              /* @__PURE__ */ p.jsx("div", { className: "no-select", children: _("pre", t) })
            ] })
          );
          return;
        } else {
          const s = Rt(n);
          try {
            const t = _(s[0], s[1]);
            Y(
              /* @__PURE__ */ p.jsxs("div", { children: [
                /* @__PURE__ */ p.jsx("pre", { className: "for-copy", children: I(n + "\n```") }),
                /* @__PURE__ */ p.jsx("div", { className: "no-select", children: t })
              ] })
            );
          } catch (t) {
            t instanceof Promise && t.then((c) => {
              console.log(c), Y(c);
            }), Y(/* @__PURE__ */ p.jsx("div", { children: "loading..." }));
          }
          return;
        }
      else {
        const s = ["elm"], t = n.match(/^(\s*)-( .*)$/);
        let c = null;
        n.indexOf("# ") === 0 || n.indexOf("## ") === 0 || n.indexOf("### ") === 0 || t && (n = t[2], c = /* @__PURE__ */ p.jsx("pre", { className: "for-copy-inline", children: t[1] + "-" })), Y(
          /* @__PURE__ */ p.jsxs("div", { className: s.join(" "), children: [
            c,
            B(n)
          ] })
        );
        return;
      }
    }, [I, M, _, B]), u = (n) => {
      const i = n.match(/^(\s*-)( .*)$/);
      let s = "";
      if (i)
        n = i[2], s = i[1];
      else {
        const t = n.match(/^(\s*)(```.*|> )/);
        t && (s = t[1], n = n.slice(t[1].length));
      }
      return [s, n];
    }, y = G(null), E = (n) => (i) => {
      if (i.buttons !== 0 && y.current) {
        n();
        const s = new Range();
        s.selectNodeContents(y.current);
        const t = document.getSelection();
        if (!t)
          throw new Error("selection is null");
        t.empty(), t.addRange(s);
      }
    }, U = u(o.value), D = U[0], f = U[1];
    return z(() => {
      W(o.value);
    }, [W, o.value]), K(f) ? /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: $(o.value, o.isFocus, o.isSelect),
        ref: y,
        "data-lineno": o.row,
        onClick: o.onClick,
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: ["line-item"].concat(k(o.isFocus)).join(" "),
              onMouseLeave: E(o.selectThisLine),
              children: /* @__PURE__ */ p.jsx(
                Ye,
                {
                  ref: w,
                  value: f,
                  keywords: o.keywords,
                  setLine: o.setLine(D),
                  setCursor: o.setCursor,
                  onCompositionStart: o.onCompositionStart,
                  onCompositionEnd: o.onCompositionEnd,
                  onChange: o.onChange(D),
                  popupHandlers: [],
                  onKeyDown: () => o.onKeyDown(D, f)
                }
              )
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "line-item", children: A })
        ]
      }
    ) : /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: $(o.value, o.isFocus, o.isSelect),
        ref: y,
        "data-lineno": o.row,
        onClick: o.onClick,
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: k(o.isFocus) + " container",
              onMouseLeave: E(o.selectThisLine),
              children: /* @__PURE__ */ p.jsx(
                Ye,
                {
                  ref: w,
                  value: f,
                  keywords: o.keywords,
                  setLine: o.setLine(D),
                  setCursor: o.setCursor,
                  onPaste: o.onPaste(o.row),
                  onCompositionStart: o.onCompositionStart,
                  onCompositionEnd: o.onCompositionEnd,
                  onChange: o.onChange(D),
                  popupHandlers: o.textPopupHandlers,
                  onKeyDown: (n) => (i) => {
                    i.key === "Enter" && i.keyCode === 13 && n.selection !== "" ? i.preventDefault() : o.onKeyDown(D, f)(i);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: x(o.isFocus), children: A })
        ]
      }
    );
  }
), St = (v) => {
  const o = v.lines, R = v.setLines, w = G(o.length), A = () => (w.current = w.current + 1, w.current), Y = v.onChange;
  z(() => {
    Y(o.map((f) => f.body));
  }, [o, Y]);
  const $ = G(!1), [k, x] = oe({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, O] = oe([0, 0]), N = (f) => f == null ? null : f instanceof HTMLElement && f.classList.contains("line") ? f : N(f.parentElement), B = G(null);
  let _, I, M = !1;
  const W = () => {
    M = !0;
    const f = document.getSelection();
    f && (_ = N(f.anchorNode), I = N(f.focusNode), (_ == null ? void 0 : _.parentNode) != B.current && (_ = null, I = null), _ !== I && x({ row: -1, col: 0 }));
  }, u = () => {
    var f, n, i, s;
    if (M && (M = !1, _ && I && _ !== I)) {
      const t = new Range();
      if (t.setStart(_, 0), t.setEnd(I, I.children.length), document.getSelection().empty(), document.getSelection().addRange(t), !((f = _.dataset) != null && f.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const c = parseInt((n = _.dataset) == null ? void 0 : n.lineno);
      if (!((i = I.dataset) != null && i.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const g = parseInt((s = I.dataset) == null ? void 0 : s.lineno);
      O([c, g]);
    }
  }, y = () => () => {
    x(() => ({ row: -1, col: 0 })), M = !0;
  }, E = G(null);
  z(() => {
    var f;
    if (E.current)
      if (S[1] - S[0] >= 1) {
        E.current.style.display = "block";
        const n = (f = document.getSelection()) == null ? void 0 : f.focusNode;
        if (!n)
          throw new Error("focusNode is null");
        if (!(n instanceof Element))
          throw new Error("focusNode is not Element");
        const i = n.getBoundingClientRect(), s = i.bottom, t = i.x + i.width / 2;
        E.current.style.left = t + "px", E.current.style.top = s + "px";
      } else
        E.current.style.display = "none";
  }, [S]);
  const U = (f) => (n) => {
    const s = n.clipboardData.getData("text").split(/\r\n|\n/);
    if (s.length === 1)
      return !0;
    const t = [];
    let c = [], g = !1, d = "";
    return s.forEach((l) => {
      const m = l.match(/^(\s*)(```.*)/);
      g ? l.indexOf(d + "```") === 0 ? (t.push(c.join(`
`)), g = !1, c = []) : (d !== "" && l.indexOf(d) !== 0 && (t.push(c.join(`
`)), g = !1, c = [], t.push(l)), c.push(l.slice(d.length))) : m ? (g = !0, d = m[1], c.push(l)) : t.push(l);
    }), c.length !== 0 && t.push(c.join(`
`)), R((l) => (l[f] = { body: l[f] + t[0], key: l[f].key }, l.splice(f + 1, 0, ...t.slice(1).map((m) => ({ body: m, key: A() }))), [...l])), n.preventDefault(), !1;
  };
  z(() => {
    document.addEventListener("selectionchange", W), document.addEventListener("pointerup", u);
  }, []);
  const D = G([]);
  return z(() => {
    if (k.row !== -1 && $.current === !1) {
      const f = D.current[k.row];
      if (!f || !f.current)
        return;
      f.current.focus();
      let n = k.colEnd;
      (n === void 0 || n === -1) && (n = k.col), console.log("EFFECT", "col:", k.col, "end:", n), f.current.setSelectionRange(k.col, n, k.direction);
    }
  }, [k, o]), o.forEach((f, n) => {
    D.current[n] = mt();
  }), /* @__PURE__ */ p.jsxs("div", { className: "editor", ref: B, children: [
    o.map((f, n) => /* @__PURE__ */ p.jsx(
      kt,
      {
        ref: D.current[n],
        isFocus: n === k.row,
        isSelect: S[0] <= n && n <= S[1],
        row: n,
        value: f.body,
        textPopupHandlers: v.textPopupHandlers,
        keywords: v.keywords,
        blockStyles: v.blockStyles,
        selectThisLine: y(),
        setLine: (i) => (s) => ((t) => {
          R((c) => (c[t].body = i + s, [...c]));
        })(n),
        setCursor: (i) => ((s) => {
          x((t) => ({
            row: s,
            col: i,
            colEnd: -1,
            direction: t.direction
          }));
        })(n),
        onPaste: U,
        onCompositionStart: () => {
          $.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          $.current = !1, console.log("composition end");
        },
        onChange: (i) => (s) => ((t) => {
          if (console.log("onChange", $.current), $.current === !1) {
            const c = s.target.selectionStart, g = s.target.selectionEnd, d = s.target.selectionDirection;
            x((l) => ({
              row: l.row,
              col: c,
              colEnd: g,
              direction: d
            }));
          }
          R((c) => (c[t].body = i + s.target.value, [...c]));
        })(n),
        onKeyDown: (i, s) => (t) => {
          let c = t.currentTarget.selectionStart, g = t.currentTarget.selectionEnd, d = t.currentTarget.selectionDirection;
          x((l) => {
            switch (t.key) {
              case "ArrowLeft": {
                if (t.currentTarget != null && t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0) {
                  if (l.row === 0)
                    return l;
                  const m = o[k.row - 1].body.length;
                  return t.preventDefault(), {
                    row: l.row - 1,
                    col: m,
                    colEnd: -1,
                    direction: d
                  };
                }
                return t.shiftKey ? c == g ? (c--, d = "backward") : d === "forward" ? g-- : d === "backward" && c-- : (c--, g = -1), t.preventDefault(), {
                  row: l.row,
                  col: c,
                  colEnd: g,
                  direction: d
                };
              }
              case "ArrowRight": {
                const m = -i.length + o[k.row].body.length;
                return t.currentTarget != null && t.currentTarget.selectionStart === m && t.currentTarget.selectionEnd === m ? l.row === o.length - 1 ? l : (t.preventDefault(), {
                  row: l.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: d
                }) : (t.shiftKey ? d === "forward" ? g++ : d === "backward" && c++ : (c < g && (c = g), c++, g = -1), t.preventDefault(), {
                  row: l.row,
                  col: c,
                  colEnd: g,
                  direction: d
                });
              }
              case "ArrowUp":
                return K(s) && !Ct(t.currentTarget.selectionStart, s) || l.row === 0 ? l : (t.preventDefault(), {
                  row: l.row - 1,
                  col: t.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: d
                });
              case "ArrowDown":
                return K(s) && !pt(t.currentTarget.selectionStart, s) || l.row === o.length - 1 ? l : (t.preventDefault(), {
                  row: l.row + 1,
                  col: t.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: d
                });
              case "Backspace":
                if (i.length !== 0 && (t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0 || t.currentTarget.selectionStart === 1 && t.currentTarget.selectionEnd === 1))
                  i.length !== 0 && (R((m) => (i.length === 1 ? (m[l.row].body = t.currentTarget.value.slice(1), c--, c === -1 ? c++ : c === 0 && g !== 0 && (g = 0)) : i.length > 0 && (m[l.row].body = i.slice(2) + t.currentTarget.value), [...m])), t.preventDefault());
                else if (t.currentTarget != null && t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0) {
                  if (l.row === 0)
                    return l;
                  const m = o[k.row - 1].body.length - 1;
                  return R((P) => (K(P[l.row - 1].body) ? P[l.row - 1].body += `
` + P[l.row].body : P[l.row - 1].body += P[l.row].body, P.splice(l.row, 1), [...P])), t.preventDefault(), {
                    row: l.row - 1,
                    col: m,
                    colEnd: -1,
                    direction: d
                  };
                }
                return console.log("normal Backspace", c), {
                  row: l.row,
                  col: c,
                  colEnd: g,
                  direction: d
                };
              case "Tab":
                return R((m) => {
                  if (t.shiftKey)
                    i.length === 1 ? (m[l.row].body = t.currentTarget.value.slice(1), c--) : i.length > 0 && (m[l.row].body = i.slice(2) + t.currentTarget.value);
                  else {
                    let P = "-";
                    K(t.currentTarget.value) && (P = " "), i.length === 0 ? (m[l.row].body = P + " " + t.currentTarget.value, c++) : m[l.row].body = "  " + i + t.currentTarget.value;
                  }
                  return x((P) => ({
                    row: P.row,
                    col: c,
                    colEnd: -1,
                    direction: d
                  })), [...m];
                }), t.preventDefault(), {
                  row: l.row,
                  col: c,
                  colEnd: -1,
                  direction: d
                };
              case "Enter":
                return t.keyCode === 13 ? K(s) && !t.shiftKey ? l : (R((m) => {
                  const P = i.length + t.currentTarget.selectionStart;
                  let q = m[l.row].body.slice(P);
                  if (K(s)) {
                    const Q = m[l.row].body;
                    Q[Q.length - 1] === `
` ? m[l.row].body = m[l.row].body.slice(
                      0,
                      P - 1
                    ) : m[l.row].body = m[l.row].body.slice(
                      0,
                      P
                    ), q.length > 0 && q[0] === `
` && (q = q.slice(1));
                  } else
                    m[l.row].body = m[l.row].body.slice(
                      0,
                      P
                    );
                  return i.length !== 0 ? m.splice(
                    l.row + 1,
                    0,
                    { body: i + " " + q, key: A() }
                  ) : m.splice(l.row + 1, 0, { body: q, key: A() }), [...m];
                }), t.preventDefault(), {
                  row: l.row + 1,
                  col: i.length,
                  colEnd: -1,
                  direction: d
                }) : l;
              case " ":
                return console.log("space", c), (c === 0 || c === 1 && i.length >= 1) && (R((m) => {
                  let P = "-";
                  return K(t.currentTarget.value) && (P = " "), i.length === 0 ? (m[l.row].body = P + " " + t.currentTarget.value, c++) : m[l.row].body = "  " + i + t.currentTarget.value, [...m];
                }), t.preventDefault()), {
                  row: l.row,
                  col: c,
                  colEnd: -1,
                  direction: d
                };
              default:
                return l;
            }
          });
        },
        onLinkClick: v.onLinkClick,
        onSubLinkClick: v.onSubLinkClick,
        onClick: (i) => {
          if (k.row !== n) {
            const s = i.target.selectionStart;
            O([n, n]), x(() => ({ row: n, col: s }));
          }
        }
      },
      f.key
    )),
    /* @__PURE__ */ p.jsx("div", { className: "popup", ref: E, children: v.linePopupHandlers.map((f, n) => /* @__PURE__ */ p.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (f.handler(
            o.slice(S[0], S[1] + 1).map((i) => i.body),
            S
          ), O([S[1], S[1]]));
        },
        onTouchStart: () => {
          f.handler(o.slice(S[0], S[1] + 1).map((i) => i.body)), O([S[1], S[1]]);
        },
        children: f.name
      },
      n
    )) })
  ] });
};
export {
  St as Editor
};
