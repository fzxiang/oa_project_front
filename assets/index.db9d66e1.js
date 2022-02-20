import { _ as _export_sfc, aR as CollapseContainer, k as useGo, a5 as useTabs, h as useMessage } from "./index.d921a71a.js";
import { a as PageWrapper } from "./index.a8baf6bf.js";
import { B as defineComponent, ap as Input, bM as Alert, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, F as createElementBlock, aq as renderList, af as createTextVNode, K as toDisplayString, ac as Fragment } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./useWindowSizeFn.07387e97.js";
import "./useContentViewHeight.d76478e3.js";
const _sfc_main = defineComponent({
  name: "TabsDemo",
  components: { CollapseContainer, PageWrapper, [Input.name]: Input, [Alert.name]: Alert },
  setup() {
    const go = useGo();
    const title = ref("");
    const { closeAll, closeLeft, closeRight, closeOther, closeCurrent, refreshPage, setTitle } = useTabs();
    const { createMessage } = useMessage();
    function setTabTitle() {
      if (title.value) {
        setTitle(title.value);
      } else {
        createMessage.error("\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684Tab\u6807\u9898\uFF01");
      }
    }
    function toDetail(index2) {
      go(`/feat/tabs/detail/${index2}`);
    }
    return {
      closeAll,
      closeLeft,
      closeRight,
      closeOther,
      closeCurrent,
      toDetail,
      refreshPage,
      setTabTitle,
      title
    };
  }
});
const _hoisted_1 = { class: "mt-2 flex flex-grow-0" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u8BBE\u7F6ETab\u6807\u9898 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u5173\u95ED\u6240\u6709 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5173\u95ED\u5DE6\u4FA7 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u5173\u95ED\u53F3\u4FA7 ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u5173\u95ED\u5176\u4ED6 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u5173\u95ED\u5F53\u524D ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u5237\u65B0\u5F53\u524D ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_alert = resolveComponent("a-alert");
  const _component_a_button = resolveComponent("a-button");
  const _component_a_input = resolveComponent("a-input");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58" }, {
        default: withCtx(() => [
          createVNode(_component_a_alert, {
            banner: "",
            message: "\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u6807\u9898\uFF0C\u4EC5\u4FEE\u6539Tab\u6807\u9898"
          }),
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_a_button, {
              class: "mr-2",
              onClick: _ctx.setTabTitle,
              type: "primary"
            }, {
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_a_input, {
              placeholder: "\u8BF7\u8F93\u5165",
              value: _ctx.title,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.title = $event),
              class: "mr-4 w-12"
            }, null, 8, ["value"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        class: "mt-4",
        title: "\u6807\u7B7E\u9875\u64CD\u4F5C"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            class: "mr-2",
            onClick: _ctx.closeAll
          }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            class: "mr-2",
            onClick: _ctx.closeLeft
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            class: "mr-2",
            onClick: _ctx.closeRight
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            class: "mr-2",
            onClick: _ctx.closeOther
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            class: "mr-2",
            onClick: _ctx.closeCurrent
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_a_button, {
            class: "mr-2",
            onClick: _ctx.refreshPage
          }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        class: "mt-4",
        title: "\u6807\u7B7E\u9875\u590D\u7528\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED(\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531)"
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock(Fragment, null, renderList(6, (index2) => {
            return createVNode(_component_a_button, {
              key: index2,
              class: "mr-2",
              onClick: ($event) => _ctx.toDetail(index2)
            }, {
              default: withCtx(() => [
                createTextVNode(" \u6253\u5F00" + toDisplayString(index2) + "\u8BE6\u60C5\u9875 ", 1)
              ]),
              _: 2
            }, 1032, ["onClick"]);
          }), 64))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
