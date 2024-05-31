import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login.request';
import { Observable, BehaviorSubject, tap, catchError, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  currentUserLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>('');
  
  constructor(private http: HttpClient) { 
    this.currentUserLogin.next(localStorage.getItem('token') !== null);
    this.currentUserData.next(localStorage.getItem('token') || '');
  }

  methodlogin(credentials: LoginRequest):Observable<any>{
    
    return this.http.post<any>('http://localhost:8000/api/login/', credentials).pipe(
      
    tap((userData) => {
        localStorage.setItem('token', userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLogin.next(true);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  methodlogout(): void {
    localStorage.removeItem('token');
    this.currentUserLogin.next(false);
  }

  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.error('Se ha producido un error', error.error);
    }else{
      console.error(`Backend retorno el código de estado: `, error.status, error.error);
    }
    return throwError(() => new Error('Algo salio mal, intente nuevamente'));
  }

  get userData(): Observable<String> {
    return this.currentUserData.asObservable();
  }

  get userLogin(): Observable<boolean> {
    return this.currentUserLogin.asObservable();
  }
}