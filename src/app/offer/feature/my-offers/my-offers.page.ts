import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OfferDataService } from '../../data-access/offer-data.service';
import { Offer } from '../../../shared/model/offer.types';

@Component({
  selector: 'tm-my-offers',
  templateUrl: './my-offers.page.html',
  styleUrls: ['./my-offers.page.scss']
})
export class MyOffersPage implements OnInit {
  userOffers!: Offer[];
  constructor(private offerDataService: OfferDataService) { }

  ngOnInit() {
    this.offerDataService.getUserOffers().subscribe(offers => {
      this.userOffers = offers;
    });
  }
}
