import { Component, Input } from '@angular/core';
import { Offer } from '../../types/offer.types';

@Component({
  selector: 'tm-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent {
  @Input() offers!: Offer[];
  @Input() isCurrentUserOffers!: boolean;
}
