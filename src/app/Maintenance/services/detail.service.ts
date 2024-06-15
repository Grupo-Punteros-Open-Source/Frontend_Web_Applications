import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import { Detail } from '../model/detail.entity';

@Injectable({
  providedIn: 'root'
})
export class DetailService extends BaseService<Detail> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/details';
  }
}
