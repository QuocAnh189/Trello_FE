import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '~/utils/constant'

export const BoardSliceKey = 'board'

export const apiBoard = createApi({
  reducerPath: 'apiBoard',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Board'],
  endpoints: builder => ({
    getBoards: builder.query({
      query: () => ({
        url: 'api/board',
        method: 'GET',
      }),
      providesTags: ['Board'],
    }),

    getBoard: builder.query({
      query: id => ({
        url: `api/board/${id}`,
        method: 'GET',
      }),
      providesTags: ['Board'],
    }),

    createBoard: builder.mutation({
      query: data => ({
        url: `api/board/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),

    updateBoard: builder.mutation({
      query: data => ({
        url: `api/board/${data._id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),

    deleteBoard: builder.mutation({
      query: data => ({
        url: `api/board/${data._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Board'],
    }),
  }),
})

export const {
  useGetBoardsQuery,
  useGetBoardQuery,
  useCreateBoardMutation,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
} = apiBoard
