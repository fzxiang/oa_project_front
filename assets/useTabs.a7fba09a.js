import { u as useRouter, b as unref } from "./vendor.faf2de98.js";
import { c as useAppStore, a1 as useMultipleTabStore } from "./index.59040ad2.js";
function useTabs(_router) {
  const appStore = useAppStore();
  function canIUseTabs() {
    const { show } = appStore.getMultiTabsSetting;
    if (!show) {
      throw new Error("The multi-tab page is currently not open, please open it in the settings\uFF01");
    }
    return !!show;
  }
  const tabStore = useMultipleTabStore();
  const router = _router || useRouter();
  const { currentRoute } = router;
  function getCurrentTab() {
    const route = unref(currentRoute);
    return tabStore.getTabList.find((item) => item.fullPath === route.fullPath);
  }
  async function updateTabTitle(title, tab) {
    const canIUse = canIUseTabs;
    if (!canIUse) {
      return;
    }
    const targetTab = tab || getCurrentTab();
    await tabStore.setTabTitle(title, targetTab);
  }
  async function updateTabPath(path, tab) {
    const canIUse = canIUseTabs;
    if (!canIUse) {
      return;
    }
    const targetTab = tab || getCurrentTab();
    await tabStore.updateTabPath(path, targetTab);
  }
  async function handleTabAction(action, tab) {
    const canIUse = canIUseTabs;
    if (!canIUse) {
      return;
    }
    const currentTab = getCurrentTab();
    switch (action) {
      case 0:
        await tabStore.refreshPage(router);
        break;
      case 1:
        await tabStore.closeAllTab(router);
        break;
      case 2:
        await tabStore.closeLeftTabs(currentTab, router);
        break;
      case 3:
        await tabStore.closeRightTabs(currentTab, router);
        break;
      case 4:
        await tabStore.closeOtherTabs(currentTab, router);
        break;
      case 5:
      case 6:
        await tabStore.closeTab(tab || currentTab, router);
        break;
    }
  }
  return {
    refreshPage: () => handleTabAction(0),
    closeAll: () => handleTabAction(1),
    closeLeft: () => handleTabAction(2),
    closeRight: () => handleTabAction(3),
    closeOther: () => handleTabAction(4),
    closeCurrent: () => handleTabAction(5),
    close: (tab) => handleTabAction(6, tab),
    setTitle: (title, tab) => updateTabTitle(title, tab),
    updatePath: (fullPath, tab) => updateTabPath(fullPath, tab)
  };
}
export { useTabs as u };
