import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { OrdersService } from '../services/orders/orders.service';
import { OrderRequestBody } from '../services/orders/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [RouterLink, RouterModule, RouterLinkActive, NgIf, CommonModule],
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
      product: item.product.id_product,
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
        this.cartService.clearCart();
        // this.router.navigate(['/order-success']);
      },
      (error) => {
        console.error('Error al crear la orden:', error);
      }
    );
  }
}
