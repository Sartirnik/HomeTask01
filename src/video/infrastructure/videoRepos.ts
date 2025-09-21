const VIDEO_DB : any    = {
    videos: []
}

const UPD_VID_DB = {
    errorsMessage:[]
};

export const videoRepos = {
    createVideo :  () =>{
        const newVideo =   {
            "id": 0,
            "title": "string",
            "author": "string",
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": "2025-09-19T21:28:52.571Z",
            "publicationDate": "2025-09-19T21:28:52.571Z",
            "availableResolutions": [
                "P144"
            ]
        };
        VIDEO_DB.videos.push(newVideo);

    },

    getVideo: () => {
        return VIDEO_DB.videos
    },


    getVideoById: (id: number) => {
        return VIDEO_DB.videos.find(v => v.id === id) || null;
    },


    updateVideo: (id: number, data: any) => {
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