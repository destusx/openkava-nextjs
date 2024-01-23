import { ElementType, ReactNode } from 'react';

interface PageWrapperProps {
    header: string;
    headingLevel?: ElementType;
    children: ReactNode;
    classNames?: string;
}

const PageWrapper = ({
    header,
    children,
    headingLevel: Heading = 'h1',
    classNames,
}: PageWrapperProps) => {
    return (
        <section className="pt-4 pb-6 md:pt-12 md:pb-12">
            <div className="container">
                <Heading className={`text-black text-center ${classNames}`}>
                    {header}
                </Heading>
                {children}
            </div>
        </section>
    );
};

export default PageWrapper;
