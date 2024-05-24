import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/services/product.service";
import {Product} from "../../../model/model/product.entity";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit{
  product: Product = {} as Product;
    discount: number = 0;
  constructor(private productService: ProductService, private location: Location) {}

  ngOnInit(): void {
  }

  calculateFinalPrice(): void {
        // Calcula el precio final aplicando el descuento
        this.product.price = this.product.price - (this.product.price * this.discount / 100);
    }

    addProduct(): void {
        // Calcula el precio final antes de enviar
        this.calculateFinalPrice();

        // Llama al servicio para añadir el producto con el precio final
        this.productService.create(this.product).subscribe(
            response => {
                console.log('Producto añadido con éxito', response);
                this.location.back(); // Opcional: regresar a la página anterior después de añadir
            },
            error => {
                console.error('Error al añadir el producto', error);
            }
        );
    }
}
