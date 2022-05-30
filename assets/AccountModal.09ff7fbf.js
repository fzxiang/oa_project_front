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
import { B as BasicModal, a as useModalInner } from "./index.c96e9887.js";
import { B as BasicForm } from "./BasicForm.cfcd0624.js";
import { u as useForm } from "./useForm.78f1f7c3.js";
import { i as isAccountExist, j as getAllRoleList, f as getDeptList } from "./system.92fe35e5.js";
import { _ as _export_sfc } from "./index.f575d9f0.js";
import { d as defineComponent, Q as ref, b as unref, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
const columns = [
  {
    title: "\u7528\u6237\u540D",
    dataIndex: "account",
    width: 120
  },
  {
    title: "\u6635\u79F0",
    dataIndex: "nickname",
    width: 120
  },
  {
    title: "\u90AE\u7BB1",
    dataIndex: "email",
    width: 120
  },
  {
    title: "\u521B\u5EFA\u65F6\u95F4",
    dataIndex: "createTime",
    width: 180
  },
  {
    title: "\u89D2\u8272",
    dataIndex: "role",
    width: 200
  },
  {
    title: "\u5907\u6CE8",
    dataIndex: "remark"
  }
];
const searchFormSchema = [
  {
    field: "account",
    label: "\u7528\u6237\u540D",
    component: "Input",
    colProps: { span: 8 }
  },
  {
    field: "nickname",
    label: "\u6635\u79F0",
    component: "Input",
    colProps: { span: 8 }
  }
];
const accountFormSchema = [
  {
    field: "account",
    label: "\u7528\u6237\u540D",
    component: "Input",
    helpMessage: ["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1", "\u4E0D\u80FD\u8F93\u5165\u5E26\u6709admin\u7684\u7528\u6237\u540D"],
    rules: [
      {
        required: true,
        message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D"
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value).then(() => resolve()).catch((err) => {
              reject(err.message || "\u9A8C\u8BC1\u5931\u8D25");
            });
          });
        }
      }
    ]
  },
  {
    field: "pwd",
    label: "\u5BC6\u7801",
    component: "InputPassword",
    required: true,
    ifShow: false
  },
  {
    label: "\u89D2\u8272",
    field: "role",
    component: "ApiSelect",
    componentProps: {
      api: getAllRoleList,
      labelField: "roleName",
      valueField: "roleValue"
    },
    required: true
  },
  {
    field: "dept",
    label: "\u6240\u5C5E\u90E8\u95E8",
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
    field: "nickname",
    label: "\u6635\u79F0",
    component: "Input",
    required: true
  },
  {
    label: "\u90AE\u7BB1",
    field: "email",
    component: "Input",
    required: true
  },
  {
    label: "\u5907\u6CE8",
    field: "remark",
    component: "InputTextArea"
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
      resetFields();
      setModalProps({ confirmLoading: false });
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        rowId.value = data.record.id;
        setFieldsValue(__spreadValues({}, data.record));
      }
      const treeData = await getDeptList();
      updateSchema([
        {
          field: "pwd",
          show: !unref(isUpdate)
        },
        {
          field: "dept",
          componentProps: { treeData }
        }
      ]);
    });
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u8D26\u53F7" : "\u7F16\u8F91\u8D26\u53F7");
    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        console.log(values);
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
