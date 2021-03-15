import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 300,
  menu: {
    name: t('routes.tx.tx'),
    path: '/tx',
    children: [
      {
        path: 'order',
        name: t('routes.tx.order'),
      },
      {
        path: 'submit',
        name: t('routes.tx.submit'),
      },
    ],
  },
};
export default menu;
