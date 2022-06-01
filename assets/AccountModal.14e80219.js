var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { B as BasicModal, a as useModalInner } from "./index.887225a6.js";
import { B as BasicForm } from "./BasicForm.d23fb742.js";
import { u as useForm } from "./useForm.e6cca252.js";
import { a as getAllRoleApi, A as AddEditUserApi } from "./system.d70f7b6d.js";
import { _ as _export_sfc } from "./index.27fe703a.js";
import { d as defineComponent, Q as ref, b as unref, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
const columns = [
  {
    title: "id",
    dataIndex: "user_id",
    width: 80
  },
  {
    title: "\u7528\u6237\u540D",
    dataIndex: "username",
    width: 200
  },
  {
    title: "\u6635\u79F0",
    dataIndex: "nickname",
    width: 200
  },
  {
    title: "\u89D2\u8272",
    dataIndex: "role_name",
    width: 200
  },
  {
    title: "\u89D2\u8272ID",
    dataIndex: "role_id",
    width: 200,
    ifShow: false
  },
  {
    title: "\u521B\u5EFA\u65F6\u95F4",
    dataIndex: "created_at"
  },
  {
    title: "\u66F4\u65B0\u65F6\u95F4",
    dataIndex: "updated_at"
  }
];
const searchFormSchema = [
  {
    field: "nickname",
    label: "\u6635\u79F0",
    component: "Input",
    colProps: { span: 8 }
  }
];
const accountFormSchema = [
  {
    field: "username",
    label: "\u7528\u6237\u540D",
    component: "Input",
    helpMessage: ["\u4E0D\u80FD\u8F93\u5165\u5E26\u6709admin\u7684\u7528\u6237\u540D"],
    rules: [
      {
        required: true,
        message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
      }
    ]
  },
  {
    field: "\u7528\u6237ID",
    label: "user_id",
    component: "Input",
    ifShow: false
  },
  {
    field: "nickname",
    label: "\u6635\u79F0",
    component: "Input",
    required: true
  },
  {
    label: "\u89D2\u8272",
    field: "role_id",
    component: "ApiSelect",
    componentProps: {
      api: getAllRoleApi,
      labelField: "role_name",
      valueField: "id"
    },
    required: true
  },
  {
    label: "\u5BC6\u7801",
    field: "password",
    component: "InputPassword",
    required: true
  }
];
const _sfc_main = defineComponent({
  name: "AccountModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const rowId = ref("");
    const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
      labelWidth: 100,
      schemas: accountFormSchema,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 23
      }
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      await resetFields();
      setModalProps({ confirmLoading: false });
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        setModalProps({});
        rowId.value = data.record.user_id;
        await setFieldsValue(__spreadValues({}, data.record));
      }
      await updateSchema([
        {
          field: "password",
          show: !unref(isUpdate),
          required: false
        }
      ]);
    });
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u8D26\u53F7" : "\u7F16\u8F91\u8D26\u53F7");
    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        await AddEditUserApi(__spreadProps(__spreadValues({}, values), { user_id: rowId.value }));
        closeModal();
        emit("success", { isUpdate: unref(isUpdate), values: __spreadProps(__spreadValues({}, values), { id: rowId.value }) });
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }
    return { registerModal, registerForm, getTitle, handleSubmit };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps(_ctx.$attrs, {
    onRegister: _ctx.registerModal,
    title: _ctx.getTitle,
    onOk: _ctx.handleSubmit
  }), {
    default: withCtx(() => [
      createVNode(_component_BasicForm, { onRegister: _ctx.registerForm }, null, 8, ["onRegister"])
    ]),
    _: 1
  }, 16, ["onRegister", "title", "onOk"]);
}
var AccountModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var AccountModal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": AccountModal
});
export { AccountModal as A, AccountModal$1 as a, columns as c, searchFormSchema as s };
