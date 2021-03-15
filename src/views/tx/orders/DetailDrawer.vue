<template>
  <BasicDrawer v-bind="$attrs" :isDetail="true" title="工单详情">
    <PageWrapper
      title="团委宣传部事务处理事件流"
      contentBackground
      content=" 仅面向职能社团、团总支、团委老师开放"
      contentClass="p-4"
    >
      <div class="pt-4 m-4 desc-wrap">
        <Description
          size="middle"
          title="工单概述"
          :bordered="false"
          :column="4"
          :data="descData"
          :schema="descSchema"
        />
        <a-divider />
        <Description
          size="middle"
          title="工单详情"
          :bordered="false"
          :column="3"
          :data="detailData"
          :schema="detailSchema"
        />
        <a-divider />
        <Description
          size="middle"
          title="附件"
          :bordered="false"
          :column="3"
          :data="enclosureData"
          :schema="enclosureSchema"
        />
        <a-divider />
        <a-card title="流程进度" :bordered="false">
          <a-steps :current="1" progress-dot size="small">
            <a-step title="发起工单">
              <template #description> <div>Vben</div> <p>2016-12-12 12:32</p> </template>
            </a-step>
            <a-step title="接受工单">
              <template #description>
                <p>Chad</p>
              </template>
            </a-step>
            <a-step title="委派处理" />
            <a-step title="委派处理" />
            <a-step title="完成" />
          </a-steps>
        </a-card>
      </div>
    </PageWrapper>
    <template #titleToolbar> </template>
  </BasicDrawer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Description } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Steps } from 'ant-design-vue';
  import { BasicDrawer } from '/@/components/Drawer';
  import {
    orderDescSchema,
    orderDetailSchema,
    orderEnclosureSchema,
  } from '/@/views/tx/orders/formData';
  export default defineComponent({
    components: {
      Description,
      PageWrapper,
      [Divider.name]: Divider,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
      BasicDrawer,
    },
    setup() {
      const descData: any[] = [
        {
          a1: '1000000000',
          a2: '活动拍照',
          a3: '待处理',
          a4: '2021-3-19',
          a5: '张家华',
          a6: '团委宣传部',
        },
      ];
      const detailData: any[] = [
        {
          b1: '学代会拍照工作，\n地点：YF604 \n时间：2020-3-31 18：00',
        },
      ];
      const enclosureData: any[] = [
        {
          c1: '百度网盘',
        },
      ];
      return {
        descSchema: orderDescSchema,
        detailSchema: orderDetailSchema,
        enclosureSchema: orderEnclosureSchema,
        descData,
        detailData,
        enclosureData,
      };
    },
  });
</script>

<style scoped></style>
