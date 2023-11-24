(function (G, ke) {
  typeof exports == "object" && typeof module < "u"
    ? ke(exports)
    : typeof define == "function" && define.amd
    ? define(["exports"], ke)
    : ((G = typeof globalThis < "u" ? globalThis : G || self), ke((G["Flowbite Mithril"] = {})));
})(this, function (G) {
  "use strict";
  var ke =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function ao(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var rr, un;
  function Le() {
    if (un) return rr;
    un = 1;
    function t(e, r, n, i, o, a) {
      return {
        tag: e,
        key: r,
        attrs: n,
        children: i,
        text: o,
        dom: a,
        domSize: void 0,
        state: void 0,
        events: void 0,
        instance: void 0,
      };
    }
    return (
      (t.normalize = function (e) {
        return Array.isArray(e)
          ? t("[", void 0, void 0, t.normalizeChildren(e), void 0, void 0)
          : e == null || typeof e == "boolean"
          ? null
          : typeof e == "object"
          ? e
          : t("#", void 0, void 0, String(e), void 0, void 0);
      }),
      (t.normalizeChildren = function (e) {
        var r = [];
        if (e.length) {
          for (var n = e[0] != null && e[0].key != null, i = 1; i < e.length; i++)
            if ((e[i] != null && e[i].key != null) !== n)
              throw new TypeError(
                n && (e[i] != null || typeof e[i] == "boolean")
                  ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole."
                  : "In fragments, vnodes must either all have keys or none have keys.",
              );
          for (var i = 0; i < e.length; i++) r[i] = t.normalize(e[i]);
        }
        return r;
      }),
      (rr = t),
      rr
    );
  }
  var so = Le(),
    fn = function () {
      var t = arguments[this],
        e = this + 1,
        r;
      if (
        (t == null ? (t = {}) : (typeof t != "object" || t.tag != null || Array.isArray(t)) && ((t = {}), (e = this)),
        arguments.length === e + 1)
      )
        (r = arguments[e]), Array.isArray(r) || (r = [r]);
      else for (r = []; e < arguments.length; ) r.push(arguments[e++]);
      return so("", t.key, t, r);
    },
    Tt = {}.hasOwnProperty,
    lo = Le(),
    co = fn,
    Ye = Tt,
    uo = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
    pn = {};
  function gn(t) {
    for (var e in t) if (Ye.call(t, e)) return !1;
    return !0;
  }
  function fo(t) {
    for (var e, r = "div", n = [], i = {}; (e = uo.exec(t)); ) {
      var o = e[1],
        a = e[2];
      if (o === "" && a !== "") r = a;
      else if (o === "#") i.id = a;
      else if (o === ".") n.push(a);
      else if (e[3][0] === "[") {
        var s = e[6];
        s && (s = s.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")),
          e[4] === "class" ? n.push(s) : (i[e[4]] = s === "" ? s : s || !0);
      }
    }
    return n.length > 0 && (i.className = n.join(" ")), (pn[t] = { tag: r, attrs: i });
  }
  function po(t, e) {
    var r = e.attrs,
      n = Ye.call(r, "class"),
      i = n ? r.class : r.className;
    if (((e.tag = t.tag), (e.attrs = {}), !gn(t.attrs) && !gn(r))) {
      var o = {};
      for (var a in r) Ye.call(r, a) && (o[a] = r[a]);
      r = o;
    }
    for (var a in t.attrs) Ye.call(t.attrs, a) && a !== "className" && !Ye.call(r, a) && (r[a] = t.attrs[a]);
    (i != null || t.attrs.className != null) &&
      (r.className =
        i != null
          ? t.attrs.className != null
            ? String(t.attrs.className) + " " + String(i)
            : i
          : t.attrs.className != null
          ? t.attrs.className
          : null),
      n && (r.class = null);
    for (var a in r)
      if (Ye.call(r, a) && a !== "key") {
        e.attrs = r;
        break;
      }
    return e;
  }
  function go(t) {
    if (t == null || (typeof t != "string" && typeof t != "function" && typeof t.view != "function"))
      throw Error("The selector must be either a string or a component.");
    var e = co.apply(1, arguments);
    return typeof t == "string" && ((e.children = lo.normalizeChildren(e.children)), t !== "[")
      ? po(pn[t] || fo(t), e)
      : ((e.tag = t), e);
  }
  var hn = go,
    ho = Le(),
    bo = function (t) {
      return t == null && (t = ""), ho("<", void 0, void 0, t, void 0, void 0);
    },
    mo = Le(),
    vo = fn,
    yo = function () {
      var t = vo.apply(0, arguments);
      return (t.tag = "["), (t.children = mo.normalizeChildren(t.children)), t;
    },
    nr = hn;
  (nr.trust = bo), (nr.fragment = yo);
  var wo = nr,
    Lt = { exports: {} },
    ir,
    bn;
  function mn() {
    if (bn) return ir;
    bn = 1;
    var t = function (e) {
      if (!(this instanceof t)) throw new Error("Promise must be called with 'new'.");
      if (typeof e != "function") throw new TypeError("executor must be a function.");
      var r = this,
        n = [],
        i = [],
        o = p(n, !0),
        a = p(i, !1),
        s = (r._instance = { resolvers: n, rejectors: i }),
        c = typeof setImmediate == "function" ? setImmediate : setTimeout;
      function p(g, v) {
        return function w(k) {
          var b;
          try {
            if (
              v &&
              k != null &&
              (typeof k == "object" || typeof k == "function") &&
              typeof (b = k.then) == "function"
            ) {
              if (k === r) throw new TypeError("Promise can't be resolved with itself.");
              f(b.bind(k));
            } else
              c(function () {
                !v && g.length === 0 && console.error("Possible unhandled promise rejection:", k);
                for (var x = 0; x < g.length; x++) g[x](k);
                (n.length = 0),
                  (i.length = 0),
                  (s.state = v),
                  (s.retry = function () {
                    w(k);
                  });
              });
          } catch (x) {
            a(x);
          }
        };
      }
      function f(g) {
        var v = 0;
        function w(b) {
          return function (x) {
            v++ > 0 || b(x);
          };
        }
        var k = w(a);
        try {
          g(w(o), k);
        } catch (b) {
          k(b);
        }
      }
      f(e);
    };
    return (
      (t.prototype.then = function (e, r) {
        var n = this,
          i = n._instance;
        function o(p, f, g, v) {
          f.push(function (w) {
            if (typeof p != "function") g(w);
            else
              try {
                a(p(w));
              } catch (k) {
                s && s(k);
              }
          }),
            typeof i.retry == "function" && v === i.state && i.retry();
        }
        var a,
          s,
          c = new t(function (p, f) {
            (a = p), (s = f);
          });
        return o(e, i.resolvers, a, !0), o(r, i.rejectors, s, !1), c;
      }),
      (t.prototype.catch = function (e) {
        return this.then(null, e);
      }),
      (t.prototype.finally = function (e) {
        return this.then(
          function (r) {
            return t.resolve(e()).then(function () {
              return r;
            });
          },
          function (r) {
            return t.resolve(e()).then(function () {
              return t.reject(r);
            });
          },
        );
      }),
      (t.resolve = function (e) {
        return e instanceof t
          ? e
          : new t(function (r) {
              r(e);
            });
      }),
      (t.reject = function (e) {
        return new t(function (r, n) {
          n(e);
        });
      }),
      (t.all = function (e) {
        return new t(function (r, n) {
          var i = e.length,
            o = 0,
            a = [];
          if (e.length === 0) r([]);
          else
            for (var s = 0; s < e.length; s++)
              (function (c) {
                function p(f) {
                  o++, (a[c] = f), o === i && r(a);
                }
                e[c] != null && (typeof e[c] == "object" || typeof e[c] == "function") && typeof e[c].then == "function"
                  ? e[c].then(p, n)
                  : p(e[c]);
              })(s);
        });
      }),
      (t.race = function (e) {
        return new t(function (r, n) {
          for (var i = 0; i < e.length; i++) e[i].then(r, n);
        });
      }),
      (ir = t),
      ir
    );
  }
  var st = mn();
  typeof window < "u"
    ? (typeof window.Promise > "u"
        ? (window.Promise = st)
        : window.Promise.prototype.finally || (window.Promise.prototype.finally = st.prototype.finally),
      (Lt.exports = window.Promise))
    : typeof ke < "u"
    ? (typeof ke.Promise > "u"
        ? (ke.Promise = st)
        : ke.Promise.prototype.finally || (ke.Promise.prototype.finally = st.prototype.finally),
      (Lt.exports = ke.Promise))
    : (Lt.exports = st);
  var vn = Lt.exports,
    or,
    yn;
  function xo() {
    if (yn) return or;
    yn = 1;
    var t = Le();
    return (
      (or = function (e) {
        var r = e && e.document,
          n,
          i = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" };
        function o(d) {
          return (d.attrs && d.attrs.xmlns) || i[d.tag];
        }
        function a(d, l) {
          if (d.state !== l) throw new Error("'vnode.state' must not be modified.");
        }
        function s(d) {
          var l = d.state;
          try {
            return this.apply(l, arguments);
          } finally {
            a(d, l);
          }
        }
        function c() {
          try {
            return r.activeElement;
          } catch {
            return null;
          }
        }
        function p(d, l, u, m, y, E, N) {
          for (var W = u; W < m; W++) {
            var T = l[W];
            T != null && f(d, T, y, N, E);
          }
        }
        function f(d, l, u, m, y) {
          var E = l.tag;
          if (typeof E == "string")
            switch (((l.state = {}), l.attrs != null && it(l.attrs, l, u), E)) {
              case "#":
                g(d, l, y);
                break;
              case "<":
                w(d, l, m, y);
                break;
              case "[":
                k(d, l, u, m, y);
                break;
              default:
                b(d, l, u, m, y);
            }
          else A(d, l, u, m, y);
        }
        function g(d, l, u) {
          (l.dom = r.createTextNode(l.children)), B(d, l.dom, u);
        }
        var v = {
          caption: "table",
          thead: "table",
          tbody: "table",
          tfoot: "table",
          tr: "tbody",
          th: "tr",
          td: "tr",
          colgroup: "table",
          col: "colgroup",
        };
        function w(d, l, u, m) {
          var y = l.children.match(/^\s*?<(\w+)/im) || [],
            E = r.createElement(v[y[1]] || "div");
          u === "http://www.w3.org/2000/svg"
            ? ((E.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + l.children + "</svg>"), (E = E.firstChild))
            : (E.innerHTML = l.children),
            (l.dom = E.firstChild),
            (l.domSize = E.childNodes.length),
            (l.instance = []);
          for (var N = r.createDocumentFragment(), W; (W = E.firstChild); ) l.instance.push(W), N.appendChild(W);
          B(d, N, m);
        }
        function k(d, l, u, m, y) {
          var E = r.createDocumentFragment();
          if (l.children != null) {
            var N = l.children;
            p(E, N, 0, N.length, u, null, m);
          }
          (l.dom = E.firstChild), (l.domSize = E.childNodes.length), B(d, E, y);
        }
        function b(d, l, u, m, y) {
          var E = l.tag,
            N = l.attrs,
            W = N && N.is;
          m = o(l) || m;
          var T = m
            ? W
              ? r.createElementNS(m, E, { is: W })
              : r.createElementNS(m, E)
            : W
            ? r.createElement(E, { is: W })
            : r.createElement(E);
          if (((l.dom = T), N != null && se(l, N, m), B(d, T, y), !S(l) && l.children != null)) {
            var Z = l.children;
            p(T, Z, 0, Z.length, u, null, m), l.tag === "select" && N != null && Ie(l, N);
          }
        }
        function x(d, l) {
          var u;
          if (typeof d.tag.view == "function") {
            if (((d.state = Object.create(d.tag)), (u = d.state.view), u.$$reentrantLock$$ != null)) return;
            u.$$reentrantLock$$ = !0;
          } else {
            if (((d.state = void 0), (u = d.tag), u.$$reentrantLock$$ != null)) return;
            (u.$$reentrantLock$$ = !0),
              (d.state =
                d.tag.prototype != null && typeof d.tag.prototype.view == "function" ? new d.tag(d) : d.tag(d));
          }
          if (
            (it(d.state, d, l),
            d.attrs != null && it(d.attrs, d, l),
            (d.instance = t.normalize(s.call(d.state.view, d))),
            d.instance === d)
          )
            throw Error("A view cannot return the vnode it received as argument");
          u.$$reentrantLock$$ = null;
        }
        function A(d, l, u, m, y) {
          x(l, u),
            l.instance != null
              ? (f(d, l.instance, u, m, y),
                (l.dom = l.instance.dom),
                (l.domSize = l.dom != null ? l.instance.domSize : 0))
              : (l.domSize = 0);
        }
        function _(d, l, u, m, y, E) {
          if (!(l === u || (l == null && u == null)))
            if (l == null || l.length === 0) p(d, u, 0, u.length, m, y, E);
            else if (u == null || u.length === 0) F(d, l, 0, l.length);
            else {
              var N = l[0] != null && l[0].key != null,
                W = u[0] != null && u[0].key != null,
                T = 0,
                Z = 0;
              if (!N) for (; Z < l.length && l[Z] == null; ) Z++;
              if (!W) for (; T < u.length && u[T] == null; ) T++;
              if (N !== W) F(d, l, Z, l.length), p(d, u, T, u.length, m, y, E);
              else if (W) {
                for (
                  var ue = l.length - 1, ce = u.length - 1, tr, fe, ae, de, ne, an;
                  ue >= Z && ce >= T && ((de = l[ue]), (ne = u[ce]), de.key === ne.key);
                )
                  de !== ne && j(d, de, ne, m, y, E), ne.dom != null && (y = ne.dom), ue--, ce--;
                for (; ue >= Z && ce >= T && ((fe = l[Z]), (ae = u[T]), fe.key === ae.key); )
                  Z++, T++, fe !== ae && j(d, fe, ae, m, C(l, Z, y), E);
                for (; ue >= Z && ce >= T && !(T === ce || fe.key !== ne.key || de.key !== ae.key); )
                  (an = C(l, Z, y)),
                    $(d, de, an),
                    de !== ae && j(d, de, ae, m, an, E),
                    ++T <= --ce && $(d, fe, y),
                    fe !== ne && j(d, fe, ne, m, y, E),
                    ne.dom != null && (y = ne.dom),
                    Z++,
                    ue--,
                    (de = l[ue]),
                    (ne = u[ce]),
                    (fe = l[Z]),
                    (ae = u[T]);
                for (; ue >= Z && ce >= T && de.key === ne.key; )
                  de !== ne && j(d, de, ne, m, y, E),
                    ne.dom != null && (y = ne.dom),
                    ue--,
                    ce--,
                    (de = l[ue]),
                    (ne = u[ce]);
                if (T > ce) F(d, l, Z, ue + 1);
                else if (Z > ue) p(d, u, T, ce + 1, m, y, E);
                else {
                  var ec = y,
                    oo = ce - T + 1,
                    At = new Array(oo),
                    sn = 0,
                    oe = 0,
                    ln = 2147483647,
                    cn = 0,
                    tr,
                    dn;
                  for (oe = 0; oe < oo; oe++) At[oe] = -1;
                  for (oe = ce; oe >= T; oe--) {
                    tr == null && (tr = J(l, Z, ue + 1)), (ne = u[oe]);
                    var at = tr[ne.key];
                    at != null &&
                      ((ln = at < ln ? at : -1),
                      (At[oe - T] = at),
                      (de = l[at]),
                      (l[at] = null),
                      de !== ne && j(d, de, ne, m, y, E),
                      ne.dom != null && (y = ne.dom),
                      cn++);
                  }
                  if (((y = ec), cn !== ue - Z + 1 && F(d, l, Z, ue + 1), cn === 0)) p(d, u, T, ce + 1, m, y, E);
                  else if (ln === -1)
                    for (dn = U(At), sn = dn.length - 1, oe = ce; oe >= T; oe--)
                      (ae = u[oe]),
                        At[oe - T] === -1 ? f(d, ae, m, E, y) : dn[sn] === oe - T ? sn-- : $(d, ae, y),
                        ae.dom != null && (y = u[oe].dom);
                  else
                    for (oe = ce; oe >= T; oe--)
                      (ae = u[oe]), At[oe - T] === -1 && f(d, ae, m, E, y), ae.dom != null && (y = u[oe].dom);
                }
              } else {
                var on = l.length < u.length ? l.length : u.length;
                for (T = T < Z ? T : Z; T < on; T++)
                  (fe = l[T]),
                    (ae = u[T]),
                    !(fe === ae || (fe == null && ae == null)) &&
                      (fe == null
                        ? f(d, ae, m, E, C(l, T + 1, y))
                        : ae == null
                        ? Y(d, fe)
                        : j(d, fe, ae, m, C(l, T + 1, y), E));
                l.length > on && F(d, l, T, l.length), u.length > on && p(d, u, T, u.length, m, y, E);
              }
            }
        }
        function j(d, l, u, m, y, E) {
          var N = l.tag,
            W = u.tag;
          if (N === W) {
            if (((u.state = l.state), (u.events = l.events), nn(u, l))) return;
            if (typeof N == "string")
              switch ((u.attrs != null && ot(u.attrs, u, m), N)) {
                case "#":
                  P(l, u);
                  break;
                case "<":
                  R(d, l, u, E, y);
                  break;
                case "[":
                  z(d, l, u, m, y, E);
                  break;
                default:
                  D(l, u, m, E);
              }
            else V(d, l, u, m, y, E);
          } else Y(d, l), f(d, u, m, E, y);
        }
        function P(d, l) {
          d.children.toString() !== l.children.toString() && (d.dom.nodeValue = l.children), (l.dom = d.dom);
        }
        function R(d, l, u, m, y) {
          l.children !== u.children
            ? (M(d, l), w(d, u, m, y))
            : ((u.dom = l.dom), (u.domSize = l.domSize), (u.instance = l.instance));
        }
        function z(d, l, u, m, y, E) {
          _(d, l.children, u.children, m, y, E);
          var N = 0,
            W = u.children;
          if (((u.dom = null), W != null)) {
            for (var T = 0; T < W.length; T++) {
              var Z = W[T];
              Z != null && Z.dom != null && (u.dom == null && (u.dom = Z.dom), (N += Z.domSize || 1));
            }
            N !== 1 && (u.domSize = N);
          }
        }
        function D(d, l, u, m) {
          var y = (l.dom = d.dom);
          (m = o(l) || m),
            l.tag === "textarea" && l.attrs == null && (l.attrs = {}),
            Ke(l, d.attrs, l.attrs, m),
            S(l) || _(y, d.children, l.children, u, null, m);
        }
        function V(d, l, u, m, y, E) {
          if (((u.instance = t.normalize(s.call(u.state.view, u))), u.instance === u))
            throw Error("A view cannot return the vnode it received as argument");
          ot(u.state, u, m),
            u.attrs != null && ot(u.attrs, u, m),
            u.instance != null
              ? (l.instance == null ? f(d, u.instance, m, E, y) : j(d, l.instance, u.instance, m, y, E),
                (u.dom = u.instance.dom),
                (u.domSize = u.instance.domSize))
              : l.instance != null
              ? (Y(d, l.instance), (u.dom = void 0), (u.domSize = 0))
              : ((u.dom = l.dom), (u.domSize = l.domSize));
        }
        function J(d, l, u) {
          for (var m = Object.create(null); l < u; l++) {
            var y = d[l];
            if (y != null) {
              var E = y.key;
              E != null && (m[E] = l);
            }
          }
          return m;
        }
        var H = [];
        function U(d) {
          for (var l = [0], u = 0, m = 0, y = 0, E = (H.length = d.length), y = 0; y < E; y++) H[y] = d[y];
          for (var y = 0; y < E; ++y)
            if (d[y] !== -1) {
              var N = l[l.length - 1];
              if (d[N] < d[y]) {
                (H[y] = N), l.push(y);
                continue;
              }
              for (u = 0, m = l.length - 1; u < m; ) {
                var W = (u >>> 1) + (m >>> 1) + (u & m & 1);
                d[l[W]] < d[y] ? (u = W + 1) : (m = W);
              }
              d[y] < d[l[u]] && (u > 0 && (H[y] = l[u - 1]), (l[u] = y));
            }
          for (u = l.length, m = l[u - 1]; u-- > 0; ) (l[u] = m), (m = H[m]);
          return (H.length = 0), l;
        }
        function C(d, l, u) {
          for (; l < d.length; l++) if (d[l] != null && d[l].dom != null) return d[l].dom;
          return u;
        }
        function $(d, l, u) {
          var m = r.createDocumentFragment();
          L(d, m, l), B(d, m, u);
        }
        function L(d, l, u) {
          for (; u.dom != null && u.dom.parentNode === d; ) {
            if (typeof u.tag != "string") {
              if (((u = u.instance), u != null)) continue;
            } else if (u.tag === "<") for (var m = 0; m < u.instance.length; m++) l.appendChild(u.instance[m]);
            else if (u.tag !== "[") l.appendChild(u.dom);
            else if (u.children.length === 1) {
              if (((u = u.children[0]), u != null)) continue;
            } else
              for (var m = 0; m < u.children.length; m++) {
                var y = u.children[m];
                y != null && L(d, l, y);
              }
            break;
          }
        }
        function B(d, l, u) {
          u != null ? d.insertBefore(l, u) : d.appendChild(l);
        }
        function S(d) {
          if (d.attrs == null || (d.attrs.contenteditable == null && d.attrs.contentEditable == null)) return !1;
          var l = d.children;
          if (l != null && l.length === 1 && l[0].tag === "<") {
            var u = l[0].children;
            d.dom.innerHTML !== u && (d.dom.innerHTML = u);
          } else if (l != null && l.length !== 0) throw new Error("Child node of a contenteditable must be trusted.");
          return !0;
        }
        function F(d, l, u, m) {
          for (var y = u; y < m; y++) {
            var E = l[y];
            E != null && Y(d, E);
          }
        }
        function Y(d, l) {
          var u = 0,
            m = l.state,
            y,
            E;
          if (typeof l.tag != "string" && typeof l.state.onbeforeremove == "function") {
            var N = s.call(l.state.onbeforeremove, l);
            N != null && typeof N.then == "function" && ((u = 1), (y = N));
          }
          if (l.attrs && typeof l.attrs.onbeforeremove == "function") {
            var N = s.call(l.attrs.onbeforeremove, l);
            N != null && typeof N.then == "function" && ((u |= 2), (E = N));
          }
          if ((a(l, m), !u)) ie(l), ee(d, l);
          else {
            if (y != null) {
              var W = function () {
                u & 1 && ((u &= 2), u || T());
              };
              y.then(W, W);
            }
            if (E != null) {
              var W = function () {
                u & 2 && ((u &= 1), u || T());
              };
              E.then(W, W);
            }
          }
          function T() {
            a(l, m), ie(l), ee(d, l);
          }
        }
        function M(d, l) {
          for (var u = 0; u < l.instance.length; u++) d.removeChild(l.instance[u]);
        }
        function ee(d, l) {
          for (; l.dom != null && l.dom.parentNode === d; ) {
            if (typeof l.tag != "string") {
              if (((l = l.instance), l != null)) continue;
            } else if (l.tag === "<") M(d, l);
            else {
              if (l.tag !== "[" && (d.removeChild(l.dom), !Array.isArray(l.children))) break;
              if (l.children.length === 1) {
                if (((l = l.children[0]), l != null)) continue;
              } else
                for (var u = 0; u < l.children.length; u++) {
                  var m = l.children[u];
                  m != null && ee(d, m);
                }
            }
            break;
          }
        }
        function ie(d) {
          if (
            (typeof d.tag != "string" && typeof d.state.onremove == "function" && s.call(d.state.onremove, d),
            d.attrs && typeof d.attrs.onremove == "function" && s.call(d.attrs.onremove, d),
            typeof d.tag != "string")
          )
            d.instance != null && ie(d.instance);
          else {
            var l = d.children;
            if (Array.isArray(l))
              for (var u = 0; u < l.length; u++) {
                var m = l[u];
                m != null && ie(m);
              }
          }
        }
        function se(d, l, u) {
          d.tag === "input" && l.type != null && d.dom.setAttribute("type", l.type);
          var m = l != null && d.tag === "input" && l.type === "file";
          for (var y in l) Q(d, y, null, l[y], u, m);
        }
        function Q(d, l, u, m, y, E) {
          if (
            !(
              l === "key" ||
              l === "is" ||
              m == null ||
              Ce(l) ||
              (u === m && !rt(d, l) && typeof m != "object") ||
              (l === "type" && d.tag === "input")
            )
          ) {
            if (l[0] === "o" && l[1] === "n") return er(d, l, m);
            if (l.slice(0, 6) === "xlink:") d.dom.setAttributeNS("http://www.w3.org/1999/xlink", l.slice(6), m);
            else if (l === "style") It(d.dom, u, m);
            else if (nt(d, l, y)) {
              if (l === "value") {
                if (
                  ((d.tag === "input" || d.tag === "textarea") && d.dom.value === "" + m && (E || d.dom === c())) ||
                  (d.tag === "select" && u !== null && d.dom.value === "" + m) ||
                  (d.tag === "option" && u !== null && d.dom.value === "" + m)
                )
                  return;
                if (E && "" + m != "") {
                  console.error("`value` is read-only on file inputs!");
                  return;
                }
              }
              d.dom[l] = m;
            } else
              typeof m == "boolean"
                ? m
                  ? d.dom.setAttribute(l, "")
                  : d.dom.removeAttribute(l)
                : d.dom.setAttribute(l === "className" ? "class" : l, m);
          }
        }
        function he(d, l, u, m) {
          if (!(l === "key" || l === "is" || u == null || Ce(l)))
            if (l[0] === "o" && l[1] === "n") er(d, l, void 0);
            else if (l === "style") It(d.dom, u, null);
            else if (
              nt(d, l, m) &&
              l !== "className" &&
              l !== "title" &&
              !(
                l === "value" &&
                (d.tag === "option" || (d.tag === "select" && d.dom.selectedIndex === -1 && d.dom === c()))
              ) &&
              !(d.tag === "input" && l === "type")
            )
              d.dom[l] = null;
            else {
              var y = l.indexOf(":");
              y !== -1 && (l = l.slice(y + 1)), u !== !1 && d.dom.removeAttribute(l === "className" ? "class" : l);
            }
        }
        function Ie(d, l) {
          if ("value" in l)
            if (l.value === null) d.dom.selectedIndex !== -1 && (d.dom.value = null);
            else {
              var u = "" + l.value;
              (d.dom.value !== u || d.dom.selectedIndex === -1) && (d.dom.value = u);
            }
          "selectedIndex" in l && Q(d, "selectedIndex", null, l.selectedIndex, void 0);
        }
        function Ke(d, l, u, m) {
          if (
            (l &&
              l === u &&
              console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),
            u != null)
          ) {
            d.tag === "input" && u.type != null && d.dom.setAttribute("type", u.type);
            var y = d.tag === "input" && u.type === "file";
            for (var E in u) Q(d, E, l && l[E], u[E], m, y);
          }
          var N;
          if (l != null) for (var E in l) (N = l[E]) != null && (u == null || u[E] == null) && he(d, E, N, m);
        }
        function rt(d, l) {
          return (
            l === "value" ||
            l === "checked" ||
            l === "selectedIndex" ||
            (l === "selected" && d.dom === c()) ||
            (d.tag === "option" && d.dom.parentNode === r.activeElement)
          );
        }
        function Ce(d) {
          return (
            d === "oninit" ||
            d === "oncreate" ||
            d === "onupdate" ||
            d === "onremove" ||
            d === "onbeforeremove" ||
            d === "onbeforeupdate"
          );
        }
        function nt(d, l, u) {
          return (
            u === void 0 &&
            (d.tag.indexOf("-") > -1 ||
              (d.attrs != null && d.attrs.is) ||
              (l !== "href" && l !== "list" && l !== "form" && l !== "width" && l !== "height")) &&
            l in d.dom
          );
        }
        var rn = /[A-Z]/g;
        function _t(d) {
          return "-" + d.toLowerCase();
        }
        function Et(d) {
          return d[0] === "-" && d[1] === "-" ? d : d === "cssFloat" ? "float" : d.replace(rn, _t);
        }
        function It(d, l, u) {
          if (l !== u)
            if (u == null) d.style.cssText = "";
            else if (typeof u != "object") d.style.cssText = u;
            else if (l == null || typeof l != "object") {
              d.style.cssText = "";
              for (var m in u) {
                var y = u[m];
                y != null && d.style.setProperty(Et(m), String(y));
              }
            } else {
              for (var m in u) {
                var y = u[m];
                y != null && (y = String(y)) !== String(l[m]) && d.style.setProperty(Et(m), y);
              }
              for (var m in l) l[m] != null && u[m] == null && d.style.removeProperty(Et(m));
            }
        }
        function Ct() {
          this._ = n;
        }
        (Ct.prototype = Object.create(null)),
          (Ct.prototype.handleEvent = function (d) {
            var l = this["on" + d.type],
              u;
            typeof l == "function"
              ? (u = l.call(d.currentTarget, d))
              : typeof l.handleEvent == "function" && l.handleEvent(d),
              this._ && d.redraw !== !1 && (0, this._)(),
              u === !1 && (d.preventDefault(), d.stopPropagation());
          });
        function er(d, l, u) {
          if (d.events != null) {
            if (((d.events._ = n), d.events[l] === u)) return;
            u != null && (typeof u == "function" || typeof u == "object")
              ? (d.events[l] == null && d.dom.addEventListener(l.slice(2), d.events, !1), (d.events[l] = u))
              : (d.events[l] != null && d.dom.removeEventListener(l.slice(2), d.events, !1), (d.events[l] = void 0));
          } else
            u != null &&
              (typeof u == "function" || typeof u == "object") &&
              ((d.events = new Ct()), d.dom.addEventListener(l.slice(2), d.events, !1), (d.events[l] = u));
        }
        function it(d, l, u) {
          typeof d.oninit == "function" && s.call(d.oninit, l),
            typeof d.oncreate == "function" && u.push(s.bind(d.oncreate, l));
        }
        function ot(d, l, u) {
          typeof d.onupdate == "function" && u.push(s.bind(d.onupdate, l));
        }
        function nn(d, l) {
          do {
            if (d.attrs != null && typeof d.attrs.onbeforeupdate == "function") {
              var u = s.call(d.attrs.onbeforeupdate, d, l);
              if (u !== void 0 && !u) break;
            }
            if (typeof d.tag != "string" && typeof d.state.onbeforeupdate == "function") {
              var u = s.call(d.state.onbeforeupdate, d, l);
              if (u !== void 0 && !u) break;
            }
            return !1;
          } while (!1);
          return (
            (d.dom = l.dom),
            (d.domSize = l.domSize),
            (d.instance = l.instance),
            (d.attrs = l.attrs),
            (d.children = l.children),
            (d.text = l.text),
            !0
          );
        }
        var Xe;
        return function (d, l, u) {
          if (!d) throw new TypeError("DOM element being rendered to does not exist.");
          if (Xe != null && d.contains(Xe))
            throw new TypeError("Node is currently being rendered to and thus is locked.");
          var m = n,
            y = Xe,
            E = [],
            N = c(),
            W = d.namespaceURI;
          (Xe = d), (n = typeof u == "function" ? u : void 0);
          try {
            d.vnodes == null && (d.textContent = ""),
              (l = t.normalizeChildren(Array.isArray(l) ? l : [l])),
              _(d, d.vnodes, l, E, null, W === "http://www.w3.org/1999/xhtml" ? void 0 : W),
              (d.vnodes = l),
              N != null && c() !== N && typeof N.focus == "function" && N.focus();
            for (var T = 0; T < E.length; T++) E[T]();
          } finally {
            (n = m), (Xe = y);
          }
        };
      }),
      or
    );
  }
  var wn = xo()(typeof window < "u" ? window : null),
    ar,
    xn;
  function ko() {
    if (xn) return ar;
    xn = 1;
    var t = Le();
    return (
      (ar = function (e, r, n) {
        var i = [],
          o = !1,
          a = -1;
        function s() {
          for (a = 0; a < i.length; a += 2)
            try {
              e(i[a], t(i[a + 1]), c);
            } catch (f) {
              n.error(f);
            }
          a = -1;
        }
        function c() {
          o ||
            ((o = !0),
            r(function () {
              (o = !1), s();
            }));
        }
        c.sync = s;
        function p(f, g) {
          if (g != null && g.view == null && typeof g != "function")
            throw new TypeError("m.mount expects a component, not a vnode.");
          var v = i.indexOf(f);
          v >= 0 && (i.splice(v, 2), v <= a && (a -= 2), e(f, [])), g != null && (i.push(f, g), e(f, t(g), c));
        }
        return { mount: p, redraw: c };
      }),
      ar
    );
  }
  var _o = wn,
    sr = ko()(
      _o,
      typeof requestAnimationFrame < "u" ? requestAnimationFrame : null,
      typeof console < "u" ? console : null,
    ),
    lr,
    kn;
  function _n() {
    return (
      kn ||
        ((kn = 1),
        (lr = function (t) {
          if (Object.prototype.toString.call(t) !== "[object Object]") return "";
          var e = [];
          for (var r in t) n(r, t[r]);
          return e.join("&");
          function n(i, o) {
            if (Array.isArray(o)) for (var a = 0; a < o.length; a++) n(i + "[" + a + "]", o[a]);
            else if (Object.prototype.toString.call(o) === "[object Object]")
              for (var a in o) n(i + "[" + a + "]", o[a]);
            else e.push(encodeURIComponent(i) + (o != null && o !== "" ? "=" + encodeURIComponent(o) : ""));
          }
        })),
      lr
    );
  }
  var cr, En;
  function In() {
    if (En) return cr;
    En = 1;
    var t = Tt;
    return (
      (cr =
        Object.assign ||
        function (e, r) {
          for (var n in r) t.call(r, n) && (e[n] = r[n]);
        }),
      cr
    );
  }
  var dr, Cn;
  function ur() {
    if (Cn) return dr;
    Cn = 1;
    var t = _n(),
      e = In();
    return (
      (dr = function (r, n) {
        if (/:([^\/\.-]+)(\.{3})?:/.test(r))
          throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
        if (n == null) return r;
        var i = r.indexOf("?"),
          o = r.indexOf("#"),
          a = o < 0 ? r.length : o,
          s = i < 0 ? a : i,
          c = r.slice(0, s),
          p = {};
        e(p, n);
        var f = c.replace(/:([^\/\.-]+)(\.{3})?/g, function (A, _, j) {
            return delete p[_], n[_] == null ? A : j ? n[_] : encodeURIComponent(String(n[_]));
          }),
          g = f.indexOf("?"),
          v = f.indexOf("#"),
          w = v < 0 ? f.length : v,
          k = g < 0 ? w : g,
          b = f.slice(0, k);
        i >= 0 && (b += r.slice(i, a)), g >= 0 && (b += (i < 0 ? "?" : "&") + f.slice(g, w));
        var x = t(p);
        return (
          x && (b += (i < 0 && g < 0 ? "?" : "&") + x),
          o >= 0 && (b += r.slice(o)),
          v >= 0 && (b += (o < 0 ? "" : "&") + f.slice(v)),
          b
        );
      }),
      dr
    );
  }
  var Eo = ur(),
    An = Tt,
    Io = function (t, e, r) {
      var n = 0;
      function i(s) {
        return new e(s);
      }
      (i.prototype = e.prototype), (i.__proto__ = e);
      function o(s) {
        return function (c, p) {
          typeof c != "string" ? ((p = c), (c = c.url)) : p == null && (p = {});
          var f = new e(function (k, b) {
            s(
              Eo(c, p.params),
              p,
              function (x) {
                if (typeof p.type == "function")
                  if (Array.isArray(x)) for (var A = 0; A < x.length; A++) x[A] = new p.type(x[A]);
                  else x = new p.type(x);
                k(x);
              },
              b,
            );
          });
          if (p.background === !0) return f;
          var g = 0;
          function v() {
            --g === 0 && typeof r == "function" && r();
          }
          return w(f);
          function w(k) {
            var b = k.then;
            return (
              (k.constructor = i),
              (k.then = function () {
                g++;
                var x = b.apply(k, arguments);
                return (
                  x.then(v, function (A) {
                    if ((v(), g === 0)) throw A;
                  }),
                  w(x)
                );
              }),
              k
            );
          }
        };
      }
      function a(s, c) {
        for (var p in s.headers) if (An.call(s.headers, p) && p.toLowerCase() === c) return !0;
        return !1;
      }
      return {
        request: o(function (s, c, p, f) {
          var g = c.method != null ? c.method.toUpperCase() : "GET",
            v = c.body,
            w =
              (c.serialize == null || c.serialize === JSON.serialize) &&
              !(v instanceof t.FormData || v instanceof t.URLSearchParams),
            k = c.responseType || (typeof c.extract == "function" ? "" : "json"),
            b = new t.XMLHttpRequest(),
            x = !1,
            A = !1,
            _ = b,
            j,
            P = b.abort;
          (b.abort = function () {
            (x = !0), P.call(this);
          }),
            b.open(
              g,
              s,
              c.async !== !1,
              typeof c.user == "string" ? c.user : void 0,
              typeof c.password == "string" ? c.password : void 0,
            ),
            w &&
              v != null &&
              !a(c, "content-type") &&
              b.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
            typeof c.deserialize != "function" &&
              !a(c, "accept") &&
              b.setRequestHeader("Accept", "application/json, text/*"),
            c.withCredentials && (b.withCredentials = c.withCredentials),
            c.timeout && (b.timeout = c.timeout),
            (b.responseType = k);
          for (var R in c.headers) An.call(c.headers, R) && b.setRequestHeader(R, c.headers[R]);
          (b.onreadystatechange = function (z) {
            if (!x && z.target.readyState === 4)
              try {
                var D =
                    (z.target.status >= 200 && z.target.status < 300) ||
                    z.target.status === 304 ||
                    /^file:\/\//i.test(s),
                  V = z.target.response,
                  J;
                if (k === "json") {
                  if (!z.target.responseType && typeof c.extract != "function")
                    try {
                      V = JSON.parse(z.target.responseText);
                    } catch {
                      V = null;
                    }
                } else (!k || k === "text") && V == null && (V = z.target.responseText);
                if (
                  (typeof c.extract == "function"
                    ? ((V = c.extract(z.target, c)), (D = !0))
                    : typeof c.deserialize == "function" && (V = c.deserialize(V)),
                  D)
                )
                  p(V);
                else {
                  var H = function () {
                    try {
                      J = z.target.responseText;
                    } catch {
                      J = V;
                    }
                    var U = new Error(J);
                    (U.code = z.target.status), (U.response = V), f(U);
                  };
                  b.status === 0
                    ? setTimeout(function () {
                        A || H();
                      })
                    : H();
                }
              } catch (U) {
                f(U);
              }
          }),
            (b.ontimeout = function (z) {
              A = !0;
              var D = new Error("Request timed out");
              (D.code = z.target.status), f(D);
            }),
            typeof c.config == "function" &&
              ((b = c.config(b, c, s) || b),
              b !== _ &&
                ((j = b.abort),
                (b.abort = function () {
                  (x = !0), j.call(this);
                }))),
            v == null
              ? b.send()
              : typeof c.serialize == "function"
              ? b.send(c.serialize(v))
              : v instanceof t.FormData || v instanceof t.URLSearchParams
              ? b.send(v)
              : b.send(JSON.stringify(v));
        }),
        jsonp: o(function (s, c, p, f) {
          var g = c.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + n++,
            v = t.document.createElement("script");
          (t[g] = function (w) {
            delete t[g], v.parentNode.removeChild(v), p(w);
          }),
            (v.onerror = function () {
              delete t[g], v.parentNode.removeChild(v), f(new Error("JSONP request failed"));
            }),
            (v.src =
              s +
              (s.indexOf("?") < 0 ? "?" : "&") +
              encodeURIComponent(c.callbackKey || "callback") +
              "=" +
              encodeURIComponent(g)),
            t.document.documentElement.appendChild(v);
        }),
      };
    },
    Co = vn,
    Ao = sr,
    To = Io(typeof window < "u" ? window : null, Co, Ao.redraw),
    fr,
    Tn;
  function Ln() {
    if (Tn) return fr;
    Tn = 1;
    function t(e) {
      try {
        return decodeURIComponent(e);
      } catch {
        return e;
      }
    }
    return (
      (fr = function (e) {
        if (e === "" || e == null) return {};
        e.charAt(0) === "?" && (e = e.slice(1));
        for (var r = e.split("&"), n = {}, i = {}, o = 0; o < r.length; o++) {
          var a = r[o].split("="),
            s = t(a[0]),
            c = a.length === 2 ? t(a[1]) : "";
          c === "true" ? (c = !0) : c === "false" && (c = !1);
          var p = s.split(/\]\[?|\[/),
            f = i;
          s.indexOf("[") > -1 && p.pop();
          for (var g = 0; g < p.length; g++) {
            var v = p[g],
              w = p[g + 1],
              k = w == "" || !isNaN(parseInt(w, 10));
            if (v === "") {
              var s = p.slice(0, g).join();
              n[s] == null && (n[s] = Array.isArray(f) ? f.length : 0), (v = n[s]++);
            } else if (v === "__proto__") break;
            if (g === p.length - 1) f[v] = c;
            else {
              var b = Object.getOwnPropertyDescriptor(f, v);
              b != null && (b = b.value), b == null && (f[v] = b = k ? [] : {}), (f = b);
            }
          }
        }
        return i;
      }),
      fr
    );
  }
  var pr, zn;
  function gr() {
    if (zn) return pr;
    zn = 1;
    var t = Ln();
    return (
      (pr = function (e) {
        var r = e.indexOf("?"),
          n = e.indexOf("#"),
          i = n < 0 ? e.length : n,
          o = r < 0 ? i : r,
          a = e.slice(0, o).replace(/\/{2,}/g, "/");
        return (
          a
            ? (a[0] !== "/" && (a = "/" + a), a.length > 1 && a[a.length - 1] === "/" && (a = a.slice(0, -1)))
            : (a = "/"),
          { path: a, params: r < 0 ? {} : t(e.slice(r + 1, i)) }
        );
      }),
      pr
    );
  }
  var hr, On;
  function Lo() {
    if (On) return hr;
    On = 1;
    var t = gr();
    return (
      (hr = function (e) {
        var r = t(e),
          n = Object.keys(r.params),
          i = [],
          o = new RegExp(
            "^" +
              r.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function (a, s, c) {
                return s == null
                  ? "\\" + a
                  : (i.push({ k: s, r: c === "..." }),
                    c === "..." ? "(.*)" : c === "." ? "([^/]+)\\." : "([^/]+)" + (c || ""));
              }) +
              "$",
          );
        return function (a) {
          for (var s = 0; s < n.length; s++) if (r.params[n[s]] !== a.params[n[s]]) return !1;
          if (!i.length) return o.test(a.path);
          var c = o.exec(a.path);
          if (c == null) return !1;
          for (var s = 0; s < i.length; s++) a.params[i[s].k] = i[s].r ? c[s + 1] : decodeURIComponent(c[s + 1]);
          return !0;
        };
      }),
      hr
    );
  }
  var br, Pn;
  function Sn() {
    if (Pn) return br;
    Pn = 1;
    var t = Tt,
      e = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");
    return (
      (br = function (r, n) {
        var i = {};
        if (n != null) for (var o in r) t.call(r, o) && !e.test(o) && n.indexOf(o) < 0 && (i[o] = r[o]);
        else for (var o in r) t.call(r, o) && !e.test(o) && (i[o] = r[o]);
        return i;
      }),
      br
    );
  }
  var mr, jn;
  function zo() {
    if (jn) return mr;
    jn = 1;
    var t = Le(),
      e = hn,
      r = vn,
      n = ur(),
      i = gr(),
      o = Lo(),
      a = In(),
      s = Sn(),
      c = {};
    function p(f) {
      try {
        return decodeURIComponent(f);
      } catch {
        return f;
      }
    }
    return (
      (mr = function (f, g) {
        var v = f == null ? null : typeof f.setImmediate == "function" ? f.setImmediate : f.setTimeout,
          w = r.resolve(),
          k = !1,
          b = !1,
          x = 0,
          A,
          _,
          j = c,
          P,
          R,
          z,
          D,
          V = {
            onbeforeupdate: function () {
              return (x = x ? 2 : 1), !(!x || c === j);
            },
            onremove: function () {
              f.removeEventListener("popstate", U, !1), f.removeEventListener("hashchange", H, !1);
            },
            view: function () {
              if (!(!x || c === j)) {
                var L = [t(P, R.key, R)];
                return j && (L = j.render(L[0])), L;
              }
            },
          },
          J = ($.SKIP = {});
        function H() {
          k = !1;
          var L = f.location.hash;
          $.prefix[0] !== "#" &&
            ((L = f.location.search + L),
            $.prefix[0] !== "?" && ((L = f.location.pathname + L), L[0] !== "/" && (L = "/" + L)));
          var B = L.concat()
              .replace(/(?:%[a-f89][a-f0-9])+/gim, p)
              .slice($.prefix.length),
            S = i(B);
          a(S.params, f.history.state);
          function F(M) {
            console.error(M), C(_, null, { replace: !0 });
          }
          Y(0);
          function Y(M) {
            for (; M < A.length; M++)
              if (A[M].check(S)) {
                var ee = A[M].component,
                  ie = A[M].route,
                  se = ee,
                  Q = (D = function (he) {
                    if (Q === D) {
                      if (he === J) return Y(M + 1);
                      (P = he != null && (typeof he.view == "function" || typeof he == "function") ? he : "div"),
                        (R = S.params),
                        (z = B),
                        (D = null),
                        (j = ee.render ? ee : null),
                        x === 2 ? g.redraw() : ((x = 2), g.redraw.sync());
                    }
                  });
                ee.view || typeof ee == "function"
                  ? ((ee = {}), Q(se))
                  : ee.onmatch
                  ? w
                      .then(function () {
                        return ee.onmatch(S.params, B, ie);
                      })
                      .then(Q, B === _ ? null : F)
                  : Q("div");
                return;
              }
            if (B === _) throw new Error("Could not resolve default route " + _ + ".");
            C(_, null, { replace: !0 });
          }
        }
        function U() {
          k || ((k = !0), v(H));
        }
        function C(L, B, S) {
          if (((L = n(L, B)), b)) {
            U();
            var F = S ? S.state : null,
              Y = S ? S.title : null;
            S && S.replace ? f.history.replaceState(F, Y, $.prefix + L) : f.history.pushState(F, Y, $.prefix + L);
          } else f.location.href = $.prefix + L;
        }
        function $(L, B, S) {
          if (!L) throw new TypeError("DOM element being rendered to does not exist.");
          if (
            ((A = Object.keys(S).map(function (Y) {
              if (Y[0] !== "/") throw new SyntaxError("Routes must start with a '/'.");
              if (/:([^\/\.-]+)(\.{3})?:/.test(Y))
                throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
              return { route: Y, component: S[Y], check: o(Y) };
            })),
            (_ = B),
            B != null)
          ) {
            var F = i(B);
            if (
              !A.some(function (Y) {
                return Y.check(F);
              })
            )
              throw new ReferenceError("Default route doesn't match any known routes.");
          }
          typeof f.history.pushState == "function"
            ? f.addEventListener("popstate", U, !1)
            : $.prefix[0] === "#" && f.addEventListener("hashchange", H, !1),
            (b = !0),
            g.mount(L, V),
            H();
        }
        return (
          ($.set = function (L, B, S) {
            D != null && ((S = S || {}), (S.replace = !0)), (D = null), C(L, B, S);
          }),
          ($.get = function () {
            return z;
          }),
          ($.prefix = "#!"),
          ($.Link = {
            view: function (L) {
              var B = e(L.attrs.selector || "a", s(L.attrs, ["options", "params", "selector", "onclick"]), L.children),
                S,
                F,
                Y;
              return (
                (B.attrs.disabled = !!B.attrs.disabled)
                  ? ((B.attrs.href = null), (B.attrs["aria-disabled"] = "true"))
                  : ((S = L.attrs.options),
                    (F = L.attrs.onclick),
                    (Y = n(B.attrs.href, L.attrs.params)),
                    (B.attrs.href = $.prefix + Y),
                    (B.attrs.onclick = function (M) {
                      var ee;
                      typeof F == "function"
                        ? (ee = F.call(M.currentTarget, M))
                        : F == null || typeof F != "object" || (typeof F.handleEvent == "function" && F.handleEvent(M)),
                        ee !== !1 &&
                          !M.defaultPrevented &&
                          (M.button === 0 || M.which === 0 || M.which === 1) &&
                          (!M.currentTarget.target || M.currentTarget.target === "_self") &&
                          !M.ctrlKey &&
                          !M.metaKey &&
                          !M.shiftKey &&
                          !M.altKey &&
                          (M.preventDefault(), (M.redraw = !1), $.set(Y, null, S));
                    })),
                B
              );
            },
          }),
          ($.param = function (L) {
            return R && L != null ? R[L] : R;
          }),
          $
        );
      }),
      mr
    );
  }
  var vr, Rn;
  function Oo() {
    if (Rn) return vr;
    Rn = 1;
    var t = sr;
    return (vr = zo()(typeof window < "u" ? window : null, t)), vr;
  }
  var zt = wo,
    Mn = To,
    Nn = sr,
    le = function () {
      return zt.apply(this, arguments);
    };
  (le.m = zt),
    (le.trust = zt.trust),
    (le.fragment = zt.fragment),
    (le.Fragment = "["),
    (le.mount = Nn.mount),
    (le.route = Oo()),
    (le.render = wn),
    (le.redraw = Nn.redraw),
    (le.request = Mn.request),
    (le.jsonp = Mn.jsonp),
    (le.parseQueryString = Ln()),
    (le.buildQueryString = _n()),
    (le.parsePathname = gr()),
    (le.buildPathname = ur()),
    (le.vnode = Le()),
    (le.PromisePolyfill = mn()),
    (le.censor = Sn());
  var Po = le;
  const h = ao(Po),
    yr = "-";
  function So(t) {
    const e = Ro(t),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = t;
    function i(a) {
      const s = a.split(yr);
      return s[0] === "" && s.length !== 1 && s.shift(), Dn(s, e) || jo(a);
    }
    function o(a, s) {
      const c = r[a] || [];
      return s && n[a] ? [...c, ...n[a]] : c;
    }
    return { getClassGroupId: i, getConflictingClassGroupIds: o };
  }
  function Dn(t, e) {
    var a;
    if (t.length === 0) return e.classGroupId;
    const r = t[0],
      n = e.nextPart.get(r),
      i = n ? Dn(t.slice(1), n) : void 0;
    if (i) return i;
    if (e.validators.length === 0) return;
    const o = t.join(yr);
    return (a = e.validators.find(({ validator: s }) => s(o))) == null ? void 0 : a.classGroupId;
  }
  const Hn = /^\[(.+)\]$/;
  function jo(t) {
    if (Hn.test(t)) {
      const e = Hn.exec(t)[1],
        r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  }
  function Ro(t) {
    const { theme: e, prefix: r } = t,
      n = { nextPart: new Map(), validators: [] };
    return (
      No(Object.entries(t.classGroups), r).forEach(([o, a]) => {
        wr(a, n, o, e);
      }),
      n
    );
  }
  function wr(t, e, r, n) {
    t.forEach((i) => {
      if (typeof i == "string") {
        const o = i === "" ? e : $n(e, i);
        o.classGroupId = r;
        return;
      }
      if (typeof i == "function") {
        if (Mo(i)) {
          wr(i(n), e, r, n);
          return;
        }
        e.validators.push({ validator: i, classGroupId: r });
        return;
      }
      Object.entries(i).forEach(([o, a]) => {
        wr(a, $n(e, o), r, n);
      });
    });
  }
  function $n(t, e) {
    let r = t;
    return (
      e.split(yr).forEach((n) => {
        r.nextPart.has(n) || r.nextPart.set(n, { nextPart: new Map(), validators: [] }), (r = r.nextPart.get(n));
      }),
      r
    );
  }
  function Mo(t) {
    return t.isThemeGetter;
  }
  function No(t, e) {
    return e
      ? t.map(([r, n]) => {
          const i = n.map((o) =>
            typeof o == "string"
              ? e + o
              : typeof o == "object"
              ? Object.fromEntries(Object.entries(o).map(([a, s]) => [e + a, s]))
              : o,
          );
          return [r, i];
        })
      : t;
  }
  function Do(t) {
    if (t < 1) return { get: () => {}, set: () => {} };
    let e = 0,
      r = new Map(),
      n = new Map();
    function i(o, a) {
      r.set(o, a), e++, e > t && ((e = 0), (n = r), (r = new Map()));
    }
    return {
      get(o) {
        let a = r.get(o);
        if (a !== void 0) return a;
        if ((a = n.get(o)) !== void 0) return i(o, a), a;
      },
      set(o, a) {
        r.has(o) ? r.set(o, a) : i(o, a);
      },
    };
  }
  const Bn = "!";
  function Ho(t) {
    const e = t.separator,
      r = e.length === 1,
      n = e[0],
      i = e.length;
    return function (a) {
      const s = [];
      let c = 0,
        p = 0,
        f;
      for (let b = 0; b < a.length; b++) {
        let x = a[b];
        if (c === 0) {
          if (x === n && (r || a.slice(b, b + i) === e)) {
            s.push(a.slice(p, b)), (p = b + i);
            continue;
          }
          if (x === "/") {
            f = b;
            continue;
          }
        }
        x === "[" ? c++ : x === "]" && c--;
      }
      const g = s.length === 0 ? a : a.substring(p),
        v = g.startsWith(Bn),
        w = v ? g.substring(1) : g,
        k = f && f > p ? f - p : void 0;
      return { modifiers: s, hasImportantModifier: v, baseClassName: w, maybePostfixModifierPosition: k };
    };
  }
  function $o(t) {
    if (t.length <= 1) return t;
    const e = [];
    let r = [];
    return (
      t.forEach((n) => {
        n[0] === "[" ? (e.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      e.push(...r.sort()),
      e
    );
  }
  function Bo(t) {
    return { cache: Do(t.cacheSize), splitModifiers: Ho(t), ...So(t) };
  }
  const qo = /\s+/;
  function Go(t, e) {
    const { splitModifiers: r, getClassGroupId: n, getConflictingClassGroupIds: i } = e,
      o = new Set();
    return t
      .trim()
      .split(qo)
      .map((a) => {
        const { modifiers: s, hasImportantModifier: c, baseClassName: p, maybePostfixModifierPosition: f } = r(a);
        let g = n(f ? p.substring(0, f) : p),
          v = !!f;
        if (!g) {
          if (!f) return { isTailwindClass: !1, originalClassName: a };
          if (((g = n(p)), !g)) return { isTailwindClass: !1, originalClassName: a };
          v = !1;
        }
        const w = $o(s).join(":");
        return {
          isTailwindClass: !0,
          modifierId: c ? w + Bn : w,
          classGroupId: g,
          originalClassName: a,
          hasPostfixModifier: v,
        };
      })
      .reverse()
      .filter((a) => {
        if (!a.isTailwindClass) return !0;
        const { modifierId: s, classGroupId: c, hasPostfixModifier: p } = a,
          f = s + c;
        return o.has(f) ? !1 : (o.add(f), i(c, p).forEach((g) => o.add(s + g)), !0);
      })
      .reverse()
      .map((a) => a.originalClassName)
      .join(" ");
  }
  function Vo() {
    let t = 0,
      e,
      r,
      n = "";
    for (; t < arguments.length; ) (e = arguments[t++]) && (r = qn(e)) && (n && (n += " "), (n += r));
    return n;
  }
  function qn(t) {
    if (typeof t == "string") return t;
    let e,
      r = "";
    for (let n = 0; n < t.length; n++) t[n] && (e = qn(t[n])) && (r && (r += " "), (r += e));
    return r;
  }
  function Fo(t, ...e) {
    let r,
      n,
      i,
      o = a;
    function a(c) {
      const p = e.reduce((f, g) => g(f), t());
      return (r = Bo(p)), (n = r.cache.get), (i = r.cache.set), (o = s), s(c);
    }
    function s(c) {
      const p = n(c);
      if (p) return p;
      const f = Go(c, r);
      return i(c, f), f;
    }
    return function () {
      return o(Vo.apply(null, arguments));
    };
  }
  function te(t) {
    const e = (r) => r[t] || [];
    return (e.isThemeGetter = !0), e;
  }
  const Gn = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Wo = /^\d+\/\d+$/,
    Uo = new Set(["px", "full", "screen"]),
    Ko = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Xo =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Yo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Jo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  function we(t) {
    return De(t) || Uo.has(t) || Wo.test(t);
  }
  function ze(t) {
    return Je(t, "length", oa);
  }
  function De(t) {
    return !!t && !Number.isNaN(Number(t));
  }
  function Ot(t) {
    return Je(t, "number", De);
  }
  function lt(t) {
    return !!t && Number.isInteger(Number(t));
  }
  function Zo(t) {
    return t.endsWith("%") && De(t.slice(0, -1));
  }
  function q(t) {
    return Gn.test(t);
  }
  function Oe(t) {
    return Ko.test(t);
  }
  const Qo = new Set(["length", "size", "percentage"]);
  function ea(t) {
    return Je(t, Qo, Vn);
  }
  function ta(t) {
    return Je(t, "position", Vn);
  }
  const ra = new Set(["image", "url"]);
  function na(t) {
    return Je(t, ra, sa);
  }
  function ia(t) {
    return Je(t, "", aa);
  }
  function ct() {
    return !0;
  }
  function Je(t, e, r) {
    const n = Gn.exec(t);
    return n ? (n[1] ? (typeof e == "string" ? n[1] === e : e.has(n[1])) : r(n[2])) : !1;
  }
  function oa(t) {
    return Xo.test(t);
  }
  function Vn() {
    return !1;
  }
  function aa(t) {
    return Yo.test(t);
  }
  function sa(t) {
    return Jo.test(t);
  }
  function la() {
    const t = te("colors"),
      e = te("spacing"),
      r = te("blur"),
      n = te("brightness"),
      i = te("borderColor"),
      o = te("borderRadius"),
      a = te("borderSpacing"),
      s = te("borderWidth"),
      c = te("contrast"),
      p = te("grayscale"),
      f = te("hueRotate"),
      g = te("invert"),
      v = te("gap"),
      w = te("gradientColorStops"),
      k = te("gradientColorStopPositions"),
      b = te("inset"),
      x = te("margin"),
      A = te("opacity"),
      _ = te("padding"),
      j = te("saturate"),
      P = te("scale"),
      R = te("sepia"),
      z = te("skew"),
      D = te("space"),
      V = te("translate"),
      J = () => ["auto", "contain", "none"],
      H = () => ["auto", "hidden", "clip", "visible", "scroll"],
      U = () => ["auto", q, e],
      C = () => [q, e],
      $ = () => ["", we, ze],
      L = () => ["auto", De, q],
      B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
      S = () => ["solid", "dashed", "dotted", "double", "none"],
      F = () => [
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
        "plus-lighter",
      ],
      Y = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
      M = () => ["", "0", q],
      ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      ie = () => [De, Ot],
      se = () => [De, q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [ct],
        spacing: [we, ze],
        blur: ["none", "", Oe, q],
        brightness: ie(),
        borderColor: [t],
        borderRadius: ["none", "", "full", Oe, q],
        borderSpacing: C(),
        borderWidth: $(),
        contrast: ie(),
        grayscale: M(),
        hueRotate: se(),
        invert: M(),
        gap: C(),
        gradientColorStops: [t],
        gradientColorStopPositions: [Zo, ze],
        inset: U(),
        margin: U(),
        opacity: ie(),
        padding: C(),
        saturate: ie(),
        scale: ie(),
        sepia: M(),
        skew: se(),
        space: C(),
        translate: C(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", q] }],
        container: ["container"],
        columns: [{ columns: [Oe] }],
        "break-after": [{ "break-after": ee() }],
        "break-before": [{ "break-before": ee() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
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
        float: [{ float: ["right", "left", "none"] }],
        clear: [{ clear: ["left", "right", "both", "none"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: [...B(), q] }],
        overflow: [{ overflow: H() }],
        "overflow-x": [{ "overflow-x": H() }],
        "overflow-y": [{ "overflow-y": H() }],
        overscroll: [{ overscroll: J() }],
        "overscroll-x": [{ "overscroll-x": J() }],
        "overscroll-y": [{ "overscroll-y": J() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [b] }],
        "inset-x": [{ "inset-x": [b] }],
        "inset-y": [{ "inset-y": [b] }],
        start: [{ start: [b] }],
        end: [{ end: [b] }],
        top: [{ top: [b] }],
        right: [{ right: [b] }],
        bottom: [{ bottom: [b] }],
        left: [{ left: [b] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", lt, q] }],
        basis: [{ basis: U() }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", q] }],
        grow: [{ grow: M() }],
        shrink: [{ shrink: M() }],
        order: [{ order: ["first", "last", "none", lt, q] }],
        "grid-cols": [{ "grid-cols": [ct] }],
        "col-start-end": [{ col: ["auto", { span: ["full", lt, q] }, q] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [ct] }],
        "row-start-end": [{ row: ["auto", { span: [lt, q] }, q] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", q] }],
        gap: [{ gap: [v] }],
        "gap-x": [{ "gap-x": [v] }],
        "gap-y": [{ "gap-y": [v] }],
        "justify-content": [{ justify: ["normal", ...Y()] }],
        "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
        "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
        "align-content": [{ content: ["normal", ...Y(), "baseline"] }],
        "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
        "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
        "place-content": [{ "place-content": [...Y(), "baseline"] }],
        "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
        "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
        p: [{ p: [_] }],
        px: [{ px: [_] }],
        py: [{ py: [_] }],
        ps: [{ ps: [_] }],
        pe: [{ pe: [_] }],
        pt: [{ pt: [_] }],
        pr: [{ pr: [_] }],
        pb: [{ pb: [_] }],
        pl: [{ pl: [_] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [D] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [D] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", q, e] }],
        "min-w": [{ "min-w": ["min", "max", "fit", q, we] }],
        "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [Oe] }, Oe, q] }],
        h: [{ h: [q, e, "auto", "min", "max", "fit"] }],
        "min-h": [{ "min-h": ["min", "max", "fit", we, q] }],
        "max-h": [{ "max-h": [q, e, "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Oe, ze] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          { font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ot] },
        ],
        "font-family": [{ font: [ct] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q] }],
        "line-clamp": [{ "line-clamp": ["none", De, Ot] }],
        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", we, q] }],
        "list-image": [{ "list-image": ["none", q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [t] }],
        "placeholder-opacity": [{ "placeholder-opacity": [A] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "text-color": [{ text: [t] }],
        "text-opacity": [{ "text-opacity": [A] }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...S(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: ["auto", "from-font", we, ze] }],
        "underline-offset": [{ "underline-offset": ["auto", we, q] }],
        "text-decoration-color": [{ decoration: [t] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        indent: [{ indent: C() }],
        "vertical-align": [
          { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q] },
        ],
        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [A] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...B(), ta] }],
        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
        "bg-size": [{ bg: ["auto", "cover", "contain", ea] }],
        "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, na] }],
        "bg-color": [{ bg: [t] }],
        "gradient-from-pos": [{ from: [k] }],
        "gradient-via-pos": [{ via: [k] }],
        "gradient-to-pos": [{ to: [k] }],
        "gradient-from": [{ from: [w] }],
        "gradient-via": [{ via: [w] }],
        "gradient-to": [{ to: [w] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [A] }],
        "border-style": [{ border: [...S(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [A] }],
        "divide-style": [{ divide: S() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...S()] }],
        "outline-offset": [{ "outline-offset": [we, q] }],
        "outline-w": [{ outline: [we, ze] }],
        "outline-color": [{ outline: [t] }],
        "ring-w": [{ ring: $() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [t] }],
        "ring-opacity": [{ "ring-opacity": [A] }],
        "ring-offset-w": [{ "ring-offset": [we, ze] }],
        "ring-offset-color": [{ "ring-offset": [t] }],
        shadow: [{ shadow: ["", "inner", "none", Oe, ia] }],
        "shadow-color": [{ shadow: [ct] }],
        opacity: [{ opacity: [A] }],
        "mix-blend": [{ "mix-blend": F() }],
        "bg-blend": [{ "bg-blend": F() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Oe, q] }],
        grayscale: [{ grayscale: [p] }],
        "hue-rotate": [{ "hue-rotate": [f] }],
        invert: [{ invert: [g] }],
        saturate: [{ saturate: [j] }],
        sepia: [{ sepia: [R] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [p] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
        "backdrop-invert": [{ "backdrop-invert": [g] }],
        "backdrop-opacity": [{ "backdrop-opacity": [A] }],
        "backdrop-saturate": [{ "backdrop-saturate": [j] }],
        "backdrop-sepia": [{ "backdrop-sepia": [R] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [a] }],
        "border-spacing-x": [{ "border-spacing-x": [a] }],
        "border-spacing-y": [{ "border-spacing-y": [a] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q] }],
        duration: [{ duration: se() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", q] }],
        delay: [{ delay: se() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [P] }],
        "scale-x": [{ "scale-x": [P] }],
        "scale-y": [{ "scale-y": [P] }],
        rotate: [{ rotate: [lt, q] }],
        "translate-x": [{ "translate-x": [V] }],
        "translate-y": [{ "translate-y": [V] }],
        "skew-x": [{ "skew-x": [z] }],
        "skew-y": [{ "skew-y": [z] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              q,
            ],
          },
        ],
        accent: [{ accent: ["auto", t] }],
        appearance: ["appearance-none"],
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
              q,
            ],
          },
        ],
        "caret-color": [{ caret: [t] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", q] }],
        fill: [{ fill: [t, "none"] }],
        "stroke-w": [{ stroke: [we, ze, Ot] }],
        stroke: [{ stroke: [t, "none"] }],
        sr: ["sr-only", "not-sr-only"],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
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
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
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
    };
  }
  const I = Fo(la);
  function He(t) {
    return t !== null && typeof t == "object" && t.constructor === Object;
  }
  function xr(t) {
    if (!He(t)) return t;
    const e = {};
    for (const r in t) e[r] = xr(t[r]);
    return e;
  }
  function O(t, e) {
    if (He(e) && Object.keys(e).length === 0) return xr({ ...t, ...e });
    const r = { ...t, ...e };
    if (He(e) && He(t))
      for (const n in e) He(e[n]) && n in t && He(t[n]) ? (r[n] = O(t[n], e[n])) : (r[n] = He(e[n]) ? xr(e[n]) : e[n]);
    return r;
  }
  const kr = (t) => (e) => {
      const r = {};
      return (
        Object.keys(e).forEach((n) => {
          t.includes(n) || (r[n] = e[n]);
        }),
        r
      );
    },
    Pt = {
      root: {
        base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
        flush: { off: "rounded-lg border", on: "border-b" },
      },
      content: { base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg" },
      title: {
        arrow: { base: "h-3 w-3 shrink-0", open: { off: "", on: "rotate-180" } },
        base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
        flush: {
          off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
          on: "bg-transparent dark:bg-transparent",
        },
        heading: "",
        open: { off: "", on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white" },
      },
    },
    ca = {
      view({ attrs: t, children: e }) {
        const { class: r, theme: n = {}, ...i } = t,
          o = O(Pt.content, n);
        return h("div", { class: I(o.base, r), ...i }, e);
      },
    },
    da = {
      isOpen: !1,
      view({ attrs: t, children: e, state: r }) {
        const { isOpen: n = !1, ...i } = t;
        return (r.isOpen = n), h("div", { ...i }, e);
      },
    };
  function ua() {
    for (var t = 0, e, r, n = ""; t < arguments.length; )
      (e = arguments[t++]) && (r = Fn(e)) && (n && (n += " "), (n += r));
    return n;
  }
  function Fn(t) {
    if (typeof t == "string") return t;
    for (var e, r = "", n = 0; n < t.length; n++) t[n] && (e = Fn(t[n])) && (r && (r += " "), (r += e));
    return r;
  }
  var _r = "-";
  function fa(t) {
    var e = ga(t),
      r = t.conflictingClassGroups,
      n = t.conflictingClassGroupModifiers,
      i = n === void 0 ? {} : n;
    function o(s) {
      var c = s.split(_r);
      return c[0] === "" && c.length !== 1 && c.shift(), Wn(c, e) || pa(s);
    }
    function a(s, c) {
      var p = r[s] || [];
      return c && i[s] ? [].concat(p, i[s]) : p;
    }
    return { getClassGroupId: o, getConflictingClassGroupIds: a };
  }
  function Wn(t, e) {
    var a;
    if (t.length === 0) return e.classGroupId;
    var r = t[0],
      n = e.nextPart.get(r),
      i = n ? Wn(t.slice(1), n) : void 0;
    if (i) return i;
    if (e.validators.length !== 0) {
      var o = t.join(_r);
      return (a = e.validators.find(function (s) {
        var c = s.validator;
        return c(o);
      })) == null
        ? void 0
        : a.classGroupId;
    }
  }
  var Un = /^\[(.+)\]$/;
  function pa(t) {
    if (Un.test(t)) {
      var e = Un.exec(t)[1],
        r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  }
  function ga(t) {
    var e = t.theme,
      r = t.prefix,
      n = { nextPart: new Map(), validators: [] },
      i = ba(Object.entries(t.classGroups), r);
    return (
      i.forEach(function (o) {
        var a = o[0],
          s = o[1];
        Er(s, n, a, e);
      }),
      n
    );
  }
  function Er(t, e, r, n) {
    t.forEach(function (i) {
      if (typeof i == "string") {
        var o = i === "" ? e : Kn(e, i);
        o.classGroupId = r;
        return;
      }
      if (typeof i == "function") {
        if (ha(i)) {
          Er(i(n), e, r, n);
          return;
        }
        e.validators.push({ validator: i, classGroupId: r });
        return;
      }
      Object.entries(i).forEach(function (a) {
        var s = a[0],
          c = a[1];
        Er(c, Kn(e, s), r, n);
      });
    });
  }
  function Kn(t, e) {
    var r = t;
    return (
      e.split(_r).forEach(function (n) {
        r.nextPart.has(n) || r.nextPart.set(n, { nextPart: new Map(), validators: [] }), (r = r.nextPart.get(n));
      }),
      r
    );
  }
  function ha(t) {
    return t.isThemeGetter;
  }
  function ba(t, e) {
    return e
      ? t.map(function (r) {
          var n = r[0],
            i = r[1],
            o = i.map(function (a) {
              return typeof a == "string"
                ? e + a
                : typeof a == "object"
                ? Object.fromEntries(
                    Object.entries(a).map(function (s) {
                      var c = s[0],
                        p = s[1];
                      return [e + c, p];
                    }),
                  )
                : a;
            });
          return [n, o];
        })
      : t;
  }
  function ma(t) {
    if (t < 1) return { get: function () {}, set: function () {} };
    var e = 0,
      r = new Map(),
      n = new Map();
    function i(o, a) {
      r.set(o, a), e++, e > t && ((e = 0), (n = r), (r = new Map()));
    }
    return {
      get: function (a) {
        var s = r.get(a);
        if (s !== void 0) return s;
        if ((s = n.get(a)) !== void 0) return i(a, s), s;
      },
      set: function (a, s) {
        r.has(a) ? r.set(a, s) : i(a, s);
      },
    };
  }
  var Xn = "!";
  function va(t) {
    var e = t.separator || ":",
      r = e.length === 1,
      n = e[0],
      i = e.length;
    return function (a) {
      for (var s = [], c = 0, p = 0, f, g = 0; g < a.length; g++) {
        var v = a[g];
        if (c === 0) {
          if (v === n && (r || a.slice(g, g + i) === e)) {
            s.push(a.slice(p, g)), (p = g + i);
            continue;
          }
          if (v === "/") {
            f = g;
            continue;
          }
        }
        v === "[" ? c++ : v === "]" && c--;
      }
      var w = s.length === 0 ? a : a.substring(p),
        k = w.startsWith(Xn),
        b = k ? w.substring(1) : w,
        x = f && f > p ? f - p : void 0;
      return { modifiers: s, hasImportantModifier: k, baseClassName: b, maybePostfixModifierPosition: x };
    };
  }
  function ya(t) {
    if (t.length <= 1) return t;
    var e = [],
      r = [];
    return (
      t.forEach(function (n) {
        var i = n[0] === "[";
        i ? (e.push.apply(e, r.sort().concat([n])), (r = [])) : r.push(n);
      }),
      e.push.apply(e, r.sort()),
      e
    );
  }
  function wa(t) {
    return { cache: ma(t.cacheSize), splitModifiers: va(t), ...fa(t) };
  }
  var xa = /\s+/;
  function ka(t, e) {
    var r = e.splitModifiers,
      n = e.getClassGroupId,
      i = e.getConflictingClassGroupIds,
      o = new Set();
    return t
      .trim()
      .split(xa)
      .map(function (a) {
        var s = r(a),
          c = s.modifiers,
          p = s.hasImportantModifier,
          f = s.baseClassName,
          g = s.maybePostfixModifierPosition,
          v = n(g ? f.substring(0, g) : f),
          w = !!g;
        if (!v) {
          if (!g) return { isTailwindClass: !1, originalClassName: a };
          if (((v = n(f)), !v)) return { isTailwindClass: !1, originalClassName: a };
          w = !1;
        }
        var k = ya(c).join(":"),
          b = p ? k + Xn : k;
        return { isTailwindClass: !0, modifierId: b, classGroupId: v, originalClassName: a, hasPostfixModifier: w };
      })
      .reverse()
      .filter(function (a) {
        if (!a.isTailwindClass) return !0;
        var s = a.modifierId,
          c = a.classGroupId,
          p = a.hasPostfixModifier,
          f = s + c;
        return o.has(f)
          ? !1
          : (o.add(f),
            i(c, p).forEach(function (g) {
              return o.add(s + g);
            }),
            !0);
      })
      .reverse()
      .map(function (a) {
        return a.originalClassName;
      })
      .join(" ");
  }
  function _a() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    var n,
      i,
      o,
      a = s;
    function s(p) {
      var f = e[0],
        g = e.slice(1),
        v = g.reduce(function (w, k) {
          return k(w);
        }, f());
      return (n = wa(v)), (i = n.cache.get), (o = n.cache.set), (a = c), c(p);
    }
    function c(p) {
      var f = i(p);
      if (f) return f;
      var g = ka(p, n);
      return o(p, g), g;
    }
    return function () {
      return a(ua.apply(null, arguments));
    };
  }
  function re(t) {
    var e = function (n) {
      return n[t] || [];
    };
    return (e.isThemeGetter = !0), e;
  }
  var Yn = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Ea = /^\d+\/\d+$/,
    Ia = new Set(["px", "full", "screen"]),
    Ca = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Aa =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Ta = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  function xe(t) {
    return $e(t) || Ia.has(t) || Ea.test(t) || Ir(t);
  }
  function Ir(t) {
    return Be(t, "length", ja);
  }
  function La(t) {
    return Be(t, "size", Jn);
  }
  function za(t) {
    return Be(t, "position", Jn);
  }
  function Oa(t) {
    return Be(t, "url", Ra);
  }
  function St(t) {
    return Be(t, "number", $e);
  }
  function $e(t) {
    return !Number.isNaN(Number(t));
  }
  function Pa(t) {
    return t.endsWith("%") && $e(t.slice(0, -1));
  }
  function dt(t) {
    return Zn(t) || Be(t, "number", Zn);
  }
  function K(t) {
    return Yn.test(t);
  }
  function ut() {
    return !0;
  }
  function Pe(t) {
    return Ca.test(t);
  }
  function Sa(t) {
    return Be(t, "", Ma);
  }
  function Be(t, e, r) {
    var n = Yn.exec(t);
    return n ? (n[1] ? n[1] === e : r(n[2])) : !1;
  }
  function ja(t) {
    return Aa.test(t);
  }
  function Jn() {
    return !1;
  }
  function Ra(t) {
    return t.startsWith("url(");
  }
  function Zn(t) {
    return Number.isInteger(Number(t));
  }
  function Ma(t) {
    return Ta.test(t);
  }
  function Na() {
    var t = re("colors"),
      e = re("spacing"),
      r = re("blur"),
      n = re("brightness"),
      i = re("borderColor"),
      o = re("borderRadius"),
      a = re("borderSpacing"),
      s = re("borderWidth"),
      c = re("contrast"),
      p = re("grayscale"),
      f = re("hueRotate"),
      g = re("invert"),
      v = re("gap"),
      w = re("gradientColorStops"),
      k = re("gradientColorStopPositions"),
      b = re("inset"),
      x = re("margin"),
      A = re("opacity"),
      _ = re("padding"),
      j = re("saturate"),
      P = re("scale"),
      R = re("sepia"),
      z = re("skew"),
      D = re("space"),
      V = re("translate"),
      J = function () {
        return ["auto", "contain", "none"];
      },
      H = function () {
        return ["auto", "hidden", "clip", "visible", "scroll"];
      },
      U = function () {
        return ["auto", K, e];
      },
      C = function () {
        return [K, e];
      },
      $ = function () {
        return ["", xe];
      },
      L = function () {
        return ["auto", $e, K];
      },
      B = function () {
        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
      },
      S = function () {
        return ["solid", "dashed", "dotted", "double", "none"];
      },
      F = function () {
        return [
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
          "plus-lighter",
        ];
      },
      Y = function () {
        return ["start", "end", "center", "between", "around", "evenly", "stretch"];
      },
      M = function () {
        return ["", "0", K];
      },
      ee = function () {
        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
      },
      ie = function () {
        return [$e, St];
      },
      se = function () {
        return [$e, K];
      };
    return {
      cacheSize: 500,
      theme: {
        colors: [ut],
        spacing: [xe],
        blur: ["none", "", Pe, K],
        brightness: ie(),
        borderColor: [t],
        borderRadius: ["none", "", "full", Pe, K],
        borderSpacing: C(),
        borderWidth: $(),
        contrast: ie(),
        grayscale: M(),
        hueRotate: se(),
        invert: M(),
        gap: C(),
        gradientColorStops: [t],
        gradientColorStopPositions: [Pa, Ir],
        inset: U(),
        margin: U(),
        opacity: ie(),
        padding: C(),
        saturate: ie(),
        scale: ie(),
        sepia: M(),
        skew: se(),
        space: C(),
        translate: C(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", K] }],
        container: ["container"],
        columns: [{ columns: [Pe] }],
        "break-after": [{ "break-after": ee() }],
        "break-before": [{ "break-before": ee() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
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
        float: [{ float: ["right", "left", "none"] }],
        clear: [{ clear: ["left", "right", "both", "none"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: [].concat(B(), [K]) }],
        overflow: [{ overflow: H() }],
        "overflow-x": [{ "overflow-x": H() }],
        "overflow-y": [{ "overflow-y": H() }],
        overscroll: [{ overscroll: J() }],
        "overscroll-x": [{ "overscroll-x": J() }],
        "overscroll-y": [{ "overscroll-y": J() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [b] }],
        "inset-x": [{ "inset-x": [b] }],
        "inset-y": [{ "inset-y": [b] }],
        start: [{ start: [b] }],
        end: [{ end: [b] }],
        top: [{ top: [b] }],
        right: [{ right: [b] }],
        bottom: [{ bottom: [b] }],
        left: [{ left: [b] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", dt] }],
        basis: [{ basis: U() }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", K] }],
        grow: [{ grow: M() }],
        shrink: [{ shrink: M() }],
        order: [{ order: ["first", "last", "none", dt] }],
        "grid-cols": [{ "grid-cols": [ut] }],
        "col-start-end": [{ col: ["auto", { span: ["full", dt] }, K] }],
        "col-start": [{ "col-start": L() }],
        "col-end": [{ "col-end": L() }],
        "grid-rows": [{ "grid-rows": [ut] }],
        "row-start-end": [{ row: ["auto", { span: [dt] }, K] }],
        "row-start": [{ "row-start": L() }],
        "row-end": [{ "row-end": L() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", K] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", K] }],
        gap: [{ gap: [v] }],
        "gap-x": [{ "gap-x": [v] }],
        "gap-y": [{ "gap-y": [v] }],
        "justify-content": [{ justify: ["normal"].concat(Y()) }],
        "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
        "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
        "align-content": [{ content: ["normal"].concat(Y(), ["baseline"]) }],
        "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
        "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
        "place-content": [{ "place-content": [].concat(Y(), ["baseline"]) }],
        "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
        "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
        p: [{ p: [_] }],
        px: [{ px: [_] }],
        py: [{ py: [_] }],
        ps: [{ ps: [_] }],
        pe: [{ pe: [_] }],
        pt: [{ pt: [_] }],
        pr: [{ pr: [_] }],
        pb: [{ pb: [_] }],
        pl: [{ pl: [_] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [D] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [D] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", K, e] }],
        "min-w": [{ "min-w": ["min", "max", "fit", K, xe] }],
        "max-w": [{ "max-w": ["0", "none", "full", "min", "max", "fit", "prose", { screen: [Pe] }, Pe, K] }],
        h: [{ h: [K, e, "auto", "min", "max", "fit"] }],
        "min-h": [{ "min-h": ["min", "max", "fit", K, xe] }],
        "max-h": [{ "max-h": [K, e, "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Pe, Ir] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          { font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", St] },
        ],
        "font-family": [{ font: [ut] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", K] }],
        "line-clamp": [{ "line-clamp": ["none", $e, St] }],
        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", K, xe] }],
        "list-image": [{ "list-image": ["none", K] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", K] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [t] }],
        "placeholder-opacity": [{ "placeholder-opacity": [A] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "text-color": [{ text: [t] }],
        "text-opacity": [{ "text-opacity": [A] }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [].concat(S(), ["wavy"]) }],
        "text-decoration-thickness": [{ decoration: ["auto", "from-font", xe] }],
        "underline-offset": [{ "underline-offset": ["auto", K, xe] }],
        "text-decoration-color": [{ decoration: [t] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        indent: [{ indent: C() }],
        "vertical-align": [
          { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K] },
        ],
        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", K] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [A] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [].concat(B(), [za]) }],
        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
        "bg-size": [{ bg: ["auto", "cover", "contain", La] }],
        "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, Oa] }],
        "bg-color": [{ bg: [t] }],
        "gradient-from-pos": [{ from: [k] }],
        "gradient-via-pos": [{ via: [k] }],
        "gradient-to-pos": [{ to: [k] }],
        "gradient-from": [{ from: [w] }],
        "gradient-via": [{ via: [w] }],
        "gradient-to": [{ to: [w] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [A] }],
        "border-style": [{ border: [].concat(S(), ["hidden"]) }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [A] }],
        "divide-style": [{ divide: S() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: [""].concat(S()) }],
        "outline-offset": [{ "outline-offset": [K, xe] }],
        "outline-w": [{ outline: [xe] }],
        "outline-color": [{ outline: [t] }],
        "ring-w": [{ ring: $() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [t] }],
        "ring-opacity": [{ "ring-opacity": [A] }],
        "ring-offset-w": [{ "ring-offset": [xe] }],
        "ring-offset-color": [{ "ring-offset": [t] }],
        shadow: [{ shadow: ["", "inner", "none", Pe, Sa] }],
        "shadow-color": [{ shadow: [ut] }],
        opacity: [{ opacity: [A] }],
        "mix-blend": [{ "mix-blend": F() }],
        "bg-blend": [{ "bg-blend": F() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Pe, K] }],
        grayscale: [{ grayscale: [p] }],
        "hue-rotate": [{ "hue-rotate": [f] }],
        invert: [{ invert: [g] }],
        saturate: [{ saturate: [j] }],
        sepia: [{ sepia: [R] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [p] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
        "backdrop-invert": [{ "backdrop-invert": [g] }],
        "backdrop-opacity": [{ "backdrop-opacity": [A] }],
        "backdrop-saturate": [{ "backdrop-saturate": [j] }],
        "backdrop-sepia": [{ "backdrop-sepia": [R] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [a] }],
        "border-spacing-x": [{ "border-spacing-x": [a] }],
        "border-spacing-y": [{ "border-spacing-y": [a] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", K] }],
        duration: [{ duration: se() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", K] }],
        delay: [{ delay: se() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", K] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [P] }],
        "scale-x": [{ "scale-x": [P] }],
        "scale-y": [{ "scale-y": [P] }],
        rotate: [{ rotate: [dt, K] }],
        "translate-x": [{ "translate-x": [V] }],
        "translate-y": [{ "translate-y": [V] }],
        "skew-x": [{ "skew-x": [z] }],
        "skew-y": [{ "skew-y": [z] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              K,
            ],
          },
        ],
        accent: [{ accent: ["auto", t] }],
        appearance: ["appearance-none"],
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
              K,
            ],
          },
        ],
        "caret-color": [{ caret: [t] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [
          { touch: ["auto", "none", "pinch-zoom", "manipulation", { pan: ["x", "left", "right", "y", "up", "down"] }] },
        ],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", K] }],
        fill: [{ fill: [t, "none"] }],
        "stroke-w": [{ stroke: [xe, St] }],
        stroke: [{ stroke: [t, "none"] }],
        sr: ["sr-only", "not-sr-only"],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
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
        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
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
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  }
  var ft = _a(Na);
  const Qn = {
      view({ attrs: t }) {
        const e = { xs: "w-3 h-3", sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6", xl: "w-8 h-8" },
          { class: r, size: n = "sm", ...i } = t,
          o = ft(e[n], r);
        return h(
          "svg",
          { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 7", ...i },
          h("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "m1 1.444 4 3.791 4-3.79",
          }),
        );
      },
    },
    Da = {
      view({ attrs: t }) {
        const e = { xs: "w-3 h-3", sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6", xl: "w-8 h-8" },
          { class: r, size: n = "sm", ...i } = t,
          o = ft(e[n], r);
        return h(
          "svg",
          { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 11", ...i },
          h("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "m5 1.549-4 3.79 4 3.792",
          }),
        );
      },
    },
    ei = {
      view({ attrs: t }) {
        const e = { xs: "w-3 h-3", sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6", xl: "w-8 h-8" },
          { class: r, size: n = "sm", ...i } = t,
          o = ft(e[n], r);
        return h(
          "svg",
          { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 11", ...i },
          h("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "m1 9.13 4-3.79-4-3.791",
          }),
        );
      },
    },
    Ha = {
      view({ attrs: t }) {
        const e = { xs: "w-3 h-3", sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6", xl: "w-8 h-8" },
          { class: r, size: n = "sm", ...i } = t,
          o = ft(e[n], r);
        return h(
          "svg",
          { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 7", ...i },
          h("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "m9 5.235-4-3.79-4 3.79",
          }),
        );
      },
    },
    $a = {
      view({ attrs: t }) {
        const e = { xs: "w-3 h-3", sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6", xl: "w-8 h-8" },
          { class: r, size: n = "sm", ...i } = t,
          o = ft(e[n], r);
        return h(
          "svg",
          { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", ...i },
          h("path", {
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6",
          }),
        );
      },
    },
    Ba = {
      isOpen: !1,
      flush: !1,
      view({ attrs: t, children: e, state: r }) {
        const { class: n, as: i = "h2", arrowIcon: o = Qn, theme: a = {}, ...s } = t,
          c = O(Pt.title, a);
        return h(
          "button",
          {
            class: I(c.base, c.flush[r.flush ? "on" : "off"], c.open[r.isOpen ? "on" : "off"], n),
            type: "button",
            onclick: () => {
              r.isOpen = !r.isOpen;
            },
            ...s,
          },
          [
            h(i, { class: c.heading }, e),
            o && h(o, { "aria-hidden": "true", class: I(c.arrow.base, c.arrow.open[r.isOpen ? "on" : "off"]) }),
          ],
        );
      },
    };
  var qa = (function () {
      function t(e, r) {
        r === void 0 && (r = []), (this._eventType = e), (this._eventFunctions = r);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._eventFunctions.forEach(function (r) {
            typeof window < "u" && window.addEventListener(e._eventType, r);
          });
        }),
        t
      );
    })(),
    Ga = (function () {
      function t() {
        this._instances = {
          Accordion: {},
          Carousel: {},
          Collapse: {},
          Dial: {},
          Dismiss: {},
          Drawer: {},
          Dropdown: {},
          Modal: {},
          Popover: {},
          Tabs: {},
          Tooltip: {},
          InputCounter: {},
        };
      }
      return (
        (t.prototype.addInstance = function (e, r, n, i) {
          if ((i === void 0 && (i = !1), !this._instances[e]))
            return console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1;
          if (this._instances[e][n] && !i) {
            console.warn("Flowbite: Instance with ID ".concat(n, " already exists."));
            return;
          }
          i && this._instances[e][n] && this._instances[e][n].destroyAndRemoveInstance(),
            (this._instances[e][n || this._generateRandomId()] = r);
        }),
        (t.prototype.getAllInstances = function () {
          return this._instances;
        }),
        (t.prototype.getInstances = function (e) {
          return this._instances[e]
            ? this._instances[e]
            : (console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1);
        }),
        (t.prototype.getInstance = function (e, r) {
          if (this._componentAndInstanceCheck(e, r)) {
            if (!this._instances[e][r]) {
              console.warn("Flowbite: Instance with ID ".concat(r, " does not exist."));
              return;
            }
            return this._instances[e][r];
          }
        }),
        (t.prototype.destroyAndRemoveInstance = function (e, r) {
          this._componentAndInstanceCheck(e, r) && (this.destroyInstanceObject(e, r), this.removeInstance(e, r));
        }),
        (t.prototype.removeInstance = function (e, r) {
          this._componentAndInstanceCheck(e, r) && delete this._instances[e][r];
        }),
        (t.prototype.destroyInstanceObject = function (e, r) {
          this._componentAndInstanceCheck(e, r) && this._instances[e][r].destroy();
        }),
        (t.prototype.instanceExists = function (e, r) {
          return !(!this._instances[e] || !this._instances[e][r]);
        }),
        (t.prototype._generateRandomId = function () {
          return Math.random().toString(36).substr(2, 9);
        }),
        (t.prototype._componentAndInstanceCheck = function (e, r) {
          return this._instances[e]
            ? this._instances[e][r]
              ? !0
              : (console.warn("Flowbite: Instance with ID ".concat(r, " does not exist.")), !1)
            : (console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1);
        }),
        t
      );
    })(),
    X = new Ga();
  typeof window < "u" && (window.FlowbiteInstances = X);
  var jt = function () {
      return (
        (jt =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        jt.apply(this, arguments)
      );
    },
    Rt = {
      alwaysOpen: !1,
      activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
      inactiveClasses: "text-gray-500 dark:text-gray-400",
      onOpen: function () {},
      onClose: function () {},
      onToggle: function () {},
    },
    Va = { id: null, override: !0 },
    Cr = (function () {
      function t(e, r, n, i) {
        e === void 0 && (e = null),
          r === void 0 && (r = []),
          n === void 0 && (n = Rt),
          i === void 0 && (i = Va),
          (this._instanceId = i.id ? i.id : e.id),
          (this._accordionEl = e),
          (this._items = r),
          (this._options = jt(jt({}, Rt), n)),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Accordion", this, this._instanceId, i.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._items.length &&
            !this._initialized &&
            (this._items.forEach(function (r) {
              r.active && e.open(r.id);
              var n = function () {
                e.toggle(r.id);
              };
              r.triggerEl.addEventListener("click", n), (r.clickHandler = n);
            }),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          this._items.length &&
            this._initialized &&
            (this._items.forEach(function (e) {
              e.triggerEl.removeEventListener("click", e.clickHandler), delete e.clickHandler;
            }),
            (this._initialized = !1));
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Accordion", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype.getItem = function (e) {
          return this._items.filter(function (r) {
            return r.id === e;
          })[0];
        }),
        (t.prototype.open = function (e) {
          var r,
            n,
            i = this,
            o = this.getItem(e);
          this._options.alwaysOpen ||
            this._items.map(function (a) {
              var s, c;
              a !== o &&
                ((s = a.triggerEl.classList).remove.apply(s, i._options.activeClasses.split(" ")),
                (c = a.triggerEl.classList).add.apply(c, i._options.inactiveClasses.split(" ")),
                a.targetEl.classList.add("hidden"),
                a.triggerEl.setAttribute("aria-expanded", "false"),
                (a.active = !1),
                a.iconEl && a.iconEl.classList.remove("rotate-180"));
            }),
            (r = o.triggerEl.classList).add.apply(r, this._options.activeClasses.split(" ")),
            (n = o.triggerEl.classList).remove.apply(n, this._options.inactiveClasses.split(" ")),
            o.triggerEl.setAttribute("aria-expanded", "true"),
            o.targetEl.classList.remove("hidden"),
            (o.active = !0),
            o.iconEl && o.iconEl.classList.add("rotate-180"),
            this._options.onOpen(this, o);
        }),
        (t.prototype.toggle = function (e) {
          var r = this.getItem(e);
          r.active ? this.close(e) : this.open(e), this._options.onToggle(this, r);
        }),
        (t.prototype.close = function (e) {
          var r,
            n,
            i = this.getItem(e);
          (r = i.triggerEl.classList).remove.apply(r, this._options.activeClasses.split(" ")),
            (n = i.triggerEl.classList).add.apply(n, this._options.inactiveClasses.split(" ")),
            i.targetEl.classList.add("hidden"),
            i.triggerEl.setAttribute("aria-expanded", "false"),
            (i.active = !1),
            i.iconEl && i.iconEl.classList.remove("rotate-180"),
            this._options.onClose(this, i);
        }),
        t
      );
    })();
  function Ar() {
    document.querySelectorAll("[data-accordion]").forEach(function (t) {
      var e = t.getAttribute("data-accordion"),
        r = t.getAttribute("data-active-classes"),
        n = t.getAttribute("data-inactive-classes"),
        i = [];
      t.querySelectorAll("[data-accordion-target]").forEach(function (o) {
        if (o.closest("[data-accordion]") === t) {
          var a = {
            id: o.getAttribute("data-accordion-target"),
            triggerEl: o,
            targetEl: document.querySelector(o.getAttribute("data-accordion-target")),
            iconEl: o.querySelector("[data-accordion-icon]"),
            active: o.getAttribute("aria-expanded") === "true",
          };
          i.push(a);
        }
      }),
        new Cr(t, i, {
          alwaysOpen: e === "open",
          activeClasses: r || Rt.activeClasses,
          inactiveClasses: n || Rt.inactiveClasses,
        });
    });
  }
  typeof window < "u" && ((window.Accordion = Cr), (window.initAccordions = Ar));
  var Mt = function () {
      return (
        (Mt =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Mt.apply(this, arguments)
      );
    },
    ti = { onCollapse: function () {}, onExpand: function () {}, onToggle: function () {} },
    Fa = { id: null, override: !0 },
    Tr = (function () {
      function t(e, r, n, i) {
        e === void 0 && (e = null),
          r === void 0 && (r = null),
          n === void 0 && (n = ti),
          i === void 0 && (i = Fa),
          (this._instanceId = i.id ? i.id : e.id),
          (this._targetEl = e),
          (this._triggerEl = r),
          (this._options = Mt(Mt({}, ti), n)),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Collapse", this, this._instanceId, i.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            (this._triggerEl.hasAttribute("aria-expanded")
              ? (this._visible = this._triggerEl.getAttribute("aria-expanded") === "true")
              : (this._visible = !this._targetEl.classList.contains("hidden")),
            (this._clickHandler = function () {
              e.toggle();
            }),
            this._triggerEl.addEventListener("click", this._clickHandler),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          this._triggerEl &&
            this._initialized &&
            (this._triggerEl.removeEventListener("click", this._clickHandler), (this._initialized = !1));
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Collapse", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype.collapse = function () {
          this._targetEl.classList.add("hidden"),
            this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"),
            (this._visible = !1),
            this._options.onCollapse(this);
        }),
        (t.prototype.expand = function () {
          this._targetEl.classList.remove("hidden"),
            this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"),
            (this._visible = !0),
            this._options.onExpand(this);
        }),
        (t.prototype.toggle = function () {
          this._visible ? this.collapse() : this.expand(), this._options.onToggle(this);
        }),
        t
      );
    })();
  function Lr() {
    document.querySelectorAll("[data-collapse-toggle]").forEach(function (t) {
      var e = t.getAttribute("data-collapse-toggle"),
        r = document.getElementById(e);
      r
        ? X.instanceExists("Collapse", r.getAttribute("id"))
          ? new Tr(r, t, {}, { id: r.getAttribute("id") + "_" + X._generateRandomId() })
          : new Tr(r, t)
        : console.error(
            'The target element with id "'.concat(
              e,
              '" does not exist. Please check the data-collapse-toggle attribute.',
            ),
          );
    });
  }
  typeof window < "u" && ((window.Collapse = Tr), (window.initCollapses = Lr));
  var qe = function () {
      return (
        (qe =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        qe.apply(this, arguments)
      );
    },
    Nt = {
      defaultPosition: 0,
      indicators: {
        items: [],
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
      },
      interval: 3e3,
      onNext: function () {},
      onPrev: function () {},
      onChange: function () {},
    },
    Wa = { id: null, override: !0 },
    ri = (function () {
      function t(e, r, n, i) {
        e === void 0 && (e = null),
          r === void 0 && (r = []),
          n === void 0 && (n = Nt),
          i === void 0 && (i = Wa),
          (this._instanceId = i.id ? i.id : e.id),
          (this._carouselEl = e),
          (this._items = r),
          (this._options = qe(qe(qe({}, Nt), n), { indicators: qe(qe({}, Nt.indicators), n.indicators) })),
          (this._activeItem = this.getItem(this._options.defaultPosition)),
          (this._indicators = this._options.indicators.items),
          (this._intervalDuration = this._options.interval),
          (this._intervalInstance = null),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Carousel", this, this._instanceId, i.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._items.length &&
            !this._initialized &&
            (this._items.map(function (r) {
              r.el.classList.add("absolute", "inset-0", "transition-transform", "transform");
            }),
            this._getActiveItem() ? this.slideTo(this._getActiveItem().position) : this.slideTo(0),
            this._indicators.map(function (r, n) {
              r.el.addEventListener("click", function () {
                e.slideTo(n);
              });
            }),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          this._initialized && (this._initialized = !1);
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Carousel", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype.getItem = function (e) {
          return this._items[e];
        }),
        (t.prototype.slideTo = function (e) {
          var r = this._items[e],
            n = {
              left: r.position === 0 ? this._items[this._items.length - 1] : this._items[r.position - 1],
              middle: r,
              right: r.position === this._items.length - 1 ? this._items[0] : this._items[r.position + 1],
            };
          this._rotate(n),
            this._setActiveItem(r),
            this._intervalInstance && (this.pause(), this.cycle()),
            this._options.onChange(this);
        }),
        (t.prototype.next = function () {
          var e = this._getActiveItem(),
            r = null;
          e.position === this._items.length - 1 ? (r = this._items[0]) : (r = this._items[e.position + 1]),
            this.slideTo(r.position),
            this._options.onNext(this);
        }),
        (t.prototype.prev = function () {
          var e = this._getActiveItem(),
            r = null;
          e.position === 0 ? (r = this._items[this._items.length - 1]) : (r = this._items[e.position - 1]),
            this.slideTo(r.position),
            this._options.onPrev(this);
        }),
        (t.prototype._rotate = function (e) {
          this._items.map(function (r) {
            r.el.classList.add("hidden");
          }),
            e.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"),
            e.left.el.classList.add("-translate-x-full", "z-10"),
            e.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10"),
            e.middle.el.classList.add("translate-x-0", "z-20"),
            e.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"),
            e.right.el.classList.add("translate-x-full", "z-10");
        }),
        (t.prototype.cycle = function () {
          var e = this;
          typeof window < "u" &&
            (this._intervalInstance = window.setInterval(function () {
              e.next();
            }, this._intervalDuration));
        }),
        (t.prototype.pause = function () {
          clearInterval(this._intervalInstance);
        }),
        (t.prototype._getActiveItem = function () {
          return this._activeItem;
        }),
        (t.prototype._setActiveItem = function (e) {
          var r,
            n,
            i = this;
          this._activeItem = e;
          var o = e.position;
          this._indicators.length &&
            (this._indicators.map(function (a) {
              var s, c;
              a.el.setAttribute("aria-current", "false"),
                (s = a.el.classList).remove.apply(s, i._options.indicators.activeClasses.split(" ")),
                (c = a.el.classList).add.apply(c, i._options.indicators.inactiveClasses.split(" "));
            }),
            (r = this._indicators[o].el.classList).add.apply(r, this._options.indicators.activeClasses.split(" ")),
            (n = this._indicators[o].el.classList).remove.apply(n, this._options.indicators.inactiveClasses.split(" ")),
            this._indicators[o].el.setAttribute("aria-current", "true"));
        }),
        t
      );
    })();
  function zr() {
    document.querySelectorAll("[data-carousel]").forEach(function (t) {
      var e = t.getAttribute("data-carousel-interval"),
        r = t.getAttribute("data-carousel") === "slide",
        n = [],
        i = 0;
      t.querySelectorAll("[data-carousel-item]").length &&
        Array.from(t.querySelectorAll("[data-carousel-item]")).map(function (p, f) {
          n.push({ position: f, el: p }), p.getAttribute("data-carousel-item") === "active" && (i = f);
        });
      var o = [];
      t.querySelectorAll("[data-carousel-slide-to]").length &&
        Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function (p) {
          o.push({ position: parseInt(p.getAttribute("data-carousel-slide-to")), el: p });
        });
      var a = new ri(t, n, { defaultPosition: i, indicators: { items: o }, interval: e || Nt.interval });
      r && a.cycle();
      var s = t.querySelector("[data-carousel-next]"),
        c = t.querySelector("[data-carousel-prev]");
      s &&
        s.addEventListener("click", function () {
          a.next();
        }),
        c &&
          c.addEventListener("click", function () {
            a.prev();
          });
    });
  }
  typeof window < "u" && ((window.Carousel = ri), (window.initCarousels = zr));
  var Dt = function () {
      return (
        (Dt =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Dt.apply(this, arguments)
      );
    },
    ni = { transition: "transition-opacity", duration: 300, timing: "ease-out", onHide: function () {} },
    Ua = { id: null, override: !0 },
    ii = (function () {
      function t(e, r, n, i) {
        e === void 0 && (e = null),
          r === void 0 && (r = null),
          n === void 0 && (n = ni),
          i === void 0 && (i = Ua),
          (this._instanceId = i.id ? i.id : e.id),
          (this._targetEl = e),
          (this._triggerEl = r),
          (this._options = Dt(Dt({}, ni), n)),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Dismiss", this, this._instanceId, i.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            ((this._clickHandler = function () {
              e.hide();
            }),
            this._triggerEl.addEventListener("click", this._clickHandler),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          this._triggerEl &&
            this._initialized &&
            (this._triggerEl.removeEventListener("click", this._clickHandler), (this._initialized = !1));
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Dismiss", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype.hide = function () {
          var e = this;
          this._targetEl.classList.add(
            this._options.transition,
            "duration-".concat(this._options.duration),
            this._options.timing,
            "opacity-0",
          ),
            setTimeout(function () {
              e._targetEl.classList.add("hidden");
            }, this._options.duration),
            this._options.onHide(this, this._targetEl);
        }),
        t
      );
    })();
  function Or() {
    document.querySelectorAll("[data-dismiss-target]").forEach(function (t) {
      var e = t.getAttribute("data-dismiss-target"),
        r = document.querySelector(e);
      r
        ? new ii(r, t)
        : console.error(
            'The dismiss element with id "'.concat(
              e,
              '" does not exist. Please check the data-dismiss-target attribute.',
            ),
          );
    });
  }
  typeof window < "u" && ((window.Dismiss = ii), (window.initDismisses = Or));
  var pe = "top",
    me = "bottom",
    ve = "right",
    ge = "left",
    Pr = "auto",
    pt = [pe, me, ve, ge],
    Ze = "start",
    gt = "end",
    Ka = "clippingParents",
    oi = "viewport",
    ht = "popper",
    Xa = "reference",
    ai = pt.reduce(function (t, e) {
      return t.concat([e + "-" + Ze, e + "-" + gt]);
    }, []),
    si = [].concat(pt, [Pr]).reduce(function (t, e) {
      return t.concat([e, e + "-" + Ze, e + "-" + gt]);
    }, []),
    Ya = "beforeRead",
    Ja = "read",
    Za = "afterRead",
    Qa = "beforeMain",
    es = "main",
    ts = "afterMain",
    rs = "beforeWrite",
    ns = "write",
    is = "afterWrite",
    os = [Ya, Ja, Za, Qa, es, ts, rs, ns, is];
  function _e(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function be(t) {
    if (t == null) return window;
    if (t.toString() !== "[object Window]") {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Ge(t) {
    var e = be(t).Element;
    return t instanceof e || t instanceof Element;
  }
  function ye(t) {
    var e = be(t).HTMLElement;
    return t instanceof e || t instanceof HTMLElement;
  }
  function Sr(t) {
    if (typeof ShadowRoot > "u") return !1;
    var e = be(t).ShadowRoot;
    return t instanceof e || t instanceof ShadowRoot;
  }
  function as(t) {
    var e = t.state;
    Object.keys(e.elements).forEach(function (r) {
      var n = e.styles[r] || {},
        i = e.attributes[r] || {},
        o = e.elements[r];
      !ye(o) ||
        !_e(o) ||
        (Object.assign(o.style, n),
        Object.keys(i).forEach(function (a) {
          var s = i[a];
          s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
        }));
    });
  }
  function ss(t) {
    var e = t.state,
      r = {
        popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" },
        arrow: { position: "absolute" },
        reference: {},
      };
    return (
      Object.assign(e.elements.popper.style, r.popper),
      (e.styles = r),
      e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow),
      function () {
        Object.keys(e.elements).forEach(function (n) {
          var i = e.elements[n],
            o = e.attributes[n] || {},
            a = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]),
            s = a.reduce(function (c, p) {
              return (c[p] = ""), c;
            }, {});
          !ye(i) ||
            !_e(i) ||
            (Object.assign(i.style, s),
            Object.keys(o).forEach(function (c) {
              i.removeAttribute(c);
            }));
        });
      }
    );
  }
  const ls = { name: "applyStyles", enabled: !0, phase: "write", fn: as, effect: ss, requires: ["computeStyles"] };
  function Ee(t) {
    return t.split("-")[0];
  }
  var Ve = Math.max,
    Ht = Math.min,
    Qe = Math.round;
  function jr() {
    var t = navigator.userAgentData;
    return t != null && t.brands && Array.isArray(t.brands)
      ? t.brands
          .map(function (e) {
            return e.brand + "/" + e.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function li() {
    return !/^((?!chrome|android).)*safari/i.test(jr());
  }
  function et(t, e, r) {
    e === void 0 && (e = !1), r === void 0 && (r = !1);
    var n = t.getBoundingClientRect(),
      i = 1,
      o = 1;
    e &&
      ye(t) &&
      ((i = (t.offsetWidth > 0 && Qe(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && Qe(n.height) / t.offsetHeight) || 1));
    var a = Ge(t) ? be(t) : window,
      s = a.visualViewport,
      c = !li() && r,
      p = (n.left + (c && s ? s.offsetLeft : 0)) / i,
      f = (n.top + (c && s ? s.offsetTop : 0)) / o,
      g = n.width / i,
      v = n.height / o;
    return { width: g, height: v, top: f, right: p + g, bottom: f + v, left: p, x: p, y: f };
  }
  function Rr(t) {
    var e = et(t),
      r = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - r) <= 1 && (r = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: r, height: n }
    );
  }
  function ci(t, e) {
    var r = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (r && Sr(r)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function Ae(t) {
    return be(t).getComputedStyle(t);
  }
  function cs(t) {
    return ["table", "td", "th"].indexOf(_e(t)) >= 0;
  }
  function Se(t) {
    return ((Ge(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function $t(t) {
    return _e(t) === "html" ? t : t.assignedSlot || t.parentNode || (Sr(t) ? t.host : null) || Se(t);
  }
  function di(t) {
    return !ye(t) || Ae(t).position === "fixed" ? null : t.offsetParent;
  }
  function ds(t) {
    var e = /firefox/i.test(jr()),
      r = /Trident/i.test(jr());
    if (r && ye(t)) {
      var n = Ae(t);
      if (n.position === "fixed") return null;
    }
    var i = $t(t);
    for (Sr(i) && (i = i.host); ye(i) && ["html", "body"].indexOf(_e(i)) < 0; ) {
      var o = Ae(i);
      if (
        o.transform !== "none" ||
        o.perspective !== "none" ||
        o.contain === "paint" ||
        ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
        (e && o.willChange === "filter") ||
        (e && o.filter && o.filter !== "none")
      )
        return i;
      i = i.parentNode;
    }
    return null;
  }
  function bt(t) {
    for (var e = be(t), r = di(t); r && cs(r) && Ae(r).position === "static"; ) r = di(r);
    return r && (_e(r) === "html" || (_e(r) === "body" && Ae(r).position === "static")) ? e : r || ds(t) || e;
  }
  function Mr(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function mt(t, e, r) {
    return Ve(t, Ht(e, r));
  }
  function us(t, e, r) {
    var n = mt(t, e, r);
    return n > r ? r : n;
  }
  function ui() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function fi(t) {
    return Object.assign({}, ui(), t);
  }
  function pi(t, e) {
    return e.reduce(function (r, n) {
      return (r[n] = t), r;
    }, {});
  }
  var fs = function (e, r) {
    return (
      (e = typeof e == "function" ? e(Object.assign({}, r.rects, { placement: r.placement })) : e),
      fi(typeof e != "number" ? e : pi(e, pt))
    );
  };
  function ps(t) {
    var e,
      r = t.state,
      n = t.name,
      i = t.options,
      o = r.elements.arrow,
      a = r.modifiersData.popperOffsets,
      s = Ee(r.placement),
      c = Mr(s),
      p = [ge, ve].indexOf(s) >= 0,
      f = p ? "height" : "width";
    if (!(!o || !a)) {
      var g = fs(i.padding, r),
        v = Rr(o),
        w = c === "y" ? pe : ge,
        k = c === "y" ? me : ve,
        b = r.rects.reference[f] + r.rects.reference[c] - a[c] - r.rects.popper[f],
        x = a[c] - r.rects.reference[c],
        A = bt(o),
        _ = A ? (c === "y" ? A.clientHeight || 0 : A.clientWidth || 0) : 0,
        j = b / 2 - x / 2,
        P = g[w],
        R = _ - v[f] - g[k],
        z = _ / 2 - v[f] / 2 + j,
        D = mt(P, z, R),
        V = c;
      r.modifiersData[n] = ((e = {}), (e[V] = D), (e.centerOffset = D - z), e);
    }
  }
  function gs(t) {
    var e = t.state,
      r = t.options,
      n = r.element,
      i = n === void 0 ? "[data-popper-arrow]" : n;
    i != null &&
      ((typeof i == "string" && ((i = e.elements.popper.querySelector(i)), !i)) ||
        (ci(e.elements.popper, i) && (e.elements.arrow = i)));
  }
  const hs = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: ps,
    effect: gs,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function tt(t) {
    return t.split("-")[1];
  }
  var bs = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function ms(t, e) {
    var r = t.x,
      n = t.y,
      i = e.devicePixelRatio || 1;
    return { x: Qe(r * i) / i || 0, y: Qe(n * i) / i || 0 };
  }
  function gi(t) {
    var e,
      r = t.popper,
      n = t.popperRect,
      i = t.placement,
      o = t.variation,
      a = t.offsets,
      s = t.position,
      c = t.gpuAcceleration,
      p = t.adaptive,
      f = t.roundOffsets,
      g = t.isFixed,
      v = a.x,
      w = v === void 0 ? 0 : v,
      k = a.y,
      b = k === void 0 ? 0 : k,
      x = typeof f == "function" ? f({ x: w, y: b }) : { x: w, y: b };
    (w = x.x), (b = x.y);
    var A = a.hasOwnProperty("x"),
      _ = a.hasOwnProperty("y"),
      j = ge,
      P = pe,
      R = window;
    if (p) {
      var z = bt(r),
        D = "clientHeight",
        V = "clientWidth";
      if (
        (z === be(r) &&
          ((z = Se(r)), Ae(z).position !== "static" && s === "absolute" && ((D = "scrollHeight"), (V = "scrollWidth"))),
        (z = z),
        i === pe || ((i === ge || i === ve) && o === gt))
      ) {
        P = me;
        var J = g && z === R && R.visualViewport ? R.visualViewport.height : z[D];
        (b -= J - n.height), (b *= c ? 1 : -1);
      }
      if (i === ge || ((i === pe || i === me) && o === gt)) {
        j = ve;
        var H = g && z === R && R.visualViewport ? R.visualViewport.width : z[V];
        (w -= H - n.width), (w *= c ? 1 : -1);
      }
    }
    var U = Object.assign({ position: s }, p && bs),
      C = f === !0 ? ms({ x: w, y: b }, be(r)) : { x: w, y: b };
    if (((w = C.x), (b = C.y), c)) {
      var $;
      return Object.assign(
        {},
        U,
        (($ = {}),
        ($[P] = _ ? "0" : ""),
        ($[j] = A ? "0" : ""),
        ($.transform =
          (R.devicePixelRatio || 1) <= 1
            ? "translate(" + w + "px, " + b + "px)"
            : "translate3d(" + w + "px, " + b + "px, 0)"),
        $),
      );
    }
    return Object.assign(
      {},
      U,
      ((e = {}), (e[P] = _ ? b + "px" : ""), (e[j] = A ? w + "px" : ""), (e.transform = ""), e),
    );
  }
  function vs(t) {
    var e = t.state,
      r = t.options,
      n = r.gpuAcceleration,
      i = n === void 0 ? !0 : n,
      o = r.adaptive,
      a = o === void 0 ? !0 : o,
      s = r.roundOffsets,
      c = s === void 0 ? !0 : s,
      p = {
        placement: Ee(e.placement),
        variation: tt(e.placement),
        popper: e.elements.popper,
        popperRect: e.rects.popper,
        gpuAcceleration: i,
        isFixed: e.options.strategy === "fixed",
      };
    e.modifiersData.popperOffsets != null &&
      (e.styles.popper = Object.assign(
        {},
        e.styles.popper,
        gi(
          Object.assign({}, p, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: a,
            roundOffsets: c,
          }),
        ),
      )),
      e.modifiersData.arrow != null &&
        (e.styles.arrow = Object.assign(
          {},
          e.styles.arrow,
          gi(
            Object.assign({}, p, {
              offsets: e.modifiersData.arrow,
              position: "absolute",
              adaptive: !1,
              roundOffsets: c,
            }),
          ),
        )),
      (e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }));
  }
  const ys = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: vs, data: {} };
  var Bt = { passive: !0 };
  function ws(t) {
    var e = t.state,
      r = t.instance,
      n = t.options,
      i = n.scroll,
      o = i === void 0 ? !0 : i,
      a = n.resize,
      s = a === void 0 ? !0 : a,
      c = be(e.elements.popper),
      p = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return (
      o &&
        p.forEach(function (f) {
          f.addEventListener("scroll", r.update, Bt);
        }),
      s && c.addEventListener("resize", r.update, Bt),
      function () {
        o &&
          p.forEach(function (f) {
            f.removeEventListener("scroll", r.update, Bt);
          }),
          s && c.removeEventListener("resize", r.update, Bt);
      }
    );
  }
  const xs = { name: "eventListeners", enabled: !0, phase: "write", fn: function () {}, effect: ws, data: {} };
  var ks = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function qt(t) {
    return t.replace(/left|right|bottom|top/g, function (e) {
      return ks[e];
    });
  }
  var _s = { start: "end", end: "start" };
  function hi(t) {
    return t.replace(/start|end/g, function (e) {
      return _s[e];
    });
  }
  function Nr(t) {
    var e = be(t),
      r = e.pageXOffset,
      n = e.pageYOffset;
    return { scrollLeft: r, scrollTop: n };
  }
  function Dr(t) {
    return et(Se(t)).left + Nr(t).scrollLeft;
  }
  function Es(t, e) {
    var r = be(t),
      n = Se(t),
      i = r.visualViewport,
      o = n.clientWidth,
      a = n.clientHeight,
      s = 0,
      c = 0;
    if (i) {
      (o = i.width), (a = i.height);
      var p = li();
      (p || (!p && e === "fixed")) && ((s = i.offsetLeft), (c = i.offsetTop));
    }
    return { width: o, height: a, x: s + Dr(t), y: c };
  }
  function Is(t) {
    var e,
      r = Se(t),
      n = Nr(t),
      i = (e = t.ownerDocument) == null ? void 0 : e.body,
      o = Ve(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
      a = Ve(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
      s = -n.scrollLeft + Dr(t),
      c = -n.scrollTop;
    return (
      Ae(i || r).direction === "rtl" && (s += Ve(r.clientWidth, i ? i.clientWidth : 0) - o),
      { width: o, height: a, x: s, y: c }
    );
  }
  function Hr(t) {
    var e = Ae(t),
      r = e.overflow,
      n = e.overflowX,
      i = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + i + n);
  }
  function bi(t) {
    return ["html", "body", "#document"].indexOf(_e(t)) >= 0 ? t.ownerDocument.body : ye(t) && Hr(t) ? t : bi($t(t));
  }
  function vt(t, e) {
    var r;
    e === void 0 && (e = []);
    var n = bi(t),
      i = n === ((r = t.ownerDocument) == null ? void 0 : r.body),
      o = be(n),
      a = i ? [o].concat(o.visualViewport || [], Hr(n) ? n : []) : n,
      s = e.concat(a);
    return i ? s : s.concat(vt($t(a)));
  }
  function $r(t) {
    return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
  }
  function Cs(t, e) {
    var r = et(t, !1, e === "fixed");
    return (
      (r.top = r.top + t.clientTop),
      (r.left = r.left + t.clientLeft),
      (r.bottom = r.top + t.clientHeight),
      (r.right = r.left + t.clientWidth),
      (r.width = t.clientWidth),
      (r.height = t.clientHeight),
      (r.x = r.left),
      (r.y = r.top),
      r
    );
  }
  function mi(t, e, r) {
    return e === oi ? $r(Es(t, r)) : Ge(e) ? Cs(e, r) : $r(Is(Se(t)));
  }
  function As(t) {
    var e = vt($t(t)),
      r = ["absolute", "fixed"].indexOf(Ae(t).position) >= 0,
      n = r && ye(t) ? bt(t) : t;
    return Ge(n)
      ? e.filter(function (i) {
          return Ge(i) && ci(i, n) && _e(i) !== "body";
        })
      : [];
  }
  function Ts(t, e, r, n) {
    var i = e === "clippingParents" ? As(t) : [].concat(e),
      o = [].concat(i, [r]),
      a = o[0],
      s = o.reduce(function (c, p) {
        var f = mi(t, p, n);
        return (
          (c.top = Ve(f.top, c.top)),
          (c.right = Ht(f.right, c.right)),
          (c.bottom = Ht(f.bottom, c.bottom)),
          (c.left = Ve(f.left, c.left)),
          c
        );
      }, mi(t, a, n));
    return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
  }
  function vi(t) {
    var e = t.reference,
      r = t.element,
      n = t.placement,
      i = n ? Ee(n) : null,
      o = n ? tt(n) : null,
      a = e.x + e.width / 2 - r.width / 2,
      s = e.y + e.height / 2 - r.height / 2,
      c;
    switch (i) {
      case pe:
        c = { x: a, y: e.y - r.height };
        break;
      case me:
        c = { x: a, y: e.y + e.height };
        break;
      case ve:
        c = { x: e.x + e.width, y: s };
        break;
      case ge:
        c = { x: e.x - r.width, y: s };
        break;
      default:
        c = { x: e.x, y: e.y };
    }
    var p = i ? Mr(i) : null;
    if (p != null) {
      var f = p === "y" ? "height" : "width";
      switch (o) {
        case Ze:
          c[p] = c[p] - (e[f] / 2 - r[f] / 2);
          break;
        case gt:
          c[p] = c[p] + (e[f] / 2 - r[f] / 2);
          break;
      }
    }
    return c;
  }
  function yt(t, e) {
    e === void 0 && (e = {});
    var r = e,
      n = r.placement,
      i = n === void 0 ? t.placement : n,
      o = r.strategy,
      a = o === void 0 ? t.strategy : o,
      s = r.boundary,
      c = s === void 0 ? Ka : s,
      p = r.rootBoundary,
      f = p === void 0 ? oi : p,
      g = r.elementContext,
      v = g === void 0 ? ht : g,
      w = r.altBoundary,
      k = w === void 0 ? !1 : w,
      b = r.padding,
      x = b === void 0 ? 0 : b,
      A = fi(typeof x != "number" ? x : pi(x, pt)),
      _ = v === ht ? Xa : ht,
      j = t.rects.popper,
      P = t.elements[k ? _ : v],
      R = Ts(Ge(P) ? P : P.contextElement || Se(t.elements.popper), c, f, a),
      z = et(t.elements.reference),
      D = vi({ reference: z, element: j, strategy: "absolute", placement: i }),
      V = $r(Object.assign({}, j, D)),
      J = v === ht ? V : z,
      H = {
        top: R.top - J.top + A.top,
        bottom: J.bottom - R.bottom + A.bottom,
        left: R.left - J.left + A.left,
        right: J.right - R.right + A.right,
      },
      U = t.modifiersData.offset;
    if (v === ht && U) {
      var C = U[i];
      Object.keys(H).forEach(function ($) {
        var L = [ve, me].indexOf($) >= 0 ? 1 : -1,
          B = [pe, me].indexOf($) >= 0 ? "y" : "x";
        H[$] += C[B] * L;
      });
    }
    return H;
  }
  function Ls(t, e) {
    e === void 0 && (e = {});
    var r = e,
      n = r.placement,
      i = r.boundary,
      o = r.rootBoundary,
      a = r.padding,
      s = r.flipVariations,
      c = r.allowedAutoPlacements,
      p = c === void 0 ? si : c,
      f = tt(n),
      g = f
        ? s
          ? ai
          : ai.filter(function (k) {
              return tt(k) === f;
            })
        : pt,
      v = g.filter(function (k) {
        return p.indexOf(k) >= 0;
      });
    v.length === 0 && (v = g);
    var w = v.reduce(function (k, b) {
      return (k[b] = yt(t, { placement: b, boundary: i, rootBoundary: o, padding: a })[Ee(b)]), k;
    }, {});
    return Object.keys(w).sort(function (k, b) {
      return w[k] - w[b];
    });
  }
  function zs(t) {
    if (Ee(t) === Pr) return [];
    var e = qt(t);
    return [hi(t), e, hi(e)];
  }
  function Os(t) {
    var e = t.state,
      r = t.options,
      n = t.name;
    if (!e.modifiersData[n]._skip) {
      for (
        var i = r.mainAxis,
          o = i === void 0 ? !0 : i,
          a = r.altAxis,
          s = a === void 0 ? !0 : a,
          c = r.fallbackPlacements,
          p = r.padding,
          f = r.boundary,
          g = r.rootBoundary,
          v = r.altBoundary,
          w = r.flipVariations,
          k = w === void 0 ? !0 : w,
          b = r.allowedAutoPlacements,
          x = e.options.placement,
          A = Ee(x),
          _ = A === x,
          j = c || (_ || !k ? [qt(x)] : zs(x)),
          P = [x].concat(j).reduce(function (he, Ie) {
            return he.concat(
              Ee(Ie) === Pr
                ? Ls(e, {
                    placement: Ie,
                    boundary: f,
                    rootBoundary: g,
                    padding: p,
                    flipVariations: k,
                    allowedAutoPlacements: b,
                  })
                : Ie,
            );
          }, []),
          R = e.rects.reference,
          z = e.rects.popper,
          D = new Map(),
          V = !0,
          J = P[0],
          H = 0;
        H < P.length;
        H++
      ) {
        var U = P[H],
          C = Ee(U),
          $ = tt(U) === Ze,
          L = [pe, me].indexOf(C) >= 0,
          B = L ? "width" : "height",
          S = yt(e, { placement: U, boundary: f, rootBoundary: g, altBoundary: v, padding: p }),
          F = L ? ($ ? ve : ge) : $ ? me : pe;
        R[B] > z[B] && (F = qt(F));
        var Y = qt(F),
          M = [];
        if (
          (o && M.push(S[C] <= 0),
          s && M.push(S[F] <= 0, S[Y] <= 0),
          M.every(function (he) {
            return he;
          }))
        ) {
          (J = U), (V = !1);
          break;
        }
        D.set(U, M);
      }
      if (V)
        for (
          var ee = k ? 3 : 1,
            ie = function (Ie) {
              var Ke = P.find(function (rt) {
                var Ce = D.get(rt);
                if (Ce)
                  return Ce.slice(0, Ie).every(function (nt) {
                    return nt;
                  });
              });
              if (Ke) return (J = Ke), "break";
            },
            se = ee;
          se > 0;
          se--
        ) {
          var Q = ie(se);
          if (Q === "break") break;
        }
      e.placement !== J && ((e.modifiersData[n]._skip = !0), (e.placement = J), (e.reset = !0));
    }
  }
  const Ps = { name: "flip", enabled: !0, phase: "main", fn: Os, requiresIfExists: ["offset"], data: { _skip: !1 } };
  function yi(t, e, r) {
    return (
      r === void 0 && (r = { x: 0, y: 0 }),
      {
        top: t.top - e.height - r.y,
        right: t.right - e.width + r.x,
        bottom: t.bottom - e.height + r.y,
        left: t.left - e.width - r.x,
      }
    );
  }
  function wi(t) {
    return [pe, ve, me, ge].some(function (e) {
      return t[e] >= 0;
    });
  }
  function Ss(t) {
    var e = t.state,
      r = t.name,
      n = e.rects.reference,
      i = e.rects.popper,
      o = e.modifiersData.preventOverflow,
      a = yt(e, { elementContext: "reference" }),
      s = yt(e, { altBoundary: !0 }),
      c = yi(a, n),
      p = yi(s, i, o),
      f = wi(c),
      g = wi(p);
    (e.modifiersData[r] = {
      referenceClippingOffsets: c,
      popperEscapeOffsets: p,
      isReferenceHidden: f,
      hasPopperEscaped: g,
    }),
      (e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": f,
        "data-popper-escaped": g,
      }));
  }
  const js = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Ss };
  function Rs(t, e, r) {
    var n = Ee(t),
      i = [ge, pe].indexOf(n) >= 0 ? -1 : 1,
      o = typeof r == "function" ? r(Object.assign({}, e, { placement: t })) : r,
      a = o[0],
      s = o[1];
    return (a = a || 0), (s = (s || 0) * i), [ge, ve].indexOf(n) >= 0 ? { x: s, y: a } : { x: a, y: s };
  }
  function Ms(t) {
    var e = t.state,
      r = t.options,
      n = t.name,
      i = r.offset,
      o = i === void 0 ? [0, 0] : i,
      a = si.reduce(function (f, g) {
        return (f[g] = Rs(g, e.rects, o)), f;
      }, {}),
      s = a[e.placement],
      c = s.x,
      p = s.y;
    e.modifiersData.popperOffsets != null &&
      ((e.modifiersData.popperOffsets.x += c), (e.modifiersData.popperOffsets.y += p)),
      (e.modifiersData[n] = a);
  }
  const Ns = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Ms };
  function Ds(t) {
    var e = t.state,
      r = t.name;
    e.modifiersData[r] = vi({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: "absolute",
      placement: e.placement,
    });
  }
  const Hs = { name: "popperOffsets", enabled: !0, phase: "read", fn: Ds, data: {} };
  function $s(t) {
    return t === "x" ? "y" : "x";
  }
  function Bs(t) {
    var e = t.state,
      r = t.options,
      n = t.name,
      i = r.mainAxis,
      o = i === void 0 ? !0 : i,
      a = r.altAxis,
      s = a === void 0 ? !1 : a,
      c = r.boundary,
      p = r.rootBoundary,
      f = r.altBoundary,
      g = r.padding,
      v = r.tether,
      w = v === void 0 ? !0 : v,
      k = r.tetherOffset,
      b = k === void 0 ? 0 : k,
      x = yt(e, { boundary: c, rootBoundary: p, padding: g, altBoundary: f }),
      A = Ee(e.placement),
      _ = tt(e.placement),
      j = !_,
      P = Mr(A),
      R = $s(P),
      z = e.modifiersData.popperOffsets,
      D = e.rects.reference,
      V = e.rects.popper,
      J = typeof b == "function" ? b(Object.assign({}, e.rects, { placement: e.placement })) : b,
      H = typeof J == "number" ? { mainAxis: J, altAxis: J } : Object.assign({ mainAxis: 0, altAxis: 0 }, J),
      U = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
      C = { x: 0, y: 0 };
    if (z) {
      if (o) {
        var $,
          L = P === "y" ? pe : ge,
          B = P === "y" ? me : ve,
          S = P === "y" ? "height" : "width",
          F = z[P],
          Y = F + x[L],
          M = F - x[B],
          ee = w ? -V[S] / 2 : 0,
          ie = _ === Ze ? D[S] : V[S],
          se = _ === Ze ? -V[S] : -D[S],
          Q = e.elements.arrow,
          he = w && Q ? Rr(Q) : { width: 0, height: 0 },
          Ie = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : ui(),
          Ke = Ie[L],
          rt = Ie[B],
          Ce = mt(0, D[S], he[S]),
          nt = j ? D[S] / 2 - ee - Ce - Ke - H.mainAxis : ie - Ce - Ke - H.mainAxis,
          rn = j ? -D[S] / 2 + ee + Ce + rt + H.mainAxis : se + Ce + rt + H.mainAxis,
          _t = e.elements.arrow && bt(e.elements.arrow),
          Et = _t ? (P === "y" ? _t.clientTop || 0 : _t.clientLeft || 0) : 0,
          It = ($ = U == null ? void 0 : U[P]) != null ? $ : 0,
          Ct = F + nt - It - Et,
          er = F + rn - It,
          it = mt(w ? Ht(Y, Ct) : Y, F, w ? Ve(M, er) : M);
        (z[P] = it), (C[P] = it - F);
      }
      if (s) {
        var ot,
          nn = P === "x" ? pe : ge,
          Xe = P === "x" ? me : ve,
          d = z[R],
          l = R === "y" ? "height" : "width",
          u = d + x[nn],
          m = d - x[Xe],
          y = [pe, ge].indexOf(A) !== -1,
          E = (ot = U == null ? void 0 : U[R]) != null ? ot : 0,
          N = y ? u : d - D[l] - V[l] - E + H.altAxis,
          W = y ? d + D[l] + V[l] - E - H.altAxis : m,
          T = w && y ? us(N, d, W) : mt(w ? N : u, d, w ? W : m);
        (z[R] = T), (C[R] = T - d);
      }
      e.modifiersData[n] = C;
    }
  }
  const qs = { name: "preventOverflow", enabled: !0, phase: "main", fn: Bs, requiresIfExists: ["offset"] };
  function Gs(t) {
    return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
  }
  function Vs(t) {
    return t === be(t) || !ye(t) ? Nr(t) : Gs(t);
  }
  function Fs(t) {
    var e = t.getBoundingClientRect(),
      r = Qe(e.width) / t.offsetWidth || 1,
      n = Qe(e.height) / t.offsetHeight || 1;
    return r !== 1 || n !== 1;
  }
  function Ws(t, e, r) {
    r === void 0 && (r = !1);
    var n = ye(e),
      i = ye(e) && Fs(e),
      o = Se(e),
      a = et(t, i, r),
      s = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (n || (!n && !r)) &&
        ((_e(e) !== "body" || Hr(o)) && (s = Vs(e)),
        ye(e) ? ((c = et(e, !0)), (c.x += e.clientLeft), (c.y += e.clientTop)) : o && (c.x = Dr(o))),
      { x: a.left + s.scrollLeft - c.x, y: a.top + s.scrollTop - c.y, width: a.width, height: a.height }
    );
  }
  function Us(t) {
    var e = new Map(),
      r = new Set(),
      n = [];
    t.forEach(function (o) {
      e.set(o.name, o);
    });
    function i(o) {
      r.add(o.name);
      var a = [].concat(o.requires || [], o.requiresIfExists || []);
      a.forEach(function (s) {
        if (!r.has(s)) {
          var c = e.get(s);
          c && i(c);
        }
      }),
        n.push(o);
    }
    return (
      t.forEach(function (o) {
        r.has(o.name) || i(o);
      }),
      n
    );
  }
  function Ks(t) {
    var e = Us(t);
    return os.reduce(function (r, n) {
      return r.concat(
        e.filter(function (i) {
          return i.phase === n;
        }),
      );
    }, []);
  }
  function Xs(t) {
    var e;
    return function () {
      return (
        e ||
          (e = new Promise(function (r) {
            Promise.resolve().then(function () {
              (e = void 0), r(t());
            });
          })),
        e
      );
    };
  }
  function Ys(t) {
    var e = t.reduce(function (r, n) {
      var i = r[n.name];
      return (
        (r[n.name] = i
          ? Object.assign({}, i, n, {
              options: Object.assign({}, i.options, n.options),
              data: Object.assign({}, i.data, n.data),
            })
          : n),
        r
      );
    }, {});
    return Object.keys(e).map(function (r) {
      return e[r];
    });
  }
  var xi = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function ki() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    return !e.some(function (n) {
      return !(n && typeof n.getBoundingClientRect == "function");
    });
  }
  function Js(t) {
    t === void 0 && (t = {});
    var e = t,
      r = e.defaultModifiers,
      n = r === void 0 ? [] : r,
      i = e.defaultOptions,
      o = i === void 0 ? xi : i;
    return function (s, c, p) {
      p === void 0 && (p = o);
      var f = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, xi, o),
          modifiersData: {},
          elements: { reference: s, popper: c },
          attributes: {},
          styles: {},
        },
        g = [],
        v = !1,
        w = {
          state: f,
          setOptions: function (A) {
            var _ = typeof A == "function" ? A(f.options) : A;
            b(),
              (f.options = Object.assign({}, o, f.options, _)),
              (f.scrollParents = {
                reference: Ge(s) ? vt(s) : s.contextElement ? vt(s.contextElement) : [],
                popper: vt(c),
              });
            var j = Ks(Ys([].concat(n, f.options.modifiers)));
            return (
              (f.orderedModifiers = j.filter(function (P) {
                return P.enabled;
              })),
              k(),
              w.update()
            );
          },
          forceUpdate: function () {
            if (!v) {
              var A = f.elements,
                _ = A.reference,
                j = A.popper;
              if (ki(_, j)) {
                (f.rects = { reference: Ws(_, bt(j), f.options.strategy === "fixed"), popper: Rr(j) }),
                  (f.reset = !1),
                  (f.placement = f.options.placement),
                  f.orderedModifiers.forEach(function (H) {
                    return (f.modifiersData[H.name] = Object.assign({}, H.data));
                  });
                for (var P = 0; P < f.orderedModifiers.length; P++) {
                  if (f.reset === !0) {
                    (f.reset = !1), (P = -1);
                    continue;
                  }
                  var R = f.orderedModifiers[P],
                    z = R.fn,
                    D = R.options,
                    V = D === void 0 ? {} : D,
                    J = R.name;
                  typeof z == "function" && (f = z({ state: f, options: V, name: J, instance: w }) || f);
                }
              }
            }
          },
          update: Xs(function () {
            return new Promise(function (x) {
              w.forceUpdate(), x(f);
            });
          }),
          destroy: function () {
            b(), (v = !0);
          },
        };
      if (!ki(s, c)) return w;
      w.setOptions(p).then(function (x) {
        !v && p.onFirstUpdate && p.onFirstUpdate(x);
      });
      function k() {
        f.orderedModifiers.forEach(function (x) {
          var A = x.name,
            _ = x.options,
            j = _ === void 0 ? {} : _,
            P = x.effect;
          if (typeof P == "function") {
            var R = P({ state: f, name: A, instance: w, options: j }),
              z = function () {};
            g.push(R || z);
          }
        });
      }
      function b() {
        g.forEach(function (x) {
          return x();
        }),
          (g = []);
      }
      return w;
    };
  }
  var Zs = [xs, Hs, ys, ls, Ns, Ps, qs, hs, js],
    Br = Js({ defaultModifiers: Zs }),
    je = function () {
      return (
        (je =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        je.apply(this, arguments)
      );
    },
    Gt = function (t, e, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)
          (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), (o[n] = e[n]));
      return t.concat(o || Array.prototype.slice.call(e));
    },
    Re = {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: !1,
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    Qs = { id: null, override: !0 },
    qr = (function () {
      function t(e, r, n, i) {
        e === void 0 && (e = null),
          r === void 0 && (r = null),
          n === void 0 && (n = Re),
          i === void 0 && (i = Qs),
          (this._instanceId = i.id ? i.id : e.id),
          (this._targetEl = e),
          (this._triggerEl = r),
          (this._options = je(je({}, Re), n)),
          (this._popperInstance = null),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Dropdown", this, this._instanceId, i.override);
      }
      return (
        (t.prototype.init = function () {
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            ((this._popperInstance = this._createPopperInstance()),
            this._setupEventListeners(),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          var e = this,
            r = this._getTriggerEvents();
          this._options.triggerType === "click" &&
            r.showEvents.forEach(function (n) {
              e._triggerEl.removeEventListener(n, e._clickHandler);
            }),
            this._options.triggerType === "hover" &&
              (r.showEvents.forEach(function (n) {
                e._triggerEl.removeEventListener(n, e._hoverShowTriggerElHandler),
                  e._targetEl.removeEventListener(n, e._hoverShowTargetElHandler);
              }),
              r.hideEvents.forEach(function (n) {
                e._triggerEl.removeEventListener(n, e._hoverHideHandler),
                  e._targetEl.removeEventListener(n, e._hoverHideHandler);
              })),
            this._popperInstance.destroy(),
            (this._initialized = !1);
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Dropdown", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype._setupEventListeners = function () {
          var e = this,
            r = this._getTriggerEvents();
          (this._clickHandler = function () {
            e.toggle();
          }),
            this._options.triggerType === "click" &&
              r.showEvents.forEach(function (n) {
                e._triggerEl.addEventListener(n, e._clickHandler);
              }),
            (this._hoverShowTriggerElHandler = function (n) {
              n.type === "click"
                ? e.toggle()
                : setTimeout(function () {
                    e.show();
                  }, e._options.delay);
            }),
            (this._hoverShowTargetElHandler = function () {
              e.show();
            }),
            (this._hoverHideHandler = function () {
              setTimeout(function () {
                e._targetEl.matches(":hover") || e.hide();
              }, e._options.delay);
            }),
            this._options.triggerType === "hover" &&
              (r.showEvents.forEach(function (n) {
                e._triggerEl.addEventListener(n, e._hoverShowTriggerElHandler),
                  e._targetEl.addEventListener(n, e._hoverShowTargetElHandler);
              }),
              r.hideEvents.forEach(function (n) {
                e._triggerEl.addEventListener(n, e._hoverHideHandler),
                  e._targetEl.addEventListener(n, e._hoverHideHandler);
              }));
        }),
        (t.prototype._createPopperInstance = function () {
          return Br(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
              { name: "offset", options: { offset: [this._options.offsetSkidding, this._options.offsetDistance] } },
            ],
          });
        }),
        (t.prototype._setupClickOutsideListener = function () {
          var e = this;
          (this._clickOutsideEventListener = function (r) {
            e._handleClickOutside(r, e._targetEl);
          }),
            document.body.addEventListener("click", this._clickOutsideEventListener, !0);
        }),
        (t.prototype._removeClickOutsideListener = function () {
          document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
        }),
        (t.prototype._handleClickOutside = function (e, r) {
          var n = e.target,
            i = this._options.ignoreClickOutsideClass,
            o = !1;
          if (i) {
            var a = document.querySelectorAll(".".concat(i));
            a.forEach(function (s) {
              if (s.contains(n)) {
                o = !0;
                return;
              }
            });
          }
          n !== r && !r.contains(n) && !this._triggerEl.contains(n) && !o && this.isVisible() && this.hide();
        }),
        (t.prototype._getTriggerEvents = function () {
          switch (this._options.triggerType) {
            case "hover":
              return { showEvents: ["mouseenter", "click"], hideEvents: ["mouseleave"] };
            case "click":
              return { showEvents: ["click"], hideEvents: [] };
            case "none":
              return { showEvents: [], hideEvents: [] };
            default:
              return { showEvents: ["click"], hideEvents: [] };
          }
        }),
        (t.prototype.toggle = function () {
          this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this);
        }),
        (t.prototype.isVisible = function () {
          return this._visible;
        }),
        (t.prototype.show = function () {
          this._targetEl.classList.remove("hidden"),
            this._targetEl.classList.add("block"),
            this._popperInstance.setOptions(function (e) {
              return je(je({}, e), {
                modifiers: Gt(Gt([], e.modifiers, !0), [{ name: "eventListeners", enabled: !0 }], !1),
              });
            }),
            this._setupClickOutsideListener(),
            this._popperInstance.update(),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (t.prototype.hide = function () {
          this._targetEl.classList.remove("block"),
            this._targetEl.classList.add("hidden"),
            this._popperInstance.setOptions(function (e) {
              return je(je({}, e), {
                modifiers: Gt(Gt([], e.modifiers, !0), [{ name: "eventListeners", enabled: !1 }], !1),
              });
            }),
            (this._visible = !1),
            this._removeClickOutsideListener(),
            this._options.onHide(this);
        }),
        t
      );
    })();
  function Gr() {
    document.querySelectorAll("[data-dropdown-toggle]").forEach(function (t) {
      var e = t.getAttribute("data-dropdown-toggle"),
        r = document.getElementById(e);
      if (r) {
        var n = t.getAttribute("data-dropdown-placement"),
          i = t.getAttribute("data-dropdown-offset-skidding"),
          o = t.getAttribute("data-dropdown-offset-distance"),
          a = t.getAttribute("data-dropdown-trigger"),
          s = t.getAttribute("data-dropdown-delay"),
          c = t.getAttribute("data-dropdown-ignore-click-outside-class");
        new qr(r, t, {
          placement: n || Re.placement,
          triggerType: a || Re.triggerType,
          offsetSkidding: i ? parseInt(i) : Re.offsetSkidding,
          offsetDistance: o ? parseInt(o) : Re.offsetDistance,
          delay: s ? parseInt(s) : Re.delay,
          ignoreClickOutsideClass: c || Re.ignoreClickOutsideClass,
        });
      } else
        console.error(
          'The dropdown element with id "'.concat(
            e,
            '" does not exist. Please check the data-dropdown-toggle attribute.',
          ),
        );
    });
  }
  typeof window < "u" && ((window.Dropdown = qr), (window.initDropdowns = Gr));
  var Vt = function () {
      return (
        (Vt =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Vt.apply(this, arguments)
      );
    },
    Ft = {
      placement: "center",
      backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
      backdrop: "dynamic",
      closable: !0,
      onHide: function () {},
      onShow: function () {},
      onToggle: function () {},
    },
    el = { id: null, override: !0 },
    _i = (function () {
      function t(e, r, n) {
        e === void 0 && (e = null),
          r === void 0 && (r = Ft),
          n === void 0 && (n = el),
          (this._eventListenerInstances = []),
          (this._instanceId = n.id ? n.id : e.id),
          (this._targetEl = e),
          (this._options = Vt(Vt({}, Ft), r)),
          (this._isHidden = !0),
          (this._backdropEl = null),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Modal", this, this._instanceId, n.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._targetEl &&
            !this._initialized &&
            (this._getPlacementClasses().map(function (r) {
              e._targetEl.classList.add(r);
            }),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          this._initialized &&
            (this.removeAllEventListenerInstances(), this._destroyBackdropEl(), (this._initialized = !1));
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Modal", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype._createBackdrop = function () {
          var e;
          if (this._isHidden) {
            var r = document.createElement("div");
            r.setAttribute("modal-backdrop", ""),
              (e = r.classList).add.apply(e, this._options.backdropClasses.split(" ")),
              document.querySelector("body").append(r),
              (this._backdropEl = r);
          }
        }),
        (t.prototype._destroyBackdropEl = function () {
          this._isHidden || document.querySelector("[modal-backdrop]").remove();
        }),
        (t.prototype._setupModalCloseEventListeners = function () {
          var e = this;
          this._options.backdrop === "dynamic" &&
            ((this._clickOutsideEventListener = function (r) {
              e._handleOutsideClick(r.target);
            }),
            this._targetEl.addEventListener("click", this._clickOutsideEventListener, !0)),
            (this._keydownEventListener = function (r) {
              r.key === "Escape" && e.hide();
            }),
            document.body.addEventListener("keydown", this._keydownEventListener, !0);
        }),
        (t.prototype._removeModalCloseEventListeners = function () {
          this._options.backdrop === "dynamic" &&
            this._targetEl.removeEventListener("click", this._clickOutsideEventListener, !0),
            document.body.removeEventListener("keydown", this._keydownEventListener, !0);
        }),
        (t.prototype._handleOutsideClick = function (e) {
          (e === this._targetEl || (e === this._backdropEl && this.isVisible())) && this.hide();
        }),
        (t.prototype._getPlacementClasses = function () {
          switch (this._options.placement) {
            case "top-left":
              return ["justify-start", "items-start"];
            case "top-center":
              return ["justify-center", "items-start"];
            case "top-right":
              return ["justify-end", "items-start"];
            case "center-left":
              return ["justify-start", "items-center"];
            case "center":
              return ["justify-center", "items-center"];
            case "center-right":
              return ["justify-end", "items-center"];
            case "bottom-left":
              return ["justify-start", "items-end"];
            case "bottom-center":
              return ["justify-center", "items-end"];
            case "bottom-right":
              return ["justify-end", "items-end"];
            default:
              return ["justify-center", "items-center"];
          }
        }),
        (t.prototype.toggle = function () {
          this._isHidden ? this.show() : this.hide(), this._options.onToggle(this);
        }),
        (t.prototype.show = function () {
          this.isHidden &&
            (this._targetEl.classList.add("flex"),
            this._targetEl.classList.remove("hidden"),
            this._targetEl.setAttribute("aria-modal", "true"),
            this._targetEl.setAttribute("role", "dialog"),
            this._targetEl.removeAttribute("aria-hidden"),
            this._createBackdrop(),
            (this._isHidden = !1),
            this._options.closable && this._setupModalCloseEventListeners(),
            document.body.classList.add("overflow-hidden"),
            this._options.onShow(this));
        }),
        (t.prototype.hide = function () {
          this.isVisible &&
            (this._targetEl.classList.add("hidden"),
            this._targetEl.classList.remove("flex"),
            this._targetEl.setAttribute("aria-hidden", "true"),
            this._targetEl.removeAttribute("aria-modal"),
            this._targetEl.removeAttribute("role"),
            this._destroyBackdropEl(),
            (this._isHidden = !0),
            document.body.classList.remove("overflow-hidden"),
            this._options.closable && this._removeModalCloseEventListeners(),
            this._options.onHide(this));
        }),
        (t.prototype.isVisible = function () {
          return !this._isHidden;
        }),
        (t.prototype.isHidden = function () {
          return this._isHidden;
        }),
        (t.prototype.addEventListenerInstance = function (e, r, n) {
          this._eventListenerInstances.push({ element: e, type: r, handler: n });
        }),
        (t.prototype.removeAllEventListenerInstances = function () {
          this._eventListenerInstances.map(function (e) {
            e.element.removeEventListener(e.type, e.handler);
          }),
            (this._eventListenerInstances = []);
        }),
        (t.prototype.getAllEventListenerInstances = function () {
          return this._eventListenerInstances;
        }),
        t
      );
    })();
  function Vr() {
    document.querySelectorAll("[data-modal-target]").forEach(function (t) {
      var e = t.getAttribute("data-modal-target"),
        r = document.getElementById(e);
      if (r) {
        var n = r.getAttribute("data-modal-placement"),
          i = r.getAttribute("data-modal-backdrop");
        new _i(r, { placement: n || Ft.placement, backdrop: i || Ft.backdrop });
      } else
        console.error(
          "Modal with id ".concat(
            e,
            " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?.",
          ),
        );
    }),
      document.querySelectorAll("[data-modal-toggle]").forEach(function (t) {
        var e = t.getAttribute("data-modal-toggle"),
          r = document.getElementById(e);
        if (r) {
          var n = X.getInstance("Modal", e);
          if (n) {
            var i = function () {
              n.toggle();
            };
            t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
          } else
            console.error(
              "Modal with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-modal-target attribute.",
              ),
            );
        } else
          console.error(
            "Modal with id ".concat(
              e,
              " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?",
            ),
          );
      }),
      document.querySelectorAll("[data-modal-show]").forEach(function (t) {
        var e = t.getAttribute("data-modal-show"),
          r = document.getElementById(e);
        if (r) {
          var n = X.getInstance("Modal", e);
          if (n) {
            var i = function () {
              n.show();
            };
            t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
          } else
            console.error(
              "Modal with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-modal-target attribute.",
              ),
            );
        } else
          console.error(
            "Modal with id ".concat(
              e,
              " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?",
            ),
          );
      }),
      document.querySelectorAll("[data-modal-hide]").forEach(function (t) {
        var e = t.getAttribute("data-modal-hide"),
          r = document.getElementById(e);
        if (r) {
          var n = X.getInstance("Modal", e);
          if (n) {
            var i = function () {
              n.hide();
            };
            t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
          } else
            console.error(
              "Modal with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-modal-target attribute.",
              ),
            );
        } else
          console.error(
            "Modal with id ".concat(
              e,
              " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?",
            ),
          );
      });
  }
  typeof window < "u" && ((window.Modal = _i), (window.initModals = Vr));
  var Wt = function () {
      return (
        (Wt =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Wt.apply(this, arguments)
      );
    },
    Fe = {
      placement: "left",
      bodyScrolling: !1,
      backdrop: !0,
      edge: !1,
      edgeOffset: "bottom-[60px]",
      backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    tl = { id: null, override: !0 },
    Ei = (function () {
      function t(e, r, n) {
        e === void 0 && (e = null),
          r === void 0 && (r = Fe),
          n === void 0 && (n = tl),
          (this._eventListenerInstances = []),
          (this._instanceId = n.id ? n.id : e.id),
          (this._targetEl = e),
          (this._options = Wt(Wt({}, Fe), r)),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Drawer", this, this._instanceId, n.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._targetEl &&
            !this._initialized &&
            (this._targetEl.setAttribute("aria-hidden", "true"),
            this._targetEl.classList.add("transition-transform"),
            this._getPlacementClasses(this._options.placement).base.map(function (r) {
              e._targetEl.classList.add(r);
            }),
            (this._handleEscapeKey = function (r) {
              r.key === "Escape" && e.isVisible() && e.hide();
            }),
            document.addEventListener("keydown", this._handleEscapeKey),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          this._initialized &&
            (this.removeAllEventListenerInstances(),
            this._destroyBackdropEl(),
            document.removeEventListener("keydown", this._handleEscapeKey),
            (this._initialized = !1));
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Drawer", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype.hide = function () {
          var e = this;
          this._options.edge
            ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function (r) {
                e._targetEl.classList.remove(r);
              }),
              this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function (r) {
                e._targetEl.classList.add(r);
              }))
            : (this._getPlacementClasses(this._options.placement).active.map(function (r) {
                e._targetEl.classList.remove(r);
              }),
              this._getPlacementClasses(this._options.placement).inactive.map(function (r) {
                e._targetEl.classList.add(r);
              })),
            this._targetEl.setAttribute("aria-hidden", "true"),
            this._targetEl.removeAttribute("aria-modal"),
            this._targetEl.removeAttribute("role"),
            this._options.bodyScrolling || document.body.classList.remove("overflow-hidden"),
            this._options.backdrop && this._destroyBackdropEl(),
            (this._visible = !1),
            this._options.onHide(this);
        }),
        (t.prototype.show = function () {
          var e = this;
          this._options.edge
            ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function (r) {
                e._targetEl.classList.add(r);
              }),
              this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function (r) {
                e._targetEl.classList.remove(r);
              }))
            : (this._getPlacementClasses(this._options.placement).active.map(function (r) {
                e._targetEl.classList.add(r);
              }),
              this._getPlacementClasses(this._options.placement).inactive.map(function (r) {
                e._targetEl.classList.remove(r);
              })),
            this._targetEl.setAttribute("aria-modal", "true"),
            this._targetEl.setAttribute("role", "dialog"),
            this._targetEl.removeAttribute("aria-hidden"),
            this._options.bodyScrolling || document.body.classList.add("overflow-hidden"),
            this._options.backdrop && this._createBackdrop(),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (t.prototype.toggle = function () {
          this.isVisible() ? this.hide() : this.show();
        }),
        (t.prototype._createBackdrop = function () {
          var e,
            r = this;
          if (!this._visible) {
            var n = document.createElement("div");
            n.setAttribute("drawer-backdrop", ""),
              (e = n.classList).add.apply(e, this._options.backdropClasses.split(" ")),
              document.querySelector("body").append(n),
              n.addEventListener("click", function () {
                r.hide();
              });
          }
        }),
        (t.prototype._destroyBackdropEl = function () {
          this._visible && document.querySelector("[drawer-backdrop]").remove();
        }),
        (t.prototype._getPlacementClasses = function (e) {
          switch (e) {
            case "top":
              return {
                base: ["top-0", "left-0", "right-0"],
                active: ["transform-none"],
                inactive: ["-translate-y-full"],
              };
            case "right":
              return { base: ["right-0", "top-0"], active: ["transform-none"], inactive: ["translate-x-full"] };
            case "bottom":
              return {
                base: ["bottom-0", "left-0", "right-0"],
                active: ["transform-none"],
                inactive: ["translate-y-full"],
              };
            case "left":
              return { base: ["left-0", "top-0"], active: ["transform-none"], inactive: ["-translate-x-full"] };
            case "bottom-edge":
              return {
                base: ["left-0", "top-0"],
                active: ["transform-none"],
                inactive: ["translate-y-full", this._options.edgeOffset],
              };
            default:
              return { base: ["left-0", "top-0"], active: ["transform-none"], inactive: ["-translate-x-full"] };
          }
        }),
        (t.prototype.isHidden = function () {
          return !this._visible;
        }),
        (t.prototype.isVisible = function () {
          return this._visible;
        }),
        (t.prototype.addEventListenerInstance = function (e, r, n) {
          this._eventListenerInstances.push({ element: e, type: r, handler: n });
        }),
        (t.prototype.removeAllEventListenerInstances = function () {
          this._eventListenerInstances.map(function (e) {
            e.element.removeEventListener(e.type, e.handler);
          }),
            (this._eventListenerInstances = []);
        }),
        (t.prototype.getAllEventListenerInstances = function () {
          return this._eventListenerInstances;
        }),
        t
      );
    })();
  function Fr() {
    document.querySelectorAll("[data-drawer-target]").forEach(function (t) {
      var e = t.getAttribute("data-drawer-target"),
        r = document.getElementById(e);
      if (r) {
        var n = t.getAttribute("data-drawer-placement"),
          i = t.getAttribute("data-drawer-body-scrolling"),
          o = t.getAttribute("data-drawer-backdrop"),
          a = t.getAttribute("data-drawer-edge"),
          s = t.getAttribute("data-drawer-edge-offset");
        new Ei(r, {
          placement: n || Fe.placement,
          bodyScrolling: i ? i === "true" : Fe.bodyScrolling,
          backdrop: o ? o === "true" : Fe.backdrop,
          edge: a ? a === "true" : Fe.edge,
          edgeOffset: s || Fe.edgeOffset,
        });
      } else
        console.error(
          "Drawer with id ".concat(
            e,
            " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?",
          ),
        );
    }),
      document.querySelectorAll("[data-drawer-toggle]").forEach(function (t) {
        var e = t.getAttribute("data-drawer-toggle"),
          r = document.getElementById(e);
        if (r) {
          var n = X.getInstance("Drawer", e);
          if (n) {
            var i = function () {
              n.toggle();
            };
            t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
          } else
            console.error(
              "Drawer with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-drawer-target attribute.",
              ),
            );
        } else
          console.error(
            "Drawer with id ".concat(
              e,
              " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?",
            ),
          );
      }),
      document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function (t) {
        var e = t.getAttribute("data-drawer-dismiss")
            ? t.getAttribute("data-drawer-dismiss")
            : t.getAttribute("data-drawer-hide"),
          r = document.getElementById(e);
        if (r) {
          var n = X.getInstance("Drawer", e);
          if (n) {
            var i = function () {
              n.hide();
            };
            t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
          } else
            console.error(
              "Drawer with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-drawer-target attribute.",
              ),
            );
        } else
          console.error(
            "Drawer with id ".concat(
              e,
              " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id",
            ),
          );
      }),
      document.querySelectorAll("[data-drawer-show]").forEach(function (t) {
        var e = t.getAttribute("data-drawer-show"),
          r = document.getElementById(e);
        if (r) {
          var n = X.getInstance("Drawer", e);
          if (n) {
            var i = function () {
              n.show();
            };
            t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
          } else
            console.error(
              "Drawer with id ".concat(
                e,
                " has not been initialized. Please initialize it using the data-drawer-target attribute.",
              ),
            );
        } else
          console.error(
            "Drawer with id ".concat(
              e,
              " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?",
            ),
          );
      });
  }
  typeof window < "u" && ((window.Drawer = Ei), (window.initDrawers = Fr));
  var Ut = function () {
      return (
        (Ut =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Ut.apply(this, arguments)
      );
    },
    Ii = {
      defaultTabId: null,
      activeClasses:
        "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
      inactiveClasses:
        "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
      onShow: function () {},
    },
    rl = { id: null, override: !0 },
    Ci = (function () {
      function t(e, r, n, i) {
        e === void 0 && (e = null),
          r === void 0 && (r = []),
          n === void 0 && (n = Ii),
          i === void 0 && (i = rl),
          (this._instanceId = i.id ? i.id : e.id),
          (this._tabsEl = e),
          (this._items = r),
          (this._activeTab = n ? this.getTab(n.defaultTabId) : null),
          (this._options = Ut(Ut({}, Ii), n)),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Tabs", this, this._tabsEl.id, !0),
          X.addInstance("Tabs", this, this._instanceId, i.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._items.length &&
            !this._initialized &&
            (this._activeTab || this.setActiveTab(this._items[0]),
            this.show(this._activeTab.id, !0),
            this._items.map(function (r) {
              r.triggerEl.addEventListener("click", function () {
                e.show(r.id);
              });
            }));
        }),
        (t.prototype.destroy = function () {
          this._initialized && (this._initialized = !1);
        }),
        (t.prototype.removeInstance = function () {
          this.destroy(), X.removeInstance("Tabs", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype.getActiveTab = function () {
          return this._activeTab;
        }),
        (t.prototype.setActiveTab = function (e) {
          this._activeTab = e;
        }),
        (t.prototype.getTab = function (e) {
          return this._items.filter(function (r) {
            return r.id === e;
          })[0];
        }),
        (t.prototype.show = function (e, r) {
          var n,
            i,
            o = this;
          r === void 0 && (r = !1);
          var a = this.getTab(e);
          (a === this._activeTab && !r) ||
            (this._items.map(function (s) {
              var c, p;
              s !== a &&
                ((c = s.triggerEl.classList).remove.apply(c, o._options.activeClasses.split(" ")),
                (p = s.triggerEl.classList).add.apply(p, o._options.inactiveClasses.split(" ")),
                s.targetEl.classList.add("hidden"),
                s.triggerEl.setAttribute("aria-selected", "false"));
            }),
            (n = a.triggerEl.classList).add.apply(n, this._options.activeClasses.split(" ")),
            (i = a.triggerEl.classList).remove.apply(i, this._options.inactiveClasses.split(" ")),
            a.triggerEl.setAttribute("aria-selected", "true"),
            a.targetEl.classList.remove("hidden"),
            this.setActiveTab(a),
            this._options.onShow(this, a));
        }),
        t
      );
    })();
  function Wr() {
    document.querySelectorAll("[data-tabs-toggle]").forEach(function (t) {
      var e = [],
        r = null;
      t.querySelectorAll('[role="tab"]').forEach(function (n) {
        var i = n.getAttribute("aria-selected") === "true",
          o = {
            id: n.getAttribute("data-tabs-target"),
            triggerEl: n,
            targetEl: document.querySelector(n.getAttribute("data-tabs-target")),
          };
        e.push(o), i && (r = o.id);
      }),
        new Ci(t, e, { defaultTabId: r });
    });
  }
  typeof window < "u" && ((window.Tabs = Ci), (window.initTabs = Wr));
  var Me = function () {
      return (
        (Me =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Me.apply(this, arguments)
      );
    },
    Kt = function (t, e, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)
          (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), (o[n] = e[n]));
      return t.concat(o || Array.prototype.slice.call(e));
    },
    Xt = {
      placement: "top",
      triggerType: "hover",
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    nl = { id: null, override: !0 },
    Ai = (function () {
      function t(e, r, n, i) {
        e === void 0 && (e = null),
          r === void 0 && (r = null),
          n === void 0 && (n = Xt),
          i === void 0 && (i = nl),
          (this._instanceId = i.id ? i.id : e.id),
          (this._targetEl = e),
          (this._triggerEl = r),
          (this._options = Me(Me({}, Xt), n)),
          (this._popperInstance = null),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Tooltip", this, this._instanceId, i.override);
      }
      return (
        (t.prototype.init = function () {
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            (this._setupEventListeners(),
            (this._popperInstance = this._createPopperInstance()),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          var e = this;
          if (this._initialized) {
            var r = this._getTriggerEvents();
            r.showEvents.forEach(function (n) {
              e._triggerEl.removeEventListener(n, e._showHandler);
            }),
              r.hideEvents.forEach(function (n) {
                e._triggerEl.removeEventListener(n, e._hideHandler);
              }),
              this._removeKeydownListener(),
              this._removeClickOutsideListener(),
              this._popperInstance && this._popperInstance.destroy(),
              (this._initialized = !1);
          }
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Tooltip", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype._setupEventListeners = function () {
          var e = this,
            r = this._getTriggerEvents();
          (this._showHandler = function () {
            e.show();
          }),
            (this._hideHandler = function () {
              e.hide();
            }),
            r.showEvents.forEach(function (n) {
              e._triggerEl.addEventListener(n, e._showHandler);
            }),
            r.hideEvents.forEach(function (n) {
              e._triggerEl.addEventListener(n, e._hideHandler);
            });
        }),
        (t.prototype._createPopperInstance = function () {
          return Br(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
          });
        }),
        (t.prototype._getTriggerEvents = function () {
          switch (this._options.triggerType) {
            case "hover":
              return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
            case "click":
              return { showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"] };
            case "none":
              return { showEvents: [], hideEvents: [] };
            default:
              return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
          }
        }),
        (t.prototype._setupKeydownListener = function () {
          var e = this;
          (this._keydownEventListener = function (r) {
            r.key === "Escape" && e.hide();
          }),
            document.body.addEventListener("keydown", this._keydownEventListener, !0);
        }),
        (t.prototype._removeKeydownListener = function () {
          document.body.removeEventListener("keydown", this._keydownEventListener, !0);
        }),
        (t.prototype._setupClickOutsideListener = function () {
          var e = this;
          (this._clickOutsideEventListener = function (r) {
            e._handleClickOutside(r, e._targetEl);
          }),
            document.body.addEventListener("click", this._clickOutsideEventListener, !0);
        }),
        (t.prototype._removeClickOutsideListener = function () {
          document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
        }),
        (t.prototype._handleClickOutside = function (e, r) {
          var n = e.target;
          n !== r && !r.contains(n) && !this._triggerEl.contains(n) && this.isVisible() && this.hide();
        }),
        (t.prototype.isVisible = function () {
          return this._visible;
        }),
        (t.prototype.toggle = function () {
          this.isVisible() ? this.hide() : this.show();
        }),
        (t.prototype.show = function () {
          this._targetEl.classList.remove("opacity-0", "invisible"),
            this._targetEl.classList.add("opacity-100", "visible"),
            this._popperInstance.setOptions(function (e) {
              return Me(Me({}, e), {
                modifiers: Kt(Kt([], e.modifiers, !0), [{ name: "eventListeners", enabled: !0 }], !1),
              });
            }),
            this._setupClickOutsideListener(),
            this._setupKeydownListener(),
            this._popperInstance.update(),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (t.prototype.hide = function () {
          this._targetEl.classList.remove("opacity-100", "visible"),
            this._targetEl.classList.add("opacity-0", "invisible"),
            this._popperInstance.setOptions(function (e) {
              return Me(Me({}, e), {
                modifiers: Kt(Kt([], e.modifiers, !0), [{ name: "eventListeners", enabled: !1 }], !1),
              });
            }),
            this._removeClickOutsideListener(),
            this._removeKeydownListener(),
            (this._visible = !1),
            this._options.onHide(this);
        }),
        t
      );
    })();
  function Ur() {
    document.querySelectorAll("[data-tooltip-target]").forEach(function (t) {
      var e = t.getAttribute("data-tooltip-target"),
        r = document.getElementById(e);
      if (r) {
        var n = t.getAttribute("data-tooltip-trigger"),
          i = t.getAttribute("data-tooltip-placement");
        new Ai(r, t, { placement: i || Xt.placement, triggerType: n || Xt.triggerType });
      } else
        console.error(
          'The tooltip element with id "'.concat(
            e,
            '" does not exist. Please check the data-tooltip-target attribute.',
          ),
        );
    });
  }
  typeof window < "u" && ((window.Tooltip = Ai), (window.initTooltips = Ur));
  var Ne = function () {
      return (
        (Ne =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Ne.apply(this, arguments)
      );
    },
    Yt = function (t, e, r) {
      if (r || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)
          (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), (o[n] = e[n]));
      return t.concat(o || Array.prototype.slice.call(e));
    },
    wt = {
      placement: "top",
      offset: 10,
      triggerType: "hover",
      onShow: function () {},
      onHide: function () {},
      onToggle: function () {},
    },
    il = { id: null, override: !0 },
    Ti = (function () {
      function t(e, r, n, i) {
        e === void 0 && (e = null),
          r === void 0 && (r = null),
          n === void 0 && (n = wt),
          i === void 0 && (i = il),
          (this._instanceId = i.id ? i.id : e.id),
          (this._targetEl = e),
          (this._triggerEl = r),
          (this._options = Ne(Ne({}, wt), n)),
          (this._popperInstance = null),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Popover", this, i.id ? i.id : this._targetEl.id, i.override);
      }
      return (
        (t.prototype.init = function () {
          this._triggerEl &&
            this._targetEl &&
            !this._initialized &&
            (this._setupEventListeners(),
            (this._popperInstance = this._createPopperInstance()),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          var e = this;
          if (this._initialized) {
            var r = this._getTriggerEvents();
            r.showEvents.forEach(function (n) {
              e._triggerEl.removeEventListener(n, e._showHandler), e._targetEl.removeEventListener(n, e._showHandler);
            }),
              r.hideEvents.forEach(function (n) {
                e._triggerEl.removeEventListener(n, e._hideHandler), e._targetEl.removeEventListener(n, e._hideHandler);
              }),
              this._removeKeydownListener(),
              this._removeClickOutsideListener(),
              this._popperInstance && this._popperInstance.destroy(),
              (this._initialized = !1);
          }
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Popover", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype._setupEventListeners = function () {
          var e = this,
            r = this._getTriggerEvents();
          (this._showHandler = function () {
            e.show();
          }),
            (this._hideHandler = function () {
              setTimeout(function () {
                e._targetEl.matches(":hover") || e.hide();
              }, 100);
            }),
            r.showEvents.forEach(function (n) {
              e._triggerEl.addEventListener(n, e._showHandler), e._targetEl.addEventListener(n, e._showHandler);
            }),
            r.hideEvents.forEach(function (n) {
              e._triggerEl.addEventListener(n, e._hideHandler), e._targetEl.addEventListener(n, e._hideHandler);
            });
        }),
        (t.prototype._createPopperInstance = function () {
          return Br(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [{ name: "offset", options: { offset: [0, this._options.offset] } }],
          });
        }),
        (t.prototype._getTriggerEvents = function () {
          switch (this._options.triggerType) {
            case "hover":
              return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
            case "click":
              return { showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"] };
            case "none":
              return { showEvents: [], hideEvents: [] };
            default:
              return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
          }
        }),
        (t.prototype._setupKeydownListener = function () {
          var e = this;
          (this._keydownEventListener = function (r) {
            r.key === "Escape" && e.hide();
          }),
            document.body.addEventListener("keydown", this._keydownEventListener, !0);
        }),
        (t.prototype._removeKeydownListener = function () {
          document.body.removeEventListener("keydown", this._keydownEventListener, !0);
        }),
        (t.prototype._setupClickOutsideListener = function () {
          var e = this;
          (this._clickOutsideEventListener = function (r) {
            e._handleClickOutside(r, e._targetEl);
          }),
            document.body.addEventListener("click", this._clickOutsideEventListener, !0);
        }),
        (t.prototype._removeClickOutsideListener = function () {
          document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
        }),
        (t.prototype._handleClickOutside = function (e, r) {
          var n = e.target;
          n !== r && !r.contains(n) && !this._triggerEl.contains(n) && this.isVisible() && this.hide();
        }),
        (t.prototype.isVisible = function () {
          return this._visible;
        }),
        (t.prototype.toggle = function () {
          this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this);
        }),
        (t.prototype.show = function () {
          this._targetEl.classList.remove("opacity-0", "invisible"),
            this._targetEl.classList.add("opacity-100", "visible"),
            this._popperInstance.setOptions(function (e) {
              return Ne(Ne({}, e), {
                modifiers: Yt(Yt([], e.modifiers, !0), [{ name: "eventListeners", enabled: !0 }], !1),
              });
            }),
            this._setupClickOutsideListener(),
            this._setupKeydownListener(),
            this._popperInstance.update(),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (t.prototype.hide = function () {
          this._targetEl.classList.remove("opacity-100", "visible"),
            this._targetEl.classList.add("opacity-0", "invisible"),
            this._popperInstance.setOptions(function (e) {
              return Ne(Ne({}, e), {
                modifiers: Yt(Yt([], e.modifiers, !0), [{ name: "eventListeners", enabled: !1 }], !1),
              });
            }),
            this._removeClickOutsideListener(),
            this._removeKeydownListener(),
            (this._visible = !1),
            this._options.onHide(this);
        }),
        t
      );
    })();
  function Kr() {
    document.querySelectorAll("[data-popover-target]").forEach(function (t) {
      var e = t.getAttribute("data-popover-target"),
        r = document.getElementById(e);
      if (r) {
        var n = t.getAttribute("data-popover-trigger"),
          i = t.getAttribute("data-popover-placement"),
          o = t.getAttribute("data-popover-offset");
        new Ti(r, t, {
          placement: i || wt.placement,
          offset: o ? parseInt(o) : wt.offset,
          triggerType: n || wt.triggerType,
        });
      } else
        console.error(
          'The popover element with id "'.concat(
            e,
            '" does not exist. Please check the data-popover-target attribute.',
          ),
        );
    });
  }
  typeof window < "u" && ((window.Popover = Ti), (window.initPopovers = Kr));
  var Jt = function () {
      return (
        (Jt =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Jt.apply(this, arguments)
      );
    },
    Xr = { triggerType: "hover", onShow: function () {}, onHide: function () {}, onToggle: function () {} },
    ol = { id: null, override: !0 },
    Li = (function () {
      function t(e, r, n, i, o) {
        e === void 0 && (e = null),
          r === void 0 && (r = null),
          n === void 0 && (n = null),
          i === void 0 && (i = Xr),
          o === void 0 && (o = ol),
          (this._instanceId = o.id ? o.id : n.id),
          (this._parentEl = e),
          (this._triggerEl = r),
          (this._targetEl = n),
          (this._options = Jt(Jt({}, Xr), i)),
          (this._visible = !1),
          (this._initialized = !1),
          this.init(),
          X.addInstance("Dial", this, this._instanceId, o.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          if (this._triggerEl && this._targetEl && !this._initialized) {
            var r = this._getTriggerEventTypes(this._options.triggerType);
            (this._showEventHandler = function () {
              e.show();
            }),
              r.showEvents.forEach(function (n) {
                e._triggerEl.addEventListener(n, e._showEventHandler),
                  e._targetEl.addEventListener(n, e._showEventHandler);
              }),
              (this._hideEventHandler = function () {
                e._parentEl.matches(":hover") || e.hide();
              }),
              r.hideEvents.forEach(function (n) {
                e._parentEl.addEventListener(n, e._hideEventHandler);
              }),
              (this._initialized = !0);
          }
        }),
        (t.prototype.destroy = function () {
          var e = this;
          if (this._initialized) {
            var r = this._getTriggerEventTypes(this._options.triggerType);
            r.showEvents.forEach(function (n) {
              e._triggerEl.removeEventListener(n, e._showEventHandler),
                e._targetEl.removeEventListener(n, e._showEventHandler);
            }),
              r.hideEvents.forEach(function (n) {
                e._parentEl.removeEventListener(n, e._hideEventHandler);
              }),
              (this._initialized = !1);
          }
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("Dial", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype.hide = function () {
          this._targetEl.classList.add("hidden"),
            this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"),
            (this._visible = !1),
            this._options.onHide(this);
        }),
        (t.prototype.show = function () {
          this._targetEl.classList.remove("hidden"),
            this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"),
            (this._visible = !0),
            this._options.onShow(this);
        }),
        (t.prototype.toggle = function () {
          this._visible ? this.hide() : this.show();
        }),
        (t.prototype.isHidden = function () {
          return !this._visible;
        }),
        (t.prototype.isVisible = function () {
          return this._visible;
        }),
        (t.prototype._getTriggerEventTypes = function (e) {
          switch (e) {
            case "hover":
              return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
            case "click":
              return { showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"] };
            case "none":
              return { showEvents: [], hideEvents: [] };
            default:
              return { showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"] };
          }
        }),
        t
      );
    })();
  function Yr() {
    document.querySelectorAll("[data-dial-init]").forEach(function (t) {
      var e = t.querySelector("[data-dial-toggle]");
      if (e) {
        var r = e.getAttribute("data-dial-toggle"),
          n = document.getElementById(r);
        if (n) {
          var i = e.getAttribute("data-dial-trigger");
          new Li(t, e, n, { triggerType: i || Xr.triggerType });
        } else
          console.error(
            "Dial with id ".concat(
              r,
              " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?",
            ),
          );
      } else
        console.error(
          "Dial with id ".concat(
            t.id,
            " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?",
          ),
        );
    });
  }
  typeof window < "u" && ((window.Dial = Li), (window.initDials = Yr));
  var Zt = function () {
      return (
        (Zt =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            }
            return t;
          }),
        Zt.apply(this, arguments)
      );
    },
    zi = { minValue: null, maxValue: null, onIncrement: function () {}, onDecrement: function () {} },
    al = { id: null, override: !0 },
    Oi = (function () {
      function t(e, r, n, i, o) {
        e === void 0 && (e = null),
          r === void 0 && (r = null),
          n === void 0 && (n = null),
          i === void 0 && (i = zi),
          o === void 0 && (o = al),
          (this._instanceId = o.id ? o.id : e.id),
          (this._targetEl = e),
          (this._incrementEl = r),
          (this._decrementEl = n),
          (this._options = Zt(Zt({}, zi), i)),
          (this._initialized = !1),
          this.init(),
          X.addInstance("InputCounter", this, this._instanceId, o.override);
      }
      return (
        (t.prototype.init = function () {
          var e = this;
          this._targetEl &&
            !this._initialized &&
            ((this._inputHandler = function (r) {
              {
                var n = r.target;
                /^\d*$/.test(n.value) || (n.value = n.value.replace(/[^\d]/g, "")),
                  e._options.maxValue !== null &&
                    parseInt(n.value) > e._options.maxValue &&
                    (n.value = e._options.maxValue.toString()),
                  e._options.minValue !== null &&
                    parseInt(n.value) < e._options.minValue &&
                    (n.value = e._options.minValue.toString());
              }
            }),
            (this._incrementClickHandler = function () {
              e.increment();
            }),
            (this._decrementClickHandler = function () {
              e.decrement();
            }),
            this._targetEl.addEventListener("input", this._inputHandler),
            this._incrementEl && this._incrementEl.addEventListener("click", this._incrementClickHandler),
            this._decrementEl && this._decrementEl.addEventListener("click", this._decrementClickHandler),
            (this._initialized = !0));
        }),
        (t.prototype.destroy = function () {
          this._targetEl &&
            this._initialized &&
            (this._targetEl.removeEventListener("input", this._inputHandler),
            this._incrementEl && this._incrementEl.removeEventListener("click", this._incrementClickHandler),
            this._decrementEl && this._decrementEl.removeEventListener("click", this._decrementClickHandler),
            (this._initialized = !1));
        }),
        (t.prototype.removeInstance = function () {
          X.removeInstance("InputCounter", this._instanceId);
        }),
        (t.prototype.destroyAndRemoveInstance = function () {
          this.destroy(), this.removeInstance();
        }),
        (t.prototype.getCurrentValue = function () {
          return parseInt(this._targetEl.value) || 0;
        }),
        (t.prototype.increment = function () {
          (this._options.maxValue !== null && this.getCurrentValue() >= this._options.maxValue) ||
            ((this._targetEl.value = (this.getCurrentValue() + 1).toString()), this._options.onIncrement(this));
        }),
        (t.prototype.decrement = function () {
          (this._options.minValue !== null && this.getCurrentValue() <= this._options.minValue) ||
            ((this._targetEl.value = (this.getCurrentValue() - 1).toString()), this._options.onDecrement(this));
        }),
        t
      );
    })();
  function Jr() {
    document.querySelectorAll("[data-input-counter]").forEach(function (t) {
      var e = t.id,
        r = document.querySelector('[data-input-counter-increment="' + e + '"]'),
        n = document.querySelector('[data-input-counter-decrement="' + e + '"]'),
        i = t.getAttribute("data-input-counter-min"),
        o = t.getAttribute("data-input-counter-max");
      t
        ? X.instanceExists("InputCounter", t.getAttribute("id")) ||
          new Oi(t, r || null, n || null, { minValue: i ? parseInt(i) : null, maxValue: o ? parseInt(o) : null })
        : console.error(
            'The target element with id "'.concat(
              e,
              '" does not exist. Please check the data-input-counter attribute.',
            ),
          );
    });
  }
  typeof window < "u" && ((window.InputCounter = Oi), (window.initInputCounters = Jr));
  function sl() {
    Ar(), Lr(), zr(), Or(), Gr(), Vr(), Fr(), Wr(), Ur(), Kr(), Yr(), Jr();
  }
  typeof window < "u" && (window.initFlowbite = sl);
  var ll = new qa("load", [Ar, Lr, zr, Or, Gr, Vr, Fr, Wr, Ur, Kr, Yr, Jr]);
  ll.init();
  const Pi = {
      accordion: null,
      options: {
        alwaysOpen: !1,
        activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
        inactiveClasses: "text-gray-500 dark:text-gray-400",
      },
      oncreate({ state: t, attrs: e, children: r }) {
        const { id: n = "accordion", collapseAll: i = !1, flush: o = !1 } = e;
        e.alwaysOpen && (t.options.alwaysOpen = e.alwaysOpen);
        const a = [];
        r.map((s, c) => {
          const p = s.children[0],
            f = s.children[1];
          (p.state.isOpen = s.state.isOpen),
            (p.state.flush = o),
            (p.dom.id = `${n}-heading-${c}`),
            (f.dom.id = `${n}-body-${c}`),
            i
              ? (f.dom.className = I(f.dom.className, "hidden"))
              : s.state.isOpen || (f.dom.className = I(f.dom.className, "hidden")),
            a.push({ id: `${n}-heading-${c}`, triggerEl: p.dom, targetEl: f.dom, active: i ? !1 : s.state.isOpen });
        }),
          h.redraw(),
          (t.accordion = new Cr(n, a, t.options));
      },
      view({ attrs: t, children: e }) {
        const { class: r, id: n = "accordion", alwaysOpen: i = !1, flush: o = !1, theme: a = {}, ...s } = t,
          c = O(Pt.root, a),
          p = cl(s);
        return h(
          "div",
          { id: n, class: I(c.base, c.flush[o ? "on" : "off"], r), "data-accordion": i ? "open" : "collapse", ...p },
          e,
        );
      },
    },
    cl = kr(["collapseAll"]),
    dl = Object.assign(Pi, { Panel: da, Title: Ba, Content: ca }),
    Si = {
      base: "flex flex-col gap-2 p-4 text-sm",
      borderAccent: "border-t-4",
      closeButton: {
        base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
        icon: "w-4 h-4",
        color: {
          blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
          cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
          dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
          failure:
            "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
          gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
          green:
            "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
          indigo:
            "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
          info: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
          light:
            "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
          lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
          pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
          purple:
            "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
          red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
          success:
            "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
          teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
          warning:
            "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
          yellow:
            "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
        },
      },
      color: {
        blue: "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
        cyan: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
        dark: "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
        failure: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
        gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
        green: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
        indigo: "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
        info: "text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800",
        light: "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200",
        lime: "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
        pink: "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
        purple: "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
        red: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
        success: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
        teal: "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
        warning: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
        yellow: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
      },
      icon: "mr-3 inline h-5 w-5 flex-shrink-0",
      rounded: "rounded-lg",
      wrapper: "flex items-center",
    },
    ul = {
      view({ attrs: t, children: e }) {
        const {
            additionalContent: r,
            class: n,
            color: i = "info",
            icon: o,
            onDismiss: a,
            rounded: s = !1,
            theme: c = {},
            withBorderAccent: p = !1,
            ...f
          } = t,
          g = O(Si, c);
        return h(
          "div",
          { class: I(g.base, g.color[i], s && g.rounded, p && g.borderAccent, n), role: "alert", ...f },
          h("div", { class: g.wrapper }, [
            o && h(o, { class: g.icon }),
            h("div", e),
            typeof a == "function" &&
              h(
                "button",
                {
                  "aria-label": "Dismiss",
                  class: I(g.closeButton.base, g.closeButton.color[i]),
                  onclick: a,
                  type: "button",
                },
                h($a, { "aria-hidden": !0, class: g.closeButton.icon }),
              ),
          ]),
          r && h("div", r),
        );
      },
    },
    Qt = {
      root: {
        base: "flex justify-center items-center space-x-4 rounded",
        bordered: "p-1 ring-2",
        rounded: "rounded-full",
        color: {
          dark: "ring-gray-800 dark:ring-gray-800",
          failure: "ring-red-500 dark:ring-red-700",
          gray: "ring-gray-500 dark:ring-gray-400",
          info: "ring-blue-400 dark:ring-blue-800",
          light: "ring-gray-300 dark:ring-gray-500",
          pink: "ring-pink-500 dark:ring-pink-500",
          purple: "ring-purple-500 dark:ring-purple-600",
          success: "ring-green-500 dark:ring-green-500",
          warning: "ring-yellow-300 dark:ring-yellow-500",
        },
        img: {
          base: "rounded",
          off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
          on: "",
          placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1",
        },
        size: { xs: "w-6 h-6", sm: "w-8 h-8", md: "w-10 h-10", lg: "w-20 h-20", xl: "w-36 h-36" },
        stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
        statusPosition: {
          "bottom-left": "-bottom-1 -left-1",
          "bottom-center": "-bottom-1 center",
          "bottom-right": "-bottom-1 -right-1",
          "top-left": "-top-1 -left-1",
          "top-center": "-top-1 center",
          "top-right": "-top-1 -right-1",
          "center-right": "center -right-1",
          center: "center center",
          "center-left": "center -left-1",
        },
        status: {
          away: "bg-yellow-400",
          base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
          busy: "bg-red-400",
          offline: "bg-gray-400",
          online: "bg-green-400",
        },
        initials: {
          text: "font-medium text-gray-600 dark:text-gray-300",
          base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600",
        },
      },
      group: { base: "flex -space-x-4" },
      groupCounter: {
        base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500",
      },
    },
    fl = {
      view({ attrs: t, children: e }) {
        const { class: r, theme: n = {}, ...i } = t,
          o = O(Qt.group, n);
        return h("div", { class: I(o.base, r), ...i }, e);
      },
    },
    pl = {
      view({ attrs: t }) {
        const { class: e, href: r, total: n, theme: i = {}, ...o } = t,
          a = O(Qt.groupCounter, i);
        return h(h.route.Link, { href: r, class: I(a.base, e), ...o }, `+${n}`);
      },
    },
    ji = {
      view({ attrs: t, children: e }) {
        const {
            class: r,
            alt: n = "",
            bordered: i = !1,
            color: o = "light",
            img: a,
            initials: s = "",
            rounded: c = !1,
            size: p = "md",
            stacked: f = !1,
            status: g,
            statusPosition: v = "top-left",
            theme: w = {},
            ...k
          } = t,
          b = O(Qt, w),
          x = I(
            b.root.img.base,
            i && b.root.bordered,
            i && b.root.color[o],
            c && b.root.rounded,
            f && b.root.stacked,
            b.root.img.on,
            b.root.size[p],
          ),
          A = { class: I(x, b.root.img.on) };
        return h(
          "div",
          { class: I(b.root.base, r), ...k },
          h("div", { class: "relative" }, [
            a
              ? typeof a == "string"
                ? h("img", { alt: n, src: a, ...A })
                : h(a, { alt: n, ...A })
              : s
              ? h(
                  "div",
                  {
                    class: I(
                      b.root.img.off,
                      b.root.initials.base,
                      f && b.root.stacked,
                      i && b.root.bordered,
                      i && b.root.color[o],
                      b.root.size[p],
                      c && b.root.rounded,
                    ),
                  },
                  h("span", { class: I(b.root.initials.text) }, s),
                )
              : h(
                  "div",
                  { class: I(x, b.root.img.off) },
                  h(
                    "svg",
                    {
                      class: b.root.img.placeholder,
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    h("path", {
                      fillRule: "evenodd",
                      d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                      clipRule: "evenodd",
                    }),
                  ),
                ),
            g && h("span", { class: I(b.root.status.base, b.root.status[g], b.root.statusPosition[v]) }),
          ]),
          e.length > 0 && h("div", e),
        );
      },
    },
    gl = Object.assign(ji, { Group: fl, Counter: pl }),
    Ri = {
      root: {
        base: "flex h-fit items-center font-semibold",
        color: {
          blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
          cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
          dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
          failure:
            "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
          gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
          green:
            "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
          indigo:
            "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
          info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
          light:
            "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
          lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
          pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
          purple:
            "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
          red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
          success:
            "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
          teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
          warning:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
          yellow:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
        },
        href: "group",
        size: { xs: "p-1 text-xs", sm: "p-1.5 text-sm" },
      },
      icon: { off: "rounded px-2 py-0.5", on: "rounded-full p-1.5", size: { xs: "w-3 h-3", sm: "w-3.5 h-3.5" } },
    },
    hl = {
      view({ attrs: t, children: e }) {
        const { class: r, color: n = "info", href: i, icon: o, size: a = "xs", theme: s = {}, ...c } = t,
          p = O(Ri, s),
          f = {
            view: () =>
              h(
                "span",
                {
                  class: I(
                    p.root.base,
                    p.root.color[n],
                    p.root.size[a],
                    p.icon[o ? "on" : "off"],
                    o && e.length > 0 ? "gap-1" : "",
                    r,
                  ),
                  ...c,
                },
                [o && h(o, { "aria-hidden": !0, class: p.icon.size[a] }), e.length > 0 && h("span", e)],
              ),
          };
        return i ? h(h.route.Link, { class: p.root.href, href: i }, h(f)) : h(f);
      },
    },
    Mi = { root: { base: "text-xl italic font-semibold text-gray-900 dark:text-white" } },
    bl = {
      view({ attrs: t, children: e }) {
        const { class: r, theme: n = {}, ...i } = t,
          o = O(Mi, n);
        return h("blockquote", { class: I(o.root.base, r), ...i }, e);
      },
    },
    Zr = {
      root: { base: "", list: "flex items-center" },
      item: {
        base: "group flex items-center",
        chevron: "mx-1 h-3 w-3 text-gray-400 group-first:hidden md:mx-2",
        href: {
          off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
          on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
        },
        icon: "mr-2 h-3 w-3",
      },
    },
    ml = {
      view({ attrs: t, children: e }) {
        const { class: r, href: n, icon: i, theme: o = {}, ...a } = t,
          s = typeof n < "u",
          c = s ? "a" : "span",
          p = O(Zr.item, o);
        return h("li", { class: I(p.base, r), ...a }, [
          h(ei, { "aria-hidden": !0, class: p.chevron }),
          h(c, { class: p.href[s ? "on" : "off"], href: n }, [i && h(i, { "aria-hidden": !0, class: p.icon }), e]),
        ]);
      },
    },
    Ni = {
      view({ attrs: t, children: e }) {
        const { class: r, theme: n = {}, ...i } = t,
          o = O(Zr.root, n);
        return h("nav", { "aria-label": "Breadcrumb", class: I(o.base, r), ...i }, h("ol", { class: o.list }, e));
      },
    },
    vl = Object.assign(Ni, { Item: ml }),
    Di = {
      base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
      fullSized: "w-full",
      color: {
        blue: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        cyan: "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
        dark: "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
        failure:
          "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
        gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
        green:
          "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
        indigo:
          "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
        info: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:enabled:hover:bg-blue-700 dark:focus:ring-blue-800",
        light:
          "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
        lime: "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
        pink: "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
        purple:
          "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
        red: "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
        success:
          "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
        teal: "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
        warning:
          "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
        yellow:
          "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700",
      },
      disabled: "cursor-not-allowed opacity-50",
      isProcessing: "cursor-wait",
      spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
      spinnerLeftPosition: { xs: "left-2", sm: "left-3", md: "left-4", lg: "left-5", xl: "left-6" },
      gradient: {
        cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
        failure:
          "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
        info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
        lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
        pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
        purple:
          "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
        success:
          "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
        teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800",
      },
      gradientDuoTone: {
        cyanToBlue:
          "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
        greenToBlue:
          "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
        pinkToOrange:
          "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
        purpleToBlue:
          "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
        purpleToPink:
          "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
        redToYellow:
          "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
        tealToLime:
          "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700",
      },
      inner: {
        base: "flex items-stretch items-center transition-all duration-200",
        position: { none: "", start: "rounded-r-none", middle: "rounded-none", end: "rounded-l-none" },
        outline: "border border-transparent",
        isProcessingPadding: { xs: "pl-8", sm: "pl-10", md: "pl-12", lg: "pl-16", xl: "pl-20" },
      },
      label:
        "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
      outline: {
        color: { default: "border-0", gray: "border border-gray-900 dark:border-white", light: "" },
        off: "",
        on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
        pill: { off: "rounded-md", on: "rounded-full" },
      },
      pill: { off: "rounded-lg", on: "rounded-full" },
      size: {
        xs: "text-xs px-2 py-1",
        sm: "text-sm px-3 py-1.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-5 py-2.5",
        xl: "text-base px-6 py-3",
      },
    },
    Qr = {
      base: "inline-flex",
      position: {
        none: "focus:ring-2",
        start: "rounded-r-none",
        middle: "rounded-none border-l-0 pl-0",
        end: "rounded-l-none border-l-0 pl-0",
      },
    },
    yl = {
      view({ attrs: t, children: e }) {
        const { class: r, outline: n, pill: i, theme: o = {}, ...a } = t,
          s = O(Qr, o);
        return h(
          "div",
          { class: I(s.base, r), role: "group", ...a },
          e.map(
            (c, p) => (
              (c.attrs.positionInGroup = p === 0 ? "start" : p === e.length - 1 ? "end" : "middle"),
              (c.attrs.outline = n),
              (c.attrs.pill = i),
              c
            ),
          ),
        );
      },
    },
    Hi = {
      base: "inline animate-spin text-gray-200",
      color: {
        failure: "fill-red-600",
        gray: "fill-gray-600",
        info: "fill-blue-600",
        pink: "fill-pink-600",
        purple: "fill-purple-600",
        success: "fill-green-500",
        warning: "fill-yellow-400",
      },
      light: {
        off: {
          base: "dark:text-gray-600",
          color: { failure: "", gray: "dark:fill-gray-300", info: "", pink: "", purple: "", success: "", warning: "" },
        },
        on: { base: "", color: { failure: "", gray: "", info: "", pink: "", purple: "", success: "", warning: "" } },
      },
      size: { xs: "w-3 h-3", sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8", xl: "w-10 h-10" },
    },
    $i = {
      view({ attrs: t }) {
        const { class: e, color: r = "info", light: n, size: i = "md", theme: o = {}, ...a } = t,
          s = O(Hi, o);
        return h(
          "span",
          { role: "status", ...a },
          h(
            "svg",
            {
              fill: "none",
              viewBox: "0 0 100 101",
              class: I(
                s.base,
                s.color[r],
                s.light[n ? "on" : "off"].base,
                s.light[n ? "on" : "off"].color[r],
                s.size[i],
                e,
              ),
            },
            [
              h("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor",
              }),
              h("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill",
              }),
            ],
          ),
        );
      },
    },
    Bi = {
      view({ attrs: t, children: e }) {
        const {
            class: r,
            color: n = "info",
            disabled: i = !1,
            fullSized: o,
            isProcessing: a = !1,
            processingLabel: s = "Loading...",
            processingSpinner: c,
            gradientDuoTone: p,
            gradientMonochrome: f,
            label: g,
            outline: v = !1,
            pill: w = !1,
            positionInGroup: k = "none",
            size: b = "md",
            theme: x = {},
            ...A
          } = t,
          _ = O(Di, x);
        return h(
          "button",
          {
            type: "button",
            disabled: i,
            class: I(
              _.base,
              i && _.disabled,
              !p && !f && _.color[n],
              p && !f && _.gradientDuoTone[p],
              !p && f && _.gradient[f],
              v && (_.outline.color[n] ?? _.outline.color.default),
              _.pill[w ? "on" : "off"],
              o && _.fullSized,
              Qr.position[k],
              r,
            ),
            ...A,
          },
          [
            h(
              "span",
              {
                class: I(
                  _.inner.base,
                  _.outline[v ? "on" : "off"],
                  _.outline.pill[v && w ? "on" : "off"],
                  _.size[b],
                  v && !_.outline.color[n] && _.inner.outline,
                  a && _.isProcessing,
                  a && _.inner.isProcessingPadding[b],
                  _.inner.position[k],
                ),
              },
              a && h("span", { class: I(_.spinnerSlot, _.spinnerLeftPosition[b]) }, c || h($i, { size: b })),
              e.length > 0 ? e : h("span", { class: I(_.label) }, a ? s : g),
            ),
          ],
        );
      },
    },
    qi = Object.assign(Bi, { Group: yl }),
    en = {
      root: {
        base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
        children: "flex h-full flex-col justify-center gap-4 p-6",
        horizontal: { off: "flex-col", on: "flex-col md:max-w-xl md:flex-row" },
        href: "hover:bg-gray-100 dark:hover:bg-gray-700",
      },
      img: {
        base: "",
        horizontal: {
          off: "rounded-t-lg",
          on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
        },
      },
    },
    wl = {
      view({ attrs: t, children: e }) {
        const { class: r, horizontal: n, href: i, theme: o = {}, ...a } = t,
          s = typeof i > "u" ? "div" : "a",
          c = kl(a);
        n && (a.horizontal = n);
        const p = O(en, o);
        return h(
          s,
          { href: i, class: I(p.root.base, p.root.horizontal[n ? "on" : "off"], i && p.root.href, r), ...c },
          [h(xl, { ...a }), h("div", { class: p.root.children }, e)],
        );
      },
    },
    xl = {
      view({ attrs: t }) {
        const { horizontal: e, imgAlt: r, imgSrc: n, theme: i = {} } = t,
          o = O(en, i);
        return n ? h("img", { alt: r ?? "", src: n, class: I(o.img.base, o.img.horizontal[e ? "on" : "off"]) }) : null;
      },
    },
    kl = kr(["class", "horizontal", "href", "imgSrc", "imgAlt", "theme"]),
    Gi = {
      root: {
        base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
        color: {
          blue: "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
          cyan: "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
          dark: "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
          default: "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
          failure: "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
          gray: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
          green: "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
          indigo: "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
          info: "focus:ring-blue-800 dark:ring-offset-gray-800 dark:focus:ring-blue-800 text-blue-800",
          light: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
          lime: "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
          pink: "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
          purple: "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
          red: "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
          success: "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
          teal: "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
          warning: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
          yellow: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
        },
      },
    },
    _l = {
      view({ attrs: t, children: e }) {
        const { class: r, color: n = "default", theme: i = {}, ...o } = t,
          a = O(Gi, i);
        return h("input", { type: "checkbox", class: I(a.root.base, a.root.color[n], r), ...o }, e);
      },
    },
    xt = {
      arrowIcon: "ml-2 h-4 w-4",
      content: "py-2 text-sm text-gray-700 dark:text-gray-200",
      floating: {
        animation: "transition-opacity",
        base: "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 hidden",
        divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
        header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
        item: {
          container: "",
          base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
          icon: "mr-2 h-4 w-4",
        },
      },
      inlineWrapper: "flex items-center",
    },
    El = {
      isActive: !1,
      view({ attrs: t, children: e, state: r }) {
        const { class: n, icon: i, theme: o = {}, ...a } = t,
          s = O(xt.floating.item, o),
          c = () => (r.isActive = !r.isActive);
        return h(
          "li",
          { class: s.container },
          h(
            "button",
            {
              class: I(s.base, n),
              tabIndex: r.isActive ? 0 : -1,
              onmouseover: () => {
                c();
              },
              onmouseout: () => {
                c();
              },
              ...a,
            },
            [i && h(i, { class: s.icon }), e],
          ),
        );
      },
    },
    Vi = {
      view({ attrs: t }) {
        const { class: e, ...r } = t;
        return h("div", { class: I(xt.floating.divider, e), ...r });
      },
    },
    Il = {
      view({ attrs: t, children: e }) {
        const { class: r, ...n } = t;
        return [h("div", { class: I(xt.floating.header, r), ...n }, e), h(Vi)];
      },
    },
    Fi = {
      menuId: "dropdownMenu",
      buttonId: "dropdownButton",
      dropdown: null,
      options: {
        placement: "bottom",
        triggerType: "click",
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        ignoreClickOutsideClass: !1,
      },
      oninit({ attrs: t, state: e }) {
        t.id && ((e.menuId = `${t.id}Menu`), (e.buttonId = `${t.id}Button`)),
          t.placement && (e.options.placement = t.placement),
          t.trigger && (e.options.triggerType = t.trigger),
          t.offsetSkidding && (e.options.offsetSkidding = t.offsetSkidding),
          t.offsetDistance && (e.options.offsetDistance = t.offsetDistance),
          t.delay && (e.options.delay = t.delay),
          t.ignoreClickOutsideClass && (e.options.ignoreClickOutsideClass = t.ignoreClickOutsideClass);
      },
      oncreate({ state: t }) {
        const e = document.getElementById(t.menuId),
          r = document.getElementById(t.buttonId);
        t.dropdown = new qr(e, r, t.options);
      },
      view({ attrs: t, children: e, state: r }) {
        const {
            class: n,
            arrowIcon: i = !0,
            dismissOnClick: o = !0,
            inline: a,
            label: s,
            size: c = "md",
            theme: p = {},
            ...f
          } = t,
          g = Cl(f),
          v = O(xt, p);
        let w = Qn;
        return (
          r.options.placement.startsWith("right")
            ? (w = ei)
            : r.options.placement.startsWith("left")
            ? (w = Da)
            : r.options.placement.startsWith("top") && (w = Ha),
          [
            a
              ? h("button", { id: r.buttonId, type: "button", class: v.inlineWrapper }, s)
              : h(
                  qi,
                  {
                    id: r.buttonId,
                    type: "button",
                    size: c,
                    "data-dropdown-placement": r.options.placement,
                    "data-dropdown-toggle": r.menuId,
                    onclick: () => {
                      r.dropdown.toggle();
                    },
                  },
                  [s, i && h(w, { class: v.arrowIcon })],
                ),
            h(
              "div",
              { id: r.menuId, class: I(v.floating.base, v.floating.animation, "duration-100", n), ...g },
              h("ul", { class: v.content, tabIndex: -1 }, e),
            ),
          ]
        );
      },
    },
    Cl = kr(["id", "placement", "trigger", "offsetSkidding", "offsetDistance", "delay", "ignoreClickOutsideClass"]),
    Al = Object.assign(Fi, { Item: El, Header: Il, Divider: Vi }),
    Wi = {
      root: { base: "flex" },
      field: {
        base: "relative w-full",
        input: {
          base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
          sizes: { sm: "sm:text-xs", md: "text-sm", lg: "sm:text-md" },
          colors: {
            failure:
              "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            success:
              "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
            warning:
              "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          },
        },
      },
    },
    Ui = {
      root: {
        base: "mt-2 text-sm",
        colors: {
          failure: "text-red-600 dark:text-red-500",
          gray: "text-gray-500 dark:text-gray-400",
          info: "text-blue-700 dark:text-blue-800",
          success: "text-green-600 dark:text-green-500",
          warning: "text-yellow-500 dark:text-yellow-600",
        },
      },
    },
    kt = {
      view({ attrs: t, children: e }) {
        const { class: r, color: n = "default", theme: i = {}, value: o, ...a } = t,
          s = O(Ui, i);
        return h("p", { class: I(s.root.base, s.root.colors[n], r), ...a }, o ?? e ?? "");
      },
    },
    Tl = {
      view({ attrs: t, children: e }) {
        const { class: r, color: n = "gray", helperText: i, size: o = "md", theme: a = {}, ...s } = t,
          c = O(Wi, a);
        return [
          h(
            "div",
            { class: I(c.root.base, r) },
            h(
              "div",
              { class: c.field.base },
              h("input", {
                class: I(c.field.input.base, c.field.input.colors[n], c.field.input.sizes[o]),
                type: "file",
                ...s,
              }),
            ),
          ),
          i && h(kt, { color: n }, i),
        ];
      },
    },
    Te = {
      root: {
        base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
        container: "w-full p-6",
        bgDark: "bg-gray-800",
      },
      groupLink: {
        base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
        link: { base: "last:mr-0 md:mr-6", href: "hover:underline" },
        col: "flex-col space-y-4",
      },
      icon: { base: "text-gray-500 dark:hover:text-white", size: "h-5 w-5" },
      title: { base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white" },
      divider: { base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" },
      copyright: {
        base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
        href: "ml-1 hover:underline",
        span: "ml-1",
      },
      brand: {
        base: "mb-4 flex items-center sm:mb-0",
        img: "mr-3 h-8",
        span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
      },
    },
    Ll = {
      view({ attrs: t, children: e }) {
        const { alt: r, class: n, href: i, name: o, src: a, theme: s = {}, ...c } = t,
          p = O(Te.brand, s);
        return h(
          "div",
          i
            ? h("a", { href: i, class: I(p.base, n), ...c }, [
                h("img", { alt: r, src: a, class: p.img }),
                h("span", { class: p.span }, o),
                e,
              ])
            : h("img", { alt: r, src: a, class: I(p.img, n), ...c }),
        );
      },
    },
    zl = {
      view({ attrs: t }) {
        const { by: e, class: r, href: n, theme: i = {}, year: o, ...a } = t,
          s = O(Te.copyright, i);
        return h("div", { class: I(s.base, r), ...a }, [
          `© ${o}`,
          n ? h("a", { href: n, class: s.href }, e) : h("span", { class: s.span }, e),
        ]);
      },
    },
    Ol = {
      view({ attrs: t }) {
        const { class: e, theme: r = {}, ...n } = t,
          i = O(Te.divider, r);
        return h("hr", { class: I(i.base, e), ...n });
      },
    },
    Pl = {
      view({ attrs: t }) {
        const { ariaLabel: e, class: r, href: n, icon: i, theme: o = {}, ...a } = t,
          s = O(Te.footer.icon, o);
        return h(
          "div",
          n
            ? h("a", { "aria-label": e, href: n, class: I(s.base, r), ...a }, h(i, { class: s.size }))
            : h(i, { class: s.size, ...a }),
        );
      },
    },
    Sl = {
      view({ attrs: t, children: e }) {
        const { as: r = "a", class: n, href: i, theme: o = {}, ...a } = t,
          s = O(Te.groupLink.link, o);
        return h("li", { class: I(s.base, n) }, h(r, { href: i, class: s.href, ...a }, e));
      },
    },
    jl = {
      view({ attrs: t, children: e }) {
        const { class: r, col: n = !1, theme: i = {}, ...o } = t,
          a = O(Te.groupLink, i);
        return h("ul", { class: I(a.base, n && a.col, r), ...o }, e);
      },
    },
    Rl = {
      view({ attrs: t }) {
        const { as: e = "h2", class: r, theme: n = {}, title: i, ...o } = t,
          a = O(Te.title, n);
        return h(e, { class: I(a.base, r), ...o }, i);
      },
    },
    Ki = {
      view({ attrs: t, children: e }) {
        const { bgDark: r = !1, class: n, container: i = !1, theme: o = {}, ...a } = t,
          s = O(Te, o);
        return h("footer", { class: I(s.root.base, r && s.root.bgDark, i && s.root.container, n), ...a }, e);
      },
    },
    Ml = Object.assign(Ki, { Brand: Ll, Copyright: zl, Divider: Ol, Icon: Pl, Link: Sl, LinkGroup: jl, Title: Rl }),
    Xi = {
      root: {
        base: "px-2 py-1.5 mr-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
        icon: "inline-block",
      },
    },
    Nl = {
      view({ attrs: t, children: e }) {
        const { class: r, icon: n, theme: i = {}, ...o } = t,
          a = O(Xi, i);
        return h("span", { class: I(a.root.base, r), ...o }, [n && h(n, { class: a.root.icon }), e]);
      },
    },
    Yi = {
      root: {
        base: "text-sm font-medium",
        disabled: "opacity-50",
        colors: {
          default: "text-gray-900 dark:text-white",
          failure: "text-red-700 dark:text-red-500",
          info: "text-blue-500 dark:text-blue-600",
          success: "text-green-700 dark:text-green-500",
          warning: "text-yellow-500 dark:text-yellow-600",
        },
      },
    },
    Dl = {
      view({ attrs: t, children: e }) {
        const { class: r, color: n = "default", disabled: i = !1, value: o, theme: a = {}, ...s } = t,
          c = O(Yi, a);
        return h("label", { class: I(c.root.base, c.root.colors[n], i && c.root.disabled, r), ...s }, e ?? e ?? "");
      },
    },
    tn = {
      root: {
        base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left",
      },
      item: {
        base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
        link: {
          base: "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
          active: {
            off: "hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
            on: "bg-blue-700 text-white dark:bg-gray-800",
          },
          href: { off: "", on: "" },
          icon: "mr-2 h-4 w-4",
        },
      },
    },
    Hl = {
      view({ attrs: t, children: e }) {
        const { active: r, class: n, href: i, icon: o, theme: a = {}, ...s } = t,
          c = O(tn.item, a),
          p = typeof i < "u",
          f = p ? "a" : "button";
        return h("li", { class: I(c.base, n) }, [
          h(
            f,
            {
              href: i,
              type: p ? void 0 : "button",
              class: I(c.link.active[r ? "on" : "off"], c.link.base, c.link.href[p ? "on" : "off"]),
              ...s,
            },
            [o && h(o, { "aria-hidden": !0, class: c.link.icon }), e],
          ),
        ]);
      },
    },
    Ji = {
      view({ attrs: t, children: e }) {
        const { class: r, theme: n = {}, ...i } = t,
          o = O(tn, n);
        return h("ul", { class: I(o.root.base, r), ...i }, e);
      },
    },
    $l = Object.assign(Ji, { Item: Hl }),
    We = {
      root: {
        base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
        rounded: { on: "rounded", off: "" },
        bordered: { on: "border", off: "" },
        inner: { base: "mx-auto flex flex-wrap items-center justify-between", fluid: { on: "", off: "container" } },
      },
      brand: { base: "flex items-center" },
      collapse: {
        base: "w-full md:block md:w-auto",
        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
        hidden: { on: "hidden", off: "" },
      },
      link: {
        base: "block py-2 pr-4 pl-3 md:p-0",
        active: {
          on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",
          off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
        },
        disabled: { on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600", off: "" },
      },
      toggle: {
        base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
        icon: "h-6 w-6 shrink-0",
      },
    },
    Bl = {
      view({ attrs: t, children: e }) {
        const { class: r, theme: n = {}, ...i } = t,
          o = O(We.brand, n);
        return h(h.route.Link, { class: I(o.base, r), ...i }, e);
      },
    },
    ql = {
      view({ attrs: t, children: e }) {
        const { class: r, theme: n = {}, ...i } = t,
          o = O(We.collapse, n);
        return h("div", { class: I(o.base, r), ...i }, h("ul", { class: o.list }, e));
      },
    };
  We.link;
  const Gl = {
      view({ attrs: t, children: e }) {
        const { class: r, active: n, disabled: i, theme: o = {}, ...a } = t,
          s = O(We.link, o);
        return h(
          "li",
          h(
            h.route.Link,
            { class: I(s.base, n && s.active.on, !n && !i && s.active.off, s.disabled[i ? "on" : "off"], r), ...a },
            e,
          ),
        );
      },
    },
    Vl = {
      view({ attrs: t }) {
        const { class: e, theme: r = {}, ...n } = t,
          i = O(We.toggle, r);
        return h("button", { class: I(i.base, e), ...n }, h("span", { class: "sr-only" }, "Open main menu"));
      },
    },
    Zi = {
      view({ attrs: t, children: e }) {
        const { class: r, bordered: n, rounded: i, fluid: o = !1, theme: a = {}, ...s } = t,
          c = O(We.root, a);
        return h(
          "nav",
          { class: I(c.base, c.bordered[n ? "on" : "off"], c.rounded[i ? "on" : "off"], r), ...s },
          h("div", { class: I(c.inner.base, c.inner.fluid[o ? "on" : "off"]) }, e),
        );
      },
    },
    Fl = Object.assign(Zi, { Brand: Bl, Collapse: ql, Link: Gl, Toggle: Vl }),
    Qi = {
      root: {
        base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600 text-blue-600",
      },
    },
    Wl = {
      view({ attrs: t, children: e }) {
        const { class: r, theme: n = {}, ...i } = t,
          o = O(Qi, n);
        return h("input", { type: "radio", class: I(o.root.base, r), ...i }, e);
      },
    },
    eo = {
      root: { base: "flex" },
      field: {
        base: "relative w-full",
        input: {
          base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
          sizes: { sm: "h-1 range-sm", md: "h-2", lg: "h-3 range-lg" },
        },
      },
    },
    Ul = {
      view({ attrs: t }) {
        const { class: e, size: r = "md", theme: n = {}, ...i } = t,
          o = O(eo, n);
        return h(
          "div",
          { class: I(o.root.base, e) },
          h(
            "div",
            { class: o.field.base },
            h("input", { type: "range", class: I(o.field.input.base, o.field.input.sizes[r]), ...i }),
          ),
        );
      },
    },
    to = {
      base: "flex",
      addon:
        "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
      field: {
        base: "relative w-full",
        icon: {
          base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
          svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
        },
        select: {
          base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
          withIcon: { on: "pl-10", off: "" },
          withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
          withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
          sizes: { sm: "p-2 sm:text-xs", md: "p-2.5 text-sm", lg: "sm:text-md p-4" },
          colors: {
            failure:
              "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            success:
              "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
            warning:
              "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          },
        },
      },
    },
    Kl = {
      view({ attrs: t, children: e }) {
        const {
            addon: r,
            class: n,
            color: i = "gray",
            helperText: o,
            icon: a,
            shadow: s,
            size: c = "md",
            theme: p = {},
            ...f
          } = t,
          g = O(to, p);
        return h("div", { class: I(g.base, n) }, [
          r && h("span", { class: g.addon }, r),
          h("div", { class: g.field.base }, [
            a && h("div", { class: g.field.icon.base }, h(a, { class: g.field.icon.svg })),
            h(
              "select",
              {
                class: I(
                  g.field.select.base,
                  g.field.select.colors[i],
                  g.field.select.sizes[c],
                  g.field.select.withIcon[a ? "on" : "off"],
                  g.field.select.withAddon[r ? "on" : "off"],
                  g.field.select.withShadow[s ? "on" : "off"],
                ),
                ...f,
              },
              e,
            ),
            o && h(kt, { color: i }, o),
          ]),
        ]);
      },
    },
    Ue = {
      root: {
        base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
        shadow: "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
        wrapper: "relative",
      },
      body: {
        base: "group/body",
        cell: {
          base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4",
        },
      },
      head: {
        base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
        cell: {
          base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3",
        },
      },
      row: {
        base: "group/row",
        hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
        striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
      },
    },
    Xl = Object.assign(
      {
        view({ attrs: t, children: e }) {
          const { class: r, theme: n = {}, ...i } = t,
            o = O(Ue.root, n);
          return h("div", { class: I(o.wrapper) }, [
            h("div", { class: I(o.shadow, r) }),
            h("table", { class: I(o.base, r), ...i }, e),
          ]);
        },
      },
      {
        Head: {
          view({ attrs: t, children: e }) {
            const { class: r, theme: n = {}, ...i } = t,
              o = O(Ue.head, n);
            return h("thead", { class: I(o.base, r), ...i }, h("tr", e));
          },
        },
        Body: {
          view({ attrs: t, children: e }) {
            const { class: r, theme: n = {}, ...i } = t,
              o = O(Ue.body, n);
            return h("tbody", { class: I(o.base, r), ...i }, e);
          },
        },
        Row: {
          view({ attrs: t, children: e }) {
            const { class: r, hoverable: n, striped: i, theme: o = {}, ...a } = t,
              s = O(Ue.row, o);
            return h("tr", { class: I(s.base, i && s.striped, n && s.hovered, r), ...a }, e);
          },
        },
        Cell: {
          view({ attrs: t, children: e }) {
            const { class: r, theme: n = {}, ...i } = t,
              o = O(Ue.body.cell, n);
            return h("td", { class: I(o.base, r), ...i }, e);
          },
        },
        HeadCell: {
          view({ attrs: t, children: e }) {
            const { class: r, theme: n = {}, ...i } = t,
              o = O(Ue.head, n);
            return h("th", { class: I(o.cell.base, r), ...i }, e);
          },
        },
      },
    ),
    ro = {
      base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
      colors: {
        failure:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        success:
          "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        warning:
          "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
      },
      withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
    },
    Yl = {
      view({ attrs: t, children: e }) {
        const { class: r, color: n = "gray", helperText: i, shadow: o, theme: a = {}, ...s } = t,
          c = O(ro, a);
        return [
          h("textarea", { class: I(c.base, c.colors[n], c.withShadow[o ? "on" : "off"], r), ...s }, e),
          i && h(kt, { color: n }, i),
        ];
      },
    },
    no = {
      base: "flex",
      addon:
        "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
      field: {
        base: "relative w-full",
        icon: {
          base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
          svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
        },
        rightIcon: {
          base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
          svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
        },
        input: {
          base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
          sizes: { sm: "p-2 sm:text-xs", md: "p-2.5 text-sm", lg: "sm:text-md p-4" },
          colors: {
            failure:
              "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
            success:
              "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
            warning:
              "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          },
          withRightIcon: { on: "pr-10", off: "" },
          withIcon: { on: "pl-10", off: "" },
          withAddon: { on: "rounded-r-lg", off: "rounded-lg" },
          withShadow: { on: "shadow-sm dark:shadow-sm-light", off: "" },
        },
      },
    },
    Jl = {
      view({ attrs: t }) {
        const {
            addon: e,
            class: r,
            color: n = "gray",
            helperText: i,
            icon: o,
            rightIcon: a,
            shadow: s,
            sizing: c = "md",
            theme: p = {},
            ...f
          } = t,
          g = O(no, p);
        return [
          h("div", { class: I(g.base, r) }, [
            e && h("span", { class: g.addon }, e),
            h("div", { class: g.field.base }, [
              o && h("div", { class: g.field.icon.base }, h(o, { class: g.field.icon.svg })),
              a && h("div", { class: g.field.rightIcon.base }, h(a, { class: g.field.rightIcon.svg })),
              h("input", {
                class: I(
                  g.field.input.base,
                  g.field.input.colors[n],
                  g.field.input.sizes[c],
                  g.field.input.withIcon[o ? "on" : "off"],
                  g.field.input.withRightIcon[a ? "on" : "off"],
                  g.field.input.withAddon[e ? "on" : "off"],
                  g.field.input.withShadow[s ? "on" : "off"],
                ),
                ...f,
              }),
            ]),
          ]),
          i && h(kt, { color: n }, i),
        ];
      },
    },
    io = {
      root: {
        base: "group relative flex items-center rounded-lg focus:outline-none",
        active: { on: "cursor-pointer", off: "cursor-not-allowed opacity-50" },
        label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
      },
      toggle: {
        base: "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
        checked: {
          on: "after:translate-x-full after:border-white",
          off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
          color: {
            blue: "bg-blue-700 border-blue-700",
            cyan: "bg-cyan-500 border-cyan-500",
            dark: "bg-dark-700 border-dark-900",
            failure: "bg-red-700 border-red-900",
            gray: "bg-gray-500 border-gray-600",
            green: "bg-green-600 border-green-700",
            indigo: "bg-indigo-400 border-indigo-400",
            info: "bg-blue-600 border-blue-600",
            light: "bg-light-700 border-light-900",
            lime: "bg-lime-400 border-lime-400",
            pink: "bg-pink-600 border-pink-600",
            purple: "bg-purple-700 border-purple-900",
            red: "bg-red-700 border-red-900",
            success: "bg-green-500 border-green-500",
            teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
            warning: "bg-yellow-600 border-yellow-600",
            yellow: "bg-yellow-400 border-yellow-400",
          },
        },
        sizes: {
          sm: "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
          md: "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
          lg: "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6",
        },
      },
    },
    Zl = {
      toggled: !1,
      oninit({ attrs: t, state: e }) {
        e.toggled = t.checked;
      },
      view({ attrs: t, state: e }) {
        const {
            id: r,
            class: n,
            color: i = "blue",
            size: o = "md",
            disabled: a,
            label: s,
            name: c,
            theme: p = {},
            ...f
          } = t,
          g = O(io, p),
          v = () => (e.toggled = !e.toggled),
          w = () => {
            a || v();
          },
          k = (b) => {
            b.code === "Enter" && b.preventDefault();
          };
        return [
          c && e.toggled
            ? h("input", { checked: e.toggled, hidden: !0, name: c, readOnly: !0, type: "checkbox", class: "sr-only" })
            : null,
          h(
            "button",
            {
              "aria-checked": e.toggled,
              "aria-labelledby": `${r}-flowbite-toggleswitch-label`,
              id: `${r}-flowbite-toggleswitch`,
              onclick: w,
              onkeydown: k,
              role: "switch",
              tabIndex: 0,
              type: "button",
              class: I(g.root.base, g.root.active[a ? "off" : "on"], n),
              ...f,
            },
            h("div", {
              class: I(
                g.toggle.base,
                g.toggle.checked[e.toggled ? "on" : "off"],
                e.toggled && g.toggle.checked.color[i],
                g.toggle.sizes[o],
              ),
            }),
            s != null && s.length
              ? h("span", { id: `${r}-flowbite-toggleswitch-label`, class: g.root.label }, s)
              : null,
          ),
        ];
      },
    },
    Ql = {
      accordion: Pt,
      avatar: Qt,
      alert: Si,
      badge: Ri,
      blockquote: Mi,
      breadcrumb: Zr,
      button: Di,
      buttonGroup: Qr,
      card: en,
      checkbox: Gi,
      dropdown: xt,
      fileInput: Wi,
      footer: Te,
      helperText: Ui,
      kbd: Xi,
      label: Yi,
      listGroup: tn,
      navbar: We,
      radio: Qi,
      range: eo,
      select: to,
      spinner: Hi,
      table: Ue,
      textarea: ro,
      textInput: no,
      toggle: io,
    };
  (G.Accordion = dl),
    (G.AccordionComponent = Pi),
    (G.Alert = ul),
    (G.Avatar = gl),
    (G.AvatarComponent = ji),
    (G.Badge = hl),
    (G.Blockquote = bl),
    (G.Breadcrumb = vl),
    (G.BreadcrumbComponent = Ni),
    (G.Button = qi),
    (G.ButtonComponent = Bi),
    (G.Card = wl),
    (G.Checkbox = _l),
    (G.Dropdown = Al),
    (G.DropdownComponent = Fi),
    (G.FileInput = Tl),
    (G.Footer = Ml),
    (G.FooterComponent = Ki),
    (G.HelperText = kt),
    (G.Kbd = Nl),
    (G.Label = Dl),
    (G.ListGroup = $l),
    (G.ListGroupComponent = Ji),
    (G.Navbar = Fl),
    (G.NavbarComponent = Zi),
    (G.Radio = Wl),
    (G.Range = Ul),
    (G.Select = Kl),
    (G.Spinner = $i),
    (G.Table = Xl),
    (G.TextInput = Jl),
    (G.Textarea = Yl),
    (G.Toggle = Zl),
    (G.theme = Ql),
    Object.defineProperty(G, Symbol.toStringTag, { value: "Module" });
});
