import { d as defineComponent, aP as Button, b4 as Row, b3 as Col, a6 as onMounted, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode, Y as pushScopeId, Z as popScopeId, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 */import { B as BasicForm } from "./BasicForm.0ec394b9.js";
import { u as useForm } from "./useForm.1ef0ba4b.js";
import { H as CollapseContainer } from "./index.f8ad7e32.js";
import { a as CropperAvatar } from "./index.29f8abb9.js";
import { _ as _export_sfc, q as useUserStore, F as useMessage } from "./index.9790552f.js";
import { h as headerImg } from "./header.d801b988.js";
import { a as accountInfoApi } from "./account.222f6fb1.js";
import { b as baseSetschemas } from "./data.a0e55b88.js";
import { u as uploadApi } from "./upload.99071535.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.b1a33e7f.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.7ede3b48.js";
import "./useRootSetting.36606a1c.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.25ce6cda.js";
import "./usePermission.4f36844b.js";
import "./useTabs.8475cac7.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.e5aed721.js";
import "./base64Conver.08b9f4ec.js";
import "./index.9cebab9d.js";
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
