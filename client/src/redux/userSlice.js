import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null, // Changed to null for better consistency
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state, action) => {
      state.loading = true;
      state.error = null; // Reset error when starting sign-in
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    signinFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserInformationSuccess: (state, action) => {
      console.log("PAYLOAD",action.payload)
      state.currentUser = action.payload;
      state.loading = false;
    },
  },
});

export const {
  signinStart,
  signinSuccess,
  signinFail,
  updateUserInformationSuccess,
} = userSlice.actions;
export default userSlice.reducer;
