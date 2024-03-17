import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: null,
	loading: false,
	error: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		signinStart: (state, action) => {
			state.loading = true;
		},
		signinSuccess: (state, action) => {
			state.userInfo = action.payload;
			state.loading = false;
			state.error = null;
		},
		signinFail: (state, action) => {
			state.error = action.payload;
			state.loading = false;
			state.userInfo = null;
		},
	},
});

export const { signinStart, signinSuccess, signinFail } = userSlice.actions;
export default userSlice.reducer;
