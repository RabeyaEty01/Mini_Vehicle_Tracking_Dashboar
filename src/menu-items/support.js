// assets
import { Logout, HelpOutline } from '@mui/icons-material';

// constant
const icons = {
    Logout,
    HelpOutline
};

// ==============================|| SUPPORT MENU ITEMS ||============================== //

const support = {
    id: 'support',
    title: 'Support',
    icon: icons.IconMenu,
    type: 'group',
    children: [
        {
            id: 'help',
            title: 'Help',
            type: 'item',
            url: '#',
            icon: icons.HelpOutline
        },
        {
            id: 'log-out',
            title: 'Log Out',
            type: 'item',
            url: '#',
            icon: icons.Logout
        }
    ]
};

export default support;
