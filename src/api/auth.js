import { baseUrl } from './apiConfig';
/* eslint-disable */
export const getAuth = () => {
    const id = localStorage.getItem('service_id');
    const token = localStorage.getItem('serviceToken');
    return {
        id,
        token
    };
};

export const clearAuth = () => {
    localStorage.clear();
    window.location.reload(false);
};

export default async (url, optionsProps = {}) => {
    const options = {
        method: 'GET',
        mode: 'cors',
        ...optionsProps,
        headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...optionsProps.headers
        })
    };

    try {
        const response = await fetch(`${baseUrl}/${url}`, options);
        console.log('before', response);
        let res = await response.json();
        if (response.status === 422) {
            const errorRes = {
                status: response.status,
                ...res
            };
            return errorRes;
        } else if (response.status === 200) {
            return res;
        } else if (response.status === 401) {
            return res;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log('---AUTH ERROR---', error);
        return error;
    }
};
