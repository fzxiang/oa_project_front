import { B as defineComponent, bm as Tag, c8 as Affix, c9 as CopyOutlined, ca as List, r as ref, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, L as normalizeClass, J as createBaseVNode, F as createElementBlock, aq as renderList, ac as Fragment, u as unref, K as toDisplayString, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                 */import { aF as defHttp, _ as _export_sfc, I as Icon, aT as useCopyToClipboard, h as useMessage } from "./index.a74bdb7c.js";
import { B as BasicForm } from "./BasicForm.a4670432.js";
import { u as useForm } from "./useForm.7940370b.js";
import { a as PageWrapper } from "./index.066bd91b.js";
/* empty css                  *//* empty css                 *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.44c62108.js";
/* empty css                 */import "./index.323d0c2b.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.7980a3dd.js";
import "./base64Conver.08b9f4ec.js";
import "./index.6a9ed45d.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.e928adad.js";
var index$1 = "";
const getWriterInfoApi = (params) => defHttp.get({ url: "/getWriterInfo", params });
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
        component: "Input",
        label: "\u5199\u624B\u624B\u673A\u53F7",
        required: true,
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
    const [register, {}] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24
      },
      showResetButton: false
    });
    async function handleSubmit(params) {
      const result = await getWriterInfoApi(params);
      list.value = [...result, ...result, ...result];
    }
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
      handleSubmit,
      MAPWRITER: {
        1: "\u62D6\u7A3F",
        2: "\u5931\u8054",
        3: "\u62D2\u7EDD\u4FEE\u6539",
        4: "\u6001\u5EA6\u5DEE"
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
    class: normalizeClass(_ctx.prefixCls),
    title: "\u8BA2\u5355\u5217\u8868"
  }, {
    headerContent: withCtx(() => [
      createVNode(_component_Affix, { "offset-top": 0 }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, {
            class: normalizeClass(`${_ctx.prefixCls}__header-form`),
            onRegister: _ctx.register,
            onSubmit: _ctx.handleSubmit,
            style: { "background": "white" }
          }, null, 8, ["class", "onRegister", "onSubmit"])
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
                        }, " \u5199\u624B\u72B6\u6001:" + toDisplayString(_ctx.MAPWRITER[item["wSettleState"]]), 3),
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-right`)
                        }, " \u8865\u507F\u72B6\u6001:" + toDisplayString(_ctx.MAPSTATUS[item["compensateState"]]), 3)
                      ], 2),
                      createBaseVNode("div", {
                        class: normalizeClass(`${_ctx.prefixCls}__action`)
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-left`)
                        }, " \u4ED8\u6B3E\u65F6\u95F4\uFF1A ", 2),
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-right`)
                        }, toDisplayString(item["paymentTime"] || ""), 3)
                      ], 2),
                      createBaseVNode("div", {
                        class: normalizeClass(`${_ctx.prefixCls}__action`)
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__action-left`)
                        }, " \u6536\u8D27\u65F6\u95F4\uFF1A ", 2),
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
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-70c544ac"]]);
export { index as default };
