import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {HttpClient} from "@angular/common/http";
import {CustomerVehicleEntity} from "../model/customer-vehicle.entity";

@Injectable({
  providedIn: 'root'
})
export class CustomerVehicleService extends BaseService<CustomerVehicleEntity> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/vehicles';
  }
}
