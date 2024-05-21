import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workshop } from '../../model/model/workshop.entity';
import {BaseService} from "../../../shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class WorkshopService extends BaseService<Workshop> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/workshop';
  }
}
