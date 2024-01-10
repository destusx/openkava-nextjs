import Work from '@/components/MainPage/Work';
import Promotion from '@/components/MainPage/Promotion';
import Feature from '@/components/MainPage/Feature';
import BlogPreview from '@/components/MainPage/BlogPreview';
import Accordion from '@/components/Accordion/Accordion';

export default function Home() {
    return (
        <>
            <Promotion />
            <Work />
            <Feature />
            <Accordion />
            <BlogPreview />
        </>
    );
}
