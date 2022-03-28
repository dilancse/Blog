import { IRequest } from "../interfaces/IRequest";

class ApiRequestController {
    private static instance: ApiRequestController;

    private constructor() {}

    public static getInstance() {
        if (!this.instance) {
            this.instance = new ApiRequestController();
        }

        return this.instance;
    }

    public sendRequest(request:IRequest){
        
    }
}

const apiRequestController = ApiRequestController.getInstance();
export default apiRequestController;
