import { B as BasicDragVerify } from "./index.ac615ce7.js";
import { _ as _export_sfc, F as useMessage } from "./index.ea7eac1d.js";
import { a as PageWrapper } from "./index.b9e9b22c.js";
import { d as defineComponent, cG as BugOutlined, bs as RightOutlined, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, aj as createTextVNode } from "./vendor.faf2de98.js";
import "./useRootSetting.c14ffa63.js";
import "./index.54e5dd4b.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.fd09079c.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { BasicDragVerify, BugOutlined, RightOutlined, PageWrapper },
  setup() {
    const { createMessage } = useMessage();
    const el1 = ref(null);
    const el2 = ref(null);
    const el3 = ref(null);
    const el4 = ref(null);
    const el5 = ref(null);
    function handleSuccess(data) {
      const { time } = data;
      createMessage.success(`\u6821\u9A8C\u6210\u529F,\u8017\u65F6${time}\u79D2`);
    }
    function handleBtnClick(elRef) {
      if (!elRef) {
        return;
      }
      elRef.resume();
    }
    return {
      handleSuccess,
      el1,
      el2,
      el3,
      el4,
      el5,
      handleBtnClick
    };
  }
});
const _hoisted_1 = { class: "flex justify-center p-4 items-center bg-gray-700" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539F ");
const _hoisted_3 = { class: "flex justify-center p-4 items-center bg-gray-700" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539F ");
const _hoisted_5 = { class: "flex justify-center p-4 items-center bg-gray-700" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539F ");
const _hoisted_7 = { class: "flex justify-center p-4 items-center bg-gray-700" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539F ");
const _hoisted_9 = { class: "flex justify-center p-4 items-center bg-gray-700" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u6210\u529F ");
const _hoisted_12 = { key: 1 };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" \u62D6\u52A8 ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539F ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicDragVerify = resolveComponent("BasicDragVerify");
  const _component_a_button = resolveComponent("a-button");
  const _component_BugOutlined = resolveComponent("BugOutlined");
  const _component_RightOutlined = resolveComponent("RightOutlined");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u62D6\u52A8\u6821\u9A8C\u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_BasicDragVerify, {
          ref: "el1",
          onSuccess: _ctx.handleSuccess
        }, null, 8, ["onSuccess"]),
        createVNode(_component_a_button, {
          type: "primary",
          class: "ml-2",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleBtnClick(_ctx.el1))
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_3, [
        createVNode(_component_BasicDragVerify, {
          ref: "el2",
          onSuccess: _ctx.handleSuccess,
          circle: ""
        }, null, 8, ["onSuccess"]),
        createVNode(_component_a_button, {
          type: "primary",
          class: "ml-2",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleBtnClick(_ctx.el2))
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_BasicDragVerify, {
          ref: "el3",
          onSuccess: _ctx.handleSuccess,
          text: "\u62D6\u52A8\u4EE5\u8FDB\u884C\u6821\u9A8C",
          successText: "\u6821\u9A8C\u6210\u529F",
          barStyle: {
            backgroundColor: "#018ffb"
          }
        }, null, 8, ["onSuccess"]),
        createVNode(_component_a_button, {
          type: "primary",
          class: "ml-2",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.handleBtnClick(_ctx.el3))
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_7, [
        createVNode(_component_BasicDragVerify, {
          ref: "el4",
          onSuccess: _ctx.handleSuccess
        }, {
          actionIcon: withCtx((isPassing) => [
            isPassing ? (openBlock(), createBlock(_component_BugOutlined, { key: 0 })) : (openBlock(), createBlock(_component_RightOutlined, { key: 1 }))
          ]),
          _: 1
        }, 8, ["onSuccess"]),
        createVNode(_component_a_button, {
          type: "primary",
          class: "ml-2",
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleBtnClick(_ctx.el4))
        }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_9, [
        createVNode(_component_BasicDragVerify, {
          ref: "el5",
          onSuccess: _ctx.handleSuccess
        }, {
          text: withCtx((isPassing) => [
            isPassing ? (openBlock(), createElementBlock("div", _hoisted_10, [
              createVNode(_component_BugOutlined),
              _hoisted_11
            ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
              _hoisted_13,
              createVNode(_component_RightOutlined)
            ]))
          ]),
          _: 1
        }, 8, ["onSuccess"]),
        createVNode(_component_a_button, {
          type: "primary",
          class: "ml-2",
          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleBtnClick(_ctx.el5))
        }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-432b38d7"]]);
export { index as default };
