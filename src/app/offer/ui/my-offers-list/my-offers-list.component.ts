import { Component, Input } from '@angular/core';
import { Offer } from '../../../shared/model/offer.types';

@Component({
  selector: 'tm-my-offers-list',
  templateUrl: './my-offers-list.component.html',
  styleUrls: ['./my-offers-list.component.scss']
})
export class MyOffersListComponent {
  @Input() offers!: Offer[];
}