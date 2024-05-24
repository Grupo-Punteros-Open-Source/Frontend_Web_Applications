import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceListComponent} from "./manager/invoices/pages/invoice-list/invoice-list.component";
import {AddInvoiceComponent} from "./manager/invoices/components/add-invoice/add-invoice.component";
import {InvoicePreviewComponent} from "./manager/invoices/components/invoice-preview/invoice-preview.component";
import {AddProductsComponent} from "./manager/products/components/add-products/add-products.component";
import {UpdateProductComponent} from "./manager/products/components/update-product/update-product.component";
import {ProductCardComponent} from "./manager/products/components/product-card/product-card.component";



const routes: Routes = [
  {path:'workshop/invoices', component: InvoiceListComponent},
  {path:'workshop/invoices/add-invoice', component: AddInvoiceComponent},
  {path:'workshop/invoices/invoice-preview/:clientId/:invoiceId', component: InvoicePreviewComponent},
  {path:'workshop/products/add-products', component: AddProductsComponent},
  {path:'workshop/products/update-product', component: UpdateProductComponent},
  {path:'workshop/products/product-card', component: ProductCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
