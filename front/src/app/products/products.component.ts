import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../services/product.interface';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  selectedCategory: string = 'marvel';
  selectedProducts: Product[] = [];
  cartOpen: boolean = false;

  constructor(private productServiceService: ProductServiceService) {}

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
        return 1;
      case 'dc':
        return 2;
      default:
        return 0;
    }
  }

  addProduct(product: Product): void {
    this.selectedProducts.push({ ...product, quantity: 1 });
  }

  increaseQuantity(product: Product): void {
    product.quantity++;
  }

  decreaseQuantity(product: Product): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  removeProduct(selectedProduct: Product): void {
    this.selectedProducts = this.selectedProducts.filter(product => product !== selectedProduct);
  }

  getTotalProducts(): number {
    return this.selectedProducts.reduce((total, product) => total + product.quantity, 0);
  }
  toggleCart(): void {
    this.cartOpen = !this.cartOpen;
    if (!this.cartOpen) {
      this.selectedProducts = this.productList.filter(product => product.quantity > 0);
    }
  }

  checkout(): void {
    alert('Compra realizada con éxito!');
    // Aquí podrías agregar lógica adicional para procesar la compra
  }
}
