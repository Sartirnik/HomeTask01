import {Request, Response} from 'express';
import {videoRepos} from "../infrastructure/videoRepos";
import {HttpStatus} from "../../types/HttpStatus";

export const getVideoByIdHandler = (req: Request, res: Response) => {
    const video = videoRepos.getVideoById(+req.params.id);
    if (video) {
        res.status(HttpStatus.OK).json(video);
    } else {
        res.sendStatus(HttpStatus.NOT_FOUND);
    }
};

export const createVideoHandler = (req: Request, res: Response) => {
    const { title, author, availableResolutions } = req.body;
    const result = videoRepos.createVideo(title, author, availableResolutions);

    if (result && 'errorsMessages' in result) {
        return res.status(HttpStatus.BAD_REQUEST).json(result);
    }

    res.status(HttpStatus.CREATED).json(result);
};

export const getVideos = (req: Request, res: Response) => {
    const videos = videoRepos.getVideo();
    res.status(HttpStatus.OK).json(videos);
};

export const updateVideosHandler = (req: Request, res: Response) => {
    const result = videoRepos.updateVideos(+req.params.id, req.body);

    if (result === null) {
        return res.sendStatus(HttpStatus.NOT_FOUND);
    }

    if (result && 'errorsMessages' in result) {
        return res.status(HttpStatus.BAD_REQUEST).json(result);
    }

    // успешное обновление
    return res.sendStatus(HttpStatus.NO_CONTENT);
};

export const deleteVideoByIdHandler = (req: Request, res: Response) => {
    const id = +req.params.id;
    const isDeleted = videoRepos.deleteVideo(id);

    if (!isDeleted) {
        return res.sendStatus(HttpStatus.NOT_FOUND);
    }

    return res.sendStatus(HttpStatus.NO_CONTENT);
};
