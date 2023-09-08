import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers) => {
    const token = "";
    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })


export const api = createApi({
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Time', 'Posts', 'Counter'],
  endpoints: () => ({}),
})

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test',
  }),
})
