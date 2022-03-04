<template>
  <van-search
    class="van-top-bar"
    v-model="searchValue"
    shape="round"
    show-action
    background="#ffffff"
    placeholder="请输入手机号"
    @search="onSearch"
  >
    <template #action>
      <div @click="onClickButton">搜索</div>
    </template>
  </van-search>

  <div class="van-center-wrap">
    <van-empty v-if="list.length === 0 && !loading" />

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell-group v-for="item in list" :key="item" inset>
          <div style="background: #e4ffc8; line-height: 36px; text-align: center">
            {{ item.remitTime }}
          </div>
          <van-cell title="打款金额" :value="item.remitPrice">
            <template #title> 打款金额 </template>
            <template #value>
              {{ item.remitPrice }}
            </template>
          </van-cell>
          <van-cell title="详情" is-link @click="handleShowDetail(item.id)" />
        </van-cell-group>
      </van-list>
    </van-pull-refresh>
  </div>

  <van-popup v-model:show="showDetail" position="right" :style="{ width: '80%', height: '100%' }">
    <van-cell-group v-for="item in detailList" :key="item">
      <div style="border-bottom: 4px solid #f1f1f1">
        <van-cell :title="item.invoice" />
        <van-cell title="稿费" :value="item.writerPrice" />
        <van-cell title="派单客服" :value="item.acceptUser" />
        <van-cell title="接单日期" :value="item.receivingTime" />
        <van-cell title="确认收货日期" :value="item.paymentTime" />
      </div>
    </van-cell-group>
  </van-popup>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import {
    Search,
    Sticky,
    PullRefresh,
    Popup,
    Card,
    Tag,
    Icon,
    Radio,
    RadioGroup,
    Cell,
    CellGroup,
    List,
    Button,
    Empty,
    Toast,
  } from 'vant';
  import { getWriterInfoApi, getOrderOfRemitApi } from '/@/api/mobile/writer';
  import { createLocalStorage } from '/@/utils/cache';

  export default defineComponent({
    name: 'MobileHome',
    components: {
      [Sticky.name]: Sticky,
      [Search.name]: Search,
      [Popup.name]: Popup,
      [Card.name]: Card,
      [PullRefresh.name]: PullRefresh,
      [Radio.name]: Radio,
      [RadioGroup.name]: RadioGroup,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [List.name]: List,
      [Tag.name]: Tag,
      [Button.name]: Button,
      [Icon.name]: Icon,
      [Empty.name]: Empty,
    },
    setup() {
      const ls = createLocalStorage();
      const searchValue = ref(ls.get('writerNum') || '');

      async function onSearch(val) {
        if (val) {
          searchValue.value = val;
        }
        if (/^(1)\d{10}$/.test(searchValue.value)) {
          Toast.fail('请输入正确手机号');
          return;
        }
        ls.set('writerNum', searchValue.value);
        list.value = await getWriterInfoApi({
          writerNum: searchValue.value,
        });
      }

      async function onClickButton() {
        if (/^(1)\d{10}$/.test(searchValue.value)) {
          Toast.fail('请输入正确手机号');
          return;
        }
        ls.set('writerNum', searchValue.value);
        list.value = await getWriterInfoApi({
          writerNum: searchValue.value,
        });
      }

      const show = ref(false);

      function handleFilter() {
        show.value = false;
        onSearch();
      }

      /**
       * 列表
       * */
      const list = ref([]);
      const loading = ref(false);
      const finished = ref(false);
      const refreshing = ref(false);

      async function onLoad() {
        console.log('onload', refreshing.value);
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        if (searchValue.value) {
          list.value = await getWriterInfoApi({
            writerNum: searchValue.value,
          });
        }
        loading.value = false;
        finished.value = true;
      }

      function onRefresh() {
        // 清空列表数据
        finished.value = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        loading.value = true;
        onLoad();
      }

      const showDetail = ref(false);
      const detailList = ref([]);

      async function handleShowDetail(id) {
        showDetail.value = true;
        detailList.value = await getOrderOfRemitApi({ id });
      }

      return {
        searchValue,
        onSearch,
        onClickButton,
        show,
        list,
        onLoad,
        loading,
        finished,
        onRefresh,
        handleFilter,
        refreshing,
        handleShowDetail,
        showDetail,
        detailList,
        MAPSETTLE: {
          1: '已结算',
          2: '未结算',
          3: '暂缓结算',
        },
        MAPSTATUS: {
          0: '暂无补偿',
          1: '稿费补偿',
        },
        MAPTAG: {
          0: 'primary',
          1: 'success',
          2: 'danger',
          3: 'warning',
        },
      };
    },
  });
</script>

<style lang="less" scoped>
  .van-top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .van-center-wrap {
    margin-top: 54px;
    padding-top: 10px;
  }

  .mr-1 {
    margin-right: 5px;
  }

  .van-popup--bottom {
    display: flex;
    position: absolute;
    bottom: 0;
  }

  .van-card__title {
    font-size: 16px;
    margin-bottom: 5px;
  }
</style>
