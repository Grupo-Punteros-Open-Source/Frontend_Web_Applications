import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VehicleService} from "../../../Maintenance/services/vehicle.service";
import {MaintenanceService} from "../../../Maintenance/services/maintenance.service";
import {HistoryService} from "../../../Maintenance/services/history.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-maintainance',
  templateUrl: './maintainance.component.html',
  styleUrl: './maintainance.component.css'
})
export class MaintainanceComponent implements OnInit {
    vehicle: any;
    history: any;
    mileage!: number;

    constructor(
        private route: ActivatedRoute,
        private vehicleService: VehicleService,
        private maintenanceService: MaintenanceService,
        private historyService: HistoryService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const vehicleId = params['id'];
            this.vehicleService.getById(vehicleId).subscribe((data: any) => {
                this.vehicle = data;
                this.mileage = this.vehicle.mileage;
                this.maintenanceService.getByVehicleId(vehicleId).subscribe((maintenanceData: any[]) => {
                    maintenanceData.forEach((maintenanceItem) => {
                        const historyId = maintenanceItem.history_id;
                        this.historyService.getById(historyId).subscribe((historyData: any) => {
                            this.history= historyData;
                        });
                    });
                });
            });
        });
    }



    updateMileage(): void {
        if (this.mileage !== undefined) {
            this.vehicle.mileage = this.mileage;
            this.vehicleService.update(this.vehicle.id, this.vehicle).subscribe(() => {
                console.log('Mileage updated successfully');
            });
        } else {
            console.log('Enter a valid mileage value');
        }
    }

    cancel() {
        this.location.back();
    }
}
