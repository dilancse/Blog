import express, { Application, json, urlencoded, Request, Response, NextFunction } from 'express';

export const userRoutes = express.Router();
import { getUser } from "../controllers/userController";

userRoutes.route('/').get(getUser);
