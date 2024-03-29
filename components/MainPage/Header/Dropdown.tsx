'use client';
import { Link } from '@/navigation';
import { IMenuSubcategory } from '@/types/menu.types';
import { motion, AnimatePresence } from 'framer-motion';

interface IDropdown {
    subitems: IMenuSubcategory[];
    dropRef: React.Ref<HTMLUListElement>;
    onClick: () => void;
}

const Dropdown = ({ subitems, dropRef, onClick }: IDropdown) => {
    return (
        <AnimatePresence>
            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={dropRef}
                className={`flex flex-col justify-center md:absolute bg-white md:left-0 md:-translate-x-0 md:w-60 md:top-8 md:bg-white rounded-custom overflow-hidden`}
            >
                {subitems.map(item => {
                    return (
                        <li
                            key={item.id}
                            onClick={onClick}
                            className="hover:bg-slate-300 overflow-hidden w-full"
                        >
                            <Link
                                className="block w-full text-lg md:text-sm lg:text-base md:w-auto transition px-6 py-2 md:px-2 md:py-2"
                                href={item.slug}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </motion.ul>
        </AnimatePresence>
    );
};

export default Dropdown;
