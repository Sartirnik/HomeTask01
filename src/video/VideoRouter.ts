import {Router} from "express";
import {createVideoHandler, getVideoByIdHandler} from "./handlers/videoHandlers";


export const VideoRouter = Router();

VideoRouter.post('/', createVideoHandler);
VideoRouter.get('/:id', getVideoByIdHandler);
