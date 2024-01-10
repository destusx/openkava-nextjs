import { ICategory } from '@/types/category.types';
import { baseBackendUrl } from '@/utils/constans';

export async function getBlogCategories(locale: string): Promise<ICategory[]> {
    const res = await fetch(`${baseBackendUrl}/categories?language=${locale}`, {
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data: ICategory[] = await res.json();

    data.sort((a, b) => a.id - b.id);

    return data;
}
