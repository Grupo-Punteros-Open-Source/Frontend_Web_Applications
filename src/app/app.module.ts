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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { CardNotificationComponent } from './User/components/card-notification/card-notification.component';
import { AddMaintenanceComponent } from './Maintenance/pages/add-maintenance/add-maintenance.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { InvoiceCardComponent } from './Workshop/components/invoice-card/invoice-card.component';
import { InvoiceListComponent } from './Workshop/pages/invoice-list/invoice-list.component';
import { InvoicePreviewComponent } from './Workshop/pages/invoice-preview/invoice-preview.component';
import {HistoryCardComponent} from "./Maintenance/components/history-card/history-card.component";
import { HistoryListComponent } from './Maintenance/pages/history-list/history-list.component';
import { ProductCardComponent } from './Workshop/components/product-card/product-card.component';
import { AddProductsComponent } from './Workshop/pages/add-products/add-products.component';
import { ProductDetailsComponent } from './Workshop/pages/product-details/product-details.component';
import { UpdateProductComponent } from './Workshop/pages/update-product/update-product.component';
import { VehicleComponent } from './Customer/components/vehicle/vehicle.component';
import {MaintainanceComponent} from "./Customer/components/maintainance/maintainance.component";
import {MenuComponent} from "./Customer/components/menu/menu.component";

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
    CardNotificationComponent,
    AddMaintenanceComponent,
    InvoiceCardComponent,
    InvoiceListComponent,
    InvoicePreviewComponent,
    HistoryCardComponent,
    HistoryListComponent,
    ProductCardComponent,
    AddProductsComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    VehicleComponent,
    MaintainanceComponent,
    MenuComponent
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
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }