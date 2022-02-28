import { d as defineComponent, cd as Sticky, ce as Search, aX as Tabbar, cf as Popup, cg as Card, aY as TabbarItem, ch as PullRefresh, ci as Radio, cj as RadioGroup, ck as Cell, cl as CellGroup, cm as List, cn as Tag, co as Button, cp as Icon, cq as Empty, Q as ref, r as resolveComponent, o as openBlock, R as createElementBlock, V as createBaseVNode, f as createVNode, e as withCtx, c as createBlock, ai as createCommentVNode, ag as Fragment, as as renderList, cr as Toast, Y as pushScopeId, Z as popScopeId, aj as createTextVNode, W as toDisplayString } from "./vendor.faf2de98.js";
/* empty css                */import { s as searchWriterRemitApi } from "./writer.f15dd8a4.js";
import { _ as _export_sfc, aD as createLocalStorage } from "./index.327c7452.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    [Sticky.name]: Sticky,
    [Search.name]: Search,
    [Tabbar.name]: Tabbar,
    [Popup.name]: Popup,
    [Card.name]: Card,
    [TabbarItem.name]: TabbarItem,
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
    const state = ref("0");
    async function onSearch(val) {
      if (val) {
        searchValue.value = val;
      }
      if (!searchValue.value) {
        Toast.fail("\u8BF7\u8FD4\u56DE\u9996\u9875\u8F93\u5165\u624B\u673A\u53F7");
        return;
      }
      list.value = await searchWriterRemitApi({
        writerNum: searchValue.value,
        state: state.value
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
        list.value = await searchWriterRemitApi({
          writerNum: searchValue.value,
          state: state.value
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
    return {
      searchValue,
      state,
      onSearch,
      show,
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      handleFilter,
      refreshing,
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
const _withScopeId = (n) => (pushScopeId("data-v-9468d9a2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "van-top-bar" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "van-doc-demo-block__title" }, "\u7ED3\u7B97\u72B6\u6001\uFF1A", -1));
const _hoisted_3 = { class: "van-popup--bottom" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u91CD\u7F6E");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u786E\u5B9A");
const _hoisted_6 = { class: "van-center-wrap" };
const _hoisted_7 = { class: "van-card__title" };
const _hoisted_8 = { class: "van-card__desc van-ellipsis" };
const _hoisted_9 = { class: "van-card__desc van-ellipsis" };
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u7ED3\u7B97\u72B6\u6001: ");
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "van-card__price-currency" }, "\xA5", -1));
const _hoisted_12 = { class: "van-card__price-integer" };
const _hoisted_13 = { class: "van-card__num" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_cell = resolveComponent("van-cell");
  const _component_van_radio = resolveComponent("van-radio");
  const _component_van_cell_group = resolveComponent("van-cell-group");
  const _component_van_radio_group = resolveComponent("van-radio-group");
  const _component_van_button = resolveComponent("van-button");
  const _component_van_popup = resolveComponent("van-popup");
  const _component_van_empty = resolveComponent("van-empty");
  const _component_van_icon = resolveComponent("van-icon");
  const _component_van_tag = resolveComponent("van-tag");
  const _component_van_card = resolveComponent("van-card");
  const _component_van_list = resolveComponent("van-list");
  const _component_van_pull_refresh = resolveComponent("van-pull-refresh");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(_component_van_cell, {
        title: "\u70B9\u51FB\u8FDB\u884C\u7B5B\u9009",
        "is-link": "",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.show = true)
      })
    ]),
    createVNode(_component_van_popup, {
      show: _ctx.show,
      "onUpdate:show": _cache[6] || (_cache[6] = ($event) => _ctx.show = $event),
      position: "right",
      teleport: "body",
      style: { height: "100%", width: "80% " }
    }, {
      default: withCtx(() => [
        _hoisted_2,
        createVNode(_component_van_radio_group, {
          modelValue: _ctx.state,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.state = $event)
        }, {
          default: withCtx(() => [
            createVNode(_component_van_cell_group, null, {
              default: withCtx(() => [
                createVNode(_component_van_cell, {
                  title: "\u5168\u90E8",
                  clickable: "",
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.state = "0")
                }, {
                  "right-icon": withCtx(() => [
                    createVNode(_component_van_radio, { name: "0" })
                  ]),
                  _: 1
                }),
                createVNode(_component_van_cell, {
                  title: "\u5DF2\u7ED3\u7B97",
                  clickable: "",
                  onClick: _cache[2] || (_cache[2] = ($event) => _ctx.state = "1")
                }, {
                  "right-icon": withCtx(() => [
                    createVNode(_component_van_radio, { name: "1" })
                  ]),
                  _: 1
                }),
                createVNode(_component_van_cell, {
                  title: "\u672A\u7ED3\u7B97",
                  clickable: "",
                  onClick: _cache[3] || (_cache[3] = ($event) => _ctx.state = "2")
                }, {
                  "right-icon": withCtx(() => [
                    createVNode(_component_van_radio, { name: "2" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_van_button, {
            type: "default",
            block: "",
            onClick: _cache[5] || (_cache[5] = ($event) => _ctx.state = "0")
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createVNode(_component_van_button, {
            type: "primary",
            block: "",
            onClick: _ctx.handleFilter
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      _: 1
    }, 8, ["show"]),
    createBaseVNode("div", _hoisted_6, [
      _ctx.list.length === 0 && !_ctx.loading ? (openBlock(), createBlock(_component_van_empty, { key: 0 })) : createCommentVNode("", true),
      createVNode(_component_van_pull_refresh, {
        modelValue: _ctx.refreshing,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.refreshing = $event),
        onRefresh: _ctx.onRefresh
      }, {
        default: withCtx(() => [
          createVNode(_component_van_list, {
            loading: _ctx.loading,
            "onUpdate:loading": _cache[7] || (_cache[7] = ($event) => _ctx.loading = $event),
            finished: _ctx.finished,
            "finished-text": "\u6CA1\u6709\u66F4\u591A\u4E86",
            onLoad: _ctx.onLoad
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
                return openBlock(), createBlock(_component_van_cell, { key: item }, {
                  default: withCtx(() => [
                    createVNode(_component_van_card, null, {
                      title: withCtx(() => [
                        createBaseVNode("h2", _hoisted_7, [
                          createVNode(_component_van_icon, {
                            name: "orders-o",
                            color: "#1989fa"
                          }),
                          createTextVNode(" " + toDisplayString(item.invoice), 1)
                        ])
                      ]),
                      desc: withCtx(() => [
                        createBaseVNode("div", _hoisted_8, " \u4ED8\u6B3E\u65F6\u95F4: " + toDisplayString(item.paymentTime), 1),
                        createBaseVNode("div", _hoisted_9, " \u6536\u8D27\u65F6\u95F4: " + toDisplayString(item.receivingTime), 1)
                      ]),
                      tags: withCtx(() => [
                        createBaseVNode("span", null, [
                          _hoisted_10,
                          createVNode(_component_van_tag, {
                            class: "mr-1",
                            plain: "",
                            type: _ctx.MAPTAG[item["wSettleState"]]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.MAPSETTLE[item["wSettleState"]]), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])
                        ])
                      ]),
                      price: withCtx(() => [
                        createBaseVNode("div", null, [
                          _hoisted_11,
                          createBaseVNode("span", _hoisted_12, toDisplayString(item.writerPrice), 1)
                        ])
                      ]),
                      num: withCtx(() => [
                        createBaseVNode("div", _hoisted_13, "\u5BA2\u670D: " + toDisplayString(item.acceptUser), 1)
                      ]),
                      _: 2
                    }, 1024)
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
    ])
  ], 64);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9468d9a2"]]);
export { index as default };
