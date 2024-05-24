import { Component } from '@angular/core';
import {ProductService} from "../../../services/services/product.service";
import {Router} from "@angular/router";

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
  viewDetails(productId: string): void {
    this.router.navigate(['workshop/products/product-detail', productId]);
  }
  obtenerProductosConBajoStock(): string[] {
    return this.products
        .filter(product => product.quantity < 30)
        .map(product => product.name);
  }
}
