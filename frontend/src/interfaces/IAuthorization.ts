import { User } from "../models/User";

export interface IAuthorization{
    isAuthorized(user: User) : boolean
}