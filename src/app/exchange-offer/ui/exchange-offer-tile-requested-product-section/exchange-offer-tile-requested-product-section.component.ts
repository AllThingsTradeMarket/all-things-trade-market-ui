import { Component, Input } from '@angular/core';
import { ExchangeOffer } from '../../types/exchange_offer.types';

@Component({
  selector: 'tm-exchange-offer-tile-requested-product-section',
  templateUrl: './exchange-offer-tile-requested-product-section.component.html',
  styleUrls: ['./exchange-offer-tile-requested-product-section.component.scss']
})
export class ExchangeOfferTileRequestedProductSectionComponent {
  @Input() exchangeOffer!: ExchangeOffer;
  @Input() sectionTtile!: string;
}