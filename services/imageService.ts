import { baseBackendUrl } from '@/utils/constans';

export async function getImage(imgName: string) {
    const res = await fetch(`${baseBackendUrl}/image/${imgName}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
