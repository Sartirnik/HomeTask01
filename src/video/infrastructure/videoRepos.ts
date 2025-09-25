import {Resolutions} from "../../types/resolutions";
import {HttpStatus} from "../../types/HttpStatus";
import {Response} from "express";



export const VIDEO_DB : any    = {
    videos: []
};

const UPD_VID_DB = {
    errorsMessage:[]
};


const ResolutionValidate= (values: string) : boolean =>{
    return Object.values(Resolutions).includes(values as Resolutions);
}

export const videoRepos = {
    clearAll() {
        VIDEO_DB.videos = [];
    },
    createVideo(title: string, author: string, availableResolutions: string[]) {
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
            title,
            author,
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(Date.now() + 24*60*60*1000).toISOString(), // завтра
            'availableResolutions': availableResolutions
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
        if (!video) return null;

        const errorsMessages = [];

        if (data.title && (typeof data.title !== 'string' || data.title.trim().length < 3 || data.title.trim().length > 100)) {
            errorsMessages.push({ message: "Invalid title", field: "title" });
        }

        if (data.author && (typeof data.author !== 'string' || data.author.trim().length < 3 || data.author.trim().length > 50)) {
            errorsMessages.push({ message: "Invalid author", field: "author" });
        }

        if (data.availableResolutions) {
            if (!Array.isArray(data.availableResolutions)) {
                errorsMessages.push({ message: "availableResolutions must be an array", field: "availableResolutions" });
            } else {
                const invalid = data.availableResolutions.filter((r: string) => !ResolutionValidate(r));
                if (invalid.length > 0) {
                    errorsMessages.push({ message: "Invalid resolution(s)", field: "availableResolutions" });
                }
            }
        }

        if (errorsMessages.length > 0) {
            return { errorsMessages };
        }

        // Обновляем только допустимые поля
        if (data.title) video.title = data.title;
        if (data.author) video.author = data.author;
        if (data.availableResolutions) video.availableResolutions = data.availableResolutions;
        return video;
    },


    deleteVideo: (id: number) => {
        const index = VIDEO_DB.videos.findIndex(v => v.id === id);
        if (index === -1) return false;
        VIDEO_DB.videos.splice(index, 1);
        return true;
    },



    getUpdateVideo :()=>{

    }

}