import { DOMAIN } from '@/utils/constans';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/', // any paths you don't want to be indexed
        },
        sitemap: `${DOMAIN}/sitemap.xml`,
    };
}
