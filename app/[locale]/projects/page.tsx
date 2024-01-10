import PageWrapper from '@/components/PageWrapper';
import ProjectPreview from '@/components/Project/ProjectPreview';

const Projects = () => {
    return (
        <PageWrapper header="Наши проекты">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-7 gap-y-7 md:gap-y-0 mt-9">
                <ProjectPreview />
            </div>
        </PageWrapper>
    );
};

export default Projects;
