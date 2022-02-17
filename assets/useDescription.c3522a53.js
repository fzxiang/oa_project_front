import { aD as isProdMode } from "./index.4f9aa98a.js";
import { aj as getCurrentInstance, r as ref, u as unref } from "./vendor.7c0ada15.js";
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
