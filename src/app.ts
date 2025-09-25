import express from 'express';
import type {Request, Response} from 'express';
import {VideoRouter} from "./video/VideoRouter";
import {videoRepos} from "./video/infrastructure/videoRepos";

export const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('working3');
});

// Тестовый роут для очистки базы
app.delete('/testing/all-data', (req: Request, res: Response) => {
    videoRepos.clearAll();
    res.sendStatus(204);
});

// Основные роуты для /videos
app.use('/videos', VideoRouter);

