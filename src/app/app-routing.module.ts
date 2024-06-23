import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './User/pages/sign-in/sign-in.component';
import { SignUpComponent } from './User/pages/sign-up/sign-up.component';
import { ProfileWorkshopComponent } from './Workshop/pages/profile-workshop/profile-workshop.component';
import {SupportComponent} from "./Workshop/pages/support/support.component";
import {PlansComponent} from "./Workshop/pages/plans/plans.component";
import {PlansPaymentComponent} from "./Workshop/pages/plans-payment/plans-payment.component";
import {CustomerListComponent} from "./Workshop/pages/customer-list/customer-list.component";
import {ProfileCustomerComponent} from "./Workshop/pages/profile-customer/profile-customer.component";
import {AddCustomerComponent} from "./Workshop/pages/add-customer/add-customer.component";
import {DeleteCustomerComponent} from "./Workshop/pages/delete-customer/delete-customer.component";
import {MaintananceListComponent} from "./Maintenance/pages/maintanance-list/maintanance-list.component";
import {CustomerVehicleListComponent} from "./Workshop/pages/customer-vehicle-list/customer-vehicle-list.component";
import {HomeCustomerComponent} from "./public/pages/home-customer/home-customer.component";
import {HomeWorkshopComponent} from "./public/pages/home-workshop/home-workshop.component";
import {ViewMaintananceComponent} from "./Maintenance/pages/view-maintanance/view-maintanance.component";
import {AddMaintenanceComponent} from "./Maintenance/pages/add-maintenance/add-maintenance.component";
import {InvoiceListComponent} from "./Workshop/pages/invoice-list/invoice-list.component";
import {InvoicePreviewComponent} from "./Workshop/pages/invoice-preview/invoice-preview.component";
import {HistoryListComponent} from "./Maintenance/pages/history-list/history-list.component";
import {ProductCardComponent} from "./Workshop/components/product-card/product-card.component";
import {AddProductsComponent} from "./Workshop/pages/add-products/add-products.component";
import {ProductDetailsComponent} from "./Workshop/pages/product-details/product-details.component";
import { SideNavegationBarWorkshopComponent } from "./public/pages/side-navegation-bar-workshop/side-navegation-bar-workshop.component";
import { SideNavegationBarCustomerComponent } from "./public/pages/side-navegation-bar-customer/side-navegation-bar-customer.component";
import {ProfileComponent} from "./Customer/pages/profile/profile.component";
import {VehicleComponent} from "./Customer/components/vehicle/vehicle.component";
import {MaintainanceComponent} from "./Customer/components/maintainance/maintainance.component";
import {MenuComponent} from "./Customer/components/menu/menu.component";

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'workshop', component: SideNavegationBarWorkshopComponent },
  { path: 'workshop/home', component: HomeWorkshopComponent },
  { path: 'workshop/profile', component: ProfileWorkshopComponent },
  { path: 'workshop/support', component: SupportComponent },
  { path: 'workshop/plans', component: PlansComponent },
  { path: 'workshop/plans/payment', component: PlansPaymentComponent },
  { path: 'workshop/customers', component: CustomerListComponent },
  { path: 'workshop/customers/profile/:userId', component: ProfileCustomerComponent },
  { path: 'workshop/customers/add-customer', component: AddCustomerComponent },
  { path: 'workshop/customers/delete-customer/:userId', component: DeleteCustomerComponent },
  { path: 'workshop/customers/vehicles/:userId', component: CustomerVehicleListComponent },
  { path: 'workshop/maintenances', component: MaintananceListComponent },
  { path: 'workshop/maintenances/view/:maintenanceId', component: ViewMaintananceComponent },
  { path: 'workshop/maintenances/add-maintenance', component: AddMaintenanceComponent},
  { path: 'workshop/invoices', component: InvoiceListComponent},
  { path: 'workshop/invoices/preview/:invoiceId', component: InvoicePreviewComponent},
  { path: 'workshop/histories', component: HistoryListComponent},
  { path: 'workshop/products', component: ProductCardComponent},
  { path: 'workshop/products/add-products', component: AddProductsComponent},
  { path: 'workshop/products/product-detail/:productId', component: ProductDetailsComponent},
  { path: 'customer', component: SideNavegationBarCustomerComponent },
  { path: 'customer/home', component: HomeCustomerComponent },
  { path: 'customer/profile', component: ProfileComponent },
  { path: 'customer/vehicle', component: VehicleComponent },
  { path: 'customer/maintenance/:id', component: MaintainanceComponent },
  { path: 'customer/menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }