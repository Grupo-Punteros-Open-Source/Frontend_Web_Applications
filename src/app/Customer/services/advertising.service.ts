import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/base.service";
import {Advertising} from "../model/advertising.entity";


@Injectable({
  providedIn: 'root'
})
export class AdvertisingService extends BaseService<Advertising>{
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/advertising';
  }
}
