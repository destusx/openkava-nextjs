import ContentParser from '@/utils/ContentParser';
import { getProject } from '@/services/projectService';
import { getPost } from '@/services/postService';
import { Link } from '@/navigation';
import {
    ContentType,
    renderBreadcrumbs,
    renderDateInfo,
} from '@/utils/contentPageUtils';
import renderMainImage from '@/utils/renderMainImage';
import { IPost } from '@/types/post.types';
import { IProject } from '@/types/project.types';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/configs/auth';
import { LiaEditSolid } from 'react-icons/lia';
import { AiOutlineDelete } from 'react-icons/ai';
import DeleteContent from './DeleteContent';

type Props = {
    slug: string;
    type: ContentType;
};

const ContentPage = async ({ slug, type }: Props) => {
    const session = await getServerSession(authConfig);
    const isAdmin = session?.user.role === 'ADMIN';

    type types = IPost | IProject;

    const isPost = (post: types): post is IPost => 'categories' in post;

    let data: types;

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

    const editHref = isPost(data)
        ? `/blog/${data.categories[0].slug}/${slug}/edit`
        : `/projects/${slug}/edit`;

    const deleteHref = isPost(data)
        ? `/blog/${data.categories[0].slug}/${slug}/delete`
        : `/projects/${slug}/delete`;

    const editElem = isAdmin ? (
        <div className="absolute right-0 top-0 flex gap-x-3">
            <Link href={editHref}>
                <LiaEditSolid className="text-2xl text-base-color" />
            </Link>
            <DeleteContent slug={data.slug} />
        </div>
    ) : null;

    const breadcrumbs = renderBreadcrumbs(type, data);
    const dateInfo = renderDateInfo(type, data);
    const image = renderMainImage(data.image);
    const parsedConnent = ContentParser(data);

    return (
        <section className="pt-4 pb-6 md:pt-8 md:pb-12">
            <div className="container">
                <article className="max-w-2xl m-auto relative">
                    {breadcrumbs}
                    {editElem}
                    <div className="flex flex-col items-start md:items-center mt-5">
                        <h1 className="text-black text-center self-center">
                            {data.title}
                        </h1>
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
