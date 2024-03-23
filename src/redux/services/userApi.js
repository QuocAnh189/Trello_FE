import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '~/utils/constant'

export const UserSliceKey = 'user'

export const apiUser = createApi({
  reducerPath: 'apiUser',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['User'],
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ({
        url: 'api/user',
        method: 'GET',
      }),
      transformResponse(data) {
        return data.data
      },
    }),

    getUser: builder.query({
      query: id => ({
        url: `api/user/${id}`,
        method: 'GET',
      }),
      transformResponse(data) {
        return data.data
      },
    }),

    createUser: builder.mutation({
      query: data => ({
        url: `api/user/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
      transformResponse(data) {
        return data.data
      },
    }),

    updateUser: builder.mutation({
      query: data => ({
        url: `api/user/${data._id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['User'],
      transformResponse(data) {
        return data.data
      },
    }),

    deleteUser: builder.mutation({
      query: data => ({
        url: `api/user/${data._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
      transformResponse(data) {
        return data.data
      },
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = apiUser
