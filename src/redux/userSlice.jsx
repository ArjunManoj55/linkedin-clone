import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../services/authService";

// Async Login Action
export const login = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
  try {
    return await loginUser(userData);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Async Register Action
export const register = createAsyncThunk("user/register", async (userData, { rejectWithValue }) => {
  try {
    return await registerUser(userData);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
