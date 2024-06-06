import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navegation-bar',
  templateUrl: './side-navegation-bar.component.html',
  styleUrls: ['./side-navegation-bar.component.css']
})
export class SideNavegationBarComponent {
  options = [
    { path: 'workshop', title: 'Home', icon: 'home' },
    { path: 'workshop/invoices', title: 'Invoice', icon: 'folder' },
    { path: 'workshop/customers', title: 'Customers', icon: 'people' },
    { path: 'workshop/workshop-info', title: 'Info', icon: 'workshop' },
    { path: 'workshop/support', title: 'Support', icon: 'help' },
    { path: 'workshop/plans', title: 'Plans', icon: 'payment' },
    { path: 'workshop/products/product-card', title: 'Products', icon: 'production_quantity_limits' }
  ];
}
