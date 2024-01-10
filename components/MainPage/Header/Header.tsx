import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import Logo from './Logo';
import Nav from './Nav';
import { getMenuList } from '@/services/menuService';

const Header = async () => {
    const navLinks = await getMenuList();

    return (
        <header className="bg-base-color border-b py-3 relative">
            <div className="container">
                <nav className="flex items-center justify-between h-12">
                    <Logo />
                    <Nav navLinks={navLinks} localeSwitcher={<LocaleSwitcher />} />
                </nav>
            </div>
        </header>
    );
};

export default Header;
