import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {UserService} from "../../../User/services/user.service";
import {Location} from "@angular/common";
import {User} from "../../../User/model/user.entity";


@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})
export class ProfileCustomerComponent implements OnInit {
  user: User = {} as User;
  isEditing = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService ,
              private location: Location) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId') ?? '0');

    this.userService.getById(userId).subscribe((users: User) => {
      this.user = users;
    });

  }

  onEdit(): void {
    this.isEditing = true;
  }

  onCancel(): void {
    this.location.back();
  }

  onSave(): void {
    this.userService.update(this.user.id, this.user).subscribe(() => {
      this.isEditing = false;
    });
  }

  onSubmit(field: string, newValue: string): void {
    switch (field) {
      case 'name':
        this.user.name = newValue;
        break;
      case 'phone':
        this.user.phone = newValue;
        break;
      case 'email':
        this.user.email = newValue;
        break;
      case 'address':
        this.user.address = newValue;
        break;
    }
    this.userService.update(Number(this.user.id), this.user).subscribe();
  }

  delete(clientId: number): void {
    this.router.navigate(['/workshop/customers/delete-customer',clientId]);
  }

  toVehicleList(id: number): void {
    this.router.navigate([`/workshop/customers/vehicles`,id]);
  }

}

