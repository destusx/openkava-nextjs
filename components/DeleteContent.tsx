'use client';
import { useDeletePost } from '@/hooks/useApi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useRouter } from '../navigation';

const DeleteContent = ({ slug }: { slug: string }) => {
    const { mutate: deletePost } = useDeletePost(slug);
    const router = useRouter();

    const onDeletePost = async () => {
        const isConfim = confirm('Вы действительно хотите удалить статью?');
        if (isConfim) {
            deletePost();
            router.refresh();
            router.push('/blog');
        }
    };

    return (
        <button onClick={onDeletePost}>
            <AiOutlineDelete className="text-2xl text-red-400" />
        </button>
    );
};

export default DeleteContent;
