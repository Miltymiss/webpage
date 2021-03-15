import { BasicColumn } from '/@/components/Table';

export function getColumns(): BasicColumn[] {
  return [
    {
      title: '工单号',
      dataIndex: 'orderId',
      fixed: 'left',
      width: 300,
    },
    {
      title: '工单标题',
      dataIndex: 'title',
      fixed: 'left',
      width: 250,
    },
    {
      title: '工单类型',
      dataIndex: 'type',
      fixed: 'left',
      width: 100,
    },
    {
      title: '工单状态',
      dataIndex: 'status',
      fixed: 'left',
      width: 100,
    },
    {
      title: '发起单位',
      dataIndex: 'department',
      fixed: 'left',
      width: 150,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      fixed: 'left',
      width: 200,
    },
    {
      title: '最近操作',
      dataIndex: 'updateTime',
      fixed: 'left',
      width: 200,
    },
  ];
}
export function getBasicData() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 30; index++) {
      arr.push({
        orderId: `${index}`,
        title: '活动拍照',
        type: `拍照`,
        status: `待处理`,
        department: '个人',
        createTime: new Date().toLocaleString(),
        updateTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
}


