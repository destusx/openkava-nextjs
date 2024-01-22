import PageWrapper from '@/components/PageWrapper';
import PriceItem from '@/components/Price/PriceItem';
import PricingCard from '@/components/Price/PricingCard';

const BaristaPage = () => {
    return (
        <PageWrapper header="Курсы бариста в Киеве">
            <p className="text-base text-body-color mt-1 mx-auto mb-[60px] max-w-[510px] text-center">
                There are many variations of passages of Lorem Ipsum available but
                the majority have suffered alteration in some form.
            </p>
            <div className="flex flex-wrap justify-center md:-mx-4">
                <div className="flex flex-wrap md:gap-y-4 md:-mx-4 h-full">
                    <PricingCard
                        type="Базовый"
                        price="$500"
                        description="Базовая консультация для открытие кофейного бизнеса"
                        buttonText="Подробней"
                    >
                        <PriceItem>Подготовленный бизнес-план</PriceItem>
                        <PriceItem>Консультации по выбору локации</PriceItem>
                        <PriceItem>Оценка потенциала рынка</PriceItem>
                        <PriceItem>Проверенные поставщики</PriceItem>
                        <PriceItem>Помощь в формировании меню</PriceItem>
                        <PriceItem>Основы маркетинга и SMM</PriceItem>
                        <PriceItem>Поддержка 14 дней после консультации</PriceItem>
                    </PricingCard>
                    <PricingCard
                        type="Индивидуальный"
                        price="$800"
                        description="Индивидуальная консультация для открытие кофейного бизнеса"
                        buttonText="Подробней"
                    >
                        <PriceItem>Подготовленный бизнес-план</PriceItem>
                        <PriceItem>Консультации по выбору локации</PriceItem>
                        <PriceItem>Оценка потенциала рынка</PriceItem>
                        <PriceItem>Проверенные поставщики</PriceItem>
                        <PriceItem>Формировании меню</PriceItem>
                        <PriceItem>Основы маркетинга и SMM</PriceItem>
                        <PriceItem>Поддержка 30 дней после консультации</PriceItem>
                        <PriceItem>Начальный курс баристы</PriceItem>
                        <PriceItem>Выезд на осмотр помещение</PriceItem>
                        <PriceItem>Обзор конкурентов</PriceItem>
                    </PricingCard>
                    <PricingCard
                        type="Под ключ"
                        price="от $2000"
                        description="Профессиональное открытие кофейни под ключ"
                        buttonText="Подробней"
                    >
                        <PriceItem>Полное обучение владельца бизнеса</PriceItem>
                        <PriceItem>Включает все из тарифа Индивидуальный</PriceItem>
                        <PriceItem>Проверенные поставщики</PriceItem>
                        <PriceItem>Обучение персонала</PriceItem>
                        <PriceItem>Поддержка 60 дней после консультации</PriceItem>
                        <PriceItem>Базовый курс баристы</PriceItem>
                        <PriceItem>Выезд на осмотр помещение</PriceItem>
                        <PriceItem>Поиск помещение</PriceItem>
                    </PricingCard>
                </div>
            </div>
        </PageWrapper>
    );
};

export default BaristaPage;
