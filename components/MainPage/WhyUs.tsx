import { useTranslations } from 'next-intl';
import Image from 'next/image';
import coffeeShopImg from '../../assets/images/main-page/why-us/coffee-shop.png';
import supportImg from '../../assets/images/main-page/why-us/support-client.png';
import reputationImg from '../../assets/images/main-page/why-us/low-risk.png';

const WhyUs = () => {
    const t = useTranslations('WhyUs');
    return (
        <section className="pt-14 pb-14 md:pt-24 md:pb-16 bg-[#F4F6FC]">
            <div className="container">
                <div>
                    <h2 className="text-center max-w-[600px] m-auto mt-3">
                        {t('title')}
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center md:justify-between mt-10 gap-x-12 gap-y-4">
                        <div className="flex-1 flex flex-col items-center">
                            <div className="w-[80%] flex flex-col mt-5 lg:mt-0 transition-all duration-300 ease-linear hover:scale-[102%]">
                                <Image
                                    src={coffeeShopImg}
                                    alt="coffee business plan illustration"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                />
                            </div>
                            <h3 className="mt-2 text-center">Собственная кофейня</h3>
                            <div className="mt-2 text-sm">
                                Мы владеем собственной кофейней, которую открывали с
                                полного нуля. Знаем все процессы и нюансы этого
                                бизнеса.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <div className="w-[80%] flex flex-col mt-5 lg:mt-0 transition-all duration-300 ease-linear hover:scale-[102%]">
                                <Image
                                    src={reputationImg}
                                    alt="coffee business plan illustration"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                />
                            </div>
                            <h3 className="mt-2 text-center">Дорожим репутацией</h3>
                            <div className="mt-2 text-sm">
                                Мы дорожим своей репутацией и клиентами. Нам важно
                                что бы вы остались довольны и ваша кофейня была
                                успешной и прибыльной.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <div className="w-[80%] flex flex-col mt-5 lg:mt-0 transition-all duration-300 ease-linear hover:scale-[102%]">
                                <Image
                                    src={supportImg}
                                    alt="coffee business plan illustration"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                />
                            </div>
                            <h3 className="mt-2 text-center">
                                Длительная поддержка
                            </h3>
                            <div className="mt-2 text-sm">
                                Мы предоставляем свою поддержку после консультации и
                                открытие кофейни под ключ. Мы поможем настроить все
                                процессы.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
