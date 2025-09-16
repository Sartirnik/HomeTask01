import type {Request, Response} from 'express'

import {videoRepos} from "../infrastructure/videoRepos";

export const createVideoHandler = (req: Request, res: Response) => {

    // TODO: добавить обработку видео
    videoRepos.createVideo();
    res.send(200);

}

export const getVideoByIdHandler = (req: Request, res: Response) => {
    // TODO: find video

}

export const getVideos = (req: Request, res: Response) => {
    const videos = videoRepos.getVideos();
    console.log(videos);
    res.status(200).json(videos);
}