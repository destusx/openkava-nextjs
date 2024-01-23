import { useTranslations } from 'next-intl';
import Image from 'next/image';
import authorImg from '../../assets/images/main-page/team/author.png';

const Team = () => {
    const t = useTranslations('Team');
    return (
        <section className="pt-14 pb-14 md:pt-20 md:pb-16 bg-[#F4F6FC]">
            <div className="container">
                <div>
                    <h2 className="text-center max-w-[600px] m-auto mt-3">
                        {t('title')}
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly xl:justify-between flex-wrap mt-10 gap-x-10 gap-y-6">
                        <div className="w-[296px] h-[344px] pt-12 pb-8 bg-white flex flex-col items-center rounded-custom transition duration-300 shadow-md hover:shadow-lg">
                            <div className="w-[168px] h-[168px] rounded-full flex flex-col mt-5 lg:mt-0">
                                <Image
                                    src={authorImg}
                                    alt="coffee business plan illustration"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                />
                            </div>
                            <h3 className="mt-4">Богдан</h3>
                            <div className="mt-1 text-sm text-gray-600">
                                Менеджер проекта
                            </div>
                        </div>
                        <div className="w-[296px] h-[344px] pt-12 pb-8 bg-white flex flex-col items-center rounded-custom transition duration-300 shadow-md hover:shadow-lg">
                            <div className="w-[168px] h-[168px] rounded-full flex flex-col mt-5 lg:mt-0">
                                <Image
                                    src={authorImg}
                                    alt="coffee business plan illustration"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                />
                            </div>
                            <h3 className="mt-4">Роман</h3>
                            <div className="mt-1 text-sm text-gray-600">
                                Менеджер проекта
                            </div>
                        </div>
                        <div className="w-[296px] h-[344px] pt-12 pb-8 bg-white flex flex-col items-center rounded-custom transition duration-300 shadow-md hover:shadow-lg">
                            <div className="w-[168px] h-[168px] rounded-full flex flex-col mt-5 lg:mt-0">
                                <Image
                                    src={authorImg}
                                    alt="coffee business plan illustration"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                />
                            </div>
                            <h3 className="mt-4">Аня</h3>
                            <div className="mt-1 text-sm text-gray-600">
                                Менеджер проекта
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
