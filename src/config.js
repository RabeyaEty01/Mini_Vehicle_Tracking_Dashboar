import LAYOUT_CONST from 'constant';

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,

export const BASE_PATH = '';

export const DASHBOARD_PATH = '/';
export const HORIZONTAL_MAX_ITEM = 6;

const config = {
    layout: LAYOUT_CONST.VERTICAL_LAYOUT,
    drawerType: LAYOUT_CONST.DEFAULT_DRAWER,
    fontFamily: `'Inter', sans-serif`,
    borderRadius: 8,
    outlinedFilled: true,
    navType: 'light', // light, dark
    container: false
};

export default config;
