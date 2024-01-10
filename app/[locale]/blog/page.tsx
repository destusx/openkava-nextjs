import BlogCategories from '@/components/Blog/BlogCategories';
import PostPreview from '@/components/Blog/PostPreview';
import PageWrapper from '@/components/PageWrapper';
import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth';

const Blog = async () => {
    const session = await getServerSession(authConfig);

    console.log(session);

    return (
        <PageWrapper header="Блог">
            <BlogCategories />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto gap-x-7 mt-9">
                <PostPreview />
            </div>
        </PageWrapper>
    );
};

export default Blog;
