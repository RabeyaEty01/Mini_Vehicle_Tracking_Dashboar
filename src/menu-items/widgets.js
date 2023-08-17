// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconChartArcs, IconClipboardList, IconChartInfographic } from '@tabler/icons';
import permissions from 'utils/adminPermission/permissions';

// constant
const icons = {
    IconChartArcs,
    IconClipboardList,
    IconChartInfographic
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const widgets = {
    id: 'widget',
    title: <FormattedMessage id="widget" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'statistics',
            title: <FormattedMessage id="statistics" />,
            type: 'item',
            icon: icons.IconChartArcs,
            url: '/widget/statistics'
        },
        {
            id: 'data',
            title: <FormattedMessage id="data" />,
            type: 'item',
            url: '/widget/data',
            icon: icons.IconClipboardList,
            breadcrumbs: false
        },
        {
            id: 'chart',
            title: <FormattedMessage id="chart" />,
            type: 'item',
            url: '/widget/chart',
            icon: icons.IconChartInfographic,
            breadcrumbs: false
        }
    ]
};

export default widgets;
