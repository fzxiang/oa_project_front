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
import { B as BasicForm } from "./BasicForm.a4670432.js";
import { u as useForm } from "./useForm.7940370b.js";
import { A as h, bs as Switch, B as defineComponent, r as ref, u as unref, j as computed, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, a5 as mergeProps } from "./vendor.7c0ada15.js";
/* empty css                  */import { s as setRoleStatus, h as getMenuList } from "./system.d5a56a3e.js";
import { h as useMessage, _ as _export_sfc } from "./index.a74bdb7c.js";
import { B as BasicDrawer, a as useDrawerInner } from "./index.a81ca513.js";
import { _ as _sfc_main$1 } from "./index.b55118ce.js";
const columns = [
  {
    title: "\u89D2\u8272\u540D\u79F0",
    dataIndex: "roleName",
    width: 200
  },
  {
    title: "\u89D2\u8272\u503C",
    dataIndex: "roleValue",
    width: 180
  },
  {
    title: "\u6392\u5E8F",
    dataIndex: "orderNo",
    width: 50
  },
  {
    title: "\u72B6\u6001",
    dataIndex: "status",
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, "pendingStatus")) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === "1",
        checkedChildren: "\u5DF2\u542F\u7528",
        unCheckedChildren: "\u5DF2\u7981\u7528",
        loading: record.pendingStatus,
        onChange(checked) {
          record.pendingStatus = true;
          const newStatus = checked ? "1" : "0";
          const { createMessage } = useMessage();
          setRoleStatus(record.id, newStatus).then(() => {
            record.status = newStatus;
            createMessage.success(`\u5DF2\u6210\u529F\u4FEE\u6539\u89D2\u8272\u72B6\u6001`);
          }).catch(() => {
            createMessage.error("\u4FEE\u6539\u89D2\u8272\u72B6\u6001\u5931\u8D25");
          }).finally(() => {
            record.pendingStatus = false;
          });
        }
      });
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
    field: "roleNme",
    label: "\u89D2\u8272\u540D\u79F0",
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
    field: "roleName",
    label: "\u89D2\u8272\u540D\u79F0",
    required: true,
    component: "Input"
  },
  {
    field: "roleValue",
    label: "\u89D2\u8272\u503C",
    required: true,
    component: "Input"
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
    }
  },
  {
    label: "\u5907\u6CE8",
    field: "remark",
    component: "InputTextArea"
  },
  {
    label: " ",
    field: "menu",
    slot: "menu",
    component: "Input"
  }
];
const _sfc_main = defineComponent({
  name: "RoleDrawer",
  components: { BasicDrawer, BasicForm, BasicTree: _sfc_main$1 },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const treeData = ref([]);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 90,
      schemas: formSchema,
      showActionButtonGroup: false
    });
    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
      resetFields();
      setDrawerProps({ confirmLoading: false });
      if (unref(treeData).length === 0) {
        treeData.value = await getMenuList();
      }
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        setFieldsValue(__spreadValues({}, data.record));
      }
    });
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u89D2\u8272" : "\u7F16\u8F91\u89D2\u8272");
    async function handleSubmit() {
      try {
        const values = await validate();
        setDrawerProps({ confirmLoading: true });
        console.log(values);
        closeDrawer();
        emit("success");
      } finally {
        setDrawerProps({ confirmLoading: false });
      }
    }
    return {
      registerDrawer,
      registerForm,
      getTitle,
      handleSubmit,
      treeData
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTree = resolveComponent("BasicTree");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_BasicDrawer = resolveComponent("BasicDrawer");
  return openBlock(), createBlock(_component_BasicDrawer, mergeProps(_ctx.$attrs, {
    onRegister: _ctx.registerDrawer,
    showFooter: "",
    title: _ctx.getTitle,
    width: "500px",
    onOk: _ctx.handleSubmit
  }), {
    default: withCtx(() => [
      createVNode(_component_BasicForm, { onRegister: _ctx.registerForm }, {
        menu: withCtx(({ model, field }) => [
          createVNode(_component_BasicTree, {
            value: model[field],
            "onUpdate:value": ($event) => model[field] = $event,
            treeData: _ctx.treeData,
            fieldNames: { title: "menuName", key: "id" },
            checkable: "",
            toolbar: "",
            title: "\u83DC\u5355\u5206\u914D"
          }, null, 8, ["value", "onUpdate:value", "treeData"])
        ]),
        _: 1
      }, 8, ["onRegister"])
    ]),
    _: 1
  }, 16, ["onRegister", "title", "onOk"]);
}
var RoleDrawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var RoleDrawer$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": RoleDrawer
});
export { RoleDrawer as R, RoleDrawer$1 as a, columns as c, searchFormSchema as s };
