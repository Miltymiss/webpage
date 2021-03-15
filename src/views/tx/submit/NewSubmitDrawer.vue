<template>
  <BasicDrawer v-bind="$attrs" :isDetail="true" title="新工单">
    <PageWrapper
      title="向团委宣传部投稿,发布你的作品"
      contentBackground
      content="推送、短文、摄影集、音乐、视频……不限题材，等你来稿"
      contentClass="p-4"
    >
      <BasicForm @register="register" />
    </PageWrapper>
    <template #titleToolbar> </template>
  </BasicDrawer>
</template>
<script lang="ts">
  import { BasicForm, useForm } from './';
  import { schemas } from './formData';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { defineComponent } from 'vue';
  import { BasicDrawer } from '/@/components/Drawer';
  import { PageWrapper } from '/@/components/Page';
  export default defineComponent({
    components: { BasicDrawer, PageWrapper, BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const [register, { validate, setProps }] = useForm({
        labelCol: {
          span: 7,
        },
        wrapperCol: {
          span: 10,
        },
        schemas: schemas,
        actionColOptions: {
          offset: 8,
        },
        submitButtonOptions: {
          text: '提交',
        },
        submitFunc: customSubmitFunc,
      });

      async function customSubmitFunc() {
        try {
          await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
            createMessage.success('提交成功！');
          }, 2000);
        } catch (error) {}
      }

      return { register };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background: #fff;
  }
</style>
