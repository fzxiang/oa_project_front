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
import { B as BasicModal, a as useModalInner } from "./index.b2b953b0.js";
import { B as BasicForm } from "./BasicForm.9a4a9312.js";
import { u as useForm } from "./useForm.70b03046.js";
import { s as shopListApi, a as searchShop, u as updateShopApi, b as addShopApi } from "./shop.aaeed6d4.js";
import { _ as _export_sfc } from "./index.deb64523.js";
import { d as defineComponent, Q as ref, b as unref, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
const columns = [
  {
    title: "ID",
    dataIndex: "shop_id",
    fixed: "left",
    width: 200
  },
  {
    title: "\u5E97\u94FA\u540D\u79F0",
    dataIndex: "shop_name",
    width: 150
  },
  {
    title: "\u516C\u53F8\u540D",
    dataIndex: "company_name"
  },
  {
    title: "\u5907\u6CE8",
    dataIndex: "remarks",
    width: 150,
    sorter: true
  },
  {
    title: "\u521B\u5EFA\u65F6\u95F4",
    sorter: true,
    dataIndex: "created_at"
  },
  {
    title: "\u66F4\u65B0\u65F6\u95F4",
    sorter: true,
    dataIndex: "updated_at",
    defaultHidden: true
  }
];
const searchFormSchema = [
  {
    label: "\u5E97\u94FA\u540D\u79F0",
    field: "shop_id",
    component: "ApiSelect",
    componentProps: {
      api: shopListApi,
      labelField: "shop_name",
      valueField: "shop_id",
      showSearch: true
    },
    colProps: { span: 8 }
  }
];
const formSchemas = [
  {
    field: "shop_id",
    label: "ID",
    component: "Input",
    show: false
  },
  {
    field: "shop_name",
    label: "\u5E97\u94FA\u540D\u79F0",
    component: "Input",
    helpMessage: ["\u8BF7\u8F93\u5165\u65B0\u7684\u5E97\u94FA\u540D\u79F0\uFF08\u4E0D\u91CD\u590D\uFF09"],
    rules: [
      {
        required: true,
        message: "\u8BF7\u8F93\u5165\u5E97\u94FA\u540D\u79F0"
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            searchShop({ shop_name: value }).then(() => {
              reject("\u5DF2\u5B58\u5728\u6539\u5E97\u94FA\u540D\uFF01");
            }).catch(() => {
              resolve();
            });
          });
        }
      }
    ]
  },
  {
    field: "company_name",
    label: "\u516C\u53F8\u540D\u79F0",
    component: "Input",
    required: true
  },
  {
    label: "\u5907\u6CE8",
    field: "remarks",
    component: "InputTextArea"
  }
];
const _sfc_main = defineComponent({
  name: "ShopModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const rowId = ref("");
    const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
      labelWidth: 100,
      schemas: formSchemas,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 23
      }
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields();
      setModalProps({ confirmLoading: false });
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        rowId.value = data.record.shop_id;
        setFieldsValue(__spreadValues({}, data.record));
      }
    });
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u5E97\u94FA" : "\u7F16\u8F91\u5E97\u94FA");
    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        console.log(values);
        if (unref(isUpdate)) {
          await updateShopApi(values);
        } else {
          await addShopApi(values);
        }
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
var ShopModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var ShopModal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": ShopModal
});
export { ShopModal as S, ShopModal$1 as a, columns as c, searchFormSchema as s };
