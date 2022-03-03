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
import { B as BasicForm } from "./BasicForm.f937f757.js";
import { u as useForm } from "./useForm.18827a13.js";
import { B as BasicDrawer, a as useDrawerInner } from "./index.e5bfea09.js";
import { _ as _sfc_main$1 } from "./index.4a4e7b56.js";
import { _ as _export_sfc, aw as routeModuleList } from "./index.f72786be.js";
import { e as AddEditRoleApi } from "./system.9d3ef246.js";
import { d as defineComponent, Q as ref, O as computed, b as unref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aa as mergeProps } from "./vendor.faf2de98.js";
const columns = [
  {
    title: "\u89D2\u8272ID",
    dataIndex: "id",
    width: 120
  },
  {
    title: "\u89D2\u8272\u540D\u79F0",
    dataIndex: "role_name",
    width: 200
  },
  {
    title: "\u89D2\u8272\u503C",
    dataIndex: "role",
    ifShow: false
  },
  {
    title: "\u521B\u5EFA\u65F6\u95F4",
    dataIndex: "created_at",
    width: 250
  },
  {
    title: "\u66F4\u65B0\u65F6\u95F4",
    dataIndex: "updated_at",
    width: 250
  },
  {
    title: "\u5907\u6CE8",
    dataIndex: "remarks",
    width: 250
  },
  {
    title: "\u83DC\u5355\u6743\u9650",
    dataIndex: "menu",
    ifShow: false
  }
];
const searchFormSchema = [
  {
    field: "role_name",
    label: "\u89D2\u8272\u540D\u79F0",
    component: "Input",
    colProps: { span: 8 }
  }
];
const formSchema = [
  {
    field: "id",
    label: "\u89D2\u8272ID",
    component: "Input",
    show: false
  },
  {
    field: "role_name",
    label: "\u89D2\u8272\u540D\u79F0",
    required: true,
    component: "Input"
  },
  {
    label: "\u5907\u6CE8",
    field: "remarks",
    component: "InputTextArea"
  },
  {
    field: "role",
    label: "\u89D2\u8272\u503C",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "\u8D85\u7EA7\u7BA1\u7406\u5458", value: 1 },
        { label: "\u7BA1\u7406\u5458", value: 2 },
        { label: "\u5BA2\u670D\u4E3B\u7BA1", value: 3 },
        { label: "\u5BA2\u670D", value: 4 },
        { label: "\u7528\u6237", value: 5 }
      ]
    }
  },
  {
    label: " ",
    field: "menu",
    slot: "menu",
    component: "Input",
    defaultValue: []
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
      await resetFields();
      setDrawerProps({ confirmLoading: false });
      if (unref(treeData).length === 0) {
        treeData.value = getMenuHandle(routeModuleList);
      }
      isUpdate.value = !!(data == null ? void 0 : data.isUpdate);
      if (unref(isUpdate)) {
        await setFieldsValue(__spreadValues({}, data.record));
      }
    });
    const getTitle = computed(() => !unref(isUpdate) ? "\u65B0\u589E\u89D2\u8272" : "\u7F16\u8F91\u89D2\u8272");
    function getMenuHandle(data) {
      return data.map((item) => {
        return {
          id: item.meta.menu,
          title: item.meta.title,
          children: item.children ? getMenuHandle(item.children) : []
        };
      });
    }
    async function handleSubmit() {
      try {
        const values = await validate();
        setDrawerProps({ confirmLoading: true });
        const params = __spreadProps(__spreadValues({}, values), {
          menu: [...values.menu]
        });
        await AddEditRoleApi(params);
        closeDrawer();
        emit("success", { isUpdate: unref(isUpdate), values: params });
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
    width: "508px",
    onOk: _ctx.handleSubmit
  }), {
    default: withCtx(() => [
      createVNode(_component_BasicForm, { onRegister: _ctx.registerForm }, {
        menu: withCtx(({ model, field }) => [
          createVNode(_component_BasicTree, {
            value: model[field],
            "onUpdate:value": ($event) => model[field] = $event,
            treeData: _ctx.treeData,
            fieldNames: { title: "title", key: "id" },
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
