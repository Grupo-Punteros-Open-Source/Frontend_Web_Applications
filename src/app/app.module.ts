import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { InvoicesCardComponent } from './manager/invoices/components/invoice-card/invoices-card.component';
import { SideNavegationBarComponent } from './public/pages/side-navegation-bar/side-navegation-bar.component';
import { InvoiceListComponent } from './manager/invoices/pages/invoice-list/invoice-list.component';
import { AddInvoiceComponent } from './manager/invoices/components/add-invoice/add-invoice.component';
import { InvoicePreviewComponent } from './manager/invoices/components/invoice-preview/invoice-preview.component';
import { InvoiceCreateAndEditComponent } from './manager/invoices/components/invoice-create-and-edit/invoice-create-and-edit.component';
import { AddCustomerComponent } from "./manager/customers/components/add-customer/add-customer.component";
import { CustomerListComponent } from "./manager/customers/pages/customer-list/customer-list.component";
import { ProfileCustomerComponent } from "./manager/customers/components/profile-customer/profile-customer.component";
import { CardCustomerComponent } from "./manager/customers/components/card-customer/card-customer.component";
import { DeleteProfileCustomerComponent } from './manager/customers/components/delete-profile-customer/delete-profile-customer.component';
import { NotificationComponent } from './public/components/notification/notification.component';
import { HomeManagerComponent } from './public/pages/home-manager/home-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesCardComponent,
    SideNavegationBarComponent,
    InvoiceListComponent,
    AddInvoiceComponent,
    InvoicePreviewComponent,
    InvoiceCreateAndEditComponent,
    AddCustomerComponent,
    CustomerListComponent,
    ProfileCustomerComponent,
    CardCustomerComponent,
    DeleteProfileCustomerComponent,
    NotificationComponent,
    HomeManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
