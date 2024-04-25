import we, { useState as ne, useEffect as q, useRef as J, forwardRef as gt, useCallback as Q, createRef as mt } from "react";
var ve = { exports: {} }, ee = {};
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
function vt() {
  if (We)
    return ee;
  We = 1;
  var w = we, i = Symbol.for("react.element"), T = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, D = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(S, P, $) {
    var N, x = {}, O = null, L = null;
    $ !== void 0 && (O = "" + $), P.key !== void 0 && (O = "" + P.key), P.ref !== void 0 && (L = P.ref);
    for (N in P)
      E.call(P, N) && !j.hasOwnProperty(N) && (x[N] = P[N]);
    if (S && S.defaultProps)
      for (N in P = S.defaultProps, P)
        x[N] === void 0 && (x[N] = P[N]);
    return { $$typeof: i, type: S, key: O, ref: L, props: x, _owner: D.current };
  }
  return ee.Fragment = T, ee.jsx = I, ee.jsxs = I, ee;
}
var te = {};
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
function wt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var w = we, i = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), S = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), V = Symbol.iterator, Y = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = V && e[V] || e[Y];
      return typeof o == "function" ? o : null;
    }
    var c = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          s[h - 1] = arguments[h];
        p("error", e, s);
      }
    }
    function p(e, o, s) {
      {
        var h = c.ReactDebugCurrentFrame, b = h.getStackAddendum();
        b !== "" && (o += "%s", s = s.concat([b]));
        var _ = s.map(function(C) {
          return String(C);
        });
        _.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var f = !1, u = !1, n = !1, l = !1, t = !1, r;
    r = Symbol.for("react.module.reference");
    function d(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === j || t || e === D || e === $ || e === N || l || e === L || f || u || n || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === x || e.$$typeof === I || e.$$typeof === S || e.$$typeof === P || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === r || e.getModuleId !== void 0));
    }
    function m(e, o, s) {
      var h = e.displayName;
      if (h)
        return h;
      var b = o.displayName || o.name || "";
      return b !== "" ? s + "(" + b + ")" : s;
    }
    function a(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case T:
          return "Portal";
        case j:
          return "Profiler";
        case D:
          return "StrictMode";
        case $:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var o = e;
            return a(o) + ".Consumer";
          case I:
            var s = e;
            return a(s._context) + ".Provider";
          case P:
            return m(e, e.render, "ForwardRef");
          case x:
            var h = e.displayName || null;
            return h !== null ? h : g(e.type) || "Memo";
          case O: {
            var b = e, _ = b._payload, C = b._init;
            try {
              return g(C(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, M = 0, X, Ee, ye, pe, Ce, Re, Te;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ue() {
      {
        if (M === 0) {
          X = console.log, Ee = console.info, ye = console.warn, pe = console.error, Ce = console.group, Re = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        M++;
      }
    }
    function Ve() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: X
            }),
            info: k({}, e, {
              value: Ee
            }),
            warn: k({}, e, {
              value: ye
            }),
            error: k({}, e, {
              value: pe
            }),
            group: k({}, e, {
              value: Ce
            }),
            groupCollapsed: k({}, e, {
              value: Re
            }),
            groupEnd: k({}, e, {
              value: Te
            })
          });
        }
        M < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = c.ReactCurrentDispatcher, ce;
    function re(e, o, s) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (b) {
            var h = b.stack.trim().match(/\n( *(at )?)/);
            ce = h && h[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var ue = !1, oe;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new He();
    }
    function xe(e, o) {
      if (!e || ue)
        return "";
      {
        var s = oe.get(e);
        if (s !== void 0)
          return s;
      }
      var h;
      ue = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = se.current, se.current = null, Ue();
      try {
        if (o) {
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
            } catch (K) {
              h = K;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (K) {
              h = K;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            h = K;
          }
          e();
        }
      } catch (K) {
        if (K && h && typeof K.stack == "string") {
          for (var y = K.stack.split(`
`), B = h.stack.split(`
`), F = y.length - 1, A = B.length - 1; F >= 1 && A >= 0 && y[F] !== B[A]; )
            A--;
          for (; F >= 1 && A >= 0; F--, A--)
            if (y[F] !== B[A]) {
              if (F !== 1 || A !== 1)
                do
                  if (F--, A--, A < 0 || y[F] !== B[A]) {
                    var U = `
` + y[F].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, U), U;
                  }
                while (F >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        ue = !1, se.current = _, Ve(), Error.prepareStackTrace = b;
      }
      var z = e ? e.displayName || e.name : "", $e = z ? re(z) : "";
      return typeof e == "function" && oe.set(e, $e), $e;
    }
    function Ke(e, o, s) {
      return xe(e, !1);
    }
    function qe(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ie(e, o, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, qe(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case $:
          return re("Suspense");
        case N:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            return Ke(e.render);
          case x:
            return ie(e.type, o, s);
          case O: {
            var h = e, b = h._payload, _ = h._init;
            try {
              return ie(_(b), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, ke = {}, Se = c.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var o = e._owner, s = ie(e.type, e._source, o ? o.type : null);
        Se.setExtraStackFrame(s);
      } else
        Se.setExtraStackFrame(null);
    }
    function Je(e, o, s, h, b) {
      {
        var _ = Function.call.bind(le);
        for (var C in e)
          if (_(e, C)) {
            var y = void 0;
            try {
              if (typeof e[C] != "function") {
                var B = Error((h || "React class") + ": " + s + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              y = e[C](o, C, h, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              y = F;
            }
            y && !(y instanceof Error) && (ae(b), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", s, C, typeof y), ae(null)), y instanceof Error && !(y.message in ke) && (ke[y.message] = !0, ae(b), v("Failed %s type: %s", s, y.message), ae(null));
          }
      }
    }
    var Ge = Array.isArray;
    function fe(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
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
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), _e(e);
    }
    var Z = c.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, de;
    de = {};
    function Qe(e) {
      if (le.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function et(e) {
      if (le.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, o) {
      if (typeof e.ref == "string" && Z.current && o && Z.current.stateNode !== o) {
        var s = g(Z.current.type);
        de[s] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g(Z.current.type), e.ref), de[s] = !0);
      }
    }
    function nt(e, o) {
      {
        var s = function() {
          Pe || (Pe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function rt(e, o) {
      {
        var s = function() {
          Oe || (Oe = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var ot = function(e, o, s, h, b, _, C) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: s,
        props: C,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function it(e, o, s, h, b) {
      {
        var _, C = {}, y = null, B = null;
        s !== void 0 && (je(s), y = "" + s), et(o) && (je(o.key), y = "" + o.key), Qe(o) && (B = o.ref, tt(o, b));
        for (_ in o)
          le.call(o, _) && !Ze.hasOwnProperty(_) && (C[_] = o[_]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (_ in F)
            C[_] === void 0 && (C[_] = F[_]);
        }
        if (y || B) {
          var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && nt(C, A), B && rt(C, A);
        }
        return ot(e, y, B, b, h, Z.current, C);
      }
    }
    var he = c.ReactCurrentOwner, De = c.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var o = e._owner, s = ie(e.type, e._source, o ? o.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var ge;
    ge = !1;
    function me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Ne() {
      {
        if (he.current) {
          var e = g(he.current.type);
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
          var o = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + o + ":" + s + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function at(e) {
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
    function Ae(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = at(o);
        if (Fe[s])
          return;
        Fe[s] = !0;
        var h = "";
        e && e._owner && e._owner !== he.current && (h = " It was passed a child from " + g(e._owner.type) + "."), G(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, h), G(null);
      }
    }
    function Ie(e, o) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var s = 0; s < e.length; s++) {
            var h = e[s];
            me(h) && Ae(h, o);
          }
        else if (me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = W(e);
          if (typeof b == "function" && b !== e.entries)
            for (var _ = b.call(e), C; !(C = _.next()).done; )
              me(C.value) && Ae(C.value, o);
        }
      }
    }
    function st(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var s;
        if (typeof o == "function")
          s = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === P || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === x))
          s = o.propTypes;
        else
          return;
        if (s) {
          var h = g(o);
          Je(s, e.props, "prop", h, e);
        } else if (o.PropTypes !== void 0 && !ge) {
          ge = !0;
          var b = g(o);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var o = Object.keys(e.props), s = 0; s < o.length; s++) {
          var h = o[s];
          if (h !== "children" && h !== "key") {
            G(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function Le(e, o, s, h, b, _) {
      {
        var C = d(e);
        if (!C) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = lt(b);
          B ? y += B : y += Ne();
          var F;
          e === null ? F = "null" : fe(e) ? F = "array" : e !== void 0 && e.$$typeof === i ? (F = "<" + (g(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, y);
        }
        var A = it(e, o, s, b, _);
        if (A == null)
          return A;
        if (C) {
          var U = o.children;
          if (U !== void 0)
            if (h)
              if (fe(U)) {
                for (var z = 0; z < U.length; z++)
                  Ie(U[z], e);
                Object.freeze && Object.freeze(U);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(U, e);
        }
        return e === E ? ct(A) : st(A), A;
      }
    }
    function ut(e, o, s) {
      return Le(e, o, s, !0);
    }
    function ft(e, o, s) {
      return Le(e, o, s, !1);
    }
    var dt = ft, ht = ut;
    te.Fragment = E, te.jsx = dt, te.jsxs = ht;
  }()), te;
}
process.env.NODE_ENV === "production" ? ve.exports = vt() : ve.exports = wt();
var R = ve.exports;
function H(w, i) {
  const T = w.match(/^(\s*)(```|> )/);
  return i === !0 ? T : T != null;
}
const Et = (w) => w.match(/^(\s*)> /) != null, yt = (w) => w.split(/[\r\n]/), pt = (w) => w.split(/[\r\n]/).length, Me = (w, i) => {
  const T = i.split(/[\r\n]/);
  let E = 0;
  for (let D = 0; D < T.length; D++)
    if (E += T[D].length + 1, E > w)
      return [w - (E - T[D].length - 1), D];
  throw new Error("error getPos");
}, Ct = (w, i) => {
  const T = Me(w, i), E = pt(i);
  return T[1] === E - 1;
}, Rt = (w, i) => Me(w, i)[1] === 0, Tt = (w) => {
  const i = w.match(/^\s*`{3}(.*)/), T = yt(w).slice(1).join(`
`);
  return [i == null ? void 0 : i[1], T];
}, Ye = we.forwardRef(
  function(i, T) {
    const [E, D] = ne({
      prefix: "",
      selection: "",
      suffix: ""
    }), j = () => {
      D({ prefix: "", selection: "", suffix: "" });
    }, [I, S] = ne({
      index: 0
    }), P = (c, v) => {
      let p = 0, f = "", u = !1;
      for (let l = 0; l < c.length; l++) {
        const t = c[l];
        t === "[" ? (p++, f = "") : t === "]" ? (p > 0 && (p--, f = "", u = !0), p === 0 && (u = !1)) : p > 0 && !u && (f += t);
      }
      let n = "";
      if (p > 0) {
        let l = 0, t = !1;
        for (let r = 0; r < v.length; r++) {
          const d = v[r];
          d === "[" ? l++ : d === "]" ? (l--, t = !0) : t || (n += d);
        }
        return l === 0 && (n = ""), f + n;
      }
      return "";
    }, $ = (c) => {
      let v = c.length - 1;
      for (let p = c.length - 1; p >= 0; p--)
        if (c[p] === "[") {
          v = p;
          break;
        }
      return c.slice(0, -(c.length - 1 - v));
    }, N = (c) => {
      let v = 0;
      for (let p = 0; p < c.length; p++)
        if (c[p] === "]") {
          v = p;
          break;
        }
      return c.slice(v);
    }, x = P(E.prefix, E.suffix);
    q(() => {
      if (!Y.current || !W.current)
        return;
      Y.current.style.display = "inline", E.selection === "" && x === "" ? W.current.style.display = "none" : W.current.style.display = "inline", W.current.style.left = Y.current.getBoundingClientRect().width + "px", W.current.style.top = -W.current.getBoundingClientRect().height + "px";
      const c = W.current.getBoundingClientRect().top + window.scrollY;
      c < 0 && (W.current.style.top = -W.current.getBoundingClientRect().height - c + "px"), Y.current.style.display = "none";
    }, [E, x]), q(() => {
      S({ index: 0 });
    }, [i.value]);
    const O = function(c) {
      D({
        prefix: c.currentTarget.value.slice(
          0,
          c.currentTarget.selectionStart
        ),
        selection: c.currentTarget.value.slice(
          c.currentTarget.selectionStart,
          c.currentTarget.selectionEnd
        ),
        suffix: c.currentTarget.value.slice(c.currentTarget.selectionEnd)
      });
    };
    let L = i.popupHandlers, V = !1;
    E.selection === "" && x !== "" && (L = i.keywords.filter((c) => c.indexOf(x) != -1).map((c, v) => ({
      name: c,
      handler: () => {
        const p = $(E.prefix), f = L[v].name;
        let u = N(E.suffix), n = (p + f).length;
        return (u.length == 0 || u[0] != "]") && (u = "]" + u, n += 1), {
          value: p + f + u,
          column: n
        };
      }
    })), L.length > 0 && (V = !0));
    const Y = J(null), W = J(null);
    return /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: i.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ R.jsx(
            "textarea",
            {
              ref: T,
              value: i.value,
              onPaste: i.onPaste,
              onCompositionStart: i.onCompositionStart,
              onCompositionEnd: (c) => {
                i.onCompositionEnd(c), O(c);
              },
              onChange: i.onChange,
              onKeyDown: (c) => {
                if (c.key === "Enter" && c.keyCode === 13 && V) {
                  const v = L[I.index].handler(null);
                  i.setLine(v.value), i.setCursor(v.column), c.preventDefault();
                } else
                  c.key == "Tab" && V ? (S((v) => {
                    let p = v.index + 1;
                    return p >= L.length && (p = 0), { index: p };
                  }), c.preventDefault()) : i.onKeyDown(E)(c);
              },
              onSelect: O
            }
          ),
          /* @__PURE__ */ R.jsx("div", { className: "popup", ref: W, children: L.map((c, v) => /* @__PURE__ */ R.jsx(
            "div",
            {
              className: I.index == v ? "selected" : "",
              onClick: () => {
                const p = c.handler(E);
                i.setLine(p.value), i.setCursor(p.column), j();
              },
              children: c.name
            },
            v
          )) }),
          /* @__PURE__ */ R.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: Y, children: E.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), bt = (w, i = null) => {
  const T = J(i);
  return q(() => {
    w && (typeof w == "function" ? w(T.current) : w.current = T.current);
  }, [w]), T;
}, xt = gt(
  function(i, T) {
    const E = bt(T), [D, j] = ne();
    q(() => {
      if (!E.current)
        return;
      const n = E.current.style.display;
      E.current.style.display = "block", E.current.style.height = "0px", E.current.style.height = E.current.scrollHeight + "px", E.current.style.display = n;
    }, [i.value, E, i.isFocus]);
    const I = (n, l, t) => {
      var m;
      const r = ["line"], d = n.match(/^(\s*)- /);
      if (n.indexOf("# ") === 0)
        r.push("h1-style");
      else if (n.indexOf("## ") === 0)
        r.push("h2-style");
      else if (n.indexOf("### ") === 0)
        r.push("h3-style");
      else if (d)
        r.push("list-style"), r.push("list-indent-" + d[1].length / 2);
      else if (H(n)) {
        const a = H(n, !0);
        r.push("list-indent-" + (((m = a == null ? void 0 : a[1]) == null ? void 0 : m.length) ?? 0) / 2);
      }
      return l && r.push("focus"), t && r.push("select"), r.join(" ");
    }, S = (n) => n ? [] : ["hide"], P = (n) => n ? "hide" : "", $ = (n, l, t) => {
      let r = -1, d = "";
      return l.forEach(function(m) {
        const a = n.indexOf(m, t);
        a !== -1 && (r === -1 || r > a) && (r = a, d = m);
      }), { pos: r, target: d };
    }, N = i.onLinkClick, x = Q((n) => {
      let l = 0;
      const t = [];
      for (; ; ) {
        const r = $(n, ["http://", "https://", " ", "["], l);
        if (r.target === "https://" || r.target === "http://") {
          l !== r.pos && t.push(n.slice(l, r.pos));
          const d = $(
            n,
            [" ", "\r", `
`],
            r.pos + r.target.length
          );
          if (d.pos !== -1) {
            const m = n.slice(r.pos, d.pos);
            t.push(/* @__PURE__ */ R.jsx("a", { href: m, children: m })), l = d.pos;
          } else {
            const m = n.slice(r.pos, n.length);
            t.push(/* @__PURE__ */ R.jsx("a", { href: m, children: m })), l = n.length;
            break;
          }
        } else if (r.target == " ")
          t.push(n.slice(l, r.pos)), t.push(" "), l = r.pos + r.target.length;
        else if (r.target == "[") {
          l !== r.pos && t.push(n.slice(l, r.pos));
          const d = $(n, ["]"], r.pos + r.target.length);
          if (d.pos !== -1) {
            const m = n.slice(r.pos, d.pos + 1);
            t.push([/* @__PURE__ */ R.jsx("span", { className: "braket", onClick: (a) => {
              N(m.slice(1, m.length - 1)), a.stopPropagation();
            }, children: m }, l)]), l = d.pos + 1;
          } else
            t.push(n.slice(l, n.length)), l = n.length;
        } else {
          t.push(n.slice(l, n.length)), l = n.length;
          break;
        }
      }
      return t;
    }, [N]), O = Q((n, l) => {
      const t = n ? i.blockStyles[n] : void 0;
      return t ? t(l) : /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx("span", { className: "block-type", children: n }),
        /* @__PURE__ */ R.jsx("pre", { children: l })
      ] });
    }, [i.blockStyles]), L = Q((n) => {
      const l = n.match(/^(\s*)```.*/), t = (l == null ? void 0 : l[1]) ?? "";
      return n = n.slice(t.length).split(`
`).map((r) => t + r).join(`
`), n;
    }, []), V = Q((n) => {
      const l = n.match(/^(\s*)> /), t = (l == null ? void 0 : l[1]) ?? "";
      return n = n.slice(t.length).split(`
`).map(
        (r, d) => t + (d === 0 ? "" : "> ") + r
      ).join(`
`), n;
    }, []), Y = Q((n) => {
      var l;
      if (console.log(n), H(n))
        if (Et(n)) {
          const t = n.match(/\s*> /), r = n.slice((l = t == null ? void 0 : t[0]) == null ? void 0 : l.length);
          j(
            /* @__PURE__ */ R.jsxs("div", { children: [
              /* @__PURE__ */ R.jsx("pre", { className: "for-copy", children: V(n) }),
              /* @__PURE__ */ R.jsx("div", { className: "no-select", children: O("pre", r) })
            ] })
          );
          return;
        } else {
          const t = Tt(n);
          try {
            const r = O(t[0], t[1]);
            j(
              /* @__PURE__ */ R.jsxs("div", { children: [
                /* @__PURE__ */ R.jsx("pre", { className: "for-copy", children: L(n + "\n```") }),
                /* @__PURE__ */ R.jsx("div", { className: "no-select", children: r })
              ] })
            );
          } catch (r) {
            r instanceof Promise && r.then((d) => {
              console.log(d), j(d);
            }), j(/* @__PURE__ */ R.jsx("div", { children: "loading..." }));
          }
          return;
        }
      else {
        const t = ["elm"], r = n.match(/^(\s*)-( .*)$/);
        let d = null;
        n.indexOf("# ") === 0 || n.indexOf("## ") === 0 || n.indexOf("### ") === 0 || r && (n = r[2], d = /* @__PURE__ */ R.jsx("pre", { className: "for-copy-inline", children: r[1] + "-" })), j(
          /* @__PURE__ */ R.jsxs("div", { className: t.join(" "), children: [
            d,
            x(n)
          ] })
        );
        return;
      }
    }, [L, V, O, x]), W = (n) => {
      const l = n.match(/^(\s*-)( .*)$/);
      let t = "";
      if (l)
        n = l[2], t = l[1];
      else {
        const r = n.match(/^(\s*)(```.*|> )/);
        r && (t = r[1], n = n.slice(r[1].length));
      }
      return [t, n];
    }, c = J(null), v = (n) => (l) => {
      if (l.buttons !== 0 && c.current) {
        n();
        const t = new Range();
        t.selectNodeContents(c.current);
        const r = document.getSelection();
        if (!r)
          throw new Error("selection is null");
        r.empty(), r.addRange(t);
      }
    }, p = W(i.value), f = p[0], u = p[1];
    return q(() => {
      Y(i.value);
    }, [Y, i.value]), H(u) ? /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: I(i.value, i.isFocus, i.isSelect),
        ref: c,
        "data-lineno": i.row,
        onClick: i.onClick,
        children: [
          /* @__PURE__ */ R.jsx(
            "div",
            {
              className: ["line-item"].concat(S(i.isFocus)).join(" "),
              onMouseLeave: v(i.selectThisLine),
              children: /* @__PURE__ */ R.jsx(
                Ye,
                {
                  ref: E,
                  value: u,
                  keywords: i.keywords,
                  setLine: i.setLine(f),
                  setCursor: i.setCursor,
                  onCompositionStart: i.onCompositionStart,
                  onCompositionEnd: i.onCompositionEnd,
                  onChange: i.onChange(f),
                  popupHandlers: [],
                  onKeyDown: () => i.onKeyDown(f, u)
                }
              )
            }
          ),
          /* @__PURE__ */ R.jsx("div", { className: "line-item", children: D })
        ]
      }
    ) : /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: I(i.value, i.isFocus, i.isSelect),
        ref: c,
        "data-lineno": i.row,
        onClick: i.onClick,
        children: [
          /* @__PURE__ */ R.jsx(
            "div",
            {
              className: S(i.isFocus) + " container",
              onMouseLeave: v(i.selectThisLine),
              children: /* @__PURE__ */ R.jsx(
                Ye,
                {
                  ref: E,
                  value: u,
                  keywords: i.keywords,
                  setLine: i.setLine(f),
                  setCursor: i.setCursor,
                  onPaste: i.onPaste(i.row),
                  onCompositionStart: i.onCompositionStart,
                  onCompositionEnd: i.onCompositionEnd,
                  onChange: i.onChange(f),
                  popupHandlers: i.textPopupHandlers,
                  onKeyDown: (n) => (l) => {
                    l.key === "Enter" && l.keyCode === 13 && n.selection !== "" ? l.preventDefault() : i.onKeyDown(f, u)(l);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ R.jsx("div", { className: P(i.isFocus), children: D })
        ]
      }
    );
  }
), St = (w) => {
  const i = w.lines, T = w.setLines, E = w.onChange;
  q(() => {
    E(i);
  }, [i, E]);
  const D = J(!1), [j, I] = ne({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, P] = ne([0, 0]), $ = (f) => f == null ? null : f instanceof HTMLElement && f.classList.contains("line") ? f : $(f.parentElement), N = J(null);
  let x, O, L = !1;
  const V = () => {
    L = !0;
    const f = document.getSelection();
    f && (x = $(f.anchorNode), O = $(f.focusNode), (x == null ? void 0 : x.parentNode) != N.current && (x = null, O = null), x !== O && I({ row: -1, col: 0 }));
  }, Y = () => {
    var f, u, n, l;
    if (L && (L = !1, x && O && x !== O)) {
      const t = new Range();
      if (t.setStart(x, 0), t.setEnd(O, O.children.length), document.getSelection().empty(), document.getSelection().addRange(t), !((f = x.dataset) != null && f.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const r = parseInt((u = x.dataset) == null ? void 0 : u.lineno);
      if (!((n = O.dataset) != null && n.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const d = parseInt((l = O.dataset) == null ? void 0 : l.lineno);
      P([r, d]);
    }
  }, W = () => () => {
    I(() => ({ row: -1, col: 0 })), L = !0;
  }, c = J(null);
  q(() => {
    var f;
    if (c.current)
      if (S[1] - S[0] >= 1) {
        c.current.style.display = "block";
        const u = (f = document.getSelection()) == null ? void 0 : f.focusNode;
        if (!u)
          throw new Error("focusNode is null");
        if (!(u instanceof Element))
          throw new Error("focusNode is not Element");
        const n = u.getBoundingClientRect(), l = n.bottom, t = n.x + n.width / 2;
        c.current.style.left = t + "px", c.current.style.top = l + "px";
      } else
        c.current.style.display = "none";
  }, [S]);
  const v = (f) => (u) => {
    const l = u.clipboardData.getData("text").split(/\r\n|\n/);
    if (l.length === 1)
      return !0;
    const t = [];
    let r = [], d = !1, m = "";
    return l.forEach((a) => {
      const g = a.match(/^(\s*)(```.*)/);
      d ? a.indexOf(m + "```") === 0 ? (t.push(r.join(`
`)), d = !1, r = []) : (m !== "" && a.indexOf(m) !== 0 && (t.push(r.join(`
`)), d = !1, r = [], t.push(a)), r.push(a.slice(m.length))) : g ? (d = !0, m = g[1], r.push(a)) : t.push(a);
    }), r.length !== 0 && t.push(r.join(`
`)), T((a) => (a[f] = a[f] + t[0], a.splice(f + 1, 0, ...t.slice(1)), [...a])), u.preventDefault(), !1;
  };
  q(() => {
    document.addEventListener("selectionchange", V), document.addEventListener("pointerup", Y);
  }, []);
  const p = J([]);
  return q(() => {
    if (j.row !== -1 && D.current === !1) {
      const f = p.current[j.row];
      if (!f || !f.current)
        return;
      f.current.focus();
      let u = j.colEnd;
      (u === void 0 || u === -1) && (u = j.col), console.log("EFFECT", "col:", j.col, "end:", u), f.current.setSelectionRange(j.col, u, j.direction);
    }
  }, [j, i]), i.forEach((f, u) => {
    p.current[u] = mt();
  }), /* @__PURE__ */ R.jsxs("div", { className: "editor", ref: N, children: [
    i.map((f, u) => /* @__PURE__ */ R.jsx(
      xt,
      {
        ref: p.current[u],
        isFocus: u === j.row,
        isSelect: S[0] <= u && u <= S[1],
        row: u,
        value: f,
        textPopupHandlers: w.textPopupHandlers,
        keywords: w.keywords,
        blockStyles: w.blockStyles,
        selectThisLine: W(),
        setLine: (n) => (l) => ((t) => {
          T((r) => (r[t] = n + l, [...r]));
        })(u),
        setCursor: (n) => ((l) => {
          I((t) => ({
            row: l,
            col: n,
            colEnd: -1,
            direction: t.direction
          }));
        })(u),
        onPaste: v,
        onCompositionStart: () => {
          D.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          D.current = !1, console.log("composition end");
        },
        onChange: (n) => (l) => ((t) => {
          if (console.log("onChange", D.current), D.current === !1) {
            const r = l.target.selectionStart, d = l.target.selectionEnd, m = l.target.selectionDirection;
            I((a) => ({
              row: a.row,
              col: r,
              colEnd: d,
              direction: m
            }));
          }
          T((r) => (r[t] = n + l.target.value, [...r]));
        })(u),
        onKeyDown: (n, l) => (t) => {
          let r = t.currentTarget.selectionStart, d = t.currentTarget.selectionEnd, m = t.currentTarget.selectionDirection;
          I((a) => {
            switch (t.key) {
              case "ArrowLeft": {
                if (t.currentTarget != null && t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0) {
                  if (a.row === 0)
                    return a;
                  const g = i[j.row - 1].length;
                  return t.preventDefault(), {
                    row: a.row - 1,
                    col: g,
                    colEnd: -1,
                    direction: m
                  };
                }
                return t.shiftKey ? r == d ? (r--, m = "backward") : m === "forward" ? d-- : m === "backward" && r-- : (r--, d = -1), t.preventDefault(), {
                  row: a.row,
                  col: r,
                  colEnd: d,
                  direction: m
                };
              }
              case "ArrowRight": {
                const g = -n.length + i[j.row].length;
                return t.currentTarget != null && t.currentTarget.selectionStart === g && t.currentTarget.selectionEnd === g ? a.row === i.length - 1 ? a : (t.preventDefault(), {
                  row: a.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: m
                }) : (t.shiftKey ? m === "forward" ? d++ : m === "backward" && r++ : (r < d && (r = d), r++, d = -1), t.preventDefault(), {
                  row: a.row,
                  col: r,
                  colEnd: d,
                  direction: m
                });
              }
              case "ArrowUp":
                return H(l) && !Rt(t.currentTarget.selectionStart, l) || a.row === 0 ? a : (t.preventDefault(), {
                  row: a.row - 1,
                  col: t.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: m
                });
              case "ArrowDown":
                return H(l) && !Ct(t.currentTarget.selectionStart, l) || a.row === i.length - 1 ? a : (t.preventDefault(), {
                  row: a.row + 1,
                  col: t.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: m
                });
              case "Backspace":
                if (n.length !== 0 && (t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0 || t.currentTarget.selectionStart === 1 && t.currentTarget.selectionEnd === 1))
                  n.length !== 0 && (T((g) => (n.length === 1 ? (g[a.row] = t.currentTarget.value.slice(1), r--, r === -1 && r++) : n.length > 0 && (g[a.row] = n.slice(2) + t.currentTarget.value), [...g])), t.preventDefault());
                else if (t.currentTarget != null && t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0) {
                  if (a.row === 0)
                    return a;
                  const g = i[j.row - 1].length;
                  return T((k) => (H(k[a.row - 1]) ? k[a.row - 1] += `
` + k[a.row] : k[a.row - 1] += k[a.row], k.splice(a.row, 1), [...k])), t.preventDefault(), {
                    row: a.row - 1,
                    col: g,
                    colEnd: -1,
                    direction: m
                  };
                }
                return console.log("normal Backspace", r), {
                  row: a.row,
                  col: r,
                  colEnd: d,
                  direction: m
                };
              case "Tab":
                return T((g) => {
                  if (t.shiftKey)
                    n.length === 1 ? (g[a.row] = t.currentTarget.value.slice(1), r--) : n.length > 0 && (g[a.row] = n.slice(2) + t.currentTarget.value);
                  else {
                    let k = "-";
                    H(t.currentTarget.value) && (k = " "), n.length === 0 ? (g[a.row] = k + " " + t.currentTarget.value, r++) : g[a.row] = "  " + n + t.currentTarget.value;
                  }
                  return I((k) => ({
                    row: k.row,
                    col: r,
                    colEnd: -1,
                    direction: m
                  })), [...g];
                }), t.preventDefault(), {
                  row: a.row,
                  col: r,
                  colEnd: -1,
                  direction: m
                };
              case "Enter":
                return t.keyCode === 13 ? H(l) && !t.shiftKey ? a : (T((g) => {
                  const k = n.length + t.currentTarget.selectionStart;
                  let M = g[a.row].slice(k);
                  if (H(l)) {
                    const X = g[a.row];
                    X[X.length - 1] === `
` ? g[a.row] = g[a.row].slice(
                      0,
                      k - 1
                    ) : g[a.row] = g[a.row].slice(
                      0,
                      k
                    ), M.length > 0 && M[0] === `
` && (M = M.slice(1));
                  } else
                    g[a.row] = g[a.row].slice(
                      0,
                      k
                    );
                  return n.length !== 0 ? g.splice(
                    a.row + 1,
                    0,
                    n + " " + M
                  ) : g.splice(a.row + 1, 0, M), [...g];
                }), t.preventDefault(), {
                  row: a.row + 1,
                  col: n.length,
                  colEnd: -1,
                  direction: m
                }) : a;
              case " ":
                return console.log("space", r), (r === 0 || r === 1 && n.length >= 1) && (T((g) => {
                  let k = "-";
                  return H(t.currentTarget.value) && (k = " "), n.length === 0 ? (g[a.row] = k + " " + t.currentTarget.value, r++) : g[a.row] = "  " + n + t.currentTarget.value, [...g];
                }), t.preventDefault()), {
                  row: a.row,
                  col: r,
                  colEnd: -1,
                  direction: m
                };
              default:
                return a;
            }
          });
        },
        onLinkClick: w.onLinkClick,
        onClick: (n) => {
          if (j.row !== u) {
            const l = n.target.selectionStart;
            P([u, u]), I(() => ({ row: u, col: l }));
          }
        }
      },
      u
    )),
    /* @__PURE__ */ R.jsx("div", { className: "popup", ref: c, children: w.linePopupHandlers.map((f, u) => /* @__PURE__ */ R.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (f.handler(
            i.slice(S[0], S[1] + 1),
            S
          ), P([S[1], S[1]]));
        },
        onTouchStart: () => {
          f.handler(i.slice(S[0], S[1] + 1)), P([S[1], S[1]]);
        },
        children: f.name
      },
      u
    )) })
  ] });
};
export {
  St as Editor
};
