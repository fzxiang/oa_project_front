import { Q as ref, w as watch, b as unref, aw as useDebounceFn, aU as useThrottleFn, O as computed, aV as tryOnUnmounted } from "./vendor.faf2de98.js";
import { y as isFunction, c as useAppStore, a3 as ContentEnum } from "./index.c01f1eb2.js";
function useEventListener({
  el = window,
  name,
  listener,
  options,
  autoRemove = true,
  isDebounce = true,
  wait = 80
}) {
  let remove = () => {
  };
  const isAddRef = ref(false);
  if (el) {
    const element = ref(el);
    const handler = isDebounce ? useDebounceFn(listener, wait) : useThrottleFn(listener, wait);
    const realHandler = wait ? handler : listener;
    const removeEventListener = (e) => {
      isAddRef.value = true;
      e.removeEventListener(name, realHandler, options);
    };
    const addEventListener = (e) => e.addEventListener(name, realHandler, options);
    const removeWatch = watch(element, (v, _ov, cleanUp) => {
      if (v) {
        !unref(isAddRef) && addEventListener(v);
        cleanUp(() => {
          autoRemove && removeEventListener(v);
        });
      }
    }, { immediate: true });
    remove = () => {
      removeEventListener(element.value);
      removeWatch();
    };
  }
  return { removeEvent: remove };
}
var sizeEnum = /* @__PURE__ */ ((sizeEnum2) => {
  sizeEnum2["XS"] = "XS";
  sizeEnum2["SM"] = "SM";
  sizeEnum2["MD"] = "MD";
  sizeEnum2["LG"] = "LG";
  sizeEnum2["XL"] = "XL";
  sizeEnum2["XXL"] = "XXL";
  return sizeEnum2;
})(sizeEnum || {});
var screenEnum = /* @__PURE__ */ ((screenEnum2) => {
  screenEnum2[screenEnum2["XS"] = 480] = "XS";
  screenEnum2[screenEnum2["SM"] = 576] = "SM";
  screenEnum2[screenEnum2["MD"] = 768] = "MD";
  screenEnum2[screenEnum2["LG"] = 992] = "LG";
  screenEnum2[screenEnum2["XL"] = 1200] = "XL";
  screenEnum2[screenEnum2["XXL"] = 1600] = "XXL";
  return screenEnum2;
})(screenEnum || {});
const screenMap = /* @__PURE__ */ new Map();
screenMap.set("XS", 480);
screenMap.set("SM", 576);
screenMap.set("MD", 768);
screenMap.set("LG", 992);
screenMap.set("XL", 1200);
screenMap.set("XXL", 1600);
let globalScreenRef;
let globalWidthRef;
let globalRealWidthRef;
function useBreakpoint() {
  return {
    screenRef: computed(() => unref(globalScreenRef)),
    widthRef: globalWidthRef,
    screenEnum,
    realWidthRef: globalRealWidthRef
  };
}
function createBreakpointListen(fn) {
  const screenRef = ref(sizeEnum.XL);
  const realWidthRef = ref(window.innerWidth);
  function getWindowWidth() {
    const width = document.body.clientWidth;
    const xs = screenMap.get(sizeEnum.XS);
    const sm = screenMap.get(sizeEnum.SM);
    const md = screenMap.get(sizeEnum.MD);
    const lg = screenMap.get(sizeEnum.LG);
    const xl = screenMap.get(sizeEnum.XL);
    if (width < xs) {
      screenRef.value = sizeEnum.XS;
    } else if (width < sm) {
      screenRef.value = sizeEnum.SM;
    } else if (width < md) {
      screenRef.value = sizeEnum.MD;
    } else if (width < lg) {
      screenRef.value = sizeEnum.LG;
    } else if (width < xl) {
      screenRef.value = sizeEnum.XL;
    } else {
      screenRef.value = sizeEnum.XXL;
    }
    realWidthRef.value = width;
  }
  useEventListener({
    el: window,
    name: "resize",
    listener: () => {
      getWindowWidth();
      resizeFn();
    }
  });
  getWindowWidth();
  globalScreenRef = computed(() => unref(screenRef));
  globalWidthRef = computed(() => screenMap.get(unref(screenRef)));
  globalRealWidthRef = computed(() => unref(realWidthRef));
  function resizeFn() {
    fn == null ? void 0 : fn({
      screen: globalScreenRef,
      width: globalWidthRef,
      realWidth: globalRealWidthRef,
      screenEnum,
      screenMap,
      sizeEnum
    });
  }
  resizeFn();
  return {
    screenRef: globalScreenRef,
    screenEnum,
    widthRef: globalWidthRef,
    realWidthRef: globalRealWidthRef
  };
}
function useTimeoutFn(handle, wait, native = false) {
  if (!isFunction(handle)) {
    throw new Error("handle is not Function!");
  }
  const { readyRef, stop, start } = useTimeoutRef(wait);
  if (native) {
    handle();
  } else {
    watch(readyRef, (maturity) => {
      maturity && handle();
    }, { immediate: false });
  }
  return { readyRef, stop, start };
}
function useTimeoutRef(wait) {
  const readyRef = ref(false);
  let timer;
  function stop() {
    readyRef.value = false;
    timer && window.clearTimeout(timer);
  }
  function start() {
    stop();
    timer = setTimeout(() => {
      readyRef.value = true;
    }, wait);
  }
  start();
  tryOnUnmounted(stop);
  return { readyRef, stop, start };
}
function useRootSetting() {
  const appStore = useAppStore();
  const getPageLoading = computed(() => appStore.getPageLoading);
  const getOpenKeepAlive = computed(() => appStore.getProjectConfig.openKeepAlive);
  const getSettingButtonPosition = computed(() => appStore.getProjectConfig.settingButtonPosition);
  const getCanEmbedIFramePage = computed(() => appStore.getProjectConfig.canEmbedIFramePage);
  const getPermissionMode = computed(() => appStore.getProjectConfig.permissionMode);
  const getShowLogo = computed(() => appStore.getProjectConfig.showLogo);
  const getContentMode = computed(() => appStore.getProjectConfig.contentMode);
  const getUseOpenBackTop = computed(() => appStore.getProjectConfig.useOpenBackTop);
  const getShowSettingButton = computed(() => appStore.getProjectConfig.showSettingButton);
  const getUseErrorHandle = computed(() => appStore.getProjectConfig.useErrorHandle);
  const getShowFooter = computed(() => appStore.getProjectConfig.showFooter);
  const getShowBreadCrumb = computed(() => appStore.getProjectConfig.showBreadCrumb);
  const getThemeColor = computed(() => appStore.getProjectConfig.themeColor);
  const getShowBreadCrumbIcon = computed(() => appStore.getProjectConfig.showBreadCrumbIcon);
  const getFullContent = computed(() => appStore.getProjectConfig.fullContent);
  const getColorWeak = computed(() => appStore.getProjectConfig.colorWeak);
  const getGrayMode = computed(() => appStore.getProjectConfig.grayMode);
  const getLockTime = computed(() => appStore.getProjectConfig.lockTime);
  const getShowDarkModeToggle = computed(() => appStore.getProjectConfig.showDarkModeToggle);
  const getDarkMode = computed(() => appStore.getDarkMode);
  const getLayoutContentMode = computed(() => appStore.getProjectConfig.contentMode === ContentEnum.FULL ? ContentEnum.FULL : ContentEnum.FIXED);
  function setRootSetting(setting) {
    appStore.setProjectConfig(setting);
  }
  function setDarkMode(mode) {
    appStore.setDarkMode(mode);
  }
  return {
    setRootSetting,
    getSettingButtonPosition,
    getFullContent,
    getColorWeak,
    getGrayMode,
    getLayoutContentMode,
    getPageLoading,
    getOpenKeepAlive,
    getCanEmbedIFramePage,
    getPermissionMode,
    getShowLogo,
    getUseErrorHandle,
    getShowBreadCrumb,
    getShowBreadCrumbIcon,
    getUseOpenBackTop,
    getShowSettingButton,
    getShowFooter,
    getContentMode,
    getLockTime,
    getThemeColor,
    getDarkMode,
    setDarkMode,
    getShowDarkModeToggle
  };
}
export { useRootSetting as a, useEventListener as b, createBreakpointListen as c, useBreakpoint as d, useTimeoutFn as u };
