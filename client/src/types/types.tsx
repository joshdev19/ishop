export type UserType = {
    id?: number;
    username: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    number?: number;
    address?: string;
    password: string;
    confirm_password?: string;
}

export type ProductsType = {
    id?: number;
    title: string;
    description: string;
    price: number;
    category?: string;
    image: string;
}