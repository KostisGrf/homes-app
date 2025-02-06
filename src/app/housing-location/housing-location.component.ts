import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <section class=listing>
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterio photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.name}}, {{housingLocation.state}}</p>
      <a routerLink="details">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:Housinglocation;
}
