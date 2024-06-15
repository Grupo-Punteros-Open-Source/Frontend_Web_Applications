import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/base.service';
import { Customer } from '../model/customer.entity';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/customers';
  }
}
