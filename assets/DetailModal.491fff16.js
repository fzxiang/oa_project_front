import { B as BasicModal } from "./index.887225a6.js";
import { D as Description } from "./index.0c022ce3.js";
import { a as useI18n } from "./index.27fe703a.js";
import { getDescSchema } from "./data.7077ed9d.js";
import { u as useDescription } from "./useDescription.897bb065.js";
import { d as defineComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, b as unref, aa as mergeProps } from "./vendor.faf2de98.js";
import "./useRootSetting.13d2da37.js";
import "./useAttrs.d4bdb35c.js";
import "./index.5dccf356.js";
import "./useWindowSizeFn.7703d3fa.js";
/* empty css                  *//* empty css                 */const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    info: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const [register] = useDescription({
      column: 2,
      schema: getDescSchema()
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(BasicModal), mergeProps({
        width: 800,
        title: unref(t)("sys.errorLog.tableActionDesc")
      }, _ctx.$attrs), {
        default: withCtx(() => [
          createVNode(unref(Description), {
            data: __props.info,
            onRegister: unref(register)
          }, null, 8, ["data", "onRegister"])
        ]),
        _: 1
      }, 16, ["title"]);
    };
  }
});
export { _sfc_main as default };
