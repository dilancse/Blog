import { IRequest } from "./IRequest";

export interface IRequestHandler{
    setNext(handler: IRequestHandler): IRequestHandler;
    handleReuest(request: IRequest): Promise<any>;
}