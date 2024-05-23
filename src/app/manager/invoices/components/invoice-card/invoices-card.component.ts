import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { InvoiceService } from '../../../services/invoice.service';
import { Customer } from '../../../model/customer.entity';
import { Invoice } from '../../../model/invoice.entity';
import {Router} from "@angular/router";
import { MatTableDataSource } from '@angular/material/table'; // Add this line

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoicesCardComponent implements OnInit {
  customers: Customer[] = [];
  invoices: MatTableDataSource<Invoice>; // Change this line
  displayedColumns: string[] = ['number', 'issue_date', 'total', 'status', 'view', 'delete','edit'];
  @ViewChild('filterInput') filterInput!: ElementRef;

  constructor(private customerService: CustomerService,
              private invoiceService: InvoiceService,
              private router: Router) {
    this.invoices = new MatTableDataSource<Invoice>();
  }

  ngOnInit(): void {
    this.getCustomers();
    this.getInvoices();
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe((response: any) => {
      this.customers = response;
      console.log('Response from card:', response);
    });
  }

  getInvoices(): void {
    this.invoiceService.getAll().subscribe((response: any) => {
      this.invoices = new MatTableDataSource(response); // Change this line
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
    // Ask for confirmation before deleting the invoice
    if (confirm('Are you sure you want to delete this invoice?')) {
      // If the user clicked "OK", delete the invoice
      this.invoiceService.delete(invoiceId).subscribe(() => {
        // Refresh the invoices
        this.getInvoices();
      });
    }
  }

  editInvoice(invoice: Invoice): void {
    // Ask for confirmation before making changes
    if (confirm('Are you sure you want to change the status of this invoice?')) {
      // If the user clicked "OK", make the changes
      if (invoice.status === 'Paid') {
        invoice.status = 'Unpaid';
      } else {
        invoice.status = 'Paid';
      }

      this.invoiceService.update(invoice.id, invoice).subscribe(updatedInvoice => {
        // You can do something with the updated invoice here if needed
        // For now, we'll just log it
        console.log('Updated invoice', updatedInvoice);
      });
    }
  }

}