var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
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
import { d as defineComponent, bH as Radio, Q as ref, O as computed, aq as watchEffect, w as watch, b as unref, k as omit, bA as get, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, R as createElementBlock, as as renderList, ag as Fragment, aj as createTextVNode, W as toDisplayString, aa as mergeProps, be as Select, bI as LoadingOutlined, aH as createSlots, ac as renderSlot, aG as normalizeProps, aQ as guardReactiveProps, f as createVNode, V as createBaseVNode, bJ as TreeSelect, a6 as onMounted, bK as Cascader, _ as inject, a1 as provide, b6 as Divider, bL as MoreOutlined, ae as Tooltip, t as toRaw, X as normalizeClass, ai as createCommentVNode, bF as Image, bM as Progress, bo as Tag, a7 as nextTick, bN as Upload, bO as Alert, $ as reactive, a2 as toRefs, bp as Space, I as Input, bt as InputNumber, bP as AutoComplete, bu as Switch, b5 as Checkbox, bQ as Slider, bR as Rate, bv as DatePicker, bw as TimePicker, S as withDirectives, bS as isVNode, b3 as Col, b1 as Form, T as vShow, A as cloneDeep, ab as upperFirst, a3 as normalizeStyle, s as set, aw as useDebounceFn, bi as uniqBy, b4 as Row, b2 as withKeys } from "./vendor.faf2de98.js";
/* empty css                *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                  */import { _ as _export_sfc, a as useI18n, y as isFunction, x as isString, A as isArray, ab as isBoolean, F as useMessage, ao as warn, B as withInstall, aj as isNumber, ap as isNull, ac as isObject, aq as dateUtil, ar as isNullOrUnDef, as as error, e as deepMerge } from "./index.7a39a7ac.js";
import { u as useRuleFormItem, C as CountdownInput } from "./index.94a33a2b.js";
import { u as useAttrs } from "./useAttrs.d4bdb35c.js";
import { p as propTypes, z as componentSetting, I as Icon, D as Dropdown, d as useDesign, E as _sfc_main$e, y as getSlot, F as BasicHelp, l as useContext, k as createContext, G as BasicArrow } from "./index.55d49599.js";
/* empty css                 */import { u as useModalContext, B as BasicModal, a as useModalInner, b as useModal } from "./index.6184b776.js";
/* empty css                  *//* empty css                  *//* empty css                  */import { P as PopConfirmButton, B as Button } from "./index.cff27d3a.js";
import { u as usePermission } from "./usePermission.6a085a03.js";
/* empty css                  */import { b as buildUUID } from "./uuid.2b29000c.js";
import { d as downloadByUrl } from "./download.4c317275.js";
import { S as StrengthMeter } from "./index.fba49a50.js";
import { d as useBreakpoint } from "./useRootSetting.3e9429c5.js";
var index$6 = "";
var index$5 = "";
var index$4 = "";
var index$3 = "";
var index$2 = "";
var index$1 = "";
var index = "";
const _sfc_main$d = defineComponent({
  name: "ApiRadioGroup",
  components: {
    RadioGroup: Radio.Group,
    RadioButton: Radio.Button,
    Radio
  },
  props: {
    api: {
      type: Function,
      default: null
    },
    params: {
      type: [Object, String],
      default: () => ({})
    },
    value: {
      type: [String, Number, Boolean]
    },
    isBtn: {
      type: [Boolean],
      default: false
    },
    numberToString: propTypes.bool,
    resultField: propTypes.string.def(""),
    labelField: propTypes.string.def("label"),
    valueField: propTypes.string.def("value"),
    immediate: propTypes.bool.def(true)
  },
  emits: ["options-change", "change"],
  setup(props, { emit }) {
    const options = ref([]);
    const loading = ref(false);
    const isFirstLoad = ref(true);
    const emitData = ref([]);
    const attrs = useAttrs();
    const { t: t2 } = useI18n();
    const [state] = useRuleFormItem(props);
    const getOptions = computed(() => {
      const { labelField, valueField, numberToString } = props;
      return unref(options).reduce((prev, next) => {
        if (next) {
          const value = next[valueField];
          prev.push(__spreadValues({
            label: next[labelField],
            value: numberToString ? `${value}` : value
          }, omit(next, [labelField, valueField])));
        }
        return prev;
      }, []);
    });
    watchEffect(() => {
      props.immediate && fetch();
    });
    watch(() => props.params, () => {
      !unref(isFirstLoad) && fetch();
    }, { deep: true });
    async function fetch() {
      const api = props.api;
      if (!api || !isFunction(api))
        return;
      options.value = [];
      try {
        loading.value = true;
        const res = await api(props.params);
        if (Array.isArray(res)) {
          options.value = res;
          emitChange();
          return;
        }
        if (props.resultField) {
          options.value = get(res, props.resultField) || [];
        }
        emitChange();
      } catch (error2) {
        console.warn(error2);
      } finally {
        loading.value = false;
      }
    }
    function emitChange() {
      emit("options-change", unref(getOptions));
    }
    function handleChange(_, ...args) {
      emitData.value = args;
    }
    return { state, getOptions, attrs, loading, t: t2, handleChange, props };
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RadioButton = resolveComponent("RadioButton");
  const _component_Radio = resolveComponent("Radio");
  const _component_RadioGroup = resolveComponent("RadioGroup");
  return openBlock(), createBlock(_component_RadioGroup, mergeProps(_ctx.attrs, {
    value: _ctx.state,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event),
    "button-style": "solid",
    onChange: _ctx.handleChange
  }), {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getOptions, (item) => {
        return openBlock(), createElementBlock(Fragment, {
          key: `${item.value}`
        }, [
          _ctx.props.isBtn ? (openBlock(), createBlock(_component_RadioButton, {
            key: 0,
            value: item.value,
            disabled: item.disabled
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["value", "disabled"])) : (openBlock(), createBlock(_component_Radio, {
            key: 1,
            value: item.value,
            disabled: item.disabled
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(item.label), 1)
            ]),
            _: 2
          }, 1032, ["value", "disabled"]))
        ], 64);
      }), 128))
    ]),
    _: 1
  }, 16, ["value", "onChange"]);
}
var ApiRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$b]]);
const _sfc_main$c = defineComponent({
  name: "RadioButtonGroup",
  components: {
    RadioGroup: Radio.Group,
    RadioButton: Radio.Button
  },
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const attrs = useAttrs();
    const [state] = useRuleFormItem(props);
    const getOptions = computed(() => {
      const { options } = props;
      if (!options || (options == null ? void 0 : options.length) === 0)
        return [];
      const isStringArr = options.some((item) => isString(item));
      if (!isStringArr)
        return options;
      return options.map((item) => ({ label: item, value: item }));
    });
    return { state, getOptions, attrs };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RadioButton = resolveComponent("RadioButton");
  const _component_RadioGroup = resolveComponent("RadioGroup");
  return openBlock(), createBlock(_component_RadioGroup, mergeProps(_ctx.attrs, {
    value: _ctx.state,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event),
    "button-style": "solid"
  }), {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getOptions, (item) => {
        return openBlock(), createBlock(_component_RadioButton, {
          key: `${item.value}`,
          value: item.value,
          disabled: item.disabled
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.label), 1)
          ]),
          _: 2
        }, 1032, ["value", "disabled"]);
      }), 128))
    ]),
    _: 1
  }, 16, ["value"]);
}
var RadioButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$a]]);
const _sfc_main$b = defineComponent({
  name: "ApiSelect",
  components: {
    Select,
    LoadingOutlined
  },
  inheritAttrs: false,
  props: {
    value: [Array, Object, String, Number],
    numberToString: propTypes.bool,
    api: {
      type: Function,
      default: null
    },
    params: {
      type: Object,
      default: () => ({})
    },
    resultField: propTypes.string.def(""),
    labelField: propTypes.string.def("label"),
    valueField: propTypes.string.def("value"),
    immediate: propTypes.bool.def(true),
    alwaysLoad: propTypes.bool.def(false)
  },
  emits: ["options-change", "change"],
  setup(props, { emit }) {
    const options = ref([]);
    const loading = ref(false);
    const isFirstLoad = ref(true);
    const emitData = ref([]);
    const attrs = useAttrs();
    const { t: t2 } = useI18n();
    const [state] = useRuleFormItem(props, "value", "change", emitData);
    const getOptions = computed(() => {
      const { labelField, valueField, numberToString } = props;
      return unref(options).reduce((prev, next) => {
        if (next) {
          const value = next[valueField];
          prev.push(__spreadProps(__spreadValues({}, omit(next, [labelField, valueField])), {
            label: next[labelField],
            value: numberToString ? `${value}` : value
          }));
        }
        return prev;
      }, []);
    });
    watchEffect(() => {
      props.immediate && !props.alwaysLoad && fetch();
    });
    watch(() => props.params, () => {
      !unref(isFirstLoad) && fetch();
    }, { deep: true });
    async function fetch() {
      const api = props.api;
      if (!api || !isFunction(api))
        return;
      options.value = [];
      try {
        loading.value = true;
        const res = await api(props.params);
        if (Array.isArray(res)) {
          options.value = res;
          emitChange();
          return;
        }
        if (props.resultField) {
          options.value = get(res, props.resultField) || [];
        }
        emitChange();
      } catch (error2) {
        console.warn(error2);
      } finally {
        loading.value = false;
      }
    }
    async function handleFetch(visible) {
      if (visible) {
        if (props.alwaysLoad) {
          await fetch();
        } else if (!props.immediate && unref(isFirstLoad)) {
          await fetch();
          isFirstLoad.value = false;
        }
      }
    }
    function emitChange() {
      emit("options-change", unref(getOptions));
    }
    function handleChange(_, ...args) {
      emitData.value = args;
    }
    return { state, attrs, getOptions, loading, t: t2, handleFetch, handleChange };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LoadingOutlined = resolveComponent("LoadingOutlined");
  const _component_Select = resolveComponent("Select");
  return openBlock(), createBlock(_component_Select, mergeProps({ onDropdownVisibleChange: _ctx.handleFetch }, _ctx.$attrs, {
    onChange: _ctx.handleChange,
    options: _ctx.getOptions,
    value: _ctx.state,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event)
  }), createSlots({ _: 2 }, [
    renderList(Object.keys(_ctx.$slots), (item) => {
      return {
        name: item,
        fn: withCtx((data) => [
          renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
        ])
      };
    }),
    _ctx.loading ? {
      name: "suffixIcon",
      fn: withCtx(() => [
        createVNode(_component_LoadingOutlined, { spin: "" })
      ])
    } : void 0,
    _ctx.loading ? {
      name: "notFoundContent",
      fn: withCtx(() => [
        createBaseVNode("span", null, [
          createVNode(_component_LoadingOutlined, {
            spin: "",
            class: "mr-1"
          }),
          createTextVNode(" " + toDisplayString(_ctx.t("component.form.apiSelectNotFound")), 1)
        ])
      ])
    } : void 0
  ]), 1040, ["onDropdownVisibleChange", "onChange", "options", "value"]);
}
var ApiSelect = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$9]]);
const _sfc_main$a = defineComponent({
  name: "ApiTreeSelect",
  components: { ATreeSelect: TreeSelect, LoadingOutlined },
  props: {
    api: { type: Function },
    params: { type: Object },
    immediate: { type: Boolean, default: true },
    resultField: propTypes.string.def("")
  },
  emits: ["options-change", "change"],
  setup(props, { attrs, emit }) {
    const treeData = ref([]);
    const isFirstLoaded = ref(false);
    const loading = ref(false);
    const getAttrs = computed(() => {
      return __spreadValues(__spreadValues({}, props.api ? { treeData: unref(treeData) } : {}), attrs);
    });
    function handleChange(...args) {
      emit("change", ...args);
    }
    watch(() => props.params, () => {
      !unref(isFirstLoaded) && fetch();
    }, { deep: true });
    watch(() => props.immediate, (v) => {
      v && !isFirstLoaded.value && fetch();
    });
    onMounted(() => {
      props.immediate && fetch();
    });
    async function fetch() {
      const { api } = props;
      if (!api || !isFunction(api))
        return;
      loading.value = true;
      treeData.value = [];
      let result;
      try {
        result = await api(props.params);
      } catch (e) {
        console.error(e);
      }
      loading.value = false;
      if (!result)
        return;
      if (!isArray(result)) {
        result = get(result, props.resultField);
      }
      treeData.value = result || [];
      isFirstLoaded.value = true;
      emit("options-change", treeData.value);
    }
    return { getAttrs, loading, handleChange };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LoadingOutlined = resolveComponent("LoadingOutlined");
  const _component_a_tree_select = resolveComponent("a-tree-select");
  return openBlock(), createBlock(_component_a_tree_select, mergeProps(_ctx.getAttrs, { onChange: _ctx.handleChange }), createSlots({ _: 2 }, [
    renderList(Object.keys(_ctx.$slots), (item) => {
      return {
        name: item,
        fn: withCtx((data) => [
          renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
        ])
      };
    }),
    _ctx.loading ? {
      name: "suffixIcon",
      fn: withCtx(() => [
        createVNode(_component_LoadingOutlined, { spin: "" })
      ])
    } : void 0
  ]), 1040, ["onChange"]);
}
var ApiTreeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8]]);
const _sfc_main$9 = defineComponent({
  name: "ApiCascader",
  components: {
    LoadingOutlined,
    [Cascader.name]: Cascader
  },
  props: {
    value: {
      type: Array
    },
    api: {
      type: Function,
      default: null
    },
    numberToString: propTypes.bool,
    resultField: propTypes.string.def(""),
    labelField: propTypes.string.def("label"),
    valueField: propTypes.string.def("value"),
    childrenField: propTypes.string.def("children"),
    asyncFetchParamKey: propTypes.string.def("parentCode"),
    immediate: propTypes.bool.def(true),
    initFetchParams: {
      type: Object,
      default: () => ({})
    },
    isLeaf: {
      type: Function,
      default: null
    },
    displayRenderArray: {
      type: Array
    }
  },
  emits: ["change", "defaultChange"],
  setup(props, { emit }) {
    const apiData = ref([]);
    const options = ref([]);
    const loading = ref(false);
    const emitData = ref([]);
    const isFirstLoad = ref(true);
    const [state] = useRuleFormItem(props, "value", "change", emitData);
    watch(apiData, (data) => {
      const opts = generatorOptions(data);
      options.value = opts;
    }, { deep: true });
    function generatorOptions(options2) {
      const { labelField, valueField, numberToString, childrenField, isLeaf } = props;
      return options2.reduce((prev, next) => {
        if (next) {
          const value = next[valueField];
          const item = __spreadProps(__spreadValues({}, omit(next, [labelField, valueField])), {
            label: next[labelField],
            value: numberToString ? `${value}` : value,
            isLeaf: isLeaf && typeof isLeaf === "function" ? isLeaf(next) : false
          });
          const children = Reflect.get(next, childrenField);
          if (children) {
            Reflect.set(item, childrenField, generatorOptions(children));
          }
          prev.push(item);
        }
        return prev;
      }, []);
    }
    async function initialFetch() {
      const api = props.api;
      if (!api || !isFunction(api))
        return;
      apiData.value = [];
      loading.value = true;
      try {
        const res = await api(props.initFetchParams);
        if (Array.isArray(res)) {
          apiData.value = res;
          return;
        }
        if (props.resultField) {
          apiData.value = get(res, props.resultField) || [];
        }
      } catch (error2) {
        console.warn(error2);
      } finally {
        loading.value = false;
      }
    }
    async function loadData(selectedOptions) {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;
      const api = props.api;
      if (!api || !isFunction(api))
        return;
      try {
        const res = await api({
          [props.asyncFetchParamKey]: Reflect.get(targetOption, "value")
        });
        if (Array.isArray(res)) {
          const children = generatorOptions(res);
          targetOption.children = children;
          return;
        }
        if (props.resultField) {
          const children = generatorOptions(get(res, props.resultField) || []);
          targetOption.children = children;
        }
      } catch (e) {
        console.error(e);
      } finally {
        targetOption.loading = false;
      }
    }
    watchEffect(() => {
      props.immediate && initialFetch();
    });
    watch(() => props.initFetchParams, () => {
      !unref(isFirstLoad) && initialFetch();
    }, { deep: true });
    function handleChange(keys, args) {
      emitData.value = keys;
      emit("defaultChange", keys, args);
    }
    function handleRenderDisplay({ labels, selectedOptions }) {
      if (unref(emitData).length === selectedOptions.length) {
        return labels.join(" / ");
      }
      if (props.displayRenderArray) {
        return props.displayRenderArray.join(" / ");
      }
      return "";
    }
    return {
      state,
      options,
      loading,
      handleChange,
      loadData,
      handleRenderDisplay
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LoadingOutlined = resolveComponent("LoadingOutlined");
  const _component_a_cascader = resolveComponent("a-cascader");
  return openBlock(), createBlock(_component_a_cascader, {
    value: _ctx.state,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event),
    options: _ctx.options,
    "load-data": _ctx.loadData,
    "change-on-select": "",
    onChange: _ctx.handleChange,
    displayRender: _ctx.handleRenderDisplay
  }, createSlots({ _: 2 }, [
    _ctx.loading ? {
      name: "suffixIcon",
      fn: withCtx(() => [
        createVNode(_component_LoadingOutlined, { spin: "" })
      ])
    } : void 0,
    _ctx.loading ? {
      name: "notFoundContent",
      fn: withCtx(() => [
        createBaseVNode("span", null, [
          createVNode(_component_LoadingOutlined, {
            spin: "",
            class: "mr-1"
          }),
          createTextVNode(" " + toDisplayString(_ctx.t("component.form.apiSelectNotFound")), 1)
        ])
      ])
    } : void 0
  ]), 1032, ["value", "options", "load-data", "onChange", "displayRender"]);
}
var ApiCascader = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7]]);
const basicProps$1 = {
  helpText: {
    type: String,
    default: ""
  },
  maxSize: {
    type: Number,
    default: 2
  },
  maxNumber: {
    type: Number,
    default: Infinity
  },
  accept: {
    type: Array,
    default: () => []
  },
  multiple: {
    type: Boolean,
    default: true
  },
  uploadParams: {
    type: Object,
    default: {}
  },
  api: {
    type: Function,
    default: null,
    required: true
  },
  name: {
    type: String,
    default: "file"
  },
  filename: {
    type: String,
    default: null
  }
};
const uploadContainerProps = __spreadProps(__spreadValues({
  value: {
    type: Array,
    default: () => []
  }
}, basicProps$1), {
  showPreviewNumber: {
    type: Boolean,
    default: true
  },
  emptyHidePreview: {
    type: Boolean,
    default: false
  }
});
const previewProps = {
  value: {
    type: Array,
    default: () => []
  }
};
const fileListProps = {
  columns: {
    type: [Array],
    default: null
  },
  actionColumn: {
    type: Object,
    default: null
  },
  dataSource: {
    type: Array,
    default: null
  }
};
const { t: t$2 } = useI18n();
function useUploadType({
  acceptRef,
  helpTextRef,
  maxNumberRef,
  maxSizeRef
}) {
  const getAccept = computed(() => {
    const accept = unref(acceptRef);
    if (accept && accept.length > 0) {
      return accept;
    }
    return [];
  });
  const getStringAccept = computed(() => {
    return unref(getAccept).map((item) => {
      if (item.indexOf("/") > 0 || item.startsWith(".")) {
        return item;
      } else {
        return `.${item}`;
      }
    }).join(",");
  });
  const getHelpText = computed(() => {
    const helpText = unref(helpTextRef);
    if (helpText) {
      return helpText;
    }
    const helpTexts = [];
    const accept = unref(acceptRef);
    if (accept.length > 0) {
      helpTexts.push(t$2("component.upload.accept", [accept.join(",")]));
    }
    const maxSize = unref(maxSizeRef);
    if (maxSize) {
      helpTexts.push(t$2("component.upload.maxSize", [maxSize]));
    }
    const maxNumber = unref(maxNumberRef);
    if (maxNumber && maxNumber !== Infinity) {
      helpTexts.push(t$2("component.upload.maxNumber", [maxNumber]));
    }
    return helpTexts.join("\uFF0C");
  });
  return { getAccept, getStringAccept, getHelpText };
}
var UploadResultStatus = /* @__PURE__ */ ((UploadResultStatus2) => {
  UploadResultStatus2["SUCCESS"] = "success";
  UploadResultStatus2["ERROR"] = "error";
  UploadResultStatus2["UPLOADING"] = "uploading";
  return UploadResultStatus2;
})(UploadResultStatus || {});
function checkImgType(file) {
  return isImgTypeByName(file.name);
}
function isImgTypeByName(name) {
  return /\.(jpg|jpeg|png|gif)$/i.test(name);
}
function getBase64WithFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve({ result: reader.result, file });
    reader.onerror = (error2) => reject(error2);
  });
}
const key$1 = Symbol("basic-table");
function createTableContext(instance) {
  provide(key$1, instance);
}
function useTableContext() {
  return inject(key$1);
}
const { table } = componentSetting;
const {
  pageSizeOptions,
  defaultPageSize,
  fetchSetting,
  defaultSize,
  defaultSortFn,
  defaultFilterFn
} = table;
const ROW_KEY = "key";
const PAGE_SIZE_OPTIONS = pageSizeOptions;
const PAGE_SIZE = defaultPageSize;
const FETCH_SETTING = fetchSetting;
const DEFAULT_SIZE = defaultSize;
const DEFAULT_SORT_FN = defaultSortFn;
const DEFAULT_FILTER_FN = defaultFilterFn;
const DEFAULT_ALIGN = "center";
const INDEX_COLUMN_FLAG = "INDEX";
const ACTION_COLUMN_FLAG = "ACTION";
var TableAction_vue_vue_type_style_index_0_lang = "";
const _sfc_main$8 = defineComponent({
  name: "TableAction",
  components: { Icon, PopConfirmButton, Divider, Dropdown, MoreOutlined, Tooltip },
  props: {
    actions: {
      type: Array,
      default: null
    },
    dropDownActions: {
      type: Array,
      default: null
    },
    divider: propTypes.bool.def(true),
    outside: propTypes.bool,
    stopButtonPropagation: propTypes.bool.def(false)
  },
  setup(props) {
    const { prefixCls } = useDesign("basic-table-action");
    let table2 = {};
    if (!props.outside) {
      table2 = useTableContext();
    }
    const { hasPermission } = usePermission();
    function isIfShow(action) {
      const ifShow = action.ifShow;
      let isIfShow2 = true;
      if (isBoolean(ifShow)) {
        isIfShow2 = ifShow;
      }
      if (isFunction(ifShow)) {
        isIfShow2 = ifShow(action);
      }
      return isIfShow2;
    }
    const getActions = computed(() => {
      return (toRaw(props.actions) || []).filter((action) => {
        return hasPermission(action.auth) && isIfShow(action);
      }).map((action) => {
        const { popConfirm } = action;
        return __spreadProps(__spreadValues(__spreadValues({
          getPopupContainer: () => {
            var _a;
            return (_a = unref(table2 == null ? void 0 : table2.wrapRef.value)) != null ? _a : document.body;
          },
          type: "link",
          size: "small"
        }, action), popConfirm || {}), {
          onConfirm: popConfirm == null ? void 0 : popConfirm.confirm,
          onCancel: popConfirm == null ? void 0 : popConfirm.cancel,
          enable: !!popConfirm
        });
      });
    });
    const getDropdownList = computed(() => {
      const list = (toRaw(props.dropDownActions) || []).filter((action) => {
        return hasPermission(action.auth) && isIfShow(action);
      });
      return list.map((action, index2) => {
        const { label, popConfirm } = action;
        return __spreadProps(__spreadValues(__spreadValues({}, action), popConfirm), {
          onConfirm: popConfirm == null ? void 0 : popConfirm.confirm,
          onCancel: popConfirm == null ? void 0 : popConfirm.cancel,
          text: label,
          divider: index2 < list.length - 1 ? props.divider : false
        });
      });
    });
    const getAlign = computed(() => {
      var _a, _b;
      const columns = ((_a = table2 == null ? void 0 : table2.getColumns) == null ? void 0 : _a.call(table2)) || [];
      const actionColumn = columns.find((item) => item.flag === ACTION_COLUMN_FLAG);
      return (_b = actionColumn == null ? void 0 : actionColumn.align) != null ? _b : "left";
    });
    function getTooltip(data) {
      return __spreadValues({
        getPopupContainer: () => {
          var _a;
          return (_a = unref(table2 == null ? void 0 : table2.wrapRef.value)) != null ? _a : document.body;
        },
        placement: "bottom"
      }, isString(data) ? { title: data } : data);
    }
    function onCellClick(e) {
      if (!props.stopButtonPropagation)
        return;
      const path = e.composedPath();
      const isInButton = path.find((ele) => {
        var _a;
        return ((_a = ele.tagName) == null ? void 0 : _a.toUpperCase()) === "BUTTON";
      });
      isInButton && e.stopPropagation();
    }
    return { prefixCls, getActions, getDropdownList, getAlign, onCellClick, getTooltip };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_PopConfirmButton = resolveComponent("PopConfirmButton");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_Divider = resolveComponent("Divider");
  const _component_MoreOutlined = resolveComponent("MoreOutlined");
  const _component_a_button = resolveComponent("a-button");
  const _component_Dropdown = resolveComponent("Dropdown");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.prefixCls, _ctx.getAlign]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onCellClick && _ctx.onCellClick(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getActions, (action, index2) => {
      return openBlock(), createElementBlock(Fragment, {
        key: `${index2}-${action.label}`
      }, [
        action.tooltip ? (openBlock(), createBlock(_component_Tooltip, normalizeProps(mergeProps({ key: 0 }, _ctx.getTooltip(action.tooltip))), {
          default: withCtx(() => [
            createVNode(_component_PopConfirmButton, normalizeProps(guardReactiveProps(action)), {
              default: withCtx(() => [
                action.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  icon: action.icon,
                  class: normalizeClass({ "mr-1": !!action.label })
                }, null, 8, ["icon", "class"])) : createCommentVNode("", true),
                action.label ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(action.label), 1)
                ], 64)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1040)
          ]),
          _: 2
        }, 1040)) : (openBlock(), createBlock(_component_PopConfirmButton, normalizeProps(mergeProps({ key: 1 }, action)), {
          default: withCtx(() => [
            action.icon ? (openBlock(), createBlock(_component_Icon, {
              key: 0,
              icon: action.icon,
              class: normalizeClass({ "mr-1": !!action.label })
            }, null, 8, ["icon", "class"])) : createCommentVNode("", true),
            action.label ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(action.label), 1)
            ], 64)) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1040)),
        _ctx.divider && index2 < _ctx.getActions.length - 1 ? (openBlock(), createBlock(_component_Divider, {
          key: 2,
          type: "vertical",
          class: "action-divider"
        })) : createCommentVNode("", true)
      ], 64);
    }), 128)),
    _ctx.dropDownActions && _ctx.getDropdownList.length > 0 ? (openBlock(), createBlock(_component_Dropdown, {
      key: 0,
      trigger: ["hover"],
      dropMenuList: _ctx.getDropdownList,
      popconfirm: ""
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "more"),
        !_ctx.$slots.more ? (openBlock(), createBlock(_component_a_button, {
          key: 0,
          type: "link",
          size: "small"
        }, {
          default: withCtx(() => [
            createVNode(_component_MoreOutlined, { class: "icon-more" })
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["dropMenuList"])) : createCommentVNode("", true)
  ], 2);
}
var TableAction = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6]]);
var ThumbUrl_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = defineComponent({
  components: { Image },
  props: {
    fileUrl: propTypes.string.def(""),
    fileName: propTypes.string.def("")
  }
});
const _hoisted_1$1 = { class: "thumb" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Image = resolveComponent("Image");
  return openBlock(), createElementBlock("span", _hoisted_1$1, [
    _ctx.fileUrl ? (openBlock(), createBlock(_component_Image, {
      key: 0,
      src: _ctx.fileUrl,
      width: 104
    }, null, 8, ["src"])) : createCommentVNode("", true)
  ]);
}
var ThumbUrl = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$5]]);
const {
  t: t$1
} = useI18n();
function createTableColumns() {
  return [
    {
      dataIndex: "thumbUrl",
      title: t$1("component.upload.legend"),
      width: 100,
      customRender: ({
        record
      }) => {
        const {
          thumbUrl
        } = record || {};
        return thumbUrl && createVNode(ThumbUrl, {
          "fileUrl": thumbUrl
        }, null);
      }
    },
    {
      dataIndex: "name",
      title: t$1("component.upload.fileName"),
      align: "left",
      customRender: ({
        text,
        record
      }) => {
        const {
          percent,
          status: uploadStatus
        } = record || {};
        let status = "normal";
        if (uploadStatus === UploadResultStatus.ERROR) {
          status = "exception";
        } else if (uploadStatus === UploadResultStatus.UPLOADING) {
          status = "active";
        } else if (uploadStatus === UploadResultStatus.SUCCESS) {
          status = "success";
        }
        return createVNode("span", null, [createVNode("p", {
          "class": "truncate mb-1",
          "title": text
        }, [text]), createVNode(Progress, {
          "percent": percent,
          "size": "small",
          "status": status
        }, null)]);
      }
    },
    {
      dataIndex: "size",
      title: t$1("component.upload.fileSize"),
      width: 100,
      customRender: ({
        text = 0
      }) => {
        return text && (text / 1024).toFixed(2) + "KB";
      }
    },
    {
      dataIndex: "status",
      title: t$1("component.upload.fileStatue"),
      width: 100,
      customRender: ({
        text
      }) => {
        if (text === UploadResultStatus.SUCCESS) {
          return createVNode(Tag, {
            "color": "green"
          }, {
            default: () => t$1("component.upload.uploadSuccess")
          });
        } else if (text === UploadResultStatus.ERROR) {
          return createVNode(Tag, {
            "color": "red"
          }, {
            default: () => t$1("component.upload.uploadError")
          });
        } else if (text === UploadResultStatus.UPLOADING) {
          return createVNode(Tag, {
            "color": "blue"
          }, {
            default: () => t$1("component.upload.uploading")
          });
        }
        return text;
      }
    }
  ];
}
function createActionColumn(handleRemove) {
  return {
    width: 120,
    title: t$1("component.upload.operating"),
    dataIndex: "action",
    fixed: false,
    customRender: ({
      record
    }) => {
      const actions = [{
        label: t$1("component.upload.del"),
        color: "error",
        onClick: handleRemove.bind(null, record)
      }];
      return createVNode(TableAction, {
        "actions": actions,
        "outside": true
      }, null);
    }
  };
}
function createPreviewColumns() {
  return [{
    dataIndex: "url",
    title: t$1("component.upload.legend"),
    width: 100,
    customRender: ({
      record
    }) => {
      const {
        url
      } = record || {};
      return isImgTypeByName(url) && createVNode(ThumbUrl, {
        "fileUrl": url
      }, null);
    }
  }, {
    dataIndex: "name",
    title: t$1("component.upload.fileName"),
    align: "left"
  }];
}
function createPreviewActionColumn({
  handleRemove,
  handleDownload
}) {
  return {
    width: 160,
    title: t$1("component.upload.operating"),
    dataIndex: "action",
    fixed: false,
    customRender: ({
      record
    }) => {
      const actions = [{
        label: t$1("component.upload.del"),
        color: "error",
        onClick: handleRemove.bind(null, record)
      }, {
        label: t$1("component.upload.download"),
        onClick: handleDownload.bind(null, record)
      }];
      return createVNode(TableAction, {
        "actions": actions,
        "outside": true
      }, null);
    }
  };
}
var _sfc_main$6 = defineComponent({
  name: "FileList",
  props: fileListProps,
  setup(props) {
    const modalFn = useModalContext();
    watch(() => props.dataSource, () => {
      nextTick(() => {
        var _a;
        (_a = modalFn == null ? void 0 : modalFn.redoModalHeight) == null ? void 0 : _a.call(modalFn);
      });
    });
    return () => {
      const {
        columns,
        actionColumn,
        dataSource
      } = props;
      const columnList = [...columns, actionColumn];
      return createVNode("table", {
        "class": "file-table"
      }, [createVNode("colgroup", null, [columnList.map((item) => {
        const {
          width = 0,
          dataIndex
        } = item;
        const style = {
          width: `${width}px`,
          minWidth: `${width}px`
        };
        return createVNode("col", {
          "style": width ? style : {},
          "key": dataIndex
        }, null);
      })]), createVNode("thead", null, [createVNode("tr", {
        "class": "file-table-tr"
      }, [columnList.map((item) => {
        const {
          title = "",
          align = "center",
          dataIndex
        } = item;
        return createVNode("th", {
          "class": ["file-table-th", align],
          "key": dataIndex
        }, [title]);
      })])]), createVNode("tbody", null, [dataSource.map((record = {}, index2) => {
        return createVNode("tr", {
          "class": "file-table-tr",
          "key": `${index2 + record.name || ""}`
        }, [columnList.map((item) => {
          const {
            dataIndex = "",
            customRender,
            align = "center"
          } = item;
          const render = customRender && isFunction(customRender);
          return createVNode("td", {
            "class": ["file-table-td", align],
            "key": dataIndex
          }, [render ? customRender == null ? void 0 : customRender({
            text: record[dataIndex],
            record
          }) : record[dataIndex]]);
        })]);
      })])]);
    };
  }
});
var FileList_vue_vue_type_style_index_0_lang = "";
var UploadModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = defineComponent({
  components: { BasicModal, Upload, Alert, FileList: _sfc_main$6 },
  props: __spreadProps(__spreadValues({}, basicProps$1), {
    previewFileList: {
      type: Array,
      default: () => []
    }
  }),
  emits: ["change", "register", "delete"],
  setup(props, { emit }) {
    const state = reactive({
      fileList: []
    });
    const isUploadingRef = ref(false);
    const fileListRef = ref([]);
    const { accept, helpText, maxNumber, maxSize } = toRefs(props);
    const { t: t2 } = useI18n();
    const [register, { closeModal }] = useModalInner();
    const { getStringAccept, getHelpText } = useUploadType({
      acceptRef: accept,
      helpTextRef: helpText,
      maxNumberRef: maxNumber,
      maxSizeRef: maxSize
    });
    const { createMessage } = useMessage();
    const getIsSelectFile = computed(() => {
      return fileListRef.value.length > 0 && !fileListRef.value.every((item) => item.status === UploadResultStatus.SUCCESS);
    });
    const getOkButtonProps = computed(() => {
      const someSuccess = fileListRef.value.some((item) => item.status === UploadResultStatus.SUCCESS);
      return {
        disabled: isUploadingRef.value || fileListRef.value.length === 0 || !someSuccess
      };
    });
    const getUploadBtnText = computed(() => {
      const someError = fileListRef.value.some((item) => item.status === UploadResultStatus.ERROR);
      return isUploadingRef.value ? t2("component.upload.uploading") : someError ? t2("component.upload.reUploadFailed") : t2("component.upload.startUpload");
    });
    function beforeUpload(file) {
      const { size, name } = file;
      const { maxSize: maxSize2 } = props;
      if (maxSize2 && file.size / 1024 / 1024 >= maxSize2) {
        createMessage.error(t2("component.upload.maxSizeMultiple", [maxSize2]));
        return false;
      }
      const commonItem = {
        uuid: buildUUID(),
        file,
        size,
        name,
        percent: 0,
        type: name.split(".").pop()
      };
      if (checkImgType(file)) {
        getBase64WithFile(file).then(({ result: thumbUrl }) => {
          fileListRef.value = [
            ...unref(fileListRef),
            __spreadValues({
              thumbUrl
            }, commonItem)
          ];
        });
      } else {
        fileListRef.value = [...unref(fileListRef), commonItem];
      }
      return false;
    }
    function handleRemove(record) {
      const index2 = fileListRef.value.findIndex((item) => item.uuid === record.uuid);
      index2 !== -1 && fileListRef.value.splice(index2, 1);
      emit("delete", record);
    }
    async function uploadApiByItem(item) {
      var _a;
      const { api } = props;
      if (!api || !isFunction(api)) {
        return warn("upload api must exist and be a function");
      }
      try {
        item.status = UploadResultStatus.UPLOADING;
        const { data } = await ((_a = props.api) == null ? void 0 : _a.call(props, {
          data: __spreadValues({}, props.uploadParams || {}),
          file: item.file,
          name: props.name,
          filename: props.filename
        }, function onUploadProgress(progressEvent) {
          const complete = progressEvent.loaded / progressEvent.total * 100 | 0;
          item.percent = complete;
        }));
        item.status = UploadResultStatus.SUCCESS;
        item.responseData = data;
        return {
          success: true,
          error: null
        };
      } catch (e) {
        console.log(e);
        item.status = UploadResultStatus.ERROR;
        return {
          success: false,
          error: e
        };
      }
    }
    async function handleStartUpload() {
      var _a;
      const { maxNumber: maxNumber2 } = props;
      if (fileListRef.value.length + ((_a = props.previewFileList) == null ? void 0 : _a.length) > maxNumber2) {
        return createMessage.warning(t2("component.upload.maxNumber", [maxNumber2]));
      }
      try {
        isUploadingRef.value = true;
        const uploadFileList = fileListRef.value.filter((item) => item.status !== UploadResultStatus.SUCCESS) || [];
        const data = await Promise.all(uploadFileList.map((item) => {
          return uploadApiByItem(item);
        }));
        isUploadingRef.value = false;
        const errorList = data.filter((item) => !item.success);
        if (errorList.length > 0)
          throw errorList;
      } catch (e) {
        isUploadingRef.value = false;
        throw e;
      }
    }
    function handleOk() {
      const { maxNumber: maxNumber2 } = props;
      if (fileListRef.value.length > maxNumber2) {
        return createMessage.warning(t2("component.upload.maxNumber", [maxNumber2]));
      }
      if (isUploadingRef.value) {
        return createMessage.warning(t2("component.upload.saveWarn"));
      }
      const fileList = [];
      for (const item of fileListRef.value) {
        const { status, responseData } = item;
        if (status === UploadResultStatus.SUCCESS && responseData) {
          fileList.push(responseData.url);
        }
      }
      if (fileList.length <= 0) {
        return createMessage.warning(t2("component.upload.saveError"));
      }
      fileListRef.value = [];
      closeModal();
      emit("change", fileList);
    }
    async function handleCloseFunc() {
      if (!isUploadingRef.value) {
        fileListRef.value = [];
        return true;
      } else {
        createMessage.warning(t2("component.upload.uploadWait"));
        return false;
      }
    }
    return {
      columns: createTableColumns(),
      actionColumn: createActionColumn(handleRemove),
      register,
      closeModal,
      getHelpText,
      getStringAccept,
      getOkButtonProps,
      beforeUpload,
      fileListRef,
      state,
      isUploadingRef,
      handleStartUpload,
      handleOk,
      handleCloseFunc,
      getIsSelectFile,
      getUploadBtnText,
      t: t2
    };
  }
});
const _hoisted_1 = { class: "upload-modal-toolbar" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_Alert = resolveComponent("Alert");
  const _component_Upload = resolveComponent("Upload");
  const _component_FileList = resolveComponent("FileList");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps({
    width: "800px",
    title: _ctx.t("component.upload.upload"),
    okText: _ctx.t("component.upload.save")
  }, _ctx.$attrs, {
    onRegister: _ctx.register,
    onOk: _ctx.handleOk,
    closeFunc: _ctx.handleCloseFunc,
    maskClosable: false,
    keyboard: false,
    class: "upload-modal",
    okButtonProps: _ctx.getOkButtonProps,
    cancelButtonProps: { disabled: _ctx.isUploadingRef }
  }), {
    centerFooter: withCtx(() => [
      createVNode(_component_a_button, {
        onClick: _ctx.handleStartUpload,
        color: "success",
        disabled: !_ctx.getIsSelectFile,
        loading: _ctx.isUploadingRef
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(_ctx.getUploadBtnText), 1)
        ]),
        _: 1
      }, 8, ["onClick", "disabled", "loading"])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_Alert, {
          message: _ctx.getHelpText,
          type: "info",
          banner: "",
          class: "upload-modal-toolbar__text"
        }, null, 8, ["message"]),
        createVNode(_component_Upload, {
          accept: _ctx.getStringAccept,
          multiple: _ctx.multiple,
          "before-upload": _ctx.beforeUpload,
          "show-upload-list": false,
          class: "upload-modal-toolbar__btn"
        }, {
          default: withCtx(() => [
            createVNode(_component_a_button, { type: "primary" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.t("component.upload.choose")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["accept", "multiple", "before-upload"])
      ]),
      createVNode(_component_FileList, {
        dataSource: _ctx.fileListRef,
        columns: _ctx.columns,
        actionColumn: _ctx.actionColumn
      }, null, 8, ["dataSource", "columns", "actionColumn"])
    ]),
    _: 1
  }, 16, ["title", "okText", "onRegister", "onOk", "closeFunc", "okButtonProps", "cancelButtonProps"]);
}
var UploadModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
var UploadPreviewModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = defineComponent({
  components: { BasicModal, FileList: _sfc_main$6 },
  props: previewProps,
  emits: ["list-change", "register", "delete"],
  setup(props, { emit }) {
    const [register, { closeModal }] = useModalInner();
    const { t: t2 } = useI18n();
    const fileListRef = ref([]);
    watch(() => props.value, (value) => {
      if (!isArray(value))
        value = [];
      fileListRef.value = value.filter((item) => !!item).map((item) => {
        return {
          url: item,
          type: item.split(".").pop() || "",
          name: item.split("/").pop() || ""
        };
      });
    }, { immediate: true });
    function handleRemove(record) {
      const index2 = fileListRef.value.findIndex((item) => item.url === record.url);
      if (index2 !== -1) {
        const removed = fileListRef.value.splice(index2, 1);
        emit("delete", removed[0].url);
        emit("list-change", fileListRef.value.map((item) => item.url));
      }
    }
    function handleDownload(record) {
      const { url = "" } = record;
      downloadByUrl({ url });
    }
    return {
      t: t2,
      register,
      closeModal,
      fileListRef,
      columns: createPreviewColumns(),
      actionColumn: createPreviewActionColumn({ handleRemove, handleDownload })
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FileList = resolveComponent("FileList");
  const _component_BasicModal = resolveComponent("BasicModal");
  return openBlock(), createBlock(_component_BasicModal, mergeProps({
    width: "800px",
    title: _ctx.t("component.upload.preview"),
    class: "upload-preview-modal"
  }, _ctx.$attrs, {
    onRegister: _ctx.register,
    showOkBtn: false
  }), {
    default: withCtx(() => [
      createVNode(_component_FileList, {
        dataSource: _ctx.fileListRef,
        columns: _ctx.columns,
        actionColumn: _ctx.actionColumn
      }, null, 8, ["dataSource", "columns", "actionColumn"])
    ]),
    _: 1
  }, 16, ["title", "onRegister"]);
}
var UploadPreviewModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3]]);
const _sfc_main$3 = defineComponent({
  name: "BasicUpload",
  components: { UploadModal, Space, UploadPreviewModal, Icon, Tooltip },
  props: uploadContainerProps,
  emits: ["change", "delete", "preview-delete", "update:value"],
  setup(props, { emit, attrs }) {
    const { t: t2 } = useI18n();
    const [registerUploadModal, { openModal: openUploadModal }] = useModal();
    const [registerPreviewModal, { openModal: openPreviewModal }] = useModal();
    const fileList = ref([]);
    const showPreview = computed(() => {
      const { emptyHidePreview } = props;
      if (!emptyHidePreview)
        return true;
      return emptyHidePreview ? fileList.value.length > 0 : true;
    });
    const bindValue = computed(() => {
      const value = __spreadValues(__spreadValues({}, attrs), props);
      return omit(value, "onChange");
    });
    watch(() => props.value, (value = []) => {
      fileList.value = isArray(value) ? value : [];
    }, { immediate: true });
    function handleChange(urls) {
      fileList.value = [...unref(fileList), ...urls || []];
      emit("update:value", fileList.value);
      emit("change", fileList.value);
    }
    function handlePreviewChange(urls) {
      fileList.value = [...urls || []];
      emit("update:value", fileList.value);
      emit("change", fileList.value);
    }
    function handleDelete(record) {
      emit("delete", record);
    }
    function handlePreviewDelete(url) {
      emit("preview-delete", url);
    }
    return {
      registerUploadModal,
      openUploadModal,
      handleChange,
      handlePreviewChange,
      registerPreviewModal,
      openPreviewModal,
      fileList,
      showPreview,
      bindValue,
      handleDelete,
      handlePreviewDelete,
      t: t2
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_Icon = resolveComponent("Icon");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_Space = resolveComponent("Space");
  const _component_UploadModal = resolveComponent("UploadModal");
  const _component_UploadPreviewModal = resolveComponent("UploadPreviewModal");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_Space, null, {
      default: withCtx(() => [
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.openUploadModal,
          preIcon: "carbon:cloud-upload"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.t("component.upload.upload")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        _ctx.showPreview ? (openBlock(), createBlock(_component_Tooltip, {
          key: 0,
          placement: "bottom"
        }, {
          title: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.t("component.upload.uploaded")) + " ", 1),
            _ctx.fileList.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.fileList.length), 1)
            ], 64)) : createCommentVNode("", true)
          ]),
          default: withCtx(() => [
            createVNode(_component_a_button, { onClick: _ctx.openPreviewModal }, {
              default: withCtx(() => [
                createVNode(_component_Icon, { icon: "bi:eye" }),
                _ctx.fileList.length && _ctx.showPreviewNumber ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(_ctx.fileList.length), 1)
                ], 64)) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    createVNode(_component_UploadModal, mergeProps(_ctx.bindValue, {
      previewFileList: _ctx.fileList,
      onRegister: _ctx.registerUploadModal,
      onChange: _ctx.handleChange,
      onDelete: _ctx.handleDelete
    }), null, 16, ["previewFileList", "onRegister", "onChange", "onDelete"]),
    createVNode(_component_UploadPreviewModal, {
      value: _ctx.fileList,
      onRegister: _ctx.registerPreviewModal,
      onListChange: _ctx.handlePreviewChange,
      onDelete: _ctx.handlePreviewDelete
    }, null, 8, ["value", "onRegister", "onListChange", "onDelete"])
  ]);
}
var basicUpload = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
const BasicUpload = withInstall(basicUpload);
const componentMap = /* @__PURE__ */ new Map();
componentMap.set("Input", Input);
componentMap.set("InputGroup", Input.Group);
componentMap.set("InputPassword", Input.Password);
componentMap.set("InputSearch", Input.Search);
componentMap.set("InputTextArea", Input.TextArea);
componentMap.set("InputNumber", InputNumber);
componentMap.set("AutoComplete", AutoComplete);
componentMap.set("Select", Select);
componentMap.set("ApiSelect", ApiSelect);
componentMap.set("TreeSelect", TreeSelect);
componentMap.set("ApiTreeSelect", ApiTreeSelect);
componentMap.set("ApiRadioGroup", ApiRadioGroup);
componentMap.set("Switch", Switch);
componentMap.set("RadioButtonGroup", RadioButtonGroup);
componentMap.set("RadioGroup", Radio.Group);
componentMap.set("Checkbox", Checkbox);
componentMap.set("CheckboxGroup", Checkbox.Group);
componentMap.set("ApiCascader", ApiCascader);
componentMap.set("Cascader", Cascader);
componentMap.set("Slider", Slider);
componentMap.set("Rate", Rate);
componentMap.set("DatePicker", DatePicker);
componentMap.set("MonthPicker", DatePicker.MonthPicker);
componentMap.set("RangePicker", DatePicker.RangePicker);
componentMap.set("WeekPicker", DatePicker.WeekPicker);
componentMap.set("TimePicker", TimePicker);
componentMap.set("StrengthMeter", StrengthMeter);
componentMap.set("IconPicker", _sfc_main$e);
componentMap.set("InputCountDown", CountdownInput);
componentMap.set("Upload", BasicUpload);
componentMap.set("Divider", Divider);
const { t } = useI18n();
function createPlaceholderMessage(component) {
  if (component.includes("Input") || component.includes("Complete")) {
    return t("common.inputText");
  }
  if (component.includes("Picker")) {
    return t("common.chooseText");
  }
  if (component.includes("Select") || component.includes("Cascader") || component.includes("Checkbox") || component.includes("Radio") || component.includes("Switch")) {
    return t("common.chooseText");
  }
  return "";
}
const DATE_TYPE = ["DatePicker", "MonthPicker", "WeekPicker", "TimePicker"];
function genType() {
  return [...DATE_TYPE, "RangePicker"];
}
function setComponentRuleType(rule, component, valueFormat) {
  if (["DatePicker", "MonthPicker", "WeekPicker", "TimePicker"].includes(component)) {
    rule.type = valueFormat ? "string" : "object";
  } else if (["RangePicker", "Upload", "CheckboxGroup", "TimePicker"].includes(component)) {
    rule.type = "array";
  } else if (["InputNumber"].includes(component)) {
    rule.type = "number";
  }
}
function handleInputNumberValue(component, val) {
  if (!component)
    return val;
  if (["Input", "InputPassword", "InputSearch", "InputTextArea"].includes(component)) {
    return val && isNumber(val) ? `${val}` : val;
  }
  return val;
}
const dateItemType = genType();
const defaultValueComponents = ["Input", "InputPassword", "InputSearch", "InputTextArea"];
function useItemLabelWidth(schemaItemRef, propsRef) {
  return computed(() => {
    const schemaItem = unref(schemaItemRef);
    const { labelCol = {}, wrapperCol = {} } = schemaItem.itemProps || {};
    const { labelWidth, disabledLabelWidth } = schemaItem;
    const {
      labelWidth: globalLabelWidth,
      labelCol: globalLabelCol,
      wrapperCol: globWrapperCol,
      layout
    } = unref(propsRef);
    if (!globalLabelWidth && !labelWidth && !globalLabelCol || disabledLabelWidth) {
      labelCol.style = {
        textAlign: "left"
      };
      return { labelCol, wrapperCol };
    }
    let width = labelWidth || globalLabelWidth;
    const col = __spreadValues(__spreadValues({}, globalLabelCol), labelCol);
    const wrapCol = __spreadValues(__spreadValues({}, globWrapperCol), wrapperCol);
    if (width) {
      width = isNumber(width) ? `${width}px` : width;
    }
    return {
      labelCol: __spreadValues({ style: { width } }, col),
      wrapperCol: __spreadValues({
        style: { width: layout === "vertical" ? "100%" : `calc(100% - ${width})` }
      }, wrapCol)
    };
  });
}
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _sfc_main$2 = defineComponent({
  name: "BasicFormItem",
  inheritAttrs: false,
  props: {
    schema: {
      type: Object,
      default: () => ({})
    },
    formProps: {
      type: Object,
      default: () => ({})
    },
    allDefaultValues: {
      type: Object,
      default: () => ({})
    },
    formModel: {
      type: Object,
      default: () => ({})
    },
    setFormModel: {
      type: Function,
      default: null
    },
    tableAction: {
      type: Object
    },
    formActionType: {
      type: Object
    }
  },
  setup(props, {
    slots
  }) {
    const {
      t: t2
    } = useI18n();
    const {
      schema,
      formProps
    } = toRefs(props);
    const itemLabelWidthProp = useItemLabelWidth(schema, formProps);
    const getValues = computed(() => {
      const {
        allDefaultValues,
        formModel,
        schema: schema2
      } = props;
      const {
        mergeDynamicData
      } = props.formProps;
      return {
        field: schema2.field,
        model: formModel,
        values: __spreadValues(__spreadValues(__spreadValues({}, mergeDynamicData), allDefaultValues), formModel),
        schema: schema2
      };
    });
    const getComponentsProps = computed(() => {
      var _a;
      const {
        schema: schema2,
        tableAction,
        formModel,
        formActionType
      } = props;
      let {
        componentProps = {}
      } = schema2;
      if (isFunction(componentProps)) {
        componentProps = (_a = componentProps({
          schema: schema2,
          tableAction,
          formModel,
          formActionType
        })) != null ? _a : {};
      }
      if (schema2.component === "Divider") {
        componentProps = Object.assign({
          type: "horizontal"
        }, componentProps, {
          orientation: "left",
          plain: true
        });
      }
      return componentProps;
    });
    const getDisable = computed(() => {
      const {
        disabled: globDisabled
      } = props.formProps;
      const {
        dynamicDisabled
      } = props.schema;
      const {
        disabled: itemDisabled = false
      } = unref(getComponentsProps);
      let disabled = !!globDisabled || itemDisabled;
      if (isBoolean(dynamicDisabled)) {
        disabled = dynamicDisabled;
      }
      if (isFunction(dynamicDisabled)) {
        disabled = dynamicDisabled(unref(getValues));
      }
      return disabled;
    });
    function getShow() {
      const {
        show,
        ifShow
      } = props.schema;
      const {
        showAdvancedButton
      } = props.formProps;
      const itemIsAdvanced = showAdvancedButton ? isBoolean(props.schema.isAdvanced) ? props.schema.isAdvanced : true : true;
      let isShow = true;
      let isIfShow = true;
      if (isBoolean(show)) {
        isShow = show;
      }
      if (isBoolean(ifShow)) {
        isIfShow = ifShow;
      }
      if (isFunction(show)) {
        isShow = show(unref(getValues));
      }
      if (isFunction(ifShow)) {
        isIfShow = ifShow(unref(getValues));
      }
      isShow = isShow && itemIsAdvanced;
      return {
        isShow,
        isIfShow
      };
    }
    function handleRules() {
      var _a;
      const {
        rules: defRules = [],
        component,
        rulesMessageJoinLabel,
        label,
        dynamicRules,
        required
      } = props.schema;
      if (isFunction(dynamicRules)) {
        return dynamicRules(unref(getValues));
      }
      let rules = cloneDeep(defRules);
      const {
        rulesMessageJoinLabel: globalRulesMessageJoinLabel
      } = props.formProps;
      const joinLabel = Reflect.has(props.schema, "rulesMessageJoinLabel") ? rulesMessageJoinLabel : globalRulesMessageJoinLabel;
      const defaultMsg = createPlaceholderMessage(component) + `${joinLabel ? label : ""}`;
      function validator(rule, value) {
        const msg = rule.message || defaultMsg;
        if (value === void 0 || isNull(value)) {
          return Promise.reject(msg);
        } else if (Array.isArray(value) && value.length === 0) {
          return Promise.reject(msg);
        } else if (typeof value === "string" && value.trim() === "") {
          return Promise.reject(msg);
        } else if (typeof value === "object" && Reflect.has(value, "checked") && Reflect.has(value, "halfChecked") && Array.isArray(value.checked) && Array.isArray(value.halfChecked) && value.checked.length === 0 && value.halfChecked.length === 0) {
          return Promise.reject(msg);
        }
        return Promise.resolve();
      }
      const getRequired = isFunction(required) ? required(unref(getValues)) : required;
      if ((!rules || rules.length === 0) && getRequired) {
        rules = [{
          required: getRequired,
          validator
        }];
      }
      const requiredRuleIndex = rules.findIndex((rule) => Reflect.has(rule, "required") && !Reflect.has(rule, "validator"));
      if (requiredRuleIndex !== -1) {
        const rule = rules[requiredRuleIndex];
        const {
          isShow
        } = getShow();
        if (!isShow) {
          rule.required = false;
        }
        if (component) {
          if (!Reflect.has(rule, "type")) {
            rule.type = component === "InputNumber" ? "number" : "string";
          }
          rule.message = rule.message || defaultMsg;
          if (component.includes("Input") || component.includes("Textarea")) {
            rule.whitespace = true;
          }
          const valueFormat = (_a = unref(getComponentsProps)) == null ? void 0 : _a.valueFormat;
          setComponentRuleType(rule, component, valueFormat);
        }
      }
      const characterInx = rules.findIndex((val) => val.max);
      if (characterInx !== -1 && !rules[characterInx].validator) {
        rules[characterInx].message = rules[characterInx].message || t2("component.form.maxTip", [rules[characterInx].max]);
      }
      return rules;
    }
    function renderComponent() {
      var _a;
      const {
        renderComponentContent,
        component,
        field,
        changeEvent = "change",
        valueField
      } = props.schema;
      const isCheck = component && ["Switch", "Checkbox"].includes(component);
      const eventKey = `on${upperFirst(changeEvent)}`;
      const on = {
        [eventKey]: (...args) => {
          const [e] = args;
          if (propsData[eventKey]) {
            propsData[eventKey](...args);
          }
          const target = e ? e.target : null;
          const value = target ? isCheck ? target.checked : target.value : e;
          props.setFormModel(field, value);
        }
      };
      const Comp = componentMap.get(component);
      const {
        autoSetPlaceHolder,
        size
      } = props.formProps;
      const propsData = __spreadProps(__spreadValues({
        allowClear: true,
        getPopupContainer: (trigger) => trigger.parentNode,
        size
      }, unref(getComponentsProps)), {
        disabled: unref(getDisable)
      });
      const isCreatePlaceholder = !propsData.disabled && autoSetPlaceHolder;
      if (isCreatePlaceholder && component !== "RangePicker" && component) {
        propsData.placeholder = ((_a = unref(getComponentsProps)) == null ? void 0 : _a.placeholder) || createPlaceholderMessage(component);
      }
      propsData.codeField = field;
      propsData.formValues = unref(getValues);
      const bindValue = {
        [valueField || (isCheck ? "checked" : "value")]: props.formModel[field]
      };
      const compAttr = __spreadValues(__spreadValues(__spreadValues({}, propsData), on), bindValue);
      if (!renderComponentContent) {
        return createVNode(Comp, compAttr, null);
      }
      const compSlot = isFunction(renderComponentContent) ? __spreadValues({}, renderComponentContent(unref(getValues))) : {
        default: () => renderComponentContent
      };
      return createVNode(Comp, compAttr, _isSlot(compSlot) ? compSlot : {
        default: () => [compSlot]
      });
    }
    function renderLabelHelpMessage() {
      const {
        label,
        helpMessage,
        helpComponentProps,
        subLabel
      } = props.schema;
      const renderLabel = subLabel ? createVNode("span", null, [label, createTextVNode(" "), createVNode("span", {
        "class": "text-secondary"
      }, [subLabel])]) : label;
      const getHelpMessage = isFunction(helpMessage) ? helpMessage(unref(getValues)) : helpMessage;
      if (!getHelpMessage || Array.isArray(getHelpMessage) && getHelpMessage.length === 0) {
        return renderLabel;
      }
      return createVNode("span", null, [renderLabel, createVNode(BasicHelp, mergeProps({
        "placement": "top",
        "class": "mx-1",
        "text": getHelpMessage
      }, helpComponentProps), null)]);
    }
    function renderItem() {
      const {
        itemProps,
        slot,
        render,
        field,
        suffix,
        component
      } = props.schema;
      const {
        labelCol,
        wrapperCol
      } = unref(itemLabelWidthProp);
      const {
        colon
      } = props.formProps;
      if (component === "Divider") {
        let _slot;
        return createVNode(Col, {
          "span": 24
        }, {
          default: () => [createVNode(Divider, unref(getComponentsProps), _isSlot(_slot = renderLabelHelpMessage()) ? _slot : {
            default: () => [_slot]
          })]
        });
      } else {
        const getContent = () => {
          return slot ? getSlot(slots, slot, unref(getValues)) : render ? render(unref(getValues)) : renderComponent();
        };
        const showSuffix = !!suffix;
        const getSuffix = isFunction(suffix) ? suffix(unref(getValues)) : suffix;
        return createVNode(Form.Item, mergeProps({
          "name": field,
          "colon": colon,
          "class": {
            "suffix-item": showSuffix
          }
        }, itemProps, {
          "label": renderLabelHelpMessage(),
          "rules": handleRules(),
          "labelCol": labelCol,
          "wrapperCol": wrapperCol
        }), {
          default: () => [createVNode("div", {
            "style": "display:flex"
          }, [createVNode("div", {
            "style": "flex:1;"
          }, [getContent()]), showSuffix && createVNode("span", {
            "class": "suffix"
          }, [getSuffix])])]
        });
      }
    }
    return () => {
      let _slot2;
      const {
        colProps = {},
        colSlot,
        renderColContent,
        component
      } = props.schema;
      if (!componentMap.has(component)) {
        return null;
      }
      const {
        baseColProps = {}
      } = props.formProps;
      const realColProps = __spreadValues(__spreadValues({}, baseColProps), colProps);
      const {
        isIfShow,
        isShow
      } = getShow();
      const values = unref(getValues);
      const getContent = () => {
        return colSlot ? getSlot(slots, colSlot, values) : renderColContent ? renderColContent(values) : renderItem();
      };
      return isIfShow && withDirectives(createVNode(Col, realColProps, _isSlot(_slot2 = getContent()) ? _slot2 : {
        default: () => [_slot2]
      }), [[vShow, isShow]]);
    };
  }
});
const key = Symbol();
function createFormContext(context) {
  return createContext(context, key);
}
function useFormContext() {
  return useContext(key);
}
const _sfc_main$1 = defineComponent({
  name: "BasicFormAction",
  components: {
    FormItem: Form.Item,
    Button,
    BasicArrow,
    [Col.name]: Col
  },
  props: {
    showActionButtonGroup: propTypes.bool.def(true),
    showResetButton: propTypes.bool.def(true),
    showSubmitButton: propTypes.bool.def(true),
    showAdvancedButton: propTypes.bool.def(true),
    resetButtonOptions: {
      type: Object,
      default: () => ({})
    },
    submitButtonOptions: {
      type: Object,
      default: () => ({})
    },
    actionColOptions: {
      type: Object,
      default: () => ({})
    },
    actionSpan: propTypes.number.def(6),
    isAdvanced: propTypes.bool,
    hideAdvanceBtn: propTypes.bool
  },
  emits: ["toggle-advanced"],
  setup(props, { emit }) {
    const { t: t2 } = useI18n();
    const actionColOpt = computed(() => {
      const { showAdvancedButton, actionSpan: span, actionColOptions } = props;
      const actionSpan = 24 - span;
      const advancedSpanObj = showAdvancedButton ? { span: actionSpan < 6 ? 24 : actionSpan } : {};
      const actionColOpt2 = __spreadValues(__spreadValues({
        style: { textAlign: "right" },
        span: showAdvancedButton ? 6 : 4
      }, advancedSpanObj), actionColOptions);
      return actionColOpt2;
    });
    const getResetBtnOptions = computed(() => {
      return Object.assign({
        text: t2("common.resetText")
      }, props.resetButtonOptions);
    });
    const getSubmitBtnOptions = computed(() => {
      return Object.assign({
        text: t2("common.queryText")
      }, props.submitButtonOptions);
    });
    function toggleAdvanced() {
      emit("toggle-advanced");
    }
    return __spreadValues({
      t: t2,
      actionColOpt,
      getResetBtnOptions,
      getSubmitBtnOptions,
      toggleAdvanced
    }, useFormContext());
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  const _component_BasicArrow = resolveComponent("BasicArrow");
  const _component_FormItem = resolveComponent("FormItem");
  const _component_a_col = resolveComponent("a-col");
  return _ctx.showActionButtonGroup ? (openBlock(), createBlock(_component_a_col, normalizeProps(mergeProps({ key: 0 }, _ctx.actionColOpt)), {
    default: withCtx(() => [
      createBaseVNode("div", {
        style: normalizeStyle([{ "width": "100%" }, { textAlign: _ctx.actionColOpt.style.textAlign }])
      }, [
        createVNode(_component_FormItem, null, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "resetBefore"),
            _ctx.showResetButton ? (openBlock(), createBlock(_component_Button, mergeProps({
              key: 0,
              type: "default",
              class: "mr-2"
            }, _ctx.getResetBtnOptions, { onClick: _ctx.resetAction }), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.getResetBtnOptions.text), 1)
              ]),
              _: 1
            }, 16, ["onClick"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "submitBefore"),
            _ctx.showSubmitButton ? (openBlock(), createBlock(_component_Button, mergeProps({
              key: 1,
              type: "primary",
              class: "mr-2"
            }, _ctx.getSubmitBtnOptions, { onClick: _ctx.submitAction }), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.getSubmitBtnOptions.text), 1)
              ]),
              _: 1
            }, 16, ["onClick"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "advanceBefore"),
            _ctx.showAdvancedButton && !_ctx.hideAdvanceBtn ? (openBlock(), createBlock(_component_Button, {
              key: 2,
              type: "link",
              size: "small",
              onClick: _ctx.toggleAdvanced
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.isAdvanced ? _ctx.t("component.form.putAway") : _ctx.t("component.form.unfold")) + " ", 1),
                createVNode(_component_BasicArrow, {
                  class: "ml-1",
                  expand: !_ctx.isAdvanced,
                  up: ""
                }, null, 8, ["expand"])
              ]),
              _: 1
            }, 8, ["onClick"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "advanceAfter")
          ]),
          _: 3
        })
      ], 4)
    ]),
    _: 3
  }, 16)) : createCommentVNode("", true);
}
var FormAction = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
function useFormValues({
  defaultValueRef,
  getSchema,
  formModel,
  getProps
}) {
  function handleFormValues(values) {
    var _a, _b;
    if (!isObject(values)) {
      return {};
    }
    const res = {};
    for (const item of Object.entries(values)) {
      let [, value] = item;
      const [key2] = item;
      if (!key2 || isArray(value) && value.length === 0 || isFunction(value)) {
        continue;
      }
      const transformDateFunc = unref(getProps).transformDateFunc;
      if (isObject(value)) {
        value = transformDateFunc == null ? void 0 : transformDateFunc(value);
      }
      if (isArray(value) && ((_a = value[0]) == null ? void 0 : _a.format) && ((_b = value[1]) == null ? void 0 : _b.format)) {
        value = value.map((item2) => transformDateFunc == null ? void 0 : transformDateFunc(item2));
      }
      if (isString(value)) {
        value = value.trim();
      }
      set(res, key2, value);
    }
    return handleRangeTimeValue(res);
  }
  function handleRangeTimeValue(values) {
    const fieldMapToTime = unref(getProps).fieldMapToTime;
    if (!fieldMapToTime || !Array.isArray(fieldMapToTime)) {
      return values;
    }
    for (const [field, [startTimeKey, endTimeKey], format = "YYYY-MM-DD"] of fieldMapToTime) {
      if (!field || !startTimeKey || !endTimeKey || !values[field]) {
        continue;
      }
      const [startTime, endTime] = values[field];
      values[startTimeKey] = dateUtil(startTime).format(format);
      values[endTimeKey] = dateUtil(endTime).format(format);
      Reflect.deleteProperty(values, field);
    }
    return values;
  }
  function initDefault() {
    const schemas = unref(getSchema);
    const obj = {};
    schemas.forEach((item) => {
      const { defaultValue } = item;
      if (!isNullOrUnDef(defaultValue)) {
        obj[item.field] = defaultValue;
        formModel[item.field] = defaultValue;
      }
    });
    defaultValueRef.value = obj;
  }
  return { handleFormValues, initDefault };
}
const BASIC_COL_LEN = 24;
function useAdvanced({
  advanceState,
  emit,
  getProps,
  getSchema,
  formModel,
  defaultValueRef
}) {
  const { realWidthRef, screenEnum, screenRef } = useBreakpoint();
  const getEmptySpan = computed(() => {
    if (!advanceState.isAdvanced) {
      return 0;
    }
    const emptySpan = unref(getProps).emptySpan || 0;
    if (isNumber(emptySpan)) {
      return emptySpan;
    }
    if (isObject(emptySpan)) {
      const { span = 0 } = emptySpan;
      const screen = unref(screenRef);
      const screenSpan = emptySpan[screen.toLowerCase()];
      return screenSpan || span || 0;
    }
    return 0;
  });
  const debounceUpdateAdvanced = useDebounceFn(updateAdvanced, 30);
  watch([() => unref(getSchema), () => advanceState.isAdvanced, () => unref(realWidthRef)], () => {
    const { showAdvancedButton } = unref(getProps);
    if (showAdvancedButton) {
      debounceUpdateAdvanced();
    }
  }, { immediate: true });
  function getAdvanced(itemCol, itemColSum = 0, isLastAction = false) {
    const width = unref(realWidthRef);
    const mdWidth = parseInt(itemCol.md) || parseInt(itemCol.xs) || parseInt(itemCol.sm) || itemCol.span || BASIC_COL_LEN;
    const lgWidth = parseInt(itemCol.lg) || mdWidth;
    const xlWidth = parseInt(itemCol.xl) || lgWidth;
    const xxlWidth = parseInt(itemCol.xxl) || xlWidth;
    if (width <= screenEnum.LG) {
      itemColSum += mdWidth;
    } else if (width < screenEnum.XL) {
      itemColSum += lgWidth;
    } else if (width < screenEnum.XXL) {
      itemColSum += xlWidth;
    } else {
      itemColSum += xxlWidth;
    }
    if (isLastAction) {
      advanceState.hideAdvanceBtn = false;
      if (itemColSum <= BASIC_COL_LEN * 2) {
        advanceState.hideAdvanceBtn = true;
        advanceState.isAdvanced = true;
      } else if (itemColSum > BASIC_COL_LEN * 2 && itemColSum <= BASIC_COL_LEN * (unref(getProps).autoAdvancedLine || 3)) {
        advanceState.hideAdvanceBtn = false;
      } else if (!advanceState.isLoad) {
        advanceState.isLoad = true;
        advanceState.isAdvanced = !advanceState.isAdvanced;
      }
      return { isAdvanced: advanceState.isAdvanced, itemColSum };
    }
    if (itemColSum > BASIC_COL_LEN * (unref(getProps).alwaysShowLines || 1)) {
      return { isAdvanced: advanceState.isAdvanced, itemColSum };
    } else {
      return { isAdvanced: true, itemColSum };
    }
  }
  function updateAdvanced() {
    let itemColSum = 0;
    let realItemColSum = 0;
    const { baseColProps = {} } = unref(getProps);
    for (const schema of unref(getSchema)) {
      const { show, colProps } = schema;
      let isShow = true;
      if (isBoolean(show)) {
        isShow = show;
      }
      if (isFunction(show)) {
        isShow = show({
          schema,
          model: formModel,
          field: schema.field,
          values: __spreadValues(__spreadValues({}, unref(defaultValueRef)), formModel)
        });
      }
      if (isShow && (colProps || baseColProps)) {
        const { itemColSum: sum, isAdvanced } = getAdvanced(__spreadValues(__spreadValues({}, baseColProps), colProps), itemColSum);
        itemColSum = sum || 0;
        if (isAdvanced) {
          realItemColSum = itemColSum;
        }
        schema.isAdvanced = isAdvanced;
      }
    }
    advanceState.actionSpan = realItemColSum % BASIC_COL_LEN + unref(getEmptySpan);
    getAdvanced(unref(getProps).actionColOptions || { span: BASIC_COL_LEN }, itemColSum, true);
    emit("advanced-change");
  }
  function handleToggleAdvanced() {
    advanceState.isAdvanced = !advanceState.isAdvanced;
  }
  return { handleToggleAdvanced };
}
function useFormEvents({
  emit,
  getProps,
  formModel,
  getSchema,
  defaultValueRef,
  formElRef,
  schemaRef,
  handleFormValues
}) {
  async function resetFields() {
    const { resetFunc, submitOnReset } = unref(getProps);
    resetFunc && isFunction(resetFunc) && await resetFunc();
    const formEl = unref(formElRef);
    if (!formEl)
      return;
    Object.keys(formModel).forEach((key2) => {
      const schema = unref(getSchema).find((item) => item.field === key2);
      const isInput = (schema == null ? void 0 : schema.component) && defaultValueComponents.includes(schema.component);
      formModel[key2] = isInput ? defaultValueRef.value[key2] || "" : defaultValueRef.value[key2];
    });
    nextTick(() => clearValidate());
    emit("reset", toRaw(formModel));
    submitOnReset && handleSubmit();
  }
  async function setFieldsValue(values) {
    const fields = unref(getSchema).map((item) => item.field).filter(Boolean);
    const validKeys = [];
    Object.keys(values).forEach((key2) => {
      const schema = unref(getSchema).find((item) => item.field === key2);
      let value = values[key2];
      const hasKey = Reflect.has(values, key2);
      value = handleInputNumberValue(schema == null ? void 0 : schema.component, value);
      if (hasKey && fields.includes(key2)) {
        if (itemIsDateType(key2)) {
          if (Array.isArray(value)) {
            const arr = [];
            for (const ele of value) {
              arr.push(ele ? dateUtil(ele) : null);
            }
            formModel[key2] = arr;
          } else {
            const { componentProps } = schema || {};
            let _props = componentProps;
            if (typeof componentProps === "function") {
              _props = _props({ formModel });
            }
            formModel[key2] = value ? (_props == null ? void 0 : _props.valueFormat) ? value : dateUtil(value) : null;
          }
        } else {
          formModel[key2] = value;
        }
        validKeys.push(key2);
      }
    });
    validateFields(validKeys).catch((_) => {
    });
  }
  async function removeSchemaByFiled(fields) {
    const schemaList = cloneDeep(unref(getSchema));
    if (!fields) {
      return;
    }
    let fieldList = isString(fields) ? [fields] : fields;
    if (isString(fields)) {
      fieldList = [fields];
    }
    for (const field of fieldList) {
      _removeSchemaByFiled(field, schemaList);
    }
    schemaRef.value = schemaList;
  }
  function _removeSchemaByFiled(field, schemaList) {
    if (isString(field)) {
      const index2 = schemaList.findIndex((schema) => schema.field === field);
      if (index2 !== -1) {
        delete formModel[field];
        schemaList.splice(index2, 1);
      }
    }
  }
  async function appendSchemaByField(schema, prefixField, first = false) {
    const schemaList = cloneDeep(unref(getSchema));
    const index2 = schemaList.findIndex((schema2) => schema2.field === prefixField);
    if (!prefixField || index2 === -1 || first) {
      first ? schemaList.unshift(schema) : schemaList.push(schema);
      schemaRef.value = schemaList;
      return;
    }
    if (index2 !== -1) {
      schemaList.splice(index2 + 1, 0, schema);
    }
    schemaRef.value = schemaList;
  }
  async function resetSchema(data) {
    let updateData = [];
    if (isObject(data)) {
      updateData.push(data);
    }
    if (isArray(data)) {
      updateData = [...data];
    }
    const hasField = updateData.every((item) => item.component === "Divider" || Reflect.has(item, "field") && item.field);
    if (!hasField) {
      error("All children of the form Schema array that need to be updated must contain the `field` field");
      return;
    }
    schemaRef.value = updateData;
  }
  async function updateSchema(data) {
    let updateData = [];
    if (isObject(data)) {
      updateData.push(data);
    }
    if (isArray(data)) {
      updateData = [...data];
    }
    const hasField = updateData.every((item) => item.component === "Divider" || Reflect.has(item, "field") && item.field);
    if (!hasField) {
      error("All children of the form Schema array that need to be updated must contain the `field` field");
      return;
    }
    const schema = [];
    updateData.forEach((item) => {
      unref(getSchema).forEach((val) => {
        if (val.field === item.field) {
          const newSchema = deepMerge(val, item);
          schema.push(newSchema);
        } else {
          schema.push(val);
        }
      });
    });
    schemaRef.value = uniqBy(schema, "field");
  }
  function getFieldsValue() {
    const formEl = unref(formElRef);
    if (!formEl)
      return {};
    return handleFormValues(toRaw(unref(formModel)));
  }
  function itemIsDateType(key2) {
    return unref(getSchema).some((item) => {
      return item.field === key2 ? dateItemType.includes(item.component) : false;
    });
  }
  async function validateFields(nameList) {
    var _a;
    return (_a = unref(formElRef)) == null ? void 0 : _a.validateFields(nameList);
  }
  async function validate(nameList) {
    var _a;
    return await ((_a = unref(formElRef)) == null ? void 0 : _a.validate(nameList));
  }
  async function clearValidate(name) {
    var _a;
    await ((_a = unref(formElRef)) == null ? void 0 : _a.clearValidate(name));
  }
  async function scrollToField(name, options) {
    var _a;
    await ((_a = unref(formElRef)) == null ? void 0 : _a.scrollToField(name, options));
  }
  async function handleSubmit(e) {
    e && e.preventDefault();
    const { submitFunc } = unref(getProps);
    if (submitFunc && isFunction(submitFunc)) {
      await submitFunc();
      return;
    }
    const formEl = unref(formElRef);
    if (!formEl)
      return;
    try {
      const values = await validate();
      const res = handleFormValues(values);
      emit("submit", res);
    } catch (error2) {
      throw new Error(error2);
    }
  }
  return {
    handleSubmit,
    clearValidate,
    validate,
    validateFields,
    getFieldsValue,
    updateSchema,
    resetSchema,
    appendSchemaByField,
    removeSchemaByFiled,
    resetFields,
    setFieldsValue,
    scrollToField
  };
}
async function useAutoFocus({
  getSchema,
  getProps,
  formElRef,
  isInitedDefault
}) {
  watchEffect(async () => {
    if (unref(isInitedDefault) || !unref(getProps).autoFocusFirstItem) {
      return;
    }
    await nextTick();
    const schemas = unref(getSchema);
    const formEl = unref(formElRef);
    const el = formEl == null ? void 0 : formEl.$el;
    if (!formEl || !el || !schemas || schemas.length === 0) {
      return;
    }
    const firstItem = schemas[0];
    if (!firstItem.component.includes("Input")) {
      return;
    }
    const inputEl = el.querySelector(".ant-row:first-child input");
    if (!inputEl)
      return;
    inputEl == null ? void 0 : inputEl.focus();
  });
}
const basicProps = {
  model: {
    type: Object,
    default: {}
  },
  labelWidth: {
    type: [Number, String],
    default: 0
  },
  fieldMapToTime: {
    type: Array,
    default: () => []
  },
  compact: propTypes.bool,
  schemas: {
    type: [Array],
    default: () => []
  },
  mergeDynamicData: {
    type: Object,
    default: null
  },
  baseRowStyle: {
    type: Object
  },
  baseColProps: {
    type: Object
  },
  autoSetPlaceHolder: propTypes.bool.def(true),
  autoSubmitOnEnter: propTypes.bool.def(false),
  submitOnReset: propTypes.bool,
  submitOnChange: propTypes.bool,
  size: propTypes.oneOf(["default", "small", "large"]).def("default"),
  disabled: propTypes.bool,
  emptySpan: {
    type: [Number, Object],
    default: 0
  },
  showAdvancedButton: propTypes.bool,
  transformDateFunc: {
    type: Function,
    default: (date) => {
      var _a, _b;
      return (_b = (_a = date == null ? void 0 : date.format) == null ? void 0 : _a.call(date, "YYYY-MM-DD HH:mm:ss")) != null ? _b : date;
    }
  },
  rulesMessageJoinLabel: propTypes.bool.def(true),
  autoAdvancedLine: propTypes.number.def(3),
  alwaysShowLines: propTypes.number.def(1),
  showActionButtonGroup: propTypes.bool.def(true),
  actionColOptions: Object,
  showResetButton: propTypes.bool.def(true),
  autoFocusFirstItem: propTypes.bool,
  resetButtonOptions: Object,
  showSubmitButton: propTypes.bool.def(true),
  submitButtonOptions: Object,
  resetFunc: Function,
  submitFunc: Function,
  hideRequiredMark: propTypes.bool,
  labelCol: Object,
  layout: propTypes.oneOf(["horizontal", "vertical", "inline"]).def("horizontal"),
  tableAction: {
    type: Object
  },
  wrapperCol: Object,
  colon: propTypes.bool,
  labelAlign: propTypes.string,
  rowProps: Object
};
var BasicForm_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "BasicForm",
  components: { FormItem: _sfc_main$2, Form, Row, FormAction },
  props: basicProps,
  emits: ["advanced-change", "reset", "submit", "register"],
  setup(props, { emit, attrs }) {
    const formModel = reactive({});
    const modalFn = useModalContext();
    const advanceState = reactive({
      isAdvanced: true,
      hideAdvanceBtn: false,
      isLoad: false,
      actionSpan: 6
    });
    const defaultValueRef = ref({});
    const isInitedDefaultRef = ref(false);
    const propsRef = ref({});
    const schemaRef = ref(null);
    const formElRef = ref(null);
    const { prefixCls } = useDesign("basic-form");
    const getProps = computed(() => {
      return __spreadValues(__spreadValues({}, props), unref(propsRef));
    });
    const getFormClass = computed(() => {
      return [
        prefixCls,
        {
          [`${prefixCls}--compact`]: unref(getProps).compact
        }
      ];
    });
    const getRow = computed(() => {
      const { baseRowStyle = {}, rowProps } = unref(getProps);
      return __spreadValues({
        style: baseRowStyle
      }, rowProps);
    });
    const getBindValue = computed(() => __spreadValues(__spreadValues(__spreadValues({}, attrs), props), unref(getProps)));
    const getSchema = computed(() => {
      const schemas = unref(schemaRef) || unref(getProps).schemas;
      for (const schema of schemas) {
        const { defaultValue, component } = schema;
        if (defaultValue && dateItemType.includes(component)) {
          if (!Array.isArray(defaultValue)) {
            schema.defaultValue = dateUtil(defaultValue);
          } else {
            const def = [];
            defaultValue.forEach((item) => {
              def.push(dateUtil(item));
            });
            schema.defaultValue = def;
          }
        }
      }
      if (unref(getProps).showAdvancedButton) {
        return schemas.filter((schema) => schema.component !== "Divider");
      } else {
        return schemas;
      }
    });
    const { handleToggleAdvanced } = useAdvanced({
      advanceState,
      emit,
      getProps,
      getSchema,
      formModel,
      defaultValueRef
    });
    const { handleFormValues, initDefault } = useFormValues({
      getProps,
      defaultValueRef,
      getSchema,
      formModel
    });
    useAutoFocus({
      getSchema,
      getProps,
      isInitedDefault: isInitedDefaultRef,
      formElRef
    });
    const {
      handleSubmit,
      setFieldsValue,
      clearValidate,
      validate,
      validateFields,
      getFieldsValue,
      updateSchema,
      resetSchema,
      appendSchemaByField,
      removeSchemaByFiled,
      resetFields,
      scrollToField
    } = useFormEvents({
      emit,
      getProps,
      formModel,
      getSchema,
      defaultValueRef,
      formElRef,
      schemaRef,
      handleFormValues
    });
    createFormContext({
      resetAction: resetFields,
      submitAction: handleSubmit
    });
    watch(() => unref(getProps).model, () => {
      const { model } = unref(getProps);
      if (!model)
        return;
      setFieldsValue(model);
    }, {
      immediate: true
    });
    watch(() => unref(getProps).schemas, (schemas) => {
      resetSchema(schemas != null ? schemas : []);
    });
    watch(() => getSchema.value, (schema) => {
      nextTick(() => {
        var _a;
        (_a = modalFn == null ? void 0 : modalFn.redoModalHeight) == null ? void 0 : _a.call(modalFn);
      });
      if (unref(isInitedDefaultRef)) {
        return;
      }
      if (schema == null ? void 0 : schema.length) {
        initDefault();
        isInitedDefaultRef.value = true;
      }
    });
    watch(() => formModel, useDebounceFn(() => {
      unref(getProps).submitOnChange && handleSubmit();
    }, 300), { deep: true });
    async function setProps(formProps) {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps);
    }
    function setFormModel(key2, value) {
      formModel[key2] = value;
      const { validateTrigger } = unref(getBindValue);
      if (!validateTrigger || validateTrigger === "change") {
        validateFields([key2]).catch((_) => {
        });
      }
    }
    function handleEnterPress(e) {
      const { autoSubmitOnEnter } = unref(getProps);
      if (!autoSubmitOnEnter)
        return;
      if (e.key === "Enter" && e.target && e.target instanceof HTMLElement) {
        const target = e.target;
        if (target && target.tagName && target.tagName.toUpperCase() == "INPUT") {
          handleSubmit();
        }
      }
    }
    const formActionType = {
      getFieldsValue,
      setFieldsValue,
      resetFields,
      updateSchema,
      resetSchema,
      setProps,
      removeSchemaByFiled,
      appendSchemaByField,
      clearValidate,
      validateFields,
      validate,
      submit: handleSubmit,
      scrollToField
    };
    onMounted(() => {
      initDefault();
      emit("register", formActionType);
    });
    return __spreadValues({
      getBindValue,
      handleToggleAdvanced,
      handleEnterPress,
      formModel,
      defaultValueRef,
      advanceState,
      getRow,
      getProps,
      formElRef,
      getSchema,
      formActionType,
      setFormModel,
      getFormClass,
      getFormActionBindProps: computed(() => __spreadValues(__spreadValues({}, getProps.value), advanceState))
    }, formActionType);
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormItem = resolveComponent("FormItem");
  const _component_FormAction = resolveComponent("FormAction");
  const _component_Row = resolveComponent("Row");
  const _component_Form = resolveComponent("Form");
  return openBlock(), createBlock(_component_Form, mergeProps(_ctx.getBindValue, {
    class: _ctx.getFormClass,
    ref: "formElRef",
    model: _ctx.formModel,
    onKeypress: withKeys(_ctx.handleEnterPress, ["enter"])
  }), {
    default: withCtx(() => [
      createVNode(_component_Row, normalizeProps(guardReactiveProps(_ctx.getRow)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "formHeader"),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getSchema, (schema) => {
            return openBlock(), createBlock(_component_FormItem, {
              key: schema.field,
              tableAction: _ctx.tableAction,
              formActionType: _ctx.formActionType,
              schema,
              formProps: _ctx.getProps,
              allDefaultValues: _ctx.defaultValueRef,
              formModel: _ctx.formModel,
              setFormModel: _ctx.setFormModel
            }, createSlots({ _: 2 }, [
              renderList(Object.keys(_ctx.$slots), (item) => {
                return {
                  name: item,
                  fn: withCtx((data) => [
                    renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
                  ])
                };
              })
            ]), 1032, ["tableAction", "formActionType", "schema", "formProps", "allDefaultValues", "formModel", "setFormModel"]);
          }), 128)),
          createVNode(_component_FormAction, mergeProps(_ctx.getFormActionBindProps, { onToggleAdvanced: _ctx.handleToggleAdvanced }), createSlots({ _: 2 }, [
            renderList(["resetBefore", "submitBefore", "advanceBefore", "advanceAfter"], (item) => {
              return {
                name: item,
                fn: withCtx((data) => [
                  renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
                ])
              };
            })
          ]), 1040, ["onToggleAdvanced"]),
          renderSlot(_ctx.$slots, "formFooter")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  }, 16, ["class", "model", "onKeypress"]);
}
var BasicForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ApiSelect as A, BasicForm as B, DEFAULT_ALIGN as D, FETCH_SETTING as F, INDEX_COLUMN_FLAG as I, PAGE_SIZE as P, ROW_KEY as R, TableAction as T, PAGE_SIZE_OPTIONS as a, ApiTreeSelect as b, ACTION_COLUMN_FLAG as c, DEFAULT_SORT_FN as d, DEFAULT_FILTER_FN as e, DEFAULT_SIZE as f, createTableContext as g, BasicUpload as h, useTableContext as u };
