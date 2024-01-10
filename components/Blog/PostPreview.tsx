import Image from 'next/image';
import { Link } from '../../navigation';
import { getPosts } from '@/services/postService';
import { parseISO, format } from 'date-fns';
import { uk, ru } from 'date-fns/locale';
import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { getImagePath } from '@/utils/getPathImage';

const PostPreview = async ({ slug }: { slug?: string }) => {
    const posts = await getPosts(slug);
    const locale = useLocale();
    const t = await getTranslations('Date');

    return posts.map((post, i) => {
        const postData = format(
            parseISO(post.createdAt),
            `dd MMMM yyyy ${t('year')}`,
            { locale: locale === 'ru' ? ru : uk }
        );

        const imageUrl = getImagePath(post.image);

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
                            priority={i === 0 ? true : false}
                        />
                    </div>
                </Link>
                <div className="text-gray-500 mt-5">{postData}</div>
                <Link href={`/blog/${post.categories[0].slug}/${post.slug}`}>
                    <h2 className="mt-3 text-xl md:text-2xl">{post.title}</h2>
                </Link>
                <p className="mt-3 text-gray-600">
                    Поможем открыть кофейню, повысим шансы на успех бизнеса в
                    несколько раз, поделимся ценным опытом.
                </p>
            </div>
        );
    });
};

export default PostPreview;
