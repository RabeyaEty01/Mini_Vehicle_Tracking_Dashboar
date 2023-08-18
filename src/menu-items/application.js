// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconAffiliate,
    IconApps,
    IconBasket,
    IconBellRinging,
    IconBrandBlogger,
    IconCalculator,
    IconCalendar,
    IconFileDollar,
    IconLayersLinked,
    IconLayoutKanban,
    IconMail,
    IconMessages,
    IconNfc,
    IconNote,
    IconQuestionCircle,
    IconSchool,
    IconShoppingCart,
    IconUserCheck,
    IconUserCircle,
    IconUsers
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
    IconCalculator,
    IconQuestionCircle,
    IconUserCircle,
    IconLayersLinked,
    IconAffiliate,
    IconNote,
    IconBrandBlogger,
    IconSchool
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
            id: 'crm-system',
            title: <FormattedMessage id="crm-system" />,
            type: 'collapse',
            icon: icons.IconLayersLinked,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],
            children: [
                {
                    id: 'leads',
                    title: <FormattedMessage id="leads" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'deals',
                    title: <FormattedMessage id="deals" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'form-buidler',
                    title: <FormattedMessage id="form-buidler" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },
                {
                    id: 'contract',
                    title: <FormattedMessage id="contract" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'crm-system-set',
                    title: <FormattedMessage id="crm-system-set" />,
                    type: 'item',
                    url: '/app/contact/c-list',
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
            id: 'school-system',
            title: <FormattedMessage id="school-system" />,
            type: 'collapse',
            icon: icons.IconSchool,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],
            children: [
                {
                    id: 'admission',
                    title: <FormattedMessage id="admission" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'st-setup',
                    title: <FormattedMessage id="st-setup" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'students',
                            title: <FormattedMessage id="students" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'st-details',
                            title: <FormattedMessage id="st-details" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'attendance',
                            title: <FormattedMessage id="attendance" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'st-promotion',
                            title: <FormattedMessage id="st-promotion" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'parents',
                            title: <FormattedMessage id="parents" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        },
                        {
                            id: 'pt-details',
                            title: <FormattedMessage id="pt-details" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'teachers-setup',
                    title: <FormattedMessage id="teachers-setup" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'teachers',
                            title: <FormattedMessage id="teachers" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 't-payment',
                            title: <FormattedMessage id="t-payment" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 't-details',
                            title: <FormattedMessage id="t-details" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'library',
                    title: <FormattedMessage id="library" />,
                    type: 'item',
                    url: '/app/contact/c-card',
                    breadcrumbs: false
                },
                {
                    id: 'fees-collect',
                    title: <FormattedMessage id="fees-collect" />,
                    type: 'item',
                    url: '/app/contact/c-card',
                    breadcrumbs: false
                },
                {
                    id: 'class-setup',
                    title: <FormattedMessage id="class-setup" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'classes',
                            title: <FormattedMessage id="classes" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'class-routine',
                            title: <FormattedMessage id="class-routine" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'subject',
                            title: <FormattedMessage id="subject" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'exam',
                    title: <FormattedMessage id="exam" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'classes',
                            title: <FormattedMessage id="classes" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'ex-sch',
                            title: <FormattedMessage id="ex-sch" />,
                            type: 'item',
                            url: '/app/contact/c-card',
                            breadcrumbs: false
                        },
                        {
                            id: 'ex-grades',
                            title: <FormattedMessage id="ex-grades" />,
                            type: 'item',
                            url: '/app/contact/c-list',
                            breadcrumbs: false
                        }
                    ]
                },
                {
                    id: 'transport',
                    title: <FormattedMessage id="transport" />,
                    type: 'item',
                    url: '/app/contact/c-card',
                    breadcrumbs: false
                },
                {
                    id: 'hostel',
                    title: <FormattedMessage id="hostel" />,
                    type: 'item',
                    url: '/app/contact/c-card',
                    breadcrumbs: false
                }
            ]
        },

        {
            id: 'userManagement',
            title: <FormattedMessage id="userManagement" />,
            type: 'collapse',
            icon: icons.IconUserCheck,
            children: [
                {
                    id: 'account-profile',
                    title: <FormattedMessage id="account-profile" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'profile1',
                            title: (
                                <>
                                    <FormattedMessage id="profile" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/user/account-profile/profile1'
                        },
                        {
                            id: 'profile2',
                            title: (
                                <>
                                    <FormattedMessage id="profile" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/user/account-profile/profile2'
                        },
                        {
                            id: 'profile3',
                            title: (
                                <>
                                    <FormattedMessage id="profile" /> 03
                                </>
                            ),
                            type: 'item',
                            url: '/user/account-profile/profile3'
                        }
                    ]
                },
                {
                    id: 'user-card',
                    title: <FormattedMessage id="cards" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'card1',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/user/card/card1'
                        },
                        {
                            id: 'card2',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/user/card/card2'
                        },
                        {
                            id: 'card3',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 03
                                </>
                            ),
                            type: 'item',
                            url: '/user/card/card3'
                        }
                    ]
                },
                {
                    id: 'user-list',
                    title: <FormattedMessage id="list" />,
                    type: 'collapse',
                    children: [
                        {
                            id: 'list1',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 01
                                </>
                            ),
                            type: 'item',
                            url: '/user/list/list1'
                        },
                        {
                            id: 'list2',
                            title: (
                                <>
                                    <FormattedMessage id="style" /> 02
                                </>
                            ),
                            type: 'item',
                            url: '/user/list/list2'
                        }
                    ]
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
                },
                {
                    id: 'posts',
                    title: <FormattedMessage id="social-profile" />,
                    type: 'item',
                    url: '/user/social-profile/posts'
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
            id: 'project-system',
            title: <FormattedMessage id="project-system" />,
            type: 'collapse',
            icon: icons.IconAffiliate,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],
            children: [
                {
                    id: 'projects',
                    title: <FormattedMessage id="projects" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'tasks',
                    title: <FormattedMessage id="tasks" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'timesheet',
                    title: <FormattedMessage id="timesheet" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },
                {
                    id: 'bug',
                    title: <FormattedMessage id="bug" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'task-cal',
                    title: <FormattedMessage id="task-cal" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },
                {
                    id: 'tracker',
                    title: <FormattedMessage id="tracker" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'pr-report',
                    title: <FormattedMessage id="pr-report" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: true
                },

                {
                    id: 'pr-system-set',
                    title: <FormattedMessage id="pr-system-set" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'quiz-system',
            title: <FormattedMessage id="quiz-system" />,
            type: 'collapse',
            icon: icons.IconQuestionCircle,
            permission: [
                permissions.customers.read,
                permissions.customers.create,
                permissions.customers.delete,
                permissions.customers.update
            ],

            'quiz-create': 'Quiz Create',
            'quiz-update': 'Quiz Update',
            'quize-report': 'Quiz Report',
            children: [
                {
                    id: 'quizes',
                    title: <FormattedMessage id="quizes" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'quiz-create',
                    title: <FormattedMessage id="quiz-create" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'quiz-update',
                    title: <FormattedMessage id="quiz-update" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                },
                {
                    id: 'quiz-report',
                    title: <FormattedMessage id="quiz-report" />,
                    type: 'item',
                    url: '/customer/customer-list',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'customer',
            title: <FormattedMessage id="customer" />,
            type: 'collapse',
            icon: icons.IconUserCircle,
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
        },
        {
            id: 'blog',
            title: <FormattedMessage id="blog" />,
            type: 'collapse',
            icon: icons.IconBrandBlogger,
            children: [
                {
                    id: 'blog-posts',
                    title: <FormattedMessage id="blog-posts" />,
                    type: 'item',
                    url: '/app/contact/c-card',
                    breadcrumbs: false
                },
                {
                    id: 'blog-details',
                    title: <FormattedMessage id="blog-details" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: false
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
            id: 'notes',
            title: <FormattedMessage id="notes" />,
            type: 'item',
            icon: icons.IconNote,
            url: '/app/chat'
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
        }
    ]
};

export default application;
