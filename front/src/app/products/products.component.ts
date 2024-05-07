import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent  {
  selectedCategory: string = 'marvel';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'] || 'marvel';
      // Filtra los productos por la categoría seleccionada
      this.products = this.filterProductsByCategory(this.selectedCategory);
    });
  }

  filterProductsByCategory(category: string): any[] {
    return this.products.filter(product => product.category === category);
  }

  redirectToDetail(detailPath: string): void {
    window.location.href = detailPath;
  }

  products= [
    {
      id: 1,
      name: "Marvel legacy",
      price: "120.000",
      description: "Marvel legacy",
      image: "/assets/images/marvel-ironMan.jpg",
      detailPath: "./detail_product_pages/Detalle_Comic_Ironman.html",
      category: "marvel"
    },
    {
      id: 2,
      name: "Fantastic Four",
      price: "150.000",
      description: "Fantastic Four",
      image: "/assets/images/marvel-avengers.jpg",
      detailPath: "./detail_product_pages/Detalle_Comic_Avengers.html",
      category: "marvel"
    },
    {
      id: 3,
      name: "Capitan America",
      price: "200.000",
      description: "Capitan America",
      image: "/assets/images/marvel-capitanAmerica.jpg",
      detailPath: "./detail_product_pages/Detalle_Comic_Capitan_America.html",
      category: "marvel"  
    },
    {
      id: 4,
      name: "Deadpool",
      price: "300.000",
      description: "Deadpool",
      image: "/assets/marvel-deadpool.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Dead_Pool.html",
      category: "marvel"
    },
    {
      id: 5,
      name: "Spiderman",
      price: "400.000",
      description: "Spiderman",
      image: "/assets/images/marvel-spiderman.jpg",
      detailPath: "./detail_product_pages/Detalle_Comic_Spiderman.html",
      category: "marvel" 
    },
    {
      id: 6,
      name: "Black Widow",
      price: "300.000",
      description: "Black Widow",
      image: "/assets/images/marvel-blackwidow.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Black_Widow.html",
      category: "marvel" 
    },
    {
      id: 7,
      name: "X-Men",
      price: "700.000",
      description: "X-Men",
      image: "/assets/images/marvel-xmen.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_X-Men.html",
      category: "marvel"
    },
    {
      id: 8,
      name: "Daredevil",
      price: "600.000",
      description: "Daredevil",
      image: "/assets/images/marvel-daredevil.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_DD.html",
      category: "marvel"
    },

    {
      id: 9,
      name: "The amazing Spiderman",
      price: "400.000",
      description: "The amazing Spiderman",
      image: "/assets/images/marvel-spiderman-amazing.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Stan_Lee_meets_Spiderman.html",
      category: "marvel"
    },
    {
      id: 10,
      name: "Batman",
      price: "200.000",
      description: "Batman",
      image: "./images/dc-batman.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Batman_Joker.html",
      category: "dc"
    },
    {
      id: 11,
      name: "Batman",
      price: "200.000",
      description: "Batman",
      image: "./images/batmanBN1.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Batman.html",
      category: "dc"
    },
    {
      id: 12,
      name: "Batichica",
      price: "200.000",
      description: "Batichica",
      image: "./images/dc-batgirl.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Batgirl_Rebirth.html",
      category: "dc"
    },
    {
      id: 13,
      name: "Liga de la Justicia",
      price: "200.000",
      description: "Liga de la Justicia",
      image: "./images/dc-justiceLeague.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Justice_League.html",
      category: "dc"
    },
    {
      id: 14,
      name: "Batman",
      price: "200.000",
      description: "Batman",
      image: "./images/dc-batmanyFlashjpg.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Batman_y_Flash.html",
      category: "dc"
    },
    {
      id: 15,
      name: "Mujer Maravilla",
      price: "200.000",
      description: "Mujer Maravilla",
      image: "./images/dc-wonderWomen.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Superman_y_Wonderwoman.html",
      category: "dc"
    },
    {
      id: 16,
      name: "Flash",
      price: "200.000",
      description: "Flash",
      image: "./images/dc-flash.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Flashpoint.html",
      category: "dc"
    },
    {
      id: 17,
      name: "Supergirl",
      price: "200.000",
      description: "Supergirl",
      image: "./images/dc-superGirlpg.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Supergirl_Brainiac.html",
      category: "dc"
    },
    {
      id: 18,
      name: "Batman",
      price: "200.000",
      description: "Batman",
      image: "./images/dc-supermanLast.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Superman_The_Last.html",
      category: "dc"
    },
  ]

}