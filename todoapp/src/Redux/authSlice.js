// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Create a slice for token management
const authSlice = createSlice({
    name: 'auth',
    initialState: { token: '' },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = '';
        },
    },
});

// Export actions
export const { setToken, clearToken } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
