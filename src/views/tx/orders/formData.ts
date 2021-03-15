import { FormSchema } from '/@/components/Form';
import { uploadApi } from '/@/api/sys/upload';
import { DescItem } from '/@/components/Description';

export const schemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: '工单主题',
    componentProps: {
      placeholder: '工单主题要能够直观反映工单内容',
    },
    required: true,
  },
  {
    field: 'time',
    component: 'DatePicker',
    label: '截至日期',
    required: true,
  },
  {
    field: 'type',
    component: 'Select',
    label: '申请类型',
    componentProps: {
      placeholder: '请选择申请类型',
      options: [
        { label: '个人申请', value: '0' },
        { label: '社团申请', value: '1' },
      ],
    },
    required: true,
  },
  {
    field: 'orderType',
    component: 'Select',
    label: '工单类型',
    componentProps: {
      placeholder: '请选择工单类型',
      options: [
        { label: '推送', value: '0' },
        { label: '视频制作', value: '1' },
        { label: '拍照', value: '2' },
        { label: '其他', value: '3' },
      ],
    },
    required: true,
  },
  {
    field: 'target',
    component: 'InputTextArea',
    label: '任务描述',
    componentProps: {
      placeholder: '请输入需求描述',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'metrics',
    component: 'InputTextArea',
    label: '交付方式',
    componentProps: {
      placeholder: '详细描述交付方式',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'enclosure',
    component: 'RadioGroup',
    label: '附件上传',
    itemProps: {
      extra: '大文件推荐使用网盘链接方式上传',
    },
    componentProps: {
      options: [
        {
          label: '直接上传',
          value: '0',
        },
        {
          label: '网盘链接',
          value: '1',
        },
      ],
    },
  },
  {
    field: 'address',
    component: 'Input',
    label: '附件地址',
    show: ({ model }) => {
      return model.enclosure === '1';
    },
    helpMessage: '推荐使用百度网盘分享',
    subLabel: '( 选填 )',
    componentProps: {
      placeholder: '附件资源地址,推荐使用百度网盘',
    },
  },
  {
    field: 'password',
    component: 'Input',
    label: '资源密码',
    show: ({ model }) => {
      return model.enclosure === '1';
    },
    helpMessage: '如果需要密码请填写完整',
    subLabel: '( 选填 )',
    componentProps: {
      placeholder: '如果需要密码请填写完整',
    },
  },
  {
    field: 'upload',
    component: 'Upload',
    label: '点击上传附件',
    show: ({ model }) => {
      return model.enclosure === '0';
    },
    componentProps: { api: uploadApi },
  },
  {
    field: 'weights',
    component: 'InputNumber',
    label: '事件紧急度',
    subLabel: '( 选填 )',
    componentProps: {
      formatter: (value: string) => (value ? `${value}%` : ''),
      parser: (value: string) => value.replace('%', ''),
      placeholder: '请输入',
    },
  },
];

export const orderDescSchema: DescItem[] = [
  {
    field: 'a1',
    label: '工单号',
  },
  {
    field: 'a2',
    label: '工单主题',
  },
  {
    field: 'a3',
    label: '工单状态',
  },
  {
    field: 'a4',
    label: '创建时间',
  },
  {
    field: 'a5',
    label: '发起人',
  },
  {
    field: 'a6',
    label: '发起单位',
  },
];

export const orderDetailSchema: DescItem[] = [
  {
    field: 'b1',
    label: '工作描述',
  },
];
export const orderEnclosureSchema: DescItem[] = [
  {
    field: 'c1',
    label: '附件',
  },
];
