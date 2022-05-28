import { _ as _sfc_main$1 } from "./index.0c9914b4.js";
import { t as treeData } from "./data.ec134722.js";
import { _ as _export_sfc, F as useMessage } from "./index.e7b2878b.js";
import { a as PageWrapper } from "./index.dfbcda7d.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, V as createBaseVNode, f as createVNode, aj as createTextVNode, b as unref } from "./vendor.faf2de98.js";
import "./index.69692b74.js";
import "./useRootSetting.63072823.js";
import "./useContextMenu.b5aeeb01.js";
/* empty css                 *//* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.b40837c1.js";
const _sfc_main = defineComponent({
  components: { BasicTree: _sfc_main$1, PageWrapper },
  setup() {
    const treeRef = ref(null);
    const { createMessage } = useMessage();
    function getTree() {
      const tree = unref(treeRef);
      if (!tree) {
        throw new Error("tree is null!");
      }
      return tree;
    }
    function handleLevel(level) {
      getTree().filterByLevel(level);
    }
    function handleSetCheckData() {
      getTree().setCheckedKeys(["0-0"]);
    }
    function handleGetCheckData() {
      const keys = getTree().getCheckedKeys();
      createMessage.success(JSON.stringify(keys));
    }
    function handleSetSelectData() {
      getTree().setSelectedKeys(["0-0"]);
    }
    function handleGetSelectData() {
      const keys = getTree().getSelectedKeys();
      createMessage.success(JSON.stringify(keys));
    }
    function handleSetExpandData() {
      getTree().setExpandedKeys(["0-0"]);
    }
    function handleGetExpandData() {
      const keys = getTree().getExpandedKeys();
      createMessage.success(JSON.stringify(keys));
    }
    function checkAll(checkAll2) {
      getTree().checkAll(checkAll2);
    }
    function expandAll(checkAll2) {
      getTree().expandAll(checkAll2);
    }
    function appendNodeByKey(parentKey = null) {
      getTree().insertNodeByKey({
        parentKey,
        node: {
          title: "\u65B0\u589E\u8282\u70B9",
          key: "2-2-2"
        },
        push: "push"
      });
    }
    function deleteNodeByKey(key) {
      getTree().deleteNodeByKey(key);
    }
    function updateNodeByKey(key) {
      getTree().updateNodeByKey(key, {
        title: "parent2-new"
      });
    }
    return {
      treeData,
      treeRef,
      handleLevel,
      handleSetCheckData,
      handleGetCheckData,
      handleSetSelectData,
      handleGetSelectData,
      handleSetExpandData,
      handleGetExpandData,
      appendNodeByKey,
      deleteNodeByKey,
      updateNodeByKey,
      checkAll,
      expandAll
    };
  }
});
const _hoisted_1 = { class: "mb-4" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" \u5C55\u5F00\u5168\u90E8 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \u6298\u53E0\u5168\u90E8 ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" \u5168\u9009 ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" \u5168\u4E0D\u9009 ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" \u663E\u793A\u5230\u7B2C2\u7EA7 ");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u663E\u793A\u5230\u7B2C1\u7EA7 ");
const _hoisted_8 = { class: "mb-4" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u8BBE\u7F6E\u52FE\u9009\u6570\u636E ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u52FE\u9009\u6570\u636E ");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" \u8BBE\u7F6E\u9009\u4E2D\u6570\u636E ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u9009\u4E2D\u6570\u636E ");
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" \u8BBE\u7F6E\u5C55\u5F00\u6570\u636E ");
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" \u83B7\u53D6\u5C55\u5F00\u6570\u636E ");
const _hoisted_15 = { class: "mb-4" };
const _hoisted_16 = /* @__PURE__ */ createTextVNode(" \u6DFB\u52A0\u6839\u8282\u70B9 ");
const _hoisted_17 = /* @__PURE__ */ createTextVNode(" \u6DFB\u52A0\u5728parent3\u5185\u6DFB\u52A0\u8282\u70B9 ");
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" \u5220\u9664parent3\u8282\u70B9 ");
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" \u66F4\u65B0parent2\u8282\u70B9 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_BasicTree = resolveComponent("BasicTree");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B",
    contentBackground: "",
    contentClass: "p-4"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_a_button, {
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.expandAll(true)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.expandAll(false)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.checkAll(true)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.checkAll(false)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleLevel(2)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleLevel(1)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_8, [
        createVNode(_component_a_button, {
          onClick: _ctx.handleSetCheckData,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.handleGetCheckData,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.handleSetSelectData,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.handleGetSelectData,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.handleSetExpandData,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          onClick: _ctx.handleGetExpandData,
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      createBaseVNode("div", _hoisted_15, [
        createVNode(_component_a_button, {
          onClick: _cache[6] || (_cache[6] = ($event) => _ctx.appendNodeByKey(null)),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_16
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[7] || (_cache[7] = ($event) => _ctx.appendNodeByKey("2-2")),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_17
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[8] || (_cache[8] = ($event) => _ctx.deleteNodeByKey("2-2")),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_18
          ]),
          _: 1
        }),
        createVNode(_component_a_button, {
          onClick: _cache[9] || (_cache[9] = ($event) => _ctx.updateNodeByKey("1-1")),
          class: "mr-2"
        }, {
          default: withCtx(() => [
            _hoisted_19
          ]),
          _: 1
        })
      ]),
      createVNode(_component_BasicTree, {
        treeData: _ctx.treeData,
        title: "\u51FD\u6570\u64CD\u4F5C",
        ref: "treeRef",
        checkable: true
      }, null, 8, ["treeData"])
    ]),
    _: 1
  });
}
var ActionTree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ActionTree as default };
