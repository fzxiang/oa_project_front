import { B as BasicForm } from "./BasicForm.b9e70f2c.js";
import { u as useForm } from "./useForm.ef3314e3.js";
import PersonTable from "./PersonTable.167cd4d3.js";
import { a as PageWrapper } from "./index.3f999429.js";
import { d as defineComponent, cs as Card, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { _ as _export_sfc } from "./index.fda518c0.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.a0bf2552.js";
import "./index.71897494.js";
import "./useRootSetting.2943f044.js";
import "./useAttrs.d4bdb35c.js";
/* empty css                 */import "./index.a1fdeced.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./index.f6a4e9db.js";
import "./usePermission.2dab6b12.js";
import "./useTabs.9073d208.js";
/* empty css                  */import "./uuid.2b29000c.js";
import "./download.f7ff83e3.js";
import "./base64Conver.08b9f4ec.js";
import "./index.7dee941f.js";
import "./TableImg.3829b758.js";
import "./sortable.esm.6bfbf233.js";
/* empty css                  */import "./useTable.2ed5024e.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.06bbe6a9.js";
const basicOptions = [
  {
    label: "\u4ED8\u6653\u6653",
    value: "1"
  },
  {
    label: "\u5468\u6BDB\u6BDB",
    value: "2"
  }
];
const storeTypeOptions = [
  {
    label: "\u79C1\u5BC6",
    value: "1"
  },
  {
    label: "\u516C\u5F00",
    value: "2"
  }
];
const schemas = [
  {
    field: "f1",
    component: "Input",
    label: "\u4ED3\u5E93\u540D",
    required: true
  },
  {
    field: "f2",
    component: "Input",
    label: "\u4ED3\u5E93\u57DF\u540D",
    required: true,
    componentProps: {
      addonBefore: "http://",
      addonAfter: "com"
    },
    colProps: {
      offset: 2
    }
  },
  {
    field: "f3",
    component: "Select",
    label: "\u4ED3\u5E93\u7BA1\u7406\u5458",
    componentProps: {
      options: basicOptions
    },
    required: true,
    colProps: {
      offset: 2
    }
  },
  {
    field: "f4",
    component: "Select",
    label: "\u5BA1\u6279\u4EBA",
    componentProps: {
      options: basicOptions
    },
    required: true
  },
  {
    field: "f5",
    component: "RangePicker",
    label: "\u751F\u6548\u65E5\u671F",
    required: true,
    colProps: {
      offset: 2
    }
  },
  {
    field: "f6",
    component: "Select",
    label: "\u4ED3\u5E93\u7C7B\u578B",
    componentProps: {
      options: storeTypeOptions
    },
    required: true,
    colProps: {
      offset: 2
    }
  }
];
const taskSchemas = [
  {
    field: "t1",
    component: "Input",
    label: "\u4EFB\u52A1\u540D",
    required: true
  },
  {
    field: "t2",
    component: "Input",
    label: "\u4EFB\u52A1\u63CF\u8FF0",
    required: true,
    colProps: {
      offset: 2
    }
  },
  {
    field: "t3",
    component: "Select",
    label: "\u6267\u884C\u4EBA",
    componentProps: {
      options: basicOptions
    },
    required: true,
    colProps: {
      offset: 2
    }
  },
  {
    field: "t4",
    component: "Select",
    label: "\u8D23\u4EFB\u4EBA",
    componentProps: {
      options: basicOptions
    },
    required: true
  },
  {
    field: "t5",
    component: "TimePicker",
    label: "\u751F\u6548\u65E5\u671F",
    required: true,
    componentProps: {
      style: { width: "100%" }
    },
    colProps: {
      offset: 2
    }
  },
  {
    field: "t6",
    component: "Select",
    label: "\u4EFB\u52A1\u7C7B\u578B",
    componentProps: {
      options: storeTypeOptions
    },
    required: true,
    colProps: {
      offset: 2
    }
  }
];
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "FormHightPage",
  components: { BasicForm, PersonTable, PageWrapper, [Card.name]: Card },
  setup() {
    const tableRef = ref(null);
    const [register, { validate }] = useForm({
      baseColProps: {
        span: 6
      },
      schemas,
      showActionButtonGroup: false
    });
    const [registerTask, { validate: validateTaskForm }] = useForm({
      baseColProps: {
        span: 6
      },
      schemas: taskSchemas,
      showActionButtonGroup: false
    });
    async function submitAll() {
      try {
        if (tableRef.value) {
          console.log("table data:", tableRef.value.getDataSource());
        }
        const [values, taskValues] = await Promise.all([validate(), validateTaskForm()]);
        console.log("form data:", values, taskValues);
      } catch (error) {
      }
    }
    return { register, registerTask, submitAll, tableRef };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u63D0\u4EA4 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_a_card = resolveComponent("a-card");
  const _component_PersonTable = resolveComponent("PersonTable");
  const _component_a_button = resolveComponent("a-button");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    class: "high-form",
    title: "\u9AD8\u7EA7\u8868\u5355",
    content: " \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"
  }, {
    rightFooter: withCtx(() => [
      createVNode(_component_a_button, {
        type: "primary",
        onClick: _ctx.submitAll
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    default: withCtx(() => [
      createVNode(_component_a_card, {
        title: "\u4ED3\u5E93\u7BA1\u7406",
        bordered: false
      }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, { onRegister: _ctx.register }, null, 8, ["onRegister"])
        ]),
        _: 1
      }),
      createVNode(_component_a_card, {
        title: "\u4EFB\u52A1\u7BA1\u7406",
        bordered: false,
        class: "!mt-5"
      }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, { onRegister: _ctx.registerTask }, null, 8, ["onRegister"])
        ]),
        _: 1
      }),
      createVNode(_component_a_card, {
        title: "\u6210\u5458\u7BA1\u7406",
        bordered: false
      }, {
        default: withCtx(() => [
          createVNode(_component_PersonTable, { ref: "tableRef" }, null, 512)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b9f9a4d2"]]);
export { index as default };
