import { bn as tryOnMounted, aV as tryOnUnmounted, aw as useDebounceFn } from "./vendor.faf2de98.js";
function useWindowSizeFn(fn, wait = 150, options) {
  let handler = () => {
    fn();
  };
  const handleSize = useDebounceFn(handler, wait);
  handler = handleSize;
  const start = () => {
    if (options && options.immediate) {
      handler();
    }
    window.addEventListener("resize", handler);
  };
  const stop = () => {
    window.removeEventListener("resize", handler);
  };
  tryOnMounted(() => {
    start();
  });
  tryOnUnmounted(() => {
    stop();
  });
  return [start, stop];
}
export { useWindowSizeFn as u };
