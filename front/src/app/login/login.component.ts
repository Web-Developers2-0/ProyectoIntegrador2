import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


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
  loading = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(event: Event) {
    {
      event.preventDefault();

      if (this.form.valid) {
       this.loading = true;

       setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
       }, 2000);
       this.form.reset();
      } else {
        alert('Fallo en el envió del formulario');
        this.form.markAllAsTouched();
      }
      }
    }
    
  get Password() {
    return this.form.get('password');
  }

  get Email() {
    return this.form.get('email');
  }
}