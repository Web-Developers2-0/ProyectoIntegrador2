import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})

export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  paymentData: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadPaymentData();
    this.createForm();
  }

  loadPaymentData() {
    this.http.get<any[]>('assets/data/credencialesData.json').subscribe((data: any[]) => {
      this.paymentData = data;
    });
  }

  createForm() {
    this.paymentForm = this.fb.group({
      cardName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]]
    });
  }

  processPayment() {
    if (this.paymentForm.valid && this.compareData()) {
      alert('Gracias por su compra');
      this.router.navigate(['/dashboard']); 
    } else {
      alert('Por favor, completa el formulario correctamente:');
    }
  }

  compareData(): boolean {
    const formData = this.paymentForm.value;
    return this.paymentData.some((item: any) =>
      item.paymentForm.cardName === formData.cardName &&
      item.paymentForm.cardNumber === formData.cardNumber &&
      item.paymentForm.expiryDate === formData.expiryDate &&
      item.paymentForm.cvv === formData.cvv
    );
  }
}