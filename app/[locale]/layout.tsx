import Header from '@/components/MainPage/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/MainPage/Footer';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import ReactQueryProvider from '@/utils/provider';
import { NextAuthProvider } from '@/utils/AuthProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('PromotionSEO');

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const locale = useLocale();

    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <ReactQueryProvider>
            <NextIntlClientProvider locale={locale}>
                <NextAuthProvider>
                    <html lang={locale}>
                        <body
                            className={`${inter.className} min-h-screen flex flex-col`}
                        >
                            <Header />
                            <main className="flex-auto">{children}</main>
                            <Footer />
                        </body>
                    </html>
                </NextAuthProvider>
            </NextIntlClientProvider>
        </ReactQueryProvider>
    );
}
