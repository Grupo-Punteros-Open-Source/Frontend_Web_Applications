import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  constructor(private location: Location) {
  }
  onCancel(): void {
    this.location.back();
  }
}
