import { B as defineComponent, ca as List, cb as Card, b1 as Row, b0 as Col, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode, F as createElementBlock, aq as renderList, L as normalizeClass, J as createBaseVNode, K as toDisplayString, ac as Fragment } from "./vendor.7c0ada15.js";
/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                 */import { projectList } from "./data.ac6bfaf3.js";
import { _ as _export_sfc } from "./index.400d2de0.js";
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
