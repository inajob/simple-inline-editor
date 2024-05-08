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
  var w = we, o = Symbol.for("react.element"), T = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, D = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(S, P, W) {
    var N, k = {}, O = null, A = null;
    W !== void 0 && (O = "" + W), P.key !== void 0 && (O = "" + P.key), P.ref !== void 0 && (A = P.ref);
    for (N in P)
      E.call(P, N) && !j.hasOwnProperty(N) && (k[N] = P[N]);
    if (S && S.defaultProps)
      for (N in P = S.defaultProps, P)
        k[N] === void 0 && (k[N] = P[N]);
    return { $$typeof: o, type: S, key: O, ref: A, props: k, _owner: D.current };
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
    var w = we, o = Symbol.for("react.element"), T = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), S = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), U = Symbol.iterator, Y = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[Y];
      return typeof r == "function" ? r : null;
    }
    var u = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), g = 1; g < r; g++)
          s[g - 1] = arguments[g];
        C("error", e, s);
      }
    }
    function C(e, r, s) {
      {
        var g = u.ReactDebugCurrentFrame, b = g.getStackAddendum();
        b !== "" && (r += "%s", s = s.concat([b]));
        var _ = s.map(function(R) {
          return String(R);
        });
        _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var m = !1, f = !1, d = !1, n = !1, t = !1, i;
    i = Symbol.for("react.module.reference");
    function a(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === j || t || e === D || e === W || e === N || n || e === A || m || f || d || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === k || e.$$typeof === I || e.$$typeof === S || e.$$typeof === P || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === i || e.getModuleId !== void 0));
    }
    function h(e, r, s) {
      var g = e.displayName;
      if (g)
        return g;
      var b = r.displayName || r.name || "";
      return b !== "" ? s + "(" + b + ")" : s;
    }
    function l(e) {
      return e.displayName || "Context";
    }
    function c(e) {
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
        case W:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return l(r) + ".Consumer";
          case I:
            var s = e;
            return l(s._context) + ".Provider";
          case P:
            return h(e, e.render, "ForwardRef");
          case k:
            var g = e.displayName || null;
            return g !== null ? g : c(e.type) || "Memo";
          case O: {
            var b = e, _ = b._payload, R = b._init;
            try {
              return c(R(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, M = 0, X, Ee, ye, pe, Ce, Re, Te;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function He() {
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
    function Ue() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: X
            }),
            info: x({}, e, {
              value: Ee
            }),
            warn: x({}, e, {
              value: ye
            }),
            error: x({}, e, {
              value: pe
            }),
            group: x({}, e, {
              value: Ce
            }),
            groupCollapsed: x({}, e, {
              value: Re
            }),
            groupEnd: x({}, e, {
              value: Te
            })
          });
        }
        M < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = u.ReactCurrentDispatcher, ce;
    function re(e, r, s) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (b) {
            var g = b.stack.trim().match(/\n( *(at )?)/);
            ce = g && g[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var ue = !1, oe;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new Ve();
    }
    function ke(e, r) {
      if (!e || ue)
        return "";
      {
        var s = oe.get(e);
        if (s !== void 0)
          return s;
      }
      var g;
      ue = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = se.current, se.current = null, He();
      try {
        if (r) {
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
            } catch (K) {
              g = K;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (K) {
              g = K;
            }
            e.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            g = K;
          }
          e();
        }
      } catch (K) {
        if (K && g && typeof K.stack == "string") {
          for (var y = K.stack.split(`
`), B = g.stack.split(`
`), F = y.length - 1, L = B.length - 1; F >= 1 && L >= 0 && y[F] !== B[L]; )
            L--;
          for (; F >= 1 && L >= 0; F--, L--)
            if (y[F] !== B[L]) {
              if (F !== 1 || L !== 1)
                do
                  if (F--, L--, L < 0 || y[F] !== B[L]) {
                    var H = `
` + y[F].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, H), H;
                  }
                while (F >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        ue = !1, se.current = _, Ue(), Error.prepareStackTrace = b;
      }
      var z = e ? e.displayName || e.name : "", $e = z ? re(z) : "";
      return typeof e == "function" && oe.set(e, $e), $e;
    }
    function Ke(e, r, s) {
      return ke(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, qe(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case W:
          return re("Suspense");
        case N:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            return Ke(e.render);
          case k:
            return ie(e.type, r, s);
          case O: {
            var g = e, b = g._payload, _ = g._init;
            try {
              return ie(_(b), r, s);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, xe = {}, Se = u.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var r = e._owner, s = ie(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(s);
      } else
        Se.setExtraStackFrame(null);
    }
    function Je(e, r, s, g, b) {
      {
        var _ = Function.call.bind(le);
        for (var R in e)
          if (_(e, R)) {
            var y = void 0;
            try {
              if (typeof e[R] != "function") {
                var B = Error((g || "React class") + ": " + s + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              y = e[R](r, R, g, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              y = F;
            }
            y && !(y instanceof Error) && (ae(b), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", s, R, typeof y), ae(null)), y instanceof Error && !(y.message in xe) && (xe[y.message] = !0, ae(b), v("Failed %s type: %s", s, y.message), ae(null));
          }
      }
    }
    var Ge = Array.isArray;
    function fe(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, s = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
    var Z = u.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, de;
    de = {};
    function Qe(e) {
      if (le.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function et(e) {
      if (le.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, r) {
      if (typeof e.ref == "string" && Z.current && r && Z.current.stateNode !== r) {
        var s = c(Z.current.type);
        de[s] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', c(Z.current.type), e.ref), de[s] = !0);
      }
    }
    function nt(e, r) {
      {
        var s = function() {
          Pe || (Pe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function rt(e, r) {
      {
        var s = function() {
          Oe || (Oe = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var ot = function(e, r, s, g, b, _, R) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: s,
        props: R,
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
        value: g
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function it(e, r, s, g, b) {
      {
        var _, R = {}, y = null, B = null;
        s !== void 0 && (je(s), y = "" + s), et(r) && (je(r.key), y = "" + r.key), Qe(r) && (B = r.ref, tt(r, b));
        for (_ in r)
          le.call(r, _) && !Ze.hasOwnProperty(_) && (R[_] = r[_]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (_ in F)
            R[_] === void 0 && (R[_] = F[_]);
        }
        if (y || B) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && nt(R, L), B && rt(R, L);
        }
        return ot(e, y, B, b, g, Z.current, R);
      }
    }
    var he = u.ReactCurrentOwner, De = u.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, s = ie(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var ge;
    ge = !1;
    function me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ne() {
      {
        if (he.current) {
          var e = c(he.current.type);
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
          var r = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + r + ":" + s + ".";
        }
        return "";
      }
    }
    var Fe = {};
    function at(e) {
      {
        var r = Ne();
        if (!r) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (r = `

Check the top-level render call using <` + s + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = at(r);
        if (Fe[s])
          return;
        Fe[s] = !0;
        var g = "";
        e && e._owner && e._owner !== he.current && (g = " It was passed a child from " + c(e._owner.type) + "."), G(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, g), G(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var s = 0; s < e.length; s++) {
            var g = e[s];
            me(g) && Ae(g, r);
          }
        else if (me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = $(e);
          if (typeof b == "function" && b !== e.entries)
            for (var _ = b.call(e), R; !(R = _.next()).done; )
              me(R.value) && Ae(R.value, r);
        }
      }
    }
    function st(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var s;
        if (typeof r == "function")
          s = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === P || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === k))
          s = r.propTypes;
        else
          return;
        if (s) {
          var g = c(r);
          Je(s, e.props, "prop", g, e);
        } else if (r.PropTypes !== void 0 && !ge) {
          ge = !0;
          var b = c(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var r = Object.keys(e.props), s = 0; s < r.length; s++) {
          var g = r[s];
          if (g !== "children" && g !== "key") {
            G(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function Ie(e, r, s, g, b, _) {
      {
        var R = a(e);
        if (!R) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = lt(b);
          B ? y += B : y += Ne();
          var F;
          e === null ? F = "null" : fe(e) ? F = "array" : e !== void 0 && e.$$typeof === o ? (F = "<" + (c(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, y);
        }
        var L = it(e, r, s, b, _);
        if (L == null)
          return L;
        if (R) {
          var H = r.children;
          if (H !== void 0)
            if (g)
              if (fe(H)) {
                for (var z = 0; z < H.length; z++)
                  Le(H[z], e);
                Object.freeze && Object.freeze(H);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(H, e);
        }
        return e === E ? ct(L) : st(L), L;
      }
    }
    function ut(e, r, s) {
      return Ie(e, r, s, !0);
    }
    function ft(e, r, s) {
      return Ie(e, r, s, !1);
    }
    var dt = ft, ht = ut;
    te.Fragment = E, te.jsx = dt, te.jsxs = ht;
  }()), te;
}
process.env.NODE_ENV === "production" ? ve.exports = vt() : ve.exports = wt();
var p = ve.exports;
function V(w, o) {
  const T = w.match(/^(\s*)(```|> )/);
  return o === !0 ? T : T != null;
}
const Et = (w) => w.match(/^(\s*)> /) != null, yt = (w) => w.split(/[\r\n]/), pt = (w) => w.split(/[\r\n]/).length, Me = (w, o) => {
  const T = o.split(/[\r\n]/);
  let E = 0;
  for (let D = 0; D < T.length; D++)
    if (E += T[D].length + 1, E > w)
      return [w - (E - T[D].length - 1), D];
  throw new Error("error getPos");
}, Ct = (w, o) => {
  const T = Me(w, o), E = pt(o);
  return T[1] === E - 1;
}, Rt = (w, o) => Me(w, o)[1] === 0, Tt = (w) => {
  const o = w.match(/^\s*`{3}(.*)/), T = yt(w).slice(1).join(`
`);
  return [o == null ? void 0 : o[1], T];
}, Ye = we.forwardRef(
  function(o, T) {
    const [E, D] = ne({
      prefix: "",
      selection: "",
      suffix: ""
    }), j = () => {
      D({ prefix: "", selection: "", suffix: "" });
    }, [I, S] = ne({
      index: 0
    }), P = (u, v) => {
      let C = 0, m = "", f = !1;
      for (let n = 0; n < u.length; n++) {
        const t = u[n];
        t === "[" ? (C++, m = "") : t === "]" ? (C > 0 && (C--, m = "", f = !0), C === 0 && (f = !1)) : C > 0 && !f && (m += t);
      }
      let d = "";
      if (C > 0) {
        let n = 0, t = !1;
        for (let i = 0; i < v.length; i++) {
          const a = v[i];
          a === "[" ? n++ : a === "]" ? (n--, t = !0) : t || (d += a);
        }
        return n === 0 && (d = ""), m + d;
      }
      return "";
    }, W = (u) => {
      let v = u.length - 1;
      for (let C = u.length - 1; C >= 0; C--)
        if (u[C] === "[") {
          v = C;
          break;
        }
      return u.slice(0, -(u.length - 1 - v));
    }, N = (u) => {
      let v = 0;
      for (let C = 0; C < u.length; C++)
        if (u[C] === "]") {
          v = C;
          break;
        }
      return u.slice(v);
    }, k = P(E.prefix, E.suffix);
    q(() => {
      if (!Y.current || !$.current)
        return;
      Y.current.style.display = "inline", E.selection === "" && k === "" ? $.current.style.display = "none" : $.current.style.display = "inline", $.current.style.left = Y.current.getBoundingClientRect().width + "px", $.current.style.top = -$.current.getBoundingClientRect().height + "px";
      const u = $.current.getBoundingClientRect().top + window.scrollY;
      u < 0 && ($.current.style.top = -$.current.getBoundingClientRect().height - u + "px"), Y.current.style.display = "none";
    }, [E, k]), q(() => {
      S({ index: 0 });
    }, [o.value]);
    const O = function(u) {
      D({
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
    let A = o.popupHandlers, U = !1;
    E.selection === "" && k !== "" && (A = o.keywords.filter((u) => u.indexOf(k) != -1).map((u, v) => ({
      name: u,
      handler: () => {
        const C = W(E.prefix), m = A[v].name;
        let f = N(E.suffix), d = (C + m).length;
        return (f.length == 0 || f[0] != "]") && (f = "]" + f, d += 1), {
          value: C + m + f,
          column: d
        };
      }
    })), A.length > 0 && (U = !0));
    const Y = J(null), $ = J(null);
    return /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: o.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ p.jsx(
            "textarea",
            {
              ref: T,
              value: o.value,
              onPaste: o.onPaste,
              onCompositionStart: o.onCompositionStart,
              onCompositionEnd: (u) => {
                o.onCompositionEnd(u), O(u);
              },
              onChange: o.onChange,
              onKeyDown: (u) => {
                if (u.key === "Enter" && u.keyCode === 13 && U) {
                  const v = A[I.index].handler(null);
                  o.setLine(v.value), o.setCursor(v.column), u.preventDefault();
                } else
                  u.key == "Tab" && U ? (S((v) => {
                    let C = v.index + 1;
                    return C >= A.length && (C = 0), { index: C };
                  }), u.preventDefault()) : o.onKeyDown(E)(u);
              },
              onSelect: O
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "popup", ref: $, children: A.map((u, v) => /* @__PURE__ */ p.jsx(
            "div",
            {
              className: I.index == v ? "selected" : "",
              onClick: () => {
                const C = u.handler(E);
                o.setLine(C.value), o.setCursor(C.column), j();
              },
              children: u.name
            },
            v
          )) }),
          /* @__PURE__ */ p.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: Y, children: E.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), bt = (w, o = null) => {
  const T = J(o);
  return q(() => {
    w && (typeof w == "function" ? w(T.current) : w.current = T.current);
  }, [w]), T;
}, kt = gt(
  function(o, T) {
    const E = bt(T), [D, j] = ne();
    q(() => {
      if (!E.current)
        return;
      const n = E.current.style.display;
      E.current.style.display = "block", E.current.style.height = "0px", E.current.style.height = E.current.scrollHeight + "px", E.current.style.display = n;
    }, [o.value, E, o.isFocus]);
    const I = (n, t, i) => {
      var l;
      const a = ["line"], h = n.match(/^(\s*)- /);
      if (n.indexOf("# ") === 0)
        a.push("h1-style");
      else if (n.indexOf("## ") === 0)
        a.push("h2-style");
      else if (n.indexOf("### ") === 0)
        a.push("h3-style");
      else if (h)
        a.push("list-style"), a.push("list-indent-" + h[1].length / 2);
      else if (V(n)) {
        const c = V(n, !0);
        a.push("list-indent-" + (((l = c == null ? void 0 : c[1]) == null ? void 0 : l.length) ?? 0) / 2);
      }
      return t && a.push("focus"), i && a.push("select"), a.join(" ");
    }, S = (n) => n ? [] : ["hide"], P = (n) => n ? "hide" : "", W = (n, t, i) => {
      let a = -1, h = "";
      return t.forEach(function(l) {
        const c = n.indexOf(l, i);
        c !== -1 && (a === -1 || a > c) && (a = c, h = l);
      }), { pos: a, target: h };
    }, N = o.onLinkClick, k = o.onSubLinkClick, O = Q((n) => {
      let t = 0;
      const i = [];
      for (; ; ) {
        const a = W(n, ["http://", "https://", " ", "["], t);
        if (a.target === "https://" || a.target === "http://") {
          t !== a.pos && i.push(n.slice(t, a.pos));
          const h = W(
            n,
            [" ", "\r", `
`],
            a.pos + a.target.length
          );
          if (h.pos !== -1) {
            const l = n.slice(a.pos, h.pos);
            i.push(/* @__PURE__ */ p.jsx("a", { href: l, children: l })), t = h.pos;
          } else {
            const l = n.slice(a.pos, n.length);
            i.push(/* @__PURE__ */ p.jsx("a", { href: l, children: l })), t = n.length;
            break;
          }
        } else if (a.target == " ")
          i.push(n.slice(t, a.pos)), i.push(" "), t = a.pos + a.target.length;
        else if (a.target == "[") {
          t !== a.pos && i.push(n.slice(t, a.pos));
          const h = W(n, ["]"], a.pos + a.target.length);
          if (h.pos !== -1) {
            const l = n.slice(a.pos, h.pos + 1);
            i.push([/* @__PURE__ */ p.jsxs(p.Fragment, { children: [
              /* @__PURE__ */ p.jsx("span", { className: "braket", onClick: (c) => {
                N(l.slice(1, l.length - 1)), c.stopPropagation();
              }, children: l.slice(1, l.length - 1) }, t),
              /* @__PURE__ */ p.jsx("span", { className: "bracket-icon", onClick: (c) => {
                k(l.slice(1, l.length - 1)), c.stopPropagation();
              }, children: "[]" }, "icon-" + t)
            ] })]), t = h.pos + 1;
          } else
            i.push(n.slice(t, n.length)), t = n.length;
        } else {
          i.push(n.slice(t, n.length)), t = n.length;
          break;
        }
      }
      return i;
    }, [N, k]), A = Q((n, t) => {
      const i = n ? o.blockStyles[n] : void 0;
      return i ? i(t) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx("span", { className: "block-type", children: n }),
        /* @__PURE__ */ p.jsx("pre", { children: t })
      ] });
    }, [o.blockStyles]), U = Q((n) => {
      const t = n.match(/^(\s*)```.*/), i = (t == null ? void 0 : t[1]) ?? "";
      return n = n.slice(i.length).split(`
`).map((a) => i + a).join(`
`), n;
    }, []), Y = Q((n) => {
      const t = n.match(/^(\s*)> /), i = (t == null ? void 0 : t[1]) ?? "";
      return n = n.slice(i.length).split(`
`).map(
        (a, h) => i + (h === 0 ? "" : "> ") + a
      ).join(`
`), n;
    }, []), $ = Q((n) => {
      var t;
      if (console.log(n), V(n))
        if (Et(n)) {
          const i = n.match(/\s*> /), a = n.slice((t = i == null ? void 0 : i[0]) == null ? void 0 : t.length);
          j(
            /* @__PURE__ */ p.jsxs("div", { children: [
              /* @__PURE__ */ p.jsx("pre", { className: "for-copy", children: Y(n) }),
              /* @__PURE__ */ p.jsx("div", { className: "no-select", children: A("pre", a) })
            ] })
          );
          return;
        } else {
          const i = Tt(n);
          try {
            const a = A(i[0], i[1]);
            j(
              /* @__PURE__ */ p.jsxs("div", { children: [
                /* @__PURE__ */ p.jsx("pre", { className: "for-copy", children: U(n + "\n```") }),
                /* @__PURE__ */ p.jsx("div", { className: "no-select", children: a })
              ] })
            );
          } catch (a) {
            a instanceof Promise && a.then((h) => {
              console.log(h), j(h);
            }), j(/* @__PURE__ */ p.jsx("div", { children: "loading..." }));
          }
          return;
        }
      else {
        const i = ["elm"], a = n.match(/^(\s*)-( .*)$/);
        let h = null;
        n.indexOf("# ") === 0 || n.indexOf("## ") === 0 || n.indexOf("### ") === 0 || a && (n = a[2], h = /* @__PURE__ */ p.jsx("pre", { className: "for-copy-inline", children: a[1] + "-" })), j(
          /* @__PURE__ */ p.jsxs("div", { className: i.join(" "), children: [
            h,
            O(n)
          ] })
        );
        return;
      }
    }, [U, Y, A, O]), u = (n) => {
      const t = n.match(/^(\s*-)( .*)$/);
      let i = "";
      if (t)
        n = t[2], i = t[1];
      else {
        const a = n.match(/^(\s*)(```.*|> )/);
        a && (i = a[1], n = n.slice(a[1].length));
      }
      return [i, n];
    }, v = J(null), C = (n) => (t) => {
      if (t.buttons !== 0 && v.current) {
        n();
        const i = new Range();
        i.selectNodeContents(v.current);
        const a = document.getSelection();
        if (!a)
          throw new Error("selection is null");
        a.empty(), a.addRange(i);
      }
    }, m = u(o.value), f = m[0], d = m[1];
    return q(() => {
      $(o.value);
    }, [$, o.value]), V(d) ? /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: I(o.value, o.isFocus, o.isSelect),
        ref: v,
        "data-lineno": o.row,
        onClick: o.onClick,
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: ["line-item"].concat(S(o.isFocus)).join(" "),
              onMouseLeave: C(o.selectThisLine),
              children: /* @__PURE__ */ p.jsx(
                Ye,
                {
                  ref: E,
                  value: d,
                  keywords: o.keywords,
                  setLine: o.setLine(f),
                  setCursor: o.setCursor,
                  onCompositionStart: o.onCompositionStart,
                  onCompositionEnd: o.onCompositionEnd,
                  onChange: o.onChange(f),
                  popupHandlers: [],
                  onKeyDown: () => o.onKeyDown(f, d)
                }
              )
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: "line-item", children: D })
        ]
      }
    ) : /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: I(o.value, o.isFocus, o.isSelect),
        ref: v,
        "data-lineno": o.row,
        onClick: o.onClick,
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: S(o.isFocus) + " container",
              onMouseLeave: C(o.selectThisLine),
              children: /* @__PURE__ */ p.jsx(
                Ye,
                {
                  ref: E,
                  value: d,
                  keywords: o.keywords,
                  setLine: o.setLine(f),
                  setCursor: o.setCursor,
                  onPaste: o.onPaste(o.row),
                  onCompositionStart: o.onCompositionStart,
                  onCompositionEnd: o.onCompositionEnd,
                  onChange: o.onChange(f),
                  popupHandlers: o.textPopupHandlers,
                  onKeyDown: (n) => (t) => {
                    t.key === "Enter" && t.keyCode === 13 && n.selection !== "" ? t.preventDefault() : o.onKeyDown(f, d)(t);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ p.jsx("div", { className: P(o.isFocus), children: D })
        ]
      }
    );
  }
), St = (w) => {
  const o = w.lines, T = w.setLines, E = w.onChange;
  q(() => {
    E(o);
  }, [o, E]);
  const D = J(!1), [j, I] = ne({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [S, P] = ne([0, 0]), W = (m) => m == null ? null : m instanceof HTMLElement && m.classList.contains("line") ? m : W(m.parentElement), N = J(null);
  let k, O, A = !1;
  const U = () => {
    A = !0;
    const m = document.getSelection();
    m && (k = W(m.anchorNode), O = W(m.focusNode), (k == null ? void 0 : k.parentNode) != N.current && (k = null, O = null), k !== O && I({ row: -1, col: 0 }));
  }, Y = () => {
    var m, f, d, n;
    if (A && (A = !1, k && O && k !== O)) {
      const t = new Range();
      if (t.setStart(k, 0), t.setEnd(O, O.children.length), document.getSelection().empty(), document.getSelection().addRange(t), !((m = k.dataset) != null && m.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const i = parseInt((f = k.dataset) == null ? void 0 : f.lineno);
      if (!((d = O.dataset) != null && d.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const a = parseInt((n = O.dataset) == null ? void 0 : n.lineno);
      P([i, a]);
    }
  }, $ = () => () => {
    I(() => ({ row: -1, col: 0 })), A = !0;
  }, u = J(null);
  q(() => {
    var m;
    if (u.current)
      if (S[1] - S[0] >= 1) {
        u.current.style.display = "block";
        const f = (m = document.getSelection()) == null ? void 0 : m.focusNode;
        if (!f)
          throw new Error("focusNode is null");
        if (!(f instanceof Element))
          throw new Error("focusNode is not Element");
        const d = f.getBoundingClientRect(), n = d.bottom, t = d.x + d.width / 2;
        u.current.style.left = t + "px", u.current.style.top = n + "px";
      } else
        u.current.style.display = "none";
  }, [S]);
  const v = (m) => (f) => {
    const n = f.clipboardData.getData("text").split(/\r\n|\n/);
    if (n.length === 1)
      return !0;
    const t = [];
    let i = [], a = !1, h = "";
    return n.forEach((l) => {
      const c = l.match(/^(\s*)(```.*)/);
      a ? l.indexOf(h + "```") === 0 ? (t.push(i.join(`
`)), a = !1, i = []) : (h !== "" && l.indexOf(h) !== 0 && (t.push(i.join(`
`)), a = !1, i = [], t.push(l)), i.push(l.slice(h.length))) : c ? (a = !0, h = c[1], i.push(l)) : t.push(l);
    }), i.length !== 0 && t.push(i.join(`
`)), T((l) => (l[m] = l[m] + t[0], l.splice(m + 1, 0, ...t.slice(1)), [...l])), f.preventDefault(), !1;
  };
  q(() => {
    document.addEventListener("selectionchange", U), document.addEventListener("pointerup", Y);
  }, []);
  const C = J([]);
  return q(() => {
    if (j.row !== -1 && D.current === !1) {
      const m = C.current[j.row];
      if (!m || !m.current)
        return;
      m.current.focus();
      let f = j.colEnd;
      (f === void 0 || f === -1) && (f = j.col), console.log("EFFECT", "col:", j.col, "end:", f), m.current.setSelectionRange(j.col, f, j.direction);
    }
  }, [j, o]), o.forEach((m, f) => {
    C.current[f] = mt();
  }), /* @__PURE__ */ p.jsxs("div", { className: "editor", ref: N, children: [
    o.map((m, f) => /* @__PURE__ */ p.jsx(
      kt,
      {
        ref: C.current[f],
        isFocus: f === j.row,
        isSelect: S[0] <= f && f <= S[1],
        row: f,
        value: m,
        textPopupHandlers: w.textPopupHandlers,
        keywords: w.keywords,
        blockStyles: w.blockStyles,
        selectThisLine: $(),
        setLine: (d) => (n) => ((t) => {
          T((i) => (i[t] = d + n, [...i]));
        })(f),
        setCursor: (d) => ((n) => {
          I((t) => ({
            row: n,
            col: d,
            colEnd: -1,
            direction: t.direction
          }));
        })(f),
        onPaste: v,
        onCompositionStart: () => {
          D.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          D.current = !1, console.log("composition end");
        },
        onChange: (d) => (n) => ((t) => {
          if (console.log("onChange", D.current), D.current === !1) {
            const i = n.target.selectionStart, a = n.target.selectionEnd, h = n.target.selectionDirection;
            I((l) => ({
              row: l.row,
              col: i,
              colEnd: a,
              direction: h
            }));
          }
          T((i) => (i[t] = d + n.target.value, [...i]));
        })(f),
        onKeyDown: (d, n) => (t) => {
          let i = t.currentTarget.selectionStart, a = t.currentTarget.selectionEnd, h = t.currentTarget.selectionDirection;
          I((l) => {
            switch (t.key) {
              case "ArrowLeft": {
                if (t.currentTarget != null && t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0) {
                  if (l.row === 0)
                    return l;
                  const c = o[j.row - 1].length;
                  return t.preventDefault(), {
                    row: l.row - 1,
                    col: c,
                    colEnd: -1,
                    direction: h
                  };
                }
                return t.shiftKey ? i == a ? (i--, h = "backward") : h === "forward" ? a-- : h === "backward" && i-- : (i--, a = -1), t.preventDefault(), {
                  row: l.row,
                  col: i,
                  colEnd: a,
                  direction: h
                };
              }
              case "ArrowRight": {
                const c = -d.length + o[j.row].length;
                return t.currentTarget != null && t.currentTarget.selectionStart === c && t.currentTarget.selectionEnd === c ? l.row === o.length - 1 ? l : (t.preventDefault(), {
                  row: l.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: h
                }) : (t.shiftKey ? h === "forward" ? a++ : h === "backward" && i++ : (i < a && (i = a), i++, a = -1), t.preventDefault(), {
                  row: l.row,
                  col: i,
                  colEnd: a,
                  direction: h
                });
              }
              case "ArrowUp":
                return V(n) && !Rt(t.currentTarget.selectionStart, n) || l.row === 0 ? l : (t.preventDefault(), {
                  row: l.row - 1,
                  col: t.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: h
                });
              case "ArrowDown":
                return V(n) && !Ct(t.currentTarget.selectionStart, n) || l.row === o.length - 1 ? l : (t.preventDefault(), {
                  row: l.row + 1,
                  col: t.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: h
                });
              case "Backspace":
                if (d.length !== 0 && (t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0 || t.currentTarget.selectionStart === 1 && t.currentTarget.selectionEnd === 1))
                  d.length !== 0 && (T((c) => (d.length === 1 ? (c[l.row] = t.currentTarget.value.slice(1), i--, i === -1 && i++) : d.length > 0 && (c[l.row] = d.slice(2) + t.currentTarget.value), [...c])), t.preventDefault());
                else if (t.currentTarget != null && t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0) {
                  if (l.row === 0)
                    return l;
                  const c = o[j.row - 1].length;
                  return T((x) => (V(x[l.row - 1]) ? x[l.row - 1] += `
` + x[l.row] : x[l.row - 1] += x[l.row], x.splice(l.row, 1), [...x])), t.preventDefault(), {
                    row: l.row - 1,
                    col: c,
                    colEnd: -1,
                    direction: h
                  };
                }
                return console.log("normal Backspace", i), {
                  row: l.row,
                  col: i,
                  colEnd: a,
                  direction: h
                };
              case "Tab":
                return T((c) => {
                  if (t.shiftKey)
                    d.length === 1 ? (c[l.row] = t.currentTarget.value.slice(1), i--) : d.length > 0 && (c[l.row] = d.slice(2) + t.currentTarget.value);
                  else {
                    let x = "-";
                    V(t.currentTarget.value) && (x = " "), d.length === 0 ? (c[l.row] = x + " " + t.currentTarget.value, i++) : c[l.row] = "  " + d + t.currentTarget.value;
                  }
                  return I((x) => ({
                    row: x.row,
                    col: i,
                    colEnd: -1,
                    direction: h
                  })), [...c];
                }), t.preventDefault(), {
                  row: l.row,
                  col: i,
                  colEnd: -1,
                  direction: h
                };
              case "Enter":
                return t.keyCode === 13 ? V(n) && !t.shiftKey ? l : (T((c) => {
                  const x = d.length + t.currentTarget.selectionStart;
                  let M = c[l.row].slice(x);
                  if (V(n)) {
                    const X = c[l.row];
                    X[X.length - 1] === `
` ? c[l.row] = c[l.row].slice(
                      0,
                      x - 1
                    ) : c[l.row] = c[l.row].slice(
                      0,
                      x
                    ), M.length > 0 && M[0] === `
` && (M = M.slice(1));
                  } else
                    c[l.row] = c[l.row].slice(
                      0,
                      x
                    );
                  return d.length !== 0 ? c.splice(
                    l.row + 1,
                    0,
                    d + " " + M
                  ) : c.splice(l.row + 1, 0, M), [...c];
                }), t.preventDefault(), {
                  row: l.row + 1,
                  col: d.length,
                  colEnd: -1,
                  direction: h
                }) : l;
              case " ":
                return console.log("space", i), (i === 0 || i === 1 && d.length >= 1) && (T((c) => {
                  let x = "-";
                  return V(t.currentTarget.value) && (x = " "), d.length === 0 ? (c[l.row] = x + " " + t.currentTarget.value, i++) : c[l.row] = "  " + d + t.currentTarget.value, [...c];
                }), t.preventDefault()), {
                  row: l.row,
                  col: i,
                  colEnd: -1,
                  direction: h
                };
              default:
                return l;
            }
          });
        },
        onLinkClick: w.onLinkClick,
        onSubLinkClick: w.onSubLinkClick,
        onClick: (d) => {
          if (j.row !== f) {
            const n = d.target.selectionStart;
            P([f, f]), I(() => ({ row: f, col: n }));
          }
        }
      },
      f
    )),
    /* @__PURE__ */ p.jsx("div", { className: "popup", ref: u, children: w.linePopupHandlers.map((m, f) => /* @__PURE__ */ p.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (m.handler(
            o.slice(S[0], S[1] + 1),
            S
          ), P([S[1], S[1]]));
        },
        onTouchStart: () => {
          m.handler(o.slice(S[0], S[1] + 1)), P([S[1], S[1]]);
        },
        children: m.name
      },
      f
    )) })
  ] });
};
export {
  St as Editor
};
