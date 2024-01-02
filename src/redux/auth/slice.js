import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {
    username: null,
    email: null,

  },
  token: '',
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//         state.isLoading = false;
//       })
//       .addCase(register.rejected, (state) => {
//         state.isLoading = false;
//       })
//   },
});

export const authReducer = authSlice.reducer;