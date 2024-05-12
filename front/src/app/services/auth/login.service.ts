// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login.request';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  methodlogin(credentials: LoginRequest){
    console.log(credentials);
  }
}
