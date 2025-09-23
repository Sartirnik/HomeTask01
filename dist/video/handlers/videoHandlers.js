"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideoByIdHandler = exports.updateVideosHandler = exports.getVideos = exports.createVideoHandler = exports.getVideoByIdHandler = void 0;
var videoRepos_1 = require("../infrastructure/videoRepos");
var HttpStatus_1 = require("../../types/HttpStatus");
var getVideoByIdHandler = function (req, res) {
    var video = videoRepos_1.videoRepos.getVideoById(+req.params.id); // нужен метод поиска по id
    if (video) {
        res.status(200).json(video);
    }
    else {
        res.sendStatus(404);
    }
};
exports.getVideoByIdHandler = getVideoByIdHandler;
var createVideoHandler = function (req, res) {
    var newVideo = videoRepos_1.videoRepos.createVideo(req.params.title, req.params.author, req.params.availableResolutions);
    res.status(201).json(newVideo); // 201 Created
};
exports.createVideoHandler = createVideoHandler;
var getVideos = function (req, res) {
    var videos = videoRepos_1.videoRepos.getVideo();
    console.log(videos);
    res.status(200).json(videos);
};
exports.getVideos = getVideos;
var updateVideosHandler = function (req, res) {
    //1 смотри пример из урока ( ветка validation )
    // метод POST ( есть функция для валидации скопируй к себе и переделай под videos )
    //2 смотри POST метод и по примеру тут так же делаем
    var result = videoRepos_1.videoRepos.updateVideos(+req.params.id, req.body);
    if (result.errorsMessages && result.errorsMessages.length > 0 || result === null) {
        return res.status(404).json(result); // если видео не найдено
    }
    return res.status(200).json(result); // успешное обновление
};
exports.updateVideosHandler = updateVideosHandler;
var deleteVideoByIdHandler = function (req, res) {
    var id = +req.params.id;
    // Проверка: id должен быть числом
    if (isNaN(id)) {
        return res.status(HttpStatus_1.HttpStatus.BadRequest).json({
            errorsMessages: [{ message: "Invalid ID format", field: "id" }]
        });
    }
    var isDeleted = videoRepos_1.videoRepos.deleteVideo(id);
    // Если видео не найдено
    if (!isDeleted) {
        return res.status(HttpStatus_1.HttpStatus.NotFound).json({
            errorsMessages: [{ message: "Video not found", field: "id" }]
        });
    }
    // Успешное удаление
    return res.sendStatus(HttpStatus_1.HttpStatus.NoContent); // 204 — без тела
};
exports.deleteVideoByIdHandler = deleteVideoByIdHandler;
//# sourceMappingURL=videoHandlers.js.map