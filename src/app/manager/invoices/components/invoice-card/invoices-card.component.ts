import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { InvoiceService } from '../../services/invoice.service';
import { Customer } from '../../model/customer.entity';
import { Invoice } from '../../model/invoice.entity';
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoicesCardComponent implements OnInit {
  customers: Customer[] = [];
  invoices: Invoice[] = [];

  constructor(private customerService: CustomerService, private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getInvoices();
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe((response: any) => {
      this.customers = response;
    });
  }

  getInvoices(): void {
    this.invoiceService.getAll().subscribe((response: any) => {
      this.invoices = response;
    });
  }

  preview(customerId: number, numberId: number): void {
    this.router.navigate(['/workshop/invoices/invoice-preview', customerId, numberId]);
  }

}
