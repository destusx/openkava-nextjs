import ContentPage from '@/components/ContentPage';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

const BlogPost = async ({ params: { slug } }: BlogPostProps) => {
    return <ContentPage slug={slug} type="blog" />;
};

export default BlogPost;
