import { Component, ViewChild } from '@angular/core';
import {UserService} from "../../services/user.service";
import {CustomerService} from "../../services/customer.service";
import {WorkshopService} from "../../services/workshop.service";
import {User} from "../../model/user.entity";
import {Customer} from "../../model/customer.entity";
import {Workshop} from "../../model/workshop.entity";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  @ViewChild('signUpForm', { static: false }) userForm!: NgForm;
  user: User = new User(0, '', '');
  customer: Customer = new Customer(0,0, 0,'','','','','');
  workshop: Workshop = new Workshop(0,0,'','','','','');
  type: string = "";

  constructor(private userService: UserService,
              private customerService: CustomerService,
              private workshopService: WorkshopService,
              private router:Router) {}

  getLastUserId() {
    return new Promise((resolve, reject) => {
      this.userService.getAll().subscribe({
        next: (response: any) => {
          let users = response;
          let lastUser = users[users.length - 1];
          this.user.id = lastUser.id + 1;
          console.log('Last user id', this.user.id);
          resolve(true);
        },
        error: error => {
          console.error('Error getting users', error);
          reject(error);
        }
      });
    });
  }

  getLastCustomerId() {
    return new Promise((resolve, reject) => {
      this.customerService.getAll().subscribe({
        next: (response: any) => {
          let customers = response;
          let lastCustomer = customers[customers.length - 1];
          this.customer.id = lastCustomer.id + 1;
          console.log('Last customer id', this.customer.id);
          resolve(true);
        },
        error: error => {
          console.error('Error getting customers', error);
          reject(error);
        }
      });
    });
  }

  getLastWorkshopId() {
    return new Promise((resolve, reject) => {
      this.workshopService.getAll().subscribe({
        next: (response: any) => {
          let workshops = response;
          let lastWorkshop = workshops[workshops.length - 1];
          this.workshop.id = lastWorkshop.id + 1;
          console.log('Last workshop id', this.workshop.id);
          resolve(true);
        },
        error: error => {
          console.error('Error getting workshops', error);
          reject(error);
        }
      });
    });
  }

  async onSignUp() {
    if (this.userForm && this.userForm.form.valid) {
      try {
        await this.getLastUserId();
        this.userService.create(this.user).subscribe({
          next: async response => {
            console.log('User created', response);
            this.userForm.resetForm();

            // Verificar el tipo de usuario
            if (this.type === 'Customer') {
              // Crear un nuevo cliente
              try {
                await this.getLastCustomerId();
                this.customer.user_id = this.user.id;
                this.customer.name = this.userForm.value.name;
                this.customer.address = this.userForm.value.address;
                // Repite para los demás campos

                this.customerService.create(this.customer).subscribe({
                  next: response => {
                    console.log('Customer created', response);
                  },
                  error: error => {
                    console.error('Error creating customer', error);
                  }
                });
              } catch (error) {
                console.error('Error getting last customer id', error);
              }
            } else if (this.type === 'Workshop') {
              // Crear un nuevo taller
              try {
                await this.getLastWorkshopId();
                this.workshop.user_id = this.user.id;
                this.workshop.name = this.userForm.value.name;
                this.workshop.address = this.userForm.value.address;
                // Repite para los demás campos

                this.workshopService.create(this.workshop).subscribe({
                  next: response => {
                    console.log('Workshop created', response);
                  },
                  error: error => {
                    console.error('Error creating workshop', error);
                  }
                });
              } catch (error) {
                console.error('Error getting last workshop id', error);
              }
            }
          },
          error: error => {
            console.error('Error creating user', error);
          }
        });
      } catch (error) {
        console.error('Error getting last user id', error);
      }
    } else {
      console.error('Invalid data in form');
    }
  }

  navigateToSignIn() {
    this.router.navigate(['sign-in']);
  }

}