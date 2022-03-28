import axios, { Method } from 'axios';
import { IRequest } from '../interfaces/IRequest';
import { AbstractRequestMiddleware } from './AbstractRequestMiddleware';

export class HttpRequestHandlerMiddleware extends AbstractRequestMiddleware {
    handleReuest(request: IRequest): Promise<any> {
        switch (request.requestType) {
            case 'GET':
                return this.handelHttpRequets(request);
            case 'PUT':
                // send axios/fetch request
                // assume data avilable
                return new Promise<any>((resolve, reject) => {
                    const data = { test: 'PUT complete' };
                    resolve(data);
                });
            default:
                return super.handleReuest(request);
        }
    }

    private handelHttpRequets(request: IRequest): Promise<any> {
        const method: Method = request.requestType as Method;
        return axios({ method: method, url: request.requestApi, headers: request.headers });
    }
}
