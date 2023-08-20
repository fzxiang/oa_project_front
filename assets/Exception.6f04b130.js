import { d as defineComponent, Q as ref, b8 as useRoute, O as computed, b as unref, f as createVNode, aP as Button, b9 as Result } from "./vendor.faf2de98.js";
/* empty css                 */import { a6 as ExceptionEnum, t as useGo, a7 as useRedo, a as useI18n, v as PageEnum } from "./index.b67cb216.js";
import { d as useDesign } from "./index.7be4058a.js";
import "./useRootSetting.0e80d1b6.js";
var notDataSvg = "/assets/no-data.f7e550cc.svg";
var netWorkSvg = "/assets/net-error.61b7e6df.svg";
var _sfc_main = defineComponent({
  name: "ErrorPage",
  props: {
    status: {
      type: Number,
      default: ExceptionEnum.PAGE_NOT_FOUND
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const statusMapRef = ref(/* @__PURE__ */ new Map());
    const {
      query
    } = useRoute();
    const go = useGo();
    const redo = useRedo();
    const {
      t
    } = useI18n();
    const {
      prefixCls
    } = useDesign("app-exception-page");
    const getStatus = computed(() => {
      const {
        status: routeStatus
      } = query;
      const {
        status
      } = props;
      return Number(routeStatus) || status;
    });
    const getMapValue = computed(() => {
      return unref(statusMapRef).get(unref(getStatus));
    });
    const backLoginI18n = t("sys.exception.backLogin");
    const backHomeI18n = t("sys.exception.backHome");
    unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_ACCESS, {
      title: "403",
      status: `${ExceptionEnum.PAGE_NOT_ACCESS}`,
      subTitle: t("sys.exception.subTitle403"),
      btnText: props.full ? backLoginI18n : backHomeI18n,
      handler: () => props.full ? go(PageEnum.BASE_LOGIN) : go()
    });
    unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_FOUND, {
      title: "404",
      status: `${ExceptionEnum.PAGE_NOT_FOUND}`,
      subTitle: t("sys.exception.subTitle404"),
      btnText: props.full ? backLoginI18n : backHomeI18n,
      handler: () => props.full ? go(PageEnum.BASE_LOGIN) : go()
    });
    unref(statusMapRef).set(ExceptionEnum.ERROR, {
      title: "500",
      status: `${ExceptionEnum.ERROR}`,
      subTitle: t("sys.exception.subTitle500"),
      btnText: backHomeI18n,
      handler: () => go()
    });
    unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_DATA, {
      title: t("sys.exception.noDataTitle"),
      subTitle: "",
      btnText: t("common.redo"),
      handler: () => redo(),
      icon: notDataSvg
    });
    unref(statusMapRef).set(ExceptionEnum.NET_WORK_ERROR, {
      title: t("sys.exception.networkErrorTitle"),
      subTitle: t("sys.exception.networkErrorSubTitle"),
      btnText: t("common.redo"),
      handler: () => redo(),
      icon: netWorkSvg
    });
    return () => {
      const {
        title,
        subTitle,
        btnText,
        icon,
        handler,
        status
      } = unref(getMapValue) || {};
      return createVNode(Result, {
        "class": prefixCls,
        "status": status,
        "title": props.title || title,
        "sub-title": props.subTitle || subTitle
      }, {
        extra: () => btnText && createVNode(Button, {
          "type": "primary",
          "onClick": handler
        }, {
          default: () => btnText
        }),
        icon: () => icon ? createVNode("img", {
          "src": icon
        }, null) : null
      });
    };
  }
});
var Exception_vue_vue_type_style_index_0_lang = "";
export { _sfc_main as default };
