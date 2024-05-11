import { Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { Router, RouterLink, RouterModule,RouterLinkActive } from '@angular/router';
import { ProductsComponent } from '../../products/products.component';


@Component({
  selector: 'app-header',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink,RouterModule,RouterLinkActive,NgIf, CommonModule],
=======
  imports: [RouterLink,RouterModule,RouterLinkActive,NgIf, CommonModule,ProductsComponent],
>>>>>>> 559d04fb5bfce847840ff3936f3a2f4d6cf188d6
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(){}
}
