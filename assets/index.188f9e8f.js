import { B as withInstall } from "./index.f575d9f0.js";
import { u as usePermission } from "./usePermission.06ecde8e.js";
import { y as getSlot } from "./index.77d0dee2.js";
import { d as defineComponent } from "./vendor.faf2de98.js";
const _sfc_main = defineComponent({
  name: "Authority",
  props: {
    value: {
      type: [Number, Array, String],
      default: ""
    }
  },
  setup(props, { slots }) {
    const { hasPermission } = usePermission();
    function renderAuth() {
      const { value } = props;
      if (!value) {
        return getSlot(slots);
      }
      return hasPermission(value) ? getSlot(slots) : null;
    }
    return () => {
      return renderAuth();
    };
  }
});
const Authority = withInstall(_sfc_main);
export { Authority as A };
