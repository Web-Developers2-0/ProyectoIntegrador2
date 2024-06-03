import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

=======
import { LoginService } from './services/auth/login.service';
import { JwtService } from './services/auth/jwt.service';
>>>>>>> d64e4c1350f3a2d173661f3ab185a374f9c451fd



export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes),
    
    importProvidersFrom(BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule), provideAnimationsAsync('noop'),
    
  ]
};
=======
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule),
    LoginService,
    JwtService,
  ]
};
>>>>>>> d64e4c1350f3a2d173661f3ab185a374f9c451fd
