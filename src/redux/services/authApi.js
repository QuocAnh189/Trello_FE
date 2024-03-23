import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '~/utils/constant'

export const apiAuth = createApi({
  reducerPath: 'apiAuth',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  keepUnusedDataFor: 20,
  endpoints: builder => ({
    signUp: builder.mutation({
      query: data => ({
        url: 'api/auth/signup',
        method: 'POST',
        body: data,
      }),
    }),

    signIn: builder.mutation({
      query: data => ({
        url: 'api/auth/signin',
        method: 'POST',
        body: data,
      }),
      transformResponse(data) {
        return data.data
      },
    }),

    signOut: builder.mutation({
      query: userId => ({
        url: `api/auth/signout/${userId}`,
        method: 'POST',
      }),
    }),
  }),
})

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } = apiAuth
