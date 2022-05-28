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
import { B as BasicModal, a as useModalInner } from "./index.19462b5e.js";
import { B as BasicForm } from "./BasicForm.729218be.js";
import { u as useForm } from "./useForm.58aadad1.js";
import { N as h, bo as Tag, d as defineComponent, Q as ref, b as unref, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
/* empty css                 */import { f as getDeptList } from "./system.d6046d4d.js";
import { _ as _export_sfc } from "./index.6c404263.js";
const columns = [
  {
    title: "\u90E8\u95E8\u540D\u79F0",
    dataIndex: "deptName",
    width: 160,
    align: "left"
  },
  {
    title: "\u6392\u5E8F",
    dataIndex: "orderNo",
    width: 50
  },
  {
    title: "\u72B6\u6001",
    dataIndex: "status",
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? "green" : "red";
      const text = enable ? "\u542F\u7528" : "\u505C\u7528";
      return h(Tag, { color }, () => text);
    }
  },
  {
    title: "\u521B\u5EFA\u65F6\u95F4",
    dataIndex: "createTime",
    width: 180
  },
  {
    title: "\u5907\u6CE8",
    dataIndex: "remark"
  }
];
const searchFormSchema = [
  {
    field: "deptName",
    label: "\u90E8\u95E8\u540D\u79F0",
    component: "Input",
    colProps: { span: 8 }
  },
  {
    field: "status",
    label: "\u72B6\u6001",
    component: "Select",
    componentProps: {
      options: [
        { label: "\u542F\u7528", value: "0" },
        { label: "\u505C\u7528", value: "1" }
      ]
    },
    colProps: { span: 8 }
  }
];
const formSchema = [
  {
    field: "deptName",
    label: "\u90E8\u95E8\u540D\u79F0",
    component: "Input",
    required: true
  },
  {
    field: "parentDept",
    label: "\u4E0A\u7EA7\u90E8\u95E8",
    component: "TreeSelect",
    componentProps: {
      fieldNames: {
        label: "deptName",
        key: "id",
        value: "id"
      },
      getPopupContainer: () => document.body
    },
    required: true
  },
  {
    field: "orderNo",
    label: "\u6392\u5E8F",
    component: "InputNumber",
    required: true
  },
  {
    field: "status",
    label: "\u72B6\u6001",
    component: "RadioButtonGroup",
    defaultValue: "0",
    componentProps: {
      options: [
        { label: "\u542F\u7528", value: "0" },
        { label: "\u505C\u7528", value: "1" }
      ]
    },
    required: true
  },
  {
    label: "\u5907\u6CE8",
    field: "remark",
    component: "InputTextArea"
  }
];
const _sfc_main = defineComponent({
  name: "DeptModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
      labelWidth: 100,
      schemas: formSchema,
      showActionButtonGroup: false
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields();
      setModalProps({ confirmLoading: false });
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        setFieldsValue(__spreadValues({}, data.record));
      }
      const treeData = await getDeptList();
      updateSchema({
        field: "parentDept",
        componentProps: { treeData }
      });
    });
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u90E8\u95E8" : "\u7F16\u8F91\u90E8\u95E8");
    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        console.log(values);
        closeModal();
        emit("success");
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
var DeptModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var DeptModal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": DeptModal
});
export { DeptModal as D, DeptModal$1 as a, columns as c, searchFormSchema as s };
