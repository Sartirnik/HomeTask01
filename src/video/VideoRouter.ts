import {Router} from "express";
import {
    createVideoHandler,
    getVideos,
    getVideoByIdHandler,
    updateVideosHandler, deleteVideoByIdHandler
} from "./handlers/videoHandlers";
import {VIDEO_DB} from "../../dist/videoDb";
import {videoRepos} from "./infrastructure/videoRepos";


export const VideoRouter = Router();

VideoRouter.delete('/testing/all-data', (req, res) => {
    videoRepos.clearAll();
    res.sendStatus(204);
});

VideoRouter.get('/', getVideos);                // список видео
VideoRouter.post('/create', createVideoHandler);
VideoRouter.get('/:id', getVideoByIdHandler);   // видео по ID
VideoRouter.put('/:id', updateVideosHandler);
VideoRouter.delete('/:id', deleteVideoByIdHandler);
// VideoRouter.put('/update', updateVideosHandler);    // обновить видео
// VideoRouter.post('/', createVideoHandler);      // создать видео

// VideoRouter.put('/:id', updateVideoHandler);
// VideoRouter.get('/update',updateVideoHandler);
//s

//http://localhost:3001/products/create
//http://localhost:3001/products/8