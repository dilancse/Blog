import express, { Application, json, urlencoded, Request, Response, NextFunction } from 'express';
import { userRoutes } from './routes/userRoutes';
import cors from 'cors'
const port = 5000;

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

/* app.get('/', (req: Request, res: Response, next:NextFunction) => {
    res.send('Hello');
}); */

app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
