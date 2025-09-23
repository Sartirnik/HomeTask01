import {Request, Response} from 'express'

import {videoRepos} from "../infrastructure/videoRepos";
import {HttpStatus} from "../../types/HttpStatus";
import {app} from "../../app";




export const getVideoByIdHandler = (req: Request, res: Response) => {
    const video = videoRepos.getVideoById(+req.params.id); // нужен метод поиска по id
    if (video) {
        res.status(200).json(video);
    } else {
        res.sendStatus(404);
    }
}

export const createVideoHandler = (req: Request, res: Response) => {

    const newVideo = videoRepos.createVideo(req.params.title, req.params.author, req.params.availableResolutions);
    res.status(201).json(newVideo); // 201 Created

}

export const getVideos = (req: Request, res: Response) => {
    const videos = videoRepos.getVideo();
    console.log(videos);
    res.status(200).json(videos);
}

export const updateVideosHandler = (req: Request, res: Response) => {
    //1 смотри пример из урока ( ветка validation )
        // метод POST ( есть функция для валидации скопируй к себе и переделай под videos )
    //2 смотри POST метод и по примеру тут так же делаем

    const result = videoRepos.updateVideos(+req.params.id, req.body);
    if (result.errorsMessages && result.errorsMessages.length > 0 || result === null) {
        return res.status(404).json(result); // если видео не найдено
    }
    return res.status(200).json(result); // успешное обновление
}

export const deleteVideoByIdHandler = (req: Request, res: Response) => {
    console.log("DELETE handler triggered");
    const id = +req.params.id;

    // Проверка: id должен быть числом
    if (isNaN(id)) {
        return res.status(HttpStatus.BadRequest).json({
            errorsMessages: [{ message: "Invalid ID format", field: "id" }]
        });
    }

    const isDeleted = videoRepos.deleteVideo(id);

    // Если видео не найдено
    if (!isDeleted) {
        return res.status(HttpStatus.NotFound).json({
            errorsMessages: [{ message: "Video not found", field: "id" }]
        });
    }

    // Успешное удаление
    return res.sendStatus(HttpStatus.NoContent); // 204 — без тела
}







