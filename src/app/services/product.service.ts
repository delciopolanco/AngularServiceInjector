import { IProduct } from './../interfaces/product';
import { InvocationService } from './invocation.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private url: string;

  constructor(private invocationService: InvocationService) {
    this.url = 'http://www.json-generator.com/api/json/get/bUmiUPaIMO?indent=2';
  }

  getProducts(): Observable<IProduct[]> {
    return this.invocationService.invokeBackendService(this.invocationService.GET, this.url);
  }

  saveProduct(product: IProduct): Observable<IProduct> {
    return this.invocationService.invokeBackendService(this.invocationService.POST, this.url, product);
  }

}
