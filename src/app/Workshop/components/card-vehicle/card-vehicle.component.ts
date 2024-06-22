import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {CustomerService} from "../../../User/services/customer.service";
import {MaintenanceService} from "../../../Maintenance/services/maintenance.service";
import {VehicleService} from "../../../Maintenance/services/vehicle.service";
import {UserService} from "../../../User/services/user.service";
import {Customer} from "../../../User/model/customer.entity";
import {Maintenance} from "../../../Maintenance/model/maintenance";
import {Vehicle} from "../../../Maintenance/model/vehicle.entitty";
import {User} from "../../../User/model/user.entity";


@Component({
  selector: 'app-card-vehicle',
  templateUrl: './card-vehicle.component.html',
  styleUrl: './card-vehicle.component.css'
})
export class CardVehicleComponent implements OnInit{
  user: User = {} as User;
  customer: Customer = {} as Customer;
  maintenances: Maintenance[] = [];
  vehicles: Vehicle[] = [];

  constructor(private customerService: CustomerService,
              private maintenanceService: MaintenanceService,
              private vehicleService: VehicleService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit(): void {
    this.getVehicles();
  }



  getVehicles () {
    const userId = Number(this.route.snapshot.paramMap.get('userId') ?? '0');
    console.log(userId);
    this.userService.getById(userId).subscribe((response: User) => {
      this.user = response;
        this.customerService.getAll().subscribe((response: any) => {
          this.customer = response.find((customer: Customer) => Number(customer.user_id) === Number(this.user.id));
          console.log(this.customer.id);
          this.vehicleService.getAll().subscribe((response: any) => {
            this.vehicles = response.filter((vehicle : Vehicle) => Number(vehicle.customer_id) === Number(this.customer.id));
            console.log(this.vehicles);
          });
        });
    });
  }







}
