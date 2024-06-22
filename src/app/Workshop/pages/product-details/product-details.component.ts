import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Location} from "@angular/common";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productService.getById(productId).subscribe((data: any) => {
        this.product = data;
      });
    });
  }
  goBack(): void {
    this.location.back();
  }
}