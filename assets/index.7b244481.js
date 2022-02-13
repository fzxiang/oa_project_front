import { B as BasicForm, A as ApiSelect } from "./BasicForm.2d3a56da.js";
import { _ as _export_sfc, aR as CollapseContainer, h as useMessage } from "./index.bb57ad5a.js";
import { a as PageWrapper } from "./index.5258464e.js";
import { o as optionsListApi, t as treeOptionsListApi } from "./tree.d844790e.js";
import { r as ref, j as computed, n as cloneDeep, u as unref, B as defineComponent, bb as Select, V as useDebounceFn, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.e6ebc007.js";
/* empty css                 */import "./index.fe0d1d3b.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.d03d7395.js";
import "./base64Conver.08b9f4ec.js";
import "./index.770ef330.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.382d6f77.js";
const valueSelectA = ref([]);
const valueSelectB = ref([]);
const options = ref([]);
for (let i = 1; i < 10; i++)
  options.value.push({ label: "\u9009\u9879" + i, value: `${i}` });
const optionsA = computed(() => {
  return cloneDeep(unref(options)).map((op) => {
    op.disabled = unref(valueSelectB).indexOf(op.value) !== -1;
    return op;
  });
});
const optionsB = computed(() => {
  return cloneDeep(unref(options)).map((op) => {
    op.disabled = unref(valueSelectA).indexOf(op.value) !== -1;
    return op;
  });
});
const provincesOptions = [
  {
    id: "guangdong",
    label: "\u5E7F\u4E1C\u7701",
    value: "1",
    key: "1"
  },
  {
    id: "jiangsu",
    label: "\u6C5F\u82CF\u7701",
    value: "2",
    key: "2"
  }
];
const citiesOptionsData = {
  guangdong: [
    {
      label: "\u73E0\u6D77\u5E02",
      value: "1",
      key: "1"
    },
    {
      label: "\u6DF1\u5733\u5E02",
      value: "2",
      key: "2"
    },
    {
      label: "\u5E7F\u5DDE\u5E02",
      value: "3",
      key: "3"
    }
  ],
  jiangsu: [
    {
      label: "\u5357\u4EAC\u5E02",
      value: "1",
      key: "1"
    },
    {
      label: "\u65E0\u9521\u5E02",
      value: "2",
      key: "2"
    },
    {
      label: "\u82CF\u5DDE\u5E02",
      value: "3",
      key: "3"
    }
  ]
};
const schemas = [
  {
    field: "divider-basic",
    component: "Divider",
    label: "\u57FA\u7840\u5B57\u6BB5"
  },
  {
    field: "field1",
    component: "Input",
    label: "\u5B57\u6BB51",
    colProps: {
      span: 8
    },
    componentProps: ({ schema, formModel }) => {
      console.log("form:", schema);
      console.log("formModel:", formModel);
      return {
        placeholder: "\u81EA\u5B9A\u4E49placeholder",
        onChange: (e) => {
          console.log(e);
        }
      };
    },
    renderComponentContent: () => {
      return {
        prefix: () => "pSlot",
        suffix: () => "sSlot"
      };
    }
  },
  {
    field: "field2",
    component: "Input",
    label: "\u5E26\u540E\u7F00",
    defaultValue: "111",
    colProps: {
      span: 8
    },
    componentProps: {
      onChange: (e) => {
        console.log(e);
      }
    },
    suffix: "\u5929"
  },
  {
    field: "field3",
    component: "DatePicker",
    label: "\u5B57\u6BB53",
    colProps: {
      span: 8
    }
  },
  {
    field: "field4",
    component: "Select",
    label: "\u5B57\u6BB54",
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "1",
          key: "1"
        },
        {
          label: "\u9009\u98792",
          value: "2",
          key: "2"
        }
      ]
    }
  },
  {
    field: "field5",
    component: "CheckboxGroup",
    label: "\u5B57\u6BB55",
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "1"
        },
        {
          label: "\u9009\u98792",
          value: "2"
        }
      ]
    }
  },
  {
    field: "field7",
    component: "RadioGroup",
    label: "\u5B57\u6BB57",
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "1"
        },
        {
          label: "\u9009\u98792",
          value: "2"
        }
      ]
    }
  },
  {
    field: "field8",
    component: "Checkbox",
    label: "\u5B57\u6BB58",
    colProps: {
      span: 8
    },
    renderComponentContent: "Check"
  },
  {
    field: "field9",
    component: "Switch",
    label: "\u5B57\u6BB59",
    colProps: {
      span: 8
    }
  },
  {
    field: "field10",
    component: "RadioButtonGroup",
    label: "\u5B57\u6BB510",
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          label: "\u9009\u98791",
          value: "1"
        },
        {
          label: "\u9009\u98792",
          value: "2"
        }
      ]
    }
  },
  {
    field: "field11",
    component: "Cascader",
    label: "\u5B57\u6BB511",
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
          children: [
            {
              value: "hangzhou",
              label: "Hangzhou",
              children: [
                {
                  value: "xihu",
                  label: "West Lake"
                }
              ]
            }
          ]
        },
        {
          value: "jiangsu",
          label: "Jiangsu",
          children: [
            {
              value: "nanjing",
              label: "Nanjing",
              children: [
                {
                  value: "zhonghuamen",
                  label: "Zhong Hua Men"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    field: "divider-api-select",
    component: "Divider",
    label: "\u8FDC\u7A0B\u4E0B\u62C9\u6F14\u793A"
  },
  {
    field: "field30",
    component: "ApiSelect",
    label: "\u61D2\u52A0\u8F7D\u8FDC\u7A0B\u4E0B\u62C9",
    required: true,
    componentProps: {
      api: optionsListApi,
      params: {
        id: 1
      },
      resultField: "list",
      labelField: "name",
      valueField: "id",
      immediate: false,
      onChange: (e) => {
        console.log("selected:", e);
      },
      onOptionsChange: (options2) => {
        console.log("get options", options2.length, options2);
      }
    },
    colProps: {
      span: 8
    },
    defaultValue: "0"
  },
  {
    field: "field31",
    component: "Input",
    label: "\u4E0B\u62C9\u672C\u5730\u641C\u7D22",
    helpMessage: ["ApiSelect\u7EC4\u4EF6", "\u8FDC\u7A0B\u6570\u636E\u6E90\u672C\u5730\u641C\u7D22", "\u53EA\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\u83B7\u53D6\u6240\u6709\u9009\u9879"],
    required: true,
    slot: "localSearch",
    colProps: {
      span: 8
    },
    defaultValue: "0"
  },
  {
    field: "field32",
    component: "Input",
    label: "\u4E0B\u62C9\u8FDC\u7A0B\u641C\u7D22",
    helpMessage: ["ApiSelect\u7EC4\u4EF6", "\u5C06\u5173\u952E\u8BCD\u53D1\u9001\u5230\u63A5\u53E3\u8FDB\u884C\u8FDC\u7A0B\u641C\u7D22"],
    required: true,
    slot: "remoteSearch",
    colProps: {
      span: 8
    },
    defaultValue: "0"
  },
  {
    field: "field33",
    component: "ApiTreeSelect",
    label: "\u8FDC\u7A0B\u4E0B\u62C9\u6811",
    helpMessage: ["ApiTreeSelect\u7EC4\u4EF6", "\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],
    required: true,
    componentProps: {
      api: treeOptionsListApi,
      resultField: "list"
    },
    colProps: {
      span: 8
    }
  },
  {
    field: "field34",
    component: "ApiRadioGroup",
    label: "\u8FDC\u7A0BRadio",
    helpMessage: ["ApiRadioGroup\u7EC4\u4EF6", "\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],
    required: true,
    componentProps: {
      api: optionsListApi,
      params: {
        count: 2
      },
      resultField: "list",
      labelField: "name",
      valueField: "id"
    },
    defaultValue: "1",
    colProps: {
      span: 8
    }
  },
  {
    field: "field35",
    component: "ApiRadioGroup",
    label: "\u8FDC\u7A0BRadio",
    helpMessage: ["ApiRadioGroup\u7EC4\u4EF6", "\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],
    required: true,
    componentProps: {
      api: optionsListApi,
      params: {
        count: 2
      },
      resultField: "list",
      labelField: "name",
      valueField: "id",
      isBtn: true
    },
    colProps: {
      span: 8
    }
  },
  {
    field: "divider-linked",
    component: "Divider",
    label: "\u5B57\u6BB5\u8054\u52A8"
  },
  {
    field: "province",
    component: "Select",
    label: "\u7701\u4EFD",
    colProps: {
      span: 8
    },
    componentProps: ({ formModel, formActionType }) => {
      return {
        options: provincesOptions,
        placeholder: "\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8",
        onChange: (e) => {
          let citiesOptions = e == 1 ? citiesOptionsData[provincesOptions[0].id] : citiesOptionsData[provincesOptions[1].id];
          if (e === void 0) {
            citiesOptions = [];
          }
          formModel.city = void 0;
          const { updateSchema } = formActionType;
          updateSchema({
            field: "city",
            componentProps: {
              options: citiesOptions
            }
          });
        }
      };
    }
  },
  {
    field: "city",
    component: "Select",
    label: "\u57CE\u5E02",
    colProps: {
      span: 8
    },
    componentProps: {
      options: [],
      placeholder: "\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8"
    }
  },
  {
    field: "divider-selects",
    component: "Divider",
    label: "\u4E92\u65A5\u591A\u9009",
    helpMessage: ["\u4E24\u4E2ASelect\u5171\u7528\u6570\u636E\u6E90", "\u4F46\u4E0D\u53EF\u9009\u62E9\u5BF9\u65B9\u5DF2\u9009\u4E2D\u7684\u9879\u76EE"]
  },
  {
    field: "selectA",
    component: "Select",
    label: "\u4E92\u65A5SelectA",
    slot: "selectA",
    defaultValue: [],
    colProps: {
      span: 8
    }
  },
  {
    field: "selectB",
    component: "Select",
    label: "\u4E92\u65A5SelectB",
    slot: "selectB",
    defaultValue: [],
    colProps: {
      span: 8
    }
  },
  {
    field: "divider-others",
    component: "Divider",
    label: "\u5176\u5B83"
  },
  {
    field: "field20",
    component: "InputNumber",
    label: "\u5B57\u6BB520",
    required: true,
    colProps: {
      span: 8
    }
  },
  {
    field: "field21",
    component: "Slider",
    label: "\u5B57\u6BB521",
    componentProps: {
      min: 0,
      max: 100,
      range: true,
      marks: {
        20: "20\xB0C",
        60: "60\xB0C"
      }
    },
    colProps: {
      span: 8
    }
  },
  {
    field: "field22",
    component: "Rate",
    label: "\u5B57\u6BB522",
    defaultValue: 3,
    colProps: {
      span: 8
    },
    componentProps: {
      disabled: false,
      allowHalf: true
    }
  }
];
const _sfc_main = defineComponent({
  components: { BasicForm, CollapseContainer, PageWrapper, ApiSelect, ASelect: Select },
  setup() {
    const check = ref(null);
    const { createMessage } = useMessage();
    const keyword = ref("");
    const searchParams = computed(() => {
      return { keyword: unref(keyword) };
    });
    function onSearch(value) {
      keyword.value = value;
    }
    return {
      schemas,
      optionsListApi,
      optionsA,
      optionsB,
      valueSelectA,
      valueSelectB,
      onSearch: useDebounceFn(onSearch, 300),
      searchParams,
      handleReset: () => {
        keyword.value = "";
      },
      handleSubmit: (values) => {
        createMessage.success("click search,values:" + JSON.stringify(values));
      },
      check
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_select = resolveComponent("a-select");
  const _component_ApiSelect = resolveComponent("ApiSelect");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u8868\u5355\u57FA\u7840\u793A\u4F8B",
    contentFullHeight: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "\u57FA\u7840\u793A\u4F8B" }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, {
            autoFocusFirstItem: "",
            labelWidth: 200,
            schemas: _ctx.schemas,
            actionColOptions: { span: 24 },
            onSubmit: _ctx.handleSubmit,
            onReset: _ctx.handleReset
          }, {
            selectA: withCtx(({ model, field }) => [
              createVNode(_component_a_select, {
                options: _ctx.optionsA,
                mode: "multiple",
                value: model[field],
                "onUpdate:value": ($event) => model[field] = $event,
                onChange: ($event) => _ctx.valueSelectA = model[field],
                allowClear: ""
              }, null, 8, ["options", "value", "onUpdate:value", "onChange"])
            ]),
            selectB: withCtx(({ model, field }) => [
              createVNode(_component_a_select, {
                options: _ctx.optionsB,
                mode: "multiple",
                value: model[field],
                "onUpdate:value": ($event) => model[field] = $event,
                onChange: ($event) => _ctx.valueSelectB = model[field],
                allowClear: ""
              }, null, 8, ["options", "value", "onUpdate:value", "onChange"])
            ]),
            localSearch: withCtx(({ model, field }) => [
              createVNode(_component_ApiSelect, {
                api: _ctx.optionsListApi,
                showSearch: "",
                value: model[field],
                "onUpdate:value": ($event) => model[field] = $event,
                optionFilterProp: "label",
                resultField: "list",
                labelField: "name",
                valueField: "id"
              }, null, 8, ["api", "value", "onUpdate:value"])
            ]),
            remoteSearch: withCtx(({ model, field }) => [
              createVNode(_component_ApiSelect, {
                api: _ctx.optionsListApi,
                showSearch: "",
                value: model[field],
                "onUpdate:value": ($event) => model[field] = $event,
                filterOption: false,
                resultField: "list",
                labelField: "name",
                valueField: "id",
                params: _ctx.searchParams,
                onSearch: _ctx.onSearch
              }, null, 8, ["api", "value", "onUpdate:value", "params", "onSearch"])
            ]),
            _: 1
          }, 8, ["schemas", "onSubmit", "onReset"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
