import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Model/Product/product';
import { SharingDataService } from '../sharing-data.service';
import * as productData from '../../assets/Data/products.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  selectedCategory: any = 'All';
  constructor(private service: SharingDataService, private route: Router) {}

  ngOnInit(): void {
    // this.products = [
    //   {
    //     id: 1,
    //     title: 'Title-1',
    //     imagePath: 'assets/images/product_01.jpg',
    //     shortDescription:
    //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    //     price: 18.25,
    //     ratings: 5,
    //     reviews: 12,
    //   },
    //   {
    //     id: 2,
    //     title: 'Title-2',
    //     imagePath: 'assets/images/product_02.jpg',
    //     shortDescription:
    //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    //     price: 16.75,
    //     ratings: 4,
    //     reviews: 24,
    //   },
    //   {
    //     id: 3,
    //     title: 'Title-3',
    //     imagePath: 'assets/images/product_03.jpg',
    //     shortDescription:
    //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    //     price: 32.5,
    //     ratings: 3,
    //     reviews: 36,
    //   },
    //   {
    //     id: 4,
    //     title: 'Title-4',
    //     imagePath: 'assets/images/product_04.jpg',
    //     shortDescription:
    //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    //     price: 24.6,
    //     ratings: 2,
    //     reviews: 48,
    //   },
    //   {
    //     id: 5,
    //     title: 'Title-5',
    //     imagePath: 'assets/images/product_05.jpg',
    //     shortDescription:
    //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    //     price: 18.75,
    //     ratings: 4,
    //     reviews: 60,
    //   },
    //   {
    //     id: 6,
    //     title: 'Title-6',
    //     imagePath: 'assets/images/product_06.jpg',
    //     shortDescription:
    //       'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
    //     price: 12.5,
    //     ratings: 5,
    //     reviews: 72,
    //   },
    // ];
    this.products = productData.data;
  }

  changeCategory(cat: any) {
    this.selectedCategory = cat;
    if (cat == 'All') this.products = productData.data;
    else this.products = productData.data.filter((e: any) => e.category == cat);
  }

  setData(data: any) {
    this.service.setProduct(data);
    this.route.navigateByUrl('products/details/' + data.id);
  }
}
