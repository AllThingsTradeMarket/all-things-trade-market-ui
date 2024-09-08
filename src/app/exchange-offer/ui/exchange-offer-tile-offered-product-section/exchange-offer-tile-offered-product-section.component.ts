import { Component, Input } from '@angular/core';
import { ExchangeOffer } from '../../types/exchange_offer.types';

@Component({
  selector: 'tm-exchange-offer-tile-offered-product-section',
  templateUrl: './exchange-offer-tile-offered-product-section.component.html',
  styleUrls: ['./exchange-offer-tile-offered-product-section.component.scss']
})
export class ExchangeOfferTileOfferedProductSectionComponent {
  @Input() exchangeOffer!: ExchangeOffer;
  @Input() sectionTtile!: string;
}