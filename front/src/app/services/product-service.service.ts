import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api/products/';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}



/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList: any[] = [];


  constructor() { }

  obtenerProductos()
  {
  this.productList = [
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
      image: "/assets/images/marvel-deadpool.jpg",
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
      image: "/assets/images/dc-batman.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Batman_Joker.html",
      category: "dc"
    },
    {
      id: 11,
      name: "Batman",
      price: "200.000",
      description: "Batman",
      image: "/assets/images/batmanBN1.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Batman.html",
      category: "dc"
    },
    {
      id: 12,
      name: "Batichica",
      price: "200.000",
      description: "Batichica",
      image: "/assets/images/dc-batgirl.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Batgirl_Rebirth.html",
      category: "dc"
    },
    {
      id: 13,
      name: "Liga de la Justicia",
      price: "200.000",
      description: "Liga de la Justicia",
      image: "/assets/images/dc-justiceLeague.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Justice_League.html",
      category: "dc"
    },
    {
      id: 14,
      name: "Batman",
      price: "200.000",
      description: "Batman",
      image: "/assets/images/dc-batmanyFlashjpg.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Batman_y_Flash.html",
      category: "dc"
    },
    {
      id: 15,
      name: "Mujer Maravilla",
      price: "200.000",
      description: "Mujer Maravilla",
      image: "/assets/images/dc-wonderWomen.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Superman_y_Wonderwoman.html",
      category: "dc"
    },
    {
      id: 16,
      name: "Flash",
      price: "200.000",
      description: "Flash",
      image: "/assets/images/dc-flash.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Flashpoint.html",
      category: "dc"
    },
    {
      id: 17,
      name: "Supergirl",
      price: "200.000",
      description: "Supergirl",
      image: "/assets/images/dc-superGirlpg.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Supergirl_Brainiac.html",
      category: "dc"
    },
    {
      id: 18,
      name: "Batman",
      price: "200.000",
      description: "Batman",
      image: "/assets/images/dc-supermanLast.jpg",
      detailPath: "detail_product_pages/Detalle_Comic_Superman_The_Last.html",
      category: "dc"
    },
  ]
  return this.productList;
  }
}

 */