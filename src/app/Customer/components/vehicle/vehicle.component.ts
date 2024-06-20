import { Component, OnInit } from '@angular/core';
import { CustomerVehicleService } from "../../services/customer-vehicle.service";
import { CustomerVehicleEntity } from "../../model/customer-vehicle.entity";
import {Observer} from "rxjs";
import {User} from "../../../User/model/user.entity";
import {Customer} from "../../../User/model/customer.entity";
import {Maintenance} from "../../../Maintenance/model/maintenance";
import {Vehicle} from "../../../Maintenance/model/vehicle.entitty";
import {CustomerService} from "../../../User/services/customer.service";
import {MaintenanceService} from "../../../Maintenance/services/maintenance.service";
import {VehicleService} from "../../../Maintenance/services/vehicle.service";
import {UserService} from "../../../User/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  user: User = {} as User;
  customer: Customer = {} as Customer;
  maintenances: Maintenance[] = [];
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private router: Router) {
  }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getAll().subscribe((vehicles: any) => {
      this.vehicles = vehicles;
    });
  }
  viewMaintenance(id:number): void {
    this.router.navigate(['customer/maintenance', id]);
  }
}
