import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [

    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'app-products', component:ProductsComponent},



    { path: 'login', component:LoginComponent },
    { path: 'dashboard', component: DashboardComponent },

    {path:"", redirectTo:"/app-products", pathMatch:"full"},
    {path:'app-products', component:ProductsComponent},
   

    { path: 'register', component: SignupComponent}
];
