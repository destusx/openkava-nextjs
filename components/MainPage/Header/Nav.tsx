'use client';
import { useEffect, useRef, useState } from 'react';
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
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handlePopState = () => {
        setIsMenuOpen(false);
    };

    const handleCloseMenu = (e: MouseEvent) => {
        const isHamburgerButtonClicked =
            buttonRef.current && buttonRef.current.contains(e.target as Node);
        const isOutsideMenu =
            menuRef.current && !menuRef.current.contains(e.target as Node);

        if (isOutsideMenu && !isHamburgerButtonClicked) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('mousedown', handleCloseMenu);

        return () => {
            window.removeEventListener('mousedown', handleCloseMenu);
        };
    }, []);

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
                ref={menuRef}
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
            <Hamburger
                isOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                buttonRef={buttonRef}
            />
        </>
    );
};

export default Nav;
