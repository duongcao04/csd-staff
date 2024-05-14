import { loginFailed, loginStart, loginSuccess } from '@/redux/authSlice';
import axiosClient from './axiosClient';

const authApi = {
	registerUser: (user) => {
		const url = 'user/register';
		return axiosClient.post(url, user);
	},
	loginUser: async (user, dispatch, navigate ) => {
		const url = 'user/login';
		dispatch(loginStart());
		try {
			const res = await axiosClient.post(url, user);
			dispatch(loginSuccess(res.data.elements));
			navigate('/');
		} catch (error) {
			dispatch(loginFailed())
		}
	}
};

export default authApi;