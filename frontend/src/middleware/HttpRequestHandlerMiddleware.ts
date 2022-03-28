import { IRequest } from '../interfaces/IRequest';
import { AbstractRequestMiddleware } from './AbstractRequestMiddleware';

export class HttpRequestHandlerMiddleware extends AbstractRequestMiddleware {
    handleReuest(request: IRequest): Promise<any> {
        switch (request.requestType) {
            case 'GET':
                // send axios/fetch request
                // assume data avilable
                return new Promise<any>((resolve, reject) => {
                    const data = { test: 'GET complete' };
                    resolve(data);
                });
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
}
