import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignInComponent } from './User/pages/sign-in/sign-in.component';
import { SignUpComponent } from './User/pages/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideNavegationBarCustomerComponent } from './public/pages/side-navegation-bar-customer/side-navegation-bar-customer.component';
import { SideNavegationBarWorkshopComponent } from './public/pages/side-navegation-bar-workshop/side-navegation-bar-workshop.component';
import { ProfileWorkshopComponent } from './Workshop/pages/profile-workshop/profile-workshop.component';
import { SupportComponent } from './Workshop/pages/support/support.component';
import { InventoryComponent } from './Workshop/pages/inventory/inventory.component';
import { PlansComponent } from './Workshop/pages/plans/plans.component';
import { PlansPaymentComponent } from './Workshop/pages/plans-payment/plans-payment.component';
import { CustomerListComponent } from './Workshop/pages/customer-list/customer-list.component';
import { CardCustomerComponent } from './Workshop/components/card-customer/card-customer.component';
import { ProfileCustomerComponent } from './Workshop/pages/profile-customer/profile-customer.component';
import { AddCustomerComponent } from './Workshop/pages/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './Workshop/pages/delete-customer/delete-customer.component';
import { CardVehicleComponent } from './WorkShop/components/card-vehicle/card-vehicle.component';
import { CustomerVehicleListComponent } from './Workshop/pages/customer-vehicle-list/customer-vehicle-list.component';
import { MaintananceListComponent } from './Maintenance/pages/maintanance-list/maintanance-list.component';
import { MaintananceCardComponent } from './Maintenance/components/maintanance-card/maintanance-card.component';
import { HomeWorkshopComponent } from './public/pages/home-workshop/home-workshop.component';
import { HomeCustomerComponent } from './public/pages/home-customer/home-customer.component';
import { ViewMaintananceComponent } from './Maintenance/pages/view-maintanance/view-maintanance.component';
import { ProfileComponent } from './Customer/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SideNavegationBarCustomerComponent,
    SideNavegationBarWorkshopComponent,
    ProfileWorkshopComponent,
    SupportComponent,
    InventoryComponent,
    PlansComponent,
    PlansPaymentComponent,
    CustomerListComponent,
    CardCustomerComponent,
    ProfileCustomerComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    CardVehicleComponent,
    CustomerVehicleListComponent,
    MaintananceListComponent,
    MaintananceCardComponent,
    HomeWorkshopComponent,
    HomeCustomerComponent,
    ViewMaintananceComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
