import {Resolutions} from "../../types/resolutions";

export const VIDEO_DB: any = {
    videos: []
};

let nextId = 1;

const ResolutionValidate = (value: string): boolean => {
    return Object.values(Resolutions).includes(value as Resolutions);
};

export const videoRepos = {
    clearAll() {
        VIDEO_DB.videos = [];
        nextId = 1;
    },

    createVideo(title: string, author: string, availableResolutions: string[]) {
        const errorsMessages: any[] = [];

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
        } else {
            const invalid = availableResolutions.filter(r => !ResolutionValidate(r));
            if (invalid.length > 0) {
                errorsMessages.push({ message: "Invalid resolution(s)", field: "availableResolutions" });
            }
        }

        if (errorsMessages.length > 0) {
            return { errorsMessages };
        }

        const newVideo = {
            id: nextId++,
            title: title.trim(),
            author: author.trim(),
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            availableResolutions
        };

        VIDEO_DB.videos.push(newVideo);
        return newVideo;
    },

    getVideo: () => VIDEO_DB.videos,

    getVideoById: (id: number) => {
        return VIDEO_DB.videos.find(v => v.id === id) || null;
    },

    updateVideos: (id: number, data: any) => {
        const video = VIDEO_DB.videos.find(v => v.id === id);
        if (!video) return null;

        const errorsMessages: any[] = [];

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
            } else {
                const invalid = data.availableResolutions.filter((r: string) => !ResolutionValidate(r));
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
            return { errorsMessages };
        }

        // Обновляем только допустимые поля
        if (data.title !== undefined) video.title = data.title.trim();
        if (data.author !== undefined) video.author = data.author.trim();
        if (data.availableResolutions !== undefined) video.availableResolutions = data.availableResolutions;
        if (data.canBeDownloaded !== undefined) video.canBeDownloaded = data.canBeDownloaded;
        if (data.minAgeRestriction !== undefined) video.minAgeRestriction = data.minAgeRestriction;
        if (data.publicationDate !== undefined) video.publicationDate = data.publicationDate;

        return video;
    },


    deleteVideo: (id: number) => {
        const index = VIDEO_DB.videos.findIndex(v => v.id === id);
        if (index === -1) return false;
        VIDEO_DB.videos.splice(index, 1);
        return true;
    }
};
