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
import { p as propTypes, i as isFunction, aw as Button, a6 as Dropdown, w as withInstall, h as useMessage } from "./index.d5751037.js";
import { r as ref, B as defineComponent, ca as List, cb as Card, ci as Typography, j as computed, $ as onMounted, D as openBlock, F as createElementBlock, J as createBaseVNode, w as createVNode, u as unref, af as createTextVNode, K as toDisplayString, a7 as withCtx, a8 as renderSlot, aa as Tooltip, bO as Slider, a5 as mergeProps, bS as isRef, cj as TableOutlined, bj as RedoOutlined, L as normalizeClass, bD as Image, ck as EditOutlined, cl as EllipsisOutlined, ce as Avatar, a2 as createBlock } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  */import { B as BasicForm } from "./BasicForm.c8f30ddc.js";
/* empty css                  */import { u as useForm } from "./useForm.29a2ef95.js";
import { a as PageWrapper } from "./index.d1dd7909.js";
import { d as demoListApi } from "./table.c0511c9d.js";
/* empty css                *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import "./index.9d22f67b.js";
/* empty css                 */import "./index.e350f83b.js";
import "./useWindowSizeFn.07387e97.js";
/* empty css                  *//* empty css                  *//* empty css                  */import "./uuid.2b29000c.js";
import "./download.cca74ae9.js";
import "./base64Conver.08b9f4ec.js";
import "./index.ffce29af.js";
/* empty css                  */import "./useContentViewHeight.66c00070.js";
const grid = ref(12);
const useSlider = (min = 6, max = 12) => {
  const getMarks = () => {
    const l = {};
    for (let i = min; i < max + 1; i++) {
      l[i] = {
        style: {
          color: "#fff"
        },
        label: i
      };
    }
    return l;
  };
  return {
    min,
    max,
    marks: getMarks(),
    step: 1
  };
};
const _hoisted_1$1 = { class: "p-2" };
const _hoisted_2$1 = { class: "p-4 mb-2 bg-white" };
const _hoisted_3 = { class: "p-2 bg-white" };
const _hoisted_4 = { class: "flex justify-end space-x-2" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "w-50" }, "\u6BCF\u884C\u663E\u793A\u6570\u91CF", -1);
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u5237\u65B0");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    params: propTypes.object.def({}),
    api: propTypes.func
  },
  emits: ["getMethod", "delete"],
  setup(__props, { emit }) {
    const props = __props;
    const ListItem = List.Item;
    const CardMeta = Card.Meta;
    const TypographyText = Typography.Text;
    const sliderProp = computed(() => useSlider(4));
    const data = ref([]);
    const height = computed(() => {
      return `h-${120 - grid.value * 6}`;
    });
    const [registerForm, { validate }] = useForm({
      schemas: [{ field: "type", component: "Input", label: "\u7C7B\u578B" }],
      labelWidth: 80,
      baseColProps: { span: 6 },
      actionColOptions: { span: 24 },
      autoSubmitOnEnter: true,
      submitFunc: handleSubmit
    });
    async function handleSubmit() {
      const data2 = await validate();
      await fetch(data2);
    }
    function sliderChange(n) {
      pageSize.value = n * 4;
      fetch();
    }
    onMounted(() => {
      fetch();
      emit("getMethod", fetch);
    });
    async function fetch(p = {}) {
      const { api, params } = props;
      if (api && isFunction(api)) {
        const res = await api(__spreadValues(__spreadProps(__spreadValues({}, params), { page: page.value, pageSize: pageSize.value }), p));
        data.value = res.items;
        total.value = res.total;
      }
    }
    const page = ref(1);
    const pageSize = ref(36);
    const total = ref(0);
    const paginationProp = ref({
      showSizeChanger: false,
      showQuickJumper: true,
      pageSize,
      current: page,
      total,
      showTotal: (total2) => `\u603B ${total2} \u6761`,
      onChange: pageChange,
      onShowSizeChange: pageSizeChange
    });
    function pageChange(p, pz) {
      page.value = p;
      pageSize.value = pz;
      fetch();
    }
    function pageSizeChange(_current, size) {
      pageSize.value = size;
      fetch();
    }
    async function handleDelete(id) {
      emit("delete", id);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(unref(BasicForm), { onRegister: unref(registerForm) }, null, 8, ["onRegister"])
        ]),
        createTextVNode(" " + toDisplayString(unref(sliderProp).width) + " ", 1),
        createBaseVNode("div", _hoisted_3, [
          createVNode(unref(List), {
            grid: { gutter: 5, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: unref(grid) },
            "data-source": data.value,
            pagination: paginationProp.value
          }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_4, [
                renderSlot(_ctx.$slots, "header"),
                createVNode(unref(Tooltip), null, {
                  title: withCtx(() => [
                    _hoisted_5,
                    createVNode(unref(Slider), mergeProps({ id: "slider" }, unref(sliderProp), {
                      value: unref(grid),
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => isRef(grid) ? grid.value = $event : null),
                      onChange: sliderChange
                    }), null, 16, ["value"])
                  ]),
                  default: withCtx(() => [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createVNode(unref(TableOutlined))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(Tooltip), { onClick: fetch }, {
                  title: withCtx(() => [
                    _hoisted_6
                  ]),
                  default: withCtx(() => [
                    createVNode(unref(Button), null, {
                      default: withCtx(() => [
                        createVNode(unref(RedoOutlined))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            renderItem: withCtx(({ item }) => [
              createVNode(unref(ListItem), null, {
                default: withCtx(() => [
                  createVNode(unref(Card), null, {
                    title: withCtx(() => []),
                    cover: withCtx(() => [
                      createBaseVNode("div", {
                        class: normalizeClass(unref(height))
                      }, [
                        createVNode(unref(Image), {
                          src: item.imgs[0]
                        }, null, 8, ["src"])
                      ], 2)
                    ]),
                    actions: withCtx(() => [
                      createVNode(unref(EditOutlined), { key: "edit" }),
                      createVNode(unref(Dropdown), {
                        trigger: ["hover"],
                        dropMenuList: [
                          {
                            text: "\u5220\u9664",
                            event: "1",
                            popConfirm: {
                              title: "\u662F\u5426\u786E\u8BA4\u5220\u9664",
                              confirm: handleDelete.bind(null, item.id)
                            }
                          }
                        ],
                        popconfirm: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(EllipsisOutlined), { key: "ellipsis" })
                        ]),
                        _: 2
                      }, 1032, ["dropMenuList"])
                    ]),
                    default: withCtx(() => [
                      createVNode(unref(CardMeta), null, {
                        title: withCtx(() => [
                          createVNode(unref(TypographyText), {
                            content: item.name,
                            ellipsis: { tooltip: item.address }
                          }, null, 8, ["content", "ellipsis"])
                        ]),
                        avatar: withCtx(() => [
                          createVNode(unref(Avatar), {
                            src: item.avatar
                          }, null, 8, ["src"])
                        ]),
                        description: withCtx(() => [
                          createTextVNode(toDisplayString(item.time), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 3
          }, 8, ["grid", "data-source", "pagination"])
        ])
      ]);
    };
  }
});
const CardList = withInstall(_sfc_main$1);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u6309\u94AE1 ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u6309\u94AE2 ");
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { notification } = useMessage();
    const params = {};
    let reload = () => {
    };
    function getMethod(m) {
      reload = m;
    }
    function handleDel(id) {
      console.log(id);
      notification.success({ message: `\u6210\u529F\u5220\u9664${id}` });
      reload();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PageWrapper), {
        title: "\u5361\u7247\u5217\u8868\u793A\u4F8B",
        content: "\u57FA\u7840\u5C01\u88C5"
      }, {
        default: withCtx(() => [
          createVNode(unref(CardList), {
            params,
            api: unref(demoListApi),
            onGetMethod: getMethod,
            onDelete: handleDel
          }, {
            header: withCtx(() => [
              createVNode(unref(Button), {
                type: "primary",
                color: "error"
              }, {
                default: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
              }),
              createVNode(unref(Button), {
                type: "primary",
                color: "success"
              }, {
                default: withCtx(() => [
                  _hoisted_2
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["api"])
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
