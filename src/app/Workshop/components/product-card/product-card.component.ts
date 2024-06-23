import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  products: any[] = [];
  mostrarNotificacion = true;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: any) => {
      this.products = data;

    });
  }
  cerrarNotificacion() {
    this.mostrarNotificacion = false;
  }

  obtenerProductosConBajoStock(): string[] {
    return this.products
        .filter(product => product.quantity < 30)
        .map(product => product.name);
  }
  viewDetails(id: string): void {
    this.router.navigate(['workshop/products/product-detail', id]);
  }
  navigateToRegisterComponent(): void {
    this.router.navigate(['workshop/products/add-products']);
  }
}