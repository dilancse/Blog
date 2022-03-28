import {  Request, Response, NextFunction, response } from "express";

export async function getUser(req: Request, res: Response, next:NextFunction) {
    res.status(200).json({user:'Test user name', permission:'user permission'})
}

