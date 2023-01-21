import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Model/Product/product';
import { SharingDataService } from '../sharing-data.service';
// import PhotoViewer from 'photoviewer';
// import * as $ from 'jquery';
import * as productData from '../../assets/Data/products.json';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  relatedProducts: any;
  selectedImage = '';
  current = 0;
  images = [];
  //  [
  //   '../../assets/images/p-1.png',
  //   '../../assets/images/p-2.png',
  //   '../../assets/images/p-3.png',
  //   // '../../assets/images/p-1.png',
  //   // '../../assets/images/p-2.png',
  //   // '../../assets/images/p-3.png',
  // ];

  relatedImages = [];
  // [
  //   '../../assets/images/p2-1.png',
  //   '../../assets/images/p3-1.png',
  //   '../../assets/images/p4-1.png',
  //   '../../assets/images/p2-1.png',
  //   '../../assets/images/p3-1.png',
  //   '../../assets/images/p4-1.png',
  //   '../../assets/images/p2-1.png',
  //   '../../assets/images/p3-1.png',
  //   '../../assets/images/p4-1.png',
  // ];

  constructor(
    private service: SharingDataService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params.id;
    this.product = productData.data.filter((e: any) => e.id == id);
    this.images = this.product[0]['path'];
    this.selectedImage = this.images[0];
    this.relatedProducts = productData.data.filter(
      (e: any) =>
        e.category == this.product[0].category && e.id != this.product[0].id
    );

    // this.product = this.service.getData();
    // if(!this.product){
    //   this.route.navigateByUrl('products');
    // }
  }

  changeImage(id: any) {
    this.selectedImage = this.images[id];
    this.current = id;
  }

  setData(data: any) {
    debugger;
    this.product = [data];
    this.images = this.product[0].path;
    this.selectedImage = this.images[0];
    this.relatedProducts = productData.data.filter(
      (e: any) =>
        e.category == this.product[0].category && e.id != this.product[0].id
    );
    window.scrollTo(0, 0);
  }

  // openImageViewer() {
  //   let imgList = [];
  //   let options = {
  //     index: this.current,
  //     initMaximized: true,
  //   };
  //   this.images.forEach((e: any) => {
  //     imgList.push({ src: e, title: this.product[0].productName });
  //   });
  //   new PhotoViewer(imgList, options);
  // }
}
