import { B as defineComponent, aa as Tooltip, bE as Badge, a as useRouter, j as computed, a1 as resolveComponent, D as openBlock, a2 as createBlock, a7 as withCtx, w as createVNode } from "./vendor.7c0ada15.js";
/* empty css                  */import { _ as _export_sfc, I as Icon, aP as useErrorLogStore, b as useI18n, P as PageEnum } from "./index.f009a4b5.js";
const _sfc_main = defineComponent({
  name: "ErrorAction",
  components: { Icon, Tooltip, Badge },
  setup() {
    const { t } = useI18n();
    const { push } = useRouter();
    const errorLogStore = useErrorLogStore();
    const getCount = computed(() => errorLogStore.getErrorLogListCount);
    function handleToErrorList() {
      push(PageEnum.ERROR_LOG_PAGE).then(() => {
        errorLogStore.setErrorLogListCount(0);
      });
    }
    return {
      t,
      getCount,
      handleToErrorList
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = resolveComponent("Icon");
  const _component_Badge = resolveComponent("Badge");
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createBlock(_component_Tooltip, {
    title: _ctx.t("layout.header.tooltipErrorLog"),
    placement: "bottom",
    mouseEnterDelay: 0.5,
    onClick: _ctx.handleToErrorList
  }, {
    default: withCtx(() => [
      createVNode(_component_Badge, {
        count: _ctx.getCount,
        offset: [0, 10],
        overflowCount: 99
      }, {
        default: withCtx(() => [
          createVNode(_component_Icon, { icon: "ion:bug-outline" })
        ]),
        _: 1
      }, 8, ["count"])
    ]),
    _: 1
  }, 8, ["title", "mouseEnterDelay", "onClick"]);
}
var ErrorAction = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { ErrorAction as default };
