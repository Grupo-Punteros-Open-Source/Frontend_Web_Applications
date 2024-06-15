import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import { Workshop } from '../model/workshop.entity';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService extends BaseService<Workshop> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/workshops';
  }
}
