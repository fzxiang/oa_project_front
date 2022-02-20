import { x as createContext } from "./index.d921a71a.js";
import { u as useWindowSizeFn } from "./useWindowSizeFn.07387e97.js";
import { r as ref, j as computed, u as unref } from "./vendor.7c0ada15.js";
const key = Symbol();
function createPageContext(context) {
  return createContext(context, key, { native: true });
}
const headerHeightRef = ref(0);
const footerHeightRef = ref(0);
function useLayoutHeight() {
  function setHeaderHeight(val) {
    headerHeightRef.value = val;
  }
  function setFooterHeight(val) {
    footerHeightRef.value = val;
  }
  return { headerHeightRef, footerHeightRef, setHeaderHeight, setFooterHeight };
}
function useContentViewHeight() {
  const contentHeight = ref(window.innerHeight);
  const pageHeight = ref(window.innerHeight);
  const getViewHeight = computed(() => {
    return unref(contentHeight) - unref(headerHeightRef) - unref(footerHeightRef) || 0;
  });
  useWindowSizeFn(() => {
    contentHeight.value = window.innerHeight;
  }, 100, { immediate: true });
  async function setPageHeight(height) {
    pageHeight.value = height;
  }
  createPageContext({
    contentHeight: getViewHeight,
    setPageHeight,
    pageHeight
  });
}
export { useLayoutHeight as a, useContentViewHeight as u };
