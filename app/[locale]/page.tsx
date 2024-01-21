import Work from '@/components/MainPage/Work';
import Promotion from '@/components/MainPage/Promotion';
import Feature from '@/components/MainPage/Feature';
import BlogPreview from '@/components/MainPage/BlogPreview';
import Accordion from '@/components/Accordion/Accordion';
import WhyUs from '@/components/MainPage/WhyUs';
import Team from '@/components/MainPage/Team';

export default function Home() {
    return (
        <>
            <Promotion />
            <Work />
            <WhyUs />
            <Feature />
            <Accordion />
            <Team />
            <BlogPreview />
        </>
    );
}
