import { Component } from '@angular/core';
import {AuthService} from "../../../User/services/auth.service";
import {AuthenticationService} from "../../../IAM/services/authentication.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-navegation-bar-customer',
    templateUrl: './side-navegation-bar-customer.component.html',
    styleUrls: ['./side-navegation-bar-customer.component.css']
})
export class SideNavegationBarCustomerComponent {
    options = [
        { title: 'Home', path: '/customer/menu', icon: 'home' },
        { title: 'Profile', path: '/customer/profile', icon: 'account_circle' },
        { title: 'Vehicle', path: '/customer/vehicle', icon: 'directions_car' },
    ]

    constructor(private router: Router,
                private authenticationService: AuthService,
                private authService: AuthenticationService) {
    }

    unlogin() {
        this.authenticationService.updateAuthStatus('xd');
        this.authService.signOut();
        this.router.navigate(['/sign-in']);
    }
}