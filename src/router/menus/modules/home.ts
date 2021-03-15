import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 0,
  menu: {
    path: '/home/workbench',
    name: t('routes.dashboard.workbench'),
  },
};
export default menu;
