import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import dashboardData from '../../assets/data/dashboardData.json';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any[] = [];
  userEmail: string = '';

  isAuthenticated:boolean = false;
  constructor() {
    this.dashboardData = dashboardData;
   }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData) {
      this.userEmail = userData.email;
    } 
  }
} 