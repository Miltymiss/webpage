import '/@/store/modules/user.ts';

export function getOrderList() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 30; index++) {
      arr.push({
        orderId: `${index}`,
        title: '活动剪影',
        type: `微信公众号`,
        status: `待发布`,
        department: '团委宣传部',
        createTime: new Date().toLocaleString(),
        updateTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
}

export function getSubmitList() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 30; index++) {
      arr.push({
        title: '活动拍照',
        type: `拍照`,
        status: `待处理`,
        department: '个人',
        time: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
}
