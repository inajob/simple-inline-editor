import Ee, { useState as ie, useEffect as J, useRef as X, forwardRef as vt, useCallback as ne, createRef as yt } from "react";
var pe = { exports: {} }, oe = {};
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
    return oe;
  $e = 1;
  var g = Ee, t = Symbol.for("react.element"), b = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, F = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function U($, d, S) {
    var C, D = {}, Y = null, B = null;
    S !== void 0 && (Y = "" + S), d.key !== void 0 && (Y = "" + d.key), d.ref !== void 0 && (B = d.ref);
    for (C in d)
      y.call(d, C) && !K.hasOwnProperty(C) && (D[C] = d[C]);
    if ($ && $.defaultProps)
      for (C in d = $.defaultProps, d)
        D[C] === void 0 && (D[C] = d[C]);
    return { $$typeof: t, type: $, key: Y, ref: B, props: D, _owner: F.current };
  }
  return oe.Fragment = b, oe.jsx = U, oe.jsxs = U, oe;
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
var We;
function bt() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var g = Ee, t = Symbol.for("react.element"), b = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), $ = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), N = Symbol.iterator, L = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = N && e[N] || e[L];
      return typeof n == "function" ? n : null;
    }
    var u = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), v = 1; v < n; v++)
          s[v - 1] = arguments[v];
        R("error", e, s);
      }
    }
    function R(e, n, s) {
      {
        var v = u.ReactDebugCurrentFrame, x = v.getStackAddendum();
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
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === K || i || e === F || e === S || e === C || r || e === B || O || W || l || typeof e == "object" && e !== null && (e.$$typeof === Y || e.$$typeof === D || e.$$typeof === U || e.$$typeof === $ || e.$$typeof === d || // This needs to include all possible module reference object
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
    function f(e) {
      return e.displayName || "Context";
    }
    function E(e) {
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
        case K:
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
          case $:
            var n = e;
            return f(n) + ".Consumer";
          case U:
            var s = e;
            return f(s._context) + ".Provider";
          case d:
            return a(e, e.render, "ForwardRef");
          case D:
            var v = e.displayName || null;
            return v !== null ? v : E(e.type) || "Memo";
          case Y: {
            var x = e, j = x._payload, T = x._init;
            try {
              return E(T(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, c = 0, P, _, Z, G, te, ke, Te;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function He() {
      {
        if (c === 0) {
          P = console.log, _ = console.info, Z = console.warn, G = console.error, te = console.group, ke = console.groupCollapsed, Te = console.groupEnd;
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
        c++;
      }
    }
    function Ue() {
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
              value: G
            }),
            group: k({}, e, {
              value: te
            }),
            groupCollapsed: k({}, e, {
              value: ke
            }),
            groupEnd: k({}, e, {
              value: Te
            })
          });
        }
        c < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = u.ReactCurrentDispatcher, he;
    function le(e, n, s) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (x) {
            var v = x.stack.trim().match(/\n( *(at )?)/);
            he = v && v[1] || "";
          }
        return `
` + he + e;
      }
    }
    var ge = !1, se;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      se = new Ve();
    }
    function Re(e, n) {
      if (!e || ge)
        return "";
      {
        var s = se.get(e);
        if (s !== void 0)
          return s;
      }
      var v;
      ge = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = de.current, de.current = null, He();
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
            } catch (z) {
              v = z;
            }
            Reflect.construct(e, [], T);
          } else {
            try {
              T.call();
            } catch (z) {
              v = z;
            }
            e.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            v = z;
          }
          e();
        }
      } catch (z) {
        if (z && v && typeof z.stack == "string") {
          for (var w = z.stack.split(`
`), H = v.stack.split(`
`), A = w.length - 1, M = H.length - 1; A >= 1 && M >= 0 && w[A] !== H[M]; )
            M--;
          for (; A >= 1 && M >= 0; A--, M--)
            if (w[A] !== H[M]) {
              if (A !== 1 || M !== 1)
                do
                  if (A--, M--, M < 0 || w[A] !== H[M]) {
                    var V = `
` + w[A].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, V), V;
                  }
                while (A >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        ge = !1, de.current = j, Ue(), Error.prepareStackTrace = x;
      }
      var ee = e ? e.displayName || e.name : "", Me = ee ? le(ee) : "";
      return typeof e == "function" && se.set(e, Me), Me;
    }
    function qe(e, n, s) {
      return Re(e, !1);
    }
    function Je(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ce(e, n, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, Je(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case S:
          return le("Suspense");
        case C:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return qe(e.render);
          case D:
            return ce(e.type, n, s);
          case Y: {
            var v = e, x = v._payload, j = v._init;
            try {
              return ce(j(x), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, xe = {}, Se = u.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var n = e._owner, s = ce(e.type, e._source, n ? n.type : null);
        Se.setExtraStackFrame(s);
      } else
        Se.setExtraStackFrame(null);
    }
    function Ge(e, n, s, v, x) {
      {
        var j = Function.call.bind(ue);
        for (var T in e)
          if (j(e, T)) {
            var w = void 0;
            try {
              if (typeof e[T] != "function") {
                var H = Error((v || "React class") + ": " + s + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw H.name = "Invariant Violation", H;
              }
              w = e[T](n, T, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              w = A;
            }
            w && !(w instanceof Error) && (fe(x), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, T, typeof w), fe(null)), w instanceof Error && !(w.message in xe) && (xe[w.message] = !0, fe(x), m("Failed %s type: %s", s, w.message), fe(null));
          }
      }
    }
    var ze = Array.isArray;
    function ve(e) {
      return ze(e);
    }
    function Xe(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), _e(e);
    }
    var re = u.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, ye;
    ye = {};
    function et(e) {
      if (ue.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tt(e) {
      if (ue.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rt(e, n) {
      if (typeof e.ref == "string" && re.current && n && re.current.stateNode !== n) {
        var s = E(re.current.type);
        ye[s] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(re.current.type), e.ref), ye[s] = !0);
      }
    }
    function nt(e, n) {
      {
        var s = function() {
          Pe || (Pe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function ot(e, n) {
      {
        var s = function() {
          Oe || (Oe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var at = function(e, n, s, v, x, j, T) {
      var w = {
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
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function it(e, n, s, v, x) {
      {
        var j, T = {}, w = null, H = null;
        s !== void 0 && (je(s), w = "" + s), tt(n) && (je(n.key), w = "" + n.key), et(n) && (H = n.ref, rt(n, x));
        for (j in n)
          ue.call(n, j) && !Qe.hasOwnProperty(j) && (T[j] = n[j]);
        if (e && e.defaultProps) {
          var A = e.defaultProps;
          for (j in A)
            T[j] === void 0 && (T[j] = A[j]);
        }
        if (w || H) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && nt(T, M), H && ot(T, M);
        }
        return at(e, w, H, x, v, re.current, T);
      }
    }
    var me = u.ReactCurrentOwner, De = u.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var n = e._owner, s = ce(e.type, e._source, n ? n.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (me.current) {
          var e = E(me.current.type);
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
          var n = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + n + ":" + s + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function st(e) {
      {
        var n = Fe();
        if (!n) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (n = `

Check the top-level render call using <` + s + ">.");
        }
        return n;
      }
    }
    function Ae(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = st(n);
        if (Ne[s])
          return;
        Ne[s] = !0;
        var v = "";
        e && e._owner && e._owner !== me.current && (v = " It was passed a child from " + E(e._owner.type) + "."), Q(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), Q(null);
      }
    }
    function Le(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ve(e))
          for (var s = 0; s < e.length; s++) {
            var v = e[s];
            we(v) && Ae(v, n);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = I(e);
          if (typeof x == "function" && x !== e.entries)
            for (var j = x.call(e), T; !(T = j.next()).done; )
              we(T.value) && Ae(T.value, n);
        }
      }
    }
    function ct(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var s;
        if (typeof n == "function")
          s = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === D))
          s = n.propTypes;
        else
          return;
        if (s) {
          var v = E(n);
          Ge(s, e.props, "prop", v, e);
        } else if (n.PropTypes !== void 0 && !be) {
          be = !0;
          var x = E(n);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(e) {
      {
        for (var n = Object.keys(e.props), s = 0; s < n.length; s++) {
          var v = n[s];
          if (v !== "children" && v !== "key") {
            Q(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Q(null);
            break;
          }
        }
        e.ref !== null && (Q(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    function Ie(e, n, s, v, x, j) {
      {
        var T = h(e);
        if (!T) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var H = lt(x);
          H ? w += H : w += Fe();
          var A;
          e === null ? A = "null" : ve(e) ? A = "array" : e !== void 0 && e.$$typeof === t ? (A = "<" + (E(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : A = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, w);
        }
        var M = it(e, n, s, x, j);
        if (M == null)
          return M;
        if (T) {
          var V = n.children;
          if (V !== void 0)
            if (v)
              if (ve(V)) {
                for (var ee = 0; ee < V.length; ee++)
                  Le(V[ee], e);
                Object.freeze && Object.freeze(V);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(V, e);
        }
        return e === y ? ut(M) : ct(M), M;
      }
    }
    function ft(e, n, s) {
      return Ie(e, n, s, !0);
    }
    function dt(e, n, s) {
      return Ie(e, n, s, !1);
    }
    var ht = dt, gt = ft;
    ae.Fragment = y, ae.jsx = ht, ae.jsxs = gt;
  }()), ae;
}
process.env.NODE_ENV === "production" ? pe.exports = mt() : pe.exports = bt();
var p = pe.exports;
function q(g, t) {
  const b = g.match(/^(\s*)(```|> )/);
  return t === !0 ? b : b != null;
}
const wt = (g) => g.match(/^(\s*)> /) != null, pt = (g) => g.split(/[\r\n]/), Et = (g) => g.split(/[\r\n]/).length, Ye = (g, t) => {
  const b = t.split(/[\r\n]/);
  let y = 0;
  for (let F = 0; F < b.length; F++)
    if (y += b[F].length + 1, y > g)
      return [g - (y - b[F].length - 1), F];
  throw new Error("error getPos");
}, kt = (g, t) => {
  const b = Ye(g, t), y = Et(t);
  return b[1] === y - 1;
}, Tt = (g, t) => Ye(g, t)[1] === 0, Ct = (g) => {
  const t = g.match(/^\s*`{3}(.*)/), b = pt(g).slice(1).join(`
`);
  return [t == null ? void 0 : t[1], b];
}, Ke = (g) => {
  const t = g.match(/^(\s*-)( .*)$/);
  let b = "";
  if (t)
    g = t[2], b = t[1];
  else {
    const y = g.match(/^(\s*)(```.*|> )/);
    y && (b = y[1], g = g.slice(y[1].length));
  }
  return [b, g];
}, Be = Ee.forwardRef(
  function(t, b) {
    const [y, F] = ie({
      prefix: "",
      selection: "",
      suffix: ""
    }), K = () => {
      F({ prefix: "", selection: "", suffix: "" });
    }, [U, $] = ie({
      index: 0
    }), d = (u, m) => {
      let R = 0, O = "", W = !1;
      for (let r = 0; r < u.length; r++) {
        const i = u[r];
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
    }, S = (u) => {
      let m = u.length - 1;
      for (let R = u.length - 1; R >= 0; R--)
        if (u[R] === "[") {
          m = R;
          break;
        }
      return u.slice(0, -(u.length - 1 - m));
    }, C = (u) => {
      let m = 0;
      for (let R = 0; R < u.length; R++)
        if (u[R] === "]") {
          m = R;
          break;
        }
      return u.slice(m);
    }, D = d(y.prefix, y.suffix);
    J(() => {
      if (!L.current || !I.current)
        return;
      L.current.style.display = "inline", y.selection === "" && D === "" ? I.current.style.display = "none" : I.current.style.display = "inline", I.current.style.left = L.current.getBoundingClientRect().width + "px", I.current.style.top = -I.current.getBoundingClientRect().height + "px";
      const u = I.current.getBoundingClientRect().top + window.scrollY;
      u < 0 && (I.current.style.top = -I.current.getBoundingClientRect().height - u + "px"), L.current.style.display = "none";
    }, [y, D]), J(() => {
      $({ index: 0 });
    }, [t.value]);
    const Y = function(u) {
      F({
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
    let B = t.popupHandlers, N = !1;
    y.selection === "" && D !== "" && (B = t.keywords.map((u) => u.value).filter((u) => u.indexOf(D) != -1).map((u, m) => ({
      name: u,
      handler: () => {
        const R = S(y.prefix), O = B[m].name;
        let W = C(y.suffix), l = (R + O).length;
        return (W.length == 0 || W[0] != "]") && (W = "]" + W, l += 1), {
          value: R + O + W,
          column: l
        };
      }
    })), B.length > 0 && (N = !0));
    const L = X(null), I = X(null);
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: t.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ p.jsx(
            "textarea",
            {
              ref: b,
              value: t.value,
              onPaste: t.onPaste,
              onCompositionStart: t.onCompositionStart,
              onCompositionEnd: (u) => {
                t.onCompositionEnd(u), Y(u);
              },
              onChange: t.onChange,
              onKeyDown: (u) => {
                if (u.key === "Enter" && u.keyCode === 13 && N) {
                  const m = B[U.index].handler(null);
                  t.setLine(m.value), t.setCursor(m.column), u.preventDefault();
                } else
                  u.key == "Tab" && N ? ($((m) => {
                    let R = m.index + 1;
                    return R >= B.length && (R = 0), { index: R };
                  }), u.preventDefault()) : u.key == "Enter" && u.shiftKey ? (t.onMagicFunc(), u.preventDefault()) : t.onKeyDown(y)(u);
              },
              onSelect: Y
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "popup", ref: I, children: B.map((u, m) => /* @__PURE__ */ p.jsx(
            "div",
            {
              className: U.index == m ? "selected" : "",
              onClick: () => {
                const R = u.handler(y);
                t.setLine(R.value), t.setCursor(R.column), K();
              },
              children: u.name
            },
            m
          )) }),
          /* @__PURE__ */ p.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: L, children: y.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), Rt = (g, t = null) => {
  const b = X(t);
  return J(() => {
    g && (typeof g == "function" ? g(b.current) : g.current = b.current);
  }, [g]), b;
}, xt = vt(
  function(t, b) {
    const y = Rt(b), [F, K] = ie();
    J(() => {
      if (!y.current)
        return;
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
      else if (q(l)) {
        const f = q(l, !0);
        o.push("list-indent-" + (((a = f == null ? void 0 : f[1]) == null ? void 0 : a.length) ?? 0) / 2);
      }
      return r && o.push("focus"), i && o.push("select"), o.join(" ");
    }, $ = (l) => l ? [] : ["hide"], d = (l) => l ? "hide" : "", S = (l, r, i) => {
      let o = -1, h = "";
      return r.forEach(function(a) {
        const f = l.indexOf(a, i);
        f !== -1 && (o === -1 || o > f) && (o = f, h = a);
      }), { pos: o, target: h };
    }, C = t.onLinkClick, D = t.onSubLinkClick, Y = ne((l) => {
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
            i.push(/* @__PURE__ */ p.jsx("a", { href: a, children: a }, r)), r = h.pos;
          } else {
            const a = l.slice(o.pos, l.length);
            i.push(/* @__PURE__ */ p.jsx("a", { href: a, children: a }, r)), r = l.length;
            break;
          }
        } else if (o.target == " ")
          i.push(l.slice(r, o.pos)), i.push(" "), r = o.pos + o.target.length;
        else if (o.target == "[") {
          r !== o.pos && (i.push(l.slice(r, o.pos)), r = o.pos);
          const h = S(l, ["]"], o.pos + o.target.length);
          if (h.pos !== -1) {
            const a = l.slice(o.pos, h.pos + 1), f = a.slice(1, a.length - 1), E = t.keywords.find((c) => c.value == f);
            console.log("K", f, t.keywords, E);
            let k = " unknown";
            E && (k = " " + E.style), i.push([/* @__PURE__ */ p.jsxs("span", { children: [
              /* @__PURE__ */ p.jsxs("span", { className: "braket" + k, onClick: (c) => {
                C(f), c.stopPropagation();
              }, children: [
                /* @__PURE__ */ p.jsx("span", { className: "invisible", children: "[" }),
                f,
                /* @__PURE__ */ p.jsx("span", { className: "invisible", children: "]" })
              ] }),
              /* @__PURE__ */ p.jsx("span", { className: "bracket-icon", onClick: (c) => {
                D(f), c.stopPropagation();
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
    }, [C, D, t.keywords]), B = ne((l, r) => {
      const i = l ? t.blockStyles[l] : void 0;
      return i ? i(r, K) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx("span", { className: "block-type", children: l }),
        /* @__PURE__ */ p.jsx("pre", { children: r })
      ] });
    }, [t.blockStyles]), N = ne((l) => {
      const r = l.match(/^(\s*)```.*/), i = (r == null ? void 0 : r[1]) ?? "";
      return l = l.slice(i.length).split(`
`).map((o) => i + o).join(`
`), l;
    }, []), L = ne((l) => {
      const r = l.match(/^(\s*)> /), i = (r == null ? void 0 : r[1]) ?? "";
      return l = l.slice(i.length).split(`
`).map(
        (o, h) => i + (h === 0 ? "" : "> ") + o
      ).join(`
`), l;
    }, []), I = ne((l) => {
      var r;
      if (console.log(l), q(l))
        if (wt(l)) {
          const i = l.match(/\s*> /), o = l.slice((r = i == null ? void 0 : i[0]) == null ? void 0 : r.length);
          K(
            /* @__PURE__ */ p.jsxs("div", { children: [
              /* @__PURE__ */ p.jsx("pre", { className: "for-copy", children: L(l) }),
              /* @__PURE__ */ p.jsx("div", { className: "no-select", children: B("pre", o) })
            ] })
          );
          return;
        } else {
          const i = Ct(l), o = B(i[0], i[1]);
          K(
            /* @__PURE__ */ p.jsxs("div", { children: [
              /* @__PURE__ */ p.jsx("pre", { className: "for-copy", children: N(l + "\n```") }),
              /* @__PURE__ */ p.jsx("div", { className: "no-select", children: o })
            ] })
          );
          return;
        }
      else {
        const i = ["elm"], o = l.match(/^(\s*)-( .*)$/);
        let h = null;
        l.indexOf("# ") === 0 || l.indexOf("## ") === 0 || l.indexOf("### ") === 0 || o && (l = o[2], h = /* @__PURE__ */ p.jsx("pre", { className: "for-copy-inline", children: o[1] + "-" })), K(
          /* @__PURE__ */ p.jsxs("div", { className: i.join(" "), children: [
            h,
            Y(l)
          ] })
        );
        return;
      }
    }, [N, L, B, Y]), u = X(null), m = (l) => (r) => {
      if (r.buttons !== 0 && u.current) {
        l();
        const i = new Range();
        i.selectNodeContents(u.current);
        const o = document.getSelection();
        if (!o)
          throw new Error("selection is null");
        o.empty(), o.addRange(i);
      }
    }, R = Ke(t.value), O = R[0], W = R[1];
    return J(() => {
      I(t.value);
    }, [I, t.value]), q(W) ? /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: U(t.value, t.isFocus, t.isSelect),
        ref: u,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: ["line-item"].concat($(t.isFocus)).join(" "),
              onMouseLeave: m(t.selectThisLine),
              children: /* @__PURE__ */ p.jsx(
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
          /* @__PURE__ */ p.jsx("div", { className: "line-item", children: F })
        ]
      }
    ) : /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: U(t.value, t.isFocus, t.isSelect),
        ref: u,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: $(t.isFocus) + " container",
              onMouseLeave: m(t.selectThisLine),
              children: /* @__PURE__ */ p.jsx(
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
          /* @__PURE__ */ p.jsx("div", { className: d(t.isFocus), children: F })
        ]
      }
    );
  }
), _t = (g) => {
  const t = g.lines, b = g.setLines;
  let y = 0;
  t.forEach((r) => {
    r.key > y && (y = r.key);
  });
  const F = X(y);
  J(() => {
    let r = 0;
    t.forEach((i) => {
      i.key > r && (r = i.key);
    }), F.current = r;
  }, [t]);
  const K = () => (F.current = F.current + 1, F.current), U = g.onChange;
  J(() => {
    U(t.map((r) => r.body));
  }, [t, U]);
  const $ = X(!1), [d, S] = ie({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [C, D] = ie([0, 0]), Y = (r) => r == null ? null : r instanceof HTMLElement && r.classList.contains("line") ? r : Y(r.parentElement), B = X(null);
  let N, L, I = !1;
  const u = () => {
    I = !0;
    const r = document.getSelection();
    r && (N = Y(r.anchorNode), L = Y(r.focusNode), (N == null ? void 0 : N.parentNode) != B.current && (N = null, L = null), N !== L && S({ row: -1, col: 0 }));
  }, m = () => {
    var r, i, o, h;
    if (I && (I = !1, N && L && N !== L)) {
      const a = new Range();
      if (a.setStart(N, 0), a.setEnd(L, L.children.length), document.getSelection().empty(), document.getSelection().addRange(a), !((r = N.dataset) != null && r.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const f = parseInt((i = N.dataset) == null ? void 0 : i.lineno);
      if (!((o = L.dataset) != null && o.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const E = parseInt((h = L.dataset) == null ? void 0 : h.lineno);
      D([f, E]);
    }
  }, R = () => () => {
    S(() => ({ row: -1, col: 0 })), I = !0;
  }, O = X(null);
  J(() => {
    var r;
    if (O.current)
      if (C[1] - C[0] >= 1) {
        O.current.style.display = "block";
        const i = (r = document.getSelection()) == null ? void 0 : r.focusNode;
        if (!i)
          throw new Error("focusNode is null");
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
    let f = [], E = !1, k = "";
    return h.forEach((c) => {
      const P = c.match(/^(\s*)(```.*)/);
      E ? c.indexOf(k + "```") === 0 ? (a.push(f.join(`
`)), E = !1, f = []) : (k !== "" && c.indexOf(k) !== 0 && (a.push(f.join(`
`)), E = !1, f = [], a.push(c)), f.push(c.slice(k.length))) : P ? (E = !0, k = P[1], f.push(c)) : a.push(c);
    }), f.length !== 0 && a.push(f.join(`
`)), b((c) => (c[r] = { body: c[r].body + a[0], key: c[r].key }, c.splice(r + 1, 0, ...a.slice(1).map((P) => ({ body: P, key: K() }))), [...c])), i.preventDefault(), !1;
  };
  J(() => {
    document.addEventListener("selectionchange", u), document.addEventListener("pointerup", m);
  }, []);
  const l = X([]);
  return J(() => {
    if (d.row !== -1 && $.current === !1) {
      const r = l.current[d.row];
      if (!r || !r.current)
        return;
      r.current.focus();
      let i = d.colEnd;
      (i === void 0 || i === -1) && (i = d.col), console.log("EFFECT", "col:", d.col, "end:", i), r.current.setSelectionRange(d.col, i, d.direction);
    }
  }, [d, t]), t.forEach((r, i) => {
    l.current[i] = yt();
  }), /* @__PURE__ */ p.jsxs("div", { className: "editor", ref: B, children: [
    t.map((r, i) => /* @__PURE__ */ p.jsx(
      xt,
      {
        key_debug: r.key,
        ref: l.current[i],
        isFocus: i === d.row,
        isSelect: C[0] <= i && i <= C[1],
        row: i,
        value: r.body,
        textPopupHandlers: g.textPopupHandlers,
        onMagicFunc: g.onMagicFunc(i),
        keywords: g.keywords,
        blockStyles: g.blockStyles,
        selectThisLine: R(),
        setLine: (o) => (h) => ((a) => {
          b((f) => (f[a].body = o + h, [...f]));
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
          $.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          $.current = !1, console.log("composition end");
        },
        onChange: (o) => (h) => ((a) => {
          if (console.log("onChange", $.current), $.current === !1) {
            const f = h.target.selectionStart, E = h.target.selectionEnd, k = h.target.selectionDirection;
            S((c) => ({
              row: c.row,
              col: f,
              colEnd: E,
              direction: k
            }));
          }
          b((f) => (f[a].body = o + h.target.value, [...f]));
        })(i),
        onKeyDown: (o, h) => (a) => {
          let f = a.currentTarget.selectionStart, E = a.currentTarget.selectionEnd, k = a.currentTarget.selectionDirection;
          switch (a.key) {
            case "ArrowLeft": {
              if (a.currentTarget != null && a.currentTarget.selectionStart === 0 && a.currentTarget.selectionEnd === 0) {
                a.preventDefault(), S((c) => {
                  if (c.row === 0)
                    return c;
                  const P = t[d.row - 1].body.length;
                  return {
                    row: c.row - 1,
                    col: P,
                    colEnd: -1,
                    direction: k
                  };
                });
                break;
              }
              a.shiftKey ? f == E ? (f--, k = "backward") : k === "forward" ? E-- : k === "backward" && f-- : (f--, E = -1), a.preventDefault(), S((c) => ({
                row: c.row,
                col: f,
                colEnd: E,
                direction: k
              }));
              break;
            }
            case "ArrowRight": {
              const c = -o.length + t[d.row].body.length;
              if (a.currentTarget != null && a.currentTarget.selectionStart === c && a.currentTarget.selectionEnd === c) {
                S((P) => P.row === t.length - 1 ? P : (a.preventDefault(), {
                  row: P.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: k
                }));
                break;
              }
              a.shiftKey ? k === "forward" ? E++ : k === "backward" && f++ : (f < E && (f = E), f++, E = -1), a.preventDefault(), S((P) => ({
                row: P.row,
                col: f,
                colEnd: E,
                direction: k
              }));
              break;
            }
            case "ArrowUp":
              q(h) && a.currentTarget != null && !Tt(a.currentTarget.selectionStart, h) || (a.preventDefault(), S((c) => c.row === 0 || a.currentTarget == null ? c : {
                row: c.row - 1,
                col: a.currentTarget.selectionStart,
                colEnd: -1,
                direction: k
              }));
              break;
            case "ArrowDown":
              q(h) && a.currentTarget != null && !kt(a.currentTarget.selectionStart, h) || S((c) => c.row === t.length - 1 || a.currentTarget == null ? c : (a.preventDefault(), {
                row: c.row + 1,
                col: a.currentTarget.selectionStart,
                colEnd: -1,
                direction: k
              }));
              break;
            case "Backspace":
              if (!a.currentTarget)
                return;
              if (o.length !== 0 && (a.currentTarget.selectionStart === 0 && a.currentTarget.selectionEnd === 0 || a.currentTarget.selectionStart === 1 && a.currentTarget.selectionEnd === 1))
                o.length !== 0 && (b((c) => (o.length === 1 ? (c[d.row].body = a.currentTarget.value.slice(1), f--, f === -1 ? f++ : f === 0 && E !== 0 && (E = 0)) : o.length > 0 && (c[d.row].body = o.slice(2) + a.currentTarget.value), [...c])), a.preventDefault());
              else if (a.currentTarget != null && a.currentTarget.selectionStart === 0 && a.currentTarget.selectionEnd === 0) {
                if (d.row === 0)
                  break;
                const P = Ke(t[d.row - 1].body)[1].length;
                b((_) => (q(_[d.row - 1].body) ? _[d.row - 1].body += `
` + _[d.row].body : _[d.row - 1].body += _[d.row].body, _.splice(d.row, 1), [..._])), S((_) => ({
                  row: _.row - 1,
                  col: P,
                  colEnd: -1,
                  direction: k
                })), a.preventDefault();
                break;
              }
              S((c) => ({
                row: c.row,
                col: f,
                colEnd: E,
                direction: k
              }));
              break;
            case "Tab":
              b((c) => {
                if (!a.currentTarget)
                  return c;
                if (a.shiftKey)
                  o.length === 1 ? (c[d.row].body = a.currentTarget.value.slice(1), f--) : o.length > 0 && (c[d.row].body = o.slice(2) + a.currentTarget.value);
                else {
                  let P = "-";
                  q(a.currentTarget.value) && (P = " "), o.length === 0 ? (c[d.row].body = P + " " + a.currentTarget.value, f++) : c[d.row].body = "  " + o + a.currentTarget.value;
                }
                return [...c];
              }), a.preventDefault(), S((c) => ({
                row: c.row,
                col: f,
                colEnd: -1,
                direction: k
              }));
              break;
            case "Enter":
              if (a.keyCode === 13) {
                if (q(h) && !a.shiftKey)
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
                    let G = _[d.row].body.slice(Z);
                    if (q(h)) {
                      const te = _[d.row].body;
                      te[te.length - 1] === `
` ? _[d.row].body = _[d.row].body.slice(
                        0,
                        Z - 1
                      ) : _[d.row].body = _[d.row].body.slice(
                        0,
                        Z
                      ), G.length > 0 && G[0] === `
` && (G = G.slice(1));
                    } else
                      _[d.row].body = _[d.row].body.slice(
                        0,
                        Z
                      );
                    return o.length !== 0 ? (_.splice(
                      d.row + 1,
                      0,
                      { body: o + " " + G, key: K() }
                    ), c = 1) : _.splice(d.row + 1, 0, { body: G, key: K() }), [..._];
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
              console.log("space", f), (f === 0 || f === 1 && o.length >= 1) && (b((c) => {
                if (!a.currentTarget)
                  return c;
                let P = "-";
                return q(a.currentTarget.value) && (P = " "), o.length === 0 ? (c[d.row].body = P + " " + a.currentTarget.value, f++) : c[d.row].body = "  " + o + a.currentTarget.value, [...c];
              }), a.preventDefault()), S((c) => ({
                row: c.row,
                col: f,
                colEnd: -1,
                direction: k
              }));
              break;
          }
        },
        onLinkClick: g.onLinkClick,
        onSubLinkClick: g.onSubLinkClick,
        onClick: (o) => {
          if (d.row !== i) {
            const h = o.target.selectionStart;
            D([i, i]), S(() => ({ row: i, col: h }));
          }
        }
      },
      r.key
    )),
    /* @__PURE__ */ p.jsx("div", { className: "popup", ref: O, children: g.linePopupHandlers.map((r, i) => /* @__PURE__ */ p.jsx(
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
  _t as Editor,
  q as isBlock,
  Ct as parseBlock
};
