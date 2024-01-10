// Breadcrumbs.tsx
import React from 'react';
import { Link } from '../../navigation';

interface Breadcrumb {
    id: number;
    name: string;
    slug: string;
}

interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
    lastItem: string;
}

const Breadcrumbs = ({ breadcrumbs, lastItem }: BreadcrumbsProps) => {
    return (
        <div>
            {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.id}>
                    <Link
                        className={'text-base-color text-sm'}
                        href={`/${item.slug}`}
                    >
                        {item.name}
                    </Link>
                    {index <= breadcrumbs.length - 1 && (
                        <span className={'text-gray-500 text-sm'}> / </span>
                    )}
                </React.Fragment>
            ))}
            <span className={'text-gray-500 text-sm'}>{lastItem}</span>
        </div>
    );
};

export default Breadcrumbs;
