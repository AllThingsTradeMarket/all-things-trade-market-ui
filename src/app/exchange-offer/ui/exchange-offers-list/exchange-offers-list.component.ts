import { Component, Input } from '@angular/core';
import { ExchangeOffer } from '../../types/exchange_offer.types';
import { isEmpty } from 'lodash';

@Component({
  selector: 'tm-exchange-offers-list',
  templateUrl: './exchange-offers-list.component.html',
  styleUrls: ['./exchange-offers-list.component.scss']
})
export class ExchangeOffersListComponent {
  @Input() exchangeOffers!: ExchangeOffer[];
  
  offersEmpty = () => isEmpty(this.exchangeOffers);
}