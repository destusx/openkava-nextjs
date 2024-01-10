import { ReactNode } from 'react';
import { BsCheckSquareFill } from 'react-icons/bs';

const PriceItem = ({ children }: { children: ReactNode }) => {
    return (
        <li className="mb-1 text-base leading-loose text-body-color relative">
            <BsCheckSquareFill className="absolute top-2 left-0 text-base-color" />
            <span className="mb-1 pl-6 text-base leading-loose text-body-color">
                {children}
            </span>
        </li>
    );
};

export default PriceItem;
