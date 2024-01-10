import { Language } from './lang.enum';

export interface ICategoryResponse {
    id: number;
    name: string;
    slug: string;
    title: string;
    description: string | null;
    language: Language;
}

export interface ICategory extends Pick<ICategoryResponse, 'id' | 'name' | 'slug'> {}
