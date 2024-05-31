import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(id: number):Observable<User>
  { 
    return this.http.get<User>(`https://reqres.in/api/users/2`);
  }

  updateUser(user:User):Observable<any>
  {
    return this.http.put(`https://reqres.in/api/users/2`, user);	
  }
  

  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.error('Se ha producido un error', error.error);
    }else{
      console.error(`Backend retorno el código de estado: `, error.status, error.error);
    }
    return throwError(() => new Error('Algo salio mal, intente nuevamente'));
  }
}