import { useAppSelector } from "@infrastructure/store/store";
import IProfileStore from "@models/store/profile";
import { profileSlice } from "@stores/profile/slice";

const useProfileStore = (): IProfileStore => {
    // selects
    const selectUserInfo = useAppSelector(state => state.profile.userInfo)

    // actions
    const { setUserData } = profileSlice.actions

    return {
        userData: selectUserInfo,
        setUserData(info) {
            setUserData(info)
        },
    }
};

export default useProfileStore;