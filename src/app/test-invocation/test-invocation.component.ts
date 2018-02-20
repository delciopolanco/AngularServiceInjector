import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-test-invocation',
  templateUrl: './test-invocation.component.html',
  styleUrls: ['./test-invocation.component.css'],
  providers: [ProductService]
})
export class TestInvocationComponent {

  constructor(private productService: ProductService) { }


  getProducts(): void {
    this.productService.getProducts().subscribe(
      products => {
        console.log(products);
      }, error => {
        console.error(error);
      })
  }

  saveProduct(): void {
    this.productService.saveProduct({
      id: 3,
      name: 'Fulano',
      lastName: 'De tal'
    }).subscribe(
      products => {
        console.log(products);
      }, error => {
        console.error(error);
      })
  }

}
