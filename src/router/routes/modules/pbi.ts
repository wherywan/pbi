import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const pbi: AppRouteModule = {
  path: '/pbi',
  name: 'PBI',
  component: LAYOUT,
  redirect: '/pbi/product',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'product',
      name: 'Product',
      component: () => import('/@/views/pbi/product/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis'),
      },
    },
    {
      path: 'sale',
      name: 'Sale',
      component: () => import('/@/views/pbi/sale/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis'),
      },
    }
  ],
};

export default pbi;
