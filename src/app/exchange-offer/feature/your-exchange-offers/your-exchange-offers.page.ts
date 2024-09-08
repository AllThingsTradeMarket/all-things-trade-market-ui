import { Component, OnInit } from '@angular/core';
import { OfferDataService } from '../../../offer/data-access/offer-data.service';
import { AuthService } from '../../../my-account/utils/auth.service';
import { ExchangeOfferDataService } from '../../data-access/exchange-offer-data.service';
import { LoadingService } from '../../../shared/utils/loading-service';
import { Router } from '@angular/router';
import { ExchangeOffer, ExchangeOfferSearchParams } from '../../types/exchange_offer.types';
import { isEmpty } from 'lodash';

@Component({
  selector: 'tm-your-exchange-offers',
  templateUrl: './your-exchange-offers.page.html',
  styleUrls: ['./your-exchange-offers.page.scss']
})
export class YourExchangeOffersPage implements OnInit {
  exchangeOffers!: ExchangeOffer[];
  displayOffersToUser: boolean = true;
  searchParams: ExchangeOfferSearchParams = {};

  constructor(private offerDataService: OfferDataService, private authService: AuthService,
    private exchangeOfferDataService: ExchangeOfferDataService, private router: Router,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadOffers();
  }

  loadOffers() {
    this.loadingService.setIsLoading(true);
    this.setSearchParams();
    this.exchangeOfferDataService.getExchangeOffersByParameters(this.searchParams)
      .subscribe({
        next: exchangeOffers => {
          this.loadingService.setIsLoading(false);
          this.exchangeOffers = exchangeOffers;
          console.log(exchangeOffers);
        },
        error: error => {
          console.error(error);
          this.loadingService.setIsLoading(false);
        }
      });
  }

  private setSearchParams() {
    if (this.displayOffersToUser) {
      this.searchParams = {
        receiverId: this.authService.getCurrentUserId()
      };
      return;
    }

    this.searchParams = {
      senderId: this.authService.getCurrentUserId()
    };
  }
}