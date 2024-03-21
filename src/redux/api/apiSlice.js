import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUsers as fetchUsers,
  createUser as createNewUser,
  deleteUser as deleteUserId,
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

export const deleteUser = createAsyncThunk(
  "api/deleteUser",
  async (id, thunkAPI) => {
    try {
      const response = await deleteUserId(id);
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
    isFavoriteContactIds: [],
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
    setIsFavoriteContact(state, action) {
      const contactId = action.payload;
      const index = state.isFavoriteContactIds.indexOf(contactId);
      if (index === -1) {
        state.isFavoriteContactIds.push(contactId);
      } else {
        state.isFavoriteContactIds.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
    // getUsers 
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.contacts = action.payload.data.map(contact => ({
          ...contact,
          isFavorite: false
        }));
        state.contacts = action.payload.data;
        state.totalPages = action.payload.total_pages;
        state.isLoading = false;
      })
    // createUsers 
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
    // deleteUser
      .addCase(deleteUser.fulfilled, (state, action) => {
        const deletedContactId = action.meta.arg;
        state.contacts = state.contacts.filter(contact => contact.id !== deletedContactId);
      });
  },
});

export const { setContacts, setIsLoading, setPage, setTotalPages, setIsFavoriteContact } = apiSlice.actions;

export default apiSlice.reducer;
