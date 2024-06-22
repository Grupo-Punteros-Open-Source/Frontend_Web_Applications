import { Component } from '@angular/core';
import {User} from "../../../User/model/user.entity";
import {UserService} from "../../../User/services/user.service";

@Component({
  selector: 'app-profile-workshop',
  templateUrl: './profile-workshop.component.html',
  styleUrl: './profile-workshop.component.css'
})
export class ProfileWorkshopComponent {

  user: User = {} as User;


  constructor(private userService: UserService) {
    this.getUserActive();
  }

  // Recupera el id del user registrado

  async getUserActive() {
    let userId = localStorage.getItem('user');

    if (userId) {
      let userid = JSON.parse(userId);
      console.log(userid);
      this.userService.getById(Number(userid)).subscribe((response: User) => {
        this.user = response;


      });
    }
  }
}
