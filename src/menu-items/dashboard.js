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
            url: '/',
            icon: icons.IconLayoutDashboard
        },
        {
            id: 'markets',
            title: 'Markets',
            type: 'item',
            url: '#markets',
            icon: icons.CandlestickChart
        },
        {
            id: 'transaction',
            title: 'Transactions',
            type: 'item',
            url: '#trasaction',
            icon: icons.IconArrowsExchange
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '#profile',
            icon: icons.IconUser
        },
        {
            id: 'setting',
            title: 'Settings',
            type: 'item',
            url: '#settings',
            icon: icons.Settings
        }
    ]
};

export default dashboard;
