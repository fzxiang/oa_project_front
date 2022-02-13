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
import { B as defineComponent, bo as FormOutlined, a1 as resolveComponent, D as openBlock, F as createElementBlock, a8 as renderSlot, af as createTextVNode, K as toDisplayString, w as createVNode, j as computed, a2 as createBlock, a7 as withCtx, L as normalizeClass, ae as createCommentVNode, ac as Fragment, r as ref, T as watch, u as unref, bp as LeftOutlined, bq as RightOutlined, ap as Input, br as InputNumber, bb as Select, bs as Switch, b2 as Checkbox, bt as DatePicker, bu as TimePicker, A as h, ar as Popover, bv as CloseOutlined, bw as CheckOutlined, aQ as Spin, o as omit, an as watchEffect, a0 as nextTick, t as toRaw, d as pick, s as set, bh as resolveDirective, G as withDirectives, H as vShow, J as createBaseVNode, a5 as mergeProps, n as cloneDeep, b4 as isEqual, Q as reactive, bx as merge, by as get, $ as onMounted, V as useDebounceFn, bz as SettingOutlined, aa as Tooltip, bA as DragOutlined, b3 as Divider, X as toRefs, aq as renderList, bB as ColumnHeightOutlined, aC as Dropdown, aB as Menu, bj as RedoOutlined, bc as FullscreenExitOutlined, bd as FullscreenOutlined, be as useFullscreen, bC as Table, P as inject, aE as createSlots, aD as normalizeProps, aU as guardReactiveProps, bD as Image, bE as Badge, Y as normalizeStyle } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 */import { P as PAGE_SIZE, a as PAGE_SIZE_OPTIONS, A as ApiSelect, b as ApiTreeSelect, u as useTableContext, I as INDEX_COLUMN_FLAG, c as ACTION_COLUMN_FLAG, D as DEFAULT_ALIGN, R as ROW_KEY, F as FETCH_SETTING, d as DEFAULT_SORT_FN, e as DEFAULT_FILTER_FN, f as DEFAULT_SIZE, B as BasicForm, g as createTableContext } from "./BasicForm.2d3a56da.js";
import { u as useForm } from "./useForm.b4c80bfe.js";
import { o as onMountedOrActivated, P as PageWrapperFixedHeightKey } from "./index.5258464e.js";
import { _ as _export_sfc, ac as _sfc_main$d, a as useDesign, b as useI18n, B as isBoolean, a2 as ClickOutside, p as propTypes, ad as isNumber, i as isFunction, ae as isArray, j as isString, af as treeToList, ag as usePermission, ah as formatToDate, ai as isMap, r as useTimeoutFn, aj as findNodeAll, ak as getViewportOffset, al as warn, S as ScrollContainer, I as Icon, a9 as isNullAndUnDef, am as getPopupContainer, an as BasicTitle, ao as getSlot, ap as useEventListener } from "./index.bb57ad5a.js";
/* empty css                  *//* empty css                  *//* empty css                 */import { b as buildUUID } from "./uuid.2b29000c.js";
import { u as useWindowSizeFn } from "./useWindowSizeFn.07387e97.js";
import { u as useModalContext } from "./index.fe0d1d3b.js";
/* empty css                 */import Sortable from "./sortable.esm.6bfbf233.js";
/* empty css                  *//* empty css                  */var index = "";
const _sfc_main$c = defineComponent({
  name: "EditTableHeaderIcon",
  components: { FormOutlined },
  props: { title: { type: String, default: "" } }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormOutlined = resolveComponent("FormOutlined");
  return openBlock(), createElementBlock("span", null, [
    renderSlot(_ctx.$slots, "default"),
    createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1),
    createVNode(_component_FormOutlined)
  ]);
}
var EditTableHeaderCell = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
var HeaderCell_vue_vue_type_style_index_0_lang = "";
const _sfc_main$b = defineComponent({
  name: "TableHeaderCell",
  components: {
    EditTableHeaderCell,
    BasicHelp: _sfc_main$d
  },
  props: {
    column: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { prefixCls } = useDesign("basic-table-header-cell");
    const getIsEdit = computed(() => {
      var _a;
      return !!((_a = props.column) == null ? void 0 : _a.edit);
    });
    const getTitle = computed(() => {
      var _a;
      return (_a = props.column) == null ? void 0 : _a.customTitle;
    });
    const getHelpMessage = computed(() => {
      var _a;
      return (_a = props.column) == null ? void 0 : _a.helpMessage;
    });
    return { prefixCls, getIsEdit, getTitle, getHelpMessage };
  }
});
const _hoisted_1$4 = { key: 1 };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EditTableHeaderCell = resolveComponent("EditTableHeaderCell");
  const _component_BasicHelp = resolveComponent("BasicHelp");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.getIsEdit ? (openBlock(), createBlock(_component_EditTableHeaderCell, { key: 0 }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(_ctx.getTitle), 1)
      ]),
      _: 1
    })) : (openBlock(), createElementBlock("span", _hoisted_1$4, toDisplayString(_ctx.getTitle), 1)),
    _ctx.getHelpMessage ? (openBlock(), createBlock(_component_BasicHelp, {
      key: 2,
      text: _ctx.getHelpMessage,
      class: normalizeClass(`${_ctx.prefixCls}__help`)
    }, null, 8, ["text", "class"])) : createCommentVNode("", true)
  ], 64);
}
var HeaderCell = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
function itemRender({
  page,
  type,
  originalElement
}) {
  if (type === "prev") {
    return page === 0 ? null : createVNode(LeftOutlined, null, null);
  } else if (type === "next") {
    return page === 1 ? null : createVNode(RightOutlined, null, null);
  }
  return originalElement;
}
function usePagination(refProps) {
  const {
    t: t2
  } = useI18n();
  const configRef = ref({});
  const show = ref(true);
  watch(() => unref(refProps).pagination, (pagination) => {
    if (!isBoolean(pagination) && pagination) {
      configRef.value = __spreadValues(__spreadValues({}, unref(configRef)), pagination != null ? pagination : {});
    }
  });
  const getPaginationInfo = computed(() => {
    const {
      pagination
    } = unref(refProps);
    if (!unref(show) || isBoolean(pagination) && !pagination) {
      return false;
    }
    return __spreadValues(__spreadValues({
      current: 1,
      pageSize: PAGE_SIZE,
      size: "small",
      defaultPageSize: PAGE_SIZE,
      showTotal: (total) => t2("component.table.total", {
        total
      }),
      showSizeChanger: true,
      pageSizeOptions: PAGE_SIZE_OPTIONS,
      itemRender,
      showQuickJumper: true
    }, isBoolean(pagination) ? {} : pagination), unref(configRef));
  });
  function setPagination(info) {
    const paginationInfo = unref(getPaginationInfo);
    configRef.value = __spreadValues(__spreadValues({}, !isBoolean(paginationInfo) ? paginationInfo : {}), info);
  }
  function getPagination() {
    return unref(getPaginationInfo);
  }
  function getShowPagination() {
    return unref(show);
  }
  async function setShowPagination(flag) {
    show.value = flag;
  }
  return {
    getPagination,
    getPaginationInfo,
    setShowPagination,
    getShowPagination,
    setPagination
  };
}
const componentMap = /* @__PURE__ */ new Map();
componentMap.set("Input", Input);
componentMap.set("InputNumber", InputNumber);
componentMap.set("Select", Select);
componentMap.set("ApiSelect", ApiSelect);
componentMap.set("ApiTreeSelect", ApiTreeSelect);
componentMap.set("Switch", Switch);
componentMap.set("Checkbox", Checkbox);
componentMap.set("DatePicker", DatePicker);
componentMap.set("TimePicker", TimePicker);
const CellComponent = ({
  component = "Input",
  rule = true,
  ruleMessage,
  popoverVisible,
  getPopupContainer: getPopupContainer2
}, { attrs }) => {
  const Comp = componentMap.get(component);
  const DefaultComp = h(Comp, attrs);
  if (!rule) {
    return DefaultComp;
  }
  return h(Popover, __spreadValues({
    overlayClassName: "edit-cell-rule-popover",
    visible: !!popoverVisible
  }, getPopupContainer2 ? { getPopupContainer: getPopupContainer2 } : {}), {
    default: () => DefaultComp,
    content: () => ruleMessage
  });
};
const { t } = useI18n();
function createPlaceholderMessage(component) {
  if (component.includes("Input")) {
    return t("common.inputText");
  }
  if (component.includes("Picker")) {
    return t("common.chooseText");
  }
  if (component.includes("Select") || component.includes("Checkbox") || component.includes("Radio") || component.includes("Switch") || component.includes("DatePicker") || component.includes("TimePicker")) {
    return t("common.chooseText");
  }
  return "";
}
var EditableCell_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = defineComponent({
  name: "EditableCell",
  components: { FormOutlined, CloseOutlined, CheckOutlined, CellComponent, ASpin: Spin },
  directives: {
    clickOutside: ClickOutside
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      default: ""
    },
    record: {
      type: Object
    },
    column: {
      type: Object,
      default: () => ({})
    },
    index: propTypes.number
  },
  setup(props) {
    const table = useTableContext();
    const isEdit = ref(false);
    const elRef = ref();
    const ruleVisible = ref(false);
    const ruleMessage = ref("");
    const optionsRef = ref([]);
    const currentValueRef = ref(props.value);
    const defaultValueRef = ref(props.value);
    const spinning = ref(false);
    const { prefixCls } = useDesign("editable-cell");
    const getComponent = computed(() => {
      var _a;
      return ((_a = props.column) == null ? void 0 : _a.editComponent) || "Input";
    });
    const getRule = computed(() => {
      var _a;
      return (_a = props.column) == null ? void 0 : _a.editRule;
    });
    const getRuleVisible = computed(() => {
      return unref(ruleMessage) && unref(ruleVisible);
    });
    const getIsCheckComp = computed(() => {
      const component = unref(getComponent);
      return ["Checkbox", "Switch"].includes(component);
    });
    const getComponentProps = computed(() => {
      var _a, _b;
      const compProps = (_b = (_a = props.column) == null ? void 0 : _a.editComponentProps) != null ? _b : {};
      const component = unref(getComponent);
      const apiSelectProps = {};
      if (component === "ApiSelect") {
        apiSelectProps.cache = true;
      }
      const isCheckValue = unref(getIsCheckComp);
      const valueField = isCheckValue ? "checked" : "value";
      const val = unref(currentValueRef);
      const value = isCheckValue ? isNumber(val) && isBoolean(val) ? val : !!val : val;
      return __spreadProps(__spreadValues(__spreadValues({
        size: "small",
        getPopupContainer: () => {
          var _a2;
          return (_a2 = unref(table == null ? void 0 : table.wrapRef.value)) != null ? _a2 : document.body;
        },
        getCalendarContainer: () => {
          var _a2;
          return (_a2 = unref(table == null ? void 0 : table.wrapRef.value)) != null ? _a2 : document.body;
        },
        placeholder: createPlaceholderMessage(unref(getComponent))
      }, apiSelectProps), omit(compProps, "onChange")), {
        [valueField]: value
      });
    });
    const getValues = computed(() => {
      var _a, _b;
      const { editComponentProps, editValueMap } = props.column;
      const value = unref(currentValueRef);
      if (editValueMap && isFunction(editValueMap)) {
        return editValueMap(value);
      }
      const component = unref(getComponent);
      if (!component.includes("Select")) {
        return value;
      }
      const options = (_a = editComponentProps == null ? void 0 : editComponentProps.options) != null ? _a : unref(optionsRef) || [];
      const option = options.find((item) => `${item.value}` === `${value}`);
      return (_b = option == null ? void 0 : option.label) != null ? _b : value;
    });
    const getWrapperStyle = computed(() => {
      if (unref(getIsCheckComp) || unref(getRowEditable)) {
        return {};
      }
      return {
        width: "calc(100% - 48px)"
      };
    });
    const getWrapperClass = computed(() => {
      const { align = "center" } = props.column;
      return `edit-cell-align-${align}`;
    });
    const getRowEditable = computed(() => {
      const { editable } = props.record || {};
      return !!editable;
    });
    watchEffect(() => {
      defaultValueRef.value = props.value;
      currentValueRef.value = props.value;
    });
    watchEffect(() => {
      const { editable } = props.column;
      if (isBoolean(editable) || isBoolean(unref(getRowEditable))) {
        isEdit.value = !!editable || unref(getRowEditable);
      }
    });
    function handleEdit() {
      var _a;
      if (unref(getRowEditable) || unref((_a = props.column) == null ? void 0 : _a.editRow))
        return;
      ruleMessage.value = "";
      isEdit.value = true;
      nextTick(() => {
        var _a2;
        const el = unref(elRef);
        (_a2 = el == null ? void 0 : el.focus) == null ? void 0 : _a2.call(el);
      });
    }
    async function handleChange(e) {
      var _a, _b, _c;
      const component = unref(getComponent);
      if (!e) {
        currentValueRef.value = e;
      } else if ((e == null ? void 0 : e.target) && Reflect.has(e.target, "value")) {
        currentValueRef.value = e.target.value;
      } else if (component === "Checkbox") {
        currentValueRef.value = e.target.checked;
      } else if (isString(e) || isBoolean(e) || isNumber(e)) {
        currentValueRef.value = e;
      }
      const onChange = (_b = (_a = props.column) == null ? void 0 : _a.editComponentProps) == null ? void 0 : _b.onChange;
      if (onChange && isFunction(onChange))
        onChange(...arguments);
      (_c = table.emit) == null ? void 0 : _c.call(table, "edit-change", {
        column: props.column,
        value: unref(currentValueRef),
        record: toRaw(props.record)
      });
      handleSubmiRule();
    }
    async function handleSubmiRule() {
      const { column, record } = props;
      const { editRule } = column;
      const currentValue = unref(currentValueRef);
      if (editRule) {
        if (isBoolean(editRule) && !currentValue && !isNumber(currentValue)) {
          ruleVisible.value = true;
          const component = unref(getComponent);
          ruleMessage.value = createPlaceholderMessage(component);
          return false;
        }
        if (isFunction(editRule)) {
          const res = await editRule(currentValue, record);
          if (!!res) {
            ruleMessage.value = res;
            ruleVisible.value = true;
            return false;
          } else {
            ruleMessage.value = "";
            return true;
          }
        }
      }
      ruleMessage.value = "";
      return true;
    }
    async function handleSubmit(needEmit = true, valid = true) {
      var _a;
      if (valid) {
        const isPass = await handleSubmiRule();
        if (!isPass)
          return false;
      }
      const { column, index: index2, record } = props;
      if (!record)
        return false;
      const { key, dataIndex } = column;
      const value = unref(currentValueRef);
      if (!key && !dataIndex)
        return;
      const dataKey = dataIndex || key;
      if (!record.editable) {
        const { getBindValues } = table;
        const { beforeEditSubmit, columns } = unref(getBindValues);
        if (beforeEditSubmit && isFunction(beforeEditSubmit)) {
          spinning.value = true;
          const keys = columns.map((_column) => _column.dataIndex).filter((field) => !!field);
          let result = true;
          try {
            result = await beforeEditSubmit({
              record: pick(record, keys),
              index: index2,
              key,
              value
            });
          } catch (e) {
            result = false;
          } finally {
            spinning.value = false;
          }
          if (result === false) {
            return;
          }
        }
      }
      set(record, dataKey, value);
      needEmit && ((_a = table.emit) == null ? void 0 : _a.call(table, "edit-end", { record, index: index2, key, value }));
      isEdit.value = false;
    }
    async function handleEnter() {
      var _a;
      if ((_a = props.column) == null ? void 0 : _a.editRow) {
        return;
      }
      handleSubmit();
    }
    function handleSubmitClick() {
      handleSubmit();
    }
    function handleCancel() {
      var _a;
      isEdit.value = false;
      currentValueRef.value = defaultValueRef.value;
      const { column, index: index2, record } = props;
      const { key, dataIndex } = column;
      (_a = table.emit) == null ? void 0 : _a.call(table, "edit-cancel", {
        record,
        index: index2,
        key: dataIndex || key,
        value: unref(currentValueRef)
      });
    }
    function onClickOutside() {
      var _a;
      if (((_a = props.column) == null ? void 0 : _a.editable) || unref(getRowEditable)) {
        return;
      }
      const component = unref(getComponent);
      if (component.includes("Input")) {
        handleCancel();
      }
    }
    function handleOptionsChange(options) {
      var _a, _b;
      const { replaceFields } = (_b = (_a = props.column) == null ? void 0 : _a.editComponentProps) != null ? _b : {};
      const component = unref(getComponent);
      if (component === "ApiTreeSelect") {
        const { title = "title", value = "value", children = "children" } = replaceFields || {};
        let listOptions = treeToList(options, { children });
        listOptions = listOptions.map((item) => {
          return {
            label: item[title],
            value: item[value]
          };
        });
        optionsRef.value = listOptions;
      } else {
        optionsRef.value = options;
      }
    }
    function initCbs(cbs, handle) {
      var _a;
      if (props.record) {
        isArray(props.record[cbs]) ? (_a = props.record[cbs]) == null ? void 0 : _a.push(handle) : props.record[cbs] = [handle];
      }
    }
    if (props.record) {
      initCbs("submitCbs", handleSubmit);
      initCbs("validCbs", handleSubmiRule);
      initCbs("cancelCbs", handleCancel);
      if (props.column.dataIndex) {
        if (!props.record.editValueRefs)
          props.record.editValueRefs = {};
        props.record.editValueRefs[props.column.dataIndex] = currentValueRef;
      }
      props.record.onCancelEdit = () => {
        var _a, _b;
        isArray((_a = props.record) == null ? void 0 : _a.cancelCbs) && ((_b = props.record) == null ? void 0 : _b.cancelCbs.forEach((fn) => fn()));
      };
      props.record.onSubmitEdit = async () => {
        var _a, _b, _c, _d, _e;
        if (isArray((_a = props.record) == null ? void 0 : _a.submitCbs)) {
          if (!((_c = (_b = props.record) == null ? void 0 : _b.onValid) == null ? void 0 : _c.call(_b)))
            return;
          const submitFns = ((_d = props.record) == null ? void 0 : _d.submitCbs) || [];
          submitFns.forEach((fn) => fn(false, false));
          (_e = table.emit) == null ? void 0 : _e.call(table, "edit-row-end");
          return true;
        }
      };
    }
    return {
      isEdit,
      prefixCls,
      handleEdit,
      currentValueRef,
      handleSubmit,
      handleChange,
      handleCancel,
      elRef,
      getComponent,
      getRule,
      onClickOutside,
      ruleMessage,
      getRuleVisible,
      getComponentProps,
      handleOptionsChange,
      getWrapperStyle,
      getWrapperClass,
      getRowEditable,
      getValues,
      handleEnter,
      handleSubmitClick,
      spinning
    };
  }
});
const _hoisted_1$3 = ["title"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_FormOutlined = resolveComponent("FormOutlined");
  const _component_CellComponent = resolveComponent("CellComponent");
  const _component_CheckOutlined = resolveComponent("CheckOutlined");
  const _component_CloseOutlined = resolveComponent("CloseOutlined");
  const _component_a_spin = resolveComponent("a-spin");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    withDirectives(createBaseVNode("div", {
      class: normalizeClass({ [`${_ctx.prefixCls}__normal`]: true, "ellipsis-cell": _ctx.column.ellipsis }),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleEdit && _ctx.handleEdit(...args))
    }, [
      createBaseVNode("div", {
        class: "cell-content",
        title: _ctx.column.ellipsis ? (_a = _ctx.getValues) != null ? _a : "" : ""
      }, toDisplayString(_ctx.getValues || _ctx.getValues === 0 ? _ctx.getValues : "\xA0"), 9, _hoisted_1$3),
      !_ctx.column.editRow ? (openBlock(), createBlock(_component_FormOutlined, {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}__normal-icon`)
      }, null, 8, ["class"])) : createCommentVNode("", true)
    ], 2), [
      [vShow, !_ctx.isEdit]
    ]),
    _ctx.isEdit ? (openBlock(), createBlock(_component_a_spin, {
      key: 0,
      spinning: _ctx.spinning
    }, {
      default: withCtx(() => [
        withDirectives((openBlock(), createElementBlock("div", {
          class: normalizeClass(`${_ctx.prefixCls}__wrapper`)
        }, [
          createVNode(_component_CellComponent, mergeProps(_ctx.getComponentProps, {
            component: _ctx.getComponent,
            style: _ctx.getWrapperStyle,
            popoverVisible: _ctx.getRuleVisible,
            rule: _ctx.getRule,
            ruleMessage: _ctx.ruleMessage,
            class: _ctx.getWrapperClass,
            ref: "elRef",
            onChange: _ctx.handleChange,
            onOptionsChange: _ctx.handleOptionsChange,
            onPressEnter: _ctx.handleEnter
          }), null, 16, ["component", "style", "popoverVisible", "rule", "ruleMessage", "class", "onChange", "onOptionsChange", "onPressEnter"]),
          !_ctx.getRowEditable ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`${_ctx.prefixCls}__action`)
          }, [
            createVNode(_component_CheckOutlined, {
              class: normalizeClass([`${_ctx.prefixCls}__icon`, "mx-2"]),
              onClick: _ctx.handleSubmitClick
            }, null, 8, ["class", "onClick"]),
            createVNode(_component_CloseOutlined, {
              class: normalizeClass(`${_ctx.prefixCls}__icon `),
              onClick: _ctx.handleCancel
            }, null, 8, ["class", "onClick"])
          ], 2)) : createCommentVNode("", true)
        ], 2)), [
          [_directive_click_outside, _ctx.onClickOutside]
        ])
      ]),
      _: 1
    }, 8, ["spinning"])) : createCommentVNode("", true)
  ], 2);
}
var EditableCell = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
function renderEditCell(column) {
  return ({ text: value, record, index: index2 }) => {
    record.onValid = async () => {
      if (isArray(record == null ? void 0 : record.validCbs)) {
        const validFns = ((record == null ? void 0 : record.validCbs) || []).map((fn) => fn());
        const res = await Promise.all(validFns);
        return res.every((item) => !!item);
      } else {
        return false;
      }
    };
    record.onEdit = async (edit, submit = false) => {
      var _a, _b;
      if (!submit) {
        record.editable = edit;
      }
      if (!edit && submit) {
        if (!await record.onValid())
          return false;
        const res = await ((_a = record.onSubmitEdit) == null ? void 0 : _a.call(record));
        if (res) {
          record.editable = false;
          return true;
        }
        return false;
      }
      if (!edit && !submit) {
        (_b = record.onCancelEdit) == null ? void 0 : _b.call(record);
      }
      return true;
    };
    return h(EditableCell, {
      value,
      record,
      column,
      index: index2
    });
  };
}
function handleItem(item, ellipsis) {
  const { key, dataIndex, children } = item;
  item.align = item.align || DEFAULT_ALIGN;
  if (ellipsis) {
    if (!key) {
      item.key = dataIndex;
    }
    if (!isBoolean(item.ellipsis)) {
      Object.assign(item, {
        ellipsis
      });
    }
  }
  if (children && children.length) {
    handleChildren(children, !!ellipsis);
  }
}
function handleChildren(children, ellipsis) {
  if (!children)
    return;
  children.forEach((item) => {
    const { children: children2 } = item;
    handleItem(item, ellipsis);
    handleChildren(children2, ellipsis);
  });
}
function handleIndexColumn(propsRef, getPaginationRef, columns) {
  const { t: t2 } = useI18n();
  const { showIndexColumn, indexColumnProps, isTreeTable } = unref(propsRef);
  let pushIndexColumns = false;
  if (unref(isTreeTable)) {
    return;
  }
  columns.forEach(() => {
    const indIndex = columns.findIndex((column) => column.flag === INDEX_COLUMN_FLAG);
    if (showIndexColumn) {
      pushIndexColumns = indIndex === -1;
    } else if (!showIndexColumn && indIndex !== -1) {
      columns.splice(indIndex, 1);
    }
  });
  if (!pushIndexColumns)
    return;
  const isFixedLeft = columns.some((item) => item.fixed === "left");
  columns.unshift(__spreadValues(__spreadValues({
    flag: INDEX_COLUMN_FLAG,
    width: 50,
    title: t2("component.table.index"),
    align: "center",
    customRender: ({ index: index2 }) => {
      const getPagination = unref(getPaginationRef);
      if (isBoolean(getPagination)) {
        return `${index2 + 1}`;
      }
      const { current = 1, pageSize = PAGE_SIZE } = getPagination;
      return ((current < 1 ? 1 : current) - 1) * pageSize + index2 + 1;
    }
  }, isFixedLeft ? {
    fixed: "left"
  } : {}), indexColumnProps));
}
function handleActionColumn(propsRef, columns) {
  const { actionColumn } = unref(propsRef);
  if (!actionColumn)
    return;
  const hasIndex = columns.findIndex((column) => column.flag === ACTION_COLUMN_FLAG);
  if (hasIndex === -1) {
    columns.push(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, columns[hasIndex]), {
      fixed: "right"
    }), actionColumn), {
      flag: ACTION_COLUMN_FLAG
    }));
  }
}
function useColumns(propsRef, getPaginationRef) {
  const columnsRef = ref(unref(propsRef).columns);
  let cacheColumns = unref(propsRef).columns;
  const getColumnsRef = computed(() => {
    const columns = cloneDeep(unref(columnsRef));
    handleIndexColumn(propsRef, getPaginationRef, columns);
    handleActionColumn(propsRef, columns);
    if (!columns) {
      return [];
    }
    const { ellipsis } = unref(propsRef);
    columns.forEach((item) => {
      const { customRender, slots } = item;
      handleItem(item, Reflect.has(item, "ellipsis") ? !!item.ellipsis : !!ellipsis && !customRender && !slots);
    });
    return columns;
  });
  function isIfShow(column) {
    const ifShow = column.ifShow;
    let isIfShow2 = true;
    if (isBoolean(ifShow)) {
      isIfShow2 = ifShow;
    }
    if (isFunction(ifShow)) {
      isIfShow2 = ifShow(column);
    }
    return isIfShow2;
  }
  const { hasPermission } = usePermission();
  const getViewColumns = computed(() => {
    const viewColumns = sortFixedColumn(unref(getColumnsRef));
    const columns = cloneDeep(viewColumns);
    return columns.filter((column) => {
      return hasPermission(column.auth) && isIfShow(column);
    }).map((column) => {
      const { slots, dataIndex, customRender, format, edit, editRow, flag } = column;
      if (!slots || !(slots == null ? void 0 : slots.title)) {
        column.slots = __spreadValues({ title: `header-${dataIndex}` }, slots || {});
        column.customTitle = column.title;
        Reflect.deleteProperty(column, "title");
      }
      const isDefaultAction = [INDEX_COLUMN_FLAG, ACTION_COLUMN_FLAG].includes(flag);
      if (!customRender && format && !edit && !isDefaultAction) {
        column.customRender = ({ text, record, index: index2 }) => {
          return formatCell(text, format, record, index2);
        };
      }
      if ((edit || editRow) && !isDefaultAction) {
        column.customRender = renderEditCell(column);
      }
      return column;
    });
  });
  watch(() => unref(propsRef).columns, (columns) => {
    var _a;
    columnsRef.value = columns;
    cacheColumns = (_a = columns == null ? void 0 : columns.filter((item) => !item.flag)) != null ? _a : [];
  });
  function setCacheColumnsByField(dataIndex, value) {
    if (!dataIndex || !value) {
      return;
    }
    cacheColumns.forEach((item) => {
      if (item.dataIndex === dataIndex) {
        Object.assign(item, value);
        return;
      }
    });
  }
  function setColumns(columnList) {
    const columns = cloneDeep(columnList);
    if (!isArray(columns))
      return;
    if (columns.length <= 0) {
      columnsRef.value = [];
      return;
    }
    const firstColumn = columns[0];
    const cacheKeys = cacheColumns.map((item) => item.dataIndex);
    if (!isString(firstColumn)) {
      columnsRef.value = columns;
    } else {
      const columnKeys = columns;
      const newColumns = [];
      cacheColumns.forEach((item) => {
        newColumns.push(__spreadProps(__spreadValues({}, item), {
          defaultHidden: !columnKeys.includes(item.dataIndex || item.key)
        }));
      });
      if (!isEqual(cacheKeys, columns)) {
        newColumns.sort((prev, next) => {
          return columnKeys.indexOf(prev.dataIndex) - columnKeys.indexOf(next.dataIndex);
        });
      }
      columnsRef.value = newColumns;
    }
  }
  function getColumns(opt) {
    const { ignoreIndex, ignoreAction, sort } = opt || {};
    let columns = toRaw(unref(getColumnsRef));
    if (ignoreIndex) {
      columns = columns.filter((item) => item.flag !== INDEX_COLUMN_FLAG);
    }
    if (ignoreAction) {
      columns = columns.filter((item) => item.flag !== ACTION_COLUMN_FLAG);
    }
    if (sort) {
      columns = sortFixedColumn(columns);
    }
    return columns;
  }
  function getCacheColumns() {
    return cacheColumns;
  }
  return {
    getColumnsRef,
    getCacheColumns,
    getColumns,
    setColumns,
    getViewColumns,
    setCacheColumnsByField
  };
}
function sortFixedColumn(columns) {
  const fixedLeftColumns = [];
  const fixedRightColumns = [];
  const defColumns = [];
  for (const column of columns) {
    if (column.fixed === "left") {
      fixedLeftColumns.push(column);
      continue;
    }
    if (column.fixed === "right") {
      fixedRightColumns.push(column);
      continue;
    }
    defColumns.push(column);
  }
  return [...fixedLeftColumns, ...defColumns, ...fixedRightColumns].filter((item) => !item.defaultHidden);
}
function formatCell(text, format, record, index2) {
  if (!format) {
    return text;
  }
  if (isFunction(format)) {
    return format(text, record, index2);
  }
  try {
    const DATE_FORMAT_PREFIX = "date|";
    if (isString(format) && format.startsWith(DATE_FORMAT_PREFIX)) {
      const dateFormat = format.replace(DATE_FORMAT_PREFIX, "");
      if (!dateFormat) {
        return text;
      }
      return formatToDate(text, dateFormat);
    }
    if (isMap(format)) {
      return format.get(text);
    }
  } catch (error) {
    return text;
  }
}
function useDataSource(propsRef, {
  getPaginationInfo,
  setPagination,
  setLoading,
  getFieldsValue,
  clearSelectedRowKeys,
  tableData
}, emit) {
  const searchState = reactive({
    sortInfo: {},
    filterInfo: {}
  });
  const dataSourceRef = ref([]);
  const rawDataSourceRef = ref({});
  watchEffect(() => {
    tableData.value = unref(dataSourceRef);
  });
  watch(() => unref(propsRef).dataSource, () => {
    const { dataSource, api } = unref(propsRef);
    !api && dataSource && (dataSourceRef.value = dataSource);
  }, {
    immediate: true
  });
  function handleTableChange(pagination, filters, sorter) {
    const { clearSelectOnPageChange, sortFn, filterFn } = unref(propsRef);
    if (clearSelectOnPageChange) {
      clearSelectedRowKeys();
    }
    setPagination(pagination);
    const params = {};
    if (sorter && isFunction(sortFn)) {
      const sortInfo = sortFn(sorter);
      searchState.sortInfo = sortInfo;
      params.sortInfo = sortInfo;
    }
    if (filters && isFunction(filterFn)) {
      const filterInfo = filterFn(filters);
      searchState.filterInfo = filterInfo;
      params.filterInfo = filterInfo;
    }
    fetch(params);
  }
  function setTableKey(items) {
    if (!items || !Array.isArray(items))
      return;
    items.forEach((item) => {
      if (!item[ROW_KEY]) {
        item[ROW_KEY] = buildUUID();
      }
      if (item.children && item.children.length) {
        setTableKey(item.children);
      }
    });
  }
  const getAutoCreateKey = computed(() => {
    return unref(propsRef).autoCreateKey && !unref(propsRef).rowKey;
  });
  const getRowKey = computed(() => {
    const { rowKey } = unref(propsRef);
    return unref(getAutoCreateKey) ? ROW_KEY : rowKey;
  });
  const getDataSourceRef = computed(() => {
    const dataSource = unref(dataSourceRef);
    if (!dataSource || dataSource.length === 0) {
      return unref(dataSourceRef);
    }
    if (unref(getAutoCreateKey)) {
      const firstItem = dataSource[0];
      const lastItem = dataSource[dataSource.length - 1];
      if (firstItem && lastItem) {
        if (!firstItem[ROW_KEY] || !lastItem[ROW_KEY]) {
          const data = cloneDeep(unref(dataSourceRef));
          data.forEach((item) => {
            if (!item[ROW_KEY]) {
              item[ROW_KEY] = buildUUID();
            }
            if (item.children && item.children.length) {
              setTableKey(item.children);
            }
          });
          dataSourceRef.value = data;
        }
      }
    }
    return unref(dataSourceRef);
  });
  async function updateTableData(index2, key, value) {
    const record = dataSourceRef.value[index2];
    if (record) {
      dataSourceRef.value[index2][key] = value;
    }
    return dataSourceRef.value[index2];
  }
  function updateTableDataRecord(rowKey, record) {
    const row = findTableDataRecord(rowKey);
    if (row) {
      for (const field in row) {
        if (Reflect.has(record, field))
          row[field] = record[field];
      }
      return row;
    }
  }
  function deleteTableDataRecord(rowKey) {
    var _a, _b, _c;
    if (!dataSourceRef.value || dataSourceRef.value.length == 0)
      return;
    const rowKeyName = unref(getRowKey);
    if (!rowKeyName)
      return;
    const rowKeys = !Array.isArray(rowKey) ? [rowKey] : rowKey;
    for (const key of rowKeys) {
      let index2 = dataSourceRef.value.findIndex((row) => {
        let targetKeyName;
        if (typeof rowKeyName === "function") {
          targetKeyName = rowKeyName(row);
        } else {
          targetKeyName = rowKeyName;
        }
        return row[targetKeyName] === key;
      });
      if (index2 >= 0) {
        dataSourceRef.value.splice(index2, 1);
      }
      index2 = (_a = unref(propsRef).dataSource) == null ? void 0 : _a.findIndex((row) => {
        let targetKeyName;
        if (typeof rowKeyName === "function") {
          targetKeyName = rowKeyName(row);
        } else {
          targetKeyName = rowKeyName;
        }
        return row[targetKeyName] === key;
      });
      if (typeof index2 !== "undefined" && index2 !== -1)
        (_b = unref(propsRef).dataSource) == null ? void 0 : _b.splice(index2, 1);
    }
    setPagination({
      total: (_c = unref(propsRef).dataSource) == null ? void 0 : _c.length
    });
  }
  function insertTableDataRecord(record, index2) {
    var _a;
    index2 = index2 != null ? index2 : (_a = dataSourceRef.value) == null ? void 0 : _a.length;
    unref(dataSourceRef).splice(index2, 0, record);
    return unref(dataSourceRef);
  }
  function findTableDataRecord(rowKey) {
    if (!dataSourceRef.value || dataSourceRef.value.length == 0)
      return;
    const rowKeyName = unref(getRowKey);
    if (!rowKeyName)
      return;
    const { childrenColumnName = "children" } = unref(propsRef);
    const findRow = (array) => {
      let ret;
      array.some(function iter(r) {
        if (typeof rowKeyName === "function") {
          if (rowKeyName(r) === rowKey) {
            ret = r;
            return true;
          }
        } else {
          if (Reflect.has(r, rowKeyName) && r[rowKeyName] === rowKey) {
            ret = r;
            return true;
          }
        }
        return r[childrenColumnName] && r[childrenColumnName].some(iter);
      });
      return ret;
    };
    return findRow(dataSourceRef.value);
  }
  async function fetch(opt) {
    var _a, _b, _c;
    const {
      api,
      searchInfo,
      defSort,
      fetchSetting,
      beforeFetch,
      afterFetch,
      useSearchForm,
      pagination
    } = unref(propsRef);
    if (!api || !isFunction(api))
      return;
    try {
      setLoading(true);
      const { pageField, sizeField, listField, totalField } = Object.assign({}, FETCH_SETTING, fetchSetting);
      let pageParams = {};
      const { current = 1, pageSize = PAGE_SIZE } = unref(getPaginationInfo);
      if (isBoolean(pagination) && !pagination || isBoolean(getPaginationInfo)) {
        pageParams = {};
      } else {
        pageParams[pageField] = opt && opt.page || current;
        pageParams[sizeField] = pageSize;
      }
      const { sortInfo = {}, filterInfo } = searchState;
      let params = merge(pageParams, useSearchForm ? getFieldsValue() : {}, searchInfo, (_a = opt == null ? void 0 : opt.searchInfo) != null ? _a : {}, defSort, sortInfo, filterInfo, (_b = opt == null ? void 0 : opt.sortInfo) != null ? _b : {}, (_c = opt == null ? void 0 : opt.filterInfo) != null ? _c : {});
      if (beforeFetch && isFunction(beforeFetch)) {
        params = await beforeFetch(params) || params;
      }
      const res = await api(params);
      rawDataSourceRef.value = res;
      const isArrayResult = Array.isArray(res);
      let resultItems = isArrayResult ? res : get(res, listField);
      const resultTotal = isArrayResult ? 0 : get(res, totalField);
      if (resultTotal) {
        const currentTotalPage = Math.ceil(resultTotal / pageSize);
        if (current > currentTotalPage) {
          setPagination({
            current: currentTotalPage
          });
          return await fetch(opt);
        }
      }
      if (afterFetch && isFunction(afterFetch)) {
        resultItems = await afterFetch(resultItems) || resultItems;
      }
      dataSourceRef.value = resultItems;
      setPagination({
        total: resultTotal || 0
      });
      if (opt && opt.page) {
        setPagination({
          current: opt.page || 1
        });
      }
      emit("fetch-success", {
        items: unref(resultItems),
        total: resultTotal
      });
      return resultItems;
    } catch (error) {
      emit("fetch-error", error);
      dataSourceRef.value = [];
      setPagination({
        total: 0
      });
    } finally {
      setLoading(false);
    }
  }
  function setTableData(values) {
    dataSourceRef.value = values;
  }
  function getDataSource() {
    return getDataSourceRef.value;
  }
  function getRawDataSource() {
    return rawDataSourceRef.value;
  }
  async function reload(opt) {
    return await fetch(opt);
  }
  onMounted(() => {
    useTimeoutFn(() => {
      unref(propsRef).immediate && fetch();
    }, 16);
  });
  return {
    getDataSourceRef,
    getDataSource,
    getRawDataSource,
    getRowKey,
    setTableData,
    getAutoCreateKey,
    fetch,
    reload,
    updateTableData,
    updateTableDataRecord,
    deleteTableDataRecord,
    insertTableDataRecord,
    findTableDataRecord,
    handleTableChange
  };
}
function useLoading(props) {
  const loadingRef = ref(unref(props).loading);
  watch(() => unref(props).loading, (loading) => {
    loadingRef.value = loading;
  });
  const getLoading = computed(() => unref(loadingRef));
  function setLoading(loading) {
    loadingRef.value = loading;
  }
  return { getLoading, setLoading };
}
function useRowSelection(propsRef, tableData, emit) {
  const selectedRowKeysRef = ref([]);
  const selectedRowRef = ref([]);
  const getRowSelectionRef = computed(() => {
    const { rowSelection } = unref(propsRef);
    if (!rowSelection) {
      return null;
    }
    return __spreadValues({
      selectedRowKeys: unref(selectedRowKeysRef),
      onChange: (selectedRowKeys) => {
        setSelectedRowKeys(selectedRowKeys);
      }
    }, omit(rowSelection, ["onChange"]));
  });
  watch(() => {
    var _a;
    return (_a = unref(propsRef).rowSelection) == null ? void 0 : _a.selectedRowKeys;
  }, (v) => {
    setSelectedRowKeys(v);
  });
  watch(() => unref(selectedRowKeysRef), () => {
    nextTick(() => {
      const { rowSelection } = unref(propsRef);
      if (rowSelection) {
        const { onChange } = rowSelection;
        if (onChange && isFunction(onChange))
          onChange(getSelectRowKeys(), getSelectRows());
      }
      emit("selection-change", {
        keys: getSelectRowKeys(),
        rows: getSelectRows()
      });
    });
  }, { deep: true });
  const getAutoCreateKey = computed(() => {
    return unref(propsRef).autoCreateKey && !unref(propsRef).rowKey;
  });
  const getRowKey = computed(() => {
    const { rowKey } = unref(propsRef);
    return unref(getAutoCreateKey) ? ROW_KEY : rowKey;
  });
  function setSelectedRowKeys(rowKeys) {
    var _a;
    selectedRowKeysRef.value = rowKeys;
    const allSelectedRows = findNodeAll(toRaw(unref(tableData)).concat(toRaw(unref(selectedRowRef))), (item) => rowKeys.includes(item[unref(getRowKey)]), {
      children: (_a = propsRef.value.childrenColumnName) != null ? _a : "children"
    });
    const trueSelectedRows = [];
    rowKeys.forEach((key) => {
      const found = allSelectedRows.find((item) => item[unref(getRowKey)] === key);
      found && trueSelectedRows.push(found);
    });
    selectedRowRef.value = trueSelectedRows;
  }
  function setSelectedRows(rows) {
    selectedRowRef.value = rows;
  }
  function clearSelectedRowKeys() {
    selectedRowRef.value = [];
    selectedRowKeysRef.value = [];
  }
  function deleteSelectRowByKey(key) {
    const selectedRowKeys = unref(selectedRowKeysRef);
    const index2 = selectedRowKeys.findIndex((item) => item === key);
    if (index2 !== -1) {
      unref(selectedRowKeysRef).splice(index2, 1);
    }
  }
  function getSelectRowKeys() {
    return unref(selectedRowKeysRef);
  }
  function getSelectRows() {
    return unref(selectedRowRef);
  }
  function getRowSelection() {
    return unref(getRowSelectionRef);
  }
  return {
    getRowSelection,
    getRowSelectionRef,
    getSelectRows,
    getSelectRowKeys,
    setSelectedRowKeys,
    clearSelectedRowKeys,
    deleteSelectRowByKey,
    setSelectedRows
  };
}
function useTableScroll(propsRef, tableElRef, columnsRef, rowSelectionRef, getDataSourceRef, wrapRef, formRef) {
  const tableHeightRef = ref(167);
  const modalFn = useModalContext();
  const debounceRedoHeight = useDebounceFn(redoHeight, 100);
  const getCanResize = computed(() => {
    const { canResize, scroll } = unref(propsRef);
    return canResize && !(scroll || {}).y;
  });
  watch(() => {
    var _a;
    return [unref(getCanResize), (_a = unref(getDataSourceRef)) == null ? void 0 : _a.length];
  }, () => {
    debounceRedoHeight();
  }, {
    flush: "post"
  });
  function redoHeight() {
    nextTick(() => {
      calcTableHeight();
    });
  }
  function setHeight(height) {
    var _a;
    tableHeightRef.value = height;
    (_a = modalFn == null ? void 0 : modalFn.redoModalHeight) == null ? void 0 : _a.call(modalFn);
  }
  let paginationEl;
  let footerEl;
  let bodyEl;
  async function calcTableHeight() {
    var _a, _b, _c, _d, _e, _f, _g;
    const { resizeHeightOffset, pagination, maxHeight, isCanResizeParent, useSearchForm } = unref(propsRef);
    const tableData = unref(getDataSourceRef);
    const table = unref(tableElRef);
    if (!table)
      return;
    const tableEl = table.$el;
    if (!tableEl)
      return;
    if (!bodyEl) {
      bodyEl = tableEl.querySelector(".ant-table-body");
      if (!bodyEl)
        return;
    }
    const hasScrollBarY = bodyEl.scrollHeight > bodyEl.clientHeight;
    const hasScrollBarX = bodyEl.scrollWidth > bodyEl.clientWidth;
    if (hasScrollBarY) {
      tableEl.classList.contains("hide-scrollbar-y") && tableEl.classList.remove("hide-scrollbar-y");
    } else {
      !tableEl.classList.contains("hide-scrollbar-y") && tableEl.classList.add("hide-scrollbar-y");
    }
    if (hasScrollBarX) {
      tableEl.classList.contains("hide-scrollbar-x") && tableEl.classList.remove("hide-scrollbar-x");
    } else {
      !tableEl.classList.contains("hide-scrollbar-x") && tableEl.classList.add("hide-scrollbar-x");
    }
    bodyEl.style.height = "unset";
    if (!unref(getCanResize) || tableData.length === 0)
      return;
    await nextTick();
    const headEl = tableEl.querySelector(".ant-table-thead ");
    if (!headEl)
      return;
    let paddingHeight = 32;
    let paginationHeight = 2;
    if (!isBoolean(pagination)) {
      paginationEl = tableEl.querySelector(".ant-pagination");
      if (paginationEl) {
        const offsetHeight = paginationEl.offsetHeight;
        paginationHeight += offsetHeight || 0;
      } else {
        paginationHeight += 24;
      }
    } else {
      paginationHeight = -8;
    }
    let footerHeight = 0;
    if (!isBoolean(pagination)) {
      if (!footerEl) {
        footerEl = tableEl.querySelector(".ant-table-footer");
      } else {
        const offsetHeight = footerEl.offsetHeight;
        footerHeight += offsetHeight || 0;
      }
    }
    let headerHeight = 0;
    if (headEl) {
      headerHeight = headEl.offsetHeight;
    }
    let bottomIncludeBody = 0;
    if (unref(wrapRef) && isCanResizeParent) {
      const tablePadding = 12;
      const formMargin = 16;
      let paginationMargin = 10;
      const wrapHeight = (_b = (_a = unref(wrapRef)) == null ? void 0 : _a.offsetHeight) != null ? _b : 0;
      let formHeight = (_d = (_c = unref(formRef)) == null ? void 0 : _c.$el.offsetHeight) != null ? _d : 0;
      if (formHeight) {
        formHeight += formMargin;
      }
      if (isBoolean(pagination) && !pagination) {
        paginationMargin = 0;
      }
      if (isBoolean(useSearchForm) && !useSearchForm) {
        paddingHeight = 0;
      }
      const headerCellHeight = (_f = (_e = tableEl.querySelector(".ant-table-title")) == null ? void 0 : _e.offsetHeight) != null ? _f : 0;
      console.log(wrapHeight - formHeight - headerCellHeight - tablePadding - paginationMargin);
      bottomIncludeBody = wrapHeight - formHeight - headerCellHeight - tablePadding - paginationMargin;
    } else {
      bottomIncludeBody = getViewportOffset(headEl).bottomIncludeBody;
    }
    let height = bottomIncludeBody - (resizeHeightOffset || 0) - paddingHeight - paginationHeight - footerHeight - headerHeight;
    height = (_g = height > maxHeight ? maxHeight : height) != null ? _g : height;
    setHeight(height);
    bodyEl.style.height = `${height}px`;
  }
  useWindowSizeFn(calcTableHeight, 280);
  onMountedOrActivated(() => {
    calcTableHeight();
    nextTick(() => {
      debounceRedoHeight();
    });
  });
  const getScrollX = computed(() => {
    var _a, _b;
    let width = 0;
    if (unref(rowSelectionRef)) {
      width += 60;
    }
    const NORMAL_WIDTH = 150;
    const columns = unref(columnsRef).filter((item) => !item.defaultHidden);
    columns.forEach((item) => {
      width += Number.parseInt(item.width) || 0;
    });
    const unsetWidthColumns = columns.filter((item) => !Reflect.has(item, "width"));
    const len = unsetWidthColumns.length;
    if (len !== 0) {
      width += len * NORMAL_WIDTH;
    }
    const table = unref(tableElRef);
    const tableWidth = (_b = (_a = table == null ? void 0 : table.$el) == null ? void 0 : _a.offsetWidth) != null ? _b : 0;
    return tableWidth > width ? "100%" : width;
  });
  const getScrollRef = computed(() => {
    const tableHeight = unref(tableHeightRef);
    const { canResize, scroll } = unref(propsRef);
    return __spreadValues({
      x: unref(getScrollX),
      y: canResize ? tableHeight : null,
      scrollToFirstRowOnChange: false
    }, scroll);
  });
  return { getScrollRef, redoHeight };
}
function useTableScrollTo(tableElRef, getDataSourceRef) {
  let bodyEl;
  async function findTargetRowToScroll(targetRowData) {
    var _a;
    const { id } = targetRowData;
    const targetRowEl = bodyEl == null ? void 0 : bodyEl.querySelector(`[data-row-key="${id}"]`);
    await nextTick();
    bodyEl == null ? void 0 : bodyEl.scrollTo({
      top: (_a = targetRowEl == null ? void 0 : targetRowEl.offsetTop) != null ? _a : 0,
      behavior: "smooth"
    });
  }
  function scrollTo(pos) {
    const table = unref(tableElRef);
    if (!table)
      return;
    const tableEl = table.$el;
    if (!tableEl)
      return;
    if (!bodyEl) {
      bodyEl = tableEl.querySelector(".ant-table-body");
      if (!bodyEl)
        return;
    }
    const dataSource = unref(getDataSourceRef);
    if (!dataSource)
      return;
    if (pos === "top") {
      findTargetRowToScroll(dataSource[0]);
    } else if (pos === "bottom") {
      findTargetRowToScroll(dataSource[dataSource.length - 1]);
    } else {
      const targetRowData = dataSource.find((data) => data.id === pos);
      if (targetRowData) {
        findTargetRowToScroll(targetRowData);
      } else {
        warn(`id: ${pos} doesn't exist`);
      }
    }
  }
  return { scrollTo };
}
function getKey(record, rowKey, autoCreateKey) {
  if (!rowKey || autoCreateKey) {
    return record[ROW_KEY];
  }
  if (isString(rowKey)) {
    return record[rowKey];
  }
  if (isFunction(rowKey)) {
    return record[rowKey(record)];
  }
  return null;
}
function useCustomRow(propsRef, { setSelectedRowKeys, getSelectRowKeys, getAutoCreateKey, clearSelectedRowKeys, emit }) {
  const customRow = (record, index2) => {
    return {
      onClick: (e) => {
        e == null ? void 0 : e.stopPropagation();
        function handleClick() {
          var _a;
          const { rowSelection, rowKey, clickToRowSelect } = unref(propsRef);
          if (!rowSelection || !clickToRowSelect)
            return;
          const keys = getSelectRowKeys();
          const key = getKey(record, rowKey, unref(getAutoCreateKey));
          if (!key)
            return;
          const isCheckbox = rowSelection.type === "checkbox";
          if (isCheckbox) {
            const tr = (_a = e.composedPath) == null ? void 0 : _a.call(e).find((dom) => dom.tagName === "TR");
            if (!tr)
              return;
            const checkBox = tr.querySelector("input[type=checkbox]");
            if (!checkBox || checkBox.hasAttribute("disabled"))
              return;
            if (!keys.includes(key)) {
              setSelectedRowKeys([...keys, key]);
              return;
            }
            const keyIndex = keys.findIndex((item) => item === key);
            keys.splice(keyIndex, 1);
            setSelectedRowKeys(keys);
            return;
          }
          const isRadio = rowSelection.type === "radio";
          if (isRadio) {
            if (!keys.includes(key)) {
              if (keys.length) {
                clearSelectedRowKeys();
              }
              setSelectedRowKeys([key]);
              return;
            }
            clearSelectedRowKeys();
          }
        }
        handleClick();
        emit("row-click", record, index2, e);
      },
      onDblclick: (event) => {
        emit("row-dbClick", record, index2, event);
      },
      onContextmenu: (event) => {
        emit("row-contextmenu", record, index2, event);
      },
      onMouseenter: (event) => {
        emit("row-mouseenter", record, index2, event);
      },
      onMouseleave: (event) => {
        emit("row-mouseleave", record, index2, event);
      }
    };
  };
  return {
    customRow
  };
}
function useTableStyle(propsRef, prefixCls) {
  function getRowClassName(record, index2) {
    const { striped, rowClassName } = unref(propsRef);
    const classNames = [];
    if (striped) {
      classNames.push((index2 || 0) % 2 === 1 ? `${prefixCls}-row__striped` : "");
    }
    if (rowClassName && isFunction(rowClassName)) {
      classNames.push(rowClassName(record, index2));
    }
    return classNames.filter((cls) => !!cls).join(" ");
  }
  return { getRowClassName };
}
var ColumnSetting_vue_vue_type_style_index_0_lang = "";
const _sfc_main$9 = defineComponent({
  name: "ColumnSetting",
  components: {
    SettingOutlined,
    Popover,
    Tooltip,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    DragOutlined,
    ScrollContainer,
    Divider,
    Icon
  },
  emits: ["columns-change"],
  setup(_, { emit, attrs }) {
    const { t: t2 } = useI18n();
    const table = useTableContext();
    const defaultRowSelection = omit(table.getRowSelection(), "selectedRowKeys");
    let inited = false;
    const cachePlainOptions = ref([]);
    const plainOptions = ref([]);
    const plainSortOptions = ref([]);
    const columnListRef = ref(null);
    const state = reactive({
      checkAll: true,
      checkedList: [],
      defaultCheckList: []
    });
    const checkIndex = ref(false);
    const checkSelect = ref(false);
    const { prefixCls } = useDesign("basic-column-setting");
    const getValues = computed(() => {
      return unref(table == null ? void 0 : table.getBindValues) || {};
    });
    watchEffect(() => {
      const columns = table.getColumns();
      if (columns.length && !state.isInit) {
        init();
      }
    });
    watchEffect(() => {
      const values = unref(getValues);
      checkIndex.value = !!values.showIndexColumn;
      checkSelect.value = !!values.rowSelection;
    });
    function getColumns() {
      const ret = [];
      table.getColumns({ ignoreIndex: true, ignoreAction: true }).forEach((item) => {
        ret.push(__spreadValues({
          label: item.title || item.customTitle,
          value: item.dataIndex || item.title
        }, item));
      });
      return ret;
    }
    function init() {
      const columns = getColumns();
      const checkList = table.getColumns({ ignoreAction: true }).map((item) => {
        if (item.defaultHidden) {
          return "";
        }
        return item.dataIndex || item.title;
      }).filter(Boolean);
      if (!plainOptions.value.length) {
        plainOptions.value = columns;
        plainSortOptions.value = columns;
        cachePlainOptions.value = columns;
        state.defaultCheckList = checkList;
      } else {
        unref(plainOptions).forEach((item) => {
          const findItem = columns.find((col) => col.dataIndex === item.dataIndex);
          if (findItem) {
            item.fixed = findItem.fixed;
          }
        });
      }
      state.isInit = true;
      state.checkedList = checkList;
    }
    function onCheckAllChange(e) {
      const checkList = plainOptions.value.map((item) => item.value);
      if (e.target.checked) {
        state.checkedList = checkList;
        setColumns(checkList);
      } else {
        state.checkedList = [];
        setColumns([]);
      }
    }
    const indeterminate = computed(() => {
      const len = plainOptions.value.length;
      let checkedLen = state.checkedList.length;
      unref(checkIndex) && checkedLen--;
      return checkedLen > 0 && checkedLen < len;
    });
    function onChange(checkedList) {
      const len = plainSortOptions.value.length;
      state.checkAll = checkedList.length === len;
      const sortList = unref(plainSortOptions).map((item) => item.value);
      checkedList.sort((prev, next) => {
        return sortList.indexOf(prev) - sortList.indexOf(next);
      });
      setColumns(checkedList);
    }
    let sortable;
    let sortableOrder = [];
    function reset() {
      state.checkedList = [...state.defaultCheckList];
      state.checkAll = true;
      plainOptions.value = unref(cachePlainOptions);
      plainSortOptions.value = unref(cachePlainOptions);
      setColumns(table.getCacheColumns());
      sortable.sort(sortableOrder);
    }
    function handleVisibleChange() {
      if (inited)
        return;
      nextTick(() => {
        const columnListEl = unref(columnListRef);
        if (!columnListEl)
          return;
        const el = columnListEl.$el;
        if (!el)
          return;
        sortable = Sortable.create(unref(el), {
          animation: 500,
          delay: 400,
          delayOnTouchOnly: true,
          handle: ".table-column-drag-icon ",
          onEnd: (evt) => {
            const { oldIndex, newIndex } = evt;
            if (isNullAndUnDef(oldIndex) || isNullAndUnDef(newIndex) || oldIndex === newIndex) {
              return;
            }
            const columns = cloneDeep(plainSortOptions.value);
            if (oldIndex > newIndex) {
              columns.splice(newIndex, 0, columns[oldIndex]);
              columns.splice(oldIndex + 1, 1);
            } else {
              columns.splice(newIndex + 1, 0, columns[oldIndex]);
              columns.splice(oldIndex, 1);
            }
            plainSortOptions.value = columns;
            setColumns(columns);
          }
        });
        sortableOrder = sortable.toArray();
        inited = true;
      });
    }
    function handleIndexCheckChange(e) {
      table.setProps({
        showIndexColumn: e.target.checked
      });
    }
    function handleSelectCheckChange(e) {
      table.setProps({
        rowSelection: e.target.checked ? defaultRowSelection : void 0
      });
    }
    function handleColumnFixed(item, fixed) {
      var _a;
      if (!state.checkedList.includes(item.dataIndex))
        return;
      const columns = getColumns();
      const isFixed = item.fixed === fixed ? false : fixed;
      const index2 = columns.findIndex((col) => col.dataIndex === item.dataIndex);
      if (index2 !== -1) {
        columns[index2].fixed = isFixed;
      }
      item.fixed = isFixed;
      if (isFixed && !item.width) {
        item.width = 100;
      }
      (_a = table.setCacheColumnsByField) == null ? void 0 : _a.call(table, item.dataIndex, { fixed: isFixed });
      setColumns(columns);
    }
    function setColumns(columns) {
      table.setColumns(columns);
      const data = unref(plainSortOptions).map((col) => {
        const visible = columns.findIndex((c) => c === col.value || typeof c !== "string" && c.dataIndex === col.value) !== -1;
        return { dataIndex: col.value, fixed: col.fixed, visible };
      });
      emit("columns-change", data);
    }
    function getPopupContainer$1() {
      return isFunction(attrs.getPopupContainer) ? attrs.getPopupContainer() : getPopupContainer();
    }
    return __spreadProps(__spreadValues({
      t: t2
    }, toRefs(state)), {
      indeterminate,
      onCheckAllChange,
      onChange,
      plainOptions,
      reset,
      prefixCls,
      columnListRef,
      handleVisibleChange,
      checkIndex,
      checkSelect,
      handleIndexCheckChange,
      handleSelectCheckChange,
      defaultRowSelection,
      handleColumnFixed,
      getPopupContainer: getPopupContainer$1
    });
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_a_button = resolveComponent("a-button");
  const _component_DragOutlined = resolveComponent("DragOutlined");
  const _component_Icon = resolveComponent("Icon");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_Divider = resolveComponent("Divider");
  const _component_CheckboxGroup = resolveComponent("CheckboxGroup");
  const _component_ScrollContainer = resolveComponent("ScrollContainer");
  const _component_SettingOutlined = resolveComponent("SettingOutlined");
  const _component_Popover = resolveComponent("Popover");
  return openBlock(), createBlock(_component_Tooltip, { placement: "top" }, {
    title: withCtx(() => [
      createBaseVNode("span", null, toDisplayString(_ctx.t("component.table.settingColumn")), 1)
    ]),
    default: withCtx(() => [
      createVNode(_component_Popover, {
        placement: "bottomLeft",
        trigger: "click",
        onVisibleChange: _ctx.handleVisibleChange,
        overlayClassName: `${_ctx.prefixCls}__cloumn-list`,
        getPopupContainer: _ctx.getPopupContainer
      }, {
        title: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(`${_ctx.prefixCls}__popover-title`)
          }, [
            createVNode(_component_Checkbox, {
              indeterminate: _ctx.indeterminate,
              checked: _ctx.checkAll,
              "onUpdate:checked": _cache[0] || (_cache[0] = ($event) => _ctx.checkAll = $event),
              onChange: _ctx.onCheckAllChange
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.t("component.table.settingColumnShow")), 1)
              ]),
              _: 1
            }, 8, ["indeterminate", "checked", "onChange"]),
            createVNode(_component_Checkbox, {
              checked: _ctx.checkIndex,
              "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => _ctx.checkIndex = $event),
              onChange: _ctx.handleIndexCheckChange
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.t("component.table.settingIndexColumnShow")), 1)
              ]),
              _: 1
            }, 8, ["checked", "onChange"]),
            createVNode(_component_Checkbox, {
              checked: _ctx.checkSelect,
              "onUpdate:checked": _cache[2] || (_cache[2] = ($event) => _ctx.checkSelect = $event),
              onChange: _ctx.handleSelectCheckChange,
              disabled: !_ctx.defaultRowSelection
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.t("component.table.settingSelectColumnShow")), 1)
              ]),
              _: 1
            }, 8, ["checked", "onChange", "disabled"]),
            createVNode(_component_a_button, {
              size: "small",
              type: "link",
              onClick: _ctx.reset
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.t("common.resetText")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])
          ], 2)
        ]),
        content: withCtx(() => [
          createVNode(_component_ScrollContainer, null, {
            default: withCtx(() => [
              createVNode(_component_CheckboxGroup, {
                value: _ctx.checkedList,
                "onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.checkedList = $event),
                onChange: _ctx.onChange,
                ref: "columnListRef"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.plainOptions, (item) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: item.value
                    }, [
                      !("ifShow" in item && !item.ifShow) ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(`${_ctx.prefixCls}__check-item`)
                      }, [
                        createVNode(_component_DragOutlined, { class: "table-column-drag-icon" }),
                        createVNode(_component_Checkbox, {
                          value: item.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]),
                        createVNode(_component_Tooltip, {
                          placement: "bottomLeft",
                          mouseLeaveDelay: 0.4,
                          getPopupContainer: _ctx.getPopupContainer
                        }, {
                          title: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.t("component.table.settingFixedLeft")), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              icon: "line-md:arrow-align-left",
                              class: normalizeClass([
                                `${_ctx.prefixCls}__fixed-left`,
                                {
                                  active: item.fixed === "left",
                                  disabled: !_ctx.checkedList.includes(item.value)
                                }
                              ]),
                              onClick: ($event) => _ctx.handleColumnFixed(item, "left")
                            }, null, 8, ["class", "onClick"])
                          ]),
                          _: 2
                        }, 1032, ["mouseLeaveDelay", "getPopupContainer"]),
                        createVNode(_component_Divider, { type: "vertical" }),
                        createVNode(_component_Tooltip, {
                          placement: "bottomLeft",
                          mouseLeaveDelay: 0.4,
                          getPopupContainer: _ctx.getPopupContainer
                        }, {
                          title: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.t("component.table.settingFixedRight")), 1)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              icon: "line-md:arrow-align-left",
                              class: normalizeClass([
                                `${_ctx.prefixCls}__fixed-right`,
                                {
                                  active: item.fixed === "right",
                                  disabled: !_ctx.checkedList.includes(item.value)
                                }
                              ]),
                              onClick: ($event) => _ctx.handleColumnFixed(item, "right")
                            }, null, 8, ["class", "onClick"])
                          ]),
                          _: 2
                        }, 1032, ["mouseLeaveDelay", "getPopupContainer"])
                      ], 2)) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ]),
                _: 1
              }, 8, ["value", "onChange"])
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(_component_SettingOutlined)
        ]),
        _: 1
      }, 8, ["onVisibleChange", "overlayClassName", "getPopupContainer"])
    ]),
    _: 1
  });
}
var ColumnSetting = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const _sfc_main$8 = defineComponent({
  name: "SizeSetting",
  components: {
    ColumnHeightOutlined,
    Tooltip,
    Dropdown,
    Menu,
    MenuItem: Menu.Item
  },
  setup() {
    const table = useTableContext();
    const { t: t2 } = useI18n();
    const selectedKeysRef = ref([table.getSize()]);
    function handleTitleClick({ key }) {
      selectedKeysRef.value = [key];
      table.setProps({
        size: key
      });
    }
    return {
      handleTitleClick,
      selectedKeysRef,
      getPopupContainer,
      t: t2
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ColumnHeightOutlined = resolveComponent("ColumnHeightOutlined");
  const _component_MenuItem = resolveComponent("MenuItem");
  const _component_Menu = resolveComponent("Menu");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createBlock(_component_Tooltip, { placement: "top" }, {
    title: withCtx(() => [
      createBaseVNode("span", null, toDisplayString(_ctx.t("component.table.settingDens")), 1)
    ]),
    default: withCtx(() => [
      createVNode(_component_Dropdown, {
        placement: "bottomCenter",
        trigger: ["click"],
        getPopupContainer: _ctx.getPopupContainer
      }, {
        overlay: withCtx(() => [
          createVNode(_component_Menu, {
            onClick: _ctx.handleTitleClick,
            selectable: "",
            selectedKeys: _ctx.selectedKeysRef,
            "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => _ctx.selectedKeysRef = $event)
          }, {
            default: withCtx(() => [
              createVNode(_component_MenuItem, { key: "default" }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(_ctx.t("component.table.settingDensDefault")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_MenuItem, { key: "middle" }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(_ctx.t("component.table.settingDensMiddle")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_MenuItem, { key: "small" }, {
                default: withCtx(() => [
                  createBaseVNode("span", null, toDisplayString(_ctx.t("component.table.settingDensSmall")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onClick", "selectedKeys"])
        ]),
        default: withCtx(() => [
          createVNode(_component_ColumnHeightOutlined)
        ]),
        _: 1
      }, 8, ["getPopupContainer"])
    ]),
    _: 1
  });
}
var SizeSetting = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = defineComponent({
  name: "RedoSetting",
  components: {
    RedoOutlined,
    Tooltip
  },
  setup() {
    const table = useTableContext();
    const { t: t2 } = useI18n();
    function redo() {
      table.reload();
    }
    return { redo, t: t2 };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RedoOutlined = resolveComponent("RedoOutlined");
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createBlock(_component_Tooltip, { placement: "top" }, {
    title: withCtx(() => [
      createBaseVNode("span", null, toDisplayString(_ctx.t("common.redo")), 1)
    ]),
    default: withCtx(() => [
      createVNode(_component_RedoOutlined, { onClick: _ctx.redo }, null, 8, ["onClick"])
    ]),
    _: 1
  });
}
var RedoSetting = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = defineComponent({
  name: "FullScreenSetting",
  components: {
    FullscreenExitOutlined,
    FullscreenOutlined,
    Tooltip
  },
  setup() {
    const table = useTableContext();
    const { t: t2 } = useI18n();
    const { toggle, isFullscreen } = useFullscreen(table.wrapRef);
    return {
      toggle,
      isFullscreen,
      t: t2
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FullscreenOutlined = resolveComponent("FullscreenOutlined");
  const _component_FullscreenExitOutlined = resolveComponent("FullscreenExitOutlined");
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createBlock(_component_Tooltip, { placement: "top" }, {
    title: withCtx(() => [
      createBaseVNode("span", null, toDisplayString(_ctx.t("component.table.settingFullScreen")), 1)
    ]),
    default: withCtx(() => [
      !_ctx.isFullscreen ? (openBlock(), createBlock(_component_FullscreenOutlined, {
        key: 0,
        onClick: _ctx.toggle
      }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_FullscreenExitOutlined, {
        key: 1,
        onClick: _ctx.toggle
      }, null, 8, ["onClick"]))
    ]),
    _: 1
  });
}
var FullScreenSetting = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = defineComponent({
  name: "TableSetting",
  components: {
    ColumnSetting,
    SizeSetting,
    RedoSetting,
    FullScreenSetting
  },
  props: {
    setting: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["columns-change"],
  setup(props, { emit }) {
    const { t: t2 } = useI18n();
    const table = useTableContext();
    const getSetting = computed(() => {
      return __spreadValues({
        redo: true,
        size: true,
        setting: true,
        fullScreen: false
      }, props.setting);
    });
    function handleColumnChange(data) {
      emit("columns-change", data);
    }
    function getTableContainer() {
      return table ? unref(table.wrapRef) : document.body;
    }
    return { getSetting, t: t2, handleColumnChange, getTableContainer };
  }
});
const _hoisted_1$2 = { class: "table-settings" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RedoSetting = resolveComponent("RedoSetting");
  const _component_SizeSetting = resolveComponent("SizeSetting");
  const _component_ColumnSetting = resolveComponent("ColumnSetting");
  const _component_FullScreenSetting = resolveComponent("FullScreenSetting");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    _ctx.getSetting.redo ? (openBlock(), createBlock(_component_RedoSetting, {
      key: 0,
      getPopupContainer: _ctx.getTableContainer
    }, null, 8, ["getPopupContainer"])) : createCommentVNode("", true),
    _ctx.getSetting.size ? (openBlock(), createBlock(_component_SizeSetting, {
      key: 1,
      getPopupContainer: _ctx.getTableContainer
    }, null, 8, ["getPopupContainer"])) : createCommentVNode("", true),
    _ctx.getSetting.setting ? (openBlock(), createBlock(_component_ColumnSetting, {
      key: 2,
      onColumnsChange: _ctx.handleColumnChange,
      getPopupContainer: _ctx.getTableContainer
    }, null, 8, ["onColumnsChange", "getPopupContainer"])) : createCommentVNode("", true),
    _ctx.getSetting.fullScreen ? (openBlock(), createBlock(_component_FullScreenSetting, {
      key: 3,
      getPopupContainer: _ctx.getTableContainer
    }, null, 8, ["getPopupContainer"])) : createCommentVNode("", true)
  ]);
}
var TableSettingComponent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var TableTitle_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = defineComponent({
  name: "BasicTableTitle",
  components: { BasicTitle },
  props: {
    title: {
      type: [Function, String]
    },
    getSelectRows: {
      type: Function
    },
    helpMessage: {
      type: [String, Array]
    }
  },
  setup(props) {
    const { prefixCls } = useDesign("basic-table-title");
    const getTitle = computed(() => {
      const { title, getSelectRows = () => {
      } } = props;
      let tit = title;
      if (isFunction(title)) {
        tit = title({
          selectRows: getSelectRows()
        });
      }
      return tit;
    });
    return { getTitle, prefixCls };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTitle = resolveComponent("BasicTitle");
  return _ctx.getTitle ? (openBlock(), createBlock(_component_BasicTitle, {
    key: 0,
    class: normalizeClass(_ctx.prefixCls),
    helpMessage: _ctx.helpMessage
  }, {
    default: withCtx(() => [
      createTextVNode(toDisplayString(_ctx.getTitle), 1)
    ]),
    _: 1
  }, 8, ["class", "helpMessage"])) : createCommentVNode("", true);
}
var TableTitle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var TableHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = defineComponent({
  name: "BasicTableHeader",
  components: {
    Divider,
    TableTitle,
    TableSetting: TableSettingComponent
  },
  props: {
    title: {
      type: [Function, String]
    },
    tableSetting: {
      type: Object
    },
    showTableSetting: {
      type: Boolean
    },
    titleHelpMessage: {
      type: [String, Array],
      default: ""
    }
  },
  emits: ["columns-change"],
  setup(_, { emit }) {
    const { prefixCls } = useDesign("basic-table-header");
    function handleColumnChange(data) {
      emit("columns-change", data);
    }
    return { prefixCls, handleColumnChange };
  }
});
const _hoisted_1$1 = { style: { "width": "100%" } };
const _hoisted_2 = {
  key: 0,
  style: { "margin": "5px" }
};
const _hoisted_3 = { class: "flex items-center" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TableTitle = resolveComponent("TableTitle");
  const _component_Divider = resolveComponent("Divider");
  const _component_TableSetting = resolveComponent("TableSetting");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _ctx.$slots.headerTop ? (openBlock(), createElementBlock("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "headerTop")
    ])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_3, [
      _ctx.$slots.tableTitle ? renderSlot(_ctx.$slots, "tableTitle", { key: 0 }) : createCommentVNode("", true),
      !_ctx.$slots.tableTitle && _ctx.title ? (openBlock(), createBlock(_component_TableTitle, {
        key: 1,
        helpMessage: _ctx.titleHelpMessage,
        title: _ctx.title
      }, null, 8, ["helpMessage", "title"])) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}__toolbar`)
      }, [
        renderSlot(_ctx.$slots, "toolbar"),
        _ctx.$slots.toolbar && _ctx.showTableSetting ? (openBlock(), createBlock(_component_Divider, {
          key: 0,
          type: "vertical"
        })) : createCommentVNode("", true),
        _ctx.showTableSetting ? (openBlock(), createBlock(_component_TableSetting, {
          key: 1,
          setting: _ctx.tableSetting,
          onColumnsChange: _ctx.handleColumnChange
        }, null, 8, ["setting", "onColumnsChange"])) : createCommentVNode("", true)
      ], 2)
    ])
  ]);
}
var TableHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
function useTableHeader(propsRef, slots, handlers) {
  const getHeaderProps = computed(() => {
    const { title, showTableSetting, titleHelpMessage, tableSetting } = unref(propsRef);
    const hideTitle = !slots.tableTitle && !title && !slots.toolbar && !showTableSetting;
    if (hideTitle && !isString(title)) {
      return {};
    }
    return {
      title: hideTitle ? null : () => h(TableHeader, {
        title,
        titleHelpMessage,
        showTableSetting,
        tableSetting,
        onColumnsChange: handlers.onColumnsChange
      }, __spreadValues(__spreadValues(__spreadValues({}, slots.toolbar ? {
        toolbar: () => getSlot(slots, "toolbar")
      } : {}), slots.tableTitle ? {
        tableTitle: () => getSlot(slots, "tableTitle")
      } : {}), slots.headerTop ? {
        headerTop: () => getSlot(slots, "headerTop")
      } : {}))
    };
  });
  return { getHeaderProps };
}
function useTableExpand(propsRef, tableData, emit) {
  const expandedRowKeys = ref([]);
  const getAutoCreateKey = computed(() => {
    return unref(propsRef).autoCreateKey && !unref(propsRef).rowKey;
  });
  const getRowKey = computed(() => {
    const { rowKey } = unref(propsRef);
    return unref(getAutoCreateKey) ? ROW_KEY : rowKey;
  });
  const getExpandOption = computed(() => {
    const { isTreeTable } = unref(propsRef);
    if (!isTreeTable)
      return {};
    return {
      expandedRowKeys: unref(expandedRowKeys),
      onExpandedRowsChange: (keys) => {
        expandedRowKeys.value = keys;
        emit("expanded-rows-change", keys);
      }
    };
  });
  function expandAll() {
    const keys = getAllKeys();
    expandedRowKeys.value = keys;
  }
  function expandRows(keys) {
    const { isTreeTable } = unref(propsRef);
    if (!isTreeTable)
      return;
    expandedRowKeys.value = [...expandedRowKeys.value, ...keys];
  }
  function getAllKeys(data) {
    const keys = [];
    const { childrenColumnName } = unref(propsRef);
    toRaw(data || unref(tableData)).forEach((item) => {
      keys.push(item[unref(getRowKey)]);
      const children = item[childrenColumnName || "children"];
      if (children == null ? void 0 : children.length) {
        keys.push(...getAllKeys(children));
      }
    });
    return keys;
  }
  function collapseAll() {
    expandedRowKeys.value = [];
  }
  return { getExpandOption, expandAll, expandRows, collapseAll };
}
const SUMMARY_ROW_KEY = "_row";
const SUMMARY_INDEX_KEY = "_index";
const _sfc_main$2 = defineComponent({
  name: "BasicTableFooter",
  components: { Table },
  props: {
    summaryFunc: {
      type: Function
    },
    summaryData: {
      type: Array
    },
    scroll: {
      type: Object
    },
    rowKey: propTypes.string.def("key")
  },
  setup(props) {
    const table = useTableContext();
    const getDataSource = computed(() => {
      const { summaryFunc, summaryData } = props;
      if (summaryData == null ? void 0 : summaryData.length) {
        summaryData.forEach((item, i) => item[props.rowKey] = `${i}`);
        return summaryData;
      }
      if (!isFunction(summaryFunc)) {
        return [];
      }
      let dataSource = toRaw(unref(table.getDataSource()));
      dataSource = summaryFunc(dataSource);
      dataSource.forEach((item, i) => {
        item[props.rowKey] = `${i}`;
      });
      return dataSource;
    });
    const getColumns = computed(() => {
      const dataSource = unref(getDataSource);
      const columns = cloneDeep(table.getColumns());
      const index2 = columns.findIndex((item) => item.flag === INDEX_COLUMN_FLAG);
      const hasRowSummary = dataSource.some((item) => Reflect.has(item, SUMMARY_ROW_KEY));
      const hasIndexSummary = dataSource.some((item) => Reflect.has(item, SUMMARY_INDEX_KEY));
      if (index2 !== -1) {
        if (hasIndexSummary) {
          columns[index2].customRender = ({ record }) => record[SUMMARY_INDEX_KEY];
          columns[index2].ellipsis = false;
        } else {
          Reflect.deleteProperty(columns[index2], "customRender");
        }
      }
      if (table.getRowSelection() && hasRowSummary) {
        const isFixed = columns.some((col) => col.fixed === "left");
        columns.unshift(__spreadProps(__spreadValues({
          width: 60,
          title: "selection",
          key: "selectionKey",
          align: "center"
        }, isFixed ? { fixed: "left" } : {}), {
          customRender: ({ record }) => record[SUMMARY_ROW_KEY]
        }));
      }
      return columns;
    });
    return { getColumns, getDataSource };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Table = resolveComponent("Table");
  return _ctx.summaryFunc || _ctx.summaryData ? (openBlock(), createBlock(_component_Table, {
    key: 0,
    showHeader: false,
    bordered: false,
    pagination: false,
    dataSource: _ctx.getDataSource,
    rowKey: (r) => r[_ctx.rowKey],
    columns: _ctx.getColumns,
    tableLayout: "fixed",
    scroll: _ctx.scroll
  }, null, 8, ["dataSource", "rowKey", "columns", "scroll"])) : createCommentVNode("", true);
}
var TableFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
function useTableFooter(propsRef, scrollRef, tableElRef, getDataSourceRef) {
  const getIsEmptyData = computed(() => {
    return (unref(getDataSourceRef) || []).length === 0;
  });
  const getFooterProps = computed(() => {
    const { summaryFunc, showSummary, summaryData } = unref(propsRef);
    return showSummary && !unref(getIsEmptyData) ? () => h(TableFooter, { summaryFunc, summaryData, scroll: unref(scrollRef) }) : void 0;
  });
  watchEffect(() => {
    handleSummary();
  });
  function handleSummary() {
    const { showSummary } = unref(propsRef);
    if (!showSummary || unref(getIsEmptyData))
      return;
    nextTick(() => {
      const tableEl = unref(tableElRef);
      if (!tableEl)
        return;
      const bodyDomList = tableEl.$el.querySelectorAll(".ant-table-body");
      const bodyDom = bodyDomList[0];
      useEventListener({
        el: bodyDom,
        name: "scroll",
        listener: () => {
          const footerBodyDom = tableEl.$el.querySelector(".ant-table-footer .ant-table-body");
          if (!footerBodyDom || !bodyDom)
            return;
          footerBodyDom.scrollLeft = bodyDom.scrollLeft;
        },
        wait: 0,
        options: true
      });
    });
  }
  return { getFooterProps };
}
function useTableForm(propsRef, slots, fetch, getLoading) {
  const getFormProps = computed(() => {
    const { formConfig } = unref(propsRef);
    const { submitButtonOptions } = formConfig || {};
    return __spreadProps(__spreadValues({
      showAdvancedButton: true
    }, formConfig), {
      submitButtonOptions: __spreadValues({ loading: unref(getLoading) }, submitButtonOptions),
      compact: true
    });
  });
  const getFormSlotKeys = computed(() => {
    const keys = Object.keys(slots);
    return keys.map((item) => item.startsWith("form-") ? item : null).filter((item) => !!item);
  });
  function replaceFormSlotKey(key) {
    var _a, _b;
    if (!key)
      return "";
    return (_b = (_a = key == null ? void 0 : key.replace) == null ? void 0 : _a.call(key, /form\-/, "")) != null ? _b : "";
  }
  function handleSearchInfoChange(info) {
    const { handleSearchInfoFn } = unref(propsRef);
    if (handleSearchInfoFn && isFunction(handleSearchInfoFn)) {
      info = handleSearchInfoFn(info) || info;
    }
    fetch({ searchInfo: info, page: 1 });
  }
  return {
    getFormProps,
    replaceFormSlotKey,
    getFormSlotKeys,
    handleSearchInfoChange
  };
}
const basicProps = {
  clickToRowSelect: { type: Boolean, default: true },
  isTreeTable: Boolean,
  tableSetting: propTypes.shape({}),
  inset: Boolean,
  sortFn: {
    type: Function,
    default: DEFAULT_SORT_FN
  },
  filterFn: {
    type: Function,
    default: DEFAULT_FILTER_FN
  },
  showTableSetting: Boolean,
  autoCreateKey: { type: Boolean, default: true },
  striped: { type: Boolean, default: true },
  showSummary: Boolean,
  summaryFunc: {
    type: [Function, Array],
    default: null
  },
  summaryData: {
    type: Array,
    default: null
  },
  indentSize: propTypes.number.def(24),
  canColDrag: { type: Boolean, default: true },
  api: {
    type: Function,
    default: null
  },
  beforeFetch: {
    type: Function,
    default: null
  },
  afterFetch: {
    type: Function,
    default: null
  },
  handleSearchInfoFn: {
    type: Function,
    default: null
  },
  fetchSetting: {
    type: Object,
    default: () => {
      return FETCH_SETTING;
    }
  },
  immediate: { type: Boolean, default: true },
  emptyDataIsShowTable: { type: Boolean, default: true },
  searchInfo: {
    type: Object,
    default: null
  },
  defSort: {
    type: Object,
    default: null
  },
  useSearchForm: propTypes.bool,
  formConfig: {
    type: Object,
    default: null
  },
  columns: {
    type: [Array],
    default: () => []
  },
  showIndexColumn: { type: Boolean, default: true },
  indexColumnProps: {
    type: Object,
    default: null
  },
  actionColumn: {
    type: Object,
    default: null
  },
  ellipsis: { type: Boolean, default: true },
  isCanResizeParent: { type: Boolean, default: false },
  canResize: { type: Boolean, default: true },
  clearSelectOnPageChange: propTypes.bool,
  resizeHeightOffset: propTypes.number.def(0),
  rowSelection: {
    type: Object,
    default: null
  },
  title: {
    type: [String, Function],
    default: null
  },
  titleHelpMessage: {
    type: [String, Array]
  },
  maxHeight: propTypes.number,
  dataSource: {
    type: Array,
    default: null
  },
  rowKey: {
    type: [String, Function],
    default: ""
  },
  bordered: propTypes.bool,
  pagination: {
    type: [Object, Boolean],
    default: null
  },
  loading: propTypes.bool,
  rowClassName: {
    type: Function
  },
  scroll: {
    type: Object,
    default: null
  },
  beforeEditSubmit: {
    type: Function
  },
  size: {
    type: String,
    default: DEFAULT_SIZE
  }
};
var BasicTable_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = defineComponent({
  components: {
    Table,
    BasicForm,
    HeaderCell
  },
  props: basicProps,
  emits: [
    "fetch-success",
    "fetch-error",
    "selection-change",
    "register",
    "row-click",
    "row-dbClick",
    "row-contextmenu",
    "row-mouseenter",
    "row-mouseleave",
    "edit-end",
    "edit-cancel",
    "edit-row-end",
    "edit-change",
    "expanded-rows-change",
    "change",
    "columns-change"
  ],
  setup(props, { attrs, emit, slots, expose }) {
    const tableElRef = ref(null);
    const tableData = ref([]);
    const wrapRef = ref(null);
    const formRef = ref(null);
    const innerPropsRef = ref();
    const { prefixCls } = useDesign("basic-table");
    const [registerForm, formActions] = useForm();
    const getProps = computed(() => {
      return __spreadValues(__spreadValues({}, props), unref(innerPropsRef));
    });
    const isFixedHeightPage = inject(PageWrapperFixedHeightKey, false);
    watchEffect(() => {
      unref(isFixedHeightPage) && props.canResize && warn("'canResize' of BasicTable may not work in PageWrapper with 'fixedHeight' (especially in hot updates)");
    });
    const { getLoading, setLoading } = useLoading(getProps);
    const {
      getPaginationInfo,
      getPagination,
      setPagination,
      setShowPagination,
      getShowPagination
    } = usePagination(getProps);
    const {
      getRowSelection,
      getRowSelectionRef,
      getSelectRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setSelectedRowKeys
    } = useRowSelection(getProps, tableData, emit);
    const {
      handleTableChange: onTableChange,
      getDataSourceRef,
      getDataSource,
      getRawDataSource,
      setTableData,
      updateTableDataRecord,
      deleteTableDataRecord,
      insertTableDataRecord,
      findTableDataRecord,
      fetch,
      getRowKey,
      reload,
      getAutoCreateKey,
      updateTableData
    } = useDataSource(getProps, {
      tableData,
      getPaginationInfo,
      setLoading,
      setPagination,
      getFieldsValue: formActions.getFieldsValue,
      clearSelectedRowKeys
    }, emit);
    function handleTableChange(...args) {
      onTableChange.call(void 0, ...args);
      emit("change", ...args);
      const { onChange } = unref(getProps);
      onChange && isFunction(onChange) && onChange.call(void 0, ...args);
    }
    const {
      getViewColumns,
      getColumns,
      setCacheColumnsByField,
      setColumns,
      getColumnsRef,
      getCacheColumns
    } = useColumns(getProps, getPaginationInfo);
    const { getScrollRef, redoHeight } = useTableScroll(getProps, tableElRef, getColumnsRef, getRowSelectionRef, getDataSourceRef, wrapRef, formRef);
    const { scrollTo } = useTableScrollTo(tableElRef, getDataSourceRef);
    const { customRow } = useCustomRow(getProps, {
      setSelectedRowKeys,
      getSelectRowKeys,
      clearSelectedRowKeys,
      getAutoCreateKey,
      emit
    });
    const { getRowClassName } = useTableStyle(getProps, prefixCls);
    const { getExpandOption, expandAll, expandRows, collapseAll } = useTableExpand(getProps, tableData, emit);
    const handlers = {
      onColumnsChange: (data) => {
        var _a, _b;
        emit("columns-change", data);
        (_b = (_a = unref(getProps)).onColumnsChange) == null ? void 0 : _b.call(_a, data);
      }
    };
    const { getHeaderProps } = useTableHeader(getProps, slots, handlers);
    const { getFooterProps } = useTableFooter(getProps, getScrollRef, tableElRef, getDataSourceRef);
    const { getFormProps, replaceFormSlotKey, getFormSlotKeys, handleSearchInfoChange } = useTableForm(getProps, slots, fetch, getLoading);
    const getBindValues = computed(() => {
      const dataSource = unref(getDataSourceRef);
      let propsData = __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, attrs), {
        customRow
      }), unref(getProps)), unref(getHeaderProps)), {
        scroll: unref(getScrollRef),
        loading: unref(getLoading),
        tableLayout: "fixed",
        rowSelection: unref(getRowSelectionRef),
        rowKey: unref(getRowKey),
        columns: toRaw(unref(getViewColumns)),
        pagination: toRaw(unref(getPaginationInfo)),
        dataSource,
        footer: unref(getFooterProps)
      }), unref(getExpandOption));
      if (slots.expandedRowRender) {
        propsData = omit(propsData, "scroll");
      }
      propsData = omit(propsData, ["class", "onChange"]);
      return propsData;
    });
    const getWrapperClass = computed(() => {
      const values = unref(getBindValues);
      return [
        prefixCls,
        attrs.class,
        {
          [`${prefixCls}-form-container`]: values.useSearchForm,
          [`${prefixCls}--inset`]: values.inset
        }
      ];
    });
    const getEmptyDataIsShowTable = computed(() => {
      const { emptyDataIsShowTable, useSearchForm } = unref(getProps);
      if (emptyDataIsShowTable || !useSearchForm) {
        return true;
      }
      return !!unref(getDataSourceRef).length;
    });
    function setProps(props2) {
      innerPropsRef.value = __spreadValues(__spreadValues({}, unref(innerPropsRef)), props2);
    }
    const tableAction = {
      reload,
      getSelectRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setPagination,
      setTableData,
      updateTableDataRecord,
      deleteTableDataRecord,
      insertTableDataRecord,
      findTableDataRecord,
      redoHeight,
      setSelectedRowKeys,
      setColumns,
      setLoading,
      getDataSource,
      getRawDataSource,
      setProps,
      getRowSelection,
      getPaginationRef: getPagination,
      getColumns,
      getCacheColumns,
      emit,
      updateTableData,
      setShowPagination,
      getShowPagination,
      setCacheColumnsByField,
      expandAll,
      expandRows,
      collapseAll,
      scrollTo,
      getSize: () => {
        return unref(getBindValues).size;
      }
    };
    createTableContext(__spreadProps(__spreadValues({}, tableAction), { wrapRef, getBindValues }));
    expose(tableAction);
    emit("register", tableAction, formActions);
    return {
      formRef,
      tableElRef,
      getBindValues,
      getLoading,
      registerForm,
      handleSearchInfoChange,
      getEmptyDataIsShowTable,
      handleTableChange,
      getRowClassName,
      wrapRef,
      tableAction,
      redoHeight,
      getFormProps,
      replaceFormSlotKey,
      getFormSlotKeys,
      getWrapperClass,
      columns: getViewColumns
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicForm = resolveComponent("BasicForm");
  const _component_HeaderCell = resolveComponent("HeaderCell");
  const _component_Table = resolveComponent("Table");
  return openBlock(), createElementBlock("div", {
    ref: "wrapRef",
    class: normalizeClass(_ctx.getWrapperClass)
  }, [
    _ctx.getBindValues.useSearchForm ? (openBlock(), createBlock(_component_BasicForm, mergeProps({
      key: 0,
      ref: "formRef",
      submitOnReset: ""
    }, _ctx.getFormProps, {
      tableAction: _ctx.tableAction,
      onRegister: _ctx.registerForm,
      onSubmit: _ctx.handleSearchInfoChange,
      onAdvancedChange: _ctx.redoHeight
    }), createSlots({ _: 2 }, [
      renderList(_ctx.getFormSlotKeys, (item) => {
        return {
          name: _ctx.replaceFormSlotKey(item),
          fn: withCtx((data) => [
            renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
          ])
        };
      })
    ]), 1040, ["tableAction", "onRegister", "onSubmit", "onAdvancedChange"])) : createCommentVNode("", true),
    withDirectives(createVNode(_component_Table, mergeProps({ ref: "tableElRef" }, _ctx.getBindValues, {
      rowClassName: _ctx.getRowClassName,
      onChange: _ctx.handleTableChange
    }), createSlots({ _: 2 }, [
      renderList(Object.keys(_ctx.$slots), (item) => {
        return {
          name: item,
          fn: withCtx((data) => [
            renderSlot(_ctx.$slots, item, normalizeProps(guardReactiveProps(data || {})))
          ])
        };
      }),
      renderList(_ctx.columns, (column, index2) => {
        return {
          name: `header-${column.dataIndex}`,
          fn: withCtx(() => [
            createVNode(_component_HeaderCell, { column }, null, 8, ["column"])
          ])
        };
      })
    ]), 1040, ["rowClassName", "onChange"]), [
      [vShow, _ctx.getEmptyDataIsShowTable]
    ])
  ], 2);
}
var BasicTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var TableImg_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "TableImage",
  components: { Image, PreviewGroup: Image.PreviewGroup, Badge },
  props: {
    imgList: propTypes.arrayOf(propTypes.string),
    size: propTypes.number.def(40),
    simpleShow: propTypes.bool,
    showBadge: propTypes.bool.def(true),
    margin: propTypes.number.def(4),
    srcPrefix: propTypes.string.def("")
  },
  setup(props) {
    const getWrapStyle = computed(() => {
      const { size } = props;
      const s = `${size}px`;
      return { height: s, width: s };
    });
    const { prefixCls } = useDesign("basic-table-img");
    return { prefixCls, getWrapStyle };
  }
});
const _hoisted_1 = { class: "img-div" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Image = resolveComponent("Image");
  const _component_PreviewGroup = resolveComponent("PreviewGroup");
  const _component_Badge = resolveComponent("Badge");
  return _ctx.imgList && _ctx.imgList.length ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass([_ctx.prefixCls, "flex items-center mx-auto"]),
    style: normalizeStyle(_ctx.getWrapStyle)
  }, [
    _ctx.simpleShow ? (openBlock(), createBlock(_component_Badge, {
      key: 0,
      count: !_ctx.showBadge || _ctx.imgList.length == 1 ? 0 : _ctx.imgList.length
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_PreviewGroup, null, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.imgList, (img, index2) => {
                return openBlock(), createBlock(_component_Image, {
                  key: img,
                  width: _ctx.size,
                  style: normalizeStyle({
                    display: index2 === 0 ? "" : "none !important"
                  }),
                  src: _ctx.srcPrefix + img
                }, null, 8, ["width", "style", "src"]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["count"])) : (openBlock(), createBlock(_component_PreviewGroup, { key: 1 }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.imgList, (img, index2) => {
          return openBlock(), createBlock(_component_Image, {
            key: img,
            width: _ctx.size,
            style: normalizeStyle({ marginLeft: index2 === 0 ? 0 : _ctx.margin }),
            src: _ctx.srcPrefix + img
          }, null, 8, ["width", "style", "src"]);
        }), 128))
      ]),
      _: 1
    }))
  ], 6)) : createCommentVNode("", true);
}
var TableImg = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { BasicTable as B, TableImg as T };
