import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';


const BASE_URL = environment.FIRE_BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class RequestBaseService {

  constructor(
    private http: HttpClient
  ) { }

  public httpGetCategory(path) {
    return this.http.get(`${BASE_URL}${path}`, {}).pipe(map(this.handleResponse));
  }

  public httpPostCategory(path: string, body: {}) {
    return this.http.post(`${BASE_URL}${path}`, body, {}).pipe(map(this.handleResponse));
  }

  public httpDeleteCategory(path:string){
    return this.http.delete(`${BASE_URL}${path}`,{}).pipe(map(this.handleResponse));
  }



  public httpPostProduct(path: string, body: {}) {
    return this.http.post(`${BASE_URL}${path}`, body, {}).pipe(map(this.handleResponse));
  }
  public httpPutProduct(path: string, body: {}) {
    return this.http.put(`${BASE_URL}${path}`, body, {}).pipe(map(this.handleResponse));
  }
  public httpDeleteProduct(path: string) {
    return this.http.put(`${BASE_URL}${path}`, {}).pipe(map(this.handleResponse));
  }
  public httpGetProduct(path: string) {
    return this.http.get(`${BASE_URL}${path}`, {}).pipe(map(this.handleResponse));
  }
  public httpGetSingleProduct(path: string) {
    return this.http.get(`${BASE_URL}${path}`, {}).pipe(map(this.handleResponse));
  }
  


  private handleResponse(res) {
    // if ('data' in res) {
    //   return res.data;
    // }
    // console.log('---request base---', res);
    return res;
  }

 

}
