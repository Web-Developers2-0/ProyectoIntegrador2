export interface OrderItem {
    product: number;
    quantity: number;
  }
  
  export interface Order {
    order_items: OrderItem[];
    state?: string;
    order_date?: string;
    payment_method?: string;
    shipping_method?: string;
    payment_status?: string;
    total_amount?: string;
  }
  