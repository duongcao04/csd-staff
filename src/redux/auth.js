import { createSlice } from "@reduxjs/toolkit";

const currentUserInit = JSON.parse(localStorage.getItem('user'))

export const auth = createSlice({
	name: "auth",
	initialState: {
		login: {
			currentUser: currentUserInit ?? null,
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

export const { loginStart, loginSuccess, loginFailed } = auth.actions;
export default auth.reducer;