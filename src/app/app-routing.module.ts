import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceListComponent} from "./manager/invoices/pages/invoice-list/invoice-list.component";
import {AddInvoiceComponent} from "./manager/invoices/components/add-invoice/add-invoice.component";
import {InvoicePreviewComponent} from "./manager/invoices/components/invoice-preview/invoice-preview.component";
import {HomeManagerComponent} from "./public/pages/home-manager/home-manager.component";
import {ClientVehicleListComponent} from "./manager/vehicles/pages/client-vehicle-list/client-vehicle-list.component";
import {AddVehicleComponent} from "./manager/vehicles/pages/add-vehicle/add-vehicle.component";


const routes: Routes = [
  {path:'', component: HomeManagerComponent},
  {path:'workshop', component: HomeManagerComponent},
  {path:'workshop/invoices', component: InvoiceListComponent},
  {path:'workshop/invoices/add-invoice', component: AddInvoiceComponent},
  {path:'workshop/invoices/invoice-preview/:clientId/:invoiceId', component: InvoicePreviewComponent},
  {path:'workshop/customer/:clientId/vehicle-list', component: ClientVehicleListComponent},
  {path:'workshop/customer/:clientId/add-vehicle', component: AddVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
