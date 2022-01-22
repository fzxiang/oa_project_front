<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    title="权限分配"
    width="508px"
    @ok="handleSubmit"
  >
    <BasicTree
      v-model:value="treeValue"
      :treeData="treeData"
      :fieldNames="{ title: 'title', key: 'id' }"
      checkable
      toolbars
    />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicTree } from '/@/components/Tree';
  import { routeModuleList } from '/@/router/routes';
  import { updateUserPowerApi } from '/@/api/system/system';
  import { shopListApi } from '/@/api/shopManage/shop';

  export default defineComponent({
    name: 'AccountDrawer',
    components: { BasicDrawer, BasicTree },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const treeData = ref<any[]>([]);
      const treeValue = ref<any[]>([]);
      const collect: any[] = [];
      const record = ref<any[]>();

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        // await resetFields();
        await setDrawerProps({ confirmLoading: false });
        // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
        if (unref(treeData).length === 0) {
          const shopData = await shopListApi();
          treeData.value = shopData.map((item) => {
            collect.push({
              shop_id: `${item.shop_id}`,
              power: [],
            });
            return {
              id: `${item.shop_id}`,
              title: item.shop_name,
              children: getMenuHandle(routeModuleList, `${item.shop_id}`),
            };
          });
        }

        record.value = data;
        // await setFieldsValue({
        //   ...data.record,
        // });
      });

      function getMenuHandle(data, pid) {
        return data.map((item) => {
          return {
            id: pid + '~' + item.meta.menu,
            title: item.meta.title,
            children: item.children ? getMenuHandle(item.children, pid + '~' + item.meta.menu) : [],
          };
        });
      }
      async function handleSubmit() {
        try {
          // 拼接数据
          treeValue.value.forEach((item) => {
            const match = item.match(/(\S+)~(\S+)~(\S+)/i);
            if (match) {
              const { power } = collect.find((item) => {
                return item.shop_id === match[1];
              });
              !power.includes(match[2]) && power.push(match[2]);
              power.push(match[3]);
            }
          });

          setDrawerProps({ confirmLoading: true });
          // TODO custom api
          const params = {
            // ts-ignore
            uId: record.value.user_id,
            powerJson: collect,
          };
          console.log(params);
          await updateUserPowerApi(params);
          closeDrawer();
          emit('success', { values: {} });
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        treeValue,
        registerDrawer,
        handleSubmit,
        treeData,
      };
    },
  });
</script>
