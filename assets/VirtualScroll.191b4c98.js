import { _ as _export_sfc, B as withInstall } from "./index.f575d9f0.js";
import { b as useEventListener } from "./useRootSetting.f760cdbc.js";
import { y as getSlot } from "./index.77d0dee2.js";
import { d as defineComponent, Q as ref, $ as reactive, O as computed, b as unref, w as watch, a6 as onMounted, a7 as nextTick, f as createVNode, b6 as Divider, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, W as toDisplayString, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 */import { a as PageWrapper } from "./index.2c91c99a.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.e38fbece.js";
const props = {
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String],
  bench: {
    type: [Number, String],
    default: 0
  },
  itemHeight: {
    type: [Number, String],
    required: true
  },
  items: {
    type: Array,
    default: () => []
  }
};
const prefixCls = "virtual-scroll";
function convertToUnit(str, unit = "px") {
  if (str == null || str === "") {
    return void 0;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}
var _sfc_main$1 = defineComponent({
  name: "VirtualScroll",
  props,
  setup(props2, {
    slots
  }) {
    const wrapElRef = ref(null);
    const state = reactive({
      first: 0,
      last: 0,
      scrollTop: 0
    });
    const getBenchRef = computed(() => {
      return parseInt(props2.bench, 10);
    });
    const getItemHeightRef = computed(() => {
      return parseInt(props2.itemHeight, 10);
    });
    const getFirstToRenderRef = computed(() => {
      return Math.max(0, state.first - unref(getBenchRef));
    });
    const getLastToRenderRef = computed(() => {
      return Math.min((props2.items || []).length, state.last + unref(getBenchRef));
    });
    const getContainerStyleRef = computed(() => {
      return {
        height: convertToUnit((props2.items || []).length * unref(getItemHeightRef))
      };
    });
    const getWrapStyleRef = computed(() => {
      const styles = {};
      const height = convertToUnit(props2.height);
      const minHeight = convertToUnit(props2.minHeight);
      const minWidth = convertToUnit(props2.minWidth);
      const maxHeight = convertToUnit(props2.maxHeight);
      const maxWidth = convertToUnit(props2.maxWidth);
      const width = convertToUnit(props2.width);
      if (height)
        styles.height = height;
      if (minHeight)
        styles.minHeight = minHeight;
      if (minWidth)
        styles.minWidth = minWidth;
      if (maxHeight)
        styles.maxHeight = maxHeight;
      if (maxWidth)
        styles.maxWidth = maxWidth;
      if (width)
        styles.width = width;
      return styles;
    });
    watch([() => props2.itemHeight, () => props2.height], () => {
      onScroll();
    });
    function getLast(first) {
      const wrapEl = unref(wrapElRef);
      if (!wrapEl) {
        return 0;
      }
      const height = parseInt(props2.height || 0, 10) || wrapEl.clientHeight;
      return first + Math.ceil(height / unref(getItemHeightRef));
    }
    function getFirst() {
      return Math.floor(state.scrollTop / unref(getItemHeightRef));
    }
    function onScroll() {
      const wrapEl = unref(wrapElRef);
      if (!wrapEl) {
        return;
      }
      state.scrollTop = wrapEl.scrollTop;
      state.first = getFirst();
      state.last = getLast(state.first);
    }
    function renderChildren() {
      const {
        items = []
      } = props2;
      return items.slice(unref(getFirstToRenderRef), unref(getLastToRenderRef)).map(genChild);
    }
    function genChild(item, index) {
      index += unref(getFirstToRenderRef);
      const top = convertToUnit(index * unref(getItemHeightRef));
      return createVNode("div", {
        "class": `${prefixCls}__item`,
        "style": {
          top
        },
        "key": index
      }, [getSlot(slots, "default", {
        index,
        item
      })]);
    }
    onMounted(() => {
      state.last = getLast(0);
      nextTick(() => {
        const wrapEl = unref(wrapElRef);
        if (!wrapEl) {
          return;
        }
        useEventListener({
          el: wrapEl,
          name: "scroll",
          listener: onScroll,
          wait: 0
        });
      });
    });
    return () => createVNode("div", {
      "class": prefixCls,
      "style": unref(getWrapStyleRef),
      "ref": wrapElRef
    }, [createVNode("div", {
      "class": `${prefixCls}__container`,
      "style": unref(getContainerStyleRef)
    }, [renderChildren()])]);
  }
});
var VirtualScroll_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
var vScroll = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dd7becb6"]]);
const VScroll = withInstall(vScroll);
var VirtualScroll_vue_vue_type_style_index_0_scoped_true_lang = "";
const data = (() => {
  const arr = [];
  for (let index = 1; index < 2e4; index++) {
    arr.push({
      title: "\u5217\u8868\u9879" + index
    });
  }
  return arr;
})();
const _sfc_main = defineComponent({
  components: { VScroll, Divider, PageWrapper },
  setup() {
    return { data };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B");
const _hoisted_2 = { class: "virtual-scroll-demo-wrap" };
const _hoisted_3 = { class: "virtual-scroll-demo__item" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D");
const _hoisted_5 = { class: "virtual-scroll-demo-wrap" };
const _hoisted_6 = { class: "virtual-scroll-demo__item" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Divider = resolveComponent("Divider");
  const _component_VScroll = resolveComponent("VScroll");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { class: "virtual-scroll-demo" }, {
    default: withCtx(() => [
      createVNode(_component_Divider, null, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_2, [
        createVNode(_component_VScroll, {
          itemHeight: 41,
          items: _ctx.data,
          height: 300,
          width: 300
        }, {
          default: withCtx(({ item }) => [
            createBaseVNode("div", _hoisted_3, toDisplayString(item.title), 1)
          ]),
          _: 1
        }, 8, ["items"])
      ]),
      createVNode(_component_Divider, null, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }),
      createBaseVNode("div", _hoisted_5, [
        createVNode(_component_VScroll, {
          itemHeight: 41,
          items: _ctx.data,
          height: 300,
          width: 300,
          bench: 50
        }, {
          default: withCtx(({ item }) => [
            createBaseVNode("div", _hoisted_6, toDisplayString(item.title), 1)
          ]),
          _: 1
        }, 8, ["items"])
      ])
    ]),
    _: 1
  });
}
var VirtualScroll = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-002a1a68"]]);
export { VirtualScroll as default };
