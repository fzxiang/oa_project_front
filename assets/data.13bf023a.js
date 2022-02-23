import { x as xlsx } from "./index.53f623c7.js";
const { utils, writeFile } = xlsx;
const DEF_FILE_NAME = "excel-list.xlsx";
function jsonToSheetXlsx({
  data: data2,
  header,
  filename = DEF_FILE_NAME,
  json2sheetOpts = {},
  write2excelOpts = { bookType: "xlsx" }
}) {
  const arrData2 = [...data2];
  if (header) {
    arrData2.unshift(header);
    json2sheetOpts.skipHeader = true;
  }
  const worksheet = utils.json_to_sheet(arrData2, json2sheetOpts);
  const workbook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet
    }
  };
  writeFile(workbook, filename, write2excelOpts);
}
function aoaToSheetXlsx({
  data: data2,
  header,
  filename = DEF_FILE_NAME,
  write2excelOpts = { bookType: "xlsx" }
}) {
  const arrData2 = [...data2];
  if (header) {
    arrData2.unshift(header);
  }
  const worksheet = utils.aoa_to_sheet(arrData2);
  const workbook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet
    }
  };
  writeFile(workbook, filename, write2excelOpts);
}
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: 80
  },
  {
    title: "\u59D3\u540D",
    dataIndex: "name",
    width: 120
  },
  {
    title: "\u5E74\u9F84",
    dataIndex: "age",
    width: 80
  },
  {
    title: "\u7F16\u53F7",
    dataIndex: "no",
    width: 80
  },
  {
    title: "\u5730\u5740",
    dataIndex: "address"
  },
  {
    title: "\u5F00\u59CB\u65F6\u95F4",
    dataIndex: "beginTime"
  },
  {
    title: "\u7ED3\u675F\u65F6\u95F4",
    dataIndex: "endTime"
  }
];
const data = (() => {
  const arr = [];
  for (let index = 0; index < 40; index++) {
    arr.push({
      id: `${index}`,
      name: `${index} John Brown`,
      age: `${index + 10}`,
      no: `${index}98678`,
      address: "New York No. 1 Lake ParkNew York No. 1 Lake Park",
      beginTime: new Date().toLocaleString(),
      endTime: new Date().toLocaleString()
    });
  }
  return arr;
})();
const arrHeader = columns.map((column) => column.title);
const arrData = data.map((item) => {
  return Object.keys(item).map((key) => item[key]);
});
export { aoaToSheetXlsx as a, arrData as b, columns as c, data as d, arrHeader as e, jsonToSheetXlsx as j };
