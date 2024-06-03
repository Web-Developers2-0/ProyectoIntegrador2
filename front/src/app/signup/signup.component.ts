import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service'; 
import { User } from '../services/user/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SignupComponent {
  signupForm: FormGroup;  

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,  // Inyecta el UserService
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      userSurname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Validacion de password
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    // Verificar si confirmPassword no es null antes de llamar a setErrors
    if (password && confirmPassword) {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setErrors({ mismatch: true });
        } else {
            confirmPassword.setErrors(null);
        }
    }
  }

  // Función para verificar si un campo está vacío
  isEmpty(value: string): boolean {
    return value === '';
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
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
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
      formField.classList.remove('success');
      formField.classList.add('error');
      const error = formField.querySelector('small');
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
      formField.classList.remove('error');
      formField.classList.add('success');
      const error = formField.querySelector('small');
      if (error) {
        error.textContent = '';
      }
    }
  }

  // Función para verificar el nombre de usuario
  checkUserName(): boolean {
    const min = 4;
    const max = 16;
    const username = this.signupForm.get('userName')?.value.trim();

    if (this.isEmpty(username)) {
      this.showError('userName', '*Campo obligatorio');
      return false;
    } else if (!this.isBetween(username.length, min, max)) {
      this.showError('userName', `El nombre debe tener entre ${min} y ${max} caracteres`);
      return false;
    } else {
      this.showSuccess('userName');
      return true;
    }
  }

  // Función para verificar el apellido de usuario
  checkUserSurname(): boolean {
    const min = 4;
    const max = 16;
    const usersurname = this.signupForm.get('userSurname')?.value.trim();

    if (this.isEmpty(usersurname)) {
      this.showError('userSurname', '*Campo obligatorio');
      return false;
    } else if (!this.isBetween(usersurname.length, min, max)) {
      this.showError('userSurname', `El apellido debe tener entre ${min} y ${max} caracteres`);
      return false;
    } else {
      this.showSuccess('userSurname');
      return true;
    }
  }

  // Función para verificar la contraseña
  checkPassword(): boolean {
    const password = this.signupForm.get('password')?.value.trim();

    if (this.isEmpty(password)) {
      this.showError('password', '*Contraseña obligatoria');
      return false;
    } else if (!this.isPasswordOk(password)) {
      this.showError('password', 'Debe tener por lo menos 8 caracteres, mayúscula, minúscula y símbolos');
      return false;
    } else {
      this.showSuccess('password');
      return true;
    }
  }

  // Función para verificar el correo electrónico
  checkEmail(): boolean {
    const emailValue = this.signupForm.get('email')?.value.trim();

    if (this.isEmpty(emailValue)) {
      this.showError('email', '*Mail obligatorio');
      return false;
    } else if (!this.isEmailOk(emailValue)) {
      this.showError('email', 'Mail no válido, debe contener un @ y un punto');
      return false;
    } else {
      this.showSuccess('email');
      return true;
    }
  }

  // Función para verificar el teléfono
  checkPhone(): boolean {
    const phoneValue = this.signupForm.get('phone')?.value.trim();

    if (!this.isPhoneOk(phoneValue)) {
      this.showError('phone', 'Teléfono no válido, debe contener 10 caracteres');
      return false;
    } else {
      this.showSuccess('phone');
      return true;
    }
  }

  // Función para verificar si las contraseñas coinciden
  checkPasswordsMatch(): boolean {
    const password = this.signupForm.get('password')?.value.trim();
    const confirmPassword = this.signupForm.get('confirmPassword')?.value.trim();

    if (password !== confirmPassword) {
      this.showError('confirmPassword', 'Las contraseñas no coinciden');
      return false;
    } else {
      this.showSuccess('confirmPassword');
      return true;
    }
  }
  
  // Función para verificar la dirección
  checkAddress(): boolean {
    const address = this.signupForm.get('address')?.value.trim();

    if (this.isEmpty(address)) {
      this.showError('address', '*Dirección requerida');
      return false;
    } else {
      this.showSuccess('address');
      return true;
    }
  }

  // Función para manejar el envío del formulario
  onSubmit(): void {
    const isValidUsername = this.checkUserName(); 
    const isValidSurname = this.checkUserSurname(); 
    const isValidPassword = this.checkPassword(); 
    const isValidEmail = this.checkEmail(); 
    const isValidPhone = this.checkPhone(); 
    const isValidPasswordMatch = this.checkPasswordsMatch();
    const isValidAddress = this.checkAddress(); 
  
    if (isValidUsername && isValidSurname && isValidPassword && isValidEmail && isValidPhone && isValidPasswordMatch && isValidAddress) {
      const formValues = this.signupForm.value;
      const user: User = {
        id: 0,
        email: formValues.email,
        first_name: formValues.userName,
        last_name: formValues.userSurname,
        phone: formValues.phone,
        address: formValues.address,
        password: formValues.password,
        confirmPassword: formValues.confirmPassword  // Este campo no se enviará al backend
      };

      this.userService.registerUser(user).subscribe(
        response => {
          console.log('Signup successful', response);
          this.router.navigate(['/login']);
        },
        
      );
    }
  }
}