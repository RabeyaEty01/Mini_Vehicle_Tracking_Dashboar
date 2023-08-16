/* eslint-disable */
export const setPermission = (permissions) => {
    localStorage.setItem('permissions', permissions);
};

export function getPermission() {
    const permissionList = localStorage.getItem('permissions');
    return JSON.parse(permissionList);
}

function hasPermission(values, requiredAll) {
    let permissionList = getPermission();
    if (typeof values === 'string') {
        values = [values];
    } else {
        values = Object.values(values);
    }
    if (requiredAll) {
        return values.every((el) => permissionList.includes(el));
    } else {
        return values.some((el) => permissionList?.includes(el));
    }
}

export default hasPermission;
