import { IAuthorization } from '../interfaces/IAuthorization';
import { IRequest } from '../interfaces/IRequest';
import { User } from './User';

export class GetRequest implements IRequest, IAuthorization {
    readonly headers: any;
    readonly requestApi: string;
    readonly requestType: string;

    constructor(request: { headers: any; requestApi: string }) {
        this.headers = request.headers;
        this.requestApi = request.requestApi;
        this.requestType = 'GET';
    }

    isAuthorized(user: User): boolean {
        throw new Error('Method not implemented.');
    }
}

export class PutRequest implements IRequest, IAuthorization {
    readonly headers: any;
    readonly requestApi: string;
    readonly payLoad?: any;
    readonly requestType: string;

    constructor(request: { headers: any; requestApi: string; payLoad: any }) {
        this.headers = request.headers;
        this.requestApi = request.requestApi;
        this.payLoad = request.payLoad;
        this.requestType = 'PUT';
    }

    isAuthorized(user: User): boolean {
        throw new Error('Method not implemented.');
    }
}
