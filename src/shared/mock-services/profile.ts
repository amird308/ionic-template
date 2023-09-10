import { rest } from 'msw';
import API from "@constants/api";
import IProfile from "@entities/profile";
import IResponse from "@infrastructure/interfaces/response";
import IGetProfileResponse from "@models/responses/get-profile";
import IUpdateProfileResponse from '@shared/models/responses/update-profile';
import IUpdateProfileRequest from '@shared/models/requests/update-profile';

const profile: IProfile = {
    userInfo: {
        id: "12",
        name: "amir",
        profileImageUrl: "https://"
    }
};

const profileHandlers = [
    rest.get<null, any, IResponse<IGetProfileResponse>>(API.PROFILE.GET_PROFILE, (req, res, ctx) => {
        const isAuthenticated = localStorage.getItem('token');
        if (!isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({
                    message: 'Not authorized',
                    status: "error",
                }),
            );
        }
        return res(
            ctx.status(200),
            ctx.json({
                status: "success",
                data: profile,
            }),
        );
    }),
    rest.put<null, IUpdateProfileRequest, IResponse<IUpdateProfileResponse>>(API.PROFILE.UPDATE_PROFILE, (req, res, ctx) => {
        const isAuthenticated = localStorage.getItem('token');
        if (!isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({
                    message: 'Not authorized',
                    status: "error",
                }),
            );
        }
        return res(
            ctx.status(200),
            ctx.json({
                status: "success",
                data: profile,
            }),
        );
    }),
];

export default profileHandlers;
