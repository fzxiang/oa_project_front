import { B as BasicForm } from "./BasicForm.f6f10751.js";
import { u as useForm } from "./useForm.fa7b5680.js";
import { aF as defHttp, _ as _export_sfc, aR as CollapseContainer, h as useMessage } from "./index.d19df3e8.js";
import { a as PageWrapper } from "./index.1afc6a09.js";
import { B as defineComponent, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, J as createBaseVNode, w as createVNode, af as createTextVNode } from "./vendor.7c0ada15.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.d009fa9e.js";
/* empty css                 */import "./index.1f0d40c7.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.3d571b80.js";
import "./base64Conver.08b9f4ec.js";
import "./index.495b4e80.js";
/* empty css                  *//* empty css                  */import "./useContentViewHeight.814f6021.js";
const areaRecord = (data) => defHttp.post({ url: "/cascader/getAreaRecord", data });
const schemas = [
  {
    field: "field1",
    component: "Input",
    label: "\u5B57\u6BB51",
    colProps: {
      span: 8
    },
    componentProps: {
      placeholder: "\u81EA\u5B9A\u4E49placeholder",
      onChange: (e) => {
        console.log(e);
      }
    }
  },
  {
    field: "field2",
    component: "Input",
    label: "\u5B57\u6BB52",
    colProps: {
      span: 8
    }
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
    field: "fieldTime",
    component: "RangePicker",
    label: "\u65F6\u95F4\u5B57\u6BB5",
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
    component: "ApiCascader",
    label: "\u8054\u52A8",
    colProps: {
      span: 8
    },
    componentProps: {
      api: areaRecord,
      apiParamKey: "parentCode",
      dataField: "data",
      labelField: "name",
      valueField: "code",
      initFetchParams: {
        parentCode: ""
      },
      isLeaf: (record) => {
        return !(record.levelType < 3);
      }
    }
  },
  {
    field: "field9",
    component: "ApiCascader",
    label: "\u8054\u52A8\u56DE\u663E",
    colProps: {
      span: 8
    },
    componentProps: {
      api: areaRecord,
      apiParamKey: "parentCode",
      dataField: "data",
      labelField: "name",
      valueField: "code",
      initFetchParams: {
        parentCode: ""
      },
      isLeaf: (record) => {
        return !(record.levelType < 3);
      }
    }
  }
];
const _sfc_main = defineComponent({
  components: { BasicForm, CollapseContainer, PageWrapper },
  setup() {
    const { createMessage } = useMessage();
    const [register, { setProps, setFieldsValue, updateSchema }] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24
      },
      fieldMapToTime: [["fieldTime", ["startTime", "endTime"], "YYYY-MM"]]
    });
    async function handleLoad() {
      const promiseFn = function() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              field9: ["430000", "430100", "430102"],
              province: "\u6E56\u5357\u7701",
              city: "\u957F\u6C99\u5E02",
              district: "\u5CB3\u9E93\u533A"
            });
          }, 1e3);
        });
      };
      const item = await promiseFn();
      const { field9, province, city, district } = item;
      await updateSchema({
        field: "field9",
        componentProps: {
          displayRenderArray: [province, city, district]
        }
      });
      await setFieldsValue({
        field9
      });
    }
    return {
      register,
      schemas,
      handleSubmit: (values) => {
        createMessage.success("click search,values:" + JSON.stringify(values));
      },
      setProps,
      handleLoad
    };
  }
});
const _hoisted_1 = { class: "mb-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u66F4\u6539labelWidth ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539FlabelWidth ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u66F4\u6539Size ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539FSize ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u7981\u7528\u8868\u5355 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u89E3\u9664\u7981\u7528 ");
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" \u7D27\u51D1\u8868\u5355 ");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E ");
const _hoisted_11 = { class: "mb-4" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE ");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE ");
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE ");
const _hoisted_16 = /* @__PURE__ */ createTextVNode(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE ");
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE ");
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ");
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ");
const _hoisted_20 = /* @__PURE__ */ createTextVNode(" \u8054\u52A8\u56DE\u663E ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "UseForm\u64CD\u4F5C\u793A\u4F8B" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_a_button, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.setProps({ labelWidth: 150 })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.setProps({ labelWidth: 120 })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.setProps({ size: "large" })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.setProps({ size: "default" })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.setProps({ disabled: true })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[5] || (_cache[5] = ($event) => _ctx.setProps({ disabled: false })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[6] || (_cache[6] = ($event) => _ctx.setProps({ compact: true })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[7] || (_cache[7] = ($event) => _ctx.setProps({ compact: false })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[8] || (_cache[8] = ($event) => _ctx.setProps({ actionColOptions: { span: 8 } })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_11, [
        createVNode(_component_a_button, {
          onClick: _cache[9] || (_cache[9] = ($event) => _ctx.setProps({ showActionButtonGroup: false })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[10] || (_cache[10] = ($event) => _ctx.setProps({ showActionButtonGroup: true })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[11] || (_cache[11] = ($event) => _ctx.setProps({ showResetButton: false })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[12] || (_cache[12] = ($event) => _ctx.setProps({ showResetButton: true })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_15
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[13] || (_cache[13] = ($event) => _ctx.setProps({ showSubmitButton: false })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_16
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[14] || (_cache[14] = ($event) => _ctx.setProps({ showSubmitButton: true })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_17
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[15] || (_cache[15] = ($event) => _ctx.setProps({
            resetButtonOptions: {
              disabled: true,
              text: "\u91CD\u7F6ENew"
            }
          })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_18
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[16] || (_cache[16] = ($event) => _ctx.setProps({
            submitButtonOptions: {
              disabled: true,
              loading: true
            }
          })),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_19
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _ctx.handleLoad,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_20
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      createVNode(_component_CollapseContainer, { title: "useForm\u793A\u4F8B" }, {
        default: withCtx(() => [
          createVNode(_component_BasicForm, {
            onRegister: _ctx.register,
            onSubmit: _ctx.handleSubmit
          }, null, 8, ["onRegister", "onSubmit"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var UseForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { UseForm as default };
