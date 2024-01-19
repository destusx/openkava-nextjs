export interface IMenu {
    id: number;
    name: string;
    slug: string;
    title: string;
    description: string | null;
    subcategories: IMenuSubcategory[];
}

export interface IMenuSubcategory extends Omit<IMenu, 'subcategories'> {
    menuId: number;
}
