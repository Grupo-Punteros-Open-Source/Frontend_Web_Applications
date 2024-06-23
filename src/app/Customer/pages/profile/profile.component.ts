import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";

import {Location} from "@angular/common";
import {UserService} from "../../../User/services/user.service";
import {User} from "../../../User/model/user.entity";
import {Workshop} from "../../../User/model/workshop.entity";
import {Maintenance} from "../../../Maintenance/model/maintenance";
import {Customer} from "../../../User/model/customer.entity";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;
  isEditing = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService ,
              private location: Location) {}

  ngOnInit(): void {
    this.getUserActive();

  }

  async getUserActive() {
    let userId = localStorage.getItem('user');

    if (userId) {
      let userid = JSON.parse(userId);
      console.log(userid);
      this.userService.getById(userid).subscribe((response: User) => {
        this.user = response;
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
    this.userService.update(this.user.id, this.user).subscribe();
  }

  toVehicleList(id: number): void {
    this.router.navigate([`/customers/vehicles`,id]);
  }

}
