import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductType } from '../types/product.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: ProductType[] = [];

  public constructor(private http: HttpClient) {}

  public getProducts(searchString?: string): Observable<ProductType[]> {
    let params: HttpParams = new HttpParams();
    if (searchString) {
      params = params.append('search', searchString);
    }
    return this.http.get<ProductType[]>('https://testologia.ru/tea', {
      params: params
    });
  }
}
