import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.interface';

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  get cartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addProductToCart(product: Product): void {
    const currentItems = this.cartItems;
    const existingItem = currentItems.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentItems.push({ product, quantity: 1 });
    }

    this.cartItemsSubject.next(currentItems);
  }

  updateQuantity(productId: number, change: number): void {
    const currentItems = this.cartItems;
    const item = currentItems.find(item => item.product.id === productId);

    if (item) {
      item.quantity += change;
      if (item.quantity < 1) {
        this.removeItem(productId);
      } else {
        this.cartItemsSubject.next(currentItems);
      }
    }
  }

  removeItem(productId: number): void {
    const currentItems = this.cartItems.filter(item => item.product.id !== productId);
    this.cartItemsSubject.next(currentItems);
  }
}