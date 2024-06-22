import {Component, OnInit} from '@angular/core';

import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {Product} from "../../model/product.entity";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit{
  product: Product = {} as Product;
  discount: number = 0;
  constructor(private productService: ProductService, private location: Location,private router: Router) {}

  ngOnInit(): void {
  }

  calculateFinalPrice(): void {
    this.product.price = this.product.price - (this.product.price * this.discount / 100);
  }

  addProduct(): void {
    this.calculateFinalPrice();

    this.productService.create(this.product).subscribe(
        response => {
          console.log('Product added successfully', response);
          this.location.back();
        },
        error => {
          console.error('Error adding the product', error);
        }
    );
  }

  navigateToUpdateComponent(): void {
    this.router.navigate(['workshop/products/update-product']);
  }

}