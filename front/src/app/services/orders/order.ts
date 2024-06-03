export interface Order{
    id_order: number;
    user: string;
    state: string;
    order_date: number;
    payment_method: string;
    shipping_method: string;
    payment_status: string;
    total_amount: string;
    order_items: OrderITem[];
}

export interface OrderITem{
    id_order_items: number;
    product: string;
    quantity: number;
}