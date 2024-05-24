import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CustomerService } from '../../../services/customer.service';
import { InvoiceService } from '../../../services/invoice.service';
import { Customer } from '../../../model/customer.entity';
import { Invoice } from '../../../model/invoice.entity';
import {Router} from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoicesCardComponent implements OnInit, AfterViewInit {
  customers: Customer[] = [];
  invoices: MatTableDataSource<Invoice>;
  displayedColumns: string[] = ['number', 'issue_date', 'total', 'status', 'view', 'delete','edit'];
  @ViewChild('filterInput') filterInput!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerService: CustomerService,
              private invoiceService: InvoiceService,
              private router: Router) {
    this.invoices = new MatTableDataSource<Invoice>();
  }

  ngOnInit(): void {
    this.getCustomers();
    this.getInvoices();
  }

  ngAfterViewInit() {
    this.invoices.paginator = this.paginator;
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe((response: any) => {
      this.customers = response;
      console.log('Response from card:', response);
    });
  }

  getInvoices(): void {
    this.invoiceService.getAll().subscribe((response: any) => {
      this.invoices = new MatTableDataSource(response);
      this.invoices.paginator = this.paginator;
    });
  }

  preview(customerId: number, numberId: string): void {
    this.router.navigate(['/workshop/invoices/invoice-preview', customerId, numberId]);
  }

  applyFilter() {
    const filterValue = this.filterInput.nativeElement.value;
    if (filterValue) {
      this.invoices.filter = filterValue.trim().toLowerCase();
    } else {
      this.invoices.filter = '';
    }
  }

  deleteInvoice(invoiceId: string): void {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.invoiceService.delete(invoiceId).subscribe(() => {
        this.getInvoices();
      });
    }
  }

  editInvoice(invoice: Invoice): void {
    if (confirm('Are you sure you want to change the status of this invoice?')) {
      if (invoice.status === 'Paid') {
        invoice.status = 'Unpaid';
      } else {
        invoice.status = 'Paid';
      }

      this.invoiceService.update(invoice.id, invoice).subscribe(updatedInvoice => {
        console.log('Updated invoice', updatedInvoice);
      });
    }
  }
}