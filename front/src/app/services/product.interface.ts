export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    discount?: number;
    stock: number;
    image?: string;
    pages?: number;
    format?: string;
    weight?: string;
    isbn?: string;
    calification?: number;
    category: number;
  }