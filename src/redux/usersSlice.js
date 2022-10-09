import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";

const initialState = {
  user: { id: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    //createUser
    builder.addMatcher(usersApi.endpoints.register.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      usersApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isRegistered = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      usersApi.endpoints.register.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    //userLogin
    builder.addMatcher(usersApi.endpoints.login.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      usersApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      usersApi.endpoints.login.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    // userLogOut
    builder.addMatcher(usersApi.endpoints.logOut.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(usersApi.endpoints.logOut.matchFulfilled, () => {
      return { ...initialState };
    });
    builder.addMatcher(
      usersApi.endpoints.logOut.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    //updateUser
    builder.addMatcher(usersApi.endpoints.update.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      usersApi.endpoints.update.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      usersApi.endpoints.update.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
  },
});

export default usersSlice.reducer;
