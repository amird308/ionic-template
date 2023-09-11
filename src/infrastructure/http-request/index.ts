import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { QUERY_TAG_PROFILE } from './constants';

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
  tagTypes: [QUERY_TAG_PROFILE],
  endpoints: () => ({}),
})