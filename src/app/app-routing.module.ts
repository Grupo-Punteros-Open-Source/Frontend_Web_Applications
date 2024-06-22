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
import {
  SideNavegationBarWorkshopComponent
} from "./public/pages/side-navegation-bar-workshop/side-navegation-bar-workshop.component";
import {
  SideNavegationBarCustomerComponent
} from "./public/pages/side-navegation-bar-customer/side-navegation-bar-customer.component";
import {VehicleComponent} from "./Customer/components/vehicle/vehicle.component";
import {MaintainanceComponent} from "./Customer/components/maintainance/maintainance.component";

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
  { path: 'customer', component: SideNavegationBarCustomerComponent },
  { path: 'customer/home', component: HomeCustomerComponent },
  { path: 'customer/vehicle', component: VehicleComponent },
  { path: 'customer/maintenance/:id', component: MaintainanceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
