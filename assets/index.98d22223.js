import { d as defineComponent, cv as Avatar, cc as List, cz as Typography, bo as Tag, Q as ref, O as computed, w as watch, b as unref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, R as createElementBlock, as as renderList, f as createVNode, V as createBaseVNode, a3 as normalizeStyle, aj as createTextVNode, W as toDisplayString, ai as createCommentVNode, ag as Fragment, X as normalizeClass, at as Popover, cW as BellOutlined, bm as Tabs, bG as Badge } from "./vendor.faf2de98.js";
/* empty css                 *//* empty css                  */import { d as useDesign } from "./index.7fb5b23a.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                  */import { _ as _export_sfc, aj as isNumber, F as useMessage } from "./index.c01f1eb2.js";
import "./useRootSetting.f9f62c0d.js";
const tabListData = [
  {
    key: "1",
    name: "\u901A\u77E5",
    list: [
      {
        id: "000000001",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
        title: "\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",
        description: "",
        datetime: "2017-08-09",
        type: "1"
      },
      {
        id: "000000002",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
        title: "\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",
        description: "",
        datetime: "2017-08-08",
        type: "1"
      },
      {
        id: "000000003",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
        title: "\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000004",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000005",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u52A8\u663E\u793A\u7701\u7565\u53F7\uFF0C\u672C\u4F8B\u4E2D\u6807\u9898\u884C\u6570\u5DF2\u8BBE\u4E3A1\u884C\uFF0C\u5982\u679C\u5185\u5BB9\u8D85\u8FC71\u884C\u5C06\u81EA\u52A8\u622A\u65AD\u5E76\u652F\u6301tooltip\u663E\u793A\u5B8C\u6574\u6807\u9898\u3002",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000006",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000007",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000008",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000009",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      },
      {
        id: "000000010",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
        title: "\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",
        description: "",
        datetime: "2017-08-07",
        type: "1"
      }
    ]
  },
  {
    key: "2",
    name: "\u6D88\u606F",
    list: [
      {
        id: "000000006",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",
        description: "\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",
        datetime: "2017-08-07",
        type: "2",
        clickClose: true
      },
      {
        id: "000000007",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60",
        description: "\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8",
        datetime: "2017-08-07",
        type: "2",
        clickClose: true
      },
      {
        id: "000000008",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
        title: "\u6807\u9898",
        description: "\u8BF7\u5C06\u9F20\u6807\u79FB\u52A8\u5230\u6B64\u5904\uFF0C\u4EE5\u4FBF\u6D4B\u8BD5\u8D85\u957F\u7684\u6D88\u606F\u5728\u6B64\u5904\u5C06\u5982\u4F55\u5904\u7406\u3002\u672C\u4F8B\u4E2D\u8BBE\u7F6E\u7684\u63CF\u8FF0\u6700\u5927\u884C\u6570\u4E3A2\uFF0C\u8D85\u8FC72\u884C\u7684\u63CF\u8FF0\u5185\u5BB9\u5C06\u88AB\u7701\u7565\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7tooltip\u67E5\u770B\u5B8C\u6574\u5185\u5BB9",
        datetime: "2017-08-07",
        type: "2",
        clickClose: true
      }
    ]
  },
  {
    key: "3",
    name: "\u5F85\u529E",
    list: [
      {
        id: "000000009",
        avatar: "",
        title: "\u4EFB\u52A1\u540D\u79F0",
        description: "\u4EFB\u52A1\u9700\u8981\u5728 2017-01-12 20:00 \u524D\u542F\u52A8",
        datetime: "",
        extra: "\u672A\u5F00\u59CB",
        color: "",
        type: "3"
      },
      {
        id: "000000010",
        avatar: "",
        title: "\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",
        description: "\u51A0\u9716 \u9700\u5728 2017-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",
        datetime: "",
        extra: "\u9A6C\u4E0A\u5230\u671F",
        color: "red",
        type: "3"
      },
      {
        id: "000000011",
        avatar: "",
        title: "\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",
        description: "\u6307\u6D3E\u7AF9\u5C14\u4E8E 2017-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",
        datetime: "",
        extra: "\u5DF2\u8017\u65F6 8 \u5929",
        color: "gold",
        type: "3"
      },
      {
        id: "000000012",
        avatar: "",
        title: "ABCD \u7248\u672C\u53D1\u5E03",
        description: "\u6307\u6D3E\u7AF9\u5C14\u4E8E 2017-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",
        datetime: "",
        extra: "\u8FDB\u884C\u4E2D",
        color: "blue",
        type: "3"
      }
    ]
  }
];
var NoticeList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  components: {
    [Avatar.name]: Avatar,
    [List.name]: List,
    [List.Item.name]: List.Item,
    AListItemMeta: List.Item.Meta,
    ATypographyParagraph: Typography.Paragraph,
    [Tag.name]: Tag
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    pageSize: {
      type: [Boolean, Number],
      default: 5
    },
    currentPage: {
      type: Number,
      default: 1
    },
    titleRows: {
      type: Number,
      default: 1
    },
    descRows: {
      type: Number,
      default: 2
    },
    onTitleClick: {
      type: Function
    }
  },
  emits: ["update:currentPage"],
  setup(props, { emit }) {
    const { prefixCls } = useDesign("header-notify-list");
    const current = ref(props.currentPage || 1);
    const getData = computed(() => {
      const { pageSize, list } = props;
      if (pageSize === false)
        return [];
      let size = isNumber(pageSize) ? pageSize : 5;
      return list.slice(size * (unref(current) - 1), size * unref(current));
    });
    watch(() => props.currentPage, (v) => {
      current.value = v;
    });
    const isTitleClickable = computed(() => !!props.onTitleClick);
    const getPagination = computed(() => {
      const { list, pageSize } = props;
      if (pageSize > 0 && list && list.length > pageSize) {
        return {
          total: list.length,
          pageSize,
          current: unref(current),
          onChange(page) {
            current.value = page;
            emit("update:currentPage", page);
          }
        };
      } else {
        return false;
      }
    });
    function handleTitleClick(item) {
      props.onTitleClick && props.onTitleClick(item);
    }
    return { prefixCls, getPagination, getData, handleTitleClick, isTitleClickable };
  }
});
const _hoisted_1$1 = { class: "title" };
const _hoisted_2 = {
  key: 0,
  class: "extra"
};
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 0,
  class: "description"
};
const _hoisted_5 = { class: "datetime" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_typography_paragraph = resolveComponent("a-typography-paragraph");
  const _component_a_tag = resolveComponent("a-tag");
  const _component_a_avatar = resolveComponent("a-avatar");
  const _component_a_list_item_meta = resolveComponent("a-list-item-meta");
  const _component_a_list_item = resolveComponent("a-list-item");
  const _component_a_list = resolveComponent("a-list");
  return openBlock(), createBlock(_component_a_list, {
    class: normalizeClass(_ctx.prefixCls),
    bordered: "",
    pagination: _ctx.getPagination
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getData, (item) => {
        return openBlock(), createBlock(_component_a_list_item, {
          key: item.id,
          class: "list-item"
        }, {
          default: withCtx(() => [
            createVNode(_component_a_list_item_meta, null, {
              title: withCtx(() => [
                createBaseVNode("div", _hoisted_1$1, [
                  createVNode(_component_a_typography_paragraph, {
                    onClick: ($event) => _ctx.handleTitleClick(item),
                    style: normalizeStyle([{ "width": "100%", "margin-bottom": "0 !important" }, { cursor: _ctx.isTitleClickable ? "pointer" : "" }]),
                    delete: !!item.titleDelete,
                    ellipsis: _ctx.$props.titleRows && _ctx.$props.titleRows > 0 ? { rows: _ctx.$props.titleRows, tooltip: !!item.title } : false,
                    content: item.title
                  }, null, 8, ["onClick", "style", "delete", "ellipsis", "content"]),
                  item.extra ? (openBlock(), createElementBlock("div", _hoisted_2, [
                    createVNode(_component_a_tag, {
                      class: "tag",
                      color: item.color
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.extra), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              avatar: withCtx(() => [
                item.avatar ? (openBlock(), createBlock(_component_a_avatar, {
                  key: 0,
                  class: "avatar",
                  src: item.avatar
                }, null, 8, ["src"])) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(item.avatar), 1))
              ]),
              description: withCtx(() => [
                createBaseVNode("div", null, [
                  item.description ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    createVNode(_component_a_typography_paragraph, {
                      style: { "width": "100%", "margin-bottom": "0 !important" },
                      ellipsis: _ctx.$props.descRows && _ctx.$props.descRows > 0 ? { rows: _ctx.$props.descRows, tooltip: !!item.description } : false,
                      content: item.description
                    }, null, 8, ["ellipsis", "content"])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_5, toDisplayString(item.datetime), 1)
                ])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  }, 8, ["class", "pagination"]);
}
var NoticeList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-313258aa"]]);
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  components: { Popover, BellOutlined, Tabs, TabPane: Tabs.TabPane, Badge, NoticeList },
  setup() {
    const { prefixCls } = useDesign("header-notify");
    const { createMessage } = useMessage();
    const listData = ref(tabListData);
    const count = computed(() => {
      let count2 = 0;
      for (let i = 0; i < tabListData.length; i++) {
        count2 += tabListData[i].list.length;
      }
      return count2;
    });
    function onNoticeClick(record) {
      createMessage.success("\u4F60\u70B9\u51FB\u4E86\u901A\u77E5\uFF0CID=" + record.id);
      record.titleDelete = !record.titleDelete;
    }
    return {
      prefixCls,
      listData,
      count,
      onNoticeClick,
      numberStyle: {}
    };
  }
});
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BellOutlined = resolveComponent("BellOutlined");
  const _component_Badge = resolveComponent("Badge");
  const _component_NoticeList = resolveComponent("NoticeList");
  const _component_TabPane = resolveComponent("TabPane");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_Popover = resolveComponent("Popover");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createVNode(_component_Popover, {
      title: "",
      trigger: "click",
      overlayClassName: `${_ctx.prefixCls}__overlay`
    }, {
      content: withCtx(() => [
        createVNode(_component_Tabs, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.listData, (item) => {
              return openBlock(), createBlock(_component_TabPane, {
                key: item.key
              }, {
                tab: withCtx(() => [
                  createTextVNode(toDisplayString(item.name) + " ", 1),
                  item.list.length !== 0 ? (openBlock(), createElementBlock("span", _hoisted_1, "(" + toDisplayString(item.list.length) + ")", 1)) : createCommentVNode("", true)
                ]),
                default: withCtx(() => [
                  item.key === "1" ? (openBlock(), createBlock(_component_NoticeList, {
                    key: 0,
                    list: item.list,
                    onTitleClick: _ctx.onNoticeClick
                  }, null, 8, ["list", "onTitleClick"])) : (openBlock(), createBlock(_component_NoticeList, {
                    key: 1,
                    list: item.list
                  }, null, 8, ["list"]))
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        })
      ]),
      default: withCtx(() => [
        createVNode(_component_Badge, {
          count: _ctx.count,
          dot: "",
          numberStyle: _ctx.numberStyle
        }, {
          default: withCtx(() => [
            createVNode(_component_BellOutlined)
          ]),
          _: 1
        }, 8, ["count", "numberStyle"])
      ]),
      _: 1
    }, 8, ["overlayClassName"])
  ], 2);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
