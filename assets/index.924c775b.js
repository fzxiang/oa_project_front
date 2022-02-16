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
import { B as defineComponent, ap as Input, bm as Tag, Q as reactive, cz as useWebSocket, an as watchEffect, j as computed, X as toRefs, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, af as createTextVNode, K as toDisplayString, F as createElementBlock, aq as renderList, ac as Fragment } from "./vendor.7c0ada15.js";
/* empty css                 */import { a as PageWrapper } from "./index.42463de2.js";
import { _ as _export_sfc, aZ as formatToDateTime } from "./index.eea97d5b.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.f18cec8b.js";
const _sfc_main = defineComponent({
  components: {
    PageWrapper,
    [Input.name]: Input,
    InputTextArea: Input.TextArea,
    Tag
  },
  setup() {
    const state = reactive({
      server: "ws://localhost:3300/test",
      sendValue: "",
      recordList: []
    });
    const { status, data, send, close, open } = useWebSocket(state.server, {
      autoReconnect: false,
      heartbeat: true
    });
    watchEffect(() => {
      if (data.value) {
        try {
          const res = JSON.parse(data.value);
          state.recordList.push(res);
        } catch (error) {
          state.recordList.push({
            res: data.value,
            id: Math.ceil(Math.random() * 1e3),
            time: new Date().getTime()
          });
        }
      }
    });
    const getIsOpen = computed(() => status.value === "OPEN");
    const getTagColor = computed(() => getIsOpen.value ? "success" : "red");
    const getList = computed(() => {
      return [...state.recordList].reverse();
    });
    function handlerSend() {
      send(state.sendValue);
      state.sendValue = "";
    }
    function toggle() {
      if (getIsOpen.value) {
        close();
      } else {
        open();
      }
    }
    return __spreadProps(__spreadValues({
      status,
      formatToDateTime
    }, toRefs(state)), {
      handlerSend,
      getList,
      toggle,
      getIsOpen,
      getTagColor
    });
  }
});
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "w-1/3 bg-white p-4" };
const _hoisted_3 = { class: "flex items-center" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "text-lg font-medium mr-4" }, " \u8FDE\u63A5\u72B6\u6001: ", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("hr", { class: "my-4" }, null, -1);
const _hoisted_6 = { class: "flex" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u670D\u52A1\u5730\u5740 ");
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", { class: "text-lg font-medium mt-4" }, "\u8BBE\u7F6E", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("hr", { class: "my-4" }, null, -1);
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u53D1\u9001 ");
const _hoisted_11 = { class: "w-2/3 bg-white ml-4 p-4" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "text-lg font-medium mr-4" }, " \u6D88\u606F\u8BB0\u5F55: ", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("hr", { class: "my-4" }, null, -1);
const _hoisted_14 = { class: "max-h-80 overflow-auto" };
const _hoisted_15 = { class: "flex items-center" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", { class: "mr-2 text-primary font-medium" }, "\u6536\u5230\u6D88\u606F:", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tag = resolveComponent("Tag");
  const _component_a_input = resolveComponent("a-input");
  const _component_a_button = resolveComponent("a-button");
  const _component_InputTextArea = resolveComponent("InputTextArea");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "WebSocket \u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _hoisted_4,
            createVNode(_component_Tag, { color: _ctx.getTagColor }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.status), 1)
              ]),
              _: 1
            }, 8, ["color"])
          ]),
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createVNode(_component_a_input, {
              value: _ctx.server,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.server = $event),
              disabled: ""
            }, {
              addonBefore: withCtx(() => [
                _hoisted_7
              ]),
              _: 1
            }, 8, ["value"]),
            createVNode(_component_a_button, {
              type: _ctx.getIsOpen ? "danger" : "primary",
              onClick: _ctx.toggle
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.getIsOpen ? "\u5173\u95ED\u8FDE\u63A5" : "\u5F00\u542F\u8FDE\u63A5"), 1)
              ]),
              _: 1
            }, 8, ["type", "onClick"])
          ]),
          _hoisted_8,
          _hoisted_9,
          createVNode(_component_InputTextArea, {
            placeholder: "\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u5185\u5BB9",
            disabled: !_ctx.getIsOpen,
            value: _ctx.sendValue,
            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.sendValue = $event),
            allowClear: ""
          }, null, 8, ["disabled", "value"]),
          createVNode(_component_a_button, {
            type: "primary",
            block: "",
            class: "mt-4",
            disabled: !_ctx.getIsOpen,
            onClick: _ctx.handlerSend
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          }, 8, ["disabled", "onClick"])
        ]),
        createBaseVNode("div", _hoisted_11, [
          _hoisted_12,
          _hoisted_13,
          createBaseVNode("div", _hoisted_14, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getList, (item) => {
                return openBlock(), createElementBlock("li", {
                  class: "mt-2",
                  key: item.time
                }, [
                  createBaseVNode("div", _hoisted_15, [
                    _hoisted_16,
                    createBaseVNode("span", null, toDisplayString(_ctx.formatToDateTime(item.time)), 1)
                  ]),
                  createBaseVNode("div", null, toDisplayString(item.res), 1)
                ]);
              }), 128))
            ])
          ])
        ])
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
