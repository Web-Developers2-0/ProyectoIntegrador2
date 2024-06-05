import { Component } from '@angular/core';
  import {CommonModule, NgIf} from '@angular/common';
  import { OnDestroy, OnInit} from '@angular/core';
  import { Router, RouterLink, RouterModule,RouterLinkActive } from '@angular/router';
  import { ProductsComponent } from '../products/products.component';
  import { CartService } from '../services/cart/cart.service';
  import { Order } from '../services/orders/order';
  import { OrderRequestBody } from '../services/orders/order';
  import { OrdersService } from '../services/orders/orders.service';
  
    
  @Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    standalone: true,
    imports: [RouterLink,RouterModule,RouterLinkActive,NgIf, CommonModule, ProductsComponent],
  })
  export class CartComponent implements OnInit {
    items = this.cartService.getItems();
  
    constructor(
      private cartService: CartService,
      private orderService: OrdersService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.items = this.cartService.getItems();
    }
  

  createOrder() {
    const orderItems = this.items.map(item => ({
      product: item.product,
      quantity: item.quantity
    }));
  
    console.log("Elementos del pedido:", orderItems);
  
    if (orderItems.length === 0) {
      console.error('No hay elementos en el carrito para crear una orden');
      return;
    }
  
    console.log('Iniciando creación de orden...', orderItems.length);
  
    this.orderService.createOrder(orderItems).subscribe(
      (order: any) => {
        console.log('Orden creada:', order);
        this.cartService.clearCart(); // Limpiar el carrito después de crear la orden
        // this.router.navigate(['/order-success']);
      },
      (error) => {
        console.error('Error al crear la orden:', error);
        console.log('Error status:', error.status);
        console.log('Error statusText:', error.statusText);
        console.log('Error message:', error.message);
        console.log('Error error:', error.error);
        console.log('Error headers:', error.headers);
      }
    );
  }}
