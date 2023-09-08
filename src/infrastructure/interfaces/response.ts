
export type responseStatus = "error" | "success"

export default interface IResponse<D> {
    data?: D;
    message?: string;
    status: responseStatus;
}