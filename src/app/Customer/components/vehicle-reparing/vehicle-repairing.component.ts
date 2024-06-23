import {Component, OnInit} from '@angular/core';
import {Maintenance} from "../../../Maintenance/model/maintenance";
import {Vehicle} from "../../../Maintenance/model/vehicle.entitty";
import {MaintenanceService} from "../../../Maintenance/services/maintenance.service";
import {VehicleService} from "../../../Maintenance/services/vehicle.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../User/model/user.entity";
import {Customer} from "../../../User/model/customer.entity";
import {CustomerService} from "../../../User/services/customer.service";
import {UserService} from "../../../User/services/user.service";

@Component({
  selector: 'app-vehicle-repairing',
  templateUrl: './vehicle-repairing.component.html',
  styleUrl: './vehicle-repairing.component.css'
})
export class VehicleRepairingComponent implements OnInit {

  user: User = {} as User;
  customer: Customer = {} as Customer;
  maintenances: Maintenance[] = [];
  vehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | undefined;

  constructor(private customerService: CustomerService,
              private maintenanceService: MaintenanceService,
              private vehicleService: VehicleService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    const user = JSON.parse(localStorage.getItem('user') as string);
    const userId = Number(user);
    this.userService.getById(userId).subscribe((response: User) => {
      this.user = response;
      this.customerService.getAll().subscribe((response: any) => {
        this.customer = response.find((customer: Customer) => Number(customer.user_id) === Number(this.user.id));
        console.log(this.customer);
        this.maintenanceService.getAll().subscribe((response: any) => {
          this.maintenances = response.filter((maintenance: Maintenance) => Number(maintenance.customer_id) === Number(this.customer.id));
          console.log(this.maintenances);
          this.vehicleService.getAll().subscribe((response: any) => {
            this.vehicles = response.filter((vehicle: Vehicle) =>
                this.maintenances.some((maintenance: Maintenance) => Number(maintenance.vehicle_id) === Number(vehicle.id))
            );
            console.log(this.vehicles);
            const selectedVehicleId = Number(this.route.snapshot.paramMap.get('id'));
            console.log(selectedVehicleId);
            this.selectedVehicle = this.vehicles.find(vehicle => vehicle.id === selectedVehicleId);
          });
        });
      });
    });
  }
}