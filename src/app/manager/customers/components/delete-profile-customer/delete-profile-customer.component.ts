import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer.entity";
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-delete-profile-customer',
  templateUrl: './delete-profile-customer.component.html',
  styleUrl: './delete-profile-customer.component.css'
})
export class DeleteProfileCustomerComponent implements OnInit{
  customer: Customer = {} as Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private location: Location) { }

  onCancel(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const customerId = Number(this.route.snapshot.paramMap.get('clientId') ?? '0');

    console.log(customerId);

    this.customerService.getById(customerId).subscribe((customer: Customer) => {
      this.customer = customer;
    });
  }
}
