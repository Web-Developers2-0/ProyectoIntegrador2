export interface User {
    id?: number;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    address: string;
    password: string;
    confirmPassword?: string;
}