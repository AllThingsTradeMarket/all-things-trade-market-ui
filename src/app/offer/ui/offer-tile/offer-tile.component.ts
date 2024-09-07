import { Component, Input, OnInit } from '@angular/core'; 
import { Offer, OfferActionConfig } from '../../types/offer.types';
import { getOfferImagePath } from '../../utils/offer.helpers';
import { isEmpty } from 'lodash';
import { faCalendarAlt, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
 
@Component({ 
   selector: 'tm-offer-tile', 
   templateUrl: './offer-tile.component.html', 
   styleUrls: ['./offer-tile.component.scss'] 
}) 
export class OfferTileComponent implements OnInit {
   @Input() offer!: Offer;
   @Input() isCurrentUserOffer!: boolean;
   @Input() noActions!: boolean;
   noImages: boolean = false;
   calendarIcon = faCalendarAlt;
   moneyIcon = faMoneyBillAlt;
   actionsConfig: OfferActionConfig[] = [];

   constructor(private router: Router) { }

   ngOnInit(): void {
      this.noImages = isEmpty(this.offer.images);
      this.setActionsConfig();
   }

   getImagePath = () => getOfferImagePath(this.offer.images[0]);

   setActionsConfig() {
      if (this.noActions) {
         return;
      }
      
      if (this.isCurrentUserOffer) {
         this.actionsConfig = [
            {
               text: 'Edit',
               onClick: () => {
                  alert('function not implemented yet');
               },
               isAlt: false
            },
            {
               text: 'Delete',
               onClick: () => {
                  alert('function not implemented yet');
               },
               isAlt: true
            }
         ];
      } else {
         this.actionsConfig = [
            {
               text: 'Buy now',
               onClick: () => {
                  
               },
               isAlt: false
            },
            {
               text: 'Offer exchange',
               onClick: () => {
                  this.router.navigate(['exchange_offers/create'], { queryParams: {
                     requestedProductId: this.offer.id
                  }});
               },
               isAlt: true
            }
         ];
      }
   }
} 
