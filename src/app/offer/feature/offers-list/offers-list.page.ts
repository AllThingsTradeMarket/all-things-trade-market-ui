import { Component, OnInit } from '@angular/core';
import { OfferDataService } from '../../data-access/offer-data.service';
import { Offer } from '../../model/offer.types';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OfferSearchParams } from '../../model/offer.types';
import { LoadingService } from '../../../shared/utils/loadingService';

@Component({
  selector: 'tm-offers-list-page',
  templateUrl: './offers-list.page.html',
  styleUrls: ['./offers-list.page.scss']
})
export class OffersListPage implements OnInit {
  offers!: Offer[];
  constructor(private offerDataService: OfferDataService, private route: ActivatedRoute, 
    private loadingService: LoadingService, private router: Router) { }
  

  ngOnInit() {
    this.loadOffers();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadOffers();
      }
    });
  };

  private loadOffers() {
    this.loadingService.setIsLoading(true);
    this.offerDataService.getOffersByParameters(this.getParamsObject()).subscribe(offers => {
      this.loadingService.setIsLoading(false);
      this.offers = offers;
    });
  }

  private getParamsObject(): OfferSearchParams {
    const params: OfferSearchParams = {};
    const title = this.route.snapshot.queryParamMap.get('title');
    const userId = this.route.snapshot.queryParamMap.get('userId');
    if(title) {
      params.title = title;
    }
    if(userId) {
      params.userId = userId;
    }
    console.log(params);
    return params;
  }
}
