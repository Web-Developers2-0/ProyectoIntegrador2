import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

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

  checkPassword(): boolean {
    const password = this.password.trim();

    if (this.isEmpty(password)) {
      this.showError('password', "*Contraseña obligatoria");
      return false;
    } else if (!this.isPasswordOk(password)) {
      this.showError('password', "Debe tener por lo menos 8 caracteres, mayuscula, minuscula y simbolos");
      return false;
    } else {
      this.showSuccess('password');
      return true;
    }
  }

  checkEmail(): boolean {
    const emailValue = this.email.trim();

    if (this.isEmpty(emailValue)) {
      this.showError('email', "*Mail obligatorio");
      return false;
    } else if (!this.isEmailOk(emailValue)) {
      this.showError('email', "Mail no valido, debe contener un @ y un punto");
      return false;
    } else {
      this.showSuccess('email');
      return true;
    }
  }

  checkPhone(): boolean {
    const phoneValue = this.phone.trim();

    if (!this.isPhoneOk(phoneValue)) {
      this.showError('phone', "Telefono no valido, debe contener 10 caracteres");
      return false;
    } else {
      this.showSuccess('phone');
      return true;
    }
  }

  checkPasswordsMatch(): boolean {
    if (this.password !== this.confirmPassword) {
      this.showError('password2', "Las contraseñas no coinciden");
      return false;
    } else {
      this.showSuccess('password2');
      return true;
    }
  }

  checkAddress(): boolean {
    if (this.isEmpty(this.address)) {
      this.showError('address', "*Dirección requerida");
      return false;
    } else {
      this.showSuccess('address');
      return true;
    }
  }

  isEmpty(value: string): boolean {
    return value === "";
  }

  isBetween(length: number, min: number, max: number): boolean {
    return length >= min && length <= max;
  }

  isPasswordOk(pass: string): boolean {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return re.test(pass);
  }

  isEmailOk(email: string): boolean {
    const re =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(email);
  }

  isPhoneOk(phone: string): boolean {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  }

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