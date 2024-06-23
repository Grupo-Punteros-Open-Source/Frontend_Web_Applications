import { Component } from '@angular/core';
import { User } from '../../model/user.entity';
import { UserService } from '../../services/user.service';
import { CustomerService } from '../../services/customer.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/customer.entity';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  user: User = {} as User;
  customer: Customer = {} as Customer;

  constructor(private userService: UserService,
              private customerService: CustomerService,
              private authService: AuthenticationService,
              private router: Router) {}

  onLogin() {
    console.log('Username:', this.username);
    this.userService.getAll().subscribe({
      next: (users: any) => {
        this.user = users.find((user: User) => user.username === this.username && user.password === this.password);
        if (this.user) {
          console.log('User logged in successfully');
          localStorage.setItem('user', JSON.stringify(this.user.id));
          this.verifyUser();
        } else {
          this.errorMessage = 'Invalid username or password.';
          console.log(this.errorMessage);
        }
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });
  }

  verifyUser() {
    if (this.user) {
      this.customerService.getAll().subscribe({
        next: (customers: any) => {
          console.log('Customers:', customers);
          this.customer = customers.find((w: Customer) => Number(w.user_id) === Number(this.user.id));
          console.log('Customer:', this.customer);
          console.log('User:', this.user.id);
          if (this.customer) {
            console.log('User is a customer');
            localStorage.setItem('type', 'customer');
            this.authService.updateAuthStatus('customer');
            this.router.navigate(['customer/home']);
          } else {
            console.log('User is a workshop');
            localStorage.setItem('type', 'workshop');
            this.authService.updateAuthStatus('workshop');
            this.router.navigate(['workshop/home']);
          }
        },
        error: (error) => {
          console.log('Error fetching customers:', error);
        }
      });
    }
  }

  navigateToSignUp() {
    this.router.navigate(['sign-up']);
  }
}
