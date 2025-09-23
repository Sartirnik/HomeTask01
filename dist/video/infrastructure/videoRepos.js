"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRepos = void 0;
var resolutions_1 = require("../../types/resolutions");
var VIDEO_DB = {
    videos: []
};
var UPD_VID_DB = {
    errorsMessage: []
};
var ResolutionValidate = function (values) {
    return Object.values(resolutions_1.Resolutions).includes(values);
};
exports.videoRepos = {
    createVideo: function (title, author, availableResolutions) {
        var errorsMessages = [];
        if (typeof title !== 'string' || title.trim().length < 3 || title.trim().length > 100) {
            errorsMessages.push({ message: "Invalid title", field: "title" });
        }
        var AuthorValidate = function (author) {
            if (typeof author !== 'string')
                return false;
            var trimmed = author.trim();
            return trimmed.length >= 3 && trimmed.length <= 50;
        };
        if (!AuthorValidate(author)) {
            errorsMessages.push({ message: "Invalid author", field: "author" });
        }
        if (!ResolutionValidate(availableResolutions)) {
            errorsMessages.push({ message: "Invalid resolution", field: "availableResolutions" });
        }
        if (errorsMessages.length > 0) {
            return { errorsMessages: errorsMessages };
        }
        var newVideo = {
            "title": title,
            "author": author,
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": "2025-09-19T21:28:52.571Z",
            "publicationDate": "2025-09-19T21:28:52.571Z",
            "availableResolutions": availableResolutions
        };
        VIDEO_DB.videos.push(newVideo);
        return { data: newVideo };
    },
    // createVideo :  () =>{
    //     const newVideo =   {
    //         "id": 0,
    //         "title": "string",
    //         "author": "string",
    //         "canBeDownloaded": true,
    //         "minAgeRestriction": null,
    //         "createdAt": "2025-09-19T21:28:52.571Z",
    //         "publicationDate": "2025-09-19T21:28:52.571Z",
    //         "availableResolutions": [
    //             "P144"
    //         ]
    //     };
    //     // VIDEO_DB.videos.push(newVideo);
    //
    //
    //
    // },
    getVideo: function () {
        return VIDEO_DB.videos;
    },
    getVideoById: function (id) {
        return VIDEO_DB.videos.find(function (v) { return v.id === id; }) || null;
    },
    updateVideos: function (id, data) {
        var video = VIDEO_DB.videos.find(function (v) { return v.id === id; });
        if (!video) {
            //ЕСЛИ ВИДЕО НЕТ возвращаем null => и в хендлере if(video === null) res.status(404).send(...)
            return null;
        }
        // Обновляем только допустимые поля
        if (data.title)
            video.title = data.title;
        if (data.author)
            video.author = data.author;
        return __assign(__assign({}, video), { errorsMessages: [] });
    },
    deleteVideo: function (id) {
        var index = VIDEO_DB.videos.findIndex(function (v) { return v.id === id; });
        if (index === -1)
            return false;
        VIDEO_DB.videos.splice(index, 0);
        return true;
    },
    getUpdateVideo: function () {
    }
    // getVideoMessage : (videoId: number) => {
    //     return videoRepos.UPD_DB();
    // }
    // deleteVideo : ()=>{
    //     VIDEO_DB.video.delete();
    // },
};
//# sourceMappingURL=videoRepos.js.map