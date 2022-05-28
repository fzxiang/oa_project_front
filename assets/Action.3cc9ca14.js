import { S as ScrollContainer } from "./index.69692b74.js";
import { a as PageWrapper } from "./index.dfbcda7d.js";
import { _ as _export_sfc } from "./index.e7b2878b.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, R as createElementBlock, as as renderList, W as toDisplayString, ag as Fragment, aj as createTextVNode, b as unref } from "./vendor.faf2de98.js";
import "./useRootSetting.63072823.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.b40837c1.js";
var Action_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: { ScrollContainer, PageWrapper },
  setup() {
    const scrollRef = ref(null);
    const getScroll = () => {
      const scroll = unref(scrollRef);
      if (!scroll) {
        throw new Error("scroll is Null");
      }
      return scroll;
    };
    function scrollTo(top) {
      getScroll().scrollTo(top);
    }
    function scrollBottom() {
      getScroll().scrollBottom();
    }
    return {
      scrollTo,
      scrollRef,
      scrollBottom
    };
  }
});
const _hoisted_1 = { class: "my-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u6EDA\u52A8\u5230100px\u4F4D\u7F6E ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6EDA\u52A8\u5230800px\u4F4D\u7F6E ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u6EDA\u52A8\u5230\u9876\u90E8 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u6EDA\u52A8\u5230\u5E95\u90E8 ");
const _hoisted_6 = { class: "scroll-wrap" };
const _hoisted_7 = { class: "p-3" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_ScrollContainer = resolveComponent("ScrollContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u6EDA\u52A8\u7EC4\u4EF6\u51FD\u6570\u793A\u4F8B",
    content: "\u57FA\u4E8Eel-scrollbar"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_a_button, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.scrollTo(100)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.scrollTo(800)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.scrollTo(0)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.scrollBottom()),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_6, [
        createVNode(_component_ScrollContainer, {
          class: "mt-4",
          ref: "scrollRef"
        }, {
          default: withCtx(() => [
            createBaseVNode("ul", _hoisted_7, [
              (openBlock(), createElementBlock(Fragment, null, renderList(100, (index) => {
                return createBaseVNode("li", {
                  key: index,
                  class: "p-2",
                  style: { border: "1px solid #eee" }
                }, toDisplayString(index), 1);
              }), 64))
            ])
          ]),
          _: 1
        }, 512)
      ])
    ]),
    _: 1
  });
}
var Action = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0369ce10"]]);
export { Action as default };
