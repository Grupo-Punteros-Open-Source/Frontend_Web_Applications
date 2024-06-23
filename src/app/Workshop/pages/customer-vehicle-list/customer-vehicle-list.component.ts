import { Component } from '@angular/core';
import {UserService} from "../../../User/services/user.service";
import {User} from "../../../User/model/user.entity";
import { Router,ActivatedRoute } from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-customer-vehicle-list',
  templateUrl: './customer-vehicle-list.component.html',
  styleUrl: './customer-vehicle-list.component.css'
})
export class CustomerVehicleListComponent {

  user: User = {} as User;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private location: Location) {
    this.getUser();
  }

  Back(): void {
    this.location.back();
  }

  getUser() {
    const userId = Number(this.route.snapshot.paramMap.get('userId') ?? '0');
    this.userService.getById(userId).subscribe((response: User) => {
      this.user = response;
    });
  }

}
