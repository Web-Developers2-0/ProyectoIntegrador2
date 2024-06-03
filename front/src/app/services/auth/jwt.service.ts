import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";


@Injectable({
    providedIn: 'root'
})

export class JwtService implements HttpInterceptor{

<<<<<<< HEAD
    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: String=this.loginService.userToken;

        if(token!="") {
            req=req.clone(
                {
                    setHeaders:{
                        'Content-Type': 'application/json',
=======
    constructor(private loginService:LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token:String=this.loginService.userToken;

        if (token!=""){
            req=req.clone(
                {
                    setHeaders: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Accept': 'application/json',
>>>>>>> d64e4c1350f3a2d173661f3ab185a374f9c451fd
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
        } 
        return next.handle(req);
    }
}