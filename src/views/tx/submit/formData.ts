import { FormSchema } from '/@/components/Form';
import { uploadApi } from '/@/api/sys/upload';

export const schemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: '题目',
    componentProps: {
      placeholder: '投稿标题',
    },
    required: true,
  },
  {
    field: 'description',
    component: 'InputTextArea',
    label: '稿件描述',
    componentProps: {
      placeholder: '请描述稿件的大致内容',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'platform',
    component: 'Select',
    label: '投稿平台',
    componentProps: {
      placeholder: '请选择投稿平台',
      options: [
        { label: '公众号', value: '0' },
        { label: '微博', value: '1' },
        { label: '全平台', value: '2' },
      ],
    },
    required: true,
  },
  {
    field: 'author',
    component: 'RadioGroup',
    label: '投稿人',
    itemProps: {
      extra: '由稿件的创作性质决定',
    },
    componentProps: {
      options: [
        {
          label: '个人',
          value: '0',
        },
        {
          label: '组织',
          value: '1',
        },
      ],
    },
  },{
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
];
