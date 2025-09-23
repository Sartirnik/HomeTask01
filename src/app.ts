import express from 'express';
import type {Request, Response} from 'express';
import {VideoRouter} from "./video/VideoRouter";



export const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('working3').status(200);
})
//
app.use('/videos', VideoRouter)

