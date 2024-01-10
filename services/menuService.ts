import { IMenu } from '@/types/menu.types';
import { baseBackendUrl } from '@/utils/constans';
import { useLocale } from 'next-intl';

export async function getMenuList(): Promise<IMenu[]> {
    const locale: string = useLocale().toUpperCase();

    const res = await fetch(`${baseBackendUrl}/menu?language=${locale}`, {
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data: IMenu[] = await res.json();

    data.sort((a, b) => a.id - b.id);

    return data;
}
