import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import {Maintenance} from "../model/maintenance";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService extends BaseService<Maintenance> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/maintenances';
  }
}
