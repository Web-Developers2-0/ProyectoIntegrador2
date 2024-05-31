import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000/api/register/';  

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`https://reqres.in/api/users/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error', error.error);
    } else {
      console.error(`Backend retorno el código de estado: `, error.status, error.error);
    }
    return throwError(() => new Error('Algo salio mal, intente nuevamente'));
  }
}