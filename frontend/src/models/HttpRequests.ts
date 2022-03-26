import { IAuthorization } from '../interfaces/IAuthorization';
import { IRequest } from '../interfaces/IRequest';
import { User } from './User';

export class GetRequest implements IRequest, IAuthorization {
    readonly headers: any;
    readonly requestApi: string;

    constructor(request: IRequest) {
        this.headers = request.headers;
        this.requestApi = request.requestApi;
    }
  
    isAuthorized(user: User): boolean {
        throw new Error('Method not implemented.');
    }

    
}

export class PutRequest implements IRequest, IAuthorization{
    readonly headers: any;
    readonly requestApi: string;
    readonly payLoad?: any;

    constructor(request: IRequest) {
        this.headers = request.headers;
        this.requestApi = request.requestApi;
        this.payLoad = request.payLoad;
    }

    isAuthorized(user: User): boolean {
        throw new Error('Method not implemented.');
    }
    
}
