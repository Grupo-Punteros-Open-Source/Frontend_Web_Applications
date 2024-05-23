import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceListComponent} from "./manager/invoices/pages/invoice-list/invoice-list.component";
import {AddInvoiceComponent} from "./manager/invoices/components/add-invoice/add-invoice.component";
import {InvoicePreviewComponent} from "./manager/invoices/components/invoice-preview/invoice-preview.component";
import {CustomerListComponent} from "./manager/customers/pages/customer-list/customer-list.component";
import {ProfileCustomerComponent} from "./manager/customers/components/profile-customer/profile-customer.component";
import {AddCustomerComponent} from "./manager/customers/components/add-customer/add-customer.component";


const routes: Routes = [
  {path:'workshop/invoices', component: InvoiceListComponent},
  {path:'workshop/invoices/add-invoice', component: AddInvoiceComponent},
  {path:'workshop/invoices/invoice-preview/:clientId/:invoiceId', component: InvoicePreviewComponent},
  {path:'workshop/customers', component: CustomerListComponent},
  {path:'workshop/customers/add-customer', component: AddCustomerComponent},
  {path:'workshop/customers/profile/:clientId', component: ProfileCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
