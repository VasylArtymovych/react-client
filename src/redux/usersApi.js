import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://node-server-task.herokuapp.com",

    prepareHeaders: (headers, { getState }) => {
      const token = getState().users.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/users",
        method: "POST",
        body: credentials,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    logOut: builder.mutation({
      query: () => ({
        url: "/logout",
      }),
    }),

    update: builder.mutation({
      query: ({ userId, body }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogOutMutation,
  useUpdateMutation,
} = usersApi;
