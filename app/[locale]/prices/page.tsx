import PageWrapper from '@/components/PageWrapper';
import PriceItem from '@/components/Price/PriceItem';
import PricingCard from '@/components/Price/PricingCard';

const Pricing = () => {
    return (
        <PageWrapper header="Цены на наши услуги">
            <p className="text-base text-body-color mt-1 mx-auto mb-[60px] max-w-[510px] text-center">
                There are many variations of passages of Lorem Ipsum available but
                the majority have suffered alteration in some form.
            </p>
            <div className="flex flex-wrap justify-center md:-mx-4">
                <div className="flex flex-wrap md:-mx-4">
                    <PricingCard
                        type="Апгрейд"
                        price="$300"
                        description="Тариф для повышение дохода уже открытой кофейни"
                        buttonText="Подробней"
                    >
                        <PriceItem>Подготовленный бизнес-план</PriceItem>
                        <PriceItem>Консультации по выбору локации</PriceItem>
                        <PriceItem>Оценка потенциала рынка</PriceItem>
                        <PriceItem>Обзор конкурентов</PriceItem>
                        <PriceItem>Проверенные поставщики</PriceItem>
                        <PriceItem>Помощь в формировании меню</PriceItem>
                        <PriceItem>Обучение персонала</PriceItem>
                    </PricingCard>
                    <PricingCard
                        type="Базовый"
                        price="$500"
                        description="Базовый тариф для открытие кофейного бизнеса"
                        buttonText="Подробней"
                    >
                        <PriceItem>Подготовленный бизнес-план</PriceItem>
                        <PriceItem>Консультации по выбору локации</PriceItem>
                        <PriceItem>Оценка потенциала рынка</PriceItem>
                        <PriceItem>Обзор конкурентов</PriceItem>
                        <PriceItem>Проверенные поставщики</PriceItem>
                        <PriceItem>Помощь в формировании меню</PriceItem>
                        <PriceItem>Обучение персонала</PriceItem>
                    </PricingCard>
                    <PricingCard
                        type="Индивидуальный"
                        price="$800"
                        description="Индивидуальный тариф для открытие кофейного бизнеса"
                        buttonText="Подробней"
                    >
                        <PriceItem>Подготовленный бизнес-план</PriceItem>
                        <PriceItem>Консультации по выбору локации</PriceItem>
                        <PriceItem>Оценка потенциала рынка</PriceItem>
                        <PriceItem>Обзор конкурентов</PriceItem>
                        <PriceItem>Проверенные поставщики</PriceItem>
                        <PriceItem>Помощь в формировании меню</PriceItem>
                        <PriceItem>Обучение персонала</PriceItem>
                    </PricingCard>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Pricing;
