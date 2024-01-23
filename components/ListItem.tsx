import { ReactNode } from 'react';
import { CgRadioCheck } from 'react-icons/cg';

interface IListItem {
    children: ReactNode;
    listType: 'ol' | 'ul';
}

const ListItem = ({ children, listType }: IListItem) => {
    let content: React.ReactNode;
    if (listType === 'ul') {
        content = (
            <>
                <CgRadioCheck className="absolute top-2 left-0 text-base-color" />
                <span className="mb-1 pl-6 text-base leading-loose text-body-color">
                    {children}
                </span>
            </>
        );
    } else {
        content = (
            <span className="mb-1 text-base leading-loose text-body-color">
                {children}
            </span>
        );
    }

    return (
        <li className="mb-1 text-base leading-loose text-body-color relative">
            {content}
        </li>
    );
};

export default ListItem;
