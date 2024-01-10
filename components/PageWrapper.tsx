import { ElementType, ReactNode } from 'react';

interface PageWrapperProps {
    header: string;
    headingLevel?: ElementType;
    children: ReactNode;
}

const PageWrapper = ({
    header,
    children,
    headingLevel: Heading = 'h1',
}: PageWrapperProps) => {
    return (
        <section className="pt-4 pb-6 md:pt-12 md:pb-12">
            <div className="container">
                <Heading className="text-black text-center">{header}</Heading>
                {children}
            </div>
        </section>
    );
};

export default PageWrapper;
