import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../../Maintenance/services/vehicle.service';
import { AuthenticationService } from '../../../User/services/authentication.service';
import {CustomerVehicleEntity} from "../../model/customer-vehicle.entity";
import {Vehicle} from "../../../Maintenance/model/vehicle.entitty";
import {Maintenance} from "../../../Maintenance/model/maintenance";
import {Router} from "@angular/router";
import {User} from "../../../User/model/user.entity";
import {Workshop} from "../../../User/model/workshop.entity";
import {Customer} from "../../../User/model/customer.entity";
import {CustomerService} from "../../../User/services/customer.service";
import {MaintenanceService} from "../../../Maintenance/services/maintenance.service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];
  userId: number | null = null; // Variable para almacenar el ID del usuario
  maintenances: Maintenance = {} as Maintenance;
  customer: Customer = {} as Customer;

  constructor(
      private vehicleService: VehicleService,
      private authService: AuthenticationService,
      private router: Router,
      private customerService: CustomerService,
      private maintenancesService: MaintenanceService

  ) {}

  ngOnInit() {
    this.getUserActive();
  }

  async getUserActive(){
    let userId = localStorage.getItem('user');
    if (userId) {
      let userid = JSON.parse(userId);
      this.customerService.getAll().subscribe((response: any) => {
        this.customer = response.find((customer: Customer) => Number(customer.user_id) === Number(userid));
        this.vehicleService.getAll().subscribe((response: any) => {
          this.vehicles = response.filter((vehicle : Vehicle) => Number(vehicle.customer_id) === Number(this.customer.id));
          console.log(this.vehicles);

        });
      });

    }
  }

  viewMaintenance(id:number): void {
    console.log('viewMaintenance called with ID:', id);
    this.maintenancesService.getAll().subscribe((response: any) => {
      this.maintenances = response.find((maintenance: Maintenance) => Number(maintenance.vehicle_id) === Number(id));
      console.log(this.maintenances);
      if (!this.maintenances || this.maintenances.status === null) {
        console.log('Error: Maintenance status is null or does not exist');
        this.router.navigate(['customer/maintenance', id]);
      } else if (this.maintenances.status === 'pending') {
        this.router.navigate(['customer/vehicle', id]);
      }
    });
  }
}
