import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {Location} from "@angular/common";
import {Customer} from "../../../model/customer.entity";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})
export class ProfileCustomerComponent implements OnInit {
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

  editing = false;

  onEdit(): void {
    this.editing = true;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.customerService.update(this.customer.id, this.customer).subscribe(() => {
        this.editing = false;
      });
    }
  }

}

