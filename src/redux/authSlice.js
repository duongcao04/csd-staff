import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		login: {
			currentUser: null,
			isFetching: false,
			isError: false,
		}
	},
	reducers: {
		loginStart: (state) => {
			state.login.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.login.isFetching = false;
			state.login.currentUser = action.payload;
			state.login.isError = false;
		},
		loginFailed: (state) => {
			state.login.isFetching = false;
			state.login.isError = true;
		}
	}
})

export const { loginStart, loginSuccess, loginFailed } = authSlice.actions;
export default authSlice.reducer;