import { Language } from './lang.enum';

export interface IProject {
    id: number;
    title: string;
    content: string;
    language: Language;
    slug: string;
    image: string;
    budget: number;
    address: string;
    openedData: string;
    createdAt: string;
    updatedAt: string;
    published: boolean;
    authorId: number;
}

export interface IProjectResponse {
    projects: IProject[];
    projectsCount: number;
}
