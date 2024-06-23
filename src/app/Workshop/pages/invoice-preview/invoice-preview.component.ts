import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MaintenanceService} from "../../../Maintenance/services/maintenance.service";
import {CustomerService} from "../../../User/services/customer.service";
import {UserService} from "../../../User/services/user.service";
import {WorkshopService} from "../../../User/services/workshop.service";
import {InvoiceService} from "../../services/invoice.service";
import {DetailService} from "../../../Maintenance/services/detail.service";
import {User} from "../../../User/model/user.entity";
import {Customer} from "../../../User/model/customer.entity";
import {Workshop} from "../../../User/model/workshop.entity";
import {Maintenance} from "../../../Maintenance/model/maintenance";
import {Invoice} from "../../model/invoice.entity";
import {Detail} from "../../../Maintenance/model/detail.entity";
import {Location} from "@angular/common";

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrl: './invoice-preview.component.css'
})
export class InvoicePreviewComponent implements OnInit{

  userCustomer: User = {} as User;
  userWorkshop: User = {} as User;
  customer: Customer = {} as Customer;
  workshop: Workshop = {} as Workshop;
  invoice: Invoice = {} as Invoice;
  maintenance: Maintenance = {} as Maintenance;
  details: Detail[] = [];
  displayedColumns: string[] = ['description', 'amount'];


  constructor(private maintenanceService: MaintenanceService,
              private customerService: CustomerService,
              private userService: UserService,
              private workshopService: WorkshopService,
              private invoiceService: InvoiceService,
              private detailService: DetailService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.getInvoice();
  }

  getInvoice(){
    const invoiceId = Number(this.route.snapshot.paramMap.get('invoiceId') ?? '0');

    this.maintenanceService.getAll().subscribe((maintenances: any) => {
      this.maintenance = maintenances.find((maintenance: Maintenance) => Number(maintenance.id) === Number(invoiceId));

      this.customerService.getById(Number(this.maintenance.customer_id)).subscribe((customer: Customer) => {
        this.customer = customer;
      });

      this.workshopService.getById(Number(this.maintenance.workshop_id)).subscribe((workshop: Workshop) => {
        this.workshop = workshop;
      });

      this.invoiceService.getById(Number(invoiceId)).subscribe((invoice: Invoice) => {
        this.invoice = invoice;
      });

      this.detailService.getAll().subscribe((details: any) => {
        this.details = details.filter((detail: Detail) => Number(detail.maintenance_id) === Number(this.maintenance.id));
        console.log(this.details);
      });

    });
  }

  goBack() {
    this.location.back();
  }

  getTotal() {
    return this.details.reduce((acc, detail) => acc + detail.amount, 0);
  }

}
