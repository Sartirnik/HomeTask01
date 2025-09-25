import {Router} from "express";
import {
    createVideoHandler,
    getVideos,
    getVideoByIdHandler,
    updateVideosHandler,
    deleteVideoByIdHandler
} from "./handlers/videoHandlers";
import {videoRepos} from "./infrastructure/videoRepos";

export const VideoRouter = Router();

// Очистка базы для тестов
VideoRouter.delete('/testing/all-data', (req, res) => {
    videoRepos.clearAll();
    res.sendStatus(204);
});

// CRUD для видео
VideoRouter.get('/', getVideos);
VideoRouter.post('/', createVideoHandler);
VideoRouter.get('/:id', getVideoByIdHandler);
VideoRouter.put('/:id', updateVideosHandler);
VideoRouter.delete('/:id', deleteVideoByIdHandler);
