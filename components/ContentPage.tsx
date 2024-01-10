import ContentParser from '@/utils/ContentParser';
import { getProject } from '@/services/projectService';
import { getPost } from '@/services/postService';
import {
    ContentType,
    renderBreadcrumbs,
    renderDateInfo,
} from '@/utils/contentPageUtils';
import renderMainImage from '@/utils/renderMainImage';
import { IPost } from '@/types/post.types';
import { IProject } from '@/types/project.types';

type Props = {
    slug: string;
    type: ContentType;
};

const ContentPage = async ({ slug, type }: Props) => {
    let data: IPost | IProject;

    switch (type) {
        case 'blog':
            data = await getPost(slug);
            break;
        case 'project':
            data = await getProject(slug);
            break;
        default:
            throw new Error(`Unsupported content type: ${type}`);
    }

    const breadcrumbs = renderBreadcrumbs(type, data);
    const dateInfo = renderDateInfo(type, data);
    const image = renderMainImage(data.image);
    const parsedConnent = ContentParser(data);

    return (
        <section className="pt-[30px] pb-[50px]">
            <div className="container">
                <article className="max-w-2xl m-auto">
                    {breadcrumbs}
                    <div className="flex flex-col items-center mt-5">
                        <h1 className="text-black text-center">{data.title}</h1>
                        {dateInfo}
                        {image}
                    </div>
                    <div className="mt-5 text-[17px] color-[#333333]">
                        {parsedConnent}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default ContentPage;
