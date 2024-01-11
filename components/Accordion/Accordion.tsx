import AccordionItem from './AccordionItem';

const Accordion = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-white pt-14 pb-14 md:pt-24 md:pb-16">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <h2 className="text-black">Частые вопросы</h2>
                            <p className="text-base text-body-color mt-1">
                                Ответы на вопросы, которые вы всегда хотели задать.
                                Все, что вам нужно знать, собрано в одном месте!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="Что вы получаете на консультации"
                            text="Вы получаете ценный опыт и информацию, следуя которой вы увеличиваете шансы на успех бизнеса"
                        />
                        <AccordionItem
                            header="Кому подойдет наша консультация?"
                            text="У вас есть идея и финансы открыть кофейню но вы не знаете с чего начать и что делать"
                        />
                        <AccordionItem
                            header="Как происходит процесс консультации?"
                            text="Вы оплачиваете выбранный тариф, мы назначаем встречу и обсуждаем все детали"
                        />

                        <AccordionItem
                            header="Есть ли поддержка после консультации?"
                            text="Мы даем поддержку в онлайн режиме в течении 7 или 20 дней в зависимости от тарифа"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="С каким бюджетом мы работаем?"
                            text="Мы работаем с бюджетом от 10000$ и выше"
                        />
                        <AccordionItem
                            header="Сколько длится консультация?"
                            text="В среднем консультация длится 2-3 часа"
                        />
                        <AccordionItem
                            header="Нужно придумать"
                            text="Все услуги мы предоставляем только в городе Киев"
                        />
                        <AccordionItem
                            header="Чего мы не делаем"
                            text="Мы не открываем бизнес под ключ, мы не ищем персонал"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#3056D3" stopOpacity="0.36" />
                            <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                            <stop
                                offset="1"
                                stopColor="#F5F2FD"
                                stopOpacity="0.096144"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Accordion;