import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../model/vehicle.entity';
import { BaseService } from '../../shared/base.service';
import {catchError, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends BaseService<Vehicle> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/vehicles';
  }

  getVehiclesByCustomerId(id: any) {
    return this.http.get<VehicleService>(`${this.resourcePath()}?customerId=${id}`, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
}
