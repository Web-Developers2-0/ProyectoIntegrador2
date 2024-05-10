import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
/*import { MarvelComponent } from './products/marvel/marvel.component';
import { DcComponent } from './products/dc/dc.component';
*/
export const routes: Routes = [
    //{path:"", redirectTo:"/home", pathMatch:"full"},
    {path:'app-products', component:ProductsComponent},
    /*{ path: '', redirectTo: '/products/marvel', pathMatch: 'full' },
    { path: 'app-products/marvel', component: MarvelComponent },
    { path: 'app-products/dc', component: DcComponent },*/

];



