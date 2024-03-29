import Image from 'next/image';
import { MapPin, CircleDollarSign, CalendarDays } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import formatPostDate from '@/utils/getDate';
import { IPost } from '@/types/post.types';
import { IProject } from '@/types/project.types';
import { Eye, Store } from 'lucide-react';

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
                <div style={{ gap: 2 }} className="flex items-center">
                    <Eye size={20} />
                    {data.viewsCount}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:items-center">
            <div
                style={{ columnGap: 13 }}
                className="mt-1 flex flex-col md:flex-row"
            >
                <div className="mt-3 flex gap-x-1 items-center">
                    <CalendarDays size={20} />
                    <strong>Дата открытия:</strong> {formatPostDate(data)}
                </div>
                <div className="mt-3 flex gap-x-1 items-center">
                    <Store size={20} />
                    <strong>Площадь:</strong> {data.floorArea} м2
                </div>
            </div>
            <div style={{ columnGap: 35 }} className="flex flex-col md:flex-row">
                <div className="mt-3 flex gap-x-1 items-center">
                    <CircleDollarSign size={20} />
                    <strong>Бюджет:</strong> {data.budget}$
                </div>
                <div className="mt-3 flex gap-x-1 items-center">
                    <MapPin size={20} />
                    <strong>Адрес:</strong> {data.address}
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
