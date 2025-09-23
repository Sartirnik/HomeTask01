import {Router} from "express";
import {
    createVideoHandler,
    getVideos,
    getVideoByIdHandler,
    updateVideosHandler
} from "./handlers/videoHandlers";


export const VideoRouter = Router();

VideoRouter.get('/', getVideos);                // список видео
VideoRouter.post('/create', createVideoHandler);
VideoRouter.get('/:id', getVideoByIdHandler);   // видео по ID
VideoRouter.put('/:id', updateVideosHandler);
VideoRouter.delete('/:id', deleteVideosByIdHandler);
// VideoRouter.put('/update', updateVideosHandler);    // обновить видео
// VideoRouter.post('/', createVideoHandler);      // создать видео

// VideoRouter.put('/:id', updateVideoHandler);
// VideoRouter.get('/update',updateVideoHandler);
//s