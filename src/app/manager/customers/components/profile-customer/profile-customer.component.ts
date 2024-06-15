import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {Location} from "@angular/common";
import {Customer} from "../../../model/customer.entity";

@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})
export class ProfileCustomerComponent implements OnInit {
  customer: Customer = {} as Customer;
  isEditing = false;

  constructor(private router: Router,private route: ActivatedRoute, private customerService: CustomerService, private location: Location) { }

  ngOnInit(): void {
    const customerId = Number(this.route.snapshot.paramMap.get('clientId') ?? '0');

    console.log(customerId);

    this.customerService.getById(customerId).subscribe((customer: Customer) => {
      this.customer = customer;
    });
  }

  onEdit(): void {
    this.isEditing = true;
  }

  onCancel(): void {
    this.location.back();
  }

  onSave(): void {
    this.customerService.update(this.customer.id, this.customer).subscribe(() => {
      this.isEditing = false;
    });
  }

  onSubmit(field: string, newValue: string): void {
    switch (field) {
      case 'name':
        this.customer.name = newValue;
        break;
      case 'phone':
        this.customer.phone = newValue;
        break;
      case 'email':
        this.customer.email = newValue;
        break;
      case 'address':
        this.customer.address = newValue;
        break;
    }
    this.customerService.update(this.customer.id, this.customer).subscribe();
  }

  delete(clientId: string): void {
    this.router.navigate(['/workshop/customers/profile/delete',clientId]);
  }

  toVehicleList(): void {
    this.router.navigate([`/workshop/customer/${this.customer.id}/vehicle-list`]);
  }

}

