import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersPage implements OnInit {
    constructor() {}

    ngOnInit() {}
}
