import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../model/vehicle.entity';
import { BaseService } from '../../shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends BaseService<Vehicle> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/vehicles';
  }
}
