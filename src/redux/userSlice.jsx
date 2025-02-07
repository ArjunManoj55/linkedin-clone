import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../services/authService";
import axios from "axios";

// ✅ Correct API URL
const API_URL = "http://localhost:5000/api/user";

// ✅ Register User
export const register = createAsyncThunk("user/register", async (userData, { rejectWithValue }) => {
  try {
    return await registerUser(userData);
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

// ✅ Login User
export const login = createAsyncThunk("user/login", async (userData, { rejectWithValue }) => {
  try {
    return await loginUser(userData);
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

// ✅ Update User Profile
export const updateProfile = createAsyncThunk("user/updateProfile", async (formData, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${API_URL}/update`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // ✅ Ensure backend returns the updated user object
  } catch (error) {
    return rejectWithValue(error.response?.data || "Profile update failed");
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
      .addCase(register.fulfilled, (state, action) => {
        alert(action.payload.message);
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      // ✅ Handle Profile Update (Position, Location, Profile Picture)
      .addCase(updateProfile.fulfilled, (state, action) => {
        if (state.user) {
          state.user = {
            ...state.user, // ✅ Preserve existing user data
            ...action.payload, // ✅ Merge updated fields from backend
          };
        }
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
