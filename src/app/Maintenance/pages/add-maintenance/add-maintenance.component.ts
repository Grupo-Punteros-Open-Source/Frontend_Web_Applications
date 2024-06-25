import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MaintenanceService } from '../../services/maintenance.service';
import {UserService} from "../../../User/services/user.service";
import {CustomerService} from "../../../User/services/customer.service";
import {WorkshopService} from "../../../User/services/workshop.service";
import {VehicleService} from "../../services/vehicle.service";
import {Customer} from "../../../User/model/customer.entity";
import {Workshop} from "../../../User/model/workshop.entity";
import {Vehicle} from "../../model/vehicle.entitty";
import {User} from "../../../User/model/user.entity";
import {Maintenance} from "../../model/maintenance";
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent implements OnInit {

    customers: Customer[] = [];
    maintenances: Maintenance[] = [];
    workshops: Workshop[] = [];
    workshop: Workshop = {} as Workshop;
    vehicles: Vehicle[] = [];
    workshopname = '';

  maintenanceForm = this.fb.group({
    lastVisitDate: ['', Validators.required],
    comment: ['', Validators.required],
    customer_id: ['', Validators.required],
    workshop_id: ['', Validators.required],
    vehicle_id: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private maintenanceService: MaintenanceService,
              private customerService: CustomerService,
              private workshopService: WorkshopService,
              private vehicleService: VehicleService,
              private userService: UserService,
              private _snackBar: MatSnackBar,
                private router: Router
              ) {

  }

  ngOnInit() {
    this.getCustomers();

  }

  getCustomers() {
    let userId = localStorage.getItem('user');

    if (userId) {
      let userid = JSON.parse(userId);
      console.log(userid);
      this.userService.getById(Number(userid)).subscribe((response: User) => {

        this.workshopService.getAll().subscribe((workshops: any) => {
          this.workshops = workshops;
          this.workshopname = workshops.name;
          this.workshop = workshops.find((workshop: Workshop) => Number(workshop.user_id) === Number(response.id));
            this.maintenanceService.getAll().subscribe((maintenances: any) => {
              this.maintenances = maintenances.filter((maintenance: Maintenance) => Number(maintenance.workshop_id) === Number(this.workshop.id));
                this.customerService.getAll().subscribe((customers: any) => {
                    this.customers = customers.filter((customer: Customer) => this.maintenances.find((maintenance: Maintenance) => Number(maintenance.customer_id) === Number(customer.id)));
                    console.log(this.customers);
                });

                this.vehicleService.getAll().subscribe((vehicles: any) => {
                  this.vehicles = vehicles.filter((vehicle: Vehicle) => this.maintenances.find((maintenance: Maintenance) => Number(maintenance.vehicle_id) === Number(vehicle.id)));
                });


            });

          });
      });
    }
  }

  onSubmit() {
    if (this.maintenanceForm.valid) {

      const confirmed = window.confirm('Are you sure you want to create this maintenance?');

      if (confirmed) {
        this.maintenanceService.getAll().subscribe((maintenances: any) => {
          const lastMaintenance = maintenances[maintenances.length - 1];
          const lastId = lastMaintenance ? Number(lastMaintenance.id) + 1 : 1;

          const maintenance = {
            id: Number(lastId),
            status: 'pending',
            lastVisitDate: new Date().toISOString().split('T')[0],
            comment: this.maintenanceForm.value.comment,
            invoice_id: null,
            customer_id: Number(this.maintenanceForm.value.customer_id),
            workshop_id: Number(this.maintenanceForm.value.workshop_id),
            vehicle_id: Number(this.maintenanceForm.value.vehicle_id),
            history_id: null,
          };

          this.maintenanceService.create(maintenance).subscribe(() => {
            this.maintenanceForm.reset();
          });

          this._snackBar.open('Maintenance Created Successfully', '', {
            duration: 2000, // Show the message for 2 seconds
          });
        });
        this.router.navigate(['/workshop/maintenances']);
      }
    }


  }


  goBack() {
    this.router.navigate(['/workshop/maintenances']);
  }

}