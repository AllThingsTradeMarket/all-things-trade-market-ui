import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomePageDataService } from '../../data-access/home-page-data.service';

@Component({
  selector: 'tm-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  constructor(private homePageDataService: HomePageDataService) {

  }

  ngOnInit() { }
}
