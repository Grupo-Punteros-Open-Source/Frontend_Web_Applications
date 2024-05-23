import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {Customer} from "../../../model/customer.entity";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe((response: any) => {
      this.customers = response;
    });
  }

}
