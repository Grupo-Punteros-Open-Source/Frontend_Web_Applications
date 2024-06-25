import { Component } from '@angular/core';
import {CustomerService} from "../../../User/services/customer.service";
import {Customer} from "../../../User/model/customer.entity";
import { Router,ActivatedRoute } from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-customer-vehicle-list',
  templateUrl: './customer-vehicle-list.component.html',
  styleUrl: './customer-vehicle-list.component.css'
})
export class CustomerVehicleListComponent {

  customer: Customer = {} as Customer;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private customerService: CustomerService,
              private location: Location) {
    this.getUser();
  }

  Back(): void {
    this.location.back();
  }

  getUser() {
    const userId = Number(this.route.snapshot.paramMap.get('userId') ?? '0');
    this.customerService.getAll().subscribe((data: any) => {
        this.customer = data.find((customer: Customer) => Number(customer.user_id) === Number(userId));
    });
  }

}
