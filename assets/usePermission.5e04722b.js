import { q as useUserStore, c as useAppStore, L as usePermissionStore, r as router, s as setting, I as PermissionModeEnum, A as isArray, a1 as useMultipleTabStore, a2 as resetRouter } from "./index.59040ad2.js";
import { u as useTabs } from "./useTabs.a7fba09a.js";
import { aR as intersection } from "./vendor.faf2de98.js";
function usePermission() {
  const userStore = useUserStore();
  const appStore = useAppStore();
  const permissionStore = usePermissionStore();
  const { closeAll } = useTabs(router);
  async function togglePermissionMode() {
    appStore.setProjectConfig({
      permissionMode: setting.permissionMode === PermissionModeEnum.BACK ? PermissionModeEnum.ROUTE_MAPPING : PermissionModeEnum.BACK
    });
    location.reload();
  }
  async function resume() {
    const tabStore = useMultipleTabStore();
    tabStore.clearCacheTabs();
    resetRouter();
    const routes = await permissionStore.buildRoutesAction();
    routes.forEach((route) => {
      router.addRoute(route);
    });
    permissionStore.setLastBuildMenuTime();
    closeAll();
  }
  function hasPermission(value, def = true) {
    var _a;
    if (!value) {
      return def;
    }
    const permMode = setting.permissionMode;
    if ([PermissionModeEnum.ROUTE_MAPPING, PermissionModeEnum.ROLE].includes(permMode)) {
      if (!isArray(value)) {
        return (_a = userStore.getRoleList) == null ? void 0 : _a.includes(value);
      }
      return intersection(value, userStore.getRoleList).length > 0;
    }
    if (PermissionModeEnum.BACK === permMode) {
      const allCodeList = permissionStore.getPermCodeList;
      if (!isArray(value)) {
        return allCodeList.includes(value);
      }
      return intersection(value, allCodeList).length > 0;
    }
    return true;
  }
  async function changeRole(roles) {
    if (setting.permissionMode !== PermissionModeEnum.ROUTE_MAPPING) {
      throw new Error("Please switch PermissionModeEnum to ROUTE_MAPPING mode in the configuration to operate!");
    }
    if (!isArray(roles)) {
      roles = [roles];
    }
    userStore.setRoleList(roles);
    await resume();
  }
  async function refreshMenu() {
    resume();
  }
  return { changeRole, hasPermission, togglePermissionMode, refreshMenu };
}
export { usePermission as u };
