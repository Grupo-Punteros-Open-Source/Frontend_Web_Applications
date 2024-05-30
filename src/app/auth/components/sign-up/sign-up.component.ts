import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  newUser = {
    username: '',
    email: '',
    address: '',
    password: '',
    customer: false,
  };
  termsAccepted: boolean = false;


  constructor(private userService: UserService, private router: Router) { }

  onSignUp() {
    // Asignar el valor booleano adecuado para `customer`
    this.newUser.customer = this.newUser.customer ? true : false;

    this.userService.create(this.newUser).subscribe(
        response => {
          console.log('User added successfully', response);
          this.router.navigate(['/workshop']);
        },
        error => {
          console.error('There was an error!', error);
        }
    );
  }

  toggleCustomer(event: any) {
    this.newUser.customer = event.target.checked;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
