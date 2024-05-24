import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navegation-bar',
  templateUrl: './side-navegation-bar.component.html',
  styleUrl: './side-navegation-bar.component.css'
})
export class SideNavegationBarComponent {
  options = [
    {path: 'workshop', title: 'Home', icon: 'home'},
    {path: 'workshop/invoices', title: 'Invoice', icon: 'folder'},

  ]
}


