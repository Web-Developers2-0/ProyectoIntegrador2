import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    //{path:"", redirectTo:"/home", pathMatch:"full"},
    {path:'app-products', component:ProductsComponent},
    { path: '', redirectTo: '/products/marvel', pathMatch: 'full' },
    { path: 'app-products/:category', component: ProductsComponent }
];



