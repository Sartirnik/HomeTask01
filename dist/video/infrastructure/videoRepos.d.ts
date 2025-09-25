export declare const VIDEO_DB: any;
export declare const videoRepos: {
    clearAll(): void;
    createVideo(title: string, author: string, availableResolutions: string[]): {
        id: number;
        title: string;
        author: string;
        canBeDownloaded: boolean;
        minAgeRestriction: any;
        createdAt: string;
        publicationDate: string;
        availableResolutions: string[];
    } | {
        errorsMessages: any[];
    };
    getVideo: () => any;
    getVideoById: (id: number) => any;
    updateVideos: (id: number, data: any) => any;
    deleteVideo: (id: number) => boolean;
};
//# sourceMappingURL=videoRepos.d.ts.map