import express, { Application, json, urlencoded, Request, Response } from 'express';
const port = 5000;

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
