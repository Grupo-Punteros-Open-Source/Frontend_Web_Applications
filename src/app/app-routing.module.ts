import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceListComponent} from "./manager/invoices/pages/invoice-list/invoice-list.component";
import {AddInvoiceComponent} from "./manager/invoices/components/add-invoice/add-invoice.component";
import {InvoicePreviewComponent} from "./manager/invoices/components/invoice-preview/invoice-preview.component";
import {HomeManagerComponent} from "./public/pages/home-manager/home-manager.component";
import {LogInComponent} from "./auth/components/log-in/login.component";
import {SignUpComponent} from "./auth/components/sign-up/sign-up.component";

const routes: Routes = [
  {path:'', component: LogInComponent},
  {path:'workshop', component: HomeManagerComponent},
  {path:'workshop/invoices', component: InvoiceListComponent},
  {path:'workshop/invoices/add-invoice', component: AddInvoiceComponent},
  {path:'workshop/invoices/invoice-preview/:clientId/:invoiceId', component: InvoicePreviewComponent},
  {path:'auth/login', component: LogInComponent},
  {path:'auth/signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
