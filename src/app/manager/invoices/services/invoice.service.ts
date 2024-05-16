import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Invoice} from "../model/invoice.entity";
import {BaseService} from "../../../shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseService<Invoice> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/invoices';
  }
}
