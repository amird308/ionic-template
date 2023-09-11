import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import profileReducer from "@stores/profile/slice"
import { api } from "@infrastructure/http-request"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

import { STORES_KEY_PROFILE } from "./constants"

export const configureAppStore = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [STORES_KEY_PROFILE]: profileReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(configureAppStore.dispatch)

export type AppDispatch = typeof configureAppStore.dispatch
export type RootState = ReturnType<typeof configureAppStore.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector