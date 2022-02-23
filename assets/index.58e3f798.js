import { B as defineComponent, j as computed, D as openBlock, a2 as createBlock, a7 as withCtx, u as unref, ae as createCommentVNode, a3 as Transition } from "./vendor.7c0ada15.js";
import LockPage from "./LockPage.0e0b2ecf.js";
import { u as useLockStore } from "./lock.b5151bc4.js";
import "./index.d5751037.js";
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
