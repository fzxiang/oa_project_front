import { _ as _sfc_main$1 } from "./index.af03f273.js";
import { t as treeData } from "./data.ec134722.js";
import { a as PageWrapper } from "./index.55f54600.js";
import { d as defineComponent, cs as Card, b4 as Row, b3 as Col, aS as Spin, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, A as cloneDeep, a7 as nextTick, b as unref, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                 */import { _ as _export_sfc } from "./index.26d4b9cf.js";
import "./index.518f457b.js";
import "./useRootSetting.5dedaee7.js";
import "./useContextMenu.e78287bc.js";
/* empty css                 *//* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.80c2cc86.js";
const _sfc_main = defineComponent({
  components: { BasicTree: _sfc_main$1, PageWrapper, Card, Row, Col, Spin },
  setup() {
    const asyncTreeRef = ref(null);
    const asyncExpandTreeRef = ref(null);
    const tree2 = ref([]);
    const treeLoading = ref(false);
    function handleCheck(checkedKeys, e) {
      console.log("onChecked", checkedKeys, e);
    }
    function loadTreeData() {
      treeLoading.value = true;
      setTimeout(() => {
        tree2.value = cloneDeep(treeData);
        treeLoading.value = false;
        nextTick(() => {
          var _a;
          console.log(unref(asyncExpandTreeRef));
          (_a = unref(asyncExpandTreeRef)) == null ? void 0 : _a.expandAll(true);
        });
      }, 2e3);
    }
    const tree = ref([
      {
        title: "parent ",
        key: "0-0"
      }
    ]);
    function onLoadData(treeNode) {
      return new Promise((resolve) => {
        if (!treeNode.children) {
          resolve();
          return;
        }
        setTimeout(() => {
          const asyncTreeAction = unref(asyncTreeRef);
          if (asyncTreeAction) {
            const nodeChildren = [
              { title: `Child Node ${treeNode.eventKey}-0`, key: `${treeNode.eventKey}-0` },
              { title: `Child Node ${treeNode.eventKey}-1`, key: `${treeNode.eventKey}-1` }
            ];
            asyncTreeAction.updateNodeByKey(treeNode.eventKey, { children: nodeChildren });
            asyncTreeAction.setExpandedKeys([
              treeNode.eventKey,
              ...asyncTreeAction.getExpandedKeys()
            ]);
          }
          resolve();
          return;
        }, 1e3);
      });
    }
    return {
      treeData,
      handleCheck,
      tree,
      onLoadData,
      asyncTreeRef,
      asyncExpandTreeRef,
      tree2,
      loadTreeData,
      treeLoading
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" 123123 ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\u52A0\u8F7D\u6570\u636E");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTree = resolveComponent("BasicTree");
  const _component_Col = resolveComponent("Col");
  const _component_a_button = resolveComponent("a-button");
  const _component_Spin = resolveComponent("Spin");
  const _component_Card = resolveComponent("Card");
  const _component_Row = resolveComponent("Row");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "Tree\u57FA\u7840\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_Row, { gutter: [16, 16] }, {
        default: withCtx(() => [
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42",
                treeData: _ctx.treeData,
                defaultExpandLevel: "1"
              }, {
                title: withCtx(() => [
                  _hoisted_1
                ]),
                _: 1
              }, 8, ["treeData"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00",
                treeData: _ctx.treeData,
                checkable: true,
                defaultExpandAll: "",
                onCheck: _ctx.handleCheck
              }, null, 8, ["treeData", "onCheck"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B",
                treeData: _ctx.treeData,
                checkable: true,
                expandedKeys: ["0-0"],
                checkedKeys: ["0-0"]
              }, null, 8, ["treeData"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811",
                ref: "asyncTreeRef",
                treeData: _ctx.tree,
                "load-data": _ctx.onLoadData
              }, null, 8, ["treeData", "load-data"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 16 }, {
            default: withCtx(() => [
              createVNode(_component_Card, { title: "\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00" }, {
                extra: withCtx(() => [
                  createVNode(_component_a_button, {
                    onClick: _ctx.loadTreeData,
                    loading: _ctx.treeLoading
                  }, {
                    default: withCtx(() => [
                      _hoisted_2
                    ]),
                    _: 1
                  }, 8, ["onClick", "loading"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_Spin, { spinning: _ctx.treeLoading }, {
                    default: withCtx(() => [
                      createVNode(_component_BasicTree, {
                        ref: "asyncExpandTreeRef",
                        treeData: _ctx.tree2
                      }, null, 8, ["treeData"])
                    ]),
                    _: 1
                  }, 8, ["spinning"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
