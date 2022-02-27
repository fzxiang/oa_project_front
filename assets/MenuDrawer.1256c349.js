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
import { B as BasicForm } from "./BasicForm.e1646202.js";
import { u as useForm } from "./useForm.ae352f89.js";
import { N as h, bo as Tag, d as defineComponent, Q as ref, b as unref, O as computed, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
/* empty css                 */import { I as Icon } from "./index.518f457b.js";
import { B as BasicDrawer, a as useDrawerInner } from "./index.aa0074bc.js";
import { h as getMenuList } from "./system.45ccbd89.js";
import { _ as _export_sfc } from "./index.26d4b9cf.js";
const columns = [
  {
    title: "\u83DC\u5355\u540D\u79F0",
    dataIndex: "menuName",
    width: 200,
    align: "left"
  },
  {
    title: "\u56FE\u6807",
    dataIndex: "icon",
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    }
  },
  {
    title: "\u6743\u9650\u6807\u8BC6",
    dataIndex: "permission",
    width: 180
  },
  {
    title: "\u7EC4\u4EF6",
    dataIndex: "component"
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
  }
];
const isDir = (type) => type === "0";
const isMenu = (type) => type === "1";
const isButton = (type) => type === "2";
const searchFormSchema = [
  {
    field: "menuName",
    label: "\u83DC\u5355\u540D\u79F0",
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
    field: "type",
    label: "\u83DC\u5355\u7C7B\u578B",
    component: "RadioButtonGroup",
    defaultValue: "0",
    componentProps: {
      options: [
        { label: "\u76EE\u5F55", value: "0" },
        { label: "\u83DC\u5355", value: "1" },
        { label: "\u6309\u94AE", value: "2" }
      ]
    },
    colProps: { lg: 24, md: 24 }
  },
  {
    field: "menuName",
    label: "\u83DC\u5355\u540D\u79F0",
    component: "Input",
    required: true
  },
  {
    field: "parentMenu",
    label: "\u4E0A\u7EA7\u83DC\u5355",
    component: "TreeSelect",
    componentProps: {
      fieldNames: {
        label: "menuName",
        key: "id",
        value: "id"
      },
      getPopupContainer: () => document.body
    }
  },
  {
    field: "orderNo",
    label: "\u6392\u5E8F",
    component: "InputNumber",
    required: true
  },
  {
    field: "icon",
    label: "\u56FE\u6807",
    component: "IconPicker",
    required: true,
    ifShow: ({ values }) => !isButton(values.type)
  },
  {
    field: "routePath",
    label: "\u8DEF\u7531\u5730\u5740",
    component: "Input",
    required: true,
    ifShow: ({ values }) => !isButton(values.type)
  },
  {
    field: "component",
    label: "\u7EC4\u4EF6\u8DEF\u5F84",
    component: "Input",
    ifShow: ({ values }) => isMenu(values.type)
  },
  {
    field: "permission",
    label: "\u6743\u9650\u6807\u8BC6",
    component: "Input",
    ifShow: ({ values }) => !isDir(values.type)
  },
  {
    field: "status",
    label: "\u72B6\u6001",
    component: "RadioButtonGroup",
    defaultValue: "0",
    componentProps: {
      options: [
        { label: "\u542F\u7528", value: "0" },
        { label: "\u7981\u7528", value: "1" }
      ]
    }
  },
  {
    field: "isExt",
    label: "\u662F\u5426\u5916\u94FE",
    component: "RadioButtonGroup",
    defaultValue: "0",
    componentProps: {
      options: [
        { label: "\u5426", value: "0" },
        { label: "\u662F", value: "1" }
      ]
    },
    ifShow: ({ values }) => !isButton(values.type)
  },
  {
    field: "keepalive",
    label: "\u662F\u5426\u7F13\u5B58",
    component: "RadioButtonGroup",
    defaultValue: "0",
    componentProps: {
      options: [
        { label: "\u5426", value: "0" },
        { label: "\u662F", value: "1" }
      ]
    },
    ifShow: ({ values }) => isMenu(values.type)
  },
  {
    field: "show",
    label: "\u662F\u5426\u663E\u793A",
    component: "RadioButtonGroup",
    defaultValue: "0",
    componentProps: {
      options: [
        { label: "\u662F", value: "0" },
        { label: "\u5426", value: "1" }
      ]
    },
    ifShow: ({ values }) => !isButton(values.type)
  }
];
const _sfc_main = defineComponent({
  name: "MenuDrawer",
  components: { BasicDrawer, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
      labelWidth: 100,
      schemas: formSchema,
      showActionButtonGroup: false,
      baseColProps: { lg: 12, md: 24 }
    });
    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
      resetFields();
      setDrawerProps({ confirmLoading: false });
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        setFieldsValue(__spreadValues({}, data.record));
      }
      const treeData = await getMenuList();
      updateSchema({
        field: "parentMenu",
        componentProps: { treeData }
      });
    });
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u83DC\u5355" : "\u7F16\u8F91\u83DC\u5355");
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
    return { registerDrawer, registerForm, getTitle, handleSubmit };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_BasicDrawer = resolveComponent("BasicDrawer");
  return openBlock(), createBlock(_component_BasicDrawer, mergeProps(_ctx.$attrs, {
    onRegister: _ctx.registerDrawer,
    showFooter: "",
    title: _ctx.getTitle,
    width: "50%",
    onOk: _ctx.handleSubmit
  }), {
    default: withCtx(() => [
      createVNode(_component_BasicForm, { onRegister: _ctx.registerForm }, null, 8, ["onRegister"])
    ]),
    _: 1
  }, 16, ["onRegister", "title", "onOk"]);
}
var MenuDrawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var MenuDrawer$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": MenuDrawer
});
export { MenuDrawer as M, MenuDrawer$1 as a, columns as c, searchFormSchema as s };
