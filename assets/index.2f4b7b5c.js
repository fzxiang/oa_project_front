import { t as toggleClass } from "./index.55d49599.js";
import { $ as generateColors, a0 as getThemeColors } from "./index.7a39a7ac.js";
import { aL as replaceStyleVariables, aM as mixDarken, aN as mixLighten, aO as tinycolor } from "./vendor.faf2de98.js";
function updateColorWeak(colorWeak) {
  toggleClass(colorWeak, "color-weak", document.documentElement);
}
function updateGrayMode(gray) {
  toggleClass(gray, "gray-mode", document.documentElement);
}
async function changeTheme(color) {
  const colors = generateColors({
    mixDarken,
    mixLighten,
    tinycolor,
    color
  });
  return await replaceStyleVariables({
    colorVariables: [...getThemeColors(color), ...colors]
  });
}
export { updateColorWeak as a, changeTheme as c, updateGrayMode as u };