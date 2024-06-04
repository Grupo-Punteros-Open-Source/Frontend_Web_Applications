import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer.entity";
import {VehicleService} from "../../../services/vehicle.service";
import {Vehicle} from "../../../model/vehicle.entity";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css'
})
export class VehicleCardComponent implements OnInit{
  @Input() clientId: any
  @Input() client: Customer
  vehicles: Vehicle[]

  constructor(private vehicleServer: VehicleService) {
    this.client = new Customer('', '', 0, '', '', '', '');
    this.vehicles = []
  }

  getVehicles(): void {
    this.vehicleServer.getVehiclesByCustomerId(this.clientId)
      .subscribe((res: any) => {
        this.vehicles = res;
        console.log(`Retrieving vehicle information for customer with id ${this.clientId}`);
    });
  }

  ngOnInit(): void {
    this.getVehicles();
  }

}
