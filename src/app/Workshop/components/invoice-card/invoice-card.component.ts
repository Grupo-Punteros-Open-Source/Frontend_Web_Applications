import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MaintenanceService} from "../../../Maintenance/services/maintenance.service";
import {DetailService} from "../../../Maintenance/services/detail.service";
import {InvoiceService} from "../../services/invoice.service";
import {WorkshopService} from "../../../User/services/workshop.service";
import {UserService} from "../../../User/services/user.service";
import {Workshop} from "../../../User/model/workshop.entity";
import {Maintenance} from "../../../Maintenance/model/maintenance";
import {Detail} from "../../../Maintenance/model/detail.entity";
import {User} from "../../../User/model/user.entity";
import {Invoice} from "../../model/invoice.entity";
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrl: './invoice-card.component.css'
})

export class InvoiceCardComponent implements OnInit, AfterViewInit{

  workshop: Workshop = {} as Workshop;
  user: User = {} as User;
  maintenances: Maintenance[]=[];

  details: Detail[]=[];
  invoices = new MatTableDataSource<Invoice>();
  displayedColumns = ['id', 'number','amount','date','button'];
  @ViewChild('filterInput', { static: true }) filterInput!: ElementRef;

  constructor(private invoiceService: InvoiceService,
              private workshopService: WorkshopService,
              private userService: UserService,
              private maintenanceService: MaintenanceService,
              private detailService: DetailService,
              private router: Router) {
    this.invoices = new MatTableDataSource<Invoice>();
  }

  ngOnInit() {
    this.getInvoices();
  }

  ngAfterViewInit() {
    fromEvent(this.filterInput.nativeElement, 'keyup')
        .pipe(
            debounceTime(150),
            distinctUntilChanged(),
            map((event: any) => event.target.value)
        )
        .subscribe((filterValue: string) => {
          this.invoices.filter = filterValue.trim().toLowerCase();
        });
  }

  async getInvoices() {
    let userid = localStorage.getItem('user');
    if (userid) {
      let userId = JSON.parse(userid);
      this.workshopService.getAll().subscribe((workshop: any) => {
        this.workshop= workshop.find((workshop: Workshop) => Number(workshop.user_id) == Number(userId));
        this.maintenanceService.getAll().subscribe((maintenance: any) => {
          this.maintenances = maintenance.filter((maintenance: Maintenance) => Number(maintenance.workshop_id) == Number(this.workshop.id));
          this.maintenances = maintenance.filter((maintenance: Maintenance) => maintenance.status == 'completed');
          this.invoiceService.getAll().subscribe((invoice: any) => {
           this.invoices .data= invoice.filter((invoice: Invoice) =>
              this.maintenances.some((maintenance: Maintenance) => Number(maintenance.invoice_id) == Number(invoice.id))
            );
            console.log(this.invoices);
          });


        });
      });
    }
  }

  applyFilter() {
    const filterValue = this.filterInput.nativeElement.value;
    if (filterValue) {
      this.invoices.filter = filterValue.trim().toLowerCase();
    } else {
      this.invoices.filter = '';
    }
  }

  onButtonClick(invoice: Invoice) {
    // Handle button click
    this.router.navigate(['workshop/invoices/preview', invoice.id]);
  }

}
