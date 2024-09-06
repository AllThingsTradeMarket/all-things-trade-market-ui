import { Component, Input, OnInit } from '@angular/core'; 
import { Offer } from '../../../shared/model/offer.types';
import { getOfferImagePath } from '../../utils/offer.helpers';
import { isEmpty } from 'lodash';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
 
@Component({ 
   selector: 'tm-my-offer-tile', 
   templateUrl: './my-offer-tile.component.html', 
   styleUrls: ['./my-offer-tile.component.scss'] 
}) 
export class MyOfferTileComponent implements OnInit {
   @Input() offer!: Offer;
   noImages: boolean = false;
   calendarIcon = faCalendar;

   ngOnInit(): void {
      this.noImages = isEmpty(this.offer.images);
   }

   getImagePath = () => getOfferImagePath(this.offer.images[0]);
} 
