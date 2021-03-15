import { BasicColumn } from '/@/components/Table';

export function getColumns(): BasicColumn[] {
  return [
    {
      title: '投稿标题',
      dataIndex: 'title',
      fixed: 'left',
      width: 250,
    },
    {
      title: '平台类型',
      dataIndex: 'type',
      fixed: 'left',
      width: 100,
    },
    {
      title: '投稿状态',
      dataIndex: 'status',
      fixed: 'left',
      width: 100,
    },
    {
      title: '投稿单位单位',
      dataIndex: 'department',
      fixed: 'left',
      width: 150,
    },
    {
      title: '投稿时间',
      dataIndex: 'time',
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

