import Image from 'next/image';
import { MapPin, CircleDollarSign, CalendarDays } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import formatPostDate from '@/utils/getDate';
import { IPost } from '@/types/post.types';
import { IProject } from '@/types/project.types';
import { Eye } from 'lucide-react';

export type ContentType = 'blog' | 'project';
export type ContentTypeData = IPost | IProject;

const isPost = (post: ContentTypeData): post is IPost => 'categories' in post;

export const renderBreadcrumbs = (data: ContentTypeData) => {
    const breadcrumbsData = isPost(data)
        ? [
              { id: 1, name: 'Главная', slug: '/' },
              { id: 2, name: 'Блог', slug: 'blog' },
              {
                  id: data.categories[0].id,
                  slug: `blog/${data.categories[0].slug}`,
                  name: data.categories[0].name,
              },
          ]
        : [
              { id: 1, name: 'Главная', slug: '/' },
              { id: 2, name: 'Проекты', slug: 'projects' },
          ];

    return <Breadcrumbs breadcrumbs={breadcrumbsData} lastItem={data.title} />;
};

export const renderDateInfo = (data: ContentTypeData) => {
    if (isPost(data)) {
        return (
            <div className="mt-3 flex self-center gap-x-7">
                <div>Опубликовано: {formatPostDate(data)}</div>
                <div className="flex items-center">
                    <Eye className="text-xs" />
                    {data.viewsCount}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:items-center">
            <div className="mt-3 flex gap-x-1">
                <CalendarDays />
                <div>
                    <strong>Дата открытия: </strong>
                    {formatPostDate(data)}
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-x-3">
                <div className="mt-3 flex gap-x-1">
                    <CircleDollarSign />
                    <div>
                        <strong>Бюджет:</strong> {(data as IProject).budget}$
                    </div>
                </div>
                <div className="mt-3 flex gap-x-1">
                    <MapPin />
                    <div>
                        <strong>Адрес:</strong> {(data as IProject).address}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const renderImage = (src: string) => (
    <Image
        style={{
            width: '100%',
            height: '300px',
        }}
        width={500}
        height={250}
        className="object-cover mt-5 rounded-lg"
        src={src}
        alt=""
    />
);
