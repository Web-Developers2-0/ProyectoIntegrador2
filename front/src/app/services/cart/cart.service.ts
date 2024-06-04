import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  constructor() {}


  addToCart(productId: number, quantity: number) {
    this.items.push({ product: productId, quantity });
    console.log("Producto añadido al carrito:", productId);
    console.log("Estado del carrito:", this.items);
  }
  
  getItems() {
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.product !== item.product);
  }

  clearCart() {
    this.items = [];
  }
}
