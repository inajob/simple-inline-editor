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
  function U(M, f, S) {
    var C, D = {}, Y = null, W = null;
    S !== void 0 && (Y = "" + S), f.key !== void 0 && (Y = "" + f.key), f.ref !== void 0 && (W = f.ref);
    for (C in f)
      y.call(f, C) && !K.hasOwnProperty(C) && (D[C] = f[C]);
    if (M && M.defaultProps)
      for (C in f = M.defaultProps, f)
        D[C] === void 0 && (D[C] = f[C]);
    return { $$typeof: t, type: M, key: Y, ref: W, props: D, _owner: F.current };
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
    var g = Ee, t = Symbol.for("react.element"), b = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), M = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), N = Symbol.iterator, A = "@@iterator";
    function B(e) {
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
    var O = !1, $ = !1, l = !1, r = !1, i = !1, o;
    o = Symbol.for("react.module.reference");
    function h(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === K || i || e === F || e === S || e === C || r || e === W || O || $ || l || typeof e == "object" && e !== null && (e.$$typeof === Y || e.$$typeof === D || e.$$typeof === U || e.$$typeof === M || e.$$typeof === f || // This needs to include all possible module reference object
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
    var de = d.ReactCurrentDispatcher, he;
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
`), L = w.length - 1, I = H.length - 1; L >= 1 && I >= 0 && w[L] !== H[I]; )
            I--;
          for (; L >= 1 && I >= 0; L--, I--)
            if (w[L] !== H[I]) {
              if (L !== 1 || I !== 1)
                do
                  if (L--, I--, I < 0 || w[L] !== H[I]) {
                    var V = `
` + w[L].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, V), V;
                  }
                while (L >= 1 && I >= 0);
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
          case f:
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
    var ue = Object.prototype.hasOwnProperty, xe = {}, Se = d.ReactDebugCurrentFrame;
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
            } catch (L) {
              w = L;
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
    var re = d.ReactCurrentOwner, Qe = {
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
          var L = e.defaultProps;
          for (j in L)
            T[j] === void 0 && (T[j] = L[j]);
        }
        if (w || H) {
          var I = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && nt(T, I), H && ot(T, I);
        }
        return at(e, w, H, x, v, re.current, T);
      }
    }
    var me = d.ReactCurrentOwner, De = d.ReactDebugCurrentFrame;
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
          var x = B(e);
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
        else if (typeof n == "object" && (n.$$typeof === f || // Note: Memo only checks outer props here.
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
          var L;
          e === null ? L = "null" : ve(e) ? L = "array" : e !== void 0 && e.$$typeof === t ? (L = "<" + (E(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : L = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", L, w);
        }
        var I = it(e, n, s, x, j);
        if (I == null)
          return I;
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
        return e === y ? ut(I) : ct(I), I;
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
const wt = (g) => g.match(/^(\s*)> /) != null, pt = (g) => g.split(/[\r\n]/), Et = (g) => g.split(/[\r\n]/).length, Be = (g, t) => {
  const b = t.split(/[\r\n]/);
  let y = 0;
  for (let F = 0; F < b.length; F++)
    if (y += b[F].length + 1, y > g)
      return [g - (y - b[F].length - 1), F];
  throw new Error("error getPos");
}, kt = (g, t) => {
  const b = Be(g, t), y = Et(t);
  return b[1] === y - 1;
}, Tt = (g, t) => Be(g, t)[1] === 0, Ct = (g) => {
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
}, Ye = Ee.forwardRef(
  function(t, b) {
    const [y, F] = ie({
      prefix: "",
      selection: "",
      suffix: ""
    }), K = () => {
      F({ prefix: "", selection: "", suffix: "" });
    }, [U, M] = ie({
      index: 0
    }), f = (d, m) => {
      let R = 0, O = "", $ = !1;
      for (let r = 0; r < d.length; r++) {
        const i = d[r];
        i === "[" ? (R++, O = "") : i === "]" ? (R > 0 && (R--, O = "", $ = !0), R === 0 && ($ = !1)) : R > 0 && !$ && (O += i);
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
    J(() => {
      !A.current || !B.current || (A.current.style.display = "inline", y.selection === "" && D === "" ? B.current.style.display = "none" : B.current.style.display = "inline", B.current.style.left = A.current.getBoundingClientRect().width + "px", B.current.style.top = A.current.getBoundingClientRect().height + "px", A.current.style.display = "none");
    }, [y, D]), J(() => {
      M({ index: 0 });
    }, [t.value]);
    const Y = function(d) {
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
    let W = t.popupHandlers, N = !1;
    y.selection === "" && D !== "" && (W = t.keywords.map((d) => d.value).filter((d) => d.indexOf(D) != -1).map((d, m) => ({
      name: d,
      handler: () => {
        const R = S(y.prefix), O = W[m].name;
        let $ = C(y.suffix), l = (R + O).length;
        return ($.length == 0 || $[0] != "]") && ($ = "]" + $, l += 1), {
          value: R + O + $,
          column: l
        };
      }
    })), W.length > 0 && (N = !0));
    const A = X(null), B = X(null);
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
              onCompositionEnd: (d) => {
                t.onCompositionEnd(d), Y(d);
              },
              onChange: t.onChange,
              onKeyDown: (d) => {
                if (d.key === "Enter" && d.keyCode === 13 && N) {
                  const m = W[U.index].handler(null);
                  t.setLine(m.value), t.setCursor(m.column), d.preventDefault();
                } else
                  d.key == "Tab" && N ? (M((m) => {
                    let R = m.index + 1;
                    return R >= W.length && (R = 0), { index: R };
                  }), d.preventDefault()) : d.key == "Enter" && d.shiftKey ? (t.onMagicFunc(), d.preventDefault()) : t.onKeyDown(y)(d);
              },
              onSelect: Y
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "popup", ref: B, children: W.map((d, m) => /* @__PURE__ */ p.jsx(
            "div",
            {
              className: U.index == m ? "selected" : "",
              onClick: () => {
                const R = d.handler(y);
                t.setLine(R.value), t.setCursor(R.column), K();
              },
              children: d.name
            },
            m
          )) }),
          /* @__PURE__ */ p.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: A, children: y.prefix.replace(" ", " ") })
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
        const u = q(l, !0);
        o.push("list-indent-" + (((a = u == null ? void 0 : u[1]) == null ? void 0 : a.length) ?? 0) / 2);
      }
      return r && o.push("focus"), i && o.push("select"), o.join(" ");
    }, M = (l) => l ? [] : ["hide"], f = (l) => l ? "hide" : "", S = (l, r, i) => {
      let o = -1, h = "";
      return r.forEach(function(a) {
        const u = l.indexOf(a, i);
        u !== -1 && (o === -1 || o > u) && (o = u, h = a);
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
            const a = l.slice(o.pos, h.pos + 1), u = a.slice(1, a.length - 1), E = t.keywords.find((c) => c.value == u);
            console.log("K", u, t.keywords, E);
            let k = " unknown";
            E && (k = " " + E.style), i.push([/* @__PURE__ */ p.jsxs("span", { children: [
              /* @__PURE__ */ p.jsxs("span", { className: "braket" + k, onClick: (c) => {
                C(u), c.stopPropagation();
              }, children: [
                /* @__PURE__ */ p.jsx("span", { className: "invisible", children: "[" }),
                u,
                /* @__PURE__ */ p.jsx("span", { className: "invisible", children: "]" })
              ] }),
              /* @__PURE__ */ p.jsx("span", { className: "bracket-icon", onClick: (c) => {
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
    }, [C, D, t.keywords]), W = ne((l, r) => {
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
    }, []), A = ne((l) => {
      const r = l.match(/^(\s*)> /), i = (r == null ? void 0 : r[1]) ?? "";
      return l = l.slice(i.length).split(`
`).map(
        (o, h) => i + (h === 0 ? "" : "> ") + o
      ).join(`
`), l;
    }, []), B = ne((l) => {
      var r;
      if (console.log(l), q(l))
        if (wt(l)) {
          const i = l.match(/\s*> /), o = l.slice((r = i == null ? void 0 : i[0]) == null ? void 0 : r.length);
          K(
            /* @__PURE__ */ p.jsxs("div", { children: [
              /* @__PURE__ */ p.jsx("pre", { className: "for-copy", children: A(l) }),
              /* @__PURE__ */ p.jsx("div", { className: "no-select", children: W("pre", o) })
            ] })
          );
          return;
        } else {
          const i = Ct(l), o = W(i[0], i[1]);
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
    }, [N, A, W, Y]), d = X(null), m = (l) => (r) => {
      if (r.buttons !== 0 && d.current) {
        l();
        const i = new Range();
        i.selectNodeContents(d.current);
        const o = document.getSelection();
        if (!o)
          throw new Error("selection is null");
        o.empty(), o.addRange(i);
      }
    }, R = Ke(t.value), O = R[0], $ = R[1];
    return J(() => {
      B(t.value);
    }, [B, t.value]), q($) ? /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: U(t.value, t.isFocus, t.isSelect),
        ref: d,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: ["line-item"].concat(M(t.isFocus)).join(" "),
              onMouseLeave: m(t.selectThisLine),
              children: /* @__PURE__ */ p.jsx(
                Ye,
                {
                  ref: y,
                  value: $,
                  keywords: t.keywords,
                  setLine: t.setLine(O),
                  setCursor: t.setCursor,
                  onCompositionStart: t.onCompositionStart,
                  onCompositionEnd: t.onCompositionEnd,
                  onChange: t.onChange(O),
                  popupHandlers: [],
                  onMagicFunc: () => {
                  },
                  onKeyDown: () => t.onKeyDown(O, $)
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
        ref: d,
        "data-lineno": t.row,
        onClick: t.onClick,
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: M(t.isFocus) + " container",
              onMouseLeave: m(t.selectThisLine),
              children: /* @__PURE__ */ p.jsx(
                Ye,
                {
                  ref: y,
                  value: $,
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
                    r.key === "Enter" && r.keyCode === 13 && l.selection !== "" ? r.preventDefault() : t.onKeyDown(O, $)(r);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: f(t.isFocus), children: F })
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
  const M = X(!1), [f, S] = ie({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [C, D] = ie([0, 0]), Y = (r) => r == null ? null : r instanceof HTMLElement && r.classList.contains("line") ? r : Y(r.parentElement), W = X(null);
  let N, A, B = !1;
  const d = () => {
    B = !0;
    const r = document.getSelection();
    r && (N = Y(r.anchorNode), A = Y(r.focusNode), (N == null ? void 0 : N.parentNode) != W.current && (N = null, A = null), N !== A && S({ row: -1, col: 0 }));
  }, m = () => {
    var r, i, o, h;
    if (B && (B = !1, N && A && N !== A)) {
      const a = new Range();
      if (a.setStart(N, 0), a.setEnd(A, A.children.length), document.getSelection().empty(), document.getSelection().addRange(a), !((r = N.dataset) != null && r.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const u = parseInt((i = N.dataset) == null ? void 0 : i.lineno);
      if (!((o = A.dataset) != null && o.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const E = parseInt((h = A.dataset) == null ? void 0 : h.lineno);
      D([u, E]);
    }
  }, R = () => () => {
    S(() => ({ row: -1, col: 0 })), B = !0;
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
  const $ = (r) => (i) => {
    const h = i.clipboardData.getData("text").split(/\r\n|\n/);
    if (h.length === 1)
      return !0;
    const a = [];
    let u = [], E = !1, k = "";
    return h.forEach((c) => {
      const P = c.match(/^(\s*)(```.*)/);
      E ? c.indexOf(k + "```") === 0 ? (a.push(u.join(`
`)), E = !1, u = []) : (k !== "" && c.indexOf(k) !== 0 && (a.push(u.join(`
`)), E = !1, u = [], a.push(c)), u.push(c.slice(k.length))) : P ? (E = !0, k = P[1], u.push(c)) : a.push(c);
    }), u.length !== 0 && a.push(u.join(`
`)), b((c) => (c[r] = { body: c[r].body + a[0], key: c[r].key }, c.splice(r + 1, 0, ...a.slice(1).map((P) => ({ body: P, key: K() }))), [...c])), i.preventDefault(), !1;
  };
  J(() => {
    document.addEventListener("selectionchange", d), document.addEventListener("pointerup", m);
  }, []);
  const l = X([]);
  return J(() => {
    if (f.row !== -1 && M.current === !1) {
      const r = l.current[f.row];
      if (!r || !r.current)
        return;
      r.current.focus();
      let i = f.colEnd;
      (i === void 0 || i === -1) && (i = f.col), console.log("EFFECT", "col:", f.col, "end:", i), r.current.setSelectionRange(f.col, i, f.direction);
    }
  }, [f, t]), t.forEach((r, i) => {
    l.current[i] = yt();
  }), /* @__PURE__ */ p.jsxs("div", { className: "editor", ref: W, children: [
    t.map((r, i) => /* @__PURE__ */ p.jsx(
      xt,
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
        onPaste: $,
        onCompositionStart: () => {
          M.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          M.current = !1, console.log("composition end");
        },
        onChange: (o) => (h) => ((a) => {
          if (console.log("onChange", M.current), M.current === !1) {
            const u = h.target.selectionStart, E = h.target.selectionEnd, k = h.target.selectionDirection;
            S((c) => ({
              row: c.row,
              col: u,
              colEnd: E,
              direction: k
            }));
          }
          b((u) => (u[a].body = o + h.target.value, [...u]));
        })(i),
        onKeyDown: (o, h) => (a) => {
          let u = a.currentTarget.selectionStart, E = a.currentTarget.selectionEnd, k = a.currentTarget.selectionDirection;
          switch (a.key) {
            case "ArrowLeft": {
              if (a.currentTarget != null && a.currentTarget.selectionStart === 0 && a.currentTarget.selectionEnd === 0) {
                a.preventDefault(), S((c) => {
                  if (c.row === 0)
                    return c;
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
              a.shiftKey ? u == E ? (u--, k = "backward") : k === "forward" ? E-- : k === "backward" && u-- : (u--, E = -1), a.preventDefault(), S((c) => ({
                row: c.row,
                col: u,
                colEnd: E,
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
              a.shiftKey ? k === "forward" ? E++ : k === "backward" && u++ : (u < E && (u = E), u++, E = -1), a.preventDefault(), S((P) => ({
                row: P.row,
                col: u,
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
                o.length !== 0 && (b((c) => (o.length === 1 ? (c[f.row].body = a.currentTarget.value.slice(1), u--, u === -1 ? u++ : u === 0 && E !== 0 && (E = 0)) : o.length > 0 && (c[f.row].body = o.slice(2) + a.currentTarget.value), [...c])), a.preventDefault());
              else if (a.currentTarget != null && a.currentTarget.selectionStart === 0 && a.currentTarget.selectionEnd === 0) {
                if (f.row === 0)
                  break;
                const P = Ke(t[f.row - 1].body)[1].length;
                b((_) => (q(_[f.row - 1].body) ? _[f.row - 1].body += `
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
                colEnd: E,
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
                  q(a.currentTarget.value) && (P = " "), o.length === 0 ? (c[f.row].body = P + " " + a.currentTarget.value, u++) : c[f.row].body = "  " + o + a.currentTarget.value;
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
                    let G = _[f.row].body.slice(Z);
                    if (q(h)) {
                      const te = _[f.row].body;
                      te[te.length - 1] === `
` ? _[f.row].body = _[f.row].body.slice(
                        0,
                        Z - 1
                      ) : _[f.row].body = _[f.row].body.slice(
                        0,
                        Z
                      ), G.length > 0 && G[0] === `
` && (G = G.slice(1));
                    } else
                      _[f.row].body = _[f.row].body.slice(
                        0,
                        Z
                      );
                    return o.length !== 0 ? (_.splice(
                      f.row + 1,
                      0,
                      { body: o + " " + G, key: K() }
                    ), c = 1) : _.splice(f.row + 1, 0, { body: G, key: K() }), [..._];
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
                return q(a.currentTarget.value) && (P = " "), o.length === 0 ? (c[f.row].body = P + " " + a.currentTarget.value, u++) : c[f.row].body = "  " + o + a.currentTarget.value, [...c];
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
