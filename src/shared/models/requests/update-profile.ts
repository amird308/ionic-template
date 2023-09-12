import IUser from "@infrastructure/entities/user";

export default interface IUpdateProfileRequest extends Pick<IUser, "name">{
    
}
