import axiosClient from './axiosClient';

const userApi = {
	getAll: (params) => {
		const url = '/user';
		return axiosClient.get(url, { params });
	},
	get: (id) => {
		const url = `/user/${id}`;
		return axiosClient.get(url);
	},
	registerUser: (user) => {
		const url = 'user/register';
		return axiosClient.post(url, user);
	},
	loginUser: (user) => {
		const url = 'user/login';
		return axiosClient.post(url, user);
	}
};

export default userApi;