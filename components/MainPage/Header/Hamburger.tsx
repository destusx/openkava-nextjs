interface IHamburger {
    isOpen: boolean;
    toggleMenu: () => void;
    buttonRef: React.Ref<HTMLButtonElement>;
}

const Hamburger = ({ isOpen, toggleMenu, buttonRef }: IHamburger) => {
    return (
        <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-7 w-8 h-8 flex justify-center items-start flex-col md:hidden z-50"
        >
            <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-full rounded-sm ${
                        isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'
                    }`}
            ></span>
            <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-9/12 rounded-sm my-1.5 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
            ></span>
            <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-full rounded-sm ${
                        isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'
                    }`}
            ></span>
        </button>
    );
};

export default Hamburger;
