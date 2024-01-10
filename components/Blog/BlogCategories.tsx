import { getBlogCategories } from '@/services/blogCategoryService';
import CategoryLink from './CategoryLink';
import { useLocale } from 'next-intl';

const BlogCategories = async () => {
    const locale: string = useLocale().toUpperCase();
    const data = await getBlogCategories(locale);

    const blogCategoryElement = data.map(item => {
        return <CategoryLink key={item.id} {...item} />;
    });

    return (
        <div className="flex items-center gap-y-2 md:gap-y-0 gap-x-2 mt-5 flex-col md:flex-row">
            <div className="text-lg">Категории:</div>
            <ul className="flex gap-x-3 gap-y-3 md:gap-y-0 items-center flex-wrap">
                {blogCategoryElement}
            </ul>
        </div>
    );
};

export default BlogCategories;
