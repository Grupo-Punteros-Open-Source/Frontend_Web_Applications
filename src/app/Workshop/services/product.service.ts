import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.entity';
import { BaseService } from '../../shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/products';
  }
}