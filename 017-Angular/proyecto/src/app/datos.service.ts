import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }
    getData(): Observable<any> {
    return this.http.get<any>('http://192.168.1.50:8080/blog');
  }
}
