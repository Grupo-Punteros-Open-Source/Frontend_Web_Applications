import { Component } from '@angular/core';
import {Workshop} from "../../../User/model/workshop.entity";
import {WorkshopService} from "../../../User/services/workshop.service";

@Component({
  selector: 'app-profile-workshop',
  templateUrl: './profile-workshop.component.html',
  styleUrl: './profile-workshop.component.css'
})
export class ProfileWorkshopComponent {

  workshop: Workshop = {} as Workshop;


  constructor(private workshopService: WorkshopService) {
    this.getUserActive();
  }

  // Recupera el id del user registrado

  async getUserActive() {
    let userId = localStorage.getItem('user');

    if (userId) {
      let userid = JSON.parse(userId);
      console.log(userid);
      this.workshopService.getAll().subscribe((workshops: any) => {
        this.workshop = workshops.find((workshop: Workshop) => Number(workshop.user_id) === Number(userid));
        console.log(this.workshop);
      });
    }
  }
}
