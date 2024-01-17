import { locales } from '@/config';
import { DOMAIN } from '@/utils/constans';

export default async function sitemap() {
    const [ukLocale, ruLocale] = locales;
    const ukRategoriesData = await fetch(
        `http://localhost:4444/categories?language=${ukLocale.toLocaleUpperCase()}`
    );
    const ruCategoriesData = await fetch(
        `http://localhost:4444/categories?language=${ruLocale.toLocaleUpperCase()}`
    );

    const ukCategories = await ukRategoriesData.json();
    const ruCategories = await ruCategoriesData.json();

    const ukCategoriesUrl = ukCategories
        ?.map(post =>
            post.slug !== 'all-posts' ? { url: `${DOMAIN}/blog/${post.slug}` } : null
        )
        .filter(Boolean);

    const ruCategoriesUrl = ruCategories
        ?.map(post =>
            post.slug !== 'all-posts'
                ? { url: `${DOMAIN}/blog/${ruLocale}/${post.slug}` }
                : null
        )
        .filter(Boolean);

    const routes = ['', '/about-us', '/contact-us'].map(route => ({
        url: `${DOMAIN}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...ukCategoriesUrl, ...ruCategoriesUrl];
}
