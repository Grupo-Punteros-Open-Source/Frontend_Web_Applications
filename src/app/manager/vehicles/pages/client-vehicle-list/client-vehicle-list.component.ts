import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../services/customer.service";
import {Customer} from "../../../model/customer.entity";

@Component({
  selector: 'app-client-vehicle-list',
  templateUrl: './client-vehicle-list.component.html',
  styleUrl: './client-vehicle-list.component.css'
})

export class ClientVehicleListComponent implements OnInit {
  client: Customer;
  clientId: any;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) {
    this.client = new Customer('', '', 0, '', '', '', '');
    this.clientId = route.snapshot.paramMap.get('clientId');
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    this.customerService.getById(this.clientId)
      .subscribe((res: any) => {
        this.client = res;
        console.log(`Retrieving customer information for customer with id ${this.clientId}.`);
      });
  }

  addVehicle(): void {
    this.router.navigate([`workshop/customer/${this.clientId}/add-vehicle`]);
  }
}
