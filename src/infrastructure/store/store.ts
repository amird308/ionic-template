import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import profileReducer from "../../shared/stores/profile/slice"


export const configureAppStore = configureStore({
  reducer: {
    [STORES_KEY.PROFILE]: profileReducer,
  },
})

export type AppDispatch = typeof configureAppStore.dispatch
export type RootState = ReturnType<typeof configureAppStore.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector