import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Customer} from "../../../User/model/customer.entity";
import {Location} from "@angular/common";
import {CustomerService} from "../../../User/services/customer.service";


@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})
export class ProfileCustomerComponent implements OnInit {
  userCustomer: Customer = {} as Customer;
  isEditing = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private customerService: CustomerService ,
              private location: Location) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId') ?? '0');

    this.customerService.getAll().subscribe((users: any) => {
      this.userCustomer = users.find((user: Customer) => Number(user.id) === Number(userId));
    });

  }

  onEdit(): void {
    this.isEditing = true;
  }

  onCancel(): void {
    this.location.back();
  }

  onSave(): void {
    this.customerService.update(this.userCustomer.id, this.userCustomer).subscribe(() => {
      this.isEditing = false;
    });
  }

  onSubmit(field: string, newValue: string): void {
    switch (field) {
      case 'name':
        this.userCustomer.name = newValue;
        break;
      case 'phone':
        this.userCustomer.phone = newValue;
        break;
      case 'email':
        this.userCustomer.email = newValue;
        break;
      case 'address':
        this.userCustomer.address = newValue;
        break;
    }
    this.customerService.update(this.userCustomer.id, this.userCustomer).subscribe();
  }

  delete(clientId: number): void {
    this.router.navigate(['/workshop/customers/delete-customer',clientId]);
  }

  toVehicleList(id: number): void {
    this.router.navigate([`/workshop/customers/vehicles`,id]);
  }

}

