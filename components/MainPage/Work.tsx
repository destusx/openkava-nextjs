import Image from 'next/image';
import coffeeShopImg from '../../assets/images/business-coffee.png';
import firstPoint from '../../assets/icons/first-point.svg';
import secondPoint from '../../assets/icons/second-point.svg';
import thirdPoint from '../../assets/icons/third-point.svg';
import fourthPoint from '../../assets/icons/fourth-point.svg';
import { useTranslations } from 'next-intl';

const Work = () => {
    const t = useTranslations('Work');

    return (
        <section className="min-h-[660px] pt-14 pb-14 md:pt-24 md:pb-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[45%_55%] lg:grid-cols-[35%_65%] md:gap-x-9">
                    <div className="text-center md:text-left">
                        <h2 className="text-black">{t('title')}</h2>
                        <p className="mt-3 text-gray-600">{t('firstParagraph')}</p>
                        <p className="mt-3 text-gray-600">{t('secondParagraph')}</p>
                        <div className="flex flex-col mt-5 lg:mt-0">
                            <Image
                                src={coffeeShopImg}
                                alt="coffee business plan illustration"
                                sizes="100vw"
                                className="w-full h-auto rounded-custom"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-7 pt-4">
                        <div>
                            <Image src={firstPoint} alt="" />
                            <h3 className="mt-3">{t('firstSubtitle')}</h3>
                            <p className="mt-3 text-gray-600">{t('firstText')}</p>
                        </div>
                        <div>
                            <Image src={secondPoint} alt="" />
                            <h3 className="mt-3">{t('secondSubtitle')}</h3>
                            <p className="mt-3 text-gray-600">{t('secondText')}</p>
                        </div>
                        <div>
                            <Image src={thirdPoint} alt="" />
                            <h3 className="mt-3">{t('thirdSubtitle')}</h3>
                            <p className="mt-3 text-gray-600">{t('thirdText')}</p>
                        </div>
                        <div>
                            <Image src={fourthPoint} alt="" />
                            <h3 className="mt-3">{t('fourthSubtitle')}</h3>
                            <p className="mt-3 text-gray-600">{t('fourthText')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
