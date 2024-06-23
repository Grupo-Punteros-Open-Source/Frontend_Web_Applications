import {Component, OnInit} from '@angular/core';

import {AdvertisingService} from "../../services/advertising.service";

import {Advertising} from "../../model/advertising.entity";
import {Workshop} from "../../../User/model/workshop.entity";
import {WorkshopService} from "../../../User/services/workshop.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent  implements OnInit{
  workshop: Workshop = {} as Workshop;
  advertising: Advertising | undefined;

  constructor(
      private workshopService: WorkshopService,
      private advertisingService: AdvertisingService
  ) {}

  ngOnInit(): void {

    this.getAdvertisingById(1);
    this.workshopService.getAll().subscribe((response: any) => {
      this.workshop = response;
    });
  }


  getAdvertisingById(id: number) {
    this.advertisingService.getById(id).subscribe(data => {
      this.advertising = data;
    }, error => {
      console.error('Error in obtaining advertising data:', error);
    });
  }
}
