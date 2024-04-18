import ve, { useState as ae, useEffect as q, useRef as J, forwardRef as gt, useCallback as Z, useMemo as mt, createRef as vt } from "react";
var me = { exports: {} }, Q = {};
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
function wt() {
  if (We)
    return Q;
  We = 1;
  var v = ve, i = Symbol.for("react.element"), T = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, O = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(b, j, $) {
    var x, _ = {}, L = null, I = null;
    $ !== void 0 && (L = "" + $), j.key !== void 0 && (L = "" + j.key), j.ref !== void 0 && (I = j.ref);
    for (x in j)
      w.call(j, x) && !P.hasOwnProperty(x) && (_[x] = j[x]);
    if (b && b.defaultProps)
      for (x in j = b.defaultProps, j)
        _[x] === void 0 && (_[x] = j[x]);
    return { $$typeof: i, type: b, key: L, ref: I, props: _, _owner: O.current };
  }
  return Q.Fragment = T, Q.jsx = A, Q.jsxs = A, Q;
}
var ee = {};
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
function Et() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var v = ve, i = Symbol.for("react.element"), T = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), b = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), V = Symbol.iterator, B = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = V && e[V] || e[B];
      return typeof o == "function" ? o : null;
    }
    var u = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), h = 1; h < o; h++)
          s[h - 1] = arguments[h];
        c("error", e, s);
      }
    }
    function c(e, o, s) {
      {
        var h = u.ReactDebugCurrentFrame, R = h.getStackAddendum();
        R !== "" && (o += "%s", s = s.concat([R]));
        var S = s.map(function(p) {
          return String(p);
        });
        S.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var d = !1, t = !1, a = !1, n = !1, r = !1, m;
    m = Symbol.for("react.module.reference");
    function f(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === P || r || e === O || e === $ || e === x || n || e === I || d || t || a || typeof e == "object" && e !== null && (e.$$typeof === L || e.$$typeof === _ || e.$$typeof === A || e.$$typeof === b || e.$$typeof === j || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === m || e.getModuleId !== void 0));
    }
    function l(e, o, s) {
      var h = e.displayName;
      if (h)
        return h;
      var R = o.displayName || o.name || "";
      return R !== "" ? s + "(" + R + ")" : s;
    }
    function E(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case T:
          return "Portal";
        case P:
          return "Profiler";
        case O:
          return "StrictMode";
        case $:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var o = e;
            return E(o) + ".Consumer";
          case A:
            var s = e;
            return E(s._context) + ".Provider";
          case j:
            return l(e, e.render, "ForwardRef");
          case _:
            var h = e.displayName || null;
            return h !== null ? h : C(e.type) || "Memo";
          case L: {
            var R = e, S = R._payload, p = R._init;
            try {
              return C(p(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, K = 0, we, Ee, ye, pe, Te, Ce, Re;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ue() {
      {
        if (K === 0) {
          we = console.log, Ee = console.info, ye = console.warn, pe = console.error, Te = console.group, Ce = console.groupCollapsed, Re = console.groupEnd;
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
        K++;
      }
    }
    function Ve() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: we
            }),
            info: M({}, e, {
              value: Ee
            }),
            warn: M({}, e, {
              value: ye
            }),
            error: M({}, e, {
              value: pe
            }),
            group: M({}, e, {
              value: Te
            }),
            groupCollapsed: M({}, e, {
              value: Ce
            }),
            groupEnd: M({}, e, {
              value: Re
            })
          });
        }
        K < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = u.ReactCurrentDispatcher, se;
    function te(e, o, s) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (R) {
            var h = R.stack.trim().match(/\n( *(at )?)/);
            se = h && h[1] || "";
          }
        return `
` + se + e;
      }
    }
    var ce = !1, ne;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new He();
    }
    function ke(e, o) {
      if (!e || ce)
        return "";
      {
        var s = ne.get(e);
        if (s !== void 0)
          return s;
      }
      var h;
      ce = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = le.current, le.current = null, Ue();
      try {
        if (o) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (H) {
              h = H;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (H) {
              h = H;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            h = H;
          }
          e();
        }
      } catch (H) {
        if (H && h && typeof H.stack == "string") {
          for (var y = H.stack.split(`
`), W = h.stack.split(`
`), D = y.length - 1, N = W.length - 1; D >= 1 && N >= 0 && y[D] !== W[N]; )
            N--;
          for (; D >= 1 && N >= 0; D--, N--)
            if (y[D] !== W[N]) {
              if (D !== 1 || N !== 1)
                do
                  if (D--, N--, N < 0 || y[D] !== W[N]) {
                    var Y = `
` + y[D].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, Y), Y;
                  }
                while (D >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        ce = !1, le.current = S, Ve(), Error.prepareStackTrace = R;
      }
      var z = e ? e.displayName || e.name : "", $e = z ? te(z) : "";
      return typeof e == "function" && ne.set(e, $e), $e;
    }
    function Ke(e, o, s) {
      return ke(e, !1);
    }
    function qe(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function re(e, o, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, qe(e));
      if (typeof e == "string")
        return te(e);
      switch (e) {
        case $:
          return te("Suspense");
        case x:
          return te("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            return Ke(e.render);
          case _:
            return re(e.type, o, s);
          case L: {
            var h = e, R = h._payload, S = h._init;
            try {
              return re(S(R), o, s);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, xe = {}, Se = u.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var o = e._owner, s = re(e.type, e._source, o ? o.type : null);
        Se.setExtraStackFrame(s);
      } else
        Se.setExtraStackFrame(null);
    }
    function Je(e, o, s, h, R) {
      {
        var S = Function.call.bind(oe);
        for (var p in e)
          if (S(e, p)) {
            var y = void 0;
            try {
              if (typeof e[p] != "function") {
                var W = Error((h || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              y = e[p](o, p, h, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              y = D;
            }
            y && !(y instanceof Error) && (ie(R), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", s, p, typeof y), ie(null)), y instanceof Error && !(y.message in xe) && (xe[y.message] = !0, ie(R), g("Failed %s type: %s", s, y.message), ie(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ue(e) {
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
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), _e(e);
    }
    var X = u.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, fe;
    fe = {};
    function Qe(e) {
      if (oe.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function et(e) {
      if (oe.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, o) {
      if (typeof e.ref == "string" && X.current && o && X.current.stateNode !== o) {
        var s = C(X.current.type);
        fe[s] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(X.current.type), e.ref), fe[s] = !0);
      }
    }
    function nt(e, o) {
      {
        var s = function() {
          Pe || (Pe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
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
          Oe || (Oe = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var ot = function(e, o, s, h, R, S, p) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: s,
        props: p,
        // Record the component responsible for creating this element.
        _owner: S
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
        value: R
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function it(e, o, s, h, R) {
      {
        var S, p = {}, y = null, W = null;
        s !== void 0 && (je(s), y = "" + s), et(o) && (je(o.key), y = "" + o.key), Qe(o) && (W = o.ref, tt(o, R));
        for (S in o)
          oe.call(o, S) && !Ze.hasOwnProperty(S) && (p[S] = o[S]);
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (S in D)
            p[S] === void 0 && (p[S] = D[S]);
        }
        if (y || W) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && nt(p, N), W && rt(p, N);
        }
        return ot(e, y, W, R, h, X.current, p);
      }
    }
    var de = u.ReactCurrentOwner, De = u.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var o = e._owner, s = re(e.type, e._source, o ? o.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function ge(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Ne() {
      {
        if (de.current) {
          var e = C(de.current.type);
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
    var Fe = {};
    function lt(e) {
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
        var s = lt(o);
        if (Fe[s])
          return;
        Fe[s] = !0;
        var h = "";
        e && e._owner && e._owner !== de.current && (h = " It was passed a child from " + C(e._owner.type) + "."), G(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, h), G(null);
      }
    }
    function Le(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var s = 0; s < e.length; s++) {
            var h = e[s];
            ge(h) && Ae(h, o);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var R = F(e);
          if (typeof R == "function" && R !== e.entries)
            for (var S = R.call(e), p; !(p = S.next()).done; )
              ge(p.value) && Ae(p.value, o);
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
        else if (typeof o == "object" && (o.$$typeof === j || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === _))
          s = o.propTypes;
        else
          return;
        if (s) {
          var h = C(o);
          Je(s, e.props, "prop", h, e);
        } else if (o.PropTypes !== void 0 && !he) {
          he = !0;
          var R = C(o);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var o = Object.keys(e.props), s = 0; s < o.length; s++) {
          var h = o[s];
          if (h !== "children" && h !== "key") {
            G(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function Ie(e, o, s, h, R, S) {
      {
        var p = f(e);
        if (!p) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = at(R);
          W ? y += W : y += Ne();
          var D;
          e === null ? D = "null" : ue(e) ? D = "array" : e !== void 0 && e.$$typeof === i ? (D = "<" + (C(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : D = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, y);
        }
        var N = it(e, o, s, R, S);
        if (N == null)
          return N;
        if (p) {
          var Y = o.children;
          if (Y !== void 0)
            if (h)
              if (ue(Y)) {
                for (var z = 0; z < Y.length; z++)
                  Le(Y[z], e);
                Object.freeze && Object.freeze(Y);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(Y, e);
        }
        return e === w ? ct(N) : st(N), N;
      }
    }
    function ut(e, o, s) {
      return Ie(e, o, s, !0);
    }
    function ft(e, o, s) {
      return Ie(e, o, s, !1);
    }
    var dt = ft, ht = ut;
    ee.Fragment = w, ee.jsx = dt, ee.jsxs = ht;
  }()), ee;
}
process.env.NODE_ENV === "production" ? me.exports = wt() : me.exports = Et();
var k = me.exports;
function U(v, i) {
  const T = v.match(/^(\s*)(```|> )/);
  return i === !0 ? T : T != null;
}
const yt = (v) => v.match(/^(\s*)> /) != null, pt = (v) => v.split(/[\r\n]/), Tt = (v) => v.split(/[\r\n]/).length, Ye = (v, i) => {
  const T = i.split(/[\r\n]/);
  let w = 0;
  for (let O = 0; O < T.length; O++)
    if (w += T[O].length + 1, w > v)
      return [v - (w - T[O].length - 1), O];
  throw new Error("error getPos");
}, Ct = (v, i) => {
  const T = Ye(v, i), w = Tt(i);
  return T[1] === w - 1;
}, Rt = (v, i) => Ye(v, i)[1] === 0, bt = (v) => {
  const i = v.match(/^\s*`{3}(.*)/), T = pt(v).slice(1).join(`
`);
  return [i == null ? void 0 : i[1], T];
}, Me = ve.forwardRef(
  function(i, T) {
    const [w, O] = ae({
      prefix: "",
      selection: "",
      suffix: ""
    }), P = () => {
      O({ prefix: "", selection: "", suffix: "" });
    }, [A, b] = ae({
      index: 0
    }), j = (u, g) => {
      let c = 0, d = "", t = !1;
      for (let n = 0; n < u.length; n++) {
        const r = u[n];
        r === "[" ? (c++, d = "") : r === "]" ? (c > 0 && (c--, d = "", t = !0), c === 0 && (t = !1)) : c > 0 && !t && (d += r);
      }
      let a = "";
      if (c > 0) {
        let n = 0, r = !1;
        for (let m = 0; m < g.length; m++) {
          const f = g[m];
          f === "[" ? n++ : f === "]" ? (n--, r = !0) : r || (a += f);
        }
        return n === 0 && (a = ""), d + a;
      }
      return "";
    }, $ = (u) => {
      let g = u.length - 1;
      for (let c = u.length - 1; c >= 0; c--)
        if (u[c] === "[") {
          g = c;
          break;
        }
      return u.slice(0, -(u.length - 1 - g));
    }, x = (u) => {
      let g = 0;
      for (let c = 0; c < u.length; c++)
        if (u[c] === "]") {
          g = c;
          break;
        }
      return u.slice(g);
    }, _ = j(w.prefix, w.suffix);
    q(() => {
      !B.current || !F.current || (B.current.style.display = "inline", w.selection === "" && _ === "" ? F.current.style.display = "none" : F.current.style.display = "inline", F.current.style.left = B.current.getBoundingClientRect().width + "px", F.current.style.top = -F.current.getBoundingClientRect().height + "px", B.current.style.display = "none");
    }, [w, _]), q(() => {
      b({ index: 0 });
    }, [i.value]);
    const L = function(u) {
      O({
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
    let I = i.popupHandlers, V = !1;
    w.selection === "" && _ !== "" && (I = i.keywords.filter((u) => u.indexOf(_) != -1).map((u, g) => ({
      name: u,
      handler: () => {
        const c = $(w.prefix), d = I[g].name;
        let t = x(w.suffix), a = (c + d).length;
        return (t.length == 0 || t[0] != "]") && (t = "]" + t, a += 1), {
          value: c + d + t,
          column: a
        };
      }
    })), I.length > 0 && (V = !0));
    const B = J(null), F = J(null);
    return /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: i.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ k.jsx(
            "textarea",
            {
              ref: T,
              value: i.value,
              onPaste: i.onPaste,
              onCompositionStart: i.onCompositionStart,
              onCompositionEnd: (u) => {
                i.onCompositionEnd(u), L(u);
              },
              onChange: i.onChange,
              onKeyDown: (u) => {
                if (u.key === "Enter" && u.keyCode === 13 && V) {
                  const g = I[A.index].handler(null);
                  i.setLine(g.value), i.setCursor(g.column), u.preventDefault();
                } else
                  u.key == "Tab" && V ? (b((g) => {
                    let c = g.index + 1;
                    return c >= I.length && (c = 0), { index: c };
                  }), u.preventDefault()) : i.onKeyDown(w)(u);
              },
              onSelect: L
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: "popup", ref: F, children: I.map((u, g) => /* @__PURE__ */ k.jsx(
            "div",
            {
              className: A.index == g ? "selected" : "",
              onClick: () => {
                const c = u.handler(w);
                i.setLine(c.value), i.setCursor(c.column), P();
              },
              children: u.name
            },
            g
          )) }),
          /* @__PURE__ */ k.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: B, children: w.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), kt = (v, i = null) => {
  const T = J(i);
  return q(() => {
    v && (typeof v == "function" ? v(T.current) : v.current = T.current);
  }, [v]), T;
}, xt = gt(
  function(i, T) {
    const w = kt(T);
    q(() => {
      if (!w.current)
        return;
      const t = w.current.style.display;
      w.current.style.display = "block", w.current.style.height = "0px", w.current.style.height = w.current.scrollHeight + "px", w.current.style.display = t;
    }, [i.value, w, i.isFocus]);
    const O = (t, a, n) => {
      var f;
      const r = ["line"], m = t.match(/^(\s*)- /);
      if (t.indexOf("# ") === 0)
        r.push("h1-style");
      else if (t.indexOf("## ") === 0)
        r.push("h2-style");
      else if (t.indexOf("### ") === 0)
        r.push("h3-style");
      else if (m)
        r.push("list-style"), r.push("list-indent-" + m[1].length / 2);
      else if (U(t)) {
        const l = U(t, !0);
        r.push("list-indent-" + (((f = l == null ? void 0 : l[1]) == null ? void 0 : f.length) ?? 0) / 2);
      }
      return a && r.push("focus"), n && r.push("select"), r.join(" ");
    }, P = (t) => t ? [] : ["hide"], A = (t) => t ? "hide" : "", b = (t, a, n) => {
      let r = -1, m = "";
      return a.forEach(function(f) {
        const l = t.indexOf(f, n);
        l !== -1 && (r === -1 || r > l) && (r = l, m = f);
      }), { pos: r, target: m };
    }, j = i.onLinkClick, $ = Z((t) => {
      let a = 0;
      const n = [];
      for (; ; ) {
        const r = b(t, ["http://", "https://", " ", "["], a);
        if (r.target === "https://" || r.target === "http://") {
          a !== r.pos && n.push(t.slice(a, r.pos));
          const m = b(
            t,
            [" ", "\r", `
`],
            r.pos + r.target.length
          );
          if (m.pos !== -1) {
            const f = t.slice(r.pos, m.pos);
            n.push(/* @__PURE__ */ k.jsx("a", { href: f, children: f })), a = m.pos;
          } else {
            const f = t.slice(r.pos, t.length);
            n.push(/* @__PURE__ */ k.jsx("a", { href: f, children: f })), a = t.length;
            break;
          }
        } else if (r.target == " ")
          n.push(t.slice(a, r.pos)), n.push(" "), a = r.pos + r.target.length;
        else if (r.target == "[") {
          a !== r.pos && n.push(t.slice(a, r.pos));
          const m = b(t, ["]"], r.pos + r.target.length);
          if (m.pos !== -1) {
            const f = t.slice(r.pos, m.pos + 1);
            n.push([/* @__PURE__ */ k.jsx("span", { className: "braket", onClick: (l) => {
              j(f.slice(1, f.length - 1)), l.stopPropagation();
            }, children: f }, a)]), a = m.pos + 1;
          } else
            n.push(t.slice(a, t.length)), a = t.length;
        } else {
          n.push(t.slice(a, t.length)), a = t.length;
          break;
        }
      }
      return n;
    }, [j]), x = Z((t, a) => {
      const n = t ? i.blockStyles[t] : void 0;
      return n ? n(a) : /* @__PURE__ */ k.jsx("pre", { children: a });
    }, [i.blockStyles]), _ = Z((t) => {
      const a = t.match(/^(\s*)```.*/), n = (a == null ? void 0 : a[1]) ?? "";
      return t = t.slice(n.length).split(`
`).map((r) => n + r).join(`
`), t;
    }, []), L = Z((t) => {
      const a = t.match(/^(\s*)> /), n = (a == null ? void 0 : a[1]) ?? "";
      return t = t.slice(n.length).split(`
`).map(
        (r, m) => n + (m === 0 ? "" : "> ") + r
      ).join(`
`), t;
    }, []), I = Z((t) => {
      var a;
      if (console.log(t), U(t))
        if (yt(t)) {
          const n = t.match(/\s*> /), r = t.slice((a = n == null ? void 0 : n[0]) == null ? void 0 : a.length);
          return /* @__PURE__ */ k.jsxs("div", { children: [
            /* @__PURE__ */ k.jsx("pre", { className: "for-copy", children: L(t) }),
            /* @__PURE__ */ k.jsx("div", { className: "no-select", children: x("pre", r) })
          ] });
        } else {
          const n = bt(t);
          return /* @__PURE__ */ k.jsxs("div", { children: [
            /* @__PURE__ */ k.jsx("pre", { className: "for-copy", children: _(t + "\n```") }),
            /* @__PURE__ */ k.jsx("div", { className: "no-select", children: x(n[0], n[1]) })
          ] });
        }
      else {
        const n = ["elm"], r = t.match(/^(\s*)-( .*)$/);
        let m = null;
        return t.indexOf("# ") === 0 || t.indexOf("## ") === 0 || t.indexOf("### ") === 0 || r && (t = r[2], m = /* @__PURE__ */ k.jsx("pre", { className: "for-copy-inline", children: r[1] + "-" })), /* @__PURE__ */ k.jsxs("div", { className: n.join(" "), children: [
          m,
          $(t)
        ] });
      }
    }, [_, L, x, $]), V = (t) => {
      const a = t.match(/^(\s*-)( .*)$/);
      let n = "";
      if (a)
        t = a[2], n = a[1];
      else {
        const r = t.match(/^(\s*)(```.*|> )/);
        r && (n = r[1], t = t.slice(r[1].length));
      }
      return [n, t];
    }, B = J(null), F = (t) => (a) => {
      if (a.buttons !== 0 && B.current) {
        t();
        const n = new Range();
        n.selectNodeContents(B.current);
        const r = document.getSelection();
        if (!r)
          throw new Error("selection is null");
        r.empty(), r.addRange(n);
      }
    }, u = V(i.value), g = u[0], c = u[1], d = mt(() => I(i.value), [
      i.value,
      I
    ]);
    return U(c) ? /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: O(i.value, i.isFocus, i.isSelect),
        ref: B,
        "data-lineno": i.row,
        onClick: i.onClick,
        children: [
          /* @__PURE__ */ k.jsx(
            "div",
            {
              className: ["line-item"].concat(P(i.isFocus)).join(" "),
              onMouseLeave: F(i.selectThisLine),
              children: /* @__PURE__ */ k.jsx(
                Me,
                {
                  ref: w,
                  value: c,
                  keywords: i.keywords,
                  setLine: i.setLine(g),
                  setCursor: i.setCursor,
                  onCompositionStart: i.onCompositionStart,
                  onCompositionEnd: i.onCompositionEnd,
                  onChange: i.onChange(g),
                  popupHandlers: [],
                  onKeyDown: () => i.onKeyDown(g, c)
                }
              )
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: "line-item", children: d })
        ]
      }
    ) : /* @__PURE__ */ k.jsxs(
      "div",
      {
        className: O(i.value, i.isFocus, i.isSelect),
        ref: B,
        "data-lineno": i.row,
        onClick: i.onClick,
        children: [
          /* @__PURE__ */ k.jsx(
            "div",
            {
              className: P(i.isFocus) + " container",
              onMouseLeave: F(i.selectThisLine),
              children: /* @__PURE__ */ k.jsx(
                Me,
                {
                  ref: w,
                  value: c,
                  keywords: i.keywords,
                  setLine: i.setLine(g),
                  setCursor: i.setCursor,
                  onPaste: i.onPaste(i.row),
                  onCompositionStart: i.onCompositionStart,
                  onCompositionEnd: i.onCompositionEnd,
                  onChange: i.onChange(g),
                  popupHandlers: i.textPopupHandlers,
                  onKeyDown: (t) => (a) => {
                    a.key === "Enter" && a.keyCode === 13 && t.selection !== "" ? a.preventDefault() : i.onKeyDown(g, c)(a);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ k.jsx("div", { className: A(i.isFocus), children: d })
        ]
      }
    );
  }
), _t = (v) => {
  const i = v.lines, T = v.setLines, w = v.onChange;
  q(() => {
    w(i);
  }, [i, w]);
  const O = J(!1), [P, A] = ae({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [b, j] = ae([0, 0]), $ = (c) => c == null ? null : c instanceof HTMLElement && c.classList.contains("line") ? c : $(c.parentElement);
  let x, _, L = !1;
  const I = () => {
    L = !0;
    const c = document.getSelection();
    c && (x = $(c.anchorNode), _ = $(c.focusNode), x !== _ && A({ row: -1, col: 0 }));
  }, V = () => {
    var c, d, t, a;
    if (L && (L = !1, x && _ && x !== _)) {
      const n = new Range();
      if (n.setStart(x, 0), n.setEnd(_, _.children.length), document.getSelection().empty(), document.getSelection().addRange(n), !((c = x.dataset) != null && c.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const r = parseInt((d = x.dataset) == null ? void 0 : d.lineno);
      if (!((t = _.dataset) != null && t.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const m = parseInt((a = _.dataset) == null ? void 0 : a.lineno);
      j([r, m]);
    }
  }, B = () => () => {
    A(() => ({ row: -1, col: 0 })), L = !0;
  }, F = J(null);
  q(() => {
    var c;
    if (F.current)
      if (b[1] - b[0] >= 1) {
        F.current.style.display = "block";
        const d = (c = document.getSelection()) == null ? void 0 : c.focusNode;
        if (!d)
          throw new Error("focusNode is null");
        if (!(d instanceof Element))
          throw new Error("focusNode is not Element");
        const t = d.getBoundingClientRect(), a = t.bottom, n = t.x + t.width / 2;
        F.current.style.left = n + "px", F.current.style.top = a + "px";
      } else
        F.current.style.display = "none";
  }, [b]);
  const u = (c) => (d) => {
    const a = d.clipboardData.getData("text").split(/\r\n|\n/);
    if (a.length === 1)
      return !0;
    const n = [];
    let r = [], m = !1, f = "";
    return a.forEach((l) => {
      const E = l.match(/^(\s*)(```.*)/);
      m ? l.indexOf(f + "```") === 0 ? (n.push(r.join(`
`)), m = !1, r = []) : (f !== "" && l.indexOf(f) !== 0 && (n.push(r.join(`
`)), m = !1, r = [], n.push(l)), r.push(l.slice(f.length))) : E ? (m = !0, f = E[1], r.push(l)) : n.push(l);
    }), r.length !== 0 && n.push(r.join(`
`)), T((l) => (l[c] = l[c] + n[0], l.splice(c + 1, 0, ...n.slice(1)), [...l])), d.preventDefault(), !1;
  };
  q(() => {
    document.addEventListener("selectionchange", I), document.addEventListener("pointerup", V);
  }, []);
  const g = J([]);
  return q(() => {
    if (P.row !== -1 && O.current === !1) {
      const c = g.current[P.row];
      if (!c.current)
        return;
      c.current.focus();
      let d = P.colEnd;
      (d === void 0 || d === -1) && (d = P.col), console.log("EFFECT", "col:", P.col, "end:", d), c.current.setSelectionRange(P.col, d, P.direction);
    }
  }, [P, i]), i.forEach((c, d) => {
    g.current[d] = vt();
  }), /* @__PURE__ */ k.jsxs("div", { className: "editor", children: [
    i.map((c, d) => /* @__PURE__ */ k.jsx(
      xt,
      {
        ref: g.current[d],
        isFocus: d === P.row,
        isSelect: b[0] <= d && d <= b[1],
        row: d,
        value: c,
        textPopupHandlers: v.textPopupHandlers,
        keywords: v.keywords,
        blockStyles: v.blockStyles,
        selectThisLine: B(),
        setLine: (t) => (a) => ((n) => {
          T((r) => (r[n] = t + a, [...r]));
        })(d),
        setCursor: (t) => ((a) => {
          A((n) => ({
            row: a,
            col: t,
            colEnd: -1,
            direction: n.direction
          }));
        })(d),
        onPaste: u,
        onCompositionStart: () => {
          O.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          O.current = !1, console.log("composition end");
        },
        onChange: (t) => (a) => ((n) => {
          if (console.log("onChange", O.current), O.current === !1) {
            const r = a.target.selectionStart, m = a.target.selectionEnd, f = a.target.selectionDirection;
            A((l) => ({
              row: l.row,
              col: r,
              colEnd: m,
              direction: f
            }));
          }
          T((r) => (r[n] = t + a.target.value, [...r]));
        })(d),
        onKeyDown: (t, a) => (n) => {
          let r = n.currentTarget.selectionStart, m = n.currentTarget.selectionEnd, f = n.currentTarget.selectionDirection;
          A((l) => {
            switch (n.key) {
              case "ArrowLeft": {
                if (n.currentTarget != null && n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0) {
                  if (l.row === 0)
                    return l;
                  const E = i[P.row - 1].length;
                  return n.preventDefault(), {
                    row: l.row - 1,
                    col: E,
                    colEnd: -1,
                    direction: f
                  };
                }
                return n.shiftKey ? r == m ? (r--, f = "backward") : f === "forward" ? m-- : f === "backward" && r-- : (r--, m = -1), n.preventDefault(), {
                  row: l.row,
                  col: r,
                  colEnd: m,
                  direction: f
                };
              }
              case "ArrowRight": {
                const E = -t.length + i[P.row].length;
                return n.currentTarget != null && n.currentTarget.selectionStart === E && n.currentTarget.selectionEnd === E ? l.row === i.length - 1 ? l : (n.preventDefault(), {
                  row: l.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: f
                }) : (n.shiftKey ? f === "forward" ? m++ : f === "backward" && r++ : (r < m && (r = m), r++, m = -1), n.preventDefault(), {
                  row: l.row,
                  col: r,
                  colEnd: m,
                  direction: f
                });
              }
              case "ArrowUp":
                return U(a) && !Rt(n.currentTarget.selectionStart, a) || l.row === 0 ? l : (n.preventDefault(), {
                  row: l.row - 1,
                  col: n.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: f
                });
              case "ArrowDown":
                return U(a) && !Ct(n.currentTarget.selectionStart, a) || l.row === i.length - 1 ? l : (n.preventDefault(), {
                  row: l.row + 1,
                  col: n.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: f
                });
              case "Backspace":
                if (t.length !== 0 && (n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0 || n.currentTarget.selectionStart === 1 && n.currentTarget.selectionEnd === 1))
                  t.length !== 0 && (T((E) => (t.length === 1 ? (E[l.row] = n.currentTarget.value.slice(1), r--, r === -1 && r++) : t.length > 0 && (E[l.row] = t.slice(2) + n.currentTarget.value), [...E])), n.preventDefault());
                else if (n.currentTarget != null && n.currentTarget.selectionStart === 0 && n.currentTarget.selectionEnd === 0) {
                  if (l.row === 0)
                    return l;
                  const E = i[P.row - 1].length;
                  return T((C) => (U(C[l.row - 1]) ? C[l.row - 1] += `
` + C[l.row] : C[l.row - 1] += C[l.row], C.splice(l.row, 1), [...C])), n.preventDefault(), {
                    row: l.row - 1,
                    col: E,
                    colEnd: -1,
                    direction: f
                  };
                }
                return console.log("normal Backspace", r), {
                  row: l.row,
                  col: r,
                  colEnd: m,
                  direction: f
                };
              case "Tab":
                return T((E) => {
                  if (n.shiftKey)
                    t.length === 1 ? (E[l.row] = n.currentTarget.value.slice(1), r--) : t.length > 0 && (E[l.row] = t.slice(2) + n.currentTarget.value);
                  else {
                    let C = "-";
                    U(n.currentTarget.value) && (C = " "), t.length === 0 ? (E[l.row] = C + " " + n.currentTarget.value, r++) : E[l.row] = "  " + t + n.currentTarget.value;
                  }
                  return A((C) => ({
                    row: C.row,
                    col: r,
                    colEnd: -1,
                    direction: f
                  })), [...E];
                }), n.preventDefault(), {
                  row: l.row,
                  col: r,
                  colEnd: -1,
                  direction: f
                };
              case "Enter":
                return n.keyCode === 13 ? U(a) && !n.shiftKey ? l : (T((E) => {
                  const C = t.length + n.currentTarget.selectionStart;
                  let M = E[l.row].slice(C);
                  if (U(a)) {
                    const K = E[l.row];
                    K[K.length - 1] === `
` ? E[l.row] = E[l.row].slice(
                      0,
                      C - 1
                    ) : E[l.row] = E[l.row].slice(
                      0,
                      C
                    ), M.length > 0 && M[0] === `
` && (M = M.slice(1));
                  } else
                    E[l.row] = E[l.row].slice(
                      0,
                      C
                    );
                  return t.length !== 0 ? E.splice(
                    l.row + 1,
                    0,
                    t + " " + M
                  ) : E.splice(l.row + 1, 0, M), [...E];
                }), n.preventDefault(), {
                  row: l.row + 1,
                  col: t.length,
                  colEnd: -1,
                  direction: f
                }) : l;
              case " ":
                return console.log("space", r), (r === 0 || r === 1 && t.length >= 1) && (T((E) => {
                  let C = "-";
                  return U(n.currentTarget.value) && (C = " "), t.length === 0 ? (E[l.row] = C + " " + n.currentTarget.value, r++) : E[l.row] = "  " + t + n.currentTarget.value, [...E];
                }), n.preventDefault()), {
                  row: l.row,
                  col: r,
                  colEnd: -1,
                  direction: f
                };
              default:
                return l;
            }
          });
        },
        onLinkClick: v.onLinkClick,
        onClick: (t) => {
          if (P.row !== d) {
            const a = t.target.selectionStart;
            j([d, d]), A(() => ({ row: d, col: a }));
          }
        }
      },
      d
    )),
    /* @__PURE__ */ k.jsx("div", { className: "popup", ref: F, children: v.linePopupHandlers.map((c, d) => /* @__PURE__ */ k.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (c.handler(
            i.slice(b[0], b[1] + 1),
            b
          ), j([b[1], b[1]]));
        },
        onTouchStart: () => {
          c.handler(i.slice(b[0], b[1] + 1)), j([b[1], b[1]]);
        },
        children: c.name
      },
      d
    )) })
  ] });
};
export {
  _t as Editor
};
