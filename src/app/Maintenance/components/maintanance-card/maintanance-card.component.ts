import {Component, OnInit} from '@angular/core';
import {MaintenanceService} from "../../services/maintenance.service";
import {WorkshopService} from "../../../User/services/workshop.service";
import {UserService} from "../../../User/services/user.service";
import {Vehicle} from "../../model/vehicle.entitty";
import {Workshop} from "../../../User/model/workshop.entity";
import {Maintenance} from "../../model/maintenance";
import {VehicleService} from "../../services/vehicle.service";
import {User} from "../../../User/model/user.entity";
import {Router} from "@angular/router";

@Component({
  selector: 'app-maintanance-card',
  templateUrl: './maintanance-card.component.html',
  styleUrl: './maintanance-card.component.css'
})
export class MaintananceCardComponent implements OnInit{
  maintenances: Maintenance[] = []; // changed from Maintenance[] to Maintenance
  vehicles: Vehicle[] = []; // changed from Vehicle[] to Vehicle
  user: User = {} as User;
  workshop: Workshop = {} as Workshop;

  constructor(private maintenanceService: MaintenanceService,
              private vehicleService: VehicleService,
              private userService: UserService,
              private workshopService: WorkshopService,
              private router: Router) {
  }

  ngOnInit() {
    this.getMaintenances();
  }

  async getMaintenances() {
    let userId = localStorage.getItem('user');
    if (userId) {
      let userid = JSON.parse(userId);
      console.log(userid);
      this.userService.getById(Number(userid)).subscribe((response: User) => {
        this.user = response;
        this.workshopService.getAll().subscribe((response: any) => {
          this.workshop = response.find((customer: Workshop) => Number(customer.user_id) === Number(this.user.id));
          if (this.workshop) {
            console.log(this.workshop);
            this.maintenanceService.getAll().subscribe((response: any) => {
              this.maintenances = response.filter((maintenance: Maintenance) => Number(maintenance.workshop_id) === Number(this.workshop.id));
              this.maintenances = response.filter((maintenance: Maintenance) => maintenance.status === 'pending');
              this.vehicleService.getAll().subscribe((response: any) => {
                this.vehicles = this.maintenances.flatMap((maintenance: Maintenance) =>
                  response.filter((vehicle: Vehicle) => Number(vehicle.id) === Number(maintenance.vehicle_id)));
              });
            });
          } else {
            console.log('No customer found for the current user');
          }
        });
      });
    }
  }

  getVehicle(vehicleId: number) {
    return this.vehicles.find(vehicle => Number(vehicle.id) === Number(vehicleId));
  }

  ViewMaintenance(id: Number){
    this.router.navigate(['workshop/maintenances/view', id]);
  }

}
