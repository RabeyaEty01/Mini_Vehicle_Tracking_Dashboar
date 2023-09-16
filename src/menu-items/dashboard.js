// third-party

// assets
import { CandlestickChart, Settings } from '@mui/icons-material';
import { IconArrowsExchange, IconLayoutDashboard, IconUser } from '@tabler/icons';

const icons = {
    IconLayoutDashboard,
    CandlestickChart,
    Settings,
    IconUser,
    IconArrowsExchange
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    icon: icons.IconLayoutDashboard,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconLayoutDashboard,
            breadcrumbs: false
        },
        {
            id: 'markets',
            title: 'Markets',
            type: 'item',
            url: '#',
            icon: icons.CandlestickChart,
            breadcrumbs: false
        },
        {
            id: 'transaction',
            title: 'Transactions',
            type: 'item',
            url: '#',
            icon: icons.IconArrowsExchange,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '#',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'setting',
            title: 'Settings',
            type: 'item',
            url: '#',
            icon: icons.Settings,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
