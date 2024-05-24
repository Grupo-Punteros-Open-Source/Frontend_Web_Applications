import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../../model/model/vehicle.entity';
import { BaseService } from '../../../shared/base.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Vehicle> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/inventory';
  }

}
