import { IRequest } from "../interfaces/IRequest";
import { AbstractRequestMiddleware } from "../middleware/AbstractRequestMiddleware";
import { AuthorizationMiddleware } from "../middleware/AuthorizationMiddleware";
import { HttpRequestHandlerMiddleware } from "../middleware/HttpRequestHandlerMiddleware";

class ApiRequestController {
    private static instance: ApiRequestController;
    private requestMiddleware: AbstractRequestMiddleware | undefined = undefined;

    private constructor() {
        //include middlewares
        const auth = new AuthorizationMiddleware();
        const httpRequest = new HttpRequestHandlerMiddleware();
        this.requestMiddleware = auth;
        this.requestMiddleware.setNext(httpRequest);
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new ApiRequestController();
        }

        return this.instance;
    }

    public sendRequest(request:IRequest): Promise<any>{
        if(this.requestMiddleware){
            return this.requestMiddleware.handleReuest(request);
        }

        return new Promise<any>((resolve, reject)=>{
            reject('Request Middleware not avilable');
        })
    }
}

const apiRequestController = ApiRequestController.getInstance();
export default apiRequestController;
