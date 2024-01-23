import { withAuth } from 'next-auth/middleware';
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { localePrefix } from './navigation';

export const locales = ['uk', 'ru'];
const publicPages = [
    '/',
    '/login',
    '/about',
    '/projects',
    '/contacts',
    '/prices',
    '/blog',
    '/consultation',
    '/barista-courses',
    '/turnkey',
];

const intlMiddleware = createIntlMiddleware({
    locales,
    defaultLocale: 'uk',
    localePrefix,
});

const authMiddleware = withAuth(
    // Note that this callback is only invoked if
    // the `authorized` callback has returned `true`
    // and not for pages listed in `pages`.
    function onSuccess(req) {
        return intlMiddleware(req);
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                return token?.role === 'ADMIN';
            },
        },
        pages: {
            signIn: '/api/auth/signin',
        },
    }
);

export default function middleware(req: NextRequest) {
    const publicPathnameRegex = RegExp(
        `^(/(${locales.join('|')}))?(${publicPages.join('|')})?/?$`,
        'i'
    );
    const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

    const isProjectPage = /^\/([a-z]{2}\/)?projects\/[a-z0-9-]+$/i.test(
        req.nextUrl.pathname
    );

    const isBlogCategory = /^\/([a-z]{2}\/)?blog\/[a-z]+$/.test(
        req.nextUrl.pathname
    );
    const isBlogArticle = /^\/([a-z]{2}\/)?blog\/[a-z]+(?:\/[a-z0-9-]+)*\/?$/i.test(
        req.nextUrl.pathname
    );

    if (isPublicPage || isBlogCategory || isBlogArticle || isProjectPage) {
        return intlMiddleware(req);
    } else {
        return (authMiddleware as any)(req);
    }
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
