function rC(t, a) {
  for (var s = 0; s < a.length; s++) {
    const i = a[s];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const o in i)
        if (o !== "default" && !(o in t)) {
          const c = Object.getOwnPropertyDescriptor(i, o);
          c &&
            Object.defineProperty(
              t,
              o,
              c.get ? c : { enumerable: !0, get: () => i[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const c of o)
      if (c.type === "childList")
        for (const f of c.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && i(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const c = {};
    return (
      o.integrity && (c.integrity = o.integrity),
      o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const c = s(o);
    fetch(o.href, c);
  }
})();
function Nb(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Af = { exports: {} },
  xl = {};
var Ov;
function iC() {
  if (Ov) return xl;
  Ov = 1;
  var t = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function s(i, o, c) {
    var f = null;
    if (
      (c !== void 0 && (f = "" + c),
      o.key !== void 0 && (f = "" + o.key),
      "key" in o)
    ) {
      c = {};
      for (var m in o) m !== "key" && (c[m] = o[m]);
    } else c = o;
    return (
      (o = c.ref),
      { $$typeof: t, type: i, key: f, ref: o !== void 0 ? o : null, props: c }
    );
  }
  return (xl.Fragment = a), (xl.jsx = s), (xl.jsxs = s), xl;
}
var Rv;
function lC() {
  return Rv || ((Rv = 1), (Af.exports = iC())), Af.exports;
}
var u = lC(),
  kf = { exports: {} },
  bl = {},
  Mf = { exports: {} },
  Df = {};
var Av;
function oC() {
  return (
    Av ||
      ((Av = 1),
      (function (t) {
        function a(L, U) {
          var W = L.length;
          L.push(U);
          e: for (; 0 < W; ) {
            var fe = (W - 1) >>> 1,
              E = L[fe];
            if (0 < o(E, U)) (L[fe] = U), (L[W] = E), (W = fe);
            else break e;
          }
        }
        function s(L) {
          return L.length === 0 ? null : L[0];
        }
        function i(L) {
          if (L.length === 0) return null;
          var U = L[0],
            W = L.pop();
          if (W !== U) {
            L[0] = W;
            e: for (var fe = 0, E = L.length, I = E >>> 1; fe < I; ) {
              var le = 2 * (fe + 1) - 1,
                ae = L[le],
                pe = le + 1,
                Ne = L[pe];
              if (0 > o(ae, W))
                pe < E && 0 > o(Ne, ae)
                  ? ((L[fe] = Ne), (L[pe] = W), (fe = pe))
                  : ((L[fe] = ae), (L[le] = W), (fe = le));
              else if (pe < E && 0 > o(Ne, W))
                (L[fe] = Ne), (L[pe] = W), (fe = pe);
              else break e;
            }
          }
          return U;
        }
        function o(L, U) {
          var W = L.sortIndex - U.sortIndex;
          return W !== 0 ? W : L.id - U.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          t.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            m = f.now();
          t.unstable_now = function () {
            return f.now() - m;
          };
        }
        var p = [],
          y = [],
          v = 1,
          b = null,
          _ = 3,
          N = !1,
          j = !1,
          S = !1,
          C = !1,
          A = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          k = typeof setImmediate < "u" ? setImmediate : null;
        function D(L) {
          for (var U = s(y); U !== null; ) {
            if (U.callback === null) i(y);
            else if (U.startTime <= L)
              i(y), (U.sortIndex = U.expirationTime), a(p, U);
            else break;
            U = s(y);
          }
        }
        function q(L) {
          if (((S = !1), D(L), !j))
            if (s(p) !== null) (j = !0), X || ((X = !0), te());
            else {
              var U = s(y);
              U !== null && de(q, U.startTime - L);
            }
        }
        var X = !1,
          Z = -1,
          P = 5,
          G = -1;
        function ue() {
          return C ? !0 : !(t.unstable_now() - G < P);
        }
        function ve() {
          if (((C = !1), X)) {
            var L = t.unstable_now();
            G = L;
            var U = !0;
            try {
              e: {
                (j = !1), S && ((S = !1), O(Z), (Z = -1)), (N = !0);
                var W = _;
                try {
                  t: {
                    for (
                      D(L), b = s(p);
                      b !== null && !(b.expirationTime > L && ue());

                    ) {
                      var fe = b.callback;
                      if (typeof fe == "function") {
                        (b.callback = null), (_ = b.priorityLevel);
                        var E = fe(b.expirationTime <= L);
                        if (((L = t.unstable_now()), typeof E == "function")) {
                          (b.callback = E), D(L), (U = !0);
                          break t;
                        }
                        b === s(p) && i(p), D(L);
                      } else i(p);
                      b = s(p);
                    }
                    if (b !== null) U = !0;
                    else {
                      var I = s(y);
                      I !== null && de(q, I.startTime - L), (U = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (_ = W), (N = !1);
                }
                U = void 0;
              }
            } finally {
              U ? te() : (X = !1);
            }
          }
        }
        var te;
        if (typeof k == "function")
          te = function () {
            k(ve);
          };
        else if (typeof MessageChannel < "u") {
          var oe = new MessageChannel(),
            ee = oe.port2;
          (oe.port1.onmessage = ve),
            (te = function () {
              ee.postMessage(null);
            });
        } else
          te = function () {
            A(ve, 0);
          };
        function de(L, U) {
          Z = A(function () {
            L(t.unstable_now());
          }, U);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (t.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (t.unstable_next = function (L) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = _;
            }
            var W = _;
            _ = U;
            try {
              return L();
            } finally {
              _ = W;
            }
          }),
          (t.unstable_requestPaint = function () {
            C = !0;
          }),
          (t.unstable_runWithPriority = function (L, U) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var W = _;
            _ = L;
            try {
              return U();
            } finally {
              _ = W;
            }
          }),
          (t.unstable_scheduleCallback = function (L, U, W) {
            var fe = t.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? fe + W : fe))
                : (W = fe),
              L)
            ) {
              case 1:
                var E = -1;
                break;
              case 2:
                E = 250;
                break;
              case 5:
                E = 1073741823;
                break;
              case 4:
                E = 1e4;
                break;
              default:
                E = 5e3;
            }
            return (
              (E = W + E),
              (L = {
                id: v++,
                callback: U,
                priorityLevel: L,
                startTime: W,
                expirationTime: E,
                sortIndex: -1,
              }),
              W > fe
                ? ((L.sortIndex = W),
                  a(y, L),
                  s(p) === null &&
                    L === s(y) &&
                    (S ? (O(Z), (Z = -1)) : (S = !0), de(q, W - fe)))
                : ((L.sortIndex = E),
                  a(p, L),
                  j || N || ((j = !0), X || ((X = !0), te()))),
              L
            );
          }),
          (t.unstable_shouldYield = ue),
          (t.unstable_wrapCallback = function (L) {
            var U = _;
            return function () {
              var W = _;
              _ = U;
              try {
                return L.apply(this, arguments);
              } finally {
                _ = W;
              }
            };
          });
      })(Df)),
    Df
  );
}
var kv;
function cC() {
  return kv || ((kv = 1), (Mf.exports = oC())), Mf.exports;
}
var Lf = { exports: {} },
  Pe = {};
var Mv;
function uC() {
  if (Mv) return Pe;
  Mv = 1;
  var t = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function _(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (b && E[b]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    S = {};
  function C(E, I, le) {
    (this.props = E),
      (this.context = I),
      (this.refs = S),
      (this.updater = le || N);
  }
  (C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (E, I) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, I, "setState");
    }),
    (C.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function A() {}
  A.prototype = C.prototype;
  function O(E, I, le) {
    (this.props = E),
      (this.context = I),
      (this.refs = S),
      (this.updater = le || N);
  }
  var k = (O.prototype = new A());
  (k.constructor = O), j(k, C.prototype), (k.isPureReactComponent = !0);
  var D = Array.isArray,
    q = { H: null, A: null, T: null, S: null, V: null },
    X = Object.prototype.hasOwnProperty;
  function Z(E, I, le, ae, pe, Ne) {
    return (
      (le = Ne.ref),
      {
        $$typeof: t,
        type: E,
        key: I,
        ref: le !== void 0 ? le : null,
        props: Ne,
      }
    );
  }
  function P(E, I) {
    return Z(E.type, I, void 0, void 0, void 0, E.props);
  }
  function G(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }
  function ue(E) {
    var I = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (le) {
        return I[le];
      })
    );
  }
  var ve = /\/+/g;
  function te(E, I) {
    return typeof E == "object" && E !== null && E.key != null
      ? ue("" + E.key)
      : I.toString(36);
  }
  function oe() {}
  function ee(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(oe, oe)
            : ((E.status = "pending"),
              E.then(
                function (I) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = I));
                },
                function (I) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = I));
                }
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function de(E, I, le, ae, pe) {
    var Ne = typeof E;
    (Ne === "undefined" || Ne === "boolean") && (E = null);
    var he = !1;
    if (E === null) he = !0;
    else
      switch (Ne) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case t:
            case a:
              he = !0;
              break;
            case v:
              return (he = E._init), de(he(E._payload), I, le, ae, pe);
          }
      }
    if (he)
      return (
        (pe = pe(E)),
        (he = ae === "" ? "." + te(E, 0) : ae),
        D(pe)
          ? ((le = ""),
            he != null && (le = he.replace(ve, "$&/") + "/"),
            de(pe, I, le, "", function (ke) {
              return ke;
            }))
          : pe != null &&
            (G(pe) &&
              (pe = P(
                pe,
                le +
                  (pe.key == null || (E && E.key === pe.key)
                    ? ""
                    : ("" + pe.key).replace(ve, "$&/") + "/") +
                  he
              )),
            I.push(pe)),
        1
      );
    he = 0;
    var me = ae === "" ? "." : ae + ":";
    if (D(E))
      for (var Te = 0; Te < E.length; Te++)
        (ae = E[Te]), (Ne = me + te(ae, Te)), (he += de(ae, I, le, Ne, pe));
    else if (((Te = _(E)), typeof Te == "function"))
      for (E = Te.call(E), Te = 0; !(ae = E.next()).done; )
        (ae = ae.value),
          (Ne = me + te(ae, Te++)),
          (he += de(ae, I, le, Ne, pe));
    else if (Ne === "object") {
      if (typeof E.then == "function") return de(ee(E), I, le, ae, pe);
      throw (
        ((I = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (I === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : I) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return he;
  }
  function L(E, I, le) {
    if (E == null) return E;
    var ae = [],
      pe = 0;
    return (
      de(E, ae, "", "", function (Ne) {
        return I.call(le, Ne, pe++);
      }),
      ae
    );
  }
  function U(E) {
    if (E._status === -1) {
      var I = E._result;
      (I = I()),
        I.then(
          function (le) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = le));
          },
          function (le) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = le));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = I));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var W =
    typeof reportError == "function"
      ? reportError
      : function (E) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var I = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof E == "object" &&
                E !== null &&
                typeof E.message == "string"
                  ? String(E.message)
                  : String(E),
              error: E,
            });
            if (!window.dispatchEvent(I)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", E);
            return;
          }
          console.error(E);
        };
  function fe() {}
  return (
    (Pe.Children = {
      map: L,
      forEach: function (E, I, le) {
        L(
          E,
          function () {
            I.apply(this, arguments);
          },
          le
        );
      },
      count: function (E) {
        var I = 0;
        return (
          L(E, function () {
            I++;
          }),
          I
        );
      },
      toArray: function (E) {
        return (
          L(E, function (I) {
            return I;
          }) || []
        );
      },
      only: function (E) {
        if (!G(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    }),
    (Pe.Component = C),
    (Pe.Fragment = s),
    (Pe.Profiler = o),
    (Pe.PureComponent = O),
    (Pe.StrictMode = i),
    (Pe.Suspense = p),
    (Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q),
    (Pe.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return q.H.useMemoCache(E);
      },
    }),
    (Pe.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Pe.cloneElement = function (E, I, le) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + "."
        );
      var ae = j({}, E.props),
        pe = E.key,
        Ne = void 0;
      if (I != null)
        for (he in (I.ref !== void 0 && (Ne = void 0),
        I.key !== void 0 && (pe = "" + I.key),
        I))
          !X.call(I, he) ||
            he === "key" ||
            he === "__self" ||
            he === "__source" ||
            (he === "ref" && I.ref === void 0) ||
            (ae[he] = I[he]);
      var he = arguments.length - 2;
      if (he === 1) ae.children = le;
      else if (1 < he) {
        for (var me = Array(he), Te = 0; Te < he; Te++)
          me[Te] = arguments[Te + 2];
        ae.children = me;
      }
      return Z(E.type, pe, void 0, void 0, Ne, ae);
    }),
    (Pe.createContext = function (E) {
      return (
        (E = {
          $$typeof: f,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: c, _context: E }),
        E
      );
    }),
    (Pe.createElement = function (E, I, le) {
      var ae,
        pe = {},
        Ne = null;
      if (I != null)
        for (ae in (I.key !== void 0 && (Ne = "" + I.key), I))
          X.call(I, ae) &&
            ae !== "key" &&
            ae !== "__self" &&
            ae !== "__source" &&
            (pe[ae] = I[ae]);
      var he = arguments.length - 2;
      if (he === 1) pe.children = le;
      else if (1 < he) {
        for (var me = Array(he), Te = 0; Te < he; Te++)
          me[Te] = arguments[Te + 2];
        pe.children = me;
      }
      if (E && E.defaultProps)
        for (ae in ((he = E.defaultProps), he))
          pe[ae] === void 0 && (pe[ae] = he[ae]);
      return Z(E, Ne, void 0, void 0, null, pe);
    }),
    (Pe.createRef = function () {
      return { current: null };
    }),
    (Pe.forwardRef = function (E) {
      return { $$typeof: m, render: E };
    }),
    (Pe.isValidElement = G),
    (Pe.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: U };
    }),
    (Pe.memo = function (E, I) {
      return { $$typeof: y, type: E, compare: I === void 0 ? null : I };
    }),
    (Pe.startTransition = function (E) {
      var I = q.T,
        le = {};
      q.T = le;
      try {
        var ae = E(),
          pe = q.S;
        pe !== null && pe(le, ae),
          typeof ae == "object" &&
            ae !== null &&
            typeof ae.then == "function" &&
            ae.then(fe, W);
      } catch (Ne) {
        W(Ne);
      } finally {
        q.T = I;
      }
    }),
    (Pe.unstable_useCacheRefresh = function () {
      return q.H.useCacheRefresh();
    }),
    (Pe.use = function (E) {
      return q.H.use(E);
    }),
    (Pe.useActionState = function (E, I, le) {
      return q.H.useActionState(E, I, le);
    }),
    (Pe.useCallback = function (E, I) {
      return q.H.useCallback(E, I);
    }),
    (Pe.useContext = function (E) {
      return q.H.useContext(E);
    }),
    (Pe.useDebugValue = function () {}),
    (Pe.useDeferredValue = function (E, I) {
      return q.H.useDeferredValue(E, I);
    }),
    (Pe.useEffect = function (E, I, le) {
      var ae = q.H;
      if (typeof le == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return ae.useEffect(E, I);
    }),
    (Pe.useId = function () {
      return q.H.useId();
    }),
    (Pe.useImperativeHandle = function (E, I, le) {
      return q.H.useImperativeHandle(E, I, le);
    }),
    (Pe.useInsertionEffect = function (E, I) {
      return q.H.useInsertionEffect(E, I);
    }),
    (Pe.useLayoutEffect = function (E, I) {
      return q.H.useLayoutEffect(E, I);
    }),
    (Pe.useMemo = function (E, I) {
      return q.H.useMemo(E, I);
    }),
    (Pe.useOptimistic = function (E, I) {
      return q.H.useOptimistic(E, I);
    }),
    (Pe.useReducer = function (E, I, le) {
      return q.H.useReducer(E, I, le);
    }),
    (Pe.useRef = function (E) {
      return q.H.useRef(E);
    }),
    (Pe.useState = function (E) {
      return q.H.useState(E);
    }),
    (Pe.useSyncExternalStore = function (E, I, le) {
      return q.H.useSyncExternalStore(E, I, le);
    }),
    (Pe.useTransition = function () {
      return q.H.useTransition();
    }),
    (Pe.version = "19.1.0"),
    Pe
  );
}
var Dv;
function Ic() {
  return Dv || ((Dv = 1), (Lf.exports = uC())), Lf.exports;
}
var Uf = { exports: {} },
  Yt = {};
var Lv;
function dC() {
  if (Lv) return Yt;
  Lv = 1;
  var t = Ic();
  function a(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        y += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var i = {
      d: {
        f: s,
        r: function () {
          throw Error(a(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function c(p, y, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: y,
      implementation: v,
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, y) {
    if (p === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Yt.createPortal = function (p, y) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(a(299));
      return c(p, y, null, v);
    }),
    (Yt.flushSync = function (p) {
      var y = f.T,
        v = i.p;
      try {
        if (((f.T = null), (i.p = 2), p)) return p();
      } finally {
        (f.T = y), (i.p = v), i.d.f();
      }
    }),
    (Yt.preconnect = function (p, y) {
      typeof p == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        i.d.C(p, y));
    }),
    (Yt.prefetchDNS = function (p) {
      typeof p == "string" && i.d.D(p);
    }),
    (Yt.preinit = function (p, y) {
      if (typeof p == "string" && y && typeof y.as == "string") {
        var v = y.as,
          b = m(v, y.crossOrigin),
          _ = typeof y.integrity == "string" ? y.integrity : void 0,
          N = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        v === "style"
          ? i.d.S(p, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: b,
              integrity: _,
              fetchPriority: N,
            })
          : v === "script" &&
            i.d.X(p, {
              crossOrigin: b,
              integrity: _,
              fetchPriority: N,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (Yt.preinitModule = function (p, y) {
      if (typeof p == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var v = m(y.as, y.crossOrigin);
            i.d.M(p, {
              crossOrigin: v,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && i.d.M(p);
    }),
    (Yt.preload = function (p, y) {
      if (
        typeof p == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var v = y.as,
          b = m(v, y.crossOrigin);
        i.d.L(p, v, {
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (Yt.preloadModule = function (p, y) {
      if (typeof p == "string")
        if (y) {
          var v = m(y.as, y.crossOrigin);
          i.d.m(p, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: v,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else i.d.m(p);
    }),
    (Yt.requestFormReset = function (p) {
      i.d.r(p);
    }),
    (Yt.unstable_batchedUpdates = function (p, y) {
      return p(y);
    }),
    (Yt.useFormState = function (p, y, v) {
      return f.H.useFormState(p, y, v);
    }),
    (Yt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Yt.version = "19.1.0"),
    Yt
  );
}
var Uv;
function Cb() {
  if (Uv) return Uf.exports;
  Uv = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return t(), (Uf.exports = dC()), Uf.exports;
}
var zv;
function fC() {
  if (zv) return bl;
  zv = 1;
  var t = cC(),
    a = Ic(),
    s = Cb();
  function i(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function c(e) {
    var n = e,
      r = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (r = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? r : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e) throw Error(i(188));
  }
  function p(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = c(e)), n === null)) throw Error(i(188));
      return n !== e ? null : e;
    }
    for (var r = e, l = n; ; ) {
      var d = r.return;
      if (d === null) break;
      var h = d.alternate;
      if (h === null) {
        if (((l = d.return), l !== null)) {
          r = l;
          continue;
        }
        break;
      }
      if (d.child === h.child) {
        for (h = d.child; h; ) {
          if (h === r) return m(d), e;
          if (h === l) return m(d), n;
          h = h.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== l.return) (r = d), (l = h);
      else {
        for (var x = !1, w = d.child; w; ) {
          if (w === r) {
            (x = !0), (r = d), (l = h);
            break;
          }
          if (w === l) {
            (x = !0), (l = d), (r = h);
            break;
          }
          w = w.sibling;
        }
        if (!x) {
          for (w = h.child; w; ) {
            if (w === r) {
              (x = !0), (r = h), (l = d);
              break;
            }
            if (w === l) {
              (x = !0), (l = h), (r = d);
              break;
            }
            w = w.sibling;
          }
          if (!x) throw Error(i(189));
        }
      }
      if (r.alternate !== l) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : n;
  }
  function y(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = y(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    _ = Symbol.for("react.transitional.element"),
    N = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    S = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    A = Symbol.for("react.provider"),
    O = Symbol.for("react.consumer"),
    k = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    q = Symbol.for("react.suspense"),
    X = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    G = Symbol.for("react.activity"),
    ue = Symbol.for("react.memo_cache_sentinel"),
    ve = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (ve && e[ve]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case C:
        return "Profiler";
      case S:
        return "StrictMode";
      case q:
        return "Suspense";
      case X:
        return "SuspenseList";
      case G:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case N:
          return "Portal";
        case k:
          return (e.displayName || "Context") + ".Provider";
        case O:
          return (e._context.displayName || "Context") + ".Consumer";
        case D:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Z:
          return (
            (n = e.displayName || null), n !== null ? n : ee(e.type) || "Memo"
          );
        case P:
          (n = e._payload), (e = e._init);
          try {
            return ee(e(n));
          } catch {}
      }
    return null;
  }
  var de = Array.isArray,
    L = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = { pending: !1, data: null, method: null, action: null },
    fe = [],
    E = -1;
  function I(e) {
    return { current: e };
  }
  function le(e) {
    0 > E || ((e.current = fe[E]), (fe[E] = null), E--);
  }
  function ae(e, n) {
    E++, (fe[E] = e.current), (e.current = n);
  }
  var pe = I(null),
    Ne = I(null),
    he = I(null),
    me = I(null);
  function Te(e, n) {
    switch ((ae(he, n), ae(Ne, e), ae(pe, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? av(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          (n = av(n)), (e = sv(n, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    le(pe), ae(pe, e);
  }
  function ke() {
    le(pe), le(Ne), le(he);
  }
  function Ie(e) {
    e.memoizedState !== null && ae(me, e);
    var n = pe.current,
      r = sv(n, e.type);
    n !== r && (ae(Ne, e), ae(pe, r));
  }
  function Be(e) {
    Ne.current === e && (le(pe), le(Ne)),
      me.current === e && (le(me), (ml._currentValue = W));
  }
  var Je = Object.prototype.hasOwnProperty,
    mt = t.unstable_scheduleCallback,
    jt = t.unstable_cancelCallback,
    ks = t.unstable_shouldYield,
    Ba = t.unstable_requestPaint,
    Qt = t.unstable_now,
    eo = t.unstable_getCurrentPriorityLevel,
    bi = t.unstable_ImmediatePriority,
    to = t.unstable_UserBlockingPriority,
    ur = t.unstable_NormalPriority,
    Hm = t.unstable_LowPriority,
    wi = t.unstable_IdlePriority,
    R = t.log,
    V = t.unstable_setDisableYieldValue,
    K = null,
    se = null;
  function ie(e) {
    if (
      (typeof R == "function" && V(e),
      se && typeof se.setStrictMode == "function")
    )
      try {
        se.setStrictMode(K, e);
      } catch {}
  }
  var ne = Math.clz32 ? Math.clz32 : Qe,
    ye = Math.log,
    ze = Math.LN2;
  function Qe(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ye(e) / ze) | 0)) | 0;
  }
  var Tt = 256,
    Wt = 4194304;
  function xt(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function dr(e, n, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var d = 0,
      h = e.suspendedLanes,
      x = e.pingedLanes;
    e = e.warmLanes;
    var w = l & 134217727;
    return (
      w !== 0
        ? ((l = w & ~h),
          l !== 0
            ? (d = xt(l))
            : ((x &= w),
              x !== 0
                ? (d = xt(x))
                : r || ((r = w & ~e), r !== 0 && (d = xt(r)))))
        : ((w = l & ~h),
          w !== 0
            ? (d = xt(w))
            : x !== 0
            ? (d = xt(x))
            : r || ((r = l & ~e), r !== 0 && (d = xt(r)))),
      d === 0
        ? 0
        : n !== 0 &&
          n !== d &&
          (n & h) === 0 &&
          ((h = d & -d),
          (r = n & -n),
          h >= r || (h === 32 && (r & 4194048) !== 0))
        ? n
        : d
    );
  }
  function ga(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Si(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function no() {
    var e = Tt;
    return (Tt <<= 1), (Tt & 4194048) === 0 && (Tt = 256), e;
  }
  function _i() {
    var e = Wt;
    return (Wt <<= 1), (Wt & 62914560) === 0 && (Wt = 4194304), e;
  }
  function Ni(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function Fa(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function ZS(e, n, r, l, d, h) {
    var x = e.pendingLanes;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0);
    var w = e.entanglements,
      T = e.expirationTimes,
      B = e.hiddenUpdates;
    for (r = x & ~r; 0 < r; ) {
      var Y = 31 - ne(r),
        J = 1 << Y;
      (w[Y] = 0), (T[Y] = -1);
      var F = B[Y];
      if (F !== null)
        for (B[Y] = null, Y = 0; Y < F.length; Y++) {
          var Q = F[Y];
          Q !== null && (Q.lane &= -536870913);
        }
      r &= ~J;
    }
    l !== 0 && Bm(e, l, 0),
      h !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(x & ~n));
  }
  function Bm(e, n, r) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var l = 31 - ne(n);
    (e.entangledLanes |= n),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (r & 4194090));
  }
  function Fm(e, n) {
    var r = (e.entangledLanes |= n);
    for (e = e.entanglements; r; ) {
      var l = 31 - ne(r),
        d = 1 << l;
      (d & n) | (e[l] & n) && (e[l] |= n), (r &= ~d);
    }
  }
  function bu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function wu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Km() {
    var e = U.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : _v(e.type));
  }
  function YS(e, n) {
    var r = U.p;
    try {
      return (U.p = e), n();
    } finally {
      U.p = r;
    }
  }
  var Ka = Math.random().toString(36).slice(2),
    Gt = "__reactFiber$" + Ka,
    nn = "__reactProps$" + Ka,
    fr = "__reactContainer$" + Ka,
    Su = "__reactEvents$" + Ka,
    IS = "__reactListeners$" + Ka,
    $S = "__reactHandles$" + Ka,
    Qm = "__reactResources$" + Ka,
    Ci = "__reactMarker$" + Ka;
  function _u(e) {
    delete e[Gt], delete e[nn], delete e[Su], delete e[IS], delete e[$S];
  }
  function hr(e) {
    var n = e[Gt];
    if (n) return n;
    for (var r = e.parentNode; r; ) {
      if ((n = r[fr] || r[Gt])) {
        if (
          ((r = n.alternate),
          n.child !== null || (r !== null && r.child !== null))
        )
          for (e = ov(e); e !== null; ) {
            if ((r = e[Gt])) return r;
            e = ov(e);
          }
        return n;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function mr(e) {
    if ((e = e[Gt] || e[fr])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Ei(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(i(33));
  }
  function pr(e) {
    var n = e[Qm];
    return (
      n ||
        (n = e[Qm] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function qt(e) {
    e[Ci] = !0;
  }
  var Gm = new Set(),
    Zm = {};
  function Ms(e, n) {
    yr(e, n), yr(e + "Capture", n);
  }
  function yr(e, n) {
    for (Zm[e] = n, e = 0; e < n.length; e++) Gm.add(n[e]);
  }
  var XS = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ym = {},
    Im = {};
  function WS(e) {
    return Je.call(Im, e)
      ? !0
      : Je.call(Ym, e)
      ? !1
      : XS.test(e)
      ? (Im[e] = !0)
      : ((Ym[e] = !0), !1);
  }
  function ao(e, n, r) {
    if (WS(n))
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + r);
      }
  }
  function so(e, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + r);
    }
  }
  function va(e, n, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(n, r, "" + l);
    }
  }
  var Nu, $m;
  function gr(e) {
    if (Nu === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        (Nu = (n && n[1]) || ""),
          ($m =
            -1 <
            r.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < r.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Nu +
      e +
      $m
    );
  }
  var Cu = !1;
  function Eu(e, n) {
    if (!e || Cu) return "";
    Cu = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var J = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(J.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(J, []);
                } catch (Q) {
                  var F = Q;
                }
                Reflect.construct(e, [], J);
              } else {
                try {
                  J.call();
                } catch (Q) {
                  F = Q;
                }
                e.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                F = Q;
              }
              (J = e()) &&
                typeof J.catch == "function" &&
                J.catch(function () {});
            }
          } catch (Q) {
            if (Q && F && typeof Q.stack == "string") return [Q.stack, F.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      d &&
        d.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var h = l.DetermineComponentFrameRoot(),
        x = h[0],
        w = h[1];
      if (x && w) {
        var T = x.split(`
`),
          B = w.split(`
`);
        for (
          d = l = 0;
          l < T.length && !T[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; d < B.length && !B[d].includes("DetermineComponentFrameRoot"); )
          d++;
        if (l === T.length || d === B.length)
          for (
            l = T.length - 1, d = B.length - 1;
            1 <= l && 0 <= d && T[l] !== B[d];

          )
            d--;
        for (; 1 <= l && 0 <= d; l--, d--)
          if (T[l] !== B[d]) {
            if (l !== 1 || d !== 1)
              do
                if ((l--, d--, 0 > d || T[l] !== B[d])) {
                  var Y =
                    `
` + T[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Y.includes("<anonymous>") &&
                      (Y = Y.replace("<anonymous>", e.displayName)),
                    Y
                  );
                }
              while (1 <= l && 0 <= d);
            break;
          }
      }
    } finally {
      (Cu = !1), (Error.prepareStackTrace = r);
    }
    return (r = e ? e.displayName || e.name : "") ? gr(r) : "";
  }
  function JS(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return gr(e.type);
      case 16:
        return gr("Lazy");
      case 13:
        return gr("Suspense");
      case 19:
        return gr("SuspenseList");
      case 0:
      case 15:
        return Eu(e.type, !1);
      case 11:
        return Eu(e.type.render, !1);
      case 1:
        return Eu(e.type, !0);
      case 31:
        return gr("Activity");
      default:
        return "";
    }
  }
  function Xm(e) {
    try {
      var n = "";
      do (n += JS(e)), (e = e.return);
      while (e);
      return n;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  function Tn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Wm(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function e_(e) {
    var n = Wm(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      l = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var d = r.get,
        h = r.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (x) {
            (l = "" + x), h.call(this, x);
          },
        }),
        Object.defineProperty(e, n, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (x) {
            l = "" + x;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function ro(e) {
    e._valueTracker || (e._valueTracker = e_(e));
  }
  function Jm(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(),
      l = "";
    return (
      e && (l = Wm(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== r ? (n.setValue(e), !0) : !1
    );
  }
  function io(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var t_ = /[\n"\\]/g;
  function On(e) {
    return e.replace(t_, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function ju(e, n, r, l, d, h, x, w) {
    (e.name = ""),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (e.type = x)
        : e.removeAttribute("type"),
      n != null
        ? x === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + Tn(n))
          : e.value !== "" + Tn(n) && (e.value = "" + Tn(n))
        : (x !== "submit" && x !== "reset") || e.removeAttribute("value"),
      n != null
        ? Tu(e, x, Tn(n))
        : r != null
        ? Tu(e, x, Tn(r))
        : l != null && e.removeAttribute("value"),
      d == null && h != null && (e.defaultChecked = !!h),
      d != null &&
        (e.checked = d && typeof d != "function" && typeof d != "symbol"),
      w != null &&
      typeof w != "function" &&
      typeof w != "symbol" &&
      typeof w != "boolean"
        ? (e.name = "" + Tn(w))
        : e.removeAttribute("name");
  }
  function ep(e, n, r, l, d, h, x, w) {
    if (
      (h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (e.type = h),
      n != null || r != null)
    ) {
      if (!((h !== "submit" && h !== "reset") || n != null)) return;
      (r = r != null ? "" + Tn(r) : ""),
        (n = n != null ? "" + Tn(n) : r),
        w || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (l = l ?? d),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = w ? e.checked : !!l),
      (e.defaultChecked = !!l),
      x != null &&
        typeof x != "function" &&
        typeof x != "symbol" &&
        typeof x != "boolean" &&
        (e.name = x);
  }
  function Tu(e, n, r) {
    (n === "number" && io(e.ownerDocument) === e) ||
      e.defaultValue === "" + r ||
      (e.defaultValue = "" + r);
  }
  function vr(e, n, r, l) {
    if (((e = e.options), n)) {
      n = {};
      for (var d = 0; d < r.length; d++) n["$" + r[d]] = !0;
      for (r = 0; r < e.length; r++)
        (d = n.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== d && (e[r].selected = d),
          d && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Tn(r), n = null, d = 0; d < e.length; d++) {
        if (e[d].value === r) {
          (e[d].selected = !0), l && (e[d].defaultSelected = !0);
          return;
        }
        n !== null || e[d].disabled || (n = e[d]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function tp(e, n, r) {
    if (
      n != null &&
      ((n = "" + Tn(n)), n !== e.value && (e.value = n), r == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + Tn(r) : "";
  }
  function np(e, n, r, l) {
    if (n == null) {
      if (l != null) {
        if (r != null) throw Error(i(92));
        if (de(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), (n = r);
    }
    (r = Tn(n)),
      (e.defaultValue = r),
      (l = e.textContent),
      l === r && l !== "" && l !== null && (e.value = l);
  }
  function xr(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var n_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ap(e, n, r) {
    var l = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === ""
      ? l
        ? e.setProperty(n, "")
        : n === "float"
        ? (e.cssFloat = "")
        : (e[n] = "")
      : l
      ? e.setProperty(n, r)
      : typeof r != "number" || r === 0 || n_.has(n)
      ? n === "float"
        ? (e.cssFloat = r)
        : (e[n] = ("" + r).trim())
      : (e[n] = r + "px");
  }
  function sp(e, n, r) {
    if (n != null && typeof n != "object") throw Error(i(62));
    if (((e = e.style), r != null)) {
      for (var l in r)
        !r.hasOwnProperty(l) ||
          (n != null && n.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var d in n)
        (l = n[d]), n.hasOwnProperty(d) && r[d] !== l && ap(e, d, l);
    } else for (var h in n) n.hasOwnProperty(h) && ap(e, h, n[h]);
  }
  function Ou(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var a_ = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    s_ =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lo(e) {
    return s_.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Ru = null;
  function Au(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var br = null,
    wr = null;
  function rp(e) {
    var n = mr(e);
    if (n && (e = n.stateNode)) {
      var r = e[nn] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (ju(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name
            ),
            (n = r.name),
            r.type === "radio" && n != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name="' + On("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < r.length;
              n++
            ) {
              var l = r[n];
              if (l !== e && l.form === e.form) {
                var d = l[nn] || null;
                if (!d) throw Error(i(90));
                ju(
                  l,
                  d.value,
                  d.defaultValue,
                  d.defaultValue,
                  d.checked,
                  d.defaultChecked,
                  d.type,
                  d.name
                );
              }
            }
            for (n = 0; n < r.length; n++)
              (l = r[n]), l.form === e.form && Jm(l);
          }
          break e;
        case "textarea":
          tp(e, r.value, r.defaultValue);
          break e;
        case "select":
          (n = r.value), n != null && vr(e, !!r.multiple, n, !1);
      }
    }
  }
  var ku = !1;
  function ip(e, n, r) {
    if (ku) return e(n, r);
    ku = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (
        ((ku = !1),
        (br !== null || wr !== null) &&
          (Zo(), br && ((n = br), (e = wr), (wr = br = null), rp(n), e)))
      )
        for (n = 0; n < e.length; n++) rp(e[n]);
    }
  }
  function ji(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[nn] || null;
    if (l === null) return null;
    r = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(i(231, n, typeof r));
    return r;
  }
  var xa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Mu = !1;
  if (xa)
    try {
      var Ti = {};
      Object.defineProperty(Ti, "passive", {
        get: function () {
          Mu = !0;
        },
      }),
        window.addEventListener("test", Ti, Ti),
        window.removeEventListener("test", Ti, Ti);
    } catch {
      Mu = !1;
    }
  var Qa = null,
    Du = null,
    oo = null;
  function lp() {
    if (oo) return oo;
    var e,
      n = Du,
      r = n.length,
      l,
      d = "value" in Qa ? Qa.value : Qa.textContent,
      h = d.length;
    for (e = 0; e < r && n[e] === d[e]; e++);
    var x = r - e;
    for (l = 1; l <= x && n[r - l] === d[h - l]; l++);
    return (oo = d.slice(e, 1 < l ? 1 - l : void 0));
  }
  function co(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function uo() {
    return !0;
  }
  function op() {
    return !1;
  }
  function an(e) {
    function n(r, l, d, h, x) {
      (this._reactName = r),
        (this._targetInst = d),
        (this.type = l),
        (this.nativeEvent = h),
        (this.target = x),
        (this.currentTarget = null);
      for (var w in e)
        e.hasOwnProperty(w) && ((r = e[w]), (this[w] = r ? r(h) : h[w]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? uo
          : op),
        (this.isPropagationStopped = op),
        this
      );
    }
    return (
      v(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = uo));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = uo));
        },
        persist: function () {},
        isPersistent: uo,
      }),
      n
    );
  }
  var Ds = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    fo = an(Ds),
    Oi = v({}, Ds, { view: 0, detail: 0 }),
    r_ = an(Oi),
    Lu,
    Uu,
    Ri,
    ho = v({}, Oi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: qu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ri &&
              (Ri && e.type === "mousemove"
                ? ((Lu = e.screenX - Ri.screenX), (Uu = e.screenY - Ri.screenY))
                : (Uu = Lu = 0),
              (Ri = e)),
            Lu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Uu;
      },
    }),
    cp = an(ho),
    i_ = v({}, ho, { dataTransfer: 0 }),
    l_ = an(i_),
    o_ = v({}, Oi, { relatedTarget: 0 }),
    zu = an(o_),
    c_ = v({}, Ds, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u_ = an(c_),
    d_ = v({}, Ds, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    f_ = an(d_),
    h_ = v({}, Ds, { data: 0 }),
    up = an(h_),
    m_ = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    p_ = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    y_ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function g_(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = y_[e])
      ? !!n[e]
      : !1;
  }
  function qu() {
    return g_;
  }
  var v_ = v({}, Oi, {
      key: function (e) {
        if (e.key) {
          var n = m_[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = co(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? p_[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qu,
      charCode: function (e) {
        return e.type === "keypress" ? co(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? co(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    x_ = an(v_),
    b_ = v({}, ho, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    dp = an(b_),
    w_ = v({}, Oi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qu,
    }),
    S_ = an(w_),
    __ = v({}, Ds, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    N_ = an(__),
    C_ = v({}, ho, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    E_ = an(C_),
    j_ = v({}, Ds, { newState: 0, oldState: 0 }),
    T_ = an(j_),
    O_ = [9, 13, 27, 32],
    Pu = xa && "CompositionEvent" in window,
    Ai = null;
  xa && "documentMode" in document && (Ai = document.documentMode);
  var R_ = xa && "TextEvent" in window && !Ai,
    fp = xa && (!Pu || (Ai && 8 < Ai && 11 >= Ai)),
    hp = " ",
    mp = !1;
  function pp(e, n) {
    switch (e) {
      case "keyup":
        return O_.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function yp(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sr = !1;
  function A_(e, n) {
    switch (e) {
      case "compositionend":
        return yp(n);
      case "keypress":
        return n.which !== 32 ? null : ((mp = !0), hp);
      case "textInput":
        return (e = n.data), e === hp && mp ? null : e;
      default:
        return null;
    }
  }
  function k_(e, n) {
    if (Sr)
      return e === "compositionend" || (!Pu && pp(e, n))
        ? ((e = lp()), (oo = Du = Qa = null), (Sr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return fp && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var M_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function gp(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!M_[e.type] : n === "textarea";
  }
  function vp(e, n, r, l) {
    br ? (wr ? wr.push(l) : (wr = [l])) : (br = l),
      (n = Jo(n, "onChange")),
      0 < n.length &&
        ((r = new fo("onChange", "change", null, r, l)),
        e.push({ event: r, listeners: n }));
  }
  var ki = null,
    Mi = null;
  function D_(e) {
    Wg(e, 0);
  }
  function mo(e) {
    var n = Ei(e);
    if (Jm(n)) return e;
  }
  function xp(e, n) {
    if (e === "change") return n;
  }
  var bp = !1;
  if (xa) {
    var Vu;
    if (xa) {
      var Hu = "oninput" in document;
      if (!Hu) {
        var wp = document.createElement("div");
        wp.setAttribute("oninput", "return;"),
          (Hu = typeof wp.oninput == "function");
      }
      Vu = Hu;
    } else Vu = !1;
    bp = Vu && (!document.documentMode || 9 < document.documentMode);
  }
  function Sp() {
    ki && (ki.detachEvent("onpropertychange", _p), (Mi = ki = null));
  }
  function _p(e) {
    if (e.propertyName === "value" && mo(Mi)) {
      var n = [];
      vp(n, Mi, e, Au(e)), ip(D_, n);
    }
  }
  function L_(e, n, r) {
    e === "focusin"
      ? (Sp(), (ki = n), (Mi = r), ki.attachEvent("onpropertychange", _p))
      : e === "focusout" && Sp();
  }
  function U_(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return mo(Mi);
  }
  function z_(e, n) {
    if (e === "click") return mo(n);
  }
  function q_(e, n) {
    if (e === "input" || e === "change") return mo(n);
  }
  function P_(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var cn = typeof Object.is == "function" ? Object.is : P_;
  function Di(e, n) {
    if (cn(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var r = Object.keys(e),
      l = Object.keys(n);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var d = r[l];
      if (!Je.call(n, d) || !cn(e[d], n[d])) return !1;
    }
    return !0;
  }
  function Np(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Cp(e, n) {
    var r = Np(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (((l = e + r.textContent.length), e <= n && l >= n))
          return { node: r, offset: n - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Np(r);
    }
  }
  function Ep(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Ep(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function jp(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = io(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = io(e.document);
    }
    return n;
  }
  function Bu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var V_ = xa && "documentMode" in document && 11 >= document.documentMode,
    _r = null,
    Fu = null,
    Li = null,
    Ku = !1;
  function Tp(e, n, r) {
    var l =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Ku ||
      _r == null ||
      _r !== io(l) ||
      ((l = _r),
      "selectionStart" in l && Bu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Li && Di(Li, l)) ||
        ((Li = l),
        (l = Jo(Fu, "onSelect")),
        0 < l.length &&
          ((n = new fo("onSelect", "select", null, n, r)),
          e.push({ event: n, listeners: l }),
          (n.target = _r))));
  }
  function Ls(e, n) {
    var r = {};
    return (
      (r[e.toLowerCase()] = n.toLowerCase()),
      (r["Webkit" + e] = "webkit" + n),
      (r["Moz" + e] = "moz" + n),
      r
    );
  }
  var Nr = {
      animationend: Ls("Animation", "AnimationEnd"),
      animationiteration: Ls("Animation", "AnimationIteration"),
      animationstart: Ls("Animation", "AnimationStart"),
      transitionrun: Ls("Transition", "TransitionRun"),
      transitionstart: Ls("Transition", "TransitionStart"),
      transitioncancel: Ls("Transition", "TransitionCancel"),
      transitionend: Ls("Transition", "TransitionEnd"),
    },
    Qu = {},
    Op = {};
  xa &&
    ((Op = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Nr.animationend.animation,
      delete Nr.animationiteration.animation,
      delete Nr.animationstart.animation),
    "TransitionEvent" in window || delete Nr.transitionend.transition);
  function Us(e) {
    if (Qu[e]) return Qu[e];
    if (!Nr[e]) return e;
    var n = Nr[e],
      r;
    for (r in n) if (n.hasOwnProperty(r) && r in Op) return (Qu[e] = n[r]);
    return e;
  }
  var Rp = Us("animationend"),
    Ap = Us("animationiteration"),
    kp = Us("animationstart"),
    H_ = Us("transitionrun"),
    B_ = Us("transitionstart"),
    F_ = Us("transitioncancel"),
    Mp = Us("transitionend"),
    Dp = new Map(),
    Gu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Gu.push("scrollEnd");
  function Fn(e, n) {
    Dp.set(e, n), Ms(n, [e]);
  }
  var Lp = new WeakMap();
  function Rn(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = Lp.get(e);
      return r !== void 0
        ? r
        : ((n = { value: e, source: n, stack: Xm(n) }), Lp.set(e, n), n);
    }
    return { value: e, source: n, stack: Xm(n) };
  }
  var An = [],
    Cr = 0,
    Zu = 0;
  function po() {
    for (var e = Cr, n = (Zu = Cr = 0); n < e; ) {
      var r = An[n];
      An[n++] = null;
      var l = An[n];
      An[n++] = null;
      var d = An[n];
      An[n++] = null;
      var h = An[n];
      if (((An[n++] = null), l !== null && d !== null)) {
        var x = l.pending;
        x === null ? (d.next = d) : ((d.next = x.next), (x.next = d)),
          (l.pending = d);
      }
      h !== 0 && Up(r, d, h);
    }
  }
  function yo(e, n, r, l) {
    (An[Cr++] = e),
      (An[Cr++] = n),
      (An[Cr++] = r),
      (An[Cr++] = l),
      (Zu |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Yu(e, n, r, l) {
    return yo(e, n, r, l), go(e);
  }
  function Er(e, n) {
    return yo(e, null, null, n), go(e);
  }
  function Up(e, n, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var d = !1, h = e.return; h !== null; )
      (h.childLanes |= r),
        (l = h.alternate),
        l !== null && (l.childLanes |= r),
        h.tag === 22 &&
          ((e = h.stateNode), e === null || e._visibility & 1 || (d = !0)),
        (e = h),
        (h = h.return);
    return e.tag === 3
      ? ((h = e.stateNode),
        d &&
          n !== null &&
          ((d = 31 - ne(r)),
          (e = h.hiddenUpdates),
          (l = e[d]),
          l === null ? (e[d] = [n]) : l.push(n),
          (n.lane = r | 536870912)),
        h)
      : null;
  }
  function go(e) {
    if (50 < il) throw ((il = 0), (ef = null), Error(i(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var jr = {};
  function K_(e, n, r, l) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function un(e, n, r, l) {
    return new K_(e, n, r, l);
  }
  function Iu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function ba(e, n) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = un(e.tag, n, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = n),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 65011712),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (r.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function zp(e, n) {
    e.flags &= 65011714;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (n = r.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function vo(e, n, r, l, d, h) {
    var x = 0;
    if (((l = e), typeof e == "function")) Iu(e) && (x = 1);
    else if (typeof e == "string")
      x = GN(e, r, pe.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case G:
          return (e = un(31, r, n, d)), (e.elementType = G), (e.lanes = h), e;
        case j:
          return zs(r.children, d, h, n);
        case S:
          (x = 8), (d |= 24);
          break;
        case C:
          return (
            (e = un(12, r, n, d | 2)), (e.elementType = C), (e.lanes = h), e
          );
        case q:
          return (e = un(13, r, n, d)), (e.elementType = q), (e.lanes = h), e;
        case X:
          return (e = un(19, r, n, d)), (e.elementType = X), (e.lanes = h), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case A:
              case k:
                x = 10;
                break e;
              case O:
                x = 9;
                break e;
              case D:
                x = 11;
                break e;
              case Z:
                x = 14;
                break e;
              case P:
                (x = 16), (l = null);
                break e;
            }
          (x = 29),
            (r = Error(i(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (n = un(x, r, n, d)), (n.elementType = e), (n.type = l), (n.lanes = h), n
    );
  }
  function zs(e, n, r, l) {
    return (e = un(7, e, l, n)), (e.lanes = r), e;
  }
  function $u(e, n, r) {
    return (e = un(6, e, null, n)), (e.lanes = r), e;
  }
  function Xu(e, n, r) {
    return (
      (n = un(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = r),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var Tr = [],
    Or = 0,
    xo = null,
    bo = 0,
    kn = [],
    Mn = 0,
    qs = null,
    wa = 1,
    Sa = "";
  function Ps(e, n) {
    (Tr[Or++] = bo), (Tr[Or++] = xo), (xo = e), (bo = n);
  }
  function qp(e, n, r) {
    (kn[Mn++] = wa), (kn[Mn++] = Sa), (kn[Mn++] = qs), (qs = e);
    var l = wa;
    e = Sa;
    var d = 32 - ne(l) - 1;
    (l &= ~(1 << d)), (r += 1);
    var h = 32 - ne(n) + d;
    if (30 < h) {
      var x = d - (d % 5);
      (h = (l & ((1 << x) - 1)).toString(32)),
        (l >>= x),
        (d -= x),
        (wa = (1 << (32 - ne(n) + d)) | (r << d) | l),
        (Sa = h + e);
    } else (wa = (1 << h) | (r << d) | l), (Sa = e);
  }
  function Wu(e) {
    e.return !== null && (Ps(e, 1), qp(e, 1, 0));
  }
  function Ju(e) {
    for (; e === xo; )
      (xo = Tr[--Or]), (Tr[Or] = null), (bo = Tr[--Or]), (Tr[Or] = null);
    for (; e === qs; )
      (qs = kn[--Mn]),
        (kn[Mn] = null),
        (Sa = kn[--Mn]),
        (kn[Mn] = null),
        (wa = kn[--Mn]),
        (kn[Mn] = null);
  }
  var Jt = null,
    bt = null,
    nt = !1,
    Vs = null,
    sa = !1,
    ed = Error(i(519));
  function Hs(e) {
    var n = Error(i(418, ""));
    throw (qi(Rn(n, e)), ed);
  }
  function Pp(e) {
    var n = e.stateNode,
      r = e.type,
      l = e.memoizedProps;
    switch (((n[Gt] = e), (n[nn] = l), r)) {
      case "dialog":
        Ze("cancel", n), Ze("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ze("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < ol.length; r++) Ze(ol[r], n);
        break;
      case "source":
        Ze("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ze("error", n), Ze("load", n);
        break;
      case "details":
        Ze("toggle", n);
        break;
      case "input":
        Ze("invalid", n),
          ep(
            n,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          ro(n);
        break;
      case "select":
        Ze("invalid", n);
        break;
      case "textarea":
        Ze("invalid", n), np(n, l.value, l.defaultValue, l.children), ro(n);
    }
    (r = l.children),
      (typeof r != "string" && typeof r != "number" && typeof r != "bigint") ||
      n.textContent === "" + r ||
      l.suppressHydrationWarning === !0 ||
      nv(n.textContent, r)
        ? (l.popover != null && (Ze("beforetoggle", n), Ze("toggle", n)),
          l.onScroll != null && Ze("scroll", n),
          l.onScrollEnd != null && Ze("scrollend", n),
          l.onClick != null && (n.onclick = ec),
          (n = !0))
        : (n = !1),
      n || Hs(e);
  }
  function Vp(e) {
    for (Jt = e.return; Jt; )
      switch (Jt.tag) {
        case 5:
        case 13:
          sa = !1;
          return;
        case 27:
        case 3:
          sa = !0;
          return;
        default:
          Jt = Jt.return;
      }
  }
  function Ui(e) {
    if (e !== Jt) return !1;
    if (!nt) return Vp(e), (nt = !0), !1;
    var n = e.tag,
      r;
    if (
      ((r = n !== 3 && n !== 27) &&
        ((r = n === 5) &&
          ((r = e.type),
          (r =
            !(r !== "form" && r !== "button") || gf(e.type, e.memoizedProps))),
        (r = !r)),
      r && bt && Hs(e),
      Vp(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((r = e.data), r === "/$")) {
              if (n === 0) {
                bt = Qn(e.nextSibling);
                break e;
              }
              n--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || n++;
          e = e.nextSibling;
        }
        bt = null;
      }
    } else
      n === 27
        ? ((n = bt), ls(e.type) ? ((e = wf), (wf = null), (bt = e)) : (bt = n))
        : (bt = Jt ? Qn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function zi() {
    (bt = Jt = null), (nt = !1);
  }
  function Hp() {
    var e = Vs;
    return (
      e !== null &&
        (ln === null ? (ln = e) : ln.push.apply(ln, e), (Vs = null)),
      e
    );
  }
  function qi(e) {
    Vs === null ? (Vs = [e]) : Vs.push(e);
  }
  var td = I(null),
    Bs = null,
    _a = null;
  function Ga(e, n, r) {
    ae(td, n._currentValue), (n._currentValue = r);
  }
  function Na(e) {
    (e._currentValue = td.current), le(td);
  }
  function nd(e, n, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), l !== null && (l.childLanes |= n))
          : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function ad(e, n, r, l) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var h = d.dependencies;
      if (h !== null) {
        var x = d.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var w = h;
          h = d;
          for (var T = 0; T < n.length; T++)
            if (w.context === n[T]) {
              (h.lanes |= r),
                (w = h.alternate),
                w !== null && (w.lanes |= r),
                nd(h.return, r, e),
                l || (x = null);
              break e;
            }
          h = w.next;
        }
      } else if (d.tag === 18) {
        if (((x = d.return), x === null)) throw Error(i(341));
        (x.lanes |= r),
          (h = x.alternate),
          h !== null && (h.lanes |= r),
          nd(x, r, e),
          (x = null);
      } else x = d.child;
      if (x !== null) x.return = d;
      else
        for (x = d; x !== null; ) {
          if (x === e) {
            x = null;
            break;
          }
          if (((d = x.sibling), d !== null)) {
            (d.return = x.return), (x = d);
            break;
          }
          x = x.return;
        }
      d = x;
    }
  }
  function Pi(e, n, r, l) {
    e = null;
    for (var d = n, h = !1; d !== null; ) {
      if (!h) {
        if ((d.flags & 524288) !== 0) h = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var x = d.alternate;
        if (x === null) throw Error(i(387));
        if (((x = x.memoizedProps), x !== null)) {
          var w = d.type;
          cn(d.pendingProps.value, x.value) ||
            (e !== null ? e.push(w) : (e = [w]));
        }
      } else if (d === me.current) {
        if (((x = d.alternate), x === null)) throw Error(i(387));
        x.memoizedState.memoizedState !== d.memoizedState.memoizedState &&
          (e !== null ? e.push(ml) : (e = [ml]));
      }
      d = d.return;
    }
    e !== null && ad(n, e, r, l), (n.flags |= 262144);
  }
  function wo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!cn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Fs(e) {
    (Bs = e),
      (_a = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Zt(e) {
    return Bp(Bs, e);
  }
  function So(e, n) {
    return Bs === null && Fs(e), Bp(e, n);
  }
  function Bp(e, n) {
    var r = n._currentValue;
    if (((n = { context: n, memoizedValue: r, next: null }), _a === null)) {
      if (e === null) throw Error(i(308));
      (_a = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else _a = _a.next = n;
    return r;
  }
  var Q_ =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (r, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (r) {
                  return r();
                });
            };
          },
    G_ = t.unstable_scheduleCallback,
    Z_ = t.unstable_NormalPriority,
    Dt = {
      $$typeof: k,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function sd() {
    return { controller: new Q_(), data: new Map(), refCount: 0 };
  }
  function Vi(e) {
    e.refCount--,
      e.refCount === 0 &&
        G_(Z_, function () {
          e.controller.abort();
        });
  }
  var Hi = null,
    rd = 0,
    Rr = 0,
    Ar = null;
  function Y_(e, n) {
    if (Hi === null) {
      var r = (Hi = []);
      (rd = 0),
        (Rr = of()),
        (Ar = {
          status: "pending",
          value: void 0,
          then: function (l) {
            r.push(l);
          },
        });
    }
    return rd++, n.then(Fp, Fp), n;
  }
  function Fp() {
    if (--rd === 0 && Hi !== null) {
      Ar !== null && (Ar.status = "fulfilled");
      var e = Hi;
      (Hi = null), (Rr = 0), (Ar = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function I_(e, n) {
    var r = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (d) {
          r.push(d);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = n);
          for (var d = 0; d < r.length; d++) (0, r[d])(n);
        },
        function (d) {
          for (l.status = "rejected", l.reason = d, d = 0; d < r.length; d++)
            (0, r[d])(void 0);
        }
      ),
      l
    );
  }
  var Kp = L.S;
  L.S = function (e, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      Y_(e, n),
      Kp !== null && Kp(e, n);
  };
  var Ks = I(null);
  function id() {
    var e = Ks.current;
    return e !== null ? e : dt.pooledCache;
  }
  function _o(e, n) {
    n === null ? ae(Ks, Ks.current) : ae(Ks, n.pool);
  }
  function Qp() {
    var e = id();
    return e === null ? null : { parent: Dt._currentValue, pool: e };
  }
  var Bi = Error(i(460)),
    Gp = Error(i(474)),
    No = Error(i(542)),
    ld = { then: function () {} };
  function Zp(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Co() {}
  function Yp(e, n, r) {
    switch (
      ((r = e[r]),
      r === void 0 ? e.push(n) : r !== n && (n.then(Co, Co), (n = r)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), $p(e), e);
      default:
        if (typeof n.status == "string") n.then(Co, Co);
        else {
          if (((e = dt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (n.status === "pending") {
                  var d = n;
                  (d.status = "fulfilled"), (d.value = l);
                }
              },
              function (l) {
                if (n.status === "pending") {
                  var d = n;
                  (d.status = "rejected"), (d.reason = l);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), $p(e), e);
        }
        throw ((Fi = n), Bi);
    }
  }
  var Fi = null;
  function Ip() {
    if (Fi === null) throw Error(i(459));
    var e = Fi;
    return (Fi = null), e;
  }
  function $p(e) {
    if (e === Bi || e === No) throw Error(i(483));
  }
  var Za = !1;
  function od(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function cd(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Ya(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ia(e, n, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (at & 2) !== 0)) {
      var d = l.pending;
      return (
        d === null ? (n.next = n) : ((n.next = d.next), (d.next = n)),
        (l.pending = n),
        (n = go(e)),
        Up(e, null, r),
        n
      );
    }
    return yo(e, l, n, r), go(e);
  }
  function Ki(e, n, r) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (r & 4194048) !== 0))
    ) {
      var l = n.lanes;
      (l &= e.pendingLanes), (r |= l), (n.lanes = r), Fm(e, r);
    }
  }
  function ud(e, n) {
    var r = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), r === l)) {
      var d = null,
        h = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var x = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          };
          h === null ? (d = h = x) : (h = h.next = x), (r = r.next);
        } while (r !== null);
        h === null ? (d = h = n) : (h = h.next = n);
      } else d = h = n;
      (r = {
        baseState: l.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: h,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = n) : (e.next = n),
      (r.lastBaseUpdate = n);
  }
  var dd = !1;
  function Qi() {
    if (dd) {
      var e = Ar;
      if (e !== null) throw e;
    }
  }
  function Gi(e, n, r, l) {
    dd = !1;
    var d = e.updateQueue;
    Za = !1;
    var h = d.firstBaseUpdate,
      x = d.lastBaseUpdate,
      w = d.shared.pending;
    if (w !== null) {
      d.shared.pending = null;
      var T = w,
        B = T.next;
      (T.next = null), x === null ? (h = B) : (x.next = B), (x = T);
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (w = Y.lastBaseUpdate),
        w !== x &&
          (w === null ? (Y.firstBaseUpdate = B) : (w.next = B),
          (Y.lastBaseUpdate = T)));
    }
    if (h !== null) {
      var J = d.baseState;
      (x = 0), (Y = B = T = null), (w = h);
      do {
        var F = w.lane & -536870913,
          Q = F !== w.lane;
        if (Q ? ($e & F) === F : (l & F) === F) {
          F !== 0 && F === Rr && (dd = !0),
            Y !== null &&
              (Y = Y.next =
                {
                  lane: 0,
                  tag: w.tag,
                  payload: w.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Ae = e,
              Oe = w;
            F = n;
            var ot = r;
            switch (Oe.tag) {
              case 1:
                if (((Ae = Oe.payload), typeof Ae == "function")) {
                  J = Ae.call(ot, J, F);
                  break e;
                }
                J = Ae;
                break e;
              case 3:
                Ae.flags = (Ae.flags & -65537) | 128;
              case 0:
                if (
                  ((Ae = Oe.payload),
                  (F = typeof Ae == "function" ? Ae.call(ot, J, F) : Ae),
                  F == null)
                )
                  break e;
                J = v({}, J, F);
                break e;
              case 2:
                Za = !0;
            }
          }
          (F = w.callback),
            F !== null &&
              ((e.flags |= 64),
              Q && (e.flags |= 8192),
              (Q = d.callbacks),
              Q === null ? (d.callbacks = [F]) : Q.push(F));
        } else
          (Q = {
            lane: F,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            Y === null ? ((B = Y = Q), (T = J)) : (Y = Y.next = Q),
            (x |= F);
        if (((w = w.next), w === null)) {
          if (((w = d.shared.pending), w === null)) break;
          (Q = w),
            (w = Q.next),
            (Q.next = null),
            (d.lastBaseUpdate = Q),
            (d.shared.pending = null);
        }
      } while (!0);
      Y === null && (T = J),
        (d.baseState = T),
        (d.firstBaseUpdate = B),
        (d.lastBaseUpdate = Y),
        h === null && (d.shared.lanes = 0),
        (as |= x),
        (e.lanes = x),
        (e.memoizedState = J);
    }
  }
  function Xp(e, n) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(n);
  }
  function Wp(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++) Xp(r[e], n);
  }
  var kr = I(null),
    Eo = I(0);
  function Jp(e, n) {
    (e = Aa), ae(Eo, e), ae(kr, n), (Aa = e | n.baseLanes);
  }
  function fd() {
    ae(Eo, Aa), ae(kr, kr.current);
  }
  function hd() {
    (Aa = Eo.current), le(kr), le(Eo);
  }
  var $a = 0,
    Ve = null,
    it = null,
    Ot = null,
    jo = !1,
    Mr = !1,
    Qs = !1,
    To = 0,
    Zi = 0,
    Dr = null,
    $_ = 0;
  function Nt() {
    throw Error(i(321));
  }
  function md(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!cn(e[r], n[r])) return !1;
    return !0;
  }
  function pd(e, n, r, l, d, h) {
    return (
      ($a = h),
      (Ve = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? Uy : zy),
      (Qs = !1),
      (h = r(l, d)),
      (Qs = !1),
      Mr && (h = ty(n, r, l, d)),
      ey(e),
      h
    );
  }
  function ey(e) {
    L.H = Do;
    var n = it !== null && it.next !== null;
    if ((($a = 0), (Ot = it = Ve = null), (jo = !1), (Zi = 0), (Dr = null), n))
      throw Error(i(300));
    e === null ||
      Pt ||
      ((e = e.dependencies), e !== null && wo(e) && (Pt = !0));
  }
  function ty(e, n, r, l) {
    Ve = e;
    var d = 0;
    do {
      if ((Mr && (Dr = null), (Zi = 0), (Mr = !1), 25 <= d))
        throw Error(i(301));
      if (((d += 1), (Ot = it = null), e.updateQueue != null)) {
        var h = e.updateQueue;
        (h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0);
      }
      (L.H = aN), (h = n(r, l));
    } while (Mr);
    return h;
  }
  function X_() {
    var e = L.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? Yi(n) : n),
      (e = e.useState()[0]),
      (it !== null ? it.memoizedState : null) !== e && (Ve.flags |= 1024),
      n
    );
  }
  function yd() {
    var e = To !== 0;
    return (To = 0), e;
  }
  function gd(e, n, r) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~r);
  }
  function vd(e) {
    if (jo) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      jo = !1;
    }
    ($a = 0), (Ot = it = Ve = null), (Mr = !1), (Zi = To = 0), (Dr = null);
  }
  function sn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ot === null ? (Ve.memoizedState = Ot = e) : (Ot = Ot.next = e), Ot;
  }
  function Rt() {
    if (it === null) {
      var e = Ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = it.next;
    var n = Ot === null ? Ve.memoizedState : Ot.next;
    if (n !== null) (Ot = n), (it = e);
    else {
      if (e === null)
        throw Ve.alternate === null ? Error(i(467)) : Error(i(310));
      (it = e),
        (e = {
          memoizedState: it.memoizedState,
          baseState: it.baseState,
          baseQueue: it.baseQueue,
          queue: it.queue,
          next: null,
        }),
        Ot === null ? (Ve.memoizedState = Ot = e) : (Ot = Ot.next = e);
    }
    return Ot;
  }
  function xd() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Yi(e) {
    var n = Zi;
    return (
      (Zi += 1),
      Dr === null && (Dr = []),
      (e = Yp(Dr, e, n)),
      (n = Ve),
      (Ot === null ? n.memoizedState : Ot.next) === null &&
        ((n = n.alternate),
        (L.H = n === null || n.memoizedState === null ? Uy : zy)),
      e
    );
  }
  function Oo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Yi(e);
      if (e.$$typeof === k) return Zt(e);
    }
    throw Error(i(438, String(e)));
  }
  function bd(e) {
    var n = null,
      r = Ve.updateQueue;
    if ((r !== null && (n = r.memoCache), n == null)) {
      var l = Ve.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (n = {
              data: l.data.map(function (d) {
                return d.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      r === null && ((r = xd()), (Ve.updateQueue = r)),
      (r.memoCache = n),
      (r = n.data[n.index]),
      r === void 0)
    )
      for (r = n.data[n.index] = Array(e), l = 0; l < e; l++) r[l] = ue;
    return n.index++, r;
  }
  function Ca(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ro(e) {
    var n = Rt();
    return wd(n, it, e);
  }
  function wd(e, n, r) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = r;
    var d = e.baseQueue,
      h = l.pending;
    if (h !== null) {
      if (d !== null) {
        var x = d.next;
        (d.next = h.next), (h.next = x);
      }
      (n.baseQueue = d = h), (l.pending = null);
    }
    if (((h = e.baseState), d === null)) e.memoizedState = h;
    else {
      n = d.next;
      var w = (x = null),
        T = null,
        B = n,
        Y = !1;
      do {
        var J = B.lane & -536870913;
        if (J !== B.lane ? ($e & J) === J : ($a & J) === J) {
          var F = B.revertLane;
          if (F === 0)
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              J === Rr && (Y = !0);
          else if (($a & F) === F) {
            (B = B.next), F === Rr && (Y = !0);
            continue;
          } else
            (J = {
              lane: 0,
              revertLane: B.revertLane,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              T === null ? ((w = T = J), (x = h)) : (T = T.next = J),
              (Ve.lanes |= F),
              (as |= F);
          (J = B.action),
            Qs && r(h, J),
            (h = B.hasEagerState ? B.eagerState : r(h, J));
        } else
          (F = {
            lane: J,
            revertLane: B.revertLane,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            T === null ? ((w = T = F), (x = h)) : (T = T.next = F),
            (Ve.lanes |= J),
            (as |= J);
        B = B.next;
      } while (B !== null && B !== n);
      if (
        (T === null ? (x = h) : (T.next = w),
        !cn(h, e.memoizedState) && ((Pt = !0), Y && ((r = Ar), r !== null)))
      )
        throw r;
      (e.memoizedState = h),
        (e.baseState = x),
        (e.baseQueue = T),
        (l.lastRenderedState = h);
    }
    return d === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Sd(e) {
    var n = Rt(),
      r = n.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch,
      d = r.pending,
      h = n.memoizedState;
    if (d !== null) {
      r.pending = null;
      var x = (d = d.next);
      do (h = e(h, x.action)), (x = x.next);
      while (x !== d);
      cn(h, n.memoizedState) || (Pt = !0),
        (n.memoizedState = h),
        n.baseQueue === null && (n.baseState = h),
        (r.lastRenderedState = h);
    }
    return [h, l];
  }
  function ny(e, n, r) {
    var l = Ve,
      d = Rt(),
      h = nt;
    if (h) {
      if (r === void 0) throw Error(i(407));
      r = r();
    } else r = n();
    var x = !cn((it || d).memoizedState, r);
    x && ((d.memoizedState = r), (Pt = !0)), (d = d.queue);
    var w = ry.bind(null, l, d, e);
    if (
      (Ii(2048, 8, w, [e]),
      d.getSnapshot !== n || x || (Ot !== null && Ot.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Lr(9, Ao(), sy.bind(null, l, d, r, n), null),
        dt === null)
      )
        throw Error(i(349));
      h || ($a & 124) !== 0 || ay(l, n, r);
    }
    return r;
  }
  function ay(e, n, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: r }),
      (n = Ve.updateQueue),
      n === null
        ? ((n = xd()), (Ve.updateQueue = n), (n.stores = [e]))
        : ((r = n.stores), r === null ? (n.stores = [e]) : r.push(e));
  }
  function sy(e, n, r, l) {
    (n.value = r), (n.getSnapshot = l), iy(n) && ly(e);
  }
  function ry(e, n, r) {
    return r(function () {
      iy(n) && ly(e);
    });
  }
  function iy(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !cn(e, r);
    } catch {
      return !0;
    }
  }
  function ly(e) {
    var n = Er(e, 2);
    n !== null && pn(n, e, 2);
  }
  function _d(e) {
    var n = sn();
    if (typeof e == "function") {
      var r = e;
      if (((e = r()), Qs)) {
        ie(!0);
        try {
          r();
        } finally {
          ie(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ca,
        lastRenderedState: e,
      }),
      n
    );
  }
  function oy(e, n, r, l) {
    return (e.baseState = r), wd(e, it, typeof l == "function" ? l : Ca);
  }
  function W_(e, n, r, l, d) {
    if (Mo(e)) throw Error(i(485));
    if (((e = n.action), e !== null)) {
      var h = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (x) {
          h.listeners.push(x);
        },
      };
      L.T !== null ? r(!0) : (h.isTransition = !1),
        l(h),
        (r = n.pending),
        r === null
          ? ((h.next = n.pending = h), cy(n, h))
          : ((h.next = r.next), (n.pending = r.next = h));
    }
  }
  function cy(e, n) {
    var r = n.action,
      l = n.payload,
      d = e.state;
    if (n.isTransition) {
      var h = L.T,
        x = {};
      L.T = x;
      try {
        var w = r(d, l),
          T = L.S;
        T !== null && T(x, w), uy(e, n, w);
      } catch (B) {
        Nd(e, n, B);
      } finally {
        L.T = h;
      }
    } else
      try {
        (h = r(d, l)), uy(e, n, h);
      } catch (B) {
        Nd(e, n, B);
      }
  }
  function uy(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function"
      ? r.then(
          function (l) {
            dy(e, n, l);
          },
          function (l) {
            return Nd(e, n, l);
          }
        )
      : dy(e, n, r);
  }
  function dy(e, n, r) {
    (n.status = "fulfilled"),
      (n.value = r),
      fy(n),
      (e.state = r),
      (n = e.pending),
      n !== null &&
        ((r = n.next),
        r === n ? (e.pending = null) : ((r = r.next), (n.next = r), cy(e, r)));
  }
  function Nd(e, n, r) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (n.status = "rejected"), (n.reason = r), fy(n), (n = n.next);
      while (n !== l);
    }
    e.action = null;
  }
  function fy(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function hy(e, n) {
    return n;
  }
  function my(e, n) {
    if (nt) {
      var r = dt.formState;
      if (r !== null) {
        e: {
          var l = Ve;
          if (nt) {
            if (bt) {
              t: {
                for (var d = bt, h = sa; d.nodeType !== 8; ) {
                  if (!h) {
                    d = null;
                    break t;
                  }
                  if (((d = Qn(d.nextSibling)), d === null)) {
                    d = null;
                    break t;
                  }
                }
                (h = d.data), (d = h === "F!" || h === "F" ? d : null);
              }
              if (d) {
                (bt = Qn(d.nextSibling)), (l = d.data === "F!");
                break e;
              }
            }
            Hs(l);
          }
          l = !1;
        }
        l && (n = r[0]);
      }
    }
    return (
      (r = sn()),
      (r.memoizedState = r.baseState = n),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hy,
        lastRenderedState: n,
      }),
      (r.queue = l),
      (r = My.bind(null, Ve, l)),
      (l.dispatch = r),
      (l = _d(!1)),
      (h = Od.bind(null, Ve, !1, l.queue)),
      (l = sn()),
      (d = { state: n, dispatch: null, action: e, pending: null }),
      (l.queue = d),
      (r = W_.bind(null, Ve, d, h, r)),
      (d.dispatch = r),
      (l.memoizedState = e),
      [n, r, !1]
    );
  }
  function py(e) {
    var n = Rt();
    return yy(n, it, e);
  }
  function yy(e, n, r) {
    if (
      ((n = wd(e, n, hy)[0]),
      (e = Ro(Ca)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var l = Yi(n);
      } catch (x) {
        throw x === Bi ? No : x;
      }
    else l = n;
    n = Rt();
    var d = n.queue,
      h = d.dispatch;
    return (
      r !== n.memoizedState &&
        ((Ve.flags |= 2048), Lr(9, Ao(), J_.bind(null, d, r), null)),
      [l, h, e]
    );
  }
  function J_(e, n) {
    e.action = n;
  }
  function gy(e) {
    var n = Rt(),
      r = it;
    if (r !== null) return yy(n, r, e);
    Rt(), (n = n.memoizedState), (r = Rt());
    var l = r.queue.dispatch;
    return (r.memoizedState = e), [n, l, !1];
  }
  function Lr(e, n, r, l) {
    return (
      (e = { tag: e, create: r, deps: l, inst: n, next: null }),
      (n = Ve.updateQueue),
      n === null && ((n = xd()), (Ve.updateQueue = n)),
      (r = n.lastEffect),
      r === null
        ? (n.lastEffect = e.next = e)
        : ((l = r.next), (r.next = e), (e.next = l), (n.lastEffect = e)),
      e
    );
  }
  function Ao() {
    return { destroy: void 0, resource: void 0 };
  }
  function vy() {
    return Rt().memoizedState;
  }
  function ko(e, n, r, l) {
    var d = sn();
    (l = l === void 0 ? null : l),
      (Ve.flags |= e),
      (d.memoizedState = Lr(1 | n, Ao(), r, l));
  }
  function Ii(e, n, r, l) {
    var d = Rt();
    l = l === void 0 ? null : l;
    var h = d.memoizedState.inst;
    it !== null && l !== null && md(l, it.memoizedState.deps)
      ? (d.memoizedState = Lr(n, h, r, l))
      : ((Ve.flags |= e), (d.memoizedState = Lr(1 | n, h, r, l)));
  }
  function xy(e, n) {
    ko(8390656, 8, e, n);
  }
  function by(e, n) {
    Ii(2048, 8, e, n);
  }
  function wy(e, n) {
    return Ii(4, 2, e, n);
  }
  function Sy(e, n) {
    return Ii(4, 4, e, n);
  }
  function _y(e, n) {
    if (typeof n == "function") {
      e = e();
      var r = n(e);
      return function () {
        typeof r == "function" ? r() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Ny(e, n, r) {
    (r = r != null ? r.concat([e]) : null), Ii(4, 4, _y.bind(null, n, e), r);
  }
  function Cd() {}
  function Cy(e, n) {
    var r = Rt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    return n !== null && md(n, l[1]) ? l[0] : ((r.memoizedState = [e, n]), e);
  }
  function Ey(e, n) {
    var r = Rt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    if (n !== null && md(n, l[1])) return l[0];
    if (((l = e()), Qs)) {
      ie(!0);
      try {
        e();
      } finally {
        ie(!1);
      }
    }
    return (r.memoizedState = [l, n]), l;
  }
  function Ed(e, n, r) {
    return r === void 0 || ($a & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = r), (e = Og()), (Ve.lanes |= e), (as |= e), r);
  }
  function jy(e, n, r, l) {
    return cn(r, n)
      ? r
      : kr.current !== null
      ? ((e = Ed(e, r, l)), cn(e, n) || (Pt = !0), e)
      : ($a & 42) === 0
      ? ((Pt = !0), (e.memoizedState = r))
      : ((e = Og()), (Ve.lanes |= e), (as |= e), n);
  }
  function Ty(e, n, r, l, d) {
    var h = U.p;
    U.p = h !== 0 && 8 > h ? h : 8;
    var x = L.T,
      w = {};
    (L.T = w), Od(e, !1, n, r);
    try {
      var T = d(),
        B = L.S;
      if (
        (B !== null && B(w, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var Y = I_(T, l);
        $i(e, n, Y, mn(e));
      } else $i(e, n, l, mn(e));
    } catch (J) {
      $i(e, n, { then: function () {}, status: "rejected", reason: J }, mn());
    } finally {
      (U.p = h), (L.T = x);
    }
  }
  function eN() {}
  function jd(e, n, r, l) {
    if (e.tag !== 5) throw Error(i(476));
    var d = Oy(e).queue;
    Ty(
      e,
      d,
      n,
      W,
      r === null
        ? eN
        : function () {
            return Ry(e), r(l);
          }
    );
  }
  function Oy(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ca,
        lastRenderedState: W,
      },
      next: null,
    };
    var r = {};
    return (
      (n.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ca,
          lastRenderedState: r,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function Ry(e) {
    var n = Oy(e).next.queue;
    $i(e, n, {}, mn());
  }
  function Td() {
    return Zt(ml);
  }
  function Ay() {
    return Rt().memoizedState;
  }
  function ky() {
    return Rt().memoizedState;
  }
  function tN(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = mn();
          e = Ya(r);
          var l = Ia(n, e, r);
          l !== null && (pn(l, n, r), Ki(l, n, r)),
            (n = { cache: sd() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function nN(e, n, r) {
    var l = mn();
    (r = {
      lane: l,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Mo(e)
        ? Dy(n, r)
        : ((r = Yu(e, n, r, l)), r !== null && (pn(r, e, l), Ly(r, n, l)));
  }
  function My(e, n, r) {
    var l = mn();
    $i(e, n, r, l);
  }
  function $i(e, n, r, l) {
    var d = {
      lane: l,
      revertLane: 0,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Mo(e)) Dy(n, d);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = n.lastRenderedReducer), h !== null)
      )
        try {
          var x = n.lastRenderedState,
            w = h(x, r);
          if (((d.hasEagerState = !0), (d.eagerState = w), cn(w, x)))
            return yo(e, n, d, 0), dt === null && po(), !1;
        } catch {}
      if (((r = Yu(e, n, d, l)), r !== null))
        return pn(r, e, l), Ly(r, n, l), !0;
    }
    return !1;
  }
  function Od(e, n, r, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: of(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Mo(e))
    ) {
      if (n) throw Error(i(479));
    } else (n = Yu(e, r, l, 2)), n !== null && pn(n, e, 2);
  }
  function Mo(e) {
    var n = e.alternate;
    return e === Ve || (n !== null && n === Ve);
  }
  function Dy(e, n) {
    Mr = jo = !0;
    var r = e.pending;
    r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
      (e.pending = n);
  }
  function Ly(e, n, r) {
    if ((r & 4194048) !== 0) {
      var l = n.lanes;
      (l &= e.pendingLanes), (r |= l), (n.lanes = r), Fm(e, r);
    }
  }
  var Do = {
      readContext: Zt,
      use: Oo,
      useCallback: Nt,
      useContext: Nt,
      useEffect: Nt,
      useImperativeHandle: Nt,
      useLayoutEffect: Nt,
      useInsertionEffect: Nt,
      useMemo: Nt,
      useReducer: Nt,
      useRef: Nt,
      useState: Nt,
      useDebugValue: Nt,
      useDeferredValue: Nt,
      useTransition: Nt,
      useSyncExternalStore: Nt,
      useId: Nt,
      useHostTransitionStatus: Nt,
      useFormState: Nt,
      useActionState: Nt,
      useOptimistic: Nt,
      useMemoCache: Nt,
      useCacheRefresh: Nt,
    },
    Uy = {
      readContext: Zt,
      use: Oo,
      useCallback: function (e, n) {
        return (sn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Zt,
      useEffect: xy,
      useImperativeHandle: function (e, n, r) {
        (r = r != null ? r.concat([e]) : null),
          ko(4194308, 4, _y.bind(null, n, e), r);
      },
      useLayoutEffect: function (e, n) {
        return ko(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        ko(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var r = sn();
        n = n === void 0 ? null : n;
        var l = e();
        if (Qs) {
          ie(!0);
          try {
            e();
          } finally {
            ie(!1);
          }
        }
        return (r.memoizedState = [l, n]), l;
      },
      useReducer: function (e, n, r) {
        var l = sn();
        if (r !== void 0) {
          var d = r(n);
          if (Qs) {
            ie(!0);
            try {
              r(n);
            } finally {
              ie(!1);
            }
          }
        } else d = n;
        return (
          (l.memoizedState = l.baseState = d),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: d,
          }),
          (l.queue = e),
          (e = e.dispatch = nN.bind(null, Ve, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = sn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: function (e) {
        e = _d(e);
        var n = e.queue,
          r = My.bind(null, Ve, n);
        return (n.dispatch = r), [e.memoizedState, r];
      },
      useDebugValue: Cd,
      useDeferredValue: function (e, n) {
        var r = sn();
        return Ed(r, e, n);
      },
      useTransition: function () {
        var e = _d(!1);
        return (
          (e = Ty.bind(null, Ve, e.queue, !0, !1)),
          (sn().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, r) {
        var l = Ve,
          d = sn();
        if (nt) {
          if (r === void 0) throw Error(i(407));
          r = r();
        } else {
          if (((r = n()), dt === null)) throw Error(i(349));
          ($e & 124) !== 0 || ay(l, n, r);
        }
        d.memoizedState = r;
        var h = { value: r, getSnapshot: n };
        return (
          (d.queue = h),
          xy(ry.bind(null, l, h, e), [e]),
          (l.flags |= 2048),
          Lr(9, Ao(), sy.bind(null, l, h, r, n), null),
          r
        );
      },
      useId: function () {
        var e = sn(),
          n = dt.identifierPrefix;
        if (nt) {
          var r = Sa,
            l = wa;
          (r = (l & ~(1 << (32 - ne(l) - 1))).toString(32) + r),
            (n = "«" + n + "R" + r),
            (r = To++),
            0 < r && (n += "H" + r.toString(32)),
            (n += "»");
        } else (r = $_++), (n = "«" + n + "r" + r.toString(32) + "»");
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: Td,
      useFormState: my,
      useActionState: my,
      useOptimistic: function (e) {
        var n = sn();
        n.memoizedState = n.baseState = e;
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = r),
          (n = Od.bind(null, Ve, !0, r)),
          (r.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: bd,
      useCacheRefresh: function () {
        return (sn().memoizedState = tN.bind(null, Ve));
      },
    },
    zy = {
      readContext: Zt,
      use: Oo,
      useCallback: Cy,
      useContext: Zt,
      useEffect: by,
      useImperativeHandle: Ny,
      useInsertionEffect: wy,
      useLayoutEffect: Sy,
      useMemo: Ey,
      useReducer: Ro,
      useRef: vy,
      useState: function () {
        return Ro(Ca);
      },
      useDebugValue: Cd,
      useDeferredValue: function (e, n) {
        var r = Rt();
        return jy(r, it.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Ro(Ca)[0],
          n = Rt().memoizedState;
        return [typeof e == "boolean" ? e : Yi(e), n];
      },
      useSyncExternalStore: ny,
      useId: Ay,
      useHostTransitionStatus: Td,
      useFormState: py,
      useActionState: py,
      useOptimistic: function (e, n) {
        var r = Rt();
        return oy(r, it, e, n);
      },
      useMemoCache: bd,
      useCacheRefresh: ky,
    },
    aN = {
      readContext: Zt,
      use: Oo,
      useCallback: Cy,
      useContext: Zt,
      useEffect: by,
      useImperativeHandle: Ny,
      useInsertionEffect: wy,
      useLayoutEffect: Sy,
      useMemo: Ey,
      useReducer: Sd,
      useRef: vy,
      useState: function () {
        return Sd(Ca);
      },
      useDebugValue: Cd,
      useDeferredValue: function (e, n) {
        var r = Rt();
        return it === null ? Ed(r, e, n) : jy(r, it.memoizedState, e, n);
      },
      useTransition: function () {
        var e = Sd(Ca)[0],
          n = Rt().memoizedState;
        return [typeof e == "boolean" ? e : Yi(e), n];
      },
      useSyncExternalStore: ny,
      useId: Ay,
      useHostTransitionStatus: Td,
      useFormState: gy,
      useActionState: gy,
      useOptimistic: function (e, n) {
        var r = Rt();
        return it !== null
          ? oy(r, it, e, n)
          : ((r.baseState = e), [e, r.queue.dispatch]);
      },
      useMemoCache: bd,
      useCacheRefresh: ky,
    },
    Ur = null,
    Xi = 0;
  function Lo(e) {
    var n = Xi;
    return (Xi += 1), Ur === null && (Ur = []), Yp(Ur, e, n);
  }
  function Wi(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function Uo(e, n) {
    throw n.$$typeof === b
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e
          )
        ));
  }
  function qy(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Py(e) {
    function n(z, M) {
      if (e) {
        var H = z.deletions;
        H === null ? ((z.deletions = [M]), (z.flags |= 16)) : H.push(M);
      }
    }
    function r(z, M) {
      if (!e) return null;
      for (; M !== null; ) n(z, M), (M = M.sibling);
      return null;
    }
    function l(z) {
      for (var M = new Map(); z !== null; )
        z.key !== null ? M.set(z.key, z) : M.set(z.index, z), (z = z.sibling);
      return M;
    }
    function d(z, M) {
      return (z = ba(z, M)), (z.index = 0), (z.sibling = null), z;
    }
    function h(z, M, H) {
      return (
        (z.index = H),
        e
          ? ((H = z.alternate),
            H !== null
              ? ((H = H.index), H < M ? ((z.flags |= 67108866), M) : H)
              : ((z.flags |= 67108866), M))
          : ((z.flags |= 1048576), M)
      );
    }
    function x(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function w(z, M, H, $) {
      return M === null || M.tag !== 6
        ? ((M = $u(H, z.mode, $)), (M.return = z), M)
        : ((M = d(M, H)), (M.return = z), M);
    }
    function T(z, M, H, $) {
      var xe = H.type;
      return xe === j
        ? Y(z, M, H.props.children, $, H.key)
        : M !== null &&
          (M.elementType === xe ||
            (typeof xe == "object" &&
              xe !== null &&
              xe.$$typeof === P &&
              qy(xe) === M.type))
        ? ((M = d(M, H.props)), Wi(M, H), (M.return = z), M)
        : ((M = vo(H.type, H.key, H.props, null, z.mode, $)),
          Wi(M, H),
          (M.return = z),
          M);
    }
    function B(z, M, H, $) {
      return M === null ||
        M.tag !== 4 ||
        M.stateNode.containerInfo !== H.containerInfo ||
        M.stateNode.implementation !== H.implementation
        ? ((M = Xu(H, z.mode, $)), (M.return = z), M)
        : ((M = d(M, H.children || [])), (M.return = z), M);
    }
    function Y(z, M, H, $, xe) {
      return M === null || M.tag !== 7
        ? ((M = zs(H, z.mode, $, xe)), (M.return = z), M)
        : ((M = d(M, H)), (M.return = z), M);
    }
    function J(z, M, H) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (M = $u("" + M, z.mode, H)), (M.return = z), M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case _:
            return (
              (H = vo(M.type, M.key, M.props, null, z.mode, H)),
              Wi(H, M),
              (H.return = z),
              H
            );
          case N:
            return (M = Xu(M, z.mode, H)), (M.return = z), M;
          case P:
            var $ = M._init;
            return (M = $(M._payload)), J(z, M, H);
        }
        if (de(M) || te(M))
          return (M = zs(M, z.mode, H, null)), (M.return = z), M;
        if (typeof M.then == "function") return J(z, Lo(M), H);
        if (M.$$typeof === k) return J(z, So(z, M), H);
        Uo(z, M);
      }
      return null;
    }
    function F(z, M, H, $) {
      var xe = M !== null ? M.key : null;
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return xe !== null ? null : w(z, M, "" + H, $);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case _:
            return H.key === xe ? T(z, M, H, $) : null;
          case N:
            return H.key === xe ? B(z, M, H, $) : null;
          case P:
            return (xe = H._init), (H = xe(H._payload)), F(z, M, H, $);
        }
        if (de(H) || te(H)) return xe !== null ? null : Y(z, M, H, $, null);
        if (typeof H.then == "function") return F(z, M, Lo(H), $);
        if (H.$$typeof === k) return F(z, M, So(z, H), $);
        Uo(z, H);
      }
      return null;
    }
    function Q(z, M, H, $, xe) {
      if (
        (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
      )
        return (z = z.get(H) || null), w(M, z, "" + $, xe);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case _:
            return (
              (z = z.get($.key === null ? H : $.key) || null), T(M, z, $, xe)
            );
          case N:
            return (
              (z = z.get($.key === null ? H : $.key) || null), B(M, z, $, xe)
            );
          case P:
            var Fe = $._init;
            return ($ = Fe($._payload)), Q(z, M, H, $, xe);
        }
        if (de($) || te($)) return (z = z.get(H) || null), Y(M, z, $, xe, null);
        if (typeof $.then == "function") return Q(z, M, H, Lo($), xe);
        if ($.$$typeof === k) return Q(z, M, H, So(M, $), xe);
        Uo(M, $);
      }
      return null;
    }
    function Ae(z, M, H, $) {
      for (
        var xe = null, Fe = null, Ce = M, Re = (M = 0), Ht = null;
        Ce !== null && Re < H.length;
        Re++
      ) {
        Ce.index > Re ? ((Ht = Ce), (Ce = null)) : (Ht = Ce.sibling);
        var et = F(z, Ce, H[Re], $);
        if (et === null) {
          Ce === null && (Ce = Ht);
          break;
        }
        e && Ce && et.alternate === null && n(z, Ce),
          (M = h(et, M, Re)),
          Fe === null ? (xe = et) : (Fe.sibling = et),
          (Fe = et),
          (Ce = Ht);
      }
      if (Re === H.length) return r(z, Ce), nt && Ps(z, Re), xe;
      if (Ce === null) {
        for (; Re < H.length; Re++)
          (Ce = J(z, H[Re], $)),
            Ce !== null &&
              ((M = h(Ce, M, Re)),
              Fe === null ? (xe = Ce) : (Fe.sibling = Ce),
              (Fe = Ce));
        return nt && Ps(z, Re), xe;
      }
      for (Ce = l(Ce); Re < H.length; Re++)
        (Ht = Q(Ce, z, Re, H[Re], $)),
          Ht !== null &&
            (e &&
              Ht.alternate !== null &&
              Ce.delete(Ht.key === null ? Re : Ht.key),
            (M = h(Ht, M, Re)),
            Fe === null ? (xe = Ht) : (Fe.sibling = Ht),
            (Fe = Ht));
      return (
        e &&
          Ce.forEach(function (fs) {
            return n(z, fs);
          }),
        nt && Ps(z, Re),
        xe
      );
    }
    function Oe(z, M, H, $) {
      if (H == null) throw Error(i(151));
      for (
        var xe = null,
          Fe = null,
          Ce = M,
          Re = (M = 0),
          Ht = null,
          et = H.next();
        Ce !== null && !et.done;
        Re++, et = H.next()
      ) {
        Ce.index > Re ? ((Ht = Ce), (Ce = null)) : (Ht = Ce.sibling);
        var fs = F(z, Ce, et.value, $);
        if (fs === null) {
          Ce === null && (Ce = Ht);
          break;
        }
        e && Ce && fs.alternate === null && n(z, Ce),
          (M = h(fs, M, Re)),
          Fe === null ? (xe = fs) : (Fe.sibling = fs),
          (Fe = fs),
          (Ce = Ht);
      }
      if (et.done) return r(z, Ce), nt && Ps(z, Re), xe;
      if (Ce === null) {
        for (; !et.done; Re++, et = H.next())
          (et = J(z, et.value, $)),
            et !== null &&
              ((M = h(et, M, Re)),
              Fe === null ? (xe = et) : (Fe.sibling = et),
              (Fe = et));
        return nt && Ps(z, Re), xe;
      }
      for (Ce = l(Ce); !et.done; Re++, et = H.next())
        (et = Q(Ce, z, Re, et.value, $)),
          et !== null &&
            (e &&
              et.alternate !== null &&
              Ce.delete(et.key === null ? Re : et.key),
            (M = h(et, M, Re)),
            Fe === null ? (xe = et) : (Fe.sibling = et),
            (Fe = et));
      return (
        e &&
          Ce.forEach(function (sC) {
            return n(z, sC);
          }),
        nt && Ps(z, Re),
        xe
      );
    }
    function ot(z, M, H, $) {
      if (
        (typeof H == "object" &&
          H !== null &&
          H.type === j &&
          H.key === null &&
          (H = H.props.children),
        typeof H == "object" && H !== null)
      ) {
        switch (H.$$typeof) {
          case _:
            e: {
              for (var xe = H.key; M !== null; ) {
                if (M.key === xe) {
                  if (((xe = H.type), xe === j)) {
                    if (M.tag === 7) {
                      r(z, M.sibling),
                        ($ = d(M, H.props.children)),
                        ($.return = z),
                        (z = $);
                      break e;
                    }
                  } else if (
                    M.elementType === xe ||
                    (typeof xe == "object" &&
                      xe !== null &&
                      xe.$$typeof === P &&
                      qy(xe) === M.type)
                  ) {
                    r(z, M.sibling),
                      ($ = d(M, H.props)),
                      Wi($, H),
                      ($.return = z),
                      (z = $);
                    break e;
                  }
                  r(z, M);
                  break;
                } else n(z, M);
                M = M.sibling;
              }
              H.type === j
                ? (($ = zs(H.props.children, z.mode, $, H.key)),
                  ($.return = z),
                  (z = $))
                : (($ = vo(H.type, H.key, H.props, null, z.mode, $)),
                  Wi($, H),
                  ($.return = z),
                  (z = $));
            }
            return x(z);
          case N:
            e: {
              for (xe = H.key; M !== null; ) {
                if (M.key === xe)
                  if (
                    M.tag === 4 &&
                    M.stateNode.containerInfo === H.containerInfo &&
                    M.stateNode.implementation === H.implementation
                  ) {
                    r(z, M.sibling),
                      ($ = d(M, H.children || [])),
                      ($.return = z),
                      (z = $);
                    break e;
                  } else {
                    r(z, M);
                    break;
                  }
                else n(z, M);
                M = M.sibling;
              }
              ($ = Xu(H, z.mode, $)), ($.return = z), (z = $);
            }
            return x(z);
          case P:
            return (xe = H._init), (H = xe(H._payload)), ot(z, M, H, $);
        }
        if (de(H)) return Ae(z, M, H, $);
        if (te(H)) {
          if (((xe = te(H)), typeof xe != "function")) throw Error(i(150));
          return (H = xe.call(H)), Oe(z, M, H, $);
        }
        if (typeof H.then == "function") return ot(z, M, Lo(H), $);
        if (H.$$typeof === k) return ot(z, M, So(z, H), $);
        Uo(z, H);
      }
      return (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
        ? ((H = "" + H),
          M !== null && M.tag === 6
            ? (r(z, M.sibling), ($ = d(M, H)), ($.return = z), (z = $))
            : (r(z, M), ($ = $u(H, z.mode, $)), ($.return = z), (z = $)),
          x(z))
        : r(z, M);
    }
    return function (z, M, H, $) {
      try {
        Xi = 0;
        var xe = ot(z, M, H, $);
        return (Ur = null), xe;
      } catch (Ce) {
        if (Ce === Bi || Ce === No) throw Ce;
        var Fe = un(29, Ce, null, z.mode);
        return (Fe.lanes = $), (Fe.return = z), Fe;
      }
    };
  }
  var zr = Py(!0),
    Vy = Py(!1),
    Dn = I(null),
    ra = null;
  function Xa(e) {
    var n = e.alternate;
    ae(Lt, Lt.current & 1),
      ae(Dn, e),
      ra === null &&
        (n === null || kr.current !== null || n.memoizedState !== null) &&
        (ra = e);
  }
  function Hy(e) {
    if (e.tag === 22) {
      if ((ae(Lt, Lt.current), ae(Dn, e), ra === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (ra = e);
      }
    } else Wa();
  }
  function Wa() {
    ae(Lt, Lt.current), ae(Dn, Dn.current);
  }
  function Ea(e) {
    le(Dn), ra === e && (ra = null), le(Lt);
  }
  var Lt = I(0);
  function zo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || bf(r))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  function Rd(e, n, r, l) {
    (n = e.memoizedState),
      (r = r(l, n)),
      (r = r == null ? n : v({}, n, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Ad = {
    enqueueSetState: function (e, n, r) {
      e = e._reactInternals;
      var l = mn(),
        d = Ya(l);
      (d.payload = n),
        r != null && (d.callback = r),
        (n = Ia(e, d, l)),
        n !== null && (pn(n, e, l), Ki(n, e, l));
    },
    enqueueReplaceState: function (e, n, r) {
      e = e._reactInternals;
      var l = mn(),
        d = Ya(l);
      (d.tag = 1),
        (d.payload = n),
        r != null && (d.callback = r),
        (n = Ia(e, d, l)),
        n !== null && (pn(n, e, l), Ki(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var r = mn(),
        l = Ya(r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = Ia(e, l, r)),
        n !== null && (pn(n, e, r), Ki(n, e, r));
    },
  };
  function By(e, n, r, l, d, h, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, h, x)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Di(r, l) || !Di(d, h)
        : !0
    );
  }
  function Fy(e, n, r, l) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(r, l),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(r, l),
      n.state !== e && Ad.enqueueReplaceState(n, n.state, null);
  }
  function Gs(e, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var l in n) l !== "ref" && (r[l] = n[l]);
    }
    if ((e = e.defaultProps)) {
      r === n && (r = v({}, r));
      for (var d in e) r[d] === void 0 && (r[d] = e[d]);
    }
    return r;
  }
  var qo =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Ky(e) {
    qo(e);
  }
  function Qy(e) {
    console.error(e);
  }
  function Gy(e) {
    qo(e);
  }
  function Po(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Zy(e, n, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (d) {
      setTimeout(function () {
        throw d;
      });
    }
  }
  function kd(e, n, r) {
    return (
      (r = Ya(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        Po(e, n);
      }),
      r
    );
  }
  function Yy(e) {
    return (e = Ya(e)), (e.tag = 3), e;
  }
  function Iy(e, n, r, l) {
    var d = r.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var h = l.value;
      (e.payload = function () {
        return d(h);
      }),
        (e.callback = function () {
          Zy(n, r, l);
        });
    }
    var x = r.stateNode;
    x !== null &&
      typeof x.componentDidCatch == "function" &&
      (e.callback = function () {
        Zy(n, r, l),
          typeof d != "function" &&
            (ss === null ? (ss = new Set([this])) : ss.add(this));
        var w = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: w !== null ? w : "",
        });
      });
  }
  function sN(e, n, r, l, d) {
    if (
      ((r.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((n = r.alternate),
        n !== null && Pi(n, r, d, !0),
        (r = Dn.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 13:
            return (
              ra === null ? nf() : r.alternate === null && wt === 0 && (wt = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = d),
              l === ld
                ? (r.flags |= 16384)
                : ((n = r.updateQueue),
                  n === null ? (r.updateQueue = new Set([l])) : n.add(l),
                  sf(e, l, d)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              l === ld
                ? (r.flags |= 16384)
                : ((n = r.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (r.updateQueue = n))
                    : ((r = n.retryQueue),
                      r === null ? (n.retryQueue = new Set([l])) : r.add(l)),
                  sf(e, l, d)),
              !1
            );
        }
        throw Error(i(435, r.tag));
      }
      return sf(e, l, d), nf(), !1;
    }
    if (nt)
      return (
        (n = Dn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = d),
            l !== ed && ((e = Error(i(422), { cause: l })), qi(Rn(e, r))))
          : (l !== ed && ((n = Error(i(423), { cause: l })), qi(Rn(n, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (d &= -d),
            (e.lanes |= d),
            (l = Rn(l, r)),
            (d = kd(e.stateNode, l, d)),
            ud(e, d),
            wt !== 4 && (wt = 2)),
        !1
      );
    var h = Error(i(520), { cause: l });
    if (
      ((h = Rn(h, r)),
      rl === null ? (rl = [h]) : rl.push(h),
      wt !== 4 && (wt = 2),
      n === null)
    )
      return !0;
    (l = Rn(l, r)), (r = n);
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = d & -d),
            (r.lanes |= e),
            (e = kd(r.stateNode, l, e)),
            ud(r, e),
            !1
          );
        case 1:
          if (
            ((n = r.type),
            (h = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (h !== null &&
                  typeof h.componentDidCatch == "function" &&
                  (ss === null || !ss.has(h)))))
          )
            return (
              (r.flags |= 65536),
              (d &= -d),
              (r.lanes |= d),
              (d = Yy(d)),
              Iy(d, e, r, l),
              ud(r, d),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var $y = Error(i(461)),
    Pt = !1;
  function Bt(e, n, r, l) {
    n.child = e === null ? Vy(n, null, r, l) : zr(n, e.child, r, l);
  }
  function Xy(e, n, r, l, d) {
    r = r.render;
    var h = n.ref;
    if ("ref" in l) {
      var x = {};
      for (var w in l) w !== "ref" && (x[w] = l[w]);
    } else x = l;
    return (
      Fs(n),
      (l = pd(e, n, r, x, h, d)),
      (w = yd()),
      e !== null && !Pt
        ? (gd(e, n, d), ja(e, n, d))
        : (nt && w && Wu(n), (n.flags |= 1), Bt(e, n, l, d), n.child)
    );
  }
  function Wy(e, n, r, l, d) {
    if (e === null) {
      var h = r.type;
      return typeof h == "function" &&
        !Iu(h) &&
        h.defaultProps === void 0 &&
        r.compare === null
        ? ((n.tag = 15), (n.type = h), Jy(e, n, h, l, d))
        : ((e = vo(r.type, null, l, n, n.mode, d)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((h = e.child), !Vd(e, d))) {
      var x = h.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Di), r(x, l) && e.ref === n.ref)
      )
        return ja(e, n, d);
    }
    return (
      (n.flags |= 1),
      (e = ba(h, l)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Jy(e, n, r, l, d) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (Di(h, l) && e.ref === n.ref)
        if (((Pt = !1), (n.pendingProps = l = h), Vd(e, d)))
          (e.flags & 131072) !== 0 && (Pt = !0);
        else return (n.lanes = e.lanes), ja(e, n, d);
    }
    return Md(e, n, r, l, d);
  }
  function eg(e, n, r) {
    var l = n.pendingProps,
      d = l.children,
      h = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((l = h !== null ? h.baseLanes | r : r), e !== null)) {
          for (d = n.child = e.child, h = 0; d !== null; )
            (h = h | d.lanes | d.childLanes), (d = d.sibling);
          n.childLanes = h & ~l;
        } else (n.childLanes = 0), (n.child = null);
        return tg(e, n, l, r);
      }
      if ((r & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && _o(n, h !== null ? h.cachePool : null),
          h !== null ? Jp(n, h) : fd(),
          Hy(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          tg(e, n, h !== null ? h.baseLanes | r : r, r)
        );
    } else
      h !== null
        ? (_o(n, h.cachePool), Jp(n, h), Wa(), (n.memoizedState = null))
        : (e !== null && _o(n, null), fd(), Wa());
    return Bt(e, n, d, r), n.child;
  }
  function tg(e, n, r, l) {
    var d = id();
    return (
      (d = d === null ? null : { parent: Dt._currentValue, pool: d }),
      (n.memoizedState = { baseLanes: r, cachePool: d }),
      e !== null && _o(n, null),
      fd(),
      Hy(n),
      e !== null && Pi(e, n, l, !0),
      null
    );
  }
  function Vo(e, n) {
    var r = n.ref;
    if (r === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(i(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function Md(e, n, r, l, d) {
    return (
      Fs(n),
      (r = pd(e, n, r, l, void 0, d)),
      (l = yd()),
      e !== null && !Pt
        ? (gd(e, n, d), ja(e, n, d))
        : (nt && l && Wu(n), (n.flags |= 1), Bt(e, n, r, d), n.child)
    );
  }
  function ng(e, n, r, l, d, h) {
    return (
      Fs(n),
      (n.updateQueue = null),
      (r = ty(n, l, r, d)),
      ey(e),
      (l = yd()),
      e !== null && !Pt
        ? (gd(e, n, h), ja(e, n, h))
        : (nt && l && Wu(n), (n.flags |= 1), Bt(e, n, r, h), n.child)
    );
  }
  function ag(e, n, r, l, d) {
    if ((Fs(n), n.stateNode === null)) {
      var h = jr,
        x = r.contextType;
      typeof x == "object" && x !== null && (h = Zt(x)),
        (h = new r(l, h)),
        (n.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = Ad),
        (n.stateNode = h),
        (h._reactInternals = n),
        (h = n.stateNode),
        (h.props = l),
        (h.state = n.memoizedState),
        (h.refs = {}),
        od(n),
        (x = r.contextType),
        (h.context = typeof x == "object" && x !== null ? Zt(x) : jr),
        (h.state = n.memoizedState),
        (x = r.getDerivedStateFromProps),
        typeof x == "function" && (Rd(n, r, x, l), (h.state = n.memoizedState)),
        typeof r.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" &&
            typeof h.componentWillMount != "function") ||
          ((x = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" &&
            h.UNSAFE_componentWillMount(),
          x !== h.state && Ad.enqueueReplaceState(h, h.state, null),
          Gi(n, l, h, d),
          Qi(),
          (h.state = n.memoizedState)),
        typeof h.componentDidMount == "function" && (n.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      h = n.stateNode;
      var w = n.memoizedProps,
        T = Gs(r, w);
      h.props = T;
      var B = h.context,
        Y = r.contextType;
      (x = jr), typeof Y == "object" && Y !== null && (x = Zt(Y));
      var J = r.getDerivedStateFromProps;
      (Y =
        typeof J == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function"),
        (w = n.pendingProps !== w),
        Y ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((w || B !== x) && Fy(n, h, l, x)),
        (Za = !1);
      var F = n.memoizedState;
      (h.state = F),
        Gi(n, l, h, d),
        Qi(),
        (B = n.memoizedState),
        w || F !== B || Za
          ? (typeof J == "function" && (Rd(n, r, J, l), (B = n.memoizedState)),
            (T = Za || By(n, r, T, l, F, B, x))
              ? (Y ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = l),
                (n.memoizedState = B)),
            (h.props = l),
            (h.state = B),
            (h.context = x),
            (l = T))
          : (typeof h.componentDidMount == "function" && (n.flags |= 4194308),
            (l = !1));
    } else {
      (h = n.stateNode),
        cd(e, n),
        (x = n.memoizedProps),
        (Y = Gs(r, x)),
        (h.props = Y),
        (J = n.pendingProps),
        (F = h.context),
        (B = r.contextType),
        (T = jr),
        typeof B == "object" && B !== null && (T = Zt(B)),
        (w = r.getDerivedStateFromProps),
        (B =
          typeof w == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((x !== J || F !== T) && Fy(n, h, l, T)),
        (Za = !1),
        (F = n.memoizedState),
        (h.state = F),
        Gi(n, l, h, d),
        Qi();
      var Q = n.memoizedState;
      x !== J ||
      F !== Q ||
      Za ||
      (e !== null && e.dependencies !== null && wo(e.dependencies))
        ? (typeof w == "function" && (Rd(n, r, w, l), (Q = n.memoizedState)),
          (Y =
            Za ||
            By(n, r, Y, l, F, Q, T) ||
            (e !== null && e.dependencies !== null && wo(e.dependencies)))
            ? (B ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(l, Q, T),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(l, Q, T)),
              typeof h.componentDidUpdate == "function" && (n.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (x === e.memoizedProps && F === e.memoizedState) ||
                (n.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (x === e.memoizedProps && F === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = l),
              (n.memoizedState = Q)),
          (h.props = l),
          (h.state = Q),
          (h.context = T),
          (l = Y))
        : (typeof h.componentDidUpdate != "function" ||
            (x === e.memoizedProps && F === e.memoizedState) ||
            (n.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (x === e.memoizedProps && F === e.memoizedState) ||
            (n.flags |= 1024),
          (l = !1));
    }
    return (
      (h = l),
      Vo(e, n),
      (l = (n.flags & 128) !== 0),
      h || l
        ? ((h = n.stateNode),
          (r =
            l && typeof r.getDerivedStateFromError != "function"
              ? null
              : h.render()),
          (n.flags |= 1),
          e !== null && l
            ? ((n.child = zr(n, e.child, null, d)),
              (n.child = zr(n, null, r, d)))
            : Bt(e, n, r, d),
          (n.memoizedState = h.state),
          (e = n.child))
        : (e = ja(e, n, d)),
      e
    );
  }
  function sg(e, n, r, l) {
    return zi(), (n.flags |= 256), Bt(e, n, r, l), n.child;
  }
  var Dd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ld(e) {
    return { baseLanes: e, cachePool: Qp() };
  }
  function Ud(e, n, r) {
    return (e = e !== null ? e.childLanes & ~r : 0), n && (e |= Ln), e;
  }
  function rg(e, n, r) {
    var l = n.pendingProps,
      d = !1,
      h = (n.flags & 128) !== 0,
      x;
    if (
      ((x = h) ||
        (x =
          e !== null && e.memoizedState === null ? !1 : (Lt.current & 2) !== 0),
      x && ((d = !0), (n.flags &= -129)),
      (x = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (nt) {
        if ((d ? Xa(n) : Wa(), nt)) {
          var w = bt,
            T;
          if ((T = w)) {
            e: {
              for (T = w, w = sa; T.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (((T = Qn(T.nextSibling)), T === null)) {
                  w = null;
                  break e;
                }
              }
              w = T;
            }
            w !== null
              ? ((n.memoizedState = {
                  dehydrated: w,
                  treeContext: qs !== null ? { id: wa, overflow: Sa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = un(18, null, null, 0)),
                (T.stateNode = w),
                (T.return = n),
                (n.child = T),
                (Jt = n),
                (bt = null),
                (T = !0))
              : (T = !1);
          }
          T || Hs(n);
        }
        if (
          ((w = n.memoizedState),
          w !== null && ((w = w.dehydrated), w !== null))
        )
          return bf(w) ? (n.lanes = 32) : (n.lanes = 536870912), null;
        Ea(n);
      }
      return (
        (w = l.children),
        (l = l.fallback),
        d
          ? (Wa(),
            (d = n.mode),
            (w = Ho({ mode: "hidden", children: w }, d)),
            (l = zs(l, d, r, null)),
            (w.return = n),
            (l.return = n),
            (w.sibling = l),
            (n.child = w),
            (d = n.child),
            (d.memoizedState = Ld(r)),
            (d.childLanes = Ud(e, x, r)),
            (n.memoizedState = Dd),
            l)
          : (Xa(n), zd(n, w))
      );
    }
    if (
      ((T = e.memoizedState), T !== null && ((w = T.dehydrated), w !== null))
    ) {
      if (h)
        n.flags & 256
          ? (Xa(n), (n.flags &= -257), (n = qd(e, n, r)))
          : n.memoizedState !== null
          ? (Wa(), (n.child = e.child), (n.flags |= 128), (n = null))
          : (Wa(),
            (d = l.fallback),
            (w = n.mode),
            (l = Ho({ mode: "visible", children: l.children }, w)),
            (d = zs(d, w, r, null)),
            (d.flags |= 2),
            (l.return = n),
            (d.return = n),
            (l.sibling = d),
            (n.child = l),
            zr(n, e.child, null, r),
            (l = n.child),
            (l.memoizedState = Ld(r)),
            (l.childLanes = Ud(e, x, r)),
            (n.memoizedState = Dd),
            (n = d));
      else if ((Xa(n), bf(w))) {
        if (((x = w.nextSibling && w.nextSibling.dataset), x)) var B = x.dgst;
        (x = B),
          (l = Error(i(419))),
          (l.stack = ""),
          (l.digest = x),
          qi({ value: l, source: null, stack: null }),
          (n = qd(e, n, r));
      } else if (
        (Pt || Pi(e, n, r, !1), (x = (r & e.childLanes) !== 0), Pt || x)
      ) {
        if (
          ((x = dt),
          x !== null &&
            ((l = r & -r),
            (l = (l & 42) !== 0 ? 1 : bu(l)),
            (l = (l & (x.suspendedLanes | r)) !== 0 ? 0 : l),
            l !== 0 && l !== T.retryLane))
        )
          throw ((T.retryLane = l), Er(e, l), pn(x, e, l), $y);
        w.data === "$?" || nf(), (n = qd(e, n, r));
      } else
        w.data === "$?"
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = T.treeContext),
            (bt = Qn(w.nextSibling)),
            (Jt = n),
            (nt = !0),
            (Vs = null),
            (sa = !1),
            e !== null &&
              ((kn[Mn++] = wa),
              (kn[Mn++] = Sa),
              (kn[Mn++] = qs),
              (wa = e.id),
              (Sa = e.overflow),
              (qs = n)),
            (n = zd(n, l.children)),
            (n.flags |= 4096));
      return n;
    }
    return d
      ? (Wa(),
        (d = l.fallback),
        (w = n.mode),
        (T = e.child),
        (B = T.sibling),
        (l = ba(T, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = T.subtreeFlags & 65011712),
        B !== null ? (d = ba(B, d)) : ((d = zs(d, w, r, null)), (d.flags |= 2)),
        (d.return = n),
        (l.return = n),
        (l.sibling = d),
        (n.child = l),
        (l = d),
        (d = n.child),
        (w = e.child.memoizedState),
        w === null
          ? (w = Ld(r))
          : ((T = w.cachePool),
            T !== null
              ? ((B = Dt._currentValue),
                (T = T.parent !== B ? { parent: B, pool: B } : T))
              : (T = Qp()),
            (w = { baseLanes: w.baseLanes | r, cachePool: T })),
        (d.memoizedState = w),
        (d.childLanes = Ud(e, x, r)),
        (n.memoizedState = Dd),
        l)
      : (Xa(n),
        (r = e.child),
        (e = r.sibling),
        (r = ba(r, { mode: "visible", children: l.children })),
        (r.return = n),
        (r.sibling = null),
        e !== null &&
          ((x = n.deletions),
          x === null ? ((n.deletions = [e]), (n.flags |= 16)) : x.push(e)),
        (n.child = r),
        (n.memoizedState = null),
        r);
  }
  function zd(e, n) {
    return (
      (n = Ho({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Ho(e, n) {
    return (
      (e = un(22, e, null, n)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function qd(e, n, r) {
    return (
      zr(n, e.child, null, r),
      (e = zd(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function ig(e, n, r) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), nd(e.return, n, r);
  }
  function Pd(e, n, r, l, d) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: r,
          tailMode: d,
        })
      : ((h.isBackwards = n),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = l),
        (h.tail = r),
        (h.tailMode = d));
  }
  function lg(e, n, r) {
    var l = n.pendingProps,
      d = l.revealOrder,
      h = l.tail;
    if ((Bt(e, n, l.children, r), (l = Lt.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ig(e, r, n);
          else if (e.tag === 19) ig(e, r, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((ae(Lt, l), d)) {
      case "forwards":
        for (r = n.child, d = null; r !== null; )
          (e = r.alternate),
            e !== null && zo(e) === null && (d = r),
            (r = r.sibling);
        (r = d),
          r === null
            ? ((d = n.child), (n.child = null))
            : ((d = r.sibling), (r.sibling = null)),
          Pd(n, !1, d, r, h);
        break;
      case "backwards":
        for (r = null, d = n.child, n.child = null; d !== null; ) {
          if (((e = d.alternate), e !== null && zo(e) === null)) {
            n.child = d;
            break;
          }
          (e = d.sibling), (d.sibling = r), (r = d), (d = e);
        }
        Pd(n, !0, r, null, h);
        break;
      case "together":
        Pd(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function ja(e, n, r) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (as |= n.lanes),
      (r & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((Pi(e, n, r, !1), (r & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(i(153));
    if (n.child !== null) {
      for (
        e = n.child, r = ba(e, e.pendingProps), n.child = r, r.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = ba(e, e.pendingProps)),
          (r.return = n);
      r.sibling = null;
    }
    return n.child;
  }
  function Vd(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && wo(e)));
  }
  function rN(e, n, r) {
    switch (n.tag) {
      case 3:
        Te(n, n.stateNode.containerInfo),
          Ga(n, Dt, e.memoizedState.cache),
          zi();
        break;
      case 27:
      case 5:
        Ie(n);
        break;
      case 4:
        Te(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ga(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Xa(n), (n.flags |= 128), null)
            : (r & n.child.childLanes) !== 0
            ? rg(e, n, r)
            : (Xa(n), (e = ja(e, n, r)), e !== null ? e.sibling : null);
        Xa(n);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (
          ((l = (r & n.childLanes) !== 0),
          l || (Pi(e, n, r, !1), (l = (r & n.childLanes) !== 0)),
          d)
        ) {
          if (l) return lg(e, n, r);
          n.flags |= 128;
        }
        if (
          ((d = n.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          ae(Lt, Lt.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), eg(e, n, r);
      case 24:
        Ga(n, Dt, e.memoizedState.cache);
    }
    return ja(e, n, r);
  }
  function og(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) Pt = !0;
      else {
        if (!Vd(e, r) && (n.flags & 128) === 0) return (Pt = !1), rN(e, n, r);
        Pt = (e.flags & 131072) !== 0;
      }
    else (Pt = !1), nt && (n.flags & 1048576) !== 0 && qp(n, bo, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType,
            d = l._init;
          if (((l = d(l._payload)), (n.type = l), typeof l == "function"))
            Iu(l)
              ? ((e = Gs(l, e)), (n.tag = 1), (n = ag(null, n, l, e, r)))
              : ((n.tag = 0), (n = Md(null, n, l, e, r)));
          else {
            if (l != null) {
              if (((d = l.$$typeof), d === D)) {
                (n.tag = 11), (n = Xy(null, n, l, e, r));
                break e;
              } else if (d === Z) {
                (n.tag = 14), (n = Wy(null, n, l, e, r));
                break e;
              }
            }
            throw ((n = ee(l) || l), Error(i(306, n, "")));
          }
        }
        return n;
      case 0:
        return Md(e, n, n.type, n.pendingProps, r);
      case 1:
        return (l = n.type), (d = Gs(l, n.pendingProps)), ag(e, n, l, d, r);
      case 3:
        e: {
          if ((Te(n, n.stateNode.containerInfo), e === null))
            throw Error(i(387));
          l = n.pendingProps;
          var h = n.memoizedState;
          (d = h.element), cd(e, n), Gi(n, l, null, r);
          var x = n.memoizedState;
          if (
            ((l = x.cache),
            Ga(n, Dt, l),
            l !== h.cache && ad(n, [Dt], r, !0),
            Qi(),
            (l = x.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: l, isDehydrated: !1, cache: x.cache }),
              (n.updateQueue.baseState = h),
              (n.memoizedState = h),
              n.flags & 256)
            ) {
              n = sg(e, n, l, r);
              break e;
            } else if (l !== d) {
              (d = Rn(Error(i(424)), n)), qi(d), (n = sg(e, n, l, r));
              break e;
            } else
              for (
                e = n.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  bt = Qn(e.firstChild),
                  Jt = n,
                  nt = !0,
                  Vs = null,
                  sa = !0,
                  r = Vy(n, null, l, r),
                  n.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((zi(), l === d)) {
              n = ja(e, n, r);
              break e;
            }
            Bt(e, n, l, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Vo(e, n),
          e === null
            ? (r = fv(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = r)
              : nt ||
                ((r = n.type),
                (e = n.pendingProps),
                (l = tc(he.current).createElement(r)),
                (l[Gt] = n),
                (l[nn] = e),
                Kt(l, r, e),
                qt(l),
                (n.stateNode = l))
            : (n.memoizedState = fv(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ie(n),
          e === null &&
            nt &&
            ((l = n.stateNode = cv(n.type, n.pendingProps, he.current)),
            (Jt = n),
            (sa = !0),
            (d = bt),
            ls(n.type) ? ((wf = d), (bt = Qn(l.firstChild))) : (bt = d)),
          Bt(e, n, n.pendingProps.children, r),
          Vo(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            nt &&
            ((d = l = bt) &&
              ((l = MN(l, n.type, n.pendingProps, sa)),
              l !== null
                ? ((n.stateNode = l),
                  (Jt = n),
                  (bt = Qn(l.firstChild)),
                  (sa = !1),
                  (d = !0))
                : (d = !1)),
            d || Hs(n)),
          Ie(n),
          (d = n.type),
          (h = n.pendingProps),
          (x = e !== null ? e.memoizedProps : null),
          (l = h.children),
          gf(d, h) ? (l = null) : x !== null && gf(d, x) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((d = pd(e, n, X_, null, null, r)), (ml._currentValue = d)),
          Vo(e, n),
          Bt(e, n, l, r),
          n.child
        );
      case 6:
        return (
          e === null &&
            nt &&
            ((e = r = bt) &&
              ((r = DN(r, n.pendingProps, sa)),
              r !== null
                ? ((n.stateNode = r), (Jt = n), (bt = null), (e = !0))
                : (e = !1)),
            e || Hs(n)),
          null
        );
      case 13:
        return rg(e, n, r);
      case 4:
        return (
          Te(n, n.stateNode.containerInfo),
          (l = n.pendingProps),
          e === null ? (n.child = zr(n, null, l, r)) : Bt(e, n, l, r),
          n.child
        );
      case 11:
        return Xy(e, n, n.type, n.pendingProps, r);
      case 7:
        return Bt(e, n, n.pendingProps, r), n.child;
      case 8:
        return Bt(e, n, n.pendingProps.children, r), n.child;
      case 12:
        return Bt(e, n, n.pendingProps.children, r), n.child;
      case 10:
        return (
          (l = n.pendingProps),
          Ga(n, n.type, l.value),
          Bt(e, n, l.children, r),
          n.child
        );
      case 9:
        return (
          (d = n.type._context),
          (l = n.pendingProps.children),
          Fs(n),
          (d = Zt(d)),
          (l = l(d)),
          (n.flags |= 1),
          Bt(e, n, l, r),
          n.child
        );
      case 14:
        return Wy(e, n, n.type, n.pendingProps, r);
      case 15:
        return Jy(e, n, n.type, n.pendingProps, r);
      case 19:
        return lg(e, n, r);
      case 31:
        return (
          (l = n.pendingProps),
          (r = n.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((r = Ho(l, r)),
              (r.ref = n.ref),
              (n.child = r),
              (r.return = n),
              (n = r))
            : ((r = ba(e.child, l)),
              (r.ref = n.ref),
              (n.child = r),
              (r.return = n),
              (n = r)),
          n
        );
      case 22:
        return eg(e, n, r);
      case 24:
        return (
          Fs(n),
          (l = Zt(Dt)),
          e === null
            ? ((d = id()),
              d === null &&
                ((d = dt),
                (h = sd()),
                (d.pooledCache = h),
                h.refCount++,
                h !== null && (d.pooledCacheLanes |= r),
                (d = h)),
              (n.memoizedState = { parent: l, cache: d }),
              od(n),
              Ga(n, Dt, d))
            : ((e.lanes & r) !== 0 && (cd(e, n), Gi(n, null, null, r), Qi()),
              (d = e.memoizedState),
              (h = n.memoizedState),
              d.parent !== l
                ? ((d = { parent: l, cache: l }),
                  (n.memoizedState = d),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = d),
                  Ga(n, Dt, l))
                : ((l = h.cache),
                  Ga(n, Dt, l),
                  l !== d.cache && ad(n, [Dt], r, !0))),
          Bt(e, n, n.pendingProps.children, r),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(i(156, n.tag));
  }
  function Ta(e) {
    e.flags |= 4;
  }
  function cg(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !gv(n))) {
      if (
        ((n = Dn.current),
        n !== null &&
          (($e & 4194048) === $e
            ? ra !== null
            : (($e & 62914560) !== $e && ($e & 536870912) === 0) || n !== ra))
      )
        throw ((Fi = ld), Gp);
      e.flags |= 8192;
    }
  }
  function Bo(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? _i() : 536870912), (e.lanes |= n), (Hr |= n));
  }
  function Ji(e, n) {
    if (!nt)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), (r = r.sibling);
          l === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function yt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      l = 0;
    if (n)
      for (var d = e.child; d !== null; )
        (r |= d.lanes | d.childLanes),
          (l |= d.subtreeFlags & 65011712),
          (l |= d.flags & 65011712),
          (d.return = e),
          (d = d.sibling);
    else
      for (d = e.child; d !== null; )
        (r |= d.lanes | d.childLanes),
          (l |= d.subtreeFlags),
          (l |= d.flags),
          (d.return = e),
          (d = d.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = r), n;
  }
  function iN(e, n, r) {
    var l = n.pendingProps;
    switch ((Ju(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yt(n), null;
      case 1:
        return yt(n), null;
      case 3:
        return (
          (r = n.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          n.memoizedState.cache !== l && (n.flags |= 2048),
          Na(Dt),
          ke(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ui(n)
              ? Ta(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Hp())),
          yt(n),
          null
        );
      case 26:
        return (
          (r = n.memoizedState),
          e === null
            ? (Ta(n),
              r !== null ? (yt(n), cg(n, r)) : (yt(n), (n.flags &= -16777217)))
            : r
            ? r !== e.memoizedState
              ? (Ta(n), yt(n), cg(n, r))
              : (yt(n), (n.flags &= -16777217))
            : (e.memoizedProps !== l && Ta(n), yt(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        Be(n), (r = he.current);
        var d = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== l && Ta(n);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(i(166));
            return yt(n), null;
          }
          (e = pe.current),
            Ui(n) ? Pp(n) : ((e = cv(d, l, r)), (n.stateNode = e), Ta(n));
        }
        return yt(n), null;
      case 5:
        if ((Be(n), (r = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== l && Ta(n);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(i(166));
            return yt(n), null;
          }
          if (((e = pe.current), Ui(n))) Pp(n);
          else {
            switch (((d = tc(he.current)), e)) {
              case 1:
                e = d.createElementNS("http://www.w3.org/2000/svg", r);
                break;
              case 2:
                e = d.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                break;
              default:
                switch (r) {
                  case "svg":
                    e = d.createElementNS("http://www.w3.org/2000/svg", r);
                    break;
                  case "math":
                    e = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    (e = d.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? d.createElement(r, { is: l.is })
                        : d.createElement(r);
                }
            }
            (e[Gt] = n), (e[nn] = l);
            e: for (d = n.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) e.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                (d.child.return = d), (d = d.child);
                continue;
              }
              if (d === n) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === n) break e;
                d = d.return;
              }
              (d.sibling.return = d.return), (d = d.sibling);
            }
            n.stateNode = e;
            e: switch ((Kt(e, r, l), r)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ta(n);
          }
        }
        return yt(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== l && Ta(n);
        else {
          if (typeof l != "string" && n.stateNode === null) throw Error(i(166));
          if (((e = he.current), Ui(n))) {
            if (
              ((e = n.stateNode),
              (r = n.memoizedProps),
              (l = null),
              (d = Jt),
              d !== null)
            )
              switch (d.tag) {
                case 27:
                case 5:
                  l = d.memoizedProps;
              }
            (e[Gt] = n),
              (e = !!(
                e.nodeValue === r ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                nv(e.nodeValue, r)
              )),
              e || Hs(n);
          } else (e = tc(e).createTextNode(l)), (e[Gt] = n), (n.stateNode = e);
        }
        return yt(n), null;
      case 13:
        if (
          ((l = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((d = Ui(n)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (
                ((d = n.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(i(317));
              d[Gt] = n;
            } else
              zi(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            yt(n), (d = !1);
          } else
            (d = Hp()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = d),
              (d = !0);
          if (!d) return n.flags & 256 ? (Ea(n), n) : (Ea(n), null);
        }
        if ((Ea(n), (n.flags & 128) !== 0)) return (n.lanes = r), n;
        if (
          ((r = l !== null), (e = e !== null && e.memoizedState !== null), r)
        ) {
          (l = n.child),
            (d = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (d = l.alternate.memoizedState.cachePool.pool);
          var h = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (h = l.memoizedState.cachePool.pool),
            h !== d && (l.flags |= 2048);
        }
        return (
          r !== e && r && (n.child.flags |= 8192),
          Bo(n, n.updateQueue),
          yt(n),
          null
        );
      case 4:
        return ke(), e === null && ff(n.stateNode.containerInfo), yt(n), null;
      case 10:
        return Na(n.type), yt(n), null;
      case 19:
        if ((le(Lt), (d = n.memoizedState), d === null)) return yt(n), null;
        if (((l = (n.flags & 128) !== 0), (h = d.rendering), h === null))
          if (l) Ji(d, !1);
          else {
            if (wt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((h = zo(e)), h !== null)) {
                  for (
                    n.flags |= 128,
                      Ji(d, !1),
                      e = h.updateQueue,
                      n.updateQueue = e,
                      Bo(n, e),
                      n.subtreeFlags = 0,
                      e = r,
                      r = n.child;
                    r !== null;

                  )
                    zp(r, e), (r = r.sibling);
                  return ae(Lt, (Lt.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            d.tail !== null &&
              Qt() > Qo &&
              ((n.flags |= 128), (l = !0), Ji(d, !1), (n.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = zo(h)), e !== null)) {
              if (
                ((n.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                Bo(n, e),
                Ji(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !h.alternate &&
                  !nt)
              )
                return yt(n), null;
            } else
              2 * Qt() - d.renderingStartTime > Qo &&
                r !== 536870912 &&
                ((n.flags |= 128), (l = !0), Ji(d, !1), (n.lanes = 4194304));
          d.isBackwards
            ? ((h.sibling = n.child), (n.child = h))
            : ((e = d.last),
              e !== null ? (e.sibling = h) : (n.child = h),
              (d.last = h));
        }
        return d.tail !== null
          ? ((n = d.tail),
            (d.rendering = n),
            (d.tail = n.sibling),
            (d.renderingStartTime = Qt()),
            (n.sibling = null),
            (e = Lt.current),
            ae(Lt, l ? (e & 1) | 2 : e & 1),
            n)
          : (yt(n), null);
      case 22:
      case 23:
        return (
          Ea(n),
          hd(),
          (l = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (n.flags |= 8192)
            : l && (n.flags |= 8192),
          l
            ? (r & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (yt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : yt(n),
          (r = n.updateQueue),
          r !== null && Bo(n, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (l = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (l = n.memoizedState.cachePool.pool),
          l !== r && (n.flags |= 2048),
          e !== null && le(Ks),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          Na(Dt),
          yt(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function lN(e, n) {
    switch ((Ju(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Na(Dt),
          ke(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Be(n), null;
      case 13:
        if (
          (Ea(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(i(340));
          zi();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return le(Lt), null;
      case 4:
        return ke(), null;
      case 10:
        return Na(n.type), null;
      case 22:
      case 23:
        return (
          Ea(n),
          hd(),
          e !== null && le(Ks),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return Na(Dt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ug(e, n) {
    switch ((Ju(n), n.tag)) {
      case 3:
        Na(Dt), ke();
        break;
      case 26:
      case 27:
      case 5:
        Be(n);
        break;
      case 4:
        ke();
        break;
      case 13:
        Ea(n);
        break;
      case 19:
        le(Lt);
        break;
      case 10:
        Na(n.type);
        break;
      case 22:
      case 23:
        Ea(n), hd(), e !== null && le(Ks);
        break;
      case 24:
        Na(Dt);
    }
  }
  function el(e, n) {
    try {
      var r = n.updateQueue,
        l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var d = l.next;
        r = d;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var h = r.create,
              x = r.inst;
            (l = h()), (x.destroy = l);
          }
          r = r.next;
        } while (r !== d);
      }
    } catch (w) {
      ct(n, n.return, w);
    }
  }
  function Ja(e, n, r) {
    try {
      var l = n.updateQueue,
        d = l !== null ? l.lastEffect : null;
      if (d !== null) {
        var h = d.next;
        l = h;
        do {
          if ((l.tag & e) === e) {
            var x = l.inst,
              w = x.destroy;
            if (w !== void 0) {
              (x.destroy = void 0), (d = n);
              var T = r,
                B = w;
              try {
                B();
              } catch (Y) {
                ct(d, T, Y);
              }
            }
          }
          l = l.next;
        } while (l !== h);
      }
    } catch (Y) {
      ct(n, n.return, Y);
    }
  }
  function dg(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        Wp(n, r);
      } catch (l) {
        ct(e, e.return, l);
      }
    }
  }
  function fg(e, n, r) {
    (r.props = Gs(e.type, e.memoizedProps)), (r.state = e.memoizedState);
    try {
      r.componentWillUnmount();
    } catch (l) {
      ct(e, n, l);
    }
  }
  function tl(e, n) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof r == "function" ? (e.refCleanup = r(l)) : (r.current = l);
      }
    } catch (d) {
      ct(e, n, d);
    }
  }
  function ia(e, n) {
    var r = e.ref,
      l = e.refCleanup;
    if (r !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (d) {
          ct(e, n, d);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (d) {
          ct(e, n, d);
        }
      else r.current = null;
  }
  function hg(e) {
    var n = e.type,
      r = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? (l.src = r.src) : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (d) {
      ct(e, e.return, d);
    }
  }
  function Hd(e, n, r) {
    try {
      var l = e.stateNode;
      TN(l, e.type, r, n), (l[nn] = n);
    } catch (d) {
      ct(e, e.return, d);
    }
  }
  function mg(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ls(e.type)) ||
      e.tag === 4
    );
  }
  function Bd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || mg(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ls(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Fd(e, n, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        n
          ? (r.nodeType === 9
              ? r.body
              : r.nodeName === "HTML"
              ? r.ownerDocument.body
              : r
            ).insertBefore(e, n)
          : ((n =
              r.nodeType === 9
                ? r.body
                : r.nodeName === "HTML"
                ? r.ownerDocument.body
                : r),
            n.appendChild(e),
            (r = r._reactRootContainer),
            r != null || n.onclick !== null || (n.onclick = ec));
    else if (
      l !== 4 &&
      (l === 27 && ls(e.type) && ((r = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (Fd(e, n, r), e = e.sibling; e !== null; )
        Fd(e, n, r), (e = e.sibling);
  }
  function Fo(e, n, r) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), n ? r.insertBefore(e, n) : r.appendChild(e);
    else if (
      l !== 4 &&
      (l === 27 && ls(e.type) && (r = e.stateNode), (e = e.child), e !== null)
    )
      for (Fo(e, n, r), e = e.sibling; e !== null; )
        Fo(e, n, r), (e = e.sibling);
  }
  function pg(e) {
    var n = e.stateNode,
      r = e.memoizedProps;
    try {
      for (var l = e.type, d = n.attributes; d.length; )
        n.removeAttributeNode(d[0]);
      Kt(n, l, r), (n[Gt] = e), (n[nn] = r);
    } catch (h) {
      ct(e, e.return, h);
    }
  }
  var Oa = !1,
    Ct = !1,
    Kd = !1,
    yg = typeof WeakSet == "function" ? WeakSet : Set,
    Vt = null;
  function oN(e, n) {
    if (((e = e.containerInfo), (pf = lc), (e = jp(e)), Bu(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var l = r.getSelection && r.getSelection();
          if (l && l.rangeCount !== 0) {
            r = l.anchorNode;
            var d = l.anchorOffset,
              h = l.focusNode;
            l = l.focusOffset;
            try {
              r.nodeType, h.nodeType;
            } catch {
              r = null;
              break e;
            }
            var x = 0,
              w = -1,
              T = -1,
              B = 0,
              Y = 0,
              J = e,
              F = null;
            t: for (;;) {
              for (
                var Q;
                J !== r || (d !== 0 && J.nodeType !== 3) || (w = x + d),
                  J !== h || (l !== 0 && J.nodeType !== 3) || (T = x + l),
                  J.nodeType === 3 && (x += J.nodeValue.length),
                  (Q = J.firstChild) !== null;

              )
                (F = J), (J = Q);
              for (;;) {
                if (J === e) break t;
                if (
                  (F === r && ++B === d && (w = x),
                  F === h && ++Y === l && (T = x),
                  (Q = J.nextSibling) !== null)
                )
                  break;
                (J = F), (F = J.parentNode);
              }
              J = Q;
            }
            r = w === -1 || T === -1 ? null : { start: w, end: T };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      yf = { focusedElem: e, selectionRange: r }, lc = !1, Vt = n;
      Vt !== null;

    )
      if (
        ((n = Vt), (e = n.child), (n.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = n), (Vt = e);
      else
        for (; Vt !== null; ) {
          switch (((n = Vt), (h = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && h !== null) {
                (e = void 0),
                  (r = n),
                  (d = h.memoizedProps),
                  (h = h.memoizedState),
                  (l = r.stateNode);
                try {
                  var Ae = Gs(r.type, d, r.elementType === r.type);
                  (e = l.getSnapshotBeforeUpdate(Ae, h)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Oe) {
                  ct(r, r.return, Oe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (r = e.nodeType), r === 9)
                )
                  xf(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      xf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (Vt = e);
            break;
          }
          Vt = n.return;
        }
  }
  function gg(e, n, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        es(e, r), l & 4 && el(5, r);
        break;
      case 1:
        if ((es(e, r), l & 4))
          if (((e = r.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (x) {
              ct(r, r.return, x);
            }
          else {
            var d = Gs(r.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(d, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (x) {
              ct(r, r.return, x);
            }
          }
        l & 64 && dg(r), l & 512 && tl(r, r.return);
        break;
      case 3:
        if ((es(e, r), l & 64 && ((e = r.updateQueue), e !== null))) {
          if (((n = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            Wp(e, n);
          } catch (x) {
            ct(r, r.return, x);
          }
        }
        break;
      case 27:
        n === null && l & 4 && pg(r);
      case 26:
      case 5:
        es(e, r), n === null && l & 4 && hg(r), l & 512 && tl(r, r.return);
        break;
      case 12:
        es(e, r);
        break;
      case 13:
        es(e, r),
          l & 4 && bg(e, r),
          l & 64 &&
            ((e = r.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((r = gN.bind(null, r)), LN(e, r))));
        break;
      case 22:
        if (((l = r.memoizedState !== null || Oa), !l)) {
          (n = (n !== null && n.memoizedState !== null) || Ct), (d = Oa);
          var h = Ct;
          (Oa = l),
            (Ct = n) && !h ? ts(e, r, (r.subtreeFlags & 8772) !== 0) : es(e, r),
            (Oa = d),
            (Ct = h);
        }
        break;
      case 30:
        break;
      default:
        es(e, r);
    }
  }
  function vg(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), vg(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && _u(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var pt = null,
    rn = !1;
  function Ra(e, n, r) {
    for (r = r.child; r !== null; ) xg(e, n, r), (r = r.sibling);
  }
  function xg(e, n, r) {
    if (se && typeof se.onCommitFiberUnmount == "function")
      try {
        se.onCommitFiberUnmount(K, r);
      } catch {}
    switch (r.tag) {
      case 26:
        Ct || ia(r, n),
          Ra(e, n, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r));
        break;
      case 27:
        Ct || ia(r, n);
        var l = pt,
          d = rn;
        ls(r.type) && ((pt = r.stateNode), (rn = !1)),
          Ra(e, n, r),
          ul(r.stateNode),
          (pt = l),
          (rn = d);
        break;
      case 5:
        Ct || ia(r, n);
      case 6:
        if (
          ((l = pt),
          (d = rn),
          (pt = null),
          Ra(e, n, r),
          (pt = l),
          (rn = d),
          pt !== null)
        )
          if (rn)
            try {
              (pt.nodeType === 9
                ? pt.body
                : pt.nodeName === "HTML"
                ? pt.ownerDocument.body
                : pt
              ).removeChild(r.stateNode);
            } catch (h) {
              ct(r, n, h);
            }
          else
            try {
              pt.removeChild(r.stateNode);
            } catch (h) {
              ct(r, n, h);
            }
        break;
      case 18:
        pt !== null &&
          (rn
            ? ((e = pt),
              lv(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                r.stateNode
              ),
              vl(e))
            : lv(pt, r.stateNode));
        break;
      case 4:
        (l = pt),
          (d = rn),
          (pt = r.stateNode.containerInfo),
          (rn = !0),
          Ra(e, n, r),
          (pt = l),
          (rn = d);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ct || Ja(2, r, n), Ct || Ja(4, r, n), Ra(e, n, r);
        break;
      case 1:
        Ct ||
          (ia(r, n),
          (l = r.stateNode),
          typeof l.componentWillUnmount == "function" && fg(r, n, l)),
          Ra(e, n, r);
        break;
      case 21:
        Ra(e, n, r);
        break;
      case 22:
        (Ct = (l = Ct) || r.memoizedState !== null), Ra(e, n, r), (Ct = l);
        break;
      default:
        Ra(e, n, r);
    }
  }
  function bg(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        vl(e);
      } catch (r) {
        ct(n, n.return, r);
      }
  }
  function cN(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new yg()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new yg()),
          n
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Qd(e, n) {
    var r = cN(e);
    n.forEach(function (l) {
      var d = vN.bind(null, e, l);
      r.has(l) || (r.add(l), l.then(d, d));
    });
  }
  function dn(e, n) {
    var r = n.deletions;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var d = r[l],
          h = e,
          x = n,
          w = x;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (ls(w.type)) {
                (pt = w.stateNode), (rn = !1);
                break e;
              }
              break;
            case 5:
              (pt = w.stateNode), (rn = !1);
              break e;
            case 3:
            case 4:
              (pt = w.stateNode.containerInfo), (rn = !0);
              break e;
          }
          w = w.return;
        }
        if (pt === null) throw Error(i(160));
        xg(h, x, d),
          (pt = null),
          (rn = !1),
          (h = d.alternate),
          h !== null && (h.return = null),
          (d.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) wg(n, e), (n = n.sibling);
  }
  var Kn = null;
  function wg(e, n) {
    var r = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dn(n, e),
          fn(e),
          l & 4 && (Ja(3, e, e.return), el(3, e), Ja(5, e, e.return));
        break;
      case 1:
        dn(n, e),
          fn(e),
          l & 512 && (Ct || r === null || ia(r, r.return)),
          l & 64 &&
            Oa &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? l : r.concat(l)))));
        break;
      case 26:
        var d = Kn;
        if (
          (dn(n, e),
          fn(e),
          l & 512 && (Ct || r === null || ia(r, r.return)),
          l & 4)
        ) {
          var h = r !== null ? r.memoizedState : null;
          if (((l = e.memoizedState), r === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (r = e.memoizedProps),
                    (d = d.ownerDocument || d);
                  t: switch (l) {
                    case "title":
                      (h = d.getElementsByTagName("title")[0]),
                        (!h ||
                          h[Ci] ||
                          h[Gt] ||
                          h.namespaceURI === "http://www.w3.org/2000/svg" ||
                          h.hasAttribute("itemprop")) &&
                          ((h = d.createElement(l)),
                          d.head.insertBefore(
                            h,
                            d.querySelector("head > title")
                          )),
                        Kt(h, l, r),
                        (h[Gt] = e),
                        qt(h),
                        (l = h);
                      break e;
                    case "link":
                      var x = pv("link", "href", d).get(l + (r.href || ""));
                      if (x) {
                        for (var w = 0; w < x.length; w++)
                          if (
                            ((h = x[w]),
                            h.getAttribute("href") ===
                              (r.href == null || r.href === ""
                                ? null
                                : r.href) &&
                              h.getAttribute("rel") ===
                                (r.rel == null ? null : r.rel) &&
                              h.getAttribute("title") ===
                                (r.title == null ? null : r.title) &&
                              h.getAttribute("crossorigin") ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            x.splice(w, 1);
                            break t;
                          }
                      }
                      (h = d.createElement(l)),
                        Kt(h, l, r),
                        d.head.appendChild(h);
                      break;
                    case "meta":
                      if (
                        (x = pv("meta", "content", d).get(
                          l + (r.content || "")
                        ))
                      ) {
                        for (w = 0; w < x.length; w++)
                          if (
                            ((h = x[w]),
                            h.getAttribute("content") ===
                              (r.content == null ? null : "" + r.content) &&
                              h.getAttribute("name") ===
                                (r.name == null ? null : r.name) &&
                              h.getAttribute("property") ===
                                (r.property == null ? null : r.property) &&
                              h.getAttribute("http-equiv") ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              h.getAttribute("charset") ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            x.splice(w, 1);
                            break t;
                          }
                      }
                      (h = d.createElement(l)),
                        Kt(h, l, r),
                        d.head.appendChild(h);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  (h[Gt] = e), qt(h), (l = h);
                }
                e.stateNode = l;
              } else yv(d, e.type, e.stateNode);
            else e.stateNode = mv(d, l, e.memoizedProps);
          else
            h !== l
              ? (h === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : h.count--,
                l === null
                  ? yv(d, e.type, e.stateNode)
                  : mv(d, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Hd(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        dn(n, e),
          fn(e),
          l & 512 && (Ct || r === null || ia(r, r.return)),
          r !== null && l & 4 && Hd(e, e.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (
          (dn(n, e),
          fn(e),
          l & 512 && (Ct || r === null || ia(r, r.return)),
          e.flags & 32)
        ) {
          d = e.stateNode;
          try {
            xr(d, "");
          } catch (Q) {
            ct(e, e.return, Q);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((d = e.memoizedProps), Hd(e, d, r !== null ? r.memoizedProps : d)),
          l & 1024 && (Kd = !0);
        break;
      case 6:
        if ((dn(n, e), fn(e), l & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (l = e.memoizedProps), (r = e.stateNode);
          try {
            r.nodeValue = l;
          } catch (Q) {
            ct(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (
          ((sc = null),
          (d = Kn),
          (Kn = nc(n.containerInfo)),
          dn(n, e),
          (Kn = d),
          fn(e),
          l & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            vl(n.containerInfo);
          } catch (Q) {
            ct(e, e.return, Q);
          }
        Kd && ((Kd = !1), Sg(e));
        break;
      case 4:
        (l = Kn),
          (Kn = nc(e.stateNode.containerInfo)),
          dn(n, e),
          fn(e),
          (Kn = l);
        break;
      case 12:
        dn(n, e), fn(e);
        break;
      case 13:
        dn(n, e),
          fn(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (Xd = Qt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Qd(e, l)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var T = r !== null && r.memoizedState !== null,
          B = Oa,
          Y = Ct;
        if (
          ((Oa = B || d),
          (Ct = Y || T),
          dn(n, e),
          (Ct = Y),
          (Oa = B),
          fn(e),
          l & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = d ? n._visibility & -2 : n._visibility | 1,
              d && (r === null || T || Oa || Ct || Zs(e)),
              r = null,
              n = e;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (r === null) {
                T = r = n;
                try {
                  if (((h = T.stateNode), d))
                    (x = h.style),
                      typeof x.setProperty == "function"
                        ? x.setProperty("display", "none", "important")
                        : (x.display = "none");
                  else {
                    w = T.stateNode;
                    var J = T.memoizedProps.style,
                      F =
                        J != null && J.hasOwnProperty("display")
                          ? J.display
                          : null;
                    w.style.display =
                      F == null || typeof F == "boolean" ? "" : ("" + F).trim();
                  }
                } catch (Q) {
                  ct(T, T.return, Q);
                }
              }
            } else if (n.tag === 6) {
              if (r === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = d ? "" : T.memoizedProps;
                } catch (Q) {
                  ct(T, T.return, Q);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              r === n && (r = null), (n = n.return);
            }
            r === n && (r = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((r = l.retryQueue),
            r !== null && ((l.retryQueue = null), Qd(e, r))));
        break;
      case 19:
        dn(n, e),
          fn(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Qd(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        dn(n, e), fn(e);
    }
  }
  function fn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (mg(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        if (r == null) throw Error(i(160));
        switch (r.tag) {
          case 27:
            var d = r.stateNode,
              h = Bd(e);
            Fo(e, h, d);
            break;
          case 5:
            var x = r.stateNode;
            r.flags & 32 && (xr(x, ""), (r.flags &= -33));
            var w = Bd(e);
            Fo(e, w, x);
            break;
          case 3:
          case 4:
            var T = r.stateNode.containerInfo,
              B = Bd(e);
            Fd(e, B, T);
            break;
          default:
            throw Error(i(161));
        }
      } catch (Y) {
        ct(e, e.return, Y);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Sg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Sg(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function es(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) gg(e, n.alternate, n), (n = n.sibling);
  }
  function Zs(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ja(4, n, n.return), Zs(n);
          break;
        case 1:
          ia(n, n.return);
          var r = n.stateNode;
          typeof r.componentWillUnmount == "function" && fg(n, n.return, r),
            Zs(n);
          break;
        case 27:
          ul(n.stateNode);
        case 26:
        case 5:
          ia(n, n.return), Zs(n);
          break;
        case 22:
          n.memoizedState === null && Zs(n);
          break;
        case 30:
          Zs(n);
          break;
        default:
          Zs(n);
      }
      e = e.sibling;
    }
  }
  function ts(e, n, r) {
    for (r = r && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate,
        d = e,
        h = n,
        x = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          ts(d, h, r), el(4, h);
          break;
        case 1:
          if (
            (ts(d, h, r),
            (l = h),
            (d = l.stateNode),
            typeof d.componentDidMount == "function")
          )
            try {
              d.componentDidMount();
            } catch (B) {
              ct(l, l.return, B);
            }
          if (((l = h), (d = l.updateQueue), d !== null)) {
            var w = l.stateNode;
            try {
              var T = d.shared.hiddenCallbacks;
              if (T !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < T.length; d++)
                  Xp(T[d], w);
            } catch (B) {
              ct(l, l.return, B);
            }
          }
          r && x & 64 && dg(h), tl(h, h.return);
          break;
        case 27:
          pg(h);
        case 26:
        case 5:
          ts(d, h, r), r && l === null && x & 4 && hg(h), tl(h, h.return);
          break;
        case 12:
          ts(d, h, r);
          break;
        case 13:
          ts(d, h, r), r && x & 4 && bg(d, h);
          break;
        case 22:
          h.memoizedState === null && ts(d, h, r), tl(h, h.return);
          break;
        case 30:
          break;
        default:
          ts(d, h, r);
      }
      n = n.sibling;
    }
  }
  function Gd(e, n) {
    var r = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && Vi(r));
  }
  function Zd(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && Vi(e));
  }
  function la(e, n, r, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) _g(e, n, r, l), (n = n.sibling);
  }
  function _g(e, n, r, l) {
    var d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        la(e, n, r, l), d & 2048 && el(9, n);
        break;
      case 1:
        la(e, n, r, l);
        break;
      case 3:
        la(e, n, r, l),
          d & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && Vi(e)));
        break;
      case 12:
        if (d & 2048) {
          la(e, n, r, l), (e = n.stateNode);
          try {
            var h = n.memoizedProps,
              x = h.id,
              w = h.onPostCommit;
            typeof w == "function" &&
              w(
                x,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (T) {
            ct(n, n.return, T);
          }
        } else la(e, n, r, l);
        break;
      case 13:
        la(e, n, r, l);
        break;
      case 23:
        break;
      case 22:
        (h = n.stateNode),
          (x = n.alternate),
          n.memoizedState !== null
            ? h._visibility & 2
              ? la(e, n, r, l)
              : nl(e, n)
            : h._visibility & 2
            ? la(e, n, r, l)
            : ((h._visibility |= 2),
              qr(e, n, r, l, (n.subtreeFlags & 10256) !== 0)),
          d & 2048 && Gd(x, n);
        break;
      case 24:
        la(e, n, r, l), d & 2048 && Zd(n.alternate, n);
        break;
      default:
        la(e, n, r, l);
    }
  }
  function qr(e, n, r, l, d) {
    for (d = d && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var h = e,
        x = n,
        w = r,
        T = l,
        B = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          qr(h, x, w, T, d), el(8, x);
          break;
        case 23:
          break;
        case 22:
          var Y = x.stateNode;
          x.memoizedState !== null
            ? Y._visibility & 2
              ? qr(h, x, w, T, d)
              : nl(h, x)
            : ((Y._visibility |= 2), qr(h, x, w, T, d)),
            d && B & 2048 && Gd(x.alternate, x);
          break;
        case 24:
          qr(h, x, w, T, d), d && B & 2048 && Zd(x.alternate, x);
          break;
        default:
          qr(h, x, w, T, d);
      }
      n = n.sibling;
    }
  }
  function nl(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e,
          l = n,
          d = l.flags;
        switch (l.tag) {
          case 22:
            nl(r, l), d & 2048 && Gd(l.alternate, l);
            break;
          case 24:
            nl(r, l), d & 2048 && Zd(l.alternate, l);
            break;
          default:
            nl(r, l);
        }
        n = n.sibling;
      }
  }
  var al = 8192;
  function Pr(e) {
    if (e.subtreeFlags & al)
      for (e = e.child; e !== null; ) Ng(e), (e = e.sibling);
  }
  function Ng(e) {
    switch (e.tag) {
      case 26:
        Pr(e),
          e.flags & al &&
            e.memoizedState !== null &&
            YN(Kn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Pr(e);
        break;
      case 3:
      case 4:
        var n = Kn;
        (Kn = nc(e.stateNode.containerInfo)), Pr(e), (Kn = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = al), (al = 16777216), Pr(e), (al = n))
            : Pr(e));
        break;
      default:
        Pr(e);
    }
  }
  function Cg(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function sl(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          (Vt = l), jg(l, e);
        }
      Cg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Eg(e), (e = e.sibling);
  }
  function Eg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        sl(e), e.flags & 2048 && Ja(9, e, e.return);
        break;
      case 3:
        sl(e);
        break;
      case 12:
        sl(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), Ko(e))
          : sl(e);
        break;
      default:
        sl(e);
    }
  }
  function Ko(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          (Vt = l), jg(l, e);
        }
      Cg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          Ja(8, n, n.return), Ko(n);
          break;
        case 22:
          (r = n.stateNode),
            r._visibility & 2 && ((r._visibility &= -3), Ko(n));
          break;
        default:
          Ko(n);
      }
      e = e.sibling;
    }
  }
  function jg(e, n) {
    for (; Vt !== null; ) {
      var r = Vt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ja(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Vi(r.memoizedState.cache);
      }
      if (((l = r.child), l !== null)) (l.return = r), (Vt = l);
      else
        e: for (r = e; Vt !== null; ) {
          l = Vt;
          var d = l.sibling,
            h = l.return;
          if ((vg(l), l === r)) {
            Vt = null;
            break e;
          }
          if (d !== null) {
            (d.return = h), (Vt = d);
            break e;
          }
          Vt = h;
        }
    }
  }
  var uN = {
      getCacheForType: function (e) {
        var n = Zt(Dt),
          r = n.data.get(e);
        return r === void 0 && ((r = e()), n.data.set(e, r)), r;
      },
    },
    dN = typeof WeakMap == "function" ? WeakMap : Map,
    at = 0,
    dt = null,
    Ge = null,
    $e = 0,
    st = 0,
    hn = null,
    ns = !1,
    Vr = !1,
    Yd = !1,
    Aa = 0,
    wt = 0,
    as = 0,
    Ys = 0,
    Id = 0,
    Ln = 0,
    Hr = 0,
    rl = null,
    ln = null,
    $d = !1,
    Xd = 0,
    Qo = 1 / 0,
    Go = null,
    ss = null,
    Ft = 0,
    rs = null,
    Br = null,
    Fr = 0,
    Wd = 0,
    Jd = null,
    Tg = null,
    il = 0,
    ef = null;
  function mn() {
    if ((at & 2) !== 0 && $e !== 0) return $e & -$e;
    if (L.T !== null) {
      var e = Rr;
      return e !== 0 ? e : of();
    }
    return Km();
  }
  function Og() {
    Ln === 0 && (Ln = ($e & 536870912) === 0 || nt ? no() : 536870912);
    var e = Dn.current;
    return e !== null && (e.flags |= 32), Ln;
  }
  function pn(e, n, r) {
    ((e === dt && (st === 2 || st === 9)) || e.cancelPendingCommit !== null) &&
      (Kr(e, 0), is(e, $e, Ln, !1)),
      Fa(e, r),
      ((at & 2) === 0 || e !== dt) &&
        (e === dt &&
          ((at & 2) === 0 && (Ys |= r), wt === 4 && is(e, $e, Ln, !1)),
        oa(e));
  }
  function Rg(e, n, r) {
    if ((at & 6) !== 0) throw Error(i(327));
    var l = (!r && (n & 124) === 0 && (n & e.expiredLanes) === 0) || ga(e, n),
      d = l ? mN(e, n) : af(e, n, !0),
      h = l;
    do {
      if (d === 0) {
        Vr && !l && is(e, n, 0, !1);
        break;
      } else {
        if (((r = e.current.alternate), h && !fN(r))) {
          (d = af(e, n, !1)), (h = !1);
          continue;
        }
        if (d === 2) {
          if (((h = n), e.errorRecoveryDisabledLanes & h)) var x = 0;
          else
            (x = e.pendingLanes & -536870913),
              (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0);
          if (x !== 0) {
            n = x;
            e: {
              var w = e;
              d = rl;
              var T = w.current.memoizedState.isDehydrated;
              if ((T && (Kr(w, x).flags |= 256), (x = af(w, x, !1)), x !== 2)) {
                if (Yd && !T) {
                  (w.errorRecoveryDisabledLanes |= h), (Ys |= h), (d = 4);
                  break e;
                }
                (h = ln),
                  (ln = d),
                  h !== null && (ln === null ? (ln = h) : ln.push.apply(ln, h));
              }
              d = x;
            }
            if (((h = !1), d !== 2)) continue;
          }
        }
        if (d === 1) {
          Kr(e, 0), is(e, n, 0, !0);
          break;
        }
        e: {
          switch (((l = e), (h = d), h)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              is(l, n, Ln, !ns);
              break e;
            case 2:
              ln = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((n & 62914560) === n && ((d = Xd + 300 - Qt()), 10 < d)) {
            if ((is(l, n, Ln, !ns), dr(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = rv(
              Ag.bind(null, l, r, ln, Go, $d, n, Ln, Ys, Hr, ns, h, 2, -0, 0),
              d
            );
            break e;
          }
          Ag(l, r, ln, Go, $d, n, Ln, Ys, Hr, ns, h, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    oa(e);
  }
  function Ag(e, n, r, l, d, h, x, w, T, B, Y, J, F, Q) {
    if (
      ((e.timeoutHandle = -1),
      (J = n.subtreeFlags),
      (J & 8192 || (J & 16785408) === 16785408) &&
        ((hl = { stylesheets: null, count: 0, unsuspend: ZN }),
        Ng(n),
        (J = IN()),
        J !== null))
    ) {
      (e.cancelPendingCommit = J(
        qg.bind(null, e, n, h, r, l, d, x, w, T, Y, 1, F, Q)
      )),
        is(e, h, x, !B);
      return;
    }
    qg(e, n, h, r, l, d, x, w, T);
  }
  function fN(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        n.flags & 16384 &&
        ((r = n.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var l = 0; l < r.length; l++) {
          var d = r[l],
            h = d.getSnapshot;
          d = d.value;
          try {
            if (!cn(h(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = n.child), n.subtreeFlags & 16384 && r !== null))
        (r.return = n), (n = r);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function is(e, n, r, l) {
    (n &= ~Id),
      (n &= ~Ys),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      l && (e.warmLanes |= n),
      (l = e.expirationTimes);
    for (var d = n; 0 < d; ) {
      var h = 31 - ne(d),
        x = 1 << h;
      (l[h] = -1), (d &= ~x);
    }
    r !== 0 && Bm(e, r, n);
  }
  function Zo() {
    return (at & 6) === 0 ? (ll(0), !1) : !0;
  }
  function tf() {
    if (Ge !== null) {
      if (st === 0) var e = Ge.return;
      else (e = Ge), (_a = Bs = null), vd(e), (Ur = null), (Xi = 0), (e = Ge);
      for (; e !== null; ) ug(e.alternate, e), (e = e.return);
      Ge = null;
    }
  }
  function Kr(e, n) {
    var r = e.timeoutHandle;
    r !== -1 && ((e.timeoutHandle = -1), RN(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      tf(),
      (dt = e),
      (Ge = r = ba(e.current, null)),
      ($e = n),
      (st = 0),
      (hn = null),
      (ns = !1),
      (Vr = ga(e, n)),
      (Yd = !1),
      (Hr = Ln = Id = Ys = as = wt = 0),
      (ln = rl = null),
      ($d = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var d = 31 - ne(l),
          h = 1 << d;
        (n |= e[d]), (l &= ~h);
      }
    return (Aa = n), po(), r;
  }
  function kg(e, n) {
    (Ve = null),
      (L.H = Do),
      n === Bi || n === No
        ? ((n = Ip()), (st = 3))
        : n === Gp
        ? ((n = Ip()), (st = 4))
        : (st =
            n === $y
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (hn = n),
      Ge === null && ((wt = 1), Po(e, Rn(n, e.current)));
  }
  function Mg() {
    var e = L.H;
    return (L.H = Do), e === null ? Do : e;
  }
  function Dg() {
    var e = L.A;
    return (L.A = uN), e;
  }
  function nf() {
    (wt = 4),
      ns || (($e & 4194048) !== $e && Dn.current !== null) || (Vr = !0),
      ((as & 134217727) === 0 && (Ys & 134217727) === 0) ||
        dt === null ||
        is(dt, $e, Ln, !1);
  }
  function af(e, n, r) {
    var l = at;
    at |= 2;
    var d = Mg(),
      h = Dg();
    (dt !== e || $e !== n) && ((Go = null), Kr(e, n)), (n = !1);
    var x = wt;
    e: do
      try {
        if (st !== 0 && Ge !== null) {
          var w = Ge,
            T = hn;
          switch (st) {
            case 8:
              tf(), (x = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Dn.current === null && (n = !0);
              var B = st;
              if (((st = 0), (hn = null), Qr(e, w, T, B), r && Vr)) {
                x = 0;
                break e;
              }
              break;
            default:
              (B = st), (st = 0), (hn = null), Qr(e, w, T, B);
          }
        }
        hN(), (x = wt);
        break;
      } catch (Y) {
        kg(e, Y);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (_a = Bs = null),
      (at = l),
      (L.H = d),
      (L.A = h),
      Ge === null && ((dt = null), ($e = 0), po()),
      x
    );
  }
  function hN() {
    for (; Ge !== null; ) Lg(Ge);
  }
  function mN(e, n) {
    var r = at;
    at |= 2;
    var l = Mg(),
      d = Dg();
    dt !== e || $e !== n
      ? ((Go = null), (Qo = Qt() + 500), Kr(e, n))
      : (Vr = ga(e, n));
    e: do
      try {
        if (st !== 0 && Ge !== null) {
          n = Ge;
          var h = hn;
          t: switch (st) {
            case 1:
              (st = 0), (hn = null), Qr(e, n, h, 1);
              break;
            case 2:
            case 9:
              if (Zp(h)) {
                (st = 0), (hn = null), Ug(n);
                break;
              }
              (n = function () {
                (st !== 2 && st !== 9) || dt !== e || (st = 7), oa(e);
              }),
                h.then(n, n);
              break e;
            case 3:
              st = 7;
              break e;
            case 4:
              st = 5;
              break e;
            case 7:
              Zp(h)
                ? ((st = 0), (hn = null), Ug(n))
                : ((st = 0), (hn = null), Qr(e, n, h, 7));
              break;
            case 5:
              var x = null;
              switch (Ge.tag) {
                case 26:
                  x = Ge.memoizedState;
                case 5:
                case 27:
                  var w = Ge;
                  if (!x || gv(x)) {
                    (st = 0), (hn = null);
                    var T = w.sibling;
                    if (T !== null) Ge = T;
                    else {
                      var B = w.return;
                      B !== null ? ((Ge = B), Yo(B)) : (Ge = null);
                    }
                    break t;
                  }
              }
              (st = 0), (hn = null), Qr(e, n, h, 5);
              break;
            case 6:
              (st = 0), (hn = null), Qr(e, n, h, 6);
              break;
            case 8:
              tf(), (wt = 6);
              break e;
            default:
              throw Error(i(462));
          }
        }
        pN();
        break;
      } catch (Y) {
        kg(e, Y);
      }
    while (!0);
    return (
      (_a = Bs = null),
      (L.H = l),
      (L.A = d),
      (at = r),
      Ge !== null ? 0 : ((dt = null), ($e = 0), po(), wt)
    );
  }
  function pN() {
    for (; Ge !== null && !ks(); ) Lg(Ge);
  }
  function Lg(e) {
    var n = og(e.alternate, e, Aa);
    (e.memoizedProps = e.pendingProps), n === null ? Yo(e) : (Ge = n);
  }
  function Ug(e) {
    var n = e,
      r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = ng(r, n, n.pendingProps, n.type, void 0, $e);
        break;
      case 11:
        n = ng(r, n, n.pendingProps, n.type.render, n.ref, $e);
        break;
      case 5:
        vd(n);
      default:
        ug(r, n), (n = Ge = zp(n, Aa)), (n = og(r, n, Aa));
    }
    (e.memoizedProps = e.pendingProps), n === null ? Yo(e) : (Ge = n);
  }
  function Qr(e, n, r, l) {
    (_a = Bs = null), vd(n), (Ur = null), (Xi = 0);
    var d = n.return;
    try {
      if (sN(e, d, n, r, $e)) {
        (wt = 1), Po(e, Rn(r, e.current)), (Ge = null);
        return;
      }
    } catch (h) {
      if (d !== null) throw ((Ge = d), h);
      (wt = 1), Po(e, Rn(r, e.current)), (Ge = null);
      return;
    }
    n.flags & 32768
      ? (nt || l === 1
          ? (e = !0)
          : Vr || ($e & 536870912) !== 0
          ? (e = !1)
          : ((ns = e = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Dn.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        zg(n, e))
      : Yo(n);
  }
  function Yo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        zg(n, ns);
        return;
      }
      e = n.return;
      var r = iN(n.alternate, n, Aa);
      if (r !== null) {
        Ge = r;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Ge = n;
        return;
      }
      Ge = n = e;
    } while (n !== null);
    wt === 0 && (wt = 5);
  }
  function zg(e, n) {
    do {
      var r = lN(e.alternate, e);
      if (r !== null) {
        (r.flags &= 32767), (Ge = r);
        return;
      }
      if (
        ((r = e.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        Ge = e;
        return;
      }
      Ge = e = r;
    } while (e !== null);
    (wt = 6), (Ge = null);
  }
  function qg(e, n, r, l, d, h, x, w, T) {
    e.cancelPendingCommit = null;
    do Io();
    while (Ft !== 0);
    if ((at & 6) !== 0) throw Error(i(327));
    if (n !== null) {
      if (n === e.current) throw Error(i(177));
      if (
        ((h = n.lanes | n.childLanes),
        (h |= Zu),
        ZS(e, r, h, x, w, T),
        e === dt && ((Ge = dt = null), ($e = 0)),
        (Br = n),
        (rs = e),
        (Fr = r),
        (Wd = h),
        (Jd = d),
        (Tg = l),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            xN(ur, function () {
              return Fg(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = L.T), (L.T = null), (d = U.p), (U.p = 2), (x = at), (at |= 4);
        try {
          oN(e, n, r);
        } finally {
          (at = x), (U.p = d), (L.T = l);
        }
      }
      (Ft = 1), Pg(), Vg(), Hg();
    }
  }
  function Pg() {
    if (Ft === 1) {
      Ft = 0;
      var e = rs,
        n = Br,
        r = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || r) {
        (r = L.T), (L.T = null);
        var l = U.p;
        U.p = 2;
        var d = at;
        at |= 4;
        try {
          wg(n, e);
          var h = yf,
            x = jp(e.containerInfo),
            w = h.focusedElem,
            T = h.selectionRange;
          if (
            x !== w &&
            w &&
            w.ownerDocument &&
            Ep(w.ownerDocument.documentElement, w)
          ) {
            if (T !== null && Bu(w)) {
              var B = T.start,
                Y = T.end;
              if ((Y === void 0 && (Y = B), "selectionStart" in w))
                (w.selectionStart = B),
                  (w.selectionEnd = Math.min(Y, w.value.length));
              else {
                var J = w.ownerDocument || document,
                  F = (J && J.defaultView) || window;
                if (F.getSelection) {
                  var Q = F.getSelection(),
                    Ae = w.textContent.length,
                    Oe = Math.min(T.start, Ae),
                    ot = T.end === void 0 ? Oe : Math.min(T.end, Ae);
                  !Q.extend && Oe > ot && ((x = ot), (ot = Oe), (Oe = x));
                  var z = Cp(w, Oe),
                    M = Cp(w, ot);
                  if (
                    z &&
                    M &&
                    (Q.rangeCount !== 1 ||
                      Q.anchorNode !== z.node ||
                      Q.anchorOffset !== z.offset ||
                      Q.focusNode !== M.node ||
                      Q.focusOffset !== M.offset)
                  ) {
                    var H = J.createRange();
                    H.setStart(z.node, z.offset),
                      Q.removeAllRanges(),
                      Oe > ot
                        ? (Q.addRange(H), Q.extend(M.node, M.offset))
                        : (H.setEnd(M.node, M.offset), Q.addRange(H));
                  }
                }
              }
            }
            for (J = [], Q = w; (Q = Q.parentNode); )
              Q.nodeType === 1 &&
                J.push({ element: Q, left: Q.scrollLeft, top: Q.scrollTop });
            for (
              typeof w.focus == "function" && w.focus(), w = 0;
              w < J.length;
              w++
            ) {
              var $ = J[w];
              ($.element.scrollLeft = $.left), ($.element.scrollTop = $.top);
            }
          }
          (lc = !!pf), (yf = pf = null);
        } finally {
          (at = d), (U.p = l), (L.T = r);
        }
      }
      (e.current = n), (Ft = 2);
    }
  }
  function Vg() {
    if (Ft === 2) {
      Ft = 0;
      var e = rs,
        n = Br,
        r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        (r = L.T), (L.T = null);
        var l = U.p;
        U.p = 2;
        var d = at;
        at |= 4;
        try {
          gg(e, n.alternate, n);
        } finally {
          (at = d), (U.p = l), (L.T = r);
        }
      }
      Ft = 3;
    }
  }
  function Hg() {
    if (Ft === 4 || Ft === 3) {
      (Ft = 0), Ba();
      var e = rs,
        n = Br,
        r = Fr,
        l = Tg;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Ft = 5)
        : ((Ft = 0), (Br = rs = null), Bg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (
        (d === 0 && (ss = null),
        wu(r),
        (n = n.stateNode),
        se && typeof se.onCommitFiberRoot == "function")
      )
        try {
          se.onCommitFiberRoot(K, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (n = L.T), (d = U.p), (U.p = 2), (L.T = null);
        try {
          for (var h = e.onRecoverableError, x = 0; x < l.length; x++) {
            var w = l[x];
            h(w.value, { componentStack: w.stack });
          }
        } finally {
          (L.T = n), (U.p = d);
        }
      }
      (Fr & 3) !== 0 && Io(),
        oa(e),
        (d = e.pendingLanes),
        (r & 4194090) !== 0 && (d & 42) !== 0
          ? e === ef
            ? il++
            : ((il = 0), (ef = e))
          : (il = 0),
        ll(0);
    }
  }
  function Bg(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), Vi(n)));
  }
  function Io(e) {
    return Pg(), Vg(), Hg(), Fg();
  }
  function Fg() {
    if (Ft !== 5) return !1;
    var e = rs,
      n = Wd;
    Wd = 0;
    var r = wu(Fr),
      l = L.T,
      d = U.p;
    try {
      (U.p = 32 > r ? 32 : r), (L.T = null), (r = Jd), (Jd = null);
      var h = rs,
        x = Fr;
      if (((Ft = 0), (Br = rs = null), (Fr = 0), (at & 6) !== 0))
        throw Error(i(331));
      var w = at;
      if (
        ((at |= 4),
        Eg(h.current),
        _g(h, h.current, x, r),
        (at = w),
        ll(0, !1),
        se && typeof se.onPostCommitFiberRoot == "function")
      )
        try {
          se.onPostCommitFiberRoot(K, h);
        } catch {}
      return !0;
    } finally {
      (U.p = d), (L.T = l), Bg(e, n);
    }
  }
  function Kg(e, n, r) {
    (n = Rn(r, n)),
      (n = kd(e.stateNode, n, 2)),
      (e = Ia(e, n, 2)),
      e !== null && (Fa(e, 2), oa(e));
  }
  function ct(e, n, r) {
    if (e.tag === 3) Kg(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Kg(n, e, r);
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (ss === null || !ss.has(l)))
          ) {
            (e = Rn(r, e)),
              (r = Yy(2)),
              (l = Ia(n, r, 2)),
              l !== null && (Iy(r, l, n, e), Fa(l, 2), oa(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function sf(e, n, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new dN();
      var d = new Set();
      l.set(n, d);
    } else (d = l.get(n)), d === void 0 && ((d = new Set()), l.set(n, d));
    d.has(r) ||
      ((Yd = !0), d.add(r), (e = yN.bind(null, e, n, r)), n.then(e, e));
  }
  function yN(e, n, r) {
    var l = e.pingCache;
    l !== null && l.delete(n),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      dt === e &&
        ($e & r) === r &&
        (wt === 4 || (wt === 3 && ($e & 62914560) === $e && 300 > Qt() - Xd)
          ? (at & 2) === 0 && Kr(e, 0)
          : (Id |= r),
        Hr === $e && (Hr = 0)),
      oa(e);
  }
  function Qg(e, n) {
    n === 0 && (n = _i()), (e = Er(e, n)), e !== null && (Fa(e, n), oa(e));
  }
  function gN(e) {
    var n = e.memoizedState,
      r = 0;
    n !== null && (r = n.retryLane), Qg(e, r);
  }
  function vN(e, n) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          d = e.memoizedState;
        d !== null && (r = d.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(n), Qg(e, r);
  }
  function xN(e, n) {
    return mt(e, n);
  }
  var $o = null,
    Gr = null,
    rf = !1,
    Xo = !1,
    lf = !1,
    Is = 0;
  function oa(e) {
    e !== Gr &&
      e.next === null &&
      (Gr === null ? ($o = Gr = e) : (Gr = Gr.next = e)),
      (Xo = !0),
      rf || ((rf = !0), wN());
  }
  function ll(e, n) {
    if (!lf && Xo) {
      lf = !0;
      do
        for (var r = !1, l = $o; l !== null; ) {
          if (e !== 0) {
            var d = l.pendingLanes;
            if (d === 0) var h = 0;
            else {
              var x = l.suspendedLanes,
                w = l.pingedLanes;
              (h = (1 << (31 - ne(42 | e) + 1)) - 1),
                (h &= d & ~(x & ~w)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0);
            }
            h !== 0 && ((r = !0), Ig(l, h));
          } else
            (h = $e),
              (h = dr(
                l,
                l === dt ? h : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (h & 3) === 0 || ga(l, h) || ((r = !0), Ig(l, h));
          l = l.next;
        }
      while (r);
      lf = !1;
    }
  }
  function bN() {
    Gg();
  }
  function Gg() {
    Xo = rf = !1;
    var e = 0;
    Is !== 0 && (ON() && (e = Is), (Is = 0));
    for (var n = Qt(), r = null, l = $o; l !== null; ) {
      var d = l.next,
        h = Zg(l, n);
      h === 0
        ? ((l.next = null),
          r === null ? ($o = d) : (r.next = d),
          d === null && (Gr = r))
        : ((r = l), (e !== 0 || (h & 3) !== 0) && (Xo = !0)),
        (l = d);
    }
    ll(e);
  }
  function Zg(e, n) {
    for (
      var r = e.suspendedLanes,
        l = e.pingedLanes,
        d = e.expirationTimes,
        h = e.pendingLanes & -62914561;
      0 < h;

    ) {
      var x = 31 - ne(h),
        w = 1 << x,
        T = d[x];
      T === -1
        ? ((w & r) === 0 || (w & l) !== 0) && (d[x] = Si(w, n))
        : T <= n && (e.expiredLanes |= w),
        (h &= ~w);
    }
    if (
      ((n = dt),
      (r = $e),
      (r = dr(
        e,
        e === n ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      r === 0 ||
        (e === n && (st === 2 || st === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && jt(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((r & 3) === 0 || ga(e, r)) {
      if (((n = r & -r), n === e.callbackPriority)) return n;
      switch ((l !== null && jt(l), wu(r))) {
        case 2:
        case 8:
          r = to;
          break;
        case 32:
          r = ur;
          break;
        case 268435456:
          r = wi;
          break;
        default:
          r = ur;
      }
      return (
        (l = Yg.bind(null, e)),
        (r = mt(r, l)),
        (e.callbackPriority = n),
        (e.callbackNode = r),
        n
      );
    }
    return (
      l !== null && l !== null && jt(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Yg(e, n) {
    if (Ft !== 0 && Ft !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var r = e.callbackNode;
    if (Io() && e.callbackNode !== r) return null;
    var l = $e;
    return (
      (l = dr(
        e,
        e === dt ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Rg(e, l, n),
          Zg(e, Qt()),
          e.callbackNode != null && e.callbackNode === r
            ? Yg.bind(null, e)
            : null)
    );
  }
  function Ig(e, n) {
    if (Io()) return null;
    Rg(e, n, !0);
  }
  function wN() {
    AN(function () {
      (at & 6) !== 0 ? mt(bi, bN) : Gg();
    });
  }
  function of() {
    return Is === 0 && (Is = no()), Is;
  }
  function $g(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : lo("" + e);
  }
  function Xg(e, n) {
    var r = n.ownerDocument.createElement("input");
    return (
      (r.name = n.name),
      (r.value = n.value),
      e.id && r.setAttribute("form", e.id),
      n.parentNode.insertBefore(r, n),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function SN(e, n, r, l, d) {
    if (n === "submit" && r && r.stateNode === d) {
      var h = $g((d[nn] || null).action),
        x = l.submitter;
      x &&
        ((n = (n = x[nn] || null)
          ? $g(n.formAction)
          : x.getAttribute("formAction")),
        n !== null && ((h = n), (x = null)));
      var w = new fo("action", "action", null, l, d);
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Is !== 0) {
                  var T = x ? Xg(d, x) : new FormData(d);
                  jd(
                    r,
                    { pending: !0, data: T, method: d.method, action: h },
                    null,
                    T
                  );
                }
              } else
                typeof h == "function" &&
                  (w.preventDefault(),
                  (T = x ? Xg(d, x) : new FormData(d)),
                  jd(
                    r,
                    { pending: !0, data: T, method: d.method, action: h },
                    h,
                    T
                  ));
            },
            currentTarget: d,
          },
        ],
      });
    }
  }
  for (var cf = 0; cf < Gu.length; cf++) {
    var uf = Gu[cf],
      _N = uf.toLowerCase(),
      NN = uf[0].toUpperCase() + uf.slice(1);
    Fn(_N, "on" + NN);
  }
  Fn(Rp, "onAnimationEnd"),
    Fn(Ap, "onAnimationIteration"),
    Fn(kp, "onAnimationStart"),
    Fn("dblclick", "onDoubleClick"),
    Fn("focusin", "onFocus"),
    Fn("focusout", "onBlur"),
    Fn(H_, "onTransitionRun"),
    Fn(B_, "onTransitionStart"),
    Fn(F_, "onTransitionCancel"),
    Fn(Mp, "onTransitionEnd"),
    yr("onMouseEnter", ["mouseout", "mouseover"]),
    yr("onMouseLeave", ["mouseout", "mouseover"]),
    yr("onPointerEnter", ["pointerout", "pointerover"]),
    yr("onPointerLeave", ["pointerout", "pointerover"]),
    Ms(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ms(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ms("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ms(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ms(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ms(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ol =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    CN = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ol)
    );
  function Wg(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r],
        d = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (n)
          for (var x = l.length - 1; 0 <= x; x--) {
            var w = l[x],
              T = w.instance,
              B = w.currentTarget;
            if (((w = w.listener), T !== h && d.isPropagationStopped()))
              break e;
            (h = w), (d.currentTarget = B);
            try {
              h(d);
            } catch (Y) {
              qo(Y);
            }
            (d.currentTarget = null), (h = T);
          }
        else
          for (x = 0; x < l.length; x++) {
            if (
              ((w = l[x]),
              (T = w.instance),
              (B = w.currentTarget),
              (w = w.listener),
              T !== h && d.isPropagationStopped())
            )
              break e;
            (h = w), (d.currentTarget = B);
            try {
              h(d);
            } catch (Y) {
              qo(Y);
            }
            (d.currentTarget = null), (h = T);
          }
      }
    }
  }
  function Ze(e, n) {
    var r = n[Su];
    r === void 0 && (r = n[Su] = new Set());
    var l = e + "__bubble";
    r.has(l) || (Jg(n, e, 2, !1), r.add(l));
  }
  function df(e, n, r) {
    var l = 0;
    n && (l |= 4), Jg(r, e, l, n);
  }
  var Wo = "_reactListening" + Math.random().toString(36).slice(2);
  function ff(e) {
    if (!e[Wo]) {
      (e[Wo] = !0),
        Gm.forEach(function (r) {
          r !== "selectionchange" && (CN.has(r) || df(r, !1, e), df(r, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Wo] || ((n[Wo] = !0), df("selectionchange", !1, n));
    }
  }
  function Jg(e, n, r, l) {
    switch (_v(n)) {
      case 2:
        var d = WN;
        break;
      case 8:
        d = JN;
        break;
      default:
        d = Ef;
    }
    (r = d.bind(null, n, r, e)),
      (d = void 0),
      !Mu ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (d = !0),
      l
        ? d !== void 0
          ? e.addEventListener(n, r, { capture: !0, passive: d })
          : e.addEventListener(n, r, !0)
        : d !== void 0
        ? e.addEventListener(n, r, { passive: d })
        : e.addEventListener(n, r, !1);
  }
  function hf(e, n, r, l, d) {
    var h = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var x = l.tag;
        if (x === 3 || x === 4) {
          var w = l.stateNode.containerInfo;
          if (w === d) break;
          if (x === 4)
            for (x = l.return; x !== null; ) {
              var T = x.tag;
              if ((T === 3 || T === 4) && x.stateNode.containerInfo === d)
                return;
              x = x.return;
            }
          for (; w !== null; ) {
            if (((x = hr(w)), x === null)) return;
            if (((T = x.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              l = h = x;
              continue e;
            }
            w = w.parentNode;
          }
        }
        l = l.return;
      }
    ip(function () {
      var B = h,
        Y = Au(r),
        J = [];
      e: {
        var F = Dp.get(e);
        if (F !== void 0) {
          var Q = fo,
            Ae = e;
          switch (e) {
            case "keypress":
              if (co(r) === 0) break e;
            case "keydown":
            case "keyup":
              Q = x_;
              break;
            case "focusin":
              (Ae = "focus"), (Q = zu);
              break;
            case "focusout":
              (Ae = "blur"), (Q = zu);
              break;
            case "beforeblur":
            case "afterblur":
              Q = zu;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = cp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = l_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = S_;
              break;
            case Rp:
            case Ap:
            case kp:
              Q = u_;
              break;
            case Mp:
              Q = N_;
              break;
            case "scroll":
            case "scrollend":
              Q = r_;
              break;
            case "wheel":
              Q = E_;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = f_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = dp;
              break;
            case "toggle":
            case "beforetoggle":
              Q = T_;
          }
          var Oe = (n & 4) !== 0,
            ot = !Oe && (e === "scroll" || e === "scrollend"),
            z = Oe ? (F !== null ? F + "Capture" : null) : F;
          Oe = [];
          for (var M = B, H; M !== null; ) {
            var $ = M;
            if (
              ((H = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                H === null ||
                z === null ||
                (($ = ji(M, z)), $ != null && Oe.push(cl(M, $, H))),
              ot)
            )
              break;
            M = M.return;
          }
          0 < Oe.length &&
            ((F = new Q(F, Ae, null, r, Y)),
            J.push({ event: F, listeners: Oe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            F &&
              r !== Ru &&
              (Ae = r.relatedTarget || r.fromElement) &&
              (hr(Ae) || Ae[fr]))
          )
            break e;
          if (
            (Q || F) &&
            ((F =
              Y.window === Y
                ? Y
                : (F = Y.ownerDocument)
                ? F.defaultView || F.parentWindow
                : window),
            Q
              ? ((Ae = r.relatedTarget || r.toElement),
                (Q = B),
                (Ae = Ae ? hr(Ae) : null),
                Ae !== null &&
                  ((ot = c(Ae)),
                  (Oe = Ae.tag),
                  Ae !== ot || (Oe !== 5 && Oe !== 27 && Oe !== 6)) &&
                  (Ae = null))
              : ((Q = null), (Ae = B)),
            Q !== Ae)
          ) {
            if (
              ((Oe = cp),
              ($ = "onMouseLeave"),
              (z = "onMouseEnter"),
              (M = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Oe = dp),
                ($ = "onPointerLeave"),
                (z = "onPointerEnter"),
                (M = "pointer")),
              (ot = Q == null ? F : Ei(Q)),
              (H = Ae == null ? F : Ei(Ae)),
              (F = new Oe($, M + "leave", Q, r, Y)),
              (F.target = ot),
              (F.relatedTarget = H),
              ($ = null),
              hr(Y) === B &&
                ((Oe = new Oe(z, M + "enter", Ae, r, Y)),
                (Oe.target = H),
                (Oe.relatedTarget = ot),
                ($ = Oe)),
              (ot = $),
              Q && Ae)
            )
              t: {
                for (Oe = Q, z = Ae, M = 0, H = Oe; H; H = Zr(H)) M++;
                for (H = 0, $ = z; $; $ = Zr($)) H++;
                for (; 0 < M - H; ) (Oe = Zr(Oe)), M--;
                for (; 0 < H - M; ) (z = Zr(z)), H--;
                for (; M--; ) {
                  if (Oe === z || (z !== null && Oe === z.alternate)) break t;
                  (Oe = Zr(Oe)), (z = Zr(z));
                }
                Oe = null;
              }
            else Oe = null;
            Q !== null && ev(J, F, Q, Oe, !1),
              Ae !== null && ot !== null && ev(J, ot, Ae, Oe, !0);
          }
        }
        e: {
          if (
            ((F = B ? Ei(B) : window),
            (Q = F.nodeName && F.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && F.type === "file"))
          )
            var xe = xp;
          else if (gp(F))
            if (bp) xe = q_;
            else {
              xe = U_;
              var Fe = L_;
            }
          else
            (Q = F.nodeName),
              !Q ||
              Q.toLowerCase() !== "input" ||
              (F.type !== "checkbox" && F.type !== "radio")
                ? B && Ou(B.elementType) && (xe = xp)
                : (xe = z_);
          if (xe && (xe = xe(e, B))) {
            vp(J, xe, r, Y);
            break e;
          }
          Fe && Fe(e, F, B),
            e === "focusout" &&
              B &&
              F.type === "number" &&
              B.memoizedProps.value != null &&
              Tu(F, "number", F.value);
        }
        switch (((Fe = B ? Ei(B) : window), e)) {
          case "focusin":
            (gp(Fe) || Fe.contentEditable === "true") &&
              ((_r = Fe), (Fu = B), (Li = null));
            break;
          case "focusout":
            Li = Fu = _r = null;
            break;
          case "mousedown":
            Ku = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Ku = !1), Tp(J, r, Y);
            break;
          case "selectionchange":
            if (V_) break;
          case "keydown":
          case "keyup":
            Tp(J, r, Y);
        }
        var Ce;
        if (Pu)
          e: {
            switch (e) {
              case "compositionstart":
                var Re = "onCompositionStart";
                break e;
              case "compositionend":
                Re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Re = "onCompositionUpdate";
                break e;
            }
            Re = void 0;
          }
        else
          Sr
            ? pp(e, r) && (Re = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (Re = "onCompositionStart");
        Re &&
          (fp &&
            r.locale !== "ko" &&
            (Sr || Re !== "onCompositionStart"
              ? Re === "onCompositionEnd" && Sr && (Ce = lp())
              : ((Qa = Y),
                (Du = "value" in Qa ? Qa.value : Qa.textContent),
                (Sr = !0))),
          (Fe = Jo(B, Re)),
          0 < Fe.length &&
            ((Re = new up(Re, e, null, r, Y)),
            J.push({ event: Re, listeners: Fe }),
            Ce
              ? (Re.data = Ce)
              : ((Ce = yp(r)), Ce !== null && (Re.data = Ce)))),
          (Ce = R_ ? A_(e, r) : k_(e, r)) &&
            ((Re = Jo(B, "onBeforeInput")),
            0 < Re.length &&
              ((Fe = new up("onBeforeInput", "beforeinput", null, r, Y)),
              J.push({ event: Fe, listeners: Re }),
              (Fe.data = Ce))),
          SN(J, e, B, r, Y);
      }
      Wg(J, n);
    });
  }
  function cl(e, n, r) {
    return { instance: e, listener: n, currentTarget: r };
  }
  function Jo(e, n) {
    for (var r = n + "Capture", l = []; e !== null; ) {
      var d = e,
        h = d.stateNode;
      if (
        ((d = d.tag),
        (d !== 5 && d !== 26 && d !== 27) ||
          h === null ||
          ((d = ji(e, r)),
          d != null && l.unshift(cl(e, d, h)),
          (d = ji(e, n)),
          d != null && l.push(cl(e, d, h))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Zr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ev(e, n, r, l, d) {
    for (var h = n._reactName, x = []; r !== null && r !== l; ) {
      var w = r,
        T = w.alternate,
        B = w.stateNode;
      if (((w = w.tag), T !== null && T === l)) break;
      (w !== 5 && w !== 26 && w !== 27) ||
        B === null ||
        ((T = B),
        d
          ? ((B = ji(r, h)), B != null && x.unshift(cl(r, B, T)))
          : d || ((B = ji(r, h)), B != null && x.push(cl(r, B, T)))),
        (r = r.return);
    }
    x.length !== 0 && e.push({ event: n, listeners: x });
  }
  var EN = /\r\n?/g,
    jN = /\u0000|\uFFFD/g;
  function tv(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        EN,
        `
`
      )
      .replace(jN, "");
  }
  function nv(e, n) {
    return (n = tv(n)), tv(e) === n;
  }
  function ec() {}
  function lt(e, n, r, l, d, h) {
    switch (r) {
      case "children":
        typeof l == "string"
          ? n === "body" || (n === "textarea" && l === "") || xr(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            n !== "body" &&
            xr(e, "" + l);
        break;
      case "className":
        so(e, "class", l);
        break;
      case "tabIndex":
        so(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        so(e, r, l);
        break;
      case "style":
        sp(e, l, h);
        break;
      case "data":
        if (n !== "object") {
          so(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(r);
          break;
        }
        (l = lo("" + l)), e.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof h == "function" &&
            (r === "formAction"
              ? (n !== "input" && lt(e, n, "name", d.name, d, null),
                lt(e, n, "formEncType", d.formEncType, d, null),
                lt(e, n, "formMethod", d.formMethod, d, null),
                lt(e, n, "formTarget", d.formTarget, d, null))
              : (lt(e, n, "encType", d.encType, d, null),
                lt(e, n, "method", d.method, d, null),
                lt(e, n, "target", d.target, d, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        (l = lo("" + l)), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = ec);
        break;
      case "onScroll":
        l != null && Ze("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ze("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((r = l.__html), r != null)) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = r;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (r = lo("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(r, "" + l)
          : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(r, "")
          : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(r, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(r, l)
          : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(r, l)
          : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(r)
          : e.setAttribute(r, l);
        break;
      case "popover":
        Ze("beforetoggle", e), Ze("toggle", e), ao(e, "popover", l);
        break;
      case "xlinkActuate":
        va(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        va(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        va(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        va(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        va(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        va(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        va(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        ao(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) ||
          (r[0] !== "o" && r[0] !== "O") ||
          (r[1] !== "n" && r[1] !== "N")) &&
          ((r = a_.get(r) || r), ao(e, r, l));
    }
  }
  function mf(e, n, r, l, d, h) {
    switch (r) {
      case "style":
        sp(e, l, h);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (((r = l.__html), r != null)) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? xr(e, l)
          : (typeof l == "number" || typeof l == "bigint") && xr(e, "" + l);
        break;
      case "onScroll":
        l != null && Ze("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ze("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = ec);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Zm.hasOwnProperty(r))
          e: {
            if (
              r[0] === "o" &&
              r[1] === "n" &&
              ((d = r.endsWith("Capture")),
              (n = r.slice(2, d ? r.length - 7 : void 0)),
              (h = e[nn] || null),
              (h = h != null ? h[r] : null),
              typeof h == "function" && e.removeEventListener(n, h, d),
              typeof l == "function")
            ) {
              typeof h != "function" &&
                h !== null &&
                (r in e
                  ? (e[r] = null)
                  : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(n, l, d);
              break e;
            }
            r in e
              ? (e[r] = l)
              : l === !0
              ? e.setAttribute(r, "")
              : ao(e, r, l);
          }
    }
  }
  function Kt(e, n, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ze("error", e), Ze("load", e);
        var l = !1,
          d = !1,
          h;
        for (h in r)
          if (r.hasOwnProperty(h)) {
            var x = r[h];
            if (x != null)
              switch (h) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, n));
                default:
                  lt(e, n, h, x, r, null);
              }
          }
        d && lt(e, n, "srcSet", r.srcSet, r, null),
          l && lt(e, n, "src", r.src, r, null);
        return;
      case "input":
        Ze("invalid", e);
        var w = (h = x = d = null),
          T = null,
          B = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var Y = r[l];
            if (Y != null)
              switch (l) {
                case "name":
                  d = Y;
                  break;
                case "type":
                  x = Y;
                  break;
                case "checked":
                  T = Y;
                  break;
                case "defaultChecked":
                  B = Y;
                  break;
                case "value":
                  h = Y;
                  break;
                case "defaultValue":
                  w = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null) throw Error(i(137, n));
                  break;
                default:
                  lt(e, n, l, Y, r, null);
              }
          }
        ep(e, h, w, T, B, x, d, !1), ro(e);
        return;
      case "select":
        Ze("invalid", e), (l = x = h = null);
        for (d in r)
          if (r.hasOwnProperty(d) && ((w = r[d]), w != null))
            switch (d) {
              case "value":
                h = w;
                break;
              case "defaultValue":
                x = w;
                break;
              case "multiple":
                l = w;
              default:
                lt(e, n, d, w, r, null);
            }
        (n = h),
          (r = x),
          (e.multiple = !!l),
          n != null ? vr(e, !!l, n, !1) : r != null && vr(e, !!l, r, !0);
        return;
      case "textarea":
        Ze("invalid", e), (h = d = l = null);
        for (x in r)
          if (r.hasOwnProperty(x) && ((w = r[x]), w != null))
            switch (x) {
              case "value":
                l = w;
                break;
              case "defaultValue":
                d = w;
                break;
              case "children":
                h = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(i(91));
                break;
              default:
                lt(e, n, x, w, r, null);
            }
        np(e, l, d, h), ro(e);
        return;
      case "option":
        for (T in r)
          r.hasOwnProperty(T) &&
            ((l = r[T]), l != null) &&
            (T === "selected"
              ? (e.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : lt(e, n, T, l, r, null));
        return;
      case "dialog":
        Ze("beforetoggle", e), Ze("toggle", e), Ze("cancel", e), Ze("close", e);
        break;
      case "iframe":
      case "object":
        Ze("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ol.length; l++) Ze(ol[l], e);
        break;
      case "image":
        Ze("error", e), Ze("load", e);
        break;
      case "details":
        Ze("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ze("error", e), Ze("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in r)
          if (r.hasOwnProperty(B) && ((l = r[B]), l != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, n));
              default:
                lt(e, n, B, l, r, null);
            }
        return;
      default:
        if (Ou(n)) {
          for (Y in r)
            r.hasOwnProperty(Y) &&
              ((l = r[Y]), l !== void 0 && mf(e, n, Y, l, r, void 0));
          return;
        }
    }
    for (w in r)
      r.hasOwnProperty(w) && ((l = r[w]), l != null && lt(e, n, w, l, r, null));
  }
  function TN(e, n, r, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null,
          h = null,
          x = null,
          w = null,
          T = null,
          B = null,
          Y = null;
        for (Q in r) {
          var J = r[Q];
          if (r.hasOwnProperty(Q) && J != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = J;
              default:
                l.hasOwnProperty(Q) || lt(e, n, Q, null, l, J);
            }
        }
        for (var F in l) {
          var Q = l[F];
          if (((J = r[F]), l.hasOwnProperty(F) && (Q != null || J != null)))
            switch (F) {
              case "type":
                h = Q;
                break;
              case "name":
                d = Q;
                break;
              case "checked":
                B = Q;
                break;
              case "defaultChecked":
                Y = Q;
                break;
              case "value":
                x = Q;
                break;
              case "defaultValue":
                w = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null) throw Error(i(137, n));
                break;
              default:
                Q !== J && lt(e, n, F, Q, l, J);
            }
        }
        ju(e, x, w, T, B, Y, h, d);
        return;
      case "select":
        Q = x = w = F = null;
        for (h in r)
          if (((T = r[h]), r.hasOwnProperty(h) && T != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                Q = T;
              default:
                l.hasOwnProperty(h) || lt(e, n, h, null, l, T);
            }
        for (d in l)
          if (
            ((h = l[d]),
            (T = r[d]),
            l.hasOwnProperty(d) && (h != null || T != null))
          )
            switch (d) {
              case "value":
                F = h;
                break;
              case "defaultValue":
                w = h;
                break;
              case "multiple":
                x = h;
              default:
                h !== T && lt(e, n, d, h, l, T);
            }
        (n = w),
          (r = x),
          (l = Q),
          F != null
            ? vr(e, !!r, F, !1)
            : !!l != !!r &&
              (n != null ? vr(e, !!r, n, !0) : vr(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        Q = F = null;
        for (w in r)
          if (
            ((d = r[w]),
            r.hasOwnProperty(w) && d != null && !l.hasOwnProperty(w))
          )
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                lt(e, n, w, null, l, d);
            }
        for (x in l)
          if (
            ((d = l[x]),
            (h = r[x]),
            l.hasOwnProperty(x) && (d != null || h != null))
          )
            switch (x) {
              case "value":
                F = d;
                break;
              case "defaultValue":
                Q = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(i(91));
                break;
              default:
                d !== h && lt(e, n, x, d, l, h);
            }
        tp(e, F, Q);
        return;
      case "option":
        for (var Ae in r)
          (F = r[Ae]),
            r.hasOwnProperty(Ae) &&
              F != null &&
              !l.hasOwnProperty(Ae) &&
              (Ae === "selected"
                ? (e.selected = !1)
                : lt(e, n, Ae, null, l, F));
        for (T in l)
          (F = l[T]),
            (Q = r[T]),
            l.hasOwnProperty(T) &&
              F !== Q &&
              (F != null || Q != null) &&
              (T === "selected"
                ? (e.selected =
                    F && typeof F != "function" && typeof F != "symbol")
                : lt(e, n, T, F, l, Q));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Oe in r)
          (F = r[Oe]),
            r.hasOwnProperty(Oe) &&
              F != null &&
              !l.hasOwnProperty(Oe) &&
              lt(e, n, Oe, null, l, F);
        for (B in l)
          if (
            ((F = l[B]),
            (Q = r[B]),
            l.hasOwnProperty(B) && F !== Q && (F != null || Q != null))
          )
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null) throw Error(i(137, n));
                break;
              default:
                lt(e, n, B, F, l, Q);
            }
        return;
      default:
        if (Ou(n)) {
          for (var ot in r)
            (F = r[ot]),
              r.hasOwnProperty(ot) &&
                F !== void 0 &&
                !l.hasOwnProperty(ot) &&
                mf(e, n, ot, void 0, l, F);
          for (Y in l)
            (F = l[Y]),
              (Q = r[Y]),
              !l.hasOwnProperty(Y) ||
                F === Q ||
                (F === void 0 && Q === void 0) ||
                mf(e, n, Y, F, l, Q);
          return;
        }
    }
    for (var z in r)
      (F = r[z]),
        r.hasOwnProperty(z) &&
          F != null &&
          !l.hasOwnProperty(z) &&
          lt(e, n, z, null, l, F);
    for (J in l)
      (F = l[J]),
        (Q = r[J]),
        !l.hasOwnProperty(J) ||
          F === Q ||
          (F == null && Q == null) ||
          lt(e, n, J, F, l, Q);
  }
  var pf = null,
    yf = null;
  function tc(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function av(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sv(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function gf(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vf = null;
  function ON() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === vf
        ? !1
        : ((vf = e), !0)
      : ((vf = null), !1);
  }
  var rv = typeof setTimeout == "function" ? setTimeout : void 0,
    RN = typeof clearTimeout == "function" ? clearTimeout : void 0,
    iv = typeof Promise == "function" ? Promise : void 0,
    AN =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof iv < "u"
        ? function (e) {
            return iv.resolve(null).then(e).catch(kN);
          }
        : rv;
  function kN(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ls(e) {
    return e === "head";
  }
  function lv(e, n) {
    var r = n,
      l = 0,
      d = 0;
    do {
      var h = r.nextSibling;
      if ((e.removeChild(r), h && h.nodeType === 8))
        if (((r = h.data), r === "/$")) {
          if (0 < l && 8 > l) {
            r = l;
            var x = e.ownerDocument;
            if ((r & 1 && ul(x.documentElement), r & 2 && ul(x.body), r & 4))
              for (r = x.head, ul(r), x = r.firstChild; x; ) {
                var w = x.nextSibling,
                  T = x.nodeName;
                x[Ci] ||
                  T === "SCRIPT" ||
                  T === "STYLE" ||
                  (T === "LINK" && x.rel.toLowerCase() === "stylesheet") ||
                  r.removeChild(x),
                  (x = w);
              }
          }
          if (d === 0) {
            e.removeChild(h), vl(n);
            return;
          }
          d--;
        } else
          r === "$" || r === "$?" || r === "$!"
            ? d++
            : (l = r.charCodeAt(0) - 48);
      else l = 0;
      r = h;
    } while (r);
    vl(n);
  }
  function xf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (((n = n.nextSibling), r.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          xf(r), _u(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function MN(e, n, r, l) {
    for (; e.nodeType === 1; ) {
      var d = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Ci])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((h = e.getAttribute("rel")),
                h === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                h !== d.rel ||
                e.getAttribute("href") !==
                  (d.href == null || d.href === "" ? null : d.href) ||
                e.getAttribute("crossorigin") !==
                  (d.crossOrigin == null ? null : d.crossOrigin) ||
                e.getAttribute("title") !== (d.title == null ? null : d.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((h = e.getAttribute("src")),
                (h !== (d.src == null ? null : d.src) ||
                  e.getAttribute("type") !== (d.type == null ? null : d.type) ||
                  e.getAttribute("crossorigin") !==
                    (d.crossOrigin == null ? null : d.crossOrigin)) &&
                  h &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var h = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === h) return e;
      } else return e;
      if (((e = Qn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function DN(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !r) ||
        ((e = Qn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function bf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function LN(e, n) {
    var r = e.ownerDocument;
    if (e.data !== "$?" || r.readyState === "complete") n();
    else {
      var l = function () {
        n(), r.removeEventListener("DOMContentLoaded", l);
      };
      r.addEventListener("DOMContentLoaded", l), (e._reactRetry = l);
    }
  }
  function Qn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var wf = null;
  function ov(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (n === 0) return e;
          n--;
        } else r === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function cv(e, n, r) {
    switch (((n = tc(r)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function ul(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    _u(e);
  }
  var Un = new Map(),
    uv = new Set();
  function nc(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var ka = U.d;
  U.d = { f: UN, r: zN, D: qN, C: PN, L: VN, m: HN, X: FN, S: BN, M: KN };
  function UN() {
    var e = ka.f(),
      n = Zo();
    return e || n;
  }
  function zN(e) {
    var n = mr(e);
    n !== null && n.tag === 5 && n.type === "form" ? Ry(n) : ka.r(e);
  }
  var Yr = typeof document > "u" ? null : document;
  function dv(e, n, r) {
    var l = Yr;
    if (l && typeof n == "string" && n) {
      var d = On(n);
      (d = 'link[rel="' + e + '"][href="' + d + '"]'),
        typeof r == "string" && (d += '[crossorigin="' + r + '"]'),
        uv.has(d) ||
          (uv.add(d),
          (e = { rel: e, crossOrigin: r, href: n }),
          l.querySelector(d) === null &&
            ((n = l.createElement("link")),
            Kt(n, "link", e),
            qt(n),
            l.head.appendChild(n)));
    }
  }
  function qN(e) {
    ka.D(e), dv("dns-prefetch", e, null);
  }
  function PN(e, n) {
    ka.C(e, n), dv("preconnect", e, n);
  }
  function VN(e, n, r) {
    ka.L(e, n, r);
    var l = Yr;
    if (l && e && n) {
      var d = 'link[rel="preload"][as="' + On(n) + '"]';
      n === "image" && r && r.imageSrcSet
        ? ((d += '[imagesrcset="' + On(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == "string" &&
            (d += '[imagesizes="' + On(r.imageSizes) + '"]'))
        : (d += '[href="' + On(e) + '"]');
      var h = d;
      switch (n) {
        case "style":
          h = Ir(e);
          break;
        case "script":
          h = $r(e);
      }
      Un.has(h) ||
        ((e = v(
          {
            rel: "preload",
            href: n === "image" && r && r.imageSrcSet ? void 0 : e,
            as: n,
          },
          r
        )),
        Un.set(h, e),
        l.querySelector(d) !== null ||
          (n === "style" && l.querySelector(dl(h))) ||
          (n === "script" && l.querySelector(fl(h))) ||
          ((n = l.createElement("link")),
          Kt(n, "link", e),
          qt(n),
          l.head.appendChild(n)));
    }
  }
  function HN(e, n) {
    ka.m(e, n);
    var r = Yr;
    if (r && e) {
      var l = n && typeof n.as == "string" ? n.as : "script",
        d =
          'link[rel="modulepreload"][as="' + On(l) + '"][href="' + On(e) + '"]',
        h = d;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = $r(e);
      }
      if (
        !Un.has(h) &&
        ((e = v({ rel: "modulepreload", href: e }, n)),
        Un.set(h, e),
        r.querySelector(d) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(fl(h))) return;
        }
        (l = r.createElement("link")),
          Kt(l, "link", e),
          qt(l),
          r.head.appendChild(l);
      }
    }
  }
  function BN(e, n, r) {
    ka.S(e, n, r);
    var l = Yr;
    if (l && e) {
      var d = pr(l).hoistableStyles,
        h = Ir(e);
      n = n || "default";
      var x = d.get(h);
      if (!x) {
        var w = { loading: 0, preload: null };
        if ((x = l.querySelector(dl(h)))) w.loading = 5;
        else {
          (e = v({ rel: "stylesheet", href: e, "data-precedence": n }, r)),
            (r = Un.get(h)) && Sf(e, r);
          var T = (x = l.createElement("link"));
          qt(T),
            Kt(T, "link", e),
            (T._p = new Promise(function (B, Y) {
              (T.onload = B), (T.onerror = Y);
            })),
            T.addEventListener("load", function () {
              w.loading |= 1;
            }),
            T.addEventListener("error", function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            ac(x, n, l);
        }
        (x = { type: "stylesheet", instance: x, count: 1, state: w }),
          d.set(h, x);
      }
    }
  }
  function FN(e, n) {
    ka.X(e, n);
    var r = Yr;
    if (r && e) {
      var l = pr(r).hoistableScripts,
        d = $r(e),
        h = l.get(d);
      h ||
        ((h = r.querySelector(fl(d))),
        h ||
          ((e = v({ src: e, async: !0 }, n)),
          (n = Un.get(d)) && _f(e, n),
          (h = r.createElement("script")),
          qt(h),
          Kt(h, "link", e),
          r.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        l.set(d, h));
    }
  }
  function KN(e, n) {
    ka.M(e, n);
    var r = Yr;
    if (r && e) {
      var l = pr(r).hoistableScripts,
        d = $r(e),
        h = l.get(d);
      h ||
        ((h = r.querySelector(fl(d))),
        h ||
          ((e = v({ src: e, async: !0, type: "module" }, n)),
          (n = Un.get(d)) && _f(e, n),
          (h = r.createElement("script")),
          qt(h),
          Kt(h, "link", e),
          r.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        l.set(d, h));
    }
  }
  function fv(e, n, r, l) {
    var d = (d = he.current) ? nc(d) : null;
    if (!d) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string"
          ? ((n = Ir(r.href)),
            (r = pr(d).hoistableStyles),
            (l = r.get(n)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              r.set(n, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          r.rel === "stylesheet" &&
          typeof r.href == "string" &&
          typeof r.precedence == "string"
        ) {
          e = Ir(r.href);
          var h = pr(d).hoistableStyles,
            x = h.get(e);
          if (
            (x ||
              ((d = d.ownerDocument || d),
              (x = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(e, x),
              (h = d.querySelector(dl(e))) &&
                !h._p &&
                ((x.instance = h), (x.state.loading = 5)),
              Un.has(e) ||
                ((r = {
                  rel: "preload",
                  as: "style",
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                Un.set(e, r),
                h || QN(d, e, r, x.state))),
            n && l === null)
          )
            throw Error(i(528, ""));
          return x;
        }
        if (n && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (n = r.async),
          (r = r.src),
          typeof r == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = $r(r)),
              (r = pr(d).hoistableScripts),
              (l = r.get(n)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(n, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Ir(e) {
    return 'href="' + On(e) + '"';
  }
  function dl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function hv(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function QN(e, n, r, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (l.loading = 1)
      : ((n = e.createElement("link")),
        (l.preload = n),
        n.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        Kt(n, "link", r),
        qt(n),
        e.head.appendChild(n));
  }
  function $r(e) {
    return '[src="' + On(e) + '"]';
  }
  function fl(e) {
    return "script[async]" + e;
  }
  function mv(e, n, r) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + On(r.href) + '"]');
          if (l) return (n.instance = l), qt(l), l;
          var d = v({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            qt(l),
            Kt(l, "style", d),
            ac(l, r.precedence, e),
            (n.instance = l)
          );
        case "stylesheet":
          d = Ir(r.href);
          var h = e.querySelector(dl(d));
          if (h) return (n.state.loading |= 4), (n.instance = h), qt(h), h;
          (l = hv(r)),
            (d = Un.get(d)) && Sf(l, d),
            (h = (e.ownerDocument || e).createElement("link")),
            qt(h);
          var x = h;
          return (
            (x._p = new Promise(function (w, T) {
              (x.onload = w), (x.onerror = T);
            })),
            Kt(h, "link", l),
            (n.state.loading |= 4),
            ac(h, r.precedence, e),
            (n.instance = h)
          );
        case "script":
          return (
            (h = $r(r.src)),
            (d = e.querySelector(fl(h)))
              ? ((n.instance = d), qt(d), d)
              : ((l = r),
                (d = Un.get(h)) && ((l = v({}, r)), _f(l, d)),
                (e = e.ownerDocument || e),
                (d = e.createElement("script")),
                qt(d),
                Kt(d, "link", l),
                e.head.appendChild(d),
                (n.instance = d))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((l = n.instance), (n.state.loading |= 4), ac(l, r.precedence, e));
    return n.instance;
  }
  function ac(e, n, r) {
    for (
      var l = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        d = l.length ? l[l.length - 1] : null,
        h = d,
        x = 0;
      x < l.length;
      x++
    ) {
      var w = l[x];
      if (w.dataset.precedence === n) h = w;
      else if (h !== d) break;
    }
    h
      ? h.parentNode.insertBefore(e, h.nextSibling)
      : ((n = r.nodeType === 9 ? r.head : r), n.insertBefore(e, n.firstChild));
  }
  function Sf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function _f(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var sc = null;
  function pv(e, n, r) {
    if (sc === null) {
      var l = new Map(),
        d = (sc = new Map());
      d.set(r, l);
    } else (d = sc), (l = d.get(r)), l || ((l = new Map()), d.set(r, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), r = r.getElementsByTagName(e), d = 0;
      d < r.length;
      d++
    ) {
      var h = r[d];
      if (
        !(
          h[Ci] ||
          h[Gt] ||
          (e === "link" && h.getAttribute("rel") === "stylesheet")
        ) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var x = h.getAttribute(n) || "";
        x = e + x;
        var w = l.get(x);
        w ? w.push(h) : l.set(x, [h]);
      }
    }
    return l;
  }
  function yv(e, n, r) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        r,
        n === "title" ? e.querySelector("head > title") : null
      );
  }
  function GN(e, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        return n.rel === "stylesheet"
          ? ((e = n.disabled), typeof n.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function gv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var hl = null;
  function ZN() {}
  function YN(e, n, r) {
    if (hl === null) throw Error(i(475));
    var l = hl;
    if (
      n.type === "stylesheet" &&
      (typeof r.media != "string" || matchMedia(r.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var d = Ir(r.href),
          h = e.querySelector(dl(d));
        if (h) {
          (e = h._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = rc.bind(l)), e.then(l, l)),
            (n.state.loading |= 4),
            (n.instance = h),
            qt(h);
          return;
        }
        (h = e.ownerDocument || e),
          (r = hv(r)),
          (d = Un.get(d)) && Sf(r, d),
          (h = h.createElement("link")),
          qt(h);
        var x = h;
        (x._p = new Promise(function (w, T) {
          (x.onload = w), (x.onerror = T);
        })),
          Kt(h, "link", r),
          (n.instance = h);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (l.count++,
          (n = rc.bind(l)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function IN() {
    if (hl === null) throw Error(i(475));
    var e = hl;
    return (
      e.stylesheets && e.count === 0 && Nf(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var r = setTimeout(function () {
              if ((e.stylesheets && Nf(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(r);
              }
            );
          }
        : null
    );
  }
  function rc() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Nf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var ic = null;
  function Nf(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (ic = new Map()),
        n.forEach($N, e),
        (ic = null),
        rc.call(e));
  }
  function $N(e, n) {
    if (!(n.state.loading & 4)) {
      var r = ic.get(e);
      if (r) var l = r.get(null);
      else {
        (r = new Map()), ic.set(e, r);
        for (
          var d = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            h = 0;
          h < d.length;
          h++
        ) {
          var x = d[h];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") &&
            (r.set(x.dataset.precedence, x), (l = x));
        }
        l && r.set(null, l);
      }
      (d = n.instance),
        (x = d.getAttribute("data-precedence")),
        (h = r.get(x) || l),
        h === l && r.set(null, d),
        r.set(x, d),
        this.count++,
        (l = rc.bind(this)),
        d.addEventListener("load", l),
        d.addEventListener("error", l),
        h
          ? h.parentNode.insertBefore(d, h.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(d, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var ml = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0,
  };
  function XN(e, n, r, l, d, h, x, w) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ni(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ni(0)),
      (this.hiddenUpdates = Ni(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = d),
      (this.onCaughtError = h),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map());
  }
  function vv(e, n, r, l, d, h, x, w, T, B, Y, J) {
    return (
      (e = new XN(e, n, r, x, w, T, B, J)),
      (n = 1),
      h === !0 && (n |= 24),
      (h = un(3, null, null, n)),
      (e.current = h),
      (h.stateNode = e),
      (n = sd()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (h.memoizedState = { element: l, isDehydrated: r, cache: n }),
      od(h),
      e
    );
  }
  function xv(e) {
    return e ? ((e = jr), e) : jr;
  }
  function bv(e, n, r, l, d, h) {
    (d = xv(d)),
      l.context === null ? (l.context = d) : (l.pendingContext = d),
      (l = Ya(n)),
      (l.payload = { element: r }),
      (h = h === void 0 ? null : h),
      h !== null && (l.callback = h),
      (r = Ia(e, l, n)),
      r !== null && (pn(r, e, n), Ki(r, e, n));
  }
  function wv(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function Cf(e, n) {
    wv(e, n), (e = e.alternate) && wv(e, n);
  }
  function Sv(e) {
    if (e.tag === 13) {
      var n = Er(e, 67108864);
      n !== null && pn(n, e, 67108864), Cf(e, 67108864);
    }
  }
  var lc = !0;
  function WN(e, n, r, l) {
    var d = L.T;
    L.T = null;
    var h = U.p;
    try {
      (U.p = 2), Ef(e, n, r, l);
    } finally {
      (U.p = h), (L.T = d);
    }
  }
  function JN(e, n, r, l) {
    var d = L.T;
    L.T = null;
    var h = U.p;
    try {
      (U.p = 8), Ef(e, n, r, l);
    } finally {
      (U.p = h), (L.T = d);
    }
  }
  function Ef(e, n, r, l) {
    if (lc) {
      var d = jf(l);
      if (d === null) hf(e, n, l, oc, r), Nv(e, l);
      else if (tC(d, e, n, r, l)) l.stopPropagation();
      else if ((Nv(e, l), n & 4 && -1 < eC.indexOf(e))) {
        for (; d !== null; ) {
          var h = mr(d);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var x = xt(h.pendingLanes);
                  if (x !== 0) {
                    var w = h;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; x; ) {
                      var T = 1 << (31 - ne(x));
                      (w.entanglements[1] |= T), (x &= ~T);
                    }
                    oa(h), (at & 6) === 0 && ((Qo = Qt() + 500), ll(0));
                  }
                }
                break;
              case 13:
                (w = Er(h, 2)), w !== null && pn(w, h, 2), Zo(), Cf(h, 2);
            }
          if (((h = jf(l)), h === null && hf(e, n, l, oc, r), h === d)) break;
          d = h;
        }
        d !== null && l.stopPropagation();
      } else hf(e, n, l, null, r);
    }
  }
  function jf(e) {
    return (e = Au(e)), Tf(e);
  }
  var oc = null;
  function Tf(e) {
    if (((oc = null), (e = hr(e)), e !== null)) {
      var n = c(e);
      if (n === null) e = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (((e = f(n)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (oc = e), null;
  }
  function _v(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (eo()) {
          case bi:
            return 2;
          case to:
            return 8;
          case ur:
          case Hm:
            return 32;
          case wi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Of = !1,
    os = null,
    cs = null,
    us = null,
    pl = new Map(),
    yl = new Map(),
    ds = [],
    eC =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Nv(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        os = null;
        break;
      case "dragenter":
      case "dragleave":
        cs = null;
        break;
      case "mouseover":
      case "mouseout":
        us = null;
        break;
      case "pointerover":
      case "pointerout":
        pl.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(n.pointerId);
    }
  }
  function gl(e, n, r, l, d, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: n,
          domEventName: r,
          eventSystemFlags: l,
          nativeEvent: h,
          targetContainers: [d],
        }),
        n !== null && ((n = mr(n)), n !== null && Sv(n)),
        e)
      : ((e.eventSystemFlags |= l),
        (n = e.targetContainers),
        d !== null && n.indexOf(d) === -1 && n.push(d),
        e);
  }
  function tC(e, n, r, l, d) {
    switch (n) {
      case "focusin":
        return (os = gl(os, e, n, r, l, d)), !0;
      case "dragenter":
        return (cs = gl(cs, e, n, r, l, d)), !0;
      case "mouseover":
        return (us = gl(us, e, n, r, l, d)), !0;
      case "pointerover":
        var h = d.pointerId;
        return pl.set(h, gl(pl.get(h) || null, e, n, r, l, d)), !0;
      case "gotpointercapture":
        return (
          (h = d.pointerId), yl.set(h, gl(yl.get(h) || null, e, n, r, l, d)), !0
        );
    }
    return !1;
  }
  function Cv(e) {
    var n = hr(e.target);
    if (n !== null) {
      var r = c(n);
      if (r !== null) {
        if (((n = r.tag), n === 13)) {
          if (((n = f(r)), n !== null)) {
            (e.blockedOn = n),
              YS(e.priority, function () {
                if (r.tag === 13) {
                  var l = mn();
                  l = bu(l);
                  var d = Er(r, l);
                  d !== null && pn(d, r, l), Cf(r, l);
                }
              });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function cc(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = jf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        (Ru = l), r.target.dispatchEvent(l), (Ru = null);
      } else return (n = mr(r)), n !== null && Sv(n), (e.blockedOn = r), !1;
      n.shift();
    }
    return !0;
  }
  function Ev(e, n, r) {
    cc(e) && r.delete(n);
  }
  function nC() {
    (Of = !1),
      os !== null && cc(os) && (os = null),
      cs !== null && cc(cs) && (cs = null),
      us !== null && cc(us) && (us = null),
      pl.forEach(Ev),
      yl.forEach(Ev);
  }
  function uc(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Of ||
        ((Of = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, nC)));
  }
  var dc = null;
  function jv(e) {
    dc !== e &&
      ((dc = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        dc === e && (dc = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n],
            l = e[n + 1],
            d = e[n + 2];
          if (typeof l != "function") {
            if (Tf(l || r) === null) continue;
            break;
          }
          var h = mr(r);
          h !== null &&
            (e.splice(n, 3),
            (n -= 3),
            jd(h, { pending: !0, data: d, method: r.method, action: l }, l, d));
        }
      }));
  }
  function vl(e) {
    function n(T) {
      return uc(T, e);
    }
    os !== null && uc(os, e),
      cs !== null && uc(cs, e),
      us !== null && uc(us, e),
      pl.forEach(n),
      yl.forEach(n);
    for (var r = 0; r < ds.length; r++) {
      var l = ds[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ds.length && ((r = ds[0]), r.blockedOn === null); )
      Cv(r), r.blockedOn === null && ds.shift();
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (l = 0; l < r.length; l += 3) {
        var d = r[l],
          h = r[l + 1],
          x = d[nn] || null;
        if (typeof h == "function") x || jv(r);
        else if (x) {
          var w = null;
          if (h && h.hasAttribute("formAction")) {
            if (((d = h), (x = h[nn] || null))) w = x.formAction;
            else if (Tf(d) !== null) continue;
          } else w = x.action;
          typeof w == "function" ? (r[l + 1] = w) : (r.splice(l, 3), (l -= 3)),
            jv(r);
        }
      }
  }
  function Rf(e) {
    this._internalRoot = e;
  }
  (fc.prototype.render = Rf.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(i(409));
      var r = n.current,
        l = mn();
      bv(r, l, e, n, null, null);
    }),
    (fc.prototype.unmount = Rf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          bv(e.current, 2, null, e, null, null), Zo(), (n[fr] = null);
        }
      });
  function fc(e) {
    this._internalRoot = e;
  }
  fc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = Km();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < ds.length && n !== 0 && n < ds[r].priority; r++);
      ds.splice(r, 0, e), r === 0 && Cv(e);
    }
  };
  var Tv = a.version;
  if (Tv !== "19.1.0") throw Error(i(527, Tv, "19.1.0"));
  U.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = p(n)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var aC = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hc.isDisabled && hc.supportsFiber)
      try {
        (K = hc.inject(aC)), (se = hc);
      } catch {}
  }
  return (
    (bl.createRoot = function (e, n) {
      if (!o(e)) throw Error(i(299));
      var r = !1,
        l = "",
        d = Ky,
        h = Qy,
        x = Gy,
        w = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (d = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (w = n.unstable_transitionCallbacks)),
        (n = vv(e, 1, !1, null, null, r, l, d, h, x, w, null)),
        (e[fr] = n.current),
        ff(e),
        new Rf(n)
      );
    }),
    (bl.hydrateRoot = function (e, n, r) {
      if (!o(e)) throw Error(i(299));
      var l = !1,
        d = "",
        h = Ky,
        x = Qy,
        w = Gy,
        T = null,
        B = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (l = !0),
          r.identifierPrefix !== void 0 && (d = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (h = r.onUncaughtError),
          r.onCaughtError !== void 0 && (x = r.onCaughtError),
          r.onRecoverableError !== void 0 && (w = r.onRecoverableError),
          r.unstable_transitionCallbacks !== void 0 &&
            (T = r.unstable_transitionCallbacks),
          r.formState !== void 0 && (B = r.formState)),
        (n = vv(e, 1, !0, n, r ?? null, l, d, h, x, w, T, B)),
        (n.context = xv(null)),
        (r = n.current),
        (l = mn()),
        (l = bu(l)),
        (d = Ya(l)),
        (d.callback = null),
        Ia(r, d, l),
        (r = l),
        (n.current.lanes = r),
        Fa(n, r),
        oa(n),
        (e[fr] = n.current),
        ff(e),
        new fc(n)
      );
    }),
    (bl.version = "19.1.0"),
    bl
  );
}
var qv;
function hC() {
  if (qv) return kf.exports;
  qv = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return t(), (kf.exports = fC()), kf.exports;
}
var mC = hC();
function pC(t, a) {
  if (t instanceof RegExp) return { keys: !1, pattern: t };
  var s,
    i,
    o,
    c,
    f = [],
    m = "",
    p = t.split("/");
  for (p[0] || p.shift(); (o = p.shift()); )
    (s = o[0]),
      s === "*"
        ? (f.push(s), (m += o[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : s === ":"
        ? ((i = o.indexOf("?", 1)),
          (c = o.indexOf(".", 1)),
          f.push(o.substring(1, ~i ? i : ~c ? c : o.length)),
          (m += ~i && !~c ? "(?:/([^/]+?))?" : "/([^/]+?)"),
          ~c && (m += (~i ? "?" : "") + "\\" + o.substring(c)))
        : (m += "/" + o);
  return {
    keys: f,
    pattern: new RegExp("^" + m + (a ? "(?=$|/)" : "/?$"), "i"),
  };
}
var g = Ic();
const je = Nb(g),
  $c = rC({ __proto__: null, default: je }, [g]);
var zf = { exports: {} },
  qf = {};
var Pv;
function yC() {
  if (Pv) return qf;
  Pv = 1;
  var t = Ic();
  function a(b, _) {
    return (b === _ && (b !== 0 || 1 / b === 1 / _)) || (b !== b && _ !== _);
  }
  var s = typeof Object.is == "function" ? Object.is : a,
    i = t.useState,
    o = t.useEffect,
    c = t.useLayoutEffect,
    f = t.useDebugValue;
  function m(b, _) {
    var N = _(),
      j = i({ inst: { value: N, getSnapshot: _ } }),
      S = j[0].inst,
      C = j[1];
    return (
      c(
        function () {
          (S.value = N), (S.getSnapshot = _), p(S) && C({ inst: S });
        },
        [b, N, _]
      ),
      o(
        function () {
          return (
            p(S) && C({ inst: S }),
            b(function () {
              p(S) && C({ inst: S });
            })
          );
        },
        [b]
      ),
      f(N),
      N
    );
  }
  function p(b) {
    var _ = b.getSnapshot;
    b = b.value;
    try {
      var N = _();
      return !s(b, N);
    } catch {
      return !0;
    }
  }
  function y(b, _) {
    return _();
  }
  var v =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? y
      : m;
  return (
    (qf.useSyncExternalStore =
      t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : v),
    qf
  );
}
var Vv;
function gC() {
  return Vv || ((Vv = 1), (zf.exports = yC())), zf.exports;
}
var Eb = gC();
const vC = $c.useInsertionEffect,
  xC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  jb = xC ? g.useLayoutEffect : g.useEffect,
  bC = vC || jb,
  zh = (t) => {
    const a = g.useRef([t, (...s) => a[0](...s)]).current;
    return (
      bC(() => {
        a[0] = t;
      }),
      a[1]
    );
  },
  wC = "popstate",
  qh = "pushState",
  Ph = "replaceState",
  SC = "hashchange",
  Hv = [wC, qh, Ph, SC],
  _C = (t) => {
    for (const a of Hv) addEventListener(a, t);
    return () => {
      for (const a of Hv) removeEventListener(a, t);
    };
  },
  Tb = (t, a) => Eb.useSyncExternalStore(_C, t, a),
  Bv = () => location.search,
  NC = ({ ssrSearch: t } = {}) => Tb(Bv, t != null ? () => t : Bv),
  Fv = () => location.pathname,
  CC = ({ ssrPath: t } = {}) => Tb(Fv, t != null ? () => t : Fv),
  EC = (t, { replace: a = !1, state: s = null } = {}) =>
    history[a ? Ph : qh](s, "", t),
  jC = (t = {}) => [CC(t), EC],
  Kv = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Kv] > "u") {
  for (const t of [qh, Ph]) {
    const a = history[t];
    history[t] = function () {
      const s = a.apply(this, arguments),
        i = new Event(t);
      return (i.arguments = arguments), dispatchEvent(i), s;
    };
  }
  Object.defineProperty(window, Kv, { value: !0 });
}
const TC = (t, a) =>
    a.toLowerCase().indexOf(t.toLowerCase())
      ? "~" + a
      : a.slice(t.length) || "/",
  Ob = (t = "") => (t === "/" ? "" : t),
  OC = (t, a) => (t[0] === "~" ? t.slice(1) : Ob(a) + t),
  RC = (t = "", a) => TC(Qv(Ob(t)), Qv(a)),
  Qv = (t) => {
    try {
      return decodeURI(t);
    } catch {
      return t;
    }
  },
  Rb = {
    hook: jC,
    searchHook: NC,
    parser: pC,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (t) => t,
    aroundNav: (t, a, s) => t(a, s),
  },
  Ab = g.createContext(Rb),
  hi = () => g.useContext(Ab),
  kb = {},
  Mb = g.createContext(kb),
  AC = () => g.useContext(Mb),
  Kl = (t) => {
    const [a, s] = t.hook(t);
    return [RC(t.base, a), zh((i, o) => t.aroundNav(s, OC(i, t.base), o))];
  },
  Xc = () => Kl(hi()),
  Db = (t, a, s, i) => {
    const { pattern: o, keys: c } =
        a instanceof RegExp ? { keys: !1, pattern: a } : t(a || "*", i),
      f = o.exec(s) || [],
      [m, ...p] = f;
    return m !== void 0
      ? [
          !0,
          (() => {
            const y =
              c !== !1
                ? Object.fromEntries(c.map((b, _) => [b, p[_]]))
                : f.groups;
            let v = { ...p };
            return y && Object.assign(v, y), v;
          })(),
          ...(i ? [m] : []),
        ]
      : [!1, null];
  },
  Lb = ({ children: t, ...a }) => {
    const s = hi(),
      i = a.hook ? Rb : s;
    let o = i;
    const [c, f = a.ssrSearch ?? ""] = a.ssrPath?.split("?") ?? [];
    c && ((a.ssrSearch = f), (a.ssrPath = c)),
      (a.hrefs = a.hrefs ?? a.hook?.hrefs),
      (a.searchHook = a.searchHook ?? a.hook?.searchHook);
    let m = g.useRef({}),
      p = m.current,
      y = p;
    for (let v in i) {
      const b = v === "base" ? i[v] + (a[v] ?? "") : a[v] ?? i[v];
      p === y && b !== y[v] && (m.current = y = { ...y }),
        (y[v] = b),
        (b !== i[v] || b !== o[v]) && (o = y);
    }
    return g.createElement(Ab.Provider, { value: o, children: t });
  },
  Gv = ({ children: t, component: a }, s) =>
    a ? g.createElement(a, { params: s }) : typeof t == "function" ? t(s) : t,
  kC = (t) => {
    let a = g.useRef(kb);
    const s = a.current;
    return (a.current =
      Object.keys(t).length !== Object.keys(s).length ||
      Object.entries(t).some(([i, o]) => o !== s[i])
        ? t
        : s);
  },
  on = ({ path: t, nest: a, match: s, ...i }) => {
    const o = hi(),
      [c] = Kl(o),
      [f, m, p] = s ?? Db(o.parser, t, c, a),
      y = kC({ ...AC(), ...m });
    if (!f) return null;
    const v = p ? g.createElement(Lb, { base: p }, Gv(i, y)) : Gv(i, y);
    return g.createElement(Mb.Provider, { value: y, children: v });
  },
  Rl = g.forwardRef((t, a) => {
    const s = hi(),
      [i, o] = Kl(s),
      {
        to: c = "",
        href: f = c,
        onClick: m,
        asChild: p,
        children: y,
        className: v,
        replace: b,
        state: _,
        transition: N,
        ...j
      } = t,
      S = zh((A) => {
        A.ctrlKey ||
          A.metaKey ||
          A.altKey ||
          A.shiftKey ||
          A.button !== 0 ||
          (m?.(A), A.defaultPrevented || (A.preventDefault(), o(f, t)));
      }),
      C = s.hrefs(f[0] === "~" ? f.slice(1) : s.base + f, s);
    return p && g.isValidElement(y)
      ? g.cloneElement(y, { onClick: S, href: C })
      : g.createElement("a", {
          ...j,
          onClick: S,
          href: C,
          className: v?.call ? v(i === f) : v,
          children: y,
          ref: a,
        });
  }),
  Ub = (t) =>
    Array.isArray(t)
      ? t.flatMap((a) => Ub(a && a.type === g.Fragment ? a.props.children : a))
      : [t],
  MC = ({ children: t, location: a }) => {
    const s = hi(),
      [i] = Kl(s);
    for (const o of Ub(t)) {
      let c = 0;
      if (
        g.isValidElement(o) &&
        (c = Db(s.parser, o.props.path, a || i, o.props.nest))[0]
      )
        return g.cloneElement(o, { match: c });
    }
    return null;
  },
  Oc = (t) => {
    const { to: a, href: s = a } = t,
      i = hi(),
      [, o] = Kl(i),
      c = zh(() => o(a || s, t)),
      { ssrContext: f } = i;
    return (
      jb(() => {
        c();
      }, []),
      f && (f.redirectTo = a),
      null
    );
  };
var mi = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  DC = class extends mi {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (t) => {
          if (typeof window < "u" && window.addEventListener) {
            const a = () => t();
            return (
              window.addEventListener("visibilitychange", a, !1),
              () => {
                window.removeEventListener("visibilitychange", a);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(t) {
      (this.#n = t),
        this.#t?.(),
        (this.#t = t((a) => {
          typeof a == "boolean" ? this.setFocused(a) : this.onFocus();
        }));
    }
    setFocused(t) {
      this.#e !== t && ((this.#e = t), this.onFocus());
    }
    onFocus() {
      const t = this.isFocused();
      this.listeners.forEach((a) => {
        a(t);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Vh = new DC(),
  LC = {
    setTimeout: (t, a) => setTimeout(t, a),
    clearTimeout: (t) => clearTimeout(t),
    setInterval: (t, a) => setInterval(t, a),
    clearInterval: (t) => clearInterval(t),
  },
  UC = class {
    #e = LC;
    #t = !1;
    setTimeoutProvider(t) {
      this.#e = t;
    }
    setTimeout(t, a) {
      return this.#e.setTimeout(t, a);
    }
    clearTimeout(t) {
      this.#e.clearTimeout(t);
    }
    setInterval(t, a) {
      return this.#e.setInterval(t, a);
    }
    clearInterval(t) {
      this.#e.clearInterval(t);
    }
  },
  Ws = new UC();
function zC(t) {
  setTimeout(t, 0);
}
var qC = typeof window > "u" || "Deno" in globalThis;
function en() {}
function PC(t, a) {
  return typeof t == "function" ? t(a) : t;
}
function sh(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function zb(t, a) {
  return Math.max(t + (a || 0) - Date.now(), 0);
}
function xs(t, a) {
  return typeof t == "function" ? t(a) : t;
}
function yn(t, a) {
  return typeof t == "function" ? t(a) : t;
}
function Zv(t, a) {
  const {
    type: s = "all",
    exact: i,
    fetchStatus: o,
    predicate: c,
    queryKey: f,
    stale: m,
  } = t;
  if (f) {
    if (i) {
      if (a.queryHash !== Hh(f, a.options)) return !1;
    } else if (!Al(a.queryKey, f)) return !1;
  }
  if (s !== "all") {
    const p = a.isActive();
    if ((s === "active" && !p) || (s === "inactive" && p)) return !1;
  }
  return !(
    (typeof m == "boolean" && a.isStale() !== m) ||
    (o && o !== a.state.fetchStatus) ||
    (c && !c(a))
  );
}
function Yv(t, a) {
  const { exact: s, status: i, predicate: o, mutationKey: c } = t;
  if (c) {
    if (!a.options.mutationKey) return !1;
    if (s) {
      if (er(a.options.mutationKey) !== er(c)) return !1;
    } else if (!Al(a.options.mutationKey, c)) return !1;
  }
  return !((i && a.state.status !== i) || (o && !o(a)));
}
function Hh(t, a) {
  return (a?.queryKeyHashFn || er)(t);
}
function er(t) {
  return JSON.stringify(t, (a, s) =>
    rh(s)
      ? Object.keys(s)
          .sort()
          .reduce((i, o) => ((i[o] = s[o]), i), {})
      : s
  );
}
function Al(t, a) {
  return t === a
    ? !0
    : typeof t != typeof a
    ? !1
    : t && a && typeof t == "object" && typeof a == "object"
    ? Object.keys(a).every((s) => Al(t[s], a[s]))
    : !1;
}
var VC = Object.prototype.hasOwnProperty;
function qb(t, a, s = 0) {
  if (t === a) return t;
  if (s > 500) return a;
  const i = Iv(t) && Iv(a);
  if (!i && !(rh(t) && rh(a))) return a;
  const c = (i ? t : Object.keys(t)).length,
    f = i ? a : Object.keys(a),
    m = f.length,
    p = i ? new Array(m) : {};
  let y = 0;
  for (let v = 0; v < m; v++) {
    const b = i ? v : f[v],
      _ = t[b],
      N = a[b];
    if (_ === N) {
      (p[b] = _), (i ? v < c : VC.call(t, b)) && y++;
      continue;
    }
    if (
      _ === null ||
      N === null ||
      typeof _ != "object" ||
      typeof N != "object"
    ) {
      p[b] = N;
      continue;
    }
    const j = qb(_, N, s + 1);
    (p[b] = j), j === _ && y++;
  }
  return c === m && y === c ? t : p;
}
function Rc(t, a) {
  if (!a || Object.keys(t).length !== Object.keys(a).length) return !1;
  for (const s in t) if (t[s] !== a[s]) return !1;
  return !0;
}
function Iv(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function rh(t) {
  if (!$v(t)) return !1;
  const a = t.constructor;
  if (a === void 0) return !0;
  const s = a.prototype;
  return !(
    !$v(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function $v(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function HC(t) {
  return new Promise((a) => {
    Ws.setTimeout(a, t);
  });
}
function ih(t, a, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(t, a)
    : s.structuralSharing !== !1
    ? qb(t, a)
    : a;
}
function BC(t, a, s = 0) {
  const i = [...t, a];
  return s && i.length > s ? i.slice(1) : i;
}
function FC(t, a, s = 0) {
  const i = [a, ...t];
  return s && i.length > s ? i.slice(0, -1) : i;
}
var Bh = Symbol();
function Pb(t, a) {
  return !t.queryFn && a?.initialPromise
    ? () => a.initialPromise
    : !t.queryFn || t.queryFn === Bh
    ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
    : t.queryFn;
}
function Fh(t, a) {
  return typeof t == "function" ? t(...a) : !!t;
}
function KC(t, a, s) {
  let i = !1,
    o;
  return (
    Object.defineProperty(t, "signal", {
      enumerable: !0,
      get: () => (
        (o ??= a()),
        i ||
          ((i = !0),
          o.aborted ? s() : o.addEventListener("abort", s, { once: !0 })),
        o
      ),
    }),
    t
  );
}
var kl = (() => {
  let t = () => qC;
  return {
    isServer() {
      return t();
    },
    setIsServer(a) {
      t = a;
    },
  };
})();
function lh() {
  let t, a;
  const s = new Promise((o, c) => {
    (t = o), (a = c);
  });
  (s.status = "pending"), s.catch(() => {});
  function i(o) {
    Object.assign(s, o), delete s.resolve, delete s.reject;
  }
  return (
    (s.resolve = (o) => {
      i({ status: "fulfilled", value: o }), t(o);
    }),
    (s.reject = (o) => {
      i({ status: "rejected", reason: o }), a(o);
    }),
    s
  );
}
var QC = zC;
function GC() {
  let t = [],
    a = 0,
    s = (m) => {
      m();
    },
    i = (m) => {
      m();
    },
    o = QC;
  const c = (m) => {
      a
        ? t.push(m)
        : o(() => {
            s(m);
          });
    },
    f = () => {
      const m = t;
      (t = []),
        m.length &&
          o(() => {
            i(() => {
              m.forEach((p) => {
                s(p);
              });
            });
          });
    };
  return {
    batch: (m) => {
      let p;
      a++;
      try {
        p = m();
      } finally {
        a--, a || f();
      }
      return p;
    },
    batchCalls:
      (m) =>
      (...p) => {
        c(() => {
          m(...p);
        });
      },
    schedule: c,
    setNotifyFunction: (m) => {
      s = m;
    },
    setBatchNotifyFunction: (m) => {
      i = m;
    },
    setScheduler: (m) => {
      o = m;
    },
  };
}
var zt = GC(),
  ZC = class extends mi {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (t) => {
          if (typeof window < "u" && window.addEventListener) {
            const a = () => t(!0),
              s = () => t(!1);
            return (
              window.addEventListener("online", a, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", a),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(t) {
      (this.#n = t), this.#t?.(), (this.#t = t(this.setOnline.bind(this)));
    }
    setOnline(t) {
      this.#e !== t &&
        ((this.#e = t),
        this.listeners.forEach((s) => {
          s(t);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  Ac = new ZC();
function YC(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Vb(t) {
  return (t ?? "online") === "online" ? Ac.isOnline() : !0;
}
var oh = class extends Error {
  constructor(t) {
    super("CancelledError"),
      (this.revert = t?.revert),
      (this.silent = t?.silent);
  }
};
function Hb(t) {
  let a = !1,
    s = 0,
    i;
  const o = lh(),
    c = () => o.status !== "pending",
    f = (S) => {
      if (!c()) {
        const C = new oh(S);
        _(C), t.onCancel?.(C);
      }
    },
    m = () => {
      a = !0;
    },
    p = () => {
      a = !1;
    },
    y = () =>
      Vh.isFocused() &&
      (t.networkMode === "always" || Ac.isOnline()) &&
      t.canRun(),
    v = () => Vb(t.networkMode) && t.canRun(),
    b = (S) => {
      c() || (i?.(), o.resolve(S));
    },
    _ = (S) => {
      c() || (i?.(), o.reject(S));
    },
    N = () =>
      new Promise((S) => {
        (i = (C) => {
          (c() || y()) && S(C);
        }),
          t.onPause?.();
      }).then(() => {
        (i = void 0), c() || t.onContinue?.();
      }),
    j = () => {
      if (c()) return;
      let S;
      const C = s === 0 ? t.initialPromise : void 0;
      try {
        S = C ?? t.fn();
      } catch (A) {
        S = Promise.reject(A);
      }
      Promise.resolve(S)
        .then(b)
        .catch((A) => {
          if (c()) return;
          const O = t.retry ?? (kl.isServer() ? 0 : 3),
            k = t.retryDelay ?? YC,
            D = typeof k == "function" ? k(s, A) : k,
            q =
              O === !0 ||
              (typeof O == "number" && s < O) ||
              (typeof O == "function" && O(s, A));
          if (a || !q) {
            _(A);
            return;
          }
          s++,
            t.onFail?.(s, A),
            HC(D)
              .then(() => (y() ? void 0 : N()))
              .then(() => {
                a ? _(A) : j();
              });
        });
    };
  return {
    promise: o,
    status: () => o.status,
    cancel: f,
    continue: () => (i?.(), o),
    cancelRetry: m,
    continueRetry: p,
    canStart: v,
    start: () => (v() ? j() : N().then(j), o),
  };
}
var Bb = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      sh(this.gcTime) &&
        (this.#e = Ws.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (kl.isServer() ? 1 / 0 : 300 * 1e3)
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Ws.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function IC(t) {
  return {
    onFetch: (a, s) => {
      const i = a.options,
        o = a.fetchOptions?.meta?.fetchMore?.direction,
        c = a.state.data?.pages || [],
        f = a.state.data?.pageParams || [];
      let m = { pages: [], pageParams: [] },
        p = 0;
      const y = async () => {
        let v = !1;
        const b = (j) => {
            KC(
              j,
              () => a.signal,
              () => (v = !0)
            );
          },
          _ = Pb(a.options, a.fetchOptions),
          N = async (j, S, C) => {
            if (v) return Promise.reject(a.signal.reason);
            if (S == null && j.pages.length) return Promise.resolve(j);
            const O = (() => {
                const X = {
                  client: a.client,
                  queryKey: a.queryKey,
                  pageParam: S,
                  direction: C ? "backward" : "forward",
                  meta: a.options.meta,
                };
                return b(X), X;
              })(),
              k = await _(O),
              { maxPages: D } = a.options,
              q = C ? FC : BC;
            return {
              pages: q(j.pages, k, D),
              pageParams: q(j.pageParams, S, D),
            };
          };
        if (o && c.length) {
          const j = o === "backward",
            S = j ? $C : Xv,
            C = { pages: c, pageParams: f },
            A = S(i, C);
          m = await N(C, A, j);
        } else {
          const j = t ?? c.length;
          do {
            const S = p === 0 ? f[0] ?? i.initialPageParam : Xv(i, m);
            if (p > 0 && S == null) break;
            (m = await N(m, S)), p++;
          } while (p < j);
        }
        return m;
      };
      a.options.persister
        ? (a.fetchFn = () =>
            a.options.persister?.(
              y,
              {
                client: a.client,
                queryKey: a.queryKey,
                meta: a.options.meta,
                signal: a.signal,
              },
              s
            ))
        : (a.fetchFn = y);
    },
  };
}
function Xv(t, { pages: a, pageParams: s }) {
  const i = a.length - 1;
  return a.length > 0 ? t.getNextPageParam(a[i], a, s[i], s) : void 0;
}
function $C(t, { pages: a, pageParams: s }) {
  return a.length > 0 ? t.getPreviousPageParam?.(a[0], a, s[0], s) : void 0;
}
var XC = class extends Bb {
  #e;
  #t;
  #n;
  #a;
  #r;
  #s;
  #l;
  #i;
  constructor(t) {
    super(),
      (this.#i = !1),
      (this.#l = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.#r = t.client),
      (this.#a = this.#r.getQueryCache()),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.#t = Jv(this.options)),
      (this.state = t.state ?? this.#t),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#s?.promise;
  }
  setOptions(t) {
    if (
      ((this.options = { ...this.#l, ...t }),
      t?._type && (this.#e = t._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const a = Jv(this.options);
      a.data !== void 0 &&
        (this.setState(Wv(a.data, a.dataUpdatedAt)), (this.#t = a));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.#a.remove(this);
  }
  setData(t, a) {
    const s = ih(this.state.data, t, this.options);
    return (
      this.#o({
        data: s,
        type: "success",
        dataUpdatedAt: a?.updatedAt,
        manual: a?.manual,
      }),
      s
    );
  }
  setState(t) {
    this.#o({ type: "setState", state: t });
  }
  cancel(t) {
    const a = this.#s?.promise;
    return this.#s?.cancel(t), a ? a.then(en).catch(en) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    this.destroy(), this.setState(this.resetState);
  }
  isActive() {
    return this.observers.some((t) => yn(t.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Bh || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((t) => xs(t.options.staleTime, this) === "static")
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((t) => t.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(t = 0) {
    return this.state.data === void 0
      ? !0
      : t === "static"
      ? !1
      : this.state.isInvalidated
      ? !0
      : !zb(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    this.observers
      .find((a) => a.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#s?.continue();
  }
  onOnline() {
    this.observers
      .find((a) => a.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#s?.continue();
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.#a.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) &&
      ((this.observers = this.observers.filter((a) => a !== t)),
      this.observers.length ||
        (this.#s &&
          (this.#i || this.#u()
            ? this.#s.cancel({ revert: !0 })
            : this.#s.cancelRetry()),
        this.scheduleGc()),
      this.#a.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #u() {
    return (
      this.state.fetchStatus === "paused" && this.state.status === "pending"
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#o({ type: "invalidate" });
  }
  async fetch(t, a) {
    if (this.state.fetchStatus !== "idle" && this.#s?.status() !== "rejected") {
      if (this.state.data !== void 0 && a?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#s) return this.#s.continueRetry(), this.#s.promise;
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const p = this.observers.find((y) => y.options.queryFn);
      p && this.setOptions(p.options);
    }
    const s = new AbortController(),
      i = (p) => {
        Object.defineProperty(p, "signal", {
          enumerable: !0,
          get: () => ((this.#i = !0), s.signal),
        });
      },
      o = () => {
        const p = Pb(this.options, a),
          v = (() => {
            const b = {
              client: this.#r,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return i(b), b;
          })();
        return (
          (this.#i = !1),
          this.options.persister ? this.options.persister(p, v, this) : p(v)
        );
      },
      f = (() => {
        const p = {
          fetchOptions: a,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#r,
          state: this.state,
          fetchFn: o,
        };
        return i(p), p;
      })();
    (this.#e === "infinite"
      ? IC(this.options.pages)
      : this.options.behavior
    )?.onFetch(f, this),
      (this.#n = this.state),
      (this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !== f.fetchOptions?.meta) &&
        this.#o({ type: "fetch", meta: f.fetchOptions?.meta }),
      (this.#s = Hb({
        initialPromise: a?.initialPromise,
        fn: f.fetchFn,
        onCancel: (p) => {
          p instanceof oh &&
            p.revert &&
            this.setState({ ...this.#n, fetchStatus: "idle" }),
            s.abort();
        },
        onFail: (p, y) => {
          this.#o({ type: "failed", failureCount: p, error: y });
        },
        onPause: () => {
          this.#o({ type: "pause" });
        },
        onContinue: () => {
          this.#o({ type: "continue" });
        },
        retry: f.options.retry,
        retryDelay: f.options.retryDelay,
        networkMode: f.options.networkMode,
        canRun: () => !0,
      }));
    try {
      const p = await this.#s.start();
      if (p === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(p),
        this.#a.config.onSuccess?.(p, this),
        this.#a.config.onSettled?.(p, this.state.error, this),
        p
      );
    } catch (p) {
      if (p instanceof oh) {
        if (p.silent) return this.#s.promise;
        if (p.revert) {
          if (this.state.data === void 0) throw p;
          return this.state.data;
        }
      }
      throw (
        (this.#o({ type: "error", error: p }),
        this.#a.config.onError?.(p, this),
        this.#a.config.onSettled?.(this.state.data, p, this),
        p)
      );
    } finally {
      this.scheduleGc();
    }
  }
  #o(t) {
    const a = (s) => {
      switch (t.type) {
        case "failed":
          return {
            ...s,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error,
          };
        case "pause":
          return { ...s, fetchStatus: "paused" };
        case "continue":
          return { ...s, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...s,
            ...Fb(s.data, this.options),
            fetchMeta: t.meta ?? null,
          };
        case "success":
          const i = {
            ...s,
            ...Wv(t.data, t.dataUpdatedAt),
            dataUpdateCount: s.dataUpdateCount + 1,
            ...(!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return (this.#n = t.manual ? i : void 0), i;
        case "error":
          const o = t.error;
          return {
            ...s,
            error: o,
            errorUpdateCount: s.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: s.fetchFailureCount + 1,
            fetchFailureReason: o,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0,
          };
        case "invalidate":
          return { ...s, isInvalidated: !0 };
        case "setState":
          return { ...s, ...t.state };
      }
    };
    (this.state = a(this.state)),
      zt.batch(() => {
        this.observers.forEach((s) => {
          s.onQueryUpdate();
        }),
          this.#a.notify({ query: this, type: "updated", action: t });
      });
  }
};
function Fb(t, a) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Vb(a.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function Wv(t, a) {
  return {
    data: t,
    dataUpdatedAt: a ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Jv(t) {
  const a =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    s = a !== void 0,
    i = s
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: a,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var WC = class extends mi {
  constructor(t, a) {
    super(),
      (this.options = a),
      (this.#e = t),
      (this.#i = null),
      (this.#l = lh()),
      this.bindMethods(),
      this.setOptions(a);
  }
  #e;
  #t = void 0;
  #n = void 0;
  #a = void 0;
  #r;
  #s;
  #l;
  #i;
  #u;
  #o;
  #m;
  #d;
  #f;
  #c;
  #p = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      ex(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#x());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ch(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ch(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    (this.listeners = new Set()),
      this.#b(),
      this.#w(),
      this.#t.removeObserver(this);
  }
  setOptions(t) {
    const a = this.options,
      s = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(t)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != "boolean" &&
        typeof this.options.enabled != "function" &&
        typeof yn(this.options.enabled, this.#t) != "boolean")
    )
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    this.#S(),
      this.#t.setOptions(this.options),
      a._defaulted &&
        !Rc(this.options, a) &&
        this.#e
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this,
          });
    const i = this.hasListeners();
    i && tx(this.#t, s, this.options, a) && this.#h(),
      this.updateResult(),
      i &&
        (this.#t !== s ||
          yn(this.options.enabled, this.#t) !== yn(a.enabled, this.#t) ||
          xs(this.options.staleTime, this.#t) !== xs(a.staleTime, this.#t)) &&
        this.#y();
    const o = this.#g();
    i &&
      (this.#t !== s ||
        yn(this.options.enabled, this.#t) !== yn(a.enabled, this.#t) ||
        o !== this.#c) &&
      this.#v(o);
  }
  getOptimisticResult(t) {
    const a = this.#e.getQueryCache().build(this.#e, t),
      s = this.createResult(a, t);
    return (
      eE(this, s) &&
        ((this.#a = s), (this.#s = this.options), (this.#r = this.#t.state)),
      s
    );
  }
  getCurrentResult() {
    return this.#a;
  }
  trackResult(t, a) {
    return new Proxy(t, {
      get: (s, i) => (
        this.trackProp(i),
        a?.(i),
        i === "promise" &&
          (this.trackProp("data"),
          !this.options.experimental_prefetchInRender &&
            this.#l.status === "pending" &&
            this.#l.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            )),
        Reflect.get(s, i)
      ),
    });
  }
  trackProp(t) {
    this.#p.add(t);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...t } = {}) {
    return this.fetch({ ...t });
  }
  fetchOptimistic(t) {
    const a = this.#e.defaultQueryOptions(t),
      s = this.#e.getQueryCache().build(this.#e, a);
    return s.fetch().then(() => this.createResult(s, a));
  }
  fetch(t) {
    return this.#h({ ...t, cancelRefetch: t.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#a)
    );
  }
  #h(t) {
    this.#S();
    let a = this.#t.fetch(this.options, t);
    return t?.throwOnError || (a = a.catch(en)), a;
  }
  #y() {
    this.#b();
    const t = xs(this.options.staleTime, this.#t);
    if (kl.isServer() || this.#a.isStale || !sh(t)) return;
    const s = zb(this.#a.dataUpdatedAt, t) + 1;
    this.#d = Ws.setTimeout(() => {
      this.#a.isStale || this.updateResult();
    }, s);
  }
  #g() {
    return (
      (typeof this.options.refetchInterval == "function"
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(t) {
    this.#w(),
      (this.#c = t),
      !(
        kl.isServer() ||
        yn(this.options.enabled, this.#t) === !1 ||
        !sh(this.#c) ||
        this.#c === 0
      ) &&
        (this.#f = Ws.setInterval(() => {
          (this.options.refetchIntervalInBackground || Vh.isFocused()) &&
            this.#h();
        }, this.#c));
  }
  #x() {
    this.#y(), this.#v(this.#g());
  }
  #b() {
    this.#d !== void 0 && (Ws.clearTimeout(this.#d), (this.#d = void 0));
  }
  #w() {
    this.#f !== void 0 && (Ws.clearInterval(this.#f), (this.#f = void 0));
  }
  createResult(t, a) {
    const s = this.#t,
      i = this.options,
      o = this.#a,
      c = this.#r,
      f = this.#s,
      p = t !== s ? t.state : this.#n,
      { state: y } = t;
    let v = { ...y },
      b = !1,
      _;
    if (a._optimisticResults) {
      const P = this.hasListeners(),
        G = !P && ex(t, a),
        ue = P && tx(t, s, a, i);
      (G || ue) && (v = { ...v, ...Fb(y.data, t.options) }),
        a._optimisticResults === "isRestoring" && (v.fetchStatus = "idle");
    }
    let { error: N, errorUpdatedAt: j, status: S } = v;
    _ = v.data;
    let C = !1;
    if (a.placeholderData !== void 0 && _ === void 0 && S === "pending") {
      let P;
      o?.isPlaceholderData && a.placeholderData === f?.placeholderData
        ? ((P = o.data), (C = !0))
        : (P =
            typeof a.placeholderData == "function"
              ? a.placeholderData(this.#m?.state.data, this.#m)
              : a.placeholderData),
        P !== void 0 && ((S = "success"), (_ = ih(o?.data, P, a)), (b = !0));
    }
    if (a.select && _ !== void 0 && !C)
      if (o && _ === c?.data && a.select === this.#u) _ = this.#o;
      else
        try {
          (this.#u = a.select),
            (_ = a.select(_)),
            (_ = ih(o?.data, _, a)),
            (this.#o = _),
            (this.#i = null);
        } catch (P) {
          this.#i = P;
        }
    this.#i && ((N = this.#i), (_ = this.#o), (j = Date.now()), (S = "error"));
    const A = v.fetchStatus === "fetching",
      O = S === "pending",
      k = S === "error",
      D = O && A,
      q = _ !== void 0,
      Z = {
        status: S,
        fetchStatus: v.fetchStatus,
        isPending: O,
        isSuccess: S === "success",
        isError: k,
        isInitialLoading: D,
        isLoading: D,
        data: _,
        dataUpdatedAt: v.dataUpdatedAt,
        error: N,
        errorUpdatedAt: j,
        failureCount: v.fetchFailureCount,
        failureReason: v.fetchFailureReason,
        errorUpdateCount: v.errorUpdateCount,
        isFetched: t.isFetched(),
        isFetchedAfterMount:
          v.dataUpdateCount > p.dataUpdateCount ||
          v.errorUpdateCount > p.errorUpdateCount,
        isFetching: A,
        isRefetching: A && !O,
        isLoadingError: k && !q,
        isPaused: v.fetchStatus === "paused",
        isPlaceholderData: b,
        isRefetchError: k && q,
        isStale: Kh(t, a),
        refetch: this.refetch,
        promise: this.#l,
        isEnabled: yn(a.enabled, t) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      const P = Z.data !== void 0,
        G = Z.status === "error" && !P,
        ue = (oe) => {
          G ? oe.reject(Z.error) : P && oe.resolve(Z.data);
        },
        ve = () => {
          const oe = (this.#l = Z.promise = lh());
          ue(oe);
        },
        te = this.#l;
      switch (te.status) {
        case "pending":
          t.queryHash === s.queryHash && ue(te);
          break;
        case "fulfilled":
          (G || Z.data !== te.value) && ve();
          break;
        case "rejected":
          (!G || Z.error !== te.reason) && ve();
          break;
      }
    }
    return Z;
  }
  updateResult() {
    const t = this.#a,
      a = this.createResult(this.#t, this.options);
    if (
      ((this.#r = this.#t.state),
      (this.#s = this.options),
      this.#r.data !== void 0 && (this.#m = this.#t),
      Rc(a, t))
    )
      return;
    this.#a = a;
    const s = () => {
      if (!t) return !0;
      const { notifyOnChangeProps: i } = this.options,
        o = typeof i == "function" ? i() : i;
      if (o === "all" || (!o && !this.#p.size)) return !0;
      const c = new Set(o ?? this.#p);
      return (
        this.options.throwOnError && c.add("error"),
        Object.keys(this.#a).some((f) => {
          const m = f;
          return this.#a[m] !== t[m] && c.has(m);
        })
      );
    };
    this.#_({ listeners: s() });
  }
  #S() {
    const t = this.#e.getQueryCache().build(this.#e, this.options);
    if (t === this.#t) return;
    const a = this.#t;
    (this.#t = t),
      (this.#n = t.state),
      this.hasListeners() && (a?.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && this.#x();
  }
  #_(t) {
    zt.batch(() => {
      t.listeners &&
        this.listeners.forEach((a) => {
          a(this.#a);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: "observerResultsUpdated" });
    });
  }
};
function JC(t, a) {
  return (
    yn(a.enabled, t) !== !1 &&
    t.state.data === void 0 &&
    !(t.state.status === "error" && yn(a.retryOnMount, t) === !1)
  );
}
function ex(t, a) {
  return JC(t, a) || (t.state.data !== void 0 && ch(t, a, a.refetchOnMount));
}
function ch(t, a, s) {
  if (yn(a.enabled, t) !== !1 && xs(a.staleTime, t) !== "static") {
    const i = typeof s == "function" ? s(t) : s;
    return i === "always" || (i !== !1 && Kh(t, a));
  }
  return !1;
}
function tx(t, a, s, i) {
  return (
    (t !== a || yn(i.enabled, t) === !1) &&
    (!s.suspense || t.state.status !== "error") &&
    Kh(t, s)
  );
}
function Kh(t, a) {
  return yn(a.enabled, t) !== !1 && t.isStaleByTime(xs(a.staleTime, t));
}
function eE(t, a) {
  return !Rc(t.getCurrentResult(), a);
}
var tE = class extends Bb {
  #e;
  #t;
  #n;
  #a;
  constructor(t) {
    super(),
      (this.#e = t.client),
      (this.mutationId = t.mutationId),
      (this.#n = t.mutationCache),
      (this.#t = []),
      (this.state = t.state || Kb()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = t), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    this.#t.includes(t) ||
      (this.#t.push(t),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    (this.#t = this.#t.filter((a) => a !== t)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: t });
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#a?.continue() ?? this.execute(this.state.variables);
  }
  async execute(t) {
    const a = () => {
        this.#r({ type: "continue" });
      },
      s = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#a = Hb({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(t, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (c, f) => {
        this.#r({ type: "failed", failureCount: c, error: f });
      },
      onPause: () => {
        this.#r({ type: "pause" });
      },
      onContinue: a,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const i = this.state.status === "pending",
      o = !this.#a.canStart();
    try {
      if (i) a();
      else {
        this.#r({ type: "pending", variables: t, isPaused: o }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(t, this, s));
        const f = await this.options.onMutate?.(t, s);
        f !== this.state.context &&
          this.#r({ type: "pending", context: f, variables: t, isPaused: o });
      }
      const c = await this.#a.start();
      return (
        await this.#n.config.onSuccess?.(c, t, this.state.context, this, s),
        await this.options.onSuccess?.(c, t, this.state.context, s),
        await this.#n.config.onSettled?.(
          c,
          null,
          this.state.variables,
          this.state.context,
          this,
          s
        ),
        await this.options.onSettled?.(c, null, t, this.state.context, s),
        this.#r({ type: "success", data: c }),
        c
      );
    } catch (c) {
      try {
        await this.#n.config.onError?.(c, t, this.state.context, this, s);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onError?.(c, t, this.state.context, s);
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          c,
          this.state.variables,
          this.state.context,
          this,
          s
        );
      } catch (f) {
        Promise.reject(f);
      }
      try {
        await this.options.onSettled?.(void 0, c, t, this.state.context, s);
      } catch (f) {
        Promise.reject(f);
      }
      throw (this.#r({ type: "error", error: c }), c);
    } finally {
      this.#n.runNext(this);
    }
  }
  #r(t) {
    const a = (s) => {
      switch (t.type) {
        case "failed":
          return { ...s, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: t.isPaused,
            status: "pending",
            variables: t.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: t.error,
            failureCount: s.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = a(this.state)),
      zt.batch(() => {
        this.#t.forEach((s) => {
          s.onMutationUpdate(t);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: t });
      });
  }
};
function Kb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var nE = class extends mi {
  constructor(t = {}) {
    super(),
      (this.config = t),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(t, a, s) {
    const i = new tE({
      client: t,
      mutationCache: this,
      mutationId: ++this.#n,
      options: t.defaultMutationOptions(a),
      state: s,
    });
    return this.add(i), i;
  }
  add(t) {
    this.#e.add(t);
    const a = mc(t);
    if (typeof a == "string") {
      const s = this.#t.get(a);
      s ? s.push(t) : this.#t.set(a, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (this.#e.delete(t)) {
      const a = mc(t);
      if (typeof a == "string") {
        const s = this.#t.get(a);
        if (s)
          if (s.length > 1) {
            const i = s.indexOf(t);
            i !== -1 && s.splice(i, 1);
          } else s[0] === t && this.#t.delete(a);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const a = mc(t);
    if (typeof a == "string") {
      const i = this.#t.get(a)?.find((o) => o.state.status === "pending");
      return !i || i === t;
    } else return !0;
  }
  runNext(t) {
    const a = mc(t);
    return typeof a == "string"
      ? this.#t
          .get(a)
          ?.find((i) => i !== t && i.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    zt.batch(() => {
      this.#e.forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(t) {
    const a = { exact: !0, ...t };
    return this.getAll().find((s) => Yv(a, s));
  }
  findAll(t = {}) {
    return this.getAll().filter((a) => Yv(t, a));
  }
  notify(t) {
    zt.batch(() => {
      this.listeners.forEach((a) => {
        a(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((a) => a.state.isPaused);
    return zt.batch(() => Promise.all(t.map((a) => a.continue().catch(en))));
  }
};
function mc(t) {
  return t.options.scope?.id;
}
var aE = class extends mi {
    #e;
    #t = void 0;
    #n;
    #a;
    constructor(a, s) {
      super(), (this.#e = a), this.setOptions(s), this.bindMethods(), this.#r();
    }
    bindMethods() {
      (this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this));
    }
    setOptions(a) {
      const s = this.options;
      (this.options = this.#e.defaultMutationOptions(a)),
        Rc(this.options, s) ||
          this.#e
            .getMutationCache()
            .notify({
              type: "observerOptionsUpdated",
              mutation: this.#n,
              observer: this,
            }),
        s?.mutationKey &&
        this.options.mutationKey &&
        er(s.mutationKey) !== er(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === "pending" &&
            this.#n.setOptions(this.options);
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(a) {
      this.#r(), this.#s(a);
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      this.#n?.removeObserver(this), (this.#n = void 0), this.#r(), this.#s();
    }
    mutate(a, s) {
      return (
        (this.#a = s),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(a)
      );
    }
    #r() {
      const a = this.#n?.state ?? Kb();
      this.#t = {
        ...a,
        isPending: a.status === "pending",
        isSuccess: a.status === "success",
        isError: a.status === "error",
        isIdle: a.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #s(a) {
      zt.batch(() => {
        if (this.#a && this.hasListeners()) {
          const s = this.#t.variables,
            i = this.#t.context,
            o = {
              client: this.#e,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          if (a?.type === "success") {
            try {
              this.#a.onSuccess?.(a.data, s, i, o);
            } catch (c) {
              Promise.reject(c);
            }
            try {
              this.#a.onSettled?.(a.data, null, s, i, o);
            } catch (c) {
              Promise.reject(c);
            }
          } else if (a?.type === "error") {
            try {
              this.#a.onError?.(a.error, s, i, o);
            } catch (c) {
              Promise.reject(c);
            }
            try {
              this.#a.onSettled?.(void 0, a.error, s, i, o);
            } catch (c) {
              Promise.reject(c);
            }
          }
        }
        this.listeners.forEach((s) => {
          s(this.#t);
        });
      });
    }
  },
  sE = class extends mi {
    constructor(t = {}) {
      super(), (this.config = t), (this.#e = new Map());
    }
    #e;
    build(t, a, s) {
      const i = a.queryKey,
        o = a.queryHash ?? Hh(i, a);
      let c = this.get(o);
      return (
        c ||
          ((c = new XC({
            client: t,
            queryKey: i,
            queryHash: o,
            options: t.defaultQueryOptions(a),
            state: s,
            defaultOptions: t.getQueryDefaults(i),
          })),
          this.add(c)),
        c
      );
    }
    add(t) {
      this.#e.has(t.queryHash) ||
        (this.#e.set(t.queryHash, t), this.notify({ type: "added", query: t }));
    }
    remove(t) {
      const a = this.#e.get(t.queryHash);
      a &&
        (t.destroy(),
        a === t && this.#e.delete(t.queryHash),
        this.notify({ type: "removed", query: t }));
    }
    clear() {
      zt.batch(() => {
        this.getAll().forEach((t) => {
          this.remove(t);
        });
      });
    }
    get(t) {
      return this.#e.get(t);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(t) {
      const a = { exact: !0, ...t };
      return this.getAll().find((s) => Zv(a, s));
    }
    findAll(t = {}) {
      const a = this.getAll();
      return Object.keys(t).length > 0 ? a.filter((s) => Zv(t, s)) : a;
    }
    notify(t) {
      zt.batch(() => {
        this.listeners.forEach((a) => {
          a(t);
        });
      });
    }
    onFocus() {
      zt.batch(() => {
        this.getAll().forEach((t) => {
          t.onFocus();
        });
      });
    }
    onOnline() {
      zt.batch(() => {
        this.getAll().forEach((t) => {
          t.onOnline();
        });
      });
    }
  },
  rE = class {
    #e;
    #t;
    #n;
    #a;
    #r;
    #s;
    #l;
    #i;
    constructor(t = {}) {
      (this.#e = t.queryCache || new sE()),
        (this.#t = t.mutationCache || new nE()),
        (this.#n = t.defaultOptions || {}),
        (this.#a = new Map()),
        (this.#r = new Map()),
        (this.#s = 0);
    }
    mount() {
      this.#s++,
        this.#s === 1 &&
          ((this.#l = Vh.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#i = Ac.subscribe(async (t) => {
            t && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#s--,
        this.#s === 0 &&
          (this.#l?.(), (this.#l = void 0), this.#i?.(), (this.#i = void 0));
    }
    isFetching(t) {
      return this.#e.findAll({ ...t, fetchStatus: "fetching" }).length;
    }
    isMutating(t) {
      return this.#t.findAll({ ...t, status: "pending" }).length;
    }
    getQueryData(t) {
      const a = this.defaultQueryOptions({ queryKey: t });
      return this.#e.get(a.queryHash)?.state.data;
    }
    ensureQueryData(t) {
      const a = this.defaultQueryOptions(t),
        s = this.#e.build(this, a),
        i = s.state.data;
      return i === void 0
        ? this.fetchQuery(t)
        : (t.revalidateIfStale &&
            s.isStaleByTime(xs(a.staleTime, s)) &&
            this.prefetchQuery(a),
          Promise.resolve(i));
    }
    getQueriesData(t) {
      return this.#e.findAll(t).map(({ queryKey: a, state: s }) => {
        const i = s.data;
        return [a, i];
      });
    }
    setQueryData(t, a, s) {
      const i = this.defaultQueryOptions({ queryKey: t }),
        c = this.#e.get(i.queryHash)?.state.data,
        f = PC(a, c);
      if (f !== void 0)
        return this.#e.build(this, i).setData(f, { ...s, manual: !0 });
    }
    setQueriesData(t, a, s) {
      return zt.batch(() =>
        this.#e
          .findAll(t)
          .map(({ queryKey: i }) => [i, this.setQueryData(i, a, s)])
      );
    }
    getQueryState(t) {
      const a = this.defaultQueryOptions({ queryKey: t });
      return this.#e.get(a.queryHash)?.state;
    }
    removeQueries(t) {
      const a = this.#e;
      zt.batch(() => {
        a.findAll(t).forEach((s) => {
          a.remove(s);
        });
      });
    }
    resetQueries(t, a) {
      const s = this.#e;
      return zt.batch(
        () => (
          s.findAll(t).forEach((i) => {
            i.reset();
          }),
          this.refetchQueries({ type: "active", ...t }, a)
        )
      );
    }
    cancelQueries(t, a = {}) {
      const s = { revert: !0, ...a },
        i = zt.batch(() => this.#e.findAll(t).map((o) => o.cancel(s)));
      return Promise.all(i).then(en).catch(en);
    }
    invalidateQueries(t, a = {}) {
      return zt.batch(
        () => (
          this.#e.findAll(t).forEach((s) => {
            s.invalidate();
          }),
          t?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...t, type: t?.refetchType ?? t?.type ?? "active" },
                a
              )
        )
      );
    }
    refetchQueries(t, a = {}) {
      const s = { ...a, cancelRefetch: a.cancelRefetch ?? !0 },
        i = zt.batch(() =>
          this.#e
            .findAll(t)
            .filter((o) => !o.isDisabled() && !o.isStatic())
            .map((o) => {
              let c = o.fetch(void 0, s);
              return (
                s.throwOnError || (c = c.catch(en)),
                o.state.fetchStatus === "paused" ? Promise.resolve() : c
              );
            })
        );
      return Promise.all(i).then(en);
    }
    fetchQuery(t) {
      const a = this.defaultQueryOptions(t);
      a.retry === void 0 && (a.retry = !1);
      const s = this.#e.build(this, a);
      return s.isStaleByTime(xs(a.staleTime, s))
        ? s.fetch(a)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(t) {
      return this.fetchQuery(t).then(en).catch(en);
    }
    fetchInfiniteQuery(t) {
      return (t._type = "infinite"), this.fetchQuery(t);
    }
    prefetchInfiniteQuery(t) {
      return this.fetchInfiniteQuery(t).then(en).catch(en);
    }
    ensureInfiniteQueryData(t) {
      return (t._type = "infinite"), this.ensureQueryData(t);
    }
    resumePausedMutations() {
      return Ac.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(t) {
      this.#n = t;
    }
    setQueryDefaults(t, a) {
      this.#a.set(er(t), { queryKey: t, defaultOptions: a });
    }
    getQueryDefaults(t) {
      const a = [...this.#a.values()],
        s = {};
      return (
        a.forEach((i) => {
          Al(t, i.queryKey) && Object.assign(s, i.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(t, a) {
      this.#r.set(er(t), { mutationKey: t, defaultOptions: a });
    }
    getMutationDefaults(t) {
      const a = [...this.#r.values()],
        s = {};
      return (
        a.forEach((i) => {
          Al(t, i.mutationKey) && Object.assign(s, i.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(t) {
      if (t._defaulted) return t;
      const a = {
        ...this.#n.queries,
        ...this.getQueryDefaults(t.queryKey),
        ...t,
        _defaulted: !0,
      };
      return (
        a.queryHash || (a.queryHash = Hh(a.queryKey, a)),
        a.refetchOnReconnect === void 0 &&
          (a.refetchOnReconnect = a.networkMode !== "always"),
        a.throwOnError === void 0 && (a.throwOnError = !!a.suspense),
        !a.networkMode && a.persister && (a.networkMode = "offlineFirst"),
        a.queryFn === Bh && (a.enabled = !1),
        a
      );
    }
    defaultMutationOptions(t) {
      return t?._defaulted
        ? t
        : {
            ...this.#n.mutations,
            ...(t?.mutationKey && this.getMutationDefaults(t.mutationKey)),
            ...t,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  Qb = g.createContext(void 0),
  Va = (t) => {
    const a = g.useContext(Qb);
    if (!a)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return a;
  },
  iE = ({ client: t, children: a }) => (
    g.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t]
    ),
    u.jsx(Qb.Provider, { value: t, children: a })
  ),
  Gb = g.createContext(!1),
  lE = () => g.useContext(Gb);
Gb.Provider;
function oE() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t,
  };
}
var cE = g.createContext(oE()),
  uE = () => g.useContext(cE),
  dE = (t, a, s) => {
    const i =
      s?.state.error && typeof t.throwOnError == "function"
        ? Fh(t.throwOnError, [s.state.error, s])
        : t.throwOnError;
    (t.suspense || t.experimental_prefetchInRender || i) &&
      (a.isReset() || (t.retryOnMount = !1));
  },
  fE = (t) => {
    g.useEffect(() => {
      t.clearReset();
    }, [t]);
  },
  hE = ({
    result: t,
    errorResetBoundary: a,
    throwOnError: s,
    query: i,
    suspense: o,
  }) =>
    t.isError &&
    !a.isReset() &&
    !t.isFetching &&
    i &&
    ((o && t.data === void 0) || Fh(s, [t.error, i])),
  mE = (t) => {
    if (t.suspense) {
      const s = (o) => (o === "static" ? o : Math.max(o ?? 1e3, 1e3)),
        i = t.staleTime;
      (t.staleTime = typeof i == "function" ? (...o) => s(i(...o)) : s(i)),
        typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3));
    }
  },
  pE = (t, a) => t.isLoading && t.isFetching && !a,
  yE = (t, a) => t?.suspense && a.isPending,
  nx = (t, a, s) =>
    a.fetchOptimistic(t).catch(() => {
      s.clearReset();
    });
function gE(t, a, s) {
  const i = lE(),
    o = uE(),
    c = Va(),
    f = c.defaultQueryOptions(t);
  c.getDefaultOptions().queries?._experimental_beforeQuery?.(f);
  const m = c.getQueryCache().get(f.queryHash);
  (f._optimisticResults = i ? "isRestoring" : "optimistic"),
    mE(f),
    dE(f, o, m),
    fE(o);
  const p = !c.getQueryCache().get(f.queryHash),
    [y] = g.useState(() => new a(c, f)),
    v = y.getOptimisticResult(f),
    b = !i && t.subscribed !== !1;
  if (
    (g.useSyncExternalStore(
      g.useCallback(
        (_) => {
          const N = b ? y.subscribe(zt.batchCalls(_)) : en;
          return y.updateResult(), N;
        },
        [y, b]
      ),
      () => y.getCurrentResult(),
      () => y.getCurrentResult()
    ),
    g.useEffect(() => {
      y.setOptions(f);
    }, [f, y]),
    yE(f, v))
  )
    throw nx(f, y, o);
  if (
    hE({
      result: v,
      errorResetBoundary: o,
      throwOnError: f.throwOnError,
      query: m,
      suspense: f.suspense,
    })
  )
    throw v.error;
  return (
    c.getDefaultOptions().queries?._experimental_afterQuery?.(f, v),
    f.experimental_prefetchInRender &&
      !kl.isServer() &&
      pE(v, i) &&
      (p ? nx(f, y, o) : m?.promise)?.catch(en).finally(() => {
        y.updateResult();
      }),
    f.notifyOnChangeProps ? v : y.trackResult(v)
  );
}
function na(t, a) {
  return gE(t, WC);
}
function vt(t, a) {
  const s = Va(),
    [i] = g.useState(() => new aE(s, t));
  g.useEffect(() => {
    i.setOptions(t);
  }, [i, t]);
  const o = g.useSyncExternalStore(
      g.useCallback((f) => i.subscribe(zt.batchCalls(f)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult()
    ),
    c = g.useCallback(
      (f, m) => {
        i.mutate(f, m).catch(en);
      },
      [i]
    );
  if (o.error && Fh(i.options.throwOnError, [o.error])) throw o.error;
  return { ...o, mutate: c, mutateAsync: o.mutate };
}
const vE = 1,
  xE = 1e6;
let Pf = 0;
function bE() {
  return (Pf = (Pf + 1) % Number.MAX_SAFE_INTEGER), Pf.toString();
}
const Vf = new Map(),
  ax = (t) => {
    if (Vf.has(t)) return;
    const a = setTimeout(() => {
      Vf.delete(t), jl({ type: "REMOVE_TOAST", toastId: t });
    }, xE);
    Vf.set(t, a);
  },
  wE = (t, a) => {
    switch (a.type) {
      case "ADD_TOAST":
        return { ...t, toasts: [a.toast, ...t.toasts].slice(0, vE) };
      case "UPDATE_TOAST":
        return {
          ...t,
          toasts: t.toasts.map((s) =>
            s.id === a.toast.id ? { ...s, ...a.toast } : s
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: s } = a;
        return (
          s
            ? ax(s)
            : t.toasts.forEach((i) => {
                ax(i.id);
              }),
          {
            ...t,
            toasts: t.toasts.map((i) =>
              i.id === s || s === void 0 ? { ...i, open: !1 } : i
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return a.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((s) => s.id !== a.toastId) };
    }
  },
  Nc = [];
let Cc = { toasts: [] };
function jl(t) {
  (Cc = wE(Cc, t)),
    Nc.forEach((a) => {
      a(Cc);
    });
}
function SE({ ...t }) {
  const a = bE(),
    s = (o) => jl({ type: "UPDATE_TOAST", toast: { ...o, id: a } }),
    i = () => jl({ type: "DISMISS_TOAST", toastId: a });
  return (
    jl({
      type: "ADD_TOAST",
      toast: {
        ...t,
        id: a,
        open: !0,
        onOpenChange: (o) => {
          o || i();
        },
      },
    }),
    { id: a, dismiss: i, update: s }
  );
}
function Hn() {
  const [t, a] = g.useState(Cc);
  return (
    g.useEffect(
      () => (
        Nc.push(a),
        () => {
          const s = Nc.indexOf(a);
          s > -1 && Nc.splice(s, 1);
        }
      ),
      [t]
    ),
    {
      ...t,
      toast: SE,
      dismiss: (s) => jl({ type: "DISMISS_TOAST", toastId: s }),
    }
  );
}
var pi = Cb();
const _E = Nb(pi);
function qe(t, a, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (o) {
    if ((t?.(o), s === !1 || !o.defaultPrevented)) return a?.(o);
  };
}
function sx(t, a) {
  if (typeof t == "function") return t(a);
  t != null && (t.current = a);
}
function Qh(...t) {
  return (a) => {
    let s = !1;
    const i = t.map((o) => {
      const c = sx(o, a);
      return !s && typeof c == "function" && (s = !0), c;
    });
    if (s)
      return () => {
        for (let o = 0; o < i.length; o++) {
          const c = i[o];
          typeof c == "function" ? c() : sx(t[o], null);
        }
      };
  };
}
function ut(...t) {
  return g.useCallback(Qh(...t), t);
}
function NE(t, a) {
  const s = g.createContext(a),
    i = (c) => {
      const { children: f, ...m } = c,
        p = g.useMemo(() => m, Object.values(m));
      return u.jsx(s.Provider, { value: p, children: f });
    };
  i.displayName = t + "Provider";
  function o(c) {
    const f = g.useContext(s);
    if (f) return f;
    if (a !== void 0) return a;
    throw new Error(`\`${c}\` must be used within \`${t}\``);
  }
  return [i, o];
}
function lr(t, a = []) {
  let s = [];
  function i(c, f) {
    const m = g.createContext(f),
      p = s.length;
    s = [...s, f];
    const y = (b) => {
      const { scope: _, children: N, ...j } = b,
        S = _?.[t]?.[p] || m,
        C = g.useMemo(() => j, Object.values(j));
      return u.jsx(S.Provider, { value: C, children: N });
    };
    y.displayName = c + "Provider";
    function v(b, _) {
      const N = _?.[t]?.[p] || m,
        j = g.useContext(N);
      if (j) return j;
      if (f !== void 0) return f;
      throw new Error(`\`${b}\` must be used within \`${c}\``);
    }
    return [y, v];
  }
  const o = () => {
    const c = s.map((f) => g.createContext(f));
    return function (m) {
      const p = m?.[t] || c;
      return g.useMemo(() => ({ [`__scope${t}`]: { ...m, [t]: p } }), [m, p]);
    };
  };
  return (o.scopeName = t), [i, CE(o, ...a)];
}
function CE(...t) {
  const a = t[0];
  if (t.length === 1) return a;
  const s = () => {
    const i = t.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (c) {
      const f = i.reduce((m, { useScope: p, scopeName: y }) => {
        const b = p(c)[`__scope${y}`];
        return { ...m, ...b };
      }, {});
      return g.useMemo(() => ({ [`__scope${a.scopeName}`]: f }), [f]);
    };
  };
  return (s.scopeName = a.scopeName), s;
}
function Ml(t) {
  const a = EE(t),
    s = g.forwardRef((i, o) => {
      const { children: c, ...f } = i,
        m = g.Children.toArray(c),
        p = m.find(TE);
      if (p) {
        const y = p.props.children,
          v = m.map((b) =>
            b === p
              ? g.Children.count(y) > 1
                ? g.Children.only(null)
                : g.isValidElement(y)
                ? y.props.children
                : null
              : b
          );
        return u.jsx(a, {
          ...f,
          ref: o,
          children: g.isValidElement(y) ? g.cloneElement(y, void 0, v) : null,
        });
      }
      return u.jsx(a, { ...f, ref: o, children: c });
    });
  return (s.displayName = `${t}.Slot`), s;
}
function EE(t) {
  const a = g.forwardRef((s, i) => {
    const { children: o, ...c } = s;
    if (g.isValidElement(o)) {
      const f = RE(o),
        m = OE(c, o.props);
      return (
        o.type !== g.Fragment && (m.ref = i ? Qh(i, f) : f),
        g.cloneElement(o, m)
      );
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return (a.displayName = `${t}.SlotClone`), a;
}
var Zb = Symbol("radix.slottable");
function jE(t) {
  const a = ({ children: s }) => u.jsx(u.Fragment, { children: s });
  return (a.displayName = `${t}.Slottable`), (a.__radixId = Zb), a;
}
function TE(t) {
  return (
    g.isValidElement(t) &&
    typeof t.type == "function" &&
    "__radixId" in t.type &&
    t.type.__radixId === Zb
  );
}
function OE(t, a) {
  const s = { ...a };
  for (const i in a) {
    const o = t[i],
      c = a[i];
    /^on[A-Z]/.test(i)
      ? o && c
        ? (s[i] = (...m) => {
            const p = c(...m);
            return o(...m), p;
          })
        : o && (s[i] = o)
      : i === "style"
      ? (s[i] = { ...o, ...c })
      : i === "className" && (s[i] = [o, c].filter(Boolean).join(" "));
  }
  return { ...t, ...s };
}
function RE(t) {
  let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? t.ref
    : ((a = Object.getOwnPropertyDescriptor(t, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? t.props.ref : t.props.ref || t.ref);
}
function Yb(t) {
  const a = t + "CollectionProvider",
    [s, i] = lr(a),
    [o, c] = s(a, { collectionRef: { current: null }, itemMap: new Map() }),
    f = (S) => {
      const { scope: C, children: A } = S,
        O = je.useRef(null),
        k = je.useRef(new Map()).current;
      return u.jsx(o, { scope: C, itemMap: k, collectionRef: O, children: A });
    };
  f.displayName = a;
  const m = t + "CollectionSlot",
    p = Ml(m),
    y = je.forwardRef((S, C) => {
      const { scope: A, children: O } = S,
        k = c(m, A),
        D = ut(C, k.collectionRef);
      return u.jsx(p, { ref: D, children: O });
    });
  y.displayName = m;
  const v = t + "CollectionItemSlot",
    b = "data-radix-collection-item",
    _ = Ml(v),
    N = je.forwardRef((S, C) => {
      const { scope: A, children: O, ...k } = S,
        D = je.useRef(null),
        q = ut(C, D),
        X = c(v, A);
      return (
        je.useEffect(
          () => (
            X.itemMap.set(D, { ref: D, ...k }),
            () => {
              X.itemMap.delete(D);
            }
          )
        ),
        u.jsx(_, { [b]: "", ref: q, children: O })
      );
    });
  N.displayName = v;
  function j(S) {
    const C = c(t + "CollectionConsumer", S);
    return je.useCallback(() => {
      const O = C.collectionRef.current;
      if (!O) return [];
      const k = Array.from(O.querySelectorAll(`[${b}]`));
      return Array.from(C.itemMap.values()).sort(
        (X, Z) => k.indexOf(X.ref.current) - k.indexOf(Z.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return [{ Provider: f, Slot: y, ItemSlot: N }, j, i];
}
var AE = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ye = AE.reduce((t, a) => {
    const s = Ml(`Primitive.${a}`),
      i = g.forwardRef((o, c) => {
        const { asChild: f, ...m } = o,
          p = f ? s : a;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(p, { ...m, ref: c })
        );
      });
    return (i.displayName = `Primitive.${a}`), { ...t, [a]: i };
  }, {});
function Ib(t, a) {
  t && pi.flushSync(() => t.dispatchEvent(a));
}
function Vn(t) {
  const a = g.useRef(t);
  return (
    g.useEffect(() => {
      a.current = t;
    }),
    g.useMemo(
      () =>
        (...s) =>
          a.current?.(...s),
      []
    )
  );
}
function kE(t, a = globalThis?.document) {
  const s = Vn(t);
  g.useEffect(() => {
    const i = (o) => {
      o.key === "Escape" && s(o);
    };
    return (
      a.addEventListener("keydown", i, { capture: !0 }),
      () => a.removeEventListener("keydown", i, { capture: !0 })
    );
  }, [s, a]);
}
var ME = "DismissableLayer",
  uh = "dismissableLayer.update",
  DE = "dismissableLayer.pointerDownOutside",
  LE = "dismissableLayer.focusOutside",
  rx,
  $b = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ql = g.forwardRef((t, a) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: c,
        onInteractOutside: f,
        onDismiss: m,
        ...p
      } = t,
      y = g.useContext($b),
      [v, b] = g.useState(null),
      _ = v?.ownerDocument ?? globalThis?.document,
      [, N] = g.useState({}),
      j = ut(a, (Z) => b(Z)),
      S = Array.from(y.layers),
      [C] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1),
      A = S.indexOf(C),
      O = v ? S.indexOf(v) : -1,
      k = y.layersWithOutsidePointerEventsDisabled.size > 0,
      D = O >= A,
      q = zE((Z) => {
        const P = Z.target,
          G = [...y.branches].some((ue) => ue.contains(P));
        !D || G || (o?.(Z), f?.(Z), Z.defaultPrevented || m?.());
      }, _),
      X = qE((Z) => {
        const P = Z.target;
        [...y.branches].some((ue) => ue.contains(P)) ||
          (c?.(Z), f?.(Z), Z.defaultPrevented || m?.());
      }, _);
    return (
      kE((Z) => {
        O === y.layers.size - 1 &&
          (i?.(Z), !Z.defaultPrevented && m && (Z.preventDefault(), m()));
      }, _),
      g.useEffect(() => {
        if (v)
          return (
            s &&
              (y.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((rx = _.body.style.pointerEvents),
                (_.body.style.pointerEvents = "none")),
              y.layersWithOutsidePointerEventsDisabled.add(v)),
            y.layers.add(v),
            ix(),
            () => {
              s &&
                y.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (_.body.style.pointerEvents = rx);
            }
          );
      }, [v, _, s, y]),
      g.useEffect(
        () => () => {
          v &&
            (y.layers.delete(v),
            y.layersWithOutsidePointerEventsDisabled.delete(v),
            ix());
        },
        [v, y]
      ),
      g.useEffect(() => {
        const Z = () => N({});
        return (
          document.addEventListener(uh, Z),
          () => document.removeEventListener(uh, Z)
        );
      }, []),
      u.jsx(Ye.div, {
        ...p,
        ref: j,
        style: {
          pointerEvents: k ? (D ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: qe(t.onFocusCapture, X.onFocusCapture),
        onBlurCapture: qe(t.onBlurCapture, X.onBlurCapture),
        onPointerDownCapture: qe(
          t.onPointerDownCapture,
          q.onPointerDownCapture
        ),
      })
    );
  });
Ql.displayName = ME;
var UE = "DismissableLayerBranch",
  Xb = g.forwardRef((t, a) => {
    const s = g.useContext($b),
      i = g.useRef(null),
      o = ut(a, i);
    return (
      g.useEffect(() => {
        const c = i.current;
        if (c)
          return (
            s.branches.add(c),
            () => {
              s.branches.delete(c);
            }
          );
      }, [s.branches]),
      u.jsx(Ye.div, { ...t, ref: o })
    );
  });
Xb.displayName = UE;
function zE(t, a = globalThis?.document) {
  const s = Vn(t),
    i = g.useRef(!1),
    o = g.useRef(() => {});
  return (
    g.useEffect(() => {
      const c = (m) => {
          if (m.target && !i.current) {
            let p = function () {
              Wb(DE, s, y, { discrete: !0 });
            };
            const y = { originalEvent: m };
            m.pointerType === "touch"
              ? (a.removeEventListener("click", o.current),
                (o.current = p),
                a.addEventListener("click", o.current, { once: !0 }))
              : p();
          } else a.removeEventListener("click", o.current);
          i.current = !1;
        },
        f = window.setTimeout(() => {
          a.addEventListener("pointerdown", c);
        }, 0);
      return () => {
        window.clearTimeout(f),
          a.removeEventListener("pointerdown", c),
          a.removeEventListener("click", o.current);
      };
    }, [a, s]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function qE(t, a = globalThis?.document) {
  const s = Vn(t),
    i = g.useRef(!1);
  return (
    g.useEffect(() => {
      const o = (c) => {
        c.target &&
          !i.current &&
          Wb(LE, s, { originalEvent: c }, { discrete: !1 });
      };
      return (
        a.addEventListener("focusin", o),
        () => a.removeEventListener("focusin", o)
      );
    }, [a, s]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function ix() {
  const t = new CustomEvent(uh);
  document.dispatchEvent(t);
}
function Wb(t, a, s, { discrete: i }) {
  const o = s.originalEvent.target,
    c = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: s });
  a && o.addEventListener(t, a, { once: !0 }),
    i ? Ib(o, c) : o.dispatchEvent(c);
}
var PE = Ql,
  VE = Xb,
  Mt = globalThis?.document ? g.useLayoutEffect : () => {},
  HE = "Portal",
  Gl = g.forwardRef((t, a) => {
    const { container: s, ...i } = t,
      [o, c] = g.useState(!1);
    Mt(() => c(!0), []);
    const f = s || (o && globalThis?.document?.body);
    return f ? _E.createPortal(u.jsx(Ye.div, { ...i, ref: a }), f) : null;
  });
Gl.displayName = HE;
function BE(t, a) {
  return g.useReducer((s, i) => a[s][i] ?? s, t);
}
var Ts = (t) => {
  const { present: a, children: s } = t,
    i = FE(a),
    o =
      typeof s == "function" ? s({ present: i.isPresent }) : g.Children.only(s),
    c = ut(i.ref, KE(o));
  return typeof s == "function" || i.isPresent
    ? g.cloneElement(o, { ref: c })
    : null;
};
Ts.displayName = "Presence";
function FE(t) {
  const [a, s] = g.useState(),
    i = g.useRef(null),
    o = g.useRef(t),
    c = g.useRef("none"),
    f = t ? "mounted" : "unmounted",
    [m, p] = BE(f, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    g.useEffect(() => {
      const y = pc(i.current);
      c.current = m === "mounted" ? y : "none";
    }, [m]),
    Mt(() => {
      const y = i.current,
        v = o.current;
      if (v !== t) {
        const _ = c.current,
          N = pc(y);
        t
          ? p("MOUNT")
          : N === "none" || y?.display === "none"
          ? p("UNMOUNT")
          : p(v && _ !== N ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = t);
      }
    }, [t, p]),
    Mt(() => {
      if (a) {
        let y;
        const v = a.ownerDocument.defaultView ?? window,
          b = (N) => {
            const S = pc(i.current).includes(CSS.escape(N.animationName));
            if (N.target === a && S && (p("ANIMATION_END"), !o.current)) {
              const C = a.style.animationFillMode;
              (a.style.animationFillMode = "forwards"),
                (y = v.setTimeout(() => {
                  a.style.animationFillMode === "forwards" &&
                    (a.style.animationFillMode = C);
                }));
            }
          },
          _ = (N) => {
            N.target === a && (c.current = pc(i.current));
          };
        return (
          a.addEventListener("animationstart", _),
          a.addEventListener("animationcancel", b),
          a.addEventListener("animationend", b),
          () => {
            v.clearTimeout(y),
              a.removeEventListener("animationstart", _),
              a.removeEventListener("animationcancel", b),
              a.removeEventListener("animationend", b);
          }
        );
      } else p("ANIMATION_END");
    }, [a, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(m),
      ref: g.useCallback((y) => {
        (i.current = y ? getComputedStyle(y) : null), s(y);
      }, []),
    }
  );
}
function pc(t) {
  return t?.animationName || "none";
}
function KE(t) {
  let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? t.ref
    : ((a = Object.getOwnPropertyDescriptor(t, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? t.props.ref : t.props.ref || t.ref);
}
var QE = $c[" useInsertionEffect ".trim().toString()] || Mt;
function Dl({ prop: t, defaultProp: a, onChange: s = () => {}, caller: i }) {
  const [o, c, f] = GE({ defaultProp: a, onChange: s }),
    m = t !== void 0,
    p = m ? t : o;
  {
    const v = g.useRef(t !== void 0);
    g.useEffect(() => {
      const b = v.current;
      b !== m &&
        console.warn(
          `${i} is changing from ${b ? "controlled" : "uncontrolled"} to ${
            m ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (v.current = m);
    }, [m, i]);
  }
  const y = g.useCallback(
    (v) => {
      if (m) {
        const b = ZE(v) ? v(t) : v;
        b !== t && f.current?.(b);
      } else c(v);
    },
    [m, t, c, f]
  );
  return [p, y];
}
function GE({ defaultProp: t, onChange: a }) {
  const [s, i] = g.useState(t),
    o = g.useRef(s),
    c = g.useRef(a);
  return (
    QE(() => {
      c.current = a;
    }, [a]),
    g.useEffect(() => {
      o.current !== s && (c.current?.(s), (o.current = s));
    }, [s, o]),
    [s, i, c]
  );
}
function ZE(t) {
  return typeof t == "function";
}
var Jb = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  YE = "VisuallyHidden",
  Wc = g.forwardRef((t, a) =>
    u.jsx(Ye.span, { ...t, ref: a, style: { ...Jb, ...t.style } })
  );
Wc.displayName = YE;
var IE = Wc,
  Gh = "ToastProvider",
  [Zh, $E, XE] = Yb("Toast"),
  [e0] = lr("Toast", [XE]),
  [WE, Jc] = e0(Gh),
  t0 = (t) => {
    const {
        __scopeToast: a,
        label: s = "Notification",
        duration: i = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: c = 50,
        children: f,
      } = t,
      [m, p] = g.useState(null),
      [y, v] = g.useState(0),
      b = g.useRef(!1),
      _ = g.useRef(!1);
    return (
      s.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Gh}\`. Expected non-empty \`string\`.`
        ),
      u.jsx(Zh.Provider, {
        scope: a,
        children: u.jsx(WE, {
          scope: a,
          label: s,
          duration: i,
          swipeDirection: o,
          swipeThreshold: c,
          toastCount: y,
          viewport: m,
          onViewportChange: p,
          onToastAdd: g.useCallback(() => v((N) => N + 1), []),
          onToastRemove: g.useCallback(() => v((N) => N - 1), []),
          isFocusedToastEscapeKeyDownRef: b,
          isClosePausedRef: _,
          children: f,
        }),
      })
    );
  };
t0.displayName = Gh;
var n0 = "ToastViewport",
  JE = ["F8"],
  dh = "toast.viewportPause",
  fh = "toast.viewportResume",
  a0 = g.forwardRef((t, a) => {
    const {
        __scopeToast: s,
        hotkey: i = JE,
        label: o = "Notifications ({hotkey})",
        ...c
      } = t,
      f = Jc(n0, s),
      m = $E(s),
      p = g.useRef(null),
      y = g.useRef(null),
      v = g.useRef(null),
      b = g.useRef(null),
      _ = ut(a, b, f.onViewportChange),
      N = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      j = f.toastCount > 0;
    g.useEffect(() => {
      const C = (A) => {
        i.length !== 0 &&
          i.every((k) => A[k] || A.code === k) &&
          b.current?.focus();
      };
      return (
        document.addEventListener("keydown", C),
        () => document.removeEventListener("keydown", C)
      );
    }, [i]),
      g.useEffect(() => {
        const C = p.current,
          A = b.current;
        if (j && C && A) {
          const O = () => {
              if (!f.isClosePausedRef.current) {
                const X = new CustomEvent(dh);
                A.dispatchEvent(X), (f.isClosePausedRef.current = !0);
              }
            },
            k = () => {
              if (f.isClosePausedRef.current) {
                const X = new CustomEvent(fh);
                A.dispatchEvent(X), (f.isClosePausedRef.current = !1);
              }
            },
            D = (X) => {
              !C.contains(X.relatedTarget) && k();
            },
            q = () => {
              C.contains(document.activeElement) || k();
            };
          return (
            C.addEventListener("focusin", O),
            C.addEventListener("focusout", D),
            C.addEventListener("pointermove", O),
            C.addEventListener("pointerleave", q),
            window.addEventListener("blur", O),
            window.addEventListener("focus", k),
            () => {
              C.removeEventListener("focusin", O),
                C.removeEventListener("focusout", D),
                C.removeEventListener("pointermove", O),
                C.removeEventListener("pointerleave", q),
                window.removeEventListener("blur", O),
                window.removeEventListener("focus", k);
            }
          );
        }
      }, [j, f.isClosePausedRef]);
    const S = g.useCallback(
      ({ tabbingDirection: C }) => {
        const O = m().map((k) => {
          const D = k.ref.current,
            q = [D, ...fj(D)];
          return C === "forwards" ? q : q.reverse();
        });
        return (C === "forwards" ? O.reverse() : O).flat();
      },
      [m]
    );
    return (
      g.useEffect(() => {
        const C = b.current;
        if (C) {
          const A = (O) => {
            const k = O.altKey || O.ctrlKey || O.metaKey;
            if (O.key === "Tab" && !k) {
              const q = document.activeElement,
                X = O.shiftKey;
              if (O.target === C && X) {
                y.current?.focus();
                return;
              }
              const G = S({ tabbingDirection: X ? "backwards" : "forwards" }),
                ue = G.findIndex((ve) => ve === q);
              Hf(G.slice(ue + 1))
                ? O.preventDefault()
                : X
                ? y.current?.focus()
                : v.current?.focus();
            }
          };
          return (
            C.addEventListener("keydown", A),
            () => C.removeEventListener("keydown", A)
          );
        }
      }, [m, S]),
      u.jsxs(VE, {
        ref: p,
        role: "region",
        "aria-label": o.replace("{hotkey}", N),
        tabIndex: -1,
        style: { pointerEvents: j ? void 0 : "none" },
        children: [
          j &&
            u.jsx(hh, {
              ref: y,
              onFocusFromOutsideViewport: () => {
                const C = S({ tabbingDirection: "forwards" });
                Hf(C);
              },
            }),
          u.jsx(Zh.Slot, {
            scope: s,
            children: u.jsx(Ye.ol, { tabIndex: -1, ...c, ref: _ }),
          }),
          j &&
            u.jsx(hh, {
              ref: v,
              onFocusFromOutsideViewport: () => {
                const C = S({ tabbingDirection: "backwards" });
                Hf(C);
              },
            }),
        ],
      })
    );
  });
a0.displayName = n0;
var s0 = "ToastFocusProxy",
  hh = g.forwardRef((t, a) => {
    const { __scopeToast: s, onFocusFromOutsideViewport: i, ...o } = t,
      c = Jc(s0, s);
    return u.jsx(Wc, {
      tabIndex: 0,
      ...o,
      ref: a,
      style: { position: "fixed" },
      onFocus: (f) => {
        const m = f.relatedTarget;
        !c.viewport?.contains(m) && i();
      },
    });
  });
hh.displayName = s0;
var Zl = "Toast",
  ej = "toast.swipeStart",
  tj = "toast.swipeMove",
  nj = "toast.swipeCancel",
  aj = "toast.swipeEnd",
  r0 = g.forwardRef((t, a) => {
    const { forceMount: s, open: i, defaultOpen: o, onOpenChange: c, ...f } = t,
      [m, p] = Dl({ prop: i, defaultProp: o ?? !0, onChange: c, caller: Zl });
    return u.jsx(Ts, {
      present: s || m,
      children: u.jsx(ij, {
        open: m,
        ...f,
        ref: a,
        onClose: () => p(!1),
        onPause: Vn(t.onPause),
        onResume: Vn(t.onResume),
        onSwipeStart: qe(t.onSwipeStart, (y) => {
          y.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: qe(t.onSwipeMove, (y) => {
          const { x: v, y: b } = y.detail.delta;
          y.currentTarget.setAttribute("data-swipe", "move"),
            y.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${v}px`
            ),
            y.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${b}px`
            );
        }),
        onSwipeCancel: qe(t.onSwipeCancel, (y) => {
          y.currentTarget.setAttribute("data-swipe", "cancel"),
            y.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            y.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            y.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            y.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: qe(t.onSwipeEnd, (y) => {
          const { x: v, y: b } = y.detail.delta;
          y.currentTarget.setAttribute("data-swipe", "end"),
            y.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            y.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            y.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${v}px`
            ),
            y.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${b}px`
            ),
            p(!1);
        }),
      }),
    });
  });
r0.displayName = Zl;
var [sj, rj] = e0(Zl, { onClose() {} }),
  ij = g.forwardRef((t, a) => {
    const {
        __scopeToast: s,
        type: i = "foreground",
        duration: o,
        open: c,
        onClose: f,
        onEscapeKeyDown: m,
        onPause: p,
        onResume: y,
        onSwipeStart: v,
        onSwipeMove: b,
        onSwipeCancel: _,
        onSwipeEnd: N,
        ...j
      } = t,
      S = Jc(Zl, s),
      [C, A] = g.useState(null),
      O = ut(a, (ee) => A(ee)),
      k = g.useRef(null),
      D = g.useRef(null),
      q = o || S.duration,
      X = g.useRef(0),
      Z = g.useRef(q),
      P = g.useRef(0),
      { onToastAdd: G, onToastRemove: ue } = S,
      ve = Vn(() => {
        C?.contains(document.activeElement) && S.viewport?.focus(), f();
      }),
      te = g.useCallback(
        (ee) => {
          !ee ||
            ee === 1 / 0 ||
            (window.clearTimeout(P.current),
            (X.current = new Date().getTime()),
            (P.current = window.setTimeout(ve, ee)));
        },
        [ve]
      );
    g.useEffect(() => {
      const ee = S.viewport;
      if (ee) {
        const de = () => {
            te(Z.current), y?.();
          },
          L = () => {
            const U = new Date().getTime() - X.current;
            (Z.current = Z.current - U), window.clearTimeout(P.current), p?.();
          };
        return (
          ee.addEventListener(dh, L),
          ee.addEventListener(fh, de),
          () => {
            ee.removeEventListener(dh, L), ee.removeEventListener(fh, de);
          }
        );
      }
    }, [S.viewport, q, p, y, te]),
      g.useEffect(() => {
        c && !S.isClosePausedRef.current && te(q);
      }, [c, q, S.isClosePausedRef, te]),
      g.useEffect(() => (G(), () => ue()), [G, ue]);
    const oe = g.useMemo(() => (C ? f0(C) : null), [C]);
    return S.viewport
      ? u.jsxs(u.Fragment, {
          children: [
            oe &&
              u.jsx(lj, {
                __scopeToast: s,
                role: "status",
                "aria-live": i === "foreground" ? "assertive" : "polite",
                children: oe,
              }),
            u.jsx(sj, {
              scope: s,
              onClose: ve,
              children: pi.createPortal(
                u.jsx(Zh.ItemSlot, {
                  scope: s,
                  children: u.jsx(PE, {
                    asChild: !0,
                    onEscapeKeyDown: qe(m, () => {
                      S.isFocusedToastEscapeKeyDownRef.current || ve(),
                        (S.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: u.jsx(Ye.li, {
                      tabIndex: 0,
                      "data-state": c ? "open" : "closed",
                      "data-swipe-direction": S.swipeDirection,
                      ...j,
                      ref: O,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...t.style,
                      },
                      onKeyDown: qe(t.onKeyDown, (ee) => {
                        ee.key === "Escape" &&
                          (m?.(ee.nativeEvent),
                          ee.nativeEvent.defaultPrevented ||
                            ((S.isFocusedToastEscapeKeyDownRef.current = !0),
                            ve()));
                      }),
                      onPointerDown: qe(t.onPointerDown, (ee) => {
                        ee.button === 0 &&
                          (k.current = { x: ee.clientX, y: ee.clientY });
                      }),
                      onPointerMove: qe(t.onPointerMove, (ee) => {
                        if (!k.current) return;
                        const de = ee.clientX - k.current.x,
                          L = ee.clientY - k.current.y,
                          U = !!D.current,
                          W = ["left", "right"].includes(S.swipeDirection),
                          fe = ["left", "up"].includes(S.swipeDirection)
                            ? Math.min
                            : Math.max,
                          E = W ? fe(0, de) : 0,
                          I = W ? 0 : fe(0, L),
                          le = ee.pointerType === "touch" ? 10 : 2,
                          ae = { x: E, y: I },
                          pe = { originalEvent: ee, delta: ae };
                        U
                          ? ((D.current = ae), yc(tj, b, pe, { discrete: !1 }))
                          : lx(ae, S.swipeDirection, le)
                          ? ((D.current = ae),
                            yc(ej, v, pe, { discrete: !1 }),
                            ee.target.setPointerCapture(ee.pointerId))
                          : (Math.abs(de) > le || Math.abs(L) > le) &&
                            (k.current = null);
                      }),
                      onPointerUp: qe(t.onPointerUp, (ee) => {
                        const de = D.current,
                          L = ee.target;
                        if (
                          (L.hasPointerCapture(ee.pointerId) &&
                            L.releasePointerCapture(ee.pointerId),
                          (D.current = null),
                          (k.current = null),
                          de)
                        ) {
                          const U = ee.currentTarget,
                            W = { originalEvent: ee, delta: de };
                          lx(de, S.swipeDirection, S.swipeThreshold)
                            ? yc(aj, N, W, { discrete: !0 })
                            : yc(nj, _, W, { discrete: !0 }),
                            U.addEventListener(
                              "click",
                              (fe) => fe.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                S.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  lj = (t) => {
    const { __scopeToast: a, children: s, ...i } = t,
      o = Jc(Zl, a),
      [c, f] = g.useState(!1),
      [m, p] = g.useState(!1);
    return (
      uj(() => f(!0)),
      g.useEffect(() => {
        const y = window.setTimeout(() => p(!0), 1e3);
        return () => window.clearTimeout(y);
      }, []),
      m
        ? null
        : u.jsx(Gl, {
            asChild: !0,
            children: u.jsx(Wc, {
              ...i,
              children:
                c && u.jsxs(u.Fragment, { children: [o.label, " ", s] }),
            }),
          })
    );
  },
  oj = "ToastTitle",
  i0 = g.forwardRef((t, a) => {
    const { __scopeToast: s, ...i } = t;
    return u.jsx(Ye.div, { ...i, ref: a });
  });
i0.displayName = oj;
var cj = "ToastDescription",
  l0 = g.forwardRef((t, a) => {
    const { __scopeToast: s, ...i } = t;
    return u.jsx(Ye.div, { ...i, ref: a });
  });
l0.displayName = cj;
var o0 = "ToastAction",
  c0 = g.forwardRef((t, a) => {
    const { altText: s, ...i } = t;
    return s.trim()
      ? u.jsx(d0, {
          altText: s,
          asChild: !0,
          children: u.jsx(Yh, { ...i, ref: a }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${o0}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
c0.displayName = o0;
var u0 = "ToastClose",
  Yh = g.forwardRef((t, a) => {
    const { __scopeToast: s, ...i } = t,
      o = rj(u0, s);
    return u.jsx(d0, {
      asChild: !0,
      children: u.jsx(Ye.button, {
        type: "button",
        ...i,
        ref: a,
        onClick: qe(t.onClick, o.onClose),
      }),
    });
  });
Yh.displayName = u0;
var d0 = g.forwardRef((t, a) => {
  const { __scopeToast: s, altText: i, ...o } = t;
  return u.jsx(Ye.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": i || void 0,
    ...o,
    ref: a,
  });
});
function f0(t) {
  const a = [];
  return (
    Array.from(t.childNodes).forEach((i) => {
      if (
        (i.nodeType === i.TEXT_NODE && i.textContent && a.push(i.textContent),
        dj(i))
      ) {
        const o = i.ariaHidden || i.hidden || i.style.display === "none",
          c = i.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (c) {
            const f = i.dataset.radixToastAnnounceAlt;
            f && a.push(f);
          } else a.push(...f0(i));
      }
    }),
    a
  );
}
function yc(t, a, s, { discrete: i }) {
  const o = s.originalEvent.currentTarget,
    c = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: s });
  a && o.addEventListener(t, a, { once: !0 }),
    i ? Ib(o, c) : o.dispatchEvent(c);
}
var lx = (t, a, s = 0) => {
  const i = Math.abs(t.x),
    o = Math.abs(t.y),
    c = i > o;
  return a === "left" || a === "right" ? c && i > s : !c && o > s;
};
function uj(t = () => {}) {
  const a = Vn(t);
  Mt(() => {
    let s = 0,
      i = 0;
    return (
      (s = window.requestAnimationFrame(
        () => (i = window.requestAnimationFrame(a))
      )),
      () => {
        window.cancelAnimationFrame(s), window.cancelAnimationFrame(i);
      }
    );
  }, [a]);
}
function dj(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function fj(t) {
  const a = [],
    s = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const o = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || o
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) a.push(s.currentNode);
  return a;
}
function Hf(t) {
  const a = document.activeElement;
  return t.some((s) =>
    s === a ? !0 : (s.focus(), document.activeElement !== a)
  );
}
var hj = t0,
  h0 = a0,
  m0 = r0,
  p0 = i0,
  y0 = l0,
  g0 = c0,
  v0 = Yh;
function x0(t) {
  var a,
    s,
    i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var o = t.length;
      for (a = 0; a < o; a++)
        t[a] && (s = x0(t[a])) && (i && (i += " "), (i += s));
    } else for (s in t) t[s] && (i && (i += " "), (i += s));
  return i;
}
function b0() {
  for (var t, a, s = 0, i = "", o = arguments.length; s < o; s++)
    (t = arguments[s]) && (a = x0(t)) && (i && (i += " "), (i += a));
  return i;
}
const ox = (t) => (typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t),
  cx = b0,
  eu = (t, a) => (s) => {
    var i;
    if (a?.variants == null) return cx(t, s?.class, s?.className);
    const { variants: o, defaultVariants: c } = a,
      f = Object.keys(o).map((y) => {
        const v = s?.[y],
          b = c?.[y];
        if (v === null) return null;
        const _ = ox(v) || ox(b);
        return o[y][_];
      }),
      m =
        s &&
        Object.entries(s).reduce((y, v) => {
          let [b, _] = v;
          return _ === void 0 || (y[b] = _), y;
        }, {}),
      p =
        a == null || (i = a.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((y, v) => {
              let { class: b, className: _, ...N } = v;
              return Object.entries(N).every((j) => {
                let [S, C] = j;
                return Array.isArray(C)
                  ? C.includes({ ...c, ...m }[S])
                  : { ...c, ...m }[S] === C;
              })
                ? [...y, b, _]
                : y;
            }, []);
    return cx(t, f, p, s?.class, s?.className);
  };
const mj = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  pj = (t) =>
    t.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, s, i) =>
      i ? i.toUpperCase() : s.toLowerCase()
    ),
  ux = (t) => {
    const a = pj(t);
    return a.charAt(0).toUpperCase() + a.slice(1);
  },
  w0 = (...t) =>
    t
      .filter((a, s, i) => !!a && a.trim() !== "" && i.indexOf(a) === s)
      .join(" ")
      .trim(),
  yj = (t) => {
    for (const a in t)
      if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
  };
var gj = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const vj = g.forwardRef(
  (
    {
      color: t = "currentColor",
      size: a = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: i,
      className: o = "",
      children: c,
      iconNode: f,
      ...m
    },
    p
  ) =>
    g.createElement(
      "svg",
      {
        ref: p,
        ...gj,
        width: a,
        height: a,
        stroke: t,
        strokeWidth: i ? (Number(s) * 24) / Number(a) : s,
        className: w0("lucide", o),
        ...(!c && !yj(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...f.map(([y, v]) => g.createElement(y, v)),
        ...(Array.isArray(c) ? c : [c]),
      ]
    )
);
const De = (t, a) => {
  const s = g.forwardRef(({ className: i, ...o }, c) =>
    g.createElement(vj, {
      ref: c,
      iconNode: a,
      className: w0(`lucide-${mj(ux(t))}`, `lucide-${t}`, i),
      ...o,
    })
  );
  return (s.displayName = ux(t)), s;
};
const xj = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  dx = De("activity", xj);
const bj = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
        key: "178tsu",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
    [
      "path",
      {
        d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",
        key: "1hqiys",
      },
    ],
  ],
  wj = De("bell-off", bj);
const Sj = [
    ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
    [
      "path",
      {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi",
      },
    ],
  ],
  Ih = De("bell", Sj);
const _j = [
    ["path", { d: "M10 2v8l3-3 3 3V2", key: "sqw3rj" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
        key: "k3hazp",
      },
    ],
  ],
  ri = De("book-marked", _j);
const Nj = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  Ll = De("book-open", Nj);
const Cj = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  yi = De("calendar", Cj);
const Ej = [
    ["path", { d: "M5 21v-6", key: "1hz6c0" }],
    ["path", { d: "M12 21V3", key: "1lcnhd" }],
    ["path", { d: "M19 21V9", key: "unv183" }],
  ],
  fx = De("chart-no-axes-column", Ej);
const jj = [
    ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
    ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }],
  ],
  Tj = De("check-check", jj);
const Oj = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  S0 = De("check", Oj);
const Rj = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  _0 = De("chevron-down", Rj);
const Aj = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  kj = De("chevron-right", Aj);
const Mj = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  Dj = De("chevron-up", Mj);
const Lj = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  ii = De("circle-alert", Lj);
const Uj = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  $h = De("circle-check", Uj);
const zj = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  qj = De("circle-check-big", zj);
const Pj = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  Xh = De("circle-x", Pj);
const Vj = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]],
  hx = De("circle", Vj);
const Hj = [
    [
      "rect",
      {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6",
      },
    ],
    [
      "path",
      {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196",
      },
    ],
    ["path", { d: "m9 14 2 2 4-4", key: "df797q" }],
  ],
  N0 = De("clipboard-check", Hj);
const Bj = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  Wh = De("clock", Bj);
const Fj = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  mx = De("external-link", Fj);
const Kj = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  Ul = De("eye-off", Kj);
const Qj = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  zl = De("eye", Qj);
const Gj = [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih",
      },
    ],
  ],
  Jh = De("flame", Gj);
const Zj = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  Yj = De("info", Zj);
const Ij = [
    [
      "path",
      {
        d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
        key: "1s6t7t",
      },
    ],
    [
      "circle",
      { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" },
    ],
  ],
  $j = De("key-round", Ij);
const Xj = [
    [
      "rect",
      { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
    ],
    [
      "rect",
      { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
    ],
  ],
  Wj = De("layout-dashboard", Xj);
const Jj = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  em = De("loader-circle", Jj);
const eT = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  tT = De("log-out", eT);
const nT = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  px = De("lock", nT);
const aT = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  C0 = De("mail", aT);
const sT = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  rT = De("menu", sT);
const iT = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  lT = De("moon", iT);
const oT = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
  ],
  tm = De("pen", oT);
const cT = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  tu = De("plus", cT);
const uT = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  nu = De("search", uT);
const dT = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  ql = De("shield-check", dT);
const fT = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  E0 = De("shield", fT);
const hT = [
    [
      "path",
      {
        d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
        key: "2acyp4",
      },
    ],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  Pl = De("square-check-big", hT);
const mT = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  pT = De("sun", mT);
const yT = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  au = De("trash-2", yT);
const gT = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  vT = De("trending-up", gT);
const xT = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
  ],
  bT = De("user-plus", xT);
const wT = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  kc = De("users", wT);
const ST = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  Yl = De("user", ST);
const _T = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  nm = De("x", _T),
  NT = (t, a) => {
    const s = new Array(t.length + a.length);
    for (let i = 0; i < t.length; i++) s[i] = t[i];
    for (let i = 0; i < a.length; i++) s[t.length + i] = a[i];
    return s;
  },
  CT = (t, a) => ({ classGroupId: t, validator: a }),
  j0 = (t = new Map(), a = null, s) => ({
    nextPart: t,
    validators: a,
    classGroupId: s,
  }),
  Mc = "-",
  yx = [],
  ET = "arbitrary..",
  jT = (t) => {
    const a = OT(t),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: i } = t;
    return {
      getClassGroupId: (f) => {
        if (f.startsWith("[") && f.endsWith("]")) return TT(f);
        const m = f.split(Mc),
          p = m[0] === "" && m.length > 1 ? 1 : 0;
        return T0(m, p, a);
      },
      getConflictingClassGroupIds: (f, m) => {
        if (m) {
          const p = i[f],
            y = s[f];
          return p ? (y ? NT(y, p) : p) : y || yx;
        }
        return s[f] || yx;
      },
    };
  },
  T0 = (t, a, s) => {
    if (t.length - a === 0) return s.classGroupId;
    const o = t[a],
      c = s.nextPart.get(o);
    if (c) {
      const y = T0(t, a + 1, c);
      if (y) return y;
    }
    const f = s.validators;
    if (f === null) return;
    const m = a === 0 ? t.join(Mc) : t.slice(a).join(Mc),
      p = f.length;
    for (let y = 0; y < p; y++) {
      const v = f[y];
      if (v.validator(m)) return v.classGroupId;
    }
  },
  TT = (t) =>
    t.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const a = t.slice(1, -1),
            s = a.indexOf(":"),
            i = a.slice(0, s);
          return i ? ET + i : void 0;
        })(),
  OT = (t) => {
    const { theme: a, classGroups: s } = t;
    return RT(s, a);
  },
  RT = (t, a) => {
    const s = j0();
    for (const i in t) {
      const o = t[i];
      am(o, s, i, a);
    }
    return s;
  },
  am = (t, a, s, i) => {
    const o = t.length;
    for (let c = 0; c < o; c++) {
      const f = t[c];
      AT(f, a, s, i);
    }
  },
  AT = (t, a, s, i) => {
    if (typeof t == "string") {
      kT(t, a, s);
      return;
    }
    if (typeof t == "function") {
      MT(t, a, s, i);
      return;
    }
    DT(t, a, s, i);
  },
  kT = (t, a, s) => {
    const i = t === "" ? a : O0(a, t);
    i.classGroupId = s;
  },
  MT = (t, a, s, i) => {
    if (LT(t)) {
      am(t(i), a, s, i);
      return;
    }
    a.validators === null && (a.validators = []), a.validators.push(CT(s, t));
  },
  DT = (t, a, s, i) => {
    const o = Object.entries(t),
      c = o.length;
    for (let f = 0; f < c; f++) {
      const [m, p] = o[f];
      am(p, O0(a, m), s, i);
    }
  },
  O0 = (t, a) => {
    let s = t;
    const i = a.split(Mc),
      o = i.length;
    for (let c = 0; c < o; c++) {
      const f = i[c];
      let m = s.nextPart.get(f);
      m || ((m = j0()), s.nextPart.set(f, m)), (s = m);
    }
    return s;
  },
  LT = (t) => "isThemeGetter" in t && t.isThemeGetter === !0,
  UT = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let a = 0,
      s = Object.create(null),
      i = Object.create(null);
    const o = (c, f) => {
      (s[c] = f), a++, a > t && ((a = 0), (i = s), (s = Object.create(null)));
    };
    return {
      get(c) {
        let f = s[c];
        if (f !== void 0) return f;
        if ((f = i[c]) !== void 0) return o(c, f), f;
      },
      set(c, f) {
        c in s ? (s[c] = f) : o(c, f);
      },
    };
  },
  mh = "!",
  gx = ":",
  zT = [],
  vx = (t, a, s, i, o) => ({
    modifiers: t,
    hasImportantModifier: a,
    baseClassName: s,
    maybePostfixModifierPosition: i,
    isExternal: o,
  }),
  qT = (t) => {
    const { prefix: a, experimentalParseClassName: s } = t;
    let i = (o) => {
      const c = [];
      let f = 0,
        m = 0,
        p = 0,
        y;
      const v = o.length;
      for (let S = 0; S < v; S++) {
        const C = o[S];
        if (f === 0 && m === 0) {
          if (C === gx) {
            c.push(o.slice(p, S)), (p = S + 1);
            continue;
          }
          if (C === "/") {
            y = S;
            continue;
          }
        }
        C === "[" ? f++ : C === "]" ? f-- : C === "(" ? m++ : C === ")" && m--;
      }
      const b = c.length === 0 ? o : o.slice(p);
      let _ = b,
        N = !1;
      b.endsWith(mh)
        ? ((_ = b.slice(0, -1)), (N = !0))
        : b.startsWith(mh) && ((_ = b.slice(1)), (N = !0));
      const j = y && y > p ? y - p : void 0;
      return vx(c, N, _, j);
    };
    if (a) {
      const o = a + gx,
        c = i;
      i = (f) =>
        f.startsWith(o) ? c(f.slice(o.length)) : vx(zT, !1, f, void 0, !0);
    }
    if (s) {
      const o = i;
      i = (c) => s({ className: c, parseClassName: o });
    }
    return i;
  },
  PT = (t) => {
    const a = new Map();
    return (
      t.orderSensitiveModifiers.forEach((s, i) => {
        a.set(s, 1e6 + i);
      }),
      (s) => {
        const i = [];
        let o = [];
        for (let c = 0; c < s.length; c++) {
          const f = s[c],
            m = f[0] === "[",
            p = a.has(f);
          m || p
            ? (o.length > 0 && (o.sort(), i.push(...o), (o = [])), i.push(f))
            : o.push(f);
        }
        return o.length > 0 && (o.sort(), i.push(...o)), i;
      }
    );
  },
  VT = (t) => ({
    cache: UT(t.cacheSize),
    parseClassName: qT(t),
    sortModifiers: PT(t),
    ...jT(t),
  }),
  HT = /\s+/,
  BT = (t, a) => {
    const {
        parseClassName: s,
        getClassGroupId: i,
        getConflictingClassGroupIds: o,
        sortModifiers: c,
      } = a,
      f = [],
      m = t.trim().split(HT);
    let p = "";
    for (let y = m.length - 1; y >= 0; y -= 1) {
      const v = m[y],
        {
          isExternal: b,
          modifiers: _,
          hasImportantModifier: N,
          baseClassName: j,
          maybePostfixModifierPosition: S,
        } = s(v);
      if (b) {
        p = v + (p.length > 0 ? " " + p : p);
        continue;
      }
      let C = !!S,
        A = i(C ? j.substring(0, S) : j);
      if (!A) {
        if (!C) {
          p = v + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((A = i(j)), !A)) {
          p = v + (p.length > 0 ? " " + p : p);
          continue;
        }
        C = !1;
      }
      const O = _.length === 0 ? "" : _.length === 1 ? _[0] : c(_).join(":"),
        k = N ? O + mh : O,
        D = k + A;
      if (f.indexOf(D) > -1) continue;
      f.push(D);
      const q = o(A, C);
      for (let X = 0; X < q.length; ++X) {
        const Z = q[X];
        f.push(k + Z);
      }
      p = v + (p.length > 0 ? " " + p : p);
    }
    return p;
  },
  FT = (...t) => {
    let a = 0,
      s,
      i,
      o = "";
    for (; a < t.length; )
      (s = t[a++]) && (i = R0(s)) && (o && (o += " "), (o += i));
    return o;
  },
  R0 = (t) => {
    if (typeof t == "string") return t;
    let a,
      s = "";
    for (let i = 0; i < t.length; i++)
      t[i] && (a = R0(t[i])) && (s && (s += " "), (s += a));
    return s;
  },
  KT = (t, ...a) => {
    let s, i, o, c;
    const f = (p) => {
        const y = a.reduce((v, b) => b(v), t());
        return (s = VT(y)), (i = s.cache.get), (o = s.cache.set), (c = m), m(p);
      },
      m = (p) => {
        const y = i(p);
        if (y) return y;
        const v = BT(p, s);
        return o(p, v), v;
      };
    return (c = f), (...p) => c(FT(...p));
  },
  QT = [],
  Ut = (t) => {
    const a = (s) => s[t] || QT;
    return (a.isThemeGetter = !0), a;
  },
  A0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  k0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  GT = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  ZT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  YT =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  IT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  $T = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  XT =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  hs = (t) => GT.test(t),
  He = (t) => !!t && !Number.isNaN(Number(t)),
  ms = (t) => !!t && Number.isInteger(Number(t)),
  Bf = (t) => t.endsWith("%") && He(t.slice(0, -1)),
  Ma = (t) => ZT.test(t),
  M0 = () => !0,
  WT = (t) => YT.test(t) && !IT.test(t),
  sm = () => !1,
  JT = (t) => $T.test(t),
  e2 = (t) => XT.test(t),
  t2 = (t) => !be(t) && !we(t),
  n2 = (t) => Os(t, U0, sm),
  be = (t) => A0.test(t),
  $s = (t) => Os(t, z0, WT),
  xx = (t) => Os(t, u2, He),
  a2 = (t) => Os(t, P0, M0),
  s2 = (t) => Os(t, q0, sm),
  bx = (t) => Os(t, D0, sm),
  r2 = (t) => Os(t, L0, e2),
  gc = (t) => Os(t, V0, JT),
  we = (t) => k0.test(t),
  wl = (t) => or(t, z0),
  i2 = (t) => or(t, q0),
  wx = (t) => or(t, D0),
  l2 = (t) => or(t, U0),
  o2 = (t) => or(t, L0),
  vc = (t) => or(t, V0, !0),
  c2 = (t) => or(t, P0, !0),
  Os = (t, a, s) => {
    const i = A0.exec(t);
    return i ? (i[1] ? a(i[1]) : s(i[2])) : !1;
  },
  or = (t, a, s = !1) => {
    const i = k0.exec(t);
    return i ? (i[1] ? a(i[1]) : s) : !1;
  },
  D0 = (t) => t === "position" || t === "percentage",
  L0 = (t) => t === "image" || t === "url",
  U0 = (t) => t === "length" || t === "size" || t === "bg-size",
  z0 = (t) => t === "length",
  u2 = (t) => t === "number",
  q0 = (t) => t === "family-name",
  P0 = (t) => t === "number" || t === "weight",
  V0 = (t) => t === "shadow",
  d2 = () => {
    const t = Ut("color"),
      a = Ut("font"),
      s = Ut("text"),
      i = Ut("font-weight"),
      o = Ut("tracking"),
      c = Ut("leading"),
      f = Ut("breakpoint"),
      m = Ut("container"),
      p = Ut("spacing"),
      y = Ut("radius"),
      v = Ut("shadow"),
      b = Ut("inset-shadow"),
      _ = Ut("text-shadow"),
      N = Ut("drop-shadow"),
      j = Ut("blur"),
      S = Ut("perspective"),
      C = Ut("aspect"),
      A = Ut("ease"),
      O = Ut("animate"),
      k = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      D = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      q = () => [...D(), we, be],
      X = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Z = () => ["auto", "contain", "none"],
      P = () => [we, be, p],
      G = () => [hs, "full", "auto", ...P()],
      ue = () => [ms, "none", "subgrid", we, be],
      ve = () => ["auto", { span: ["full", ms, we, be] }, ms, we, be],
      te = () => [ms, "auto", we, be],
      oe = () => ["auto", "min", "max", "fr", we, be],
      ee = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      de = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      L = () => ["auto", ...P()],
      U = () => [
        hs,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...P(),
      ],
      W = () => [
        hs,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...P(),
      ],
      fe = () => [
        hs,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...P(),
      ],
      E = () => [t, we, be],
      I = () => [...D(), wx, bx, { position: [we, be] }],
      le = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      ae = () => ["auto", "cover", "contain", l2, n2, { size: [we, be] }],
      pe = () => [Bf, wl, $s],
      Ne = () => ["", "none", "full", y, we, be],
      he = () => ["", He, wl, $s],
      me = () => ["solid", "dashed", "dotted", "double"],
      Te = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ke = () => [He, Bf, wx, bx],
      Ie = () => ["", "none", j, we, be],
      Be = () => ["none", He, we, be],
      Je = () => ["none", He, we, be],
      mt = () => [He, we, be],
      jt = () => [hs, "full", ...P()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ma],
        breakpoint: [Ma],
        color: [M0],
        container: [Ma],
        "drop-shadow": [Ma],
        ease: ["in", "out", "in-out"],
        font: [t2],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ma],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ma],
        shadow: [Ma],
        spacing: ["px", He],
        text: [Ma],
        "text-shadow": [Ma],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", hs, be, we, C] }],
        container: ["container"],
        columns: [{ columns: [He, be, we, m] }],
        "break-after": [{ "break-after": k() }],
        "break-before": [{ "break-before": k() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: q() }],
        overflow: [{ overflow: X() }],
        "overflow-x": [{ "overflow-x": X() }],
        "overflow-y": [{ "overflow-y": X() }],
        overscroll: [{ overscroll: Z() }],
        "overscroll-x": [{ "overscroll-x": Z() }],
        "overscroll-y": [{ "overscroll-y": Z() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: G() }],
        "inset-x": [{ "inset-x": G() }],
        "inset-y": [{ "inset-y": G() }],
        start: [{ "inset-s": G(), start: G() }],
        end: [{ "inset-e": G(), end: G() }],
        "inset-bs": [{ "inset-bs": G() }],
        "inset-be": [{ "inset-be": G() }],
        top: [{ top: G() }],
        right: [{ right: G() }],
        bottom: [{ bottom: G() }],
        left: [{ left: G() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ms, "auto", we, be] }],
        basis: [{ basis: [hs, "full", "auto", m, ...P()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [He, hs, "auto", "initial", "none", be] }],
        grow: [{ grow: ["", He, we, be] }],
        shrink: [{ shrink: ["", He, we, be] }],
        order: [{ order: [ms, "first", "last", "none", we, be] }],
        "grid-cols": [{ "grid-cols": ue() }],
        "col-start-end": [{ col: ve() }],
        "col-start": [{ "col-start": te() }],
        "col-end": [{ "col-end": te() }],
        "grid-rows": [{ "grid-rows": ue() }],
        "row-start-end": [{ row: ve() }],
        "row-start": [{ "row-start": te() }],
        "row-end": [{ "row-end": te() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": oe() }],
        "auto-rows": [{ "auto-rows": oe() }],
        gap: [{ gap: P() }],
        "gap-x": [{ "gap-x": P() }],
        "gap-y": [{ "gap-y": P() }],
        "justify-content": [{ justify: [...ee(), "normal"] }],
        "justify-items": [{ "justify-items": [...de(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...de()] }],
        "align-content": [{ content: ["normal", ...ee()] }],
        "align-items": [{ items: [...de(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...de(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ee() }],
        "place-items": [{ "place-items": [...de(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...de()] }],
        p: [{ p: P() }],
        px: [{ px: P() }],
        py: [{ py: P() }],
        ps: [{ ps: P() }],
        pe: [{ pe: P() }],
        pbs: [{ pbs: P() }],
        pbe: [{ pbe: P() }],
        pt: [{ pt: P() }],
        pr: [{ pr: P() }],
        pb: [{ pb: P() }],
        pl: [{ pl: P() }],
        m: [{ m: L() }],
        mx: [{ mx: L() }],
        my: [{ my: L() }],
        ms: [{ ms: L() }],
        me: [{ me: L() }],
        mbs: [{ mbs: L() }],
        mbe: [{ mbe: L() }],
        mt: [{ mt: L() }],
        mr: [{ mr: L() }],
        mb: [{ mb: L() }],
        ml: [{ ml: L() }],
        "space-x": [{ "space-x": P() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": P() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: U() }],
        "inline-size": [{ inline: ["auto", ...W()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...W()] }],
        "max-inline-size": [{ "max-inline": ["none", ...W()] }],
        "block-size": [{ block: ["auto", ...fe()] }],
        "min-block-size": [{ "min-block": ["auto", ...fe()] }],
        "max-block-size": [{ "max-block": ["none", ...fe()] }],
        w: [{ w: [m, "screen", ...U()] }],
        "min-w": [{ "min-w": [m, "screen", "none", ...U()] }],
        "max-w": [
          { "max-w": [m, "screen", "none", "prose", { screen: [f] }, ...U()] },
        ],
        h: [{ h: ["screen", "lh", ...U()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...U()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...U()] }],
        "font-size": [{ text: ["base", s, wl, $s] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, c2, a2] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Bf,
              be,
            ],
          },
        ],
        "font-family": [{ font: [i2, s2, a] }],
        "font-features": [{ "font-features": [be] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, we, be] }],
        "line-clamp": [{ "line-clamp": [He, "none", we, xx] }],
        leading: [{ leading: [c, ...P()] }],
        "list-image": [{ "list-image": ["none", we, be] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", we, be] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: E() }],
        "text-color": [{ text: E() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...me(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [He, "from-font", "auto", we, $s] },
        ],
        "text-decoration-color": [{ decoration: E() }],
        "underline-offset": [{ "underline-offset": [He, "auto", we, be] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: P() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              we,
              be,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", we, be] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: I() }],
        "bg-repeat": [{ bg: le() }],
        "bg-size": [{ bg: ae() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ms,
                  we,
                  be,
                ],
                radial: ["", we, be],
                conic: [ms, we, be],
              },
              o2,
              r2,
            ],
          },
        ],
        "bg-color": [{ bg: E() }],
        "gradient-from-pos": [{ from: pe() }],
        "gradient-via-pos": [{ via: pe() }],
        "gradient-to-pos": [{ to: pe() }],
        "gradient-from": [{ from: E() }],
        "gradient-via": [{ via: E() }],
        "gradient-to": [{ to: E() }],
        rounded: [{ rounded: Ne() }],
        "rounded-s": [{ "rounded-s": Ne() }],
        "rounded-e": [{ "rounded-e": Ne() }],
        "rounded-t": [{ "rounded-t": Ne() }],
        "rounded-r": [{ "rounded-r": Ne() }],
        "rounded-b": [{ "rounded-b": Ne() }],
        "rounded-l": [{ "rounded-l": Ne() }],
        "rounded-ss": [{ "rounded-ss": Ne() }],
        "rounded-se": [{ "rounded-se": Ne() }],
        "rounded-ee": [{ "rounded-ee": Ne() }],
        "rounded-es": [{ "rounded-es": Ne() }],
        "rounded-tl": [{ "rounded-tl": Ne() }],
        "rounded-tr": [{ "rounded-tr": Ne() }],
        "rounded-br": [{ "rounded-br": Ne() }],
        "rounded-bl": [{ "rounded-bl": Ne() }],
        "border-w": [{ border: he() }],
        "border-w-x": [{ "border-x": he() }],
        "border-w-y": [{ "border-y": he() }],
        "border-w-s": [{ "border-s": he() }],
        "border-w-e": [{ "border-e": he() }],
        "border-w-bs": [{ "border-bs": he() }],
        "border-w-be": [{ "border-be": he() }],
        "border-w-t": [{ "border-t": he() }],
        "border-w-r": [{ "border-r": he() }],
        "border-w-b": [{ "border-b": he() }],
        "border-w-l": [{ "border-l": he() }],
        "divide-x": [{ "divide-x": he() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": he() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...me(), "hidden", "none"] }],
        "divide-style": [{ divide: [...me(), "hidden", "none"] }],
        "border-color": [{ border: E() }],
        "border-color-x": [{ "border-x": E() }],
        "border-color-y": [{ "border-y": E() }],
        "border-color-s": [{ "border-s": E() }],
        "border-color-e": [{ "border-e": E() }],
        "border-color-bs": [{ "border-bs": E() }],
        "border-color-be": [{ "border-be": E() }],
        "border-color-t": [{ "border-t": E() }],
        "border-color-r": [{ "border-r": E() }],
        "border-color-b": [{ "border-b": E() }],
        "border-color-l": [{ "border-l": E() }],
        "divide-color": [{ divide: E() }],
        "outline-style": [{ outline: [...me(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [He, we, be] }],
        "outline-w": [{ outline: ["", He, wl, $s] }],
        "outline-color": [{ outline: E() }],
        shadow: [{ shadow: ["", "none", v, vc, gc] }],
        "shadow-color": [{ shadow: E() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, vc, gc] }],
        "inset-shadow-color": [{ "inset-shadow": E() }],
        "ring-w": [{ ring: he() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: E() }],
        "ring-offset-w": [{ "ring-offset": [He, $s] }],
        "ring-offset-color": [{ "ring-offset": E() }],
        "inset-ring-w": [{ "inset-ring": he() }],
        "inset-ring-color": [{ "inset-ring": E() }],
        "text-shadow": [{ "text-shadow": ["none", _, vc, gc] }],
        "text-shadow-color": [{ "text-shadow": E() }],
        opacity: [{ opacity: [He, we, be] }],
        "mix-blend": [
          { "mix-blend": [...Te(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Te() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [He] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ke() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ke() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": E() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": E() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ke() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ke() }],
        "mask-image-t-from-color": [{ "mask-t-from": E() }],
        "mask-image-t-to-color": [{ "mask-t-to": E() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ke() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ke() }],
        "mask-image-r-from-color": [{ "mask-r-from": E() }],
        "mask-image-r-to-color": [{ "mask-r-to": E() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ke() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ke() }],
        "mask-image-b-from-color": [{ "mask-b-from": E() }],
        "mask-image-b-to-color": [{ "mask-b-to": E() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ke() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ke() }],
        "mask-image-l-from-color": [{ "mask-l-from": E() }],
        "mask-image-l-to-color": [{ "mask-l-to": E() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ke() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ke() }],
        "mask-image-x-from-color": [{ "mask-x-from": E() }],
        "mask-image-x-to-color": [{ "mask-x-to": E() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ke() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ke() }],
        "mask-image-y-from-color": [{ "mask-y-from": E() }],
        "mask-image-y-to-color": [{ "mask-y-to": E() }],
        "mask-image-radial": [{ "mask-radial": [we, be] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ke() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ke() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": E() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": E() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": D() }],
        "mask-image-conic-pos": [{ "mask-conic": [He] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ke() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ke() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": E() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": E() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: I() }],
        "mask-repeat": [{ mask: le() }],
        "mask-size": [{ mask: ae() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", we, be] }],
        filter: [{ filter: ["", "none", we, be] }],
        blur: [{ blur: Ie() }],
        brightness: [{ brightness: [He, we, be] }],
        contrast: [{ contrast: [He, we, be] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", N, vc, gc] }],
        "drop-shadow-color": [{ "drop-shadow": E() }],
        grayscale: [{ grayscale: ["", He, we, be] }],
        "hue-rotate": [{ "hue-rotate": [He, we, be] }],
        invert: [{ invert: ["", He, we, be] }],
        saturate: [{ saturate: [He, we, be] }],
        sepia: [{ sepia: ["", He, we, be] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", we, be] }],
        "backdrop-blur": [{ "backdrop-blur": Ie() }],
        "backdrop-brightness": [{ "backdrop-brightness": [He, we, be] }],
        "backdrop-contrast": [{ "backdrop-contrast": [He, we, be] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", He, we, be] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [He, we, be] }],
        "backdrop-invert": [{ "backdrop-invert": ["", He, we, be] }],
        "backdrop-opacity": [{ "backdrop-opacity": [He, we, be] }],
        "backdrop-saturate": [{ "backdrop-saturate": [He, we, be] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", He, we, be] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": P() }],
        "border-spacing-x": [{ "border-spacing-x": P() }],
        "border-spacing-y": [{ "border-spacing-y": P() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              we,
              be,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [He, "initial", we, be] }],
        ease: [{ ease: ["linear", "initial", A, we, be] }],
        delay: [{ delay: [He, we, be] }],
        animate: [{ animate: ["none", O, we, be] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [S, we, be] }],
        "perspective-origin": [{ "perspective-origin": q() }],
        rotate: [{ rotate: Be() }],
        "rotate-x": [{ "rotate-x": Be() }],
        "rotate-y": [{ "rotate-y": Be() }],
        "rotate-z": [{ "rotate-z": Be() }],
        scale: [{ scale: Je() }],
        "scale-x": [{ "scale-x": Je() }],
        "scale-y": [{ "scale-y": Je() }],
        "scale-z": [{ "scale-z": Je() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: mt() }],
        "skew-x": [{ "skew-x": mt() }],
        "skew-y": [{ "skew-y": mt() }],
        transform: [{ transform: [we, be, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: q() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: jt() }],
        "translate-x": [{ "translate-x": jt() }],
        "translate-y": [{ "translate-y": jt() }],
        "translate-z": [{ "translate-z": jt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: E() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: E() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              we,
              be,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": P() }],
        "scroll-mx": [{ "scroll-mx": P() }],
        "scroll-my": [{ "scroll-my": P() }],
        "scroll-ms": [{ "scroll-ms": P() }],
        "scroll-me": [{ "scroll-me": P() }],
        "scroll-mbs": [{ "scroll-mbs": P() }],
        "scroll-mbe": [{ "scroll-mbe": P() }],
        "scroll-mt": [{ "scroll-mt": P() }],
        "scroll-mr": [{ "scroll-mr": P() }],
        "scroll-mb": [{ "scroll-mb": P() }],
        "scroll-ml": [{ "scroll-ml": P() }],
        "scroll-p": [{ "scroll-p": P() }],
        "scroll-px": [{ "scroll-px": P() }],
        "scroll-py": [{ "scroll-py": P() }],
        "scroll-ps": [{ "scroll-ps": P() }],
        "scroll-pe": [{ "scroll-pe": P() }],
        "scroll-pbs": [{ "scroll-pbs": P() }],
        "scroll-pbe": [{ "scroll-pbe": P() }],
        "scroll-pt": [{ "scroll-pt": P() }],
        "scroll-pr": [{ "scroll-pr": P() }],
        "scroll-pb": [{ "scroll-pb": P() }],
        "scroll-pl": [{ "scroll-pl": P() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", we, be],
          },
        ],
        fill: [{ fill: ["none", ...E()] }],
        "stroke-w": [{ stroke: [He, wl, $s, xx] }],
        stroke: [{ stroke: ["none", ...E()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  f2 = KT(d2);
function Ee(...t) {
  return f2(b0(t));
}
const h2 = hj,
  H0 = g.forwardRef(({ className: t, ...a }, s) =>
    u.jsx(h0, {
      ref: s,
      className: Ee(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t
      ),
      ...a,
    })
  );
H0.displayName = h0.displayName;
const m2 = eu(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  B0 = g.forwardRef(({ className: t, variant: a, ...s }, i) =>
    u.jsx(m0, { ref: i, className: Ee(m2({ variant: a }), t), ...s })
  );
B0.displayName = m0.displayName;
const p2 = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(g0, {
    ref: s,
    className: Ee(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t
    ),
    ...a,
  })
);
p2.displayName = g0.displayName;
const F0 = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(v0, {
    ref: s,
    className: Ee(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...a,
    children: u.jsx(nm, { className: "h-4 w-4" }),
  })
);
F0.displayName = v0.displayName;
const K0 = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(p0, { ref: s, className: Ee("text-sm font-semibold", t), ...a })
);
K0.displayName = p0.displayName;
const Q0 = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(y0, { ref: s, className: Ee("text-sm opacity-90", t), ...a })
);
Q0.displayName = y0.displayName;
function y2() {
  const { toasts: t } = Hn();
  return u.jsxs(h2, {
    children: [
      t.map(function ({ id: a, title: s, description: i, action: o, ...c }) {
        return u.jsxs(
          B0,
          {
            ...c,
            children: [
              u.jsxs("div", {
                className: "grid gap-1",
                children: [
                  s && u.jsx(K0, { children: s }),
                  i && u.jsx(Q0, { children: i }),
                ],
              }),
              o,
              u.jsx(F0, {}),
            ],
          },
          a
        );
      }),
      u.jsx(H0, {}),
    ],
  });
}
var g2 = $c[" useId ".trim().toString()] || (() => {}),
  v2 = 0;
function ni(t) {
  const [a, s] = g.useState(g2());
  return (
    Mt(() => {
      s((i) => i ?? String(v2++));
    }, [t]),
    a ? `radix-${a}` : ""
  );
}
const x2 = ["top", "right", "bottom", "left"],
  Ns = Math.min,
  _n = Math.max,
  Dc = Math.round,
  xc = Math.floor,
  da = (t) => ({ x: t, y: t }),
  b2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ph(t, a, s) {
  return _n(t, Ns(a, s));
}
function za(t, a) {
  return typeof t == "function" ? t(a) : t;
}
function qa(t) {
  return t.split("-")[0];
}
function gi(t) {
  return t.split("-")[1];
}
function rm(t) {
  return t === "x" ? "y" : "x";
}
function im(t) {
  return t === "y" ? "height" : "width";
}
function ua(t) {
  const a = t[0];
  return a === "t" || a === "b" ? "y" : "x";
}
function lm(t) {
  return rm(ua(t));
}
function w2(t, a, s) {
  s === void 0 && (s = !1);
  const i = gi(t),
    o = lm(t),
    c = im(o);
  let f =
    o === "x"
      ? i === (s ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
      ? "bottom"
      : "top";
  return a.reference[c] > a.floating[c] && (f = Lc(f)), [f, Lc(f)];
}
function S2(t) {
  const a = Lc(t);
  return [yh(t), a, yh(a)];
}
function yh(t) {
  return t.includes("start")
    ? t.replace("start", "end")
    : t.replace("end", "start");
}
const Sx = ["left", "right"],
  _x = ["right", "left"],
  _2 = ["top", "bottom"],
  N2 = ["bottom", "top"];
function C2(t, a, s) {
  switch (t) {
    case "top":
    case "bottom":
      return s ? (a ? _x : Sx) : a ? Sx : _x;
    case "left":
    case "right":
      return a ? _2 : N2;
    default:
      return [];
  }
}
function E2(t, a, s, i) {
  const o = gi(t);
  let c = C2(qa(t), s === "start", i);
  return (
    o && ((c = c.map((f) => f + "-" + o)), a && (c = c.concat(c.map(yh)))), c
  );
}
function Lc(t) {
  const a = qa(t);
  return b2[a] + t.slice(a.length);
}
function j2(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function G0(t) {
  return typeof t != "number"
    ? j2(t)
    : { top: t, right: t, bottom: t, left: t };
}
function Uc(t) {
  const { x: a, y: s, width: i, height: o } = t;
  return {
    width: i,
    height: o,
    top: s,
    left: a,
    right: a + i,
    bottom: s + o,
    x: a,
    y: s,
  };
}
function Nx(t, a, s) {
  let { reference: i, floating: o } = t;
  const c = ua(a),
    f = lm(a),
    m = im(f),
    p = qa(a),
    y = c === "y",
    v = i.x + i.width / 2 - o.width / 2,
    b = i.y + i.height / 2 - o.height / 2,
    _ = i[m] / 2 - o[m] / 2;
  let N;
  switch (p) {
    case "top":
      N = { x: v, y: i.y - o.height };
      break;
    case "bottom":
      N = { x: v, y: i.y + i.height };
      break;
    case "right":
      N = { x: i.x + i.width, y: b };
      break;
    case "left":
      N = { x: i.x - o.width, y: b };
      break;
    default:
      N = { x: i.x, y: i.y };
  }
  switch (gi(a)) {
    case "start":
      N[f] -= _ * (s && y ? -1 : 1);
      break;
    case "end":
      N[f] += _ * (s && y ? -1 : 1);
      break;
  }
  return N;
}
async function T2(t, a) {
  var s;
  a === void 0 && (a = {});
  const { x: i, y: o, platform: c, rects: f, elements: m, strategy: p } = t,
    {
      boundary: y = "clippingAncestors",
      rootBoundary: v = "viewport",
      elementContext: b = "floating",
      altBoundary: _ = !1,
      padding: N = 0,
    } = za(a, t),
    j = G0(N),
    C = m[_ ? (b === "floating" ? "reference" : "floating") : b],
    A = Uc(
      await c.getClippingRect({
        element:
          (s = await (c.isElement == null ? void 0 : c.isElement(C))) == null ||
          s
            ? C
            : C.contextElement ||
              (await (c.getDocumentElement == null
                ? void 0
                : c.getDocumentElement(m.floating))),
        boundary: y,
        rootBoundary: v,
        strategy: p,
      })
    ),
    O =
      b === "floating"
        ? { x: i, y: o, width: f.floating.width, height: f.floating.height }
        : f.reference,
    k = await (c.getOffsetParent == null
      ? void 0
      : c.getOffsetParent(m.floating)),
    D = (await (c.isElement == null ? void 0 : c.isElement(k)))
      ? (await (c.getScale == null ? void 0 : c.getScale(k))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    q = Uc(
      c.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: m,
            rect: O,
            offsetParent: k,
            strategy: p,
          })
        : O
    );
  return {
    top: (A.top - q.top + j.top) / D.y,
    bottom: (q.bottom - A.bottom + j.bottom) / D.y,
    left: (A.left - q.left + j.left) / D.x,
    right: (q.right - A.right + j.right) / D.x,
  };
}
const O2 = 50,
  R2 = async (t, a, s) => {
    const {
        placement: i = "bottom",
        strategy: o = "absolute",
        middleware: c = [],
        platform: f,
      } = s,
      m = f.detectOverflow ? f : { ...f, detectOverflow: T2 },
      p = await (f.isRTL == null ? void 0 : f.isRTL(a));
    let y = await f.getElementRects({ reference: t, floating: a, strategy: o }),
      { x: v, y: b } = Nx(y, i, p),
      _ = i,
      N = 0;
    const j = {};
    for (let S = 0; S < c.length; S++) {
      const C = c[S];
      if (!C) continue;
      const { name: A, fn: O } = C,
        {
          x: k,
          y: D,
          data: q,
          reset: X,
        } = await O({
          x: v,
          y: b,
          initialPlacement: i,
          placement: _,
          strategy: o,
          middlewareData: j,
          rects: y,
          platform: m,
          elements: { reference: t, floating: a },
        });
      (v = k ?? v),
        (b = D ?? b),
        (j[A] = { ...j[A], ...q }),
        X &&
          N < O2 &&
          (N++,
          typeof X == "object" &&
            (X.placement && (_ = X.placement),
            X.rects &&
              (y =
                X.rects === !0
                  ? await f.getElementRects({
                      reference: t,
                      floating: a,
                      strategy: o,
                    })
                  : X.rects),
            ({ x: v, y: b } = Nx(y, _, p))),
          (S = -1));
    }
    return { x: v, y: b, placement: _, strategy: o, middlewareData: j };
  },
  A2 = (t) => ({
    name: "arrow",
    options: t,
    async fn(a) {
      const {
          x: s,
          y: i,
          placement: o,
          rects: c,
          platform: f,
          elements: m,
          middlewareData: p,
        } = a,
        { element: y, padding: v = 0 } = za(t, a) || {};
      if (y == null) return {};
      const b = G0(v),
        _ = { x: s, y: i },
        N = lm(o),
        j = im(N),
        S = await f.getDimensions(y),
        C = N === "y",
        A = C ? "top" : "left",
        O = C ? "bottom" : "right",
        k = C ? "clientHeight" : "clientWidth",
        D = c.reference[j] + c.reference[N] - _[N] - c.floating[j],
        q = _[N] - c.reference[N],
        X = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(y));
      let Z = X ? X[k] : 0;
      (!Z || !(await (f.isElement == null ? void 0 : f.isElement(X)))) &&
        (Z = m.floating[k] || c.floating[j]);
      const P = D / 2 - q / 2,
        G = Z / 2 - S[j] / 2 - 1,
        ue = Ns(b[A], G),
        ve = Ns(b[O], G),
        te = ue,
        oe = Z - S[j] - ve,
        ee = Z / 2 - S[j] / 2 + P,
        de = ph(te, ee, oe),
        L =
          !p.arrow &&
          gi(o) != null &&
          ee !== de &&
          c.reference[j] / 2 - (ee < te ? ue : ve) - S[j] / 2 < 0,
        U = L ? (ee < te ? ee - te : ee - oe) : 0;
      return {
        [N]: _[N] + U,
        data: {
          [N]: de,
          centerOffset: ee - de - U,
          ...(L && { alignmentOffset: U }),
        },
        reset: L,
      };
    },
  }),
  k2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(a) {
          var s, i;
          const {
              placement: o,
              middlewareData: c,
              rects: f,
              initialPlacement: m,
              platform: p,
              elements: y,
            } = a,
            {
              mainAxis: v = !0,
              crossAxis: b = !0,
              fallbackPlacements: _,
              fallbackStrategy: N = "bestFit",
              fallbackAxisSideDirection: j = "none",
              flipAlignment: S = !0,
              ...C
            } = za(t, a);
          if ((s = c.arrow) != null && s.alignmentOffset) return {};
          const A = qa(o),
            O = ua(m),
            k = qa(m) === m,
            D = await (p.isRTL == null ? void 0 : p.isRTL(y.floating)),
            q = _ || (k || !S ? [Lc(m)] : S2(m)),
            X = j !== "none";
          !_ && X && q.push(...E2(m, S, j, D));
          const Z = [m, ...q],
            P = await p.detectOverflow(a, C),
            G = [];
          let ue = ((i = c.flip) == null ? void 0 : i.overflows) || [];
          if ((v && G.push(P[A]), b)) {
            const ee = w2(o, f, D);
            G.push(P[ee[0]], P[ee[1]]);
          }
          if (
            ((ue = [...ue, { placement: o, overflows: G }]),
            !G.every((ee) => ee <= 0))
          ) {
            var ve, te;
            const ee = (((ve = c.flip) == null ? void 0 : ve.index) || 0) + 1,
              de = Z[ee];
            if (
              de &&
              (!(b === "alignment" ? O !== ua(de) : !1) ||
                ue.every((W) =>
                  ua(W.placement) === O ? W.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: ee, overflows: ue },
                reset: { placement: de },
              };
            let L =
              (te = ue
                .filter((U) => U.overflows[0] <= 0)
                .sort((U, W) => U.overflows[1] - W.overflows[1])[0]) == null
                ? void 0
                : te.placement;
            if (!L)
              switch (N) {
                case "bestFit": {
                  var oe;
                  const U =
                    (oe = ue
                      .filter((W) => {
                        if (X) {
                          const fe = ua(W.placement);
                          return fe === O || fe === "y";
                        }
                        return !0;
                      })
                      .map((W) => [
                        W.placement,
                        W.overflows
                          .filter((fe) => fe > 0)
                          .reduce((fe, E) => fe + E, 0),
                      ])
                      .sort((W, fe) => W[1] - fe[1])[0]) == null
                      ? void 0
                      : oe[0];
                  U && (L = U);
                  break;
                }
                case "initialPlacement":
                  L = m;
                  break;
              }
            if (o !== L) return { reset: { placement: L } };
          }
          return {};
        },
      }
    );
  };
function Cx(t, a) {
  return {
    top: t.top - a.height,
    right: t.right - a.width,
    bottom: t.bottom - a.height,
    left: t.left - a.width,
  };
}
function Ex(t) {
  return x2.some((a) => t[a] >= 0);
}
const M2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "hide",
        options: t,
        async fn(a) {
          const { rects: s, platform: i } = a,
            { strategy: o = "referenceHidden", ...c } = za(t, a);
          switch (o) {
            case "referenceHidden": {
              const f = await i.detectOverflow(a, {
                  ...c,
                  elementContext: "reference",
                }),
                m = Cx(f, s.reference);
              return {
                data: { referenceHiddenOffsets: m, referenceHidden: Ex(m) },
              };
            }
            case "escaped": {
              const f = await i.detectOverflow(a, { ...c, altBoundary: !0 }),
                m = Cx(f, s.floating);
              return { data: { escapedOffsets: m, escaped: Ex(m) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Z0 = new Set(["left", "top"]);
async function D2(t, a) {
  const { placement: s, platform: i, elements: o } = t,
    c = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)),
    f = qa(s),
    m = gi(s),
    p = ua(s) === "y",
    y = Z0.has(f) ? -1 : 1,
    v = c && p ? -1 : 1,
    b = za(a, t);
  let {
    mainAxis: _,
    crossAxis: N,
    alignmentAxis: j,
  } = typeof b == "number"
    ? { mainAxis: b, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: b.mainAxis || 0,
        crossAxis: b.crossAxis || 0,
        alignmentAxis: b.alignmentAxis,
      };
  return (
    m && typeof j == "number" && (N = m === "end" ? j * -1 : j),
    p ? { x: N * v, y: _ * y } : { x: _ * y, y: N * v }
  );
}
const L2 = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(a) {
          var s, i;
          const { x: o, y: c, placement: f, middlewareData: m } = a,
            p = await D2(a, t);
          return f === ((s = m.offset) == null ? void 0 : s.placement) &&
            (i = m.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: o + p.x, y: c + p.y, data: { ...p, placement: f } };
        },
      }
    );
  },
  U2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(a) {
          const { x: s, y: i, placement: o, platform: c } = a,
            {
              mainAxis: f = !0,
              crossAxis: m = !1,
              limiter: p = {
                fn: (A) => {
                  let { x: O, y: k } = A;
                  return { x: O, y: k };
                },
              },
              ...y
            } = za(t, a),
            v = { x: s, y: i },
            b = await c.detectOverflow(a, y),
            _ = ua(qa(o)),
            N = rm(_);
          let j = v[N],
            S = v[_];
          if (f) {
            const A = N === "y" ? "top" : "left",
              O = N === "y" ? "bottom" : "right",
              k = j + b[A],
              D = j - b[O];
            j = ph(k, j, D);
          }
          if (m) {
            const A = _ === "y" ? "top" : "left",
              O = _ === "y" ? "bottom" : "right",
              k = S + b[A],
              D = S - b[O];
            S = ph(k, S, D);
          }
          const C = p.fn({ ...a, [N]: j, [_]: S });
          return {
            ...C,
            data: { x: C.x - s, y: C.y - i, enabled: { [N]: f, [_]: m } },
          };
        },
      }
    );
  },
  z2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(a) {
          const { x: s, y: i, placement: o, rects: c, middlewareData: f } = a,
            { offset: m = 0, mainAxis: p = !0, crossAxis: y = !0 } = za(t, a),
            v = { x: s, y: i },
            b = ua(o),
            _ = rm(b);
          let N = v[_],
            j = v[b];
          const S = za(m, a),
            C =
              typeof S == "number"
                ? { mainAxis: S, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...S };
          if (p) {
            const k = _ === "y" ? "height" : "width",
              D = c.reference[_] - c.floating[k] + C.mainAxis,
              q = c.reference[_] + c.reference[k] - C.mainAxis;
            N < D ? (N = D) : N > q && (N = q);
          }
          if (y) {
            var A, O;
            const k = _ === "y" ? "width" : "height",
              D = Z0.has(qa(o)),
              q =
                c.reference[b] -
                c.floating[k] +
                ((D && ((A = f.offset) == null ? void 0 : A[b])) || 0) +
                (D ? 0 : C.crossAxis),
              X =
                c.reference[b] +
                c.reference[k] +
                (D ? 0 : ((O = f.offset) == null ? void 0 : O[b]) || 0) -
                (D ? C.crossAxis : 0);
            j < q ? (j = q) : j > X && (j = X);
          }
          return { [_]: N, [b]: j };
        },
      }
    );
  },
  q2 = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(a) {
          var s, i;
          const { placement: o, rects: c, platform: f, elements: m } = a,
            { apply: p = () => {}, ...y } = za(t, a),
            v = await f.detectOverflow(a, y),
            b = qa(o),
            _ = gi(o),
            N = ua(o) === "y",
            { width: j, height: S } = c.floating;
          let C, A;
          b === "top" || b === "bottom"
            ? ((C = b),
              (A =
                _ ===
                ((await (f.isRTL == null ? void 0 : f.isRTL(m.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((A = b), (C = _ === "end" ? "top" : "bottom"));
          const O = S - v.top - v.bottom,
            k = j - v.left - v.right,
            D = Ns(S - v[C], O),
            q = Ns(j - v[A], k),
            X = !a.middlewareData.shift;
          let Z = D,
            P = q;
          if (
            ((s = a.middlewareData.shift) != null && s.enabled.x && (P = k),
            (i = a.middlewareData.shift) != null && i.enabled.y && (Z = O),
            X && !_)
          ) {
            const ue = _n(v.left, 0),
              ve = _n(v.right, 0),
              te = _n(v.top, 0),
              oe = _n(v.bottom, 0);
            N
              ? (P =
                  j -
                  2 * (ue !== 0 || ve !== 0 ? ue + ve : _n(v.left, v.right)))
              : (Z =
                  S -
                  2 * (te !== 0 || oe !== 0 ? te + oe : _n(v.top, v.bottom)));
          }
          await p({ ...a, availableWidth: P, availableHeight: Z });
          const G = await f.getDimensions(m.floating);
          return j !== G.width || S !== G.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function su() {
  return typeof window < "u";
}
function vi(t) {
  return Y0(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Nn(t) {
  var a;
  return (
    (t == null || (a = t.ownerDocument) == null ? void 0 : a.defaultView) ||
    window
  );
}
function pa(t) {
  var a;
  return (a = (Y0(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : a.documentElement;
}
function Y0(t) {
  return su() ? t instanceof Node || t instanceof Nn(t).Node : !1;
}
function Wn(t) {
  return su() ? t instanceof Element || t instanceof Nn(t).Element : !1;
}
function Ha(t) {
  return su() ? t instanceof HTMLElement || t instanceof Nn(t).HTMLElement : !1;
}
function jx(t) {
  return !su() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof Nn(t).ShadowRoot;
}
function Il(t) {
  const { overflow: a, overflowX: s, overflowY: i, display: o } = Jn(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(a + i + s) &&
    o !== "inline" &&
    o !== "contents"
  );
}
function P2(t) {
  return /^(table|td|th)$/.test(vi(t));
}
function ru(t) {
  try {
    if (t.matches(":popover-open")) return !0;
  } catch {}
  try {
    return t.matches(":modal");
  } catch {
    return !1;
  }
}
const V2 = /transform|translate|scale|rotate|perspective|filter/,
  H2 = /paint|layout|strict|content/,
  Xs = (t) => !!t && t !== "none";
let Ff;
function om(t) {
  const a = Wn(t) ? Jn(t) : t;
  return (
    Xs(a.transform) ||
    Xs(a.translate) ||
    Xs(a.scale) ||
    Xs(a.rotate) ||
    Xs(a.perspective) ||
    (!cm() && (Xs(a.backdropFilter) || Xs(a.filter))) ||
    V2.test(a.willChange || "") ||
    H2.test(a.contain || "")
  );
}
function B2(t) {
  let a = Cs(t);
  for (; Ha(a) && !li(a); ) {
    if (om(a)) return a;
    if (ru(a)) return null;
    a = Cs(a);
  }
  return null;
}
function cm() {
  return (
    Ff == null &&
      (Ff =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    Ff
  );
}
function li(t) {
  return /^(html|body|#document)$/.test(vi(t));
}
function Jn(t) {
  return Nn(t).getComputedStyle(t);
}
function iu(t) {
  return Wn(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function Cs(t) {
  if (vi(t) === "html") return t;
  const a = t.assignedSlot || t.parentNode || (jx(t) && t.host) || pa(t);
  return jx(a) ? a.host : a;
}
function I0(t) {
  const a = Cs(t);
  return li(a)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : Ha(a) && Il(a)
    ? a
    : I0(a);
}
function Vl(t, a, s) {
  var i;
  a === void 0 && (a = []), s === void 0 && (s = !0);
  const o = I0(t),
    c = o === ((i = t.ownerDocument) == null ? void 0 : i.body),
    f = Nn(o);
  if (c) {
    const m = gh(f);
    return a.concat(
      f,
      f.visualViewport || [],
      Il(o) ? o : [],
      m && s ? Vl(m) : []
    );
  } else return a.concat(o, Vl(o, [], s));
}
function gh(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function $0(t) {
  const a = Jn(t);
  let s = parseFloat(a.width) || 0,
    i = parseFloat(a.height) || 0;
  const o = Ha(t),
    c = o ? t.offsetWidth : s,
    f = o ? t.offsetHeight : i,
    m = Dc(s) !== c || Dc(i) !== f;
  return m && ((s = c), (i = f)), { width: s, height: i, $: m };
}
function um(t) {
  return Wn(t) ? t : t.contextElement;
}
function ai(t) {
  const a = um(t);
  if (!Ha(a)) return da(1);
  const s = a.getBoundingClientRect(),
    { width: i, height: o, $: c } = $0(a);
  let f = (c ? Dc(s.width) : s.width) / i,
    m = (c ? Dc(s.height) : s.height) / o;
  return (
    (!f || !Number.isFinite(f)) && (f = 1),
    (!m || !Number.isFinite(m)) && (m = 1),
    { x: f, y: m }
  );
}
const F2 = da(0);
function X0(t) {
  const a = Nn(t);
  return !cm() || !a.visualViewport
    ? F2
    : { x: a.visualViewport.offsetLeft, y: a.visualViewport.offsetTop };
}
function K2(t, a, s) {
  return a === void 0 && (a = !1), !s || (a && s !== Nn(t)) ? !1 : a;
}
function tr(t, a, s, i) {
  a === void 0 && (a = !1), s === void 0 && (s = !1);
  const o = t.getBoundingClientRect(),
    c = um(t);
  let f = da(1);
  a && (i ? Wn(i) && (f = ai(i)) : (f = ai(t)));
  const m = K2(c, s, i) ? X0(c) : da(0);
  let p = (o.left + m.x) / f.x,
    y = (o.top + m.y) / f.y,
    v = o.width / f.x,
    b = o.height / f.y;
  if (c) {
    const _ = Nn(c),
      N = i && Wn(i) ? Nn(i) : i;
    let j = _,
      S = gh(j);
    for (; S && i && N !== j; ) {
      const C = ai(S),
        A = S.getBoundingClientRect(),
        O = Jn(S),
        k = A.left + (S.clientLeft + parseFloat(O.paddingLeft)) * C.x,
        D = A.top + (S.clientTop + parseFloat(O.paddingTop)) * C.y;
      (p *= C.x),
        (y *= C.y),
        (v *= C.x),
        (b *= C.y),
        (p += k),
        (y += D),
        (j = Nn(S)),
        (S = gh(j));
    }
  }
  return Uc({ width: v, height: b, x: p, y });
}
function lu(t, a) {
  const s = iu(t).scrollLeft;
  return a ? a.left + s : tr(pa(t)).left + s;
}
function W0(t, a) {
  const s = t.getBoundingClientRect(),
    i = s.left + a.scrollLeft - lu(t, s),
    o = s.top + a.scrollTop;
  return { x: i, y: o };
}
function Q2(t) {
  let { elements: a, rect: s, offsetParent: i, strategy: o } = t;
  const c = o === "fixed",
    f = pa(i),
    m = a ? ru(a.floating) : !1;
  if (i === f || (m && c)) return s;
  let p = { scrollLeft: 0, scrollTop: 0 },
    y = da(1);
  const v = da(0),
    b = Ha(i);
  if ((b || (!b && !c)) && ((vi(i) !== "body" || Il(f)) && (p = iu(i)), b)) {
    const N = tr(i);
    (y = ai(i)), (v.x = N.x + i.clientLeft), (v.y = N.y + i.clientTop);
  }
  const _ = f && !b && !c ? W0(f, p) : da(0);
  return {
    width: s.width * y.x,
    height: s.height * y.y,
    x: s.x * y.x - p.scrollLeft * y.x + v.x + _.x,
    y: s.y * y.y - p.scrollTop * y.y + v.y + _.y,
  };
}
function G2(t) {
  return Array.from(t.getClientRects());
}
function Z2(t) {
  const a = pa(t),
    s = iu(t),
    i = t.ownerDocument.body,
    o = _n(a.scrollWidth, a.clientWidth, i.scrollWidth, i.clientWidth),
    c = _n(a.scrollHeight, a.clientHeight, i.scrollHeight, i.clientHeight);
  let f = -s.scrollLeft + lu(t);
  const m = -s.scrollTop;
  return (
    Jn(i).direction === "rtl" && (f += _n(a.clientWidth, i.clientWidth) - o),
    { width: o, height: c, x: f, y: m }
  );
}
const Tx = 25;
function Y2(t, a) {
  const s = Nn(t),
    i = pa(t),
    o = s.visualViewport;
  let c = i.clientWidth,
    f = i.clientHeight,
    m = 0,
    p = 0;
  if (o) {
    (c = o.width), (f = o.height);
    const v = cm();
    (!v || (v && a === "fixed")) && ((m = o.offsetLeft), (p = o.offsetTop));
  }
  const y = lu(i);
  if (y <= 0) {
    const v = i.ownerDocument,
      b = v.body,
      _ = getComputedStyle(b),
      N =
        (v.compatMode === "CSS1Compat" &&
          parseFloat(_.marginLeft) + parseFloat(_.marginRight)) ||
        0,
      j = Math.abs(i.clientWidth - b.clientWidth - N);
    j <= Tx && (c -= j);
  } else y <= Tx && (c += y);
  return { width: c, height: f, x: m, y: p };
}
function I2(t, a) {
  const s = tr(t, !0, a === "fixed"),
    i = s.top + t.clientTop,
    o = s.left + t.clientLeft,
    c = Ha(t) ? ai(t) : da(1),
    f = t.clientWidth * c.x,
    m = t.clientHeight * c.y,
    p = o * c.x,
    y = i * c.y;
  return { width: f, height: m, x: p, y };
}
function Ox(t, a, s) {
  let i;
  if (a === "viewport") i = Y2(t, s);
  else if (a === "document") i = Z2(pa(t));
  else if (Wn(a)) i = I2(a, s);
  else {
    const o = X0(t);
    i = { x: a.x - o.x, y: a.y - o.y, width: a.width, height: a.height };
  }
  return Uc(i);
}
function J0(t, a) {
  const s = Cs(t);
  return s === a || !Wn(s) || li(s)
    ? !1
    : Jn(s).position === "fixed" || J0(s, a);
}
function $2(t, a) {
  const s = a.get(t);
  if (s) return s;
  let i = Vl(t, [], !1).filter((m) => Wn(m) && vi(m) !== "body"),
    o = null;
  const c = Jn(t).position === "fixed";
  let f = c ? Cs(t) : t;
  for (; Wn(f) && !li(f); ) {
    const m = Jn(f),
      p = om(f);
    !p && m.position === "fixed" && (o = null),
      (
        c
          ? !p && !o
          : (!p &&
              m.position === "static" &&
              !!o &&
              (o.position === "absolute" || o.position === "fixed")) ||
            (Il(f) && !p && J0(t, f))
      )
        ? (i = i.filter((v) => v !== f))
        : (o = m),
      (f = Cs(f));
  }
  return a.set(t, i), i;
}
function X2(t) {
  let { element: a, boundary: s, rootBoundary: i, strategy: o } = t;
  const f = [
      ...(s === "clippingAncestors"
        ? ru(a)
          ? []
          : $2(a, this._c)
        : [].concat(s)),
      i,
    ],
    m = Ox(a, f[0], o);
  let p = m.top,
    y = m.right,
    v = m.bottom,
    b = m.left;
  for (let _ = 1; _ < f.length; _++) {
    const N = Ox(a, f[_], o);
    (p = _n(N.top, p)),
      (y = Ns(N.right, y)),
      (v = Ns(N.bottom, v)),
      (b = _n(N.left, b));
  }
  return { width: y - b, height: v - p, x: b, y: p };
}
function W2(t) {
  const { width: a, height: s } = $0(t);
  return { width: a, height: s };
}
function J2(t, a, s) {
  const i = Ha(a),
    o = pa(a),
    c = s === "fixed",
    f = tr(t, !0, c, a);
  let m = { scrollLeft: 0, scrollTop: 0 };
  const p = da(0);
  function y() {
    p.x = lu(o);
  }
  if (i || (!i && !c))
    if (((vi(a) !== "body" || Il(o)) && (m = iu(a)), i)) {
      const N = tr(a, !0, c, a);
      (p.x = N.x + a.clientLeft), (p.y = N.y + a.clientTop);
    } else o && y();
  c && !i && o && y();
  const v = o && !i && !c ? W0(o, m) : da(0),
    b = f.left + m.scrollLeft - p.x - v.x,
    _ = f.top + m.scrollTop - p.y - v.y;
  return { x: b, y: _, width: f.width, height: f.height };
}
function Kf(t) {
  return Jn(t).position === "static";
}
function Rx(t, a) {
  if (!Ha(t) || Jn(t).position === "fixed") return null;
  if (a) return a(t);
  let s = t.offsetParent;
  return pa(t) === s && (s = s.ownerDocument.body), s;
}
function e1(t, a) {
  const s = Nn(t);
  if (ru(t)) return s;
  if (!Ha(t)) {
    let o = Cs(t);
    for (; o && !li(o); ) {
      if (Wn(o) && !Kf(o)) return o;
      o = Cs(o);
    }
    return s;
  }
  let i = Rx(t, a);
  for (; i && P2(i) && Kf(i); ) i = Rx(i, a);
  return i && li(i) && Kf(i) && !om(i) ? s : i || B2(t) || s;
}
const eO = async function (t) {
  const a = this.getOffsetParent || e1,
    s = this.getDimensions,
    i = await s(t.floating);
  return {
    reference: J2(t.reference, await a(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function tO(t) {
  return Jn(t).direction === "rtl";
}
const nO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Q2,
  getDocumentElement: pa,
  getClippingRect: X2,
  getOffsetParent: e1,
  getElementRects: eO,
  getClientRects: G2,
  getDimensions: W2,
  getScale: ai,
  isElement: Wn,
  isRTL: tO,
};
function t1(t, a) {
  return (
    t.x === a.x && t.y === a.y && t.width === a.width && t.height === a.height
  );
}
function aO(t, a) {
  let s = null,
    i;
  const o = pa(t);
  function c() {
    var m;
    clearTimeout(i), (m = s) == null || m.disconnect(), (s = null);
  }
  function f(m, p) {
    m === void 0 && (m = !1), p === void 0 && (p = 1), c();
    const y = t.getBoundingClientRect(),
      { left: v, top: b, width: _, height: N } = y;
    if ((m || a(), !_ || !N)) return;
    const j = xc(b),
      S = xc(o.clientWidth - (v + _)),
      C = xc(o.clientHeight - (b + N)),
      A = xc(v),
      k = {
        rootMargin: -j + "px " + -S + "px " + -C + "px " + -A + "px",
        threshold: _n(0, Ns(1, p)) || 1,
      };
    let D = !0;
    function q(X) {
      const Z = X[0].intersectionRatio;
      if (Z !== p) {
        if (!D) return f();
        Z
          ? f(!1, Z)
          : (i = setTimeout(() => {
              f(!1, 1e-7);
            }, 1e3));
      }
      Z === 1 && !t1(y, t.getBoundingClientRect()) && f(), (D = !1);
    }
    try {
      s = new IntersectionObserver(q, { ...k, root: o.ownerDocument });
    } catch {
      s = new IntersectionObserver(q, k);
    }
    s.observe(t);
  }
  return f(!0), c;
}
function sO(t, a, s, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: c = !0,
      elementResize: f = typeof ResizeObserver == "function",
      layoutShift: m = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = i,
    y = um(t),
    v = o || c ? [...(y ? Vl(y) : []), ...(a ? Vl(a) : [])] : [];
  v.forEach((A) => {
    o && A.addEventListener("scroll", s, { passive: !0 }),
      c && A.addEventListener("resize", s);
  });
  const b = y && m ? aO(y, s) : null;
  let _ = -1,
    N = null;
  f &&
    ((N = new ResizeObserver((A) => {
      let [O] = A;
      O &&
        O.target === y &&
        N &&
        a &&
        (N.unobserve(a),
        cancelAnimationFrame(_),
        (_ = requestAnimationFrame(() => {
          var k;
          (k = N) == null || k.observe(a);
        }))),
        s();
    })),
    y && !p && N.observe(y),
    a && N.observe(a));
  let j,
    S = p ? tr(t) : null;
  p && C();
  function C() {
    const A = tr(t);
    S && !t1(S, A) && s(), (S = A), (j = requestAnimationFrame(C));
  }
  return (
    s(),
    () => {
      var A;
      v.forEach((O) => {
        o && O.removeEventListener("scroll", s),
          c && O.removeEventListener("resize", s);
      }),
        b?.(),
        (A = N) == null || A.disconnect(),
        (N = null),
        p && cancelAnimationFrame(j);
    }
  );
}
const rO = L2,
  iO = U2,
  lO = k2,
  oO = q2,
  cO = M2,
  Ax = A2,
  uO = z2,
  dO = (t, a, s) => {
    const i = new Map(),
      o = { platform: nO, ...s },
      c = { ...o.platform, _c: i };
    return R2(t, a, { ...o, platform: c });
  };
var fO = typeof document < "u",
  hO = function () {},
  Ec = fO ? g.useLayoutEffect : hO;
function zc(t, a) {
  if (t === a) return !0;
  if (typeof t != typeof a) return !1;
  if (typeof t == "function" && t.toString() === a.toString()) return !0;
  let s, i, o;
  if (t && a && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((s = t.length), s !== a.length)) return !1;
      for (i = s; i-- !== 0; ) if (!zc(t[i], a[i])) return !1;
      return !0;
    }
    if (((o = Object.keys(t)), (s = o.length), s !== Object.keys(a).length))
      return !1;
    for (i = s; i-- !== 0; ) if (!{}.hasOwnProperty.call(a, o[i])) return !1;
    for (i = s; i-- !== 0; ) {
      const c = o[i];
      if (!(c === "_owner" && t.$$typeof) && !zc(t[c], a[c])) return !1;
    }
    return !0;
  }
  return t !== t && a !== a;
}
function n1(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kx(t, a) {
  const s = n1(t);
  return Math.round(a * s) / s;
}
function Qf(t) {
  const a = g.useRef(t);
  return (
    Ec(() => {
      a.current = t;
    }),
    a
  );
}
function mO(t) {
  t === void 0 && (t = {});
  const {
      placement: a = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
      elements: { reference: c, floating: f } = {},
      transform: m = !0,
      whileElementsMounted: p,
      open: y,
    } = t,
    [v, b] = g.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: a,
      middlewareData: {},
      isPositioned: !1,
    }),
    [_, N] = g.useState(i);
  zc(_, i) || N(i);
  const [j, S] = g.useState(null),
    [C, A] = g.useState(null),
    O = g.useCallback((W) => {
      W !== X.current && ((X.current = W), S(W));
    }, []),
    k = g.useCallback((W) => {
      W !== Z.current && ((Z.current = W), A(W));
    }, []),
    D = c || j,
    q = f || C,
    X = g.useRef(null),
    Z = g.useRef(null),
    P = g.useRef(v),
    G = p != null,
    ue = Qf(p),
    ve = Qf(o),
    te = Qf(y),
    oe = g.useCallback(() => {
      if (!X.current || !Z.current) return;
      const W = { placement: a, strategy: s, middleware: _ };
      ve.current && (W.platform = ve.current),
        dO(X.current, Z.current, W).then((fe) => {
          const E = { ...fe, isPositioned: te.current !== !1 };
          ee.current &&
            !zc(P.current, E) &&
            ((P.current = E),
            pi.flushSync(() => {
              b(E);
            }));
        });
    }, [_, a, s, ve, te]);
  Ec(() => {
    y === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), b((W) => ({ ...W, isPositioned: !1 })));
  }, [y]);
  const ee = g.useRef(!1);
  Ec(
    () => (
      (ee.current = !0),
      () => {
        ee.current = !1;
      }
    ),
    []
  ),
    Ec(() => {
      if ((D && (X.current = D), q && (Z.current = q), D && q)) {
        if (ue.current) return ue.current(D, q, oe);
        oe();
      }
    }, [D, q, oe, ue, G]);
  const de = g.useMemo(
      () => ({ reference: X, floating: Z, setReference: O, setFloating: k }),
      [O, k]
    ),
    L = g.useMemo(() => ({ reference: D, floating: q }), [D, q]),
    U = g.useMemo(() => {
      const W = { position: s, left: 0, top: 0 };
      if (!L.floating) return W;
      const fe = kx(L.floating, v.x),
        E = kx(L.floating, v.y);
      return m
        ? {
            ...W,
            transform: "translate(" + fe + "px, " + E + "px)",
            ...(n1(L.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: s, left: fe, top: E };
    }, [s, m, L.floating, v.x, v.y]);
  return g.useMemo(
    () => ({ ...v, update: oe, refs: de, elements: L, floatingStyles: U }),
    [v, oe, de, L, U]
  );
}
const pO = (t) => {
    function a(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(s) {
        const { element: i, padding: o } = typeof t == "function" ? t(s) : t;
        return i && a(i)
          ? i.current != null
            ? Ax({ element: i.current, padding: o }).fn(s)
            : {}
          : i
          ? Ax({ element: i, padding: o }).fn(s)
          : {};
      },
    };
  },
  yO = (t, a) => {
    const s = rO(t);
    return { name: s.name, fn: s.fn, options: [t, a] };
  },
  gO = (t, a) => {
    const s = iO(t);
    return { name: s.name, fn: s.fn, options: [t, a] };
  },
  vO = (t, a) => ({ fn: uO(t).fn, options: [t, a] }),
  xO = (t, a) => {
    const s = lO(t);
    return { name: s.name, fn: s.fn, options: [t, a] };
  },
  bO = (t, a) => {
    const s = oO(t);
    return { name: s.name, fn: s.fn, options: [t, a] };
  },
  wO = (t, a) => {
    const s = cO(t);
    return { name: s.name, fn: s.fn, options: [t, a] };
  },
  SO = (t, a) => {
    const s = pO(t);
    return { name: s.name, fn: s.fn, options: [t, a] };
  };
var _O = "Arrow",
  a1 = g.forwardRef((t, a) => {
    const { children: s, width: i = 10, height: o = 5, ...c } = t;
    return u.jsx(Ye.svg, {
      ...c,
      ref: a,
      width: i,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? s : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
a1.displayName = _O;
var NO = a1;
function s1(t) {
  const [a, s] = g.useState(void 0);
  return (
    Mt(() => {
      if (t) {
        s({ width: t.offsetWidth, height: t.offsetHeight });
        const i = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const c = o[0];
          let f, m;
          if ("borderBoxSize" in c) {
            const p = c.borderBoxSize,
              y = Array.isArray(p) ? p[0] : p;
            (f = y.inlineSize), (m = y.blockSize);
          } else (f = t.offsetWidth), (m = t.offsetHeight);
          s({ width: f, height: m });
        });
        return i.observe(t, { box: "border-box" }), () => i.unobserve(t);
      } else s(void 0);
    }, [t]),
    a
  );
}
var dm = "Popper",
  [r1, ou] = lr(dm),
  [CO, i1] = r1(dm),
  l1 = (t) => {
    const { __scopePopper: a, children: s } = t,
      [i, o] = g.useState(null);
    return u.jsx(CO, { scope: a, anchor: i, onAnchorChange: o, children: s });
  };
l1.displayName = dm;
var o1 = "PopperAnchor",
  c1 = g.forwardRef((t, a) => {
    const { __scopePopper: s, virtualRef: i, ...o } = t,
      c = i1(o1, s),
      f = g.useRef(null),
      m = ut(a, f),
      p = g.useRef(null);
    return (
      g.useEffect(() => {
        const y = p.current;
        (p.current = i?.current || f.current),
          y !== p.current && c.onAnchorChange(p.current);
      }),
      i ? null : u.jsx(Ye.div, { ...o, ref: m })
    );
  });
c1.displayName = o1;
var fm = "PopperContent",
  [EO, jO] = r1(fm),
  u1 = g.forwardRef((t, a) => {
    const {
        __scopePopper: s,
        side: i = "bottom",
        sideOffset: o = 0,
        align: c = "center",
        alignOffset: f = 0,
        arrowPadding: m = 0,
        avoidCollisions: p = !0,
        collisionBoundary: y = [],
        collisionPadding: v = 0,
        sticky: b = "partial",
        hideWhenDetached: _ = !1,
        updatePositionStrategy: N = "optimized",
        onPlaced: j,
        ...S
      } = t,
      C = i1(fm, s),
      [A, O] = g.useState(null),
      k = ut(a, (me) => O(me)),
      [D, q] = g.useState(null),
      X = s1(D),
      Z = X?.width ?? 0,
      P = X?.height ?? 0,
      G = i + (c !== "center" ? "-" + c : ""),
      ue =
        typeof v == "number"
          ? v
          : { top: 0, right: 0, bottom: 0, left: 0, ...v },
      ve = Array.isArray(y) ? y : [y],
      te = ve.length > 0,
      oe = { padding: ue, boundary: ve.filter(OO), altBoundary: te },
      {
        refs: ee,
        floatingStyles: de,
        placement: L,
        isPositioned: U,
        middlewareData: W,
      } = mO({
        strategy: "fixed",
        placement: G,
        whileElementsMounted: (...me) =>
          sO(...me, { animationFrame: N === "always" }),
        elements: { reference: C.anchor },
        middleware: [
          yO({ mainAxis: o + P, alignmentAxis: f }),
          p &&
            gO({
              mainAxis: !0,
              crossAxis: !1,
              limiter: b === "partial" ? vO() : void 0,
              ...oe,
            }),
          p && xO({ ...oe }),
          bO({
            ...oe,
            apply: ({
              elements: me,
              rects: Te,
              availableWidth: ke,
              availableHeight: Ie,
            }) => {
              const { width: Be, height: Je } = Te.reference,
                mt = me.floating.style;
              mt.setProperty("--radix-popper-available-width", `${ke}px`),
                mt.setProperty("--radix-popper-available-height", `${Ie}px`),
                mt.setProperty("--radix-popper-anchor-width", `${Be}px`),
                mt.setProperty("--radix-popper-anchor-height", `${Je}px`);
            },
          }),
          D && SO({ element: D, padding: m }),
          RO({ arrowWidth: Z, arrowHeight: P }),
          _ && wO({ strategy: "referenceHidden", ...oe }),
        ],
      }),
      [fe, E] = h1(L),
      I = Vn(j);
    Mt(() => {
      U && I?.();
    }, [U, I]);
    const le = W.arrow?.x,
      ae = W.arrow?.y,
      pe = W.arrow?.centerOffset !== 0,
      [Ne, he] = g.useState();
    return (
      Mt(() => {
        A && he(window.getComputedStyle(A).zIndex);
      }, [A]),
      u.jsx("div", {
        ref: ee.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...de,
          transform: U ? de.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ne,
          "--radix-popper-transform-origin": [
            W.transformOrigin?.x,
            W.transformOrigin?.y,
          ].join(" "),
          ...(W.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: u.jsx(EO, {
          scope: s,
          placedSide: fe,
          onArrowChange: q,
          arrowX: le,
          arrowY: ae,
          shouldHideArrow: pe,
          children: u.jsx(Ye.div, {
            "data-side": fe,
            "data-align": E,
            ...S,
            ref: k,
            style: { ...S.style, animation: U ? void 0 : "none" },
          }),
        }),
      })
    );
  });
u1.displayName = fm;
var d1 = "PopperArrow",
  TO = { top: "bottom", right: "left", bottom: "top", left: "right" },
  f1 = g.forwardRef(function (a, s) {
    const { __scopePopper: i, ...o } = a,
      c = jO(d1, i),
      f = TO[c.placedSide];
    return u.jsx("span", {
      ref: c.onArrowChange,
      style: {
        position: "absolute",
        left: c.arrowX,
        top: c.arrowY,
        [f]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[c.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[c.placedSide],
        visibility: c.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(NO, {
        ...o,
        ref: s,
        style: { ...o.style, display: "block" },
      }),
    });
  });
f1.displayName = d1;
function OO(t) {
  return t !== null;
}
var RO = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(a) {
    const { placement: s, rects: i, middlewareData: o } = a,
      f = o.arrow?.centerOffset !== 0,
      m = f ? 0 : t.arrowWidth,
      p = f ? 0 : t.arrowHeight,
      [y, v] = h1(s),
      b = { start: "0%", center: "50%", end: "100%" }[v],
      _ = (o.arrow?.x ?? 0) + m / 2,
      N = (o.arrow?.y ?? 0) + p / 2;
    let j = "",
      S = "";
    return (
      y === "bottom"
        ? ((j = f ? b : `${_}px`), (S = `${-p}px`))
        : y === "top"
        ? ((j = f ? b : `${_}px`), (S = `${i.floating.height + p}px`))
        : y === "right"
        ? ((j = `${-p}px`), (S = f ? b : `${N}px`))
        : y === "left" &&
          ((j = `${i.floating.width + p}px`), (S = f ? b : `${N}px`)),
      { data: { x: j, y: S } }
    );
  },
});
function h1(t) {
  const [a, s = "center"] = t.split("-");
  return [a, s];
}
var AO = l1,
  m1 = c1,
  p1 = u1,
  y1 = f1,
  [cu] = lr("Tooltip", [ou]),
  hm = ou(),
  g1 = "TooltipProvider",
  kO = 700,
  Mx = "tooltip.open",
  [MO, v1] = cu(g1),
  x1 = (t) => {
    const {
        __scopeTooltip: a,
        delayDuration: s = kO,
        skipDelayDuration: i = 300,
        disableHoverableContent: o = !1,
        children: c,
      } = t,
      f = g.useRef(!0),
      m = g.useRef(!1),
      p = g.useRef(0);
    return (
      g.useEffect(() => {
        const y = p.current;
        return () => window.clearTimeout(y);
      }, []),
      u.jsx(MO, {
        scope: a,
        isOpenDelayedRef: f,
        delayDuration: s,
        onOpen: g.useCallback(() => {
          window.clearTimeout(p.current), (f.current = !1);
        }, []),
        onClose: g.useCallback(() => {
          window.clearTimeout(p.current),
            (p.current = window.setTimeout(() => (f.current = !0), i));
        }, [i]),
        isPointerInTransitRef: m,
        onPointerInTransitChange: g.useCallback((y) => {
          m.current = y;
        }, []),
        disableHoverableContent: o,
        children: c,
      })
    );
  };
x1.displayName = g1;
var b1 = "Tooltip",
  [F3, $l] = cu(b1),
  vh = "TooltipTrigger",
  DO = g.forwardRef((t, a) => {
    const { __scopeTooltip: s, ...i } = t,
      o = $l(vh, s),
      c = v1(vh, s),
      f = hm(s),
      m = g.useRef(null),
      p = ut(a, m, o.onTriggerChange),
      y = g.useRef(!1),
      v = g.useRef(!1),
      b = g.useCallback(() => (y.current = !1), []);
    return (
      g.useEffect(
        () => () => document.removeEventListener("pointerup", b),
        [b]
      ),
      u.jsx(m1, {
        asChild: !0,
        ...f,
        children: u.jsx(Ye.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...i,
          ref: p,
          onPointerMove: qe(t.onPointerMove, (_) => {
            _.pointerType !== "touch" &&
              !v.current &&
              !c.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (v.current = !0));
          }),
          onPointerLeave: qe(t.onPointerLeave, () => {
            o.onTriggerLeave(), (v.current = !1);
          }),
          onPointerDown: qe(t.onPointerDown, () => {
            o.open && o.onClose(),
              (y.current = !0),
              document.addEventListener("pointerup", b, { once: !0 });
          }),
          onFocus: qe(t.onFocus, () => {
            y.current || o.onOpen();
          }),
          onBlur: qe(t.onBlur, o.onClose),
          onClick: qe(t.onClick, o.onClose),
        }),
      })
    );
  });
DO.displayName = vh;
var mm = "TooltipPortal",
  [LO, UO] = cu(mm, { forceMount: void 0 }),
  w1 = (t) => {
    const { __scopeTooltip: a, forceMount: s, children: i, container: o } = t,
      c = $l(mm, a);
    return u.jsx(LO, {
      scope: a,
      forceMount: s,
      children: u.jsx(Ts, {
        present: s || c.open,
        children: u.jsx(Gl, { asChild: !0, container: o, children: i }),
      }),
    });
  };
w1.displayName = mm;
var oi = "TooltipContent",
  S1 = g.forwardRef((t, a) => {
    const s = UO(oi, t.__scopeTooltip),
      { forceMount: i = s.forceMount, side: o = "top", ...c } = t,
      f = $l(oi, t.__scopeTooltip);
    return u.jsx(Ts, {
      present: i || f.open,
      children: f.disableHoverableContent
        ? u.jsx(_1, { side: o, ...c, ref: a })
        : u.jsx(zO, { side: o, ...c, ref: a }),
    });
  }),
  zO = g.forwardRef((t, a) => {
    const s = $l(oi, t.__scopeTooltip),
      i = v1(oi, t.__scopeTooltip),
      o = g.useRef(null),
      c = ut(a, o),
      [f, m] = g.useState(null),
      { trigger: p, onClose: y } = s,
      v = o.current,
      { onPointerInTransitChange: b } = i,
      _ = g.useCallback(() => {
        m(null), b(!1);
      }, [b]),
      N = g.useCallback(
        (j, S) => {
          const C = j.currentTarget,
            A = { x: j.clientX, y: j.clientY },
            O = BO(A, C.getBoundingClientRect()),
            k = FO(A, O),
            D = KO(S.getBoundingClientRect()),
            q = GO([...k, ...D]);
          m(q), b(!0);
        },
        [b]
      );
    return (
      g.useEffect(() => () => _(), [_]),
      g.useEffect(() => {
        if (p && v) {
          const j = (C) => N(C, v),
            S = (C) => N(C, p);
          return (
            p.addEventListener("pointerleave", j),
            v.addEventListener("pointerleave", S),
            () => {
              p.removeEventListener("pointerleave", j),
                v.removeEventListener("pointerleave", S);
            }
          );
        }
      }, [p, v, N, _]),
      g.useEffect(() => {
        if (f) {
          const j = (S) => {
            const C = S.target,
              A = { x: S.clientX, y: S.clientY },
              O = p?.contains(C) || v?.contains(C),
              k = !QO(A, f);
            O ? _() : k && (_(), y());
          };
          return (
            document.addEventListener("pointermove", j),
            () => document.removeEventListener("pointermove", j)
          );
        }
      }, [p, v, f, y, _]),
      u.jsx(_1, { ...t, ref: c })
    );
  }),
  [qO, PO] = cu(b1, { isInside: !1 }),
  VO = jE("TooltipContent"),
  _1 = g.forwardRef((t, a) => {
    const {
        __scopeTooltip: s,
        children: i,
        "aria-label": o,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        ...m
      } = t,
      p = $l(oi, s),
      y = hm(s),
      { onClose: v } = p;
    return (
      g.useEffect(
        () => (
          document.addEventListener(Mx, v),
          () => document.removeEventListener(Mx, v)
        ),
        [v]
      ),
      g.useEffect(() => {
        if (p.trigger) {
          const b = (_) => {
            _.target?.contains(p.trigger) && v();
          };
          return (
            window.addEventListener("scroll", b, { capture: !0 }),
            () => window.removeEventListener("scroll", b, { capture: !0 })
          );
        }
      }, [p.trigger, v]),
      u.jsx(Ql, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: (b) => b.preventDefault(),
        onDismiss: v,
        children: u.jsxs(p1, {
          "data-state": p.stateAttribute,
          ...y,
          ...m,
          ref: a,
          style: {
            ...m.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            u.jsx(VO, { children: i }),
            u.jsx(qO, {
              scope: s,
              isInside: !0,
              children: u.jsx(IE, {
                id: p.contentId,
                role: "tooltip",
                children: o || i,
              }),
            }),
          ],
        }),
      })
    );
  });
S1.displayName = oi;
var N1 = "TooltipArrow",
  HO = g.forwardRef((t, a) => {
    const { __scopeTooltip: s, ...i } = t,
      o = hm(s);
    return PO(N1, s).isInside ? null : u.jsx(y1, { ...o, ...i, ref: a });
  });
HO.displayName = N1;
function BO(t, a) {
  const s = Math.abs(a.top - t.y),
    i = Math.abs(a.bottom - t.y),
    o = Math.abs(a.right - t.x),
    c = Math.abs(a.left - t.x);
  switch (Math.min(s, i, o, c)) {
    case c:
      return "left";
    case o:
      return "right";
    case s:
      return "top";
    case i:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function FO(t, a, s = 5) {
  const i = [];
  switch (a) {
    case "top":
      i.push({ x: t.x - s, y: t.y + s }, { x: t.x + s, y: t.y + s });
      break;
    case "bottom":
      i.push({ x: t.x - s, y: t.y - s }, { x: t.x + s, y: t.y - s });
      break;
    case "left":
      i.push({ x: t.x + s, y: t.y - s }, { x: t.x + s, y: t.y + s });
      break;
    case "right":
      i.push({ x: t.x - s, y: t.y - s }, { x: t.x - s, y: t.y + s });
      break;
  }
  return i;
}
function KO(t) {
  const { top: a, right: s, bottom: i, left: o } = t;
  return [
    { x: o, y: a },
    { x: s, y: a },
    { x: s, y: i },
    { x: o, y: i },
  ];
}
function QO(t, a) {
  const { x: s, y: i } = t;
  let o = !1;
  for (let c = 0, f = a.length - 1; c < a.length; f = c++) {
    const m = a[c],
      p = a[f],
      y = m.x,
      v = m.y,
      b = p.x,
      _ = p.y;
    v > i != _ > i && s < ((b - y) * (i - v)) / (_ - v) + y && (o = !o);
  }
  return o;
}
function GO(t) {
  const a = t.slice();
  return (
    a.sort((s, i) =>
      s.x < i.x ? -1 : s.x > i.x ? 1 : s.y < i.y ? -1 : s.y > i.y ? 1 : 0
    ),
    ZO(a)
  );
}
function ZO(t) {
  if (t.length <= 1) return t.slice();
  const a = [];
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    for (; a.length >= 2; ) {
      const c = a[a.length - 1],
        f = a[a.length - 2];
      if ((c.x - f.x) * (o.y - f.y) >= (c.y - f.y) * (o.x - f.x)) a.pop();
      else break;
    }
    a.push(o);
  }
  a.pop();
  const s = [];
  for (let i = t.length - 1; i >= 0; i--) {
    const o = t[i];
    for (; s.length >= 2; ) {
      const c = s[s.length - 1],
        f = s[s.length - 2];
      if ((c.x - f.x) * (o.y - f.y) >= (c.y - f.y) * (o.x - f.x)) s.pop();
      else break;
    }
    s.push(o);
  }
  return (
    s.pop(),
    a.length === 1 && s.length === 1 && a[0].x === s[0].x && a[0].y === s[0].y
      ? a
      : a.concat(s)
  );
}
var YO = x1,
  IO = w1,
  C1 = S1;
const $O = YO,
  XO = g.forwardRef(({ className: t, sideOffset: a = 4, ...s }, i) =>
    u.jsx(IO, {
      children: u.jsx(C1, {
        ref: i,
        sideOffset: a,
        className: Ee(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
          t
        ),
        ...s,
      }),
    })
  );
XO.displayName = C1.displayName;
const WO = new Set([204, 205, 304]),
  JO = "application/json, application/problem+json";
let xh = null;
function Gf(t) {
  xh = t;
}
function E1(t) {
  return typeof Request < "u" && t instanceof Request;
}
function eR(t, a) {
  return a ? a.toUpperCase() : E1(t) ? t.method.toUpperCase() : "GET";
}
function tR(t) {
  return typeof URL < "u" && t instanceof URL;
}
function nR(t) {
  return typeof t == "string" ? t : tR(t) ? t.toString() : t.url;
}
function aR(...t) {
  const a = new Headers();
  for (const s of t)
    s &&
      new Headers(s).forEach((i, o) => {
        a.set(o, i);
      });
  return a;
}
function j1(t) {
  const a = t.get("content-type");
  return a ? a.split(";", 1)[0].trim().toLowerCase() : null;
}
function bh(t) {
  return t === "application/json" || !!t?.endsWith("+json");
}
function T1(t) {
  return !!(
    t &&
    (t.startsWith("text/") ||
      t === "application/xml" ||
      t === "text/xml" ||
      t.endsWith("+xml") ||
      t === "application/x-www-form-urlencoded")
  );
}
function O1(t, a) {
  return !!(
    a === "HEAD" ||
    WO.has(t.status) ||
    t.headers.get("content-length") === "0" ||
    t.body === null
  );
}
function R1(t) {
  return t.charCodeAt(0) === 65279 ? t.slice(1) : t;
}
function A1(t) {
  const a = t.trimStart();
  return a.startsWith("{") || a.startsWith("[");
}
function Sl(t, a) {
  if (!t || typeof t != "object") return;
  const s = t[a];
  if (typeof s != "string") return;
  const i = s.trim();
  return i === "" ? void 0 : i;
}
function sR(t, a = 300) {
  return t.length > a ? `${t.slice(0, a - 1)}…` : t;
}
function rR(t, a) {
  const s = `HTTP ${t.status} ${t.statusText}`;
  if (typeof a == "string") {
    const f = a.trim();
    return f ? `${s}: ${sR(f)}` : s;
  }
  const i = Sl(a, "title"),
    o = Sl(a, "detail"),
    c = Sl(a, "message") ?? Sl(a, "error_description") ?? Sl(a, "error");
  return i && o
    ? `${s}: ${i} — ${o}`
    : o
    ? `${s}: ${o}`
    : c
    ? `${s}: ${c}`
    : i
    ? `${s}: ${i}`
    : s;
}
class iR extends Error {
  name = "ApiError";
  status;
  statusText;
  data;
  headers;
  response;
  method;
  url;
  constructor(a, s, i) {
    super(rR(a, s)),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.status = a.status),
      (this.statusText = a.statusText),
      (this.data = s),
      (this.headers = a.headers),
      (this.response = a),
      (this.method = i.method),
      (this.url = a.url || i.url);
  }
}
class lR extends Error {
  name = "ResponseParseError";
  status;
  statusText;
  headers;
  response;
  method;
  url;
  rawBody;
  cause;
  constructor(a, s, i, o) {
    super(
      `Failed to parse response from ${o.method} ${a.url || o.url} (${
        a.status
      } ${a.statusText}) as JSON`
    ),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.status = a.status),
      (this.statusText = a.statusText),
      (this.headers = a.headers),
      (this.response = a),
      (this.method = o.method),
      (this.url = a.url || o.url),
      (this.rawBody = s),
      (this.cause = i);
  }
}
async function oR(t, a) {
  const s = await t.text(),
    i = R1(s);
  if (i.trim() === "") return null;
  try {
    return JSON.parse(i);
  } catch (o) {
    throw new lR(t, s, o, a);
  }
}
async function cR(t, a) {
  if (O1(t, a)) return null;
  const s = j1(t.headers);
  if (s && !bh(s) && !T1(s))
    return typeof t.blob == "function" ? t.blob() : t.text();
  const i = await t.text(),
    o = R1(i);
  if (o.trim() === "") return null;
  if (bh(s) || A1(o))
    try {
      return JSON.parse(o);
    } catch {
      return i;
    }
  return i;
}
function uR(t) {
  const a = j1(t.headers);
  return bh(a) ? "json" : T1(a) || a == null ? "text" : "blob";
}
async function dR(t, a, s) {
  if (O1(t, s.method)) return null;
  switch (a === "auto" ? uR(t) : a) {
    case "json":
      return oR(t, s);
    case "text": {
      const o = await t.text();
      return o === "" ? null : o;
    }
    case "blob":
      if (typeof t.blob != "function")
        throw new TypeError(
          'Blob responses are not supported in this runtime. Use responseType "json" or "text" instead.'
        );
      return t.blob();
  }
}
async function Xe(t, a = {}) {
  t = t;
  const { responseType: s = "auto", headers: i, ...o } = a,
    c = eR(t, o.method);
  if (o.body != null && (c === "GET" || c === "HEAD"))
    throw new TypeError(`customFetch: ${c} requests cannot have a body.`);
  const f = aR(E1(t) ? t.headers : void 0, i);
  if (
    (typeof o.body == "string" &&
      !f.has("content-type") &&
      A1(o.body) &&
      f.set("content-type", "application/json"),
    s === "json" && !f.has("accept") && f.set("accept", JO),
    xh && !f.has("authorization"))
  ) {
    const y = await xh();
    y && f.set("authorization", `Bearer ${y}`);
  }
  const m = { method: c, url: nR(t) },
    p = await fetch(t, { ...o, method: c, headers: f });
  if (!p.ok) {
    const y = await cR(p, c);
    throw new iR(p, y, m);
  }
  return await dR(p, s, m);
}
const fR = () => "/api/auth/login",
  hR = async (t, a) =>
    Xe(fR(), {
      ...a,
      method: "POST",
      headers: { "Content-Type": "application/json", ...a?.headers },
      body: JSON.stringify(t),
    }),
  mR = (t) => {
    const a = ["login"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return hR(f, i);
      },
      ...s,
    };
  },
  pR = (t) => vt(mR(t)),
  yR = () => "/api/auth/register",
  gR = async (t, a) =>
    Xe(yR(), {
      ...a,
      method: "POST",
      headers: { "Content-Type": "application/json", ...a?.headers },
      body: JSON.stringify(t),
    }),
  vR = (t) => {
    const a = ["register"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return gR(f, i);
      },
      ...s,
    };
  },
  xR = (t) => vt(vR(t)),
  bR = () => "/api/auth/forgot-password",
  wR = async (t, a) =>
    Xe(bR(), {
      ...a,
      method: "POST",
      headers: { "Content-Type": "application/json", ...a?.headers },
      body: JSON.stringify(t),
    }),
  SR = (t) => {
    const a = ["forgotPassword"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return wR(f, i);
      },
      ...s,
    };
  },
  _R = (t) => vt(SR(t)),
  NR = () => "/api/auth/change-password",
  CR = async (t, a) =>
    Xe(NR(), {
      ...a,
      method: "POST",
      headers: { "Content-Type": "application/json", ...a?.headers },
      body: JSON.stringify(t),
    }),
  ER = (t) => {
    const a = ["changePassword"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return CR(f, i);
      },
      ...s,
    };
  },
  jR = (t) => vt(ER(t)),
  TR = (t) => {
    const a = new URLSearchParams();
    Object.entries({}).forEach(([i, o]) => {
      o !== void 0 && a.append(i, o === null ? "null" : o.toString());
    });
    const s = a.toString();
    return s.length > 0 ? `/api/users?${s}` : "/api/users";
  },
  OR = async (t, a) => Xe(TR(), { ...a, method: "GET" }),
  RR = (t) => ["/api/users"],
  AR = (t, a) => {
    const { query: s, request: i } = {};
    return {
      queryKey: s?.queryKey ?? RR(),
      queryFn: ({ signal: f }) => OR(t, { signal: f, ...i }),
      ...s,
    };
  };
function pm(t, a) {
  const s = AR(t);
  return { ...na(s), queryKey: s.queryKey };
}
const kR = (t) => `/api/users/${t}`,
  MR = async (t, a, s) =>
    Xe(kR(t), {
      ...s,
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...s?.headers },
      body: JSON.stringify(a),
    }),
  DR = (t) => {
    const a = ["updateUser"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f, data: m } = c ?? {};
        return MR(f, m, i);
      },
      ...s,
    };
  },
  LR = (t) => vt(DR(t)),
  UR = (t) => `/api/users/${t}`,
  zR = async (t, a) => Xe(UR(t), { ...a, method: "DELETE" }),
  qR = (t) => {
    const a = ["deleteUser"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f } = c ?? {};
        return zR(f, i);
      },
      ...s,
    };
  },
  PR = (t) => vt(qR(t)),
  VR = (t) => `/api/users/${t}/reset-password`,
  HR = async (t, a, s) =>
    Xe(VR(t), {
      ...s,
      method: "POST",
      headers: { "Content-Type": "application/json", ...s?.headers },
      body: JSON.stringify(a),
    }),
  BR = (t) => {
    const a = ["adminResetUserPassword"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f, data: m } = c ?? {};
        return HR(f, m, i);
      },
      ...s,
    };
  },
  FR = (t) => vt(BR(t)),
  KR = (t) => {
    const a = new URLSearchParams();
    Object.entries({}).forEach(([i, o]) => {
      o !== void 0 && a.append(i, o === null ? "null" : o.toString());
    });
    const s = a.toString();
    return s.length > 0 ? `/api/courses?${s}` : "/api/courses";
  },
  QR = async (t, a) => Xe(KR(), { ...a, method: "GET" }),
  GR = (t) => ["/api/courses"],
  ZR = (t, a) => {
    const { query: s, request: i } = {};
    return {
      queryKey: s?.queryKey ?? GR(),
      queryFn: ({ signal: f }) => QR(t, { signal: f, ...i }),
      ...s,
    };
  };
function YR(t, a) {
  const s = ZR(t);
  return { ...na(s), queryKey: s.queryKey };
}
const IR = () => "/api/courses",
  $R = async (t, a) =>
    Xe(IR(), {
      ...a,
      method: "POST",
      headers: { "Content-Type": "application/json", ...a?.headers },
      body: JSON.stringify(t),
    }),
  XR = (t) => {
    const a = ["createCourse"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return $R(f, i);
      },
      ...s,
    };
  },
  WR = (t) => vt(XR(t)),
  JR = (t) => `/api/courses/${t}`,
  eA = async (t, a, s) =>
    Xe(JR(t), {
      ...s,
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...s?.headers },
      body: JSON.stringify(a),
    }),
  tA = (t) => {
    const a = ["updateCourse"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f, data: m } = c ?? {};
        return eA(f, m, i);
      },
      ...s,
    };
  },
  nA = (t) => vt(tA(t)),
  aA = (t) => `/api/courses/${t}`,
  sA = async (t, a) => Xe(aA(t), { ...a, method: "DELETE" }),
  rA = (t) => {
    const a = ["deleteCourse"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f } = c ?? {};
        return sA(f, i);
      },
      ...s,
    };
  },
  iA = (t) => vt(rA(t)),
  lA = (t) => `/api/courses/${t}/assign`,
  oA = async (t, a, s) =>
    Xe(lA(t), {
      ...s,
      method: "POST",
      headers: { "Content-Type": "application/json", ...s?.headers },
      body: JSON.stringify(a),
    }),
  cA = (t) => {
    const a = ["assignCourse"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f, data: m } = c ?? {};
        return oA(f, m, i);
      },
      ...s,
    };
  },
  uA = (t) => vt(cA(t)),
  dA = (t) => `/api/courses/${t}/progress`,
  fA = async (t, a, s) =>
    Xe(dA(t), {
      ...s,
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...s?.headers },
      body: JSON.stringify(a),
    }),
  hA = (t) => {
    const a = ["updateCourseProgress"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f, data: m } = c ?? {};
        return fA(f, m, i);
      },
      ...s,
    };
  },
  mA = (t) => vt(hA(t)),
  pA = (t) => {
    const a = new URLSearchParams();
    Object.entries({}).forEach(([i, o]) => {
      o !== void 0 && a.append(i, o === null ? "null" : o.toString());
    });
    const s = a.toString();
    return s.length > 0 ? `/api/tasks?${s}` : "/api/tasks";
  },
  yA = async (t, a) => Xe(pA(), { ...a, method: "GET" }),
  gA = (t) => ["/api/tasks"],
  vA = (t, a) => {
    const { query: s, request: i } = {};
    return {
      queryKey: s?.queryKey ?? gA(),
      queryFn: ({ signal: f }) => yA(t, { signal: f, ...i }),
      ...s,
    };
  };
function xA(t, a) {
  const s = vA(t);
  return { ...na(s), queryKey: s.queryKey };
}
const bA = () => "/api/tasks",
  wA = async (t, a) =>
    Xe(bA(), {
      ...a,
      method: "POST",
      headers: { "Content-Type": "application/json", ...a?.headers },
      body: JSON.stringify(t),
    }),
  SA = (t) => {
    const a = ["createTask"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return wA(f, i);
      },
      ...s,
    };
  },
  _A = (t) => vt(SA(t)),
  NA = (t) => `/api/tasks/${t}`,
  CA = async (t, a, s) =>
    Xe(NA(t), {
      ...s,
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...s?.headers },
      body: JSON.stringify(a),
    }),
  EA = (t) => {
    const a = ["updateTask"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f, data: m } = c ?? {};
        return CA(f, m, i);
      },
      ...s,
    };
  },
  jA = (t) => vt(EA(t)),
  TA = (t) => `/api/tasks/${t}`,
  OA = async (t, a) => Xe(TA(t), { ...a, method: "DELETE" }),
  RA = (t) => {
    const a = ["deleteTask"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f } = c ?? {};
        return OA(f, i);
      },
      ...s,
    };
  },
  AA = (t) => vt(RA(t)),
  kA = (t) => `/api/tasks/${t}/complete`,
  MA = async (t, a) => Xe(kA(t), { ...a, method: "POST" }),
  DA = (t) => {
    const a = ["completeTask"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f } = c ?? {};
        return MA(f, i);
      },
      ...s,
    };
  },
  LA = (t) => vt(DA(t)),
  UA = (t) => {
    const a = new URLSearchParams();
    Object.entries({}).forEach(([i, o]) => {
      o !== void 0 && a.append(i, o === null ? "null" : o.toString());
    });
    const s = a.toString();
    return s.length > 0 ? `/api/learning-logs?${s}` : "/api/learning-logs";
  },
  zA = async (t, a) => Xe(UA(), { ...a, method: "GET" }),
  qA = (t) => ["/api/learning-logs"],
  PA = (t, a) => {
    const { query: s, request: i } = {};
    return {
      queryKey: s?.queryKey ?? qA(),
      queryFn: ({ signal: f }) => zA(t, { signal: f, ...i }),
      ...s,
    };
  };
function VA(t, a) {
  const s = PA(t);
  return { ...na(s), queryKey: s.queryKey };
}
const HA = () => "/api/learning-logs",
  BA = async (t, a) =>
    Xe(HA(), {
      ...a,
      method: "POST",
      headers: { "Content-Type": "application/json", ...a?.headers },
      body: JSON.stringify(t),
    }),
  FA = (t) => {
    const a = ["createLearningLog"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return BA(f, i);
      },
      ...s,
    };
  },
  KA = (t) => vt(FA(t)),
  QA = (t) => `/api/learning-logs/${t}`,
  GA = async (t, a) => Xe(QA(t), { ...a, method: "DELETE" }),
  ZA = (t) => {
    const a = ["deleteLearningLog"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f } = c ?? {};
        return GA(f, i);
      },
      ...s,
    };
  },
  YA = (t) => vt(ZA(t)),
  IA = (t) => {
    const a = new URLSearchParams();
    Object.entries({}).forEach(([i, o]) => {
      o !== void 0 && a.append(i, o === null ? "null" : o.toString());
    });
    const s = a.toString();
    return s.length > 0 ? `/api/excuses?${s}` : "/api/excuses";
  },
  $A = async (t, a) => Xe(IA(), { ...a, method: "GET" }),
  XA = (t) => ["/api/excuses"],
  WA = (t, a) => {
    const { query: s, request: i } = {};
    return {
      queryKey: s?.queryKey ?? XA(),
      queryFn: ({ signal: f }) => $A(t, { signal: f, ...i }),
      ...s,
    };
  };
function JA(t, a) {
  const s = WA(t);
  return { ...na(s), queryKey: s.queryKey };
}
const ek = () => "/api/excuses",
  tk = async (t, a) =>
    Xe(ek(), {
      ...a,
      method: "POST",
      headers: { "Content-Type": "application/json", ...a?.headers },
      body: JSON.stringify(t),
    }),
  nk = (t) => {
    const a = ["submitExcuse"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { data: f } = c ?? {};
        return tk(f, i);
      },
      ...s,
    };
  },
  ak = (t) => vt(nk(t)),
  sk = (t) => `/api/excuses/${t}/review`,
  rk = async (t, a, s) =>
    Xe(sk(t), {
      ...s,
      method: "POST",
      headers: { "Content-Type": "application/json", ...s?.headers },
      body: JSON.stringify(a),
    }),
  ik = (t) => {
    const a = ["reviewExcuse"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f, data: m } = c ?? {};
        return rk(f, m, i);
      },
      ...s,
    };
  },
  lk = (t) => vt(ik(t)),
  ok = (t) => {
    const a = new URLSearchParams();
    Object.entries({}).forEach(([i, o]) => {
      o !== void 0 && a.append(i, o === null ? "null" : o.toString());
    });
    const s = a.toString();
    return s.length > 0 ? `/api/notifications?${s}` : "/api/notifications";
  },
  ck = async (t, a) => Xe(ok(), { ...a, method: "GET" }),
  uk = (t) => ["/api/notifications"],
  dk = (t, a) => {
    const { query: s, request: i } = {};
    return {
      queryKey: s?.queryKey ?? uk(),
      queryFn: ({ signal: f }) => ck(t, { signal: f, ...i }),
      ...s,
    };
  };
function k1(t, a) {
  const s = dk(t);
  return { ...na(s), queryKey: s.queryKey };
}
const fk = (t) => `/api/notifications/${t}/read`,
  hk = async (t, a) => Xe(fk(t), { ...a, method: "POST" }),
  mk = (t) => {
    const a = ["markNotificationRead"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f } = c ?? {};
        return hk(f, i);
      },
      ...s,
    };
  },
  pk = (t) => vt(mk(t)),
  yk = () => "/api/notifications/read-all",
  gk = async (t) => Xe(yk(), { ...t, method: "POST" }),
  vk = (t) => {
    const a = ["markAllNotificationsRead"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return { mutationFn: () => gk(i), ...s };
  },
  xk = (t) => vt(vk(t)),
  bk = () => "/api/approvals/registrations",
  wk = async (t) => Xe(bk(), { ...t, method: "GET" }),
  Sk = () => ["/api/approvals/registrations"],
  _k = (t) => {
    const { query: a, request: s } = t ?? {};
    return {
      queryKey: a?.queryKey ?? Sk(),
      queryFn: ({ signal: c }) => wk({ signal: c, ...s }),
      ...a,
    };
  };
function M1(t) {
  const a = _k(t);
  return { ...na(a), queryKey: a.queryKey };
}
const Nk = (t) => `/api/approvals/registrations/${t}`,
  Ck = async (t, a, s) =>
    Xe(Nk(t), {
      ...s,
      method: "POST",
      headers: { "Content-Type": "application/json", ...s?.headers },
      body: JSON.stringify(a),
    }),
  Ek = (t) => {
    const a = ["reviewRegistration"],
      { mutation: s, request: i } = t
        ? t.mutation && "mutationKey" in t.mutation && t.mutation.mutationKey
          ? t
          : { ...t, mutation: { ...t.mutation, mutationKey: a } }
        : { mutation: { mutationKey: a }, request: void 0 };
    return {
      mutationFn: (c) => {
        const { id: f, data: m } = c ?? {};
        return Ck(f, m, i);
      },
      ...s,
    };
  },
  jk = (t) => vt(Ek(t)),
  Tk = () => "/api/dashboard/stats",
  Ok = async (t) => Xe(Tk(), { ...t, method: "GET" }),
  Rk = () => ["/api/dashboard/stats"],
  Ak = (t) => {
    const { query: a, request: s } = {};
    return {
      queryKey: a?.queryKey ?? Rk(),
      queryFn: ({ signal: c }) => Ok({ signal: c, ...s }),
      ...a,
    };
  };
function kk(t) {
  const a = Ak();
  return { ...na(a), queryKey: a.queryKey };
}
const Mk = (t) => {
    const a = new URLSearchParams();
    Object.entries({}).forEach(([i, o]) => {
      o !== void 0 && a.append(i, o === null ? "null" : o.toString());
    });
    const s = a.toString();
    return s.length > 0
      ? `/api/dashboard/activity?${s}`
      : "/api/dashboard/activity";
  },
  Dk = async (t, a) => Xe(Mk(), { ...a, method: "GET" }),
  Lk = (t) => ["/api/dashboard/activity"],
  Uk = (t, a) => {
    const { query: s, request: i } = {};
    return {
      queryKey: s?.queryKey ?? Lk(),
      queryFn: ({ signal: f }) => Dk(t, { signal: f, ...i }),
      ...s,
    };
  };
function zk(t, a) {
  const s = Uk(t);
  return { ...na(s), queryKey: s.queryKey };
}
const qk = () => "/api/dashboard/member-stats",
  Pk = async (t) => Xe(qk(), { ...t, method: "GET" }),
  Vk = () => ["/api/dashboard/member-stats"],
  Hk = (t) => {
    const { query: a, request: s } = {};
    return {
      queryKey: a?.queryKey ?? Vk(),
      queryFn: ({ signal: c }) => Pk({ signal: c, ...s }),
      ...a,
    };
  };
function Bk(t) {
  const a = Hk();
  return { ...na(a), queryKey: a.queryKey };
}
const Fk = () => "/api/dashboard/my-stats",
  Kk = async (t) => Xe(Fk(), { ...t, method: "GET" }),
  Qk = () => ["/api/dashboard/my-stats"],
  Gk = (t) => {
    const { query: a, request: s } = {};
    return {
      queryKey: a?.queryKey ?? Qk(),
      queryFn: ({ signal: c }) => Kk({ signal: c, ...s }),
      ...a,
    };
  };
function Zk(t) {
  const a = Gk();
  return { ...na(a), queryKey: a.queryKey };
}
const D1 = g.createContext({
  user: null,
  token: null,
  isLoading: !0,
  login: () => {},
  logout: () => {},
  setUser: () => {},
});
function Yk({ children: t }) {
  const [a, s] = g.useState(() => localStorage.getItem("it-qan-token")),
    [i, o] = g.useState(() => {
      const v = localStorage.getItem("it-qan-user");
      if (v)
        try {
          return JSON.parse(v);
        } catch {
          return null;
        }
      return null;
    }),
    [c, f] = g.useState(!1);
  g.useEffect(() => {
    Gf(() => localStorage.getItem("it-qan-token"));
  }, []);
  const m = (v, b) => {
      s(v),
        o(b),
        localStorage.setItem("it-qan-token", v),
        localStorage.setItem("it-qan-user", JSON.stringify(b)),
        Gf(() => v);
    },
    p = () => {
      s(null),
        o(null),
        localStorage.removeItem("it-qan-token"),
        localStorage.removeItem("it-qan-user"),
        Gf(null);
    },
    y = (v) => {
      o(v), localStorage.setItem("it-qan-user", JSON.stringify(v));
    };
  return u.jsx(D1.Provider, {
    value: { user: i, token: a, isLoading: c, login: m, logout: p, setUser: y },
    children: t,
  });
}
const ya = () => g.useContext(D1),
  L1 = g.createContext({ theme: "dark", toggleTheme: () => {} });
function Ik({ children: t }) {
  const [a, s] = g.useState(
    () => localStorage.getItem("it-qan-theme") ?? "dark"
  );
  g.useEffect(() => {
    const o = document.documentElement;
    a === "dark" ? o.classList.add("dark") : o.classList.remove("dark"),
      localStorage.setItem("it-qan-theme", a);
  }, [a]);
  const i = () => s((o) => (o === "dark" ? "light" : "dark"));
  return u.jsx(L1.Provider, {
    value: { theme: a, toggleTheme: i },
    children: t,
  });
}
const $k = () => g.useContext(L1),
  Cn = g.forwardRef(({ className: t, ...a }, s) =>
    u.jsx("div", {
      ref: s,
      className: Ee("rounded-xl border bg-card text-card-foreground shadow", t),
      ...a,
    })
  );
Cn.displayName = "Card";
const uu = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx("div", {
    ref: s,
    className: Ee("flex flex-col space-y-1.5 p-6", t),
    ...a,
  })
);
uu.displayName = "CardHeader";
const du = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx("div", {
    ref: s,
    className: Ee("font-semibold leading-none tracking-tight", t),
    ...a,
  })
);
du.displayName = "CardTitle";
const Xk = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx("div", {
    ref: s,
    className: Ee("text-sm text-muted-foreground", t),
    ...a,
  })
);
Xk.displayName = "CardDescription";
const En = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx("div", { ref: s, className: Ee("p-6 pt-0", t), ...a })
);
En.displayName = "CardContent";
const Wk = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx("div", { ref: s, className: Ee("flex items-center p-6 pt-0", t), ...a })
);
Wk.displayName = "CardFooter";
function Jk() {
  return u.jsx("div", {
    className:
      "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: u.jsx(Cn, {
      className: "w-full max-w-md mx-4",
      children: u.jsxs(En, {
        className: "pt-6",
        children: [
          u.jsxs("div", {
            className: "flex mb-4 gap-2",
            children: [
              u.jsx(ii, { className: "h-8 w-8 text-red-500" }),
              u.jsx("h1", {
                className: "text-2xl font-bold text-gray-900",
                children: "404 Page Not Found",
              }),
            ],
          }),
          u.jsx("p", {
            className: "mt-4 text-sm text-gray-600",
            children: "Did you forget to add the page to the router?",
          }),
        ],
      }),
    }),
  });
}
var Xl = (t) => t.type === "checkbox",
  Js = (t) => t instanceof Date,
  tn = (t) => t == null;
const U1 = (t) => typeof t == "object";
var _t = (t) => !tn(t) && !Array.isArray(t) && U1(t) && !Js(t),
  z1 = (t) =>
    _t(t) && t.target ? (Xl(t.target) ? t.target.checked : t.target.value) : t,
  q1 = (t, a) =>
    a
      .split(".")
      .some((s, i, o) => !isNaN(Number(s)) && t.has(o.slice(0, i).join("."))),
  eM = (t) => {
    const a = t.constructor && t.constructor.prototype;
    return _t(a) && a.hasOwnProperty("isPrototypeOf");
  },
  ym =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Et(t) {
  if (t instanceof Date) return new Date(t);
  const a = typeof FileList < "u" && t instanceof FileList;
  if (ym && (t instanceof Blob || a)) return t;
  const s = Array.isArray(t);
  if (!s && !(_t(t) && eM(t))) return t;
  const i = s ? [] : Object.create(Object.getPrototypeOf(t));
  for (const o in t)
    Object.prototype.hasOwnProperty.call(t, o) && (i[o] = Et(t[o]));
  return i;
}
var fu = (t) => /^\w*$/.test(t),
  ht = (t) => t === void 0,
  gm = (t) => (Array.isArray(t) ? t.filter(Boolean) : []),
  vm = (t) => gm(t.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ce = (t, a, s) => {
    if (!a || !_t(t)) return s;
    const o = (fu(a) ? [a] : vm(a)).reduce(
      (c, f) => (tn(c) ? void 0 : c[f]),
      t
    );
    return ht(o) || o === t ? (ht(t[a]) ? s : t[a]) : o;
  },
  gn = (t) => typeof t == "boolean",
  $t = (t) => typeof t == "function",
  rt = (t, a, s) => {
    let i = -1;
    const o = fu(a) ? [a] : vm(a),
      c = o.length,
      f = c - 1;
    for (; ++i < c; ) {
      const m = o[i];
      let p = s;
      if (i !== f) {
        const y = t[m];
        p = _t(y) || Array.isArray(y) ? y : isNaN(+o[i + 1]) ? {} : [];
      }
      if (m === "__proto__" || m === "constructor" || m === "prototype") return;
      (t[m] = p), (t = t[m]);
    }
  };
const ys = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change",
    SUBMIT: "submit",
    TRIGGER: "trigger",
    VALID: "valid",
  },
  Yn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Gn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  Zf = "form",
  P1 = "root",
  xm = je.createContext(null);
xm.displayName = "HookFormControlContext";
const bm = () => je.useContext(xm);
var V1 = (t, a, s, i = !0) => {
  const o = {};
  for (const c in t)
    Object.defineProperty(o, c, {
      get: () => {
        const f = c;
        return (
          a._proxyFormState[f] !== Yn.all &&
            (a._proxyFormState[f] = !i || Yn.all),
          s && (s[f] = !0),
          t[f]
        );
      },
    });
  return o;
};
const wm = typeof window < "u" ? je.useLayoutEffect : je.useEffect;
function tM(t) {
  const a = bm(),
    { control: s = a, disabled: i, name: o, exact: c } = t || {},
    [f, m] = je.useState(() => ({
      ...s._formState,
      defaultValues: s._defaultValues,
    })),
    p = je.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    wm(
      () =>
        s._subscribe({
          name: o,
          formState: p.current,
          exact: c,
          callback: (y) => {
            !i && m({ ...s._formState, ...y, defaultValues: s._defaultValues });
          },
        }),
      [o, i, c]
    ),
    je.useEffect(() => {
      p.current.isValid && s._setValid(!0);
    }, [s]),
    je.useMemo(() => V1(f, s, p.current, !1), [f, s])
  );
}
var Xt = (t) => typeof t == "string",
  wh = (t, a, s, i, o) =>
    Xt(t)
      ? (i && a.watch.add(t), ce(s, t, o))
      : Array.isArray(t)
      ? t.map((c) => (i && a.watch.add(c), ce(s, c)))
      : (i && (a.watchAll = !0), s),
  Sh = (t) => tn(t) || !U1(t);
function vn(t, a, s = new WeakSet()) {
  if (t === a) return !0;
  if (Sh(t) || Sh(a)) return Object.is(t, a);
  if (Js(t) && Js(a)) return Object.is(t.getTime(), a.getTime());
  const i = Object.keys(t),
    o = Object.keys(a);
  if (i.length !== o.length) return !1;
  if (s.has(t) || s.has(a)) return !0;
  s.add(t), s.add(a);
  for (const c of i) {
    const f = t[c];
    if (!(c in a)) return !1;
    if (c !== "ref") {
      const m = a[c];
      if (
        (Js(f) && Js(m)) ||
        ((_t(f) || Array.isArray(f)) && (_t(m) || Array.isArray(m)))
          ? !vn(f, m, s)
          : !Object.is(f, m)
      )
        return !1;
    }
  }
  return !0;
}
function nM(t) {
  const a = bm(),
    {
      control: s = a,
      name: i,
      defaultValue: o,
      disabled: c,
      exact: f,
      compute: m,
    } = t || {},
    p = je.useRef(o),
    y = je.useRef(m),
    v = je.useRef(void 0),
    b = je.useRef(s),
    _ = je.useRef(i);
  y.current = m;
  const [N, j] = je.useState(() => {
      const D = s._getWatch(i, p.current);
      return y.current ? y.current(D) : D;
    }),
    S = je.useCallback(
      (D) => {
        const q = wh(i, s._names, D || s._formValues, !1, p.current);
        return y.current ? y.current(q) : q;
      },
      [s._formValues, s._names, i]
    ),
    C = je.useCallback(
      (D) => {
        if (!c) {
          const q = wh(i, s._names, D || s._formValues, !1, p.current);
          if (y.current) {
            const X = y.current(q);
            vn(X, v.current) || (j(X), (v.current = X));
          } else j(q);
        }
      },
      [s._formValues, s._names, c, i]
    );
  wm(
    () => (
      (b.current !== s || !vn(_.current, i)) &&
        ((b.current = s), (_.current = i), C()),
      s._subscribe({
        name: i,
        formState: { values: !0 },
        exact: f,
        callback: (D) => {
          C(D.values);
        },
      })
    ),
    [s, f, i, C]
  ),
    je.useEffect(() => s._removeUnmounted());
  const A = b.current !== s,
    O = _.current,
    k = je.useMemo(() => {
      if (c) return null;
      const D = !A && !vn(O, i);
      return A || D ? S() : null;
    }, [c, A, i, O, S]);
  return k !== null ? k : N;
}
function aM(t) {
  const a = bm(),
    {
      name: s,
      disabled: i,
      control: o = a,
      shouldUnregister: c,
      defaultValue: f,
      exact: m = !0,
    } = t,
    p = q1(o._names.array, s),
    y = je.useMemo(
      () => ce(o._formValues, s, ce(o._defaultValues, s, f)),
      [o, s, f]
    ),
    v = nM({ control: o, name: s, defaultValue: y, exact: m }),
    b = tM({ control: o, name: s, exact: m }),
    _ = je.useRef(t),
    N = je.useRef(
      o.register(s, {
        ...t.rules,
        value: v,
        ...(gn(t.disabled) ? { disabled: t.disabled } : {}),
      })
    );
  _.current = t;
  const j = je.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!ce(b.errors, s) },
            isDirty: { enumerable: !0, get: () => !!ce(b.dirtyFields, s) },
            isTouched: { enumerable: !0, get: () => !!ce(b.touchedFields, s) },
            isValidating: {
              enumerable: !0,
              get: () => !!ce(b.validatingFields, s),
            },
            error: { enumerable: !0, get: () => ce(b.errors, s) },
          }
        ),
      [b, s]
    ),
    S = je.useCallback(
      (k) =>
        N.current.onChange({
          target: { value: z1(k), name: s },
          type: ys.CHANGE,
        }),
      [s]
    ),
    C = je.useCallback(
      () =>
        N.current.onBlur({
          target: { value: ce(o._formValues, s), name: s },
          type: ys.BLUR,
        }),
      [s, o._formValues]
    ),
    A = je.useCallback(
      (k) => {
        const D = ce(o._fields, s);
        D &&
          D._f &&
          k &&
          (D._f.ref = {
            focus: () => $t(k.focus) && k.focus(),
            select: () => $t(k.select) && k.select(),
            setCustomValidity: (q) =>
              $t(k.setCustomValidity) && k.setCustomValidity(q),
            reportValidity: () => $t(k.reportValidity) && k.reportValidity(),
          });
      },
      [o._fields, s]
    ),
    O = je.useMemo(
      () => ({
        name: s,
        value: v,
        ...(gn(i) || b.disabled ? { disabled: b.disabled || i } : {}),
        onChange: S,
        onBlur: C,
        ref: A,
      }),
      [s, i, b.disabled, S, C, A, v]
    );
  return (
    je.useEffect(() => {
      const k = o._options.shouldUnregister || c;
      o.register(s, {
        ..._.current.rules,
        ...(gn(_.current.disabled) ? { disabled: _.current.disabled } : {}),
      });
      const D = (q, X) => {
        const Z = ce(o._fields, q);
        Z && Z._f && (Z._f.mount = X);
      };
      if ((D(s, !0), k)) {
        const q = Et(ce(o._options.defaultValues, s, _.current.defaultValue));
        rt(o._defaultValues, s, q),
          ht(ce(o._formValues, s)) && rt(o._formValues, s, q);
      }
      return (
        !p && o.register(s),
        () => {
          (p ? k && !o._state.action : k) ? o.unregister(s) : D(s, !1);
        }
      );
    }, [s, o, p, c]),
    je.useEffect(() => {
      o._setDisabledField({ disabled: i, name: s });
    }, [i, s, o]),
    je.useMemo(() => ({ field: O, formState: b, fieldState: j }), [O, b, j])
  );
}
const sM = (t) => t.render(aM(t)),
  Sm = je.createContext(null);
Sm.displayName = "HookFormContext";
const rM = () => je.useContext(Sm),
  iM = (t) => {
    const {
        children: a,
        watch: s,
        getValues: i,
        getFieldState: o,
        setError: c,
        clearErrors: f,
        setValue: m,
        setValues: p,
        trigger: y,
        formState: v,
        resetField: b,
        reset: _,
        handleSubmit: N,
        unregister: j,
        control: S,
        register: C,
        setFocus: A,
        subscribe: O,
      } = t,
      k = je.useMemo(
        () => ({
          watch: s,
          getValues: i,
          getFieldState: o,
          setError: c,
          clearErrors: f,
          setValue: m,
          setValues: p,
          trigger: y,
          formState: v,
          resetField: b,
          reset: _,
          handleSubmit: N,
          unregister: j,
          control: S,
          register: C,
          setFocus: A,
          subscribe: O,
        }),
        [f, S, v, o, i, N, C, _, b, c, A, m, p, O, y, j, s]
      );
    return je.createElement(
      Sm.Provider,
      { value: k },
      je.createElement(xm.Provider, { value: k.control }, a)
    );
  };
var H1 = (t, a, s, i, o) =>
    a
      ? {
          ...s[t],
          types: { ...(s[t] && s[t].types ? s[t].types : {}), [i]: o || !0 },
        }
      : {},
  Tl = (t) => (Array.isArray(t) ? t : [t]),
  Dx = () => {
    let t = [];
    return {
      get observers() {
        return t;
      },
      next: (o) => {
        for (const c of t) c.next && c.next(o);
      },
      subscribe: (o) => (
        t.push(o),
        {
          unsubscribe: () => {
            t = t.filter((c) => c !== o);
          },
        }
      ),
      unsubscribe: () => {
        t = [];
      },
    };
  };
function B1(t, a) {
  const s = {};
  for (const i in t)
    if (t.hasOwnProperty(i)) {
      const o = t[i],
        c = a[i];
      if (o && _t(o) && c) {
        const f = B1(o, c);
        _t(f) && (s[i] = f);
      } else t[i] && (s[i] = c);
    }
  return s;
}
var It = (t) => _t(t) && !Object.keys(t).length,
  _m = (t) => t.type === "file",
  qc = (t) => {
    if (!ym) return !1;
    const a = t ? t.ownerDocument : 0;
    return (
      t instanceof
      (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement)
    );
  },
  F1 = (t) => t.type === "select-multiple",
  Nm = (t) => t.type === "radio",
  lM = (t) => Nm(t) || Xl(t),
  Yf = (t) => qc(t) && t.isConnected;
function oM(t, a) {
  const s = a.slice(0, -1).length;
  let i = 0;
  for (; i < s; ) {
    if (tn(t)) {
      t = void 0;
      break;
    }
    (t = t[a[i]]), i++;
  }
  return t;
}
function cM(t) {
  for (const a in t) if (t.hasOwnProperty(a) && !ht(t[a])) return !1;
  return !0;
}
function At(t, a) {
  if (Xt(a) && Object.prototype.hasOwnProperty.call(t, a))
    return delete t[a], t;
  const s = Array.isArray(a) ? a : fu(a) ? [a] : vm(a),
    i = s.length === 1 ? t : oM(t, s),
    o = s.length - 1,
    c = s[o];
  return (
    i && delete i[c],
    o !== 0 &&
      ((_t(i) && It(i)) || (Array.isArray(i) && cM(i))) &&
      At(t, s.slice(0, -1)),
    t
  );
}
var uM = (t) => {
  for (const a in t) if ($t(t[a])) return !0;
  return !1;
};
function K1(t) {
  return Array.isArray(t) || (_t(t) && !uM(t));
}
function _h(t, a = {}) {
  for (const s in t) {
    const i = t[s];
    K1(i)
      ? ((a[s] = Array.isArray(i) ? [] : {}), _h(i, a[s]))
      : ht(i) || (a[s] = !0);
  }
  return a;
}
function Nh(t) {
  if (t !== !1) {
    if (t === !0) return !0;
    if (Array.isArray(t)) {
      const a = t.map((s) => Nh(s));
      return a.some((s) => s !== void 0) ? a : void 0;
    }
    if (_t(t)) {
      const a = {};
      for (const s in t) {
        const i = Nh(t[s]);
        ht(i) || (a[s] = i);
      }
      return Object.keys(a).length ? a : void 0;
    }
  }
}
function Nl(t, a, s) {
  s || (s = _h(a));
  for (const i in t) {
    const o = t[i];
    if (K1(o))
      ht(a) || Sh(s[i])
        ? (s[i] = _h(o, Array.isArray(o) ? [] : {}))
        : Nl(o, tn(a) ? {} : a[i], s[i]);
    else {
      const c = a[i];
      s[i] = !vn(o, c);
    }
  }
  return Nh(s) || {};
}
const Lx = { value: !1, isValid: !1 },
  Ux = { value: !0, isValid: !0 };
var Q1 = (t) => {
    if (Array.isArray(t)) {
      if (t.length > 1) {
        const a = t
          .filter((s) => s && s.checked && !s.disabled)
          .map((s) => s.value);
        return { value: a, isValid: !!a.length };
      }
      return t[0].checked && !t[0].disabled
        ? t[0].attributes && !ht(t[0].attributes.value)
          ? ht(t[0].value) || t[0].value === ""
            ? Ux
            : { value: t[0].value, isValid: !0 }
          : Ux
        : Lx;
    }
    return Lx;
  },
  G1 = (t, { valueAsNumber: a, valueAsDate: s, setValueAs: i }) =>
    ht(t)
      ? t
      : a
      ? t === ""
        ? NaN
        : t && +t
      : s && Xt(t)
      ? new Date(t)
      : i
      ? i(t)
      : t;
const zx = { isValid: !1, value: null };
var Z1 = (t) =>
  Array.isArray(t)
    ? t.reduce(
        (a, s) =>
          s && s.checked && !s.disabled ? { isValid: !0, value: s.value } : a,
        zx
      )
    : zx;
function qx(t) {
  const a = t.ref;
  return _m(a)
    ? a.files
    : Nm(a)
    ? Z1(t.refs).value
    : F1(a)
    ? [...a.selectedOptions].map(({ value: s }) => s)
    : Xl(a)
    ? Q1(t.refs).value
    : G1(ht(a.value) ? t.ref.value : a.value, t);
}
var dM = (t, a, s, i) => {
    const o = {};
    for (const c of t) {
      const f = ce(a, c);
      f && rt(o, c, f._f);
    }
    return {
      criteriaMode: s,
      names: [...t],
      fields: o,
      shouldUseNativeValidation: i,
    };
  },
  Pc = (t) => t instanceof RegExp,
  _l = (t) =>
    ht(t)
      ? t
      : Pc(t)
      ? t.source
      : _t(t)
      ? Pc(t.value)
        ? t.value.source
        : t.value
      : t,
  Px = (t) => ({
    isOnSubmit: !t || t === Yn.onSubmit,
    isOnBlur: t === Yn.onBlur,
    isOnChange: t === Yn.onChange,
    isOnAll: t === Yn.all,
    isOnTouch: t === Yn.onTouched,
  });
const Vx = "AsyncFunction";
var fM = (t) =>
    !!t &&
    !!t.validate &&
    !!(
      ($t(t.validate) && t.validate.constructor.name === Vx) ||
      (_t(t.validate) &&
        Object.values(t.validate).find((a) => a.constructor.name === Vx))
    ),
  hM = (t) =>
    t.mount &&
    (t.required ||
      t.min ||
      t.max ||
      t.maxLength ||
      t.minLength ||
      t.pattern ||
      t.validate),
  Hx = (t, a, s) =>
    !s &&
    (a.watchAll ||
      a.watch.has(t) ||
      [...a.watch].some(
        (i) => t.startsWith(i) && /^\.\w+/.test(t.slice(i.length))
      ));
const Ol = (t, a, s, i) => {
  for (const o of s || Object.keys(t)) {
    const c = ce(t, o);
    if (c) {
      const { _f: f, ...m } = c;
      if (f) {
        if (f.refs && f.refs[0] && a(f.refs[0], o) && !i) return !0;
        if (f.ref && a(f.ref, f.name) && !i) return !0;
        if (Ol(m, a)) break;
      } else if (_t(m) && Ol(m, a)) break;
    }
  }
};
function Bx(t, a, s) {
  const i = ce(t, s);
  if (i || fu(s)) return { error: i, name: s };
  const o = s.split(".");
  for (; o.length; ) {
    const c = o.join("."),
      f = ce(a, c),
      m = ce(t, c);
    if (f && !Array.isArray(f) && s !== c) return { name: s };
    if (m && m.type) return { name: c, error: m };
    if (m && m.root && m.root.type) return { name: `${c}.root`, error: m.root };
    o.pop();
  }
  return { name: s };
}
var mM = (t, a, s, i) => {
    s(t);
    const { name: o, ...c } = t;
    return (
      It(c) ||
      (i && Object.keys(c).length >= Object.keys(a).length) ||
      Object.keys(c).find((f) => a[f] === (!i || Yn.all))
    );
  },
  pM = (t, a, s) =>
    !t ||
    !a ||
    t === a ||
    Tl(t).some((i) => i && (s ? i === a : i.startsWith(a) || a.startsWith(i))),
  yM = (t, a, s, i, o) =>
    o.isOnAll
      ? !1
      : !s && o.isOnTouch
      ? !(a || t)
      : (s ? i.isOnBlur : o.isOnBlur)
      ? !t
      : (s ? i.isOnChange : o.isOnChange)
      ? t
      : !0,
  gM = (t, a) => !gm(ce(t, a)).length && At(t, a),
  vM = (t, a, s) => {
    const i = Tl(ce(t, s));
    return rt(i, P1, a[s]), rt(t, s, i), t;
  };
function Fx(t, a, s = "validate") {
  if (Xt(t) || (Array.isArray(t) && t.every(Xt)) || (gn(t) && !t))
    return { type: s, message: Xt(t) ? t : "", ref: a };
}
var Xr = (t) => (_t(t) && !Pc(t) ? t : { value: t, message: "" }),
  Kx = async (t, a, s, i, o, c) => {
    const {
        ref: f,
        refs: m,
        required: p,
        maxLength: y,
        minLength: v,
        min: b,
        max: _,
        pattern: N,
        validate: j,
        name: S,
        valueAsNumber: C,
        mount: A,
      } = t._f,
      O = ce(s, S);
    if (!A || a.has(S)) return {};
    const k = m ? m[0] : f,
      D = (te) => {
        o &&
          k.reportValidity &&
          (k.setCustomValidity(gn(te) ? "" : te || ""), k.reportValidity());
      },
      q = {},
      X = Nm(f),
      Z = Xl(f),
      P = X || Z,
      G =
        ((C || _m(f)) && ht(f.value) && ht(O)) ||
        (qc(f) && f.value === "") ||
        O === "" ||
        (Array.isArray(O) && !O.length) ||
        (C && typeof O == "number" && isNaN(O)),
      ue = H1.bind(null, S, i, q),
      ve = (te, oe, ee, de = Gn.maxLength, L = Gn.minLength) => {
        const U = te ? oe : ee;
        q[S] = { type: te ? de : L, message: U, ref: f, ...ue(te ? de : L, U) };
      };
    if (
      c
        ? !Array.isArray(O) || !O.length
        : p &&
          ((!P && (G || tn(O))) ||
            (gn(O) && !O) ||
            (Z && !Q1(m).isValid) ||
            (X && !Z1(m).isValid))
    ) {
      const { value: te, message: oe } = Xt(p)
        ? { value: !!p, message: p }
        : Xr(p);
      if (
        te &&
        ((q[S] = {
          type: Gn.required,
          message: oe,
          ref: k,
          ...ue(Gn.required, oe),
        }),
        !i)
      )
        return D(oe), q;
    }
    if (!G && (!tn(b) || !tn(_))) {
      let te, oe;
      const ee = Xr(_),
        de = Xr(b);
      if (!tn(O) && !isNaN(O)) {
        const L = f.valueAsNumber || (O && +O);
        tn(ee.value) || (te = L > ee.value),
          tn(de.value) || (oe = L < de.value);
      } else {
        const L = f.valueAsDate || new Date(O),
          U = (E) => new Date(new Date().toDateString() + " " + E),
          W = f.type == "time",
          fe = f.type == "week";
        Xt(ee.value) &&
          O &&
          (te = W
            ? U(O) > U(ee.value)
            : fe
            ? O > ee.value
            : L > new Date(ee.value)),
          Xt(de.value) &&
            O &&
            (oe = W
              ? U(O) < U(de.value)
              : fe
              ? O < de.value
              : L < new Date(de.value));
      }
      if ((te || oe) && (ve(!!te, ee.message, de.message, Gn.max, Gn.min), !i))
        return D(q[S].message), q;
    }
    if ((y || v) && !G && (Xt(O) || (c && Array.isArray(O)))) {
      const te = Xr(y),
        oe = Xr(v),
        ee = !tn(te.value) && O.length > +te.value,
        de = !tn(oe.value) && O.length < +oe.value;
      if ((ee || de) && (ve(ee, te.message, oe.message), !i))
        return D(q[S].message), q;
    }
    if (N && !G && Xt(O)) {
      const { value: te, message: oe } = Xr(N);
      if (
        Pc(te) &&
        !O.match(te) &&
        ((q[S] = {
          type: Gn.pattern,
          message: oe,
          ref: f,
          ...ue(Gn.pattern, oe),
        }),
        !i)
      )
        return D(oe), q;
    }
    if (j) {
      if ($t(j)) {
        const te = await j(O, s),
          oe = Fx(te, k);
        if (oe && ((q[S] = { ...oe, ...ue(Gn.validate, oe.message) }), !i))
          return D(oe.message), q;
      } else if (_t(j)) {
        let te = {};
        for (const oe in j) {
          if (!It(te) && !i) break;
          const ee = Fx(await j[oe](O, s), k, oe);
          ee &&
            ((te = { ...ee, ...ue(oe, ee.message) }),
            D(ee.message),
            i && (q[S] = te));
        }
        if (!It(te) && ((q[S] = { ref: k, ...te }), !i)) return q;
      }
    }
    return D(!0), q;
  };
const xM = {
    mode: Yn.onSubmit,
    reValidateMode: Yn.onChange,
    shouldFocusError: !0,
  },
  Y1 = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
  };
function bM(t = {}) {
  let a = { ...xM, ...t },
    s = {
      ...Et(Y1),
      isLoading: $t(a.defaultValues),
      errors: a.errors || {},
      disabled: a.disabled || !1,
    },
    i = {},
    o =
      _t(a.defaultValues) || _t(a.values)
        ? Et(a.defaultValues || a.values) || {}
        : {},
    c = a.shouldUnregister ? {} : Et(o),
    f = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
    m = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
      registerName: new Set(),
    },
    p,
    y = 0;
  const v = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    b = { ...v };
  let _ = { ...b };
  const N = { array: Dx(), state: Dx() },
    j = a.criteriaMode === Yn.all,
    S = (R) => (V) => {
      clearTimeout(y), (y = setTimeout(R, V));
    },
    C = async (R) => {
      if (!f.keepIsValid && !a.disabled && (b.isValid || _.isValid || R)) {
        let V;
        a.resolver
          ? ((V = It((await G()).errors)), A())
          : (V = await te({
              fields: i,
              onlyCheckValid: !0,
              eventType: ys.VALID,
            })),
          V !== s.isValid && N.state.next({ isValid: V });
      }
    },
    A = (R, V) => {
      !a.disabled &&
        (b.isValidating ||
          b.validatingFields ||
          _.isValidating ||
          _.validatingFields) &&
        ((R || Array.from(m.mount)).forEach((K) => {
          K && (V ? rt(s.validatingFields, K, V) : At(s.validatingFields, K));
        }),
        N.state.next({
          validatingFields: s.validatingFields,
          isValidating: !It(s.validatingFields),
        }));
    },
    O = () => {
      s.dirtyFields = Nl(o, c);
    },
    k = (R, V = [], K, se, ie = !0, ne = !0) => {
      if (se && K && !a.disabled) {
        if (((f.action = !0), ne && Array.isArray(ce(i, R)))) {
          const ye = K(ce(i, R), se.argA, se.argB);
          ie && rt(i, R, ye);
        }
        if (ne && Array.isArray(ce(s.errors, R))) {
          const ye = K(ce(s.errors, R), se.argA, se.argB);
          ie && rt(s.errors, R, ye), gM(s.errors, R);
        }
        if (
          (b.touchedFields || _.touchedFields) &&
          ne &&
          Array.isArray(ce(s.touchedFields, R))
        ) {
          const ye = K(ce(s.touchedFields, R), se.argA, se.argB);
          ie && rt(s.touchedFields, R, ye);
        }
        (b.dirtyFields || _.dirtyFields) && O(),
          N.state.next({
            name: R,
            isDirty: ee(R, V),
            dirtyFields: s.dirtyFields,
            errors: s.errors,
            isValid: s.isValid,
          });
      } else rt(c, R, V);
    },
    D = (R, V) => {
      rt(s.errors, R, V), N.state.next({ errors: s.errors });
    },
    q = (R) => {
      (s.errors = R), N.state.next({ errors: s.errors, isValid: !1 });
    },
    X = (R, V, K, se) => {
      const ie = ce(i, R);
      if (ie) {
        const ne = ht(ce(c, R)),
          ye = ce(c, R, ht(K) ? ce(o, R) : K);
        ht(ye) || (se && se.defaultChecked) || V
          ? rt(c, R, V ? ye : qx(ie._f))
          : U(R, ye),
          f.mount &&
            !f.action &&
            (C(),
            ne &&
              s.isDirty &&
              (b.isDirty || _.isDirty) &&
              (ee() || ((s.isDirty = !1), N.state.next({ ...s }))));
      }
    },
    Z = (R, V, K, se, ie) => {
      let ne = !1,
        ye = !1;
      const ze = { name: R };
      if (!a.disabled) {
        if (!K || se) {
          (b.isDirty || _.isDirty) &&
            ((ye = s.isDirty),
            (s.isDirty = ze.isDirty = ee()),
            (ne = ye !== ze.isDirty));
          const Qe = vn(ce(o, R), V);
          (ye = !!ce(s.dirtyFields, R)),
            Qe ? At(s.dirtyFields, R) : rt(s.dirtyFields, R, !0),
            (ze.dirtyFields = s.dirtyFields),
            (ne = ne || ((b.dirtyFields || _.dirtyFields) && ye !== !Qe));
        }
        if (K) {
          const Qe = ce(s.touchedFields, R);
          Qe ||
            (rt(s.touchedFields, R, K),
            (ze.touchedFields = s.touchedFields),
            (ne = ne || ((b.touchedFields || _.touchedFields) && Qe !== K)));
        }
        ne && ie && N.state.next(ze);
      }
      return ne ? ze : {};
    },
    P = (R, V, K, se) => {
      const ie = ce(s.errors, R),
        ne = (b.isValid || _.isValid) && gn(V) && s.isValid !== V;
      if (
        (a.delayError && K
          ? ((p = S(() => D(R, K))), p(a.delayError))
          : (clearTimeout(y),
            (p = null),
            K ? rt(s.errors, R, K) : At(s.errors, R)),
        (K ? !vn(ie, K) : ie) || !It(se) || ne)
      ) {
        const ye = {
          ...se,
          ...(ne && gn(V) ? { isValid: V } : {}),
          errors: s.errors,
          name: R,
        };
        (s = { ...s, ...ye }), N.state.next(ye);
      }
    },
    G = async (R) => (
      A(R, !0),
      await a.resolver(
        c,
        a.context,
        dM(R || m.mount, i, a.criteriaMode, a.shouldUseNativeValidation)
      )
    ),
    ue = async (R) => {
      const { errors: V } = await G(R);
      if ((A(R), R))
        for (const K of R) {
          const se = ce(V, K);
          se ? rt(s.errors, K, se) : At(s.errors, K);
        }
      else s.errors = V;
      return V;
    },
    ve = async ({ name: R, eventType: V }) => {
      if (t.validate) {
        const K = await t.validate({
          formValues: c,
          formState: s,
          name: R,
          eventType: V,
        });
        if (_t(K))
          for (const se in K)
            K[se] &&
              me(`${Zf}.${se}`, {
                message: Xt(K.message) ? K.message : "",
                type: Gn.validate,
              });
        else
          Xt(K) || !K
            ? me(Zf, { message: K || "", type: Gn.validate })
            : he(Zf);
        return K;
      }
      return !0;
    },
    te = async ({
      fields: R,
      onlyCheckValid: V,
      name: K,
      eventType: se,
      context: ie = { valid: !0, runRootValidation: !1 },
    }) => {
      if (
        t.validate &&
        ((ie.runRootValidation = !0),
        !(await ve({ name: K, eventType: se })) && ((ie.valid = !1), V))
      )
        return ie.valid;
      for (const ne in R) {
        const ye = R[ne];
        if (ye) {
          const { _f: ze, ...Qe } = ye;
          if (ze) {
            const Tt = m.array.has(ze.name),
              Wt = ye._f && fM(ye._f);
            Wt && b.validatingFields && A([ze.name], !0);
            const xt = await Kx(
              ye,
              m.disabled,
              c,
              j,
              a.shouldUseNativeValidation && !V,
              Tt
            );
            if (
              (Wt && b.validatingFields && A([ze.name]),
              (xt[ze.name] && ((ie.valid = !1), V)) ||
                (!V &&
                  (ce(xt, ze.name)
                    ? Tt
                      ? vM(s.errors, xt, ze.name)
                      : rt(s.errors, ze.name, xt[ze.name])
                    : At(s.errors, ze.name)),
                t.shouldUseNativeValidation && xt[ze.name]))
            )
              break;
          }
          !It(Qe) &&
            (await te({
              context: ie,
              onlyCheckValid: V,
              fields: Qe,
              name: ne,
              eventType: se,
            }));
        }
      }
      return ie.valid;
    },
    oe = () => {
      for (const R of m.unMount) {
        const V = ce(i, R);
        V &&
          (V._f.refs ? V._f.refs.every((K) => !Yf(K)) : !Yf(V._f.ref)) &&
          Be(R);
      }
      m.unMount = new Set();
    },
    ee = (R, V) => !a.disabled && (R && V && rt(c, R, V), !vn(pe(), o)),
    de = (R, V, K) =>
      wh(R, m, { ...(f.mount ? c : ht(V) ? o : Xt(R) ? { [R]: V } : V) }, K, V),
    L = (R) =>
      gm(ce(f.mount ? c : o, R, a.shouldUnregister ? ce(o, R, []) : [])),
    U = (R, V, K = {}) => {
      const se = ce(i, R);
      let ie = V;
      if (se) {
        const ne = se._f;
        ne &&
          (!ne.disabled && rt(c, R, G1(V, ne)),
          (ie = qc(ne.ref) && tn(V) ? "" : V),
          F1(ne.ref)
            ? [...ne.ref.options].forEach(
                (ye) => (ye.selected = ie.includes(ye.value))
              )
            : ne.refs
            ? Xl(ne.ref)
              ? ne.refs.forEach((ye) => {
                  (!ye.defaultChecked || !ye.disabled) &&
                    (Array.isArray(ie)
                      ? (ye.checked = !!ie.find((ze) => ze === ye.value))
                      : (ye.checked = ie === ye.value || !!ie));
                })
              : ne.refs.forEach((ye) => (ye.checked = ye.value === ie))
            : _m(ne.ref)
            ? (ne.ref.value = "")
            : ((ne.ref.value = ie),
              ne.ref.type || N.state.next({ name: R, values: Et(c) })));
      }
      (K.shouldDirty || K.shouldTouch) &&
        Z(R, ie, K.shouldTouch, K.shouldDirty, !0),
        K.shouldValidate && ae(R);
    },
    W = (R, V, K) => {
      for (const se in V) {
        if (!V.hasOwnProperty(se)) return;
        const ie = V[se],
          ne = R + "." + se,
          ye = ce(i, ne);
        (m.array.has(R) || _t(ie) || (ye && !ye._f)) && !Js(ie)
          ? W(ne, ie, K)
          : U(ne, ie, K);
      }
    },
    fe = (R, V, K = {}) => {
      const se = ce(i, R),
        ie = m.array.has(R),
        ne = Et(V),
        ye = ce(c, R),
        ze = vn(ye, ne);
      if ((rt(c, R, ne), ie))
        N.array.next({ name: R, values: Et(c) }),
          (b.isDirty || b.dirtyFields || _.isDirty || _.dirtyFields) &&
            K.shouldDirty &&
            (O(),
            N.state.next({
              name: R,
              dirtyFields: s.dirtyFields,
              isDirty: ee(R, ne),
            }));
      else {
        const Qe = (Array.isArray(ne) && !ne.length) || It(ne);
        !se || se._f || tn(ne) || Qe ? U(R, ne, K) : W(R, ne, K);
      }
      if (!ze) {
        const Qe = Hx(R, m);
        N.state.next({
          ...(Qe && s),
          name: f.mount || Qe ? R : void 0,
          values: Et(c),
        });
      }
    },
    E = (R) => {
      const V = $t(R) ? R(c) : R;
      vn(c, V) || ((c = { ...c, ...V }), N.state.next({ ...s, values: c }));
    },
    I = async (R) => {
      f.mount = !0;
      const V = R.target;
      let K = V.name,
        se = !0;
      const ie = ce(i, K),
        ne = (Qe) => {
          se =
            Number.isNaN(Qe) ||
            (Js(Qe) && isNaN(Qe.getTime())) ||
            vn(Qe, ce(c, K, Qe));
        },
        ye = Px(a.mode),
        ze = Px(a.reValidateMode);
      if (ie) {
        let Qe, Tt;
        const Wt = V.type ? qx(ie._f) : z1(R),
          xt = R.type === ys.BLUR || R.type === ys.FOCUS_OUT,
          dr =
            (!hM(ie._f) &&
              !t.validate &&
              !a.resolver &&
              !ce(s.errors, K) &&
              !ie._f.deps) ||
            yM(xt, ce(s.touchedFields, K), s.isSubmitted, ze, ye),
          ga = Hx(K, m, xt);
        rt(c, K, Wt),
          xt
            ? (!V || !V.readOnly) &&
              (ie._f.onBlur && ie._f.onBlur(R), p && p(0))
            : ie._f.onChange && ie._f.onChange(R);
        const Si = Z(K, Wt, xt),
          no = !It(Si) || ga;
        if ((!xt && N.state.next({ name: K, type: R.type, values: Et(c) }), dr))
          return (
            (b.isValid || _.isValid) &&
              (a.mode === "onBlur" ? xt && C() : xt || C()),
            no && N.state.next({ name: K, ...(ga ? {} : Si) })
          );
        if (
          (!a.resolver &&
            t.validate &&
            (await ve({ name: K, eventType: R.type })),
          !xt && ga && N.state.next({ ...s }),
          a.resolver)
        ) {
          const { errors: _i } = await G([K]);
          if ((A([K]), ne(Wt), se)) {
            const Ni = Bx(s.errors, i, K),
              Fa = Bx(_i, i, Ni.name || K);
            (Qe = Fa.error), (K = Fa.name), (Tt = It(_i));
          }
        } else
          A([K], !0),
            (Qe = (await Kx(ie, m.disabled, c, j, a.shouldUseNativeValidation))[
              K
            ]),
            A([K]),
            ne(Wt),
            se &&
              (Qe
                ? (Tt = !1)
                : (b.isValid || _.isValid) &&
                  (Tt = await te({
                    fields: i,
                    onlyCheckValid: !0,
                    name: K,
                    eventType: R.type,
                  })));
        se &&
          (ie._f.deps &&
            (!Array.isArray(ie._f.deps) || ie._f.deps.length > 0) &&
            ae(ie._f.deps),
          P(K, Tt, Qe, Si));
      }
    },
    le = (R, V) => {
      if (ce(s.errors, V) && R.focus) return R.focus(), 1;
    },
    ae = async (R, V = {}) => {
      let K, se;
      const ie = Tl(R);
      if (a.resolver) {
        const ne = await ue(ht(R) ? R : ie);
        (K = It(ne)), (se = R ? !ie.some((ye) => ce(ne, ye)) : K);
      } else
        R
          ? ((se = (
              await Promise.all(
                ie.map(async (ne) => {
                  const ye = ce(i, ne);
                  return await te({
                    fields: ye && ye._f ? { [ne]: ye } : ye,
                    eventType: ys.TRIGGER,
                  });
                })
              )
            ).every(Boolean)),
            !(!se && !s.isValid) && C())
          : (se = K = await te({ fields: i, name: R, eventType: ys.TRIGGER }));
      return (
        N.state.next({
          ...(!Xt(R) || ((b.isValid || _.isValid) && K !== s.isValid)
            ? {}
            : { name: R }),
          ...(a.resolver || !R ? { isValid: K } : {}),
          errors: s.errors,
        }),
        V.shouldFocus && !se && Ol(i, le, R ? ie : m.mount),
        se
      );
    },
    pe = (R, V) => {
      let K = { ...(f.mount ? c : o) };
      return (
        V && (K = B1(V.dirtyFields ? s.dirtyFields : s.touchedFields, K)),
        ht(R) ? K : Xt(R) ? ce(K, R) : R.map((se) => ce(K, se))
      );
    },
    Ne = (R, V) => ({
      invalid: !!ce((V || s).errors, R),
      isDirty: !!ce((V || s).dirtyFields, R),
      error: ce((V || s).errors, R),
      isValidating: !!ce(s.validatingFields, R),
      isTouched: !!ce((V || s).touchedFields, R),
    }),
    he = (R) => {
      const V = R ? Tl(R) : void 0;
      V?.forEach((K) => At(s.errors, K)),
        V
          ? V.forEach((K) => {
              N.state.next({ name: K, errors: s.errors });
            })
          : N.state.next({ errors: {} });
    },
    me = (R, V, K) => {
      const se = (ce(i, R, { _f: {} })._f || {}).ref,
        ie = ce(s.errors, R) || {},
        { ref: ne, message: ye, type: ze, ...Qe } = ie;
      rt(s.errors, R, { ...Qe, ...V, ref: se }),
        N.state.next({ name: R, errors: s.errors, isValid: !1 }),
        K && K.shouldFocus && se && se.focus && se.focus();
    },
    Te = (R, V) =>
      $t(R)
        ? N.state.subscribe({
            next: (K) => "values" in K && R(K.values || de(void 0, V), K),
          })
        : de(R, V, !0),
    ke = (R) =>
      N.state.subscribe({
        next: (V) => {
          if (
            pM(R.name, V.name, R.exact) &&
            mM(V, R.formState || b, ur, R.reRenderRoot)
          ) {
            const K = { ...c };
            R.callback({ values: K, ...s, ...V, defaultValues: o });
          }
        },
      }).unsubscribe,
    Ie = (R) => (
      (f.mount = !0),
      (_ = { ..._, ...R.formState }),
      ke({ ...R, formState: { ...v, ...R.formState } })
    ),
    Be = (R, V = {}) => {
      for (const K of R ? Tl(R) : m.mount)
        m.mount.delete(K),
          m.array.delete(K),
          V.keepValue || (At(i, K), At(c, K)),
          !V.keepError && At(s.errors, K),
          !V.keepDirty && At(s.dirtyFields, K),
          !V.keepTouched && At(s.touchedFields, K),
          !V.keepIsValidating && At(s.validatingFields, K),
          !a.shouldUnregister && !V.keepDefaultValue && At(o, K);
      N.state.next({ values: Et(c) }),
        N.state.next({ ...s, ...(V.keepDirty ? { isDirty: ee() } : {}) }),
        !V.keepIsValid && C();
    },
    Je = ({ disabled: R, name: V }) => {
      if ((gn(R) && f.mount) || R || m.disabled.has(V)) {
        const ie = m.disabled.has(V) !== !!R;
        R ? m.disabled.add(V) : m.disabled.delete(V),
          ie && f.mount && !f.action && C();
      }
    },
    mt = (R, V = {}) => {
      let K = ce(i, R);
      const se = gn(V.disabled) || gn(a.disabled),
        ie = !m.registerName.has(R) && K && K._f && !K._f.mount;
      return (
        rt(i, R, {
          ...(K || {}),
          _f: {
            ...(K && K._f ? K._f : { ref: { name: R } }),
            name: R,
            mount: !0,
            ...V,
          },
        }),
        m.mount.add(R),
        K && !ie
          ? Je({ disabled: gn(V.disabled) ? V.disabled : a.disabled, name: R })
          : X(R, !0, V.value),
        {
          ...(se ? { disabled: V.disabled || a.disabled } : {}),
          ...(a.progressive
            ? {
                required: !!V.required,
                min: _l(V.min),
                max: _l(V.max),
                minLength: _l(V.minLength),
                maxLength: _l(V.maxLength),
                pattern: _l(V.pattern),
              }
            : {}),
          name: R,
          onChange: I,
          onBlur: I,
          ref: (ne) => {
            if (ne) {
              m.registerName.add(R),
                mt(R, V),
                m.registerName.delete(R),
                (K = ce(i, R));
              const ye =
                  (ht(ne.value) &&
                    ne.querySelectorAll &&
                    ne.querySelectorAll("input,select,textarea")[0]) ||
                  ne,
                ze = lM(ye),
                Qe = K._f.refs || [];
              if (ze ? Qe.find((Tt) => Tt === ye) : ye === K._f.ref) return;
              rt(i, R, {
                _f: {
                  ...K._f,
                  ...(ze
                    ? {
                        refs: [
                          ...Qe.filter(Yf),
                          ye,
                          ...(Array.isArray(ce(o, R)) ? [{}] : []),
                        ],
                        ref: { type: ye.type, name: R },
                      }
                    : { ref: ye }),
                },
              }),
                X(R, !1, void 0, ye);
            } else
              (K = ce(i, R, {})),
                K._f && (K._f.mount = !1),
                (a.shouldUnregister || V.shouldUnregister) &&
                  !(q1(m.array, R) && f.action) &&
                  m.unMount.add(R);
          },
        }
      );
    },
    jt = () => a.shouldFocusError && Ol(i, le, m.mount),
    ks = (R) => {
      gn(R) &&
        (N.state.next({ disabled: R }),
        Ol(
          i,
          (V, K) => {
            const se = ce(i, K);
            se &&
              ((V.disabled = se._f.disabled || R),
              Array.isArray(se._f.refs) &&
                se._f.refs.forEach((ie) => {
                  ie.disabled = se._f.disabled || R;
                }));
          },
          0,
          !1
        ));
    },
    Ba = (R, V) => async (K) => {
      let se;
      K && (K.preventDefault && K.preventDefault(), K.persist && K.persist());
      let ie = Et(c);
      if ((N.state.next({ isSubmitting: !0 }), a.resolver)) {
        const { errors: ne, values: ye } = await G();
        A(), (s.errors = ne), (ie = Et(ye));
      } else await te({ fields: i, eventType: ys.SUBMIT });
      if (m.disabled.size) for (const ne of m.disabled) At(ie, ne);
      if ((At(s.errors, P1), It(s.errors))) {
        N.state.next({ errors: {} });
        try {
          await R(ie, K);
        } catch (ne) {
          se = ne;
        }
      } else V && (await V({ ...s.errors }, K)), jt(), setTimeout(jt);
      if (
        (N.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: It(s.errors) && !se,
          submitCount: s.submitCount + 1,
          errors: s.errors,
        }),
        se)
      )
        throw se;
    },
    Qt = (R, V = {}) => {
      ce(i, R) &&
        (ht(V.defaultValue)
          ? fe(R, Et(ce(o, R)))
          : (fe(R, V.defaultValue), rt(o, R, Et(V.defaultValue))),
        V.keepTouched || At(s.touchedFields, R),
        V.keepDirty ||
          (At(s.dirtyFields, R),
          (s.isDirty = V.defaultValue ? ee(R, Et(ce(o, R))) : ee())),
        V.keepError || (At(s.errors, R), b.isValid && C()),
        N.state.next({ ...s }));
    },
    eo = (R, V = {}) => {
      const K = R ? Et(R) : o,
        se = Et(K),
        ie = It(R),
        ne = ie ? o : se;
      if ((V.keepDefaultValues || (o = K), !V.keepValues)) {
        if (V.keepDirtyValues) {
          const ye = new Set([...m.mount, ...Object.keys(Nl(o, c))]);
          for (const ze of Array.from(ye)) {
            const Qe = ce(s.dirtyFields, ze),
              Tt = ce(c, ze),
              Wt = ce(ne, ze);
            Qe && !ht(Tt) ? rt(ne, ze, Tt) : !Qe && !ht(Wt) && fe(ze, Wt);
          }
        } else {
          if (ym && ht(R))
            for (const ye of m.mount) {
              const ze = ce(i, ye);
              if (ze && ze._f) {
                const Qe = Array.isArray(ze._f.refs)
                  ? ze._f.refs[0]
                  : ze._f.ref;
                if (qc(Qe)) {
                  const Tt = Qe.closest("form");
                  if (Tt) {
                    Tt.reset();
                    break;
                  }
                }
              }
            }
          if (V.keepFieldsRef) for (const ye of m.mount) fe(ye, ce(ne, ye));
          else i = {};
        }
        (c = a.shouldUnregister ? (V.keepDefaultValues ? Et(o) : {}) : Et(ne)),
          N.array.next({ values: { ...ne } }),
          N.state.next({ values: { ...ne } });
      }
      (m = {
        mount: V.keepDirtyValues ? m.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        registerName: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (f.mount =
          !b.isValid ||
          !!V.keepIsValid ||
          !!V.keepDirtyValues ||
          (!a.shouldUnregister && !It(ne))),
        (f.watch = !!a.shouldUnregister),
        (f.keepIsValid = !!V.keepIsValid),
        (f.action = !1),
        V.keepErrors || (s.errors = {}),
        N.state.next({
          submitCount: V.keepSubmitCount ? s.submitCount : 0,
          isDirty: ie
            ? !1
            : V.keepDirty
            ? s.isDirty
            : !!(V.keepDefaultValues && !vn(R, o)),
          isSubmitted: V.keepIsSubmitted ? s.isSubmitted : !1,
          dirtyFields: ie
            ? {}
            : V.keepDirtyValues
            ? V.keepDefaultValues && c
              ? Nl(o, c)
              : s.dirtyFields
            : V.keepDefaultValues && R
            ? Nl(o, R)
            : V.keepDirty
            ? s.dirtyFields
            : {},
          touchedFields: V.keepTouched ? s.touchedFields : {},
          errors: V.keepErrors ? s.errors : {},
          isSubmitSuccessful: V.keepIsSubmitSuccessful
            ? s.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: o,
        });
    },
    bi = (R, V) => eo($t(R) ? R(c) : R, { ...a.resetOptions, ...V }),
    to = (R, V = {}) => {
      const K = ce(i, R),
        se = K && K._f;
      if (se) {
        const ie = se.refs ? se.refs[0] : se.ref;
        ie.focus &&
          setTimeout(() => {
            ie.focus(), V.shouldSelect && $t(ie.select) && ie.select();
          });
      }
    },
    ur = (R) => {
      s = { ...s, ...R };
    },
    wi = {
      control: {
        register: mt,
        unregister: Be,
        getFieldState: Ne,
        handleSubmit: Ba,
        setError: me,
        _subscribe: ke,
        _runSchema: G,
        _updateIsValidating: A,
        _focusError: jt,
        _getWatch: de,
        _getDirty: ee,
        _setValid: C,
        _setFieldArray: k,
        _setDisabledField: Je,
        _setErrors: q,
        _getFieldArray: L,
        _reset: eo,
        _resetDefaultValues: () =>
          $t(a.defaultValues) &&
          a.defaultValues().then((R) => {
            bi(R, a.resetOptions), N.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: oe,
        _disableForm: ks,
        _subjects: N,
        _proxyFormState: b,
        get _fields() {
          return i;
        },
        get _formValues() {
          return c;
        },
        get _state() {
          return f;
        },
        set _state(R) {
          f = R;
        },
        get _defaultValues() {
          return o;
        },
        get _names() {
          return m;
        },
        set _names(R) {
          m = R;
        },
        get _formState() {
          return s;
        },
        get _options() {
          return a;
        },
        set _options(R) {
          a = { ...a, ...R };
        },
      },
      subscribe: Ie,
      trigger: ae,
      register: mt,
      handleSubmit: Ba,
      watch: Te,
      setValue: fe,
      setValues: E,
      getValues: pe,
      reset: bi,
      resetField: Qt,
      clearErrors: he,
      unregister: Be,
      setError: me,
      setFocus: to,
      getFieldState: Ne,
    };
  return { ...wi, formControl: wi };
}
function Cm(t = {}) {
  const a = je.useRef(void 0),
    s = je.useRef(void 0),
    [i, o] = je.useState(() => ({
      ...Et(Y1),
      isLoading: $t(t.defaultValues),
      errors: t.errors || {},
      disabled: t.disabled || !1,
      defaultValues: $t(t.defaultValues) ? void 0 : t.defaultValues,
    }));
  if (!a.current)
    if (t.formControl)
      (a.current = { ...t.formControl, formState: i }),
        t.defaultValues &&
          !$t(t.defaultValues) &&
          t.formControl.reset(t.defaultValues, t.resetOptions);
    else {
      const { formControl: f, ...m } = bM(t);
      a.current = { ...m, formState: i };
    }
  const c = a.current.control;
  return (
    (c._options = t),
    wm(() => {
      const f = c._subscribe({
        formState: c._proxyFormState,
        callback: () => o({ ...c._formState }),
        reRenderRoot: !0,
      });
      return o((m) => ({ ...m, isReady: !0 })), (c._formState.isReady = !0), f;
    }, [c]),
    je.useEffect(() => c._disableForm(t.disabled), [c, t.disabled]),
    je.useEffect(() => {
      t.mode && (c._options.mode = t.mode),
        t.reValidateMode && (c._options.reValidateMode = t.reValidateMode);
    }, [c, t.mode, t.reValidateMode]),
    je.useEffect(() => {
      t.errors && (c._setErrors(t.errors), c._focusError());
    }, [c, t.errors]),
    je.useEffect(() => {
      t.shouldUnregister && c._subjects.state.next({ values: c._getWatch() });
    }, [c, t.shouldUnregister]),
    je.useEffect(() => {
      if (c._proxyFormState.isDirty) {
        const f = c._getDirty();
        f !== i.isDirty && c._subjects.state.next({ isDirty: f });
      }
    }, [c, i.isDirty]),
    je.useEffect(() => {
      var f;
      t.values && !vn(t.values, s.current)
        ? (c._reset(t.values, {
            keepFieldsRef: !0,
            ...c._options.resetOptions,
          }),
          (!((f = c._options.resetOptions) === null || f === void 0) &&
            f.keepIsValid) ||
            c._setValid(),
          (s.current = t.values),
          o((m) => ({ ...m })))
        : c._resetDefaultValues();
    }, [c, t.values]),
    je.useEffect(() => {
      c._state.mount || (c._setValid(), (c._state.mount = !0)),
        c._state.watch &&
          ((c._state.watch = !1), c._subjects.state.next({ ...c._formState })),
        c._removeUnmounted();
    }),
    (a.current.formState = je.useMemo(() => V1(i, c), [c, i])),
    a.current
  );
}
const Qx = (t, a, s) => {
    if (t && "reportValidity" in t) {
      const i = ce(s, a);
      t.setCustomValidity((i && i.message) || ""), t.reportValidity();
    }
  },
  I1 = (t, a) => {
    for (const s in a.fields) {
      const i = a.fields[s];
      i && i.ref && "reportValidity" in i.ref
        ? Qx(i.ref, s, t)
        : i.refs && i.refs.forEach((o) => Qx(o, s, t));
    }
  },
  wM = (t, a) => {
    a.shouldUseNativeValidation && I1(t, a);
    const s = {};
    for (const i in t) {
      const o = ce(a.fields, i),
        c = Object.assign(t[i] || {}, { ref: o && o.ref });
      if (SM(a.names || Object.keys(t), i)) {
        const f = Object.assign({}, ce(s, i));
        rt(f, "root", c), rt(s, i, f);
      } else rt(s, i, c);
    }
    return s;
  },
  SM = (t, a) => t.some((s) => s.startsWith(a + "."));
var _M = function (t, a) {
    for (var s = {}; t.length; ) {
      var i = t[0],
        o = i.code,
        c = i.message,
        f = i.path.join(".");
      if (!s[f])
        if ("unionErrors" in i) {
          var m = i.unionErrors[0].errors[0];
          s[f] = { message: m.message, type: m.code };
        } else s[f] = { message: c, type: o };
      if (
        ("unionErrors" in i &&
          i.unionErrors.forEach(function (v) {
            return v.errors.forEach(function (b) {
              return t.push(b);
            });
          }),
        a)
      ) {
        var p = s[f].types,
          y = p && p[i.code];
        s[f] = H1(f, a, s, o, y ? [].concat(y, i.message) : i.message);
      }
      t.shift();
    }
    return s;
  },
  Em = function (t, a, s) {
    return (
      s === void 0 && (s = {}),
      function (i, o, c) {
        try {
          return Promise.resolve(
            (function (f, m) {
              try {
                var p = Promise.resolve(
                  t[s.mode === "sync" ? "parse" : "parseAsync"](i, a)
                ).then(function (y) {
                  return (
                    c.shouldUseNativeValidation && I1({}, c),
                    { errors: {}, values: s.raw ? i : y }
                  );
                });
              } catch (y) {
                return m(y);
              }
              return p && p.then ? p.then(void 0, m) : p;
            })(0, function (f) {
              if (
                (function (m) {
                  return Array.isArray(m?.errors);
                })(f)
              )
                return {
                  values: {},
                  errors: wM(
                    _M(
                      f.errors,
                      !c.shouldUseNativeValidation && c.criteriaMode === "all"
                    ),
                    c
                  ),
                };
              throw f;
            })
          );
        } catch (f) {
          return Promise.reject(f);
        }
      }
    );
  },
  tt;
(function (t) {
  t.assertEqual = (o) => {};
  function a(o) {}
  t.assertIs = a;
  function s(o) {
    throw new Error();
  }
  (t.assertNever = s),
    (t.arrayToEnum = (o) => {
      const c = {};
      for (const f of o) c[f] = f;
      return c;
    }),
    (t.getValidEnumValues = (o) => {
      const c = t.objectKeys(o).filter((m) => typeof o[o[m]] != "number"),
        f = {};
      for (const m of c) f[m] = o[m];
      return t.objectValues(f);
    }),
    (t.objectValues = (o) =>
      t.objectKeys(o).map(function (c) {
        return o[c];
      })),
    (t.objectKeys =
      typeof Object.keys == "function"
        ? (o) => Object.keys(o)
        : (o) => {
            const c = [];
            for (const f in o)
              Object.prototype.hasOwnProperty.call(o, f) && c.push(f);
            return c;
          }),
    (t.find = (o, c) => {
      for (const f of o) if (c(f)) return f;
    }),
    (t.isInteger =
      typeof Number.isInteger == "function"
        ? (o) => Number.isInteger(o)
        : (o) =>
            typeof o == "number" && Number.isFinite(o) && Math.floor(o) === o);
  function i(o, c = " | ") {
    return o.map((f) => (typeof f == "string" ? `'${f}'` : f)).join(c);
  }
  (t.joinValues = i),
    (t.jsonStringifyReplacer = (o, c) =>
      typeof c == "bigint" ? c.toString() : c);
})(tt || (tt = {}));
var Gx;
(function (t) {
  t.mergeShapes = (a, s) => ({ ...a, ...s });
})(Gx || (Gx = {}));
const Se = tt.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  gs = (t) => {
    switch (typeof t) {
      case "undefined":
        return Se.undefined;
      case "string":
        return Se.string;
      case "number":
        return Number.isNaN(t) ? Se.nan : Se.number;
      case "boolean":
        return Se.boolean;
      case "function":
        return Se.function;
      case "bigint":
        return Se.bigint;
      case "symbol":
        return Se.symbol;
      case "object":
        return Array.isArray(t)
          ? Se.array
          : t === null
          ? Se.null
          : t.then &&
            typeof t.then == "function" &&
            t.catch &&
            typeof t.catch == "function"
          ? Se.promise
          : typeof Map < "u" && t instanceof Map
          ? Se.map
          : typeof Set < "u" && t instanceof Set
          ? Se.set
          : typeof Date < "u" && t instanceof Date
          ? Se.date
          : Se.object;
      default:
        return Se.unknown;
    }
  },
  re = tt.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class Pa extends Error {
  get errors() {
    return this.issues;
  }
  constructor(a) {
    super(),
      (this.issues = []),
      (this.addIssue = (i) => {
        this.issues = [...this.issues, i];
      }),
      (this.addIssues = (i = []) => {
        this.issues = [...this.issues, ...i];
      });
    const s = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, s)
      : (this.__proto__ = s),
      (this.name = "ZodError"),
      (this.issues = a);
  }
  format(a) {
    const s =
        a ||
        function (c) {
          return c.message;
        },
      i = { _errors: [] },
      o = (c) => {
        for (const f of c.issues)
          if (f.code === "invalid_union") f.unionErrors.map(o);
          else if (f.code === "invalid_return_type") o(f.returnTypeError);
          else if (f.code === "invalid_arguments") o(f.argumentsError);
          else if (f.path.length === 0) i._errors.push(s(f));
          else {
            let m = i,
              p = 0;
            for (; p < f.path.length; ) {
              const y = f.path[p];
              p === f.path.length - 1
                ? ((m[y] = m[y] || { _errors: [] }), m[y]._errors.push(s(f)))
                : (m[y] = m[y] || { _errors: [] }),
                (m = m[y]),
                p++;
            }
          }
      };
    return o(this), i;
  }
  static assert(a) {
    if (!(a instanceof Pa)) throw new Error(`Not a ZodError: ${a}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, tt.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(a = (s) => s.message) {
    const s = {},
      i = [];
    for (const o of this.issues)
      if (o.path.length > 0) {
        const c = o.path[0];
        (s[c] = s[c] || []), s[c].push(a(o));
      } else i.push(a(o));
    return { formErrors: i, fieldErrors: s };
  }
  get formErrors() {
    return this.flatten();
  }
}
Pa.create = (t) => new Pa(t);
const Ch = (t, a) => {
  let s;
  switch (t.code) {
    case re.invalid_type:
      t.received === Se.undefined
        ? (s = "Required")
        : (s = `Expected ${t.expected}, received ${t.received}`);
      break;
    case re.invalid_literal:
      s = `Invalid literal value, expected ${JSON.stringify(
        t.expected,
        tt.jsonStringifyReplacer
      )}`;
      break;
    case re.unrecognized_keys:
      s = `Unrecognized key(s) in object: ${tt.joinValues(t.keys, ", ")}`;
      break;
    case re.invalid_union:
      s = "Invalid input";
      break;
    case re.invalid_union_discriminator:
      s = `Invalid discriminator value. Expected ${tt.joinValues(t.options)}`;
      break;
    case re.invalid_enum_value:
      s = `Invalid enum value. Expected ${tt.joinValues(
        t.options
      )}, received '${t.received}'`;
      break;
    case re.invalid_arguments:
      s = "Invalid function arguments";
      break;
    case re.invalid_return_type:
      s = "Invalid function return type";
      break;
    case re.invalid_date:
      s = "Invalid date";
      break;
    case re.invalid_string:
      typeof t.validation == "object"
        ? "includes" in t.validation
          ? ((s = `Invalid input: must include "${t.validation.includes}"`),
            typeof t.validation.position == "number" &&
              (s = `${s} at one or more positions greater than or equal to ${t.validation.position}`))
          : "startsWith" in t.validation
          ? (s = `Invalid input: must start with "${t.validation.startsWith}"`)
          : "endsWith" in t.validation
          ? (s = `Invalid input: must end with "${t.validation.endsWith}"`)
          : tt.assertNever(t.validation)
        : t.validation !== "regex"
        ? (s = `Invalid ${t.validation}`)
        : (s = "Invalid");
      break;
    case re.too_small:
      t.type === "array"
        ? (s = `Array must contain ${
            t.exact ? "exactly" : t.inclusive ? "at least" : "more than"
          } ${t.minimum} element(s)`)
        : t.type === "string"
        ? (s = `String must contain ${
            t.exact ? "exactly" : t.inclusive ? "at least" : "over"
          } ${t.minimum} character(s)`)
        : t.type === "number"
        ? (s = `Number must be ${
            t.exact
              ? "exactly equal to "
              : t.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${t.minimum}`)
        : t.type === "bigint"
        ? (s = `Number must be ${
            t.exact
              ? "exactly equal to "
              : t.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${t.minimum}`)
        : t.type === "date"
        ? (s = `Date must be ${
            t.exact
              ? "exactly equal to "
              : t.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(t.minimum))}`)
        : (s = "Invalid input");
      break;
    case re.too_big:
      t.type === "array"
        ? (s = `Array must contain ${
            t.exact ? "exactly" : t.inclusive ? "at most" : "less than"
          } ${t.maximum} element(s)`)
        : t.type === "string"
        ? (s = `String must contain ${
            t.exact ? "exactly" : t.inclusive ? "at most" : "under"
          } ${t.maximum} character(s)`)
        : t.type === "number"
        ? (s = `Number must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "less than or equal to"
              : "less than"
          } ${t.maximum}`)
        : t.type === "bigint"
        ? (s = `BigInt must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "less than or equal to"
              : "less than"
          } ${t.maximum}`)
        : t.type === "date"
        ? (s = `Date must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(t.maximum))}`)
        : (s = "Invalid input");
      break;
    case re.custom:
      s = "Invalid input";
      break;
    case re.invalid_intersection_types:
      s = "Intersection results could not be merged";
      break;
    case re.not_multiple_of:
      s = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case re.not_finite:
      s = "Number must be finite";
      break;
    default:
      (s = a.defaultError), tt.assertNever(t);
  }
  return { message: s };
};
let NM = Ch;
function CM() {
  return NM;
}
const EM = (t) => {
  const { data: a, path: s, errorMaps: i, issueData: o } = t,
    c = [...s, ...(o.path || [])],
    f = { ...o, path: c };
  if (o.message !== void 0) return { ...o, path: c, message: o.message };
  let m = "";
  const p = i
    .filter((y) => !!y)
    .slice()
    .reverse();
  for (const y of p) m = y(f, { data: a, defaultError: m }).message;
  return { ...o, path: c, message: m };
};
function ge(t, a) {
  const s = CM(),
    i = EM({
      issueData: a,
      data: t.data,
      path: t.path,
      errorMaps: [
        t.common.contextualErrorMap,
        t.schemaErrorMap,
        s,
        s === Ch ? void 0 : Ch,
      ].filter((o) => !!o),
    });
  t.common.issues.push(i);
}
class jn {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(a, s) {
    const i = [];
    for (const o of s) {
      if (o.status === "aborted") return Le;
      o.status === "dirty" && a.dirty(), i.push(o.value);
    }
    return { status: a.value, value: i };
  }
  static async mergeObjectAsync(a, s) {
    const i = [];
    for (const o of s) {
      const c = await o.key,
        f = await o.value;
      i.push({ key: c, value: f });
    }
    return jn.mergeObjectSync(a, i);
  }
  static mergeObjectSync(a, s) {
    const i = {};
    for (const o of s) {
      const { key: c, value: f } = o;
      if (c.status === "aborted" || f.status === "aborted") return Le;
      c.status === "dirty" && a.dirty(),
        f.status === "dirty" && a.dirty(),
        c.value !== "__proto__" &&
          (typeof f.value < "u" || o.alwaysSet) &&
          (i[c.value] = f.value);
    }
    return { status: a.value, value: i };
  }
}
const Le = Object.freeze({ status: "aborted" }),
  Cl = (t) => ({ status: "dirty", value: t }),
  Bn = (t) => ({ status: "valid", value: t }),
  Zx = (t) => t.status === "aborted",
  Yx = (t) => t.status === "dirty",
  ci = (t) => t.status === "valid",
  Vc = (t) => typeof Promise < "u" && t instanceof Promise;
var _e;
(function (t) {
  (t.errToObj = (a) => (typeof a == "string" ? { message: a } : a || {})),
    (t.toString = (a) => (typeof a == "string" ? a : a?.message));
})(_e || (_e = {}));
class Es {
  constructor(a, s, i, o) {
    (this._cachedPath = []),
      (this.parent = a),
      (this.data = s),
      (this._path = i),
      (this._key = o);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Ix = (t, a) => {
  if (ci(a)) return { success: !0, data: a.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const s = new Pa(t.common.issues);
      return (this._error = s), this._error;
    },
  };
};
function Ke(t) {
  if (!t) return {};
  const {
    errorMap: a,
    invalid_type_error: s,
    required_error: i,
    description: o,
  } = t;
  if (a && (s || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return a
    ? { errorMap: a, description: o }
    : {
        errorMap: (f, m) => {
          const { message: p } = t;
          return f.code === "invalid_enum_value"
            ? { message: p ?? m.defaultError }
            : typeof m.data > "u"
            ? { message: p ?? i ?? m.defaultError }
            : f.code !== "invalid_type"
            ? { message: m.defaultError }
            : { message: p ?? s ?? m.defaultError };
        },
        description: o,
      };
}
class We {
  get description() {
    return this._def.description;
  }
  _getType(a) {
    return gs(a.data);
  }
  _getOrReturnCtx(a, s) {
    return (
      s || {
        common: a.parent.common,
        data: a.data,
        parsedType: gs(a.data),
        schemaErrorMap: this._def.errorMap,
        path: a.path,
        parent: a.parent,
      }
    );
  }
  _processInputParams(a) {
    return {
      status: new jn(),
      ctx: {
        common: a.parent.common,
        data: a.data,
        parsedType: gs(a.data),
        schemaErrorMap: this._def.errorMap,
        path: a.path,
        parent: a.parent,
      },
    };
  }
  _parseSync(a) {
    const s = this._parse(a);
    if (Vc(s)) throw new Error("Synchronous parse encountered promise.");
    return s;
  }
  _parseAsync(a) {
    const s = this._parse(a);
    return Promise.resolve(s);
  }
  parse(a, s) {
    const i = this.safeParse(a, s);
    if (i.success) return i.data;
    throw i.error;
  }
  safeParse(a, s) {
    const i = {
        common: {
          issues: [],
          async: s?.async ?? !1,
          contextualErrorMap: s?.errorMap,
        },
        path: s?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: a,
        parsedType: gs(a),
      },
      o = this._parseSync({ data: a, path: i.path, parent: i });
    return Ix(i, o);
  }
  "~validate"(a) {
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: a,
      parsedType: gs(a),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: a, path: [], parent: s });
        return ci(i) ? { value: i.value } : { issues: s.common.issues };
      } catch (i) {
        i?.message?.toLowerCase()?.includes("encountered") &&
          (this["~standard"].async = !0),
          (s.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: a, path: [], parent: s }).then((i) =>
      ci(i) ? { value: i.value } : { issues: s.common.issues }
    );
  }
  async parseAsync(a, s) {
    const i = await this.safeParseAsync(a, s);
    if (i.success) return i.data;
    throw i.error;
  }
  async safeParseAsync(a, s) {
    const i = {
        common: { issues: [], contextualErrorMap: s?.errorMap, async: !0 },
        path: s?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: a,
        parsedType: gs(a),
      },
      o = this._parse({ data: a, path: i.path, parent: i }),
      c = await (Vc(o) ? o : Promise.resolve(o));
    return Ix(i, c);
  }
  refine(a, s) {
    const i = (o) =>
      typeof s == "string" || typeof s > "u"
        ? { message: s }
        : typeof s == "function"
        ? s(o)
        : s;
    return this._refinement((o, c) => {
      const f = a(o),
        m = () => c.addIssue({ code: re.custom, ...i(o) });
      return typeof Promise < "u" && f instanceof Promise
        ? f.then((p) => (p ? !0 : (m(), !1)))
        : f
        ? !0
        : (m(), !1);
    });
  }
  refinement(a, s) {
    return this._refinement((i, o) =>
      a(i) ? !0 : (o.addIssue(typeof s == "function" ? s(i, o) : s), !1)
    );
  }
  _refinement(a) {
    return new di({
      schema: this,
      typeName: Ue.ZodEffects,
      effect: { type: "refinement", refinement: a },
    });
  }
  superRefine(a) {
    return this._refinement(a);
  }
  constructor(a) {
    (this.spa = this.safeParseAsync),
      (this._def = a),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (s) => this["~validate"](s),
      });
  }
  optional() {
    return bs.create(this, this._def);
  }
  nullable() {
    return fi.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return fa.create(this);
  }
  promise() {
    return Kc.create(this, this._def);
  }
  or(a) {
    return Bc.create([this, a], this._def);
  }
  and(a) {
    return Fc.create(this, a, this._def);
  }
  transform(a) {
    return new di({
      ...Ke(this._def),
      schema: this,
      typeName: Ue.ZodEffects,
      effect: { type: "transform", transform: a },
    });
  }
  default(a) {
    const s = typeof a == "function" ? a : () => a;
    return new jh({
      ...Ke(this._def),
      innerType: this,
      defaultValue: s,
      typeName: Ue.ZodDefault,
    });
  }
  brand() {
    return new IM({ typeName: Ue.ZodBranded, type: this, ...Ke(this._def) });
  }
  catch(a) {
    const s = typeof a == "function" ? a : () => a;
    return new Th({
      ...Ke(this._def),
      innerType: this,
      catchValue: s,
      typeName: Ue.ZodCatch,
    });
  }
  describe(a) {
    const s = this.constructor;
    return new s({ ...this._def, description: a });
  }
  pipe(a) {
    return jm.create(this, a);
  }
  readonly() {
    return Oh.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const jM = /^c[^\s-]{8,}$/i,
  TM = /^[0-9a-z]+$/,
  OM = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  RM =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  AM = /^[a-z0-9_-]{21}$/i,
  kM = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  MM =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  DM =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  LM = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let If;
const UM =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  zM =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  qM =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  PM =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  VM = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  HM = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  $1 =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  BM = new RegExp(`^${$1}$`);
function X1(t) {
  let a = "[0-5]\\d";
  t.precision
    ? (a = `${a}\\.\\d{${t.precision}}`)
    : t.precision == null && (a = `${a}(\\.\\d+)?`);
  const s = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${a})${s}`;
}
function FM(t) {
  return new RegExp(`^${X1(t)}$`);
}
function KM(t) {
  let a = `${$1}T${X1(t)}`;
  const s = [];
  return (
    s.push(t.local ? "Z?" : "Z"),
    t.offset && s.push("([+-]\\d{2}:?\\d{2})"),
    (a = `${a}(${s.join("|")})`),
    new RegExp(`^${a}$`)
  );
}
function QM(t, a) {
  return !!(
    ((a === "v4" || !a) && UM.test(t)) ||
    ((a === "v6" || !a) && qM.test(t))
  );
}
function GM(t, a) {
  if (!kM.test(t)) return !1;
  try {
    const [s] = t.split(".");
    if (!s) return !1;
    const i = s
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(s.length + ((4 - (s.length % 4)) % 4), "="),
      o = JSON.parse(atob(i));
    return !(
      typeof o != "object" ||
      o === null ||
      ("typ" in o && o?.typ !== "JWT") ||
      !o.alg ||
      (a && o.alg !== a)
    );
  } catch {
    return !1;
  }
}
function ZM(t, a) {
  return !!(
    ((a === "v4" || !a) && zM.test(t)) ||
    ((a === "v6" || !a) && PM.test(t))
  );
}
class vs extends We {
  _parse(a) {
    if (
      (this._def.coerce && (a.data = String(a.data)),
      this._getType(a) !== Se.string)
    ) {
      const c = this._getOrReturnCtx(a);
      return (
        ge(c, {
          code: re.invalid_type,
          expected: Se.string,
          received: c.parsedType,
        }),
        Le
      );
    }
    const i = new jn();
    let o;
    for (const c of this._def.checks)
      if (c.kind === "min")
        a.data.length < c.value &&
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            code: re.too_small,
            minimum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "max")
        a.data.length > c.value &&
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            code: re.too_big,
            maximum: c.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "length") {
        const f = a.data.length > c.value,
          m = a.data.length < c.value;
        (f || m) &&
          ((o = this._getOrReturnCtx(a, o)),
          f
            ? ge(o, {
                code: re.too_big,
                maximum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message,
              })
            : m &&
              ge(o, {
                code: re.too_small,
                minimum: c.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: c.message,
              }),
          i.dirty());
      } else if (c.kind === "email")
        DM.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            validation: "email",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "emoji")
        If || (If = new RegExp(LM, "u")),
          If.test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              validation: "emoji",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty());
      else if (c.kind === "uuid")
        RM.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            validation: "uuid",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "nanoid")
        AM.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            validation: "nanoid",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "cuid")
        jM.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            validation: "cuid",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "cuid2")
        TM.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            validation: "cuid2",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "ulid")
        OM.test(a.data) ||
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            validation: "ulid",
            code: re.invalid_string,
            message: c.message,
          }),
          i.dirty());
      else if (c.kind === "url")
        try {
          new URL(a.data);
        } catch {
          (o = this._getOrReturnCtx(a, o)),
            ge(o, {
              validation: "url",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty();
        }
      else
        c.kind === "regex"
          ? ((c.regex.lastIndex = 0),
            c.regex.test(a.data) ||
              ((o = this._getOrReturnCtx(a, o)),
              ge(o, {
                validation: "regex",
                code: re.invalid_string,
                message: c.message,
              }),
              i.dirty()))
          : c.kind === "trim"
          ? (a.data = a.data.trim())
          : c.kind === "includes"
          ? a.data.includes(c.value, c.position) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              code: re.invalid_string,
              validation: { includes: c.value, position: c.position },
              message: c.message,
            }),
            i.dirty())
          : c.kind === "toLowerCase"
          ? (a.data = a.data.toLowerCase())
          : c.kind === "toUpperCase"
          ? (a.data = a.data.toUpperCase())
          : c.kind === "startsWith"
          ? a.data.startsWith(c.value) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              code: re.invalid_string,
              validation: { startsWith: c.value },
              message: c.message,
            }),
            i.dirty())
          : c.kind === "endsWith"
          ? a.data.endsWith(c.value) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              code: re.invalid_string,
              validation: { endsWith: c.value },
              message: c.message,
            }),
            i.dirty())
          : c.kind === "datetime"
          ? KM(c).test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              code: re.invalid_string,
              validation: "datetime",
              message: c.message,
            }),
            i.dirty())
          : c.kind === "date"
          ? BM.test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              code: re.invalid_string,
              validation: "date",
              message: c.message,
            }),
            i.dirty())
          : c.kind === "time"
          ? FM(c).test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              code: re.invalid_string,
              validation: "time",
              message: c.message,
            }),
            i.dirty())
          : c.kind === "duration"
          ? MM.test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              validation: "duration",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty())
          : c.kind === "ip"
          ? QM(a.data, c.version) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              validation: "ip",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty())
          : c.kind === "jwt"
          ? GM(a.data, c.alg) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              validation: "jwt",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty())
          : c.kind === "cidr"
          ? ZM(a.data, c.version) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              validation: "cidr",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty())
          : c.kind === "base64"
          ? VM.test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              validation: "base64",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty())
          : c.kind === "base64url"
          ? HM.test(a.data) ||
            ((o = this._getOrReturnCtx(a, o)),
            ge(o, {
              validation: "base64url",
              code: re.invalid_string,
              message: c.message,
            }),
            i.dirty())
          : tt.assertNever(c);
    return { status: i.value, value: a.data };
  }
  _regex(a, s, i) {
    return this.refinement((o) => a.test(o), {
      validation: s,
      code: re.invalid_string,
      ..._e.errToObj(i),
    });
  }
  _addCheck(a) {
    return new vs({ ...this._def, checks: [...this._def.checks, a] });
  }
  email(a) {
    return this._addCheck({ kind: "email", ..._e.errToObj(a) });
  }
  url(a) {
    return this._addCheck({ kind: "url", ..._e.errToObj(a) });
  }
  emoji(a) {
    return this._addCheck({ kind: "emoji", ..._e.errToObj(a) });
  }
  uuid(a) {
    return this._addCheck({ kind: "uuid", ..._e.errToObj(a) });
  }
  nanoid(a) {
    return this._addCheck({ kind: "nanoid", ..._e.errToObj(a) });
  }
  cuid(a) {
    return this._addCheck({ kind: "cuid", ..._e.errToObj(a) });
  }
  cuid2(a) {
    return this._addCheck({ kind: "cuid2", ..._e.errToObj(a) });
  }
  ulid(a) {
    return this._addCheck({ kind: "ulid", ..._e.errToObj(a) });
  }
  base64(a) {
    return this._addCheck({ kind: "base64", ..._e.errToObj(a) });
  }
  base64url(a) {
    return this._addCheck({ kind: "base64url", ..._e.errToObj(a) });
  }
  jwt(a) {
    return this._addCheck({ kind: "jwt", ..._e.errToObj(a) });
  }
  ip(a) {
    return this._addCheck({ kind: "ip", ..._e.errToObj(a) });
  }
  cidr(a) {
    return this._addCheck({ kind: "cidr", ..._e.errToObj(a) });
  }
  datetime(a) {
    return typeof a == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: a,
        })
      : this._addCheck({
          kind: "datetime",
          precision: typeof a?.precision > "u" ? null : a?.precision,
          offset: a?.offset ?? !1,
          local: a?.local ?? !1,
          ..._e.errToObj(a?.message),
        });
  }
  date(a) {
    return this._addCheck({ kind: "date", message: a });
  }
  time(a) {
    return typeof a == "string"
      ? this._addCheck({ kind: "time", precision: null, message: a })
      : this._addCheck({
          kind: "time",
          precision: typeof a?.precision > "u" ? null : a?.precision,
          ..._e.errToObj(a?.message),
        });
  }
  duration(a) {
    return this._addCheck({ kind: "duration", ..._e.errToObj(a) });
  }
  regex(a, s) {
    return this._addCheck({ kind: "regex", regex: a, ..._e.errToObj(s) });
  }
  includes(a, s) {
    return this._addCheck({
      kind: "includes",
      value: a,
      position: s?.position,
      ..._e.errToObj(s?.message),
    });
  }
  startsWith(a, s) {
    return this._addCheck({ kind: "startsWith", value: a, ..._e.errToObj(s) });
  }
  endsWith(a, s) {
    return this._addCheck({ kind: "endsWith", value: a, ..._e.errToObj(s) });
  }
  min(a, s) {
    return this._addCheck({ kind: "min", value: a, ..._e.errToObj(s) });
  }
  max(a, s) {
    return this._addCheck({ kind: "max", value: a, ..._e.errToObj(s) });
  }
  length(a, s) {
    return this._addCheck({ kind: "length", value: a, ..._e.errToObj(s) });
  }
  nonempty(a) {
    return this.min(1, _e.errToObj(a));
  }
  trim() {
    return new vs({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new vs({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new vs({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((a) => a.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((a) => a.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((a) => a.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((a) => a.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((a) => a.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((a) => a.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((a) => a.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((a) => a.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((a) => a.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((a) => a.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((a) => a.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((a) => a.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((a) => a.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((a) => a.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((a) => a.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((a) => a.kind === "base64url");
  }
  get minLength() {
    let a = null;
    for (const s of this._def.checks)
      s.kind === "min" && (a === null || s.value > a) && (a = s.value);
    return a;
  }
  get maxLength() {
    let a = null;
    for (const s of this._def.checks)
      s.kind === "max" && (a === null || s.value < a) && (a = s.value);
    return a;
  }
}
vs.create = (t) =>
  new vs({
    checks: [],
    typeName: Ue.ZodString,
    coerce: t?.coerce ?? !1,
    ...Ke(t),
  });
function YM(t, a) {
  const s = (t.toString().split(".")[1] || "").length,
    i = (a.toString().split(".")[1] || "").length,
    o = s > i ? s : i,
    c = Number.parseInt(t.toFixed(o).replace(".", "")),
    f = Number.parseInt(a.toFixed(o).replace(".", ""));
  return (c % f) / 10 ** o;
}
class Hl extends We {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(a) {
    if (
      (this._def.coerce && (a.data = Number(a.data)),
      this._getType(a) !== Se.number)
    ) {
      const c = this._getOrReturnCtx(a);
      return (
        ge(c, {
          code: re.invalid_type,
          expected: Se.number,
          received: c.parsedType,
        }),
        Le
      );
    }
    let i;
    const o = new jn();
    for (const c of this._def.checks)
      c.kind === "int"
        ? tt.isInteger(a.data) ||
          ((i = this._getOrReturnCtx(a, i)),
          ge(i, {
            code: re.invalid_type,
            expected: "integer",
            received: "float",
            message: c.message,
          }),
          o.dirty())
        : c.kind === "min"
        ? (c.inclusive ? a.data < c.value : a.data <= c.value) &&
          ((i = this._getOrReturnCtx(a, i)),
          ge(i, {
            code: re.too_small,
            minimum: c.value,
            type: "number",
            inclusive: c.inclusive,
            exact: !1,
            message: c.message,
          }),
          o.dirty())
        : c.kind === "max"
        ? (c.inclusive ? a.data > c.value : a.data >= c.value) &&
          ((i = this._getOrReturnCtx(a, i)),
          ge(i, {
            code: re.too_big,
            maximum: c.value,
            type: "number",
            inclusive: c.inclusive,
            exact: !1,
            message: c.message,
          }),
          o.dirty())
        : c.kind === "multipleOf"
        ? YM(a.data, c.value) !== 0 &&
          ((i = this._getOrReturnCtx(a, i)),
          ge(i, {
            code: re.not_multiple_of,
            multipleOf: c.value,
            message: c.message,
          }),
          o.dirty())
        : c.kind === "finite"
        ? Number.isFinite(a.data) ||
          ((i = this._getOrReturnCtx(a, i)),
          ge(i, { code: re.not_finite, message: c.message }),
          o.dirty())
        : tt.assertNever(c);
    return { status: o.value, value: a.data };
  }
  gte(a, s) {
    return this.setLimit("min", a, !0, _e.toString(s));
  }
  gt(a, s) {
    return this.setLimit("min", a, !1, _e.toString(s));
  }
  lte(a, s) {
    return this.setLimit("max", a, !0, _e.toString(s));
  }
  lt(a, s) {
    return this.setLimit("max", a, !1, _e.toString(s));
  }
  setLimit(a, s, i, o) {
    return new Hl({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: a, value: s, inclusive: i, message: _e.toString(o) },
      ],
    });
  }
  _addCheck(a) {
    return new Hl({ ...this._def, checks: [...this._def.checks, a] });
  }
  int(a) {
    return this._addCheck({ kind: "int", message: _e.toString(a) });
  }
  positive(a) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: _e.toString(a),
    });
  }
  negative(a) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: _e.toString(a),
    });
  }
  nonpositive(a) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: _e.toString(a),
    });
  }
  nonnegative(a) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: _e.toString(a),
    });
  }
  multipleOf(a, s) {
    return this._addCheck({
      kind: "multipleOf",
      value: a,
      message: _e.toString(s),
    });
  }
  finite(a) {
    return this._addCheck({ kind: "finite", message: _e.toString(a) });
  }
  safe(a) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: _e.toString(a),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: _e.toString(a),
    });
  }
  get minValue() {
    let a = null;
    for (const s of this._def.checks)
      s.kind === "min" && (a === null || s.value > a) && (a = s.value);
    return a;
  }
  get maxValue() {
    let a = null;
    for (const s of this._def.checks)
      s.kind === "max" && (a === null || s.value < a) && (a = s.value);
    return a;
  }
  get isInt() {
    return !!this._def.checks.find(
      (a) =>
        a.kind === "int" || (a.kind === "multipleOf" && tt.isInteger(a.value))
    );
  }
  get isFinite() {
    let a = null,
      s = null;
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min"
        ? (s === null || i.value > s) && (s = i.value)
        : i.kind === "max" && (a === null || i.value < a) && (a = i.value);
    }
    return Number.isFinite(s) && Number.isFinite(a);
  }
}
Hl.create = (t) =>
  new Hl({
    checks: [],
    typeName: Ue.ZodNumber,
    coerce: t?.coerce || !1,
    ...Ke(t),
  });
class Bl extends We {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(a) {
    if (this._def.coerce)
      try {
        a.data = BigInt(a.data);
      } catch {
        return this._getInvalidInput(a);
      }
    if (this._getType(a) !== Se.bigint) return this._getInvalidInput(a);
    let i;
    const o = new jn();
    for (const c of this._def.checks)
      c.kind === "min"
        ? (c.inclusive ? a.data < c.value : a.data <= c.value) &&
          ((i = this._getOrReturnCtx(a, i)),
          ge(i, {
            code: re.too_small,
            type: "bigint",
            minimum: c.value,
            inclusive: c.inclusive,
            message: c.message,
          }),
          o.dirty())
        : c.kind === "max"
        ? (c.inclusive ? a.data > c.value : a.data >= c.value) &&
          ((i = this._getOrReturnCtx(a, i)),
          ge(i, {
            code: re.too_big,
            type: "bigint",
            maximum: c.value,
            inclusive: c.inclusive,
            message: c.message,
          }),
          o.dirty())
        : c.kind === "multipleOf"
        ? a.data % c.value !== BigInt(0) &&
          ((i = this._getOrReturnCtx(a, i)),
          ge(i, {
            code: re.not_multiple_of,
            multipleOf: c.value,
            message: c.message,
          }),
          o.dirty())
        : tt.assertNever(c);
    return { status: o.value, value: a.data };
  }
  _getInvalidInput(a) {
    const s = this._getOrReturnCtx(a);
    return (
      ge(s, {
        code: re.invalid_type,
        expected: Se.bigint,
        received: s.parsedType,
      }),
      Le
    );
  }
  gte(a, s) {
    return this.setLimit("min", a, !0, _e.toString(s));
  }
  gt(a, s) {
    return this.setLimit("min", a, !1, _e.toString(s));
  }
  lte(a, s) {
    return this.setLimit("max", a, !0, _e.toString(s));
  }
  lt(a, s) {
    return this.setLimit("max", a, !1, _e.toString(s));
  }
  setLimit(a, s, i, o) {
    return new Bl({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: a, value: s, inclusive: i, message: _e.toString(o) },
      ],
    });
  }
  _addCheck(a) {
    return new Bl({ ...this._def, checks: [...this._def.checks, a] });
  }
  positive(a) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: _e.toString(a),
    });
  }
  negative(a) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: _e.toString(a),
    });
  }
  nonpositive(a) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: _e.toString(a),
    });
  }
  nonnegative(a) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: _e.toString(a),
    });
  }
  multipleOf(a, s) {
    return this._addCheck({
      kind: "multipleOf",
      value: a,
      message: _e.toString(s),
    });
  }
  get minValue() {
    let a = null;
    for (const s of this._def.checks)
      s.kind === "min" && (a === null || s.value > a) && (a = s.value);
    return a;
  }
  get maxValue() {
    let a = null;
    for (const s of this._def.checks)
      s.kind === "max" && (a === null || s.value < a) && (a = s.value);
    return a;
  }
}
Bl.create = (t) =>
  new Bl({
    checks: [],
    typeName: Ue.ZodBigInt,
    coerce: t?.coerce ?? !1,
    ...Ke(t),
  });
class $x extends We {
  _parse(a) {
    if (
      (this._def.coerce && (a.data = !!a.data), this._getType(a) !== Se.boolean)
    ) {
      const i = this._getOrReturnCtx(a);
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.boolean,
          received: i.parsedType,
        }),
        Le
      );
    }
    return Bn(a.data);
  }
}
$x.create = (t) =>
  new $x({ typeName: Ue.ZodBoolean, coerce: t?.coerce || !1, ...Ke(t) });
class Hc extends We {
  _parse(a) {
    if (
      (this._def.coerce && (a.data = new Date(a.data)),
      this._getType(a) !== Se.date)
    ) {
      const c = this._getOrReturnCtx(a);
      return (
        ge(c, {
          code: re.invalid_type,
          expected: Se.date,
          received: c.parsedType,
        }),
        Le
      );
    }
    if (Number.isNaN(a.data.getTime())) {
      const c = this._getOrReturnCtx(a);
      return ge(c, { code: re.invalid_date }), Le;
    }
    const i = new jn();
    let o;
    for (const c of this._def.checks)
      c.kind === "min"
        ? a.data.getTime() < c.value &&
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            code: re.too_small,
            message: c.message,
            inclusive: !0,
            exact: !1,
            minimum: c.value,
            type: "date",
          }),
          i.dirty())
        : c.kind === "max"
        ? a.data.getTime() > c.value &&
          ((o = this._getOrReturnCtx(a, o)),
          ge(o, {
            code: re.too_big,
            message: c.message,
            inclusive: !0,
            exact: !1,
            maximum: c.value,
            type: "date",
          }),
          i.dirty())
        : tt.assertNever(c);
    return { status: i.value, value: new Date(a.data.getTime()) };
  }
  _addCheck(a) {
    return new Hc({ ...this._def, checks: [...this._def.checks, a] });
  }
  min(a, s) {
    return this._addCheck({
      kind: "min",
      value: a.getTime(),
      message: _e.toString(s),
    });
  }
  max(a, s) {
    return this._addCheck({
      kind: "max",
      value: a.getTime(),
      message: _e.toString(s),
    });
  }
  get minDate() {
    let a = null;
    for (const s of this._def.checks)
      s.kind === "min" && (a === null || s.value > a) && (a = s.value);
    return a != null ? new Date(a) : null;
  }
  get maxDate() {
    let a = null;
    for (const s of this._def.checks)
      s.kind === "max" && (a === null || s.value < a) && (a = s.value);
    return a != null ? new Date(a) : null;
  }
}
Hc.create = (t) =>
  new Hc({
    checks: [],
    coerce: t?.coerce || !1,
    typeName: Ue.ZodDate,
    ...Ke(t),
  });
class Xx extends We {
  _parse(a) {
    if (this._getType(a) !== Se.symbol) {
      const i = this._getOrReturnCtx(a);
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.symbol,
          received: i.parsedType,
        }),
        Le
      );
    }
    return Bn(a.data);
  }
}
Xx.create = (t) => new Xx({ typeName: Ue.ZodSymbol, ...Ke(t) });
class Wx extends We {
  _parse(a) {
    if (this._getType(a) !== Se.undefined) {
      const i = this._getOrReturnCtx(a);
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.undefined,
          received: i.parsedType,
        }),
        Le
      );
    }
    return Bn(a.data);
  }
}
Wx.create = (t) => new Wx({ typeName: Ue.ZodUndefined, ...Ke(t) });
class Jx extends We {
  _parse(a) {
    if (this._getType(a) !== Se.null) {
      const i = this._getOrReturnCtx(a);
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.null,
          received: i.parsedType,
        }),
        Le
      );
    }
    return Bn(a.data);
  }
}
Jx.create = (t) => new Jx({ typeName: Ue.ZodNull, ...Ke(t) });
class eb extends We {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(a) {
    return Bn(a.data);
  }
}
eb.create = (t) => new eb({ typeName: Ue.ZodAny, ...Ke(t) });
class tb extends We {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(a) {
    return Bn(a.data);
  }
}
tb.create = (t) => new tb({ typeName: Ue.ZodUnknown, ...Ke(t) });
class js extends We {
  _parse(a) {
    const s = this._getOrReturnCtx(a);
    return (
      ge(s, {
        code: re.invalid_type,
        expected: Se.never,
        received: s.parsedType,
      }),
      Le
    );
  }
}
js.create = (t) => new js({ typeName: Ue.ZodNever, ...Ke(t) });
class nb extends We {
  _parse(a) {
    if (this._getType(a) !== Se.undefined) {
      const i = this._getOrReturnCtx(a);
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.void,
          received: i.parsedType,
        }),
        Le
      );
    }
    return Bn(a.data);
  }
}
nb.create = (t) => new nb({ typeName: Ue.ZodVoid, ...Ke(t) });
class fa extends We {
  _parse(a) {
    const { ctx: s, status: i } = this._processInputParams(a),
      o = this._def;
    if (s.parsedType !== Se.array)
      return (
        ge(s, {
          code: re.invalid_type,
          expected: Se.array,
          received: s.parsedType,
        }),
        Le
      );
    if (o.exactLength !== null) {
      const f = s.data.length > o.exactLength.value,
        m = s.data.length < o.exactLength.value;
      (f || m) &&
        (ge(s, {
          code: f ? re.too_big : re.too_small,
          minimum: m ? o.exactLength.value : void 0,
          maximum: f ? o.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        i.dirty());
    }
    if (
      (o.minLength !== null &&
        s.data.length < o.minLength.value &&
        (ge(s, {
          code: re.too_small,
          minimum: o.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        i.dirty()),
      o.maxLength !== null &&
        s.data.length > o.maxLength.value &&
        (ge(s, {
          code: re.too_big,
          maximum: o.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        i.dirty()),
      s.common.async)
    )
      return Promise.all(
        [...s.data].map((f, m) => o.type._parseAsync(new Es(s, f, s.path, m)))
      ).then((f) => jn.mergeArray(i, f));
    const c = [...s.data].map((f, m) =>
      o.type._parseSync(new Es(s, f, s.path, m))
    );
    return jn.mergeArray(i, c);
  }
  get element() {
    return this._def.type;
  }
  min(a, s) {
    return new fa({
      ...this._def,
      minLength: { value: a, message: _e.toString(s) },
    });
  }
  max(a, s) {
    return new fa({
      ...this._def,
      maxLength: { value: a, message: _e.toString(s) },
    });
  }
  length(a, s) {
    return new fa({
      ...this._def,
      exactLength: { value: a, message: _e.toString(s) },
    });
  }
  nonempty(a) {
    return this.min(1, a);
  }
}
fa.create = (t, a) =>
  new fa({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ue.ZodArray,
    ...Ke(a),
  });
function ti(t) {
  if (t instanceof kt) {
    const a = {};
    for (const s in t.shape) {
      const i = t.shape[s];
      a[s] = bs.create(ti(i));
    }
    return new kt({ ...t._def, shape: () => a });
  } else
    return t instanceof fa
      ? new fa({ ...t._def, type: ti(t.element) })
      : t instanceof bs
      ? bs.create(ti(t.unwrap()))
      : t instanceof fi
      ? fi.create(ti(t.unwrap()))
      : t instanceof nr
      ? nr.create(t.items.map((a) => ti(a)))
      : t;
}
class kt extends We {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const a = this._def.shape(),
      s = tt.objectKeys(a);
    return (this._cached = { shape: a, keys: s }), this._cached;
  }
  _parse(a) {
    if (this._getType(a) !== Se.object) {
      const y = this._getOrReturnCtx(a);
      return (
        ge(y, {
          code: re.invalid_type,
          expected: Se.object,
          received: y.parsedType,
        }),
        Le
      );
    }
    const { status: i, ctx: o } = this._processInputParams(a),
      { shape: c, keys: f } = this._getCached(),
      m = [];
    if (
      !(this._def.catchall instanceof js && this._def.unknownKeys === "strip")
    )
      for (const y in o.data) f.includes(y) || m.push(y);
    const p = [];
    for (const y of f) {
      const v = c[y],
        b = o.data[y];
      p.push({
        key: { status: "valid", value: y },
        value: v._parse(new Es(o, b, o.path, y)),
        alwaysSet: y in o.data,
      });
    }
    if (this._def.catchall instanceof js) {
      const y = this._def.unknownKeys;
      if (y === "passthrough")
        for (const v of m)
          p.push({
            key: { status: "valid", value: v },
            value: { status: "valid", value: o.data[v] },
          });
      else if (y === "strict")
        m.length > 0 &&
          (ge(o, { code: re.unrecognized_keys, keys: m }), i.dirty());
      else if (y !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const y = this._def.catchall;
      for (const v of m) {
        const b = o.data[v];
        p.push({
          key: { status: "valid", value: v },
          value: y._parse(new Es(o, b, o.path, v)),
          alwaysSet: v in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            const y = [];
            for (const v of p) {
              const b = await v.key,
                _ = await v.value;
              y.push({ key: b, value: _, alwaysSet: v.alwaysSet });
            }
            return y;
          })
          .then((y) => jn.mergeObjectSync(i, y))
      : jn.mergeObjectSync(i, p);
  }
  get shape() {
    return this._def.shape();
  }
  strict(a) {
    return (
      _e.errToObj,
      new kt({
        ...this._def,
        unknownKeys: "strict",
        ...(a !== void 0
          ? {
              errorMap: (s, i) => {
                const o = this._def.errorMap?.(s, i).message ?? i.defaultError;
                return s.code === "unrecognized_keys"
                  ? { message: _e.errToObj(a).message ?? o }
                  : { message: o };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new kt({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new kt({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(a) {
    return new kt({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...a }),
    });
  }
  merge(a) {
    return new kt({
      unknownKeys: a._def.unknownKeys,
      catchall: a._def.catchall,
      shape: () => ({ ...this._def.shape(), ...a._def.shape() }),
      typeName: Ue.ZodObject,
    });
  }
  setKey(a, s) {
    return this.augment({ [a]: s });
  }
  catchall(a) {
    return new kt({ ...this._def, catchall: a });
  }
  pick(a) {
    const s = {};
    for (const i of tt.objectKeys(a))
      a[i] && this.shape[i] && (s[i] = this.shape[i]);
    return new kt({ ...this._def, shape: () => s });
  }
  omit(a) {
    const s = {};
    for (const i of tt.objectKeys(this.shape)) a[i] || (s[i] = this.shape[i]);
    return new kt({ ...this._def, shape: () => s });
  }
  deepPartial() {
    return ti(this);
  }
  partial(a) {
    const s = {};
    for (const i of tt.objectKeys(this.shape)) {
      const o = this.shape[i];
      a && !a[i] ? (s[i] = o) : (s[i] = o.optional());
    }
    return new kt({ ...this._def, shape: () => s });
  }
  required(a) {
    const s = {};
    for (const i of tt.objectKeys(this.shape))
      if (a && !a[i]) s[i] = this.shape[i];
      else {
        let c = this.shape[i];
        for (; c instanceof bs; ) c = c._def.innerType;
        s[i] = c;
      }
    return new kt({ ...this._def, shape: () => s });
  }
  keyof() {
    return W1(tt.objectKeys(this.shape));
  }
}
kt.create = (t, a) =>
  new kt({
    shape: () => t,
    unknownKeys: "strip",
    catchall: js.create(),
    typeName: Ue.ZodObject,
    ...Ke(a),
  });
kt.strictCreate = (t, a) =>
  new kt({
    shape: () => t,
    unknownKeys: "strict",
    catchall: js.create(),
    typeName: Ue.ZodObject,
    ...Ke(a),
  });
kt.lazycreate = (t, a) =>
  new kt({
    shape: t,
    unknownKeys: "strip",
    catchall: js.create(),
    typeName: Ue.ZodObject,
    ...Ke(a),
  });
class Bc extends We {
  _parse(a) {
    const { ctx: s } = this._processInputParams(a),
      i = this._def.options;
    function o(c) {
      for (const m of c) if (m.result.status === "valid") return m.result;
      for (const m of c)
        if (m.result.status === "dirty")
          return s.common.issues.push(...m.ctx.common.issues), m.result;
      const f = c.map((m) => new Pa(m.ctx.common.issues));
      return ge(s, { code: re.invalid_union, unionErrors: f }), Le;
    }
    if (s.common.async)
      return Promise.all(
        i.map(async (c) => {
          const f = { ...s, common: { ...s.common, issues: [] }, parent: null };
          return {
            result: await c._parseAsync({
              data: s.data,
              path: s.path,
              parent: f,
            }),
            ctx: f,
          };
        })
      ).then(o);
    {
      let c;
      const f = [];
      for (const p of i) {
        const y = { ...s, common: { ...s.common, issues: [] }, parent: null },
          v = p._parseSync({ data: s.data, path: s.path, parent: y });
        if (v.status === "valid") return v;
        v.status === "dirty" && !c && (c = { result: v, ctx: y }),
          y.common.issues.length && f.push(y.common.issues);
      }
      if (c) return s.common.issues.push(...c.ctx.common.issues), c.result;
      const m = f.map((p) => new Pa(p));
      return ge(s, { code: re.invalid_union, unionErrors: m }), Le;
    }
  }
  get options() {
    return this._def.options;
  }
}
Bc.create = (t, a) => new Bc({ options: t, typeName: Ue.ZodUnion, ...Ke(a) });
function Eh(t, a) {
  const s = gs(t),
    i = gs(a);
  if (t === a) return { valid: !0, data: t };
  if (s === Se.object && i === Se.object) {
    const o = tt.objectKeys(a),
      c = tt.objectKeys(t).filter((m) => o.indexOf(m) !== -1),
      f = { ...t, ...a };
    for (const m of c) {
      const p = Eh(t[m], a[m]);
      if (!p.valid) return { valid: !1 };
      f[m] = p.data;
    }
    return { valid: !0, data: f };
  } else if (s === Se.array && i === Se.array) {
    if (t.length !== a.length) return { valid: !1 };
    const o = [];
    for (let c = 0; c < t.length; c++) {
      const f = t[c],
        m = a[c],
        p = Eh(f, m);
      if (!p.valid) return { valid: !1 };
      o.push(p.data);
    }
    return { valid: !0, data: o };
  } else
    return s === Se.date && i === Se.date && +t == +a
      ? { valid: !0, data: t }
      : { valid: !1 };
}
class Fc extends We {
  _parse(a) {
    const { status: s, ctx: i } = this._processInputParams(a),
      o = (c, f) => {
        if (Zx(c) || Zx(f)) return Le;
        const m = Eh(c.value, f.value);
        return m.valid
          ? ((Yx(c) || Yx(f)) && s.dirty(), { status: s.value, value: m.data })
          : (ge(i, { code: re.invalid_intersection_types }), Le);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i,
          }),
        ]).then(([c, f]) => o(c, f))
      : o(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i })
        );
  }
}
Fc.create = (t, a, s) =>
  new Fc({ left: t, right: a, typeName: Ue.ZodIntersection, ...Ke(s) });
class nr extends We {
  _parse(a) {
    const { status: s, ctx: i } = this._processInputParams(a);
    if (i.parsedType !== Se.array)
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.array,
          received: i.parsedType,
        }),
        Le
      );
    if (i.data.length < this._def.items.length)
      return (
        ge(i, {
          code: re.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        Le
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (ge(i, {
        code: re.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      s.dirty());
    const c = [...i.data]
      .map((f, m) => {
        const p = this._def.items[m] || this._def.rest;
        return p ? p._parse(new Es(i, f, i.path, m)) : null;
      })
      .filter((f) => !!f);
    return i.common.async
      ? Promise.all(c).then((f) => jn.mergeArray(s, f))
      : jn.mergeArray(s, c);
  }
  get items() {
    return this._def.items;
  }
  rest(a) {
    return new nr({ ...this._def, rest: a });
  }
}
nr.create = (t, a) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new nr({ items: t, typeName: Ue.ZodTuple, rest: null, ...Ke(a) });
};
class ab extends We {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(a) {
    const { status: s, ctx: i } = this._processInputParams(a);
    if (i.parsedType !== Se.map)
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.map,
          received: i.parsedType,
        }),
        Le
      );
    const o = this._def.keyType,
      c = this._def.valueType,
      f = [...i.data.entries()].map(([m, p], y) => ({
        key: o._parse(new Es(i, m, i.path, [y, "key"])),
        value: c._parse(new Es(i, p, i.path, [y, "value"])),
      }));
    if (i.common.async) {
      const m = new Map();
      return Promise.resolve().then(async () => {
        for (const p of f) {
          const y = await p.key,
            v = await p.value;
          if (y.status === "aborted" || v.status === "aborted") return Le;
          (y.status === "dirty" || v.status === "dirty") && s.dirty(),
            m.set(y.value, v.value);
        }
        return { status: s.value, value: m };
      });
    } else {
      const m = new Map();
      for (const p of f) {
        const y = p.key,
          v = p.value;
        if (y.status === "aborted" || v.status === "aborted") return Le;
        (y.status === "dirty" || v.status === "dirty") && s.dirty(),
          m.set(y.value, v.value);
      }
      return { status: s.value, value: m };
    }
  }
}
ab.create = (t, a, s) =>
  new ab({ valueType: a, keyType: t, typeName: Ue.ZodMap, ...Ke(s) });
class Fl extends We {
  _parse(a) {
    const { status: s, ctx: i } = this._processInputParams(a);
    if (i.parsedType !== Se.set)
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.set,
          received: i.parsedType,
        }),
        Le
      );
    const o = this._def;
    o.minSize !== null &&
      i.data.size < o.minSize.value &&
      (ge(i, {
        code: re.too_small,
        minimum: o.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      s.dirty()),
      o.maxSize !== null &&
        i.data.size > o.maxSize.value &&
        (ge(i, {
          code: re.too_big,
          maximum: o.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        s.dirty());
    const c = this._def.valueType;
    function f(p) {
      const y = new Set();
      for (const v of p) {
        if (v.status === "aborted") return Le;
        v.status === "dirty" && s.dirty(), y.add(v.value);
      }
      return { status: s.value, value: y };
    }
    const m = [...i.data.values()].map((p, y) =>
      c._parse(new Es(i, p, i.path, y))
    );
    return i.common.async ? Promise.all(m).then((p) => f(p)) : f(m);
  }
  min(a, s) {
    return new Fl({
      ...this._def,
      minSize: { value: a, message: _e.toString(s) },
    });
  }
  max(a, s) {
    return new Fl({
      ...this._def,
      maxSize: { value: a, message: _e.toString(s) },
    });
  }
  size(a, s) {
    return this.min(a, s).max(a, s);
  }
  nonempty(a) {
    return this.min(1, a);
  }
}
Fl.create = (t, a) =>
  new Fl({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: Ue.ZodSet,
    ...Ke(a),
  });
class sb extends We {
  get schema() {
    return this._def.getter();
  }
  _parse(a) {
    const { ctx: s } = this._processInputParams(a);
    return this._def.getter()._parse({ data: s.data, path: s.path, parent: s });
  }
}
sb.create = (t, a) => new sb({ getter: t, typeName: Ue.ZodLazy, ...Ke(a) });
class rb extends We {
  _parse(a) {
    if (a.data !== this._def.value) {
      const s = this._getOrReturnCtx(a);
      return (
        ge(s, {
          received: s.data,
          code: re.invalid_literal,
          expected: this._def.value,
        }),
        Le
      );
    }
    return { status: "valid", value: a.data };
  }
  get value() {
    return this._def.value;
  }
}
rb.create = (t, a) => new rb({ value: t, typeName: Ue.ZodLiteral, ...Ke(a) });
function W1(t, a) {
  return new ui({ values: t, typeName: Ue.ZodEnum, ...Ke(a) });
}
class ui extends We {
  _parse(a) {
    if (typeof a.data != "string") {
      const s = this._getOrReturnCtx(a),
        i = this._def.values;
      return (
        ge(s, {
          expected: tt.joinValues(i),
          received: s.parsedType,
          code: re.invalid_type,
        }),
        Le
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(a.data))
    ) {
      const s = this._getOrReturnCtx(a),
        i = this._def.values;
      return (
        ge(s, { received: s.data, code: re.invalid_enum_value, options: i }), Le
      );
    }
    return Bn(a.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const a = {};
    for (const s of this._def.values) a[s] = s;
    return a;
  }
  get Values() {
    const a = {};
    for (const s of this._def.values) a[s] = s;
    return a;
  }
  get Enum() {
    const a = {};
    for (const s of this._def.values) a[s] = s;
    return a;
  }
  extract(a, s = this._def) {
    return ui.create(a, { ...this._def, ...s });
  }
  exclude(a, s = this._def) {
    return ui.create(
      this.options.filter((i) => !a.includes(i)),
      { ...this._def, ...s }
    );
  }
}
ui.create = W1;
class ib extends We {
  _parse(a) {
    const s = tt.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(a);
    if (i.parsedType !== Se.string && i.parsedType !== Se.number) {
      const o = tt.objectValues(s);
      return (
        ge(i, {
          expected: tt.joinValues(o),
          received: i.parsedType,
          code: re.invalid_type,
        }),
        Le
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(tt.getValidEnumValues(this._def.values))),
      !this._cache.has(a.data))
    ) {
      const o = tt.objectValues(s);
      return (
        ge(i, { received: i.data, code: re.invalid_enum_value, options: o }), Le
      );
    }
    return Bn(a.data);
  }
  get enum() {
    return this._def.values;
  }
}
ib.create = (t, a) =>
  new ib({ values: t, typeName: Ue.ZodNativeEnum, ...Ke(a) });
class Kc extends We {
  unwrap() {
    return this._def.type;
  }
  _parse(a) {
    const { ctx: s } = this._processInputParams(a);
    if (s.parsedType !== Se.promise && s.common.async === !1)
      return (
        ge(s, {
          code: re.invalid_type,
          expected: Se.promise,
          received: s.parsedType,
        }),
        Le
      );
    const i = s.parsedType === Se.promise ? s.data : Promise.resolve(s.data);
    return Bn(
      i.then((o) =>
        this._def.type.parseAsync(o, {
          path: s.path,
          errorMap: s.common.contextualErrorMap,
        })
      )
    );
  }
}
Kc.create = (t, a) => new Kc({ type: t, typeName: Ue.ZodPromise, ...Ke(a) });
class di extends We {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Ue.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(a) {
    const { status: s, ctx: i } = this._processInputParams(a),
      o = this._def.effect || null,
      c = {
        addIssue: (f) => {
          ge(i, f), f.fatal ? s.abort() : s.dirty();
        },
        get path() {
          return i.path;
        },
      };
    if (((c.addIssue = c.addIssue.bind(c)), o.type === "preprocess")) {
      const f = o.transform(i.data, c);
      if (i.common.async)
        return Promise.resolve(f).then(async (m) => {
          if (s.value === "aborted") return Le;
          const p = await this._def.schema._parseAsync({
            data: m,
            path: i.path,
            parent: i,
          });
          return p.status === "aborted"
            ? Le
            : p.status === "dirty" || s.value === "dirty"
            ? Cl(p.value)
            : p;
        });
      {
        if (s.value === "aborted") return Le;
        const m = this._def.schema._parseSync({
          data: f,
          path: i.path,
          parent: i,
        });
        return m.status === "aborted"
          ? Le
          : m.status === "dirty" || s.value === "dirty"
          ? Cl(m.value)
          : m;
      }
    }
    if (o.type === "refinement") {
      const f = (m) => {
        const p = o.refinement(m, c);
        if (i.common.async) return Promise.resolve(p);
        if (p instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return m;
      };
      if (i.common.async === !1) {
        const m = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return m.status === "aborted"
          ? Le
          : (m.status === "dirty" && s.dirty(),
            f(m.value),
            { status: s.value, value: m.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((m) =>
            m.status === "aborted"
              ? Le
              : (m.status === "dirty" && s.dirty(),
                f(m.value).then(() => ({ status: s.value, value: m.value })))
          );
    }
    if (o.type === "transform")
      if (i.common.async === !1) {
        const f = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        if (!ci(f)) return Le;
        const m = o.transform(f.value, c);
        if (m instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: s.value, value: m };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((f) =>
            ci(f)
              ? Promise.resolve(o.transform(f.value, c)).then((m) => ({
                  status: s.value,
                  value: m,
                }))
              : Le
          );
    tt.assertNever(o);
  }
}
di.create = (t, a, s) =>
  new di({ schema: t, typeName: Ue.ZodEffects, effect: a, ...Ke(s) });
di.createWithPreprocess = (t, a, s) =>
  new di({
    schema: a,
    effect: { type: "preprocess", transform: t },
    typeName: Ue.ZodEffects,
    ...Ke(s),
  });
class bs extends We {
  _parse(a) {
    return this._getType(a) === Se.undefined
      ? Bn(void 0)
      : this._def.innerType._parse(a);
  }
  unwrap() {
    return this._def.innerType;
  }
}
bs.create = (t, a) =>
  new bs({ innerType: t, typeName: Ue.ZodOptional, ...Ke(a) });
class fi extends We {
  _parse(a) {
    return this._getType(a) === Se.null
      ? Bn(null)
      : this._def.innerType._parse(a);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fi.create = (t, a) =>
  new fi({ innerType: t, typeName: Ue.ZodNullable, ...Ke(a) });
class jh extends We {
  _parse(a) {
    const { ctx: s } = this._processInputParams(a);
    let i = s.data;
    return (
      s.parsedType === Se.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: s.path, parent: s })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
jh.create = (t, a) =>
  new jh({
    innerType: t,
    typeName: Ue.ZodDefault,
    defaultValue: typeof a.default == "function" ? a.default : () => a.default,
    ...Ke(a),
  });
class Th extends We {
  _parse(a) {
    const { ctx: s } = this._processInputParams(a),
      i = { ...s, common: { ...s.common, issues: [] } },
      o = this._def.innerType._parse({
        data: i.data,
        path: i.path,
        parent: { ...i },
      });
    return Vc(o)
      ? o.then((c) => ({
          status: "valid",
          value:
            c.status === "valid"
              ? c.value
              : this._def.catchValue({
                  get error() {
                    return new Pa(i.common.issues);
                  },
                  input: i.data,
                }),
        }))
      : {
          status: "valid",
          value:
            o.status === "valid"
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Pa(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Th.create = (t, a) =>
  new Th({
    innerType: t,
    typeName: Ue.ZodCatch,
    catchValue: typeof a.catch == "function" ? a.catch : () => a.catch,
    ...Ke(a),
  });
class lb extends We {
  _parse(a) {
    if (this._getType(a) !== Se.nan) {
      const i = this._getOrReturnCtx(a);
      return (
        ge(i, {
          code: re.invalid_type,
          expected: Se.nan,
          received: i.parsedType,
        }),
        Le
      );
    }
    return { status: "valid", value: a.data };
  }
}
lb.create = (t) => new lb({ typeName: Ue.ZodNaN, ...Ke(t) });
class IM extends We {
  _parse(a) {
    const { ctx: s } = this._processInputParams(a),
      i = s.data;
    return this._def.type._parse({ data: i, path: s.path, parent: s });
  }
  unwrap() {
    return this._def.type;
  }
}
class jm extends We {
  _parse(a) {
    const { status: s, ctx: i } = this._processInputParams(a);
    if (i.common.async)
      return (async () => {
        const c = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return c.status === "aborted"
          ? Le
          : c.status === "dirty"
          ? (s.dirty(), Cl(c.value))
          : this._def.out._parseAsync({
              data: c.value,
              path: i.path,
              parent: i,
            });
      })();
    {
      const o = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i,
      });
      return o.status === "aborted"
        ? Le
        : o.status === "dirty"
        ? (s.dirty(), { status: "dirty", value: o.value })
        : this._def.out._parseSync({ data: o.value, path: i.path, parent: i });
    }
  }
  static create(a, s) {
    return new jm({ in: a, out: s, typeName: Ue.ZodPipeline });
  }
}
class Oh extends We {
  _parse(a) {
    const s = this._def.innerType._parse(a),
      i = (o) => (ci(o) && (o.value = Object.freeze(o.value)), o);
    return Vc(s) ? s.then((o) => i(o)) : i(s);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Oh.create = (t, a) =>
  new Oh({ innerType: t, typeName: Ue.ZodReadonly, ...Ke(a) });
var Ue;
(function (t) {
  (t.ZodString = "ZodString"),
    (t.ZodNumber = "ZodNumber"),
    (t.ZodNaN = "ZodNaN"),
    (t.ZodBigInt = "ZodBigInt"),
    (t.ZodBoolean = "ZodBoolean"),
    (t.ZodDate = "ZodDate"),
    (t.ZodSymbol = "ZodSymbol"),
    (t.ZodUndefined = "ZodUndefined"),
    (t.ZodNull = "ZodNull"),
    (t.ZodAny = "ZodAny"),
    (t.ZodUnknown = "ZodUnknown"),
    (t.ZodNever = "ZodNever"),
    (t.ZodVoid = "ZodVoid"),
    (t.ZodArray = "ZodArray"),
    (t.ZodObject = "ZodObject"),
    (t.ZodUnion = "ZodUnion"),
    (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (t.ZodIntersection = "ZodIntersection"),
    (t.ZodTuple = "ZodTuple"),
    (t.ZodRecord = "ZodRecord"),
    (t.ZodMap = "ZodMap"),
    (t.ZodSet = "ZodSet"),
    (t.ZodFunction = "ZodFunction"),
    (t.ZodLazy = "ZodLazy"),
    (t.ZodLiteral = "ZodLiteral"),
    (t.ZodEnum = "ZodEnum"),
    (t.ZodEffects = "ZodEffects"),
    (t.ZodNativeEnum = "ZodNativeEnum"),
    (t.ZodOptional = "ZodOptional"),
    (t.ZodNullable = "ZodNullable"),
    (t.ZodDefault = "ZodDefault"),
    (t.ZodCatch = "ZodCatch"),
    (t.ZodPromise = "ZodPromise"),
    (t.ZodBranded = "ZodBranded"),
    (t.ZodPipeline = "ZodPipeline"),
    (t.ZodReadonly = "ZodReadonly");
})(Ue || (Ue = {}));
const qn = vs.create;
js.create;
fa.create;
const Tm = kt.create;
Bc.create;
Fc.create;
nr.create;
ui.create;
Kc.create;
bs.create;
fi.create;
var $M = Symbol.for("react.lazy"),
  Qc = $c[" use ".trim().toString()];
function XM(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
function J1(t) {
  return (
    t != null &&
    typeof t == "object" &&
    "$$typeof" in t &&
    t.$$typeof === $M &&
    "_payload" in t &&
    XM(t._payload)
  );
}
function ew(t) {
  const a = WM(t),
    s = g.forwardRef((i, o) => {
      let { children: c, ...f } = i;
      J1(c) && typeof Qc == "function" && (c = Qc(c._payload));
      const m = g.Children.toArray(c),
        p = m.find(e4);
      if (p) {
        const y = p.props.children,
          v = m.map((b) =>
            b === p
              ? g.Children.count(y) > 1
                ? g.Children.only(null)
                : g.isValidElement(y)
                ? y.props.children
                : null
              : b
          );
        return u.jsx(a, {
          ...f,
          ref: o,
          children: g.isValidElement(y) ? g.cloneElement(y, void 0, v) : null,
        });
      }
      return u.jsx(a, { ...f, ref: o, children: c });
    });
  return (s.displayName = `${t}.Slot`), s;
}
var tw = ew("Slot");
function WM(t) {
  const a = g.forwardRef((s, i) => {
    let { children: o, ...c } = s;
    if (
      (J1(o) && typeof Qc == "function" && (o = Qc(o._payload)),
      g.isValidElement(o))
    ) {
      const f = n4(o),
        m = t4(c, o.props);
      return (
        o.type !== g.Fragment && (m.ref = i ? Qh(i, f) : f),
        g.cloneElement(o, m)
      );
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return (a.displayName = `${t}.SlotClone`), a;
}
var JM = Symbol("radix.slottable");
function e4(t) {
  return (
    g.isValidElement(t) &&
    typeof t.type == "function" &&
    "__radixId" in t.type &&
    t.type.__radixId === JM
  );
}
function t4(t, a) {
  const s = { ...a };
  for (const i in a) {
    const o = t[i],
      c = a[i];
    /^on[A-Z]/.test(i)
      ? o && c
        ? (s[i] = (...m) => {
            const p = c(...m);
            return o(...m), p;
          })
        : o && (s[i] = o)
      : i === "style"
      ? (s[i] = { ...o, ...c })
      : i === "className" && (s[i] = [o, c].filter(Boolean).join(" "));
  }
  return { ...t, ...s };
}
function n4(t) {
  let a = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
    s = a && "isReactWarning" in a && a.isReactWarning;
  return s
    ? t.ref
    : ((a = Object.getOwnPropertyDescriptor(t, "ref")?.get),
      (s = a && "isReactWarning" in a && a.isReactWarning),
      s ? t.props.ref : t.props.ref || t.ref);
}
const a4 = eu(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground border border-primary-border",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm border-destructive-border",
          outline:
            " border [border-color:var(--button-outline)] shadow-xs active:shadow-none ",
          secondary:
            "border bg-secondary text-secondary-foreground border border-secondary-border ",
          ghost: "border border-transparent",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "min-h-9 px-4 py-2",
          sm: "min-h-8 rounded-md px-3 text-xs",
          lg: "min-h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Me = g.forwardRef(
    ({ className: t, variant: a, size: s, asChild: i = !1, ...o }, c) => {
      const f = i ? tw : "button";
      return u.jsx(f, {
        className: Ee(a4({ variant: a, size: s, className: t })),
        ref: c,
        ...o,
      });
    }
  );
Me.displayName = "Button";
const ft = g.forwardRef(({ className: t, type: a, ...s }, i) =>
  u.jsx("input", {
    type: a,
    className: Ee(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: i,
    ...s,
  })
);
ft.displayName = "Input";
var s4 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  cr = s4.reduce((t, a) => {
    const s = ew(`Primitive.${a}`),
      i = g.forwardRef((o, c) => {
        const { asChild: f, ...m } = o,
          p = f ? s : a;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(p, { ...m, ref: c })
        );
      });
    return (i.displayName = `Primitive.${a}`), { ...t, [a]: i };
  }, {}),
  r4 = "Label",
  nw = g.forwardRef((t, a) =>
    u.jsx(cr.label, {
      ...t,
      ref: a,
      onMouseDown: (s) => {
        s.target.closest("button, input, select, textarea") ||
          (t.onMouseDown?.(s),
          !s.defaultPrevented && s.detail > 1 && s.preventDefault());
      },
    })
  );
nw.displayName = r4;
var aw = nw;
const i4 = eu(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  gt = g.forwardRef(({ className: t, ...a }, s) =>
    u.jsx(aw, { ref: s, className: Ee(i4(), t), ...a })
  );
gt.displayName = aw.displayName;
const Om = iM,
  sw = g.createContext(null),
  Pn = ({ ...t }) =>
    u.jsx(sw.Provider, {
      value: { name: t.name },
      children: u.jsx(sM, { ...t }),
    }),
  hu = () => {
    const t = g.useContext(sw),
      a = g.useContext(rw),
      { getFieldState: s, formState: i } = rM();
    if (!t) throw new Error("useFormField should be used within <FormField>");
    if (!a) throw new Error("useFormField should be used within <FormItem>");
    const o = s(t.name, i),
      { id: c } = a;
    return {
      id: c,
      name: t.name,
      formItemId: `${c}-form-item`,
      formDescriptionId: `${c}-form-item-description`,
      formMessageId: `${c}-form-item-message`,
      ...o,
    };
  },
  rw = g.createContext(null),
  xn = g.forwardRef(({ className: t, ...a }, s) => {
    const i = g.useId();
    return u.jsx(rw.Provider, {
      value: { id: i },
      children: u.jsx("div", { ref: s, className: Ee("space-y-2", t), ...a }),
    });
  });
xn.displayName = "FormItem";
const bn = g.forwardRef(({ className: t, ...a }, s) => {
  const { error: i, formItemId: o } = hu();
  return u.jsx(gt, {
    ref: s,
    className: Ee(i && "text-destructive", t),
    htmlFor: o,
    ...a,
  });
});
bn.displayName = "FormLabel";
const wn = g.forwardRef(({ ...t }, a) => {
  const {
    error: s,
    formItemId: i,
    formDescriptionId: o,
    formMessageId: c,
  } = hu();
  return u.jsx(tw, {
    ref: a,
    id: i,
    "aria-describedby": s ? `${o} ${c}` : `${o}`,
    "aria-invalid": !!s,
    ...t,
  });
});
wn.displayName = "FormControl";
const l4 = g.forwardRef(({ className: t, ...a }, s) => {
  const { formDescriptionId: i } = hu();
  return u.jsx("p", {
    ref: s,
    id: i,
    className: Ee("text-[0.8rem] text-muted-foreground", t),
    ...a,
  });
});
l4.displayName = "FormDescription";
const Sn = g.forwardRef(({ className: t, children: a, ...s }, i) => {
  const { error: o, formMessageId: c } = hu(),
    f = o ? String(o?.message ?? "") : a;
  return f
    ? u.jsx("p", {
        ref: i,
        id: c,
        className: Ee("text-[0.8rem] font-medium text-destructive", t),
        ...s,
        children: f,
      })
    : null;
});
Sn.displayName = "FormMessage";
const o4 = Tm({
  username: qn().min(1, "Username is required"),
  password: qn().min(1, "Password is required"),
});
function c4() {
  const [, t] = Xc(),
    { login: a } = ya(),
    { toast: s } = Hn(),
    [i, o] = g.useState(!1),
    c = Cm({ resolver: Em(o4), defaultValues: { username: "", password: "" } }),
    f = pR({
      mutation: {
        onSuccess: (p) => {
          a(p.token, p.user), t("/dashboard");
        },
        onError: (p) => {
          s({
            title: "Login failed",
            description: p?.data?.error ?? "Invalid credentials",
            variant: "destructive",
          });
        },
      },
    }),
    m = (p) => {
      f.mutate({ data: p });
    };
  return u.jsx("div", {
    className:
      "min-h-screen auth-bg flex items-center justify-center p-4 relative z-10",
    children: u.jsxs("div", {
      className: "w-full max-w-md",
      children: [
        u.jsxs("div", {
          className: "text-center mb-8",
          children: [
            u.jsx("div", {
              className:
                "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 mb-4",
              children: u.jsx(ql, { className: "w-8 h-8 text-primary" }),
            }),
            u.jsx("h1", {
              className: "text-3xl font-bold text-white tracking-tight",
              children: "IT-qan",
            }),
            u.jsx("p", {
              className: "text-white/40 text-sm mt-1",
              children: "Team Learning Platform",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "glass rounded-2xl p-8",
          children: [
            u.jsx("h2", {
              className: "text-xl font-semibold text-white mb-1",
              children: "Welcome back",
            }),
            u.jsx("p", {
              className: "text-white/50 text-sm mb-6",
              children: "Sign in to your account",
            }),
            u.jsx(Om, {
              ...c,
              children: u.jsxs("form", {
                onSubmit: c.handleSubmit(m),
                className: "space-y-4",
                children: [
                  u.jsx(Pn, {
                    control: c.control,
                    name: "username",
                    render: ({ field: p }) =>
                      u.jsxs(xn, {
                        children: [
                          u.jsx(bn, {
                            className: "text-white/70 text-sm",
                            children: "Username",
                          }),
                          u.jsx(wn, {
                            children: u.jsx(ft, {
                              ...p,
                              "data-testid": "input-username",
                              placeholder: "Enter your username",
                              className:
                                "bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary/30",
                              autoComplete: "username",
                            }),
                          }),
                          u.jsx(Sn, {}),
                        ],
                      }),
                  }),
                  u.jsx(Pn, {
                    control: c.control,
                    name: "password",
                    render: ({ field: p }) =>
                      u.jsxs(xn, {
                        children: [
                          u.jsx(bn, {
                            className: "text-white/70 text-sm",
                            children: "Password",
                          }),
                          u.jsx(wn, {
                            children: u.jsxs("div", {
                              className: "relative",
                              children: [
                                u.jsx(ft, {
                                  ...p,
                                  "data-testid": "input-password",
                                  type: i ? "text" : "password",
                                  placeholder: "Enter your password",
                                  className:
                                    "bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-primary focus:ring-primary/30 pr-10",
                                  autoComplete: "current-password",
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: () => o((y) => !y),
                                  className:
                                    "absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors",
                                  children: i
                                    ? u.jsx(Ul, { className: "w-4 h-4" })
                                    : u.jsx(zl, { className: "w-4 h-4" }),
                                }),
                              ],
                            }),
                          }),
                          u.jsx(Sn, {}),
                        ],
                      }),
                  }),
                  u.jsx("div", {
                    className: "flex justify-end",
                    children: u.jsx(Rl, {
                      href: "/forgot-password",
                      children: u.jsx("span", {
                        className:
                          "text-xs text-primary/80 hover:text-primary cursor-pointer transition-colors",
                        children: "Forgot password?",
                      }),
                    }),
                  }),
                  u.jsx(Me, {
                    type: "submit",
                    "data-testid": "button-login",
                    disabled: f.isPending,
                    className:
                      "w-full bg-primary hover:bg-primary/90 text-white font-medium h-11 mt-2",
                    children: f.isPending
                      ? u.jsxs(u.Fragment, {
                          children: [
                            u.jsx(em, {
                              className: "w-4 h-4 mr-2 animate-spin",
                            }),
                            "Signing in...",
                          ],
                        })
                      : "Sign In",
                  }),
                ],
              }),
            }),
            u.jsxs("div", {
              className: "mt-6 text-center",
              children: [
                u.jsx("span", {
                  className: "text-white/40 text-sm",
                  children: "Don't have an account? ",
                }),
                u.jsx(Rl, {
                  href: "/register",
                  children: u.jsx("span", {
                    className:
                      "text-primary text-sm hover:text-primary/80 cursor-pointer transition-colors font-medium",
                    children: "Request access",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function ob(t, [a, s]) {
  return Math.min(s, Math.max(a, t));
}
var u4 = g.createContext(void 0);
function d4(t) {
  const a = g.useContext(u4);
  return t || a || "ltr";
}
var $f = 0;
function iw() {
  g.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", t[0] ?? cb()),
      document.body.insertAdjacentElement("beforeend", t[1] ?? cb()),
      $f++,
      () => {
        $f === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((a) => a.remove()),
          $f--;
      }
    );
  }, []);
}
function cb() {
  const t = document.createElement("span");
  return (
    t.setAttribute("data-radix-focus-guard", ""),
    (t.tabIndex = 0),
    (t.style.outline = "none"),
    (t.style.opacity = "0"),
    (t.style.position = "fixed"),
    (t.style.pointerEvents = "none"),
    t
  );
}
var Xf = "focusScope.autoFocusOnMount",
  Wf = "focusScope.autoFocusOnUnmount",
  ub = { bubbles: !1, cancelable: !0 },
  f4 = "FocusScope",
  Rm = g.forwardRef((t, a) => {
    const {
        loop: s = !1,
        trapped: i = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: c,
        ...f
      } = t,
      [m, p] = g.useState(null),
      y = Vn(o),
      v = Vn(c),
      b = g.useRef(null),
      _ = ut(a, (S) => p(S)),
      N = g.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    g.useEffect(() => {
      if (i) {
        let S = function (k) {
            if (N.paused || !m) return;
            const D = k.target;
            m.contains(D) ? (b.current = D) : ps(b.current, { select: !0 });
          },
          C = function (k) {
            if (N.paused || !m) return;
            const D = k.relatedTarget;
            D !== null && (m.contains(D) || ps(b.current, { select: !0 }));
          },
          A = function (k) {
            if (document.activeElement === document.body)
              for (const q of k) q.removedNodes.length > 0 && ps(m);
          };
        document.addEventListener("focusin", S),
          document.addEventListener("focusout", C);
        const O = new MutationObserver(A);
        return (
          m && O.observe(m, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", S),
              document.removeEventListener("focusout", C),
              O.disconnect();
          }
        );
      }
    }, [i, m, N.paused]),
      g.useEffect(() => {
        if (m) {
          fb.add(N);
          const S = document.activeElement;
          if (!m.contains(S)) {
            const A = new CustomEvent(Xf, ub);
            m.addEventListener(Xf, y),
              m.dispatchEvent(A),
              A.defaultPrevented ||
                (h4(v4(lw(m)), { select: !0 }),
                document.activeElement === S && ps(m));
          }
          return () => {
            m.removeEventListener(Xf, y),
              setTimeout(() => {
                const A = new CustomEvent(Wf, ub);
                m.addEventListener(Wf, v),
                  m.dispatchEvent(A),
                  A.defaultPrevented || ps(S ?? document.body, { select: !0 }),
                  m.removeEventListener(Wf, v),
                  fb.remove(N);
              }, 0);
          };
        }
      }, [m, y, v, N]);
    const j = g.useCallback(
      (S) => {
        if ((!s && !i) || N.paused) return;
        const C = S.key === "Tab" && !S.altKey && !S.ctrlKey && !S.metaKey,
          A = document.activeElement;
        if (C && A) {
          const O = S.currentTarget,
            [k, D] = m4(O);
          k && D
            ? !S.shiftKey && A === D
              ? (S.preventDefault(), s && ps(k, { select: !0 }))
              : S.shiftKey &&
                A === k &&
                (S.preventDefault(), s && ps(D, { select: !0 }))
            : A === O && S.preventDefault();
        }
      },
      [s, i, N.paused]
    );
    return u.jsx(Ye.div, { tabIndex: -1, ...f, ref: _, onKeyDown: j });
  });
Rm.displayName = f4;
function h4(t, { select: a = !1 } = {}) {
  const s = document.activeElement;
  for (const i of t)
    if ((ps(i, { select: a }), document.activeElement !== s)) return;
}
function m4(t) {
  const a = lw(t),
    s = db(a, t),
    i = db(a.reverse(), t);
  return [s, i];
}
function lw(t) {
  const a = [],
    s = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const o = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || o
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) a.push(s.currentNode);
  return a;
}
function db(t, a) {
  for (const s of t) if (!p4(s, { upTo: a })) return s;
}
function p4(t, { upTo: a }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (a !== void 0 && t === a) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function y4(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function ps(t, { select: a = !1 } = {}) {
  if (t && t.focus) {
    const s = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== s && y4(t) && a && t.select();
  }
}
var fb = g4();
function g4() {
  let t = [];
  return {
    add(a) {
      const s = t[0];
      a !== s && s?.pause(), (t = hb(t, a)), t.unshift(a);
    },
    remove(a) {
      (t = hb(t, a)), t[0]?.resume();
    },
  };
}
function hb(t, a) {
  const s = [...t],
    i = s.indexOf(a);
  return i !== -1 && s.splice(i, 1), s;
}
function v4(t) {
  return t.filter((a) => a.tagName !== "A");
}
function ow(t) {
  const a = g.useRef({ value: t, previous: t });
  return g.useMemo(
    () => (
      a.current.value !== t &&
        ((a.current.previous = a.current.value), (a.current.value = t)),
      a.current.previous
    ),
    [t]
  );
}
var x4 = function (t) {
    if (typeof document > "u") return null;
    var a = Array.isArray(t) ? t[0] : t;
    return a.ownerDocument.body;
  },
  Wr = new WeakMap(),
  bc = new WeakMap(),
  wc = {},
  Jf = 0,
  cw = function (t) {
    return t && (t.host || cw(t.parentNode));
  },
  b4 = function (t, a) {
    return a
      .map(function (s) {
        if (t.contains(s)) return s;
        var i = cw(s);
        return i && t.contains(i)
          ? i
          : (console.error(
              "aria-hidden",
              s,
              "in not contained inside",
              t,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (s) {
        return !!s;
      });
  },
  w4 = function (t, a, s, i) {
    var o = b4(a, Array.isArray(t) ? t : [t]);
    wc[s] || (wc[s] = new WeakMap());
    var c = wc[s],
      f = [],
      m = new Set(),
      p = new Set(o),
      y = function (b) {
        !b || m.has(b) || (m.add(b), y(b.parentNode));
      };
    o.forEach(y);
    var v = function (b) {
      !b ||
        p.has(b) ||
        Array.prototype.forEach.call(b.children, function (_) {
          if (m.has(_)) v(_);
          else
            try {
              var N = _.getAttribute(i),
                j = N !== null && N !== "false",
                S = (Wr.get(_) || 0) + 1,
                C = (c.get(_) || 0) + 1;
              Wr.set(_, S),
                c.set(_, C),
                f.push(_),
                S === 1 && j && bc.set(_, !0),
                C === 1 && _.setAttribute(s, "true"),
                j || _.setAttribute(i, "true");
            } catch (A) {
              console.error("aria-hidden: cannot operate on ", _, A);
            }
        });
    };
    return (
      v(a),
      m.clear(),
      Jf++,
      function () {
        f.forEach(function (b) {
          var _ = Wr.get(b) - 1,
            N = c.get(b) - 1;
          Wr.set(b, _),
            c.set(b, N),
            _ || (bc.has(b) || b.removeAttribute(i), bc.delete(b)),
            N || b.removeAttribute(s);
        }),
          Jf--,
          Jf ||
            ((Wr = new WeakMap()),
            (Wr = new WeakMap()),
            (bc = new WeakMap()),
            (wc = {}));
      }
    );
  },
  uw = function (t, a, s) {
    s === void 0 && (s = "data-aria-hidden");
    var i = Array.from(Array.isArray(t) ? t : [t]),
      o = x4(t);
    return o
      ? (i.push.apply(i, Array.from(o.querySelectorAll("[aria-live], script"))),
        w4(i, o, s, "aria-hidden"))
      : function () {
          return null;
        };
  },
  ca = function () {
    return (
      (ca =
        Object.assign ||
        function (a) {
          for (var s, i = 1, o = arguments.length; i < o; i++) {
            s = arguments[i];
            for (var c in s)
              Object.prototype.hasOwnProperty.call(s, c) && (a[c] = s[c]);
          }
          return a;
        }),
      ca.apply(this, arguments)
    );
  };
function dw(t, a) {
  var s = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      a.indexOf(i) < 0 &&
      (s[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(t); o < i.length; o++)
      a.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[o]) &&
        (s[i[o]] = t[i[o]]);
  return s;
}
function S4(t, a, s) {
  if (s || arguments.length === 2)
    for (var i = 0, o = a.length, c; i < o; i++)
      (c || !(i in a)) &&
        (c || (c = Array.prototype.slice.call(a, 0, i)), (c[i] = a[i]));
  return t.concat(c || Array.prototype.slice.call(a));
}
var jc = "right-scroll-bar-position",
  Tc = "width-before-scroll-bar",
  _4 = "with-scroll-bars-hidden",
  N4 = "--removed-body-scroll-bar-size";
function eh(t, a) {
  return typeof t == "function" ? t(a) : t && (t.current = a), t;
}
function C4(t, a) {
  var s = g.useState(function () {
    return {
      value: t,
      callback: a,
      facade: {
        get current() {
          return s.value;
        },
        set current(i) {
          var o = s.value;
          o !== i && ((s.value = i), s.callback(i, o));
        },
      },
    };
  })[0];
  return (s.callback = a), s.facade;
}
var E4 = typeof window < "u" ? g.useLayoutEffect : g.useEffect,
  mb = new WeakMap();
function j4(t, a) {
  var s = C4(null, function (i) {
    return t.forEach(function (o) {
      return eh(o, i);
    });
  });
  return (
    E4(
      function () {
        var i = mb.get(s);
        if (i) {
          var o = new Set(i),
            c = new Set(t),
            f = s.current;
          o.forEach(function (m) {
            c.has(m) || eh(m, null);
          }),
            c.forEach(function (m) {
              o.has(m) || eh(m, f);
            });
        }
        mb.set(s, t);
      },
      [t]
    ),
    s
  );
}
function T4(t) {
  return t;
}
function O4(t, a) {
  a === void 0 && (a = T4);
  var s = [],
    i = !1,
    o = {
      read: function () {
        if (i)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return s.length ? s[s.length - 1] : t;
      },
      useMedium: function (c) {
        var f = a(c, i);
        return (
          s.push(f),
          function () {
            s = s.filter(function (m) {
              return m !== f;
            });
          }
        );
      },
      assignSyncMedium: function (c) {
        for (i = !0; s.length; ) {
          var f = s;
          (s = []), f.forEach(c);
        }
        s = {
          push: function (m) {
            return c(m);
          },
          filter: function () {
            return s;
          },
        };
      },
      assignMedium: function (c) {
        i = !0;
        var f = [];
        if (s.length) {
          var m = s;
          (s = []), m.forEach(c), (f = s);
        }
        var p = function () {
            var v = f;
            (f = []), v.forEach(c);
          },
          y = function () {
            return Promise.resolve().then(p);
          };
        y(),
          (s = {
            push: function (v) {
              f.push(v), y();
            },
            filter: function (v) {
              return (f = f.filter(v)), s;
            },
          });
      },
    };
  return o;
}
function R4(t) {
  t === void 0 && (t = {});
  var a = O4(null);
  return (a.options = ca({ async: !0, ssr: !1 }, t)), a;
}
var fw = function (t) {
  var a = t.sideCar,
    s = dw(t, ["sideCar"]);
  if (!a)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var i = a.read();
  if (!i) throw new Error("Sidecar medium not found");
  return g.createElement(i, ca({}, s));
};
fw.isSideCarExport = !0;
function A4(t, a) {
  return t.useMedium(a), fw;
}
var hw = R4(),
  th = function () {},
  mu = g.forwardRef(function (t, a) {
    var s = g.useRef(null),
      i = g.useState({
        onScrollCapture: th,
        onWheelCapture: th,
        onTouchMoveCapture: th,
      }),
      o = i[0],
      c = i[1],
      f = t.forwardProps,
      m = t.children,
      p = t.className,
      y = t.removeScrollBar,
      v = t.enabled,
      b = t.shards,
      _ = t.sideCar,
      N = t.noRelative,
      j = t.noIsolation,
      S = t.inert,
      C = t.allowPinchZoom,
      A = t.as,
      O = A === void 0 ? "div" : A,
      k = t.gapMode,
      D = dw(t, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      q = _,
      X = j4([s, a]),
      Z = ca(ca({}, D), o);
    return g.createElement(
      g.Fragment,
      null,
      v &&
        g.createElement(q, {
          sideCar: hw,
          removeScrollBar: y,
          shards: b,
          noRelative: N,
          noIsolation: j,
          inert: S,
          setCallbacks: c,
          allowPinchZoom: !!C,
          lockRef: s,
          gapMode: k,
        }),
      f
        ? g.cloneElement(g.Children.only(m), ca(ca({}, Z), { ref: X }))
        : g.createElement(O, ca({}, Z, { className: p, ref: X }), m)
    );
  });
mu.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
mu.classNames = { fullWidth: Tc, zeroRight: jc };
var k4 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function M4() {
  if (!document) return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var a = k4();
  return a && t.setAttribute("nonce", a), t;
}
function D4(t, a) {
  t.styleSheet
    ? (t.styleSheet.cssText = a)
    : t.appendChild(document.createTextNode(a));
}
function L4(t) {
  var a = document.head || document.getElementsByTagName("head")[0];
  a.appendChild(t);
}
var U4 = function () {
    var t = 0,
      a = null;
    return {
      add: function (s) {
        t == 0 && (a = M4()) && (D4(a, s), L4(a)), t++;
      },
      remove: function () {
        t--,
          !t && a && (a.parentNode && a.parentNode.removeChild(a), (a = null));
      },
    };
  },
  z4 = function () {
    var t = U4();
    return function (a, s) {
      g.useEffect(
        function () {
          return (
            t.add(a),
            function () {
              t.remove();
            }
          );
        },
        [a && s]
      );
    };
  },
  mw = function () {
    var t = z4(),
      a = function (s) {
        var i = s.styles,
          o = s.dynamic;
        return t(i, o), null;
      };
    return a;
  },
  q4 = { left: 0, top: 0, right: 0, gap: 0 },
  nh = function (t) {
    return parseInt(t || "", 10) || 0;
  },
  P4 = function (t) {
    var a = window.getComputedStyle(document.body),
      s = a[t === "padding" ? "paddingLeft" : "marginLeft"],
      i = a[t === "padding" ? "paddingTop" : "marginTop"],
      o = a[t === "padding" ? "paddingRight" : "marginRight"];
    return [nh(s), nh(i), nh(o)];
  },
  V4 = function (t) {
    if ((t === void 0 && (t = "margin"), typeof window > "u")) return q4;
    var a = P4(t),
      s = document.documentElement.clientWidth,
      i = window.innerWidth;
    return {
      left: a[0],
      top: a[1],
      right: a[2],
      gap: Math.max(0, i - s + a[2] - a[0]),
    };
  },
  H4 = mw(),
  si = "data-scroll-locked",
  B4 = function (t, a, s, i) {
    var o = t.left,
      c = t.top,
      f = t.right,
      m = t.gap;
    return (
      s === void 0 && (s = "margin"),
      `
  .`
        .concat(
          _4,
          ` {
   overflow: hidden `
        )
        .concat(
          i,
          `;
   padding-right: `
        )
        .concat(m, "px ")
        .concat(
          i,
          `;
  }
  body[`
        )
        .concat(
          si,
          `] {
    overflow: hidden `
        )
        .concat(
          i,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            a && "position: relative ".concat(i, ";"),
            s === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  c,
                  `px;
    padding-right: `
                )
                .concat(
                  f,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(m, "px ")
                .concat(
                  i,
                  `;
    `
                ),
            s === "padding" &&
              "padding-right: ".concat(m, "px ").concat(i, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          jc,
          ` {
    right: `
        )
        .concat(m, "px ")
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(
          Tc,
          ` {
    margin-right: `
        )
        .concat(m, "px ")
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(jc, " .")
        .concat(
          jc,
          ` {
    right: 0 `
        )
        .concat(
          i,
          `;
  }
  
  .`
        )
        .concat(Tc, " .")
        .concat(
          Tc,
          ` {
    margin-right: 0 `
        )
        .concat(
          i,
          `;
  }
  
  body[`
        )
        .concat(
          si,
          `] {
    `
        )
        .concat(N4, ": ")
        .concat(
          m,
          `px;
  }
`
        )
    );
  },
  pb = function () {
    var t = parseInt(document.body.getAttribute(si) || "0", 10);
    return isFinite(t) ? t : 0;
  },
  F4 = function () {
    g.useEffect(function () {
      return (
        document.body.setAttribute(si, (pb() + 1).toString()),
        function () {
          var t = pb() - 1;
          t <= 0
            ? document.body.removeAttribute(si)
            : document.body.setAttribute(si, t.toString());
        }
      );
    }, []);
  },
  K4 = function (t) {
    var a = t.noRelative,
      s = t.noImportant,
      i = t.gapMode,
      o = i === void 0 ? "margin" : i;
    F4();
    var c = g.useMemo(
      function () {
        return V4(o);
      },
      [o]
    );
    return g.createElement(H4, { styles: B4(c, !a, o, s ? "" : "!important") });
  },
  Rh = !1;
if (typeof window < "u")
  try {
    var Sc = Object.defineProperty({}, "passive", {
      get: function () {
        return (Rh = !0), !0;
      },
    });
    window.addEventListener("test", Sc, Sc),
      window.removeEventListener("test", Sc, Sc);
  } catch {
    Rh = !1;
  }
var Jr = Rh ? { passive: !1 } : !1,
  Q4 = function (t) {
    return t.tagName === "TEXTAREA";
  },
  pw = function (t, a) {
    if (!(t instanceof Element)) return !1;
    var s = window.getComputedStyle(t);
    return (
      s[a] !== "hidden" &&
      !(s.overflowY === s.overflowX && !Q4(t) && s[a] === "visible")
    );
  },
  G4 = function (t) {
    return pw(t, "overflowY");
  },
  Z4 = function (t) {
    return pw(t, "overflowX");
  },
  yb = function (t, a) {
    var s = a.ownerDocument,
      i = a;
    do {
      typeof ShadowRoot < "u" && i instanceof ShadowRoot && (i = i.host);
      var o = yw(t, i);
      if (o) {
        var c = gw(t, i),
          f = c[1],
          m = c[2];
        if (f > m) return !0;
      }
      i = i.parentNode;
    } while (i && i !== s.body);
    return !1;
  },
  Y4 = function (t) {
    var a = t.scrollTop,
      s = t.scrollHeight,
      i = t.clientHeight;
    return [a, s, i];
  },
  I4 = function (t) {
    var a = t.scrollLeft,
      s = t.scrollWidth,
      i = t.clientWidth;
    return [a, s, i];
  },
  yw = function (t, a) {
    return t === "v" ? G4(a) : Z4(a);
  },
  gw = function (t, a) {
    return t === "v" ? Y4(a) : I4(a);
  },
  $4 = function (t, a) {
    return t === "h" && a === "rtl" ? -1 : 1;
  },
  X4 = function (t, a, s, i, o) {
    var c = $4(t, window.getComputedStyle(a).direction),
      f = c * i,
      m = s.target,
      p = a.contains(m),
      y = !1,
      v = f > 0,
      b = 0,
      _ = 0;
    do {
      if (!m) break;
      var N = gw(t, m),
        j = N[0],
        S = N[1],
        C = N[2],
        A = S - C - c * j;
      (j || A) && yw(t, m) && ((b += A), (_ += j));
      var O = m.parentNode;
      m = O && O.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? O.host : O;
    } while ((!p && m !== document.body) || (p && (a.contains(m) || a === m)));
    return ((v && Math.abs(b) < 1) || (!v && Math.abs(_) < 1)) && (y = !0), y;
  },
  _c = function (t) {
    return "changedTouches" in t
      ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
      : [0, 0];
  },
  gb = function (t) {
    return [t.deltaX, t.deltaY];
  },
  vb = function (t) {
    return t && "current" in t ? t.current : t;
  },
  W4 = function (t, a) {
    return t[0] === a[0] && t[1] === a[1];
  },
  J4 = function (t) {
    return `
  .block-interactivity-`
      .concat(
        t,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        t,
        ` {pointer-events: all;}
`
      );
  },
  eD = 0,
  ei = [];
function tD(t) {
  var a = g.useRef([]),
    s = g.useRef([0, 0]),
    i = g.useRef(),
    o = g.useState(eD++)[0],
    c = g.useState(mw)[0],
    f = g.useRef(t);
  g.useEffect(
    function () {
      f.current = t;
    },
    [t]
  ),
    g.useEffect(
      function () {
        if (t.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var S = S4([t.lockRef.current], (t.shards || []).map(vb), !0).filter(
            Boolean
          );
          return (
            S.forEach(function (C) {
              return C.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                S.forEach(function (C) {
                  return C.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [t.inert, t.lockRef.current, t.shards]
    );
  var m = g.useCallback(function (S, C) {
      if (
        ("touches" in S && S.touches.length === 2) ||
        (S.type === "wheel" && S.ctrlKey)
      )
        return !f.current.allowPinchZoom;
      var A = _c(S),
        O = s.current,
        k = "deltaX" in S ? S.deltaX : O[0] - A[0],
        D = "deltaY" in S ? S.deltaY : O[1] - A[1],
        q,
        X = S.target,
        Z = Math.abs(k) > Math.abs(D) ? "h" : "v";
      if ("touches" in S && Z === "h" && X.type === "range") return !1;
      var P = window.getSelection(),
        G = P && P.anchorNode,
        ue = G ? G === X || G.contains(X) : !1;
      if (ue) return !1;
      var ve = yb(Z, X);
      if (!ve) return !0;
      if ((ve ? (q = Z) : ((q = Z === "v" ? "h" : "v"), (ve = yb(Z, X))), !ve))
        return !1;
      if (
        (!i.current && "changedTouches" in S && (k || D) && (i.current = q), !q)
      )
        return !0;
      var te = i.current || q;
      return X4(te, C, S, te === "h" ? k : D);
    }, []),
    p = g.useCallback(function (S) {
      var C = S;
      if (!(!ei.length || ei[ei.length - 1] !== c)) {
        var A = "deltaY" in C ? gb(C) : _c(C),
          O = a.current.filter(function (q) {
            return (
              q.name === C.type &&
              (q.target === C.target || C.target === q.shadowParent) &&
              W4(q.delta, A)
            );
          })[0];
        if (O && O.should) {
          C.cancelable && C.preventDefault();
          return;
        }
        if (!O) {
          var k = (f.current.shards || [])
              .map(vb)
              .filter(Boolean)
              .filter(function (q) {
                return q.contains(C.target);
              }),
            D = k.length > 0 ? m(C, k[0]) : !f.current.noIsolation;
          D && C.cancelable && C.preventDefault();
        }
      }
    }, []),
    y = g.useCallback(function (S, C, A, O) {
      var k = { name: S, delta: C, target: A, should: O, shadowParent: nD(A) };
      a.current.push(k),
        setTimeout(function () {
          a.current = a.current.filter(function (D) {
            return D !== k;
          });
        }, 1);
    }, []),
    v = g.useCallback(function (S) {
      (s.current = _c(S)), (i.current = void 0);
    }, []),
    b = g.useCallback(function (S) {
      y(S.type, gb(S), S.target, m(S, t.lockRef.current));
    }, []),
    _ = g.useCallback(function (S) {
      y(S.type, _c(S), S.target, m(S, t.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      ei.push(c),
      t.setCallbacks({
        onScrollCapture: b,
        onWheelCapture: b,
        onTouchMoveCapture: _,
      }),
      document.addEventListener("wheel", p, Jr),
      document.addEventListener("touchmove", p, Jr),
      document.addEventListener("touchstart", v, Jr),
      function () {
        (ei = ei.filter(function (S) {
          return S !== c;
        })),
          document.removeEventListener("wheel", p, Jr),
          document.removeEventListener("touchmove", p, Jr),
          document.removeEventListener("touchstart", v, Jr);
      }
    );
  }, []);
  var N = t.removeScrollBar,
    j = t.inert;
  return g.createElement(
    g.Fragment,
    null,
    j ? g.createElement(c, { styles: J4(o) }) : null,
    N
      ? g.createElement(K4, { noRelative: t.noRelative, gapMode: t.gapMode })
      : null
  );
}
function nD(t) {
  for (var a = null; t !== null; )
    t instanceof ShadowRoot && ((a = t.host), (t = t.host)), (t = t.parentNode);
  return a;
}
const aD = A4(hw, tD);
var Am = g.forwardRef(function (t, a) {
  return g.createElement(mu, ca({}, t, { ref: a, sideCar: aD }));
});
Am.classNames = mu.classNames;
var sD = [" ", "Enter", "ArrowUp", "ArrowDown"],
  rD = [" ", "Enter"],
  ar = "Select",
  [pu, yu, iD] = Yb(ar),
  [xi] = lr(ar, [iD, ou]),
  gu = ou(),
  [lD, Rs] = xi(ar),
  [oD, cD] = xi(ar),
  vw = (t) => {
    const {
        __scopeSelect: a,
        children: s,
        open: i,
        defaultOpen: o,
        onOpenChange: c,
        value: f,
        defaultValue: m,
        onValueChange: p,
        dir: y,
        name: v,
        autoComplete: b,
        disabled: _,
        required: N,
        form: j,
      } = t,
      S = gu(a),
      [C, A] = g.useState(null),
      [O, k] = g.useState(null),
      [D, q] = g.useState(!1),
      X = d4(y),
      [Z, P] = Dl({ prop: i, defaultProp: o ?? !1, onChange: c, caller: ar }),
      [G, ue] = Dl({ prop: f, defaultProp: m, onChange: p, caller: ar }),
      ve = g.useRef(null),
      te = C ? j || !!C.closest("form") : !0,
      [oe, ee] = g.useState(new Set()),
      de = Array.from(oe)
        .map((L) => L.props.value)
        .join(";");
    return u.jsx(AO, {
      ...S,
      children: u.jsxs(lD, {
        required: N,
        scope: a,
        trigger: C,
        onTriggerChange: A,
        valueNode: O,
        onValueNodeChange: k,
        valueNodeHasChildren: D,
        onValueNodeHasChildrenChange: q,
        contentId: ni(),
        value: G,
        onValueChange: ue,
        open: Z,
        onOpenChange: P,
        dir: X,
        triggerPointerDownPosRef: ve,
        disabled: _,
        children: [
          u.jsx(pu.Provider, {
            scope: a,
            children: u.jsx(oD, {
              scope: t.__scopeSelect,
              onNativeOptionAdd: g.useCallback((L) => {
                ee((U) => new Set(U).add(L));
              }, []),
              onNativeOptionRemove: g.useCallback((L) => {
                ee((U) => {
                  const W = new Set(U);
                  return W.delete(L), W;
                });
              }, []),
              children: s,
            }),
          }),
          te
            ? u.jsxs(
                Bw,
                {
                  "aria-hidden": !0,
                  required: N,
                  tabIndex: -1,
                  name: v,
                  autoComplete: b,
                  value: G,
                  onChange: (L) => ue(L.target.value),
                  disabled: _,
                  form: j,
                  children: [
                    G === void 0 ? u.jsx("option", { value: "" }) : null,
                    Array.from(oe),
                  ],
                },
                de
              )
            : null,
        ],
      }),
    });
  };
vw.displayName = ar;
var xw = "SelectTrigger",
  bw = g.forwardRef((t, a) => {
    const { __scopeSelect: s, disabled: i = !1, ...o } = t,
      c = gu(s),
      f = Rs(xw, s),
      m = f.disabled || i,
      p = ut(a, f.onTriggerChange),
      y = yu(s),
      v = g.useRef("touch"),
      [b, _, N] = Kw((S) => {
        const C = y().filter((k) => !k.disabled),
          A = C.find((k) => k.value === f.value),
          O = Qw(C, S, A);
        O !== void 0 && f.onValueChange(O.value);
      }),
      j = (S) => {
        m || (f.onOpenChange(!0), N()),
          S &&
            (f.triggerPointerDownPosRef.current = {
              x: Math.round(S.pageX),
              y: Math.round(S.pageY),
            });
      };
    return u.jsx(m1, {
      asChild: !0,
      ...c,
      children: u.jsx(Ye.button, {
        type: "button",
        role: "combobox",
        "aria-controls": f.contentId,
        "aria-expanded": f.open,
        "aria-required": f.required,
        "aria-autocomplete": "none",
        dir: f.dir,
        "data-state": f.open ? "open" : "closed",
        disabled: m,
        "data-disabled": m ? "" : void 0,
        "data-placeholder": Fw(f.value) ? "" : void 0,
        ...o,
        ref: p,
        onClick: qe(o.onClick, (S) => {
          S.currentTarget.focus(), v.current !== "mouse" && j(S);
        }),
        onPointerDown: qe(o.onPointerDown, (S) => {
          v.current = S.pointerType;
          const C = S.target;
          C.hasPointerCapture(S.pointerId) &&
            C.releasePointerCapture(S.pointerId),
            S.button === 0 &&
              S.ctrlKey === !1 &&
              S.pointerType === "mouse" &&
              (j(S), S.preventDefault());
        }),
        onKeyDown: qe(o.onKeyDown, (S) => {
          const C = b.current !== "";
          !(S.ctrlKey || S.altKey || S.metaKey) &&
            S.key.length === 1 &&
            _(S.key),
            !(C && S.key === " ") &&
              sD.includes(S.key) &&
              (j(), S.preventDefault());
        }),
      }),
    });
  });
bw.displayName = xw;
var ww = "SelectValue",
  Sw = g.forwardRef((t, a) => {
    const {
        __scopeSelect: s,
        className: i,
        style: o,
        children: c,
        placeholder: f = "",
        ...m
      } = t,
      p = Rs(ww, s),
      { onValueNodeHasChildrenChange: y } = p,
      v = c !== void 0,
      b = ut(a, p.onValueNodeChange);
    return (
      Mt(() => {
        y(v);
      }, [y, v]),
      u.jsx(Ye.span, {
        ...m,
        ref: b,
        style: { pointerEvents: "none" },
        children: Fw(p.value) ? u.jsx(u.Fragment, { children: f }) : c,
      })
    );
  });
Sw.displayName = ww;
var uD = "SelectIcon",
  _w = g.forwardRef((t, a) => {
    const { __scopeSelect: s, children: i, ...o } = t;
    return u.jsx(Ye.span, {
      "aria-hidden": !0,
      ...o,
      ref: a,
      children: i || "▼",
    });
  });
_w.displayName = uD;
var dD = "SelectPortal",
  Nw = (t) => u.jsx(Gl, { asChild: !0, ...t });
Nw.displayName = dD;
var sr = "SelectContent",
  Cw = g.forwardRef((t, a) => {
    const s = Rs(sr, t.__scopeSelect),
      [i, o] = g.useState();
    if (
      (Mt(() => {
        o(new DocumentFragment());
      }, []),
      !s.open)
    ) {
      const c = i;
      return c
        ? pi.createPortal(
            u.jsx(Ew, {
              scope: t.__scopeSelect,
              children: u.jsx(pu.Slot, {
                scope: t.__scopeSelect,
                children: u.jsx("div", { children: t.children }),
              }),
            }),
            c
          )
        : null;
    }
    return u.jsx(jw, { ...t, ref: a });
  });
Cw.displayName = sr;
var Zn = 10,
  [Ew, As] = xi(sr),
  fD = "SelectContentImpl",
  hD = Ml("SelectContent.RemoveScroll"),
  jw = g.forwardRef((t, a) => {
    const {
        __scopeSelect: s,
        position: i = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        side: m,
        sideOffset: p,
        align: y,
        alignOffset: v,
        arrowPadding: b,
        collisionBoundary: _,
        collisionPadding: N,
        sticky: j,
        hideWhenDetached: S,
        avoidCollisions: C,
        ...A
      } = t,
      O = Rs(sr, s),
      [k, D] = g.useState(null),
      [q, X] = g.useState(null),
      Z = ut(a, (me) => D(me)),
      [P, G] = g.useState(null),
      [ue, ve] = g.useState(null),
      te = yu(s),
      [oe, ee] = g.useState(!1),
      de = g.useRef(!1);
    g.useEffect(() => {
      if (k) return uw(k);
    }, [k]),
      iw();
    const L = g.useCallback(
        (me) => {
          const [Te, ...ke] = te().map((Je) => Je.ref.current),
            [Ie] = ke.slice(-1),
            Be = document.activeElement;
          for (const Je of me)
            if (
              Je === Be ||
              (Je?.scrollIntoView({ block: "nearest" }),
              Je === Te && q && (q.scrollTop = 0),
              Je === Ie && q && (q.scrollTop = q.scrollHeight),
              Je?.focus(),
              document.activeElement !== Be)
            )
              return;
        },
        [te, q]
      ),
      U = g.useCallback(() => L([P, k]), [L, P, k]);
    g.useEffect(() => {
      oe && U();
    }, [oe, U]);
    const { onOpenChange: W, triggerPointerDownPosRef: fe } = O;
    g.useEffect(() => {
      if (k) {
        let me = { x: 0, y: 0 };
        const Te = (Ie) => {
            me = {
              x: Math.abs(Math.round(Ie.pageX) - (fe.current?.x ?? 0)),
              y: Math.abs(Math.round(Ie.pageY) - (fe.current?.y ?? 0)),
            };
          },
          ke = (Ie) => {
            me.x <= 10 && me.y <= 10
              ? Ie.preventDefault()
              : k.contains(Ie.target) || W(!1),
              document.removeEventListener("pointermove", Te),
              (fe.current = null);
          };
        return (
          fe.current !== null &&
            (document.addEventListener("pointermove", Te),
            document.addEventListener("pointerup", ke, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", Te),
              document.removeEventListener("pointerup", ke, { capture: !0 });
          }
        );
      }
    }, [k, W, fe]),
      g.useEffect(() => {
        const me = () => W(!1);
        return (
          window.addEventListener("blur", me),
          window.addEventListener("resize", me),
          () => {
            window.removeEventListener("blur", me),
              window.removeEventListener("resize", me);
          }
        );
      }, [W]);
    const [E, I] = Kw((me) => {
        const Te = te().filter((Be) => !Be.disabled),
          ke = Te.find((Be) => Be.ref.current === document.activeElement),
          Ie = Qw(Te, me, ke);
        Ie && setTimeout(() => Ie.ref.current.focus());
      }),
      le = g.useCallback(
        (me, Te, ke) => {
          const Ie = !de.current && !ke;
          ((O.value !== void 0 && O.value === Te) || Ie) &&
            (G(me), Ie && (de.current = !0));
        },
        [O.value]
      ),
      ae = g.useCallback(() => k?.focus(), [k]),
      pe = g.useCallback(
        (me, Te, ke) => {
          const Ie = !de.current && !ke;
          ((O.value !== void 0 && O.value === Te) || Ie) && ve(me);
        },
        [O.value]
      ),
      Ne = i === "popper" ? Ah : Tw,
      he =
        Ne === Ah
          ? {
              side: m,
              sideOffset: p,
              align: y,
              alignOffset: v,
              arrowPadding: b,
              collisionBoundary: _,
              collisionPadding: N,
              sticky: j,
              hideWhenDetached: S,
              avoidCollisions: C,
            }
          : {};
    return u.jsx(Ew, {
      scope: s,
      content: k,
      viewport: q,
      onViewportChange: X,
      itemRefCallback: le,
      selectedItem: P,
      onItemLeave: ae,
      itemTextRefCallback: pe,
      focusSelectedItem: U,
      selectedItemText: ue,
      position: i,
      isPositioned: oe,
      searchRef: E,
      children: u.jsx(Am, {
        as: hD,
        allowPinchZoom: !0,
        children: u.jsx(Rm, {
          asChild: !0,
          trapped: O.open,
          onMountAutoFocus: (me) => {
            me.preventDefault();
          },
          onUnmountAutoFocus: qe(o, (me) => {
            O.trigger?.focus({ preventScroll: !0 }), me.preventDefault();
          }),
          children: u.jsx(Ql, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: c,
            onPointerDownOutside: f,
            onFocusOutside: (me) => me.preventDefault(),
            onDismiss: () => O.onOpenChange(!1),
            children: u.jsx(Ne, {
              role: "listbox",
              id: O.contentId,
              "data-state": O.open ? "open" : "closed",
              dir: O.dir,
              onContextMenu: (me) => me.preventDefault(),
              ...A,
              ...he,
              onPlaced: () => ee(!0),
              ref: Z,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...A.style,
              },
              onKeyDown: qe(A.onKeyDown, (me) => {
                const Te = me.ctrlKey || me.altKey || me.metaKey;
                if (
                  (me.key === "Tab" && me.preventDefault(),
                  !Te && me.key.length === 1 && I(me.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(me.key))
                ) {
                  let Ie = te()
                    .filter((Be) => !Be.disabled)
                    .map((Be) => Be.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(me.key) &&
                      (Ie = Ie.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(me.key))
                  ) {
                    const Be = me.target,
                      Je = Ie.indexOf(Be);
                    Ie = Ie.slice(Je + 1);
                  }
                  setTimeout(() => L(Ie)), me.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
jw.displayName = fD;
var mD = "SelectItemAlignedPosition",
  Tw = g.forwardRef((t, a) => {
    const { __scopeSelect: s, onPlaced: i, ...o } = t,
      c = Rs(sr, s),
      f = As(sr, s),
      [m, p] = g.useState(null),
      [y, v] = g.useState(null),
      b = ut(a, (Z) => v(Z)),
      _ = yu(s),
      N = g.useRef(!1),
      j = g.useRef(!0),
      {
        viewport: S,
        selectedItem: C,
        selectedItemText: A,
        focusSelectedItem: O,
      } = f,
      k = g.useCallback(() => {
        if (c.trigger && c.valueNode && m && y && S && C && A) {
          const Z = c.trigger.getBoundingClientRect(),
            P = y.getBoundingClientRect(),
            G = c.valueNode.getBoundingClientRect(),
            ue = A.getBoundingClientRect();
          if (c.dir !== "rtl") {
            const Be = ue.left - P.left,
              Je = G.left - Be,
              mt = Z.left - Je,
              jt = Z.width + mt,
              ks = Math.max(jt, P.width),
              Ba = window.innerWidth - Zn,
              Qt = ob(Je, [Zn, Math.max(Zn, Ba - ks)]);
            (m.style.minWidth = jt + "px"), (m.style.left = Qt + "px");
          } else {
            const Be = P.right - ue.right,
              Je = window.innerWidth - G.right - Be,
              mt = window.innerWidth - Z.right - Je,
              jt = Z.width + mt,
              ks = Math.max(jt, P.width),
              Ba = window.innerWidth - Zn,
              Qt = ob(Je, [Zn, Math.max(Zn, Ba - ks)]);
            (m.style.minWidth = jt + "px"), (m.style.right = Qt + "px");
          }
          const ve = _(),
            te = window.innerHeight - Zn * 2,
            oe = S.scrollHeight,
            ee = window.getComputedStyle(y),
            de = parseInt(ee.borderTopWidth, 10),
            L = parseInt(ee.paddingTop, 10),
            U = parseInt(ee.borderBottomWidth, 10),
            W = parseInt(ee.paddingBottom, 10),
            fe = de + L + oe + W + U,
            E = Math.min(C.offsetHeight * 5, fe),
            I = window.getComputedStyle(S),
            le = parseInt(I.paddingTop, 10),
            ae = parseInt(I.paddingBottom, 10),
            pe = Z.top + Z.height / 2 - Zn,
            Ne = te - pe,
            he = C.offsetHeight / 2,
            me = C.offsetTop + he,
            Te = de + L + me,
            ke = fe - Te;
          if (Te <= pe) {
            const Be = ve.length > 0 && C === ve[ve.length - 1].ref.current;
            m.style.bottom = "0px";
            const Je = y.clientHeight - S.offsetTop - S.offsetHeight,
              mt = Math.max(Ne, he + (Be ? ae : 0) + Je + U),
              jt = Te + mt;
            m.style.height = jt + "px";
          } else {
            const Be = ve.length > 0 && C === ve[0].ref.current;
            m.style.top = "0px";
            const mt = Math.max(pe, de + S.offsetTop + (Be ? le : 0) + he) + ke;
            (m.style.height = mt + "px"), (S.scrollTop = Te - pe + S.offsetTop);
          }
          (m.style.margin = `${Zn}px 0`),
            (m.style.minHeight = E + "px"),
            (m.style.maxHeight = te + "px"),
            i?.(),
            requestAnimationFrame(() => (N.current = !0));
        }
      }, [_, c.trigger, c.valueNode, m, y, S, C, A, c.dir, i]);
    Mt(() => k(), [k]);
    const [D, q] = g.useState();
    Mt(() => {
      y && q(window.getComputedStyle(y).zIndex);
    }, [y]);
    const X = g.useCallback(
      (Z) => {
        Z && j.current === !0 && (k(), O?.(), (j.current = !1));
      },
      [k, O]
    );
    return u.jsx(yD, {
      scope: s,
      contentWrapper: m,
      shouldExpandOnScrollRef: N,
      onScrollButtonChange: X,
      children: u.jsx("div", {
        ref: p,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: D,
        },
        children: u.jsx(Ye.div, {
          ...o,
          ref: b,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
Tw.displayName = mD;
var pD = "SelectPopperPosition",
  Ah = g.forwardRef((t, a) => {
    const {
        __scopeSelect: s,
        align: i = "start",
        collisionPadding: o = Zn,
        ...c
      } = t,
      f = gu(s);
    return u.jsx(p1, {
      ...f,
      ...c,
      ref: a,
      align: i,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...c.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Ah.displayName = pD;
var [yD, km] = xi(sr, {}),
  kh = "SelectViewport",
  Ow = g.forwardRef((t, a) => {
    const { __scopeSelect: s, nonce: i, ...o } = t,
      c = As(kh, s),
      f = km(kh, s),
      m = ut(a, c.onViewportChange),
      p = g.useRef(0);
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: i,
        }),
        u.jsx(pu.Slot, {
          scope: s,
          children: u.jsx(Ye.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: m,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: qe(o.onScroll, (y) => {
              const v = y.currentTarget,
                { contentWrapper: b, shouldExpandOnScrollRef: _ } = f;
              if (_?.current && b) {
                const N = Math.abs(p.current - v.scrollTop);
                if (N > 0) {
                  const j = window.innerHeight - Zn * 2,
                    S = parseFloat(b.style.minHeight),
                    C = parseFloat(b.style.height),
                    A = Math.max(S, C);
                  if (A < j) {
                    const O = A + N,
                      k = Math.min(j, O),
                      D = O - k;
                    (b.style.height = k + "px"),
                      b.style.bottom === "0px" &&
                        ((v.scrollTop = D > 0 ? D : 0),
                        (b.style.justifyContent = "flex-end"));
                  }
                }
              }
              p.current = v.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Ow.displayName = kh;
var Rw = "SelectGroup",
  [gD, vD] = xi(Rw),
  xD = g.forwardRef((t, a) => {
    const { __scopeSelect: s, ...i } = t,
      o = ni();
    return u.jsx(gD, {
      scope: s,
      id: o,
      children: u.jsx(Ye.div, {
        role: "group",
        "aria-labelledby": o,
        ...i,
        ref: a,
      }),
    });
  });
xD.displayName = Rw;
var Aw = "SelectLabel",
  kw = g.forwardRef((t, a) => {
    const { __scopeSelect: s, ...i } = t,
      o = vD(Aw, s);
    return u.jsx(Ye.div, { id: o.id, ...i, ref: a });
  });
kw.displayName = Aw;
var Gc = "SelectItem",
  [bD, Mw] = xi(Gc),
  Dw = g.forwardRef((t, a) => {
    const {
        __scopeSelect: s,
        value: i,
        disabled: o = !1,
        textValue: c,
        ...f
      } = t,
      m = Rs(Gc, s),
      p = As(Gc, s),
      y = m.value === i,
      [v, b] = g.useState(c ?? ""),
      [_, N] = g.useState(!1),
      j = ut(a, (O) => p.itemRefCallback?.(O, i, o)),
      S = ni(),
      C = g.useRef("touch"),
      A = () => {
        o || (m.onValueChange(i), m.onOpenChange(!1));
      };
    if (i === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return u.jsx(bD, {
      scope: s,
      value: i,
      disabled: o,
      textId: S,
      isSelected: y,
      onItemTextChange: g.useCallback((O) => {
        b((k) => k || (O?.textContent ?? "").trim());
      }, []),
      children: u.jsx(pu.ItemSlot, {
        scope: s,
        value: i,
        disabled: o,
        textValue: v,
        children: u.jsx(Ye.div, {
          role: "option",
          "aria-labelledby": S,
          "data-highlighted": _ ? "" : void 0,
          "aria-selected": y && _,
          "data-state": y ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...f,
          ref: j,
          onFocus: qe(f.onFocus, () => N(!0)),
          onBlur: qe(f.onBlur, () => N(!1)),
          onClick: qe(f.onClick, () => {
            C.current !== "mouse" && A();
          }),
          onPointerUp: qe(f.onPointerUp, () => {
            C.current === "mouse" && A();
          }),
          onPointerDown: qe(f.onPointerDown, (O) => {
            C.current = O.pointerType;
          }),
          onPointerMove: qe(f.onPointerMove, (O) => {
            (C.current = O.pointerType),
              o
                ? p.onItemLeave?.()
                : C.current === "mouse" &&
                  O.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: qe(f.onPointerLeave, (O) => {
            O.currentTarget === document.activeElement && p.onItemLeave?.();
          }),
          onKeyDown: qe(f.onKeyDown, (O) => {
            (p.searchRef?.current !== "" && O.key === " ") ||
              (rD.includes(O.key) && A(), O.key === " " && O.preventDefault());
          }),
        }),
      }),
    });
  });
Dw.displayName = Gc;
var El = "SelectItemText",
  Lw = g.forwardRef((t, a) => {
    const { __scopeSelect: s, className: i, style: o, ...c } = t,
      f = Rs(El, s),
      m = As(El, s),
      p = Mw(El, s),
      y = cD(El, s),
      [v, b] = g.useState(null),
      _ = ut(
        a,
        (A) => b(A),
        p.onItemTextChange,
        (A) => m.itemTextRefCallback?.(A, p.value, p.disabled)
      ),
      N = v?.textContent,
      j = g.useMemo(
        () =>
          u.jsx(
            "option",
            { value: p.value, disabled: p.disabled, children: N },
            p.value
          ),
        [p.disabled, p.value, N]
      ),
      { onNativeOptionAdd: S, onNativeOptionRemove: C } = y;
    return (
      Mt(() => (S(j), () => C(j)), [S, C, j]),
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(Ye.span, { id: p.textId, ...c, ref: _ }),
          p.isSelected && f.valueNode && !f.valueNodeHasChildren
            ? pi.createPortal(c.children, f.valueNode)
            : null,
        ],
      })
    );
  });
Lw.displayName = El;
var Uw = "SelectItemIndicator",
  zw = g.forwardRef((t, a) => {
    const { __scopeSelect: s, ...i } = t;
    return Mw(Uw, s).isSelected
      ? u.jsx(Ye.span, { "aria-hidden": !0, ...i, ref: a })
      : null;
  });
zw.displayName = Uw;
var Mh = "SelectScrollUpButton",
  qw = g.forwardRef((t, a) => {
    const s = As(Mh, t.__scopeSelect),
      i = km(Mh, t.__scopeSelect),
      [o, c] = g.useState(!1),
      f = ut(a, i.onScrollButtonChange);
    return (
      Mt(() => {
        if (s.viewport && s.isPositioned) {
          let m = function () {
            const y = p.scrollTop > 0;
            c(y);
          };
          const p = s.viewport;
          return (
            m(),
            p.addEventListener("scroll", m),
            () => p.removeEventListener("scroll", m)
          );
        }
      }, [s.viewport, s.isPositioned]),
      o
        ? u.jsx(Vw, {
            ...t,
            ref: f,
            onAutoScroll: () => {
              const { viewport: m, selectedItem: p } = s;
              m && p && (m.scrollTop = m.scrollTop - p.offsetHeight);
            },
          })
        : null
    );
  });
qw.displayName = Mh;
var Dh = "SelectScrollDownButton",
  Pw = g.forwardRef((t, a) => {
    const s = As(Dh, t.__scopeSelect),
      i = km(Dh, t.__scopeSelect),
      [o, c] = g.useState(!1),
      f = ut(a, i.onScrollButtonChange);
    return (
      Mt(() => {
        if (s.viewport && s.isPositioned) {
          let m = function () {
            const y = p.scrollHeight - p.clientHeight,
              v = Math.ceil(p.scrollTop) < y;
            c(v);
          };
          const p = s.viewport;
          return (
            m(),
            p.addEventListener("scroll", m),
            () => p.removeEventListener("scroll", m)
          );
        }
      }, [s.viewport, s.isPositioned]),
      o
        ? u.jsx(Vw, {
            ...t,
            ref: f,
            onAutoScroll: () => {
              const { viewport: m, selectedItem: p } = s;
              m && p && (m.scrollTop = m.scrollTop + p.offsetHeight);
            },
          })
        : null
    );
  });
Pw.displayName = Dh;
var Vw = g.forwardRef((t, a) => {
    const { __scopeSelect: s, onAutoScroll: i, ...o } = t,
      c = As("SelectScrollButton", s),
      f = g.useRef(null),
      m = yu(s),
      p = g.useCallback(() => {
        f.current !== null &&
          (window.clearInterval(f.current), (f.current = null));
      }, []);
    return (
      g.useEffect(() => () => p(), [p]),
      Mt(() => {
        m()
          .find((v) => v.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [m]),
      u.jsx(Ye.div, {
        "aria-hidden": !0,
        ...o,
        ref: a,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: qe(o.onPointerDown, () => {
          f.current === null && (f.current = window.setInterval(i, 50));
        }),
        onPointerMove: qe(o.onPointerMove, () => {
          c.onItemLeave?.(),
            f.current === null && (f.current = window.setInterval(i, 50));
        }),
        onPointerLeave: qe(o.onPointerLeave, () => {
          p();
        }),
      })
    );
  }),
  wD = "SelectSeparator",
  Hw = g.forwardRef((t, a) => {
    const { __scopeSelect: s, ...i } = t;
    return u.jsx(Ye.div, { "aria-hidden": !0, ...i, ref: a });
  });
Hw.displayName = wD;
var Lh = "SelectArrow",
  SD = g.forwardRef((t, a) => {
    const { __scopeSelect: s, ...i } = t,
      o = gu(s),
      c = Rs(Lh, s),
      f = As(Lh, s);
    return c.open && f.position === "popper"
      ? u.jsx(y1, { ...o, ...i, ref: a })
      : null;
  });
SD.displayName = Lh;
var _D = "SelectBubbleInput",
  Bw = g.forwardRef(({ __scopeSelect: t, value: a, ...s }, i) => {
    const o = g.useRef(null),
      c = ut(i, o),
      f = ow(a);
    return (
      g.useEffect(() => {
        const m = o.current;
        if (!m) return;
        const p = window.HTMLSelectElement.prototype,
          v = Object.getOwnPropertyDescriptor(p, "value").set;
        if (f !== a && v) {
          const b = new Event("change", { bubbles: !0 });
          v.call(m, a), m.dispatchEvent(b);
        }
      }, [f, a]),
      u.jsx(Ye.select, {
        ...s,
        style: { ...Jb, ...s.style },
        ref: c,
        defaultValue: a,
      })
    );
  });
Bw.displayName = _D;
function Fw(t) {
  return t === "" || t === void 0;
}
function Kw(t) {
  const a = Vn(t),
    s = g.useRef(""),
    i = g.useRef(0),
    o = g.useCallback(
      (f) => {
        const m = s.current + f;
        a(m),
          (function p(y) {
            (s.current = y),
              window.clearTimeout(i.current),
              y !== "" && (i.current = window.setTimeout(() => p(""), 1e3));
          })(m);
      },
      [a]
    ),
    c = g.useCallback(() => {
      (s.current = ""), window.clearTimeout(i.current);
    }, []);
  return g.useEffect(() => () => window.clearTimeout(i.current), []), [s, o, c];
}
function Qw(t, a, s) {
  const o = a.length > 1 && Array.from(a).every((y) => y === a[0]) ? a[0] : a,
    c = s ? t.indexOf(s) : -1;
  let f = ND(t, Math.max(c, 0));
  o.length === 1 && (f = f.filter((y) => y !== s));
  const p = f.find((y) =>
    y.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return p !== s ? p : void 0;
}
function ND(t, a) {
  return t.map((s, i) => t[(a + i) % t.length]);
}
var CD = vw,
  Gw = bw,
  ED = Sw,
  jD = _w,
  TD = Nw,
  Zw = Cw,
  OD = Ow,
  Yw = kw,
  Iw = Dw,
  RD = Lw,
  AD = zw,
  $w = qw,
  Xw = Pw,
  Ww = Hw;
const ws = CD,
  Ss = ED,
  La = g.forwardRef(({ className: t, children: a, ...s }, i) =>
    u.jsxs(Gw, {
      ref: i,
      className: Ee(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        t
      ),
      ...s,
      children: [
        a,
        u.jsx(jD, {
          asChild: !0,
          children: u.jsx(_0, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
La.displayName = Gw.displayName;
const Jw = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx($w, {
    ref: s,
    className: Ee("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: u.jsx(Dj, { className: "h-4 w-4" }),
  })
);
Jw.displayName = $w.displayName;
const eS = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(Xw, {
    ref: s,
    className: Ee("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: u.jsx(_0, { className: "h-4 w-4" }),
  })
);
eS.displayName = Xw.displayName;
const Ua = g.forwardRef(
  ({ className: t, children: a, position: s = "popper", ...i }, o) =>
    u.jsx(TD, {
      children: u.jsxs(Zw, {
        ref: o,
        className: Ee(
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
          s === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          t
        ),
        position: s,
        ...i,
        children: [
          u.jsx(Jw, {}),
          u.jsx(OD, {
            className: Ee(
              "p-1",
              s === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: a,
          }),
          u.jsx(eS, {}),
        ],
      }),
    })
);
Ua.displayName = Zw.displayName;
const kD = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(Yw, {
    ref: s,
    className: Ee("px-2 py-1.5 text-sm font-semibold", t),
    ...a,
  })
);
kD.displayName = Yw.displayName;
const St = g.forwardRef(({ className: t, children: a, ...s }, i) =>
  u.jsxs(Iw, {
    ref: i,
    className: Ee(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...s,
    children: [
      u.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: u.jsx(AD, { children: u.jsx(S0, { className: "h-4 w-4" }) }),
      }),
      u.jsx(RD, { children: a }),
    ],
  })
);
St.displayName = Iw.displayName;
const MD = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(Ww, { ref: s, className: Ee("-mx-1 my-1 h-px bg-muted", t), ...a })
);
MD.displayName = Ww.displayName;
const DD = [
    "What is your favorite movie?",
    "What do you like most?",
    "What is your mother's maiden name?",
    "What was your first pet's name?",
    "What city were you born in?",
    "What was the name of your first school?",
  ],
  LD = Tm({
    fullName: qn().min(2, "Full name required"),
    username: qn()
      .min(3, "Username must be at least 3 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Letters, numbers, underscores only"),
    email: qn().email("Valid email required"),
    password: qn().min(6, "Password must be at least 6 characters"),
    confirmPassword: qn(),
    securityQuestion: qn().min(1, "Select a security question"),
    securityAnswer: qn().min(2, "Security answer required"),
  }).refine((t) => t.password === t.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
function UD() {
  const [, t] = Xc(),
    { toast: a } = Hn(),
    [s, i] = g.useState(!1),
    [o, c] = g.useState(!1),
    [f, m] = g.useState(!1),
    p = Cm({
      resolver: Em(LD),
      defaultValues: {
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        securityQuestion: "",
        securityAnswer: "",
      },
    }),
    y = xR({
      mutation: {
        onSuccess: () => m(!0),
        onError: (v) => {
          a({
            title: "Registration failed",
            description: v?.data?.error ?? "Please try again",
            variant: "destructive",
          });
        },
      },
    });
  return f
    ? u.jsx("div", {
        className:
          "min-h-screen auth-bg flex items-center justify-center p-4 relative z-10",
        children: u.jsx("div", {
          className: "w-full max-w-md text-center",
          children: u.jsxs("div", {
            className: "glass rounded-2xl p-10",
            children: [
              u.jsx("div", {
                className:
                  "w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4",
                children: u.jsx(ql, { className: "w-8 h-8 text-green-400" }),
              }),
              u.jsx("h2", {
                className: "text-2xl font-bold text-white mb-2",
                children: "Request Submitted",
              }),
              u.jsx("p", {
                className: "text-white/50 text-sm mb-6",
                children:
                  "Your registration is pending admin approval. You'll be notified when your account is activated.",
              }),
              u.jsx(Me, {
                onClick: () => t("/login"),
                className: "bg-primary text-white",
                children: "Back to Login",
              }),
            ],
          }),
        }),
      })
    : u.jsx("div", {
        className:
          "min-h-screen auth-bg flex items-center justify-center p-4 relative z-10",
        children: u.jsxs("div", {
          className: "w-full max-w-lg",
          children: [
            u.jsxs("div", {
              className: "text-center mb-6",
              children: [
                u.jsx("div", {
                  className:
                    "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 mb-3",
                  children: u.jsx(ql, { className: "w-6 h-6 text-primary" }),
                }),
                u.jsx("h1", {
                  className: "text-2xl font-bold text-white",
                  children: "IT-qan",
                }),
                u.jsx("p", {
                  className: "text-white/40 text-sm",
                  children: "Request Platform Access",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "glass rounded-2xl p-7",
              children: [
                u.jsxs("div", {
                  className:
                    "flex items-start gap-2 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2.5 mb-5",
                  children: [
                    u.jsx(Yj, {
                      className: "w-4 h-4 text-primary flex-shrink-0 mt-0.5",
                    }),
                    u.jsx("p", {
                      className: "text-xs text-white/60",
                      children:
                        "New accounts require admin approval before access is granted.",
                    }),
                  ],
                }),
                u.jsx(Om, {
                  ...p,
                  children: u.jsxs("form", {
                    onSubmit: p.handleSubmit((v) => y.mutate({ data: v })),
                    className: "space-y-4",
                    children: [
                      u.jsxs("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                          u.jsx(Pn, {
                            control: p.control,
                            name: "fullName",
                            render: ({ field: v }) =>
                              u.jsxs(xn, {
                                className: "col-span-2",
                                children: [
                                  u.jsx(bn, {
                                    className: "text-white/70 text-sm",
                                    children: "Full Name",
                                  }),
                                  u.jsx(wn, {
                                    children: u.jsx(ft, {
                                      ...v,
                                      "data-testid": "input-fullname",
                                      placeholder: "Your full name",
                                      className:
                                        "bg-white/10 border-white/20 text-white placeholder:text-white/30",
                                    }),
                                  }),
                                  u.jsx(Sn, {}),
                                ],
                              }),
                          }),
                          u.jsx(Pn, {
                            control: p.control,
                            name: "username",
                            render: ({ field: v }) =>
                              u.jsxs(xn, {
                                children: [
                                  u.jsx(bn, {
                                    className: "text-white/70 text-sm",
                                    children: "Username",
                                  }),
                                  u.jsx(wn, {
                                    children: u.jsx(ft, {
                                      ...v,
                                      "data-testid": "input-username",
                                      placeholder: "username",
                                      className:
                                        "bg-white/10 border-white/20 text-white placeholder:text-white/30",
                                    }),
                                  }),
                                  u.jsx(Sn, {}),
                                ],
                              }),
                          }),
                          u.jsx(Pn, {
                            control: p.control,
                            name: "email",
                            render: ({ field: v }) =>
                              u.jsxs(xn, {
                                children: [
                                  u.jsx(bn, {
                                    className: "text-white/70 text-sm",
                                    children: "Email",
                                  }),
                                  u.jsx(wn, {
                                    children: u.jsx(ft, {
                                      ...v,
                                      "data-testid": "input-email",
                                      type: "email",
                                      placeholder: "you@email.com",
                                      className:
                                        "bg-white/10 border-white/20 text-white placeholder:text-white/30",
                                    }),
                                  }),
                                  u.jsx(Sn, {}),
                                ],
                              }),
                          }),
                          u.jsx(Pn, {
                            control: p.control,
                            name: "password",
                            render: ({ field: v }) =>
                              u.jsxs(xn, {
                                children: [
                                  u.jsx(bn, {
                                    className: "text-white/70 text-sm",
                                    children: "Password",
                                  }),
                                  u.jsx(wn, {
                                    children: u.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        u.jsx(ft, {
                                          ...v,
                                          "data-testid": "input-password",
                                          type: s ? "text" : "password",
                                          placeholder: "••••••",
                                          className:
                                            "bg-white/10 border-white/20 text-white placeholder:text-white/30 pr-9",
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => i((b) => !b),
                                          className:
                                            "absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70",
                                          children: s
                                            ? u.jsx(Ul, {
                                                className: "w-3.5 h-3.5",
                                              })
                                            : u.jsx(zl, {
                                                className: "w-3.5 h-3.5",
                                              }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  u.jsx(Sn, {}),
                                ],
                              }),
                          }),
                          u.jsx(Pn, {
                            control: p.control,
                            name: "confirmPassword",
                            render: ({ field: v }) =>
                              u.jsxs(xn, {
                                children: [
                                  u.jsx(bn, {
                                    className: "text-white/70 text-sm",
                                    children: "Confirm Password",
                                  }),
                                  u.jsx(wn, {
                                    children: u.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        u.jsx(ft, {
                                          ...v,
                                          "data-testid":
                                            "input-confirm-password",
                                          type: o ? "text" : "password",
                                          placeholder: "••••••",
                                          className:
                                            "bg-white/10 border-white/20 text-white placeholder:text-white/30 pr-9",
                                        }),
                                        u.jsx("button", {
                                          type: "button",
                                          onClick: () => c((b) => !b),
                                          className:
                                            "absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70",
                                          children: o
                                            ? u.jsx(Ul, {
                                                className: "w-3.5 h-3.5",
                                              })
                                            : u.jsx(zl, {
                                                className: "w-3.5 h-3.5",
                                              }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  u.jsx(Sn, {}),
                                ],
                              }),
                          }),
                        ],
                      }),
                      u.jsx(Pn, {
                        control: p.control,
                        name: "securityQuestion",
                        render: ({ field: v }) =>
                          u.jsxs(xn, {
                            children: [
                              u.jsx(bn, {
                                className: "text-white/70 text-sm",
                                children: "Security Question",
                              }),
                              u.jsxs(ws, {
                                onValueChange: v.onChange,
                                defaultValue: v.value,
                                children: [
                                  u.jsx(wn, {
                                    children: u.jsx(La, {
                                      "data-testid": "select-security-question",
                                      className:
                                        "bg-white/10 border-white/20 text-white",
                                      children: u.jsx(Ss, {
                                        placeholder:
                                          "Choose a security question",
                                      }),
                                    }),
                                  }),
                                  u.jsx(Ua, {
                                    children: DD.map((b) =>
                                      u.jsx(St, { value: b, children: b }, b)
                                    ),
                                  }),
                                ],
                              }),
                              u.jsx(Sn, {}),
                            ],
                          }),
                      }),
                      u.jsx(Pn, {
                        control: p.control,
                        name: "securityAnswer",
                        render: ({ field: v }) =>
                          u.jsxs(xn, {
                            children: [
                              u.jsx(bn, {
                                className: "text-white/70 text-sm",
                                children: "Security Answer",
                              }),
                              u.jsx(wn, {
                                children: u.jsx(ft, {
                                  ...v,
                                  "data-testid": "input-security-answer",
                                  placeholder:
                                    "Your answer (used for password recovery)",
                                  className:
                                    "bg-white/10 border-white/20 text-white placeholder:text-white/30",
                                }),
                              }),
                              u.jsx(Sn, {}),
                            ],
                          }),
                      }),
                      u.jsx(Me, {
                        type: "submit",
                        "data-testid": "button-register",
                        disabled: y.isPending,
                        className: "w-full bg-primary text-white h-11 mt-1",
                        children: y.isPending
                          ? u.jsxs(u.Fragment, {
                              children: [
                                u.jsx(em, {
                                  className: "w-4 h-4 mr-2 animate-spin",
                                }),
                                "Submitting...",
                              ],
                            })
                          : "Submit Request",
                      }),
                    ],
                  }),
                }),
                u.jsxs("p", {
                  className: "text-center mt-4 text-white/40 text-sm",
                  children: [
                    "Already have an account?",
                    " ",
                    u.jsx(Rl, {
                      href: "/login",
                      children: u.jsx("span", {
                        className:
                          "text-primary hover:text-primary/80 cursor-pointer",
                        children: "Sign in",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
}
const zD = Tm({
  username: qn().min(1, "Username required"),
  securityAnswer: qn().min(1, "Security answer required"),
  newPassword: qn().min(6, "Password must be at least 6 characters"),
});
function qD() {
  const [, t] = Xc(),
    { toast: a } = Hn(),
    [s, i] = g.useState(!1),
    [o, c] = g.useState(!1),
    f = Cm({
      resolver: Em(zD),
      defaultValues: { username: "", securityAnswer: "", newPassword: "" },
    }),
    m = _R({
      mutation: {
        onSuccess: () => c(!0),
        onError: (p) => {
          a({
            title: "Reset failed",
            description: p?.data?.error ?? "Incorrect answer",
            variant: "destructive",
          });
        },
      },
    });
  return o
    ? u.jsx("div", {
        className:
          "min-h-screen auth-bg flex items-center justify-center p-4 relative z-10",
        children: u.jsxs("div", {
          className: "glass rounded-2xl p-10 max-w-md w-full text-center",
          children: [
            u.jsx(qj, { className: "w-12 h-12 text-green-400 mx-auto mb-3" }),
            u.jsx("h2", {
              className: "text-xl font-bold text-white mb-2",
              children: "Password Reset",
            }),
            u.jsx("p", {
              className: "text-white/50 text-sm mb-6",
              children:
                "Your password has been changed. You can now sign in with your new password.",
            }),
            u.jsx(Me, {
              onClick: () => t("/login"),
              className: "bg-primary text-white",
              children: "Sign In",
            }),
          ],
        }),
      })
    : u.jsx("div", {
        className:
          "min-h-screen auth-bg flex items-center justify-center p-4 relative z-10",
        children: u.jsxs("div", {
          className: "w-full max-w-md",
          children: [
            u.jsxs("div", {
              className: "text-center mb-6",
              children: [
                u.jsx("div", {
                  className:
                    "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 mb-3",
                  children: u.jsx(ql, { className: "w-6 h-6 text-primary" }),
                }),
                u.jsx("h1", {
                  className: "text-2xl font-bold text-white",
                  children: "Reset Password",
                }),
                u.jsx("p", {
                  className: "text-white/40 text-sm",
                  children: "Answer your security question to reset",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "glass rounded-2xl p-7",
              children: [
                u.jsx(Om, {
                  ...f,
                  children: u.jsxs("form", {
                    onSubmit: f.handleSubmit((p) => m.mutate({ data: p })),
                    className: "space-y-4",
                    children: [
                      u.jsx(Pn, {
                        control: f.control,
                        name: "username",
                        render: ({ field: p }) =>
                          u.jsxs(xn, {
                            children: [
                              u.jsx(bn, {
                                className: "text-white/70 text-sm",
                                children: "Username",
                              }),
                              u.jsx(wn, {
                                children: u.jsx(ft, {
                                  ...p,
                                  "data-testid": "input-username",
                                  placeholder: "Your username",
                                  className:
                                    "bg-white/10 border-white/20 text-white placeholder:text-white/30",
                                }),
                              }),
                              u.jsx(Sn, {}),
                            ],
                          }),
                      }),
                      u.jsx(Pn, {
                        control: f.control,
                        name: "securityAnswer",
                        render: ({ field: p }) =>
                          u.jsxs(xn, {
                            children: [
                              u.jsx(bn, {
                                className: "text-white/70 text-sm",
                                children: "Security Answer",
                              }),
                              u.jsx(wn, {
                                children: u.jsx(ft, {
                                  ...p,
                                  "data-testid": "input-security-answer",
                                  placeholder: "Your security answer",
                                  className:
                                    "bg-white/10 border-white/20 text-white placeholder:text-white/30",
                                }),
                              }),
                              u.jsx(Sn, {}),
                              u.jsx("p", {
                                className: "text-[11px] text-white/30",
                                children:
                                  "The answer you provided when registering",
                              }),
                            ],
                          }),
                      }),
                      u.jsx(Pn, {
                        control: f.control,
                        name: "newPassword",
                        render: ({ field: p }) =>
                          u.jsxs(xn, {
                            children: [
                              u.jsx(bn, {
                                className: "text-white/70 text-sm",
                                children: "New Password",
                              }),
                              u.jsx(wn, {
                                children: u.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    u.jsx(ft, {
                                      ...p,
                                      "data-testid": "input-new-password",
                                      type: s ? "text" : "password",
                                      placeholder: "New password",
                                      className:
                                        "bg-white/10 border-white/20 text-white placeholder:text-white/30 pr-9",
                                    }),
                                    u.jsx("button", {
                                      type: "button",
                                      onClick: () => i((y) => !y),
                                      className:
                                        "absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40",
                                      children: s
                                        ? u.jsx(Ul, { className: "w-4 h-4" })
                                        : u.jsx(zl, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                              }),
                              u.jsx(Sn, {}),
                            ],
                          }),
                      }),
                      u.jsx(Me, {
                        type: "submit",
                        "data-testid": "button-reset",
                        disabled: m.isPending,
                        className: "w-full bg-primary text-white h-11",
                        children: m.isPending
                          ? u.jsxs(u.Fragment, {
                              children: [
                                u.jsx(em, {
                                  className: "w-4 h-4 mr-2 animate-spin",
                                }),
                                "Resetting...",
                              ],
                            })
                          : "Reset Password",
                      }),
                    ],
                  }),
                }),
                u.jsx("p", {
                  className: "text-center mt-4 text-white/40 text-sm",
                  children: u.jsx(Rl, {
                    href: "/login",
                    children: u.jsx("span", {
                      className:
                        "text-primary hover:text-primary/80 cursor-pointer",
                      children: "Back to login",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      });
}
const PD = eu(
  "whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-xs",
        outline: "text-foreground border [border-color:var(--badge-outline)]",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
function ea({ className: t, variant: a, ...s }) {
  return u.jsx("div", { className: Ee(PD({ variant: a }), t), ...s });
}
function ta({ className: t, ...a }) {
  return u.jsx("div", {
    className: Ee("animate-pulse rounded-md bg-primary/10", t),
    ...a,
  });
}
function zn({ title: t, value: a, icon: s, color: i, sub: o }) {
  return u.jsx(Cn, {
    className: "border-border",
    children: u.jsx(En, {
      className: "p-5",
      children: u.jsxs("div", {
        className: "flex items-start justify-between",
        children: [
          u.jsxs("div", {
            children: [
              u.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: t,
              }),
              a === void 0
                ? u.jsx(ta, { className: "h-8 w-16 mt-1" })
                : u.jsx("p", {
                    className: "text-2xl font-bold mt-0.5",
                    children: a,
                  }),
              o &&
                u.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: o,
                }),
            ],
          }),
          u.jsx("div", {
            className: Ee(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              i
            ),
            children: u.jsx(s, { className: "w-5 h-5" }),
          }),
        ],
      }),
    }),
  });
}
function VD() {
  const { user: t } = ya(),
    a = t?.role === "admin",
    { data: s, isLoading: i } = kk(),
    { data: o, isLoading: c } = zk(),
    { data: f, isLoading: m } = Zk(),
    p = () => {
      const y = new Date().getHours();
      return y < 12
        ? "Good morning"
        : y < 18
        ? "Good afternoon"
        : "Good evening";
    };
  return u.jsxs("div", {
    className: "p-6 max-w-7xl mx-auto space-y-6",
    children: [
      u.jsxs("div", {
        children: [
          u.jsxs("h1", {
            className: "text-2xl font-bold",
            children: [p(), ", ", t?.fullName?.split(" ")[0], " 👋"],
          }),
          u.jsx("p", {
            className: "text-sm text-muted-foreground mt-0.5",
            children: a
              ? "Here's your platform overview"
              : "Here's your learning progress",
          }),
        ],
      }),
      a &&
        u.jsxs("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-4",
          children: [
            u.jsx(zn, {
              title: "Total Members",
              value: i ? void 0 : s?.totalMembers,
              icon: kc,
              color: "bg-blue-500/15 text-blue-400",
            }),
            u.jsx(zn, {
              title: "Total Courses",
              value: i ? void 0 : s?.totalCourses,
              icon: Ll,
              color: "bg-primary/15 text-primary",
            }),
            u.jsx(zn, {
              title: "Total Tasks",
              value: i ? void 0 : s?.totalTasks,
              icon: Pl,
              color: "bg-orange-500/15 text-orange-400",
            }),
            u.jsx(zn, {
              title: "Pending Excuses",
              value: i ? void 0 : s?.pendingExcuses,
              icon: ii,
              color: "bg-yellow-500/15 text-yellow-400",
            }),
            u.jsx(zn, {
              title: "Studied Today",
              value: i ? void 0 : s?.studiedTodayCount,
              icon: ri,
              color: "bg-green-500/15 text-green-400",
            }),
            u.jsx(zn, {
              title: "Not Studied Today",
              value: i ? void 0 : s?.notStudiedTodayCount,
              icon: yi,
              color: "bg-red-500/15 text-red-400",
            }),
            u.jsx(zn, {
              title: "Pending Approvals",
              value: i ? void 0 : s?.pendingApprovals,
              icon: Ih,
              color: "bg-purple-500/15 text-purple-400",
            }),
            u.jsx(zn, {
              title: "Warning Members",
              value: i ? void 0 : s?.warningMembers,
              icon: dx,
              color: "bg-cyan-500/15 text-cyan-400",
            }),
          ],
        }),
      !a &&
        u.jsxs("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-4",
          children: [
            u.jsx(zn, {
              title: "Total Logs",
              value: m ? void 0 : f?.totalLogs,
              icon: ri,
              color: "bg-purple-500/15 text-purple-400",
            }),
            u.jsx(zn, {
              title: "Current Streak",
              value: m ? void 0 : f?.currentStreak,
              icon: Jh,
              color: "bg-orange-500/15 text-orange-400",
              sub: "days",
            }),
            u.jsx(zn, {
              title: "Tasks Completed",
              value: m ? void 0 : f?.tasksCompleted,
              icon: Pl,
              color: "bg-green-500/15 text-green-400",
              sub: `${f?.tasksPending ?? 0} pending`,
            }),
            u.jsx(zn, {
              title: "Courses Assigned",
              value: m ? void 0 : f?.coursesAssigned,
              icon: Ll,
              color: "bg-primary/15 text-primary",
              sub: `${f?.coursesCompleted ?? 0} completed`,
            }),
          ],
        }),
      u.jsxs(Cn, {
        className: "border-border",
        children: [
          u.jsx(uu, {
            className: "pb-3",
            children: u.jsxs(du, {
              className: "text-base flex items-center gap-2",
              children: [
                u.jsx(dx, { className: "w-4 h-4 text-primary" }),
                "Recent Activity",
              ],
            }),
          }),
          u.jsx(En, {
            children: c
              ? u.jsx("div", {
                  className: "space-y-3",
                  children: [1, 2, 3, 4].map((y) =>
                    u.jsx(ta, { className: "h-12 w-full" }, y)
                  ),
                })
              : o?.length
              ? u.jsx("div", {
                  className: "space-y-2",
                  children: o.map((y, v) =>
                    u.jsxs(
                      "div",
                      {
                        className:
                          "flex items-start gap-3 py-2.5 px-3 rounded-lg hover:bg-muted/40 transition-colors",
                        children: [
                          u.jsx("div", {
                            className:
                              "w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0",
                          }),
                          u.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              u.jsx("p", {
                                className: "text-sm font-medium",
                                children: y.message,
                              }),
                              u.jsxs("p", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                  y.username ? `@${y.username} · ` : "",
                                  new Date(y.createdAt).toLocaleDateString(),
                                ],
                              }),
                            ],
                          }),
                          u.jsx(ea, {
                            className:
                              "text-[10px] border bg-muted text-muted-foreground flex-shrink-0",
                            children: y.type,
                          }),
                        ],
                      },
                      v
                    )
                  ),
                })
              : u.jsxs("div", {
                  className: "text-center py-8 text-muted-foreground text-sm",
                  children: [
                    u.jsx(Wh, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
                    "No recent activity",
                  ],
                }),
          }),
        ],
      }),
    ],
  });
}
const rr = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx("textarea", {
    className: Ee(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: s,
    ...a,
  })
);
rr.displayName = "Textarea";
var vu = "Dialog",
  [tS] = lr(vu),
  [HD, aa] = tS(vu),
  nS = (t) => {
    const {
        __scopeDialog: a,
        children: s,
        open: i,
        defaultOpen: o,
        onOpenChange: c,
        modal: f = !0,
      } = t,
      m = g.useRef(null),
      p = g.useRef(null),
      [y, v] = Dl({ prop: i, defaultProp: o ?? !1, onChange: c, caller: vu });
    return u.jsx(HD, {
      scope: a,
      triggerRef: m,
      contentRef: p,
      contentId: ni(),
      titleId: ni(),
      descriptionId: ni(),
      open: y,
      onOpenChange: v,
      onOpenToggle: g.useCallback(() => v((b) => !b), [v]),
      modal: f,
      children: s,
    });
  };
nS.displayName = vu;
var aS = "DialogTrigger",
  BD = g.forwardRef((t, a) => {
    const { __scopeDialog: s, ...i } = t,
      o = aa(aS, s),
      c = ut(a, o.triggerRef);
    return u.jsx(Ye.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Lm(o.open),
      ...i,
      ref: c,
      onClick: qe(t.onClick, o.onOpenToggle),
    });
  });
BD.displayName = aS;
var Mm = "DialogPortal",
  [FD, sS] = tS(Mm, { forceMount: void 0 }),
  rS = (t) => {
    const { __scopeDialog: a, forceMount: s, children: i, container: o } = t,
      c = aa(Mm, a);
    return u.jsx(FD, {
      scope: a,
      forceMount: s,
      children: g.Children.map(i, (f) =>
        u.jsx(Ts, {
          present: s || c.open,
          children: u.jsx(Gl, { asChild: !0, container: o, children: f }),
        })
      ),
    });
  };
rS.displayName = Mm;
var Zc = "DialogOverlay",
  iS = g.forwardRef((t, a) => {
    const s = sS(Zc, t.__scopeDialog),
      { forceMount: i = s.forceMount, ...o } = t,
      c = aa(Zc, t.__scopeDialog);
    return c.modal
      ? u.jsx(Ts, {
          present: i || c.open,
          children: u.jsx(QD, { ...o, ref: a }),
        })
      : null;
  });
iS.displayName = Zc;
var KD = Ml("DialogOverlay.RemoveScroll"),
  QD = g.forwardRef((t, a) => {
    const { __scopeDialog: s, ...i } = t,
      o = aa(Zc, s);
    return u.jsx(Am, {
      as: KD,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: u.jsx(Ye.div, {
        "data-state": Lm(o.open),
        ...i,
        ref: a,
        style: { pointerEvents: "auto", ...i.style },
      }),
    });
  }),
  ir = "DialogContent",
  lS = g.forwardRef((t, a) => {
    const s = sS(ir, t.__scopeDialog),
      { forceMount: i = s.forceMount, ...o } = t,
      c = aa(ir, t.__scopeDialog);
    return u.jsx(Ts, {
      present: i || c.open,
      children: c.modal
        ? u.jsx(GD, { ...o, ref: a })
        : u.jsx(ZD, { ...o, ref: a }),
    });
  });
lS.displayName = ir;
var GD = g.forwardRef((t, a) => {
    const s = aa(ir, t.__scopeDialog),
      i = g.useRef(null),
      o = ut(a, s.contentRef, i);
    return (
      g.useEffect(() => {
        const c = i.current;
        if (c) return uw(c);
      }, []),
      u.jsx(oS, {
        ...t,
        ref: o,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: qe(t.onCloseAutoFocus, (c) => {
          c.preventDefault(), s.triggerRef.current?.focus();
        }),
        onPointerDownOutside: qe(t.onPointerDownOutside, (c) => {
          const f = c.detail.originalEvent,
            m = f.button === 0 && f.ctrlKey === !0;
          (f.button === 2 || m) && c.preventDefault();
        }),
        onFocusOutside: qe(t.onFocusOutside, (c) => c.preventDefault()),
      })
    );
  }),
  ZD = g.forwardRef((t, a) => {
    const s = aa(ir, t.__scopeDialog),
      i = g.useRef(!1),
      o = g.useRef(!1);
    return u.jsx(oS, {
      ...t,
      ref: a,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (c) => {
        t.onCloseAutoFocus?.(c),
          c.defaultPrevented ||
            (i.current || s.triggerRef.current?.focus(), c.preventDefault()),
          (i.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (c) => {
        t.onInteractOutside?.(c),
          c.defaultPrevented ||
            ((i.current = !0),
            c.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const f = c.target;
        s.triggerRef.current?.contains(f) && c.preventDefault(),
          c.detail.originalEvent.type === "focusin" &&
            o.current &&
            c.preventDefault();
      },
    });
  }),
  oS = g.forwardRef((t, a) => {
    const {
        __scopeDialog: s,
        trapFocus: i,
        onOpenAutoFocus: o,
        onCloseAutoFocus: c,
        ...f
      } = t,
      m = aa(ir, s),
      p = g.useRef(null),
      y = ut(a, p);
    return (
      iw(),
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(Rm, {
            asChild: !0,
            loop: !0,
            trapped: i,
            onMountAutoFocus: o,
            onUnmountAutoFocus: c,
            children: u.jsx(Ql, {
              role: "dialog",
              id: m.contentId,
              "aria-describedby": m.descriptionId,
              "aria-labelledby": m.titleId,
              "data-state": Lm(m.open),
              ...f,
              ref: y,
              onDismiss: () => m.onOpenChange(!1),
            }),
          }),
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(YD, { titleId: m.titleId }),
              u.jsx($D, { contentRef: p, descriptionId: m.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Dm = "DialogTitle",
  cS = g.forwardRef((t, a) => {
    const { __scopeDialog: s, ...i } = t,
      o = aa(Dm, s);
    return u.jsx(Ye.h2, { id: o.titleId, ...i, ref: a });
  });
cS.displayName = Dm;
var uS = "DialogDescription",
  dS = g.forwardRef((t, a) => {
    const { __scopeDialog: s, ...i } = t,
      o = aa(uS, s);
    return u.jsx(Ye.p, { id: o.descriptionId, ...i, ref: a });
  });
dS.displayName = uS;
var fS = "DialogClose",
  hS = g.forwardRef((t, a) => {
    const { __scopeDialog: s, ...i } = t,
      o = aa(fS, s);
    return u.jsx(Ye.button, {
      type: "button",
      ...i,
      ref: a,
      onClick: qe(t.onClick, () => o.onOpenChange(!1)),
    });
  });
hS.displayName = fS;
function Lm(t) {
  return t ? "open" : "closed";
}
var mS = "DialogTitleWarning",
  [K3, pS] = NE(mS, { contentName: ir, titleName: Dm, docsSlug: "dialog" }),
  YD = ({ titleId: t }) => {
    const a = pS(mS),
      s = `\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;
    return (
      g.useEffect(() => {
        t && (document.getElementById(t) || console.error(s));
      }, [s, t]),
      null
    );
  },
  ID = "DialogDescriptionWarning",
  $D = ({ contentRef: t, descriptionId: a }) => {
    const i = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      pS(ID).contentName
    }}.`;
    return (
      g.useEffect(() => {
        const o = t.current?.getAttribute("aria-describedby");
        a && o && (document.getElementById(a) || console.warn(i));
      }, [i, t, a]),
      null
    );
  },
  XD = nS,
  WD = rS,
  yS = iS,
  gS = lS,
  vS = cS,
  xS = dS,
  JD = hS;
const ha = XD,
  e3 = WD,
  bS = g.forwardRef(({ className: t, ...a }, s) =>
    u.jsx(yS, {
      ref: s,
      className: Ee(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        t
      ),
      ...a,
    })
  );
bS.displayName = yS.displayName;
const In = g.forwardRef(({ className: t, children: a, ...s }, i) =>
  u.jsxs(e3, {
    children: [
      u.jsx(bS, {}),
      u.jsxs(gS, {
        ref: i,
        className: Ee(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          t
        ),
        ...s,
        children: [
          a,
          u.jsxs(JD, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              u.jsx(nm, { className: "h-4 w-4" }),
              u.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
In.displayName = gS.displayName;
const $n = ({ className: t, ...a }) =>
  u.jsx("div", {
    className: Ee("flex flex-col space-y-1.5 text-center sm:text-left", t),
    ...a,
  });
$n.displayName = "DialogHeader";
const ma = ({ className: t, ...a }) =>
  u.jsx("div", {
    className: Ee(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      t
    ),
    ...a,
  });
ma.displayName = "DialogFooter";
const Xn = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(vS, {
    ref: s,
    className: Ee("text-lg font-semibold leading-none tracking-tight", t),
    ...a,
  })
);
Xn.displayName = vS.displayName;
const t3 = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(xS, { ref: s, className: Ee("text-sm text-muted-foreground", t), ...a })
);
t3.displayName = xS.displayName;
function wS(t, a = []) {
  let s = [];
  function i(c, f) {
    const m = g.createContext(f);
    m.displayName = c + "Context";
    const p = s.length;
    s = [...s, f];
    const y = (b) => {
      const { scope: _, children: N, ...j } = b,
        S = _?.[t]?.[p] || m,
        C = g.useMemo(() => j, Object.values(j));
      return u.jsx(S.Provider, { value: C, children: N });
    };
    y.displayName = c + "Provider";
    function v(b, _) {
      const N = _?.[t]?.[p] || m,
        j = g.useContext(N);
      if (j) return j;
      if (f !== void 0) return f;
      throw new Error(`\`${b}\` must be used within \`${c}\``);
    }
    return [y, v];
  }
  const o = () => {
    const c = s.map((f) => g.createContext(f));
    return function (m) {
      const p = m?.[t] || c;
      return g.useMemo(() => ({ [`__scope${t}`]: { ...m, [t]: p } }), [m, p]);
    };
  };
  return (o.scopeName = t), [i, n3(o, ...a)];
}
function n3(...t) {
  const a = t[0];
  if (t.length === 1) return a;
  const s = () => {
    const i = t.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (c) {
      const f = i.reduce((m, { useScope: p, scopeName: y }) => {
        const b = p(c)[`__scope${y}`];
        return { ...m, ...b };
      }, {});
      return g.useMemo(() => ({ [`__scope${a.scopeName}`]: f }), [f]);
    };
  };
  return (s.scopeName = a.scopeName), s;
}
var Um = "Progress",
  zm = 100,
  [a3] = wS(Um),
  [s3, r3] = a3(Um),
  SS = g.forwardRef((t, a) => {
    const {
      __scopeProgress: s,
      value: i = null,
      max: o,
      getValueLabel: c = i3,
      ...f
    } = t;
    (o || o === 0) && !xb(o) && console.error(l3(`${o}`, "Progress"));
    const m = xb(o) ? o : zm;
    i !== null && !bb(i, m) && console.error(o3(`${i}`, "Progress"));
    const p = bb(i, m) ? i : null,
      y = Yc(p) ? c(p, m) : void 0;
    return u.jsx(s3, {
      scope: s,
      value: p,
      max: m,
      children: u.jsx(cr.div, {
        "aria-valuemax": m,
        "aria-valuemin": 0,
        "aria-valuenow": Yc(p) ? p : void 0,
        "aria-valuetext": y,
        role: "progressbar",
        "data-state": CS(p, m),
        "data-value": p ?? void 0,
        "data-max": m,
        ...f,
        ref: a,
      }),
    });
  });
SS.displayName = Um;
var _S = "ProgressIndicator",
  NS = g.forwardRef((t, a) => {
    const { __scopeProgress: s, ...i } = t,
      o = r3(_S, s);
    return u.jsx(cr.div, {
      "data-state": CS(o.value, o.max),
      "data-value": o.value ?? void 0,
      "data-max": o.max,
      ...i,
      ref: a,
    });
  });
NS.displayName = _S;
function i3(t, a) {
  return `${Math.round((t / a) * 100)}%`;
}
function CS(t, a) {
  return t == null ? "indeterminate" : t === a ? "complete" : "loading";
}
function Yc(t) {
  return typeof t == "number";
}
function xb(t) {
  return Yc(t) && !isNaN(t) && t > 0;
}
function bb(t, a) {
  return Yc(t) && !isNaN(t) && t <= a && t >= 0;
}
function l3(t, a) {
  return `Invalid prop \`max\` of value \`${t}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${zm}\`.`;
}
function o3(t, a) {
  return `Invalid prop \`value\` of value \`${t}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${zm} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ES = SS,
  c3 = NS;
const Uh = g.forwardRef(({ className: t, value: a, ...s }, i) =>
  u.jsx(ES, {
    ref: i,
    className: Ee(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      t
    ),
    ...s,
    children: u.jsx(c3, {
      className: "h-full w-full flex-1 bg-primary transition-all",
      style: { transform: `translateX(-${100 - (a || 0)}%)` },
    }),
  })
);
Uh.displayName = ES.displayName;
function u3() {
  const { user: t } = ya(),
    a = t?.role === "admin",
    s = Va(),
    { toast: i } = Hn(),
    [o, c] = g.useState(""),
    [f, m] = g.useState(!1),
    [p, y] = g.useState(null),
    [v, b] = g.useState(null),
    [_, N] = g.useState(null),
    [j, S] = g.useState({ title: "", description: "", externalLink: "" }),
    [C, A] = g.useState(""),
    [O, k] = g.useState("0"),
    { data: D, isLoading: q } = YR(),
    { data: X } = pm(),
    Z = D?.data ?? [],
    P = X?.data ?? [],
    G = WR({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/courses"] }),
            m(!1),
            i({ title: "Course created" });
        },
        onError: (U) =>
          i({
            title: "Error",
            description: U?.data?.error,
            variant: "destructive",
          }),
      },
    }),
    ue = nA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/courses"] }),
            N(null),
            i({ title: "Course updated" });
        },
      },
    }),
    ve = iA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/courses"] }),
            i({ title: "Course deleted" });
        },
      },
    }),
    te = uA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/courses"] }),
            y(null),
            i({ title: "Course assigned" });
        },
        onError: (U) =>
          i({
            title: "Error",
            description: U?.data?.error,
            variant: "destructive",
          }),
      },
    }),
    oe = mA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/courses"] }),
            b(null),
            i({ title: "Progress updated" });
        },
      },
    }),
    ee = Z.filter((U) => U.title?.toLowerCase().includes(o.toLowerCase())),
    de = (U) => {
      S({
        title: U.title,
        description: U.description ?? "",
        externalLink: U.externalLink ?? "",
      }),
        N(U);
    },
    L = () => {
      S({ title: "", description: "", externalLink: "" }), m(!0);
    };
  return u.jsxs("div", {
    className: "p-6 max-w-7xl mx-auto space-y-5",
    children: [
      u.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          u.jsxs("div", {
            children: [
              u.jsxs("h1", {
                className: "text-2xl font-bold flex items-center gap-2",
                children: [
                  u.jsx(Ll, { className: "w-6 h-6 text-primary" }),
                  " Courses",
                ],
              }),
              u.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Manage and track learning courses",
              }),
            ],
          }),
          a &&
            u.jsxs(Me, {
              onClick: L,
              className: "gap-1.5",
              children: [u.jsx(tu, { className: "w-4 h-4" }), " New Course"],
            }),
        ],
      }),
      u.jsxs("div", {
        className: "relative max-w-sm",
        children: [
          u.jsx(nu, {
            className:
              "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
          }),
          u.jsx(ft, {
            placeholder: "Search courses...",
            value: o,
            onChange: (U) => c(U.target.value),
            className: "pl-9",
          }),
        ],
      }),
      q
        ? u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: [1, 2, 3].map((U) => u.jsx(ta, { className: "h-44" }, U)),
          })
        : ee.length
        ? u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: ee.map((U) =>
              u.jsxs(
                Cn,
                {
                  className:
                    "border-border hover:border-primary/40 transition-colors",
                  children: [
                    u.jsx(uu, {
                      className: "pb-2 pt-4 px-4",
                      children: u.jsx(du, {
                        className: "text-base leading-snug line-clamp-2",
                        children: U.title,
                      }),
                    }),
                    u.jsxs(En, {
                      className: "px-4 pb-4 space-y-3",
                      children: [
                        U.description &&
                          u.jsx("p", {
                            className:
                              "text-xs text-muted-foreground line-clamp-2",
                            children: U.description,
                          }),
                        U.externalLink &&
                          u.jsxs("a", {
                            href: U.externalLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-1 text-xs text-primary hover:underline",
                            children: [
                              u.jsx(mx, { className: "w-3 h-3" }),
                              " View resource",
                            ],
                          }),
                        U.progress !== void 0 &&
                          U.progress !== null &&
                          u.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              u.jsxs("div", {
                                className:
                                  "flex justify-between text-xs text-muted-foreground",
                                children: [
                                  u.jsx("span", { children: "Progress" }),
                                  u.jsxs("span", {
                                    children: [U.progress, "%"],
                                  }),
                                ],
                              }),
                              u.jsx(Uh, {
                                value: U.progress,
                                className: "h-1.5",
                              }),
                            ],
                          }),
                        u.jsxs("div", {
                          className: "flex items-center gap-1.5 pt-1 flex-wrap",
                          children: [
                            U.externalLink &&
                              u.jsx("a", {
                                href: U.externalLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: u.jsxs(Me, {
                                  size: "sm",
                                  variant: "outline",
                                  className: "h-7 text-xs gap-1",
                                  children: [
                                    u.jsx(mx, { className: "w-3 h-3" }),
                                    " Open",
                                  ],
                                }),
                              }),
                            !a &&
                              u.jsxs(Me, {
                                size: "sm",
                                variant: "outline",
                                className: "h-7 text-xs gap-1",
                                onClick: () =>
                                  b({ id: U.id, current: U.progress ?? 0 }),
                                children: [
                                  u.jsx(vT, { className: "w-3 h-3" }),
                                  " Progress",
                                ],
                              }),
                            a &&
                              u.jsxs(u.Fragment, {
                                children: [
                                  u.jsxs(Me, {
                                    size: "sm",
                                    variant: "outline",
                                    className: "h-7 text-xs gap-1",
                                    onClick: () => {
                                      A(""), y(U.id);
                                    },
                                    children: [
                                      u.jsx(bT, { className: "w-3 h-3" }),
                                      " Assign",
                                    ],
                                  }),
                                  u.jsxs(Me, {
                                    size: "sm",
                                    variant: "outline",
                                    className: "h-7 text-xs gap-1",
                                    onClick: () => de(U),
                                    children: [
                                      u.jsx(tm, { className: "w-3 h-3" }),
                                      " Edit",
                                    ],
                                  }),
                                  u.jsx(Me, {
                                    size: "sm",
                                    variant: "ghost",
                                    className:
                                      "h-7 text-xs text-destructive hover:text-destructive hover:bg-destructive/10",
                                    onClick: () => ve.mutate({ id: U.id }),
                                    children: u.jsx(au, {
                                      className: "w-3 h-3",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                U.id
              )
            ),
          })
        : u.jsxs("div", {
            className: "text-center py-16 text-muted-foreground",
            children: [
              u.jsx(Ll, { className: "w-10 h-10 mx-auto mb-3 opacity-20" }),
              u.jsx("p", {
                className: "text-sm",
                children: "No courses found",
              }),
            ],
          }),
      u.jsx(ha, {
        open: f || !!_,
        onOpenChange: (U) => {
          U || (m(!1), N(null));
        },
        children: u.jsxs(In, {
          children: [
            u.jsx($n, {
              children: u.jsx(Xn, {
                children: _ ? "Edit Course" : "New Course",
              }),
            }),
            u.jsxs("div", {
              className: "space-y-3",
              children: [
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsxs(gt, {
                      children: [
                        "Title ",
                        u.jsx("span", {
                          className: "text-destructive",
                          children: "*",
                        }),
                      ],
                    }),
                    u.jsx(ft, {
                      value: j.title,
                      onChange: (U) =>
                        S((W) => ({ ...W, title: U.target.value })),
                      placeholder: "Course title",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsxs(gt, {
                      children: [
                        "Description ",
                        u.jsx("span", {
                          className: "text-destructive",
                          children: "*",
                        }),
                      ],
                    }),
                    u.jsx(rr, {
                      value: j.description,
                      onChange: (U) =>
                        S((W) => ({ ...W, description: U.target.value })),
                      placeholder: "Description",
                      rows: 3,
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Resource Link" }),
                    u.jsx(ft, {
                      value: j.externalLink,
                      onChange: (U) =>
                        S((W) => ({ ...W, externalLink: U.target.value })),
                      placeholder: "https://...",
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => {
                    m(!1), N(null);
                  },
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  onClick: () => {
                    _
                      ? ue.mutate({
                          id: _.id,
                          data: {
                            title: j.title,
                            description: j.description,
                            externalLink: j.externalLink || void 0,
                          },
                        })
                      : G.mutate({
                          data: {
                            title: j.title,
                            description: j.description,
                            externalLink: j.externalLink || void 0,
                          },
                        });
                  },
                  disabled:
                    !j.title || !j.description || G.isPending || ue.isPending,
                  children: _ ? "Update" : "Create",
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx(ha, {
        open: !!p,
        onOpenChange: (U) => {
          U || y(null);
        },
        children: u.jsxs(In, {
          children: [
            u.jsx($n, { children: u.jsx(Xn, { children: "Assign Course" }) }),
            u.jsxs("div", {
              className: "space-y-2",
              children: [
                u.jsx(gt, { children: "Select Member" }),
                u.jsxs(ws, {
                  value: C,
                  onValueChange: A,
                  children: [
                    u.jsx(La, {
                      children: u.jsx(Ss, { placeholder: "Choose a member" }),
                    }),
                    u.jsx(Ua, {
                      children: P.filter((U) => U.status === "active").map(
                        (U) =>
                          u.jsxs(
                            St,
                            {
                              value: String(U.id),
                              children: [U.fullName, " (@", U.username, ")"],
                            },
                            U.id
                          )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => y(null),
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  onClick: () =>
                    p && te.mutate({ id: p, data: { userIds: [Number(C)] } }),
                  disabled: !C || te.isPending,
                  children: "Assign",
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx(ha, {
        open: !!v,
        onOpenChange: (U) => {
          U || b(null);
        },
        children: u.jsxs(In, {
          children: [
            u.jsx($n, { children: u.jsx(Xn, { children: "Update Progress" }) }),
            u.jsxs("div", {
              className: "space-y-3",
              children: [
                u.jsxs(gt, { children: ["Progress: ", O, "%"] }),
                u.jsx("input", {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: O,
                  onChange: (U) => k(U.target.value),
                  className: "w-full accent-primary",
                }),
                u.jsx(Uh, { value: Number(O), className: "h-2" }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => b(null),
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  onClick: () =>
                    v && oe.mutate({ id: v.id, data: { progress: Number(O) } }),
                  disabled: oe.isPending,
                  children: "Save",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var xu = "Checkbox",
  [d3] = lr(xu),
  [f3, qm] = d3(xu);
function h3(t) {
  const {
      __scopeCheckbox: a,
      checked: s,
      children: i,
      defaultChecked: o,
      disabled: c,
      form: f,
      name: m,
      onCheckedChange: p,
      required: y,
      value: v = "on",
      internal_do_not_use_render: b,
    } = t,
    [_, N] = Dl({ prop: s, defaultProp: o ?? !1, onChange: p, caller: xu }),
    [j, S] = g.useState(null),
    [C, A] = g.useState(null),
    O = g.useRef(!1),
    k = j ? !!f || !!j.closest("form") : !0,
    D = {
      checked: _,
      disabled: c,
      setChecked: N,
      control: j,
      setControl: S,
      name: m,
      form: f,
      value: v,
      hasConsumerStoppedPropagationRef: O,
      required: y,
      defaultChecked: _s(o) ? !1 : o,
      isFormControl: k,
      bubbleInput: C,
      setBubbleInput: A,
    };
  return u.jsx(f3, { scope: a, ...D, children: m3(b) ? b(D) : i });
}
var jS = "CheckboxTrigger",
  TS = g.forwardRef(
    ({ __scopeCheckbox: t, onKeyDown: a, onClick: s, ...i }, o) => {
      const {
          control: c,
          value: f,
          disabled: m,
          checked: p,
          required: y,
          setControl: v,
          setChecked: b,
          hasConsumerStoppedPropagationRef: _,
          isFormControl: N,
          bubbleInput: j,
        } = qm(jS, t),
        S = ut(o, v),
        C = g.useRef(p);
      return (
        g.useEffect(() => {
          const A = c?.form;
          if (A) {
            const O = () => b(C.current);
            return (
              A.addEventListener("reset", O),
              () => A.removeEventListener("reset", O)
            );
          }
        }, [c, b]),
        u.jsx(Ye.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": _s(p) ? "mixed" : p,
          "aria-required": y,
          "data-state": MS(p),
          "data-disabled": m ? "" : void 0,
          disabled: m,
          value: f,
          ...i,
          ref: S,
          onKeyDown: qe(a, (A) => {
            A.key === "Enter" && A.preventDefault();
          }),
          onClick: qe(s, (A) => {
            b((O) => (_s(O) ? !0 : !O)),
              j &&
                N &&
                ((_.current = A.isPropagationStopped()),
                _.current || A.stopPropagation());
          }),
        })
      );
    }
  );
TS.displayName = jS;
var Pm = g.forwardRef((t, a) => {
  const {
    __scopeCheckbox: s,
    name: i,
    checked: o,
    defaultChecked: c,
    required: f,
    disabled: m,
    value: p,
    onCheckedChange: y,
    form: v,
    ...b
  } = t;
  return u.jsx(h3, {
    __scopeCheckbox: s,
    checked: o,
    defaultChecked: c,
    disabled: m,
    required: f,
    onCheckedChange: y,
    name: i,
    form: v,
    value: p,
    internal_do_not_use_render: ({ isFormControl: _ }) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(TS, { ...b, ref: a, __scopeCheckbox: s }),
          _ && u.jsx(kS, { __scopeCheckbox: s }),
        ],
      }),
  });
});
Pm.displayName = xu;
var OS = "CheckboxIndicator",
  RS = g.forwardRef((t, a) => {
    const { __scopeCheckbox: s, forceMount: i, ...o } = t,
      c = qm(OS, s);
    return u.jsx(Ts, {
      present: i || _s(c.checked) || c.checked === !0,
      children: u.jsx(Ye.span, {
        "data-state": MS(c.checked),
        "data-disabled": c.disabled ? "" : void 0,
        ...o,
        ref: a,
        style: { pointerEvents: "none", ...t.style },
      }),
    });
  });
RS.displayName = OS;
var AS = "CheckboxBubbleInput",
  kS = g.forwardRef(({ __scopeCheckbox: t, ...a }, s) => {
    const {
        control: i,
        hasConsumerStoppedPropagationRef: o,
        checked: c,
        defaultChecked: f,
        required: m,
        disabled: p,
        name: y,
        value: v,
        form: b,
        bubbleInput: _,
        setBubbleInput: N,
      } = qm(AS, t),
      j = ut(s, N),
      S = ow(c),
      C = s1(i);
    g.useEffect(() => {
      const O = _;
      if (!O) return;
      const k = window.HTMLInputElement.prototype,
        q = Object.getOwnPropertyDescriptor(k, "checked").set,
        X = !o.current;
      if (S !== c && q) {
        const Z = new Event("click", { bubbles: X });
        (O.indeterminate = _s(c)),
          q.call(O, _s(c) ? !1 : c),
          O.dispatchEvent(Z);
      }
    }, [_, S, c, o]);
    const A = g.useRef(_s(c) ? !1 : c);
    return u.jsx(Ye.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: f ?? A.current,
      required: m,
      disabled: p,
      name: y,
      value: v,
      form: b,
      ...a,
      tabIndex: -1,
      ref: j,
      style: {
        ...a.style,
        ...C,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
kS.displayName = AS;
function m3(t) {
  return typeof t == "function";
}
function _s(t) {
  return t === "indeterminate";
}
function MS(t) {
  return _s(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const DS = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(Pm, {
    ref: s,
    className: Ee(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      t
    ),
    ...a,
    children: u.jsx(RS, {
      className: Ee("grid place-content-center text-current"),
      children: u.jsx(S0, { className: "h-4 w-4" }),
    }),
  })
);
DS.displayName = Pm.displayName;
function p3(t) {
  return t === "completed"
    ? "bg-green-500/20 text-green-400 border-green-500/30"
    : t === "in_progress"
    ? "bg-orange-500/20 text-orange-400 border-orange-500/30"
    : t === "overdue"
    ? "bg-red-500/20 text-red-400 border-red-500/30"
    : "bg-muted text-muted-foreground border-border";
}
function y3() {
  const { user: t } = ya(),
    a = t?.role === "admin",
    s = Va(),
    { toast: i } = Hn(),
    [o, c] = g.useState(""),
    [f, m] = g.useState("all"),
    [p, y] = g.useState(!1),
    [v, b] = g.useState(null),
    [_, N] = g.useState({
      title: "",
      description: "",
      deadline: "",
      assignedTo: "",
    }),
    { data: j, isLoading: S } = xA(),
    { data: C } = pm(),
    A = j?.data ?? [],
    O = C?.data ?? [],
    k = _A({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/tasks"] }),
            y(!1),
            i({ title: "Task created" });
        },
      },
    }),
    D = jA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/tasks"] }),
            b(null),
            i({ title: "Task updated" });
        },
      },
    }),
    q = AA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/tasks"] }),
            i({ title: "Task deleted" });
        },
      },
    }),
    X = LA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/tasks"] }),
            i({ title: "Task completed!" });
        },
      },
    }),
    Z = A.filter((G) => {
      const ue = G.title?.toLowerCase().includes(o.toLowerCase()),
        ve = f === "all" || G.status === f;
      return ue && ve;
    }),
    P = (G) => {
      N({
        title: G.title,
        description: G.description ?? "",
        deadline: G.deadline ? G.deadline.slice(0, 10) : "",
        assignedTo: "",
      }),
        b(G);
    };
  return u.jsxs("div", {
    className: "p-6 max-w-7xl mx-auto space-y-5",
    children: [
      u.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          u.jsxs("div", {
            children: [
              u.jsxs("h1", {
                className: "text-2xl font-bold flex items-center gap-2",
                children: [
                  u.jsx(Pl, { className: "w-6 h-6 text-primary" }),
                  " Tasks",
                ],
              }),
              u.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Track and manage team tasks",
              }),
            ],
          }),
          a &&
            u.jsxs(Me, {
              onClick: () => {
                N({ title: "", description: "", deadline: "", assignedTo: "" }),
                  y(!0);
              },
              className: "gap-1.5",
              children: [u.jsx(tu, { className: "w-4 h-4" }), " New Task"],
            }),
        ],
      }),
      u.jsxs("div", {
        className: "flex gap-3 flex-wrap",
        children: [
          u.jsxs("div", {
            className: "relative flex-1 min-w-[200px]",
            children: [
              u.jsx(nu, {
                className:
                  "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
              }),
              u.jsx(ft, {
                placeholder: "Search tasks...",
                value: o,
                onChange: (G) => c(G.target.value),
                className: "pl-9",
              }),
            ],
          }),
          u.jsxs(ws, {
            value: f,
            onValueChange: m,
            children: [
              u.jsx(La, { className: "w-36", children: u.jsx(Ss, {}) }),
              u.jsxs(Ua, {
                children: [
                  u.jsx(St, { value: "all", children: "All Status" }),
                  u.jsx(St, { value: "pending", children: "Pending" }),
                  u.jsx(St, { value: "in_progress", children: "In Progress" }),
                  u.jsx(St, { value: "completed", children: "Completed" }),
                  u.jsx(St, { value: "overdue", children: "Overdue" }),
                ],
              }),
            ],
          }),
        ],
      }),
      S
        ? u.jsx("div", {
            className: "space-y-3",
            children: [1, 2, 3].map((G) => u.jsx(ta, { className: "h-20" }, G)),
          })
        : Z.length
        ? u.jsx("div", {
            className: "space-y-2.5",
            children: Z.map((G) =>
              u.jsx(
                Cn,
                {
                  className: Ee(
                    "border-border transition-colors",
                    G.status === "completed" && "opacity-60"
                  ),
                  children: u.jsx(En, {
                    className: "p-4",
                    children: u.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        !a &&
                          u.jsx(DS, {
                            checked: G.status === "completed",
                            disabled: G.status === "completed",
                            onCheckedChange: () => X.mutate({ id: G.id }),
                            className: "mt-0.5 flex-shrink-0",
                          }),
                        u.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            u.jsxs("div", {
                              className:
                                "flex items-start justify-between gap-2",
                              children: [
                                u.jsx("p", {
                                  className: Ee(
                                    "font-medium text-sm",
                                    G.status === "completed" &&
                                      "line-through text-muted-foreground"
                                  ),
                                  children: G.title,
                                }),
                                u.jsx(ea, {
                                  className: Ee(
                                    "text-[10px] border flex-shrink-0",
                                    p3(G.status)
                                  ),
                                  children: G.status?.replace("_", " "),
                                }),
                              ],
                            }),
                            G.description &&
                              u.jsx("p", {
                                className:
                                  "text-xs text-muted-foreground mt-0.5 line-clamp-1",
                                children: G.description,
                              }),
                            u.jsx("div", {
                              className:
                                "flex items-center gap-3 mt-1.5 text-xs text-muted-foreground",
                              children:
                                G.deadline &&
                                u.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    u.jsx(yi, { className: "w-3 h-3" }),
                                    new Date(G.deadline).toLocaleDateString(),
                                  ],
                                }),
                            }),
                          ],
                        }),
                        a &&
                          u.jsxs("div", {
                            className: "flex items-center gap-1 flex-shrink-0",
                            children: [
                              u.jsx(Me, {
                                size: "sm",
                                variant: "ghost",
                                className: "h-7 w-7 p-0",
                                onClick: () => P(G),
                                children: u.jsx(tm, {
                                  className: "w-3.5 h-3.5",
                                }),
                              }),
                              u.jsx(Me, {
                                size: "sm",
                                variant: "ghost",
                                className:
                                  "h-7 w-7 p-0 text-destructive hover:text-destructive",
                                onClick: () => q.mutate({ id: G.id }),
                                children: u.jsx(au, {
                                  className: "w-3.5 h-3.5",
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                },
                G.id
              )
            ),
          })
        : u.jsxs("div", {
            className: "text-center py-16 text-muted-foreground",
            children: [
              u.jsx(Pl, { className: "w-10 h-10 mx-auto mb-3 opacity-20" }),
              u.jsx("p", { className: "text-sm", children: "No tasks found" }),
            ],
          }),
      u.jsx(ha, {
        open: p || !!v,
        onOpenChange: (G) => {
          G || (y(!1), b(null));
        },
        children: u.jsxs(In, {
          children: [
            u.jsx($n, {
              children: u.jsx(Xn, { children: v ? "Edit Task" : "New Task" }),
            }),
            u.jsxs("div", {
              className: "space-y-3",
              children: [
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Title" }),
                    u.jsx(ft, {
                      value: _.title,
                      onChange: (G) =>
                        N((ue) => ({ ...ue, title: G.target.value })),
                      placeholder: "Task title",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Description" }),
                    u.jsx(rr, {
                      value: _.description,
                      onChange: (G) =>
                        N((ue) => ({ ...ue, description: G.target.value })),
                      placeholder: "Description",
                      rows: 2,
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    u.jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        u.jsx(gt, { children: "Deadline" }),
                        u.jsx(ft, {
                          type: "date",
                          value: _.deadline,
                          onChange: (G) =>
                            N((ue) => ({ ...ue, deadline: G.target.value })),
                        }),
                      ],
                    }),
                    a &&
                      !v &&
                      u.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          u.jsx(gt, { children: "Assign To" }),
                          u.jsxs(ws, {
                            value: _.assignedTo,
                            onValueChange: (G) =>
                              N((ue) => ({ ...ue, assignedTo: G })),
                            children: [
                              u.jsx(La, {
                                children: u.jsx(Ss, {
                                  placeholder: "Select member",
                                }),
                              }),
                              u.jsx(Ua, {
                                children: O.filter(
                                  (G) => G.status === "active"
                                ).map((G) =>
                                  u.jsx(
                                    St,
                                    {
                                      value: String(G.id),
                                      children: G.fullName,
                                    },
                                    G.id
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => {
                    y(!1), b(null);
                  },
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  onClick: () => {
                    if (v)
                      D.mutate({
                        id: v.id,
                        data: {
                          title: _.title,
                          description: _.description,
                          deadline: _.deadline || void 0,
                        },
                      });
                    else {
                      const G = {
                        title: _.title,
                        description: _.description,
                        deadline: _.deadline || void 0,
                      };
                      _.assignedTo && (G.assignedTo = [Number(_.assignedTo)]),
                        k.mutate({ data: G });
                    }
                  },
                  disabled: !_.title || k.isPending || D.isPending,
                  children: v ? "Update" : "Create",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function g3({ status: t }) {
  return t === "approved"
    ? u.jsx($h, { className: "w-4 h-4 text-green-400" })
    : t === "rejected"
    ? u.jsx(Xh, { className: "w-4 h-4 text-red-400" })
    : u.jsx(Wh, { className: "w-4 h-4 text-yellow-400" });
}
function v3(t) {
  return t === "approved"
    ? "bg-green-500/20 text-green-400 border-green-500/30"
    : t === "rejected"
    ? "bg-red-500/20 text-red-400 border-red-500/30"
    : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
}
function x3() {
  const { user: t } = ya(),
    a = t?.role === "admin",
    s = Va(),
    { toast: i } = Hn(),
    [o, c] = g.useState(!1),
    [f, m] = g.useState("all"),
    [p, y] = g.useState(""),
    [v, b] = g.useState(new Date().toISOString().slice(0, 10)),
    [_, N] = g.useState(null),
    { data: j, isLoading: S } = JA(),
    C = j?.data ?? [],
    A = ak({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/excuses"] }),
            c(!1),
            y(""),
            i({ title: "Excuse submitted" });
        },
        onError: (D) =>
          i({
            title: "Error",
            description: D?.data?.error,
            variant: "destructive",
          }),
      },
    }),
    O = lk({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/excuses"] }),
            N(null),
            i({ title: "Excuse reviewed" });
        },
      },
    }),
    k = C.filter((D) => f === "all" || D.status === f);
  return u.jsxs("div", {
    className: "p-6 max-w-4xl mx-auto space-y-5",
    children: [
      u.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          u.jsxs("div", {
            children: [
              u.jsxs("h1", {
                className: "text-2xl font-bold flex items-center gap-2",
                children: [
                  u.jsx(ii, { className: "w-6 h-6 text-primary" }),
                  " Excuses",
                ],
              }),
              u.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: a
                  ? "Review member excuse submissions"
                  : "Submit and track your excuses",
              }),
            ],
          }),
          !a &&
            u.jsxs(Me, {
              onClick: () => c(!0),
              className: "gap-1.5",
              children: [u.jsx(tu, { className: "w-4 h-4" }), " New Excuse"],
            }),
        ],
      }),
      u.jsx("div", {
        className: "flex gap-3",
        children: u.jsxs(ws, {
          value: f,
          onValueChange: m,
          children: [
            u.jsx(La, { className: "w-36", children: u.jsx(Ss, {}) }),
            u.jsxs(Ua, {
              children: [
                u.jsx(St, { value: "all", children: "All" }),
                u.jsx(St, { value: "pending", children: "Pending" }),
                u.jsx(St, { value: "approved", children: "Approved" }),
                u.jsx(St, { value: "rejected", children: "Rejected" }),
              ],
            }),
          ],
        }),
      }),
      S
        ? u.jsx("div", {
            className: "space-y-3",
            children: [1, 2, 3].map((D) => u.jsx(ta, { className: "h-24" }, D)),
          })
        : k.length
        ? u.jsx("div", {
            className: "space-y-3",
            children: k.map((D) =>
              u.jsx(
                Cn,
                {
                  className: "border-border",
                  children: u.jsx(En, {
                    className: "p-4",
                    children: u.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-start gap-2.5 flex-1 min-w-0",
                          children: [
                            u.jsx(g3, { status: D.status }),
                            u.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                u.jsx("p", {
                                  className: "text-sm font-medium line-clamp-2",
                                  children: D.reason,
                                }),
                                D.adminNote &&
                                  u.jsxs("p", {
                                    className:
                                      "text-xs text-muted-foreground mt-1 italic",
                                    children: [
                                      '"Admin note: ',
                                      D.adminNote,
                                      '"',
                                    ],
                                  }),
                                u.jsxs("div", {
                                  className:
                                    "flex items-center gap-3 mt-1.5 text-xs text-muted-foreground",
                                  children: [
                                    a &&
                                      D.fullName &&
                                      u.jsxs("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          u.jsx(Yl, { className: "w-3 h-3" }),
                                          D.fullName,
                                        ],
                                      }),
                                    u.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        u.jsx(yi, { className: "w-3 h-3" }),
                                        D.excuseDate
                                          ? new Date(
                                              D.excuseDate
                                            ).toLocaleDateString()
                                          : new Date(
                                              D.createdAt
                                            ).toLocaleDateString(),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex items-center gap-2 flex-shrink-0",
                          children: [
                            u.jsx(ea, {
                              className: Ee("text-[10px] border", v3(D.status)),
                              children: D.status,
                            }),
                            a &&
                              D.status === "pending" &&
                              u.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                  u.jsxs(Me, {
                                    size: "sm",
                                    className:
                                      "h-7 text-xs bg-green-600 hover:bg-green-700 text-white gap-1",
                                    onClick: () =>
                                      N({
                                        id: D.id,
                                        action: "approve",
                                        note: "",
                                      }),
                                    children: [
                                      u.jsx($h, { className: "w-3 h-3" }),
                                      " Approve",
                                    ],
                                  }),
                                  u.jsxs(Me, {
                                    size: "sm",
                                    variant: "outline",
                                    className:
                                      "h-7 text-xs text-destructive border-destructive/30 hover:bg-destructive/10 gap-1",
                                    onClick: () =>
                                      N({
                                        id: D.id,
                                        action: "reject",
                                        note: "",
                                      }),
                                    children: [
                                      u.jsx(Xh, { className: "w-3 h-3" }),
                                      " Reject",
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                D.id
              )
            ),
          })
        : u.jsxs("div", {
            className: "text-center py-16 text-muted-foreground",
            children: [
              u.jsx(ii, { className: "w-10 h-10 mx-auto mb-3 opacity-20" }),
              u.jsx("p", {
                className: "text-sm",
                children: "No excuses found",
              }),
            ],
          }),
      u.jsx(ha, {
        open: o,
        onOpenChange: c,
        children: u.jsxs(In, {
          children: [
            u.jsx($n, { children: u.jsx(Xn, { children: "Submit Excuse" }) }),
            u.jsxs("div", {
              className: "space-y-3",
              children: [
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Date" }),
                    u.jsx(ft, {
                      type: "date",
                      value: v,
                      onChange: (D) => b(D.target.value),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Reason" }),
                    u.jsx(rr, {
                      value: p,
                      onChange: (D) => y(D.target.value),
                      placeholder: "Describe your excuse...",
                      rows: 5,
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => c(!1),
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  onClick: () =>
                    A.mutate({ data: { reason: p, excuseDate: v } }),
                  disabled: !p.trim() || A.isPending,
                  children: "Submit",
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx(ha, {
        open: !!_,
        onOpenChange: (D) => {
          D || N(null);
        },
        children: u.jsxs(In, {
          children: [
            u.jsx($n, {
              children: u.jsx(Xn, {
                children:
                  _?.action === "approve" ? "Approve Excuse" : "Reject Excuse",
              }),
            }),
            u.jsxs("div", {
              className: "space-y-2",
              children: [
                u.jsx(gt, { children: "Note (optional)" }),
                u.jsx(rr, {
                  value: _?.note ?? "",
                  onChange: (D) =>
                    N((q) => q && { ...q, note: D.target.value }),
                  placeholder: "Add a note for the member...",
                  rows: 3,
                }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => N(null),
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  className:
                    _?.action === "approve"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-destructive hover:bg-destructive/90",
                  onClick: () =>
                    _ &&
                    O.mutate({
                      id: _.id,
                      data: { action: _.action, note: _.note || void 0 },
                    }),
                  disabled: O.isPending,
                  children: _?.action === "approve" ? "Approve" : "Reject",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function b3() {
  return Eb.useSyncExternalStore(
    w3,
    () => !0,
    () => !1
  );
}
function w3() {
  return () => {};
}
var Vm = "Avatar",
  [S3] = wS(Vm),
  [_3, LS] = S3(Vm),
  US = g.forwardRef((t, a) => {
    const { __scopeAvatar: s, ...i } = t,
      [o, c] = g.useState("idle");
    return u.jsx(_3, {
      scope: s,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: c,
      children: u.jsx(cr.span, { ...i, ref: a }),
    });
  });
US.displayName = Vm;
var zS = "AvatarImage",
  qS = g.forwardRef((t, a) => {
    const {
        __scopeAvatar: s,
        src: i,
        onLoadingStatusChange: o = () => {},
        ...c
      } = t,
      f = LS(zS, s),
      m = N3(i, c),
      p = Vn((y) => {
        o(y), f.onImageLoadingStatusChange(y);
      });
    return (
      Mt(() => {
        m !== "idle" && p(m);
      }, [m, p]),
      m === "loaded" ? u.jsx(cr.img, { ...c, ref: a, src: i }) : null
    );
  });
qS.displayName = zS;
var PS = "AvatarFallback",
  VS = g.forwardRef((t, a) => {
    const { __scopeAvatar: s, delayMs: i, ...o } = t,
      c = LS(PS, s),
      [f, m] = g.useState(i === void 0);
    return (
      g.useEffect(() => {
        if (i !== void 0) {
          const p = window.setTimeout(() => m(!0), i);
          return () => window.clearTimeout(p);
        }
      }, [i]),
      f && c.imageLoadingStatus !== "loaded"
        ? u.jsx(cr.span, { ...o, ref: a })
        : null
    );
  });
VS.displayName = PS;
function wb(t, a) {
  return t
    ? a
      ? (t.src !== a && (t.src = a),
        t.complete && t.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function N3(t, { referrerPolicy: a, crossOrigin: s }) {
  const i = b3(),
    o = g.useRef(null),
    c = i ? (o.current || (o.current = new window.Image()), o.current) : null,
    [f, m] = g.useState(() => wb(c, t));
  return (
    Mt(() => {
      m(wb(c, t));
    }, [c, t]),
    Mt(() => {
      const p = (b) => () => {
        m(b);
      };
      if (!c) return;
      const y = p("loaded"),
        v = p("error");
      return (
        c.addEventListener("load", y),
        c.addEventListener("error", v),
        a && (c.referrerPolicy = a),
        typeof s == "string" && (c.crossOrigin = s),
        () => {
          c.removeEventListener("load", y), c.removeEventListener("error", v);
        }
      );
    }, [c, s, a]),
    f
  );
}
var HS = US,
  BS = qS,
  FS = VS;
const Wl = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(HS, {
    ref: s,
    className: Ee(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      t
    ),
    ...a,
  })
);
Wl.displayName = HS.displayName;
const C3 = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(BS, { ref: s, className: Ee("aspect-square h-full w-full", t), ...a })
);
C3.displayName = BS.displayName;
const Jl = g.forwardRef(({ className: t, ...a }, s) =>
  u.jsx(FS, {
    ref: s,
    className: Ee(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      t
    ),
    ...a,
  })
);
Jl.displayName = FS.displayName;
function E3(t) {
  return t === "active"
    ? "bg-green-500/20 text-green-400 border-green-500/30"
    : t === "pending"
    ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    : "bg-red-500/20 text-red-400 border-red-500/30";
}
function j3() {
  const { data: t, isLoading: a } = Bk();
  return a
    ? u.jsxs("div", {
        className: "space-y-2",
        children: [
          u.jsx(ta, { className: "h-16 w-full" }),
          u.jsx(ta, { className: "h-16 w-full" }),
        ],
      })
    : u.jsx("div", {
        className: "space-y-2 max-h-96 overflow-y-auto",
        children: (t ?? []).map((s) =>
          u.jsxs(
            "div",
            {
              className: "flex items-center gap-3 p-3 rounded-lg bg-muted/40",
              children: [
                u.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    u.jsx("p", {
                      className: "text-sm font-medium",
                      children: s.fullName,
                    }),
                    u.jsxs("p", {
                      className: "text-xs text-muted-foreground",
                      children: ["@", s.username],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex items-center gap-3 text-xs",
                  children: [
                    u.jsxs("span", {
                      className: "flex items-center gap-1",
                      children: [
                        u.jsx(ri, { className: "w-3 h-3 text-purple-400" }),
                        s.totalLogs,
                        " logs",
                      ],
                    }),
                    u.jsxs("span", {
                      className: "flex items-center gap-1",
                      children: [
                        u.jsx(Jh, { className: "w-3 h-3 text-orange-400" }),
                        s.currentStreak ?? 0,
                        "d",
                      ],
                    }),
                    s.consecutiveMissed > 0 &&
                      u.jsxs("span", {
                        className: "flex items-center gap-1 text-red-400",
                        children: [
                          u.jsx(ii, { className: "w-3 h-3" }),
                          s.consecutiveMissed,
                          " missed",
                        ],
                      }),
                  ],
                }),
              ],
            },
            s.userId
          )
        ),
      });
}
function T3() {
  const t = Va(),
    { toast: a } = Hn(),
    [s, i] = g.useState(""),
    [o, c] = g.useState("all"),
    [f, m] = g.useState(null),
    [p, y] = g.useState(!1),
    [v, b] = g.useState(null),
    [_, N] = g.useState(""),
    [j, S] = g.useState({
      fullName: "",
      email: "",
      role: "member",
      status: "active",
    }),
    { data: C, isLoading: A } = pm(),
    O = C?.data ?? [],
    k = LR({
      mutation: {
        onSuccess: () => {
          t.invalidateQueries({ queryKey: ["/api/users"] }),
            m(null),
            a({ title: "Member updated" });
        },
      },
    }),
    D = PR({
      mutation: {
        onSuccess: () => {
          t.invalidateQueries({ queryKey: ["/api/users"] }),
            a({ title: "Member deleted" });
        },
      },
    }),
    q = FR({
      mutation: {
        onSuccess: () => {
          b(null), N(""), a({ title: "Password reset" });
        },
      },
    }),
    X = O.filter((P) => {
      const G =
          P.fullName?.toLowerCase().includes(s.toLowerCase()) ||
          P.username?.toLowerCase().includes(s.toLowerCase()) ||
          P.email?.toLowerCase().includes(s.toLowerCase()),
        ue = o === "all" || P.status === o;
      return G && ue;
    }),
    Z = (P) => {
      S({
        fullName: P.fullName,
        email: P.email,
        role: P.role,
        status: P.status,
      }),
        m(P);
    };
  return u.jsxs("div", {
    className: "p-6 max-w-6xl mx-auto space-y-5",
    children: [
      u.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          u.jsxs("div", {
            children: [
              u.jsxs("h1", {
                className: "text-2xl font-bold flex items-center gap-2",
                children: [
                  u.jsx(kc, { className: "w-6 h-6 text-primary" }),
                  " Members",
                ],
              }),
              u.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Manage team members and their access",
              }),
            ],
          }),
          u.jsxs(Me, {
            variant: "outline",
            onClick: () => y(!0),
            className: "gap-1.5",
            children: [u.jsx(fx, { className: "w-4 h-4" }), " Member Stats"],
          }),
        ],
      }),
      u.jsxs("div", {
        className: "flex gap-3 flex-wrap",
        children: [
          u.jsxs("div", {
            className: "relative flex-1 min-w-[200px]",
            children: [
              u.jsx(nu, {
                className:
                  "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
              }),
              u.jsx(ft, {
                placeholder: "Search members...",
                value: s,
                onChange: (P) => i(P.target.value),
                className: "pl-9",
              }),
            ],
          }),
          u.jsxs(ws, {
            value: o,
            onValueChange: c,
            children: [
              u.jsx(La, { className: "w-36", children: u.jsx(Ss, {}) }),
              u.jsxs(Ua, {
                children: [
                  u.jsx(St, { value: "all", children: "All Status" }),
                  u.jsx(St, { value: "active", children: "Active" }),
                  u.jsx(St, { value: "pending", children: "Pending" }),
                  u.jsx(St, { value: "rejected", children: "Rejected" }),
                ],
              }),
            ],
          }),
        ],
      }),
      A
        ? u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
            children: [1, 2, 3, 4, 5, 6].map((P) =>
              u.jsx(ta, { className: "h-32" }, P)
            ),
          })
        : X.length
        ? u.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
            children: X.map((P) => {
              const G = P.fullName
                ?.split(" ")
                .map((ue) => ue[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
              return u.jsx(
                Cn,
                {
                  className:
                    "border-border hover:border-primary/30 transition-colors",
                  children: u.jsxs(En, {
                    className: "p-4",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-start gap-3 mb-3",
                        children: [
                          u.jsx(Wl, {
                            className: "w-10 h-10 flex-shrink-0",
                            children: u.jsx(Jl, {
                              className: "text-sm bg-primary/20 text-primary",
                              children: G,
                            }),
                          }),
                          u.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              u.jsxs("div", {
                                className:
                                  "flex items-start justify-between gap-1",
                                children: [
                                  u.jsx("p", {
                                    className: "font-medium text-sm truncate",
                                    children: P.fullName,
                                  }),
                                  P.role === "admin" &&
                                    u.jsx(E0, {
                                      className:
                                        "w-3.5 h-3.5 text-primary flex-shrink-0",
                                    }),
                                ],
                              }),
                              u.jsxs("p", {
                                className: "text-xs text-muted-foreground",
                                children: ["@", P.username],
                              }),
                              u.jsxs("div", {
                                className: "flex items-center gap-1.5 mt-1.5",
                                children: [
                                  u.jsx(ea, {
                                    className: Ee(
                                      "text-[10px] border",
                                      E3(P.status)
                                    ),
                                    children: P.status,
                                  }),
                                  u.jsx(ea, {
                                    className:
                                      "text-[10px] border bg-muted text-muted-foreground",
                                    children: P.role,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("p", {
                        className:
                          "text-xs text-muted-foreground flex items-center gap-1 mb-3",
                        children: [
                          u.jsx(C0, { className: "w-3 h-3" }),
                          P.email,
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex gap-1.5",
                        children: [
                          u.jsxs(Me, {
                            size: "sm",
                            variant: "outline",
                            className: "h-7 text-xs flex-1 gap-1",
                            onClick: () => Z(P),
                            children: [
                              u.jsx(tm, { className: "w-3 h-3" }),
                              " Edit",
                            ],
                          }),
                          u.jsx(Me, {
                            size: "sm",
                            variant: "ghost",
                            className: "h-7 w-7 p-0",
                            title: "Reset password",
                            onClick: () => {
                              N(""), b(P);
                            },
                            children: u.jsx($j, { className: "w-3.5 h-3.5" }),
                          }),
                          u.jsx(Me, {
                            size: "sm",
                            variant: "ghost",
                            className:
                              "h-7 w-7 p-0 text-destructive hover:text-destructive",
                            onClick: () => D.mutate({ id: P.id }),
                            children: u.jsx(au, { className: "w-3.5 h-3.5" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                P.id
              );
            }),
          })
        : u.jsxs("div", {
            className: "text-center py-16 text-muted-foreground",
            children: [
              u.jsx(kc, { className: "w-10 h-10 mx-auto mb-3 opacity-20" }),
              u.jsx("p", {
                className: "text-sm",
                children: "No members found",
              }),
            ],
          }),
      u.jsx(ha, {
        open: !!f,
        onOpenChange: (P) => {
          P || m(null);
        },
        children: u.jsxs(In, {
          children: [
            u.jsx($n, { children: u.jsx(Xn, { children: "Edit Member" }) }),
            u.jsxs("div", {
              className: "space-y-3",
              children: [
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Full Name" }),
                    u.jsx(ft, {
                      value: j.fullName,
                      onChange: (P) =>
                        S((G) => ({ ...G, fullName: P.target.value })),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Email" }),
                    u.jsx(ft, {
                      value: j.email,
                      onChange: (P) =>
                        S((G) => ({ ...G, email: P.target.value })),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    u.jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        u.jsx(gt, { children: "Role" }),
                        u.jsxs(ws, {
                          value: j.role,
                          onValueChange: (P) => S((G) => ({ ...G, role: P })),
                          children: [
                            u.jsx(La, { children: u.jsx(Ss, {}) }),
                            u.jsxs(Ua, {
                              children: [
                                u.jsx(St, {
                                  value: "member",
                                  children: "Member",
                                }),
                                u.jsx(St, {
                                  value: "admin",
                                  children: "Admin",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        u.jsx(gt, { children: "Status" }),
                        u.jsxs(ws, {
                          value: j.status,
                          onValueChange: (P) => S((G) => ({ ...G, status: P })),
                          children: [
                            u.jsx(La, { children: u.jsx(Ss, {}) }),
                            u.jsxs(Ua, {
                              children: [
                                u.jsx(St, {
                                  value: "active",
                                  children: "Active",
                                }),
                                u.jsx(St, {
                                  value: "pending",
                                  children: "Pending",
                                }),
                                u.jsx(St, {
                                  value: "rejected",
                                  children: "Rejected",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => m(null),
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  onClick: () => f && k.mutate({ id: f.id, data: j }),
                  disabled: k.isPending,
                  children: "Update",
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx(ha, {
        open: p,
        onOpenChange: y,
        children: u.jsxs(In, {
          children: [
            u.jsx($n, {
              children: u.jsxs(Xn, {
                className: "flex items-center gap-2",
                children: [
                  u.jsx(fx, { className: "w-4 h-4 text-primary" }),
                  "Member Statistics",
                ],
              }),
            }),
            u.jsx(j3, {}),
          ],
        }),
      }),
      u.jsx(ha, {
        open: !!v,
        onOpenChange: (P) => {
          P || b(null);
        },
        children: u.jsxs(In, {
          children: [
            u.jsx($n, {
              children: u.jsxs(Xn, {
                children: ["Reset Password for ", v?.fullName],
              }),
            }),
            u.jsxs("div", {
              className: "space-y-1.5",
              children: [
                u.jsx(gt, { children: "New Password" }),
                u.jsx(ft, {
                  type: "password",
                  value: _,
                  onChange: (P) => N(P.target.value),
                  placeholder: "Enter new password",
                }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => b(null),
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  onClick: () =>
                    v && q.mutate({ id: v.id, data: { newPassword: _ } }),
                  disabled: !_ || q.isPending,
                  children: "Reset Password",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function O3() {
  const t = Va(),
    { toast: a } = Hn(),
    { data: s, isLoading: i } = M1({}),
    o = jk({
      mutation: {
        onSuccess: (f, m) => {
          t.invalidateQueries({ queryKey: ["/api/approvals/registrations"] }),
            t.invalidateQueries({ queryKey: ["/api/users"] }),
            a({
              title:
                m.data.action === "approve"
                  ? "User approved"
                  : "Registration rejected",
            });
        },
      },
    }),
    c = (f, m) => {
      o.mutate({ id: f, data: { action: m } });
    };
  return u.jsxs("div", {
    className: "p-6 max-w-4xl mx-auto space-y-5",
    children: [
      u.jsxs("div", {
        children: [
          u.jsxs("h1", {
            className: "text-2xl font-bold flex items-center gap-2",
            children: [
              u.jsx(N0, { className: "w-6 h-6 text-primary" }),
              " Approvals",
            ],
          }),
          u.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Review pending registration requests",
          }),
        ],
      }),
      u.jsx("div", {
        className: "flex items-center gap-2",
        children: u.jsxs(ea, {
          className:
            "bg-primary/20 text-primary border-primary/30 text-sm px-3 py-1",
          children: [i ? "..." : s?.length ?? 0, " pending"],
        }),
      }),
      i
        ? u.jsx("div", {
            className: "space-y-3",
            children: [1, 2, 3].map((f) => u.jsx(ta, { className: "h-28" }, f)),
          })
        : s?.length
        ? u.jsx("div", {
            className: "space-y-3",
            children: s.map((f) => {
              const m = f.fullName
                ?.split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
              return u.jsx(
                Cn,
                {
                  className:
                    "border-border hover:border-primary/30 transition-colors",
                  children: u.jsx(En, {
                    className: "p-5",
                    children: u.jsxs("div", {
                      className: "flex items-start justify-between gap-4",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            u.jsx(Wl, {
                              className: "w-10 h-10 flex-shrink-0",
                              children: u.jsx(Jl, {
                                className: "text-sm bg-primary/20 text-primary",
                                children: m,
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("p", {
                                  className: "font-semibold",
                                  children: f.fullName,
                                }),
                                u.jsxs("div", {
                                  className:
                                    "flex items-center gap-3 text-xs text-muted-foreground mt-0.5",
                                  children: [
                                    u.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        u.jsx(Yl, { className: "w-3 h-3" }),
                                        "@",
                                        f.username,
                                      ],
                                    }),
                                    u.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        u.jsx(C0, { className: "w-3 h-3" }),
                                        f.email,
                                      ],
                                    }),
                                  ],
                                }),
                                u.jsxs("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1 flex items-center gap-1",
                                  children: [
                                    u.jsx(yi, { className: "w-3 h-3" }),
                                    "Registered ",
                                    new Date(f.createdAt).toLocaleDateString(),
                                    " at ",
                                    new Date(f.createdAt).toLocaleTimeString(
                                      [],
                                      { hour: "2-digit", minute: "2-digit" }
                                    ),
                                  ],
                                }),
                                f.securityQuestion &&
                                  u.jsxs("p", {
                                    className:
                                      "text-xs text-muted-foreground/70 mt-1 italic",
                                    children: [
                                      "Security Q: ",
                                      f.securityQuestion,
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex gap-2 flex-shrink-0",
                          children: [
                            u.jsxs(Me, {
                              size: "sm",
                              className:
                                "bg-green-600 hover:bg-green-700 text-white gap-1.5",
                              onClick: () => c(f.id, "approve"),
                              disabled: o.isPending,
                              children: [
                                u.jsx($h, { className: "w-4 h-4" }),
                                " Approve",
                              ],
                            }),
                            u.jsxs(Me, {
                              size: "sm",
                              variant: "outline",
                              className:
                                "text-destructive border-destructive/30 hover:bg-destructive/10 gap-1.5",
                              onClick: () => c(f.id, "reject"),
                              disabled: o.isPending,
                              children: [
                                u.jsx(Xh, { className: "w-4 h-4" }),
                                " Reject",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                f.id
              );
            }),
          })
        : u.jsxs("div", {
            className: "text-center py-20 text-muted-foreground",
            children: [
              u.jsx(ql, { className: "w-14 h-14 mx-auto mb-4 opacity-20" }),
              u.jsx("p", {
                className: "font-medium",
                children: "All caught up!",
              }),
              u.jsx("p", {
                className: "text-sm mt-1",
                children: "No pending registration requests",
              }),
            ],
          }),
    ],
  });
}
function R3(t) {
  return (
    {
      course_assigned: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      task_assigned: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      excuse_reviewed: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      registration_reviewed:
        "bg-green-500/20 text-green-400 border-green-500/30",
      system: "bg-muted text-muted-foreground border-border",
    }[t] ?? "bg-muted text-muted-foreground border-border"
  );
}
function A3(t) {
  return (
    {
      course_assigned: "Course",
      task_assigned: "Task",
      excuse_reviewed: "Excuse",
      registration_reviewed: "Account",
      system: "System",
    }[t] ?? t
  );
}
function k3() {
  const t = Va(),
    { toast: a } = Hn(),
    { data: s, isLoading: i } = k1(),
    o = pk({
      mutation: {
        onSuccess: () =>
          t.invalidateQueries({ queryKey: ["/api/notifications"] }),
      },
    }),
    c = xk({
      mutation: {
        onSuccess: () => {
          t.invalidateQueries({ queryKey: ["/api/notifications"] }),
            a({ title: "All marked as read" });
        },
      },
    }),
    f = s?.data ?? [],
    m = s?.unreadCount ?? 0;
  return u.jsxs("div", {
    className: "p-6 max-w-3xl mx-auto space-y-5",
    children: [
      u.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          u.jsxs("div", {
            children: [
              u.jsxs("h1", {
                className: "text-2xl font-bold flex items-center gap-2",
                children: [
                  u.jsx(Ih, { className: "w-6 h-6 text-primary" }),
                  " Notifications",
                ],
              }),
              u.jsxs("p", {
                className: "text-sm text-muted-foreground",
                children: [m, " unread"],
              }),
            ],
          }),
          m > 0 &&
            u.jsxs(Me, {
              variant: "outline",
              size: "sm",
              className: "gap-1.5",
              onClick: () => c.mutate(),
              disabled: c.isPending,
              children: [u.jsx(Tj, { className: "w-4 h-4" }), " Mark all read"],
            }),
        ],
      }),
      i
        ? u.jsx("div", {
            className: "space-y-3",
            children: [1, 2, 3, 4].map((p) =>
              u.jsx(ta, { className: "h-20" }, p)
            ),
          })
        : f.length
        ? u.jsx("div", {
            className: "space-y-2",
            children: f.map((p) =>
              u.jsx(
                Cn,
                {
                  className: Ee(
                    "border-border cursor-pointer transition-all",
                    !p.read && "border-primary/30 bg-primary/5"
                  ),
                  onClick: () => !p.read && o.mutate({ id: p.id }),
                  children: u.jsx(En, {
                    className: "p-4",
                    children: u.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        u.jsx("div", {
                          className: "flex-shrink-0 mt-1",
                          children: p.read
                            ? u.jsx(hx, {
                                className: "w-3 h-3 text-muted-foreground/40",
                              })
                            : u.jsx(hx, {
                                className: "w-3 h-3 text-primary fill-primary",
                              }),
                        }),
                        u.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            u.jsxs("div", {
                              className:
                                "flex items-start justify-between gap-2",
                              children: [
                                u.jsx("p", {
                                  className: Ee(
                                    "text-sm font-medium",
                                    p.read && "text-muted-foreground"
                                  ),
                                  children: p.title,
                                }),
                                u.jsx(ea, {
                                  className: Ee(
                                    "text-[10px] border flex-shrink-0",
                                    R3(p.type)
                                  ),
                                  children: A3(p.type),
                                }),
                              ],
                            }),
                            u.jsx("p", {
                              className: "text-xs text-muted-foreground mt-0.5",
                              children: p.message,
                            }),
                            u.jsxs("p", {
                              className:
                                "text-[11px] text-muted-foreground/60 mt-1.5 flex items-center gap-1",
                              children: [
                                u.jsx(Wh, { className: "w-3 h-3" }),
                                new Date(p.createdAt).toLocaleString([], {
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                p.id
              )
            ),
          })
        : u.jsxs("div", {
            className: "text-center py-20 text-muted-foreground",
            children: [
              u.jsx(wj, { className: "w-14 h-14 mx-auto mb-4 opacity-20" }),
              u.jsx("p", {
                className: "font-medium",
                children: "No notifications",
              }),
              u.jsx("p", {
                className: "text-sm mt-1",
                children: "You're all caught up",
              }),
            ],
          }),
    ],
  });
}
var M3 = "Separator",
  Sb = "horizontal",
  D3 = ["horizontal", "vertical"],
  KS = g.forwardRef((t, a) => {
    const { decorative: s, orientation: i = Sb, ...o } = t,
      c = L3(i) ? i : Sb,
      m = s
        ? { role: "none" }
        : {
            "aria-orientation": c === "vertical" ? c : void 0,
            role: "separator",
          };
    return u.jsx(cr.div, { "data-orientation": c, ...m, ...o, ref: a });
  });
KS.displayName = M3;
function L3(t) {
  return D3.includes(t);
}
var QS = KS;
const GS = g.forwardRef(
  (
    { className: t, orientation: a = "horizontal", decorative: s = !0, ...i },
    o
  ) =>
    u.jsx(QS, {
      ref: o,
      decorative: s,
      orientation: a,
      className: Ee(
        "shrink-0 bg-border",
        a === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        t
      ),
      ...i,
    })
);
GS.displayName = QS.displayName;
function U3() {
  const { user: t } = ya(),
    { toast: a } = Hn(),
    [s, i] = g.useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }),
    [o, c] = g.useState({ current: !1, newPw: !1, confirm: !1 }),
    f = jR({
      mutation: {
        onSuccess: () => {
          i({ currentPassword: "", newPassword: "", confirmPassword: "" }),
            a({ title: "Password changed successfully" });
        },
        onError: (y) =>
          a({
            title: "Error",
            description: y?.data?.error ?? "Current password is incorrect",
            variant: "destructive",
          }),
      },
    }),
    m =
      t?.fullName
        ?.split(" ")
        .map((y) => y[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() ?? "U",
    p = () => {
      if (s.newPassword !== s.confirmPassword) {
        a({ title: "Passwords do not match", variant: "destructive" });
        return;
      }
      if (s.newPassword.length < 6) {
        a({
          title: "Password too short",
          description: "At least 6 characters required",
          variant: "destructive",
        });
        return;
      }
      f.mutate({
        data: {
          currentPassword: s.currentPassword,
          newPassword: s.newPassword,
          confirmPassword: s.confirmPassword,
        },
      });
    };
  return u.jsxs("div", {
    className: "p-6 max-w-2xl mx-auto space-y-6",
    children: [
      u.jsxs("div", {
        children: [
          u.jsxs("h1", {
            className: "text-2xl font-bold flex items-center gap-2",
            children: [
              u.jsx(Yl, { className: "w-6 h-6 text-primary" }),
              " Profile",
            ],
          }),
          u.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Your account information",
          }),
        ],
      }),
      u.jsx(Cn, {
        className: "border-border",
        children: u.jsxs(En, {
          className: "p-6",
          children: [
            u.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                u.jsx(Wl, {
                  className: "w-16 h-16",
                  children: u.jsx(Jl, {
                    className:
                      "text-xl bg-primary/20 text-primary font-semibold",
                    children: m,
                  }),
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h2", {
                      className: "text-xl font-bold",
                      children: t?.fullName,
                    }),
                    u.jsxs("p", {
                      className: "text-muted-foreground text-sm",
                      children: ["@", t?.username],
                    }),
                    u.jsxs("div", {
                      className: "flex items-center gap-2 mt-2",
                      children: [
                        u.jsxs(ea, {
                          className: Ee(
                            "text-xs",
                            t?.role === "admin"
                              ? "bg-primary/20 text-primary border-primary/30"
                              : "bg-muted text-muted-foreground border-border"
                          ),
                          children: [
                            t?.role === "admin" &&
                              u.jsx(E0, { className: "w-3 h-3 mr-1" }),
                            t?.role,
                          ],
                        }),
                        u.jsx(ea, {
                          className:
                            "bg-green-500/20 text-green-400 border-green-500/30 text-xs",
                          children: t?.status,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsx(GS, { className: "my-4" }),
            u.jsxs("div", {
              className: "grid grid-cols-2 gap-3 text-sm",
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className: "text-muted-foreground text-xs",
                      children: "Email",
                    }),
                    u.jsx("p", {
                      className: "font-medium mt-0.5",
                      children: t?.email,
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("p", {
                      className: "text-muted-foreground text-xs",
                      children: "Member since",
                    }),
                    u.jsxs("p", {
                      className: "font-medium mt-0.5 flex items-center gap-1",
                      children: [
                        u.jsx(yi, { className: "w-3.5 h-3.5" }),
                        t?.createdAt
                          ? new Date(t.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                            })
                          : "Unknown",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsxs(Cn, {
        className: "border-border",
        children: [
          u.jsx(uu, {
            className: "pb-3",
            children: u.jsxs(du, {
              className: "text-base flex items-center gap-2",
              children: [
                u.jsx(px, { className: "w-4 h-4 text-primary" }),
                " Change Password",
              ],
            }),
          }),
          u.jsxs(En, {
            className: "space-y-4",
            children: [
              [
                {
                  field: "currentPassword",
                  label: "Current Password",
                  showKey: "current",
                },
                {
                  field: "newPassword",
                  label: "New Password",
                  showKey: "newPw",
                },
                {
                  field: "confirmPassword",
                  label: "Confirm New Password",
                  showKey: "confirm",
                },
              ].map(({ field: y, label: v, showKey: b }) =>
                u.jsxs(
                  "div",
                  {
                    className: "space-y-1.5",
                    children: [
                      u.jsx(gt, { children: v }),
                      u.jsxs("div", {
                        className: "relative",
                        children: [
                          u.jsx(ft, {
                            type: o[b] ? "text" : "password",
                            value: s[y],
                            onChange: (_) =>
                              i((N) => ({ ...N, [y]: _.target.value })),
                            placeholder: "••••••",
                            className: "pr-9",
                          }),
                          u.jsx("button", {
                            type: "button",
                            onClick: () => c((_) => ({ ..._, [b]: !_[b] })),
                            className:
                              "absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                            children: o[b]
                              ? u.jsx(Ul, { className: "w-4 h-4" })
                              : u.jsx(zl, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                    ],
                  },
                  y
                )
              ),
              u.jsxs(Me, {
                onClick: p,
                disabled:
                  !s.currentPassword ||
                  !s.newPassword ||
                  !s.confirmPassword ||
                  f.isPending,
                variant: "outline",
                className: "gap-1.5",
                children: [
                  u.jsx(px, { className: "w-4 h-4" }),
                  f.isPending ? "Changing..." : "Change Password",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function z3() {
  const { user: t } = ya(),
    a = t?.role === "admin",
    s = Va(),
    { toast: i } = Hn(),
    [o, c] = g.useState(""),
    [f, m] = g.useState(!1),
    [p, y] = g.useState({
      content: "",
      notes: "",
      logDate: new Date().toISOString().slice(0, 10),
    }),
    { data: v, isLoading: b } = VA(),
    _ = v?.data ?? [],
    N = KA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/learning-logs"] }),
            m(!1),
            y({
              content: "",
              notes: "",
              logDate: new Date().toISOString().slice(0, 10),
            }),
            i({ title: "Log created" });
        },
        onError: (C) =>
          i({
            title: "Error",
            description: C?.data?.error,
            variant: "destructive",
          }),
      },
    }),
    j = YA({
      mutation: {
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["/api/learning-logs"] }),
            i({ title: "Log deleted" });
        },
      },
    }),
    S = _.filter(
      (C) =>
        C.content?.toLowerCase().includes(o.toLowerCase()) ||
        C.notes?.toLowerCase().includes(o.toLowerCase())
    );
  return u.jsxs("div", {
    className: "p-6 max-w-4xl mx-auto space-y-5",
    children: [
      u.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          u.jsxs("div", {
            children: [
              u.jsxs("h1", {
                className: "text-2xl font-bold flex items-center gap-2",
                children: [
                  u.jsx(ri, { className: "w-6 h-6 text-primary" }),
                  " Learning Logs",
                ],
              }),
              u.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: a
                  ? "View all member learning logs"
                  : "Track your learning journey",
              }),
            ],
          }),
          !a &&
            u.jsxs(Me, {
              onClick: () => m(!0),
              className: "gap-1.5",
              children: [u.jsx(tu, { className: "w-4 h-4" }), " New Log"],
            }),
        ],
      }),
      u.jsxs("div", {
        className: "relative max-w-sm",
        children: [
          u.jsx(nu, {
            className:
              "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
          }),
          u.jsx(ft, {
            placeholder: "Search logs...",
            value: o,
            onChange: (C) => c(C.target.value),
            className: "pl-9",
          }),
        ],
      }),
      b
        ? u.jsx("div", {
            className: "space-y-3",
            children: [1, 2, 3].map((C) => u.jsx(ta, { className: "h-28" }, C)),
          })
        : S.length
        ? u.jsx("div", {
            className: "space-y-3",
            children: S.map((C) =>
              u.jsx(
                Cn,
                {
                  className:
                    "border-border hover:border-primary/30 transition-colors",
                  children: u.jsx(En, {
                    className: "p-4",
                    children: u.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        u.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            u.jsx("p", {
                              className: "text-sm font-medium line-clamp-3",
                              children: C.content,
                            }),
                            C.notes &&
                              u.jsx("p", {
                                className:
                                  "text-xs text-muted-foreground mt-1 line-clamp-2 italic",
                                children: C.notes,
                              }),
                            u.jsxs("div", {
                              className:
                                "flex items-center gap-3 mt-2 text-xs text-muted-foreground",
                              children: [
                                u.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    u.jsx(yi, { className: "w-3 h-3" }),
                                    new Date(
                                      C.logDate ?? C.createdAt
                                    ).toLocaleDateString(),
                                  ],
                                }),
                                C.streakDay > 0 &&
                                  u.jsxs("span", {
                                    className:
                                      "flex items-center gap-1 text-orange-400",
                                    children: [
                                      u.jsx(Jh, { className: "w-3 h-3" }),
                                      "Day ",
                                      C.streakDay,
                                    ],
                                  }),
                                a &&
                                  C.fullName &&
                                  u.jsxs("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      u.jsx(Yl, { className: "w-3 h-3" }),
                                      C.fullName,
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        !a &&
                          u.jsx(Me, {
                            size: "sm",
                            variant: "ghost",
                            className:
                              "h-7 w-7 p-0 text-destructive hover:text-destructive",
                            onClick: () => j.mutate({ id: C.id }),
                            children: u.jsx(au, { className: "w-3.5 h-3.5" }),
                          }),
                      ],
                    }),
                  }),
                },
                C.id
              )
            ),
          })
        : u.jsxs("div", {
            className: "text-center py-16 text-muted-foreground",
            children: [
              u.jsx(ri, { className: "w-10 h-10 mx-auto mb-3 opacity-20" }),
              u.jsx("p", {
                className: "text-sm",
                children: "No learning logs yet",
              }),
            ],
          }),
      u.jsx(ha, {
        open: f,
        onOpenChange: m,
        children: u.jsxs(In, {
          children: [
            u.jsx($n, {
              children: u.jsx(Xn, { children: "New Learning Log" }),
            }),
            u.jsxs("div", {
              className: "space-y-3",
              children: [
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Date" }),
                    u.jsx(ft, {
                      type: "date",
                      value: p.logDate,
                      onChange: (C) =>
                        y((A) => ({ ...A, logDate: C.target.value })),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsxs(gt, {
                      children: [
                        "What did you learn? ",
                        u.jsx("span", {
                          className: "text-destructive",
                          children: "*",
                        }),
                      ],
                    }),
                    u.jsx(rr, {
                      value: p.content,
                      onChange: (C) =>
                        y((A) => ({ ...A, content: C.target.value })),
                      placeholder: "Describe what you learned today...",
                      rows: 5,
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    u.jsx(gt, { children: "Notes (optional)" }),
                    u.jsx(rr, {
                      value: p.notes,
                      onChange: (C) =>
                        y((A) => ({ ...A, notes: C.target.value })),
                      placeholder: "Additional notes...",
                      rows: 2,
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs(ma, {
              children: [
                u.jsx(Me, {
                  variant: "outline",
                  onClick: () => m(!1),
                  children: "Cancel",
                }),
                u.jsx(Me, {
                  onClick: () =>
                    N.mutate({
                      data: {
                        content: p.content,
                        notes: p.notes || void 0,
                        logDate: p.logDate,
                      },
                    }),
                  disabled: !p.content.trim() || N.isPending,
                  children: "Save Log",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function _b({ onClose: t }) {
  const [a] = Xc(),
    { user: s, logout: i } = ya(),
    { theme: o, toggleTheme: c } = $k(),
    { data: f } = k1(),
    { data: m } = M1(),
    p = f?.unreadCount ?? 0,
    y = m?.length ?? 0,
    b = [
      { label: "Dashboard", path: "/dashboard", icon: Wj },
      { label: "Courses", path: "/courses", icon: Ll },
      { label: "Tasks", path: "/tasks", icon: Pl },
      { label: "Excuses", path: "/excuses", icon: ii },
      { label: "Learning Logs", path: "/learning-logs", icon: ri },
      { label: "Members", path: "/members", icon: kc, adminOnly: !0 },
      {
        label: "Approvals",
        path: "/approvals",
        icon: N0,
        adminOnly: !0,
        badge: y,
      },
      { label: "Notifications", path: "/notifications", icon: Ih, badge: p },
      { label: "Profile", path: "/profile", icon: Yl },
    ].filter((N) => !N.adminOnly || s?.role === "admin"),
    _ =
      s?.fullName
        ?.split(" ")
        .map((N) => N[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() ?? "U";
  return u.jsxs("div", {
    className: "flex flex-col h-full bg-sidebar text-sidebar-foreground",
    children: [
      u.jsxs("div", {
        className:
          "flex items-center justify-between px-4 py-5 border-b border-sidebar-border",
        children: [
          u.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [
              u.jsx("div", {
                className:
                  "w-8 h-8 rounded-lg bg-primary flex items-center justify-center",
                children: u.jsx("span", {
                  className: "text-white font-bold text-sm",
                  children: "IQ",
                }),
              }),
              u.jsx("span", {
                className: "font-semibold text-white tracking-tight",
                children: "IT-qan",
              }),
              s?.role === "admin" &&
                u.jsx(ea, {
                  className:
                    "text-[10px] px-1.5 py-0 bg-primary/20 text-primary border-primary/30 hover:bg-primary/20",
                  children: "Admin",
                }),
            ],
          }),
          t &&
            u.jsx("button", {
              onClick: t,
              className:
                "text-sidebar-foreground/60 hover:text-sidebar-foreground lg:hidden",
              children: u.jsx(nm, { className: "w-5 h-5" }),
            }),
        ],
      }),
      u.jsx("nav", {
        className:
          "flex-1 overflow-y-auto sidebar-scroll px-3 py-4 space-y-0.5",
        children: b.map((N) => {
          const j = N.icon,
            S = a === N.path;
          return u.jsx(
            Rl,
            {
              href: N.path,
              onClick: t,
              children: u.jsxs("div", {
                "data-testid": `nav-${N.path.slice(1)}`,
                className: Ee(
                  "flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer transition-all duration-150",
                  S
                    ? "bg-sidebar-accent text-white"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                ),
                children: [
                  u.jsxs("div", {
                    className: "flex items-center gap-2.5",
                    children: [
                      u.jsx(j, {
                        className: Ee(
                          "w-4 h-4 flex-shrink-0",
                          S ? "text-primary" : ""
                        ),
                      }),
                      u.jsx("span", { children: N.label }),
                    ],
                  }),
                  N.badge
                    ? u.jsx(ea, {
                        className:
                          "text-[10px] px-1.5 py-0 min-w-[18px] justify-center bg-primary text-white border-0",
                        children: N.badge > 99 ? "99+" : N.badge,
                      })
                    : S
                    ? u.jsx(kj, { className: "w-3.5 h-3.5 text-primary/70" })
                    : null,
                ],
              }),
            },
            N.path
          );
        }),
      }),
      u.jsxs("div", {
        className: "px-3 pb-4 space-y-1 border-t border-sidebar-border pt-3",
        children: [
          u.jsxs("button", {
            onClick: c,
            className:
              "flex items-center gap-2.5 w-full px-3 py-2 rounded-md text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors",
            children: [
              o === "dark"
                ? u.jsx(pT, { className: "w-4 h-4" })
                : u.jsx(lT, { className: "w-4 h-4" }),
              u.jsx("span", {
                children: o === "dark" ? "Light Mode" : "Dark Mode",
              }),
            ],
          }),
          u.jsxs("button", {
            onClick: i,
            "data-testid": "button-logout",
            className:
              "flex items-center gap-2.5 w-full px-3 py-2 rounded-md text-sm text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10 transition-colors",
            children: [
              u.jsx(tT, { className: "w-4 h-4" }),
              u.jsx("span", { children: "Log Out" }),
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className: "px-3 pb-3",
        children: u.jsxs("div", {
          className:
            "flex items-center gap-2.5 px-3 py-2.5 rounded-md bg-sidebar-accent/30",
          children: [
            u.jsx(Wl, {
              className: "w-7 h-7",
              children: u.jsx(Jl, {
                className: "text-[11px] bg-primary text-white",
                children: _,
              }),
            }),
            u.jsxs("div", {
              className: "min-w-0",
              children: [
                u.jsx("p", {
                  className:
                    "text-xs font-medium text-sidebar-foreground truncate",
                  children: s?.fullName,
                }),
                u.jsxs("p", {
                  className: "text-[10px] text-sidebar-foreground/50 truncate",
                  children: ["@", s?.username],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function q3({ children: t }) {
  const [a, s] = g.useState(!1);
  return u.jsxs("div", {
    className: "flex h-screen bg-background overflow-hidden",
    children: [
      u.jsx("aside", {
        className: "hidden lg:flex w-56 flex-shrink-0 flex-col",
        children: u.jsx(_b, {}),
      }),
      a &&
        u.jsxs("div", {
          className: "lg:hidden fixed inset-0 z-50 flex",
          children: [
            u.jsx("div", {
              className: "fixed inset-0 bg-black/60",
              onClick: () => s(!1),
            }),
            u.jsx("div", {
              className: "relative w-56 flex-shrink-0",
              children: u.jsx(_b, { onClose: () => s(!1) }),
            }),
          ],
        }),
      u.jsxs("main", {
        className: "flex-1 flex flex-col min-w-0 overflow-hidden",
        children: [
          u.jsxs("div", {
            className:
              "lg:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-card",
            children: [
              u.jsx("button", {
                onClick: () => s(!0),
                children: u.jsx(rT, { className: "w-5 h-5" }),
              }),
              u.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  u.jsx("div", {
                    className:
                      "w-6 h-6 rounded-md bg-primary flex items-center justify-center",
                    children: u.jsx("span", {
                      className: "text-white font-bold text-xs",
                      children: "IQ",
                    }),
                  }),
                  u.jsx("span", {
                    className: "font-semibold text-sm",
                    children: "IT-qan",
                  }),
                ],
              }),
              u.jsx("div", { className: "w-5" }),
            ],
          }),
          u.jsx("div", { className: "flex-1 overflow-y-auto", children: t }),
        ],
      }),
    ],
  });
}
const P3 = new rE({
  defaultOptions: { queries: { retry: 1, staleTime: 3e4 } },
});
function Da({ component: t, adminOnly: a = !1 }) {
  const { user: s, token: i } = ya();
  return !i || !s
    ? u.jsx(Oc, { to: "/login" })
    : a && s.role !== "admin"
    ? u.jsx(Oc, { to: "/dashboard" })
    : u.jsx(q3, { children: u.jsx(t, {}) });
}
function ah({ component: t }) {
  const { token: a, user: s } = ya();
  return a && s ? u.jsx(Oc, { to: "/dashboard" }) : u.jsx(t, {});
}
function V3() {
  return u.jsxs(MC, {
    children: [
      u.jsx(on, { path: "/", children: () => u.jsx(Oc, { to: "/login" }) }),
      u.jsx(on, {
        path: "/login",
        children: () => u.jsx(ah, { component: c4 }),
      }),
      u.jsx(on, {
        path: "/register",
        children: () => u.jsx(ah, { component: UD }),
      }),
      u.jsx(on, {
        path: "/forgot-password",
        children: () => u.jsx(ah, { component: qD }),
      }),
      u.jsx(on, {
        path: "/dashboard",
        children: () => u.jsx(Da, { component: VD }),
      }),
      u.jsx(on, {
        path: "/courses",
        children: () => u.jsx(Da, { component: u3 }),
      }),
      u.jsx(on, {
        path: "/tasks",
        children: () => u.jsx(Da, { component: y3 }),
      }),
      u.jsx(on, {
        path: "/excuses",
        children: () => u.jsx(Da, { component: x3 }),
      }),
      u.jsx(on, {
        path: "/learning-logs",
        children: () => u.jsx(Da, { component: z3 }),
      }),
      u.jsx(on, {
        path: "/members",
        children: () => u.jsx(Da, { component: T3, adminOnly: !0 }),
      }),
      u.jsx(on, {
        path: "/approvals",
        children: () => u.jsx(Da, { component: O3, adminOnly: !0 }),
      }),
      u.jsx(on, {
        path: "/notifications",
        children: () => u.jsx(Da, { component: k3 }),
      }),
      u.jsx(on, {
        path: "/profile",
        children: () => u.jsx(Da, { component: U3 }),
      }),
      u.jsx(on, { component: Jk }),
    ],
  });
}
function H3() {
  return u.jsx(iE, {
    client: P3,
    children: u.jsx(Ik, {
      children: u.jsx(Yk, {
        children: u.jsxs($O, {
          children: [
            u.jsx(Lb, {
              base: "/".replace(/\/$/, ""),
              children: u.jsx(V3, {}),
            }),
            u.jsx(y2, {}),
          ],
        }),
      }),
    }),
  });
}
mC.createRoot(document.getElementById("root")).render(u.jsx(H3, {}));
