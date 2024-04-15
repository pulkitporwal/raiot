import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	eventData: [],
};

const eventSlice = createSlice({
	name: "event",
	initialState,
	reducers: {
		setEventsToLocalStorage: (state, action) => {
			state.eventData = action.payload;
		},
	},
});


export const { setEventsToLocalStorage } = eventSlice.actions;
export default eventSlice.reducer;
