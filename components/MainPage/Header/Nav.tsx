'use client';
import { useState } from 'react';
import { Link } from '../../../navigation';
import { IMenu } from '@/types/menu.types';
import Hamburger from './Hamburger';

const Nav = ({
    navLinks,
    localeSwitcher,
}: {
    navLinks: IMenu[];
    localeSwitcher: React.JSX.Element;
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let contactItem = null;

    const items = navLinks.map(({ id, name, slug }) => {
        if (slug === 'contacts') {
            contactItem = (
                <Link
                    onClick={toggleMenu}
                    className={`block w-full text-lg md:text-sm lg:text-base md:w-auto text-center text-gray-100 transition md:border px-6 py-2 rounded-custom md:hover:bg-second-color hover:text-black`}
                    href={`/${slug}`}
                    key={id}
                >
                    {name}
                </Link>
            );
            return null;
        } else {
            return (
                <Link
                    onClick={toggleMenu}
                    className="block w-full text-lg md:text-sm lg:text-base md:w-auto text-center text-gray-100 hover:text-white transition px-6 py-2 md:px-0 md:py-0"
                    href={`/${slug}`}
                    key={id}
                >
                    {name}
                </Link>
            );
        }
    });

    return (
        <>
            <div
                className={`fixed top-0 ${
                    isMenuOpen ? 'left-0' : '-left-full'
                } w-10/12 h-screen py-5 px-4 flex-col bg-[#000000d9] justify-center flex items-center gap-y-4 md:gap-y-0 gap-x-3 md:gap-x-5 lg:gap-x-9 transition-all md:static md:left-0 md:flex-row md:bg-transparent md:h-auto z-50`}
            >
                {items}
                <div className="md:hidden flex flex-col items-center gap-y-7 md:mt-0 w-full">
                    {contactItem}
                    {localeSwitcher}
                </div>
            </div>
            <div className="hidden md:flex md:gap-x-3 lg:gap-x-5 md:items-center">
                {contactItem}
                {localeSwitcher}
            </div>
            <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
    );
};

export default Nav;
