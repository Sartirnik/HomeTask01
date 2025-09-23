import {Resolutions} from "../../types/resolutions";
import {HttpStatus} from "../../types/HttpStatus";

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
    createVideo(title, author, availableResolutions ){
        // провести валлидацию тайтл
        // валидация автора
        // валидация resolutiona ЕNUM
        const AuthorValidate = (author: string): boolean => {
            if (typeof author !== 'string') return false;
            const trimmed = author.trim();
            return trimmed.length >= 3 && trimmed.length <= 50;
        }

        if (typeof title !== 'string' || title.trim().length < 3 || title.trim().length > 100) {
            return res.status(HttpStatus.BadRequest).send(404);
        }

        if (!AuthorValidate(author)) {
            return res.status(HttpStatus.BadRequest).send(404);
        }

        if(!ResolutionValidate(availableResolutions)){
            return res.status(HttpStatus.BadRequest).send(404);
        }
        const newVideo =   {
            "id": VIDEO_DB.videos.length + 1,
            "title": title,
            "author": author,
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": "2025-09-19T21:28:52.571Z",
            "publicationDate": "2025-09-19T21:28:52.571Z",
            "availableResolutions": availableResolutions
        };
    VIDEO_DB.videos.push(newVideo);

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
            return {
                errorsMessages: [{ message: "Video not found", field: "id" }]
            };
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
        VIDEO_DB.videos.splice(index, 1);
        return true;
    },



    getUpdateVideo :()=>{

    }
    // getVideoMessage : (videoId: number) => {
    //     return videoRepos.UPD_DB();
    // }

    // deleteVideo : ()=>{
    //     VIDEO_DB.video.delete();
    // },
}