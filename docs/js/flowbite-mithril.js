var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var cr, un;
function je() {
  if (un)
    return cr;
  un = 1;
  function t(e, r, n, i, o, a) {
    return { tag: e, key: r, attrs: n, children: i, text: o, dom: a, domSize: void 0, state: void 0, events: void 0, instance: void 0 };
  }
  return t.normalize = function(e) {
    return Array.isArray(e) ? t("[", void 0, void 0, t.normalizeChildren(e), void 0, void 0) : e == null || typeof e == "boolean" ? null : typeof e == "object" ? e : t("#", void 0, void 0, String(e), void 0, void 0);
  }, t.normalizeChildren = function(e) {
    var r = [];
    if (e.length) {
      for (var n = e[0] != null && e[0].key != null, i = 1; i < e.length; i++)
        if ((e[i] != null && e[i].key != null) !== n)
          throw new TypeError(
            n && (e[i] != null || typeof e[i] == "boolean") ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole." : "In fragments, vnodes must either all have keys or none have keys."
          );
      for (var i = 0; i < e.length; i++)
        r[i] = t.normalize(e[i]);
    }
    return r;
  }, cr = t, cr;
}
var Ji = je(), Vn = function() {
  var t = arguments[this], e = this + 1, r;
  if (t == null ? t = {} : (typeof t != "object" || t.tag != null || Array.isArray(t)) && (t = {}, e = this), arguments.length === e + 1)
    r = arguments[e], Array.isArray(r) || (r = [r]);
  else
    for (r = []; e < arguments.length; )
      r.push(arguments[e++]);
  return Ji("", t.key, t, r);
}, Xt = {}.hasOwnProperty, Zi = je(), Qi = Vn, et = Xt, eo = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g, Wn = {};
function fn(t) {
  for (var e in t)
    if (et.call(t, e))
      return !1;
  return !0;
}
function to(t) {
  for (var e, r = "div", n = [], i = {}; e = eo.exec(t); ) {
    var o = e[1], a = e[2];
    if (o === "" && a !== "")
      r = a;
    else if (o === "#")
      i.id = a;
    else if (o === ".")
      n.push(a);
    else if (e[3][0] === "[") {
      var s = e[6];
      s && (s = s.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")), e[4] === "class" ? n.push(s) : i[e[4]] = s === "" ? s : s || !0;
    }
  }
  return n.length > 0 && (i.className = n.join(" ")), Wn[t] = { tag: r, attrs: i };
}
function ro(t, e) {
  var r = e.attrs, n = et.call(r, "class"), i = n ? r.class : r.className;
  if (e.tag = t.tag, e.attrs = {}, !fn(t.attrs) && !fn(r)) {
    var o = {};
    for (var a in r)
      et.call(r, a) && (o[a] = r[a]);
    r = o;
  }
  for (var a in t.attrs)
    et.call(t.attrs, a) && a !== "className" && !et.call(r, a) && (r[a] = t.attrs[a]);
  (i != null || t.attrs.className != null) && (r.className = i != null ? t.attrs.className != null ? String(t.attrs.className) + " " + String(i) : i : t.attrs.className != null ? t.attrs.className : null), n && (r.class = null);
  for (var a in r)
    if (et.call(r, a) && a !== "key") {
      e.attrs = r;
      break;
    }
  return e;
}
function no(t) {
  if (t == null || typeof t != "string" && typeof t != "function" && typeof t.view != "function")
    throw Error("The selector must be either a string or a component.");
  var e = Qi.apply(1, arguments);
  return typeof t == "string" && (e.children = Zi.normalizeChildren(e.children), t !== "[") ? ro(Wn[t] || to(t), e) : (e.tag = t, e);
}
var Fn = no, io = je(), oo = function(t) {
  return t == null && (t = ""), io("<", void 0, void 0, t, void 0, void 0);
}, ao = je(), so = Vn, lo = function() {
  var t = so.apply(0, arguments);
  return t.tag = "[", t.children = ao.normalizeChildren(t.children), t;
}, zr = Fn;
zr.trust = oo;
zr.fragment = lo;
var co = zr, jt = { exports: {} }, dr, pn;
function Un() {
  if (pn)
    return dr;
  pn = 1;
  var t = function(e) {
    if (!(this instanceof t))
      throw new Error("Promise must be called with 'new'.");
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    var r = this, n = [], i = [], o = f(n, !0), a = f(i, !1), s = r._instance = { resolvers: n, rejectors: i }, c = typeof setImmediate == "function" ? setImmediate : setTimeout;
    function f(g, v) {
      return function w(k) {
        var b;
        try {
          if (v && k != null && (typeof k == "object" || typeof k == "function") && typeof (b = k.then) == "function") {
            if (k === r)
              throw new TypeError("Promise can't be resolved with itself.");
            p(b.bind(k));
          } else
            c(function() {
              !v && g.length === 0 && console.error("Possible unhandled promise rejection:", k);
              for (var x = 0; x < g.length; x++)
                g[x](k);
              n.length = 0, i.length = 0, s.state = v, s.retry = function() {
                w(k);
              };
            });
        } catch (x) {
          a(x);
        }
      };
    }
    function p(g) {
      var v = 0;
      function w(b) {
        return function(x) {
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
    p(e);
  };
  return t.prototype.then = function(e, r) {
    var n = this, i = n._instance;
    function o(f, p, g, v) {
      p.push(function(w) {
        if (typeof f != "function")
          g(w);
        else
          try {
            a(f(w));
          } catch (k) {
            s && s(k);
          }
      }), typeof i.retry == "function" && v === i.state && i.retry();
    }
    var a, s, c = new t(function(f, p) {
      a = f, s = p;
    });
    return o(e, i.resolvers, a, !0), o(r, i.rejectors, s, !1), c;
  }, t.prototype.catch = function(e) {
    return this.then(null, e);
  }, t.prototype.finally = function(e) {
    return this.then(
      function(r) {
        return t.resolve(e()).then(function() {
          return r;
        });
      },
      function(r) {
        return t.resolve(e()).then(function() {
          return t.reject(r);
        });
      }
    );
  }, t.resolve = function(e) {
    return e instanceof t ? e : new t(function(r) {
      r(e);
    });
  }, t.reject = function(e) {
    return new t(function(r, n) {
      n(e);
    });
  }, t.all = function(e) {
    return new t(function(r, n) {
      var i = e.length, o = 0, a = [];
      if (e.length === 0)
        r([]);
      else
        for (var s = 0; s < e.length; s++)
          (function(c) {
            function f(p) {
              o++, a[c] = p, o === i && r(a);
            }
            e[c] != null && (typeof e[c] == "object" || typeof e[c] == "function") && typeof e[c].then == "function" ? e[c].then(f, n) : f(e[c]);
          })(s);
    });
  }, t.race = function(e) {
    return new t(function(r, n) {
      for (var i = 0; i < e.length; i++)
        e[i].then(r, n);
    });
  }, dr = t, dr;
}
var ut = Un();
typeof window < "u" ? (typeof window.Promise > "u" ? window.Promise = ut : window.Promise.prototype.finally || (window.Promise.prototype.finally = ut.prototype.finally), jt.exports = window.Promise) : typeof Qe < "u" ? (typeof Qe.Promise > "u" ? Qe.Promise = ut : Qe.Promise.prototype.finally || (Qe.Promise.prototype.finally = ut.prototype.finally), jt.exports = Qe.Promise) : jt.exports = ut;
var Kn = jt.exports, ur, gn;
function uo() {
  if (gn)
    return ur;
  gn = 1;
  var t = je();
  return ur = function(e) {
    var r = e && e.document, n, i = {
      svg: "http://www.w3.org/2000/svg",
      math: "http://www.w3.org/1998/Math/MathML"
    };
    function o(d) {
      return d.attrs && d.attrs.xmlns || i[d.tag];
    }
    function a(d, l) {
      if (d.state !== l)
        throw new Error("'vnode.state' must not be modified.");
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
    function f(d, l, u, m, y, E, N) {
      for (var W = u; W < m; W++) {
        var T = l[W];
        T != null && p(d, T, y, N, E);
      }
    }
    function p(d, l, u, m, y) {
      var E = l.tag;
      if (typeof E == "string")
        switch (l.state = {}, l.attrs != null && Ye(l.attrs, l, u), E) {
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
      else
        A(d, l, u, m, y);
    }
    function g(d, l, u) {
      l.dom = r.createTextNode(l.children), B(d, l.dom, u);
    }
    var v = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" };
    function w(d, l, u, m) {
      var y = l.children.match(/^\s*?<(\w+)/im) || [], E = r.createElement(v[y[1]] || "div");
      u === "http://www.w3.org/2000/svg" ? (E.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + l.children + "</svg>", E = E.firstChild) : E.innerHTML = l.children, l.dom = E.firstChild, l.domSize = E.childNodes.length, l.instance = [];
      for (var N = r.createDocumentFragment(), W; W = E.firstChild; )
        l.instance.push(W), N.appendChild(W);
      B(d, N, m);
    }
    function k(d, l, u, m, y) {
      var E = r.createDocumentFragment();
      if (l.children != null) {
        var N = l.children;
        f(E, N, 0, N.length, u, null, m);
      }
      l.dom = E.firstChild, l.domSize = E.childNodes.length, B(d, E, y);
    }
    function b(d, l, u, m, y) {
      var E = l.tag, N = l.attrs, W = N && N.is;
      m = o(l) || m;
      var T = m ? W ? r.createElementNS(m, E, { is: W }) : r.createElementNS(m, E) : W ? r.createElement(E, { is: W }) : r.createElement(E);
      if (l.dom = T, N != null && ae(l, N, m), B(d, T, y), !S(l) && l.children != null) {
        var J = l.children;
        f(T, J, 0, J.length, u, null, m), l.tag === "select" && N != null && xe(l, N);
      }
    }
    function x(d, l) {
      var u;
      if (typeof d.tag.view == "function") {
        if (d.state = Object.create(d.tag), u = d.state.view, u.$$reentrantLock$$ != null)
          return;
        u.$$reentrantLock$$ = !0;
      } else {
        if (d.state = void 0, u = d.tag, u.$$reentrantLock$$ != null)
          return;
        u.$$reentrantLock$$ = !0, d.state = d.tag.prototype != null && typeof d.tag.prototype.view == "function" ? new d.tag(d) : d.tag(d);
      }
      if (Ye(d.state, d, l), d.attrs != null && Ye(d.attrs, d, l), d.instance = t.normalize(s.call(d.state.view, d)), d.instance === d)
        throw Error("A view cannot return the vnode it received as argument");
      u.$$reentrantLock$$ = null;
    }
    function A(d, l, u, m, y) {
      x(l, u), l.instance != null ? (p(d, l.instance, u, m, y), l.dom = l.instance.dom, l.domSize = l.dom != null ? l.instance.domSize : 0) : l.domSize = 0;
    }
    function _(d, l, u, m, y, E) {
      if (!(l === u || l == null && u == null))
        if (l == null || l.length === 0)
          f(d, u, 0, u.length, m, y, E);
        else if (u == null || u.length === 0)
          V(d, l, 0, l.length);
        else {
          var N = l[0] != null && l[0].key != null, W = u[0] != null && u[0].key != null, T = 0, J = 0;
          if (!N)
            for (; J < l.length && l[J] == null; )
              J++;
          if (!W)
            for (; T < u.length && u[T] == null; )
              T++;
          if (N !== W)
            V(d, l, J, l.length), f(d, u, T, u.length, m, y, E);
          else if (W) {
            for (var de = l.length - 1, se = u.length - 1, At, ue, oe, ce, re, ir; de >= J && se >= T && (ce = l[de], re = u[se], ce.key === re.key); )
              ce !== re && j(d, ce, re, m, y, E), re.dom != null && (y = re.dom), de--, se--;
            for (; de >= J && se >= T && (ue = l[J], oe = u[T], ue.key === oe.key); )
              J++, T++, ue !== oe && j(d, ue, oe, m, C(l, J, y), E);
            for (; de >= J && se >= T && !(T === se || ue.key !== re.key || ce.key !== oe.key); )
              ir = C(l, J, y), $(d, ce, ir), ce !== oe && j(d, ce, oe, m, ir, E), ++T <= --se && $(d, ue, y), ue !== re && j(d, ue, re, m, y, E), re.dom != null && (y = re.dom), J++, de--, ce = l[de], re = u[se], ue = l[J], oe = u[T];
            for (; de >= J && se >= T && ce.key === re.key; )
              ce !== re && j(d, ce, re, m, y, E), re.dom != null && (y = re.dom), de--, se--, ce = l[de], re = u[se];
            if (T > se)
              V(d, l, J, de + 1);
            else if (J > de)
              f(d, u, T, se + 1, m, y, E);
            else {
              var Xi = y, dn = se - T + 1, dt = new Array(dn), or = 0, ie = 0, ar = 2147483647, sr = 0, At, lr;
              for (ie = 0; ie < dn; ie++)
                dt[ie] = -1;
              for (ie = se; ie >= T; ie--) {
                At == null && (At = Y(l, J, de + 1)), re = u[ie];
                var Ze = At[re.key];
                Ze != null && (ar = Ze < ar ? Ze : -1, dt[ie - T] = Ze, ce = l[Ze], l[Ze] = null, ce !== re && j(d, ce, re, m, y, E), re.dom != null && (y = re.dom), sr++);
              }
              if (y = Xi, sr !== de - J + 1 && V(d, l, J, de + 1), sr === 0)
                f(d, u, T, se + 1, m, y, E);
              else if (ar === -1)
                for (lr = F(dt), or = lr.length - 1, ie = se; ie >= T; ie--)
                  oe = u[ie], dt[ie - T] === -1 ? p(d, oe, m, E, y) : lr[or] === ie - T ? or-- : $(d, oe, y), oe.dom != null && (y = u[ie].dom);
              else
                for (ie = se; ie >= T; ie--)
                  oe = u[ie], dt[ie - T] === -1 && p(d, oe, m, E, y), oe.dom != null && (y = u[ie].dom);
            }
          } else {
            var nr = l.length < u.length ? l.length : u.length;
            for (T = T < J ? T : J; T < nr; T++)
              ue = l[T], oe = u[T], !(ue === oe || ue == null && oe == null) && (ue == null ? p(d, oe, m, E, C(l, T + 1, y)) : oe == null ? K(d, ue) : j(d, ue, oe, m, C(l, T + 1, y), E));
            l.length > nr && V(d, l, T, l.length), u.length > nr && f(d, u, T, u.length, m, y, E);
          }
        }
    }
    function j(d, l, u, m, y, E) {
      var N = l.tag, W = u.tag;
      if (N === W) {
        if (u.state = l.state, u.events = l.events, rr(u, l))
          return;
        if (typeof N == "string")
          switch (u.attrs != null && Je(u.attrs, u, m), N) {
            case "#":
              O(l, u);
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
        else
          G(d, l, u, m, y, E);
      } else
        K(d, l), p(d, u, m, E, y);
    }
    function O(d, l) {
      d.children.toString() !== l.children.toString() && (d.dom.nodeValue = l.children), l.dom = d.dom;
    }
    function R(d, l, u, m, y) {
      l.children !== u.children ? (M(d, l), w(d, u, m, y)) : (u.dom = l.dom, u.domSize = l.domSize, u.instance = l.instance);
    }
    function z(d, l, u, m, y, E) {
      _(d, l.children, u.children, m, y, E);
      var N = 0, W = u.children;
      if (u.dom = null, W != null) {
        for (var T = 0; T < W.length; T++) {
          var J = W[T];
          J != null && J.dom != null && (u.dom == null && (u.dom = J.dom), N += J.domSize || 1);
        }
        N !== 1 && (u.domSize = N);
      }
    }
    function D(d, l, u, m) {
      var y = l.dom = d.dom;
      m = o(l) || m, l.tag === "textarea" && l.attrs == null && (l.attrs = {}), Me(l, d.attrs, l.attrs, m), S(l) || _(y, d.children, l.children, u, null, m);
    }
    function G(d, l, u, m, y, E) {
      if (u.instance = t.normalize(s.call(u.state.view, u)), u.instance === u)
        throw Error("A view cannot return the vnode it received as argument");
      Je(u.state, u, m), u.attrs != null && Je(u.attrs, u, m), u.instance != null ? (l.instance == null ? p(d, u.instance, m, E, y) : j(d, l.instance, u.instance, m, y, E), u.dom = u.instance.dom, u.domSize = u.instance.domSize) : l.instance != null ? (K(d, l.instance), u.dom = void 0, u.domSize = 0) : (u.dom = l.dom, u.domSize = l.domSize);
    }
    function Y(d, l, u) {
      for (var m = /* @__PURE__ */ Object.create(null); l < u; l++) {
        var y = d[l];
        if (y != null) {
          var E = y.key;
          E != null && (m[E] = l);
        }
      }
      return m;
    }
    var H = [];
    function F(d) {
      for (var l = [0], u = 0, m = 0, y = 0, E = H.length = d.length, y = 0; y < E; y++)
        H[y] = d[y];
      for (var y = 0; y < E; ++y)
        if (d[y] !== -1) {
          var N = l[l.length - 1];
          if (d[N] < d[y]) {
            H[y] = N, l.push(y);
            continue;
          }
          for (u = 0, m = l.length - 1; u < m; ) {
            var W = (u >>> 1) + (m >>> 1) + (u & m & 1);
            d[l[W]] < d[y] ? u = W + 1 : m = W;
          }
          d[y] < d[l[u]] && (u > 0 && (H[y] = l[u - 1]), l[u] = y);
        }
      for (u = l.length, m = l[u - 1]; u-- > 0; )
        l[u] = m, m = H[m];
      return H.length = 0, l;
    }
    function C(d, l, u) {
      for (; l < d.length; l++)
        if (d[l] != null && d[l].dom != null)
          return d[l].dom;
      return u;
    }
    function $(d, l, u) {
      var m = r.createDocumentFragment();
      L(d, m, l), B(d, m, u);
    }
    function L(d, l, u) {
      for (; u.dom != null && u.dom.parentNode === d; ) {
        if (typeof u.tag != "string") {
          if (u = u.instance, u != null)
            continue;
        } else if (u.tag === "<")
          for (var m = 0; m < u.instance.length; m++)
            l.appendChild(u.instance[m]);
        else if (u.tag !== "[")
          l.appendChild(u.dom);
        else if (u.children.length === 1) {
          if (u = u.children[0], u != null)
            continue;
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
      if (d.attrs == null || d.attrs.contenteditable == null && // attribute
      d.attrs.contentEditable == null)
        return !1;
      var l = d.children;
      if (l != null && l.length === 1 && l[0].tag === "<") {
        var u = l[0].children;
        d.dom.innerHTML !== u && (d.dom.innerHTML = u);
      } else if (l != null && l.length !== 0)
        throw new Error("Child node of a contenteditable must be trusted.");
      return !0;
    }
    function V(d, l, u, m) {
      for (var y = u; y < m; y++) {
        var E = l[y];
        E != null && K(d, E);
      }
    }
    function K(d, l) {
      var u = 0, m = l.state, y, E;
      if (typeof l.tag != "string" && typeof l.state.onbeforeremove == "function") {
        var N = s.call(l.state.onbeforeremove, l);
        N != null && typeof N.then == "function" && (u = 1, y = N);
      }
      if (l.attrs && typeof l.attrs.onbeforeremove == "function") {
        var N = s.call(l.attrs.onbeforeremove, l);
        N != null && typeof N.then == "function" && (u |= 2, E = N);
      }
      if (a(l, m), !u)
        ne(l), Q(d, l);
      else {
        if (y != null) {
          var W = function() {
            u & 1 && (u &= 2, u || T());
          };
          y.then(W, W);
        }
        if (E != null) {
          var W = function() {
            u & 2 && (u &= 1, u || T());
          };
          E.then(W, W);
        }
      }
      function T() {
        a(l, m), ne(l), Q(d, l);
      }
    }
    function M(d, l) {
      for (var u = 0; u < l.instance.length; u++)
        d.removeChild(l.instance[u]);
    }
    function Q(d, l) {
      for (; l.dom != null && l.dom.parentNode === d; ) {
        if (typeof l.tag != "string") {
          if (l = l.instance, l != null)
            continue;
        } else if (l.tag === "<")
          M(d, l);
        else {
          if (l.tag !== "[" && (d.removeChild(l.dom), !Array.isArray(l.children)))
            break;
          if (l.children.length === 1) {
            if (l = l.children[0], l != null)
              continue;
          } else
            for (var u = 0; u < l.children.length; u++) {
              var m = l.children[u];
              m != null && Q(d, m);
            }
        }
        break;
      }
    }
    function ne(d) {
      if (typeof d.tag != "string" && typeof d.state.onremove == "function" && s.call(d.state.onremove, d), d.attrs && typeof d.attrs.onremove == "function" && s.call(d.attrs.onremove, d), typeof d.tag != "string")
        d.instance != null && ne(d.instance);
      else {
        var l = d.children;
        if (Array.isArray(l))
          for (var u = 0; u < l.length; u++) {
            var m = l[u];
            m != null && ne(m);
          }
      }
    }
    function ae(d, l, u) {
      d.tag === "input" && l.type != null && d.dom.setAttribute("type", l.type);
      var m = l != null && d.tag === "input" && l.type === "file";
      for (var y in l)
        Z(d, y, null, l[y], u, m);
    }
    function Z(d, l, u, m, y, E) {
      if (!(l === "key" || l === "is" || m == null || ke(l) || u === m && !Ke(d, l) && typeof m != "object" || l === "type" && d.tag === "input")) {
        if (l[0] === "o" && l[1] === "n")
          return Ct(d, l, m);
        if (l.slice(0, 6) === "xlink:")
          d.dom.setAttributeNS("http://www.w3.org/1999/xlink", l.slice(6), m);
        else if (l === "style")
          lt(d.dom, u, m);
        else if (Xe(d, l, y)) {
          if (l === "value") {
            if ((d.tag === "input" || d.tag === "textarea") && d.dom.value === "" + m && (E || d.dom === c()) || d.tag === "select" && u !== null && d.dom.value === "" + m || d.tag === "option" && u !== null && d.dom.value === "" + m)
              return;
            if (E && "" + m != "") {
              console.error("`value` is read-only on file inputs!");
              return;
            }
          }
          d.dom[l] = m;
        } else
          typeof m == "boolean" ? m ? d.dom.setAttribute(l, "") : d.dom.removeAttribute(l) : d.dom.setAttribute(l === "className" ? "class" : l, m);
      }
    }
    function fe(d, l, u, m) {
      if (!(l === "key" || l === "is" || u == null || ke(l)))
        if (l[0] === "o" && l[1] === "n")
          Ct(d, l, void 0);
        else if (l === "style")
          lt(d.dom, u, null);
        else if (Xe(d, l, m) && l !== "className" && l !== "title" && !(l === "value" && (d.tag === "option" || d.tag === "select" && d.dom.selectedIndex === -1 && d.dom === c())) && !(d.tag === "input" && l === "type"))
          d.dom[l] = null;
        else {
          var y = l.indexOf(":");
          y !== -1 && (l = l.slice(y + 1)), u !== !1 && d.dom.removeAttribute(l === "className" ? "class" : l);
        }
    }
    function xe(d, l) {
      if ("value" in l)
        if (l.value === null)
          d.dom.selectedIndex !== -1 && (d.dom.value = null);
        else {
          var u = "" + l.value;
          (d.dom.value !== u || d.dom.selectedIndex === -1) && (d.dom.value = u);
        }
      "selectedIndex" in l && Z(d, "selectedIndex", null, l.selectedIndex, void 0);
    }
    function Me(d, l, u, m) {
      if (l && l === u && console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"), u != null) {
        d.tag === "input" && u.type != null && d.dom.setAttribute("type", u.type);
        var y = d.tag === "input" && u.type === "file";
        for (var E in u)
          Z(d, E, l && l[E], u[E], m, y);
      }
      var N;
      if (l != null)
        for (var E in l)
          (N = l[E]) != null && (u == null || u[E] == null) && fe(d, E, N, m);
    }
    function Ke(d, l) {
      return l === "value" || l === "checked" || l === "selectedIndex" || l === "selected" && d.dom === c() || d.tag === "option" && d.dom.parentNode === r.activeElement;
    }
    function ke(d) {
      return d === "oninit" || d === "oncreate" || d === "onupdate" || d === "onremove" || d === "onbeforeremove" || d === "onbeforeupdate";
    }
    function Xe(d, l, u) {
      return u === void 0 && // If it's a custom element, just keep it.
      (d.tag.indexOf("-") > -1 || d.attrs != null && d.attrs.is || // If it's a normal element, let's try to avoid a few browser bugs.
      l !== "href" && l !== "list" && l !== "form" && l !== "width" && l !== "height") && l in d.dom;
    }
    var tr = /[A-Z]/g;
    function at(d) {
      return "-" + d.toLowerCase();
    }
    function st(d) {
      return d[0] === "-" && d[1] === "-" ? d : d === "cssFloat" ? "float" : d.replace(tr, at);
    }
    function lt(d, l, u) {
      if (l !== u)
        if (u == null)
          d.style.cssText = "";
        else if (typeof u != "object")
          d.style.cssText = u;
        else if (l == null || typeof l != "object") {
          d.style.cssText = "";
          for (var m in u) {
            var y = u[m];
            y != null && d.style.setProperty(st(m), String(y));
          }
        } else {
          for (var m in u) {
            var y = u[m];
            y != null && (y = String(y)) !== String(l[m]) && d.style.setProperty(st(m), y);
          }
          for (var m in l)
            l[m] != null && u[m] == null && d.style.removeProperty(st(m));
        }
    }
    function ct() {
      this._ = n;
    }
    ct.prototype = /* @__PURE__ */ Object.create(null), ct.prototype.handleEvent = function(d) {
      var l = this["on" + d.type], u;
      typeof l == "function" ? u = l.call(d.currentTarget, d) : typeof l.handleEvent == "function" && l.handleEvent(d), this._ && d.redraw !== !1 && (0, this._)(), u === !1 && (d.preventDefault(), d.stopPropagation());
    };
    function Ct(d, l, u) {
      if (d.events != null) {
        if (d.events._ = n, d.events[l] === u)
          return;
        u != null && (typeof u == "function" || typeof u == "object") ? (d.events[l] == null && d.dom.addEventListener(l.slice(2), d.events, !1), d.events[l] = u) : (d.events[l] != null && d.dom.removeEventListener(l.slice(2), d.events, !1), d.events[l] = void 0);
      } else
        u != null && (typeof u == "function" || typeof u == "object") && (d.events = new ct(), d.dom.addEventListener(l.slice(2), d.events, !1), d.events[l] = u);
    }
    function Ye(d, l, u) {
      typeof d.oninit == "function" && s.call(d.oninit, l), typeof d.oncreate == "function" && u.push(s.bind(d.oncreate, l));
    }
    function Je(d, l, u) {
      typeof d.onupdate == "function" && u.push(s.bind(d.onupdate, l));
    }
    function rr(d, l) {
      do {
        if (d.attrs != null && typeof d.attrs.onbeforeupdate == "function") {
          var u = s.call(d.attrs.onbeforeupdate, d, l);
          if (u !== void 0 && !u)
            break;
        }
        if (typeof d.tag != "string" && typeof d.state.onbeforeupdate == "function") {
          var u = s.call(d.state.onbeforeupdate, d, l);
          if (u !== void 0 && !u)
            break;
        }
        return !1;
      } while (!1);
      return d.dom = l.dom, d.domSize = l.domSize, d.instance = l.instance, d.attrs = l.attrs, d.children = l.children, d.text = l.text, !0;
    }
    var Ne;
    return function(d, l, u) {
      if (!d)
        throw new TypeError("DOM element being rendered to does not exist.");
      if (Ne != null && d.contains(Ne))
        throw new TypeError("Node is currently being rendered to and thus is locked.");
      var m = n, y = Ne, E = [], N = c(), W = d.namespaceURI;
      Ne = d, n = typeof u == "function" ? u : void 0;
      try {
        d.vnodes == null && (d.textContent = ""), l = t.normalizeChildren(Array.isArray(l) ? l : [l]), _(d, d.vnodes, l, E, null, W === "http://www.w3.org/1999/xhtml" ? void 0 : W), d.vnodes = l, N != null && c() !== N && typeof N.focus == "function" && N.focus();
        for (var T = 0; T < E.length; T++)
          E[T]();
      } finally {
        n = m, Ne = y;
      }
    };
  }, ur;
}
var Xn = uo()(typeof window < "u" ? window : null), fr, hn;
function fo() {
  if (hn)
    return fr;
  hn = 1;
  var t = je();
  return fr = function(e, r, n) {
    var i = [], o = !1, a = -1;
    function s() {
      for (a = 0; a < i.length; a += 2)
        try {
          e(i[a], t(i[a + 1]), c);
        } catch (p) {
          n.error(p);
        }
      a = -1;
    }
    function c() {
      o || (o = !0, r(function() {
        o = !1, s();
      }));
    }
    c.sync = s;
    function f(p, g) {
      if (g != null && g.view == null && typeof g != "function")
        throw new TypeError("m.mount expects a component, not a vnode.");
      var v = i.indexOf(p);
      v >= 0 && (i.splice(v, 2), v <= a && (a -= 2), e(p, [])), g != null && (i.push(p, g), e(p, t(g), c));
    }
    return { mount: f, redraw: c };
  }, fr;
}
var po = Xn, Or = fo()(po, typeof requestAnimationFrame < "u" ? requestAnimationFrame : null, typeof console < "u" ? console : null), pr, bn;
function Yn() {
  return bn || (bn = 1, pr = function(t) {
    if (Object.prototype.toString.call(t) !== "[object Object]")
      return "";
    var e = [];
    for (var r in t)
      n(r, t[r]);
    return e.join("&");
    function n(i, o) {
      if (Array.isArray(o))
        for (var a = 0; a < o.length; a++)
          n(i + "[" + a + "]", o[a]);
      else if (Object.prototype.toString.call(o) === "[object Object]")
        for (var a in o)
          n(i + "[" + a + "]", o[a]);
      else
        e.push(encodeURIComponent(i) + (o != null && o !== "" ? "=" + encodeURIComponent(o) : ""));
    }
  }), pr;
}
var gr, mn;
function Jn() {
  if (mn)
    return gr;
  mn = 1;
  var t = Xt;
  return gr = Object.assign || function(e, r) {
    for (var n in r)
      t.call(r, n) && (e[n] = r[n]);
  }, gr;
}
var hr, vn;
function Pr() {
  if (vn)
    return hr;
  vn = 1;
  var t = Yn(), e = Jn();
  return hr = function(r, n) {
    if (/:([^\/\.-]+)(\.{3})?:/.test(r))
      throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
    if (n == null)
      return r;
    var i = r.indexOf("?"), o = r.indexOf("#"), a = o < 0 ? r.length : o, s = i < 0 ? a : i, c = r.slice(0, s), f = {};
    e(f, n);
    var p = c.replace(/:([^\/\.-]+)(\.{3})?/g, function(A, _, j) {
      return delete f[_], n[_] == null ? A : j ? n[_] : encodeURIComponent(String(n[_]));
    }), g = p.indexOf("?"), v = p.indexOf("#"), w = v < 0 ? p.length : v, k = g < 0 ? w : g, b = p.slice(0, k);
    i >= 0 && (b += r.slice(i, a)), g >= 0 && (b += (i < 0 ? "?" : "&") + p.slice(g, w));
    var x = t(f);
    return x && (b += (i < 0 && g < 0 ? "?" : "&") + x), o >= 0 && (b += r.slice(o)), v >= 0 && (b += (o < 0 ? "" : "&") + p.slice(v)), b;
  }, hr;
}
var go = Pr(), yn = Xt, ho = function(t, e, r) {
  var n = 0;
  function i(s) {
    return new e(s);
  }
  i.prototype = e.prototype, i.__proto__ = e;
  function o(s) {
    return function(c, f) {
      typeof c != "string" ? (f = c, c = c.url) : f == null && (f = {});
      var p = new e(function(k, b) {
        s(go(c, f.params), f, function(x) {
          if (typeof f.type == "function")
            if (Array.isArray(x))
              for (var A = 0; A < x.length; A++)
                x[A] = new f.type(x[A]);
            else
              x = new f.type(x);
          k(x);
        }, b);
      });
      if (f.background === !0)
        return p;
      var g = 0;
      function v() {
        --g === 0 && typeof r == "function" && r();
      }
      return w(p);
      function w(k) {
        var b = k.then;
        return k.constructor = i, k.then = function() {
          g++;
          var x = b.apply(k, arguments);
          return x.then(v, function(A) {
            if (v(), g === 0)
              throw A;
          }), w(x);
        }, k;
      }
    };
  }
  function a(s, c) {
    for (var f in s.headers)
      if (yn.call(s.headers, f) && f.toLowerCase() === c)
        return !0;
    return !1;
  }
  return {
    request: o(function(s, c, f, p) {
      var g = c.method != null ? c.method.toUpperCase() : "GET", v = c.body, w = (c.serialize == null || c.serialize === JSON.serialize) && !(v instanceof t.FormData || v instanceof t.URLSearchParams), k = c.responseType || (typeof c.extract == "function" ? "" : "json"), b = new t.XMLHttpRequest(), x = !1, A = !1, _ = b, j, O = b.abort;
      b.abort = function() {
        x = !0, O.call(this);
      }, b.open(g, s, c.async !== !1, typeof c.user == "string" ? c.user : void 0, typeof c.password == "string" ? c.password : void 0), w && v != null && !a(c, "content-type") && b.setRequestHeader("Content-Type", "application/json; charset=utf-8"), typeof c.deserialize != "function" && !a(c, "accept") && b.setRequestHeader("Accept", "application/json, text/*"), c.withCredentials && (b.withCredentials = c.withCredentials), c.timeout && (b.timeout = c.timeout), b.responseType = k;
      for (var R in c.headers)
        yn.call(c.headers, R) && b.setRequestHeader(R, c.headers[R]);
      b.onreadystatechange = function(z) {
        if (!x && z.target.readyState === 4)
          try {
            var D = z.target.status >= 200 && z.target.status < 300 || z.target.status === 304 || /^file:\/\//i.test(s), G = z.target.response, Y;
            if (k === "json") {
              if (!z.target.responseType && typeof c.extract != "function")
                try {
                  G = JSON.parse(z.target.responseText);
                } catch {
                  G = null;
                }
            } else
              (!k || k === "text") && G == null && (G = z.target.responseText);
            if (typeof c.extract == "function" ? (G = c.extract(z.target, c), D = !0) : typeof c.deserialize == "function" && (G = c.deserialize(G)), D)
              f(G);
            else {
              var H = function() {
                try {
                  Y = z.target.responseText;
                } catch {
                  Y = G;
                }
                var F = new Error(Y);
                F.code = z.target.status, F.response = G, p(F);
              };
              b.status === 0 ? setTimeout(function() {
                A || H();
              }) : H();
            }
          } catch (F) {
            p(F);
          }
      }, b.ontimeout = function(z) {
        A = !0;
        var D = new Error("Request timed out");
        D.code = z.target.status, p(D);
      }, typeof c.config == "function" && (b = c.config(b, c, s) || b, b !== _ && (j = b.abort, b.abort = function() {
        x = !0, j.call(this);
      })), v == null ? b.send() : typeof c.serialize == "function" ? b.send(c.serialize(v)) : v instanceof t.FormData || v instanceof t.URLSearchParams ? b.send(v) : b.send(JSON.stringify(v));
    }),
    jsonp: o(function(s, c, f, p) {
      var g = c.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + n++, v = t.document.createElement("script");
      t[g] = function(w) {
        delete t[g], v.parentNode.removeChild(v), f(w);
      }, v.onerror = function() {
        delete t[g], v.parentNode.removeChild(v), p(new Error("JSONP request failed"));
      }, v.src = s + (s.indexOf("?") < 0 ? "?" : "&") + encodeURIComponent(c.callbackKey || "callback") + "=" + encodeURIComponent(g), t.document.documentElement.appendChild(v);
    })
  };
}, bo = Kn, mo = Or, vo = ho(typeof window < "u" ? window : null, bo, mo.redraw), br, wn;
function Zn() {
  if (wn)
    return br;
  wn = 1;
  function t(e) {
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }
  return br = function(e) {
    if (e === "" || e == null)
      return {};
    e.charAt(0) === "?" && (e = e.slice(1));
    for (var r = e.split("&"), n = {}, i = {}, o = 0; o < r.length; o++) {
      var a = r[o].split("="), s = t(a[0]), c = a.length === 2 ? t(a[1]) : "";
      c === "true" ? c = !0 : c === "false" && (c = !1);
      var f = s.split(/\]\[?|\[/), p = i;
      s.indexOf("[") > -1 && f.pop();
      for (var g = 0; g < f.length; g++) {
        var v = f[g], w = f[g + 1], k = w == "" || !isNaN(parseInt(w, 10));
        if (v === "") {
          var s = f.slice(0, g).join();
          n[s] == null && (n[s] = Array.isArray(p) ? p.length : 0), v = n[s]++;
        } else if (v === "__proto__")
          break;
        if (g === f.length - 1)
          p[v] = c;
        else {
          var b = Object.getOwnPropertyDescriptor(p, v);
          b != null && (b = b.value), b == null && (p[v] = b = k ? [] : {}), p = b;
        }
      }
    }
    return i;
  }, br;
}
var mr, xn;
function Sr() {
  if (xn)
    return mr;
  xn = 1;
  var t = Zn();
  return mr = function(e) {
    var r = e.indexOf("?"), n = e.indexOf("#"), i = n < 0 ? e.length : n, o = r < 0 ? i : r, a = e.slice(0, o).replace(/\/{2,}/g, "/");
    return a ? (a[0] !== "/" && (a = "/" + a), a.length > 1 && a[a.length - 1] === "/" && (a = a.slice(0, -1))) : a = "/", {
      path: a,
      params: r < 0 ? {} : t(e.slice(r + 1, i))
    };
  }, mr;
}
var vr, kn;
function yo() {
  if (kn)
    return vr;
  kn = 1;
  var t = Sr();
  return vr = function(e) {
    var r = t(e), n = Object.keys(r.params), i = [], o = new RegExp("^" + r.path.replace(
      // I escape literal text so people can use things like `:file.:ext` or
      // `:lang-:locale` in routes. This is all merged into one pass so I
      // don't also accidentally escape `-` and make it harder to detect it to
      // ban it from template parameters.
      /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
      function(a, s, c) {
        return s == null ? "\\" + a : (i.push({ k: s, r: c === "..." }), c === "..." ? "(.*)" : c === "." ? "([^/]+)\\." : "([^/]+)" + (c || ""));
      }
    ) + "$");
    return function(a) {
      for (var s = 0; s < n.length; s++)
        if (r.params[n[s]] !== a.params[n[s]])
          return !1;
      if (!i.length)
        return o.test(a.path);
      var c = o.exec(a.path);
      if (c == null)
        return !1;
      for (var s = 0; s < i.length; s++)
        a.params[i[s].k] = i[s].r ? c[s + 1] : decodeURIComponent(c[s + 1]);
      return !0;
    };
  }, vr;
}
var yr, _n;
function Qn() {
  if (_n)
    return yr;
  _n = 1;
  var t = Xt, e = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");
  return yr = function(r, n) {
    var i = {};
    if (n != null)
      for (var o in r)
        t.call(r, o) && !e.test(o) && n.indexOf(o) < 0 && (i[o] = r[o]);
    else
      for (var o in r)
        t.call(r, o) && !e.test(o) && (i[o] = r[o]);
    return i;
  }, yr;
}
var wr, En;
function wo() {
  if (En)
    return wr;
  En = 1;
  var t = je(), e = Fn, r = Kn, n = Pr(), i = Sr(), o = yo(), a = Jn(), s = Qn(), c = {};
  function f(p) {
    try {
      return decodeURIComponent(p);
    } catch {
      return p;
    }
  }
  return wr = function(p, g) {
    var v = p == null ? null : typeof p.setImmediate == "function" ? p.setImmediate : p.setTimeout, w = r.resolve(), k = !1, b = !1, x = 0, A, _, j = c, O, R, z, D, G = {
      onbeforeupdate: function() {
        return x = x ? 2 : 1, !(!x || c === j);
      },
      onremove: function() {
        p.removeEventListener("popstate", F, !1), p.removeEventListener("hashchange", H, !1);
      },
      view: function() {
        if (!(!x || c === j)) {
          var L = [t(O, R.key, R)];
          return j && (L = j.render(L[0])), L;
        }
      }
    }, Y = $.SKIP = {};
    function H() {
      k = !1;
      var L = p.location.hash;
      $.prefix[0] !== "#" && (L = p.location.search + L, $.prefix[0] !== "?" && (L = p.location.pathname + L, L[0] !== "/" && (L = "/" + L)));
      var B = L.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, f).slice($.prefix.length), S = i(B);
      a(S.params, p.history.state);
      function V(M) {
        console.error(M), C(_, null, { replace: !0 });
      }
      K(0);
      function K(M) {
        for (; M < A.length; M++)
          if (A[M].check(S)) {
            var Q = A[M].component, ne = A[M].route, ae = Q, Z = D = function(fe) {
              if (Z === D) {
                if (fe === Y)
                  return K(M + 1);
                O = fe != null && (typeof fe.view == "function" || typeof fe == "function") ? fe : "div", R = S.params, z = B, D = null, j = Q.render ? Q : null, x === 2 ? g.redraw() : (x = 2, g.redraw.sync());
              }
            };
            Q.view || typeof Q == "function" ? (Q = {}, Z(ae)) : Q.onmatch ? w.then(function() {
              return Q.onmatch(S.params, B, ne);
            }).then(Z, B === _ ? null : V) : Z("div");
            return;
          }
        if (B === _)
          throw new Error("Could not resolve default route " + _ + ".");
        C(_, null, { replace: !0 });
      }
    }
    function F() {
      k || (k = !0, v(H));
    }
    function C(L, B, S) {
      if (L = n(L, B), b) {
        F();
        var V = S ? S.state : null, K = S ? S.title : null;
        S && S.replace ? p.history.replaceState(V, K, $.prefix + L) : p.history.pushState(V, K, $.prefix + L);
      } else
        p.location.href = $.prefix + L;
    }
    function $(L, B, S) {
      if (!L)
        throw new TypeError("DOM element being rendered to does not exist.");
      if (A = Object.keys(S).map(function(K) {
        if (K[0] !== "/")
          throw new SyntaxError("Routes must start with a '/'.");
        if (/:([^\/\.-]+)(\.{3})?:/.test(K))
          throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
        return {
          route: K,
          component: S[K],
          check: o(K)
        };
      }), _ = B, B != null) {
        var V = i(B);
        if (!A.some(function(K) {
          return K.check(V);
        }))
          throw new ReferenceError("Default route doesn't match any known routes.");
      }
      typeof p.history.pushState == "function" ? p.addEventListener("popstate", F, !1) : $.prefix[0] === "#" && p.addEventListener("hashchange", H, !1), b = !0, g.mount(L, G), H();
    }
    return $.set = function(L, B, S) {
      D != null && (S = S || {}, S.replace = !0), D = null, C(L, B, S);
    }, $.get = function() {
      return z;
    }, $.prefix = "#!", $.Link = {
      view: function(L) {
        var B = e(
          L.attrs.selector || "a",
          s(L.attrs, ["options", "params", "selector", "onclick"]),
          L.children
        ), S, V, K;
        return (B.attrs.disabled = !!B.attrs.disabled) ? (B.attrs.href = null, B.attrs["aria-disabled"] = "true") : (S = L.attrs.options, V = L.attrs.onclick, K = n(B.attrs.href, L.attrs.params), B.attrs.href = $.prefix + K, B.attrs.onclick = function(M) {
          var Q;
          typeof V == "function" ? Q = V.call(M.currentTarget, M) : V == null || typeof V != "object" || typeof V.handleEvent == "function" && V.handleEvent(M), // Skip if `onclick` prevented default
          Q !== !1 && !M.defaultPrevented && // Ignore everything but left clicks
          (M.button === 0 || M.which === 0 || M.which === 1) && // Let the browser handle `target=_blank`, etc.
          (!M.currentTarget.target || M.currentTarget.target === "_self") && // No modifier keys
          !M.ctrlKey && !M.metaKey && !M.shiftKey && !M.altKey && (M.preventDefault(), M.redraw = !1, $.set(K, null, S));
        }), B;
      }
    }, $.param = function(L) {
      return R && L != null ? R[L] : R;
    }, $;
  }, wr;
}
var xr, In;
function xo() {
  if (In)
    return xr;
  In = 1;
  var t = Or;
  return xr = wo()(typeof window < "u" ? window : null, t), xr;
}
var Yt = co, ei = vo, ti = Or, le = function() {
  return Yt.apply(this, arguments);
};
le.m = Yt;
le.trust = Yt.trust;
le.fragment = Yt.fragment;
le.Fragment = "[";
le.mount = ti.mount;
le.route = xo();
le.render = Xn;
le.redraw = ti.redraw;
le.request = ei.request;
le.jsonp = ei.jsonp;
le.parseQueryString = Zn();
le.buildQueryString = Yn();
le.parsePathname = Sr();
le.buildPathname = Pr();
le.vnode = je();
le.PromisePolyfill = Un();
le.censor = Qn();
var ko = le;
const h = /* @__PURE__ */ Yi(ko), jr = "-";
function _o(t) {
  const e = Io(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  function i(a) {
    const s = a.split(jr);
    return s[0] === "" && s.length !== 1 && s.shift(), ri(s, e) || Eo(a);
  }
  function o(a, s) {
    const c = r[a] || [];
    return s && n[a] ? [...c, ...n[a]] : c;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: o
  };
}
function ri(t, e) {
  var a;
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], n = e.nextPart.get(r), i = n ? ri(t.slice(1), n) : void 0;
  if (i)
    return i;
  if (e.validators.length === 0)
    return;
  const o = t.join(jr);
  return (a = e.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}
const Cn = /^\[(.+)\]$/;
function Eo(t) {
  if (Cn.test(t)) {
    const e = Cn.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Io(t) {
  const {
    theme: e,
    prefix: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ao(Object.entries(t.classGroups), r).forEach(([o, a]) => {
    kr(a, n, o, e);
  }), n;
}
function kr(t, e, r, n) {
  t.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? e : An(e, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (Co(i)) {
        kr(i(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      kr(a, An(e, o), r, n);
    });
  });
}
function An(t, e) {
  let r = t;
  return e.split(jr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Co(t) {
  return t.isThemeGetter;
}
function Ao(t, e) {
  return e ? t.map(([r, n]) => {
    const i = n.map((o) => typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, s]) => [e + a, s])) : o);
    return [r, i];
  }) : t;
}
function To(t) {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function i(o, a) {
    r.set(o, a), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(o) {
      let a = r.get(o);
      if (a !== void 0)
        return a;
      if ((a = n.get(o)) !== void 0)
        return i(o, a), a;
    },
    set(o, a) {
      r.has(o) ? r.set(o, a) : i(o, a);
    }
  };
}
const ni = "!";
function Lo(t) {
  const e = t.separator, r = e.length === 1, n = e[0], i = e.length;
  return function(a) {
    const s = [];
    let c = 0, f = 0, p;
    for (let b = 0; b < a.length; b++) {
      let x = a[b];
      if (c === 0) {
        if (x === n && (r || a.slice(b, b + i) === e)) {
          s.push(a.slice(f, b)), f = b + i;
          continue;
        }
        if (x === "/") {
          p = b;
          continue;
        }
      }
      x === "[" ? c++ : x === "]" && c--;
    }
    const g = s.length === 0 ? a : a.substring(f), v = g.startsWith(ni), w = v ? g.substring(1) : g, k = p && p > f ? p - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: w,
      maybePostfixModifierPosition: k
    };
  };
}
function zo(t) {
  if (t.length <= 1)
    return t;
  const e = [];
  let r = [];
  return t.forEach((n) => {
    n[0] === "[" ? (e.push(...r.sort(), n), r = []) : r.push(n);
  }), e.push(...r.sort()), e;
}
function Oo(t) {
  return {
    cache: To(t.cacheSize),
    splitModifiers: Lo(t),
    ..._o(t)
  };
}
const Po = /\s+/;
function So(t, e) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = e, o = /* @__PURE__ */ new Set();
  return t.trim().split(Po).map((a) => {
    const {
      modifiers: s,
      hasImportantModifier: c,
      baseClassName: f,
      maybePostfixModifierPosition: p
    } = r(a);
    let g = n(p ? f.substring(0, p) : f), v = !!p;
    if (!g) {
      if (!p)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (g = n(f), !g)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      v = !1;
    }
    const w = zo(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? w + ni : w,
      classGroupId: g,
      originalClassName: a,
      hasPostfixModifier: v
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: c,
      hasPostfixModifier: f
    } = a, p = s + c;
    return o.has(p) ? !1 : (o.add(p), i(c, f).forEach((g) => o.add(s + g)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function jo() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = ii(e)) && (n && (n += " "), n += r);
  return n;
}
function ii(t) {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = ii(t[n])) && (r && (r += " "), r += e);
  return r;
}
function Ro(t, ...e) {
  let r, n, i, o = a;
  function a(c) {
    const f = e.reduce((p, g) => g(p), t());
    return r = Oo(f), n = r.cache.get, i = r.cache.set, o = s, s(c);
  }
  function s(c) {
    const f = n(c);
    if (f)
      return f;
    const p = So(c, r);
    return i(c, p), p;
  }
  return function() {
    return o(jo.apply(null, arguments));
  };
}
function ee(t) {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}
const oi = /^\[(?:([a-z-]+):)?(.+)\]$/i, Mo = /^\d+\/\d+$/, No = /* @__PURE__ */ new Set(["px", "full", "screen"]), Do = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ho = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $o = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Bo = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ye(t) {
  return Be(t) || No.has(t) || Mo.test(t);
}
function Ae(t) {
  return ot(t, "length", Xo);
}
function Be(t) {
  return !!t && !Number.isNaN(Number(t));
}
function Tt(t) {
  return ot(t, "number", Be);
}
function ft(t) {
  return !!t && Number.isInteger(Number(t));
}
function qo(t) {
  return t.endsWith("%") && Be(t.slice(0, -1));
}
function q(t) {
  return oi.test(t);
}
function Te(t) {
  return Do.test(t);
}
const Go = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Vo(t) {
  return ot(t, Go, ai);
}
function Wo(t) {
  return ot(t, "position", ai);
}
const Fo = /* @__PURE__ */ new Set(["image", "url"]);
function Uo(t) {
  return ot(t, Fo, Jo);
}
function Ko(t) {
  return ot(t, "", Yo);
}
function pt() {
  return !0;
}
function ot(t, e, r) {
  const n = oi.exec(t);
  return n ? n[1] ? typeof e == "string" ? n[1] === e : e.has(n[1]) : r(n[2]) : !1;
}
function Xo(t) {
  return Ho.test(t);
}
function ai() {
  return !1;
}
function Yo(t) {
  return $o.test(t);
}
function Jo(t) {
  return Bo.test(t);
}
function Zo() {
  const t = ee("colors"), e = ee("spacing"), r = ee("blur"), n = ee("brightness"), i = ee("borderColor"), o = ee("borderRadius"), a = ee("borderSpacing"), s = ee("borderWidth"), c = ee("contrast"), f = ee("grayscale"), p = ee("hueRotate"), g = ee("invert"), v = ee("gap"), w = ee("gradientColorStops"), k = ee("gradientColorStopPositions"), b = ee("inset"), x = ee("margin"), A = ee("opacity"), _ = ee("padding"), j = ee("saturate"), O = ee("scale"), R = ee("sepia"), z = ee("skew"), D = ee("space"), G = ee("translate"), Y = () => ["auto", "contain", "none"], H = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", q, e], C = () => [q, e], $ = () => ["", ye, Ae], L = () => ["auto", Be, q], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], S = () => ["solid", "dashed", "dotted", "double", "none"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], M = () => ["", "0", q], Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ne = () => [Be, Tt], ae = () => [Be, q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [pt],
      spacing: [ye, Ae],
      blur: ["none", "", Te, q],
      brightness: ne(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Te, q],
      borderSpacing: C(),
      borderWidth: $(),
      contrast: ne(),
      grayscale: M(),
      hueRotate: ae(),
      invert: M(),
      gap: C(),
      gradientColorStops: [t],
      gradientColorStopPositions: [qo, Ae],
      inset: F(),
      margin: F(),
      opacity: ne(),
      padding: C(),
      saturate: ne(),
      scale: ne(),
      sepia: M(),
      skew: ae(),
      space: C(),
      translate: C()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", q]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Te]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...B(), q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ft, q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: F()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ft, q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [pt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ft, q]
        }, q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [pt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ft, q]
        }, q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [_]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [_]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [_]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [_]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [_]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [_]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [_]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [_]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [_]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [D]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", q, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", q, ye]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Te]
        }, Te, q]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [q, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ye, q]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [q, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Te, Ae]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Tt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [pt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Be, Tt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ye, q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [A]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [A]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...S(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ye, Ae]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ye, q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", q]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [A]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...B(), Wo]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Vo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Uo]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [k]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [w]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...S(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: S()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...S()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ye, q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ye, Ae]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ye, Ae]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Te, Ko]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [pt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": V()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Te, q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ae()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ae()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", q]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ft, q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [G]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [G]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", q]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", q]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ye, Ae, Tt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
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
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
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
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const I = /* @__PURE__ */ Ro(Zo);
function De(t) {
  return t !== null && typeof t == "object" && t.constructor === Object;
}
function _r(t) {
  if (!De(t))
    return t;
  const e = {};
  for (const r in t)
    e[r] = _r(t[r]);
  return e;
}
function P(t, e) {
  if (De(e) && Object.keys(e).length === 0)
    return _r({ ...t, ...e });
  const r = { ...t, ...e };
  if (De(e) && De(t))
    for (const n in e)
      De(e[n]) && n in t && De(t[n]) ? r[n] = P(t[n], e[n]) : r[n] = De(e[n]) ? _r(e[n]) : e[n];
  return r;
}
const Rr = (t) => (e) => {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}, Jt = {
  root: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    flush: {
      off: "rounded-lg border",
      on: "border-b"
    }
  },
  content: {
    base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
  },
  title: {
    arrow: {
      base: "h-3 w-3 shrink-0",
      open: {
        off: "",
        on: "rotate-180"
      }
    },
    base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
    flush: {
      off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      on: "bg-transparent dark:bg-transparent"
    },
    heading: "",
    open: {
      off: "",
      on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
    }
  }
}, Qo = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Jt.content, n);
    return h("div", { class: I(o.base, r), ...i }, e);
  }
}, ea = {
  isOpen: !1,
  view({ attrs: t, children: e, state: r }) {
    const { isOpen: n = !1, ...i } = t;
    return r.isOpen = n, h("div", { ...i }, e);
  }
};
function ta() {
  for (var t = 0, e, r, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = si(e)) && (n && (n += " "), n += r);
  return n;
}
function si(t) {
  if (typeof t == "string")
    return t;
  for (var e, r = "", n = 0; n < t.length; n++)
    t[n] && (e = si(t[n])) && (r && (r += " "), r += e);
  return r;
}
var Mr = "-";
function ra(t) {
  var e = ia(t), r = t.conflictingClassGroups, n = t.conflictingClassGroupModifiers, i = n === void 0 ? {} : n;
  function o(s) {
    var c = s.split(Mr);
    return c[0] === "" && c.length !== 1 && c.shift(), li(c, e) || na(s);
  }
  function a(s, c) {
    var f = r[s] || [];
    return c && i[s] ? [].concat(f, i[s]) : f;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  };
}
function li(t, e) {
  var a;
  if (t.length === 0)
    return e.classGroupId;
  var r = t[0], n = e.nextPart.get(r), i = n ? li(t.slice(1), n) : void 0;
  if (i)
    return i;
  if (e.validators.length !== 0) {
    var o = t.join(Mr);
    return (a = e.validators.find(function(s) {
      var c = s.validator;
      return c(o);
    })) == null ? void 0 : a.classGroupId;
  }
}
var Tn = /^\[(.+)\]$/;
function na(t) {
  if (Tn.test(t)) {
    var e = Tn.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function ia(t) {
  var e = t.theme, r = t.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, i = aa(Object.entries(t.classGroups), r);
  return i.forEach(function(o) {
    var a = o[0], s = o[1];
    Er(s, n, a, e);
  }), n;
}
function Er(t, e, r, n) {
  t.forEach(function(i) {
    if (typeof i == "string") {
      var o = i === "" ? e : Ln(e, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (oa(i)) {
        Er(i(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(function(a) {
      var s = a[0], c = a[1];
      Er(c, Ln(e, s), r, n);
    });
  });
}
function Ln(t, e) {
  var r = t;
  return e.split(Mr).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function oa(t) {
  return t.isThemeGetter;
}
function aa(t, e) {
  return e ? t.map(function(r) {
    var n = r[0], i = r[1], o = i.map(function(a) {
      return typeof a == "string" ? e + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(function(s) {
        var c = s[0], f = s[1];
        return [e + c, f];
      })) : a;
    });
    return [n, o];
  }) : t;
}
function sa(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function i(o, a) {
    r.set(o, a), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(a) {
      var s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return i(a, s), s;
    },
    set: function(a, s) {
      r.has(a) ? r.set(a, s) : i(a, s);
    }
  };
}
var ci = "!";
function la(t) {
  var e = t.separator || ":", r = e.length === 1, n = e[0], i = e.length;
  return function(a) {
    for (var s = [], c = 0, f = 0, p, g = 0; g < a.length; g++) {
      var v = a[g];
      if (c === 0) {
        if (v === n && (r || a.slice(g, g + i) === e)) {
          s.push(a.slice(f, g)), f = g + i;
          continue;
        }
        if (v === "/") {
          p = g;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    var w = s.length === 0 ? a : a.substring(f), k = w.startsWith(ci), b = k ? w.substring(1) : w, x = p && p > f ? p - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: k,
      baseClassName: b,
      maybePostfixModifierPosition: x
    };
  };
}
function ca(t) {
  if (t.length <= 1)
    return t;
  var e = [], r = [];
  return t.forEach(function(n) {
    var i = n[0] === "[";
    i ? (e.push.apply(e, r.sort().concat([n])), r = []) : r.push(n);
  }), e.push.apply(e, r.sort()), e;
}
function da(t) {
  return {
    cache: sa(t.cacheSize),
    splitModifiers: la(t),
    ...ra(t)
  };
}
var ua = /\s+/;
function fa(t, e) {
  var r = e.splitModifiers, n = e.getClassGroupId, i = e.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return t.trim().split(ua).map(function(a) {
    var s = r(a), c = s.modifiers, f = s.hasImportantModifier, p = s.baseClassName, g = s.maybePostfixModifierPosition, v = n(g ? p.substring(0, g) : p), w = !!g;
    if (!v) {
      if (!g)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (v = n(p), !v)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      w = !1;
    }
    var k = ca(c).join(":"), b = f ? k + ci : k;
    return {
      isTailwindClass: !0,
      modifierId: b,
      classGroupId: v,
      originalClassName: a,
      hasPostfixModifier: w
    };
  }).reverse().filter(function(a) {
    if (!a.isTailwindClass)
      return !0;
    var s = a.modifierId, c = a.classGroupId, f = a.hasPostfixModifier, p = s + c;
    return o.has(p) ? !1 : (o.add(p), i(c, f).forEach(function(g) {
      return o.add(s + g);
    }), !0);
  }).reverse().map(function(a) {
    return a.originalClassName;
  }).join(" ");
}
function pa() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var n, i, o, a = s;
  function s(f) {
    var p = e[0], g = e.slice(1), v = g.reduce(function(w, k) {
      return k(w);
    }, p());
    return n = da(v), i = n.cache.get, o = n.cache.set, a = c, c(f);
  }
  function c(f) {
    var p = i(f);
    if (p)
      return p;
    var g = fa(f, n);
    return o(f, g), g;
  }
  return function() {
    return a(ta.apply(null, arguments));
  };
}
function te(t) {
  var e = function(n) {
    return n[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var di = /^\[(?:([a-z-]+):)?(.+)\]$/i, ga = /^\d+\/\d+$/, ha = /* @__PURE__ */ new Set(["px", "full", "screen"]), ba = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ma = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, va = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function we(t) {
  return qe(t) || ha.has(t) || ga.test(t) || Ir(t);
}
function Ir(t) {
  return We(t, "length", Ea);
}
function ya(t) {
  return We(t, "size", ui);
}
function wa(t) {
  return We(t, "position", ui);
}
function xa(t) {
  return We(t, "url", Ia);
}
function Lt(t) {
  return We(t, "number", qe);
}
function qe(t) {
  return !Number.isNaN(Number(t));
}
function ka(t) {
  return t.endsWith("%") && qe(t.slice(0, -1));
}
function gt(t) {
  return zn(t) || We(t, "number", zn);
}
function U(t) {
  return di.test(t);
}
function ht() {
  return !0;
}
function Le(t) {
  return ba.test(t);
}
function _a(t) {
  return We(t, "", Ca);
}
function We(t, e, r) {
  var n = di.exec(t);
  return n ? n[1] ? n[1] === e : r(n[2]) : !1;
}
function Ea(t) {
  return ma.test(t);
}
function ui() {
  return !1;
}
function Ia(t) {
  return t.startsWith("url(");
}
function zn(t) {
  return Number.isInteger(Number(t));
}
function Ca(t) {
  return va.test(t);
}
function Aa() {
  var t = te("colors"), e = te("spacing"), r = te("blur"), n = te("brightness"), i = te("borderColor"), o = te("borderRadius"), a = te("borderSpacing"), s = te("borderWidth"), c = te("contrast"), f = te("grayscale"), p = te("hueRotate"), g = te("invert"), v = te("gap"), w = te("gradientColorStops"), k = te("gradientColorStopPositions"), b = te("inset"), x = te("margin"), A = te("opacity"), _ = te("padding"), j = te("saturate"), O = te("scale"), R = te("sepia"), z = te("skew"), D = te("space"), G = te("translate"), Y = function() {
    return ["auto", "contain", "none"];
  }, H = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, F = function() {
    return ["auto", U, e];
  }, C = function() {
    return [U, e];
  }, $ = function() {
    return ["", we];
  }, L = function() {
    return ["auto", qe, U];
  }, B = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, S = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, V = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, K = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, M = function() {
    return ["", "0", U];
  }, Q = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ne = function() {
    return [qe, Lt];
  }, ae = function() {
    return [qe, U];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ht],
      spacing: [we],
      blur: ["none", "", Le, U],
      brightness: ne(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Le, U],
      borderSpacing: C(),
      borderWidth: $(),
      contrast: ne(),
      grayscale: M(),
      hueRotate: ae(),
      invert: M(),
      gap: C(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ka, Ir],
      inset: F(),
      margin: F(),
      opacity: ne(),
      padding: C(),
      saturate: ne(),
      scale: ne(),
      sepia: M(),
      skew: ae(),
      space: C(),
      translate: C()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Le]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(B(), [U])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", gt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: F()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: M()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: M()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", gt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ht]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", gt]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ht]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [gt]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(K())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(K(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(K(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [_]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [_]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [_]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [_]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [_]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [_]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [_]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [_]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [_]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [D]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", U, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", U, we]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Le]
        }, Le, U]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", U, we]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Le, Ir]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Lt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ht]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", qe, Lt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", U, we]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [A]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [A]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(S(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", we]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", U, we]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", U]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [A]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(B(), [wa])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ya]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xa]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [k]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [w]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [w]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [w]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(S(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: S()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(S())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [U, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [we]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [we]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Le, _a]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ht]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": V()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Le, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ae()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ae()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [gt, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [G]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [G]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [z]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", U]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [we, Lt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
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
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
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
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var kt = /* @__PURE__ */ pa(Aa);
const fi = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...i } = t, o = kt(e[n], r);
    return h(
      "svg",
      { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 7", ...i },
      h("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m1 1.444 4 3.791 4-3.79"
      })
    );
  }
}, Ta = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...i } = t, o = kt(e[n], r);
    return h(
      "svg",
      { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 11", ...i },
      h("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m5 1.549-4 3.79 4 3.792"
      })
    );
  }
}, pi = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...i } = t, o = kt(e[n], r);
    return h(
      "svg",
      { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 6 11", ...i },
      h("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m1 9.13 4-3.79-4-3.791"
      })
    );
  }
}, La = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...i } = t, o = kt(e[n], r);
    return h(
      "svg",
      { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 7", ...i },
      h("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m9 5.235-4-3.79-4 3.79"
      })
    );
  }
}, za = {
  view({ attrs: t }) {
    const e = {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8"
    }, { class: r, size: n = "sm", ...i } = t, o = kt(e[n], r);
    return h(
      "svg",
      { class: o, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 14", ...i },
      h("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      })
    );
  }
}, Oa = {
  isOpen: !1,
  flush: !1,
  view({ attrs: t, children: e, state: r }) {
    const {
      class: n,
      as: i = "h2",
      arrowIcon: o = fi,
      theme: a = {},
      ...s
    } = t, c = P(Jt.title, a);
    return h(
      "button",
      {
        class: I(
          c.base,
          c.flush[r.flush ? "on" : "off"],
          c.open[r.isOpen ? "on" : "off"],
          n
        ),
        type: "button",
        onclick: () => {
          r.isOpen = !r.isOpen;
        },
        ...s
      },
      [
        h(i, { class: c.heading }, e),
        o && h(o, {
          "aria-hidden": "true",
          class: I(c.arrow.base, c.arrow.open[r.isOpen ? "on" : "off"])
        })
      ]
    );
  }
};
var Pa = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = []), this._eventType = e, this._eventFunctions = r;
    }
    return t.prototype.init = function() {
      var e = this;
      this._eventFunctions.forEach(function(r) {
        typeof window < "u" && window.addEventListener(e._eventType, r);
      });
    }, t;
  }()
), Sa = (
  /** @class */
  function() {
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
        InputCounter: {}
      };
    }
    return t.prototype.addInstance = function(e, r, n, i) {
      if (i === void 0 && (i = !1), !this._instances[e])
        return console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1;
      if (this._instances[e][n] && !i) {
        console.warn("Flowbite: Instance with ID ".concat(n, " already exists."));
        return;
      }
      i && this._instances[e][n] && this._instances[e][n].destroyAndRemoveInstance(), this._instances[e][n || this._generateRandomId()] = r;
    }, t.prototype.getAllInstances = function() {
      return this._instances;
    }, t.prototype.getInstances = function(e) {
      return this._instances[e] ? this._instances[e] : (console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1);
    }, t.prototype.getInstance = function(e, r) {
      if (this._componentAndInstanceCheck(e, r)) {
        if (!this._instances[e][r]) {
          console.warn("Flowbite: Instance with ID ".concat(r, " does not exist."));
          return;
        }
        return this._instances[e][r];
      }
    }, t.prototype.destroyAndRemoveInstance = function(e, r) {
      this._componentAndInstanceCheck(e, r) && (this.destroyInstanceObject(e, r), this.removeInstance(e, r));
    }, t.prototype.removeInstance = function(e, r) {
      this._componentAndInstanceCheck(e, r) && delete this._instances[e][r];
    }, t.prototype.destroyInstanceObject = function(e, r) {
      this._componentAndInstanceCheck(e, r) && this._instances[e][r].destroy();
    }, t.prototype.instanceExists = function(e, r) {
      return !(!this._instances[e] || !this._instances[e][r]);
    }, t.prototype._generateRandomId = function() {
      return Math.random().toString(36).substr(2, 9);
    }, t.prototype._componentAndInstanceCheck = function(e, r) {
      return this._instances[e] ? this._instances[e][r] ? !0 : (console.warn("Flowbite: Instance with ID ".concat(r, " does not exist.")), !1) : (console.warn("Flowbite: Component ".concat(e, " does not exist.")), !1);
    }, t;
  }()
), X = new Sa();
typeof window < "u" && (window.FlowbiteInstances = X);
var Nt = function() {
  return Nt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Nt.apply(this, arguments);
}, Dt = {
  alwaysOpen: !1,
  activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
  inactiveClasses: "text-gray-500 dark:text-gray-400",
  onOpen: function() {
  },
  onClose: function() {
  },
  onToggle: function() {
  }
}, ja = {
  id: null,
  override: !0
}, Nr = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      e === void 0 && (e = null), r === void 0 && (r = []), n === void 0 && (n = Dt), i === void 0 && (i = ja), this._instanceId = i.id ? i.id : e.id, this._accordionEl = e, this._items = r, this._options = Nt(Nt({}, Dt), n), this._initialized = !1, this.init(), X.addInstance("Accordion", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._items.length && !this._initialized && (this._items.forEach(function(r) {
        r.active && e.open(r.id);
        var n = function() {
          e.toggle(r.id);
        };
        r.triggerEl.addEventListener("click", n), r.clickHandler = n;
      }), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._items.length && this._initialized && (this._items.forEach(function(e) {
        e.triggerEl.removeEventListener("click", e.clickHandler), delete e.clickHandler;
      }), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Accordion", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.getItem = function(e) {
      return this._items.filter(function(r) {
        return r.id === e;
      })[0];
    }, t.prototype.open = function(e) {
      var r, n, i = this, o = this.getItem(e);
      this._options.alwaysOpen || this._items.map(function(a) {
        var s, c;
        a !== o && ((s = a.triggerEl.classList).remove.apply(s, i._options.activeClasses.split(" ")), (c = a.triggerEl.classList).add.apply(c, i._options.inactiveClasses.split(" ")), a.targetEl.classList.add("hidden"), a.triggerEl.setAttribute("aria-expanded", "false"), a.active = !1, a.iconEl && a.iconEl.classList.remove("rotate-180"));
      }), (r = o.triggerEl.classList).add.apply(r, this._options.activeClasses.split(" ")), (n = o.triggerEl.classList).remove.apply(n, this._options.inactiveClasses.split(" ")), o.triggerEl.setAttribute("aria-expanded", "true"), o.targetEl.classList.remove("hidden"), o.active = !0, o.iconEl && o.iconEl.classList.add("rotate-180"), this._options.onOpen(this, o);
    }, t.prototype.toggle = function(e) {
      var r = this.getItem(e);
      r.active ? this.close(e) : this.open(e), this._options.onToggle(this, r);
    }, t.prototype.close = function(e) {
      var r, n, i = this.getItem(e);
      (r = i.triggerEl.classList).remove.apply(r, this._options.activeClasses.split(" ")), (n = i.triggerEl.classList).add.apply(n, this._options.inactiveClasses.split(" ")), i.targetEl.classList.add("hidden"), i.triggerEl.setAttribute("aria-expanded", "false"), i.active = !1, i.iconEl && i.iconEl.classList.remove("rotate-180"), this._options.onClose(this, i);
    }, t;
  }()
);
function Dr() {
  document.querySelectorAll("[data-accordion]").forEach(function(t) {
    var e = t.getAttribute("data-accordion"), r = t.getAttribute("data-active-classes"), n = t.getAttribute("data-inactive-classes"), i = [];
    t.querySelectorAll("[data-accordion-target]").forEach(function(o) {
      if (o.closest("[data-accordion]") === t) {
        var a = {
          id: o.getAttribute("data-accordion-target"),
          triggerEl: o,
          targetEl: document.querySelector(o.getAttribute("data-accordion-target")),
          iconEl: o.querySelector("[data-accordion-icon]"),
          active: o.getAttribute("aria-expanded") === "true"
        };
        i.push(a);
      }
    }), new Nr(t, i, {
      alwaysOpen: e === "open",
      activeClasses: r || Dt.activeClasses,
      inactiveClasses: n || Dt.inactiveClasses
    });
  });
}
typeof window < "u" && (window.Accordion = Nr, window.initAccordions = Dr);
var Ht = function() {
  return Ht = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Ht.apply(this, arguments);
}, On = {
  onCollapse: function() {
  },
  onExpand: function() {
  },
  onToggle: function() {
  }
}, Ra = {
  id: null,
  override: !0
}, Cr = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = On), i === void 0 && (i = Ra), this._instanceId = i.id ? i.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = Ht(Ht({}, On), n), this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Collapse", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._triggerEl && this._targetEl && !this._initialized && (this._triggerEl.hasAttribute("aria-expanded") ? this._visible = this._triggerEl.getAttribute("aria-expanded") === "true" : this._visible = !this._targetEl.classList.contains("hidden"), this._clickHandler = function() {
        e.toggle();
      }, this._triggerEl.addEventListener("click", this._clickHandler), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._triggerEl && this._initialized && (this._triggerEl.removeEventListener("click", this._clickHandler), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Collapse", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.collapse = function() {
      this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), this._visible = !1, this._options.onCollapse(this);
    }, t.prototype.expand = function() {
      this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), this._visible = !0, this._options.onExpand(this);
    }, t.prototype.toggle = function() {
      this._visible ? this.collapse() : this.expand(), this._options.onToggle(this);
    }, t;
  }()
);
function Hr() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(function(t) {
    var e = t.getAttribute("data-collapse-toggle"), r = document.getElementById(e);
    r ? X.instanceExists("Collapse", r.getAttribute("id")) ? new Cr(r, t, {}, {
      id: r.getAttribute("id") + "_" + X._generateRandomId()
    }) : new Cr(r, t) : console.error('The target element with id "'.concat(e, '" does not exist. Please check the data-collapse-toggle attribute.'));
  });
}
typeof window < "u" && (window.Collapse = Cr, window.initCollapses = Hr);
var He = function() {
  return He = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, He.apply(this, arguments);
}, Rt = {
  defaultPosition: 0,
  indicators: {
    items: [],
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
  },
  interval: 3e3,
  onNext: function() {
  },
  onPrev: function() {
  },
  onChange: function() {
  }
}, Ma = {
  id: null,
  override: !0
}, gi = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      e === void 0 && (e = null), r === void 0 && (r = []), n === void 0 && (n = Rt), i === void 0 && (i = Ma), this._instanceId = i.id ? i.id : e.id, this._carouselEl = e, this._items = r, this._options = He(He(He({}, Rt), n), { indicators: He(He({}, Rt.indicators), n.indicators) }), this._activeItem = this.getItem(this._options.defaultPosition), this._indicators = this._options.indicators.items, this._intervalDuration = this._options.interval, this._intervalInstance = null, this._initialized = !1, this.init(), X.addInstance("Carousel", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._items.length && !this._initialized && (this._items.map(function(r) {
        r.el.classList.add("absolute", "inset-0", "transition-transform", "transform");
      }), this._getActiveItem() ? this.slideTo(this._getActiveItem().position) : this.slideTo(0), this._indicators.map(function(r, n) {
        r.el.addEventListener("click", function() {
          e.slideTo(n);
        });
      }), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._initialized && (this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Carousel", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.getItem = function(e) {
      return this._items[e];
    }, t.prototype.slideTo = function(e) {
      var r = this._items[e], n = {
        left: r.position === 0 ? this._items[this._items.length - 1] : this._items[r.position - 1],
        middle: r,
        right: r.position === this._items.length - 1 ? this._items[0] : this._items[r.position + 1]
      };
      this._rotate(n), this._setActiveItem(r), this._intervalInstance && (this.pause(), this.cycle()), this._options.onChange(this);
    }, t.prototype.next = function() {
      var e = this._getActiveItem(), r = null;
      e.position === this._items.length - 1 ? r = this._items[0] : r = this._items[e.position + 1], this.slideTo(r.position), this._options.onNext(this);
    }, t.prototype.prev = function() {
      var e = this._getActiveItem(), r = null;
      e.position === 0 ? r = this._items[this._items.length - 1] : r = this._items[e.position - 1], this.slideTo(r.position), this._options.onPrev(this);
    }, t.prototype._rotate = function(e) {
      this._items.map(function(r) {
        r.el.classList.add("hidden");
      }), e.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"), e.left.el.classList.add("-translate-x-full", "z-10"), e.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10"), e.middle.el.classList.add("translate-x-0", "z-20"), e.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"), e.right.el.classList.add("translate-x-full", "z-10");
    }, t.prototype.cycle = function() {
      var e = this;
      typeof window < "u" && (this._intervalInstance = window.setInterval(function() {
        e.next();
      }, this._intervalDuration));
    }, t.prototype.pause = function() {
      clearInterval(this._intervalInstance);
    }, t.prototype._getActiveItem = function() {
      return this._activeItem;
    }, t.prototype._setActiveItem = function(e) {
      var r, n, i = this;
      this._activeItem = e;
      var o = e.position;
      this._indicators.length && (this._indicators.map(function(a) {
        var s, c;
        a.el.setAttribute("aria-current", "false"), (s = a.el.classList).remove.apply(s, i._options.indicators.activeClasses.split(" ")), (c = a.el.classList).add.apply(c, i._options.indicators.inactiveClasses.split(" "));
      }), (r = this._indicators[o].el.classList).add.apply(r, this._options.indicators.activeClasses.split(" ")), (n = this._indicators[o].el.classList).remove.apply(n, this._options.indicators.inactiveClasses.split(" ")), this._indicators[o].el.setAttribute("aria-current", "true"));
    }, t;
  }()
);
function $r() {
  document.querySelectorAll("[data-carousel]").forEach(function(t) {
    var e = t.getAttribute("data-carousel-interval"), r = t.getAttribute("data-carousel") === "slide", n = [], i = 0;
    t.querySelectorAll("[data-carousel-item]").length && Array.from(t.querySelectorAll("[data-carousel-item]")).map(function(f, p) {
      n.push({
        position: p,
        el: f
      }), f.getAttribute("data-carousel-item") === "active" && (i = p);
    });
    var o = [];
    t.querySelectorAll("[data-carousel-slide-to]").length && Array.from(t.querySelectorAll("[data-carousel-slide-to]")).map(function(f) {
      o.push({
        position: parseInt(f.getAttribute("data-carousel-slide-to")),
        el: f
      });
    });
    var a = new gi(t, n, {
      defaultPosition: i,
      indicators: {
        items: o
      },
      interval: e || Rt.interval
    });
    r && a.cycle();
    var s = t.querySelector("[data-carousel-next]"), c = t.querySelector("[data-carousel-prev]");
    s && s.addEventListener("click", function() {
      a.next();
    }), c && c.addEventListener("click", function() {
      a.prev();
    });
  });
}
typeof window < "u" && (window.Carousel = gi, window.initCarousels = $r);
var $t = function() {
  return $t = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, $t.apply(this, arguments);
}, Pn = {
  transition: "transition-opacity",
  duration: 300,
  timing: "ease-out",
  onHide: function() {
  }
}, Na = {
  id: null,
  override: !0
}, hi = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = Pn), i === void 0 && (i = Na), this._instanceId = i.id ? i.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = $t($t({}, Pn), n), this._initialized = !1, this.init(), X.addInstance("Dismiss", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._triggerEl && this._targetEl && !this._initialized && (this._clickHandler = function() {
        e.hide();
      }, this._triggerEl.addEventListener("click", this._clickHandler), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._triggerEl && this._initialized && (this._triggerEl.removeEventListener("click", this._clickHandler), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Dismiss", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.hide = function() {
      var e = this;
      this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0"), setTimeout(function() {
        e._targetEl.classList.add("hidden");
      }, this._options.duration), this._options.onHide(this, this._targetEl);
    }, t;
  }()
);
function Br() {
  document.querySelectorAll("[data-dismiss-target]").forEach(function(t) {
    var e = t.getAttribute("data-dismiss-target"), r = document.querySelector(e);
    r ? new hi(r, t) : console.error('The dismiss element with id "'.concat(e, '" does not exist. Please check the data-dismiss-target attribute.'));
  });
}
typeof window < "u" && (window.Dismiss = hi, window.initDismisses = Br);
var pe = "top", me = "bottom", ve = "right", ge = "left", qr = "auto", _t = [pe, me, ve, ge], tt = "start", wt = "end", Da = "clippingParents", bi = "viewport", bt = "popper", Ha = "reference", Sn = /* @__PURE__ */ _t.reduce(function(t, e) {
  return t.concat([e + "-" + tt, e + "-" + wt]);
}, []), mi = /* @__PURE__ */ [].concat(_t, [qr]).reduce(function(t, e) {
  return t.concat([e, e + "-" + tt, e + "-" + wt]);
}, []), $a = "beforeRead", Ba = "read", qa = "afterRead", Ga = "beforeMain", Va = "main", Wa = "afterMain", Fa = "beforeWrite", Ua = "write", Ka = "afterWrite", Xa = [$a, Ba, qa, Ga, Va, Wa, Fa, Ua, Ka];
function Ee(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function he(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Ve(t) {
  var e = he(t).Element;
  return t instanceof e || t instanceof Element;
}
function be(t) {
  var e = he(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Gr(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = he(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Ya(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, i = e.attributes[r] || {}, o = e.elements[r];
    !be(o) || !Ee(o) || (Object.assign(o.style, n), Object.keys(i).forEach(function(a) {
      var s = i[a];
      s === !1 ? o.removeAttribute(a) : o.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Ja(t) {
  var e = t.state, r = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var i = e.elements[n], o = e.attributes[n] || {}, a = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), s = a.reduce(function(c, f) {
        return c[f] = "", c;
      }, {});
      !be(i) || !Ee(i) || (Object.assign(i.style, s), Object.keys(o).forEach(function(c) {
        i.removeAttribute(c);
      }));
    });
  };
}
const Za = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ya,
  effect: Ja,
  requires: ["computeStyles"]
};
function _e(t) {
  return t.split("-")[0];
}
var Ge = Math.max, Bt = Math.min, rt = Math.round;
function Ar() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function vi() {
  return !/^((?!chrome|android).)*safari/i.test(Ar());
}
function nt(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), i = 1, o = 1;
  e && be(t) && (i = t.offsetWidth > 0 && rt(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && rt(n.height) / t.offsetHeight || 1);
  var a = Ve(t) ? he(t) : window, s = a.visualViewport, c = !vi() && r, f = (n.left + (c && s ? s.offsetLeft : 0)) / i, p = (n.top + (c && s ? s.offsetTop : 0)) / o, g = n.width / i, v = n.height / o;
  return {
    width: g,
    height: v,
    top: p,
    right: f + g,
    bottom: p + v,
    left: f,
    x: f,
    y: p
  };
}
function Vr(t) {
  var e = nt(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function yi(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Gr(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ie(t) {
  return he(t).getComputedStyle(t);
}
function Qa(t) {
  return ["table", "td", "th"].indexOf(Ee(t)) >= 0;
}
function Re(t) {
  return ((Ve(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function Zt(t) {
  return Ee(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Gr(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Re(t)
  );
}
function jn(t) {
  return !be(t) || // https://github.com/popperjs/popper-core/issues/837
  Ie(t).position === "fixed" ? null : t.offsetParent;
}
function es(t) {
  var e = /firefox/i.test(Ar()), r = /Trident/i.test(Ar());
  if (r && be(t)) {
    var n = Ie(t);
    if (n.position === "fixed")
      return null;
  }
  var i = Zt(t);
  for (Gr(i) && (i = i.host); be(i) && ["html", "body"].indexOf(Ee(i)) < 0; ) {
    var o = Ie(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Et(t) {
  for (var e = he(t), r = jn(t); r && Qa(r) && Ie(r).position === "static"; )
    r = jn(r);
  return r && (Ee(r) === "html" || Ee(r) === "body" && Ie(r).position === "static") ? e : r || es(t) || e;
}
function Wr(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function mt(t, e, r) {
  return Ge(t, Bt(e, r));
}
function ts(t, e, r) {
  var n = mt(t, e, r);
  return n > r ? r : n;
}
function wi() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function xi(t) {
  return Object.assign({}, wi(), t);
}
function ki(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var rs = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, xi(typeof e != "number" ? e : ki(e, _t));
};
function ns(t) {
  var e, r = t.state, n = t.name, i = t.options, o = r.elements.arrow, a = r.modifiersData.popperOffsets, s = _e(r.placement), c = Wr(s), f = [ge, ve].indexOf(s) >= 0, p = f ? "height" : "width";
  if (!(!o || !a)) {
    var g = rs(i.padding, r), v = Vr(o), w = c === "y" ? pe : ge, k = c === "y" ? me : ve, b = r.rects.reference[p] + r.rects.reference[c] - a[c] - r.rects.popper[p], x = a[c] - r.rects.reference[c], A = Et(o), _ = A ? c === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0, j = b / 2 - x / 2, O = g[w], R = _ - v[p] - g[k], z = _ / 2 - v[p] / 2 + j, D = mt(O, z, R), G = c;
    r.modifiersData[n] = (e = {}, e[G] = D, e.centerOffset = D - z, e);
  }
}
function is(t) {
  var e = t.state, r = t.options, n = r.element, i = n === void 0 ? "[data-popper-arrow]" : n;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || yi(e.elements.popper, i) && (e.elements.arrow = i));
}
const os = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ns,
  effect: is,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function it(t) {
  return t.split("-")[1];
}
var as = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ss(t, e) {
  var r = t.x, n = t.y, i = e.devicePixelRatio || 1;
  return {
    x: rt(r * i) / i || 0,
    y: rt(n * i) / i || 0
  };
}
function Rn(t) {
  var e, r = t.popper, n = t.popperRect, i = t.placement, o = t.variation, a = t.offsets, s = t.position, c = t.gpuAcceleration, f = t.adaptive, p = t.roundOffsets, g = t.isFixed, v = a.x, w = v === void 0 ? 0 : v, k = a.y, b = k === void 0 ? 0 : k, x = typeof p == "function" ? p({
    x: w,
    y: b
  }) : {
    x: w,
    y: b
  };
  w = x.x, b = x.y;
  var A = a.hasOwnProperty("x"), _ = a.hasOwnProperty("y"), j = ge, O = pe, R = window;
  if (f) {
    var z = Et(r), D = "clientHeight", G = "clientWidth";
    if (z === he(r) && (z = Re(r), Ie(z).position !== "static" && s === "absolute" && (D = "scrollHeight", G = "scrollWidth")), z = z, i === pe || (i === ge || i === ve) && o === wt) {
      O = me;
      var Y = g && z === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        z[D]
      );
      b -= Y - n.height, b *= c ? 1 : -1;
    }
    if (i === ge || (i === pe || i === me) && o === wt) {
      j = ve;
      var H = g && z === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        z[G]
      );
      w -= H - n.width, w *= c ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: s
  }, f && as), C = p === !0 ? ss({
    x: w,
    y: b
  }, he(r)) : {
    x: w,
    y: b
  };
  if (w = C.x, b = C.y, c) {
    var $;
    return Object.assign({}, F, ($ = {}, $[O] = _ ? "0" : "", $[j] = A ? "0" : "", $.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + b + "px)" : "translate3d(" + w + "px, " + b + "px, 0)", $));
  }
  return Object.assign({}, F, (e = {}, e[O] = _ ? b + "px" : "", e[j] = A ? w + "px" : "", e.transform = "", e));
}
function ls(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, i = n === void 0 ? !0 : n, o = r.adaptive, a = o === void 0 ? !0 : o, s = r.roundOffsets, c = s === void 0 ? !0 : s, f = {
    placement: _e(e.placement),
    variation: it(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Rn(Object.assign({}, f, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Rn(Object.assign({}, f, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const cs = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ls,
  data: {}
};
var zt = {
  passive: !0
};
function ds(t) {
  var e = t.state, r = t.instance, n = t.options, i = n.scroll, o = i === void 0 ? !0 : i, a = n.resize, s = a === void 0 ? !0 : a, c = he(e.elements.popper), f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && f.forEach(function(p) {
    p.addEventListener("scroll", r.update, zt);
  }), s && c.addEventListener("resize", r.update, zt), function() {
    o && f.forEach(function(p) {
      p.removeEventListener("scroll", r.update, zt);
    }), s && c.removeEventListener("resize", r.update, zt);
  };
}
const us = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ds,
  data: {}
};
var fs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mt(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return fs[e];
  });
}
var ps = {
  start: "end",
  end: "start"
};
function Mn(t) {
  return t.replace(/start|end/g, function(e) {
    return ps[e];
  });
}
function Fr(t) {
  var e = he(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ur(t) {
  return nt(Re(t)).left + Fr(t).scrollLeft;
}
function gs(t, e) {
  var r = he(t), n = Re(t), i = r.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, c = 0;
  if (i) {
    o = i.width, a = i.height;
    var f = vi();
    (f || !f && e === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s + Ur(t),
    y: c
  };
}
function hs(t) {
  var e, r = Re(t), n = Fr(t), i = (e = t.ownerDocument) == null ? void 0 : e.body, o = Ge(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Ge(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -n.scrollLeft + Ur(t), c = -n.scrollTop;
  return Ie(i || r).direction === "rtl" && (s += Ge(r.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function Kr(t) {
  var e = Ie(t), r = e.overflow, n = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function _i(t) {
  return ["html", "body", "#document"].indexOf(Ee(t)) >= 0 ? t.ownerDocument.body : be(t) && Kr(t) ? t : _i(Zt(t));
}
function vt(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = _i(t), i = n === ((r = t.ownerDocument) == null ? void 0 : r.body), o = he(n), a = i ? [o].concat(o.visualViewport || [], Kr(n) ? n : []) : n, s = e.concat(a);
  return i ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(vt(Zt(a)))
  );
}
function Tr(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function bs(t, e) {
  var r = nt(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Nn(t, e, r) {
  return e === bi ? Tr(gs(t, r)) : Ve(e) ? bs(e, r) : Tr(hs(Re(t)));
}
function ms(t) {
  var e = vt(Zt(t)), r = ["absolute", "fixed"].indexOf(Ie(t).position) >= 0, n = r && be(t) ? Et(t) : t;
  return Ve(n) ? e.filter(function(i) {
    return Ve(i) && yi(i, n) && Ee(i) !== "body";
  }) : [];
}
function vs(t, e, r, n) {
  var i = e === "clippingParents" ? ms(t) : [].concat(e), o = [].concat(i, [r]), a = o[0], s = o.reduce(function(c, f) {
    var p = Nn(t, f, n);
    return c.top = Ge(p.top, c.top), c.right = Bt(p.right, c.right), c.bottom = Bt(p.bottom, c.bottom), c.left = Ge(p.left, c.left), c;
  }, Nn(t, a, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ei(t) {
  var e = t.reference, r = t.element, n = t.placement, i = n ? _e(n) : null, o = n ? it(n) : null, a = e.x + e.width / 2 - r.width / 2, s = e.y + e.height / 2 - r.height / 2, c;
  switch (i) {
    case pe:
      c = {
        x: a,
        y: e.y - r.height
      };
      break;
    case me:
      c = {
        x: a,
        y: e.y + e.height
      };
      break;
    case ve:
      c = {
        x: e.x + e.width,
        y: s
      };
      break;
    case ge:
      c = {
        x: e.x - r.width,
        y: s
      };
      break;
    default:
      c = {
        x: e.x,
        y: e.y
      };
  }
  var f = i ? Wr(i) : null;
  if (f != null) {
    var p = f === "y" ? "height" : "width";
    switch (o) {
      case tt:
        c[f] = c[f] - (e[p] / 2 - r[p] / 2);
        break;
      case wt:
        c[f] = c[f] + (e[p] / 2 - r[p] / 2);
        break;
    }
  }
  return c;
}
function xt(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = n === void 0 ? t.placement : n, o = r.strategy, a = o === void 0 ? t.strategy : o, s = r.boundary, c = s === void 0 ? Da : s, f = r.rootBoundary, p = f === void 0 ? bi : f, g = r.elementContext, v = g === void 0 ? bt : g, w = r.altBoundary, k = w === void 0 ? !1 : w, b = r.padding, x = b === void 0 ? 0 : b, A = xi(typeof x != "number" ? x : ki(x, _t)), _ = v === bt ? Ha : bt, j = t.rects.popper, O = t.elements[k ? _ : v], R = vs(Ve(O) ? O : O.contextElement || Re(t.elements.popper), c, p, a), z = nt(t.elements.reference), D = Ei({
    reference: z,
    element: j,
    strategy: "absolute",
    placement: i
  }), G = Tr(Object.assign({}, j, D)), Y = v === bt ? G : z, H = {
    top: R.top - Y.top + A.top,
    bottom: Y.bottom - R.bottom + A.bottom,
    left: R.left - Y.left + A.left,
    right: Y.right - R.right + A.right
  }, F = t.modifiersData.offset;
  if (v === bt && F) {
    var C = F[i];
    Object.keys(H).forEach(function($) {
      var L = [ve, me].indexOf($) >= 0 ? 1 : -1, B = [pe, me].indexOf($) >= 0 ? "y" : "x";
      H[$] += C[B] * L;
    });
  }
  return H;
}
function ys(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, i = r.boundary, o = r.rootBoundary, a = r.padding, s = r.flipVariations, c = r.allowedAutoPlacements, f = c === void 0 ? mi : c, p = it(n), g = p ? s ? Sn : Sn.filter(function(k) {
    return it(k) === p;
  }) : _t, v = g.filter(function(k) {
    return f.indexOf(k) >= 0;
  });
  v.length === 0 && (v = g);
  var w = v.reduce(function(k, b) {
    return k[b] = xt(t, {
      placement: b,
      boundary: i,
      rootBoundary: o,
      padding: a
    })[_e(b)], k;
  }, {});
  return Object.keys(w).sort(function(k, b) {
    return w[k] - w[b];
  });
}
function ws(t) {
  if (_e(t) === qr)
    return [];
  var e = Mt(t);
  return [Mn(t), e, Mn(e)];
}
function xs(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !0 : a, c = r.fallbackPlacements, f = r.padding, p = r.boundary, g = r.rootBoundary, v = r.altBoundary, w = r.flipVariations, k = w === void 0 ? !0 : w, b = r.allowedAutoPlacements, x = e.options.placement, A = _e(x), _ = A === x, j = c || (_ || !k ? [Mt(x)] : ws(x)), O = [x].concat(j).reduce(function(fe, xe) {
      return fe.concat(_e(xe) === qr ? ys(e, {
        placement: xe,
        boundary: p,
        rootBoundary: g,
        padding: f,
        flipVariations: k,
        allowedAutoPlacements: b
      }) : xe);
    }, []), R = e.rects.reference, z = e.rects.popper, D = /* @__PURE__ */ new Map(), G = !0, Y = O[0], H = 0; H < O.length; H++) {
      var F = O[H], C = _e(F), $ = it(F) === tt, L = [pe, me].indexOf(C) >= 0, B = L ? "width" : "height", S = xt(e, {
        placement: F,
        boundary: p,
        rootBoundary: g,
        altBoundary: v,
        padding: f
      }), V = L ? $ ? ve : ge : $ ? me : pe;
      R[B] > z[B] && (V = Mt(V));
      var K = Mt(V), M = [];
      if (o && M.push(S[C] <= 0), s && M.push(S[V] <= 0, S[K] <= 0), M.every(function(fe) {
        return fe;
      })) {
        Y = F, G = !1;
        break;
      }
      D.set(F, M);
    }
    if (G)
      for (var Q = k ? 3 : 1, ne = function(xe) {
        var Me = O.find(function(Ke) {
          var ke = D.get(Ke);
          if (ke)
            return ke.slice(0, xe).every(function(Xe) {
              return Xe;
            });
        });
        if (Me)
          return Y = Me, "break";
      }, ae = Q; ae > 0; ae--) {
        var Z = ne(ae);
        if (Z === "break")
          break;
      }
    e.placement !== Y && (e.modifiersData[n]._skip = !0, e.placement = Y, e.reset = !0);
  }
}
const ks = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: xs,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Dn(t, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - r.y,
    right: t.right - e.width + r.x,
    bottom: t.bottom - e.height + r.y,
    left: t.left - e.width - r.x
  };
}
function Hn(t) {
  return [pe, ve, me, ge].some(function(e) {
    return t[e] >= 0;
  });
}
function _s(t) {
  var e = t.state, r = t.name, n = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, a = xt(e, {
    elementContext: "reference"
  }), s = xt(e, {
    altBoundary: !0
  }), c = Dn(a, n), f = Dn(s, i, o), p = Hn(c), g = Hn(f);
  e.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: f,
    isReferenceHidden: p,
    hasPopperEscaped: g
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": g
  });
}
const Es = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _s
};
function Is(t, e, r) {
  var n = _e(t), i = [ge, pe].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, a = o[0], s = o[1];
  return a = a || 0, s = (s || 0) * i, [ge, ve].indexOf(n) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function Cs(t) {
  var e = t.state, r = t.options, n = t.name, i = r.offset, o = i === void 0 ? [0, 0] : i, a = mi.reduce(function(p, g) {
    return p[g] = Is(g, e.rects, o), p;
  }, {}), s = a[e.placement], c = s.x, f = s.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += f), e.modifiersData[n] = a;
}
const As = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Cs
};
function Ts(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = Ei({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Ls = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ts,
  data: {}
};
function zs(t) {
  return t === "x" ? "y" : "x";
}
function Os(t) {
  var e = t.state, r = t.options, n = t.name, i = r.mainAxis, o = i === void 0 ? !0 : i, a = r.altAxis, s = a === void 0 ? !1 : a, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, g = r.padding, v = r.tether, w = v === void 0 ? !0 : v, k = r.tetherOffset, b = k === void 0 ? 0 : k, x = xt(e, {
    boundary: c,
    rootBoundary: f,
    padding: g,
    altBoundary: p
  }), A = _e(e.placement), _ = it(e.placement), j = !_, O = Wr(A), R = zs(O), z = e.modifiersData.popperOffsets, D = e.rects.reference, G = e.rects.popper, Y = typeof b == "function" ? b(Object.assign({}, e.rects, {
    placement: e.placement
  })) : b, H = typeof Y == "number" ? {
    mainAxis: Y,
    altAxis: Y
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Y), F = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (z) {
    if (o) {
      var $, L = O === "y" ? pe : ge, B = O === "y" ? me : ve, S = O === "y" ? "height" : "width", V = z[O], K = V + x[L], M = V - x[B], Q = w ? -G[S] / 2 : 0, ne = _ === tt ? D[S] : G[S], ae = _ === tt ? -G[S] : -D[S], Z = e.elements.arrow, fe = w && Z ? Vr(Z) : {
        width: 0,
        height: 0
      }, xe = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : wi(), Me = xe[L], Ke = xe[B], ke = mt(0, D[S], fe[S]), Xe = j ? D[S] / 2 - Q - ke - Me - H.mainAxis : ne - ke - Me - H.mainAxis, tr = j ? -D[S] / 2 + Q + ke + Ke + H.mainAxis : ae + ke + Ke + H.mainAxis, at = e.elements.arrow && Et(e.elements.arrow), st = at ? O === "y" ? at.clientTop || 0 : at.clientLeft || 0 : 0, lt = ($ = F == null ? void 0 : F[O]) != null ? $ : 0, ct = V + Xe - lt - st, Ct = V + tr - lt, Ye = mt(w ? Bt(K, ct) : K, V, w ? Ge(M, Ct) : M);
      z[O] = Ye, C[O] = Ye - V;
    }
    if (s) {
      var Je, rr = O === "x" ? pe : ge, Ne = O === "x" ? me : ve, d = z[R], l = R === "y" ? "height" : "width", u = d + x[rr], m = d - x[Ne], y = [pe, ge].indexOf(A) !== -1, E = (Je = F == null ? void 0 : F[R]) != null ? Je : 0, N = y ? u : d - D[l] - G[l] - E + H.altAxis, W = y ? d + D[l] + G[l] - E - H.altAxis : m, T = w && y ? ts(N, d, W) : mt(w ? N : u, d, w ? W : m);
      z[R] = T, C[R] = T - d;
    }
    e.modifiersData[n] = C;
  }
}
const Ps = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Os,
  requiresIfExists: ["offset"]
};
function Ss(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function js(t) {
  return t === he(t) || !be(t) ? Fr(t) : Ss(t);
}
function Rs(t) {
  var e = t.getBoundingClientRect(), r = rt(e.width) / t.offsetWidth || 1, n = rt(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Ms(t, e, r) {
  r === void 0 && (r = !1);
  var n = be(e), i = be(e) && Rs(e), o = Re(e), a = nt(t, i, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ee(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Kr(o)) && (s = js(e)), be(e) ? (c = nt(e, !0), c.x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Ur(o))), {
    x: a.left + s.scrollLeft - c.x,
    y: a.top + s.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function Ns(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    r.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function(s) {
      if (!r.has(s)) {
        var c = e.get(s);
        c && i(c);
      }
    }), n.push(o);
  }
  return t.forEach(function(o) {
    r.has(o.name) || i(o);
  }), n;
}
function Ds(t) {
  var e = Ns(t);
  return Xa.reduce(function(r, n) {
    return r.concat(e.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Hs(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function $s(t) {
  var e = t.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var $n = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bn() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Bs(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, i = e.defaultOptions, o = i === void 0 ? $n : i;
  return function(s, c, f) {
    f === void 0 && (f = o);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $n, o),
      modifiersData: {},
      elements: {
        reference: s,
        popper: c
      },
      attributes: {},
      styles: {}
    }, g = [], v = !1, w = {
      state: p,
      setOptions: function(A) {
        var _ = typeof A == "function" ? A(p.options) : A;
        b(), p.options = Object.assign({}, o, p.options, _), p.scrollParents = {
          reference: Ve(s) ? vt(s) : s.contextElement ? vt(s.contextElement) : [],
          popper: vt(c)
        };
        var j = Ds($s([].concat(n, p.options.modifiers)));
        return p.orderedModifiers = j.filter(function(O) {
          return O.enabled;
        }), k(), w.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var A = p.elements, _ = A.reference, j = A.popper;
          if (Bn(_, j)) {
            p.rects = {
              reference: Ms(_, Et(j), p.options.strategy === "fixed"),
              popper: Vr(j)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(H) {
              return p.modifiersData[H.name] = Object.assign({}, H.data);
            });
            for (var O = 0; O < p.orderedModifiers.length; O++) {
              if (p.reset === !0) {
                p.reset = !1, O = -1;
                continue;
              }
              var R = p.orderedModifiers[O], z = R.fn, D = R.options, G = D === void 0 ? {} : D, Y = R.name;
              typeof z == "function" && (p = z({
                state: p,
                options: G,
                name: Y,
                instance: w
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Hs(function() {
        return new Promise(function(x) {
          w.forceUpdate(), x(p);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Bn(s, c))
      return w;
    w.setOptions(f).then(function(x) {
      !v && f.onFirstUpdate && f.onFirstUpdate(x);
    });
    function k() {
      p.orderedModifiers.forEach(function(x) {
        var A = x.name, _ = x.options, j = _ === void 0 ? {} : _, O = x.effect;
        if (typeof O == "function") {
          var R = O({
            state: p,
            name: A,
            instance: w,
            options: j
          }), z = function() {
          };
          g.push(R || z);
        }
      });
    }
    function b() {
      g.forEach(function(x) {
        return x();
      }), g = [];
    }
    return w;
  };
}
var qs = [us, Ls, cs, Za, As, ks, Ps, os, Es], Xr = /* @__PURE__ */ Bs({
  defaultModifiers: qs
}), ze = function() {
  return ze = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, ze.apply(this, arguments);
}, Ot = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, o; n < i; n++)
      (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return t.concat(o || Array.prototype.slice.call(e));
}, Oe = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
  ignoreClickOutsideClass: !1,
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Gs = {
  id: null,
  override: !0
}, Yr = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = Oe), i === void 0 && (i = Gs), this._instanceId = i.id ? i.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = ze(ze({}, Oe), n), this._popperInstance = null, this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Dropdown", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      this._triggerEl && this._targetEl && !this._initialized && (this._popperInstance = this._createPopperInstance(), this._setupEventListeners(), this._initialized = !0);
    }, t.prototype.destroy = function() {
      var e = this, r = this._getTriggerEvents();
      this._options.triggerType === "click" && r.showEvents.forEach(function(n) {
        e._triggerEl.removeEventListener(n, e._clickHandler);
      }), this._options.triggerType === "hover" && (r.showEvents.forEach(function(n) {
        e._triggerEl.removeEventListener(n, e._hoverShowTriggerElHandler), e._targetEl.removeEventListener(n, e._hoverShowTargetElHandler);
      }), r.hideEvents.forEach(function(n) {
        e._triggerEl.removeEventListener(n, e._hoverHideHandler), e._targetEl.removeEventListener(n, e._hoverHideHandler);
      })), this._popperInstance.destroy(), this._initialized = !1;
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Dropdown", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype._setupEventListeners = function() {
      var e = this, r = this._getTriggerEvents();
      this._clickHandler = function() {
        e.toggle();
      }, this._options.triggerType === "click" && r.showEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._clickHandler);
      }), this._hoverShowTriggerElHandler = function(n) {
        n.type === "click" ? e.toggle() : setTimeout(function() {
          e.show();
        }, e._options.delay);
      }, this._hoverShowTargetElHandler = function() {
        e.show();
      }, this._hoverHideHandler = function() {
        setTimeout(function() {
          e._targetEl.matches(":hover") || e.hide();
        }, e._options.delay);
      }, this._options.triggerType === "hover" && (r.showEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._hoverShowTriggerElHandler), e._targetEl.addEventListener(n, e._hoverShowTargetElHandler);
      }), r.hideEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._hoverHideHandler), e._targetEl.addEventListener(n, e._hoverHideHandler);
      }));
    }, t.prototype._createPopperInstance = function() {
      return Xr(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [
                this._options.offsetSkidding,
                this._options.offsetDistance
              ]
            }
          }
        ]
      });
    }, t.prototype._setupClickOutsideListener = function() {
      var e = this;
      this._clickOutsideEventListener = function(r) {
        e._handleClickOutside(r, e._targetEl);
      }, document.body.addEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._handleClickOutside = function(e, r) {
      var n = e.target, i = this._options.ignoreClickOutsideClass, o = !1;
      if (i) {
        var a = document.querySelectorAll(".".concat(i));
        a.forEach(function(s) {
          if (s.contains(n)) {
            o = !0;
            return;
          }
        });
      }
      n !== r && !r.contains(n) && !this._triggerEl.contains(n) && !o && this.isVisible() && this.hide();
    }, t.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "click"],
            hideEvents: ["mouseleave"]
          };
        case "click":
          return {
            showEvents: ["click"],
            hideEvents: []
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["click"],
            hideEvents: []
          };
      }
    }, t.prototype.toggle = function() {
      this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this);
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype.show = function() {
      this._targetEl.classList.remove("hidden"), this._targetEl.classList.add("block"), this._popperInstance.setOptions(function(e) {
        return ze(ze({}, e), { modifiers: Ot(Ot([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !0 }
        ], !1) });
      }), this._setupClickOutsideListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this);
    }, t.prototype.hide = function() {
      this._targetEl.classList.remove("block"), this._targetEl.classList.add("hidden"), this._popperInstance.setOptions(function(e) {
        return ze(ze({}, e), { modifiers: Ot(Ot([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !1 }
        ], !1) });
      }), this._visible = !1, this._removeClickOutsideListener(), this._options.onHide(this);
    }, t;
  }()
);
function Jr() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function(t) {
    var e = t.getAttribute("data-dropdown-toggle"), r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-dropdown-placement"), i = t.getAttribute("data-dropdown-offset-skidding"), o = t.getAttribute("data-dropdown-offset-distance"), a = t.getAttribute("data-dropdown-trigger"), s = t.getAttribute("data-dropdown-delay"), c = t.getAttribute("data-dropdown-ignore-click-outside-class");
      new Yr(r, t, {
        placement: n || Oe.placement,
        triggerType: a || Oe.triggerType,
        offsetSkidding: i ? parseInt(i) : Oe.offsetSkidding,
        offsetDistance: o ? parseInt(o) : Oe.offsetDistance,
        delay: s ? parseInt(s) : Oe.delay,
        ignoreClickOutsideClass: c || Oe.ignoreClickOutsideClass
      });
    } else
      console.error('The dropdown element with id "'.concat(e, '" does not exist. Please check the data-dropdown-toggle attribute.'));
  });
}
typeof window < "u" && (window.Dropdown = Yr, window.initDropdowns = Jr);
var qt = function() {
  return qt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, qt.apply(this, arguments);
}, Gt = {
  placement: "center",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  backdrop: "dynamic",
  closable: !0,
  onHide: function() {
  },
  onShow: function() {
  },
  onToggle: function() {
  }
}, Vs = {
  id: null,
  override: !0
}, Ii = (
  /** @class */
  function() {
    function t(e, r, n) {
      e === void 0 && (e = null), r === void 0 && (r = Gt), n === void 0 && (n = Vs), this._eventListenerInstances = [], this._instanceId = n.id ? n.id : e.id, this._targetEl = e, this._options = qt(qt({}, Gt), r), this._isHidden = !0, this._backdropEl = null, this._initialized = !1, this.init(), X.addInstance("Modal", this, this._instanceId, n.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._targetEl && !this._initialized && (this._getPlacementClasses().map(function(r) {
        e._targetEl.classList.add(r);
      }), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._initialized && (this.removeAllEventListenerInstances(), this._destroyBackdropEl(), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Modal", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype._createBackdrop = function() {
      var e;
      if (this._isHidden) {
        var r = document.createElement("div");
        r.setAttribute("modal-backdrop", ""), (e = r.classList).add.apply(e, this._options.backdropClasses.split(" ")), document.querySelector("body").append(r), this._backdropEl = r;
      }
    }, t.prototype._destroyBackdropEl = function() {
      this._isHidden || document.querySelector("[modal-backdrop]").remove();
    }, t.prototype._setupModalCloseEventListeners = function() {
      var e = this;
      this._options.backdrop === "dynamic" && (this._clickOutsideEventListener = function(r) {
        e._handleOutsideClick(r.target);
      }, this._targetEl.addEventListener("click", this._clickOutsideEventListener, !0)), this._keydownEventListener = function(r) {
        r.key === "Escape" && e.hide();
      }, document.body.addEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._removeModalCloseEventListeners = function() {
      this._options.backdrop === "dynamic" && this._targetEl.removeEventListener("click", this._clickOutsideEventListener, !0), document.body.removeEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._handleOutsideClick = function(e) {
      (e === this._targetEl || e === this._backdropEl && this.isVisible()) && this.hide();
    }, t.prototype._getPlacementClasses = function() {
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
    }, t.prototype.toggle = function() {
      this._isHidden ? this.show() : this.hide(), this._options.onToggle(this);
    }, t.prototype.show = function() {
      this.isHidden && (this._targetEl.classList.add("flex"), this._targetEl.classList.remove("hidden"), this._targetEl.setAttribute("aria-modal", "true"), this._targetEl.setAttribute("role", "dialog"), this._targetEl.removeAttribute("aria-hidden"), this._createBackdrop(), this._isHidden = !1, this._options.closable && this._setupModalCloseEventListeners(), document.body.classList.add("overflow-hidden"), this._options.onShow(this));
    }, t.prototype.hide = function() {
      this.isVisible && (this._targetEl.classList.add("hidden"), this._targetEl.classList.remove("flex"), this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.removeAttribute("aria-modal"), this._targetEl.removeAttribute("role"), this._destroyBackdropEl(), this._isHidden = !0, document.body.classList.remove("overflow-hidden"), this._options.closable && this._removeModalCloseEventListeners(), this._options.onHide(this));
    }, t.prototype.isVisible = function() {
      return !this._isHidden;
    }, t.prototype.isHidden = function() {
      return this._isHidden;
    }, t.prototype.addEventListenerInstance = function(e, r, n) {
      this._eventListenerInstances.push({
        element: e,
        type: r,
        handler: n
      });
    }, t.prototype.removeAllEventListenerInstances = function() {
      this._eventListenerInstances.map(function(e) {
        e.element.removeEventListener(e.type, e.handler);
      }), this._eventListenerInstances = [];
    }, t.prototype.getAllEventListenerInstances = function() {
      return this._eventListenerInstances;
    }, t;
  }()
);
function Zr() {
  document.querySelectorAll("[data-modal-target]").forEach(function(t) {
    var e = t.getAttribute("data-modal-target"), r = document.getElementById(e);
    if (r) {
      var n = r.getAttribute("data-modal-placement"), i = r.getAttribute("data-modal-backdrop");
      new Ii(r, {
        placement: n || Gt.placement,
        backdrop: i || Gt.backdrop
      });
    } else
      console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
  }), document.querySelectorAll("[data-modal-toggle]").forEach(function(t) {
    var e = t.getAttribute("data-modal-toggle"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Modal", e);
      if (n) {
        var i = function() {
          n.toggle();
        };
        t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
      } else
        console.error("Modal with id ".concat(e, " has not been initialized. Please initialize it using the data-modal-target attribute."));
    } else
      console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
  }), document.querySelectorAll("[data-modal-show]").forEach(function(t) {
    var e = t.getAttribute("data-modal-show"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Modal", e);
      if (n) {
        var i = function() {
          n.show();
        };
        t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
      } else
        console.error("Modal with id ".concat(e, " has not been initialized. Please initialize it using the data-modal-target attribute."));
    } else
      console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
  }), document.querySelectorAll("[data-modal-hide]").forEach(function(t) {
    var e = t.getAttribute("data-modal-hide"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Modal", e);
      if (n) {
        var i = function() {
          n.hide();
        };
        t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
      } else
        console.error("Modal with id ".concat(e, " has not been initialized. Please initialize it using the data-modal-target attribute."));
    } else
      console.error("Modal with id ".concat(e, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
  });
}
typeof window < "u" && (window.Modal = Ii, window.initModals = Zr);
var Vt = function() {
  return Vt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Vt.apply(this, arguments);
}, $e = {
  placement: "left",
  bodyScrolling: !1,
  backdrop: !0,
  edge: !1,
  edgeOffset: "bottom-[60px]",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Ws = {
  id: null,
  override: !0
}, Ci = (
  /** @class */
  function() {
    function t(e, r, n) {
      e === void 0 && (e = null), r === void 0 && (r = $e), n === void 0 && (n = Ws), this._eventListenerInstances = [], this._instanceId = n.id ? n.id : e.id, this._targetEl = e, this._options = Vt(Vt({}, $e), r), this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Drawer", this, this._instanceId, n.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._targetEl && !this._initialized && (this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.classList.add("transition-transform"), this._getPlacementClasses(this._options.placement).base.map(function(r) {
        e._targetEl.classList.add(r);
      }), this._handleEscapeKey = function(r) {
        r.key === "Escape" && e.isVisible() && e.hide();
      }, document.addEventListener("keydown", this._handleEscapeKey), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._initialized && (this.removeAllEventListenerInstances(), this._destroyBackdropEl(), document.removeEventListener("keydown", this._handleEscapeKey), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Drawer", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.hide = function() {
      var e = this;
      this._options.edge ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function(r) {
        e._targetEl.classList.remove(r);
      }), this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(r) {
        e._targetEl.classList.add(r);
      })) : (this._getPlacementClasses(this._options.placement).active.map(function(r) {
        e._targetEl.classList.remove(r);
      }), this._getPlacementClasses(this._options.placement).inactive.map(function(r) {
        e._targetEl.classList.add(r);
      })), this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.removeAttribute("aria-modal"), this._targetEl.removeAttribute("role"), this._options.bodyScrolling || document.body.classList.remove("overflow-hidden"), this._options.backdrop && this._destroyBackdropEl(), this._visible = !1, this._options.onHide(this);
    }, t.prototype.show = function() {
      var e = this;
      this._options.edge ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function(r) {
        e._targetEl.classList.add(r);
      }), this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(r) {
        e._targetEl.classList.remove(r);
      })) : (this._getPlacementClasses(this._options.placement).active.map(function(r) {
        e._targetEl.classList.add(r);
      }), this._getPlacementClasses(this._options.placement).inactive.map(function(r) {
        e._targetEl.classList.remove(r);
      })), this._targetEl.setAttribute("aria-modal", "true"), this._targetEl.setAttribute("role", "dialog"), this._targetEl.removeAttribute("aria-hidden"), this._options.bodyScrolling || document.body.classList.add("overflow-hidden"), this._options.backdrop && this._createBackdrop(), this._visible = !0, this._options.onShow(this);
    }, t.prototype.toggle = function() {
      this.isVisible() ? this.hide() : this.show();
    }, t.prototype._createBackdrop = function() {
      var e, r = this;
      if (!this._visible) {
        var n = document.createElement("div");
        n.setAttribute("drawer-backdrop", ""), (e = n.classList).add.apply(e, this._options.backdropClasses.split(" ")), document.querySelector("body").append(n), n.addEventListener("click", function() {
          r.hide();
        });
      }
    }, t.prototype._destroyBackdropEl = function() {
      this._visible && document.querySelector("[drawer-backdrop]").remove();
    }, t.prototype._getPlacementClasses = function(e) {
      switch (e) {
        case "top":
          return {
            base: ["top-0", "left-0", "right-0"],
            active: ["transform-none"],
            inactive: ["-translate-y-full"]
          };
        case "right":
          return {
            base: ["right-0", "top-0"],
            active: ["transform-none"],
            inactive: ["translate-x-full"]
          };
        case "bottom":
          return {
            base: ["bottom-0", "left-0", "right-0"],
            active: ["transform-none"],
            inactive: ["translate-y-full"]
          };
        case "left":
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["-translate-x-full"]
          };
        case "bottom-edge":
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["translate-y-full", this._options.edgeOffset]
          };
        default:
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["-translate-x-full"]
          };
      }
    }, t.prototype.isHidden = function() {
      return !this._visible;
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype.addEventListenerInstance = function(e, r, n) {
      this._eventListenerInstances.push({
        element: e,
        type: r,
        handler: n
      });
    }, t.prototype.removeAllEventListenerInstances = function() {
      this._eventListenerInstances.map(function(e) {
        e.element.removeEventListener(e.type, e.handler);
      }), this._eventListenerInstances = [];
    }, t.prototype.getAllEventListenerInstances = function() {
      return this._eventListenerInstances;
    }, t;
  }()
);
function Qr() {
  document.querySelectorAll("[data-drawer-target]").forEach(function(t) {
    var e = t.getAttribute("data-drawer-target"), r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-drawer-placement"), i = t.getAttribute("data-drawer-body-scrolling"), o = t.getAttribute("data-drawer-backdrop"), a = t.getAttribute("data-drawer-edge"), s = t.getAttribute("data-drawer-edge-offset");
      new Ci(r, {
        placement: n || $e.placement,
        bodyScrolling: i ? i === "true" : $e.bodyScrolling,
        backdrop: o ? o === "true" : $e.backdrop,
        edge: a ? a === "true" : $e.edge,
        edgeOffset: s || $e.edgeOffset
      });
    } else
      console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  }), document.querySelectorAll("[data-drawer-toggle]").forEach(function(t) {
    var e = t.getAttribute("data-drawer-toggle"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Drawer", e);
      if (n) {
        var i = function() {
          n.toggle();
        };
        t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
      } else
        console.error("Drawer with id ".concat(e, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
    } else
      console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  }), document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(t) {
    var e = t.getAttribute("data-drawer-dismiss") ? t.getAttribute("data-drawer-dismiss") : t.getAttribute("data-drawer-hide"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Drawer", e);
      if (n) {
        var i = function() {
          n.hide();
        };
        t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
      } else
        console.error("Drawer with id ".concat(e, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
    } else
      console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
  }), document.querySelectorAll("[data-drawer-show]").forEach(function(t) {
    var e = t.getAttribute("data-drawer-show"), r = document.getElementById(e);
    if (r) {
      var n = X.getInstance("Drawer", e);
      if (n) {
        var i = function() {
          n.show();
        };
        t.addEventListener("click", i), n.addEventListenerInstance(t, "click", i);
      } else
        console.error("Drawer with id ".concat(e, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
    } else
      console.error("Drawer with id ".concat(e, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  });
}
typeof window < "u" && (window.Drawer = Ci, window.initDrawers = Qr);
var Wt = function() {
  return Wt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Wt.apply(this, arguments);
}, qn = {
  defaultTabId: null,
  activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
  inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
  onShow: function() {
  }
}, Fs = {
  id: null,
  override: !0
}, Ai = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      e === void 0 && (e = null), r === void 0 && (r = []), n === void 0 && (n = qn), i === void 0 && (i = Fs), this._instanceId = i.id ? i.id : e.id, this._tabsEl = e, this._items = r, this._activeTab = n ? this.getTab(n.defaultTabId) : null, this._options = Wt(Wt({}, qn), n), this._initialized = !1, this.init(), X.addInstance("Tabs", this, this._tabsEl.id, !0), X.addInstance("Tabs", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._items.length && !this._initialized && (this._activeTab || this.setActiveTab(this._items[0]), this.show(this._activeTab.id, !0), this._items.map(function(r) {
        r.triggerEl.addEventListener("click", function() {
          e.show(r.id);
        });
      }));
    }, t.prototype.destroy = function() {
      this._initialized && (this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      this.destroy(), X.removeInstance("Tabs", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.getActiveTab = function() {
      return this._activeTab;
    }, t.prototype.setActiveTab = function(e) {
      this._activeTab = e;
    }, t.prototype.getTab = function(e) {
      return this._items.filter(function(r) {
        return r.id === e;
      })[0];
    }, t.prototype.show = function(e, r) {
      var n, i, o = this;
      r === void 0 && (r = !1);
      var a = this.getTab(e);
      a === this._activeTab && !r || (this._items.map(function(s) {
        var c, f;
        s !== a && ((c = s.triggerEl.classList).remove.apply(c, o._options.activeClasses.split(" ")), (f = s.triggerEl.classList).add.apply(f, o._options.inactiveClasses.split(" ")), s.targetEl.classList.add("hidden"), s.triggerEl.setAttribute("aria-selected", "false"));
      }), (n = a.triggerEl.classList).add.apply(n, this._options.activeClasses.split(" ")), (i = a.triggerEl.classList).remove.apply(i, this._options.inactiveClasses.split(" ")), a.triggerEl.setAttribute("aria-selected", "true"), a.targetEl.classList.remove("hidden"), this.setActiveTab(a), this._options.onShow(this, a));
    }, t;
  }()
);
function en() {
  document.querySelectorAll("[data-tabs-toggle]").forEach(function(t) {
    var e = [], r = null;
    t.querySelectorAll('[role="tab"]').forEach(function(n) {
      var i = n.getAttribute("aria-selected") === "true", o = {
        id: n.getAttribute("data-tabs-target"),
        triggerEl: n,
        targetEl: document.querySelector(n.getAttribute("data-tabs-target"))
      };
      e.push(o), i && (r = o.id);
    }), new Ai(t, e, {
      defaultTabId: r
    });
  });
}
typeof window < "u" && (window.Tabs = Ai, window.initTabs = en);
var Pe = function() {
  return Pe = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Pe.apply(this, arguments);
}, Pt = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, o; n < i; n++)
      (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return t.concat(o || Array.prototype.slice.call(e));
}, Ft = {
  placement: "top",
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Us = {
  id: null,
  override: !0
}, Ti = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = Ft), i === void 0 && (i = Us), this._instanceId = i.id ? i.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = Pe(Pe({}, Ft), n), this._popperInstance = null, this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Tooltip", this, this._instanceId, i.override);
    }
    return t.prototype.init = function() {
      this._triggerEl && this._targetEl && !this._initialized && (this._setupEventListeners(), this._popperInstance = this._createPopperInstance(), this._initialized = !0);
    }, t.prototype.destroy = function() {
      var e = this;
      if (this._initialized) {
        var r = this._getTriggerEvents();
        r.showEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._showHandler);
        }), r.hideEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._hideHandler);
        }), this._removeKeydownListener(), this._removeClickOutsideListener(), this._popperInstance && this._popperInstance.destroy(), this._initialized = !1;
      }
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Tooltip", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype._setupEventListeners = function() {
      var e = this, r = this._getTriggerEvents();
      this._showHandler = function() {
        e.show();
      }, this._hideHandler = function() {
        e.hide();
      }, r.showEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._showHandler);
      }), r.hideEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._hideHandler);
      });
    }, t.prototype._createPopperInstance = function() {
      return Xr(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8]
            }
          }
        ]
      });
    }, t.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    }, t.prototype._setupKeydownListener = function() {
      var e = this;
      this._keydownEventListener = function(r) {
        r.key === "Escape" && e.hide();
      }, document.body.addEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._removeKeydownListener = function() {
      document.body.removeEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._setupClickOutsideListener = function() {
      var e = this;
      this._clickOutsideEventListener = function(r) {
        e._handleClickOutside(r, e._targetEl);
      }, document.body.addEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._handleClickOutside = function(e, r) {
      var n = e.target;
      n !== r && !r.contains(n) && !this._triggerEl.contains(n) && this.isVisible() && this.hide();
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype.toggle = function() {
      this.isVisible() ? this.hide() : this.show();
    }, t.prototype.show = function() {
      this._targetEl.classList.remove("opacity-0", "invisible"), this._targetEl.classList.add("opacity-100", "visible"), this._popperInstance.setOptions(function(e) {
        return Pe(Pe({}, e), { modifiers: Pt(Pt([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !0 }
        ], !1) });
      }), this._setupClickOutsideListener(), this._setupKeydownListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this);
    }, t.prototype.hide = function() {
      this._targetEl.classList.remove("opacity-100", "visible"), this._targetEl.classList.add("opacity-0", "invisible"), this._popperInstance.setOptions(function(e) {
        return Pe(Pe({}, e), { modifiers: Pt(Pt([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !1 }
        ], !1) });
      }), this._removeClickOutsideListener(), this._removeKeydownListener(), this._visible = !1, this._options.onHide(this);
    }, t;
  }()
);
function tn() {
  document.querySelectorAll("[data-tooltip-target]").forEach(function(t) {
    var e = t.getAttribute("data-tooltip-target"), r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-tooltip-trigger"), i = t.getAttribute("data-tooltip-placement");
      new Ti(r, t, {
        placement: i || Ft.placement,
        triggerType: n || Ft.triggerType
      });
    } else
      console.error('The tooltip element with id "'.concat(e, '" does not exist. Please check the data-tooltip-target attribute.'));
  });
}
typeof window < "u" && (window.Tooltip = Ti, window.initTooltips = tn);
var Se = function() {
  return Se = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Se.apply(this, arguments);
}, St = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, o; n < i; n++)
      (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
  return t.concat(o || Array.prototype.slice.call(e));
}, yt = {
  placement: "top",
  offset: 10,
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Ks = {
  id: null,
  override: !0
}, Li = (
  /** @class */
  function() {
    function t(e, r, n, i) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = yt), i === void 0 && (i = Ks), this._instanceId = i.id ? i.id : e.id, this._targetEl = e, this._triggerEl = r, this._options = Se(Se({}, yt), n), this._popperInstance = null, this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Popover", this, i.id ? i.id : this._targetEl.id, i.override);
    }
    return t.prototype.init = function() {
      this._triggerEl && this._targetEl && !this._initialized && (this._setupEventListeners(), this._popperInstance = this._createPopperInstance(), this._initialized = !0);
    }, t.prototype.destroy = function() {
      var e = this;
      if (this._initialized) {
        var r = this._getTriggerEvents();
        r.showEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._showHandler), e._targetEl.removeEventListener(n, e._showHandler);
        }), r.hideEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._hideHandler), e._targetEl.removeEventListener(n, e._hideHandler);
        }), this._removeKeydownListener(), this._removeClickOutsideListener(), this._popperInstance && this._popperInstance.destroy(), this._initialized = !1;
      }
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Popover", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype._setupEventListeners = function() {
      var e = this, r = this._getTriggerEvents();
      this._showHandler = function() {
        e.show();
      }, this._hideHandler = function() {
        setTimeout(function() {
          e._targetEl.matches(":hover") || e.hide();
        }, 100);
      }, r.showEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._showHandler), e._targetEl.addEventListener(n, e._showHandler);
      }), r.hideEvents.forEach(function(n) {
        e._triggerEl.addEventListener(n, e._hideHandler), e._targetEl.addEventListener(n, e._hideHandler);
      });
    }, t.prototype._createPopperInstance = function() {
      return Xr(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, this._options.offset]
            }
          }
        ]
      });
    }, t.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    }, t.prototype._setupKeydownListener = function() {
      var e = this;
      this._keydownEventListener = function(r) {
        r.key === "Escape" && e.hide();
      }, document.body.addEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._removeKeydownListener = function() {
      document.body.removeEventListener("keydown", this._keydownEventListener, !0);
    }, t.prototype._setupClickOutsideListener = function() {
      var e = this;
      this._clickOutsideEventListener = function(r) {
        e._handleClickOutside(r, e._targetEl);
      }, document.body.addEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, !0);
    }, t.prototype._handleClickOutside = function(e, r) {
      var n = e.target;
      n !== r && !r.contains(n) && !this._triggerEl.contains(n) && this.isVisible() && this.hide();
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype.toggle = function() {
      this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this);
    }, t.prototype.show = function() {
      this._targetEl.classList.remove("opacity-0", "invisible"), this._targetEl.classList.add("opacity-100", "visible"), this._popperInstance.setOptions(function(e) {
        return Se(Se({}, e), { modifiers: St(St([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !0 }
        ], !1) });
      }), this._setupClickOutsideListener(), this._setupKeydownListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this);
    }, t.prototype.hide = function() {
      this._targetEl.classList.remove("opacity-100", "visible"), this._targetEl.classList.add("opacity-0", "invisible"), this._popperInstance.setOptions(function(e) {
        return Se(Se({}, e), { modifiers: St(St([], e.modifiers, !0), [
          { name: "eventListeners", enabled: !1 }
        ], !1) });
      }), this._removeClickOutsideListener(), this._removeKeydownListener(), this._visible = !1, this._options.onHide(this);
    }, t;
  }()
);
function rn() {
  document.querySelectorAll("[data-popover-target]").forEach(function(t) {
    var e = t.getAttribute("data-popover-target"), r = document.getElementById(e);
    if (r) {
      var n = t.getAttribute("data-popover-trigger"), i = t.getAttribute("data-popover-placement"), o = t.getAttribute("data-popover-offset");
      new Li(r, t, {
        placement: i || yt.placement,
        offset: o ? parseInt(o) : yt.offset,
        triggerType: n || yt.triggerType
      });
    } else
      console.error('The popover element with id "'.concat(e, '" does not exist. Please check the data-popover-target attribute.'));
  });
}
typeof window < "u" && (window.Popover = Li, window.initPopovers = rn);
var Ut = function() {
  return Ut = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Ut.apply(this, arguments);
}, Lr = {
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
}, Xs = {
  id: null,
  override: !0
}, zi = (
  /** @class */
  function() {
    function t(e, r, n, i, o) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = null), i === void 0 && (i = Lr), o === void 0 && (o = Xs), this._instanceId = o.id ? o.id : n.id, this._parentEl = e, this._triggerEl = r, this._targetEl = n, this._options = Ut(Ut({}, Lr), i), this._visible = !1, this._initialized = !1, this.init(), X.addInstance("Dial", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      var e = this;
      if (this._triggerEl && this._targetEl && !this._initialized) {
        var r = this._getTriggerEventTypes(this._options.triggerType);
        this._showEventHandler = function() {
          e.show();
        }, r.showEvents.forEach(function(n) {
          e._triggerEl.addEventListener(n, e._showEventHandler), e._targetEl.addEventListener(n, e._showEventHandler);
        }), this._hideEventHandler = function() {
          e._parentEl.matches(":hover") || e.hide();
        }, r.hideEvents.forEach(function(n) {
          e._parentEl.addEventListener(n, e._hideEventHandler);
        }), this._initialized = !0;
      }
    }, t.prototype.destroy = function() {
      var e = this;
      if (this._initialized) {
        var r = this._getTriggerEventTypes(this._options.triggerType);
        r.showEvents.forEach(function(n) {
          e._triggerEl.removeEventListener(n, e._showEventHandler), e._targetEl.removeEventListener(n, e._showEventHandler);
        }), r.hideEvents.forEach(function(n) {
          e._parentEl.removeEventListener(n, e._hideEventHandler);
        }), this._initialized = !1;
      }
    }, t.prototype.removeInstance = function() {
      X.removeInstance("Dial", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.hide = function() {
      this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), this._visible = !1, this._options.onHide(this);
    }, t.prototype.show = function() {
      this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), this._visible = !0, this._options.onShow(this);
    }, t.prototype.toggle = function() {
      this._visible ? this.hide() : this.show();
    }, t.prototype.isHidden = function() {
      return !this._visible;
    }, t.prototype.isVisible = function() {
      return this._visible;
    }, t.prototype._getTriggerEventTypes = function(e) {
      switch (e) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    }, t;
  }()
);
function nn() {
  document.querySelectorAll("[data-dial-init]").forEach(function(t) {
    var e = t.querySelector("[data-dial-toggle]");
    if (e) {
      var r = e.getAttribute("data-dial-toggle"), n = document.getElementById(r);
      if (n) {
        var i = e.getAttribute("data-dial-trigger");
        new zi(t, e, n, {
          triggerType: i || Lr.triggerType
        });
      } else
        console.error("Dial with id ".concat(r, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"));
    } else
      console.error("Dial with id ".concat(t.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
  });
}
typeof window < "u" && (window.Dial = zi, window.initDials = nn);
var Kt = function() {
  return Kt = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, Kt.apply(this, arguments);
}, Gn = {
  minValue: null,
  maxValue: null,
  onIncrement: function() {
  },
  onDecrement: function() {
  }
}, Ys = {
  id: null,
  override: !0
}, Oi = (
  /** @class */
  function() {
    function t(e, r, n, i, o) {
      e === void 0 && (e = null), r === void 0 && (r = null), n === void 0 && (n = null), i === void 0 && (i = Gn), o === void 0 && (o = Ys), this._instanceId = o.id ? o.id : e.id, this._targetEl = e, this._incrementEl = r, this._decrementEl = n, this._options = Kt(Kt({}, Gn), i), this._initialized = !1, this.init(), X.addInstance("InputCounter", this, this._instanceId, o.override);
    }
    return t.prototype.init = function() {
      var e = this;
      this._targetEl && !this._initialized && (this._inputHandler = function(r) {
        {
          var n = r.target;
          /^\d*$/.test(n.value) || (n.value = n.value.replace(/[^\d]/g, "")), e._options.maxValue !== null && parseInt(n.value) > e._options.maxValue && (n.value = e._options.maxValue.toString()), e._options.minValue !== null && parseInt(n.value) < e._options.minValue && (n.value = e._options.minValue.toString());
        }
      }, this._incrementClickHandler = function() {
        e.increment();
      }, this._decrementClickHandler = function() {
        e.decrement();
      }, this._targetEl.addEventListener("input", this._inputHandler), this._incrementEl && this._incrementEl.addEventListener("click", this._incrementClickHandler), this._decrementEl && this._decrementEl.addEventListener("click", this._decrementClickHandler), this._initialized = !0);
    }, t.prototype.destroy = function() {
      this._targetEl && this._initialized && (this._targetEl.removeEventListener("input", this._inputHandler), this._incrementEl && this._incrementEl.removeEventListener("click", this._incrementClickHandler), this._decrementEl && this._decrementEl.removeEventListener("click", this._decrementClickHandler), this._initialized = !1);
    }, t.prototype.removeInstance = function() {
      X.removeInstance("InputCounter", this._instanceId);
    }, t.prototype.destroyAndRemoveInstance = function() {
      this.destroy(), this.removeInstance();
    }, t.prototype.getCurrentValue = function() {
      return parseInt(this._targetEl.value) || 0;
    }, t.prototype.increment = function() {
      this._options.maxValue !== null && this.getCurrentValue() >= this._options.maxValue || (this._targetEl.value = (this.getCurrentValue() + 1).toString(), this._options.onIncrement(this));
    }, t.prototype.decrement = function() {
      this._options.minValue !== null && this.getCurrentValue() <= this._options.minValue || (this._targetEl.value = (this.getCurrentValue() - 1).toString(), this._options.onDecrement(this));
    }, t;
  }()
);
function on() {
  document.querySelectorAll("[data-input-counter]").forEach(function(t) {
    var e = t.id, r = document.querySelector('[data-input-counter-increment="' + e + '"]'), n = document.querySelector('[data-input-counter-decrement="' + e + '"]'), i = t.getAttribute("data-input-counter-min"), o = t.getAttribute("data-input-counter-max");
    t ? X.instanceExists("InputCounter", t.getAttribute("id")) || new Oi(t, r || null, n || null, {
      minValue: i ? parseInt(i) : null,
      maxValue: o ? parseInt(o) : null
    }) : console.error('The target element with id "'.concat(e, '" does not exist. Please check the data-input-counter attribute.'));
  });
}
typeof window < "u" && (window.InputCounter = Oi, window.initInputCounters = on);
function Js() {
  Dr(), Hr(), $r(), Br(), Jr(), Zr(), Qr(), en(), tn(), rn(), nn(), on();
}
typeof window < "u" && (window.initFlowbite = Js);
var Zs = new Pa("load", [
  Dr,
  Hr,
  $r,
  Br,
  Jr,
  Zr,
  Qr,
  en,
  tn,
  rn,
  nn,
  on
]);
Zs.init();
const Qs = {
  accordion: null,
  options: {
    alwaysOpen: !1,
    activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    inactiveClasses: "text-gray-500 dark:text-gray-400"
  },
  oncreate({ state: t, attrs: e, children: r }) {
    const { id: n = "accordion", collapseAll: i = !1, flush: o = !1 } = e;
    e.alwaysOpen && (t.options.alwaysOpen = e.alwaysOpen);
    const a = [];
    r.map((s, c) => {
      const f = s.children[0], p = s.children[1];
      f.state.isOpen = s.state.isOpen, f.state.flush = o, f.dom.id = `${n}-heading-${c}`, p.dom.id = `${n}-body-${c}`, i ? p.dom.className = I(p.dom.className, "hidden") : s.state.isOpen || (p.dom.className = I(p.dom.className, "hidden")), a.push({
        id: `${n}-heading-${c}`,
        triggerEl: f.dom,
        targetEl: p.dom,
        active: i ? !1 : s.state.isOpen
      });
    }), h.redraw(), t.accordion = new Nr(n, a, t.options);
  },
  view({ attrs: t, children: e }) {
    const {
      class: r,
      id: n = "accordion",
      alwaysOpen: i = !1,
      flush: o = !1,
      theme: a = {},
      ...s
    } = t, c = P(Jt.root, a), f = el(s);
    return h(
      "div",
      {
        id: n,
        class: I(c.base, c.flush[o ? "on" : "off"], r),
        "data-accordion": i ? "open" : "collapse",
        ...f
      },
      e
    );
  }
}, el = Rr(["collapseAll"]), Nl = Object.assign(Qs, {
  Panel: ea,
  Title: Oa,
  Content: Qo
}), Pi = {
  base: "flex flex-col gap-2 p-4 text-sm",
  borderAccent: "border-t-4",
  closeButton: {
    base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "w-4 h-4",
    color: {
      blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      info: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300"
    }
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
    yellow: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800"
  },
  icon: "mr-3 inline h-5 w-5 flex-shrink-0",
  rounded: "rounded-lg",
  wrapper: "flex items-center"
}, Dl = {
  view({ attrs: t, children: e }) {
    const {
      additionalContent: r,
      class: n,
      color: i = "info",
      // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      icon: o,
      onDismiss: a,
      rounded: s = !1,
      theme: c = {},
      withBorderAccent: f = !1,
      ...p
    } = t, g = P(Pi, c);
    return h(
      "div",
      {
        class: I(
          g.base,
          g.color[i],
          s && g.rounded,
          f && g.borderAccent,
          n
        ),
        role: "alert",
        ...p
      },
      h("div", { class: g.wrapper }, [
        o && h(o, { class: g.icon }),
        h("div", e),
        typeof a == "function" && h(
          "button",
          {
            "aria-label": "Dismiss",
            class: I(g.closeButton.base, g.closeButton.color[i]),
            onclick: a,
            type: "button"
          },
          h(za, { "aria-hidden": !0, class: g.closeButton.icon })
        )
      ]),
      r && h("div", r)
    );
  }
}, Qt = {
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
      warning: "ring-yellow-300 dark:ring-yellow-500"
    },
    img: {
      base: "rounded",
      off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      on: "",
      placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1"
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    },
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
      "center-left": "center -left-1"
    },
    status: {
      away: "bg-yellow-400",
      base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      busy: "bg-red-400",
      offline: "bg-gray-400",
      online: "bg-green-400"
    },
    initials: {
      text: "font-medium text-gray-600 dark:text-gray-300",
      base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600"
    }
  },
  group: {
    base: "flex -space-x-4"
  },
  groupCounter: {
    base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
  }
}, tl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Qt.group, n);
    return h("div", { class: I(o.base, r), ...i }, e);
  }
}, rl = {
  view({ attrs: t }) {
    const { class: e, href: r, total: n, theme: i = {}, ...o } = t, a = P(Qt.groupCounter, i);
    return h(h.route.Link, { href: r, class: I(a.base, e), ...o }, `+${n}`);
  }
}, nl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      alt: n = "",
      bordered: i = !1,
      color: o = "light",
      // "dark" | "failure" | "gray" | "info" | "light" | "pink" | "purple" | "success" | "warning"
      img: a,
      initials: s = "",
      rounded: c = !1,
      size: f = "md",
      // "xs" | "sm" | "md" | "lg" | "xl"
      stacked: p = !1,
      status: g,
      // "away" | "busy" | "offline" | "online"
      statusPosition: v = "top-left",
      // "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right" | "top-left" | "center-right" | "center" | "center-left"
      theme: w = {},
      ...k
    } = t, b = P(Qt, w), x = I(
      b.root.img.base,
      i && b.root.bordered,
      i && b.root.color[o],
      c && b.root.rounded,
      p && b.root.stacked,
      b.root.img.on,
      b.root.size[f]
    ), A = {
      class: I(x, b.root.img.on)
    };
    return h(
      "div",
      { class: I(b.root.base, r), ...k },
      h("div", { class: "relative" }, [
        a ? typeof a == "string" ? h("img", { alt: n, src: a, ...A }) : h(a, { alt: n, ...A }) : s ? h(
          "div",
          {
            class: I(
              b.root.img.off,
              b.root.initials.base,
              p && b.root.stacked,
              i && b.root.bordered,
              i && b.root.color[o],
              b.root.size[f],
              c && b.root.rounded
            )
          },
          h("span", { class: I(b.root.initials.text) }, s)
        ) : h(
          "div",
          { class: I(x, b.root.img.off) },
          h(
            "svg",
            {
              class: b.root.img.placeholder,
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg"
            },
            h("path", {
              fillRule: "evenodd",
              d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
              clipRule: "evenodd"
            })
          )
        ),
        g && h("span", {
          class: I(
            b.root.status.base,
            b.root.status[g],
            b.root.statusPosition[v]
          )
        })
      ]),
      e.length > 0 && h("div", e)
    );
  }
}, Hl = Object.assign(nl, {
  Group: tl,
  Counter: rl
}), Si = {
  root: {
    base: "flex h-fit items-center font-semibold",
    color: {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
      failure: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
      green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
      info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      light: "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
      lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
      pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
      red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      success: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
      warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
      yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300"
    },
    href: "group",
    size: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm"
    }
  },
  icon: {
    off: "rounded px-2 py-0.5",
    on: "rounded-full p-1.5",
    size: {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5"
    }
  }
}, $l = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "info",
      // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      href: i,
      icon: o,
      size: a = "xs",
      // "xs" | "sm"
      theme: s = {},
      ...c
    } = t, f = P(Si, s), p = {
      view: () => h(
        "span",
        {
          class: I(
            f.root.base,
            f.root.color[n],
            f.root.size[a],
            f.icon[o ? "on" : "off"],
            o && e.length > 0 ? "gap-1" : "",
            r
          ),
          ...c
        },
        [
          o && h(o, { "aria-hidden": !0, class: f.icon.size[a] }),
          e.length > 0 && h("span", e)
        ]
      )
    };
    return i ? h(h.route.Link, { class: f.root.href, href: i }, h(p)) : h(p);
  }
}, ji = {
  root: {
    base: "text-xl italic font-semibold text-gray-900 dark:text-white"
  }
}, Bl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(ji, n);
    return h("blockquote", { class: I(o.root.base, r), ...i }, e);
  }
}, an = {
  root: {
    base: "",
    list: "flex items-center"
  },
  item: {
    base: "group flex items-center",
    chevron: "mx-1 h-3 w-3 text-gray-400 group-first:hidden md:mx-2",
    href: {
      off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
      on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    icon: "mr-2 h-3 w-3"
  }
}, il = {
  view({ attrs: t, children: e }) {
    const { class: r, href: n, icon: i, theme: o = {}, ...a } = t, s = typeof n < "u", c = s ? "a" : "span", f = P(an.item, o);
    return h("li", { class: I(f.base, r), ...a }, [
      h(pi, { "aria-hidden": !0, class: f.chevron }),
      h(c, { class: f.href[s ? "on" : "off"], href: n }, [
        i && h(i, { "aria-hidden": !0, class: f.icon }),
        e
      ])
    ]);
  }
}, ol = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(an.root, n);
    return h(
      "nav",
      { "aria-label": "Breadcrumb", class: I(o.base, r), ...i },
      h("ol", { class: o.list }, e)
    );
  }
}, ql = Object.assign(ol, { Item: il }), Ri = {
  base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
  fullSized: "w-full",
  color: {
    blue: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    cyan: "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
    dark: "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
    failure: "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
    gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 :ring-gray-700 focus:text-gray-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
    green: "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
    indigo: "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
    info: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:enabled:hover:bg-blue-700 dark:focus:ring-blue-800",
    light: "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
    lime: "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
    pink: "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
    purple: "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
    red: "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
    success: "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
    teal: "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
    warning: "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    yellow: "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700"
  },
  disabled: "cursor-not-allowed opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6"
  },
  gradient: {
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    failure: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
    info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
    success: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
  },
  gradientDuoTone: {
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
  },
  inner: {
    base: "flex items-stretch items-center transition-all duration-200",
    position: {
      none: "",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none"
    },
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20"
    }
  },
  label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  outline: {
    color: {
      default: "border-0",
      gray: "border border-gray-900 dark:border-white",
      light: ""
    },
    off: "",
    on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
    pill: {
      off: "rounded-md",
      on: "rounded-full"
    }
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full"
  },
  size: {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3"
  }
}, sn = {
  base: "inline-flex",
  position: {
    none: "focus:ring-2",
    start: "rounded-r-none",
    middle: "rounded-none border-l-0 pl-0",
    end: "rounded-l-none border-l-0 pl-0"
  }
}, al = {
  view({ attrs: t, children: e }) {
    const { class: r, outline: n, pill: i, theme: o = {}, ...a } = t, s = P(sn, o);
    return h(
      "div",
      {
        class: I(s.base, r),
        role: "group",
        ...a
      },
      e.map((c, f) => (c.attrs.positionInGroup = f === 0 ? "start" : f === e.length - 1 ? "end" : "middle", c.attrs.outline = n, c.attrs.pill = i, c))
    );
  }
}, Mi = {
  base: "inline animate-spin text-gray-200",
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-blue-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400"
  },
  light: {
    off: {
      base: "dark:text-gray-600",
      color: {
        failure: "",
        gray: "dark:fill-gray-300",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    },
    on: {
      base: "",
      color: {
        failure: "",
        gray: "",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    }
  },
  size: {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10"
  }
}, sl = {
  view({ attrs: t }) {
    const {
      class: e,
      color: r = "info",
      // "failure" | "gray" | "info" | "pink" | "purple" | "success" | "warning"
      light: n,
      size: i = "md",
      // "xs" | "sm" | "md" | "lg" | "xl"
      theme: o = {},
      ...a
    } = t, s = P(Mi, o);
    return h(
      "span",
      {
        role: "status",
        ...a
      },
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
            e
          )
        },
        [
          h("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }),
          h("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          })
        ]
      )
    );
  }
}, ll = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "info",
      // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      disabled: i = !1,
      fullSized: o,
      isProcessing: a = !1,
      processingLabel: s = "Loading...",
      processingSpinner: c,
      gradientDuoTone: f,
      // "cyanToBlue" | "greenToBlue" | "pinkToOrange" | "purpleToBlue" | "purpleToPink" | "redToYellow" | "tealToLime"
      gradientMonochrome: p,
      // "cyan" | "failure" | "info" | "lime" | "pink" | "purple" | "success" | "teal"
      label: g,
      outline: v = !1,
      pill: w = !1,
      positionInGroup: k = "none",
      // "none" | "start" | "middle" | "end"
      size: b = "md",
      // "xs" | "sm" | "md" | "lg" | "xl"
      theme: x = {},
      ...A
    } = t, _ = P(Ri, x);
    return h(
      "button",
      {
        type: "button",
        disabled: i,
        class: I(
          _.base,
          i && _.disabled,
          !f && !p && _.color[n],
          f && !p && _.gradientDuoTone[f],
          !f && p && _.gradient[p],
          v && (_.outline.color[n] ?? _.outline.color.default),
          _.pill[w ? "on" : "off"],
          o && _.fullSized,
          sn.position[k],
          r
        ),
        ...A
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
              _.inner.position[k]
            )
          },
          a && h(
            "span",
            {
              class: I(_.spinnerSlot, _.spinnerLeftPosition[b])
            },
            c || h(sl, { size: b })
          ),
          e.length > 0 ? e : h(
            "span",
            {
              class: I(_.label)
            },
            a ? s : g
          )
        )
      ]
    );
  }
}, cl = Object.assign(ll, {
  Group: al
}), ln = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row"
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
}, Gl = {
  view({ attrs: t, children: e }) {
    const { class: r, horizontal: n, href: i, theme: o = {}, ...a } = t, s = typeof i > "u" ? "div" : "a", c = ul(a);
    n && (a.horizontal = n);
    const f = P(ln, o);
    return h(
      s,
      {
        href: i,
        class: I(
          f.root.base,
          f.root.horizontal[n ? "on" : "off"],
          i && f.root.href,
          r
        ),
        ...c
      },
      [h(dl, { ...a }), h("div", { class: f.root.children }, e)]
    );
  }
}, dl = {
  view({ attrs: t }) {
    const { horizontal: e, imgAlt: r, imgSrc: n, theme: i = {} } = t, o = P(ln, i);
    return n ? h("img", {
      alt: r ?? "",
      src: n,
      class: I(o.img.base, o.img.horizontal[e ? "on" : "off"])
    }) : null;
  }
}, ul = Rr(["class", "horizontal", "href", "imgSrc", "imgAlt", "theme"]), Ni = {
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
      yellow: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400"
    }
  }
}, Vl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "default",
      // "blue" | "cyan" | "dark" | "default" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      theme: i = {},
      ...o
    } = t, a = P(Ni, i);
    return h(
      "input",
      { type: "checkbox", class: I(a.root.base, a.root.color[n], r), ...o },
      e
    );
  }
}, It = {
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
      icon: "mr-2 h-4 w-4"
    }
  },
  inlineWrapper: "flex items-center"
}, fl = {
  isActive: !1,
  view({ attrs: t, children: e, state: r }) {
    const { class: n, icon: i, theme: o = {}, ...a } = t, s = P(It.floating.item, o), c = () => r.isActive = !r.isActive;
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
          ...a
        },
        [i && h(i, { class: s.icon }), e]
      )
    );
  }
}, Di = {
  view({ attrs: t }) {
    const { class: e, ...r } = t;
    return h("div", { class: I(It.floating.divider, e), ...r });
  }
}, pl = {
  view({ attrs: t, children: e }) {
    const { class: r, ...n } = t;
    return [
      h("div", { class: I(It.floating.header, r), ...n }, e),
      h(Di)
    ];
  }
}, gl = {
  menuId: "dropdownMenu",
  buttonId: "dropdownButton",
  dropdown: null,
  options: {
    placement: "bottom",
    triggerType: "click",
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: !1
  },
  oninit({ attrs: t, state: e }) {
    t.id && (e.menuId = `${t.id}Menu`, e.buttonId = `${t.id}Button`), t.placement && (e.options.placement = t.placement), t.trigger && (e.options.triggerType = t.trigger), t.offsetSkidding && (e.options.offsetSkidding = t.offsetSkidding), t.offsetDistance && (e.options.offsetDistance = t.offsetDistance), t.delay && (e.options.delay = t.delay), t.ignoreClickOutsideClass && (e.options.ignoreClickOutsideClass = t.ignoreClickOutsideClass);
  },
  oncreate({ state: t }) {
    const e = document.getElementById(t.menuId), r = document.getElementById(t.buttonId);
    t.dropdown = new Yr(e, r, t.options);
  },
  view({ attrs: t, children: e, state: r }) {
    const {
      class: n,
      arrowIcon: i = !0,
      dismissOnClick: o = !0,
      inline: a,
      label: s,
      size: c = "md",
      // "sm" | "md" | "lg"
      theme: f = {},
      ...p
    } = t, g = hl(p), v = P(It, f);
    let w = fi;
    return r.options.placement.startsWith("right") ? w = pi : r.options.placement.startsWith("left") ? w = Ta : r.options.placement.startsWith("top") && (w = La), [
      a ? h("button", { id: r.buttonId, type: "button", class: v.inlineWrapper }, s) : h(
        cl,
        {
          id: r.buttonId,
          type: "button",
          size: c,
          "data-dropdown-placement": r.options.placement,
          "data-dropdown-toggle": r.menuId,
          onclick: () => {
            r.dropdown.toggle();
          }
        },
        [s, i && h(w, { class: v.arrowIcon })]
      ),
      h(
        "div",
        {
          id: r.menuId,
          class: I(v.floating.base, v.floating.animation, "duration-100", n),
          ...g
        },
        h("ul", { class: v.content, tabIndex: -1 }, e)
      )
    ];
  }
}, hl = Rr([
  "id",
  "placement",
  "trigger",
  "offsetSkidding",
  "offsetDistance",
  "delay",
  "ignoreClickOutsideClass"
]), Wl = Object.assign(gl, {
  Item: fl,
  Header: pl,
  Divider: Di
}), Hi = {
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "sm:text-xs",
        md: "text-sm",
        lg: "sm:text-md"
      },
      colors: {
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      }
    }
  }
}, $i = {
  root: {
    base: "mt-2 text-sm",
    colors: {
      failure: "text-red-600 dark:text-red-500",
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-blue-700 dark:text-blue-800",
      success: "text-green-600 dark:text-green-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
}, er = {
  view({ attrs: t, children: e }) {
    const { class: r, color: n = "default", theme: i = {}, value: o, ...a } = t, s = P($i, i);
    return h(
      "p",
      { class: I(s.root.base, s.root.colors[n], r), ...a },
      o ?? e ?? ""
    );
  }
}, Fl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "gray",
      // "failure" | "gray" | "info" | "success" | "warning"
      helperText: i,
      size: o = "md",
      // "sm" | "md" | "lg"
      theme: a = {},
      ...s
    } = t, c = P(Hi, a);
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
            ...s
          })
        )
      ),
      i && h(er, { color: n }, i)
    ];
  }
}, Ce = {
  root: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800"
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "last:mr-0 md:mr-6",
      href: "hover:underline"
    },
    col: "flex-col space-y-4"
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5"
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  divider: {
    base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1"
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
}, bl = {
  view({ attrs: t, children: e }) {
    const { alt: r, class: n, href: i, name: o, src: a, theme: s = {}, ...c } = t, f = P(Ce.brand, s);
    return h(
      "div",
      i ? h("a", { href: i, class: I(f.base, n), ...c }, [
        h("img", { alt: r, src: a, class: f.img }),
        h("span", { class: f.span }, o),
        e
      ]) : h("img", { alt: r, src: a, class: I(f.img, n), ...c })
    );
  }
}, ml = {
  view({ attrs: t }) {
    const { by: e, class: r, href: n, theme: i = {}, year: o, ...a } = t, s = P(Ce.copyright, i);
    return h("div", { class: I(s.base, r), ...a }, [
      `© ${o}`,
      n ? h("a", { href: n, class: s.href }, e) : h("span", { class: s.span }, e)
    ]);
  }
}, vl = {
  view({ attrs: t }) {
    const { class: e, theme: r = {}, ...n } = t, i = P(Ce.divider, r);
    return h("hr", { class: I(i.base, e), ...n });
  }
}, yl = {
  view({ attrs: t }) {
    const { ariaLabel: e, class: r, href: n, icon: i, theme: o = {}, ...a } = t, s = P(Ce.footer.icon, o);
    return h(
      "div",
      n ? h(
        "a",
        { "aria-label": e, href: n, class: I(s.base, r), ...a },
        h(i, { class: s.size })
      ) : h(i, { class: s.size, ...a })
    );
  }
}, wl = {
  view({ attrs: t, children: e }) {
    const { as: r = "a", class: n, href: i, theme: o = {}, ...a } = t, s = P(Ce.groupLink.link, o);
    return h(
      "li",
      { class: I(s.base, n) },
      h(r, { href: i, class: s.href, ...a }, e)
    );
  }
}, xl = {
  view({ attrs: t, children: e }) {
    const { class: r, col: n = !1, theme: i = {}, ...o } = t, a = P(Ce.groupLink, i);
    return h("ul", { class: I(a.base, n && a.col, r), ...o }, e);
  }
}, kl = {
  view({ attrs: t }) {
    const { as: e = "h2", class: r, theme: n = {}, title: i, ...o } = t, a = P(Ce.title, n);
    return h(e, { class: I(a.base, r), ...o }, i);
  }
}, _l = {
  view({ attrs: t, children: e }) {
    const { bgDark: r = !1, class: n, container: i = !1, theme: o = {}, ...a } = t, s = P(Ce, o);
    return h(
      "footer",
      {
        class: I(s.root.base, r && s.root.bgDark, i && s.root.container, n),
        ...a
      },
      e
    );
  }
}, Ul = Object.assign(_l, {
  Brand: bl,
  Copyright: ml,
  Divider: vl,
  Icon: yl,
  Link: wl,
  LinkGroup: xl,
  Title: kl
}), Bi = {
  root: {
    base: "px-2 py-1.5 mr-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
    icon: "inline-block"
  }
}, Kl = {
  view({ attrs: t, children: e }) {
    const { class: r, icon: n, theme: i = {}, ...o } = t, a = P(Bi, i);
    return h("span", { class: I(a.root.base, r), ...o }, [
      n && h(n, { class: a.root.icon }),
      e
    ]);
  }
}, qi = {
  root: {
    base: "text-sm font-medium",
    disabled: "opacity-50",
    colors: {
      default: "text-gray-900 dark:text-white",
      failure: "text-red-700 dark:text-red-500",
      info: "text-blue-500 dark:text-blue-600",
      success: "text-green-700 dark:text-green-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
}, Xl = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "default",
      // "default" | "failure" | "info" | "success" | "warning
      disabled: i = !1,
      value: o,
      theme: a = {},
      ...s
    } = t, c = P(qi, a);
    return h(
      "label",
      {
        class: I(c.root.base, c.root.colors[n], i && c.root.disabled, r),
        ...s
      },
      e ?? e ?? ""
    );
  }
}, cn = {
  root: {
    base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left"
  },
  item: {
    base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
    link: {
      base: "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
      active: {
        off: "hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        on: "bg-blue-700 text-white dark:bg-gray-800"
      },
      disabled: {
        off: "",
        on: "hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed"
      },
      href: {
        off: "",
        on: ""
      },
      icon: "mr-2 h-4 w-4"
    }
  }
}, El = {
  view({ attrs: t, children: e }) {
    const { active: r, class: n, href: i, icon: o, disabled: a, theme: s = {}, ...c } = t, f = P(cn.item, s), p = typeof i < "u", g = p ? "a" : "button";
    return console.log("DISA", a), h("li", { class: I(f.base, n) }, [
      h(
        g,
        {
          href: i,
          type: p ? void 0 : "button",
          disabled: a,
          class: I(
            f.link.active[r ? "on" : "off"],
            f.link.disabled[a ? "on" : "off"],
            f.link.base,
            f.link.href[p ? "on" : "off"]
          ),
          ...c
        },
        [o && h(o, { "aria-hidden": !0, class: f.link.icon }), e]
      )
    ]);
  }
}, Il = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(cn, n);
    return h("ul", { class: I(o.root.base, r), ...i }, e);
  }
}, Yl = Object.assign(Il, { Item: El }), Fe = {
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    }
  },
  brand: {
    base: "flex items-center"
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: ""
    }
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
      on: "bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",
      off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: ""
    }
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0"
  }
}, Cl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Fe.brand, n);
    return h(h.route.Link, { class: I(o.base, r), ...i }, e);
  }
}, Al = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Fe.collapse, n);
    return h("div", { class: I(o.base, r), ...i }, h("ul", { class: o.list }, e));
  }
};
Fe.link;
const Tl = {
  view({ attrs: t, children: e }) {
    const { class: r, active: n, disabled: i, theme: o = {}, ...a } = t, s = P(Fe.link, o);
    return h(
      "li",
      h(
        h.route.Link,
        {
          class: I(
            s.base,
            n && s.active.on,
            !n && !i && s.active.off,
            s.disabled[i ? "on" : "off"],
            r
          ),
          ...a
        },
        e
      )
    );
  }
}, Ll = {
  view({ attrs: t }) {
    const { class: e, theme: r = {}, ...n } = t, i = P(Fe.toggle, r);
    return h(
      "button",
      { class: I(i.base, e), ...n },
      h("span", { class: "sr-only" }, "Open main menu")
    );
  }
}, zl = {
  view({ attrs: t, children: e }) {
    const { class: r, bordered: n, rounded: i, fluid: o = !1, theme: a = {}, ...s } = t, c = P(Fe.root, a);
    return h(
      "nav",
      {
        class: I(
          c.base,
          c.bordered[n ? "on" : "off"],
          c.rounded[i ? "on" : "off"],
          r
        ),
        ...s
      },
      h(
        "div",
        {
          class: I(c.inner.base, c.inner.fluid[o ? "on" : "off"])
        },
        e
      )
    );
  }
}, Jl = Object.assign(zl, {
  Brand: Cl,
  Collapse: Al,
  Link: Tl,
  Toggle: Ll
}), Gi = {
  root: {
    base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600 text-blue-600"
  }
}, Zl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Gi, n);
    return h("input", { type: "radio", class: I(o.root.base, r), ...i }, e);
  }
}, Vi = {
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
      sizes: {
        sm: "h-1 range-sm",
        md: "h-2",
        lg: "h-3 range-lg"
      }
    }
  }
}, Ql = {
  view({ attrs: t }) {
    const {
      class: e,
      size: r = "md",
      // "sm" | "md" | "lg"
      theme: n = {},
      ...i
    } = t, o = P(Vi, n);
    return h(
      "div",
      { class: I(o.root.base, e) },
      h(
        "div",
        { class: o.field.base },
        h("input", { type: "range", class: I(o.field.input.base, o.field.input.sizes[r]), ...i })
      )
    );
  }
}, Wi = {
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    select: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      },
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4"
      },
      colors: {
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      }
    }
  }
}, ec = {
  view({ attrs: t, children: e }) {
    const {
      addon: r,
      class: n,
      color: i = "gray",
      // "failure" | "gray" | "info" | "success" | "warning"
      helperText: o,
      icon: a,
      shadow: s,
      size: c = "md",
      // "sm" | "md" | "lg"
      theme: f = {},
      ...p
    } = t, g = P(Wi, f);
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
              g.field.select.withShadow[s ? "on" : "off"]
            ),
            ...p
          },
          e
        ),
        o && h(er, { color: i }, o)
      ])
    ]);
  }
}, Ue = {
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    shadow: "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
    wrapper: "relative"
  },
  body: {
    base: "group/body",
    cell: {
      base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4"
    }
  },
  head: {
    base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
    cell: {
      base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3"
    }
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
  }
}, Ol = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Ue.head, n);
    return h("thead", { class: I(o.base, r), ...i }, h("tr", e));
  }
}, Pl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Ue.body, n);
    return h("tbody", { class: I(o.base, r), ...i }, e);
  }
}, Sl = {
  view({ attrs: t, children: e }) {
    const { class: r, hoverable: n, striped: i, theme: o = {}, ...a } = t, s = P(Ue.row, o);
    return h(
      "tr",
      { class: I(s.base, i && s.striped, n && s.hovered, r), ...a },
      e
    );
  }
}, jl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Ue.body.cell, n);
    return h("td", { class: I(o.base, r), ...i }, e);
  }
}, Rl = {
  view({ attrs: t, children: e }) {
    const { class: r, theme: n = {}, ...i } = t, o = P(Ue.head, n);
    return h("th", { class: I(o.cell.base, r), ...i }, e);
  }
}, Ml = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      // TODO: implement these
      // hoverable,
      // striped,
      theme: n = {},
      ...i
    } = t, o = P(Ue.root, n);
    return h("div", { class: I(o.wrapper) }, [
      h("div", { class: I(o.shadow, r) }),
      h("table", { class: I(o.base, r), ...i }, e)
    ]);
  }
}, tc = Object.assign(Ml, {
  Head: Ol,
  Body: Pl,
  Row: Sl,
  Cell: jl,
  HeadCell: Rl
}), Fi = {
  base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
  colors: {
    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
  },
  withShadow: {
    on: "shadow-sm dark:shadow-sm-light",
    off: ""
  }
}, rc = {
  view({ attrs: t, children: e }) {
    const {
      class: r,
      color: n = "gray",
      // "failure" | "gray" | "info" | "success" | "warning"
      helperText: i,
      shadow: o,
      theme: a = {},
      ...s
    } = t, c = P(Fi, a);
    return [
      h(
        "textarea",
        {
          class: I(c.base, c.colors[n], c.withShadow[o ? "on" : "off"], r),
          ...s
        },
        e
      ),
      i && h(er, { color: n }, i)
    ];
  }
}, Ui = {
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4"
      },
      colors: {
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500"
      },
      withRightIcon: {
        on: "pr-10",
        off: ""
      },
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      }
    }
  }
}, nc = {
  view({ attrs: t }) {
    const {
      addon: e,
      class: r,
      color: n = "gray",
      // "failure" | "gray" | "info" | "success" | "warning"
      helperText: i,
      icon: o,
      rightIcon: a,
      shadow: s,
      sizing: c = "md",
      // "sm" | "md" | "lg"
      theme: f = {},
      ...p
    } = t, g = P(Ui, f);
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
              g.field.input.withShadow[s ? "on" : "off"]
            ),
            ...p
          })
        ])
      ]),
      i && h(er, { color: n }, i)
    ];
  }
}, Ki = {
  root: {
    base: "group relative flex items-center rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50"
    },
    label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
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
        yellow: "bg-yellow-400 border-yellow-400"
      }
    },
    sizes: {
      sm: "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
      md: "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
      lg: "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6"
    }
  }
}, ic = {
  toggled: !1,
  oninit({ attrs: t, state: e }) {
    e.toggled = t.checked;
  },
  view({ attrs: t, state: e }) {
    const {
      id: r,
      class: n,
      color: i = "blue",
      // "blue" | "cyan" | "dark" | "failure" | "gray" | "green" | "indigo" | "info" | "light" | "lime" | "pink" | "purple" | "red" | "success" | "teal" | "warning" | "yellow"
      size: o = "md",
      // "sm" | "md" | "lg"
      disabled: a,
      label: s,
      name: c,
      theme: f = {},
      ...p
    } = t, g = P(Ki, f), v = () => e.toggled = !e.toggled, w = () => {
      a || v();
    }, k = (b) => {
      b.code === "Enter" && b.preventDefault();
    };
    return [
      c && e.toggled ? h("input", {
        checked: e.toggled,
        hidden: !0,
        name: c,
        readOnly: !0,
        type: "checkbox",
        class: "sr-only"
      }) : null,
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
          ...p
        },
        h("div", {
          class: I(
            g.toggle.base,
            g.toggle.checked[e.toggled ? "on" : "off"],
            e.toggled && g.toggle.checked.color[i],
            g.toggle.sizes[o]
          )
        }),
        s != null && s.length ? h(
          "span",
          {
            id: `${r}-flowbite-toggleswitch-label`,
            class: g.root.label
          },
          s
        ) : null
      )
    ];
  }
}, oc = {
  accordion: Jt,
  avatar: Qt,
  alert: Pi,
  badge: Si,
  blockquote: ji,
  breadcrumb: an,
  button: Ri,
  buttonGroup: sn,
  card: ln,
  checkbox: Ni,
  dropdown: It,
  fileInput: Hi,
  footer: Ce,
  helperText: $i,
  kbd: Bi,
  label: qi,
  listGroup: cn,
  navbar: Fe,
  radio: Gi,
  range: Vi,
  select: Wi,
  spinner: Mi,
  table: Ue,
  textarea: Fi,
  textInput: Ui,
  toggle: Ki
};
export {
  Nl as Accordion,
  Qs as AccordionComponent,
  Dl as Alert,
  Hl as Avatar,
  nl as AvatarComponent,
  $l as Badge,
  Bl as Blockquote,
  ql as Breadcrumb,
  ol as BreadcrumbComponent,
  cl as Button,
  ll as ButtonComponent,
  Gl as Card,
  Vl as Checkbox,
  Wl as Dropdown,
  gl as DropdownComponent,
  Fl as FileInput,
  Ul as Footer,
  _l as FooterComponent,
  er as HelperText,
  Kl as Kbd,
  Xl as Label,
  Yl as ListGroup,
  Il as ListGroupComponent,
  Jl as Navbar,
  zl as NavbarComponent,
  Zl as Radio,
  Ql as Range,
  ec as Select,
  sl as Spinner,
  tc as Table,
  nc as TextInput,
  rc as Textarea,
  ic as Toggle,
  oc as theme
};
