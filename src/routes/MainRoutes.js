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
const WidgetStatistics = Loadable(lazy(() => import('views/widget/Statistics')));
const WidgetData = Loadable(lazy(() => import('views/widget/Data')));
const WidgetChart = Loadable(lazy(() => import('views/widget/Chart')));

// // widget routing
// const WidgetStatistics = Loadable(
//     lazy(() => import('views/widget/Statistics'), {
//         fallback: Loading({
//             pastDelay: true,
//             error: false,
//             timedOut: false
//         })
//     })
// );

// application - customer routing
const AppCustomerList = Loadable(lazy(() => import('views/application/customer/CustomerList')));
const AppCustomerDetails = Loadable(lazy(() => import('views/application/customer/Details')));

//application - promotions routing
const AppPromotionsLists = Loadable(lazy(() => import('views/application/promotions/PromotionsLists')));
const AppPromotionsDetails = Loadable(lazy(() => import('views/application/promotions/Details')));
// application routing
const AppChat = Loadable(lazy(() => import('views/application/chat')));
const AppKanban = Loadable(lazy(() => import('views/application/kanban')));
const AppKanbanBacklogs = Loadable(lazy(() => import('views/application/kanban/Backlogs')));
const AppKanbanBoard = Loadable(lazy(() => import('views/application/kanban/Board')));
const AppMail = Loadable(lazy(() => import('views/application/mail')));
const AppCalendar = Loadable(lazy(() => import('views/application/calendar')));
const AppContactCard = Loadable(lazy(() => import('views/application/contact/Card')));
const AppContactList = Loadable(lazy(() => import('views/application/contact/List')));

// application e-commerce pages
const AppECommProducts = Loadable(lazy(() => import('views/application/e-commerce/Products')));
const AppECommProductDetails = Loadable(lazy(() => import('views/application/e-commerce/ProductDetails')));
const AppECommProductList = Loadable(lazy(() => import('views/application/e-commerce/ProductList')));
const AppECommCheckout = Loadable(lazy(() => import('views/application/e-commerce/Checkout')));

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
            path: '/widget/statistics',
            element: <WidgetStatistics />
        },
        {
            path: '/widget/data',
            element: <WidgetData />
        },
        {
            path: '/widget/chart',
            element: <WidgetChart />
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
                <PermittedRoute
                    path="/promotions/promtions-lists/:id"
                    component={AppPromotionsDetails}
                    permissions={permissions.customers}
                />
            )
        },
        {
            path: '/app/chat',
            element: <AppChat />
        },
        {
            path: '/app/mail',
            element: <AppMail />
        },
        {
            path: '/app/kanban',
            element: <AppKanban />,
            children: [
                {
                    path: 'backlogs',
                    element: <AppKanbanBacklogs />
                },
                {
                    path: 'board',
                    element: <AppKanbanBoard />
                }
            ]
        },
        {
            path: '/app/calendar',
            element: <AppCalendar />
        },
        {
            path: '/app/contact/c-card',
            element: <AppContactCard />
        },
        {
            path: '/app/contact/c-list',
            element: <AppContactList />
        },

        {
            path: '/e-commerce/products',
            element: <AppECommProducts />
        },
        {
            path: '/e-commerce/product-details/:id',
            element: <AppECommProductDetails />
        },
        {
            path: '/e-commerce/product-list',
            element: <AppECommProductList />
        },
        {
            path: '/e-commerce/checkout',
            element: <AppECommCheckout />
        }
    ]
};

export default MainRoutes;
