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
import { AddProductsComponent } from './manager/products/components/add-products/add-products.component';
import { UpdateProductComponent } from './manager/products/components/update-product/update-product.component';
import {ProductCardComponent} from "./manager/products/components/product-card/product-card.component";


@NgModule({
  declarations: [
    AppComponent,
    InvoicesCardComponent,
    SideNavegationBarComponent,
    InvoiceListComponent,
    AddInvoiceComponent,
    InvoicePreviewComponent,
    AddProductsComponent,
    UpdateProductComponent,
      ProductCardComponent
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
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
