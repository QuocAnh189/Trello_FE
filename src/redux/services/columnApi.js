import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '~/utils/constant'

export const ColumnSliceKey = 'column'

export const apiColumn = createApi({
  reducerPath: 'apiColumn',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Column'],
  endpoints: builder => ({
    getColumns: builder.query({
      query: () => ({
        url: 'api/column',
        method: 'GET',
      }),
      providesTags: ['Column'],
    }),

    getColumnsByBoardId: builder.query({
      query: id => ({
        url: `api/column/board/${id}`,
        method: 'GET',
      }),
      providesTags: ['Column'],
    }),

    getColumn: builder.query({
      query: id => ({
        url: `api/column/${id}`,
        method: 'GET',
      }),
      providesTags: ['Column'],
    }),

    createColumn: builder.mutation({
      query: data => ({
        url: `api/column`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Column'],
    }),

    updateColumn: builder.mutation({
      query: data => ({
        url: `api/column/${data._id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Column'],
    }),

    deleteColumn: builder.mutation({
      query: id => ({
        url: `api/column/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Column'],
    }),
  }),
})

export const {
  useGetColumnsQuery,
  useGetColumnsByBoardIdQuery,
  useGetColumnQuery,
  useCreateColumnMutation,
  useUpdateColumnMutation,
  useDeleteColumnMutation,
} = apiColumn
