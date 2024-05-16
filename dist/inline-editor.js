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
var We;
function vt() {
  if (We)
    return re;
  We = 1;
  var d = be, n = Symbol.for("react.element"), v = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, A = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(T, x, S) {
    var O, D = {}, Y = null, _ = null;
    S !== void 0 && (Y = "" + S), x.key !== void 0 && (Y = "" + x.key), x.ref !== void 0 && (_ = x.ref);
    for (O in x)
      g.call(x, O) && !M.hasOwnProperty(O) && (D[O] = x[O]);
    if (T && T.defaultProps)
      for (O in x = T.defaultProps, x)
        D[O] === void 0 && (D[O] = x[O]);
    return { $$typeof: n, type: T, key: Y, ref: _, props: D, _owner: A.current };
  }
  return re.Fragment = v, re.jsx = W, re.jsxs = W, re;
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
var Be;
function wt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var d = be, n = Symbol.for("react.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), T = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), I = Symbol.iterator, H = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = I && e[I] || e[H];
      return typeof o == "function" ? o : null;
    }
    var f = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          c[h - 1] = arguments[h];
        y("error", e, c);
      }
    }
    function y(e, o, c) {
      {
        var h = f.ReactDebugCurrentFrame, R = h.getStackAddendum();
        R !== "" && (o += "%s", c = c.concat([R]));
        var j = c.map(function(C) {
          return String(C);
        });
        j.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, j);
      }
    }
    var $ = !1, N = !1, t = !1, l = !1, a = !1, i;
    i = Symbol.for("react.module.reference");
    function r(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === M || a || e === A || e === S || e === O || l || e === _ || $ || N || t || typeof e == "object" && e !== null && (e.$$typeof === Y || e.$$typeof === D || e.$$typeof === W || e.$$typeof === T || e.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === i || e.getModuleId !== void 0));
    }
    function u(e, o, c) {
      var h = e.displayName;
      if (h)
        return h;
      var R = o.displayName || o.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
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
        case M:
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
          case W:
            var c = e;
            return w(c._context) + ".Provider";
          case x:
            return u(e, e.render, "ForwardRef");
          case D:
            var h = e.displayName || null;
            return h !== null ? h : p(e.type) || "Memo";
          case Y: {
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
    var s = Object.assign, k = 0, P, U, G, ee, pe, Ce, ke;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ue() {
      {
        if (k === 0) {
          P = console.log, U = console.info, G = console.warn, ee = console.error, pe = console.group, Ce = console.groupCollapsed, ke = console.groupEnd;
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
    function Ve() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: s({}, e, {
              value: P
            }),
            info: s({}, e, {
              value: U
            }),
            warn: s({}, e, {
              value: G
            }),
            error: s({}, e, {
              value: ee
            }),
            group: s({}, e, {
              value: pe
            }),
            groupCollapsed: s({}, e, {
              value: Ce
            }),
            groupEnd: s({}, e, {
              value: ke
            })
          });
        }
        k < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = f.ReactCurrentDispatcher, de;
    function le(e, o, c) {
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
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new Ke();
    }
    function Te(e, o) {
      if (!e || he)
        return "";
      {
        var c = ae.get(e);
        if (c !== void 0)
          return c;
      }
      var h;
      he = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = fe.current, fe.current = null, Ue();
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
`), V = h.stack.split(`
`), F = E.length - 1, L = V.length - 1; F >= 1 && L >= 0 && E[F] !== V[L]; )
            L--;
          for (; F >= 1 && L >= 0; F--, L--)
            if (E[F] !== V[L]) {
              if (F !== 1 || L !== 1)
                do
                  if (F--, L--, L < 0 || E[F] !== V[L]) {
                    var K = `
` + E[F].replace(" at new ", " at ");
                    return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, K), K;
                  }
                while (F >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        he = !1, fe.current = j, Ve(), Error.prepareStackTrace = R;
      }
      var Q = e ? e.displayName || e.name : "", $e = Q ? le(Q) : "";
      return typeof e == "function" && ae.set(e, $e), $e;
    }
    function qe(e, o, c) {
      return Te(e, !1);
    }
    function Je(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function se(e, o, c) {
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
            return se(e.type, o, c);
          case Y: {
            var h = e, R = h._payload, j = h._init;
            try {
              return se(j(R), o, c);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, xe = {}, Se = f.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var o = e._owner, c = se(e.type, e._source, o ? o.type : null);
        Se.setExtraStackFrame(c);
      } else
        Se.setExtraStackFrame(null);
    }
    function Ge(e, o, c, h, R) {
      {
        var j = Function.call.bind(ce);
        for (var C in e)
          if (j(e, C)) {
            var E = void 0;
            try {
              if (typeof e[C] != "function") {
                var V = Error((h || "React class") + ": " + c + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              E = e[C](o, C, h, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              E = F;
            }
            E && !(E instanceof Error) && (ue(R), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", c, C, typeof E), ue(null)), E instanceof Error && !(E.message in xe) && (xe[E.message] = !0, ue(R), m("Failed %s type: %s", c, E.message), ue(null));
          }
      }
    }
    var ze = Array.isArray;
    function ge(e) {
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
    function nt(e, o) {
      if (typeof e.ref == "string" && te.current && o && te.current.stateNode !== o) {
        var c = p(te.current.type);
        me[c] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(te.current.type), e.ref), me[c] = !0);
      }
    }
    function rt(e, o) {
      {
        var c = function() {
          Pe || (Pe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
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
          Oe || (Oe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var it = function(e, o, c, h, R, j, C) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: c,
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
    function lt(e, o, c, h, R) {
      {
        var j, C = {}, E = null, V = null;
        c !== void 0 && (je(c), E = "" + c), tt(o) && (je(o.key), E = "" + o.key), et(o) && (V = o.ref, nt(o, R));
        for (j in o)
          ce.call(o, j) && !Qe.hasOwnProperty(j) && (C[j] = o[j]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (j in F)
            C[j] === void 0 && (C[j] = F[j]);
        }
        if (E || V) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          E && rt(C, L), V && ot(C, L);
        }
        return it(e, E, V, R, h, te.current, C);
      }
    }
    var ye = f.ReactCurrentOwner, De = f.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var o = e._owner, c = se(e.type, e._source, o ? o.type : null);
        De.setExtraStackFrame(c);
      } else
        De.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ne() {
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
          var o = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + o + ":" + c + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function st(e) {
      {
        var o = Ne();
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
        var c = st(o);
        if (Fe[c])
          return;
        Fe[c] = !0;
        var h = "";
        e && e._owner && e._owner !== ye.current && (h = " It was passed a child from " + p(e._owner.type) + "."), Z(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, h), Z(null);
      }
    }
    function Le(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var c = 0; c < e.length; c++) {
            var h = e[c];
            we(h) && Ae(h, o);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var R = B(e);
          if (typeof R == "function" && R !== e.entries)
            for (var j = R.call(e), C; !(C = j.next()).done; )
              we(C.value) && Ae(C.value, o);
        }
      }
    }
    function ct(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var c;
        if (typeof o == "function")
          c = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === D))
          c = o.propTypes;
        else
          return;
        if (c) {
          var h = p(o);
          Ge(c, e.props, "prop", h, e);
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
        for (var o = Object.keys(e.props), c = 0; c < o.length; c++) {
          var h = o[c];
          if (h !== "children" && h !== "key") {
            Z(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Ie(e, o, c, h, R, j) {
      {
        var C = r(e);
        if (!C) {
          var E = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = at(R);
          V ? E += V : E += Ne();
          var F;
          e === null ? F = "null" : ge(e) ? F = "array" : e !== void 0 && e.$$typeof === n ? (F = "<" + (p(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, E);
        }
        var L = lt(e, o, c, R, j);
        if (L == null)
          return L;
        if (C) {
          var K = o.children;
          if (K !== void 0)
            if (h)
              if (ge(K)) {
                for (var Q = 0; Q < K.length; Q++)
                  Le(K[Q], e);
                Object.freeze && Object.freeze(K);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(K, e);
        }
        return e === g ? ut(L) : ct(L), L;
      }
    }
    function ft(e, o, c) {
      return Ie(e, o, c, !0);
    }
    function dt(e, o, c) {
      return Ie(e, o, c, !1);
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
const Et = (d) => d.match(/^(\s*)> /) != null, bt = (d) => d.split(/[\r\n]/), pt = (d) => d.split(/[\r\n]/).length, Me = (d, n) => {
  const v = n.split(/[\r\n]/);
  let g = 0;
  for (let A = 0; A < v.length; A++)
    if (g += v[A].length + 1, g > d)
      return [d - (g - v[A].length - 1), A];
  throw new Error("error getPos");
}, Ct = (d, n) => {
  const v = Me(d, n), g = pt(n);
  return v[1] === g - 1;
}, kt = (d, n) => Me(d, n)[1] === 0, Rt = (d) => {
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
}, Ye = be.forwardRef(
  function(n, v) {
    const [g, A] = ie({
      prefix: "",
      selection: "",
      suffix: ""
    }), M = () => {
      A({ prefix: "", selection: "", suffix: "" });
    }, [W, T] = ie({
      index: 0
    }), x = (f, m) => {
      let y = 0, $ = "", N = !1;
      for (let l = 0; l < f.length; l++) {
        const a = f[l];
        a === "[" ? (y++, $ = "") : a === "]" ? (y > 0 && (y--, $ = "", N = !0), y === 0 && (N = !1)) : y > 0 && !N && ($ += a);
      }
      let t = "";
      if (y > 0) {
        let l = 0, a = !1;
        for (let i = 0; i < m.length; i++) {
          const r = m[i];
          r === "[" ? l++ : r === "]" ? (l--, a = !0) : a || (t += r);
        }
        return l === 0 && (t = ""), $ + t;
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
      if (!H.current || !B.current)
        return;
      H.current.style.display = "inline", g.selection === "" && D === "" ? B.current.style.display = "none" : B.current.style.display = "inline", B.current.style.left = H.current.getBoundingClientRect().width + "px", B.current.style.top = -B.current.getBoundingClientRect().height + "px";
      const f = B.current.getBoundingClientRect().top + window.scrollY;
      f < 0 && (B.current.style.top = -B.current.getBoundingClientRect().height - f + "px"), H.current.style.display = "none";
    }, [g, D]), J(() => {
      T({ index: 0 });
    }, [n.value]);
    const Y = function(f) {
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
        const y = S(g.prefix), $ = _[m].name;
        let N = O(g.suffix), t = (y + $).length;
        return (N.length == 0 || N[0] != "]") && (N = "]" + N, t += 1), {
          value: y + $ + N,
          column: t
        };
      }
    })), _.length > 0 && (I = !0));
    const H = X(null), B = X(null);
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
                n.onCompositionEnd(f), Y(f);
              },
              onChange: n.onChange,
              onKeyDown: (f) => {
                if (f.key === "Enter" && f.keyCode === 13 && I) {
                  const m = _[W.index].handler(null);
                  n.setLine(m.value), n.setCursor(m.column), f.preventDefault();
                } else
                  f.key == "Tab" && I ? (T((m) => {
                    let y = m.index + 1;
                    return y >= _.length && (y = 0), { index: y };
                  }), f.preventDefault()) : n.onKeyDown(g)(f);
              },
              onSelect: Y
            }
          ),
          /* @__PURE__ */ b.jsx("div", { className: "popup", ref: B, children: _.map((f, m) => /* @__PURE__ */ b.jsx(
            "div",
            {
              className: W.index == m ? "selected" : "",
              onClick: () => {
                const y = f.handler(g);
                n.setLine(y.value), n.setCursor(y.column), M();
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
    const g = Tt(v), [A, M] = ie();
    J(() => {
      if (!g.current)
        return;
      const t = g.current.style.display;
      g.current.style.display = "block", g.current.style.height = "0px", g.current.style.height = g.current.scrollHeight + "px", g.current.style.display = t;
    }, [n.value, g, n.isFocus]);
    const W = (t, l, a) => {
      var u;
      const i = ["line"], r = t.match(/^(\s*)- /);
      if (t.indexOf("# ") === 0)
        i.push("h1-style");
      else if (t.indexOf("## ") === 0)
        i.push("h2-style");
      else if (t.indexOf("### ") === 0)
        i.push("h3-style");
      else if (r)
        i.push("list-style"), i.push("list-indent-" + r[1].length / 2);
      else if (q(t)) {
        const w = q(t, !0);
        i.push("list-indent-" + (((u = w == null ? void 0 : w[1]) == null ? void 0 : u.length) ?? 0) / 2);
      }
      return l && i.push("focus"), a && i.push("select"), i.join(" ");
    }, T = (t) => t ? [] : ["hide"], x = (t) => t ? "hide" : "", S = (t, l, a) => {
      let i = -1, r = "";
      return l.forEach(function(u) {
        const w = t.indexOf(u, a);
        w !== -1 && (i === -1 || i > w) && (i = w, r = u);
      }), { pos: i, target: r };
    }, O = n.onLinkClick, D = n.onSubLinkClick, Y = ne((t) => {
      let l = 0;
      const a = [];
      for (; ; ) {
        const i = S(t, ["http://", "https://", " ", "["], l);
        if (i.target === "https://" || i.target === "http://") {
          l !== i.pos && a.push(t.slice(l, i.pos));
          const r = S(
            t,
            [" ", "\r", `
`],
            i.pos + i.target.length
          );
          if (r.pos !== -1) {
            const u = t.slice(i.pos, r.pos);
            a.push(/* @__PURE__ */ b.jsx("a", { href: u, children: u })), l = r.pos;
          } else {
            const u = t.slice(i.pos, t.length);
            a.push(/* @__PURE__ */ b.jsx("a", { href: u, children: u })), l = t.length;
            break;
          }
        } else if (i.target == " ")
          a.push(t.slice(l, i.pos)), a.push(" "), l = i.pos + i.target.length;
        else if (i.target == "[") {
          l !== i.pos && a.push(t.slice(l, i.pos));
          const r = S(t, ["]"], i.pos + i.target.length);
          if (r.pos !== -1) {
            const u = t.slice(i.pos, r.pos + 1);
            a.push([/* @__PURE__ */ b.jsxs(b.Fragment, { children: [
              /* @__PURE__ */ b.jsx("span", { className: "braket", onClick: (w) => {
                O(u.slice(1, u.length - 1)), w.stopPropagation();
              }, children: u.slice(1, u.length - 1) }, l),
              /* @__PURE__ */ b.jsx("span", { className: "bracket-icon", onClick: (w) => {
                D(u.slice(1, u.length - 1)), w.stopPropagation();
              }, children: "[]" }, "icon-" + l)
            ] })]), l = r.pos + 1;
          } else
            a.push(t.slice(l, t.length)), l = t.length;
        } else {
          a.push(t.slice(l, t.length)), l = t.length;
          break;
        }
      }
      return a;
    }, [O, D]), _ = ne((t, l) => {
      const a = t ? n.blockStyles[t] : void 0;
      return a ? a(l) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
        /* @__PURE__ */ b.jsx("span", { className: "block-type", children: t }),
        /* @__PURE__ */ b.jsx("pre", { children: l })
      ] });
    }, [n.blockStyles]), I = ne((t) => {
      const l = t.match(/^(\s*)```.*/), a = (l == null ? void 0 : l[1]) ?? "";
      return t = t.slice(a.length).split(`
`).map((i) => a + i).join(`
`), t;
    }, []), H = ne((t) => {
      const l = t.match(/^(\s*)> /), a = (l == null ? void 0 : l[1]) ?? "";
      return t = t.slice(a.length).split(`
`).map(
        (i, r) => a + (r === 0 ? "" : "> ") + i
      ).join(`
`), t;
    }, []), B = ne((t) => {
      var l;
      if (console.log(t), q(t))
        if (Et(t)) {
          const a = t.match(/\s*> /), i = t.slice((l = a == null ? void 0 : a[0]) == null ? void 0 : l.length);
          M(
            /* @__PURE__ */ b.jsxs("div", { children: [
              /* @__PURE__ */ b.jsx("pre", { className: "for-copy", children: H(t) }),
              /* @__PURE__ */ b.jsx("div", { className: "no-select", children: _("pre", i) })
            ] })
          );
          return;
        } else {
          const a = Rt(t);
          try {
            const i = _(a[0], a[1]);
            M(
              /* @__PURE__ */ b.jsxs("div", { children: [
                /* @__PURE__ */ b.jsx("pre", { className: "for-copy", children: I(t + "\n```") }),
                /* @__PURE__ */ b.jsx("div", { className: "no-select", children: i })
              ] })
            );
          } catch (i) {
            i instanceof Promise && i.then((r) => {
              console.log(r), M(r);
            }), M(/* @__PURE__ */ b.jsx("div", { children: "loading..." }));
          }
          return;
        }
      else {
        const a = ["elm"], i = t.match(/^(\s*)-( .*)$/);
        let r = null;
        t.indexOf("# ") === 0 || t.indexOf("## ") === 0 || t.indexOf("### ") === 0 || i && (t = i[2], r = /* @__PURE__ */ b.jsx("pre", { className: "for-copy-inline", children: i[1] + "-" })), M(
          /* @__PURE__ */ b.jsxs("div", { className: a.join(" "), children: [
            r,
            Y(t)
          ] })
        );
        return;
      }
    }, [I, H, _, Y]), f = X(null), m = (t) => (l) => {
      if (l.buttons !== 0 && f.current) {
        t();
        const a = new Range();
        a.selectNodeContents(f.current);
        const i = document.getSelection();
        if (!i)
          throw new Error("selection is null");
        i.empty(), i.addRange(a);
      }
    }, y = He(n.value), $ = y[0], N = y[1];
    return J(() => {
      B(n.value);
    }, [B, n.value]), q(N) ? /* @__PURE__ */ b.jsxs(
      "div",
      {
        className: W(n.value, n.isFocus, n.isSelect),
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
                Ye,
                {
                  ref: g,
                  value: N,
                  keywords: n.keywords,
                  setLine: n.setLine($),
                  setCursor: n.setCursor,
                  onCompositionStart: n.onCompositionStart,
                  onCompositionEnd: n.onCompositionEnd,
                  onChange: n.onChange($),
                  popupHandlers: [],
                  onKeyDown: () => n.onKeyDown($, N)
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
        className: W(n.value, n.isFocus, n.isSelect),
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
                Ye,
                {
                  ref: g,
                  value: N,
                  keywords: n.keywords,
                  setLine: n.setLine($),
                  setCursor: n.setCursor,
                  onPaste: n.onPaste(n.row),
                  onCompositionStart: n.onCompositionStart,
                  onCompositionEnd: n.onCompositionEnd,
                  onChange: n.onChange($),
                  popupHandlers: n.textPopupHandlers,
                  onKeyDown: (t) => (l) => {
                    l.key === "Enter" && l.keyCode === 13 && t.selection !== "" ? l.preventDefault() : n.onKeyDown($, N)(l);
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
  const A = () => (g.current = g.current + 1, g.current), M = d.onChange;
  J(() => {
    M(n.map((t) => t.body));
  }, [n, M]);
  const W = X(!1), [T, x] = ie({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, O] = ie([0, 0]), D = (t) => t == null ? null : t instanceof HTMLElement && t.classList.contains("line") ? t : D(t.parentElement), Y = X(null);
  let _, I, H = !1;
  const B = () => {
    H = !0;
    const t = document.getSelection();
    t && (_ = D(t.anchorNode), I = D(t.focusNode), (_ == null ? void 0 : _.parentNode) != Y.current && (_ = null, I = null), _ !== I && x({ row: -1, col: 0 }));
  }, f = () => {
    var t, l, a, i;
    if (H && (H = !1, _ && I && _ !== I)) {
      const r = new Range();
      if (r.setStart(_, 0), r.setEnd(I, I.children.length), document.getSelection().empty(), document.getSelection().addRange(r), !((t = _.dataset) != null && t.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const u = parseInt((l = _.dataset) == null ? void 0 : l.lineno);
      if (!((a = I.dataset) != null && a.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const w = parseInt((i = I.dataset) == null ? void 0 : i.lineno);
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
        const l = (t = document.getSelection()) == null ? void 0 : t.focusNode;
        if (!l)
          throw new Error("focusNode is null");
        if (!(l instanceof Element))
          throw new Error("focusNode is not Element");
        const a = l.getBoundingClientRect(), i = a.bottom, r = a.x + a.width / 2;
        y.current.style.left = r + "px", y.current.style.top = i + "px";
      } else
        y.current.style.display = "none";
  }, [S]);
  const $ = (t) => (l) => {
    const i = l.clipboardData.getData("text").split(/\r\n|\n/);
    if (i.length === 1)
      return !0;
    const r = [];
    let u = [], w = !1, p = "";
    return i.forEach((s) => {
      const k = s.match(/^(\s*)(```.*)/);
      w ? s.indexOf(p + "```") === 0 ? (r.push(u.join(`
`)), w = !1, u = []) : (p !== "" && s.indexOf(p) !== 0 && (r.push(u.join(`
`)), w = !1, u = [], r.push(s)), u.push(s.slice(p.length))) : k ? (w = !0, p = k[1], u.push(s)) : r.push(s);
    }), u.length !== 0 && r.push(u.join(`
`)), v((s) => (s[t] = { body: s[t] + r[0], key: s[t].key }, s.splice(t + 1, 0, ...r.slice(1).map((k) => ({ body: k, key: A() }))), [...s])), l.preventDefault(), !1;
  };
  J(() => {
    document.addEventListener("selectionchange", B), document.addEventListener("pointerup", f);
  }, []);
  const N = X([]);
  return J(() => {
    if (T.row !== -1 && W.current === !1) {
      const t = N.current[T.row];
      if (!t || !t.current)
        return;
      t.current.focus();
      let l = T.colEnd;
      (l === void 0 || l === -1) && (l = T.col), console.log("EFFECT", "col:", T.col, "end:", l), t.current.setSelectionRange(T.col, l, T.direction);
    }
  }, [T, n]), n.forEach((t, l) => {
    N.current[l] = yt();
  }), /* @__PURE__ */ b.jsxs("div", { className: "editor", ref: Y, children: [
    n.map((t, l) => /* @__PURE__ */ b.jsx(
      xt,
      {
        key_debug: t.key,
        ref: N.current[l],
        isFocus: l === T.row,
        isSelect: S[0] <= l && l <= S[1],
        row: l,
        value: t.body,
        textPopupHandlers: d.textPopupHandlers,
        keywords: d.keywords,
        blockStyles: d.blockStyles,
        selectThisLine: m(),
        setLine: (a) => (i) => ((r) => {
          v((u) => (u[r].body = a + i, [...u]));
        })(l),
        setCursor: (a) => ((i) => {
          x((r) => ({
            row: i,
            col: a,
            colEnd: -1,
            direction: r.direction
          }));
        })(l),
        onPaste: $,
        onCompositionStart: () => {
          W.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          W.current = !1, console.log("composition end");
        },
        onChange: (a) => (i) => ((r) => {
          if (console.log("onChange", W.current), W.current === !1) {
            const u = i.target.selectionStart, w = i.target.selectionEnd, p = i.target.selectionDirection;
            x((s) => ({
              row: s.row,
              col: u,
              colEnd: w,
              direction: p
            }));
          }
          v((u) => (u[r].body = a + i.target.value, [...u]));
        })(l),
        onKeyDown: (a, i) => (r) => {
          let u = r.currentTarget.selectionStart, w = r.currentTarget.selectionEnd, p = r.currentTarget.selectionDirection;
          x((s) => {
            switch (r.key) {
              case "ArrowLeft": {
                if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                  if (s.row === 0)
                    return s;
                  const k = n[T.row - 1].body.length;
                  return r.preventDefault(), {
                    row: s.row - 1,
                    col: k,
                    colEnd: -1,
                    direction: p
                  };
                }
                return r.shiftKey ? u == w ? (u--, p = "backward") : p === "forward" ? w-- : p === "backward" && u-- : (u--, w = -1), r.preventDefault(), {
                  row: s.row,
                  col: u,
                  colEnd: w,
                  direction: p
                };
              }
              case "ArrowRight": {
                const k = -a.length + n[T.row].body.length;
                return r.currentTarget != null && r.currentTarget.selectionStart === k && r.currentTarget.selectionEnd === k ? s.row === n.length - 1 ? s : (r.preventDefault(), {
                  row: s.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: p
                }) : (r.shiftKey ? p === "forward" ? w++ : p === "backward" && u++ : (u < w && (u = w), u++, w = -1), r.preventDefault(), {
                  row: s.row,
                  col: u,
                  colEnd: w,
                  direction: p
                });
              }
              case "ArrowUp":
                return q(i) && !kt(r.currentTarget.selectionStart, i) || s.row === 0 ? s : (r.preventDefault(), {
                  row: s.row - 1,
                  col: r.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: p
                });
              case "ArrowDown":
                return q(i) && !Ct(r.currentTarget.selectionStart, i) || s.row === n.length - 1 ? s : (r.preventDefault(), {
                  row: s.row + 1,
                  col: r.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: p
                });
              case "Backspace":
                if (a.length !== 0 && (r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0 || r.currentTarget.selectionStart === 1 && r.currentTarget.selectionEnd === 1))
                  a.length !== 0 && (v((k) => (a.length === 1 ? (k[s.row].body = r.currentTarget.value.slice(1), u--, u === -1 ? u++ : u === 0 && w !== 0 && (w = 0)) : a.length > 0 && (k[s.row].body = a.slice(2) + r.currentTarget.value), [...k])), r.preventDefault());
                else if (r.currentTarget != null && r.currentTarget.selectionStart === 0 && r.currentTarget.selectionEnd === 0) {
                  if (s.row === 0)
                    return s;
                  const P = He(n[T.row - 1].body)[1].length;
                  return v((U) => (q(U[s.row - 1].body) ? U[s.row - 1].body += `
` + U[s.row].body : U[s.row - 1].body += U[s.row].body, U.splice(s.row, 1), [...U])), r.preventDefault(), {
                    row: s.row - 1,
                    col: P,
                    colEnd: -1,
                    direction: p
                  };
                }
                return console.log("normal Backspace", u), {
                  row: s.row,
                  col: u,
                  colEnd: w,
                  direction: p
                };
              case "Tab":
                return v((k) => {
                  if (r.shiftKey)
                    a.length === 1 ? (k[s.row].body = r.currentTarget.value.slice(1), u--) : a.length > 0 && (k[s.row].body = a.slice(2) + r.currentTarget.value);
                  else {
                    let P = "-";
                    q(r.currentTarget.value) && (P = " "), a.length === 0 ? (k[s.row].body = P + " " + r.currentTarget.value, u++) : k[s.row].body = "  " + a + r.currentTarget.value;
                  }
                  return x((P) => ({
                    row: P.row,
                    col: u,
                    colEnd: -1,
                    direction: p
                  })), [...k];
                }), r.preventDefault(), {
                  row: s.row,
                  col: u,
                  colEnd: -1,
                  direction: p
                };
              case "Enter":
                if (r.keyCode === 13) {
                  if (q(i) && !r.shiftKey)
                    return s;
                  {
                    let k = 0;
                    return v((P) => {
                      const U = a.length + r.currentTarget.selectionStart;
                      let G = P[s.row].body.slice(U);
                      if (q(i)) {
                        const ee = P[s.row].body;
                        ee[ee.length - 1] === `
` ? P[s.row].body = P[s.row].body.slice(
                          0,
                          U - 1
                        ) : P[s.row].body = P[s.row].body.slice(
                          0,
                          U
                        ), G.length > 0 && G[0] === `
` && (G = G.slice(1));
                      } else
                        P[s.row].body = P[s.row].body.slice(
                          0,
                          U
                        );
                      return a.length !== 0 ? (P.splice(
                        s.row + 1,
                        0,
                        { body: a + " " + G, key: A() }
                      ), k = 1) : P.splice(s.row + 1, 0, { body: G, key: A() }), [...P];
                    }), r.preventDefault(), {
                      row: s.row + 1,
                      col: k,
                      colEnd: -1,
                      direction: p
                    };
                  }
                } else
                  return s;
              case " ":
                return console.log("space", u), (u === 0 || u === 1 && a.length >= 1) && (v((k) => {
                  let P = "-";
                  return q(r.currentTarget.value) && (P = " "), a.length === 0 ? (k[s.row].body = P + " " + r.currentTarget.value, u++) : k[s.row].body = "  " + a + r.currentTarget.value, [...k];
                }), r.preventDefault()), {
                  row: s.row,
                  col: u,
                  colEnd: -1,
                  direction: p
                };
              default:
                return s;
            }
          });
        },
        onLinkClick: d.onLinkClick,
        onSubLinkClick: d.onSubLinkClick,
        onClick: (a) => {
          if (T.row !== l) {
            const i = a.target.selectionStart;
            O([l, l]), x(() => ({ row: l, col: i }));
          }
        }
      },
      t.key
    )),
    /* @__PURE__ */ b.jsx("div", { className: "popup", ref: y, children: d.linePopupHandlers.map((t, l) => /* @__PURE__ */ b.jsx(
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
      l
    )) })
  ] });
};
export {
  _t as Editor
};
