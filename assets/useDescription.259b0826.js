import { at as isProdMode } from "./index.7a39a7ac.js";
import { am as getCurrentInstance, Q as ref, b as unref } from "./vendor.faf2de98.js";
function useDescription(props) {
  if (!getCurrentInstance()) {
    throw new Error("useDescription() can only be used inside setup() or functional components!");
  }
  const desc = ref(null);
  const loaded = ref(false);
  function register(instance) {
    if (unref(loaded) && isProdMode()) {
      return;
    }
    desc.value = instance;
    props && instance.setDescProps(props);
    loaded.value = true;
  }
  const methods = {
    setDescProps: (descProps) => {
      var _a;
      (_a = unref(desc)) == null ? void 0 : _a.setDescProps(descProps);
    }
  };
  return [register, methods];
}
export { useDescription as u };
