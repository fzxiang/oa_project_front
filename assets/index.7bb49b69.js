var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as _export_sfc, B as withInstall } from "./index.e7b2878b.js";
import { bY as commonjsGlobal, cD as getDefaultExportFromCjs, d as defineComponent, Q as ref, w as watch, O as computed, b as unref, ao as onBeforeUnmount, cH as onDeactivated, a7 as nextTick, o as openBlock, R as createElementBlock, X as normalizeClass } from "./vendor.faf2de98.js";
import { u as useLocale } from "./index.69692b74.js";
import { u as useModalContext } from "./index.c1e8e80f.js";
import { a as useRootSetting } from "./useRootSetting.63072823.js";
import { o as onMountedOrActivated } from "./index.dfbcda7d.js";
var index_min = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return (() => {
      var e = { 694: (e2) => {
        var t2 = function() {
          this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
        }, n2 = -1;
        t2.Diff = function(e3, t3) {
          return [e3, t3];
        }, t2.prototype.diff_main = function(e3, n3, r2, i) {
          i === void 0 && (i = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : new Date().getTime() + 1e3 * this.Diff_Timeout);
          var o = i;
          if (e3 == null || n3 == null)
            throw new Error("Null input. (diff_main)");
          if (e3 == n3)
            return e3 ? [new t2.Diff(0, e3)] : [];
          r2 === void 0 && (r2 = true);
          var a = r2, l = this.diff_commonPrefix(e3, n3), s = e3.substring(0, l);
          e3 = e3.substring(l), n3 = n3.substring(l), l = this.diff_commonSuffix(e3, n3);
          var d = e3.substring(e3.length - l);
          e3 = e3.substring(0, e3.length - l), n3 = n3.substring(0, n3.length - l);
          var c = this.diff_compute_(e3, n3, a, o);
          return s && c.unshift(new t2.Diff(0, s)), d && c.push(new t2.Diff(0, d)), this.diff_cleanupMerge(c), c;
        }, t2.prototype.diff_compute_ = function(e3, r2, i, o) {
          var a;
          if (!e3)
            return [new t2.Diff(1, r2)];
          if (!r2)
            return [new t2.Diff(n2, e3)];
          var l = e3.length > r2.length ? e3 : r2, s = e3.length > r2.length ? r2 : e3, d = l.indexOf(s);
          if (d != -1)
            return a = [new t2.Diff(1, l.substring(0, d)), new t2.Diff(0, s), new t2.Diff(1, l.substring(d + s.length))], e3.length > r2.length && (a[0][0] = a[2][0] = n2), a;
          if (s.length == 1)
            return [new t2.Diff(n2, e3), new t2.Diff(1, r2)];
          var c = this.diff_halfMatch_(e3, r2);
          if (c) {
            var u = c[0], p = c[1], m = c[2], f = c[3], h = c[4], v = this.diff_main(u, m, i, o), g = this.diff_main(p, f, i, o);
            return v.concat([new t2.Diff(0, h)], g);
          }
          return i && e3.length > 100 && r2.length > 100 ? this.diff_lineMode_(e3, r2, o) : this.diff_bisect_(e3, r2, o);
        }, t2.prototype.diff_lineMode_ = function(e3, r2, i) {
          var o = this.diff_linesToChars_(e3, r2);
          e3 = o.chars1, r2 = o.chars2;
          var a = o.lineArray, l = this.diff_main(e3, r2, false, i);
          this.diff_charsToLines_(l, a), this.diff_cleanupSemantic(l), l.push(new t2.Diff(0, ""));
          for (var s = 0, d = 0, c = 0, u = "", p = ""; s < l.length; ) {
            switch (l[s][0]) {
              case 1:
                c++, p += l[s][1];
                break;
              case n2:
                d++, u += l[s][1];
                break;
              case 0:
                if (d >= 1 && c >= 1) {
                  l.splice(s - d - c, d + c), s = s - d - c;
                  for (var m = this.diff_main(u, p, false, i), f = m.length - 1; f >= 0; f--)
                    l.splice(s, 0, m[f]);
                  s += m.length;
                }
                c = 0, d = 0, u = "", p = "";
            }
            s++;
          }
          return l.pop(), l;
        }, t2.prototype.diff_bisect_ = function(e3, r2, i) {
          for (var o = e3.length, a = r2.length, l = Math.ceil((o + a) / 2), s = l, d = 2 * l, c = new Array(d), u = new Array(d), p = 0; p < d; p++)
            c[p] = -1, u[p] = -1;
          c[s + 1] = 0, u[s + 1] = 0;
          for (var m = o - a, f = m % 2 != 0, h = 0, v = 0, g = 0, y = 0, b = 0; b < l && !(new Date().getTime() > i); b++) {
            for (var w = -b + h; w <= b - v; w += 2) {
              for (var E = s + w, k = (M = w == -b || w != b && c[E - 1] < c[E + 1] ? c[E + 1] : c[E - 1] + 1) - w; M < o && k < a && e3.charAt(M) == r2.charAt(k); )
                M++, k++;
              if (c[E] = M, M > o)
                v += 2;
              else if (k > a)
                h += 2;
              else if (f) {
                if ((L = s + m - w) >= 0 && L < d && u[L] != -1) {
                  if (M >= (C = o - u[L]))
                    return this.diff_bisectSplit_(e3, r2, M, k, i);
                }
              }
            }
            for (var S = -b + g; S <= b - y; S += 2) {
              for (var C, L = s + S, T = (C = S == -b || S != b && u[L - 1] < u[L + 1] ? u[L + 1] : u[L - 1] + 1) - S; C < o && T < a && e3.charAt(o - C - 1) == r2.charAt(a - T - 1); )
                C++, T++;
              if (u[L] = C, C > o)
                y += 2;
              else if (T > a)
                g += 2;
              else if (!f) {
                if ((E = s + m - S) >= 0 && E < d && c[E] != -1) {
                  var M;
                  k = s + (M = c[E]) - E;
                  if (M >= (C = o - C))
                    return this.diff_bisectSplit_(e3, r2, M, k, i);
                }
              }
            }
          }
          return [new t2.Diff(n2, e3), new t2.Diff(1, r2)];
        }, t2.prototype.diff_bisectSplit_ = function(e3, t3, n3, r2, i) {
          var o = e3.substring(0, n3), a = t3.substring(0, r2), l = e3.substring(n3), s = t3.substring(r2), d = this.diff_main(o, a, false, i), c = this.diff_main(l, s, false, i);
          return d.concat(c);
        }, t2.prototype.diff_linesToChars_ = function(e3, t3) {
          var n3 = [], r2 = {};
          function i(e4) {
            for (var t4 = "", i2 = 0, a2 = -1, l = n3.length; a2 < e4.length - 1; ) {
              (a2 = e4.indexOf("\n", i2)) == -1 && (a2 = e4.length - 1);
              var s = e4.substring(i2, a2 + 1);
              (r2.hasOwnProperty ? r2.hasOwnProperty(s) : r2[s] !== void 0) ? t4 += String.fromCharCode(r2[s]) : (l == o && (s = e4.substring(i2), a2 = e4.length), t4 += String.fromCharCode(l), r2[s] = l, n3[l++] = s), i2 = a2 + 1;
            }
            return t4;
          }
          n3[0] = "";
          var o = 4e4, a = i(e3);
          return o = 65535, { chars1: a, chars2: i(t3), lineArray: n3 };
        }, t2.prototype.diff_charsToLines_ = function(e3, t3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            for (var r2 = e3[n3][1], i = [], o = 0; o < r2.length; o++)
              i[o] = t3[r2.charCodeAt(o)];
            e3[n3][1] = i.join("");
          }
        }, t2.prototype.diff_commonPrefix = function(e3, t3) {
          if (!e3 || !t3 || e3.charAt(0) != t3.charAt(0))
            return 0;
          for (var n3 = 0, r2 = Math.min(e3.length, t3.length), i = r2, o = 0; n3 < i; )
            e3.substring(o, i) == t3.substring(o, i) ? o = n3 = i : r2 = i, i = Math.floor((r2 - n3) / 2 + n3);
          return i;
        }, t2.prototype.diff_commonSuffix = function(e3, t3) {
          if (!e3 || !t3 || e3.charAt(e3.length - 1) != t3.charAt(t3.length - 1))
            return 0;
          for (var n3 = 0, r2 = Math.min(e3.length, t3.length), i = r2, o = 0; n3 < i; )
            e3.substring(e3.length - i, e3.length - o) == t3.substring(t3.length - i, t3.length - o) ? o = n3 = i : r2 = i, i = Math.floor((r2 - n3) / 2 + n3);
          return i;
        }, t2.prototype.diff_commonOverlap_ = function(e3, t3) {
          var n3 = e3.length, r2 = t3.length;
          if (n3 == 0 || r2 == 0)
            return 0;
          n3 > r2 ? e3 = e3.substring(n3 - r2) : n3 < r2 && (t3 = t3.substring(0, n3));
          var i = Math.min(n3, r2);
          if (e3 == t3)
            return i;
          for (var o = 0, a = 1; ; ) {
            var l = e3.substring(i - a), s = t3.indexOf(l);
            if (s == -1)
              return o;
            a += s, s != 0 && e3.substring(i - a) != t3.substring(0, a) || (o = a, a++);
          }
        }, t2.prototype.diff_halfMatch_ = function(e3, t3) {
          if (this.Diff_Timeout <= 0)
            return null;
          var n3 = e3.length > t3.length ? e3 : t3, r2 = e3.length > t3.length ? t3 : e3;
          if (n3.length < 4 || 2 * r2.length < n3.length)
            return null;
          var i = this;
          function o(e4, t4, n4) {
            for (var r3, o2, a2, l2, s2 = e4.substring(n4, n4 + Math.floor(e4.length / 4)), d2 = -1, c2 = ""; (d2 = t4.indexOf(s2, d2 + 1)) != -1; ) {
              var u2 = i.diff_commonPrefix(e4.substring(n4), t4.substring(d2)), p2 = i.diff_commonSuffix(e4.substring(0, n4), t4.substring(0, d2));
              c2.length < p2 + u2 && (c2 = t4.substring(d2 - p2, d2) + t4.substring(d2, d2 + u2), r3 = e4.substring(0, n4 - p2), o2 = e4.substring(n4 + u2), a2 = t4.substring(0, d2 - p2), l2 = t4.substring(d2 + u2));
            }
            return 2 * c2.length >= e4.length ? [r3, o2, a2, l2, c2] : null;
          }
          var a, l, s, d, c, u = o(n3, r2, Math.ceil(n3.length / 4)), p = o(n3, r2, Math.ceil(n3.length / 2));
          return u || p ? (a = p ? u && u[4].length > p[4].length ? u : p : u, e3.length > t3.length ? (l = a[0], s = a[1], d = a[2], c = a[3]) : (d = a[0], c = a[1], l = a[2], s = a[3]), [l, s, d, c, a[4]]) : null;
        }, t2.prototype.diff_cleanupSemantic = function(e3) {
          for (var r2 = false, i = [], o = 0, a = null, l = 0, s = 0, d = 0, c = 0, u = 0; l < e3.length; )
            e3[l][0] == 0 ? (i[o++] = l, s = c, d = u, c = 0, u = 0, a = e3[l][1]) : (e3[l][0] == 1 ? c += e3[l][1].length : u += e3[l][1].length, a && a.length <= Math.max(s, d) && a.length <= Math.max(c, u) && (e3.splice(i[o - 1], 0, new t2.Diff(n2, a)), e3[i[o - 1] + 1][0] = 1, o--, l = --o > 0 ? i[o - 1] : -1, s = 0, d = 0, c = 0, u = 0, a = null, r2 = true)), l++;
          for (r2 && this.diff_cleanupMerge(e3), this.diff_cleanupSemanticLossless(e3), l = 1; l < e3.length; ) {
            if (e3[l - 1][0] == n2 && e3[l][0] == 1) {
              var p = e3[l - 1][1], m = e3[l][1], f = this.diff_commonOverlap_(p, m), h = this.diff_commonOverlap_(m, p);
              f >= h ? (f >= p.length / 2 || f >= m.length / 2) && (e3.splice(l, 0, new t2.Diff(0, m.substring(0, f))), e3[l - 1][1] = p.substring(0, p.length - f), e3[l + 1][1] = m.substring(f), l++) : (h >= p.length / 2 || h >= m.length / 2) && (e3.splice(l, 0, new t2.Diff(0, p.substring(0, h))), e3[l - 1][0] = 1, e3[l - 1][1] = m.substring(0, m.length - h), e3[l + 1][0] = n2, e3[l + 1][1] = p.substring(h), l++), l++;
            }
            l++;
          }
        }, t2.prototype.diff_cleanupSemanticLossless = function(e3) {
          function n3(e4, n4) {
            if (!e4 || !n4)
              return 6;
            var r3 = e4.charAt(e4.length - 1), i2 = n4.charAt(0), o2 = r3.match(t2.nonAlphaNumericRegex_), a2 = i2.match(t2.nonAlphaNumericRegex_), l2 = o2 && r3.match(t2.whitespaceRegex_), s2 = a2 && i2.match(t2.whitespaceRegex_), d2 = l2 && r3.match(t2.linebreakRegex_), c2 = s2 && i2.match(t2.linebreakRegex_), u2 = d2 && e4.match(t2.blanklineEndRegex_), p2 = c2 && n4.match(t2.blanklineStartRegex_);
            return u2 || p2 ? 5 : d2 || c2 ? 4 : o2 && !l2 && s2 ? 3 : l2 || s2 ? 2 : o2 || a2 ? 1 : 0;
          }
          for (var r2 = 1; r2 < e3.length - 1; ) {
            if (e3[r2 - 1][0] == 0 && e3[r2 + 1][0] == 0) {
              var i = e3[r2 - 1][1], o = e3[r2][1], a = e3[r2 + 1][1], l = this.diff_commonSuffix(i, o);
              if (l) {
                var s = o.substring(o.length - l);
                i = i.substring(0, i.length - l), o = s + o.substring(0, o.length - l), a = s + a;
              }
              for (var d = i, c = o, u = a, p = n3(i, o) + n3(o, a); o.charAt(0) === a.charAt(0); ) {
                i += o.charAt(0), o = o.substring(1) + a.charAt(0), a = a.substring(1);
                var m = n3(i, o) + n3(o, a);
                m >= p && (p = m, d = i, c = o, u = a);
              }
              e3[r2 - 1][1] != d && (d ? e3[r2 - 1][1] = d : (e3.splice(r2 - 1, 1), r2--), e3[r2][1] = c, u ? e3[r2 + 1][1] = u : (e3.splice(r2 + 1, 1), r2--));
            }
            r2++;
          }
        }, t2.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, t2.whitespaceRegex_ = /\s/, t2.linebreakRegex_ = /[\r\n]/, t2.blanklineEndRegex_ = /\n\r?\n$/, t2.blanklineStartRegex_ = /^\r?\n\r?\n/, t2.prototype.diff_cleanupEfficiency = function(e3) {
          for (var r2 = false, i = [], o = 0, a = null, l = 0, s = false, d = false, c = false, u = false; l < e3.length; )
            e3[l][0] == 0 ? (e3[l][1].length < this.Diff_EditCost && (c || u) ? (i[o++] = l, s = c, d = u, a = e3[l][1]) : (o = 0, a = null), c = u = false) : (e3[l][0] == n2 ? u = true : c = true, a && (s && d && c && u || a.length < this.Diff_EditCost / 2 && s + d + c + u == 3) && (e3.splice(i[o - 1], 0, new t2.Diff(n2, a)), e3[i[o - 1] + 1][0] = 1, o--, a = null, s && d ? (c = u = true, o = 0) : (l = --o > 0 ? i[o - 1] : -1, c = u = false), r2 = true)), l++;
          r2 && this.diff_cleanupMerge(e3);
        }, t2.prototype.diff_cleanupMerge = function(e3) {
          e3.push(new t2.Diff(0, ""));
          for (var r2, i = 0, o = 0, a = 0, l = "", s = ""; i < e3.length; )
            switch (e3[i][0]) {
              case 1:
                a++, s += e3[i][1], i++;
                break;
              case n2:
                o++, l += e3[i][1], i++;
                break;
              case 0:
                o + a > 1 ? (o !== 0 && a !== 0 && ((r2 = this.diff_commonPrefix(s, l)) !== 0 && (i - o - a > 0 && e3[i - o - a - 1][0] == 0 ? e3[i - o - a - 1][1] += s.substring(0, r2) : (e3.splice(0, 0, new t2.Diff(0, s.substring(0, r2))), i++), s = s.substring(r2), l = l.substring(r2)), (r2 = this.diff_commonSuffix(s, l)) !== 0 && (e3[i][1] = s.substring(s.length - r2) + e3[i][1], s = s.substring(0, s.length - r2), l = l.substring(0, l.length - r2))), i -= o + a, e3.splice(i, o + a), l.length && (e3.splice(i, 0, new t2.Diff(n2, l)), i++), s.length && (e3.splice(i, 0, new t2.Diff(1, s)), i++), i++) : i !== 0 && e3[i - 1][0] == 0 ? (e3[i - 1][1] += e3[i][1], e3.splice(i, 1)) : i++, a = 0, o = 0, l = "", s = "";
            }
          e3[e3.length - 1][1] === "" && e3.pop();
          var d = false;
          for (i = 1; i < e3.length - 1; )
            e3[i - 1][0] == 0 && e3[i + 1][0] == 0 && (e3[i][1].substring(e3[i][1].length - e3[i - 1][1].length) == e3[i - 1][1] ? (e3[i][1] = e3[i - 1][1] + e3[i][1].substring(0, e3[i][1].length - e3[i - 1][1].length), e3[i + 1][1] = e3[i - 1][1] + e3[i + 1][1], e3.splice(i - 1, 1), d = true) : e3[i][1].substring(0, e3[i + 1][1].length) == e3[i + 1][1] && (e3[i - 1][1] += e3[i + 1][1], e3[i][1] = e3[i][1].substring(e3[i + 1][1].length) + e3[i + 1][1], e3.splice(i + 1, 1), d = true)), i++;
          d && this.diff_cleanupMerge(e3);
        }, t2.prototype.diff_xIndex = function(e3, t3) {
          var r2, i = 0, o = 0, a = 0, l = 0;
          for (r2 = 0; r2 < e3.length && (e3[r2][0] !== 1 && (i += e3[r2][1].length), e3[r2][0] !== n2 && (o += e3[r2][1].length), !(i > t3)); r2++)
            a = i, l = o;
          return e3.length != r2 && e3[r2][0] === n2 ? l : l + (t3 - a);
        }, t2.prototype.diff_prettyHtml = function(e3) {
          for (var t3 = [], r2 = /&/g, i = /</g, o = />/g, a = /\n/g, l = 0; l < e3.length; l++) {
            var s = e3[l][0], d = e3[l][1].replace(r2, "&amp;").replace(i, "&lt;").replace(o, "&gt;").replace(a, "&para;<br>");
            switch (s) {
              case 1:
                t3[l] = '<ins style="background:#e6ffe6;">' + d + "</ins>";
                break;
              case n2:
                t3[l] = '<del style="background:#ffe6e6;">' + d + "</del>";
                break;
              case 0:
                t3[l] = "<span>" + d + "</span>";
            }
          }
          return t3.join("");
        }, t2.prototype.diff_text1 = function(e3) {
          for (var t3 = [], n3 = 0; n3 < e3.length; n3++)
            e3[n3][0] !== 1 && (t3[n3] = e3[n3][1]);
          return t3.join("");
        }, t2.prototype.diff_text2 = function(e3) {
          for (var t3 = [], r2 = 0; r2 < e3.length; r2++)
            e3[r2][0] !== n2 && (t3[r2] = e3[r2][1]);
          return t3.join("");
        }, t2.prototype.diff_levenshtein = function(e3) {
          for (var t3 = 0, r2 = 0, i = 0, o = 0; o < e3.length; o++) {
            var a = e3[o][0], l = e3[o][1];
            switch (a) {
              case 1:
                r2 += l.length;
                break;
              case n2:
                i += l.length;
                break;
              case 0:
                t3 += Math.max(r2, i), r2 = 0, i = 0;
            }
          }
          return t3 += Math.max(r2, i);
        }, t2.prototype.diff_toDelta = function(e3) {
          for (var t3 = [], r2 = 0; r2 < e3.length; r2++)
            switch (e3[r2][0]) {
              case 1:
                t3[r2] = "+" + encodeURI(e3[r2][1]);
                break;
              case n2:
                t3[r2] = "-" + e3[r2][1].length;
                break;
              case 0:
                t3[r2] = "=" + e3[r2][1].length;
            }
          return t3.join("	").replace(/%20/g, " ");
        }, t2.prototype.diff_fromDelta = function(e3, r2) {
          for (var i = [], o = 0, a = 0, l = r2.split(/\t/g), s = 0; s < l.length; s++) {
            var d = l[s].substring(1);
            switch (l[s].charAt(0)) {
              case "+":
                try {
                  i[o++] = new t2.Diff(1, decodeURI(d));
                } catch (e4) {
                  throw new Error("Illegal escape in diff_fromDelta: " + d);
                }
                break;
              case "-":
              case "=":
                var c = parseInt(d, 10);
                if (isNaN(c) || c < 0)
                  throw new Error("Invalid number in diff_fromDelta: " + d);
                var u = e3.substring(a, a += c);
                l[s].charAt(0) == "=" ? i[o++] = new t2.Diff(0, u) : i[o++] = new t2.Diff(n2, u);
                break;
              default:
                if (l[s])
                  throw new Error("Invalid diff operation in diff_fromDelta: " + l[s]);
            }
          }
          if (a != e3.length)
            throw new Error("Delta length (" + a + ") does not equal source text length (" + e3.length + ").");
          return i;
        }, t2.prototype.match_main = function(e3, t3, n3) {
          if (e3 == null || t3 == null || n3 == null)
            throw new Error("Null input. (match_main)");
          return n3 = Math.max(0, Math.min(n3, e3.length)), e3 == t3 ? 0 : e3.length ? e3.substring(n3, n3 + t3.length) == t3 ? n3 : this.match_bitap_(e3, t3, n3) : -1;
        }, t2.prototype.match_bitap_ = function(e3, t3, n3) {
          if (t3.length > this.Match_MaxBits)
            throw new Error("Pattern too long for this browser.");
          var r2 = this.match_alphabet_(t3), i = this;
          function o(e4, r3) {
            var o2 = e4 / t3.length, a2 = Math.abs(n3 - r3);
            return i.Match_Distance ? o2 + a2 / i.Match_Distance : a2 ? 1 : o2;
          }
          var a = this.Match_Threshold, l = e3.indexOf(t3, n3);
          l != -1 && (a = Math.min(o(0, l), a), (l = e3.lastIndexOf(t3, n3 + t3.length)) != -1 && (a = Math.min(o(0, l), a)));
          var s, d, c = 1 << t3.length - 1;
          l = -1;
          for (var u, p = t3.length + e3.length, m = 0; m < t3.length; m++) {
            for (s = 0, d = p; s < d; )
              o(m, n3 + d) <= a ? s = d : p = d, d = Math.floor((p - s) / 2 + s);
            p = d;
            var f = Math.max(1, n3 - d + 1), h = Math.min(n3 + d, e3.length) + t3.length, v = Array(h + 2);
            v[h + 1] = (1 << m) - 1;
            for (var g = h; g >= f; g--) {
              var y = r2[e3.charAt(g - 1)];
              if (v[g] = m === 0 ? (v[g + 1] << 1 | 1) & y : (v[g + 1] << 1 | 1) & y | (u[g + 1] | u[g]) << 1 | 1 | u[g + 1], v[g] & c) {
                var b = o(m, g - 1);
                if (b <= a) {
                  if (a = b, !((l = g - 1) > n3))
                    break;
                  f = Math.max(1, 2 * n3 - l);
                }
              }
            }
            if (o(m + 1, n3) > a)
              break;
            u = v;
          }
          return l;
        }, t2.prototype.match_alphabet_ = function(e3) {
          for (var t3 = {}, n3 = 0; n3 < e3.length; n3++)
            t3[e3.charAt(n3)] = 0;
          for (n3 = 0; n3 < e3.length; n3++)
            t3[e3.charAt(n3)] |= 1 << e3.length - n3 - 1;
          return t3;
        }, t2.prototype.patch_addContext_ = function(e3, n3) {
          if (n3.length != 0) {
            if (e3.start2 === null)
              throw Error("patch not initialized");
            for (var r2 = n3.substring(e3.start2, e3.start2 + e3.length1), i = 0; n3.indexOf(r2) != n3.lastIndexOf(r2) && r2.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; )
              i += this.Patch_Margin, r2 = n3.substring(e3.start2 - i, e3.start2 + e3.length1 + i);
            i += this.Patch_Margin;
            var o = n3.substring(e3.start2 - i, e3.start2);
            o && e3.diffs.unshift(new t2.Diff(0, o));
            var a = n3.substring(e3.start2 + e3.length1, e3.start2 + e3.length1 + i);
            a && e3.diffs.push(new t2.Diff(0, a)), e3.start1 -= o.length, e3.start2 -= o.length, e3.length1 += o.length + a.length, e3.length2 += o.length + a.length;
          }
        }, t2.prototype.patch_make = function(e3, r2, i) {
          var o, a;
          if (typeof e3 == "string" && typeof r2 == "string" && i === void 0)
            o = e3, (a = this.diff_main(o, r2, true)).length > 2 && (this.diff_cleanupSemantic(a), this.diff_cleanupEfficiency(a));
          else if (e3 && typeof e3 == "object" && r2 === void 0 && i === void 0)
            a = e3, o = this.diff_text1(a);
          else if (typeof e3 == "string" && r2 && typeof r2 == "object" && i === void 0)
            o = e3, a = r2;
          else {
            if (typeof e3 != "string" || typeof r2 != "string" || !i || typeof i != "object")
              throw new Error("Unknown call format to patch_make.");
            o = e3, a = i;
          }
          if (a.length === 0)
            return [];
          for (var l = [], s = new t2.patch_obj(), d = 0, c = 0, u = 0, p = o, m = o, f = 0; f < a.length; f++) {
            var h = a[f][0], v = a[f][1];
            switch (d || h === 0 || (s.start1 = c, s.start2 = u), h) {
              case 1:
                s.diffs[d++] = a[f], s.length2 += v.length, m = m.substring(0, u) + v + m.substring(u);
                break;
              case n2:
                s.length1 += v.length, s.diffs[d++] = a[f], m = m.substring(0, u) + m.substring(u + v.length);
                break;
              case 0:
                v.length <= 2 * this.Patch_Margin && d && a.length != f + 1 ? (s.diffs[d++] = a[f], s.length1 += v.length, s.length2 += v.length) : v.length >= 2 * this.Patch_Margin && d && (this.patch_addContext_(s, p), l.push(s), s = new t2.patch_obj(), d = 0, p = m, c = u);
            }
            h !== 1 && (c += v.length), h !== n2 && (u += v.length);
          }
          return d && (this.patch_addContext_(s, p), l.push(s)), l;
        }, t2.prototype.patch_deepCopy = function(e3) {
          for (var n3 = [], r2 = 0; r2 < e3.length; r2++) {
            var i = e3[r2], o = new t2.patch_obj();
            o.diffs = [];
            for (var a = 0; a < i.diffs.length; a++)
              o.diffs[a] = new t2.Diff(i.diffs[a][0], i.diffs[a][1]);
            o.start1 = i.start1, o.start2 = i.start2, o.length1 = i.length1, o.length2 = i.length2, n3[r2] = o;
          }
          return n3;
        }, t2.prototype.patch_apply = function(e3, t3) {
          if (e3.length == 0)
            return [t3, []];
          e3 = this.patch_deepCopy(e3);
          var r2 = this.patch_addPadding(e3);
          t3 = r2 + t3 + r2, this.patch_splitMax(e3);
          for (var i = 0, o = [], a = 0; a < e3.length; a++) {
            var l, s, d = e3[a].start2 + i, c = this.diff_text1(e3[a].diffs), u = -1;
            if (c.length > this.Match_MaxBits ? (l = this.match_main(t3, c.substring(0, this.Match_MaxBits), d)) != -1 && ((u = this.match_main(t3, c.substring(c.length - this.Match_MaxBits), d + c.length - this.Match_MaxBits)) == -1 || l >= u) && (l = -1) : l = this.match_main(t3, c, d), l == -1)
              o[a] = false, i -= e3[a].length2 - e3[a].length1;
            else if (o[a] = true, i = l - d, c == (s = u == -1 ? t3.substring(l, l + c.length) : t3.substring(l, u + this.Match_MaxBits)))
              t3 = t3.substring(0, l) + this.diff_text2(e3[a].diffs) + t3.substring(l + c.length);
            else {
              var p = this.diff_main(c, s, false);
              if (c.length > this.Match_MaxBits && this.diff_levenshtein(p) / c.length > this.Patch_DeleteThreshold)
                o[a] = false;
              else {
                this.diff_cleanupSemanticLossless(p);
                for (var m, f = 0, h = 0; h < e3[a].diffs.length; h++) {
                  var v = e3[a].diffs[h];
                  v[0] !== 0 && (m = this.diff_xIndex(p, f)), v[0] === 1 ? t3 = t3.substring(0, l + m) + v[1] + t3.substring(l + m) : v[0] === n2 && (t3 = t3.substring(0, l + m) + t3.substring(l + this.diff_xIndex(p, f + v[1].length))), v[0] !== n2 && (f += v[1].length);
                }
              }
            }
          }
          return [t3 = t3.substring(r2.length, t3.length - r2.length), o];
        }, t2.prototype.patch_addPadding = function(e3) {
          for (var n3 = this.Patch_Margin, r2 = "", i = 1; i <= n3; i++)
            r2 += String.fromCharCode(i);
          for (i = 0; i < e3.length; i++)
            e3[i].start1 += n3, e3[i].start2 += n3;
          var o = e3[0], a = o.diffs;
          if (a.length == 0 || a[0][0] != 0)
            a.unshift(new t2.Diff(0, r2)), o.start1 -= n3, o.start2 -= n3, o.length1 += n3, o.length2 += n3;
          else if (n3 > a[0][1].length) {
            var l = n3 - a[0][1].length;
            a[0][1] = r2.substring(a[0][1].length) + a[0][1], o.start1 -= l, o.start2 -= l, o.length1 += l, o.length2 += l;
          }
          if ((a = (o = e3[e3.length - 1]).diffs).length == 0 || a[a.length - 1][0] != 0)
            a.push(new t2.Diff(0, r2)), o.length1 += n3, o.length2 += n3;
          else if (n3 > a[a.length - 1][1].length) {
            l = n3 - a[a.length - 1][1].length;
            a[a.length - 1][1] += r2.substring(0, l), o.length1 += l, o.length2 += l;
          }
          return r2;
        }, t2.prototype.patch_splitMax = function(e3) {
          for (var r2 = this.Match_MaxBits, i = 0; i < e3.length; i++)
            if (!(e3[i].length1 <= r2)) {
              var o = e3[i];
              e3.splice(i--, 1);
              for (var a = o.start1, l = o.start2, s = ""; o.diffs.length !== 0; ) {
                var d = new t2.patch_obj(), c = true;
                for (d.start1 = a - s.length, d.start2 = l - s.length, s !== "" && (d.length1 = d.length2 = s.length, d.diffs.push(new t2.Diff(0, s))); o.diffs.length !== 0 && d.length1 < r2 - this.Patch_Margin; ) {
                  var u = o.diffs[0][0], p = o.diffs[0][1];
                  u === 1 ? (d.length2 += p.length, l += p.length, d.diffs.push(o.diffs.shift()), c = false) : u === n2 && d.diffs.length == 1 && d.diffs[0][0] == 0 && p.length > 2 * r2 ? (d.length1 += p.length, a += p.length, c = false, d.diffs.push(new t2.Diff(u, p)), o.diffs.shift()) : (p = p.substring(0, r2 - d.length1 - this.Patch_Margin), d.length1 += p.length, a += p.length, u === 0 ? (d.length2 += p.length, l += p.length) : c = false, d.diffs.push(new t2.Diff(u, p)), p == o.diffs[0][1] ? o.diffs.shift() : o.diffs[0][1] = o.diffs[0][1].substring(p.length));
                }
                s = (s = this.diff_text2(d.diffs)).substring(s.length - this.Patch_Margin);
                var m = this.diff_text1(o.diffs).substring(0, this.Patch_Margin);
                m !== "" && (d.length1 += m.length, d.length2 += m.length, d.diffs.length !== 0 && d.diffs[d.diffs.length - 1][0] === 0 ? d.diffs[d.diffs.length - 1][1] += m : d.diffs.push(new t2.Diff(0, m))), c || e3.splice(++i, 0, d);
              }
            }
        }, t2.prototype.patch_toText = function(e3) {
          for (var t3 = [], n3 = 0; n3 < e3.length; n3++)
            t3[n3] = e3[n3];
          return t3.join("");
        }, t2.prototype.patch_fromText = function(e3) {
          var r2 = [];
          if (!e3)
            return r2;
          for (var i = e3.split("\n"), o = 0, a = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; o < i.length; ) {
            var l = i[o].match(a);
            if (!l)
              throw new Error("Invalid patch string: " + i[o]);
            var s = new t2.patch_obj();
            for (r2.push(s), s.start1 = parseInt(l[1], 10), l[2] === "" ? (s.start1--, s.length1 = 1) : l[2] == "0" ? s.length1 = 0 : (s.start1--, s.length1 = parseInt(l[2], 10)), s.start2 = parseInt(l[3], 10), l[4] === "" ? (s.start2--, s.length2 = 1) : l[4] == "0" ? s.length2 = 0 : (s.start2--, s.length2 = parseInt(l[4], 10)), o++; o < i.length; ) {
              var d = i[o].charAt(0);
              try {
                var c = decodeURI(i[o].substring(1));
              } catch (e4) {
                throw new Error("Illegal escape in patch_fromText: " + c);
              }
              if (d == "-")
                s.diffs.push(new t2.Diff(n2, c));
              else if (d == "+")
                s.diffs.push(new t2.Diff(1, c));
              else if (d == " ")
                s.diffs.push(new t2.Diff(0, c));
              else {
                if (d == "@")
                  break;
                if (d !== "")
                  throw new Error('Invalid patch mode "' + d + '" in: ' + c);
              }
              o++;
            }
          }
          return r2;
        }, (t2.patch_obj = function() {
          this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
        }).prototype.toString = function() {
          for (var e3, t3 = ["@@ -" + (this.length1 === 0 ? this.start1 + ",0" : this.length1 == 1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (this.length2 === 0 ? this.start2 + ",0" : this.length2 == 1 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n"], r2 = 0; r2 < this.diffs.length; r2++) {
            switch (this.diffs[r2][0]) {
              case 1:
                e3 = "+";
                break;
              case n2:
                e3 = "-";
                break;
              case 0:
                e3 = " ";
            }
            t3[r2 + 1] = e3 + encodeURI(this.diffs[r2][1]) + "\n";
          }
          return t3.join("").replace(/%20/g, " ");
        }, e2.exports = t2, e2.exports.diff_match_patch = t2, e2.exports.DIFF_DELETE = n2, e2.exports.DIFF_INSERT = 1, e2.exports.DIFF_EQUAL = 0;
      }, 157: () => {
      }, 857: (e2, t2, n2) => {
        n2.d(t2, { default: () => N });
        var r2 = n2(369), i = n2(46), o = n2(726), a = n2(23), l = n2(383), s = n2(890), d = n2(93), c = function(e3) {
          e3 === void 0 && (e3 = document);
          var t3 = function(e4) {
            var t4 = document.createElement("img");
            t4.src = e4.getAttribute("data-src"), t4.addEventListener("load", function() {
              e4.getAttribute("style") || e4.getAttribute("class") || e4.getAttribute("width") || e4.getAttribute("height") || t4.naturalHeight > t4.naturalWidth && t4.naturalWidth / t4.naturalHeight < document.querySelector(".vditor-reset").clientWidth / (window.innerHeight - 40) && t4.naturalHeight > window.innerHeight - 40 && (e4.style.height = window.innerHeight - 40 + "px"), e4.src = t4.src;
            }), e4.removeAttribute("data-src");
          };
          if (!("IntersectionObserver" in window))
            return e3.querySelectorAll("img").forEach(function(e4) {
              e4.getAttribute("data-src") && t3(e4);
            }), false;
          window.vditorImageIntersectionObserver ? (window.vditorImageIntersectionObserver.disconnect(), e3.querySelectorAll("img").forEach(function(e4) {
            window.vditorImageIntersectionObserver.observe(e4);
          })) : (window.vditorImageIntersectionObserver = new IntersectionObserver(function(e4) {
            e4.forEach(function(e5) {
              (e5.isIntersecting === void 0 ? e5.intersectionRatio !== 0 : e5.isIntersecting) && e5.target.getAttribute("data-src") && t3(e5.target);
            });
          }), e3.querySelectorAll("img").forEach(function(e4) {
            window.vditorImageIntersectionObserver.observe(e4);
          }));
        }, u = n2(323), p = n2(207), m = n2(765), f = n2(894), h = n2(198), v = n2(583), g = n2(260), y = n2(958), b = n2(228), w = n2(713), E = n2(224), k = n2(792), S = n2(187), C = function(e3, t3) {
          if (t3 === void 0 && (t3 = "zh_CN"), typeof speechSynthesis != "undefined" && typeof SpeechSynthesisUtterance != "undefined") {
            var n3 = '<svg><use xlink:href="#vditor-icon-play"></use></svg>', r3 = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>';
            document.getElementById("vditorIconScript") || (n3 = '<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>', r3 = '<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>');
            var i2 = document.querySelector(".vditor-speech");
            if (!i2) {
              (i2 = document.createElement("div")).className = "vditor-speech", document.body.insertAdjacentElement("beforeend", i2);
              var o2 = function() {
                var e4, n4;
                return speechSynthesis.getVoices().forEach(function(r4) {
                  r4.lang === t3.replace("_", "-") && (e4 = r4), r4.default && (n4 = r4);
                }), e4 || (e4 = n4), e4;
              };
              speechSynthesis.onvoiceschanged !== void 0 && (speechSynthesis.onvoiceschanged = o2);
              var a2 = o2();
              i2.onclick = function() {
                if (i2.className === "vditor-speech") {
                  var e4 = new SpeechSynthesisUtterance(i2.getAttribute("data-text"));
                  e4.voice = a2, e4.onend = function() {
                    i2.className = "vditor-speech", speechSynthesis.cancel(), i2.innerHTML = n3;
                  }, speechSynthesis.speak(e4), i2.className = "vditor-speech vditor-speech--current", i2.innerHTML = r3;
                } else
                  speechSynthesis.speaking && (speechSynthesis.paused ? (speechSynthesis.resume(), i2.innerHTML = r3) : (speechSynthesis.pause(), i2.innerHTML = n3));
                (0, S.Hc)(window.vditorSpeechRange);
              }, document.body.addEventListener("click", function() {
                getSelection().toString().trim() === "" && i2.style.display === "block" && (i2.className = "vditor-speech", speechSynthesis.cancel(), i2.style.display = "none");
              });
            }
            e3.addEventListener("mouseup", function(e4) {
              var t4 = getSelection().toString().trim();
              if (speechSynthesis.cancel(), getSelection().toString().trim() !== "") {
                window.vditorSpeechRange = getSelection().getRangeAt(0).cloneRange();
                var r4 = getSelection().getRangeAt(0).getBoundingClientRect();
                i2.innerHTML = n3, i2.style.display = "block", i2.style.top = r4.top + r4.height + document.querySelector("html").scrollTop - 20 + "px", i2.style.left = e4.screenX + 2 + "px", i2.setAttribute("data-text", t4);
              } else
                i2.style.display === "block" && (i2.className = "vditor-speech", i2.style.display = "none");
            });
          }
        }, L = function(e3, t3, n3, r3) {
          return new (n3 || (n3 = Promise))(function(i2, o2) {
            function a2(e4) {
              try {
                s2(r3.next(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function l2(e4) {
              try {
                s2(r3.throw(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function s2(e4) {
              var t4;
              e4.done ? i2(e4.value) : (t4 = e4.value, t4 instanceof n3 ? t4 : new n3(function(e5) {
                e5(t4);
              })).then(a2, l2);
            }
            s2((r3 = r3.apply(e3, t3 || [])).next());
          });
        }, T = function(e3, t3) {
          var n3, r3, i2, o2, a2 = { label: 0, sent: function() {
            if (1 & i2[0])
              throw i2[1];
            return i2[1];
          }, trys: [], ops: [] };
          return o2 = { next: l2(0), throw: l2(1), return: l2(2) }, typeof Symbol == "function" && (o2[Symbol.iterator] = function() {
            return this;
          }), o2;
          function l2(o3) {
            return function(l3) {
              return function(o4) {
                if (n3)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (n3 = 1, r3 && (i2 = 2 & o4[0] ? r3.return : o4[0] ? r3.throw || ((i2 = r3.return) && i2.call(r3), 0) : r3.next) && !(i2 = i2.call(r3, o4[1])).done)
                      return i2;
                    switch (r3 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                      case 0:
                      case 1:
                        i2 = o4;
                        break;
                      case 4:
                        return a2.label++, { value: o4[1], done: false };
                      case 5:
                        a2.label++, r3 = o4[1], o4 = [0];
                        continue;
                      case 7:
                        o4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!(i2 = a2.trys, (i2 = i2.length > 0 && i2[i2.length - 1]) || o4[0] !== 6 && o4[0] !== 2)) {
                          a2 = 0;
                          continue;
                        }
                        if (o4[0] === 3 && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                          a2.label = o4[1];
                          break;
                        }
                        if (o4[0] === 6 && a2.label < i2[1]) {
                          a2.label = i2[1], i2 = o4;
                          break;
                        }
                        if (i2 && a2.label < i2[2]) {
                          a2.label = i2[2], a2.ops.push(o4);
                          break;
                        }
                        i2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    o4 = t3.call(e3, a2);
                  } catch (e4) {
                    o4 = [6, e4], r3 = 0;
                  } finally {
                    n3 = i2 = 0;
                  }
                if (5 & o4[0])
                  throw o4[1];
                return { value: o4[0] ? o4[1] : void 0, done: true };
              }([o3, l3]);
            };
          }
        }, M = function(e3) {
          var t3 = { anchor: 0, cdn: g.g.CDN, customEmoji: {}, emojiPath: (e3 && e3.emojiPath || g.g.CDN) + "/dist/images/emoji", hljs: g.g.HLJS_OPTIONS, icon: "ant", lang: "zh_CN", markdown: g.g.MARKDOWN_OPTIONS, math: g.g.MATH_OPTIONS, mode: "light", speech: { enable: false }, theme: g.g.THEME_OPTIONS };
          return (0, E.T)(t3, e3);
        }, A = function(e3, t3) {
          var n3 = M(t3);
          return (0, b.G)(n3.cdn + "/dist/js/lute/lute.min.js", "vditorLuteScript").then(function() {
            var r3 = (0, k.X)({ autoSpace: n3.markdown.autoSpace, codeBlockPreview: n3.markdown.codeBlockPreview, emojiSite: n3.emojiPath, emojis: n3.customEmoji, fixTermTypo: n3.markdown.fixTermTypo, footnotes: n3.markdown.footnotes, headingAnchor: n3.anchor !== 0, inlineMathDigit: n3.math.inlineDigit, lazyLoadImage: n3.lazyLoadImage, linkBase: n3.markdown.linkBase, linkPrefix: n3.markdown.linkPrefix, listStyle: n3.markdown.listStyle, mark: n3.markdown.mark, mathBlockPreview: n3.markdown.mathBlockPreview, paragraphBeginningSpace: n3.markdown.paragraphBeginningSpace, sanitize: n3.markdown.sanitize, toc: n3.markdown.toc });
            return (t3 == null ? void 0 : t3.renderers) && r3.SetJSRenderers({ renderers: { Md2HTML: t3.renderers } }), r3.SetHeadingID(true), r3.Md2HTML(e3);
          });
        }, _ = function(e3, t3, n3) {
          return L(void 0, void 0, void 0, function() {
            var i2, h2, g2;
            return T(this, function(E2) {
              switch (E2.label) {
                case 0:
                  return i2 = M(n3), [4, A(t3, i2)];
                case 1:
                  if (h2 = E2.sent(), i2.transform && (h2 = i2.transform(h2)), e3.innerHTML = h2, e3.classList.add("vditor-reset"), i2.i18n)
                    return [3, 5];
                  if (["en_US", "ja_JP", "ko_KR", "ru_RU", "zh_CN", "zh_TW"].includes(i2.lang))
                    return [3, 2];
                  throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
                case 2:
                  return g2 = "vditorI18nScript" + i2.lang, document.querySelectorAll('head script[id^="vditorI18nScript"]').forEach(function(e4) {
                    e4.id !== g2 && document.head.removeChild(e4);
                  }), [4, (0, b.G)(i2.cdn + "/dist/js/i18n/" + i2.lang + ".js", g2)];
                case 3:
                  E2.sent(), E2.label = 4;
                case 4:
                  return [3, 6];
                case 5:
                  window.VditorI18n = i2.i18n, E2.label = 6;
                case 6:
                  return i2.icon ? [4, (0, b.G)(i2.cdn + "/dist/js/icons/" + i2.icon + ".js", "vditorIconScript")] : [3, 8];
                case 7:
                  E2.sent(), E2.label = 8;
                case 8:
                  return (0, y.Z)(i2.theme.current, i2.theme.path), i2.anchor === 1 && e3.classList.add("vditor-reset--anchor"), (0, a.O)(e3), (0, d.s)(i2.hljs, e3, i2.cdn), (0, u.H)(e3, { cdn: i2.cdn, math: i2.math }), (0, m.i)(e3, i2.cdn, i2.mode), (0, l.P)(e3, i2.cdn), (0, s.v)(e3, i2.cdn), (0, o.p)(e3, i2.cdn, i2.mode), (0, f.P)(e3, i2.cdn, i2.mode), (0, v.B)(e3, i2.cdn), (0, r2.Q)(e3, i2.cdn), (0, p.Y)(e3), i2.speech.enable && C(e3), i2.anchor !== 0 && (k2 = i2.anchor, document.querySelectorAll(".vditor-anchor").forEach(function(e4) {
                    k2 === 1 && e4.classList.add("vditor-anchor--left"), e4.onclick = function() {
                      var t4 = e4.getAttribute("href").substr(1), n4 = document.getElementById("vditorAnchor-" + t4).offsetTop;
                      document.querySelector("html").scrollTop = n4;
                    };
                  }), window.onhashchange = function() {
                    var e4 = document.getElementById("vditorAnchor-" + decodeURIComponent(window.location.hash.substr(1)));
                    e4 && (document.querySelector("html").scrollTop = e4.offsetTop);
                  }), i2.after && i2.after(), i2.lazyLoadImage && c(e3), e3.addEventListener("click", function(t4) {
                    var n4 = (0, w.lG)(t4.target, "SPAN");
                    if (n4 && (0, w.fb)(n4, "vditor-toc")) {
                      var r3 = e3.querySelector("#" + n4.getAttribute("data-target-id"));
                      r3 && window.scrollTo(window.scrollX, r3.offsetTop);
                    }
                  }), [2];
              }
              var k2;
            });
          });
        }, x = n2(264), H = n2(968);
        const N = function() {
          function e3() {
          }
          return e3.adapterRender = i, e3.previewImage = x.E, e3.codeRender = a.O, e3.graphvizRender = s.v, e3.highlightRender = d.s, e3.mathRender = u.H, e3.mermaidRender = m.i, e3.flowchartRender = l.P, e3.chartRender = o.p, e3.abcRender = r2.Q, e3.mindmapRender = f.P, e3.plantumlRender = v.B, e3.outlineRender = h.k, e3.mediaRender = p.Y, e3.speechRender = C, e3.lazyLoadImageRender = c, e3.md2html = A, e3.preview = _, e3.setCodeTheme = H.Y, e3.setContentTheme = y.Z, e3;
        }();
      }, 260: (e2, t2, n2) => {
        n2.d(t2, { H: () => r2, g: () => i });
        var r2 = "3.8.11", i = function() {
          function e3() {
          }
          return e3.ZWSP = "\u200B", e3.DROP_EDITOR = "application/editor", e3.MOBILE_WIDTH = 520, e3.CLASS_MENU_DISABLED = "vditor-menu--disabled", e3.EDIT_TOOLBARS = ["emoji", "headings", "bold", "italic", "strike", "link", "list", "ordered-list", "outdent", "indent", "check", "line", "quote", "code", "inline-code", "insert-after", "insert-before", "upload", "record", "table"], e3.CODE_THEME = ["abap", "algol", "algol_nu", "arduino", "autumn", "borland", "bw", "colorful", "dracula", "emacs", "friendly", "fruity", "github", "igor", "lovelace", "manni", "monokai", "monokailight", "murphy", "native", "paraiso-dark", "paraiso-light", "pastie", "perldoc", "pygments", "rainbow_dash", "rrt", "solarized-dark", "solarized-dark256", "solarized-light", "swapoff", "tango", "trac", "vim", "vs", "xcode", "ant-design"], e3.CODE_LANGUAGES = ["mermaid", "echarts", "mindmap", "plantuml", "abc", "graphviz", "flowchart", "apache", "js", "ts", "html", "properties", "apache", "bash", "c", "csharp", "cpp", "css", "coffeescript", "diff", "go", "xml", "http", "json", "java", "javascript", "kotlin", "less", "lua", "makefile", "markdown", "nginx", "objectivec", "php", "php-template", "perl", "plaintext", "python", "python-repl", "r", "ruby", "rust", "scss", "sql", "shell", "swift", "ini", "typescript", "vbnet", "yaml", "ada", "clojure", "dart", "erb", "fortran", "gradle", "haskell", "julia", "julia-repl", "lisp", "matlab", "pgsql", "powershell", "sql_more", "stata", "cmake", "mathematica"], e3.CDN = "https://cdn.jsdelivr.net/npm/vditor@3.8.11", e3.MARKDOWN_OPTIONS = { autoSpace: false, codeBlockPreview: true, fixTermTypo: false, footnotes: true, linkBase: "", linkPrefix: "", listStyle: false, mark: false, mathBlockPreview: true, paragraphBeginningSpace: false, sanitize: true, toc: false }, e3.HLJS_OPTIONS = { enable: true, lineNumber: false, style: "github" }, e3.MATH_OPTIONS = { engine: "KaTeX", inlineDigit: false, macros: {} }, e3.THEME_OPTIONS = { current: "light", list: { "ant-design": "Ant Design", dark: "Dark", light: "Light", wechat: "WeChat" }, path: e3.CDN + "/dist/css/content-theme" }, e3;
        }();
      }, 369: (e2, t2, n2) => {
        n2.d(t2, { Q: () => a });
        var r2 = n2(260), i = n2(228), o = n2(46), a = function(e3, t3) {
          e3 === void 0 && (e3 = document), t3 === void 0 && (t3 = r2.g.CDN);
          var n3 = o.abcRenderAdapter.getElements(e3);
          n3.length > 0 && (0, i.G)(t3 + "/dist/js/abcjs/abcjs_basic.min.js", "vditorAbcjsScript").then(function() {
            n3.forEach(function(e4) {
              e4.parentElement.classList.contains("vditor-wysiwyg__pre") || e4.parentElement.classList.contains("vditor-ir__marker--pre") || e4.getAttribute("data-processed") !== "true" && (ABCJS.renderAbc(e4, o.abcRenderAdapter.getCode(e4).trim()), e4.style.overflowX = "auto", e4.setAttribute("data-processed", "true"));
            });
          });
        };
      }, 46: (e2, t2, n2) => {
        n2.r(t2), n2.d(t2, { mathRenderAdapter: () => r2, mermaidRenderAdapter: () => i, mindmapRenderAdapter: () => o, chartRenderAdapter: () => a, abcRenderAdapter: () => l, graphvizRenderAdapter: () => s, flowchartRenderAdapter: () => d, plantumlRenderAdapter: () => c });
        var r2 = { getCode: function(e3) {
          return e3.textContent;
        }, getElements: function(e3) {
          return e3.querySelectorAll(".language-math");
        } }, i = { getCode: function(e3) {
          return e3.textContent;
        }, getElements: function(e3) {
          return e3.querySelectorAll(".language-mermaid");
        } }, o = { getCode: function(e3) {
          return e3.getAttribute("data-code");
        }, getElements: function(e3) {
          return e3.querySelectorAll(".language-mindmap");
        } }, a = { getCode: function(e3) {
          return e3.innerText;
        }, getElements: function(e3) {
          return e3.querySelectorAll(".language-echarts");
        } }, l = { getCode: function(e3) {
          return e3.textContent;
        }, getElements: function(e3) {
          return e3.querySelectorAll(".language-abc");
        } }, s = { getCode: function(e3) {
          return e3.textContent;
        }, getElements: function(e3) {
          return e3.querySelectorAll(".language-graphviz");
        } }, d = { getCode: function(e3) {
          return e3.textContent;
        }, getElements: function(e3) {
          return e3.querySelectorAll(".language-flowchart");
        } }, c = { getCode: function(e3) {
          return e3.textContent;
        }, getElements: function(e3) {
          return e3.querySelectorAll(".language-plantuml");
        } };
      }, 726: (e2, t2, n2) => {
        n2.d(t2, { p: () => a });
        var r2 = n2(260), i = n2(228), o = n2(46), a = function(e3, t3, n3) {
          e3 === void 0 && (e3 = document), t3 === void 0 && (t3 = r2.g.CDN);
          var a2 = o.chartRenderAdapter.getElements(e3);
          a2.length > 0 && (0, i.G)(t3 + "/dist/js/echarts/echarts.min.js", "vditorEchartsScript").then(function() {
            a2.forEach(function(e4) {
              if (!e4.parentElement.classList.contains("vditor-wysiwyg__pre") && !e4.parentElement.classList.contains("vditor-ir__marker--pre")) {
                var t4 = o.chartRenderAdapter.getCode(e4).trim();
                if (t4)
                  try {
                    if (e4.getAttribute("data-processed") === "true")
                      return;
                    var r3 = JSON.parse(t4);
                    echarts.init(e4, n3 === "dark" ? "dark" : void 0).setOption(r3), e4.setAttribute("data-processed", "true");
                  } catch (t5) {
                    e4.className = "vditor-reset--error", e4.innerHTML = "echarts render error: <br>" + t5;
                  }
              }
            });
          });
        };
      }, 23: (e2, t2, n2) => {
        n2.d(t2, { O: () => i });
        var r2 = n2(769), i = function(e3) {
          e3.querySelectorAll("pre > code").forEach(function(t3, n3) {
            var i2, o, a;
            if (!t3.parentElement.classList.contains("vditor-wysiwyg__pre") && !t3.parentElement.classList.contains("vditor-ir__marker--pre") && !(t3.classList.contains("language-mermaid") || t3.classList.contains("language-flowchart") || t3.classList.contains("language-echarts") || t3.classList.contains("language-mindmap") || t3.classList.contains("language-plantuml") || t3.classList.contains("language-abc") || t3.classList.contains("language-graphviz") || t3.classList.contains("language-math") || t3.style.maxHeight.indexOf("px") > -1 || e3.classList.contains("vditor-preview") && n3 > 5)) {
              var l = t3.innerText;
              if (t3.classList.contains("highlight-chroma")) {
                var s = document.createElement("code");
                s.innerHTML = t3.innerHTML, s.querySelectorAll(".highlight-ln").forEach(function(e4) {
                  e4.remove();
                }), l = s.innerText;
              }
              var d = '<svg><use xlink:href="#vditor-icon-copy"></use></svg>';
              document.getElementById("vditorIconScript") || (d = '<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>');
              var c = document.createElement("div");
              c.className = "vditor-copy", c.innerHTML = '<span aria-label="' + (((i2 = window.VditorI18n) === null || i2 === void 0 ? void 0 : i2.copy) || "\u590D\u5236") + `"
onmouseover="this.setAttribute('aria-label', '` + (((o = window.VditorI18n) === null || o === void 0 ? void 0 : o.copy) || "\u590D\u5236") + `')"
class="vditor-tooltipped vditor-tooltipped__w"
onclick="this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '` + (((a = window.VditorI18n) === null || a === void 0 ? void 0 : a.copy) || "\u5DF2\u590D\u5236") + `')">` + d + "</span>";
              var u = document.createElement("textarea");
              u.value = (0, r2.X)(l), c.insertAdjacentElement("afterbegin", u), t3.before(c), t3.style.maxHeight = window.outerHeight - 40 + "px";
            }
          });
        };
      }, 383: (e2, t2, n2) => {
        n2.d(t2, { P: () => a });
        var r2 = n2(260), i = n2(228), o = n2(46), a = function(e3, t3) {
          t3 === void 0 && (t3 = r2.g.CDN);
          var n3 = o.flowchartRenderAdapter.getElements(e3);
          n3.length !== 0 && (0, i.G)(t3 + "/dist/js/flowchart.js/flowchart.min.js", "vditorFlowchartScript").then(function() {
            n3.forEach(function(e4) {
              if (e4.getAttribute("data-processed") !== "true") {
                var t4 = flowchart.parse(o.flowchartRenderAdapter.getCode(e4));
                e4.innerHTML = "", t4.drawSVG(e4), e4.setAttribute("data-processed", "true");
              }
            });
          });
        };
      }, 890: (e2, t2, n2) => {
        n2.d(t2, { v: () => a });
        var r2 = n2(260), i = n2(228), o = n2(46), a = function(e3, t3) {
          t3 === void 0 && (t3 = r2.g.CDN);
          var n3 = o.graphvizRenderAdapter.getElements(e3);
          n3.length !== 0 && (0, i.G)(t3 + "/dist/js/graphviz/viz.js", "vditorGraphVizScript").then(function() {
            n3.forEach(function(e4) {
              var t4 = o.graphvizRenderAdapter.getCode(e4);
              if (!e4.parentElement.classList.contains("vditor-wysiwyg__pre") && !e4.parentElement.classList.contains("vditor-ir__marker--pre") && e4.getAttribute("data-processed") !== "true" && t4.trim() !== "") {
                try {
                  var n4 = new Blob(["importScripts('" + document.getElementById("vditorGraphVizScript").src.replace("viz.js", "full.render.js") + "');"], { type: "application/javascript" }), r3 = (window.URL || window.webkitURL).createObjectURL(n4), i2 = new Worker(r3);
                  new Viz({ worker: i2 }).renderSVGElement(t4).then(function(t5) {
                    e4.innerHTML = t5.outerHTML;
                  }).catch(function(t5) {
                    e4.innerHTML = "graphviz render error: <br>" + t5, e4.className = "vditor-reset--error";
                  });
                } catch (e5) {
                  console.error("graphviz error", e5);
                }
                e4.setAttribute("data-processed", "true");
              }
            });
          });
        };
      }, 93: (e2, t2, n2) => {
        n2.d(t2, { s: () => a });
        var r2 = n2(260), i = n2(228), o = n2(946), a = function(e3, t3, n3) {
          t3 === void 0 && (t3 = document), n3 === void 0 && (n3 = r2.g.CDN);
          var a2 = e3.style;
          r2.g.CODE_THEME.includes(a2) || (a2 = "github");
          var l = document.getElementById("vditorHljsStyle"), s = n3 + "/dist/js/highlight.js/styles/" + a2 + ".css";
          (l && l.href !== s && l.remove(), (0, o.c)(n3 + "/dist/js/highlight.js/styles/" + a2 + ".css", "vditorHljsStyle"), e3.enable !== false) && (t3.querySelectorAll("pre > code").length !== 0 && (0, i.G)(n3 + "/dist/js/highlight.js/highlight.pack.js", "vditorHljsScript").then(function() {
            t3.querySelectorAll("pre > code").forEach(function(t4) {
              if (!t4.parentElement.classList.contains("vditor-ir__marker--pre") && !t4.parentElement.classList.contains("vditor-wysiwyg__pre") && !(t4.classList.contains("language-mermaid") || t4.classList.contains("language-flowchart") || t4.classList.contains("language-echarts") || t4.classList.contains("language-mindmap") || t4.classList.contains("language-plantuml") || t4.classList.contains("language-abc") || t4.classList.contains("language-graphviz") || t4.classList.contains("language-math")) && (hljs.highlightElement(t4), e3.lineNumber)) {
                t4.classList.add("vditor-linenumber");
                var n4 = t4.querySelector(".vditor-linenumber__temp");
                n4 || ((n4 = document.createElement("div")).className = "vditor-linenumber__temp", t4.insertAdjacentElement("beforeend", n4));
                var r3 = getComputedStyle(t4).whiteSpace, i2 = false;
                r3 !== "pre-wrap" && r3 !== "pre-line" || (i2 = true);
                var o2 = "", a3 = t4.textContent.split(/\r\n|\r|\n/g);
                a3.pop(), a3.map(function(e4) {
                  var t5 = "";
                  i2 && (n4.textContent = e4 || "\n", t5 = ' style="height:' + n4.getBoundingClientRect().height + 'px"'), o2 += "<span" + t5 + "></span>";
                }), n4.style.display = "none", o2 = '<span class="vditor-linenumber__rows">' + o2 + "</span>", t4.insertAdjacentHTML("beforeend", o2);
              }
            });
          }));
        };
      }, 323: (e2, t2, n2) => {
        n2.d(t2, { H: () => s });
        var r2 = n2(260), i = n2(228), o = n2(946), a = n2(769), l = n2(46), s = function(e3, t3) {
          var n3 = l.mathRenderAdapter.getElements(e3);
          if (n3.length !== 0) {
            var s2 = { cdn: r2.g.CDN, math: { engine: "KaTeX", inlineDigit: false, macros: {} } };
            if (t3 && t3.math && (t3.math = Object.assign({}, s2.math, t3.math)), (t3 = Object.assign({}, s2, t3)).math.engine === "KaTeX")
              (0, o.c)(t3.cdn + "/dist/js/katex/katex.min.css", "vditorKatexStyle"), (0, i.G)(t3.cdn + "/dist/js/katex/katex.min.js", "vditorKatexScript").then(function() {
                (0, i.G)(t3.cdn + "/dist/js/katex/mhchem.min.js", "vditorKatexChemScript").then(function() {
                  n3.forEach(function(e4) {
                    if (!e4.parentElement.classList.contains("vditor-wysiwyg__pre") && !e4.parentElement.classList.contains("vditor-ir__marker--pre") && !e4.getAttribute("data-math")) {
                      var t4 = (0, a.X)(l.mathRenderAdapter.getCode(e4));
                      e4.setAttribute("data-math", t4);
                      try {
                        e4.innerHTML = katex.renderToString(t4, { displayMode: e4.tagName === "DIV", output: "html" });
                      } catch (t5) {
                        e4.innerHTML = t5.message, e4.className = "language-math vditor-reset--error";
                      }
                      e4.addEventListener("copy", function(e5) {
                        e5.stopPropagation(), e5.preventDefault();
                        var t5 = e5.currentTarget.closest(".language-math");
                        e5.clipboardData.setData("text/html", t5.innerHTML), e5.clipboardData.setData("text/plain", t5.getAttribute("data-math"));
                      });
                    }
                  });
                });
              });
            else if (t3.math.engine === "MathJax") {
              window.MathJax || (window.MathJax = { loader: { paths: { mathjax: t3.cdn + "/dist/js/mathjax" } }, startup: { typeset: false }, tex: { macros: t3.math.macros } }), (0, i.J)(t3.cdn + "/dist/js/mathjax/tex-svg-full.js", "protyleMathJaxScript");
              var d = function(e4, t4) {
                var n4 = (0, a.X)(e4.textContent).trim(), r3 = window.MathJax.getMetricsFor(e4);
                r3.display = e4.tagName === "DIV", window.MathJax.tex2svgPromise(n4, r3).then(function(r4) {
                  e4.innerHTML = "", e4.setAttribute("data-math", n4), e4.append(r4), window.MathJax.startup.document.clear(), window.MathJax.startup.document.updateDocument();
                  var i2 = r4.querySelector('[data-mml-node="merror"]');
                  i2 && i2.textContent.trim() !== "" && (e4.innerHTML = i2.textContent.trim(), e4.className = "vditor-reset--error"), t4 && t4();
                });
              };
              window.MathJax.startup.promise.then(function() {
                for (var e4 = [], t4 = function(t5) {
                  var r4 = n3[t5];
                  r4.parentElement.classList.contains("vditor-wysiwyg__pre") || r4.parentElement.classList.contains("vditor-ir__marker--pre") || r4.getAttribute("data-math") || !(0, a.X)(r4.textContent).trim() || e4.push(function(e5) {
                    t5 === n3.length - 1 ? d(r4) : d(r4, e5);
                  });
                }, r3 = 0; r3 < n3.length; r3++)
                  t4(r3);
                !function(e5) {
                  if (e5.length !== 0) {
                    var t5 = 0, n4 = e5[e5.length - 1], r4 = function() {
                      var i2 = e5[t5++];
                      i2 === n4 ? i2() : i2(r4);
                    };
                    r4();
                  }
                }(e4);
              });
            }
          }
        };
      }, 207: (e2, t2, n2) => {
        n2.d(t2, { Y: () => r2 });
        var r2 = function(e3) {
          e3 && e3.querySelectorAll("a").forEach(function(e4) {
            var t3 = e4.getAttribute("href");
            t3 && (t3.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/) ? function(e5, t4) {
              e5.insertAdjacentHTML("afterend", '<video controls="controls" src="' + t4 + '"></video>'), e5.remove();
            }(e4, t3) : t3.match(/^.+.(mp3|wav|flac)$/) ? function(e5, t4) {
              e5.insertAdjacentHTML("afterend", '<audio controls="controls" src="' + t4 + '"></audio>'), e5.remove();
            }(e4, t3) : function(e5, t4) {
              var n3 = t4.match(/\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/), r3 = t4.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/), i = t4.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/), o = t4.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/), a = t4.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/), l = t4.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/), s = t4.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/), d = t4.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
              n3 && n3[1].length === 11 ? (e5.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//www.youtube.com/embed/' + n3[1] + (n3[2] ? "?start=" + n3[2] : "") + '"></iframe>'), e5.remove()) : r3 && r3[1] ? (e5.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//player.youku.com/embed/' + r3[1] + '"></iframe>'), e5.remove()) : i && i[1] ? (e5.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid=' + i[1] + '"></iframe>'), e5.remove()) : o && o[1] ? (e5.insertAdjacentHTML("afterend", '<iframe class="iframe__video"\n src="//coub.com/embed/' + o[1] + '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>'), e5.remove()) : a && a[0] ? (e5.insertAdjacentHTML("afterend", '<iframe class="iframe__video"\n src="https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(a[0]) + '"></iframe>'), e5.remove()) : l && l[2] ? (e5.insertAdjacentHTML("afterend", '<iframe class="iframe__video"\n src="https://www.dailymotion.com/embed/video/' + l[2] + '"></iframe>'), e5.remove()) : s && s[1] ? (e5.insertAdjacentHTML("afterend", '<iframe class="iframe__video"\n src="//player.bilibili.com/player.html?bvid=' + s[1] + '"></iframe>'), e5.remove()) : d && d[1] && (e5.insertAdjacentHTML("afterend", '<iframe class="iframe__video" src="//embed.ted.com/talks/' + d[1] + '"></iframe>'), e5.remove());
            }(e4, t3));
          });
        };
      }, 765: (e2, t2, n2) => {
        n2.d(t2, { i: () => a });
        var r2 = n2(260), i = n2(228), o = n2(46), a = function(e3, t3, n3) {
          t3 === void 0 && (t3 = r2.g.CDN);
          var a2 = o.mermaidRenderAdapter.getElements(e3);
          a2.length !== 0 && (0, i.G)(t3 + "/dist/js/mermaid/mermaid.min.js", "vditorMermaidScript").then(function() {
            var e4 = { altFontFamily: "sans-serif", flowchart: { htmlLabels: true, useMaxWidth: true }, fontFamily: "sans-serif", gantt: { leftPadding: 75, rightPadding: 20 }, securityLevel: "loose", sequence: { boxMargin: 8, diagramMarginX: 8, diagramMarginY: 8, useMaxWidth: true }, startOnLoad: false };
            n3 === "dark" && (e4.theme = "dark", e4.themeVariables = { activationBkgColor: "hsl(180, 1.5873015873%, 28.3529411765%)", activationBorderColor: "#81B1DB", activeTaskBkgColor: "#81B1DB", activeTaskBorderColor: "#ffffff", actorBkg: "#1f2020", actorBorder: "#81B1DB", actorLineColor: "lightgrey", actorTextColor: "lightgrey", altBackground: "hsl(0, 0%, 40%)", altSectionBkgColor: "#333", arrowheadColor: "lightgrey", background: "#333", border1: "#81B1DB", border2: "rgba(255, 255, 255, 0.25)", classText: "#e0dfdf", clusterBkg: "hsl(180, 1.5873015873%, 28.3529411765%)", clusterBorder: "rgba(255, 255, 255, 0.25)", critBkgColor: "#E83737", critBorderColor: "#E83737", darkTextColor: "hsl(28.5714285714, 17.3553719008%, 86.2745098039%)", defaultLinkColor: "lightgrey", doneTaskBkgColor: "lightgrey", doneTaskBorderColor: "grey", edgeLabelBackground: "hsl(0, 0%, 34.4117647059%)", errorBkgColor: "#a44141", errorTextColor: "#ddd", fillType0: "#1f2020", fillType1: "hsl(180, 1.5873015873%, 28.3529411765%)", fillType2: "hsl(244, 1.5873015873%, 12.3529411765%)", fillType3: "hsl(244, 1.5873015873%, 28.3529411765%)", fillType4: "hsl(116, 1.5873015873%, 12.3529411765%)", fillType5: "hsl(116, 1.5873015873%, 28.3529411765%)", fillType6: "hsl(308, 1.5873015873%, 12.3529411765%)", fillType7: "hsl(308, 1.5873015873%, 28.3529411765%)", fontFamily: '"trebuchet ms", verdana, arial', fontSize: "16px", gridColor: "lightgrey", labelBackground: "#181818", labelBoxBkgColor: "#1f2020", labelBoxBorderColor: "#81B1DB", labelColor: "#ccc", labelTextColor: "lightgrey", lineColor: "lightgrey", loopTextColor: "lightgrey", mainBkg: "#1f2020", mainContrastColor: "lightgrey", nodeBkg: "#1f2020", nodeBorder: "#81B1DB", noteBkgColor: "#fff5ad", noteBorderColor: "rgba(255, 255, 255, 0.25)", noteTextColor: "#1f2020", primaryBorderColor: "hsl(180, 0%, 2.3529411765%)", primaryColor: "#1f2020", primaryTextColor: "#e0dfdf", secondBkg: "hsl(180, 1.5873015873%, 28.3529411765%)", secondaryBorderColor: "hsl(180, 0%, 18.3529411765%)", secondaryColor: "hsl(180, 1.5873015873%, 28.3529411765%)", secondaryTextColor: "rgb(183.8476190475, 181.5523809523, 181.5523809523)", sectionBkgColor: "hsl(52.9411764706, 28.813559322%, 58.431372549%)", sectionBkgColor2: "#EAE8D9", sequenceNumberColor: "black", signalColor: "lightgrey", signalTextColor: "lightgrey", taskBkgColor: "hsl(180, 1.5873015873%, 35.3529411765%)", taskBorderColor: "#ffffff", taskTextClickableColor: "#003163", taskTextColor: "hsl(28.5714285714, 17.3553719008%, 86.2745098039%)", taskTextDarkColor: "hsl(28.5714285714, 17.3553719008%, 86.2745098039%)", taskTextLightColor: "lightgrey", taskTextOutsideColor: "lightgrey", tertiaryBorderColor: "hsl(20, 0%, 2.3529411765%)", tertiaryColor: "hsl(20, 1.5873015873%, 12.3529411765%)", tertiaryTextColor: "rgb(222.9999999999, 223.6666666666, 223.9999999999)", textColor: "#ccc", titleColor: "#F9FFFE", todayLineColor: "#DB5757" }), mermaid.initialize(e4), a2.forEach(function(e5) {
              var t4 = o.mermaidRenderAdapter.getCode(e5);
              e5.getAttribute("data-processed") !== "true" && t4.trim() !== "" && (mermaid.init(void 0, e5), e5.setAttribute("data-processed", "true"));
            });
          });
        };
      }, 894: (e2, t2, n2) => {
        n2.d(t2, { P: () => a });
        var r2 = n2(260), i = n2(228), o = n2(46), a = function(e3, t3, n3) {
          e3 === void 0 && (e3 = document), t3 === void 0 && (t3 = r2.g.CDN);
          var a2 = o.mindmapRenderAdapter.getElements(e3);
          a2.length > 0 && (0, i.G)(t3 + "/dist/js/echarts/echarts.min.js", "vditorEchartsScript").then(function() {
            a2.forEach(function(e4) {
              if (!e4.parentElement.classList.contains("vditor-wysiwyg__pre") && !e4.parentElement.classList.contains("vditor-ir__marker--pre")) {
                var t4 = o.mindmapRenderAdapter.getCode(e4);
                if (t4)
                  try {
                    if (e4.getAttribute("data-processed") === "true")
                      return;
                    echarts.init(e4, n3 === "dark" ? "dark" : void 0).setOption({ series: [{ data: [JSON.parse(decodeURIComponent(t4))], initialTreeDepth: -1, itemStyle: { borderWidth: 0, color: "#4285f4" }, label: { backgroundColor: "#f6f8fa", borderColor: "#d1d5da", borderRadius: 5, borderWidth: 0.5, color: "#586069", lineHeight: 20, offset: [-5, 0], padding: [0, 5], position: "insideRight" }, lineStyle: { color: "#d1d5da", width: 1 }, roam: true, symbol: function(e5, t5) {
                      var n4;
                      return ((n4 = t5 == null ? void 0 : t5.data) === null || n4 === void 0 ? void 0 : n4.children) ? "circle" : "path://";
                    }, type: "tree" }], tooltip: { trigger: "item", triggerOn: "mousemove" } }), e4.setAttribute("data-processed", "true");
                  } catch (t5) {
                    e4.className = "vditor-reset--error", e4.innerHTML = "mindmap render error: <br>" + t5;
                  }
              }
            });
          });
        };
      }, 198: (e2, t2, n2) => {
        n2.d(t2, { k: () => o });
        var r2 = n2(615), i = n2(323), o = function(e3, t3, n3) {
          var o2 = "", a = [];
          if (Array.from(e3.children).forEach(function(e4, t4) {
            if ((0, r2.W)(e4)) {
              if (n3) {
                var i2 = e4.id.lastIndexOf("_");
                e4.id = e4.id.substring(0, i2 === -1 ? void 0 : i2) + "_" + t4;
              }
              a.push(e4.id), o2 += e4.outerHTML.replace("<wbr>", "");
            }
          }), o2 === "")
            return t3.innerHTML = "", "";
          var l = document.createElement("div");
          if (n3)
            n3.lute.SetToC(true), n3.currentMode !== "wysiwyg" || n3.preview.element.contains(e3) ? n3.currentMode !== "ir" || n3.preview.element.contains(e3) ? l.innerHTML = n3.lute.HTML2VditorDOM("<p>[ToC]</p>" + o2) : l.innerHTML = n3.lute.SpinVditorIRDOM("<p>[ToC]</p>" + o2) : l.innerHTML = n3.lute.SpinVditorDOM("<p>[ToC]</p>" + o2), n3.lute.SetToC(n3.options.preview.markdown.toc);
          else {
            t3.classList.add("vditor-outline");
            var s = Lute.New();
            s.SetToC(true), l.innerHTML = s.HTML2VditorDOM("<p>[ToC]</p>" + o2);
          }
          var d = l.firstElementChild.querySelectorAll("li > span[data-target-id]");
          return d.forEach(function(e4, t4) {
            if (e4.nextElementSibling && e4.nextElementSibling.tagName === "UL") {
              var n4 = "<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";
              document.getElementById("vditorIconScript") || (n4 = '<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>'), e4.innerHTML = n4 + "<span>" + e4.innerHTML + "</span>";
            } else
              e4.innerHTML = "<svg></svg><span>" + e4.innerHTML + "</span>";
            e4.setAttribute("data-target-id", a[t4]);
          }), o2 = l.firstElementChild.innerHTML, d.length === 0 ? (t3.innerHTML = "", o2) : (t3.innerHTML = o2, n3 && (0, i.H)(t3, { cdn: n3.options.cdn, math: n3.options.preview.math }), t3.firstElementChild.addEventListener("click", function(r3) {
            for (var i2 = r3.target; i2 && !i2.isEqualNode(t3); ) {
              if (i2.classList.contains("vditor-outline__action")) {
                i2.classList.contains("vditor-outline__action--close") ? (i2.classList.remove("vditor-outline__action--close"), i2.parentElement.nextElementSibling.setAttribute("style", "display:block")) : (i2.classList.add("vditor-outline__action--close"), i2.parentElement.nextElementSibling.setAttribute("style", "display:none")), r3.preventDefault(), r3.stopPropagation();
                break;
              }
              if (i2.getAttribute("data-target-id")) {
                r3.preventDefault(), r3.stopPropagation();
                var o3 = document.getElementById(i2.getAttribute("data-target-id"));
                if (!o3)
                  return;
                if (n3)
                  if (n3.options.height === "auto") {
                    var a2 = o3.offsetTop + n3.element.offsetTop;
                    n3.options.toolbarConfig.pin || (a2 += n3.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, a2);
                  } else
                    n3.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, n3.element.offsetTop), n3.preview.element.contains(e3) ? e3.parentElement.scrollTop = o3.offsetTop : e3.scrollTop = o3.offsetTop;
                else
                  window.scrollTo(window.scrollX, o3.offsetTop);
                break;
              }
              i2 = i2.parentElement;
            }
          }), o2);
        };
      }, 583: (e2, t2, n2) => {
        n2.d(t2, { B: () => a });
        var r2 = n2(260), i = n2(228), o = n2(46), a = function(e3, t3) {
          e3 === void 0 && (e3 = document), t3 === void 0 && (t3 = r2.g.CDN);
          var n3 = o.plantumlRenderAdapter.getElements(e3);
          n3.length !== 0 && (0, i.G)(t3 + "/dist/js/plantuml/plantuml-encoder.min.js", "vditorPlantumlScript").then(function() {
            n3.forEach(function(e4) {
              if (!e4.parentElement.classList.contains("vditor-wysiwyg__pre") && !e4.parentElement.classList.contains("vditor-ir__marker--pre")) {
                var t4 = o.plantumlRenderAdapter.getCode(e4).trim();
                if (t4)
                  try {
                    e4.innerHTML = '<img src="http://www.plantuml.com/plantuml/svg/~1' + plantumlEncoder.encode(t4) + '">';
                  } catch (t5) {
                    e4.className = "vditor-reset--error", e4.innerHTML = "plantuml render error: <br>" + t5;
                  }
              }
            });
          });
        };
      }, 792: (e2, t2, n2) => {
        n2.d(t2, { X: () => r2 });
        var r2 = function(e3) {
          var t3 = Lute.New();
          return t3.PutEmojis(e3.emojis), t3.SetEmojiSite(e3.emojiSite), t3.SetHeadingAnchor(e3.headingAnchor), t3.SetInlineMathAllowDigitAfterOpenMarker(e3.inlineMathDigit), t3.SetAutoSpace(e3.autoSpace), t3.SetToC(e3.toc), t3.SetFootnotes(e3.footnotes), t3.SetFixTermTypo(e3.fixTermTypo), t3.SetVditorCodeBlockPreview(e3.codeBlockPreview), t3.SetVditorMathBlockPreview(e3.mathBlockPreview), t3.SetSanitize(e3.sanitize), t3.SetChineseParagraphBeginningSpace(e3.paragraphBeginningSpace), t3.SetRenderListStyle(e3.listStyle), t3.SetLinkBase(e3.linkBase), t3.SetLinkPrefix(e3.linkPrefix), t3.SetMark(e3.mark), e3.lazyLoadImage && t3.SetImageLazyLoading(e3.lazyLoadImage), t3;
        };
      }, 264: (e2, t2, n2) => {
        n2.d(t2, { E: () => r2 });
        var r2 = function(e3, t3, n3) {
          n3 === void 0 && (n3 = "classic");
          var r3 = e3.getBoundingClientRect();
          document.body.insertAdjacentHTML("beforeend", '<div class="vditor vditor-img' + (n3 === "dark" ? " vditor--dark" : "") + '">\n    <div class="vditor-img__bar">\n      <span class="vditor-img__btn" data-deg="0">\n        <svg><use xlink:href="#vditor-icon-redo"></use></svg>\n        ' + window.VditorI18n.spin + `
      </span>
      <span class="vditor-img__btn"  onclick="this.parentElement.parentElement.outerHTML = '';document.body.style.overflow = ''">
        X &nbsp;` + window.VditorI18n.close + `
      </span>
    </div>
    <div class="vditor-img__img" onclick="this.parentElement.outerHTML = '';document.body.style.overflow = ''">
      <img style="width: ` + e3.width + "px;height:" + e3.height + "px;transform: translate3d(" + r3.left + "px, " + (r3.top - 36) + 'px, 0)" src="' + e3.getAttribute("src") + '">\n    </div>\n</div>'), document.body.style.overflow = "hidden";
          var i = document.querySelector(".vditor-img img"), o = "translate3d(" + Math.max(0, window.innerWidth - e3.naturalWidth) / 2 + "px, " + Math.max(0, window.innerHeight - 36 - e3.naturalHeight) / 2 + "px, 0)";
          setTimeout(function() {
            i.setAttribute("style", "transition: transform .3s ease-in-out;transform: " + o), setTimeout(function() {
              i.parentElement.scrollTo((i.parentElement.scrollWidth - i.parentElement.clientWidth) / 2, (i.parentElement.scrollHeight - i.parentElement.clientHeight) / 2);
            }, 400);
          });
          var a = document.querySelector(".vditor-img__btn");
          a.addEventListener("click", function() {
            var t4 = parseInt(a.getAttribute("data-deg"), 10) + 90;
            t4 / 90 % 2 == 1 && e3.naturalWidth > i.parentElement.clientHeight ? i.style.transform = "translate3d(" + Math.max(0, window.innerWidth - e3.naturalWidth) / 2 + "px, " + (e3.naturalWidth / 2 - e3.naturalHeight / 2) + "px, 0) rotateZ(" + t4 + "deg)" : i.style.transform = o + " rotateZ(" + t4 + "deg)", a.setAttribute("data-deg", t4.toString()), setTimeout(function() {
              i.parentElement.scrollTo((i.parentElement.scrollWidth - i.parentElement.clientWidth) / 2, (i.parentElement.scrollHeight - i.parentElement.clientHeight) / 2);
            }, 400);
          });
        };
      }, 968: (e2, t2, n2) => {
        n2.d(t2, { Y: () => o });
        var r2 = n2(260), i = n2(946), o = function(e3, t3) {
          t3 === void 0 && (t3 = r2.g.CDN), r2.g.CODE_THEME.includes(e3) || (e3 = "github");
          var n3 = document.getElementById("vditorHljsStyle"), o2 = t3 + "/dist/js/highlight.js/styles/" + e3 + ".css";
          n3 ? n3.href !== o2 && (n3.remove(), (0, i.c)(o2, "vditorHljsStyle")) : (0, i.c)(o2, "vditorHljsStyle");
        };
      }, 958: (e2, t2, n2) => {
        n2.d(t2, { Z: () => i });
        var r2 = n2(946), i = function(e3, t3) {
          if (e3 && t3) {
            var n3 = document.getElementById("vditorContentTheme"), i2 = t3 + "/" + e3 + ".css";
            n3 ? n3.href !== i2 && (n3.remove(), (0, r2.c)(i2, "vditorContentTheme")) : (0, r2.c)(i2, "vditorContentTheme");
          }
        };
      }, 228: (e2, t2, n2) => {
        n2.d(t2, { J: () => r2, G: () => i });
        var r2 = function(e3, t3) {
          if (document.getElementById(t3))
            return false;
          var n3 = new XMLHttpRequest();
          n3.open("GET", e3, false), n3.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01"), n3.send("");
          var r3 = document.createElement("script");
          r3.type = "text/javascript", r3.text = n3.responseText, r3.id = t3, document.head.appendChild(r3);
        }, i = function(e3, t3) {
          return new Promise(function(n3, r3) {
            if (document.getElementById(t3))
              return n3(), false;
            var i2 = document.createElement("script");
            i2.src = e3, i2.async = true, document.head.appendChild(i2), i2.onload = function() {
              if (document.getElementById(t3))
                return i2.remove(), n3(), false;
              i2.id = t3, n3();
            };
          });
        };
      }, 946: (e2, t2, n2) => {
        n2.d(t2, { c: () => r2 });
        var r2 = function(e3, t3) {
          if (!document.getElementById(t3)) {
            var n3 = document.createElement("link");
            n3.id = t3, n3.rel = "stylesheet", n3.type = "text/css", n3.href = e3, document.getElementsByTagName("head")[0].appendChild(n3);
          }
        };
      }, 769: (e2, t2, n2) => {
        n2.d(t2, { X: () => r2 });
        var r2 = function(e3) {
          return e3.replace(/\u00a0/g, " ");
        };
      }, 931: (e2, t2, n2) => {
        n2.d(t2, { G6: () => r2, vU: () => i, pK: () => o, Le: () => a, yl: () => l, ns: () => s, i7: () => d });
        var r2 = function() {
          return navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") === -1;
        }, i = function() {
          return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        }, o = function() {
          try {
            return typeof localStorage != "undefined";
          } catch (e3) {
            return false;
          }
        }, a = function() {
          return navigator.userAgent.indexOf("iPhone") > -1 ? "touchstart" : "click";
        }, l = function(e3) {
          return navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? !(!e3.metaKey || e3.ctrlKey) : !(e3.metaKey || !e3.ctrlKey);
        }, s = function(e3) {
          return /Mac/.test(navigator.platform) || navigator.platform === "iPhone" ? e3.indexOf("\u21E7") > -1 && i() && (e3 = e3.replace(";", ":").replace("=", "+").replace("-", "_")) : (e3 = (e3 = e3.startsWith("\u2318") ? e3.replace("\u2318", "\u2318+") : e3.startsWith("\u2325") && e3.substr(1, 1) !== "\u2318" ? e3.replace("\u2325", "\u2325+") : e3.replace("\u21E7\u2318", "\u2318+\u21E7+").replace("\u2325\u2318", "\u2325+\u2318+")).replace("\u2318", "Ctrl").replace("\u21E7", "Shift").replace("\u2325", "Alt")).indexOf("Shift") > -1 && (e3 = e3.replace(";", ":").replace("=", "+").replace("-", "_")), e3;
        }, d = function() {
          return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        };
      }, 713: (e2, t2, n2) => {
        n2.d(t2, { JQ: () => i, E2: () => o, O9: () => a, a1: () => l, F9: () => s, lG: () => d, fb: () => c, DX: () => u });
        var r2 = n2(615), i = function(e3, t3) {
          for (var n3 = c(e3, t3), r3 = false, i2 = false; n3 && !n3.classList.contains("vditor-reset") && !i2; )
            (r3 = c(n3.parentElement, t3)) ? n3 = r3 : i2 = true;
          return n3 || false;
        }, o = function(e3, t3) {
          for (var n3 = (0, r2.S)(e3, t3), i2 = false, o2 = false; n3 && !n3.classList.contains("vditor-reset") && !o2; )
            (i2 = (0, r2.S)(n3.parentElement, t3)) ? n3 = i2 : o2 = true;
          return n3 || false;
        }, a = function(e3) {
          var t3 = o(e3, "UL"), n3 = o(e3, "OL"), r3 = t3;
          return n3 && (!t3 || t3 && n3.contains(t3)) && (r3 = n3), r3;
        }, l = function(e3, t3, n3) {
          if (!e3)
            return false;
          e3.nodeType === 3 && (e3 = e3.parentElement);
          for (var r3 = e3, i2 = false; r3 && !i2 && !r3.classList.contains("vditor-reset"); )
            r3.getAttribute(t3) === n3 ? i2 = true : r3 = r3.parentElement;
          return i2 && r3;
        }, s = function(e3) {
          if (!e3)
            return false;
          e3.nodeType === 3 && (e3 = e3.parentElement);
          var t3 = e3, n3 = false, r3 = l(e3, "data-block", "0");
          if (r3)
            return r3;
          for (; t3 && !n3 && !t3.classList.contains("vditor-reset"); )
            t3.tagName === "H1" || t3.tagName === "H2" || t3.tagName === "H3" || t3.tagName === "H4" || t3.tagName === "H5" || t3.tagName === "H6" || t3.tagName === "P" || t3.tagName === "BLOCKQUOTE" || t3.tagName === "OL" || t3.tagName === "UL" ? n3 = true : t3 = t3.parentElement;
          return n3 && t3;
        }, d = function(e3, t3) {
          if (!e3)
            return false;
          e3.nodeType === 3 && (e3 = e3.parentElement);
          for (var n3 = e3, r3 = false; n3 && !r3 && !n3.classList.contains("vditor-reset"); )
            n3.nodeName === t3 ? r3 = true : n3 = n3.parentElement;
          return r3 && n3;
        }, c = function(e3, t3) {
          if (!e3)
            return false;
          e3.nodeType === 3 && (e3 = e3.parentElement);
          for (var n3 = e3, r3 = false; n3 && !r3 && !n3.classList.contains("vditor-reset"); )
            n3.classList.contains(t3) ? r3 = true : n3 = n3.parentElement;
          return r3 && n3;
        }, u = function(e3) {
          for (; e3 && e3.lastChild; )
            e3 = e3.lastChild;
          return e3;
        };
      }, 615: (e2, t2, n2) => {
        n2.d(t2, { S: () => r2, W: () => i });
        var r2 = function(e3, t3) {
          if (!e3)
            return false;
          e3.nodeType === 3 && (e3 = e3.parentElement);
          for (var n3 = e3, r3 = false; n3 && !r3 && !n3.classList.contains("vditor-reset"); )
            n3.nodeName.indexOf(t3) === 0 ? r3 = true : n3 = n3.parentElement;
          return r3 && n3;
        }, i = function(e3) {
          var t3 = r2(e3, "H");
          return !(!t3 || t3.tagName.length !== 2 || t3.tagName === "HR") && t3;
        };
      }, 224: (e2, t2, n2) => {
        n2.d(t2, { T: () => r2 });
        var r2 = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
            e3[t3] = arguments[t3];
          for (var n3 = {}, i = function(e4) {
            for (var t4 in e4)
              e4.hasOwnProperty(t4) && (Object.prototype.toString.call(e4[t4]) === "[object Object]" ? n3[t4] = r2(n3[t4], e4[t4]) : n3[t4] = e4[t4]);
          }, o = 0; o < e3.length; o++)
            i(e3[o]);
          return n3;
        };
      }, 187: (e2, t2, n2) => {
        n2.d(t2, { zh: () => a, Ny: () => l, Gb: () => s, Hc: () => d, im: () => c, $j: () => u, ib: () => p, oC: () => m });
        var r2 = n2(260), i = n2(931), o = n2(713), a = function(e3) {
          var t3, n3 = e3[e3.currentMode].element;
          return getSelection().rangeCount > 0 && (t3 = getSelection().getRangeAt(0), n3.isEqualNode(t3.startContainer) || n3.contains(t3.startContainer)) ? t3 : e3[e3.currentMode].range ? e3[e3.currentMode].range : (n3.focus(), (t3 = n3.ownerDocument.createRange()).setStart(n3, 0), t3.collapse(true), t3);
        }, l = function(e3) {
          var t3 = window.getSelection().getRangeAt(0);
          if (!e3.contains(t3.startContainer) && !(0, o.fb)(t3.startContainer, "vditor-panel--none"))
            return { left: 0, top: 0 };
          var n3, r3 = e3.parentElement.getBoundingClientRect();
          if (t3.getClientRects().length === 0)
            if (t3.startContainer.nodeType === 3) {
              var i2 = t3.startContainer.parentElement;
              if (!(i2 && i2.getClientRects().length > 0))
                return { left: 0, top: 0 };
              n3 = i2.getClientRects()[0];
            } else {
              var a2 = t3.startContainer.children;
              if (a2[t3.startOffset] && a2[t3.startOffset].getClientRects().length > 0)
                n3 = a2[t3.startOffset].getClientRects()[0];
              else if (t3.startContainer.childNodes.length > 0) {
                var l2 = t3.cloneRange();
                t3.selectNode(t3.startContainer.childNodes[Math.max(0, t3.startOffset - 1)]), n3 = t3.getClientRects()[0], t3.setEnd(l2.endContainer, l2.endOffset), t3.setStart(l2.startContainer, l2.startOffset);
              } else
                n3 = t3.startContainer.getClientRects()[0];
              if (!n3) {
                for (var s2 = t3.startContainer.childNodes[t3.startOffset]; !s2.getClientRects || s2.getClientRects && s2.getClientRects().length === 0; )
                  s2 = s2.parentElement;
                n3 = s2.getClientRects()[0];
              }
            }
          else
            n3 = t3.getClientRects()[0];
          return { left: n3.left - r3.left, top: n3.top - r3.top };
        }, s = function(e3, t3) {
          if (!t3) {
            if (getSelection().rangeCount === 0)
              return false;
            t3 = getSelection().getRangeAt(0);
          }
          var n3 = t3.commonAncestorContainer;
          return e3.isEqualNode(n3) || e3.contains(n3);
        }, d = function(e3) {
          var t3 = window.getSelection();
          t3.removeAllRanges(), t3.addRange(e3);
        }, c = function(e3, t3, n3) {
          var r3 = { end: 0, start: 0 };
          if (!n3) {
            if (getSelection().rangeCount === 0)
              return r3;
            n3 = window.getSelection().getRangeAt(0);
          }
          if (s(t3, n3)) {
            var i2 = n3.cloneRange();
            e3.childNodes[0] && e3.childNodes[0].childNodes[0] ? i2.setStart(e3.childNodes[0].childNodes[0], 0) : i2.selectNodeContents(e3), i2.setEnd(n3.startContainer, n3.startOffset), r3.start = i2.toString().length, r3.end = r3.start + n3.toString().length;
          }
          return r3;
        }, u = function(e3, t3, n3) {
          var r3 = 0, i2 = 0, o2 = n3.childNodes[i2], a2 = false, l2 = false;
          e3 = Math.max(0, e3), t3 = Math.max(0, t3);
          var s2 = n3.ownerDocument.createRange();
          for (s2.setStart(o2 || n3, 0), s2.collapse(true); !l2 && o2; ) {
            var c2 = r3 + o2.textContent.length;
            if (!a2 && e3 >= r3 && e3 <= c2 && (e3 === 0 ? s2.setStart(o2, 0) : o2.childNodes[0].nodeType === 3 ? s2.setStart(o2.childNodes[0], e3 - r3) : o2.nextSibling ? s2.setStartBefore(o2.nextSibling) : s2.setStartAfter(o2), a2 = true, e3 === t3)) {
              l2 = true;
              break;
            }
            a2 && t3 >= r3 && t3 <= c2 && (t3 === 0 ? s2.setEnd(o2, 0) : o2.childNodes[0].nodeType === 3 ? s2.setEnd(o2.childNodes[0], t3 - r3) : o2.nextSibling ? s2.setEndBefore(o2.nextSibling) : s2.setEndAfter(o2), l2 = true), r3 = c2, o2 = n3.childNodes[++i2];
          }
          return !l2 && n3.childNodes[i2 - 1] && s2.setStartBefore(n3.childNodes[i2 - 1]), d(s2), s2;
        }, p = function(e3, t3) {
          var n3 = e3.querySelector("wbr");
          if (n3) {
            if (n3.previousElementSibling)
              if (n3.previousElementSibling.isSameNode(n3.previousSibling)) {
                if (n3.previousElementSibling.lastChild)
                  return t3.setStartBefore(n3), t3.collapse(true), d(t3), !(0, i.i7)() || n3.previousElementSibling.tagName !== "EM" && n3.previousElementSibling.tagName !== "STRONG" && n3.previousElementSibling.tagName !== "S" || (t3.insertNode(document.createTextNode(r2.g.ZWSP)), t3.collapse(false)), void n3.remove();
                t3.setStartAfter(n3.previousElementSibling);
              } else
                t3.setStart(n3.previousSibling, n3.previousSibling.textContent.length);
            else
              n3.previousSibling ? t3.setStart(n3.previousSibling, n3.previousSibling.textContent.length) : n3.nextSibling ? n3.nextSibling.nodeType === 3 ? t3.setStart(n3.nextSibling, 0) : t3.setStartBefore(n3.nextSibling) : t3.setStart(n3.parentElement, 0);
            t3.collapse(true), n3.remove(), d(t3);
          }
        }, m = function(e3, t3) {
          var n3 = document.createElement("div");
          n3.innerHTML = e3;
          var r3 = n3.querySelectorAll("p");
          r3.length === 1 && !r3[0].previousSibling && !r3[0].nextSibling && t3[t3.currentMode].element.children.length > 0 && n3.firstElementChild.tagName === "P" && (e3 = r3[0].innerHTML.trim());
          var i2 = document.createElement("div");
          i2.innerHTML = e3;
          var l2 = a(t3);
          if (l2.toString() !== "" && (t3[t3.currentMode].preventInput = true, document.execCommand("delete", false, "")), i2.firstElementChild && i2.firstElementChild.getAttribute("data-block") === "0") {
            i2.lastElementChild.insertAdjacentHTML("beforeend", "<wbr>");
            var s2 = (0, o.F9)(l2.startContainer);
            s2 ? s2.insertAdjacentHTML("afterend", i2.innerHTML) : t3[t3.currentMode].element.insertAdjacentHTML("beforeend", i2.innerHTML), p(t3[t3.currentMode].element, l2);
          } else {
            var c2 = document.createElement("template");
            c2.innerHTML = e3, l2.insertNode(c2.content.cloneNode(true)), l2.collapse(false), d(l2);
          }
        };
      } }, t = {};
      function n(r2) {
        var i = t[r2];
        if (i !== void 0)
          return i.exports;
        var o = t[r2] = { exports: {} };
        return e[r2](o, o.exports, n), o.exports;
      }
      n.d = (e2, t2) => {
        for (var r2 in t2)
          n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var r = {};
      return (() => {
        n.d(r, { default: () => Gn });
        n(157);
        var e2, t2 = n(857), i = n(260), o = n(769), a = function(e3) {
          return e3.currentMode === "sv" ? (0, o.X)((e3.sv.element.textContent + "\n").replace(/\n\n$/, "\n")) : e3.currentMode === "wysiwyg" ? e3.lute.VditorDOM2Md(e3.wysiwyg.element.innerHTML) : e3.currentMode === "ir" ? e3.lute.VditorIRDOM2Md(e3.ir.element.innerHTML) : "";
        }, l = n(228), s = function() {
          function e3() {
            this.element = document.createElement("div"), this.element.className = "vditor-devtools", this.element.innerHTML = '<div class="vditor-reset--error"></div><div style="height: 100%;"></div>';
          }
          return e3.prototype.renderEchart = function(e4) {
            var t3 = this;
            e4.devtools.element.style.display === "block" && (0, l.G)(e4.options.cdn + "/dist/js/echarts/echarts.min.js", "vditorEchartsScript").then(function() {
              t3.ASTChart || (t3.ASTChart = echarts.init(e4.devtools.element.lastElementChild));
              try {
                t3.element.lastElementChild.style.display = "block", t3.element.firstElementChild.innerHTML = "", t3.ASTChart.setOption({ series: [{ data: JSON.parse(e4.lute.RenderEChartsJSON(a(e4))), initialTreeDepth: -1, label: { align: "left", backgroundColor: "rgba(68, 77, 86, .68)", borderRadius: 3, color: "#d1d5da", fontSize: 12, lineHeight: 12, offset: [9, 12], padding: [2, 4, 2, 4], position: "top", verticalAlign: "middle" }, lineStyle: { color: "#4285f4", type: "curve", width: 1 }, orient: "vertical", roam: true, type: "tree" }], toolbox: { bottom: 25, emphasis: { iconStyle: { color: "#4285f4" } }, feature: { restore: { show: true }, saveAsImage: { show: true } }, right: 15, show: true } }), t3.ASTChart.resize();
              } catch (e5) {
                t3.element.lastElementChild.style.display = "none", t3.element.firstElementChild.innerHTML = e5;
              }
            });
          }, e3;
        }(), d = n(931), c = function(e3, t3) {
          t3.forEach(function(t4) {
            if (e3[t4]) {
              var n2 = e3[t4].children[0];
              n2 && n2.classList.contains("vditor-menu--current") && n2.classList.remove("vditor-menu--current");
            }
          });
        }, u = function(e3, t3) {
          t3.forEach(function(t4) {
            if (e3[t4]) {
              var n2 = e3[t4].children[0];
              n2 && !n2.classList.contains("vditor-menu--current") && n2.classList.add("vditor-menu--current");
            }
          });
        }, p = function(e3, t3) {
          t3.forEach(function(t4) {
            if (e3[t4]) {
              var n2 = e3[t4].children[0];
              n2 && n2.classList.contains(i.g.CLASS_MENU_DISABLED) && n2.classList.remove(i.g.CLASS_MENU_DISABLED);
            }
          });
        }, m = function(e3, t3) {
          t3.forEach(function(t4) {
            if (e3[t4]) {
              var n2 = e3[t4].children[0];
              n2 && !n2.classList.contains(i.g.CLASS_MENU_DISABLED) && n2.classList.add(i.g.CLASS_MENU_DISABLED);
            }
          });
        }, f = function(e3, t3) {
          t3.forEach(function(t4) {
            e3[t4] && e3[t4] && (e3[t4].style.display = "none");
          });
        }, h = function(e3, t3) {
          t3.forEach(function(t4) {
            e3[t4] && e3[t4] && (e3[t4].style.display = "block");
          });
        }, v = function(e3, t3, n2) {
          t3.includes("subToolbar") && (e3.toolbar.element.querySelectorAll(".vditor-hint").forEach(function(e4) {
            n2 && e4.isEqualNode(n2) || (e4.style.display = "none");
          }), e3.toolbar.elements.emoji && (e3.toolbar.elements.emoji.lastElementChild.style.display = "none")), t3.includes("hint") && (e3.hint.element.style.display = "none"), e3.wysiwyg.popover && t3.includes("popover") && (e3.wysiwyg.popover.style.display = "none");
        }, g = function(e3, t3, n2, r2) {
          n2.addEventListener((0, d.Le)(), function(r3) {
            r3.preventDefault(), r3.stopPropagation(), n2.classList.contains(i.g.CLASS_MENU_DISABLED) || (e3.toolbar.element.querySelectorAll(".vditor-hint--current").forEach(function(e4) {
              e4.classList.remove("vditor-hint--current");
            }), t3.style.display === "block" ? t3.style.display = "none" : (v(e3, ["subToolbar", "hint", "popover"], n2.parentElement.parentElement), n2.classList.contains("vditor-tooltipped") || n2.classList.add("vditor-hint--current"), t3.style.display = "block", e3.toolbar.element.getBoundingClientRect().right - n2.getBoundingClientRect().right < 250 ? t3.classList.add("vditor-panel--left") : t3.classList.remove("vditor-panel--left")));
          });
        }, y = n(713), b = n(615), w = function(e3, t3, n2, r2) {
          r2 && console.log(e3 + " - " + n2 + ": " + t3);
        }, E = n(369), k = n(726), S = n(23), C = n(383), L = n(890), T = n(93), M = n(323), A = n(765), _ = n(894), x = n(583), H = function(e3, t3) {
          if (e3)
            if (e3.parentElement.getAttribute("data-type") !== "html-block") {
              var n2 = e3.firstElementChild.className.replace("language-", "");
              n2 && (n2 === "abc" ? (0, E.Q)(e3, t3.options.cdn) : n2 === "mermaid" ? (0, A.i)(e3, t3.options.cdn, t3.options.theme) : n2 === "flowchart" ? (0, C.P)(e3, t3.options.cdn) : n2 === "echarts" ? (0, k.p)(e3, t3.options.cdn, t3.options.theme) : n2 === "mindmap" ? (0, _.P)(e3, t3.options.cdn, t3.options.theme) : n2 === "plantuml" ? (0, x.B)(e3, t3.options.cdn) : n2 === "graphviz" ? (0, L.v)(e3, t3.options.cdn) : n2 === "math" ? (0, M.H)(e3, { cdn: t3.options.cdn, math: t3.options.preview.math }) : ((0, T.s)(Object.assign({}, t3.options.preview.hljs), e3, t3.options.cdn), (0, S.O)(e3)), e3.setAttribute("data-render", "1"));
            } else
              e3.setAttribute("data-render", "1");
        }, N = n(187), D = function(e3) {
          if (e3.currentMode !== "sv") {
            var t3 = e3[e3.currentMode].element, n2 = e3.outline.render(e3);
            n2 === "" && (n2 = "[ToC]"), t3.querySelectorAll('[data-type="toc-block"]').forEach(function(t4) {
              t4.innerHTML = n2, (0, M.H)(t4, { cdn: e3.options.cdn, math: e3.options.preview.math });
            });
          }
        }, O = function(e3, t3) {
          var n2 = (0, y.lG)(e3.target, "SPAN");
          if (n2 && (0, y.fb)(n2, "vditor-toc")) {
            var r2 = t3[t3.currentMode].element.querySelector("#" + n2.getAttribute("data-target-id"));
            if (r2)
              if (t3.options.height === "auto") {
                var i2 = r2.offsetTop + t3.element.offsetTop;
                t3.options.toolbarConfig.pin || (i2 += t3.toolbar.element.offsetHeight), window.scrollTo(window.scrollX, i2);
              } else
                t3.element.offsetTop < window.scrollY && window.scrollTo(window.scrollX, t3.element.offsetTop), t3[t3.currentMode].element.scrollTop = r2.offsetTop;
          }
        }, I = function(e3, t3, n2, r2) {
          if (e3.previousElementSibling && e3.previousElementSibling.classList.contains("vditor-toc")) {
            if (n2.key === "Backspace" && (0, N.im)(e3, t3[t3.currentMode].element, r2).start === 0)
              return e3.previousElementSibling.remove(), lt(t3), true;
            if (et(t3, n2, r2, e3, e3.previousElementSibling))
              return true;
          }
          if (e3.nextElementSibling && e3.nextElementSibling.classList.contains("vditor-toc")) {
            if (n2.key === "Delete" && (0, N.im)(e3, t3[t3.currentMode].element, r2).start >= e3.textContent.trimRight().length)
              return e3.nextElementSibling.remove(), lt(t3), true;
            if ($e(t3, n2, r2, e3, e3.nextElementSibling))
              return true;
          }
          if (n2.key === "Backspace" || n2.key === "Delete") {
            var i2 = (0, y.fb)(r2.startContainer, "vditor-toc");
            if (i2)
              return i2.remove(), lt(t3), true;
          }
        }, j = function(e3, t3, n2, r2) {
          n2 === void 0 && (n2 = false);
          var o2 = (0, y.F9)(t3.startContainer);
          if (o2 && !n2 && o2.getAttribute("data-type") !== "code-block") {
            if (ot(o2.innerHTML) && o2.previousElementSibling || at(o2.innerHTML))
              return;
            for (var a2 = (0, N.im)(o2, e3.ir.element, t3).start, l2 = true, s2 = a2 - 1; s2 > o2.textContent.substr(0, a2).lastIndexOf("\n"); s2--)
              if (o2.textContent.charAt(s2) !== " " && o2.textContent.charAt(s2) !== "	") {
                l2 = false;
                break;
              }
            a2 === 0 && (l2 = false);
            var d2 = true;
            for (s2 = a2 - 1; s2 < o2.textContent.length; s2++)
              if (o2.textContent.charAt(s2) !== " " && o2.textContent.charAt(s2) !== "\n") {
                d2 = false;
                break;
              }
            if (l2)
              return;
            if (d2) {
              if (!(0, y.fb)(t3.startContainer, "vditor-ir__marker")) {
                var c2 = t3.startContainer.previousSibling;
                return void (c2 && c2.nodeType !== 3 && c2.classList.contains("vditor-ir__node--expand") && c2.classList.remove("vditor-ir__node--expand"));
              }
            }
          }
          if (e3.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach(function(e4) {
            e4.classList.remove("vditor-ir__node--expand");
          }), o2 || (o2 = e3.ir.element), !o2.querySelector("wbr")) {
            var u2 = (0, y.fb)(t3.startContainer, "vditor-ir__preview");
            u2 ? u2.previousElementSibling.insertAdjacentHTML("beforeend", "<wbr>") : t3.insertNode(document.createElement("wbr"));
          }
          o2.querySelectorAll("[style]").forEach(function(e4) {
            e4.removeAttribute("style");
          }), o2.getAttribute("data-type") === "link-ref-defs-block" && (o2 = e3.ir.element);
          var p2, m2 = o2.isEqualNode(e3.ir.element), f2 = (0, y.a1)(o2, "data-type", "footnotes-block"), h2 = "";
          if (m2)
            h2 = o2.innerHTML;
          else {
            var v2 = (0, b.S)(t3.startContainer, "BLOCKQUOTE"), g2 = (0, y.O9)(t3.startContainer);
            if (g2 && (o2 = g2), v2 && (!g2 || g2 && !v2.contains(g2)) && (o2 = v2), f2 && (o2 = f2), h2 = o2.outerHTML, o2.tagName === "UL" || o2.tagName === "OL") {
              var E2 = o2.previousElementSibling, k2 = o2.nextElementSibling;
              !E2 || E2.tagName !== "UL" && E2.tagName !== "OL" || (h2 = E2.outerHTML + h2, E2.remove()), !k2 || k2.tagName !== "UL" && k2.tagName !== "OL" || (h2 += k2.outerHTML, k2.remove()), h2 = h2.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>");
            } else
              o2.previousElementSibling && o2.previousElementSibling.textContent.replace(i.g.ZWSP, "") !== "" && r2 && r2.inputType === "insertParagraph" && (h2 = o2.previousElementSibling.outerHTML + h2, o2.previousElementSibling.remove());
            e3.ir.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(e4) {
              e4 && !o2.isEqualNode(e4) && (h2 += e4.outerHTML, e4.remove());
            }), e3.ir.element.querySelectorAll("[data-type='footnotes-block']").forEach(function(e4) {
              e4 && !o2.isEqualNode(e4) && (h2 += e4.outerHTML, e4.remove());
            });
          }
          if (w("SpinVditorIRDOM", h2, "argument", e3.options.debugger), h2 = e3.lute.SpinVditorIRDOM(h2), w("SpinVditorIRDOM", h2, "result", e3.options.debugger), m2)
            o2.innerHTML = h2;
          else if (o2.outerHTML = h2, f2) {
            var S2 = (0, y.a1)(e3.ir.element.querySelector("wbr"), "data-type", "footnotes-def");
            if (S2) {
              var C2 = S2.textContent, L2 = C2.substring(1, C2.indexOf("]:")), T2 = e3.ir.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="' + L2 + '"]');
              T2 && T2.setAttribute("aria-label", C2.substr(L2.length + 3).trim().substr(0, 24));
            }
          }
          var M2, A2 = e3.ir.element.querySelectorAll("[data-type='link-ref-defs-block']");
          A2.forEach(function(e4, t4) {
            t4 === 0 ? p2 = e4 : (p2.insertAdjacentHTML("beforeend", e4.innerHTML), e4.remove());
          }), A2.length > 0 && e3.ir.element.insertAdjacentElement("beforeend", A2[0]);
          var _2 = e3.ir.element.querySelectorAll("[data-type='footnotes-block']");
          _2.forEach(function(e4, t4) {
            t4 === 0 ? M2 = e4 : (M2.insertAdjacentHTML("beforeend", e4.innerHTML), e4.remove());
          }), _2.length > 0 && e3.ir.element.insertAdjacentElement("beforeend", _2[0]), (0, N.ib)(e3.ir.element, t3), e3.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(t4) {
            H(t4, e3);
          }), D(e3), Lt(e3, { enableAddUndoStack: true, enableHint: true, enableInput: true });
        }, R = function(e3, t3) {
          if (e3 === "")
            return false;
          if (e3.indexOf("\u21E7") === -1 && e3.indexOf("\u2318") === -1 && e3.indexOf("\u2325") === -1)
            return !((0, d.yl)(t3) || t3.altKey || t3.shiftKey || t3.code !== e3);
          if (e3 === "\u21E7Tab")
            return !((0, d.yl)(t3) || t3.altKey || !t3.shiftKey || t3.code !== "Tab");
          var n2 = e3.split("");
          if (e3.startsWith("\u2325")) {
            var r2 = n2.length === 3 ? n2[2] : n2[1];
            return !((n2.length === 3 ? !(0, d.yl)(t3) : (0, d.yl)(t3)) || !t3.altKey || t3.shiftKey || t3.code !== (/^[0-9]$/.test(r2) ? "Digit" : "Key") + r2);
          }
          e3 === "\u2318Enter" && (n2 = ["\u2318", "Enter"]);
          var i2 = n2.length > 2 && n2[0] === "\u21E7", o2 = i2 ? n2[2] : n2[1];
          return !i2 || !(0, d.vU)() && /Mac/.test(navigator.platform) || (o2 === "-" ? o2 = "_" : o2 === "=" && (o2 = "+")), !(!(0, d.yl)(t3) || t3.key.toLowerCase() !== o2.toLowerCase() || t3.altKey || !(!i2 && !t3.shiftKey || i2 && t3.shiftKey));
        }, P = function(e3, t3) {
          t3.ir.element.querySelectorAll(".vditor-ir__node--expand").forEach(function(e4) {
            e4.classList.remove("vditor-ir__node--expand");
          });
          var n2 = (0, y.JQ)(e3.startContainer, "vditor-ir__node"), r2 = !e3.collapsed && (0, y.JQ)(e3.endContainer, "vditor-ir__node");
          if (e3.collapsed || n2 && n2 === r2) {
            n2 && (n2.classList.add("vditor-ir__node--expand"), n2.classList.remove("vditor-ir__node--hidden"), (0, N.Hc)(e3));
            var i2 = function(e4) {
              var t4 = e4.startContainer;
              if (t4.nodeType === 3 && t4.nodeValue.length !== e4.startOffset)
                return false;
              for (var n3 = t4.nextSibling; n3 && n3.textContent === ""; )
                n3 = n3.nextSibling;
              if (!n3) {
                var r3 = (0, y.fb)(t4, "vditor-ir__marker");
                if (r3 && !r3.nextSibling) {
                  var i3 = t4.parentElement.parentElement.nextSibling;
                  if (i3 && i3.nodeType !== 3 && i3.classList.contains("vditor-ir__node"))
                    return i3;
                }
                return false;
              }
              return !(!n3 || n3.nodeType === 3 || !n3.classList.contains("vditor-ir__node") || n3.getAttribute("data-block")) && n3;
            }(e3);
            if (i2)
              return i2.classList.add("vditor-ir__node--expand"), void i2.classList.remove("vditor-ir__node--hidden");
            var o2 = function(e4) {
              var t4 = e4.startContainer, n3 = t4.previousSibling;
              return !(t4.nodeType !== 3 || e4.startOffset !== 0 || !n3 || n3.nodeType === 3 || !n3.classList.contains("vditor-ir__node") || n3.getAttribute("data-block")) && n3;
            }(e3);
            return o2 ? (o2.classList.add("vditor-ir__node--expand"), void o2.classList.remove("vditor-ir__node--hidden")) : void 0;
          }
        }, B = n(264), q = function(e3, t3) {
          var n2, r2 = getSelection().getRangeAt(0).cloneRange(), i2 = r2.startContainer;
          r2.startContainer.nodeType !== 3 && r2.startContainer.tagName === "DIV" && (i2 = r2.startContainer.childNodes[r2.startOffset - 1]);
          var o2 = (0, y.a1)(i2, "data-block", "0");
          if (o2 && t3 && (t3.inputType === "deleteContentBackward" || t3.data === " ")) {
            for (var a2 = (0, N.im)(o2, e3.sv.element, r2).start, l2 = true, s2 = a2 - 1; s2 > o2.textContent.substr(0, a2).lastIndexOf("\n"); s2--)
              if (o2.textContent.charAt(s2) !== " " && o2.textContent.charAt(s2) !== "	") {
                l2 = false;
                break;
              }
            if (a2 === 0 && (l2 = false), l2)
              return void De(e3);
            if (t3.inputType === "deleteContentBackward") {
              var d2 = (0, y.a1)(i2, "data-type", "code-block-open-marker") || (0, y.a1)(i2, "data-type", "code-block-close-marker");
              if (d2) {
                var c2;
                if (d2.getAttribute("data-type") === "code-block-close-marker") {
                  if (c2 = xe(i2, "code-block-open-marker"))
                    return c2.textContent = d2.textContent, void De(e3);
                }
                if (d2.getAttribute("data-type") === "code-block-open-marker") {
                  if (c2 = xe(i2, "code-block-close-marker", false))
                    return c2.textContent = d2.textContent, void De(e3);
                }
              }
              var u2 = (0, y.a1)(i2, "data-type", "math-block-open-marker");
              if (u2) {
                var p2 = u2.nextElementSibling.nextElementSibling;
                return void (p2 && p2.getAttribute("data-type") === "math-block-close-marker" && (p2.remove(), De(e3)));
              }
              o2.querySelectorAll('[data-type="code-block-open-marker"]').forEach(function(e4) {
                e4.textContent.length === 1 && e4.remove();
              }), o2.querySelectorAll('[data-type="code-block-close-marker"]').forEach(function(e4) {
                e4.textContent.length === 1 && e4.remove();
              });
              var m2 = (0, y.a1)(i2, "data-type", "heading-marker");
              if (m2 && m2.textContent.indexOf("#") === -1)
                return void De(e3);
            }
            if ((t3.data === " " || t3.inputType === "deleteContentBackward") && ((0, y.a1)(i2, "data-type", "padding") || (0, y.a1)(i2, "data-type", "li-marker") || (0, y.a1)(i2, "data-type", "task-marker") || (0, y.a1)(i2, "data-type", "blockquote-marker")))
              return void De(e3);
          }
          if (o2 && o2.textContent.trimRight() === "$$")
            De(e3);
          else {
            o2 || (o2 = e3.sv.element), ((n2 = o2.firstElementChild) === null || n2 === void 0 ? void 0 : n2.getAttribute("data-type")) === "link-ref-defs-block" && (o2 = e3.sv.element), (0, y.a1)(i2, "data-type", "footnotes-link") && (o2 = e3.sv.element), o2.textContent.indexOf(Lute.Caret) === -1 && r2.insertNode(document.createTextNode(Lute.Caret)), o2.querySelectorAll("[style]").forEach(function(e4) {
              e4.removeAttribute("style");
            }), o2.querySelectorAll("font").forEach(function(e4) {
              e4.outerHTML = e4.innerHTML;
            });
            var f2, h2 = o2.textContent, v2 = o2.isEqualNode(e3.sv.element);
            v2 ? h2 = o2.textContent : (o2.previousElementSibling && (h2 = o2.previousElementSibling.textContent + h2, o2.previousElementSibling.remove()), o2.previousElementSibling && h2.indexOf("---\n") === 0 && (h2 = o2.previousElementSibling.textContent + h2, o2.previousElementSibling.remove()), e3.sv.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(e4, t4) {
              t4 === 0 && e4 && !o2.isEqualNode(e4.parentElement) && (h2 += "\n" + e4.parentElement.textContent, e4.parentElement.remove());
            }), e3.sv.element.querySelectorAll("[data-type='footnotes-link']").forEach(function(e4, t4) {
              t4 === 0 && e4 && !o2.isEqualNode(e4.parentElement) && (h2 += "\n" + e4.parentElement.textContent, e4.parentElement.remove());
            })), h2 = He(h2, e3), v2 ? o2.innerHTML = h2 : o2.outerHTML = h2;
            var g2, b2 = e3.sv.element.querySelectorAll("[data-type='link-ref-defs-block']");
            b2.forEach(function(e4, t4) {
              t4 === 0 ? f2 = e4.parentElement : (f2.lastElementChild.remove(), f2.insertAdjacentHTML("beforeend", "" + e4.parentElement.innerHTML), e4.parentElement.remove());
            }), b2.length > 0 && e3.sv.element.insertAdjacentElement("beforeend", f2);
            var w2 = e3.sv.element.querySelectorAll("[data-type='footnotes-link']");
            w2.forEach(function(e4, t4) {
              t4 === 0 ? g2 = e4.parentElement : (g2.lastElementChild.remove(), g2.insertAdjacentHTML("beforeend", "" + e4.parentElement.innerHTML), e4.parentElement.remove());
            }), w2.length > 0 && e3.sv.element.insertAdjacentElement("beforeend", g2), (0, N.ib)(e3.sv.element, r2), Te(e3), De(e3, { enableAddUndoStack: true, enableHint: true, enableInput: true });
          }
        }, V = n(958), U = function(e3) {
          e3.options.theme === "dark" ? e3.element.classList.add("vditor--dark") : e3.element.classList.remove("vditor--dark");
        }, W = function(e3) {
          var t3 = window.innerWidth <= i.g.MOBILE_WIDTH ? 10 : 35;
          if (e3.wysiwyg.element.parentElement.style.display !== "none") {
            var n2 = (e3.wysiwyg.element.parentElement.clientWidth - e3.options.preview.maxWidth) / 2;
            e3.wysiwyg.element.style.padding = "10px " + Math.max(t3, n2) + "px";
          }
          if (e3.ir.element.parentElement.style.display !== "none") {
            n2 = (e3.ir.element.parentElement.clientWidth - e3.options.preview.maxWidth) / 2;
            e3.ir.element.style.padding = "10px " + Math.max(t3, n2) + "px";
          }
          e3.preview.element.style.display !== "block" ? e3.toolbar.element.style.paddingLeft = Math.max(5, parseInt(e3[e3.currentMode].element.style.paddingLeft || "0", 10) + (e3.options.outline.position === "left" ? e3.outline.element.offsetWidth : 0)) + "px" : e3.toolbar.element.style.paddingLeft = 5 + (e3.options.outline.position === "left" ? e3.outline.element.offsetWidth : 0) + "px";
        }, z = function(e3) {
          if (e3.options.typewriterMode) {
            var t3 = window.innerHeight;
            typeof e3.options.height == "number" && (t3 = e3.options.height, typeof e3.options.minHeight == "number" && (t3 = Math.max(t3, e3.options.minHeight)), t3 = Math.min(window.innerHeight, t3)), e3.element.classList.contains("vditor--fullscreen") && (t3 = window.innerHeight), e3[e3.currentMode].element.style.setProperty("--editor-bottom", (t3 - e3.toolbar.element.offsetHeight) / 2 + "px");
          }
        };
        function G() {
          window.removeEventListener("resize", e2);
        }
        var K, F, Z = function(t3) {
          z(t3), G(), window.addEventListener("resize", e2 = function() {
            W(t3), z(t3);
          });
          var n2 = (0, d.pK)() && localStorage.getItem(t3.options.cache.id);
          return t3.options.cache.enable && n2 || (t3.options.value ? n2 = t3.options.value : t3.originalInnerHTML ? n2 = t3.lute.HTML2Md(t3.originalInnerHTML) : t3.options.cache.enable || (n2 = "")), n2 || "";
        }, J = function(e3) {
          clearTimeout(e3[e3.currentMode].hlToolbarTimeoutId), e3[e3.currentMode].hlToolbarTimeoutId = window.setTimeout(function() {
            if (e3[e3.currentMode].element.getAttribute("contenteditable") !== "false" && (0, N.Gb)(e3[e3.currentMode].element)) {
              c(e3.toolbar.elements, i.g.EDIT_TOOLBARS), p(e3.toolbar.elements, i.g.EDIT_TOOLBARS);
              var t3 = (0, N.zh)(e3), n2 = t3.startContainer;
              t3.startContainer.nodeType === 3 && (n2 = t3.startContainer.parentElement), n2.classList.contains("vditor-reset") && (n2 = n2.childNodes[t3.startOffset]), (e3.currentMode === "sv" ? (0, y.a1)(n2, "data-type", "heading") : (0, b.W)(n2)) && u(e3.toolbar.elements, ["headings"]), (e3.currentMode === "sv" ? (0, y.a1)(n2, "data-type", "blockquote") : (0, y.lG)(n2, "BLOCKQUOTE")) && u(e3.toolbar.elements, ["quote"]), (0, y.a1)(n2, "data-type", "strong") && u(e3.toolbar.elements, ["bold"]), (0, y.a1)(n2, "data-type", "em") && u(e3.toolbar.elements, ["italic"]), (0, y.a1)(n2, "data-type", "s") && u(e3.toolbar.elements, ["strike"]), (0, y.a1)(n2, "data-type", "a") && u(e3.toolbar.elements, ["link"]);
              var r2 = (0, y.lG)(n2, "LI");
              r2 ? (r2.classList.contains("vditor-task") ? u(e3.toolbar.elements, ["check"]) : r2.parentElement.tagName === "OL" ? u(e3.toolbar.elements, ["ordered-list"]) : r2.parentElement.tagName === "UL" && u(e3.toolbar.elements, ["list"]), p(e3.toolbar.elements, ["outdent", "indent"])) : m(e3.toolbar.elements, ["outdent", "indent"]), (0, y.a1)(n2, "data-type", "code-block") && (m(e3.toolbar.elements, ["headings", "bold", "italic", "strike", "line", "quote", "list", "ordered-list", "check", "code", "inline-code", "upload", "link", "table", "record"]), u(e3.toolbar.elements, ["code"])), (0, y.a1)(n2, "data-type", "code") && (m(e3.toolbar.elements, ["headings", "bold", "italic", "strike", "line", "quote", "list", "ordered-list", "check", "code", "upload", "link", "table", "record"]), u(e3.toolbar.elements, ["inline-code"])), (0, y.a1)(n2, "data-type", "table") && m(e3.toolbar.elements, ["headings", "list", "ordered-list", "check", "line", "quote", "code", "table"]);
            }
          }, 200);
        }, X = function(e3, t3) {
          t3 === void 0 && (t3 = { enableAddUndoStack: true, enableHint: false, enableInput: true }), t3.enableHint && e3.hint.render(e3), clearTimeout(e3.wysiwyg.afterRenderTimeoutId), e3.wysiwyg.afterRenderTimeoutId = window.setTimeout(function() {
            if (!e3.wysiwyg.composingLock) {
              var n2 = a(e3);
              typeof e3.options.input == "function" && t3.enableInput && e3.options.input(n2), e3.options.counter.enable && e3.counter.render(e3, n2), e3.options.cache.enable && (0, d.pK)() && (localStorage.setItem(e3.options.cache.id, n2), e3.options.cache.after && e3.options.cache.after(n2)), e3.devtools && e3.devtools.renderEchart(e3), t3.enableAddUndoStack && e3.undo.addToUndoStack(e3);
            }
          }, e3.options.undoDelay);
        }, Y = function(e3) {
          for (var t3 = "", n2 = e3.nextSibling; n2; )
            n2.nodeType === 3 ? t3 += n2.textContent : t3 += n2.outerHTML, n2 = n2.nextSibling;
          return t3;
        }, Q = function(e3) {
          for (var t3 = "", n2 = e3.previousSibling; n2; )
            t3 = n2.nodeType === 3 ? n2.textContent + t3 : n2.outerHTML + t3, n2 = n2.previousSibling;
          return t3;
        }, $ = function(e3, t3) {
          Array.from(e3.wysiwyg.element.childNodes).find(function(n2) {
            if (n2.nodeType === 3) {
              var r2 = document.createElement("p");
              r2.setAttribute("data-block", "0"), r2.textContent = n2.textContent;
              var i2 = t3.startContainer.nodeType === 3 ? t3.startOffset : n2.textContent.length;
              return n2.parentNode.insertBefore(r2, n2), n2.remove(), t3.setStart(r2.firstChild, Math.min(r2.firstChild.textContent.length, i2)), t3.collapse(true), (0, N.Hc)(t3), true;
            }
            if (!n2.getAttribute("data-block"))
              return n2.tagName === "P" ? n2.remove() : (n2.tagName === "DIV" ? (t3.insertNode(document.createElement("wbr")), n2.outerHTML = '<p data-block="0">' + n2.innerHTML + "</p>") : n2.tagName === "BR" ? n2.outerHTML = '<p data-block="0">' + n2.outerHTML + "<wbr></p>" : (t3.insertNode(document.createElement("wbr")), n2.outerHTML = '<p data-block="0">' + n2.outerHTML + "</p>"), (0, N.ib)(e3.wysiwyg.element, t3), t3 = getSelection().getRangeAt(0)), true;
          });
        }, ee = function(e3, t3) {
          var n2 = (0, N.zh)(e3), r2 = (0, y.F9)(n2.startContainer);
          r2 || (r2 = n2.startContainer.childNodes[n2.startOffset]), r2 || e3.wysiwyg.element.children.length !== 0 || (r2 = e3.wysiwyg.element), r2 && !r2.classList.contains("vditor-wysiwyg__block") && (n2.insertNode(document.createElement("wbr")), r2.innerHTML.trim() === "<wbr>" && (r2.innerHTML = "<wbr><br>"), r2.tagName === "BLOCKQUOTE" || r2.classList.contains("vditor-reset") ? r2.innerHTML = "<" + t3 + ' data-block="0">' + r2.innerHTML.trim() + "</" + t3 + ">" : r2.outerHTML = "<" + t3 + ' data-block="0">' + r2.innerHTML.trim() + "</" + t3 + ">", (0, N.ib)(e3.wysiwyg.element, n2), D(e3));
        }, te = function(e3) {
          var t3 = getSelection().getRangeAt(0), n2 = (0, y.F9)(t3.startContainer);
          n2 || (n2 = t3.startContainer.childNodes[t3.startOffset]), n2 && (t3.insertNode(document.createElement("wbr")), n2.outerHTML = '<p data-block="0">' + n2.innerHTML + "</p>", (0, N.ib)(e3.wysiwyg.element, t3)), e3.wysiwyg.popover.style.display = "none";
        }, ne = function(e3, t3, n2) {
          n2 === void 0 && (n2 = true);
          var r2 = e3.previousElementSibling, i2 = r2.ownerDocument.createRange();
          r2.tagName === "CODE" ? (r2.style.display = "inline-block", n2 ? i2.setStart(r2.firstChild, 1) : i2.selectNodeContents(r2)) : (r2.style.display = "block", r2.firstChild.firstChild || r2.firstChild.appendChild(document.createTextNode("")), i2.selectNodeContents(r2.firstChild)), n2 ? i2.collapse(true) : i2.collapse(false), (0, N.Hc)(i2), e3.firstElementChild.classList.contains("language-mindmap") || Te(t3);
        }, re = function(e3, t3) {
          if (R("\u21E7\u2318X", t3)) {
            var n2 = e3.wysiwyg.popover.querySelector('[data-type="remove"]');
            if (n2)
              return n2.click(), t3.preventDefault(), true;
          }
        }, ie = function(e3) {
          clearTimeout(e3.wysiwyg.hlToolbarTimeoutId), e3.wysiwyg.hlToolbarTimeoutId = window.setTimeout(function() {
            if (e3.wysiwyg.element.getAttribute("contenteditable") !== "false" && (0, N.Gb)(e3.wysiwyg.element)) {
              c(e3.toolbar.elements, i.g.EDIT_TOOLBARS), p(e3.toolbar.elements, i.g.EDIT_TOOLBARS);
              var t3 = getSelection().getRangeAt(0), n2 = t3.startContainer;
              n2 = t3.startContainer.nodeType === 3 ? t3.startContainer.parentElement : n2.childNodes[t3.startOffset >= n2.childNodes.length ? n2.childNodes.length - 1 : t3.startOffset];
              var r2 = (0, y.a1)(n2, "data-type", "footnotes-block");
              if (r2)
                return e3.wysiwyg.popover.innerHTML = "", de(r2, e3), void oe(e3, r2);
              var o2 = (0, y.lG)(n2, "LI");
              o2 ? (o2.classList.contains("vditor-task") ? u(e3.toolbar.elements, ["check"]) : o2.parentElement.tagName === "OL" ? u(e3.toolbar.elements, ["ordered-list"]) : o2.parentElement.tagName === "UL" && u(e3.toolbar.elements, ["list"]), p(e3.toolbar.elements, ["outdent", "indent"])) : m(e3.toolbar.elements, ["outdent", "indent"]), (0, y.lG)(n2, "BLOCKQUOTE") && u(e3.toolbar.elements, ["quote"]), ((0, y.lG)(n2, "B") || (0, y.lG)(n2, "STRONG")) && u(e3.toolbar.elements, ["bold"]), ((0, y.lG)(n2, "I") || (0, y.lG)(n2, "EM")) && u(e3.toolbar.elements, ["italic"]), ((0, y.lG)(n2, "STRIKE") || (0, y.lG)(n2, "S")) && u(e3.toolbar.elements, ["strike"]), e3.wysiwyg.element.querySelectorAll(".vditor-comment--focus").forEach(function(e4) {
                e4.classList.remove("vditor-comment--focus");
              });
              var a2 = (0, y.fb)(n2, "vditor-comment");
              if (a2) {
                var l2 = a2.getAttribute("data-cmtids").split(" ");
                if (l2.length > 1 && a2.nextSibling.isSameNode(a2.nextElementSibling)) {
                  var s2 = a2.nextElementSibling.getAttribute("data-cmtids").split(" ");
                  l2.find(function(e4) {
                    if (s2.includes(e4))
                      return l2 = [e4], true;
                  });
                }
                e3.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(e4) {
                  e4.getAttribute("data-cmtids").indexOf(l2[0]) > -1 && e4.classList.add("vditor-comment--focus");
                });
              }
              var f2 = (0, y.lG)(n2, "A");
              f2 && u(e3.toolbar.elements, ["link"]);
              var h2 = (0, y.lG)(n2, "TABLE"), v2 = (0, b.W)(n2);
              (0, y.lG)(n2, "CODE") ? (0, y.lG)(n2, "PRE") ? (m(e3.toolbar.elements, ["headings", "bold", "italic", "strike", "line", "quote", "list", "ordered-list", "check", "code", "inline-code", "upload", "link", "table", "record"]), u(e3.toolbar.elements, ["code"])) : (m(e3.toolbar.elements, ["headings", "bold", "italic", "strike", "line", "quote", "list", "ordered-list", "check", "code", "upload", "link", "table", "record"]), u(e3.toolbar.elements, ["inline-code"])) : v2 ? (m(e3.toolbar.elements, ["bold"]), u(e3.toolbar.elements, ["headings"])) : h2 && m(e3.toolbar.elements, ["table"]);
              var g2 = (0, y.fb)(n2, "vditor-toc");
              if (g2)
                return e3.wysiwyg.popover.innerHTML = "", de(g2, e3), void oe(e3, g2);
              var w2 = (0, b.S)(n2, "BLOCKQUOTE");
              if (w2 && (e3.wysiwyg.popover.innerHTML = "", le(t3, w2, e3), se(t3, w2, e3), de(w2, e3), oe(e3, w2)), o2 && (e3.wysiwyg.popover.innerHTML = "", le(t3, o2, e3), se(t3, o2, e3), de(o2, e3), oe(e3, o2)), h2) {
                e3.options.lang, e3.options;
                e3.wysiwyg.popover.innerHTML = "";
                var E2 = function() {
                  var e4 = h2.rows.length, t4 = h2.rows[0].cells.length, n3 = parseInt(R2.value, 10) || e4, r3 = parseInt(B2.value, 10) || t4;
                  if (n3 !== e4 || t4 !== r3) {
                    if (t4 !== r3)
                      for (var i2 = r3 - t4, o3 = 0; o3 < h2.rows.length; o3++)
                        if (i2 > 0)
                          for (var a3 = 0; a3 < i2; a3++)
                            o3 === 0 ? h2.rows[o3].lastElementChild.insertAdjacentHTML("afterend", "<th> </th>") : h2.rows[o3].lastElementChild.insertAdjacentHTML("afterend", "<td> </td>");
                        else
                          for (var l3 = t4 - 1; l3 >= r3; l3--)
                            h2.rows[o3].cells[l3].remove();
                    if (e4 !== n3) {
                      var s3 = n3 - e4;
                      if (s3 > 0) {
                        for (var d2 = "<tr>", c2 = 0; c2 < r3; c2++)
                          d2 += "<td> </td>";
                        for (var u2 = 0; u2 < s3; u2++)
                          h2.querySelector("tbody") ? h2.querySelector("tbody").insertAdjacentHTML("beforeend", d2) : h2.querySelector("thead").insertAdjacentHTML("afterend", d2 + "</tr>");
                      } else
                        for (c2 = e4 - 1; c2 >= n3; c2--)
                          h2.rows[c2].remove(), h2.rows.length === 1 && h2.querySelector("tbody").remove();
                    }
                  }
                }, k2 = function(n3) {
                  it(h2, n3), n3 === "right" ? (T2.classList.remove("vditor-icon--current"), M2.classList.remove("vditor-icon--current"), A2.classList.add("vditor-icon--current")) : n3 === "center" ? (T2.classList.remove("vditor-icon--current"), A2.classList.remove("vditor-icon--current"), M2.classList.add("vditor-icon--current")) : (M2.classList.remove("vditor-icon--current"), A2.classList.remove("vditor-icon--current"), T2.classList.add("vditor-icon--current")), (0, N.Hc)(t3), X(e3);
                }, S2 = (0, y.lG)(n2, "TD"), C2 = (0, y.lG)(n2, "TH"), L2 = "left";
                S2 ? L2 = S2.getAttribute("align") || "left" : C2 && (L2 = C2.getAttribute("align") || "center");
                var T2 = document.createElement("button");
                T2.setAttribute("type", "button"), T2.setAttribute("aria-label", window.VditorI18n.alignLeft + "<" + (0, d.ns)("\u21E7\u2318L") + ">"), T2.setAttribute("data-type", "left"), T2.innerHTML = '<svg><use xlink:href="#vditor-icon-align-left"></use></svg>', T2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (L2 === "left" ? " vditor-icon--current" : ""), T2.onclick = function() {
                  k2("left");
                };
                var M2 = document.createElement("button");
                M2.setAttribute("type", "button"), M2.setAttribute("aria-label", window.VditorI18n.alignCenter + "<" + (0, d.ns)("\u21E7\u2318C") + ">"), M2.setAttribute("data-type", "center"), M2.innerHTML = '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>', M2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (L2 === "center" ? " vditor-icon--current" : ""), M2.onclick = function() {
                  k2("center");
                };
                var A2 = document.createElement("button");
                A2.setAttribute("type", "button"), A2.setAttribute("aria-label", window.VditorI18n.alignRight + "<" + (0, d.ns)("\u21E7\u2318R") + ">"), A2.setAttribute("data-type", "right"), A2.innerHTML = '<svg><use xlink:href="#vditor-icon-align-right"></use></svg>', A2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n" + (L2 === "right" ? " vditor-icon--current" : ""), A2.onclick = function() {
                  k2("right");
                };
                var _2 = document.createElement("button");
                _2.setAttribute("type", "button"), _2.setAttribute("aria-label", window.VditorI18n.insertRowBelow + "<" + (0, d.ns)("\u2318=") + ">"), _2.setAttribute("data-type", "insertRow"), _2.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-row"></use></svg>', _2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", _2.onclick = function() {
                  var n3 = getSelection().getRangeAt(0).startContainer, r3 = (0, y.lG)(n3, "TD") || (0, y.lG)(n3, "TH");
                  r3 && ut(e3, t3, r3);
                };
                var x2 = document.createElement("button");
                x2.setAttribute("type", "button"), x2.setAttribute("aria-label", window.VditorI18n.insertRowAbove + "<" + (0, d.ns)("\u21E7\u2318F") + ">"), x2.setAttribute("data-type", "insertRow"), x2.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-rowb"></use></svg>', x2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", x2.onclick = function() {
                  var n3 = getSelection().getRangeAt(0).startContainer, r3 = (0, y.lG)(n3, "TD") || (0, y.lG)(n3, "TH");
                  r3 && pt(e3, t3, r3);
                };
                var D2 = document.createElement("button");
                D2.setAttribute("type", "button"), D2.setAttribute("aria-label", window.VditorI18n.insertColumnRight + "<" + (0, d.ns)("\u21E7\u2318=") + ">"), D2.setAttribute("data-type", "insertColumn"), D2.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-column"></use></svg>', D2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", D2.onclick = function() {
                  var t4 = getSelection().getRangeAt(0).startContainer, n3 = (0, y.lG)(t4, "TD") || (0, y.lG)(t4, "TH");
                  n3 && mt(e3, h2, n3);
                };
                var O2 = document.createElement("button");
                O2.setAttribute("type", "button"), O2.setAttribute("aria-label", window.VditorI18n.insertColumnLeft + "<" + (0, d.ns)("\u21E7\u2318G") + ">"), O2.setAttribute("data-type", "insertColumn"), O2.innerHTML = '<svg><use xlink:href="#vditor-icon-insert-columnb"></use></svg>', O2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", O2.onclick = function() {
                  var t4 = getSelection().getRangeAt(0).startContainer, n3 = (0, y.lG)(t4, "TD") || (0, y.lG)(t4, "TH");
                  n3 && mt(e3, h2, n3, "beforebegin");
                };
                var I2 = document.createElement("button");
                I2.setAttribute("type", "button"), I2.setAttribute("aria-label", window.VditorI18n["delete-row"] + "<" + (0, d.ns)("\u2318-") + ">"), I2.setAttribute("data-type", "deleteRow"), I2.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-row"></use></svg>', I2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", I2.onclick = function() {
                  var n3 = getSelection().getRangeAt(0).startContainer, r3 = (0, y.lG)(n3, "TD") || (0, y.lG)(n3, "TH");
                  r3 && ft(e3, t3, r3);
                };
                var j2 = document.createElement("button");
                j2.setAttribute("type", "button"), j2.setAttribute("aria-label", window.VditorI18n["delete-column"] + "<" + (0, d.ns)("\u21E7\u2318-") + ">"), j2.setAttribute("data-type", "deleteColumn"), j2.innerHTML = '<svg><use xlink:href="#vditor-icon-delete-column"></use></svg>', j2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", j2.onclick = function() {
                  var n3 = getSelection().getRangeAt(0).startContainer, r3 = (0, y.lG)(n3, "TD") || (0, y.lG)(n3, "TH");
                  r3 && ht(e3, t3, h2, r3);
                }, (F2 = document.createElement("span")).setAttribute("aria-label", window.VditorI18n.row), F2.className = "vditor-tooltipped vditor-tooltipped__n";
                var R2 = document.createElement("input");
                F2.appendChild(R2), R2.type = "number", R2.min = "1", R2.className = "vditor-input", R2.style.width = "42px", R2.style.textAlign = "center", R2.setAttribute("placeholder", window.VditorI18n.row), R2.value = h2.rows.length.toString(), R2.oninput = function() {
                  E2();
                }, R2.onkeydown = function(t4) {
                  if (!t4.isComposing)
                    return t4.key === "Tab" ? (B2.focus(), B2.select(), void t4.preventDefault()) : void re(e3, t4);
                };
                var P2 = document.createElement("span");
                P2.setAttribute("aria-label", window.VditorI18n.column), P2.className = "vditor-tooltipped vditor-tooltipped__n";
                var B2 = document.createElement("input");
                P2.appendChild(B2), B2.type = "number", B2.min = "1", B2.className = "vditor-input", B2.style.width = "42px", B2.style.textAlign = "center", B2.setAttribute("placeholder", window.VditorI18n.column), B2.value = h2.rows[0].cells.length.toString(), B2.oninput = function() {
                  E2();
                }, B2.onkeydown = function(t4) {
                  if (!t4.isComposing)
                    return t4.key === "Tab" ? (R2.focus(), R2.select(), void t4.preventDefault()) : void re(e3, t4);
                }, le(t3, h2, e3), se(t3, h2, e3), de(h2, e3), e3.wysiwyg.popover.insertAdjacentElement("beforeend", T2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", M2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", A2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", x2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", _2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", O2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", D2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", I2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", j2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", F2), e3.wysiwyg.popover.insertAdjacentHTML("beforeend", " x "), e3.wysiwyg.popover.insertAdjacentElement("beforeend", P2), oe(e3, h2);
              }
              var q2 = (0, y.a1)(n2, "data-type", "link-ref");
              q2 && ae(e3, q2);
              var V2 = (0, y.a1)(n2, "data-type", "footnotes-ref");
              if (V2) {
                e3.options.lang, e3.options;
                e3.wysiwyg.popover.innerHTML = "", (F2 = document.createElement("span")).setAttribute("aria-label", window.VditorI18n.footnoteRef + "<" + (0, d.ns)("\u2325Enter") + ">"), F2.className = "vditor-tooltipped vditor-tooltipped__n";
                var U2 = document.createElement("input");
                F2.appendChild(U2), U2.className = "vditor-input", U2.setAttribute("placeholder", window.VditorI18n.footnoteRef + "<" + (0, d.ns)("\u2325Enter") + ">"), U2.style.width = "120px", U2.value = V2.getAttribute("data-footnotes-label"), U2.oninput = function() {
                  U2.value.trim() !== "" && V2.setAttribute("data-footnotes-label", U2.value);
                }, U2.onkeydown = function(n3) {
                  if (!n3.isComposing)
                    return (0, d.yl)(n3) || n3.shiftKey || !n3.altKey || n3.key !== "Enter" ? void re(e3, n3) : (t3.selectNodeContents(V2), t3.collapse(false), (0, N.Hc)(t3), void n3.preventDefault());
                }, de(V2, e3), e3.wysiwyg.popover.insertAdjacentElement("beforeend", F2), oe(e3, V2);
              }
              var W2 = (0, y.fb)(n2, "vditor-wysiwyg__block");
              if (W2 && W2.getAttribute("data-type").indexOf("block") > -1) {
                e3.options.lang, e3.options;
                if (e3.wysiwyg.popover.innerHTML = "", le(t3, W2, e3), se(t3, W2, e3), de(W2, e3), W2.getAttribute("data-type") === "code-block") {
                  var z2 = document.createElement("span");
                  z2.setAttribute("aria-label", window.VditorI18n.language + "<" + (0, d.ns)("\u2325Enter") + ">"), z2.className = "vditor-tooltipped vditor-tooltipped__n";
                  var G2 = document.createElement("input");
                  z2.appendChild(G2);
                  var K2 = W2.firstElementChild.firstElementChild;
                  G2.className = "vditor-input", G2.setAttribute("placeholder", window.VditorI18n.language + "<" + (0, d.ns)("\u2325Enter") + ">"), G2.value = K2.className.indexOf("language-") > -1 ? K2.className.split("-")[1].split(" ")[0] : "", G2.oninput = function(n3) {
                    G2.value.trim() !== "" ? K2.className = "language-" + G2.value : (K2.className = "", e3.hint.recentLanguage = ""), W2.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (W2.lastElementChild.innerHTML = W2.firstElementChild.innerHTML, H(W2.lastElementChild, e3)), X(e3), n3.detail === 1 && (t3.setStart(K2.firstChild, 0), t3.collapse(true), (0, N.Hc)(t3));
                  }, G2.onkeydown = function(n3) {
                    if (!n3.isComposing && !re(e3, n3)) {
                      if (n3.key === "Escape" && e3.hint.element.style.display === "block")
                        return e3.hint.element.style.display = "none", void n3.preventDefault();
                      e3.hint.select(n3, e3), (0, d.yl)(n3) || n3.shiftKey || n3.key !== "Enter" || (t3.setStart(K2.firstChild, 0), t3.collapse(true), (0, N.Hc)(t3), n3.preventDefault(), n3.stopPropagation());
                    }
                  }, G2.onkeyup = function(t4) {
                    if (!t4.isComposing && t4.key !== "Enter" && t4.key !== "ArrowUp" && t4.key !== "Escape" && t4.key !== "ArrowDown") {
                      var n3 = [], r3 = G2.value.substring(0, G2.selectionStart);
                      i.g.CODE_LANGUAGES.forEach(function(e4) {
                        e4.indexOf(r3.toLowerCase()) > -1 && n3.push({ html: e4, value: e4 });
                      }), e3.hint.genHTML(n3, r3, e3), t4.preventDefault();
                    }
                  }, e3.wysiwyg.popover.insertAdjacentElement("beforeend", z2);
                }
                oe(e3, W2);
              } else
                W2 || e3.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview").forEach(function(e4) {
                  e4.previousElementSibling.style.display = "none";
                }), W2 = void 0;
              if (v2) {
                var F2;
                e3.wysiwyg.popover.innerHTML = "", (F2 = document.createElement("span")).setAttribute("aria-label", "ID<" + (0, d.ns)("\u2325Enter") + ">"), F2.className = "vditor-tooltipped vditor-tooltipped__n";
                var Z2 = document.createElement("input");
                F2.appendChild(Z2), Z2.className = "vditor-input", Z2.setAttribute("placeholder", "ID<" + (0, d.ns)("\u2325Enter") + ">"), Z2.style.width = "120px", Z2.value = v2.getAttribute("data-id") || "", Z2.oninput = function() {
                  v2.setAttribute("data-id", Z2.value);
                }, Z2.onkeydown = function(n3) {
                  if (!n3.isComposing)
                    return (0, d.yl)(n3) || n3.shiftKey || !n3.altKey || n3.key !== "Enter" ? void re(e3, n3) : (t3.selectNodeContents(v2), t3.collapse(false), (0, N.Hc)(t3), void n3.preventDefault());
                }, le(t3, v2, e3), se(t3, v2, e3), de(v2, e3), e3.wysiwyg.popover.insertAdjacentElement("beforeend", F2), oe(e3, v2);
              }
              if (f2 && ue(e3, f2), !(w2 || o2 || h2 || W2 || f2 || q2 || V2 || v2 || g2)) {
                var J2 = (0, y.a1)(n2, "data-block", "0");
                J2 && J2.parentElement.isEqualNode(e3.wysiwyg.element) ? (e3.wysiwyg.popover.innerHTML = "", le(t3, J2, e3), se(t3, J2, e3), de(J2, e3), oe(e3, J2)) : e3.wysiwyg.popover.style.display = "none";
              }
              e3.wysiwyg.element.querySelectorAll('span[data-type="backslash"] > span').forEach(function(e4) {
                e4.style.display = "none";
              });
              var Y2 = (0, y.a1)(t3.startContainer, "data-type", "backslash");
              Y2 && (Y2.querySelector("span").style.display = "inline");
            }
          }, 200);
        }, oe = function(e3, t3) {
          var n2 = t3, r2 = (0, y.lG)(t3, "TABLE");
          r2 && (n2 = r2), e3.wysiwyg.popover.style.left = "0", e3.wysiwyg.popover.style.display = "block", e3.wysiwyg.popover.style.top = Math.max(-8, n2.offsetTop - 21 - e3.wysiwyg.element.scrollTop) + "px", e3.wysiwyg.popover.style.left = Math.min(n2.offsetLeft, e3.wysiwyg.element.clientWidth - e3.wysiwyg.popover.clientWidth) + "px", e3.wysiwyg.popover.setAttribute("data-top", (n2.offsetTop - 21).toString());
        }, ae = function(e3, t3) {
          e3.wysiwyg.popover.innerHTML = "";
          var n2 = function() {
            i2.value.trim() !== "" && (t3.tagName === "IMG" ? t3.setAttribute("alt", i2.value) : t3.textContent = i2.value), a2.value.trim() !== "" && t3.setAttribute("data-link-label", a2.value);
          }, r2 = document.createElement("span");
          r2.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty), r2.className = "vditor-tooltipped vditor-tooltipped__n";
          var i2 = document.createElement("input");
          r2.appendChild(i2), i2.className = "vditor-input", i2.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty), i2.style.width = "120px", i2.value = t3.getAttribute("alt") || t3.textContent, i2.oninput = function() {
            n2();
          }, i2.onkeydown = function(n3) {
            re(e3, n3) || ce(e3, t3, n3, a2);
          };
          var o2 = document.createElement("span");
          o2.setAttribute("aria-label", window.VditorI18n.linkRef), o2.className = "vditor-tooltipped vditor-tooltipped__n";
          var a2 = document.createElement("input");
          o2.appendChild(a2), a2.className = "vditor-input", a2.setAttribute("placeholder", window.VditorI18n.linkRef), a2.value = t3.getAttribute("data-link-label"), a2.oninput = function() {
            n2();
          }, a2.onkeydown = function(n3) {
            re(e3, n3) || ce(e3, t3, n3, i2);
          }, de(t3, e3), e3.wysiwyg.popover.insertAdjacentElement("beforeend", r2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", o2), oe(e3, t3);
        }, le = function(e3, t3, n2) {
          var r2 = t3.previousElementSibling;
          if (r2 && (t3.parentElement.isEqualNode(n2.wysiwyg.element) || t3.tagName === "LI")) {
            var i2 = document.createElement("button");
            i2.setAttribute("type", "button"), i2.setAttribute("data-type", "up"), i2.setAttribute("aria-label", window.VditorI18n.up + "<" + (0, d.ns)("\u21E7\u2318U") + ">"), i2.innerHTML = '<svg><use xlink:href="#vditor-icon-up"></use></svg>', i2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", i2.onclick = function() {
              e3.insertNode(document.createElement("wbr")), r2.insertAdjacentElement("beforebegin", t3), (0, N.ib)(n2.wysiwyg.element, e3), X(n2), ie(n2), Te(n2);
            }, n2.wysiwyg.popover.insertAdjacentElement("beforeend", i2);
          }
        }, se = function(e3, t3, n2) {
          var r2 = t3.nextElementSibling;
          if (r2 && (t3.parentElement.isEqualNode(n2.wysiwyg.element) || t3.tagName === "LI")) {
            var i2 = document.createElement("button");
            i2.setAttribute("type", "button"), i2.setAttribute("data-type", "down"), i2.setAttribute("aria-label", window.VditorI18n.down + "<" + (0, d.ns)("\u21E7\u2318D") + ">"), i2.innerHTML = '<svg><use xlink:href="#vditor-icon-down"></use></svg>', i2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", i2.onclick = function() {
              e3.insertNode(document.createElement("wbr")), r2.insertAdjacentElement("afterend", t3), (0, N.ib)(n2.wysiwyg.element, e3), X(n2), ie(n2), Te(n2);
            }, n2.wysiwyg.popover.insertAdjacentElement("beforeend", i2);
          }
        }, de = function(e3, t3) {
          var n2 = document.createElement("button");
          n2.setAttribute("type", "button"), n2.setAttribute("data-type", "remove"), n2.setAttribute("aria-label", window.VditorI18n.remove + "<" + (0, d.ns)("\u21E7\u2318X") + ">"), n2.innerHTML = '<svg><use xlink:href="#vditor-icon-trashcan"></use></svg>', n2.className = "vditor-icon vditor-tooltipped vditor-tooltipped__n", n2.onclick = function() {
            var n3 = (0, N.zh)(t3);
            n3.setStartAfter(e3), (0, N.Hc)(n3), e3.remove(), X(t3), ie(t3);
          }, t3.wysiwyg.popover.insertAdjacentElement("beforeend", n2);
        }, ce = function(e3, t3, n2, r2) {
          if (!n2.isComposing) {
            if (n2.key === "Tab")
              return r2.focus(), r2.select(), void n2.preventDefault();
            if (!(0, d.yl)(n2) && !n2.shiftKey && n2.altKey && n2.key === "Enter") {
              var o2 = (0, N.zh)(e3);
              t3.insertAdjacentHTML("afterend", i.g.ZWSP), o2.setStartAfter(t3.nextSibling), o2.collapse(true), (0, N.Hc)(o2), n2.preventDefault();
            }
          }
        }, ue = function(e3, t3) {
          e3.wysiwyg.popover.innerHTML = "";
          var n2 = function() {
            i2.value.trim() !== "" && (t3.innerHTML = i2.value), t3.setAttribute("href", a2.value), t3.setAttribute("title", s2.value), X(e3);
          };
          t3.querySelectorAll("[data-marker]").forEach(function(e4) {
            e4.removeAttribute("data-marker");
          });
          var r2 = document.createElement("span");
          r2.setAttribute("aria-label", window.VditorI18n.textIsNotEmpty), r2.className = "vditor-tooltipped vditor-tooltipped__n";
          var i2 = document.createElement("input");
          r2.appendChild(i2), i2.className = "vditor-input", i2.setAttribute("placeholder", window.VditorI18n.textIsNotEmpty), i2.style.width = "120px", i2.value = t3.innerHTML || "", i2.oninput = function() {
            n2();
          }, i2.onkeydown = function(n3) {
            re(e3, n3) || ce(e3, t3, n3, a2);
          };
          var o2 = document.createElement("span");
          o2.setAttribute("aria-label", window.VditorI18n.link), o2.className = "vditor-tooltipped vditor-tooltipped__n";
          var a2 = document.createElement("input");
          o2.appendChild(a2), a2.className = "vditor-input", a2.setAttribute("placeholder", window.VditorI18n.link), a2.value = t3.getAttribute("href") || "", a2.oninput = function() {
            n2();
          }, a2.onkeydown = function(n3) {
            re(e3, n3) || ce(e3, t3, n3, s2);
          };
          var l2 = document.createElement("span");
          l2.setAttribute("aria-label", window.VditorI18n.tooltipText), l2.className = "vditor-tooltipped vditor-tooltipped__n";
          var s2 = document.createElement("input");
          l2.appendChild(s2), s2.className = "vditor-input", s2.setAttribute("placeholder", window.VditorI18n.tooltipText), s2.style.width = "60px", s2.value = t3.getAttribute("title") || "", s2.oninput = function() {
            n2();
          }, s2.onkeydown = function(n3) {
            re(e3, n3) || ce(e3, t3, n3, i2);
          }, de(t3, e3), e3.wysiwyg.popover.insertAdjacentElement("beforeend", r2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", o2), e3.wysiwyg.popover.insertAdjacentElement("beforeend", l2), oe(e3, t3);
        }, pe = function(e3) {
          e3.currentMode === "wysiwyg" ? ie(e3) : e3.currentMode === "ir" && J(e3);
        }, me = function(e3, t3, n2) {
          n2 === void 0 && (n2 = { enableAddUndoStack: true, enableHint: false, enableInput: true });
          var r2 = e3.wysiwyg.element;
          r2.innerHTML = e3.lute.Md2VditorDOM(t3), r2.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(t4) {
            H(t4, e3), t4.previousElementSibling.setAttribute("style", "display:none");
          }), X(e3, n2);
        }, fe = function(e3, t3, n2) {
          for (var r2 = e3.startContainer.parentElement, o2 = false, a2 = "", l2 = "", s2 = function(e4) {
            var t4 = Q(e4.startContainer), n3 = Y(e4.startContainer), r3 = e4.startContainer.textContent, o3 = e4.startOffset, a3 = "", l3 = "";
            return (r3.substr(0, o3) !== "" && r3.substr(0, o3) !== i.g.ZWSP || t4) && (a3 = "" + t4 + r3.substr(0, o3)), (r3.substr(o3) !== "" && r3.substr(o3) !== i.g.ZWSP || n3) && (l3 = "" + r3.substr(o3) + n3), { afterHTML: l3, beforeHTML: a3 };
          }(e3), d2 = s2.beforeHTML, c2 = s2.afterHTML; r2 && !o2; ) {
            var u2 = r2.tagName;
            if (u2 === "STRIKE" && (u2 = "S"), u2 === "I" && (u2 = "EM"), u2 === "B" && (u2 = "STRONG"), u2 === "S" || u2 === "STRONG" || u2 === "EM") {
              var p2 = "", m2 = "", f2 = "";
              r2.parentElement.getAttribute("data-block") !== "0" && (m2 = Q(r2), f2 = Y(r2)), (d2 || m2) && (d2 = p2 = m2 + "<" + u2 + ">" + d2 + "</" + u2 + ">"), (n2 === "bold" && u2 === "STRONG" || n2 === "italic" && u2 === "EM" || n2 === "strikeThrough" && u2 === "S") && (p2 += "" + a2 + i.g.ZWSP + "<wbr>" + l2, o2 = true), (c2 || f2) && (p2 += c2 = "<" + u2 + ">" + c2 + "</" + u2 + ">" + f2), r2.parentElement.getAttribute("data-block") !== "0" ? (r2 = r2.parentElement).innerHTML = p2 : (r2.outerHTML = p2, r2 = r2.parentElement), a2 = "<" + u2 + ">" + a2, l2 = "</" + u2 + ">" + l2;
            } else
              o2 = true;
          }
          (0, N.ib)(t3.wysiwyg.element, e3);
        }, he = function(e3, t3) {
          var n2, r2 = this;
          this.element = document.createElement("div"), t3.className && (n2 = this.element.classList).add.apply(n2, t3.className.split(" "));
          var o2 = t3.hotkey ? " <" + (0, d.ns)(t3.hotkey) + ">" : "";
          t3.level === 2 && (o2 = t3.hotkey ? " &lt;" + (0, d.ns)(t3.hotkey) + "&gt;" : "");
          var a2 = t3.tip ? t3.tip + o2 : "" + window.VditorI18n[t3.name] + o2, l2 = t3.name === "upload" ? "div" : "button";
          if (t3.level === 2)
            this.element.innerHTML = "<" + l2 + ' data-type="' + t3.name + '">' + a2 + "</" + l2 + ">";
          else {
            this.element.classList.add("vditor-toolbar__item");
            var s2 = document.createElement(l2);
            s2.setAttribute("data-type", t3.name), s2.className = "vditor-tooltipped vditor-tooltipped__" + t3.tipPosition, s2.setAttribute("aria-label", a2), s2.innerHTML = t3.icon, this.element.appendChild(s2);
          }
          t3.prefix && this.element.children[0].addEventListener((0, d.Le)(), function(n3) {
            n3.preventDefault(), r2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) || (e3.currentMode === "wysiwyg" ? function(e4, t4, n4) {
              if (!(e4.wysiwyg.composingLock && n4 instanceof CustomEvent)) {
                var r3 = true, o3 = true;
                e4.wysiwyg.element.querySelector("wbr") && e4.wysiwyg.element.querySelector("wbr").remove();
                var a3 = (0, N.zh)(e4), l3 = t4.getAttribute("data-type");
                if (t4.classList.contains("vditor-menu--current"))
                  if (l3 === "strike" && (l3 = "strikeThrough"), l3 === "quote") {
                    var s3 = (0, y.lG)(a3.startContainer, "BLOCKQUOTE");
                    s3 || (s3 = a3.startContainer.childNodes[a3.startOffset]), s3 && (r3 = false, t4.classList.remove("vditor-menu--current"), a3.insertNode(document.createElement("wbr")), s3.outerHTML = s3.innerHTML.trim() === "" ? '<p data-block="0">' + s3.innerHTML + "</p>" : s3.innerHTML, (0, N.ib)(e4.wysiwyg.element, a3));
                  } else if (l3 === "inline-code") {
                    var d2 = (0, y.lG)(a3.startContainer, "CODE");
                    d2 || (d2 = a3.startContainer.childNodes[a3.startOffset]), d2 && (d2.outerHTML = d2.innerHTML.replace(i.g.ZWSP, "") + "<wbr>", (0, N.ib)(e4.wysiwyg.element, a3));
                  } else
                    l3 === "link" ? a3.collapsed ? (a3.selectNode(a3.startContainer.parentElement), document.execCommand("unlink", false, "")) : document.execCommand("unlink", false, "") : l3 === "check" || l3 === "list" || l3 === "ordered-list" ? (tt(e4, a3, l3), (0, N.ib)(e4.wysiwyg.element, a3), r3 = false, t4.classList.remove("vditor-menu--current")) : (r3 = false, t4.classList.remove("vditor-menu--current"), a3.toString() === "" ? fe(a3, e4, l3) : document.execCommand(l3, false, ""));
                else {
                  e4.wysiwyg.element.childNodes.length === 0 && (e4.wysiwyg.element.innerHTML = '<p data-block="0"><wbr></p>', (0, N.ib)(e4.wysiwyg.element, a3));
                  var u2 = (0, y.F9)(a3.startContainer);
                  if (l3 === "quote") {
                    if (u2 || (u2 = a3.startContainer.childNodes[a3.startOffset]), u2) {
                      r3 = false, t4.classList.add("vditor-menu--current"), a3.insertNode(document.createElement("wbr"));
                      var p2 = (0, y.lG)(a3.startContainer, "LI");
                      p2 && u2.contains(p2) ? p2.innerHTML = '<blockquote data-block="0">' + p2.innerHTML + "</blockquote>" : u2.outerHTML = '<blockquote data-block="0">' + u2.outerHTML + "</blockquote>", (0, N.ib)(e4.wysiwyg.element, a3);
                    }
                  } else if (l3 === "check" || l3 === "list" || l3 === "ordered-list")
                    tt(e4, a3, l3, false), (0, N.ib)(e4.wysiwyg.element, a3), r3 = false, c(e4.toolbar.elements, ["check", "list", "ordered-list"]), t4.classList.add("vditor-menu--current");
                  else if (l3 === "inline-code") {
                    if (a3.toString() === "")
                      (m2 = document.createElement("code")).textContent = i.g.ZWSP, a3.insertNode(m2), a3.setStart(m2.firstChild, 1), a3.collapse(true), (0, N.Hc)(a3);
                    else if (a3.startContainer.nodeType === 3) {
                      var m2 = document.createElement("code");
                      a3.surroundContents(m2), a3.insertNode(m2), (0, N.Hc)(a3);
                    }
                    t4.classList.add("vditor-menu--current");
                  } else if (l3 === "code")
                    (m2 = document.createElement("div")).className = "vditor-wysiwyg__block", m2.setAttribute("data-type", "code-block"), m2.setAttribute("data-block", "0"), m2.setAttribute("data-marker", "```"), a3.toString() === "" ? m2.innerHTML = "<pre><code><wbr>\n</code></pre>" : (m2.innerHTML = "<pre><code>" + a3.toString() + "<wbr></code></pre>", a3.deleteContents()), a3.insertNode(m2), u2 && (u2.outerHTML = e4.lute.SpinVditorDOM(u2.outerHTML)), (0, N.ib)(e4.wysiwyg.element, a3), e4.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(t5) {
                      H(t5, e4);
                    }), t4.classList.add("vditor-menu--disabled");
                  else if (l3 === "link") {
                    if (a3.toString() === "") {
                      var f2 = document.createElement("a");
                      f2.innerText = i.g.ZWSP, a3.insertNode(f2), a3.setStart(f2.firstChild, 1), a3.collapse(true), ue(e4, f2);
                      var h2 = e4.wysiwyg.popover.querySelector("input");
                      h2.value = "", h2.focus(), o3 = false;
                    } else {
                      (m2 = document.createElement("a")).setAttribute("href", ""), m2.innerHTML = a3.toString(), a3.surroundContents(m2), a3.insertNode(m2), (0, N.Hc)(a3), ue(e4, m2);
                      var v2 = e4.wysiwyg.popover.querySelectorAll("input");
                      v2[0].value = m2.innerText, v2[1].focus();
                    }
                    r3 = false, t4.classList.add("vditor-menu--current");
                  } else if (l3 === "table") {
                    var g2 = '<table data-block="0"><thead><tr><th>col1<wbr></th><th>col2</th><th>col3</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td></tr></tbody></table>';
                    if (a3.toString().trim() === "")
                      u2 && u2.innerHTML.trim().replace(i.g.ZWSP, "") === "" ? u2.outerHTML = g2 : document.execCommand("insertHTML", false, g2), a3.selectNode(e4.wysiwyg.element.querySelector("wbr").previousSibling), e4.wysiwyg.element.querySelector("wbr").remove(), (0, N.Hc)(a3);
                    else {
                      g2 = '<table data-block="0"><thead><tr>';
                      var b2 = a3.toString().split("\n"), w2 = b2[0].split(",").length > b2[0].split("	").length ? "," : "	";
                      b2.forEach(function(e5, t5) {
                        t5 === 0 ? (e5.split(w2).forEach(function(e6, t6) {
                          g2 += t6 === 0 ? "<th>" + e6 + "<wbr></th>" : "<th>" + e6 + "</th>";
                        }), g2 += "</tr></thead>") : (g2 += t5 === 1 ? "<tbody><tr>" : "<tr>", e5.split(w2).forEach(function(e6) {
                          g2 += "<td>" + e6 + "</td>";
                        }), g2 += "</tr>");
                      }), g2 += "</tbody></table>", document.execCommand("insertHTML", false, g2), (0, N.ib)(e4.wysiwyg.element, a3);
                    }
                    r3 = false, t4.classList.add("vditor-menu--disabled");
                  } else if (l3 === "line") {
                    if (u2) {
                      var E2 = '<hr data-block="0"><p data-block="0"><wbr>\n</p>';
                      u2.innerHTML.trim() === "" ? u2.outerHTML = E2 : u2.insertAdjacentHTML("afterend", E2), (0, N.ib)(e4.wysiwyg.element, a3);
                    }
                  } else if (r3 = false, t4.classList.add("vditor-menu--current"), l3 === "strike" && (l3 = "strikeThrough"), a3.toString() !== "" || l3 !== "bold" && l3 !== "italic" && l3 !== "strikeThrough")
                    document.execCommand(l3, false, "");
                  else {
                    var k2 = "strong";
                    l3 === "italic" ? k2 = "em" : l3 === "strikeThrough" && (k2 = "s"), (m2 = document.createElement(k2)).textContent = i.g.ZWSP, a3.insertNode(m2), m2.previousSibling && m2.previousSibling.textContent === i.g.ZWSP && (m2.previousSibling.textContent = ""), a3.setStart(m2.firstChild, 1), a3.collapse(true), (0, N.Hc)(a3);
                  }
                }
                r3 && ie(e4), o3 && X(e4);
              }
            }(e3, r2.element.children[0], n3) : e3.currentMode === "ir" ? At(e3, r2.element.children[0], t3.prefix || "", t3.suffix || "") : Ie(e3, r2.element.children[0], t3.prefix || "", t3.suffix || ""));
          });
        }, ve = (K = function(e3, t3) {
          return K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
            e4.__proto__ = t4;
          } || function(e4, t4) {
            for (var n2 in t4)
              t4.hasOwnProperty(n2) && (e4[n2] = t4[n2]);
          }, K(e3, t3);
        }, function(e3, t3) {
          function n2() {
            this.constructor = e3;
          }
          K(e3, t3), e3.prototype = t3 === null ? Object.create(t3) : (n2.prototype = t3.prototype, new n2());
        }), ge = function(e3, t3, n2) {
          var r2;
          if (typeof n2 != "string" ? (v(e3, ["subToolbar", "hint"]), n2.preventDefault(), r2 = a(e3)) : r2 = n2, e3.currentMode !== t3 || typeof n2 == "string") {
            if (e3.devtools && e3.devtools.renderEchart(e3), e3.options.preview.mode === "both" && t3 === "sv" ? e3.preview.element.style.display = "block" : e3.preview.element.style.display = "none", p(e3.toolbar.elements, i.g.EDIT_TOOLBARS), c(e3.toolbar.elements, i.g.EDIT_TOOLBARS), m(e3.toolbar.elements, ["outdent", "indent"]), t3 === "ir")
              f(e3.toolbar.elements, ["both"]), h(e3.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e3.sv.element.style.display = "none", e3.wysiwyg.element.parentElement.style.display = "none", e3.ir.element.parentElement.style.display = "block", e3.lute.SetVditorIR(true), e3.lute.SetVditorWYSIWYG(false), e3.lute.SetVditorSV(false), e3.currentMode = "ir", e3.ir.element.innerHTML = e3.lute.Md2VditorIRDOM(r2), Lt(e3, { enableAddUndoStack: true, enableHint: false, enableInput: false }), W(e3), e3.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(t4) {
                H(t4, e3);
              }), e3.ir.element.querySelectorAll(".vditor-toc").forEach(function(t4) {
                (0, M.H)(t4, { cdn: e3.options.cdn, math: e3.options.preview.math });
              });
            else if (t3 === "wysiwyg")
              f(e3.toolbar.elements, ["both"]), h(e3.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e3.sv.element.style.display = "none", e3.wysiwyg.element.parentElement.style.display = "block", e3.ir.element.parentElement.style.display = "none", e3.lute.SetVditorIR(false), e3.lute.SetVditorWYSIWYG(true), e3.lute.SetVditorSV(false), e3.currentMode = "wysiwyg", W(e3), me(e3, r2, { enableAddUndoStack: true, enableHint: false, enableInput: false }), e3.wysiwyg.element.querySelectorAll(".vditor-toc").forEach(function(t4) {
                (0, M.H)(t4, { cdn: e3.options.cdn, math: e3.options.preview.math });
              }), e3.wysiwyg.popover.style.display = "none";
            else if (t3 === "sv") {
              h(e3.toolbar.elements, ["both"]), f(e3.toolbar.elements, ["outdent", "indent", "outline", "insert-before", "insert-after"]), e3.wysiwyg.element.parentElement.style.display = "none", e3.ir.element.parentElement.style.display = "none", (e3.options.preview.mode === "both" || e3.options.preview.mode === "editor") && (e3.sv.element.style.display = "block"), e3.lute.SetVditorIR(false), e3.lute.SetVditorWYSIWYG(false), e3.lute.SetVditorSV(true), e3.currentMode = "sv";
              var o2 = He(r2, e3);
              o2 === "<div data-block='0'></div>" && (o2 = ""), e3.sv.element.innerHTML = o2, De(e3, { enableAddUndoStack: true, enableHint: false, enableInput: false }), W(e3);
            }
            e3.undo.resetIcon(e3), typeof n2 != "string" && (e3[e3.currentMode].element.focus(), pe(e3)), D(e3), z(e3), e3.toolbar.elements["edit-mode"] && (e3.toolbar.elements["edit-mode"].querySelectorAll("button").forEach(function(e4) {
              e4.classList.remove("vditor-menu--current");
            }), e3.toolbar.elements["edit-mode"].querySelector('button[data-mode="' + e3.currentMode + '"]').classList.add("vditor-menu--current")), e3.outline.toggle(e3, e3.currentMode !== "sv" && e3.options.outline.enable);
          }
        }, ye = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this, i2 = document.createElement("div");
            return i2.className = "vditor-hint" + (n2.level === 2 ? "" : " vditor-panel--arrow"), i2.innerHTML = '<button data-mode="wysiwyg">' + window.VditorI18n.wysiwyg + " &lt;" + (0, d.ns)("\u2325\u23187") + '></button>\n<button data-mode="ir">' + window.VditorI18n.instantRendering + " &lt;" + (0, d.ns)("\u2325\u23188") + '></button>\n<button data-mode="sv">' + window.VditorI18n.splitView + " &lt;" + (0, d.ns)("\u2325\u23189") + "></button>", r2.element.appendChild(i2), r2._bindEvent(t4, i2, n2), r2;
          }
          return ve(t3, e3), t3.prototype._bindEvent = function(e4, t4, n2) {
            var r2 = this.element.children[0];
            g(e4, t4, r2, n2.level), t4.children.item(0).addEventListener((0, d.Le)(), function(t5) {
              ge(e4, "wysiwyg", t5), t5.preventDefault(), t5.stopPropagation();
            }), t4.children.item(1).addEventListener((0, d.Le)(), function(t5) {
              ge(e4, "ir", t5), t5.preventDefault(), t5.stopPropagation();
            }), t4.children.item(2).addEventListener((0, d.Le)(), function(t5) {
              ge(e4, "sv", t5), t5.preventDefault(), t5.stopPropagation();
            });
          }, t3;
        }(he), be = function(e3, t3) {
          return (0, N.Gb)(e3, t3) ? getSelection().toString() : "";
        }, we = function(e3, t3) {
          t3.addEventListener("focus", function() {
            e3.options.focus && e3.options.focus(a(e3)), v(e3, ["subToolbar", "hint"]);
          });
        }, Ee = function(e3, t3) {
          t3.addEventListener("dblclick", function(t4) {
            t4.target.tagName === "IMG" && (0, B.E)(t4.target, e3.options.lang, e3.options.theme);
          });
        }, ke = function(e3, t3) {
          t3.addEventListener("blur", function(t4) {
            if (e3.currentMode === "ir") {
              var n2 = e3.ir.element.querySelector(".vditor-ir__node--expand");
              n2 && n2.classList.remove("vditor-ir__node--expand");
            } else
              e3.currentMode !== "wysiwyg" || e3.wysiwyg.selectPopover.contains(t4.relatedTarget) || e3.wysiwyg.hideComment();
            e3[e3.currentMode].range = (0, N.zh)(e3), e3.options.blur && e3.options.blur(a(e3));
          });
        }, Se = function(e3, t3) {
          t3.addEventListener("dragstart", function(e4) {
            e4.dataTransfer.setData(i.g.DROP_EDITOR, i.g.DROP_EDITOR);
          }), t3.addEventListener("drop", function(t4) {
            t4.dataTransfer.getData(i.g.DROP_EDITOR) ? lt(e3) : (t4.dataTransfer.types.includes("Files") || t4.dataTransfer.types.includes("text/html")) && St(e3, t4, { pasteCode: function(e4) {
              document.execCommand("insertHTML", false, e4);
            } });
          });
        }, Ce = function(e3, t3, n2) {
          t3.addEventListener("copy", function(t4) {
            return n2(t4, e3);
          });
        }, Le = function(e3, t3, n2) {
          t3.addEventListener("cut", function(t4) {
            n2(t4, e3), e3.options.comment.enable && e3.currentMode === "wysiwyg" && e3.wysiwyg.getComments(e3), document.execCommand("delete");
          });
        }, Te = function(e3) {
          if (e3.currentMode === "wysiwyg" && e3.options.comment.enable && e3.options.comment.adjustTop(e3.wysiwyg.getComments(e3, true)), e3.options.typewriterMode) {
            var t3 = e3[e3.currentMode].element, n2 = (0, N.Ny)(t3).top;
            typeof e3.options.height != "string" || e3.element.classList.contains("vditor--fullscreen") || window.scrollTo(window.scrollX, n2 + e3.element.offsetTop + e3.toolbar.element.offsetHeight - window.innerHeight / 2 + 10), (typeof e3.options.height == "number" || e3.element.classList.contains("vditor--fullscreen")) && (t3.scrollTop = n2 + t3.scrollTop - t3.clientHeight / 2 + 10);
          }
        }, Me = function(e3, t3) {
          t3.addEventListener("keydown", function(t4) {
            if (!(e3.options.hint.extend.length > 1 || e3.toolbar.elements.emoji) || !e3.hint.select(t4, e3)) {
              if (e3.options.comment.enable && e3.currentMode === "wysiwyg" && (t4.key === "Backspace" || R("\u2318X", t4)) && e3.wysiwyg.getComments(e3), e3.currentMode === "sv") {
                if (function(e4, t5) {
                  var n3, r2, i2, o2, a2;
                  if (e4.sv.composingLock = t5.isComposing, t5.isComposing)
                    return false;
                  if (t5.key.indexOf("Arrow") !== -1 || t5.key === "Meta" || t5.key === "Control" || t5.key === "Alt" || t5.key === "Shift" || t5.key === "CapsLock" || t5.key === "Escape" || /^F\d{1,2}$/.test(t5.key) || e4.undo.recordFirstPosition(e4, t5), t5.key !== "Enter" && t5.key !== "Tab" && t5.key !== "Backspace" && t5.key.indexOf("Arrow") === -1 && !(0, d.yl)(t5) && t5.key !== "Escape")
                    return false;
                  var l2 = (0, N.zh)(e4), s2 = l2.startContainer;
                  l2.startContainer.nodeType !== 3 && l2.startContainer.tagName === "DIV" && (s2 = l2.startContainer.childNodes[l2.startOffset - 1]);
                  var c2 = (0, y.a1)(s2, "data-type", "text"), u2 = (0, y.a1)(s2, "data-type", "blockquote-marker");
                  if (!u2 && l2.startOffset === 0 && c2 && c2.previousElementSibling && c2.previousElementSibling.getAttribute("data-type") === "blockquote-marker" && (u2 = c2.previousElementSibling), u2 && t5.key === "Enter" && !(0, d.yl)(t5) && !t5.altKey && u2.nextElementSibling.textContent.trim() === "" && (0, N.im)(u2, e4.sv.element, l2).start === u2.textContent.length)
                    return ((n3 = u2.previousElementSibling) === null || n3 === void 0 ? void 0 : n3.getAttribute("data-type")) === "padding" && u2.previousElementSibling.setAttribute("data-action", "enter-remove"), u2.remove(), De(e4), t5.preventDefault(), true;
                  var p2 = (0, y.a1)(s2, "data-type", "li-marker"), m2 = (0, y.a1)(s2, "data-type", "task-marker"), f2 = p2;
                  if (f2 || m2 && m2.nextElementSibling.getAttribute("data-type") !== "task-marker" && (f2 = m2), f2 || l2.startOffset !== 0 || !c2 || !c2.previousElementSibling || c2.previousElementSibling.getAttribute("data-type") !== "li-marker" && c2.previousElementSibling.getAttribute("data-type") !== "task-marker" || (f2 = c2.previousElementSibling), f2) {
                    var h2 = (0, N.im)(f2, e4.sv.element, l2).start, v2 = f2.getAttribute("data-type") === "task-marker", g2 = f2;
                    if (v2 && (g2 = f2.previousElementSibling.previousElementSibling.previousElementSibling), h2 === f2.textContent.length) {
                      if (t5.key === "Enter" && !(0, d.yl)(t5) && !t5.altKey && !t5.shiftKey && f2.nextElementSibling.textContent.trim() === "")
                        return ((r2 = g2.previousElementSibling) === null || r2 === void 0 ? void 0 : r2.getAttribute("data-type")) === "padding" ? (g2.previousElementSibling.remove(), q(e4)) : (v2 && (g2.remove(), f2.previousElementSibling.previousElementSibling.remove(), f2.previousElementSibling.remove()), f2.nextElementSibling.remove(), f2.remove(), De(e4)), t5.preventDefault(), true;
                      if (t5.key === "Tab")
                        return g2.insertAdjacentHTML("beforebegin", '<span data-type="padding">' + g2.textContent.replace(/\S/g, " ") + "</span>"), /^\d/.test(g2.textContent) && (g2.textContent = g2.textContent.replace(/^\d{1,}/, "1"), l2.selectNodeContents(f2.firstChild), l2.collapse(false)), q(e4), t5.preventDefault(), true;
                    }
                  }
                  if (dt(e4, l2, t5))
                    return true;
                  var w2 = (0, y.a1)(s2, "data-block", "0"), E2 = (0, b.S)(s2, "SPAN");
                  if (t5.key === "Enter" && !(0, d.yl)(t5) && !t5.altKey && !t5.shiftKey && w2) {
                    var k2 = false, S2 = w2.textContent.match(/^\n+/);
                    (0, N.im)(w2, e4.sv.element).start <= (S2 ? S2[0].length : 0) && (k2 = true);
                    var C2 = "\n";
                    if (E2) {
                      if (((i2 = E2.previousElementSibling) === null || i2 === void 0 ? void 0 : i2.getAttribute("data-action")) === "enter-remove")
                        return E2.previousElementSibling.remove(), De(e4), t5.preventDefault(), true;
                      C2 += Ne(E2);
                    }
                    return l2.insertNode(document.createTextNode(C2)), l2.collapse(false), w2 && w2.textContent.trim() !== "" && !k2 ? q(e4) : De(e4), t5.preventDefault(), true;
                  }
                  if (t5.key === "Backspace" && !(0, d.yl)(t5) && !t5.altKey && !t5.shiftKey) {
                    if (E2 && ((o2 = E2.previousElementSibling) === null || o2 === void 0 ? void 0 : o2.getAttribute("data-type")) === "newline" && (0, N.im)(E2, e4.sv.element, l2).start === 1 && E2.getAttribute("data-type").indexOf("code-block-") === -1)
                      return l2.setStart(E2, 0), l2.extractContents(), E2.textContent.trim() !== "" ? q(e4) : De(e4), t5.preventDefault(), true;
                    if (w2 && (0, N.im)(w2, e4.sv.element, l2).start === 0 && w2.previousElementSibling) {
                      l2.extractContents();
                      var L2 = w2.previousElementSibling.lastElementChild;
                      return L2.getAttribute("data-type") === "newline" && (L2.remove(), L2 = w2.previousElementSibling.lastElementChild), L2.getAttribute("data-type") !== "newline" && (L2.insertAdjacentHTML("afterend", w2.innerHTML), w2.remove()), w2.textContent.trim() === "" || ((a2 = w2.previousElementSibling) === null || a2 === void 0 ? void 0 : a2.querySelector('[data-type="code-block-open-marker"]')) ? (L2.getAttribute("data-type") !== "newline" && (l2.selectNodeContents(L2.lastChild), l2.collapse(false)), De(e4)) : q(e4), t5.preventDefault(), true;
                    }
                  }
                  return false;
                }(e3, t4))
                  return;
              } else if (e3.currentMode === "wysiwyg") {
                if (function(e4, t5) {
                  if (e4.wysiwyg.composingLock = t5.isComposing, t5.isComposing)
                    return false;
                  t5.key.indexOf("Arrow") !== -1 || t5.key === "Meta" || t5.key === "Control" || t5.key === "Alt" || t5.key === "Shift" || t5.key === "CapsLock" || t5.key === "Escape" || /^F\d{1,2}$/.test(t5.key) || e4.undo.recordFirstPosition(e4, t5);
                  var n3 = (0, N.zh)(e4), r2 = n3.startContainer;
                  if (!Ke(t5, e4, r2))
                    return false;
                  if (Fe(n3, e4, t5), Et(n3), t5.key !== "Enter" && t5.key !== "Tab" && t5.key !== "Backspace" && t5.key.indexOf("Arrow") === -1 && !(0, d.yl)(t5) && t5.key !== "Escape" && t5.key !== "Delete")
                    return false;
                  var o2 = (0, y.F9)(r2), a2 = (0, y.lG)(r2, "P");
                  if (ct(t5, e4, a2, n3))
                    return true;
                  if (st(n3, e4, a2, t5))
                    return true;
                  if (vt(e4, t5, n3))
                    return true;
                  var l2 = (0, y.fb)(r2, "vditor-wysiwyg__block");
                  if (l2) {
                    if (t5.key === "Escape" && l2.children.length === 2)
                      return e4.wysiwyg.popover.style.display = "none", l2.firstElementChild.style.display = "none", e4.wysiwyg.element.blur(), t5.preventDefault(), true;
                    if (!(0, d.yl)(t5) && !t5.shiftKey && t5.altKey && t5.key === "Enter" && l2.getAttribute("data-type") === "code-block") {
                      var s2 = e4.wysiwyg.popover.querySelector(".vditor-input");
                      return s2.focus(), s2.select(), t5.preventDefault(), true;
                    }
                    if (l2.getAttribute("data-block") === "0") {
                      if (gt(e4, t5, l2.firstElementChild, n3))
                        return true;
                      if ($e(e4, t5, n3, l2.firstElementChild, l2))
                        return true;
                      if (l2.getAttribute("data-type") !== "yaml-front-matter" && et(e4, t5, n3, l2.firstElementChild, l2))
                        return true;
                    }
                  }
                  if (yt(e4, n3, t5, a2))
                    return true;
                  var c2 = (0, y.E2)(r2, "BLOCKQUOTE");
                  if (c2 && !t5.shiftKey && t5.altKey && t5.key === "Enter") {
                    (0, d.yl)(t5) ? n3.setStartBefore(c2) : n3.setStartAfter(c2), (0, N.Hc)(n3);
                    var u2 = document.createElement("p");
                    return u2.setAttribute("data-block", "0"), u2.innerHTML = "\n", n3.insertNode(u2), n3.collapse(true), (0, N.Hc)(n3), X(e4), Te(e4), t5.preventDefault(), true;
                  }
                  var p2, m2 = (0, b.W)(r2);
                  if (m2) {
                    if (m2.tagName === "H6" && r2.textContent.length === n3.startOffset && !(0, d.yl)(t5) && !t5.shiftKey && !t5.altKey && t5.key === "Enter") {
                      var f2 = document.createElement("p");
                      return f2.textContent = "\n", f2.setAttribute("data-block", "0"), r2.parentElement.insertAdjacentElement("afterend", f2), n3.setStart(f2, 0), (0, N.Hc)(n3), X(e4), Te(e4), t5.preventDefault(), true;
                    }
                    var h2;
                    if (R("\u2318=", t5))
                      return (h2 = parseInt(m2.tagName.substr(1), 10) - 1) > 0 && (ee(e4, "h" + h2), X(e4)), t5.preventDefault(), true;
                    if (R("\u2318-", t5))
                      return (h2 = parseInt(m2.tagName.substr(1), 10) + 1) < 7 && (ee(e4, "h" + h2), X(e4)), t5.preventDefault(), true;
                    t5.key !== "Backspace" || (0, d.yl)(t5) || t5.shiftKey || t5.altKey || m2.textContent.length !== 1 || te(e4);
                  }
                  if (bt(e4, n3, t5))
                    return true;
                  if (t5.altKey && t5.key === "Enter" && !(0, d.yl)(t5) && !t5.shiftKey) {
                    var v2 = (0, y.lG)(r2, "A"), g2 = (0, y.a1)(r2, "data-type", "link-ref"), w2 = (0, y.a1)(r2, "data-type", "footnotes-ref");
                    if (v2 || g2 || w2 || m2 && m2.tagName.length === 2) {
                      var E2 = e4.wysiwyg.popover.querySelector("input");
                      E2.focus(), E2.select();
                    }
                  }
                  if (re(e4, t5))
                    return true;
                  if (R("\u21E7\u2318U", t5) && (p2 = e4.wysiwyg.popover.querySelector('[data-type="up"]')))
                    return p2.click(), t5.preventDefault(), true;
                  if (R("\u21E7\u2318D", t5) && (p2 = e4.wysiwyg.popover.querySelector('[data-type="down"]')))
                    return p2.click(), t5.preventDefault(), true;
                  if (dt(e4, n3, t5))
                    return true;
                  if (!(0, d.yl)(t5) && t5.shiftKey && !t5.altKey && t5.key === "Enter" && r2.parentElement.tagName !== "LI" && r2.parentElement.tagName !== "P")
                    return ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(r2.parentElement.tagName) ? n3.insertNode(document.createTextNode("\n" + i.g.ZWSP)) : n3.insertNode(document.createTextNode("\n")), n3.collapse(false), (0, N.Hc)(n3), X(e4), Te(e4), t5.preventDefault(), true;
                  if (t5.key === "Backspace" && !(0, d.yl)(t5) && !t5.shiftKey && !t5.altKey && n3.toString() === "") {
                    if (wt(e4, n3, t5, a2))
                      return true;
                    if (o2) {
                      if (o2.previousElementSibling && o2.previousElementSibling.classList.contains("vditor-wysiwyg__block") && o2.previousElementSibling.getAttribute("data-block") === "0" && o2.tagName !== "UL" && o2.tagName !== "OL") {
                        var k2 = (0, N.im)(o2, e4.wysiwyg.element, n3).start;
                        if (k2 === 0 && n3.startOffset === 0 || k2 === 1 && o2.innerText.startsWith(i.g.ZWSP))
                          return ne(o2.previousElementSibling.lastElementChild, e4, false), o2.innerHTML.trim().replace(i.g.ZWSP, "") === "" && (o2.remove(), X(e4)), t5.preventDefault(), true;
                      }
                      var S2 = n3.startOffset;
                      if (n3.toString() === "" && r2.nodeType === 3 && r2.textContent.charAt(S2 - 2) === "\n" && r2.textContent.charAt(S2 - 1) !== i.g.ZWSP && ["STRONG", "STRIKE", "S", "I", "EM", "B"].includes(r2.parentElement.tagName))
                        return r2.textContent = r2.textContent.substring(0, S2 - 1) + i.g.ZWSP, n3.setStart(r2, S2), n3.collapse(true), X(e4), t5.preventDefault(), true;
                      r2.textContent === i.g.ZWSP && n3.startOffset === 1 && !r2.previousSibling && function(e5) {
                        for (var t6 = e5.startContainer.nextSibling; t6 && t6.textContent === ""; )
                          t6 = t6.nextSibling;
                        return !(!t6 || t6.nodeType === 3 || t6.tagName !== "CODE" && t6.getAttribute("data-type") !== "math-inline" && t6.getAttribute("data-type") !== "html-entity" && t6.getAttribute("data-type") !== "html-inline");
                      }(n3) && (r2.textContent = ""), o2.querySelectorAll("span.vditor-wysiwyg__block[data-type='math-inline']").forEach(function(e5) {
                        e5.firstElementChild.style.display = "inline", e5.lastElementChild.style.display = "none";
                      }), o2.querySelectorAll("span.vditor-wysiwyg__block[data-type='html-entity']").forEach(function(e5) {
                        e5.firstElementChild.style.display = "inline", e5.lastElementChild.style.display = "none";
                      });
                    }
                  }
                  if ((0, d.vU)() && n3.startOffset === 1 && r2.textContent.indexOf(i.g.ZWSP) > -1 && r2.previousSibling && r2.previousSibling.nodeType !== 3 && r2.previousSibling.tagName === "CODE" && (t5.key === "Backspace" || t5.key === "ArrowLeft"))
                    return n3.selectNodeContents(r2.previousSibling), n3.collapse(false), t5.preventDefault(), true;
                  if (kt(t5, o2, n3))
                    return t5.preventDefault(), true;
                  if (Ze(n3, t5.key), t5.key === "ArrowDown") {
                    var C2 = r2.nextSibling;
                    C2 && C2.nodeType !== 3 && C2.getAttribute("data-type") === "math-inline" && n3.setStartAfter(C2);
                  }
                  return !(!o2 || !I(o2, e4, t5, n3) || (t5.preventDefault(), 0));
                }(e3, t4))
                  return;
              } else if (e3.currentMode === "ir" && function(e4, t5) {
                if (e4.ir.composingLock = t5.isComposing, t5.isComposing)
                  return false;
                t5.key.indexOf("Arrow") !== -1 || t5.key === "Meta" || t5.key === "Control" || t5.key === "Alt" || t5.key === "Shift" || t5.key === "CapsLock" || t5.key === "Escape" || /^F\d{1,2}$/.test(t5.key) || e4.undo.recordFirstPosition(e4, t5);
                var n3 = (0, N.zh)(e4), r2 = n3.startContainer;
                if (!Ke(t5, e4, r2))
                  return false;
                if (Fe(n3, e4, t5), Et(n3), t5.key !== "Enter" && t5.key !== "Tab" && t5.key !== "Backspace" && t5.key.indexOf("Arrow") === -1 && !(0, d.yl)(t5) && t5.key !== "Escape" && t5.key !== "Delete")
                  return false;
                var o2 = (0, y.a1)(r2, "data-newline", "1");
                if (!(0, d.yl)(t5) && !t5.altKey && !t5.shiftKey && t5.key === "Enter" && o2 && n3.startOffset < o2.textContent.length) {
                  var a2 = o2.previousElementSibling;
                  a2 && (n3.insertNode(document.createTextNode(a2.textContent)), n3.collapse(false));
                  var l2 = o2.nextSibling;
                  l2 && (n3.insertNode(document.createTextNode(l2.textContent)), n3.collapse(true));
                }
                var s2 = (0, y.lG)(r2, "P");
                if (ct(t5, e4, s2, n3))
                  return true;
                if (st(n3, e4, s2, t5))
                  return true;
                if (yt(e4, n3, t5, s2))
                  return true;
                var c2 = (0, y.fb)(r2, "vditor-ir__marker--pre");
                if (c2 && c2.tagName === "PRE") {
                  var u2 = c2.firstChild;
                  if (gt(e4, t5, c2, n3))
                    return true;
                  if ((u2.getAttribute("data-type") === "math-block" || u2.getAttribute("data-type") === "html-block") && et(e4, t5, n3, u2, c2.parentElement))
                    return true;
                  if ($e(e4, t5, n3, u2, c2.parentElement))
                    return true;
                }
                var p2 = (0, y.a1)(r2, "data-type", "code-block-info");
                if (p2) {
                  if (t5.key === "Enter" || t5.key === "Tab")
                    return n3.selectNodeContents(p2.nextElementSibling.firstChild), n3.collapse(true), t5.preventDefault(), v(e4, ["hint"]), true;
                  if (t5.key === "Backspace") {
                    var m2 = (0, N.im)(p2, e4.ir.element).start;
                    m2 === 1 && n3.setStart(r2, 0), m2 === 2 && (e4.hint.recentLanguage = "");
                  }
                  if (et(e4, t5, n3, p2, p2.parentElement))
                    return v(e4, ["hint"]), true;
                }
                var f2 = (0, y.lG)(r2, "TD") || (0, y.lG)(r2, "TH");
                if (t5.key.indexOf("Arrow") > -1 && f2) {
                  var h2 = Xe(f2);
                  if (h2 && et(e4, t5, n3, f2, h2))
                    return true;
                  var g2 = Ye(f2);
                  if (g2 && $e(e4, t5, n3, f2, g2))
                    return true;
                }
                if (vt(e4, t5, n3))
                  return true;
                if (bt(e4, n3, t5))
                  return true;
                if (dt(e4, n3, t5))
                  return true;
                var w2 = (0, b.W)(r2);
                if (w2) {
                  var E2;
                  if (R("\u2318=", t5))
                    return (E2 = w2.querySelector(".vditor-ir__marker--heading")) && E2.textContent.trim().length > 1 && Tt(e4, E2.textContent.substr(1)), t5.preventDefault(), true;
                  if (R("\u2318-", t5))
                    return (E2 = w2.querySelector(".vditor-ir__marker--heading")) && E2.textContent.trim().length < 6 && Tt(e4, E2.textContent.trim() + "# "), t5.preventDefault(), true;
                }
                var k2 = (0, y.F9)(r2);
                if (t5.key === "Backspace" && !(0, d.yl)(t5) && !t5.shiftKey && !t5.altKey && n3.toString() === "") {
                  if (wt(e4, n3, t5, s2))
                    return true;
                  if (k2 && k2.previousElementSibling && k2.tagName !== "UL" && k2.tagName !== "OL" && (k2.previousElementSibling.getAttribute("data-type") === "code-block" || k2.previousElementSibling.getAttribute("data-type") === "math-block")) {
                    var S2 = (0, N.im)(k2, e4.ir.element, n3).start;
                    if (S2 === 0 || S2 === 1 && k2.innerText.startsWith(i.g.ZWSP))
                      return n3.selectNodeContents(k2.previousElementSibling.querySelector(".vditor-ir__marker--pre code")), n3.collapse(false), P(n3, e4), k2.textContent.trim().replace(i.g.ZWSP, "") === "" && (k2.remove(), Lt(e4)), t5.preventDefault(), true;
                  }
                  if (w2) {
                    var C2 = w2.firstElementChild.textContent.length;
                    (0, N.im)(w2, e4.ir.element).start === C2 && (n3.setStart(w2.firstElementChild.firstChild, C2 - 1), n3.collapse(true), (0, N.Hc)(n3));
                  }
                }
                return !((t5.key !== "ArrowUp" && t5.key !== "ArrowDown" || !k2 || (k2.querySelectorAll(".vditor-ir__node").forEach(function(e5) {
                  e5.contains(r2) || e5.classList.add("vditor-ir__node--hidden");
                }), !kt(t5, k2, n3))) && (Ze(n3, t5.key), !k2 || !I(k2, e4, t5, n3) || (t5.preventDefault(), 0)));
              }(e3, t4))
                return;
              if (e3.options.ctrlEnter && R("\u2318Enter", t4))
                return e3.options.ctrlEnter(a(e3)), void t4.preventDefault();
              if (R("\u2318Z", t4) && !e3.toolbar.elements.undo)
                return e3.undo.undo(e3), void t4.preventDefault();
              if (R("\u2318Y", t4) && !e3.toolbar.elements.redo)
                return e3.undo.redo(e3), void t4.preventDefault();
              if (t4.key === "Escape")
                return e3.hint.element.style.display === "block" ? e3.hint.element.style.display = "none" : e3.options.esc && !t4.isComposing && e3.options.esc(a(e3)), void t4.preventDefault();
              if ((0, d.yl)(t4) && t4.altKey && !t4.shiftKey && /^Digit[1-6]$/.test(t4.code)) {
                if (e3.currentMode === "wysiwyg") {
                  var n2 = t4.code.replace("Digit", "H");
                  (0, y.lG)(getSelection().getRangeAt(0).startContainer, n2) ? te(e3) : ee(e3, n2), X(e3);
                } else
                  e3.currentMode === "sv" ? Oe(e3, "#".repeat(parseInt(t4.code.replace("Digit", ""), 10)) + " ") : e3.currentMode === "ir" && Tt(e3, "#".repeat(parseInt(t4.code.replace("Digit", ""), 10)) + " ");
                return t4.preventDefault(), true;
              }
              if ((0, d.yl)(t4) && t4.altKey && !t4.shiftKey && /^Digit[7-9]$/.test(t4.code))
                return t4.code === "Digit7" ? ge(e3, "wysiwyg", t4) : t4.code === "Digit8" ? ge(e3, "ir", t4) : t4.code === "Digit9" && ge(e3, "sv", t4), true;
              e3.options.toolbar.find(function(n3) {
                return !n3.hotkey || n3.toolbar ? !!n3.toolbar && !!n3.toolbar.find(function(n4) {
                  return !!n4.hotkey && (R(n4.hotkey, t4) ? (e3.toolbar.elements[n4.name].children[0].dispatchEvent(new CustomEvent((0, d.Le)())), t4.preventDefault(), true) : void 0);
                }) : R(n3.hotkey, t4) ? (e3.toolbar.elements[n3.name].children[0].dispatchEvent(new CustomEvent((0, d.Le)())), t4.preventDefault(), true) : void 0;
              });
            }
          });
        }, Ae = function(e3, t3) {
          t3.addEventListener("selectstart", function(n2) {
            t3.onmouseup = function() {
              setTimeout(function() {
                var t4 = be(e3[e3.currentMode].element);
                t4.trim() ? (e3.currentMode === "wysiwyg" && e3.options.comment.enable && ((0, y.a1)(n2.target, "data-type", "footnotes-block") || (0, y.a1)(n2.target, "data-type", "link-ref-defs-block") ? e3.wysiwyg.hideComment() : e3.wysiwyg.showComment()), e3.options.select && e3.options.select(t4)) : e3.currentMode === "wysiwyg" && e3.options.comment.enable && e3.wysiwyg.hideComment();
              });
            };
          });
        }, _e = function(e3, t3) {
          var n2 = (0, N.zh)(e3);
          n2.extractContents(), n2.insertNode(document.createTextNode(Lute.Caret)), n2.insertNode(document.createTextNode(t3));
          var r2 = (0, y.a1)(n2.startContainer, "data-block", "0");
          r2 || (r2 = e3.sv.element);
          var i2 = "<div data-block='0'>" + e3.lute.Md2VditorSVDOM(r2.textContent).replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, '<span data-type="newline"><br /><span style="display: none">\n</span></span><span data-type="newline"><br /><span style="display: none">\n</span></span></div><div data-block="0"><') + "</div>";
          r2.isEqualNode(e3.sv.element) ? r2.innerHTML = i2 : r2.outerHTML = i2, (0, N.ib)(e3.sv.element, n2), Te(e3);
        }, xe = function(e3, t3, n2) {
          n2 === void 0 && (n2 = true);
          var r2 = e3;
          for (r2.nodeType === 3 && (r2 = r2.parentElement); r2; ) {
            if (r2.getAttribute("data-type") === t3)
              return r2;
            r2 = n2 ? r2.previousElementSibling : r2.nextElementSibling;
          }
          return false;
        }, He = function(e3, t3) {
          return w("SpinVditorSVDOM", e3, "argument", t3.options.debugger), e3 = "<div data-block='0'>" + t3.lute.SpinVditorSVDOM(e3).replace(/<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g, '<span data-type="newline"><br /><span style="display: none">\n</span></span><span data-type="newline"><br /><span style="display: none">\n</span></span></div><div data-block="0"><') + "</div>", w("SpinVditorSVDOM", e3, "result", t3.options.debugger), e3;
        }, Ne = function(e3) {
          var t3 = e3.getAttribute("data-type"), n2 = e3.previousElementSibling, r2 = t3 && t3 !== "text" && t3 !== "table" && t3 !== "heading-marker" && t3 !== "newline" && t3 !== "yaml-front-matter-open-marker" && t3 !== "yaml-front-matter-close-marker" && t3 !== "code-block-info" && t3 !== "code-block-close-marker" && t3 !== "code-block-open-marker" ? e3.textContent : "", i2 = false;
          for (t3 === "newline" && (i2 = true); n2 && !i2; ) {
            var o2 = n2.getAttribute("data-type");
            if (o2 === "li-marker" || o2 === "blockquote-marker" || o2 === "task-marker" || o2 === "padding") {
              var a2 = n2.textContent;
              if (o2 !== "li-marker" || t3 !== "code-block-open-marker" && t3 !== "code-block-info")
                if (t3 === "code-block-close-marker" && n2.nextElementSibling.isSameNode(e3)) {
                  var l2 = xe(e3, "code-block-open-marker");
                  l2 && l2.previousElementSibling && (n2 = l2.previousElementSibling, r2 = a2 + r2);
                } else
                  r2 = a2 + r2;
              else
                r2 = a2.replace(/\S/g, " ") + r2;
            } else
              o2 === "newline" && (i2 = true);
            n2 = n2.previousElementSibling;
          }
          return r2;
        }, De = function(e3, t3) {
          t3 === void 0 && (t3 = { enableAddUndoStack: true, enableHint: false, enableInput: true }), t3.enableHint && e3.hint.render(e3), e3.preview.render(e3);
          var n2 = a(e3);
          typeof e3.options.input == "function" && t3.enableInput && e3.options.input(n2), e3.options.counter.enable && e3.counter.render(e3, n2), e3.options.cache.enable && (0, d.pK)() && (localStorage.setItem(e3.options.cache.id, n2), e3.options.cache.after && e3.options.cache.after(n2)), e3.devtools && e3.devtools.renderEchart(e3), clearTimeout(e3.sv.processTimeoutId), e3.sv.processTimeoutId = window.setTimeout(function() {
            t3.enableAddUndoStack && !e3.sv.composingLock && e3.undo.addToUndoStack(e3);
          }, e3.options.undoDelay);
        }, Oe = function(e3, t3) {
          var n2 = (0, N.zh)(e3), r2 = (0, b.S)(n2.startContainer, "SPAN");
          r2 && r2.textContent.trim() !== "" && (t3 = "\n" + t3), n2.collapse(true), document.execCommand("insertHTML", false, t3);
        }, Ie = function(e3, t3, n2, r2) {
          var i2 = (0, N.zh)(e3), o2 = t3.getAttribute("data-type");
          e3.sv.element.childNodes.length === 0 && (e3.sv.element.innerHTML = '<span data-type="p" data-block="0"><span data-type="text"><wbr></span></span><span data-type="newline"><br><span style="display: none">\n</span></span>', (0, N.ib)(e3.sv.element, i2));
          var a2 = (0, y.F9)(i2.startContainer), l2 = (0, b.S)(i2.startContainer, "SPAN");
          if (a2) {
            if (o2 === "link") {
              var s2 = void 0;
              return s2 = i2.toString() === "" ? "" + n2 + Lute.Caret + r2 : "" + n2 + i2.toString() + r2.replace(")", Lute.Caret + ")"), void document.execCommand("insertHTML", false, s2);
            }
            if (o2 === "italic" || o2 === "bold" || o2 === "strike" || o2 === "inline-code" || o2 === "code" || o2 === "table" || o2 === "line") {
              s2 = void 0;
              return s2 = i2.toString() === "" ? "" + n2 + Lute.Caret + (o2 === "code" ? "" : r2) : "" + n2 + i2.toString() + Lute.Caret + (o2 === "code" ? "" : r2), o2 === "table" || o2 === "code" && l2 && l2.textContent !== "" ? s2 = "\n\n" + s2 : o2 === "line" && (s2 = "\n\n" + n2 + "\n" + Lute.Caret), void document.execCommand("insertHTML", false, s2);
            }
            if ((o2 === "check" || o2 === "list" || o2 === "ordered-list" || o2 === "quote") && l2) {
              var d2 = "* ";
              o2 === "check" ? d2 = "* [ ] " : o2 === "ordered-list" ? d2 = "1. " : o2 === "quote" && (d2 = "> ");
              var c2 = xe(l2, "newline");
              return c2 ? c2.insertAdjacentText("afterend", d2) : a2.insertAdjacentText("afterbegin", d2), void q(e3);
            }
            (0, N.ib)(e3.sv.element, i2), De(e3);
          }
        }, je = function(e3) {
          switch (e3.currentMode) {
            case "ir":
              return e3.ir.element;
            case "wysiwyg":
              return e3.wysiwyg.element;
            case "sv":
              return e3.sv.element;
          }
        }, Re = function(e3, t3) {
          e3.options.upload.setHeaders && (e3.options.upload.headers = e3.options.upload.setHeaders()), e3.options.upload.headers && Object.keys(e3.options.upload.headers).forEach(function(n2) {
            t3.setRequestHeader(n2, e3.options.upload.headers[n2]);
          });
        }, Pe = function(e3, t3, n2, r2) {
          return new (n2 || (n2 = Promise))(function(i2, o2) {
            function a2(e4) {
              try {
                s2(r2.next(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function l2(e4) {
              try {
                s2(r2.throw(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function s2(e4) {
              var t4;
              e4.done ? i2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2(function(e5) {
                e5(t4);
              })).then(a2, l2);
            }
            s2((r2 = r2.apply(e3, t3 || [])).next());
          });
        }, Be = function(e3, t3) {
          var n2, r2, i2, o2, a2 = { label: 0, sent: function() {
            if (1 & i2[0])
              throw i2[1];
            return i2[1];
          }, trys: [], ops: [] };
          return o2 = { next: l2(0), throw: l2(1), return: l2(2) }, typeof Symbol == "function" && (o2[Symbol.iterator] = function() {
            return this;
          }), o2;
          function l2(o3) {
            return function(l3) {
              return function(o4) {
                if (n2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (n2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                      return i2;
                    switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                      case 0:
                      case 1:
                        i2 = o4;
                        break;
                      case 4:
                        return a2.label++, { value: o4[1], done: false };
                      case 5:
                        a2.label++, r2 = o4[1], o4 = [0];
                        continue;
                      case 7:
                        o4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!(i2 = a2.trys, (i2 = i2.length > 0 && i2[i2.length - 1]) || o4[0] !== 6 && o4[0] !== 2)) {
                          a2 = 0;
                          continue;
                        }
                        if (o4[0] === 3 && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                          a2.label = o4[1];
                          break;
                        }
                        if (o4[0] === 6 && a2.label < i2[1]) {
                          a2.label = i2[1], i2 = o4;
                          break;
                        }
                        if (i2 && a2.label < i2[2]) {
                          a2.label = i2[2], a2.ops.push(o4);
                          break;
                        }
                        i2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    o4 = t3.call(e3, a2);
                  } catch (e4) {
                    o4 = [6, e4], r2 = 0;
                  } finally {
                    n2 = i2 = 0;
                  }
                if (5 & o4[0])
                  throw o4[1];
                return { value: o4[0] ? o4[1] : void 0, done: true };
              }([o3, l3]);
            };
          }
        }, qe = function() {
          this.isUploading = false, this.element = document.createElement("div"), this.element.className = "vditor-upload";
        }, Ve = function(e3, t3, n2) {
          return Pe(void 0, void 0, void 0, function() {
            var r2, i2, o2, a2, l2, s2, d2, c2, u2, p2, m2, f2, h2, v2;
            return Be(this, function(g2) {
              switch (g2.label) {
                case 0:
                  for (r2 = [], i2 = e3.options.upload.multiple === true ? t3.length : 1, f2 = 0; f2 < i2; f2++)
                    (o2 = t3[f2]) instanceof DataTransferItem && (o2 = o2.getAsFile()), r2.push(o2);
                  return e3.options.upload.handler ? [4, e3.options.upload.handler(r2)] : [3, 2];
                case 1:
                  return typeof (a2 = g2.sent()) == "string" ? (e3.tip.show(a2), [2]) : [2];
                case 2:
                  return e3.options.upload.url && e3.upload ? e3.options.upload.file ? [4, e3.options.upload.file(r2)] : [3, 4] : (n2 && (n2.value = ""), e3.tip.show("please config: options.upload.url"), [2]);
                case 3:
                  r2 = g2.sent(), g2.label = 4;
                case 4:
                  if (e3.options.upload.validate && typeof (a2 = e3.options.upload.validate(r2)) == "string")
                    return e3.tip.show(a2), [2];
                  if (l2 = je(e3), e3.upload.range = (0, N.zh)(e3), s2 = function(e4, t4) {
                    e4.tip.hide();
                    for (var n3 = [], r3 = "", i3 = "", o3 = (e4.options.lang, e4.options, function(o4, a4) {
                      var l4 = t4[a4], s3 = true;
                      l4.name || (r3 += "<li>" + window.VditorI18n.nameEmpty + "</li>", s3 = false), l4.size > e4.options.upload.max && (r3 += "<li>" + l4.name + " " + window.VditorI18n.over + " " + e4.options.upload.max / 1024 / 1024 + "M</li>", s3 = false);
                      var d3 = l4.name.lastIndexOf("."), c3 = l4.name.substr(d3), u3 = e4.options.upload.filename(l4.name.substr(0, d3)) + c3;
                      e4.options.upload.accept && (e4.options.upload.accept.split(",").some(function(e5) {
                        var t5 = e5.trim();
                        if (t5.indexOf(".") === 0) {
                          if (c3.toLowerCase() === t5.toLowerCase())
                            return true;
                        } else if (l4.type.split("/")[0] === t5.split("/")[0])
                          return true;
                        return false;
                      }) || (r3 += "<li>" + l4.name + " " + window.VditorI18n.fileTypeError + "</li>", s3 = false)), s3 && (n3.push(l4), i3 += "<li>" + u3 + " " + window.VditorI18n.uploading + "</li>");
                    }), a3 = t4.length, l3 = 0; l3 < a3; l3++)
                      o3(0, l3);
                    return e4.tip.show("<ul>" + r3 + i3 + "</ul>"), n3;
                  }(e3, r2), s2.length === 0)
                    return n2 && (n2.value = ""), [2];
                  for (d2 = new FormData(), c2 = e3.options.upload.extraData, u2 = 0, p2 = Object.keys(c2); u2 < p2.length; u2++)
                    m2 = p2[u2], d2.append(m2, c2[m2]);
                  for (f2 = 0, h2 = s2.length; f2 < h2; f2++)
                    d2.append(e3.options.upload.fieldName, s2[f2]);
                  return (v2 = new XMLHttpRequest()).open("POST", e3.options.upload.url), e3.options.upload.token && v2.setRequestHeader("X-Upload-Token", e3.options.upload.token), e3.options.upload.withCredentials && (v2.withCredentials = true), Re(e3, v2), e3.upload.isUploading = true, l2.setAttribute("contenteditable", "false"), v2.onreadystatechange = function() {
                    if (v2.readyState === XMLHttpRequest.DONE) {
                      if (e3.upload.isUploading = false, l2.setAttribute("contenteditable", "true"), v2.status >= 200 && v2.status < 300)
                        if (e3.options.upload.success)
                          e3.options.upload.success(l2, v2.responseText);
                        else {
                          var r3 = v2.responseText;
                          e3.options.upload.format && (r3 = e3.options.upload.format(t3, v2.responseText)), function(e4, t4) {
                            je(t4).focus();
                            var n3 = JSON.parse(e4), r4 = "";
                            n3.code === 1 && (r4 = "" + n3.msg), n3.data.errFiles && n3.data.errFiles.length > 0 && (r4 = "<ul><li>" + r4 + "</li>", n3.data.errFiles.forEach(function(e5) {
                              var n4 = e5.lastIndexOf("."), i4 = t4.options.upload.filename(e5.substr(0, n4)) + e5.substr(n4);
                              r4 += "<li>" + i4 + " " + window.VditorI18n.uploadError + "</li>";
                            }), r4 += "</ul>"), r4 ? t4.tip.show(r4) : t4.tip.hide();
                            var i3 = "";
                            Object.keys(n3.data.succMap).forEach(function(e5) {
                              var r5 = n3.data.succMap[e5], o3 = e5.lastIndexOf("."), a3 = e5.substr(o3), l3 = t4.options.upload.filename(e5.substr(0, o3)) + a3;
                              (a3 = a3.toLowerCase()).indexOf(".wav") === 0 || a3.indexOf(".mp3") === 0 || a3.indexOf(".ogg") === 0 ? t4.currentMode === "wysiwyg" ? i3 += '<div class="vditor-wysiwyg__block" data-type="html-block"\n data-block="0"><pre><code>&lt;audio controls="controls" src="' + r5 + '"&gt;&lt;/audio&gt;</code></pre>\n' : t4.currentMode === "ir" ? i3 += '<audio controls="controls" src="' + r5 + '"></audio>\n' : i3 += "[" + l3 + "](" + r5 + ")\n" : a3.indexOf(".apng") === 0 || a3.indexOf(".bmp") === 0 || a3.indexOf(".gif") === 0 || a3.indexOf(".ico") === 0 || a3.indexOf(".cur") === 0 || a3.indexOf(".jpg") === 0 || a3.indexOf(".jpeg") === 0 || a3.indexOf(".jfif") === 0 || a3.indexOf(".pjp") === 0 || a3.indexOf(".pjpeg") === 0 || a3.indexOf(".png") === 0 || a3.indexOf(".svg") === 0 || a3.indexOf(".webp") === 0 ? t4.currentMode === "wysiwyg" ? i3 += '<img alt="' + l3 + '" src="' + r5 + '">\n' : i3 += "![" + l3 + "](" + r5 + ")\n" : t4.currentMode === "wysiwyg" ? i3 += '<a href="' + r5 + '">' + l3 + "</a>\n" : i3 += "[" + l3 + "](" + r5 + ")\n";
                            }), (0, N.Hc)(t4.upload.range), document.execCommand("insertHTML", false, i3), t4.upload.range = getSelection().getRangeAt(0).cloneRange();
                          }(r3, e3);
                        }
                      else
                        e3.options.upload.error ? e3.options.upload.error(v2.responseText) : e3.tip.show(v2.responseText);
                      n2 && (n2.value = ""), e3.upload.element.style.display = "none";
                    }
                  }, v2.upload.onprogress = function(t4) {
                    if (t4.lengthComputable) {
                      var n3 = t4.loaded / t4.total * 100;
                      e3.upload.element.style.display = "block", e3.upload.element.style.width = n3 + "%";
                    }
                  }, v2.send(d2), [2];
              }
            });
          });
        }, Ue = function(e3, t3, n2) {
          var r2, o2 = (0, y.F9)(t3.startContainer);
          if (o2 || (o2 = e3.wysiwyg.element), n2 && n2.inputType !== "formatItalic" && n2.inputType !== "deleteByDrag" && n2.inputType !== "insertFromDrop" && n2.inputType !== "formatBold" && n2.inputType !== "formatRemove" && n2.inputType !== "formatStrikeThrough" && n2.inputType !== "insertUnorderedList" && n2.inputType !== "insertOrderedList" && n2.inputType !== "formatOutdent" && n2.inputType !== "formatIndent" && n2.inputType !== "" || !n2) {
            var a2 = function(e4) {
              for (var t4 = e4.previousSibling; t4; ) {
                if (t4.nodeType !== 3 && t4.tagName === "A" && !t4.previousSibling && t4.innerHTML.replace(i.g.ZWSP, "") === "" && t4.nextSibling)
                  return t4;
                t4 = t4.previousSibling;
              }
              return false;
            }(t3.startContainer);
            a2 && a2.remove(), e3.wysiwyg.element.querySelectorAll("wbr").forEach(function(e4) {
              e4.remove();
            }), t3.insertNode(document.createElement("wbr")), o2.querySelectorAll("[style]").forEach(function(e4) {
              e4.removeAttribute("style");
            }), o2.querySelectorAll(".vditor-comment").forEach(function(e4) {
              e4.textContent.trim() === "" && (e4.classList.remove("vditor-comment", "vditor-comment--focus"), e4.removeAttribute("data-cmtids"));
            }), (r2 = o2.previousElementSibling) === null || r2 === void 0 || r2.querySelectorAll(".vditor-comment").forEach(function(e4) {
              e4.textContent.trim() === "" && (e4.classList.remove("vditor-comment", "vditor-comment--focus"), e4.removeAttribute("data-cmtids"));
            });
            var l2 = "";
            o2.getAttribute("data-type") === "link-ref-defs-block" && (o2 = e3.wysiwyg.element);
            var s2, d2 = o2.isEqualNode(e3.wysiwyg.element), c2 = (0, y.a1)(o2, "data-type", "footnotes-block");
            if (d2)
              l2 = o2.innerHTML;
            else {
              var u2 = (0, y.O9)(t3.startContainer);
              if (u2 && !c2) {
                var p2 = (0, b.S)(t3.startContainer, "BLOCKQUOTE");
                o2 = p2 ? (0, y.F9)(t3.startContainer) || o2 : u2;
              }
              if (c2 && (o2 = c2), l2 = o2.outerHTML, o2.tagName === "UL" || o2.tagName === "OL") {
                var m2 = o2.previousElementSibling, f2 = o2.nextElementSibling;
                !m2 || m2.tagName !== "UL" && m2.tagName !== "OL" || (l2 = m2.outerHTML + l2, m2.remove()), !f2 || f2.tagName !== "UL" && f2.tagName !== "OL" || (l2 += f2.outerHTML, f2.remove()), l2 = l2.replace("<div><wbr><br></div>", "<li><p><wbr><br></p></li>");
              }
              e3.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']").forEach(function(e4) {
                e4 && !o2.isEqualNode(e4) && (l2 += e4.outerHTML, e4.remove());
              }), e3.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']").forEach(function(e4) {
                e4 && !o2.isEqualNode(e4) && (l2 += e4.outerHTML, e4.remove());
              });
            }
            if ((l2 = l2.replace(/<\/(strong|b)><strong data-marker="\W{2}">/g, "").replace(/<\/(em|i)><em data-marker="\W{1}">/g, "").replace(/<\/(s|strike)><s data-marker="~{1,2}">/g, "")) === '<p data-block="0">```<wbr></p>' && e3.hint.recentLanguage && (l2 = '<p data-block="0">```<wbr></p>'.replace("```", "```" + e3.hint.recentLanguage)), w("SpinVditorDOM", l2, "argument", e3.options.debugger), l2 = e3.lute.SpinVditorDOM(l2), w("SpinVditorDOM", l2, "result", e3.options.debugger), d2)
              o2.innerHTML = l2;
            else if (o2.outerHTML = l2, c2) {
              var h2 = (0, y.E2)(e3.wysiwyg.element.querySelector("wbr"), "LI");
              if (h2) {
                var v2 = e3.wysiwyg.element.querySelector('sup[data-type="footnotes-ref"][data-footnotes-label="' + h2.getAttribute("data-marker") + '"]');
                v2 && v2.setAttribute("aria-label", h2.textContent.trim().substr(0, 24));
              }
            }
            var g2, E2 = e3.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']");
            E2.forEach(function(e4, t4) {
              t4 === 0 ? s2 = e4 : (s2.insertAdjacentHTML("beforeend", e4.innerHTML), e4.remove());
            }), E2.length > 0 && e3.wysiwyg.element.insertAdjacentElement("beforeend", E2[0]);
            var k2 = e3.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']");
            k2.forEach(function(e4, t4) {
              t4 === 0 ? g2 = e4 : (g2.insertAdjacentHTML("beforeend", e4.innerHTML), e4.remove());
            }), k2.length > 0 && e3.wysiwyg.element.insertAdjacentElement("beforeend", k2[0]), (0, N.ib)(e3.wysiwyg.element, t3), e3.wysiwyg.element.querySelectorAll(".vditor-wysiwyg__preview[data-render='2']").forEach(function(t4) {
              H(t4, e3);
            }), n2 && (n2.inputType === "deleteContentBackward" || n2.inputType === "deleteContentForward") && e3.options.comment.enable && (e3.wysiwyg.triggerRemoveComment(e3), e3.options.comment.adjustTop(e3.wysiwyg.getComments(e3, true)));
          }
          D(e3), X(e3, { enableAddUndoStack: true, enableHint: true, enableInput: true });
        }, We = function(e3, t3) {
          return Object.defineProperty ? Object.defineProperty(e3, "raw", { value: t3 }) : e3.raw = t3, e3;
        }, ze = function(e3, t3, n2, r2) {
          return new (n2 || (n2 = Promise))(function(i2, o2) {
            function a2(e4) {
              try {
                s2(r2.next(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function l2(e4) {
              try {
                s2(r2.throw(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function s2(e4) {
              var t4;
              e4.done ? i2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2(function(e5) {
                e5(t4);
              })).then(a2, l2);
            }
            s2((r2 = r2.apply(e3, t3 || [])).next());
          });
        }, Ge = function(e3, t3) {
          var n2, r2, i2, o2, a2 = { label: 0, sent: function() {
            if (1 & i2[0])
              throw i2[1];
            return i2[1];
          }, trys: [], ops: [] };
          return o2 = { next: l2(0), throw: l2(1), return: l2(2) }, typeof Symbol == "function" && (o2[Symbol.iterator] = function() {
            return this;
          }), o2;
          function l2(o3) {
            return function(l3) {
              return function(o4) {
                if (n2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (n2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                      return i2;
                    switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                      case 0:
                      case 1:
                        i2 = o4;
                        break;
                      case 4:
                        return a2.label++, { value: o4[1], done: false };
                      case 5:
                        a2.label++, r2 = o4[1], o4 = [0];
                        continue;
                      case 7:
                        o4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!(i2 = a2.trys, (i2 = i2.length > 0 && i2[i2.length - 1]) || o4[0] !== 6 && o4[0] !== 2)) {
                          a2 = 0;
                          continue;
                        }
                        if (o4[0] === 3 && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                          a2.label = o4[1];
                          break;
                        }
                        if (o4[0] === 6 && a2.label < i2[1]) {
                          a2.label = i2[1], i2 = o4;
                          break;
                        }
                        if (i2 && a2.label < i2[2]) {
                          a2.label = i2[2], a2.ops.push(o4);
                          break;
                        }
                        i2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    o4 = t3.call(e3, a2);
                  } catch (e4) {
                    o4 = [6, e4], r2 = 0;
                  } finally {
                    n2 = i2 = 0;
                  }
                if (5 & o4[0])
                  throw o4[1];
                return { value: o4[0] ? o4[1] : void 0, done: true };
              }([o3, l3]);
            };
          }
        }, Ke = function(e3, t3, n2) {
          if (e3.keyCode === 229 && e3.code === "" && e3.key === "Unidentified" && t3.currentMode !== "sv") {
            var r2 = (0, y.F9)(n2);
            if (r2 && r2.textContent.trim() === "")
              return t3[t3.currentMode].composingLock = true, false;
          }
          return true;
        }, Fe = function(e3, t3, n2) {
          if (!(n2.key === "Enter" || n2.key === "Tab" || n2.key === "Backspace" || n2.key.indexOf("Arrow") > -1 || (0, d.yl)(n2) || n2.key === "Escape" || n2.shiftKey || n2.altKey)) {
            var r2 = (0, y.lG)(e3.startContainer, "P") || (0, y.lG)(e3.startContainer, "LI");
            if (r2 && (0, N.im)(r2, t3[t3.currentMode].element, e3).start === 0) {
              var o2 = document.createTextNode(i.g.ZWSP);
              e3.insertNode(o2), e3.setStartAfter(o2);
            }
          }
        }, Ze = function(e3, t3) {
          if (t3 === "ArrowDown" || t3 === "ArrowUp") {
            var n2 = (0, y.a1)(e3.startContainer, "data-type", "math-inline") || (0, y.a1)(e3.startContainer, "data-type", "html-entity") || (0, y.a1)(e3.startContainer, "data-type", "html-inline");
            n2 && (t3 === "ArrowDown" && e3.setStartAfter(n2.parentElement), t3 === "ArrowUp" && e3.setStartBefore(n2.parentElement));
          }
        }, Je = function(e3, t3) {
          var n2 = (0, N.zh)(e3), r2 = (0, y.F9)(n2.startContainer);
          r2 && (r2.insertAdjacentHTML(t3, '<p data-block="0">' + i.g.ZWSP + "<wbr>\n</p>"), (0, N.ib)(e3[e3.currentMode].element, n2), pe(e3), lt(e3));
        }, Xe = function(e3) {
          var t3 = (0, y.lG)(e3, "TABLE");
          return !(!t3 || !t3.rows[0].cells[0].isSameNode(e3)) && t3;
        }, Ye = function(e3) {
          var t3 = (0, y.lG)(e3, "TABLE");
          return !(!t3 || !t3.lastElementChild.lastElementChild.lastElementChild.isSameNode(e3)) && t3;
        }, Qe = function(e3, t3, n2) {
          n2 === void 0 && (n2 = true);
          var r2 = e3.previousElementSibling;
          return r2 || (r2 = e3.parentElement.previousElementSibling ? e3.parentElement.previousElementSibling.lastElementChild : e3.parentElement.parentElement.tagName === "TBODY" && e3.parentElement.parentElement.previousElementSibling ? e3.parentElement.parentElement.previousElementSibling.lastElementChild.lastElementChild : null), r2 && (t3.selectNodeContents(r2), n2 || t3.collapse(false), (0, N.Hc)(t3)), r2;
        }, $e = function(e3, t3, n2, r2, o2) {
          var a2 = (0, N.im)(r2, e3[e3.currentMode].element, n2);
          if (t3.key === "ArrowDown" && r2.textContent.trimRight().substr(a2.start).indexOf("\n") === -1 || t3.key === "ArrowRight" && a2.start >= r2.textContent.trimRight().length) {
            var l2 = o2.nextElementSibling;
            return !l2 || l2 && (l2.tagName === "TABLE" || l2.getAttribute("data-type")) ? (o2.insertAdjacentHTML("afterend", '<p data-block="0">' + i.g.ZWSP + "<wbr></p>"), (0, N.ib)(e3[e3.currentMode].element, n2)) : (n2.selectNodeContents(l2), n2.collapse(true), (0, N.Hc)(n2)), t3.preventDefault(), true;
          }
          return false;
        }, et = function(e3, t3, n2, r2, o2) {
          var a2 = (0, N.im)(r2, e3[e3.currentMode].element, n2);
          if (t3.key === "ArrowUp" && r2.textContent.substr(0, a2.start).indexOf("\n") === -1 || (t3.key === "ArrowLeft" || t3.key === "Backspace" && n2.toString() === "") && a2.start === 0) {
            var l2 = o2.previousElementSibling;
            return !l2 || l2 && (l2.tagName === "TABLE" || l2.getAttribute("data-type")) ? (o2.insertAdjacentHTML("beforebegin", '<p data-block="0">' + i.g.ZWSP + "<wbr></p>"), (0, N.ib)(e3[e3.currentMode].element, n2)) : (n2.selectNodeContents(l2), n2.collapse(false), (0, N.Hc)(n2)), t3.preventDefault(), true;
          }
          return false;
        }, tt = function(e3, t3, n2, r2) {
          r2 === void 0 && (r2 = true);
          var i2 = (0, y.lG)(t3.startContainer, "LI");
          if (e3[e3.currentMode].element.querySelectorAll("wbr").forEach(function(e4) {
            e4.remove();
          }), t3.insertNode(document.createElement("wbr")), r2 && i2) {
            for (var o2 = "", a2 = 0; a2 < i2.parentElement.childElementCount; a2++) {
              var l2 = i2.parentElement.children[a2].querySelector("input");
              l2 && l2.remove(), o2 += '<p data-block="0">' + i2.parentElement.children[a2].innerHTML.trimLeft() + "</p>";
            }
            i2.parentElement.insertAdjacentHTML("beforebegin", o2), i2.parentElement.remove();
          } else if (i2)
            if (n2 === "check")
              i2.parentElement.querySelectorAll("li").forEach(function(e4) {
                e4.insertAdjacentHTML("afterbegin", '<input type="checkbox" />' + (e4.textContent.indexOf(" ") === 0 ? "" : " ")), e4.classList.add("vditor-task");
              });
            else {
              i2.querySelector("input") && i2.parentElement.querySelectorAll("li").forEach(function(e4) {
                e4.querySelector("input").remove(), e4.classList.remove("vditor-task");
              });
              var s2 = void 0;
              n2 === "list" ? (s2 = document.createElement("ul")).setAttribute("data-marker", "*") : (s2 = document.createElement("ol")).setAttribute("data-marker", "1."), s2.setAttribute("data-block", "0"), s2.setAttribute("data-tight", i2.parentElement.getAttribute("data-tight")), s2.innerHTML = i2.parentElement.innerHTML, i2.parentElement.parentNode.replaceChild(s2, i2.parentElement);
            }
          else {
            var d2 = (0, y.a1)(t3.startContainer, "data-block", "0");
            d2 || (e3[e3.currentMode].element.querySelector("wbr").remove(), (d2 = e3[e3.currentMode].element.querySelector("p")).innerHTML = "<wbr>"), n2 === "check" ? (d2.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li class="vditor-task"><input type="checkbox" /> ' + d2.innerHTML + "</li></ul>"), d2.remove()) : n2 === "list" ? (d2.insertAdjacentHTML("beforebegin", '<ul data-block="0"><li>' + d2.innerHTML + "</li></ul>"), d2.remove()) : n2 === "ordered-list" && (d2.insertAdjacentHTML("beforebegin", '<ol data-block="0"><li>' + d2.innerHTML + "</li></ol>"), d2.remove());
          }
        }, nt = function(e3, t3, n2) {
          var r2 = t3.previousElementSibling;
          if (t3 && r2) {
            var i2 = [t3];
            Array.from(n2.cloneContents().children).forEach(function(e4, n3) {
              e4.nodeType !== 3 && t3 && e4.textContent.trim() !== "" && t3.getAttribute("data-node-id") === e4.getAttribute("data-node-id") && (n3 !== 0 && i2.push(t3), t3 = t3.nextElementSibling);
            }), e3[e3.currentMode].element.querySelectorAll("wbr").forEach(function(e4) {
              e4.remove();
            }), n2.insertNode(document.createElement("wbr"));
            var o2 = r2.parentElement, a2 = "";
            i2.forEach(function(e4) {
              var t4 = e4.getAttribute("data-marker");
              t4.length !== 1 && (t4 = "1" + t4.slice(-1)), a2 += '<li data-node-id="' + e4.getAttribute("data-node-id") + '" data-marker="' + t4 + '">' + e4.innerHTML + "</li>", e4.remove();
            }), r2.insertAdjacentHTML("beforeend", "<" + o2.tagName + ' data-block="0">' + a2 + "</" + o2.tagName + ">"), e3.currentMode === "wysiwyg" ? o2.outerHTML = e3.lute.SpinVditorDOM(o2.outerHTML) : o2.outerHTML = e3.lute.SpinVditorIRDOM(o2.outerHTML), (0, N.ib)(e3[e3.currentMode].element, n2);
            var l2 = (0, y.O9)(n2.startContainer);
            l2 && l2.querySelectorAll(".vditor-" + e3.currentMode + "__preview[data-render='2']").forEach(function(t4) {
              H(t4, e3), e3.currentMode === "wysiwyg" && t4.previousElementSibling.setAttribute("style", "display:none");
            }), lt(e3), pe(e3);
          } else
            e3[e3.currentMode].element.focus();
        }, rt = function(e3, t3, n2, r2) {
          var i2 = (0, y.lG)(t3.parentElement, "LI");
          if (i2) {
            e3[e3.currentMode].element.querySelectorAll("wbr").forEach(function(e4) {
              e4.remove();
            }), n2.insertNode(document.createElement("wbr"));
            var o2 = t3.parentElement, a2 = o2.cloneNode(), l2 = [t3];
            Array.from(n2.cloneContents().children).forEach(function(e4, n3) {
              e4.nodeType !== 3 && t3 && e4.textContent.trim() !== "" && t3.getAttribute("data-node-id") === e4.getAttribute("data-node-id") && (n3 !== 0 && l2.push(t3), t3 = t3.nextElementSibling);
            });
            var s2 = false, d2 = "";
            o2.querySelectorAll("li").forEach(function(e4) {
              s2 && (d2 += e4.outerHTML, e4.nextElementSibling || e4.previousElementSibling ? e4.remove() : e4.parentElement.remove()), e4.isSameNode(l2[l2.length - 1]) && (s2 = true);
            }), l2.reverse().forEach(function(e4) {
              i2.insertAdjacentElement("afterend", e4);
            }), d2 && (a2.innerHTML = d2, l2[0].insertAdjacentElement("beforeend", a2)), e3.currentMode === "wysiwyg" ? r2.outerHTML = e3.lute.SpinVditorDOM(r2.outerHTML) : r2.outerHTML = e3.lute.SpinVditorIRDOM(r2.outerHTML), (0, N.ib)(e3[e3.currentMode].element, n2);
            var c2 = (0, y.O9)(n2.startContainer);
            c2 && c2.querySelectorAll(".vditor-" + e3.currentMode + "__preview[data-render='2']").forEach(function(t4) {
              H(t4, e3), e3.currentMode === "wysiwyg" && t4.previousElementSibling.setAttribute("style", "display:none");
            }), lt(e3), pe(e3);
          } else
            e3[e3.currentMode].element.focus();
        }, it = function(e3, t3) {
          for (var n2 = getSelection().getRangeAt(0).startContainer.parentElement, r2 = e3.rows[0].cells.length, i2 = e3.rows.length, o2 = 0, a2 = 0; a2 < i2; a2++)
            for (var l2 = 0; l2 < r2; l2++)
              if (e3.rows[a2].cells[l2].isSameNode(n2)) {
                o2 = l2;
                break;
              }
          for (var s2 = 0; s2 < i2; s2++)
            e3.rows[s2].cells[o2].setAttribute("align", t3);
        }, ot = function(e3) {
          var t3 = e3.trimRight().split("\n").pop();
          return t3 !== "" && ((t3.replace(/ |-/g, "") === "" || t3.replace(/ |_/g, "") === "" || t3.replace(/ |\*/g, "") === "") && (t3.replace(/ /g, "").length > 2 && (!(t3.indexOf("-") > -1 && t3.trimLeft().indexOf(" ") === -1 && e3.trimRight().split("\n").length > 1) && (t3.indexOf("    ") !== 0 && t3.indexOf("	") !== 0))));
        }, at = function(e3) {
          var t3 = e3.trimRight().split("\n");
          return (e3 = t3.pop()).indexOf("    ") !== 0 && e3.indexOf("	") !== 0 && ((e3 = e3.trimLeft()) !== "" && t3.length !== 0 && (e3.replace(/-/g, "") === "" || e3.replace(/=/g, "") === ""));
        }, lt = function(e3, t3) {
          t3 === void 0 && (t3 = { enableAddUndoStack: true, enableHint: false, enableInput: true }), e3.currentMode === "wysiwyg" ? X(e3, t3) : e3.currentMode === "ir" ? Lt(e3, t3) : e3.currentMode === "sv" && De(e3, t3);
        }, st = function(e3, t3, n2, r2) {
          var o2, a2 = e3.startContainer, l2 = (0, y.lG)(a2, "LI");
          if (l2) {
            if (!(0, d.yl)(r2) && !r2.altKey && r2.key === "Enter" && !r2.shiftKey && n2 && l2.contains(n2) && n2.nextElementSibling)
              return l2 && !l2.textContent.endsWith("\n") && l2.insertAdjacentText("beforeend", "\n"), e3.insertNode(document.createTextNode("\n\n")), e3.collapse(false), lt(t3), r2.preventDefault(), true;
            if (!((0, d.yl)(r2) || r2.shiftKey || r2.altKey || r2.key !== "Backspace" || l2.previousElementSibling || e3.toString() !== "" || (0, N.im)(l2, t3[t3.currentMode].element, e3).start !== 0))
              return l2.nextElementSibling ? (l2.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>' + l2.innerHTML + "</p>"), l2.remove()) : l2.parentElement.outerHTML = '<p data-block="0"><wbr>' + l2.innerHTML + "</p>", (0, N.ib)(t3[t3.currentMode].element, e3), lt(t3), r2.preventDefault(), true;
            if (!(0, d.yl)(r2) && !r2.shiftKey && !r2.altKey && r2.key === "Backspace" && l2.textContent.trim().replace(i.g.ZWSP, "") === "" && e3.toString() === "" && ((o2 = l2.previousElementSibling) === null || o2 === void 0 ? void 0 : o2.tagName) === "LI")
              return l2.previousElementSibling.insertAdjacentText("beforeend", "\n\n"), e3.selectNodeContents(l2.previousElementSibling), e3.collapse(false), l2.remove(), (0, N.ib)(t3[t3.currentMode].element, e3), lt(t3), r2.preventDefault(), true;
            if (!(0, d.yl)(r2) && !r2.altKey && r2.key === "Tab") {
              var s2 = false;
              if ((e3.startOffset === 0 && (a2.nodeType === 3 && !a2.previousSibling || a2.nodeType !== 3 && a2.nodeName === "LI") || l2.classList.contains("vditor-task") && e3.startOffset === 1 && a2.previousSibling.nodeType !== 3 && a2.previousSibling.tagName === "INPUT") && (s2 = true), s2 || e3.toString() !== "")
                return r2.shiftKey ? rt(t3, l2, e3, l2.parentElement) : nt(t3, l2, e3), r2.preventDefault(), true;
            }
          }
          return false;
        }, dt = function(e3, t3, n2) {
          if (e3.options.tab && n2.key === "Tab")
            return n2.shiftKey || (t3.toString() === "" ? (t3.insertNode(document.createTextNode(e3.options.tab)), t3.collapse(false)) : (t3.extractContents(), t3.insertNode(document.createTextNode(e3.options.tab)), t3.collapse(false))), (0, N.Hc)(t3), lt(e3), n2.preventDefault(), true;
        }, ct = function(e3, t3, n2, r2) {
          if (n2) {
            if (!(0, d.yl)(e3) && !e3.altKey && e3.key === "Enter") {
              var i2 = String.raw(F || (F = We(["", ""], ["", ""])), n2.textContent).replace(/\\\|/g, "").trim(), o2 = i2.split("|");
              if (i2.startsWith("|") && i2.endsWith("|") && o2.length > 3) {
                var a2 = o2.map(function() {
                  return "---";
                }).join("|");
                return a2 = n2.textContent + "\n" + a2.substring(3, a2.length - 3) + "\n|<wbr>", n2.outerHTML = t3.lute.SpinVditorDOM(a2), (0, N.ib)(t3[t3.currentMode].element, r2), lt(t3), Te(t3), e3.preventDefault(), true;
              }
              if (ot(n2.innerHTML) && n2.previousElementSibling) {
                var l2 = "", s2 = n2.innerHTML.trimRight().split("\n");
                return s2.length > 1 && (s2.pop(), l2 = '<p data-block="0">' + s2.join("\n") + "</p>"), n2.insertAdjacentHTML("afterend", l2 + '<hr data-block="0"><p data-block="0"><wbr>\n</p>'), n2.remove(), (0, N.ib)(t3[t3.currentMode].element, r2), lt(t3), Te(t3), e3.preventDefault(), true;
              }
              if (at(n2.innerHTML))
                return t3.currentMode === "wysiwyg" ? n2.outerHTML = t3.lute.SpinVditorDOM(n2.innerHTML + '<p data-block="0"><wbr>\n</p>') : n2.outerHTML = t3.lute.SpinVditorIRDOM(n2.innerHTML + '<p data-block="0"><wbr>\n</p>'), (0, N.ib)(t3[t3.currentMode].element, r2), lt(t3), Te(t3), e3.preventDefault(), true;
            }
            if (r2.collapsed && n2.previousElementSibling && e3.key === "Backspace" && !(0, d.yl)(e3) && !e3.altKey && !e3.shiftKey && n2.textContent.trimRight().split("\n").length > 1 && (0, N.im)(n2, t3[t3.currentMode].element, r2).start === 0) {
              var c2 = (0, y.DX)(n2.previousElementSibling);
              return c2.textContent.endsWith("\n") || (c2.textContent = c2.textContent + "\n"), c2.parentElement.insertAdjacentHTML("beforeend", "<wbr>" + n2.innerHTML), n2.remove(), (0, N.ib)(t3[t3.currentMode].element, r2), false;
            }
            return false;
          }
        }, ut = function(e3, t3, n2) {
          for (var r2 = "", i2 = 0; i2 < n2.parentElement.childElementCount; i2++)
            r2 += '<td align="' + n2.parentElement.children[i2].getAttribute("align") + '"> </td>';
          n2.tagName === "TH" ? n2.parentElement.parentElement.insertAdjacentHTML("afterend", "<tbody><tr>" + r2 + "</tr></tbody>") : n2.parentElement.insertAdjacentHTML("afterend", "<tr>" + r2 + "</tr>"), lt(e3);
        }, pt = function(e3, t3, n2) {
          for (var r2 = "", i2 = 0; i2 < n2.parentElement.childElementCount; i2++)
            n2.tagName === "TH" ? r2 += '<th align="' + n2.parentElement.children[i2].getAttribute("align") + '"> </th>' : r2 += '<td align="' + n2.parentElement.children[i2].getAttribute("align") + '"> </td>';
          if (n2.tagName === "TH") {
            n2.parentElement.parentElement.insertAdjacentHTML("beforebegin", "<thead><tr>" + r2 + "</tr></thead>"), t3.insertNode(document.createElement("wbr"));
            var o2 = n2.parentElement.innerHTML.replace(/<th>/g, "<td>").replace(/<\/th>/g, "</td>");
            n2.parentElement.parentElement.nextElementSibling.insertAdjacentHTML("afterbegin", o2), n2.parentElement.parentElement.remove(), (0, N.ib)(e3.ir.element, t3);
          } else
            n2.parentElement.insertAdjacentHTML("beforebegin", "<tr>" + r2 + "</tr>");
          lt(e3);
        }, mt = function(e3, t3, n2, r2) {
          r2 === void 0 && (r2 = "afterend");
          for (var i2 = 0, o2 = n2.previousElementSibling; o2; )
            i2++, o2 = o2.previousElementSibling;
          for (var a2 = 0; a2 < t3.rows.length; a2++)
            a2 === 0 ? t3.rows[a2].cells[i2].insertAdjacentHTML(r2, "<th> </th>") : t3.rows[a2].cells[i2].insertAdjacentHTML(r2, "<td> </td>");
          lt(e3);
        }, ft = function(e3, t3, n2) {
          if (n2.tagName === "TD") {
            var r2 = n2.parentElement.parentElement;
            n2.parentElement.previousElementSibling ? t3.selectNodeContents(n2.parentElement.previousElementSibling.lastElementChild) : t3.selectNodeContents(r2.previousElementSibling.lastElementChild.lastElementChild), r2.childElementCount === 1 ? r2.remove() : n2.parentElement.remove(), t3.collapse(false), (0, N.Hc)(t3), lt(e3);
          }
        }, ht = function(e3, t3, n2, r2) {
          for (var i2 = 0, o2 = r2.previousElementSibling; o2; )
            i2++, o2 = o2.previousElementSibling;
          (r2.previousElementSibling || r2.nextElementSibling) && (t3.selectNodeContents(r2.previousElementSibling || r2.nextElementSibling), t3.collapse(true));
          for (var a2 = 0; a2 < n2.rows.length; a2++) {
            var l2 = n2.rows[a2].cells;
            if (l2.length === 1) {
              n2.remove(), pe(e3);
              break;
            }
            l2[i2].remove();
          }
          (0, N.Hc)(t3), lt(e3);
        }, vt = function(e3, t3, n2) {
          var r2 = n2.startContainer, i2 = (0, y.lG)(r2, "TD") || (0, y.lG)(r2, "TH");
          if (i2) {
            if (!(0, d.yl)(t3) && !t3.altKey && t3.key === "Enter") {
              i2.lastElementChild && (!i2.lastElementChild || i2.lastElementChild.isSameNode(i2.lastChild) && i2.lastElementChild.tagName === "BR") || i2.insertAdjacentHTML("beforeend", "<br>");
              var o2 = document.createElement("br");
              return n2.insertNode(o2), n2.setStartAfter(o2), lt(e3), Te(e3), t3.preventDefault(), true;
            }
            if (t3.key === "Tab")
              return t3.shiftKey ? (Qe(i2, n2), t3.preventDefault(), true) : ((u2 = i2.nextElementSibling) || (u2 = i2.parentElement.nextElementSibling ? i2.parentElement.nextElementSibling.firstElementChild : i2.parentElement.parentElement.tagName === "THEAD" && i2.parentElement.parentElement.nextElementSibling ? i2.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild : null), u2 && (n2.selectNodeContents(u2), (0, N.Hc)(n2)), t3.preventDefault(), true);
            var a2 = i2.parentElement.parentElement.parentElement;
            if (t3.key === "ArrowUp") {
              if (t3.preventDefault(), i2.tagName === "TH")
                return a2.previousElementSibling ? (n2.selectNodeContents(a2.previousElementSibling), n2.collapse(false), (0, N.Hc)(n2)) : Je(e3, "beforebegin"), true;
              for (var l2 = 0, s2 = i2.parentElement; l2 < s2.cells.length && !s2.cells[l2].isSameNode(i2); l2++)
                ;
              var c2 = s2.previousElementSibling;
              return c2 || (c2 = s2.parentElement.previousElementSibling.firstChild), n2.selectNodeContents(c2.cells[l2]), n2.collapse(false), (0, N.Hc)(n2), true;
            }
            if (t3.key === "ArrowDown") {
              var u2;
              if (t3.preventDefault(), !(s2 = i2.parentElement).nextElementSibling && i2.tagName === "TD")
                return a2.nextElementSibling ? (n2.selectNodeContents(a2.nextElementSibling), n2.collapse(true), (0, N.Hc)(n2)) : Je(e3, "afterend"), true;
              for (l2 = 0; l2 < s2.cells.length && !s2.cells[l2].isSameNode(i2); l2++)
                ;
              return (u2 = s2.nextElementSibling) || (u2 = s2.parentElement.nextElementSibling.firstChild), n2.selectNodeContents(u2.cells[l2]), n2.collapse(true), (0, N.Hc)(n2), true;
            }
            if (e3.currentMode === "wysiwyg" && !(0, d.yl)(t3) && t3.key === "Enter" && !t3.shiftKey && t3.altKey) {
              var p2 = e3.wysiwyg.popover.querySelector(".vditor-input");
              return p2.focus(), p2.select(), t3.preventDefault(), true;
            }
            if (!(0, d.yl)(t3) && !t3.shiftKey && !t3.altKey && t3.key === "Backspace" && n2.startOffset === 0 && n2.toString() === "")
              return !Qe(i2, n2, false) && a2 && (a2.textContent.trim() === "" ? (a2.outerHTML = '<p data-block="0"><wbr>\n</p>', (0, N.ib)(e3[e3.currentMode].element, n2)) : (n2.setStartBefore(a2), n2.collapse(true)), lt(e3)), t3.preventDefault(), true;
            if (R("\u21E7\u2318F", t3))
              return pt(e3, n2, i2), t3.preventDefault(), true;
            if (R("\u2318=", t3))
              return ut(e3, n2, i2), t3.preventDefault(), true;
            if (R("\u21E7\u2318G", t3))
              return mt(e3, a2, i2, "beforebegin"), t3.preventDefault(), true;
            if (R("\u21E7\u2318=", t3))
              return mt(e3, a2, i2), t3.preventDefault(), true;
            if (R("\u2318-", t3))
              return ft(e3, n2, i2), t3.preventDefault(), true;
            if (R("\u21E7\u2318-", t3))
              return ht(e3, n2, a2, i2), t3.preventDefault(), true;
            if (R("\u21E7\u2318L", t3)) {
              if (e3.currentMode === "ir")
                return it(a2, "left"), lt(e3), t3.preventDefault(), true;
              if (m2 = e3.wysiwyg.popover.querySelector('[data-type="left"]'))
                return m2.click(), t3.preventDefault(), true;
            }
            if (R("\u21E7\u2318C", t3)) {
              if (e3.currentMode === "ir")
                return it(a2, "center"), lt(e3), t3.preventDefault(), true;
              if (m2 = e3.wysiwyg.popover.querySelector('[data-type="center"]'))
                return m2.click(), t3.preventDefault(), true;
            }
            if (R("\u21E7\u2318R", t3)) {
              if (e3.currentMode === "ir")
                return it(a2, "right"), lt(e3), t3.preventDefault(), true;
              var m2;
              if (m2 = e3.wysiwyg.popover.querySelector('[data-type="right"]'))
                return m2.click(), t3.preventDefault(), true;
            }
          }
          return false;
        }, gt = function(e3, t3, n2, r2) {
          if (n2.tagName === "PRE" && R("\u2318A", t3))
            return r2.selectNodeContents(n2.firstElementChild), t3.preventDefault(), true;
          if (e3.options.tab && t3.key === "Tab" && !t3.shiftKey && r2.toString() === "")
            return r2.insertNode(document.createTextNode(e3.options.tab)), r2.collapse(false), lt(e3), t3.preventDefault(), true;
          if (t3.key === "Backspace" && !(0, d.yl)(t3) && !t3.shiftKey && !t3.altKey) {
            var i2 = (0, N.im)(n2, e3[e3.currentMode].element, r2);
            if ((i2.start === 0 || i2.start === 1 && n2.innerText === "\n") && r2.toString() === "")
              return n2.parentElement.outerHTML = '<p data-block="0"><wbr>' + n2.firstElementChild.innerHTML + "</p>", (0, N.ib)(e3[e3.currentMode].element, r2), lt(e3), t3.preventDefault(), true;
          }
          return !(0, d.yl)(t3) && !t3.altKey && t3.key === "Enter" && (n2.firstElementChild.textContent.endsWith("\n") || n2.firstElementChild.insertAdjacentText("beforeend", "\n"), r2.extractContents(), r2.insertNode(document.createTextNode("\n")), r2.collapse(false), (0, N.Hc)(r2), (0, d.vU)() || (e3.currentMode === "wysiwyg" ? Ue(e3, r2) : j(e3, r2)), Te(e3), t3.preventDefault(), true);
        }, yt = function(e3, t3, n2, r2) {
          var o2 = t3.startContainer, a2 = (0, y.lG)(o2, "BLOCKQUOTE");
          if (a2 && t3.toString() === "") {
            if (n2.key === "Backspace" && !(0, d.yl)(n2) && !n2.shiftKey && !n2.altKey && (0, N.im)(a2, e3[e3.currentMode].element, t3).start === 0)
              return t3.insertNode(document.createElement("wbr")), a2.outerHTML = a2.innerHTML, (0, N.ib)(e3[e3.currentMode].element, t3), lt(e3), n2.preventDefault(), true;
            if (r2 && n2.key === "Enter" && !(0, d.yl)(n2) && !n2.shiftKey && !n2.altKey && r2.parentElement.tagName === "BLOCKQUOTE") {
              var l2 = false;
              if (r2.innerHTML.replace(i.g.ZWSP, "") === "\n" || r2.innerHTML.replace(i.g.ZWSP, "") === "" ? (l2 = true, r2.remove()) : r2.innerHTML.endsWith("\n\n") && (0, N.im)(r2, e3[e3.currentMode].element, t3).start === r2.textContent.length - 1 && (r2.innerHTML = r2.innerHTML.substr(0, r2.innerHTML.length - 2), l2 = true), l2)
                return a2.insertAdjacentHTML("afterend", '<p data-block="0">' + i.g.ZWSP + "<wbr>\n</p>"), (0, N.ib)(e3[e3.currentMode].element, t3), lt(e3), n2.preventDefault(), true;
            }
            var s2 = (0, y.F9)(o2);
            if (e3.currentMode === "wysiwyg" && s2 && R("\u21E7\u2318;", n2))
              return t3.insertNode(document.createElement("wbr")), s2.outerHTML = '<blockquote data-block="0">' + s2.outerHTML + "</blockquote>", (0, N.ib)(e3.wysiwyg.element, t3), X(e3), n2.preventDefault(), true;
            if ($e(e3, n2, t3, a2, a2))
              return true;
            if (et(e3, n2, t3, a2, a2))
              return true;
          }
          return false;
        }, bt = function(e3, t3, n2) {
          var r2 = t3.startContainer, i2 = (0, y.fb)(r2, "vditor-task");
          if (i2) {
            if (R("\u21E7\u2318J", n2)) {
              var o2 = i2.firstElementChild;
              return o2.checked ? o2.removeAttribute("checked") : o2.setAttribute("checked", "checked"), lt(e3), n2.preventDefault(), true;
            }
            if (n2.key === "Backspace" && !(0, d.yl)(n2) && !n2.shiftKey && !n2.altKey && t3.toString() === "" && t3.startOffset === 1 && (r2.nodeType === 3 && r2.previousSibling && r2.previousSibling.tagName === "INPUT" || r2.nodeType !== 3)) {
              var a2 = i2.previousElementSibling;
              if (i2.querySelector("input").remove(), a2)
                (0, y.DX)(a2).parentElement.insertAdjacentHTML("beforeend", "<wbr>" + i2.innerHTML.trim()), i2.remove();
              else
                i2.parentElement.insertAdjacentHTML("beforebegin", '<p data-block="0"><wbr>' + (i2.innerHTML.trim() || "\n") + "</p>"), i2.nextElementSibling ? i2.remove() : i2.parentElement.remove();
              return (0, N.ib)(e3[e3.currentMode].element, t3), lt(e3), n2.preventDefault(), true;
            }
            if (n2.key === "Enter" && !(0, d.yl)(n2) && !n2.shiftKey && !n2.altKey) {
              if (i2.textContent.trim() === "")
                if ((0, y.fb)(i2.parentElement, "vditor-task")) {
                  var l2 = (0, y.O9)(r2);
                  l2 && rt(e3, i2, t3, l2);
                } else if (i2.nextElementSibling) {
                  var s2 = "", c2 = "", u2 = false;
                  Array.from(i2.parentElement.children).forEach(function(e4) {
                    i2.isSameNode(e4) ? u2 = true : u2 ? s2 += e4.outerHTML : c2 += e4.outerHTML;
                  });
                  var p2 = i2.parentElement.tagName, m2 = i2.parentElement.tagName === "OL" ? "" : ' data-marker="' + i2.parentElement.getAttribute("data-marker") + '"', f2 = "";
                  c2 && (f2 = i2.parentElement.tagName === "UL" ? "" : ' start="1"', c2 = "<" + p2 + ' data-tight="true"' + m2 + ' data-block="0">' + c2 + "</" + p2 + ">"), i2.parentElement.outerHTML = c2 + '<p data-block="0"><wbr>\n</p><' + p2 + '\n data-tight="true"' + m2 + ' data-block="0"' + f2 + ">" + s2 + "</" + p2 + ">";
                } else
                  i2.parentElement.insertAdjacentHTML("afterend", '<p data-block="0"><wbr>\n</p>'), i2.parentElement.querySelectorAll("li").length === 1 ? i2.parentElement.remove() : i2.remove();
              else
                r2.nodeType !== 3 && t3.startOffset === 0 && r2.firstChild.tagName === "INPUT" ? t3.setStart(r2.childNodes[1], 1) : (t3.setEndAfter(i2.lastChild), i2.insertAdjacentHTML("afterend", '<li class="vditor-task" data-marker="' + i2.getAttribute("data-marker") + '"><input type="checkbox"> <wbr></li>'), document.querySelector("wbr").after(t3.extractContents()));
              return (0, N.ib)(e3[e3.currentMode].element, t3), lt(e3), Te(e3), n2.preventDefault(), true;
            }
          }
          return false;
        }, wt = function(e3, t3, n2, r2) {
          if (t3.startContainer.nodeType !== 3) {
            var i2 = t3.startContainer.children[t3.startOffset];
            if (i2 && i2.tagName === "HR")
              return t3.selectNodeContents(i2.previousElementSibling), t3.collapse(false), n2.preventDefault(), true;
          }
          if (r2) {
            var o2 = r2.previousElementSibling;
            if (o2 && (0, N.im)(r2, e3[e3.currentMode].element, t3).start === 0 && ((0, d.vU)() && o2.tagName === "HR" || o2.tagName === "TABLE")) {
              if (o2.tagName === "TABLE") {
                var a2 = o2.lastElementChild.lastElementChild.lastElementChild;
                a2.innerHTML = a2.innerHTML.trimLeft() + "<wbr>" + r2.textContent.trim(), r2.remove();
              } else
                o2.remove();
              return (0, N.ib)(e3[e3.currentMode].element, t3), lt(e3), n2.preventDefault(), true;
            }
          }
          return false;
        }, Et = function(e3) {
          (0, d.vU)() && e3.startContainer.nodeType !== 3 && e3.startContainer.tagName === "HR" && e3.setStartBefore(e3.startContainer);
        }, kt = function(e3, t3, n2) {
          var r2, i2;
          if (!(0, d.vU)())
            return false;
          if (e3.key === "ArrowUp" && t3 && ((r2 = t3.previousElementSibling) === null || r2 === void 0 ? void 0 : r2.tagName) === "TABLE") {
            var o2 = t3.previousElementSibling;
            return n2.selectNodeContents(o2.rows[o2.rows.length - 1].lastElementChild), n2.collapse(false), e3.preventDefault(), true;
          }
          return !(e3.key !== "ArrowDown" || !t3 || ((i2 = t3.nextElementSibling) === null || i2 === void 0 ? void 0 : i2.tagName) !== "TABLE") && (n2.selectNodeContents(t3.nextElementSibling.rows[0].cells[0]), n2.collapse(true), e3.preventDefault(), true);
        }, St = function(e3, t3, n2) {
          return ze(void 0, void 0, void 0, function() {
            var r2, o2, a2, l2, s2, d2, c2, u2, p2, m2, f2, h2, v2, g2;
            return Ge(this, function(b2) {
              switch (b2.label) {
                case 0:
                  return t3.stopPropagation(), t3.preventDefault(), "clipboardData" in t3 ? (r2 = t3.clipboardData.getData("text/html"), o2 = t3.clipboardData.getData("text/plain"), a2 = t3.clipboardData.files) : (r2 = t3.dataTransfer.getData("text/html"), o2 = t3.dataTransfer.getData("text/plain"), t3.dataTransfer.types.includes("Files") && (a2 = t3.dataTransfer.items)), l2 = {}, s2 = function(t4, n3) {
                    if (!n3)
                      return ["", Lute.WalkContinue];
                    var r3 = t4.TokensStr();
                    if (t4.__internal_object__.Parent.Type === 34 && r3 && r3.indexOf("file://") === -1 && e3.options.upload.linkToImgUrl) {
                      var i2 = new XMLHttpRequest();
                      i2.open("POST", e3.options.upload.linkToImgUrl), e3.options.upload.token && i2.setRequestHeader("X-Upload-Token", e3.options.upload.token), e3.options.upload.withCredentials && (i2.withCredentials = true), Re(e3, i2), i2.setRequestHeader("Content-Type", "application/json; charset=utf-8"), i2.onreadystatechange = function() {
                        if (i2.readyState === XMLHttpRequest.DONE) {
                          if (i2.status === 200) {
                            var t5 = i2.responseText;
                            e3.options.upload.linkToImgFormat && (t5 = e3.options.upload.linkToImgFormat(i2.responseText));
                            var n4 = JSON.parse(t5);
                            if (n4.code !== 0)
                              return void e3.tip.show(n4.msg);
                            var r4 = n4.data.originalURL;
                            if (e3.currentMode === "sv")
                              e3.sv.element.querySelectorAll(".vditor-sv__marker--link").forEach(function(e4) {
                                e4.textContent === r4 && (e4.textContent = n4.data.url);
                              });
                            else {
                              var o3 = e3[e3.currentMode].element.querySelector('img[src="' + r4 + '"]');
                              o3.src = n4.data.url, e3.currentMode === "ir" && (o3.previousElementSibling.previousElementSibling.innerHTML = n4.data.url);
                            }
                            lt(e3);
                          } else
                            e3.tip.show(i2.responseText);
                          e3.options.upload.linkToImgCallback && e3.options.upload.linkToImgCallback(i2.responseText);
                        }
                      }, i2.send(JSON.stringify({ url: r3 }));
                    }
                    return e3.currentMode === "ir" ? ['<span class="vditor-ir__marker vditor-ir__marker--link">' + r3 + "</span>", Lute.WalkContinue] : e3.currentMode === "wysiwyg" ? ["", Lute.WalkContinue] : ['<span class="vditor-sv__marker--link">' + r3 + "</span>", Lute.WalkContinue];
                  }, r2.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "").trim() !== '<a href="' + o2 + '">' + o2 + "</a>" && r2.replace(/&amp;/g, "&").replace(/<(|\/)(html|body|meta)[^>]*?>/gi, "").trim() !== '<!--StartFragment--><a href="' + o2 + '">' + o2 + "</a><!--EndFragment-->" || (r2 = ""), (d2 = new DOMParser().parseFromString(r2, "text/html")).body && (r2 = d2.body.innerHTML), r2 = Lute.Sanitize(r2), e3.wysiwyg.getComments(e3), c2 = e3[e3.currentMode].element.scrollHeight, u2 = function(e4, t4, n3) {
                    n3 === void 0 && (n3 = "sv");
                    var r3 = document.createElement("div");
                    r3.innerHTML = e4;
                    var i2 = false;
                    r3.childElementCount === 1 && r3.lastElementChild.style.fontFamily.indexOf("monospace") > -1 && (i2 = true);
                    var o3 = r3.querySelectorAll("pre");
                    if (r3.childElementCount === 1 && o3.length === 1 && o3[0].className !== "vditor-wysiwyg" && o3[0].className !== "vditor-sv" && (i2 = true), e4.indexOf('\n<p class="p1">') === 0 && (i2 = true), r3.childElementCount === 1 && r3.firstElementChild.tagName === "TABLE" && r3.querySelector(".line-number") && r3.querySelector(".line-content") && (i2 = true), i2) {
                      var a3 = t4 || e4;
                      return /\n/.test(a3) || o3.length === 1 ? n3 === "wysiwyg" ? '<div class="vditor-wysiwyg__block" data-block="0" data-type="code-block"><pre><code>' + a3.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "<wbr></code></pre></div>" : "\n```\n" + a3.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "\n```" : n3 === "wysiwyg" ? "<code>" + a3.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</code><wbr>" : "`" + a3 + "`";
                    }
                    return false;
                  }(r2, o2, e3.currentMode), (p2 = e3.currentMode === "sv" ? (0, y.a1)(t3.target, "data-type", "code-block") : (0, y.lG)(t3.target, "CODE")) ? (e3.currentMode === "sv" ? document.execCommand("insertHTML", false, o2.replace(/&/g, "&amp;").replace(/</g, "&lt;")) : (m2 = (0, N.im)(t3.target, e3[e3.currentMode].element), p2.parentElement.tagName !== "PRE" && (o2 += i.g.ZWSP), p2.textContent = p2.textContent.substring(0, m2.start) + o2 + p2.textContent.substring(m2.end), (0, N.$j)(m2.start + o2.length, m2.start + o2.length, p2.parentElement), ((g2 = p2.parentElement) === null || g2 === void 0 ? void 0 : g2.nextElementSibling.classList.contains("vditor-" + e3.currentMode + "__preview")) && (p2.parentElement.nextElementSibling.innerHTML = p2.outerHTML, H(p2.parentElement.nextElementSibling, e3))), [3, 6]) : [3, 1];
                case 1:
                  return u2 ? (n2.pasteCode(u2), [3, 6]) : [3, 2];
                case 2:
                  return r2.trim() === "" ? [3, 3] : ((f2 = document.createElement("div")).innerHTML = r2, f2.querySelectorAll("[style]").forEach(function(e4) {
                    e4.removeAttribute("style");
                  }), f2.querySelectorAll(".vditor-copy").forEach(function(e4) {
                    e4.remove();
                  }), e3.currentMode === "ir" ? (l2.HTML2VditorIRDOM = { renderLinkDest: s2 }, e3.lute.SetJSRenderers({ renderers: l2 }), (0, N.oC)(e3.lute.HTML2VditorIRDOM(f2.innerHTML), e3)) : e3.currentMode === "wysiwyg" ? (l2.HTML2VditorDOM = { renderLinkDest: s2 }, e3.lute.SetJSRenderers({ renderers: l2 }), (0, N.oC)(e3.lute.HTML2VditorDOM(f2.innerHTML), e3)) : (l2.Md2VditorSVDOM = { renderLinkDest: s2 }, e3.lute.SetJSRenderers({ renderers: l2 }), _e(e3, e3.lute.HTML2Md(f2.innerHTML).trimRight())), e3.outline.render(e3), [3, 6]);
                case 3:
                  return a2.length > 0 && (e3.options.upload.url || e3.options.upload.handler) ? [4, Ve(e3, a2)] : [3, 5];
                case 4:
                  return b2.sent(), [3, 6];
                case 5:
                  o2.trim() !== "" && a2.length === 0 && (e3.currentMode === "ir" ? (l2.Md2VditorIRDOM = { renderLinkDest: s2 }, e3.lute.SetJSRenderers({ renderers: l2 }), (0, N.oC)(e3.lute.Md2VditorIRDOM(o2), e3)) : e3.currentMode === "wysiwyg" ? (l2.Md2VditorDOM = { renderLinkDest: s2 }, e3.lute.SetJSRenderers({ renderers: l2 }), (0, N.oC)(e3.lute.Md2VditorDOM(o2), e3)) : (l2.Md2VditorSVDOM = { renderLinkDest: s2 }, e3.lute.SetJSRenderers({ renderers: l2 }), _e(e3, o2)), e3.outline.render(e3)), b2.label = 6;
                case 6:
                  return e3.currentMode !== "sv" && ((h2 = (0, y.F9)((0, N.zh)(e3).startContainer)) && (v2 = (0, N.zh)(e3), e3[e3.currentMode].element.querySelectorAll("wbr").forEach(function(e4) {
                    e4.remove();
                  }), v2.insertNode(document.createElement("wbr")), e3.currentMode === "wysiwyg" ? h2.outerHTML = e3.lute.SpinVditorDOM(h2.outerHTML) : h2.outerHTML = e3.lute.SpinVditorIRDOM(h2.outerHTML), (0, N.ib)(e3[e3.currentMode].element, v2)), e3[e3.currentMode].element.querySelectorAll(".vditor-" + e3.currentMode + "__preview[data-render='2']").forEach(function(t4) {
                    H(t4, e3);
                  })), e3.wysiwyg.triggerRemoveComment(e3), lt(e3), e3[e3.currentMode].element.scrollHeight - c2 > Math.min(e3[e3.currentMode].element.clientHeight, window.innerHeight) / 2 && Te(e3), [2];
              }
            });
          });
        }, Ct = function(e3) {
          e3.hint.render(e3);
          var t3 = (0, N.zh)(e3).startContainer, n2 = (0, y.a1)(t3, "data-type", "code-block-info");
          if (n2)
            if (n2.textContent.replace(i.g.ZWSP, "") === "" && e3.hint.recentLanguage) {
              n2.textContent = i.g.ZWSP + e3.hint.recentLanguage, (0, N.zh)(e3).selectNodeContents(n2);
            } else {
              var r2 = [], o2 = n2.textContent.substring(0, (0, N.im)(n2, e3.ir.element).start).replace(i.g.ZWSP, "");
              i.g.CODE_LANGUAGES.forEach(function(e4) {
                e4.indexOf(o2.toLowerCase()) > -1 && r2.push({ html: e4, value: e4 });
              }), e3.hint.genHTML(r2, o2, e3);
            }
        }, Lt = function(e3, t3) {
          t3 === void 0 && (t3 = { enableAddUndoStack: true, enableHint: false, enableInput: true }), t3.enableHint && Ct(e3), clearTimeout(e3.ir.processTimeoutId), e3.ir.processTimeoutId = window.setTimeout(function() {
            if (!e3.ir.composingLock) {
              var n2 = a(e3);
              typeof e3.options.input == "function" && t3.enableInput && e3.options.input(n2), e3.options.counter.enable && e3.counter.render(e3, n2), e3.options.cache.enable && (0, d.pK)() && (localStorage.setItem(e3.options.cache.id, n2), e3.options.cache.after && e3.options.cache.after(n2)), e3.devtools && e3.devtools.renderEchart(e3), t3.enableAddUndoStack && e3.undo.addToUndoStack(e3);
            }
          }, e3.options.undoDelay);
        }, Tt = function(e3, t3) {
          var n2 = (0, N.zh)(e3), r2 = (0, y.F9)(n2.startContainer) || n2.startContainer;
          if (r2) {
            var i2 = r2.querySelector(".vditor-ir__marker--heading");
            i2 ? i2.innerHTML = t3 : (r2.insertAdjacentText("afterbegin", t3), n2.selectNodeContents(r2), n2.collapse(false)), j(e3, n2.cloneRange()), J(e3);
          }
        }, Mt = function(e3, t3, n2) {
          var r2 = (0, y.a1)(e3.startContainer, "data-type", n2);
          if (r2) {
            r2.firstElementChild.remove(), r2.lastElementChild.remove(), e3.insertNode(document.createElement("wbr"));
            var i2 = document.createElement("div");
            i2.innerHTML = t3.lute.SpinVditorIRDOM(r2.outerHTML), r2.outerHTML = i2.firstElementChild.innerHTML.trim();
          }
        }, At = function(e3, t3, n2, r2) {
          var i2 = (0, N.zh)(e3), o2 = t3.getAttribute("data-type"), a2 = i2.startContainer;
          a2.nodeType === 3 && (a2 = a2.parentElement);
          var l2 = true;
          if (t3.classList.contains("vditor-menu--current"))
            if (o2 === "quote") {
              var s2 = (0, y.lG)(a2, "BLOCKQUOTE");
              s2 && (i2.insertNode(document.createElement("wbr")), s2.outerHTML = s2.innerHTML.trim() === "" ? '<p data-block="0">' + s2.innerHTML + "</p>" : s2.innerHTML);
            } else if (o2 === "link") {
              var d2 = (0, y.a1)(i2.startContainer, "data-type", "a");
              if (d2) {
                var u2 = (0, y.fb)(i2.startContainer, "vditor-ir__link");
                u2 ? (i2.insertNode(document.createElement("wbr")), d2.outerHTML = u2.innerHTML) : d2.outerHTML = d2.querySelector(".vditor-ir__link").innerHTML + "<wbr>";
              }
            } else
              o2 === "italic" ? Mt(i2, e3, "em") : o2 === "bold" ? Mt(i2, e3, "strong") : o2 === "strike" ? Mt(i2, e3, "s") : o2 === "inline-code" ? Mt(i2, e3, "code") : o2 !== "check" && o2 !== "list" && o2 !== "ordered-list" || (tt(e3, i2, o2), l2 = false, t3.classList.remove("vditor-menu--current"));
          else {
            e3.ir.element.childNodes.length === 0 && (e3.ir.element.innerHTML = '<p data-block="0"><wbr></p>', (0, N.ib)(e3.ir.element, i2));
            var p2 = (0, y.F9)(i2.startContainer);
            if (o2 === "line") {
              if (p2) {
                var m2 = '<hr data-block="0"><p data-block="0"><wbr>\n</p>';
                p2.innerHTML.trim() === "" ? p2.outerHTML = m2 : p2.insertAdjacentHTML("afterend", m2);
              }
            } else if (o2 === "quote")
              p2 && (i2.insertNode(document.createElement("wbr")), p2.outerHTML = '<blockquote data-block="0">' + p2.outerHTML + "</blockquote>", l2 = false, t3.classList.add("vditor-menu--current"));
            else if (o2 === "link") {
              var f2 = void 0;
              f2 = i2.toString() === "" ? n2 + "<wbr>" + r2 : "" + n2 + i2.toString() + r2.replace(")", "<wbr>)"), document.execCommand("insertHTML", false, f2), l2 = false, t3.classList.add("vditor-menu--current");
            } else if (o2 === "italic" || o2 === "bold" || o2 === "strike" || o2 === "inline-code" || o2 === "code" || o2 === "table") {
              f2 = void 0;
              i2.toString() === "" ? f2 = n2 + "<wbr>" + r2 : (f2 = o2 === "code" || o2 === "table" ? "" + n2 + i2.toString() + "<wbr>" + r2 : "" + n2 + i2.toString() + r2 + "<wbr>", i2.deleteContents()), o2 !== "table" && o2 !== "code" || (f2 = "\n" + f2 + "\n\n");
              var h2 = document.createElement("span");
              h2.innerHTML = f2, i2.insertNode(h2), j(e3, i2), o2 === "table" && (i2.selectNodeContents(getSelection().getRangeAt(0).startContainer.parentElement), (0, N.Hc)(i2));
            } else
              o2 !== "check" && o2 !== "list" && o2 !== "ordered-list" || (tt(e3, i2, o2, false), l2 = false, c(e3.toolbar.elements, ["check", "list", "ordered-list"]), t3.classList.add("vditor-menu--current"));
          }
          (0, N.ib)(e3.ir.element, i2), Lt(e3), l2 && J(e3);
        }, _t = function(e3, t3, n2, r2) {
          return new (n2 || (n2 = Promise))(function(i2, o2) {
            function a2(e4) {
              try {
                s2(r2.next(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function l2(e4) {
              try {
                s2(r2.throw(e4));
              } catch (e5) {
                o2(e5);
              }
            }
            function s2(e4) {
              var t4;
              e4.done ? i2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2(function(e5) {
                e5(t4);
              })).then(a2, l2);
            }
            s2((r2 = r2.apply(e3, t3 || [])).next());
          });
        }, xt = function(e3, t3) {
          var n2, r2, i2, o2, a2 = { label: 0, sent: function() {
            if (1 & i2[0])
              throw i2[1];
            return i2[1];
          }, trys: [], ops: [] };
          return o2 = { next: l2(0), throw: l2(1), return: l2(2) }, typeof Symbol == "function" && (o2[Symbol.iterator] = function() {
            return this;
          }), o2;
          function l2(o3) {
            return function(l3) {
              return function(o4) {
                if (n2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (n2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done)
                      return i2;
                    switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                      case 0:
                      case 1:
                        i2 = o4;
                        break;
                      case 4:
                        return a2.label++, { value: o4[1], done: false };
                      case 5:
                        a2.label++, r2 = o4[1], o4 = [0];
                        continue;
                      case 7:
                        o4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!(i2 = a2.trys, (i2 = i2.length > 0 && i2[i2.length - 1]) || o4[0] !== 6 && o4[0] !== 2)) {
                          a2 = 0;
                          continue;
                        }
                        if (o4[0] === 3 && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                          a2.label = o4[1];
                          break;
                        }
                        if (o4[0] === 6 && a2.label < i2[1]) {
                          a2.label = i2[1], i2 = o4;
                          break;
                        }
                        if (i2 && a2.label < i2[2]) {
                          a2.label = i2[2], a2.ops.push(o4);
                          break;
                        }
                        i2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    o4 = t3.call(e3, a2);
                  } catch (e4) {
                    o4 = [6, e4], r2 = 0;
                  } finally {
                    n2 = i2 = 0;
                  }
                if (5 & o4[0])
                  throw o4[1];
                return { value: o4[0] ? o4[1] : void 0, done: true };
              }([o3, l3]);
            };
          }
        }, Ht = function() {
          function e3(e4) {
            var t3 = this;
            this.splitChar = "", this.lastIndex = -1, this.fillEmoji = function(e5, n2) {
              t3.element.style.display = "none";
              var r2 = decodeURIComponent(e5.getAttribute("data-value")), o2 = window.getSelection().getRangeAt(0);
              if (n2.currentMode === "ir") {
                var a2 = (0, y.a1)(o2.startContainer, "data-type", "code-block-info");
                if (a2)
                  return a2.textContent = i.g.ZWSP + r2.trimRight(), o2.selectNodeContents(a2), o2.collapse(false), Lt(n2), a2.parentElement.querySelectorAll("code").forEach(function(e6) {
                    e6.className = "language-" + r2.trimRight();
                  }), H(a2.parentElement.querySelector(".vditor-ir__preview"), n2), void (t3.recentLanguage = r2.trimRight());
              }
              if (n2.currentMode === "wysiwyg" && o2.startContainer.nodeType !== 3) {
                var l2 = o2.startContainer, s2 = void 0;
                if ((s2 = l2.classList.contains("vditor-input") ? l2 : l2.firstElementChild) && s2.classList.contains("vditor-input"))
                  return s2.value = r2.trimRight(), o2.selectNodeContents(s2), o2.collapse(false), s2.dispatchEvent(new CustomEvent("input", { detail: 1 })), void (t3.recentLanguage = r2.trimRight());
              }
              if (o2.setStart(o2.startContainer, t3.lastIndex), o2.deleteContents(), n2.options.hint.parse ? n2.currentMode === "sv" ? (0, N.oC)(n2.lute.SpinVditorSVDOM(r2), n2) : n2.currentMode === "wysiwyg" ? (0, N.oC)(n2.lute.SpinVditorDOM(r2), n2) : (0, N.oC)(n2.lute.SpinVditorIRDOM(r2), n2) : (0, N.oC)(r2, n2), t3.splitChar === ":" && r2.indexOf(":") > -1 && n2.currentMode !== "sv" && o2.insertNode(document.createTextNode(" ")), o2.collapse(false), (0, N.Hc)(o2), n2.currentMode === "wysiwyg")
                (d2 = (0, y.fb)(o2.startContainer, "vditor-wysiwyg__block")) && d2.lastElementChild.classList.contains("vditor-wysiwyg__preview") && (d2.lastElementChild.innerHTML = d2.firstElementChild.innerHTML, H(d2.lastElementChild, n2));
              else if (n2.currentMode === "ir") {
                var d2;
                (d2 = (0, y.fb)(o2.startContainer, "vditor-ir__marker--pre")) && d2.nextElementSibling.classList.contains("vditor-ir__preview") && (d2.nextElementSibling.innerHTML = d2.innerHTML, H(d2.nextElementSibling, n2));
              }
              lt(n2);
            }, this.timeId = -1, this.element = document.createElement("div"), this.element.className = "vditor-hint", this.recentLanguage = "", e4.push({ key: ":" });
          }
          return e3.prototype.render = function(e4) {
            var t3 = this;
            if (window.getSelection().focusNode) {
              var n2, r2 = getSelection().getRangeAt(0);
              n2 = r2.startContainer.textContent.substring(0, r2.startOffset) || "";
              var i2 = this.getKey(n2, e4.options.hint.extend);
              if (i2 === void 0)
                this.element.style.display = "none", clearTimeout(this.timeId);
              else if (this.splitChar === ":") {
                var o2 = i2 === "" ? e4.options.hint.emoji : e4.lute.GetEmojis(), a2 = [];
                Object.keys(o2).forEach(function(e5) {
                  e5.indexOf(i2.toLowerCase()) === 0 && (o2[e5].indexOf(".") > -1 ? a2.push({ html: '<img src="' + o2[e5] + '" title=":' + e5 + ':"/> :' + e5 + ":", value: ":" + e5 + ":" }) : a2.push({ html: '<span class="vditor-hint__emoji">' + o2[e5] + "</span>" + e5, value: o2[e5] }));
                }), this.genHTML(a2, i2, e4);
              } else
                e4.options.hint.extend.forEach(function(n3) {
                  n3.key === t3.splitChar && (clearTimeout(t3.timeId), t3.timeId = window.setTimeout(function() {
                    return _t(t3, void 0, void 0, function() {
                      var t4;
                      return xt(this, function(r3) {
                        switch (r3.label) {
                          case 0:
                            return t4 = this.genHTML, [4, n3.hint(i2)];
                          case 1:
                            return t4.apply(this, [r3.sent(), i2, e4]), [2];
                        }
                      });
                    });
                  }, e4.options.hint.delay));
                });
            }
          }, e3.prototype.genHTML = function(e4, t3, n2) {
            var r2 = this;
            if (e4.length !== 0) {
              var i2 = n2[n2.currentMode].element, o2 = (0, N.Ny)(i2), a2 = o2.left + (n2.options.outline.position === "left" ? n2.outline.element.offsetWidth : 0), l2 = o2.top, s2 = "";
              e4.forEach(function(e5, n3) {
                if (!(n3 > 7)) {
                  var r3 = e5.html;
                  if (t3 !== "") {
                    var i3 = r3.lastIndexOf(">") + 1, o3 = r3.substr(i3), a3 = o3.toLowerCase().indexOf(t3.toLowerCase());
                    a3 > -1 && (o3 = o3.substring(0, a3) + "<b>" + o3.substring(a3, a3 + t3.length) + "</b>" + o3.substring(a3 + t3.length), r3 = r3.substr(0, i3) + o3);
                  }
                  s2 += '<button data-value="' + encodeURIComponent(e5.value) + ' "\n' + (n3 === 0 ? "class='vditor-hint--current'" : "") + "> " + r3 + "</button>";
                }
              }), this.element.innerHTML = s2;
              var d2 = parseInt(document.defaultView.getComputedStyle(i2, null).getPropertyValue("line-height"), 10);
              this.element.style.top = l2 + (d2 || 22) + "px", this.element.style.left = a2 + "px", this.element.style.display = "block", this.element.style.right = "auto", this.element.querySelectorAll("button").forEach(function(e5) {
                e5.addEventListener("click", function(t4) {
                  r2.fillEmoji(e5, n2), t4.preventDefault();
                });
              }), this.element.getBoundingClientRect().bottom > window.innerHeight && (this.element.style.top = l2 - this.element.offsetHeight + "px"), this.element.getBoundingClientRect().right > window.innerWidth && (this.element.style.left = "auto", this.element.style.right = "0");
            } else
              this.element.style.display = "none";
          }, e3.prototype.select = function(e4, t3) {
            if (this.element.querySelectorAll("button").length === 0 || this.element.style.display === "none")
              return false;
            var n2 = this.element.querySelector(".vditor-hint--current");
            if (e4.key === "ArrowDown")
              return e4.preventDefault(), e4.stopPropagation(), n2.removeAttribute("class"), n2.nextElementSibling ? n2.nextElementSibling.className = "vditor-hint--current" : this.element.children[0].className = "vditor-hint--current", true;
            if (e4.key === "ArrowUp") {
              if (e4.preventDefault(), e4.stopPropagation(), n2.removeAttribute("class"), n2.previousElementSibling)
                n2.previousElementSibling.className = "vditor-hint--current";
              else {
                var r2 = this.element.children.length;
                this.element.children[r2 - 1].className = "vditor-hint--current";
              }
              return true;
            }
            return !((0, d.yl)(e4) || e4.shiftKey || e4.altKey || e4.key !== "Enter" || e4.isComposing) && (e4.preventDefault(), e4.stopPropagation(), this.fillEmoji(n2, t3), true);
          }, e3.prototype.getKey = function(e4, t3) {
            var n2, r2 = this;
            if (this.lastIndex = -1, this.splitChar = "", t3.forEach(function(t4) {
              var n3 = e4.lastIndexOf(t4.key);
              r2.lastIndex < n3 && (r2.splitChar = t4.key, r2.lastIndex = n3);
            }), this.lastIndex === -1)
              return n2;
            var i2 = e4.split(this.splitChar), a2 = i2[i2.length - 1];
            if (i2.length > 1 && a2.trim() === a2)
              if (i2.length === 2 && i2[0] === "" && i2[1].length < 32)
                n2 = i2[1];
              else {
                var l2 = i2[i2.length - 2].slice(-1);
                (0, o.X)(l2) === " " && a2.length < 32 && (n2 = a2);
              }
            return n2;
          }, e3;
        }(), Nt = function() {
          function e3(e4) {
            this.composingLock = false;
            var t3 = document.createElement("div");
            t3.className = "vditor-ir", t3.innerHTML = '<pre class="vditor-reset" placeholder="' + e4.options.placeholder + '"\n contenteditable="true" spellcheck="false"></pre>', this.element = t3.firstElementChild, this.bindEvent(e4), we(e4, this.element), Ee(e4, this.element), ke(e4, this.element), Me(e4, this.element), Ae(e4, this.element), Se(e4, this.element), Ce(e4, this.element, this.copy), Le(e4, this.element, this.copy);
          }
          return e3.prototype.copy = function(e4, t3) {
            var n2 = getSelection().getRangeAt(0);
            if (n2.toString() !== "") {
              e4.stopPropagation(), e4.preventDefault();
              var r2 = document.createElement("div");
              r2.appendChild(n2.cloneContents()), e4.clipboardData.setData("text/plain", t3.lute.VditorIRDOM2Md(r2.innerHTML).trim()), e4.clipboardData.setData("text/html", "");
            }
          }, e3.prototype.bindEvent = function(e4) {
            var t3 = this;
            this.element.addEventListener("paste", function(t4) {
              St(e4, t4, { pasteCode: function(e5) {
                document.execCommand("insertHTML", false, e5);
              } });
            }), this.element.addEventListener("compositionstart", function(e5) {
              t3.composingLock = true;
            }), this.element.addEventListener("compositionend", function(n2) {
              (0, d.vU)() || j(e4, getSelection().getRangeAt(0).cloneRange()), t3.composingLock = false;
            }), this.element.addEventListener("input", function(n2) {
              n2.inputType !== "deleteByDrag" && n2.inputType !== "insertFromDrop" && (t3.preventInput ? t3.preventInput = false : t3.composingLock || n2.data === "\u2018" || n2.data === "\u201C" || n2.data === "\u300A" || j(e4, getSelection().getRangeAt(0).cloneRange(), false, n2));
            }), this.element.addEventListener("click", function(n2) {
              if (n2.target.tagName === "INPUT")
                return n2.target.checked ? n2.target.setAttribute("checked", "checked") : n2.target.removeAttribute("checked"), t3.preventInput = true, void Lt(e4);
              var r2 = (0, N.zh)(e4), o2 = (0, y.fb)(n2.target, "vditor-ir__preview");
              if (o2 || (o2 = (0, y.fb)(r2.startContainer, "vditor-ir__preview")), o2 && (o2.previousElementSibling.firstElementChild ? r2.selectNodeContents(o2.previousElementSibling.firstElementChild) : r2.selectNodeContents(o2.previousElementSibling), r2.collapse(true), (0, N.Hc)(r2), Te(e4)), n2.target.tagName === "IMG") {
                var a2 = n2.target.parentElement.querySelector(".vditor-ir__marker--link");
                a2 && (r2.selectNode(a2), (0, N.Hc)(r2));
              }
              var l2 = (0, y.a1)(n2.target, "data-type", "a");
              if (!l2 || l2.classList.contains("vditor-ir__node--expand")) {
                if (n2.target.isEqualNode(t3.element) && t3.element.lastElementChild && r2.collapsed) {
                  var s2 = t3.element.lastElementChild.getBoundingClientRect();
                  n2.y > s2.top + s2.height && (t3.element.lastElementChild.tagName === "P" && t3.element.lastElementChild.textContent.trim().replace(i.g.ZWSP, "") === "" ? (r2.selectNodeContents(t3.element.lastElementChild), r2.collapse(false)) : (t3.element.insertAdjacentHTML("beforeend", '<p data-block="0">' + i.g.ZWSP + "<wbr></p>"), (0, N.ib)(t3.element, r2)));
                }
                r2.toString() === "" ? P(r2, e4) : setTimeout(function() {
                  P((0, N.zh)(e4), e4);
                }), O(n2, e4), J(e4);
              } else
                window.open(l2.querySelector(":scope > .vditor-ir__marker--link").textContent);
            }), this.element.addEventListener("keyup", function(n2) {
              if (!n2.isComposing && !(0, d.yl)(n2))
                if (n2.key === "Enter" && Te(e4), J(e4), n2.key !== "Backspace" && n2.key !== "Delete" || e4.ir.element.innerHTML === "" || e4.ir.element.childNodes.length !== 1 || !e4.ir.element.firstElementChild || e4.ir.element.firstElementChild.tagName !== "P" || e4.ir.element.firstElementChild.childElementCount !== 0 || e4.ir.element.textContent !== "" && e4.ir.element.textContent !== "\n") {
                  var r2 = (0, N.zh)(e4);
                  n2.key === "Backspace" ? ((0, d.vU)() && r2.startContainer.textContent === "\n" && r2.startOffset === 1 && (r2.startContainer.textContent = "", P(r2, e4)), t3.element.querySelectorAll(".language-math").forEach(function(e5) {
                    var t4 = e5.querySelector("br");
                    t4 && t4.remove();
                  })) : n2.key.indexOf("Arrow") > -1 ? (n2.key !== "ArrowLeft" && n2.key !== "ArrowRight" || Ct(e4), P(r2, e4)) : n2.keyCode === 229 && n2.code === "" && n2.key === "Unidentified" && P(r2, e4);
                  var o2 = (0, y.fb)(r2.startContainer, "vditor-ir__preview");
                  if (o2) {
                    if (n2.key === "ArrowUp" || n2.key === "ArrowLeft")
                      return o2.previousElementSibling.firstElementChild ? r2.selectNodeContents(o2.previousElementSibling.firstElementChild) : r2.selectNodeContents(o2.previousElementSibling), r2.collapse(false), n2.preventDefault(), true;
                    if (o2.tagName === "SPAN" && (n2.key === "ArrowDown" || n2.key === "ArrowRight"))
                      return o2.parentElement.getAttribute("data-type") === "html-entity" ? (o2.parentElement.insertAdjacentText("afterend", i.g.ZWSP), r2.setStart(o2.parentElement.nextSibling, 1)) : r2.selectNodeContents(o2.parentElement.lastElementChild), r2.collapse(false), n2.preventDefault(), true;
                  }
                } else
                  e4.ir.element.innerHTML = "";
            });
          }, e3;
        }(), Dt = function(e3) {
          return e3.currentMode === "sv" ? e3.lute.Md2HTML(a(e3)) : e3.currentMode === "wysiwyg" ? e3.lute.VditorDOM2HTML(e3.wysiwyg.element.innerHTML) : e3.currentMode === "ir" ? e3.lute.VditorIRDOM2HTML(e3.ir.element.innerHTML) : void 0;
        }, Ot = n(792), It = n(198), jt = function() {
          function e3(e4) {
            this.element = document.createElement("div"), this.element.className = "vditor-outline", this.element.innerHTML = '<div class="vditor-outline__title">' + e4 + '</div>\n<div class="vditor-outline__content"></div>';
          }
          return e3.prototype.render = function(e4) {
            return e4.preview.element.style.display === "block" ? (0, It.k)(e4.preview.element.lastElementChild, this.element.lastElementChild, e4) : (0, It.k)(e4[e4.currentMode].element, this.element.lastElementChild, e4);
          }, e3.prototype.toggle = function(e4, t3) {
            var n2;
            t3 === void 0 && (t3 = true);
            var r2 = (n2 = e4.toolbar.elements.outline) === null || n2 === void 0 ? void 0 : n2.firstElementChild;
            if (t3 && window.innerWidth >= i.g.MOBILE_WIDTH ? (this.element.style.display = "block", this.render(e4), r2 == null || r2.classList.add("vditor-menu--current")) : (this.element.style.display = "none", r2 == null || r2.classList.remove("vditor-menu--current")), getSelection().rangeCount > 0) {
              var o2 = getSelection().getRangeAt(0);
              e4[e4.currentMode].element.contains(o2.startContainer) ? (0, N.Hc)(o2) : e4[e4.currentMode].element.focus();
            }
            W(e4);
          }, e3;
        }(), Rt = n(207), Pt = function() {
          function e3(e4) {
            var t3 = this;
            this.element = document.createElement("div"), this.element.className = "vditor-preview";
            var n2 = document.createElement("div");
            n2.className = "vditor-reset", e4.options.classes.preview && n2.classList.add(e4.options.classes.preview), n2.style.maxWidth = e4.options.preview.maxWidth + "px", n2.addEventListener("copy", function(n3) {
              if (n3.target.tagName !== "TEXTAREA") {
                var r3 = document.createElement("div");
                r3.className = "vditor-reset", r3.appendChild(getSelection().getRangeAt(0).cloneContents()), t3.copyToX(e4, r3), n3.preventDefault();
              }
            }), n2.addEventListener("click", function(r3) {
              var i3 = (0, y.lG)(r3.target, "SPAN");
              if (i3 && (0, y.fb)(i3, "vditor-toc")) {
                var o3 = n2.querySelector("#" + i3.getAttribute("data-target-id"));
                o3 && (t3.element.scrollTop = o3.offsetTop);
              } else
                r3.target.tagName === "IMG" && (0, B.E)(r3.target, e4.options.lang, e4.options.theme);
            });
            var r2 = e4.options.preview.actions, i2 = document.createElement("div");
            i2.className = "vditor-preview__action";
            for (var o2 = [], a2 = 0; a2 < r2.length; a2++) {
              var l2 = r2[a2];
              if (typeof l2 != "object")
                switch (l2) {
                  case "desktop":
                    o2.push('<button type="button" class="vditor-preview__action--current" data-type="desktop">Desktop</button>');
                    break;
                  case "tablet":
                    o2.push('<button type="button" data-type="tablet">Tablet</button>');
                    break;
                  case "mobile":
                    o2.push('<button type="button" data-type="mobile">Mobile/Wechat</button>');
                    break;
                  case "mp-wechat":
                    o2.push('<button type="button" data-type="mp-wechat" class="vditor-tooltipped vditor-tooltipped__w" aria-label="\u590D\u5236\u5230\u516C\u4F17\u53F7"><svg><use xlink:href="#vditor-icon-mp-wechat"></use></svg></button>');
                    break;
                  case "zhihu":
                    o2.push('<button type="button" data-type="zhihu" class="vditor-tooltipped vditor-tooltipped__w" aria-label="\u590D\u5236\u5230\u77E5\u4E4E"><svg><use xlink:href="#vditor-icon-zhihu"></use></svg></button>');
                }
              else
                o2.push('<button type="button" data-type="' + l2.key + '" class="' + l2.className + '"' + (l2.tooltip ? ' aria-label="' + l2.tooltip + '"' : "") + '">' + l2.text + "</button>");
            }
            i2.innerHTML = o2.join(""), r2.length === 0 && (i2.style.display = "none"), this.element.appendChild(i2), this.element.appendChild(n2), i2.addEventListener((0, d.Le)(), function(o3) {
              var a3 = (0, b.S)(o3.target, "BUTTON");
              if (a3) {
                var l3 = a3.getAttribute("data-type"), s2 = r2.find(function(e5) {
                  return (e5 == null ? void 0 : e5.key) === l3;
                });
                s2 ? s2.click(l3) : l3 !== "mp-wechat" && l3 !== "zhihu" ? (n2.style.width = l3 === "desktop" ? "auto" : l3 === "tablet" ? "780px" : "360px", n2.scrollWidth > n2.parentElement.clientWidth && (n2.style.width = "auto"), t3.render(e4), i2.querySelectorAll("button").forEach(function(e5) {
                  e5.classList.remove("vditor-preview__action--current");
                }), a3.classList.add("vditor-preview__action--current")) : t3.copyToX(e4, t3.element.lastElementChild.cloneNode(true), l3);
              }
            });
          }
          return e3.prototype.render = function(e4, t3) {
            var n2 = this;
            if (clearTimeout(this.mdTimeoutId), this.element.style.display !== "none")
              if (t3)
                this.element.lastElementChild.innerHTML = t3;
              else if (a(e4).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") !== "") {
                var r2 = new Date().getTime(), i2 = a(e4);
                this.mdTimeoutId = window.setTimeout(function() {
                  if (e4.options.preview.url) {
                    var t4 = new XMLHttpRequest();
                    t4.open("POST", e4.options.preview.url), t4.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), t4.onreadystatechange = function() {
                      if (t4.readyState === XMLHttpRequest.DONE)
                        if (t4.status === 200) {
                          var o3 = JSON.parse(t4.responseText);
                          if (o3.code !== 0)
                            return void e4.tip.show(o3.msg);
                          e4.options.preview.transform && (o3.data = e4.options.preview.transform(o3.data)), n2.element.lastElementChild.innerHTML = o3.data, n2.afterRender(e4, r2);
                        } else {
                          var a2 = e4.lute.Md2HTML(i2);
                          e4.options.preview.transform && (a2 = e4.options.preview.transform(a2)), n2.element.lastElementChild.innerHTML = a2, n2.afterRender(e4, r2);
                        }
                    }, t4.send(JSON.stringify({ markdownText: i2 }));
                  } else {
                    var o2 = e4.lute.Md2HTML(i2);
                    e4.options.preview.transform && (o2 = e4.options.preview.transform(o2)), n2.element.lastElementChild.innerHTML = o2, n2.afterRender(e4, r2);
                  }
                }, e4.options.preview.delay);
              } else
                this.element.lastElementChild.innerHTML = "";
            else
              this.element.getAttribute("data-type") === "renderPerformance" && e4.tip.hide();
          }, e3.prototype.afterRender = function(e4, t3) {
            e4.options.preview.parse && e4.options.preview.parse(this.element);
            var n2 = new Date().getTime() - t3;
            new Date().getTime() - t3 > 2600 ? (e4.tip.show(window.VditorI18n.performanceTip.replace("${x}", n2.toString())), e4.preview.element.setAttribute("data-type", "renderPerformance")) : e4.preview.element.getAttribute("data-type") === "renderPerformance" && (e4.tip.hide(), e4.preview.element.removeAttribute("data-type"));
            var r2 = e4.preview.element.querySelector(".vditor-comment--focus");
            r2 && r2.classList.remove("vditor-comment--focus"), (0, S.O)(e4.preview.element.lastElementChild), (0, T.s)(e4.options.preview.hljs, e4.preview.element.lastElementChild, e4.options.cdn), (0, A.i)(e4.preview.element.lastElementChild, e4.options.cdn, e4.options.theme), (0, C.P)(e4.preview.element.lastElementChild, e4.options.cdn), (0, L.v)(e4.preview.element.lastElementChild, e4.options.cdn), (0, k.p)(e4.preview.element.lastElementChild, e4.options.cdn, e4.options.theme), (0, _.P)(e4.preview.element.lastElementChild, e4.options.cdn, e4.options.theme), (0, x.B)(e4.preview.element.lastElementChild, e4.options.cdn), (0, E.Q)(e4.preview.element.lastElementChild, e4.options.cdn), (0, Rt.Y)(e4.preview.element.lastElementChild);
            var i2 = e4.preview.element, o2 = e4.outline.render(e4);
            o2 === "" && (o2 = "[ToC]"), i2.querySelectorAll('[data-type="toc-block"]').forEach(function(t4) {
              t4.innerHTML = o2, (0, M.H)(t4, { cdn: e4.options.cdn, math: e4.options.preview.math });
            }), (0, M.H)(e4.preview.element.lastElementChild, { cdn: e4.options.cdn, math: e4.options.preview.math });
          }, e3.prototype.copyToX = function(e4, t3, n2) {
            n2 === void 0 && (n2 = "mp-wechat"), n2 !== "zhihu" ? t3.querySelectorAll(".katex-html .base").forEach(function(e5) {
              e5.style.display = "initial";
            }) : t3.querySelectorAll(".language-math").forEach(function(e5) {
              e5.outerHTML = '<img class="Formula-image" data-eeimg="true" src="//www.zhihu.com/equation?tex=" alt="' + e5.getAttribute("data-math") + '\\" style="display: block; margin: 0 auto; max-width: 100%;">';
            }), t3.style.backgroundColor = "#fff", t3.querySelectorAll("code").forEach(function(e5) {
              e5.style.backgroundImage = "none";
            }), this.element.append(t3);
            var r2 = t3.ownerDocument.createRange();
            r2.selectNode(t3), (0, N.Hc)(r2), document.execCommand("copy"), this.element.lastElementChild.remove(), e4.tip.show("\u5DF2\u590D\u5236\uFF0C\u53EF\u5230" + (n2 === "zhihu" ? "\u77E5\u4E4E" : "\u5FAE\u4FE1\u516C\u4F17\u53F7\u5E73\u53F0") + "\u8FDB\u884C\u7C98\u8D34");
          }, e3;
        }(), Bt = function() {
          function e3(e4) {
            this.element = document.createElement("div"), this.element.className = "vditor-resize vditor-resize--" + e4.options.resize.position, this.element.innerHTML = '<div><svg><use xlink:href="#vditor-icon-resize"></use></svg></div>', this.bindEvent(e4);
          }
          return e3.prototype.bindEvent = function(e4) {
            var t3 = this;
            this.element.addEventListener("mousedown", function(n2) {
              var r2 = document, i2 = n2.clientY, o2 = e4.element.offsetHeight, a2 = 63 + e4.element.querySelector(".vditor-toolbar").clientHeight;
              r2.ondragstart = function() {
                return false;
              }, window.captureEvents && window.captureEvents(), t3.element.classList.add("vditor-resize--selected"), r2.onmousemove = function(t4) {
                e4.options.resize.position === "top" ? e4.element.style.height = Math.max(a2, o2 + (i2 - t4.clientY)) + "px" : e4.element.style.height = Math.max(a2, o2 + (t4.clientY - i2)) + "px", e4.options.typewriterMode && (e4.sv.element.style.paddingBottom = e4.sv.element.parentElement.offsetHeight / 2 + "px");
              }, r2.onmouseup = function() {
                e4.options.resize.after && e4.options.resize.after(e4.element.offsetHeight - o2), window.captureEvents && window.captureEvents(), r2.onmousemove = null, r2.onmouseup = null, r2.ondragstart = null, r2.onselectstart = null, r2.onselect = null, t3.element.classList.remove("vditor-resize--selected");
              };
            });
          }, e3;
        }(), qt = function() {
          function e3(e4) {
            this.composingLock = false, this.element = document.createElement("pre"), this.element.className = "vditor-sv vditor-reset", this.element.setAttribute("placeholder", e4.options.placeholder), this.element.setAttribute("contenteditable", "true"), this.element.setAttribute("spellcheck", "false"), this.bindEvent(e4), we(e4, this.element), ke(e4, this.element), Me(e4, this.element), Ae(e4, this.element), Se(e4, this.element), Ce(e4, this.element, this.copy), Le(e4, this.element, this.copy);
          }
          return e3.prototype.copy = function(e4, t3) {
            e4.stopPropagation(), e4.preventDefault(), e4.clipboardData.setData("text/plain", be(t3[t3.currentMode].element));
          }, e3.prototype.bindEvent = function(e4) {
            var t3 = this;
            this.element.addEventListener("paste", function(t4) {
              St(e4, t4, { pasteCode: function(e5) {
                document.execCommand("insertHTML", false, e5);
              } });
            }), this.element.addEventListener("scroll", function() {
              if (e4.preview.element.style.display === "block") {
                var n2 = t3.element.scrollTop, r2 = t3.element.clientHeight, i2 = t3.element.scrollHeight - parseFloat(t3.element.style.paddingBottom || "0"), o2 = e4.preview.element;
                o2.scrollTop = n2 / r2 > 0.5 ? (n2 + r2) * o2.scrollHeight / i2 - r2 : n2 * o2.scrollHeight / i2;
              }
            }), this.element.addEventListener("compositionstart", function(e5) {
              t3.composingLock = true;
            }), this.element.addEventListener("compositionend", function(n2) {
              (0, d.vU)() || q(e4, n2), t3.composingLock = false;
            }), this.element.addEventListener("input", function(n2) {
              n2.inputType !== "deleteByDrag" && n2.inputType !== "insertFromDrop" && (t3.composingLock || n2.data === "\u2018" || n2.data === "\u201C" || n2.data === "\u300A" || (t3.preventInput ? t3.preventInput = false : q(e4, n2)));
            }), this.element.addEventListener("keyup", function(t4) {
              t4.isComposing || (0, d.yl)(t4) || (t4.key !== "Backspace" && t4.key !== "Delete" || e4.sv.element.innerHTML === "" || e4.sv.element.childNodes.length !== 1 || !e4.sv.element.firstElementChild || e4.sv.element.firstElementChild.tagName !== "DIV" || e4.sv.element.firstElementChild.childElementCount !== 2 || e4.sv.element.firstElementChild.textContent !== "" && e4.sv.element.textContent !== "\n" ? t4.key === "Enter" && Te(e4) : e4.sv.element.innerHTML = "");
            });
          }, e3;
        }(), Vt = function() {
          function e3() {
            this.element = document.createElement("div"), this.element.className = "vditor-tip";
          }
          return e3.prototype.show = function(e4, t3) {
            var n2 = this;
            if (t3 === void 0 && (t3 = 6e3), this.element.className = "vditor-tip vditor-tip--show", t3 === 0)
              return this.element.innerHTML = '<div class="vditor-tip__content">' + e4 + '\n<div class="vditor-tip__close">X</div></div>', void this.element.querySelector(".vditor-tip__close").addEventListener("click", function() {
                n2.hide();
              });
            this.element.innerHTML = '<div class="vditor-tip__content">' + e4 + "</div>", setTimeout(function() {
              n2.hide();
            }, t3);
          }, e3.prototype.hide = function() {
            this.element.className = "vditor-messageElementtip", this.element.innerHTML = "";
          }, e3;
        }(), Ut = function(e3, t3) {
          if (t3.options.preview.mode !== e3) {
            switch (t3.options.preview.mode = e3, e3) {
              case "both":
                t3.sv.element.style.display = "block", t3.preview.element.style.display = "block", t3.preview.render(t3), u(t3.toolbar.elements, ["both"]);
                break;
              case "editor":
                t3.sv.element.style.display = "block", t3.preview.element.style.display = "none", c(t3.toolbar.elements, ["both"]);
            }
            t3.devtools && t3.devtools.renderEchart(t3);
          }
        }, Wt = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), zt = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return t4.options.preview.mode === "both" && r2.element.children[0].classList.add("vditor-menu--current"), r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              r2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) || (e4.preventDefault(), t4.currentMode === "sv" && (t4.options.preview.mode === "both" ? Ut("editor", t4) : Ut("both", t4)));
            }), r2;
          }
          return Wt(t3, e3), t3;
        }(he), Gt = function() {
          this.element = document.createElement("div"), this.element.className = "vditor-toolbar__br";
        }, Kt = n(968), Ft = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), Zt = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this, o2 = r2.element.children[0], a2 = document.createElement("div");
            a2.className = "vditor-hint" + (n2.level === 2 ? "" : " vditor-panel--arrow");
            var l2 = "";
            return i.g.CODE_THEME.forEach(function(e4) {
              l2 += "<button>" + e4 + "</button>";
            }), a2.innerHTML = '<div style="overflow: auto;max-height:' + window.innerHeight / 2 + 'px">' + l2 + "</div>", a2.addEventListener((0, d.Le)(), function(e4) {
              e4.target.tagName === "BUTTON" && (v(t4, ["subToolbar"]), t4.options.preview.hljs.style = e4.target.textContent, (0, Kt.Y)(e4.target.textContent, t4.options.cdn), e4.preventDefault(), e4.stopPropagation());
            }), r2.element.appendChild(a2), g(t4, a2, o2, n2.level), r2;
          }
          return Ft(t3, e3), t3;
        }(he), Jt = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), Xt = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this, i2 = r2.element.children[0], o2 = document.createElement("div");
            o2.className = "vditor-hint" + (n2.level === 2 ? "" : " vditor-panel--arrow");
            var a2 = "";
            return Object.keys(t4.options.preview.theme.list).forEach(function(e4) {
              a2 += '<button data-type="' + e4 + '">' + t4.options.preview.theme.list[e4] + "</button>";
            }), o2.innerHTML = '<div style="overflow: auto;max-height:' + window.innerHeight / 2 + 'px">' + a2 + "</div>", o2.addEventListener((0, d.Le)(), function(e4) {
              e4.target.tagName === "BUTTON" && (v(t4, ["subToolbar"]), t4.options.preview.theme.current = e4.target.getAttribute("data-type"), (0, V.Z)(t4.options.preview.theme.current, t4.options.preview.theme.path), e4.preventDefault(), e4.stopPropagation());
            }), r2.element.appendChild(o2), g(t4, o2, i2, n2.level), r2;
          }
          return Jt(t3, e3), t3;
        }(he), Yt = function() {
          function e3(e4) {
            this.element = document.createElement("span"), this.element.className = "vditor-counter vditor-tooltipped vditor-tooltipped__nw", this.render(e4, "");
          }
          return e3.prototype.render = function(e4, t3) {
            var n2 = t3.endsWith("\n") ? t3.length - 1 : t3.length;
            if (e4.options.counter.type === "text" && e4[e4.currentMode]) {
              var r2 = e4[e4.currentMode].element.cloneNode(true);
              r2.querySelectorAll(".vditor-wysiwyg__preview").forEach(function(e5) {
                e5.remove();
              }), n2 = r2.textContent.length;
            }
            typeof e4.options.counter.max == "number" ? (n2 > e4.options.counter.max ? this.element.className = "vditor-counter vditor-counter--error" : this.element.className = "vditor-counter", this.element.innerHTML = n2 + "/" + e4.options.counter.max) : this.element.innerHTML = "" + n2, this.element.setAttribute("aria-label", e4.options.counter.type), e4.options.counter.after && e4.options.counter.after(n2, { enable: e4.options.counter.enable, max: e4.options.counter.max, type: e4.options.counter.type });
          }, e3;
        }(), Qt = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), $t = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2.element.children[0].innerHTML = n2.icon, r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              e4.preventDefault(), e4.currentTarget.classList.contains(i.g.CLASS_MENU_DISABLED) || n2.click(e4, t4);
            }), r2;
          }
          return Qt(t3, e3), t3;
        }(he), en = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), tn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2.element.firstElementChild.addEventListener((0, d.Le)(), function(e4) {
              var n3 = r2.element.firstElementChild;
              n3.classList.contains(i.g.CLASS_MENU_DISABLED) || (e4.preventDefault(), n3.classList.contains("vditor-menu--current") ? (n3.classList.remove("vditor-menu--current"), t4.devtools.element.style.display = "none", W(t4)) : (n3.classList.add("vditor-menu--current"), t4.devtools.element.style.display = "block", W(t4), t4.devtools.renderEchart(t4)));
            }), r2;
          }
          return en(t3, e3), t3;
        }(he), nn = function() {
          this.element = document.createElement("div"), this.element.className = "vditor-toolbar__divider";
        }, rn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), on = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this, i2 = document.createElement("div");
            i2.className = "vditor-panel vditor-panel--arrow";
            var o2 = "";
            Object.keys(t4.options.hint.emoji).forEach(function(e4) {
              var n3 = t4.options.hint.emoji[e4];
              n3.indexOf(".") > -1 ? o2 += '<button data-value=":' + e4 + ': " data-key=":' + e4 + ':"><img\ndata-value=":' + e4 + ': " data-key=":' + e4 + ':" class="vditor-emojis__icon" src="' + n3 + '"/></button>' : o2 += '<button data-value="' + n3 + ' "\n data-key="' + e4 + '"><span class="vditor-emojis__icon">' + n3 + "</span></button>";
            });
            var a2 = '<div class="vditor-emojis__tail">\n    <span class="vditor-emojis__tip"></span><span>' + (t4.options.hint.emojiTail || "") + "</span>\n</div>";
            return i2.innerHTML = '<div class="vditor-emojis" style="max-height: ' + (t4.options.height === "auto" ? "auto" : t4.options.height - 80) + 'px">' + o2 + "</div>" + a2, r2.element.appendChild(i2), g(t4, i2, r2.element.children[0], n2.level), r2._bindEvent(t4, i2), r2;
          }
          return rn(t3, e3), t3.prototype._bindEvent = function(e4, t4) {
            t4.querySelectorAll(".vditor-emojis button").forEach(function(n2) {
              n2.addEventListener((0, d.Le)(), function(r2) {
                r2.preventDefault();
                var i2 = n2.getAttribute("data-value"), o2 = (0, N.zh)(e4), a2 = i2;
                if (e4.currentMode === "wysiwyg" ? a2 = e4.lute.SpinVditorDOM(i2) : e4.currentMode === "ir" && (a2 = e4.lute.SpinVditorIRDOM(i2)), i2.indexOf(":") > -1 && e4.currentMode !== "sv") {
                  var l2 = document.createElement("div");
                  l2.innerHTML = a2, a2 = l2.firstElementChild.firstElementChild.outerHTML + " ", (0, N.oC)(a2, e4);
                } else
                  o2.extractContents(), o2.insertNode(document.createTextNode(i2));
                o2.collapse(false), (0, N.Hc)(o2), t4.style.display = "none", lt(e4);
              }), n2.addEventListener("mouseover", function(e5) {
                e5.target.tagName === "BUTTON" && (t4.querySelector(".vditor-emojis__tip").innerHTML = e5.target.getAttribute("data-key"));
              });
            });
          }, t3;
        }(he), an = function(e3, t3, n2) {
          var r2 = document.createElement("a");
          "download" in r2 ? (r2.download = n2, r2.style.display = "none", r2.href = URL.createObjectURL(new Blob([t3])), document.body.appendChild(r2), r2.click(), r2.remove()) : e3.tip.show(window.VditorI18n.downloadTip, 0);
        }, ln = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), sn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this, i2 = r2.element.children[0], o2 = document.createElement("div");
            return o2.className = "vditor-hint" + (n2.level === 2 ? "" : " vditor-panel--arrow"), o2.innerHTML = '<button data-type="markdown">Markdown</button>\n<button data-type="pdf">PDF</button>\n<button data-type="html">HTML</button>', o2.addEventListener((0, d.Le)(), function(e4) {
              var n3 = e4.target;
              if (n3.tagName === "BUTTON") {
                switch (n3.getAttribute("data-type")) {
                  case "markdown":
                    !function(e5) {
                      var t5 = a(e5);
                      an(e5, t5, t5.substr(0, 10) + ".md");
                    }(t4);
                    break;
                  case "pdf":
                    !function(e5) {
                      e5.tip.show(window.VditorI18n.generate, 3800);
                      var t5 = document.querySelector("iframe");
                      t5.contentDocument.open(), t5.contentDocument.write('<link rel="stylesheet" href="' + e5.options.cdn + '/dist/index.css"/>\n<script src="' + e5.options.cdn + `/dist/method.min.js"><\/script>
<div id="preview"></div>
<script>
window.addEventListener("message", (e) => {
  if(!e.data) {
    return;
  }
  Vditor.preview(document.getElementById('preview'), e.data, {
    markdown: {
      theme: "` + e5.options.preview.theme + '"\n    },\n    hljs: {\n      style: "' + e5.options.preview.hljs.style + '"\n    }\n  });\n  setTimeout(() => {\n        window.print();\n    }, 3600);\n}, false);\n<\/script>'), t5.contentDocument.close(), setTimeout(function() {
                        t5.contentWindow.postMessage(a(e5), "*");
                      }, 200);
                    }(t4);
                    break;
                  case "html":
                    !function(e5) {
                      var t5 = Dt(e5), n4 = '<html><head><link rel="stylesheet" type="text/css" href="' + e5.options.cdn + '/dist/index.css"/>\n<script src="' + e5.options.cdn + "/dist/js/i18n/" + e5.options.lang + '.js"><\/script>\n<script src="' + e5.options.cdn + '/dist/method.min.js"><\/script></head>\n<body><div class="vditor-reset" id="preview">' + t5 + "</div>\n<script>\n    const previewElement = document.getElementById('preview')\n    Vditor.setContentTheme('" + e5.options.preview.theme.current + "', '" + e5.options.preview.theme.path + "');\n    Vditor.codeRender(previewElement);\n    Vditor.highlightRender(" + JSON.stringify(e5.options.preview.hljs) + ", previewElement, '" + e5.options.cdn + "');\n    Vditor.mathRender(previewElement, {\n        cdn: '" + e5.options.cdn + "',\n        math: " + JSON.stringify(e5.options.preview.math) + ",\n    });\n    Vditor.mermaidRender(previewElement, '" + e5.options.cdn + "', '" + e5.options.theme + "');\n    Vditor.flowchartRender(previewElement, '" + e5.options.cdn + "');\n    Vditor.graphvizRender(previewElement, '" + e5.options.cdn + "');\n    Vditor.chartRender(previewElement, '" + e5.options.cdn + "', '" + e5.options.theme + "');\n    Vditor.mindmapRender(previewElement, '" + e5.options.cdn + "', '" + e5.options.theme + "');\n    Vditor.abcRender(previewElement, '" + e5.options.cdn + `');
    Vditor.mediaRender(previewElement);
    Vditor.speechRender(previewElement);
<\/script>
<script src="` + e5.options.cdn + "/dist/js/icons/" + e5.options.icon + '.js"><\/script></body></html>';
                      an(e5, n4, t5.substr(0, 10) + ".html");
                    }(t4);
                }
                v(t4, ["subToolbar"]), e4.preventDefault(), e4.stopPropagation();
              }
            }), r2.element.appendChild(o2), g(t4, o2, i2, n2.level), r2;
          }
          return ln(t3, e3), t3;
        }(he), dn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), cn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2._bindEvent(t4, n2), r2;
          }
          return dn(t3, e3), t3.prototype._bindEvent = function(e4, t4) {
            this.element.children[0].addEventListener((0, d.Le)(), function(n2) {
              n2.preventDefault(), e4.element.className.includes("vditor--fullscreen") ? (t4.level || (this.innerHTML = t4.icon), e4.element.style.zIndex = "", document.body.style.overflow = "", e4.element.classList.remove("vditor--fullscreen"), Object.keys(e4.toolbar.elements).forEach(function(t5) {
                var n3 = e4.toolbar.elements[t5].firstChild;
                n3 && (n3.className = n3.className.replace("__s", "__n"));
              }), e4.counter && (e4.counter.element.className = e4.counter.element.className.replace("__s", "__n"))) : (t4.level || (this.innerHTML = '<svg><use xlink:href="#vditor-icon-contract"></use></svg>'), e4.element.style.zIndex = e4.options.fullscreen.index.toString(), document.body.style.overflow = "hidden", e4.element.classList.add("vditor--fullscreen"), Object.keys(e4.toolbar.elements).forEach(function(t5) {
                var n3 = e4.toolbar.elements[t5].firstChild;
                n3 && (n3.className = n3.className.replace("__n", "__s"));
              }), e4.counter && (e4.counter.element.className = e4.counter.element.className.replace("__n", "__s"))), e4.devtools && e4.devtools.renderEchart(e4), t4.click && t4.click(n2, e4), W(e4), z(e4);
            });
          }, t3;
        }(he), un = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), pn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this, i2 = document.createElement("div");
            return i2.className = "vditor-hint vditor-panel--arrow", i2.innerHTML = '<button data-tag="h1" data-value="# ">' + window.VditorI18n.heading1 + " " + (0, d.ns)("&lt;\u2325\u23181>") + '</button>\n<button data-tag="h2" data-value="## ">' + window.VditorI18n.heading2 + " &lt;" + (0, d.ns)("\u2325\u23182") + '></button>\n<button data-tag="h3" data-value="### ">' + window.VditorI18n.heading3 + " &lt;" + (0, d.ns)("\u2325\u23183") + '></button>\n<button data-tag="h4" data-value="#### ">' + window.VditorI18n.heading4 + " &lt;" + (0, d.ns)("\u2325\u23184") + '></button>\n<button data-tag="h5" data-value="##### ">' + window.VditorI18n.heading5 + " &lt;" + (0, d.ns)("\u2325\u23185") + '></button>\n<button data-tag="h6" data-value="###### ">' + window.VditorI18n.heading6 + " &lt;" + (0, d.ns)("\u2325\u23186") + "></button>", r2.element.appendChild(i2), r2._bindEvent(t4, i2), r2;
          }
          return un(t3, e3), t3.prototype._bindEvent = function(e4, t4) {
            var n2 = this.element.children[0];
            n2.addEventListener((0, d.Le)(), function(r3) {
              r3.preventDefault(), n2.classList.contains(i.g.CLASS_MENU_DISABLED) || (n2.blur(), n2.classList.contains("vditor-menu--current") ? (e4.currentMode === "wysiwyg" ? (te(e4), X(e4)) : e4.currentMode === "ir" && Tt(e4, ""), n2.classList.remove("vditor-menu--current")) : (v(e4, ["subToolbar"]), t4.style.display = "block"));
            });
            for (var r2 = 0; r2 < 6; r2++)
              t4.children.item(r2).addEventListener((0, d.Le)(), function(r3) {
                r3.preventDefault(), e4.currentMode === "wysiwyg" ? (ee(e4, r3.target.getAttribute("data-tag")), X(e4), n2.classList.add("vditor-menu--current")) : e4.currentMode === "ir" ? (Tt(e4, r3.target.getAttribute("data-value")), n2.classList.add("vditor-menu--current")) : Oe(e4, r3.target.getAttribute("data-value")), t4.style.display = "none";
              });
          }, t3;
        }(he), mn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), fn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              e4.preventDefault(), t4.tip.show('<div style="margin-bottom:14px;font-size: 14px;line-height: 22px;min-width:300px;max-width: 360px;display: flex;">\n<div style="margin-top: 14px;flex: 1">\n    <div>Markdown \u4F7F\u7528\u6307\u5357</div>\n    <ul style="list-style: none">\n        <li><a href="https://ld246.com/article/1583308420519" target="_blank">\u8BED\u6CD5\u901F\u67E5\u624B\u518C</a></li>\n        <li><a href="https://ld246.com/article/1583129520165" target="_blank">\u57FA\u7840\u8BED\u6CD5</a></li>\n        <li><a href="https://ld246.com/article/1583305480675" target="_blank">\u6269\u5C55\u8BED\u6CD5</a></li>\n        <li><a href="https://ld246.com/article/1582778815353" target="_blank">\u952E\u76D8\u5FEB\u6377\u952E</a></li>\n    </ul>\n</div>\n<div style="margin-top: 14px;flex: 1">\n    <div>Vditor \u652F\u6301</div>\n    <ul style="list-style: none">\n        <li><a href="https://github.com/Vanessa219/vditor/issues" target="_blank">Issues</a></li>\n        <li><a href="https://ld246.com/tag/vditor" target="_blank">\u5B98\u65B9\u8BA8\u8BBA\u533A</a></li>\n        <li><a href="https://ld246.com/article/1549638745630" target="_blank">\u5F00\u53D1\u624B\u518C</a></li>\n        <li><a href="https://ld246.com/guide/markdown" target="_blank">\u6F14\u793A\u5730\u5740</a></li>\n    </ul>\n</div></div>', 0);
            }), r2;
          }
          return mn(t3, e3), t3;
        }(he), hn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), vn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              if (e4.preventDefault(), !r2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) && t4.currentMode !== "sv") {
                var n3 = (0, N.zh)(t4), o2 = (0, y.lG)(n3.startContainer, "LI");
                o2 && nt(t4, o2, n3);
              }
            }), r2;
          }
          return hn(t3, e3), t3;
        }(he), gn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), yn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              e4.preventDefault(), t4.tip.show('<div style="max-width: 520px; font-size: 14px;line-height: 22px;margin-bottom: 14px;">\n<p style="text-align: center;margin: 14px 0">\n    <em>\u4E0B\u4E00\u4EE3\u7684 Markdown \u7F16\u8F91\u5668\uFF0C\u4E3A\u672A\u6765\u800C\u6784\u5EFA</em>\n</p>\n<div style="display: flex;margin-bottom: 14px;flex-wrap: wrap;align-items: center">\n    <img src="https://cdn.jsdelivr.net/npm/vditor/src/assets/images/logo.png" style="margin: 0 auto;height: 68px"/>\n    <div>&nbsp;&nbsp;</div>\n    <div style="flex: 1;min-width: 250px">\n        Vditor \u662F\u4E00\u6B3E\u6D4F\u89C8\u5668\u7AEF\u7684 Markdown \u7F16\u8F91\u5668\uFF0C\u652F\u6301\u6240\u89C1\u5373\u6240\u5F97\u3001\u5373\u65F6\u6E32\u67D3\uFF08\u7C7B\u4F3C Typora\uFF09\u548C\u5206\u5C4F\u9884\u89C8\u6A21\u5F0F\u3002\n        \u5B83\u4F7F\u7528 TypeScript \u5B9E\u73B0\uFF0C\u652F\u6301\u539F\u751F JavaScript \u4EE5\u53CA Vue\u3001React\u3001Angular \u548C Svelte \u7B49\u6846\u67B6\u3002\n    </div>\n</div>\n<div style="display: flex;flex-wrap: wrap;">\n    <ul style="list-style: none;flex: 1;min-width:148px">\n        <li>\n        \u9879\u76EE\u5730\u5740\uFF1A<a href="https://b3log.org/vditor" target="_blank">b3log.org/vditor</a>\n        </li>\n        <li>\n        \u5F00\u6E90\u534F\u8BAE\uFF1AMIT\n        </li>\n    </ul>\n    <ul style="list-style: none;margin-right: 18px">\n        <li>\n        \u7EC4\u4EF6\u7248\u672C\uFF1AVditor v' + i.H + " / Lute v" + Lute.Version + '\n        </li>\n        <li>\n        \u8D5E\u52A9\u6350\u8D60\uFF1A<a href="https://ld246.com/sponsor" target="_blank">https://ld246.com/sponsor</a>\n        </li>\n    </ul>\n</div>\n</div>', 0);
            }), r2;
          }
          return gn(t3, e3), t3;
        }(he), bn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), wn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              e4.preventDefault(), r2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) || t4.currentMode === "sv" || Je(t4, "afterend");
            }), r2;
          }
          return bn(t3, e3), t3;
        }(he), En = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), kn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              e4.preventDefault(), r2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) || t4.currentMode === "sv" || Je(t4, "beforebegin");
            }), r2;
          }
          return En(t3, e3), t3;
        }(he), Sn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), Cn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              if (e4.preventDefault(), !r2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) && t4.currentMode !== "sv") {
                var n3 = (0, N.zh)(t4), o2 = (0, y.lG)(n3.startContainer, "LI");
                o2 && rt(t4, o2, n3, o2.parentElement);
              }
            }), r2;
          }
          return Sn(t3, e3), t3;
        }(he), Ln = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), Tn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return t4.options.outline && r2.element.firstElementChild.classList.add("vditor-menu--current"), r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              e4.preventDefault(), t4.toolbar.elements.outline.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) || (t4.options.outline.enable = !r2.element.firstElementChild.classList.contains("vditor-menu--current"), t4.outline.toggle(t4, t4.options.outline.enable));
            }), r2;
          }
          return Ln(t3, e3), t3;
        }(he), Mn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), An = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2._bindEvent(t4), r2;
          }
          return Mn(t3, e3), t3.prototype._bindEvent = function(e4) {
            var t4 = this;
            this.element.children[0].addEventListener((0, d.Le)(), function(n2) {
              n2.preventDefault();
              var r2 = t4.element.firstElementChild;
              if (!r2.classList.contains(i.g.CLASS_MENU_DISABLED)) {
                var o2 = i.g.EDIT_TOOLBARS.concat(["both", "edit-mode", "devtools"]);
                r2.classList.contains("vditor-menu--current") ? (r2.classList.remove("vditor-menu--current"), e4.currentMode === "sv" ? (e4.sv.element.style.display = "block", e4.options.preview.mode === "both" ? e4.preview.element.style.display = "block" : e4.preview.element.style.display = "none") : (e4[e4.currentMode].element.parentElement.style.display = "block", e4.preview.element.style.display = "none"), p(e4.toolbar.elements, o2), e4.outline.render(e4)) : (m(e4.toolbar.elements, o2), e4.preview.element.style.display = "block", e4.currentMode === "sv" ? e4.sv.element.style.display = "none" : e4[e4.currentMode].element.parentElement.style.display = "none", e4.preview.render(e4), r2.classList.add("vditor-menu--current"), v(e4, ["subToolbar", "hint", "popover"]), setTimeout(function() {
                  e4.outline.render(e4);
                }, e4.options.preview.delay + 10)), W(e4);
              }
            });
          }, t3;
        }(he), _n = function() {
          function e3(e4) {
            var t3;
            if (this.SAMPLE_RATE = 5e3, this.isRecording = false, this.readyFlag = false, this.leftChannel = [], this.rightChannel = [], this.recordingLength = 0, typeof AudioContext != "undefined")
              t3 = new AudioContext();
            else {
              if (!webkitAudioContext)
                return;
              t3 = new webkitAudioContext();
            }
            this.DEFAULT_SAMPLE_RATE = t3.sampleRate;
            var n2 = t3.createGain();
            t3.createMediaStreamSource(e4).connect(n2), this.recorder = t3.createScriptProcessor(2048, 2, 1), this.recorder.onaudioprocess = null, n2.connect(this.recorder), this.recorder.connect(t3.destination), this.readyFlag = true;
          }
          return e3.prototype.cloneChannelData = function(e4, t3) {
            this.leftChannel.push(new Float32Array(e4)), this.rightChannel.push(new Float32Array(t3)), this.recordingLength += 2048;
          }, e3.prototype.startRecordingNewWavFile = function() {
            this.readyFlag && (this.isRecording = true, this.leftChannel.length = this.rightChannel.length = 0, this.recordingLength = 0);
          }, e3.prototype.stopRecording = function() {
            this.isRecording = false;
          }, e3.prototype.buildWavFileBlob = function() {
            for (var e4 = this.mergeBuffers(this.leftChannel), t3 = this.mergeBuffers(this.rightChannel), n2 = new Float32Array(e4.length), r2 = 0; r2 < e4.length; ++r2)
              n2[r2] = 0.5 * (e4[r2] + t3[r2]);
            this.DEFAULT_SAMPLE_RATE > this.SAMPLE_RATE && (n2 = this.downSampleBuffer(n2, this.SAMPLE_RATE));
            var i2 = 44 + 2 * n2.length, o2 = new ArrayBuffer(i2), a2 = new DataView(o2);
            this.writeUTFBytes(a2, 0, "RIFF"), a2.setUint32(4, i2, true), this.writeUTFBytes(a2, 8, "WAVE"), this.writeUTFBytes(a2, 12, "fmt "), a2.setUint32(16, 16, true), a2.setUint16(20, 1, true), a2.setUint16(22, 1, true), a2.setUint32(24, this.SAMPLE_RATE, true), a2.setUint32(28, 2 * this.SAMPLE_RATE, true), a2.setUint16(32, 2, true), a2.setUint16(34, 16, true);
            var l2 = 2 * n2.length;
            this.writeUTFBytes(a2, 36, "data"), a2.setUint32(40, l2, true);
            for (var s2 = n2.length, d2 = 44, c2 = 0; c2 < s2; c2++)
              a2.setInt16(d2, 32767 * n2[c2], true), d2 += 2;
            return new Blob([a2], { type: "audio/wav" });
          }, e3.prototype.downSampleBuffer = function(e4, t3) {
            if (t3 === this.DEFAULT_SAMPLE_RATE)
              return e4;
            if (t3 > this.DEFAULT_SAMPLE_RATE)
              return e4;
            for (var n2 = this.DEFAULT_SAMPLE_RATE / t3, r2 = Math.round(e4.length / n2), i2 = new Float32Array(r2), o2 = 0, a2 = 0; o2 < i2.length; ) {
              for (var l2 = Math.round((o2 + 1) * n2), s2 = 0, d2 = 0, c2 = a2; c2 < l2 && c2 < e4.length; c2++)
                s2 += e4[c2], d2++;
              i2[o2] = s2 / d2, o2++, a2 = l2;
            }
            return i2;
          }, e3.prototype.mergeBuffers = function(e4) {
            for (var t3 = new Float32Array(this.recordingLength), n2 = 0, r2 = e4.length, i2 = 0; i2 < r2; ++i2) {
              var o2 = e4[i2];
              t3.set(o2, n2), n2 += o2.length;
            }
            return t3;
          }, e3.prototype.writeUTFBytes = function(e4, t3, n2) {
            for (var r2 = n2.length, i2 = 0; i2 < r2; i2++)
              e4.setUint8(t3 + i2, n2.charCodeAt(i2));
          }, e3;
        }(), xn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), Hn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return r2._bindEvent(t4), r2;
          }
          return xn(t3, e3), t3.prototype._bindEvent = function(e4) {
            var t4, n2 = this;
            this.element.children[0].addEventListener((0, d.Le)(), function(r2) {
              if (r2.preventDefault(), !n2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED)) {
                var o2 = e4[e4.currentMode].element;
                if (t4)
                  if (t4.isRecording) {
                    t4.stopRecording(), e4.tip.hide();
                    var a2 = new File([t4.buildWavFileBlob()], "record" + new Date().getTime() + ".wav", { type: "video/webm" });
                    Ve(e4, [a2]), n2.element.children[0].classList.remove("vditor-menu--current");
                  } else
                    e4.tip.show(window.VditorI18n.recording), o2.setAttribute("contenteditable", "false"), t4.startRecordingNewWavFile(), n2.element.children[0].classList.add("vditor-menu--current");
                else
                  navigator.mediaDevices.getUserMedia({ audio: true }).then(function(r3) {
                    (t4 = new _n(r3)).recorder.onaudioprocess = function(e5) {
                      if (t4.isRecording) {
                        var n3 = e5.inputBuffer.getChannelData(0), r4 = e5.inputBuffer.getChannelData(1);
                        t4.cloneChannelData(n3, r4);
                      }
                    }, t4.startRecordingNewWavFile(), e4.tip.show(window.VditorI18n.recording), o2.setAttribute("contenteditable", "false"), n2.element.children[0].classList.add("vditor-menu--current");
                  }).catch(function() {
                    e4.tip.show(window.VditorI18n["record-tip"]);
                  });
              }
            });
          }, t3;
        }(he), Nn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), Dn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return m({ redo: r2.element }, ["redo"]), r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              e4.preventDefault(), r2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) || t4.undo.redo(t4);
            }), r2;
          }
          return Nn(t3, e3), t3;
        }(he), On = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), In = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this;
            return m({ undo: r2.element }, ["undo"]), r2.element.children[0].addEventListener((0, d.Le)(), function(e4) {
              e4.preventDefault(), r2.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED) || t4.undo.undo(t4);
            }), r2;
          }
          return On(t3, e3), t3;
        }(he), jn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }(), Rn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this, t4, n2) || this, i2 = '<input type="file"';
            return t4.options.upload.multiple && (i2 += ' multiple="multiple"'), t4.options.upload.accept && (i2 += ' accept="' + t4.options.upload.accept + '"'), r2.element.children[0].innerHTML = "" + (n2.icon || '<svg><use xlink:href="#vditor-icon-upload"></use></svg>') + i2 + ">", r2._bindEvent(t4), r2;
          }
          return jn(t3, e3), t3.prototype._bindEvent = function(e4) {
            var t4 = this;
            this.element.children[0].addEventListener((0, d.Le)(), function(e5) {
              if (t4.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED))
                return e5.stopPropagation(), void e5.preventDefault();
            }), this.element.querySelector("input").addEventListener("change", function(n2) {
              if (t4.element.firstElementChild.classList.contains(i.g.CLASS_MENU_DISABLED))
                return n2.stopPropagation(), void n2.preventDefault();
              n2.target.files.length !== 0 && Ve(e4, n2.target.files, n2.target);
            });
          }, t3;
        }(he), Pn = function() {
          function e3(e4) {
            var t3 = this, n2 = e4.options;
            this.elements = {}, this.element = document.createElement("div"), this.element.className = "vditor-toolbar", n2.toolbar.forEach(function(n3, r2) {
              var i2 = t3.genItem(e4, n3, r2);
              if (t3.element.appendChild(i2), n3.toolbar) {
                var o2 = document.createElement("div");
                o2.className = "vditor-hint vditor-panel--arrow", o2.addEventListener((0, d.Le)(), function(e5) {
                  o2.style.display = "none";
                }), n3.toolbar.forEach(function(n4, i3) {
                  n4.level = 2, o2.appendChild(t3.genItem(e4, n4, r2 + i3));
                }), i2.appendChild(o2), g(e4, o2, i2.children[0]);
              }
            }), e4.options.toolbarConfig.hide && this.element.classList.add("vditor-toolbar--hide"), e4.options.toolbarConfig.pin && this.element.classList.add("vditor-toolbar--pin"), e4.options.counter.enable && (e4.counter = new Yt(e4), this.element.appendChild(e4.counter.element));
          }
          return e3.prototype.genItem = function(e4, t3, n2) {
            var r2;
            switch (t3.name) {
              case "bold":
              case "italic":
              case "more":
              case "strike":
              case "line":
              case "quote":
              case "list":
              case "ordered-list":
              case "check":
              case "code":
              case "inline-code":
              case "link":
              case "table":
                r2 = new he(e4, t3);
                break;
              case "emoji":
                r2 = new on(e4, t3);
                break;
              case "headings":
                r2 = new pn(e4, t3);
                break;
              case "|":
                r2 = new nn();
                break;
              case "br":
                r2 = new Gt();
                break;
              case "undo":
                r2 = new In(e4, t3);
                break;
              case "redo":
                r2 = new Dn(e4, t3);
                break;
              case "help":
                r2 = new fn(e4, t3);
                break;
              case "both":
                r2 = new zt(e4, t3);
                break;
              case "preview":
                r2 = new An(e4, t3);
                break;
              case "fullscreen":
                r2 = new cn(e4, t3);
                break;
              case "upload":
                r2 = new Rn(e4, t3);
                break;
              case "record":
                r2 = new Hn(e4, t3);
                break;
              case "info":
                r2 = new yn(e4, t3);
                break;
              case "edit-mode":
                r2 = new ye(e4, t3);
                break;
              case "devtools":
                r2 = new tn(e4, t3);
                break;
              case "outdent":
                r2 = new Cn(e4, t3);
                break;
              case "indent":
                r2 = new vn(e4, t3);
                break;
              case "outline":
                r2 = new Tn(e4, t3);
                break;
              case "insert-after":
                r2 = new wn(e4, t3);
                break;
              case "insert-before":
                r2 = new kn(e4, t3);
                break;
              case "code-theme":
                r2 = new Zt(e4, t3);
                break;
              case "content-theme":
                r2 = new Xt(e4, t3);
                break;
              case "export":
                r2 = new sn(e4, t3);
                break;
              default:
                r2 = new $t(e4, t3);
            }
            if (r2) {
              var i2 = t3.name;
              return i2 !== "br" && i2 !== "|" || (i2 += n2), this.elements[i2] = r2.element, r2.element;
            }
          }, e3;
        }(), Bn = n(694), qn = function() {
          function e3() {
            this.stackSize = 50, this.resetStack(), this.dmp = new Bn();
          }
          return e3.prototype.clearStack = function(e4) {
            this.resetStack(), this.resetIcon(e4);
          }, e3.prototype.resetIcon = function(e4) {
            e4.toolbar && (this[e4.currentMode].undoStack.length > 1 ? p(e4.toolbar.elements, ["undo"]) : m(e4.toolbar.elements, ["undo"]), this[e4.currentMode].redoStack.length !== 0 ? p(e4.toolbar.elements, ["redo"]) : m(e4.toolbar.elements, ["redo"]));
          }, e3.prototype.undo = function(e4) {
            if (e4[e4.currentMode].element.getAttribute("contenteditable") !== "false" && !(this[e4.currentMode].undoStack.length < 2)) {
              var t3 = this[e4.currentMode].undoStack.pop();
              t3 && (this[e4.currentMode].redoStack.push(t3), this.renderDiff(t3, e4), this[e4.currentMode].hasUndo = true, v(e4, ["hint"]));
            }
          }, e3.prototype.redo = function(e4) {
            if (e4[e4.currentMode].element.getAttribute("contenteditable") !== "false") {
              var t3 = this[e4.currentMode].redoStack.pop();
              t3 && (this[e4.currentMode].undoStack.push(t3), this.renderDiff(t3, e4, true));
            }
          }, e3.prototype.recordFirstPosition = function(e4, t3) {
            if (getSelection().rangeCount !== 0 && !(this[e4.currentMode].undoStack.length !== 1 || this[e4.currentMode].undoStack[0].length === 0 || this[e4.currentMode].redoStack.length > 0 || (0, d.vU)() && t3.key === "Backspace" || (0, d.G6)())) {
              var n2 = this.addCaret(e4);
              n2.replace("<wbr>", "").replace(" vditor-ir__node--expand", "") === this[e4.currentMode].undoStack[0][0].diffs[0][1].replace("<wbr>", "") && (this[e4.currentMode].undoStack[0][0].diffs[0][1] = n2, this[e4.currentMode].lastText = n2);
            }
          }, e3.prototype.addToUndoStack = function(e4) {
            var t3 = this.addCaret(e4, true), n2 = this.dmp.diff_main(t3, this[e4.currentMode].lastText, true), r2 = this.dmp.patch_make(t3, this[e4.currentMode].lastText, n2);
            r2.length === 0 && this[e4.currentMode].undoStack.length > 0 || (this[e4.currentMode].lastText = t3, this[e4.currentMode].undoStack.push(r2), this[e4.currentMode].undoStack.length > this.stackSize && this[e4.currentMode].undoStack.shift(), this[e4.currentMode].hasUndo && (this[e4.currentMode].redoStack = [], this[e4.currentMode].hasUndo = false, m(e4.toolbar.elements, ["redo"])), this[e4.currentMode].undoStack.length > 1 && p(e4.toolbar.elements, ["undo"]));
          }, e3.prototype.renderDiff = function(e4, t3, n2) {
            var r2;
            if (n2 === void 0 && (n2 = false), n2) {
              var i2 = this.dmp.patch_deepCopy(e4).reverse();
              i2.forEach(function(e5) {
                e5.diffs.forEach(function(e6) {
                  e6[0] = -e6[0];
                });
              }), r2 = this.dmp.patch_apply(i2, this[t3.currentMode].lastText)[0];
            } else
              r2 = this.dmp.patch_apply(e4, this[t3.currentMode].lastText)[0];
            if (this[t3.currentMode].lastText = r2, t3[t3.currentMode].element.innerHTML = r2, t3.currentMode !== "sv" && t3[t3.currentMode].element.querySelectorAll(".vditor-" + t3.currentMode + "__preview[data-render='2']").forEach(function(e5) {
              H(e5, t3);
            }), t3[t3.currentMode].element.querySelector("wbr"))
              (0, N.ib)(t3[t3.currentMode].element, t3[t3.currentMode].element.ownerDocument.createRange()), Te(t3);
            else {
              var o2 = getSelection().getRangeAt(0);
              o2.setEndBefore(t3[t3.currentMode].element), o2.collapse(false);
            }
            lt(t3, { enableAddUndoStack: false, enableHint: false, enableInput: true }), pe(t3), t3[t3.currentMode].element.querySelectorAll(".vditor-" + t3.currentMode + "__preview[data-render='2']").forEach(function(e5) {
              H(e5, t3);
            }), this[t3.currentMode].undoStack.length > 1 ? p(t3.toolbar.elements, ["undo"]) : m(t3.toolbar.elements, ["undo"]), this[t3.currentMode].redoStack.length !== 0 ? p(t3.toolbar.elements, ["redo"]) : m(t3.toolbar.elements, ["redo"]);
          }, e3.prototype.resetStack = function() {
            this.ir = { hasUndo: false, lastText: "", redoStack: [], undoStack: [] }, this.sv = { hasUndo: false, lastText: "", redoStack: [], undoStack: [] }, this.wysiwyg = { hasUndo: false, lastText: "", redoStack: [], undoStack: [] };
          }, e3.prototype.addCaret = function(e4, t3) {
            var n2;
            if (t3 === void 0 && (t3 = false), getSelection().rangeCount !== 0 && !e4[e4.currentMode].element.querySelector("wbr")) {
              var r2 = getSelection().getRangeAt(0);
              if (e4[e4.currentMode].element.contains(r2.startContainer)) {
                n2 = r2.cloneRange();
                var i2 = document.createElement("span");
                i2.className = "vditor-wbr", r2.insertNode(i2);
              }
            }
            e4.ir.element.cloneNode(true).querySelectorAll(".vditor-" + e4.currentMode + "__preview[data-render='1']").forEach(function(e5) {
              (e5.firstElementChild.classList.contains("language-echarts") || e5.firstElementChild.classList.contains("language-plantuml") || e5.firstElementChild.classList.contains("language-mindmap")) && (e5.firstElementChild.removeAttribute("_echarts_instance_"), e5.firstElementChild.removeAttribute("data-processed"), e5.firstElementChild.innerHTML = e5.previousElementSibling.firstElementChild.innerHTML, e5.setAttribute("data-render", "2")), e5.firstElementChild.classList.contains("language-math") && (e5.setAttribute("data-render", "2"), e5.firstElementChild.textContent = e5.firstElementChild.getAttribute("data-math"), e5.firstElementChild.removeAttribute("data-math"));
            });
            var o2 = e4[e4.currentMode].element.innerHTML;
            return e4[e4.currentMode].element.querySelectorAll(".vditor-wbr").forEach(function(e5) {
              e5.remove();
            }), t3 && n2 && (0, N.Hc)(n2), o2.replace('<span class="vditor-wbr"></span>', "<wbr>");
          }, e3;
        }(), Vn = n(224), Un = function() {
          function e3(e4) {
            this.defaultOptions = { after: void 0, cache: { enable: true }, cdn: i.g.CDN, classes: { preview: "" }, comment: { enable: false }, counter: { enable: false, type: "markdown" }, debugger: false, fullscreen: { index: 90 }, height: "auto", hint: { delay: 200, emoji: { "+1": "\u{1F44D}", "-1": "\u{1F44E}", confused: "\u{1F615}", eyes: "\u{1F440}\uFE0F", heart: "\u2764\uFE0F", rocket: "\u{1F680}\uFE0F", smile: "\u{1F604}", tada: "\u{1F389}\uFE0F" }, emojiPath: i.g.CDN + "/dist/images/emoji", extend: [], parse: true }, icon: "ant", lang: "zh_CN", mode: "ir", outline: { enable: false, position: "left" }, placeholder: "", preview: { actions: ["desktop", "tablet", "mobile", "mp-wechat", "zhihu"], delay: 1e3, hljs: i.g.HLJS_OPTIONS, markdown: i.g.MARKDOWN_OPTIONS, math: i.g.MATH_OPTIONS, maxWidth: 800, mode: "both", theme: i.g.THEME_OPTIONS }, resize: { enable: false, position: "bottom" }, theme: "classic", toolbar: ["emoji", "headings", "bold", "italic", "strike", "link", "|", "list", "ordered-list", "check", "outdent", "indent", "|", "quote", "line", "code", "inline-code", "insert-before", "insert-after", "|", "upload", "record", "table", "|", "undo", "redo", "|", "fullscreen", "edit-mode", { name: "more", toolbar: ["both", "code-theme", "content-theme", "export", "outline", "preview", "devtools", "info", "help"] }], toolbarConfig: { hide: false, pin: false }, typewriterMode: false, undoDelay: 800, upload: { extraData: {}, fieldName: "file[]", filename: function(e5) {
              return e5.replace(/\W/g, "");
            }, linkToImgUrl: "", max: 10485760, multiple: true, url: "", withCredentials: false }, value: "", width: "auto" }, this.options = e4;
          }
          return e3.prototype.merge = function() {
            var e4, t3, n2;
            this.options && (this.options.toolbar ? this.options.toolbar = this.mergeToolbar(this.options.toolbar) : this.options.toolbar = this.mergeToolbar(this.defaultOptions.toolbar), ((t3 = (e4 = this.options.preview) === null || e4 === void 0 ? void 0 : e4.theme) === null || t3 === void 0 ? void 0 : t3.list) && (this.defaultOptions.preview.theme.list = this.options.preview.theme.list), ((n2 = this.options.hint) === null || n2 === void 0 ? void 0 : n2.emoji) && (this.defaultOptions.hint.emoji = this.options.hint.emoji), this.options.comment && (this.defaultOptions.comment = this.options.comment));
            var r2 = (0, Vn.T)(this.defaultOptions, this.options);
            if (r2.cache.enable && !r2.cache.id)
              throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
            return r2;
          }, e3.prototype.mergeToolbar = function(e4) {
            var t3 = this, n2 = [{ icon: '<svg><use xlink:href="#vditor-icon-export"></use></svg>', name: "export", tipPosition: "ne" }, { hotkey: "\u2318E", icon: '<svg><use xlink:href="#vditor-icon-emoji"></use></svg>', name: "emoji", tipPosition: "ne" }, { hotkey: "\u2318H", icon: '<svg><use xlink:href="#vditor-icon-headings"></use></svg>', name: "headings", tipPosition: "ne" }, { hotkey: "\u2318B", icon: '<svg><use xlink:href="#vditor-icon-bold"></use></svg>', name: "bold", prefix: "**", suffix: "**", tipPosition: "ne" }, { hotkey: "\u2318I", icon: '<svg><use xlink:href="#vditor-icon-italic"></use></svg>', name: "italic", prefix: "*", suffix: "*", tipPosition: "ne" }, { hotkey: "\u2318D", icon: '<svg><use xlink:href="#vditor-icon-strike"></use></svg>', name: "strike", prefix: "~~", suffix: "~~", tipPosition: "ne" }, { hotkey: "\u2318K", icon: '<svg><use xlink:href="#vditor-icon-link"></use></svg>', name: "link", prefix: "[", suffix: "](https://)", tipPosition: "n" }, { name: "|" }, { hotkey: "\u2318L", icon: '<svg><use xlink:href="#vditor-icon-list"></use></svg>', name: "list", prefix: "* ", tipPosition: "n" }, { hotkey: "\u2318O", icon: '<svg><use xlink:href="#vditor-icon-ordered-list"></use></svg>', name: "ordered-list", prefix: "1. ", tipPosition: "n" }, { hotkey: "\u2318J", icon: '<svg><use xlink:href="#vditor-icon-check"></use></svg>', name: "check", prefix: "* [ ] ", tipPosition: "n" }, { hotkey: "\u21E7\u2318I", icon: '<svg><use xlink:href="#vditor-icon-outdent"></use></svg>', name: "outdent", tipPosition: "n" }, { hotkey: "\u21E7\u2318O", icon: '<svg><use xlink:href="#vditor-icon-indent"></use></svg>', name: "indent", tipPosition: "n" }, { name: "|" }, { hotkey: "\u2318;", icon: '<svg><use xlink:href="#vditor-icon-quote"></use></svg>', name: "quote", prefix: "> ", tipPosition: "n" }, { hotkey: "\u21E7\u2318H", icon: '<svg><use xlink:href="#vditor-icon-line"></use></svg>', name: "line", prefix: "---", tipPosition: "n" }, { hotkey: "\u2318U", icon: '<svg><use xlink:href="#vditor-icon-code"></use></svg>', name: "code", prefix: "```", suffix: "\n```", tipPosition: "n" }, { hotkey: "\u2318G", icon: '<svg><use xlink:href="#vditor-icon-inline-code"></use></svg>', name: "inline-code", prefix: "`", suffix: "`", tipPosition: "n" }, { hotkey: "\u21E7\u2318B", icon: '<svg><use xlink:href="#vditor-icon-before"></use></svg>', name: "insert-before", tipPosition: "n" }, { hotkey: "\u21E7\u2318E", icon: '<svg><use xlink:href="#vditor-icon-after"></use></svg>', name: "insert-after", tipPosition: "n" }, { name: "|" }, { icon: '<svg><use xlink:href="#vditor-icon-upload"></use></svg>', name: "upload", tipPosition: "n" }, { icon: '<svg><use xlink:href="#vditor-icon-record"></use></svg>', name: "record", tipPosition: "n" }, { hotkey: "\u2318M", icon: '<svg><use xlink:href="#vditor-icon-table"></use></svg>', name: "table", prefix: "| col1", suffix: " | col2 | col3 |\n| --- | --- | --- |\n|  |  |  |\n|  |  |  |", tipPosition: "n" }, { name: "|" }, { hotkey: "\u2318Z", icon: '<svg><use xlink:href="#vditor-icon-undo"></use></svg>', name: "undo", tipPosition: "nw" }, { hotkey: "\u2318Y", icon: '<svg><use xlink:href="#vditor-icon-redo"></use></svg>', name: "redo", tipPosition: "nw" }, { name: "|" }, { icon: '<svg><use xlink:href="#vditor-icon-more"></use></svg>', name: "more", tipPosition: "e" }, { hotkey: "\u2318'", icon: '<svg><use xlink:href="#vditor-icon-fullscreen"></use></svg>', name: "fullscreen", tipPosition: "nw" }, { icon: '<svg><use xlink:href="#vditor-icon-edit"></use></svg>', name: "edit-mode", tipPosition: "nw" }, { hotkey: "\u2318P", icon: '<svg><use xlink:href="#vditor-icon-both"></use></svg>', name: "both", tipPosition: "nw" }, { icon: '<svg><use xlink:href="#vditor-icon-preview"></use></svg>', name: "preview", tipPosition: "nw" }, { icon: '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>', name: "outline", tipPosition: "nw" }, { icon: '<svg><use xlink:href="#vditor-icon-theme"></use></svg>', name: "content-theme", tipPosition: "nw" }, { icon: '<svg><use xlink:href="#vditor-icon-code-theme"></use></svg>', name: "code-theme", tipPosition: "nw" }, { icon: '<svg><use xlink:href="#vditor-icon-bug"></use></svg>', name: "devtools", tipPosition: "nw" }, { icon: '<svg><use xlink:href="#vditor-icon-info"></use></svg>', name: "info", tipPosition: "nw" }, { icon: '<svg><use xlink:href="#vditor-icon-help"></use></svg>', name: "help", tipPosition: "nw" }, { name: "br" }], r2 = [];
            return e4.forEach(function(e5) {
              var i2 = e5;
              n2.forEach(function(t4) {
                typeof e5 == "string" && t4.name === e5 && (i2 = t4), typeof e5 == "object" && t4.name === e5.name && (i2 = Object.assign({}, t4, e5));
              }), e5.toolbar && (i2.toolbar = t3.mergeToolbar(e5.toolbar)), r2.push(i2);
            }), r2;
          }, e3;
        }(), Wn = function() {
          function e3(e4) {
            var t3 = this;
            this.composingLock = false, this.commentIds = [];
            var n2 = document.createElement("div");
            n2.className = "vditor-wysiwyg", n2.innerHTML = '<pre class="vditor-reset" placeholder="' + e4.options.placeholder + '"\n contenteditable="true" spellcheck="false"></pre>\n<div class="vditor-panel vditor-panel--none"></div>\n<div class="vditor-panel vditor-panel--none">\n    <button type="button" aria-label="' + window.VditorI18n.comment + '" class="vditor-icon vditor-tooltipped vditor-tooltipped__n">\n        <svg><use xlink:href="#vditor-icon-comment"></use></svg>\n    </button>\n</div>', this.element = n2.firstElementChild, this.popover = n2.firstElementChild.nextElementSibling, this.selectPopover = n2.lastElementChild, this.bindEvent(e4), we(e4, this.element), Ee(e4, this.element), ke(e4, this.element), Me(e4, this.element), Ae(e4, this.element), Se(e4, this.element), Ce(e4, this.element, this.copy), Le(e4, this.element, this.copy), e4.options.comment.enable && (this.selectPopover.querySelector("button").onclick = function() {
              var n3, r2, o2 = Lute.NewNodeID(), a2 = getSelection().getRangeAt(0), l2 = a2.cloneRange(), s2 = a2.extractContents(), d2 = false, c2 = false;
              s2.childNodes.forEach(function(e5, t4) {
                var i2 = false;
                if (e5.nodeType === 3 ? i2 = true : e5.classList.contains("vditor-comment") ? e5.classList.contains("vditor-comment") && e5.setAttribute("data-cmtids", e5.getAttribute("data-cmtids") + " " + o2) : i2 = true, i2)
                  if (e5.nodeType !== 3 && e5.getAttribute("data-block") === "0" && t4 === 0 && l2.startOffset > 0)
                    e5.innerHTML = '<span class="vditor-comment" data-cmtids="' + o2 + '">' + e5.innerHTML + "</span>", n3 = e5;
                  else if (e5.nodeType !== 3 && e5.getAttribute("data-block") === "0" && t4 === s2.childNodes.length - 1 && l2.endOffset < l2.endContainer.textContent.length)
                    e5.innerHTML = '<span class="vditor-comment" data-cmtids="' + o2 + '">' + e5.innerHTML + "</span>", r2 = e5;
                  else if (e5.nodeType !== 3 && e5.getAttribute("data-block") === "0")
                    t4 === 0 ? d2 = true : t4 === s2.childNodes.length - 1 && (c2 = true), e5.innerHTML = '<span class="vditor-comment" data-cmtids="' + o2 + '">' + e5.innerHTML + "</span>";
                  else {
                    var a3 = document.createElement("span");
                    a3.classList.add("vditor-comment"), a3.setAttribute("data-cmtids", o2), e5.parentNode.insertBefore(a3, e5), a3.appendChild(e5);
                  }
              });
              var u2 = (0, y.F9)(l2.startContainer);
              u2 && (n3 ? (u2.insertAdjacentHTML("beforeend", n3.innerHTML), n3.remove()) : u2.textContent.trim().replace(i.g.ZWSP, "") === "" && d2 && u2.remove());
              var p2 = (0, y.F9)(l2.endContainer);
              p2 && (r2 ? (p2.insertAdjacentHTML("afterbegin", r2.innerHTML), r2.remove()) : p2.textContent.trim().replace(i.g.ZWSP, "") === "" && c2 && p2.remove()), a2.insertNode(s2), e4.options.comment.add(o2, a2.toString(), t3.getComments(e4, true)), X(e4, { enableAddUndoStack: true, enableHint: false, enableInput: false }), t3.hideComment();
            });
          }
          return e3.prototype.getComments = function(e4, t3) {
            var n2 = this;
            if (t3 === void 0 && (t3 = false), e4.currentMode !== "wysiwyg" || !e4.options.comment.enable)
              return [];
            this.commentIds = [], this.element.querySelectorAll(".vditor-comment").forEach(function(e5) {
              n2.commentIds = n2.commentIds.concat(e5.getAttribute("data-cmtids").split(" "));
            }), this.commentIds = Array.from(new Set(this.commentIds));
            var r2 = [];
            return t3 ? (this.commentIds.forEach(function(e5) {
              r2.push({ id: e5, top: n2.element.querySelector('.vditor-comment[data-cmtids="' + e5 + '"]').offsetTop });
            }), r2) : void 0;
          }, e3.prototype.triggerRemoveComment = function(e4) {
            var t3, n2, r2;
            if (e4.currentMode === "wysiwyg" && e4.options.comment.enable && e4.wysiwyg.commentIds.length > 0) {
              var i2 = JSON.parse(JSON.stringify(this.commentIds));
              this.getComments(e4);
              var o2 = (t3 = i2, n2 = this.commentIds, r2 = new Set(n2), t3.filter(function(e5) {
                return !r2.has(e5);
              }));
              o2.length > 0 && e4.options.comment.remove(o2);
            }
          }, e3.prototype.showComment = function() {
            var e4 = (0, N.Ny)(this.element);
            this.selectPopover.setAttribute("style", "left:" + e4.left + "px;display:block;top:" + Math.max(-8, e4.top - 21) + "px");
          }, e3.prototype.hideComment = function() {
            this.selectPopover.setAttribute("style", "display:none");
          }, e3.prototype.unbindListener = function() {
            window.removeEventListener("scroll", this.scrollListener);
          }, e3.prototype.copy = function(e4, t3) {
            var n2 = getSelection().getRangeAt(0);
            if (n2.toString() !== "") {
              e4.stopPropagation(), e4.preventDefault();
              var r2 = (0, y.lG)(n2.startContainer, "CODE"), i2 = (0, y.lG)(n2.endContainer, "CODE");
              if (r2 && i2 && i2.isSameNode(r2)) {
                var o2 = "";
                return o2 = r2.parentElement.tagName === "PRE" ? n2.toString() : "`" + n2.toString() + "`", e4.clipboardData.setData("text/plain", o2), void e4.clipboardData.setData("text/html", "");
              }
              var a2 = (0, y.lG)(n2.startContainer, "A"), l2 = (0, y.lG)(n2.endContainer, "A");
              if (a2 && l2 && l2.isSameNode(a2)) {
                var s2 = a2.getAttribute("title") || "";
                return s2 && (s2 = ' "' + s2 + '"'), e4.clipboardData.setData("text/plain", "[" + n2.toString() + "](" + a2.getAttribute("href") + s2 + ")"), void e4.clipboardData.setData("text/html", "");
              }
              var d2 = document.createElement("div");
              d2.appendChild(n2.cloneContents()), e4.clipboardData.setData("text/plain", t3.lute.VditorDOM2Md(d2.innerHTML).trim()), e4.clipboardData.setData("text/html", "");
            }
          }, e3.prototype.bindEvent = function(e4) {
            var t3 = this;
            this.unbindListener(), window.addEventListener("scroll", this.scrollListener = function() {
              if (v(e4, ["hint"]), t3.popover.style.display === "block" && t3.selectPopover.style.display === "block") {
                var n2 = parseInt(t3.popover.getAttribute("data-top"), 10);
                if (e4.options.height === "auto") {
                  if (e4.options.toolbarConfig.pin) {
                    var r2 = Math.max(n2, window.scrollY - e4.element.offsetTop - 8) + "px";
                    t3.popover.style.display === "block" && (t3.popover.style.top = r2), t3.selectPopover.style.display === "block" && (t3.selectPopover.style.top = r2);
                  }
                } else if (e4.options.toolbarConfig.pin && e4.toolbar.element.getBoundingClientRect().top === 0) {
                  var i2 = Math.max(window.scrollY - e4.element.offsetTop - 8, Math.min(n2 - e4.wysiwyg.element.scrollTop, t3.element.clientHeight - 21)) + "px";
                  t3.popover.style.display === "block" && (t3.popover.style.top = i2), t3.selectPopover.style.display === "block" && (t3.selectPopover.style.top = i2);
                }
              }
            }), this.element.addEventListener("scroll", function() {
              if (v(e4, ["hint"]), e4.options.comment && e4.options.comment.enable && e4.options.comment.scroll && e4.options.comment.scroll(e4.wysiwyg.element.scrollTop), t3.popover.style.display === "block") {
                var n2 = parseInt(t3.popover.getAttribute("data-top"), 10) - e4.wysiwyg.element.scrollTop, r2 = -8;
                e4.options.toolbarConfig.pin && e4.toolbar.element.getBoundingClientRect().top === 0 && (r2 = window.scrollY - e4.element.offsetTop + r2);
                var i2 = Math.max(r2, Math.min(n2, t3.element.clientHeight - 21)) + "px";
                t3.popover.style.top = i2, t3.selectPopover.style.top = i2;
              }
            }), this.element.addEventListener("paste", function(t4) {
              St(e4, t4, { pasteCode: function(t5) {
                var n2 = (0, N.zh)(e4), r2 = document.createElement("template");
                r2.innerHTML = t5, n2.insertNode(r2.content.cloneNode(true));
                var i2 = (0, y.a1)(n2.startContainer, "data-block", "0");
                i2 ? i2.outerHTML = e4.lute.SpinVditorDOM(i2.outerHTML) : e4.wysiwyg.element.innerHTML = e4.lute.SpinVditorDOM(e4.wysiwyg.element.innerHTML), (0, N.ib)(e4.wysiwyg.element, n2);
              } });
            }), this.element.addEventListener("compositionstart", function() {
              t3.composingLock = true;
            }), this.element.addEventListener("compositionend", function(n2) {
              var r2 = (0, b.W)(getSelection().getRangeAt(0).startContainer);
              r2 && r2.textContent === "" ? D(e4) : ((0, d.vU)() || Ue(e4, getSelection().getRangeAt(0).cloneRange(), n2), t3.composingLock = false);
            }), this.element.addEventListener("input", function(n2) {
              if (n2.inputType !== "deleteByDrag" && n2.inputType !== "insertFromDrop") {
                if (t3.preventInput)
                  t3.preventInput = false;
                else if (!t3.composingLock && n2.data !== "\u2018" && n2.data !== "\u201C" && n2.data !== "\u300A") {
                  var r2 = getSelection().getRangeAt(0), i2 = (0, y.F9)(r2.startContainer);
                  if (i2 || ($(e4, r2), i2 = (0, y.F9)(r2.startContainer)), i2) {
                    for (var o2 = (0, N.im)(i2, e4.wysiwyg.element, r2).start, a2 = true, l2 = o2 - 1; l2 > i2.textContent.substr(0, o2).lastIndexOf("\n"); l2--)
                      if (i2.textContent.charAt(l2) !== " " && i2.textContent.charAt(l2) !== "	") {
                        a2 = false;
                        break;
                      }
                    o2 === 0 && (a2 = false);
                    var s2 = true;
                    for (l2 = o2 - 1; l2 < i2.textContent.length; l2++)
                      if (i2.textContent.charAt(l2) !== " " && i2.textContent.charAt(l2) !== "\n") {
                        s2 = false;
                        break;
                      }
                    var d2 = (0, b.W)(getSelection().getRangeAt(0).startContainer);
                    d2 && d2.textContent === "" && (D(e4), d2.remove()), a2 && i2.getAttribute("data-type") !== "code-block" || s2 || at(i2.innerHTML) || ot(i2.innerHTML) && i2.previousElementSibling || Ue(e4, r2, n2);
                  }
                }
              }
            }), this.element.addEventListener("click", function(n2) {
              if (n2.target.tagName === "INPUT") {
                var r2 = n2.target;
                return r2.checked ? r2.setAttribute("checked", "checked") : r2.removeAttribute("checked"), t3.preventInput = true, void X(e4);
              }
              if (n2.target.tagName !== "IMG" || n2.target.parentElement.classList.contains("vditor-wysiwyg__preview")) {
                n2.target.tagName === "A" && window.open(n2.target.getAttribute("href"));
                var o2 = (0, N.zh)(e4);
                if (n2.target.isEqualNode(t3.element) && t3.element.lastElementChild && o2.collapsed) {
                  var a2 = t3.element.lastElementChild.getBoundingClientRect();
                  n2.y > a2.top + a2.height && (t3.element.lastElementChild.tagName === "P" && t3.element.lastElementChild.textContent.trim().replace(i.g.ZWSP, "") === "" ? (o2.selectNodeContents(t3.element.lastElementChild), o2.collapse(false)) : (t3.element.insertAdjacentHTML("beforeend", '<p data-block="0">' + i.g.ZWSP + "<wbr></p>"), (0, N.ib)(t3.element, o2)));
                }
                ie(e4);
                var l2 = (0, y.fb)(n2.target, "vditor-wysiwyg__preview");
                l2 || (l2 = (0, y.fb)((0, N.zh)(e4).startContainer, "vditor-wysiwyg__preview")), l2 && ne(l2, e4), O(n2, e4);
              } else
                n2.target.getAttribute("data-type") === "link-ref" ? ae(e4, n2.target) : function(e5, t4) {
                  var n3 = e5.target;
                  t4.wysiwyg.popover.innerHTML = "";
                  var r3 = function() {
                    n3.setAttribute("src", o3.value), n3.setAttribute("alt", l3.value), n3.setAttribute("title", d2.value);
                  }, i2 = document.createElement("span");
                  i2.setAttribute("aria-label", window.VditorI18n.imageURL), i2.className = "vditor-tooltipped vditor-tooltipped__n";
                  var o3 = document.createElement("input");
                  i2.appendChild(o3), o3.className = "vditor-input", o3.setAttribute("placeholder", window.VditorI18n.imageURL), o3.value = n3.getAttribute("src") || "", o3.oninput = function() {
                    r3();
                  }, o3.onkeydown = function(e6) {
                    re(t4, e6);
                  };
                  var a3 = document.createElement("span");
                  a3.setAttribute("aria-label", window.VditorI18n.alternateText), a3.className = "vditor-tooltipped vditor-tooltipped__n";
                  var l3 = document.createElement("input");
                  a3.appendChild(l3), l3.className = "vditor-input", l3.setAttribute("placeholder", window.VditorI18n.alternateText), l3.style.width = "52px", l3.value = n3.getAttribute("alt") || "", l3.oninput = function() {
                    r3();
                  }, l3.onkeydown = function(e6) {
                    re(t4, e6);
                  };
                  var s2 = document.createElement("span");
                  s2.setAttribute("aria-label", window.VditorI18n.title), s2.className = "vditor-tooltipped vditor-tooltipped__n";
                  var d2 = document.createElement("input");
                  s2.appendChild(d2), d2.className = "vditor-input", d2.setAttribute("placeholder", window.VditorI18n.title), d2.value = n3.getAttribute("title") || "", d2.oninput = function() {
                    r3();
                  }, d2.onkeydown = function(e6) {
                    re(t4, e6);
                  }, de(n3, t4), t4.wysiwyg.popover.insertAdjacentElement("beforeend", i2), t4.wysiwyg.popover.insertAdjacentElement("beforeend", a3), t4.wysiwyg.popover.insertAdjacentElement("beforeend", s2), oe(t4, n3);
                }(n2, e4);
            }), this.element.addEventListener("keyup", function(t4) {
              if (!t4.isComposing && !(0, d.yl)(t4)) {
                t4.key === "Enter" && Te(e4), t4.key !== "Backspace" && t4.key !== "Delete" || e4.wysiwyg.element.innerHTML === "" || e4.wysiwyg.element.childNodes.length !== 1 || !e4.wysiwyg.element.firstElementChild || e4.wysiwyg.element.firstElementChild.tagName !== "P" || e4.wysiwyg.element.firstElementChild.childElementCount !== 0 || e4.wysiwyg.element.textContent !== "" && e4.wysiwyg.element.textContent !== "\n" || (e4.wysiwyg.element.innerHTML = "");
                var n2 = (0, N.zh)(e4);
                if (t4.key === "Backspace" && (0, d.vU)() && n2.startContainer.textContent === "\n" && n2.startOffset === 1 && (n2.startContainer.textContent = ""), $(e4, n2), ie(e4), t4.key === "ArrowDown" || t4.key === "ArrowRight" || t4.key === "Backspace" || t4.key === "ArrowLeft" || t4.key === "ArrowUp") {
                  t4.key !== "ArrowLeft" && t4.key !== "ArrowRight" || e4.hint.render(e4);
                  var r2 = (0, y.fb)(n2.startContainer, "vditor-wysiwyg__preview");
                  if (!r2 && n2.startContainer.nodeType !== 3 && n2.startOffset > 0)
                    (o2 = n2.startContainer).classList.contains("vditor-wysiwyg__block") && (r2 = o2.lastElementChild);
                  if (r2)
                    if (r2.previousElementSibling.style.display !== "none") {
                      var i2 = r2.previousElementSibling;
                      if (i2.tagName === "PRE" && (i2 = i2.firstElementChild), t4.key === "ArrowDown" || t4.key === "ArrowRight") {
                        var o2, a2 = function(e5) {
                          for (var t5 = e5; t5 && !t5.nextSibling; )
                            t5 = t5.parentElement;
                          return t5.nextSibling;
                        }(o2 = r2.parentElement);
                        if (a2 && a2.nodeType !== 3) {
                          var l2 = a2.querySelector(".vditor-wysiwyg__preview");
                          if (l2)
                            return void ne(l2, e4);
                        }
                        if (a2.nodeType === 3) {
                          for (; a2.textContent.length === 0 && a2.nextSibling; )
                            a2 = a2.nextSibling;
                          n2.setStart(a2, 1);
                        } else
                          n2.setStart(a2.firstChild, 0);
                      } else
                        n2.selectNodeContents(i2), n2.collapse(false);
                    } else
                      t4.key === "ArrowDown" || t4.key === "ArrowRight" ? ne(r2, e4) : ne(r2, e4, false);
                }
              }
            });
          }, e3;
        }(), zn = function() {
          var e3 = function(t3, n2) {
            return e3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n3 in t4)
                t4.hasOwnProperty(n3) && (e4[n3] = t4[n3]);
            }, e3(t3, n2);
          };
          return function(t3, n2) {
            function r2() {
              this.constructor = t3;
            }
            e3(t3, n2), t3.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
          };
        }();
        const Gn = function(e3) {
          function t3(t4, n2) {
            var r2 = e3.call(this) || this;
            r2.version = i.H, typeof t4 == "string" && (n2 ? n2.cache ? n2.cache.id || (n2.cache.id = "vditor" + t4) : n2.cache = { id: "vditor" + t4 } : n2 = { cache: { id: "vditor" + t4 } }, t4 = document.getElementById(t4));
            var o2 = new Un(n2).merge();
            if (o2.i18n)
              window.VditorI18n = o2.i18n, r2.init(t4, o2);
            else {
              if (!["en_US", "ja_JP", "ko_KR", "ru_RU", "zh_CN", "zh_TW"].includes(o2.lang))
                throw new Error("options.lang error, see https://ld246.com/article/1549638745630#options");
              var a2 = "vditorI18nScript", s2 = a2 + o2.lang;
              document.querySelectorAll('head script[id^="vditorI18nScript"]').forEach(function(e4) {
                e4.id !== s2 && document.head.removeChild(e4);
              }), (0, l.G)(o2.cdn + "/dist/js/i18n/" + o2.lang + ".js", s2).then(function() {
                r2.init(t4, o2);
              });
            }
            return r2;
          }
          return zn(t3, e3), t3.prototype.setTheme = function(e4, t4, n2, r2) {
            this.vditor.options.theme = e4, U(this.vditor), t4 && (this.vditor.options.preview.theme.current = t4, (0, V.Z)(t4, r2 || this.vditor.options.preview.theme.path)), n2 && (this.vditor.options.preview.hljs.style = n2, (0, Kt.Y)(n2, this.vditor.options.cdn));
          }, t3.prototype.getValue = function() {
            return a(this.vditor);
          }, t3.prototype.getCurrentMode = function() {
            return this.vditor.currentMode;
          }, t3.prototype.focus = function() {
            this.vditor.currentMode === "sv" ? this.vditor.sv.element.focus() : this.vditor.currentMode === "wysiwyg" ? this.vditor.wysiwyg.element.focus() : this.vditor.currentMode === "ir" && this.vditor.ir.element.focus();
          }, t3.prototype.blur = function() {
            this.vditor.currentMode === "sv" ? this.vditor.sv.element.blur() : this.vditor.currentMode === "wysiwyg" ? this.vditor.wysiwyg.element.blur() : this.vditor.currentMode === "ir" && this.vditor.ir.element.blur();
          }, t3.prototype.disabled = function() {
            v(this.vditor, ["subToolbar", "hint", "popover"]), m(this.vditor.toolbar.elements, i.g.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "false");
          }, t3.prototype.enable = function() {
            p(this.vditor.toolbar.elements, i.g.EDIT_TOOLBARS.concat(["undo", "redo", "fullscreen", "edit-mode"])), this.vditor.undo.resetIcon(this.vditor), this.vditor[this.vditor.currentMode].element.setAttribute("contenteditable", "true");
          }, t3.prototype.getSelection = function() {
            return this.vditor.currentMode === "wysiwyg" ? be(this.vditor.wysiwyg.element) : this.vditor.currentMode === "sv" ? be(this.vditor.sv.element) : this.vditor.currentMode === "ir" ? be(this.vditor.ir.element) : void 0;
          }, t3.prototype.renderPreview = function(e4) {
            this.vditor.preview.render(this.vditor, e4);
          }, t3.prototype.getCursorPosition = function() {
            return (0, N.Ny)(this.vditor[this.vditor.currentMode].element);
          }, t3.prototype.isUploading = function() {
            return this.vditor.upload.isUploading;
          }, t3.prototype.clearCache = function() {
            localStorage.removeItem(this.vditor.options.cache.id);
          }, t3.prototype.disabledCache = function() {
            this.vditor.options.cache.enable = false;
          }, t3.prototype.enableCache = function() {
            if (!this.vditor.options.cache.id)
              throw new Error("need options.cache.id, see https://ld246.com/article/1549638745630#options");
            this.vditor.options.cache.enable = true;
          }, t3.prototype.html2md = function(e4) {
            return this.vditor.lute.HTML2Md(e4);
          }, t3.prototype.exportJSON = function(e4) {
            return this.vditor.lute.RenderJSON(e4);
          }, t3.prototype.getHTML = function() {
            return Dt(this.vditor);
          }, t3.prototype.tip = function(e4, t4) {
            this.vditor.tip.show(e4, t4);
          }, t3.prototype.setPreviewMode = function(e4) {
            Ut(e4, this.vditor);
          }, t3.prototype.deleteValue = function() {
            window.getSelection().isCollapsed || document.execCommand("delete", false);
          }, t3.prototype.updateValue = function(e4) {
            document.execCommand("insertHTML", false, e4);
          }, t3.prototype.insertValue = function(e4, t4) {
            t4 === void 0 && (t4 = true);
            var n2 = (0, N.zh)(this.vditor);
            n2.collapse(true);
            var r2 = document.createElement("template");
            r2.innerHTML = e4, n2.insertNode(r2.content.cloneNode(true)), this.vditor.currentMode === "sv" ? (this.vditor.sv.preventInput = true, t4 && q(this.vditor)) : this.vditor.currentMode === "wysiwyg" ? (this.vditor.wysiwyg.preventInput = true, t4 && Ue(this.vditor, getSelection().getRangeAt(0))) : this.vditor.currentMode === "ir" && (this.vditor.ir.preventInput = true, t4 && j(this.vditor, getSelection().getRangeAt(0), true));
          }, t3.prototype.setValue = function(e4, t4) {
            var n2 = this;
            t4 === void 0 && (t4 = false), this.vditor.currentMode === "sv" ? (this.vditor.sv.element.innerHTML = this.vditor.lute.SpinVditorSVDOM(e4), De(this.vditor, { enableAddUndoStack: true, enableHint: false, enableInput: false })) : this.vditor.currentMode === "wysiwyg" ? me(this.vditor, e4, { enableAddUndoStack: true, enableHint: false, enableInput: false }) : (this.vditor.ir.element.innerHTML = this.vditor.lute.Md2VditorIRDOM(e4), this.vditor.ir.element.querySelectorAll(".vditor-ir__preview[data-render='2']").forEach(function(e5) {
              H(e5, n2.vditor);
            }), Lt(this.vditor, { enableAddUndoStack: true, enableHint: false, enableInput: false })), this.vditor.outline.render(this.vditor), e4 || (v(this.vditor, ["emoji", "headings", "submenu", "hint"]), this.vditor.wysiwyg.popover && (this.vditor.wysiwyg.popover.style.display = "none"), this.clearCache()), t4 && this.clearStack();
          }, t3.prototype.clearStack = function() {
            this.vditor.undo.clearStack(this.vditor), this.vditor.undo.addToUndoStack(this.vditor);
          }, t3.prototype.destroy = function() {
            this.vditor.element.innerHTML = this.vditor.originalInnerHTML, this.vditor.element.classList.remove("vditor"), this.vditor.element.removeAttribute("style"), document.getElementById("vditorIconScript").remove(), this.clearCache(), G(), this.vditor.wysiwyg.unbindListener();
          }, t3.prototype.getCommentIds = function() {
            return this.vditor.currentMode !== "wysiwyg" ? [] : this.vditor.wysiwyg.getComments(this.vditor, true);
          }, t3.prototype.hlCommentIds = function(e4) {
            if (this.vditor.currentMode === "wysiwyg") {
              var t4 = function(t5) {
                t5.classList.remove("vditor-comment--hover"), e4.forEach(function(e5) {
                  t5.getAttribute("data-cmtids").indexOf(e5) > -1 && t5.classList.add("vditor-comment--hover");
                });
              };
              this.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(e5) {
                t4(e5);
              }), this.vditor.preview.element.style.display !== "none" && this.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(e5) {
                t4(e5);
              });
            }
          }, t3.prototype.unHlCommentIds = function(e4) {
            if (this.vditor.currentMode === "wysiwyg") {
              var t4 = function(t5) {
                e4.forEach(function(e5) {
                  t5.getAttribute("data-cmtids").indexOf(e5) > -1 && t5.classList.remove("vditor-comment--hover");
                });
              };
              this.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(e5) {
                t4(e5);
              }), this.vditor.preview.element.style.display !== "none" && this.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(e5) {
                t4(e5);
              });
            }
          }, t3.prototype.removeCommentIds = function(e4) {
            var t4 = this;
            if (this.vditor.currentMode === "wysiwyg") {
              var n2 = function(e5, n3) {
                var r2 = e5.getAttribute("data-cmtids").split(" ");
                r2.find(function(e6, t5) {
                  if (e6 === n3)
                    return r2.splice(t5, 1), true;
                }), r2.length === 0 ? (e5.outerHTML = e5.innerHTML, (0, N.zh)(t4.vditor).collapse(true)) : e5.setAttribute("data-cmtids", r2.join(" "));
              };
              e4.forEach(function(e5) {
                t4.vditor.wysiwyg.element.querySelectorAll(".vditor-comment").forEach(function(t5) {
                  n2(t5, e5);
                }), t4.vditor.preview.element.style.display !== "none" && t4.vditor.preview.element.querySelectorAll(".vditor-comment").forEach(function(t5) {
                  n2(t5, e5);
                });
              }), X(this.vditor, { enableAddUndoStack: true, enableHint: false, enableInput: false });
            }
          }, t3.prototype.init = function(e4, t4) {
            var n2 = this;
            this.vditor = { currentMode: t4.mode, element: e4, hint: new Ht(t4.hint.extend), lute: void 0, options: t4, originalInnerHTML: e4.innerHTML, outline: new jt(window.VditorI18n.outline), tip: new Vt() }, this.vditor.sv = new qt(this.vditor), this.vditor.undo = new qn(), this.vditor.wysiwyg = new Wn(this.vditor), this.vditor.ir = new Nt(this.vditor), this.vditor.toolbar = new Pn(this.vditor), t4.resize.enable && (this.vditor.resize = new Bt(this.vditor)), this.vditor.toolbar.elements.devtools && (this.vditor.devtools = new s()), (t4.upload.url || t4.upload.handler) && (this.vditor.upload = new qe()), (0, l.G)(t4._lutePath || t4.cdn + "/dist/js/lute/lute.min.js", "vditorLuteScript").then(function() {
              n2.vditor.lute = (0, Ot.X)({ autoSpace: n2.vditor.options.preview.markdown.autoSpace, codeBlockPreview: n2.vditor.options.preview.markdown.codeBlockPreview, emojiSite: n2.vditor.options.hint.emojiPath, emojis: n2.vditor.options.hint.emoji, fixTermTypo: n2.vditor.options.preview.markdown.fixTermTypo, footnotes: n2.vditor.options.preview.markdown.footnotes, headingAnchor: false, inlineMathDigit: n2.vditor.options.preview.math.inlineDigit, linkBase: n2.vditor.options.preview.markdown.linkBase, linkPrefix: n2.vditor.options.preview.markdown.linkPrefix, listStyle: n2.vditor.options.preview.markdown.listStyle, mark: n2.vditor.options.preview.markdown.mark, mathBlockPreview: n2.vditor.options.preview.markdown.mathBlockPreview, paragraphBeginningSpace: n2.vditor.options.preview.markdown.paragraphBeginningSpace, sanitize: n2.vditor.options.preview.markdown.sanitize, toc: n2.vditor.options.preview.markdown.toc }), n2.vditor.preview = new Pt(n2.vditor), function(e5) {
                e5.element.innerHTML = "", e5.element.classList.add("vditor"), U(e5), (0, V.Z)(e5.options.preview.theme.current, e5.options.preview.theme.path), typeof e5.options.height == "number" && (e5.element.style.height = e5.options.height + "px"), typeof e5.options.minHeight == "number" && (e5.element.style.minHeight = e5.options.minHeight + "px"), typeof e5.options.width == "number" ? e5.element.style.width = e5.options.width + "px" : e5.element.style.width = e5.options.width, e5.element.appendChild(e5.toolbar.element);
                var t5 = document.createElement("div");
                if (t5.className = "vditor-content", e5.options.outline.position === "left" && t5.appendChild(e5.outline.element), t5.appendChild(e5.wysiwyg.element.parentElement), t5.appendChild(e5.sv.element), t5.appendChild(e5.ir.element.parentElement), t5.appendChild(e5.preview.element), e5.toolbar.elements.devtools && t5.appendChild(e5.devtools.element), e5.options.outline.position === "right" && (e5.outline.element.classList.add("vditor-outline--right"), t5.appendChild(e5.outline.element)), e5.upload && t5.appendChild(e5.upload.element), e5.options.resize.enable && t5.appendChild(e5.resize.element), t5.appendChild(e5.hint.element), t5.appendChild(e5.tip.element), e5.element.appendChild(t5), t5.addEventListener("click", function() {
                  v(e5, ["subToolbar"]);
                }), e5.toolbar.elements.export && e5.element.insertAdjacentHTML("beforeend", '<iframe style="width: 100%;height: 0;border: 0"></iframe>'), ge(e5, e5.options.mode, Z(e5)), document.execCommand("DefaultParagraphSeparator", false, "p"), navigator.userAgent.indexOf("iPhone") > -1 && window.visualViewport !== void 0) {
                  var n3 = false, r2 = function(t6) {
                    n3 || (n3 = true, requestAnimationFrame(function() {
                      n3 = false;
                      var t7 = e5.toolbar.element;
                      t7.style.transform = "none", t7.getBoundingClientRect().top < 0 && (t7.style.transform = "translate(0, " + -t7.getBoundingClientRect().top + "px)");
                    }));
                  };
                  window.visualViewport.addEventListener("scroll", r2), window.visualViewport.addEventListener("resize", r2);
                }
              }(n2.vditor), t4.after && t4.after(), t4.icon && (0, l.J)(t4.cdn + "/dist/js/icons/" + t4.icon + ".js", "vditorIconScript");
            });
          }, t3;
        }(t2.default);
      })(), r = r.default;
    })();
  });
})(index_min);
var Vditor = /* @__PURE__ */ getDefaultExportFromCjs(index_min.exports);
var index = "";
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    height: { type: Number, default: 360 },
    value: { type: String, default: "" }
  },
  emits: ["change", "get", "update:value"],
  setup(props, { attrs, emit }) {
    const wrapRef = ref(null);
    const vditorRef = ref(null);
    const initedRef = ref(false);
    const modalFn = useModalContext();
    const { getLocale } = useLocale();
    const { getDarkMode } = useRootSetting();
    const valueRef = ref(props.value || "");
    watch([() => getDarkMode.value, () => initedRef.value], ([val, inited]) => {
      var _a;
      if (!inited) {
        return;
      }
      const theme = val === "dark" ? "dark" : "classic";
      (_a = instance.getVditor()) == null ? void 0 : _a.setTheme(theme);
    }, {
      immediate: true,
      flush: "post"
    });
    watch(() => props.value, (v) => {
      var _a;
      if (v !== valueRef.value) {
        (_a = instance.getVditor()) == null ? void 0 : _a.setValue(v);
      }
      valueRef.value = v;
    });
    const getCurrentLang = computed(() => {
      let lang;
      switch (unref(getLocale)) {
        case "en":
          lang = "en_US";
          break;
        case "ja":
          lang = "ja_JP";
          break;
        case "ko":
          lang = "ko_KR";
          break;
        default:
          lang = "zh_CN";
      }
      return lang;
    });
    function init() {
      const wrapEl = unref(wrapRef);
      if (!wrapEl)
        return;
      const bindValue = __spreadValues(__spreadValues({}, attrs), props);
      const insEditor = new Vditor(wrapEl, __spreadProps(__spreadValues({
        theme: getDarkMode.value === "dark" ? "dark" : "classic",
        lang: unref(getCurrentLang),
        mode: "sv",
        fullscreen: {
          index: 520
        },
        preview: {
          actions: []
        },
        input: (v) => {
          valueRef.value = v;
          emit("update:value", v);
          emit("change", v);
        },
        after: () => {
          nextTick(() => {
            var _a;
            (_a = modalFn == null ? void 0 : modalFn.redoModalHeight) == null ? void 0 : _a.call(modalFn);
            insEditor.setValue(valueRef.value);
            vditorRef.value = insEditor;
            initedRef.value = true;
            emit("get", instance);
          });
        },
        blur: () => {
        }
      }, bindValue), {
        cache: {
          enable: false
        }
      }));
    }
    const instance = {
      getVditor: () => vditorRef.value
    };
    function destroy() {
      var _a;
      const vditorInstance = unref(vditorRef);
      if (!vditorInstance)
        return;
      try {
        (_a = vditorInstance == null ? void 0 : vditorInstance.destroy) == null ? void 0 : _a.call(vditorInstance);
      } catch (error) {
      }
      vditorRef.value = null;
      initedRef.value = false;
    }
    onMountedOrActivated(init);
    onBeforeUnmount(destroy);
    onDeactivated(destroy);
    return __spreadValues({
      wrapRef
    }, instance);
  }
});
const _hoisted_1$1 = { ref: "wrapRef" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, null, 512);
}
var markDown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
var showdown$1 = { exports: {} };
(function(module) {
  (function() {
    function getDefaultOpts(simple) {
      var defaultOptions = {
        omitExtraWLInCodeBlocks: {
          defaultValue: false,
          describe: "Omit the default extra whiteline added to code blocks",
          type: "boolean"
        },
        noHeaderId: {
          defaultValue: false,
          describe: "Turn on/off generated header id",
          type: "boolean"
        },
        prefixHeaderId: {
          defaultValue: false,
          describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: "string"
        },
        rawPrefixHeaderId: {
          defaultValue: false,
          describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: "boolean"
        },
        ghCompatibleHeaderId: {
          defaultValue: false,
          describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
          type: "boolean"
        },
        rawHeaderId: {
          defaultValue: false,
          describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
          type: "boolean"
        },
        headerLevelStart: {
          defaultValue: false,
          describe: "The header blocks level start",
          type: "integer"
        },
        parseImgDimensions: {
          defaultValue: false,
          describe: "Turn on/off image dimension parsing",
          type: "boolean"
        },
        simplifiedAutoLink: {
          defaultValue: false,
          describe: "Turn on/off GFM autolink style",
          type: "boolean"
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: false,
          describe: "Excludes trailing punctuation from links generated with autoLinking",
          type: "boolean"
        },
        literalMidWordUnderscores: {
          defaultValue: false,
          describe: "Parse midword underscores as literal underscores",
          type: "boolean"
        },
        literalMidWordAsterisks: {
          defaultValue: false,
          describe: "Parse midword asterisks as literal asterisks",
          type: "boolean"
        },
        strikethrough: {
          defaultValue: false,
          describe: "Turn on/off strikethrough support",
          type: "boolean"
        },
        tables: {
          defaultValue: false,
          describe: "Turn on/off tables support",
          type: "boolean"
        },
        tablesHeaderId: {
          defaultValue: false,
          describe: "Add an id to table headers",
          type: "boolean"
        },
        ghCodeBlocks: {
          defaultValue: true,
          describe: "Turn on/off GFM fenced code blocks support",
          type: "boolean"
        },
        tasklists: {
          defaultValue: false,
          describe: "Turn on/off GFM tasklist support",
          type: "boolean"
        },
        smoothLivePreview: {
          defaultValue: false,
          describe: "Prevents weird effects in live previews due to incomplete input",
          type: "boolean"
        },
        smartIndentationFix: {
          defaultValue: false,
          description: "Tries to smartly fix indentation in es6 strings",
          type: "boolean"
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: false,
          description: "Disables the requirement of indenting nested sublists by 4 spaces",
          type: "boolean"
        },
        simpleLineBreaks: {
          defaultValue: false,
          description: "Parses simple line breaks as <br> (GFM Style)",
          type: "boolean"
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: false,
          description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
          type: "boolean"
        },
        ghMentions: {
          defaultValue: false,
          description: "Enables github @mentions",
          type: "boolean"
        },
        ghMentionsLink: {
          defaultValue: "https://github.com/{u}",
          description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
          type: "string"
        },
        encodeEmails: {
          defaultValue: true,
          description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
          type: "boolean"
        },
        openLinksInNewWindow: {
          defaultValue: false,
          description: "Open all links in new windows",
          type: "boolean"
        },
        backslashEscapesHTMLTags: {
          defaultValue: false,
          description: "Support for HTML Tag escaping. ex: <div>foo</div>",
          type: "boolean"
        },
        emoji: {
          defaultValue: false,
          description: "Enable emoji support. Ex: `this is a :smile: emoji`",
          type: "boolean"
        },
        underline: {
          defaultValue: false,
          description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
          type: "boolean"
        },
        completeHTMLDocument: {
          defaultValue: false,
          description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
          type: "boolean"
        },
        metadata: {
          defaultValue: false,
          description: "Enable support for document metadata (defined at the top of the document between `\xAB\xAB\xAB` and `\xBB\xBB\xBB` or between `---` and `---`).",
          type: "boolean"
        },
        splitAdjacentBlockquotes: {
          defaultValue: false,
          description: "Split adjacent blockquote blocks",
          type: "boolean"
        }
      };
      if (simple === false) {
        return JSON.parse(JSON.stringify(defaultOptions));
      }
      var ret = {};
      for (var opt in defaultOptions) {
        if (defaultOptions.hasOwnProperty(opt)) {
          ret[opt] = defaultOptions[opt].defaultValue;
        }
      }
      return ret;
    }
    function allOptionsOn() {
      var options = getDefaultOpts(true), ret = {};
      for (var opt in options) {
        if (options.hasOwnProperty(opt)) {
          ret[opt] = true;
        }
      }
      return ret;
    }
    var showdown2 = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
      github: {
        omitExtraWLInCodeBlocks: true,
        simplifiedAutoLink: true,
        excludeTrailingPunctuationFromURLs: true,
        literalMidWordUnderscores: true,
        strikethrough: true,
        tables: true,
        tablesHeaderId: true,
        ghCodeBlocks: true,
        tasklists: true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks: true,
        requireSpaceBeforeHeadingText: true,
        ghCompatibleHeaderId: true,
        ghMentions: true,
        backslashEscapesHTMLTags: true,
        emoji: true,
        splitAdjacentBlockquotes: true
      },
      original: {
        noHeaderId: true,
        ghCodeBlocks: false
      },
      ghost: {
        omitExtraWLInCodeBlocks: true,
        parseImgDimensions: true,
        simplifiedAutoLink: true,
        excludeTrailingPunctuationFromURLs: true,
        literalMidWordUnderscores: true,
        strikethrough: true,
        tables: true,
        tablesHeaderId: true,
        ghCodeBlocks: true,
        tasklists: true,
        smoothLivePreview: true,
        simpleLineBreaks: true,
        requireSpaceBeforeHeadingText: true,
        ghMentions: false,
        encodeEmails: true
      },
      vanilla: getDefaultOpts(true),
      allOn: allOptionsOn()
    };
    showdown2.helper = {};
    showdown2.extensions = {};
    showdown2.setOption = function(key, value) {
      globalOptions[key] = value;
      return this;
    };
    showdown2.getOption = function(key) {
      return globalOptions[key];
    };
    showdown2.getOptions = function() {
      return globalOptions;
    };
    showdown2.resetOptions = function() {
      globalOptions = getDefaultOpts(true);
    };
    showdown2.setFlavor = function(name) {
      if (!flavor.hasOwnProperty(name)) {
        throw Error(name + " flavor was not found");
      }
      showdown2.resetOptions();
      var preset = flavor[name];
      setFlavor = name;
      for (var option in preset) {
        if (preset.hasOwnProperty(option)) {
          globalOptions[option] = preset[option];
        }
      }
    };
    showdown2.getFlavor = function() {
      return setFlavor;
    };
    showdown2.getFlavorOptions = function(name) {
      if (flavor.hasOwnProperty(name)) {
        return flavor[name];
      }
    };
    showdown2.getDefaultOptions = function(simple) {
      return getDefaultOpts(simple);
    };
    showdown2.subParser = function(name, func) {
      if (showdown2.helper.isString(name)) {
        if (typeof func !== "undefined") {
          parsers[name] = func;
        } else {
          if (parsers.hasOwnProperty(name)) {
            return parsers[name];
          } else {
            throw Error("SubParser named " + name + " not registered!");
          }
        }
      }
    };
    showdown2.extension = function(name, ext) {
      if (!showdown2.helper.isString(name)) {
        throw Error("Extension 'name' must be a string");
      }
      name = showdown2.helper.stdExtName(name);
      if (showdown2.helper.isUndefined(ext)) {
        if (!extensions.hasOwnProperty(name)) {
          throw Error("Extension named " + name + " is not registered!");
        }
        return extensions[name];
      } else {
        if (typeof ext === "function") {
          ext = ext();
        }
        if (!showdown2.helper.isArray(ext)) {
          ext = [ext];
        }
        var validExtension = validate(ext, name);
        if (validExtension.valid) {
          extensions[name] = ext;
        } else {
          throw Error(validExtension.error);
        }
      }
    };
    showdown2.getAllExtensions = function() {
      return extensions;
    };
    showdown2.removeExtension = function(name) {
      delete extensions[name];
    };
    showdown2.resetExtensions = function() {
      extensions = {};
    };
    function validate(extension, name) {
      var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
        valid: true,
        error: ""
      };
      if (!showdown2.helper.isArray(extension)) {
        extension = [extension];
      }
      for (var i = 0; i < extension.length; ++i) {
        var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
        if (typeof ext !== "object") {
          ret.valid = false;
          ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
          return ret;
        }
        if (!showdown2.helper.isString(ext.type)) {
          ret.valid = false;
          ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
          return ret;
        }
        var type = ext.type = ext.type.toLowerCase();
        if (type === "language") {
          type = ext.type = "lang";
        }
        if (type === "html") {
          type = ext.type = "output";
        }
        if (type !== "lang" && type !== "output" && type !== "listener") {
          ret.valid = false;
          ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
          return ret;
        }
        if (type === "listener") {
          if (showdown2.helper.isUndefined(ext.listeners)) {
            ret.valid = false;
            ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
            return ret;
          }
        } else {
          if (showdown2.helper.isUndefined(ext.filter) && showdown2.helper.isUndefined(ext.regex)) {
            ret.valid = false;
            ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
            return ret;
          }
        }
        if (ext.listeners) {
          if (typeof ext.listeners !== "object") {
            ret.valid = false;
            ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
            return ret;
          }
          for (var ln in ext.listeners) {
            if (ext.listeners.hasOwnProperty(ln)) {
              if (typeof ext.listeners[ln] !== "function") {
                ret.valid = false;
                ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                return ret;
              }
            }
          }
        }
        if (ext.filter) {
          if (typeof ext.filter !== "function") {
            ret.valid = false;
            ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
            return ret;
          }
        } else if (ext.regex) {
          if (showdown2.helper.isString(ext.regex)) {
            ext.regex = new RegExp(ext.regex, "g");
          }
          if (!(ext.regex instanceof RegExp)) {
            ret.valid = false;
            ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
            return ret;
          }
          if (showdown2.helper.isUndefined(ext.replace)) {
            ret.valid = false;
            ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
            return ret;
          }
        }
      }
      return ret;
    }
    showdown2.validateExtension = function(ext) {
      var validateExtension = validate(ext, null);
      if (!validateExtension.valid) {
        console.warn(validateExtension.error);
        return false;
      }
      return true;
    };
    if (!showdown2.hasOwnProperty("helper")) {
      showdown2.helper = {};
    }
    showdown2.helper.isString = function(a) {
      return typeof a === "string" || a instanceof String;
    };
    showdown2.helper.isFunction = function(a) {
      var getType = {};
      return a && getType.toString.call(a) === "[object Function]";
    };
    showdown2.helper.isArray = function(a) {
      return Array.isArray(a);
    };
    showdown2.helper.isUndefined = function(value) {
      return typeof value === "undefined";
    };
    showdown2.helper.forEach = function(obj, callback) {
      if (showdown2.helper.isUndefined(obj)) {
        throw new Error("obj param is required");
      }
      if (showdown2.helper.isUndefined(callback)) {
        throw new Error("callback param is required");
      }
      if (!showdown2.helper.isFunction(callback)) {
        throw new Error("callback param must be a function/closure");
      }
      if (typeof obj.forEach === "function") {
        obj.forEach(callback);
      } else if (showdown2.helper.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          callback(obj[i], i, obj);
        }
      } else if (typeof obj === "object") {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            callback(obj[prop], prop, obj);
          }
        }
      } else {
        throw new Error("obj does not seem to be an array or an iterable object");
      }
    };
    showdown2.helper.stdExtName = function(s) {
      return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function escapeCharactersCallback(wholeMatch, m1) {
      var charCodeToEscape = m1.charCodeAt(0);
      return "\xA8E" + charCodeToEscape + "E";
    }
    showdown2.helper.escapeCharactersCallback = escapeCharactersCallback;
    showdown2.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
      var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
      if (afterBackslash) {
        regexString = "\\\\" + regexString;
      }
      var regex = new RegExp(regexString, "g");
      text = text.replace(regex, escapeCharactersCallback);
      return text;
    };
    showdown2.helper.unescapeHTMLEntities = function(txt) {
      return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var rgxFindMatchPos = function(str, left, right, flags) {
      var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
      do {
        t = 0;
        while (m = x.exec(str)) {
          if (l.test(m[0])) {
            if (!t++) {
              s = x.lastIndex;
              start = s - m[0].length;
            }
          } else if (t) {
            if (!--t) {
              end = m.index + m[0].length;
              var obj = {
                left: { start, end: s },
                match: { start: s, end: m.index },
                right: { start: m.index, end },
                wholeMatch: { start, end }
              };
              pos.push(obj);
              if (!g) {
                return pos;
              }
            }
          }
        }
      } while (t && (x.lastIndex = s));
      return pos;
    };
    showdown2.helper.matchRecursiveRegExp = function(str, left, right, flags) {
      var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
      for (var i = 0; i < matchPos.length; ++i) {
        results.push([
          str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
          str.slice(matchPos[i].match.start, matchPos[i].match.end),
          str.slice(matchPos[i].left.start, matchPos[i].left.end),
          str.slice(matchPos[i].right.start, matchPos[i].right.end)
        ]);
      }
      return results;
    };
    showdown2.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
      if (!showdown2.helper.isFunction(replacement)) {
        var repStr = replacement;
        replacement = function() {
          return repStr;
        };
      }
      var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
      if (lng > 0) {
        var bits = [];
        if (matchPos[0].wholeMatch.start !== 0) {
          bits.push(str.slice(0, matchPos[0].wholeMatch.start));
        }
        for (var i = 0; i < lng; ++i) {
          bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));
          if (i < lng - 1) {
            bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
          }
        }
        if (matchPos[lng - 1].wholeMatch.end < str.length) {
          bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
        }
        finalStr = bits.join("");
      }
      return finalStr;
    };
    showdown2.helper.regexIndexOf = function(str, regex, fromIndex) {
      if (!showdown2.helper.isString(str)) {
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      }
      if (regex instanceof RegExp === false) {
        throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
      }
      var indexOf = str.substring(fromIndex || 0).search(regex);
      return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
    };
    showdown2.helper.splitAtIndex = function(str, index2) {
      if (!showdown2.helper.isString(str)) {
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      }
      return [str.substring(0, index2), str.substring(index2)];
    };
    showdown2.helper.encodeEmailAddress = function(mail) {
      var encode = [
        function(ch) {
          return "&#" + ch.charCodeAt(0) + ";";
        },
        function(ch) {
          return "&#x" + ch.charCodeAt(0).toString(16) + ";";
        },
        function(ch) {
          return ch;
        }
      ];
      mail = mail.replace(/./g, function(ch) {
        if (ch === "@") {
          ch = encode[Math.floor(Math.random() * 2)](ch);
        } else {
          var r = Math.random();
          ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
        }
        return ch;
      });
      return mail;
    };
    showdown2.helper.padEnd = function padEnd(str, targetLength, padString) {
      targetLength = targetLength >> 0;
      padString = String(padString || " ");
      if (str.length > targetLength) {
        return String(str);
      } else {
        targetLength = targetLength - str.length;
        if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length);
        }
        return String(str) + padString.slice(0, targetLength);
      }
    };
    if (typeof console === "undefined") {
      console = {
        warn: function(msg) {
          alert(msg);
        },
        log: function(msg) {
          alert(msg);
        },
        error: function(msg) {
          throw msg;
        }
      };
    }
    showdown2.helper.regexes = {
      asteriskDashAndColon: /([*_:~])/g
    };
    showdown2.helper.emojis = {
      "+1": "\u{1F44D}",
      "-1": "\u{1F44E}",
      "100": "\u{1F4AF}",
      "1234": "\u{1F522}",
      "1st_place_medal": "\u{1F947}",
      "2nd_place_medal": "\u{1F948}",
      "3rd_place_medal": "\u{1F949}",
      "8ball": "\u{1F3B1}",
      "a": "\u{1F170}\uFE0F",
      "ab": "\u{1F18E}",
      "abc": "\u{1F524}",
      "abcd": "\u{1F521}",
      "accept": "\u{1F251}",
      "aerial_tramway": "\u{1F6A1}",
      "airplane": "\u2708\uFE0F",
      "alarm_clock": "\u23F0",
      "alembic": "\u2697\uFE0F",
      "alien": "\u{1F47D}",
      "ambulance": "\u{1F691}",
      "amphora": "\u{1F3FA}",
      "anchor": "\u2693\uFE0F",
      "angel": "\u{1F47C}",
      "anger": "\u{1F4A2}",
      "angry": "\u{1F620}",
      "anguished": "\u{1F627}",
      "ant": "\u{1F41C}",
      "apple": "\u{1F34E}",
      "aquarius": "\u2652\uFE0F",
      "aries": "\u2648\uFE0F",
      "arrow_backward": "\u25C0\uFE0F",
      "arrow_double_down": "\u23EC",
      "arrow_double_up": "\u23EB",
      "arrow_down": "\u2B07\uFE0F",
      "arrow_down_small": "\u{1F53D}",
      "arrow_forward": "\u25B6\uFE0F",
      "arrow_heading_down": "\u2935\uFE0F",
      "arrow_heading_up": "\u2934\uFE0F",
      "arrow_left": "\u2B05\uFE0F",
      "arrow_lower_left": "\u2199\uFE0F",
      "arrow_lower_right": "\u2198\uFE0F",
      "arrow_right": "\u27A1\uFE0F",
      "arrow_right_hook": "\u21AA\uFE0F",
      "arrow_up": "\u2B06\uFE0F",
      "arrow_up_down": "\u2195\uFE0F",
      "arrow_up_small": "\u{1F53C}",
      "arrow_upper_left": "\u2196\uFE0F",
      "arrow_upper_right": "\u2197\uFE0F",
      "arrows_clockwise": "\u{1F503}",
      "arrows_counterclockwise": "\u{1F504}",
      "art": "\u{1F3A8}",
      "articulated_lorry": "\u{1F69B}",
      "artificial_satellite": "\u{1F6F0}",
      "astonished": "\u{1F632}",
      "athletic_shoe": "\u{1F45F}",
      "atm": "\u{1F3E7}",
      "atom_symbol": "\u269B\uFE0F",
      "avocado": "\u{1F951}",
      "b": "\u{1F171}\uFE0F",
      "baby": "\u{1F476}",
      "baby_bottle": "\u{1F37C}",
      "baby_chick": "\u{1F424}",
      "baby_symbol": "\u{1F6BC}",
      "back": "\u{1F519}",
      "bacon": "\u{1F953}",
      "badminton": "\u{1F3F8}",
      "baggage_claim": "\u{1F6C4}",
      "baguette_bread": "\u{1F956}",
      "balance_scale": "\u2696\uFE0F",
      "balloon": "\u{1F388}",
      "ballot_box": "\u{1F5F3}",
      "ballot_box_with_check": "\u2611\uFE0F",
      "bamboo": "\u{1F38D}",
      "banana": "\u{1F34C}",
      "bangbang": "\u203C\uFE0F",
      "bank": "\u{1F3E6}",
      "bar_chart": "\u{1F4CA}",
      "barber": "\u{1F488}",
      "baseball": "\u26BE\uFE0F",
      "basketball": "\u{1F3C0}",
      "basketball_man": "\u26F9\uFE0F",
      "basketball_woman": "\u26F9\uFE0F&zwj;\u2640\uFE0F",
      "bat": "\u{1F987}",
      "bath": "\u{1F6C0}",
      "bathtub": "\u{1F6C1}",
      "battery": "\u{1F50B}",
      "beach_umbrella": "\u{1F3D6}",
      "bear": "\u{1F43B}",
      "bed": "\u{1F6CF}",
      "bee": "\u{1F41D}",
      "beer": "\u{1F37A}",
      "beers": "\u{1F37B}",
      "beetle": "\u{1F41E}",
      "beginner": "\u{1F530}",
      "bell": "\u{1F514}",
      "bellhop_bell": "\u{1F6CE}",
      "bento": "\u{1F371}",
      "biking_man": "\u{1F6B4}",
      "bike": "\u{1F6B2}",
      "biking_woman": "\u{1F6B4}&zwj;\u2640\uFE0F",
      "bikini": "\u{1F459}",
      "biohazard": "\u2623\uFE0F",
      "bird": "\u{1F426}",
      "birthday": "\u{1F382}",
      "black_circle": "\u26AB\uFE0F",
      "black_flag": "\u{1F3F4}",
      "black_heart": "\u{1F5A4}",
      "black_joker": "\u{1F0CF}",
      "black_large_square": "\u2B1B\uFE0F",
      "black_medium_small_square": "\u25FE\uFE0F",
      "black_medium_square": "\u25FC\uFE0F",
      "black_nib": "\u2712\uFE0F",
      "black_small_square": "\u25AA\uFE0F",
      "black_square_button": "\u{1F532}",
      "blonde_man": "\u{1F471}",
      "blonde_woman": "\u{1F471}&zwj;\u2640\uFE0F",
      "blossom": "\u{1F33C}",
      "blowfish": "\u{1F421}",
      "blue_book": "\u{1F4D8}",
      "blue_car": "\u{1F699}",
      "blue_heart": "\u{1F499}",
      "blush": "\u{1F60A}",
      "boar": "\u{1F417}",
      "boat": "\u26F5\uFE0F",
      "bomb": "\u{1F4A3}",
      "book": "\u{1F4D6}",
      "bookmark": "\u{1F516}",
      "bookmark_tabs": "\u{1F4D1}",
      "books": "\u{1F4DA}",
      "boom": "\u{1F4A5}",
      "boot": "\u{1F462}",
      "bouquet": "\u{1F490}",
      "bowing_man": "\u{1F647}",
      "bow_and_arrow": "\u{1F3F9}",
      "bowing_woman": "\u{1F647}&zwj;\u2640\uFE0F",
      "bowling": "\u{1F3B3}",
      "boxing_glove": "\u{1F94A}",
      "boy": "\u{1F466}",
      "bread": "\u{1F35E}",
      "bride_with_veil": "\u{1F470}",
      "bridge_at_night": "\u{1F309}",
      "briefcase": "\u{1F4BC}",
      "broken_heart": "\u{1F494}",
      "bug": "\u{1F41B}",
      "building_construction": "\u{1F3D7}",
      "bulb": "\u{1F4A1}",
      "bullettrain_front": "\u{1F685}",
      "bullettrain_side": "\u{1F684}",
      "burrito": "\u{1F32F}",
      "bus": "\u{1F68C}",
      "business_suit_levitating": "\u{1F574}",
      "busstop": "\u{1F68F}",
      "bust_in_silhouette": "\u{1F464}",
      "busts_in_silhouette": "\u{1F465}",
      "butterfly": "\u{1F98B}",
      "cactus": "\u{1F335}",
      "cake": "\u{1F370}",
      "calendar": "\u{1F4C6}",
      "call_me_hand": "\u{1F919}",
      "calling": "\u{1F4F2}",
      "camel": "\u{1F42B}",
      "camera": "\u{1F4F7}",
      "camera_flash": "\u{1F4F8}",
      "camping": "\u{1F3D5}",
      "cancer": "\u264B\uFE0F",
      "candle": "\u{1F56F}",
      "candy": "\u{1F36C}",
      "canoe": "\u{1F6F6}",
      "capital_abcd": "\u{1F520}",
      "capricorn": "\u2651\uFE0F",
      "car": "\u{1F697}",
      "card_file_box": "\u{1F5C3}",
      "card_index": "\u{1F4C7}",
      "card_index_dividers": "\u{1F5C2}",
      "carousel_horse": "\u{1F3A0}",
      "carrot": "\u{1F955}",
      "cat": "\u{1F431}",
      "cat2": "\u{1F408}",
      "cd": "\u{1F4BF}",
      "chains": "\u26D3",
      "champagne": "\u{1F37E}",
      "chart": "\u{1F4B9}",
      "chart_with_downwards_trend": "\u{1F4C9}",
      "chart_with_upwards_trend": "\u{1F4C8}",
      "checkered_flag": "\u{1F3C1}",
      "cheese": "\u{1F9C0}",
      "cherries": "\u{1F352}",
      "cherry_blossom": "\u{1F338}",
      "chestnut": "\u{1F330}",
      "chicken": "\u{1F414}",
      "children_crossing": "\u{1F6B8}",
      "chipmunk": "\u{1F43F}",
      "chocolate_bar": "\u{1F36B}",
      "christmas_tree": "\u{1F384}",
      "church": "\u26EA\uFE0F",
      "cinema": "\u{1F3A6}",
      "circus_tent": "\u{1F3AA}",
      "city_sunrise": "\u{1F307}",
      "city_sunset": "\u{1F306}",
      "cityscape": "\u{1F3D9}",
      "cl": "\u{1F191}",
      "clamp": "\u{1F5DC}",
      "clap": "\u{1F44F}",
      "clapper": "\u{1F3AC}",
      "classical_building": "\u{1F3DB}",
      "clinking_glasses": "\u{1F942}",
      "clipboard": "\u{1F4CB}",
      "clock1": "\u{1F550}",
      "clock10": "\u{1F559}",
      "clock1030": "\u{1F565}",
      "clock11": "\u{1F55A}",
      "clock1130": "\u{1F566}",
      "clock12": "\u{1F55B}",
      "clock1230": "\u{1F567}",
      "clock130": "\u{1F55C}",
      "clock2": "\u{1F551}",
      "clock230": "\u{1F55D}",
      "clock3": "\u{1F552}",
      "clock330": "\u{1F55E}",
      "clock4": "\u{1F553}",
      "clock430": "\u{1F55F}",
      "clock5": "\u{1F554}",
      "clock530": "\u{1F560}",
      "clock6": "\u{1F555}",
      "clock630": "\u{1F561}",
      "clock7": "\u{1F556}",
      "clock730": "\u{1F562}",
      "clock8": "\u{1F557}",
      "clock830": "\u{1F563}",
      "clock9": "\u{1F558}",
      "clock930": "\u{1F564}",
      "closed_book": "\u{1F4D5}",
      "closed_lock_with_key": "\u{1F510}",
      "closed_umbrella": "\u{1F302}",
      "cloud": "\u2601\uFE0F",
      "cloud_with_lightning": "\u{1F329}",
      "cloud_with_lightning_and_rain": "\u26C8",
      "cloud_with_rain": "\u{1F327}",
      "cloud_with_snow": "\u{1F328}",
      "clown_face": "\u{1F921}",
      "clubs": "\u2663\uFE0F",
      "cocktail": "\u{1F378}",
      "coffee": "\u2615\uFE0F",
      "coffin": "\u26B0\uFE0F",
      "cold_sweat": "\u{1F630}",
      "comet": "\u2604\uFE0F",
      "computer": "\u{1F4BB}",
      "computer_mouse": "\u{1F5B1}",
      "confetti_ball": "\u{1F38A}",
      "confounded": "\u{1F616}",
      "confused": "\u{1F615}",
      "congratulations": "\u3297\uFE0F",
      "construction": "\u{1F6A7}",
      "construction_worker_man": "\u{1F477}",
      "construction_worker_woman": "\u{1F477}&zwj;\u2640\uFE0F",
      "control_knobs": "\u{1F39B}",
      "convenience_store": "\u{1F3EA}",
      "cookie": "\u{1F36A}",
      "cool": "\u{1F192}",
      "policeman": "\u{1F46E}",
      "copyright": "\xA9\uFE0F",
      "corn": "\u{1F33D}",
      "couch_and_lamp": "\u{1F6CB}",
      "couple": "\u{1F46B}",
      "couple_with_heart_woman_man": "\u{1F491}",
      "couple_with_heart_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F468}",
      "couple_with_heart_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F469}",
      "couplekiss_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F468}",
      "couplekiss_man_woman": "\u{1F48F}",
      "couplekiss_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F469}",
      "cow": "\u{1F42E}",
      "cow2": "\u{1F404}",
      "cowboy_hat_face": "\u{1F920}",
      "crab": "\u{1F980}",
      "crayon": "\u{1F58D}",
      "credit_card": "\u{1F4B3}",
      "crescent_moon": "\u{1F319}",
      "cricket": "\u{1F3CF}",
      "crocodile": "\u{1F40A}",
      "croissant": "\u{1F950}",
      "crossed_fingers": "\u{1F91E}",
      "crossed_flags": "\u{1F38C}",
      "crossed_swords": "\u2694\uFE0F",
      "crown": "\u{1F451}",
      "cry": "\u{1F622}",
      "crying_cat_face": "\u{1F63F}",
      "crystal_ball": "\u{1F52E}",
      "cucumber": "\u{1F952}",
      "cupid": "\u{1F498}",
      "curly_loop": "\u27B0",
      "currency_exchange": "\u{1F4B1}",
      "curry": "\u{1F35B}",
      "custard": "\u{1F36E}",
      "customs": "\u{1F6C3}",
      "cyclone": "\u{1F300}",
      "dagger": "\u{1F5E1}",
      "dancer": "\u{1F483}",
      "dancing_women": "\u{1F46F}",
      "dancing_men": "\u{1F46F}&zwj;\u2642\uFE0F",
      "dango": "\u{1F361}",
      "dark_sunglasses": "\u{1F576}",
      "dart": "\u{1F3AF}",
      "dash": "\u{1F4A8}",
      "date": "\u{1F4C5}",
      "deciduous_tree": "\u{1F333}",
      "deer": "\u{1F98C}",
      "department_store": "\u{1F3EC}",
      "derelict_house": "\u{1F3DA}",
      "desert": "\u{1F3DC}",
      "desert_island": "\u{1F3DD}",
      "desktop_computer": "\u{1F5A5}",
      "male_detective": "\u{1F575}\uFE0F",
      "diamond_shape_with_a_dot_inside": "\u{1F4A0}",
      "diamonds": "\u2666\uFE0F",
      "disappointed": "\u{1F61E}",
      "disappointed_relieved": "\u{1F625}",
      "dizzy": "\u{1F4AB}",
      "dizzy_face": "\u{1F635}",
      "do_not_litter": "\u{1F6AF}",
      "dog": "\u{1F436}",
      "dog2": "\u{1F415}",
      "dollar": "\u{1F4B5}",
      "dolls": "\u{1F38E}",
      "dolphin": "\u{1F42C}",
      "door": "\u{1F6AA}",
      "doughnut": "\u{1F369}",
      "dove": "\u{1F54A}",
      "dragon": "\u{1F409}",
      "dragon_face": "\u{1F432}",
      "dress": "\u{1F457}",
      "dromedary_camel": "\u{1F42A}",
      "drooling_face": "\u{1F924}",
      "droplet": "\u{1F4A7}",
      "drum": "\u{1F941}",
      "duck": "\u{1F986}",
      "dvd": "\u{1F4C0}",
      "e-mail": "\u{1F4E7}",
      "eagle": "\u{1F985}",
      "ear": "\u{1F442}",
      "ear_of_rice": "\u{1F33E}",
      "earth_africa": "\u{1F30D}",
      "earth_americas": "\u{1F30E}",
      "earth_asia": "\u{1F30F}",
      "egg": "\u{1F95A}",
      "eggplant": "\u{1F346}",
      "eight_pointed_black_star": "\u2734\uFE0F",
      "eight_spoked_asterisk": "\u2733\uFE0F",
      "electric_plug": "\u{1F50C}",
      "elephant": "\u{1F418}",
      "email": "\u2709\uFE0F",
      "end": "\u{1F51A}",
      "envelope_with_arrow": "\u{1F4E9}",
      "euro": "\u{1F4B6}",
      "european_castle": "\u{1F3F0}",
      "european_post_office": "\u{1F3E4}",
      "evergreen_tree": "\u{1F332}",
      "exclamation": "\u2757\uFE0F",
      "expressionless": "\u{1F611}",
      "eye": "\u{1F441}",
      "eye_speech_bubble": "\u{1F441}&zwj;\u{1F5E8}",
      "eyeglasses": "\u{1F453}",
      "eyes": "\u{1F440}",
      "face_with_head_bandage": "\u{1F915}",
      "face_with_thermometer": "\u{1F912}",
      "fist_oncoming": "\u{1F44A}",
      "factory": "\u{1F3ED}",
      "fallen_leaf": "\u{1F342}",
      "family_man_woman_boy": "\u{1F46A}",
      "family_man_boy": "\u{1F468}&zwj;\u{1F466}",
      "family_man_boy_boy": "\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
      "family_man_girl": "\u{1F468}&zwj;\u{1F467}",
      "family_man_girl_boy": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
      "family_man_girl_girl": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
      "family_man_man_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}",
      "family_man_man_boy_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
      "family_man_man_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}",
      "family_man_man_girl_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
      "family_man_man_girl_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
      "family_man_woman_boy_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
      "family_man_woman_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}",
      "family_man_woman_girl_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
      "family_man_woman_girl_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
      "family_woman_boy": "\u{1F469}&zwj;\u{1F466}",
      "family_woman_boy_boy": "\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
      "family_woman_girl": "\u{1F469}&zwj;\u{1F467}",
      "family_woman_girl_boy": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
      "family_woman_girl_girl": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
      "family_woman_woman_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}",
      "family_woman_woman_boy_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
      "family_woman_woman_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}",
      "family_woman_woman_girl_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
      "family_woman_woman_girl_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
      "fast_forward": "\u23E9",
      "fax": "\u{1F4E0}",
      "fearful": "\u{1F628}",
      "feet": "\u{1F43E}",
      "female_detective": "\u{1F575}\uFE0F&zwj;\u2640\uFE0F",
      "ferris_wheel": "\u{1F3A1}",
      "ferry": "\u26F4",
      "field_hockey": "\u{1F3D1}",
      "file_cabinet": "\u{1F5C4}",
      "file_folder": "\u{1F4C1}",
      "film_projector": "\u{1F4FD}",
      "film_strip": "\u{1F39E}",
      "fire": "\u{1F525}",
      "fire_engine": "\u{1F692}",
      "fireworks": "\u{1F386}",
      "first_quarter_moon": "\u{1F313}",
      "first_quarter_moon_with_face": "\u{1F31B}",
      "fish": "\u{1F41F}",
      "fish_cake": "\u{1F365}",
      "fishing_pole_and_fish": "\u{1F3A3}",
      "fist_raised": "\u270A",
      "fist_left": "\u{1F91B}",
      "fist_right": "\u{1F91C}",
      "flags": "\u{1F38F}",
      "flashlight": "\u{1F526}",
      "fleur_de_lis": "\u269C\uFE0F",
      "flight_arrival": "\u{1F6EC}",
      "flight_departure": "\u{1F6EB}",
      "floppy_disk": "\u{1F4BE}",
      "flower_playing_cards": "\u{1F3B4}",
      "flushed": "\u{1F633}",
      "fog": "\u{1F32B}",
      "foggy": "\u{1F301}",
      "football": "\u{1F3C8}",
      "footprints": "\u{1F463}",
      "fork_and_knife": "\u{1F374}",
      "fountain": "\u26F2\uFE0F",
      "fountain_pen": "\u{1F58B}",
      "four_leaf_clover": "\u{1F340}",
      "fox_face": "\u{1F98A}",
      "framed_picture": "\u{1F5BC}",
      "free": "\u{1F193}",
      "fried_egg": "\u{1F373}",
      "fried_shrimp": "\u{1F364}",
      "fries": "\u{1F35F}",
      "frog": "\u{1F438}",
      "frowning": "\u{1F626}",
      "frowning_face": "\u2639\uFE0F",
      "frowning_man": "\u{1F64D}&zwj;\u2642\uFE0F",
      "frowning_woman": "\u{1F64D}",
      "middle_finger": "\u{1F595}",
      "fuelpump": "\u26FD\uFE0F",
      "full_moon": "\u{1F315}",
      "full_moon_with_face": "\u{1F31D}",
      "funeral_urn": "\u26B1\uFE0F",
      "game_die": "\u{1F3B2}",
      "gear": "\u2699\uFE0F",
      "gem": "\u{1F48E}",
      "gemini": "\u264A\uFE0F",
      "ghost": "\u{1F47B}",
      "gift": "\u{1F381}",
      "gift_heart": "\u{1F49D}",
      "girl": "\u{1F467}",
      "globe_with_meridians": "\u{1F310}",
      "goal_net": "\u{1F945}",
      "goat": "\u{1F410}",
      "golf": "\u26F3\uFE0F",
      "golfing_man": "\u{1F3CC}\uFE0F",
      "golfing_woman": "\u{1F3CC}\uFE0F&zwj;\u2640\uFE0F",
      "gorilla": "\u{1F98D}",
      "grapes": "\u{1F347}",
      "green_apple": "\u{1F34F}",
      "green_book": "\u{1F4D7}",
      "green_heart": "\u{1F49A}",
      "green_salad": "\u{1F957}",
      "grey_exclamation": "\u2755",
      "grey_question": "\u2754",
      "grimacing": "\u{1F62C}",
      "grin": "\u{1F601}",
      "grinning": "\u{1F600}",
      "guardsman": "\u{1F482}",
      "guardswoman": "\u{1F482}&zwj;\u2640\uFE0F",
      "guitar": "\u{1F3B8}",
      "gun": "\u{1F52B}",
      "haircut_woman": "\u{1F487}",
      "haircut_man": "\u{1F487}&zwj;\u2642\uFE0F",
      "hamburger": "\u{1F354}",
      "hammer": "\u{1F528}",
      "hammer_and_pick": "\u2692",
      "hammer_and_wrench": "\u{1F6E0}",
      "hamster": "\u{1F439}",
      "hand": "\u270B",
      "handbag": "\u{1F45C}",
      "handshake": "\u{1F91D}",
      "hankey": "\u{1F4A9}",
      "hatched_chick": "\u{1F425}",
      "hatching_chick": "\u{1F423}",
      "headphones": "\u{1F3A7}",
      "hear_no_evil": "\u{1F649}",
      "heart": "\u2764\uFE0F",
      "heart_decoration": "\u{1F49F}",
      "heart_eyes": "\u{1F60D}",
      "heart_eyes_cat": "\u{1F63B}",
      "heartbeat": "\u{1F493}",
      "heartpulse": "\u{1F497}",
      "hearts": "\u2665\uFE0F",
      "heavy_check_mark": "\u2714\uFE0F",
      "heavy_division_sign": "\u2797",
      "heavy_dollar_sign": "\u{1F4B2}",
      "heavy_heart_exclamation": "\u2763\uFE0F",
      "heavy_minus_sign": "\u2796",
      "heavy_multiplication_x": "\u2716\uFE0F",
      "heavy_plus_sign": "\u2795",
      "helicopter": "\u{1F681}",
      "herb": "\u{1F33F}",
      "hibiscus": "\u{1F33A}",
      "high_brightness": "\u{1F506}",
      "high_heel": "\u{1F460}",
      "hocho": "\u{1F52A}",
      "hole": "\u{1F573}",
      "honey_pot": "\u{1F36F}",
      "horse": "\u{1F434}",
      "horse_racing": "\u{1F3C7}",
      "hospital": "\u{1F3E5}",
      "hot_pepper": "\u{1F336}",
      "hotdog": "\u{1F32D}",
      "hotel": "\u{1F3E8}",
      "hotsprings": "\u2668\uFE0F",
      "hourglass": "\u231B\uFE0F",
      "hourglass_flowing_sand": "\u23F3",
      "house": "\u{1F3E0}",
      "house_with_garden": "\u{1F3E1}",
      "houses": "\u{1F3D8}",
      "hugs": "\u{1F917}",
      "hushed": "\u{1F62F}",
      "ice_cream": "\u{1F368}",
      "ice_hockey": "\u{1F3D2}",
      "ice_skate": "\u26F8",
      "icecream": "\u{1F366}",
      "id": "\u{1F194}",
      "ideograph_advantage": "\u{1F250}",
      "imp": "\u{1F47F}",
      "inbox_tray": "\u{1F4E5}",
      "incoming_envelope": "\u{1F4E8}",
      "tipping_hand_woman": "\u{1F481}",
      "information_source": "\u2139\uFE0F",
      "innocent": "\u{1F607}",
      "interrobang": "\u2049\uFE0F",
      "iphone": "\u{1F4F1}",
      "izakaya_lantern": "\u{1F3EE}",
      "jack_o_lantern": "\u{1F383}",
      "japan": "\u{1F5FE}",
      "japanese_castle": "\u{1F3EF}",
      "japanese_goblin": "\u{1F47A}",
      "japanese_ogre": "\u{1F479}",
      "jeans": "\u{1F456}",
      "joy": "\u{1F602}",
      "joy_cat": "\u{1F639}",
      "joystick": "\u{1F579}",
      "kaaba": "\u{1F54B}",
      "key": "\u{1F511}",
      "keyboard": "\u2328\uFE0F",
      "keycap_ten": "\u{1F51F}",
      "kick_scooter": "\u{1F6F4}",
      "kimono": "\u{1F458}",
      "kiss": "\u{1F48B}",
      "kissing": "\u{1F617}",
      "kissing_cat": "\u{1F63D}",
      "kissing_closed_eyes": "\u{1F61A}",
      "kissing_heart": "\u{1F618}",
      "kissing_smiling_eyes": "\u{1F619}",
      "kiwi_fruit": "\u{1F95D}",
      "koala": "\u{1F428}",
      "koko": "\u{1F201}",
      "label": "\u{1F3F7}",
      "large_blue_circle": "\u{1F535}",
      "large_blue_diamond": "\u{1F537}",
      "large_orange_diamond": "\u{1F536}",
      "last_quarter_moon": "\u{1F317}",
      "last_quarter_moon_with_face": "\u{1F31C}",
      "latin_cross": "\u271D\uFE0F",
      "laughing": "\u{1F606}",
      "leaves": "\u{1F343}",
      "ledger": "\u{1F4D2}",
      "left_luggage": "\u{1F6C5}",
      "left_right_arrow": "\u2194\uFE0F",
      "leftwards_arrow_with_hook": "\u21A9\uFE0F",
      "lemon": "\u{1F34B}",
      "leo": "\u264C\uFE0F",
      "leopard": "\u{1F406}",
      "level_slider": "\u{1F39A}",
      "libra": "\u264E\uFE0F",
      "light_rail": "\u{1F688}",
      "link": "\u{1F517}",
      "lion": "\u{1F981}",
      "lips": "\u{1F444}",
      "lipstick": "\u{1F484}",
      "lizard": "\u{1F98E}",
      "lock": "\u{1F512}",
      "lock_with_ink_pen": "\u{1F50F}",
      "lollipop": "\u{1F36D}",
      "loop": "\u27BF",
      "loud_sound": "\u{1F50A}",
      "loudspeaker": "\u{1F4E2}",
      "love_hotel": "\u{1F3E9}",
      "love_letter": "\u{1F48C}",
      "low_brightness": "\u{1F505}",
      "lying_face": "\u{1F925}",
      "m": "\u24C2\uFE0F",
      "mag": "\u{1F50D}",
      "mag_right": "\u{1F50E}",
      "mahjong": "\u{1F004}\uFE0F",
      "mailbox": "\u{1F4EB}",
      "mailbox_closed": "\u{1F4EA}",
      "mailbox_with_mail": "\u{1F4EC}",
      "mailbox_with_no_mail": "\u{1F4ED}",
      "man": "\u{1F468}",
      "man_artist": "\u{1F468}&zwj;\u{1F3A8}",
      "man_astronaut": "\u{1F468}&zwj;\u{1F680}",
      "man_cartwheeling": "\u{1F938}&zwj;\u2642\uFE0F",
      "man_cook": "\u{1F468}&zwj;\u{1F373}",
      "man_dancing": "\u{1F57A}",
      "man_facepalming": "\u{1F926}&zwj;\u2642\uFE0F",
      "man_factory_worker": "\u{1F468}&zwj;\u{1F3ED}",
      "man_farmer": "\u{1F468}&zwj;\u{1F33E}",
      "man_firefighter": "\u{1F468}&zwj;\u{1F692}",
      "man_health_worker": "\u{1F468}&zwj;\u2695\uFE0F",
      "man_in_tuxedo": "\u{1F935}",
      "man_judge": "\u{1F468}&zwj;\u2696\uFE0F",
      "man_juggling": "\u{1F939}&zwj;\u2642\uFE0F",
      "man_mechanic": "\u{1F468}&zwj;\u{1F527}",
      "man_office_worker": "\u{1F468}&zwj;\u{1F4BC}",
      "man_pilot": "\u{1F468}&zwj;\u2708\uFE0F",
      "man_playing_handball": "\u{1F93E}&zwj;\u2642\uFE0F",
      "man_playing_water_polo": "\u{1F93D}&zwj;\u2642\uFE0F",
      "man_scientist": "\u{1F468}&zwj;\u{1F52C}",
      "man_shrugging": "\u{1F937}&zwj;\u2642\uFE0F",
      "man_singer": "\u{1F468}&zwj;\u{1F3A4}",
      "man_student": "\u{1F468}&zwj;\u{1F393}",
      "man_teacher": "\u{1F468}&zwj;\u{1F3EB}",
      "man_technologist": "\u{1F468}&zwj;\u{1F4BB}",
      "man_with_gua_pi_mao": "\u{1F472}",
      "man_with_turban": "\u{1F473}",
      "tangerine": "\u{1F34A}",
      "mans_shoe": "\u{1F45E}",
      "mantelpiece_clock": "\u{1F570}",
      "maple_leaf": "\u{1F341}",
      "martial_arts_uniform": "\u{1F94B}",
      "mask": "\u{1F637}",
      "massage_woman": "\u{1F486}",
      "massage_man": "\u{1F486}&zwj;\u2642\uFE0F",
      "meat_on_bone": "\u{1F356}",
      "medal_military": "\u{1F396}",
      "medal_sports": "\u{1F3C5}",
      "mega": "\u{1F4E3}",
      "melon": "\u{1F348}",
      "memo": "\u{1F4DD}",
      "men_wrestling": "\u{1F93C}&zwj;\u2642\uFE0F",
      "menorah": "\u{1F54E}",
      "mens": "\u{1F6B9}",
      "metal": "\u{1F918}",
      "metro": "\u{1F687}",
      "microphone": "\u{1F3A4}",
      "microscope": "\u{1F52C}",
      "milk_glass": "\u{1F95B}",
      "milky_way": "\u{1F30C}",
      "minibus": "\u{1F690}",
      "minidisc": "\u{1F4BD}",
      "mobile_phone_off": "\u{1F4F4}",
      "money_mouth_face": "\u{1F911}",
      "money_with_wings": "\u{1F4B8}",
      "moneybag": "\u{1F4B0}",
      "monkey": "\u{1F412}",
      "monkey_face": "\u{1F435}",
      "monorail": "\u{1F69D}",
      "moon": "\u{1F314}",
      "mortar_board": "\u{1F393}",
      "mosque": "\u{1F54C}",
      "motor_boat": "\u{1F6E5}",
      "motor_scooter": "\u{1F6F5}",
      "motorcycle": "\u{1F3CD}",
      "motorway": "\u{1F6E3}",
      "mount_fuji": "\u{1F5FB}",
      "mountain": "\u26F0",
      "mountain_biking_man": "\u{1F6B5}",
      "mountain_biking_woman": "\u{1F6B5}&zwj;\u2640\uFE0F",
      "mountain_cableway": "\u{1F6A0}",
      "mountain_railway": "\u{1F69E}",
      "mountain_snow": "\u{1F3D4}",
      "mouse": "\u{1F42D}",
      "mouse2": "\u{1F401}",
      "movie_camera": "\u{1F3A5}",
      "moyai": "\u{1F5FF}",
      "mrs_claus": "\u{1F936}",
      "muscle": "\u{1F4AA}",
      "mushroom": "\u{1F344}",
      "musical_keyboard": "\u{1F3B9}",
      "musical_note": "\u{1F3B5}",
      "musical_score": "\u{1F3BC}",
      "mute": "\u{1F507}",
      "nail_care": "\u{1F485}",
      "name_badge": "\u{1F4DB}",
      "national_park": "\u{1F3DE}",
      "nauseated_face": "\u{1F922}",
      "necktie": "\u{1F454}",
      "negative_squared_cross_mark": "\u274E",
      "nerd_face": "\u{1F913}",
      "neutral_face": "\u{1F610}",
      "new": "\u{1F195}",
      "new_moon": "\u{1F311}",
      "new_moon_with_face": "\u{1F31A}",
      "newspaper": "\u{1F4F0}",
      "newspaper_roll": "\u{1F5DE}",
      "next_track_button": "\u23ED",
      "ng": "\u{1F196}",
      "no_good_man": "\u{1F645}&zwj;\u2642\uFE0F",
      "no_good_woman": "\u{1F645}",
      "night_with_stars": "\u{1F303}",
      "no_bell": "\u{1F515}",
      "no_bicycles": "\u{1F6B3}",
      "no_entry": "\u26D4\uFE0F",
      "no_entry_sign": "\u{1F6AB}",
      "no_mobile_phones": "\u{1F4F5}",
      "no_mouth": "\u{1F636}",
      "no_pedestrians": "\u{1F6B7}",
      "no_smoking": "\u{1F6AD}",
      "non-potable_water": "\u{1F6B1}",
      "nose": "\u{1F443}",
      "notebook": "\u{1F4D3}",
      "notebook_with_decorative_cover": "\u{1F4D4}",
      "notes": "\u{1F3B6}",
      "nut_and_bolt": "\u{1F529}",
      "o": "\u2B55\uFE0F",
      "o2": "\u{1F17E}\uFE0F",
      "ocean": "\u{1F30A}",
      "octopus": "\u{1F419}",
      "oden": "\u{1F362}",
      "office": "\u{1F3E2}",
      "oil_drum": "\u{1F6E2}",
      "ok": "\u{1F197}",
      "ok_hand": "\u{1F44C}",
      "ok_man": "\u{1F646}&zwj;\u2642\uFE0F",
      "ok_woman": "\u{1F646}",
      "old_key": "\u{1F5DD}",
      "older_man": "\u{1F474}",
      "older_woman": "\u{1F475}",
      "om": "\u{1F549}",
      "on": "\u{1F51B}",
      "oncoming_automobile": "\u{1F698}",
      "oncoming_bus": "\u{1F68D}",
      "oncoming_police_car": "\u{1F694}",
      "oncoming_taxi": "\u{1F696}",
      "open_file_folder": "\u{1F4C2}",
      "open_hands": "\u{1F450}",
      "open_mouth": "\u{1F62E}",
      "open_umbrella": "\u2602\uFE0F",
      "ophiuchus": "\u26CE",
      "orange_book": "\u{1F4D9}",
      "orthodox_cross": "\u2626\uFE0F",
      "outbox_tray": "\u{1F4E4}",
      "owl": "\u{1F989}",
      "ox": "\u{1F402}",
      "package": "\u{1F4E6}",
      "page_facing_up": "\u{1F4C4}",
      "page_with_curl": "\u{1F4C3}",
      "pager": "\u{1F4DF}",
      "paintbrush": "\u{1F58C}",
      "palm_tree": "\u{1F334}",
      "pancakes": "\u{1F95E}",
      "panda_face": "\u{1F43C}",
      "paperclip": "\u{1F4CE}",
      "paperclips": "\u{1F587}",
      "parasol_on_ground": "\u26F1",
      "parking": "\u{1F17F}\uFE0F",
      "part_alternation_mark": "\u303D\uFE0F",
      "partly_sunny": "\u26C5\uFE0F",
      "passenger_ship": "\u{1F6F3}",
      "passport_control": "\u{1F6C2}",
      "pause_button": "\u23F8",
      "peace_symbol": "\u262E\uFE0F",
      "peach": "\u{1F351}",
      "peanuts": "\u{1F95C}",
      "pear": "\u{1F350}",
      "pen": "\u{1F58A}",
      "pencil2": "\u270F\uFE0F",
      "penguin": "\u{1F427}",
      "pensive": "\u{1F614}",
      "performing_arts": "\u{1F3AD}",
      "persevere": "\u{1F623}",
      "person_fencing": "\u{1F93A}",
      "pouting_woman": "\u{1F64E}",
      "phone": "\u260E\uFE0F",
      "pick": "\u26CF",
      "pig": "\u{1F437}",
      "pig2": "\u{1F416}",
      "pig_nose": "\u{1F43D}",
      "pill": "\u{1F48A}",
      "pineapple": "\u{1F34D}",
      "ping_pong": "\u{1F3D3}",
      "pisces": "\u2653\uFE0F",
      "pizza": "\u{1F355}",
      "place_of_worship": "\u{1F6D0}",
      "plate_with_cutlery": "\u{1F37D}",
      "play_or_pause_button": "\u23EF",
      "point_down": "\u{1F447}",
      "point_left": "\u{1F448}",
      "point_right": "\u{1F449}",
      "point_up": "\u261D\uFE0F",
      "point_up_2": "\u{1F446}",
      "police_car": "\u{1F693}",
      "policewoman": "\u{1F46E}&zwj;\u2640\uFE0F",
      "poodle": "\u{1F429}",
      "popcorn": "\u{1F37F}",
      "post_office": "\u{1F3E3}",
      "postal_horn": "\u{1F4EF}",
      "postbox": "\u{1F4EE}",
      "potable_water": "\u{1F6B0}",
      "potato": "\u{1F954}",
      "pouch": "\u{1F45D}",
      "poultry_leg": "\u{1F357}",
      "pound": "\u{1F4B7}",
      "rage": "\u{1F621}",
      "pouting_cat": "\u{1F63E}",
      "pouting_man": "\u{1F64E}&zwj;\u2642\uFE0F",
      "pray": "\u{1F64F}",
      "prayer_beads": "\u{1F4FF}",
      "pregnant_woman": "\u{1F930}",
      "previous_track_button": "\u23EE",
      "prince": "\u{1F934}",
      "princess": "\u{1F478}",
      "printer": "\u{1F5A8}",
      "purple_heart": "\u{1F49C}",
      "purse": "\u{1F45B}",
      "pushpin": "\u{1F4CC}",
      "put_litter_in_its_place": "\u{1F6AE}",
      "question": "\u2753",
      "rabbit": "\u{1F430}",
      "rabbit2": "\u{1F407}",
      "racehorse": "\u{1F40E}",
      "racing_car": "\u{1F3CE}",
      "radio": "\u{1F4FB}",
      "radio_button": "\u{1F518}",
      "radioactive": "\u2622\uFE0F",
      "railway_car": "\u{1F683}",
      "railway_track": "\u{1F6E4}",
      "rainbow": "\u{1F308}",
      "rainbow_flag": "\u{1F3F3}\uFE0F&zwj;\u{1F308}",
      "raised_back_of_hand": "\u{1F91A}",
      "raised_hand_with_fingers_splayed": "\u{1F590}",
      "raised_hands": "\u{1F64C}",
      "raising_hand_woman": "\u{1F64B}",
      "raising_hand_man": "\u{1F64B}&zwj;\u2642\uFE0F",
      "ram": "\u{1F40F}",
      "ramen": "\u{1F35C}",
      "rat": "\u{1F400}",
      "record_button": "\u23FA",
      "recycle": "\u267B\uFE0F",
      "red_circle": "\u{1F534}",
      "registered": "\xAE\uFE0F",
      "relaxed": "\u263A\uFE0F",
      "relieved": "\u{1F60C}",
      "reminder_ribbon": "\u{1F397}",
      "repeat": "\u{1F501}",
      "repeat_one": "\u{1F502}",
      "rescue_worker_helmet": "\u26D1",
      "restroom": "\u{1F6BB}",
      "revolving_hearts": "\u{1F49E}",
      "rewind": "\u23EA",
      "rhinoceros": "\u{1F98F}",
      "ribbon": "\u{1F380}",
      "rice": "\u{1F35A}",
      "rice_ball": "\u{1F359}",
      "rice_cracker": "\u{1F358}",
      "rice_scene": "\u{1F391}",
      "right_anger_bubble": "\u{1F5EF}",
      "ring": "\u{1F48D}",
      "robot": "\u{1F916}",
      "rocket": "\u{1F680}",
      "rofl": "\u{1F923}",
      "roll_eyes": "\u{1F644}",
      "roller_coaster": "\u{1F3A2}",
      "rooster": "\u{1F413}",
      "rose": "\u{1F339}",
      "rosette": "\u{1F3F5}",
      "rotating_light": "\u{1F6A8}",
      "round_pushpin": "\u{1F4CD}",
      "rowing_man": "\u{1F6A3}",
      "rowing_woman": "\u{1F6A3}&zwj;\u2640\uFE0F",
      "rugby_football": "\u{1F3C9}",
      "running_man": "\u{1F3C3}",
      "running_shirt_with_sash": "\u{1F3BD}",
      "running_woman": "\u{1F3C3}&zwj;\u2640\uFE0F",
      "sa": "\u{1F202}\uFE0F",
      "sagittarius": "\u2650\uFE0F",
      "sake": "\u{1F376}",
      "sandal": "\u{1F461}",
      "santa": "\u{1F385}",
      "satellite": "\u{1F4E1}",
      "saxophone": "\u{1F3B7}",
      "school": "\u{1F3EB}",
      "school_satchel": "\u{1F392}",
      "scissors": "\u2702\uFE0F",
      "scorpion": "\u{1F982}",
      "scorpius": "\u264F\uFE0F",
      "scream": "\u{1F631}",
      "scream_cat": "\u{1F640}",
      "scroll": "\u{1F4DC}",
      "seat": "\u{1F4BA}",
      "secret": "\u3299\uFE0F",
      "see_no_evil": "\u{1F648}",
      "seedling": "\u{1F331}",
      "selfie": "\u{1F933}",
      "shallow_pan_of_food": "\u{1F958}",
      "shamrock": "\u2618\uFE0F",
      "shark": "\u{1F988}",
      "shaved_ice": "\u{1F367}",
      "sheep": "\u{1F411}",
      "shell": "\u{1F41A}",
      "shield": "\u{1F6E1}",
      "shinto_shrine": "\u26E9",
      "ship": "\u{1F6A2}",
      "shirt": "\u{1F455}",
      "shopping": "\u{1F6CD}",
      "shopping_cart": "\u{1F6D2}",
      "shower": "\u{1F6BF}",
      "shrimp": "\u{1F990}",
      "signal_strength": "\u{1F4F6}",
      "six_pointed_star": "\u{1F52F}",
      "ski": "\u{1F3BF}",
      "skier": "\u26F7",
      "skull": "\u{1F480}",
      "skull_and_crossbones": "\u2620\uFE0F",
      "sleeping": "\u{1F634}",
      "sleeping_bed": "\u{1F6CC}",
      "sleepy": "\u{1F62A}",
      "slightly_frowning_face": "\u{1F641}",
      "slightly_smiling_face": "\u{1F642}",
      "slot_machine": "\u{1F3B0}",
      "small_airplane": "\u{1F6E9}",
      "small_blue_diamond": "\u{1F539}",
      "small_orange_diamond": "\u{1F538}",
      "small_red_triangle": "\u{1F53A}",
      "small_red_triangle_down": "\u{1F53B}",
      "smile": "\u{1F604}",
      "smile_cat": "\u{1F638}",
      "smiley": "\u{1F603}",
      "smiley_cat": "\u{1F63A}",
      "smiling_imp": "\u{1F608}",
      "smirk": "\u{1F60F}",
      "smirk_cat": "\u{1F63C}",
      "smoking": "\u{1F6AC}",
      "snail": "\u{1F40C}",
      "snake": "\u{1F40D}",
      "sneezing_face": "\u{1F927}",
      "snowboarder": "\u{1F3C2}",
      "snowflake": "\u2744\uFE0F",
      "snowman": "\u26C4\uFE0F",
      "snowman_with_snow": "\u2603\uFE0F",
      "sob": "\u{1F62D}",
      "soccer": "\u26BD\uFE0F",
      "soon": "\u{1F51C}",
      "sos": "\u{1F198}",
      "sound": "\u{1F509}",
      "space_invader": "\u{1F47E}",
      "spades": "\u2660\uFE0F",
      "spaghetti": "\u{1F35D}",
      "sparkle": "\u2747\uFE0F",
      "sparkler": "\u{1F387}",
      "sparkles": "\u2728",
      "sparkling_heart": "\u{1F496}",
      "speak_no_evil": "\u{1F64A}",
      "speaker": "\u{1F508}",
      "speaking_head": "\u{1F5E3}",
      "speech_balloon": "\u{1F4AC}",
      "speedboat": "\u{1F6A4}",
      "spider": "\u{1F577}",
      "spider_web": "\u{1F578}",
      "spiral_calendar": "\u{1F5D3}",
      "spiral_notepad": "\u{1F5D2}",
      "spoon": "\u{1F944}",
      "squid": "\u{1F991}",
      "stadium": "\u{1F3DF}",
      "star": "\u2B50\uFE0F",
      "star2": "\u{1F31F}",
      "star_and_crescent": "\u262A\uFE0F",
      "star_of_david": "\u2721\uFE0F",
      "stars": "\u{1F320}",
      "station": "\u{1F689}",
      "statue_of_liberty": "\u{1F5FD}",
      "steam_locomotive": "\u{1F682}",
      "stew": "\u{1F372}",
      "stop_button": "\u23F9",
      "stop_sign": "\u{1F6D1}",
      "stopwatch": "\u23F1",
      "straight_ruler": "\u{1F4CF}",
      "strawberry": "\u{1F353}",
      "stuck_out_tongue": "\u{1F61B}",
      "stuck_out_tongue_closed_eyes": "\u{1F61D}",
      "stuck_out_tongue_winking_eye": "\u{1F61C}",
      "studio_microphone": "\u{1F399}",
      "stuffed_flatbread": "\u{1F959}",
      "sun_behind_large_cloud": "\u{1F325}",
      "sun_behind_rain_cloud": "\u{1F326}",
      "sun_behind_small_cloud": "\u{1F324}",
      "sun_with_face": "\u{1F31E}",
      "sunflower": "\u{1F33B}",
      "sunglasses": "\u{1F60E}",
      "sunny": "\u2600\uFE0F",
      "sunrise": "\u{1F305}",
      "sunrise_over_mountains": "\u{1F304}",
      "surfing_man": "\u{1F3C4}",
      "surfing_woman": "\u{1F3C4}&zwj;\u2640\uFE0F",
      "sushi": "\u{1F363}",
      "suspension_railway": "\u{1F69F}",
      "sweat": "\u{1F613}",
      "sweat_drops": "\u{1F4A6}",
      "sweat_smile": "\u{1F605}",
      "sweet_potato": "\u{1F360}",
      "swimming_man": "\u{1F3CA}",
      "swimming_woman": "\u{1F3CA}&zwj;\u2640\uFE0F",
      "symbols": "\u{1F523}",
      "synagogue": "\u{1F54D}",
      "syringe": "\u{1F489}",
      "taco": "\u{1F32E}",
      "tada": "\u{1F389}",
      "tanabata_tree": "\u{1F38B}",
      "taurus": "\u2649\uFE0F",
      "taxi": "\u{1F695}",
      "tea": "\u{1F375}",
      "telephone_receiver": "\u{1F4DE}",
      "telescope": "\u{1F52D}",
      "tennis": "\u{1F3BE}",
      "tent": "\u26FA\uFE0F",
      "thermometer": "\u{1F321}",
      "thinking": "\u{1F914}",
      "thought_balloon": "\u{1F4AD}",
      "ticket": "\u{1F3AB}",
      "tickets": "\u{1F39F}",
      "tiger": "\u{1F42F}",
      "tiger2": "\u{1F405}",
      "timer_clock": "\u23F2",
      "tipping_hand_man": "\u{1F481}&zwj;\u2642\uFE0F",
      "tired_face": "\u{1F62B}",
      "tm": "\u2122\uFE0F",
      "toilet": "\u{1F6BD}",
      "tokyo_tower": "\u{1F5FC}",
      "tomato": "\u{1F345}",
      "tongue": "\u{1F445}",
      "top": "\u{1F51D}",
      "tophat": "\u{1F3A9}",
      "tornado": "\u{1F32A}",
      "trackball": "\u{1F5B2}",
      "tractor": "\u{1F69C}",
      "traffic_light": "\u{1F6A5}",
      "train": "\u{1F68B}",
      "train2": "\u{1F686}",
      "tram": "\u{1F68A}",
      "triangular_flag_on_post": "\u{1F6A9}",
      "triangular_ruler": "\u{1F4D0}",
      "trident": "\u{1F531}",
      "triumph": "\u{1F624}",
      "trolleybus": "\u{1F68E}",
      "trophy": "\u{1F3C6}",
      "tropical_drink": "\u{1F379}",
      "tropical_fish": "\u{1F420}",
      "truck": "\u{1F69A}",
      "trumpet": "\u{1F3BA}",
      "tulip": "\u{1F337}",
      "tumbler_glass": "\u{1F943}",
      "turkey": "\u{1F983}",
      "turtle": "\u{1F422}",
      "tv": "\u{1F4FA}",
      "twisted_rightwards_arrows": "\u{1F500}",
      "two_hearts": "\u{1F495}",
      "two_men_holding_hands": "\u{1F46C}",
      "two_women_holding_hands": "\u{1F46D}",
      "u5272": "\u{1F239}",
      "u5408": "\u{1F234}",
      "u55b6": "\u{1F23A}",
      "u6307": "\u{1F22F}\uFE0F",
      "u6708": "\u{1F237}\uFE0F",
      "u6709": "\u{1F236}",
      "u6e80": "\u{1F235}",
      "u7121": "\u{1F21A}\uFE0F",
      "u7533": "\u{1F238}",
      "u7981": "\u{1F232}",
      "u7a7a": "\u{1F233}",
      "umbrella": "\u2614\uFE0F",
      "unamused": "\u{1F612}",
      "underage": "\u{1F51E}",
      "unicorn": "\u{1F984}",
      "unlock": "\u{1F513}",
      "up": "\u{1F199}",
      "upside_down_face": "\u{1F643}",
      "v": "\u270C\uFE0F",
      "vertical_traffic_light": "\u{1F6A6}",
      "vhs": "\u{1F4FC}",
      "vibration_mode": "\u{1F4F3}",
      "video_camera": "\u{1F4F9}",
      "video_game": "\u{1F3AE}",
      "violin": "\u{1F3BB}",
      "virgo": "\u264D\uFE0F",
      "volcano": "\u{1F30B}",
      "volleyball": "\u{1F3D0}",
      "vs": "\u{1F19A}",
      "vulcan_salute": "\u{1F596}",
      "walking_man": "\u{1F6B6}",
      "walking_woman": "\u{1F6B6}&zwj;\u2640\uFE0F",
      "waning_crescent_moon": "\u{1F318}",
      "waning_gibbous_moon": "\u{1F316}",
      "warning": "\u26A0\uFE0F",
      "wastebasket": "\u{1F5D1}",
      "watch": "\u231A\uFE0F",
      "water_buffalo": "\u{1F403}",
      "watermelon": "\u{1F349}",
      "wave": "\u{1F44B}",
      "wavy_dash": "\u3030\uFE0F",
      "waxing_crescent_moon": "\u{1F312}",
      "wc": "\u{1F6BE}",
      "weary": "\u{1F629}",
      "wedding": "\u{1F492}",
      "weight_lifting_man": "\u{1F3CB}\uFE0F",
      "weight_lifting_woman": "\u{1F3CB}\uFE0F&zwj;\u2640\uFE0F",
      "whale": "\u{1F433}",
      "whale2": "\u{1F40B}",
      "wheel_of_dharma": "\u2638\uFE0F",
      "wheelchair": "\u267F\uFE0F",
      "white_check_mark": "\u2705",
      "white_circle": "\u26AA\uFE0F",
      "white_flag": "\u{1F3F3}\uFE0F",
      "white_flower": "\u{1F4AE}",
      "white_large_square": "\u2B1C\uFE0F",
      "white_medium_small_square": "\u25FD\uFE0F",
      "white_medium_square": "\u25FB\uFE0F",
      "white_small_square": "\u25AB\uFE0F",
      "white_square_button": "\u{1F533}",
      "wilted_flower": "\u{1F940}",
      "wind_chime": "\u{1F390}",
      "wind_face": "\u{1F32C}",
      "wine_glass": "\u{1F377}",
      "wink": "\u{1F609}",
      "wolf": "\u{1F43A}",
      "woman": "\u{1F469}",
      "woman_artist": "\u{1F469}&zwj;\u{1F3A8}",
      "woman_astronaut": "\u{1F469}&zwj;\u{1F680}",
      "woman_cartwheeling": "\u{1F938}&zwj;\u2640\uFE0F",
      "woman_cook": "\u{1F469}&zwj;\u{1F373}",
      "woman_facepalming": "\u{1F926}&zwj;\u2640\uFE0F",
      "woman_factory_worker": "\u{1F469}&zwj;\u{1F3ED}",
      "woman_farmer": "\u{1F469}&zwj;\u{1F33E}",
      "woman_firefighter": "\u{1F469}&zwj;\u{1F692}",
      "woman_health_worker": "\u{1F469}&zwj;\u2695\uFE0F",
      "woman_judge": "\u{1F469}&zwj;\u2696\uFE0F",
      "woman_juggling": "\u{1F939}&zwj;\u2640\uFE0F",
      "woman_mechanic": "\u{1F469}&zwj;\u{1F527}",
      "woman_office_worker": "\u{1F469}&zwj;\u{1F4BC}",
      "woman_pilot": "\u{1F469}&zwj;\u2708\uFE0F",
      "woman_playing_handball": "\u{1F93E}&zwj;\u2640\uFE0F",
      "woman_playing_water_polo": "\u{1F93D}&zwj;\u2640\uFE0F",
      "woman_scientist": "\u{1F469}&zwj;\u{1F52C}",
      "woman_shrugging": "\u{1F937}&zwj;\u2640\uFE0F",
      "woman_singer": "\u{1F469}&zwj;\u{1F3A4}",
      "woman_student": "\u{1F469}&zwj;\u{1F393}",
      "woman_teacher": "\u{1F469}&zwj;\u{1F3EB}",
      "woman_technologist": "\u{1F469}&zwj;\u{1F4BB}",
      "woman_with_turban": "\u{1F473}&zwj;\u2640\uFE0F",
      "womans_clothes": "\u{1F45A}",
      "womans_hat": "\u{1F452}",
      "women_wrestling": "\u{1F93C}&zwj;\u2640\uFE0F",
      "womens": "\u{1F6BA}",
      "world_map": "\u{1F5FA}",
      "worried": "\u{1F61F}",
      "wrench": "\u{1F527}",
      "writing_hand": "\u270D\uFE0F",
      "x": "\u274C",
      "yellow_heart": "\u{1F49B}",
      "yen": "\u{1F4B4}",
      "yin_yang": "\u262F\uFE0F",
      "yum": "\u{1F60B}",
      "zap": "\u26A1\uFE0F",
      "zipper_mouth_face": "\u{1F910}",
      "zzz": "\u{1F4A4}",
      "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
      "showdown": `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
    };
    showdown2.Converter = function(converterOptions) {
      var options = {}, langExtensions = [], outputModifiers = [], listeners = {}, setConvFlavor = setFlavor, metadata = {
        parsed: {},
        raw: "",
        format: ""
      };
      _constructor();
      function _constructor() {
        converterOptions = converterOptions || {};
        for (var gOpt in globalOptions) {
          if (globalOptions.hasOwnProperty(gOpt)) {
            options[gOpt] = globalOptions[gOpt];
          }
        }
        if (typeof converterOptions === "object") {
          for (var opt in converterOptions) {
            if (converterOptions.hasOwnProperty(opt)) {
              options[opt] = converterOptions[opt];
            }
          }
        } else {
          throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
        }
        if (options.extensions) {
          showdown2.helper.forEach(options.extensions, _parseExtension);
        }
      }
      function _parseExtension(ext, name) {
        name = name || null;
        if (showdown2.helper.isString(ext)) {
          ext = showdown2.helper.stdExtName(ext);
          name = ext;
          if (showdown2.extensions[ext]) {
            console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
            legacyExtensionLoading(showdown2.extensions[ext], ext);
            return;
          } else if (!showdown2.helper.isUndefined(extensions[ext])) {
            ext = extensions[ext];
          } else {
            throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
          }
        }
        if (typeof ext === "function") {
          ext = ext();
        }
        if (!showdown2.helper.isArray(ext)) {
          ext = [ext];
        }
        var validExt = validate(ext, name);
        if (!validExt.valid) {
          throw Error(validExt.error);
        }
        for (var i = 0; i < ext.length; ++i) {
          switch (ext[i].type) {
            case "lang":
              langExtensions.push(ext[i]);
              break;
            case "output":
              outputModifiers.push(ext[i]);
              break;
          }
          if (ext[i].hasOwnProperty("listeners")) {
            for (var ln in ext[i].listeners) {
              if (ext[i].listeners.hasOwnProperty(ln)) {
                listen(ln, ext[i].listeners[ln]);
              }
            }
          }
        }
      }
      function legacyExtensionLoading(ext, name) {
        if (typeof ext === "function") {
          ext = ext(new showdown2.Converter());
        }
        if (!showdown2.helper.isArray(ext)) {
          ext = [ext];
        }
        var valid = validate(ext, name);
        if (!valid.valid) {
          throw Error(valid.error);
        }
        for (var i = 0; i < ext.length; ++i) {
          switch (ext[i].type) {
            case "lang":
              langExtensions.push(ext[i]);
              break;
            case "output":
              outputModifiers.push(ext[i]);
              break;
            default:
              throw Error("Extension loader error: Type unrecognized!!!");
          }
        }
      }
      function listen(name, callback) {
        if (!showdown2.helper.isString(name)) {
          throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
        }
        if (typeof callback !== "function") {
          throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
        }
        if (!listeners.hasOwnProperty(name)) {
          listeners[name] = [];
        }
        listeners[name].push(callback);
      }
      function rTrimInputText(text) {
        var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
        return text.replace(rgx, "");
      }
      this._dispatch = function dispatch(evtName, text, options2, globals) {
        if (listeners.hasOwnProperty(evtName)) {
          for (var ei = 0; ei < listeners[evtName].length; ++ei) {
            var nText = listeners[evtName][ei](evtName, text, this, options2, globals);
            if (nText && typeof nText !== "undefined") {
              text = nText;
            }
          }
        }
        return text;
      };
      this.listen = function(name, callback) {
        listen(name, callback);
        return this;
      };
      this.makeHtml = function(text) {
        if (!text) {
          return text;
        }
        var globals = {
          gHtmlBlocks: [],
          gHtmlMdBlocks: [],
          gHtmlSpans: [],
          gUrls: {},
          gTitles: {},
          gDimensions: {},
          gListLevel: 0,
          hashLinkCounts: {},
          langExtensions,
          outputModifiers,
          converter: this,
          ghCodeBlocks: [],
          metadata: {
            parsed: {},
            raw: "",
            format: ""
          }
        };
        text = text.replace(/¨/g, "\xA8T");
        text = text.replace(/\$/g, "\xA8D");
        text = text.replace(/\r\n/g, "\n");
        text = text.replace(/\r/g, "\n");
        text = text.replace(/\u00A0/g, "&nbsp;");
        if (options.smartIndentationFix) {
          text = rTrimInputText(text);
        }
        text = "\n\n" + text + "\n\n";
        text = showdown2.subParser("detab")(text, options, globals);
        text = text.replace(/^[ \t]+$/mg, "");
        showdown2.helper.forEach(langExtensions, function(ext) {
          text = showdown2.subParser("runExtension")(ext, text, options, globals);
        });
        text = showdown2.subParser("metadata")(text, options, globals);
        text = showdown2.subParser("hashPreCodeTags")(text, options, globals);
        text = showdown2.subParser("githubCodeBlocks")(text, options, globals);
        text = showdown2.subParser("hashHTMLBlocks")(text, options, globals);
        text = showdown2.subParser("hashCodeTags")(text, options, globals);
        text = showdown2.subParser("stripLinkDefinitions")(text, options, globals);
        text = showdown2.subParser("blockGamut")(text, options, globals);
        text = showdown2.subParser("unhashHTMLSpans")(text, options, globals);
        text = showdown2.subParser("unescapeSpecialChars")(text, options, globals);
        text = text.replace(/¨D/g, "$$");
        text = text.replace(/¨T/g, "\xA8");
        text = showdown2.subParser("completeHTMLDocument")(text, options, globals);
        showdown2.helper.forEach(outputModifiers, function(ext) {
          text = showdown2.subParser("runExtension")(ext, text, options, globals);
        });
        metadata = globals.metadata;
        return text;
      };
      this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
        src = src.replace(/\r\n/g, "\n");
        src = src.replace(/\r/g, "\n");
        src = src.replace(/>[ \t]+</, ">\xA8NBSP;<");
        if (!HTMLParser) {
          if (window && window.document) {
            HTMLParser = window.document;
          } else {
            throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
          }
        }
        var doc = HTMLParser.createElement("div");
        doc.innerHTML = src;
        var globals = {
          preList: substitutePreCodeTags(doc)
        };
        clean(doc);
        var nodes = doc.childNodes, mdDoc = "";
        for (var i = 0; i < nodes.length; i++) {
          mdDoc += showdown2.subParser("makeMarkdown.node")(nodes[i], globals);
        }
        function clean(node) {
          for (var n = 0; n < node.childNodes.length; ++n) {
            var child = node.childNodes[n];
            if (child.nodeType === 3) {
              if (!/\S/.test(child.nodeValue)) {
                node.removeChild(child);
                --n;
              } else {
                child.nodeValue = child.nodeValue.split("\n").join(" ");
                child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
              }
            } else if (child.nodeType === 1) {
              clean(child);
            }
          }
        }
        function substitutePreCodeTags(doc2) {
          var pres = doc2.querySelectorAll("pre"), presPH = [];
          for (var i2 = 0; i2 < pres.length; ++i2) {
            if (pres[i2].childElementCount === 1 && pres[i2].firstChild.tagName.toLowerCase() === "code") {
              var content = pres[i2].firstChild.innerHTML.trim(), language = pres[i2].firstChild.getAttribute("data-language") || "";
              if (language === "") {
                var classes = pres[i2].firstChild.className.split(" ");
                for (var c = 0; c < classes.length; ++c) {
                  var matches = classes[c].match(/^language-(.+)$/);
                  if (matches !== null) {
                    language = matches[1];
                    break;
                  }
                }
              }
              content = showdown2.helper.unescapeHTMLEntities(content);
              presPH.push(content);
              pres[i2].outerHTML = '<precode language="' + language + '" precodenum="' + i2.toString() + '"></precode>';
            } else {
              presPH.push(pres[i2].innerHTML);
              pres[i2].innerHTML = "";
              pres[i2].setAttribute("prenum", i2.toString());
            }
          }
          return presPH;
        }
        return mdDoc;
      };
      this.setOption = function(key, value) {
        options[key] = value;
      };
      this.getOption = function(key) {
        return options[key];
      };
      this.getOptions = function() {
        return options;
      };
      this.addExtension = function(extension, name) {
        name = name || null;
        _parseExtension(extension, name);
      };
      this.useExtension = function(extensionName) {
        _parseExtension(extensionName);
      };
      this.setFlavor = function(name) {
        if (!flavor.hasOwnProperty(name)) {
          throw Error(name + " flavor was not found");
        }
        var preset = flavor[name];
        setConvFlavor = name;
        for (var option in preset) {
          if (preset.hasOwnProperty(option)) {
            options[option] = preset[option];
          }
        }
      };
      this.getFlavor = function() {
        return setConvFlavor;
      };
      this.removeExtension = function(extension) {
        if (!showdown2.helper.isArray(extension)) {
          extension = [extension];
        }
        for (var a = 0; a < extension.length; ++a) {
          var ext = extension[a];
          for (var i = 0; i < langExtensions.length; ++i) {
            if (langExtensions[i] === ext) {
              langExtensions[i].splice(i, 1);
            }
          }
          for (var ii = 0; ii < outputModifiers.length; ++i) {
            if (outputModifiers[ii] === ext) {
              outputModifiers[ii].splice(i, 1);
            }
          }
        }
      };
      this.getAllExtensions = function() {
        return {
          language: langExtensions,
          output: outputModifiers
        };
      };
      this.getMetadata = function(raw) {
        if (raw) {
          return metadata.raw;
        } else {
          return metadata.parsed;
        }
      };
      this.getMetadataFormat = function() {
        return metadata.format;
      };
      this._setMetadataPair = function(key, value) {
        metadata.parsed[key] = value;
      };
      this._setMetadataFormat = function(format) {
        metadata.format = format;
      };
      this._setMetadataRaw = function(raw) {
        metadata.raw = raw;
      };
    };
    showdown2.subParser("anchors", function(text, options, globals) {
      text = globals.converter._dispatch("anchors.before", text, options, globals);
      var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
        if (showdown2.helper.isUndefined(title)) {
          title = "";
        }
        linkId = linkId.toLowerCase();
        if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
          url = "";
        } else if (!url) {
          if (!linkId) {
            linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
          }
          url = "#" + linkId;
          if (!showdown2.helper.isUndefined(globals.gUrls[linkId])) {
            url = globals.gUrls[linkId];
            if (!showdown2.helper.isUndefined(globals.gTitles[linkId])) {
              title = globals.gTitles[linkId];
            }
          } else {
            return wholeMatch;
          }
        }
        url = url.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
        var result = '<a href="' + url + '"';
        if (title !== "" && title !== null) {
          title = title.replace(/"/g, "&quot;");
          title = title.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          result += ' title="' + title + '"';
        }
        if (options.openLinksInNewWindow && !/^#/.test(url)) {
          result += ' rel="noopener noreferrer" target="\xA8E95Eblank"';
        }
        result += ">" + linkText + "</a>";
        return result;
      };
      text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
      text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
      text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
      text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
      if (options.ghMentions) {
        text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
          if (escape === "\\") {
            return st + mentions;
          }
          if (!showdown2.helper.isString(options.ghMentionsLink)) {
            throw new Error("ghMentionsLink option must be a string");
          }
          var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
          if (options.openLinksInNewWindow) {
            target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
          }
          return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
        });
      }
      text = globals.converter._dispatch("anchors.after", text, options, globals);
      return text;
    });
    var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = function(options) {
      return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
        link = link.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
        var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
        if (/^www\./i.test(link)) {
          link = link.replace(/^www\./i, "http://www.");
        }
        if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
          append = trailingPunctuation;
        }
        if (options.openLinksInNewWindow) {
          target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
        }
        return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
      };
    }, replaceMail = function(options, globals) {
      return function(wholeMatch, b, mail) {
        var href = "mailto:";
        b = b || "";
        mail = showdown2.subParser("unescapeSpecialChars")(mail, options, globals);
        if (options.encodeEmails) {
          href = showdown2.helper.encodeEmailAddress(href + mail);
          mail = showdown2.helper.encodeEmailAddress(mail);
        } else {
          href = href + mail;
        }
        return b + '<a href="' + href + '">' + mail + "</a>";
      };
    };
    showdown2.subParser("autoLinks", function(text, options, globals) {
      text = globals.converter._dispatch("autoLinks.before", text, options, globals);
      text = text.replace(delimUrlRegex, replaceLink(options));
      text = text.replace(delimMailRegex, replaceMail(options, globals));
      text = globals.converter._dispatch("autoLinks.after", text, options, globals);
      return text;
    });
    showdown2.subParser("simplifiedAutoLinks", function(text, options, globals) {
      if (!options.simplifiedAutoLink) {
        return text;
      }
      text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
      if (options.excludeTrailingPunctuationFromURLs) {
        text = text.replace(simpleURLRegex2, replaceLink(options));
      } else {
        text = text.replace(simpleURLRegex, replaceLink(options));
      }
      text = text.replace(simpleMailRegex, replaceMail(options, globals));
      text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
      return text;
    });
    showdown2.subParser("blockGamut", function(text, options, globals) {
      text = globals.converter._dispatch("blockGamut.before", text, options, globals);
      text = showdown2.subParser("blockQuotes")(text, options, globals);
      text = showdown2.subParser("headers")(text, options, globals);
      text = showdown2.subParser("horizontalRule")(text, options, globals);
      text = showdown2.subParser("lists")(text, options, globals);
      text = showdown2.subParser("codeBlocks")(text, options, globals);
      text = showdown2.subParser("tables")(text, options, globals);
      text = showdown2.subParser("hashHTMLBlocks")(text, options, globals);
      text = showdown2.subParser("paragraphs")(text, options, globals);
      text = globals.converter._dispatch("blockGamut.after", text, options, globals);
      return text;
    });
    showdown2.subParser("blockQuotes", function(text, options, globals) {
      text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
      text = text + "\n\n";
      var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
      if (options.splitAdjacentBlockquotes) {
        rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
      }
      text = text.replace(rgx, function(bq) {
        bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
        bq = bq.replace(/¨0/g, "");
        bq = bq.replace(/^[ \t]+$/gm, "");
        bq = showdown2.subParser("githubCodeBlocks")(bq, options, globals);
        bq = showdown2.subParser("blockGamut")(bq, options, globals);
        bq = bq.replace(/(^|\n)/g, "$1  ");
        bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
          var pre = m1;
          pre = pre.replace(/^  /mg, "\xA80");
          pre = pre.replace(/¨0/g, "");
          return pre;
        });
        return showdown2.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
      });
      text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
      return text;
    });
    showdown2.subParser("codeBlocks", function(text, options, globals) {
      text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
      text += "\xA80";
      var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
      text = text.replace(pattern, function(wholeMatch, m1, m2) {
        var codeblock = m1, nextChar = m2, end = "\n";
        codeblock = showdown2.subParser("outdent")(codeblock, options, globals);
        codeblock = showdown2.subParser("encodeCode")(codeblock, options, globals);
        codeblock = showdown2.subParser("detab")(codeblock, options, globals);
        codeblock = codeblock.replace(/^\n+/g, "");
        codeblock = codeblock.replace(/\n+$/g, "");
        if (options.omitExtraWLInCodeBlocks) {
          end = "";
        }
        codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
        return showdown2.subParser("hashBlock")(codeblock, options, globals) + nextChar;
      });
      text = text.replace(/¨0/, "");
      text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
      return text;
    });
    showdown2.subParser("codeSpans", function(text, options, globals) {
      text = globals.converter._dispatch("codeSpans.before", text, options, globals);
      if (typeof text === "undefined") {
        text = "";
      }
      text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3) {
        var c = m3;
        c = c.replace(/^([ \t]*)/g, "");
        c = c.replace(/[ \t]*$/g, "");
        c = showdown2.subParser("encodeCode")(c, options, globals);
        c = m1 + "<code>" + c + "</code>";
        c = showdown2.subParser("hashHTMLSpans")(c, options, globals);
        return c;
      });
      text = globals.converter._dispatch("codeSpans.after", text, options, globals);
      return text;
    });
    showdown2.subParser("completeHTMLDocument", function(text, options, globals) {
      if (!options.completeHTMLDocument) {
        return text;
      }
      text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
      var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
      if (typeof globals.metadata.parsed.doctype !== "undefined") {
        doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
        doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
        if (doctype === "html" || doctype === "html5") {
          charset = '<meta charset="utf-8">';
        }
      }
      for (var meta in globals.metadata.parsed) {
        if (globals.metadata.parsed.hasOwnProperty(meta)) {
          switch (meta.toLowerCase()) {
            case "doctype":
              break;
            case "title":
              title = "<title>" + globals.metadata.parsed.title + "</title>\n";
              break;
            case "charset":
              if (doctype === "html" || doctype === "html5") {
                charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
              } else {
                charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
              }
              break;
            case "language":
            case "lang":
              lang = ' lang="' + globals.metadata.parsed[meta] + '"';
              metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
              break;
            default:
              metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
          }
        }
      }
      text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
      text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
      return text;
    });
    showdown2.subParser("detab", function(text, options, globals) {
      text = globals.converter._dispatch("detab.before", text, options, globals);
      text = text.replace(/\t(?=\t)/g, "    ");
      text = text.replace(/\t/g, "\xA8A\xA8B");
      text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
        var leadingText = m1, numSpaces = 4 - leadingText.length % 4;
        for (var i = 0; i < numSpaces; i++) {
          leadingText += " ";
        }
        return leadingText;
      });
      text = text.replace(/¨A/g, "    ");
      text = text.replace(/¨B/g, "");
      text = globals.converter._dispatch("detab.after", text, options, globals);
      return text;
    });
    showdown2.subParser("ellipsis", function(text, options, globals) {
      text = globals.converter._dispatch("ellipsis.before", text, options, globals);
      text = text.replace(/\.\.\./g, "\u2026");
      text = globals.converter._dispatch("ellipsis.after", text, options, globals);
      return text;
    });
    showdown2.subParser("emoji", function(text, options, globals) {
      if (!options.emoji) {
        return text;
      }
      text = globals.converter._dispatch("emoji.before", text, options, globals);
      var emojiRgx = /:([\S]+?):/g;
      text = text.replace(emojiRgx, function(wm, emojiCode) {
        if (showdown2.helper.emojis.hasOwnProperty(emojiCode)) {
          return showdown2.helper.emojis[emojiCode];
        }
        return wm;
      });
      text = globals.converter._dispatch("emoji.after", text, options, globals);
      return text;
    });
    showdown2.subParser("encodeAmpsAndAngles", function(text, options, globals) {
      text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
      text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
      text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
      text = text.replace(/</g, "&lt;");
      text = text.replace(/>/g, "&gt;");
      text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
      return text;
    });
    showdown2.subParser("encodeBackslashEscapes", function(text, options, globals) {
      text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
      text = text.replace(/\\(\\)/g, showdown2.helper.escapeCharactersCallback);
      text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown2.helper.escapeCharactersCallback);
      text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
      return text;
    });
    showdown2.subParser("encodeCode", function(text, options, globals) {
      text = globals.converter._dispatch("encodeCode.before", text, options, globals);
      text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, showdown2.helper.escapeCharactersCallback);
      text = globals.converter._dispatch("encodeCode.after", text, options, globals);
      return text;
    });
    showdown2.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
      text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
      var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
      text = text.replace(tags, function(wholeMatch) {
        return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown2.helper.escapeCharactersCallback);
      });
      text = text.replace(comments, function(wholeMatch) {
        return wholeMatch.replace(/([\\`*_~=|])/g, showdown2.helper.escapeCharactersCallback);
      });
      text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
      return text;
    });
    showdown2.subParser("githubCodeBlocks", function(text, options, globals) {
      if (!options.ghCodeBlocks) {
        return text;
      }
      text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
      text += "\xA80";
      text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
        var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
        codeblock = showdown2.subParser("encodeCode")(codeblock, options, globals);
        codeblock = showdown2.subParser("detab")(codeblock, options, globals);
        codeblock = codeblock.replace(/^\n+/g, "");
        codeblock = codeblock.replace(/\n+$/g, "");
        codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
        codeblock = showdown2.subParser("hashBlock")(codeblock, options, globals);
        return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
      });
      text = text.replace(/¨0/, "");
      return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
    });
    showdown2.subParser("hashBlock", function(text, options, globals) {
      text = globals.converter._dispatch("hashBlock.before", text, options, globals);
      text = text.replace(/(^\n+|\n+$)/g, "");
      text = "\n\n\xA8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
      text = globals.converter._dispatch("hashBlock.after", text, options, globals);
      return text;
    });
    showdown2.subParser("hashCodeTags", function(text, options, globals) {
      text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
      var repFunc = function(wholeMatch, match, left, right) {
        var codeblock = left + showdown2.subParser("encodeCode")(match, options, globals) + right;
        return "\xA8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
      };
      text = showdown2.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
      text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
      return text;
    });
    showdown2.subParser("hashElement", function(text, options, globals) {
      return function(wholeMatch, m1) {
        var blockText = m1;
        blockText = blockText.replace(/\n\n/g, "\n");
        blockText = blockText.replace(/^\n/, "");
        blockText = blockText.replace(/\n+$/g, "");
        blockText = "\n\n\xA8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
        return blockText;
      };
    });
    showdown2.subParser("hashHTMLBlocks", function(text, options, globals) {
      text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
      var blockTags = [
        "pre",
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "table",
        "dl",
        "ol",
        "ul",
        "script",
        "noscript",
        "form",
        "fieldset",
        "iframe",
        "math",
        "style",
        "section",
        "header",
        "footer",
        "nav",
        "article",
        "aside",
        "address",
        "audio",
        "canvas",
        "figure",
        "hgroup",
        "output",
        "video",
        "p"
      ], repFunc = function(wholeMatch, match, left, right) {
        var txt = wholeMatch;
        if (left.search(/\bmarkdown\b/) !== -1) {
          txt = left + globals.converter.makeHtml(match) + right;
        }
        return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
      };
      if (options.backslashEscapesHTMLTags) {
        text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
          return "&lt;" + inside + "&gt;";
        });
      }
      for (var i = 0; i < blockTags.length; ++i) {
        var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
        while ((opTagPos = showdown2.helper.regexIndexOf(text, rgx1)) !== -1) {
          var subTexts = showdown2.helper.splitAtIndex(text, opTagPos), newSubText1 = showdown2.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
          if (newSubText1 === subTexts[1]) {
            break;
          }
          text = subTexts[0].concat(newSubText1);
        }
      }
      text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown2.subParser("hashElement")(text, options, globals));
      text = showdown2.helper.replaceRecursiveRegExp(text, function(txt) {
        return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
      }, "^ {0,3}<!--", "-->", "gm");
      text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown2.subParser("hashElement")(text, options, globals));
      text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
      return text;
    });
    showdown2.subParser("hashHTMLSpans", function(text, options, globals) {
      text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
      function hashHTMLSpan(html) {
        return "\xA8C" + (globals.gHtmlSpans.push(html) - 1) + "C";
      }
      text = text.replace(/<[^>]+?\/>/gi, function(wm) {
        return hashHTMLSpan(wm);
      });
      text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
        return hashHTMLSpan(wm);
      });
      text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
        return hashHTMLSpan(wm);
      });
      text = text.replace(/<[^>]+?>/gi, function(wm) {
        return hashHTMLSpan(wm);
      });
      text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
      return text;
    });
    showdown2.subParser("unhashHTMLSpans", function(text, options, globals) {
      text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
      for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
        var repText = globals.gHtmlSpans[i], limit = 0;
        while (/¨C(\d+)C/.test(repText)) {
          var num = RegExp.$1;
          repText = repText.replace("\xA8C" + num + "C", globals.gHtmlSpans[num]);
          if (limit === 10) {
            console.error("maximum nesting of 10 spans reached!!!");
            break;
          }
          ++limit;
        }
        text = text.replace("\xA8C" + i + "C", repText);
      }
      text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
      return text;
    });
    showdown2.subParser("hashPreCodeTags", function(text, options, globals) {
      text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
      var repFunc = function(wholeMatch, match, left, right) {
        var codeblock = left + showdown2.subParser("encodeCode")(match, options, globals) + right;
        return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
      };
      text = showdown2.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
      text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
      return text;
    });
    showdown2.subParser("headers", function(text, options, globals) {
      text = globals.converter._dispatch("headers.before", text, options, globals);
      var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
      text = text.replace(setextRegexH1, function(wholeMatch, m1) {
        var spanGamut = showdown2.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
        return showdown2.subParser("hashBlock")(hashBlock, options, globals);
      });
      text = text.replace(setextRegexH2, function(matchFound, m1) {
        var spanGamut = showdown2.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
        return showdown2.subParser("hashBlock")(hashBlock, options, globals);
      });
      var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
      text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
        var hText = m2;
        if (options.customizedHeaderId) {
          hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
        }
        var span = showdown2.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
        return showdown2.subParser("hashBlock")(header, options, globals);
      });
      function headerId(m) {
        var title, prefix;
        if (options.customizedHeaderId) {
          var match = m.match(/\{([^{]+?)}\s*$/);
          if (match && match[1]) {
            m = match[1];
          }
        }
        title = m;
        if (showdown2.helper.isString(options.prefixHeaderId)) {
          prefix = options.prefixHeaderId;
        } else if (options.prefixHeaderId === true) {
          prefix = "section-";
        } else {
          prefix = "";
        }
        if (!options.rawPrefixHeaderId) {
          title = prefix + title;
        }
        if (options.ghCompatibleHeaderId) {
          title = title.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
        } else if (options.rawHeaderId) {
          title = title.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "\xA8").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase();
        } else {
          title = title.replace(/[^\w]/g, "").toLowerCase();
        }
        if (options.rawPrefixHeaderId) {
          title = prefix + title;
        }
        if (globals.hashLinkCounts[title]) {
          title = title + "-" + globals.hashLinkCounts[title]++;
        } else {
          globals.hashLinkCounts[title] = 1;
        }
        return title;
      }
      text = globals.converter._dispatch("headers.after", text, options, globals);
      return text;
    });
    showdown2.subParser("horizontalRule", function(text, options, globals) {
      text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
      var key = showdown2.subParser("hashBlock")("<hr />", options, globals);
      text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
      text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
      text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
      text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
      return text;
    });
    showdown2.subParser("images", function(text, options, globals) {
      text = globals.converter._dispatch("images.before", text, options, globals);
      var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
      function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
        url = url.replace(/\s/g, "");
        return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
      }
      function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
        var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
        linkId = linkId.toLowerCase();
        if (!title) {
          title = "";
        }
        if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
          url = "";
        } else if (url === "" || url === null) {
          if (linkId === "" || linkId === null) {
            linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
          }
          url = "#" + linkId;
          if (!showdown2.helper.isUndefined(gUrls[linkId])) {
            url = gUrls[linkId];
            if (!showdown2.helper.isUndefined(gTitles[linkId])) {
              title = gTitles[linkId];
            }
            if (!showdown2.helper.isUndefined(gDims[linkId])) {
              width = gDims[linkId].width;
              height = gDims[linkId].height;
            }
          } else {
            return wholeMatch;
          }
        }
        altText = altText.replace(/"/g, "&quot;").replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
        url = url.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
        var result = '<img src="' + url + '" alt="' + altText + '"';
        if (title && showdown2.helper.isString(title)) {
          title = title.replace(/"/g, "&quot;").replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          result += ' title="' + title + '"';
        }
        if (width && height) {
          width = width === "*" ? "auto" : width;
          height = height === "*" ? "auto" : height;
          result += ' width="' + width + '"';
          result += ' height="' + height + '"';
        }
        result += " />";
        return result;
      }
      text = text.replace(referenceRegExp, writeImageTag);
      text = text.replace(base64RegExp, writeImageTagBase64);
      text = text.replace(crazyRegExp, writeImageTag);
      text = text.replace(inlineRegExp, writeImageTag);
      text = text.replace(refShortcutRegExp, writeImageTag);
      text = globals.converter._dispatch("images.after", text, options, globals);
      return text;
    });
    showdown2.subParser("italicsAndBold", function(text, options, globals) {
      text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
      function parseInside(txt, left, right) {
        return left + txt + right;
      }
      if (options.literalMidWordUnderscores) {
        text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
          return parseInside(txt, "<strong><em>", "</em></strong>");
        });
        text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
          return parseInside(txt, "<strong>", "</strong>");
        });
        text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
          return parseInside(txt, "<em>", "</em>");
        });
      } else {
        text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
          return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
        });
        text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
          return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
        });
        text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
          return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
        });
      }
      if (options.literalMidWordAsterisks) {
        text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
          return parseInside(txt, lead + "<strong><em>", "</em></strong>");
        });
        text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
          return parseInside(txt, lead + "<strong>", "</strong>");
        });
        text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
          return parseInside(txt, lead + "<em>", "</em>");
        });
      } else {
        text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
          return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
        });
        text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
          return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
        });
        text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
          return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
        });
      }
      text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
      return text;
    });
    showdown2.subParser("lists", function(text, options, globals) {
      function processListItems(listStr, trimTrailing) {
        globals.gListLevel++;
        listStr = listStr.replace(/\n{2,}$/, "\n");
        listStr += "\xA80";
        var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
        if (options.disableForced4SpacesIndentedSublists) {
          rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
        }
        listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
          checked = checked && checked.trim() !== "";
          var item = showdown2.subParser("outdent")(m4, options, globals), bulletStyle = "";
          if (taskbtn && options.tasklists) {
            bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
            item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              if (checked) {
                otp += " checked";
              }
              otp += ">";
              return otp;
            });
          }
          item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
            return "\xA8A" + wm2;
          });
          if (m1 || item.search(/\n{2,}/) > -1) {
            item = showdown2.subParser("githubCodeBlocks")(item, options, globals);
            item = showdown2.subParser("blockGamut")(item, options, globals);
          } else {
            item = showdown2.subParser("lists")(item, options, globals);
            item = item.replace(/\n$/, "");
            item = showdown2.subParser("hashHTMLBlocks")(item, options, globals);
            item = item.replace(/\n\n+/g, "\n\n");
            if (isParagraphed) {
              item = showdown2.subParser("paragraphs")(item, options, globals);
            } else {
              item = showdown2.subParser("spanGamut")(item, options, globals);
            }
          }
          item = item.replace("\xA8A", "");
          item = "<li" + bulletStyle + ">" + item + "</li>\n";
          return item;
        });
        listStr = listStr.replace(/¨0/g, "");
        globals.gListLevel--;
        if (trimTrailing) {
          listStr = listStr.replace(/\s+$/, "");
        }
        return listStr;
      }
      function styleStartNumber(list, listType) {
        if (listType === "ol") {
          var res = list.match(/^ *(\d+)\./);
          if (res && res[1] !== "1") {
            return ' start="' + res[1] + '"';
          }
        }
        return "";
      }
      function parseConsecutiveLists(list, listType, trimTrailing) {
        var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
        if (list.search(counterRxg) !== -1) {
          (function parseCL(txt) {
            var pos = txt.search(counterRxg), style2 = styleStartNumber(list, listType);
            if (pos !== -1) {
              result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
              listType = listType === "ul" ? "ol" : "ul";
              counterRxg = listType === "ul" ? olRgx : ulRgx;
              parseCL(txt.slice(pos));
            } else {
              result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
            }
          })(list);
        } else {
          var style = styleStartNumber(list, listType);
          result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
        }
        return result;
      }
      text = globals.converter._dispatch("lists.before", text, options, globals);
      text += "\xA80";
      if (globals.gListLevel) {
        text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, list, m2) {
          var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return parseConsecutiveLists(list, listType, true);
        });
      } else {
        text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, m1, list, m3) {
          var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return parseConsecutiveLists(list, listType, false);
        });
      }
      text = text.replace(/¨0/, "");
      text = globals.converter._dispatch("lists.after", text, options, globals);
      return text;
    });
    showdown2.subParser("metadata", function(text, options, globals) {
      if (!options.metadata) {
        return text;
      }
      text = globals.converter._dispatch("metadata.before", text, options, globals);
      function parseMetadataContents(content) {
        globals.metadata.raw = content;
        content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
        content = content.replace(/\n {4}/g, " ");
        content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
          globals.metadata.parsed[key] = value;
          return "";
        });
      }
      text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
        parseMetadataContents(content);
        return "\xA8M";
      });
      text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
        if (format) {
          globals.metadata.format = format;
        }
        parseMetadataContents(content);
        return "\xA8M";
      });
      text = text.replace(/¨M/g, "");
      text = globals.converter._dispatch("metadata.after", text, options, globals);
      return text;
    });
    showdown2.subParser("outdent", function(text, options, globals) {
      text = globals.converter._dispatch("outdent.before", text, options, globals);
      text = text.replace(/^(\t|[ ]{1,4})/gm, "\xA80");
      text = text.replace(/¨0/g, "");
      text = globals.converter._dispatch("outdent.after", text, options, globals);
      return text;
    });
    showdown2.subParser("paragraphs", function(text, options, globals) {
      text = globals.converter._dispatch("paragraphs.before", text, options, globals);
      text = text.replace(/^\n+/g, "");
      text = text.replace(/\n+$/g, "");
      var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length;
      for (var i = 0; i < end; i++) {
        var str = grafs[i];
        if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
          grafsOut.push(str);
        } else if (str.search(/\S/) >= 0) {
          str = showdown2.subParser("spanGamut")(str, options, globals);
          str = str.replace(/^([ \t]*)/g, "<p>");
          str += "</p>";
          grafsOut.push(str);
        }
      }
      end = grafsOut.length;
      for (i = 0; i < end; i++) {
        var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
        while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
          var delim = RegExp.$1, num = RegExp.$2;
          if (delim === "K") {
            blockText = globals.gHtmlBlocks[num];
          } else {
            if (codeFlag) {
              blockText = showdown2.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
            } else {
              blockText = globals.ghCodeBlocks[num].codeblock;
            }
          }
          blockText = blockText.replace(/\$/g, "$$$$");
          grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
          if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
            codeFlag = true;
          }
        }
        grafsOut[i] = grafsOutIt;
      }
      text = grafsOut.join("\n");
      text = text.replace(/^\n+/g, "");
      text = text.replace(/\n+$/g, "");
      return globals.converter._dispatch("paragraphs.after", text, options, globals);
    });
    showdown2.subParser("runExtension", function(ext, text, options, globals) {
      if (ext.filter) {
        text = ext.filter(text, globals.converter, options);
      } else if (ext.regex) {
        var re = ext.regex;
        if (!(re instanceof RegExp)) {
          re = new RegExp(re, "g");
        }
        text = text.replace(re, ext.replace);
      }
      return text;
    });
    showdown2.subParser("spanGamut", function(text, options, globals) {
      text = globals.converter._dispatch("spanGamut.before", text, options, globals);
      text = showdown2.subParser("codeSpans")(text, options, globals);
      text = showdown2.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
      text = showdown2.subParser("encodeBackslashEscapes")(text, options, globals);
      text = showdown2.subParser("images")(text, options, globals);
      text = showdown2.subParser("anchors")(text, options, globals);
      text = showdown2.subParser("autoLinks")(text, options, globals);
      text = showdown2.subParser("simplifiedAutoLinks")(text, options, globals);
      text = showdown2.subParser("emoji")(text, options, globals);
      text = showdown2.subParser("underline")(text, options, globals);
      text = showdown2.subParser("italicsAndBold")(text, options, globals);
      text = showdown2.subParser("strikethrough")(text, options, globals);
      text = showdown2.subParser("ellipsis")(text, options, globals);
      text = showdown2.subParser("hashHTMLSpans")(text, options, globals);
      text = showdown2.subParser("encodeAmpsAndAngles")(text, options, globals);
      if (options.simpleLineBreaks) {
        if (!/\n\n¨K/.test(text)) {
          text = text.replace(/\n+/g, "<br />\n");
        }
      } else {
        text = text.replace(/  +\n/g, "<br />\n");
      }
      text = globals.converter._dispatch("spanGamut.after", text, options, globals);
      return text;
    });
    showdown2.subParser("strikethrough", function(text, options, globals) {
      function parseInside(txt) {
        if (options.simplifiedAutoLink) {
          txt = showdown2.subParser("simplifiedAutoLinks")(txt, options, globals);
        }
        return "<del>" + txt + "</del>";
      }
      if (options.strikethrough) {
        text = globals.converter._dispatch("strikethrough.before", text, options, globals);
        text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
          return parseInside(txt);
        });
        text = globals.converter._dispatch("strikethrough.after", text, options, globals);
      }
      return text;
    });
    showdown2.subParser("stripLinkDefinitions", function(text, options, globals) {
      var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
      text += "\xA80";
      var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
        linkId = linkId.toLowerCase();
        if (url.match(/^data:.+?\/.+?;base64,/)) {
          globals.gUrls[linkId] = url.replace(/\s/g, "");
        } else {
          globals.gUrls[linkId] = showdown2.subParser("encodeAmpsAndAngles")(url, options, globals);
        }
        if (blankLines) {
          return blankLines + title;
        } else {
          if (title) {
            globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
          }
          if (options.parseImgDimensions && width && height) {
            globals.gDimensions[linkId] = {
              width,
              height
            };
          }
        }
        return "";
      };
      text = text.replace(base64Regex, replaceFunc);
      text = text.replace(regex, replaceFunc);
      text = text.replace(/¨0/, "");
      return text;
    });
    showdown2.subParser("tables", function(text, options, globals) {
      if (!options.tables) {
        return text;
      }
      var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
      function parseStyles(sLine) {
        if (/^:[ \t]*--*$/.test(sLine)) {
          return ' style="text-align:left;"';
        } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
          return ' style="text-align:right;"';
        } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
          return ' style="text-align:center;"';
        } else {
          return "";
        }
      }
      function parseHeaders(header, style) {
        var id = "";
        header = header.trim();
        if (options.tablesHeaderId || options.tableHeaderId) {
          id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
        }
        header = showdown2.subParser("spanGamut")(header, options, globals);
        return "<th" + id + style + ">" + header + "</th>\n";
      }
      function parseCells(cell, style) {
        var subText = showdown2.subParser("spanGamut")(cell, options, globals);
        return "<td" + style + ">" + subText + "</td>\n";
      }
      function buildTable(headers, cells) {
        var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
        for (var i = 0; i < tblLgn; ++i) {
          tb += headers[i];
        }
        tb += "</tr>\n</thead>\n<tbody>\n";
        for (i = 0; i < cells.length; ++i) {
          tb += "<tr>\n";
          for (var ii = 0; ii < tblLgn; ++ii) {
            tb += cells[i][ii];
          }
          tb += "</tr>\n";
        }
        tb += "</tbody>\n</table>\n";
        return tb;
      }
      function parseTable(rawTable) {
        var i, tableLines = rawTable.split("\n");
        for (i = 0; i < tableLines.length; ++i) {
          if (/^ {0,3}\|/.test(tableLines[i])) {
            tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
          }
          if (/\|[ \t]*$/.test(tableLines[i])) {
            tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
          }
          tableLines[i] = showdown2.subParser("codeSpans")(tableLines[i], options, globals);
        }
        var rawHeaders = tableLines[0].split("|").map(function(s) {
          return s.trim();
        }), rawStyles = tableLines[1].split("|").map(function(s) {
          return s.trim();
        }), rawCells = [], headers = [], styles = [], cells = [];
        tableLines.shift();
        tableLines.shift();
        for (i = 0; i < tableLines.length; ++i) {
          if (tableLines[i].trim() === "") {
            continue;
          }
          rawCells.push(tableLines[i].split("|").map(function(s) {
            return s.trim();
          }));
        }
        if (rawHeaders.length < rawStyles.length) {
          return rawTable;
        }
        for (i = 0; i < rawStyles.length; ++i) {
          styles.push(parseStyles(rawStyles[i]));
        }
        for (i = 0; i < rawHeaders.length; ++i) {
          if (showdown2.helper.isUndefined(styles[i])) {
            styles[i] = "";
          }
          headers.push(parseHeaders(rawHeaders[i], styles[i]));
        }
        for (i = 0; i < rawCells.length; ++i) {
          var row = [];
          for (var ii = 0; ii < headers.length; ++ii) {
            if (showdown2.helper.isUndefined(rawCells[i][ii]))
              ;
            row.push(parseCells(rawCells[i][ii], styles[ii]));
          }
          cells.push(row);
        }
        return buildTable(headers, cells);
      }
      text = globals.converter._dispatch("tables.before", text, options, globals);
      text = text.replace(/\\(\|)/g, showdown2.helper.escapeCharactersCallback);
      text = text.replace(tableRgx, parseTable);
      text = text.replace(singeColTblRgx, parseTable);
      text = globals.converter._dispatch("tables.after", text, options, globals);
      return text;
    });
    showdown2.subParser("underline", function(text, options, globals) {
      if (!options.underline) {
        return text;
      }
      text = globals.converter._dispatch("underline.before", text, options, globals);
      if (options.literalMidWordUnderscores) {
        text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
          return "<u>" + txt + "</u>";
        });
        text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
          return "<u>" + txt + "</u>";
        });
      } else {
        text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
          return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
        });
        text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
          return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
        });
      }
      text = text.replace(/(_)/g, showdown2.helper.escapeCharactersCallback);
      text = globals.converter._dispatch("underline.after", text, options, globals);
      return text;
    });
    showdown2.subParser("unescapeSpecialChars", function(text, options, globals) {
      text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
      text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
        var charCodeToReplace = parseInt(m1);
        return String.fromCharCode(charCodeToReplace);
      });
      text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
      return text;
    });
    showdown2.subParser("makeMarkdown.blockquote", function(node, globals) {
      var txt = "";
      if (node.hasChildNodes()) {
        var children = node.childNodes, childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          var innerTxt = showdown2.subParser("makeMarkdown.node")(children[i], globals);
          if (innerTxt === "") {
            continue;
          }
          txt += innerTxt;
        }
      }
      txt = txt.trim();
      txt = "> " + txt.split("\n").join("\n> ");
      return txt;
    });
    showdown2.subParser("makeMarkdown.codeBlock", function(node, globals) {
      var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
      return "```" + lang + "\n" + globals.preList[num] + "\n```";
    });
    showdown2.subParser("makeMarkdown.codeSpan", function(node) {
      return "`" + node.innerHTML + "`";
    });
    showdown2.subParser("makeMarkdown.emphasis", function(node, globals) {
      var txt = "";
      if (node.hasChildNodes()) {
        txt += "*";
        var children = node.childNodes, childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
        }
        txt += "*";
      }
      return txt;
    });
    showdown2.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
      var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
      if (node.hasChildNodes()) {
        txt = headerMark + " ";
        var children = node.childNodes, childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
        }
      }
      return txt;
    });
    showdown2.subParser("makeMarkdown.hr", function() {
      return "---";
    });
    showdown2.subParser("makeMarkdown.image", function(node) {
      var txt = "";
      if (node.hasAttribute("src")) {
        txt += "![" + node.getAttribute("alt") + "](";
        txt += "<" + node.getAttribute("src") + ">";
        if (node.hasAttribute("width") && node.hasAttribute("height")) {
          txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
        }
        if (node.hasAttribute("title")) {
          txt += ' "' + node.getAttribute("title") + '"';
        }
        txt += ")";
      }
      return txt;
    });
    showdown2.subParser("makeMarkdown.links", function(node, globals) {
      var txt = "";
      if (node.hasChildNodes() && node.hasAttribute("href")) {
        var children = node.childNodes, childrenLength = children.length;
        txt = "[";
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
        }
        txt += "](";
        txt += "<" + node.getAttribute("href") + ">";
        if (node.hasAttribute("title")) {
          txt += ' "' + node.getAttribute("title") + '"';
        }
        txt += ")";
      }
      return txt;
    });
    showdown2.subParser("makeMarkdown.list", function(node, globals, type) {
      var txt = "";
      if (!node.hasChildNodes()) {
        return "";
      }
      var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
      for (var i = 0; i < listItemsLenght; ++i) {
        if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") {
          continue;
        }
        var bullet = "";
        if (type === "ol") {
          bullet = listNum.toString() + ". ";
        } else {
          bullet = "- ";
        }
        txt += bullet + showdown2.subParser("makeMarkdown.listItem")(listItems[i], globals);
        ++listNum;
      }
      txt += "\n<!-- -->\n";
      return txt.trim();
    });
    showdown2.subParser("makeMarkdown.listItem", function(node, globals) {
      var listItemTxt = "";
      var children = node.childNodes, childrenLenght = children.length;
      for (var i = 0; i < childrenLenght; ++i) {
        listItemTxt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
      }
      if (!/\n$/.test(listItemTxt)) {
        listItemTxt += "\n";
      } else {
        listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
      }
      return listItemTxt;
    });
    showdown2.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
      spansOnly = spansOnly || false;
      var txt = "";
      if (node.nodeType === 3) {
        return showdown2.subParser("makeMarkdown.txt")(node, globals);
      }
      if (node.nodeType === 8) {
        return "<!--" + node.data + "-->\n\n";
      }
      if (node.nodeType !== 1) {
        return "";
      }
      var tagName = node.tagName.toLowerCase();
      switch (tagName) {
        case "h1":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
          }
          break;
        case "h2":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
          }
          break;
        case "h3":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
          }
          break;
        case "h4":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
          }
          break;
        case "h5":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
          }
          break;
        case "h6":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
          }
          break;
        case "p":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
          }
          break;
        case "blockquote":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
          }
          break;
        case "hr":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
          }
          break;
        case "ol":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
          }
          break;
        case "ul":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
          }
          break;
        case "precode":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
          }
          break;
        case "pre":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
          }
          break;
        case "table":
          if (!spansOnly) {
            txt = showdown2.subParser("makeMarkdown.table")(node, globals) + "\n\n";
          }
          break;
        case "code":
          txt = showdown2.subParser("makeMarkdown.codeSpan")(node, globals);
          break;
        case "em":
        case "i":
          txt = showdown2.subParser("makeMarkdown.emphasis")(node, globals);
          break;
        case "strong":
        case "b":
          txt = showdown2.subParser("makeMarkdown.strong")(node, globals);
          break;
        case "del":
          txt = showdown2.subParser("makeMarkdown.strikethrough")(node, globals);
          break;
        case "a":
          txt = showdown2.subParser("makeMarkdown.links")(node, globals);
          break;
        case "img":
          txt = showdown2.subParser("makeMarkdown.image")(node, globals);
          break;
        default:
          txt = node.outerHTML + "\n\n";
      }
      return txt;
    });
    showdown2.subParser("makeMarkdown.paragraph", function(node, globals) {
      var txt = "";
      if (node.hasChildNodes()) {
        var children = node.childNodes, childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
        }
      }
      txt = txt.trim();
      return txt;
    });
    showdown2.subParser("makeMarkdown.pre", function(node, globals) {
      var num = node.getAttribute("prenum");
      return "<pre>" + globals.preList[num] + "</pre>";
    });
    showdown2.subParser("makeMarkdown.strikethrough", function(node, globals) {
      var txt = "";
      if (node.hasChildNodes()) {
        txt += "~~";
        var children = node.childNodes, childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
        }
        txt += "~~";
      }
      return txt;
    });
    showdown2.subParser("makeMarkdown.strong", function(node, globals) {
      var txt = "";
      if (node.hasChildNodes()) {
        txt += "**";
        var children = node.childNodes, childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown2.subParser("makeMarkdown.node")(children[i], globals);
        }
        txt += "**";
      }
      return txt;
    });
    showdown2.subParser("makeMarkdown.table", function(node, globals) {
      var txt = "", tableArray = [[], []], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
      for (i = 0; i < headings.length; ++i) {
        var headContent = showdown2.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
        if (headings[i].hasAttribute("style")) {
          var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
          switch (style) {
            case "text-align:left;":
              allign = ":---";
              break;
            case "text-align:right;":
              allign = "---:";
              break;
            case "text-align:center;":
              allign = ":---:";
              break;
          }
        }
        tableArray[0][i] = headContent.trim();
        tableArray[1][i] = allign;
      }
      for (i = 0; i < rows.length; ++i) {
        var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
        for (ii = 0; ii < headings.length; ++ii) {
          var cellContent = " ";
          if (typeof cols[ii] !== "undefined") {
            cellContent = showdown2.subParser("makeMarkdown.tableCell")(cols[ii], globals);
          }
          tableArray[r].push(cellContent);
        }
      }
      var cellSpacesCount = 3;
      for (i = 0; i < tableArray.length; ++i) {
        for (ii = 0; ii < tableArray[i].length; ++ii) {
          var strLen = tableArray[i][ii].length;
          if (strLen > cellSpacesCount) {
            cellSpacesCount = strLen;
          }
        }
      }
      for (i = 0; i < tableArray.length; ++i) {
        for (ii = 0; ii < tableArray[i].length; ++ii) {
          if (i === 1) {
            if (tableArray[i][ii].slice(-1) === ":") {
              tableArray[i][ii] = showdown2.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
            } else {
              tableArray[i][ii] = showdown2.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
            }
          } else {
            tableArray[i][ii] = showdown2.helper.padEnd(tableArray[i][ii], cellSpacesCount);
          }
        }
        txt += "| " + tableArray[i].join(" | ") + " |\n";
      }
      return txt.trim();
    });
    showdown2.subParser("makeMarkdown.tableCell", function(node, globals) {
      var txt = "";
      if (!node.hasChildNodes()) {
        return "";
      }
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown2.subParser("makeMarkdown.node")(children[i], globals, true);
      }
      return txt.trim();
    });
    showdown2.subParser("makeMarkdown.txt", function(node) {
      var txt = node.nodeValue;
      txt = txt.replace(/ +/g, " ");
      txt = txt.replace(/¨NBSP;/g, " ");
      txt = showdown2.helper.unescapeHTMLEntities(txt);
      txt = txt.replace(/([*_~|`])/g, "\\$1");
      txt = txt.replace(/^(\s*)>/g, "\\$1>");
      txt = txt.replace(/^#/gm, "\\#");
      txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
      txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
      txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
      txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
      txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
      return txt;
    });
    var root = this;
    if (module.exports) {
      module.exports = showdown2;
    } else {
      root.showdown = showdown2;
    }
  }).call(commonjsGlobal);
})(showdown$1);
var showdown = showdown$1.exports;
var MarkdownViewer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    value: { type: String },
    class: { type: String }
  },
  setup(__props) {
    const props = __props;
    const converter = new showdown.Converter();
    converter.setOption("tables", true);
    const getHtmlData = computed(() => converter.makeHtml(props.value || ""));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        innerHTML: unref(getHtmlData),
        class: normalizeClass([_ctx.$props.class, "markdown-viewer"])
      }, null, 10, _hoisted_1);
    };
  }
});
var markDownViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-578548a8"]]);
const MarkDown = withInstall(markDown);
const MarkdownViewer = withInstall(markDownViewer);
export { MarkDown as M, MarkdownViewer as a };
