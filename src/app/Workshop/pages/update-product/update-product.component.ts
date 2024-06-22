import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any;
  discount :number = 0;


  constructor(private productService: ProductService,private router: Router) {}

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      // @ts-ignore
      this.products = data;
      this.selectedProduct = {
        id: '0',
        name: '',
        quantity: 0,
        price: 0,
        description: '',
        image_url: '',
        workshopId: 0
      };
    });
  }

  onSelect(event: Event) {
    const element = event.target as HTMLSelectElement;
    const name = element.value;
    this.productService.getByName(name).subscribe(
        products => {
          if (products.length > 0) {

            this.selectedProduct = products[0];
          } else {
            console.error('No products found with that name');
          }
        },
        error => {
          console.error('Error fetching the product', error);
        }
    );
  }

  onSubmit() {
    if (this.selectedProduct && this.selectedProduct.id) {
      const discountAmount = this.selectedProduct.price * (this.discount / 100);
      const finalPrice = this.selectedProduct.price - discountAmount;
      this.selectedProduct.price = finalPrice;
      this.productService.getById(this.selectedProduct.id).subscribe(
          product => {
            if (product) {
              this.productService.update(this.selectedProduct.id, this.selectedProduct).subscribe(
                  response => {
                    console.log('Product updated', response);
                  },
                  error => {
                    console.error('Error updating the product', error);
                  }
              );
            } else {
              console.error('Product with that ID not found');
            }
          },
          error => {
            console.error('Error fetching the product by ID', error);
          }
      );
    } else {
      console.error('No product selected or missing ID');
    }
  }

  navigateToRegisterComponent(): void {
    this.router.navigate(['workshop/products/add-products']);
  }
}