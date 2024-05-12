import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Propiedades para los valores del formulario
  userName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Declaración del formulario
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // Inicialización del formulario en el constructor
    this.signupForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  
  // Función para verificar si un campo está vacío
  isEmpty(value: string): boolean {
    return value === "";
  }

  // Función para verificar si un valor está entre un rango de longitud
  isBetween(length: number, min: number, max: number): boolean {
    return length >= min && length <= max;
  }

  // Función para verificar si la contraseña cumple con los requisitos
  isPasswordOk(pass: string): boolean {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return re.test(pass);
  }

  // Función para verificar si el correo electrónico es válido
  isEmailOk(email: string): boolean {
    const re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(email);
  }

  // Función para verificar si el teléfono es válido
  isPhoneOk(phone: string): boolean {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  }

  // Función para mostrar un mensaje de error para un campo específico
  showError(inputId: string, message: string): void {
    const inputElement = document.getElementById(inputId);
    const formField = inputElement?.parentElement;
    if (formField) {
      formField.classList.remove("success");
      formField.classList.add("error");
      const error = formField.querySelector("small");
      if (error) {
        error.textContent = message;
      }
    }
  }

  // Función para mostrar un mensaje de éxito para un campo específico
  showSuccess(inputId: string): void {
    const inputElement = document.getElementById(inputId);
    const formField = inputElement?.parentElement;
    if (formField) {
      formField.classList.remove("error");
      formField.classList.add("success");
      const error = formField.querySelector("small");
      if (error) {
        error.textContent = "";
      }
    }
  }

  // Función para verificar el nombre de usuario
  checkUserName(): boolean {
    const min = 4;
    const max = 16;
    const username = this.userName.trim();

    if (this.isEmpty(username)) {
      this.showError('user_name', "*Campo obligatorio");
      return false;
    } else if (!this.isBetween(username.length, min, max)) {
      this.showError('user_name', `El nombre debe tener entre ${min} y ${max} caracteres`);
      return false;
    } else {
      this.showSuccess('user_name');
      return true;
    }
  }

  // Función para verificar la contraseña
  checkPassword(): boolean {
    const password = this.password.trim();

    if (this.isEmpty(password)) {
      this.showError('password', "*Contraseña obligatoria");
      return false;
    } else if (!this.isPasswordOk(password)) {
      this.showError('password', "Debe tener por lo menos 8 caracteres, mayúscula, minúscula y símbolos");
      return false;
    } else {
      this.showSuccess('password');
      return true;
    }
  }

  // Función para verificar el correo electrónico
  checkEmail(): boolean {
    const emailValue = this.email.trim();

    if (this.isEmpty(emailValue)) {
      this.showError('email', "*Mail obligatorio");
      return false;
    } else if (!this.isEmailOk(emailValue)) {
      this.showError('email', "Mail no válido, debe contener un @ y un punto");
      return false;
    } else {
      this.showSuccess('email');
      return true;
    }
  }

  // Función para verificar el teléfono
  checkPhone(): boolean {
    const phoneValue = this.phone.trim();

    if (!this.isPhoneOk(phoneValue)) {
      this.showError('phone', "Teléfono no válido, debe contener 10 caracteres");
      return false;
    } else {
      this.showSuccess('phone');
      return true;
    }
  }
  
  // Función para verificar si las contraseñas coinciden
  checkPasswordsMatch(): boolean {
    if (this.password !== this.confirmPassword) {
      this.showError('password2', "Las contraseñas no coinciden");
      return false;
    } else {
      this.showSuccess('password2');
      return true;
    }
  }
  
  // Función para verificar la dirección
  checkAddress(): boolean {
    if (this.isEmpty(this.address)) {
      this.showError('address', "*Dirección requerida");
      return false;
    } else {
      this.showSuccess('address');
      return true;
    }
  }
  
  // Función para manejar el envío del formulario
  onSubmit(): void {
    const isValidUsername = this.checkUserName(); 
    const isValidPassword = this.checkPassword(); 
    const isValidEmail = this.checkEmail(); 
    const isValidPhone = this.checkPhone(); 
    const isValidPasswordMatch = this.checkPasswordsMatch();
    const isValidAddress = this.checkAddress(); 
  
    if (isValidUsername && isValidPassword && isValidEmail && isValidPhone && isValidPasswordMatch && isValidAddress) {
      // Aquí puedes colocar la lógica para manejar el envío del formulario
      console.log('Formulario enviado');
      // window.location.href = '../index.html';
    }
  }
}