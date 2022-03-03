var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { _ as _export_sfc, c as useAppStore, B as withInstall } from "./index.f72786be.js";
import { _ as inject, a1 as provide, d as defineComponent, b6 as Divider, ae as Tooltip, Q as ref, aq as watchEffect, b as unref, a7 as nextTick, an as onUnmounted, r as resolveComponent, o as openBlock, R as createElementBlock, ag as Fragment, as as renderList, f as createVNode, e as withCtx, aj as createTextVNode, W as toDisplayString, X as normalizeClass, ai as createCommentVNode, aa as mergeProps, c as createBlock, cD as getDefaultExportFromCjs, O as computed, w as watch, a6 as onMounted, V as createBaseVNode } from "./vendor.faf2de98.js";
/* empty css                 */import { I as Icon, d as useDesign } from "./index.e23996e1.js";
import { B as BasicModal, b as useModal } from "./index.655f0e3f.js";
import { J as JsonPreview } from "./index.adc1a442.js";
import { a as PageWrapper } from "./index.c0604aaf.js";
import "./useRootSetting.af8c12e8.js";
import "./useAttrs.d4bdb35c.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.e1900874.js";
const key = Symbol("flow-chart");
function createFlowChartContext(instance) {
  provide(key, instance);
}
function useFlowChartContext() {
  return inject(key);
}
var ToolbarTypeEnum = /* @__PURE__ */ ((ToolbarTypeEnum2) => {
  ToolbarTypeEnum2["ZOOM_IN"] = "zoomIn";
  ToolbarTypeEnum2["ZOOM_OUT"] = "zoomOut";
  ToolbarTypeEnum2["RESET_ZOOM"] = "resetZoom";
  ToolbarTypeEnum2["UNDO"] = "undo";
  ToolbarTypeEnum2["REDO"] = "redo";
  ToolbarTypeEnum2["SNAPSHOT"] = "snapshot";
  ToolbarTypeEnum2["VIEW_DATA"] = "viewData";
  return ToolbarTypeEnum2;
})(ToolbarTypeEnum || {});
var FlowChartToolbar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = defineComponent({
  name: "FlowChartToolbar",
  components: { Icon, Divider, Tooltip },
  props: {
    prefixCls: String
  },
  emits: ["view-data"],
  setup(_2, { emit }) {
    const toolbarItemList = ref([
      {
        type: ToolbarTypeEnum.ZOOM_IN,
        icon: "codicon:zoom-out",
        tooltip: "\u7F29\u5C0F"
      },
      {
        type: ToolbarTypeEnum.ZOOM_OUT,
        icon: "codicon:zoom-in",
        tooltip: "\u653E\u5927"
      },
      {
        type: ToolbarTypeEnum.RESET_ZOOM,
        icon: "codicon:screen-normal",
        tooltip: "\u91CD\u7F6E\u6BD4\u4F8B"
      },
      { separate: true },
      {
        type: ToolbarTypeEnum.UNDO,
        icon: "ion:arrow-undo-outline",
        tooltip: "\u540E\u9000",
        disabled: true
      },
      {
        type: ToolbarTypeEnum.REDO,
        icon: "ion:arrow-redo-outline",
        tooltip: "\u524D\u8FDB",
        disabled: true
      },
      { separate: true },
      {
        type: ToolbarTypeEnum.SNAPSHOT,
        icon: "ion:download-outline",
        tooltip: "\u4E0B\u8F7D"
      },
      {
        type: ToolbarTypeEnum.VIEW_DATA,
        icon: "carbon:document-view",
        tooltip: "\u67E5\u770B\u6570\u636E"
      }
    ]);
    const { logicFlow: logicFlow2 } = useFlowChartContext();
    function onHistoryChange({ data: { undoAble, redoAble } }) {
      const itemsList = unref(toolbarItemList);
      const undoIndex = itemsList.findIndex((item) => item.type === ToolbarTypeEnum.UNDO);
      const redoIndex = itemsList.findIndex((item) => item.type === ToolbarTypeEnum.REDO);
      if (undoIndex !== -1) {
        unref(toolbarItemList)[undoIndex].disabled = !undoAble;
      }
      if (redoIndex !== -1) {
        unref(toolbarItemList)[redoIndex].disabled = !redoAble;
      }
    }
    const onControl = (item) => {
      const lf = unref(logicFlow2);
      if (!lf) {
        return;
      }
      switch (item.type) {
        case ToolbarTypeEnum.ZOOM_IN:
          lf.zoom();
          break;
        case ToolbarTypeEnum.ZOOM_OUT:
          lf.zoom(true);
          break;
        case ToolbarTypeEnum.RESET_ZOOM:
          lf.resetZoom();
          break;
        case ToolbarTypeEnum.UNDO:
          lf.undo();
          break;
        case ToolbarTypeEnum.REDO:
          lf.redo();
          break;
        case ToolbarTypeEnum.SNAPSHOT:
          lf.getSnapshot();
          break;
        case ToolbarTypeEnum.VIEW_DATA:
          emit("view-data");
          break;
      }
    };
    watchEffect(async () => {
      var _a;
      if (unref(logicFlow2)) {
        await nextTick();
        (_a = unref(logicFlow2)) == null ? void 0 : _a.on("history:change", onHistoryChange);
      }
    });
    onUnmounted(() => {
      var _a;
      (_a = unref(logicFlow2)) == null ? void 0 : _a.off("history:change", onHistoryChange);
    });
    return { toolbarItemList, onControl };
  }
});
const _hoisted_1$1 = ["onClick"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_Divider = resolveComponent("Divider");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([`${_ctx.prefixCls}-toolbar`, "flex items-center px-2 py-1"])
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.toolbarItemList, (item) => {
      return openBlock(), createElementBlock(Fragment, {
        key: item.type
      }, [
        createVNode(_component_Tooltip, mergeProps({ placement: "bottom" }, item.disabled ? { visible: false } : {}), {
          title: withCtx(() => [
            createTextVNode(toDisplayString(item.tooltip), 1)
          ]),
          default: withCtx(() => [
            item.icon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(`${_ctx.prefixCls}-toolbar__icon`),
              onClick: ($event) => _ctx.onControl(item)
            }, [
              createVNode(_component_Icon, {
                icon: item.icon,
                class: normalizeClass(item.disabled ? "cursor-not-allowed disabeld" : "cursor-pointer")
              }, null, 8, ["icon", "class"])
            ], 10, _hoisted_1$1)) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1040),
        item.separate ? (openBlock(), createBlock(_component_Divider, {
          key: 0,
          type: "vertical"
        })) : createCommentVNode("", true)
      ], 64);
    }), 128))
  ], 2);
}
var FlowChartToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var logicFlow = { exports: {} };
(function(module, exports) {
  !function(t2, e2) {
    module.exports = e2();
  }(window, function() {
    return function(t2) {
      var e2 = {};
      function r2(n2) {
        if (e2[n2])
          return e2[n2].exports;
        var o2 = e2[n2] = { i: n2, l: false, exports: {} };
        return t2[n2].call(o2.exports, o2, o2.exports, r2), o2.l = true, o2.exports;
      }
      return r2.m = t2, r2.c = e2, r2.d = function(t3, e3, n2) {
        r2.o(t3, e3) || Object.defineProperty(t3, e3, { enumerable: true, get: n2 });
      }, r2.r = function(t3) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
      }, r2.t = function(t3, e3) {
        if (1 & e3 && (t3 = r2(t3)), 8 & e3)
          return t3;
        if (4 & e3 && typeof t3 == "object" && t3 && t3.__esModule)
          return t3;
        var n2 = /* @__PURE__ */ Object.create(null);
        if (r2.r(n2), Object.defineProperty(n2, "default", { enumerable: true, value: t3 }), 2 & e3 && typeof t3 != "string")
          for (var o2 in t3)
            r2.d(n2, o2, function(e4) {
              return t3[e4];
            }.bind(null, o2));
        return n2;
      }, r2.n = function(t3) {
        var e3 = t3 && t3.__esModule ? function() {
          return t3.default;
        } : function() {
          return t3;
        };
        return r2.d(e3, "a", e3), e3;
      }, r2.o = function(t3, e3) {
        return Object.prototype.hasOwnProperty.call(t3, e3);
      }, r2.p = "", r2(r2.s = 202);
    }([function(t2, e2, r2) {
      (function(t3, n2) {
        r2.d(e2, "a", function() {
          return w2;
        }), r2.d(e2, "b", function() {
          return er;
        }), r2.d(e2, "c", function() {
          return Gt;
        }), r2.d(e2, "d", function() {
          return jt;
        }), r2.d(e2, "e", function() {
          return yt;
        }), r2.d(e2, "f", function() {
          return dt;
        }), r2.d(e2, "g", function() {
          return _t;
        }), r2.d(e2, "h", function() {
          return yr;
        }), r2.d(e2, "i", function() {
          return at;
        }), r2.d(e2, "j", function() {
          return wt;
        }), r2.d(e2, "k", function() {
          return Qt;
        }), r2.d(e2, "l", function() {
          return ne;
        }), r2.d(e2, "m", function() {
          return rt;
        }), r2.d(e2, "n", function() {
          return se;
        }), r2.d(e2, "o", function() {
          return E;
        }), r2.d(e2, "p", function() {
          return Se;
        }), r2.d(e2, "q", function() {
          return le;
        }), r2.d(e2, "r", function() {
          return be;
        }), r2.d(e2, "s", function() {
          return dr;
        }), r2.d(e2, "t", function() {
          return de;
        }), r2.d(e2, "u", function() {
          return ee;
        }), r2.d(e2, "v", function() {
          return Oe;
        }), r2.d(e2, "w", function() {
          return we;
        }), r2.d(e2, "x", function() {
          return je;
        }), r2.d(e2, "y", function() {
          return Je;
        }), r2.d(e2, "z", function() {
          return rr;
        }), r2.d(e2, "A", function() {
          return pr;
        }), r2.d(e2, "B", function() {
          return Ee;
        }), r2.d(e2, "C", function() {
          return Z;
        }), r2.d(e2, "D", function() {
          return Pe;
        }), r2.d(e2, "E", function() {
          return ue;
        }), r2.d(e2, "F", function() {
          return ae;
        }), r2.d(e2, "G", function() {
          return te;
        }), r2.d(e2, "H", function() {
          return $t;
        }), r2.d(e2, "I", function() {
          return De;
        }), r2.d(e2, "J", function() {
          return Me;
        }), r2.d(e2, "K", function() {
          return lt;
        }), r2.d(e2, "L", function() {
          return xe;
        }), r2.d(e2, "M", function() {
          return Ne;
        });
        var o2 = [];
        Object.freeze(o2);
        var i = {};
        function a2() {
          return ++Rt.mobxGuid;
        }
        function u2(t4) {
          throw c2(false, t4), "X";
        }
        function c2(t4, e3) {
          if (!t4)
            throw new Error("[mobx] " + (e3 || "An invariant failed, however the error is obfuscated because this is a production build."));
        }
        Object.freeze(i);
        function s2(t4) {
          var e3 = false;
          return function() {
            if (!e3)
              return e3 = true, t4.apply(this, arguments);
          };
        }
        var l2 = function() {
        };
        function f(t4) {
          return t4 !== null && typeof t4 == "object";
        }
        function p(t4) {
          if (t4 === null || typeof t4 != "object")
            return false;
          var e3 = Object.getPrototypeOf(t4);
          return e3 === Object.prototype || e3 === null;
        }
        function d2(t4, e3, r3) {
          Object.defineProperty(t4, e3, { enumerable: false, writable: true, configurable: true, value: r3 });
        }
        function y2(t4, e3) {
          var r3 = "isMobX" + t4;
          return e3.prototype[r3] = true, function(t5) {
            return f(t5) && t5[r3] === true;
          };
        }
        function h2(t4) {
          return t4 instanceof Map;
        }
        function v2(t4) {
          return t4 instanceof Set;
        }
        function b2(t4) {
          var e3 = /* @__PURE__ */ new Set();
          for (var r3 in t4)
            e3.add(r3);
          return Object.getOwnPropertySymbols(t4).forEach(function(r4) {
            Object.getOwnPropertyDescriptor(t4, r4).enumerable && e3.add(r4);
          }), Array.from(e3);
        }
        function g2(t4) {
          return t4 && t4.toString ? t4.toString() : new String(t4).toString();
        }
        function m2(t4) {
          return t4 === null ? null : typeof t4 == "object" ? "" + t4 : t4;
        }
        var O2 = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols ? function(t4) {
          return Object.getOwnPropertyNames(t4).concat(Object.getOwnPropertySymbols(t4));
        } : Object.getOwnPropertyNames, w2 = Symbol("mobx administration"), _2 = function() {
          function t4(t5) {
            t5 === void 0 && (t5 = "Atom@" + a2()), this.name = t5, this.isPendingUnobservation = false, this.isBeingObserved = false, this.observers = /* @__PURE__ */ new Set(), this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = J.NOT_TRACKING;
          }
          return t4.prototype.onBecomeObserved = function() {
            this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach(function(t5) {
              return t5();
            });
          }, t4.prototype.onBecomeUnobserved = function() {
            this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach(function(t5) {
              return t5();
            });
          }, t4.prototype.reportObserved = function() {
            return Ht(this);
          }, t4.prototype.reportChanged = function() {
            Bt(), function(t5) {
              if (t5.lowestObserverState === J.STALE)
                return;
              t5.lowestObserverState = J.STALE, t5.observers.forEach(function(e3) {
                e3.dependenciesState === J.UP_TO_DATE && (e3.isTracing !== Q.NONE && Ut(e3, t5), e3.onBecomeStale()), e3.dependenciesState = J.STALE;
              });
            }(this), Xt();
          }, t4.prototype.toString = function() {
            return this.name;
          }, t4;
        }(), j2 = y2("Atom", _2);
        function E(t4, e3, r3) {
          e3 === void 0 && (e3 = l2), r3 === void 0 && (r3 = l2);
          var n3, o3 = new _2(t4);
          return e3 !== l2 && ce("onBecomeObserved", o3, e3, n3), r3 !== l2 && ue(o3, r3), o3;
        }
        var x2 = { identity: function(t4, e3) {
          return t4 === e3;
        }, structural: function(t4, e3) {
          return vr(t4, e3);
        }, default: function(t4, e3) {
          return Object.is(t4, e3);
        }, shallow: function(t4, e3) {
          return vr(t4, e3, 1);
        } }, S = function(t4, e3) {
          return (S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t5, e4) {
            t5.__proto__ = e4;
          } || function(t5, e4) {
            for (var r3 in e4)
              e4.hasOwnProperty(r3) && (t5[r3] = e4[r3]);
          })(t4, e3);
        };
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0
        
        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.
        
        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var P2 = function() {
          return (P2 = Object.assign || function(t4) {
            for (var e3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
              for (var o3 in e3 = arguments[r3])
                Object.prototype.hasOwnProperty.call(e3, o3) && (t4[o3] = e3[o3]);
            return t4;
          }).apply(this, arguments);
        };
        function k2(t4) {
          var e3 = typeof Symbol == "function" && t4[Symbol.iterator], r3 = 0;
          return e3 ? e3.call(t4) : { next: function() {
            return t4 && r3 >= t4.length && (t4 = void 0), { value: t4 && t4[r3++], done: !t4 };
          } };
        }
        function A(t4, e3) {
          var r3 = typeof Symbol == "function" && t4[Symbol.iterator];
          if (!r3)
            return t4;
          var n3, o3, i2 = r3.call(t4), a3 = [];
          try {
            for (; (e3 === void 0 || e3-- > 0) && !(n3 = i2.next()).done; )
              a3.push(n3.value);
          } catch (t5) {
            o3 = { error: t5 };
          } finally {
            try {
              n3 && !n3.done && (r3 = i2.return) && r3.call(i2);
            } finally {
              if (o3)
                throw o3.error;
            }
          }
          return a3;
        }
        function D() {
          for (var t4 = [], e3 = 0; e3 < arguments.length; e3++)
            t4 = t4.concat(A(arguments[e3]));
          return t4;
        }
        var T2 = Symbol("mobx did run lazy initializers"), M2 = Symbol("mobx pending decorators"), N2 = {}, C2 = {};
        function R(t4, e3) {
          var r3 = e3 ? N2 : C2;
          return r3[t4] || (r3[t4] = { configurable: true, enumerable: e3, get: function() {
            return I2(this), this[t4];
          }, set: function(e4) {
            I2(this), this[t4] = e4;
          } });
        }
        function I2(t4) {
          var e3, r3;
          if (t4[T2] !== true) {
            var n3 = t4[M2];
            if (n3) {
              d2(t4, T2, true);
              var o3 = D(Object.getOwnPropertySymbols(n3), Object.keys(n3));
              try {
                for (var i2 = k2(o3), a3 = i2.next(); !a3.done; a3 = i2.next()) {
                  var u3 = n3[a3.value];
                  u3.propertyCreator(t4, u3.prop, u3.descriptor, u3.decoratorTarget, u3.decoratorArguments);
                }
              } catch (t5) {
                e3 = { error: t5 };
              } finally {
                try {
                  a3 && !a3.done && (r3 = i2.return) && r3.call(i2);
                } finally {
                  if (e3)
                    throw e3.error;
                }
              }
            }
          }
        }
        function L2(t4, e3) {
          return function() {
            var r3, n3 = function(n4, o3, i2, a3) {
              if (a3 === true)
                return e3(n4, o3, i2, n4, r3), null;
              if (!Object.prototype.hasOwnProperty.call(n4, M2)) {
                var u3 = n4[M2];
                d2(n4, M2, P2({}, u3));
              }
              return n4[M2][o3] = { prop: o3, propertyCreator: e3, descriptor: i2, decoratorTarget: n4, decoratorArguments: r3 }, R(o3, t4);
            };
            return z2(arguments) ? (r3 = o2, n3.apply(null, arguments)) : (r3 = Array.prototype.slice.call(arguments), n3);
          };
        }
        function z2(t4) {
          return (t4.length === 2 || t4.length === 3) && (typeof t4[1] == "string" || typeof t4[1] == "symbol") || t4.length === 4 && t4[3] === true;
        }
        function B(t4, e3, r3) {
          return je(t4) ? t4 : Array.isArray(t4) ? Z.array(t4, { name: r3 }) : p(t4) ? Z.object(t4, void 0, { name: r3 }) : h2(t4) ? Z.map(t4, { name: r3 }) : v2(t4) ? Z.set(t4, { name: r3 }) : t4;
        }
        function X(t4) {
          return t4;
        }
        function H2(e3) {
          c2(e3);
          var r3 = L2(true, function(t4, r4, n4, o3, i2) {
            var a3 = n4 ? n4.initializer ? n4.initializer.call(t4) : n4.value : void 0;
            ur(t4).addObservableProp(r4, a3, e3);
          }), n3 = (t3 !== void 0 && t3.env, r3);
          return n3.enhancer = e3, n3;
        }
        var U = { deep: true, name: void 0, defaultDecorator: void 0, proxy: true };
        function G(t4) {
          return t4 == null ? U : typeof t4 == "string" ? { name: t4, deep: true, proxy: true } : t4;
        }
        Object.freeze(U);
        var F = H2(B), Y = H2(function(t4, e3, r3) {
          return t4 == null || pr(t4) || Je(t4) || rr(t4) || ir(t4) ? t4 : Array.isArray(t4) ? Z.array(t4, { name: r3, deep: false }) : p(t4) ? Z.object(t4, void 0, { name: r3, deep: false }) : h2(t4) ? Z.map(t4, { name: r3, deep: false }) : v2(t4) ? Z.set(t4, { name: r3, deep: false }) : u2(false);
        }), V = H2(X), W = H2(function(t4, e3, r3) {
          return vr(t4, e3) ? e3 : t4;
        });
        function K(t4) {
          return t4.defaultDecorator ? t4.defaultDecorator.enhancer : t4.deep === false ? X : B;
        }
        var $2 = { box: function(t4, e3) {
          arguments.length > 2 && q("box");
          var r3 = G(e3);
          return new St(t4, K(r3), r3.name, true, r3.equals);
        }, array: function(t4, e3) {
          arguments.length > 2 && q("array");
          var r3 = G(e3);
          return We(t4, K(r3), r3.name);
        }, map: function(t4, e3) {
          arguments.length > 2 && q("map");
          var r3 = G(e3);
          return new er(t4, K(r3), r3.name);
        }, set: function(t4, e3) {
          arguments.length > 2 && q("set");
          var r3 = G(e3);
          return new or(t4, K(r3), r3.name);
        }, object: function(t4, e3, r3) {
          typeof arguments[1] == "string" && q("object");
          var n3 = G(r3);
          if (n3.proxy === false)
            return le({}, t4, e3, n3);
          var o3 = fe(n3), i2 = le({}, void 0, void 0, n3), a3 = Be(i2);
          return pe(a3, t4, e3, o3), a3;
        }, ref: V, shallow: Y, deep: F, struct: W }, Z = function(t4, e3, r3) {
          if (typeof arguments[1] == "string" || typeof arguments[1] == "symbol")
            return F.apply(null, arguments);
          if (je(t4))
            return t4;
          var n3 = p(t4) ? Z.object(t4, e3, r3) : Array.isArray(t4) ? Z.array(t4, e3) : h2(t4) ? Z.map(t4, e3) : v2(t4) ? Z.set(t4, e3) : t4;
          if (n3 !== t4)
            return n3;
          u2(false);
        };
        function q(t4) {
          u2("Expected one or two arguments to observable." + t4 + ". Did you accidentally try to use observable." + t4 + " as decorator?");
        }
        Object.keys($2).forEach(function(t4) {
          return Z[t4] = $2[t4];
        });
        var J, Q, tt = L2(false, function(t4, e3, r3, n3, o3) {
          var i2 = r3.get, a3 = r3.set, u3 = o3[0] || {};
          ur(t4).addComputedProp(t4, e3, P2({ get: i2, set: a3, context: t4 }, u3));
        }), et = tt({ equals: x2.structural }), rt = function(t4, e3, r3) {
          if (typeof e3 == "string")
            return tt.apply(null, arguments);
          if (t4 !== null && typeof t4 == "object" && arguments.length === 1)
            return tt.apply(null, arguments);
          var n3 = typeof e3 == "object" ? e3 : {};
          return n3.get = t4, n3.set = typeof e3 == "function" ? e3 : n3.set, n3.name = n3.name || t4.name || "", new kt(n3);
        };
        rt.struct = et, function(t4) {
          t4[t4.NOT_TRACKING = -1] = "NOT_TRACKING", t4[t4.UP_TO_DATE = 0] = "UP_TO_DATE", t4[t4.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", t4[t4.STALE = 2] = "STALE";
        }(J || (J = {})), function(t4) {
          t4[t4.NONE = 0] = "NONE", t4[t4.LOG = 1] = "LOG", t4[t4.BREAK = 2] = "BREAK";
        }(Q || (Q = {}));
        var nt = function(t4) {
          this.cause = t4;
        };
        function ot(t4) {
          return t4 instanceof nt;
        }
        function it(t4) {
          switch (t4.dependenciesState) {
            case J.UP_TO_DATE:
              return false;
            case J.NOT_TRACKING:
            case J.STALE:
              return true;
            case J.POSSIBLY_STALE:
              for (var e3 = dt(true), r3 = ft(), n3 = t4.observing, o3 = n3.length, i2 = 0; i2 < o3; i2++) {
                var a3 = n3[i2];
                if (At(a3)) {
                  if (Rt.disableErrorBoundaries)
                    a3.get();
                  else
                    try {
                      a3.get();
                    } catch (t5) {
                      return pt(r3), yt(e3), true;
                    }
                  if (t4.dependenciesState === J.STALE)
                    return pt(r3), yt(e3), true;
                }
              }
              return ht(t4), pt(r3), yt(e3), false;
          }
        }
        function at() {
          return Rt.trackingDerivation !== null;
        }
        function ut(t4) {
          var e3 = t4.observers.size > 0;
          Rt.computationDepth > 0 && e3 && u2(false), Rt.allowStateChanges || !e3 && Rt.enforceActions !== "strict" || u2(false);
        }
        function ct(t4, e3, r3) {
          var n3 = dt(true);
          ht(t4), t4.newObserving = new Array(t4.observing.length + 100), t4.unboundDepsCount = 0, t4.runId = ++Rt.runId;
          var o3, i2 = Rt.trackingDerivation;
          if (Rt.trackingDerivation = t4, Rt.disableErrorBoundaries === true)
            o3 = e3.call(r3);
          else
            try {
              o3 = e3.call(r3);
            } catch (t5) {
              o3 = new nt(t5);
            }
          return Rt.trackingDerivation = i2, function(t5) {
            for (var e4 = t5.observing, r4 = t5.observing = t5.newObserving, n4 = J.UP_TO_DATE, o4 = 0, i3 = t5.unboundDepsCount, a3 = 0; a3 < i3; a3++) {
              (u3 = r4[a3]).diffValue === 0 && (u3.diffValue = 1, o4 !== a3 && (r4[o4] = u3), o4++), u3.dependenciesState > n4 && (n4 = u3.dependenciesState);
            }
            r4.length = o4, t5.newObserving = null, i3 = e4.length;
            for (; i3--; ) {
              (u3 = e4[i3]).diffValue === 0 && Lt(u3, t5), u3.diffValue = 0;
            }
            for (; o4--; ) {
              var u3;
              (u3 = r4[o4]).diffValue === 1 && (u3.diffValue = 0, It(u3, t5));
            }
            n4 !== J.UP_TO_DATE && (t5.dependenciesState = n4, t5.onBecomeStale());
          }(t4), yt(n3), o3;
        }
        function st(t4) {
          var e3 = t4.observing;
          t4.observing = [];
          for (var r3 = e3.length; r3--; )
            Lt(e3[r3], t4);
          t4.dependenciesState = J.NOT_TRACKING;
        }
        function lt(t4) {
          var e3 = ft();
          try {
            return t4();
          } finally {
            pt(e3);
          }
        }
        function ft() {
          var t4 = Rt.trackingDerivation;
          return Rt.trackingDerivation = null, t4;
        }
        function pt(t4) {
          Rt.trackingDerivation = t4;
        }
        function dt(t4) {
          var e3 = Rt.allowStateReads;
          return Rt.allowStateReads = t4, e3;
        }
        function yt(t4) {
          Rt.allowStateReads = t4;
        }
        function ht(t4) {
          if (t4.dependenciesState !== J.UP_TO_DATE) {
            t4.dependenciesState = J.UP_TO_DATE;
            for (var e3 = t4.observing, r3 = e3.length; r3--; )
              e3[r3].lowestObserverState = J.UP_TO_DATE;
          }
        }
        var vt = 0, bt = 1, gt = Object.getOwnPropertyDescriptor(function() {
        }, "name");
        gt && gt.configurable;
        function mt(t4, e3, r3) {
          var n3 = function() {
            return Ot(t4, e3, r3 || this, arguments);
          };
          return n3.isMobxAction = true, n3;
        }
        function Ot(t4, e3, r3, n3) {
          var o3 = wt();
          try {
            return e3.apply(r3, n3);
          } catch (t5) {
            throw o3.error = t5, t5;
          } finally {
            _t(o3);
          }
        }
        function wt(t4, e3, r3) {
          var n3 = 0, o3 = ft();
          Bt();
          var i2 = { prevDerivation: o3, prevAllowStateChanges: Et(true), prevAllowStateReads: dt(true), notifySpy: false, startTime: n3, actionId: bt++, parentActionId: vt };
          return vt = i2.actionId, i2;
        }
        function _t(t4) {
          vt !== t4.actionId && u2("invalid action stack. did you forget to finish an action?"), vt = t4.parentActionId, t4.error !== void 0 && (Rt.suppressReactionErrors = true), xt(t4.prevAllowStateChanges), yt(t4.prevAllowStateReads), Xt(), pt(t4.prevDerivation), t4.notifySpy, Rt.suppressReactionErrors = false;
        }
        function jt(t4, e3) {
          var r3, n3 = Et(t4);
          try {
            r3 = e3();
          } finally {
            xt(n3);
          }
          return r3;
        }
        function Et(t4) {
          var e3 = Rt.allowStateChanges;
          return Rt.allowStateChanges = t4, e3;
        }
        function xt(t4) {
          Rt.allowStateChanges = t4;
        }
        var St = function(t4) {
          function e3(e4, r3, n3, o3, i2) {
            n3 === void 0 && (n3 = "ObservableValue@" + a2()), i2 === void 0 && (i2 = x2.default);
            var u3 = t4.call(this, n3) || this;
            return u3.enhancer = r3, u3.name = n3, u3.equals = i2, u3.hasUnreportedChange = false, u3.value = r3(e4, void 0, n3), u3;
          }
          return function(t5, e4) {
            function r3() {
              this.constructor = t5;
            }
            S(t5, e4), t5.prototype = e4 === null ? Object.create(e4) : (r3.prototype = e4.prototype, new r3());
          }(e3, t4), e3.prototype.dehanceValue = function(t5) {
            return this.dehancer !== void 0 ? this.dehancer(t5) : t5;
          }, e3.prototype.set = function(t5) {
            this.value;
            if ((t5 = this.prepareNewValue(t5)) !== Rt.UNCHANGED) {
              this.setNewValue(t5);
            }
          }, e3.prototype.prepareNewValue = function(t5) {
            if (ut(this), Xe(this)) {
              var e4 = Ue(this, { object: this, type: "update", newValue: t5 });
              if (!e4)
                return Rt.UNCHANGED;
              t5 = e4.newValue;
            }
            return t5 = this.enhancer(t5, this.value, this.name), this.equals(this.value, t5) ? Rt.UNCHANGED : t5;
          }, e3.prototype.setNewValue = function(t5) {
            var e4 = this.value;
            this.value = t5, this.reportChanged(), Ge(this) && Ye(this, { type: "update", object: this, newValue: t5, oldValue: e4 });
          }, e3.prototype.get = function() {
            return this.reportObserved(), this.dehanceValue(this.value);
          }, e3.prototype.intercept = function(t5) {
            return He(this, t5);
          }, e3.prototype.observe = function(t5, e4) {
            return e4 && t5({ object: this, type: "update", newValue: this.value, oldValue: void 0 }), Fe(this, t5);
          }, e3.prototype.toJSON = function() {
            return this.get();
          }, e3.prototype.toString = function() {
            return this.name + "[" + this.value + "]";
          }, e3.prototype.valueOf = function() {
            return m2(this.get());
          }, e3.prototype[Symbol.toPrimitive] = function() {
            return this.valueOf();
          }, e3;
        }(_2), Pt = y2("ObservableValue", St), kt = function() {
          function t4(t5) {
            this.dependenciesState = J.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isBeingObserved = false, this.isPendingUnobservation = false, this.observers = /* @__PURE__ */ new Set(), this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = J.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + a2(), this.value = new nt(null), this.isComputing = false, this.isRunningSetter = false, this.isTracing = Q.NONE, c2(t5.get, "missing option for computed: get"), this.derivation = t5.get, this.name = t5.name || "ComputedValue@" + a2(), t5.set && (this.setter = mt(this.name + "-setter", t5.set)), this.equals = t5.equals || (t5.compareStructural || t5.struct ? x2.structural : x2.default), this.scope = t5.context, this.requiresReaction = !!t5.requiresReaction, this.keepAlive = !!t5.keepAlive;
          }
          return t4.prototype.onBecomeStale = function() {
            !function(t5) {
              if (t5.lowestObserverState !== J.UP_TO_DATE)
                return;
              t5.lowestObserverState = J.POSSIBLY_STALE, t5.observers.forEach(function(e3) {
                e3.dependenciesState === J.UP_TO_DATE && (e3.dependenciesState = J.POSSIBLY_STALE, e3.isTracing !== Q.NONE && Ut(e3, t5), e3.onBecomeStale());
              });
            }(this);
          }, t4.prototype.onBecomeObserved = function() {
            this.onBecomeObservedListeners && this.onBecomeObservedListeners.forEach(function(t5) {
              return t5();
            });
          }, t4.prototype.onBecomeUnobserved = function() {
            this.onBecomeUnobservedListeners && this.onBecomeUnobservedListeners.forEach(function(t5) {
              return t5();
            });
          }, t4.prototype.get = function() {
            this.isComputing && u2("Cycle detected in computation " + this.name + ": " + this.derivation), Rt.inBatch !== 0 || this.observers.size !== 0 || this.keepAlive ? (Ht(this), it(this) && this.trackAndCompute() && function(t6) {
              if (t6.lowestObserverState === J.STALE)
                return;
              t6.lowestObserverState = J.STALE, t6.observers.forEach(function(e3) {
                e3.dependenciesState === J.POSSIBLY_STALE ? e3.dependenciesState = J.STALE : e3.dependenciesState === J.UP_TO_DATE && (t6.lowestObserverState = J.UP_TO_DATE);
              });
            }(this)) : it(this) && (this.warnAboutUntrackedRead(), Bt(), this.value = this.computeValue(false), Xt());
            var t5 = this.value;
            if (ot(t5))
              throw t5.cause;
            return t5;
          }, t4.prototype.peek = function() {
            var t5 = this.computeValue(false);
            if (ot(t5))
              throw t5.cause;
            return t5;
          }, t4.prototype.set = function(t5) {
            if (this.setter) {
              c2(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = true;
              try {
                this.setter.call(this.scope, t5);
              } finally {
                this.isRunningSetter = false;
              }
            } else
              c2(false, false);
          }, t4.prototype.trackAndCompute = function() {
            var t5 = this.value, e3 = this.dependenciesState === J.NOT_TRACKING, r3 = this.computeValue(true), n3 = e3 || ot(t5) || ot(r3) || !this.equals(t5, r3);
            return n3 && (this.value = r3), n3;
          }, t4.prototype.computeValue = function(t5) {
            var e3;
            if (this.isComputing = true, Rt.computationDepth++, t5)
              e3 = ct(this, this.derivation, this.scope);
            else if (Rt.disableErrorBoundaries === true)
              e3 = this.derivation.call(this.scope);
            else
              try {
                e3 = this.derivation.call(this.scope);
              } catch (t6) {
                e3 = new nt(t6);
              }
            return Rt.computationDepth--, this.isComputing = false, e3;
          }, t4.prototype.suspend = function() {
            this.keepAlive || (st(this), this.value = void 0);
          }, t4.prototype.observe = function(t5, e3) {
            var r3 = this, n3 = true, o3 = void 0;
            return ne(function() {
              var i2 = r3.get();
              if (!n3 || e3) {
                var a3 = ft();
                t5({ type: "update", object: r3, newValue: i2, oldValue: o3 }), pt(a3);
              }
              n3 = false, o3 = i2;
            });
          }, t4.prototype.warnAboutUntrackedRead = function() {
          }, t4.prototype.toJSON = function() {
            return this.get();
          }, t4.prototype.toString = function() {
            return this.name + "[" + this.derivation.toString() + "]";
          }, t4.prototype.valueOf = function() {
            return m2(this.get());
          }, t4.prototype[Symbol.toPrimitive] = function() {
            return this.valueOf();
          }, t4;
        }(), At = y2("ComputedValue", kt), Dt = function() {
          this.version = 5, this.UNCHANGED = {}, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = false, this.allowStateChanges = true, this.allowStateReads = true, this.enforceActions = false, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = false, this.reactionRequiresObservable = false, this.observableRequiresReaction = false, this.computedConfigurable = false, this.disableErrorBoundaries = false, this.suppressReactionErrors = false;
        }, Tt = {};
        function Mt() {
          return typeof window != "undefined" ? window : n2 !== void 0 ? n2 : typeof self != "undefined" ? self : Tt;
        }
        var Nt = true, Ct = false, Rt = function() {
          var t4 = Mt();
          return t4.__mobxInstanceCount > 0 && !t4.__mobxGlobals && (Nt = false), t4.__mobxGlobals && t4.__mobxGlobals.version !== new Dt().version && (Nt = false), Nt ? t4.__mobxGlobals ? (t4.__mobxInstanceCount += 1, t4.__mobxGlobals.UNCHANGED || (t4.__mobxGlobals.UNCHANGED = {}), t4.__mobxGlobals) : (t4.__mobxInstanceCount = 1, t4.__mobxGlobals = new Dt()) : (setTimeout(function() {
            Ct || u2("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
          }, 1), new Dt());
        }();
        function It(t4, e3) {
          t4.observers.add(e3), t4.lowestObserverState > e3.dependenciesState && (t4.lowestObserverState = e3.dependenciesState);
        }
        function Lt(t4, e3) {
          t4.observers.delete(e3), t4.observers.size === 0 && zt(t4);
        }
        function zt(t4) {
          t4.isPendingUnobservation === false && (t4.isPendingUnobservation = true, Rt.pendingUnobservations.push(t4));
        }
        function Bt() {
          Rt.inBatch++;
        }
        function Xt() {
          if (--Rt.inBatch == 0) {
            Yt();
            for (var t4 = Rt.pendingUnobservations, e3 = 0; e3 < t4.length; e3++) {
              var r3 = t4[e3];
              r3.isPendingUnobservation = false, r3.observers.size === 0 && (r3.isBeingObserved && (r3.isBeingObserved = false, r3.onBecomeUnobserved()), r3 instanceof kt && r3.suspend());
            }
            Rt.pendingUnobservations = [];
          }
        }
        function Ht(t4) {
          var e3 = Rt.trackingDerivation;
          return e3 !== null ? (e3.runId !== t4.lastAccessedBy && (t4.lastAccessedBy = e3.runId, e3.newObserving[e3.unboundDepsCount++] = t4, t4.isBeingObserved || (t4.isBeingObserved = true, t4.onBecomeObserved())), true) : (t4.observers.size === 0 && Rt.inBatch > 0 && zt(t4), false);
        }
        function Ut(t4, e3) {
          if (console.log("[mobx.trace] '" + t4.name + "' is invalidated due to a change in: '" + e3.name + "'"), t4.isTracing === Q.BREAK) {
            var r3 = [];
            !function t5(e4, r4, n3) {
              if (r4.length >= 1e3)
                return void r4.push("(and many more)");
              r4.push("" + new Array(n3).join("	") + e4.name), e4.dependencies && e4.dependencies.forEach(function(e5) {
                return t5(e5, r4, n3 + 1);
              });
            }(de(t4), r3, 1), new Function("debugger;\n/*\nTracing '" + t4.name + "'\n\nYou are entering this break point because derivation '" + t4.name + "' is being traced and '" + e3.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (t4 instanceof kt ? t4.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + r3.join("\n") + "\n*/\n    ")();
          }
        }
        var Gt = function() {
          function t4(t5, e3, r3, n3) {
            t5 === void 0 && (t5 = "Reaction@" + a2()), n3 === void 0 && (n3 = false), this.name = t5, this.onInvalidate = e3, this.errorHandler = r3, this.requiresObservable = n3, this.observing = [], this.newObserving = [], this.dependenciesState = J.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + a2(), this.isDisposed = false, this._isScheduled = false, this._isTrackPending = false, this._isRunning = false, this.isTracing = Q.NONE;
          }
          return t4.prototype.onBecomeStale = function() {
            this.schedule();
          }, t4.prototype.schedule = function() {
            this._isScheduled || (this._isScheduled = true, Rt.pendingReactions.push(this), Yt());
          }, t4.prototype.isScheduled = function() {
            return this._isScheduled;
          }, t4.prototype.runReaction = function() {
            if (!this.isDisposed) {
              if (Bt(), this._isScheduled = false, it(this)) {
                this._isTrackPending = true;
                try {
                  this.onInvalidate(), this._isTrackPending;
                } catch (t5) {
                  this.reportExceptionInDerivation(t5);
                }
              }
              Xt();
            }
          }, t4.prototype.track = function(t5) {
            if (!this.isDisposed) {
              Bt();
              this._isRunning = true;
              var e3 = ct(this, t5, void 0);
              this._isRunning = false, this._isTrackPending = false, this.isDisposed && st(this), ot(e3) && this.reportExceptionInDerivation(e3.cause), Xt();
            }
          }, t4.prototype.reportExceptionInDerivation = function(t5) {
            var e3 = this;
            if (this.errorHandler)
              this.errorHandler(t5, this);
            else {
              if (Rt.disableErrorBoundaries)
                throw t5;
              var r3 = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
              Rt.suppressReactionErrors ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)") : console.error(r3, t5), Rt.globalReactionErrorHandlers.forEach(function(r4) {
                return r4(t5, e3);
              });
            }
          }, t4.prototype.dispose = function() {
            this.isDisposed || (this.isDisposed = true, this._isRunning || (Bt(), st(this), Xt()));
          }, t4.prototype.getDisposer = function() {
            var t5 = this.dispose.bind(this);
            return t5[w2] = this, t5;
          }, t4.prototype.toString = function() {
            return "Reaction[" + this.name + "]";
          }, t4.prototype.trace = function(t5) {
            t5 === void 0 && (t5 = false), function() {
              for (var t6 = [], e3 = 0; e3 < arguments.length; e3++)
                t6[e3] = arguments[e3];
              var r3 = false;
              typeof t6[t6.length - 1] == "boolean" && (r3 = t6.pop());
              var n3 = Te(t6);
              if (!n3)
                return u2(false);
              n3.isTracing === Q.NONE && console.log("[mobx.trace] '" + n3.name + "' tracing enabled");
              n3.isTracing = r3 ? Q.BREAK : Q.LOG;
            }(this, t5);
          }, t4;
        }();
        var Ft = function(t4) {
          return t4();
        };
        function Yt() {
          Rt.inBatch > 0 || Rt.isRunningReactions || Ft(Vt);
        }
        function Vt() {
          Rt.isRunningReactions = true;
          for (var t4 = Rt.pendingReactions, e3 = 0; t4.length > 0; ) {
            ++e3 == 100 && (console.error("Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + t4[0]), t4.splice(0));
            for (var r3 = t4.splice(0), n3 = 0, o3 = r3.length; n3 < o3; n3++)
              r3[n3].runReaction();
          }
          Rt.isRunningReactions = false;
        }
        var Wt = y2("Reaction", Gt);
        function Kt(t4) {
          var e3 = Ft;
          Ft = function(r3) {
            return t4(function() {
              return e3(r3);
            });
          };
        }
        function $t(t4) {
          return console.warn("[mobx.spy] Is a no-op in production builds"), function() {
          };
        }
        function Zt() {
          u2(false);
        }
        function qt(t4) {
          return function(e3, r3, n3) {
            if (n3) {
              if (n3.value)
                return { value: mt(t4, n3.value), enumerable: false, configurable: true, writable: true };
              var o3 = n3.initializer;
              return { enumerable: false, configurable: true, writable: true, initializer: function() {
                return mt(t4, o3.call(this));
              } };
            }
            return Jt(t4).apply(this, arguments);
          };
        }
        function Jt(t4) {
          return function(e3, r3, n3) {
            Object.defineProperty(e3, r3, { configurable: true, enumerable: false, get: function() {
            }, set: function(e4) {
              d2(this, r3, Qt(t4, e4));
            } });
          };
        }
        var Qt = function(t4, e3, r3, n3) {
          return arguments.length === 1 && typeof t4 == "function" ? mt(t4.name || "<unnamed action>", t4) : arguments.length === 2 && typeof e3 == "function" ? mt(t4, e3) : arguments.length === 1 && typeof t4 == "string" ? qt(t4) : n3 !== true ? qt(e3).apply(null, arguments) : void d2(t4, e3, mt(t4.name || e3, r3.value, this));
        };
        function te(t4, e3) {
          return Ot(typeof t4 == "string" ? t4 : t4.name || "<unnamed action>", typeof t4 == "function" ? t4 : e3, this, void 0);
        }
        function ee(t4) {
          return typeof t4 == "function" && t4.isMobxAction === true;
        }
        function re(t4, e3, r3) {
          d2(t4, e3, mt(e3, r3.bind(t4)));
        }
        function ne(t4, e3) {
          e3 === void 0 && (e3 = i);
          var r3, n3 = e3 && e3.name || t4.name || "Autorun@" + a2();
          if (!e3.scheduler && !e3.delay)
            r3 = new Gt(n3, function() {
              this.track(c3);
            }, e3.onError, e3.requiresObservable);
          else {
            var o3 = ie(e3), u3 = false;
            r3 = new Gt(n3, function() {
              u3 || (u3 = true, o3(function() {
                u3 = false, r3.isDisposed || r3.track(c3);
              }));
            }, e3.onError, e3.requiresObservable);
          }
          function c3() {
            t4(r3);
          }
          return r3.schedule(), r3.getDisposer();
        }
        Qt.bound = function(t4, e3, r3, n3) {
          return n3 === true ? (re(t4, e3, r3.value), null) : r3 ? { configurable: true, enumerable: false, get: function() {
            return re(this, e3, r3.value || r3.initializer.call(this)), this[e3];
          }, set: Zt } : { enumerable: false, configurable: true, set: function(t5) {
            re(this, e3, t5);
          }, get: function() {
          } };
        };
        var oe = function(t4) {
          return t4();
        };
        function ie(t4) {
          return t4.scheduler ? t4.scheduler : t4.delay ? function(e3) {
            return setTimeout(e3, t4.delay);
          } : oe;
        }
        function ae(t4, e3, r3) {
          r3 === void 0 && (r3 = i);
          var n3, o3, u3, c3 = r3.name || "Reaction@" + a2(), s3 = Qt(c3, r3.onError ? (n3 = r3.onError, o3 = e3, function() {
            try {
              return o3.apply(this, arguments);
            } catch (t5) {
              n3.call(this, t5);
            }
          }) : e3), l3 = !r3.scheduler && !r3.delay, f2 = ie(r3), p2 = true, d3 = false, y3 = r3.compareStructural ? x2.structural : r3.equals || x2.default, h3 = new Gt(c3, function() {
            p2 || l3 ? v3() : d3 || (d3 = true, f2(v3));
          }, r3.onError, r3.requiresObservable);
          function v3() {
            if (d3 = false, !h3.isDisposed) {
              var e4 = false;
              h3.track(function() {
                var r4 = t4(h3);
                e4 = p2 || !y3(u3, r4), u3 = r4;
              }), p2 && r3.fireImmediately && s3(u3, h3), p2 || e4 !== true || s3(u3, h3), p2 && (p2 = false);
            }
          }
          return h3.schedule(), h3.getDisposer();
        }
        function ue(t4, e3, r3) {
          return ce("onBecomeUnobserved", t4, e3, r3);
        }
        function ce(t4, e3, r3, n3) {
          var o3 = typeof n3 == "function" ? dr(e3, r3) : dr(e3), i2 = typeof n3 == "function" ? n3 : r3, a3 = t4 + "Listeners";
          return o3[a3] ? o3[a3].add(i2) : o3[a3] = /* @__PURE__ */ new Set([i2]), typeof o3[t4] != "function" ? u2(false) : function() {
            var t5 = o3[a3];
            t5 && (t5.delete(i2), t5.size === 0 && delete o3[a3]);
          };
        }
        function se(t4) {
          var e3 = t4.enforceActions, r3 = t4.computedRequiresReaction, n3 = t4.computedConfigurable, o3 = t4.disableErrorBoundaries, i2 = t4.reactionScheduler, a3 = t4.reactionRequiresObservable, c3 = t4.observableRequiresReaction;
          if (t4.isolateGlobalState === true && ((Rt.pendingReactions.length || Rt.inBatch || Rt.isRunningReactions) && u2("isolateGlobalState should be called before MobX is running any reactions"), Ct = true, Nt && (--Mt().__mobxInstanceCount == 0 && (Mt().__mobxGlobals = void 0), Rt = new Dt())), e3 !== void 0) {
            var s3 = void 0;
            switch (e3) {
              case true:
              case "observed":
                s3 = true;
                break;
              case false:
              case "never":
                s3 = false;
                break;
              case "strict":
              case "always":
                s3 = "strict";
                break;
              default:
                u2("Invalid value for 'enforceActions': '" + e3 + "', expected 'never', 'always' or 'observed'");
            }
            Rt.enforceActions = s3, Rt.allowStateChanges = s3 !== true && s3 !== "strict";
          }
          r3 !== void 0 && (Rt.computedRequiresReaction = !!r3), a3 !== void 0 && (Rt.reactionRequiresObservable = !!a3), c3 !== void 0 && (Rt.observableRequiresReaction = !!c3, Rt.allowStateReads = !Rt.observableRequiresReaction), n3 !== void 0 && (Rt.computedConfigurable = !!n3), o3 !== void 0 && (o3 === true && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), Rt.disableErrorBoundaries = !!o3), i2 && Kt(i2);
        }
        function le(t4, e3, r3, n3) {
          var o3 = fe(n3 = G(n3));
          return I2(t4), ur(t4, n3.name, o3.enhancer), e3 && pe(t4, e3, r3, o3), t4;
        }
        function fe(t4) {
          return t4.defaultDecorator || (t4.deep === false ? V : F);
        }
        function pe(t4, e3, r3, n3) {
          var o3, i2;
          Bt();
          try {
            var a3 = O2(e3);
            try {
              for (var u3 = k2(a3), c3 = u3.next(); !c3.done; c3 = u3.next()) {
                var s3 = c3.value, l3 = Object.getOwnPropertyDescriptor(e3, s3);
                0;
                var f2 = (r3 && s3 in r3 ? r3[s3] : l3.get ? tt : n3)(t4, s3, l3, true);
                f2 && Object.defineProperty(t4, s3, f2);
              }
            } catch (t5) {
              o3 = { error: t5 };
            } finally {
              try {
                c3 && !c3.done && (i2 = u3.return) && i2.call(u3);
              } finally {
                if (o3)
                  throw o3.error;
              }
            }
          } finally {
            Xt();
          }
        }
        function de(t4, e3) {
          return ye(dr(t4, e3));
        }
        function ye(t4) {
          var e3, r3, n3 = { name: t4.name };
          return t4.observing && t4.observing.length > 0 && (n3.dependencies = (e3 = t4.observing, r3 = [], e3.forEach(function(t5) {
            r3.indexOf(t5) === -1 && r3.push(t5);
          }), r3).map(ye)), n3;
        }
        var he = 0;
        function ve() {
          this.message = "FLOW_CANCELLED";
        }
        function be(t4) {
          arguments.length !== 1 && u2("Flow expects 1 argument and cannot be used as decorator");
          var e3 = t4.name || "<unnamed flow>";
          return function() {
            var r3, n3 = this, o3 = arguments, i2 = ++he, a3 = Qt(e3 + " - runid: " + i2 + " - init", t4).apply(n3, o3), u3 = void 0, c3 = new Promise(function(t5, n4) {
              var o4 = 0;
              function c4(t6) {
                var r4;
                u3 = void 0;
                try {
                  r4 = Qt(e3 + " - runid: " + i2 + " - yield " + o4++, a3.next).call(a3, t6);
                } catch (t7) {
                  return n4(t7);
                }
                l3(r4);
              }
              function s3(t6) {
                var r4;
                u3 = void 0;
                try {
                  r4 = Qt(e3 + " - runid: " + i2 + " - yield " + o4++, a3.throw).call(a3, t6);
                } catch (t7) {
                  return n4(t7);
                }
                l3(r4);
              }
              function l3(e4) {
                if (!e4 || typeof e4.then != "function")
                  return e4.done ? t5(e4.value) : (u3 = Promise.resolve(e4.value)).then(c4, s3);
                e4.then(l3, n4);
              }
              r3 = n4, c4(void 0);
            });
            return c3.cancel = Qt(e3 + " - runid: " + i2 + " - cancel", function() {
              try {
                u3 && ge(u3);
                var t5 = a3.return(void 0), e4 = Promise.resolve(t5.value);
                e4.then(l2, l2), ge(e4), r3(new ve());
              } catch (t6) {
                r3(t6);
              }
            }), c3;
          };
        }
        function ge(t4) {
          typeof t4.cancel == "function" && t4.cancel();
        }
        function me(t4, e3) {
          if (t4 == null)
            return false;
          if (e3 !== void 0) {
            if (pr(t4) === false)
              return false;
            if (!t4[w2].values.has(e3))
              return false;
            var r3 = dr(t4, e3);
            return At(r3);
          }
          return At(t4);
        }
        function Oe(t4) {
          return arguments.length > 1 ? u2(false) : me(t4);
        }
        function we(t4, e3) {
          return typeof e3 != "string" ? u2(false) : me(t4, e3);
        }
        function _e(t4, e3) {
          return t4 != null && (e3 !== void 0 ? !!pr(t4) && t4[w2].values.has(e3) : pr(t4) || !!t4[w2] || j2(t4) || Wt(t4) || At(t4));
        }
        function je(t4) {
          return arguments.length !== 1 && u2(false), _e(t4);
        }
        function Ee(t4) {
          return pr(t4) ? t4[w2].getKeys() : rr(t4) || ir(t4) ? Array.from(t4.keys()) : Je(t4) ? t4.map(function(t5, e3) {
            return e3;
          }) : u2(false);
        }
        function xe(t4) {
          return pr(t4) ? Ee(t4).map(function(e3) {
            return t4[e3];
          }) : rr(t4) ? Ee(t4).map(function(e3) {
            return t4.get(e3);
          }) : ir(t4) ? Array.from(t4.values()) : Je(t4) ? t4.slice() : u2(false);
        }
        function Se(t4) {
          return pr(t4) ? Ee(t4).map(function(e3) {
            return [e3, t4[e3]];
          }) : rr(t4) ? Ee(t4).map(function(e3) {
            return [e3, t4.get(e3)];
          }) : ir(t4) ? Array.from(t4.entries()) : Je(t4) ? t4.map(function(t5, e3) {
            return [e3, t5];
          }) : u2(false);
        }
        function Pe(t4, e3, r3, n3) {
          return typeof r3 == "function" ? function(t5, e4, r4, n4) {
            return yr(t5, e4).observe(r4, n4);
          }(t4, e3, r3, n3) : function(t5, e4, r4) {
            return yr(t5).observe(e4, r4);
          }(t4, e3, r3);
        }
        ve.prototype = Object.create(Error.prototype);
        var ke = { detectCycles: true, exportMapsAsObjects: true, recurseEverything: false };
        function Ae(t4, e3, r3, n3) {
          return n3.detectCycles && t4.set(e3, r3), r3;
        }
        function De(t4, e3) {
          var r3;
          return typeof e3 == "boolean" && (e3 = { detectCycles: e3 }), e3 || (e3 = ke), e3.detectCycles = e3.detectCycles === void 0 ? e3.recurseEverything === true : e3.detectCycles === true, e3.detectCycles && (r3 = /* @__PURE__ */ new Map()), function t5(e4, r4, n3) {
            if (!r4.recurseEverything && !je(e4))
              return e4;
            if (typeof e4 != "object")
              return e4;
            if (e4 === null)
              return null;
            if (e4 instanceof Date)
              return e4;
            if (Pt(e4))
              return t5(e4.get(), r4, n3);
            if (je(e4) && Ee(e4), r4.detectCycles === true && e4 !== null && n3.has(e4))
              return n3.get(e4);
            if (Je(e4) || Array.isArray(e4)) {
              var o3 = Ae(n3, e4, [], r4), i2 = e4.map(function(e5) {
                return t5(e5, r4, n3);
              });
              o3.length = i2.length;
              for (var a3 = 0, u3 = i2.length; a3 < u3; a3++)
                o3[a3] = i2[a3];
              return o3;
            }
            if (ir(e4) || Object.getPrototypeOf(e4) === Set.prototype) {
              if (r4.exportMapsAsObjects === false) {
                var c3 = Ae(n3, e4, /* @__PURE__ */ new Set(), r4);
                return e4.forEach(function(e5) {
                  c3.add(t5(e5, r4, n3));
                }), c3;
              }
              var s3 = Ae(n3, e4, [], r4);
              return e4.forEach(function(e5) {
                s3.push(t5(e5, r4, n3));
              }), s3;
            }
            if (rr(e4) || Object.getPrototypeOf(e4) === Map.prototype) {
              if (r4.exportMapsAsObjects === false) {
                var l3 = Ae(n3, e4, /* @__PURE__ */ new Map(), r4);
                return e4.forEach(function(e5, o4) {
                  l3.set(o4, t5(e5, r4, n3));
                }), l3;
              }
              var f2 = Ae(n3, e4, {}, r4);
              return e4.forEach(function(e5, o4) {
                f2[o4] = t5(e5, r4, n3);
              }), f2;
            }
            var p2 = Ae(n3, e4, {}, r4);
            return b2(e4).forEach(function(o4) {
              p2[o4] = t5(e4[o4], r4, n3);
            }), p2;
          }(t4, e3, r3);
        }
        function Te(t4) {
          switch (t4.length) {
            case 0:
              return Rt.trackingDerivation;
            case 1:
              return dr(t4[0]);
            case 2:
              return dr(t4[0], t4[1]);
          }
        }
        function Me(t4, e3) {
          e3 === void 0 && (e3 = void 0), Bt();
          try {
            return t4.apply(e3);
          } finally {
            Xt();
          }
        }
        function Ne(t4, e3, r3) {
          return arguments.length === 1 || e3 && typeof e3 == "object" ? Re(t4, e3) : Ce(t4, e3, r3 || {});
        }
        function Ce(t4, e3, r3) {
          var n3;
          typeof r3.timeout == "number" && (n3 = setTimeout(function() {
            if (!i2[w2].isDisposed) {
              i2();
              var t5 = new Error("WHEN_TIMEOUT");
              if (!r3.onError)
                throw t5;
              r3.onError(t5);
            }
          }, r3.timeout)), r3.name = r3.name || "When@" + a2();
          var o3 = mt(r3.name + "-effect", e3), i2 = ne(function(e4) {
            t4() && (e4.dispose(), n3 && clearTimeout(n3), o3());
          }, r3);
          return i2;
        }
        function Re(t4, e3) {
          var r3;
          var n3 = new Promise(function(n4, o3) {
            var i2 = Ce(t4, n4, P2(P2({}, e3), { onError: o3 }));
            r3 = function() {
              i2(), o3("WHEN_CANCELLED");
            };
          });
          return n3.cancel = r3, n3;
        }
        function Ie(t4) {
          return t4[w2];
        }
        function Le(t4) {
          return typeof t4 == "string" || typeof t4 == "number" || typeof t4 == "symbol";
        }
        var ze = { has: function(t4, e3) {
          if (e3 === w2 || e3 === "constructor" || e3 === T2)
            return true;
          var r3 = Ie(t4);
          return Le(e3) ? r3.has(e3) : e3 in t4;
        }, get: function(t4, e3) {
          if (e3 === w2 || e3 === "constructor" || e3 === T2)
            return t4[e3];
          var r3 = Ie(t4), n3 = r3.values.get(e3);
          if (n3 instanceof _2) {
            var o3 = n3.get();
            return o3 === void 0 && r3.has(e3), o3;
          }
          return Le(e3) && r3.has(e3), t4[e3];
        }, set: function(t4, e3, r3) {
          return !!Le(e3) && (function t5(e4, r4, n3) {
            if (arguments.length !== 2 || ir(e4))
              if (pr(e4)) {
                var o3 = e4[w2], i2 = o3.values.get(r4);
                i2 ? o3.write(r4, n3) : o3.addObservableProp(r4, n3, o3.defaultEnhancer);
              } else if (rr(e4))
                e4.set(r4, n3);
              else if (ir(e4))
                e4.add(r4);
              else {
                if (!Je(e4))
                  return u2(false);
                typeof r4 != "number" && (r4 = parseInt(r4, 10)), c2(r4 >= 0, "Not a valid index: '" + r4 + "'"), Bt(), r4 >= e4.length && (e4.length = r4 + 1), e4[r4] = n3, Xt();
              }
            else {
              Bt();
              var a3 = r4;
              try {
                for (var s3 in a3)
                  t5(e4, s3, a3[s3]);
              } finally {
                Xt();
              }
            }
          }(t4, e3, r3), true);
        }, deleteProperty: function(t4, e3) {
          return !!Le(e3) && (Ie(t4).remove(e3), true);
        }, ownKeys: function(t4) {
          return Ie(t4).keysAtom.reportObserved(), Reflect.ownKeys(t4);
        }, preventExtensions: function(t4) {
          return u2("Dynamic observable objects cannot be frozen"), false;
        } };
        function Be(t4) {
          var e3 = new Proxy(t4, ze);
          return t4[w2].proxy = e3, e3;
        }
        function Xe(t4) {
          return t4.interceptors !== void 0 && t4.interceptors.length > 0;
        }
        function He(t4, e3) {
          var r3 = t4.interceptors || (t4.interceptors = []);
          return r3.push(e3), s2(function() {
            var t5 = r3.indexOf(e3);
            t5 !== -1 && r3.splice(t5, 1);
          });
        }
        function Ue(t4, e3) {
          var r3 = ft();
          try {
            for (var n3 = D(t4.interceptors || []), o3 = 0, i2 = n3.length; o3 < i2 && (c2(!(e3 = n3[o3](e3)) || e3.type, "Intercept handlers should return nothing or a change object"), e3); o3++)
              ;
            return e3;
          } finally {
            pt(r3);
          }
        }
        function Ge(t4) {
          return t4.changeListeners !== void 0 && t4.changeListeners.length > 0;
        }
        function Fe(t4, e3) {
          var r3 = t4.changeListeners || (t4.changeListeners = []);
          return r3.push(e3), s2(function() {
            var t5 = r3.indexOf(e3);
            t5 !== -1 && r3.splice(t5, 1);
          });
        }
        function Ye(t4, e3) {
          var r3 = ft(), n3 = t4.changeListeners;
          if (n3) {
            for (var o3 = 0, i2 = (n3 = n3.slice()).length; o3 < i2; o3++)
              n3[o3](e3);
            pt(r3);
          }
        }
        var Ve = { get: function(t4, e3) {
          return e3 === w2 ? t4[w2] : e3 === "length" ? t4[w2].getArrayLength() : typeof e3 == "number" ? $e.get.call(t4, e3) : typeof e3 != "string" || isNaN(e3) ? $e.hasOwnProperty(e3) ? $e[e3] : t4[e3] : $e.get.call(t4, parseInt(e3));
        }, set: function(t4, e3, r3) {
          return e3 === "length" && t4[w2].setArrayLength(r3), typeof e3 == "number" && $e.set.call(t4, e3, r3), typeof e3 == "symbol" || isNaN(e3) ? t4[e3] = r3 : $e.set.call(t4, parseInt(e3), r3), true;
        }, preventExtensions: function(t4) {
          return u2("Observable arrays cannot be frozen"), false;
        } };
        function We(t4, e3, r3, n3) {
          r3 === void 0 && (r3 = "ObservableArray@" + a2()), n3 === void 0 && (n3 = false);
          var o3, i2, u3, c3 = new Ke(r3, e3, n3);
          o3 = c3.values, i2 = w2, u3 = c3, Object.defineProperty(o3, i2, { enumerable: false, writable: false, configurable: true, value: u3 });
          var s3 = new Proxy(c3.values, Ve);
          if (c3.proxy = s3, t4 && t4.length) {
            var l3 = Et(true);
            c3.spliceWithArray(0, 0, t4), xt(l3);
          }
          return s3;
        }
        var Ke = function() {
          function t4(t5, e3, r3) {
            this.owned = r3, this.values = [], this.proxy = void 0, this.lastKnownLength = 0, this.atom = new _2(t5 || "ObservableArray@" + a2()), this.enhancer = function(r4, n3) {
              return e3(r4, n3, t5 + "[..]");
            };
          }
          return t4.prototype.dehanceValue = function(t5) {
            return this.dehancer !== void 0 ? this.dehancer(t5) : t5;
          }, t4.prototype.dehanceValues = function(t5) {
            return this.dehancer !== void 0 && t5.length > 0 ? t5.map(this.dehancer) : t5;
          }, t4.prototype.intercept = function(t5) {
            return He(this, t5);
          }, t4.prototype.observe = function(t5, e3) {
            return e3 === void 0 && (e3 = false), e3 && t5({ object: this.proxy, type: "splice", index: 0, added: this.values.slice(), addedCount: this.values.length, removed: [], removedCount: 0 }), Fe(this, t5);
          }, t4.prototype.getArrayLength = function() {
            return this.atom.reportObserved(), this.values.length;
          }, t4.prototype.setArrayLength = function(t5) {
            if (typeof t5 != "number" || t5 < 0)
              throw new Error("[mobx.array] Out of range: " + t5);
            var e3 = this.values.length;
            if (t5 !== e3)
              if (t5 > e3) {
                for (var r3 = new Array(t5 - e3), n3 = 0; n3 < t5 - e3; n3++)
                  r3[n3] = void 0;
                this.spliceWithArray(e3, 0, r3);
              } else
                this.spliceWithArray(t5, e3 - t5);
          }, t4.prototype.updateArrayLength = function(t5, e3) {
            if (t5 !== this.lastKnownLength)
              throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
            this.lastKnownLength += e3;
          }, t4.prototype.spliceWithArray = function(t5, e3, r3) {
            var n3 = this;
            ut(this.atom);
            var i2 = this.values.length;
            if (t5 === void 0 ? t5 = 0 : t5 > i2 ? t5 = i2 : t5 < 0 && (t5 = Math.max(0, i2 + t5)), e3 = arguments.length === 1 ? i2 - t5 : e3 == null ? 0 : Math.max(0, Math.min(e3, i2 - t5)), r3 === void 0 && (r3 = o2), Xe(this)) {
              var a3 = Ue(this, { object: this.proxy, type: "splice", index: t5, removedCount: e3, added: r3 });
              if (!a3)
                return o2;
              e3 = a3.removedCount, r3 = a3.added;
            }
            r3 = r3.length === 0 ? r3 : r3.map(function(t6) {
              return n3.enhancer(t6, void 0);
            });
            var u3 = this.spliceItemsIntoValues(t5, e3, r3);
            return e3 === 0 && r3.length === 0 || this.notifyArraySplice(t5, r3, u3), this.dehanceValues(u3);
          }, t4.prototype.spliceItemsIntoValues = function(t5, e3, r3) {
            var n3;
            if (r3.length < 1e4)
              return (n3 = this.values).splice.apply(n3, D([t5, e3], r3));
            var o3 = this.values.slice(t5, t5 + e3);
            return this.values = this.values.slice(0, t5).concat(r3, this.values.slice(t5 + e3)), o3;
          }, t4.prototype.notifyArrayChildUpdate = function(t5, e3, r3) {
            var n3 = !this.owned && false, o3 = Ge(this), i2 = o3 || n3 ? { object: this.proxy, type: "update", index: t5, newValue: e3, oldValue: r3 } : null;
            this.atom.reportChanged(), o3 && Ye(this, i2);
          }, t4.prototype.notifyArraySplice = function(t5, e3, r3) {
            var n3 = !this.owned && false, o3 = Ge(this), i2 = o3 || n3 ? { object: this.proxy, type: "splice", index: t5, removed: r3, added: e3, removedCount: r3.length, addedCount: e3.length } : null;
            this.atom.reportChanged(), o3 && Ye(this, i2);
          }, t4;
        }(), $e = { intercept: function(t4) {
          return this[w2].intercept(t4);
        }, observe: function(t4, e3) {
          return e3 === void 0 && (e3 = false), this[w2].observe(t4, e3);
        }, clear: function() {
          return this.splice(0);
        }, replace: function(t4) {
          var e3 = this[w2];
          return e3.spliceWithArray(0, e3.values.length, t4);
        }, toJS: function() {
          return this.slice();
        }, toJSON: function() {
          return this.toJS();
        }, splice: function(t4, e3) {
          for (var r3 = [], n3 = 2; n3 < arguments.length; n3++)
            r3[n3 - 2] = arguments[n3];
          var o3 = this[w2];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return o3.spliceWithArray(t4);
            case 2:
              return o3.spliceWithArray(t4, e3);
          }
          return o3.spliceWithArray(t4, e3, r3);
        }, spliceWithArray: function(t4, e3, r3) {
          return this[w2].spliceWithArray(t4, e3, r3);
        }, push: function() {
          for (var t4 = [], e3 = 0; e3 < arguments.length; e3++)
            t4[e3] = arguments[e3];
          var r3 = this[w2];
          return r3.spliceWithArray(r3.values.length, 0, t4), r3.values.length;
        }, pop: function() {
          return this.splice(Math.max(this[w2].values.length - 1, 0), 1)[0];
        }, shift: function() {
          return this.splice(0, 1)[0];
        }, unshift: function() {
          for (var t4 = [], e3 = 0; e3 < arguments.length; e3++)
            t4[e3] = arguments[e3];
          var r3 = this[w2];
          return r3.spliceWithArray(0, 0, t4), r3.values.length;
        }, reverse: function() {
          var t4 = this.slice();
          return t4.reverse.apply(t4, arguments);
        }, sort: function(t4) {
          var e3 = this.slice();
          return e3.sort.apply(e3, arguments);
        }, remove: function(t4) {
          var e3 = this[w2], r3 = e3.dehanceValues(e3.values).indexOf(t4);
          return r3 > -1 && (this.splice(r3, 1), true);
        }, get: function(t4) {
          var e3 = this[w2];
          if (e3) {
            if (t4 < e3.values.length)
              return e3.atom.reportObserved(), e3.dehanceValue(e3.values[t4]);
            console.warn("[mobx.array] Attempt to read an array index (" + t4 + ") that is out of bounds (" + e3.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
          }
        }, set: function(t4, e3) {
          var r3 = this[w2], n3 = r3.values;
          if (t4 < n3.length) {
            ut(r3.atom);
            var o3 = n3[t4];
            if (Xe(r3)) {
              var i2 = Ue(r3, { type: "update", object: r3.proxy, index: t4, newValue: e3 });
              if (!i2)
                return;
              e3 = i2.newValue;
            }
            (e3 = r3.enhancer(e3, o3)) !== o3 && (n3[t4] = e3, r3.notifyArrayChildUpdate(t4, e3, o3));
          } else {
            if (t4 !== n3.length)
              throw new Error("[mobx.array] Index out of bounds, " + t4 + " is larger than " + n3.length);
            r3.spliceWithArray(t4, 0, [e3]);
          }
        } };
        ["concat", "flat", "includes", "indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function(t4) {
          typeof Array.prototype[t4] == "function" && ($e[t4] = function() {
            var e3 = this[w2];
            e3.atom.reportObserved();
            var r3 = e3.dehanceValues(e3.values);
            return r3[t4].apply(r3, arguments);
          });
        }), ["every", "filter", "find", "findIndex", "flatMap", "forEach", "map", "some"].forEach(function(t4) {
          typeof Array.prototype[t4] == "function" && ($e[t4] = function(e3, r3) {
            var n3 = this, o3 = this[w2];
            return o3.atom.reportObserved(), o3.dehanceValues(o3.values)[t4](function(t5, o4) {
              return e3.call(r3, t5, o4, n3);
            }, r3);
          });
        }), ["reduce", "reduceRight"].forEach(function(t4) {
          $e[t4] = function() {
            var e3 = this, r3 = this[w2];
            r3.atom.reportObserved();
            var n3 = arguments[0];
            return arguments[0] = function(t5, o3, i2) {
              return o3 = r3.dehanceValue(o3), n3(t5, o3, i2, e3);
            }, r3.values[t4].apply(r3.values, arguments);
          };
        });
        var Ze, qe = y2("ObservableArrayAdministration", Ke);
        function Je(t4) {
          return f(t4) && qe(t4[w2]);
        }
        var Qe, tr = {}, er = function() {
          function t4(t5, e3, r3) {
            if (e3 === void 0 && (e3 = B), r3 === void 0 && (r3 = "ObservableMap@" + a2()), this.enhancer = e3, this.name = r3, this[Ze] = tr, this._keysAtom = E(this.name + ".keys()"), this[Symbol.toStringTag] = "Map", typeof Map != "function")
              throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
            this._data = /* @__PURE__ */ new Map(), this._hasMap = /* @__PURE__ */ new Map(), this.merge(t5);
          }
          return t4.prototype._has = function(t5) {
            return this._data.has(t5);
          }, t4.prototype.has = function(t5) {
            var e3 = this;
            if (!Rt.trackingDerivation)
              return this._has(t5);
            var r3 = this._hasMap.get(t5);
            if (!r3) {
              var n3 = r3 = new St(this._has(t5), X, this.name + "." + g2(t5) + "?", false);
              this._hasMap.set(t5, n3), ue(n3, function() {
                return e3._hasMap.delete(t5);
              });
            }
            return r3.get();
          }, t4.prototype.set = function(t5, e3) {
            var r3 = this._has(t5);
            if (Xe(this)) {
              var n3 = Ue(this, { type: r3 ? "update" : "add", object: this, newValue: e3, name: t5 });
              if (!n3)
                return this;
              e3 = n3.newValue;
            }
            return r3 ? this._updateValue(t5, e3) : this._addValue(t5, e3), this;
          }, t4.prototype.delete = function(t5) {
            var e3 = this;
            if ((ut(this._keysAtom), Xe(this)) && !(n3 = Ue(this, { type: "delete", object: this, name: t5 })))
              return false;
            if (this._has(t5)) {
              var r3 = Ge(this), n3 = r3 ? { type: "delete", object: this, oldValue: this._data.get(t5).value, name: t5 } : null;
              return Me(function() {
                e3._keysAtom.reportChanged(), e3._updateHasMapEntry(t5, false), e3._data.get(t5).setNewValue(void 0), e3._data.delete(t5);
              }), r3 && Ye(this, n3), true;
            }
            return false;
          }, t4.prototype._updateHasMapEntry = function(t5, e3) {
            var r3 = this._hasMap.get(t5);
            r3 && r3.setNewValue(e3);
          }, t4.prototype._updateValue = function(t5, e3) {
            var r3 = this._data.get(t5);
            if ((e3 = r3.prepareNewValue(e3)) !== Rt.UNCHANGED) {
              var n3 = Ge(this), o3 = n3 ? { type: "update", object: this, oldValue: r3.value, name: t5, newValue: e3 } : null;
              r3.setNewValue(e3), n3 && Ye(this, o3);
            }
          }, t4.prototype._addValue = function(t5, e3) {
            var r3 = this;
            ut(this._keysAtom), Me(function() {
              var n4 = new St(e3, r3.enhancer, r3.name + "." + g2(t5), false);
              r3._data.set(t5, n4), e3 = n4.value, r3._updateHasMapEntry(t5, true), r3._keysAtom.reportChanged();
            });
            var n3 = Ge(this), o3 = n3 ? { type: "add", object: this, name: t5, newValue: e3 } : null;
            n3 && Ye(this, o3);
          }, t4.prototype.get = function(t5) {
            return this.has(t5) ? this.dehanceValue(this._data.get(t5).get()) : this.dehanceValue(void 0);
          }, t4.prototype.dehanceValue = function(t5) {
            return this.dehancer !== void 0 ? this.dehancer(t5) : t5;
          }, t4.prototype.keys = function() {
            return this._keysAtom.reportObserved(), this._data.keys();
          }, t4.prototype.values = function() {
            var t5 = this, e3 = this.keys();
            return mr({ next: function() {
              var r3 = e3.next(), n3 = r3.done, o3 = r3.value;
              return { done: n3, value: n3 ? void 0 : t5.get(o3) };
            } });
          }, t4.prototype.entries = function() {
            var t5 = this, e3 = this.keys();
            return mr({ next: function() {
              var r3 = e3.next(), n3 = r3.done, o3 = r3.value;
              return { done: n3, value: n3 ? void 0 : [o3, t5.get(o3)] };
            } });
          }, t4.prototype[Ze = w2, Symbol.iterator] = function() {
            return this.entries();
          }, t4.prototype.forEach = function(t5, e3) {
            var r3, n3;
            try {
              for (var o3 = k2(this), i2 = o3.next(); !i2.done; i2 = o3.next()) {
                var a3 = A(i2.value, 2), u3 = a3[0], c3 = a3[1];
                t5.call(e3, c3, u3, this);
              }
            } catch (t6) {
              r3 = { error: t6 };
            } finally {
              try {
                i2 && !i2.done && (n3 = o3.return) && n3.call(o3);
              } finally {
                if (r3)
                  throw r3.error;
              }
            }
          }, t4.prototype.merge = function(t5) {
            var e3 = this;
            return rr(t5) && (t5 = t5.toJS()), Me(function() {
              var r3 = Et(true);
              try {
                p(t5) ? b2(t5).forEach(function(r4) {
                  return e3.set(r4, t5[r4]);
                }) : Array.isArray(t5) ? t5.forEach(function(t6) {
                  var r4 = A(t6, 2), n3 = r4[0], o3 = r4[1];
                  return e3.set(n3, o3);
                }) : h2(t5) ? (t5.constructor !== Map && u2("Cannot initialize from classes that inherit from Map: " + t5.constructor.name), t5.forEach(function(t6, r4) {
                  return e3.set(r4, t6);
                })) : t5 != null && u2("Cannot initialize map from " + t5);
              } finally {
                xt(r3);
              }
            }), this;
          }, t4.prototype.clear = function() {
            var t5 = this;
            Me(function() {
              lt(function() {
                var e3, r3;
                try {
                  for (var n3 = k2(t5.keys()), o3 = n3.next(); !o3.done; o3 = n3.next()) {
                    var i2 = o3.value;
                    t5.delete(i2);
                  }
                } catch (t6) {
                  e3 = { error: t6 };
                } finally {
                  try {
                    o3 && !o3.done && (r3 = n3.return) && r3.call(n3);
                  } finally {
                    if (e3)
                      throw e3.error;
                  }
                }
              });
            });
          }, t4.prototype.replace = function(t5) {
            var e3 = this;
            return Me(function() {
              var r3, n3, o3, i2, a3 = function(t6) {
                if (h2(t6) || rr(t6))
                  return t6;
                if (Array.isArray(t6))
                  return new Map(t6);
                if (p(t6)) {
                  var e4 = /* @__PURE__ */ new Map();
                  for (var r4 in t6)
                    e4.set(r4, t6[r4]);
                  return e4;
                }
                return u2("Cannot convert to map from '" + t6 + "'");
              }(t5), c3 = /* @__PURE__ */ new Map(), s3 = false;
              try {
                for (var l3 = k2(e3._data.keys()), f2 = l3.next(); !f2.done; f2 = l3.next()) {
                  var d3 = f2.value;
                  if (!a3.has(d3))
                    if (e3.delete(d3))
                      s3 = true;
                    else {
                      var y3 = e3._data.get(d3);
                      c3.set(d3, y3);
                    }
                }
              } catch (t6) {
                r3 = { error: t6 };
              } finally {
                try {
                  f2 && !f2.done && (n3 = l3.return) && n3.call(l3);
                } finally {
                  if (r3)
                    throw r3.error;
                }
              }
              try {
                for (var v3 = k2(a3.entries()), b3 = v3.next(); !b3.done; b3 = v3.next()) {
                  var g3 = A(b3.value, 2), m3 = (d3 = g3[0], y3 = g3[1], e3._data.has(d3));
                  if (e3.set(d3, y3), e3._data.has(d3)) {
                    var O3 = e3._data.get(d3);
                    c3.set(d3, O3), m3 || (s3 = true);
                  }
                }
              } catch (t6) {
                o3 = { error: t6 };
              } finally {
                try {
                  b3 && !b3.done && (i2 = v3.return) && i2.call(v3);
                } finally {
                  if (o3)
                    throw o3.error;
                }
              }
              if (!s3)
                if (e3._data.size !== c3.size)
                  e3._keysAtom.reportChanged();
                else
                  for (var w3 = e3._data.keys(), _3 = c3.keys(), j3 = w3.next(), E2 = _3.next(); !j3.done; ) {
                    if (j3.value !== E2.value) {
                      e3._keysAtom.reportChanged();
                      break;
                    }
                    j3 = w3.next(), E2 = _3.next();
                  }
              e3._data = c3;
            }), this;
          }, Object.defineProperty(t4.prototype, "size", { get: function() {
            return this._keysAtom.reportObserved(), this._data.size;
          }, enumerable: true, configurable: true }), t4.prototype.toPOJO = function() {
            var t5, e3, r3 = {};
            try {
              for (var n3 = k2(this), o3 = n3.next(); !o3.done; o3 = n3.next()) {
                var i2 = A(o3.value, 2), a3 = i2[0], u3 = i2[1];
                r3[typeof a3 == "symbol" ? a3 : g2(a3)] = u3;
              }
            } catch (e4) {
              t5 = { error: e4 };
            } finally {
              try {
                o3 && !o3.done && (e3 = n3.return) && e3.call(n3);
              } finally {
                if (t5)
                  throw t5.error;
              }
            }
            return r3;
          }, t4.prototype.toJS = function() {
            return new Map(this);
          }, t4.prototype.toJSON = function() {
            return this.toPOJO();
          }, t4.prototype.toString = function() {
            var t5 = this;
            return this.name + "[{ " + Array.from(this.keys()).map(function(e3) {
              return g2(e3) + ": " + t5.get(e3);
            }).join(", ") + " }]";
          }, t4.prototype.observe = function(t5, e3) {
            return Fe(this, t5);
          }, t4.prototype.intercept = function(t5) {
            return He(this, t5);
          }, t4;
        }(), rr = y2("ObservableMap", er), nr = {}, or = function() {
          function t4(t5, e3, r3) {
            if (e3 === void 0 && (e3 = B), r3 === void 0 && (r3 = "ObservableSet@" + a2()), this.name = r3, this[Qe] = nr, this._data = /* @__PURE__ */ new Set(), this._atom = E(this.name), this[Symbol.toStringTag] = "Set", typeof Set != "function")
              throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
            this.enhancer = function(t6, n3) {
              return e3(t6, n3, r3);
            }, t5 && this.replace(t5);
          }
          return t4.prototype.dehanceValue = function(t5) {
            return this.dehancer !== void 0 ? this.dehancer(t5) : t5;
          }, t4.prototype.clear = function() {
            var t5 = this;
            Me(function() {
              lt(function() {
                var e3, r3;
                try {
                  for (var n3 = k2(t5._data.values()), o3 = n3.next(); !o3.done; o3 = n3.next()) {
                    var i2 = o3.value;
                    t5.delete(i2);
                  }
                } catch (t6) {
                  e3 = { error: t6 };
                } finally {
                  try {
                    o3 && !o3.done && (r3 = n3.return) && r3.call(n3);
                  } finally {
                    if (e3)
                      throw e3.error;
                  }
                }
              });
            });
          }, t4.prototype.forEach = function(t5, e3) {
            var r3, n3;
            try {
              for (var o3 = k2(this), i2 = o3.next(); !i2.done; i2 = o3.next()) {
                var a3 = i2.value;
                t5.call(e3, a3, a3, this);
              }
            } catch (t6) {
              r3 = { error: t6 };
            } finally {
              try {
                i2 && !i2.done && (n3 = o3.return) && n3.call(o3);
              } finally {
                if (r3)
                  throw r3.error;
              }
            }
          }, Object.defineProperty(t4.prototype, "size", { get: function() {
            return this._atom.reportObserved(), this._data.size;
          }, enumerable: true, configurable: true }), t4.prototype.add = function(t5) {
            var e3 = this;
            if ((ut(this._atom), Xe(this)) && !(n3 = Ue(this, { type: "add", object: this, newValue: t5 })))
              return this;
            if (!this.has(t5)) {
              Me(function() {
                e3._data.add(e3.enhancer(t5, void 0)), e3._atom.reportChanged();
              });
              var r3 = Ge(this), n3 = r3 ? { type: "add", object: this, newValue: t5 } : null;
              r3 && Ye(this, n3);
            }
            return this;
          }, t4.prototype.delete = function(t5) {
            var e3 = this;
            if (Xe(this) && !(n3 = Ue(this, { type: "delete", object: this, oldValue: t5 })))
              return false;
            if (this.has(t5)) {
              var r3 = Ge(this), n3 = r3 ? { type: "delete", object: this, oldValue: t5 } : null;
              return Me(function() {
                e3._atom.reportChanged(), e3._data.delete(t5);
              }), r3 && Ye(this, n3), true;
            }
            return false;
          }, t4.prototype.has = function(t5) {
            return this._atom.reportObserved(), this._data.has(this.dehanceValue(t5));
          }, t4.prototype.entries = function() {
            var t5 = 0, e3 = Array.from(this.keys()), r3 = Array.from(this.values());
            return mr({ next: function() {
              var n3 = t5;
              return t5 += 1, n3 < r3.length ? { value: [e3[n3], r3[n3]], done: false } : { done: true };
            } });
          }, t4.prototype.keys = function() {
            return this.values();
          }, t4.prototype.values = function() {
            this._atom.reportObserved();
            var t5 = this, e3 = 0, r3 = Array.from(this._data.values());
            return mr({ next: function() {
              return e3 < r3.length ? { value: t5.dehanceValue(r3[e3++]), done: false } : { done: true };
            } });
          }, t4.prototype.replace = function(t5) {
            var e3 = this;
            return ir(t5) && (t5 = t5.toJS()), Me(function() {
              var r3 = Et(true);
              try {
                Array.isArray(t5) || v2(t5) ? (e3.clear(), t5.forEach(function(t6) {
                  return e3.add(t6);
                })) : t5 != null && u2("Cannot initialize set from " + t5);
              } finally {
                xt(r3);
              }
            }), this;
          }, t4.prototype.observe = function(t5, e3) {
            return Fe(this, t5);
          }, t4.prototype.intercept = function(t5) {
            return He(this, t5);
          }, t4.prototype.toJS = function() {
            return new Set(this);
          }, t4.prototype.toString = function() {
            return this.name + "[ " + Array.from(this).join(", ") + " ]";
          }, t4.prototype[Qe = w2, Symbol.iterator] = function() {
            return this.values();
          }, t4;
        }(), ir = y2("ObservableSet", or), ar = function() {
          function t4(t5, e3, r3, n3) {
            e3 === void 0 && (e3 = /* @__PURE__ */ new Map()), this.target = t5, this.values = e3, this.name = r3, this.defaultEnhancer = n3, this.keysAtom = new _2(r3 + ".keys");
          }
          return t4.prototype.read = function(t5) {
            return this.values.get(t5).get();
          }, t4.prototype.write = function(t5, e3) {
            var r3 = this.target, n3 = this.values.get(t5);
            if (n3 instanceof kt)
              n3.set(e3);
            else {
              if (Xe(this)) {
                if (!(i2 = Ue(this, { type: "update", object: this.proxy || r3, name: t5, newValue: e3 })))
                  return;
                e3 = i2.newValue;
              }
              if ((e3 = n3.prepareNewValue(e3)) !== Rt.UNCHANGED) {
                var o3 = Ge(this), i2 = o3 ? { type: "update", object: this.proxy || r3, oldValue: n3.value, name: t5, newValue: e3 } : null;
                n3.setNewValue(e3), o3 && Ye(this, i2);
              }
            }
          }, t4.prototype.has = function(t5) {
            var e3 = this.pendingKeys || (this.pendingKeys = /* @__PURE__ */ new Map()), r3 = e3.get(t5);
            if (r3)
              return r3.get();
            var n3 = !!this.values.get(t5);
            return r3 = new St(n3, X, this.name + "." + g2(t5) + "?", false), e3.set(t5, r3), r3.get();
          }, t4.prototype.addObservableProp = function(t5, e3, r3) {
            r3 === void 0 && (r3 = this.defaultEnhancer);
            var n3 = this.target;
            if (Xe(this)) {
              var o3 = Ue(this, { object: this.proxy || n3, name: t5, type: "add", newValue: e3 });
              if (!o3)
                return;
              e3 = o3.newValue;
            }
            var i2 = new St(e3, r3, this.name + "." + g2(t5), false);
            this.values.set(t5, i2), e3 = i2.value, Object.defineProperty(n3, t5, function(t6) {
              return cr[t6] || (cr[t6] = { configurable: true, enumerable: true, get: function() {
                return this[w2].read(t6);
              }, set: function(e4) {
                this[w2].write(t6, e4);
              } });
            }(t5)), this.notifyPropertyAddition(t5, e3);
          }, t4.prototype.addComputedProp = function(t5, e3, r3) {
            var n3, o3, i2, a3 = this.target;
            r3.name = r3.name || this.name + "." + g2(e3), this.values.set(e3, new kt(r3)), (t5 === a3 || (n3 = t5, o3 = e3, !(i2 = Object.getOwnPropertyDescriptor(n3, o3)) || i2.configurable !== false && i2.writable !== false)) && Object.defineProperty(t5, e3, function(t6) {
              return sr[t6] || (sr[t6] = { configurable: Rt.computedConfigurable, enumerable: false, get: function() {
                return lr(this).read(t6);
              }, set: function(e4) {
                lr(this).write(t6, e4);
              } });
            }(e3));
          }, t4.prototype.remove = function(t5) {
            if (this.values.has(t5)) {
              var e3 = this.target;
              if (Xe(this)) {
                if (!(a3 = Ue(this, { object: this.proxy || e3, name: t5, type: "remove" })))
                  return;
              }
              try {
                Bt();
                var r3 = Ge(this), n3 = this.values.get(t5), o3 = n3 && n3.get();
                if (n3 && n3.set(void 0), this.keysAtom.reportChanged(), this.values.delete(t5), this.pendingKeys) {
                  var i2 = this.pendingKeys.get(t5);
                  i2 && i2.set(false);
                }
                delete this.target[t5];
                var a3 = r3 ? { type: "remove", object: this.proxy || e3, oldValue: o3, name: t5 } : null;
                0, r3 && Ye(this, a3);
              } finally {
                Xt();
              }
            }
          }, t4.prototype.illegalAccess = function(t5, e3) {
            console.warn("Property '" + e3 + "' of '" + t5 + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
          }, t4.prototype.observe = function(t5, e3) {
            return Fe(this, t5);
          }, t4.prototype.intercept = function(t5) {
            return He(this, t5);
          }, t4.prototype.notifyPropertyAddition = function(t5, e3) {
            var r3 = Ge(this), n3 = r3 ? { type: "add", object: this.proxy || this.target, name: t5, newValue: e3 } : null;
            if (r3 && Ye(this, n3), this.pendingKeys) {
              var o3 = this.pendingKeys.get(t5);
              o3 && o3.set(true);
            }
            this.keysAtom.reportChanged();
          }, t4.prototype.getKeys = function() {
            var t5, e3;
            this.keysAtom.reportObserved();
            var r3 = [];
            try {
              for (var n3 = k2(this.values), o3 = n3.next(); !o3.done; o3 = n3.next()) {
                var i2 = A(o3.value, 2), a3 = i2[0];
                i2[1] instanceof St && r3.push(a3);
              }
            } catch (e4) {
              t5 = { error: e4 };
            } finally {
              try {
                o3 && !o3.done && (e3 = n3.return) && e3.call(n3);
              } finally {
                if (t5)
                  throw t5.error;
              }
            }
            return r3;
          }, t4;
        }();
        function ur(t4, e3, r3) {
          if (e3 === void 0 && (e3 = ""), r3 === void 0 && (r3 = B), Object.prototype.hasOwnProperty.call(t4, w2))
            return t4[w2];
          p(t4) || (e3 = (t4.constructor.name || "ObservableObject") + "@" + a2()), e3 || (e3 = "ObservableObject@" + a2());
          var n3 = new ar(t4, /* @__PURE__ */ new Map(), g2(e3), r3);
          return d2(t4, w2, n3), n3;
        }
        var cr = /* @__PURE__ */ Object.create(null), sr = /* @__PURE__ */ Object.create(null);
        function lr(t4) {
          var e3 = t4[w2];
          return e3 || (I2(t4), t4[w2]);
        }
        var fr = y2("ObservableObjectAdministration", ar);
        function pr(t4) {
          return !!f(t4) && (I2(t4), fr(t4[w2]));
        }
        function dr(t4, e3) {
          if (typeof t4 == "object" && t4 !== null) {
            if (Je(t4))
              return e3 !== void 0 && u2(false), t4[w2].atom;
            if (ir(t4))
              return t4[w2];
            if (rr(t4)) {
              var r3 = t4;
              return e3 === void 0 ? r3._keysAtom : ((n3 = r3._data.get(e3) || r3._hasMap.get(e3)) || u2(false), n3);
            }
            var n3;
            if (I2(t4), e3 && !t4[w2] && t4[e3], pr(t4))
              return e3 ? ((n3 = t4[w2].values.get(e3)) || u2(false), n3) : u2(false);
            if (j2(t4) || At(t4) || Wt(t4))
              return t4;
          } else if (typeof t4 == "function" && Wt(t4[w2]))
            return t4[w2];
          return u2(false);
        }
        function yr(t4, e3) {
          return t4 || u2("Expecting some object"), e3 !== void 0 ? yr(dr(t4, e3)) : j2(t4) || At(t4) || Wt(t4) || rr(t4) || ir(t4) ? t4 : (I2(t4), t4[w2] ? t4[w2] : void u2(false));
        }
        var hr = Object.prototype.toString;
        function vr(t4, e3, r3) {
          return r3 === void 0 && (r3 = -1), function t5(e4, r4, n3, o3, i2) {
            if (e4 === r4)
              return e4 !== 0 || 1 / e4 == 1 / r4;
            if (e4 == null || r4 == null)
              return false;
            if (e4 != e4)
              return r4 != r4;
            var a3 = typeof e4;
            if (a3 !== "function" && a3 !== "object" && typeof r4 != "object")
              return false;
            var u3 = hr.call(e4);
            if (u3 !== hr.call(r4))
              return false;
            switch (u3) {
              case "[object RegExp]":
              case "[object String]":
                return "" + e4 == "" + r4;
              case "[object Number]":
                return +e4 != +e4 ? +r4 != +r4 : +e4 == 0 ? 1 / +e4 == 1 / r4 : +e4 == +r4;
              case "[object Date]":
              case "[object Boolean]":
                return +e4 == +r4;
              case "[object Symbol]":
                return typeof Symbol != "undefined" && Symbol.valueOf.call(e4) === Symbol.valueOf.call(r4);
              case "[object Map]":
              case "[object Set]":
                n3 >= 0 && n3++;
            }
            e4 = br(e4), r4 = br(r4);
            var c3 = u3 === "[object Array]";
            if (!c3) {
              if (typeof e4 != "object" || typeof r4 != "object")
                return false;
              var s3 = e4.constructor, l3 = r4.constructor;
              if (s3 !== l3 && !(typeof s3 == "function" && s3 instanceof s3 && typeof l3 == "function" && l3 instanceof l3) && "constructor" in e4 && "constructor" in r4)
                return false;
            }
            if (n3 === 0)
              return false;
            n3 < 0 && (n3 = -1);
            i2 = i2 || [];
            var f2 = (o3 = o3 || []).length;
            for (; f2--; )
              if (o3[f2] === e4)
                return i2[f2] === r4;
            if (o3.push(e4), i2.push(r4), c3) {
              if ((f2 = e4.length) !== r4.length)
                return false;
              for (; f2--; )
                if (!t5(e4[f2], r4[f2], n3 - 1, o3, i2))
                  return false;
            } else {
              var p2 = Object.keys(e4), d3 = void 0;
              if (f2 = p2.length, Object.keys(r4).length !== f2)
                return false;
              for (; f2--; )
                if (d3 = p2[f2], !gr(r4, d3) || !t5(e4[d3], r4[d3], n3 - 1, o3, i2))
                  return false;
            }
            return o3.pop(), i2.pop(), true;
          }(t4, e3, r3);
        }
        function br(t4) {
          return Je(t4) ? t4.slice() : h2(t4) || rr(t4) || v2(t4) || ir(t4) ? Array.from(t4.entries()) : t4;
        }
        function gr(t4, e3) {
          return Object.prototype.hasOwnProperty.call(t4, e3);
        }
        function mr(t4) {
          return t4[Symbol.iterator] = Or, t4;
        }
        function Or() {
          return this;
        }
        if (typeof Proxy == "undefined" || typeof Symbol == "undefined")
          throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
        typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: $t, extras: { getDebugName: function(t4, e3) {
          return (e3 !== void 0 ? dr(t4, e3) : pr(t4) || rr(t4) || ir(t4) ? yr(t4) : dr(t4)).name;
        } }, $mobx: w2 });
      }).call(this, r2(151), r2(74));
    }, function(t2, e2, r2) {
      r2.d(e2, "a", function() {
        return m2;
      }), r2.d(e2, "b", function() {
        return g2;
      }), r2.d(e2, "c", function() {
        return X;
      }), r2.d(e2, "d", function() {
        return H2;
      }), r2.d(e2, "e", function() {
        return h2;
      }), r2.d(e2, "f", function() {
        return b2;
      }), r2.d(e2, "g", function() {
        return h2;
      }), r2.d(e2, "h", function() {
        return B;
      }), r2.d(e2, "i", function() {
        return o2;
      }), r2.d(e2, "j", function() {
        return z2;
      }), r2.d(e2, "k", function() {
        return S;
      });
      var n2, o2, i, a2, u2, c2, s2, l2 = {}, f = [], p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function d2(t3, e3) {
        for (var r3 in e3)
          t3[r3] = e3[r3];
        return t3;
      }
      function y2(t3) {
        var e3 = t3.parentNode;
        e3 && e3.removeChild(t3);
      }
      function h2(t3, e3, r3) {
        var o3, i2, a3, u3 = {};
        for (a3 in e3)
          a3 == "key" ? o3 = e3[a3] : a3 == "ref" ? i2 = e3[a3] : u3[a3] = e3[a3];
        if (arguments.length > 2 && (u3.children = arguments.length > 3 ? n2.call(arguments, 2) : r3), typeof t3 == "function" && t3.defaultProps != null)
          for (a3 in t3.defaultProps)
            u3[a3] === void 0 && (u3[a3] = t3.defaultProps[a3]);
        return v2(t3, u3, o3, i2, null);
      }
      function v2(t3, e3, r3, n3, a3) {
        var u3 = { type: t3, props: e3, key: r3, ref: n3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: a3 == null ? ++i : a3 };
        return a3 == null && o2.vnode != null && o2.vnode(u3), u3;
      }
      function b2() {
        return { current: null };
      }
      function g2(t3) {
        return t3.children;
      }
      function m2(t3, e3) {
        this.props = t3, this.context = e3;
      }
      function O2(t3, e3) {
        if (e3 == null)
          return t3.__ ? O2(t3.__, t3.__.__k.indexOf(t3) + 1) : null;
        for (var r3; e3 < t3.__k.length; e3++)
          if ((r3 = t3.__k[e3]) != null && r3.__e != null)
            return r3.__e;
        return typeof t3.type == "function" ? O2(t3) : null;
      }
      function w2(t3) {
        var e3, r3;
        if ((t3 = t3.__) != null && t3.__c != null) {
          for (t3.__e = t3.__c.base = null, e3 = 0; e3 < t3.__k.length; e3++)
            if ((r3 = t3.__k[e3]) != null && r3.__e != null) {
              t3.__e = t3.__c.base = r3.__e;
              break;
            }
          return w2(t3);
        }
      }
      function _2(t3) {
        (!t3.__d && (t3.__d = true) && a2.push(t3) && !j2.__r++ || c2 !== o2.debounceRendering) && ((c2 = o2.debounceRendering) || u2)(j2);
      }
      function j2() {
        for (var t3; j2.__r = a2.length; )
          t3 = a2.sort(function(t4, e3) {
            return t4.__v.__b - e3.__v.__b;
          }), a2 = [], t3.some(function(t4) {
            var e3, r3, n3, o3, i2, a3;
            t4.__d && (i2 = (o3 = (e3 = t4).__v).__e, (a3 = e3.__P) && (r3 = [], (n3 = d2({}, o3)).__v = o3.__v + 1, M2(a3, o3, n3, e3.__n, a3.ownerSVGElement !== void 0, o3.__h != null ? [i2] : null, r3, i2 == null ? O2(o3) : i2, o3.__h), N2(r3, o3), o3.__e != i2 && w2(o3)));
          });
      }
      function E(t3, e3, r3, n3, o3, i2, a3, u3, c3, s3) {
        var p2, d3, y3, h3, b3, m3, w3, _3 = n3 && n3.__k || f, j3 = _3.length;
        for (r3.__k = [], p2 = 0; p2 < e3.length; p2++)
          if ((h3 = r3.__k[p2] = (h3 = e3[p2]) == null || typeof h3 == "boolean" ? null : typeof h3 == "string" || typeof h3 == "number" || typeof h3 == "bigint" ? v2(null, h3, null, null, h3) : Array.isArray(h3) ? v2(g2, { children: h3 }, null, null, null) : h3.__b > 0 ? v2(h3.type, h3.props, h3.key, null, h3.__v) : h3) != null) {
            if (h3.__ = r3, h3.__b = r3.__b + 1, (y3 = _3[p2]) === null || y3 && h3.key == y3.key && h3.type === y3.type)
              _3[p2] = void 0;
            else
              for (d3 = 0; d3 < j3; d3++) {
                if ((y3 = _3[d3]) && h3.key == y3.key && h3.type === y3.type) {
                  _3[d3] = void 0;
                  break;
                }
                y3 = null;
              }
            M2(t3, h3, y3 = y3 || l2, o3, i2, a3, u3, c3, s3), b3 = h3.__e, (d3 = h3.ref) && y3.ref != d3 && (w3 || (w3 = []), y3.ref && w3.push(y3.ref, null, h3), w3.push(d3, h3.__c || b3, h3)), b3 != null ? (m3 == null && (m3 = b3), typeof h3.type == "function" && h3.__k === y3.__k ? h3.__d = c3 = x2(h3, c3, t3) : c3 = P2(t3, h3, y3, _3, b3, c3), typeof r3.type == "function" && (r3.__d = c3)) : c3 && y3.__e == c3 && c3.parentNode != t3 && (c3 = O2(y3));
          }
        for (r3.__e = m3, p2 = j3; p2--; )
          _3[p2] != null && (typeof r3.type == "function" && _3[p2].__e != null && _3[p2].__e == r3.__d && (r3.__d = O2(n3, p2 + 1)), I2(_3[p2], _3[p2]));
        if (w3)
          for (p2 = 0; p2 < w3.length; p2++)
            R(w3[p2], w3[++p2], w3[++p2]);
      }
      function x2(t3, e3, r3) {
        for (var n3, o3 = t3.__k, i2 = 0; o3 && i2 < o3.length; i2++)
          (n3 = o3[i2]) && (n3.__ = t3, e3 = typeof n3.type == "function" ? x2(n3, e3, r3) : P2(r3, n3, n3, o3, n3.__e, e3));
        return e3;
      }
      function S(t3, e3) {
        return e3 = e3 || [], t3 == null || typeof t3 == "boolean" || (Array.isArray(t3) ? t3.some(function(t4) {
          S(t4, e3);
        }) : e3.push(t3)), e3;
      }
      function P2(t3, e3, r3, n3, o3, i2) {
        var a3, u3, c3;
        if (e3.__d !== void 0)
          a3 = e3.__d, e3.__d = void 0;
        else if (r3 == null || o3 != i2 || o3.parentNode == null)
          t:
            if (i2 == null || i2.parentNode !== t3)
              t3.appendChild(o3), a3 = null;
            else {
              for (u3 = i2, c3 = 0; (u3 = u3.nextSibling) && c3 < n3.length; c3 += 2)
                if (u3 == o3)
                  break t;
              t3.insertBefore(o3, i2), a3 = i2;
            }
        return a3 !== void 0 ? a3 : o3.nextSibling;
      }
      function k2(t3, e3, r3) {
        e3[0] === "-" ? t3.setProperty(e3, r3) : t3[e3] = r3 == null ? "" : typeof r3 != "number" || p.test(e3) ? r3 : r3 + "px";
      }
      function A(t3, e3, r3, n3, o3) {
        var i2;
        t:
          if (e3 === "style")
            if (typeof r3 == "string")
              t3.style.cssText = r3;
            else {
              if (typeof n3 == "string" && (t3.style.cssText = n3 = ""), n3)
                for (e3 in n3)
                  r3 && e3 in r3 || k2(t3.style, e3, "");
              if (r3)
                for (e3 in r3)
                  n3 && r3[e3] === n3[e3] || k2(t3.style, e3, r3[e3]);
            }
          else if (e3[0] === "o" && e3[1] === "n")
            i2 = e3 !== (e3 = e3.replace(/Capture$/, "")), e3 = e3.toLowerCase() in t3 ? e3.toLowerCase().slice(2) : e3.slice(2), t3.l || (t3.l = {}), t3.l[e3 + i2] = r3, r3 ? n3 || t3.addEventListener(e3, i2 ? T2 : D, i2) : t3.removeEventListener(e3, i2 ? T2 : D, i2);
          else if (e3 !== "dangerouslySetInnerHTML") {
            if (o3)
              e3 = e3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if (e3 !== "href" && e3 !== "list" && e3 !== "form" && e3 !== "tabIndex" && e3 !== "download" && e3 in t3)
              try {
                t3[e3] = r3 == null ? "" : r3;
                break t;
              } catch (t4) {
              }
            typeof r3 == "function" || (r3 != null && (r3 !== false || e3[0] === "a" && e3[1] === "r") ? t3.setAttribute(e3, r3) : t3.removeAttribute(e3));
          }
      }
      function D(t3) {
        this.l[t3.type + false](o2.event ? o2.event(t3) : t3);
      }
      function T2(t3) {
        this.l[t3.type + true](o2.event ? o2.event(t3) : t3);
      }
      function M2(t3, e3, r3, n3, i2, a3, u3, c3, s3) {
        var l3, f2, p2, y3, h3, v3, b3, O3, w3, _3, j3, x3 = e3.type;
        if (e3.constructor !== void 0)
          return null;
        r3.__h != null && (s3 = r3.__h, c3 = e3.__e = r3.__e, e3.__h = null, a3 = [c3]), (l3 = o2.__b) && l3(e3);
        try {
          t:
            if (typeof x3 == "function") {
              if (O3 = e3.props, w3 = (l3 = x3.contextType) && n3[l3.__c], _3 = l3 ? w3 ? w3.props.value : l3.__ : n3, r3.__c ? b3 = (f2 = e3.__c = r3.__c).__ = f2.__E : ("prototype" in x3 && x3.prototype.render ? e3.__c = f2 = new x3(O3, _3) : (e3.__c = f2 = new m2(O3, _3), f2.constructor = x3, f2.render = L2), w3 && w3.sub(f2), f2.props = O3, f2.state || (f2.state = {}), f2.context = _3, f2.__n = n3, p2 = f2.__d = true, f2.__h = []), f2.__s == null && (f2.__s = f2.state), x3.getDerivedStateFromProps != null && (f2.__s == f2.state && (f2.__s = d2({}, f2.__s)), d2(f2.__s, x3.getDerivedStateFromProps(O3, f2.__s))), y3 = f2.props, h3 = f2.state, p2)
                x3.getDerivedStateFromProps == null && f2.componentWillMount != null && f2.componentWillMount(), f2.componentDidMount != null && f2.__h.push(f2.componentDidMount);
              else {
                if (x3.getDerivedStateFromProps == null && O3 !== y3 && f2.componentWillReceiveProps != null && f2.componentWillReceiveProps(O3, _3), !f2.__e && f2.shouldComponentUpdate != null && f2.shouldComponentUpdate(O3, f2.__s, _3) === false || e3.__v === r3.__v) {
                  f2.props = O3, f2.state = f2.__s, e3.__v !== r3.__v && (f2.__d = false), f2.__v = e3, e3.__e = r3.__e, e3.__k = r3.__k, e3.__k.forEach(function(t4) {
                    t4 && (t4.__ = e3);
                  }), f2.__h.length && u3.push(f2);
                  break t;
                }
                f2.componentWillUpdate != null && f2.componentWillUpdate(O3, f2.__s, _3), f2.componentDidUpdate != null && f2.__h.push(function() {
                  f2.componentDidUpdate(y3, h3, v3);
                });
              }
              f2.context = _3, f2.props = O3, f2.state = f2.__s, (l3 = o2.__r) && l3(e3), f2.__d = false, f2.__v = e3, f2.__P = t3, l3 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, f2.getChildContext != null && (n3 = d2(d2({}, n3), f2.getChildContext())), p2 || f2.getSnapshotBeforeUpdate == null || (v3 = f2.getSnapshotBeforeUpdate(y3, h3)), j3 = l3 != null && l3.type === g2 && l3.key == null ? l3.props.children : l3, E(t3, Array.isArray(j3) ? j3 : [j3], e3, r3, n3, i2, a3, u3, c3, s3), f2.base = e3.__e, e3.__h = null, f2.__h.length && u3.push(f2), b3 && (f2.__E = f2.__ = null), f2.__e = false;
            } else
              a3 == null && e3.__v === r3.__v ? (e3.__k = r3.__k, e3.__e = r3.__e) : e3.__e = C2(r3.__e, e3, r3, n3, i2, a3, u3, s3);
          (l3 = o2.diffed) && l3(e3);
        } catch (t4) {
          e3.__v = null, (s3 || a3 != null) && (e3.__e = c3, e3.__h = !!s3, a3[a3.indexOf(c3)] = null), o2.__e(t4, e3, r3);
        }
      }
      function N2(t3, e3) {
        o2.__c && o2.__c(e3, t3), t3.some(function(e4) {
          try {
            t3 = e4.__h, e4.__h = [], t3.some(function(t4) {
              t4.call(e4);
            });
          } catch (t4) {
            o2.__e(t4, e4.__v);
          }
        });
      }
      function C2(t3, e3, r3, o3, i2, a3, u3, c3) {
        var s3, f2, p2, d3 = r3.props, h3 = e3.props, v3 = e3.type, b3 = 0;
        if (v3 === "svg" && (i2 = true), a3 != null) {
          for (; b3 < a3.length; b3++)
            if ((s3 = a3[b3]) && "setAttribute" in s3 == !!v3 && (v3 ? s3.localName === v3 : s3.nodeType === 3)) {
              t3 = s3, a3[b3] = null;
              break;
            }
        }
        if (t3 == null) {
          if (v3 === null)
            return document.createTextNode(h3);
          t3 = i2 ? document.createElementNS("http://www.w3.org/2000/svg", v3) : document.createElement(v3, h3.is && h3), a3 = null, c3 = false;
        }
        if (v3 === null)
          d3 === h3 || c3 && t3.data === h3 || (t3.data = h3);
        else {
          if (a3 = a3 && n2.call(t3.childNodes), f2 = (d3 = r3.props || l2).dangerouslySetInnerHTML, p2 = h3.dangerouslySetInnerHTML, !c3) {
            if (a3 != null)
              for (d3 = {}, b3 = 0; b3 < t3.attributes.length; b3++)
                d3[t3.attributes[b3].name] = t3.attributes[b3].value;
            (p2 || f2) && (p2 && (f2 && p2.__html == f2.__html || p2.__html === t3.innerHTML) || (t3.innerHTML = p2 && p2.__html || ""));
          }
          if (function(t4, e4, r4, n3, o4) {
            var i3;
            for (i3 in r4)
              i3 === "children" || i3 === "key" || i3 in e4 || A(t4, i3, null, r4[i3], n3);
            for (i3 in e4)
              o4 && typeof e4[i3] != "function" || i3 === "children" || i3 === "key" || i3 === "value" || i3 === "checked" || r4[i3] === e4[i3] || A(t4, i3, e4[i3], r4[i3], n3);
          }(t3, h3, d3, i2, c3), p2)
            e3.__k = [];
          else if (b3 = e3.props.children, E(t3, Array.isArray(b3) ? b3 : [b3], e3, r3, o3, i2 && v3 !== "foreignObject", a3, u3, a3 ? a3[0] : r3.__k && O2(r3, 0), c3), a3 != null)
            for (b3 = a3.length; b3--; )
              a3[b3] != null && y2(a3[b3]);
          c3 || ("value" in h3 && (b3 = h3.value) !== void 0 && (b3 !== d3.value || b3 !== t3.value || v3 === "progress" && !b3) && A(t3, "value", b3, d3.value, false), "checked" in h3 && (b3 = h3.checked) !== void 0 && b3 !== t3.checked && A(t3, "checked", b3, d3.checked, false));
        }
        return t3;
      }
      function R(t3, e3, r3) {
        try {
          typeof t3 == "function" ? t3(e3) : t3.current = e3;
        } catch (t4) {
          o2.__e(t4, r3);
        }
      }
      function I2(t3, e3, r3) {
        var n3, i2;
        if (o2.unmount && o2.unmount(t3), (n3 = t3.ref) && (n3.current && n3.current !== t3.__e || R(n3, null, e3)), (n3 = t3.__c) != null) {
          if (n3.componentWillUnmount)
            try {
              n3.componentWillUnmount();
            } catch (t4) {
              o2.__e(t4, e3);
            }
          n3.base = n3.__P = null;
        }
        if (n3 = t3.__k)
          for (i2 = 0; i2 < n3.length; i2++)
            n3[i2] && I2(n3[i2], e3, typeof t3.type != "function");
        r3 || t3.__e == null || y2(t3.__e), t3.__e = t3.__d = void 0;
      }
      function L2(t3, e3, r3) {
        return this.constructor(t3, r3);
      }
      function z2(t3, e3, r3) {
        var i2, a3, u3;
        o2.__ && o2.__(t3, e3), a3 = (i2 = typeof r3 == "function") ? null : r3 && r3.__k || e3.__k, u3 = [], M2(e3, t3 = (!i2 && r3 || e3).__k = h2(g2, null, [t3]), a3 || l2, l2, e3.ownerSVGElement !== void 0, !i2 && r3 ? [r3] : a3 ? null : e3.firstChild ? n2.call(e3.childNodes) : null, u3, !i2 && r3 ? r3 : a3 ? a3.__e : e3.firstChild, i2), N2(u3, t3);
      }
      function B(t3, e3) {
        z2(t3, e3, B);
      }
      function X(t3, e3, r3) {
        var o3, i2, a3, u3 = d2({}, t3.props);
        for (a3 in e3)
          a3 == "key" ? o3 = e3[a3] : a3 == "ref" ? i2 = e3[a3] : u3[a3] = e3[a3];
        return arguments.length > 2 && (u3.children = arguments.length > 3 ? n2.call(arguments, 2) : r3), v2(t3.type, u3, o3 || t3.key, i2 || t3.ref, null);
      }
      function H2(t3, e3) {
        var r3 = { __c: e3 = "__cC" + s2++, __: t3, Consumer: function(t4, e4) {
          return t4.children(e4);
        }, Provider: function(t4) {
          var r4, n3;
          return this.getChildContext || (r4 = [], (n3 = {})[e3] = this, this.getChildContext = function() {
            return n3;
          }, this.shouldComponentUpdate = function(t5) {
            this.props.value !== t5.value && r4.some(_2);
          }, this.sub = function(t5) {
            r4.push(t5);
            var e4 = t5.componentWillUnmount;
            t5.componentWillUnmount = function() {
              r4.splice(r4.indexOf(t5), 1), e4 && e4.call(t5);
            };
          }), t4.children;
        } };
        return r3.Provider.__ = r3.Consumer.contextType = r3;
      }
      n2 = f.slice, o2 = { __e: function(t3, e3) {
        for (var r3, n3, o3; e3 = e3.__; )
          if ((r3 = e3.__c) && !r3.__)
            try {
              if ((n3 = r3.constructor) && n3.getDerivedStateFromError != null && (r3.setState(n3.getDerivedStateFromError(t3)), o3 = r3.__d), r3.componentDidCatch != null && (r3.componentDidCatch(t3), o3 = r3.__d), o3)
                return r3.__E = r3;
            } catch (e4) {
              t3 = e4;
            }
        throw t3;
      } }, i = 0, m2.prototype.setState = function(t3, e3) {
        var r3;
        r3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = d2({}, this.state), typeof t3 == "function" && (t3 = t3(d2({}, r3), this.props)), t3 && d2(r3, t3), t3 != null && this.__v && (e3 && this.__h.push(e3), _2(this));
      }, m2.prototype.forceUpdate = function(t3) {
        this.__v && (this.__e = true, t3 && this.__h.push(t3), _2(this));
      }, m2.prototype.render = g2, a2 = [], u2 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, j2.__r = 0, s2 = 0;
    }, function(t2, e2, r2) {
      var n2 = r2(114), o2 = r2(45), i = r2(172);
      n2 || o2(Object.prototype, "toString", i, { unsafe: true });
    }, function(t2, e2, r2) {
      var n2 = r2(39), o2 = r2(75), i = r2(65), a2 = r2(57), u2 = r2(108), c2 = a2.set, s2 = a2.getterFor("Array Iterator");
      t2.exports = u2(Array, "Array", function(t3, e3) {
        c2(this, { type: "Array Iterator", target: n2(t3), index: 0, kind: e3 });
      }, function() {
        var t3 = s2(this), e3 = t3.target, r3 = t3.kind, n3 = t3.index++;
        return !e3 || n3 >= e3.length ? (t3.target = void 0, { value: void 0, done: true }) : r3 == "keys" ? { value: n3, done: false } : r3 == "values" ? { value: e3[n3], done: false } : { value: [n3, e3[n3]], done: false };
      }, "values"), i.Arguments = i.Array, o2("keys"), o2("values"), o2("entries");
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(9), i = r2(49), a2 = r2(95), u2 = r2(36), c2 = r2(15), s2 = r2(77), l2 = r2(35), f = r2(104), p = r2(19), d2 = r2(34), y2 = r2(93), h2 = r2(29), v2 = r2(33), b2 = r2(55), g2 = r2(82), m2 = r2(32), O2 = r2(38), w2 = r2(39), _2 = r2(81), j2 = r2(40), E = r2(66), x2 = r2(52), S = r2(61), P2 = r2(67), k2 = r2(134), A = r2(109), D = r2(54), T2 = r2(37), M2 = r2(86), N2 = r2(117), C2 = r2(45), R = r2(76), I2 = r2(85), L2 = r2(64), z2 = r2(78), B = r2(27), X = r2(145), H2 = r2(146), U = r2(89), G = r2(57), F = r2(68).forEach, Y = I2("hidden"), V = B("toPrimitive"), W = G.set, K = G.getterFor("Symbol"), $2 = Object.prototype, Z = o2.Symbol, q = Z && Z.prototype, J = o2.TypeError, Q = o2.QObject, tt = i("JSON", "stringify"), et = D.f, rt = T2.f, nt = k2.f, ot = M2.f, it = c2([].push), at = R("symbols"), ut = R("op-symbols"), ct = R("string-to-symbol-registry"), st = R("symbol-to-string-registry"), lt = R("wks"), ft = !Q || !Q.prototype || !Q.prototype.findChild, pt = l2 && p(function() {
        return x2(rt({}, "a", { get: function() {
          return rt(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(t3, e3, r3) {
        var n3 = et($2, e3);
        n3 && delete $2[e3], rt(t3, e3, r3), n3 && t3 !== $2 && rt($2, e3, n3);
      } : rt, dt = function(t3, e3) {
        var r3 = at[t3] = x2(q);
        return W(r3, { type: "Symbol", tag: t3, description: e3 }), l2 || (r3.description = e3), r3;
      }, yt = function(t3, e3, r3) {
        t3 === $2 && yt(ut, e3, r3), m2(t3);
        var n3 = _2(e3);
        return m2(r3), d2(at, n3) ? (r3.enumerable ? (d2(t3, Y) && t3[Y][n3] && (t3[Y][n3] = false), r3 = x2(r3, { enumerable: E(0, false) })) : (d2(t3, Y) || rt(t3, Y, E(1, {})), t3[Y][n3] = true), pt(t3, n3, r3)) : rt(t3, n3, r3);
      }, ht = function(t3, e3) {
        m2(t3);
        var r3 = w2(e3), n3 = S(r3).concat(mt(r3));
        return F(n3, function(e4) {
          l2 && !u2(vt, r3, e4) || yt(t3, e4, r3[e4]);
        }), t3;
      }, vt = function(t3) {
        var e3 = _2(t3), r3 = u2(ot, this, e3);
        return !(this === $2 && d2(at, e3) && !d2(ut, e3)) && (!(r3 || !d2(this, e3) || !d2(at, e3) || d2(this, Y) && this[Y][e3]) || r3);
      }, bt = function(t3, e3) {
        var r3 = w2(t3), n3 = _2(e3);
        if (r3 !== $2 || !d2(at, n3) || d2(ut, n3)) {
          var o3 = et(r3, n3);
          return !o3 || !d2(at, n3) || d2(r3, Y) && r3[Y][n3] || (o3.enumerable = true), o3;
        }
      }, gt = function(t3) {
        var e3 = nt(w2(t3)), r3 = [];
        return F(e3, function(t4) {
          d2(at, t4) || d2(L2, t4) || it(r3, t4);
        }), r3;
      }, mt = function(t3) {
        var e3 = t3 === $2, r3 = nt(e3 ? ut : w2(t3)), n3 = [];
        return F(r3, function(t4) {
          !d2(at, t4) || e3 && !d2($2, t4) || it(n3, at[t4]);
        }), n3;
      };
      (f || (C2(q = (Z = function() {
        if (b2(q, this))
          throw J("Symbol is not a constructor");
        var t3 = arguments.length && arguments[0] !== void 0 ? j2(arguments[0]) : void 0, e3 = z2(t3), r3 = function(t4) {
          this === $2 && u2(r3, ut, t4), d2(this, Y) && d2(this[Y], e3) && (this[Y][e3] = false), pt(this, e3, E(1, t4));
        };
        return l2 && ft && pt($2, e3, { configurable: true, set: r3 }), dt(e3, t3);
      }).prototype, "toString", function() {
        return K(this).tag;
      }), C2(Z, "withoutSetter", function(t3) {
        return dt(z2(t3), t3);
      }), M2.f = vt, T2.f = yt, D.f = bt, P2.f = k2.f = gt, A.f = mt, X.f = function(t3) {
        return dt(B(t3), t3);
      }, l2 && (rt(q, "description", { configurable: true, get: function() {
        return K(this).description;
      } }), s2 || C2($2, "propertyIsEnumerable", vt, { unsafe: true }))), n2({ global: true, wrap: true, forced: !f, sham: !f }, { Symbol: Z }), F(S(lt), function(t3) {
        H2(t3);
      }), n2({ target: "Symbol", stat: true, forced: !f }, { for: function(t3) {
        var e3 = j2(t3);
        if (d2(ct, e3))
          return ct[e3];
        var r3 = Z(e3);
        return ct[e3] = r3, st[r3] = e3, r3;
      }, keyFor: function(t3) {
        if (!g2(t3))
          throw J(t3 + " is not a symbol");
        if (d2(st, t3))
          return st[t3];
      }, useSetter: function() {
        ft = true;
      }, useSimple: function() {
        ft = false;
      } }), n2({ target: "Object", stat: true, forced: !f, sham: !l2 }, { create: function(t3, e3) {
        return e3 === void 0 ? x2(t3) : ht(x2(t3), e3);
      }, defineProperty: yt, defineProperties: ht, getOwnPropertyDescriptor: bt }), n2({ target: "Object", stat: true, forced: !f }, { getOwnPropertyNames: gt, getOwnPropertySymbols: mt }), n2({ target: "Object", stat: true, forced: p(function() {
        A.f(1);
      }) }, { getOwnPropertySymbols: function(t3) {
        return A.f(O2(t3));
      } }), tt) && n2({ target: "JSON", stat: true, forced: !f || p(function() {
        var t3 = Z();
        return tt([t3]) != "[null]" || tt({ a: t3 }) != "{}" || tt(Object(t3)) != "{}";
      }) }, { stringify: function(t3, e3, r3) {
        var n3 = N2(arguments), o3 = e3;
        if ((v2(e3) || t3 !== void 0) && !g2(t3))
          return y2(e3) || (e3 = function(t4, e4) {
            if (h2(o3) && (e4 = u2(o3, this, t4, e4)), !g2(e4))
              return e4;
          }), n3[1] = e3, a2(tt, null, n3);
      } });
      if (!q[V]) {
        var Ot = q.valueOf;
        C2(q, V, function(t3) {
          return u2(Ot, this);
        });
      }
      U(Z, "Symbol"), L2[Y] = true;
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(143), i = r2(144), a2 = r2(3), u2 = r2(53), c2 = r2(27), s2 = c2("iterator"), l2 = c2("toStringTag"), f = a2.values, p = function(t3, e3) {
        if (t3) {
          if (t3[s2] !== f)
            try {
              u2(t3, s2, f);
            } catch (e4) {
              t3[s2] = f;
            }
          if (t3[l2] || u2(t3, l2, e3), o2[e3]) {
            for (var r3 in a2)
              if (t3[r3] !== a2[r3])
                try {
                  u2(t3, r3, a2[r3]);
                } catch (e4) {
                  t3[r3] = a2[r3];
                }
          }
        }
      };
      for (var d2 in o2)
        p(n2[d2] && n2[d2].prototype, d2);
      p(i, "DOMTokenList");
    }, function(t2, e2, r2) {
      var n2 = r2(142).charAt, o2 = r2(40), i = r2(57), a2 = r2(108), u2 = i.set, c2 = i.getterFor("String Iterator");
      a2(String, "String", function(t3) {
        u2(this, { type: "String Iterator", string: o2(t3), index: 0 });
      }, function() {
        var t3, e3 = c2(this), r3 = e3.string, o3 = e3.index;
        return o3 >= r3.length ? { value: void 0, done: true } : (t3 = n2(r3, o3), e3.index += t3.length, { value: t3, done: false });
      });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(35), i = r2(9), a2 = r2(15), u2 = r2(34), c2 = r2(29), s2 = r2(55), l2 = r2(40), f = r2(37).f, p = r2(129), d2 = i.Symbol, y2 = d2 && d2.prototype;
      if (o2 && c2(d2) && (!("description" in y2) || d2().description !== void 0)) {
        var h2 = {}, v2 = function() {
          var t3 = arguments.length < 1 || arguments[0] === void 0 ? void 0 : l2(arguments[0]), e3 = s2(y2, this) ? new d2(t3) : t3 === void 0 ? d2() : d2(t3);
          return t3 === "" && (h2[e3] = true), e3;
        };
        p(v2, d2), v2.prototype = y2, y2.constructor = v2;
        var b2 = String(d2("test")) == "Symbol(test)", g2 = a2(y2.toString), m2 = a2(y2.valueOf), O2 = /^Symbol\((.*)\)[^)]+$/, w2 = a2("".replace), _2 = a2("".slice);
        f(y2, "description", { configurable: true, get: function() {
          var t3 = m2(this), e3 = g2(t3);
          if (u2(h2, t3))
            return "";
          var r3 = b2 ? _2(e3, 7, -1) : w2(e3, O2, "$1");
          return r3 === "" ? void 0 : r3;
        } }), n2({ global: true, forced: true }, { Symbol: v2 });
      }
    }, function(t2, e2, r2) {
      r2(146)("iterator");
    }, function(t2, e2, r2) {
      (function(e3) {
        var r3 = function(t3) {
          return t3 && t3.Math == Math && t3;
        };
        t2.exports = r3(typeof globalThis == "object" && globalThis) || r3(typeof window == "object" && window) || r3(typeof self == "object" && self) || r3(typeof e3 == "object" && e3) || function() {
          return this;
        }() || Function("return this")();
      }).call(this, r2(74));
    }, function(t2, e2, r2) {
      r2.d(e2, "a", function() {
        return a2.a;
      }), r2.d(e2, "c", function() {
        return a2.e;
      }), r2.d(e2, "h", function() {
        return O2;
      }), r2.d(e2, "i", function() {
        return b2;
      }), r2.d(e2, "j", function() {
        return h2;
      }), r2.d(e2, "b", function() {
        return D;
      }), r2.d(e2, "e", function() {
        return C2;
      }), r2.d(e2, "f", function() {
        return T2;
      }), r2.d(e2, "g", function() {
        return it;
      });
      var n2, o2, i, a2 = r2(1), u2 = 0, c2 = [], s2 = a2.i.__b, l2 = a2.i.__r, f = a2.i.diffed, p = a2.i.__c, d2 = a2.i.unmount;
      function y2(t3, e3) {
        a2.i.__h && a2.i.__h(o2, t3, u2 || e3), u2 = 0;
        var r3 = o2.__H || (o2.__H = { __: [], __h: [] });
        return t3 >= r3.__.length && r3.__.push({}), r3.__[t3];
      }
      function h2(t3) {
        return u2 = 1, v2(P2, t3);
      }
      function v2(t3, e3, r3) {
        var i2 = y2(n2++, 2);
        return i2.t = t3, i2.__c || (i2.__ = [r3 ? r3(e3) : P2(void 0, e3), function(t4) {
          var e4 = i2.t(i2.__[0], t4);
          i2.__[0] !== e4 && (i2.__ = [e4, i2.__[1]], i2.__c.setState({}));
        }], i2.__c = o2), i2.__;
      }
      function b2(t3, e3) {
        var r3 = y2(n2++, 3);
        !a2.i.__s && S(r3.__H, e3) && (r3.__ = t3, r3.__H = e3, o2.__H.__h.push(r3));
      }
      function g2(t3, e3) {
        var r3 = y2(n2++, 4);
        !a2.i.__s && S(r3.__H, e3) && (r3.__ = t3, r3.__H = e3, o2.__h.push(r3));
      }
      function m2(t3, e3) {
        var r3 = y2(n2++, 7);
        return S(r3.__H, e3) && (r3.__ = t3(), r3.__H = e3, r3.__h = t3), r3.__;
      }
      function O2(t3, e3) {
        return u2 = 8, m2(function() {
          return t3;
        }, e3);
      }
      function w2() {
        var t3;
        for (c2.sort(function(t4, e3) {
          return t4.__v.__b - e3.__v.__b;
        }); t3 = c2.pop(); )
          if (t3.__P)
            try {
              t3.__H.__h.forEach(E), t3.__H.__h.forEach(x2), t3.__H.__h = [];
            } catch (e3) {
              t3.__H.__h = [], a2.i.__e(e3, t3.__v);
            }
      }
      a2.i.__b = function(t3) {
        o2 = null, s2 && s2(t3);
      }, a2.i.__r = function(t3) {
        l2 && l2(t3), n2 = 0;
        var e3 = (o2 = t3.__c).__H;
        e3 && (e3.__h.forEach(E), e3.__h.forEach(x2), e3.__h = []);
      }, a2.i.diffed = function(t3) {
        f && f(t3);
        var e3 = t3.__c;
        e3 && e3.__H && e3.__H.__h.length && (c2.push(e3) !== 1 && i === a2.i.requestAnimationFrame || ((i = a2.i.requestAnimationFrame) || j2)(w2)), o2 = null;
      }, a2.i.__c = function(t3, e3) {
        e3.some(function(t4) {
          try {
            t4.__h.forEach(E), t4.__h = t4.__h.filter(function(t5) {
              return !t5.__ || x2(t5);
            });
          } catch (r3) {
            e3.some(function(t5) {
              t5.__h && (t5.__h = []);
            }), e3 = [], a2.i.__e(r3, t4.__v);
          }
        }), p && p(t3, e3);
      }, a2.i.unmount = function(t3) {
        d2 && d2(t3);
        var e3, r3 = t3.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(t4) {
          try {
            E(t4);
          } catch (t5) {
            e3 = t5;
          }
        }), e3 && a2.i.__e(e3, r3.__v));
      };
      var _2 = typeof requestAnimationFrame == "function";
      function j2(t3) {
        var e3, r3 = function() {
          clearTimeout(n3), _2 && cancelAnimationFrame(e3), setTimeout(t3);
        }, n3 = setTimeout(r3, 100);
        _2 && (e3 = requestAnimationFrame(r3));
      }
      function E(t3) {
        var e3 = o2, r3 = t3.__c;
        typeof r3 == "function" && (t3.__c = void 0, r3()), o2 = e3;
      }
      function x2(t3) {
        var e3 = o2;
        t3.__c = t3.__(), o2 = e3;
      }
      function S(t3, e3) {
        return !t3 || t3.length !== e3.length || e3.some(function(e4, r3) {
          return e4 !== t3[r3];
        });
      }
      function P2(t3, e3) {
        return typeof e3 == "function" ? e3(t3) : e3;
      }
      function k2(t3, e3) {
        for (var r3 in e3)
          t3[r3] = e3[r3];
        return t3;
      }
      function A(t3, e3) {
        for (var r3 in t3)
          if (r3 !== "__source" && !(r3 in e3))
            return true;
        for (var n3 in e3)
          if (n3 !== "__source" && t3[n3] !== e3[n3])
            return true;
        return false;
      }
      function D(t3) {
        this.props = t3;
      }
      function T2(t3, e3) {
        function r3(t4) {
          var r4 = this.props.ref, n4 = r4 == t4.ref;
          return !n4 && r4 && (r4.call ? r4(null) : r4.current = null), e3 ? !e3(this.props, t4) || !n4 : A(this.props, t4);
        }
        function n3(e4) {
          return this.shouldComponentUpdate = r3, Object(a2.e)(t3, e4);
        }
        return n3.displayName = "Memo(" + (t3.displayName || t3.name) + ")", n3.prototype.isReactComponent = true, n3.__f = true, n3;
      }
      (D.prototype = new a2.a()).isPureReactComponent = true, D.prototype.shouldComponentUpdate = function(t3, e3) {
        return A(this.props, t3) || A(this.state, e3);
      };
      var M2 = a2.i.__b;
      a2.i.__b = function(t3) {
        t3.type && t3.type.__f && t3.ref && (t3.props.ref = t3.ref, t3.ref = null), M2 && M2(t3);
      };
      var N2 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      function C2(t3) {
        function e3(e4, r3) {
          var n3 = k2({}, e4);
          return delete n3.ref, t3(n3, !(r3 = e4.ref || r3) || typeof r3 == "object" && !("current" in r3) ? null : r3);
        }
        return e3.$$typeof = N2, e3.render = e3, e3.prototype.isReactComponent = e3.__f = true, e3.displayName = "ForwardRef(" + (t3.displayName || t3.name) + ")", e3;
      }
      var R = function(t3, e3) {
        return t3 == null ? null : Object(a2.k)(Object(a2.k)(t3).map(e3));
      }, I2 = { map: R, forEach: R, count: function(t3) {
        return t3 ? Object(a2.k)(t3).length : 0;
      }, only: function(t3) {
        var e3 = Object(a2.k)(t3);
        if (e3.length !== 1)
          throw "Children.only";
        return e3[0];
      }, toArray: a2.k }, L2 = a2.i.__e;
      a2.i.__e = function(t3, e3, r3) {
        if (t3.then) {
          for (var n3, o3 = e3; o3 = o3.__; )
            if ((n3 = o3.__c) && n3.__c)
              return e3.__e == null && (e3.__e = r3.__e, e3.__k = r3.__k), n3.__c(t3, e3);
        }
        L2(t3, e3, r3);
      };
      var z2 = a2.i.unmount;
      function B() {
        this.__u = 0, this.t = null, this.__b = null;
      }
      function X(t3) {
        var e3 = t3.__.__c;
        return e3 && e3.__e && e3.__e(t3);
      }
      function H2() {
        this.u = null, this.o = null;
      }
      a2.i.unmount = function(t3) {
        var e3 = t3.__c;
        e3 && e3.__R && e3.__R(), e3 && t3.__h === true && (t3.type = null), z2 && z2(t3);
      }, (B.prototype = new a2.a()).__c = function(t3, e3) {
        var r3 = e3.__c, n3 = this;
        n3.t == null && (n3.t = []), n3.t.push(r3);
        var o3 = X(n3.__v), i2 = false, a3 = function() {
          i2 || (i2 = true, r3.__R = null, o3 ? o3(u3) : u3());
        };
        r3.__R = a3;
        var u3 = function() {
          if (!--n3.__u) {
            if (n3.state.__e) {
              var t4 = n3.state.__e;
              n3.__v.__k[0] = function t5(e5, r4, n4) {
                return e5 && (e5.__v = null, e5.__k = e5.__k && e5.__k.map(function(e6) {
                  return t5(e6, r4, n4);
                }), e5.__c && e5.__c.__P === r4 && (e5.__e && n4.insertBefore(e5.__e, e5.__d), e5.__c.__e = true, e5.__c.__P = n4)), e5;
              }(t4, t4.__c.__P, t4.__c.__O);
            }
            var e4;
            for (n3.setState({ __e: n3.__b = null }); e4 = n3.t.pop(); )
              e4.forceUpdate();
          }
        }, c3 = e3.__h === true;
        n3.__u++ || c3 || n3.setState({ __e: n3.__b = n3.__v.__k[0] }), t3.then(a3, a3);
      }, B.prototype.componentWillUnmount = function() {
        this.t = [];
      }, B.prototype.render = function(t3, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), n3 = this.__v.__k[0].__c;
            this.__v.__k[0] = function t4(e4, r4, n4) {
              return e4 && (e4.__c && e4.__c.__H && (e4.__c.__H.__.forEach(function(t5) {
                typeof t5.__c == "function" && t5.__c();
              }), e4.__c.__H = null), (e4 = k2({}, e4)).__c != null && (e4.__c.__P === n4 && (e4.__c.__P = r4), e4.__c = null), e4.__k = e4.__k && e4.__k.map(function(e5) {
                return t4(e5, r4, n4);
              })), e4;
            }(this.__b, r3, n3.__O = n3.__P);
          }
          this.__b = null;
        }
        var o3 = e3.__e && Object(a2.e)(a2.b, null, t3.fallback);
        return o3 && (o3.__h = null), [Object(a2.e)(a2.b, null, e3.__e ? null : t3.children), o3];
      };
      var U = function(t3, e3, r3) {
        if (++r3[1] === r3[0] && t3.o.delete(e3), t3.props.revealOrder && (t3.props.revealOrder[0] !== "t" || !t3.o.size))
          for (r3 = t3.u; r3; ) {
            for (; r3.length > 3; )
              r3.pop()();
            if (r3[1] < r3[0])
              break;
            t3.u = r3 = r3[2];
          }
      };
      function G(t3) {
        return this.getChildContext = function() {
          return t3.context;
        }, t3.children;
      }
      function F(t3) {
        var e3 = this, r3 = t3.i;
        e3.componentWillUnmount = function() {
          Object(a2.j)(null, e3.l), e3.l = null, e3.i = null;
        }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), t3.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(t4) {
          this.childNodes.push(t4), e3.i.appendChild(t4);
        }, insertBefore: function(t4, r4) {
          this.childNodes.push(t4), e3.i.appendChild(t4);
        }, removeChild: function(t4) {
          this.childNodes.splice(this.childNodes.indexOf(t4) >>> 1, 1), e3.i.removeChild(t4);
        } }), Object(a2.j)(Object(a2.e)(G, { context: e3.context }, t3.__v), e3.l)) : e3.l && e3.componentWillUnmount();
      }
      (H2.prototype = new a2.a()).__e = function(t3) {
        var e3 = this, r3 = X(e3.__v), n3 = e3.o.get(t3);
        return n3[0]++, function(o3) {
          var i2 = function() {
            e3.props.revealOrder ? (n3.push(o3), U(e3, t3, n3)) : o3();
          };
          r3 ? r3(i2) : i2();
        };
      }, H2.prototype.render = function(t3) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var e3 = Object(a2.k)(t3.children);
        t3.revealOrder && t3.revealOrder[0] === "b" && e3.reverse();
        for (var r3 = e3.length; r3--; )
          this.o.set(e3[r3], this.u = [1, 0, this.u]);
        return t3.children;
      }, H2.prototype.componentDidUpdate = H2.prototype.componentDidMount = function() {
        var t3 = this;
        this.o.forEach(function(e3, r3) {
          U(t3, r3, e3);
        });
      };
      var Y = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, V = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, W = typeof document != "undefined", K = function(t3) {
        return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t3);
      };
      a2.a.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(a2.a.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(e3) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: e3 });
        } });
      });
      var $2 = a2.i.event;
      function Z() {
      }
      function q() {
        return this.cancelBubble;
      }
      function J() {
        return this.defaultPrevented;
      }
      a2.i.event = function(t3) {
        return $2 && (t3 = $2(t3)), t3.persist = Z, t3.isPropagationStopped = q, t3.isDefaultPrevented = J, t3.nativeEvent = t3;
      };
      var Q, tt = { configurable: true, get: function() {
        return this.class;
      } }, et = a2.i.vnode;
      a2.i.vnode = function(t3) {
        var e3 = t3.type, r3 = t3.props, n3 = r3;
        if (typeof e3 == "string") {
          var o3 = e3.indexOf("-") === -1;
          for (var i2 in n3 = {}, r3) {
            var u3 = r3[i2];
            W && i2 === "children" && e3 === "noscript" || i2 === "value" && "defaultValue" in r3 && u3 == null || (i2 === "defaultValue" && "value" in r3 && r3.value == null ? i2 = "value" : i2 === "download" && u3 === true ? u3 = "" : /ondoubleclick/i.test(i2) ? i2 = "ondblclick" : /^onchange(textarea|input)/i.test(i2 + e3) && !K(r3.type) ? i2 = "oninput" : /^onfocus$/i.test(i2) ? i2 = "onfocusin" : /^onblur$/i.test(i2) ? i2 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(i2) ? i2 = i2.toLowerCase() : o3 && V.test(i2) ? i2 = i2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : u3 === null && (u3 = void 0), n3[i2] = u3);
          }
          e3 == "select" && n3.multiple && Array.isArray(n3.value) && (n3.value = Object(a2.k)(r3.children).forEach(function(t4) {
            t4.props.selected = n3.value.indexOf(t4.props.value) != -1;
          })), e3 == "select" && n3.defaultValue != null && (n3.value = Object(a2.k)(r3.children).forEach(function(t4) {
            t4.props.selected = n3.multiple ? n3.defaultValue.indexOf(t4.props.value) != -1 : n3.defaultValue == t4.props.value;
          })), t3.props = n3, r3.class != r3.className && (tt.enumerable = "className" in r3, r3.className != null && (n3.class = r3.className), Object.defineProperty(n3, "className", tt));
        }
        t3.$$typeof = Y, et && et(t3);
      };
      var rt = a2.i.__r;
      a2.i.__r = function(t3) {
        rt && rt(t3), Q = t3.__c;
      };
      var nt = { ReactCurrentDispatcher: { current: { readContext: function(t3) {
        return Q.__n[t3.__c].props.value;
      } } } };
      function ot(t3) {
        return !!t3 && t3.$$typeof === Y;
      }
      var it = function(t3, e3) {
        return t3(e3);
      }, at = a2.b, ut = { useState: h2, useReducer: v2, useEffect: b2, useLayoutEffect: g2, useRef: function(t3) {
        return u2 = 5, m2(function() {
          return { current: t3 };
        }, []);
      }, useImperativeHandle: function(t3, e3, r3) {
        u2 = 6, g2(function() {
          typeof t3 == "function" ? t3(e3()) : t3 && (t3.current = e3());
        }, r3 == null ? r3 : r3.concat(t3));
      }, useMemo: m2, useCallback: O2, useContext: function(t3) {
        var e3 = o2.context[t3.__c], r3 = y2(n2++, 9);
        return r3.c = t3, e3 ? (r3.__ == null && (r3.__ = true, e3.sub(o2)), e3.props.value) : t3.__;
      }, useDebugValue: function(t3, e3) {
        a2.i.useDebugValue && a2.i.useDebugValue(e3 ? e3(t3) : t3);
      }, version: "17.0.2", Children: I2, render: function(t3, e3, r3) {
        return e3.__k == null && (e3.textContent = ""), Object(a2.j)(t3, e3), typeof r3 == "function" && r3(), t3 ? t3.__c : null;
      }, hydrate: function(t3, e3, r3) {
        return Object(a2.h)(t3, e3), typeof r3 == "function" && r3(), t3 ? t3.__c : null;
      }, unmountComponentAtNode: function(t3) {
        return !!t3.__k && (Object(a2.j)(null, t3), true);
      }, createPortal: function(t3, e3) {
        return Object(a2.e)(F, { __v: t3, i: e3 });
      }, createElement: a2.e, createContext: a2.d, createFactory: function(t3) {
        return a2.e.bind(null, t3);
      }, cloneElement: function(t3) {
        return ot(t3) ? a2.c.apply(null, arguments) : t3;
      }, createRef: a2.f, Fragment: a2.b, isValidElement: ot, findDOMNode: function(t3) {
        return t3 && (t3.base || t3.nodeType === 1 && t3) || null;
      }, Component: a2.a, PureComponent: D, memo: T2, forwardRef: C2, flushSync: function(t3, e3) {
        return t3(e3);
      }, unstable_batchedUpdates: it, StrictMode: at, Suspense: B, SuspenseList: H2, lazy: function(t3) {
        var e3, r3, n3;
        function o3(o4) {
          if (e3 || (e3 = t3()).then(function(t4) {
            r3 = t4.default || t4;
          }, function(t4) {
            n3 = t4;
          }), n3)
            throw n3;
          if (!r3)
            throw e3;
          return Object(a2.e)(r3, o4);
        }
        return o3.displayName = "Lazy", o3.__f = true, o3;
      }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: nt };
      e2.d = ut;
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(143), i = r2(144), a2 = r2(173), u2 = r2(53), c2 = function(t3) {
        if (t3 && t3.forEach !== a2)
          try {
            u2(t3, "forEach", a2);
          } catch (e3) {
            t3.forEach = a2;
          }
      };
      for (var s2 in o2)
        o2[s2] && c2(n2[s2] && n2[s2].prototype);
      c2(i);
    }, function(t2, e2, r2) {
      r2(17)({ target: "Object", stat: true }, { setPrototypeOf: r2(111) });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(19), i = r2(38), a2 = r2(88), u2 = r2(132);
      n2({ target: "Object", stat: true, forced: o2(function() {
        a2(1);
      }), sham: !u2 }, { getPrototypeOf: function(t3) {
        return a2(i(t3));
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(49), i = r2(95), a2 = r2(194), u2 = r2(152), c2 = r2(32), s2 = r2(33), l2 = r2(52), f = r2(19), p = o2("Reflect", "construct"), d2 = Object.prototype, y2 = [].push, h2 = f(function() {
        function t3() {
        }
        return !(p(function() {
        }, [], t3) instanceof t3);
      }), v2 = !f(function() {
        p(function() {
        });
      }), b2 = h2 || v2;
      n2({ target: "Reflect", stat: true, forced: b2, sham: b2 }, { construct: function(t3, e3) {
        u2(t3), c2(e3);
        var r3 = arguments.length < 3 ? t3 : u2(arguments[2]);
        if (v2 && !h2)
          return p(t3, e3, r3);
        if (t3 == r3) {
          switch (e3.length) {
            case 0:
              return new t3();
            case 1:
              return new t3(e3[0]);
            case 2:
              return new t3(e3[0], e3[1]);
            case 3:
              return new t3(e3[0], e3[1], e3[2]);
            case 4:
              return new t3(e3[0], e3[1], e3[2], e3[3]);
          }
          var n3 = [null];
          return i(y2, n3, e3), new (i(a2, t3, n3))();
        }
        var o3 = r3.prototype, f2 = l2(s2(o3) ? o3 : d2), b3 = i(t3, f2, e3);
        return s2(b3) ? b3 : f2;
      } });
    }, function(t2, e2) {
      var r2 = Function.prototype, n2 = r2.bind, o2 = r2.call, i = n2 && n2.bind(o2);
      t2.exports = n2 ? function(t3) {
        return t3 && i(o2, t3);
      } : function(t3) {
        return t3 && function() {
          return o2.apply(t3, arguments);
        };
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(9), i = r2(93), a2 = r2(94), u2 = r2(33), c2 = r2(62), s2 = r2(43), l2 = r2(39), f = r2(58), p = r2(27), d2 = r2(69), y2 = r2(117), h2 = d2("slice"), v2 = p("species"), b2 = o2.Array, g2 = Math.max;
      n2({ target: "Array", proto: true, forced: !h2 }, { slice: function(t3, e3) {
        var r3, n3, o3, p2 = l2(this), d3 = s2(p2), h3 = c2(t3, d3), m2 = c2(e3 === void 0 ? d3 : e3, d3);
        if (i(p2) && (r3 = p2.constructor, (a2(r3) && (r3 === b2 || i(r3.prototype)) || u2(r3) && (r3 = r3[v2]) === null) && (r3 = void 0), r3 === b2 || r3 === void 0))
          return y2(p2, h3, m2);
        for (n3 = new (r3 === void 0 ? b2 : r3)(g2(m2 - h3, 0)), o3 = 0; h3 < m2; h3++, o3++)
          h3 in p2 && f(n3, o3, p2[h3]);
        return n3.length = o3, n3;
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(54).f, i = r2(53), a2 = r2(45), u2 = r2(103), c2 = r2(129), s2 = r2(110);
      t2.exports = function(t3, e3) {
        var r3, l2, f, p, d2, y2 = t3.target, h2 = t3.global, v2 = t3.stat;
        if (r3 = h2 ? n2 : v2 ? n2[y2] || u2(y2, {}) : (n2[y2] || {}).prototype)
          for (l2 in e3) {
            if (p = e3[l2], f = t3.noTargetGet ? (d2 = o2(r3, l2)) && d2.value : r3[l2], !s2(h2 ? l2 : y2 + (v2 ? "." : "#") + l2, t3.forced) && f !== void 0) {
              if (typeof p == typeof f)
                continue;
              c2(p, f);
            }
            (t3.sham || f && f.sham) && i(p, "sham", true), a2(r3, l2, p, t3);
          }
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(96);
      n2({ target: "RegExp", proto: true, forced: /./.exec !== o2 }, { exec: o2 });
    }, function(t2, e2) {
      t2.exports = function(t3) {
        try {
          return !!t3();
        } catch (t4) {
          return true;
        }
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(38), i = r2(61);
      n2({ target: "Object", stat: true, forced: r2(19)(function() {
        i(1);
      }) }, { keys: function(t3) {
        return i(o2(t3));
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(19), i = r2(39), a2 = r2(54).f, u2 = r2(35), c2 = o2(function() {
        a2(1);
      });
      n2({ target: "Object", stat: true, forced: !u2 || c2, sham: !u2 }, { getOwnPropertyDescriptor: function(t3, e3) {
        return a2(i(t3), e3);
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(68).filter;
      n2({ target: "Array", proto: true, forced: !r2(69)("filter") }, { filter: function(t3) {
        return o2(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(35), i = r2(130), a2 = r2(39), u2 = r2(54), c2 = r2(58);
      n2({ target: "Object", stat: true, sham: !o2 }, { getOwnPropertyDescriptors: function(t3) {
        for (var e3, r3, n3 = a2(t3), o3 = u2.f, s2 = i(n3), l2 = {}, f = 0; s2.length > f; )
          (r3 = o3(n3, e3 = s2[f++])) !== void 0 && c2(l2, e3, r3);
        return l2;
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(87).EXISTS, i = r2(15), a2 = r2(37).f, u2 = Function.prototype, c2 = i(u2.toString), s2 = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, l2 = i(s2.exec);
      n2 && !o2 && a2(u2, "name", { configurable: true, get: function() {
        try {
          return l2(s2, c2(this))[1];
        } catch (t3) {
          return "";
        }
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(176);
      n2({ target: "Array", stat: true, forced: !r2(140)(function(t3) {
        Array.from(t3);
      }) }, { from: o2 });
    }, , function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(76), i = r2(34), a2 = r2(78), u2 = r2(104), c2 = r2(124), s2 = o2("wks"), l2 = n2.Symbol, f = l2 && l2.for, p = c2 ? l2 : l2 && l2.withoutSetter || a2;
      t2.exports = function(t3) {
        if (!i(s2, t3) || !u2 && typeof s2[t3] != "string") {
          var e3 = "Symbol." + t3;
          u2 && i(l2, t3) ? s2[t3] = l2[t3] : s2[t3] = c2 && f ? f(e3) : p(e3);
        }
        return s2[t3];
      };
    }, function(t2, e2, r2) {
      var n2 = r2(100), o2 = typeof self == "object" && self && self.Object === Object && self, i = n2.a || o2 || Function("return this")();
      e2.a = i;
    }, function(t2, e2) {
      t2.exports = function(t3) {
        return typeof t3 == "function";
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(9), i = r2(19), a2 = r2(93), u2 = r2(33), c2 = r2(38), s2 = r2(43), l2 = r2(58), f = r2(115), p = r2(69), d2 = r2(27), y2 = r2(79), h2 = d2("isConcatSpreadable"), v2 = o2.TypeError, b2 = y2 >= 51 || !i(function() {
        var t3 = [];
        return t3[h2] = false, t3.concat()[0] !== t3;
      }), g2 = p("concat"), m2 = function(t3) {
        if (!u2(t3))
          return false;
        var e3 = t3[h2];
        return e3 !== void 0 ? !!e3 : a2(t3);
      };
      n2({ target: "Array", proto: true, forced: !b2 || !g2 }, { concat: function(t3) {
        var e3, r3, n3, o3, i2, a3 = c2(this), u3 = f(a3, 0), p2 = 0;
        for (e3 = -1, n3 = arguments.length; e3 < n3; e3++)
          if (m2(i2 = e3 === -1 ? a3 : arguments[e3])) {
            if (p2 + (o3 = s2(i2)) > 9007199254740991)
              throw v2("Maximum allowed index exceeded");
            for (r3 = 0; r3 < o3; r3++, p2++)
              r3 in i2 && l2(u3, p2, i2[r3]);
          } else {
            if (p2 >= 9007199254740991)
              throw v2("Maximum allowed index exceeded");
            l2(u3, p2++, i2);
          }
        return u3.length = p2, u3;
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(196);
      n2({ target: "Object", stat: true, forced: Object.assign !== o2 }, { assign: o2 });
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(33), i = n2.String, a2 = n2.TypeError;
      t2.exports = function(t3) {
        if (o2(t3))
          return t3;
        throw a2(i(t3) + " is not an object");
      };
    }, function(t2, e2, r2) {
      var n2 = r2(29);
      t2.exports = function(t3) {
        return typeof t3 == "object" ? t3 !== null : n2(t3);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(38), i = n2({}.hasOwnProperty);
      t2.exports = Object.hasOwn || function(t3, e3) {
        return i(o2(t3), e3);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(19);
      t2.exports = !n2(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }, function(t2, e2) {
      var r2 = Function.prototype.call;
      t2.exports = r2.bind ? r2.bind(r2) : function() {
        return r2.apply(r2, arguments);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(35), i = r2(125), a2 = r2(32), u2 = r2(81), c2 = n2.TypeError, s2 = Object.defineProperty;
      e2.f = o2 ? s2 : function(t3, e3, r3) {
        if (a2(t3), e3 = u2(e3), a2(r3), i)
          try {
            return s2(t3, e3, r3);
          } catch (t4) {
          }
        if ("get" in r3 || "set" in r3)
          throw c2("Accessors not supported");
        return "value" in r3 && (t3[e3] = r3.value), t3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(44), i = n2.Object;
      t2.exports = function(t3) {
        return i(o2(t3));
      };
    }, function(t2, e2, r2) {
      var n2 = r2(73), o2 = r2(44);
      t2.exports = function(t3) {
        return n2(o2(t3));
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(92), i = n2.String;
      t2.exports = function(t3) {
        if (o2(t3) === "Symbol")
          throw TypeError("Cannot convert a Symbol value to a string");
        return i(t3);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(68).map;
      n2({ target: "Array", proto: true, forced: !r2(69)("map") }, { map: function(t3) {
        return o2(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(t2, e2, r2) {
      (function(t3) {
        r2.d(e2, "d", function() {
          return i;
        }), r2.d(e2, "c", function() {
          return a2;
        }), r2.d(e2, "b", function() {
          return u2;
        }), r2.d(e2, "a", function() {
          return s2;
        });
        var n2 = r2(10), o2 = function(t4, e3) {
          var r3 = typeof Symbol == "function" && t4[Symbol.iterator];
          if (!r3)
            return t4;
          var n3, o3, i2 = r3.call(t4), a3 = [];
          try {
            for (; (e3 === void 0 || e3-- > 0) && !(n3 = i2.next()).done; )
              a3.push(n3.value);
          } catch (t5) {
            o3 = { error: t5 };
          } finally {
            try {
              n3 && !n3.done && (r3 = i2.return) && r3.call(i2);
            } finally {
              if (o3)
                throw o3.error;
            }
          }
          return a3;
        };
        function i() {
          var t4 = o2(Object(n2.j)(0), 2)[1];
          return Object(n2.h)(function() {
            t4(function(t5) {
              return t5 + 1;
            });
          }, []);
        }
        function a2(t4) {
          if (!t4 || typeof t4 != "object")
            return false;
          var e3 = Object.getPrototypeOf(t4);
          return !e3 || e3 === Object.prototype;
        }
        function u2(t4) {
          return typeof Symbol == "function" ? Symbol.for(t4) : "__$mobx-react " + t4 + "__";
        }
        var c2 = {};
        function s2() {
          return typeof window != "undefined" ? window : t3 !== void 0 ? t3 : typeof self != "undefined" ? self : c2;
        }
      }).call(this, r2(74));
    }, function(t2, e2, r2) {
      var n2 = r2(84);
      t2.exports = function(t3) {
        return n2(t3.length);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9).TypeError;
      t2.exports = function(t3) {
        if (t3 == null)
          throw n2("Can't call method on " + t3);
        return t3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(29), i = r2(34), a2 = r2(53), u2 = r2(103), c2 = r2(107), s2 = r2(57), l2 = r2(87).CONFIGURABLE, f = s2.get, p = s2.enforce, d2 = String(String).split("String");
      (t2.exports = function(t3, e3, r3, c3) {
        var s3, f2 = !!c3 && !!c3.unsafe, y2 = !!c3 && !!c3.enumerable, h2 = !!c3 && !!c3.noTargetGet, v2 = c3 && c3.name !== void 0 ? c3.name : e3;
        o2(r3) && (String(v2).slice(0, 7) === "Symbol(" && (v2 = "[" + String(v2).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!i(r3, "name") || l2 && r3.name !== v2) && a2(r3, "name", v2), (s3 = p(r3)).source || (s3.source = d2.join(typeof v2 == "string" ? v2 : ""))), t3 !== n2 ? (f2 ? !h2 && t3[e3] && (y2 = true) : delete t3[e3], y2 ? t3[e3] = r3 : a2(t3, e3, r3)) : y2 ? t3[e3] = r3 : u2(e3, r3);
      })(Function.prototype, "toString", function() {
        return o2(this) && f(this).source || c2(this);
      });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(36), i = r2(33), a2 = r2(32), u2 = r2(195), c2 = r2(54), s2 = r2(88);
      n2({ target: "Reflect", stat: true }, { get: function t3(e3, r3) {
        var n3, l2, f = arguments.length < 3 ? e3 : arguments[2];
        return a2(e3) === f ? e3[r3] : (n3 = c2.f(e3, r3)) ? u2(n3) ? n3.value : n3.get === void 0 ? void 0 : o2(n3.get, f) : i(l2 = s2(e3)) ? t3(l2, r3, f) : void 0;
      } });
    }, function(t2, e2, r2) {
      (function(t3) {
        var n2 = r2(28), o2 = r2(156), i = exports && !exports.nodeType && exports, a2 = i && typeof t3 == "object" && t3 && !t3.nodeType && t3, u2 = a2 && a2.exports === i ? n2.a.Buffer : void 0, c2 = (u2 ? u2.isBuffer : void 0) || o2.a;
        e2.a = c2;
      }).call(this, r2(118)(t2));
    }, function(t2, e2, r2) {
      (function(t3) {
        var n2 = r2(100), o2 = exports && !exports.nodeType && exports, i = o2 && typeof t3 == "object" && t3 && !t3.nodeType && t3, a2 = i && i.exports === o2 && n2.a.process, u2 = function() {
          try {
            var t4 = i && i.require && i.require("util").types;
            return t4 || a2 && a2.binding && a2.binding("util");
          } catch (t5) {
          }
        }();
        e2.a = u2;
      }).call(this, r2(118)(t2));
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(29), i = function(t3) {
        return o2(t3) ? t3 : void 0;
      };
      t2.exports = function(t3, e3) {
        return arguments.length < 2 ? i(n2[t3]) : n2[t3] && n2[t3][e3];
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(200).entries;
      n2({ target: "Object", stat: true }, { entries: function(t3) {
        return o2(t3);
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = n2({}.toString), i = n2("".slice);
      t2.exports = function(t3) {
        return i(o2(t3), 8, -1);
      };
    }, function(t2, e2, r2) {
      var n2, o2 = r2(32), i = r2(159), a2 = r2(106), u2 = r2(64), c2 = r2(161), s2 = r2(105), l2 = r2(85), f = l2("IE_PROTO"), p = function() {
      }, d2 = function(t3) {
        return "<script>" + t3 + "<\/script>";
      }, y2 = function(t3) {
        t3.write(d2("")), t3.close();
        var e3 = t3.parentWindow.Object;
        return t3 = null, e3;
      }, h2 = function() {
        try {
          n2 = new ActiveXObject("htmlfile");
        } catch (t4) {
        }
        var t3, e3;
        h2 = typeof document != "undefined" ? document.domain && n2 ? y2(n2) : ((e3 = s2("iframe")).style.display = "none", c2.appendChild(e3), e3.src = String("javascript:"), (t3 = e3.contentWindow.document).open(), t3.write(d2("document.F=Object")), t3.close(), t3.F) : y2(n2);
        for (var r3 = a2.length; r3--; )
          delete h2.prototype[a2[r3]];
        return h2();
      };
      u2[f] = true, t2.exports = Object.create || function(t3, e3) {
        var r3;
        return t3 !== null ? (p.prototype = o2(t3), r3 = new p(), p.prototype = null, r3[f] = t3) : r3 = h2(), e3 === void 0 ? r3 : i(r3, e3);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(37), i = r2(66);
      t2.exports = n2 ? function(t3, e3, r3) {
        return o2.f(t3, e3, i(1, r3));
      } : function(t3, e3, r3) {
        return t3[e3] = r3, t3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(36), i = r2(86), a2 = r2(66), u2 = r2(39), c2 = r2(81), s2 = r2(34), l2 = r2(125), f = Object.getOwnPropertyDescriptor;
      e2.f = n2 ? f : function(t3, e3) {
        if (t3 = u2(t3), e3 = c2(e3), l2)
          try {
            return f(t3, e3);
          } catch (t4) {
          }
        if (s2(t3, e3))
          return a2(!o2(i.f, t3, e3), t3[e3]);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(15);
      t2.exports = n2({}.isPrototypeOf);
    }, function(t2, e2, r2) {
      var n2 = r2(60);
      t2.exports = function(t3, e3) {
        var r3 = t3[e3];
        return r3 == null ? void 0 : n2(r3);
      };
    }, function(t2, e2, r2) {
      var n2, o2, i, a2 = r2(162), u2 = r2(9), c2 = r2(15), s2 = r2(33), l2 = r2(53), f = r2(34), p = r2(102), d2 = r2(85), y2 = r2(64), h2 = u2.TypeError, v2 = u2.WeakMap;
      if (a2 || p.state) {
        var b2 = p.state || (p.state = new v2()), g2 = c2(b2.get), m2 = c2(b2.has), O2 = c2(b2.set);
        n2 = function(t3, e3) {
          if (m2(b2, t3))
            throw new h2("Object already initialized");
          return e3.facade = t3, O2(b2, t3, e3), e3;
        }, o2 = function(t3) {
          return g2(b2, t3) || {};
        }, i = function(t3) {
          return m2(b2, t3);
        };
      } else {
        var w2 = d2("state");
        y2[w2] = true, n2 = function(t3, e3) {
          if (f(t3, w2))
            throw new h2("Object already initialized");
          return e3.facade = t3, l2(t3, w2, e3), e3;
        }, o2 = function(t3) {
          return f(t3, w2) ? t3[w2] : {};
        }, i = function(t3) {
          return f(t3, w2);
        };
      }
      t2.exports = { set: n2, get: o2, has: i, enforce: function(t3) {
        return i(t3) ? o2(t3) : n2(t3, {});
      }, getterFor: function(t3) {
        return function(e3) {
          var r3;
          if (!s2(e3) || (r3 = o2(e3)).type !== t3)
            throw h2("Incompatible receiver, " + t3 + " required");
          return r3;
        };
      } };
    }, function(t2, e2, r2) {
      var n2 = r2(81), o2 = r2(37), i = r2(66);
      t2.exports = function(t3, e3, r3) {
        var a2 = n2(e3);
        a2 in t3 ? o2.f(t3, a2, i(0, r3)) : t3[a2] = r3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(201), i = r2(75);
      n2({ target: "Array", proto: true }, { fill: o2 }), i("fill");
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(29), i = r2(83), a2 = n2.TypeError;
      t2.exports = function(t3) {
        if (o2(t3))
          return t3;
        throw a2(i(t3) + " is not a function");
      };
    }, function(t2, e2, r2) {
      var n2 = r2(127), o2 = r2(106);
      t2.exports = Object.keys || function(t3) {
        return n2(t3, o2);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(63), o2 = Math.max, i = Math.min;
      t2.exports = function(t3, e3) {
        var r3 = n2(t3);
        return r3 < 0 ? o2(r3 + e3, 0) : i(r3, e3);
      };
    }, function(t2, e2) {
      var r2 = Math.ceil, n2 = Math.floor;
      t2.exports = function(t3) {
        var e3 = +t3;
        return e3 != e3 || e3 === 0 ? 0 : (e3 > 0 ? n2 : r2)(e3);
      };
    }, function(t2, e2) {
      t2.exports = {};
    }, function(t2, e2) {
      t2.exports = {};
    }, function(t2, e2) {
      t2.exports = function(t3, e3) {
        return { enumerable: !(1 & t3), configurable: !(2 & t3), writable: !(4 & t3), value: e3 };
      };
    }, function(t2, e2, r2) {
      var n2 = r2(127), o2 = r2(106).concat("length", "prototype");
      e2.f = Object.getOwnPropertyNames || function(t3) {
        return n2(t3, o2);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(91), o2 = r2(15), i = r2(73), a2 = r2(38), u2 = r2(43), c2 = r2(115), s2 = o2([].push), l2 = function(t3) {
        var e3 = t3 == 1, r3 = t3 == 2, o3 = t3 == 3, l3 = t3 == 4, f = t3 == 6, p = t3 == 7, d2 = t3 == 5 || f;
        return function(y2, h2, v2, b2) {
          for (var g2, m2, O2 = a2(y2), w2 = i(O2), _2 = n2(h2, v2), j2 = u2(w2), E = 0, x2 = b2 || c2, S = e3 ? x2(y2, j2) : r3 || p ? x2(y2, 0) : void 0; j2 > E; E++)
            if ((d2 || E in w2) && (m2 = _2(g2 = w2[E], E, O2), t3))
              if (e3)
                S[E] = m2;
              else if (m2)
                switch (t3) {
                  case 3:
                    return true;
                  case 5:
                    return g2;
                  case 6:
                    return E;
                  case 2:
                    s2(S, g2);
                }
              else
                switch (t3) {
                  case 4:
                    return false;
                  case 7:
                    s2(S, g2);
                }
          return f ? -1 : o3 || l3 ? l3 : S;
        };
      };
      t2.exports = { forEach: l2(0), map: l2(1), filter: l2(2), some: l2(3), every: l2(4), find: l2(5), findIndex: l2(6), filterReject: l2(7) };
    }, function(t2, e2, r2) {
      var n2 = r2(19), o2 = r2(27), i = r2(79), a2 = o2("species");
      t2.exports = function(t3) {
        return i >= 51 || !n2(function() {
          var e3 = [];
          return (e3.constructor = {})[a2] = function() {
            return { foo: 1 };
          }, e3[t3](Boolean).foo !== 1;
        });
      };
    }, function(t2, e2, r2) {
      var n2 = r2(95), o2 = r2(36), i = r2(15), a2 = r2(119), u2 = r2(150), c2 = r2(32), s2 = r2(44), l2 = r2(189), f = r2(120), p = r2(84), d2 = r2(40), y2 = r2(56), h2 = r2(112), v2 = r2(121), b2 = r2(96), g2 = r2(147), m2 = r2(19), O2 = g2.UNSUPPORTED_Y, w2 = Math.min, _2 = [].push, j2 = i(/./.exec), E = i(_2), x2 = i("".slice);
      a2("split", function(t3, e3, r3) {
        var i2;
        return i2 = "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t4, r4) {
          var i3 = d2(s2(this)), a3 = r4 === void 0 ? 4294967295 : r4 >>> 0;
          if (a3 === 0)
            return [];
          if (t4 === void 0)
            return [i3];
          if (!u2(t4))
            return o2(e3, i3, t4, a3);
          for (var c3, l3, f2, p2 = [], y3 = (t4.ignoreCase ? "i" : "") + (t4.multiline ? "m" : "") + (t4.unicode ? "u" : "") + (t4.sticky ? "y" : ""), v3 = 0, g3 = new RegExp(t4.source, y3 + "g"); (c3 = o2(b2, g3, i3)) && !((l3 = g3.lastIndex) > v3 && (E(p2, x2(i3, v3, c3.index)), c3.length > 1 && c3.index < i3.length && n2(_2, p2, h2(c3, 1)), f2 = c3[0].length, v3 = l3, p2.length >= a3)); )
            g3.lastIndex === c3.index && g3.lastIndex++;
          return v3 === i3.length ? !f2 && j2(g3, "") || E(p2, "") : E(p2, x2(i3, v3)), p2.length > a3 ? h2(p2, 0, a3) : p2;
        } : "0".split(void 0, 0).length ? function(t4, r4) {
          return t4 === void 0 && r4 === 0 ? [] : o2(e3, this, t4, r4);
        } : e3, [function(e4, r4) {
          var n3 = s2(this), a3 = e4 == null ? void 0 : y2(e4, t3);
          return a3 ? o2(a3, e4, n3, r4) : o2(i2, d2(n3), e4, r4);
        }, function(t4, n3) {
          var o3 = c2(this), a3 = d2(t4), u3 = r3(i2, o3, a3, n3, i2 !== e3);
          if (u3.done)
            return u3.value;
          var s3 = l2(o3, RegExp), y3 = o3.unicode, h3 = (o3.ignoreCase ? "i" : "") + (o3.multiline ? "m" : "") + (o3.unicode ? "u" : "") + (O2 ? "g" : "y"), b3 = new s3(O2 ? "^(?:" + o3.source + ")" : o3, h3), g3 = n3 === void 0 ? 4294967295 : n3 >>> 0;
          if (g3 === 0)
            return [];
          if (a3.length === 0)
            return v2(b3, a3) === null ? [a3] : [];
          for (var m3 = 0, _3 = 0, j3 = []; _3 < a3.length; ) {
            b3.lastIndex = O2 ? 0 : _3;
            var S, P2 = v2(b3, O2 ? x2(a3, _3) : a3);
            if (P2 === null || (S = w2(p(b3.lastIndex + (O2 ? _3 : 0)), a3.length)) === m3)
              _3 = f(a3, _3, y3);
            else {
              if (E(j3, x2(a3, m3, _3)), j3.length === g3)
                return j3;
              for (var k2 = 1; k2 <= P2.length - 1; k2++)
                if (E(j3, P2[k2]), j3.length === g3)
                  return j3;
              _3 = m3 = S;
            }
          }
          return E(j3, x2(a3, m3)), j3;
        }];
      }, !!m2(function() {
        var t3 = /(?:)/, e3 = t3.exec;
        t3.exec = function() {
          return e3.apply(this, arguments);
        };
        var r3 = "ab".split(t3);
        return r3.length !== 2 || r3[0] !== "a" || r3[1] !== "b";
      }), O2);
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(9), i = r2(15), a2 = r2(110), u2 = r2(45), c2 = r2(34), s2 = r2(141), l2 = r2(55), f = r2(82), p = r2(126), d2 = r2(19), y2 = r2(67).f, h2 = r2(54).f, v2 = r2(37).f, b2 = r2(192), g2 = r2(153).trim, m2 = o2.Number, O2 = m2.prototype, w2 = o2.TypeError, _2 = i("".slice), j2 = i("".charCodeAt), E = function(t3) {
        var e3 = p(t3, "number");
        return typeof e3 == "bigint" ? e3 : x2(e3);
      }, x2 = function(t3) {
        var e3, r3, n3, o3, i2, a3, u3, c3, s3 = p(t3, "number");
        if (f(s3))
          throw w2("Cannot convert a Symbol value to a number");
        if (typeof s3 == "string" && s3.length > 2) {
          if (s3 = g2(s3), (e3 = j2(s3, 0)) === 43 || e3 === 45) {
            if ((r3 = j2(s3, 2)) === 88 || r3 === 120)
              return NaN;
          } else if (e3 === 48) {
            switch (j2(s3, 1)) {
              case 66:
              case 98:
                n3 = 2, o3 = 49;
                break;
              case 79:
              case 111:
                n3 = 8, o3 = 55;
                break;
              default:
                return +s3;
            }
            for (a3 = (i2 = _2(s3, 2)).length, u3 = 0; u3 < a3; u3++)
              if ((c3 = j2(i2, u3)) < 48 || c3 > o3)
                return NaN;
            return parseInt(i2, n3);
          }
        }
        return +s3;
      };
      if (a2("Number", !m2(" 0o1") || !m2("0b1") || m2("+0x1"))) {
        for (var S, P2 = function(t3) {
          var e3 = arguments.length < 1 ? 0 : m2(E(t3)), r3 = this;
          return l2(O2, r3) && d2(function() {
            b2(r3);
          }) ? s2(Object(e3), r3, P2) : e3;
        }, k2 = n2 ? y2(m2) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), A = 0; k2.length > A; A++)
          c2(m2, S = k2[A]) && !c2(P2, S) && v2(P2, S, h2(m2, S));
        P2.prototype = O2, O2.constructor = P2, u2(o2, "Number", P2);
      }
    }, function(t2, e2, r2) {
      r2(17)({ target: "Number", stat: true }, { MAX_SAFE_INTEGER: 9007199254740991 });
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(15), i = r2(19), a2 = r2(51), u2 = n2.Object, c2 = o2("".split);
      t2.exports = i(function() {
        return !u2("z").propertyIsEnumerable(0);
      }) ? function(t3) {
        return a2(t3) == "String" ? c2(t3, "") : u2(t3);
      } : u2;
    }, function(t2, e2) {
      var r2;
      r2 = function() {
        return this;
      }();
      try {
        r2 = r2 || new Function("return this")();
      } catch (t3) {
        typeof window == "object" && (r2 = window);
      }
      t2.exports = r2;
    }, function(t2, e2, r2) {
      var n2 = r2(27), o2 = r2(52), i = r2(37), a2 = n2("unscopables"), u2 = Array.prototype;
      u2[a2] == null && i.f(u2, a2, { configurable: true, value: o2(null) }), t2.exports = function(t3) {
        u2[a2][t3] = true;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(77), o2 = r2(102);
      (t2.exports = function(t3, e3) {
        return o2[t3] || (o2[t3] = e3 !== void 0 ? e3 : {});
      })("versions", []).push({ version: "3.19.3", mode: n2 ? "pure" : "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
    }, function(t2, e2) {
      t2.exports = false;
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = 0, i = Math.random(), a2 = n2(1 .toString);
      t2.exports = function(t3) {
        return "Symbol(" + (t3 === void 0 ? "" : t3) + ")_" + a2(++o2 + i, 36);
      };
    }, function(t2, e2, r2) {
      var n2, o2, i = r2(9), a2 = r2(80), u2 = i.process, c2 = i.Deno, s2 = u2 && u2.versions || c2 && c2.version, l2 = s2 && s2.v8;
      l2 && (o2 = (n2 = l2.split("."))[0] > 0 && n2[0] < 4 ? 1 : +(n2[0] + n2[1])), !o2 && a2 && (!(n2 = a2.match(/Edge\/(\d+)/)) || n2[1] >= 74) && (n2 = a2.match(/Chrome\/(\d+)/)) && (o2 = +n2[1]), t2.exports = o2;
    }, function(t2, e2, r2) {
      var n2 = r2(49);
      t2.exports = n2("navigator", "userAgent") || "";
    }, function(t2, e2, r2) {
      var n2 = r2(126), o2 = r2(82);
      t2.exports = function(t3) {
        var e3 = n2(t3, "string");
        return o2(e3) ? e3 : e3 + "";
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(49), i = r2(29), a2 = r2(55), u2 = r2(124), c2 = n2.Object;
      t2.exports = u2 ? function(t3) {
        return typeof t3 == "symbol";
      } : function(t3) {
        var e3 = o2("Symbol");
        return i(e3) && a2(e3.prototype, c2(t3));
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9).String;
      t2.exports = function(t3) {
        try {
          return n2(t3);
        } catch (t4) {
          return "Object";
        }
      };
    }, function(t2, e2, r2) {
      var n2 = r2(63), o2 = Math.min;
      t2.exports = function(t3) {
        return t3 > 0 ? o2(n2(t3), 9007199254740991) : 0;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(76), o2 = r2(78), i = n2("keys");
      t2.exports = function(t3) {
        return i[t3] || (i[t3] = o2(t3));
      };
    }, function(t2, e2, r2) {
      var n2 = {}.propertyIsEnumerable, o2 = Object.getOwnPropertyDescriptor, i = o2 && !n2.call({ 1: 2 }, 1);
      e2.f = i ? function(t3) {
        var e3 = o2(this, t3);
        return !!e3 && e3.enumerable;
      } : n2;
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(34), i = Function.prototype, a2 = n2 && Object.getOwnPropertyDescriptor, u2 = o2(i, "name"), c2 = u2 && function() {
      }.name === "something", s2 = u2 && (!n2 || n2 && a2(i, "name").configurable);
      t2.exports = { EXISTS: u2, PROPER: c2, CONFIGURABLE: s2 };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(34), i = r2(29), a2 = r2(38), u2 = r2(85), c2 = r2(132), s2 = u2("IE_PROTO"), l2 = n2.Object, f = l2.prototype;
      t2.exports = c2 ? l2.getPrototypeOf : function(t3) {
        var e3 = a2(t3);
        if (o2(e3, s2))
          return e3[s2];
        var r3 = e3.constructor;
        return i(r3) && e3 instanceof r3 ? r3.prototype : e3 instanceof l2 ? f : null;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(37).f, o2 = r2(34), i = r2(27)("toStringTag");
      t2.exports = function(t3, e3, r3) {
        t3 && !o2(t3 = r3 ? t3 : t3.prototype, i) && n2(t3, i, { configurable: true, value: e3 });
      };
    }, function(t2, e2, r2) {
      r2(165)("Map", function(t3) {
        return function() {
          return t3(this, arguments.length ? arguments[0] : void 0);
        };
      }, r2(169));
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(60), i = n2(n2.bind);
      t2.exports = function(t3, e3) {
        return o2(t3), e3 === void 0 ? t3 : i ? i(t3, e3) : function() {
          return t3.apply(e3, arguments);
        };
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(114), i = r2(29), a2 = r2(51), u2 = r2(27)("toStringTag"), c2 = n2.Object, s2 = a2(function() {
        return arguments;
      }()) == "Arguments";
      t2.exports = o2 ? a2 : function(t3) {
        var e3, r3, n3;
        return t3 === void 0 ? "Undefined" : t3 === null ? "Null" : typeof (r3 = function(t4, e4) {
          try {
            return t4[e4];
          } catch (t5) {
          }
        }(e3 = c2(t3), u2)) == "string" ? r3 : s2 ? a2(e3) : (n3 = a2(e3)) == "Object" && i(e3.callee) ? "Arguments" : n3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(51);
      t2.exports = Array.isArray || function(t3) {
        return n2(t3) == "Array";
      };
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(19), i = r2(29), a2 = r2(92), u2 = r2(49), c2 = r2(107), s2 = function() {
      }, l2 = [], f = u2("Reflect", "construct"), p = /^\s*(?:class|function)\b/, d2 = n2(p.exec), y2 = !p.exec(s2), h2 = function(t3) {
        if (!i(t3))
          return false;
        try {
          return f(s2, l2, t3), true;
        } catch (t4) {
          return false;
        }
      };
      t2.exports = !f || o2(function() {
        var t3;
        return h2(h2.call) || !h2(Object) || !h2(function() {
          t3 = true;
        }) || t3;
      }) ? function(t3) {
        if (!i(t3))
          return false;
        switch (a2(t3)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        return y2 || !!d2(p, c2(t3));
      } : h2;
    }, function(t2, e2) {
      var r2 = Function.prototype, n2 = r2.apply, o2 = r2.bind, i = r2.call;
      t2.exports = typeof Reflect == "object" && Reflect.apply || (o2 ? i.bind(n2) : function() {
        return i.apply(n2, arguments);
      });
    }, function(t2, e2, r2) {
      var n2, o2, i = r2(36), a2 = r2(15), u2 = r2(40), c2 = r2(178), s2 = r2(147), l2 = r2(76), f = r2(52), p = r2(57).get, d2 = r2(179), y2 = r2(180), h2 = l2("native-string-replace", String.prototype.replace), v2 = RegExp.prototype.exec, b2 = v2, g2 = a2("".charAt), m2 = a2("".indexOf), O2 = a2("".replace), w2 = a2("".slice), _2 = (o2 = /b*/g, i(v2, n2 = /a/, "a"), i(v2, o2, "a"), n2.lastIndex !== 0 || o2.lastIndex !== 0), j2 = s2.BROKEN_CARET, E = /()??/.exec("")[1] !== void 0;
      (_2 || E || j2 || d2 || y2) && (b2 = function(t3) {
        var e3, r3, n3, o3, a3, s3, l3, d3 = this, y3 = p(d3), x2 = u2(t3), S = y3.raw;
        if (S)
          return S.lastIndex = d3.lastIndex, e3 = i(b2, S, x2), d3.lastIndex = S.lastIndex, e3;
        var P2 = y3.groups, k2 = j2 && d3.sticky, A = i(c2, d3), D = d3.source, T2 = 0, M2 = x2;
        if (k2 && (A = O2(A, "y", ""), m2(A, "g") === -1 && (A += "g"), M2 = w2(x2, d3.lastIndex), d3.lastIndex > 0 && (!d3.multiline || d3.multiline && g2(x2, d3.lastIndex - 1) !== "\n") && (D = "(?: " + D + ")", M2 = " " + M2, T2++), r3 = new RegExp("^(?:" + D + ")", A)), E && (r3 = new RegExp("^" + D + "$(?!\\s)", A)), _2 && (n3 = d3.lastIndex), o3 = i(v2, k2 ? r3 : d3, M2), k2 ? o3 ? (o3.input = w2(o3.input, T2), o3[0] = w2(o3[0], T2), o3.index = d3.lastIndex, d3.lastIndex += o3[0].length) : d3.lastIndex = 0 : _2 && o3 && (d3.lastIndex = d3.global ? o3.index + o3[0].length : n3), E && o3 && o3.length > 1 && i(h2, o3[0], r3, function() {
          for (a3 = 1; a3 < arguments.length - 2; a3++)
            arguments[a3] === void 0 && (o3[a3] = void 0);
        }), o3 && P2)
          for (o3.groups = s3 = f(null), a3 = 0; a3 < P2.length; a3++)
            s3[(l3 = P2[a3])[0]] = o3[l3[1]];
        return o3;
      }), t2.exports = b2;
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(9), i = r2(62), a2 = r2(63), u2 = r2(43), c2 = r2(38), s2 = r2(115), l2 = r2(58), f = r2(69)("splice"), p = o2.TypeError, d2 = Math.max, y2 = Math.min;
      n2({ target: "Array", proto: true, forced: !f }, { splice: function(t3, e3) {
        var r3, n3, o3, f2, h2, v2, b2 = c2(this), g2 = u2(b2), m2 = i(t3, g2), O2 = arguments.length;
        if (O2 === 0 ? r3 = n3 = 0 : O2 === 1 ? (r3 = 0, n3 = g2 - m2) : (r3 = O2 - 2, n3 = y2(d2(a2(e3), 0), g2 - m2)), g2 + r3 - n3 > 9007199254740991)
          throw p("Maximum allowed length exceeded");
        for (o3 = s2(b2, n3), f2 = 0; f2 < n3; f2++)
          (h2 = m2 + f2) in b2 && l2(o3, f2, b2[h2]);
        if (o3.length = n3, r3 < n3) {
          for (f2 = m2; f2 < g2 - n3; f2++)
            v2 = f2 + r3, (h2 = f2 + n3) in b2 ? b2[v2] = b2[h2] : delete b2[v2];
          for (f2 = g2; f2 > g2 - n3 + r3; f2--)
            delete b2[f2 - 1];
        } else if (r3 > n3)
          for (f2 = g2 - n3; f2 > m2; f2--)
            v2 = f2 + r3 - 1, (h2 = f2 + n3 - 1) in b2 ? b2[v2] = b2[h2] : delete b2[v2];
        for (f2 = 0; f2 < r3; f2++)
          b2[f2 + m2] = arguments[f2 + 2];
        return b2.length = g2 - n3 + r3, o3;
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(15), i = r2(73), a2 = r2(39), u2 = r2(116), c2 = o2([].join), s2 = i != Object, l2 = u2("join", ",");
      n2({ target: "Array", proto: true, forced: s2 || !l2 }, { join: function(t3) {
        return c2(a2(this), t3 === void 0 ? "," : t3);
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(197);
      n2({ target: "String", proto: true, forced: r2(198)("anchor") }, { anchor: function(t3) {
        return o2(this, "a", "name", t3);
      } });
    }, function(t2, e2, r2) {
      (function(t3) {
        var r3 = typeof t3 == "object" && t3 && t3.Object === Object && t3;
        e2.a = r3;
      }).call(this, r2(74));
    }, function(t2, e2, r2) {
      (function(t3) {
        var n2 = r2(28), o2 = exports && !exports.nodeType && exports, i = o2 && typeof t3 == "object" && t3 && !t3.nodeType && t3, a2 = i && i.exports === o2 ? n2.a.Buffer : void 0, u2 = a2 ? a2.allocUnsafe : void 0;
        e2.a = function(t4, e3) {
          if (e3)
            return t4.slice();
          var r3 = t4.length, n3 = u2 ? u2(r3) : new t4.constructor(r3);
          return t4.copy(n3), n3;
        };
      }).call(this, r2(118)(t2));
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(103), i = n2["__core-js_shared__"] || o2("__core-js_shared__", {});
      t2.exports = i;
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = Object.defineProperty;
      t2.exports = function(t3, e3) {
        try {
          o2(n2, t3, { value: e3, configurable: true, writable: true });
        } catch (r3) {
          n2[t3] = e3;
        }
        return e3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(79), o2 = r2(19);
      t2.exports = !!Object.getOwnPropertySymbols && !o2(function() {
        var t3 = Symbol();
        return !String(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && n2 && n2 < 41;
      });
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(33), i = n2.document, a2 = o2(i) && o2(i.createElement);
      t2.exports = function(t3) {
        return a2 ? i.createElement(t3) : {};
      };
    }, function(t2, e2) {
      t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(29), i = r2(102), a2 = n2(Function.toString);
      o2(i.inspectSource) || (i.inspectSource = function(t3) {
        return a2(t3);
      }), t2.exports = i.inspectSource;
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(36), i = r2(77), a2 = r2(87), u2 = r2(29), c2 = r2(163), s2 = r2(88), l2 = r2(111), f = r2(89), p = r2(53), d2 = r2(45), y2 = r2(27), h2 = r2(65), v2 = r2(131), b2 = a2.PROPER, g2 = a2.CONFIGURABLE, m2 = v2.IteratorPrototype, O2 = v2.BUGGY_SAFARI_ITERATORS, w2 = y2("iterator"), _2 = function() {
        return this;
      };
      t2.exports = function(t3, e3, r3, a3, y3, v3, j2) {
        c2(r3, e3, a3);
        var E, x2, S, P2 = function(t4) {
          if (t4 === y3 && M2)
            return M2;
          if (!O2 && t4 in D)
            return D[t4];
          switch (t4) {
            case "keys":
            case "values":
            case "entries":
              return function() {
                return new r3(this, t4);
              };
          }
          return function() {
            return new r3(this);
          };
        }, k2 = e3 + " Iterator", A = false, D = t3.prototype, T2 = D[w2] || D["@@iterator"] || y3 && D[y3], M2 = !O2 && T2 || P2(y3), N2 = e3 == "Array" && D.entries || T2;
        if (N2 && (E = s2(N2.call(new t3()))) !== Object.prototype && E.next && (i || s2(E) === m2 || (l2 ? l2(E, m2) : u2(E[w2]) || d2(E, w2, _2)), f(E, k2, true, true), i && (h2[k2] = _2)), b2 && y3 == "values" && T2 && T2.name !== "values" && (!i && g2 ? p(D, "name", "values") : (A = true, M2 = function() {
          return o2(T2, this);
        })), y3)
          if (x2 = { values: P2("values"), keys: v3 ? M2 : P2("keys"), entries: P2("entries") }, j2)
            for (S in x2)
              (O2 || A || !(S in D)) && d2(D, S, x2[S]);
          else
            n2({ target: e3, proto: true, forced: O2 || A }, x2);
        return i && !j2 || D[w2] === M2 || d2(D, w2, M2, { name: y3 }), h2[e3] = M2, x2;
      };
    }, function(t2, e2) {
      e2.f = Object.getOwnPropertySymbols;
    }, function(t2, e2, r2) {
      var n2 = r2(19), o2 = r2(29), i = /#|\.prototype\./, a2 = function(t3, e3) {
        var r3 = c2[u2(t3)];
        return r3 == l2 || r3 != s2 && (o2(e3) ? n2(e3) : !!e3);
      }, u2 = a2.normalize = function(t3) {
        return String(t3).replace(i, ".").toLowerCase();
      }, c2 = a2.data = {}, s2 = a2.NATIVE = "N", l2 = a2.POLYFILL = "P";
      t2.exports = a2;
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(32), i = r2(164);
      t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t3, e3 = false, r3 = {};
        try {
          (t3 = n2(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r3, []), e3 = r3 instanceof Array;
        } catch (t4) {
        }
        return function(r4, n3) {
          return o2(r4), i(n3), e3 ? t3(r4, n3) : r4.__proto__ = n3, r4;
        };
      }() : void 0);
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(62), i = r2(43), a2 = r2(58), u2 = n2.Array, c2 = Math.max;
      t2.exports = function(t3, e3, r3) {
        for (var n3 = i(t3), s2 = o2(e3, n3), l2 = o2(r3 === void 0 ? n3 : r3, n3), f = u2(c2(l2 - s2, 0)), p = 0; s2 < l2; s2++, p++)
          a2(f, p, t3[s2]);
        return f.length = p, f;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(92), o2 = r2(56), i = r2(65), a2 = r2(27)("iterator");
      t2.exports = function(t3) {
        if (t3 != null)
          return o2(t3, a2) || o2(t3, "@@iterator") || i[n2(t3)];
      };
    }, function(t2, e2, r2) {
      var n2 = {};
      n2[r2(27)("toStringTag")] = "z", t2.exports = String(n2) === "[object z]";
    }, function(t2, e2, r2) {
      var n2 = r2(174);
      t2.exports = function(t3, e3) {
        return new (n2(t3))(e3 === 0 ? 0 : e3);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(19);
      t2.exports = function(t3, e3) {
        var r3 = [][t3];
        return !!r3 && n2(function() {
          r3.call(null, e3 || function() {
            throw 1;
          }, 1);
        });
      };
    }, function(t2, e2, r2) {
      var n2 = r2(15);
      t2.exports = n2([].slice);
    }, function(t2, e2) {
      t2.exports = function(t3) {
        if (!t3.webpackPolyfill) {
          var e3 = Object.create(t3);
          e3.children || (e3.children = []), Object.defineProperty(e3, "loaded", { enumerable: true, get: function() {
            return e3.l;
          } }), Object.defineProperty(e3, "id", { enumerable: true, get: function() {
            return e3.i;
          } }), Object.defineProperty(e3, "exports", { enumerable: true }), e3.webpackPolyfill = 1;
        }
        return e3;
      };
    }, function(t2, e2, r2) {
      r2(18);
      var n2 = r2(15), o2 = r2(45), i = r2(96), a2 = r2(19), u2 = r2(27), c2 = r2(53), s2 = u2("species"), l2 = RegExp.prototype;
      t2.exports = function(t3, e3, r3, f) {
        var p = u2(t3), d2 = !a2(function() {
          var e4 = {};
          return e4[p] = function() {
            return 7;
          }, ""[t3](e4) != 7;
        }), y2 = d2 && !a2(function() {
          var e4 = false, r4 = /a/;
          return t3 === "split" && ((r4 = {}).constructor = {}, r4.constructor[s2] = function() {
            return r4;
          }, r4.flags = "", r4[p] = /./[p]), r4.exec = function() {
            return e4 = true, null;
          }, r4[p](""), !e4;
        });
        if (!d2 || !y2 || r3) {
          var h2 = n2(/./[p]), v2 = e3(p, ""[t3], function(t4, e4, r4, o3, a3) {
            var u3 = n2(t4), c3 = e4.exec;
            return c3 === i || c3 === l2.exec ? d2 && !a3 ? { done: true, value: h2(e4, r4, o3) } : { done: true, value: u3(r4, e4, o3) } : { done: false };
          });
          o2(String.prototype, t3, v2[0]), o2(l2, p, v2[1]);
        }
        f && c2(l2[p], "sham", true);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(142).charAt;
      t2.exports = function(t3, e3, r3) {
        return e3 + (r3 ? n2(t3, e3).length : 1);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(36), i = r2(32), a2 = r2(29), u2 = r2(51), c2 = r2(96), s2 = n2.TypeError;
      t2.exports = function(t3, e3) {
        var r3 = t3.exec;
        if (a2(r3)) {
          var n3 = o2(r3, t3, e3);
          return n3 !== null && i(n3), n3;
        }
        if (u2(t3) === "RegExp")
          return o2(c2, t3, e3);
        throw s2("RegExp#exec called on incompatible receiver");
      };
    }, function(t2, e2, r2) {
      var n2 = r2(95), o2 = r2(36), i = r2(15), a2 = r2(119), u2 = r2(19), c2 = r2(32), s2 = r2(29), l2 = r2(63), f = r2(84), p = r2(40), d2 = r2(44), y2 = r2(120), h2 = r2(56), v2 = r2(193), b2 = r2(121), g2 = r2(27)("replace"), m2 = Math.max, O2 = Math.min, w2 = i([].concat), _2 = i([].push), j2 = i("".indexOf), E = i("".slice), x2 = "a".replace(/./, "$0") === "$0", S = !!/./[g2] && /./[g2]("a", "$0") === "";
      a2("replace", function(t3, e3, r3) {
        var i2 = S ? "$" : "$0";
        return [function(t4, r4) {
          var n3 = d2(this), i3 = t4 == null ? void 0 : h2(t4, g2);
          return i3 ? o2(i3, t4, n3, r4) : o2(e3, p(n3), t4, r4);
        }, function(t4, o3) {
          var a3 = c2(this), u3 = p(t4);
          if (typeof o3 == "string" && j2(o3, i2) === -1 && j2(o3, "$<") === -1) {
            var d3 = r3(e3, a3, u3, o3);
            if (d3.done)
              return d3.value;
          }
          var h3 = s2(o3);
          h3 || (o3 = p(o3));
          var g3 = a3.global;
          if (g3) {
            var x3 = a3.unicode;
            a3.lastIndex = 0;
          }
          for (var S2 = []; ; ) {
            var P2 = b2(a3, u3);
            if (P2 === null)
              break;
            if (_2(S2, P2), !g3)
              break;
            p(P2[0]) === "" && (a3.lastIndex = y2(u3, f(a3.lastIndex), x3));
          }
          for (var k2, A = "", D = 0, T2 = 0; T2 < S2.length; T2++) {
            for (var M2 = p((P2 = S2[T2])[0]), N2 = m2(O2(l2(P2.index), u3.length), 0), C2 = [], R = 1; R < P2.length; R++)
              _2(C2, (k2 = P2[R]) === void 0 ? k2 : String(k2));
            var I2 = P2.groups;
            if (h3) {
              var L2 = w2([M2], C2, N2, u3);
              I2 !== void 0 && _2(L2, I2);
              var z2 = p(n2(o3, void 0, L2));
            } else
              z2 = v2(M2, u3, N2, C2, I2, o3);
            N2 >= D && (A += E(u3, D, N2) + z2, D = N2 + M2.length);
          }
          return A + E(u3, D);
        }];
      }, !!u2(function() {
        var t3 = /./;
        return t3.exec = function() {
          var t4 = [];
          return t4.groups = { a: "7" }, t4;
        }, "".replace(t3, "$<a>") !== "7";
      }) || !x2 || S);
    }, function(t2, e2, r2) {
      r2(17)({ target: "Number", stat: true }, { MIN_SAFE_INTEGER: -9007199254740991 });
    }, function(t2, e2, r2) {
      var n2 = r2(104);
      t2.exports = n2 && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(19), i = r2(105);
      t2.exports = !n2 && !o2(function() {
        return Object.defineProperty(i("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(36), i = r2(33), a2 = r2(82), u2 = r2(56), c2 = r2(160), s2 = r2(27), l2 = n2.TypeError, f = s2("toPrimitive");
      t2.exports = function(t3, e3) {
        if (!i(t3) || a2(t3))
          return t3;
        var r3, n3 = u2(t3, f);
        if (n3) {
          if (e3 === void 0 && (e3 = "default"), r3 = o2(n3, t3, e3), !i(r3) || a2(r3))
            return r3;
          throw l2("Can't convert object to primitive value");
        }
        return e3 === void 0 && (e3 = "number"), c2(t3, e3);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(34), i = r2(39), a2 = r2(128).indexOf, u2 = r2(64), c2 = n2([].push);
      t2.exports = function(t3, e3) {
        var r3, n3 = i(t3), s2 = 0, l2 = [];
        for (r3 in n3)
          !o2(u2, r3) && o2(n3, r3) && c2(l2, r3);
        for (; e3.length > s2; )
          o2(n3, r3 = e3[s2++]) && (~a2(l2, r3) || c2(l2, r3));
        return l2;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(39), o2 = r2(62), i = r2(43), a2 = function(t3) {
        return function(e3, r3, a3) {
          var u2, c2 = n2(e3), s2 = i(c2), l2 = o2(a3, s2);
          if (t3 && r3 != r3) {
            for (; s2 > l2; )
              if ((u2 = c2[l2++]) != u2)
                return true;
          } else
            for (; s2 > l2; l2++)
              if ((t3 || l2 in c2) && c2[l2] === r3)
                return t3 || l2 || 0;
          return !t3 && -1;
        };
      };
      t2.exports = { includes: a2(true), indexOf: a2(false) };
    }, function(t2, e2, r2) {
      var n2 = r2(34), o2 = r2(130), i = r2(54), a2 = r2(37);
      t2.exports = function(t3, e3) {
        for (var r3 = o2(e3), u2 = a2.f, c2 = i.f, s2 = 0; s2 < r3.length; s2++) {
          var l2 = r3[s2];
          n2(t3, l2) || u2(t3, l2, c2(e3, l2));
        }
      };
    }, function(t2, e2, r2) {
      var n2 = r2(49), o2 = r2(15), i = r2(67), a2 = r2(109), u2 = r2(32), c2 = o2([].concat);
      t2.exports = n2("Reflect", "ownKeys") || function(t3) {
        var e3 = i.f(u2(t3)), r3 = a2.f;
        return r3 ? c2(e3, r3(t3)) : e3;
      };
    }, function(t2, e2, r2) {
      var n2, o2, i, a2 = r2(19), u2 = r2(29), c2 = r2(52), s2 = r2(88), l2 = r2(45), f = r2(27), p = r2(77), d2 = f("iterator"), y2 = false;
      [].keys && ("next" in (i = [].keys()) ? (o2 = s2(s2(i))) !== Object.prototype && (n2 = o2) : y2 = true), n2 == null || a2(function() {
        var t3 = {};
        return n2[d2].call(t3) !== t3;
      }) ? n2 = {} : p && (n2 = c2(n2)), u2(n2[d2]) || l2(n2, d2, function() {
        return this;
      }), t2.exports = { IteratorPrototype: n2, BUGGY_SAFARI_ITERATORS: y2 };
    }, function(t2, e2, r2) {
      var n2 = r2(19);
      t2.exports = !n2(function() {
        function t3() {
        }
        return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
      });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(15), i = r2(64), a2 = r2(33), u2 = r2(34), c2 = r2(37).f, s2 = r2(67), l2 = r2(134), f = r2(166), p = r2(78), d2 = r2(168), y2 = false, h2 = p("meta"), v2 = 0, b2 = function(t3) {
        c2(t3, h2, { value: { objectID: "O" + v2++, weakData: {} } });
      }, g2 = t2.exports = { enable: function() {
        g2.enable = function() {
        }, y2 = true;
        var t3 = s2.f, e3 = o2([].splice), r3 = {};
        r3[h2] = 1, t3(r3).length && (s2.f = function(r4) {
          for (var n3 = t3(r4), o3 = 0, i2 = n3.length; o3 < i2; o3++)
            if (n3[o3] === h2) {
              e3(n3, o3, 1);
              break;
            }
          return n3;
        }, n2({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: l2.f }));
      }, fastKey: function(t3, e3) {
        if (!a2(t3))
          return typeof t3 == "symbol" ? t3 : (typeof t3 == "string" ? "S" : "P") + t3;
        if (!u2(t3, h2)) {
          if (!f(t3))
            return "F";
          if (!e3)
            return "E";
          b2(t3);
        }
        return t3[h2].objectID;
      }, getWeakData: function(t3, e3) {
        if (!u2(t3, h2)) {
          if (!f(t3))
            return true;
          if (!e3)
            return false;
          b2(t3);
        }
        return t3[h2].weakData;
      }, onFreeze: function(t3) {
        return d2 && y2 && f(t3) && !u2(t3, h2) && b2(t3), t3;
      } };
      i[h2] = true;
    }, function(t2, e2, r2) {
      var n2 = r2(51), o2 = r2(39), i = r2(67).f, a2 = r2(112), u2 = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t2.exports.f = function(t3) {
        return u2 && n2(t3) == "Window" ? function(t4) {
          try {
            return i(t4);
          } catch (t5) {
            return a2(u2);
          }
        }(t3) : i(o2(t3));
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(91), i = r2(36), a2 = r2(32), u2 = r2(83), c2 = r2(136), s2 = r2(43), l2 = r2(55), f = r2(137), p = r2(113), d2 = r2(138), y2 = n2.TypeError, h2 = function(t3, e3) {
        this.stopped = t3, this.result = e3;
      }, v2 = h2.prototype;
      t2.exports = function(t3, e3, r3) {
        var n3, b2, g2, m2, O2, w2, _2, j2 = r3 && r3.that, E = !(!r3 || !r3.AS_ENTRIES), x2 = !(!r3 || !r3.IS_ITERATOR), S = !(!r3 || !r3.INTERRUPTED), P2 = o2(e3, j2), k2 = function(t4) {
          return n3 && d2(n3, "normal", t4), new h2(true, t4);
        }, A = function(t4) {
          return E ? (a2(t4), S ? P2(t4[0], t4[1], k2) : P2(t4[0], t4[1])) : S ? P2(t4, k2) : P2(t4);
        };
        if (x2)
          n3 = t3;
        else {
          if (!(b2 = p(t3)))
            throw y2(u2(t3) + " is not iterable");
          if (c2(b2)) {
            for (g2 = 0, m2 = s2(t3); m2 > g2; g2++)
              if ((O2 = A(t3[g2])) && l2(v2, O2))
                return O2;
            return new h2(false);
          }
          n3 = f(t3, b2);
        }
        for (w2 = n3.next; !(_2 = i(w2, n3)).done; ) {
          try {
            O2 = A(_2.value);
          } catch (t4) {
            d2(n3, "throw", t4);
          }
          if (typeof O2 == "object" && O2 && l2(v2, O2))
            return O2;
        }
        return new h2(false);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(27), o2 = r2(65), i = n2("iterator"), a2 = Array.prototype;
      t2.exports = function(t3) {
        return t3 !== void 0 && (o2.Array === t3 || a2[i] === t3);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(36), i = r2(60), a2 = r2(32), u2 = r2(83), c2 = r2(113), s2 = n2.TypeError;
      t2.exports = function(t3, e3) {
        var r3 = arguments.length < 2 ? c2(t3) : e3;
        if (i(r3))
          return a2(o2(r3, t3));
        throw s2(u2(t3) + " is not iterable");
      };
    }, function(t2, e2, r2) {
      var n2 = r2(36), o2 = r2(32), i = r2(56);
      t2.exports = function(t3, e3, r3) {
        var a2, u2;
        o2(t3);
        try {
          if (!(a2 = i(t3, "return"))) {
            if (e3 === "throw")
              throw r3;
            return r3;
          }
          a2 = n2(a2, t3);
        } catch (t4) {
          u2 = true, a2 = t4;
        }
        if (e3 === "throw")
          throw r3;
        if (u2)
          throw a2;
        return o2(a2), r3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(55), i = n2.TypeError;
      t2.exports = function(t3, e3) {
        if (o2(e3, t3))
          return t3;
        throw i("Incorrect invocation");
      };
    }, function(t2, e2, r2) {
      var n2 = r2(27)("iterator"), o2 = false;
      try {
        var i = 0, a2 = { next: function() {
          return { done: !!i++ };
        }, return: function() {
          o2 = true;
        } };
        a2[n2] = function() {
          return this;
        }, Array.from(a2, function() {
          throw 2;
        });
      } catch (t3) {
      }
      t2.exports = function(t3, e3) {
        if (!e3 && !o2)
          return false;
        var r3 = false;
        try {
          var i2 = {};
          i2[n2] = function() {
            return { next: function() {
              return { done: r3 = true };
            } };
          }, t3(i2);
        } catch (t4) {
        }
        return r3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(29), o2 = r2(33), i = r2(111);
      t2.exports = function(t3, e3, r3) {
        var a2, u2;
        return i && n2(a2 = e3.constructor) && a2 !== r3 && o2(u2 = a2.prototype) && u2 !== r3.prototype && i(t3, u2), t3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(63), i = r2(40), a2 = r2(44), u2 = n2("".charAt), c2 = n2("".charCodeAt), s2 = n2("".slice), l2 = function(t3) {
        return function(e3, r3) {
          var n3, l3, f = i(a2(e3)), p = o2(r3), d2 = f.length;
          return p < 0 || p >= d2 ? t3 ? "" : void 0 : (n3 = c2(f, p)) < 55296 || n3 > 56319 || p + 1 === d2 || (l3 = c2(f, p + 1)) < 56320 || l3 > 57343 ? t3 ? u2(f, p) : n3 : t3 ? s2(f, p, p + 2) : l3 - 56320 + (n3 - 55296 << 10) + 65536;
        };
      };
      t2.exports = { codeAt: l2(false), charAt: l2(true) };
    }, function(t2, e2) {
      t2.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
    }, function(t2, e2, r2) {
      var n2 = r2(105)("span").classList, o2 = n2 && n2.constructor && n2.constructor.prototype;
      t2.exports = o2 === Object.prototype ? void 0 : o2;
    }, function(t2, e2, r2) {
      var n2 = r2(27);
      e2.f = n2;
    }, function(t2, e2, r2) {
      var n2 = r2(175), o2 = r2(34), i = r2(145), a2 = r2(37).f;
      t2.exports = function(t3) {
        var e3 = n2.Symbol || (n2.Symbol = {});
        o2(e3, t3) || a2(e3, t3, { value: i.f(t3) });
      };
    }, function(t2, e2, r2) {
      var n2 = r2(19), o2 = r2(9).RegExp, i = n2(function() {
        var t3 = o2("a", "y");
        return t3.lastIndex = 2, t3.exec("abcd") != null;
      }), a2 = i || n2(function() {
        return !o2("a", "y").sticky;
      }), u2 = i || n2(function() {
        var t3 = o2("^r", "gy");
        return t3.lastIndex = 2, t3.exec("str") != null;
      });
      t2.exports = { BROKEN_CARET: u2, MISSED_STICKY: a2, UNSUPPORTED_Y: i };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(128).includes, i = r2(75);
      n2({ target: "Array", proto: true }, { includes: function(t3) {
        return o2(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      } }), i("includes");
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(15), i = r2(187), a2 = r2(44), u2 = r2(40), c2 = r2(188), s2 = o2("".indexOf);
      n2({ target: "String", proto: true, forced: !c2("includes") }, { includes: function(t3) {
        return !!~s2(u2(a2(this)), u2(i(t3)), arguments.length > 1 ? arguments[1] : void 0);
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(33), o2 = r2(51), i = r2(27)("match");
      t2.exports = function(t3) {
        var e3;
        return n2(t3) && ((e3 = t3[i]) !== void 0 ? !!e3 : o2(t3) == "RegExp");
      };
    }, function(t2, e2) {
      var r2, n2, o2 = t2.exports = {};
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a2() {
        throw new Error("clearTimeout has not been defined");
      }
      function u2(t3) {
        if (r2 === setTimeout)
          return setTimeout(t3, 0);
        if ((r2 === i || !r2) && setTimeout)
          return r2 = setTimeout, setTimeout(t3, 0);
        try {
          return r2(t3, 0);
        } catch (e3) {
          try {
            return r2.call(null, t3, 0);
          } catch (e4) {
            return r2.call(this, t3, 0);
          }
        }
      }
      !function() {
        try {
          r2 = typeof setTimeout == "function" ? setTimeout : i;
        } catch (t3) {
          r2 = i;
        }
        try {
          n2 = typeof clearTimeout == "function" ? clearTimeout : a2;
        } catch (t3) {
          n2 = a2;
        }
      }();
      var c2, s2 = [], l2 = false, f = -1;
      function p() {
        l2 && c2 && (l2 = false, c2.length ? s2 = c2.concat(s2) : f = -1, s2.length && d2());
      }
      function d2() {
        if (!l2) {
          var t3 = u2(p);
          l2 = true;
          for (var e3 = s2.length; e3; ) {
            for (c2 = s2, s2 = []; ++f < e3; )
              c2 && c2[f].run();
            f = -1, e3 = s2.length;
          }
          c2 = null, l2 = false, function(t4) {
            if (n2 === clearTimeout)
              return clearTimeout(t4);
            if ((n2 === a2 || !n2) && clearTimeout)
              return n2 = clearTimeout, clearTimeout(t4);
            try {
              n2(t4);
            } catch (e4) {
              try {
                return n2.call(null, t4);
              } catch (e5) {
                return n2.call(this, t4);
              }
            }
          }(t3);
        }
      }
      function y2(t3, e3) {
        this.fun = t3, this.array = e3;
      }
      function h2() {
      }
      o2.nextTick = function(t3) {
        var e3 = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r3 = 1; r3 < arguments.length; r3++)
            e3[r3 - 1] = arguments[r3];
        s2.push(new y2(t3, e3)), s2.length !== 1 || l2 || u2(d2);
      }, y2.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, o2.title = "browser", o2.browser = true, o2.env = {}, o2.argv = [], o2.version = "", o2.versions = {}, o2.on = h2, o2.addListener = h2, o2.once = h2, o2.off = h2, o2.removeListener = h2, o2.removeAllListeners = h2, o2.emit = h2, o2.prependListener = h2, o2.prependOnceListener = h2, o2.listeners = function(t3) {
        return [];
      }, o2.binding = function(t3) {
        throw new Error("process.binding is not supported");
      }, o2.cwd = function() {
        return "/";
      }, o2.chdir = function(t3) {
        throw new Error("process.chdir is not supported");
      }, o2.umask = function() {
        return 0;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(94), i = r2(83), a2 = n2.TypeError;
      t2.exports = function(t3) {
        if (o2(t3))
          return t3;
        throw a2(i(t3) + " is not a constructor");
      };
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(44), i = r2(40), a2 = r2(154), u2 = n2("".replace), c2 = "[" + a2 + "]", s2 = RegExp("^" + c2 + c2 + "*"), l2 = RegExp(c2 + c2 + "*$"), f = function(t3) {
        return function(e3) {
          var r3 = i(o2(e3));
          return 1 & t3 && (r3 = u2(r3, s2, "")), 2 & t3 && (r3 = u2(r3, l2, "")), r3;
        };
      };
      t2.exports = { start: f(1), end: f(2), trim: f(3) };
    }, function(t2, e2) {
      t2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    }, function(t2, e2, r2) {
      var n2 = r2(36), o2 = r2(119), i = r2(32), a2 = r2(84), u2 = r2(40), c2 = r2(44), s2 = r2(56), l2 = r2(120), f = r2(121);
      o2("match", function(t3, e3, r3) {
        return [function(e4) {
          var r4 = c2(this), o3 = e4 == null ? void 0 : s2(e4, t3);
          return o3 ? n2(o3, e4, r4) : new RegExp(e4)[t3](u2(r4));
        }, function(t4) {
          var n3 = i(this), o3 = u2(t4), c3 = r3(e3, n3, o3);
          if (c3.done)
            return c3.value;
          if (!n3.global)
            return f(n3, o3);
          var s3 = n3.unicode;
          n3.lastIndex = 0;
          for (var p, d2 = [], y2 = 0; (p = f(n3, o3)) !== null; ) {
            var h2 = u2(p[0]);
            d2[y2] = h2, h2 === "" && (n3.lastIndex = l2(o3, a2(n3.lastIndex), s3)), y2++;
          }
          return y2 === 0 ? null : d2;
        }];
      });
    }, function(t2, e2, r2) {
      e2.a = function() {
        return false;
      };
    }, function(t2, e2, r2) {
      (function(t3) {
        r2.d(e2, "a", function() {
          return v2;
        });
        var n2 = r2(0);
        function o2(t4) {
          throw new Error("[mobx-utils] " + t4);
        }
        function i(t4, e3) {
          e3 === void 0 && (e3 = "Illegal state"), t4 || o2(e3);
        }
        var a2 = function(t4) {
          return t4 && t4 !== Object.prototype && Object.getOwnPropertyNames(t4).concat(a2(Object.getPrototypeOf(t4)) || []);
        }, u2 = function(t4) {
          return function(t5) {
            var e3 = a2(t5);
            return e3.filter(function(t6, r3) {
              return e3.indexOf(t6) === r3;
            });
          }(t4).filter(function(t5) {
            return t5 !== "constructor" && !~t5.indexOf("__");
          });
        };
        function c2(t4) {
          switch (this.state) {
            case "pending":
              return t4.pending && t4.pending(this.value);
            case "rejected":
              return t4.rejected && t4.rejected(this.value);
            case "fulfilled":
              return t4.fulfilled ? t4.fulfilled(this.value) : this.value;
          }
        }
        function s2(t4, e3) {
          if (i(arguments.length <= 2, "fromPromise expects up to two arguments"), i(typeof t4 == "function" || typeof t4 == "object" && t4 && typeof t4.then == "function", "Please pass a promise or function to fromPromise"), t4.isPromiseBasedObservable === true)
            return t4;
          typeof t4 == "function" && (t4 = new Promise(t4));
          var r3 = t4;
          t4.then(Object(n2.k)("observableFromPromise-resolve", function(t5) {
            r3.value = t5, r3.state = "fulfilled";
          }), Object(n2.k)("observableFromPromise-reject", function(t5) {
            r3.value = t5, r3.state = "rejected";
          })), r3.isPromiseBasedObservable = true, r3.case = c2;
          var o3 = e3 && e3.state === "fulfilled" ? e3.value : void 0;
          return Object(n2.q)(r3, { value: o3, state: "pending" }, {}, { deep: false }), r3;
        }
        !function(t4) {
          t4.reject = Object(n2.k)("fromPromise.reject", function(e3) {
            var r3 = t4(Promise.reject(e3));
            return r3.state = "rejected", r3.value = e3, r3;
          }), t4.resolve = Object(n2.k)("fromPromise.resolve", function(e3) {
            e3 === void 0 && (e3 = void 0);
            var r3 = t4(Promise.resolve(e3));
            return r3.state = "fulfilled", r3.value = e3, r3;
          });
        }(s2 || (s2 = {}));
        var l2 = function(t4, e3, r3, n3) {
          var o3, i2 = arguments.length, a3 = i2 < 3 ? e3 : n3 === null ? n3 = Object.getOwnPropertyDescriptor(e3, r3) : n3;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            a3 = Reflect.decorate(t4, e3, r3, n3);
          else
            for (var u3 = t4.length - 1; u3 >= 0; u3--)
              (o3 = t4[u3]) && (a3 = (i2 < 3 ? o3(a3) : i2 > 3 ? o3(e3, r3, a3) : o3(e3, r3)) || a3);
          return i2 > 3 && a3 && Object.defineProperty(e3, r3, a3), a3;
        };
        !function() {
          function t4(t5, e3) {
            var r3 = this;
            Object(n2.G)(function() {
              r3.current = e3, r3.subscription = t5.subscribe(r3);
            });
          }
          t4.prototype.dispose = function() {
            this.subscription && this.subscription.unsubscribe();
          }, t4.prototype.next = function(t5) {
            this.current = t5;
          }, t4.prototype.complete = function() {
            this.dispose();
          }, t4.prototype.error = function(t5) {
            this.current = t5, this.dispose();
          }, l2([n2.C.ref], t4.prototype, "current", void 0), l2([n2.k.bound], t4.prototype, "next", null), l2([n2.k.bound], t4.prototype, "complete", null), l2([n2.k.bound], t4.prototype, "error", null);
        }();
        var f = function() {
          return (f = Object.assign || function(t4) {
            for (var e3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
              for (var o3 in e3 = arguments[r3])
                Object.prototype.hasOwnProperty.call(e3, o3) && (t4[o3] = e3[o3]);
            return t4;
          }).apply(this, arguments);
        }, p = function(t4, e3, r3, n3) {
          var o3, i2 = arguments.length, a3 = i2 < 3 ? e3 : n3 === null ? n3 = Object.getOwnPropertyDescriptor(e3, r3) : n3;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            a3 = Reflect.decorate(t4, e3, r3, n3);
          else
            for (var u3 = t4.length - 1; u3 >= 0; u3--)
              (o3 = t4[u3]) && (a3 = (i2 < 3 ? o3(a3) : i2 > 3 ? o3(e3, r3, a3) : o3(e3, r3)) || a3);
          return i2 > 3 && a3 && Object.defineProperty(e3, r3, a3), a3;
        }, d2 = ["model", "reset", "submit", "isDirty", "isPropertyDirty", "resetProperty"];
        !function() {
          function t4(t5) {
            var e3 = this;
            this.model = t5, this.localValues = n2.C.map({}), this.localComputedValues = n2.C.map({}), this.isPropertyDirty = function(t6) {
              return e3.localValues.has(t6);
            }, i(Object(n2.A)(t5), "createViewModel expects an observable object"), u2(t5).forEach(function(r3) {
              if (r3 !== n2.a && r3 !== "__mobxDidRunLazyInitializers") {
                if (i(d2.indexOf(r3) === -1, "The propertyname " + r3 + " is reserved and cannot be used with viewModels"), Object(n2.w)(t5, r3)) {
                  var o3 = Object(n2.h)(t5, r3).derivation;
                  e3.localComputedValues.set(r3, Object(n2.m)(o3.bind(e3)));
                }
                var a3 = Object.getOwnPropertyDescriptor(t5, r3), u3 = a3 ? { enumerable: a3.enumerable } : {};
                Object.defineProperty(e3, r3, f(f({}, u3), { configurable: true, get: function() {
                  return Object(n2.w)(t5, r3) ? e3.localComputedValues.get(r3).get() : e3.isPropertyDirty(r3) ? e3.localValues.get(r3) : e3.model[r3];
                }, set: Object(n2.k)(function(t6) {
                  t6 !== e3.model[r3] ? e3.localValues.set(r3, t6) : e3.localValues.delete(r3);
                }) }));
              }
            });
          }
          Object.defineProperty(t4.prototype, "isDirty", { get: function() {
            return this.localValues.size > 0;
          }, enumerable: false, configurable: true }), Object.defineProperty(t4.prototype, "changedValues", { get: function() {
            return this.localValues.toJS();
          }, enumerable: false, configurable: true }), t4.prototype.submit = function() {
            var t5 = this;
            Object(n2.B)(this.localValues).forEach(function(e3) {
              var r3 = t5.localValues.get(e3), o3 = t5.model[e3];
              Object(n2.y)(o3) ? o3.replace(r3) : Object(n2.z)(o3) ? (o3.clear(), o3.merge(r3)) : Object(n2.v)(r3) || (t5.model[e3] = r3);
            }), this.localValues.clear();
          }, t4.prototype.reset = function() {
            this.localValues.clear();
          }, t4.prototype.resetProperty = function(t5) {
            this.localValues.delete(t5);
          }, p([n2.m], t4.prototype, "isDirty", null), p([n2.m], t4.prototype, "changedValues", null), p([n2.k.bound], t4.prototype, "submit", null), p([n2.k.bound], t4.prototype, "reset", null), p([n2.k.bound], t4.prototype, "resetProperty", null);
        }();
        function y2(t4) {
          if (!t4)
            return "ROOT";
          for (var e3 = []; t4.parent; )
            e3.push(t4.path), t4 = t4.parent;
          return e3.reverse().join("/");
        }
        function h2(t4) {
          return Object(n2.A)(t4) || Object(n2.y)(t4) || Object(n2.z)(t4);
        }
        function v2(t4, e3) {
          var r3 = /* @__PURE__ */ new WeakMap();
          function o3(n3) {
            var o4 = r3.get(n3.object);
            !function(t5, e4) {
              switch (t5.type) {
                case "add":
                  i2(t5.newValue, e4, t5.name);
                  break;
                case "update":
                  a3(t5.oldValue), i2(t5.newValue, e4, t5.name || "" + t5.index);
                  break;
                case "remove":
                case "delete":
                  a3(t5.oldValue);
                  break;
                case "splice":
                  t5.removed.map(a3), t5.added.forEach(function(r4, n5) {
                    return i2(r4, e4, "" + (t5.index + n5));
                  });
                  for (var n4 = t5.index + t5.addedCount; n4 < t5.object.length; n4++)
                    if (h2(t5.object[n4])) {
                      var o5 = r3.get(t5.object[n4]);
                      o5 && (o5.path = "" + n4);
                    }
              }
            }(n3, o4), e3(n3, y2(o4), t4);
          }
          function i2(t5, e4, a4) {
            if (h2(t5)) {
              var u3 = r3.get(t5);
              if (u3) {
                if (u3.parent !== e4 || u3.path !== a4)
                  throw new Error("The same observable object cannot appear twice in the same tree, trying to assign it to '" + y2(e4) + "/" + a4 + "', but it already exists at '" + y2(u3.parent) + "/" + u3.path + "'");
              } else {
                var c3 = { parent: e4, path: a4, dispose: Object(n2.D)(t5, o3) };
                r3.set(t5, c3), Object(n2.p)(t5).forEach(function(t6) {
                  var e5 = t6[0];
                  return i2(t6[1], c3, e5);
                });
              }
            }
          }
          function a3(t5) {
            if (h2(t5)) {
              var e4 = r3.get(t5);
              if (!e4)
                return;
              r3.delete(t5), e4.dispose(), Object(n2.L)(t5).forEach(a3);
            }
          }
          return i2(t4, void 0, ""), function() {
            a3(t4);
          };
        }
        var b2, g2 = (b2 = function(t4, e3) {
          return (b2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t5, e4) {
            t5.__proto__ = e4;
          } || function(t5, e4) {
            for (var r3 in e4)
              e4.hasOwnProperty(r3) && (t5[r3] = e4[r3]);
          })(t4, e3);
        }, function(t4, e3) {
          function r3() {
            this.constructor = t4;
          }
          b2(t4, e3), t4.prototype = e3 === null ? Object.create(e3) : (r3.prototype = e3.prototype, new r3());
        });
        (function(t4) {
          function e3(e4, r3, o3) {
            var i2 = o3 === void 0 ? {} : o3, a3 = i2.name, u3 = a3 === void 0 ? "ogm" + (1e3 * Math.random() | 0) : a3, c3 = i2.keyToName, s3 = c3 === void 0 ? function(t5) {
              return "" + t5;
            } : c3, l3 = t4.call(this) || this;
            l3._keyToName = s3, l3._groupBy = r3, l3._ogmInfoKey = Symbol("ogmInfo" + u3), l3._base = e4;
            for (var f2 = 0; f2 < e4.length; f2++)
              l3._addItem(e4[f2]);
            return l3._disposeBaseObserver = Object(n2.D)(l3._base, function(t5) {
              if (t5.type === "splice")
                Object(n2.J)(function() {
                  for (var e5 = 0, r4 = t5.removed; e5 < r4.length; e5++) {
                    var n3 = r4[e5];
                    l3._removeItem(n3);
                  }
                  for (var o4 = 0, i3 = t5.added; o4 < i3.length; o4++) {
                    var a4 = i3[o4];
                    l3._addItem(a4);
                  }
                });
              else {
                if (t5.type !== "update")
                  throw new Error("illegal state");
                Object(n2.J)(function() {
                  l3._removeItem(t5.oldValue), l3._addItem(t5.newValue);
                });
              }
            }), l3;
          }
          g2(e3, t4), e3.prototype.clear = function() {
            throw new Error("not supported");
          }, e3.prototype.delete = function(t5) {
            throw new Error("not supported");
          }, e3.prototype.set = function(t5, e4) {
            throw new Error("not supported");
          }, e3.prototype.dispose = function() {
            this._disposeBaseObserver();
            for (var t5 = 0; t5 < this._base.length; t5++) {
              var e4 = this._base[t5];
              e4[this._ogmInfoKey].reaction(), delete e4[this._ogmInfoKey];
            }
          }, e3.prototype._getGroupArr = function(e4) {
            var r3 = t4.prototype.get.call(this, e4);
            return r3 === void 0 && (r3 = Object(n2.C)([], { name: "GroupArray[" + this._keyToName(e4) + "]", deep: false }), t4.prototype.set.call(this, e4, r3)), r3;
          }, e3.prototype._removeFromGroupArr = function(e4, r3) {
            var n3 = t4.prototype.get.call(this, e4);
            n3.length === 1 ? t4.prototype.delete.call(this, e4) : (r3 === n3.length - 1 || (n3[r3] = n3[n3.length - 1], n3[r3][this._ogmInfoKey].groupArrIndex = r3), n3.length--);
          }, e3.prototype._addItem = function(t5) {
            var e4 = this, r3 = this._groupBy(t5), o3 = this._getGroupArr(r3), i2 = { groupByValue: r3, groupArrIndex: o3.length, reaction: Object(n2.F)(function() {
              return e4._groupBy(t5);
            }, function(r4, n3) {
              var o4 = t5[e4._ogmInfoKey];
              e4._removeFromGroupArr(o4.groupByValue, o4.groupArrIndex);
              var i3 = e4._getGroupArr(r4), a3 = i3.length;
              i3.push(t5), o4.groupByValue = r4, o4.groupArrIndex = a3;
            }) };
            Object.defineProperty(t5, this._ogmInfoKey, { configurable: true, enumerable: false, value: i2 }), o3.push(t5);
          }, e3.prototype._removeItem = function(t5) {
            var e4 = t5[this._ogmInfoKey];
            this._removeFromGroupArr(e4.groupByValue, e4.groupArrIndex), e4.reaction(), delete t5[this._ogmInfoKey];
          };
        })(n2.b), function() {
          function t4(t5, e3) {
            this.base = t5, this.args = e3, this.closestIdx = 0, this.isDisposed = false;
            for (var r3 = this.closest = this.root = t5, n3 = 0; n3 < this.args.length - 1 && (r3 = r3.get(e3[n3])); n3++)
              this.closest = r3;
            this.closestIdx = n3;
          }
          return t4.prototype.exists = function() {
            this.assertNotDisposed();
            var t5 = this.args.length;
            return this.closestIdx >= t5 - 1 && this.closest.has(this.args[t5 - 1]);
          }, t4.prototype.get = function() {
            if (this.assertNotDisposed(), !this.exists())
              throw new Error("Entry doesn't exist");
            return this.closest.get(this.args[this.args.length - 1]);
          }, t4.prototype.set = function(t5) {
            this.assertNotDisposed();
            for (var e3 = this.args.length, r3 = this.closest, n3 = this.closestIdx; n3 < e3 - 1; n3++) {
              var o3 = /* @__PURE__ */ new Map();
              r3.set(this.args[n3], o3), r3 = o3;
            }
            this.closestIdx = e3 - 1, this.closest = r3, r3.set(this.args[e3 - 1], t5);
          }, t4.prototype.delete = function() {
            if (this.assertNotDisposed(), !this.exists())
              throw new Error("Entry doesn't exist");
            var t5 = this.args.length;
            this.closest.delete(this.args[t5 - 1]);
            for (var e3 = this.root, r3 = [e3], n3 = 0; n3 < t5 - 1; n3++)
              e3 = e3.get(this.args[n3]), r3.push(e3);
            for (n3 = r3.length - 1; n3 > 0; n3--)
              r3[n3].size === 0 && r3[n3 - 1].delete(this.args[n3 - 1]);
            this.isDisposed = true;
          }, t4.prototype.assertNotDisposed = function() {
            if (this.isDisposed)
              throw new Error("Concurrent modification exception");
          }, t4;
        }();
        Promise.resolve();
        typeof queueMicrotask != "undefined" ? queueMicrotask : t3 !== void 0 && t3.nextTick ? function(e3) {
          t3.nextTick(e3);
        } : function(t4) {
          setTimeout(t4, 0);
        };
      }).call(this, r2(151));
    }, function(t2, e2, r2) {
      var n2;
      !function(o2, i, a2) {
        if (o2) {
          for (var u2, c2 = { 8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "ins", 46: "del", 91: "meta", 93: "meta", 224: "meta" }, s2 = { 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, l2 = { "~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", _: "-", "+": "=", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/", "|": "\\" }, f = { option: "alt", command: "meta", return: "enter", escape: "esc", plus: "+", mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl" }, p = 1; p < 20; ++p)
            c2[111 + p] = "f" + p;
          for (p = 0; p <= 9; ++p)
            c2[p + 96] = p.toString();
          g2.prototype.bind = function(t3, e3, r3) {
            return t3 = t3 instanceof Array ? t3 : [t3], this._bindMultiple.call(this, t3, e3, r3), this;
          }, g2.prototype.unbind = function(t3, e3) {
            return this.bind.call(this, t3, function() {
            }, e3);
          }, g2.prototype.trigger = function(t3, e3) {
            return this._directMap[t3 + ":" + e3] && this._directMap[t3 + ":" + e3]({}, t3), this;
          }, g2.prototype.reset = function() {
            return this._callbacks = {}, this._directMap = {}, this;
          }, g2.prototype.stopCallback = function(t3, e3) {
            if ((" " + e3.className + " ").indexOf(" mousetrap ") > -1)
              return false;
            if (function t4(e4, r4) {
              return e4 !== null && e4 !== i && (e4 === r4 || t4(e4.parentNode, r4));
            }(e3, this.target))
              return false;
            if ("composedPath" in t3 && typeof t3.composedPath == "function") {
              var r3 = t3.composedPath()[0];
              r3 !== t3.target && (e3 = r3);
            }
            return e3.tagName == "INPUT" || e3.tagName == "SELECT" || e3.tagName == "TEXTAREA" || e3.isContentEditable;
          }, g2.prototype.handleKey = function() {
            var t3 = this;
            return t3._handleKey.apply(t3, arguments);
          }, g2.addKeycodes = function(t3) {
            for (var e3 in t3)
              t3.hasOwnProperty(e3) && (c2[e3] = t3[e3]);
            u2 = null;
          }, g2.init = function() {
            var t3 = g2(i);
            for (var e3 in t3)
              e3.charAt(0) !== "_" && (g2[e3] = function(e4) {
                return function() {
                  return t3[e4].apply(t3, arguments);
                };
              }(e3));
          }, g2.init(), o2.Mousetrap = g2, t2.exports && (t2.exports = g2), (n2 = function() {
            return g2;
          }.call(e2, r2, e2, t2)) === void 0 || (t2.exports = n2);
        }
        function d2(t3, e3, r3) {
          t3.addEventListener ? t3.addEventListener(e3, r3, false) : t3.attachEvent("on" + e3, r3);
        }
        function y2(t3) {
          if (t3.type == "keypress") {
            var e3 = String.fromCharCode(t3.which);
            return t3.shiftKey || (e3 = e3.toLowerCase()), e3;
          }
          return c2[t3.which] ? c2[t3.which] : s2[t3.which] ? s2[t3.which] : String.fromCharCode(t3.which).toLowerCase();
        }
        function h2(t3) {
          return t3 == "shift" || t3 == "ctrl" || t3 == "alt" || t3 == "meta";
        }
        function v2(t3, e3, r3) {
          return r3 || (r3 = function() {
            if (!u2)
              for (var t4 in u2 = {}, c2)
                t4 > 95 && t4 < 112 || c2.hasOwnProperty(t4) && (u2[c2[t4]] = t4);
            return u2;
          }()[t3] ? "keydown" : "keypress"), r3 == "keypress" && e3.length && (r3 = "keydown"), r3;
        }
        function b2(t3, e3) {
          var r3, n3, o3, i2 = [];
          for (r3 = function(t4) {
            return t4 === "+" ? ["+"] : (t4 = t4.replace(/\+{2}/g, "+plus")).split("+");
          }(t3), o3 = 0; o3 < r3.length; ++o3)
            n3 = r3[o3], f[n3] && (n3 = f[n3]), e3 && e3 != "keypress" && l2[n3] && (n3 = l2[n3], i2.push("shift")), h2(n3) && i2.push(n3);
          return { key: n3, modifiers: i2, action: e3 = v2(n3, i2, e3) };
        }
        function g2(t3) {
          var e3 = this;
          if (t3 = t3 || i, !(e3 instanceof g2))
            return new g2(t3);
          e3.target = t3, e3._callbacks = {}, e3._directMap = {};
          var r3, n3 = {}, o3 = false, a3 = false, u3 = false;
          function c3(t4) {
            t4 = t4 || {};
            var e4, r4 = false;
            for (e4 in n3)
              t4[e4] ? r4 = true : n3[e4] = 0;
            r4 || (u3 = false);
          }
          function s3(t4, r4, o4, i2, a4, u4) {
            var c4, s4, l4, f3, p3 = [], d3 = o4.type;
            if (!e3._callbacks[t4])
              return [];
            for (d3 == "keyup" && h2(t4) && (r4 = [t4]), c4 = 0; c4 < e3._callbacks[t4].length; ++c4)
              if (s4 = e3._callbacks[t4][c4], (i2 || !s4.seq || n3[s4.seq] == s4.level) && d3 == s4.action && (d3 == "keypress" && !o4.metaKey && !o4.ctrlKey || (l4 = r4, f3 = s4.modifiers, l4.sort().join(",") === f3.sort().join(",")))) {
                var y3 = !i2 && s4.combo == a4, v4 = i2 && s4.seq == i2 && s4.level == u4;
                (y3 || v4) && e3._callbacks[t4].splice(c4, 1), p3.push(s4);
              }
            return p3;
          }
          function l3(t4, r4, n4, o4) {
            e3.stopCallback(r4, r4.target || r4.srcElement, n4, o4) || t4(r4, n4) === false && (function(t5) {
              t5.preventDefault ? t5.preventDefault() : t5.returnValue = false;
            }(r4), function(t5) {
              t5.stopPropagation ? t5.stopPropagation() : t5.cancelBubble = true;
            }(r4));
          }
          function f2(t4) {
            typeof t4.which != "number" && (t4.which = t4.keyCode);
            var r4 = y2(t4);
            r4 && (t4.type != "keyup" || o3 !== r4 ? e3.handleKey(r4, function(t5) {
              var e4 = [];
              return t5.shiftKey && e4.push("shift"), t5.altKey && e4.push("alt"), t5.ctrlKey && e4.push("ctrl"), t5.metaKey && e4.push("meta"), e4;
            }(t4), t4) : o3 = false);
          }
          function p2(t4, e4, i2, a4) {
            function s4(e5) {
              return function() {
                u3 = e5, ++n3[t4], clearTimeout(r3), r3 = setTimeout(c3, 1e3);
              };
            }
            function f3(e5) {
              l3(i2, e5, t4), a4 !== "keyup" && (o3 = y2(e5)), setTimeout(c3, 10);
            }
            n3[t4] = 0;
            for (var p3 = 0; p3 < e4.length; ++p3) {
              var d3 = p3 + 1 === e4.length ? f3 : s4(a4 || b2(e4[p3 + 1]).action);
              v3(e4[p3], d3, a4, t4, p3);
            }
          }
          function v3(t4, r4, n4, o4, i2) {
            e3._directMap[t4 + ":" + n4] = r4;
            var a4, u4 = (t4 = t4.replace(/\s+/g, " ")).split(" ");
            u4.length > 1 ? p2(t4, u4, r4, n4) : (a4 = b2(t4, n4), e3._callbacks[a4.key] = e3._callbacks[a4.key] || [], s3(a4.key, a4.modifiers, { type: a4.action }, o4, t4, i2), e3._callbacks[a4.key][o4 ? "unshift" : "push"]({ callback: r4, modifiers: a4.modifiers, action: a4.action, seq: o4, level: i2, combo: t4 }));
          }
          e3._handleKey = function(t4, e4, r4) {
            var n4, o4 = s3(t4, e4, r4), i2 = {}, f3 = 0, p3 = false;
            for (n4 = 0; n4 < o4.length; ++n4)
              o4[n4].seq && (f3 = Math.max(f3, o4[n4].level));
            for (n4 = 0; n4 < o4.length; ++n4)
              if (o4[n4].seq) {
                if (o4[n4].level != f3)
                  continue;
                p3 = true, i2[o4[n4].seq] = 1, l3(o4[n4].callback, r4, o4[n4].combo, o4[n4].seq);
              } else
                p3 || l3(o4[n4].callback, r4, o4[n4].combo);
            var d3 = r4.type == "keypress" && a3;
            r4.type != u3 || h2(t4) || d3 || c3(i2), a3 = p3 && r4.type == "keydown";
          }, e3._bindMultiple = function(t4, e4, r4) {
            for (var n4 = 0; n4 < t4.length; ++n4)
              v3(t4[n4], e4, r4);
          }, d2(t3, "keypress", f2), d2(t3, "keydown", f2), d2(t3, "keyup", f2);
        }
      }(typeof window != "undefined" ? window : null, typeof window != "undefined" ? document : null);
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(37), i = r2(32), a2 = r2(39), u2 = r2(61);
      t2.exports = n2 ? Object.defineProperties : function(t3, e3) {
        i(t3);
        for (var r3, n3 = a2(e3), c2 = u2(e3), s2 = c2.length, l2 = 0; s2 > l2; )
          o2.f(t3, r3 = c2[l2++], n3[r3]);
        return t3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(36), i = r2(29), a2 = r2(33), u2 = n2.TypeError;
      t2.exports = function(t3, e3) {
        var r3, n3;
        if (e3 === "string" && i(r3 = t3.toString) && !a2(n3 = o2(r3, t3)))
          return n3;
        if (i(r3 = t3.valueOf) && !a2(n3 = o2(r3, t3)))
          return n3;
        if (e3 !== "string" && i(r3 = t3.toString) && !a2(n3 = o2(r3, t3)))
          return n3;
        throw u2("Can't convert object to primitive value");
      };
    }, function(t2, e2, r2) {
      var n2 = r2(49);
      t2.exports = n2("document", "documentElement");
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(29), i = r2(107), a2 = n2.WeakMap;
      t2.exports = o2(a2) && /native code/.test(i(a2));
    }, function(t2, e2, r2) {
      var n2 = r2(131).IteratorPrototype, o2 = r2(52), i = r2(66), a2 = r2(89), u2 = r2(65), c2 = function() {
        return this;
      };
      t2.exports = function(t3, e3, r3, s2) {
        var l2 = e3 + " Iterator";
        return t3.prototype = o2(n2, { next: i(+!s2, r3) }), a2(t3, l2, false, true), u2[l2] = c2, t3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(29), i = n2.String, a2 = n2.TypeError;
      t2.exports = function(t3) {
        if (typeof t3 == "object" || o2(t3))
          return t3;
        throw a2("Can't set " + i(t3) + " as a prototype");
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(9), i = r2(15), a2 = r2(110), u2 = r2(45), c2 = r2(133), s2 = r2(135), l2 = r2(139), f = r2(29), p = r2(33), d2 = r2(19), y2 = r2(140), h2 = r2(89), v2 = r2(141);
      t2.exports = function(t3, e3, r3) {
        var b2 = t3.indexOf("Map") !== -1, g2 = t3.indexOf("Weak") !== -1, m2 = b2 ? "set" : "add", O2 = o2[t3], w2 = O2 && O2.prototype, _2 = O2, j2 = {}, E = function(t4) {
          var e4 = i(w2[t4]);
          u2(w2, t4, t4 == "add" ? function(t5) {
            return e4(this, t5 === 0 ? 0 : t5), this;
          } : t4 == "delete" ? function(t5) {
            return !(g2 && !p(t5)) && e4(this, t5 === 0 ? 0 : t5);
          } : t4 == "get" ? function(t5) {
            return g2 && !p(t5) ? void 0 : e4(this, t5 === 0 ? 0 : t5);
          } : t4 == "has" ? function(t5) {
            return !(g2 && !p(t5)) && e4(this, t5 === 0 ? 0 : t5);
          } : function(t5, r4) {
            return e4(this, t5 === 0 ? 0 : t5, r4), this;
          });
        };
        if (a2(t3, !f(O2) || !(g2 || w2.forEach && !d2(function() {
          new O2().entries().next();
        }))))
          _2 = r3.getConstructor(e3, t3, b2, m2), c2.enable();
        else if (a2(t3, true)) {
          var x2 = new _2(), S = x2[m2](g2 ? {} : -0, 1) != x2, P2 = d2(function() {
            x2.has(1);
          }), k2 = y2(function(t4) {
            new O2(t4);
          }), A = !g2 && d2(function() {
            for (var t4 = new O2(), e4 = 5; e4--; )
              t4[m2](e4, e4);
            return !t4.has(-0);
          });
          k2 || ((_2 = e3(function(t4, e4) {
            l2(t4, w2);
            var r4 = v2(new O2(), t4, _2);
            return e4 != null && s2(e4, r4[m2], { that: r4, AS_ENTRIES: b2 }), r4;
          })).prototype = w2, w2.constructor = _2), (P2 || A) && (E("delete"), E("has"), b2 && E("get")), (A || S) && E(m2), g2 && w2.clear && delete w2.clear;
        }
        return j2[t3] = _2, n2({ global: true, forced: _2 != O2 }, j2), h2(_2, t3), g2 || r3.setStrong(_2, t3, b2), _2;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(19), o2 = r2(33), i = r2(51), a2 = r2(167), u2 = Object.isExtensible, c2 = n2(function() {
      });
      t2.exports = c2 || a2 ? function(t3) {
        return !!o2(t3) && ((!a2 || i(t3) != "ArrayBuffer") && (!u2 || u2(t3)));
      } : u2;
    }, function(t2, e2, r2) {
      var n2 = r2(19);
      t2.exports = n2(function() {
        if (typeof ArrayBuffer == "function") {
          var t3 = new ArrayBuffer(8);
          Object.isExtensible(t3) && Object.defineProperty(t3, "a", { value: 8 });
        }
      });
    }, function(t2, e2, r2) {
      var n2 = r2(19);
      t2.exports = !n2(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }, function(t2, e2, r2) {
      var n2 = r2(37).f, o2 = r2(52), i = r2(170), a2 = r2(91), u2 = r2(139), c2 = r2(135), s2 = r2(108), l2 = r2(171), f = r2(35), p = r2(133).fastKey, d2 = r2(57), y2 = d2.set, h2 = d2.getterFor;
      t2.exports = { getConstructor: function(t3, e3, r3, s3) {
        var l3 = t3(function(t4, n3) {
          u2(t4, d3), y2(t4, { type: e3, index: o2(null), first: void 0, last: void 0, size: 0 }), f || (t4.size = 0), n3 != null && c2(n3, t4[s3], { that: t4, AS_ENTRIES: r3 });
        }), d3 = l3.prototype, v2 = h2(e3), b2 = function(t4, e4, r4) {
          var n3, o3, i2 = v2(t4), a3 = g2(t4, e4);
          return a3 ? a3.value = r4 : (i2.last = a3 = { index: o3 = p(e4, true), key: e4, value: r4, previous: n3 = i2.last, next: void 0, removed: false }, i2.first || (i2.first = a3), n3 && (n3.next = a3), f ? i2.size++ : t4.size++, o3 !== "F" && (i2.index[o3] = a3)), t4;
        }, g2 = function(t4, e4) {
          var r4, n3 = v2(t4), o3 = p(e4);
          if (o3 !== "F")
            return n3.index[o3];
          for (r4 = n3.first; r4; r4 = r4.next)
            if (r4.key == e4)
              return r4;
        };
        return i(d3, { clear: function() {
          for (var t4 = v2(this), e4 = t4.index, r4 = t4.first; r4; )
            r4.removed = true, r4.previous && (r4.previous = r4.previous.next = void 0), delete e4[r4.index], r4 = r4.next;
          t4.first = t4.last = void 0, f ? t4.size = 0 : this.size = 0;
        }, delete: function(t4) {
          var e4 = v2(this), r4 = g2(this, t4);
          if (r4) {
            var n3 = r4.next, o3 = r4.previous;
            delete e4.index[r4.index], r4.removed = true, o3 && (o3.next = n3), n3 && (n3.previous = o3), e4.first == r4 && (e4.first = n3), e4.last == r4 && (e4.last = o3), f ? e4.size-- : this.size--;
          }
          return !!r4;
        }, forEach: function(t4) {
          for (var e4, r4 = v2(this), n3 = a2(t4, arguments.length > 1 ? arguments[1] : void 0); e4 = e4 ? e4.next : r4.first; )
            for (n3(e4.value, e4.key, this); e4 && e4.removed; )
              e4 = e4.previous;
        }, has: function(t4) {
          return !!g2(this, t4);
        } }), i(d3, r3 ? { get: function(t4) {
          var e4 = g2(this, t4);
          return e4 && e4.value;
        }, set: function(t4, e4) {
          return b2(this, t4 === 0 ? 0 : t4, e4);
        } } : { add: function(t4) {
          return b2(this, t4 = t4 === 0 ? 0 : t4, t4);
        } }), f && n2(d3, "size", { get: function() {
          return v2(this).size;
        } }), l3;
      }, setStrong: function(t3, e3, r3) {
        var n3 = e3 + " Iterator", o3 = h2(e3), i2 = h2(n3);
        s2(t3, e3, function(t4, e4) {
          y2(this, { type: n3, target: t4, state: o3(t4), kind: e4, last: void 0 });
        }, function() {
          for (var t4 = i2(this), e4 = t4.kind, r4 = t4.last; r4 && r4.removed; )
            r4 = r4.previous;
          return t4.target && (t4.last = r4 = r4 ? r4.next : t4.state.first) ? e4 == "keys" ? { value: r4.key, done: false } : e4 == "values" ? { value: r4.value, done: false } : { value: [r4.key, r4.value], done: false } : (t4.target = void 0, { value: void 0, done: true });
        }, r3 ? "entries" : "values", !r3, true), l2(e3);
      } };
    }, function(t2, e2, r2) {
      var n2 = r2(45);
      t2.exports = function(t3, e3, r3) {
        for (var o2 in e3)
          n2(t3, o2, e3[o2], r3);
        return t3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(49), o2 = r2(37), i = r2(27), a2 = r2(35), u2 = i("species");
      t2.exports = function(t3) {
        var e3 = n2(t3), r3 = o2.f;
        a2 && e3 && !e3[u2] && r3(e3, u2, { configurable: true, get: function() {
          return this;
        } });
      };
    }, function(t2, e2, r2) {
      var n2 = r2(114), o2 = r2(92);
      t2.exports = n2 ? {}.toString : function() {
        return "[object " + o2(this) + "]";
      };
    }, function(t2, e2, r2) {
      var n2 = r2(68).forEach, o2 = r2(116)("forEach");
      t2.exports = o2 ? [].forEach : function(t3) {
        return n2(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(93), i = r2(94), a2 = r2(33), u2 = r2(27)("species"), c2 = n2.Array;
      t2.exports = function(t3) {
        var e3;
        return o2(t3) && (e3 = t3.constructor, (i(e3) && (e3 === c2 || o2(e3.prototype)) || a2(e3) && (e3 = e3[u2]) === null) && (e3 = void 0)), e3 === void 0 ? c2 : e3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9);
      t2.exports = n2;
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(91), i = r2(36), a2 = r2(38), u2 = r2(177), c2 = r2(136), s2 = r2(94), l2 = r2(43), f = r2(58), p = r2(137), d2 = r2(113), y2 = n2.Array;
      t2.exports = function(t3) {
        var e3 = a2(t3), r3 = s2(this), n3 = arguments.length, h2 = n3 > 1 ? arguments[1] : void 0, v2 = h2 !== void 0;
        v2 && (h2 = o2(h2, n3 > 2 ? arguments[2] : void 0));
        var b2, g2, m2, O2, w2, _2, j2 = d2(e3), E = 0;
        if (!j2 || this == y2 && c2(j2))
          for (b2 = l2(e3), g2 = r3 ? new this(b2) : y2(b2); b2 > E; E++)
            _2 = v2 ? h2(e3[E], E) : e3[E], f(g2, E, _2);
        else
          for (w2 = (O2 = p(e3, j2)).next, g2 = r3 ? new this() : []; !(m2 = i(w2, O2)).done; E++)
            _2 = v2 ? u2(O2, h2, [m2.value, E], true) : m2.value, f(g2, E, _2);
        return g2.length = E, g2;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(32), o2 = r2(138);
      t2.exports = function(t3, e3, r3, i) {
        try {
          return i ? e3(n2(r3)[0], r3[1]) : e3(r3);
        } catch (e4) {
          o2(t3, "throw", e4);
        }
      };
    }, function(t2, e2, r2) {
      var n2 = r2(32);
      t2.exports = function() {
        var t3 = n2(this), e3 = "";
        return t3.global && (e3 += "g"), t3.ignoreCase && (e3 += "i"), t3.multiline && (e3 += "m"), t3.dotAll && (e3 += "s"), t3.unicode && (e3 += "u"), t3.sticky && (e3 += "y"), e3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(19), o2 = r2(9).RegExp;
      t2.exports = n2(function() {
        var t3 = o2(".", "s");
        return !(t3.dotAll && t3.exec("\n") && t3.flags === "s");
      });
    }, function(t2, e2, r2) {
      var n2 = r2(19), o2 = r2(9).RegExp;
      t2.exports = n2(function() {
        var t3 = o2("(?<a>b)", "g");
        return t3.exec("b").groups.a !== "b" || "b".replace(t3, "$<a>c") !== "bc";
      });
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(15), i = r2(60), a2 = r2(38), u2 = r2(43), c2 = r2(40), s2 = r2(19), l2 = r2(182), f = r2(116), p = r2(183), d2 = r2(184), y2 = r2(79), h2 = r2(185), v2 = [], b2 = o2(v2.sort), g2 = o2(v2.push), m2 = s2(function() {
        v2.sort(void 0);
      }), O2 = s2(function() {
        v2.sort(null);
      }), w2 = f("sort"), _2 = !s2(function() {
        if (y2)
          return y2 < 70;
        if (!(p && p > 3)) {
          if (d2)
            return true;
          if (h2)
            return h2 < 603;
          var t3, e3, r3, n3, o3 = "";
          for (t3 = 65; t3 < 76; t3++) {
            switch (e3 = String.fromCharCode(t3), t3) {
              case 66:
              case 69:
              case 70:
              case 72:
                r3 = 3;
                break;
              case 68:
              case 71:
                r3 = 4;
                break;
              default:
                r3 = 2;
            }
            for (n3 = 0; n3 < 47; n3++)
              v2.push({ k: e3 + n3, v: r3 });
          }
          for (v2.sort(function(t4, e4) {
            return e4.v - t4.v;
          }), n3 = 0; n3 < v2.length; n3++)
            e3 = v2[n3].k.charAt(0), o3.charAt(o3.length - 1) !== e3 && (o3 += e3);
          return o3 !== "DGBEFHACIJK";
        }
      });
      n2({ target: "Array", proto: true, forced: m2 || !O2 || !w2 || !_2 }, { sort: function(t3) {
        t3 !== void 0 && i(t3);
        var e3 = a2(this);
        if (_2)
          return t3 === void 0 ? b2(e3) : b2(e3, t3);
        var r3, n3, o3 = [], s3 = u2(e3);
        for (n3 = 0; n3 < s3; n3++)
          n3 in e3 && g2(o3, e3[n3]);
        for (l2(o3, function(t4) {
          return function(e4, r4) {
            return r4 === void 0 ? -1 : e4 === void 0 ? 1 : t4 !== void 0 ? +t4(e4, r4) || 0 : c2(e4) > c2(r4) ? 1 : -1;
          };
        }(t3)), r3 = o3.length, n3 = 0; n3 < r3; )
          e3[n3] = o3[n3++];
        for (; n3 < s3; )
          delete e3[n3++];
        return e3;
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(112), o2 = Math.floor, i = function(t3, e3) {
        var r3 = t3.length, c2 = o2(r3 / 2);
        return r3 < 8 ? a2(t3, e3) : u2(t3, i(n2(t3, 0, c2), e3), i(n2(t3, c2), e3), e3);
      }, a2 = function(t3, e3) {
        for (var r3, n3, o3 = t3.length, i2 = 1; i2 < o3; ) {
          for (n3 = i2, r3 = t3[i2]; n3 && e3(t3[n3 - 1], r3) > 0; )
            t3[n3] = t3[--n3];
          n3 !== i2++ && (t3[n3] = r3);
        }
        return t3;
      }, u2 = function(t3, e3, r3, n3) {
        for (var o3 = e3.length, i2 = r3.length, a3 = 0, u3 = 0; a3 < o3 || u3 < i2; )
          t3[a3 + u3] = a3 < o3 && u3 < i2 ? n3(e3[a3], r3[u3]) <= 0 ? e3[a3++] : r3[u3++] : a3 < o3 ? e3[a3++] : r3[u3++];
        return t3;
      };
      t2.exports = i;
    }, function(t2, e2, r2) {
      var n2 = r2(80).match(/firefox\/(\d+)/i);
      t2.exports = !!n2 && +n2[1];
    }, function(t2, e2, r2) {
      var n2 = r2(80);
      t2.exports = /MSIE|Trident/.test(n2);
    }, function(t2, e2, r2) {
      var n2 = r2(80).match(/AppleWebKit\/(\d+)\./);
      t2.exports = !!n2 && +n2[1];
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(68).find, i = r2(75), a2 = true;
      "find" in [] && Array(1).find(function() {
        a2 = false;
      }), n2({ target: "Array", proto: true, forced: a2 }, { find: function(t3) {
        return o2(this, t3, arguments.length > 1 ? arguments[1] : void 0);
      } }), i("find");
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(150), i = n2.TypeError;
      t2.exports = function(t3) {
        if (o2(t3))
          throw i("The method doesn't accept regular expressions");
        return t3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(27)("match");
      t2.exports = function(t3) {
        var e3 = /./;
        try {
          "/./"[t3](e3);
        } catch (r3) {
          try {
            return e3[n2] = false, "/./"[t3](e3);
          } catch (t4) {
          }
        }
        return false;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(32), o2 = r2(152), i = r2(27)("species");
      t2.exports = function(t3, e3) {
        var r3, a2 = n2(t3).constructor;
        return a2 === void 0 || (r3 = n2(a2)[i]) == null ? e3 : o2(r3);
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = r2(153).trim;
      n2({ target: "String", proto: true, forced: r2(191)("trim") }, { trim: function() {
        return o2(this);
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(87).PROPER, o2 = r2(19), i = r2(154);
      t2.exports = function(t3) {
        return o2(function() {
          return !!i[t3]() || "\u200B\x85\u180E"[t3]() !== "\u200B\x85\u180E" || n2 && i[t3].name !== t3;
        });
      };
    }, function(t2, e2, r2) {
      var n2 = r2(15);
      t2.exports = n2(1 .valueOf);
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(38), i = Math.floor, a2 = n2("".charAt), u2 = n2("".replace), c2 = n2("".slice), s2 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, l2 = /\$([$&'`]|\d{1,2})/g;
      t2.exports = function(t3, e3, r3, n3, f, p) {
        var d2 = r3 + t3.length, y2 = n3.length, h2 = l2;
        return f !== void 0 && (f = o2(f), h2 = s2), u2(p, h2, function(o3, u3) {
          var s3;
          switch (a2(u3, 0)) {
            case "$":
              return "$";
            case "&":
              return t3;
            case "`":
              return c2(e3, 0, r3);
            case "'":
              return c2(e3, d2);
            case "<":
              s3 = f[c2(u3, 1, -1)];
              break;
            default:
              var l3 = +u3;
              if (l3 === 0)
                return o3;
              if (l3 > y2) {
                var p2 = i(l3 / 10);
                return p2 === 0 ? o3 : p2 <= y2 ? n3[p2 - 1] === void 0 ? a2(u3, 1) : n3[p2 - 1] + a2(u3, 1) : o3;
              }
              s3 = n3[l3 - 1];
          }
          return s3 === void 0 ? "" : s3;
        });
      };
    }, function(t2, e2, r2) {
      var n2 = r2(9), o2 = r2(15), i = r2(60), a2 = r2(33), u2 = r2(34), c2 = r2(117), s2 = n2.Function, l2 = o2([].concat), f = o2([].join), p = {}, d2 = function(t3, e3, r3) {
        if (!u2(p, e3)) {
          for (var n3 = [], o3 = 0; o3 < e3; o3++)
            n3[o3] = "a[" + o3 + "]";
          p[e3] = s2("C,a", "return new C(" + f(n3, ",") + ")");
        }
        return p[e3](t3, r3);
      };
      t2.exports = s2.bind || function(t3) {
        var e3 = i(this), r3 = e3.prototype, n3 = c2(arguments, 1), o3 = function() {
          var r4 = l2(n3, c2(arguments));
          return this instanceof o3 ? d2(e3, r4.length, r4) : e3.apply(t3, r4);
        };
        return a2(r3) && (o3.prototype = r3), o3;
      };
    }, function(t2, e2, r2) {
      var n2 = r2(34);
      t2.exports = function(t3) {
        return t3 !== void 0 && (n2(t3, "value") || n2(t3, "writable"));
      };
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(15), i = r2(36), a2 = r2(19), u2 = r2(61), c2 = r2(109), s2 = r2(86), l2 = r2(38), f = r2(73), p = Object.assign, d2 = Object.defineProperty, y2 = o2([].concat);
      t2.exports = !p || a2(function() {
        if (n2 && p({ b: 1 }, p(d2({}, "a", { enumerable: true, get: function() {
          d2(this, "b", { value: 3, enumerable: false });
        } }), { b: 2 })).b !== 1)
          return true;
        var t3 = {}, e3 = {}, r3 = Symbol();
        return t3[r3] = 7, "abcdefghijklmnopqrst".split("").forEach(function(t4) {
          e3[t4] = t4;
        }), p({}, t3)[r3] != 7 || u2(p({}, e3)).join("") != "abcdefghijklmnopqrst";
      }) ? function(t3, e3) {
        for (var r3 = l2(t3), o3 = arguments.length, a3 = 1, p2 = c2.f, d3 = s2.f; o3 > a3; )
          for (var h2, v2 = f(arguments[a3++]), b2 = p2 ? y2(u2(v2), p2(v2)) : u2(v2), g2 = b2.length, m2 = 0; g2 > m2; )
            h2 = b2[m2++], n2 && !i(d3, v2, h2) || (r3[h2] = v2[h2]);
        return r3;
      } : p;
    }, function(t2, e2, r2) {
      var n2 = r2(15), o2 = r2(44), i = r2(40), a2 = /"/g, u2 = n2("".replace);
      t2.exports = function(t3, e3, r3, n3) {
        var c2 = i(o2(t3)), s2 = "<" + e3;
        return r3 !== "" && (s2 += " " + r3 + '="' + u2(i(n3), a2, "&quot;") + '"'), s2 + ">" + c2 + "</" + e3 + ">";
      };
    }, function(t2, e2, r2) {
      var n2 = r2(19);
      t2.exports = function(t3) {
        return n2(function() {
          var e3 = ""[t3]('"');
          return e3 !== e3.toLowerCase() || e3.split('"').length > 3;
        });
      };
    }, function(t2, e2, r2) {
      var n2 = r2(17), o2 = Math.hypot, i = Math.abs, a2 = Math.sqrt;
      n2({ target: "Math", stat: true, forced: !!o2 && o2(1 / 0, NaN) !== 1 / 0 }, { hypot: function(t3, e3) {
        for (var r3, n3, o3 = 0, u2 = 0, c2 = arguments.length, s2 = 0; u2 < c2; )
          s2 < (r3 = i(arguments[u2++])) ? (o3 = o3 * (n3 = s2 / r3) * n3 + 1, s2 = r3) : o3 += r3 > 0 ? (n3 = r3 / s2) * n3 : r3;
        return s2 === 1 / 0 ? 1 / 0 : s2 * a2(o3);
      } });
    }, function(t2, e2, r2) {
      var n2 = r2(35), o2 = r2(15), i = r2(61), a2 = r2(39), u2 = o2(r2(86).f), c2 = o2([].push), s2 = function(t3) {
        return function(e3) {
          for (var r3, o3 = a2(e3), s3 = i(o3), l2 = s3.length, f = 0, p = []; l2 > f; )
            r3 = s3[f++], n2 && !u2(o3, r3) || c2(p, t3 ? [r3, o3[r3]] : o3[r3]);
          return p;
        };
      };
      t2.exports = { entries: s2(true), values: s2(false) };
    }, function(t2, e2, r2) {
      var n2 = r2(38), o2 = r2(62), i = r2(43);
      t2.exports = function(t3) {
        for (var e3 = n2(this), r3 = i(e3), a2 = arguments.length, u2 = o2(a2 > 1 ? arguments[1] : void 0, r3), c2 = a2 > 2 ? arguments[2] : void 0, s2 = c2 === void 0 ? r3 : o2(c2, r3); s2 > u2; )
          e3[u2++] = t3;
        return e3;
      };
    }, function(t2, e2, r2) {
      r2.r(e2), r2.d(e2, "observer", function() {
        return wm;
      }), r2.d(e2, "LogicFlow", function() {
        return Om;
      }), r2.d(e2, "h", function() {
        return Q.g;
      }), r2.d(e2, "LogicFlowUtil", function() {
        return n2;
      }), r2.d(e2, "BaseNode", function() {
        return th;
      }), r2.d(e2, "RectNode", function() {
        return sh;
      }), r2.d(e2, "CircleNode", function() {
        return gh;
      }), r2.d(e2, "PolygonNode", function() {
        return Th;
      }), r2.d(e2, "DiamondNode", function() {
        return Xh;
      }), r2.d(e2, "EllipseNode", function() {
        return Qh;
      }), r2.d(e2, "TextNode", function() {
        return lv;
      }), r2.d(e2, "HtmlNode", function() {
        return Ov;
      }), r2.d(e2, "BaseEdge", function() {
        return Ob;
      }), r2.d(e2, "LineEdge", function() {
        return Ab;
      }), r2.d(e2, "PolylineEdge", function() {
        return Wb;
      }), r2.d(e2, "BezierEdge", function() {
        return og;
      }), r2.d(e2, "Arrow", function() {
        return Cv;
      }), r2.d(e2, "BaseEdgeModel", function() {
        return Ca;
      }), r2.d(e2, "BezierEdgeModel", function() {
        return Df;
      }), r2.d(e2, "LineEdgeModel", function() {
        return qa;
      }), r2.d(e2, "PolylineEdgeModel", function() {
        return hu;
      }), r2.d(e2, "BaseNodeModel", function() {
        return Hf;
      }), r2.d(e2, "CircleNodeModel", function() {
        return ap;
      }), r2.d(e2, "DiamondNodeModel", function() {
        return Pp;
      }), r2.d(e2, "EllipseNodeModel", function() {
        return Yp;
      }), r2.d(e2, "PolygonNodeModel", function() {
        return fd;
      }), r2.d(e2, "RectNodeModel", function() {
        return Pd;
      }), r2.d(e2, "TextNodeModel", function() {
        return Ud;
      }), r2.d(e2, "HtmlNodeModel", function() {
        return ry;
      }), r2.d(e2, "EditConfigModel", function() {
        return oo;
      }), r2.d(e2, "GraphModel", function() {
        return Mc;
      }), r2.d(e2, "SnaplineModel", function() {
        return cy;
      }), r2.d(e2, "Keyboard", function() {
        return lm;
      }), r2.d(e2, "get", function() {
        return Fl;
      }), r2.d(e2, "defaults", function() {
        return Wl;
      });
      var n2 = {};
      r2.r(n2), r2.d(n2, "createUuid", function() {
        return Li;
      }), r2.d(n2, "refreshGraphId", function() {
        return zi;
      }), r2.d(n2, "createDrag", function() {
        return ic;
      }), r2.d(n2, "StepDrag", function() {
        return mc;
      });
      var o2 = r2(0), i = r2(10);
      if (!i.j)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!o2.H)
        throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
      var a2 = r2(42), u2 = Object(a2.b)("observerBatching");
      function c2(t3) {
        t3();
      }
      var s2 = false;
      function l2() {
        return s2;
      }
      function f(t3) {
        return Object(o2.t)(t3);
      }
      var p, d2 = 1e4, y2 = /* @__PURE__ */ new Set();
      function h2() {
        p === void 0 && (p = setTimeout(v2, 1e4));
      }
      function v2() {
        p = void 0;
        var t3 = Date.now();
        y2.forEach(function(e3) {
          var r3 = e3.current;
          r3 && t3 >= r3.cleanAt && (r3.reaction.dispose(), e3.current = null, y2.delete(e3));
        }), y2.size > 0 && h2();
      }
      var b2 = false, g2 = [];
      var m2 = {};
      function O2(t3) {
        return "observer" + t3;
      }
      function w2(t3, e3, r3) {
        if (e3 === void 0 && (e3 = "observed"), r3 === void 0 && (r3 = m2), l2())
          ;
        var n3, u3 = function(t4) {
          return function() {
            b2 ? g2.push(t4) : t4();
          };
        }((r3.useForceUpdate || a2.d)()), c3 = i.d.useRef(null);
        if (!c3.current) {
          var s3 = new o2.c(O2(e3), function() {
            p2.mounted ? u3() : (s3.dispose(), c3.current = null);
          }), p2 = function(t4) {
            return { cleanAt: Date.now() + d2, reaction: t4 };
          }(s3);
          c3.current = p2, n3 = c3, y2.add(n3), h2();
        }
        var v3 = c3.current.reaction;
        return i.d.useDebugValue(v3, f), i.d.useEffect(function() {
          var t4;
          return t4 = c3, y2.delete(t4), c3.current ? c3.current.mounted = true : (c3.current = { reaction: new o2.c(O2(e3), function() {
            u3();
          }), cleanAt: 1 / 0 }, u3()), function() {
            c3.current.reaction.dispose(), c3.current = null;
          };
        }, []), function(t4) {
          b2 = true, g2 = [];
          try {
            var e4 = t4();
            b2 = false;
            var r4 = g2.length > 0 ? g2 : void 0;
            return i.d.useLayoutEffect(function() {
              r4 && r4.forEach(function(t5) {
                return t5();
              });
            }, [r4]), e4;
          } finally {
            b2 = false;
          }
        }(function() {
          var e4, r4;
          if (v3.track(function() {
            try {
              e4 = t3();
            } catch (t4) {
              r4 = t4;
            }
          }), r4)
            throw r4;
          return e4;
        });
      }
      var _2 = function() {
        return (_2 = Object.assign || function(t3) {
          for (var e3, r3 = 1, n3 = arguments.length; r3 < n3; r3++)
            for (var o3 in e3 = arguments[r3])
              Object.prototype.hasOwnProperty.call(e3, o3) && (t3[o3] = e3[o3]);
          return t3;
        }).apply(this, arguments);
      };
      function j2(t3, e3) {
        var r3, n3, o3, a3 = _2({ forwardRef: false }, e3), u3 = t3.displayName || t3.name, c3 = function(e4, r4) {
          return w2(function() {
            return t3(e4, r4);
          }, u3);
        };
        return c3.displayName = u3, r3 = a3.forwardRef ? Object(i.f)(Object(i.e)(c3)) : Object(i.f)(c3), n3 = t3, o3 = r3, Object.keys(n3).forEach(function(t4) {
          E[t4] || Object.defineProperty(o3, t4, Object.getOwnPropertyDescriptor(n3, t4));
        }), r3.displayName = u3, r3;
      }
      var E = { $$typeof: true, render: true, compare: true, type: true };
      function x2(t3) {
        var e3 = t3.children, r3 = t3.render, n3 = e3 || r3;
        return typeof n3 != "function" ? null : w2(n3);
      }
      function S(t3, e3, r3, n3, o3) {
        var i2 = e3 === "children" ? "render" : "children", a3 = typeof t3[e3] == "function", u3 = typeof t3[i2] == "function";
        return a3 && u3 ? new Error("MobX Observer: Do not use children and render in the same time in`" + r3) : a3 || u3 ? null : new Error("Invalid prop `" + o3 + "` of type `" + typeof t3[e3] + "` supplied to `" + r3 + "`, expected `function`.");
      }
      x2.propTypes = { children: S, render: S }, x2.displayName = "Observer";
      var P2;
      (P2 = i.g) || (P2 = c2), Object(o2.n)({ reactionScheduler: P2 }), Object(a2.a)()[u2] = true;
      var k2 = 0;
      var A = {};
      function D(t3) {
        return A[t3] || (A[t3] = function(t4) {
          if (typeof Symbol == "function")
            return Symbol(t4);
          var e3 = "__$mobx-react " + t4 + " (" + k2 + ")";
          return k2++, e3;
        }(t3)), A[t3];
      }
      function T2(t3, e3) {
        if (M2(t3, e3))
          return true;
        if (typeof t3 != "object" || t3 === null || typeof e3 != "object" || e3 === null)
          return false;
        var r3 = Object.keys(t3), n3 = Object.keys(e3);
        if (r3.length !== n3.length)
          return false;
        for (var o3 = 0; o3 < r3.length; o3++)
          if (!Object.hasOwnProperty.call(e3, r3[o3]) || !M2(t3[r3[o3]], e3[r3[o3]]))
            return false;
        return true;
      }
      function M2(t3, e3) {
        return t3 === e3 ? t3 !== 0 || 1 / t3 == 1 / e3 : t3 != t3 && e3 != e3;
      }
      function N2(t3, e3, r3) {
        Object.hasOwnProperty.call(t3, e3) ? t3[e3] = r3 : Object.defineProperty(t3, e3, { enumerable: false, configurable: true, writable: true, value: r3 });
      }
      var C2 = D("patchMixins"), R = D("patchedDefinition");
      function I2(t3, e3) {
        for (var r3 = this, n3 = arguments.length, o3 = new Array(n3 > 2 ? n3 - 2 : 0), i2 = 2; i2 < n3; i2++)
          o3[i2 - 2] = arguments[i2];
        e3.locks++;
        try {
          var a3;
          return t3 != null && (a3 = t3.apply(this, o3)), a3;
        } finally {
          e3.locks--, e3.locks === 0 && e3.methods.forEach(function(t4) {
            t4.apply(r3, o3);
          });
        }
      }
      function L2(t3, e3) {
        return function() {
          for (var r3 = arguments.length, n3 = new Array(r3), o3 = 0; o3 < r3; o3++)
            n3[o3] = arguments[o3];
          I2.call.apply(I2, [this, t3, e3].concat(n3));
        };
      }
      function z2(t3, e3, r3) {
        var n3 = function(t4, e4) {
          var r4 = t4[C2] = t4[C2] || {}, n4 = r4[e4] = r4[e4] || {};
          return n4.locks = n4.locks || 0, n4.methods = n4.methods || [], n4;
        }(t3, e3);
        n3.methods.indexOf(r3) < 0 && n3.methods.push(r3);
        var o3 = Object.getOwnPropertyDescriptor(t3, e3);
        if (!o3 || !o3[R]) {
          var i2 = t3[e3], a3 = function t4(e4, r4, n4, o4, i3) {
            var a4, u3 = L2(i3, o4);
            return (a4 = {})[R] = true, a4.get = function() {
              return u3;
            }, a4.set = function(i4) {
              if (this === e4)
                u3 = L2(i4, o4);
              else {
                var a5 = t4(this, r4, n4, o4, i4);
                Object.defineProperty(this, r4, a5);
              }
            }, a4.configurable = true, a4.enumerable = n4, a4;
          }(t3, e3, o3 ? o3.enumerable : void 0, n3, i2);
          Object.defineProperty(t3, e3, a3);
        }
      }
      var B = o2.a || "$mobx", X = D("isMobXReactObserver"), H2 = D("isUnmounted"), U = D("skipRender"), G = D("isForcingUpdate");
      function F(t3) {
        var e3 = t3.prototype;
        if (t3[X]) {
          var r3 = Y(e3);
          console.warn("The provided component class (" + r3 + ") \n                has already been declared as an observer component.");
        } else
          t3[X] = true;
        if (e3.componentWillReact)
          throw new Error("The componentWillReact life-cycle event is no longer supported");
        if (t3.__proto__ !== i.b)
          if (e3.shouldComponentUpdate) {
            if (e3.shouldComponentUpdate !== W)
              throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
          } else
            e3.shouldComponentUpdate = W;
        K(e3, "props"), K(e3, "state");
        var n3 = e3.render;
        return e3.render = function() {
          return V.call(this, n3);
        }, z2(e3, "componentWillUnmount", function() {
          var t4;
          if ((t4 = this.render[B]) === null || t4 === void 0 || t4.dispose(), this[H2] = true, !this.render[B]) {
            var e4 = Y(this);
            console.warn("The reactive render of an observer class component (" + e4 + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
          }
        }), t3;
      }
      function Y(t3) {
        return t3.displayName || t3.name || t3.constructor && (t3.constructor.displayName || t3.constructor.name) || "<component>";
      }
      function V(t3) {
        var e3 = this;
        N2(this, U, false), N2(this, G, false);
        var r3 = Y(this), n3 = t3.bind(this), a3 = false, u3 = new o2.c(r3 + ".render()", function() {
          if (!a3 && (a3 = true, e3[H2] !== true)) {
            var t4 = true;
            try {
              N2(e3, G, true), e3[U] || i.a.prototype.forceUpdate.call(e3), t4 = false;
            } finally {
              N2(e3, G, false), t4 && u3.dispose();
            }
          }
        });
        function c3() {
          a3 = false;
          var t4 = void 0, e4 = void 0;
          if (u3.track(function() {
            try {
              e4 = Object(o2.d)(false, n3);
            } catch (e5) {
              t4 = e5;
            }
          }), t4)
            throw t4;
          return e4;
        }
        return u3.reactComponent = this, c3[B] = u3, this.render = c3, c3.call(this);
      }
      function W(t3, e3) {
        return this.state !== e3 || !T2(this.props, t3);
      }
      function K(t3, e3) {
        var r3 = D("reactProp_" + e3 + "_valueHolder"), n3 = D("reactProp_" + e3 + "_atomHolder");
        function i2() {
          return this[n3] || N2(this, n3, Object(o2.o)("reactive " + e3)), this[n3];
        }
        Object.defineProperty(t3, e3, { configurable: true, enumerable: true, get: function() {
          var t4 = false;
          return o2.f && o2.e && (t4 = Object(o2.f)(true)), i2.call(this).reportObserved(), o2.f && o2.e && Object(o2.e)(t4), this[r3];
        }, set: function(t4) {
          this[G] || T2(this[r3], t4) ? N2(this, r3, t4) : (N2(this, r3, t4), N2(this, U, true), i2.call(this).reportChanged(), N2(this, U, false));
        } });
      }
      var $2 = typeof Symbol == "function" && Symbol.for, Z = $2 ? Symbol.for("react.forward_ref") : typeof i.e == "function" && Object(i.e)(function(t3) {
        return null;
      }).$$typeof, q = $2 ? Symbol.for("react.memo") : typeof i.f == "function" && Object(i.f)(function(t3) {
        return null;
      }).$$typeof;
      function J(t3) {
        if (t3.isMobxInjector === true && console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"), q && t3.$$typeof === q)
          throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
        if (Z && t3.$$typeof === Z) {
          var e3 = t3.render;
          if (typeof e3 != "function")
            throw new Error("render property of ForwardRef was not a function");
          return Object(i.e)(function() {
            var t4 = arguments;
            return Object(i.c)(x2, null, function() {
              return e3.apply(void 0, t4);
            });
          });
        }
        return typeof t3 != "function" || t3.prototype && t3.prototype.render || t3.isReactClass || Object.prototype.isPrototypeOf.call(i.a, t3) ? F(t3) : j2(t3);
      }
      if (!i.a)
        throw new Error("mobx-react requires React to be available");
      if (!o2.C)
        throw new Error("mobx-react requires mobx to be available");
      var Q = r2(1);
      r2(3), r2(90), r2(2), r2(6), r2(5), r2(11), r2(41), r2(24), r2(20), r2(4), r2(22), r2(21), r2(23), r2(7), r2(8), r2(16), r2(25), r2(18), r2(30), r2(181), r2(186), r2(97), r2(148), r2(149);
      var tt = function(t3, e3) {
        for (var r3 = -1, n3 = t3 == null ? 0 : t3.length, o3 = Array(n3); ++r3 < n3; )
          o3[r3] = e3(t3[r3], r3, t3);
        return o3;
      };
      var et = function() {
        this.__data__ = [], this.size = 0;
      };
      var rt = function(t3, e3) {
        return t3 === e3 || t3 != t3 && e3 != e3;
      };
      var nt = function(t3, e3) {
        for (var r3 = t3.length; r3--; )
          if (rt(t3[r3][0], e3))
            return r3;
        return -1;
      }, ot = Array.prototype.splice;
      var it = function(t3) {
        var e3 = this.__data__, r3 = nt(e3, t3);
        return !(r3 < 0) && (r3 == e3.length - 1 ? e3.pop() : ot.call(e3, r3, 1), --this.size, true);
      };
      var at = function(t3) {
        var e3 = this.__data__, r3 = nt(e3, t3);
        return r3 < 0 ? void 0 : e3[r3][1];
      };
      var ut = function(t3) {
        return nt(this.__data__, t3) > -1;
      };
      var ct = function(t3, e3) {
        var r3 = this.__data__, n3 = nt(r3, t3);
        return n3 < 0 ? (++this.size, r3.push([t3, e3])) : r3[n3][1] = e3, this;
      };
      function st(t3) {
        var e3 = -1, r3 = t3 == null ? 0 : t3.length;
        for (this.clear(); ++e3 < r3; ) {
          var n3 = t3[e3];
          this.set(n3[0], n3[1]);
        }
      }
      st.prototype.clear = et, st.prototype.delete = it, st.prototype.get = at, st.prototype.has = ut, st.prototype.set = ct;
      var lt = st;
      var ft = function() {
        this.__data__ = new lt(), this.size = 0;
      };
      var pt = function(t3) {
        var e3 = this.__data__, r3 = e3.delete(t3);
        return this.size = e3.size, r3;
      };
      var dt = function(t3) {
        return this.__data__.get(t3);
      };
      var yt = function(t3) {
        return this.__data__.has(t3);
      }, ht = r2(28), vt = ht.a.Symbol, bt = Object.prototype, gt = bt.hasOwnProperty, mt = bt.toString, Ot = vt ? vt.toStringTag : void 0;
      var wt = function(t3) {
        var e3 = gt.call(t3, Ot), r3 = t3[Ot];
        try {
          t3[Ot] = void 0;
          var n3 = true;
        } catch (t4) {
        }
        var o3 = mt.call(t3);
        return n3 && (e3 ? t3[Ot] = r3 : delete t3[Ot]), o3;
      }, _t = Object.prototype.toString;
      var jt = function(t3) {
        return _t.call(t3);
      }, Et = vt ? vt.toStringTag : void 0;
      var xt = function(t3) {
        return t3 == null ? t3 === void 0 ? "[object Undefined]" : "[object Null]" : Et && Et in Object(t3) ? wt(t3) : jt(t3);
      };
      var St = function(t3) {
        var e3 = typeof t3;
        return t3 != null && (e3 == "object" || e3 == "function");
      };
      var Pt, kt = function(t3) {
        if (!St(t3))
          return false;
        var e3 = xt(t3);
        return e3 == "[object Function]" || e3 == "[object GeneratorFunction]" || e3 == "[object AsyncFunction]" || e3 == "[object Proxy]";
      }, At = ht.a["__core-js_shared__"], Dt = (Pt = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Pt : "";
      var Tt = function(t3) {
        return !!Dt && Dt in t3;
      }, Mt = Function.prototype.toString;
      var Nt = function(t3) {
        if (t3 != null) {
          try {
            return Mt.call(t3);
          } catch (t4) {
          }
          try {
            return t3 + "";
          } catch (t4) {
          }
        }
        return "";
      }, Ct = /^\[object .+?Constructor\]$/, Rt = Function.prototype, It = Object.prototype, Lt = Rt.toString, zt = It.hasOwnProperty, Bt = RegExp("^" + Lt.call(zt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Xt = function(t3) {
        return !(!St(t3) || Tt(t3)) && (kt(t3) ? Bt : Ct).test(Nt(t3));
      };
      var Ht = function(t3, e3) {
        return t3 == null ? void 0 : t3[e3];
      };
      var Ut = function(t3, e3) {
        var r3 = Ht(t3, e3);
        return Xt(r3) ? r3 : void 0;
      }, Gt = Ut(ht.a, "Map"), Ft = Ut(Object, "create");
      var Yt = function() {
        this.__data__ = Ft ? Ft(null) : {}, this.size = 0;
      };
      var Vt = function(t3) {
        var e3 = this.has(t3) && delete this.__data__[t3];
        return this.size -= e3 ? 1 : 0, e3;
      }, Wt = Object.prototype.hasOwnProperty;
      var Kt = function(t3) {
        var e3 = this.__data__;
        if (Ft) {
          var r3 = e3[t3];
          return r3 === "__lodash_hash_undefined__" ? void 0 : r3;
        }
        return Wt.call(e3, t3) ? e3[t3] : void 0;
      }, $t = Object.prototype.hasOwnProperty;
      var Zt = function(t3) {
        var e3 = this.__data__;
        return Ft ? e3[t3] !== void 0 : $t.call(e3, t3);
      };
      var qt = function(t3, e3) {
        var r3 = this.__data__;
        return this.size += this.has(t3) ? 0 : 1, r3[t3] = Ft && e3 === void 0 ? "__lodash_hash_undefined__" : e3, this;
      };
      function Jt(t3) {
        var e3 = -1, r3 = t3 == null ? 0 : t3.length;
        for (this.clear(); ++e3 < r3; ) {
          var n3 = t3[e3];
          this.set(n3[0], n3[1]);
        }
      }
      Jt.prototype.clear = Yt, Jt.prototype.delete = Vt, Jt.prototype.get = Kt, Jt.prototype.has = Zt, Jt.prototype.set = qt;
      var Qt = Jt;
      var te = function() {
        this.size = 0, this.__data__ = { hash: new Qt(), map: new (Gt || lt)(), string: new Qt() };
      };
      var ee = function(t3) {
        var e3 = typeof t3;
        return e3 == "string" || e3 == "number" || e3 == "symbol" || e3 == "boolean" ? t3 !== "__proto__" : t3 === null;
      };
      var re = function(t3, e3) {
        var r3 = t3.__data__;
        return ee(e3) ? r3[typeof e3 == "string" ? "string" : "hash"] : r3.map;
      };
      var ne = function(t3) {
        var e3 = re(this, t3).delete(t3);
        return this.size -= e3 ? 1 : 0, e3;
      };
      var oe = function(t3) {
        return re(this, t3).get(t3);
      };
      var ie = function(t3) {
        return re(this, t3).has(t3);
      };
      var ae = function(t3, e3) {
        var r3 = re(this, t3), n3 = r3.size;
        return r3.set(t3, e3), this.size += r3.size == n3 ? 0 : 1, this;
      };
      function ue(t3) {
        var e3 = -1, r3 = t3 == null ? 0 : t3.length;
        for (this.clear(); ++e3 < r3; ) {
          var n3 = t3[e3];
          this.set(n3[0], n3[1]);
        }
      }
      ue.prototype.clear = te, ue.prototype.delete = ne, ue.prototype.get = oe, ue.prototype.has = ie, ue.prototype.set = ae;
      var ce = ue;
      var se = function(t3, e3) {
        var r3 = this.__data__;
        if (r3 instanceof lt) {
          var n3 = r3.__data__;
          if (!Gt || n3.length < 199)
            return n3.push([t3, e3]), this.size = ++r3.size, this;
          r3 = this.__data__ = new ce(n3);
        }
        return r3.set(t3, e3), this.size = r3.size, this;
      };
      function le(t3) {
        var e3 = this.__data__ = new lt(t3);
        this.size = e3.size;
      }
      le.prototype.clear = ft, le.prototype.delete = pt, le.prototype.get = dt, le.prototype.has = yt, le.prototype.set = se;
      var fe = le;
      var pe = function(t3) {
        return this.__data__.set(t3, "__lodash_hash_undefined__"), this;
      };
      var de = function(t3) {
        return this.__data__.has(t3);
      };
      function ye(t3) {
        var e3 = -1, r3 = t3 == null ? 0 : t3.length;
        for (this.__data__ = new ce(); ++e3 < r3; )
          this.add(t3[e3]);
      }
      ye.prototype.add = ye.prototype.push = pe, ye.prototype.has = de;
      var he = ye;
      var ve = function(t3, e3) {
        for (var r3 = -1, n3 = t3 == null ? 0 : t3.length; ++r3 < n3; )
          if (e3(t3[r3], r3, t3))
            return true;
        return false;
      };
      var be = function(t3, e3) {
        return t3.has(e3);
      };
      var ge = function(t3, e3, r3, n3, o3, i2) {
        var a3 = 1 & r3, u3 = t3.length, c3 = e3.length;
        if (u3 != c3 && !(a3 && c3 > u3))
          return false;
        var s3 = i2.get(t3), l3 = i2.get(e3);
        if (s3 && l3)
          return s3 == e3 && l3 == t3;
        var f2 = -1, p2 = true, d3 = 2 & r3 ? new he() : void 0;
        for (i2.set(t3, e3), i2.set(e3, t3); ++f2 < u3; ) {
          var y3 = t3[f2], h3 = e3[f2];
          if (n3)
            var v3 = a3 ? n3(h3, y3, f2, e3, t3, i2) : n3(y3, h3, f2, t3, e3, i2);
          if (v3 !== void 0) {
            if (v3)
              continue;
            p2 = false;
            break;
          }
          if (d3) {
            if (!ve(e3, function(t4, e4) {
              if (!be(d3, e4) && (y3 === t4 || o3(y3, t4, r3, n3, i2)))
                return d3.push(e4);
            })) {
              p2 = false;
              break;
            }
          } else if (y3 !== h3 && !o3(y3, h3, r3, n3, i2)) {
            p2 = false;
            break;
          }
        }
        return i2.delete(t3), i2.delete(e3), p2;
      }, me = ht.a.Uint8Array;
      var Oe = function(t3) {
        var e3 = -1, r3 = Array(t3.size);
        return t3.forEach(function(t4, n3) {
          r3[++e3] = [n3, t4];
        }), r3;
      };
      var we = function(t3) {
        var e3 = -1, r3 = Array(t3.size);
        return t3.forEach(function(t4) {
          r3[++e3] = t4;
        }), r3;
      }, _e = vt ? vt.prototype : void 0, je = _e ? _e.valueOf : void 0;
      var Ee = function(t3, e3, r3, n3, o3, i2, a3) {
        switch (r3) {
          case "[object DataView]":
            if (t3.byteLength != e3.byteLength || t3.byteOffset != e3.byteOffset)
              return false;
            t3 = t3.buffer, e3 = e3.buffer;
          case "[object ArrayBuffer]":
            return !(t3.byteLength != e3.byteLength || !i2(new me(t3), new me(e3)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return rt(+t3, +e3);
          case "[object Error]":
            return t3.name == e3.name && t3.message == e3.message;
          case "[object RegExp]":
          case "[object String]":
            return t3 == e3 + "";
          case "[object Map]":
            var u3 = Oe;
          case "[object Set]":
            var c3 = 1 & n3;
            if (u3 || (u3 = we), t3.size != e3.size && !c3)
              return false;
            var s3 = a3.get(t3);
            if (s3)
              return s3 == e3;
            n3 |= 2, a3.set(t3, e3);
            var l3 = ge(u3(t3), u3(e3), n3, o3, i2, a3);
            return a3.delete(t3), l3;
          case "[object Symbol]":
            if (je)
              return je.call(t3) == je.call(e3);
        }
        return false;
      };
      var xe = function(t3, e3) {
        for (var r3 = -1, n3 = e3.length, o3 = t3.length; ++r3 < n3; )
          t3[o3 + r3] = e3[r3];
        return t3;
      }, Se = Array.isArray;
      var Pe = function(t3, e3, r3) {
        var n3 = e3(t3);
        return Se(t3) ? n3 : xe(n3, r3(t3));
      };
      var ke = function(t3, e3) {
        for (var r3 = -1, n3 = t3 == null ? 0 : t3.length, o3 = 0, i2 = []; ++r3 < n3; ) {
          var a3 = t3[r3];
          e3(a3, r3, t3) && (i2[o3++] = a3);
        }
        return i2;
      };
      var Ae = function() {
        return [];
      }, De = Object.prototype.propertyIsEnumerable, Te = Object.getOwnPropertySymbols, Me = Te ? function(t3) {
        return t3 == null ? [] : (t3 = Object(t3), ke(Te(t3), function(e3) {
          return De.call(t3, e3);
        }));
      } : Ae;
      var Ne = function(t3, e3) {
        for (var r3 = -1, n3 = Array(t3); ++r3 < t3; )
          n3[r3] = e3(r3);
        return n3;
      };
      var Ce = function(t3) {
        return t3 != null && typeof t3 == "object";
      };
      var Re = function(t3) {
        return Ce(t3) && xt(t3) == "[object Arguments]";
      }, Ie = Object.prototype, Le = Ie.hasOwnProperty, ze = Ie.propertyIsEnumerable, Be = Re(function() {
        return arguments;
      }()) ? Re : function(t3) {
        return Ce(t3) && Le.call(t3, "callee") && !ze.call(t3, "callee");
      }, Xe = r2(47), He = /^(?:0|[1-9]\d*)$/;
      var Ue = function(t3, e3) {
        var r3 = typeof t3;
        return !!(e3 = e3 == null ? 9007199254740991 : e3) && (r3 == "number" || r3 != "symbol" && He.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < e3;
      };
      var Ge = function(t3) {
        return typeof t3 == "number" && t3 > -1 && t3 % 1 == 0 && t3 <= 9007199254740991;
      }, Fe = {};
      Fe["[object Float32Array]"] = Fe["[object Float64Array]"] = Fe["[object Int8Array]"] = Fe["[object Int16Array]"] = Fe["[object Int32Array]"] = Fe["[object Uint8Array]"] = Fe["[object Uint8ClampedArray]"] = Fe["[object Uint16Array]"] = Fe["[object Uint32Array]"] = true, Fe["[object Arguments]"] = Fe["[object Array]"] = Fe["[object ArrayBuffer]"] = Fe["[object Boolean]"] = Fe["[object DataView]"] = Fe["[object Date]"] = Fe["[object Error]"] = Fe["[object Function]"] = Fe["[object Map]"] = Fe["[object Number]"] = Fe["[object Object]"] = Fe["[object RegExp]"] = Fe["[object Set]"] = Fe["[object String]"] = Fe["[object WeakMap]"] = false;
      var Ye = function(t3) {
        return Ce(t3) && Ge(t3.length) && !!Fe[xt(t3)];
      };
      var Ve = function(t3) {
        return function(e3) {
          return t3(e3);
        };
      }, We = r2(48), Ke = We.a && We.a.isTypedArray, $e = Ke ? Ve(Ke) : Ye, Ze = Object.prototype.hasOwnProperty;
      var qe = function(t3, e3) {
        var r3 = Se(t3), n3 = !r3 && Be(t3), o3 = !r3 && !n3 && Object(Xe.a)(t3), i2 = !r3 && !n3 && !o3 && $e(t3), a3 = r3 || n3 || o3 || i2, u3 = a3 ? Ne(t3.length, String) : [], c3 = u3.length;
        for (var s3 in t3)
          !e3 && !Ze.call(t3, s3) || a3 && (s3 == "length" || o3 && (s3 == "offset" || s3 == "parent") || i2 && (s3 == "buffer" || s3 == "byteLength" || s3 == "byteOffset") || Ue(s3, c3)) || u3.push(s3);
        return u3;
      }, Je = Object.prototype;
      var Qe = function(t3) {
        var e3 = t3 && t3.constructor;
        return t3 === (typeof e3 == "function" && e3.prototype || Je);
      };
      var tr = function(t3, e3) {
        return function(r3) {
          return t3(e3(r3));
        };
      }, er = tr(Object.keys, Object), rr = Object.prototype.hasOwnProperty;
      var nr = function(t3) {
        if (!Qe(t3))
          return er(t3);
        var e3 = [];
        for (var r3 in Object(t3))
          rr.call(t3, r3) && r3 != "constructor" && e3.push(r3);
        return e3;
      };
      var or = function(t3) {
        return t3 != null && Ge(t3.length) && !kt(t3);
      };
      var ir = function(t3) {
        return or(t3) ? qe(t3) : nr(t3);
      };
      var ar = function(t3) {
        return Pe(t3, ir, Me);
      }, ur = Object.prototype.hasOwnProperty;
      var cr = function(t3, e3, r3, n3, o3, i2) {
        var a3 = 1 & r3, u3 = ar(t3), c3 = u3.length;
        if (c3 != ar(e3).length && !a3)
          return false;
        for (var s3 = c3; s3--; ) {
          var l3 = u3[s3];
          if (!(a3 ? l3 in e3 : ur.call(e3, l3)))
            return false;
        }
        var f2 = i2.get(t3), p2 = i2.get(e3);
        if (f2 && p2)
          return f2 == e3 && p2 == t3;
        var d3 = true;
        i2.set(t3, e3), i2.set(e3, t3);
        for (var y3 = a3; ++s3 < c3; ) {
          var h3 = t3[l3 = u3[s3]], v3 = e3[l3];
          if (n3)
            var b3 = a3 ? n3(v3, h3, l3, e3, t3, i2) : n3(h3, v3, l3, t3, e3, i2);
          if (!(b3 === void 0 ? h3 === v3 || o3(h3, v3, r3, n3, i2) : b3)) {
            d3 = false;
            break;
          }
          y3 || (y3 = l3 == "constructor");
        }
        if (d3 && !y3) {
          var g3 = t3.constructor, m3 = e3.constructor;
          g3 == m3 || !("constructor" in t3) || !("constructor" in e3) || typeof g3 == "function" && g3 instanceof g3 && typeof m3 == "function" && m3 instanceof m3 || (d3 = false);
        }
        return i2.delete(t3), i2.delete(e3), d3;
      }, sr = Ut(ht.a, "DataView"), lr = Ut(ht.a, "Promise"), fr = Ut(ht.a, "Set"), pr = Ut(ht.a, "WeakMap"), dr = Nt(sr), yr = Nt(Gt), hr = Nt(lr), vr = Nt(fr), br = Nt(pr), gr = xt;
      (sr && gr(new sr(new ArrayBuffer(1))) != "[object DataView]" || Gt && gr(new Gt()) != "[object Map]" || lr && gr(lr.resolve()) != "[object Promise]" || fr && gr(new fr()) != "[object Set]" || pr && gr(new pr()) != "[object WeakMap]") && (gr = function(t3) {
        var e3 = xt(t3), r3 = e3 == "[object Object]" ? t3.constructor : void 0, n3 = r3 ? Nt(r3) : "";
        if (n3)
          switch (n3) {
            case dr:
              return "[object DataView]";
            case yr:
              return "[object Map]";
            case hr:
              return "[object Promise]";
            case vr:
              return "[object Set]";
            case br:
              return "[object WeakMap]";
          }
        return e3;
      });
      var mr = gr, Or = Object.prototype.hasOwnProperty;
      var wr = function(t3, e3, r3, n3, o3, i2) {
        var a3 = Se(t3), u3 = Se(e3), c3 = a3 ? "[object Array]" : mr(t3), s3 = u3 ? "[object Array]" : mr(e3), l3 = (c3 = c3 == "[object Arguments]" ? "[object Object]" : c3) == "[object Object]", f2 = (s3 = s3 == "[object Arguments]" ? "[object Object]" : s3) == "[object Object]", p2 = c3 == s3;
        if (p2 && Object(Xe.a)(t3)) {
          if (!Object(Xe.a)(e3))
            return false;
          a3 = true, l3 = false;
        }
        if (p2 && !l3)
          return i2 || (i2 = new fe()), a3 || $e(t3) ? ge(t3, e3, r3, n3, o3, i2) : Ee(t3, e3, c3, r3, n3, o3, i2);
        if (!(1 & r3)) {
          var d3 = l3 && Or.call(t3, "__wrapped__"), y3 = f2 && Or.call(e3, "__wrapped__");
          if (d3 || y3) {
            var h3 = d3 ? t3.value() : t3, v3 = y3 ? e3.value() : e3;
            return i2 || (i2 = new fe()), o3(h3, v3, r3, n3, i2);
          }
        }
        return !!p2 && (i2 || (i2 = new fe()), cr(t3, e3, r3, n3, o3, i2));
      };
      var _r = function t3(e3, r3, n3, o3, i2) {
        return e3 === r3 || (e3 == null || r3 == null || !Ce(e3) && !Ce(r3) ? e3 != e3 && r3 != r3 : wr(e3, r3, n3, o3, t3, i2));
      };
      var jr = function(t3, e3, r3, n3) {
        var o3 = r3.length, i2 = o3, a3 = !n3;
        if (t3 == null)
          return !i2;
        for (t3 = Object(t3); o3--; ) {
          var u3 = r3[o3];
          if (a3 && u3[2] ? u3[1] !== t3[u3[0]] : !(u3[0] in t3))
            return false;
        }
        for (; ++o3 < i2; ) {
          var c3 = (u3 = r3[o3])[0], s3 = t3[c3], l3 = u3[1];
          if (a3 && u3[2]) {
            if (s3 === void 0 && !(c3 in t3))
              return false;
          } else {
            var f2 = new fe();
            if (n3)
              var p2 = n3(s3, l3, c3, t3, e3, f2);
            if (!(p2 === void 0 ? _r(l3, s3, 3, n3, f2) : p2))
              return false;
          }
        }
        return true;
      };
      var Er = function(t3) {
        return t3 == t3 && !St(t3);
      };
      var xr = function(t3) {
        for (var e3 = ir(t3), r3 = e3.length; r3--; ) {
          var n3 = e3[r3], o3 = t3[n3];
          e3[r3] = [n3, o3, Er(o3)];
        }
        return e3;
      };
      var Sr = function(t3, e3) {
        return function(r3) {
          return r3 != null && (r3[t3] === e3 && (e3 !== void 0 || t3 in Object(r3)));
        };
      };
      var Pr = function(t3) {
        var e3 = xr(t3);
        return e3.length == 1 && e3[0][2] ? Sr(e3[0][0], e3[0][1]) : function(r3) {
          return r3 === t3 || jr(r3, t3, e3);
        };
      };
      var kr = function(t3) {
        return typeof t3 == "symbol" || Ce(t3) && xt(t3) == "[object Symbol]";
      }, Ar = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Dr = /^\w*$/;
      var Tr = function(t3, e3) {
        if (Se(t3))
          return false;
        var r3 = typeof t3;
        return !(r3 != "number" && r3 != "symbol" && r3 != "boolean" && t3 != null && !kr(t3)) || (Dr.test(t3) || !Ar.test(t3) || e3 != null && t3 in Object(e3));
      };
      function Mr(t3, e3) {
        if (typeof t3 != "function" || e3 != null && typeof e3 != "function")
          throw new TypeError("Expected a function");
        var r3 = function() {
          var n3 = arguments, o3 = e3 ? e3.apply(this, n3) : n3[0], i2 = r3.cache;
          if (i2.has(o3))
            return i2.get(o3);
          var a3 = t3.apply(this, n3);
          return r3.cache = i2.set(o3, a3) || i2, a3;
        };
        return r3.cache = new (Mr.Cache || ce)(), r3;
      }
      Mr.Cache = ce;
      var Nr = Mr;
      var Cr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rr = /\\(\\)?/g, Ir = function(t3) {
        var e3 = Nr(t3, function(t4) {
          return r3.size === 500 && r3.clear(), t4;
        }), r3 = e3.cache;
        return e3;
      }(function(t3) {
        var e3 = [];
        return t3.charCodeAt(0) === 46 && e3.push(""), t3.replace(Cr, function(t4, r3, n3, o3) {
          e3.push(n3 ? o3.replace(Rr, "$1") : r3 || t4);
        }), e3;
      }), Lr = vt ? vt.prototype : void 0, zr = Lr ? Lr.toString : void 0;
      var Br = function t3(e3) {
        if (typeof e3 == "string")
          return e3;
        if (Se(e3))
          return tt(e3, t3) + "";
        if (kr(e3))
          return zr ? zr.call(e3) : "";
        var r3 = e3 + "";
        return r3 == "0" && 1 / e3 == -1 / 0 ? "-0" : r3;
      };
      var Xr = function(t3) {
        return t3 == null ? "" : Br(t3);
      };
      var Hr = function(t3, e3) {
        return Se(t3) ? t3 : Tr(t3, e3) ? [t3] : Ir(Xr(t3));
      };
      var Ur = function(t3) {
        if (typeof t3 == "string" || kr(t3))
          return t3;
        var e3 = t3 + "";
        return e3 == "0" && 1 / t3 == -1 / 0 ? "-0" : e3;
      };
      var Gr = function(t3, e3) {
        for (var r3 = 0, n3 = (e3 = Hr(e3, t3)).length; t3 != null && r3 < n3; )
          t3 = t3[Ur(e3[r3++])];
        return r3 && r3 == n3 ? t3 : void 0;
      };
      var Fr = function(t3, e3, r3) {
        var n3 = t3 == null ? void 0 : Gr(t3, e3);
        return n3 === void 0 ? r3 : n3;
      };
      var Yr = function(t3, e3) {
        return t3 != null && e3 in Object(t3);
      };
      var Vr = function(t3, e3, r3) {
        for (var n3 = -1, o3 = (e3 = Hr(e3, t3)).length, i2 = false; ++n3 < o3; ) {
          var a3 = Ur(e3[n3]);
          if (!(i2 = t3 != null && r3(t3, a3)))
            break;
          t3 = t3[a3];
        }
        return i2 || ++n3 != o3 ? i2 : !!(o3 = t3 == null ? 0 : t3.length) && Ge(o3) && Ue(a3, o3) && (Se(t3) || Be(t3));
      };
      var Wr = function(t3, e3) {
        return t3 != null && Vr(t3, e3, Yr);
      };
      var Kr = function(t3, e3) {
        return Tr(t3) && Er(e3) ? Sr(Ur(t3), e3) : function(r3) {
          var n3 = Fr(r3, t3);
          return n3 === void 0 && n3 === e3 ? Wr(r3, t3) : _r(e3, n3, 3);
        };
      };
      var $r = function(t3) {
        return t3;
      };
      var Zr = function(t3) {
        return function(e3) {
          return e3 == null ? void 0 : e3[t3];
        };
      };
      var qr = function(t3) {
        return function(e3) {
          return Gr(e3, t3);
        };
      };
      var Jr = function(t3) {
        return Tr(t3) ? Zr(Ur(t3)) : qr(t3);
      };
      var Qr = function(t3) {
        return typeof t3 == "function" ? t3 : t3 == null ? $r : typeof t3 == "object" ? Se(t3) ? Kr(t3[0], t3[1]) : Pr(t3) : Jr(t3);
      };
      var tn = function(t3) {
        return function(e3, r3, n3) {
          for (var o3 = -1, i2 = Object(e3), a3 = n3(e3), u3 = a3.length; u3--; ) {
            var c3 = a3[t3 ? u3 : ++o3];
            if (r3(i2[c3], c3, i2) === false)
              break;
          }
          return e3;
        };
      }();
      var en = function(t3, e3) {
        return function(r3, n3) {
          if (r3 == null)
            return r3;
          if (!or(r3))
            return t3(r3, n3);
          for (var o3 = r3.length, i2 = e3 ? o3 : -1, a3 = Object(r3); (e3 ? i2-- : ++i2 < o3) && n3(a3[i2], i2, a3) !== false; )
            ;
          return r3;
        };
      }(function(t3, e3) {
        return t3 && tn(t3, e3, ir);
      });
      var rn = function(t3, e3) {
        var r3 = -1, n3 = or(t3) ? Array(t3.length) : [];
        return en(t3, function(t4, o3, i2) {
          n3[++r3] = e3(t4, o3, i2);
        }), n3;
      };
      var nn = function(t3, e3) {
        return (Se(t3) ? tt : rn)(t3, Qr(e3));
      }, on = function() {
        try {
          var t3 = Ut(Object, "defineProperty");
          return t3({}, "", {}), t3;
        } catch (t4) {
        }
      }();
      var an = function(t3, e3, r3) {
        e3 == "__proto__" && on ? on(t3, e3, { configurable: true, enumerable: true, value: r3, writable: true }) : t3[e3] = r3;
      }, un = Object.prototype.hasOwnProperty;
      var cn = function(t3, e3, r3) {
        var n3 = t3[e3];
        un.call(t3, e3) && rt(n3, r3) && (r3 !== void 0 || e3 in t3) || an(t3, e3, r3);
      };
      var sn = function(t3, e3, r3, n3) {
        var o3 = !r3;
        r3 || (r3 = {});
        for (var i2 = -1, a3 = e3.length; ++i2 < a3; ) {
          var u3 = e3[i2], c3 = n3 ? n3(r3[u3], t3[u3], u3, r3, t3) : void 0;
          c3 === void 0 && (c3 = t3[u3]), o3 ? an(r3, u3, c3) : cn(r3, u3, c3);
        }
        return r3;
      };
      var ln = function(t3, e3, r3) {
        switch (r3.length) {
          case 0:
            return t3.call(e3);
          case 1:
            return t3.call(e3, r3[0]);
          case 2:
            return t3.call(e3, r3[0], r3[1]);
          case 3:
            return t3.call(e3, r3[0], r3[1], r3[2]);
        }
        return t3.apply(e3, r3);
      }, fn = Math.max;
      var pn = function(t3, e3, r3) {
        return e3 = fn(e3 === void 0 ? t3.length - 1 : e3, 0), function() {
          for (var n3 = arguments, o3 = -1, i2 = fn(n3.length - e3, 0), a3 = Array(i2); ++o3 < i2; )
            a3[o3] = n3[e3 + o3];
          o3 = -1;
          for (var u3 = Array(e3 + 1); ++o3 < e3; )
            u3[o3] = n3[o3];
          return u3[e3] = r3(a3), ln(t3, this, u3);
        };
      };
      var dn = function(t3) {
        return function() {
          return t3;
        };
      }, yn = on ? function(t3, e3) {
        return on(t3, "toString", { configurable: true, enumerable: false, value: dn(e3), writable: true });
      } : $r, hn = Date.now;
      var vn = function(t3) {
        var e3 = 0, r3 = 0;
        return function() {
          var n3 = hn(), o3 = 16 - (n3 - r3);
          if (r3 = n3, o3 > 0) {
            if (++e3 >= 800)
              return arguments[0];
          } else
            e3 = 0;
          return t3.apply(void 0, arguments);
        };
      }(yn);
      var bn = function(t3, e3) {
        return vn(pn(t3, e3, $r), t3 + "");
      };
      var gn = function(t3, e3, r3) {
        if (!St(r3))
          return false;
        var n3 = typeof e3;
        return !!(n3 == "number" ? or(r3) && Ue(e3, r3.length) : n3 == "string" && e3 in r3) && rt(r3[e3], t3);
      };
      var mn = function(t3) {
        return bn(function(e3, r3) {
          var n3 = -1, o3 = r3.length, i2 = o3 > 1 ? r3[o3 - 1] : void 0, a3 = o3 > 2 ? r3[2] : void 0;
          for (i2 = t3.length > 3 && typeof i2 == "function" ? (o3--, i2) : void 0, a3 && gn(r3[0], r3[1], a3) && (i2 = o3 < 3 ? void 0 : i2, o3 = 1), e3 = Object(e3); ++n3 < o3; ) {
            var u3 = r3[n3];
            u3 && t3(e3, u3, n3, i2);
          }
          return e3;
        });
      }, On = Object.prototype.hasOwnProperty, wn = mn(function(t3, e3) {
        if (Qe(e3) || or(e3))
          sn(e3, ir(e3), t3);
        else
          for (var r3 in e3)
            On.call(e3, r3) && cn(t3, r3, e3[r3]);
      });
      var _n = function(t3, e3, r3, n3) {
        if (!St(t3))
          return t3;
        for (var o3 = -1, i2 = (e3 = Hr(e3, t3)).length, a3 = i2 - 1, u3 = t3; u3 != null && ++o3 < i2; ) {
          var c3 = Ur(e3[o3]), s3 = r3;
          if (c3 === "__proto__" || c3 === "constructor" || c3 === "prototype")
            return t3;
          if (o3 != a3) {
            var l3 = u3[c3];
            (s3 = n3 ? n3(l3, c3, u3) : void 0) === void 0 && (s3 = St(l3) ? l3 : Ue(e3[o3 + 1]) ? [] : {});
          }
          cn(u3, c3, s3), u3 = u3[c3];
        }
        return t3;
      };
      var jn = function(t3, e3, r3) {
        for (var n3 = -1, o3 = e3.length, i2 = {}; ++n3 < o3; ) {
          var a3 = e3[n3], u3 = Gr(t3, a3);
          r3(u3, a3) && _n(i2, Hr(a3, t3), u3);
        }
        return i2;
      };
      var En = function(t3, e3) {
        return jn(t3, e3, function(e4, r3) {
          return Wr(t3, r3);
        });
      }, xn = vt ? vt.isConcatSpreadable : void 0;
      var Sn = function(t3) {
        return Se(t3) || Be(t3) || !!(xn && t3 && t3[xn]);
      };
      var Pn = function t3(e3, r3, n3, o3, i2) {
        var a3 = -1, u3 = e3.length;
        for (n3 || (n3 = Sn), i2 || (i2 = []); ++a3 < u3; ) {
          var c3 = e3[a3];
          r3 > 0 && n3(c3) ? r3 > 1 ? t3(c3, r3 - 1, n3, o3, i2) : xe(i2, c3) : o3 || (i2[i2.length] = c3);
        }
        return i2;
      };
      var kn = function(t3) {
        return (t3 == null ? 0 : t3.length) ? Pn(t3, 1) : [];
      };
      var An, Dn, Tn, Mn, Nn, Cn, Rn, In, Ln, zn, Bn, Xn, Hn, Un, Gn, Fn, Yn = function(t3) {
        return vn(pn(t3, void 0, kn), t3 + "");
      }(function(t3, e3) {
        return t3 == null ? {} : En(t3, e3);
      });
      function Vn(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function Wn(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Kn(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function $n(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var Zn, qn, Jn, Qn, to, eo, ro = { stopZoomGraph: false, stopScrollGraph: false, stopMoveGraph: false, adjustEdge: false, adjustEdgeStartAndEnd: false, adjustNodePosition: false, hideAnchors: true, nodeTextEdit: false, edgeTextEdit: false, nodeTextDraggable: false, edgeTextDraggable: false }, no = ["stopZoomGraph", "stopScrollGraph", "stopMoveGraph", "adjustEdge", "adjustEdgeMiddle", "adjustEdgeStartAndEnd", "adjustNodePosition", "hideAnchors", "hoverOutline", "nodeTextEdit", "edgeTextEdit", "nodeTextDraggable", "edgeTextDraggable", "multipleSelectKey"], oo = (Dn = $n((An = function() {
        function t3(e4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), Vn(this, "stopZoomGraph", Dn, this), Vn(this, "stopScrollGraph", Tn, this), Vn(this, "stopMoveGraph", Mn, this), Vn(this, "adjustEdge", Nn, this), Vn(this, "adjustEdgeMiddle", Cn, this), Vn(this, "adjustEdgeStartAndEnd", Rn, this), Vn(this, "adjustNodePosition", In, this), Vn(this, "hideAnchors", Ln, this), Vn(this, "hoverOutline", zn, this), Vn(this, "nodeSelectedOutline", Bn, this), Vn(this, "edgeSelectedOutline", Xn, this), Vn(this, "nodeTextEdit", Hn, this), Vn(this, "edgeTextEdit", Un, this), Vn(this, "nodeTextDraggable", Gn, this), Vn(this, "edgeTextDraggable", Fn, this), Kn(this, "multipleSelectKey", ""), Kn(this, "defaultConfig", {}), wn(this, this.getConfigDetail(e4));
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "updateEditConfig", value: function(t4) {
          var e4 = this.getConfigDetail(t4);
          wn(this, e4);
        } }, { key: "getConfigDetail", value: function(t4) {
          var e4 = t4.isSilentMode, r4 = t4.textEdit, n3 = {};
          if (e4 === false && wn(n3, this.defaultConfig), e4 === true) {
            var o3 = Yn(ro, no);
            this.defaultConfig = { stopZoomGraph: this.stopZoomGraph, stopScrollGraph: this.stopScrollGraph, stopMoveGraph: this.stopMoveGraph, adjustEdge: this.adjustEdge, adjustEdgeMiddle: this.adjustEdgeMiddle, adjustEdgeStartAndEnd: this.adjustEdgeStartAndEnd, adjustNodePosition: this.adjustNodePosition, hideAnchors: this.hideAnchors, hoverOutline: this.hoverOutline, nodeSelectedOutline: this.nodeSelectedOutline, edgeSelectedOutline: this.edgeSelectedOutline, nodeTextEdit: this.nodeTextEdit, edgeTextEdit: this.edgeTextEdit, nodeTextDraggable: this.nodeTextDraggable, edgeTextDraggable: this.edgeTextDraggable }, wn(n3, o3);
          }
          r4 === false && wn(n3, { nodeTextEdit: false, edgeTextEdit: false });
          var i2 = Yn(t4, no);
          return wn(n3, i2);
        } }, { key: "getConfig", value: function() {
          return Yn(this, no);
        } }]) && Wn(e3.prototype, r3), t3;
      }()).prototype, "stopZoomGraph", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), Tn = $n(An.prototype, "stopScrollGraph", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), Mn = $n(An.prototype, "stopMoveGraph", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), Nn = $n(An.prototype, "adjustEdge", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Cn = $n(An.prototype, "adjustEdgeMiddle", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), Rn = $n(An.prototype, "adjustEdgeStartAndEnd", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), In = $n(An.prototype, "adjustNodePosition", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Ln = $n(An.prototype, "hideAnchors", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), zn = $n(An.prototype, "hoverOutline", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Bn = $n(An.prototype, "nodeSelectedOutline", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Xn = $n(An.prototype, "edgeSelectedOutline", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Hn = $n(An.prototype, "nodeTextEdit", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Un = $n(An.prototype, "edgeTextEdit", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Gn = $n(An.prototype, "nodeTextDraggable", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), Fn = $n(An.prototype, "edgeTextDraggable", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), $n(An.prototype, "updateEditConfig", [o2.k], Object.getOwnPropertyDescriptor(An.prototype, "updateEditConfig"), An.prototype), An);
      r2(98);
      !function(t3) {
        t3[t3.DEFAULT = 1] = "DEFAULT", t3[t3.TEXT_EDIT = 2] = "TEXT_EDIT", t3[t3.SHOW_MENU = 3] = "SHOW_MENU", t3[t3.ALLOW_CONNECT = 4] = "ALLOW_CONNECT", t3[t3.NOT_ALLOW_CONNECT = 5] = "NOT_ALLOW_CONNECT";
      }(Zn || (Zn = {})), function(t3) {
        t3.KEY = "logic-flow", t3.NODE_NAME = "lf-node", t3.EDGE_NAME = "lf-edge";
      }(qn || (qn = {})), function(t3) {
        t3.NODE = "node", t3.CIRCLE_NODE = "circle-node", t3.POLYGON_NODE = "polygon-node", t3.RECT_NODE = "rect-node", t3.TEXT_NODE = "text-node", t3.ELLIPSE_NODE = "ellipse-node", t3.DIAMOND_NODE = "diamond-node", t3.HTML_NODE = "html-node", t3.EDGE = "edge", t3.LINE_EDGE = "line-edge", t3.POLYLINE_EDGE = "polyline-edge", t3.BEZIER_EDGE = "bezier-edge", t3.GRAPH = "graph";
      }(Jn || (Jn = {})), function(t3) {
        t3.NODE = "node", t3.EDGE = "edge", t3.GRAPH = "graph";
      }(Qn || (Qn = {})), function(t3) {
        t3.ELEMENT_CLICK = "element:click", t3.NODE_CLICK = "node:click", t3.NODE_DBCLICK = "node:dbclick", t3.NODE_DELETE = "node:delete", t3.NODE_ADD = "node:add", t3.NODE_DND_ADD = "node:dnd-add", t3.NODE_DND_DRAG = "node:dnd-drag", t3.NODE_MOUSEDOWN = "node:mousedown", t3.NODE_DRAGSTART = "node:dragstart", t3.NODE_DRAG = "node:drag", t3.NODE_DROP = "node:drop", t3.NODE_MOUSEUP = "node:mouseup", t3.NODE_MOUSEMOVE = "node:mousemove", t3.NODE_MOUSEENTER = "node:mouseenter", t3.NODE_MOUSELEAVE = "node:mouseleave", t3.NODE_CONTEXTMENU = "node:contextmenu", t3.EDGE_DELETE = "edge:delete", t3.EDGE_ADD = "edge:add", t3.EDGE_CLICK = "edge:click", t3.EDGE_DBCLICK = "edge:dbclick", t3.EDGE_MOUSEENTER = "edge:mouseenter", t3.EDGE_MOUSELEAVE = "edge:mouseleave", t3.EDGE_CONTEXTMENU = "edge:contextmenu", t3.EDGE_ADJUST = "edge:adjust", t3.EDGE_EXCHANGE_NODE = "edge:exchange-node", t3.BLANK_MOUSEDOWN = "blank:mousedown", t3.BLANK_DRAGSTART = "blank:dragstart", t3.BLANK_DRAG = "blank:drag", t3.BLANK_DROP = "blank:drop", t3.BLANK_MOUSEMOVE = "blank:mousemove", t3.BLANK_MOUSEUP = "blank:mouseup", t3.BLANK_CLICK = "blank:click", t3.BLANK_CONTEXTMENU = "blank:contextmenu", t3.SELECTION_MOUSEDOWN = "selection:mousedown", t3.SELECTION_DRAGSTART = "selection:dragstart", t3.SELECTION_DRAG = "selection:drag", t3.SELECTION_DROP = "selection:drop", t3.SELECTION_MOUSEMOVE = "selection:mousemove", t3.SELECTION_MOUSEUP = "selection:mouseup", t3.SELECTION_CONTEXTMENU = "selection:contextmenu", t3.CONNECTION_NOT_ALLOWED = "connection:not-allowed", t3.HISTORY_CHANGE = "history:change", t3.TEXT_UPDATE = "text:update", t3.GRAPH_TRANSFORM = "graph:transform", t3.GRAPH_RENDERED = "graph:rendered";
      }(to || (to = {})), function(t3) {
        t3.HORIZONTAL = "horizontal", t3.VERTICAL = "vertical";
      }(eo || (eo = {}));
      var io, ao, uo, co, so, lo, fo, po, yo;
      function ho(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return vo(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return vo(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function vo(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function bo(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function go(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function mo(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function Oo(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      !function(t3) {
        t3[t3.DEFAULT = 0] = "DEFAULT", t3[t3.INCREASE = 1] = "INCREASE";
      }(io || (io = {}));
      var wo = (uo = Oo((ao = function() {
        function t3(e4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), mo(this, "MINI_SCALE_SIZE", 0.2), mo(this, "MAX_SCALE_SIZE", 16), bo(this, "SCALE_X", uo, this), bo(this, "SKEW_Y", co, this), bo(this, "SKEW_X", so, this), bo(this, "SCALE_Y", lo, this), bo(this, "TRANSLATE_X", fo, this), bo(this, "TRANSLATE_Y", po, this), bo(this, "ZOOM_SIZE", yo, this), mo(this, "eventCenter", void 0), this.eventCenter = e4;
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "setZoomMiniSize", value: function(t4) {
          this.MINI_SCALE_SIZE = t4;
        } }, { key: "setZoomMaxSize", value: function(t4) {
          this.MAX_SCALE_SIZE = t4;
        } }, { key: "HtmlPointToCanvasPoint", value: function(t4) {
          var e4 = ho(t4, 2), r4 = e4[0], n3 = e4[1];
          return [(r4 - this.TRANSLATE_X) / this.SCALE_X, (n3 - this.TRANSLATE_Y) / this.SCALE_Y];
        } }, { key: "CanvasPointToHtmlPoint", value: function(t4) {
          var e4 = ho(t4, 2), r4 = e4[0], n3 = e4[1];
          return [r4 * this.SCALE_X + this.TRANSLATE_X, n3 * this.SCALE_Y + this.TRANSLATE_Y];
        } }, { key: "moveCanvasPointByHtml", value: function(t4, e4, r4) {
          var n3 = ho(t4, 2), o3 = n3[0], i2 = n3[1];
          return [o3 + e4 / this.SCALE_X, i2 + r4 / this.SCALE_Y];
        } }, { key: "fixDeltaXY", value: function(t4, e4) {
          return [t4 / this.SCALE_X, e4 / this.SCALE_Y];
        } }, { key: "getTransformStyle", value: function() {
          var t4 = [this.SCALE_X, this.SKEW_Y, this.SKEW_X, this.SCALE_Y, this.TRANSLATE_X, this.TRANSLATE_Y].join(",");
          return { transform: "matrix(".concat(t4, ")") };
        } }, { key: "zoom", value: function() {
          var t4 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], e4 = arguments.length > 1 ? arguments[1] : void 0, r4 = this.SCALE_X, n3 = this.SCALE_Y;
          return t4 === true ? (r4 += this.ZOOM_SIZE, n3 += this.ZOOM_SIZE) : t4 === false ? (r4 -= this.ZOOM_SIZE, n3 -= this.ZOOM_SIZE) : typeof t4 == "number" && (r4 = t4, n3 = t4), r4 < this.MINI_SCALE_SIZE || r4 > this.MAX_SCALE_SIZE || (e4 && (this.TRANSLATE_X -= (r4 - this.SCALE_X) * e4[0], this.TRANSLATE_Y -= (n3 - this.SCALE_Y) * e4[1]), this.SCALE_X = r4, this.SCALE_Y = n3, this.emitGraphTransform("zoom")), "".concat(100 * this.SCALE_X, "%");
        } }, { key: "emitGraphTransform", value: function(t4) {
          this.eventCenter.emit(to.GRAPH_TRANSFORM, { type: t4, transform: { SCALE_X: this.SCALE_X, SKEW_Y: this.SKEW_Y, SKEW_X: this.SKEW_X, SCALE_Y: this.SCALE_Y, TRANSLATE_X: this.TRANSLATE_X, TRANSLATE_Y: this.TRANSLATE_Y } });
        } }, { key: "resetZoom", value: function() {
          this.SCALE_X = 1, this.SCALE_Y = 1, this.emitGraphTransform("resetZoom");
        } }, { key: "translate", value: function(t4, e4) {
          this.TRANSLATE_X += t4, this.TRANSLATE_Y += e4, this.emitGraphTransform("translate");
        } }, { key: "focusOn", value: function(t4, e4, r4, n3) {
          var o3 = ho(this.CanvasPointToHtmlPoint([t4, e4]), 2), i2 = r4 / 2 - o3[0], a3 = n3 / 2 - o3[1];
          this.TRANSLATE_X += i2, this.TRANSLATE_Y += a3, this.emitGraphTransform("focusOn");
        } }]) && go(e3.prototype, r3), t3;
      }()).prototype, "SCALE_X", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 1;
      } }), co = Oo(ao.prototype, "SKEW_Y", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0;
      } }), so = Oo(ao.prototype, "SKEW_X", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0;
      } }), lo = Oo(ao.prototype, "SCALE_Y", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 1;
      } }), fo = Oo(ao.prototype, "TRANSLATE_X", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0;
      } }), po = Oo(ao.prototype, "TRANSLATE_Y", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0;
      } }), yo = Oo(ao.prototype, "ZOOM_SIZE", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0.04;
      } }), Oo(ao.prototype, "zoom", [o2.k], Object.getOwnPropertyDescriptor(ao.prototype, "zoom"), ao.prototype), Oo(ao.prototype, "resetZoom", [o2.k], Object.getOwnPropertyDescriptor(ao.prototype, "resetZoom"), ao.prototype), Oo(ao.prototype, "translate", [o2.k], Object.getOwnPropertyDescriptor(ao.prototype, "translate"), ao.prototype), Oo(ao.prototype, "focusOn", [o2.k], Object.getOwnPropertyDescriptor(ao.prototype, "focusOn"), ao.prototype), ao);
      var _o = function(t3, e3) {
        for (var r3 = -1, n3 = t3 == null ? 0 : t3.length; ++r3 < n3 && e3(t3[r3], r3, t3) !== false; )
          ;
        return t3;
      };
      var jo = function(t3, e3) {
        return t3 && sn(e3, ir(e3), t3);
      };
      var Eo = function(t3) {
        var e3 = [];
        if (t3 != null)
          for (var r3 in Object(t3))
            e3.push(r3);
        return e3;
      }, xo = Object.prototype.hasOwnProperty;
      var So = function(t3) {
        if (!St(t3))
          return Eo(t3);
        var e3 = Qe(t3), r3 = [];
        for (var n3 in t3)
          (n3 != "constructor" || !e3 && xo.call(t3, n3)) && r3.push(n3);
        return r3;
      };
      var Po = function(t3) {
        return or(t3) ? qe(t3, true) : So(t3);
      };
      var ko = function(t3, e3) {
        return t3 && sn(e3, Po(e3), t3);
      }, Ao = r2(101);
      var Do = function(t3, e3) {
        var r3 = -1, n3 = t3.length;
        for (e3 || (e3 = Array(n3)); ++r3 < n3; )
          e3[r3] = t3[r3];
        return e3;
      };
      var To = function(t3, e3) {
        return sn(t3, Me(t3), e3);
      }, Mo = tr(Object.getPrototypeOf, Object), No = Object.getOwnPropertySymbols ? function(t3) {
        for (var e3 = []; t3; )
          xe(e3, Me(t3)), t3 = Mo(t3);
        return e3;
      } : Ae;
      var Co = function(t3, e3) {
        return sn(t3, No(t3), e3);
      };
      var Ro = function(t3) {
        return Pe(t3, Po, No);
      }, Io = Object.prototype.hasOwnProperty;
      var Lo = function(t3) {
        var e3 = t3.length, r3 = new t3.constructor(e3);
        return e3 && typeof t3[0] == "string" && Io.call(t3, "index") && (r3.index = t3.index, r3.input = t3.input), r3;
      };
      var zo = function(t3) {
        var e3 = new t3.constructor(t3.byteLength);
        return new me(e3).set(new me(t3)), e3;
      };
      var Bo = function(t3, e3) {
        var r3 = e3 ? zo(t3.buffer) : t3.buffer;
        return new t3.constructor(r3, t3.byteOffset, t3.byteLength);
      }, Xo = /\w*$/;
      var Ho = function(t3) {
        var e3 = new t3.constructor(t3.source, Xo.exec(t3));
        return e3.lastIndex = t3.lastIndex, e3;
      }, Uo = vt ? vt.prototype : void 0, Go = Uo ? Uo.valueOf : void 0;
      var Fo = function(t3) {
        return Go ? Object(Go.call(t3)) : {};
      };
      var Yo = function(t3, e3) {
        var r3 = e3 ? zo(t3.buffer) : t3.buffer;
        return new t3.constructor(r3, t3.byteOffset, t3.length);
      };
      var Vo = function(t3, e3, r3) {
        var n3 = t3.constructor;
        switch (e3) {
          case "[object ArrayBuffer]":
            return zo(t3);
          case "[object Boolean]":
          case "[object Date]":
            return new n3(+t3);
          case "[object DataView]":
            return Bo(t3, r3);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return Yo(t3, r3);
          case "[object Map]":
            return new n3();
          case "[object Number]":
          case "[object String]":
            return new n3(t3);
          case "[object RegExp]":
            return Ho(t3);
          case "[object Set]":
            return new n3();
          case "[object Symbol]":
            return Fo(t3);
        }
      }, Wo = Object.create, Ko = function() {
        function t3() {
        }
        return function(e3) {
          if (!St(e3))
            return {};
          if (Wo)
            return Wo(e3);
          t3.prototype = e3;
          var r3 = new t3();
          return t3.prototype = void 0, r3;
        };
      }();
      var $o = function(t3) {
        return typeof t3.constructor != "function" || Qe(t3) ? {} : Ko(Mo(t3));
      };
      var Zo = function(t3) {
        return Ce(t3) && mr(t3) == "[object Map]";
      }, qo = We.a && We.a.isMap, Jo = qo ? Ve(qo) : Zo;
      var Qo = function(t3) {
        return Ce(t3) && mr(t3) == "[object Set]";
      }, ti = We.a && We.a.isSet, ei = ti ? Ve(ti) : Qo, ri = {};
      ri["[object Arguments]"] = ri["[object Array]"] = ri["[object ArrayBuffer]"] = ri["[object DataView]"] = ri["[object Boolean]"] = ri["[object Date]"] = ri["[object Float32Array]"] = ri["[object Float64Array]"] = ri["[object Int8Array]"] = ri["[object Int16Array]"] = ri["[object Int32Array]"] = ri["[object Map]"] = ri["[object Number]"] = ri["[object Object]"] = ri["[object RegExp]"] = ri["[object Set]"] = ri["[object String]"] = ri["[object Symbol]"] = ri["[object Uint8Array]"] = ri["[object Uint8ClampedArray]"] = ri["[object Uint16Array]"] = ri["[object Uint32Array]"] = true, ri["[object Error]"] = ri["[object Function]"] = ri["[object WeakMap]"] = false;
      var ni = function t3(e3, r3, n3, o3, i2, a3) {
        var u3, c3 = 1 & r3, s3 = 2 & r3, l3 = 4 & r3;
        if (n3 && (u3 = i2 ? n3(e3, o3, i2, a3) : n3(e3)), u3 !== void 0)
          return u3;
        if (!St(e3))
          return e3;
        var f2 = Se(e3);
        if (f2) {
          if (u3 = Lo(e3), !c3)
            return Do(e3, u3);
        } else {
          var p2 = mr(e3), d3 = p2 == "[object Function]" || p2 == "[object GeneratorFunction]";
          if (Object(Xe.a)(e3))
            return Object(Ao.a)(e3, c3);
          if (p2 == "[object Object]" || p2 == "[object Arguments]" || d3 && !i2) {
            if (u3 = s3 || d3 ? {} : $o(e3), !c3)
              return s3 ? Co(e3, ko(u3, e3)) : To(e3, jo(u3, e3));
          } else {
            if (!ri[p2])
              return i2 ? e3 : {};
            u3 = Vo(e3, p2, c3);
          }
        }
        a3 || (a3 = new fe());
        var y3 = a3.get(e3);
        if (y3)
          return y3;
        a3.set(e3, u3), ei(e3) ? e3.forEach(function(o4) {
          u3.add(t3(o4, r3, n3, o4, e3, a3));
        }) : Jo(e3) && e3.forEach(function(o4, i3) {
          u3.set(i3, t3(o4, r3, n3, i3, e3, a3));
        });
        var h3 = f2 ? void 0 : (l3 ? s3 ? Ro : ar : s3 ? Po : ir)(e3);
        return _o(h3 || e3, function(o4, i3) {
          h3 && (o4 = e3[i3 = o4]), cn(u3, i3, t3(o4, r3, n3, i3, e3, a3));
        }), u3;
      };
      var oi = function(t3) {
        return ni(t3, 5);
      };
      var ii = function(t3, e3, r3) {
        (r3 !== void 0 && !rt(t3[e3], r3) || r3 === void 0 && !(e3 in t3)) && an(t3, e3, r3);
      };
      var ai = function(t3) {
        return Ce(t3) && or(t3);
      }, ui = Function.prototype, ci = Object.prototype, si = ui.toString, li = ci.hasOwnProperty, fi = si.call(Object);
      var pi = function(t3) {
        if (!Ce(t3) || xt(t3) != "[object Object]")
          return false;
        var e3 = Mo(t3);
        if (e3 === null)
          return true;
        var r3 = li.call(e3, "constructor") && e3.constructor;
        return typeof r3 == "function" && r3 instanceof r3 && si.call(r3) == fi;
      };
      var di = function(t3, e3) {
        if ((e3 !== "constructor" || typeof t3[e3] != "function") && e3 != "__proto__")
          return t3[e3];
      };
      var yi = function(t3) {
        return sn(t3, Po(t3));
      };
      var hi = function(t3, e3, r3, n3, o3, i2, a3) {
        var u3 = di(t3, r3), c3 = di(e3, r3), s3 = a3.get(c3);
        if (s3)
          ii(t3, r3, s3);
        else {
          var l3 = i2 ? i2(u3, c3, r3 + "", t3, e3, a3) : void 0, f2 = l3 === void 0;
          if (f2) {
            var p2 = Se(c3), d3 = !p2 && Object(Xe.a)(c3), y3 = !p2 && !d3 && $e(c3);
            l3 = c3, p2 || d3 || y3 ? Se(u3) ? l3 = u3 : ai(u3) ? l3 = Do(u3) : d3 ? (f2 = false, l3 = Object(Ao.a)(c3, true)) : y3 ? (f2 = false, l3 = Yo(c3, true)) : l3 = [] : pi(c3) || Be(c3) ? (l3 = u3, Be(u3) ? l3 = yi(u3) : St(u3) && !kt(u3) || (l3 = $o(c3))) : f2 = false;
          }
          f2 && (a3.set(c3, l3), o3(l3, c3, n3, i2, a3), a3.delete(c3)), ii(t3, r3, l3);
        }
      };
      var vi = function t3(e3, r3, n3, o3, i2) {
        e3 !== r3 && tn(r3, function(a3, u3) {
          if (i2 || (i2 = new fe()), St(a3))
            hi(e3, r3, u3, n3, t3, o3, i2);
          else {
            var c3 = o3 ? o3(di(e3, u3), a3, u3 + "", e3, r3, i2) : void 0;
            c3 === void 0 && (c3 = a3), ii(e3, u3, c3);
          }
        }, Po);
      }, bi = mn(function(t3, e3, r3) {
        vi(t3, e3, r3);
      }), gi = { baseNode: { fill: "#FFFFFF", stroke: "#000000", strokeWidth: 2 }, baseEdge: { stroke: "#000000", strokeWidth: 2 }, rect: {}, circle: {}, diamond: {}, ellipse: {}, polygon: {}, text: { color: "#000000", stroke: "none", fontSize: 12, background: { fill: "transparent" } }, anchor: { stroke: "#000000", fill: "#FFFFFF", r: 4, hover: { fill: "#949494", fillOpacity: 0.5, stroke: "#949494", r: 10 } }, nodeText: { color: "#000000", overflowMode: "default", lineHeight: 1.2, fontSize: 12 }, edgeText: { textWidth: 100, overflowMode: "default", fontSize: 12, background: { fill: "#FFFFFF" } }, line: {}, polyline: {}, bezier: { fill: "none", adjustLine: { stroke: "#949494" }, adjustAnchor: { r: 4, fill: "#949494", stroke: "#949494", fillOpacity: 1 } }, arrow: { offset: 10, verticalLength: 5 }, anchorLine: { stroke: "#000000", strokeWidth: 2, strokeDasharray: "3,2" }, snapline: { stroke: "#949494", strokeWidth: 1 }, edgeAdjust: { r: 4, fill: "#FFFFFF", stroke: "#949494", strokeWidth: 2 }, outline: { fill: "transparent", stroke: "#949494", strokeDasharray: "3,3", hover: { stroke: "#949494" } } }, mi = function(t3) {
        var e3 = oi(gi);
        return t3 && (e3 = bi(e3, t3)), e3;
      };
      r2(70), r2(190);
      function Oi(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      var wi = function() {
        function t3() {
          var e4, r4, n3;
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), n3 = {}, (r4 = "_events") in (e4 = this) ? Object.defineProperty(e4, r4, { value: n3, enumerable: true, configurable: true, writable: true }) : e4[r4] = n3;
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "on", value: function(t4, e4, r4) {
          var n3 = this;
          return t4 == null || t4.split(",").forEach(function(t5) {
            t5 = t5.trim(), n3._events[t5] || (n3._events[t5] = []), n3._events[t5].push({ callback: e4, once: !!r4 });
          }), this;
        } }, { key: "once", value: function(t4, e4) {
          var r4 = this;
          t4 == null || t4.split(",").forEach(function(t5) {
            return t5 = t5.trim(), r4.on(t5, e4, true);
          });
        } }, { key: "emit", value: function(t4, e4) {
          var r4 = this;
          t4 == null || t4.split(",").forEach(function(t5) {
            var n3 = r4._events[t5] || [], o3 = r4._events["*"] || [], i2 = function(n4) {
              for (var o4 = n4.length, i3 = 0; i3 < o4; i3++)
                if (n4[i3]) {
                  var a3 = n4[i3], u3 = a3.callback;
                  a3.once && (n4.splice(i3, 1), n4.length === 0 && delete r4._events[t5], o4--, i3--), u3.apply(r4, [e4]);
                }
            };
            i2(n3), i2(o3);
          });
        } }, { key: "off", value: function(t4, e4) {
          var r4 = this;
          return t4 || (this._events = {}), t4.split(",").forEach(function(t5) {
            if (e4) {
              for (var n3 = r4._events[t5] || [], o3 = n3.length, i2 = 0; i2 < o3; i2++)
                n3[i2].callback === e4 && (n3.splice(i2, 1), o3--, i2--);
              n3.length === 0 && delete r4._events[t5];
            } else
              delete r4._events[t5];
          }), this;
        } }, { key: "getEvents", value: function() {
          return this._events;
        } }]) && Oi(e3.prototype, r3), t3;
      }();
      function _i(t3, e3) {
        return e3 * Math.round(t3 / e3) || t3;
      }
      function ji(t3, e3) {
        return t3 % e3;
      }
      function Ei(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return xi(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return xi(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function xi(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      var Si, Pi = function(t3, e3, r3) {
        var n3 = Ei(t3, 2), o3 = n3[0], i2 = n3[1], a3 = Ei(e3, 2), u3 = a3[0], c3 = a3[1], s3 = Ei(r3, 2), l3 = s3[0], f2 = s3[1];
        return o3 > u3 && o3 < l3 && i2 > c3 && i2 < f2;
      }, ki = function(t3, e3) {
        var r3 = false;
        switch (e3.multipleSelectKey) {
          case "meta":
            r3 = t3.metaKey;
            break;
          case "alt":
            r3 = t3.altKey;
            break;
          case "shift":
            r3 = t3.shiftKey;
            break;
          default:
            r3 = false;
        }
        return r3;
      }, Ai = (r2(71), r2(155), r2(122), r2(72), r2(12), r2(13), r2(14), r2(46), r2(31), new Uint8Array(16));
      function Di() {
        if (!Si && !(Si = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto)))
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Si(Ai);
      }
      var Ti = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (var Mi = function(t3) {
        return typeof t3 == "string" && Ti.test(t3);
      }, Ni = [], Ci = 0; Ci < 256; ++Ci)
        Ni.push((Ci + 256).toString(16).substr(1));
      var Ri = function(t3) {
        var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r3 = (Ni[t3[e3 + 0]] + Ni[t3[e3 + 1]] + Ni[t3[e3 + 2]] + Ni[t3[e3 + 3]] + "-" + Ni[t3[e3 + 4]] + Ni[t3[e3 + 5]] + "-" + Ni[t3[e3 + 6]] + Ni[t3[e3 + 7]] + "-" + Ni[t3[e3 + 8]] + Ni[t3[e3 + 9]] + "-" + Ni[t3[e3 + 10]] + Ni[t3[e3 + 11]] + Ni[t3[e3 + 12]] + Ni[t3[e3 + 13]] + Ni[t3[e3 + 14]] + Ni[t3[e3 + 15]]).toLowerCase();
        if (!Mi(r3))
          throw TypeError("Stringified UUID is invalid");
        return r3;
      };
      var Ii = function(t3, e3, r3) {
        var n3 = (t3 = t3 || {}).random || (t3.rng || Di)();
        if (n3[6] = 15 & n3[6] | 64, n3[8] = 63 & n3[8] | 128, e3) {
          r3 = r3 || 0;
          for (var o3 = 0; o3 < 16; ++o3)
            e3[r3 + o3] = n3[o3];
          return e3;
        }
        return Ri(n3);
      }, Li = function() {
        return Ii();
      }, zi = function(t3) {
        var e3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r3 = t3.nodes.reduce(function(t4, r4) {
          return t4[r4.id] = e3 + Ii(), r4.id = t4[r4.id], t4;
        }, {});
        return t3.edges.forEach(function(t4) {
          t4.id = e3 + Ii(), t4.sourceNodeId = r3[t4.sourceNodeId], t4.targetNodeId = r3[t4.targetNodeId];
        }), t3;
      }, Bi = (r2(99), r2(199), function(t3, e3, r3) {
        var n3 = t3.x, o3 = t3.y;
        return (n3 - e3.x) * (n3 - r3.x) <= 0 && (o3 - e3.y) * (o3 - r3.y) <= 0;
      });
      function Xi(t3) {
        return (Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Hi(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Ui(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Hi(Object(r3), true).forEach(function(e4) {
            Gi(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Hi(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Gi(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Fi, Yi, Vi, Wi, Ki, $i, Zi, qi, Ji, Qi, ta, ea, ra, na, oa, ia, aa, ua = function(t3) {
        return t3.anchors;
      }, ca = function(t3, e3) {
        for (var r3, n3 = e3.nodes, o3 = n3.length - 1; o3 >= 0; o3--) {
          var i2 = n3[o3];
          if (da(t3, i2)) {
            var a3 = la(t3, i2);
            if (a3) {
              var u3 = { node: i2, anchorIndex: a3.index, anchor: a3.anchor };
              r3 && !sa(i2, r3.node, e3) || (r3 = u3);
            }
          }
        }
        return r3;
      }, sa = function(t3, e3, r3) {
        return t3.zIndex > e3.zIndex || r3.nodesMap[t3.id].index > r3.nodesMap[e3.id].index;
      }, la = function(t3, e3) {
        for (var r3, n3 = ua(e3), o3 = Number.MAX_SAFE_INTEGER, i2 = 0; i2 < n3.length; i2++) {
          var a3 = fa(t3.x, t3.y, n3[i2].x, n3[i2].y);
          a3 < o3 && (o3 = a3, r3 = { index: i2, anchor: Ui(Ui({}, n3[i2]), {}, { x: n3[i2].x, y: n3[i2].y, id: n3[i2].id }) });
        }
        return r3;
      }, fa = function(t3, e3, r3, n3) {
        return Math.hypot(t3 - r3, e3 - n3);
      }, pa = function(t3, e3) {
        var r3 = false, n3 = ya(e3);
        return t3.x >= n3.minX - 0 && t3.x <= n3.maxX + 0 && t3.y >= n3.minY - 0 && t3.y <= n3.maxY + 0 && (r3 = true), r3;
      }, da = function(t3, e3) {
        var r3 = false, n3 = ya(e3);
        return t3.x >= n3.minX - 5 && t3.x <= n3.maxX + 5 && t3.y >= n3.minY - 5 && t3.y <= n3.maxY + 5 && (r3 = true), r3;
      }, ya = function(t3) {
        var e3 = t3.x, r3 = t3.y, n3 = t3.width, o3 = t3.height;
        return { minX: e3 - n3 / 2, minY: r3 - o3 / 2, maxX: e3 + n3 / 2, maxY: r3 + o3 / 2, x: e3, y: r3, width: n3, height: o3, centerX: e3, centerY: r3 };
      }, ha = function(t3, e3, r3) {
        var n3, o3 = function(t4) {
          var e4 = t4, r4 = e4.x, n4 = e4.y, o4 = e4.width, i3 = e4.height, a3 = e4.radius;
          return [{ x: r4 - o4 / 2 + a3, y: n4 - i3 / 2 + a3, r: a3 }, { x: r4 + o4 / 2 - a3, y: n4 - i3 / 2 + a3, r: a3 }, { x: r4 - o4 / 2 + a3, y: n4 + i3 / 2 - a3, r: a3 }, { x: r4 + o4 / 2 - a3, y: n4 + i3 / 2 - a3, r: a3 }];
        }(r3), i2 = Number.MAX_SAFE_INTEGER;
        return o3.forEach(function(e4) {
          var r4 = fa(t3.x, t3.y, e4.x, e4.y);
          r4 < i2 && (i2 = r4, n3 = e4);
        }), va(t3, e3, n3);
      }, va = function(t3, e3, r3) {
        var n3, o3 = r3, i2 = o3.x, a3 = o3.y, u3 = o3.r;
        if (e3 === eo.HORIZONTAL) {
          var c3 = i2 - Math.sqrt(u3 * u3 - (t3.y - a3) * (t3.y - a3)), s3 = i2 + Math.sqrt(u3 * u3 - (t3.y - a3) * (t3.y - a3));
          n3 = { x: Math.abs(c3 - t3.x) < Math.abs(s3 - t3.x) ? c3 : s3, y: t3.y };
        } else if (e3 === eo.VERTICAL) {
          var l3 = a3 - Math.sqrt(u3 * u3 - (t3.x - i2) * (t3.x - i2)), f2 = a3 + Math.sqrt(u3 * u3 - (t3.x - i2) * (t3.x - i2)), p2 = Math.abs(l3 - t3.y) < Math.abs(f2 - t3.y) ? l3 : f2;
          n3 = { x: t3.x, y: p2 };
        }
        return n3;
      }, ba = function(t3, e3) {
        var r3 = e3, n3 = false, o3 = r3.x - r3.width / 2 + r3.radius, i2 = r3.x + r3.width / 2 - r3.radius, a3 = r3.y - r3.height / 2 + r3.radius, u3 = r3.y + r3.height / 2 - r3.radius, c3 = r3.x, s3 = r3.y, l3 = r3.width, f2 = r3.height;
        return t3.y === s3 + f2 / 2 || t3.y === s3 - f2 / 2 ? n3 = t3.x > o3 && t3.x < i2 : t3.x !== c3 + l3 / 2 && t3.x !== c3 - l3 / 2 || (n3 = t3.y > a3 && t3.y < u3), n3;
      }, ga = function(t3, e3, r3) {
        var n3, o3 = r3, i2 = o3.x, a3 = o3.y, u3 = o3.rx, c3 = o3.ry;
        if (e3 === eo.HORIZONTAL) {
          var s3 = i2 - Math.sqrt(u3 * u3 - (t3.y - a3) * (t3.y - a3) * u3 * u3 / (c3 * c3)), l3 = i2 + Math.sqrt(u3 * u3 - (t3.y - a3) * (t3.y - a3) * u3 * u3 / (c3 * c3));
          n3 = { x: Math.abs(s3 - t3.x) < Math.abs(l3 - t3.x) ? s3 : l3, y: t3.y };
        } else if (e3 === eo.VERTICAL) {
          var f2 = a3 - Math.sqrt(c3 * c3 - (t3.x - i2) * (t3.x - i2) * c3 * c3 / (u3 * u3)), p2 = a3 + Math.sqrt(c3 * c3 - (t3.x - i2) * (t3.x - i2) * c3 * c3 / (u3 * u3)), d3 = Math.abs(f2 - t3.y) < Math.abs(p2 - t3.y) ? f2 : p2;
          n3 = { x: t3.x, y: d3 };
        }
        return n3;
      }, ma = function(t3, e3, r3) {
        for (var n3, o3 = r3.pointsPosition, i2 = Number.MAX_SAFE_INTEGER, a3 = [], u3 = 0; u3 < o3.length; u3++)
          a3.push({ start: o3[u3], end: o3[(u3 + 1) % o3.length] });
        return a3.forEach(function(r4) {
          var o4 = r4.start, a4 = r4.end, u4 = o4, c3 = a4;
          o4.x > a4.x && (u4 = a4, c3 = o4);
          var s3 = { x: t3.x, y: t3.y };
          if (u4.x === c3.x && e3 === eo.HORIZONTAL && (s3 = { x: u4.x, y: t3.y }), u4.y === c3.y && e3 === eo.VERTICAL && (s3 = { x: t3.x, y: u4.y }), u4.x !== c3.x && u4.y !== c3.y) {
            var l3 = (c3.y - u4.y) / (c3.x - u4.x), f2 = (u4.x * c3.y - c3.x * u4.y) / (u4.x - c3.x);
            e3 === eo.HORIZONTAL ? s3 = { x: (t3.y - f2) / l3, y: t3.y } : e3 === eo.VERTICAL && (s3 = { x: t3.x, y: l3 * t3.x + f2 });
          }
          if (Bi(s3, o4, a4)) {
            var p2 = fa(s3.x, s3.y, t3.x, t3.y);
            p2 < i2 && (i2 = p2, n3 = s3);
          }
        }), n3;
      }, Oa = function(t3, e3, r3, n3) {
        var o3 = t3.x, i2 = t3.y;
        return e3.x > t3.x ? o3 = t3.x + r3 / 2 : e3.x < t3.x && (o3 = t3.x - r3 / 2), e3.y > t3.y ? i2 = t3.y + n3 / 2 : e3.y < t3.y && (i2 = t3.y - n3 / 2), { x: o3, y: i2 };
      }, wa = function(t3) {
        var e3 = t3.rows, r3 = t3.style, n3 = t3.rowsLength, o3 = t3.className, i2 = document.createElement("div");
        i2.style.fontSize = r3.fontSize, i2.style.width = r3.width, i2.className = o3, i2.style.lineHeight = r3.lineHeight, i2.style.padding = r3.padding, r3.fontFamily && (i2.style.fontFamily = r3.fontFamily), n3 > 1 ? e3.forEach(function(t4) {
          var e4 = document.createElement("div");
          e4.textContent = t4, i2.appendChild(e4);
        }) : i2.textContent = e3, document.body.appendChild(i2);
        var a3 = i2.clientHeight;
        return document.body.removeChild(i2), a3;
      }, _a = function(t3) {
        var e3 = t3.rows, r3 = t3.rowsLength, n3 = t3.fontSize, o3 = 0;
        return e3 && e3.forEach(function(t4) {
          var e4 = Ku(t4);
          o3 = e4 > o3 ? e4 : o3;
        }), { width: Math.ceil(o3 / 2) * n3 + n3 / 4, height: r3 * (n3 + 2) + n3 / 4 };
      }, ja = function(t3) {
        return Xi(t3) !== "object" ? { isAllPass: !!t3, msg: t3 ? "" : "\u4E0D\u5141\u8BB8\u8FDE\u63A5" } : t3;
      }, Ea = function(t3) {
        try {
          return JSON.parse(JSON.stringify(t3));
        } catch (e3) {
          return t3;
        }
      }, xa = 1e3, Sa = 999, Pa = function() {
        return ++xa;
      };
      function ka(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Aa(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? ka(Object(r3), true).forEach(function(e4) {
            Ma(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : ka(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Da(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function Ta(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ma(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function Na(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var Ca = (Yi = Na((Fi = function() {
        function t3(e4, r4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), Ma(this, "id", Li()), Da(this, "type", Yi, this), Da(this, "sourceNodeId", Vi, this), Da(this, "targetNodeId", Wi, this), Da(this, "startPoint", Ki, this), Da(this, "endPoint", $i, this), Da(this, "text", Zi, this), Da(this, "properties", qi, this), Da(this, "points", Ji, this), Da(this, "pointsList", Qi, this), Da(this, "isSelected", ta, this), Da(this, "isHovered", ea, this), Da(this, "isHitable", ra, this), Da(this, "draggable", na, this), Da(this, "visible", oa, this), Ma(this, "graphModel", void 0), Da(this, "zIndex", ia, this), Ma(this, "BaseType", Qn.EDGE), Ma(this, "modelType", Jn.EDGE), Da(this, "state", aa, this), Ma(this, "additionStateData", void 0), Ma(this, "sourceAnchorId", ""), Ma(this, "targetAnchorId", ""), Ma(this, "menu", void 0), Ma(this, "customTextPosition", false), this.graphModel = r4, this.initEdgeData(e4), this.setAttributes(), this.setAnchors(), this.initPoints(), this.formatText(e4);
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "initEdgeData", value: function(t4) {
          if (t4.properties || (t4.properties = {}), !t4.id) {
            var e4 = this.graphModel.idGenerator, r4 = e4 && e4(t4.type);
            r4 && (t4.id = r4);
            var n3 = this.createId();
            n3 && (t4.id = n3);
          }
          wn(this, Qu(t4)), this.graphModel.overlapMode === io.INCREASE && (this.zIndex = t4.zIndex || Pa());
        } }, { key: "setAttributes", value: function() {
        } }, { key: "createId", value: function() {
          return null;
        } }, { key: "getEdgeStyle", value: function() {
          var t4 = this.graphModel.theme.baseEdge;
          return oi(t4);
        } }, { key: "getTextStyle", value: function() {
          var t4 = this.graphModel.theme.edgeText;
          return oi(t4);
        } }, { key: "getOutlineStyle", value: function() {
          var t4 = this.graphModel.theme.outline;
          return oi(t4);
        } }, { key: "getTextPosition", value: function() {
          return { x: 0, y: 0 };
        } }, { key: "sourceNode", get: function() {
          var t4, e4;
          return (t4 = this.graphModel) === null || t4 === void 0 || (e4 = t4.nodesMap[this.sourceNodeId]) === null || e4 === void 0 ? void 0 : e4.model;
        } }, { key: "targetNode", get: function() {
          var t4, e4;
          return (t4 = this.graphModel) === null || t4 === void 0 || (e4 = t4.nodesMap[this.targetNodeId]) === null || e4 === void 0 ? void 0 : e4.model;
        } }, { key: "textPosition", get: function() {
          return this.getTextPosition();
        } }, { key: "getBeginAnchor", value: function(t4, e4) {
          var r4, n3;
          return ua(t4).forEach(function(t5) {
            var o3 = tc(t5, e4);
            n3 ? o3 < n3 && (n3 = o3, r4 = t5) : (n3 = o3, r4 = t5);
          }), r4;
        } }, { key: "getEndAnchor", value: function(t4) {
          var e4, r4, n3 = this;
          return ua(t4).forEach(function(t5) {
            var o3 = tc(t5, n3.startPoint);
            r4 ? o3 < r4 && (r4 = o3, e4 = t5) : (r4 = o3, e4 = t5);
          }), e4;
        } }, { key: "getProperties", value: function() {
          return Object(o2.I)(this.properties);
        } }, { key: "getData", value: function() {
          var t4 = this.text, e4 = t4.x, r4 = t4.y, n3 = t4.value, i2 = { id: this.id, type: this.type, sourceNodeId: this.sourceNode.id, targetNodeId: this.targetNode.id, startPoint: Object.assign({}, this.startPoint), endPoint: Object.assign({}, this.endPoint), properties: Object(o2.I)(this.properties) };
          return n3 && (i2.text = { x: e4, y: r4, value: n3 }), this.graphModel.overlapMode === io.INCREASE && (i2.zIndex = this.zIndex), i2;
        } }, { key: "setProperty", value: function(t4, e4) {
          this.properties[t4] = Ea(e4), this.setAttributes();
        } }, { key: "setProperties", value: function(t4) {
          this.properties = Aa(Aa({}, this.properties), Ea(t4)), this.setAttributes();
        } }, { key: "formatText", value: function(t4) {
          var e4 = this.textPosition, r4 = e4.x, n3 = e4.y;
          t4.text && typeof t4.text != "string" ? Object.prototype.toString.call(t4.text) === "[object Object]" && (this.text = { x: t4.text.x || r4, y: t4.text.y || n3, value: t4.text.value || "", draggable: this.text.draggable, editable: this.text.editable }) : this.text = { value: t4.text || "", x: r4, y: n3, draggable: this.text.draggable, editable: this.text.editable };
        } }, { key: "resetTextPosition", value: function() {
          var t4 = this.textPosition, e4 = t4.x, r4 = t4.y;
          this.text.x = e4, this.text.y = r4;
        } }, { key: "moveText", value: function(t4, e4) {
          if (this.text) {
            var r4 = this.text, n3 = r4.x, o3 = r4.y, i2 = r4.value, a3 = r4.draggable, u3 = r4.editable;
            this.text = { value: i2, draggable: a3, x: n3 + t4, y: o3 + e4, editable: u3 };
          }
        } }, { key: "setText", value: function(t4) {
          t4 && wn(this.text, t4);
        } }, { key: "updateText", value: function(t4) {
          this.text = Aa(Aa({}, this.text), {}, { value: t4 });
        } }, { key: "setAnchors", value: function() {
          if (!this.startPoint) {
            var t4 = this.getBeginAnchor(this.sourceNode, this.targetNode);
            this.startPoint = t4;
          }
          if (!this.endPoint) {
            var e4 = this.getEndAnchor(this.targetNode);
            this.endPoint = e4;
          }
        } }, { key: "setSelected", value: function() {
          var t4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          this.isSelected = t4;
        } }, { key: "setHovered", value: function() {
          var t4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          this.isHovered = t4;
        } }, { key: "setHitable", value: function() {
          var t4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          this.isHitable = t4;
        } }, { key: "setElementState", value: function(t4, e4) {
          this.state = t4, this.additionStateData = e4;
        } }, { key: "updateStartPoint", value: function(t4) {
          this.startPoint = t4;
        } }, { key: "updateEndPoint", value: function(t4) {
          this.endPoint = t4;
        } }, { key: "setZIndex", value: function() {
          var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          this.zIndex = t4;
        } }, { key: "initPoints", value: function() {
        } }, { key: "updateAttributes", value: function(t4) {
          wn(this, t4);
        } }, { key: "getAdjustStart", value: function() {
          return this.startPoint;
        } }, { key: "getAdjustEnd", value: function() {
          return this.endPoint;
        } }, { key: "updateAfterAdjustStartAndEnd", value: function(t4) {
          var e4 = t4.startPoint, r4 = t4.endPoint;
          this.updateStartPoint({ x: e4.x, y: e4.y }), this.updateEndPoint({ x: r4.x, y: r4.y });
        } }]) && Ta(e3.prototype, r3), t3;
      }()).prototype, "type", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return "";
      } }), Vi = Na(Fi.prototype, "sourceNodeId", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return "";
      } }), Wi = Na(Fi.prototype, "targetNodeId", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return "";
      } }), Ki = Na(Fi.prototype, "startPoint", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return null;
      } }), $i = Na(Fi.prototype, "endPoint", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return null;
      } }), Zi = Na(Fi.prototype, "text", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return { value: "", x: 0, y: 0, draggable: false, editable: true };
      } }), qi = Na(Fi.prototype, "properties", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return {};
      } }), Ji = Na(Fi.prototype, "points", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return "";
      } }), Qi = Na(Fi.prototype, "pointsList", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return [];
      } }), ta = Na(Fi.prototype, "isSelected", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), ea = Na(Fi.prototype, "isHovered", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), ra = Na(Fi.prototype, "isHitable", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), na = Na(Fi.prototype, "draggable", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), oa = Na(Fi.prototype, "visible", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), ia = Na(Fi.prototype, "zIndex", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0;
      } }), aa = Na(Fi.prototype, "state", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 1;
      } }), Na(Fi.prototype, "sourceNode", [o2.m], Object.getOwnPropertyDescriptor(Fi.prototype, "sourceNode"), Fi.prototype), Na(Fi.prototype, "targetNode", [o2.m], Object.getOwnPropertyDescriptor(Fi.prototype, "targetNode"), Fi.prototype), Na(Fi.prototype, "textPosition", [o2.m], Object.getOwnPropertyDescriptor(Fi.prototype, "textPosition"), Fi.prototype), Na(Fi.prototype, "setProperty", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setProperty"), Fi.prototype), Na(Fi.prototype, "setProperties", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setProperties"), Fi.prototype), Na(Fi.prototype, "formatText", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "formatText"), Fi.prototype), Na(Fi.prototype, "resetTextPosition", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "resetTextPosition"), Fi.prototype), Na(Fi.prototype, "moveText", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "moveText"), Fi.prototype), Na(Fi.prototype, "setText", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setText"), Fi.prototype), Na(Fi.prototype, "updateText", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "updateText"), Fi.prototype), Na(Fi.prototype, "setAnchors", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setAnchors"), Fi.prototype), Na(Fi.prototype, "setSelected", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setSelected"), Fi.prototype), Na(Fi.prototype, "setHovered", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setHovered"), Fi.prototype), Na(Fi.prototype, "setHitable", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setHitable"), Fi.prototype), Na(Fi.prototype, "setElementState", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setElementState"), Fi.prototype), Na(Fi.prototype, "updateStartPoint", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "updateStartPoint"), Fi.prototype), Na(Fi.prototype, "updateEndPoint", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "updateEndPoint"), Fi.prototype), Na(Fi.prototype, "setZIndex", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "setZIndex"), Fi.prototype), Na(Fi.prototype, "initPoints", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "initPoints"), Fi.prototype), Na(Fi.prototype, "updateAttributes", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "updateAttributes"), Fi.prototype), Na(Fi.prototype, "getAdjustStart", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "getAdjustStart"), Fi.prototype), Na(Fi.prototype, "getAdjustEnd", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "getAdjustEnd"), Fi.prototype), Na(Fi.prototype, "updateAfterAdjustStartAndEnd", [o2.k], Object.getOwnPropertyDescriptor(Fi.prototype, "updateAfterAdjustStartAndEnd"), Fi.prototype), Fi), Ra = Ca;
      function Ia(t3) {
        return (Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function La(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function za(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? La(Object(r3), true).forEach(function(e4) {
            Ka(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : La(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Ba(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Xa(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ha() {
        return (Ha = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = Ua(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function Ua(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = Wa(t3)) !== null; )
          ;
        return t3;
      }
      function Ga(t3, e3) {
        return (Ga = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Fa(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Wa(t3);
          if (e3) {
            var o3 = Wa(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Ya(this, r3);
        };
      }
      function Ya(t3, e3) {
        if (e3 && (Ia(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Va(t3);
      }
      function Va(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Wa(t3) {
        return (Wa = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Ka(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var $a, Za, qa = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ga(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Fa(i2);
        function i2() {
          var t4;
          Ba(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return Ka(Va(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.LINE_EDGE), t4;
        }
        return e3 = i2, (r3 = [{ key: "getEdgeStyle", value: function() {
          var t4 = this.graphModel.theme.line;
          return za(za({}, Ha(Wa(i2.prototype), "getEdgeStyle", this).call(this)), oi(t4));
        } }, { key: "getTextPosition", value: function() {
          return { x: (this.startPoint.x + this.endPoint.x) / 2, y: (this.startPoint.y + this.endPoint.y) / 2 };
        } }]) && Xa(e3.prototype, r3), i2;
      }(Ra);
      function Ja(t3) {
        return (Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Qa(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return tu(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return tu(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function tu(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function eu(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function ru(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? eu(Object(r3), true).forEach(function(e4) {
            du(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : eu(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function nu(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function ou(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function iu(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function au() {
        return (au = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = uu(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function uu(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = pu(t3)) !== null; )
          ;
        return t3;
      }
      function cu(t3, e3) {
        return (cu = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function su(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = pu(t3);
          if (e3) {
            var o3 = pu(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return lu(this, r3);
        };
      }
      function lu(t3, e3) {
        if (e3 && (Ja(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return fu(t3);
      }
      function fu(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function pu(t3) {
        return (pu = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function du(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function yu(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var hu = (Za = yu(($a = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && cu(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = su(i2);
        function i2() {
          var t4;
          ou(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return du(fu(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.POLYLINE_EDGE), du(fu(t4), "draginngPointList", void 0), nu(fu(t4), "dbClickPosition", Za, fu(t4)), t4;
        }
        return e3 = i2, (r3 = [{ key: "initEdgeData", value: function(t4) {
          this.offset = 30, au(pu(i2.prototype), "initEdgeData", this).call(this, t4);
        } }, { key: "getEdgeStyle", value: function() {
          var t4 = this.graphModel.theme.polyline;
          return ru(ru({}, au(pu(i2.prototype), "getEdgeStyle", this).call(this)), oi(t4));
        } }, { key: "getTextPosition", value: function() {
          var t4, e4 = (t4 = this.text) === null || t4 === void 0 ? void 0 : t4.value;
          if (this.dbClickPosition && !e4) {
            var r4 = this.dbClickPosition;
            return { x: r4.x, y: r4.y };
          }
          var n3 = Yu(this.points), o4 = Qa(Xu(n3), 2), i3 = o4[0], a3 = o4[1];
          return { x: (i3.x + a3.x) / 2, y: (i3.y + a3.y) / 2 };
        } }, { key: "getAfterAnchor", value: function(t4, e4, r4) {
          var n3, o4;
          return r4.forEach(function(r5) {
            var i3;
            t4 === eo.HORIZONTAL ? i3 = Math.abs(e4.y - r5.y) : t4 === eo.VERTICAL && (i3 = Math.abs(e4.x - r5.x)), (!o4 || o4 > i3) && (o4 = i3, n3 = r5);
          }), n3;
        } }, { key: "getCorssPoint", value: function(t4, e4, r4) {
          var n3;
          return t4 === eo.HORIZONTAL ? n3 = { x: r4.x, y: e4.y } : t4 === eo.VERTICAL && (n3 = { x: e4.x, y: r4.y }), n3;
        } }, { key: "removeCrossPoints", value: function(t4, e4, r4) {
          var n3 = r4.map(function(t5) {
            return t5;
          });
          if (t4 === 1) {
            var o4 = n3[t4], i3 = n3[e4], a3 = n3[t4 - 1];
            if (Hu(a3, o4, this.sourceNode)) {
              if (Uu(o4, i3, this.sourceNode)) {
                var u3 = Gu(o4, i3, this.sourceNode);
                u3 && (n3[t4] = u3, n3.splice(t4 - 1, 1), t4--, e4--);
              }
            } else
              this.sourceNode.anchors.forEach(function(e5) {
                (e5.x === a3.x && e5.x === o4.x || e5.y === a3.y && e5.y === o4.y) && fa(e5.x, e5.y, o4.x, o4.y) < fa(a3.x, a3.y, o4.x, o4.y) && (n3[t4 - 1] = e5);
              });
          }
          if (e4 === r4.length - 2) {
            var c3 = n3[t4], s3 = n3[e4], l3 = n3[e4 + 1];
            if (Hu(s3, l3, this.targetNode)) {
              if (Uu(c3, s3, this.targetNode)) {
                var f2 = Gu(c3, s3, this.targetNode);
                f2 && (n3[e4] = f2, n3.splice(e4 + 1, 1));
              }
            } else
              this.targetNode.anchors.forEach(function(t5) {
                (t5.x === l3.x && t5.x === s3.x || t5.y === l3.y && t5.y === s3.y) && fa(t5.x, t5.y, s3.x, s3.y) < fa(l3.x, l3.y, s3.x, s3.y) && (n3[e4 + 1] = t5);
              });
          }
          return n3;
        } }, { key: "getDragingPoints", value: function(t4, e4, r4, n3, o4) {
          var i3 = o4.map(function(t5) {
            return t5;
          }), a3 = this.getAfterAnchor(t4, r4, n3), u3 = this.getCorssPoint(t4, r4, a3);
          return e4 === "start" ? (i3.unshift(u3), i3.unshift(a3)) : (i3.push(u3), i3.push(a3)), i3;
        } }, { key: "updateCrossPoints", value: function(t4) {
          var e4 = t4.map(function(t5) {
            return t5;
          }), r4 = t4[0], n3 = t4[1], o4 = t4[e4.length - 2], i3 = t4[e4.length - 1], a3 = this.sourceNode, u3 = this.targetNode, c3 = a3.modelType, s3 = u3.modelType, l3 = Fu(r4, n3), f2 = e4[0];
          switch (c3) {
            case Jn.RECT_NODE:
              a3.radius !== 0 && (ba(r4, a3) || (f2 = ha(r4, l3, a3)));
              break;
            case Jn.CIRCLE_NODE:
              f2 = va(r4, l3, a3);
              break;
            case Jn.ELLIPSE_NODE:
              f2 = ga(r4, l3, a3);
              break;
            case Jn.DIAMOND_NODE:
            case Jn.POLYGON_NODE:
              f2 = ma(r4, l3, a3);
          }
          e4[0] = f2;
          var p2 = Fu(o4, i3), d3 = e4[e4.length - 1];
          switch (s3) {
            case Jn.RECT_NODE:
              u3.radius !== 0 && (ba(i3, u3) || (d3 = ha(i3, p2, u3)));
              break;
            case Jn.CIRCLE_NODE:
              d3 = va(i3, p2, u3);
              break;
            case Jn.ELLIPSE_NODE:
              d3 = ga(i3, p2, u3);
              break;
            case Jn.DIAMOND_NODE:
            case Jn.POLYGON_NODE:
              d3 = ma(i3, p2, u3);
          }
          return e4[e4.length - 1] = d3, e4;
        } }, { key: "getData", value: function() {
          var t4 = au(pu(i2.prototype), "getData", this).call(this), e4 = this.pointsList.map(function(t5) {
            return { x: t5.x, y: t5.y };
          });
          return Object.assign({}, t4, { pointsList: e4 });
        } }, { key: "initPoints", value: function() {
          this.pointsList.length > 0 ? this.points = this.pointsList.map(function(t4) {
            return "".concat(t4.x, ",").concat(t4.y);
          }).join(" ") : this.updatePoints();
        } }, { key: "updatePoints", value: function() {
          var t4 = Bu({ x: this.startPoint.x, y: this.startPoint.y }, { x: this.endPoint.x, y: this.endPoint.y }, this.sourceNode, this.targetNode, this.offset || 0);
          this.pointsList = t4, this.points = t4.map(function(t5) {
            return "".concat(t5.x, ",").concat(t5.y);
          }).join(" ");
        } }, { key: "updateStartPoint", value: function(t4) {
          this.startPoint = t4, this.updatePoints();
        } }, { key: "updateEndPoint", value: function(t4) {
          this.endPoint = t4, this.updatePoints();
        } }, { key: "dragAppendStart", value: function() {
          this.draginngPointList = this.pointsList.map(function(t4) {
            return t4;
          });
        } }, { key: "dragAppendSimple", value: function(t4, e4) {
          this.isDragging = true;
          var r4 = t4.start, n3 = t4.end, o4 = t4.startIndex, i3 = t4.endIndex, a3 = t4.direction, u3 = this.pointsList, c3 = u3;
          return a3 === eo.HORIZONTAL ? (u3[o4] = { x: r4.x, y: r4.y + e4.y }, u3[i3] = { x: n3.x, y: n3.y + e4.y }, c3 = this.pointsList.map(function(t5) {
            return t5;
          })) : a3 === eo.VERTICAL && (u3[o4] = { x: r4.x + e4.x, y: r4.y }, u3[i3] = { x: n3.x + e4.x, y: n3.y }, c3 = this.pointsList.map(function(t5) {
            return t5;
          })), this.updatePointsAfterDrage(c3), this.draginngPointList = c3, this.setText(Object.assign({}, this.text, this.textPosition)), { start: Object.assign({}, u3[o4]), end: Object.assign({}, u3[i3]), startIndex: o4, endIndex: i3, direction: a3 };
        } }, { key: "dragAppend", value: function(t4, e4) {
          this.isDragging = true;
          var r4 = t4.start, n3 = t4.end, o4 = t4.startIndex, i3 = t4.endIndex, a3 = t4.direction, u3 = this.pointsList;
          if (a3 === eo.HORIZONTAL) {
            u3[o4] = { x: r4.x, y: r4.y + e4.y }, u3[i3] = { x: n3.x, y: n3.y + e4.y };
            var c3 = this.pointsList.map(function(t5) {
              return t5;
            });
            if (o4 !== 0 && i3 !== this.pointsList.length - 1 && (c3 = this.removeCrossPoints(o4, i3, c3)), o4 === 0) {
              var s3 = { x: r4.x, y: r4.y + e4.y };
              if (!pa(s3, this.sourceNode)) {
                var l3 = this.sourceNode.anchors;
                c3 = this.getDragingPoints(a3, "start", s3, l3, c3);
              }
            }
            if (i3 === this.pointsList.length - 1) {
              var f2 = { x: n3.x, y: n3.y + e4.y };
              if (!pa(f2, this.targetNode)) {
                var p2 = this.targetNode.anchors;
                c3 = this.getDragingPoints(a3, "end", f2, p2, c3);
              }
            }
            c3 = zu(c3), this.updatePointsAfterDrage(c3), this.draginngPointList = c3;
          } else if (a3 === eo.VERTICAL) {
            u3[o4] = { x: r4.x + e4.x, y: r4.y }, u3[i3] = { x: n3.x + e4.x, y: n3.y };
            var d3 = this.pointsList.map(function(t5) {
              return t5;
            });
            if (o4 !== 0 && i3 !== this.pointsList.length - 1 && (d3 = this.removeCrossPoints(o4, i3, d3)), o4 === 0) {
              var y3 = { x: r4.x + e4.x, y: r4.y };
              if (!pa(y3, this.sourceNode)) {
                var h3 = this.sourceNode.anchors;
                d3 = this.getDragingPoints(a3, "start", y3, h3, d3);
              }
            }
            if (i3 === this.pointsList.length - 1) {
              var v3 = { x: n3.x + e4.x, y: n3.y };
              if (!pa(v3, this.targetNode)) {
                var b3 = this.targetNode.anchors;
                d3 = this.getDragingPoints(a3, "end", v3, b3, d3);
              }
            }
            d3 = zu(d3), this.updatePointsAfterDrage(d3), this.draginngPointList = d3;
          }
          return this.setText(Object.assign({}, this.text, this.textPosition)), { start: Object.assign({}, u3[o4]), end: Object.assign({}, u3[i3]), startIndex: o4, endIndex: i3, direction: a3 };
        } }, { key: "dragAppendEnd", value: function() {
          if (this.draginngPointList) {
            var t4 = Yu(this.points);
            this.pointsList = t4.map(function(t5) {
              return t5;
            }), this.draginngPointList = [];
            var e4 = t4[0];
            this.startPoint = Object.assign({}, e4);
            var r4 = t4[t4.length - 1];
            this.endPoint = Object.assign({}, r4);
          }
          this.isDragging = false;
        } }, { key: "updatePointsAfterDrage", value: function(t4) {
          var e4 = this.updateCrossPoints(t4);
          this.points = e4.map(function(t5) {
            return "".concat(t5.x, ",").concat(t5.y);
          }).join(" ");
        } }, { key: "getAdjustStart", value: function() {
          return this.pointsList[0] || this.startPoint;
        } }, { key: "getAdjustEnd", value: function() {
          var t4 = this.pointsList;
          return t4[t4.length - 1] || this.endPoint;
        } }, { key: "updateAfterAdjustStartAndEnd", value: function(t4) {
          var e4 = t4.startPoint, r4 = t4.endPoint, n3 = t4.sourceNode, o4 = t4.targetNode, i3 = Bu({ x: e4.x, y: e4.y }, { x: r4.x, y: r4.y }, n3, o4, this.offset || 0);
          this.pointsList = i3, this.initPoints();
        } }]) && iu(e3.prototype, r3), i2;
      }(Ra)).prototype, "dbClickPosition", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), yu($a.prototype, "initPoints", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "initPoints"), $a.prototype), yu($a.prototype, "updatePoints", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "updatePoints"), $a.prototype), yu($a.prototype, "updateStartPoint", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "updateStartPoint"), $a.prototype), yu($a.prototype, "updateEndPoint", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "updateEndPoint"), $a.prototype), yu($a.prototype, "dragAppendStart", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "dragAppendStart"), $a.prototype), yu($a.prototype, "dragAppendSimple", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "dragAppendSimple"), $a.prototype), yu($a.prototype, "dragAppend", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "dragAppend"), $a.prototype), yu($a.prototype, "dragAppendEnd", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "dragAppendEnd"), $a.prototype), yu($a.prototype, "updatePointsAfterDrage", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "updatePointsAfterDrage"), $a.prototype), yu($a.prototype, "getAdjustStart", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "getAdjustStart"), $a.prototype), yu($a.prototype, "getAdjustEnd", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "getAdjustEnd"), $a.prototype), yu($a.prototype, "updateAfterAdjustStartAndEnd", [o2.k], Object.getOwnPropertyDescriptor($a.prototype, "updateAfterAdjustStartAndEnd"), $a.prototype), $a), vu = function(t3) {
        var e3 = t3.start, r3 = t3.end, n3 = t3.offset, o3 = t3.verticalLength, i2 = t3.type, a3 = { leftX: 0, leftY: 0, rightX: 0, rightY: 0 }, u3 = Math.atan((r3.y - e3.y) / (r3.x - e3.x)), c3 = Math.atan(n3 / o3), s3 = Math.sqrt(o3 * o3 + n3 * n3);
        return i2 === "start" ? r3.x >= e3.x ? (a3.leftX = e3.x + s3 * Math.sin(u3 + c3), a3.leftY = e3.y - s3 * Math.cos(u3 + c3), a3.rightX = e3.x - s3 * Math.sin(u3 - c3), a3.rightY = e3.y + s3 * Math.cos(u3 - c3)) : (a3.leftX = e3.x - s3 * Math.sin(u3 + c3), a3.leftY = e3.y + s3 * Math.cos(u3 + c3), a3.rightX = e3.x + s3 * Math.sin(u3 - c3), a3.rightY = e3.y - s3 * Math.cos(u3 - c3)) : i2 === "end" && (r3.x >= e3.x ? (a3.leftX = r3.x + s3 * Math.sin(u3 - c3), a3.leftY = r3.y - s3 * Math.cos(u3 - c3), a3.rightX = r3.x - s3 * Math.sin(u3 + c3), a3.rightY = r3.y + s3 * Math.cos(u3 + c3)) : (a3.leftX = r3.x - s3 * Math.sin(u3 - c3), a3.leftY = r3.y + s3 * Math.cos(u3 - c3), a3.rightX = r3.x + s3 * Math.sin(u3 + c3), a3.rightY = r3.y - s3 * Math.cos(u3 + c3))), a3;
      };
      function bu(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function gu(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? bu(Object(r3), true).forEach(function(e4) {
            mu(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : bu(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function mu(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function Ou(t3) {
        return function(t4) {
          if (Array.isArray(t4))
            return Eu(t4);
        }(t3) || function(t4) {
          if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
            return Array.from(t4);
        }(t3) || ju(t3) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function wu(t3) {
        return (wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function _u(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || ju(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function ju(t3, e3) {
        if (t3) {
          if (typeof t3 == "string")
            return Eu(t3, e3);
          var r3 = Object.prototype.toString.call(t3).slice(8, -1);
          return r3 === "Object" && t3.constructor && (r3 = t3.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(t3) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? Eu(t3, e3) : void 0;
        }
      }
      function Eu(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      var xu = function(t3) {
        var e3 = [], r3 = {};
        return t3.forEach(function(t4) {
          var e4 = "".concat(t4.x, "-").concat(t4.y);
          t4.id = e4, r3[e4] = t4;
        }), Object.keys(r3).forEach(function(t4) {
          e3.push(r3[t4]);
        }), e3;
      }, Su = function(t3, e3) {
        return t3.width === 0 && t3.height === 0 ? t3 : { centerX: t3.centerX, centerY: t3.centerY, minX: t3.minX - e3, minY: t3.minY - e3, maxX: t3.maxX + e3, maxY: t3.maxY + e3, height: t3.height + 2 * e3, width: t3.width + 2 * e3 };
      }, Pu = function(t3, e3) {
        return function(t4, e4) {
          var r3 = Math.abs(t4.x - e4.centerX), n3 = Math.abs(t4.y - e4.centerY);
          return r3 / e4.width > n3 / e4.height ? eo.HORIZONTAL : eo.VERTICAL;
        }(e3, t3) === eo.HORIZONTAL ? { x: e3.x > t3.centerX ? t3.maxX : t3.minX, y: e3.y } : { x: e3.x, y: e3.y > t3.centerY ? t3.maxY : t3.minY };
      }, ku = function(t3, e3) {
        var r3 = Math.min(t3.minX, e3.minX), n3 = Math.min(t3.minY, e3.minY), o3 = Math.max(t3.maxX, e3.maxX), i2 = Math.max(t3.maxY, e3.maxY);
        return { centerX: (r3 + o3) / 2, centerY: (n3 + i2) / 2, minX: r3, minY: n3, maxX: o3, maxY: i2, height: i2 - n3, width: o3 - r3 };
      }, Au = function() {
        var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e3 = arguments.length > 1 ? arguments[1] : void 0, r3 = [], n3 = [];
        t3.forEach(function(t4) {
          r3.push(t4.x), n3.push(t4.y);
        });
        var o3 = Math.min.apply(Math, r3), i2 = Math.max.apply(Math, r3), a3 = Math.min.apply(Math, n3), u3 = Math.max.apply(Math, n3), c3 = i2 - o3, s3 = u3 - a3;
        return e3 && (c3 += e3, s3 += e3), { centerX: (o3 + i2) / 2, centerY: (a3 + u3) / 2, maxX: i2, maxY: u3, minX: o3, minY: a3, x: (o3 + i2) / 2, y: (a3 + u3) / 2, height: s3, width: c3 };
      }, Du = function(t3) {
        var e3 = t3.minX, r3 = t3.minY, n3 = t3.maxX, o3 = t3.maxY;
        return [{ x: e3, y: r3 }, { x: n3, y: r3 }, { x: n3, y: o3 }, { x: e3, y: o3 }];
      }, Tu = function(t3, e3) {
        var r3 = t3.x, n3 = t3.y;
        return r3 < e3.minX || r3 > e3.maxX || n3 < e3.minY || n3 > e3.maxY;
      }, Mu = function(t3, e3) {
        return Math.abs(t3.x - e3.x) + Math.abs(t3.y - e3.y);
      }, Nu = function(t3, e3, r3, n3, o3) {
        return Mu(t3, e3) + Mu(t3, r3) + function(t4, e4) {
          var r4 = 0;
          return e4.forEach(function(e5) {
            e5 && (t4.x === e5.x && (r4 += -2), t4.y === e5.y && (r4 += -2));
          }), r4;
        }(t3, [e3, r3, n3, o3]);
      }, Cu = function(t3, e3, r3, n3) {
        var o3 = e3.x - t3.x, i2 = e3.y - t3.y, a3 = n3.x - r3.x, u3 = n3.y - r3.y, c3 = (-i2 * (t3.x - r3.x) + o3 * (t3.y - r3.y)) / (-a3 * i2 + o3 * u3), s3 = (a3 * (t3.y - r3.y) - u3 * (t3.x - r3.x)) / (-a3 * i2 + o3 * u3);
        return c3 >= 0 && c3 <= 1 && s3 >= 0 && s3 <= 1;
      }, Ru = function(t3, e3, r3) {
        if (r3.width === 0 && r3.height === 0)
          return false;
        var n3 = _u(Du(r3), 4), o3 = n3[0], i2 = n3[1], a3 = n3[2], u3 = n3[3];
        return Cu(t3, e3, o3, i2) || Cu(t3, e3, o3, u3) || Cu(t3, e3, i2, a3) || Cu(t3, e3, a3, u3);
      }, Iu = function(t3, e3, r3, n3, o3, i2, a3) {
        var u3 = [], c3 = [e3], s3 = {}, l3 = {}, f2 = {};
        l3[e3.id] = 0, f2[e3.id] = Nu(e3, r3, e3);
        var p2 = {};
        t3.forEach(function(t4) {
          p2[t4.id] = t4;
        });
        for (var d3 = function() {
          var d4, y4, h3, v3 = void 0, b3 = 1 / 0;
          if (c3.forEach(function(t4) {
            f2[t4.id] < b3 && (b3 = f2[t4.id], v3 = t4);
          }), v3 === r3) {
            var g3 = [];
            return function t4(e4, r4, n4, o4, i3) {
              i3 || (i3 = 0), e4.unshift(r4[o4]), n4[o4] && n4[o4] !== o4 && i3 <= 100 && t4(e4, r4, n4, n4[o4], i3 + 1);
            }(g3, p2, s3, r3.id), { v: g3 };
          }
          y4 = v3, (h3 = (d4 = c3).indexOf(y4)) > -1 && d4.splice(h3, 1), u3.push(v3), function(t4, e4, r4, n4) {
            var o4 = [];
            return t4.forEach(function(t5) {
              t5 !== e4 && (t5.x !== e4.x && t5.y !== e4.y || Ru(t5, e4, r4) || Ru(t5, e4, n4) || o4.push(t5));
            }), xu(o4);
          }(t3, v3, n3, o3).forEach(function(t4) {
            if (u3.indexOf(t4) === -1) {
              c3.indexOf(t4) === -1 && c3.push(t4);
              var n4 = f2[v3.id] + Mu(v3, t4);
              l3[t4.id] && n4 >= l3[t4.id] || (s3[t4.id] = v3.id, l3[t4.id] = n4, f2[t4.id] = l3[t4.id] + Nu(t4, r3, e3, i2, a3));
            }
          });
        }; c3.length; ) {
          var y3 = d3();
          if (wu(y3) === "object")
            return y3.v;
        }
        return [e3, r3];
      }, Lu = function(t3) {
        return ya(t3);
      }, zu = function(t3) {
        for (var e3 = t3, r3 = 1; r3 < e3.length - 1; ) {
          var n3 = e3[r3 - 1], o3 = e3[r3], i2 = e3[r3 + 1];
          n3.x === o3.x && o3.x === i2.x || n3.y === o3.y && o3.y === i2.y ? e3.splice(r3, 1) : r3++;
        }
        return e3;
      }, Bu = function(t3, e3, r3, n3, o3) {
        var i2, a3, u3 = Lu(r3), c3 = Lu(n3), s3 = Su(u3, o3), l3 = Su(c3, o3), f2 = Pu(s3, t3), p2 = Pu(l3, e3);
        if (i2 = s3, a3 = l3, 2 * Math.abs(i2.centerX - a3.centerX) < i2.width + a3.width && 2 * Math.abs(i2.centerY - a3.centerY) < i2.height + a3.height) {
          var d3 = Vu(t3, e3, f2, p2);
          return [t3, f2].concat(Ou(d3), [p2, e3]);
        }
        var y3 = Au([f2, p2]), h3 = ku(s3, y3), v3 = ku(l3, y3), b3 = [];
        b3 = (b3 = b3.concat(Du(h3))).concat(Du(v3));
        var g3 = { x: (t3.x + e3.x) / 2, y: (t3.y + e3.y) / 2 };
        [y3, h3, v3].forEach(function(t4) {
          b3 = b3.concat(function(t5, e4) {
            return function(t6, e5) {
              return e5 < t6.minX || e5 > t6.maxX ? [] : [{ x: e5, y: t6.minY }, { x: e5, y: t6.maxY }];
            }(t5, e4.x).concat(function(t6, e5) {
              return e5 < t6.minY || e5 > t6.maxY ? [] : [{ x: t6.minX, y: e5 }, { x: t6.maxX, y: e5 }];
            }(t5, e4.y));
          }(t4, g3).filter(function(t5) {
            return Tu(t5, s3) && Tu(t5, l3);
          }));
        }), [{ x: f2.x, y: p2.y }, { x: p2.x, y: f2.y }].forEach(function(t4) {
          Tu(t4, s3) && Tu(t4, l3) && b3.push(t4);
        }), b3.unshift(f2), b3.push(p2), b3 = xu(b3);
        var m3 = Iu(b3, f2, p2, u3, c3, t3, e3);
        return m3.unshift(t3), m3.push(e3), m3.length > 2 && (m3 = zu(m3)), xu(m3);
      }, Xu = function(t3) {
        var e3;
        if (t3.length === 1)
          e3 = [t3[0], t3[0]];
        else if (t3.length >= 2) {
          for (var r3 = t3[0], n3 = t3[1], o3 = fa(r3.x, r3.y, n3.x, n3.y), i2 = 1; i2 < t3.length - 1; i2++) {
            var a3 = t3[i2], u3 = t3[i2 + 1], c3 = fa(a3.x, a3.y, u3.x, u3.y);
            c3 > o3 && (o3 = c3, r3 = a3, n3 = u3);
          }
          e3 = [r3, n3];
        }
        return e3;
      }, Hu = function(t3, e3, r3) {
        var n3 = pa(t3, r3), o3 = pa(e3, r3);
        return n3 && o3;
      }, Uu = function(t3, e3, r3) {
        var n3 = pa(t3, r3), o3 = pa(e3, r3);
        return !(n3 && o3) && (n3 || o3);
      }, Gu = function(t3, e3, r3) {
        for (var n3, o3, i2 = ya(r3), a3 = Du(i2), u3 = 0; u3 < a3.length; u3++) {
          Cu(t3, e3, a3[u3], a3[(u3 + 1) % a3.length]) && (o3 = [a3[u3], a3[(u3 + 1) % a3.length]]);
        }
        return o3 && (n3 = function(t4, e4, r4, n4) {
          var o4 = (e4.y - t4.y) * (n4.x - r4.x) - (t4.x - e4.x) * (r4.y - n4.y);
          if (o4 === 0)
            return false;
          var i3 = ((e4.x - t4.x) * (n4.x - r4.x) * (r4.y - t4.y) + (e4.y - t4.y) * (n4.x - r4.x) * t4.x - (n4.y - r4.y) * (e4.x - t4.x) * r4.x) / o4, a4 = -((e4.y - t4.y) * (n4.y - r4.y) * (r4.x - t4.x) + (e4.x - t4.x) * (n4.y - r4.y) * t4.y - (n4.x - r4.x) * (e4.y - t4.y) * r4.y) / o4;
          return (i3 - t4.x) * (i3 - e4.x) <= 0 && (a4 - t4.y) * (a4 - e4.y) <= 0 && (i3 - r4.x) * (i3 - n4.x) <= 0 && (a4 - r4.y) * (a4 - n4.y) <= 0 && { x: i3, y: a4 };
        }(t3, e3, o3[0], o3[1])), n3;
      }, Fu = function(t3, e3) {
        var r3;
        return t3.x === e3.x ? r3 = eo.VERTICAL : t3.y === e3.y && (r3 = eo.HORIZONTAL), r3;
      }, Yu = function(t3) {
        var e3 = t3.split(" "), r3 = [];
        return e3 && e3.forEach(function(t4) {
          var e4 = _u(t4.split(","), 2), n3 = e4[0], o3 = e4[1];
          r3.push({ x: Number(n3), y: Number(o3) });
        }), r3;
      }, Vu = function(t3, e3, r3, n3) {
        var o3 = [];
        if (Fu(t3, r3) === Fu(e3, n3))
          t3.y === r3.y ? (o3.push({ x: r3.x, y: (r3.y + n3.y) / 2 }), o3.push({ x: n3.x, y: (r3.y + n3.y) / 2 })) : (o3.push({ x: (r3.x + n3.x) / 2, y: r3.y }), o3.push({ x: (r3.x + n3.x) / 2, y: n3.y }));
        else {
          var i2 = { x: r3.x, y: n3.y }, a3 = Bi(i2, t3, r3), u3 = Bi(i2, e3, n3);
          if (a3 || u3)
            i2 = { x: n3.x, y: r3.y };
          else {
            var c3 = Wu(i2, t3, r3), s3 = Wu(i2, e3, n3);
            c3 && s3 && (i2 = { x: n3.x, y: r3.y });
          }
          o3.push(i2);
        }
        return o3;
      }, Wu = function(t3, e3, r3) {
        return t3.x === e3.x && t3.x === r3.x || t3.y === e3.y && t3.y === r3.y;
      }, Ku = function(t3) {
        if (!t3)
          return 0;
        for (var e3 = 0, r3 = 0; r3 < t3.length; r3++) {
          var n3 = t3.charCodeAt(r3);
          t3.match(/[A-Z]/) ? e3 += 1.5 : e3 += n3 >= 1 && n3 <= 126 || n3 >= 65376 && n3 <= 65439 ? 1 : 2;
        }
        return e3;
      }, $u = function(t3) {
        var e3 = t3.start, r3 = t3.end, n3 = t3.sourceNode, o3 = t3.targetNode, i2 = t3.offset, a3 = ya(n3), u3 = ya(o3), c3 = Su(a3, i2), s3 = Su(u3, i2);
        return { sNext: Pu(c3, e3), ePre: Pu(s3, r3) };
      }, Zu = function(t3) {
        var e3 = t3.replace(/M/g, "").replace(/C/g, ",").split(",");
        return [qu(e3[0]), qu(e3[1]), qu(e3[2]), qu(e3[3])];
      }, qu = function(t3) {
        var e3 = _u(t3.replace(/(^\s*)/g, "").split(" "), 2);
        return { x: +e3[0], y: +e3[1] };
      }, Ju = function(t3, e3) {
        for (var r3, n3 = t3.x, o3 = t3.y, i2 = Yu(e3), a3 = Number.MAX_SAFE_INTEGER, u3 = [], c3 = 0; c3 < i2.length; c3++)
          u3.push({ start: i2[c3], end: i2[(c3 + 1) % i2.length] });
        if (u3.forEach(function(t4) {
          var e4 = t4.start, i3 = t4.end;
          if (e4.x === i3.x) {
            var u4 = { x: e4.x, y: o3 };
            if (Bi(u4, e4, i3)) {
              var c4 = Math.abs(e4.x - n3);
              c4 < a3 && (a3 = c4, r3 = u4);
            }
          } else if (e4.y === i3.y) {
            var s4 = { x: n3, y: e4.y };
            if (Bi(s4, e4, i3)) {
              var l4 = Math.abs(e4.y - o3);
              l4 < a3 && (a3 = l4, r3 = s4);
            }
          }
        }), !r3) {
          var s3 = u3[0], l3 = s3.start, f2 = s3.end;
          r3 = { x: l3.x + (f2.x - l3.x) / 2, y: l3.y + (f2.y - l3.y) / 2 };
        }
        return r3;
      }, Qu = function(t3) {
        return Yn(t3, ["id", "type", "sourceNodeId", "sourceAnchorId", "targetNodeId", "targetAnchorId", "pointsList", "startPoint", "endPoint", "properties"]);
      }, tc = function(t3, e3) {
        return Math.sqrt(Math.pow(t3.x - e3.x, 2) + Math.pow(t3.y - e3.y, 2));
      };
      var ec = function() {
      };
      function rc(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function nc(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var oc = window.document;
      function ic(t3) {
        var e3 = t3.onDragStart, r3 = e3 === void 0 ? ec : e3, n3 = t3.onDraging, o3 = n3 === void 0 ? ec : n3, i2 = t3.onDragEnd, a3 = i2 === void 0 ? ec : i2, u3 = t3.step, c3 = u3 === void 0 ? 1 : u3, s3 = t3.isStopPropagation, l3 = s3 === void 0 || s3, f2 = false, p2 = false, d3 = 0, y3 = 0, h3 = 0, v3 = 0;
        function b3(t4) {
          if (l3 && t4.stopPropagation(), p2 && (f2 = true, h3 += t4.clientX - d3, v3 += t4.clientY - y3, d3 = t4.clientX, y3 = t4.clientY, Math.abs(h3) > c3 || Math.abs(v3) > c3)) {
            var e4 = h3 % c3, r4 = v3 % c3, n4 = h3 - e4, i3 = v3 - r4;
            h3 = e4, v3 = r4, o3({ deltaX: n4, deltaY: i3, event: t4 });
          }
        }
        function g3(t4) {
          if (l3 && t4.stopPropagation(), p2 = false, oc.removeEventListener("mousemove", b3, false), oc.removeEventListener("mouseup", g3, false), f2)
            return f2 = false, a3({ event: t4 });
        }
        return function(t4) {
          if (t4.button === 0)
            return l3 && t4.stopPropagation(), p2 = true, d3 = t4.clientX, y3 = t4.clientY, oc.addEventListener("mousemove", b3, false), oc.addEventListener("mouseup", g3, false), r3({ event: t4 });
        };
      }
      var ac, uc, cc, sc, lc, fc, pc, dc, yc, hc, vc, bc, gc, mc = function() {
        function t3(e4) {
          var r4 = this, n3 = e4.onDragStart, o3 = n3 === void 0 ? ec : n3, i2 = e4.onDraging, a3 = i2 === void 0 ? ec : i2, u3 = e4.onDragEnd, c3 = u3 === void 0 ? ec : u3, s3 = e4.eventType, l3 = s3 === void 0 ? "" : s3, f2 = e4.eventCenter, p2 = f2 === void 0 ? null : f2, d3 = e4.step, y3 = d3 === void 0 ? 1 : d3, h3 = e4.isStopPropagation, v3 = h3 === void 0 || h3, b3 = e4.model, g3 = b3 === void 0 ? null : b3;
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), nc(this, "onDragStart", void 0), nc(this, "onDraging", void 0), nc(this, "onDragEnd", void 0), nc(this, "step", void 0), nc(this, "isStopPropagation", void 0), nc(this, "isDraging", false), nc(this, "isStartDraging", false), nc(this, "startX", 0), nc(this, "startY", 0), nc(this, "sumDeltaX", 0), nc(this, "sumDeltaY", 0), nc(this, "eventType", void 0), nc(this, "eventCenter", void 0), nc(this, "model", void 0), nc(this, "startTime", void 0), nc(this, "isGrag", void 0), nc(this, "handleMouseDown", function(t4) {
            var e5, n4, o4;
            if (t4.button === 0) {
              r4.isStopPropagation && t4.stopPropagation(), r4.isStartDraging = true, r4.startX = t4.clientX, r4.startY = t4.clientY, oc.addEventListener("mousemove", r4.handleMouseMove, false), oc.addEventListener("mouseup", r4.handleMouseUp, false), r4.onDragStart({ event: t4 });
              var i3 = (e5 = r4.model) === null || e5 === void 0 ? void 0 : e5.getData();
              (n4 = r4.eventCenter) === null || n4 === void 0 || n4.emit(to["".concat(r4.eventType, "_MOUSEDOWN")], { e: t4, data: i3 }), (o4 = r4.eventCenter) === null || o4 === void 0 || o4.emit(to["".concat(r4.eventType, "_DRAGSTART")], { e: t4, data: i3 }), r4.startTime = new Date().getTime();
            }
          }), nc(this, "handleMouseMove", function(t4) {
            if (r4.isStopPropagation && t4.stopPropagation(), r4.isStartDraging && (r4.isDraging = true, r4.sumDeltaX += t4.clientX - r4.startX, r4.sumDeltaY += t4.clientY - r4.startY, r4.startX = t4.clientX, r4.startY = t4.clientY, Math.abs(r4.sumDeltaX) > r4.step || Math.abs(r4.sumDeltaY) > r4.step)) {
              var e5, n4, o4, i3 = r4.sumDeltaX % r4.step, a4 = r4.sumDeltaY % r4.step, u4 = r4.sumDeltaX - i3, c4 = r4.sumDeltaY - a4;
              r4.sumDeltaX = i3, r4.sumDeltaY = a4, r4.onDraging({ deltaX: u4, deltaY: c4, event: t4 });
              var s4 = (e5 = r4.model) === null || e5 === void 0 ? void 0 : e5.getData();
              (n4 = r4.eventCenter) === null || n4 === void 0 || n4.emit(to["".concat(r4.eventType, "_MOUSEMOVE")], { e: t4, data: s4 }), (o4 = r4.eventCenter) === null || o4 === void 0 || o4.emit(to["".concat(r4.eventType, "_DRAG")], { e: t4, data: s4 });
            }
          }), nc(this, "handleMouseUp", function(t4) {
            var e5, n4, o4;
            if (r4.isStartDraging = false, r4.isStopPropagation && t4.stopPropagation(), oc.removeEventListener("mousemove", r4.handleMouseMove, false), oc.removeEventListener("mouseup", r4.handleMouseUp, false), r4.isDraging) {
              r4.isDraging = false, r4.onDragEnd({ event: t4 });
              var i3 = (e5 = r4.model) === null || e5 === void 0 ? void 0 : e5.getData();
              (n4 = r4.eventCenter) === null || n4 === void 0 || n4.emit(to["".concat(r4.eventType, "_MOUSEUP")], { e: t4, data: i3 }), (o4 = r4.eventCenter) === null || o4 === void 0 || o4.emit(to["".concat(r4.eventType, "_DROP")], { e: t4, data: i3 });
            }
          }), this.onDragStart = o3, this.onDraging = a3, this.onDragEnd = c3, this.step = y3, this.isStopPropagation = v3, this.eventType = l3, this.eventCenter = p2, this.model = g3;
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "setStep", value: function(t4) {
          this.step = t4;
        } }]) && rc(e3.prototype, r3), t3;
      }();
      function Oc(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function wc(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Oc(Object(r3), true).forEach(function(e4) {
            Ac(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Oc(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function _c(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || Ec(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function jc(t3) {
        return function(t4) {
          if (Array.isArray(t4))
            return xc(t4);
        }(t3) || function(t4) {
          if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
            return Array.from(t4);
        }(t3) || Ec(t3) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Ec(t3, e3) {
        if (t3) {
          if (typeof t3 == "string")
            return xc(t3, e3);
          var r3 = Object.prototype.toString.call(t3).slice(8, -1);
          return r3 === "Object" && t3.constructor && (r3 = t3.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(t3) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? xc(t3, e3) : void 0;
        }
      }
      function xc(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Sc(t3) {
        return (Sc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Pc(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function kc(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ac(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function Dc(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var Tc, Mc = (uc = Dc((ac = function() {
        function t3(e4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), Ac(this, "rootEl", void 0), Pc(this, "width", uc, this), Pc(this, "height", cc, this), Ac(this, "theme", void 0), Ac(this, "eventCenter", void 0), Ac(this, "modelMap", /* @__PURE__ */ new Map()), Ac(this, "topElement", void 0), Ac(this, "idGenerator", void 0), Ac(this, "nodeMoveRules", []), Pc(this, "edgeType", sc, this), Pc(this, "nodes", lc, this), Pc(this, "edges", fc, this), Pc(this, "overlapMode", pc, this), Pc(this, "background", dc, this), Pc(this, "transformModel", yc, this), Pc(this, "editConfigModel", hc, this), Pc(this, "gridSize", vc, this), Pc(this, "partial", bc, this), Pc(this, "fakerNode", gc, this);
          var r4 = e4.container, n3 = e4.background, o3 = n3 === void 0 ? {} : n3, i2 = e4.grid, a3 = e4.width, u3 = e4.height, c3 = e4.idGenerator;
          this.background = o3, Sc(i2) === "object" && (this.gridSize = i2.size), this.rootEl = r4, this.editConfigModel = new oo(e4), this.eventCenter = new wi(), this.transformModel = new wo(this.eventCenter), this.theme = mi(e4.style), this.edgeType = e4.edgeType || "polyline", this.width = a3 != null ? a3 : r4.getBoundingClientRect().width, this.height = u3 != null ? u3 : r4.getBoundingClientRect().height, this.partial = e4.partial, this.overlapMode = e4.overlapMode || 0, this.idGenerator = c3;
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "nodesMap", get: function() {
          return this.nodes.reduce(function(t4, e4, r4) {
            return t4[e4.id] = { index: r4, model: e4 }, t4;
          }, {});
        } }, { key: "edgesMap", get: function() {
          return this.edges.reduce(function(t4, e4, r4) {
            return t4[e4.id] = { index: r4, model: e4 }, t4;
          }, {});
        } }, { key: "modelsMap", get: function() {
          return [].concat(jc(this.nodes), jc(this.edges)).reduce(function(t4, e4) {
            return t4[e4.id] = e4, t4;
          }, {});
        } }, { key: "sortElements", get: function() {
          var t4 = [];
          this.nodes.forEach(function(e5) {
            return t4.push(e5);
          }), this.edges.forEach(function(e5) {
            return t4.push(e5);
          }), t4 = t4.sort(function(t5, e5) {
            return t5.zIndex - e5.zIndex;
          });
          for (var e4 = [], r4 = -1, n3 = [-200, -200], o3 = [this.width + 200, this.height + 200], i2 = 0; i2 < t4.length; i2++) {
            var a3 = t4[i2];
            !a3.visible || this.partial && !this.isElementInArea(a3, n3, o3, false) || (a3.zIndex === 9999 && (r4 = e4.length), e4.push(a3));
          }
          if (r4 !== -1) {
            var u3 = e4[e4.length - 1];
            e4[e4.length - 1] = e4[r4], e4[r4] = u3;
          }
          return e4;
        } }, { key: "textEditElement", get: function() {
          var t4 = this.nodes.find(function(t5) {
            return t5.state === Zn.TEXT_EDIT;
          }), e4 = this.edges.find(function(t5) {
            return t5.state === Zn.TEXT_EDIT;
          });
          return t4 || e4;
        } }, { key: "selectElements", get: function() {
          var t4 = /* @__PURE__ */ new Map();
          return this.nodes.forEach(function(e4) {
            e4.isSelected && t4.set(e4.id, e4);
          }), this.edges.forEach(function(e4) {
            e4.isSelected && t4.set(e4.id, e4);
          }), t4;
        } }, { key: "getAreaElement", value: function(t4, e4) {
          var r4 = [], n3 = [];
          this.nodes.forEach(function(t5) {
            return n3.push(t5);
          }), this.edges.forEach(function(t5) {
            return n3.push(t5);
          });
          for (var o3 = 0; o3 < n3.length; o3++) {
            var i2 = n3[o3];
            this.isElementInArea(i2, t4, e4) && r4.push(i2);
          }
          return r4;
        } }, { key: "getModel", value: function(t4) {
          return this.modelMap.get(t4);
        } }, { key: "getNodeModelById", value: function(t4) {
          var e4;
          return this.fakerNode && t4 === this.fakerNode.id ? this.fakerNode : (e4 = this.nodesMap[t4]) === null || e4 === void 0 ? void 0 : e4.model;
        } }, { key: "getPointByClient", value: function(t4) {
          var e4 = t4.x, r4 = t4.y, n3 = this.rootEl.getBoundingClientRect(), o3 = { x: e4 - n3.left, y: r4 - n3.top }, i2 = _c(this.transformModel.HtmlPointToCanvasPoint([o3.x, o3.y]), 2);
          return { domOverlayPosition: o3, canvasOverlayPosition: { x: i2[0], y: i2[1] } };
        } }, { key: "isElementInArea", value: function(t4, e4, r4) {
          var n3 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
          if (t4.BaseType === Qn.NODE) {
            for (var o3 = ya(t4 = t4), i2 = o3.minX, a3 = o3.minY, u3 = o3.maxX, c3 = o3.maxY, s3 = [{ x: i2, y: a3 }, { x: u3, y: a3 }, { x: u3, y: c3 }, { x: i2, y: c3 }], l3 = true, f2 = 0; f2 < s3.length; f2++) {
              var p2 = s3[f2], d3 = p2.x, y3 = p2.y, h3 = this.transformModel.CanvasPointToHtmlPoint([d3, y3]), v3 = _c(h3, 2);
              if (d3 = v3[0], y3 = v3[1], !Pi([d3, y3], e4, r4)) {
                l3 = false;
                break;
              }
            }
            return l3;
          }
          if (t4.BaseType === Qn.EDGE) {
            var b3 = t4 = t4, g3 = b3.startPoint, m3 = b3.endPoint, O3 = this.transformModel.CanvasPointToHtmlPoint([g3.x, g3.y]), w3 = this.transformModel.CanvasPointToHtmlPoint([m3.x, m3.y]), _3 = Pi(O3, e4, r4), j3 = Pi(w3, e4, r4);
            return n3 ? _3 && j3 : _3 || j3;
          }
          return false;
        } }, { key: "graphDataToModel", value: function(t4) {
          var e4 = this;
          this.nodes = nn(t4.nodes, function(t5) {
            var r4 = e4.getModel(t5.type);
            if (!r4)
              throw new Error("\u627E\u4E0D\u5230".concat(t5.type, "\u5BF9\u5E94\u7684\u8282\u70B9\u3002"));
            var n3 = t5.x, o3 = t5.y;
            return n3 && o3 && (t5.x = _i(n3, e4.gridSize), t5.y = _i(o3, e4.gridSize), Sc(t5.text) === "object" && (t5.text.x -= ji(n3, e4.gridSize), t5.text.y -= ji(o3, e4.gridSize))), new r4(t5, e4);
          }), this.edges = nn(t4.edges, function(t5) {
            var r4 = e4.getModel(t5.type);
            if (!r4)
              throw new Error("\u627E\u4E0D\u5230".concat(t5.type, "\u5BF9\u5E94\u7684\u8FB9\u3002"));
            return new r4(t5, e4);
          });
        } }, { key: "modelToGraphData", value: function() {
          var t4 = [];
          this.edges.forEach(function(e5) {
            var r4 = e5.getData();
            r4 && t4.push(r4);
          });
          var e4 = [];
          return this.nodes.forEach(function(t5) {
            var r4 = t5.getData();
            r4 && e4.push(r4);
          }), { nodes: e4, edges: t4 };
        } }, { key: "modelToHistoryData", value: function() {
          for (var t4 = false, e4 = [], r4 = 0; r4 < this.nodes.length; r4++) {
            var n3 = this.nodes[r4];
            if (n3.isDragging) {
              t4 = true;
              break;
            }
            e4.push(n3.getData());
          }
          if (t4)
            return false;
          for (var o3 = false, i2 = [], a3 = 0; a3 < this.edges.length; a3++) {
            var u3 = this.edges[a3];
            if (u3.isDragging) {
              o3 = true;
              break;
            }
            i2.push(u3.getData());
          }
          return !o3 && { nodes: e4, edges: i2 };
        } }, { key: "getEdgeModelById", value: function(t4) {
          var e4;
          return (e4 = this.edgesMap[t4]) === null || e4 === void 0 ? void 0 : e4.model;
        } }, { key: "getElement", value: function(t4) {
          return this.modelsMap[t4];
        } }, { key: "getNodeEdges", value: function(t4) {
          for (var e4 = [], r4 = 0; r4 < this.edges.length; r4++) {
            var n3 = this.edges[r4], o3 = this.edges[r4].sourceNodeId === t4, i2 = this.edges[r4].targetNodeId === t4;
            (o3 || i2) && e4.push(n3);
          }
          return e4;
        } }, { key: "getSelectElements", value: function() {
          var t4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], e4 = this.selectElements, r4 = { nodes: [], edges: [] };
          return e4.forEach(function(n3) {
            if (n3.BaseType === Qn.NODE && r4.nodes.push(n3.getData()), n3.BaseType === Qn.EDGE) {
              var o3 = n3.getData(), i2 = e4.get(o3.sourceNodeId) && e4.get(o3.targetNodeId);
              (t4 || i2) && r4.edges.push(o3);
            }
          }), r4;
        } }, { key: "updateAttributes", value: function(t4, e4) {
          this.getElement(t4).updateAttributes(e4);
        } }, { key: "changeNodeId", value: function(t4, e4) {
          return e4 || (e4 = Li()), this.nodesMap[e4] ? (console.warn("\u5F53\u524D\u6D41\u7A0B\u56FE\u5DF2\u5B58\u5728\u8282\u70B9".concat(e4, ", \u4FEE\u6539\u5931\u8D25")), "") : this.nodesMap[t4] ? (this.edges.forEach(function(r4) {
            r4.sourceNodeId === t4 && (r4.sourceNodeId = e4), r4.targetNodeId === t4 && (r4.targetNodeId = e4);
          }), this.nodesMap[t4].model.id = e4, e4) : (console.warn("\u5F53\u524D\u6D41\u7A0B\u56FE\u627E\u4E0D\u5230\u8282\u70B9".concat(e4, ", \u4FEE\u6539\u5931\u8D25")), "");
        } }, { key: "changeEdgeId", value: function(t4, e4) {
          return e4 || (e4 = Li()), this.edgesMap[e4] ? (console.warn("\u5F53\u524D\u6D41\u7A0B\u56FE\u5DF2\u5B58\u5728\u8FB9: ".concat(e4, ", \u4FEE\u6539\u5931\u8D25")), "") : this.edgesMap[t4] ? (this.edges.forEach(function(r4) {
            r4.id === t4 && (r4.id = e4);
          }), e4) : (console.warn("\u5F53\u524D\u6D41\u7A0B\u56FE\u627E\u4E0D\u5230\u8FB9: ".concat(e4, ", \u4FEE\u6539\u5931\u8D25")), "");
        } }, { key: "setFakerNode", value: function(t4) {
          this.fakerNode = t4;
        } }, { key: "removeFakerNode", value: function() {
          this.fakerNode = null;
        } }, { key: "setModel", value: function(t4, e4) {
          return this.modelMap.set(t4, e4);
        } }, { key: "toFront", value: function(t4) {
          var e4, r4, n3, o3 = ((e4 = this.nodesMap[t4]) === null || e4 === void 0 ? void 0 : e4.model) || ((r4 = this.edgesMap[t4]) === null || r4 === void 0 ? void 0 : r4.model);
          o3 && (this.overlapMode === io.DEFAULT && ((n3 = this.topElement) === null || n3 === void 0 || n3.setZIndex(), o3.setZIndex(9999), this.topElement = o3), this.overlapMode === io.INCREASE && this.setElementZIndex(t4, "top"));
        } }, { key: "setElementZIndex", value: function(t4, e4) {
          var r4, n3, o3, i2 = ((r4 = this.nodesMap[t4]) === null || r4 === void 0 ? void 0 : r4.model) || ((n3 = this.edgesMap[t4]) === null || n3 === void 0 ? void 0 : n3.model);
          i2 && (typeof e4 == "number" && (o3 = e4), e4 === "top" && (o3 = Pa()), e4 === "bottom" && (o3 = --Sa), i2.setZIndex(o3));
        } }, { key: "deleteNode", value: function(t4) {
          var e4 = this.nodesMap[t4].model.getData();
          this.deleteEdgeBySource(t4), this.deleteEdgeByTarget(t4), this.nodes.splice(this.nodesMap[t4].index, 1), this.eventCenter.emit(to.NODE_DELETE, { data: e4 });
        } }, { key: "addNode", value: function(t4) {
          var e4 = Ea(t4);
          e4.id && this.nodesMap[t4.id] && delete e4.id;
          var r4 = this.getModel(e4.type);
          if (!r4)
            throw new Error("\u627E\u4E0D\u5230".concat(e4.type, "\u5BF9\u5E94\u7684\u8282\u70B9\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5DF2\u6CE8\u518C\u6B64\u7C7B\u578B\u8282\u70B9\u3002"));
          var n3 = new r4(e4, this);
          this.nodes.push(n3);
          var o3 = n3.getData();
          return this.eventCenter.emit(to.NODE_ADD, { data: o3 }), n3;
        } }, { key: "cloneNode", value: function(t4) {
          var e4 = this.getNodeModelById(t4), r4 = e4.getData();
          r4.x += 30, r4.y += 30, delete r4.id, r4.text && (r4.text.x += 30, r4.text.y += 30);
          var n3 = this.addNode(r4);
          return n3.setSelected(true), e4.setSelected(false), n3.getData();
        } }, { key: "moveNode", value: function(t4, e4, r4) {
          var n3 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], o3 = this.nodesMap[t4];
          if (o3) {
            var i2 = o3.model, a3 = i2.move(e4, r4, n3);
            a3 && this.moveEdge(t4, e4, r4);
          } else
            console.warn("\u4E0D\u5B58\u5728id\u4E3A".concat(t4, "\u7684\u8282\u70B9"));
        } }, { key: "moveNode2Coordinate", value: function(t4, e4, r4) {
          var n3 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], o3 = this.nodesMap[t4];
          if (o3) {
            var i2 = o3.model, a3 = i2.x, u3 = i2.y, c3 = e4 - a3, s3 = r4 - u3;
            this.moveNode(t4, c3, s3, n3);
          } else
            console.warn("\u4E0D\u5B58\u5728id\u4E3A".concat(t4, "\u7684\u8282\u70B9"));
        } }, { key: "editText", value: function(t4) {
          this.setElementStateById(t4, Zn.TEXT_EDIT);
        } }, { key: "addEdge", value: function(t4) {
          var e4 = Ea(t4), r4 = e4.type;
          r4 || (r4 = this.edgeType), e4.id && this.edgesMap[e4.id] && delete e4.id;
          var n3 = this.getModel(r4);
          if (!n3)
            throw new Error("\u627E\u4E0D\u5230".concat(r4, "\u5BF9\u5E94\u7684\u8FB9\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5DF2\u6CE8\u518C\u6B64\u7C7B\u578B\u8FB9\u3002"));
          var o3 = new n3(wc(wc({}, e4), {}, { type: r4 }), this), i2 = o3.getData();
          return this.edges.push(o3), this.eventCenter.emit(to.EDGE_ADD, { data: i2 }), o3;
        } }, { key: "moveEdge", value: function(t4, e4, r4) {
          for (var n3 = 0; n3 < this.edges.length; n3++) {
            var o3, i2 = this.edges[n3], a3 = i2.textPosition, u3 = a3.x, c3 = a3.y, s3 = this.edges[n3].sourceNodeId === t4, l3 = this.edges[n3].targetNodeId === t4;
            if (s3 && i2.updateStartPoint({ x: i2.startPoint.x + e4, y: i2.startPoint.y + r4 }), l3 && i2.updateEndPoint({ x: i2.endPoint.x + e4, y: i2.endPoint.y + r4 }), s3 || l3)
              if (i2.customTextPosition === true)
                i2.resetTextPosition();
              else if (i2.modelType === Jn.POLYLINE_EDGE && (o3 = i2.text) !== null && o3 !== void 0 && o3.value) {
                var f2 = i2.text, p2 = Ju(f2, i2.points);
                i2.moveText(p2.x - f2.x, p2.y - f2.y);
              } else {
                var d3 = i2.textPosition, y3 = d3.x, h3 = d3.y;
                i2.moveText(y3 - u3, h3 - c3);
              }
          }
        } }, { key: "deleteEdgeBySourceAndTarget", value: function(t4, e4) {
          for (var r4 = 0; r4 < this.edges.length; r4++)
            if (this.edges[r4].sourceNodeId === t4 && this.edges[r4].targetNodeId === e4) {
              var n3 = this.edges[r4].getData();
              this.edges.splice(r4, 1), r4--, this.eventCenter.emit(to.EDGE_DELETE, { data: n3 });
            }
        } }, { key: "deleteEdgeById", value: function(t4) {
          if (this.edgesMap[t4]) {
            var e4 = this.edgesMap[t4].index, r4 = this.edgesMap[t4].model.getData();
            this.edges.splice(e4, 1), this.eventCenter.emit(to.EDGE_DELETE, { data: r4 });
          }
        } }, { key: "deleteEdgeBySource", value: function(t4) {
          for (var e4 = 0; e4 < this.edges.length; e4++)
            if (this.edges[e4].sourceNodeId === t4) {
              var r4 = this.edges[e4].getData();
              this.edges.splice(e4, 1), e4--, this.eventCenter.emit(to.EDGE_DELETE, { data: r4 });
            }
        } }, { key: "deleteEdgeByTarget", value: function(t4) {
          for (var e4 = 0; e4 < this.edges.length; e4++)
            if (this.edges[e4].targetNodeId === t4) {
              var r4 = this.edges[e4].getData();
              this.edges.splice(e4, 1), e4--, this.eventCenter.emit(to.EDGE_DELETE, { data: r4 });
            }
        } }, { key: "setElementStateById", value: function(t4, e4, r4) {
          this.nodes.forEach(function(n3) {
            n3.id === t4 ? n3.setElementState(e4, r4) : n3.setElementState(Zn.DEFAULT);
          }), this.edges.forEach(function(n3) {
            n3.id === t4 ? n3.setElementState(e4, r4) : n3.setElementState(Zn.DEFAULT);
          });
        } }, { key: "updateText", value: function(t4, e4) {
          this.nodes.forEach(function(r4) {
            r4.id === t4 && r4.updateText(e4);
          }), this.edges.forEach(function(r4) {
            r4.id === t4 && r4.updateText(e4);
          });
        } }, { key: "selectNodeById", value: function(t4) {
          var e4, r4 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          r4 || this.clearSelectElements();
          var n3 = (e4 = this.nodesMap[t4]) === null || e4 === void 0 ? void 0 : e4.model;
          n3 == null || n3.setSelected(true);
        } }, { key: "selectEdgeById", value: function(t4) {
          var e4, r4 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          r4 || this.clearSelectElements();
          var n3 = (e4 = this.edgesMap[t4]) === null || e4 === void 0 ? void 0 : e4.model;
          n3 == null || n3.setSelected(true);
        } }, { key: "selectElementById", value: function(t4) {
          var e4 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          e4 || this.clearSelectElements();
          var r4 = this.getElement(t4);
          r4 == null || r4.setSelected(true);
        } }, { key: "clearSelectElements", value: function() {
          var t4;
          this.selectElements.forEach(function(t5) {
            t5 == null || t5.setSelected(false);
          }), this.selectElements.clear(), this.overlapMode === io.DEFAULT && ((t4 = this.topElement) === null || t4 === void 0 || t4.setZIndex());
        } }, { key: "moveNodes", value: function(t4, e4, r4) {
          var n3 = this, o3 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
          t4.forEach(function(t5) {
            return n3.moveNode(t5, e4, r4, o3);
          });
        } }, { key: "addNodeMoveRules", value: function(t4) {
          this.nodeMoveRules.includes(t4) || this.nodeMoveRules.push(t4);
        } }, { key: "setDefaultEdgeType", value: function(t4) {
          this.edgeType = t4;
        } }, { key: "changeNodeType", value: function(t4, e4) {
          var r4 = this.getNodeModelById(t4);
          if (r4) {
            var n3 = r4.getData();
            n3.type = e4;
            var o3 = this.getModel(e4);
            if (!o3)
              throw new Error("\u627E\u4E0D\u5230".concat(e4, "\u5BF9\u5E94\u7684\u8282\u70B9\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5DF2\u6CE8\u518C\u6B64\u7C7B\u578B\u8282\u70B9\u3002"));
            var i2 = new o3(n3, this);
            this.nodes.splice(this.nodesMap[t4].index, 1, i2), this.getNodeEdges(t4).forEach(function(e5) {
              if (e5.sourceNodeId === t4) {
                var r5 = Oa(i2, e5.startPoint, i2.width, i2.height);
                e5.updateStartPoint(r5);
              }
              if (e5.targetNodeId === t4) {
                var n4 = Oa(i2, e5.endPoint, i2.width, i2.height);
                e5.updateEndPoint(n4);
              }
            });
          } else
            console.warn("\u627E\u4E0D\u5230id\u4E3A".concat(t4, "\u7684\u8282\u70B9"));
        } }, { key: "changeEdgeType", value: function(t4, e4) {
          var r4 = this.getEdgeModelById(t4);
          if (r4) {
            if (r4.type !== e4) {
              var n3 = r4.getData();
              n3.type = e4;
              var o3 = this.getModel(e4);
              if (!o3)
                throw new Error("\u627E\u4E0D\u5230".concat(e4, "\u5BF9\u5E94\u7684\u8282\u70B9\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u5DF2\u6CE8\u518C\u6B64\u7C7B\u578B\u8282\u70B9\u3002"));
              delete n3.pointsList;
              var i2 = new o3(n3, this);
              this.edges.splice(this.edgesMap[t4].index, 1, i2);
            }
          } else
            console.warn("\u627E\u4E0D\u5230id\u4E3A".concat(t4, "\u7684\u8FB9"));
        } }, { key: "getNodeIncomingEdge", value: function(t4) {
          var e4 = [];
          return this.edges.forEach(function(r4) {
            r4.targetNodeId === t4 && e4.push(r4);
          }), e4;
        } }, { key: "getNodeOutgoingEdge", value: function(t4) {
          var e4 = [];
          return this.edges.forEach(function(r4) {
            r4.sourceNodeId === t4 && e4.push(r4);
          }), e4;
        } }, { key: "getNodeIncomingNode", value: function(t4) {
          var e4 = this, r4 = [];
          return this.edges.forEach(function(n3) {
            n3.targetNodeId === t4 && r4.push(e4.nodesMap[n3.sourceNodeId].model);
          }), r4;
        } }, { key: "getNodeOutgoingNode", value: function(t4) {
          var e4 = this, r4 = [];
          return this.edges.forEach(function(n3) {
            n3.sourceNodeId === t4 && r4.push(e4.nodesMap[n3.targetNodeId].model);
          }), r4;
        } }, { key: "setTheme", value: function(t4) {
          this.theme = mi(wc(wc({}, this.theme), t4));
        } }, { key: "resize", value: function(t4, e4) {
          this.width = t4 != null ? t4 : this.width, this.height = e4 != null ? e4 : this.height;
        } }, { key: "clearData", value: function() {
          this.nodes = [], this.edges = [];
        } }]) && kc(e3.prototype, r3), t3;
      }()).prototype, "width", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), cc = Dc(ac.prototype, "height", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), sc = Dc(ac.prototype, "edgeType", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), lc = Dc(ac.prototype, "nodes", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return [];
      } }), fc = Dc(ac.prototype, "edges", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return [];
      } }), pc = Dc(ac.prototype, "overlapMode", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return io.DEFAULT;
      } }), dc = Dc(ac.prototype, "background", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), yc = Dc(ac.prototype, "transformModel", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), hc = Dc(ac.prototype, "editConfigModel", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), vc = Dc(ac.prototype, "gridSize", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 1;
      } }), bc = Dc(ac.prototype, "partial", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), gc = Dc(ac.prototype, "fakerNode", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), Dc(ac.prototype, "nodesMap", [o2.m], Object.getOwnPropertyDescriptor(ac.prototype, "nodesMap"), ac.prototype), Dc(ac.prototype, "edgesMap", [o2.m], Object.getOwnPropertyDescriptor(ac.prototype, "edgesMap"), ac.prototype), Dc(ac.prototype, "modelsMap", [o2.m], Object.getOwnPropertyDescriptor(ac.prototype, "modelsMap"), ac.prototype), Dc(ac.prototype, "sortElements", [o2.m], Object.getOwnPropertyDescriptor(ac.prototype, "sortElements"), ac.prototype), Dc(ac.prototype, "textEditElement", [o2.m], Object.getOwnPropertyDescriptor(ac.prototype, "textEditElement"), ac.prototype), Dc(ac.prototype, "selectElements", [o2.m], Object.getOwnPropertyDescriptor(ac.prototype, "selectElements"), ac.prototype), Dc(ac.prototype, "setFakerNode", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "setFakerNode"), ac.prototype), Dc(ac.prototype, "removeFakerNode", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "removeFakerNode"), ac.prototype), Dc(ac.prototype, "setModel", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "setModel"), ac.prototype), Dc(ac.prototype, "toFront", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "toFront"), ac.prototype), Dc(ac.prototype, "setElementZIndex", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "setElementZIndex"), ac.prototype), Dc(ac.prototype, "deleteNode", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "deleteNode"), ac.prototype), Dc(ac.prototype, "addNode", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "addNode"), ac.prototype), Dc(ac.prototype, "cloneNode", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "cloneNode"), ac.prototype), Dc(ac.prototype, "moveNode", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "moveNode"), ac.prototype), Dc(ac.prototype, "moveNode2Coordinate", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "moveNode2Coordinate"), ac.prototype), Dc(ac.prototype, "editText", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "editText"), ac.prototype), Dc(ac.prototype, "addEdge", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "addEdge"), ac.prototype), Dc(ac.prototype, "moveEdge", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "moveEdge"), ac.prototype), Dc(ac.prototype, "deleteEdgeBySourceAndTarget", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "deleteEdgeBySourceAndTarget"), ac.prototype), Dc(ac.prototype, "deleteEdgeById", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "deleteEdgeById"), ac.prototype), Dc(ac.prototype, "deleteEdgeBySource", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "deleteEdgeBySource"), ac.prototype), Dc(ac.prototype, "deleteEdgeByTarget", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "deleteEdgeByTarget"), ac.prototype), Dc(ac.prototype, "setElementStateById", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "setElementStateById"), ac.prototype), Dc(ac.prototype, "updateText", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "updateText"), ac.prototype), Dc(ac.prototype, "selectNodeById", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "selectNodeById"), ac.prototype), Dc(ac.prototype, "selectEdgeById", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "selectEdgeById"), ac.prototype), Dc(ac.prototype, "selectElementById", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "selectElementById"), ac.prototype), Dc(ac.prototype, "clearSelectElements", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "clearSelectElements"), ac.prototype), Dc(ac.prototype, "moveNodes", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "moveNodes"), ac.prototype), Dc(ac.prototype, "setDefaultEdgeType", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "setDefaultEdgeType"), ac.prototype), Dc(ac.prototype, "changeNodeType", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "changeNodeType"), ac.prototype), Dc(ac.prototype, "changeEdgeType", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "changeEdgeType"), ac.prototype), Dc(ac.prototype, "getNodeIncomingEdge", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "getNodeIncomingEdge"), ac.prototype), Dc(ac.prototype, "getNodeOutgoingEdge", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "getNodeOutgoingEdge"), ac.prototype), Dc(ac.prototype, "getNodeIncomingNode", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "getNodeIncomingNode"), ac.prototype), Dc(ac.prototype, "getNodeOutgoingNode", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "getNodeOutgoingNode"), ac.prototype), Dc(ac.prototype, "setTheme", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "setTheme"), ac.prototype), Dc(ac.prototype, "resize", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "resize"), ac.prototype), Dc(ac.prototype, "clearData", [o2.k], Object.getOwnPropertyDescriptor(ac.prototype, "clearData"), ac.prototype), ac), Nc = Mc;
      function Cc(t3) {
        return (Cc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Rc() {
        return (Rc = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Ic(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Lc(t3, e3) {
        return (Lc = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function zc(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Hc(t3);
          if (e3) {
            var o3 = Hc(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Bc(this, r3);
        };
      }
      function Bc(t3, e3) {
        if (e3 && (Cc(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Xc(t3);
      }
      function Xc(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Hc(t3) {
        return (Hc = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Uc(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Gc, Fc = wm(Tc = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Lc(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = zc(i2);
        function i2(t4) {
          var e4;
          !function(t5, e5) {
            if (!(t5 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), Uc(Xc(e4 = o3.call(this)), "stepDrag", void 0), Uc(Xc(e4), "stepScrollX", 0), Uc(Xc(e4), "stepScrollY", 0), Uc(Xc(e4), "onDraging", function(t5) {
            var r5 = t5.deltaX, n4 = t5.deltaY;
            e4.setState({ isDraging: true });
            var o4 = e4.props.graphModel, i3 = o4.transformModel;
            o4.editConfigModel.stopMoveGraph || i3.translate(r5, n4);
          }), Uc(Xc(e4), "onDragEnd", function() {
            e4.setState({ isDraging: false });
          }), Uc(Xc(e4), "zoomHandler", function(t5) {
            var r5 = e4.props, n4 = r5.graphModel, o4 = n4.editConfigModel, i3 = n4.transformModel, a4 = n4.gridSize, u3 = r5.graphModel, c3 = t5.deltaX, s3 = t5.deltaY;
            if (o4.stopScrollGraph || t5.ctrlKey === true) {
              if (!o4.stopZoomGraph) {
                t5.preventDefault();
                var l3 = u3.getPointByClient({ x: t5.clientX, y: t5.clientY }).canvasOverlayPosition, f2 = l3.x, p2 = l3.y;
                i3.zoom(t5.deltaY < 0, [f2, p2]);
              }
            } else {
              if (t5.preventDefault(), e4.stepScrollX += c3, e4.stepScrollY += s3, Math.abs(e4.stepScrollX) >= a4) {
                var d3 = e4.stepScrollX % a4, y3 = e4.stepScrollX - d3;
                i3.translate(-y3 * i3.SCALE_X, 0), e4.stepScrollX = d3;
              }
              if (Math.abs(e4.stepScrollY) >= a4) {
                var h3 = e4.stepScrollY % a4, v3 = e4.stepScrollY - h3;
                i3.translate(0, -v3 * i3.SCALE_Y), e4.stepScrollY = h3;
              }
            }
          }), Uc(Xc(e4), "clickHandler", function(t5) {
            if (t5.target.getAttribute("name") === "canvas-overlay") {
              var r5 = e4.props.graphModel, n4 = r5.textEditElement;
              r5.selectElements.size > 0 && r5.clearSelectElements(), n4 && n4.setElementState(Zn.DEFAULT), r5.eventCenter.emit(to.BLANK_CLICK, { e: t5 });
            }
          }), Uc(Xc(e4), "handleContextMenu", function(t5) {
            if (t5.target.getAttribute("name") === "canvas-overlay") {
              t5.preventDefault();
              var r5 = e4.props.graphModel, n4 = r5.getPointByClient({ x: t5.clientX, y: t5.clientY });
              r5.eventCenter.emit(to.BLANK_CONTEXTMENU, { e: t5, position: n4 });
            }
          }), Uc(Xc(e4), "mouseDownHandler", function(t5) {
            var r5 = e4.props.graphModel, n4 = r5.eventCenter, o4 = r5.editConfigModel, i3 = r5.transformModel.SCALE_X, a4 = r5.gridSize;
            o4.stopMoveGraph ? n4.emit(to.BLANK_MOUSEDOWN, { e: t5 }) : (e4.stepDrag.setStep(a4 * i3), e4.stepDrag.handleMouseDown(t5)), e4.clickHandler(t5);
          });
          var r4 = t4.graphModel, n3 = r4.gridSize, a3 = r4.eventCenter;
          return e4.stepDrag = new mc({ onDraging: e4.onDraging, onDragEnd: e4.onDragEnd, step: n3, eventType: "BLANK", eventCenter: a3, model: null }), e4.state = { isDraging: false }, e4;
        }
        return e3 = i2, (r3 = [{ key: "render", value: function() {
          var t4 = this.props.graphModel.transformModel.getTransformStyle().transform, e4 = this.props, r4 = e4.children, n3 = e4.dnd, o4 = this.state.isDraging;
          return Object(Q.g)("svg", Rc({ xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", name: "canvas-overlay", onWheel: this.zoomHandler, onMouseDown: this.mouseDownHandler, onContextMenu: this.handleContextMenu, className: o4 ? "lf-canvas-overlay lf-dragging" : "lf-canvas-overlay lf-drag-able" }, n3.eventMap()), Object(Q.g)("g", { transform: t4 }, r4));
        } }]) && Ic(e3.prototype, r3), i2;
      }(Q.a)) || Tc;
      function Yc(t3) {
        return (Yc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Vc(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Wc(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Kc(t3, e3) {
        return (Kc = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function $c(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Jc(t3);
          if (e3) {
            var o3 = Jc(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Zc(this, r3);
        };
      }
      function Zc(t3, e3) {
        if (e3 && (Yc(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return qc(t3);
      }
      function qc(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Jc(t3) {
        return (Jc = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Qc(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var ts = wm(Gc = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Kc(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = $c(i2);
        function i2() {
          var t4;
          Vc(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return Qc(qc(t4 = o3.call.apply(o3, [this].concat(r4))), "setToolOverlayRef", function(e5) {
            var r5 = t4.props.tool.getInstance();
            r5.components.forEach(function(t5) {
              return t5(r5, e5);
            }), r5.components = [];
          }), t4;
        }
        return e3 = i2, (r3 = [{ key: "getTools", value: function() {
          var t4 = this.props, e4 = t4.tool, r4 = t4.graphModel, n3 = e4.getTools().map(function(t5) {
            return Object(Q.g)(t5, { graphModel: r4, logicFlow: e4.instance });
          });
          return e4.components = n3, n3;
        } }, { key: "render", value: function() {
          return Object(Q.g)("div", { className: "lf-tool-overlay", ref: this.setToolOverlayRef }, this.getTools());
        } }]) && Wc(e3.prototype, r3), i2;
      }(Q.a)) || Gc;
      function es(t3) {
        return (es = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function rs(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function ns(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function os(t3, e3) {
        return (os = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function is(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = us(t3);
          if (e3) {
            var o3 = us(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return as(this, r3);
        };
      }
      function as(t3, e3) {
        if (e3 && (es(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function us(t3) {
        return (us = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var cs, ss = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && os(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = is(i2);
        function i2() {
          return rs(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "render", value: function() {
          var t4 = this.props.background;
          return Object(Q.g)("div", { className: "lf-background" }, Object(Q.g)("div", { style: t4, className: "lf-background-area" }));
        } }]) && ns(e3.prototype, r3), i2;
      }(Q.a);
      function ls(t3) {
        return (ls = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function fs(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function ps(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function ds(t3, e3) {
        return (ds = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function ys(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = bs(t3);
          if (e3) {
            var o3 = bs(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return hs(this, r3);
        };
      }
      function hs(t3, e3) {
        if (e3 && (ls(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return vs(t3);
      }
      function vs(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function bs(t3) {
        return (bs = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function gs(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var ms = wm(cs = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && ds(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = ys(i2);
        function i2() {
          var t4;
          fs(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return gs(vs(t4 = o3.call.apply(o3, [this].concat(r4))), "id", Li()), t4;
        }
        return e3 = i2, (r3 = [{ key: "renderDot", value: function() {
          var t4 = this.props, e4 = t4.config, r4 = e4.color, n3 = e4.thickness, o4 = n3 === void 0 ? 2 : n3, i3 = t4.size, a3 = t4.visible, u3 = Math.min(Math.max(2, o4), i3 / 2), c3 = 1;
          return a3 || (c3 = 0), Object(Q.g)("rect", { width: u3, height: u3, rx: u3 / 2, ry: u3 / 2, fill: r4, opacity: c3 });
        } }, { key: "renderMesh", value: function() {
          var t4 = this.props, e4 = t4.config, r4 = e4.color, n3 = e4.thickness, o4 = n3 === void 0 ? 1 : n3, i3 = t4.size, a3 = t4.visible, u3 = Math.min(Math.max(1, o4), i3 / 2), c3 = "M ".concat(i3, " 0 H0 M0 0 V0 ").concat(i3), s3 = 1;
          return a3 || (s3 = 0), Object(Q.g)("path", { d: c3, stroke: r4, strokeWidth: u3, opacity: s3 });
        } }, { key: "render", value: function() {
          var t4 = this.props, e4 = t4.type, r4 = t4.size, n3 = t4.graphModel.transformModel, o4 = [n3.SCALE_X, n3.SKEW_Y, n3.SKEW_X, n3.SCALE_Y, n3.TRANSLATE_X, n3.TRANSLATE_Y].join(","), i3 = "matrix(".concat(o4, ")");
          return Object(Q.g)("div", { className: "lf-grid" }, Object(Q.g)("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "100%", height: "100%" }, Object(Q.g)("defs", null, Object(Q.g)("pattern", { id: this.id, patternUnits: "userSpaceOnUse", patternTransform: i3, x: "0", y: "0", width: r4, height: r4 }, e4 === "dot" && this.renderDot(), e4 === "mesh" && this.renderMesh())), Object(Q.g)("rect", { width: "100%", height: "100%", fill: "url(#".concat(this.id, ")") })));
        } }]) && ps(e3.prototype, r3), i2;
      }(Q.a)) || cs;
      ms.defaultProps = { size: 20, visible: true, type: "dot", config: { color: "#ababab", thickness: 1 } };
      r2(50);
      function Os(t3) {
        return (Os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function ws(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return _s(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return _s(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function _s(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      var js, Es = function(t3) {
        var e3 = { x1: 10, y1: 10, x2: 20, y2: 20, stroke: "black" };
        return Object.entries(t3).forEach(function(t4) {
          var r3 = ws(t4, 2), n3 = r3[0], o3 = r3[1];
          Os(o3) !== "object" && (e3[n3] = o3);
        }), Object(Q.g)("line", e3);
      };
      function xs(t3) {
        return (xs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Ss(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Ps(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Ss(Object(r3), true).forEach(function(e4) {
            ks(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Ss(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function ks(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function As(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ds(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ts(t3, e3) {
        return (Ts = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Ms(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Cs(t3);
          if (e3) {
            var o3 = Cs(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Ns(this, r3);
        };
      }
      function Ns(t3, e3) {
        if (e3 && (xs(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function Cs(t3) {
        return (Cs = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var Rs, Is = wm(js = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ts(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Ms(i2);
        function i2() {
          return As(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "render", value: function() {
          var t4 = this.props.snaplineModel, e4 = t4.position, r4 = t4.isShowHorizontal, n3 = t4.isShowVertical, o4 = t4.getStyle(), i3 = e4.x, a3 = i3 === void 0 ? 0 : i3, u3 = e4.y, c3 = u3 === void 0 ? 0 : u3, s3 = Ps(Ps({ x1: -1e5, y1: c3, x2: 1e5, y2: c3 }, o4), {}, { stroke: r4 ? o4.stroke : "none" }), l3 = Ps(Ps({ x1: a3, y1: -1e5, x2: a3, y2: 1e5 }, o4), {}, { stroke: n3 ? o4.stroke : "none" });
          return Object(Q.g)("g", { className: "lf-snapline" }, Object(Q.g)(Es, s3), Object(Q.g)(Es, l3));
        } }]) && Ds(e3.prototype, r3), i2;
      }(Q.a)) || js;
      function Ls(t3) {
        return (Ls = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function zs(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Bs(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Bs(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Bs(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Xs(t3) {
        var e3 = t3.x, r3 = t3.y, n3 = t3.width, o3 = t3.height, i2 = t3.className, a3 = t3.radius, u3 = e3 - n3 / 2, c3 = r3 - o3 / 2, s3 = {};
        return Object.entries(t3).forEach(function(t4) {
          var e4 = zs(t4, 2), r4 = e4[0], n4 = e4[1];
          Ls(n4) !== "object" && (s3[r4] = n4);
        }), i2 && (s3.className = "lf-basic-shape ".concat(i2)), a3 && (s3.rx = a3, s3.ry = a3), s3.x = u3, s3.y = c3, Object(Q.g)("rect", s3);
      }
      function Hs(t3) {
        return (Hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Us() {
        return (Us = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Gs(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Fs(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Gs(Object(r3), true).forEach(function(e4) {
            Ys(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Gs(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Ys(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function Vs(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ws(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ks(t3, e3) {
        return (Ks = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function $s(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = qs(t3);
          if (e3) {
            var o3 = qs(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Zs(this, r3);
        };
      }
      function Zs(t3, e3) {
        if (e3 && (Hs(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function qs(t3) {
        return (qs = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      Xs.defaultProps = { className: "", radius: "" };
      var Js, Qs = wm(Rs = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ks(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = $s(i2);
        function i2() {
          return Vs(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getNodesOutline", value: function() {
          var t4 = this.props.graphModel, e4 = t4.nodes, r4 = t4.editConfigModel, n3 = r4.hoverOutline, o4 = r4.nodeSelectedOutline, i3 = [];
          return e4.forEach(function(t5) {
            if (t5.isHovered || t5.isSelected) {
              var e5 = t5.isHovered, r5 = t5.isSelected, a3 = t5.x, u3 = t5.y, c3 = t5.width, s3 = t5.height;
              if (o4 && r5 || n3 && e5) {
                var l3 = t5.getOutlineStyle(), f2 = {};
                if (Object.keys(l3).forEach(function(t6) {
                  t6 !== "hover" && (f2[t6] = l3[t6]);
                }), e5) {
                  var p2 = l3.hover;
                  f2 = Fs(Fs({}, f2), p2);
                }
                i3.push(Object(Q.g)(Xs, Us({ className: "lf-outline-node", x: a3, y: u3, width: c3 + 10, height: s3 + 10 }, f2)));
              }
            }
          }), i3;
        } }, { key: "getEdgeOutline", value: function() {
          for (var t4 = this.props.graphModel, e4 = t4.edges, r4 = t4.editConfigModel, n3 = r4.edgeSelectedOutline, o4 = r4.hoverOutline, i3 = [], a3 = 0; a3 < e4.length; a3++) {
            var u3 = e4[a3];
            (n3 && u3.isSelected || o4 && u3.isHovered) && (u3.modelType === Jn.LINE_EDGE ? i3.push(this.getLineOutline(u3)) : u3.modelType === Jn.POLYLINE_EDGE ? i3.push(this.getPolylineOutline(u3)) : u3.modelType === Jn.BEZIER_EDGE && i3.push(this.getBezierOutline(u3)));
          }
          return i3;
        } }, { key: "getLineOutline", value: function(t4) {
          var e4 = t4.startPoint, r4 = t4.endPoint, n3 = (e4.x + r4.x) / 2, o4 = (e4.y + r4.y) / 2, i3 = Math.abs(e4.x - r4.x) + 10, a3 = Math.abs(e4.y - r4.y) + 10, u3 = t4.getOutlineStyle();
          return Object(Q.g)(Xs, Us({ className: "lf-outline-edge", x: n3, y: o4, width: i3, height: a3 }, u3));
        } }, { key: "getPolylineOutline", value: function(t4) {
          var e4 = t4.points, r4 = Yu(e4), n3 = Au(r4, 8), o4 = n3.x, i3 = n3.y, a3 = n3.width, u3 = n3.height, c3 = t4.getOutlineStyle();
          return Object(Q.g)(Xs, Us({ className: "lf-outline", x: o4, y: i3, width: a3, height: u3 }, c3));
        } }, { key: "getBezierOutline", value: function(t4) {
          var e4 = t4.path, r4 = Zu(e4), n3 = Au(r4, 8), o4 = n3.x, i3 = n3.y, a3 = n3.width, u3 = n3.height, c3 = t4.getOutlineStyle();
          return Object(Q.g)(Xs, Us({ className: "lf-outline", x: o4, y: i3, width: a3, height: u3 }, c3));
        } }, { key: "render", value: function() {
          return Object(Q.g)("g", { className: "lf-outline" }, this.getNodesOutline(), this.getEdgeOutline());
        } }]) && Ws(e3.prototype, r3), i2;
      }(Q.a)) || Rs;
      function tl(t3) {
        return (tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function el(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return rl(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return rl(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function rl(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function nl(t3) {
        var e3 = t3.x, r3 = e3 === void 0 ? 0 : e3, n3 = t3.y, o3 = n3 === void 0 ? 0 : n3, i2 = t3.r, a3 = { cx: r3, cy: o3, r: i2 === void 0 ? 4 : i2, fill: "transparent", fillOpacity: 1, strokeWidth: "1", stroke: "#000", strokeOpacity: 1, className: "lf-basic-shape" };
        return Object.entries(t3).forEach(function(t4) {
          var e4 = el(t4, 2), r4 = e4[0], n4 = e4[1];
          tl(n4) !== "object" && (a3[r4] = n4);
        }), Object(Q.g)("circle", a3);
      }
      function ol(t3) {
        return (ol = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function il() {
        return (il = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function al(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return ul(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return ul(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function ul(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function cl(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function sl(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function ll(t3, e3, r3) {
        return e3 && sl(t3.prototype, e3), r3 && sl(t3, r3), t3;
      }
      function fl(t3, e3) {
        if (typeof e3 != "function" && e3 !== null)
          throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && pl(t3, e3);
      }
      function pl(t3, e3) {
        return (pl = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function dl(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = vl(t3);
          if (e3) {
            var o3 = vl(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return yl(this, r3);
        };
      }
      function yl(t3, e3) {
        if (e3 && (ol(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return hl(t3);
      }
      function hl(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function vl(t3) {
        return (vl = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function bl(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var gl, ml = function(t3) {
        fl(r3, t3);
        var e3 = dl(r3);
        function r3(t4) {
          var n3;
          cl(this, r3), bl(hl(n3 = e3.call(this)), "dragHandler", void 0), bl(hl(n3), "onDraging", function(t5) {
            var e4 = t5.deltaX, r4 = t5.deltaY, o4 = n3.props, i2 = o4.graphModel, a3 = o4.bezierModel, u3 = o4.type, c3 = i2.transformModel, s3 = n3.state, l3 = s3.endX, f2 = s3.endY, p2 = al(c3.moveCanvasPointByHtml([l3, f2], e4, r4), 2), d3 = p2[0], y3 = p2[1];
            n3.setState({ endX: d3, endY: y3 }), a3.updateAdjustAnchor({ x: d3, y: y3 }, u3);
          }), bl(hl(n3), "onDragEnd", function() {
            var t5 = n3.state, e4 = t5.endX, r4 = t5.endY, o4 = n3.props, i2 = o4.bezierModel, a3 = o4.type;
            i2.updateAdjustAnchor({ x: e4, y: r4 }, a3), i2.isDragging = false;
          }), n3.dragHandler = ic({ onDraging: n3.onDraging, onDragEnd: n3.onDragEnd });
          var o3 = t4.position;
          return n3.state = { endX: o3.x, endY: o3.y }, n3;
        }
        return ll(r3, [{ key: "render", value: function() {
          var t4 = this.props.position, e4 = t4.x, r4 = t4.y, n3 = this.props.bezierModel.getEdgeStyle().adjustAnchor;
          return Object(Q.g)(nl, il({ className: "lf-bezier-adjust-anchor", x: e4, y: r4 }, n3, { onMouseDown: this.dragHandler }));
        } }]), r3;
      }(Q.a), Ol = wm(Js = function(t3) {
        fl(r3, t3);
        var e3 = dl(r3);
        function r3() {
          return cl(this, r3), e3.apply(this, arguments);
        }
        return ll(r3, [{ key: "getBezierAdjust", value: function(t4, e4) {
          var r4 = t4.path, n3 = t4.id, o3 = al(Zu(r4), 4), i2 = o3[0], a3 = o3[1], u3 = o3[2], c3 = o3[3], s3 = t4.getEdgeStyle().adjustLine, l3 = [];
          return l3.push(Object(Q.g)(Es, il({ x1: i2.x, y1: i2.y, x2: a3.x, y2: a3.y }, s3))), l3.push(Object(Q.g)(ml, { position: a3, bezierModel: t4, graphModel: e4, key: "".concat(n3, "_ePre"), type: "sNext" })), l3.push(Object(Q.g)(Es, il({ x1: c3.x, y1: c3.y, x2: u3.x, y2: u3.y }, s3))), l3.push(Object(Q.g)(ml, { position: u3, bezierModel: t4, graphModel: e4, key: "".concat(n3, "_sNext"), type: "ePre" })), l3;
        } }, { key: "selectedBezierEdge", value: function() {
          for (var t4 = this.props.graphModel, e4 = t4.edges, r4 = [], n3 = 0; n3 < e4.length; n3++) {
            var o3 = e4[n3];
            o3.isSelected && o3.modelType === Jn.BEZIER_EDGE && o3.draggable && r4.push(this.getBezierAdjust(o3, t4));
          }
          return r4;
        } }, { key: "render", value: function() {
          return Object(Q.g)("g", { className: "lf-bezier-adjust" }, this.selectedBezierEdge());
        } }]), r3;
      }(Q.a)) || Js;
      function wl(t3) {
        return (wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function _l(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function jl(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function El(t3, e3) {
        return (El = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function xl(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Pl(t3);
          if (e3) {
            var o3 = Pl(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Sl(this, r3);
        };
      }
      function Sl(t3, e3) {
        if (e3 && (wl(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function Pl(t3) {
        return (Pl = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var kl, Al = wm(gl = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && El(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = xl(i2);
        function i2() {
          return _l(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "render", value: function() {
          var t4 = this.props.graphModel.transformModel.getTransformStyle().transform, e4 = this.props.children;
          return Object(Q.g)("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "100%", height: "100%", className: "modification-overlay" }, Object(Q.g)("g", { transform: t4 }, e4));
        } }]) && jl(e3.prototype, r3), i2;
      }(Q.a)) || gl;
      function Dl(t3) {
        return (Dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Tl() {
        return (Tl = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Ml(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Nl(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Cl(t3, e3) {
        return (Cl = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Rl(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Ll(t3);
          if (e3) {
            var o3 = Ll(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Il(this, r3);
        };
      }
      function Il(t3, e3) {
        if (e3 && (Dl(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function Ll(t3) {
        return (Ll = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var zl = wm(kl = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Cl(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Rl(i2);
        function i2() {
          return Ml(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getComponent", value: function(t4, e4) {
          var r4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "canvas-overlay", n3 = this.props.getView, o4 = n3(t4.type);
          return Object(Q.g)(o4, { key: t4.id, model: t4, graphModel: e4, overlay: r4 });
        } }, { key: "render", value: function() {
          var t4 = this, e4 = this.props, r4 = e4.graphModel, n3 = e4.tool, o4 = e4.options, i3 = e4.dnd, a3 = e4.snaplineModel, u3 = {};
          o4.width && (u3.width = "".concat(r4.width, "px")), o4.height && (u3.height = "".concat(r4.height, "px"));
          var c3 = r4.fakerNode, s3 = r4.editConfigModel.adjustEdge;
          return Object(Q.g)("div", { className: "lf-graph", style: u3 }, Object(Q.g)(Fc, { graphModel: r4, dnd: i3 }, Object(Q.g)("g", { className: "lf-base" }, nn(r4.sortElements, function(e5) {
            return t4.getComponent(e5, r4);
          })), c3 ? this.getComponent(c3, r4) : ""), Object(Q.g)(Al, { graphModel: r4 }, Object(Q.g)(Qs, { graphModel: r4 }), s3 ? Object(Q.g)(Ol, { graphModel: r4 }) : "", o4.isSilentMode || o4.snapline === false ? "" : Object(Q.g)(Is, { snaplineModel: a3 })), Object(Q.g)(ts, { graphModel: r4, tool: n3 }), o4.background && Object(Q.g)(ss, { background: o4.background }), o4.grid && Object(Q.g)(ms, Tl({}, o4.grid, { graphModel: r4 })));
        } }]) && Nl(e3.prototype, r3), i2;
      }(Q.a)) || kl;
      function Bl(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Xl(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Bl(Object(r3), true).forEach(function(e4) {
            Ul(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Bl(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Hl(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ul(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Gl = function() {
        function t3(e4) {
          var r4 = this;
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), Ul(this, "nodeConfig", void 0), Ul(this, "lf", void 0), Ul(this, "fakerNode", void 0), Ul(this, "stopDrag", function() {
            r4.nodeConfig = null, window.document.removeEventListener("mouseup", r4.stopDrag);
          }), Ul(this, "dragEnter", function(t4) {
            r4.nodeConfig && !r4.fakerNode && (r4.fakerNode = r4.lf.createFakerNode(Xl(Xl({}, r4.nodeConfig), r4.clientToLocalPoint({ x: t4.clientX, y: t4.clientY }))));
          }), Ul(this, "onDragOver", function(t4) {
            if (t4.preventDefault(), r4.fakerNode) {
              var e5 = r4.clientToLocalPoint({ x: t4.clientX, y: t4.clientY }), n4 = e5.x, o3 = e5.y;
              r4.fakerNode.moveTo(n4, o3);
              var i2 = r4.fakerNode.getData();
              r4.lf.setNodeSnapLine(i2), r4.lf.graphModel.eventCenter.emit(to.NODE_DND_DRAG, { data: i2 });
            }
            return false;
          }), Ul(this, "onDragLeave", function() {
            r4.fakerNode && (r4.lf.removeNodeSnapLine(), r4.lf.graphModel.removeFakerNode(), r4.fakerNode = null);
          }), Ul(this, "onDrop", function(t4) {
            if (r4.lf.graphModel && t4 && r4.nodeConfig) {
              var e5 = r4.lf.addNode(Xl(Xl({}, r4.nodeConfig), r4.clientToLocalPoint({ x: t4.clientX, y: t4.clientY })));
              t4.preventDefault(), t4.stopPropagation(), r4.nodeConfig = null, r4.lf.removeNodeSnapLine(), r4.lf.graphModel.removeFakerNode(), r4.fakerNode = null;
              var n4 = e5.getData();
              r4.lf.graphModel.eventCenter.emit(to.NODE_DND_ADD, { data: n4 });
            }
          });
          var n3 = e4.lf;
          this.lf = n3;
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "clientToLocalPoint", value: function(t4) {
          var e4 = t4.x, r4 = t4.y, n3 = Fr(this.lf.options, ["grid", "size"]), o3 = this.lf.graphModel.getPointByClient({ x: e4, y: r4 }).canvasOverlayPosition, i2 = o3.x, a3 = o3.y;
          return { x: _i(i2, n3), y: _i(a3, n3) };
        } }, { key: "startDrag", value: function(t4) {
          this.nodeConfig = t4, window.document.addEventListener("mouseup", this.stopDrag);
        } }, { key: "eventMap", value: function() {
          return { onMouseEnter: this.dragEnter, onMouseOver: this.dragEnter, onMouseMove: this.onDragOver, onMouseLeave: this.onDragLeave, onMouseUp: this.onDrop };
        } }]) && Hl(e3.prototype, r3), t3;
      }();
      function Fl(t3) {
        var e3 = t3.container, r3 = t3.grid, n3 = t3.width, o3 = t3.height;
        if (!e3)
          throw new Error("\u8BF7\u68C0\u67E5 container \u53C2\u6570\u662F\u5426\u6709\u6548");
        if (typeof n3 == "string" || typeof o3 == "string")
          throw new Error("width\u6216height\u4E0D\u652F\u6301\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C\u8BF7\u4F20\u6570\u5B57");
        return r3 && (t3.grid = wn({ size: 20, type: "dot", visible: true, config: { color: "#ababab", thickness: 1 } }, r3)), wn({}, Wl, t3);
      }
      var Yl, Vl, Wl = { background: false, grid: false, textEdit: true, disabledTools: [] };
      function Kl(t3) {
        return (Kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function $l(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Zl(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Zl(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Zl(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function ql(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Jl(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? ql(Object(r3), true).forEach(function(e4) {
            lf(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : ql(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Ql(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function tf(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function ef(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function rf() {
        return (rf = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = nf(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function nf(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = sf(t3)) !== null; )
          ;
        return t3;
      }
      function of(t3, e3) {
        return (of = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function af(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = sf(t3);
          if (e3) {
            var o3 = sf(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return uf(this, r3);
        };
      }
      function uf(t3, e3) {
        if (e3 && (Kl(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return cf(t3);
      }
      function cf(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function sf(t3) {
        return (sf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function lf(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function ff(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var pf, df, yf, hf, vf, bf, gf, mf, Of, wf, _f, jf, Ef, xf, Sf, Pf, kf, Af, Df = (Vl = ff((Yl = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && of(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = af(i2);
        function i2() {
          var t4;
          tf(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return lf(cf(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.BEZIER_EDGE), Ql(cf(t4), "path", Vl, cf(t4)), t4;
        }
        return e3 = i2, (r3 = [{ key: "initEdgeData", value: function(t4) {
          this.offset = 100, rf(sf(i2.prototype), "initEdgeData", this).call(this, t4);
        } }, { key: "getEdgeStyle", value: function() {
          var t4 = this.graphModel.theme.bezier;
          return Jl(Jl({}, rf(sf(i2.prototype), "getEdgeStyle", this).call(this)), oi(t4));
        } }, { key: "getTextPosition", value: function() {
          if (this.pointsList && this.pointsList.length > 0) {
            var t4 = 0, e4 = 0;
            return this.pointsList.forEach(function(r4) {
              var n3 = r4.x, o4 = r4.y;
              t4 += n3, e4 += o4;
            }), { x: t4 / this.pointsList.length, y: e4 / this.pointsList.length };
          }
          return { x: (this.startPoint.x + this.endPoint.x) / 2, y: (this.startPoint.y + this.endPoint.y) / 2 };
        } }, { key: "getData", value: function() {
          var t4 = rf(sf(i2.prototype), "getData", this).call(this), e4 = this.pointsList.map(function(t5) {
            return { x: t5.x, y: t5.y };
          });
          return Jl(Jl({}, t4), {}, { pointsList: e4 });
        } }, { key: "getControls", value: function() {
          var t4 = this.startPoint, e4 = this.endPoint;
          return $u({ start: t4, end: e4, sourceNode: this.sourceNode, targetNode: this.targetNode, offset: this.offset });
        } }, { key: "getPath", value: function(t4) {
          var e4 = $l(t4, 4), r4 = e4[0], n3 = e4[1], o4 = e4[2], i3 = e4[3];
          return "M ".concat(r4.x, " ").concat(r4.y, "\n    C ").concat(n3.x, " ").concat(n3.y, ",\n    ").concat(o4.x, " ").concat(o4.y, ",\n    ").concat(i3.x, " ").concat(i3.y);
        } }, { key: "initPoints", value: function() {
          this.pointsList.length > 0 ? this.path = this.getPath(this.pointsList) : this.updatePoints();
        } }, { key: "updatePoints", value: function() {
          var t4 = { x: this.startPoint.x, y: this.startPoint.y }, e4 = { x: this.endPoint.x, y: this.endPoint.y }, r4 = this.getControls(), n3 = r4.sNext, o4 = r4.ePre;
          this.pointsList = [t4, n3, o4, e4], this.path = this.getPath(this.pointsList);
        } }, { key: "updateStartPoint", value: function(t4) {
          this.startPoint = t4, this.updatePoints();
        } }, { key: "updateEndPoint", value: function(t4) {
          this.endPoint = t4, this.updatePoints();
        } }, { key: "updateAdjustAnchor", value: function(t4, e4) {
          e4 === "sNext" ? this.pointsList[1] = t4 : e4 === "ePre" && (this.pointsList[2] = t4), this.path = this.getPath(this.pointsList), this.setText(Object.assign({}, this.text, this.textPosition));
        } }, { key: "getAdjustStart", value: function() {
          return this.pointsList[0] || this.startPoint;
        } }, { key: "getAdjustEnd", value: function() {
          var t4 = this.pointsList;
          return t4[t4.length - 1] || this.endPoint;
        } }, { key: "updateAfterAdjustStartAndEnd", value: function(t4) {
          var e4 = t4.startPoint, r4 = t4.endPoint, n3 = t4.sourceNode, o4 = t4.targetNode, i3 = $u({ start: e4, end: r4, sourceNode: n3, targetNode: o4, offset: this.offset }), a3 = i3.sNext, u3 = i3.ePre;
          this.pointsList = [e4, a3, u3, r4], this.initPoints();
        } }]) && ef(e3.prototype, r3), i2;
      }(Ra)).prototype, "path", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return "";
      } }), ff(Yl.prototype, "initPoints", [o2.k], Object.getOwnPropertyDescriptor(Yl.prototype, "initPoints"), Yl.prototype), ff(Yl.prototype, "updatePoints", [o2.k], Object.getOwnPropertyDescriptor(Yl.prototype, "updatePoints"), Yl.prototype), ff(Yl.prototype, "updateStartPoint", [o2.k], Object.getOwnPropertyDescriptor(Yl.prototype, "updateStartPoint"), Yl.prototype), ff(Yl.prototype, "updateEndPoint", [o2.k], Object.getOwnPropertyDescriptor(Yl.prototype, "updateEndPoint"), Yl.prototype), ff(Yl.prototype, "updateAdjustAnchor", [o2.k], Object.getOwnPropertyDescriptor(Yl.prototype, "updateAdjustAnchor"), Yl.prototype), ff(Yl.prototype, "getAdjustStart", [o2.k], Object.getOwnPropertyDescriptor(Yl.prototype, "getAdjustStart"), Yl.prototype), ff(Yl.prototype, "getAdjustEnd", [o2.k], Object.getOwnPropertyDescriptor(Yl.prototype, "getAdjustEnd"), Yl.prototype), ff(Yl.prototype, "updateAfterAdjustStartAndEnd", [o2.k], Object.getOwnPropertyDescriptor(Yl.prototype, "updateAfterAdjustStartAndEnd"), Yl.prototype), Yl);
      function Tf(t3, e3) {
        var r3 = typeof Symbol != "undefined" && t3[Symbol.iterator] || t3["@@iterator"];
        if (!r3) {
          if (Array.isArray(t3) || (r3 = function(t4, e4) {
            if (!t4)
              return;
            if (typeof t4 == "string")
              return Mf(t4, e4);
            var r4 = Object.prototype.toString.call(t4).slice(8, -1);
            r4 === "Object" && t4.constructor && (r4 = t4.constructor.name);
            if (r4 === "Map" || r4 === "Set")
              return Array.from(t4);
            if (r4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4))
              return Mf(t4, e4);
          }(t3)) || e3 && t3 && typeof t3.length == "number") {
            r3 && (t3 = r3);
            var n3 = 0, o3 = function() {
            };
            return { s: o3, n: function() {
              return n3 >= t3.length ? { done: true } : { done: false, value: t3[n3++] };
            }, e: function(t4) {
              throw t4;
            }, f: o3 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var i2, a3 = true, u3 = false;
        return { s: function() {
          r3 = r3.call(t3);
        }, n: function() {
          var t4 = r3.next();
          return a3 = t4.done, t4;
        }, e: function(t4) {
          u3 = true, i2 = t4;
        }, f: function() {
          try {
            a3 || r3.return == null || r3.return();
          } finally {
            if (u3)
              throw i2;
          }
        } };
      }
      function Mf(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Nf(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Cf(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Nf(Object(r3), true).forEach(function(e4) {
            Lf(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Nf(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Rf(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function If(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Lf(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function zf(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var Bf, Xf, Hf = (df = zf((pf = function() {
        function t3(e4, r4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), Lf(this, "id", Li()), Rf(this, "type", df, this), Rf(this, "x", yf, this), Rf(this, "y", hf, this), Rf(this, "text", vf, this), Rf(this, "properties", bf, this), Rf(this, "_width", gf, this), Rf(this, "_height", mf, this), Rf(this, "anchorsOffset", Of, this), Rf(this, "isSelected", wf, this), Rf(this, "isHovered", _f, this), Rf(this, "isDragging", jf, this), Rf(this, "isHitable", Ef, this), Rf(this, "draggable", xf, this), Rf(this, "visible", Sf, this), Lf(this, "graphModel", void 0), Rf(this, "zIndex", Pf, this), Rf(this, "state", kf, this), Rf(this, "autoToFront", Af, this), Lf(this, "BaseType", Qn.NODE), Lf(this, "modelType", Jn.NODE), Lf(this, "additionStateData", void 0), Lf(this, "targetRules", []), Lf(this, "sourceRules", []), Lf(this, "moveRules", []), Lf(this, "hasSetTargetRules", false), Lf(this, "hasSetSourceRules", false), this.graphModel = r4, this.initNodeData(e4), this.setAttributes();
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "width", get: function() {
          return this._width;
        }, set: function(t4) {
          this._width = t4;
        } }, { key: "height", get: function() {
          return this._height;
        }, set: function(t4) {
          this._height = t4;
        } }, { key: "initNodeData", value: function(t4) {
          if (t4.properties || (t4.properties = {}), !t4.id) {
            var e4 = this.graphModel.idGenerator, r4 = e4 && e4(t4.type);
            r4 && (t4.id = r4);
            var n3 = this.createId();
            n3 && (t4.id = n3);
          }
          this.formatText(t4), wn(this, function(t5) {
            return Yn(t5, ["id", "type", "x", "y", "text", "properties"]);
          }(t4)), this.graphModel.overlapMode === io.INCREASE && (this.zIndex = t4.zIndex || Pa());
        } }, { key: "setAttributes", value: function() {
        } }, { key: "createId", value: function() {
          return null;
        } }, { key: "formatText", value: function(t4) {
          t4.text || (t4.text = { value: "", x: t4.x, y: t4.y, draggable: false, editable: true }), t4.text && typeof t4.text == "string" ? t4.text = { value: t4.text, x: t4.x, y: t4.y, draggable: false, editable: true } : t4.text && t4.text.editable === void 0 && (t4.text.editable = true);
        } }, { key: "getData", value: function() {
          var t4 = this.text, e4 = t4.x, r4 = t4.y, n3 = t4.value, i2 = this.properties;
          Object(o2.x)(i2) && (i2 = Object(o2.I)(i2));
          var a3 = { id: this.id, type: this.type, x: this.x, y: this.y, properties: i2 };
          return this.graphModel.overlapMode === io.INCREASE && (a3.zIndex = this.zIndex), n3 && (a3.text = { x: e4, y: r4, value: n3 }), a3;
        } }, { key: "getProperties", value: function() {
          return Object(o2.I)(this.properties);
        } }, { key: "getNodeStyle", value: function() {
          return Cf({}, this.graphModel.theme.baseNode);
        } }, { key: "getTextStyle", value: function() {
          var t4 = this.graphModel.theme.nodeText;
          return oi(t4);
        } }, { key: "getAnchorStyle", value: function() {
          var t4 = this.graphModel.theme.anchor;
          return oi(t4);
        } }, { key: "getAnchorLineStyle", value: function() {
          var t4 = this.graphModel.theme.anchorLine;
          return oi(t4);
        } }, { key: "getOutlineStyle", value: function() {
          var t4 = this.graphModel.theme.outline;
          return oi(t4);
        } }, { key: "isAllowConnectedAsSource", value: function(t4, e4, r4) {
          var n3 = this.hasSetSourceRules ? this.sourceRules : this.getConnectedSourceRules();
          this.hasSetSourceRules = true;
          for (var o3, i2 = true, a3 = 0; a3 < n3.length; a3++) {
            var u3 = n3[a3];
            if (!u3.validate.call(this, this, t4, e4, r4)) {
              i2 = false, o3 = u3.message;
              break;
            }
          }
          return { isAllPass: i2, msg: o3 };
        } }, { key: "getConnectedSourceRules", value: function() {
          return this.sourceRules;
        } }, { key: "isAllowConnectedAsTarget", value: function(t4, e4, r4) {
          var n3 = this.hasSetTargetRules ? this.targetRules : this.getConnectedTargetRules();
          this.hasSetTargetRules = true;
          for (var o3, i2 = true, a3 = 0; a3 < n3.length; a3++) {
            var u3 = n3[a3];
            if (!u3.validate.call(this, t4, this, e4, r4)) {
              i2 = false, o3 = u3.message;
              break;
            }
          }
          return { isAllPass: i2, msg: o3 };
        } }, { key: "isAllowMoveNode", value: function(t4, e4) {
          var r4, n3 = Tf(this.moveRules);
          try {
            for (n3.s(); !(r4 = n3.n()).done; )
              if (!(0, r4.value)(this, t4, e4))
                return false;
          } catch (t5) {
            n3.e(t5);
          } finally {
            n3.f();
          }
          var o3, i2 = Tf(this.graphModel.nodeMoveRules);
          try {
            for (i2.s(); !(o3 = i2.n()).done; )
              if (!(0, o3.value)(this, t4, e4))
                return false;
          } catch (t5) {
            i2.e(t5);
          } finally {
            i2.f();
          }
          return true;
        } }, { key: "getConnectedTargetRules", value: function() {
          return this.targetRules;
        } }, { key: "getAnchorsByOffset", value: function() {
          var t4 = this.anchorsOffset, e4 = this.id, r4 = this.x, n3 = this.y;
          return t4 && t4.length > 0 ? t4.map(function(t5, o3) {
            return t5.length ? (t5 = t5, { id: "".concat(e4, "_").concat(o3), x: r4 + t5[0], y: n3 + t5[1] }) : Cf(Cf({}, t5 = t5), {}, { x: r4 + t5.x, y: n3 + t5.y, id: t5.id || "".concat(e4, "_").concat(o3) });
          }) : this.getDefaultAnchor();
        } }, { key: "getDefaultAnchor", value: function() {
          return [];
        } }, { key: "getBounds", value: function() {
          return { x1: this.x - this.width / 2, y1: this.y - this.height / 2, x2: this.x + this.width / 2, y2: this.y + this.height / 2 };
        } }, { key: "anchors", get: function() {
          return this.getAnchorsByOffset();
        } }, { key: "addNodeMoveRules", value: function(t4) {
          this.moveRules.includes(t4) || this.moveRules.push(t4);
        } }, { key: "move", value: function(t4, e4) {
          var r4 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          if (!r4 && !this.isAllowMoveNode(t4, e4))
            return false;
          var n3 = this.x + t4, o3 = this.y + e4;
          return this.x = n3, this.y = o3, this.text && this.moveText(t4, e4), true;
        } }, { key: "moveTo", value: function(t4, e4) {
          var r4 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], n3 = t4 - this.x, o3 = e4 - this.y;
          return !(!r4 && !this.isAllowMoveNode(n3, o3) || (this.text && this.text && this.moveText(n3, o3), this.x = t4, this.y = e4, 0));
        } }, { key: "moveText", value: function(t4, e4) {
          var r4 = this.text, n3 = r4.x, o3 = r4.y, i2 = r4.value, a3 = r4.draggable, u3 = r4.editable;
          this.text = { value: i2, editable: u3, draggable: a3, x: n3 + t4, y: o3 + e4 };
        } }, { key: "updateText", value: function(t4) {
          this.text = Cf(Cf({}, this.text), {}, { value: t4 });
        } }, { key: "setSelected", value: function() {
          var t4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          this.isSelected = t4;
        } }, { key: "setHovered", value: function() {
          var t4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          this.isHovered = t4;
        } }, { key: "setHitable", value: function() {
          var t4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          this.isHitable = t4;
        } }, { key: "setElementState", value: function(t4, e4) {
          this.state = t4, this.additionStateData = e4;
        } }, { key: "setProperty", value: function(t4, e4) {
          this.properties = Cf(Cf({}, this.properties), {}, Lf({}, t4, Ea(e4))), this.setAttributes();
        } }, { key: "setProperties", value: function(t4) {
          this.properties = Cf(Cf({}, this.properties), Ea(t4)), this.setAttributes();
        } }, { key: "setZIndex", value: function() {
          var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          this.zIndex = t4;
        } }, { key: "updateAttributes", value: function(t4) {
          wn(this, t4);
        } }]) && If(e3.prototype, r3), t3;
      }()).prototype, "type", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return "";
      } }), yf = zf(pf.prototype, "x", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0;
      } }), hf = zf(pf.prototype, "y", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0;
      } }), vf = zf(pf.prototype, "text", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return { value: "", x: 0, y: 0, draggable: false, editable: true };
      } }), bf = zf(pf.prototype, "properties", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return {};
      } }), gf = zf(pf.prototype, "_width", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 100;
      } }), mf = zf(pf.prototype, "_height", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 80;
      } }), Of = zf(pf.prototype, "anchorsOffset", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return [];
      } }), wf = zf(pf.prototype, "isSelected", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), _f = zf(pf.prototype, "isHovered", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), jf = zf(pf.prototype, "isDragging", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return false;
      } }), Ef = zf(pf.prototype, "isHitable", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), xf = zf(pf.prototype, "draggable", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Sf = zf(pf.prototype, "visible", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), Pf = zf(pf.prototype, "zIndex", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 1;
      } }), kf = zf(pf.prototype, "state", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 1;
      } }), Af = zf(pf.prototype, "autoToFront", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return true;
      } }), zf(pf.prototype, "addNodeMoveRules", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "addNodeMoveRules"), pf.prototype), zf(pf.prototype, "move", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "move"), pf.prototype), zf(pf.prototype, "moveTo", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "moveTo"), pf.prototype), zf(pf.prototype, "moveText", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "moveText"), pf.prototype), zf(pf.prototype, "updateText", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "updateText"), pf.prototype), zf(pf.prototype, "setSelected", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "setSelected"), pf.prototype), zf(pf.prototype, "setHovered", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "setHovered"), pf.prototype), zf(pf.prototype, "setHitable", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "setHitable"), pf.prototype), zf(pf.prototype, "setElementState", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "setElementState"), pf.prototype), zf(pf.prototype, "setProperty", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "setProperty"), pf.prototype), zf(pf.prototype, "setProperties", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "setProperties"), pf.prototype), zf(pf.prototype, "setZIndex", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "setZIndex"), pf.prototype), zf(pf.prototype, "updateAttributes", [o2.k], Object.getOwnPropertyDescriptor(pf.prototype, "updateAttributes"), pf.prototype), pf);
      function Uf(t3) {
        return (Uf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Gf(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Ff(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Gf(Object(r3), true).forEach(function(e4) {
            ep(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Gf(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Yf(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function Vf(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Wf(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Kf() {
        return (Kf = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = $f(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function $f(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = tp(t3)) !== null; )
          ;
        return t3;
      }
      function Zf(t3, e3) {
        return (Zf = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function qf(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = tp(t3);
          if (e3) {
            var o3 = tp(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Jf(this, r3);
        };
      }
      function Jf(t3, e3) {
        if (e3 && (Uf(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Qf(t3);
      }
      function Qf(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function tp(t3) {
        return (tp = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function ep(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function rp(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var np, op, ip, ap = (Xf = rp((Bf = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Zf(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = qf(i2);
        function i2() {
          var t4;
          Vf(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return ep(Qf(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.CIRCLE_NODE), Yf(Qf(t4), "r", Xf, Qf(t4)), t4;
        }
        return e3 = i2, (r3 = [{ key: "width", get: function() {
          return 2 * this.r;
        } }, { key: "height", get: function() {
          return 2 * this.r;
        } }, { key: "getNodeStyle", value: function() {
          var t4 = Kf(tp(i2.prototype), "getNodeStyle", this).call(this), e4 = this.graphModel.theme.circle;
          return Ff(Ff({}, t4), oi(e4));
        } }, { key: "getDefaultAnchor", value: function() {
          var t4 = this.x, e4 = this.y, r4 = this.r;
          return [{ x: t4, y: e4 - r4, id: "".concat(this.id, "_0") }, { x: t4 + r4, y: e4, id: "".concat(this.id, "_1") }, { x: t4, y: e4 + r4, id: "".concat(this.id, "_2") }, { x: t4 - r4, y: e4, id: "".concat(this.id, "_3") }];
        } }]) && Wf(e3.prototype, r3), i2;
      }(Hf)).prototype, "r", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 50;
      } }), rp(Bf.prototype, "width", [o2.m], Object.getOwnPropertyDescriptor(Bf.prototype, "width"), Bf.prototype), rp(Bf.prototype, "height", [o2.m], Object.getOwnPropertyDescriptor(Bf.prototype, "height"), Bf.prototype), Bf);
      r2(123);
      function up(t3) {
        return (up = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function cp(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return sp(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return sp(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function sp(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function lp(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function fp(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? lp(Object(r3), true).forEach(function(e4) {
            _p(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : lp(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function pp(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function dp(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function yp(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function hp() {
        return (hp = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = vp(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function vp(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = wp(t3)) !== null; )
          ;
        return t3;
      }
      function bp(t3, e3) {
        return (bp = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function gp(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = wp(t3);
          if (e3) {
            var o3 = wp(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return mp(this, r3);
        };
      }
      function mp(t3, e3) {
        if (e3 && (up(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Op(t3);
      }
      function Op(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function wp(t3) {
        return (wp = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function _p(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function jp(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var Ep, xp, Sp, Pp = (op = jp((np = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && bp(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = gp(i2);
        function i2() {
          var t4;
          dp(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return _p(Op(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.DIAMOND_NODE), pp(Op(t4), "rx", op, Op(t4)), pp(Op(t4), "ry", ip, Op(t4)), t4;
        }
        return e3 = i2, (r3 = [{ key: "getNodeStyle", value: function() {
          var t4 = hp(wp(i2.prototype), "getNodeStyle", this).call(this), e4 = this.graphModel.theme.diamond;
          return fp(fp({}, t4), oi(e4));
        } }, { key: "points", get: function() {
          var t4 = this.x, e4 = this.y, r4 = this.rx, n3 = this.ry;
          return [[t4, e4 - n3], [t4 + r4, e4], [t4, e4 + n3], [t4 - r4, e4]];
        } }, { key: "pointsPosition", get: function() {
          return this.points.map(function(t4) {
            return { x: t4[0], y: t4[1] };
          });
        } }, { key: "width", get: function() {
          var t4 = Number.MAX_SAFE_INTEGER, e4 = Number.MIN_SAFE_INTEGER;
          return this.points.forEach(function(r4) {
            var n3 = cp(r4, 1)[0];
            n3 < t4 && (t4 = n3), n3 > e4 && (e4 = n3);
          }), e4 - t4;
        } }, { key: "height", get: function() {
          var t4 = Number.MAX_SAFE_INTEGER, e4 = Number.MIN_SAFE_INTEGER;
          return this.points.forEach(function(r4) {
            var n3 = cp(r4, 2)[1];
            n3 < t4 && (t4 = n3), n3 > e4 && (e4 = n3);
          }), e4 - t4;
        } }, { key: "getDefaultAnchor", value: function() {
          var t4 = this;
          return this.points.map(function(e4, r4) {
            var n3 = cp(e4, 2);
            return { x: n3[0], y: n3[1], id: "".concat(t4.id, "_").concat(r4) };
          });
        } }]) && yp(e3.prototype, r3), i2;
      }(Hf)).prototype, "rx", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 30;
      } }), ip = jp(np.prototype, "ry", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 50;
      } }), jp(np.prototype, "points", [o2.m], Object.getOwnPropertyDescriptor(np.prototype, "points"), np.prototype), jp(np.prototype, "pointsPosition", [o2.m], Object.getOwnPropertyDescriptor(np.prototype, "pointsPosition"), np.prototype), jp(np.prototype, "width", [o2.m], Object.getOwnPropertyDescriptor(np.prototype, "width"), np.prototype), jp(np.prototype, "height", [o2.m], Object.getOwnPropertyDescriptor(np.prototype, "height"), np.prototype), np);
      function kp(t3) {
        return (kp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Ap(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Dp(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Ap(Object(r3), true).forEach(function(e4) {
            Hp(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Ap(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Tp(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function Mp(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Np(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Cp() {
        return (Cp = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = Rp(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function Rp(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = Xp(t3)) !== null; )
          ;
        return t3;
      }
      function Ip(t3, e3) {
        return (Ip = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Lp(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Xp(t3);
          if (e3) {
            var o3 = Xp(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return zp(this, r3);
        };
      }
      function zp(t3, e3) {
        if (e3 && (kp(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Bp(t3);
      }
      function Bp(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Xp(t3) {
        return (Xp = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Hp(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function Up(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var Gp, Fp, Yp = (xp = Up((Ep = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ip(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Lp(i2);
        function i2() {
          var t4;
          Mp(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return Hp(Bp(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.ELLIPSE_NODE), Tp(Bp(t4), "rx", xp, Bp(t4)), Tp(Bp(t4), "ry", Sp, Bp(t4)), t4;
        }
        return e3 = i2, (r3 = [{ key: "getNodeStyle", value: function() {
          var t4 = Cp(Xp(i2.prototype), "getNodeStyle", this).call(this), e4 = this.graphModel.theme.ellipse;
          return Dp(Dp({}, t4), oi(e4));
        } }, { key: "width", get: function() {
          return 2 * this.rx;
        } }, { key: "height", get: function() {
          return 2 * this.ry;
        } }, { key: "getDefaultAnchor", value: function() {
          var t4 = this.x, e4 = this.y, r4 = this.rx, n3 = this.ry;
          return [{ x: t4, y: e4 - n3, id: "".concat(this.id, "_0") }, { x: t4 + r4, y: e4, id: "".concat(this.id, "_1") }, { x: t4, y: e4 + n3, id: "".concat(this.id, "_2") }, { x: t4 - r4, y: e4, id: "".concat(this.id, "_3") }];
        } }]) && Np(e3.prototype, r3), i2;
      }(Hf)).prototype, "rx", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 30;
      } }), Sp = Up(Ep.prototype, "ry", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 45;
      } }), Up(Ep.prototype, "width", [o2.m], Object.getOwnPropertyDescriptor(Ep.prototype, "width"), Ep.prototype), Up(Ep.prototype, "height", [o2.m], Object.getOwnPropertyDescriptor(Ep.prototype, "height"), Ep.prototype), Ep);
      function Vp(t3) {
        return (Vp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Wp(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Kp(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Kp(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Kp(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function $p(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Zp(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? $p(Object(r3), true).forEach(function(e4) {
            ud(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : $p(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function qp(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function Jp(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Qp(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function td() {
        return (td = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = ed(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function ed(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = ad(t3)) !== null; )
          ;
        return t3;
      }
      function rd(t3, e3) {
        return (rd = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function nd(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = ad(t3);
          if (e3) {
            var o3 = ad(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return od(this, r3);
        };
      }
      function od(t3, e3) {
        if (e3 && (Vp(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return id(t3);
      }
      function id(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function ad(t3) {
        return (ad = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function ud(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function cd(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var sd, ld, fd = (Fp = cd((Gp = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && rd(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = nd(i2);
        function i2() {
          var t4;
          Jp(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return ud(id(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.POLYGON_NODE), qp(id(t4), "points", Fp, id(t4)), t4;
        }
        return e3 = i2, (r3 = [{ key: "getNodeStyle", value: function() {
          var t4 = td(ad(i2.prototype), "getNodeStyle", this).call(this), e4 = this.graphModel.theme.polygon;
          return Zp(Zp({}, t4), oi(e4));
        } }, { key: "pointsPosition", get: function() {
          var t4 = this.x, e4 = this.y, r4 = this.width, n3 = this.height;
          return this.points.map(function(o4) {
            return { x: o4[0] + t4 - r4 / 2, y: o4[1] + e4 - n3 / 2 };
          });
        } }, { key: "width", get: function() {
          var t4 = Number.MAX_SAFE_INTEGER, e4 = Number.MIN_SAFE_INTEGER;
          return this.points.forEach(function(r4) {
            var n3 = Wp(r4, 1)[0];
            n3 < t4 && (t4 = n3), n3 > e4 && (e4 = n3);
          }), e4 - t4;
        } }, { key: "height", get: function() {
          var t4 = Number.MAX_SAFE_INTEGER, e4 = Number.MIN_SAFE_INTEGER;
          return this.points.forEach(function(r4) {
            var n3 = Wp(r4, 2)[1];
            n3 < t4 && (t4 = n3), n3 > e4 && (e4 = n3);
          }), e4 - t4;
        } }, { key: "getDefaultAnchor", value: function() {
          var t4 = this, e4 = this.x, r4 = this.y, n3 = this.width, o4 = this.height;
          return this.points.map(function(i3, a3) {
            var u3 = Wp(i3, 2), c3 = u3[0], s3 = u3[1];
            return { x: e4 + c3 - n3 / 2, y: r4 + s3 - o4 / 2, id: "".concat(t4.id, "_").concat(a3) };
          });
        } }]) && Qp(e3.prototype, r3), i2;
      }(Hf)).prototype, "points", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return [[50, 0], [100, 50], [50, 100], [0, 50]];
      } }), cd(Gp.prototype, "pointsPosition", [o2.m], Object.getOwnPropertyDescriptor(Gp.prototype, "pointsPosition"), Gp.prototype), cd(Gp.prototype, "width", [o2.m], Object.getOwnPropertyDescriptor(Gp.prototype, "width"), Gp.prototype), cd(Gp.prototype, "height", [o2.m], Object.getOwnPropertyDescriptor(Gp.prototype, "height"), Gp.prototype), Gp);
      function pd(t3) {
        return (pd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function dd(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function yd(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? dd(Object(r3), true).forEach(function(e4) {
            xd(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : dd(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function hd(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function vd(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function bd(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function gd() {
        return (gd = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = md(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function md(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = Ed(t3)) !== null; )
          ;
        return t3;
      }
      function Od(t3, e3) {
        return (Od = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function wd(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Ed(t3);
          if (e3) {
            var o3 = Ed(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return _d(this, r3);
        };
      }
      function _d(t3, e3) {
        if (e3 && (pd(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return jd(t3);
      }
      function jd(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Ed(t3) {
        return (Ed = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function xd(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Sd, Pd = (ld = function(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }((sd = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Od(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = wd(i2);
        function i2() {
          var t4;
          vd(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return xd(jd(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.RECT_NODE), hd(jd(t4), "radius", ld, jd(t4)), t4;
        }
        return e3 = i2, (r3 = [{ key: "getDefaultAnchor", value: function() {
          var t4 = this.x, e4 = this.y, r4 = this.width, n3 = this.height;
          return [{ x: t4, y: e4 - n3 / 2, id: "".concat(this.id, "_0") }, { x: t4 + r4 / 2, y: e4, id: "".concat(this.id, "_1") }, { x: t4, y: e4 + n3 / 2, id: "".concat(this.id, "_2") }, { x: t4 - r4 / 2, y: e4, id: "".concat(this.id, "_3") }];
        } }, { key: "getNodeStyle", value: function() {
          var t4 = gd(Ed(i2.prototype), "getNodeStyle", this).call(this), e4 = this.graphModel.theme.rect;
          return yd(yd({}, t4), oi(e4));
        } }]) && bd(e3.prototype, r3), i2;
      }(Hf)).prototype, "radius", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: function() {
        return 0;
      } }), sd);
      function kd(t3) {
        return (kd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Ad(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Dd(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Ad(Object(r3), true).forEach(function(e4) {
            Xd(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Ad(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Td(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Md(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Nd() {
        return (Nd = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, r3) {
          var n3 = Cd(t3, e3);
          if (n3) {
            var o3 = Object.getOwnPropertyDescriptor(n3, e3);
            return o3.get ? o3.get.call(arguments.length < 3 ? t3 : r3) : o3.value;
          }
        }).apply(this, arguments);
      }
      function Cd(t3, e3) {
        for (; !Object.prototype.hasOwnProperty.call(t3, e3) && (t3 = Bd(t3)) !== null; )
          ;
        return t3;
      }
      function Rd(t3, e3) {
        return (Rd = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Id(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Bd(t3);
          if (e3) {
            var o3 = Bd(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Ld(this, r3);
        };
      }
      function Ld(t3, e3) {
        if (e3 && (kd(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return zd(t3);
      }
      function zd(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Bd(t3) {
        return (Bd = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Xd(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function Hd(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var Ud = (Hd((Sd = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Rd(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Id(i2);
        function i2() {
          var t4;
          Td(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return Xd(zd(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.TEXT_NODE), t4;
        }
        return e3 = i2, (r3 = [{ key: "getTextStyle", value: function() {
          var t4 = Nd(Bd(i2.prototype), "getTextStyle", this).call(this), e4 = this.graphModel.theme.text;
          return Dd(Dd({}, t4), oi(e4));
        } }, { key: "width", get: function() {
          var t4 = String(this.text.value).split(/[\r\n]/g), e4 = this.getTextStyle().fontSize;
          return _a({ rows: t4, fontSize: e4, rowsLength: t4.length }).width;
        } }, { key: "height", get: function() {
          var t4 = String(this.text.value).split(/[\r\n]/g), e4 = this.getTextStyle().fontSize;
          return _a({ rows: t4, fontSize: e4, rowsLength: t4.length }).height;
        } }]) && Md(e3.prototype, r3), i2;
      }(Hf)).prototype, "width", [o2.m], Object.getOwnPropertyDescriptor(Sd.prototype, "width"), Sd.prototype), Hd(Sd.prototype, "height", [o2.m], Object.getOwnPropertyDescriptor(Sd.prototype, "height"), Sd.prototype), Sd);
      function Gd(t3) {
        return (Gd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Fd(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Yd(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Vd(t3, e3) {
        return (Vd = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Wd(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Zd(t3);
          if (e3) {
            var o3 = Zd(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Kd(this, r3);
        };
      }
      function Kd(t3, e3) {
        if (e3 && (Gd(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return $d(t3);
      }
      function $d(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Zd(t3) {
        return (Zd = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function qd(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Jd, Qd, ty, ey, ry = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Vd(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Wd(i2);
        function i2() {
          var t4;
          Fd(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return qd($d(t4 = o3.call.apply(o3, [this].concat(r4))), "modelType", Jn.HTML_NODE), t4;
        }
        return e3 = i2, (r3 = [{ key: "getDefaultAnchor", value: function() {
          var t4 = this.x, e4 = this.y, r4 = this.width, n3 = this.height;
          return [{ x: t4, y: e4 - n3 / 2, id: "".concat(this.id, "_0") }, { x: t4 + r4 / 2, y: e4, id: "".concat(this.id, "_1") }, { x: t4, y: e4 + n3 / 2, id: "".concat(this.id, "_2") }, { x: t4 - r4 / 2, y: e4, id: "".concat(this.id, "_3") }];
        } }]) && Yd(e3.prototype, r3), i2;
      }(Hf);
      function ny(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function oy(t3, e3, r3, n3) {
        r3 && Object.defineProperty(t3, e3, { enumerable: r3.enumerable, configurable: r3.configurable, writable: r3.writable, value: r3.initializer ? r3.initializer.call(n3) : void 0 });
      }
      function iy(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function ay(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function uy(t3, e3, r3, n3, o3) {
        var i2 = {};
        return Object.keys(n3).forEach(function(t4) {
          i2[t4] = n3[t4];
        }), i2.enumerable = !!i2.enumerable, i2.configurable = !!i2.configurable, ("value" in i2 || i2.initializer) && (i2.writable = true), i2 = r3.slice().reverse().reduce(function(r4, n4) {
          return n4(t3, e3, r4) || r4;
        }, i2), o3 && i2.initializer !== void 0 && (i2.value = i2.initializer ? i2.initializer.call(o3) : void 0, i2.initializer = void 0), i2.initializer === void 0 && (Object.defineProperty(t3, e3, i2), i2 = null), i2;
      }
      var cy = (Qd = uy((Jd = function() {
        function t3(e4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), ay(this, "graphModel", void 0), oy(this, "isShowHorizontal", Qd, this), oy(this, "isShowVertical", ty, this), oy(this, "position", ey, this), this.isShowHorizontal = false, this.isShowVertical = false, this.position = { x: 0, y: 0 }, this.graphModel = e4;
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "getStyle", value: function() {
          return function(t4) {
            for (var e4 = 1; e4 < arguments.length; e4++) {
              var r4 = arguments[e4] != null ? arguments[e4] : {};
              e4 % 2 ? ny(Object(r4), true).forEach(function(e5) {
                ay(t4, e5, r4[e5]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t4, Object.getOwnPropertyDescriptors(r4)) : ny(Object(r4)).forEach(function(e5) {
                Object.defineProperty(t4, e5, Object.getOwnPropertyDescriptor(r4, e5));
              });
            }
            return t4;
          }({}, this.graphModel.theme.snapline);
        } }, { key: "getCenterSnapLine", value: function(t4, e4) {
          for (var r4 = t4.x, n3 = t4.y, o3 = false, i2 = false, a3 = 0; a3 < e4.length; a3++) {
            var u3 = e4[a3];
            if (u3.id !== t4.id && (r4 === u3.x && (o3 = true), n3 === u3.y && (i2 = true), o3 && i2))
              break;
          }
          return { isShowVertical: o3, isShowHorizontal: i2, position: { x: r4, y: n3 } };
        } }, { key: "getHorizontalSnapline", value: function(t4, e4) {
          var r4, n3, o3 = false, i2 = t4.id;
          if (i2) {
            var a3 = this.graphModel.fakerNode;
            if (a3 && a3.id === i2)
              n3 = ya(a3);
            else {
              var u3 = this.graphModel.getNodeModelById(i2);
              n3 = ya(u3);
            }
          }
          for (var c3 = 0; c3 < e4.length; c3++) {
            var s3 = e4[c3];
            if (s3.id !== t4.id) {
              var l3 = ya(s3);
              if (l3.minY === n3.minY || l3.maxY === n3.minY) {
                o3 = true, r4 = n3.minY;
                break;
              }
              if (l3.minY === n3.maxY || l3.maxY === n3.maxY) {
                o3 = true, r4 = n3.maxY;
                break;
              }
            }
          }
          return wn({ isShowHorizontal: o3, position: { y: r4 } });
        } }, { key: "getVerticalSnapline", value: function(t4, e4) {
          var r4, n3, o3 = false, i2 = t4.id;
          if (i2) {
            var a3 = this.graphModel.fakerNode;
            if (a3 && a3.id === i2)
              n3 = ya(a3);
            else {
              var u3 = this.graphModel.getNodeModelById(i2);
              n3 = ya(u3);
            }
          }
          for (var c3 = 0; c3 < e4.length; c3++) {
            var s3 = e4[c3];
            if (s3.id !== t4.id) {
              var l3 = ya(s3);
              if (l3.minX === n3.minX || l3.maxX === n3.minX) {
                o3 = true, r4 = n3.minX;
                break;
              }
              if (l3.minX === n3.maxX || l3.maxX === n3.maxX) {
                o3 = true, r4 = n3.maxX;
                break;
              }
            }
          }
          return wn({ isShowVertical: o3, position: { x: r4 } });
        } }, { key: "getSnapLinePosition", value: function(t4, e4) {
          var r4 = this.getCenterSnapLine(t4, e4), n3 = r4.isShowHorizontal, o3 = r4.isShowVertical;
          if (!n3) {
            var i2 = this.getHorizontalSnapline(t4, e4);
            i2.isShowHorizontal && (r4.isShowHorizontal = i2.isShowHorizontal, r4.position.y = i2.position.y);
          }
          if (!o3) {
            var a3 = this.getVerticalSnapline(t4, e4);
            a3.isShowVertical && (r4.isShowVertical = a3.isShowVertical, r4.position.x = a3.position.x);
          }
          return r4;
        } }, { key: "setSnaplineInfo", value: function(t4) {
          var e4 = t4.isShowHorizontal, r4 = t4.isShowVertical, n3 = t4.position;
          this.position = n3, this.isShowHorizontal = e4, this.isShowVertical = r4;
        } }, { key: "clearSnapline", value: function() {
          this.position = { x: 0, y: 0 }, this.isShowHorizontal = false, this.isShowVertical = false;
        } }, { key: "setNodeSnapLine", value: function(t4) {
          var e4 = this.graphModel.nodes, r4 = this.getSnapLinePosition(t4, e4);
          this.setSnaplineInfo(r4);
        } }]) && iy(e3.prototype, r3), t3;
      }()).prototype, "isShowHorizontal", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), ty = uy(Jd.prototype, "isShowVertical", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), ey = uy(Jd.prototype, "position", [o2.C], { configurable: true, enumerable: true, writable: true, initializer: null }), uy(Jd.prototype, "clearSnapline", [o2.k], Object.getOwnPropertyDescriptor(Jd.prototype, "clearSnapline"), Jd.prototype), uy(Jd.prototype, "setNodeSnapLine", [o2.k], Object.getOwnPropertyDescriptor(Jd.prototype, "setNodeSnapLine"), Jd.prototype), Jd);
      function sy(t3) {
        return (sy = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function ly() {
        return (ly = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function fy(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function py(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? fy(Object(r3), true).forEach(function(e4) {
            wy(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : fy(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function dy(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return yy(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return yy(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function yy(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function hy(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function vy(t3, e3) {
        return (vy = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function by(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Oy(t3);
          if (e3) {
            var o3 = Oy(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return gy(this, r3);
        };
      }
      function gy(t3, e3) {
        if (e3 && (sy(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return my(t3);
      }
      function my(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Oy(t3) {
        return (Oy = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function wy(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var _y = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && vy(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = by(i2);
        function i2() {
          var t4;
          return function(t5, e4) {
            if (!(t5 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), wy(my(t4 = o3.call(this)), "preTargetNode", void 0), wy(my(t4), "dragHandler", void 0), wy(my(t4), "sourceRuleResults", void 0), wy(my(t4), "targetRuleResults", void 0), wy(my(t4), "onDragStart", function() {
            var e4 = t4.props, r4 = e4.x, n3 = e4.y, o4 = e4.nodeModel, i3 = e4.graphModel, a3 = i3.overlapMode;
            i3.selectNodeById(o4.id), a3 !== io.INCREASE && o4.autoToFront && i3.toFront(o4.id), t4.setState({ startX: r4, startY: n3, endX: r4, endY: n3 });
          }), wy(my(t4), "onDraging", function(e4) {
            var r4 = e4.deltaX, n3 = e4.deltaY, o4 = t4.state, i3 = o4.endX, a3 = o4.endY, u3 = t4.props, c3 = u3.graphModel, s3 = u3.nodeModel, l3 = dy(c3.transformModel.moveCanvasPointByHtml([i3, a3], r4, n3), 2), f2 = l3[0], p2 = l3[1];
            t4.setState({ endX: f2, endY: p2, draging: true });
            var d3 = ca({ x: i3, y: a3 }, c3);
            if (d3) {
              var y3 = d3.node;
              t4.preTargetNode = y3;
              var h3 = d3.anchor.id, v3 = "".concat(y3.id, "_").concat(h3);
              if (!t4.targetRuleResults.has(v3)) {
                var b3 = t4.props.anchorData, g3 = d3.anchor, m3 = s3.isAllowConnectedAsSource(y3, b3, g3), O3 = y3.isAllowConnectedAsTarget(s3, b3, g3);
                t4.sourceRuleResults.set(y3.id, ja(m3)), t4.targetRuleResults.set(v3, ja(O3));
              }
              var w3 = t4.sourceRuleResults.get(y3.id).isAllPass, _3 = t4.targetRuleResults.get(v3).isAllPass;
              w3 && _3 ? y3.setElementState(Zn.ALLOW_CONNECT) : y3.setElementState(Zn.NOT_ALLOW_CONNECT);
            } else
              t4.preTargetNode && t4.preTargetNode.state !== Zn.DEFAULT && t4.preTargetNode.setElementState(Zn.DEFAULT);
          }), wy(my(t4), "onDragEnd", function() {
            t4.checkEnd(), t4.setState({ startX: 0, startY: 0, endX: 0, endY: 0, draging: false }), t4.sourceRuleResults.clear(), t4.targetRuleResults.clear();
          }), wy(my(t4), "checkEnd", function() {
            var e4 = t4.props, r4 = e4.graphModel, n3 = e4.nodeModel, o4 = e4.x, i3 = e4.y, a3 = e4.id, u3 = r4.edgeType, c3 = t4.state, s3 = c3.endX, l3 = c3.endY, f2 = c3.draging, p2 = ca({ x: s3, y: l3 }, r4);
            if (t4.preTargetNode && t4.preTargetNode.state !== Zn.DEFAULT && t4.preTargetNode.setElementState(Zn.DEFAULT), f2 && p2 && p2.node) {
              var d3 = p2.node, y3 = t4.sourceRuleResults.get(d3.id) || {}, h3 = y3.isAllPass, v3 = y3.msg, b3 = p2.anchor.id, g3 = "".concat(d3.id, "_").concat(b3), m3 = t4.targetRuleResults.get(g3) || {}, O3 = m3.isAllPass, w3 = m3.msg;
              if (h3 && O3)
                d3.setElementState(Zn.ALLOW_CONNECT), o4 === p2.anchor.x && i3 === p2.anchor.y || r4.addEdge({ type: u3, sourceNodeId: n3.id, sourceAnchorId: a3, startPoint: { x: o4, y: i3 }, targetNodeId: p2.node.id, targetAnchorId: p2.anchor.id, endPoint: { x: p2.anchor.x, y: p2.anchor.y } });
              else {
                var _3 = d3.getData();
                r4.eventCenter.emit(to.CONNECTION_NOT_ALLOWED, { data: _3, msg: w3 || v3 });
              }
            }
          }), t4.sourceRuleResults = /* @__PURE__ */ new Map(), t4.targetRuleResults = /* @__PURE__ */ new Map(), t4.state = { startX: 0, startY: 0, endX: 0, endY: 0, draging: false }, t4.dragHandler = ic({ onDragStart: t4.onDragStart, onDraging: t4.onDraging, onDragEnd: t4.onDragEnd }), t4;
        }
        return e3 = i2, (r3 = [{ key: "isShowLine", value: function() {
          var t4 = this.state, e4 = t4.startX, r4 = t4.startY, n3 = t4.endX, o4 = t4.endY;
          return fa(e4, r4, n3, o4) > 10;
        } }, { key: "render", value: function() {
          var t4 = this.state, e4 = t4.startX, r4 = t4.startY, n3 = t4.endX, o4 = t4.endY, i3 = this.props, a3 = i3.x, u3 = i3.y, c3 = i3.style, s3 = i3.edgeStyle, l3 = py(py({}, c3), c3.hover);
          return Object(Q.g)("g", { className: "lf-anchor" }, Object(Q.g)(nl, ly({ className: "lf-node-anchor-hover" }, l3, { x: a3, y: u3, onMouseDown: this.dragHandler })), Object(Q.g)(nl, ly({ className: "lf-node-anchor" }, c3, { x: a3, y: u3, onMouseDown: this.dragHandler })), this.isShowLine() && Object(Q.g)(Es, ly({ x1: e4, y1: r4, x2: n3, y2: o4 }, s3, { "pointer-events": "none" })));
        } }]) && hy(e3.prototype, r3), i2;
      }(Q.a);
      r2(59);
      function jy(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Ey(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? jy(Object(r3), true).forEach(function(e4) {
            xy(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : jy(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function xy(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function Sy(t3) {
        return (Sy = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Py(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return ky(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return ky(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function ky(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Ay(t3) {
        var e3 = t3.x, r3 = e3 === void 0 ? 0 : e3, n3 = t3.y, o3 = n3 === void 0 ? 0 : n3, i2 = t3.value, a3 = t3.fontSize, u3 = t3.fill, c3 = u3 === void 0 ? "currentColor" : u3, s3 = t3.overflowMode, l3 = s3 === void 0 ? "default" : s3, f2 = t3.textWidth, p2 = f2 === void 0 ? "" : f2, d3 = t3.model, y3 = { textAnchor: "middle", "dominant-baseline": "middle", x: r3, y: o3, fill: c3 };
        if (Object.entries(t3).forEach(function(t4) {
          var e4 = Py(t4, 2), r4 = e4[0], n4 = e4[1];
          Sy(n4) !== "object" && (y3[r4] = n4);
        }), i2) {
          var h3 = String(i2).split(/[\r\n]/g), v3 = h3.length;
          if (l3 !== "default") {
            var b3 = d3.BaseType, g3 = d3.modelType;
            if (b3 === Qn.NODE && g3 !== Jn.TEXT_NODE || b3 === Qn.EDGE && p2)
              return function(t4) {
                var e4 = t4.value, r4 = t4.fontSize, n4 = t4.model, o4 = t4.fontFamily, i3 = o4 === void 0 ? "" : o4, a4 = t4.lineHeight, u4 = t4.wrapPadding, c4 = u4 === void 0 ? "0, 0" : u4, s4 = t4.overflowMode, l4 = t4.x, f3 = t4.y, p3 = n4.width, d4 = n4.textHeight, y4 = t4.textWidth || p3, h4 = String(e4).split(/[\r\n]/g), v4 = h4.length, b4 = wa({ rows: h4, style: { fontSize: "".concat(r4, "px"), width: "".concat(y4, "px"), fontFamily: i3, lineHeight: a4, padding: c4 }, rowsLength: v4, className: "lf-get-text-height" }), g4 = n4.height > b4 ? n4.height : b4;
                d4 && (g4 = d4);
                var m4 = s4 === "ellipsis";
                return Object(Q.g)("g", null, Object(Q.g)("foreignObject", { width: y4, height: g4, x: l4 - y4 / 2, y: f3 - g4 / 2 }, Object(Q.g)("div", { className: "lf-node-text-auto-wrap", style: { minHeight: g4, width: y4, padding: c4 } }, Object(Q.g)("div", { className: m4 ? "lf-node-text-ellipsis-content" : "lf-node-text-auto-wrap-content", style: Ey({}, t4) }, h4.map(function(t5) {
                  return Object(Q.g)("div", { className: "lf-node-text--auto-wrap-inner" }, t5);
                })))));
              }(t3);
          }
          if (v3 > 1) {
            var m3 = h3.map(function(t4, e4) {
              var n4 = (e4 - (v3 - 1) / 2) * (a3 + 2);
              return Object(Q.g)("tspan", { className: "lf-text-tspan", x: r3, y: o3 + n4 }, t4);
            });
            return Object(Q.g)("text", y3, m3);
          }
          return Object(Q.g)("text", y3, i2);
        }
      }
      function Dy(t3) {
        return (Dy = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Ty() {
        return (Ty = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function My(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Ny(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Ny(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Ny(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Cy(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ry(t3, e3) {
        return (Ry = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Iy(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = By(t3);
          if (e3) {
            var o3 = By(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Ly(this, r3);
        };
      }
      function Ly(t3, e3) {
        if (e3 && (Dy(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return zy(t3);
      }
      function zy(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function By(t3) {
        return (By = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Xy(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Hy = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ry(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Iy(i2);
        function i2(t4) {
          var e4;
          !function(t5, e5) {
            if (!(t5 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), Xy(zy(e4 = o3.call(this)), "dragHandler", void 0), Xy(zy(e4), "sumDeltaX", 0), Xy(zy(e4), "sumDeltaY", 0), Xy(zy(e4), "stepDrag", void 0), Xy(zy(e4), "onDraging", function(t5) {
            var r5 = t5.deltaX, n4 = t5.deltaY, o4 = e4.props, i3 = o4.model, a3 = My(o4.graphModel.transformModel.fixDeltaXY(r5, n4), 2), u3 = a3[0], c3 = a3[1];
            i3.moveText(u3, c3);
          }), Xy(zy(e4), "dblClickHandler", function() {
            e4.props.editable && e4.props.model.setElementState(Zn.TEXT_EDIT);
          }), Xy(zy(e4), "mouseDownHandle", function(t5) {
            var r5 = e4.props, n4 = r5.draggable, o4 = r5.graphModel.editConfigModel.nodeTextDraggable;
            (n4 || o4) && e4.stepDrag.handleMouseDown(t5);
          });
          var r4 = t4.model, n3 = t4.draggable;
          return e4.stepDrag = new mc({ onDraging: e4.onDraging, step: 1, model: r4, isStopPropagation: n3 }), e4;
        }
        return e3 = i2, (r3 = [{ key: "getShape", value: function() {
          var t4 = this.props.model, e4 = t4.text, r4 = e4.value, n3 = { x: e4.x, y: e4.y, className: "lf-element-text", value: r4 }, o4 = t4.getTextStyle();
          return Object(Q.g)(Ay, Ty({}, n3, o4, { model: t4 }));
        } }, { key: "render", value: function() {
          if (this.props.model.text)
            return Object(Q.g)("g", { onMouseDown: this.mouseDownHandle, onDblClick: this.dblClickHandler }, this.getShape());
        } }]) && Cy(e3.prototype, r3), i2;
      }(Q.a), Uy = window.navigator.userAgent.match(/MSIE|Trident/) !== null;
      function Gy(t3) {
        return (Gy = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Fy() {
        return (Fy = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Yy(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Vy(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Vy(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Vy(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Wy(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ky(t3, e3) {
        return (Ky = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function $y(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Jy(t3);
          if (e3) {
            var o3 = Jy(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Zy(this, r3);
        };
      }
      function Zy(t3, e3) {
        if (e3 && (Gy(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return qy(t3);
      }
      function qy(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Jy(t3) {
        return (Jy = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Qy(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var th = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ky(t4, e4);
        }(i2, t3);
        var e3, r3, n3, o3 = $y(i2);
        function i2(t4) {
          var e4;
          !function(t5, e5) {
            if (!(t5 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), Qy(qy(e4 = o3.call(this)), "stepDrag", void 0), Qy(qy(e4), "contextMenuTime", void 0), Qy(qy(e4), "startTime", void 0), Qy(qy(e4), "clickTimer", void 0), Qy(qy(e4), "onDraging", function(t5) {
            var r5 = t5.deltaX, n5 = t5.deltaY, o4 = e4.props, i3 = o4.model, a4 = o4.graphModel;
            e4.state.isDraging || e4.setState({ isDraging: true });
            var u4 = Yy(a4.transformModel.fixDeltaXY(r5, n5), 2), c3 = u4[0], s3 = u4[1];
            a4.moveNode(i3.id, c3, s3);
          }), Qy(qy(e4), "onDragEnd", function() {
            e4.props.model.isDragging = false;
          }), Qy(qy(e4), "handleClick", function(t5) {
            if (e4.startTime && !(new Date().getTime() - e4.startTime > 200)) {
              var r5 = e4.props, n5 = r5.model, o4 = r5.graphModel, i3 = { data: n5.getData(), e: t5, position: o4.getPointByClient({ x: t5.clientX, y: t5.clientY }) }, a4 = t5.button === 2, u4 = t5.detail === 2;
              if (!a4) {
                var c3 = o4.editConfigModel;
                o4.selectNodeById(n5.id, ki(t5, c3)), e4.toFront(), u4 ? (c3.nodeTextEdit && n5.text.editable && (n5.setSelected(false), o4.setElementStateById(n5.id, Zn.TEXT_EDIT)), o4.eventCenter.emit(to.NODE_DBCLICK, i3)) : (o4.eventCenter.emit(to.ELEMENT_CLICK, i3), o4.eventCenter.emit(to.NODE_CLICK, i3));
              }
            }
          }), Qy(qy(e4), "handleContextMenu", function(t5) {
            t5.preventDefault();
            var r5 = e4.props, n5 = r5.model, o4 = r5.graphModel, i3 = n5.getData(), a4 = o4.getPointByClient({ x: t5.clientX, y: t5.clientY });
            o4.setElementStateById(n5.id, Zn.SHOW_MENU, a4.domOverlayPosition), o4.selectNodeById(n5.id), o4.eventCenter.emit(to.NODE_CONTEXTMENU, { data: i3, e: t5, position: a4 }), e4.toFront();
          }), Qy(qy(e4), "handleMouseDown", function(t5) {
            var r5 = e4.props, n5 = r5.model, o4 = r5.graphModel;
            e4.toFront(), e4.startTime = new Date().getTime(), o4.editConfigModel.adjustNodePosition && n5.draggable && e4.stepDrag && e4.stepDrag.handleMouseDown(t5);
          }), Qy(qy(e4), "setHoverON", function(t5) {
            if (!e4.state.isHovered) {
              e4.setState({ isHovered: true });
              var r5 = e4.props, n5 = r5.model, o4 = r5.graphModel, i3 = n5.getData();
              n5.setHovered(true), o4.eventCenter.emit(to.NODE_MOUSEENTER, { data: i3, e: t5 });
            }
          }), Qy(qy(e4), "setHoverOFF", function(t5) {
            e4.setState({ isHovered: false });
            var r5 = e4.props, n5 = r5.model, o4 = r5.graphModel, i3 = n5.getData();
            n5.setHovered(false), o4.eventCenter.emit(to.NODE_MOUSELEAVE, { data: i3, e: t5 });
          }), Qy(qy(e4), "onMouseOut", function(t5) {
            Uy && e4.setHoverOFF(t5);
          });
          var r4 = t4.graphModel, n4 = r4.gridSize, a3 = r4.eventCenter, u3 = t4.model;
          return e4.stepDrag = new mc({ onDraging: e4.onDraging, onDragEnd: e4.onDragEnd, step: n4, eventType: "NODE", eventCenter: a3, model: u3 }), e4.state = { isHovered: false }, e4;
        }
        return e3 = i2, n3 = [{ key: "getModel", value: function(t4) {
          return t4;
        } }], (r3 = [{ key: "getAnchors", value: function() {
          var t4 = this, e4 = this.props, r4 = e4.model, n4 = e4.graphModel, o4 = r4.isSelected, i3 = r4.isHitable, a3 = r4.isDragging, u3 = this.state.isHovered;
          if (i3 && (o4 || u3)) {
            var c3 = r4.getAnchorStyle(), s3 = r4.getAnchorLineStyle();
            return nn(r4.anchors, function(e5, o5) {
              return Object(Q.g)(_y, Fy({}, e5, { anchorData: e5, nodeDraging: a3, style: c3, edgeStyle: s3, anchorIndex: o5, nodeModel: r4, graphModel: n4, setHoverOFF: t4.setHoverOFF }));
            });
          }
          return [];
        } }, { key: "getText", value: function() {
          var t4 = this.props, e4 = t4.model, r4 = t4.graphModel;
          if (e4.state === Zn.TEXT_EDIT)
            return "";
          if (e4.text) {
            var n4 = r4.editConfigModel, o4 = false;
            return (e4.text.draggable || n4.nodeTextDraggable) && (o4 = true), Object(Q.g)(Hy, { editable: n4.nodeTextEdit && e4.text.editable, model: e4, graphModel: r4, draggable: o4 });
          }
        } }, { key: "getStateClassName", value: function() {
          var t4 = this.props.model, e4 = t4.state, r4 = t4.isDraging, n4 = "lf-node";
          switch (e4) {
            case Zn.ALLOW_CONNECT:
              n4 += " lf-node-allow";
              break;
            case Zn.NOT_ALLOW_CONNECT:
              n4 += " lf-node-not-allow";
              break;
            default:
              n4 += " lf-node-default";
          }
          return r4 && (n4 += " lf-isDragging"), n4;
        } }, { key: "toFront", value: function() {
          var t4 = this.props, e4 = t4.model, r4 = t4.graphModel;
          r4.overlapMode !== io.INCREASE && e4.autoToFront && r4.toFront(e4.id);
        } }, { key: "render", value: function() {
          var t4, e4 = this.props, r4 = e4.model, n4 = e4.graphModel, o4 = n4.editConfigModel, i3 = o4.hideAnchors, a3 = o4.adjustNodePosition, u3 = n4.gridSize, c3 = n4.transformModel.SCALE_X, s3 = r4.isHitable, l3 = r4.draggable, f2 = Object(Q.g)("g", { className: "lf-node-content" }, this.getShape(), this.getText(), i3 ? null : this.getAnchors());
          return s3 ? (a3 && l3 && this.stepDrag.setStep(u3 * c3), t4 = Object(Q.g)("g", { className: this.getStateClassName(), onMouseDown: this.handleMouseDown, onMouseUp: this.handleClick, onMouseEnter: this.setHoverON, onMouseOver: this.setHoverON, onMouseLeave: this.setHoverOFF, onMouseOut: this.onMouseOut, onContextMenu: this.handleContextMenu }, f2)) : t4 = Object(Q.g)("g", { className: this.getStateClassName() }, f2), t4;
        } }]) && Wy(e3.prototype, r3), n3 && Wy(e3, n3), i2;
      }(Q.a);
      function eh(t3) {
        return (eh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function rh() {
        return (rh = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function nh(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function oh(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function ih(t3, e3) {
        return (ih = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function ah(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = ch(t3);
          if (e3) {
            var o3 = ch(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return uh(this, r3);
        };
      }
      function uh(t3, e3) {
        if (e3 && (eh(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function ch(t3) {
        return (ch = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var sh = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && ih(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = ah(i2);
        function i2() {
          return nh(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getShape", value: function() {
          var t4 = this.props.model, e4 = t4.getNodeStyle();
          return Object(Q.g)(Xs, rh({}, e4, { x: t4.x, y: t4.y, width: t4.width, height: t4.height, radius: t4.radius }));
        } }]) && oh(e3.prototype, r3), i2;
      }(th);
      function lh(t3) {
        return (lh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function fh() {
        return (fh = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function ph(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function dh(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function yh(t3, e3) {
        return (yh = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function hh(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = bh(t3);
          if (e3) {
            var o3 = bh(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return vh(this, r3);
        };
      }
      function vh(t3, e3) {
        if (e3 && (lh(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function bh(t3) {
        return (bh = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var gh = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && yh(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = hh(i2);
        function i2() {
          return ph(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getShape", value: function() {
          var t4 = this.props.model, e4 = t4.x, r4 = t4.y, n3 = t4.r, o4 = t4.getNodeStyle();
          return Object(Q.g)(nl, fh({}, o4, { x: e4, y: r4, r: n3 }));
        } }]) && dh(e3.prototype, r3), i2;
      }(th);
      function mh(t3) {
        return (mh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Oh(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return wh(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return wh(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function wh(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function _h(t3) {
        var e3 = t3.points, r3 = t3.className, n3 = { fill: "transparent", fillOpacity: 1, strokeWidth: 1, stroke: "#000", strokeOpacity: 1, points: "", className: "lf-basic-shape ".concat(r3) };
        return Object.entries(t3).forEach(function(t4) {
          var e4 = Oh(t4, 2), r4 = e4[0], o3 = e4[1];
          mh(o3) !== "object" && (n3[r4] = o3);
        }), n3.points = e3.map(function(t4) {
          return t4.join(",");
        }).join(" "), Object(Q.g)("polygon", n3);
      }
      function jh(t3) {
        return (jh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Eh() {
        return (Eh = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function xh(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Sh(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ph(t3, e3) {
        return (Ph = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function kh(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Dh(t3);
          if (e3) {
            var o3 = Dh(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Ah(this, r3);
        };
      }
      function Ah(t3, e3) {
        if (e3 && (jh(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function Dh(t3) {
        return (Dh = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var Th = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ph(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = kh(i2);
        function i2() {
          return xh(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getShape", value: function() {
          var t4 = this.props.model, e4 = t4.x, r4 = t4.y, n3 = t4.width, o4 = t4.height, i3 = t4.points, a3 = t4.getNodeStyle(), u3 = { transform: "matrix(1 0 0 1 ".concat(e4 - n3 / 2, " ").concat(r4 - o4 / 2, ")") };
          return Object(Q.g)("g", u3, Object(Q.g)(_h, Eh({}, a3, { points: i3, x: e4, y: r4 })));
        } }]) && Sh(e3.prototype, r3), i2;
      }(th);
      function Mh(t3) {
        return (Mh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Nh() {
        return (Nh = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Ch(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Rh(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ih(t3, e3) {
        return (Ih = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Lh(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Bh(t3);
          if (e3) {
            var o3 = Bh(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return zh(this, r3);
        };
      }
      function zh(t3, e3) {
        if (e3 && (Mh(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function Bh(t3) {
        return (Bh = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var Xh = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ih(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Lh(i2);
        function i2() {
          return Ch(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getShape", value: function() {
          var t4 = this.props.model, e4 = t4.getNodeStyle();
          return Object(Q.g)("g", null, Object(Q.g)(_h, Nh({}, e4, { points: t4.points, x: t4.x, y: t4.y })));
        } }]) && Rh(e3.prototype, r3), i2;
      }(th);
      function Hh(t3) {
        return (Hh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Uh(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Gh(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Gh(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Gh(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Fh(t3) {
        var e3 = t3.x, r3 = e3 === void 0 ? 0 : e3, n3 = t3.y, o3 = n3 === void 0 ? 0 : n3, i2 = t3.rx, a3 = i2 === void 0 ? 4 : i2, u3 = t3.ry, c3 = { cx: r3, cy: o3, rx: a3, ry: u3 === void 0 ? 4 : u3, fill: "transparent", fillOpacity: 1, strokeWidth: "1", stroke: "#000", strokeOpacity: 1 };
        return Object.entries(t3).forEach(function(t4) {
          var e4 = Uh(t4, 2), r4 = e4[0], n4 = e4[1];
          Hh(n4) !== "object" && (c3[r4] = n4);
        }), Object(Q.g)("ellipse", c3);
      }
      function Yh(t3) {
        return (Yh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Vh() {
        return (Vh = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Wh(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Kh(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function $h(t3, e3) {
        return ($h = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Zh(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Jh(t3);
          if (e3) {
            var o3 = Jh(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return qh(this, r3);
        };
      }
      function qh(t3, e3) {
        if (e3 && (Yh(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function Jh(t3) {
        return (Jh = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var Qh = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && $h(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Zh(i2);
        function i2() {
          return Wh(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getShape", value: function() {
          var t4 = this.props.model, e4 = t4.getNodeStyle();
          return Object(Q.g)(Fh, Vh({}, e4, { x: t4.x, y: t4.y, rx: t4.rx, ry: t4.ry }));
        } }]) && Kh(e3.prototype, r3), i2;
      }(th);
      function tv(t3) {
        return (tv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function ev(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function rv(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? ev(Object(r3), true).forEach(function(e4) {
            nv(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : ev(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function nv(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function ov(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function iv(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function av(t3, e3) {
        return (av = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function uv(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = sv(t3);
          if (e3) {
            var o3 = sv(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return cv(this, r3);
        };
      }
      function cv(t3, e3) {
        if (e3 && (tv(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function sv(t3) {
        return (sv = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var lv = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && av(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = uv(i2);
        function i2() {
          return ov(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getBackgroud", value: function() {
          var t4 = this.props.model, e4 = t4.getTextStyle(), r4 = t4.text;
          if (r4 && r4.value && e4.background && e4.background.fill !== "transparnet") {
            var n3 = r4.x, o4 = r4.y, i3 = t4.width, a3 = t4.height, u3 = rv(rv({}, e4.background), {}, { x: n3, y: o4 - 1, width: i3, height: a3 });
            return Object(Q.g)(Xs, u3);
          }
        } }, { key: "getShape", value: function() {
          return Object(Q.g)("g", null, this.getBackgroud());
        } }]) && iv(e3.prototype, r3), i2;
      }(th);
      function fv(t3) {
        return (fv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function pv(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function dv(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function yv(t3, e3) {
        return (yv = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function hv(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = gv(t3);
          if (e3) {
            var o3 = gv(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return vv(this, r3);
        };
      }
      function vv(t3, e3) {
        if (e3 && (fv(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return bv(t3);
      }
      function bv(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function gv(t3) {
        return (gv = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function mv(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Ov = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && yv(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = hv(i2);
        function i2() {
          var t4;
          pv(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return mv(bv(t4 = o3.call.apply(o3, [this].concat(r4))), "ref", void 0), mv(bv(t4), "currrentProperties", void 0), mv(bv(t4), "preProperties", void 0), mv(bv(t4), "setRef", function(e5) {
            t4.ref = e5;
          }), t4;
        }
        return e3 = i2, (r3 = [{ key: "rootEl", get: function() {
          return this.ref;
        } }, { key: "setHtml", value: function(t4) {
          t4.appendChild(document.createElement("div"));
        } }, { key: "shouldUpdate", value: function() {
          if (!this.preProperties || this.preProperties !== this.currrentProperties)
            return this.preProperties = this.currrentProperties, true;
        } }, { key: "componentDidMount", value: function() {
          this.shouldUpdate() && this.setHtml(this.rootEl);
        } }, { key: "componentDidUpdate", value: function() {
          this.shouldUpdate() && this.setHtml(this.rootEl);
        } }, { key: "getShape", value: function() {
          var t4 = this.props.model, e4 = t4.x, r4 = t4.y, n3 = t4.height, o4 = t4.width;
          return this.currrentProperties = JSON.stringify(t4.properties), Object(Q.g)("foreignObject", { x: e4 - o4 / 2, y: r4 - n3 / 2, width: o4, height: n3, ref: this.setRef });
        } }]) && dv(e3.prototype, r3), i2;
      }(th);
      function wv(t3) {
        return (wv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function _v(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return jv(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return jv(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function jv(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      var Ev = function(t3) {
        var e3 = { d: "" };
        return Object.entries(t3).forEach(function(t4) {
          var r3 = _v(t4, 2), n3 = r3[0], o3 = r3[1];
          wv(o3) !== "object" && (e3[n3] = o3);
        }), Object(Q.g)("path", e3);
      };
      function xv(t3) {
        return (xv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Sv(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Pv(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      function kv(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Av(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Dv(t3, e3) {
        return (Dv = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Tv(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Nv(t3);
          if (e3) {
            var o3 = Nv(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Mv(this, r3);
        };
      }
      function Mv(t3, e3) {
        if (e3 && (xv(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function Nv(t3) {
        return (Nv = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var Cv = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Dv(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Tv(i2);
        function i2() {
          return kv(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getArrowAttributes", value: function() {
          var t4 = this.props, e4 = t4.arrowInfo, r4 = t4.style, n3 = e4.start, o4 = e4.end, i3 = { start: n3, end: o4, offset: r4.offset, verticalLength: r4.verticalLength, type: "end" }, a3 = vu(i3), u3 = a3.leftX, c3 = a3.leftY, s3 = a3.rightX, l3 = a3.rightY;
          return function(t5) {
            for (var e5 = 1; e5 < arguments.length; e5++) {
              var r5 = arguments[e5] != null ? arguments[e5] : {};
              e5 % 2 ? Sv(Object(r5), true).forEach(function(e6) {
                Pv(t5, e6, r5[e6]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t5, Object.getOwnPropertyDescriptors(r5)) : Sv(Object(r5)).forEach(function(e6) {
                Object.defineProperty(t5, e6, Object.getOwnPropertyDescriptor(r5, e6));
              });
            }
            return t5;
          }({ d: "M".concat(u3, " ").concat(c3, " L").concat(o4.x, " ").concat(o4.y, " L").concat(s3, " ").concat(l3, " z") }, r4);
        } }, { key: "getShape", value: function() {
          var t4 = this.getArrowAttributes(), e4 = t4.d, r4 = t4.strokeWidth, n3 = t4.stroke, o4 = t4.fill;
          return Object(Q.g)(Ev, { d: e4, fill: o4, strokeWidth: r4, stroke: n3 });
        } }, { key: "render", value: function() {
          return Object(Q.g)("g", { className: "lf-arrow" }, this.getShape());
        } }]) && Av(e3.prototype, r3), i2;
      }(Q.a);
      function Rv(t3) {
        return (Rv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Iv() {
        return (Iv = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Lv(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function zv(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Lv(Object(r3), true).forEach(function(e4) {
            Yv(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Lv(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Bv(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Xv(t3, e3) {
        return (Xv = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Hv(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Fv(t3);
          if (e3) {
            var o3 = Fv(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Uv(this, r3);
        };
      }
      function Uv(t3, e3) {
        if (e3 && (Rv(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Gv(t3);
      }
      function Gv(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Fv(t3) {
        return (Fv = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Yv(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Vv, Wv = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Xv(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Hv(i2);
        function i2(t4) {
          var e4;
          return function(t5, e5) {
            if (!(t5 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), Yv(Gv(e4 = o3.call(this, t4)), "setHoverON", function() {
            e4.setState({ isHoverd: true });
          }), Yv(Gv(e4), "setHoverOFF", function() {
            e4.setState({ isHoverd: false });
          }), e4.state = { isHoverd: false }, e4;
        }
        return e3 = i2, (r3 = [{ key: "getBackgroud", value: function() {
          var t4 = this.props.model, e4 = t4.getTextStyle(), r4 = t4.text, n3 = e4.background || {};
          if (this.state.isHoverd && e4.hover && e4.hover.background && (n3 = zv(zv({}, n3), e4.hover.background)), r4 && r4.value && n3.fill !== "transparnet") {
            var o4, i3 = e4.fontSize, a3 = e4.overflowMode, u3 = e4.lineHeight, c3 = e4.wrapPadding, s3 = e4.textWidth, l3 = r4.value, f2 = r4.x, p2 = r4.y, d3 = String(l3).split(/[\r\n]/g), y3 = d3.length;
            if (a3 === "autoWrap" && s3) {
              var h3 = wa({ rows: d3, style: { fontSize: "".concat(i3, "px"), width: "".concat(s3, "px"), lineHeight: u3, padding: c3 }, rowsLength: y3, className: "lf-get-text-height" });
              o4 = zv(zv({}, n3), {}, { x: f2 - 1, y: p2 - 1, width: s3, height: h3 });
            } else {
              d3 && d3.forEach(function(t5) {
                Ku(t5);
              });
              var b3 = _a({ rows: d3, fontSize: i3, rowsLength: y3 }), g3 = b3.width, m3 = b3.height;
              o4 = zv(zv({}, n3), {}, { x: f2 - 1, y: p2 - 1, width: g3, height: m3 });
            }
            return Object(Q.g)(Xs, o4);
          }
        } }, { key: "getShape", value: function() {
          var t4 = this.props.model, e4 = t4.text, r4 = e4.value, n3 = e4.x, o4 = e4.y;
          if (r4) {
            var i3 = zv({ x: n3, y: o4, className: "lf-element-text", value: r4 }, t4.getTextStyle());
            return Object(Q.g)("g", { className: "lf-line-text", onMouseEnter: this.setHoverON, onMouseLeave: this.setHoverOFF }, this.getBackgroud(), Object(Q.g)(Ay, Iv({}, i3, { model: t4 })));
          }
        } }]) && Bv(e3.prototype, r3), i2;
      }(Hy);
      function Kv(t3) {
        return (Kv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function $v() {
        return ($v = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Zv(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function qv(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Zv(Object(r3), true).forEach(function(e4) {
            ab(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Zv(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Jv(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Qv(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Qv(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Qv(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function tb(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function eb(t3, e3) {
        return (eb = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function rb(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = ib(t3);
          if (e3) {
            var o3 = ib(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return nb(this, r3);
        };
      }
      function nb(t3, e3) {
        if (e3 && (Kv(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return ob(t3);
      }
      function ob(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function ib(t3) {
        return (ib = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function ab(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      !function(t3) {
        t3.SOURCE = "SOURCE", t3.TARGET = "TARGET";
      }(Vv || (Vv = {}));
      var ub = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && eb(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = rb(i2);
        function i2() {
          var t4;
          return function(t5, e4) {
            if (!(t5 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), ab(ob(t4 = o3.call(this)), "dragHandler", void 0), ab(ob(t4), "oldEdge", void 0), ab(ob(t4), "onDragStart", function() {
            var e4 = t4.props, r4 = e4.x, n3 = e4.y, o4 = e4.edgeModel, i3 = o4.startPoint, a3 = o4.endPoint, u3 = o4.pointsList;
            t4.oldEdge = { startPoint: i3, endPoint: a3, pointsList: u3 }, t4.setState({ endX: r4, endY: n3, draging: true });
          }), ab(ob(t4), "onDraging", function(e4) {
            var r4 = e4.deltaX, n3 = e4.deltaY, o4 = t4.state, i3 = o4.endX, a3 = o4.endY, u3 = t4.props, c3 = u3.graphModel, s3 = u3.type, l3 = Jv(c3.transformModel.moveCanvasPointByHtml([i3, a3], r4, n3), 2), f2 = l3[0], p2 = l3[1];
            t4.setState({ endX: f2, endY: p2, draging: true });
            var d3 = t4.props.edgeModel, y3 = ca({ x: i3, y: a3 }, c3);
            if (y3 && y3.node) {
              var h3, v3 = d3.startPoint, b3 = d3.endPoint, g3 = d3.sourceNode, m3 = d3.targetNode;
              s3 === Vv.SOURCE ? h3 = { startPoint: { x: y3.anchor.x, y: y3.anchor.y }, endPoint: { x: b3.x, y: b3.y }, sourceNode: y3.node, targetNode: m3 } : s3 === Vv.TARGET && (h3 = { startPoint: { x: v3.x, y: v3.y }, endPoint: { x: y3.anchor.x, y: y3.anchor.y }, sourceNode: g3, targetNode: y3.node }), d3.updateAfterAdjustStartAndEnd(h3);
            } else
              s3 === Vv.SOURCE ? d3.updateStartPoint({ x: f2, y: p2 }) : s3 === Vv.TARGET && d3.updateEndPoint({ x: f2, y: p2 });
          }), ab(ob(t4), "onDragEnd", function() {
            t4.setState({ draging: false });
            var e4 = t4.props, r4 = e4.graphModel, n3 = e4.edgeModel, o4 = e4.type, i3 = t4.state, a3 = i3.endX, u3 = i3.endY, c3 = i3.draging, s3 = ca({ x: a3, y: u3 }, r4);
            if (c3)
              if (s3 && s3.node) {
                var l3, f2 = n3.getData(), p2 = qv(qv({}, f2), {}, { sourceAnchorId: "", targetAnchorId: "", text: (f2 == null || (l3 = f2.text) === null || l3 === void 0 ? void 0 : l3.value) || "" });
                o4 === Vv.SOURCE ? p2 = qv(qv({}, p2), {}, { sourceNodeId: s3.node.id, sourceAnchorId: s3.anchor.id, startPoint: { x: s3.anchor.x, y: s3.anchor.y }, targetNodeId: n3.targetNodeId, endPoint: qv({}, n3.endPoint) }) : o4 === Vv.TARGET && (p2 = qv(qv({}, p2), {}, { sourceNodeId: n3.sourceNodeId, startPoint: qv({}, n3.startPoint), targetNodeId: s3.node.id, targetAnchorId: s3.anchor.id, endPoint: { x: s3.anchor.x, y: s3.anchor.y } })), r4.deleteEdgeById(n3.id);
                var d3 = r4.addEdge(qv({}, p2));
                r4.eventCenter.emit(to.EDGE_EXCHANGE_NODE, { data: { newEdge: d3.getData(), oldEdge: n3.getData() } });
              } else
                t4.recoveryEdge();
          }), ab(ob(t4), "recoveryEdge", function() {
            var e4 = t4.props.edgeModel, r4 = t4.oldEdge, n3 = r4.startPoint, o4 = r4.endPoint, i3 = r4.pointsList;
            e4.updateStartPoint(n3), e4.updateEndPoint(o4), e4.modelType !== Jn.LINE_EDGE && (e4.pointsList = i3, e4.initPoints());
          }), ab(ob(t4), "getAdjustPointStyle", function() {
            return t4.props.graphModel.theme.edgeAdjust;
          }), t4.state = { draging: false, endX: 0, endY: 0 }, t4.dragHandler = ic({ onDragStart: t4.onDragStart, onDraging: t4.onDraging, onDragEnd: t4.onDragEnd }), t4;
        }
        return e3 = i2, (r3 = [{ key: "render", value: function() {
          var t4 = this.props, e4 = t4.x, r4 = t4.y, n3 = this.state.draging, o4 = this.getAdjustPointStyle();
          return Object(Q.g)("g", null, Object(Q.g)(nl, $v({ className: "lf-edge-adjust-point" }, o4, { x: e4, y: r4, onMouseDown: this.dragHandler, "pointer-events": n3 ? "none" : "" })));
        } }]) && tb(e3.prototype, r3), i2;
      }(Q.a);
      function cb(t3) {
        return (cb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function sb() {
        return (sb = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function lb(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function fb(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? lb(Object(r3), true).forEach(function(e4) {
            mb(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : lb(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function pb(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function db(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function yb(t3, e3) {
        return (yb = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function hb(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = gb(t3);
          if (e3) {
            var o3 = gb(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return vb(this, r3);
        };
      }
      function vb(t3, e3) {
        if (e3 && (cb(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return bb(t3);
      }
      function bb(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function gb(t3) {
        return (gb = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function mb(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Ob = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && yb(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = hb(i2);
        function i2() {
          var t4;
          pb(this, i2);
          for (var e4 = arguments.length, r4 = new Array(e4), n3 = 0; n3 < e4; n3++)
            r4[n3] = arguments[n3];
          return mb(bb(t4 = o3.call.apply(o3, [this].concat(r4))), "startTime", void 0), mb(bb(t4), "contextMenuTime", void 0), mb(bb(t4), "clickTimer", void 0), mb(bb(t4), "handleHover", function(e5, r5) {
            var n4 = t4.props, o4 = n4.model, i3 = n4.graphModel.eventCenter;
            o4.setHovered(e5);
            var a3 = e5 ? to.EDGE_MOUSEENTER : to.EDGE_MOUSELEAVE, u3 = o4.getData();
            i3.emit(a3, { data: u3, e: r5 });
          }), mb(bb(t4), "setHoverON", function(e5) {
            t4.handleHover(true, e5);
          }), mb(bb(t4), "setHoverOFF", function(e5) {
            t4.handleHover(false, e5);
          }), mb(bb(t4), "handleContextMenu", function(e5) {
            e5.preventDefault(), t4.contextMenuTime = new Date().getTime(), t4.clickTimer && clearTimeout(t4.clickTimer);
            var r5 = t4.props, n4 = r5.model, o4 = r5.graphModel, i3 = o4.getPointByClient({ x: e5.clientX, y: e5.clientY });
            o4.setElementStateById(n4.id, Zn.SHOW_MENU, i3.domOverlayPosition), t4.toFront(), o4.selectEdgeById(n4.id);
            var a3 = n4 == null ? void 0 : n4.getData();
            o4.eventCenter.emit(to.EDGE_CONTEXTMENU, { data: a3, e: e5, position: i3 });
          }), mb(bb(t4), "handleMouseDown", function(e5) {
            e5.stopPropagation(), t4.startTime = new Date().getTime();
          }), mb(bb(t4), "handleMouseUp", function(e5) {
            if (t4.startTime && !(new Date().getTime() - t4.startTime > 200 || e5.button === 2)) {
              var r5 = e5.detail === 2, n4 = t4.props, o4 = n4.model, i3 = n4.graphModel, a3 = o4 == null ? void 0 : o4.getData(), u3 = i3.getPointByClient({ x: e5.clientX, y: e5.clientY });
              if (r5) {
                var c3 = i3.editConfigModel, s3 = i3.textEditElement;
                if (s3 && s3.id === o4.id && i3.setElementStateById(o4.id, Zn.DEFAULT), c3.edgeTextEdit && o4.text.editable && i3.setElementStateById(o4.id, Zn.TEXT_EDIT), o4.modelType === Jn.POLYLINE_EDGE) {
                  var l3 = o4, f2 = i3.getPointByClient({ x: e5.x, y: e5.y }).canvasOverlayPosition, p2 = f2.x, d3 = f2.y, y3 = Ju({ x: p2, y: d3 }, l3.points);
                  l3.dbClickPosition = y3;
                }
                i3.eventCenter.emit(to.EDGE_DBCLICK, { data: a3, e: e5, position: u3 });
              } else
                i3.eventCenter.emit(to.ELEMENT_CLICK, { data: a3, e: e5, position: u3 }), i3.eventCenter.emit(to.EDGE_CLICK, { data: a3, e: e5, position: u3 });
              var h3 = i3.editConfigModel;
              i3.selectEdgeById(o4.id, ki(e5, h3)), t4.toFront();
            }
          }), mb(bb(t4), "getIsDraging", function() {
            return false;
          }), t4;
        }
        return e3 = i2, (r3 = [{ key: "getShape", value: function() {
        } }, { key: "getTextStyle", value: function() {
        } }, { key: "getText", value: function() {
          var t4 = this.props, e4 = t4.model, r4 = t4.graphModel;
          if (e4.state === Zn.TEXT_EDIT)
            return "";
          var n3 = false, o4 = r4.editConfigModel;
          return (e4.text.draggable || o4.edgeTextDraggable) && (n3 = true), Object(Q.g)(Wv, { editable: o4.edgeTextEdit && e4.text.editable, model: e4, graphModel: r4, draggable: n3 });
        } }, { key: "getArrowInfo", value: function() {
          var t4 = this.props.model, e4 = t4.startPoint, r4 = t4.endPoint, n3 = t4.isSelected;
          return { start: e4, end: r4, hover: this.state.hover, isSelected: n3 };
        } }, { key: "getArrowStyle", value: function() {
          var t4 = this.props, e4 = t4.model, r4 = t4.graphModel, n3 = e4.getEdgeStyle(), o4 = r4.theme.arrow;
          return fb(fb({}, n3), {}, { fill: n3.stroke }, o4);
        } }, { key: "getArrow", value: function() {
          var t4 = this.getArrowInfo(), e4 = t4.start, r4 = t4.end;
          if (e4 && r4 && (e4.x !== r4.x || e4.y !== r4.y)) {
            var n3 = this.getArrowStyle();
            return Object(Q.g)(Cv, { arrowInfo: t4, style: n3 });
          }
        } }, { key: "getAdjustPoints", value: function() {
          var t4 = this.props, e4 = t4.model, r4 = t4.graphModel, n3 = e4.getAdjustStart(), o4 = e4.getAdjustEnd();
          return Object(Q.g)("g", null, Object(Q.g)(ub, sb({ type: "SOURCE" }, n3, { edgeModel: e4, graphModel: r4 })), Object(Q.g)(ub, sb({ type: "TARGET" }, o4, { edgeModel: e4, graphModel: r4 })));
        } }, { key: "getAppendWidth", value: function() {
          return Object(Q.g)("g", null);
        } }, { key: "getAppend", value: function() {
          return Object(Q.g)("g", { className: "lf-edge-append" }, this.getAppendWidth());
        } }, { key: "toFront", value: function() {
          var t4 = this.props, e4 = t4.graphModel, r4 = t4.model;
          e4.overlapMode !== io.INCREASE && e4.toFront(r4.id);
        } }, { key: "render", value: function() {
          var t4 = this.props, e4 = t4.model.isSelected, r4 = t4.graphModel.editConfigModel, n3 = this.getIsDraging(), o4 = r4.adjustEdgeStartAndEnd;
          return Object(Q.g)("g", { className: "lf-edge", onMouseDown: this.handleMouseDown, onMouseUp: this.handleMouseUp, onContextMenu: this.handleContextMenu, onMouseOver: this.setHoverON, onMouseEnter: this.setHoverON, onMouseLeave: this.setHoverOFF }, this.getShape(), this.getAppend(), this.getText(), this.getArrow(), o4 && e4 && !n3 ? this.getAdjustPoints() : "");
        } }]) && db(e3.prototype, r3), i2;
      }(Q.a);
      function wb(t3) {
        return (wb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function _b() {
        return (_b = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function jb(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Eb(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function xb(t3, e3) {
        return (xb = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Sb(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = kb(t3);
          if (e3) {
            var o3 = kb(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Pb(this, r3);
        };
      }
      function Pb(t3, e3) {
        if (e3 && (wb(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function kb(t3) {
        return (kb = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var Ab = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && xb(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Sb(i2);
        function i2() {
          return jb(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getEdge", value: function() {
          var t4 = this.props.model, e4 = t4.startPoint, r4 = t4.endPoint, n3 = t4.getEdgeStyle();
          return Object(Q.g)(Es, _b({}, n3, { x1: e4.x, y1: e4.y, x2: r4.x, y2: r4.y }));
        } }, { key: "getShape", value: function() {
          return Object(Q.g)("g", null, this.getEdge());
        } }, { key: "getAppendWidth", value: function() {
          var t4 = this.props.model, e4 = function(t5) {
            var e5, r5 = t5.start, n4 = t5.end;
            if (r5.x === n4.x && r5.y === n4.y)
              e5 = "";
            else {
              var o5 = { start: r5, end: n4, offset: 10, verticalLength: 5 }, i4 = vu(gu(gu({}, o5), {}, { type: "start" })), a4 = vu(gu(gu({}, o5), {}, { type: "end" }));
              e5 = "M".concat(i4.leftX, " ").concat(i4.leftY, " \n    L").concat(i4.rightX, " ").concat(i4.rightY, " \n    L").concat(a4.rightX, " ").concat(a4.rightY, "\n    L").concat(a4.leftX, " ").concat(a4.leftY, " z");
            }
            return { d: e5, fill: "transparent", stroke: "transparent", strokeWidth: 1, strokeDasharray: "4, 4" };
          }({ start: t4.startPoint, end: t4.endPoint }), r4 = e4.d, n3 = e4.strokeWidth, o4 = e4.fill, i3 = e4.strokeDasharray, a3 = e4.stroke;
          return Object(Q.g)(Ev, { d: r4, fill: o4, strokeWidth: n3, stroke: a3, strokeDasharray: i3 });
        } }]) && Eb(e3.prototype, r3), i2;
      }(Ob);
      function Db(t3) {
        return (Db = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Tb(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Mb(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Mb(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Mb(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      var Nb = function(t3) {
        var e3 = { points: "", fill: "none" };
        return Object.entries(t3).forEach(function(t4) {
          var r3 = Tb(t4, 2), n3 = r3[0], o3 = r3[1];
          Db(o3) !== "object" && (e3[n3] = o3);
        }), Object(Q.g)("polyline", e3);
      };
      function Cb(t3) {
        return (Cb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Rb(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Ib(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Rb(Object(r3), true).forEach(function(e4) {
            Vb(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Rb(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Lb() {
        return (Lb = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function zb(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Bb(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Bb(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Bb(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Xb(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Hb(t3, e3) {
        return (Hb = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Ub(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Yb(t3);
          if (e3) {
            var o3 = Yb(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Gb(this, r3);
        };
      }
      function Gb(t3, e3) {
        if (e3 && (Cb(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Fb(t3);
      }
      function Fb(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Yb(t3) {
        return (Yb = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function Vb(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Wb = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Hb(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = Ub(i2);
        function i2() {
          var t4;
          return function(t5, e4) {
            if (!(t5 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), Vb(Fb(t4 = o3.call(this)), "drag", void 0), Vb(Fb(t4), "isDraging", void 0), Vb(Fb(t4), "appendInfo", void 0), Vb(Fb(t4), "dragHandler", void 0), Vb(Fb(t4), "onDragStart", function() {
            t4.props.model.dragAppendStart();
          }), Vb(Fb(t4), "onDraging", function(e4) {
            var r4 = e4.deltaX, n3 = e4.deltaY, o4 = t4.props, i3 = o4.model, a3 = o4.graphModel;
            t4.isDraging = true;
            var u3 = a3.transformModel, c3 = a3.editConfigModel, s3 = zb(u3.fixDeltaXY(r4, n3), 2), l3 = s3[0], f2 = s3[1], p2 = i3, d3 = c3.adjustEdgeMiddle;
            t4.appendInfo = d3 ? p2.dragAppendSimple(t4.appendInfo, { x: l3, y: f2 }) : p2.dragAppend(t4.appendInfo, { x: l3, y: f2 });
          }), Vb(Fb(t4), "onDragEnd", function() {
            var e4 = t4.props, r4 = e4.model, n3 = e4.graphModel.eventCenter, o4 = r4;
            o4.dragAppendEnd(), t4.isDraging = false, t4.appendInfo = void 0, n3.emit(to.EDGE_ADJUST, { data: o4.getData() });
          }), Vb(Fb(t4), "beforeDragStart", function(e4, r4) {
            r4.dragAble && t4.dragHandler(e4), t4.appendInfo = r4;
          }), Vb(Fb(t4), "getIsDraging", function() {
            return t4.isDraging;
          }), t4.drag = ic({ onDragStart: t4.onDragStart, onDraging: t4.onDraging, onDragEnd: t4.onDragEnd, isStopPropagation: false }), t4;
        }
        return e3 = i2, (r3 = [{ key: "getEdge", value: function() {
          var t4 = this.props.model, e4 = t4.getEdgeStyle();
          return Object(Q.g)(Nb, Lb({ points: t4.points }, e4));
        } }, { key: "getShape", value: function() {
          return Object(Q.g)("g", null, this.getEdge());
        } }, { key: "getArrowInfo", value: function() {
          var t4 = this.props.model, e4 = t4.points, r4 = t4.isSelected, n3 = { start: null, end: null, hover: this.state.hover, isSelected: r4 }, o4 = Yu(e4);
          return o4.length >= 2 && (n3.start = o4[o4.length - 2], n3.end = o4[o4.length - 1]), n3;
        } }, { key: "getAppendAttributes", value: function(t4) {
          var e4, r4 = t4.start, n3 = t4.end;
          if (r4.x === n3.x && r4.y === n3.y)
            e4 = "";
          else {
            var o4 = { start: r4, end: n3, offset: 10, verticalLength: 5 }, i3 = vu(Ib(Ib({}, o4), {}, { type: "start" })), a3 = vu(Ib(Ib({}, o4), {}, { type: "end" }));
            e4 = "M".concat(i3.leftX, " ").concat(i3.leftY, " \n      L").concat(i3.rightX, " ").concat(i3.rightY, " \n      L").concat(a3.rightX, " ").concat(a3.rightY, "\n      L").concat(a3.leftX, " ").concat(a3.leftY, " z");
          }
          return { d: e4, fill: "transparent", stroke: "transparent", strokeWidth: 1, strokeDasharray: "4, 4" };
        } }, { key: "getAppendShape", value: function(t4) {
          var e4 = this.getAppendAttributes(t4), r4 = e4.d, n3 = e4.strokeWidth, o4 = e4.fill, i3 = e4.strokeDasharray, a3 = e4.stroke;
          return Object(Q.g)(Ev, { d: r4, fill: o4, strokeWidth: n3, stroke: a3, strokeDasharray: i3 });
        } }, { key: "getAppendWidth", value: function() {
          for (var t4 = this, e4 = this.props, r4 = e4.model, n3 = e4.graphModel, o4 = r4.pointsList, i3 = r4.draggable, a3 = [], u3 = o4.length, c3 = function(e5) {
            var r5 = "lf-polyline-append", c4 = { start: { x: o4[e5].x, y: o4[e5].y }, end: { x: o4[e5 + 1].x, y: o4[e5 + 1].y }, startIndex: e5, endIndex: e5 + 1, direction: "", dragAble: true }, s4 = Object(Q.g)("g", { className: r5 }, t4.getAppendShape(c4)), l3 = n3.editConfigModel, f2 = l3.adjustEdge, p2 = l3.adjustEdgeMiddle;
            if (f2 && i3) {
              t4.dragHandler = t4.drag;
              var d3 = c4.startIndex, y3 = c4.endIndex, h3 = p2 && (d3 === 0 || y3 === u3 - 1);
              c4.dragAble = !h3, c4.start.x === c4.end.x ? (c4.dragAble && (r5 += "-ew-resize"), c4.direction = eo.VERTICAL) : c4.start.y === c4.end.y && (c4.dragAble && (r5 += "-ns-resize"), c4.direction = eo.HORIZONTAL), s4 = Object(Q.g)("g", { className: t4.isDraging ? "lf-dragging" : "lf-drag-able", onMouseDown: function(e6) {
                return t4.beforeDragStart(e6, c4);
              } }, Object(Q.g)("g", { className: r5 }, t4.getAppendShape(c4)));
            } else
              t4.dragHandler = function() {
              };
            a3.push(s4);
          }, s3 = 0; s3 < u3 - 1; s3++)
            c3(s3);
          return Object(Q.g)("g", null, a3);
        } }]) && Xb(e3.prototype, r3), i2;
      }(Ob);
      function Kb(t3) {
        return (Kb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function $b(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Zb(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Zb(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Zb(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function qb() {
        return (qb = Object.assign || function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = arguments[e3];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (t3[n3] = r3[n3]);
          }
          return t3;
        }).apply(this, arguments);
      }
      function Jb(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function Qb(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function tg(t3, e3) {
        return (tg = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function eg(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = ng(t3);
          if (e3) {
            var o3 = ng(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return rg(this, r3);
        };
      }
      function rg(t3, e3) {
        if (e3 && (Kb(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function(t4) {
          if (t4 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t4;
        }(t3);
      }
      function ng(t3) {
        return (ng = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      var og = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && tg(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = eg(i2);
        function i2() {
          return Jb(this, i2), o3.apply(this, arguments);
        }
        return e3 = i2, (r3 = [{ key: "getEdge", value: function() {
          var t4 = this.props.model, e4 = t4.getEdgeStyle();
          return Object(Q.g)(Ev, qb({ d: t4.path }, e4));
        } }, { key: "getShape", value: function() {
          return Object(Q.g)("g", null, this.getEdge());
        } }, { key: "getAppendWidth", value: function() {
          var t4 = this.props.model.path;
          return Object(Q.g)(Ev, { d: t4, strokeWidth: 10, stroke: "transparent", fill: "none" });
        } }, { key: "getArrowInfo", value: function() {
          var t4 = this.props.model, e4 = this.state.hover, r4 = t4, n3 = r4.path, o4 = r4.isSelected, i3 = $b(function(t5) {
            var e5 = Zu(t5);
            return [e5[2], e5[3]];
          }(n3), 2);
          return { start: i3[0], end: i3[1], hover: e4, isSelected: o4 };
        } }]) && Qb(e3.prototype, r3), i2;
      }(Ob);
      var ig = function(t3, e3) {
        return _r(t3, e3);
      };
      var ag = function(t3) {
        var e3 = t3 == null ? 0 : t3.length;
        return e3 ? t3[e3 - 1] : void 0;
      }, ug = function() {
        return ht.a.Date.now();
      }, cg = /\s/;
      var sg = function(t3) {
        for (var e3 = t3.length; e3-- && cg.test(t3.charAt(e3)); )
          ;
        return e3;
      }, lg = /^\s+/;
      var fg = function(t3) {
        return t3 ? t3.slice(0, sg(t3) + 1).replace(lg, "") : t3;
      }, pg = /^[-+]0x[0-9a-f]+$/i, dg = /^0b[01]+$/i, yg = /^0o[0-7]+$/i, hg = parseInt;
      var vg = function(t3) {
        if (typeof t3 == "number")
          return t3;
        if (kr(t3))
          return NaN;
        if (St(t3)) {
          var e3 = typeof t3.valueOf == "function" ? t3.valueOf() : t3;
          t3 = St(e3) ? e3 + "" : e3;
        }
        if (typeof t3 != "string")
          return t3 === 0 ? t3 : +t3;
        t3 = fg(t3);
        var r3 = dg.test(t3);
        return r3 || yg.test(t3) ? hg(t3.slice(2), r3 ? 2 : 8) : pg.test(t3) ? NaN : +t3;
      }, bg = Math.max, gg = Math.min;
      var mg = function(t3, e3, r3) {
        var n3, o3, i2, a3, u3, c3, s3 = 0, l3 = false, f2 = false, p2 = true;
        if (typeof t3 != "function")
          throw new TypeError("Expected a function");
        function d3(e4) {
          var r4 = n3, i3 = o3;
          return n3 = o3 = void 0, s3 = e4, a3 = t3.apply(i3, r4);
        }
        function y3(t4) {
          return s3 = t4, u3 = setTimeout(v3, e3), l3 ? d3(t4) : a3;
        }
        function h3(t4) {
          var r4 = t4 - c3;
          return c3 === void 0 || r4 >= e3 || r4 < 0 || f2 && t4 - s3 >= i2;
        }
        function v3() {
          var t4 = ug();
          if (h3(t4))
            return b3(t4);
          u3 = setTimeout(v3, function(t5) {
            var r4 = e3 - (t5 - c3);
            return f2 ? gg(r4, i2 - (t5 - s3)) : r4;
          }(t4));
        }
        function b3(t4) {
          return u3 = void 0, p2 && n3 ? d3(t4) : (n3 = o3 = void 0, a3);
        }
        function g3() {
          var t4 = ug(), r4 = h3(t4);
          if (n3 = arguments, o3 = this, c3 = t4, r4) {
            if (u3 === void 0)
              return y3(c3);
            if (f2)
              return clearTimeout(u3), u3 = setTimeout(v3, e3), d3(c3);
          }
          return u3 === void 0 && (u3 = setTimeout(v3, e3)), a3;
        }
        return e3 = vg(e3) || 0, St(r3) && (l3 = !!r3.leading, i2 = (f2 = "maxWait" in r3) ? bg(vg(r3.maxWait) || 0, e3) : i2, p2 = "trailing" in r3 ? !!r3.trailing : p2), g3.cancel = function() {
          u3 !== void 0 && clearTimeout(u3), s3 = 0, n3 = c3 = o3 = u3 = void 0;
        }, g3.flush = function() {
          return u3 === void 0 ? a3 : b3(ug());
        }, g3;
      }, Og = r2(157);
      function wg(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function _g(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var jg, Eg, xg, Sg = function() {
        function t3(e4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), _g(this, "undos", []), _g(this, "redos", []), _g(this, "callbacks", []), _g(this, "stopWatch", null), _g(this, "curData", null), _g(this, "maxSize", 50), _g(this, "waitTime", 100), _g(this, "eventCenter", void 0), this.eventCenter = e4;
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "add", value: function(t4) {
          ig(ag(this.undos), t4) || (this.undos.push(t4), ig(this.curData, t4) || (this.redos = []), this.eventCenter.emit(to.HISTORY_CHANGE, { data: { undos: this.undos, redos: this.redos, undoAble: this.undos.length > 1, redoAble: this.redos.length > 0 } }), this.undos.length > this.maxSize && this.undos.shift());
        } }, { key: "undoAble", value: function() {
          return this.undos.length > 1;
        } }, { key: "undo", value: function() {
          if (this.undoAble()) {
            var t4 = this.undos.pop();
            this.redos.push(t4);
            var e4 = this.undos.pop();
            return this.curData = oi(e4), e4;
          }
        } }, { key: "redoAble", value: function() {
          return this.redos.length > 0;
        } }, { key: "redo", value: function() {
          if (this.redoAble()) {
            var t4 = this.redos.pop();
            return this.curData = oi(t4), t4;
          }
        } }, { key: "watch", value: function(t4) {
          var e4 = this;
          this.stopWatch && this.stopWatch(), this.undos.push(t4.modelToGraphData()), this.stopWatch = Object(Og.a)(t4, mg(function() {
            var r4 = t4.modelToHistoryData();
            r4 && e4.add(r4);
          }, this.waitTime));
        } }]) && wg(e3.prototype, r3), t3;
      }();
      function Pg(t3) {
        return (Pg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function kg(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || function(t4, e4) {
          if (!t4)
            return;
          if (typeof t4 == "string")
            return Ag(t4, e4);
          var r3 = Object.prototype.toString.call(t4).slice(8, -1);
          r3 === "Object" && t4.constructor && (r3 = t4.constructor.name);
          if (r3 === "Map" || r3 === "Set")
            return Array.from(t4);
          if (r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3))
            return Ag(t4, e4);
        }(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Ag(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function Dg(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function Tg(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? Dg(Object(r3), true).forEach(function(e4) {
            zg(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : Dg(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function Mg(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Ng(t3, e3) {
        return (Ng = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function Cg(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = Lg(t3);
          if (e3) {
            var o3 = Lg(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Rg(this, r3);
        };
      }
      function Rg(t3, e3) {
        if (e3 && (Pg(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Ig(t3);
      }
      function Ig(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Lg(t3) {
        return (Lg = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function zg(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Bg, Xg, Hg, Ug = wm((xg = Eg = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Ng(t4, e4);
        }(i2, t3);
        var e3, r3, n3, o3 = Cg(i2);
        function i2() {
          var t4;
          return function(t5, e4) {
            if (!(t5 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), zg(Ig(t4 = o3.call(this)), "ref", Object(Q.f)()), zg(Ig(t4), "__prevText", { type: "", text: "", id: "" }), zg(Ig(t4), "keyupHandler", function(e4) {
            var r4 = e4.target.innerText, n4 = t4.props.graphModel.textEditElement;
            e4.key === "Enter" && e4.altKey && n4.setElementState(0), t4.__prevText = { type: n4.type, text: r4.replace(/(\r\n)+$|(\n)+$/, ""), id: n4.id };
          }), t4.state = { style: { left: 0, top: 0 } }, t4;
        }
        return e3 = i2, n3 = [{ key: "getDerivedStateFromProps", value: function(t4) {
          var e4, r4 = t4.graphModel, n4 = r4.transformModel, o4 = r4.theme, i3 = r4.textEditElement;
          if (i3) {
            var a3;
            if ((a3 = i3.text) === null || a3 === void 0 || !a3.value)
              if (i3.BaseType === Qn.EDGE) {
                var u3 = (i3 = i3).text, c3 = i3.textPosition, s3 = c3.x, l3 = c3.y;
                u3.x = s3, u3.y = l3, i3.setText(u3);
              } else
                i3 = i3;
            var f2 = { resize: "auto", whiteSpace: "normal", wordBreak: "break-all" };
            if (i3.BaseType === Qn.EDGE) {
              var p2 = o4.edgeText, d3 = p2.overflowMode, y3 = p2.lineHeight, h3 = p2.wrapPadding, v3 = p2.textWidth;
              v3 && d3 === "autoWrap" && (e4 = Tg(Tg({}, f2), {}, { width: v3, minWidth: v3, lineHeight: y3, padding: h3 }));
            } else if (i3.BaseType === Qn.NODE) {
              var b3 = o4.nodeText, g3 = b3.overflowMode, m3 = b3.lineHeight, O3 = b3.wrapPadding, w3 = b3.textWidth, _3 = i3, j3 = _3.width, E2 = _3.modelType;
              (E2 !== Jn.TEXT_NODE && g3 === "autoWrap" || E2 === Jn.TEXT_NODE && w3) && (e4 = Tg(Tg({}, f2), {}, { width: w3 || j3, minWidth: w3 || j3, lineHeight: m3, padding: O3 }));
            }
            var x3 = i3.text, S2 = x3.x, P3 = x3.y, k3 = kg(n4.CanvasPointToHtmlPoint([S2, P3]), 2);
            return { style: Tg({ left: k3[0], top: k3[1] }, e4) };
          }
        } }], (r3 = [{ key: "componentDidMount", value: function() {
          this.ref.current && (this.ref.current.focus(), this.placeCaretAtEnd(this.ref.current));
          var t4 = this.props.graphModel, e4 = t4.eventCenter, r4 = t4.editConfigModel, n4 = r4.edgeTextEdit, o4 = r4.nodeTextEdit;
          (n4 || o4) && e4.on(to.GRAPH_TRANSFORM, function() {
            t4.textEditElement && t4.textEditElement.setElementState(Zn.DEFAULT);
          });
        } }, { key: "componentDidUpdate", value: function() {
          var t4 = this.props.graphModel;
          if (this.ref.current && (this.ref.current.focus(), this.placeCaretAtEnd(this.ref.current)), this.__prevText.id !== "") {
            var e4 = this.__prevText, r4 = e4.text, n4 = e4.id;
            t4.updateText(n4, r4), t4.eventCenter.emit(to.TEXT_UPDATE, Tg({}, this.__prevText)), this.__prevText.id = "", this.__prevText.text = "", this.__prevText.type = "";
          }
        } }, { key: "placeCaretAtEnd", value: function(t4) {
          if (window.getSelection !== void 0 && document.createRange !== void 0) {
            var e4 = document.createRange();
            e4.selectNodeContents(t4), e4.collapse(false);
            var r4 = window.getSelection();
            r4.removeAllRanges(), r4.addRange(e4);
          }
        } }, { key: "render", value: function() {
          var t4, e4 = this.props.graphModel.textEditElement, r4 = this.state.style;
          return e4 ? Object(Q.g)("div", { contentEditable: true, className: "lf-text-input", style: r4, ref: this.ref, key: e4.id, onKeyUp: this.keyupHandler }, (t4 = e4.text) === null || t4 === void 0 ? void 0 : t4.value) : null;
        } }]) && Mg(e3.prototype, r3), n3 && Mg(e3, n3), i2;
      }(Q.a), zg(Eg, "toolName", "textEdit"), jg = xg)) || jg, Gg = function(t3) {
        return t3.modelType === Jn.LINE_EDGE ? function(t4) {
          var e3 = t4.startPoint, r3 = t4.endPoint, n3 = (e3.x + r3.x) / 2, o3 = (e3.y + r3.y) / 2, i2 = Math.abs(e3.x - r3.x) + 10, a3 = Math.abs(e3.y - r3.y) + 10;
          return { x: n3 - i2 / 2, y: o3 - a3 / 2, x1: n3 + i2 / 2, y1: o3 + a3 / 2 };
        }(t3) : t3.modelType === Jn.POLYLINE_EDGE ? function(t4) {
          var e3 = t4.points, r3 = Yu(e3), n3 = Au(r3, 8), o3 = n3.x, i2 = n3.y, a3 = n3.width, u3 = n3.height;
          return { x: o3 - a3 / 2, y: i2 - u3 / 2, x1: o3 + a3 / 2, y1: i2 + u3 / 2 };
        }(t3) : t3.modelType === Jn.BEZIER_EDGE ? function(t4) {
          var e3 = t4.path, r3 = Zu(e3), n3 = Au(r3, 8), o3 = n3.x, i2 = n3.y, a3 = n3.width, u3 = n3.height;
          return { x: o3 - a3 / 2, y: i2 - u3 / 2, x1: o3 + a3 / 2, y1: i2 + u3 / 2 };
        }(t3) : void 0;
      };
      function Fg(t3) {
        return (Fg = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function Yg(t3, e3) {
        return function(t4) {
          if (Array.isArray(t4))
            return t4;
        }(t3) || function(t4, e4) {
          var r3 = t4 == null ? null : typeof Symbol != "undefined" && t4[Symbol.iterator] || t4["@@iterator"];
          if (r3 == null)
            return;
          var n3, o3, i2 = [], a3 = true, u3 = false;
          try {
            for (r3 = r3.call(t4); !(a3 = (n3 = r3.next()).done) && (i2.push(n3.value), !e4 || i2.length !== e4); a3 = true)
              ;
          } catch (t5) {
            u3 = true, o3 = t5;
          } finally {
            try {
              a3 || r3.return == null || r3.return();
            } finally {
              if (u3)
                throw o3;
            }
          }
          return i2;
        }(t3, e3) || Wg(t3, e3) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Vg(t3) {
        return function(t4) {
          if (Array.isArray(t4))
            return Kg(t4);
        }(t3) || function(t4) {
          if (typeof Symbol != "undefined" && t4[Symbol.iterator] != null || t4["@@iterator"] != null)
            return Array.from(t4);
        }(t3) || Wg(t3) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function Wg(t3, e3) {
        if (t3) {
          if (typeof t3 == "string")
            return Kg(t3, e3);
          var r3 = Object.prototype.toString.call(t3).slice(8, -1);
          return r3 === "Object" && t3.constructor && (r3 = t3.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(t3) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? Kg(t3, e3) : void 0;
        }
      }
      function Kg(t3, e3) {
        (e3 == null || e3 > t3.length) && (e3 = t3.length);
        for (var r3 = 0, n3 = new Array(e3); r3 < e3; r3++)
          n3[r3] = t3[r3];
        return n3;
      }
      function $g(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function Zg(t3, e3) {
        return (Zg = Object.setPrototypeOf || function(t4, e4) {
          return t4.__proto__ = e4, t4;
        })(t3, e3);
      }
      function qg(t3) {
        var e3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var r3, n3 = tm(t3);
          if (e3) {
            var o3 = tm(this).constructor;
            r3 = Reflect.construct(n3, arguments, o3);
          } else
            r3 = n3.apply(this, arguments);
          return Jg(this, r3);
        };
      }
      function Jg(t3, e3) {
        if (e3 && (Fg(e3) === "object" || typeof e3 == "function"))
          return e3;
        if (e3 !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Qg(t3);
      }
      function Qg(t3) {
        if (t3 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function tm(t3) {
        return (tm = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        })(t3);
      }
      function em(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var rm = wm((Hg = Xg = function(t3) {
        !function(t4, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && Zg(t4, e4);
        }(i2, t3);
        var e3, r3, o3 = qg(i2);
        function i2(t4) {
          var e4;
          !function(t5, e5) {
            if (!(t5 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, i2), em(Qg(e4 = o3.call(this)), "stepDrag", void 0), em(Qg(e4), "handleMouseDown", function(t5) {
            e4.stepDrag.handleMouseDown(t5);
          }), em(Qg(e4), "onDraging", function(t5) {
            var r5 = t5.deltaX, n4 = t5.deltaY, o4 = e4.props.graphModel, i3 = o4.getSelectElements(true);
            o4.moveNodes(i3.nodes.map(function(t6) {
              return t6.id;
            }), r5, n4);
          }), em(Qg(e4), "handleContextMenu", function(t5) {
            t5.preventDefault();
            var r5 = e4.props, n4 = r5.graphModel, o4 = r5.graphModel, i3 = o4.eventCenter, a4 = o4.selectElements, u3 = n4.getPointByClient({ x: t5.clientX, y: t5.clientY }), c3 = { nodes: [], edges: [] };
            Vg(a4.values()).forEach(function(t6) {
              t6.BaseType === Qn.NODE && c3.nodes.push(t6.getData()), t6.BaseType === Qn.EDGE && c3.edges.push(t6.getData());
            }), i3.emit(to.SELECTION_CONTEXTMENU, { data: c3, e: t5, position: u3 });
          });
          var r4 = t4.graphModel, n3 = r4.gridSize, a3 = r4.eventCenter;
          return e4.stepDrag = new mc({ onDraging: e4.onDraging, step: n3, eventType: "SELECTION", eventCenter: a3 }), e4;
        }
        return e3 = i2, (r3 = [{ key: "render", value: function() {
          var t4 = this.props.graphModel, e4 = t4.selectElements, r4 = t4.transformModel;
          if (!(e4.size <= 1)) {
            var n3 = Number.MAX_SAFE_INTEGER, o4 = Number.MAX_SAFE_INTEGER, i3 = Number.MIN_SAFE_INTEGER, a3 = Number.MIN_SAFE_INTEGER;
            e4.forEach(function(t5) {
              var e5 = { x: 0, y: 0, x1: 0, y1: 0 };
              t5.BaseType === Qn.NODE && (e5 = function(t6) {
                var e6 = t6.x, r5 = t6.y, n4 = t6.width, o5 = t6.height;
                return { x: e6 - n4 / 2, y: r5 - o5 / 2, x1: e6 + n4 / 2, y1: r5 + o5 / 2 };
              }(t5)), t5.BaseType === Qn.EDGE && (e5 = Gg(t5)), n3 = Math.min(n3, e5.x), o4 = Math.min(o4, e5.y), i3 = Math.max(i3, e5.x1), a3 = Math.max(a3, e5.y1);
            });
            var u3 = Yg(r4.CanvasPointToHtmlPoint([n3, o4]), 2);
            n3 = u3[0], o4 = u3[1];
            var c3 = Yg(r4.CanvasPointToHtmlPoint([i3, a3]), 2);
            i3 = c3[0], a3 = c3[1];
            var s3 = { left: "".concat(n3 - 10, "px"), top: "".concat(o4 - 10, "px"), width: "".concat(i3 - n3 + 20, "px"), height: "".concat(a3 - o4 + 20, "px") };
            return Object(Q.g)("div", { className: "lf-multiple-select", style: s3, onMouseDown: this.handleMouseDown, onContextMenu: this.handleContextMenu });
          }
        } }]) && $g(e3.prototype, r3), i2;
      }(Q.a), em(Xg, "toolName", "multipleSelect"), Bg = Hg)) || Bg;
      function nm(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function om(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var im = function() {
        function t3(e4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), om(this, "tools", void 0), om(this, "components", void 0), om(this, "toolMap", /* @__PURE__ */ new Map()), om(this, "instance", void 0), this.instance = e4, this.isDisabledTool(Ug.toolName) || this.registerTool(Ug.toolName, Ug), this.isDisabledTool(rm.toolName) || this.registerTool(rm.toolName, rm);
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "isDisabledTool", value: function(t4) {
          return this.instance.options.disabledTools.indexOf(t4) !== -1;
        } }, { key: "registerTool", value: function(t4, e4) {
          this.toolMap.set(t4, e4);
        } }, { key: "getTools", value: function() {
          return Array.from(this.toolMap.values());
        } }, { key: "getInstance", value: function() {
          return this.instance;
        } }]) && nm(e3.prototype, r3), t3;
      }(), am = r2(158), um = r2.n(am);
      function cm(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function sm(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var lm = function() {
        function t3(e4) {
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), sm(this, "mousetrap", void 0), sm(this, "options", void 0), sm(this, "target", void 0), e4.keyboard || (e4.keyboard = { enabled: false }), this.options = e4;
          var r4 = e4.lf;
          this.target = r4.container, this.mousetrap = new um.a(this.target), e4.keyboard.enabled && this.enable(true);
        }
        var e3, r3;
        return e3 = t3, (r3 = [{ key: "initShortcuts", value: function() {
          var t4 = this, e4 = this.options.keyboard.shortcuts;
          if (e4)
            if (Se(e4))
              e4.forEach(function(e5) {
                var r5 = e5.keys, n4 = e5.callback, o4 = e5.action;
                return t4.on(r5, n4, o4);
              });
            else {
              var r4 = e4.keys, n3 = e4.callback, o3 = e4.action;
              this.on(r4, n3, o3);
            }
        } }, { key: "on", value: function(t4, e4, r4) {
          this.mousetrap.bind(this.getKeys(t4), e4, r4);
        } }, { key: "disabled", get: function() {
          return this.options.keyboard.enabled !== true;
        } }, { key: "off", value: function(t4, e4) {
          this.mousetrap.unbind(this.getKeys(t4), e4);
        } }, { key: "enable", value: function(t4) {
          (this.disabled || t4) && (this.options.keyboard.enabled = true, this.target instanceof HTMLElement && (this.target.setAttribute("tabindex", "-1"), this.target.style.outline = "none"));
        } }, { key: "disable", value: function() {
          this.disabled || (this.options.keyboard.enabled = false, this.target instanceof HTMLElement && this.target.removeAttribute("tabindex"));
        } }, { key: "getKeys", value: function(t4) {
          var e4 = this;
          return (Array.isArray(t4) ? t4 : [t4]).map(function(t5) {
            return e4.formatkey(t5);
          });
        } }, { key: "formatkey", value: function(t4) {
          return t4.toLowerCase().replace(/\s/g, "").replace("delete", "del").replace("cmd", "command");
        } }]) && cm(e3.prototype, r3), t3;
      }(), fm = lm, pm = null;
      function dm(t3, e3) {
        return t3.x += e3, t3.y += e3, t3.text && (t3.text.x += e3, t3.text.y += e3), t3;
      }
      function ym(t3, e3) {
        return t3.startPoint && (t3.startPoint.x += e3, t3.startPoint.y += e3), t3.endPoint && (t3.endPoint.x += e3, t3.endPoint.y += e3), t3.pointsList && t3.pointsList.length > 0 && t3.pointsList.forEach(function(t4) {
          t4.x += e3, t4.y += e3;
        }), t3.text && (t3.text.x += e3, t3.text.y += e3), t3;
      }
      function hm(t3) {
        return (hm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        })(t3);
      }
      function vm(t3, e3) {
        var r3 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n3 = Object.getOwnPropertySymbols(t3);
          e3 && (n3 = n3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), r3.push.apply(r3, n3);
        }
        return r3;
      }
      function bm(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var r3 = arguments[e3] != null ? arguments[e3] : {};
          e3 % 2 ? vm(Object(r3), true).forEach(function(e4) {
            mm(t3, e4, r3[e4]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : vm(Object(r3)).forEach(function(e4) {
            Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
          });
        }
        return t3;
      }
      function gm(t3, e3) {
        for (var r3 = 0; r3 < e3.length; r3++) {
          var n3 = e3[r3];
          n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
        }
      }
      function mm(t3, e3, r3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
      }
      var Om = function() {
        function t3(e4) {
          var r4, n4, o3 = this;
          !function(t4, e5) {
            if (!(t4 instanceof e5))
              throw new TypeError("Cannot call a class as a function");
          }(this, t3), mm(this, "container", void 0), mm(this, "width", void 0), mm(this, "height", void 0), mm(this, "graphModel", void 0), mm(this, "history", void 0), mm(this, "viewMap", /* @__PURE__ */ new Map()), mm(this, "tool", void 0), mm(this, "keyboard", void 0), mm(this, "dnd", void 0), mm(this, "options", void 0), mm(this, "snaplineModel", void 0), mm(this, "components", []), mm(this, "plugins", void 0), mm(this, "extension", {}), mm(this, "adapterIn", void 0), mm(this, "adapterOut", void 0), mm(this, "getView", function(t4) {
            return o3.viewMap.get(t4);
          }), e4 = Fl(e4), this.options = e4, this.container = e4.container, this.plugins = e4.plugins, this.graphModel = new Nc(bm({}, e4)), this.tool = new im(this), this.history = new Sg(this.graphModel.eventCenter), this.dnd = new Gl({ lf: this }), this.keyboard = new fm({ lf: this, keyboard: e4.keyboard }), e4.isSilentMode || e4.snapline === false || (this.snaplineModel = new cy(this.graphModel), r4 = this.graphModel.eventCenter, n4 = this.snaplineModel, r4.on("node:mousemove", function(t4) {
            var e5 = t4.data;
            n4.setNodeSnapLine(e5);
          }), r4.on("node:mouseup", function() {
            n4.clearSnapline();
          })), function(t4, e5) {
            var r5 = t4.keyboard, n5 = r5.options.keyboard;
            r5.on(["cmd + c", "ctrl + c"], function() {
              if (n5.enabled && !e5.textEditElement) {
                var r6 = t4.options.guards, o4 = e5.getSelectElements(false);
                return r6 && r6.beforeClone && !r6.beforeClone(o4) ? (pm = null, false) : ((pm = o4).nodes.forEach(function(t5) {
                  return dm(t5, 40);
                }), pm.edges.forEach(function(t5) {
                  return ym(t5, 40);
                }), false);
              }
            }), r5.on(["cmd + v", "ctrl + v"], function() {
              if (n5.enabled && !e5.textEditElement) {
                if (pm && (pm.nodes || pm.edges)) {
                  t4.clearSelectElements();
                  var r6 = t4.addElements(pm);
                  if (!r6)
                    return;
                  r6.nodes.forEach(function(e6) {
                    return t4.selectElementById(e6.id, true);
                  }), r6.edges.forEach(function(e6) {
                    return t4.selectElementById(e6.id, true);
                  }), pm.nodes.forEach(function(t5) {
                    return dm(t5, 40);
                  }), pm.edges.forEach(function(t5) {
                    return ym(t5, 40);
                  });
                }
                return false;
              }
            }), r5.on(["cmd + z", "ctrl + z"], function() {
              if (n5.enabled && !e5.textEditElement)
                return t4.undo(), false;
            }), r5.on(["cmd + y", "ctrl + y"], function() {
              if (n5.enabled && !e5.textEditElement)
                return t4.redo(), false;
            }), r5.on(["backspace"], function() {
              if (n5.enabled && !e5.textEditElement) {
                var r6 = e5.getSelectElements(true);
                return t4.clearSelectElements(), r6.edges.forEach(function(e6) {
                  return t4.deleteEdge(e6.id);
                }), r6.nodes.forEach(function(e6) {
                  return t4.deleteNode(e6.id);
                }), false;
              }
            });
          }(this, this.graphModel), this.keyboard.initShortcuts(), this.defaultRegister(), this.installPlugins(e4.disabledPlugins);
        }
        var e3, r3, n3;
        return e3 = t3, n3 = [{ key: "use", value: function(t4) {
          var e4 = t4.pluginName;
          e4 || (console.warn("\u8BF7\u7ED9\u63D2\u4EF6".concat(t4.name || t4.constructor.name, "\u6307\u5B9ApluginName!")), e4 = t4.name);
          var r4 = this.extensions.get(e4);
          r4 && r4.destroy && r4.destroy(), this.extensions.set(e4, t4);
        } }], (r3 = [{ key: "register", value: function(t4, e4) {
          var r4 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
          if (typeof t4 == "string") {
            var n4 = { BaseEdge: Ob, BaseEdgeModel: Ca, BaseNode: th, BaseNodeModel: Hf, RectNode: sh, RectNodeModel: Pd, CircleNode: gh, CircleNodeModel: ap, PolygonNode: Th, PolygonNodeModel: fd, TextNode: lv, TextNodeModel: Ud, LineEdge: Ab, LineEdgeModel: qa, DiamondNode: Xh, DiamondNodeModel: Pp, PolylineEdge: Wb, PolylineEdgeModel: hu, BezierEdge: og, BezierEdgeModel: Df, EllipseNode: Qh, EllipseNodeModel: Yp, HtmlNode: Ov, HtmlNodeModel: ry, h: Q.g, type: t4 };
            this.viewMap.forEach(function(t5) {
              var e5 = t5.extendKey;
              e5 && (n4[e5] = t5);
            }), this.graphModel.modelMap.forEach(function(t5) {
              var e5 = t5.extendKey;
              e5 && (n4[e5] = t5);
            });
            var o3 = e4(n4), i2 = o3.view, a3 = o3.model, u3 = i2;
            r4 && !u3.isObervered && (u3.isObervered = true, u3 = J(u3)), this.setView(t4, u3), this.graphModel.setModel(t4, a3);
          } else
            this.registerElement(t4);
        } }, { key: "registerElement", value: function(t4) {
          var e4 = t4.view;
          t4.isObserverView === false || e4.isObervered || (e4.isObervered = true, e4 = J(e4)), this.setView(t4.type, e4), this.graphModel.setModel(t4.type, t4.model);
        } }, { key: "defaultRegister", value: function() {
          this.registerElement({ view: sh, model: Pd, type: "rect" }), this.registerElement({ type: "circle", view: gh, model: ap }), this.registerElement({ type: "polygon", view: Th, model: fd }), this.registerElement({ type: "line", view: Ab, model: qa }), this.registerElement({ type: "polyline", view: Wb, model: hu }), this.registerElement({ type: "bezier", view: og, model: Df }), this.registerElement({ type: "text", view: lv, model: Ud }), this.registerElement({ type: "ellipse", view: Qh, model: Yp }), this.registerElement({ type: "diamond", view: Xh, model: Pp }), this.registerElement({ type: "html", view: Ov, model: ry });
        } }, { key: "selectElementById", value: function(t4) {
          var e4 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          this.graphModel.selectElementById(t4, e4), e4 || this.graphModel.toFront(t4);
        } }, { key: "focusOn", value: function(t4) {
          var e4 = this.graphModel.transformModel, r4 = t4.coordinate, n4 = t4.id;
          if (!r4) {
            var o3 = this.getNodeModelById(n4);
            o3 && (r4 = o3.getData());
            var i2 = this.getEdgeModelById(n4);
            i2 && (r4 = i2.textPosition);
          }
          var a3 = r4, u3 = a3.x, c3 = a3.y;
          e4.focusOn(u3, c3, this.graphModel.width, this.graphModel.height);
        } }, { key: "setTheme", value: function(t4) {
          this.graphModel.setTheme(t4);
        } }, { key: "resize", value: function(t4, e4) {
          this.options.width = t4 != null ? t4 : this.options.width, this.options.height = e4 != null ? e4 : this.options.height, this.graphModel.resize(t4, e4);
        } }, { key: "setDefaultEdgeType", value: function(t4) {
          this.graphModel.setDefaultEdgeType(t4);
        } }, { key: "updateText", value: function(t4, e4) {
          this.graphModel.updateText(t4, e4);
        } }, { key: "deleteElement", value: function(t4) {
          var e4, r4, n4, o3 = this.getModelById(t4);
          return !!o3 && (r4 = (n4 = (mm(e4 = {}, Qn.NODE, this.deleteNode), mm(e4, Qn.EDGE, this.deleteEdge), e4)[o3.BaseType]) === null || n4 === void 0 ? void 0 : n4.call(this, t4)) !== null && r4 !== void 0 && r4;
        } }, { key: "getModelById", value: function(t4) {
          return this.graphModel.getElement(t4);
        } }, { key: "getDataById", value: function(t4) {
          return this.graphModel.getElement(t4).getData();
        } }, { key: "changeNodeType", value: function(t4, e4) {
          this.graphModel.changeNodeType(t4, e4);
        } }, { key: "changeEdgeType", value: function(t4, e4) {
          this.graphModel.changeEdgeType(t4, e4);
        } }, { key: "getNodeEdges", value: function(t4) {
          return this.graphModel.getNodeEdges(t4);
        } }, { key: "addNode", value: function(t4) {
          return this.graphModel.addNode(t4);
        } }, { key: "deleteNode", value: function(t4) {
          var e4 = this.graphModel.getNodeModelById(t4);
          if (!e4)
            return false;
          var r4 = e4.getData(), n4 = this.options.guards, o3 = !n4 || !n4.beforeDelete || n4.beforeDelete(r4);
          return o3 && this.graphModel.deleteNode(t4), o3;
        } }, { key: "cloneNode", value: function(t4) {
          var e4 = this.graphModel.getNodeModelById(t4).getData(), r4 = this.options.guards;
          if (!r4 || !r4.beforeClone || r4.beforeClone(e4))
            return this.graphModel.cloneNode(t4);
        } }, { key: "changeNodeId", value: function(t4, e4) {
          return this.graphModel.changeNodeId(t4, e4);
        } }, { key: "getNodeModelById", value: function(t4) {
          return this.graphModel.getNodeModelById(t4);
        } }, { key: "getNodeDataById", value: function(t4) {
          return this.graphModel.getNodeModelById(t4).getData();
        } }, { key: "addEdge", value: function(t4) {
          return this.graphModel.addEdge(t4);
        } }, { key: "deleteEdge", value: function(t4) {
          var e4 = this.options.guards, r4 = this.graphModel.edgesMap[t4];
          if (!r4)
            return false;
          var n4 = r4.model.getData(), o3 = !e4 || !e4.beforeDelete || e4.beforeDelete(n4);
          return o3 && this.graphModel.deleteEdgeById(t4), o3;
        } }, { key: "deleteEdgeByNodeId", value: function(t4) {
          var e4 = t4.sourceNodeId, r4 = t4.targetNodeId;
          e4 && r4 ? this.graphModel.deleteEdgeBySourceAndTarget(e4, r4) : e4 ? this.graphModel.deleteEdgeBySource(e4) : r4 && this.graphModel.deleteEdgeByTarget(r4);
        } }, { key: "changeEdgeId", value: function(t4, e4) {
          return this.graphModel.changeEdgeId(t4, e4);
        } }, { key: "getEdgeModelById", value: function(t4) {
          var e4;
          return (e4 = this.graphModel.edgesMap[t4]) === null || e4 === void 0 ? void 0 : e4.model;
        } }, { key: "getEdgeModels", value: function(t4) {
          var e4 = this.graphModel.edges, r4 = t4.sourceNodeId, n4 = t4.targetNodeId;
          if (r4 && n4) {
            var o3 = [];
            return e4.forEach(function(t5) {
              t5.sourceNodeId === r4 && t5.targetNodeId === n4 && o3.push(t5);
            }), o3;
          }
          if (r4) {
            var i2 = [];
            return e4.forEach(function(t5) {
              t5.sourceNodeId === r4 && i2.push(t5);
            }), i2;
          }
          if (n4) {
            var a3 = [];
            return e4.forEach(function(t5) {
              t5.targetNodeId === n4 && a3.push(t5);
            }), a3;
          }
          return [];
        } }, { key: "getEdgeDataById", value: function(t4) {
          var e4;
          return (e4 = this.getEdgeModelById(t4)) === null || e4 === void 0 ? void 0 : e4.getData();
        } }, { key: "getNodeIncomingEdge", value: function(t4) {
          return this.graphModel.getNodeIncomingEdge(t4);
        } }, { key: "getNodeOutgoingEdge", value: function(t4) {
          return this.graphModel.getNodeOutgoingEdge(t4);
        } }, { key: "getNodeIncomingNode", value: function(t4) {
          return this.graphModel.getNodeIncomingNode(t4);
        } }, { key: "getNodeOutgoingNode", value: function(t4) {
          return this.graphModel.getNodeOutgoingNode(t4);
        } }, { key: "editText", value: function(t4) {
          this.graphModel.editText(t4);
        } }, { key: "setProperties", value: function(t4, e4) {
          var r4;
          (r4 = this.graphModel.getElement(t4)) === null || r4 === void 0 || r4.setProperties(Ea(e4));
        } }, { key: "getProperties", value: function(t4) {
          var e4;
          return (e4 = this.graphModel.getElement(t4)) === null || e4 === void 0 ? void 0 : e4.getProperties();
        } }, { key: "toFront", value: function(t4) {
          this.graphModel.toFront(t4);
        } }, { key: "setElementZIndex", value: function(t4, e4) {
          return this.graphModel.setElementZIndex(t4, e4);
        } }, { key: "addElements", value: function(t4) {
          for (var e4 = this, r4 = t4.nodes, n4 = t4.edges, o3 = {}, i2 = { nodes: [], edges: [] }, a3 = 0; a3 < r4.length; a3++) {
            var u3 = r4[a3], c3 = u3.id, s3 = this.addNode(u3);
            if (!s3)
              return;
            c3 && (o3[c3] = s3.id), i2.nodes.push(s3);
          }
          return n4.forEach(function(t5) {
            var r5 = t5.sourceNodeId, n5 = t5.targetNodeId;
            o3[r5] && (t5.sourceNodeId = o3[r5]), o3[n5] && (t5.targetNodeId = o3[n5]);
            var a4 = e4.graphModel.addEdge(t5);
            i2.edges.push(a4);
          }), i2;
        } }, { key: "getAreaElement", value: function(t4, e4) {
          return this.graphModel.getAreaElement(t4, e4).map(function(t5) {
            return t5.getData();
          });
        } }, { key: "getSelectElements", value: function() {
          var t4 = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
          return this.graphModel.getSelectElements(t4);
        } }, { key: "clearSelectElements", value: function() {
          this.graphModel.clearSelectElements();
        } }, { key: "getGraphData", value: function() {
          var t4 = this.graphModel.modelToGraphData();
          return this.adapterOut ? this.adapterOut(t4) : t4;
        } }, { key: "getGraphRawData", value: function() {
          return this.graphModel.modelToGraphData();
        } }, { key: "clearData", value: function() {
          this.graphModel.clearData();
        } }, { key: "updateEditConfig", value: function(t4) {
          this.graphModel.editConfigModel.updateEditConfig(t4);
        } }, { key: "getEditConfig", value: function() {
          return this.graphModel.editConfigModel.getConfig();
        } }, { key: "getPointByClient", value: function(t4, e4) {
          return this.graphModel.getPointByClient({ x: t4, y: e4 });
        } }, { key: "undo", value: function() {
          if (this.history.undoAble()) {
            var t4 = Ea(this.history.undo());
            this.clearSelectElements(), this.graphModel.graphDataToModel(t4);
          }
        } }, { key: "redo", value: function() {
          if (this.history.redoAble()) {
            var t4 = Ea(this.history.redo());
            this.clearSelectElements(), this.graphModel.graphDataToModel(t4);
          }
        } }, { key: "zoom", value: function(t4, e4) {
          return this.graphModel.transformModel.zoom(t4, e4);
        } }, { key: "resetZoom", value: function() {
          this.graphModel.transformModel.resetZoom();
        } }, { key: "setZoomMiniSize", value: function(t4) {
          this.graphModel.transformModel.setZoomMiniSize(t4);
        } }, { key: "setZoomMaxSize", value: function(t4) {
          this.graphModel.transformModel.setZoomMaxSize(t4);
        } }, { key: "getTransform", value: function() {
          var t4 = this.graphModel.transformModel;
          return { SCALE_X: t4.SCALE_X, SCALE_Y: t4.SCALE_Y, TRANSLATE_X: t4.TRANSLATE_X, TRANSLATE_Y: t4.TRANSLATE_Y };
        } }, { key: "translate", value: function(t4, e4) {
          this.graphModel.transformModel.translate(t4, e4);
        } }, { key: "resetTranslate", value: function() {
          var t4 = this.graphModel.transformModel, e4 = t4.TRANSLATE_X, r4 = t4.TRANSLATE_Y;
          this.translate(-e4, -r4);
        } }, { key: "on", value: function(t4, e4) {
          this.graphModel.eventCenter.on(t4, e4);
        } }, { key: "off", value: function(t4, e4) {
          this.graphModel.eventCenter.off(t4, e4);
        } }, { key: "once", value: function(t4, e4) {
          this.graphModel.eventCenter.once(t4, e4);
        } }, { key: "emit", value: function(t4, e4) {
          this.graphModel.eventCenter.emit(t4, e4);
        } }, { key: "installPlugins", value: function() {
          var e4, r4 = this, n4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o3 = (e4 = this.plugins) !== null && e4 !== void 0 ? e4 : t3.extensions;
          o3.forEach(function(t4) {
            var e5 = t4.pluginName || t4.name;
            n4.indexOf(e5) === -1 && r4.installPlugin(t4);
          });
        } }, { key: "installPlugin", value: function(e4) {
          if (hm(e4) === "object") {
            var r4 = e4.install, n4 = e4.render;
            return r4 && r4.call(e4, this, t3), n4 && this.components.push(n4.bind(e4)), void (this.extension[e4.pluginName] = e4);
          }
          var o3 = e4, i2 = new o3({ lf: this, LogicFlow: t3 });
          i2.render && this.components.push(i2.render.bind(i2)), this.extension[o3.pluginName] = i2;
        } }, { key: "updateAttributes", value: function(t4, e4) {
          this.graphModel.updateAttributes(t4, e4);
        } }, { key: "createFakerNode", value: function(t4) {
          var e4 = this.graphModel.modelMap.get(t4.type);
          if (e4) {
            var r4 = new e4(bm(bm({}, t4), {}, { virtual: true }), this.graphModel);
            return this.graphModel.setFakerNode(r4), r4;
          }
          console.warn("\u4E0D\u5B58\u5728\u4E3A".concat(t4.type, "\u7C7B\u578B\u7684\u8282\u70B9"));
        } }, { key: "removeFakerNode", value: function() {
          this.graphModel.removeFakerNode();
        } }, { key: "setNodeSnapLine", value: function(t4) {
          this.snaplineModel && this.snaplineModel.setNodeSnapLine(t4);
        } }, { key: "removeNodeSnapLine", value: function() {
          this.snaplineModel && this.snaplineModel.clearSnapline();
        } }, { key: "setView", value: function(t4, e4) {
          this.viewMap.set(t4, e4);
        } }, { key: "render", value: function() {
          var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          this.adapterIn && (t4 = this.adapterIn(t4)), this.graphModel.graphDataToModel(Ea(t4)), this.options.isSilentMode || this.options.history === false || this.history.watch(this.graphModel), Object(Q.j)(Object(Q.g)(zl, { getView: this.getView, tool: this.tool, options: this.options, dnd: this.dnd, snaplineModel: this.snaplineModel, graphModel: this.graphModel }), this.container), this.emit(to.GRAPH_RENDERED, this.graphModel.modelToGraphData());
        } }]) && gm(e3.prototype, r3), n3 && gm(e3, n3), t3;
      }();
      function wm(t3) {
        return J(t3);
      }
      mm(Om, "extensions", /* @__PURE__ */ new Map());
      e2.default = Om;
    }]);
  });
})(logicFlow, logicFlow.exports);
var LogicFlow = /* @__PURE__ */ getDefaultExportFromCjs(logicFlow.exports);
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var hat_1 = createCommonjsModule(function(module) {
  var hat = module.exports = function(bits, base) {
    if (!base)
      base = 16;
    if (bits === void 0)
      bits = 128;
    if (bits <= 0)
      return "0";
    var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
    for (var i = 2; digits === Infinity; i *= 2) {
      digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
    }
    var rem = digits - Math.floor(digits);
    var res = "";
    for (var i = 0; i < Math.floor(digits); i++) {
      var x2 = Math.floor(Math.random() * base).toString(base);
      res = x2 + res;
    }
    if (rem) {
      var b2 = Math.pow(base, rem);
      var x2 = Math.floor(Math.random() * b2).toString(base);
      res = x2 + res;
    }
    var parsed = parseInt(res, base);
    if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
      return hat(bits, base);
    } else
      return res;
  };
  hat.rack = function(bits, base, expandBy) {
    var fn = function(data) {
      var iters = 0;
      do {
        if (iters++ > 10) {
          if (expandBy)
            bits += expandBy;
          else
            throw new Error("too many ID collisions, use more bits");
        }
        var id = hat(bits, base);
      } while (Object.hasOwnProperty.call(hats, id));
      hats[id] = data;
      return id;
    };
    var hats = fn.hats = {};
    fn.get = function(id) {
      return fn.hats[id];
    };
    fn.set = function(id, value) {
      fn.hats[id] = value;
      return fn;
    };
    fn.bits = bits || 128;
    fn.base = base || 16;
    return fn;
  };
});
function Ids(seed) {
  if (!(this instanceof Ids)) {
    return new Ids(seed);
  }
  seed = seed || [128, 36, 1];
  this._seed = seed.length ? hat_1.rack(seed[0], seed[1], seed[2]) : seed;
}
Ids.prototype.next = function(element) {
  return this._seed(element || true);
};
Ids.prototype.nextPrefixed = function(prefix, element) {
  var id;
  do {
    id = prefix + this.next(true);
  } while (this.assigned(id));
  this.claim(id, element);
  return id;
};
Ids.prototype.claim = function(id, element) {
  this._seed.set(id, element || true);
};
Ids.prototype.assigned = function(id) {
  return this._seed.get(id) || false;
};
Ids.prototype.unclaim = function(id) {
  delete this._seed.hats[id];
};
Ids.prototype.clear = function() {
  var hats = this._seed.hats, id;
  for (id in hats) {
    this.unclaim(id);
  }
};
var ids$1 = new Ids([32, 32, 1]);
function getBpmnId$1() {
  return ids$1.next();
}
var __extends$d = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var StartEventModel = function(_super) {
  __extends$d(StartEventModel2, _super);
  function StartEventModel2(data, graphModel) {
    var _this = this;
    if (!data.id) {
      data.id = "Event_" + getBpmnId$1();
    }
    if (!data.text) {
      data.text = "";
    }
    if (data.text && typeof data.text === "string") {
      data.text = {
        value: data.text,
        x: data.x,
        y: data.y + 40
      };
    }
    _this = _super.call(this, data, graphModel) || this;
    return _this;
  }
  StartEventModel2.prototype.setAttributes = function() {
    this.r = 18;
  };
  StartEventModel2.prototype.getConnectedTargetRules = function() {
    var rules = _super.prototype.getConnectedTargetRules.call(this);
    var notAsTarget = {
      message: "\u8D77\u59CB\u8282\u70B9\u4E0D\u80FD\u4F5C\u4E3A\u8FB9\u7684\u7EC8\u70B9",
      validate: function() {
        return false;
      }
    };
    rules.push(notAsTarget);
    return rules;
  };
  StartEventModel2.extendKey = "StartEventModel";
  return StartEventModel2;
}(logicFlow.exports.CircleNodeModel);
var StartEventView = function(_super) {
  __extends$d(StartEventView2, _super);
  function StartEventView2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  StartEventView2.extendKey = "StartEventNode";
  return StartEventView2;
}(logicFlow.exports.CircleNode);
var StartEvent = {
  type: "bpmn:startEvent",
  view: StartEventView,
  model: StartEventModel
};
var __extends$c = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$b = globalThis && globalThis.__assign || function() {
  __assign$b = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$b.apply(this, arguments);
};
var EndEventModel = function(_super) {
  __extends$c(EndEventModel2, _super);
  function EndEventModel2(data, graphModel) {
    var _this = this;
    if (!data.id) {
      data.id = "Event_" + getBpmnId$1();
    }
    if (!data.text) {
      data.text = "";
    }
    if (data.text && typeof data.text === "string") {
      data.text = {
        value: data.text,
        x: data.x,
        y: data.y + 40
      };
    }
    _this = _super.call(this, data, graphModel) || this;
    return _this;
  }
  EndEventModel2.prototype.setAttributes = function() {
    this.r = 18;
  };
  EndEventModel2.prototype.getConnectedSourceRules = function() {
    var rules = _super.prototype.getConnectedSourceRules.call(this);
    var notAsSource = {
      message: "\u7ED3\u675F\u8282\u70B9\u4E0D\u80FD\u4F5C\u4E3A\u8FB9\u7684\u8D77\u70B9",
      validate: function() {
        return false;
      }
    };
    rules.push(notAsSource);
    return rules;
  };
  EndEventModel2.extendKey = "EndEventModel";
  return EndEventModel2;
}(logicFlow.exports.CircleNodeModel);
var EndEventView = function(_super) {
  __extends$c(EndEventView2, _super);
  function EndEventView2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  EndEventView2.prototype.getAnchorStyle = function() {
    return {
      visibility: "hidden"
    };
  };
  EndEventView2.prototype.getShape = function() {
    var model = this.props.model;
    var style = model.getNodeStyle();
    var x2 = model.x, y2 = model.y, r2 = model.r;
    var outCircle = _super.prototype.getShape.call(this);
    return logicFlow.exports.h("g", {}, outCircle, logicFlow.exports.h("circle", __assign$b(__assign$b({}, style), { cx: x2, cy: y2, r: r2 - 5 })));
  };
  EndEventView2.extendKey = "EndEventView";
  return EndEventView2;
}(logicFlow.exports.CircleNode);
var EndEvent = {
  type: "bpmn:endEvent",
  view: EndEventView,
  model: EndEventModel
};
var __extends$b = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$a = globalThis && globalThis.__assign || function() {
  __assign$a = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$a.apply(this, arguments);
};
var ExclusiveGatewayModel = function(_super) {
  __extends$b(ExclusiveGatewayModel2, _super);
  function ExclusiveGatewayModel2(data, graphModel) {
    var _this = this;
    if (!data.id) {
      data.id = "Gateway_" + getBpmnId$1();
    }
    if (!data.text) {
      data.text = "";
    }
    if (data.text && typeof data.text === "string") {
      data.text = {
        value: data.text,
        x: data.x,
        y: data.y + 40
      };
    }
    _this = _super.call(this, data, graphModel) || this;
    _this.points = [
      [25, 0],
      [50, 25],
      [25, 50],
      [0, 25]
    ];
    return _this;
  }
  ExclusiveGatewayModel2.extendKey = "ExclusiveGatewayModel";
  return ExclusiveGatewayModel2;
}(logicFlow.exports.PolygonNodeModel);
var ExclusiveGatewayView = function(_super) {
  __extends$b(ExclusiveGatewayView2, _super);
  function ExclusiveGatewayView2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ExclusiveGatewayView2.prototype.getShape = function() {
    var model = this.props.model;
    var x2 = model.x, y2 = model.y, width = model.width, height = model.height, points = model.points;
    var style = model.getNodeStyle();
    return logicFlow.exports.h("g", {
      transform: "matrix(1 0 0 1 " + (x2 - width / 2) + " " + (y2 - height / 2) + ")"
    }, logicFlow.exports.h("polygon", __assign$a(__assign$a({}, style), {
      x: x2,
      y: y2,
      points
    })), logicFlow.exports.h("path", __assign$a({ d: "m 16,15 7.42857142857143,9.714285714285715 -7.42857142857143,9.714285714285715 3.428571428571429,0 5.714285714285715,-7.464228571428572 5.714285714285715,7.464228571428572 3.428571428571429,0 -7.42857142857143,-9.714285714285715 7.42857142857143,-9.714285714285715 -3.428571428571429,0 -5.714285714285715,7.464228571428572 -5.714285714285715,-7.464228571428572 -3.428571428571429,0 z" }, style)));
  };
  ExclusiveGatewayView2.extendKey = "ExclusiveGatewayNode";
  return ExclusiveGatewayView2;
}(logicFlow.exports.PolygonNode);
var ExclusiveGateway = {
  type: "bpmn:exclusiveGateway",
  view: ExclusiveGatewayView,
  model: ExclusiveGatewayModel
};
var __extends$a = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$9 = globalThis && globalThis.__assign || function() {
  __assign$9 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$9.apply(this, arguments);
};
var UserTaskModel = function(_super) {
  __extends$a(UserTaskModel2, _super);
  function UserTaskModel2(data, graphModel) {
    var _this = this;
    if (!data.id) {
      data.id = "Activity_" + getBpmnId$1();
    }
    _this = _super.call(this, data, graphModel) || this;
    return _this;
  }
  UserTaskModel2.extendKey = "UserTaskModel";
  return UserTaskModel2;
}(logicFlow.exports.RectNodeModel);
var UserTaskView = function(_super) {
  __extends$a(UserTaskView2, _super);
  function UserTaskView2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  UserTaskView2.prototype.getLabelShape = function() {
    var model = this.props.model;
    var x2 = model.x, y2 = model.y, width = model.width, height = model.height;
    var style = model.getNodeStyle();
    return logicFlow.exports.h("svg", {
      x: x2 - width / 2 + 5,
      y: y2 - height / 2 + 5,
      width: 25,
      height: 25,
      viewBox: "0 0 1274 1024"
    }, logicFlow.exports.h("path", {
      fill: style.stroke,
      d: "M655.807326 287.35973m-223.989415 0a218.879 218.879 0 1 0 447.978829 0 218.879 218.879 0 1 0-447.978829 0ZM1039.955839 895.482975c-0.490184-212.177424-172.287821-384.030443-384.148513-384.030443-211.862739 0-383.660376 171.85302-384.15056 384.030443L1039.955839 895.482975z"
    }));
  };
  UserTaskView2.prototype.getShape = function() {
    var model = this.props.model;
    var x2 = model.x, y2 = model.y, width = model.width, height = model.height, radius = model.radius;
    var style = model.getNodeStyle();
    return logicFlow.exports.h("g", {}, [
      logicFlow.exports.h("rect", __assign$9(__assign$9({}, style), {
        x: x2 - width / 2,
        y: y2 - height / 2,
        rx: radius,
        ry: radius,
        width,
        height
      })),
      this.getLabelShape()
    ]);
  };
  UserTaskView2.extendKey = "UserTaskNode";
  return UserTaskView2;
}(logicFlow.exports.RectNode);
var UserTask = {
  type: "bpmn:userTask",
  view: UserTaskView,
  model: UserTaskModel
};
var __extends$9 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$8 = globalThis && globalThis.__assign || function() {
  __assign$8 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$8.apply(this, arguments);
};
var ServiceTaskModel = function(_super) {
  __extends$9(ServiceTaskModel2, _super);
  function ServiceTaskModel2(data, graphModel) {
    var _this = this;
    if (!data.id) {
      data.id = "Activity_" + getBpmnId$1();
    }
    _this = _super.call(this, data, graphModel) || this;
    return _this;
  }
  ServiceTaskModel2.extendKey = "ServiceTaskModel";
  return ServiceTaskModel2;
}(logicFlow.exports.RectNodeModel);
var ServiceTaskView = function(_super) {
  __extends$9(ServiceTaskView2, _super);
  function ServiceTaskView2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ServiceTaskView2.prototype.getLabelShape = function() {
    var model = this.props.model;
    var x2 = model.x, y2 = model.y, width = model.width, height = model.height;
    var style = model.getNodeStyle();
    return logicFlow.exports.h("svg", {
      x: x2 - width / 2 + 5,
      y: y2 - height / 2 + 5,
      width: 30,
      height: 30,
      viewBox: "0 0 1274 1024"
    }, logicFlow.exports.h("path", {
      fill: style.stroke,
      d: "M882.527918 434.149934c-2.234901-5.303796-7.311523-8.853645-13.059434-9.138124l-61.390185-3.009544c-6.635117-20.973684-15.521508-41.175795-26.513864-60.282968l42.051745-47.743374c4.308119-4.889357 4.955872-12.004405 1.602498-17.59268-46.384423-77.30362-103.969956-101.422947-106.400309-102.410438-5.332449-2.170432-11.432377-1.090844-15.693424 2.77009L654.674467 240.664222c-17.004279-8.654101-35.092239-15.756869-53.995775-21.210068l-3.26537-66.490344c-0.280386-5.747911-3.833305-10.824533-9.134031-13.059434-1.683339-0.709151-30.193673-12.391215-76.866668-12.051477-46.672996-0.339738-75.18333 11.342326-76.866668 12.051477-5.300726 2.234901-8.853645 7.311523-9.134031 13.059434l-3.26537 66.490344c-18.903535 5.453199-36.991496 12.555967-53.995775 21.210068l-48.450479-43.922349c-4.261047-3.860934-10.360975-4.940522-15.693424-2.77009-2.430352 0.98749-60.015885 25.106818-106.400309 102.410438-3.353374 5.588275-2.705622 12.703323 1.602498 17.59268l42.051745 47.743374c-10.992355 19.107173-19.878746 39.309284-26.513864 60.282968l-61.390185 3.009544c-5.747911 0.284479-10.824533 3.834328-13.059434 9.138124-1.01512 2.415003-24.687262 60.190871-2.822278 147.651828 1.583055 6.324032 7.072069 10.893094 13.57518 11.308557 5.892197 0.37146 11.751648 0.523933 17.419741 0.667196 14.498202 0.372483 28.193109 0.723477 40.908712 4.63353 4.212952 1.294482 6.435573 8.270361 9.349949 18.763342 1.287319 4.640694 2.617617 9.43693 4.484128 14.010085 1.794879 4.393054 3.75758 8.570189 5.66093 12.607132 1.302669 2.765997 2.529613 5.380544 3.689019 8.018627 2.986007 6.803963 2.682086 9.773598 2.578732 10.349719-3.061732 3.672646-6.391571 7.238868-9.91379 11.015891-1.810229 1.943258-3.680832 3.949962-5.523807 5.980201l-22.560832 24.8909c-3.865028 4.261047-4.940522 10.365068-2.774183 15.693424 0.991584 2.426259 25.102724 60.011792 102.414531 106.400309 5.588275 3.353374 12.703323 2.701528 17.591657-1.603521l23.476691-20.682042c2.346441-2.061962 4.64888-4.336772 6.875594-6.534833 9.05319-8.93858 14.018272-12.95608 17.73185-11.576663 3.305279 1.222851 6.907317 3.166109 10.720156 5.228071 3.325745 1.794879 6.764054 3.650133 10.465352 5.288446 6.016017 2.662643 12.120039 4.688789 18.019399 6.65149 6.827499 2.266623 13.279445 4.409426 18.819624 7.275707 1.518586 0.782829 1.926886 0.994654 2.358721 7.830339 0.726547 11.496845 1.25048 23.276123 1.753947 34.672684 0.264013 5.900384 0.528026 11.803837 0.815575 17.700127 0.284479 5.743818 3.833305 10.82044 9.138124 13.05534 1.654686 0.698918 29.371958 12.063757 74.869175 12.063757 0.328481 0 3.65832 0 3.986801 0 45.497217 0 73.214489-11.364839 74.869175-12.063757 5.304819-2.234901 8.853645-7.311523 9.138124-13.05534 0.287549-5.89629 0.551562-11.799744 0.815575-17.700127 0.503467-11.396561 1.027399-23.175839 1.753947-34.672684 0.431835-6.835685 0.840134-7.04751 2.358721-7.830339 5.54018-2.866281 11.992125-5.009084 18.819624-7.275707 5.89936-1.962701 12.003382-3.988848 18.019399-6.65149 3.701299-1.638313 7.139607-3.493567 10.465352-5.288446 3.812839-2.061962 7.414877-4.00522 10.720156-5.228071 3.713578-1.379417 8.67866 2.638083 17.73185 11.576663 2.226714 2.198062 4.529153 4.472871 6.875594 6.534833l23.476691 20.682042c4.888334 4.305049 12.003382 4.956895 17.591657 1.603521 77.311807-46.388517 101.422947-103.97405 102.414531-106.400309 2.166339-5.328355 1.090844-11.432377-2.774183-15.693424l-22.560832-24.8909c-1.842974-2.030239-3.713578-4.036943-5.523807-5.980201-3.52222-3.777023-6.852058-7.343245-9.91379-11.015891-0.103354-0.576121-0.407276-3.545756 2.578732-10.349719 1.159406-2.638083 2.38635-5.252631 3.689019-8.018627 1.90335-4.036943 3.866051-8.214079 5.66093-12.607132 1.866511-4.573155 3.196809-9.369392 4.484128-14.010085 2.914376-10.492982 5.136997-17.46886 9.349949-18.763342 12.715603-3.910053 26.41051-4.261047 40.908712-4.63353 5.668093-0.143263 11.527544-0.295735 17.419741-0.667196 6.503111-0.415462 11.992125-4.984524 13.57518-11.308557C907.21518 494.340805 883.543038 436.564937 882.527918 434.149934zM643.49894 643.761929c-35.280528 35.280528-82.191954 54.711066-132.086317 54.711066s-96.806813-19.430538-132.086317-54.711066c-35.280528-35.279504-54.711066-82.191954-54.711066-132.086317 0-49.894364 19.430538-96.80272 54.711066-132.082224 35.283598-35.284621 82.191954-54.711066 132.086317-54.711066s96.80579 19.426445 132.086317 54.711066c35.279504 35.279504 54.711066 82.187861 54.711066 132.082224C698.210006 561.569976 678.782537 608.482425 643.49894 643.761929z"
    }));
  };
  ServiceTaskView2.prototype.getShape = function() {
    var model = this.props.model;
    var x2 = model.x, y2 = model.y, width = model.width, height = model.height, radius = model.radius;
    var style = model.getNodeStyle();
    return logicFlow.exports.h("g", {}, [
      logicFlow.exports.h("rect", __assign$8({
        x: x2 - width / 2,
        y: y2 - height / 2,
        rx: radius,
        ry: radius,
        width,
        height
      }, style)),
      this.getLabelShape()
    ]);
  };
  ServiceTaskView2.extendKey = "ServiceTaskNode";
  return ServiceTaskView2;
}(logicFlow.exports.RectNode);
var ServiceTask = {
  type: "bpmn:serviceTask",
  view: ServiceTaskView,
  model: ServiceTaskModel
};
var __extends$8 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var SequenceFlowModel = function(_super) {
  __extends$8(SequenceFlowModel2, _super);
  function SequenceFlowModel2(data, graphModel) {
    var _this = this;
    if (!data.id) {
      data.id = "Flow_" + getBpmnId$1();
    }
    _this = _super.call(this, data, graphModel) || this;
    return _this;
  }
  SequenceFlowModel2.extendKey = "SequenceFlowModel";
  return SequenceFlowModel2;
}(logicFlow.exports.PolylineEdgeModel);
var SequenceFlowView = function(_super) {
  __extends$8(SequenceFlowView2, _super);
  function SequenceFlowView2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SequenceFlowView2.extendKey = "SequenceFlowEdge";
  return SequenceFlowView2;
}(logicFlow.exports.PolylineEdge);
var SequenceFlow = {
  type: "bpmn:sequenceFlow",
  view: SequenceFlowView,
  model: SequenceFlowModel
};
var StartEventConfig = {
  width: 40,
  height: 40
};
var EndEventConfig = {
  width: 40,
  height: 40
};
var ExclusiveGatewayConfig = {
  width: 40,
  height: 40
};
var ServiceTaskConfig = {
  width: 100,
  height: 80
};
var UserTaskConfig = {
  width: 100,
  height: 80
};
var theme = {
  rect: {
    radius: 5,
    stroke: "rgb(24, 125, 255)"
  },
  circle: {
    r: 18,
    stroke: "rgb(24, 125, 255)"
  },
  polygon: {
    stroke: "rgb(24, 125, 255)"
  },
  polyline: {
    stroke: "rgb(24, 125, 255)",
    hoverStroke: "rgb(24, 125, 255)",
    selectedStroke: "rgb(24, 125, 255)"
  },
  edgeText: {
    background: {
      fill: "white",
      height: 14,
      stroke: "transparent",
      radius: 3
    }
  }
};
var BpmnElement = function() {
  function BpmnElement2(_a) {
    var lf = _a.lf;
    lf.setTheme(theme);
    lf.register(StartEvent);
    lf.register(EndEvent);
    lf.register(ExclusiveGateway);
    lf.register(UserTask);
    lf.register(ServiceTask);
    if (!lf.options.customBpmnEdge) {
      lf.register(SequenceFlow);
      lf.setDefaultEdgeType("bpmn:sequenceFlow");
    }
  }
  BpmnElement2.pluginName = "bpmnElement";
  return BpmnElement2;
}();
var Snapshot = {
  pluginName: "snapshot",
  install: function(lf) {
    var _this = this;
    this.lf = lf;
    lf.getSnapshot = function(fileName, backgroundColor) {
      _this.offsetX = Number.MAX_SAFE_INTEGER;
      _this.offsetY = Number.MAX_SAFE_INTEGER;
      _this.fileName = fileName || "logic-flow." + Date.now() + ".png";
      var svgRootElement = _this.getSvgRootElement(lf);
      _this.downloadSvg(svgRootElement, _this.fileName, backgroundColor);
    };
    lf.getSnapshotBlob = function(backgroundColor) {
      _this.offsetX = Number.MAX_SAFE_INTEGER;
      _this.offsetY = Number.MAX_SAFE_INTEGER;
      var svgRootElement = _this.getSvgRootElement(lf);
      return _this.getBlob(svgRootElement, backgroundColor);
    };
    lf.getSnapshotBase64 = function(backgroundColor) {
      _this.offsetX = Number.MAX_SAFE_INTEGER;
      _this.offsetY = Number.MAX_SAFE_INTEGER;
      var svgRootElement = _this.getSvgRootElement(lf);
      return _this.getBase64(svgRootElement, backgroundColor);
    };
  },
  getSvgRootElement: function(lf) {
    var _this = this;
    lf.graphModel.nodes.forEach(function(item) {
      var x2 = item.x, width = item.width, y2 = item.y, height = item.height;
      var offsetX = x2 - width / 2;
      var offsetY = y2 - height / 2;
      if (offsetX < _this.offsetX) {
        _this.offsetX = offsetX - 5;
      }
      if (offsetY < _this.offsetY) {
        _this.offsetY = offsetY - 5;
      }
    });
    lf.graphModel.edges.forEach(function(edge) {
      if (edge.pointsList) {
        edge.pointsList.forEach(function(point) {
          var x2 = point.x, y2 = point.y;
          if (x2 < _this.offsetX) {
            _this.offsetX = x2 - 5;
          }
          if (y2 < _this.offsetY) {
            _this.offsetY = y2 - 5;
          }
        });
      }
    });
    var svgRootElement = lf.container.querySelector(".lf-canvas-overlay");
    return svgRootElement;
  },
  triggerDownload: function(imgURI) {
    var evt = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true
    });
    var a2 = document.createElement("a");
    a2.setAttribute("download", this.fileName);
    a2.setAttribute("href", imgURI);
    a2.setAttribute("target", "_blank");
    a2.dispatchEvent(evt);
  },
  removeAnchor: function(element) {
    var childNodes = element.childNodes;
    var childLength = element.childNodes && element.childNodes.length;
    for (var i = 0; i < childLength; i++) {
      var child = childNodes[i];
      var classList = child.classList && Array.from(child.classList) || [];
      if (classList.indexOf("lf-anchor") > -1) {
        element.removeChild(element.childNodes[i]);
        childLength--;
        i--;
      }
    }
  },
  downloadSvg: function(svg, fileName, backgroundColor) {
    var _this = this;
    this.getCanvasData(svg, backgroundColor).then(function(canvas) {
      var imgURI = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      _this.triggerDownload(imgURI, fileName);
    });
  },
  getBase64: function(svg, backgroundColor) {
    var _this = this;
    return new Promise(function(resolve) {
      _this.getCanvasData(svg, backgroundColor).then(function(canvas) {
        var base64 = canvas.toDataURL("image/png");
        resolve({ data: base64, width: canvas.width, height: canvas.height });
      });
    });
  },
  getBlob: function(svg, backgroundColor) {
    var _this = this;
    return new Promise(function(resolve) {
      _this.getCanvasData(svg, backgroundColor).then(function(canvas) {
        canvas.toBlob(function(blob) {
          resolve({ data: blob, width: canvas.width, height: canvas.height });
        }, "image/png");
      });
    });
  },
  getClassRules: function() {
    var rules = "";
    var styleSheets = document.styleSheets;
    for (var i = 0; i < styleSheets.length; i++) {
      var sheet = styleSheets[i];
      for (var j2 = 0; j2 < sheet.cssRules.length; j2++) {
        rules += sheet.cssRules[j2].cssText;
      }
    }
    return rules;
  },
  getCanvasData: function(svg, backgroundColor) {
    var _this = this;
    var copy = svg.cloneNode(true);
    var graph = copy.lastChild;
    var childLength = graph.childNodes && graph.childNodes.length;
    if (childLength) {
      for (var i = 0; i < childLength; i++) {
        var lfLayer = graph.childNodes[i];
        var layerClassList = lfLayer.classList && Array.from(lfLayer.classList);
        if (layerClassList && layerClassList.indexOf("lf-base") < 0) {
          graph.removeChild(graph.childNodes[i]);
          childLength--;
          i--;
        } else {
          var lfBase = graph.childNodes[i];
          lfBase && lfBase.childNodes.forEach(function(item) {
            var element = item;
            _this.removeAnchor(element.firstChild);
          });
        }
      }
    }
    copy.lastChild.style.transform = "matrix(1, 0, 0, 1, " + (-this.offsetX + 10) + ", " + (-this.offsetY + 10) + ")";
    var dpr = window.devicePixelRatio || 1;
    var canvas = document.createElement("canvas");
    var base = document.getElementsByClassName("lf-base")[0];
    var bbox = base.getBoundingClientRect();
    var graphModel = this.lf.graphModel;
    var transformModel = graphModel.transformModel;
    var SCALE_X = transformModel.SCALE_X, SCALE_Y = transformModel.SCALE_Y;
    var bboxWidth = Math.ceil(bbox.width / SCALE_X);
    var bboxHeight = Math.ceil(bbox.height / SCALE_Y);
    canvas.style.width = bboxWidth + "px";
    canvas.style.height = bboxHeight + "px";
    canvas.width = bboxWidth * dpr + 80;
    canvas.height = bboxHeight * dpr + 80;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);
    if (backgroundColor) {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, bboxWidth * dpr + 80, bboxHeight * dpr + 80);
    } else {
      ctx.clearRect(0, 0, bboxWidth, bboxHeight);
    }
    var img = new Image();
    var style = document.createElement("style");
    style.innerHTML = this.getClassRules();
    var foreignObject = document.createElement("foreignObject");
    foreignObject.appendChild(style);
    copy.appendChild(foreignObject);
    return new Promise(function(resolve) {
      img.onload = function() {
        ctx.drawImage(img, 0, 0);
        resolve(canvas);
      };
      var svg2Img = "data:image/svg+xml;charset=utf-8," + new XMLSerializer().serializeToString(copy);
      var imgSrc = svg2Img.replace(/\n/g, "").replace(/\t/g, "").replace(/#/g, "%23");
      img.src = imgSrc;
    });
  }
};
var ids = new Ids([32, 32, 1]);
function getBpmnId() {
  return ids.next();
}
var XML = function() {
};
XML.ObjTree = function() {
  return this;
};
XML.ObjTree.VERSION = "0.23";
XML.ObjTree.prototype.xmlDecl = '<?xml version="1.0" encoding="UTF-8" ?>\n';
XML.ObjTree.prototype.attr_prefix = "-";
XML.ObjTree.prototype.parseXML = function(xml) {
  var root;
  if (window.DOMParser) {
    var xmldom = new DOMParser();
    var dom = xmldom.parseFromString(xml, "application/xml");
    if (!dom)
      return;
    root = dom.documentElement;
  } else if (window.ActiveXObject) {
    xmldom = new ActiveXObject("Microsoft.XMLDOM");
    xmldom.async = false;
    xmldom.loadXML(xml);
    root = xmldom.documentElement;
  }
  if (!root)
    return;
  return this.parseDOM(root);
};
XML.ObjTree.prototype.parseHTTP = function(url, options, callback) {
  var myopt = {};
  for (var key2 in options) {
    myopt[key2] = options[key2];
  }
  if (!myopt.method) {
    if (typeof myopt.postBody == "undefined" && typeof myopt.postbody == "undefined" && typeof myopt.parameters == "undefined") {
      myopt.method = "get";
    } else {
      myopt.method = "post";
    }
  }
  if (callback) {
    myopt.asynchronous = true;
    var __this = this;
    var __func = callback;
    var __save = myopt.onComplete;
    myopt.onComplete = function(trans2) {
      var tree;
      if (trans2 && trans2.responseXML && trans2.responseXML.documentElement) {
        tree = __this.parseDOM(trans2.responseXML.documentElement);
      }
      __func(tree, trans2);
      if (__save)
        __save(trans2);
    };
  } else {
    myopt.asynchronous = false;
  }
  var trans;
  if (typeof HTTP != "undefined" && HTTP.Request) {
    myopt.uri = url;
    var req = new HTTP.Request(myopt);
    if (req)
      trans = req.transport;
  } else if (typeof Ajax != "undefined" && Ajax.Request) {
    var req = new Ajax.Request(url, myopt);
    if (req)
      trans = req.transport;
  }
  if (callback)
    return trans;
  if (trans && trans.responseXML && trans.responseXML.documentElement) {
    return this.parseDOM(trans.responseXML.documentElement);
  }
};
XML.ObjTree.prototype.parseDOM = function(root) {
  if (!root)
    return;
  this.__force_array = {};
  if (this.force_array) {
    for (var i = 0; i < this.force_array.length; i++) {
      this.__force_array[this.force_array[i]] = 1;
    }
  }
  var json = this.parseElement(root);
  if (this.__force_array[root.nodeName]) {
    json = [json];
  }
  if (root.nodeType != 11) {
    var tmp = {};
    tmp[root.nodeName] = json;
    json = tmp;
  }
  return json;
};
XML.ObjTree.prototype.parseElement = function(elem) {
  if (elem.nodeType == 7) {
    return;
  }
  if (elem.nodeType == 3 || elem.nodeType == 4) {
    var bool = elem.nodeValue.match(/[^\x00-\x20]/);
    if (bool == null)
      return;
    return elem.nodeValue;
  }
  var retval;
  var cnt = {};
  if (elem.attributes && elem.attributes.length) {
    retval = {};
    for (var i = 0; i < elem.attributes.length; i++) {
      var key2 = elem.attributes[i].nodeName;
      if (typeof key2 != "string")
        continue;
      var val = elem.attributes[i].nodeValue;
      if (!val)
        continue;
      key2 = this.attr_prefix + key2;
      if (typeof cnt[key2] == "undefined")
        cnt[key2] = 0;
      cnt[key2]++;
      this.addNode(retval, key2, cnt[key2], val);
    }
  }
  if (elem.childNodes && elem.childNodes.length) {
    var textonly = true;
    if (retval)
      textonly = false;
    for (var i = 0; i < elem.childNodes.length && textonly; i++) {
      var ntype = elem.childNodes[i].nodeType;
      if (ntype == 3 || ntype == 4)
        continue;
      textonly = false;
    }
    if (textonly) {
      if (!retval)
        retval = "";
      for (var i = 0; i < elem.childNodes.length; i++) {
        retval += elem.childNodes[i].nodeValue;
      }
    } else {
      if (!retval)
        retval = {};
      for (var i = 0; i < elem.childNodes.length; i++) {
        var key2 = elem.childNodes[i].nodeName;
        if (typeof key2 != "string")
          continue;
        var val = this.parseElement(elem.childNodes[i]);
        if (!val)
          continue;
        if (typeof cnt[key2] == "undefined")
          cnt[key2] = 0;
        cnt[key2]++;
        this.addNode(retval, key2, cnt[key2], val);
      }
    }
  }
  return retval;
};
XML.ObjTree.prototype.addNode = function(hash, key2, cnts, val) {
  if (this.__force_array[key2]) {
    if (cnts == 1)
      hash[key2] = [];
    hash[key2][hash[key2].length] = val;
  } else if (cnts == 1) {
    hash[key2] = val;
  } else if (cnts == 2) {
    hash[key2] = [hash[key2], val];
  } else {
    hash[key2][hash[key2].length] = val;
  }
};
XML.ObjTree.prototype.writeXML = function(tree) {
  var xml = this.hash_to_xml(null, tree);
  return this.xmlDecl + xml;
};
XML.ObjTree.prototype.hash_to_xml = function(name, tree) {
  var elem = [];
  var attr = [];
  for (var key2 in tree) {
    if (!tree.hasOwnProperty(key2))
      continue;
    var val = tree[key2];
    if (key2.charAt(0) != this.attr_prefix) {
      if (typeof val == "undefined" || val == null) {
        elem[elem.length] = "<" + key2 + " />";
      } else if (typeof val == "object" && val.constructor == Array) {
        elem[elem.length] = this.array_to_xml(key2, val);
      } else if (typeof val == "object") {
        elem[elem.length] = this.hash_to_xml(key2, val);
      } else {
        elem[elem.length] = this.scalar_to_xml(key2, val);
      }
    } else {
      attr[attr.length] = " " + key2.substring(1) + '="' + this.xml_escape(val) + '"';
    }
  }
  var jattr = attr.join("");
  var jelem = elem.join("");
  if (typeof name == "undefined" || name == null)
    ;
  else if (elem.length > 0) {
    if (jelem.match(/\n/)) {
      jelem = "<" + name + jattr + ">\n" + jelem + "</" + name + ">\n";
    } else {
      jelem = "<" + name + jattr + ">" + jelem + "</" + name + ">\n";
    }
  } else {
    jelem = "<" + name + jattr + " />\n";
  }
  return jelem;
};
XML.ObjTree.prototype.array_to_xml = function(name, array) {
  var out = [];
  for (var i = 0; i < array.length; i++) {
    var val = array[i];
    if (typeof val == "undefined" || val == null) {
      out[out.length] = "<" + name + " />";
    } else if (typeof val == "object" && val.constructor == Array) {
      out[out.length] = this.array_to_xml(name, val);
    } else if (typeof val == "object") {
      out[out.length] = this.hash_to_xml(name, val);
    } else {
      out[out.length] = this.scalar_to_xml(name, val);
    }
  }
  return out.join("");
};
XML.ObjTree.prototype.scalar_to_xml = function(name, text) {
  if (name == "#text") {
    return this.xml_escape(text);
  } else {
    return "<" + name + ">" + this.xml_escape(text) + "</" + name + ">\n";
  }
};
XML.ObjTree.prototype.xml_escape = function(text) {
  return text.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, '"');
};
var __read$7 = globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var BpmnElements;
(function(BpmnElements2) {
  BpmnElements2["START"] = "bpmn:startEvent";
  BpmnElements2["END"] = "bpmn:endEvent";
  BpmnElements2["GATEWAY"] = "bpmn:exclusiveGateway";
  BpmnElements2["USER"] = "bpmn:userTask";
  BpmnElements2["SYSTEM"] = "bpmn:serviceTask";
  BpmnElements2["FLOW"] = "bpmn:sequenceFlow";
})(BpmnElements || (BpmnElements = {}));
var defaultAttrs = ["-name", "-id", "bpmn:incoming", "bpmn:outgoing", "-sourceRef", "-targetRef"];
function toXmlJson(json) {
  var xmlJson = {};
  Object.entries(json).forEach(function(_a) {
    var _b = __read$7(_a, 2), key2 = _b[0], value = _b[1];
    if (typeof value !== "object") {
      if (key2.indexOf("-") === 0) {
        xmlJson[key2] = value;
      } else {
        xmlJson["-" + key2] = value;
      }
    } else {
      xmlJson[key2] = toXmlJson(value);
    }
  });
  return xmlJson;
}
function toNormalJson(xmlJson) {
  var json = {};
  Object.entries(xmlJson).forEach(function(_a) {
    var _b = __read$7(_a, 2), key2 = _b[0], value = _b[1];
    if (typeof value === "string") {
      if (key2.indexOf("-") === 0) {
        json[key2.substr(1)] = value;
      } else {
        json[key2] = value;
      }
    } else if (typeof value === "object") {
      json[key2] = toNormalJson(value);
    } else {
      json[key2] = value;
    }
  });
  return json;
}
function convertLf2ProcessData(bpmnProcessData, data) {
  var nodeMap = /* @__PURE__ */ new Map();
  data.nodes.forEach(function(node) {
    var _a;
    var processNode = {
      "-id": node.id
    };
    if ((_a = node.text) === null || _a === void 0 ? void 0 : _a.value) {
      processNode["-name"] = node.text.value;
    }
    if (node.properties) {
      var properties = toXmlJson(node.properties);
      Object.assign(processNode, properties);
    }
    nodeMap.set(node.id, processNode);
    if (!bpmnProcessData[node.type]) {
      bpmnProcessData[node.type] = processNode;
    } else if (Array.isArray(bpmnProcessData[node.type])) {
      bpmnProcessData[node.type].push(processNode);
    } else {
      bpmnProcessData[node.type] = [
        bpmnProcessData[node.type],
        processNode
      ];
    }
  });
  var sequenceFlow = data.edges.map(function(edge) {
    var _a, _b;
    var targetNode = nodeMap.get(edge.targetNodeId);
    if (!targetNode["bpmn:incoming"]) {
      targetNode["bpmn:incoming"] = edge.id;
    } else if (Array.isArray(targetNode["bpmn:incoming"])) {
      targetNode["bpmn:incoming"].push(edge.id);
    } else {
      targetNode["bpmn:incoming"] = [
        targetNode["bpmn:incoming"],
        edge.id
      ];
    }
    var sourceNode = nodeMap.get(edge.sourceNodeId);
    if (!sourceNode["bpmn:outgoing"]) {
      sourceNode["bpmn:outgoing"] = edge.id;
    } else if (Array.isArray(sourceNode["bpmn:outgoing"])) {
      sourceNode["bpmn:outgoing"].push(edge.id);
    } else {
      sourceNode["bpmn:outgoing"] = [
        sourceNode["bpmn:outgoing"],
        edge.id
      ];
    }
    var edgeConfig = {
      "-id": edge.id,
      "-sourceRef": edge.sourceNodeId,
      "-targetRef": edge.targetNodeId
    };
    if ((_a = edge.text) === null || _a === void 0 ? void 0 : _a.value) {
      edgeConfig["-name"] = (_b = edge.text) === null || _b === void 0 ? void 0 : _b.value;
    }
    if (edge.properties) {
      var properties = toXmlJson(edge.properties);
      Object.assign(edgeConfig, properties);
    }
    return edgeConfig;
  });
  bpmnProcessData[BpmnElements.FLOW] = sequenceFlow;
}
function convertLf2DiagramData(bpmnDiagramData, data) {
  bpmnDiagramData["bpmndi:BPMNEdge"] = data.edges.map(function(edge) {
    var _a;
    var edgeId = edge.id;
    var pointsList = edge.pointsList.map(function(_a2) {
      var x2 = _a2.x, y2 = _a2.y;
      return { "-x": x2, "-y": y2 };
    });
    var diagramData = {
      "-id": edgeId + "_di",
      "-bpmnElement": edgeId,
      "di:waypoint": pointsList
    };
    if ((_a = edge.text) === null || _a === void 0 ? void 0 : _a.value) {
      diagramData["bpmndi:BPMNLabel"] = {
        "dc:Bounds": {
          "-x": edge.text.x - edge.text.value.length * 10 / 2,
          "-y": edge.text.y - 7,
          "-width": edge.text.value.length * 10,
          "-height": 14
        }
      };
    }
    return diagramData;
  });
  bpmnDiagramData["bpmndi:BPMNShape"] = data.nodes.map(function(node) {
    var _a;
    var nodeId = node.id;
    var width = 100;
    var height = 80;
    var x2 = node.x, y2 = node.y;
    var shapeConfig = BpmnAdapter.shapeConfigMap.get(node.type);
    if (shapeConfig) {
      width = shapeConfig.width;
      height = shapeConfig.height;
    }
    x2 -= width / 2;
    y2 -= height / 2;
    var diagramData = {
      "-id": nodeId + "_di",
      "-bpmnElement": nodeId,
      "dc:Bounds": {
        "-x": x2,
        "-y": y2,
        "-width": width,
        "-height": height
      }
    };
    if ((_a = node.text) === null || _a === void 0 ? void 0 : _a.value) {
      diagramData["bpmndi:BPMNLabel"] = {
        "dc:Bounds": {
          "-x": node.text.x - node.text.value.length * 10 / 2,
          "-y": node.text.y - 7,
          "-width": node.text.value.length * 10,
          "-height": 14
        }
      };
    }
    return diagramData;
  });
}
function convertBpmn2LfData(bpmnData) {
  var nodes = [];
  var edges = [];
  var definitions = bpmnData["bpmn:definitions"];
  if (definitions) {
    var process_1 = definitions["bpmn:process"];
    Object.keys(process_1).forEach(function(key2) {
      if (key2.indexOf("bpmn:") === 0) {
        var value = process_1[key2];
        if (key2 === BpmnElements.FLOW) {
          var bpmnEdges = definitions["bpmndi:BPMNDiagram"]["bpmndi:BPMNPlane"]["bpmndi:BPMNEdge"];
          edges = getLfEdges(value, bpmnEdges);
        } else {
          var shapes = definitions["bpmndi:BPMNDiagram"]["bpmndi:BPMNPlane"]["bpmndi:BPMNShape"];
          nodes = nodes.concat(getLfNodes(value, shapes, key2));
        }
      }
    });
  }
  return {
    nodes,
    edges
  };
}
function getLfNodes(value, shapes, key2) {
  var nodes = [];
  if (Array.isArray(value)) {
    value.forEach(function(val) {
      var shapeValue2;
      if (Array.isArray(shapes)) {
        shapeValue2 = shapes.find(function(shape) {
          return shape["-bpmnElement"] === val["-id"];
        });
      } else {
        shapeValue2 = shapes;
      }
      var node2 = getNodeConfig(shapeValue2, key2, val);
      nodes.push(node2);
    });
  } else {
    var shapeValue = void 0;
    if (Array.isArray(shapes)) {
      shapeValue = shapes.find(function(shape) {
        return shape["-bpmnElement"] === value["-id"];
      });
    } else {
      shapeValue = shapes;
    }
    var node = getNodeConfig(shapeValue, key2, value);
    nodes.push(node);
  }
  return nodes;
}
function getNodeConfig(shapeValue, type, processValue) {
  var x2 = Number(shapeValue["dc:Bounds"]["-x"]);
  var y2 = Number(shapeValue["dc:Bounds"]["-y"]);
  var name = processValue["-name"];
  var shapeConfig = BpmnAdapter.shapeConfigMap.get(type);
  if (shapeConfig) {
    x2 += shapeConfig.width / 2;
    y2 += shapeConfig.height / 2;
  }
  var properties;
  Object.entries(processValue).forEach(function(_a) {
    var _b = __read$7(_a, 2), key2 = _b[0], value = _b[1];
    if (defaultAttrs.indexOf(key2) === -1) {
      if (!properties)
        properties = {};
      properties[key2] = value;
    }
  });
  if (properties) {
    properties = toNormalJson(properties);
  }
  var text;
  if (name) {
    text = {
      x: x2,
      y: y2,
      value: name
    };
    if (shapeValue["bpmndi:BPMNLabel"] && shapeValue["bpmndi:BPMNLabel"]["dc:Bounds"]) {
      var textBounds = shapeValue["bpmndi:BPMNLabel"]["dc:Bounds"];
      text.x = Number(textBounds["-x"]) + Number(textBounds["-width"]) / 2;
      text.y = Number(textBounds["-y"]) + Number(textBounds["-height"]) / 2;
    }
  }
  var nodeConfig = {
    id: shapeValue["-bpmnElement"],
    type,
    x: x2,
    y: y2,
    properties
  };
  if (text) {
    nodeConfig.text = text;
  }
  return nodeConfig;
}
function getLfEdges(value, bpmnEdges) {
  var edges = [];
  if (Array.isArray(value)) {
    value.forEach(function(val) {
      var edgeValue2;
      if (Array.isArray(bpmnEdges)) {
        edgeValue2 = bpmnEdges.find(function(edge) {
          return edge["-bpmnElement"] === val["-id"];
        });
      } else {
        edgeValue2 = bpmnEdges;
      }
      edges.push(getEdgeConfig(edgeValue2, val));
    });
  } else {
    var edgeValue = void 0;
    if (Array.isArray(bpmnEdges)) {
      edgeValue = bpmnEdges.find(function(edge) {
        return edge["-bpmnElement"] === value["-id"];
      });
    } else {
      edgeValue = bpmnEdges;
    }
    edges.push(getEdgeConfig(edgeValue, value));
  }
  return edges;
}
function getEdgeConfig(edgeValue, processValue) {
  var text;
  var textVal = processValue["-name"];
  if (textVal) {
    var textBounds = edgeValue["bpmndi:BPMNLabel"]["dc:Bounds"];
    var textLength_1 = 0;
    textVal.split("\n").forEach(function(textSpan) {
      if (textLength_1 < textSpan.length) {
        textLength_1 = textSpan.length;
      }
    });
    text = {
      value: textVal,
      x: Number(textBounds["-x"]) + textLength_1 * 10 / 2,
      y: Number(textBounds["-y"]) + 7
    };
  }
  var properties;
  Object.entries(processValue).forEach(function(_a) {
    var _b = __read$7(_a, 2), key2 = _b[0], value = _b[1];
    if (defaultAttrs.indexOf(key2) === -1) {
      if (!properties)
        properties = {};
      properties[key2] = value;
    }
  });
  if (properties) {
    properties = toNormalJson(properties);
  }
  var edge = {
    id: processValue["-id"],
    type: BpmnElements.FLOW,
    pointsList: edgeValue["di:waypoint"].map(function(point) {
      return {
        x: Number(point["-x"]),
        y: Number(point["-y"])
      };
    }),
    sourceNodeId: processValue["-sourceRef"],
    targetNodeId: processValue["-targetRef"],
    properties
  };
  if (text) {
    edge.text = text;
  }
  return edge;
}
var BpmnAdapter = {
  pluginName: "bpmn-adapter",
  install: function(lf) {
    lf.adapterIn = this.adapterIn;
    lf.adapterOut = this.adapterOut;
  },
  shapeConfigMap: /* @__PURE__ */ new Map(),
  setCustomShape: function(key2, val) {
    this.shapeConfigMap.set(key2, val);
  },
  adapterOut: function(data) {
    var bpmnProcessData = {
      "-id": "Process_" + getBpmnId(),
      "-isExecutable": "false"
    };
    convertLf2ProcessData(bpmnProcessData, data);
    var bpmnDiagramData = {
      "-id": "BPMNPlane_1",
      "-bpmnElement": bpmnProcessData["-id"]
    };
    convertLf2DiagramData(bpmnDiagramData, data);
    var bpmnData = {
      "bpmn:definitions": {
        "-id": "Definitions_" + getBpmnId(),
        "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "-xmlns:bpmn": "http://www.omg.org/spec/BPMN/20100524/MODEL",
        "-xmlns:bpmndi": "http://www.omg.org/spec/BPMN/20100524/DI",
        "-xmlns:dc": "http://www.omg.org/spec/DD/20100524/DC",
        "-xmlns:di": "http://www.omg.org/spec/DD/20100524/DI",
        "-targetNamespace": "http://bpmn.io/schema/bpmn",
        "-exporter": "bpmn-js (https://demo.bpmn.io)",
        "-exporterVersion": "7.3.0",
        "bpmn:process": bpmnProcessData,
        "bpmndi:BPMNDiagram": {
          "-id": "BPMNDiagram_1",
          "bpmndi:BPMNPlane": bpmnDiagramData
        }
      }
    };
    return bpmnData;
  },
  adapterIn: function(bpmnData) {
    if (bpmnData) {
      return convertBpmn2LfData(bpmnData);
    }
  }
};
BpmnAdapter.shapeConfigMap.set(BpmnElements.START, {
  width: StartEventConfig.width,
  height: StartEventConfig.height
});
BpmnAdapter.shapeConfigMap.set(BpmnElements.END, {
  width: EndEventConfig.width,
  height: EndEventConfig.height
});
BpmnAdapter.shapeConfigMap.set(BpmnElements.GATEWAY, {
  width: ExclusiveGatewayConfig.width,
  height: ExclusiveGatewayConfig.height
});
BpmnAdapter.shapeConfigMap.set(BpmnElements.SYSTEM, {
  width: ServiceTaskConfig.width,
  height: ServiceTaskConfig.height
});
BpmnAdapter.shapeConfigMap.set(BpmnElements.USER, {
  width: UserTaskConfig.width,
  height: UserTaskConfig.height
});
var __assign$7 = globalThis && globalThis.__assign || function() {
  __assign$7 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$7.apply(this, arguments);
};
var TurboType$1;
(function(TurboType2) {
  TurboType2[TurboType2["SEQUENCE_FLOW"] = 1] = "SEQUENCE_FLOW";
  TurboType2[TurboType2["START_EVENT"] = 2] = "START_EVENT";
  TurboType2[TurboType2["END_EVENT"] = 3] = "END_EVENT";
  TurboType2[TurboType2["USER_TASK"] = 4] = "USER_TASK";
  TurboType2[TurboType2["EXCLUSIVE_GATEWAY"] = 6] = "EXCLUSIVE_GATEWAY";
})(TurboType$1 || (TurboType$1 = {}));
var SegmentDirection;
(function(SegmentDirection2) {
  SegmentDirection2["HORIZONTAL"] = "horizontal";
  SegmentDirection2["VERTICAL"] = "vertical";
})(SegmentDirection || (SegmentDirection = {}));
var __read$6 = globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read$6(arguments[i]));
  return ar;
};
var __read$5 = globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read$5(arguments[i]));
  return ar;
};
var __read$4 = globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread$1 = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read$4(arguments[i]));
  return ar;
};
var DefalutNodeMenuKey = "lf:defaultNodeMenu";
var DefalutEdgeMenuKey = "lf:defaultEdgeMenu";
var DefalutGraphMenuKey = "lf:defaultGraphMenu";
var DefalutSelectionMenuKey = "lf:defaultSelectionMenu";
var Menu = function() {
  function Menu2(_a) {
    var _this = this;
    var lf = _a.lf;
    this.__menuDOM = document.createElement("ul");
    this.lf = lf;
    this.menuTypeMap = /* @__PURE__ */ new Map();
    this.init();
    this.lf.setMenuConfig = function(config) {
      _this.setMenuConfig(config);
    };
    this.lf.addMenuConfig = function(config) {
      _this.addMenuConfig(config);
    };
    this.lf.setMenuByType = function(config) {
      _this.setMenuByType(config);
    };
  }
  Menu2.prototype.init = function() {
    var _this = this;
    var defalutNodeMenu = [
      {
        text: "\u5220\u9664",
        callback: function(node) {
          _this.lf.deleteNode(node.id);
        }
      },
      {
        text: "\u7F16\u8F91\u6587\u672C",
        callback: function(node) {
          _this.lf.graphModel.editText(node.id);
        }
      },
      {
        text: "\u590D\u5236",
        callback: function(node) {
          _this.lf.cloneNode(node.id);
        }
      }
    ];
    this.menuTypeMap.set(DefalutNodeMenuKey, defalutNodeMenu);
    var defaultEdgeMenu = [
      {
        text: "\u5220\u9664",
        callback: function(edge) {
          _this.lf.deleteEdge(edge.id);
        }
      },
      {
        text: "\u7F16\u8F91\u6587\u672C",
        callback: function(edge) {
          _this.lf.graphModel.editText(edge.id);
        }
      }
    ];
    this.menuTypeMap.set(DefalutEdgeMenuKey, defaultEdgeMenu);
    this.menuTypeMap.set(DefalutGraphMenuKey, []);
    var DefalutSelectionMenu = [
      {
        text: "\u5220\u9664",
        callback: function(elements) {
          _this.lf.clearSelectElements();
          elements.edges.forEach(function(edge) {
            return _this.lf.deleteEdge(edge.id);
          });
          elements.nodes.forEach(function(node) {
            return _this.lf.deleteNode(node.id);
          });
        }
      }
    ];
    this.menuTypeMap.set(DefalutSelectionMenuKey, DefalutSelectionMenu);
  };
  Menu2.prototype.render = function(lf, container) {
    var _this = this;
    this.__container = container;
    this.__currentData = null;
    this.__menuDOM.className = "lf-menu";
    container.appendChild(this.__menuDOM);
    this.__menuDOM.addEventListener("click", function(event) {
      event.stopPropagation();
      var target = event.target;
      while (Array.from(target.classList).indexOf("lf-menu-item") === -1 && Array.from(target.classList).indexOf("lf-menu") === -1) {
        target = target.parentElement;
      }
      if (Array.from(target.classList).indexOf("lf-menu-item") > -1) {
        target.onclickCallback(_this.__currentData);
        _this.__menuDOM.style.display = "none";
        _this.__currentData = null;
      } else {
        console.warn("\u70B9\u51FB\u533A\u57DF\u4E0D\u5728\u83DC\u5355\u9879\u5185\uFF0C\u8BF7\u68C0\u67E5\u4EE3\u7801\uFF01");
      }
    }, true);
    this.lf.on("node:contextmenu", function(_a) {
      var data = _a.data, position = _a.position;
      var _b = position.domOverlayPosition, x2 = _b.x, y2 = _b.y;
      var id = data.id;
      var model = _this.lf.graphModel.getNodeModelById(id);
      var menuList = [];
      var typeMenus = _this.menuTypeMap.get(model.type);
      if (model && model.menu && Array.isArray(model.menu)) {
        menuList = model.menu;
      } else if (typeMenus) {
        menuList = typeMenus;
      } else {
        menuList = _this.menuTypeMap.get(DefalutNodeMenuKey);
      }
      _this.__currentData = data;
      _this.showMenu(x2, y2, menuList);
    });
    this.lf.on("edge:contextmenu", function(_a) {
      var data = _a.data, position = _a.position;
      var _b = position.domOverlayPosition, x2 = _b.x, y2 = _b.y;
      var id = data.id;
      var model = _this.lf.graphModel.getEdgeModelById(id);
      var menuList = [];
      var typeMenus = _this.menuTypeMap.get(model.type);
      if (model && model.menu && Array.isArray(model.menu)) {
        menuList = model.menu;
      } else if (typeMenus) {
        menuList = typeMenus;
      } else {
        menuList = _this.menuTypeMap.get(DefalutEdgeMenuKey);
      }
      _this.__currentData = data;
      _this.showMenu(x2, y2, menuList);
    });
    this.lf.on("blank:contextmenu", function(_a) {
      var position = _a.position;
      var menuList = _this.menuTypeMap.get(DefalutGraphMenuKey);
      var _b = position.domOverlayPosition, x2 = _b.x, y2 = _b.y;
      _this.showMenu(x2, y2, menuList);
    });
    this.lf.on("selection:contextmenu", function(_a) {
      var data = _a.data, position = _a.position;
      var menuList = _this.menuTypeMap.get(DefalutSelectionMenuKey);
      var _b = position.domOverlayPosition, x2 = _b.x, y2 = _b.y;
      _this.__currentData = data;
      _this.showMenu(x2, y2, menuList);
    });
    this.lf.on("node:mousedown", function() {
      _this.__menuDOM.style.display = "none";
    });
    this.lf.on("edge:click", function() {
      _this.__menuDOM.style.display = "none";
    });
    this.lf.on("blank:click", function() {
      _this.__menuDOM.style.display = "none";
    });
  };
  Menu2.prototype.destroy = function() {
    var _a;
    (_a = this === null || this === void 0 ? void 0 : this.__container) === null || _a === void 0 ? void 0 : _a.removeChild(this.__menuDOM);
    this.__menuDOM = null;
  };
  Menu2.prototype.showMenu = function(x2, y2, menuList) {
    if (!menuList || !menuList.length)
      return;
    var menu = this.__menuDOM;
    menu.innerHTML = "";
    menu.append.apply(menu, __spread$1(this.__getMenuDom(menuList)));
    if (!menu.children.length)
      return;
    menu.style.display = "block";
    menu.style.top = y2 + "px";
    menu.style.left = x2 + "px";
  };
  Menu2.prototype.setMenuByType = function(config) {
    if (!config.type || !config.menu) {
      return;
    }
    this.menuTypeMap.set(config.type, config.menu);
  };
  Menu2.prototype.__getMenuDom = function(list) {
    var menuList = [];
    list && list.length > 0 && list.forEach(function(item) {
      var element = document.createElement("li");
      if (item.className) {
        element.className = "lf-menu-item " + item.className;
      } else {
        element.className = "lf-menu-item";
      }
      if (item.icon === true) {
        var icon = document.createElement("span");
        icon.className = "lf-menu-item-icon";
        element.appendChild(icon);
      }
      var text = document.createElement("span");
      text.className = "lf-menu-item-text";
      if (item.text) {
        text.innerText = item.text;
      }
      element.appendChild(text);
      element.onclickCallback = item.callback;
      menuList.push(element);
    });
    return menuList;
  };
  Menu2.prototype.setMenuConfig = function(config) {
    if (!config) {
      return;
    }
    config.nodeMenu !== void 0 && this.menuTypeMap.set(DefalutNodeMenuKey, config.nodeMenu ? config.nodeMenu : []);
    config.edgeMenu !== void 0 && this.menuTypeMap.set(DefalutEdgeMenuKey, config.edgeMenu ? config.edgeMenu : []);
    config.graphMenu !== void 0 && this.menuTypeMap.set(DefalutGraphMenuKey, config.graphMenu ? config.graphMenu : []);
  };
  Menu2.prototype.addMenuConfig = function(config) {
    if (!config) {
      return;
    }
    if (Array.isArray(config.nodeMenu)) {
      var menuList = this.menuTypeMap.get(DefalutNodeMenuKey);
      this.menuTypeMap.set(DefalutNodeMenuKey, menuList.concat(config.nodeMenu));
    }
    if (Array.isArray(config.edgeMenu)) {
      var menuList = this.menuTypeMap.get(DefalutEdgeMenuKey);
      this.menuTypeMap.set(DefalutEdgeMenuKey, menuList.concat(config.edgeMenu));
    }
    if (Array.isArray(config.graphMenu)) {
      var menuList = this.menuTypeMap.get(DefalutGraphMenuKey);
      this.menuTypeMap.set(DefalutGraphMenuKey, menuList.concat(config.graphMenu));
    }
  };
  Menu2.prototype.changeMenuItem = function(type, config) {
    if (type === "add")
      this.addMenuConfig(config);
    else if (type === "reset")
      this.setMenuConfig(config);
    else {
      throw new Error("The first parameter of changeMenuConfig should be 'add' or 'reset'");
    }
  };
  Menu2.pluginName = "menu";
  return Menu2;
}();
globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var DndPanel = function() {
  function DndPanel2(_a) {
    var _this = this;
    var lf = _a.lf;
    this.lf = lf;
    this.lf.setPatternItems = function(shapeList) {
      _this.setPatternItems(shapeList);
    };
  }
  DndPanel2.prototype.render = function(lf, domContainer) {
    var _this = this;
    this.destroy();
    if (!this.shapeList || this.shapeList.length === 0) {
      this.domContainer = domContainer;
      return;
    }
    this.panelEl = document.createElement("div");
    this.panelEl.className = "lf-dndpanel";
    this.shapeList.forEach(function(shapeItem) {
      _this.panelEl.appendChild(_this.createDndItem(shapeItem));
    });
    domContainer.appendChild(this.panelEl);
    this.domContainer = domContainer;
  };
  DndPanel2.prototype.destroy = function() {
    if (this.domContainer && this.panelEl && this.domContainer.contains(this.panelEl)) {
      this.domContainer.removeChild(this.panelEl);
    }
  };
  DndPanel2.prototype.setPatternItems = function(shapeList) {
    this.shapeList = shapeList;
    if (this.domContainer) {
      this.render(this.lf, this.domContainer);
    }
  };
  DndPanel2.prototype.createDndItem = function(shapeItem) {
    var _this = this;
    var el = document.createElement("div");
    el.className = shapeItem.className ? "lf-dnd-item " + shapeItem.className : "lf-dnd-item";
    var shape = document.createElement("div");
    shape.className = "lf-dnd-shape";
    if (shapeItem.icon) {
      shape.style.backgroundImage = "url(" + shapeItem.icon + ")";
    }
    el.appendChild(shape);
    if (shapeItem.label) {
      var text = document.createElement("div");
      text.innerText = shapeItem.label;
      text.className = "lf-dnd-text";
      el.appendChild(text);
    }
    el.onmousedown = function() {
      if (shapeItem.type) {
        _this.lf.dnd.startDrag({
          type: shapeItem.type,
          properties: shapeItem.properties,
          text: shapeItem.text
        });
      }
      if (shapeItem.callback) {
        shapeItem.callback(_this.lf, _this.domContainer);
      }
    };
    return el;
  };
  DndPanel2.pluginName = "dndPanel";
  return DndPanel2;
}();
var SelectionSelect = function() {
  function SelectionSelect2(_a) {
    var _this = this;
    var lf = _a.lf;
    this.__disabled = false;
    this.isDefalutStopMoveGraph = false;
    this.__draw = function(ev) {
      var _a2 = _this.lf.getPointByClient(ev.clientX, ev.clientY).domOverlayPosition, x1 = _a2.x, y1 = _a2.y;
      _this.endPoint = { x: x1, y: y1 };
      var _b = _this.startPoint, x2 = _b.x, y2 = _b.y;
      var style = _this.wrapper.style;
      var left = x2;
      var top = y2;
      var width = x1 - x2;
      var height = y1 - y2;
      if (x1 < x2) {
        left = x1;
        width = x2 - x1;
      }
      if (y1 < y2) {
        top = y1;
        height = y2 - y1;
      }
      style.left = left + "px";
      style.top = top + "px";
      style.width = width + "px";
      style.height = height + "px";
    };
    this.__drawOff = function() {
      document.removeEventListener("mousemove", _this.__draw);
      document.removeEventListener("mouseup", _this.__drawOff);
      _this.__domContainer.removeChild(_this.wrapper);
      var _a2 = _this.startPoint, x2 = _a2.x, y2 = _a2.y;
      var _b = _this.endPoint, x1 = _b.x, y1 = _b.y;
      var lt = [Math.min(x2, x1), Math.min(y2, y1)];
      var rt = [Math.max(x2, x1), Math.max(y2, y1)];
      var elements = _this.lf.getAreaElement(lt, rt);
      elements.forEach(function(element) {
        _this.lf.selectElementById(element.id, true);
      });
      _this.lf.emit("selection:selected", elements);
    };
    this.lf = lf;
    var stopMoveGraph = lf.getEditConfig().stopMoveGraph;
    this.isDefalutStopMoveGraph = stopMoveGraph;
    lf.openSelectionSelect = function() {
      _this.openSelectionSelect();
    };
    lf.closeSelectionSelect = function() {
      _this.closeSelectionSelect();
    };
  }
  SelectionSelect2.prototype.render = function(lf, domContainer) {
    var _this = this;
    this.__domContainer = domContainer;
    lf.on("blank:mousedown", function(_a) {
      var e2 = _a.e;
      var config = lf.getEditConfig();
      if (!config.stopMoveGraph || _this.__disabled) {
        return;
      }
      var _b = lf.getPointByClient(e2.clientX, e2.clientY).domOverlayPosition, x2 = _b.x, y2 = _b.y;
      _this.startPoint = { x: x2, y: y2 };
      _this.endPoint = { x: x2, y: y2 };
      var wrapper = document.createElement("div");
      wrapper.className = "lf-selection-select";
      wrapper.style.top = _this.startPoint.y + "px";
      wrapper.style.left = _this.startPoint.x + "px";
      domContainer.appendChild(wrapper);
      _this.wrapper = wrapper;
      document.addEventListener("mousemove", _this.__draw);
      document.addEventListener("mouseup", _this.__drawOff);
    });
  };
  SelectionSelect2.prototype.openSelectionSelect = function() {
    var stopMoveGraph = this.lf.getEditConfig().stopMoveGraph;
    if (!stopMoveGraph) {
      this.isDefalutStopMoveGraph = false;
      this.lf.updateEditConfig({
        stopMoveGraph: true
      });
    }
    this.open();
  };
  SelectionSelect2.prototype.closeSelectionSelect = function() {
    if (!this.isDefalutStopMoveGraph) {
      this.lf.updateEditConfig({
        stopMoveGraph: false
      });
    }
    this.close();
  };
  SelectionSelect2.prototype.open = function() {
    this.__disabled = false;
  };
  SelectionSelect2.prototype.close = function() {
    this.__disabled = true;
  };
  SelectionSelect2.pluginName = "selectionSelect";
  return SelectionSelect2;
}();
globalThis && globalThis.__values || function(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i = 0;
  if (m2)
    return m2.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i >= o2.length)
          o2 = void 0;
        return { value: o2 && o2[i++], done: !o2 };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __extends$7 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __read$3 = globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
(function(_super) {
  __extends$7(CurvedEdgeView, _super);
  function CurvedEdgeView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  CurvedEdgeView.prototype.getEdge = function() {
    var _a = this.props.model.getEdgeStyle(), strokeWidth = _a.strokeWidth, stroke = _a.stroke, strokeDashArray = _a.strokeDashArray;
    var points = this.props.model.points;
    var points2 = points.split(" ").map(function(p) {
      return p.split(",").map(function(a2) {
        return Number(a2);
      });
    });
    var _b = __read$3(points2[0], 2), startX = _b[0], startY = _b[1];
    var d2 = "M" + startX + " " + startY;
    var space = 5;
    for (var i = 1; i < points2.length - 1; i++) {
      var _c = __read$3(points2[i - 1], 2), preX = _c[0], preY = _c[1];
      var _d = __read$3(points2[i], 2), currentX = _d[0], currentY = _d[1];
      var _e = __read$3(points2[i + 1], 2), nextX = _e[0], nextY = _e[1];
      if (currentX === preX && currentY !== preY) {
        var y2 = currentY > preY ? currentY - space : currentY + space;
        d2 = d2 + " L " + currentX + " " + y2;
      }
      if (currentY === preY && currentX !== preX) {
        var x2 = currentX > preX ? currentX - space : currentX + space;
        d2 = d2 + " L " + x2 + " " + currentY;
      }
      d2 = d2 + " Q " + currentX + " " + currentY;
      if (currentX === nextX && currentY !== nextY) {
        var y2 = currentY > nextY ? currentY - space : currentY + space;
        d2 = d2 + " " + currentX + " " + y2;
      }
      if (currentY === nextY && currentX !== nextX) {
        var x2 = currentX > nextX ? currentX - space : currentX + space;
        d2 = d2 + " " + x2 + " " + currentY;
      }
    }
    var _f = __read$3(points2[points2.length - 1], 2), endX = _f[0], endY = _f[1];
    d2 = d2 + " L " + endX + " " + endY;
    return logicFlow.exports.h("path", {
      d: d2,
      strokeWidth,
      stroke,
      fill: "none",
      strokeDashArray
    });
  };
  CurvedEdgeView.extendKey = "curvedEdge";
  return CurvedEdgeView;
})(logicFlow.exports.PolylineEdge);
(function(_super) {
  __extends$7(CurvedEdgeModel, _super);
  function CurvedEdgeModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return CurvedEdgeModel;
})(logicFlow.exports.PolylineEdgeModel);
var n, l, u, t, r, o, e = {}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function h(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function v(l2, u2, i) {
  var t2, r2, o2, f = {};
  for (o2 in u2)
    o2 == "key" ? t2 = u2[o2] : o2 == "ref" ? r2 = u2[o2] : f[o2] = u2[o2];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), typeof l2 == "function" && l2.defaultProps != null)
    for (o2 in l2.defaultProps)
      f[o2] === void 0 && (f[o2] = l2.defaultProps[o2]);
  return y(l2, f, t2, r2, null);
}
function y(n2, i, t2, r2, o2) {
  var f = { type: n2, props: i, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++u : o2 };
  return o2 == null && l.vnode != null && l.vnode(f), f;
}
function d(n2) {
  return n2.children;
}
function _(n2, l2) {
  this.props = n2, this.context = l2;
}
function k(n2, l2) {
  if (l2 == null)
    return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? k(n2) : null;
}
function b(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return b(n2);
  }
}
function m(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l2, u2, i, t2, r2, o2;
      n3.__d && (r2 = (t2 = (l2 = n3).__v).__e, (o2 = l2.__P) && (u2 = [], (i = a({}, t2)).__v = t2.__v + 1, j(o2, t2, i, l2.__n, o2.ownerSVGElement !== void 0, t2.__h != null ? [r2] : null, u2, r2 == null ? k(t2) : r2, t2.__h), z(u2, t2), t2.__e != r2 && b(t2)));
    });
}
function w(n2, l2, u2, i, t2, r2, o2, f, s2, a2) {
  var h2, v2, p, _2, b2, m2, g2, w2 = i && i.__k || c, A = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((_2 = u2.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
      if (_2.__ = u2, _2.__b = u2.__b + 1, (p = w2[h2]) === null || p && _2.key == p.key && _2.type === p.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < A; v2++) {
          if ((p = w2[v2]) && _2.key == p.key && _2.type === p.type) {
            w2[v2] = void 0;
            break;
          }
          p = null;
        }
      j(n2, _2, p = p || e, t2, r2, o2, f, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p.ref != v2 && (g2 || (g2 = []), p.ref && g2.push(p.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k === p.__k ? _2.__d = s2 = x(_2, s2, n2) : s2 = P(n2, _2, p, w2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && p.__e == s2 && s2.parentNode != n2 && (s2 = k(p));
    }
  for (u2.__e = m2, h2 = A; h2--; )
    w2[h2] != null && (typeof u2.type == "function" && w2[h2].__e != null && w2[h2].__e == u2.__d && (u2.__d = k(i, h2 + 1)), N(w2[h2], w2[h2]));
  if (g2)
    for (h2 = 0; h2 < g2.length; h2++)
      M(g2[h2], g2[++h2], g2[++h2]);
}
function x(n2, l2, u2) {
  for (var i, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i = t2[r2]) && (i.__ = n2, l2 = typeof i.type == "function" ? x(i, l2, u2) : P(u2, i, i, t2, i.__e, l2));
  return l2;
}
function P(n2, l2, u2, i, t2, r2) {
  var o2, f, e2;
  if (l2.__d !== void 0)
    o2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t2 != r2 || t2.parentNode == null)
    n:
      if (r2 == null || r2.parentNode !== n2)
        n2.appendChild(t2), o2 = null;
      else {
        for (f = r2, e2 = 0; (f = f.nextSibling) && e2 < i.length; e2 += 2)
          if (f == t2)
            break n;
        n2.insertBefore(t2, r2), o2 = r2;
      }
  return o2 !== void 0 ? o2 : t2.nextSibling;
}
function C(n2, l2, u2, i, t2) {
  var r2;
  for (r2 in u2)
    r2 === "children" || r2 === "key" || r2 in l2 || H(n2, r2, null, u2[r2], i);
  for (r2 in l2)
    t2 && typeof l2[r2] != "function" || r2 === "children" || r2 === "key" || r2 === "value" || r2 === "checked" || u2[r2] === l2[r2] || H(n2, r2, l2[r2], u2[r2], i);
}
function $(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || s.test(l2) ? u2 : u2 + "px";
}
function H(n2, l2, u2, i, t2) {
  var r2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i == "string" && (n2.style.cssText = i = ""), i)
          for (l2 in i)
            u2 && l2 in u2 || $(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i && u2[l2] === i[l2] || $(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i || n2.addEventListener(l2, r2 ? T : I, r2) : n2.removeEventListener(l2, r2 ? T : I, r2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t2)
        l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u2, i, t2, r2, o2, f, e2, c2) {
  var s2, h2, v2, y2, p, k2, b2, m2, g2, x2, A, P2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i.__h != null && (c2 = i.__h, e2 = u2.__e = i.__e, u2.__h = null, o2 = [e2]), (s2 = l.__b) && s2(u2);
  try {
    n:
      if (typeof P2 == "function") {
        if (m2 = u2.props, g2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i.__c ? b2 = (h2 = u2.__c = i.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = h2 = new P2(m2, x2) : (u2.__c = h2 = new _(m2, x2), h2.constructor = P2, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p = h2.state, v2)
          P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u2.__v === i.__v) {
            h2.props = m2, h2.state = h2.__s, u2.__v !== i.__v && (h2.__d = false), h2.__v = u2, u2.__e = i.__e, u2.__k = i.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, p, k2);
          });
        }
        h2.context = x2, h2.props = m2, h2.state = h2.__s, (s2 = l.__r) && s2(u2), h2.__d = false, h2.__v = u2, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t2 = a(a({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p)), A = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A) ? A : [A], u2, i, t2, r2, o2, f, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        o2 == null && u2.__v === i.__v ? (u2.__k = i.__k, u2.__e = i.__e) : u2.__e = L(i.__e, u2, i, t2, r2, o2, f, c2);
    (s2 = l.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || o2 != null) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l.__e(n3, u2, i);
  }
}
function z(n2, u2) {
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function L(l2, u2, i, t2, r2, o2, f, c2) {
  var s2, a2, v2, y2 = i.props, p = u2.props, d2 = u2.type, _2 = 0;
  if (d2 === "svg" && (r2 = true), o2 != null) {
    for (; _2 < o2.length; _2++)
      if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
        l2 = s2, o2[_2] = null;
        break;
      }
  }
  if (l2 == null) {
    if (d2 === null)
      return document.createTextNode(p);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p.is && p), o2 = null, c2 = false;
  }
  if (d2 === null)
    y2 === p || c2 && l2.data === p || (l2.data = p);
  else {
    if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i.props || e).dangerouslySetInnerHTML, v2 = p.dangerouslySetInnerHTML, !c2) {
      if (o2 != null)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C(l2, p, y2, r2, c2), v2)
      u2.__k = [];
    else if (_2 = u2.props.children, w(l2, Array.isArray(_2) ? _2 : [_2], u2, i, t2, r2 && d2 !== "foreignObject", o2, f, o2 ? o2[0] : i.__k && k(i, 0), c2), o2 != null)
      for (_2 = o2.length; _2--; )
        o2[_2] != null && h(o2[_2]);
    c2 || ("value" in p && (_2 = p.value) !== void 0 && (_2 !== y2.value || _2 !== l2.value || d2 === "progress" && !_2) && H(l2, "value", _2, y2.value, false), "checked" in p && (_2 = p.checked) !== void 0 && _2 !== l2.checked && H(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function M(n2, u2, i) {
  try {
    typeof n2 == "function" ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l.__e(n3, i);
  }
}
function N(n2, u2, i) {
  var t2, r2;
  if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), (t2 = n2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && N(t2[r2], u2, typeof n2.type != "function");
  i || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l2, u2) {
  return this.constructor(n2, u2);
}
n = c.slice, l = { __e: function(n2, l2) {
  for (var u2, i, t2; l2 = l2.__; )
    if ((u2 = l2.__c) && !u2.__)
      try {
        if ((i = u2.constructor) && i.getDerivedStateFromError != null && (u2.setState(i.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
          return u2.__E = u2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, _.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u2), this.props)), n2 && a(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m(this));
}, _.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
}, _.prototype.render = d, t = [], r = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0;
var __assign$6 = globalThis && globalThis.__assign || function() {
  __assign$6 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$6.apply(this, arguments);
};
function Rect(props) {
  var x2 = props.x, y2 = props.y, width = props.width, height = props.height, radius = props.radius, className = props.className;
  var leftTopX = x2 - width / 2;
  var leftTopY = y2 - height / 2;
  var attrs = __assign$6(__assign$6({
    width: 10,
    height: 10,
    cx: 0,
    cy: 0,
    rx: radius || 0,
    ry: radius || 0,
    fill: "transparent",
    fillOpacity: 1,
    strokeWidth: "1px",
    stroke: "#000",
    strokeOpacity: 1,
    className: "lf-basic-shape " + className
  }, props), { x: leftTopX, y: leftTopY });
  return logicFlow.exports.h("rect", __assign$6({}, attrs));
}
Rect.defaultProps = {
  radius: 0,
  stroke: "",
  strokeDasharray: "",
  className: ""
};
var ModelType;
(function(ModelType2) {
  ModelType2["NODE"] = "node";
  ModelType2["CIRCLE_NODE"] = "circle-node";
  ModelType2["POLYGON_NODE"] = "polygon-node";
  ModelType2["RECT_NODE"] = "rect-node";
  ModelType2["HTML_NODE"] = "html-node";
  ModelType2["TEXT_NODE"] = "text-node";
  ModelType2["ELLIPSE_NODE"] = "ellipse-node";
  ModelType2["DIAMOND_NODE"] = "diamond-node";
  ModelType2["EDGE"] = "edge";
  ModelType2["LINE_EDGE"] = "line-edge";
  ModelType2["POLYLINE_EDGE"] = "polyline-edge";
  ModelType2["BEZIER_EDGE"] = "bezier-edge";
  ModelType2["GRAPH"] = "graph";
})(ModelType || (ModelType = {}));
function getNodeBox(node) {
  var x2 = node.x, y2 = node.y, width = node.width, height = node.height;
  return {
    minX: x2 - width / 2,
    minY: y2 - height / 2,
    maxX: x2 + width / 2,
    maxY: y2 + height / 2
  };
}
function getRidusCenter(node) {
  var nodeBox = getNodeBox(node);
  var radius = node.radius;
  var minX = nodeBox.minX, minY = nodeBox.minY, maxX = nodeBox.maxX, maxY = nodeBox.maxY;
  return [
    {
      x: minX + radius,
      y: minY + radius
    },
    {
      x: maxX - radius,
      y: minY + radius
    },
    {
      x: maxX - radius,
      y: maxY - radius
    },
    {
      x: minX + radius,
      y: maxY - radius
    }
  ];
}
function getRectReizeEdgePoint(_a) {
  var point = _a.point, beforeNode = _a.beforeNode, afterNode = _a.afterNode;
  var x2 = point.x, y2 = point.y;
  var afterPoint = {
    x: x2,
    y: y2
  };
  var radius = beforeNode.radius;
  var beforeNodeBox = getNodeBox(beforeNode);
  var afterNodeBox = getNodeBox(afterNode);
  if (x2 === beforeNodeBox.minX) {
    afterPoint.x = afterNodeBox.minX;
    var pct = (y2 - beforeNode.y) / (beforeNode.height / 2 - radius);
    if (pct) {
      afterPoint.y = afterNode.y + (afterNode.height / 2 - radius) * pct;
    } else {
      afterPoint.y = afterNode.y;
    }
  } else if (x2 === beforeNodeBox.maxX) {
    afterPoint.x = afterNodeBox.maxX;
    var pct = (y2 - beforeNode.y) / (beforeNode.height / 2 - radius);
    if (pct) {
      afterPoint.y = afterNode.y + (afterNode.height / 2 - radius) * pct;
    } else {
      afterPoint.y = afterNode.y;
    }
  } else if (y2 === beforeNodeBox.minY) {
    afterPoint.y = afterNodeBox.minY;
    var pct = (x2 - beforeNode.x) / (beforeNode.width / 2 - radius);
    if (pct) {
      afterPoint.x = afterNode.x + (afterNode.width / 2 - radius) * pct;
    } else {
      afterPoint.x = afterNode.x;
    }
  } else if (y2 === beforeNodeBox.maxY) {
    afterPoint.y = afterNodeBox.maxY;
    var pct = (x2 - beforeNode.x) / (beforeNode.width / 2 - radius);
    if (pct) {
      afterPoint.x = afterNode.x + (afterNode.width / 2 - radius) * pct;
    } else {
      afterPoint.x = afterNode.x;
    }
  } else {
    var beeforCoc = getRidusCenter(beforeNode);
    var afterCoc = getRidusCenter(afterNode);
    var nodeBox = getNodeBox(beforeNode);
    var minX = nodeBox.minX, minY = nodeBox.minY, maxX = nodeBox.maxX, maxY = nodeBox.maxY;
    var index2 = -1;
    if (x2 - minX < radius && y2 - minY < radius) {
      index2 = 0;
    } else if (maxX - x2 < radius && y2 - minY < radius) {
      index2 = 1;
    } else if (maxX - x2 < radius && maxY - y2 < radius) {
      index2 = 2;
    } else if (x2 - minX < radius && minY - y2 < radius) {
      index2 = 3;
    }
    if (index2 > -1) {
      var angle = Math.atan2(y2 - beeforCoc[index2].y, x2 - beeforCoc[index2].x);
      afterPoint.x = afterCoc[index2].x + radius * Math.cos(angle);
      afterPoint.y = afterCoc[index2].y + radius * Math.sin(angle);
    }
  }
  return afterPoint;
}
function getEllipseReizeEdgePoint(_a) {
  var point = _a.point, beforeNode = _a.beforeNode, afterNode = _a.afterNode;
  var rx = afterNode.rx, ry = afterNode.ry;
  var afterPoint = point;
  var tan = (point.y - beforeNode.y) / (point.x - beforeNode.x);
  var a2 = rx;
  var b2 = ry;
  var x2;
  var y2;
  if (tan >= Infinity) {
    x2 = 0;
    y2 = b2;
  } else if (tan <= -Infinity) {
    x2 = 0;
    y2 = -b2;
  } else if (point.x - beforeNode.x > 0) {
    x2 = a2 * b2 / Math.sqrt(b2 * b2 + a2 * a2 * tan * tan);
    y2 = a2 * b2 * tan / Math.sqrt(b2 * b2 + a2 * a2 * tan * tan);
  } else {
    x2 = -(a2 * b2) / Math.sqrt(b2 * b2 + a2 * a2 * tan * tan);
    y2 = -(a2 * b2 * tan) / Math.sqrt(b2 * b2 + a2 * a2 * tan * tan);
  }
  afterPoint = { x: x2 + afterNode.x, y: y2 + afterNode.y };
  return afterPoint;
}
function getDiamondReizeEdgePoint(_a) {
  var point = _a.point, beforeNode = _a.beforeNode, afterNode = _a.afterNode;
  var afterPoint = point;
  var x2;
  var y2;
  var px = point.x - beforeNode.x;
  var py = point.y - beforeNode.y;
  var rxBefore = beforeNode.rx;
  var ryBefore = beforeNode.ry;
  var pct = Math.sqrt((rxBefore - Math.abs(px)) * (rxBefore - Math.abs(px)) + py * py) / Math.sqrt(rxBefore * rxBefore + ryBefore * ryBefore);
  var rxAfter = afterNode.rx;
  var ryAfter = afterNode.ry;
  var a2 = Math.sqrt((rxAfter * rxAfter + ryAfter * ryAfter) * pct * pct * (rxAfter * rxAfter / (rxAfter * rxAfter + ryAfter * ryAfter)));
  var b2 = a2 * (ryAfter / rxAfter);
  if (px >= 0) {
    x2 = rxAfter - a2;
  } else {
    x2 = a2 - rxAfter;
  }
  if (py > 0) {
    y2 = b2;
  } else {
    y2 = -b2;
  }
  afterPoint = {
    x: x2 + afterNode.x,
    y: y2 + afterNode.y
  };
  return afterPoint;
}
var __extends$6 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$5 = globalThis && globalThis.__assign || function() {
  __assign$5 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$5.apply(this, arguments);
};
var createDrag = logicFlow.exports.LogicFlowUtil.createDrag;
var Control = function(_super) {
  __extends$6(Control2, _super);
  function Control2(props) {
    var _this = _super.call(this) || this;
    _this.updatePosition = function(_a) {
      var deltaX = _a.deltaX, deltaY = _a.deltaY;
      var _b = _this.nodeModel, x2 = _b.x, y2 = _b.y;
      _this.nodeModel.x = x2 + deltaX / 2;
      _this.nodeModel.y = y2 + deltaY / 2;
      _this.nodeModel.moveText(deltaX / 2, deltaY / 2);
    };
    _this.getResize = function(_a) {
      var index2 = _a.index, deltaX = _a.deltaX, deltaY = _a.deltaY, width = _a.width, height = _a.height, _b = _a.pct, pct = _b === void 0 ? 1 : _b;
      var resize = { width, height };
      switch (index2) {
        case 0:
          resize.width = width - deltaX * pct;
          resize.height = height - deltaY * pct;
          break;
        case 1:
          resize.width = width + deltaX * pct;
          resize.height = height - deltaY * pct;
          break;
        case 2:
          resize.width = width + deltaX;
          resize.height = height + deltaY * pct;
          break;
        case 3:
          resize.width = width - deltaX * pct;
          resize.height = height + deltaY * pct;
          break;
      }
      return resize;
    };
    _this.updateRect = function(_a) {
      var deltaX = _a.deltaX, deltaY = _a.deltaY;
      var _b = _this.nodeModel, id = _b.id, x2 = _b.x, y2 = _b.y, width = _b.width, height = _b.height, radius = _b.radius;
      var index2 = _this.index;
      var size = _this.getResize({
        index: index2,
        deltaX,
        deltaY,
        width,
        height,
        pct: 1
      });
      var _c = _this.nodeModel, minWidth = _c.minWidth, minHeight = _c.minHeight, maxWidth = _c.maxWidth, maxHeight = _c.maxHeight;
      if (size.width < minWidth || size.width > maxWidth || size.height < minHeight || size.height > maxHeight) {
        return;
      }
      _this.updatePosition({ deltaX, deltaY });
      _this.nodeModel.width = size.width;
      _this.nodeModel.height = size.height;
      _this.nodeModel.setProperties({
        nodeSize: {
          width: size.width,
          height: size.height
        }
      });
      var edges = _this.getNodeEdges(id);
      var beforeNode = {
        x: x2,
        y: y2,
        width,
        height,
        radius
      };
      var afterNode = {
        x: _this.nodeModel.x,
        y: _this.nodeModel.y,
        width: _this.nodeModel.width,
        height: _this.nodeModel.height,
        radius
      };
      var params = {
        point: "",
        beforeNode,
        afterNode
      };
      var afterPoint;
      edges.sourceEdges.forEach(function(item) {
        params.point = item.startPoint;
        afterPoint = getRectReizeEdgePoint(params);
        item.updateStartPoint(afterPoint);
      });
      edges.targetEdges.forEach(function(item) {
        params.point = item.endPoint;
        afterPoint = getRectReizeEdgePoint(params);
        item.updateEndPoint(afterPoint);
      });
      _this.eventEmit({ beforeNode, afterNode });
    };
    _this.updateEllipse = function(_a) {
      var deltaX = _a.deltaX, deltaY = _a.deltaY;
      var _b = _this.nodeModel, id = _b.id, rx = _b.rx, ry = _b.ry, x2 = _b.x, y2 = _b.y;
      var index2 = _this.index;
      var width = rx;
      var height = ry;
      var size = _this.getResize({
        index: index2,
        deltaX,
        deltaY,
        width,
        height,
        pct: 1 / 2
      });
      var _c = _this.nodeModel, minWidth = _c.minWidth, minHeight = _c.minHeight, maxWidth = _c.maxWidth, maxHeight = _c.maxHeight;
      if (size.width < minWidth / 2 || size.width > maxWidth / 2 || size.height < minHeight / 2 || size.height > maxHeight / 2) {
        return;
      }
      _this.updatePosition({ deltaX, deltaY });
      _this.nodeModel.rx = size.width;
      _this.nodeModel.ry = size.height;
      _this.nodeModel.setProperties({
        nodeSize: {
          rx: size.width,
          ry: size.height
        }
      });
      var edges = _this.getNodeEdges(id);
      var beforeNode = { x: x2, y: y2 };
      var afterNode = {
        rx: size.width,
        ry: size.height,
        x: _this.nodeModel.x,
        y: _this.nodeModel.y
      };
      var params = {
        point: {},
        beforeNode,
        afterNode
      };
      var afterPoint;
      edges.sourceEdges.forEach(function(item) {
        params.point = item.startPoint;
        afterPoint = getEllipseReizeEdgePoint(params);
        item.updateStartPoint(afterPoint);
      });
      edges.targetEdges.forEach(function(item) {
        params.point = item.endPoint;
        afterPoint = getEllipseReizeEdgePoint(params);
        item.updateEndPoint(afterPoint);
      });
      _this.eventEmit({ beforeNode: __assign$5(__assign$5({}, beforeNode), { rx, ry }), afterNode });
    };
    _this.updateDiamond = function(_a) {
      var deltaX = _a.deltaX, deltaY = _a.deltaY;
      var _b = _this.nodeModel, id = _b.id, rx = _b.rx, ry = _b.ry, x2 = _b.x, y2 = _b.y;
      var index2 = _this.index;
      var width = rx;
      var height = ry;
      var size = _this.getResize({
        index: index2,
        deltaX,
        deltaY,
        width,
        height,
        pct: 1 / 2
      });
      var _c = _this.nodeModel, minWidth = _c.minWidth, minHeight = _c.minHeight, maxWidth = _c.maxWidth, maxHeight = _c.maxHeight;
      if (size.width < minWidth / 2 || size.width > maxWidth / 2 || size.height < minHeight / 2 || size.height > maxHeight / 2) {
        return;
      }
      _this.updatePosition({ deltaX, deltaY });
      _this.nodeModel.rx = size.width;
      _this.nodeModel.ry = size.height;
      _this.nodeModel.setProperties({
        nodeSize: {
          rx: size.width,
          ry: size.height
        }
      });
      var beforeNode = { x: x2, y: y2, rx, ry };
      var afterNode = {
        rx: size.width,
        ry: size.height,
        x: _this.nodeModel.x,
        y: _this.nodeModel.y
      };
      var params = {
        point: {},
        beforeNode,
        afterNode
      };
      var afterPoint;
      var edges = _this.getNodeEdges(id);
      edges.sourceEdges.forEach(function(item) {
        params.point = item.startPoint;
        afterPoint = getDiamondReizeEdgePoint(params);
        item.updateStartPoint(afterPoint);
      });
      edges.targetEdges.forEach(function(item) {
        params.point = item.endPoint;
        afterPoint = getDiamondReizeEdgePoint(params);
        item.updateEndPoint(afterPoint);
      });
      _this.eventEmit({ beforeNode, afterNode });
    };
    _this.eventEmit = function(_a) {
      var beforeNode = _a.beforeNode, afterNode = _a.afterNode;
      var _b = _this.nodeModel, id = _b.id, modelType = _b.modelType, type = _b.type;
      var oldNodeSize = __assign$5({ id, modelType, type }, beforeNode);
      var newNodeSize = __assign$5({ id, modelType, type }, afterNode);
      _this.graphModel.eventCenter.emit("node:resize", { oldNodeSize, newNodeSize });
    };
    _this.onDraging = function(_a) {
      var deltaX = _a.deltaX, deltaY = _a.deltaY;
      var modelType = _this.nodeModel.modelType;
      if (modelType === ModelType.RECT_NODE || modelType === ModelType.HTML_NODE) {
        _this.updateRect({ deltaX, deltaY });
      } else if (modelType === ModelType.ELLIPSE_NODE) {
        _this.updateEllipse({ deltaX, deltaY });
      } else if (modelType === ModelType.DIAMOND_NODE) {
        _this.updateDiamond({ deltaX, deltaY });
      }
    };
    _this.index = props.index;
    _this.nodeModel = props.model;
    _this.graphModel = props.graphModel;
    var gridSize = _this.graphModel.gridSize;
    var step = 2;
    if (gridSize > 1) {
      step = 2 * gridSize;
    }
    _this.state = {};
    _this.dragHandler = createDrag({
      onDraging: _this.onDraging,
      step
    });
    return _this;
  }
  Control2.prototype.getNodeEdges = function(nodeId) {
    var graphModel = this.graphModel;
    var edges = graphModel.edges;
    var sourceEdges = [];
    var targetEdges = [];
    for (var i = 0; i < edges.length; i++) {
      var edgeModel = edges[i];
      if (edgeModel.sourceNodeId === nodeId) {
        sourceEdges.push(edgeModel);
      } else if (edges[i].targetNodeId === nodeId) {
        targetEdges.push(edgeModel);
      }
    }
    return { sourceEdges, targetEdges };
  };
  Control2.prototype.render = function() {
    var _a = this.props, x2 = _a.x, y2 = _a.y, index2 = _a.index, model = _a.model;
    var style = model.getControlPointStyle();
    return v("g", { className: "lf-resize-control-" + index2 }, v(Rect, __assign$5({ className: "lf-node-control" }, { x: x2, y: y2 }, style, { onMouseDown: this.dragHandler })));
  };
  return Control2;
}(_);
var __extends$5 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$4 = globalThis && globalThis.__assign || function() {
  __assign$4 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$4.apply(this, arguments);
};
var ControlGroup = function(_super) {
  __extends$5(ControlGroup2, _super);
  function ControlGroup2() {
    var _this = _super.call(this) || this;
    _this.state = {};
    return _this;
  }
  ControlGroup2.prototype.getResizeControl = function() {
    var _a = this.props, model = _a.model, graphModel = _a.graphModel;
    var x2 = model.x, y2 = model.y, width = model.width, height = model.height;
    var box = {
      minX: x2 - width / 2,
      minY: y2 - height / 2,
      maxX: x2 + width / 2,
      maxY: y2 + height / 2
    };
    var minX = box.minX, minY = box.minY, maxX = box.maxX, maxY = box.maxY;
    var controlList = [
      {
        x: minX,
        y: minY
      },
      {
        x: maxX,
        y: minY
      },
      {
        x: maxX,
        y: maxY
      },
      {
        x: minX,
        y: maxY
      }
    ];
    return controlList.map(function(control, index2) {
      return v(Control, __assign$4({ index: index2 }, control, { model, graphModel }));
    });
  };
  ControlGroup2.prototype.getGroupSolid = function() {
    var model = this.props.model;
    var x2 = model.x, y2 = model.y, width = model.width, height = model.height;
    var style = model.getResizeOutlineStyle();
    return v(Rect, __assign$4({ fill: "none" }, style, { x: x2, y: y2, width, height }));
  };
  ControlGroup2.prototype.render = function() {
    return v("g", { className: "lf-resize-control" }, this.getGroupSolid(), this.getResizeControl());
  };
  return ControlGroup2;
}(_);
var __extends$4 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var RectResizeModel = function(_super) {
  __extends$4(RectResizeModel2, _super);
  function RectResizeModel2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.minWidth = 30;
    _this.minHeight = 30;
    _this.maxWidth = 2e3;
    _this.maxHeight = 2e3;
    return _this;
  }
  RectResizeModel2.prototype.getOutlineStyle = function() {
    var style = _super.prototype.getOutlineStyle.call(this);
    style.stroke = "none";
    if (style.hover) {
      style.hover.stroke = "none";
    }
    return style;
  };
  RectResizeModel2.prototype.getResizeOutlineStyle = function() {
    return {
      fill: "none",
      stroke: "#000000",
      strokeWidth: 1,
      strokeDasharray: "3,3"
    };
  };
  RectResizeModel2.prototype.getControlPointStyle = function() {
    return {
      width: 7,
      height: 7,
      fill: "#FFFFFF",
      stroke: "#000000"
    };
  };
  RectResizeModel2.prototype.setAttributes = function() {
    var nodeSize = this.properties.nodeSize;
    if (nodeSize) {
      this.width = nodeSize.width;
      this.height = nodeSize.height;
    }
  };
  RectResizeModel2.prototype.resize = function(deltaX, deltaY) {
    console.log(deltaX, deltaY);
  };
  return RectResizeModel2;
}(logicFlow.exports.RectNodeModel);
var RectResizeView = function(_super) {
  __extends$4(RectResizeView2, _super);
  function RectResizeView2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  RectResizeView2.prototype.getControlGroup = function() {
    var _a = this.props, model = _a.model, graphModel = _a.graphModel;
    return logicFlow.exports.h(ControlGroup, { model, graphModel });
  };
  RectResizeView2.prototype.getResizeShape = function() {
    return _super.prototype.getShape.call(this);
  };
  RectResizeView2.prototype.getShape = function() {
    var isSelected = this.props.model.isSelected;
    return logicFlow.exports.h("g", null, this.getResizeShape(), isSelected ? this.getControlGroup() : "");
  };
  return RectResizeView2;
}(logicFlow.exports.RectNode);
var RectResize = {
  type: "rect",
  view: RectResizeView,
  model: RectResizeModel
};
var __extends$3 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
(function(_super) {
  __extends$3(EllipseResizeModel, _super);
  function EllipseResizeModel(data, graphModel) {
    var _this = _super.call(this, data, graphModel) || this;
    _this.minWidth = 30;
    _this.minHeight = 30;
    _this.maxWidth = 2e3;
    _this.maxHeight = 2e3;
    _this.rx = 50;
    _this.ry = 50;
    return _this;
  }
  EllipseResizeModel.prototype.getOutlineStyle = function() {
    var style = _super.prototype.getOutlineStyle.call(this);
    style.stroke = "none";
    if (style.hover) {
      style.hover.stroke = "none";
    }
    return style;
  };
  EllipseResizeModel.prototype.getResizeOutlineStyle = function() {
    return {
      stroke: "#000000",
      strokeWidth: 1,
      strokeDasharray: "3,3"
    };
  };
  EllipseResizeModel.prototype.getControlPointStyle = function() {
    return {
      width: 7,
      height: 7,
      fill: "#FFFFFF",
      stroke: "#000000"
    };
  };
  EllipseResizeModel.prototype.setAttributes = function() {
    var nodeSize = this.properties.nodeSize;
    if (nodeSize) {
      this.rx = nodeSize.rx;
      this.ry = nodeSize.ry;
    }
  };
  return EllipseResizeModel;
})(logicFlow.exports.EllipseNodeModel);
(function(_super) {
  __extends$3(EllipseResizeView, _super);
  function EllipseResizeView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  EllipseResizeView.prototype.getControlGroup = function() {
    var _a = this.props, model = _a.model, graphModel = _a.graphModel;
    return logicFlow.exports.h(ControlGroup, { model, graphModel });
  };
  EllipseResizeView.prototype.getResizeShape = function() {
    return _super.prototype.getShape.call(this);
  };
  EllipseResizeView.prototype.getShape = function() {
    var model = this.props.model;
    return logicFlow.exports.h("g", null, this.getResizeShape(), model.isSelected ? this.getControlGroup() : "");
  };
  return EllipseResizeView;
})(logicFlow.exports.EllipseNode);
var __assign$3 = globalThis && globalThis.__assign || function() {
  __assign$3 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$3.apply(this, arguments);
};
function Polygon(_a) {
  var _b = _a.fillOpacity, fillOpacity = _b === void 0 ? 1 : _b, _c = _a.strokeWidth, strokeWidth = _c === void 0 ? 1 : _c, _d = _a.strokeOpacity, strokeOpacity = _d === void 0 ? 1 : _d, _e = _a.fill, fill = _e === void 0 ? "transparent" : _e, _f = _a.stroke, stroke = _f === void 0 ? "#000" : _f, points = _a.points, _g = _a.className, className = _g === void 0 ? "lf-basic-shape" : _g;
  var attrs = {
    fill,
    fillOpacity,
    strokeWidth,
    stroke,
    strokeOpacity,
    points: "",
    className
  };
  attrs.points = points.map(function(point) {
    return point.join(",");
  }).join(" ");
  return logicFlow.exports.h("polygon", __assign$3({}, attrs));
}
var __extends$2 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$2 = globalThis && globalThis.__assign || function() {
  __assign$2 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
(function(_super) {
  __extends$2(DiamondResizeModel, _super);
  function DiamondResizeModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.minWidth = 30;
    _this.minHeight = 30;
    _this.maxWidth = 2e3;
    _this.maxHeight = 2e3;
    return _this;
  }
  DiamondResizeModel.prototype.getOutlineStyle = function() {
    var style = _super.prototype.getOutlineStyle.call(this);
    style.stroke = "none";
    if (style.hover) {
      style.hover.stroke = "none";
    }
    return style;
  };
  DiamondResizeModel.prototype.getResizeOutlineStyle = function() {
    return {
      stroke: "#000000",
      strokeWidth: 1,
      strokeDasharray: "3,3"
    };
  };
  DiamondResizeModel.prototype.getControlPointStyle = function() {
    return {
      width: 7,
      height: 7,
      fill: "#FFFFFF",
      stroke: "#000000"
    };
  };
  DiamondResizeModel.prototype.setAttributes = function() {
    var nodeSize = this.properties.nodeSize;
    if (nodeSize) {
      this.rx = nodeSize.rx;
      this.ry = nodeSize.ry;
    }
  };
  return DiamondResizeModel;
})(logicFlow.exports.DiamondNodeModel);
(function(_super) {
  __extends$2(DiamondResizeView, _super);
  function DiamondResizeView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  DiamondResizeView.prototype.getControlGroup = function() {
    var _a = this.props, model = _a.model, graphModel = _a.graphModel;
    return logicFlow.exports.h(ControlGroup, { model, graphModel });
  };
  DiamondResizeView.prototype.getResizeShape = function() {
    var model = this.props.model;
    var points = model.points;
    var style = model.getNodeStyle();
    return logicFlow.exports.h("g", null, logicFlow.exports.h(Polygon, __assign$2({}, style, { points })));
  };
  DiamondResizeView.prototype.getShape = function() {
    var isSelected = this.props.model.isSelected;
    return logicFlow.exports.h("g", null, this.getResizeShape(), isSelected ? this.getControlGroup() : "");
  };
  return DiamondResizeView;
})(logicFlow.exports.DiamondNode);
var __extends$1 = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
(function(_super) {
  __extends$1(HtmlResizeModel, _super);
  function HtmlResizeModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.minWidth = 30;
    _this.minHeight = 30;
    _this.maxWidth = 2e3;
    _this.maxHeight = 2e3;
    return _this;
  }
  HtmlResizeModel.prototype.getOutlineStyle = function() {
    var style = _super.prototype.getOutlineStyle.call(this);
    style.stroke = "none";
    if (style.hover) {
      style.hover.stroke = "none";
    }
    return style;
  };
  HtmlResizeModel.prototype.getResizeOutlineStyle = function() {
    return {
      stroke: "#000000",
      strokeWidth: 1,
      strokeDasharray: "3,3"
    };
  };
  HtmlResizeModel.prototype.getControlPointStyle = function() {
    return {
      width: 7,
      height: 7,
      fill: "#FFFFFF",
      stroke: "#000000"
    };
  };
  HtmlResizeModel.prototype.setAttributes = function() {
    var nodeSize = this.properties.nodeSize;
    if (nodeSize) {
      this.width = nodeSize.width;
      this.height = nodeSize.height;
    }
  };
  return HtmlResizeModel;
})(logicFlow.exports.HtmlNodeModel);
(function(_super) {
  __extends$1(HtmlResizeView, _super);
  function HtmlResizeView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  HtmlResizeView.prototype.getControlGroup = function() {
    var _a = this.props, model = _a.model, graphModel = _a.graphModel;
    return logicFlow.exports.h(ControlGroup, { model, graphModel });
  };
  HtmlResizeView.prototype.getResizeShape = function() {
    return _super.prototype.getShape.call(this);
  };
  HtmlResizeView.prototype.getShape = function() {
    var isSelected = this.props.model.isSelected;
    return logicFlow.exports.h("g", null, this.getResizeShape(), isSelected ? this.getControlGroup() : "");
  };
  return HtmlResizeView;
})(logicFlow.exports.HtmlNode);
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (b3.hasOwnProperty(p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$1 = globalThis && globalThis.__assign || function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var __read$2 = globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var __spread = globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read$2(arguments[i]));
  return ar;
};
var defaultWidth = 500;
var defaultHeight = 300;
(function(_super) {
  __extends(GroupNodeModel, _super);
  function GroupNodeModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.isGroup = true;
    _this.unfoldedWidth = defaultWidth;
    _this.unfoldedHight = defaultHeight;
    return _this;
  }
  GroupNodeModel.prototype.initNodeData = function(data) {
    _super.prototype.initNodeData.call(this, data);
    var children = [];
    if (Array.isArray(data.children)) {
      children = data.children;
    }
    this.children = new Set(children);
    this.width = defaultWidth;
    this.height = defaultHeight;
    this.foldedWidth = 80;
    this.foldedHeight = 60;
    this.zIndex = -1;
    this.radius = 0;
    this.text.editable = false;
    this.text.draggable = false;
    this.isRestrict = false;
    this.resizable = false;
    this.autoToFront = false;
    this.foldable = false;
    this.properties.isFolded = false;
    this.isFolded = this.properties.isFolded;
  };
  GroupNodeModel.prototype.getResizeOutlineStyle = function() {
    var style = _super.prototype.getResizeOutlineStyle.call(this);
    style.stroke = "none";
    return style;
  };
  GroupNodeModel.prototype.foldGroup = function(isFolded) {
    var _this = this;
    this.setProperty("isFolded", isFolded);
    this.isFolded = isFolded;
    if (isFolded) {
      this.x = this.x - this.width / 2 + this.foldedWidth / 2;
      this.y = this.y - this.height / 2 + this.foldedHeight / 2;
      this.unfoldedWidth = this.width;
      this.unfoldedHight = this.height;
      this.width = this.foldedWidth;
      this.height = this.foldedHeight;
    } else {
      this.width = this.unfoldedWidth;
      this.height = this.unfoldedHight;
      this.x = this.x + this.width / 2 - this.foldedWidth / 2;
      this.y = this.y + this.height / 2 - this.foldedHeight / 2;
    }
    var inCommingEdges = this.graphModel.getNodeIncomingEdge(this.id);
    var outgoingEdges = this.graphModel.getNodeOutgoingEdge(this.id);
    inCommingEdges.concat(outgoingEdges).forEach(function(edgeModel) {
      _this.graphModel.deleteEdgeById(edgeModel.id);
      if (!edgeModel.isFoldedEdge) {
        var isCommingEdge = edgeModel.targetNodeId === _this.id;
        var data = edgeModel.getData();
        if (isCommingEdge) {
          data.endPoint = void 0;
        } else {
          data.startPoint = void 0;
        }
        data.pointsList = void 0;
        _this.graphModel.addEdge(data);
      }
    });
    this.children.forEach(function(elementId) {
      var nodeModel = _this.graphModel.getElement(elementId);
      nodeModel.visible = !isFolded;
      _this.foldEdge(elementId, isFolded);
    });
  };
  GroupNodeModel.prototype.foldEdge = function(nodeId, isFolded) {
    var _this = this;
    var inCommingEdges = this.graphModel.getNodeIncomingEdge(nodeId);
    var outgoingEdges = this.graphModel.getNodeOutgoingEdge(nodeId);
    inCommingEdges.concat(outgoingEdges).forEach(function(edgeModel, index2) {
      var _a;
      edgeModel.visible = !isFolded;
      if (isFolded && (!_this.children.has(edgeModel.targetNodeId) || !_this.children.has(edgeModel.sourceNodeId))) {
        var isCommingEdge = edgeModel.targetNodeId === nodeId;
        if (isFolded) {
          var data = edgeModel.getData();
          data.id = data.id + "__" + index2;
          if (isCommingEdge) {
            data.endPoint = void 0;
            data.targetNodeId = _this.id;
          } else {
            data.startPoint = void 0;
            data.sourceNodeId = _this.id;
          }
          data.text = (_a = data.text) === null || _a === void 0 ? void 0 : _a.value;
          data.pointsList = void 0;
          var model = _this.graphModel.addEdge(data);
          model.virtual = true;
          model.getData = function() {
            return null;
          };
          model.text.editable = false;
          model.isFoldedEdge = true;
        }
      }
    });
  };
  GroupNodeModel.prototype.isInRange = function(_a) {
    var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
    return x1 >= this.x - this.width / 2 && x2 <= this.x + this.width / 2 && y1 >= this.y - this.height / 2 && y2 <= this.y + this.height / 2;
  };
  GroupNodeModel.prototype.setAllowAppendChild = function(isAllow) {
    this.setProperty("groupAddable", isAllow);
  };
  GroupNodeModel.prototype.addChild = function(id) {
    this.children.add(id);
  };
  GroupNodeModel.prototype.removeChild = function(id) {
    this.children.delete(id);
  };
  GroupNodeModel.prototype.getAddableOutlineStyle = function() {
    return {
      stroke: "#FEB663",
      strokeWidth: 2,
      strokeDasharray: "4 4",
      fill: "transparent"
    };
  };
  GroupNodeModel.prototype.getData = function() {
    var data = _super.prototype.getData.call(this);
    data.children = __spread(this.children);
    var properties = data.properties;
    delete properties.groupAddable;
    delete properties.isFolded;
    return data;
  };
  return GroupNodeModel;
})(RectResize.model);
(function(_super) {
  __extends(GroupNode, _super);
  function GroupNode() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  GroupNode.prototype.getControlGroup = function() {
    var _a = this.props.model, resizable = _a.resizable, properties = _a.properties;
    return resizable && !properties.isFolded ? _super.prototype.getControlGroup.call(this) : null;
  };
  GroupNode.prototype.getAddedableShape = function() {
    var _a = this.props.model, width = _a.width, height = _a.height, x2 = _a.x, y2 = _a.y, radius = _a.radius, properties = _a.properties;
    if (!properties.groupAddable)
      return null;
    var strokeWidth = this.props.model.getNodeStyle().strokeWidth;
    var style = this.props.model.getAddableOutlineStyle();
    var newWidth = width + strokeWidth + 8;
    var newHeight = height + strokeWidth + 8;
    return logicFlow.exports.h("rect", __assign$1(__assign$1({}, style), { width: newWidth, height: newHeight, x: x2 - newWidth / 2, y: y2 - newHeight / 2, rx: radius, ry: radius }));
  };
  GroupNode.prototype.getFoldIcon = function() {
    var model = this.props.model;
    var foldX = model.x - model.width / 2 + 5;
    var foldY = model.y - model.height / 2 + 5;
    if (!model.foldable)
      return null;
    var iconIcon = logicFlow.exports.h("path", {
      fill: "none",
      stroke: "#818281",
      strokeWidth: 2,
      "pointer-events": "none",
      d: model.properties.isFolded ? "M " + (foldX + 3) + "," + (foldY + 6) + " " + (foldX + 11) + "," + (foldY + 6) + " M" + (foldX + 7) + "," + (foldY + 2) + " " + (foldX + 7) + "," + (foldY + 10) : "M " + (foldX + 3) + "," + (foldY + 6) + " " + (foldX + 11) + "," + (foldY + 6) + " "
    });
    return logicFlow.exports.h("g", {}, [
      logicFlow.exports.h("rect", {
        height: 12,
        width: 14,
        rx: 2,
        ry: 2,
        strokeWidth: 1,
        fill: "#F4F5F6",
        stroke: "#CECECE",
        cursor: "pointer",
        x: model.x - model.width / 2 + 5,
        y: model.y - model.height / 2 + 5,
        onClick: function() {
          model.foldGroup(!model.properties.isFolded);
        }
      }),
      iconIcon
    ]);
  };
  GroupNode.prototype.getResizeShape = function() {
    return logicFlow.exports.h("g", {}, [
      this.getAddedableShape(),
      _super.prototype.getResizeShape.call(this),
      this.getFoldIcon()
    ]);
  };
  return GroupNode;
})(RectResize.view);
var __read$1 = globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read$1(arguments[i]));
  return ar;
};
var __read = globalThis && globalThis.__read || function(o2, n2) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
globalThis && globalThis.__spread || function() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
};
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
      s2 = arguments[i];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
const TurboType = {
  SEQUENCE_FLOW: 1,
  START_EVENT: 2,
  END_EVENT: 3,
  USER_TASK: 4,
  SERVICE_TASK: 5,
  EXCLUSIVE_GATEWAY: 6
};
function convertFlowElementToEdge(element) {
  const { incoming, outgoing, properties, key: key2 } = element;
  const { text, startPoint, endPoint, pointsList, logicFlowType } = properties;
  const edge = {
    id: key2,
    type: logicFlowType,
    sourceNodeId: incoming[0],
    targetNodeId: outgoing[0],
    text,
    startPoint,
    endPoint,
    pointsList,
    properties: {}
  };
  const excludeProperties = ["startPoint", "endPoint", "pointsList", "text", "logicFlowType"];
  Object.keys(element.properties).forEach((property) => {
    if (excludeProperties.indexOf(property) === -1) {
      edge.properties[property] = element.properties[property];
    }
  });
  return edge;
}
function convertFlowElementToNode(element) {
  const { properties, key: key2 } = element;
  const { x: x2, y: y2, text, logicFlowType } = properties;
  const node = {
    id: key2,
    type: logicFlowType,
    x: x2,
    y: y2,
    text,
    properties: {}
  };
  const excludeProperties = ["x", "y", "text", "logicFlowType"];
  Object.keys(element.properties).forEach((property) => {
    if (excludeProperties.indexOf(property) === -1) {
      node.properties[property] = element.properties[property];
    }
  });
  return node;
}
function toLogicFlowData(data) {
  const lfData = {
    nodes: [],
    edges: []
  };
  const list = data.flowElementList;
  list && list.length > 0 && list.forEach((element) => {
    if (element.type === TurboType.SEQUENCE_FLOW) {
      const edge = convertFlowElementToEdge(element);
      lfData.edges.push(edge);
    } else {
      const node = convertFlowElementToNode(element);
      lfData.nodes.push(node);
    }
  });
  return lfData;
}
function configDefaultDndPanel(lf) {
  return [
    {
      text: "\u9009\u533A",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAOVJREFUOBGtVMENwzAIjKP++2026ETdpv10iy7WFbqFyyW6GBywLCv5gI+Dw2Bluj1znuSjhb99Gkn6QILDY2imo60p8nsnc9bEo3+QJ+AKHfMdZHnl78wyTnyHZD53Zzx73MRSgYvnqgCUHj6gwdck7Zsp1VOrz0Uz8NbKunzAW+Gu4fYW28bUYutYlzSa7B84Fh7d1kjLwhcSdYAYrdkMQVpsBr5XgDGuXwQfQr0y9zwLda+DUYXLaGKdd2ZTtvbolaO87pdo24hP7ov16N0zArH1ur3iwJpXxm+v7oAJNR4JEP8DoAuSFEkYH7cAAAAASUVORK5CYII=",
      callback: () => {
        lf.updateEditConfig({
          stopMoveGraph: true
        });
      }
    },
    {
      type: "circle",
      text: "\u5F00\u59CB",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg=="
    },
    {
      type: "rect",
      text: "\u7528\u6237\u4EFB\u52A1",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==",
      cls: "important-node"
    },
    {
      type: "rect",
      text: "\u7CFB\u7EDF\u4EFB\u52A1",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAEFVwZaAAAABGdBTUEAALGPC/xhBQAAAqlJREFUOBF9VM9rE0EUfrMJNUKLihGbpLGtaCOIR8VjQMGDePCgCCIiCNqzCAp2MyYUCXhUtF5E0D+g1t48qAd7CCLqQUQKEWkStcEfVGlLdp/fm3aW2QQdyLzf33zz5m2IsAZ9XhDpyaaIZkTS4ASzK41TFao88GuJ3hsr2pAbipHxuSYyKRugagICGANkfFnNh3HeE2N0b3nN2cgnpcictw5veJIzxmDamSlxxQZicq/mflxhbaH8BLRbuRwNtZp0JAhoplVRUdzmCe/vO27wFuuA3S5qXruGdboy5/PRGFsbFGKo/haRtQHIrM83bVeTrOgNhZReWaYGnE4aUQgTJNvijJFF4jQ8BxJE5xfKatZWmZcTQ+BVgh7s8SgPlCkcec4mGTmieTP4xd7PcpIEg1TX6gdeLW8rTVMVLVvb7ctXoH0Cydl2QOPJBG21STE5OsnbweVYzAnD3A7PVILuY0yiiyDwSm2g441r6rMSgp6iK42yqroI2QoXeJVeA+YeZSa47gZdXaZWQKTrG93rukk/l2Al6Kzh5AZEl7dDQy+JjgFahQjRopSxPbrbvK7GRe9ePWBo1wcU7sYrFZtavXALwGw/7Dnc50urrHJuTPSoO2IMV3gUQGNg87IbSOIY9BpiT9HV7FCZ94nPXb3MSnwHn/FFFE1vG6DTby+r31KAkUktB3Qf6ikUPWxW1BkXSPQeMHHiW0+HAd2GelJsZz1OJegCxqzl+CLVHa/IibuHeJ1HAKzhuDR+ymNaRFM+4jU6UWKXorRmbyqkq/D76FffevwdCp+jN3UAN/C9JRVTDuOxC/oh+EdMnqIOrlYteKSfadVRGLJFJPSB/ti/6K8f0CNymg/iH2gO/f0DwE0yjAFO6l8JaR5j0VPwPwfaYHqOqrCI319WzwhwzNW/aQAAAABJRU5ErkJggg==",
      cls: "import_icon"
    },
    {
      type: "diamond",
      text: "\u6761\u4EF6\u5224\u65AD",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAAHeEJUAAAAABGdBTUEAALGPC/xhBQAAAvVJREFUOBGNVEFrE0EU/mY3bQoiFlOkaUJrQUQoWMGePLX24EH0IIoHKQiCV0G8iE1covgLiqA/QTzVm1JPogc9tIJYFaQtlhQxqYjSpunu+L7JvmUTU3AgmTfvffPNN++9WSA1DO182f6xwILzD5btfAoQmwL5KJEwiQyVbSVZ0IgRyV6PTpIJ81E5ZvqfHQR0HUOBHW4L5Et2kQ6Zf7iAOhTFAA8s0pEP7AXO1uAA52SbqGk6h/6J45LaLhO64ByfcUzM39V7ZiAdS2yCePPEIQYvTUHqM/n7dgQNfBKWPjpF4ISk8q3J4nB11qw6X8l+FsF3EhlkEMfrjIer3wJTLwS2aCNcj4DbGxXTw00JmAuO+Ni6bBxVUCvS5d9aa04+so4pHW5jLTywuXAL7jJ+D06sl82Sgl2JuVBQn498zkc2bGKxULHjCnSMadBKYDYYHAtsby1EQ5lNGrQd4Y3v4Zo0XdGEmDno46yCM9Tk+RiJmUYHS/aXHPNTcjxcbTFna000PFJHIVZ5lFRqRpJWk9/+QtlOUYJj9HG5pVFEU7zqIYDVsw2s+AJaD8wTd2umgSCCyUxgGsS1Y6TBwXQQTFuZaHcd8gAGioE90hlsY+wMcs30RduYtxanjMGal8H5dMW67dmT1JFtYUEe8LiQLRsPZ6IIc7A4J5tqco3T0pnv/4u0kyzrYUq7gASuEyI8VXKvB9Odytv6jS/PNaZBln0nioJG/AVQRZvApOdhjj3Jt8QC8Im09SafwdBdvIpztpxWxpeKCC+EsFdS8DCyuCn2munFpL7ctHKp+Xc5cMybeIyMAN33SPL3ZR9QV1XVwLyzHm6Iv0/yeUuUb7PPlZC4D4HZkeu6dpF4v9j9MreGtMbxMMRLIcjJic9yHi7WQ3yVKzZVWUr5UrViJvn1FfUlwe/KYVfYyWRLSGNu16hR01U9IacajXPei0wx/5BqgInvJN+MMNtNme7ReU9SBbgntovn0kKHpFg7UogZvaZiOue/q1SBo9ktHzQAAAAASUVORK5CYII="
    },
    {
      type: "circle",
      text: "\u7ED3\u675F",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC"
    }
  ];
}
var index$2 = "";
var index$1 = "";
const _sfc_main$1 = defineComponent({
  name: "FlowChart",
  components: { BasicModal, FlowChartToolbar, JsonPreview },
  props: {
    flowOptions: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    toolbar: {
      type: Boolean,
      default: true
    },
    patternItems: {
      type: Array
    }
  },
  setup(props) {
    const lfElRef = ref(null);
    const graphData = ref({});
    const lfInstance = ref(null);
    const { prefixCls } = useDesign("flow-chart");
    const appStore = useAppStore();
    const [register, { openModal }] = useModal();
    createFlowChartContext({
      logicFlow: lfInstance
    });
    const getFlowOptions = computed(() => {
      const { flowOptions } = props;
      const defaultOptions = __spreadValues({
        grid: true,
        background: {
          color: appStore.getDarkMode === "light" ? "#f7f9ff" : "#151515"
        },
        keyboard: {
          enabled: true
        }
      }, flowOptions);
      return defaultOptions;
    });
    watch(() => props.data, () => {
      onRender();
    });
    watch(() => unref(getFlowOptions), (options) => {
      var _a;
      (_a = unref(lfInstance)) == null ? void 0 : _a.updateEditConfig(options);
    });
    async function init() {
      await nextTick();
      const lfEl = unref(lfElRef);
      if (!lfEl) {
        return;
      }
      LogicFlow.use(DndPanel);
      LogicFlow.use(Snapshot);
      LogicFlow.use(BpmnElement);
      LogicFlow.use(Menu);
      LogicFlow.use(SelectionSelect);
      lfInstance.value = new LogicFlow(__spreadProps(__spreadValues({}, unref(getFlowOptions)), {
        container: lfEl
      }));
      const lf = unref(lfInstance);
      lf == null ? void 0 : lf.setDefaultEdgeType("line");
      onRender();
      lf == null ? void 0 : lf.setPatternItems(props.patternItems || configDefaultDndPanel(lf));
    }
    async function onRender() {
      await nextTick();
      const lf = unref(lfInstance);
      if (!lf) {
        return;
      }
      const lFData = toLogicFlowData(props.data);
      lf.render(lFData);
    }
    function handlePreview() {
      const lf = unref(lfInstance);
      if (!lf) {
        return;
      }
      graphData.value = unref(lf).getGraphData();
      openModal();
    }
    onMounted(init);
    return {
      register,
      prefixCls,
      lfElRef,
      handlePreview,
      graphData
    };
  }
});
const _hoisted_1 = {
  ref: "lfElRef",
  class: "h-full"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FlowChartToolbar = resolveComponent("FlowChartToolbar");
  const _component_JsonPreview = resolveComponent("JsonPreview");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["h-full", _ctx.prefixCls])
  }, [
    _ctx.toolbar ? (openBlock(), createBlock(_component_FlowChartToolbar, {
      key: 0,
      prefixCls: _ctx.prefixCls,
      onViewData: _ctx.handlePreview
    }, null, 8, ["prefixCls", "onViewData"])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_1, null, 512),
    createVNode(_component_BasicModal, {
      onRegister: _ctx.register,
      title: "\u6D41\u7A0B\u6570\u636E",
      width: "50%"
    }, {
      default: withCtx(() => [
        createVNode(_component_JsonPreview, { data: _ctx.graphData }, null, 8, ["data"])
      ]),
      _: 1
    }, 8, ["onRegister"])
  ], 2);
}
var flowChart = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const FlowChart = withInstall(flowChart);
const flowElementList = [
  {
    incoming: [],
    outgoing: [
      "Flow_33inf2k"
    ],
    dockers: [],
    type: 2,
    properties: {
      a: "efrwe",
      b: "wewe",
      name: "\u5F00\u59CB",
      x: 280,
      y: 200,
      text: {
        x: 280,
        y: 200,
        value: "\u5F00\u59CB"
      },
      logicFlowType: "bpmn:startEvent"
    },
    key: "Event_1d42u4p"
  },
  {
    incoming: [
      "Flow_379e0o9"
    ],
    outgoing: [],
    dockers: [],
    type: 3,
    properties: {
      a: "efrwe",
      b: "wewe",
      name: "\u7ED3\u675F",
      x: 920,
      y: 200,
      text: {
        x: 920,
        y: 200,
        value: "\u7ED3\u675F"
      },
      logicFlowType: "bpmn:endEvent"
    },
    key: "Event_08p8i6q"
  },
  {
    incoming: [
      "Flow_0pfouf0"
    ],
    outgoing: [
      "Flow_3918lhh"
    ],
    dockers: [],
    type: 6,
    properties: {
      a: "efrwe",
      b: "wewe",
      name: "\u7F51\u5173",
      x: 580,
      y: 200,
      text: {
        x: 580,
        y: 200,
        value: "\u7F51\u5173"
      },
      logicFlowType: "bpmn:exclusiveGateway"
    },
    key: "Gateway_1fngqgj"
  },
  {
    incoming: [
      "Flow_33inf2k"
    ],
    outgoing: [
      "Flow_0pfouf0"
    ],
    dockers: [],
    type: 4,
    properties: {
      a: "efrwe",
      b: "wewe",
      name: "\u7528\u6237",
      x: 420,
      y: 200,
      text: {
        x: 420,
        y: 200,
        value: "\u7528\u6237"
      },
      logicFlowType: "bpmn:userTask"
    },
    key: "Activity_2mgtaia"
  },
  {
    incoming: [
      "Flow_3918lhh"
    ],
    outgoing: [
      "Flow_379e0o9"
    ],
    dockers: [],
    type: 5,
    properties: {
      a: "efrwe",
      b: "wewe",
      name: "\u670D\u52A1",
      x: 760,
      y: 200,
      text: {
        x: 760,
        y: 200,
        value: "\u670D\u52A1"
      },
      logicFlowType: "bpmn:serviceTask"
    },
    key: "Activity_1sp8qc8"
  },
  {
    incoming: [
      "Event_1d42u4p"
    ],
    outgoing: [
      "Activity_2mgtaia"
    ],
    type: 1,
    dockers: [],
    properties: {
      name: "\u8FB9",
      text: {
        x: 331,
        y: 200,
        value: "\u8FB9"
      },
      startPoint: {
        x: 298,
        y: 200
      },
      endPoint: {
        x: 370,
        y: 200
      },
      pointsList: [
        {
          x: 298,
          y: 200
        },
        {
          x: 370,
          y: 200
        }
      ],
      logicFlowType: "bpmn:sequenceFlow"
    },
    key: "Flow_33inf2k"
  },
  {
    incoming: [
      "Activity_2mgtaia"
    ],
    outgoing: [
      "Gateway_1fngqgj"
    ],
    type: 1,
    dockers: [],
    properties: {
      name: "\u8FB92",
      text: {
        x: 507,
        y: 200,
        value: "\u8FB92"
      },
      startPoint: {
        x: 470,
        y: 200
      },
      endPoint: {
        x: 555,
        y: 200
      },
      pointsList: [
        {
          x: 470,
          y: 200
        },
        {
          x: 555,
          y: 200
        }
      ],
      logicFlowType: "bpmn:sequenceFlow"
    },
    key: "Flow_0pfouf0"
  },
  {
    incoming: [
      "Gateway_1fngqgj"
    ],
    outgoing: [
      "Activity_1sp8qc8"
    ],
    type: 1,
    dockers: [],
    properties: {
      name: "\u8FB93",
      text: {
        x: 664,
        y: 200,
        value: "\u8FB93"
      },
      startPoint: {
        x: 605,
        y: 200
      },
      endPoint: {
        x: 710,
        y: 200
      },
      pointsList: [
        {
          x: 605,
          y: 200
        },
        {
          x: 710,
          y: 200
        }
      ],
      logicFlowType: "bpmn:sequenceFlow"
    },
    key: "Flow_3918lhh"
  },
  {
    incoming: [
      "Activity_1sp8qc8"
    ],
    outgoing: [
      "Event_08p8i6q"
    ],
    type: 1,
    dockers: [],
    properties: {
      name: "\u8FB94",
      text: {
        x: 871,
        y: 200,
        value: "\u8FB94"
      },
      startPoint: {
        x: 810,
        y: 200
      },
      endPoint: {
        x: 902,
        y: 200
      },
      pointsList: [
        {
          x: 810,
          y: 200
        },
        {
          x: 902,
          y: 200
        }
      ],
      logicFlowType: "bpmn:sequenceFlow"
    },
    key: "Flow_379e0o9"
  }
];
var demoData = {
  flowElementList
};
const _sfc_main = {
  components: { FlowChart, PageWrapper },
  setup() {
    return { demoData };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FlowChart = resolveComponent("FlowChart");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u6D41\u7A0B\u56FE",
    content: "\u7B80\u5355\u6D41\u7A0B\u56FE\u793A\u4F8B,\u5177\u4F53\u529F\u80FD\u9700\u8981\u81EA\u5DF1\u5B8C\u5584",
    contentFullHeight: "",
    fixedHeight: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_FlowChart, { data: $setup.demoData }, null, 8, ["data"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
