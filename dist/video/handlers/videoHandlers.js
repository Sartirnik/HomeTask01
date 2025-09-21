"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideosHandler = exports.getVideos = exports.createVideoHandler = exports.getVideoByIdHandler = void 0;
var videoRepos_1 = require("../infrastructure/videoRepos");
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
    var result = videoRepos_1.videoRepos.updateVideo(+req.params.id, req.body);
    if (result.errorsMessages && result.errorsMessages.length > 0) {
        return res.status(404).json(result); // если видео не найдено
    }
    return res.status(200).json(result); // успешное обновление
    //
};
exports.updateVideosHandler = updateVideosHandler;
//# sourceMappingURL=videoHandlers.js.map