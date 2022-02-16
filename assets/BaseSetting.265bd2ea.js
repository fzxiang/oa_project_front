import { B as defineComponent, aT as Button, b1 as Row, b0 as Col, $ as onMounted, j as computed, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, J as createBaseVNode, N as pushScopeId, O as popScopeId, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                 */import { B as BasicForm } from "./BasicForm.f6f10751.js";
import { u as useForm } from "./useForm.fa7b5680.js";
import { _ as _export_sfc, aR as CollapseContainer, f as useUserStore, h as useMessage } from "./index.d19df3e8.js";
import { a as CropperAvatar } from "./index.6db36197.js";
import { h as headerImg } from "./header.d801b988.js";
import { a as accountInfoApi } from "./account.07d78bf3.js";
import { b as baseSetschemas } from "./data.a0e55b88.js";
import { u as uploadApi } from "./upload.7630772f.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.d009fa9e.js";
/* empty css                 */import "./index.1f0d40c7.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.3d571b80.js";
import "./base64Conver.08b9f4ec.js";
import "./index.495b4e80.js";
/* empty css                  */var BaseSetting_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    BasicForm,
    CollapseContainer,
    Button,
    ARow: Row,
    ACol: Col,
    CropperAvatar
  },
  setup() {
    const { createMessage } = useMessage();
    const userStore = useUserStore();
    const [register, { setFieldsValue }] = useForm({
      labelWidth: 120,
      schemas: baseSetschemas,
      showActionButtonGroup: false
    });
    onMounted(async () => {
      const data = await accountInfoApi();
      setFieldsValue(data);
    });
    const avatar = computed(() => {
      const { avatar: avatar2 } = userStore.getUserInfo;
      return avatar2 || headerImg;
    });
    function updateAvatar(src) {
      const userinfo = userStore.getUserInfo;
      userinfo.avatar = src;
      userStore.setUserInfo(userinfo);
    }
    return {
      avatar,
      register,
      uploadApi,
      updateAvatar,
      handleSubmit: () => {
        createMessage.success("\u66F4\u65B0\u6210\u529F\uFF01");
      }
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-249137cb"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "change-avatar" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mb-2" }, "\u5934\u50CF", -1));
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_a_col = resolveComponent("a-col");
  const _component_CropperAvatar = resolveComponent("CropperAvatar");
  const _component_a_row = resolveComponent("a-row");
  const _component_Button = resolveComponent("Button");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  return openBlock(), createBlock(_component_CollapseContainer, {
    title: "\u57FA\u672C\u8BBE\u7F6E",
    canExpan: false
  }, {
    default: withCtx(() => [
      createVNode(_component_a_row, { gutter: 24 }, {
        default: withCtx(() => [
          createVNode(_component_a_col, { span: 14 }, {
            default: withCtx(() => [
              createVNode(_component_BasicForm, { onRegister: _ctx.register }, null, 8, ["onRegister"])
            ]),
            _: 1
          }),
          createVNode(_component_a_col, { span: 10 }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                _hoisted_2,
                createVNode(_component_CropperAvatar, {
                  uploadApi: _ctx.uploadApi,
                  value: _ctx.avatar,
                  btnText: "\u66F4\u6362\u5934\u50CF",
                  btnProps: { preIcon: "ant-design:cloud-upload-outlined" },
                  onChange: _ctx.updateAvatar,
                  width: "150"
                }, null, 8, ["uploadApi", "value", "onChange"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Button, {
        type: "primary",
        onClick: _ctx.handleSubmit
      }, {
        default: withCtx(() => [
          _hoisted_3
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    _: 1
  });
}
var BaseSetting = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-249137cb"]]);
export { BaseSetting as default };
