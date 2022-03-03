import { a as PageWrapper } from "./index.c02677d5.js";
import { H as CollapseContainer } from "./index.035cec88.js";
import { C as CropperImage, a as CropperAvatar } from "./index.70058ddc.js";
import { u as uploadApi } from "./upload.2d919ab0.js";
import { h as headerImg } from "./header.d801b988.js";
import { _ as _export_sfc, q as useUserStore } from "./index.89bba8b1.js";
import { d as defineComponent, Q as ref, r as resolveComponent, o as openBlock, c as createBlock, e as withCtx, f as createVNode, V as createBaseVNode, R as createElementBlock, ai as createCommentVNode, W as toDisplayString } from "./vendor.faf2de98.js";
/* empty css                  *//* empty css                  */import "./useWindowSizeFn.7703d3fa.js";
import "./useContentViewHeight.eb16d7c9.js";
import "./useRootSetting.b4af9267.js";
/* empty css                 *//* empty css                  *//* empty css                  */import "./index.13115d00.js";
import "./useAttrs.d4bdb35c.js";
import "./base64Conver.08b9f4ec.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    PageWrapper,
    CropperImage,
    CollapseContainer,
    CropperAvatar
  },
  setup() {
    var _a;
    const info = ref("");
    const cropperImg = ref("");
    const circleInfo = ref("");
    const circleImg = ref("");
    const userStore = useUserStore();
    const avatar = ref(((_a = userStore.getUserInfo) == null ? void 0 : _a.avatar) || "");
    function handleCropend({ imgBase64, imgInfo }) {
      info.value = imgInfo;
      cropperImg.value = imgBase64;
    }
    function handleCircleCropend({ imgBase64, imgInfo }) {
      circleInfo.value = imgInfo;
      circleImg.value = imgBase64;
    }
    return {
      img: headerImg,
      info,
      circleInfo,
      cropperImg,
      circleImg,
      handleCropend,
      handleCircleCropend,
      avatar,
      uploadApi
    };
  }
});
const _hoisted_1 = { class: "container p-4" };
const _hoisted_2 = { class: "cropper-container mr-10" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "container p-4" };
const _hoisted_6 = { class: "cropper-container mr-10" };
const _hoisted_7 = ["src"];
const _hoisted_8 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CropperAvatar = resolveComponent("CropperAvatar");
  const _component_CollapseContainer = resolveComponent("CollapseContainer");
  const _component_CropperImage = resolveComponent("CropperImage");
  const _component_PageWrapper = resolveComponent("PageWrapper");
  return openBlock(), createBlock(_component_PageWrapper, {
    title: "\u56FE\u7247\u88C1\u526A\u793A\u4F8B",
    content: "\u9700\u8981\u5F00\u542F\u6D4B\u8BD5\u63A5\u53E3\u670D\u52A1\u624D\u80FD\u8FDB\u884C\u4E0A\u4F20\u6D4B\u8BD5\uFF01"
  }, {
    default: withCtx(() => [
      createVNode(_component_CollapseContainer, { title: "\u5934\u50CF\u88C1\u526A" }, {
        default: withCtx(() => [
          createVNode(_component_CropperAvatar, {
            uploadApi: _ctx.uploadApi,
            value: _ctx.avatar
          }, null, 8, ["uploadApi", "value"])
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, {
        title: "\u77E9\u5F62\u88C1\u526A",
        class: "my-4"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_CropperImage, {
                ref: "refCropper",
                src: _ctx.img,
                onCropend: _ctx.handleCropend,
                style: { "width": "40vw" }
              }, null, 8, ["src", "onCropend"])
            ]),
            _ctx.cropperImg ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.cropperImg,
              class: "croppered",
              alt: ""
            }, null, 8, _hoisted_3)) : createCommentVNode("", true)
          ]),
          _ctx.cropperImg ? (openBlock(), createElementBlock("p", _hoisted_4, "\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A" + toDisplayString(_ctx.info), 1)) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      createVNode(_component_CollapseContainer, { title: "\u5706\u5F62\u88C1\u526A" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_CropperImage, {
                ref: "refCropper",
                src: _ctx.img,
                onCropend: _ctx.handleCircleCropend,
                style: { "width": "40vw" },
                circled: ""
              }, null, 8, ["src", "onCropend"])
            ]),
            _ctx.circleImg ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: _ctx.circleImg,
              class: "croppered"
            }, null, 8, _hoisted_7)) : createCommentVNode("", true)
          ]),
          _ctx.circleImg ? (openBlock(), createElementBlock("p", _hoisted_8, "\u88C1\u526A\u540E\u56FE\u7247\u4FE1\u606F\uFF1A" + toDisplayString(_ctx.circleInfo), 1)) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9d983438"]]);
export { index as default };
