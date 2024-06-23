import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../User/services/customer.service";
import {WorkshopService} from "../../../User/services/workshop.service";
import {UserService} from "../../../User/services/user.service";
import {MaintenanceService} from "../../../Maintenance/services/maintenance.service";
import {Maintenance} from "../../../Maintenance/model/maintenance";
import {Customer} from "../../../User/model/customer.entity";
import {Workshop} from "../../../User/model/workshop.entity";
import {Router} from "@angular/router";
import {User} from "../../../User/model/user.entity";

@Component({
  selector: 'app-card-customer',
  templateUrl: './card-customer.component.html',
  styleUrl: './card-customer.component.css'
})
export class CardCustomerComponent implements OnInit {

  user: User = {} as User;
  workshop: Workshop = {} as Workshop;
  maintenance: Maintenance[] = [];
  customers: Customer[] = [];


  constructor(private customerService: CustomerService,
              private maintenanceService: MaintenanceService,
              private workshopService: WorkshopService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUserActive();

  }


  // Primero se consigue el user logueado

  async getUserActive(){
    let userId = localStorage.getItem('user');
    if (userId) {
      let userid = JSON.parse(userId);
      this.userService.getById(userid).subscribe((response: User) => {
        this.user = response;
        this.workshopService.getAll().subscribe((workshops: any) => {
          /*Conseguir el id del workshop mediante el userid*/
          this.workshop = workshops.find((workshop: Workshop) => Number(workshop.user_id) === Number(this.user.id));
          this.customerService.getAll().subscribe((response: any) => {
            this.customers = response.filter((customer: Customer) => Number(customer.workshop_id) === Number(this.workshop.id));
            console.log(this.customers);
          });
        });
      });
    }
  }


  onEdit(clientId: number): void {
    this.router.navigate(['/workshop/customers/profile',clientId]);
  }
  delete(clientId: number): void {
    this.router.navigate(['workshop/customers/delete-customer',clientId]);
  }
}

