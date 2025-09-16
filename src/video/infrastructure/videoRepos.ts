const VIDEO_DB : any  = {
    video: [],
    author: []

}
export const videoRepos = {
    createVideo :  () =>{
      VIDEO_DB.video.push({ id: 1})
    },
    getVideos: () => {
        return VIDEO_DB.video;
    }
}