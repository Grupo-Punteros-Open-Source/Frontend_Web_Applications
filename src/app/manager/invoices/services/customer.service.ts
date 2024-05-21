import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.entity';
import { BaseService } from '../../../shared/base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/customers';
  }
}
