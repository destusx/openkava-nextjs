import { locales } from '@/config';
import { ICategory } from '@/types/category.types';
import { DOMAIN } from '@/utils/constans';

export default async function sitemap() {
    const [ukLocale, ruLocale] = locales;
    const ukRategoriesData = await fetch(
        `http://localhost:4444/categories?language=${ukLocale.toLocaleUpperCase()}`
    );
    const ruCategoriesData = await fetch(
        `http://localhost:4444/categories?language=${ruLocale.toLocaleUpperCase()}`
    );

    const ukCategories: ICategory[] = await ukRategoriesData.json();
    const ruCategories: ICategory[] = await ruCategoriesData.json();

    const ukCategoriesUrl = ukCategories
        ?.map(category =>
            category.slug !== 'all-posts'
                ? { url: `${DOMAIN}/blog/${category.slug}` }
                : null
        )
        .filter(Boolean);

    const ruCategoriesUrl = ruCategories
        ?.map(category =>
            category.slug !== 'all-posts'
                ? { url: `${DOMAIN}/blog/${ruLocale}/${category.slug}` }
                : null
        )
        .filter(Boolean);

    const routes = ['', '/about-us', '/contact-us'].map(route => ({
        url: `${DOMAIN}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...ukCategoriesUrl, ...ruCategoriesUrl];
}
