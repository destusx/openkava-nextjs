import { IImage } from '@/types/image.types';

export const getImagePath = (src: IImage | null | string | undefined) => {
    const baseUrl = process.env.BASE_URL as string;
    return `${baseUrl}/uploads/${src}`;
};
