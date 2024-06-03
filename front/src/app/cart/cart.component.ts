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
export class CartComponent {
      
    
}                    


