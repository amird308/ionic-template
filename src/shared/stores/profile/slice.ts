import IUser from "@infrastructure/entities/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { profileSliceState } from "./types"
import { STORES_KEY_PROFILE } from "@infrastructure/store/constants"

const initialState: profileSliceState = {
  userInfo: {
    id: "",
    name: "",
    profileImageUrl: ""
  },
}

export const profileSlice = createSlice({
  name: STORES_KEY_PROFILE,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload
    },
  },
})

export default profileSlice.reducer