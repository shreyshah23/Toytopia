import { Injectable } from '@angular/core';
import { Product } from './Model/Product/product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  product: Product;
  constructor() { }

  setProduct(data:any){
    this.product = data;
  }

  getData(){
    return this.product;
  }

}
