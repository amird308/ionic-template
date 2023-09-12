import { api } from "@infrastructure/http-request"
import IUpdateProfileRequest from "@shared/models/requests/update-profile"
import IGetProfileResponse from "@shared/models/responses/get-profile"
import IUpdateProfileResponse from "@shared/models/responses/update-profile"

export const profileServices = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IGetProfileResponse, void>({
      query: () => 'profile',
      providesTags: ["Profile"]
    }),
    updateProfile: build.mutation<IUpdateProfileResponse, IUpdateProfileRequest>({
      query(userInfo) {
        return {
          url: `profile`,
          method: 'PUT',
          body: {...userInfo},
        }
      },
      invalidatesTags: ['Profile'],
    }),
  }),
})

export const {  
  useGetProfileQuery,
  useUpdateProfileMutation
} = profileServices
