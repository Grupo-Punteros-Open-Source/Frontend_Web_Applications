import { Component, OnInit } from '@angular/core';
import {MaintenanceService} from "../../services/maintenance.service";
import {VehicleService} from "../../services/vehicle.service";
import {HistoryService} from "../../services/history.service";
import {DetailService} from "../../services/detail.service";
import {Detail} from "../../model/detail.entity";
import {Vehicle} from "../../model/vehicle.entitty";
import {Maintenance} from "../../model/maintenance";
import {History} from "../../model/history.entity";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-view-maintanance',
  templateUrl: './view-maintanance.component.html',
  styleUrl: './view-maintanance.component.css'
})
export class ViewMaintananceComponent implements OnInit {

  maintenance: Maintenance = {} as Maintenance;
  vehicle: Vehicle = {} as Vehicle;
  history: History[] = [];
  detail: Detail[] = [];
  displayedColumns: string[] = ['id', 'description', 'amount', 'maintenance_id'];



  constructor(private maintenanceService: MaintenanceService,
              private vehicleService: VehicleService,
              private historyService: HistoryService,
              private router: Router,
              private detailService: DetailService,
              private route: ActivatedRoute) {}

  ngOnInit() {

    const maintenanceId = Number(this.route.snapshot.paramMap.get('maintenanceId') ?? '0');
    this.maintenanceService.getById(maintenanceId).subscribe((maintenance: Maintenance) => {
      this.maintenance = maintenance;

      this.vehicleService.getById(this.maintenance.vehicle_id).subscribe((vehicle: Vehicle) => {
        this.vehicle = vehicle;
      });

      this.historyService.getAll().subscribe((history: any) => {
        this.history = history.filter((history: History) => Number(history.id) === Number(maintenance.history_id));
      });

      this.detailService.getAll().subscribe((detail: any) => {
        this.detail = detail.filter((detail: Detail) => Number(detail.maintenance_id) === Number(maintenance.id));
      });


    });

  }





}
