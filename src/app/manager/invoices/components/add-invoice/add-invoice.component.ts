import {Component} from '@angular/core';
import { InvoiceService } from "../../../services/invoice.service";
import {MatTableDataSource} from "@angular/material/table";
import { Invoice } from '../../../model/invoice.entity';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent  {

  invoiceData: Invoice;
  dataSource!: MatTableDataSource<any>;

  constructor(private invoiceService: InvoiceService,
              private router: Router,
              private location: Location) {
    this.invoiceData = {} as Invoice;
    this.dataSource = new MatTableDataSource<any>();
    this.getAllInvoices();
  }

  onCancel() {
    this.location.back();
  }

  private getAllInvoices() {
    this.invoiceService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log('Response from server:', response);
    });
  };

  onInvoiceAdded(element: Invoice) {
    this.invoiceData = element;
    this.createInvoice();
    alert('Invoice created successfully!');
    this.router.navigate(['/workshop/invoices/invoice-preview', this.invoiceData.customerId, this.invoiceData.id]);
  }

  private createInvoice() {
    this.invoiceService.create(this.invoiceData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((invoice: Invoice) => {
        return invoice;
      });
    });
  };

}