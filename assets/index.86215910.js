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
import { b$ as fromPairs, c0 as isObject, c1 as warn, d as defineComponent, Q as ref, ah as useSlots, O as computed, w as watch, o as openBlock, R as createElementBlock, b as unref, ac as renderSlot, ai as createCommentVNode, c as createBlock, e as withCtx, aj as createTextVNode, W as toDisplayString, X as normalizeClass, f as createVNode, c2 as InputSearch, ag as Fragment, as as renderList, c3 as MenuItem, aG as normalizeProps, aQ as guardReactiveProps, c4 as MenuDivider, aE as Menu, aC as withModifiers, aF as Dropdown, aw as useDebounceFn, c5 as isString, N as h, A as cloneDeep, $ as reactive, t as toRaw, c6 as difference, k as omit, aq as watchEffect, a6 as onMounted, bS as isVNode, S as withDirectives, T as vShow, c7 as Tree, aa as mergeProps, av as Empty, bA as get } from "./vendor.faf2de98.js";
import { B as BasicTitle, I as Icon, e as extendSlots, S as ScrollContainer, y as getSlot } from "./index.77d0dee2.js";
import { w as prefixCls, a as useI18n, Q as forEach, A as isArray, y as isFunction, N as filter, ak as treeToList, ax as eachTree, ay as isEmpty, ab as isBoolean } from "./index.f575d9f0.js";
import { u as useContextMenu } from "./useContextMenu.9ef77341.js";
function genBem(name, mods) {
  if (!mods) {
    return "";
  }
  if (typeof mods === "string") {
    return ` ${name}--${mods}`;
  }
  if (Array.isArray(mods)) {
    return mods.reduce((ret, item) => ret + genBem(name, item), "");
  }
  return Object.keys(mods).reduce((ret, key) => ret + (mods[key] ? genBem(name, key) : ""), "");
}
function buildBEM(name) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }
    el = el ? `${name}__${el}` : name;
    return `${el}${genBem(el, mods)}`;
  };
}
function createBEM(name) {
  return [buildBEM(`${prefixCls}-${name}`)];
}
const wrapperKey = Symbol();
const propKey = Symbol();
function buildProp(option, key) {
  if (!isObject(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = [...values, defaultValue];
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  return {
    type: typeof type === "object" && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    default: defaultValue,
    validator: _validator,
    [propKey]: true
  };
}
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [key, buildProp(option, key)]));
var ToolbarEnum = /* @__PURE__ */ ((ToolbarEnum2) => {
  ToolbarEnum2[ToolbarEnum2["SELECT_ALL"] = 0] = "SELECT_ALL";
  ToolbarEnum2[ToolbarEnum2["UN_SELECT_ALL"] = 1] = "UN_SELECT_ALL";
  ToolbarEnum2[ToolbarEnum2["EXPAND_ALL"] = 2] = "EXPAND_ALL";
  ToolbarEnum2[ToolbarEnum2["UN_EXPAND_ALL"] = 3] = "UN_EXPAND_ALL";
  ToolbarEnum2[ToolbarEnum2["CHECK_STRICTLY"] = 4] = "CHECK_STRICTLY";
  ToolbarEnum2[ToolbarEnum2["CHECK_UN_STRICTLY"] = 5] = "CHECK_UN_STRICTLY";
  return ToolbarEnum2;
})(ToolbarEnum || {});
const treeEmits = [
  "update:expandedKeys",
  "update:selectedKeys",
  "update:value",
  "change",
  "check",
  "update:searchValue"
];
const treeProps = buildProps({
  value: {
    type: [Object, Array]
  },
  renderIcon: {
    type: Function
  },
  helpMessage: {
    type: [String, Array],
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  toolbar: Boolean,
  search: Boolean,
  searchValue: {
    type: String,
    default: ""
  },
  checkStrictly: Boolean,
  clickRowToExpand: {
    type: Boolean,
    default: false
  },
  checkable: Boolean,
  defaultExpandLevel: {
    type: [String, Number],
    default: ""
  },
  defaultExpandAll: Boolean,
  fieldNames: {
    type: Object
  },
  treeData: {
    type: Array
  },
  actionList: {
    type: Array,
    default: () => []
  },
  expandedKeys: {
    type: Array,
    default: () => []
  },
  selectedKeys: {
    type: Array,
    default: () => []
  },
  checkedKeys: {
    type: Array,
    default: () => []
  },
  beforeRightClick: {
    type: Function,
    default: void 0
  },
  rightMenuList: {
    type: Array
  },
  filterFn: {
    type: Function,
    default: void 0
  },
  highlight: {
    type: [Boolean, String],
    default: false
  },
  expandOnSearch: Boolean,
  checkOnSearch: Boolean,
  selectedOnSearch: Boolean
});
const _hoisted_1 = {
  key: 2,
  class: "flex items-center flex-1 cursor-pointer justify-self-stretch"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    helpMessage: {
      type: [String, Array],
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    toolbar: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String,
      default: ""
    },
    checkAll: {
      type: Function,
      default: void 0
    },
    expandAll: {
      type: Function,
      default: void 0
    }
  },
  emits: ["strictly-change", "search"],
  setup(__props, { emit }) {
    const props = __props;
    const searchValue = ref("");
    const [bem] = createBEM("tree-header");
    const slots = useSlots();
    const { t } = useI18n();
    const getInputSearchCls = computed(() => {
      const titleExists = slots.headerTitle || props.title;
      return [
        "mr-1",
        "w-full",
        {
          ["ml-5"]: titleExists
        }
      ];
    });
    const toolbarList = computed(() => {
      const { checkable } = props;
      const defaultToolbarList = [
        { label: t("component.tree.expandAll"), value: ToolbarEnum.EXPAND_ALL },
        {
          label: t("component.tree.unExpandAll"),
          value: ToolbarEnum.UN_EXPAND_ALL,
          divider: checkable
        }
      ];
      return checkable ? [
        { label: t("component.tree.selectAll"), value: ToolbarEnum.SELECT_ALL },
        {
          label: t("component.tree.unSelectAll"),
          value: ToolbarEnum.UN_SELECT_ALL,
          divider: checkable
        },
        ...defaultToolbarList,
        { label: t("component.tree.checkStrictly"), value: ToolbarEnum.CHECK_STRICTLY },
        { label: t("component.tree.checkUnStrictly"), value: ToolbarEnum.CHECK_UN_STRICTLY }
      ] : defaultToolbarList;
    });
    function handleMenuClick(e) {
      var _a, _b, _c, _d;
      const { key } = e;
      switch (key) {
        case ToolbarEnum.SELECT_ALL:
          (_a = props.checkAll) == null ? void 0 : _a.call(props, true);
          break;
        case ToolbarEnum.UN_SELECT_ALL:
          (_b = props.checkAll) == null ? void 0 : _b.call(props, false);
          break;
        case ToolbarEnum.EXPAND_ALL:
          (_c = props.expandAll) == null ? void 0 : _c.call(props, true);
          break;
        case ToolbarEnum.UN_EXPAND_ALL:
          (_d = props.expandAll) == null ? void 0 : _d.call(props, false);
          break;
        case ToolbarEnum.CHECK_STRICTLY:
          emit("strictly-change", false);
          break;
        case ToolbarEnum.CHECK_UN_STRICTLY:
          emit("strictly-change", true);
          break;
      }
    }
    function emitChange(value) {
      emit("search", value);
    }
    const debounceEmitChange = useDebounceFn(emitChange, 200);
    watch(() => searchValue.value, (v) => {
      debounceEmitChange(v);
    });
    watch(() => props.searchText, (v) => {
      if (v !== searchValue.value) {
        searchValue.value = v;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(bem)(), "flex px-2 py-1.5 items-center"])
      }, [
        unref(slots).headerTitle ? renderSlot(_ctx.$slots, "headerTitle", { key: 0 }) : createCommentVNode("", true),
        !unref(slots).headerTitle && _ctx.title ? (openBlock(), createBlock(unref(BasicTitle), {
          key: 1,
          helpMessage: _ctx.helpMessage
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          _: 1
        }, 8, ["helpMessage"])) : createCommentVNode("", true),
        _ctx.search || _ctx.toolbar ? (openBlock(), createElementBlock("div", _hoisted_1, [
          _ctx.search ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(getInputSearchCls))
          }, [
            createVNode(unref(InputSearch), {
              placeholder: unref(t)("common.searchText"),
              size: "small",
              allowClear: "",
              value: searchValue.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => searchValue.value = $event)
            }, null, 8, ["placeholder", "value"])
          ], 2)) : createCommentVNode("", true),
          _ctx.toolbar ? (openBlock(), createBlock(unref(Dropdown), {
            key: 1,
            onClick: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent"]))
          }, {
            overlay: withCtx(() => [
              createVNode(unref(Menu), { onClick: handleMenuClick }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(toolbarList), (item) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: item.value
                    }, [
                      createVNode(unref(MenuItem), normalizeProps(guardReactiveProps({ key: item.value })), {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1040),
                      item.divider ? (openBlock(), createBlock(unref(MenuDivider), { key: 0 })) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createVNode(unref(Icon), { icon: "ion:ellipsis-vertical" })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
var index$1 = "";
const TreeIcon = ({ icon }) => {
  if (!icon)
    return null;
  if (isString(icon)) {
    return h(Icon, { icon, class: "mr-1" });
  }
  return Icon;
};
function useTree(treeDataRef, getFieldNames) {
  function getAllKeys(list) {
    const keys = [];
    const treeData = list || unref(treeDataRef);
    const { key: keyField, children: childrenField } = unref(getFieldNames);
    if (!childrenField || !keyField)
      return keys;
    for (let index2 = 0; index2 < treeData.length; index2++) {
      const node = treeData[index2];
      keys.push(node[keyField]);
      const children = node[childrenField];
      if (children && children.length) {
        keys.push(...getAllKeys(children));
      }
    }
    return keys;
  }
  function getEnabledKeys(list) {
    const keys = [];
    const treeData = list || unref(treeDataRef);
    const { key: keyField, children: childrenField } = unref(getFieldNames);
    if (!childrenField || !keyField)
      return keys;
    for (let index2 = 0; index2 < treeData.length; index2++) {
      const node = treeData[index2];
      node.disabled !== true && node.selectable !== false && keys.push(node[keyField]);
      const children = node[childrenField];
      if (children && children.length) {
        keys.push(...getEnabledKeys(children));
      }
    }
    return keys;
  }
  function getChildrenKeys(nodeKey, list) {
    const keys = [];
    const treeData = list || unref(treeDataRef);
    const { key: keyField, children: childrenField } = unref(getFieldNames);
    if (!childrenField || !keyField)
      return keys;
    for (let index2 = 0; index2 < treeData.length; index2++) {
      const node = treeData[index2];
      const children = node[childrenField];
      if (nodeKey === node[keyField]) {
        keys.push(node[keyField]);
        if (children && children.length) {
          keys.push(...getAllKeys(children));
        }
      } else {
        if (children && children.length) {
          keys.push(...getChildrenKeys(nodeKey, children));
        }
      }
    }
    return keys;
  }
  function updateNodeByKey(key, node, list) {
    if (!key)
      return;
    const treeData = list || unref(treeDataRef);
    const { key: keyField, children: childrenField } = unref(getFieldNames);
    if (!childrenField || !keyField)
      return;
    for (let index2 = 0; index2 < treeData.length; index2++) {
      const element = treeData[index2];
      const children = element[childrenField];
      if (element[keyField] === key) {
        treeData[index2] = __spreadValues(__spreadValues({}, treeData[index2]), node);
        break;
      } else if (children && children.length) {
        updateNodeByKey(key, node, element[childrenField]);
      }
    }
  }
  function filterByLevel(level = 1, list, currentLevel = 1) {
    if (!level) {
      return [];
    }
    const res = [];
    const data = list || unref(treeDataRef) || [];
    for (let index2 = 0; index2 < data.length; index2++) {
      const item = data[index2];
      const { key: keyField, children: childrenField } = unref(getFieldNames);
      const key = keyField ? item[keyField] : "";
      const children = childrenField ? item[childrenField] : [];
      res.push(key);
      if (children && children.length && currentLevel < level) {
        currentLevel += 1;
        res.push(...filterByLevel(level, children, currentLevel));
      }
    }
    return res;
  }
  function insertNodeByKey({ parentKey = null, node, push = "push" }) {
    const treeData = cloneDeep(unref(treeDataRef));
    if (!parentKey) {
      treeData[push](node);
      treeDataRef.value = treeData;
      return;
    }
    const { key: keyField, children: childrenField } = unref(getFieldNames);
    if (!childrenField || !keyField)
      return;
    forEach(treeData, (treeItem) => {
      if (treeItem[keyField] === parentKey) {
        treeItem[childrenField] = treeItem[childrenField] || [];
        treeItem[childrenField][push](node);
        return true;
      }
    });
    treeDataRef.value = treeData;
  }
  function insertNodesByKey({ parentKey = null, list, push = "push" }) {
    const treeData = cloneDeep(unref(treeDataRef));
    if (!list || list.length < 1) {
      return;
    }
    if (!parentKey) {
      for (let i = 0; i < list.length; i++) {
        treeData[push](list[i]);
      }
    } else {
      const { key: keyField, children: childrenField } = unref(getFieldNames);
      if (!childrenField || !keyField)
        return;
      forEach(treeData, (treeItem) => {
        if (treeItem[keyField] === parentKey) {
          treeItem[childrenField] = treeItem[childrenField] || [];
          for (let i = 0; i < list.length; i++) {
            treeItem[childrenField][push](list[i]);
          }
          treeDataRef.value = treeData;
          return true;
        }
      });
    }
  }
  function deleteNodeByKey(key, list) {
    if (!key)
      return;
    const treeData = list || unref(treeDataRef);
    const { key: keyField, children: childrenField } = unref(getFieldNames);
    if (!childrenField || !keyField)
      return;
    for (let index2 = 0; index2 < treeData.length; index2++) {
      const element = treeData[index2];
      const children = element[childrenField];
      if (element[keyField] === key) {
        treeData.splice(index2, 1);
        break;
      } else if (children && children.length) {
        deleteNodeByKey(key, element[childrenField]);
      }
    }
  }
  return {
    deleteNodeByKey,
    insertNodeByKey,
    insertNodesByKey,
    filterByLevel,
    updateNodeByKey,
    getAllKeys,
    getChildrenKeys,
    getEnabledKeys
  };
}
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _sfc_main = defineComponent({
  name: "BasicTree",
  inheritAttrs: false,
  props: treeProps,
  emits: treeEmits,
  setup(props, {
    attrs,
    slots,
    emit,
    expose
  }) {
    const [bem] = createBEM("tree");
    const state = reactive({
      checkStrictly: props.checkStrictly,
      expandedKeys: props.expandedKeys || [],
      selectedKeys: props.selectedKeys || [],
      checkedKeys: props.checkedKeys || []
    });
    const searchState = reactive({
      startSearch: false,
      searchText: "",
      searchData: []
    });
    const treeDataRef = ref([]);
    const [createContextMenu] = useContextMenu();
    const getFieldNames = computed(() => {
      const {
        fieldNames
      } = props;
      return __spreadValues({
        children: "children",
        title: "title",
        key: "key"
      }, fieldNames);
    });
    const getBindValues = computed(() => {
      let propsData = __spreadProps(__spreadValues(__spreadValues({
        blockNode: true
      }, attrs), props), {
        expandedKeys: state.expandedKeys,
        selectedKeys: state.selectedKeys,
        checkedKeys: state.checkedKeys,
        checkStrictly: state.checkStrictly,
        filedNames: unref(getFieldNames),
        "onUpdate:expandedKeys": (v) => {
          state.expandedKeys = v;
          emit("update:expandedKeys", v);
        },
        "onUpdate:selectedKeys": (v) => {
          state.selectedKeys = v;
          emit("update:selectedKeys", v);
        },
        onCheck: (v, e) => {
          let currentValue = toRaw(state.checkedKeys);
          if (isArray(currentValue) && searchState.startSearch) {
            const {
              key
            } = unref(getFieldNames);
            currentValue = difference(currentValue, getChildrenKeys(e.node.$attrs.node[key]));
            if (e.checked) {
              currentValue.push(e.node.$attrs.node[key]);
            }
            state.checkedKeys = currentValue;
          } else {
            state.checkedKeys = v;
          }
          const rawVal = toRaw(state.checkedKeys);
          emit("update:value", rawVal);
          emit("check", rawVal, e);
        },
        onRightClick: handleRightClick
      });
      return omit(propsData, "treeData", "class");
    });
    const getTreeData = computed(() => searchState.startSearch ? searchState.searchData : unref(treeDataRef));
    const getNotFound = computed(() => {
      return !getTreeData.value || getTreeData.value.length === 0;
    });
    const {
      deleteNodeByKey,
      insertNodeByKey,
      insertNodesByKey,
      filterByLevel,
      updateNodeByKey,
      getAllKeys,
      getChildrenKeys,
      getEnabledKeys
    } = useTree(treeDataRef, getFieldNames);
    function getIcon(params, icon) {
      if (!icon) {
        if (props.renderIcon && isFunction(props.renderIcon)) {
          return props.renderIcon(params);
        }
      }
      return icon;
    }
    async function handleRightClick({
      event,
      node
    }) {
      var _a;
      const {
        rightMenuList: menuList = [],
        beforeRightClick
      } = props;
      let contextMenuOptions = {
        event,
        items: []
      };
      if (beforeRightClick && isFunction(beforeRightClick)) {
        let result = await beforeRightClick(node, event);
        if (Array.isArray(result)) {
          contextMenuOptions.items = result;
        } else {
          Object.assign(contextMenuOptions, result);
        }
      } else {
        contextMenuOptions.items = menuList;
      }
      if (!((_a = contextMenuOptions.items) == null ? void 0 : _a.length))
        return;
      createContextMenu(contextMenuOptions);
    }
    function setExpandedKeys(keys) {
      state.expandedKeys = keys;
    }
    function getExpandedKeys() {
      return state.expandedKeys;
    }
    function setSelectedKeys(keys) {
      state.selectedKeys = keys;
    }
    function getSelectedKeys() {
      return state.selectedKeys;
    }
    function setCheckedKeys(keys) {
      state.checkedKeys = keys;
    }
    function getCheckedKeys() {
      return state.checkedKeys;
    }
    function checkAll(checkAll2) {
      state.checkedKeys = checkAll2 ? getEnabledKeys() : [];
    }
    function expandAll(expandAll2) {
      state.expandedKeys = expandAll2 ? getAllKeys() : [];
    }
    function onStrictlyChange(strictly) {
      state.checkStrictly = strictly;
    }
    watch(() => props.searchValue, (val) => {
      if (val !== searchState.searchText) {
        searchState.searchText = val;
      }
    }, {
      immediate: true
    });
    watch(() => props.treeData, (val) => {
      if (val) {
        handleSearch(searchState.searchText);
      }
    });
    function handleSearch(searchValue) {
      if (searchValue !== searchState.searchText)
        searchState.searchText = searchValue;
      emit("update:searchValue", searchValue);
      if (!searchValue) {
        searchState.startSearch = false;
        return;
      }
      const {
        filterFn,
        checkable,
        expandOnSearch,
        checkOnSearch,
        selectedOnSearch
      } = unref(props);
      searchState.startSearch = true;
      const {
        title: titleField,
        key: keyField
      } = unref(getFieldNames);
      const matchedKeys = [];
      searchState.searchData = filter(unref(treeDataRef), (node) => {
        var _a, _b;
        const result = filterFn ? filterFn(searchValue, node, unref(getFieldNames)) : (_b = (_a = node[titleField]) == null ? void 0 : _a.includes(searchValue)) != null ? _b : false;
        if (result) {
          matchedKeys.push(node[keyField]);
        }
        return result;
      }, unref(getFieldNames));
      if (expandOnSearch) {
        const expandKeys = treeToList(searchState.searchData).map((val) => {
          return val[keyField];
        });
        if (expandKeys && expandKeys.length) {
          setExpandedKeys(expandKeys);
        }
      }
      if (checkOnSearch && checkable && matchedKeys.length) {
        setCheckedKeys(matchedKeys);
      }
      if (selectedOnSearch && matchedKeys.length) {
        setSelectedKeys(matchedKeys);
      }
    }
    function handleClickNode(key, children) {
      if (!props.clickRowToExpand || !children || children.length === 0)
        return;
      if (!state.expandedKeys.includes(key)) {
        setExpandedKeys([...state.expandedKeys, key]);
      } else {
        const keys = [...state.expandedKeys];
        const index2 = keys.findIndex((item) => item === key);
        if (index2 !== -1) {
          keys.splice(index2, 1);
        }
        setExpandedKeys(keys);
      }
    }
    watchEffect(() => {
      treeDataRef.value = props.treeData;
    });
    onMounted(() => {
      const level = parseInt(props.defaultExpandLevel);
      if (level > 0) {
        state.expandedKeys = filterByLevel(level);
      } else if (props.defaultExpandAll) {
        expandAll(true);
      }
    });
    watchEffect(() => {
      state.expandedKeys = props.expandedKeys;
    });
    watchEffect(() => {
      state.selectedKeys = props.selectedKeys;
    });
    watchEffect(() => {
      state.checkedKeys = props.checkedKeys;
    });
    watch(() => props.value, () => {
      state.checkedKeys = toRaw(props.value || []);
    });
    watch(() => state.checkedKeys, () => {
      const v = toRaw(state.checkedKeys);
      emit("update:value", v);
      emit("change", v);
    });
    watchEffect(() => {
      state.checkStrictly = props.checkStrictly;
    });
    const instance = {
      setExpandedKeys,
      getExpandedKeys,
      setSelectedKeys,
      getSelectedKeys,
      setCheckedKeys,
      getCheckedKeys,
      insertNodeByKey,
      insertNodesByKey,
      deleteNodeByKey,
      updateNodeByKey,
      checkAll,
      expandAll,
      filterByLevel: (level) => {
        state.expandedKeys = filterByLevel(level);
      },
      setSearchValue: (value) => {
        handleSearch(value);
      },
      getSearchValue: () => {
        return searchState.searchText;
      }
    };
    function renderAction(node) {
      const {
        actionList
      } = props;
      if (!actionList || actionList.length === 0)
        return;
      return actionList.map((item, index2) => {
        var _a;
        let nodeShow = true;
        if (isFunction(item.show)) {
          nodeShow = (_a = item.show) == null ? void 0 : _a.call(item, node);
        } else if (isBoolean(item.show)) {
          nodeShow = item.show;
        }
        if (!nodeShow)
          return null;
        return createVNode("span", {
          "key": index2,
          "class": bem("action")
        }, [item.render(node)]);
      });
    }
    const treeData = computed(() => {
      const data = cloneDeep(getTreeData.value);
      eachTree(data, (item, _parent) => {
        var _a;
        const searchText = searchState.searchText;
        const {
          highlight
        } = unref(props);
        const {
          title: titleField,
          key: keyField,
          children: childrenField
        } = unref(getFieldNames);
        const icon = getIcon(item, item.icon);
        const title = get(item, titleField);
        const searchIdx = searchText ? title.indexOf(searchText) : -1;
        const isHighlight = searchState.startSearch && !isEmpty(searchText) && highlight && searchIdx !== -1;
        const highlightStyle = `color: ${isBoolean(highlight) ? "#f50" : highlight}`;
        const titleDom = isHighlight ? createVNode("span", {
          "class": ((_a = unref(getBindValues)) == null ? void 0 : _a.blockNode) ? `${bem("content")}` : ""
        }, [createVNode("span", null, [title.substr(0, searchIdx)]), createVNode("span", {
          "style": highlightStyle
        }, [searchText]), createVNode("span", null, [title.substr(searchIdx + searchText.length)])]) : title;
        item.title = createVNode("span", {
          "class": `${bem("title")} pl-2`,
          "onClick": handleClickNode.bind(null, item[keyField], item[childrenField])
        }, [(slots == null ? void 0 : slots.title) ? getSlot(slots, "title", item) : createVNode(Fragment, null, [icon && createVNode(TreeIcon, {
          "icon": icon
        }, null), titleDom, createVNode("span", {
          "class": bem("actions")
        }, [renderAction(item)])])]);
        return item;
      });
      return data;
    });
    expose(instance);
    return () => {
      let _slot;
      const {
        title,
        helpMessage,
        toolbar,
        search,
        checkable
      } = props;
      const showTitle = title || toolbar || search || slots.headerTitle;
      const scrollStyle = {
        height: "calc(100% - 38px)"
      };
      return createVNode("div", {
        "class": [bem(), "h-full", attrs.class]
      }, [showTitle && createVNode(_sfc_main$1, {
        "checkable": checkable,
        "checkAll": checkAll,
        "expandAll": expandAll,
        "title": title,
        "search": search,
        "toolbar": toolbar,
        "helpMessage": helpMessage,
        "onStrictlyChange": onStrictlyChange,
        "onSearch": handleSearch,
        "searchText": searchState.searchText
      }, _isSlot(_slot = extendSlots(slots)) ? _slot : {
        default: () => [_slot]
      }), withDirectives(createVNode(ScrollContainer, {
        "style": scrollStyle
      }, {
        default: () => [createVNode(Tree, mergeProps(unref(getBindValues), {
          "showIcon": false,
          "treeData": treeData.value
        }), null)]
      }), [[vShow, !unref(getNotFound)]]), withDirectives(createVNode(Empty, {
        "image": Empty.PRESENTED_IMAGE_SIMPLE,
        "class": "!mt-4"
      }, null), [[vShow, unref(getNotFound)]])]);
    };
  }
});
var index = "";
export { _sfc_main as _ };
