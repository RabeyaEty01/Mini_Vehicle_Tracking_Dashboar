// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconBellRinging,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc
} from '@tabler/icons';
import permissions from 'utils/adminPermission/permissions';

// constant
const icons = {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconBellRinging,
    IconMail,
    IconCalendar,
    IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'customer',
            title: <FormattedMessage id="customer" />,
            type: 'item',
            icon: icons.IconUserCheck,
            url: '/customer/customer-list',
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ]
        },
        {
            id: 'promotions',
            title: 'Promotions',
            type: 'item',
            icon: icons.IconBellRinging,
            url: '/promotions/promtions-lists',
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ]
        }

        // {
        //     id: 'mail',
        //     title: <FormattedMessage id="mail" />,
        //     type: 'item',
        //     icon: icons.IconMail,
        //     url: '/app/mail'
        // },
        // {
        //     id: 'calendar',
        //     title: <FormattedMessage id="calendar" />,
        //     type: 'item',
        //     url: '/app/calendar',
        //     icon: icons.IconCalendar,
        //     breadcrumbs: false
        // }
        // {
        //     id: 'contact',
        //     title: <FormattedMessage id="contact" />,
        //     type: 'collapse',
        //     icon: icons.IconNfc,
        //     children: [
        //         {
        //             id: 'c-card',
        //             title: <FormattedMessage id="cards" />,
        //             type: 'item',
        //             url: '/app/contact/c-card',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'c-list',
        //             title: <FormattedMessage id="list" />,
        //             type: 'item',
        //             url: '/app/contact/c-list',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        // {
        //     id: 'e-commerce',
        //     title: <FormattedMessage id="e-commerce" />,
        //     type: 'collapse',
        //     icon: icons.IconBasket,
        //     children: [
        //         {
        //             id: 'products',
        //             title: <FormattedMessage id="products" />,
        //             type: 'item',
        //             url: '/e-commerce/products'
        //         },
        //         {
        //             id: 'product-details',
        //             title: <FormattedMessage id="product-details" />,
        //             type: 'item',
        //             url: '/e-commerce/product-details/1',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'product-list',
        //             title: <FormattedMessage id="product-list" />,
        //             type: 'item',
        //             url: '/e-commerce/product-list',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'checkout',
        //             title: <FormattedMessage id="checkout" />,
        //             type: 'item',
        //             url: '/e-commerce/checkout'
        //         }
        //     ]
        // }
    ]
};

export default application;
