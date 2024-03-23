import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '~/utils/constant'

export const CommentSliceKey = 'comment'

export const apiComment = createApi({
  reducerPath: 'apiComment',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Comment'],
  endpoints: builder => ({
    getComments: builder.query({
      query: () => ({
        url: 'api/comment',
        method: 'GET',
      }),
      transformResponse(data) {
        return data.data
      },
    }),

    getComment: builder.query({
      query: id => ({
        url: `api/comment/${id}`,
        method: 'GET',
      }),
      transformResponse(data) {
        return data.data
      },
    }),

    createComment: builder.mutation({
      query: data => ({
        url: `api/comment/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Comment'],
      transformResponse(data) {
        return data.data
      },
    }),

    updateComment: builder.mutation({
      query: data => ({
        url: `api/comment/${data._id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Comment'],
      transformResponse(data) {
        return data.data
      },
    }),

    deleteComment: builder.mutation({
      query: data => ({
        url: `api/comment/${data._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comment'],
      transformResponse(data) {
        return data.data
      },
    }),
  }),
})

export const {
  useGetCommentsQuery,
  useGetCommentQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = apiComment
