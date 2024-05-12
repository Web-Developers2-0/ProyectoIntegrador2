import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  productList: any[] = [];
  selectedCategory: string = 'marvel';

  constructor(private productServiceService: ProductServiceService) { 
    this.updateCategory(this.selectedCategory);
  }

  updateCategory(category: string): void {
    this.selectedCategory = category;
    console.log("me actualizo");
    this.productList = this.productServiceService.obtenerProductos().filter(product => product.category === this.selectedCategory);
  }
}