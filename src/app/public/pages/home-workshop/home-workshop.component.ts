import { Component } from '@angular/core';
import {AuthService} from "../../../User/services/auth.service";

@Component({
  selector: 'app-home-workshop',
  templateUrl: './home-workshop.component.html',
  styleUrls: ['./home-workshop.component.css']
})
export class HomeWorkshopComponent {
  constructor(private authService: AuthService) {
    this.authService.updateAuthStatus('workshop');
  }


}
