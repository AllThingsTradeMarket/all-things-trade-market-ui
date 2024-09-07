import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Offer } from '../../../offer/types/offer.types';
import { ExchangeOfferCreatorPayload, SelcectableOfferTileOutput } from '../../types/exchange_offer.types';
import { CreateExchangeOfferDto } from '../../dtos/exchange_offer.dtos';
import { AuthService } from '../../../my-account/utils/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tm-exchange-offer-creator',
  templateUrl: './exchange-offer-creator.component.html',
  styleUrls: ['./exchange-offer-creator.component.scss']
})
export class ExchangeOfferCreatorComponent {
  @Input() userOffers!: Offer[];
  selectedOffersIds: string[] = []; 
  showMoneyInput: boolean = false;
  offeredCash: number | undefined;
  @Output() onSubmit = new EventEmitter<ExchangeOfferCreatorPayload>();

  constructor(private router: Router) { }

  onOfferSelectChange(selectedOfferData: SelcectableOfferTileOutput) {
    if (selectedOfferData.isSelected) {
      this.selectedOffersIds.push(selectedOfferData.offerId);
      console.log(this.selectedOffersIds);
      return;
    }
    this.selectedOffersIds = this.selectedOffersIds
      .filter(offerId => offerId !== selectedOfferData.offerId);
    
    console.log(this.selectedOffersIds);
  }

  submitOffer() {
    this.onSubmit.emit({
      offeredProductsIds: this.selectedOffersIds,
      offeredCash: this.offeredCash
    });
  }

  cancel() {
    this.router.navigate(['../']);
  }
}