import { Component, OnInit } from '@angular/core';
import {MaintenanceService} from "../../services/maintenance.service";
import {VehicleService} from "../../services/vehicle.service";
import {HistoryService} from "../../services/history.service";
import {InvoiceService} from "../../../Workshop/services/invoice.service";
import {DetailService} from "../../services/detail.service";
import {Detail} from "../../model/detail.entity";
import {Vehicle} from "../../model/vehicle.entitty";
import {Maintenance} from "../../model/maintenance";
import {History} from "../../model/history.entity";
import {Invoice} from "../../../Workshop/model/invoice.entity";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
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
              private route: ActivatedRoute,
              private location: Location,
              private invoiceService: InvoiceService) {}

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

  goBack() {
    // Navega de vuelta a la página anterior
    this.location.back();
  }

  addDetail(description: string, amount: number) {
    // Asegúrate de que el ID es un número
    if (!Number.isInteger(this.detail.length + 1)) {
      console.error('El ID no es un número');
      return;
    }

    // Crea un nuevo objeto Detail
    const newDetail: Detail = {
      id: Number(this.detail.length + 1), // Asume que el id es el siguiente número en la lista
      description: description, // Usa la descripción proporcionada
      amount: amount, // Usa el monto proporcionado
      maintenance_id: Number(this.maintenance.id) // Asume que el id de mantenimiento es el id del mantenimiento actual
    };

    // Agrega el nuevo detalle a la lista de detalles
    this.detail.push(newDetail);

    // Llama a tu servicio para agregar el detalle en tu base de datos
    this.detailService.create(newDetail).subscribe(createdDetail => {
      // Actualiza el nuevo detalle con la respuesta del servidor
      newDetail.id = Number(createdDetail.id);
    });
  }


  protected readonly parseFloat = parseFloat;

  completeMaintenance() {

    this.maintenance.status = this.maintenance.status === 'pending' ? 'completed' : 'pending';
    this.maintenanceService.update(Number(this.maintenance.id), this.maintenance).subscribe(updatedMaintenance => {
      this.maintenance = updatedMaintenance;
    });


    this.invoiceService.getAll().subscribe((invoices: any) => {

      const currentYear = new Date().getFullYear();
      const lastId = invoices.length;
      const invoiceNumber = `F${currentYear}${String(lastId).padStart(3, '0')}`;
      // Crea una nueva factura con el ID incrementado
      const newInvoice: Invoice = {
        id: lastId + 1,
        number: invoiceNumber,
        issue_date: new Date().toISOString().split('T')[0].replace(/-/g, '/'),
        total: this.detail.reduce((sum, detail) => sum + detail.amount, 0),
        status: 'Paid',
        detail: 'detalles'
      };

      console.log(newInvoice);


      this.invoiceService.create(newInvoice).subscribe(createdInvoice => {

      });
    });



    // Crea un nuevo history
    this.historyService.getAll().subscribe((histories: any) => {

      const lastId = histories.length;

      const newHistory: History = {
        id: lastId + 1,
        service_date: new Date().toISOString().split('T')[0].replace(/-/g, '/'), // Formatea la fecha en "YYYY/MM/DD"
        description: 'Maintenance service',
        cost: this.detail.reduce((sum, detail) => sum + detail.amount, 0), // Este valor debería calcularse de alguna manera
        mileage: this.vehicle.mileage // Este valor debería obtenerse de alguna manera
      };

      this.historyService.create(newHistory).subscribe(createdHistory => {

      });
    });

    this.location.back();

  }

}
