<template>
  <PageWrapper :class="prefixCls">
    <template #headerContent>
      <Affix :offset-top="0">
        <BasicForm
          :class="`${prefixCls}__header-form`"
          @register="register"
          style="background: white"
        />
      </Affix>
    </template>

    <div :class="`${prefixCls}__container`">
      <a-list>
        <template v-for="item in list" :key="item.id">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <div :class="`${prefixCls}__title`">
                  <Icon
                    :class="`${prefixCls}__action-icon`"
                    icon="ant-design:shop-outlined"
                    color="#018ffb"
                  />
                  <span>{{ item.shop_name }}</span>
                </div>
              </template>

              <template #description>
                <div>
                  <Icon
                    :class="`${prefixCls}__action-icon`"
                    icon="ant-design:pay-circle-outlined"
                    color="#E24821"
                  />
                  <span style="color: #e24821; font-size: 18px">
                    {{ item.writerPrice }}
                  </span>
                </div>

                <div :class="`${prefixCls}__action`">
                  <div :class="`${prefixCls}__action-left`">
                    结算状态:{{ MAPSETTLE[item['wSettleState']] }}
                  </div>
                  <div :class="`${prefixCls}__action-right`">
                    补偿状态:{{ MAPSTATUS[item['compensateState']] }}
                  </div>
                </div>
                <div :class="`${prefixCls}__action`">
                  <div :class="`${prefixCls}__action-left`"> 付款时间：</div>
                  <div :class="`${prefixCls}__action-right`">
                    {{ item['paymentTime'] || '' }}
                  </div>
                </div>
                <div :class="`${prefixCls}__action`">
                  <div :class="`${prefixCls}__action-left`"> 收货时间：</div>
                  <div :class="`${prefixCls}__action-right`">
                    {{ item['receivingTime'] || '' }}
                  </div>
                </div>
                <div>
                  发单号:{{ item.invoice }}
                  <Tag class="mb-2" @click="handleCopy(item.invoice)">
                    <template #icon>
                      <copy-outlined />
                    </template>
                  </Tag>
                </div>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { Tag } from 'ant-design-vue';
  import { defineComponent, ref, unref } from 'vue';
  import Icon from '/@/components/Icon/index';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { PageWrapper } from '/@/components/Page';
  import { List, Affix } from 'ant-design-vue';
  import { CopyOutlined } from '@ant-design/icons-vue';
  import { getWriterInfoApi } from '/@/api/mobile/writer';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: {
      Icon,
      Tag,
      Affix,
      BasicForm,
      PageWrapper,
      CopyOutlined,
      [List.name]: List,
      [List.Item.name]: List.Item,
      AListItemMeta: List.Item.Meta,
    },
    setup() {
      const schemas: FormSchema[] = [
        {
          field: 'writerNum',
          component: 'InputSearch',
          label: '手机号',
          rulesMessageJoinLabel: false,
          componentProps: {
            placeholder: '请输入手机号',
            onSearch: async (value) => {
              if (/^(13[0-9]|14[5|7]|15[0-9]|17[0-9]|18[0-9])\d{8}$/.test(value)) {
                list.value = await getWriterInfoApi({ writerNum: value });
              } else {
                createMessage.error('请输入正确的手机号！');
              }
            },
          },
          colProps: {
            span: 24,
          },
        },
      ];

      const list = ref([]);

      const actions = [
        { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
        { icon: 'bx:bxs-like', text: '156', color: '#e24821' },
      ];

      const [register] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
        showActionButtonGroup: false,
      });

      const { createMessage } = useMessage();
      const { clipboardRef, copiedRef } = useCopyToClipboard();

      function handleCopy(value) {
        clipboardRef.value = value;
        if (unref(copiedRef)) {
          createMessage.warning('复制成功！');
        }
      }

      return {
        prefixCls: 'list-search',
        list,
        actions,
        register,
        handleCopy,
        MAPSETTLE: {
          1: '已结算',
          2: '未结算',
          3: '暂缓结算',
        },
        MAPSTATUS: {
          0: '暂无补偿',
          1: '稿费补偿',
        },
      };
    },
  });
</script>
<style lang="less" scoped>
  .list-search {
    &__header {
      &-form {
        margin-bottom: -16px;
      }
    }

    &__container {
      padding: 12px;
      background-color: @component-background;
    }

    &__title {
      margin-bottom: 10px;
      font-size: 18px;
    }

    &__content {
      color: @text-color-secondary;
    }

    &__action {
      //margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-left {
        display: inline-block;
        padding: 0 16px;

        &:nth-child(1) {
          padding-left: 0;
        }

        //&:nth-child(1),
        //&:nth-child(2) {
        //  border-right: 1px solid @border-color-base;
        //}
      }

      &-icon {
        margin-right: 3px;
      }
    }

    &__right {
      position: absolute;
      right: 20px;
      color: rgb(0 0 0 / 45%);
    }
  }
</style>
