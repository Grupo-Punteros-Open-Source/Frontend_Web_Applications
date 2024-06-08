import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../../manager/model/customer.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../../manager/services/customer.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
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

}
