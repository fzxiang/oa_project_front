import { B as defineComponent, j as computed, D as openBlock, a2 as createBlock, a7 as withCtx, u as unref, ae as createCommentVNode, a3 as Transition } from "./vendor.7c0ada15.js";
import LockPage from "./LockPage.34cf89a6.js";
import { u as useLockStore } from "./lock.3654509f.js";
import "./index.f009a4b5.js";
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
