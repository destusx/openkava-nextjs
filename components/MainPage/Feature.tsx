import { useTranslations } from 'next-intl';
import { IoMdHelp } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { LuMenuSquare } from 'react-icons/lu';
import { TbBuildingStore } from 'react-icons/tb';
import { IoMdContacts } from 'react-icons/io';
import { RiFileList3Line } from 'react-icons/ri';
import { Link } from '@/navigation';

const Feature = () => {
    const t = useTranslations('Feature');
    return (
        <section className="min-h-[700px] pt-14 pb-14 md:pt-24 md:pb-16 bg-[#F4F6FC]">
            <div className="container">
                <div>
                    <h2 className="text-center max-w-[600px] m-auto mt-5">
                        {t('title')}
                    </h2>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7 mt-10">
                        <div className="bg-white p-4 rounded-custom border-2 hover:border-base-color transition">
                            <IoMdHelp className="text-2xl text-base-color" />
                            <h3 className="mt-3 text-xl">{t('firstPoint')}</h3>
                            <p className="mt-3 text-gray-700">{t('firstText')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-custom border-2 hover:border-base-color transition">
                            <MdLocationOn className="text-2xl text-base-color" />
                            <h3 className="mt-3 text-xl">{t('secondPoint')}</h3>
                            <p className="mt-3 text-gray-700">{t('secondText')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-custom border-2 hover:border-base-color transition">
                            <LuMenuSquare className="text-2xl text-base-color" />
                            <h3 className="mt-3 text-xl">{t('thirdPoint')}</h3>
                            <p className="mt-3 text-gray-700">{t('thirdText')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-custom border-2 hover:border-base-color transition">
                            <TbBuildingStore className="text-2xl text-base-color" />
                            <h3 className="mt-3 text-xl">{t('fourthPoint')}</h3>
                            <p className="mt-3 text-gray-700">{t('fourthText')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-custom border-2 hover:border-base-color transition">
                            <IoMdContacts className="text-2xl text-base-color" />
                            <h3 className="mt-3 text-xl">{t('fifthPoint')}</h3>
                            <p className="mt-3 text-gray-700">{t('fifthText')}</p>
                        </div>
                        <div className="bg-white p-4 rounded-custom border-2 hover:border-base-color transition">
                            <RiFileList3Line className="text-2xl text-base-color" />
                            <h3 className="mt-3 text-xl">{t('sixthPoint')}</h3>
                            <p className="mt-3 text-gray-700">{t('sixthText')}</p>
                        </div>
                    </div>
                    <p className="leading-loose text-gray-700 mt-3">
                        Полный список пунктов вы можете посмотреть на страницах{' '}
                        <Link
                            className="text-base-color hover:text-indigo-600"
                            target="_blank"
                            href={'/turnkey'}
                        >
                            открытиe кофейни под ключ
                        </Link>{' '}
                        и{' '}
                        <Link
                            className="text-base-color hover:text-indigo-600"
                            target="_blank"
                            href={'/consultation'}
                        >
                            бизнес консультация
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Feature;
