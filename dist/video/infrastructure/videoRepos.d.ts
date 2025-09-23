export declare const videoRepos: {
    createVideo(title: string, author: string, availableResolutions: string): {
        errorsMessages: any[];
        data?: undefined;
    } | {
        data: {
            title: string;
            author: string;
            canBeDownloaded: boolean;
            minAgeRestriction: any;
            createdAt: string;
            publicationDate: string;
            availableResolutions: string;
        };
        errorsMessages?: undefined;
    };
    getVideo: () => any;
    getVideoById: (id: number) => any;
    updateVideos: (id: number, data: any) => any;
    deleteVideo: (id: number) => boolean;
    getUpdateVideo: () => void;
};
//# sourceMappingURL=videoRepos.d.ts.map