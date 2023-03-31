import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import { useUserStore } from '@/store';
import { getToken } from '@/utils/auth';

export interface HttpResponse<T = unknown> {
    status: number;
    msg: string;
    code: number;
    data: T;
}

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = getToken();
        if (token) {
            if (!config.headers) {
                config.headers = {
                    'x-sid': token,
                };
            }
            config.headers.Authorization = `Bearer ${token}`;
        }

        config.baseURL = '';
        config.url = `${config.url}${config.url?.includes('?') ? '&' : '?'}cb=${Date.now()}`;

        return config;
    },
    (error) => {
        // do something
        return Promise.reject(error);
    }
);
// add response interceptors
axios.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => {
        const res = response.data;
        if (res.code !== 0) {
            Message.error({
                content: res.msg || 'Error',
                duration: 5 * 1000,
            });
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if ([50008, 50012, 50014].includes(res.code) && response.config.url !== '/api/user/info') {
                Modal.error({
                    title: 'Confirm logout',
                    content: 'You have been logged out, you can cancel to stay on this page, or log in again',
                    okText: 'Re-Login',
                    async onOk() {
                        const userStore = useUserStore();

                        await userStore.logout();
                        window.location.reload();
                    },
                });
            }
            return Promise.reject(new Error(res.msg || 'Error'));
        }
        return res;
    },
    (error) => {
        Message.error({
            content: error.msg || 'Request Error',
            duration: 5 * 1000,
        });
        return Promise.reject(error);
    }
);
