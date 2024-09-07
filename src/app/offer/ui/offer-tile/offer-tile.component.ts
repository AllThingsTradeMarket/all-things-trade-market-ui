import { Component, Input, OnInit } from '@angular/core'; 
import { Offer } from '../../model/offer.types';
import { getOfferImagePath } from '../../utils/offer.helpers';
import { isEmpty } from 'lodash';
import { faCalendarAlt, faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons';
 
@Component({ 
   selector: 'tm-offer-tile', 
   templateUrl: './offer-tile.component.html', 
   styleUrls: ['./offer-tile.component.scss'] 
}) 
export class OfferTileComponent implements OnInit {
   @Input() offer!: Offer;
   noImages: boolean = false;
   calendarIcon = faCalendarAlt;
   moneyIcon = faMoneyBillAlt;

   ngOnInit(): void {
      this.noImages = isEmpty(this.offer.images);
   }

   getImagePath = () => getOfferImagePath(this.offer.images[0]);
} 
