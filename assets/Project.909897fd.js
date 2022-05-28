import { d as defineComponent, cc as List, cs as Card, b4 as Row, b3 as Col, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, R as createElementBlock, as as renderList, X as normalizeClass, V as createBaseVNode, W as toDisplayString, ag as Fragment } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                 */import { projectList } from "./data.28c0f2e3.js";
import { _ as _export_sfc } from "./index.6c404263.js";
var demoImg = "/assets/demo.f132a062.png";
var Project_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  components: {
    List,
    ListItem: List.Item,
    Card,
    [Row.name]: Row,
    [Col.name]: Col
  },
  setup() {
    return {
      prefixCls: "account-center-project",
      list: projectList,
      demoImg
    };
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  const _component_ListItem = resolveComponent("ListItem");
  const _component_a_col = resolveComponent("a-col");
  const _component_a_row = resolveComponent("a-row");
  const _component_List = resolveComponent("List");
  return openBlock(), createBlock(_component_List, {
    class: normalizeClass(_ctx.prefixCls)
  }, {
    default: withCtx(() => [
      createVNode(_component_a_row, { gutter: 16 }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item) => {
            return openBlock(), createBlock(_component_a_col, {
              key: item.title,
              span: 6
            }, {
              default: withCtx(() => [
                createVNode(_component_ListItem, null, {
                  default: withCtx(() => [
                    createVNode(_component_Card, {
                      hoverable: true,
                      class: normalizeClass(`${_ctx.prefixCls}__card`)
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("img", { src: _ctx.demoImg }, null, 8, _hoisted_1),
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__card-title`)
                        }, toDisplayString(item.title), 3),
                        createBaseVNode("div", {
                          class: normalizeClass(`${_ctx.prefixCls}__card-content`)
                        }, toDisplayString(item.content), 3)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
var Project = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Project as default };
