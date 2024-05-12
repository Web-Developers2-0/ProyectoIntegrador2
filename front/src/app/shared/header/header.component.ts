import { Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import { Router, RouterLink, RouterModule,RouterLinkActive } from '@angular/router';
import { ProductsComponent } from '../../products/products.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterLinkActive,NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(){}
}
