import { IRequest } from '../interfaces/IRequest';
import { IRequestHandler } from '../interfaces/IRequestHandler';

export abstract class AbstractRequestMiddleware implements IRequestHandler {
    private next: IRequestHandler | undefined = undefined;

    setNext(handler: IRequestHandler): IRequestHandler {
        this.next = handler;
        return this.next;
    }
    
    handleReuest(request: IRequest): Promise<any> {
        if (this.next) {
            return this.next.handleReuest(request);
        } else {
            return new Promise<any>((resolve, reject) => {
                resolve(undefined);
            });
        }
    }
}
