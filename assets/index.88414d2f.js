import { u as useContextMenu } from "./useContextMenu.d84ee8e4.js";
import { H as CollapseContainer } from "./index.5dccf356.js";
import { _ as _export_sfc, F as useMessage } from "./index.27fe703a.js";
import { a as PageWrapper } from "./index.578307d0.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, aj as createTextVNode } from "./vendor.faf2de98.js";
/* empty css                 */import "./useRootSetting.13d2da37.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.4b9264e1.js";
const _sfc_main = defineComponent({
  components: { CollapseContainer, PageWrapper },
  setup() {
    const [createContextMenu] = useContextMenu();
    const { createMessage } = useMessage();
    function handleContext(e) {
      createContextMenu({
        event: e,
        items: [
          {
            label: "New",
            icon: "bi:plus",
            handler: () => {
              createMessage.success("click new");
            }
          },
          {
            label: "Open",
            icon: "bx:bxs-folder-open",
            handler: () => {
              createMessage.success("click open");
            }
          }
        ]
      });
    }
    function handleMultipleContext(e) {
      createContextMenu({
        event: e,
        items: [
          {
            label: "New",
            icon: "bi:plus",
            children: [
              {
                label: "New1-1",
                icon: "bi:plus",
                divider: true,
                children: [
                  {
                    label: "New1-1-1",
                    handler: () => {
                      createMessage.success("click new");
                    }
                  },
                  {
                    label: "New1-2-1",
                    disabled: true
                  }
                ]
              },
              {
                label: "New1-2",
                icon: "bi:plus"
              }
            ]
          }
        ]
      });
    }
    return { handleContext, handleMultipleContext };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Right Click on me ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Right Click on me ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, { title: "\u53F3\u952E\u83DC\u5355\u793A\u4F8B" }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "Simple" }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            type: "primary",
            onContextmenu: _ctx.handleContext
          }, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["onContextmenu"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        title: "Multiple",
        class: "mt-4"
      }, {
        default: withCtx(() => [
          createVNode(_component_a_button, {
            type: "primary",
            onContextmenu: _ctx.handleMultipleContext
          }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          }, 8, ["onContextmenu"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
