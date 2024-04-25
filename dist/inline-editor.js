import ve, { useState as te, useEffect as K, useRef as J, forwardRef as gt, useCallback as Z, createRef as mt } from "react";
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
function vt() {
  if (We)
    return Q;
  We = 1;
  var w = ve, i = Symbol.for("react.element"), C = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, O = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function F(k, P, I) {
    var _, j = {}, A = null, $ = null;
    I !== void 0 && (A = "" + I), P.key !== void 0 && (A = "" + P.key), P.ref !== void 0 && ($ = P.ref);
    for (_ in P)
      E.call(P, _) && !S.hasOwnProperty(_) && (j[_] = P[_]);
    if (k && k.defaultProps)
      for (_ in P = k.defaultProps, P)
        j[_] === void 0 && (j[_] = P[_]);
    return { $$typeof: i, type: k, key: A, ref: $, props: j, _owner: O.current };
  }
  return Q.Fragment = C, Q.jsx = F, Q.jsxs = F, Q;
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
function wt() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var w = ve, i = Symbol.for("react.element"), C = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), k = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), U = Symbol.iterator, Y = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[Y];
      return typeof r == "function" ? r : null;
    }
    var d = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), m = 1; m < r; m++)
          s[m - 1] = arguments[m];
        c("error", e, s);
      }
    }
    function c(e, r, s) {
      {
        var m = d.ReactDebugCurrentFrame, b = m.getStackAddendum();
        b !== "" && (r += "%s", s = s.concat([b]));
        var x = s.map(function(p) {
          return String(p);
        });
        x.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var h = !1, f = !1, n = !1, t = !1, o = !1, l;
    l = Symbol.for("react.module.reference");
    function u(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === S || o || e === O || e === I || e === _ || t || e === $ || h || f || n || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === j || e.$$typeof === F || e.$$typeof === k || e.$$typeof === P || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === l || e.getModuleId !== void 0));
    }
    function a(e, r, s) {
      var m = e.displayName;
      if (m)
        return m;
      var b = r.displayName || r.name || "";
      return b !== "" ? s + "(" + b + ")" : s;
    }
    function g(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case C:
          return "Portal";
        case S:
          return "Profiler";
        case O:
          return "StrictMode";
        case I:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var r = e;
            return g(r) + ".Consumer";
          case F:
            var s = e;
            return g(s._context) + ".Provider";
          case P:
            return a(e, e.render, "ForwardRef");
          case j:
            var m = e.displayName || null;
            return m !== null ? m : R(e.type) || "Memo";
          case A: {
            var b = e, x = b._payload, p = b._init;
            try {
              return R(p(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, q = 0, we, Ee, ye, pe, Te, Ce, Re;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ue() {
      {
        if (q === 0) {
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
        q++;
      }
    }
    function Ve() {
      {
        if (q--, q === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, e, {
              value: we
            }),
            info: B({}, e, {
              value: Ee
            }),
            warn: B({}, e, {
              value: ye
            }),
            error: B({}, e, {
              value: pe
            }),
            group: B({}, e, {
              value: Te
            }),
            groupCollapsed: B({}, e, {
              value: Ce
            }),
            groupEnd: B({}, e, {
              value: Re
            })
          });
        }
        q < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = d.ReactCurrentDispatcher, se;
    function ne(e, r, s) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (b) {
            var m = b.stack.trim().match(/\n( *(at )?)/);
            se = m && m[1] || "";
          }
        return `
` + se + e;
      }
    }
    var ce = !1, re;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      re = new He();
    }
    function ke(e, r) {
      if (!e || ce)
        return "";
      {
        var s = re.get(e);
        if (s !== void 0)
          return s;
      }
      var m;
      ce = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ae.current, ae.current = null, Ue();
      try {
        if (r) {
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
              m = H;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (H) {
              m = H;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            m = H;
          }
          e();
        }
      } catch (H) {
        if (H && m && typeof H.stack == "string") {
          for (var y = H.stack.split(`
`), W = m.stack.split(`
`), D = y.length - 1, N = W.length - 1; D >= 1 && N >= 0 && y[D] !== W[N]; )
            N--;
          for (; D >= 1 && N >= 0; D--, N--)
            if (y[D] !== W[N]) {
              if (D !== 1 || N !== 1)
                do
                  if (D--, N--, N < 0 || y[D] !== W[N]) {
                    var M = `
` + y[D].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, M), M;
                  }
                while (D >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ae.current = x, Ve(), Error.prepareStackTrace = b;
      }
      var z = e ? e.displayName || e.name : "", $e = z ? ne(z) : "";
      return typeof e == "function" && re.set(e, $e), $e;
    }
    function Ke(e, r, s) {
      return ke(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function oe(e, r, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, qe(e));
      if (typeof e == "string")
        return ne(e);
      switch (e) {
        case I:
          return ne("Suspense");
        case _:
          return ne("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            return Ke(e.render);
          case j:
            return oe(e.type, r, s);
          case A: {
            var m = e, b = m._payload, x = m._init;
            try {
              return oe(x(b), r, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, xe = {}, Se = d.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, s = oe(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(s);
      } else
        Se.setExtraStackFrame(null);
    }
    function Je(e, r, s, m, b) {
      {
        var x = Function.call.bind(ie);
        for (var p in e)
          if (x(e, p)) {
            var y = void 0;
            try {
              if (typeof e[p] != "function") {
                var W = Error((m || "React class") + ": " + s + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              y = e[p](r, p, m, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              y = D;
            }
            y && !(y instanceof Error) && (le(b), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", s, p, typeof y), le(null)), y instanceof Error && !(y.message in xe) && (xe[y.message] = !0, le(b), v("Failed %s type: %s", s, y.message), le(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ue(e) {
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
    var X = d.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Oe, fe;
    fe = {};
    function Qe(e) {
      if (ie.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function et(e) {
      if (ie.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, r) {
      if (typeof e.ref == "string" && X.current && r && X.current.stateNode !== r) {
        var s = R(X.current.type);
        fe[s] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(X.current.type), e.ref), fe[s] = !0);
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
    var ot = function(e, r, s, m, b, x, p) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: s,
        props: p,
        // Record the component responsible for creating this element.
        _owner: x
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
        value: m
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function it(e, r, s, m, b) {
      {
        var x, p = {}, y = null, W = null;
        s !== void 0 && (je(s), y = "" + s), et(r) && (je(r.key), y = "" + r.key), Qe(r) && (W = r.ref, tt(r, b));
        for (x in r)
          ie.call(r, x) && !Ze.hasOwnProperty(x) && (p[x] = r[x]);
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (x in D)
            p[x] === void 0 && (p[x] = D[x]);
        }
        if (y || W) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && nt(p, N), W && rt(p, N);
        }
        return ot(e, y, W, b, m, X.current, p);
      }
    }
    var de = d.ReactCurrentOwner, De = d.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, s = oe(e.type, e._source, r ? r.type : null);
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
          var e = R(de.current.type);
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
        var m = "";
        e && e._owner && e._owner !== de.current && (m = " It was passed a child from " + R(e._owner.type) + "."), G(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, m), G(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ue(e))
          for (var s = 0; s < e.length; s++) {
            var m = e[s];
            ge(m) && Ae(m, r);
          }
        else if (ge(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = L(e);
          if (typeof b == "function" && b !== e.entries)
            for (var x = b.call(e), p; !(p = x.next()).done; )
              ge(p.value) && Ae(p.value, r);
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
        r.$$typeof === j))
          s = r.propTypes;
        else
          return;
        if (s) {
          var m = R(r);
          Je(s, e.props, "prop", m, e);
        } else if (r.PropTypes !== void 0 && !he) {
          he = !0;
          var b = R(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ct(e) {
      {
        for (var r = Object.keys(e.props), s = 0; s < r.length; s++) {
          var m = r[s];
          if (m !== "children" && m !== "key") {
            G(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function Ie(e, r, s, m, b, x) {
      {
        var p = u(e);
        if (!p) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = lt(b);
          W ? y += W : y += Ne();
          var D;
          e === null ? D = "null" : ue(e) ? D = "array" : e !== void 0 && e.$$typeof === i ? (D = "<" + (R(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : D = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, y);
        }
        var N = it(e, r, s, b, x);
        if (N == null)
          return N;
        if (p) {
          var M = r.children;
          if (M !== void 0)
            if (m)
              if (ue(M)) {
                for (var z = 0; z < M.length; z++)
                  Le(M[z], e);
                Object.freeze && Object.freeze(M);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(M, e);
        }
        return e === E ? ct(N) : st(N), N;
      }
    }
    function ut(e, r, s) {
      return Ie(e, r, s, !0);
    }
    function ft(e, r, s) {
      return Ie(e, r, s, !1);
    }
    var dt = ft, ht = ut;
    ee.Fragment = E, ee.jsx = dt, ee.jsxs = ht;
  }()), ee;
}
process.env.NODE_ENV === "production" ? me.exports = vt() : me.exports = wt();
var T = me.exports;
function V(w, i) {
  const C = w.match(/^(\s*)(```|> )/);
  return i === !0 ? C : C != null;
}
const Et = (w) => w.match(/^(\s*)> /) != null, yt = (w) => w.split(/[\r\n]/), pt = (w) => w.split(/[\r\n]/).length, Me = (w, i) => {
  const C = i.split(/[\r\n]/);
  let E = 0;
  for (let O = 0; O < C.length; O++)
    if (E += C[O].length + 1, E > w)
      return [w - (E - C[O].length - 1), O];
  throw new Error("error getPos");
}, Tt = (w, i) => {
  const C = Me(w, i), E = pt(i);
  return C[1] === E - 1;
}, Ct = (w, i) => Me(w, i)[1] === 0, Rt = (w) => {
  const i = w.match(/^\s*`{3}(.*)/), C = yt(w).slice(1).join(`
`);
  return [i == null ? void 0 : i[1], C];
}, Ye = ve.forwardRef(
  function(i, C) {
    const [E, O] = te({
      prefix: "",
      selection: "",
      suffix: ""
    }), S = () => {
      O({ prefix: "", selection: "", suffix: "" });
    }, [F, k] = te({
      index: 0
    }), P = (d, v) => {
      let c = 0, h = "", f = !1;
      for (let t = 0; t < d.length; t++) {
        const o = d[t];
        o === "[" ? (c++, h = "") : o === "]" ? (c > 0 && (c--, h = "", f = !0), c === 0 && (f = !1)) : c > 0 && !f && (h += o);
      }
      let n = "";
      if (c > 0) {
        let t = 0, o = !1;
        for (let l = 0; l < v.length; l++) {
          const u = v[l];
          u === "[" ? t++ : u === "]" ? (t--, o = !0) : o || (n += u);
        }
        return t === 0 && (n = ""), h + n;
      }
      return "";
    }, I = (d) => {
      let v = d.length - 1;
      for (let c = d.length - 1; c >= 0; c--)
        if (d[c] === "[") {
          v = c;
          break;
        }
      return d.slice(0, -(d.length - 1 - v));
    }, _ = (d) => {
      let v = 0;
      for (let c = 0; c < d.length; c++)
        if (d[c] === "]") {
          v = c;
          break;
        }
      return d.slice(v);
    }, j = P(E.prefix, E.suffix);
    K(() => {
      !Y.current || !L.current || (Y.current.style.display = "inline", E.selection === "" && j === "" ? L.current.style.display = "none" : L.current.style.display = "inline", L.current.style.left = Y.current.getBoundingClientRect().width + "px", L.current.style.top = -L.current.getBoundingClientRect().height + "px", Y.current.style.display = "none");
    }, [E, j]), K(() => {
      k({ index: 0 });
    }, [i.value]);
    const A = function(d) {
      O({
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
    let $ = i.popupHandlers, U = !1;
    E.selection === "" && j !== "" && ($ = i.keywords.filter((d) => d.indexOf(j) != -1).map((d, v) => ({
      name: d,
      handler: () => {
        const c = I(E.prefix), h = $[v].name;
        let f = _(E.suffix), n = (c + h).length;
        return (f.length == 0 || f[0] != "]") && (f = "]" + f, n += 1), {
          value: c + h + f,
          column: n
        };
      }
    })), $.length > 0 && (U = !0));
    const Y = J(null), L = J(null);
    return /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: i.className + " container",
        style: { position: "relative" },
        children: [
          /* @__PURE__ */ T.jsx(
            "textarea",
            {
              ref: C,
              value: i.value,
              onPaste: i.onPaste,
              onCompositionStart: i.onCompositionStart,
              onCompositionEnd: (d) => {
                i.onCompositionEnd(d), A(d);
              },
              onChange: i.onChange,
              onKeyDown: (d) => {
                if (d.key === "Enter" && d.keyCode === 13 && U) {
                  const v = $[F.index].handler(null);
                  i.setLine(v.value), i.setCursor(v.column), d.preventDefault();
                } else
                  d.key == "Tab" && U ? (k((v) => {
                    let c = v.index + 1;
                    return c >= $.length && (c = 0), { index: c };
                  }), d.preventDefault()) : i.onKeyDown(E)(d);
              },
              onSelect: A
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: "popup", ref: L, children: $.map((d, v) => /* @__PURE__ */ T.jsx(
            "div",
            {
              className: F.index == v ? "selected" : "",
              onClick: () => {
                const c = d.handler(E);
                i.setLine(c.value), i.setCursor(c.column), S();
              },
              children: d.name
            },
            v
          )) }),
          /* @__PURE__ */ T.jsx("span", { className: "menu-pos", style: { display: "none" }, ref: Y, children: E.prefix.replace(" ", " ") })
        ]
      }
    );
  }
), bt = (w, i = null) => {
  const C = J(i);
  return K(() => {
    w && (typeof w == "function" ? w(C.current) : w.current = C.current);
  }, [w]), C;
}, kt = gt(
  function(i, C) {
    const E = bt(C), [O, S] = te();
    K(() => {
      if (!E.current)
        return;
      const n = E.current.style.display;
      E.current.style.display = "block", E.current.style.height = "0px", E.current.style.height = E.current.scrollHeight + "px", E.current.style.display = n;
    }, [i.value, E, i.isFocus]);
    const F = (n, t, o) => {
      var a;
      const l = ["line"], u = n.match(/^(\s*)- /);
      if (n.indexOf("# ") === 0)
        l.push("h1-style");
      else if (n.indexOf("## ") === 0)
        l.push("h2-style");
      else if (n.indexOf("### ") === 0)
        l.push("h3-style");
      else if (u)
        l.push("list-style"), l.push("list-indent-" + u[1].length / 2);
      else if (V(n)) {
        const g = V(n, !0);
        l.push("list-indent-" + (((a = g == null ? void 0 : g[1]) == null ? void 0 : a.length) ?? 0) / 2);
      }
      return t && l.push("focus"), o && l.push("select"), l.join(" ");
    }, k = (n) => n ? [] : ["hide"], P = (n) => n ? "hide" : "", I = (n, t, o) => {
      let l = -1, u = "";
      return t.forEach(function(a) {
        const g = n.indexOf(a, o);
        g !== -1 && (l === -1 || l > g) && (l = g, u = a);
      }), { pos: l, target: u };
    }, _ = i.onLinkClick, j = Z((n) => {
      let t = 0;
      const o = [];
      for (; ; ) {
        const l = I(n, ["http://", "https://", " ", "["], t);
        if (l.target === "https://" || l.target === "http://") {
          t !== l.pos && o.push(n.slice(t, l.pos));
          const u = I(
            n,
            [" ", "\r", `
`],
            l.pos + l.target.length
          );
          if (u.pos !== -1) {
            const a = n.slice(l.pos, u.pos);
            o.push(/* @__PURE__ */ T.jsx("a", { href: a, children: a })), t = u.pos;
          } else {
            const a = n.slice(l.pos, n.length);
            o.push(/* @__PURE__ */ T.jsx("a", { href: a, children: a })), t = n.length;
            break;
          }
        } else if (l.target == " ")
          o.push(n.slice(t, l.pos)), o.push(" "), t = l.pos + l.target.length;
        else if (l.target == "[") {
          t !== l.pos && o.push(n.slice(t, l.pos));
          const u = I(n, ["]"], l.pos + l.target.length);
          if (u.pos !== -1) {
            const a = n.slice(l.pos, u.pos + 1);
            o.push([/* @__PURE__ */ T.jsx("span", { className: "braket", onClick: (g) => {
              _(a.slice(1, a.length - 1)), g.stopPropagation();
            }, children: a }, t)]), t = u.pos + 1;
          } else
            o.push(n.slice(t, n.length)), t = n.length;
        } else {
          o.push(n.slice(t, n.length)), t = n.length;
          break;
        }
      }
      return o;
    }, [_]), A = Z((n, t) => {
      const o = n ? i.blockStyles[n] : void 0;
      return o ? o(t) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
        /* @__PURE__ */ T.jsx("span", { className: "block-type", children: n }),
        /* @__PURE__ */ T.jsx("pre", { children: t })
      ] });
    }, [i.blockStyles]), $ = Z((n) => {
      const t = n.match(/^(\s*)```.*/), o = (t == null ? void 0 : t[1]) ?? "";
      return n = n.slice(o.length).split(`
`).map((l) => o + l).join(`
`), n;
    }, []), U = Z((n) => {
      const t = n.match(/^(\s*)> /), o = (t == null ? void 0 : t[1]) ?? "";
      return n = n.slice(o.length).split(`
`).map(
        (l, u) => o + (u === 0 ? "" : "> ") + l
      ).join(`
`), n;
    }, []), Y = Z((n) => {
      var t;
      if (console.log(n), V(n))
        if (Et(n)) {
          const o = n.match(/\s*> /), l = n.slice((t = o == null ? void 0 : o[0]) == null ? void 0 : t.length);
          S(
            /* @__PURE__ */ T.jsxs("div", { children: [
              /* @__PURE__ */ T.jsx("pre", { className: "for-copy", children: U(n) }),
              /* @__PURE__ */ T.jsx("div", { className: "no-select", children: A("pre", l) })
            ] })
          );
          return;
        } else {
          const o = Rt(n);
          try {
            const l = A(o[0], o[1]);
            S(
              /* @__PURE__ */ T.jsxs("div", { children: [
                /* @__PURE__ */ T.jsx("pre", { className: "for-copy", children: $(n + "\n```") }),
                /* @__PURE__ */ T.jsx("div", { className: "no-select", children: l })
              ] })
            );
          } catch (l) {
            l instanceof Promise && l.then((u) => {
              console.log(u), S(u);
            }), S(/* @__PURE__ */ T.jsx("div", { children: "loading..." }));
          }
          return;
        }
      else {
        const o = ["elm"], l = n.match(/^(\s*)-( .*)$/);
        let u = null;
        n.indexOf("# ") === 0 || n.indexOf("## ") === 0 || n.indexOf("### ") === 0 || l && (n = l[2], u = /* @__PURE__ */ T.jsx("pre", { className: "for-copy-inline", children: l[1] + "-" })), S(
          /* @__PURE__ */ T.jsxs("div", { className: o.join(" "), children: [
            u,
            j(n)
          ] })
        );
        return;
      }
    }, [$, U, A, j]), L = (n) => {
      const t = n.match(/^(\s*-)( .*)$/);
      let o = "";
      if (t)
        n = t[2], o = t[1];
      else {
        const l = n.match(/^(\s*)(```.*|> )/);
        l && (o = l[1], n = n.slice(l[1].length));
      }
      return [o, n];
    }, d = J(null), v = (n) => (t) => {
      if (t.buttons !== 0 && d.current) {
        n();
        const o = new Range();
        o.selectNodeContents(d.current);
        const l = document.getSelection();
        if (!l)
          throw new Error("selection is null");
        l.empty(), l.addRange(o);
      }
    }, c = L(i.value), h = c[0], f = c[1];
    return K(() => {
      Y(i.value);
    }, [Y, i.value]), V(f) ? /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: F(i.value, i.isFocus, i.isSelect),
        ref: d,
        "data-lineno": i.row,
        onClick: i.onClick,
        children: [
          /* @__PURE__ */ T.jsx(
            "div",
            {
              className: ["line-item"].concat(k(i.isFocus)).join(" "),
              onMouseLeave: v(i.selectThisLine),
              children: /* @__PURE__ */ T.jsx(
                Ye,
                {
                  ref: E,
                  value: f,
                  keywords: i.keywords,
                  setLine: i.setLine(h),
                  setCursor: i.setCursor,
                  onCompositionStart: i.onCompositionStart,
                  onCompositionEnd: i.onCompositionEnd,
                  onChange: i.onChange(h),
                  popupHandlers: [],
                  onKeyDown: () => i.onKeyDown(h, f)
                }
              )
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: "line-item", children: O })
        ]
      }
    ) : /* @__PURE__ */ T.jsxs(
      "div",
      {
        className: F(i.value, i.isFocus, i.isSelect),
        ref: d,
        "data-lineno": i.row,
        onClick: i.onClick,
        children: [
          /* @__PURE__ */ T.jsx(
            "div",
            {
              className: k(i.isFocus) + " container",
              onMouseLeave: v(i.selectThisLine),
              children: /* @__PURE__ */ T.jsx(
                Ye,
                {
                  ref: E,
                  value: f,
                  keywords: i.keywords,
                  setLine: i.setLine(h),
                  setCursor: i.setCursor,
                  onPaste: i.onPaste(i.row),
                  onCompositionStart: i.onCompositionStart,
                  onCompositionEnd: i.onCompositionEnd,
                  onChange: i.onChange(h),
                  popupHandlers: i.textPopupHandlers,
                  onKeyDown: (n) => (t) => {
                    t.key === "Enter" && t.keyCode === 13 && n.selection !== "" ? t.preventDefault() : i.onKeyDown(h, f)(t);
                  }
                }
              )
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: P(i.isFocus), children: O })
        ]
      }
    );
  }
), St = (w) => {
  const i = w.lines, C = w.setLines, E = w.onChange;
  K(() => {
    E(i);
  }, [i, E]);
  const O = J(!1), [S, F] = te({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none"
  }), [k, P] = te([0, 0]), I = (c) => c == null ? null : c instanceof HTMLElement && c.classList.contains("line") ? c : I(c.parentElement);
  let _, j, A = !1;
  const $ = () => {
    A = !0;
    const c = document.getSelection();
    c && (_ = I(c.anchorNode), j = I(c.focusNode), _ !== j && F({ row: -1, col: 0 }));
  }, U = () => {
    var c, h, f, n;
    if (A && (A = !1, _ && j && _ !== j)) {
      const t = new Range();
      if (t.setStart(_, 0), t.setEnd(j, j.children.length), document.getSelection().empty(), document.getSelection().addRange(t), !((c = _.dataset) != null && c.lineno))
        throw new Error("fromLine.dataset?.lineno is undefined");
      const o = parseInt((h = _.dataset) == null ? void 0 : h.lineno);
      if (!((f = j.dataset) != null && f.lineno))
        throw new Error("toLine.dataset?.lineno is undefined");
      const l = parseInt((n = j.dataset) == null ? void 0 : n.lineno);
      P([o, l]);
    }
  }, Y = () => () => {
    F(() => ({ row: -1, col: 0 })), A = !0;
  }, L = J(null);
  K(() => {
    var c;
    if (L.current)
      if (k[1] - k[0] >= 1) {
        L.current.style.display = "block";
        const h = (c = document.getSelection()) == null ? void 0 : c.focusNode;
        if (!h)
          throw new Error("focusNode is null");
        if (!(h instanceof Element))
          throw new Error("focusNode is not Element");
        const f = h.getBoundingClientRect(), n = f.bottom, t = f.x + f.width / 2;
        L.current.style.left = t + "px", L.current.style.top = n + "px";
      } else
        L.current.style.display = "none";
  }, [k]);
  const d = (c) => (h) => {
    const n = h.clipboardData.getData("text").split(/\r\n|\n/);
    if (n.length === 1)
      return !0;
    const t = [];
    let o = [], l = !1, u = "";
    return n.forEach((a) => {
      const g = a.match(/^(\s*)(```.*)/);
      l ? a.indexOf(u + "```") === 0 ? (t.push(o.join(`
`)), l = !1, o = []) : (u !== "" && a.indexOf(u) !== 0 && (t.push(o.join(`
`)), l = !1, o = [], t.push(a)), o.push(a.slice(u.length))) : g ? (l = !0, u = g[1], o.push(a)) : t.push(a);
    }), o.length !== 0 && t.push(o.join(`
`)), C((a) => (a[c] = a[c] + t[0], a.splice(c + 1, 0, ...t.slice(1)), [...a])), h.preventDefault(), !1;
  };
  K(() => {
    document.addEventListener("selectionchange", $), document.addEventListener("pointerup", U);
  }, []);
  const v = J([]);
  return K(() => {
    if (S.row !== -1 && O.current === !1) {
      const c = v.current[S.row];
      if (!c || !c.current)
        return;
      c.current.focus();
      let h = S.colEnd;
      (h === void 0 || h === -1) && (h = S.col), console.log("EFFECT", "col:", S.col, "end:", h), c.current.setSelectionRange(S.col, h, S.direction);
    }
  }, [S, i]), i.forEach((c, h) => {
    v.current[h] = mt();
  }), /* @__PURE__ */ T.jsxs("div", { className: "editor", children: [
    i.map((c, h) => /* @__PURE__ */ T.jsx(
      kt,
      {
        ref: v.current[h],
        isFocus: h === S.row,
        isSelect: k[0] <= h && h <= k[1],
        row: h,
        value: c,
        textPopupHandlers: w.textPopupHandlers,
        keywords: w.keywords,
        blockStyles: w.blockStyles,
        selectThisLine: Y(),
        setLine: (f) => (n) => ((t) => {
          C((o) => (o[t] = f + n, [...o]));
        })(h),
        setCursor: (f) => ((n) => {
          F((t) => ({
            row: n,
            col: f,
            colEnd: -1,
            direction: t.direction
          }));
        })(h),
        onPaste: d,
        onCompositionStart: () => {
          O.current = !0, console.log("composition start");
        },
        onCompositionEnd: () => {
          O.current = !1, console.log("composition end");
        },
        onChange: (f) => (n) => ((t) => {
          if (console.log("onChange", O.current), O.current === !1) {
            const o = n.target.selectionStart, l = n.target.selectionEnd, u = n.target.selectionDirection;
            F((a) => ({
              row: a.row,
              col: o,
              colEnd: l,
              direction: u
            }));
          }
          C((o) => (o[t] = f + n.target.value, [...o]));
        })(h),
        onKeyDown: (f, n) => (t) => {
          let o = t.currentTarget.selectionStart, l = t.currentTarget.selectionEnd, u = t.currentTarget.selectionDirection;
          F((a) => {
            switch (t.key) {
              case "ArrowLeft": {
                if (t.currentTarget != null && t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0) {
                  if (a.row === 0)
                    return a;
                  const g = i[S.row - 1].length;
                  return t.preventDefault(), {
                    row: a.row - 1,
                    col: g,
                    colEnd: -1,
                    direction: u
                  };
                }
                return t.shiftKey ? o == l ? (o--, u = "backward") : u === "forward" ? l-- : u === "backward" && o-- : (o--, l = -1), t.preventDefault(), {
                  row: a.row,
                  col: o,
                  colEnd: l,
                  direction: u
                };
              }
              case "ArrowRight": {
                const g = -f.length + i[S.row].length;
                return t.currentTarget != null && t.currentTarget.selectionStart === g && t.currentTarget.selectionEnd === g ? a.row === i.length - 1 ? a : (t.preventDefault(), {
                  row: a.row + 1,
                  col: 0,
                  colEnd: -1,
                  direction: u
                }) : (t.shiftKey ? u === "forward" ? l++ : u === "backward" && o++ : (o < l && (o = l), o++, l = -1), t.preventDefault(), {
                  row: a.row,
                  col: o,
                  colEnd: l,
                  direction: u
                });
              }
              case "ArrowUp":
                return V(n) && !Ct(t.currentTarget.selectionStart, n) || a.row === 0 ? a : (t.preventDefault(), {
                  row: a.row - 1,
                  col: t.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: u
                });
              case "ArrowDown":
                return V(n) && !Tt(t.currentTarget.selectionStart, n) || a.row === i.length - 1 ? a : (t.preventDefault(), {
                  row: a.row + 1,
                  col: t.currentTarget.selectionStart,
                  colEnd: -1,
                  direction: u
                });
              case "Backspace":
                if (f.length !== 0 && (t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0 || t.currentTarget.selectionStart === 1 && t.currentTarget.selectionEnd === 1))
                  f.length !== 0 && (C((g) => (f.length === 1 ? (g[a.row] = t.currentTarget.value.slice(1), o--, o === -1 && o++) : f.length > 0 && (g[a.row] = f.slice(2) + t.currentTarget.value), [...g])), t.preventDefault());
                else if (t.currentTarget != null && t.currentTarget.selectionStart === 0 && t.currentTarget.selectionEnd === 0) {
                  if (a.row === 0)
                    return a;
                  const g = i[S.row - 1].length;
                  return C((R) => (V(R[a.row - 1]) ? R[a.row - 1] += `
` + R[a.row] : R[a.row - 1] += R[a.row], R.splice(a.row, 1), [...R])), t.preventDefault(), {
                    row: a.row - 1,
                    col: g,
                    colEnd: -1,
                    direction: u
                  };
                }
                return console.log("normal Backspace", o), {
                  row: a.row,
                  col: o,
                  colEnd: l,
                  direction: u
                };
              case "Tab":
                return C((g) => {
                  if (t.shiftKey)
                    f.length === 1 ? (g[a.row] = t.currentTarget.value.slice(1), o--) : f.length > 0 && (g[a.row] = f.slice(2) + t.currentTarget.value);
                  else {
                    let R = "-";
                    V(t.currentTarget.value) && (R = " "), f.length === 0 ? (g[a.row] = R + " " + t.currentTarget.value, o++) : g[a.row] = "  " + f + t.currentTarget.value;
                  }
                  return F((R) => ({
                    row: R.row,
                    col: o,
                    colEnd: -1,
                    direction: u
                  })), [...g];
                }), t.preventDefault(), {
                  row: a.row,
                  col: o,
                  colEnd: -1,
                  direction: u
                };
              case "Enter":
                return t.keyCode === 13 ? V(n) && !t.shiftKey ? a : (C((g) => {
                  const R = f.length + t.currentTarget.selectionStart;
                  let B = g[a.row].slice(R);
                  if (V(n)) {
                    const q = g[a.row];
                    q[q.length - 1] === `
` ? g[a.row] = g[a.row].slice(
                      0,
                      R - 1
                    ) : g[a.row] = g[a.row].slice(
                      0,
                      R
                    ), B.length > 0 && B[0] === `
` && (B = B.slice(1));
                  } else
                    g[a.row] = g[a.row].slice(
                      0,
                      R
                    );
                  return f.length !== 0 ? g.splice(
                    a.row + 1,
                    0,
                    f + " " + B
                  ) : g.splice(a.row + 1, 0, B), [...g];
                }), t.preventDefault(), {
                  row: a.row + 1,
                  col: f.length,
                  colEnd: -1,
                  direction: u
                }) : a;
              case " ":
                return console.log("space", o), (o === 0 || o === 1 && f.length >= 1) && (C((g) => {
                  let R = "-";
                  return V(t.currentTarget.value) && (R = " "), f.length === 0 ? (g[a.row] = R + " " + t.currentTarget.value, o++) : g[a.row] = "  " + f + t.currentTarget.value, [...g];
                }), t.preventDefault()), {
                  row: a.row,
                  col: o,
                  colEnd: -1,
                  direction: u
                };
              default:
                return a;
            }
          });
        },
        onLinkClick: w.onLinkClick,
        onClick: (f) => {
          if (S.row !== h) {
            const n = f.target.selectionStart;
            P([h, h]), F(() => ({ row: h, col: n }));
          }
        }
      },
      h
    )),
    /* @__PURE__ */ T.jsx("div", { className: "popup", ref: L, children: w.linePopupHandlers.map((c, h) => /* @__PURE__ */ T.jsx(
      "div",
      {
        onClick: () => {
          globalThis.ontouchstart !== null && (c.handler(
            i.slice(k[0], k[1] + 1),
            k
          ), P([k[1], k[1]]));
        },
        onTouchStart: () => {
          c.handler(i.slice(k[0], k[1] + 1)), P([k[1], k[1]]);
        },
        children: c.name
      },
      h
    )) })
  ] });
};
export {
  St as Editor
};
