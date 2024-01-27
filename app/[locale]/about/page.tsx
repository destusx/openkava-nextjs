import Image from 'next/image';
import coffeeShop from '../../../assets/images/about/coffee-shop.jpg';
import PageWrapper from '@/components/PageWrapper';

const About = () => {
    return (
        <PageWrapper header="О нас">
            <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 mt-3 md:mt-9 gap-x-7">
                <div>
                    <h2 className="text-center md:text-left">
                        Молодная опытная команда
                    </h2>
                    <div className="text-gray-700 mt-3">
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни.
                        </p>
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни. Наш путь начался в августе 2021 года. Пару
                            молодых ребят без опыта в кофейном бизнесе задумались от
                            открытии кофейни.
                        </p>
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни.
                        </p>
                    </div>
                </div>
                <Image
                    className="rounded-custom h-full w-full object-cover"
                    src={coffeeShop}
                    sizes="100vw"
                    alt="coffee shop"
                    priority
                />
            </div>
            <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 mt-9 gap-x-7">
                <Image
                    className="rounded-custom h-full w-full object-cover order-last lg:order-first"
                    sizes="100vw"
                    src={coffeeShop}
                    alt="coffee shop"
                />
                <div>
                    <h2 className="text-center md:text-left">
                        Молодная опытная команда
                    </h2>
                    <div className="text-gray-700 mt-3">
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни.
                        </p>
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни. Наш путь начался в августе 2021 года. Пару
                            молодых ребят без опыта в кофейном бизнесе задумались от
                            открытии кофейни.
                        </p>
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 mt-9 gap-x-7">
                <div>
                    <h2 className="text-center md:text-left">
                        Молодная опытная команда
                    </h2>
                    <div className="text-gray-700 mt-3">
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни.
                        </p>
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни. Наш путь начался в августе 2021 года. Пару
                            молодых ребят без опыта в кофейном бизнесе задумались от
                            открытии кофейни.
                        </p>
                        <p>
                            Наш путь начался в августе 2021 года. Пару молодых ребят
                            без опыта в кофейном бизнесе задумались от открытии
                            кофейни.
                        </p>
                    </div>
                </div>
                <Image
                    className="rounded-custom h-full w-full object-cover"
                    sizes="100vw"
                    src={coffeeShop}
                    alt="coffee shop"
                />
            </div>
        </PageWrapper>
    );
};

export default About;
