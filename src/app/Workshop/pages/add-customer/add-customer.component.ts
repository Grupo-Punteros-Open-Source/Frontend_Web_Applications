import { Component } from '@angular/core';
import {Location} from "@angular/common";
import {User} from "../../../User/model/user.entity";
import {UserService} from "../../../User/services/user.service";
import {CustomerService} from "../../../User/services/customer.service";
import {WorkshopService} from "../../../User/services/workshop.service";
import {Workshop} from "../../../User/model/workshop.entity";
import {Customer} from "../../../User/model/customer.entity";

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  searchName: string = '';
  workshopuser: User = {} as User;
  workshop: Workshop = {} as Workshop;
  foundUser: User = {} as User;
  statusMessage: string = '';
  chosenAccount: User = {} as User;
  chosenAccount2: Customer = {} as Customer;

  constructor(private location: Location,
              private userService: UserService,
              private customerService: CustomerService,
              private workshopService: WorkshopService) {
  }

  searchCustomer(): void {
    this.userService.getAll().subscribe((users: any) => {
      this.foundUser = users.find((user: User) => user.username === this.searchName);
      if (this.foundUser) {
        this.workshopService.getAll().subscribe((workshops: any) => {
          const foundWorkshop = workshops.find((workshop: Workshop) => Number(workshop.user_id) === Number(this.foundUser.id));
          if (foundWorkshop) {
            this.statusMessage = 'Account is a workshop (x)';
          } else {
            this.customerService.getAll().subscribe((customers: any) => {
              const foundCustomer = customers.find((customer: any) => Number(customer.user_id) === Number(this.foundUser.id));
              if (foundCustomer && foundCustomer.workshop_id) {
                this.statusMessage = 'Account already associated with a workshop';
              } else {
                this.statusMessage = 'Account found';
                this.chosenAccount = this.foundUser;
                this.chosenAccount2 = foundCustomer;
              }
            });
          }
        });
      } else {
        this.statusMessage = 'Account not found';
      }
    });
  }

  async addClient(): Promise<void> {
    if (this.chosenAccount) {
      let userId = localStorage.getItem('user');
      if (userId) {
        userId = JSON.parse(userId);
        this.userService.getById(Number(userId)).subscribe((response: User) => {
          this.workshopuser = response;
          console.log(response);
          this.workshopService.getAll().subscribe((workshops: any) => {
            this.workshop = workshops.find((workshop: Workshop) => Number(workshop.user_id) === Number(this.workshopuser.id));
            if (this.workshop) {
              this.customerService.getAll().subscribe((customers: any) => {
                const foundCustomer = customers.find((customer: any) => Number(customer.user_id) === Number(this.chosenAccount.id));
                if (foundCustomer) {
                  let updatedCustomer = {
                    ...foundCustomer,
                    workshop_id: this.workshop.id
                  };
                  this.customerService.update(foundCustomer.id, updatedCustomer).subscribe(() => {
                    this.statusMessage = 'Client updated successfully';
                  });
                }
              });
            }
          });
        });
      }
    }
  }

  onCancel(): void {
    this.location.back();
  }
}