import { f as createVNode, bo as Tag } from "./vendor.faf2de98.js";
/* empty css                 */import { a as useI18n, E as ErrorTypeEnum } from "./index.4dc0081b.js";
const {
  t
} = useI18n();
function getColumns() {
  return [{
    dataIndex: "type",
    title: t("sys.errorLog.tableColumnType"),
    width: 80,
    customRender: ({
      text
    }) => {
      const color = text === ErrorTypeEnum.VUE ? "green" : text === ErrorTypeEnum.RESOURCE ? "cyan" : text === ErrorTypeEnum.PROMISE ? "blue" : ErrorTypeEnum.AJAX ? "red" : "purple";
      return createVNode(Tag, {
        "color": color
      }, {
        default: () => text
      });
    }
  }, {
    dataIndex: "url",
    title: "URL",
    width: 200
  }, {
    dataIndex: "time",
    title: t("sys.errorLog.tableColumnDate"),
    width: 160
  }, {
    dataIndex: "file",
    title: t("sys.errorLog.tableColumnFile"),
    width: 200
  }, {
    dataIndex: "name",
    title: "Name",
    width: 200
  }, {
    dataIndex: "message",
    title: t("sys.errorLog.tableColumnMsg"),
    width: 300
  }, {
    dataIndex: "stack",
    title: t("sys.errorLog.tableColumnStackMsg")
  }];
}
function getDescSchema() {
  return getColumns().map((column) => {
    return {
      field: column.dataIndex,
      label: column.title
    };
  });
}
export { getColumns, getDescSchema };
