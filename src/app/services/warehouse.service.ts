import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Box } from '../models/box';
import { Product } from '../models/product';
import { ProductSearchResponse } from '../models/product-search-response';
import {catchError, map}from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private _url: string = "http://localhost:8080/warehouse/v1/";

  private _searchSubject: Subject<string> = new Subject<string>();

  search$: Observable<string> = this._searchSubject.asObservable();

  private headers_object = new HttpHeaders().append('Content-Type', 'application/json').append("Authorization", "Basic " + btoa("Demo:Demo123"));

  private httpOptions = {
    headers: this.headers_object
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  emitSearch(value: string) {
    this._searchSubject.next(value);
  }

  retrieveProductsList(productName: string): Observable<ProductSearchResponse[]> {
    const params = new HttpParams().set('productName', productName);
    this.httpOptions['params'] = params;
   
    return this.httpClient.get<any>(this._url+'product/getProducts', this.httpOptions).pipe(map(data => Object.assign([], data.warehouseSearchProductList)))
  }

  createBox(box: Box): Observable<any> {
    this.httpOptions['params'] = new HttpParams();
    return this.httpClient.post<any>(this._url+'box/createBox', box, this.httpOptions);
  }

  addProduct(product: Product): Observable<any> {
    this.httpOptions['params'] = new HttpParams();
     return this.httpClient.put<any>(this._url+'product/createProduct', product, this.httpOptions);
  }

  retrieveBoxDetails(): Observable<string[]> {
    this.httpOptions['params'] = new HttpParams();

     return this.httpClient.get<any>(this._url+'box/getAvailableBox', this.httpOptions).pipe(map(data => Object.assign([], data.warehouseAvailableBoxList)));
  }
}
