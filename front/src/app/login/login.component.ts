import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';
import { LoginRequest } from '../services/auth/login.request';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class LoginComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get Password() {
    return this.form.get('password');
  }

  get Email() {
    return this.form.get('email');
  }

  onSubmit(event: Event) {
    {
      event.preventDefault();

      if (this.form.valid) {
        this.loginService.methodlogin(this.form.value as LoginRequest);
        localStorage.setItem('userData', JSON.stringify(this.form.value));
        
        this.router.navigate(['/dashboard']);
        this.form.reset();
      } else {
        alert('Fallo en el envió del formulario');
        this.form.markAllAsTouched();
      }
      }
    }
}