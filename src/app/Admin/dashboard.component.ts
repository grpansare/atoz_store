import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public isExpanded = false;
  public routeLinks = [
    { link: "about", name: "About", icon: "dashboard" },
    { link: "locations", name: "Locations", icon: "account_balance" },
  ];

  

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
