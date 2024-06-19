import { Component } from '@angular/core';
import {AuthenticationService} from "../../../User/services/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navegation-bar-workshop',
  templateUrl: './side-navegation-bar-workshop.component.html',
  styleUrl: './side-navegation-bar-workshop.component.css'
})
export class SideNavegationBarWorkshopComponent {
  options = [
    { title: 'Home', path: '/workshop/home', icon: 'home' },
    { title: 'Customers', path: '/workshop/customers', icon: 'people' },
    { title: 'Maintenances', path: '/workshop/maintenances', icon: 'build'},
    { title: 'Profile', path: '/workshop/profile', icon: 'person' },
    { title: 'Support', path: '/workshop/support', icon: 'help' },
    { title: 'Plans', path: '/workshop/plans', icon: 'list' },
    { title: 'Vehicles', path: '/customer/vehicle', icon: 'directions_car' }
  ]

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  unlogin() {
    this.authenticationService.updateAuthStatus('xd');
    this.router.navigate(['/sign-in']);
  }

}
