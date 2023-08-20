import { d as defineComponent, O as computed, o as openBlock, c as createBlock, e as withCtx, b as unref, ai as createCommentVNode, a8 as Transition } from "./vendor.faf2de98.js";
import LockPage from "./LockPage.8cc64aee.js";
import { u as useLockStore } from "./lock.48f82a20.js";
import "./index.20a8e034.js";
import "./index.a2736d3e.js";
import "./useRootSetting.bd6c6dd4.js";
import "./header.d801b988.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const lockStore = useLockStore();
    const getIsLock = computed(() => {
      var _a, _b;
      return (_b = (_a = lockStore == null ? void 0 : lockStore.getLockInfo) == null ? void 0 : _a.isLock) != null ? _b : false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade-bottom",
        mode: "out-in"
      }, {
        default: withCtx(() => [
          unref(getIsLock) ? (openBlock(), createBlock(LockPage, { key: 0 })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
