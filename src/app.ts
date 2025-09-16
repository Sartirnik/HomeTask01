import express from 'express';
import type {Request, Response} from 'express';
import {VideoRouter} from "./video/VideoRouter";

export const app = express();

app.use(express.json());

app.use('/', (req: Request, res: Response) => {
    res.send('Working').status(200);
})

app.use('/videos', VideoRouter)