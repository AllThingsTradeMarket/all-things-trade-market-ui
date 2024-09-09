import { Component, OnInit } from '@angular/core';
import { OfferDataService } from '../../data-access/offer-data.service';
import { Offer } from '../../types/offer.types';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OfferSearchParams } from '../../types/offer.types';
import { LoadingService } from '../../../shared/utils/loading.service';
import { AuthService } from '../../../my-account/utils/auth.service';
import { WebSocketService } from '../../../shared/utils/web-socket.service';

@Component({
  selector: 'tm-offers-list-page',
  templateUrl: './offers-list.page.html',
  styleUrls: ['./offers-list.page.scss']
})
export class OffersListPage implements OnInit {
  offers!: Offer[];
  constructor(private offerDataService: OfferDataService, private route: ActivatedRoute, 
    private loadingService: LoadingService, private router: Router, private authService: AuthService,
    private webSocketService: WebSocketService
  ) { }
  

  ngOnInit() {
    this.loadOffers();
    this.webSocketService.listenForNewOffers().subscribe({
      next: () => {
        this.loadOffers();
      },
      error: (error) => {
        console.error(error);
        this.loadingService.setIsLoading(false);
      }
    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadOffers();
      }
    });
  };

  private loadOffers() {
    this.loadingService.setIsLoading(true);
    this.offerDataService.getOffersByParameters(this.getParamsObject()).subscribe({
      next: offers => {
        this.loadingService.setIsLoading(false);
        this.offers = offers.filter(offer => offer.userId !== this.authService.getCurrentUserId());
      },
      error: (error) => {
        console.error(error);
        this.loadingService.setIsLoading(false);
      }
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
    return params;
  }
}
