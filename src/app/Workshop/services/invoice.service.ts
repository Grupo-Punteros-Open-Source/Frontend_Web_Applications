import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import {Invoice} from "../model/invoice.entity";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseService<Invoice> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/invoices';
  }
}