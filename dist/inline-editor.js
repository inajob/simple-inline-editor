import pe, { useState as ie, useEffect as q, useRef as z, forwardRef as vt, useCallback as re, createRef as yt } from "react";
var be = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function mt() {
  if ($e)
    return ne;
  $e = 1;
  var h = pe, r = Symbol.for("react.element"), p = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, A = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(d, E, S) {
    var O, D = {}, B = null, _ = null;
    S !== void 0 && (B = "" + S), E.key !== void 0 && (B = "" + E.key), E.ref !== void 0 && (_ = E.ref);
    for (O in E)
      v.call(E, O) && !H.hasOwnProperty(O) && (D[O] = E[O]);
    if (d && d.defaultProps)
      for (O in E = d.defaultProps, E)
        D[O] === void 0 && (D[O] = E[O]);
    return { $$typeof: r, type: d, key: B, ref: _, props: D, _owner: A.current };
  }
  return ne.Fragment = p, ne.jsx = $, ne.jsxs = $, ne;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function wt() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var h = pe, r = Symbol.for("react.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), d = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), I = Symbol.iterator, Y = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = I && e[I] || e[Y];
      return typeof o == "function" ? o : null;
    }
    var u = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          s[g - 1] = arguments[g];
        m("error", e, s);
      }
    }
    function m(e, o, s) {
      {
        var g = u.ReactDebugCurrentFrame, x = g.getStackAddendum();
        x !== "" && (o += "%s", s = s.concat([x]));
        var P = s.map(function(T) {
          return String(T);
        });
        P.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, P);
      }
    }
    var M = !1, F = !1, t = !1, i = !1, a = !1, l;
    l = Symbol.for("react.module.reference");
    function n(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === H || a || e === A || e === S || e === O || i || e === _ || M || F || t || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === D || e.$$typeof === $ || e.$$typeof === d || e.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === l || e.getModuleId !== void 0));
    }
    function f(e, o, s) {
      var g = e.displayName;
      if (g)
        return g;
      var x = o.displayName || o.name || "";
      return x !== "" ? s + "(" + x + ")" : s;
    }
    function w(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case p:
          return "Portal";
        case H:
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
          case d:
            var o = e;
            return w(o) + ".Consumer";
          case $:
            var s = e;
            return w(s._context) + ".Provider";
          case E:
            return f(e, e.render, "ForwardRef");
          case D:
            var g = e.displayName || null;
            return g !== null ? g : b(e.type) || "Memo";
          case B: {
            var x = e, P = x._payload, T = x._init;
            try {
              return b(T(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var c = Object.assign, C = 0, j, X, J, ee, Ee, ke, Ce;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function He() {
      {
        if (C === 0) {
          j = console.log, X = console.info, J = console.warn, ee = console.error, Ee = console.group, ke = console.groupCollapsed, Ce = console.groupEnd;
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
        C++;
      }
    }
    function Ue() {
      {
        if (C--, C === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: c({}, e, {
              value: j
            }),
            info: c({}, e, {
              value: X
            }),
            warn: c({}, e, {
              value: J
            }),
            error: c({}, e, {
              value: ee
            }),
            group: c({}, e, {
              value: Ee
            }),
            groupCollapsed: c({}, e, {
              value: ke
            }),
            groupEnd: c({}, e, {
              value: Ce
            })
          });
        }
        C < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = u.ReactCurrentDispatcher, de;
    function ae(e, o, s) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (x) {
            var g = x.stack.trim().match(/\n( *(at )?)/);
            de = g && g[1] || "";
          }
        return `
` + de + e;
      }
    }
    var he = !1, le;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ve();
    }
    function Re(e, o) {
      if (!e || he)
        return "";
      {
        var s = le.get(e);
        if (s !== void 0)
          return s;
      }
      var g;
      he = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = fe.current, fe.current = null, He();
      try {
        if (o) {
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
            } catch (G) {
              g = G;
            }
            Reflect.construct(e, [], T);
          } else {
            try {
              T.call();
            } catch (G) {
              g = G;
            }
            e.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            g = G;
          }
          e();
        }
      } catch (G) {
        if (G && g && typeof G.stack == "string") {
          for (var k = G.stack.split(`
`), K = g.stack.split(`
`), N = k.length - 1, L = K.length - 1; N >= 1 && L >= 0 && k[N] !== K[L]; )
            L--;
          for (; N >= 1 && L >= 0; N--, L--)
            if (k[N] !== K[L]) {
              if (N !== 1 || L !== 1)
                do
                  if (N--, L--, L < 0 || k[N] !== K[L]) {
                    var U = `
` + k[N].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, U), U;
                  }
                while (N >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        he = !1, fe.current = P, Ue(), Error.prepareStackTrace = x;
      }
      var Q = e ? e.displayName || e.name : "", Me = Q ? ae(Q) : "";
      return typeof e == "function" && le.set(e, Me), Me;
    }
    function qe(e, o, s) {
      return Re(e, !1);
    }
    function Je(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function se(e, o, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Je(e));
      if (typeof e == "string")
        return ae(e);
      switch (e) {
        case S:
          return ae("Suspense");
        case O:
          return ae("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            return qe(e.render);
          case D:
            return se(e.type, o, s);
          case B: {
            var g = e, x = g._payload, P = g._init;
            try {
              return se(P(x), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, xe = {}, Se = u.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var o = e._owner, s = se(e.type, e._source, o ? o.type : null);
        Se.setExtraStackFrame(s);
      } else
        Se.setExtraStackFrame(null);
    }
    function Ge(e, o, s, g, x) {
      {
        var P = Function.call.bind(ce);
        for (var T in e)
          if (P(e, T)) {
            var k = void 0;
            try {
              if (typeof e[T] != "function") {
                var K = Error((g || "React class") + ": " + s + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              k = e[T](o, T, g, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              k = N;
            }
            k && !(k instanceof Error) && (ue(x), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", s, T, typeof k), ue(null)), k instanceof Error && !(k.message in xe) && (xe[k.message] = !0, ue(x), y("Failed %s type: %s", s, k.message), ue(null));
          }
      }
    }
    var ze = Array.isArray;
    function ge(e) {
      return ze(e);
    }
    function Xe(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, s = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function Ze(e) {
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
      if (Ze(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), _e(e);
    }
    var te = u.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, ve;
    ve = {};
    function et(e) {
      if (ce.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tt(e) {
      if (ce.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rt(e, o) {
      if (typeof e.ref == "string" && te.current && o && te.current.stateNode !== o) {
        var s = b(te.current.type);
        ve[s] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(te.current.type), e.ref), ve[s] = !0);
      }
    }
    function nt(e, o) {
      {
        var s = function() {
          Pe || (Pe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function ot(e, o) {
      {
        var s = function() {
          Oe || (Oe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var it = function(e, o, s, g, x, P, T) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: s,
        props: T,
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
        value: g
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function at(e, o, s, g, x) {
      {
        var P, T = {}, k = null, K = null;
        s !== void 0 && (je(s), k = "" + s), tt(o) && (je(o.key), k = "" + o.key), et(o) && (K = o.ref, rt(o, x));
        for (P in o)
          ce.call(o, P) && !Qe.hasOwnProperty(P) && (T[P] = o[P]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (P in N)
            T[P] === void 0 && (T[P] = N[P]);
        }
        if (k || K) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && nt(T, L), K && ot(T, L);
        }
        return it(e, k, K, x, g, te.current, T);
      }
    }
    var ye = u.ReactCurrentOwner, De = u.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var o = e._owner, s = se(e.type, e._source, o ? o.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Fe() {
      {
        if (ye.current) {
          var e = b(ye.current.type);
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
    var Ne = {};
    function st(e) {
      {
        var o = Fe();
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
        var s = st(o);
        if (Ne[s])
          return;
        Ne[s] = !0;
        var g = "";
        e && e._owner && e._owner !== ye.current && (g = " It was passed a child from " + b(e._owner.type) + "."), Z(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, g), Z(null);
      }
    }
    function Le(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var s = 0; s < e.length; s++) {
            var g = e[s];
            we(g) && Ae(g, o);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = W(e);
          if (typeof x == "function" && x !== e.entries)
            for (var P = x.call(e), T; !(T = P.next()).done; )
              we(T.value) && Ae(T.value, o);
        }
      }
    }
    function ct(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var s;
        if (typeof o == "function")
          s = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === D))
          s = o.propTypes;
        else
          return;
        if (s) {
          var g = b(o);
          Ge(s, e.props, "prop", g, e);
        } else if (o.PropTypes !== void 0 && !me) {
          me = !0;
          var x = b(o);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(e) {
      {
        for (var o = Object.keys(e.props), s = 0; s < o.length; s++) {
          var g = o[s];
          if (g !== "children" && g !== "key") {
            Z(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Ie(e, o, s, g, x, P) {
      {
        var T = n(e);
        if (!T) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = lt(x);
          K ? k += K : k += Fe();
          var N;
          e === null ? N = "null" : ge(e) ? N = "array" : e !== void 0 && e.$$typeof === r ? (N = "<" + (b(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, k);
        }
        var L = at(e, o, s, x, P);
        if (L == null)
          return L;
        if (T) {
          var U = o.children;
          if (U !== void 0)
            if (g)
              if (ge(U)) {
                for (var Q = 0; Q < U.length; Q++)
                  Le(U[Q], e);
                Object.freeze && Object.freeze(U);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(U, e);
        }
        return e === v ? ut(L) : ct(L), L;
      }
    }
    function ft(e, o, s) {
      return Ie(e, o, s, !0);
    }
    function dt(e, o, s) {
      return Ie(e, o, s, !1);
    }
    var ht = dt, gt = ft;
    oe.Fragment = v, oe.jsx = ht, oe.jsxs = gt;
  }()), oe;
}
process.env.NODE_ENV === "production" ? be.exports = mt() : be.exports = wt();
var R = be.exports;
function V(h, r) {
  const p = h.match(/^(\s*)(```|> )/);
  return r === !0 ? p : p != null;
}
const bt = (h) => h.match(/^(\s*)> /) != null, pt = (h) => h.split(/[\r\n]/), Et = (h) => h.split(/[\r\n]/).length, Ye = (h, r) => {
  const p = r.split(/[\r\n]/);
  let v = 0;
  for (let A = 0; A < p.length; A++)
    if (v += p[A].length + 1, v > h)
      return [h - (v - p[A].length - 1), A];
  throw new Error("error getPos");
}, kt = (h, r) => {
  const p = Ye(h, r), v = Et(r);
  return p[1] === v - 1;
}, Ct = (h, r) => Ye(h, r)[1] === 0, Tt = (h) => {
  const r = h.match(/^\s*`{3}(.*)/), p = pt(h).slice(1).join(`
`);
  return [r == null ? void 0 : r[1], p];
}, Ke = (h) => {
  const r = h.match(/^(\s*-)( .*)$/);
  let p = "";
  if (r)
    h = r[2], p = r[1];
  else {
    const v = h.match(/^(\s*)(```.*|> )/);
    v && (p = v[1], h = h.slice(v[1].length));
  }
  return [p, h];
}, Be = pe.forwardRef(
  function(r, p) {
    const [v, A] = ie({
      prefix: "",
      selection: "",
      suffix: ""
    }), H = () => {
      A({ prefix: "", selection: "", suffix: "" });
    }, [$, d] = ie({
      index: 0
    }), E = (u, y) => {
      let m = 0, M = "", F = !1;
      for (let i = 0; i < u.length; i++) {
        const a = u[i];
        a === "[" ? (m++, M = "") : a === "]" ? (m > 0 && (m--, M = "", F = !0), m === 0 && (F = !1)) : m > 0 && !F && (M += a);
      }
      let t = "";
      if (m > 0) {
        let i = 0, a = !1;
        for (let l = 0; l < y.length; l++) {
          const n = y[l];
          n === "[" ? i++ : n === "]" ? (i--, a = !0) : a || (t += n);
        }
        return i === 0 && (t = ""), M + t;
      }
      return "";
    }, S = (u) => {
      let y = u.length - 1;
      for (let m = u.length - 1; m >= 0; m--)
        if (u[m] === "[") {
          y = m;
          break;
        }
      return u.slice(0, -(u.length - 1 - y));
    }, O = (u) => {
      let y = 0;
      for (let m = 0; m < u.length; m++)
        if (u[m] === "]") {
          y = m;
          break;
        }
      return u.slice(y);
    }, D = E(v.prefix, v.suffix);
    q(() => {
      if (!Y.current || !W.current)
        return;
      Y.current.style.display = "inline", v.selection === "" && D === "" ? W.current.style.display = "none" : W.current.style.display = "inline", W.current.style.left = Y.current.getBoundingClientRect().width + "px", W.current.style.top = -W.current.getBoundingClientRect().height + "px";
      const u = W.current.getBoundingClientRect().top + window.scrollY;
      u < 0 && (W.current.style.top = -W.current.getBoundingClientRect().height - u + "px"), Y.current.style.display = "none";
    }, [v, D]), q(() => {
      d({ index: 0 });
    }, [r.value]);
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
    let _ = r.popupHandlers, I = !1;
    v.selection === "" && D !== "" && (_ = r.keywords.map((u) => u.value).filter((u) => u.indexOf(D) != -1).map((u, y) => ({
      name: u,
      handler: () => {
        const m = S(v.prefix), M = _[y].name;
        let F = O(v.suffix), t = (m + M).length;
        return (F.length == 0 || F[0] != "]") && (F = "]" + F, t += 1), {
          value: m + M + F,
          column: t
        };
      }
    })), _.length > 0 && (I = !0));
    const Y = z(null), W = z(null);
    return /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: r.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ R.jsx(
            "textarea",
            {
              ref: p,
              value: r.value,
              onPaste: r.onPaste,
              onCompositionStart: r.onCompositionStart,
              onCompositionEnd: (u) => {
                r.onCompositionEnd(u), B(u);
              },
              onChange: r.onChange,
              onKeyDown: (u) => {
                if (u.key === "Enter" && u.keyCode === 13 && I) {
                  const y = _[$.index].handler(null);
                  r.setLine(y.value), r.setCursor(y.column), u.preventDefault();
                } else
                  u.key == "Tab" && I ? (d((y) => {
                    let m = y.index + 1;
                    return m >= _.length && (m = 0), { index: m };
                  }), u.preventDefault()) : u.key == "Enter" && u.shiftKey ? (r.onMagicFunc(), u.preventDefault()) : r.onKeyDown(v)(u);
              },
              onSelect: B
            }
          ),
          /* @__PURE__ */ R.jsx("div", { className: "popup", ref: W, children: _.map((u, y) => /* @__PURE__ */ R.jsx(
            "div",
            {
              className: $.index == y ? "selected" : "",
              onClick: () => {
                const m = u.handler(v);
                r.setLine(m.value), r.setCursor(m.column), H();
              },
              children: u.name
            },
            y
          )) }),
          /* @__PURE__ */ R.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: Y, children: v.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), Rt = (h, r = null) => {
  const p = z(r);
  return q(() => {
    h && (typeof h == "function" ? h(p.current) : h.current = p.current);
  }, [h]), p;
}, xt = vt(
  function(r, p) {
    const v = Rt(p), [A, H] = ie();
    q(() => {
      if (!v.current)
        return;
      const t = v.current.style.display;
      v.current.style.display = "block", v.current.style.height = "0px", v.current.style.height = v.current.scrollHeight + "px", v.current.style.display = t;
    }, [r.value, v, r.isFocus]);
    const $ = (t, i, a) => {
      var f;
      const l = ["line"], n = t.match(/^(\s*)- /);
      if (t.indexOf("# ") === 0)
        l.push("h1-style");
      else if (t.indexOf("## ") === 0)
        l.push("h2-style");
      else if (t.indexOf("### ") === 0)
        l.push("h3-style");
      else if (n)
        l.push("list-style"), l.push("list-indent-" + n[1].length / 2);
      else if (V(t)) {
        const w = V(t, !0);
        l.push("list-indent-" + (((f = w == null ? void 0 : w[1]) == null ? void 0 : f.length) ?? 0) / 2);
      }
      return i && l.push("focus"), a && l.push("select"), l.join(" ");
    }, d = (t) => t ? [] : ["hide"], E = (t) => t ? "hide" : "", S = (t, i, a) => {
      let l = -1, n = "";
      return i.forEach(function(f) {
        const w = t.indexOf(f, a);
        w !== -1 && (l === -1 || l > w) && (l = w, n = f);
      }), { pos: l, target: n };
    }, O = r.onLinkClick, D = r.onSubLinkClick, B = re((t) => {
      let i = 0;
      const a = [];
      for (; ; ) {
        const l = S(t, ["http://", "https://", " ", "["], i);
        if (l.target === "https://" || l.target === "http://") {
          i !== l.pos && a.push(t.slice(i, l.pos));
          const n = S(
            t,
            [" ", "\r", `
`],
            l.pos + l.target.length
          );
          if (n.pos !== -1) {
            const f = t.slice(l.pos, n.pos);
            a.push(/* @__PURE__ */ R.jsx("a", { href: f, children: f }, i)), i = n.pos;
          } else {
            const f = t.slice(l.pos, t.length);
            a.push(/* @__PURE__ */ R.jsx("a", { href: f, children: f }, i)), i = t.length;
            break;
          }
        } else if (l.target == " ")
          a.push(t.slice(i, l.pos)), a.push(" "), i = l.pos + l.target.length;
        else if (l.target == "[") {
          i !== l.pos && a.push(t.slice(i, l.pos));
          const n = S(t, ["]"], l.pos + l.target.length);
          if (n.pos !== -1) {
            const f = t.slice(l.pos, n.pos + 1), w = f.slice(1, f.length - 1), b = r.keywords.find((C) => C.value == w);
            console.log("K", w, r.keywords, b);
            let c = " unknown";
            b && (c = " " + b.style), a.push([/* @__PURE__ */ R.jsxs("span", { children: [
              /* @__PURE__ */ R.jsx("span", { className: "braket" + c, onClick: (C) => {
                O(w), C.stopPropagation();
              }, children: w }),
              /* @__PURE__ */ R.jsx("span", { className: "bracket-icon", onClick: (C) => {
                D(w), C.stopPropagation();
              }, children: "[]" })
            ] }, i)]), i = n.pos + 1;
          } else
            a.push(t.slice(i, t.length)), i = t.length;
        } else {
          a.push(t.slice(i, t.length)), i = t.length;
          break;
        }
      }
      return a;
    }, [O, D, r.keywords]), _ = re((t, i) => {
      const a = t ? r.blockStyles[t] : void 0;
      return a ? a(i, H) : /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx("span", { className: "block-type", children: t }),
        /* @__PURE__ */ R.jsx("pre", { children: i })
      ] });
    }, [r.blockStyles]), I = re((t) => {
      const i = t.match(/^(\s*)```.*/), a = (i == null ? void 0 : i[1]) ?? "";
      return t = t.slice(a.length).split(`
`).map((l) => a + l).join(`
`), t;
    }, []), Y = re((t) => {
      const i = t.match(/^(\s*)> /), a = (i == null ? void 0 : i[1]) ?? "";
      return t = t.slice(a.length).split(`
`).map(
        (l, n) => a + (n === 0 ? "" : "> ") + l
      ).join(`
`), t;
    }, []), W = re((t) => {
      var i;
      if (console.log(t), V(t))
        if (bt(t)) {
          const a = t.match(/\s*> /), l = t.slice((i = a == null ? void 0 : a[0]) == null ? void 0 : i.length);
          H(
            /* @__PURE__ */ R.jsxs("div", { children: [
              /* @__PURE__ */ R.jsx("pre", { className: "for-copy", children: Y(t) }),
              /* @__PURE__ */ R.jsx("div", { className: "no-select", children: _("pre", l) })
            ] })
          );
          return;
        } else {
          const a = Tt(t), l = _(a[0], a[1]);
          H(
            /* @__PURE__ */ R.jsxs("div", { children: [
              /* @__PURE__ */ R.jsx("pre", { className: "for-copy", children: I(t + "\n```") }),
              /* @__PURE__ */ R.jsx("div", { className: "no-select", children: l })
            ] })
          );
          return;
        }
      else {
        const a = ["elm"], l = t.match(/^(\s*)-( .*)$/);
        let n = null;
        t.indexOf("# ") === 0 || t.indexOf("## ") === 0 || t.indexOf("### ") === 0 || l && (t = l[2], n = /* @__PURE__ */ R.jsx("pre", { className: "for-copy-inline", children: l[1] + "-" })), H(
          /* @__PURE__ */ R.jsxs("div", { className: a.join(" "), children: [
            n,
            B(t)
          ] })
        );
        return;
      }
    }, [I, Y, _, B]), u = z(null), y = (t) => (i) => {
      if (i.buttons !== 0 && u.current) {
        t();
        const a = new Range();
        a.selectNodeContents(u.current);
        const l = document.getSelection();
        if (!l)
          throw new Error("selection is null");
        l.empty(), l.addRange(a);
      }
    }, m = Ke(r.value), M = m[0], F = m[1];
    return q(() => {
      W(r.value);
    }, [W, r.value]), V(F) ? /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: $(r.value, r.isFocus, r.isSelect),
        ref: u,
        "data-lineno": r.row,
        onClick: r.onClick,
        children: [
          /* @__PURE__ */ R.jsx(
            "div",
            {
              className: ["line-item"].concat(d(r.isFocus)).join(" "),
              onMouseLeave: y(r.selectThisLine),
              children: /* @__PURE__ */ R.jsx(
                Be,
                {
                  ref: v,
                  value: F,
                  keywords: r.keywords,
                  setLine: r.setLine(M),
                  setCursor: r.setCursor,
                  onCompositionStart: r.onCompositionStart,
                  onCompositionEnd: r.onCompositionEnd,
                  onChange: r.onChange(M),
                  popupHandlers: [],
                  onMagicFunc: () => {
                  },
                  onKeyDown: () => r.onKeyDown(M, F)
                }
              )
            }
          ),
          /* @__PURE__ */ R.jsx("div", { className: "line-item", children: A })
        ]
      }
    ) : /* @__PURE__ */ R.jsxs(
      "div",
      {
        className: $(r.value, r.isFocus, r.isSelect),
        ref: u,
        "data-lineno": r.row,
        onClick: r.onClick,
        children: [
          /* @__PURE__ */ R.jsx(
            "div",
            {
              className: d(r.isFocus) + " container",
              onMouseLeave: y(r.selectThisLine),
              children: /* @__PURE__ */ R.jsx(
                Be,
                {
                  ref: v,
                  value: F,
                  keywords: r.keywords,
                  setLine: r.setLine(M),
                  setCursor: r.setCursor,
                  onPaste: r.onPaste(r.row),
                  onCompositionStart: r.onCompositionStart,
                  onCompositionEnd: r.onCompositionEnd,
                  onChange: r.onChange(M),
                  popupHandlers: r.textPopupHandlers,
                  onMagicFunc: r.onMagicFunc,
                  onKeyDown: (t) => (i) => {
                    i.key === "Enter" && i.keyCode === 13 && t.selection !== "" ? i.preventDefault() : r.onKeyDown(M, F)(i);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ R.jsx("div", { className: E(r.isFocus), children: A })
        ]
      }
    );
  }
), _t = (h) => {
  const r = h.lines, p = h.setLines, v = z(r.length);
  q(() => {
    v.current = r.length;
  }, [r]);
  const A = () => (v.current = v.current + 1, v.current), H = h.onChange;
  q(() => {
    H(r.map((t) => t.body));
  }, [r, H]);
  const $ = z(!1), [d, E] = ie({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, O] = ie([0, 0]), D = (t) => t == null ? null : t instanceof HTMLElement && t.classList.contains("line") ? t : D(t.parentElement), B = z(null);
  let _, I, Y = !1;
  const W = () => {
    Y = !0;
    const t = document.getSelection();
    t && (_ = D(t.anchorNode), I = D(t.focusNode), (_ == null ? void 0 : _.parentNode) != B.current && (_ = null, I = null), _ !== I && E({ row: -1, col: 0 }));
  }, u = () => {
    var t, i, a, l;
    if (Y && (Y = !1, _ && I && _ !== I)) {
      const n = new Range();
      if (n.setStart(_, 0), n.setEnd(I, I.children.length), document.getSelection().empty(), document.getSelection().addRange(n), !((t = _.dataset) != null && t.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const f = parseInt((i = _.dataset) == null ? void 0 : i.lineno);
      if (!((a = I.dataset) != null && a.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const w = parseInt((l = I.dataset) == null ? void 0 : l.lineno);
      O([f, w]);
    }
  }, y = () => () => {
    E(() => ({ row: -1, col: 0 })), Y = !0;
  }, m = z(null);
  q(() => {
    var t;
    if (m.current)
      if (S[1] - S[0] >= 1) {
        m.current.style.display = "block";
        const i = (t = document.getSelection()) == null ? void 0 : t.focusNode;
        if (!i)
          throw new Error("focusNode is null");
        if (!(i instanceof Element))
          throw new Error("focusNode is not Element");
        const a = i.getBoundingClientRect(), l = a.bottom, n = a.x + a.width / 2;
        m.current.style.left = n + "px", m.current.style.top = l + "px";
      } else
        m.current.style.display = "none";
  }, [S]);
  const M = (t) => (i) => {
    const l = i.clipboardData.getData("text").split(/\r\n|\n/);
    if (l.length === 1)
      return !0;
    const n = [];
    let f = [], w = !1, b = "";
    return l.forEach((c) => {
      const C = c.match(/^(\s*)(```.*)/);
      w ? c.indexOf(b + "```") === 0 ? (n.push(f.join(`
`)), w = !1, f = []) : (b !== "" && c.indexOf(b) !== 0 && (n.push(f.join(`
`)), w = !1, f = [], n.push(c)), f.push(c.slice(b.length))) : C ? (w = !0, b = C[1], f.push(c)) : n.push(c);
    }), f.length !== 0 && n.push(f.join(`
`)), p((c) => (c[t] = { body: c[t] + n[0], key: c[t].key }, c.splice(t + 1, 0, ...n.slice(1).map((C) => ({ body: C, key: A() }))), [...c])), i.preventDefault(), !1;
  };
  q(() => {
    document.addEventListener("selectionchange", W), document.addEventListener("pointerup", u);
  }, []);
  const F = z([]);
  return q(() => {
    if (d.row !== -1 && $.current === !1) {
      const t = F.current[d.row];
      if (!t || !t.current)
        return;
      t.current.focus();
      let i = d.colEnd;
      (i === void 0 || i === -1) && (i = d.col), console.log("EFFECT", "col:", d.col, "end:", i), t.current.setSelectionRange(d.col, i, d.direction);
    }
  }, [d, r]), r.forEach((t, i) => {
    F.current[i] = yt();
  }), /* @__PURE__ */ R.jsxs("div", { className: "editor", ref: B, children: [
    r.map((t, i) => /* @__PURE__ */ R.jsx(
      xt,
      {
        key_debug: t.key,
        ref: F.current[i],
        isFocus: i === d.row,
        isSelect: S[0] <= i && i <= S[1],
        row: i,
        value: t.body,
        textPopupHandlers: h.textPopupHandlers,
        onMagicFunc: h.onMagicFunc(i),
        keywords: h.keywords,
        blockStyles: h.blockStyles,
        selectThisLine: y(),
        setLine: (a) => (l) => ((n) => {
          p((f) => (f[n].body = a + l, [...f]));
        })(i),
        setCursor: (a) => ((l) => {
          E((n) => ({
            row: l,
            col: a,
            colEnd: -1,
            direction: n.direction
          }));
        })(i),
        onPaste: M,
        onCompositionStart: () => {
          $.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          $.current = !1, console.log("composition end");
        },
        onChange: (a) => (l) => ((n) => {
          if (console.log("onChange", $.current), $.current === !1) {
            const f = l.target.selectionStart, w = l.target.selectionEnd, b = l.target.selectionDirection;
            E((c) => ({
              row: c.row,
              col: f,
              colEnd: w,
              direction: b
            }));
          }
          p((f) => (f[n].body = a + l.target.value, [...f]));
        })(i),
        onKeyDown: (a, l) => (n) => {
          let f = n.currentTarget.selectionStart, w = n.currentTarget.selectionEnd, b = n.currentTarget.selectionDirection;
          switch (n.key) {
            case "ArrowLeft": {
              if (n.currentTarget != null && n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0) {
                n.preventDefault(), E((c) => {
                  if (c.row === 0)
                    return c;
                  const C = r[d.row - 1].body.length;
                  return {
                    row: c.row - 1,
                    col: C,
                    colEnd: -1,
                    direction: b
                  };
                });
                break;
              }
              n.shiftKey ? f == w ? (f--, b = "backward") : b === "forward" ? w-- : b === "backward" && f-- : (f--, w = -1), n.preventDefault(), E((c) => ({
                row: c.row,
                col: f,
                colEnd: w,
                direction: b
              }));
              break;
            }
            case "ArrowRight": {
              const c = -a.length + r[d.row].body.length;
              if (n.currentTarget != null && n.currentTarget.selectionStart === c && n.currentTarget.selectionEnd === c) {
                E((C) => C.row === r.length - 1 ? C : (n.preventDefault(), {
                  row: C.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: b
                }));
                break;
              }
              n.shiftKey ? b === "forward" ? w++ : b === "backward" && f++ : (f < w && (f = w), f++, w = -1), n.preventDefault(), E((C) => ({
                row: C.row,
                col: f,
                colEnd: w,
                direction: b
              }));
              break;
            }
            case "ArrowUp":
              V(l) && n.currentTarget != null && !Ct(n.currentTarget.selectionStart, l) || (n.preventDefault(), E((c) => c.row === 0 || n.currentTarget == null ? c : {
                row: c.row - 1,
                col: n.currentTarget.selectionStart,
                colEnd: -1,
                direction: b
              }));
              break;
            case "ArrowDown":
              V(l) && n.currentTarget != null && !kt(n.currentTarget.selectionStart, l) || E((c) => c.row === r.length - 1 || n.currentTarget == null ? c : (n.preventDefault(), {
                row: c.row + 1,
                col: n.currentTarget.selectionStart,
                colEnd: -1,
                direction: b
              }));
              break;
            case "Backspace":
              if (a.length !== 0 && (n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0 || n.currentTarget.selectionStart === 1 && n.currentTarget.selectionEnd === 1))
                a.length !== 0 && (p((c) => (a.length === 1 ? (c[d.row].body = n.currentTarget.value.slice(1), f--, f === -1 ? f++ : f === 0 && w !== 0 && (w = 0)) : a.length > 0 && (c[d.row].body = a.slice(2) + n.currentTarget.value), [...c])), n.preventDefault());
              else if (n.currentTarget != null && n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0) {
                if (d.row === 0)
                  break;
                const C = Ke(r[d.row - 1].body)[1].length;
                p((j) => (V(j[d.row - 1].body) ? j[d.row - 1].body += `
` + j[d.row].body : j[d.row - 1].body += j[d.row].body, j.splice(d.row, 1), [...j])), E((j) => ({
                  row: j.row - 1,
                  col: C,
                  colEnd: -1,
                  direction: b
                })), n.preventDefault();
                break;
              }
              E((c) => ({
                row: c.row,
                col: f,
                colEnd: w,
                direction: b
              }));
              break;
            case "Tab":
              p((c) => {
                if (n.shiftKey)
                  a.length === 1 ? (c[d.row].body = n.currentTarget.value.slice(1), f--) : a.length > 0 && (c[d.row].body = a.slice(2) + n.currentTarget.value);
                else {
                  let C = "-";
                  V(n.currentTarget.value) && (C = " "), a.length === 0 ? (c[d.row].body = C + " " + n.currentTarget.value, f++) : c[d.row].body = "  " + a + n.currentTarget.value;
                }
                return [...c];
              }), n.preventDefault(), E((c) => ({
                row: c.row,
                col: f,
                colEnd: -1,
                direction: b
              }));
              break;
            case "Enter":
              if (n.keyCode === 13) {
                if (V(l) && !n.shiftKey)
                  break;
                {
                  if (n.currentTarget == null || n.currentTarget.selectionStart === void 0) {
                    n.preventDefault();
                    break;
                  }
                  let c = 0;
                  const C = n.currentTarget.selectionStart;
                  p((j) => {
                    const X = a.length + C;
                    let J = j[d.row].body.slice(X);
                    if (V(l)) {
                      const ee = j[d.row].body;
                      ee[ee.length - 1] === `
` ? j[d.row].body = j[d.row].body.slice(
                        0,
                        X - 1
                      ) : j[d.row].body = j[d.row].body.slice(
                        0,
                        X
                      ), J.length > 0 && J[0] === `
` && (J = J.slice(1));
                    } else
                      j[d.row].body = j[d.row].body.slice(
                        0,
                        X
                      );
                    return a.length !== 0 ? (j.splice(
                      d.row + 1,
                      0,
                      { body: a + " " + J, key: A() }
                    ), c = 1) : j.splice(d.row + 1, 0, { body: J, key: A() }), [...j];
                  }), n.preventDefault(), E((j) => ({
                    row: j.row + 1,
                    col: c,
                    colEnd: -1,
                    direction: b
                  }));
                }
              } else
                break;
              break;
            case " ":
              console.log("space", f), (f === 0 || f === 1 && a.length >= 1) && (p((c) => {
                let C = "-";
                return V(n.currentTarget.value) && (C = " "), a.length === 0 ? (c[d.row].body = C + " " + n.currentTarget.value, f++) : c[d.row].body = "  " + a + n.currentTarget.value, [...c];
              }), n.preventDefault()), E((c) => ({
                row: c.row,
                col: f,
                colEnd: -1,
                direction: b
              }));
              break;
          }
        },
        onLinkClick: h.onLinkClick,
        onSubLinkClick: h.onSubLinkClick,
        onClick: (a) => {
          if (d.row !== i) {
            const l = a.target.selectionStart;
            O([i, i]), E(() => ({ row: i, col: l }));
          }
        }
      },
      t.key
    )),
    /* @__PURE__ */ R.jsx("div", { className: "popup", ref: m, children: h.linePopupHandlers.map((t, i) => /* @__PURE__ */ R.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (t.handler(
            r.slice(S[0], S[1] + 1).map((a) => a.body),
            S
          ), O([S[1], S[1]]));
        },
        onTouchStart: () => {
          t.handler(r.slice(S[0], S[1] + 1).map((a) => a.body)), O([S[1], S[1]]);
        },
        children: t.name
      },
      i
    )) })
  ] });
};
export {
  _t as Editor,
  V as isBlock,
  Tt as parseBlock
};
