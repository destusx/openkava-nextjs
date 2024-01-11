import Image from 'next/image';
import { MapPin, CircleDollarSign, CalendarDays } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import formatPostDate from '@/utils/getDate';
import { IPost } from '@/types/post.types';
import { IProject } from '@/types/project.types';

export type ContentType = 'blog' | 'project';
export type ContentTypeData = IPost | IProject;

export const renderBreadcrumbs = (type: ContentType, data: ContentTypeData) => {
    const breadcrumbsData =
        type === 'project'
            ? [
                  { id: 1, name: 'Главная', slug: '/' },
                  { id: 2, name: 'Проекты', slug: 'projects' },
              ]
            : [
                  { id: 1, name: 'Главная', slug: '/' },
                  { id: 2, name: 'Блог', slug: 'blog' },
                  {
                      id: (data as IPost).categories[0].id,
                      slug: `blog/${(data as IPost).categories[0].slug}`,
                      name: (data as IPost).categories[0].name,
                  },
              ];

    return <Breadcrumbs breadcrumbs={breadcrumbsData} lastItem={data.title} />;
};

export const renderDateInfo = (type: ContentType, data: ContentTypeData) => {
    if (type === 'blog') {
        return <div className="mt-3">Опубликовано: {formatPostDate(data)}</div>;
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
