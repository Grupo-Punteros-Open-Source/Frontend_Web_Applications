import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {UserService} from "../../../User/services/user.service";
import {Customer} from "../../../User/model/customer.entity";
import {CustomerService} from "../../../User/services/customer.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userCustomer: Customer = {} as Customer;
  isEditing = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService ,
              private location: Location,
              private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getUserActive();

  }

  async getUserActive() {
    let userId = localStorage.getItem('user');

    if (userId) {
      let userid = JSON.parse(userId);
      console.log(userid);
      this.customerService.getAll().subscribe((data: any) => {
        this.userCustomer = data.find((customer: Customer) => Number(customer.user_id) == Number(userid));
        console.log(this.userCustomer);

      });

    }

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

}
