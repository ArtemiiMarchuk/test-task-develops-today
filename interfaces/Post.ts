export interface IPost {
    title: string;
    body: string;
    id: number;
}

export interface IPosts {
    posts: IPost[];
    activePost?: IPost;
}
