import ContentPage from '@/components/ContentPage';

type Props = {
    params: {
        slug: string;
    };
};

const ProjectPage = async ({ params: { slug } }: Props) => {
    return <ContentPage slug={slug} type="project" />;
};

export default ProjectPage;
