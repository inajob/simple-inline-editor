import be, { useState as ie, useEffect as J, useRef as X, forwardRef as mt, useCallback as ne, createRef as yt } from "react";
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
  var d = be, n = Symbol.for("react.element"), v = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, A = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(T, x, S) {
    var O, D = {}, B = null, _ = null;
    S !== void 0 && (B = "" + S), x.key !== void 0 && (B = "" + x.key), x.ref !== void 0 && (_ = x.ref);
    for (O in x)
      g.call(x, O) && !Y.hasOwnProperty(O) && (D[O] = x[O]);
    if (T && T.defaultProps)
      for (O in x = T.defaultProps, x)
        D[O] === void 0 && (D[O] = x[O]);
    return { $$typeof: n, type: T, key: B, ref: _, props: D, _owner: A.current };
  }
  return re.Fragment = v, re.jsx = $, re.jsxs = $, re;
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
    var d = be, n = Symbol.for("react.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), T = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), I = Symbol.iterator, H = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = I && e[I] || e[H];
      return typeof o == "function" ? o : null;
    }
    var f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          s[h - 1] = arguments[h];
        y("error", e, s);
      }
    }
    function y(e, o, s) {
      {
        var h = f.ReactDebugCurrentFrame, R = h.getStackAddendum();
        R !== "" && (o += "%s", s = s.concat([R]));
        var j = s.map(function(C) {
          return String(C);
        });
        j.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var M = !1, F = !1, t = !1, i = !1, a = !1, l;
    l = Symbol.for("react.module.reference");
    function r(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === Y || a || e === A || e === S || e === O || i || e === _ || M || F || t || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === D || e.$$typeof === $ || e.$$typeof === T || e.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === l || e.getModuleId !== void 0));
    }
    function u(e, o, s) {
      var h = e.displayName;
      if (h)
        return h;
      var R = o.displayName || o.name || "";
      return R !== "" ? s + "(" + R + ")" : s;
    }
    function w(e) {
      return e.displayName || "Context";
    }
    function p(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case v:
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
          case T:
            var o = e;
            return w(o) + ".Consumer";
          case $:
            var s = e;
            return w(s._context) + ".Provider";
          case x:
            return u(e, e.render, "ForwardRef");
          case D:
            var h = e.displayName || null;
            return h !== null ? h : p(e.type) || "Memo";
          case B: {
            var R = e, j = R._payload, C = R._init;
            try {
              return p(C(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var c = Object.assign, k = 0, P, K, G, ee, pe, Ce, ke;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ke() {
      {
        if (k === 0) {
          P = console.log, K = console.info, G = console.warn, ee = console.error, pe = console.group, Ce = console.groupCollapsed, ke = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
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
        k++;
      }
    }
    function Ue() {
      {
        if (k--, k === 0) {
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
              value: pe
            }),
            groupCollapsed: c({}, e, {
              value: Ce
            }),
            groupEnd: c({}, e, {
              value: ke
            })
          });
        }
        k < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = f.ReactCurrentDispatcher, de;
    function le(e, o, s) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (R) {
            var h = R.stack.trim().match(/\n( *(at )?)/);
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
    function Te(e, o) {
      if (!e || he)
        return "";
      {
        var s = ae.get(e);
        if (s !== void 0)
          return s;
      }
      var h;
      he = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = fe.current, fe.current = null, Ke();
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
          for (var E = z.stack.split(`
`), U = h.stack.split(`
`), N = E.length - 1, L = U.length - 1; N >= 1 && L >= 0 && E[N] !== U[L]; )
            L--;
          for (; N >= 1 && L >= 0; N--, L--)
            if (E[N] !== U[L]) {
              if (N !== 1 || L !== 1)
                do
                  if (N--, L--, L < 0 || E[N] !== U[L]) {
                    var V = `
` + E[N].replace(" at new ", " at ");
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, V), V;
                  }
                while (N >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        he = !1, fe.current = j, Ue(), Error.prepareStackTrace = R;
      }
      var Q = e ? e.displayName || e.name : "", Me = Q ? le(Q) : "";
      return typeof e == "function" && ae.set(e, Me), Me;
    }
    function qe(e, o, s) {
      return Te(e, !1);
    }
    function Je(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ce(e, o, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, Je(e));
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
            var h = e, R = h._payload, j = h._init;
            try {
              return ce(j(R), o, s);
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
    function Ge(e, o, s, h, R) {
      {
        var j = Function.call.bind(se);
        for (var C in e)
          if (j(e, C)) {
            var E = void 0;
            try {
              if (typeof e[C] != "function") {
                var U = Error((h || "React class") + ": " + s + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              E = e[C](o, C, h, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              E = N;
            }
            E && !(E instanceof Error) && (ue(R), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", s, C, typeof E), ue(null)), E instanceof Error && !(E.message in xe) && (xe[E.message] = !0, ue(R), m("Failed %s type: %s", s, E.message), ue(null));
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
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), _e(e);
    }
    var te = f.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, me;
    me = {};
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
        var s = p(te.current.type);
        me[s] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(te.current.type), e.ref), me[s] = !0);
      }
    }
    function rt(e, o) {
      {
        var s = function() {
          Pe || (Pe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
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
          Oe || (Oe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var it = function(e, o, s, h, R, j, C) {
      var E = {
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
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function lt(e, o, s, h, R) {
      {
        var j, C = {}, E = null, U = null;
        s !== void 0 && (je(s), E = "" + s), tt(o) && (je(o.key), E = "" + o.key), et(o) && (U = o.ref, nt(o, R));
        for (j in o)
          se.call(o, j) && !Qe.hasOwnProperty(j) && (C[j] = o[j]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (j in N)
            C[j] === void 0 && (C[j] = N[j]);
        }
        if (E || U) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          E && rt(C, L), U && ot(C, L);
        }
        return it(e, E, U, R, h, te.current, C);
      }
    }
    var ye = f.ReactCurrentOwner, De = f.ReactDebugCurrentFrame;
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
        if (ye.current) {
          var e = p(ye.current.type);
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
        e && e._owner && e._owner !== ye.current && (h = " It was passed a child from " + p(e._owner.type) + "."), Z(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, h), Z(null);
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
          var R = W(e);
          if (typeof R == "function" && R !== e.entries)
            for (var j = R.call(e), C; !(C = j.next()).done; )
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
          var h = p(o);
          Ge(s, e.props, "prop", h, e);
        } else if (o.PropTypes !== void 0 && !ve) {
          ve = !0;
          var R = p(o);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(e) {
      {
        for (var o = Object.keys(e.props), s = 0; s < o.length; s++) {
          var h = o[s];
          if (h !== "children" && h !== "key") {
            Z(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Ie(e, o, s, h, R, j) {
      {
        var C = r(e);
        if (!C) {
          var E = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = at(R);
          U ? E += U : E += Fe();
          var N;
          e === null ? N = "null" : ge(e) ? N = "array" : e !== void 0 && e.$$typeof === n ? (N = "<" + (p(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, E);
        }
        var L = lt(e, o, s, R, j);
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
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
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
var b = Ee.exports;
function q(d, n) {
  const v = d.match(/^(\s*)(```|> )/);
  return n === !0 ? v : v != null;
}
const Et = (d) => d.match(/^(\s*)> /) != null, bt = (d) => d.split(/[\r\n]/), pt = (d) => d.split(/[\r\n]/).length, Ye = (d, n) => {
  const v = n.split(/[\r\n]/);
  let g = 0;
  for (let A = 0; A < v.length; A++)
    if (g += v[A].length + 1, g > d)
      return [d - (g - v[A].length - 1), A];
  throw new Error("error getPos");
}, Ct = (d, n) => {
  const v = Ye(d, n), g = pt(n);
  return v[1] === g - 1;
}, kt = (d, n) => Ye(d, n)[1] === 0, Rt = (d) => {
  const n = d.match(/^\s*`{3}(.*)/), v = bt(d).slice(1).join(`
`);
  return [n == null ? void 0 : n[1], v];
}, He = (d) => {
  const n = d.match(/^(\s*-)( .*)$/);
  let v = "";
  if (n)
    d = n[2], v = n[1];
  else {
    const g = d.match(/^(\s*)(```.*|> )/);
    g && (v = g[1], d = d.slice(g[1].length));
  }
  return [v, d];
}, Be = be.forwardRef(
  function(n, v) {
    const [g, A] = ie({
      prefix: "",
      selection: "",
      suffix: ""
    }), Y = () => {
      A({ prefix: "", selection: "", suffix: "" });
    }, [$, T] = ie({
      index: 0
    }), x = (f, m) => {
      let y = 0, M = "", F = !1;
      for (let i = 0; i < f.length; i++) {
        const a = f[i];
        a === "[" ? (y++, M = "") : a === "]" ? (y > 0 && (y--, M = "", F = !0), y === 0 && (F = !1)) : y > 0 && !F && (M += a);
      }
      let t = "";
      if (y > 0) {
        let i = 0, a = !1;
        for (let l = 0; l < m.length; l++) {
          const r = m[l];
          r === "[" ? i++ : r === "]" ? (i--, a = !0) : a || (t += r);
        }
        return i === 0 && (t = ""), M + t;
      }
      return "";
    }, S = (f) => {
      let m = f.length - 1;
      for (let y = f.length - 1; y >= 0; y--)
        if (f[y] === "[") {
          m = y;
          break;
        }
      return f.slice(0, -(f.length - 1 - m));
    }, O = (f) => {
      let m = 0;
      for (let y = 0; y < f.length; y++)
        if (f[y] === "]") {
          m = y;
          break;
        }
      return f.slice(m);
    }, D = x(g.prefix, g.suffix);
    J(() => {
      if (!H.current || !W.current)
        return;
      H.current.style.display = "inline", g.selection === "" && D === "" ? W.current.style.display = "none" : W.current.style.display = "inline", W.current.style.left = H.current.getBoundingClientRect().width + "px", W.current.style.top = -W.current.getBoundingClientRect().height + "px";
      const f = W.current.getBoundingClientRect().top + window.scrollY;
      f < 0 && (W.current.style.top = -W.current.getBoundingClientRect().height - f + "px"), H.current.style.display = "none";
    }, [g, D]), J(() => {
      T({ index: 0 });
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
    g.selection === "" && D !== "" && (_ = n.keywords.filter((f) => f.indexOf(D) != -1).map((f, m) => ({
      name: f,
      handler: () => {
        const y = S(g.prefix), M = _[m].name;
        let F = O(g.suffix), t = (y + M).length;
        return (F.length == 0 || F[0] != "]") && (F = "]" + F, t += 1), {
          value: y + M + F,
          column: t
        };
      }
    })), _.length > 0 && (I = !0));
    const H = X(null), W = X(null);
    return /* @__PURE__ */ b.jsxs(
      "div",
      {
        className: n.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ b.jsx(
            "textarea",
            {
              ref: v,
              value: n.value,
              onPaste: n.onPaste,
              onCompositionStart: n.onCompositionStart,
              onCompositionEnd: (f) => {
                n.onCompositionEnd(f), B(f);
              },
              onChange: n.onChange,
              onKeyDown: (f) => {
                if (f.key === "Enter" && f.keyCode === 13 && I) {
                  const m = _[$.index].handler(null);
                  n.setLine(m.value), n.setCursor(m.column), f.preventDefault();
                } else
                  f.key == "Tab" && I ? (T((m) => {
                    let y = m.index + 1;
                    return y >= _.length && (y = 0), { index: y };
                  }), f.preventDefault()) : f.key == "Enter" && f.shiftKey ? (n.onMagicFunc(), f.preventDefault()) : n.onKeyDown(g)(f);
              },
              onSelect: B
            }
          ),
          /* @__PURE__ */ b.jsx("div", { className: "popup", ref: W, children: _.map((f, m) => /* @__PURE__ */ b.jsx(
            "div",
            {
              className: $.index == m ? "selected" : "",
              onClick: () => {
                const y = f.handler(g);
                n.setLine(y.value), n.setCursor(y.column), Y();
              },
              children: f.name
            },
            m
          )) }),
          /* @__PURE__ */ b.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: H, children: g.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), Tt = (d, n = null) => {
  const v = X(n);
  return J(() => {
    d && (typeof d == "function" ? d(v.current) : d.current = v.current);
  }, [d]), v;
}, xt = mt(
  function(n, v) {
    const g = Tt(v), [A, Y] = ie();
    J(() => {
      if (!g.current)
        return;
      const t = g.current.style.display;
      g.current.style.display = "block", g.current.style.height = "0px", g.current.style.height = g.current.scrollHeight + "px", g.current.style.display = t;
    }, [n.value, g, n.isFocus]);
    const $ = (t, i, a) => {
      var u;
      const l = ["line"], r = t.match(/^(\s*)- /);
      if (t.indexOf("# ") === 0)
        l.push("h1-style");
      else if (t.indexOf("## ") === 0)
        l.push("h2-style");
      else if (t.indexOf("### ") === 0)
        l.push("h3-style");
      else if (r)
        l.push("list-style"), l.push("list-indent-" + r[1].length / 2);
      else if (q(t)) {
        const w = q(t, !0);
        l.push("list-indent-" + (((u = w == null ? void 0 : w[1]) == null ? void 0 : u.length) ?? 0) / 2);
      }
      return i && l.push("focus"), a && l.push("select"), l.join(" ");
    }, T = (t) => t ? [] : ["hide"], x = (t) => t ? "hide" : "", S = (t, i, a) => {
      let l = -1, r = "";
      return i.forEach(function(u) {
        const w = t.indexOf(u, a);
        w !== -1 && (l === -1 || l > w) && (l = w, r = u);
      }), { pos: l, target: r };
    }, O = n.onLinkClick, D = n.onSubLinkClick, B = ne((t) => {
      let i = 0;
      const a = [];
      for (; ; ) {
        const l = S(t, ["http://", "https://", " ", "["], i);
        if (l.target === "https://" || l.target === "http://") {
          i !== l.pos && a.push(t.slice(i, l.pos));
          const r = S(
            t,
            [" ", "\r", `
`],
            l.pos + l.target.length
          );
          if (r.pos !== -1) {
            const u = t.slice(l.pos, r.pos);
            a.push(/* @__PURE__ */ b.jsx("a", { href: u, children: u })), i = r.pos;
          } else {
            const u = t.slice(l.pos, t.length);
            a.push(/* @__PURE__ */ b.jsx("a", { href: u, children: u })), i = t.length;
            break;
          }
        } else if (l.target == " ")
          a.push(t.slice(i, l.pos)), a.push(" "), i = l.pos + l.target.length;
        else if (l.target == "[") {
          i !== l.pos && a.push(t.slice(i, l.pos));
          const r = S(t, ["]"], l.pos + l.target.length);
          if (r.pos !== -1) {
            const u = t.slice(l.pos, r.pos + 1);
            a.push([/* @__PURE__ */ b.jsxs(b.Fragment, { children: [
              /* @__PURE__ */ b.jsx("span", { className: "braket", onClick: (w) => {
                O(u.slice(1, u.length - 1)), w.stopPropagation();
              }, children: u.slice(1, u.length - 1) }, i),
              /* @__PURE__ */ b.jsx("span", { className: "bracket-icon", onClick: (w) => {
                D(u.slice(1, u.length - 1)), w.stopPropagation();
              }, children: "[]" }, "icon-" + i)
            ] })]), i = r.pos + 1;
          } else
            a.push(t.slice(i, t.length)), i = t.length;
        } else {
          a.push(t.slice(i, t.length)), i = t.length;
          break;
        }
      }
      return a;
    }, [O, D]), _ = ne((t, i) => {
      const a = t ? n.blockStyles[t] : void 0;
      return a ? a(i) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
        /* @__PURE__ */ b.jsx("span", { className: "block-type", children: t }),
        /* @__PURE__ */ b.jsx("pre", { children: i })
      ] });
    }, [n.blockStyles]), I = ne((t) => {
      const i = t.match(/^(\s*)```.*/), a = (i == null ? void 0 : i[1]) ?? "";
      return t = t.slice(a.length).split(`
`).map((l) => a + l).join(`
`), t;
    }, []), H = ne((t) => {
      const i = t.match(/^(\s*)> /), a = (i == null ? void 0 : i[1]) ?? "";
      return t = t.slice(a.length).split(`
`).map(
        (l, r) => a + (r === 0 ? "" : "> ") + l
      ).join(`
`), t;
    }, []), W = ne((t) => {
      var i;
      if (console.log(t), q(t))
        if (Et(t)) {
          const a = t.match(/\s*> /), l = t.slice((i = a == null ? void 0 : a[0]) == null ? void 0 : i.length);
          Y(
            /* @__PURE__ */ b.jsxs("div", { children: [
              /* @__PURE__ */ b.jsx("pre", { className: "for-copy", children: H(t) }),
              /* @__PURE__ */ b.jsx("div", { className: "no-select", children: _("pre", l) })
            ] })
          );
          return;
        } else {
          const a = Rt(t);
          try {
            const l = _(a[0], a[1]);
            Y(
              /* @__PURE__ */ b.jsxs("div", { children: [
                /* @__PURE__ */ b.jsx("pre", { className: "for-copy", children: I(t + "\n```") }),
                /* @__PURE__ */ b.jsx("div", { className: "no-select", children: l })
              ] })
            );
          } catch (l) {
            l instanceof Promise && l.then((r) => {
              console.log(r), Y(r);
            }), Y(/* @__PURE__ */ b.jsx("div", { children: "loading..." }));
          }
          return;
        }
      else {
        const a = ["elm"], l = t.match(/^(\s*)-( .*)$/);
        let r = null;
        t.indexOf("# ") === 0 || t.indexOf("## ") === 0 || t.indexOf("### ") === 0 || l && (t = l[2], r = /* @__PURE__ */ b.jsx("pre", { className: "for-copy-inline", children: l[1] + "-" })), Y(
          /* @__PURE__ */ b.jsxs("div", { className: a.join(" "), children: [
            r,
            B(t)
          ] })
        );
        return;
      }
    }, [I, H, _, B]), f = X(null), m = (t) => (i) => {
      if (i.buttons !== 0 && f.current) {
        t();
        const a = new Range();
        a.selectNodeContents(f.current);
        const l = document.getSelection();
        if (!l)
          throw new Error("selection is null");
        l.empty(), l.addRange(a);
      }
    }, y = He(n.value), M = y[0], F = y[1];
    return J(() => {
      W(n.value);
    }, [W, n.value]), q(F) ? /* @__PURE__ */ b.jsxs(
      "div",
      {
        className: $(n.value, n.isFocus, n.isSelect),
        ref: f,
        "data-lineno": n.row,
        onClick: n.onClick,
        children: [
          /* @__PURE__ */ b.jsx(
            "div",
            {
              className: ["line-item"].concat(T(n.isFocus)).join(" "),
              onMouseLeave: m(n.selectThisLine),
              children: /* @__PURE__ */ b.jsx(
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
          /* @__PURE__ */ b.jsx("div", { className: "line-item", children: A })
        ]
      }
    ) : /* @__PURE__ */ b.jsxs(
      "div",
      {
        className: $(n.value, n.isFocus, n.isSelect),
        ref: f,
        "data-lineno": n.row,
        onClick: n.onClick,
        children: [
          /* @__PURE__ */ b.jsx(
            "div",
            {
              className: T(n.isFocus) + " container",
              onMouseLeave: m(n.selectThisLine),
              children: /* @__PURE__ */ b.jsx(
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
          /* @__PURE__ */ b.jsx("div", { className: x(n.isFocus), children: A })
        ]
      }
    );
  }
), _t = (d) => {
  const n = d.lines, v = d.setLines, g = X(n.length);
  J(() => {
    g.current = n.length;
  }, [n]);
  const A = () => (g.current = g.current + 1, g.current), Y = d.onChange;
  J(() => {
    Y(n.map((t) => t.body));
  }, [n, Y]);
  const $ = X(!1), [T, x] = ie({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, O] = ie([0, 0]), D = (t) => t == null ? null : t instanceof HTMLElement && t.classList.contains("line") ? t : D(t.parentElement), B = X(null);
  let _, I, H = !1;
  const W = () => {
    H = !0;
    const t = document.getSelection();
    t && (_ = D(t.anchorNode), I = D(t.focusNode), (_ == null ? void 0 : _.parentNode) != B.current && (_ = null, I = null), _ !== I && x({ row: -1, col: 0 }));
  }, f = () => {
    var t, i, a, l;
    if (H && (H = !1, _ && I && _ !== I)) {
      const r = new Range();
      if (r.setStart(_, 0), r.setEnd(I, I.children.length), document.getSelection().empty(), document.getSelection().addRange(r), !((t = _.dataset) != null && t.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const u = parseInt((i = _.dataset) == null ? void 0 : i.lineno);
      if (!((a = I.dataset) != null && a.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const w = parseInt((l = I.dataset) == null ? void 0 : l.lineno);
      O([u, w]);
    }
  }, m = () => () => {
    x(() => ({ row: -1, col: 0 })), H = !0;
  }, y = X(null);
  J(() => {
    var t;
    if (y.current)
      if (S[1] - S[0] >= 1) {
        y.current.style.display = "block";
        const i = (t = document.getSelection()) == null ? void 0 : t.focusNode;
        if (!i)
          throw new Error("focusNode is null");
        if (!(i instanceof Element))
          throw new Error("focusNode is not Element");
        const a = i.getBoundingClientRect(), l = a.bottom, r = a.x + a.width / 2;
        y.current.style.left = r + "px", y.current.style.top = l + "px";
      } else
        y.current.style.display = "none";
  }, [S]);
  const M = (t) => (i) => {
    const l = i.clipboardData.getData("text").split(/\r\n|\n/);
    if (l.length === 1)
      return !0;
    const r = [];
    let u = [], w = !1, p = "";
    return l.forEach((c) => {
      const k = c.match(/^(\s*)(```.*)/);
      w ? c.indexOf(p + "```") === 0 ? (r.push(u.join(`
`)), w = !1, u = []) : (p !== "" && c.indexOf(p) !== 0 && (r.push(u.join(`
`)), w = !1, u = [], r.push(c)), u.push(c.slice(p.length))) : k ? (w = !0, p = k[1], u.push(c)) : r.push(c);
    }), u.length !== 0 && r.push(u.join(`
`)), v((c) => (c[t] = { body: c[t] + r[0], key: c[t].key }, c.splice(t + 1, 0, ...r.slice(1).map((k) => ({ body: k, key: A() }))), [...c])), i.preventDefault(), !1;
  };
  J(() => {
    document.addEventListener("selectionchange", W), document.addEventListener("pointerup", f);
  }, []);
  const F = X([]);
  return J(() => {
    if (T.row !== -1 && $.current === !1) {
      const t = F.current[T.row];
      if (!t || !t.current)
        return;
      t.current.focus();
      let i = T.colEnd;
      (i === void 0 || i === -1) && (i = T.col), console.log("EFFECT", "col:", T.col, "end:", i), t.current.setSelectionRange(T.col, i, T.direction);
    }
  }, [T, n]), n.forEach((t, i) => {
    F.current[i] = yt();
  }), /* @__PURE__ */ b.jsxs("div", { className: "editor", ref: B, children: [
    n.map((t, i) => /* @__PURE__ */ b.jsx(
      xt,
      {
        key_debug: t.key,
        ref: F.current[i],
        isFocus: i === T.row,
        isSelect: S[0] <= i && i <= S[1],
        row: i,
        value: t.body,
        textPopupHandlers: d.textPopupHandlers,
        onMagicFunc: d.onMagicFunc(i),
        keywords: d.keywords,
        blockStyles: d.blockStyles,
        selectThisLine: m(),
        setLine: (a) => (l) => ((r) => {
          v((u) => (u[r].body = a + l, [...u]));
        })(i),
        setCursor: (a) => ((l) => {
          x((r) => ({
            row: l,
            col: a,
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
        onChange: (a) => (l) => ((r) => {
          if (console.log("onChange", $.current), $.current === !1) {
            const u = l.target.selectionStart, w = l.target.selectionEnd, p = l.target.selectionDirection;
            x((c) => ({
              row: c.row,
              col: u,
              colEnd: w,
              direction: p
            }));
          }
          v((u) => (u[r].body = a + l.target.value, [...u]));
        })(i),
        onKeyDown: (a, l) => (r) => {
          let u = r.currentTarget.selectionStart, w = r.currentTarget.selectionEnd, p = r.currentTarget.selectionDirection;
          x((c) => {
            switch (r.key) {
              case "ArrowLeft": {
                if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                  if (c.row === 0)
                    return c;
                  const k = n[T.row - 1].body.length;
                  return r.preventDefault(), {
                    row: c.row - 1,
                    col: k,
                    colEnd: -1,
                    direction: p
                  };
                }
                return r.shiftKey ? u == w ? (u--, p = "backward") : p === "forward" ? w-- : p === "backward" && u-- : (u--, w = -1), r.preventDefault(), {
                  row: c.row,
                  col: u,
                  colEnd: w,
                  direction: p
                };
              }
              case "ArrowRight": {
                const k = -a.length + n[T.row].body.length;
                return r.currentTarget != null && r.currentTarget.selectionStart === k && r.currentTarget.selectionEnd === k ? c.row === n.length - 1 ? c : (r.preventDefault(), {
                  row: c.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: p
                }) : (r.shiftKey ? p === "forward" ? w++ : p === "backward" && u++ : (u < w && (u = w), u++, w = -1), r.preventDefault(), {
                  row: c.row,
                  col: u,
                  colEnd: w,
                  direction: p
                });
              }
              case "ArrowUp":
                return q(l) && !kt(r.currentTarget.selectionStart, l) || c.row === 0 ? c : (r.preventDefault(), {
                  row: c.row - 1,
                  col: r.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: p
                });
              case "ArrowDown":
                return q(l) && !Ct(r.currentTarget.selectionStart, l) || c.row === n.length - 1 ? c : (r.preventDefault(), {
                  row: c.row + 1,
                  col: r.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: p
                });
              case "Backspace":
                if (a.length !== 0 && (r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0 || r.currentTarget.selectionStart === 1 && r.currentTarget.selectionEnd === 1))
                  a.length !== 0 && (v((k) => (a.length === 1 ? (k[c.row].body = r.currentTarget.value.slice(1), u--, u === -1 ? u++ : u === 0 && w !== 0 && (w = 0)) : a.length > 0 && (k[c.row].body = a.slice(2) + r.currentTarget.value), [...k])), r.preventDefault());
                else if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                  if (c.row === 0)
                    return c;
                  const P = He(n[T.row - 1].body)[1].length;
                  return v((K) => (q(K[c.row - 1].body) ? K[c.row - 1].body += `
` + K[c.row].body : K[c.row - 1].body += K[c.row].body, K.splice(c.row, 1), [...K])), r.preventDefault(), {
                    row: c.row - 1,
                    col: P,
                    colEnd: -1,
                    direction: p
                  };
                }
                return console.log("normal Backspace", u), {
                  row: c.row,
                  col: u,
                  colEnd: w,
                  direction: p
                };
              case "Tab":
                return v((k) => {
                  if (r.shiftKey)
                    a.length === 1 ? (k[c.row].body = r.currentTarget.value.slice(1), u--) : a.length > 0 && (k[c.row].body = a.slice(2) + r.currentTarget.value);
                  else {
                    let P = "-";
                    q(r.currentTarget.value) && (P = " "), a.length === 0 ? (k[c.row].body = P + " " + r.currentTarget.value, u++) : k[c.row].body = "  " + a + r.currentTarget.value;
                  }
                  return x((P) => ({
                    row: P.row,
                    col: u,
                    colEnd: -1,
                    direction: p
                  })), [...k];
                }), r.preventDefault(), {
                  row: c.row,
                  col: u,
                  colEnd: -1,
                  direction: p
                };
              case "Enter":
                if (r.keyCode === 13) {
                  if (q(l) && !r.shiftKey)
                    return c;
                  {
                    let k = 0;
                    return v((P) => {
                      const K = a.length + r.currentTarget.selectionStart;
                      let G = P[c.row].body.slice(K);
                      if (q(l)) {
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
                      return a.length !== 0 ? (P.splice(
                        c.row + 1,
                        0,
                        { body: a + " " + G, key: A() }
                      ), k = 1) : P.splice(c.row + 1, 0, { body: G, key: A() }), [...P];
                    }), r.preventDefault(), {
                      row: c.row + 1,
                      col: k,
                      colEnd: -1,
                      direction: p
                    };
                  }
                } else
                  return c;
              case " ":
                return console.log("space", u), (u === 0 || u === 1 && a.length >= 1) && (v((k) => {
                  let P = "-";
                  return q(r.currentTarget.value) && (P = " "), a.length === 0 ? (k[c.row].body = P + " " + r.currentTarget.value, u++) : k[c.row].body = "  " + a + r.currentTarget.value, [...k];
                }), r.preventDefault()), {
                  row: c.row,
                  col: u,
                  colEnd: -1,
                  direction: p
                };
              default:
                return c;
            }
          });
        },
        onLinkClick: d.onLinkClick,
        onSubLinkClick: d.onSubLinkClick,
        onClick: (a) => {
          if (T.row !== i) {
            const l = a.target.selectionStart;
            O([i, i]), x(() => ({ row: i, col: l }));
          }
        }
      },
      t.key
    )),
    /* @__PURE__ */ b.jsx("div", { className: "popup", ref: y, children: d.linePopupHandlers.map((t, i) => /* @__PURE__ */ b.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (t.handler(
            n.slice(S[0], S[1] + 1).map((a) => a.body),
            S
          ), O([S[1], S[1]]));
        },
        onTouchStart: () => {
          t.handler(n.slice(S[0], S[1] + 1).map((a) => a.body)), O([S[1], S[1]]);
        },
        children: t.name
      },
      i
    )) })
  ] });
};
export {
  _t as Editor
};
