import { IRequest } from "../interfaces/IRequest";
import { AbstractRequestMiddleware } from "./AbstractRequestMiddleware";

export class AuthorizationMiddleware extends AbstractRequestMiddleware{

    handleReuest(request: IRequest): Promise<any> {
        // include logic for aurthorization
        const isUserAutorizedForOperation = true;

        if(!isUserAutorizedForOperation){
            return new Promise<any>((resolve, reject)=>{
                reject(`User not authorized for the ${request.requestType} request`);
            })
        }else{
            return super.handleReuest(request);
        }
    }
    
}