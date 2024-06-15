import { Component } from '@angular/core';
import {AuthenticationService} from "../../../User/services/authentication.service";

@Component({
  selector: 'app-home-workshop',
  templateUrl: './home-workshop.component.html',
  styleUrls: ['./home-workshop.component.css']
})
export class HomeWorkshopComponent {
  constructor(private authService: AuthenticationService) {
    this.authService.updateAuthStatus('workshop');
  }


}
