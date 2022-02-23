var __defProp = Object.defineProperty;
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
import { B as BasicModal, a as useModalInner } from "./index.fa2f8a67.js";
import { B as BasicForm } from "./BasicForm.514db834.js";
import { u as useForm } from "./useForm.e2739461.js";
import { writerInfoForm } from "./tableData.1d4ce05d.js";
import { aF as defHttp, _ as _export_sfc } from "./index.269aa0b6.js";
import { B as defineComponent, r as ref, u as unref, j as computed, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, a5 as mergeProps } from "./vendor.7c0ada15.js";
const searchApi = (params) => defHttp.get({ url: "/searchWriter", params });
const updateWriterApi = (params) => defHttp.post({ url: "/updateWriter", params }, { successMessageMode: "notification" });
const searchChildApi = (params) => defHttp.post({ url: "/getOrdersOfWriter", params });
const _sfc_main = defineComponent({
  name: "AccountModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const rowId = ref(0);
    const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
      schemas: writerInfoForm,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 23
      }
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      await resetFields();
      setModalProps({ confirmLoading: false });
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      console.log(data);
      rowId.value = data.record.id;
      if (unref(isUpdate)) {
        setModalProps({});
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
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u5199\u624B" : "\u7F16\u8F91\u5199\u624B");
    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        await updateWriterApi({ id: rowId.value, writerInfo: __spreadValues({}, values) });
        closeModal();
        emit("success", { isUpdate: unref(isUpdate), values: __spreadValues({}, values) });
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
var WriterModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var WriterModal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": WriterModal
});
export { WriterModal as W, searchChildApi as a, WriterModal$1 as b, searchApi as s };
