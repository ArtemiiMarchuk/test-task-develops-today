import { IPost } from '../Post';

export interface stateCreateInterface {
    title: string;
    content: string;
    allowCreate: boolean;
}

export interface statePostsInterface {
    posts: IPost[];
    activePost?: IPost;
}

export interface stateInterface {
    posts: statePostsInterface;
    create: stateCreateInterface;
}
