import { IImage } from './image.types';
import { Language } from './lang.enum';

export interface IProject {
    id: number;
    title: string;
    content: string;
    language: Language;
    slug: string;
    image: IImage;
    budget: number;
    address: string;
    openedData: string;
    floorArea: number;
    createdAt: string;
    updatedAt: string;
    published: boolean;
    authorId: number;
}

export interface IProjectResponse {
    projects: IProject[];
    projectsCount: number;
}
