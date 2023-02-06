let BASE_URL = '';
if (import.meta.env.PROD) {
	BASE_URL = 'https://tbed.willlee.cn/api/v1';
} else {
	BASE_URL = 'https://tbed.willlee.cn/api/v1';
}

export const TIME_OUT = 10000;
export { BASE_URL };
