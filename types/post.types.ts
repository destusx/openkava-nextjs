import { ICategory } from './category.types';
import { IImage } from './image.types';
import { Language } from './lang.enum';

export interface IPost {
    id: number;
    title: string;
    seoTitle: string;
    description: string;
    seoDescription: string;
    content: string;
    language: Language;
    slug: string;
    image: IImage;
    createdAt: string;
    updatedAt: string;
    published: boolean;
    authorId: number;
    viewsCount: number;
    categories: ICategory[];
}

type ICreatePostBase = Pick<
    IPost,
    'title' | 'seoTitle' | 'description' | 'seoDescription' | 'content' | 'language'
>;

export interface ICreatePost extends ICreatePostBase {
    image: number;
    categories: number[];
}

export interface IPostData {
    posts: IPost[];
    postsCount: number;
}
