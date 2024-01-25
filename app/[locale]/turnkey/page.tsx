import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import coffeeShopOwner from '../../../assets/images/turnkey/coffee-shop-owner-2.jpg';
import locationImg from '../../../assets/images/turnkey/location.png';
import designImg from '../../../assets/images/turnkey/design.png';
import furnitureImg from '../../../assets/images/turnkey/furniture.png';
import coffeeBarImg from '../../../assets/images/turnkey/coffee-bar.png';
import coffeeMachineImg from '../../../assets/images/turnkey/coffee-machine.png';
import grinderImg from '../../../assets/images/turnkey/coffee-grinder.png';
import supplierImg from '../../../assets/images/turnkey/supplier.png';
import baristaImg from '../../../assets/images/turnkey/barista.png';
import marketingImg from '../../../assets/images/turnkey/digital-marketing.png';
import renovationImg from '../../../assets/images/turnkey/renovation.png';
import trainingImg from '../../../assets/images/turnkey/training.png';
import openningImg from '../../../assets/images/turnkey/opening.png';
import PriceItem from '@/components/Price/PriceItem';
import ListItem from '@/components/ListItem';
import PricingCard from '@/components/Price/PricingCard';
import AccordionItem from '@/components/Accordion/AccordionItem';

const Consultation = () => {
    return (
        <PageWrapper
            header="Открыть кофейню под ключ в Киеве"
            classNames="max-w-2xl m-auto"
        >
            <div className="max-w-2xl m-auto">
                <p className="text-gray-700">
                    Вы хотите открыть собственную кофейню, но вообще не знаете, что
                    делать? Как обеспечить ее успешный старт? Как контролировать
                    процесс после открытие?
                </p>
                <p className="text-gray-700">
                    Наша команда готова предложить вам полный пакет услуг "Открыть
                    кофейню под ключ". Мы откроем вам кофейню, обучим всем процессам
                    и нюансам. Вам только нужно будет следить за качеством и получать
                    прибыль.
                </p>
                <div className="flex flex-col my-3 lg:mt-5">
                    <Image
                        src={coffeeShopOwner}
                        alt="coffee shop promotion"
                        sizes="100vw"
                        className="w-full h-auto rounded-custom"
                        priority
                    />
                </div>
                <div>
                    <h2 className="text-center">
                        Что такое открытие кофейни под ключ?
                    </h2>
                    <p className="text-gray-700">
                        Открытие кофейни под ключ – это концепция предоставления
                        полного списка услуг и поддержки, необходимых для успешного
                        запуска и управления кофейным бизнесом. Этот подход
                        предоставляет предпринимателям открыть кофейню, не затрачивая
                        значительное время и усилия на организацию всех деталей
                        самостоятельно.
                    </p>
                    <p className="text-gray-700">
                        <strong>
                            Мы открываем вам классную кофейню, вы управляете ей и
                            получаете хороший доход.
                        </strong>
                    </p>

                    <h2 className="text-center">
                        Основные преимущества открытия кофейни под ключ
                    </h2>
                    <div className="text-gray-700 mt-3">
                        <ul>
                            <ListItem listType="ul">
                                <strong>Всему научим</strong>. Наша команда готова
                                поделиться всеми знаниями и навыками, которые
                                позволили нам достичь успеха. Вы получите не только
                                ключи от успешной кофейни, но и знания, чтобы
                                эффективно управлять ею.
                            </ListItem>

                            <ListItem listType="ul">
                                <strong>Минимальные риски</strong>. Мы прошли через
                                все этапы, трудности и учились на своих ошибках когда
                                открывали свои кофейни. Мы сделали их успешными и
                                прибыльными. Поэтому риски при открытии будут самые
                                минимальные. Мы вложим весь этот опыт в вашу кофейню.
                            </ListItem>

                            <ListItem listType="ul">
                                <strong>Длительная поддержка</strong>. Мы
                                предоставляем не только стартовую помощь, но и
                                обеспечим поддержку вашей кофейни после открытие.
                                Наша команда окажет помощь в решении любых вопросов и
                                трудностей, с которыми вы можете столкнуться по пути
                                к успеху.
                            </ListItem>

                            <ListItem listType="ul">
                                <strong>Экономия времени</strong>. Время — ценный
                                ресурс, особенно при открытии собственного бизнеса.
                                Наша система исключает лишние временные затраты,
                                предоставляя вам готовые решения и оптимизированные
                                процессы. Вы сможете сосредоточиться на ключевых
                                аспектах развития вашей кофейни.
                            </ListItem>

                            <ListItem listType="ul">
                                <strong>Налаженные процессы</strong>. Наши методы
                                основаны на налаженных процессах, которые помогли
                                сделать наши кофейни успешными. Вы получите доступ к
                                проверенным стратегиям управления. Это обеспечит
                                эффективное функционирование вашей кофейни с самого
                                начала.
                            </ListItem>
                        </ul>
                    </div>
                    <h2 className="text-center">Этапы открытия кофейни под ключ</h2>

                    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-7 text-gray-700 my-3">
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={locationImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">1. Поиск локации</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={designImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">2. Разработка дизайна</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={renovationImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">3. Ремонт помещение</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={furnitureImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">4. Подбор мебели</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={coffeeBarImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">5. Установка бара</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={grinderImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">6. Покупка оборудование</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={coffeeMachineImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">7. Аренда кофемашины</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={supplierImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">8. Работа с поставщиками</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={baristaImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">9. Поиск персонала</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={marketingImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">10. Настройка маркетинга</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={trainingImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">11. Обучаем вас</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                        <div>
                            <div className="flex flex-col my-3 w-[50%] m-auto">
                                <Image
                                    src={openningImg}
                                    alt="coffee shop promotion"
                                    sizes="100vw"
                                    className="w-full h-auto rounded-custom"
                                    priority
                                />
                            </div>
                            <h3 className="text-black">12. Открытие кофейни</h3>
                            <p>
                                Первый шаг, мы выслушаем вас, вашу идею, пожелание,
                                знание. После проанализируем все информацию и
                                подберем индивидуальный подход.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-center">Преимущества нашей консультации</h2>
                    <div className="text-gray-700 mt-3">
                        <ol>
                            <ListItem listType="ol">
                                <strong>Владеем кофейнями</strong>. Мы открывали свои
                                кофейни с полного нуля и знаем все тонкости и нюансы.
                                Мы не хотим что бы вы наткнулись на "инфоцыган" и
                                потеряли свои деньги.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Поддержка</strong>. Весь путь от создания
                                концепции до открытия вашей кофейни будет
                                сопровождаться нашей командой. В зависимости от
                                тарифа, есть онлайн поддержка после консультации и
                                выезд на осмотрл потенциального помещение.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Молодая команда</strong>. Мы - молодая
                                команда профессионалов, которые горят идеей создания
                                уникальных и успешных кофейных проектов. Наш опыт
                                помогут вам воплотить в жизнь современные идеи.
                            </ListItem>
                        </ol>
                    </div>
                    <h2 className="text-center">Тарифы на консультацию</h2>
                    <div className="flex flex-wrap lg:justify-evenly xl:gap-x-6 md:gap-y-6 md:-mx-4 h-full my-5">
                        <PricingCard
                            type="Базовый"
                            price="$500"
                            description="Базовая консультация для открытие кофейного бизнеса"
                            buttonText="Подробней"
                            headingLevel={'h3'}
                        >
                            <PriceItem>Подготовленный бизнес-план</PriceItem>
                            <PriceItem>Консультации по выбору локации</PriceItem>
                            <PriceItem>Оценка потенциала рынка</PriceItem>
                            <PriceItem>Проверенные поставщики</PriceItem>
                            <PriceItem>Помощь в формировании меню</PriceItem>
                            <PriceItem>Основы маркетинга и SMM</PriceItem>
                            <PriceItem>
                                Поддержка 14 дней после консультации
                            </PriceItem>
                        </PricingCard>
                        <PricingCard
                            type="Индивидуальный"
                            price="$800"
                            description="Индивидуальная консультация для открытие кофейного бизнеса"
                            buttonText="Подробней"
                            headingLevel={'h3'}
                        >
                            <PriceItem>Подготовленный бизнес-план</PriceItem>
                            <PriceItem>Консультации по выбору локации</PriceItem>
                            <PriceItem>Оценка потенциала рынка</PriceItem>
                            <PriceItem>Проверенные поставщики</PriceItem>
                            <PriceItem>Формировании меню</PriceItem>
                            <PriceItem>Основы маркетинга и SMM</PriceItem>
                            <PriceItem>
                                Поддержка 30 дней после консультации
                            </PriceItem>
                            <PriceItem>Начальный курс баристы</PriceItem>
                            <PriceItem>Выезд на осмотр помещение</PriceItem>
                            <PriceItem>Обзор конкурентов</PriceItem>
                        </PricingCard>
                    </div>
                    <h2 className="text-center">Как мы работаем?</h2>
                    <div className="text-gray-700 mt-3">
                        <ol>
                            <ListItem listType="ol">
                                <strong>Связываетесь с нами</strong>. Мы открывали
                                свои кофейни с полного нуля и знаем все тонкости и
                                нюансы. Мы не хотим что бы вы наткнулись на
                                "инфоцыган" и потеряли свои деньги.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Заключаем контракт</strong>. Весь путь от
                                создания концепции до открытия вашей кофейни будет
                                сопровождаться нашей командой. В зависимости от
                                тарифа, есть онлайн поддержка после консультации и
                                выезд на осмотрл потенциального помещение.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Получаете консультацию</strong>. Мы - молодая
                                команда профессионалов, которые горят идеей создания
                                уникальных и успешных кофейных проектов. Наш опыт
                                помогут вам воплотить в жизнь современные идеи.
                            </ListItem>
                        </ol>
                    </div>
                    <h2 className="text-center mt-2">
                        Частые вопрос о консультации
                    </h2>
                    <div className="w-full px-4 mt-5">
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
                </div>
            </div>
        </PageWrapper>
    );
};

export default Consultation;
