import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from '../model/service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServicePlans {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:6868/services";
  }

  getBaseUrlById(id: string): string {
    return this.baseUrl + "/" + id;
  }

  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + "/" + field + "/" + value;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  getAllServices(): Observable<Service[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }

  searchServices(field: string, value: string): Observable<Service[]> {
    return this.http.get(this.getSearchUrl(field,value)).pipe(
      map(data => data.json())
    );
  }
  saveUser(id):Observable<User>{
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }
  getServiceById(id: string): Observable<Service> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }

  

  

}
