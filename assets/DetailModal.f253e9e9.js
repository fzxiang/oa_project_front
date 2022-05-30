import { B as BasicModal } from "./index.c96e9887.js";
import { D as Description } from "./index.5ef311ed.js";
import { a as useI18n } from "./index.f575d9f0.js";
import { getDescSchema } from "./data.d108294c.js";
import { u as useDescription } from "./useDescription.11c6b42c.js";
import { d as defineComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, b as unref, aa as mergeProps } from "./vendor.faf2de98.js";
import "./useRootSetting.f760cdbc.js";
import "./useAttrs.d4bdb35c.js";
import "./index.77d0dee2.js";
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
