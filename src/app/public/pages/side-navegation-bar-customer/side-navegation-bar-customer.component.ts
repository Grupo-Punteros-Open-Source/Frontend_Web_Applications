import { Component } from '@angular/core';
import {Customer} from "../../../manager/model/customer.entity";
import {CustomerService} from "../../../manager/services/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-navegation-bar-customer',
  templateUrl: './side-navegation-bar-customer.component.html',
  styleUrl: './side-navegation-bar-customer.component.css'
})
export class SideNavegationBarCustomerComponent {

  options = [
    {path: 'customers/menu', title: 'Home', icon: 'home'},
    {path: 'customers/profile/:id', title: 'Profile', icon: 'person'},
  ]

  customer: Customer = {} as Customer;

  constructor(private customerService: CustomerService,
              private router: Router) {
    this.getCustomer();
  }

  getCustomer(): void {
    this.customerService.getById("1").subscribe((response: any) => {
      this.customer = response;
      console.log(response);

      const profileOption = this.options.find(option => option.title === 'Profile');
      if (profileOption) {
        profileOption.path = `customers/profile/${this.customer.id}`;
      }
    });
  }

}
