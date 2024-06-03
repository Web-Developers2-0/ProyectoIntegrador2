import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    
    importProvidersFrom(BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule), provideAnimationsAsync('noop'),
    
  ]
};
