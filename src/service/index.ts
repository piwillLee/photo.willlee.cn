import { BASE_URL, TIME_OUT } from './config';
import HYRequest from './request';
const hyRequest = new HYRequest({
	baseURL: BASE_URL,
	timeout: TIME_OUT,
	interceptors: {
		requestSuccessFn: (config: any) => {
			const token = '1|JLJrErNHqGsyykxuVnURcBnaIa8HR29gwej47goU';

			// 类型缩小 需要token且有token时执行
			if (config.headers && token) {
				config.headers.Authorization = 'Bearer ' + token;
			}

			return config;
		},
	},
});

export default hyRequest;
