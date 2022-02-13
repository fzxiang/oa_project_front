import { C as CountTo } from "./index.87df00c4.js";
import { I as Icon } from "./index.bb57ad5a.js";
import { B as defineComponent, D as openBlock, F as createElementBlock, ac as Fragment, aq as renderList, a2 as createBlock, a7 as withCtx, w as createVNode, af as createTextVNode, K as toDisplayString, u as unref, bm as Tag, J as createBaseVNode, L as normalizeClass, cb as Card } from "./vendor.7c0ada15.js";
/* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 */const growCardList = [
  {
    title: "\u8BBF\u95EE\u6570",
    icon: "visit-count|svg",
    value: 2e3,
    total: 12e4,
    color: "green",
    action: "\u6708"
  },
  {
    title: "\u6210\u4EA4\u989D",
    icon: "total-sales|svg",
    value: 2e4,
    total: 5e5,
    color: "blue",
    action: "\u6708"
  },
  {
    title: "\u4E0B\u8F7D\u6570",
    icon: "download-count|svg",
    value: 8e3,
    total: 12e4,
    color: "orange",
    action: "\u5468"
  },
  {
    title: "\u6210\u4EA4\u6570",
    icon: "transaction|svg",
    value: 5e3,
    total: 5e4,
    color: "purple",
    action: "\u5E74"
  }
];
const _hoisted_1 = { class: "md:flex" };
const _hoisted_2 = { class: "py-4 px-4 flex justify-between items-center" };
const _hoisted_3 = { class: "p-2 px-4 flex justify-between" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    loading: {
      type: Boolean
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(growCardList), (item, index) => {
          return openBlock(), createBlock(unref(Card), {
            key: item.title,
            size: "small",
            loading: __props.loading,
            title: item.title,
            class: normalizeClass(["md:w-1/4 w-full !md:mt-0", { "!md:mr-4": index + 1 < 4, "!mt-4": index > 0 }])
          }, {
            extra: withCtx(() => [
              createVNode(unref(Tag), {
                color: item.color
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.action), 1)
                ]),
                _: 2
              }, 1032, ["color"])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(unref(CountTo), {
                  prefix: "$",
                  startVal: 1,
                  endVal: item.value,
                  class: "text-2xl"
                }, null, 8, ["endVal"]),
                createVNode(unref(Icon), {
                  icon: item.icon,
                  size: 40
                }, null, 8, ["icon"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("span", null, "\u603B" + toDisplayString(item.title), 1),
                createVNode(unref(CountTo), {
                  prefix: "$",
                  startVal: 1,
                  endVal: item.total
                }, null, 8, ["endVal"])
              ])
            ]),
            _: 2
          }, 1032, ["loading", "title", "class"]);
        }), 128))
      ]);
    };
  }
});
export { _sfc_main as default };
