import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import dashboardData from '../../assets/data/dashboardData.json';
import { LoginService } from '../services/auth/login.service';;
import { Router } from '@angular/router';
import { User } from '../services/user/user';

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
  isAuthenticated:boolean = false;
  // userEmail: string = '';
  user: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    password: ''
  };
 
  constructor(private loginService: LoginService, private router: Router) {
    this.dashboardData = dashboardData;
  }

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData) {
      this.user = userData;
    } 
    
    this.loginService.userLogin.subscribe((isAuthenticated) => {
      this.isAuthenticated = this.isAuthenticated;
    });
  }

  logout() {
    this.loginService.methodlogout();
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }
} 