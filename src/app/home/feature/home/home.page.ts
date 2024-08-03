import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomePageDataService } from '../../data-access/home-page-data.service';
import { Offer } from '../../model/home-page.types';

@Component({
  selector: 'tm-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  topOffers: Offer[] = [];

  constructor(private homePageDataService: HomePageDataService) {
    this.homePageDataService.getTopOffers().subscribe((topOffers) => {
      this.topOffers = topOffers.response;
      console.log(this.topOffers)
    });
  }

  ngOnInit() { }
}
