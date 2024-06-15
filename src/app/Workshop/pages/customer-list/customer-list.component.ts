import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  constructor(private router: Router) {
  }

  add(): void {
    this.router.navigate(['/workshop/customers/add-customer']);
  }
}
