import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUsers as fetchUsers,
  createUser as createNewUser,
} from "../../services/api";

export const getUsers = createAsyncThunk(
  "api/getUsers",
  async (page, thunkAPI) => {
    try {
      const response = await fetchUsers(page);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createUser = createAsyncThunk(
  "api/createUser",
  async (contact, thunkAPI) => {
    try {
      const response = await createNewUser(contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    contacts: [],
    isLoading: false,
    page: 1,
    totalPages: 1,
  },
  reducers: {
    setContacts(state, action) {
      state.contacts.push(action.payload);
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.contacts = action.payload.data;
        state.totalPages = action.payload.total_pages;
        state.isLoading = false;
      })
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      });
  },
});

export const { setContacts, setIsLoading, setPage, setTotalPages } = apiSlice.actions;

export default apiSlice.reducer;
