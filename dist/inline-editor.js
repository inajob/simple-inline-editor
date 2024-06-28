import pe, { useState as ae, useEffect as q, useRef as z, forwardRef as vt, useCallback as re, createRef as yt } from "react";
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
  var g = pe, r = Symbol.for("react.element"), p = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, A = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, H = { key: !0, ref: !0, __self: !0, __source: !0 };
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
    var g = pe, r = Symbol.for("react.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), d = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), I = Symbol.iterator, Y = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = I && e[I] || e[Y];
      return typeof o == "function" ? o : null;
    }
    var u = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          c[h - 1] = arguments[h];
        m("error", e, c);
      }
    }
    function m(e, o, c) {
      {
        var h = u.ReactDebugCurrentFrame, x = h.getStackAddendum();
        x !== "" && (o += "%s", c = c.concat([x]));
        var P = c.map(function(C) {
          return String(C);
        });
        P.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, P);
      }
    }
    var M = !1, F = !1, t = !1, a = !1, i = !1, l;
    l = Symbol.for("react.module.reference");
    function n(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === H || i || e === A || e === S || e === O || a || e === _ || M || F || t || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === D || e.$$typeof === $ || e.$$typeof === d || e.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === l || e.getModuleId !== void 0));
    }
    function f(e, o, c) {
      var h = e.displayName;
      if (h)
        return h;
      var x = o.displayName || o.name || "";
      return x !== "" ? c + "(" + x + ")" : c;
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
            var c = e;
            return w(c._context) + ".Provider";
          case E:
            return f(e, e.render, "ForwardRef");
          case D:
            var h = e.displayName || null;
            return h !== null ? h : b(e.type) || "Memo";
          case B: {
            var x = e, P = x._payload, C = x._init;
            try {
              return b(C(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var s = Object.assign, T = 0, j, X, J, ee, Ee, ke, Te;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function He() {
      {
        if (T === 0) {
          j = console.log, X = console.info, J = console.warn, ee = console.error, Ee = console.group, ke = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
        T++;
      }
    }
    function Ue() {
      {
        if (T--, T === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: s({}, e, {
              value: j
            }),
            info: s({}, e, {
              value: X
            }),
            warn: s({}, e, {
              value: J
            }),
            error: s({}, e, {
              value: ee
            }),
            group: s({}, e, {
              value: Ee
            }),
            groupCollapsed: s({}, e, {
              value: ke
            }),
            groupEnd: s({}, e, {
              value: Te
            })
          });
        }
        T < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = u.ReactCurrentDispatcher, de;
    function ie(e, o, c) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (x) {
            var h = x.stack.trim().match(/\n( *(at )?)/);
            de = h && h[1] || "";
          }
        return `
` + de + e;
      }
    }
    var ge = !1, le;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ve();
    }
    function Re(e, o) {
      if (!e || ge)
        return "";
      {
        var c = le.get(e);
        if (c !== void 0)
          return c;
      }
      var h;
      ge = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = fe.current, fe.current = null, He();
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
            } catch (G) {
              h = G;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (G) {
              h = G;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            h = G;
          }
          e();
        }
      } catch (G) {
        if (G && h && typeof G.stack == "string") {
          for (var k = G.stack.split(`
`), K = h.stack.split(`
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
        ge = !1, fe.current = P, Ue(), Error.prepareStackTrace = x;
      }
      var Q = e ? e.displayName || e.name : "", Me = Q ? ie(Q) : "";
      return typeof e == "function" && le.set(e, Me), Me;
    }
    function qe(e, o, c) {
      return Re(e, !1);
    }
    function Je(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ce(e, o, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Je(e));
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
          case E:
            return qe(e.render);
          case D:
            return ce(e.type, o, c);
          case B: {
            var h = e, x = h._payload, P = h._init;
            try {
              return ce(P(x), o, c);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, xe = {}, Se = u.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var o = e._owner, c = ce(e.type, e._source, o ? o.type : null);
        Se.setExtraStackFrame(c);
      } else
        Se.setExtraStackFrame(null);
    }
    function Ge(e, o, c, h, x) {
      {
        var P = Function.call.bind(se);
        for (var C in e)
          if (P(e, C)) {
            var k = void 0;
            try {
              if (typeof e[C] != "function") {
                var K = Error((h || "React class") + ": " + c + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              k = e[C](o, C, h, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              k = N;
            }
            k && !(k instanceof Error) && (ue(x), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", c, C, typeof k), ue(null)), k instanceof Error && !(k.message in xe) && (xe[k.message] = !0, ue(x), y("Failed %s type: %s", c, k.message), ue(null));
          }
      }
    }
    var ze = Array.isArray;
    function he(e) {
      return ze(e);
    }
    function Xe(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, c = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
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
      if (se.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tt(e) {
      if (se.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rt(e, o) {
      if (typeof e.ref == "string" && te.current && o && te.current.stateNode !== o) {
        var c = b(te.current.type);
        ve[c] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(te.current.type), e.ref), ve[c] = !0);
      }
    }
    function nt(e, o) {
      {
        var c = function() {
          Pe || (Pe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function ot(e, o) {
      {
        var c = function() {
          Oe || (Oe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var at = function(e, o, c, h, x, P, C) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: c,
        props: C,
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
        value: h
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function it(e, o, c, h, x) {
      {
        var P, C = {}, k = null, K = null;
        c !== void 0 && (je(c), k = "" + c), tt(o) && (je(o.key), k = "" + o.key), et(o) && (K = o.ref, rt(o, x));
        for (P in o)
          se.call(o, P) && !Qe.hasOwnProperty(P) && (C[P] = o[P]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (P in N)
            C[P] === void 0 && (C[P] = N[P]);
        }
        if (k || K) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && nt(C, L), K && ot(C, L);
        }
        return at(e, k, K, x, h, te.current, C);
      }
    }
    var ye = u.ReactCurrentOwner, De = u.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var o = e._owner, c = ce(e.type, e._source, o ? o.type : null);
        De.setExtraStackFrame(c);
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
          var o = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + o + ":" + c + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function ct(e) {
      {
        var o = Fe();
        if (!o) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (o = `

Check the top-level render call using <` + c + ">.");
        }
        return o;
      }
    }
    function Ae(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = ct(o);
        if (Ne[c])
          return;
        Ne[c] = !0;
        var h = "";
        e && e._owner && e._owner !== ye.current && (h = " It was passed a child from " + b(e._owner.type) + "."), Z(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, h), Z(null);
      }
    }
    function Le(e, o) {
      {
        if (typeof e != "object")
          return;
        if (he(e))
          for (var c = 0; c < e.length; c++) {
            var h = e[c];
            we(h) && Ae(h, o);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = W(e);
          if (typeof x == "function" && x !== e.entries)
            for (var P = x.call(e), C; !(C = P.next()).done; )
              we(C.value) && Ae(C.value, o);
        }
      }
    }
    function st(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var c;
        if (typeof o == "function")
          c = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === D))
          c = o.propTypes;
        else
          return;
        if (c) {
          var h = b(o);
          Ge(c, e.props, "prop", h, e);
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
        for (var o = Object.keys(e.props), c = 0; c < o.length; c++) {
          var h = o[c];
          if (h !== "children" && h !== "key") {
            Z(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Ie(e, o, c, h, x, P) {
      {
        var C = n(e);
        if (!C) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = lt(x);
          K ? k += K : k += Fe();
          var N;
          e === null ? N = "null" : he(e) ? N = "array" : e !== void 0 && e.$$typeof === r ? (N = "<" + (b(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, k);
        }
        var L = it(e, o, c, x, P);
        if (L == null)
          return L;
        if (C) {
          var U = o.children;
          if (U !== void 0)
            if (h)
              if (he(U)) {
                for (var Q = 0; Q < U.length; Q++)
                  Le(U[Q], e);
                Object.freeze && Object.freeze(U);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(U, e);
        }
        return e === v ? ut(L) : st(L), L;
      }
    }
    function ft(e, o, c) {
      return Ie(e, o, c, !0);
    }
    function dt(e, o, c) {
      return Ie(e, o, c, !1);
    }
    var gt = dt, ht = ft;
    oe.Fragment = v, oe.jsx = gt, oe.jsxs = ht;
  }()), oe;
}
process.env.NODE_ENV === "production" ? be.exports = mt() : be.exports = wt();
var R = be.exports;
function V(g, r) {
  const p = g.match(/^(\s*)(```|> )/);
  return r === !0 ? p : p != null;
}
const bt = (g) => g.match(/^(\s*)> /) != null, pt = (g) => g.split(/[\r\n]/), Et = (g) => g.split(/[\r\n]/).length, Ye = (g, r) => {
  const p = r.split(/[\r\n]/);
  let v = 0;
  for (let A = 0; A < p.length; A++)
    if (v += p[A].length + 1, v > g)
      return [g - (v - p[A].length - 1), A];
  throw new Error("error getPos");
}, kt = (g, r) => {
  const p = Ye(g, r), v = Et(r);
  return p[1] === v - 1;
}, Tt = (g, r) => Ye(g, r)[1] === 0, Ct = (g) => {
  const r = g.match(/^\s*`{3}(.*)/), p = pt(g).slice(1).join(`
`);
  return [r == null ? void 0 : r[1], p];
}, Ke = (g) => {
  const r = g.match(/^(\s*-)( .*)$/);
  let p = "";
  if (r)
    g = r[2], p = r[1];
  else {
    const v = g.match(/^(\s*)(```.*|> )/);
    v && (p = v[1], g = g.slice(v[1].length));
  }
  return [p, g];
}, Be = pe.forwardRef(
  function(r, p) {
    const [v, A] = ae({
      prefix: "",
      selection: "",
      suffix: ""
    }), H = () => {
      A({ prefix: "", selection: "", suffix: "" });
    }, [$, d] = ae({
      index: 0
    }), E = (u, y) => {
      let m = 0, M = "", F = !1;
      for (let a = 0; a < u.length; a++) {
        const i = u[a];
        i === "[" ? (m++, M = "") : i === "]" ? (m > 0 && (m--, M = "", F = !0), m === 0 && (F = !1)) : m > 0 && !F && (M += i);
      }
      let t = "";
      if (m > 0) {
        let a = 0, i = !1;
        for (let l = 0; l < y.length; l++) {
          const n = y[l];
          n === "[" ? a++ : n === "]" ? (a--, i = !0) : i || (t += n);
        }
        return a === 0 && (t = ""), M + t;
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
), Rt = (g, r = null) => {
  const p = z(r);
  return q(() => {
    g && (typeof g == "function" ? g(p.current) : g.current = p.current);
  }, [g]), p;
}, xt = vt(
  function(r, p) {
    const v = Rt(p), [A, H] = ae();
    q(() => {
      if (!v.current)
        return;
      const t = v.current.style.display;
      v.current.style.display = "block", v.current.style.height = "0px", v.current.style.height = v.current.scrollHeight + "px", v.current.style.display = t;
    }, [r.value, v, r.isFocus]);
    const $ = (t, a, i) => {
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
      return a && l.push("focus"), i && l.push("select"), l.join(" ");
    }, d = (t) => t ? [] : ["hide"], E = (t) => t ? "hide" : "", S = (t, a, i) => {
      let l = -1, n = "";
      return a.forEach(function(f) {
        const w = t.indexOf(f, i);
        w !== -1 && (l === -1 || l > w) && (l = w, n = f);
      }), { pos: l, target: n };
    }, O = r.onLinkClick, D = r.onSubLinkClick, B = re((t) => {
      let a = 0;
      const i = [];
      for (; ; ) {
        const l = S(t, ["http://", "https://", " ", "["], a);
        if (l.target === "https://" || l.target === "http://") {
          a !== l.pos && i.push(t.slice(a, l.pos));
          const n = S(
            t,
            [" ", "\r", `
`],
            l.pos + l.target.length
          );
          if (n.pos !== -1) {
            const f = t.slice(l.pos, n.pos);
            i.push(/* @__PURE__ */ R.jsx("a", { href: f, children: f }, a)), a = n.pos;
          } else {
            const f = t.slice(l.pos, t.length);
            i.push(/* @__PURE__ */ R.jsx("a", { href: f, children: f }, a)), a = t.length;
            break;
          }
        } else if (l.target == " ")
          i.push(t.slice(a, l.pos)), i.push(" "), a = l.pos + l.target.length;
        else if (l.target == "[") {
          a !== l.pos && i.push(t.slice(a, l.pos));
          const n = S(t, ["]"], l.pos + l.target.length);
          if (n.pos !== -1) {
            const f = t.slice(l.pos, n.pos + 1), w = f.slice(1, f.length - 1), b = r.keywords.find((T) => T.value == w);
            console.log("K", w, r.keywords, b);
            let s = " unknown";
            b && (s = " " + b.style), i.push([/* @__PURE__ */ R.jsxs("span", { children: [
              /* @__PURE__ */ R.jsx("span", { className: "braket" + s, onClick: (T) => {
                O(w), T.stopPropagation();
              }, children: w }),
              /* @__PURE__ */ R.jsx("span", { className: "bracket-icon", onClick: (T) => {
                D(w), T.stopPropagation();
              }, children: "[]" })
            ] }, a)]), a = n.pos + 1;
          } else
            i.push(t.slice(a, t.length)), a = t.length;
        } else {
          i.push(t.slice(a, t.length)), a = t.length;
          break;
        }
      }
      return i;
    }, [O, D, r.keywords]), _ = re((t, a) => {
      const i = t ? r.blockStyles[t] : void 0;
      return i ? i(a, H) : /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
        /* @__PURE__ */ R.jsx("span", { className: "block-type", children: t }),
        /* @__PURE__ */ R.jsx("pre", { children: a })
      ] });
    }, [r.blockStyles]), I = re((t) => {
      const a = t.match(/^(\s*)```.*/), i = (a == null ? void 0 : a[1]) ?? "";
      return t = t.slice(i.length).split(`
`).map((l) => i + l).join(`
`), t;
    }, []), Y = re((t) => {
      const a = t.match(/^(\s*)> /), i = (a == null ? void 0 : a[1]) ?? "";
      return t = t.slice(i.length).split(`
`).map(
        (l, n) => i + (n === 0 ? "" : "> ") + l
      ).join(`
`), t;
    }, []), W = re((t) => {
      var a;
      if (console.log(t), V(t))
        if (bt(t)) {
          const i = t.match(/\s*> /), l = t.slice((a = i == null ? void 0 : i[0]) == null ? void 0 : a.length);
          H(
            /* @__PURE__ */ R.jsxs("div", { children: [
              /* @__PURE__ */ R.jsx("pre", { className: "for-copy", children: Y(t) }),
              /* @__PURE__ */ R.jsx("div", { className: "no-select", children: _("pre", l) })
            ] })
          );
          return;
        } else {
          const i = Ct(t), l = _(i[0], i[1]);
          H(
            /* @__PURE__ */ R.jsxs("div", { children: [
              /* @__PURE__ */ R.jsx("pre", { className: "for-copy", children: I(t + "\n```") }),
              /* @__PURE__ */ R.jsx("div", { className: "no-select", children: l })
            ] })
          );
          return;
        }
      else {
        const i = ["elm"], l = t.match(/^(\s*)-( .*)$/);
        let n = null;
        t.indexOf("# ") === 0 || t.indexOf("## ") === 0 || t.indexOf("### ") === 0 || l && (t = l[2], n = /* @__PURE__ */ R.jsx("pre", { className: "for-copy-inline", children: l[1] + "-" })), H(
          /* @__PURE__ */ R.jsxs("div", { className: i.join(" "), children: [
            n,
            B(t)
          ] })
        );
        return;
      }
    }, [I, Y, _, B]), u = z(null), y = (t) => (a) => {
      if (a.buttons !== 0 && u.current) {
        t();
        const i = new Range();
        i.selectNodeContents(u.current);
        const l = document.getSelection();
        if (!l)
          throw new Error("selection is null");
        l.empty(), l.addRange(i);
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
                  onKeyDown: (t) => (a) => {
                    a.key === "Enter" && a.keyCode === 13 && t.selection !== "" ? a.preventDefault() : r.onKeyDown(M, F)(a);
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
), _t = (g) => {
  const r = g.lines, p = g.setLines, v = z(r.length);
  q(() => {
    v.current = r.length;
  }, [r]);
  const A = () => (v.current = v.current + 1, v.current), H = g.onChange;
  q(() => {
    H(r.map((t) => t.body));
  }, [r, H]);
  const $ = z(!1), [d, E] = ae({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, O] = ae([0, 0]), D = (t) => t == null ? null : t instanceof HTMLElement && t.classList.contains("line") ? t : D(t.parentElement), B = z(null);
  let _, I, Y = !1;
  const W = () => {
    Y = !0;
    const t = document.getSelection();
    t && (_ = D(t.anchorNode), I = D(t.focusNode), (_ == null ? void 0 : _.parentNode) != B.current && (_ = null, I = null), _ !== I && E({ row: -1, col: 0 }));
  }, u = () => {
    var t, a, i, l;
    if (Y && (Y = !1, _ && I && _ !== I)) {
      const n = new Range();
      if (n.setStart(_, 0), n.setEnd(I, I.children.length), document.getSelection().empty(), document.getSelection().addRange(n), !((t = _.dataset) != null && t.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const f = parseInt((a = _.dataset) == null ? void 0 : a.lineno);
      if (!((i = I.dataset) != null && i.lineno))
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
        const a = (t = document.getSelection()) == null ? void 0 : t.focusNode;
        if (!a)
          throw new Error("focusNode is null");
        if (!(a instanceof Element))
          throw new Error("focusNode is not Element");
        const i = a.getBoundingClientRect(), l = i.bottom, n = i.x + i.width / 2;
        m.current.style.left = n + "px", m.current.style.top = l + "px";
      } else
        m.current.style.display = "none";
  }, [S]);
  const M = (t) => (a) => {
    const l = a.clipboardData.getData("text").split(/\r\n|\n/);
    if (l.length === 1)
      return !0;
    const n = [];
    let f = [], w = !1, b = "";
    return l.forEach((s) => {
      const T = s.match(/^(\s*)(```.*)/);
      w ? s.indexOf(b + "```") === 0 ? (n.push(f.join(`
`)), w = !1, f = []) : (b !== "" && s.indexOf(b) !== 0 && (n.push(f.join(`
`)), w = !1, f = [], n.push(s)), f.push(s.slice(b.length))) : T ? (w = !0, b = T[1], f.push(s)) : n.push(s);
    }), f.length !== 0 && n.push(f.join(`
`)), p((s) => (s[t] = { body: s[t] + n[0], key: s[t].key }, s.splice(t + 1, 0, ...n.slice(1).map((T) => ({ body: T, key: A() }))), [...s])), a.preventDefault(), !1;
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
      let a = d.colEnd;
      (a === void 0 || a === -1) && (a = d.col), console.log("EFFECT", "col:", d.col, "end:", a), t.current.setSelectionRange(d.col, a, d.direction);
    }
  }, [d, r]), r.forEach((t, a) => {
    F.current[a] = yt();
  }), /* @__PURE__ */ R.jsxs("div", { className: "editor", ref: B, children: [
    r.map((t, a) => /* @__PURE__ */ R.jsx(
      xt,
      {
        key_debug: t.key,
        ref: F.current[a],
        isFocus: a === d.row,
        isSelect: S[0] <= a && a <= S[1],
        row: a,
        value: t.body,
        textPopupHandlers: g.textPopupHandlers,
        onMagicFunc: g.onMagicFunc(a),
        keywords: g.keywords,
        blockStyles: g.blockStyles,
        selectThisLine: y(),
        setLine: (i) => (l) => ((n) => {
          p((f) => (f[n].body = i + l, [...f]));
        })(a),
        setCursor: (i) => ((l) => {
          E((n) => ({
            row: l,
            col: i,
            colEnd: -1,
            direction: n.direction
          }));
        })(a),
        onPaste: M,
        onCompositionStart: () => {
          $.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          $.current = !1, console.log("composition end");
        },
        onChange: (i) => (l) => ((n) => {
          if (console.log("onChange", $.current), $.current === !1) {
            const f = l.target.selectionStart, w = l.target.selectionEnd, b = l.target.selectionDirection;
            E((s) => ({
              row: s.row,
              col: f,
              colEnd: w,
              direction: b
            }));
          }
          p((f) => (f[n].body = i + l.target.value, [...f]));
        })(a),
        onKeyDown: (i, l) => (n) => {
          let f = n.currentTarget.selectionStart, w = n.currentTarget.selectionEnd, b = n.currentTarget.selectionDirection;
          switch (n.key) {
            case "ArrowLeft": {
              if (n.currentTarget != null && n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0) {
                n.preventDefault(), E((s) => {
                  if (s.row === 0)
                    return s;
                  const T = r[d.row - 1].body.length;
                  return {
                    row: s.row - 1,
                    col: T,
                    colEnd: -1,
                    direction: b
                  };
                });
                break;
              }
              n.shiftKey ? f == w ? (f--, b = "backward") : b === "forward" ? w-- : b === "backward" && f-- : (f--, w = -1), n.preventDefault(), E((s) => ({
                row: s.row,
                col: f,
                colEnd: w,
                direction: b
              }));
              break;
            }
            case "ArrowRight": {
              const s = -i.length + r[d.row].body.length;
              if (n.currentTarget != null && n.currentTarget.selectionStart === s && n.currentTarget.selectionEnd === s) {
                E((T) => T.row === r.length - 1 ? T : (n.preventDefault(), {
                  row: T.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: b
                }));
                break;
              }
              n.shiftKey ? b === "forward" ? w++ : b === "backward" && f++ : (f < w && (f = w), f++, w = -1), n.preventDefault(), E((T) => ({
                row: T.row,
                col: f,
                colEnd: w,
                direction: b
              }));
              break;
            }
            case "ArrowUp":
              V(l) && n.currentTarget != null && !Tt(n.currentTarget.selectionStart, l) || (n.preventDefault(), E((s) => s.row === 0 || n.currentTarget == null ? s : {
                row: s.row - 1,
                col: n.currentTarget.selectionStart,
                colEnd: -1,
                direction: b
              }));
              break;
            case "ArrowDown":
              V(l) && n.currentTarget != null && !kt(n.currentTarget.selectionStart, l) || E((s) => s.row === r.length - 1 || n.currentTarget == null ? s : (n.preventDefault(), {
                row: s.row + 1,
                col: n.currentTarget.selectionStart,
                colEnd: -1,
                direction: b
              }));
              break;
            case "Backspace":
              if (!n.currentTarget)
                return;
              if (i.length !== 0 && (n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0 || n.currentTarget.selectionStart === 1 && n.currentTarget.selectionEnd === 1))
                i.length !== 0 && (p((s) => (i.length === 1 ? (s[d.row].body = n.currentTarget.value.slice(1), f--, f === -1 ? f++ : f === 0 && w !== 0 && (w = 0)) : i.length > 0 && (s[d.row].body = i.slice(2) + n.currentTarget.value), [...s])), n.preventDefault());
              else if (n.currentTarget != null && n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0) {
                if (d.row === 0)
                  break;
                const T = Ke(r[d.row - 1].body)[1].length;
                p((j) => (V(j[d.row - 1].body) ? j[d.row - 1].body += `
` + j[d.row].body : j[d.row - 1].body += j[d.row].body, j.splice(d.row, 1), [...j])), E((j) => ({
                  row: j.row - 1,
                  col: T,
                  colEnd: -1,
                  direction: b
                })), n.preventDefault();
                break;
              }
              E((s) => ({
                row: s.row,
                col: f,
                colEnd: w,
                direction: b
              }));
              break;
            case "Tab":
              p((s) => {
                if (!n.currentTarget)
                  return s;
                if (n.shiftKey)
                  i.length === 1 ? (s[d.row].body = n.currentTarget.value.slice(1), f--) : i.length > 0 && (s[d.row].body = i.slice(2) + n.currentTarget.value);
                else {
                  let T = "-";
                  V(n.currentTarget.value) && (T = " "), i.length === 0 ? (s[d.row].body = T + " " + n.currentTarget.value, f++) : s[d.row].body = "  " + i + n.currentTarget.value;
                }
                return [...s];
              }), n.preventDefault(), E((s) => ({
                row: s.row,
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
                  let s = 0;
                  const T = n.currentTarget.selectionStart;
                  p((j) => {
                    const X = i.length + T;
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
                    return i.length !== 0 ? (j.splice(
                      d.row + 1,
                      0,
                      { body: i + " " + J, key: A() }
                    ), s = 1) : j.splice(d.row + 1, 0, { body: J, key: A() }), [...j];
                  }), n.preventDefault(), E((j) => ({
                    row: j.row + 1,
                    col: s,
                    colEnd: -1,
                    direction: b
                  }));
                }
              } else
                break;
              break;
            case " ":
              console.log("space", f), (f === 0 || f === 1 && i.length >= 1) && (p((s) => {
                if (!n.currentTarget)
                  return s;
                let T = "-";
                return V(n.currentTarget.value) && (T = " "), i.length === 0 ? (s[d.row].body = T + " " + n.currentTarget.value, f++) : s[d.row].body = "  " + i + n.currentTarget.value, [...s];
              }), n.preventDefault()), E((s) => ({
                row: s.row,
                col: f,
                colEnd: -1,
                direction: b
              }));
              break;
          }
        },
        onLinkClick: g.onLinkClick,
        onSubLinkClick: g.onSubLinkClick,
        onClick: (i) => {
          if (d.row !== a) {
            const l = i.target.selectionStart;
            O([a, a]), E(() => ({ row: a, col: l }));
          }
        }
      },
      t.key
    )),
    /* @__PURE__ */ R.jsx("div", { className: "popup", ref: m, children: g.linePopupHandlers.map((t, a) => /* @__PURE__ */ R.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (t.handler(
            r.slice(S[0], S[1] + 1).map((i) => i.body),
            S
          ), O([S[1], S[1]]));
        },
        onTouchStart: () => {
          t.handler(r.slice(S[0], S[1] + 1).map((i) => i.body)), O([S[1], S[1]]);
        },
        children: t.name
      },
      a
    )) })
  ] });
};
export {
  _t as Editor,
  V as isBlock,
  Ct as parseBlock
};
