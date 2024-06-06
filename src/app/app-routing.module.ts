import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from "./manager/invoices/pages/invoice-list/invoice-list.component";
import { AddInvoiceComponent } from "./manager/invoices/components/add-invoice/add-invoice.component";
import { InvoicePreviewComponent } from "./manager/invoices/components/invoice-preview/invoice-preview.component";
import { CustomerListComponent } from "./manager/customers/pages/customer-list/customer-list.component";
import { ProfileCustomerComponent } from "./manager/customers/components/profile-customer/profile-customer.component";
import { AddCustomerComponent } from "./manager/customers/components/add-customer/add-customer.component";
import { DeleteProfileCustomerComponent } from "./manager/customers/components/delete-profile-customer/delete-profile-customer.component";
import { HomeManagerComponent } from "./public/pages/home-manager/home-manager.component";
import { AddProductsComponent } from "./manager/products/components/add-products/add-products.component";
import { UpdateProductComponent } from "./manager/products/components/update-product/update-product.component";
import { ProductCardComponent } from "./manager/products/components/product-card/product-card.component";
import { ProductDetailsComponent } from "./manager/products/components/product-details/product-details.component";
import { ClientVehicleListComponent } from "./manager/vehicles/pages/client-vehicle-list/client-vehicle-list.component";
import { AddVehicleComponent } from "./manager/vehicles/pages/add-vehicle/add-vehicle.component";
import { LogInComponent } from "./auth/components/log-in/login.component";
import { SignUpComponent } from "./auth/components/sign-up/sign-up.component";
import { ProfileComponent } from "./clients/customer/components/profile/profile.component";
import { WorkshopInfoComponent } from "./manager/workshop/components/workshop-info/workshop-info.component";
import { SupportComponent } from "./manager/workshop/components/support/support.component";
import { PlansListComponent } from "./manager/plans/components/plans-list/plans-list.component";
import { PlansPaymentComponent } from "./manager/plans/components/plans-payment/plans-payment.component";

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'workshop', component: HomeManagerComponent },
  { path: 'workshop/invoices', component: InvoiceListComponent },
  { path: 'workshop/invoices/add-invoice', component: AddInvoiceComponent },
  { path: 'workshop/invoices/invoice-preview/:clientId/:invoiceId', component: InvoicePreviewComponent },
  { path: 'workshop/customer/:clientId/vehicle-list', component: ClientVehicleListComponent },
  { path: 'workshop/customer/:clientId/add-vehicle', component: AddVehicleComponent },
  { path: 'auth/login', component: LogInComponent },
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'workshop/customers', component: CustomerListComponent },
  { path: 'workshop/workshop-info', component: WorkshopInfoComponent },
  { path: 'workshop/customers/add-customer', component: AddCustomerComponent },
  { path: 'workshop/support', component: SupportComponent },
  { path: 'workshop/customers/profile/:clientId', component: ProfileCustomerComponent },
  { path: 'workshop/plans', component: PlansListComponent },
  { path: 'workshop/plans/payment', component: PlansPaymentComponent },
  { path: 'workshop/customers/profile/delete/:clientId', component: DeleteProfileCustomerComponent },
  { path: 'customers/profile/:clientId', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
