import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const tx: AppRouteModule = {
  path: '/tx',
  name: 'tuanxuan',
  component: LAYOUT,
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.tx.tx'),
  },
  children: [
    {
      path: 'order',
      name: 'order',
      component: () => import('/@/views/tx/orders/Order.vue'),
      meta: {
        title: t('routes.tx.order'),
      },
    },
    {
      path: 'submit',
      name: 'submit',
      component: () => import('/@/views/tx/submit/Submit.vue'),
      meta: {
        title: t('routes.tx.submit'),
      },
    },
  ],
};

export default tx;
