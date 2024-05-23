import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../services/customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../../model/customer.entity";
import {Workshop} from '../../../model/workshop.entity';
import {WorkshopService} from "../../../services/workshop.service";

@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrl: './card-customer.component.css'
})
export class CardCustomerComponent implements OnInit {
  customers: Customer[] = [];
  workshop: Workshop[] = [];
  /*workshopById: { [id: number]: Workshop } = {};*/

  constructor(private customerService: CustomerService, private workshopService: WorkshopService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
    /*this.getWorkshop();*/
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe((response: any) => {
      this.customers = response;
      console.log(response);
    });
  }

  /*getWorkshop(): void {
    this.workshopService.getAll().subscribe((response: any) => {
      this.workshop = response;
      console.log(response);
      this.workshopById = this.workshop.reduce((acc, workshop) => ({ ...acc, [workshop.id]: workshop }), {});
    });
  }*/

  edit(clientId: string): void {
    this.router.navigate(['/workshop/customers/profile',clientId]);
  }
  delete(clientId: string): void {
    this.router.navigate(['/workshop/customers/profile/delete',clientId]);
  }
}

