// assets
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { IconHelp } from '@tabler/icons';
// constant
const icons = {
    IconHelp,
    LogoutOutlinedIcon
};

// ==============================|| SUPPORT MENU ITEMS ||============================== //

const support = {
    id: 'support',
    icon: icons.IconMenu,
    type: 'group',
    children: [
        {
            id: 'help',
            title: 'Help',
            type: 'item',
            url: '#',
            icon: icons.IconHelp
        },
        {
            id: 'log-out',
            title: 'Log Out',
            type: 'item',
            url: '#',
            icon: icons.LogoutOutlinedIcon
        }
    ]
};

export default support;
