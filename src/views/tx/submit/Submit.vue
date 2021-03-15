<template>
  <PageWrapper>
    <div class="p-4">
      <BasicTable
        title="投稿列表"
        title-help-message="过往投稿都在这里"
        :can-resize="canResize"
        showTableSetting
        :pagination="pagination"
        :data-source="data"
        :columns="columns"
      >
        <template #toolbar>
          <a-button type="primary" @click="newSubmitDrawer(true)"> 新投稿 </a-button>
        </template>
      </BasicTable>
      <new-submit-drawer @register="newSubmitRegister" />
    </div>
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { getColumns } from './submitData';
  import { useDrawer } from '/@/components/Drawer';
  import { getSubmitList } from '/@/api/sys/orderData';
  import newSubmitDrawer from './NewSubmitDrawer.vue';
  export default defineComponent({
    components: { PageWrapper, BasicTable, newSubmitDrawer },
    setup() {
      const loading = ref(true);
      const canResize = ref(true);
      const pagination = ref<any>(false);
      const data = getSubmitList();
      const columns = getColumns();
      const [newSubmitRegister, { openDrawer: newSubmitDrawer }] = useDrawer();
      return {
        loading,
        canResize,
        pagination,
        data,
        columns,
        newSubmitRegister,
        newSubmitDrawer,
      };
    },
  });
</script>

<style scoped></style>
