import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../services/product.interface';
import { OrderService } from '../services/order.service';
import { Order, OrderItem } from '../services/order.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  selectedCategory: string = 'marvel';
  selectedProducts: any[] = [];

  constructor(private productServiceService: ProductServiceService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.updateCategory(this.selectedCategory);
  }

  updateCategory(category: string): void {
    this.selectedCategory = category;
    this.productServiceService.obtenerProductos().subscribe(
      (products: Product[]) => {
        this.productList = products.filter(product => product.category === this.getCategoryId(this.selectedCategory));
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  getCategoryId(category: string): number {
    switch (category) {
      case 'marvel':
        return 1; // Asume que la categoría 'marvel' tiene el ID 1
      case 'dc':
        return 2; // Asume que la categoría 'dc' tiene el ID 2
      default:
        return 0;
    }
  }

  addProduct(product: any, quantity: number) {
    if (quantity > 0) {
      this.selectedProducts.push({ product, quantity });
      console.log('Producto añadido:', { product, quantity });
    }
  }

  createOrder() {
    const orderItems: OrderItem[] = this.selectedProducts.map(selectedProduct => ({
      product: selectedProduct.product.id,
      quantity: selectedProduct.quantity
    }));

    const order: Order = {
      order_items: orderItems,
      state: 'in_progress',
      order_date: new Date().toISOString().split('T')[0],
      payment_method: 'credit_card',
      shipping_method: 'express',
      payment_status: 'pagado',
      total_amount: this.calculateTotalAmount()
    };

    this.orderService.createOrder(order).subscribe(
      (response) => {
        console.log('Orden creada:', response);
      },
      (error) => {
        console.error('Error creando la orden', error);
      }
    );
  }

  calculateTotalAmount(): string {
    let total = 0;
    this.selectedProducts.forEach(selectedProduct => {
      total += parseFloat(selectedProduct.product.price) * selectedProduct.quantity;
    });
    return total.toFixed(2);
  }
}
