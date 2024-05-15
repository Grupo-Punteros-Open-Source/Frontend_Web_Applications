import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {
  constructor(private router: Router) { }
  addInvoice(): void {
    this.router.navigate(['/workshop/invoices/add-invoice']);
  }
}
