// third-party

// assets
import { CandlestickChart, Dashboard, Settings } from '@mui/icons-material';
import { IconArrowsExchange, IconUser } from '@tabler/icons';

const icons = {
    Dashboard,
    CandlestickChart,
    Settings,
    IconUser,
    IconArrowsExchange
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    icon: icons.Dashboard,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.Dashboard
        }
    ]
};

export default dashboard;
