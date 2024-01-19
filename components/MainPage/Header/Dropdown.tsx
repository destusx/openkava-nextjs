import { Link } from '@/navigation';
import { IMenuSubcategory } from '@/types/menu.types';

interface IDropdown {
    subitems: IMenuSubcategory[];
    dropRef: React.Ref<HTMLUListElement>;
}

const Dropdown = ({ subitems, dropRef }: IDropdown) => {
    return (
        <ul
            ref={dropRef}
            className="flex flex-col justify-center md:absolute bg-white md:left-0 md:-translate-x-0 md:w-60 md:top-8 md:bg-white rounded-custom overflow-hidden"
        >
            {subitems.map(item => {
                return (
                    <li key={item.id} className="hover:bg-slate-300 p-2">
                        <Link
                            className="block w-full text-lg md:text-sm lg:text-base md:w-auto transition px-6 py-2 md:px-0 md:py-0"
                            href={item.slug}
                        >
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Dropdown;
