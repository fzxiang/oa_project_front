import { d as defineComponent, cd as Sticky, ce as Search, cf as Popup, cg as Card, ch as PullRefresh, ci as Radio, cj as RadioGroup, ck as Cell, cl as CellGroup, cm as List, cn as Tag, co as Button, cp as Icon, cq as Empty, Q as ref, r as resolveComponent, o as openBlock, R as createElementBlock, f as createVNode, e as withCtx, V as createBaseVNode, c as createBlock, ai as createCommentVNode, ag as Fragment, as as renderList, cr as Toast, W as toDisplayString, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                */import { g as getWriterInfoApi, a as getOrderOfRemitApi } from "./writer.67f35acb.js";
import { _ as _export_sfc, aD as createLocalStorage } from "./index.f575d9f0.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "MobileHome",
  components: {
    [Sticky.name]: Sticky,
    [Search.name]: Search,
    [Popup.name]: Popup,
    [Card.name]: Card,
    [PullRefresh.name]: PullRefresh,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [List.name]: List,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Empty.name]: Empty
  },
  setup() {
    const ls = createLocalStorage();
    const searchValue = ref(ls.get("writerNum") || "");
    async function onSearch(val) {
      if (val) {
        searchValue.value = val;
      }
      if (!/^(1)\d{10}$/.test(searchValue.value)) {
        Toast.fail("\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7");
        return;
      }
      ls.set("writerNum", searchValue.value);
      list.value = await getWriterInfoApi({
        writerNum: searchValue.value
      });
    }
    async function onClickButton() {
      if (!/^(1)\d{10}$/.test(searchValue.value)) {
        Toast.fail("\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7");
        return;
      }
      ls.set("writerNum", searchValue.value);
      list.value = await getWriterInfoApi({
        writerNum: searchValue.value
      });
    }
    const show = ref(false);
    function handleFilter() {
      show.value = false;
      onSearch();
    }
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    async function onLoad() {
      console.log("onload", refreshing.value);
      if (refreshing.value) {
        list.value = [];
        refreshing.value = false;
      }
      if (searchValue.value) {
        list.value = await getWriterInfoApi({
          writerNum: searchValue.value
        });
      }
      loading.value = false;
      finished.value = true;
    }
    function onRefresh() {
      finished.value = false;
      loading.value = true;
      onLoad();
    }
    const showDetail = ref(false);
    const detailList = ref([]);
    async function handleShowDetail(id) {
      showDetail.value = true;
      detailList.value = await getOrderOfRemitApi({ id });
    }
    return {
      searchValue,
      onSearch,
      onClickButton,
      show,
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      handleFilter,
      refreshing,
      handleShowDetail,
      showDetail,
      detailList,
      MAPSETTLE: {
        1: "\u5DF2\u7ED3\u7B97",
        2: "\u672A\u7ED3\u7B97",
        3: "\u6682\u7F13\u7ED3\u7B97"
      },
      MAPSTATUS: {
        0: "\u6682\u65E0\u8865\u507F",
        1: "\u7A3F\u8D39\u8865\u507F"
      },
      MAPTAG: {
        0: "primary",
        1: "success",
        2: "danger",
        3: "warning"
      }
    };
  }
});
const _hoisted_1 = { class: "van-center-wrap" };
const _hoisted_2 = { style: { "background": "#e4ffc8", "line-height": "36px", "text-align": "center" } };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6253\u6B3E\u91D1\u989D ");
const _hoisted_4 = { style: { "border-bottom": "4px solid #f1f1f1" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_search = resolveComponent("van-search");
  const _component_van_empty = resolveComponent("van-empty");
  const _component_van_cell = resolveComponent("van-cell");
  const _component_van_cell_group = resolveComponent("van-cell-group");
  const _component_van_list = resolveComponent("van-list");
  const _component_van_pull_refresh = resolveComponent("van-pull-refresh");
  const _component_van_popup = resolveComponent("van-popup");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_van_search, {
      class: "van-top-bar",
      modelValue: _ctx.searchValue,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.searchValue = $event),
      shape: "round",
      "show-action": "",
      background: "#ffffff",
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      onSearch: _ctx.onSearch
    }, {
      action: withCtx(() => [
        createBaseVNode("div", {
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickButton && _ctx.onClickButton(...args))
        }, "\u641C\u7D22")
      ]),
      _: 1
    }, 8, ["modelValue", "onSearch"]),
    createBaseVNode("div", _hoisted_1, [
      _ctx.list.length === 0 && !_ctx.loading ? (openBlock(), createBlock(_component_van_empty, { key: 0 })) : createCommentVNode("", true),
      createVNode(_component_van_pull_refresh, {
        modelValue: _ctx.refreshing,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.refreshing = $event),
        onRefresh: _ctx.onRefresh
      }, {
        default: withCtx(() => [
          createVNode(_component_van_list, {
            loading: _ctx.loading,
            "onUpdate:loading": _cache[2] || (_cache[2] = ($event) => _ctx.loading = $event),
            finished: _ctx.finished,
            "finished-text": "\u6CA1\u6709\u66F4\u591A\u4E86",
            onLoad: _ctx.onLoad
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
                return openBlock(), createBlock(_component_van_cell_group, {
                  key: item,
                  inset: ""
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, toDisplayString(item.remitTime), 1),
                    createVNode(_component_van_cell, {
                      title: "\u6253\u6B3E\u91D1\u989D",
                      value: item.remitPrice
                    }, {
                      title: withCtx(() => [
                        _hoisted_3
                      ]),
                      value: withCtx(() => [
                        createTextVNode(toDisplayString(item.remitPrice), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]),
                    createVNode(_component_van_cell, {
                      title: "\u8BE6\u60C5",
                      "is-link": "",
                      onClick: ($event) => _ctx.handleShowDetail(item.id)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["loading", "finished", "onLoad"])
        ]),
        _: 1
      }, 8, ["modelValue", "onRefresh"])
    ]),
    createVNode(_component_van_popup, {
      show: _ctx.showDetail,
      "onUpdate:show": _cache[4] || (_cache[4] = ($event) => _ctx.showDetail = $event),
      position: "right",
      style: { width: "80%", height: "100%" }
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.detailList, (item) => {
          return openBlock(), createBlock(_component_van_cell_group, { key: item }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_van_cell, {
                  title: item.invoice
                }, null, 8, ["title"]),
                createVNode(_component_van_cell, {
                  title: "\u7A3F\u8D39",
                  value: item.writerPrice
                }, null, 8, ["value"]),
                createVNode(_component_van_cell, {
                  title: "\u6D3E\u5355\u5BA2\u670D",
                  value: item.acceptUser
                }, null, 8, ["value"]),
                createVNode(_component_van_cell, {
                  title: "\u63A5\u5355\u65E5\u671F",
                  value: item.receivingTime
                }, null, 8, ["value"]),
                createVNode(_component_van_cell, {
                  title: "\u786E\u8BA4\u6536\u8D27\u65E5\u671F",
                  value: item.paymentTime
                }, null, 8, ["value"])
              ])
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      _: 1
    }, 8, ["show"])
  ], 64);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bfd70e36"]]);
export { index as default };
