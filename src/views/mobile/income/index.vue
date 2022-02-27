<template>
  <div class="van-top-bar">
    <van-cell title="点击进行筛选" is-link @click="show = true" />
  </div>

  <!--  <van-search-->
  <!--    class="van-top-bar"-->
  <!--    v-model="searchValue"-->
  <!--    shape="round"-->
  <!--    show-action-->
  <!--    background="#ffffff"-->
  <!--    placeholder="请输入手机号"-->
  <!--    @search="onSearch"-->
  <!--  >-->
  <!--    <template #action>-->
  <!--      <div>-->
  <!--        <van-icon style="margin: 0 8px" @click="show = true" name="filter-o"/>-->
  <!--      </div>-->
  <!--    </template>-->
  <!--  </van-search>-->

  <van-popup
    v-model:show="show"
    position="right"
    teleport="body"
    :style="{ height: '100%', width: '80% ' }"
  >
    <h2 class="van-doc-demo-block__title">结算状态：</h2>

    <van-radio-group v-model="state">
      <van-cell-group>
        <van-cell title="全部" clickable @click="state = '0'">
          <template #right-icon>
            <van-radio name="0" />
          </template>
        </van-cell>
        <van-cell title="已结算" clickable @click="state = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="未结算" clickable @click="state = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>

    <div class="van-popup--bottom">
      <van-button type="default" block @click="state = '0'">重置</van-button>
      <van-button type="primary" block @click="handleFilter">确定</van-button>
    </div>
  </van-popup>

  <div class="van-center-wrap">
    <van-empty v-if="list.length === 0 && !loading" />

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item">
          <van-card>
            <template #title>
              <h2 class="van-card__title">
                <van-icon name="orders-o" color="#1989fa" />
                {{ item.invoice }}
              </h2>
            </template>
            <template #desc>
              <div class="van-card__desc van-ellipsis"> 付款时间: {{ item.paymentTime }} </div>
              <div class="van-card__desc van-ellipsis"> 收货时间: {{ item.receivingTime }} </div>
            </template>
            <template #tags>
              <span>
                结算状态:
                <van-tag class="mr-1" plain :type="MAPTAG[item['wSettleState']]">
                  {{ MAPSETTLE[item['wSettleState']] }}
                </van-tag>
              </span>
              <!--              <span>-->
              <!--                补偿状态:-->
              <!--                <van-tag-->
              <!--                  class="mr-1"-->
              <!--                  plain-->
              <!--                  :type="MAPTAG[item['compensateState']]"-->
              <!--                >-->
              <!--                  {{ MAPSTATUS[item['compensateState']] }}-->
              <!--                </van-tag>-->
              <!--              </span>-->
            </template>

            <template #price>
              <div>
                <span class="van-card__price-currency">¥</span>
                <span class="van-card__price-integer">{{ item.writerPrice }}</span>
              </div>
            </template>
            <template #num>
              <div class="van-card__num">客服: {{ item.acceptUser }}</div>
            </template>
          </van-card>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import {
    Search,
    Sticky,
    PullRefresh,
    Popup,
    Card,
    Tabbar,
    TabbarItem,
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
  import { searchWriterRemitApi } from '/@/api/mobile/writer';
  import { createLocalStorage } from '/@/utils/cache';

  export default defineComponent({
    components: {
      [Sticky.name]: Sticky,
      [Search.name]: Search,
      [Tabbar.name]: Tabbar,
      [Popup.name]: Popup,
      [Card.name]: Card,
      [TabbarItem.name]: TabbarItem,
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
      const state = ref('0');

      async function onSearch(val) {
        if (val) {
          searchValue.value = val;
        }
        if (!searchValue.value) {
          Toast.fail('请返回首页输入手机号');
          return;
        }
        list.value = await searchWriterRemitApi({
          writerNum: searchValue.value,
          state: state.value,
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
          list.value = await searchWriterRemitApi({
            writerNum: searchValue.value,
            state: state.value,
          });
        }
        loading.value = false;
        finished.value = true;

        // setTimeout(() => {
        //   if (refreshing.value) {
        //     list.value = [];
        //     refreshing.value = false;
        //   }
        //
        //   for (let i = 0; i < 10; i++) {
        //     list.value.push(list.value.length + 1);
        //   }
        //   loading.value = false;
        //
        //   if (list.value.length >= 40) {
        //     finished.value = true;
        //   }
        // }, 1000);
      }

      function onRefresh() {
        // 清空列表数据
        finished.value = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        loading.value = true;
        onLoad();
      }

      return {
        searchValue,
        state,
        onSearch,
        show,
        list,
        onLoad,
        loading,
        finished,
        onRefresh,
        handleFilter,
        refreshing,
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
