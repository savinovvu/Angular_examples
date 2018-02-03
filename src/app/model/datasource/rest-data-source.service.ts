import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../entities/product.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//for test httpClient angular-in-memory-web-api

export const REST_URL = new InjectionToken('rest_url');

@Injectable()
export class RestDataSource {

  constructor(private httpClient: HttpClient, @Inject(REST_URL) private url: string) {
  }

  getData(): Observable<Product[]> {
    let headers = this.getHeaders();
    return <Observable<Product[]>> this.httpClient.get(this.url, {headers})
      .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
  }

  saveProduct(product: Product): Observable<Product> {
    let headers = this.getHeaders();
    return this.httpClient.post(this.url, product, {headers})
      .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
  }

  updateProduct(product: Product): Observable<Product> {
    let headers = this.getHeaders();
    return this.httpClient.put(`${this.url}/${product.id}`, product, {headers})
      .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
  }

  deleteProduct(id: number): Observable<Product> {
    let headers = this.getHeaders();
    return this.httpClient.delete(`${this.url}/${id}`, {headers})
      .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
  }


  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .append('Access-Key', '<secret>')
      .append('Application-Name', 'exampleApp');
    return headers;
  }



}
