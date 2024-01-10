import { getBlogCategories } from '@/services/blogCategoryService';
import { createPost, getPost } from '@/services/postService';
import { ICreatePost } from '@/types/post.types';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export const useCategories = (locale: string) => {
    return useQuery({
        queryFn: () => getBlogCategories(locale),
        queryKey: ['category'],
    });
};

export const useCreatePost = () => {
    const { data: session } = useSession();
    console.log(session);
    return useMutation({
        mutationFn: (post: ICreatePost) => createPost(post, session?.user.token),
    });
};

export const useGetSinglePost = (slug: string) => {
    return useQuery({
        queryFn: () => getPost(slug),
        queryKey: ['posts'],
    });
};
