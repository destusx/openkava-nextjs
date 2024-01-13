import { ICreatePost, IPost, IPostData } from '@/types/post.types';
import { baseBackendUrl } from '@/utils/constans';
import { useLocale } from 'next-intl';

export async function getPosts(slug: string = '') {
    const locale: string = useLocale().toUpperCase();

    let res: Response;

    if (slug) {
        res = await fetch(
            `${baseBackendUrl}/posts/category/${slug}?language=${locale}`
        );
    } else {
        res = await fetch(`${baseBackendUrl}/posts?language=${locale}`);
    }

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const { posts }: IPostData = data;

    return posts;
}

export async function getPost(slug: string): Promise<IPost> {
    const res = await fetch(`${baseBackendUrl}/posts/${slug}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}

export const createPost = async (post: ICreatePost, token: string | undefined) => {
    const res = await fetch(`${baseBackendUrl}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};

export const deletePost = async (slug: string, token: string | undefined) => {
    const res = await fetch(`${baseBackendUrl}/posts/${slug}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    return res;
};
