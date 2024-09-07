import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Offer } from '../../../offer/types/offer.types';
import { getOfferImagePath } from '../../../offer/utils/offer.helpers';
import { SelcectableOfferTileOutput } from '../../types/exchange_offer.types';

@Component({
  selector: 'tm-offer-selectable-tile',
  templateUrl: './offer-selectable-tile.component.html',
  styleUrls: ['./offer-selectable-tile.component.scss']
})
export class OfferSelectableTileComponent {
  @Input() offer!: Offer;
  @Output() selectOnChange = new EventEmitter<SelcectableOfferTileOutput>();
  isSelected: boolean = false;

  getOfferImagePath = () => getOfferImagePath(this.offer.images[0]);

  onSelectChange(event: any) {
    this.isSelected = event.target.checked; 
    this.selectOnChange.emit({
      isSelected: this.isSelected,
      offerId: this.offer.id
    });
  }
}