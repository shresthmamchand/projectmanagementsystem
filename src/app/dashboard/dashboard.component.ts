import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showDashboardContent = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        
        this.showDashboardContent = event.url === '/dashboard';
      }
    });
  }
}
