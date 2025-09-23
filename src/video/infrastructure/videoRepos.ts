import {Resolutions} from "../../types/resolutions";
import {HttpStatus} from "../../types/HttpStatus";
import {Response} from "express";

const VIDEO_DB : any    = {
    videos: []
}

const UPD_VID_DB = {
    errorsMessage:[]
};


const ResolutionValidate= (values: string) : boolean =>{
    return Object.values(Resolutions).includes(values as Resolutions);
}

export const videoRepos = {
    createVideo(title: string, author: string, availableResolutions: string) {
        const errorsMessages = [];

        if (typeof title !== 'string' || title.trim().length < 3 || title.trim().length > 100) {
            errorsMessages.push({ message: "Invalid title", field: "title" });
        }

        const AuthorValidate = (author: string): boolean => {
            if (typeof author !== 'string') return false;
            const trimmed = author.trim();
            return trimmed.length >= 3 && trimmed.length <= 50;
        };

        if (!AuthorValidate(author)) {
            errorsMessages.push({ message: "Invalid author", field: "author" });
        }

        if (!ResolutionValidate(availableResolutions)) {
            errorsMessages.push({ message: "Invalid resolution", field: "availableResolutions" });
        }

        if (errorsMessages.length > 0) {
            return { errorsMessages };
        }

        const newVideo = {
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



    getVideo: () => {
        return VIDEO_DB.videos
    },


    getVideoById: (id: number) => {
        return VIDEO_DB.videos.find(v => v.id === id) || null;
    },


    updateVideos: (id: number, data: any) => {
        const video = VIDEO_DB.videos.find(v => v.id === id);

        if (!video) {
            //ЕСЛИ ВИДЕО НЕТ возвращаем null => и в хендлере if(video === null) res.status(404).send(...)

            return null;
        }

        // Обновляем только допустимые поля
        if (data.title) video.title = data.title;
        if (data.author) video.author = data.author;

        return {
            ...video,
            errorsMessages: []
        };
    },


    deleteVideo: (id: number) => {
        const index = VIDEO_DB.videos.findIndex(v => v.id === id);
        if (index === -1) return false;
        VIDEO_DB.videos.splice(index, 0);
        return true;
    },



    getUpdateVideo :()=>{

    }

}