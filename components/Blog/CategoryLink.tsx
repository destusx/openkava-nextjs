'use client';
import { ICategory } from '@/types/category.types';
import { Link, usePathname } from '../../navigation';

const CategoryLink = ({ id, name, slug }: ICategory) => {
    const pathname = usePathname();

    const isActiveLink =
        pathname === `/blog/${slug}` ||
        (pathname === '/blog' && slug === 'all-posts');

    const activeLinkStyle = isActiveLink
        ? 'bg-second-color text-black'
        : 'bg-base-color text-white';

    return (
        <li>
            <Link
                href={`/blog/${slug === 'all-posts' ? '' : slug}`}
                key={id}
                className={`${activeLinkStyle} px-2 py-1 rounded-custom hover:bg-second-color hover:text-black transition text-[14px]`}
            >
                {name}
            </Link>
        </li>
    );
};

export default CategoryLink;
