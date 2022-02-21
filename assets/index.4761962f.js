import { _ as _export_sfc, aR as CollapseContainer, I as Icon, at as _sfc_main$1, bc as SvgIcon, o as openWindow } from "./index.9f6c9c50.js";
import { B as defineComponent, cs as GithubFilled, ct as QqCircleFilled, cu as WechatFilled, cv as AlipayCircleFilled, cw as IeCircleFilled, cx as TaobaoCircleFilled, cy as CodepenCircleFilled, bM as Alert, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, F as createElementBlock, aq as renderList, ac as Fragment, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                  */import { a as PageWrapper } from "./index.3ed09f6c.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.ca4f2553.js";
const _sfc_main = defineComponent({
  components: {
    PageWrapper,
    CollapseContainer,
    GithubFilled,
    QqCircleFilled,
    WechatFilled,
    AlipayCircleFilled,
    IeCircleFilled,
    TaobaoCircleFilled,
    CodepenCircleFilled,
    Icon,
    Alert,
    IconPicker: _sfc_main$1,
    SvgIcon
  },
  setup() {
    return {
      toIconify: () => {
        openWindow("https://iconify.design/");
      }
    };
  }
});
const _hoisted_1 = { class: "flex justify-around" };
const _hoisted_2 = { class: "flex justify-around flex-wrap" };
const _hoisted_3 = { class: "flex justify-around flex-wrap" };
const _hoisted_4 = { class: "flex justify-around flex-wrap" };
const _hoisted_5 = { class: "flex justify-around flex-wrap" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Iconify \u56FE\u6807\u5927\u5168 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GithubFilled = resolveComponent("GithubFilled");
  const _component_QqCircleFilled = resolveComponent("QqCircleFilled");
  const _component_WechatFilled = resolveComponent("WechatFilled");
  const _component_AlipayCircleFilled = resolveComponent("AlipayCircleFilled");
  const _component_IeCircleFilled = resolveComponent("IeCircleFilled");
  const _component_TaobaoCircleFilled = resolveComponent("TaobaoCircleFilled");
  const _component_CodepenCircleFilled = resolveComponent("CodepenCircleFilled");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_Icon = resolveComponent("Icon");
  const _component_SvgIcon = resolveComponent("SvgIcon");
  const _component_IconPicker = resolveComponent("IconPicker");
  const _component_Alert = resolveComponent("Alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "Icon\u7EC4\u4EF6\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "Antv Icon\u4F7F\u7528 (\u76F4\u63A5\u6309\u9700\u5F15\u5165\u76F8\u5E94\u7EC4\u4EF6\u5373\u53EF)" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_GithubFilled, { style: { fontSize: "30px" } }),
            createVNode(_component_QqCircleFilled, { style: { fontSize: "30px" } }),
            createVNode(_component_WechatFilled, { style: { fontSize: "30px" } }),
            createVNode(_component_AlipayCircleFilled, { style: { fontSize: "30px" } }),
            createVNode(_component_IeCircleFilled, { style: { fontSize: "30px" } }),
            createVNode(_component_TaobaoCircleFilled, { style: { fontSize: "30px" } }),
            createVNode(_component_CodepenCircleFilled, { style: { fontSize: "30px" } })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        title: "IconIfy \u7EC4\u4EF6\u4F7F\u7528",
        class: "my-5"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_Icon, {
              icon: "ion:layers-outline",
              size: 30
            }),
            createVNode(_component_Icon, {
              icon: "ion:bar-chart-outline",
              size: 30
            }),
            createVNode(_component_Icon, {
              icon: "ion:tv-outline",
              size: 30
            }),
            createVNode(_component_Icon, {
              icon: "ion:settings-outline",
              size: 30
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        title: "svg \u96EA\u78A7\u56FE",
        class: "my-5"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_SvgIcon, {
              name: "test",
              size: "32"
            }),
            (openBlock(), createElementBlock(Fragment, null, renderList(6, (item) => {
              return createVNode(_component_SvgIcon, {
                key: item,
                name: `dynamic-avatar-${item}`,
                size: "32"
              }, null, 8, ["name"]);
            }), 64))
          ])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        title: "\u56FE\u6807\u9009\u62E9\u5668(Iconify)",
        class: "my-5"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_IconPicker)
          ])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        title: "\u56FE\u6807\u9009\u62E9\u5668(Svg)",
        class: "my-5"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_IconPicker, { mode: "svg" })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Alert, {
        "show-icon": "",
        message: "\u63A8\u8350\u4F7F\u7528Iconify\u7EC4\u4EF6",
        description: "Icon\u7EC4\u4EF6\u57FA\u672C\u5305\u542B\u6240\u6709\u7684\u56FE\u6807,\u5728\u4E0B\u9762\u7F51\u5740\u5185\u4F60\u53EF\u4EE5\u67E5\u8BE2\u5230\u4F60\u60F3\u8981\u7684\u4EFB\u4F55\u56FE\u6807\u3002\u5E76\u4E14\u6253\u5305\u53EA\u4F1A\u6253\u5305\u6240\u7528\u5230\u7684\u56FE\u6807\u3002"
      }),
      createVNode(_component_a_button, {
        type: "link",
        onClick: _ctx.toIconify
      }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
