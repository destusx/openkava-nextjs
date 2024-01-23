import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import coffeeShopOwner from '../../../assets/images/consultation/coffee-shop-owner.jpg';
import coffeeShopOwner1 from '../../../assets/images/consultation/coffee-shop-owner-1.jpg';
import businessPlan from '../../../assets/images/consultation/business-plan.png';
import PriceItem from '@/components/Price/PriceItem';
import ListItem from '@/components/ListItem';
import PricingCard from '@/components/Price/PricingCard';
import AccordionItem from '@/components/Accordion/AccordionItem';

const Consultation = () => {
    return (
        <PageWrapper
            header="Бизнес консультация по открытию кофейни в Киеве"
            classNames="max-w-2xl m-auto"
        >
            <div className="max-w-2xl m-auto">
                <p className="text-gray-700">
                    Вы задумываетесь об открытии своей кофейни, но не знаете, с чего
                    начать? Как сделать ее успешной? Наша команда вступает в игру,
                    предлагая вам индивидуальные консультации и поддержку на каждом
                    этапе.
                </p>
                <div className="flex flex-col my-3 lg:mt-5">
                    <Image
                        src={coffeeShopOwner1}
                        alt="coffee shop promotion"
                        sizes="100vw"
                        className="w-full h-auto rounded-custom"
                        priority
                    />
                </div>
                <div>
                    <h2 className="text-center">Кому подойдет наша консультация</h2>
                    <div className="text-gray-700 mt-3">
                        <ul>
                            <ListItem listType="ul">
                                <strong>Будущий владелец</strong>. У вас появиласть
                                идея открыть кофейню? Если вы цените вкус кофе и
                                видите себя в роли хозяина уютного заведения, то это
                                идеальный шанс реализовать свои амбиции. Управляйте
                                бизнесом от начала до конца и наслаждайтесь хорошей
                                прибылью.
                            </ListItem>
                            <ListItem listType="ul">
                                <strong>Предпрениматель</strong>. Кофейный бизнес
                                считается одним и самых быстро окупаемых. У вас уже
                                есть свой бизнес, капитал, но вы ищете новые
                                возможности для развития? Кофейный бизнес – отличный
                                вариант для расширения и увеличения прибыли.
                            </ListItem>
                            <ListItem listType="ul">
                                <strong>Инвестор</strong>. Инвестирование в кофейный
                                бизнес может быть выгодным решением для получение
                                пасивного дохода. Кофейня, как стабильный и постоянно
                                развивающейся вид деятельности. Рассмотрите
                                возможность инвестирования в открытие новой кофейни
                                или в развитие существующего бизнеса.
                            </ListItem>
                            <ListItem listType="ul">
                                <strong>Опытный бариста</strong>. Если вы являетесь
                                опытным бариста и мечтаете о собственной кофейне, это
                                предложение для вас. Ваш опыт и знания в области
                                кофейного дела могут стать отличным стартовым
                                капиталом. Откройте свою кофейню, где сможете
                                воплотить свои идеи.
                            </ListItem>
                        </ul>
                    </div>
                    <div className="flex flex-col my-3 lg:mt-5">
                        <Image
                            src={coffeeShopOwner}
                            alt="coffee shop promotion"
                            sizes="100vw"
                            className="w-full h-auto rounded-custom"
                        />
                    </div>
                    <h2 className="text-center">
                        Что включает консультация по открытию кофейни?
                    </h2>
                    <div className="text-gray-700 mt-3">
                        <ol>
                            <ListItem listType="ol">
                                <strong>Ваша идея</strong>. Первый шаг, мы выслушаем
                                вас, вашу идею, пожелание, знание. После
                                проанализируем все информацию и подберем
                                индивидуальный подход.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Бизнес план</strong>. На этом этапе мы
                                приступаем к разработке бизнес-плана, который
                                включает первоначальные расходы и доходы. Наша цель —
                                обеспечить вас надежной информацией для успешного
                                старта вашего кофейного бизнеса.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Выбор локации</strong>. Эффективность вашего
                                бизнеса зависит от правильного выбора места. Наши
                                консультанты помогут вам анализировать потенциальные
                                локации, оценивать трафик и выбирать оптимальное
                                местоположение для вашей кофейни.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Маркетинг</strong>. Разработка маркетинговой
                                стратегии для вашей кофейни — важный шаг. Мы
                                предоставим вам инструменты и рекомендации для
                                привлечения клиентов, создания бренда и поддержания
                                высокого уровня узнаваемости.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Поставщики</strong>. Выбор надежных
                                поставщиков сырья и оборудования является залогом
                                успешной работы кофейни. Мы подскажем, как выбрать
                                качественных поставщиков и договориться о выгодных
                                условиях сотрудничества.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Регистрация бизнеса</strong>. Оформление всех
                                необходимых документов для регистрации вашего
                                кофейного бизнеса. Мы предоставим вам подробные
                                инструкции и поддержим вас на каждом этапе этого
                                важного процесса.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Оборудование</strong>. Советы по выбору и
                                покупке необходимого оборудования для кофейни. Мы
                                поможем определиться с техническими характеристиками,
                                бюджетом и поставщиками оборудования.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Как выбрать персонал</strong>. Рекомендации
                                по подбору и обучению персонала. Мы поможем вам
                                создать эффективную команду, способную обеспечивать
                                высокий уровень обслуживания.
                            </ListItem>
                            <ListItem listType="ol">
                                <strong>Составление меню</strong>. Разработка
                                разнообразного и привлекательного меню. Мы предложим
                                стратегии формирования ассортимента, учтем пожелания
                                целевой аудитории и конкурентные преимущества.
                            </ListItem>
                        </ol>
                        <div className="flex flex-col my-3 lg:mt-5">
                            <Image
                                src={businessPlan}
                                alt="coffee shop promotion"
                                sizes="100vw"
                                className="w-full h-auto rounded-custom"
                            />
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
                    <h2 className="text-center mt-3">Тарифы на консультацию</h2>
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
                            <ListItem listType="ol">
                                <strong>Открываете кофейню</strong>. Мы - молодая
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
