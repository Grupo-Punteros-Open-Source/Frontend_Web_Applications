import { Component,OnInit } from '@angular/core';
import {UserService} from "../../../User/services/user.service";
import {User} from "../../../User/model/user.entity";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css'
})
export class DeleteCustomerComponent implements OnInit{
  user: User = {} as User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private location: Location) { }

  onCancel(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId') ?? '0');

    console.log(userId);

    this.userService.getById(userId).subscribe((customer: User) => {
      this.user = customer;
    });
  }
}
