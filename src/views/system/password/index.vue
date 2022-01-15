<template>
  <PageWrapper title="修改当前用户密码" content="修改成功后会自动退出当前登录！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onBeforeUnmount } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';
  import { formSchema } from './pwd.data';
  import { changePwd } from '/@/api/sys/user';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    name: 'ChangePassword',
    components: { BasicForm, PageWrapper },
    setup() {
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: formSchema,
      });
      const { notification } = useMessage();
      const userStore = useUserStore();

      async function handleSubmit() {
        try {
          const values = await validate();
          const { /*passwordOld, */ passwordNew } = values;
          await changePwd({
            password: passwordNew,
          });
          await notification.success({
            message: '操作成功！',
            description: `密码更改成功，3秒后将退出重新登录！`,
            duration: 3,
            onClick: () => {
              userStore.logout(true);
            },
          });
          const timer = setTimeout(() => {
            userStore.logout(true);
          }, 3000);
          onBeforeUnmount(() => {
            clearTimeout(timer);
          });
          // TODO custom api
          // console.log(passwordOld, passwordNew);
          // const { router } = useRouter();
          // router.push(pageEnum.BASE_LOGIN);
        } catch (error) {}
      }

      return { register, resetFields, handleSubmit };
    },
  });
</script>
