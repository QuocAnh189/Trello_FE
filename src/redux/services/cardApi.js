import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '~/utils/constant'

export const CardSliceKey = 'card'

export const apiCard = createApi({
  reducerPath: 'apiCard',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  keepUnusedDataFor: 20,
  tagTypes: ['Card'],
  endpoints: builder => ({
    getCards: builder.query({
      query: () => ({
        url: 'api/card',
        method: 'GET',
      }),
      providesTags: ['Card'],
    }),

    getCardSByColumnId: builder.query({
      query: id => ({
        url: `api/card/column/${id}`,
        method: 'GET',
      }),
      providesTags: ['Card'],
    }),

    getCard: builder.query({
      query: id => ({
        url: `api/card/${id}`,
        method: 'GET',
      }),
      providesTags: ['Card'],
    }),

    createCard: builder.mutation({
      query: data => ({
        url: `api/card/`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Card'],
    }),

    updateCard: builder.mutation({
      query: data => ({
        url: `api/card/${data._id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Card'],
    }),

    deleteCard: builder.mutation({
      query: data => ({
        url: `api/card/${data._id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Card'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useGetCardSByColumnIdQuery,
  useGetCardQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} = apiCard
