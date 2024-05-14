import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		email: "Ch.duong@csdvietnam.com",
		avatar: "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
	},
	reducers: {
		update: (state, action) => {
			state.email = action.payload.email;
			state.avatar = action.payload.avatar;
		}
	}
})

export const { update } = userSlice.actions;
export default userSlice.reducer;