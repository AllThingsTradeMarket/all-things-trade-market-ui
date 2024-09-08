import { Component, Input } from '@angular/core';
import { getOfferImagePath } from '../../utils/offer.helpers';
import { Offer } from '../../types/offer.types';

@Component({
  selector: 'tm-offer-tile-small',
  templateUrl: './offer-tile-small.component.html',
  styleUrls: ['./offer-tile-small.component.scss']
})
export class OfferTileSmallComponent {
  @Input() offer!: Offer;

  getOfferImagePath = () => getOfferImagePath(this.offer.images[0]);

}