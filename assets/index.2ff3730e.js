import { B as withInstall } from "./index.deb64523.js";
import { u as usePermission } from "./usePermission.4e45ee86.js";
import { y as getSlot } from "./index.96780b6a.js";
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
