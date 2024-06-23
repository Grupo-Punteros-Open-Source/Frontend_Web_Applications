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
  maintenance: Maintenance = {} as Maintenance;
  vehicles: Vehicle[] = [];
  selectedVehicle: Vehicle = {} as Vehicle;

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
    const selectedVehicleId = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.getById(selectedVehicleId).subscribe(vehicle => {
      this.selectedVehicle = vehicle;
      this.maintenanceService.getAll().subscribe((maintenances:any) => {
        this.maintenance = maintenances.find((maintenance: Maintenance) => maintenance.vehicle_id === selectedVehicleId);
      });
    });
  }
}