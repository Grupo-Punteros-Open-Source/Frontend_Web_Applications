import { Component,OnInit } from '@angular/core';
import {UserService} from "../../../User/services/user.service";
import {CustomerService} from "../../../User/services/customer.service";
import {User} from "../../../User/model/user.entity";
import {Customer} from "../../../User/model/customer.entity";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css'
})
export class DeleteCustomerComponent implements OnInit{
  user: User = {} as User;
  customer: Customer = {} as Customer;
  userId: number = 0;
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location,
              private customerService: CustomerService) { }

  onCancel(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId') ?? '0');

    console.log(this.userId);

    this.userService.getById(this.userId).subscribe((customer: User) => {
      this.user = customer;
        this.customerService.getAll().subscribe((customers: any) => {
            const foundCustomer = customers.find((customer: Customer) => Number(customer.user_id) === Number(this.userId));
            if (foundCustomer) {
            this.customer = foundCustomer;
            }
        });
    });
  }

  deleteCustomer(): void {
    this.userService.getById(this.userId).subscribe((customer: User) => {
      this.user = customer;
      this.customerService.getAll().subscribe((customers: any) => {
        const foundCustomer = customers.find((customer: Customer) => Number(customer.user_id) === Number(this.userId));
        if (foundCustomer) {
          let updatedCustomer = {
            ...foundCustomer,
            workshop_id: 0
          };
          this.customerService.update(foundCustomer.id, updatedCustomer).subscribe(() => {
            this.location.back();
          });
        }
      });
    });
  }
}
