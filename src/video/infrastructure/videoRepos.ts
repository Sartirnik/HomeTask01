const VIDEO_DB : any  = {
    video: [],
    title: [],
    author: [],
    canBeDownloaded: [],
    minAgeRestriction:[],
    createdAt: [],
    publicationDate: [],
    availableResolutions: []
}
export const videoRepos = {
    createVideo :  () =>{
      VIDEO_DB.video.push(
          {
              "id": 0,
              "title": "string",
              "author": "string",
              "canBeDownloaded": true,
              "minAgeRestriction": null,
              "createdAt": "2025-09-18T10:58:44.779Z",
              "publicationDate": "2025-09-18T10:58:44.779Z",
              "availableResolutions": ["P144"]
          })
    },

    getVideos: () => {
        return VIDEO_DB.video;
    },

    deleteVideo : ()=>{
        VIDEO_DB.video.remove()
    }
}