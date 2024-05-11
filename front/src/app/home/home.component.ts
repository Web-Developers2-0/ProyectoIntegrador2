import { Component } from '@angular/core';
import { CarrouselComponent } from '../shared/carrousel/carrousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
