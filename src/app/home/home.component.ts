import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../Model/Product/product';
import { SharingDataService } from '../sharing-data.service';
import * as productData from '../../assets/Data/products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = [];
  imagescc = [
   // '../../assets/images/H3.jpg',
    '../../assets/images/c2.jpg',
    '../../assets/images/c1.jpg',
    //'../../assets/images/H4.jpg',
  ];
  images = [
    // '../../assets/images/H3.jpg',
     '../../assets/images/c2.jpg',
     '../../assets/images/c1.jpg',
     //'../../assets/images/H4.jpg',
   ];
  constructor(
    private service: SharingDataService,
    private route: Router,
    config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    // $('a').removeClass('activeMenu');
    // $("#home").addClass('activeMenu');
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

    let count = 0;
    let ids = [];
    while (count != 6) {
      let random = this.getRandomValue(0, productData.data.length);
      if (!ids.includes(parseInt(random))) {
        ids.push(parseInt(random));
        this.products.push(
          productData.data.slice(parseInt(random), parseInt(random) + 1)[0]
        );
        count++;
      }
    }

    this.products.map((e: any) => {
      this.images.push(e['420Path'][0]);
    });
  }

  setData(data: any) {
    this.service.setProduct(data);
    this.route.navigateByUrl('products/details/' + data.id);
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }
}
