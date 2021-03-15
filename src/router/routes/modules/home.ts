import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: LAYOUT,
  redirect: '/home/workbench',
  meta: {
    icon: 'ion:home-outline',
    title: t('routes.dashboard.workbench'),
  },
  children: [
    {
      path: 'workbench',
      name: 'workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
