import be, { useState as ie, useEffect as J, useRef as X, forwardRef as yt, useCallback as ne, createRef as mt } from "react";
var Ee = { exports: {} }, re = {};
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
function vt() {
  if ($e)
    return re;
  $e = 1;
  var d = be, n = Symbol.for("react.element"), b = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, A = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(R, x, S) {
    var O, D = {}, B = null, _ = null;
    S !== void 0 && (B = "" + S), x.key !== void 0 && (B = "" + x.key), x.ref !== void 0 && (_ = x.ref);
    for (O in x)
      g.call(x, O) && !U.hasOwnProperty(O) && (D[O] = x[O]);
    if (R && R.defaultProps)
      for (O in x = R.defaultProps, x)
        D[O] === void 0 && (D[O] = x[O]);
    return { $$typeof: n, type: R, key: B, ref: _, props: D, _owner: A.current };
  }
  return re.Fragment = b, re.jsx = $, re.jsxs = $, re;
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
    var d = be, n = Symbol.for("react.element"), b = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), R = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), I = Symbol.iterator, Y = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = I && e[I] || e[Y];
      return typeof o == "function" ? o : null;
    }
    var f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          s[h - 1] = arguments[h];
        w("error", e, s);
      }
    }
    function w(e, o, s) {
      {
        var h = f.ReactDebugCurrentFrame, p = h.getStackAddendum();
        p !== "" && (o += "%s", s = s.concat([p]));
        var j = s.map(function(C) {
          return String(C);
        });
        j.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var M = !1, F = !1, t = !1, i = !1, l = !1, a;
    a = Symbol.for("react.module.reference");
    function r(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === U || l || e === A || e === S || e === O || i || e === _ || M || F || t || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === D || e.$$typeof === $ || e.$$typeof === R || e.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === a || e.getModuleId !== void 0));
    }
    function u(e, o, s) {
      var h = e.displayName;
      if (h)
        return h;
      var p = o.displayName || o.name || "";
      return p !== "" ? s + "(" + p + ")" : s;
    }
    function E(e) {
      return e.displayName || "Context";
    }
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case b:
          return "Portal";
        case U:
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
          case R:
            var o = e;
            return E(o) + ".Consumer";
          case $:
            var s = e;
            return E(s._context) + ".Provider";
          case x:
            return u(e, e.render, "ForwardRef");
          case D:
            var h = e.displayName || null;
            return h !== null ? h : m(e.type) || "Memo";
          case B: {
            var p = e, j = p._payload, C = p._init;
            try {
              return m(C(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var c = Object.assign, v = 0, P, K, G, ee, Te, Ce, ke;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function He() {
      {
        if (v === 0) {
          P = console.log, K = console.info, G = console.warn, ee = console.error, Te = console.group, Ce = console.groupCollapsed, ke = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        v++;
      }
    }
    function Ue() {
      {
        if (v--, v === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: c({}, e, {
              value: P
            }),
            info: c({}, e, {
              value: K
            }),
            warn: c({}, e, {
              value: G
            }),
            error: c({}, e, {
              value: ee
            }),
            group: c({}, e, {
              value: Te
            }),
            groupCollapsed: c({}, e, {
              value: Ce
            }),
            groupEnd: c({}, e, {
              value: ke
            })
          });
        }
        v < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = f.ReactCurrentDispatcher, de;
    function le(e, o, s) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (p) {
            var h = p.stack.trim().match(/\n( *(at )?)/);
            de = h && h[1] || "";
          }
        return `
` + de + e;
      }
    }
    var he = !1, ae;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new Ve();
    }
    function Re(e, o) {
      if (!e || he)
        return "";
      {
        var s = ae.get(e);
        if (s !== void 0)
          return s;
      }
      var h;
      he = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = fe.current, fe.current = null, He();
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
            } catch (z) {
              h = z;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (z) {
              h = z;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            h = z;
          }
          e();
        }
      } catch (z) {
        if (z && h && typeof z.stack == "string") {
          for (var T = z.stack.split(`
`), H = h.stack.split(`
`), N = T.length - 1, L = H.length - 1; N >= 1 && L >= 0 && T[N] !== H[L]; )
            L--;
          for (; N >= 1 && L >= 0; N--, L--)
            if (T[N] !== H[L]) {
              if (N !== 1 || L !== 1)
                do
                  if (N--, L--, L < 0 || T[N] !== H[L]) {
                    var V = `
` + T[N].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, V), V;
                  }
                while (N >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        he = !1, fe.current = j, Ue(), Error.prepareStackTrace = p;
      }
      var Q = e ? e.displayName || e.name : "", Me = Q ? le(Q) : "";
      return typeof e == "function" && ae.set(e, Me), Me;
    }
    function qe(e, o, s) {
      return Re(e, !1);
    }
    function Je(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ce(e, o, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Je(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case S:
          return le("Suspense");
        case O:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            return qe(e.render);
          case D:
            return ce(e.type, o, s);
          case B: {
            var h = e, p = h._payload, j = h._init;
            try {
              return ce(j(p), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, xe = {}, Se = f.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var o = e._owner, s = ce(e.type, e._source, o ? o.type : null);
        Se.setExtraStackFrame(s);
      } else
        Se.setExtraStackFrame(null);
    }
    function Ge(e, o, s, h, p) {
      {
        var j = Function.call.bind(se);
        for (var C in e)
          if (j(e, C)) {
            var T = void 0;
            try {
              if (typeof e[C] != "function") {
                var H = Error((h || "React class") + ": " + s + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw H.name = "Invariant Violation", H;
              }
              T = e[C](o, C, h, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              T = N;
            }
            T && !(T instanceof Error) && (ue(p), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", s, C, typeof T), ue(null)), T instanceof Error && !(T.message in xe) && (xe[T.message] = !0, ue(p), y("Failed %s type: %s", s, T.message), ue(null));
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
    var te = f.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, ye;
    ye = {};
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
    function nt(e, o) {
      if (typeof e.ref == "string" && te.current && o && te.current.stateNode !== o) {
        var s = m(te.current.type);
        ye[s] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(te.current.type), e.ref), ye[s] = !0);
      }
    }
    function rt(e, o) {
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
    var it = function(e, o, s, h, p, j, C) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: s,
        props: C,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function lt(e, o, s, h, p) {
      {
        var j, C = {}, T = null, H = null;
        s !== void 0 && (je(s), T = "" + s), tt(o) && (je(o.key), T = "" + o.key), et(o) && (H = o.ref, nt(o, p));
        for (j in o)
          se.call(o, j) && !Qe.hasOwnProperty(j) && (C[j] = o[j]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (j in N)
            C[j] === void 0 && (C[j] = N[j]);
        }
        if (T || H) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          T && rt(C, L), H && ot(C, L);
        }
        return it(e, T, H, p, h, te.current, C);
      }
    }
    var me = f.ReactCurrentOwner, De = f.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var o = e._owner, s = ce(e.type, e._source, o ? o.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Fe() {
      {
        if (me.current) {
          var e = m(me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function at(e) {
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
    function ct(e) {
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
        var s = ct(o);
        if (Ne[s])
          return;
        Ne[s] = !0;
        var h = "";
        e && e._owner && e._owner !== me.current && (h = " It was passed a child from " + m(e._owner.type) + "."), Z(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, h), Z(null);
      }
    }
    function Le(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var s = 0; s < e.length; s++) {
            var h = e[s];
            we(h) && Ae(h, o);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = W(e);
          if (typeof p == "function" && p !== e.entries)
            for (var j = p.call(e), C; !(C = j.next()).done; )
              we(C.value) && Ae(C.value, o);
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
        else if (typeof o == "object" && (o.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === D))
          s = o.propTypes;
        else
          return;
        if (s) {
          var h = m(o);
          Ge(s, e.props, "prop", h, e);
        } else if (o.PropTypes !== void 0 && !ve) {
          ve = !0;
          var p = m(o);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(e) {
      {
        for (var o = Object.keys(e.props), s = 0; s < o.length; s++) {
          var h = o[s];
          if (h !== "children" && h !== "key") {
            Z(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Ie(e, o, s, h, p, j) {
      {
        var C = r(e);
        if (!C) {
          var T = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var H = at(p);
          H ? T += H : T += Fe();
          var N;
          e === null ? N = "null" : ge(e) ? N = "array" : e !== void 0 && e.$$typeof === n ? (N = "<" + (m(e.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, T);
        }
        var L = lt(e, o, s, p, j);
        if (L == null)
          return L;
        if (C) {
          var V = o.children;
          if (V !== void 0)
            if (h)
              if (ge(V)) {
                for (var Q = 0; Q < V.length; Q++)
                  Le(V[Q], e);
                Object.freeze && Object.freeze(V);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(V, e);
        }
        return e === g ? ut(L) : st(L), L;
      }
    }
    function ft(e, o, s) {
      return Ie(e, o, s, !0);
    }
    function dt(e, o, s) {
      return Ie(e, o, s, !1);
    }
    var ht = dt, gt = ft;
    oe.Fragment = g, oe.jsx = ht, oe.jsxs = gt;
  }()), oe;
}
process.env.NODE_ENV === "production" ? Ee.exports = vt() : Ee.exports = wt();
var k = Ee.exports;
function q(d, n) {
  const b = d.match(/^(\s*)(```|> )/);
  return n === !0 ? b : b != null;
}
const Et = (d) => d.match(/^(\s*)> /) != null, bt = (d) => d.split(/[\r\n]/), Tt = (d) => d.split(/[\r\n]/).length, Ye = (d, n) => {
  const b = n.split(/[\r\n]/);
  let g = 0;
  for (let A = 0; A < b.length; A++)
    if (g += b[A].length + 1, g > d)
      return [d - (g - b[A].length - 1), A];
  throw new Error("error getPos");
}, Ct = (d, n) => {
  const b = Ye(d, n), g = Tt(n);
  return b[1] === g - 1;
}, kt = (d, n) => Ye(d, n)[1] === 0, pt = (d) => {
  const n = d.match(/^\s*`{3}(.*)/), b = bt(d).slice(1).join(`
`);
  return [n == null ? void 0 : n[1], b];
}, Ke = (d) => {
  const n = d.match(/^(\s*-)( .*)$/);
  let b = "";
  if (n)
    d = n[2], b = n[1];
  else {
    const g = d.match(/^(\s*)(```.*|> )/);
    g && (b = g[1], d = d.slice(g[1].length));
  }
  return [b, d];
}, Be = be.forwardRef(
  function(n, b) {
    const [g, A] = ie({
      prefix: "",
      selection: "",
      suffix: ""
    }), U = () => {
      A({ prefix: "", selection: "", suffix: "" });
    }, [$, R] = ie({
      index: 0
    }), x = (f, y) => {
      let w = 0, M = "", F = !1;
      for (let i = 0; i < f.length; i++) {
        const l = f[i];
        l === "[" ? (w++, M = "") : l === "]" ? (w > 0 && (w--, M = "", F = !0), w === 0 && (F = !1)) : w > 0 && !F && (M += l);
      }
      let t = "";
      if (w > 0) {
        let i = 0, l = !1;
        for (let a = 0; a < y.length; a++) {
          const r = y[a];
          r === "[" ? i++ : r === "]" ? (i--, l = !0) : l || (t += r);
        }
        return i === 0 && (t = ""), M + t;
      }
      return "";
    }, S = (f) => {
      let y = f.length - 1;
      for (let w = f.length - 1; w >= 0; w--)
        if (f[w] === "[") {
          y = w;
          break;
        }
      return f.slice(0, -(f.length - 1 - y));
    }, O = (f) => {
      let y = 0;
      for (let w = 0; w < f.length; w++)
        if (f[w] === "]") {
          y = w;
          break;
        }
      return f.slice(y);
    }, D = x(g.prefix, g.suffix);
    J(() => {
      if (!Y.current || !W.current)
        return;
      Y.current.style.display = "inline", g.selection === "" && D === "" ? W.current.style.display = "none" : W.current.style.display = "inline", W.current.style.left = Y.current.getBoundingClientRect().width + "px", W.current.style.top = -W.current.getBoundingClientRect().height + "px";
      const f = W.current.getBoundingClientRect().top + window.scrollY;
      f < 0 && (W.current.style.top = -W.current.getBoundingClientRect().height - f + "px"), Y.current.style.display = "none";
    }, [g, D]), J(() => {
      R({ index: 0 });
    }, [n.value]);
    const B = function(f) {
      A({
        prefix: f.currentTarget.value.slice(
          0,
          f.currentTarget.selectionStart
        ),
        selection: f.currentTarget.value.slice(
          f.currentTarget.selectionStart,
          f.currentTarget.selectionEnd
        ),
        suffix: f.currentTarget.value.slice(f.currentTarget.selectionEnd)
      });
    };
    let _ = n.popupHandlers, I = !1;
    g.selection === "" && D !== "" && (_ = n.keywords.map((f) => f.value).filter((f) => f.indexOf(D) != -1).map((f, y) => ({
      name: f,
      handler: () => {
        const w = S(g.prefix), M = _[y].name;
        let F = O(g.suffix), t = (w + M).length;
        return (F.length == 0 || F[0] != "]") && (F = "]" + F, t += 1), {
          value: w + M + F,
          column: t
        };
      }
    })), _.length > 0 && (I = !0));
    const Y = X(null), W = X(null);
    return /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: n.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ k.jsx(
            "textarea",
            {
              ref: b,
              value: n.value,
              onPaste: n.onPaste,
              onCompositionStart: n.onCompositionStart,
              onCompositionEnd: (f) => {
                n.onCompositionEnd(f), B(f);
              },
              onChange: n.onChange,
              onKeyDown: (f) => {
                if (f.key === "Enter" && f.keyCode === 13 && I) {
                  const y = _[$.index].handler(null);
                  n.setLine(y.value), n.setCursor(y.column), f.preventDefault();
                } else
                  f.key == "Tab" && I ? (R((y) => {
                    let w = y.index + 1;
                    return w >= _.length && (w = 0), { index: w };
                  }), f.preventDefault()) : f.key == "Enter" && f.shiftKey ? (n.onMagicFunc(), f.preventDefault()) : n.onKeyDown(g)(f);
              },
              onSelect: B
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: "popup", ref: W, children: _.map((f, y) => /* @__PURE__ */ k.jsx(
            "div",
            {
              className: $.index == y ? "selected" : "",
              onClick: () => {
                const w = f.handler(g);
                n.setLine(w.value), n.setCursor(w.column), U();
              },
              children: f.name
            },
            y
          )) }),
          /* @__PURE__ */ k.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: Y, children: g.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), Rt = (d, n = null) => {
  const b = X(n);
  return J(() => {
    d && (typeof d == "function" ? d(b.current) : d.current = b.current);
  }, [d]), b;
}, xt = yt(
  function(n, b) {
    const g = Rt(b), [A, U] = ie();
    J(() => {
      if (!g.current)
        return;
      const t = g.current.style.display;
      g.current.style.display = "block", g.current.style.height = "0px", g.current.style.height = g.current.scrollHeight + "px", g.current.style.display = t;
    }, [n.value, g, n.isFocus]);
    const $ = (t, i, l) => {
      var u;
      const a = ["line"], r = t.match(/^(\s*)- /);
      if (t.indexOf("# ") === 0)
        a.push("h1-style");
      else if (t.indexOf("## ") === 0)
        a.push("h2-style");
      else if (t.indexOf("### ") === 0)
        a.push("h3-style");
      else if (r)
        a.push("list-style"), a.push("list-indent-" + r[1].length / 2);
      else if (q(t)) {
        const E = q(t, !0);
        a.push("list-indent-" + (((u = E == null ? void 0 : E[1]) == null ? void 0 : u.length) ?? 0) / 2);
      }
      return i && a.push("focus"), l && a.push("select"), a.join(" ");
    }, R = (t) => t ? [] : ["hide"], x = (t) => t ? "hide" : "", S = (t, i, l) => {
      let a = -1, r = "";
      return i.forEach(function(u) {
        const E = t.indexOf(u, l);
        E !== -1 && (a === -1 || a > E) && (a = E, r = u);
      }), { pos: a, target: r };
    }, O = n.onLinkClick, D = n.onSubLinkClick, B = ne((t) => {
      let i = 0;
      const l = [];
      for (; ; ) {
        const a = S(t, ["http://", "https://", " ", "["], i);
        if (a.target === "https://" || a.target === "http://") {
          i !== a.pos && l.push(t.slice(i, a.pos));
          const r = S(
            t,
            [" ", "\r", `
`],
            a.pos + a.target.length
          );
          if (r.pos !== -1) {
            const u = t.slice(a.pos, r.pos);
            l.push(/* @__PURE__ */ k.jsx("a", { href: u, children: u }, i)), i = r.pos;
          } else {
            const u = t.slice(a.pos, t.length);
            l.push(/* @__PURE__ */ k.jsx("a", { href: u, children: u }, i)), i = t.length;
            break;
          }
        } else if (a.target == " ")
          l.push(t.slice(i, a.pos)), l.push(" "), i = a.pos + a.target.length;
        else if (a.target == "[") {
          i !== a.pos && l.push(t.slice(i, a.pos));
          const r = S(t, ["]"], a.pos + a.target.length);
          if (r.pos !== -1) {
            const u = t.slice(a.pos, r.pos + 1), E = u.slice(1, u.length - 1), m = n.keywords.find((v) => v.value == E);
            console.log("K", E, n.keywords, m);
            let c = " unknown";
            m && (c = " " + m.style), l.push([/* @__PURE__ */ k.jsxs("span", { children: [
              /* @__PURE__ */ k.jsx("span", { className: "braket" + c, onClick: (v) => {
                O(E), v.stopPropagation();
              }, children: E }),
              /* @__PURE__ */ k.jsx("span", { className: "bracket-icon", onClick: (v) => {
                D(E), v.stopPropagation();
              }, children: "[]" })
            ] }, i)]), i = r.pos + 1;
          } else
            l.push(t.slice(i, t.length)), i = t.length;
        } else {
          l.push(t.slice(i, t.length)), i = t.length;
          break;
        }
      }
      return l;
    }, [O, D, n.keywords]), _ = ne((t, i) => {
      const l = t ? n.blockStyles[t] : void 0;
      return l ? l(i, U) : /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
        /* @__PURE__ */ k.jsx("span", { className: "block-type", children: t }),
        /* @__PURE__ */ k.jsx("pre", { children: i })
      ] });
    }, [n.blockStyles]), I = ne((t) => {
      const i = t.match(/^(\s*)```.*/), l = (i == null ? void 0 : i[1]) ?? "";
      return t = t.slice(l.length).split(`
`).map((a) => l + a).join(`
`), t;
    }, []), Y = ne((t) => {
      const i = t.match(/^(\s*)> /), l = (i == null ? void 0 : i[1]) ?? "";
      return t = t.slice(l.length).split(`
`).map(
        (a, r) => l + (r === 0 ? "" : "> ") + a
      ).join(`
`), t;
    }, []), W = ne((t) => {
      var i;
      if (console.log(t), q(t))
        if (Et(t)) {
          const l = t.match(/\s*> /), a = t.slice((i = l == null ? void 0 : l[0]) == null ? void 0 : i.length);
          U(
            /* @__PURE__ */ k.jsxs("div", { children: [
              /* @__PURE__ */ k.jsx("pre", { className: "for-copy", children: Y(t) }),
              /* @__PURE__ */ k.jsx("div", { className: "no-select", children: _("pre", a) })
            ] })
          );
          return;
        } else {
          const l = pt(t), a = _(l[0], l[1]);
          U(
            /* @__PURE__ */ k.jsxs("div", { children: [
              /* @__PURE__ */ k.jsx("pre", { className: "for-copy", children: I(t + "\n```") }),
              /* @__PURE__ */ k.jsx("div", { className: "no-select", children: a })
            ] })
          );
          return;
        }
      else {
        const l = ["elm"], a = t.match(/^(\s*)-( .*)$/);
        let r = null;
        t.indexOf("# ") === 0 || t.indexOf("## ") === 0 || t.indexOf("### ") === 0 || a && (t = a[2], r = /* @__PURE__ */ k.jsx("pre", { className: "for-copy-inline", children: a[1] + "-" })), U(
          /* @__PURE__ */ k.jsxs("div", { className: l.join(" "), children: [
            r,
            B(t)
          ] })
        );
        return;
      }
    }, [I, Y, _, B]), f = X(null), y = (t) => (i) => {
      if (i.buttons !== 0 && f.current) {
        t();
        const l = new Range();
        l.selectNodeContents(f.current);
        const a = document.getSelection();
        if (!a)
          throw new Error("selection is null");
        a.empty(), a.addRange(l);
      }
    }, w = Ke(n.value), M = w[0], F = w[1];
    return J(() => {
      W(n.value);
    }, [W, n.value]), q(F) ? /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: $(n.value, n.isFocus, n.isSelect),
        ref: f,
        "data-lineno": n.row,
        onClick: n.onClick,
        children: [
          /* @__PURE__ */ k.jsx(
            "div",
            {
              className: ["line-item"].concat(R(n.isFocus)).join(" "),
              onMouseLeave: y(n.selectThisLine),
              children: /* @__PURE__ */ k.jsx(
                Be,
                {
                  ref: g,
                  value: F,
                  keywords: n.keywords,
                  setLine: n.setLine(M),
                  setCursor: n.setCursor,
                  onCompositionStart: n.onCompositionStart,
                  onCompositionEnd: n.onCompositionEnd,
                  onChange: n.onChange(M),
                  popupHandlers: [],
                  onMagicFunc: () => {
                  },
                  onKeyDown: () => n.onKeyDown(M, F)
                }
              )
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: "line-item", children: A })
        ]
      }
    ) : /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: $(n.value, n.isFocus, n.isSelect),
        ref: f,
        "data-lineno": n.row,
        onClick: n.onClick,
        children: [
          /* @__PURE__ */ k.jsx(
            "div",
            {
              className: R(n.isFocus) + " container",
              onMouseLeave: y(n.selectThisLine),
              children: /* @__PURE__ */ k.jsx(
                Be,
                {
                  ref: g,
                  value: F,
                  keywords: n.keywords,
                  setLine: n.setLine(M),
                  setCursor: n.setCursor,
                  onPaste: n.onPaste(n.row),
                  onCompositionStart: n.onCompositionStart,
                  onCompositionEnd: n.onCompositionEnd,
                  onChange: n.onChange(M),
                  popupHandlers: n.textPopupHandlers,
                  onMagicFunc: n.onMagicFunc,
                  onKeyDown: (t) => (i) => {
                    i.key === "Enter" && i.keyCode === 13 && t.selection !== "" ? i.preventDefault() : n.onKeyDown(M, F)(i);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: x(n.isFocus), children: A })
        ]
      }
    );
  }
), _t = (d) => {
  const n = d.lines, b = d.setLines, g = X(n.length);
  J(() => {
    g.current = n.length;
  }, [n]);
  const A = () => (g.current = g.current + 1, g.current), U = d.onChange;
  J(() => {
    U(n.map((t) => t.body));
  }, [n, U]);
  const $ = X(!1), [R, x] = ie({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, O] = ie([0, 0]), D = (t) => t == null ? null : t instanceof HTMLElement && t.classList.contains("line") ? t : D(t.parentElement), B = X(null);
  let _, I, Y = !1;
  const W = () => {
    Y = !0;
    const t = document.getSelection();
    t && (_ = D(t.anchorNode), I = D(t.focusNode), (_ == null ? void 0 : _.parentNode) != B.current && (_ = null, I = null), _ !== I && x({ row: -1, col: 0 }));
  }, f = () => {
    var t, i, l, a;
    if (Y && (Y = !1, _ && I && _ !== I)) {
      const r = new Range();
      if (r.setStart(_, 0), r.setEnd(I, I.children.length), document.getSelection().empty(), document.getSelection().addRange(r), !((t = _.dataset) != null && t.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const u = parseInt((i = _.dataset) == null ? void 0 : i.lineno);
      if (!((l = I.dataset) != null && l.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const E = parseInt((a = I.dataset) == null ? void 0 : a.lineno);
      O([u, E]);
    }
  }, y = () => () => {
    x(() => ({ row: -1, col: 0 })), Y = !0;
  }, w = X(null);
  J(() => {
    var t;
    if (w.current)
      if (S[1] - S[0] >= 1) {
        w.current.style.display = "block";
        const i = (t = document.getSelection()) == null ? void 0 : t.focusNode;
        if (!i)
          throw new Error("focusNode is null");
        if (!(i instanceof Element))
          throw new Error("focusNode is not Element");
        const l = i.getBoundingClientRect(), a = l.bottom, r = l.x + l.width / 2;
        w.current.style.left = r + "px", w.current.style.top = a + "px";
      } else
        w.current.style.display = "none";
  }, [S]);
  const M = (t) => (i) => {
    const a = i.clipboardData.getData("text").split(/\r\n|\n/);
    if (a.length === 1)
      return !0;
    const r = [];
    let u = [], E = !1, m = "";
    return a.forEach((c) => {
      const v = c.match(/^(\s*)(```.*)/);
      E ? c.indexOf(m + "```") === 0 ? (r.push(u.join(`
`)), E = !1, u = []) : (m !== "" && c.indexOf(m) !== 0 && (r.push(u.join(`
`)), E = !1, u = [], r.push(c)), u.push(c.slice(m.length))) : v ? (E = !0, m = v[1], u.push(c)) : r.push(c);
    }), u.length !== 0 && r.push(u.join(`
`)), b((c) => (c[t] = { body: c[t] + r[0], key: c[t].key }, c.splice(t + 1, 0, ...r.slice(1).map((v) => ({ body: v, key: A() }))), [...c])), i.preventDefault(), !1;
  };
  J(() => {
    document.addEventListener("selectionchange", W), document.addEventListener("pointerup", f);
  }, []);
  const F = X([]);
  return J(() => {
    if (R.row !== -1 && $.current === !1) {
      const t = F.current[R.row];
      if (!t || !t.current)
        return;
      t.current.focus();
      let i = R.colEnd;
      (i === void 0 || i === -1) && (i = R.col), console.log("EFFECT", "col:", R.col, "end:", i), t.current.setSelectionRange(R.col, i, R.direction);
    }
  }, [R, n]), n.forEach((t, i) => {
    F.current[i] = mt();
  }), /* @__PURE__ */ k.jsxs("div", { className: "editor", ref: B, children: [
    n.map((t, i) => /* @__PURE__ */ k.jsx(
      xt,
      {
        key_debug: t.key,
        ref: F.current[i],
        isFocus: i === R.row,
        isSelect: S[0] <= i && i <= S[1],
        row: i,
        value: t.body,
        textPopupHandlers: d.textPopupHandlers,
        onMagicFunc: d.onMagicFunc(i),
        keywords: d.keywords,
        blockStyles: d.blockStyles,
        selectThisLine: y(),
        setLine: (l) => (a) => ((r) => {
          b((u) => (u[r].body = l + a, [...u]));
        })(i),
        setCursor: (l) => ((a) => {
          x((r) => ({
            row: a,
            col: l,
            colEnd: -1,
            direction: r.direction
          }));
        })(i),
        onPaste: M,
        onCompositionStart: () => {
          $.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          $.current = !1, console.log("composition end");
        },
        onChange: (l) => (a) => ((r) => {
          if (console.log("onChange", $.current), $.current === !1) {
            const u = a.target.selectionStart, E = a.target.selectionEnd, m = a.target.selectionDirection;
            x((c) => ({
              row: c.row,
              col: u,
              colEnd: E,
              direction: m
            }));
          }
          b((u) => (u[r].body = l + a.target.value, [...u]));
        })(i),
        onKeyDown: (l, a) => (r) => {
          let u = r.currentTarget.selectionStart, E = r.currentTarget.selectionEnd, m = r.currentTarget.selectionDirection;
          x((c) => {
            switch (r.key) {
              case "ArrowLeft": {
                if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                  if (c.row === 0)
                    return c;
                  const v = n[R.row - 1].body.length;
                  return r.preventDefault(), {
                    row: c.row - 1,
                    col: v,
                    colEnd: -1,
                    direction: m
                  };
                }
                return r.shiftKey ? u == E ? (u--, m = "backward") : m === "forward" ? E-- : m === "backward" && u-- : (u--, E = -1), r.preventDefault(), {
                  row: c.row,
                  col: u,
                  colEnd: E,
                  direction: m
                };
              }
              case "ArrowRight": {
                const v = -l.length + n[R.row].body.length;
                return r.currentTarget != null && r.currentTarget.selectionStart === v && r.currentTarget.selectionEnd === v ? c.row === n.length - 1 ? c : (r.preventDefault(), {
                  row: c.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: m
                }) : (r.shiftKey ? m === "forward" ? E++ : m === "backward" && u++ : (u < E && (u = E), u++, E = -1), r.preventDefault(), {
                  row: c.row,
                  col: u,
                  colEnd: E,
                  direction: m
                });
              }
              case "ArrowUp":
                return q(a) && r.currentTarget != null && !kt(r.currentTarget.selectionStart, a) || c.row === 0 || r.currentTarget == null ? c : (r.preventDefault(), {
                  row: c.row - 1,
                  col: r.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: m
                });
              case "ArrowDown":
                return q(a) && r.currentTarget != null && !Ct(r.currentTarget.selectionStart, a) || c.row === n.length - 1 || r.currentTarget == null ? c : (r.preventDefault(), {
                  row: c.row + 1,
                  col: r.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: m
                });
              case "Backspace":
                if (l.length !== 0 && (r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0 || r.currentTarget.selectionStart === 1 && r.currentTarget.selectionEnd === 1))
                  l.length !== 0 && (b((v) => (l.length === 1 ? (v[c.row].body = r.currentTarget.value.slice(1), u--, u === -1 ? u++ : u === 0 && E !== 0 && (E = 0)) : l.length > 0 && (v[c.row].body = l.slice(2) + r.currentTarget.value), [...v])), r.preventDefault());
                else if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                  if (c.row === 0)
                    return c;
                  const P = Ke(n[R.row - 1].body)[1].length;
                  return b((K) => (q(K[c.row - 1].body) ? K[c.row - 1].body += `
` + K[c.row].body : K[c.row - 1].body += K[c.row].body, K.splice(c.row, 1), [...K])), r.preventDefault(), {
                    row: c.row - 1,
                    col: P,
                    colEnd: -1,
                    direction: m
                  };
                }
                return {
                  row: c.row,
                  col: u,
                  colEnd: E,
                  direction: m
                };
              case "Tab":
                return b((v) => {
                  if (r.shiftKey)
                    l.length === 1 ? (v[c.row].body = r.currentTarget.value.slice(1), u--) : l.length > 0 && (v[c.row].body = l.slice(2) + r.currentTarget.value);
                  else {
                    let P = "-";
                    q(r.currentTarget.value) && (P = " "), l.length === 0 ? (v[c.row].body = P + " " + r.currentTarget.value, u++) : v[c.row].body = "  " + l + r.currentTarget.value;
                  }
                  return x((P) => ({
                    row: P.row,
                    col: u,
                    colEnd: -1,
                    direction: m
                  })), [...v];
                }), r.preventDefault(), {
                  row: c.row,
                  col: u,
                  colEnd: -1,
                  direction: m
                };
              case "Enter":
                if (r.keyCode === 13) {
                  if (q(a) && !r.shiftKey)
                    return c;
                  {
                    if (r.currentTarget == null || r.currentTarget.selectionStart === void 0)
                      return r.preventDefault(), c;
                    let v = 0;
                    return b((P) => {
                      if (r.currentTarget == null || r.currentTarget.selectionStart === void 0)
                        return P;
                      const K = l.length + r.currentTarget.selectionStart;
                      let G = P[c.row].body.slice(K);
                      if (q(a)) {
                        const ee = P[c.row].body;
                        ee[ee.length - 1] === `
` ? P[c.row].body = P[c.row].body.slice(
                          0,
                          K - 1
                        ) : P[c.row].body = P[c.row].body.slice(
                          0,
                          K
                        ), G.length > 0 && G[0] === `
` && (G = G.slice(1));
                      } else
                        P[c.row].body = P[c.row].body.slice(
                          0,
                          K
                        );
                      return l.length !== 0 ? (P.splice(
                        c.row + 1,
                        0,
                        { body: l + " " + G, key: A() }
                      ), v = 1) : P.splice(c.row + 1, 0, { body: G, key: A() }), [...P];
                    }), r.preventDefault(), {
                      row: c.row + 1,
                      col: v,
                      colEnd: -1,
                      direction: m
                    };
                  }
                } else
                  return c;
              case " ":
                return console.log("space", u), (u === 0 || u === 1 && l.length >= 1) && (b((v) => {
                  let P = "-";
                  return q(r.currentTarget.value) && (P = " "), l.length === 0 ? (v[c.row].body = P + " " + r.currentTarget.value, u++) : v[c.row].body = "  " + l + r.currentTarget.value, [...v];
                }), r.preventDefault()), {
                  row: c.row,
                  col: u,
                  colEnd: -1,
                  direction: m
                };
              default:
                return c;
            }
          });
        },
        onLinkClick: d.onLinkClick,
        onSubLinkClick: d.onSubLinkClick,
        onClick: (l) => {
          if (R.row !== i) {
            const a = l.target.selectionStart;
            O([i, i]), x(() => ({ row: i, col: a }));
          }
        }
      },
      t.key
    )),
    /* @__PURE__ */ k.jsx("div", { className: "popup", ref: w, children: d.linePopupHandlers.map((t, i) => /* @__PURE__ */ k.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (t.handler(
            n.slice(S[0], S[1] + 1).map((l) => l.body),
            S
          ), O([S[1], S[1]]));
        },
        onTouchStart: () => {
          t.handler(n.slice(S[0], S[1] + 1).map((l) => l.body)), O([S[1], S[1]]);
        },
        children: t.name
      },
      i
    )) })
  ] });
};
export {
  _t as Editor,
  q as isBlock,
  pt as parseBlock
};
