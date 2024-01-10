import { IProject, IProjectResponse } from '@/types/project.types';
import { baseBackendUrl } from '@/utils/constans';
import { useLocale } from 'next-intl';

export async function getProjects() {
    const locale: string = useLocale().toUpperCase();

    let res = await fetch(`${baseBackendUrl}/projects?language=${locale}`, {
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const { projects }: IProjectResponse = data;

    return projects;
}

export async function getProject(slug: string): Promise<IProject> {
    const res = await fetch(`${baseBackendUrl}/projects/${slug}`, {
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}
