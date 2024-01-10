import { ICategory } from './category.types';
import { Language } from './lang.enum';

export interface IPost {
    id: number;
    title: string;
    content: string;
    language: Language;
    slug: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    published: boolean;
    authorId: number;
    viewsCount: number;
    categories: ICategory[];
}

export interface ICreatePost
    extends Omit<
        Pick<IPost, 'title' | 'content' | 'image' | 'language'>,
        'categories'
    > {
    categories: number[];
}

export interface IPostData {
    posts: IPost[];
    postsCount: number;
}
