import { B as BasicForm } from "./BasicForm.da1c9705.js";
import { u as useForm } from "./useForm.47d181cc.js";
import { H as CollapseContainer } from "./index.55d49599.js";
import { d as defineComponent, I as Input, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, ai as createCommentVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
import { a as PageWrapper } from "./index.089391a0.js";
import { B as Button } from "./index.cff27d3a.js";
import { _ as _export_sfc } from "./index.7a39a7ac.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.94a33a2b.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.6184b776.js";
import "./useRootSetting.3e9429c5.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./usePermission.6a085a03.js";
import "./useTabs.9117b4c0.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.4c317275.js";
import "./base64Conver.08b9f4ec.js";
import "./index.fba49a50.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.4a5cf1f5.js";
const _sfc_main = defineComponent({
  components: { BasicForm, CollapseContainer, PageWrapper, [Input.name]: Input, Button },
  setup() {
    const [register, { appendSchemaByField, removeSchemaByFiled, validate }] = useForm({
      schemas: [
        {
          field: "field0a",
          component: "Input",
          label: "\u5B57\u6BB50",
          colProps: {
            span: 8
          },
          required: true
        },
        {
          field: "field0b",
          component: "Input",
          label: "\u5B57\u6BB50",
          colProps: {
            span: 8
          },
          required: true
        },
        {
          field: "0",
          component: "Input",
          label: " ",
          colProps: {
            span: 8
          },
          slot: "add"
        }
      ],
      labelWidth: 100,
      actionColOptions: { span: 24 }
    });
    async function handleSubmit() {
      try {
        const data = await validate();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    const n = ref(1);
    function add() {
      appendSchemaByField({
        field: `field${n.value}a`,
        component: "Input",
        label: "\u5B57\u6BB5" + n.value,
        colProps: {
          span: 8
        },
        required: true
      }, "");
      appendSchemaByField({
        field: `field${n.value}b`,
        component: "Input",
        label: "\u5B57\u6BB5" + n.value,
        colProps: {
          span: 8
        },
        required: true
      }, "");
      appendSchemaByField({
        field: `${n.value}`,
        component: "Input",
        label: " ",
        colProps: {
          span: 8
        },
        slot: "add"
      }, "");
      n.value++;
    }
    function del(field) {
      removeSchemaByFiled([`field${field}a`, `field${field}b`, `${field}`]);
      n.value--;
    }
    return { register, handleSubmit, add, del };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("+");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("-");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u8868\u5355\u589E\u5220\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "\u8868\u5355\u589E\u5220" }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, {
            onRegister: _ctx.register,
            onSubmit: _ctx.handleSubmit
          }, {
            add: withCtx(({ field }) => [
              Number(field) === 0 ? (openBlock(), createBlock(_component_Button, {
                key: 0,
                onClick: _ctx.add
              }, {
                default: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              field > 0 ? (openBlock(), createBlock(_component_Button, {
                key: 1,
                onClick: ($event) => _ctx.del(field)
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["onRegister", "onSubmit"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var AppendForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AppendForm as default };