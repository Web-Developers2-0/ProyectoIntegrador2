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


export class ProductsComponent  {
  /*selectedCategory: string = 'marvel';*/
  productList:any
  selectedCategory: string = 'marvel';
  constructor (private ProductServiceService:ProductServiceService) { 
    console.log(" obtengo productos")
  this.productList= ProductServiceService.obtenerProductos()
  }

getFilteredProducts(): void {
  console.log("me filtro")
    this.productList.filter((product: { category: string; }) => product.category === this.selectedCategory);
  }
  f: any/*ilterProductsByCategory(category: string): void {
    console.log("me filtro por categoria")
   this.productList = this.productList.filter((product: { category: string; }) => product.category === category);
}
*/
filterByCategory(category: string) {
  let filteredProducts = this.productList.filter((product: { category: string; }) => product.category === category);
  console.log(filteredProducts);
}

  
  /*  filterProductsByCategory(category: string): any[] {
    this.selectedCategory = 'category' || 'marvel'
    return this.productList.filter(this.productList = this.productList.category === category);
  }*/
  updateCategory(category: string): void {
    this.selectedCategory = category;
    console.log("me actualizo");
    this.productList = this.productList.filter((product: { category: string; }) => product.category === this.selectedCategory);
}

  

  redirectToDetail(detailPath: string): void {
    window.location.href = detailPath;
  }
}
  /*ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'] || 'marvel';
      // Filtra los productos por la categoría seleccionada
      this.products = this.filterProductsByCategory(this.selectedCategory);
    });
  }

  

  redirectToDetail(detailPath: string): void {
    window.location.href = detailPath;
  }

}*/