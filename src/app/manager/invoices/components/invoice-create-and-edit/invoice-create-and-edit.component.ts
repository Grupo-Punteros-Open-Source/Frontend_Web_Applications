import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Invoice} from "../../../model/invoice.entity";
import { Customer } from '../../../model/customer.entity';
import {InvoiceService} from "../../../services/invoice.service";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-invoice-create-and-edit',
  templateUrl: './invoice-create-and-edit.component.html',
  styleUrls: ['./invoice-create-and-edit.component.css']
})
export class InvoiceCreateAndEditComponent {
  // Attributes
  @Input() invoice: Invoice;
  @Input() editMode = false;
  @Output() invoiceAdded = new EventEmitter<Invoice>();
  @Output() invoiceUpdated = new EventEmitter<Invoice>();
  @Output() editCanceled = new EventEmitter();
  @ViewChild('invoiceForm', {static: false}) invoiceForm!: NgForm;
  customers: Customer[] = [];
  invoices: Invoice[] = [];
  today: Date = new Date();

  // Methods
  constructor(private invoiceService: InvoiceService, private customerService: CustomerService) {
    this.invoice = {} as Invoice;
    this.invoice.id = "";
    this.invoice.customerId = 0;
    this.invoice.number = "";
    this.invoice.issue_date = "";
    this.invoice.status = "";
    this.invoice.details = [];
    this.getCustomers();
    this.getInvoices();
    this.invoice.issue_date = this.today.toISOString().split('T')[0];
  }

  getCustomers(): void {
    this.customerService.getAll().subscribe((response: any) => {
      this.customers = response;
    });
  }

  getInvoices() {
    this.invoiceService.getAll().subscribe((response: any) => {
      this.invoices = response;

      // Sort invoices in descending order by number
      this.invoices.sort((a, b) => {
        if (a.number > b.number) return -1;
        if (a.number < b.number) return 1;
        return Number(a.id) - Number(b.id);
      });

      // Extract the number from the highest invoice number, convert it to an integer and add 1
      let highestNumber = parseInt(this.invoices[0].number.slice(1)) + 1;

      // Form the new invoice number
      let currentYear = new Date().getFullYear();
      this.invoice.number = 'F' + highestNumber.toString().padStart(7, '0');
      this.invoice.id = (this.invoices.length + 1).toString();


    });
  }

  // Private methods
  private resetEditState() {
    this.invoice = {} as Invoice;
    this.editMode = false;
    this.invoiceForm.resetForm();
  }

  addDetail() {
    this.invoice.details.push({description: "", amount: 0});
  }

  removeDetail(index: number) {
    this.invoice.details.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    if (this.invoice && this.invoice.details) {
      this.invoice.total = this.invoice.details.reduce((total, detail) => total + Number(detail.amount), 0);
    } else {
      this.invoice.total = 0;
    }
  }

  // Event Handlers
  onSubmit() {

    this.invoice.customerId = Number(this.invoice.customerId);
    this.invoice.details = this.invoice.details.map(detail => {
      return {
        description: detail.description,
        amount: Number(detail.amount)
      }
    });
    if (this.invoiceForm.form.valid) {
      let emitter = this.editMode ? this.invoiceUpdated : this.invoiceAdded;
      emitter.emit(this.invoice);
      console.log('Invoice Create', this.invoice)
      this.resetEditState();
    } else {
      console.error('Invalid data in form');
      alert('Please fill out all required fields.');
    }


  }


}