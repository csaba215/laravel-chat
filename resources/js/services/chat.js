// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Chat'],
  
  endpoints: (builder) => ({
    getChatByGroupId: builder.query({
      query: (id) => `api/getChat/${id}`,
      providesTags: (result, error, id) => [{ type: 'Chat', id }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetChatByGroupIdQuery } = chatApi