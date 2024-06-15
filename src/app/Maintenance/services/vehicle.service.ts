import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import {Vehicle} from "../model/vehicle.entitty";

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends BaseService<Vehicle> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/vehicles';
  }
}
