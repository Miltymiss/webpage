<template>
  <PageWrapper>
    <div class="p-4">
      <BasicTable
        title="工单列表"
        title-help-message="创建过的工单都在这里"
        :can-resize="canResize"
        showTableSetting
        :pagination="pagination"
        :data-source="data"
        :columns="columns"
        :action-column="actionColumn"
      >
        <template #action="{ record, column }">
          <TableAction :actions="createActions(record, column)" />
        </template>
        <template #toolbar>
          <a-button type="primary" @click="newOrderDrawer(true)"> 发起工单 </a-button>
        </template>
      </BasicTable>
      <new-order-drawer @register="newOrderRegister" />
      <detail-drawer @register="detailRegister" />
    </div>
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, TableAction, EditRecordRow, ActionItem } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { getColumns } from './orderData';
  import { useDrawer } from '/@/components/Drawer';
  import { getOrderList } from '/@/api/sys/orderData';
  import newOrderDrawer from '/@/views/tx/orders/NewOrderDrawer.vue';
  import detailDrawer from '/@/views/tx/orders/DetailDrawer.vue';
  export default defineComponent({
    components: { PageWrapper, BasicTable, newOrderDrawer, TableAction, detailDrawer },
    setup() {
      const actionColumn = {
        width: 160,
        title: '操作',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      };
      const loading = ref(true);
      const canResize = ref(true);
      const pagination = ref<any>(false);
      const data = getOrderList();
      const columns = getColumns();
      const [newOrderRegister, { openDrawer: newOrderDrawer }] = useDrawer();
      const [detailRegister, { openDrawer: detailDrawer }] = useDrawer();
      function createActions(record: EditRecordRow, column): ActionItem[] {
        return [
          {
            label: '编辑',
            onClick: () => {
              detailDrawer(true);
            },
          },
        ];
      }
      return {
        loading,
        canResize,
        pagination,
        data,
        columns,
        newOrderRegister,
        newOrderDrawer,
        detailRegister,
        detailDrawer,
        actionColumn,
        createActions,
      };
    },
  });
</script>

<style scoped></style>
