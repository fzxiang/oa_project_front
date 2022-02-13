import { bl as tryOnMounted, ah as tryOnUnmounted, V as useDebounceFn } from "./vendor.7c0ada15.js";
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
