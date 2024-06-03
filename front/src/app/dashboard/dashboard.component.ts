import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import dashboardData from '../../assets/data/dashboardData.json';
import { LoginService } from '../services/auth/login.service';;
import { Router } from '@angular/router';
import { User } from '../services/user/user';
import { UserService } from '../services/user/user.service';

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
  
  user: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    address: '',
    phone: 0,
    password: '',
    confirmPassword: '',
  };
 
  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {
    this.dashboardData = dashboardData;
  }

  ngOnInit(): void {
    this.userService.getUser(1).subscribe(
      (userData: User) => {
        this.user = userData;
      },
    )
    
    this.loginService.userLogin.subscribe((isAuthenticated) => {
      this.isAuthenticated = this.isAuthenticated;
    });
  }

  logout() {
    this.loginService.methodlogout();
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
} 