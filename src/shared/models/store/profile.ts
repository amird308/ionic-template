import IUser from "@infrastructure/entities/user";

export default interface IProfileStore {
    userData: IUser,
    setUserData: (info: IUser) => void
}