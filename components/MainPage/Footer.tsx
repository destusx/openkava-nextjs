import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-color p-4">
            <div className="container flex flex-col items-center">
                <p className="text-center text-white">
                    Мы всегда открыты к обсуждению, решению ваших проблем и улучшению
                    вашего бизнеса
                </p>
                <div className="flex items-center gap-x-7 text-xl">
                    <a href="tel:+380930624266" target="_blank">
                        <BsFillTelephoneInboundFill className="text-white cursor-pointer" />
                    </a>
                    <a href="https://t.me/makarenko_roma" target="_blank">
                        <FaTelegramPlane className="text-white cursor-pointer" />
                    </a>
                    <a href="">
                        <FaViber className="text-white cursor-pointer" />
                    </a>
                </div>
                <div className="text-center text-white mt-4">
                    &copy; OPENKAVA 2024
                </div>
            </div>
        </footer>
    );
};

export default Footer;
