import { B as BasicForm } from "./BasicForm.51a12356.js";
import { u as useForm } from "./useForm.2a3ca82d.js";
import { step2Schemas } from "./data.2505cb7f.js";
import { d as defineComponent, bO as Alert, b6 as Divider, c8 as Descriptions, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                  */import { _ as _export_sfc } from "./index.c01f1eb2.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.cc517659.js";
import "./index.7fb5b23a.js";
import "./useRootSetting.f9f62c0d.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.0fe36650.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  */import "./index.e4b88187.js";
import "./usePermission.7c6a7949.js";
import "./useTabs.d46f9a8b.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.57e633b4.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7f294f46.js";
var Step2_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    BasicForm,
    [Alert.name]: Alert,
    [Divider.name]: Divider,
    [Descriptions.name]: Descriptions,
    [Descriptions.Item.name]: Descriptions.Item
  },
  emits: ["next", "prev"],
  setup(_, { emit }) {
    const [register, { validate, setProps }] = useForm({
      labelWidth: 80,
      schemas: step2Schemas,
      actionColOptions: {
        span: 14
      },
      resetButtonOptions: {
        text: "\u4E0A\u4E00\u6B65"
      },
      submitButtonOptions: {
        text: "\u63D0\u4EA4"
      },
      resetFunc: customResetFunc,
      submitFunc: customSubmitFunc
    });
    async function customResetFunc() {
      emit("prev");
    }
    async function customSubmitFunc() {
      try {
        const values = await validate();
        setProps({
          submitButtonOptions: {
            loading: true
          }
        });
        setTimeout(() => {
          setProps({
            submitButtonOptions: {
              loading: false
            }
          });
          emit("next", values);
        }, 1500);
      } catch (error) {
      }
    }
    return { register };
  }
});
const _hoisted_1 = { class: "step2" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" ant-design@alipay.com ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" test@example.com ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Vben ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" 500\u5143 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_alert = resolveComponent("a-alert");
  const _component_a_descriptions_item = resolveComponent("a-descriptions-item");
  const _component_a_descriptions = resolveComponent("a-descriptions");
  const _component_a_divider = resolveComponent("a-divider");
  const _component_BasicForm = resolveComponent("BasicForm");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_a_alert, {
      message: "\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002",
      "show-icon": ""
    }),
    createVNode(_component_a_descriptions, {
      column: 1,
      class: "mt-5"
    }, {
      default: withCtx(() => [
        createVNode(_component_a_descriptions_item, { label: "\u4ED8\u6B3E\u8D26\u6237" }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }),
        createVNode(_component_a_descriptions_item, { label: "\u6536\u6B3E\u8D26\u6237" }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(_component_a_descriptions_item, { label: "\u6536\u6B3E\u4EBA\u59D3\u540D" }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_component_a_descriptions_item, { label: "\u8F6C\u8D26\u91D1\u989D" }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    createVNode(_component_a_divider),
    createVNode(_component_BasicForm, { onRegister: _ctx.register }, null, 8, ["onRegister"])
  ]);
}
var Step2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-01481d2f"]]);
export { Step2 as default };
