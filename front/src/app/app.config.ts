import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    
    importProvidersFrom(BrowserModule, FormsModule, HttpClientModule),
    
  ]
};
