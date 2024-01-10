import Image from 'next/image';
import coffeeShopImg from '../../assets/images/coffee-shop.png';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from '../../navigation';
import { useTranslations } from 'next-intl';

const Promotion = () => {
    const t = useTranslations('Promotion');

    return (
        <section className="min-h-[668px] pt-[100px] pb-[100px] bg-base-color">
            <div className="container grid grid-cols-1 lg:grid-cols-[45%_55%] items-center text-center md:text-left">
                <div>
                    <h1 className="text-white">{t('title')}</h1>
                    <p className="mt-5 text-gray-100">{t('subtitle')}</p>
                    <div className="flex gap-x-10 mt-5 justify-evenly md:justify-normal">
                        <Link
                            href="/projects"
                            className="bg-second-color border border-second-color px-6 py-3 rounded-custom hover:bg-base-color hover:text-white transition"
                        >
                            {t('works')}
                        </Link>
                        <Link
                            href="/prices"
                            className="flex items-center gap-x-2 text-white transition-transform hover:translate-x-1"
                        >
                            <button>{t('price')}</button>
                            <HiOutlineArrowNarrowRight className="text-xl" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col mt-5 lg:mt-0">
                    <Image
                        src={coffeeShopImg}
                        alt="coffee shop promotion"
                        sizes="100vw"
                        className="w-full h-auto rounded-custom"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Promotion;
