import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../../offer/types/offer.types';
import { OfferDataService } from '../../../offer/data-access/offer-data.service';
import { AuthService } from '../../../my-account/utils/auth.service';
import { ExchangeOfferCreatorPayload } from '../../types/exchange_offer.types';
import { CreateExchangeOfferDto } from '../../dtos/exchange_offer.dtos';
import { ExchangeOfferDataService } from '../../data-access/exchange-offer-data.service';
import { LoadingService } from '../../../shared/utils/loading-service';

@Component({
  selector: 'tm-offer-exchange',
  templateUrl: './offer-exchange.page.html',
  styleUrls: ['./offer-exchange.page.scss']
})
export class OfferExchangePage implements OnInit {
  requestedProductId!: string;
  requestedProduct!: Offer;
  userOffers!: Offer[];

  constructor(private route: ActivatedRoute, private offerDataService: OfferDataService, 
    private authService: AuthService, private exchangeOfferDataService: ExchangeOfferDataService,
    private router: Router, private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.getQueryParams();
    this.offerDataService.getOffersByParameters({id: this.requestedProductId})
      .subscribe(offers => {
        this.requestedProduct = offers[0];
        console.log(this.requestedProduct);
      });
    this.offerDataService.getUserOffers().subscribe(
      {
        next: offers => {
          this.userOffers = offers ? offers : [];
        },
        error: (error) => {
          this.userOffers = [];
          console.error(error);
        }
      }
    );
  }

  submitExchangeOffer(offerCreatorPayload: ExchangeOfferCreatorPayload) {
    const exchangeOffer: CreateExchangeOfferDto = {
      receiverId: this.requestedProduct.userId,
      senderId: this.authService.getCurrentUserId(),
      requestedProductsIds: [this.requestedProductId],
      offeredCash: offerCreatorPayload.offeredCash,
      offeredProductsIds: offerCreatorPayload.offeredProductsIds
    };
    this.loadingService.setIsLoading(true);
    
    this.exchangeOfferDataService.createExchangeOffer(exchangeOffer).subscribe(
      {
        next: response => {
          console.log(response);
          this.router.navigate(['exchange_offers/yours']);
          this.loadingService.setIsLoading(false);
        },
        error: error => {
          console.error(error);
          this.loadingService.setIsLoading(false);
        }
      }
    )
  }

  private getQueryParams() {
    const requestedProductId = this.route.snapshot.queryParamMap.get('requestedProductId');
    if (requestedProductId) {
      this.requestedProductId = requestedProductId;
      return;
    }

    alert('requested offerId not passed');
    console.error('requested offerId not passed');
  }
}