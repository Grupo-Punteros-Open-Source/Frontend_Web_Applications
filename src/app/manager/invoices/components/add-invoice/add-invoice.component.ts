import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/services/customer.service';
import { VehicleService } from '../../../services/services/vehicle.service';
import { Customer } from '../../../model/model/customer.entity';
import { Vehicle } from '../../../model/model/vehicle.entity';
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  customers: Customer[] = [];
  vehicles: Vehicle[] = [];
  today: Date = new Date();
  randomWord: string;
  selectedCustomer: number = 0;
  selectedVehicle: Vehicle = {} as Vehicle;
  vehiclesById: { [id: number]: Vehicle } = {};
  services: any[] = [];

  constructor(private customerService: CustomerService, private vehicleService: VehicleService,
              private location: Location) {
    this.randomWord = this.generateRandomWord(8);
  }

  ngOnInit(): void {
    this.getCustomers();
    this.getVehicles();
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe((response: any) => {
      this.customers = response;
    });
  }

  getVehicles(): void {
    this.vehicleService.getAll().subscribe((response: any) => {
      this.vehicles = response;
      this.vehiclesById = this.vehicles.reduce((acc, vehicle) => ({ ...acc, [vehicle.id]: vehicle }), {});
    });
  }

  generateRandomWord(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  addService() {
    this.services.push({ name: '', description: '', price: 0 });
  }

  removeService(index: number) {
    this.services.splice(index, 1);
  }

  onCancel(): void {
    this.location.back();
  }

  onCustomerChange(): void {
    this.selectedVehicle = this.vehiclesById[this.selectedCustomer];
    console.log('Selected vehicle:', this.selectedVehicle);
  }

  onVehicleChange(): void {
  }
}
