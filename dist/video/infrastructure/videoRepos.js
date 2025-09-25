"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRepos = exports.VIDEO_DB = void 0;
var resolutions_1 = require("../../types/resolutions");
exports.VIDEO_DB = {
    videos: []
};
var nextId = 1;
var ResolutionValidate = function (value) {
    return Object.values(resolutions_1.Resolutions).includes(value);
};
exports.videoRepos = {
    clearAll: function () {
        exports.VIDEO_DB.videos = [];
        nextId = 1;
    },
    createVideo: function (title, author, availableResolutions) {
        var errorsMessages = [];
        if (typeof title !== 'string' || title.trim().length < 1 || title.trim().length > 40) {
            errorsMessages.push({ message: "Invalid title", field: "title" });
        }
        // Валидация author
        if (typeof author !== 'string' || author.trim().length < 1 || author.trim().length > 20) {
            errorsMessages.push({ message: "Invalid author", field: "author" });
        }
        // Валидация availableResolutions
        if (!Array.isArray(availableResolutions)) {
            errorsMessages.push({ message: "availableResolutions must be an array", field: "availableResolutions" });
        }
        else {
            var invalid = availableResolutions.filter(function (r) { return !ResolutionValidate(r); });
            if (invalid.length > 0) {
                errorsMessages.push({ message: "Invalid resolution(s)", field: "availableResolutions" });
            }
        }
        if (errorsMessages.length > 0) {
            return { errorsMessages: errorsMessages };
        }
        var newVideo = {
            id: nextId++,
            title: title.trim(),
            author: author.trim(),
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            availableResolutions: availableResolutions
        };
        exports.VIDEO_DB.videos.push(newVideo);
        return newVideo;
    },
    getVideo: function () { return exports.VIDEO_DB.videos; },
    getVideoById: function (id) {
        return exports.VIDEO_DB.videos.find(function (v) { return v.id === id; }) || null;
    },
    updateVideos: function (id, data) {
        var video = exports.VIDEO_DB.videos.find(function (v) { return v.id === id; });
        if (!video)
            return null;
        var errorsMessages = [];
        // title
        if (data.title !== undefined) {
            if (typeof data.title !== 'string' || data.title.trim().length < 1 || data.title.trim().length > 40) {
                errorsMessages.push({ message: "Invalid title", field: "title" });
            }
        }
        // author
        if (data.author !== undefined) {
            if (typeof data.author !== 'string' || data.author.trim().length < 1 || data.author.trim().length > 20) {
                errorsMessages.push({ message: "Invalid author", field: "author" });
            }
        }
        // availableResolutions
        if (data.availableResolutions !== undefined) {
            if (!Array.isArray(data.availableResolutions)) {
                errorsMessages.push({ message: "availableResolutions must be an array", field: "availableResolutions" });
            }
            else {
                var invalid = data.availableResolutions.filter(function (r) { return !ResolutionValidate(r); });
                if (invalid.length > 0) {
                    errorsMessages.push({ message: "Invalid resolution(s)", field: "availableResolutions" });
                }
            }
        }
        // canBeDownloaded
        if (data.canBeDownloaded !== undefined) {
            if (typeof data.canBeDownloaded !== 'boolean') {
                errorsMessages.push({ message: "Invalid canBeDownloaded", field: "canBeDownloaded" });
            }
        }
        // minAgeRestriction
        if (data.minAgeRestriction !== undefined) {
            if (data.minAgeRestriction !== null) {
                if (typeof data.minAgeRestriction !== 'number' || data.minAgeRestriction < 1 || data.minAgeRestriction > 18) {
                    errorsMessages.push({ message: "Invalid minAgeRestriction", field: "minAgeRestriction" });
                }
            }
        }
        // publicationDate
        if (data.publicationDate !== undefined) {
            if (typeof data.publicationDate !== 'string' || isNaN(Date.parse(data.publicationDate))) {
                errorsMessages.push({ message: "Invalid publicationDate", field: "publicationDate" });
            }
        }
        if (errorsMessages.length > 0) {
            return { errorsMessages: errorsMessages };
        }
        // Обновляем только допустимые поля
        if (data.title !== undefined)
            video.title = data.title.trim();
        if (data.author !== undefined)
            video.author = data.author.trim();
        if (data.availableResolutions !== undefined)
            video.availableResolutions = data.availableResolutions;
        if (data.canBeDownloaded !== undefined)
            video.canBeDownloaded = data.canBeDownloaded;
        if (data.minAgeRestriction !== undefined)
            video.minAgeRestriction = data.minAgeRestriction;
        if (data.publicationDate !== undefined)
            video.publicationDate = data.publicationDate;
        return video;
    },
    deleteVideo: function (id) {
        var index = exports.VIDEO_DB.videos.findIndex(function (v) { return v.id === id; });
        if (index === -1)
            return false;
        exports.VIDEO_DB.videos.splice(index, 1);
        return true;
    }
};
//# sourceMappingURL=videoRepos.js.map