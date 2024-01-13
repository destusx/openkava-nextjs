import BlogCategories from '@/components/Blog/BlogCategories';
import PostPreview from '@/components/Blog/PostPreview';
import PageWrapper from '@/components/PageWrapper';

const Blog = async () => {
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
