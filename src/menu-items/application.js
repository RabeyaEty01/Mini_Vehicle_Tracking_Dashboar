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
    IconNfc,
    IconFileDollar,
    IconShoppingCart,
    IconUsers,
    IconCalculator
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
    IconNfc,
    IconFileDollar,
    IconShoppingCart,
    IconUsers,
    IconCalculator
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'hrm-system',
            title: <FormattedMessage id="hrm-system" />,
            type: 'collapse',
            icon: icons.IconUsers,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],
            children: [
                {
                    id: 'emp-set',
                    title: <FormattedMessage id="emp-set" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'pay-set',
                    title: <FormattedMessage id="pay-set" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'sal-set',
                            title: <FormattedMessage id="sal-set" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'pay-slip',
                            title: <FormattedMessage id="pay-slip" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'leave-management',
                    title: <FormattedMessage id="leave-management" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'manage-leave',
                            title: <FormattedMessage id="manage-leave" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'attendance',
                            title: <FormattedMessage id="attendance" />,
                            type: 'collapse',
                            children: [
                                {
                                    id: 'a-mark',
                                    title: <FormattedMessage id="a-mark" />,
                                    type: 'item',
                                    url: '/app/contact/c-card',
                                    breadcrumbs: false
                                },
                                {
                                    id: 'b-bulk',
                                    title: <FormattedMessage id="b-bulk" />,
                                    type: 'item',
                                    url: '/app/contact/c-list',
                                    breadcrumbs: false
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'performance-setup',
                    title: <FormattedMessage id="performance-setup" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'indicator',
                            title: <FormattedMessage id="indicator" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'appraisal',
                            title: <FormattedMessage id="appraisal" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'goal-track',
                            title: <FormattedMessage id="goal-track" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'training-set',
                    title: <FormattedMessage id="training-set" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 't-list',
                            title: <FormattedMessage id="t-list" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'trainer',
                            title: <FormattedMessage id="trainer" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'recruitment',
                    title: <FormattedMessage id="recruitment" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'jobs',
                            title: <FormattedMessage id="jobs" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'j-create',
                            title: <FormattedMessage id="j-create" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'j-application',
                            title: <FormattedMessage id="j-application" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'j-candidate',
                            title: <FormattedMessage id="j-candidate" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'j-on-boarding',
                            title: <FormattedMessage id="j-on-boarding" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'custom-que',
                            title: <FormattedMessage id="custom-que" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'interview-sche',
                            title: <FormattedMessage id="interview-sche" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'career',
                            title: <FormattedMessage id="career" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'hr-admin',
                    title: <FormattedMessage id="hr-admin" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'award',
                            title: <FormattedMessage id="award" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'transfer',
                            title: <FormattedMessage id="transfer" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'resignation',
                            title: <FormattedMessage id="resignation" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'trip',
                            title: <FormattedMessage id="trip" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'complaints',
                            title: <FormattedMessage id="complaints" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'warning',
                            title: <FormattedMessage id="warning" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'promotion',
                            title: <FormattedMessage id="promotion" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'termination',
                            title: <FormattedMessage id="termination" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'announcement',
                            title: <FormattedMessage id="announcement" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        },
                        {
                            id: 'holidays',
                            title: <FormattedMessage id="holidays" />,
                            type: 'item',
                            url: '/customer/customer-list',
                            breadcrumbs: true
                        }
                    ]
                },
                {
                    id: 'event-setup',
                    title: <FormattedMessage id="event-setup" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'meeting',
                    title: <FormattedMessage id="meeting" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'e-asset',
                    title: <FormattedMessage id="e-asset" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'doc-set',
                    title: <FormattedMessage id="doc-set" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'company-policy',
                    title: <FormattedMessage id="company-policy" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'hrm-system-setup',
                    title: <FormattedMessage id="hrm-system-setup" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'accountingSystem',
            title: <FormattedMessage id="accountingSystem" />,
            type: 'collapse',
            icon: icons.IconFileDollar,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],
            children: [
                {
                    id: 'customer',
                    title: <FormattedMessage id="customer" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'vendor',
                    title: <FormattedMessage id="vendor" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'proposal',
                    title: <FormattedMessage id="proposal" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },
                {
                    id: 'banking',
                    title: <FormattedMessage id="banking" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'account',
                            title: <FormattedMessage id="account" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'transfer',
                            title: <FormattedMessage id="transfer" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'income',
                    title: <FormattedMessage id="income" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'invoice',
                            title: <FormattedMessage id="invoice" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'revenue',
                            title: <FormattedMessage id="revenue" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'creditNote',
                            title: <FormattedMessage id="creditNote" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'expense',
                    title: <FormattedMessage id="expense" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'bill',
                            title: <FormattedMessage id="bill" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'payment',
                            title: <FormattedMessage id="payment" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'debitNote',
                            title: <FormattedMessage id="debitNote" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'double-entry',
                    title: <FormattedMessage id="double-entry" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'chartOfAccounts',
                            title: <FormattedMessage id="chartOfAccounts" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'journalAccount',
                            title: <FormattedMessage id="journalAccount" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'ledgerSummary',
                            title: <FormattedMessage id="ledgerSummary" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'balanceSheet',
                            title: <FormattedMessage id="balanceSheet" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'trialBalance',
                            title: <FormattedMessage id="trialBalance" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'budget-planner',
                    title: <FormattedMessage id="budget-planner" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'financial-goal',
                    title: <FormattedMessage id="financial-goal" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'accounting-setup',
                    title: <FormattedMessage id="accounting-setup" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'print-settings',
                    title: <FormattedMessage id="print-settings" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                }
            ]
        },

        {
            id: 'userManagement',
            title: <FormattedMessage id="userManagement" />,
            type: 'collapse',
            icon: icons.IconUserCheck,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],
            children: [
                {
                    id: 'user',
                    title: <FormattedMessage id="user" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'role',
                    title: <FormattedMessage id="role" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'client',
                    title: <FormattedMessage id="client" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'pr-system',
            title: <FormattedMessage id="pr-system" />,
            type: 'collapse',
            icon: icons.IconShoppingCart,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],
            children: [
                {
                    id: 'pr-services',
                    title: <FormattedMessage id="pr-services" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'pr-stock',
                    title: <FormattedMessage id="pr-stock" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                }
            ]
        },

        {
            id: 'pos-system',
            title: <FormattedMessage id="pos-system" />,
            type: 'collapse',
            icon: icons.IconCalculator,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],
            children: [
                {
                    id: 'warehouse',
                    title: <FormattedMessage id="warehouse" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'purchase',
                    title: <FormattedMessage id="purchase" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },

                {
                    id: 'add-pos',
                    title: <FormattedMessage id="add-pos" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },
                {
                    id: 'pos',
                    title: <FormattedMessage id="pos" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },
                {
                    id: 'transfer',
                    title: <FormattedMessage id="transfer" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },
                {
                    id: 'print-barcode',
                    title: <FormattedMessage id="print-barcode" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },
                {
                    id: 'print-settings',
                    title: <FormattedMessage id="print-settings" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'notice',
            title: <FormattedMessage id="notice" />,
            type: 'item',
            icon: icons.IconBellRinging,
            url: '/promotions/promtions-lists',
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ]
        },

        {
            id: 'mail',
            title: <FormattedMessage id="mail" />,
            type: 'item',
            icon: icons.IconMail,
            url: '/app/mail'
        },
        {
            id: 'customer',
            title: <FormattedMessage id="customer" />,
            type: 'collapse',
            icon: icons.IconBasket,
            children: [
                {
                    id: 'customer-list',
                    title: <FormattedMessage id="customer-list" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: false
                },
                {
                    id: 'order-list',
                    title: <FormattedMessage id="order-list" />,
                    type: 'item',
                    url: '/customer/order-list',
                    breadcrumbs: false
                },
                {
                    id: 'create-invoice',
                    title: <FormattedMessage id="create-invoice" />,
                    type: 'item',
                    url: '/customer/create-invoice',
                    breadcrumbs: false
                },
                {
                    id: 'order-details',
                    title: <FormattedMessage id="order-details" />,
                    type: 'item',
                    url: '/customer/order-details'
                },
                {
                    id: 'product',
                    title: <FormattedMessage id="product" />,
                    type: 'item',
                    url: '/customer/product',
                    breadcrumbs: false
                },
                {
                    id: 'product-review',
                    title: <FormattedMessage id="product-review" />,
                    type: 'item',
                    url: '/customer/product-review',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'chat',
            title: <FormattedMessage id="chat" />,
            type: 'item',
            icon: icons.IconMessages,
            url: '/app/chat'
        },
        {
            id: 'kanban',
            title: 'Kanban',
            type: 'item',
            icon: icons.IconLayoutKanban,
            url: '/app/kanban/board'
        },
        {
            id: 'mail',
            title: <FormattedMessage id="mail" />,
            type: 'item',
            icon: icons.IconMail,
            url: '/app/mail'
        },
        {
            id: 'calendar',
            title: <FormattedMessage id="calendar" />,
            type: 'item',
            url: '/app/calendar',
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'contact',
            title: <FormattedMessage id="contact" />,
            type: 'collapse',
            icon: icons.IconNfc,
            children: [
                {
                    id: 'c-card',
                    title: <FormattedMessage id="cards" />,
                    type: 'item',
                    url: '/app/contact/c-card',
                    breadcrumbs: false
                },
                {
                    id: 'c-list',
                    title: <FormattedMessage id="list" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'e-commerce',
            title: <FormattedMessage id="e-commerce" />,
            type: 'collapse',
            icon: icons.IconBasket,
            children: [
                {
                    id: 'products',
                    title: <FormattedMessage id="products" />,
                    type: 'item',
                    url: '/e-commerce/products'
                },
                {
                    id: 'product-details',
                    title: <FormattedMessage id="product-details" />,
                    type: 'item',
                    url: '/e-commerce/product-details/1',
                    breadcrumbs: false
                },
                {
                    id: 'product-list',
                    title: <FormattedMessage id="product-list" />,
                    type: 'item',
                    url: '/e-commerce/product-list',
                    breadcrumbs: false
                },
                {
                    id: 'checkout',
                    title: <FormattedMessage id="checkout" />,
                    type: 'item',
                    url: '/e-commerce/checkout'
                }
            ]
        }
    ]
};

export default application;
