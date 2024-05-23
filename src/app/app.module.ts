import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesCardComponent } from './manager/invoices/components/invoice-card/invoices-card.component';
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import { SideNavegationBarComponent } from './public/pages/side-navegation-bar/side-navegation-bar.component';
import { InvoiceListComponent } from './manager/invoices/pages/invoice-list/invoice-list.component';
import {MatButtonModule} from "@angular/material/button";
import { AddInvoiceComponent } from './manager/invoices/components/add-invoice/add-invoice.component';
import { InvoicePreviewComponent } from './manager/invoices/components/invoice-preview/invoice-preview.component';
import { InvoiceCreateAndEditComponent } from './manager/invoices/components/invoice-create-and-edit/invoice-create-and-edit.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AddCustomerComponent} from "./manager/customers/components/add-customer/add-customer.component";
import {CustomerListComponent} from "./manager/customers/pages/customer-list/customer-list.component";
import {ProfileCustomerComponent} from "./manager/customers/components/profile-customer/profile-customer.component";
import {CardCustomerComponent} from "./manager/customers/components/card-customer/card-customer.component";
import { DeleteProfileCustomerComponent } from './manager/customers/components/delete-profile-customer/delete-profile-customer.component';

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
    DeleteProfileCustomerComponent

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
    MatSnackBarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
