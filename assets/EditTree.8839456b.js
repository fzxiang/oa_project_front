import { d as defineComponent, b4 as Row, b3 as Col, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode, W as toDisplayString, N as h, cw as PlusOutlined, cx as DeleteOutlined } from "./vendor.faf2de98.js";
/* empty css                 */import { _ as _sfc_main$1 } from "./index.416e9c12.js";
import { t as treeData, a as treeData2, b as treeData3 } from "./data.ec134722.js";
import { a as PageWrapper } from "./index.7b4aaf5b.js";
import { _ as _export_sfc } from "./index.6c404263.js";
import "./index.a3d18deb.js";
import "./useRootSetting.aff873bd.js";
import "./useContextMenu.5a2f652f.js";
/* empty css                 *//* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.f0d311eb.js";
const _sfc_main = defineComponent({
  components: { BasicTree: _sfc_main$1, PageWrapper, Row, Col },
  setup() {
    function handlePlus(node) {
      console.log(node);
    }
    function getRightMenuList(node) {
      return [
        {
          label: "\u65B0\u589E",
          handler: () => {
            console.log("\u70B9\u51FB\u4E86\u65B0\u589E", node);
          },
          icon: "bi:plus"
        },
        {
          label: "\u5220\u9664",
          handler: () => {
            console.log("\u70B9\u51FB\u4E86\u5220\u9664", node);
          },
          icon: "bx:bxs-folder-open"
        }
      ];
    }
    const actionList = [
      {
        render: (node) => {
          return h(PlusOutlined, {
            class: "ml-2",
            onClick: () => {
              handlePlus(node);
            }
          });
        }
      },
      {
        render: () => {
          return h(DeleteOutlined);
        }
      }
    ];
    function createIcon({ level }) {
      if (level === 1) {
        return "ion:git-compare-outline";
      }
      if (level === 2) {
        return "ion:home";
      }
      if (level === 3) {
        return "ion:airplane";
      }
      return "";
    }
    return { treeData, treeData2, treeData3, actionList, getRightMenuList, createIcon };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BasicTree = resolveComponent("BasicTree");
  const _component_Col = resolveComponent("Col");
  const _component_Row = resolveComponent("Row");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_Row, { gutter: [16, 16] }, {
        default: withCtx(() => [
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE/\u81EA\u5B9A\u4E49\u56FE\u6807",
                helpMessage: "\u5E2E\u52A9\u4FE1\u606F",
                treeData: _ctx.treeData,
                actionList: _ctx.actionList,
                renderIcon: _ctx.createIcon
              }, null, 8, ["treeData", "actionList", "renderIcon"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u53F3\u952E\u83DC\u5355",
                treeData: _ctx.treeData,
                beforeRightClick: _ctx.getRightMenuList
              }, null, 8, ["treeData", "beforeRightClick"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u5DE5\u5177\u680F\u4F7F\u7528",
                toolbar: "",
                checkable: "",
                search: "",
                treeData: _ctx.treeData,
                beforeRightClick: _ctx.getRightMenuList
              }, null, 8, ["treeData", "beforeRightClick"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u6CA1\u6709fieldNames\uFF0C\u63D2\u69FD\u6709\u6548",
                helpMessage: "\u6B63\u786E\u7684\u793A\u4F8B",
                treeData: _ctx.treeData3
              }, {
                title: withCtx((item) => [
                  createTextVNode(" \u63D2\u69FD\uFF1A" + toDisplayString(item.name), 1)
                ]),
                _: 1
              }, 8, ["treeData"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u6709fieldNames\u540E\uFF0C\u63D2\u69FD\u5931\u6548",
                helpMessage: "\u9519\u8BEF\u7684\u793A\u4F8B, \u5E94\u8BE5\u663E\u793A\u63D2\u69FD\u7684\u5185\u5BB9\u624D\u5BF9",
                fieldNames: { key: "id", title: "name" },
                treeData: _ctx.treeData2
              }, {
                title: withCtx((item) => [
                  createTextVNode(" \u63D2\u69FD\uFF1A" + toDisplayString(item.title), 1)
                ]),
                _: 1
              }, 8, ["treeData"])
            ]),
            _: 1
          }),
          createVNode(_component_Col, { span: 8 }, {
            default: withCtx(() => [
              createVNode(_component_BasicTree, {
                title: "\u6709fieldNames\u540E\uFF0CactionList\u5931\u6548",
                helpMessage: "\u9519\u8BEF\u7684\u793A\u4F8B\uFF0C\u5E94\u8BE5\u5728\u9F20\u6807\u79FB\u4E0A\u53BB\u65F6\uFF0C\u663E\u793A\u65B0\u589E\u548C\u5220\u9664\u6309\u94AE\u624D\u5BF9",
                treeData: _ctx.treeData3,
                actionList: _ctx.actionList,
                fieldNames: { key: "key", title: "name" }
              }, null, 8, ["treeData", "actionList"])
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
var EditTree = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { EditTree as default };
