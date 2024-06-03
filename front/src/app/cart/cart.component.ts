import { Component } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { OnDestroy, OnInit} from '@angular/core';
import { Router, RouterLink, RouterModule,RouterLinkActive } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { CartService } from '../services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [RouterLink,RouterModule,RouterLinkActive,NgIf, CommonModule, ProductsComponent],
})

export class CartComponent implements OnInit {
  cartItems = this.cartService.cartItems;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  increaseQuantity(productId: number): void {
    this.cartService.updateQuantity(productId, 1);
  }

  decreaseQuantity(productId: number): void {
    this.cartService.updateQuantity(productId, -1);
  }

  removeItem(productId: number): void {
    this.cartService.removeItem(productId);
  }

  isNumeric(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
  }

  getTotal(): number {
    return this.cartItems.reduce((total: number, item: any) => total + item.product.price * item.quantity, 0);
  }
}                    


