import { f as defineStore } from "./vendor.7c0ada15.js";
import { aa as Persistent, ab as LOCK_INFO_KEY, f as useUserStore } from "./index.f009a4b5.js";
const useLockStore = defineStore({
  id: "app-lock",
  state: () => ({
    lockInfo: Persistent.getLocal(LOCK_INFO_KEY)
  }),
  getters: {
    getLockInfo() {
      return this.lockInfo;
    }
  },
  actions: {
    setLockInfo(info) {
      this.lockInfo = Object.assign({}, this.lockInfo, info);
      Persistent.setLocal(LOCK_INFO_KEY, this.lockInfo, true);
    },
    resetLockInfo() {
      Persistent.removeLocal(LOCK_INFO_KEY, true);
      this.lockInfo = null;
    },
    async unLock(password) {
      var _a;
      const userStore = useUserStore();
      if (((_a = this.lockInfo) == null ? void 0 : _a.pwd) === password) {
        this.resetLockInfo();
        return true;
      }
      const tryLogin = async () => {
        var _a2;
        try {
          const username = (_a2 = userStore.getUserInfo) == null ? void 0 : _a2.username;
          const res = await userStore.login({
            username,
            password,
            goHome: false,
            mode: "none"
          });
          if (res) {
            this.resetLockInfo();
          }
          return res;
        } catch (error) {
          return false;
        }
      };
      return await tryLogin();
    }
  }
});
export { useLockStore as u };
