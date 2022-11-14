// pages
// private pages
import Monitor from '~/pages/Monitor';
import ConnectedSystem from '~/pages/ConnectedSystem';
import SystemParam from '~/pages/SystemParam';
import ProductService from '~/pages/ProductService';
import UserManagement from '~/pages/UserManagement';
import UserPermission from '~/pages/UserPermission';

// private routes
const privateRoutes = [
    {
        path: '/',
        component: Monitor,
    },
    {
        path: '/monitor/transaction_history',
        component: Monitor,
    },
    {
        path: '/connection/connected_system',
        component: ConnectedSystem,
    },
    {
        path: '/connection/param',
        component: SystemParam,
    },
    {
        path: '/admin/user_manager',
        component: UserManagement,
    },
    {
        path: '/admin/user_permission',
        component: UserPermission,
    },
    {
        path: '/product/channel',
        component: ProductService,
    },
];

export { privateRoutes };
