import {Router} from "express";
import {createVideoHandler, getVideos, getVideoByIdHandler} from "./handlers/videoHandlers";


export const VideoRouter = Router();

VideoRouter.post('/', createVideoHandler);
VideoRouter.get('/create', createVideoHandler);
VideoRouter.get('/:id', getVideoByIdHandler);
VideoRouter.get('/', getVideos);