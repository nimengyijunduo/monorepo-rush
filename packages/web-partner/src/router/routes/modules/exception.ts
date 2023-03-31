import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const EXCEPTION: AppRouteRecordRaw = {
    path: '/exception',
    name: 'exception',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.exception',
        requiresAuth: true,
        icon: 'icon-exclamation-circle',
        order: 6,
    },
    children: [
        {
            path: '403',
            name: '403',
            component: () => import('@/features/exception/403/routes/index.vue'),
            meta: {
                locale: 'menu.exception.403',
                requiresAuth: true,
                roles: ['admin'],
            },
        },
        {
            path: '404',
            name: '404',
            component: () => import('@/features/exception/404/routes/index.vue'),
            meta: {
                locale: 'menu.exception.404',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: '500',
            name: '500',
            component: () => import('@/features/exception/500/routes/index.vue'),
            meta: {
                locale: 'menu.exception.500',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default EXCEPTION;
