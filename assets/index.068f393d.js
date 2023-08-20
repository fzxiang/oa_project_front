import { d as defineComponent, bo as Tag, ca as Affix, cb as CopyOutlined, cc as List, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, X as normalizeClass, V as createBaseVNode, R as createElementBlock, as as renderList, ag as Fragment, b as unref, W as toDisplayString, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 */import { I as Icon, J as useCopyToClipboard } from "./index.7be4058a.js";
import { B as BasicForm } from "./BasicForm.a9877c74.js";
import { u as useForm } from "./useForm.530809d4.js";
import { a as PageWrapper } from "./index.a1d89833.js";
/* empty css                  *//* empty css                 */import { g as getWriterInfoApi } from "./writer.d935c515.js";
import { _ as _export_sfc, F as useMessage } from "./index.b67cb216.js";
import "./useRootSetting.0e80d1b6.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.6d37a7cb.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.0e01c4d1.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.ca8b90e9.js";
import "./usePermission.239d95b9.js";
import "./useTabs.bf5d7fd8.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.15ce02e4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.4f8284f4.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.6125eacd.js";
var index$1 = "";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    Icon,
    Tag,
    Affix,
    BasicForm,
    PageWrapper,
    CopyOutlined,
    [List.name]: List,
    [List.Item.name]: List.Item,
    AListItemMeta: List.Item.Meta
  },
  setup() {
    const schemas = [
      {
        field: "writerNum",
        component: "InputSearch",
        label: "\u624B\u673A\u53F7",
        rulesMessageJoinLabel: false,
        componentProps: {
          placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
          onSearch: async (value) => {
            if (/^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/.test(value)) {
              list.value = await getWriterInfoApi({ writerNum: value });
            } else {
              createMessage.error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\uFF01");
            }
          }
        },
        colProps: {
          span: 24
        }
      }
    ];
    const list = ref([]);
    const actions = [
      { icon: "clarity:star-line", text: "156", color: "#018ffb" },
      { icon: "bx:bxs-like", text: "156", color: "#e24821" }
    ];
    const [register] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24
      },
      showActionButtonGroup: false
    });
    const { createMessage } = useMessage();
    const { clipboardRef, copiedRef } = useCopyToClipboard();
    function handleCopy(value) {
      clipboardRef.value = value;
      if (unref(copiedRef)) {
        createMessage.warning("\u590D\u5236\u6210\u529F\uFF01");
      }
    }
    return {
      prefixCls: "list-search",
      list,
      actions,
      register,
      handleCopy,
      MAPSETTLE: {
        1: "\u5DF2\u7ED3\u7B97",
        2: "\u672A\u7ED3\u7B97",
        3: "\u6682\u7F13\u7ED3\u7B97"
      },
      MAPSTATUS: {
        0: "\u6682\u65E0\u8865\u507F",
        1: "\u7A3F\u8D39\u8865\u507F"
      }
    };
  }
});
const _hoisted_1 = { style: { "color": "#e24821", "font-size": "18px" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_Affix = resolveComponent("Affix");
  const _component_Icon = resolveComponent("Icon");
  const _component_copy_outlined = resolveComponent("copy-outlined");
  const _component_Tag = resolveComponent("Tag");
  const _component_a_list_item_meta = resolveComponent("a-list-item-meta");
  const _component_a_list_item = resolveComponent("a-list-item");
  const _component_a_list = resolveComponent("a-list");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    class: normalizeClass(_ctx.prefixCls)
  }, {
    headerContent: withCtx(() => [
      createVNode(_component_Affix, { "offset-top": 0 }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, {
            class: normalizeClass(`${_ctx.prefixCls}__header-form`),
            onRegister: _ctx.register,
            style: { "background": "white" }
          }, null, 8, ["class", "onRegister"])
        ]),
        _: 1
      })
    ]),
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__container`)
      }, [
        createVNode(_component_a_list, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
              return openBlock(), createBlock(_component_a_list_item, {
                key: item.id
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_list_item_meta, null, {
                    title: withCtx(() => [
                      createBaseVNode("div", {
                        class: normalizeClass(`${_ctx.prefixCls}__title`)
                      }, [
                        createVNode(_component_Icon, {
                          class: normalizeClass(`${_ctx.prefixCls}__action-icon`),
                          icon: "ant-design:shop-outlined",
                          color: "#018ffb"
                        }, null, 8, ["class"]),
                        createBaseVNode("span", null, toDisplayString(item.shop_name), 1)
                      ], 2)
                    ]),
                    description: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(_component_Icon, {
                          class: normalizeClass(`${_ctx.prefixCls}__action-icon`),
                          icon: "ant-design:pay-circle-outlined",
                          color: "#E24821"
                        }, null, 8, ["class"]),
                        createBaseVNode("span", _hoisted_1, toDisplayString(item.writerPrice), 1)
                      ]),
                      createBaseVNode("div", {
                        class: normalizeClass(`${_ctx.prefixCls}__action`)
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-left`)
                        }, " \u7ED3\u7B97\u72B6\u6001:" + toDisplayString(_ctx.MAPSETTLE[item["wSettleState"]]), 3),
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-right`)
                        }, " \u8865\u507F\u72B6\u6001:" + toDisplayString(_ctx.MAPSTATUS[item["compensateState"]]), 3)
                      ], 2),
                      createBaseVNode("div", {
                        class: normalizeClass(`${_ctx.prefixCls}__action`)
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-left`)
                        }, " \u4ED8\u6B3E\u65F6\u95F4\uFF1A", 2),
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-right`)
                        }, toDisplayString(item["paymentTime"] || ""), 3)
                      ], 2),
                      createBaseVNode("div", {
                        class: normalizeClass(`${_ctx.prefixCls}__action`)
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-left`)
                        }, " \u6536\u8D27\u65F6\u95F4\uFF1A", 2),
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-right`)
                        }, toDisplayString(item["receivingTime"] || ""), 3)
                      ], 2),
                      createBaseVNode("div", null, [
                        createTextVNode(" \u53D1\u5355\u53F7:" + toDisplayString(item.invoice) + " ", 1),
                        createVNode(_component_Tag, {
                          class: "mb-2",
                          onClick: ($event) => _ctx.handleCopy(item.invoice)
                        }, {
                          icon: withCtx(() => [
                            createVNode(_component_copy_outlined)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        })
      ], 2)
    ]),
    _: 1
  }, 8, ["class"]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1bc47651"]]);
export { index as default };
