import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';
import PermittedRoute from './PermittedRouts';
import permissions from 'utils/adminPermission/permissions';
import Loading from 'ui-component/Loading';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardAnalytics = Loadable(lazy(() => import('views/dashboard/Analytics')));

// widget routing
const WidgetStatistics = Loadable(
    lazy(() => import('views/widget/Statistics'), {
        fallback: Loading({
            pastDelay: true,
            error: false,
            timedOut: false
        })
    })
);

// application - customer routing
const AppCustomerList = Loadable(lazy(() => import('views/application/customer/CustomerList')));
const AppCustomerDetails = Loadable(lazy(() => import('views/application/customer/Details')));

//application - promotions routing
const AppPromotionsLists = Loadable(lazy(() => import('views/application/promotions/PromotionsLists')));
const AppPromotionsDetails = Loadable(lazy(() => import('views/application/promotions/Details')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/analytics',
            element: <DashboardAnalytics />
        },
        {
            path: '/customer/customer-list',
            element: <PermittedRoute path="/customer/customer-list" component={AppCustomerList} permissions={permissions.customers} />
        },
        {
            path: '/customer/customer-list/:id',
            element: (
                <PermittedRoute path="/customer/customer-list/:id" component={AppCustomerDetails} permissions={permissions.customers} />
            )
        },
        {
            path: '/promotions/promtions-lists',
            element: (
                <PermittedRoute path="/promotions/promtions-lists" component={AppPromotionsLists} permissions={permissions.customers} />
            )
        },
        {
            path: '/promotions/promtions-lists/:id',
            element: (
                <PermittedRoute path="/promotions/promtions-lists/:id" component={AppPromotionsDetails} permissions={permissions.customers} />
            )
        }
    ]
};

export default MainRoutes;
