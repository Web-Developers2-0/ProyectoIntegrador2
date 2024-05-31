import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../services/user/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {
  user: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(2).subscribe(user => {
      this.user = user;
    });
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe(response => {
      console.log(response);
    });
  }
}
