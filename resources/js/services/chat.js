// Need to use the React-specific entry point to import createApi
import { createApi} from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from './axiosBaseQuery'

// Define a service using a base URL and expected endpoints
export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: axiosBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Chat'],
  
  endpoints: (builder) => ({
    getChatByGroupId: builder.query({
      query: (id) => ({ url: `api/chat/${id}`, method: 'get' }),
      providesTags: (result, error, id) => [{ type: 'Chat', id }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetChatByGroupIdQuery } = chatApi