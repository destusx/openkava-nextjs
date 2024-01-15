import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { Link } from '../../navigation';
import { getPosts } from '@/services/postService';
import { useLocale } from 'next-intl';
import { uk, ru } from 'date-fns/locale';
import { getTranslations } from 'next-intl/server';
import { getImagePath } from '@/utils/getPathImage';

const BlogPreview = async () => {
    const posts = await getPosts();
    const locale = useLocale();
    const t = await getTranslations('Date');

    const latestPosts = posts.slice(0, 3);

    const postElements = latestPosts.map(post => {
        const postData = format(
            parseISO(post.createdAt),
            `dd MMMM yyyy ${t('year')}`,
            { locale: locale === 'ru' ? ru : uk }
        );

        console.log(post);

        const imageUrl = getImagePath(post.image.filename);

        return (
            <div key={post.id}>
                <Link
                    href={`/blog/${post.categories[0].slug}/${post.slug}`}
                    className="rounded-custom overflow-hidden block"
                >
                    <div className="relative w-full h-[250px] hover:scale-110 transition ease-linear">
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            className="rounded-custom object-cover"
                            src={imageUrl}
                            alt={post.title}
                        />
                    </div>
                </Link>
                <div className="text-gray-500 mt-5">{postData}</div>
                <Link href={`/blog/${post.categories[0].slug}/${post.slug}`}>
                    <h3 className="mt-3">{post.title}</h3>
                </Link>
                <p className="mt-3 text-gray-600">{post.description}</p>
            </div>
        );
    });

    return (
        <section className="min-h-[660px] pt-14 pb-14 md:pt-24 md:pb-16">
            <div className="container">
                <h2 className="text-black">Наш блог</h2>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:gap-y-3 gap-x-7 mt-9">
                    {postElements}
                </div>
                <div className="flex justify-center mt-9">
                    <Link
                        className="text-white bg-base-color border px-3 py-1 rounded-custom hover:bg-second-color hover:text-black transition"
                        href={'/blog'}
                    >
                        Смотреть все статьи
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
