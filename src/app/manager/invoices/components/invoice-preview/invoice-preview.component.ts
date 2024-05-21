import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { InvoiceService } from '../../services/invoice.service';
import {WorkshopService} from "../../services/workshop.service";
import { Customer } from '../../model/customer.entity';
import { Invoice } from '../../model/invoice.entity';
import {Workshop} from "../../model/workshop.entity";
import {Location} from "@angular/common";

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.css']
})
export class InvoicePreviewComponent implements OnInit {
  customer: Customer = {} as Customer;
  invoice: Invoice = {} as Invoice;
  workshop: Workshop = {} as Workshop;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private invoiceService: InvoiceService,
    private workshopService: WorkshopService,
    private location: Location
  ) { }

  onCancel(): void {
    this.location.back();
  }

  getTotalAmount(): number {
    return this.invoice.details.reduce((total: number, detail: { amount: number }) => total + detail.amount, 0);
  }


  ngOnInit(): void {

    const customerId = Number(this.route.snapshot.paramMap.get('clientId') ?? '0');
    const invoiceId = Number(this.route.snapshot.paramMap.get('invoiceId') ?? '0');

    this.customerService.getById(customerId).subscribe((customer: Customer) => {
      this.customer = customer;
    });

    this.invoiceService.getById(invoiceId).subscribe((invoice: Invoice) => {
      this.invoice = invoice;
    });

    this.workshopService.getAll().subscribe((response: any) => {
      this.workshop = response;
    });
  }



}
