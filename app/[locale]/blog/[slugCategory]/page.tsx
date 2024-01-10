import BlogCategories from '@/components/Blog/BlogCategories';
import PostPreview from '@/components/Blog/PostPreview';
import PageWrapper from '@/components/PageWrapper';
import { getBlogCategories } from '@/services/blogCategoryService';
import { useLocale } from 'next-intl';

interface BlogByCategoryProps {
    params: {
        slugCategory: string;
    };
}

const BlogByCategory = async ({ params: { slugCategory } }: BlogByCategoryProps) => {
    const locale: string = useLocale().toUpperCase();
    const data = await getBlogCategories(locale);

    const categoryName = data
        .filter(item => item.slug === slugCategory)
        .map(item => item.name)[0];

    return (
        <PageWrapper header={`Категория: ${categoryName}`}>
            <BlogCategories />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-7 mt-9">
                <PostPreview slug={slugCategory} />
            </div>
        </PageWrapper>
    );
};

export default BlogByCategory;
