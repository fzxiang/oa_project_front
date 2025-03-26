import { at as isProdMode, au as getDynamicProps, as as error } from "./index.fda518c0.js";
import { Q as ref, an as onUnmounted, b as unref, w as watch, t as toRaw } from "./vendor.faf2de98.js";
function useTable(tableProps) {
  const tableRef = ref(null);
  const loadedRef = ref(false);
  const formRef = ref(null);
  let stopWatch;
  function register(instance, formInstance) {
    onUnmounted(() => {
      tableRef.value = null;
      loadedRef.value = null;
    });
    if (unref(loadedRef) && isProdMode() && instance === unref(tableRef))
      return;
    tableRef.value = instance;
    formRef.value = formInstance;
    tableProps && instance.setProps(getDynamicProps(tableProps));
    loadedRef.value = true;
    stopWatch == null ? void 0 : stopWatch();
    stopWatch = watch(() => tableProps, () => {
      tableProps && instance.setProps(getDynamicProps(tableProps));
    }, {
      immediate: true,
      deep: true
    });
  }
  function getTableInstance() {
    const table = unref(tableRef);
    if (!table) {
      error("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!");
    }
    return table;
  }
  const methods = {
    reload: async (opt) => {
      return await getTableInstance().reload(opt);
    },
    setProps: (props) => {
      getTableInstance().setProps(props);
    },
    redoHeight: () => {
      getTableInstance().redoHeight();
    },
    setLoading: (loading) => {
      getTableInstance().setLoading(loading);
    },
    getDataSource: () => {
      return getTableInstance().getDataSource();
    },
    getRawDataSource: () => {
      return getTableInstance().getRawDataSource();
    },
    getColumns: ({ ignoreIndex = false } = {}) => {
      const columns = getTableInstance().getColumns({ ignoreIndex }) || [];
      return toRaw(columns);
    },
    setColumns: (columns) => {
      getTableInstance().setColumns(columns);
    },
    setTableData: (values) => {
      return getTableInstance().setTableData(values);
    },
    setPagination: (info) => {
      return getTableInstance().setPagination(info);
    },
    deleteSelectRowByKey: (key) => {
      getTableInstance().deleteSelectRowByKey(key);
    },
    getSelectRowKeys: () => {
      return toRaw(getTableInstance().getSelectRowKeys());
    },
    getSelectRows: () => {
      return toRaw(getTableInstance().getSelectRows());
    },
    clearSelectedRowKeys: () => {
      getTableInstance().clearSelectedRowKeys();
    },
    setSelectedRowKeys: (keys) => {
      getTableInstance().setSelectedRowKeys(keys);
    },
    getPaginationRef: () => {
      return getTableInstance().getPaginationRef();
    },
    getSize: () => {
      return toRaw(getTableInstance().getSize());
    },
    updateTableData: (index, key, value) => {
      return getTableInstance().updateTableData(index, key, value);
    },
    deleteTableDataRecord: (rowKey) => {
      return getTableInstance().deleteTableDataRecord(rowKey);
    },
    insertTableDataRecord: (record, index) => {
      return getTableInstance().insertTableDataRecord(record, index);
    },
    updateTableDataRecord: (rowKey, record) => {
      return getTableInstance().updateTableDataRecord(rowKey, record);
    },
    findTableDataRecord: (rowKey) => {
      return getTableInstance().findTableDataRecord(rowKey);
    },
    getRowSelection: () => {
      return toRaw(getTableInstance().getRowSelection());
    },
    getCacheColumns: () => {
      return toRaw(getTableInstance().getCacheColumns());
    },
    getForm: () => {
      return unref(formRef);
    },
    setShowPagination: async (show) => {
      getTableInstance().setShowPagination(show);
    },
    getShowPagination: () => {
      return toRaw(getTableInstance().getShowPagination());
    },
    expandAll: () => {
      getTableInstance().expandAll();
    },
    expandRows: (keys) => {
      getTableInstance().expandRows(keys);
    },
    collapseAll: () => {
      getTableInstance().collapseAll();
    },
    scrollTo: (pos) => {
      getTableInstance().scrollTo(pos);
    }
  };
  return [register, methods];
}
export { useTable as u };
