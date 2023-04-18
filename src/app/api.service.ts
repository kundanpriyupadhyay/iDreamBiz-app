import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from './employees';
import { Observable } from 'rxjs';

const restAPI = "https://dummy.restapiexample.com/api/v1";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  getAll() : Observable<any>{
    return this.http.get('https://dummy.restapiexample.com/api/v1/employees');
  }



}
