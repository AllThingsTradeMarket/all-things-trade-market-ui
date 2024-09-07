import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tm-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  offerTitle: string = '';
  constructor(private router: Router, private route: ActivatedRoute) { };

  search() {
    this.router.navigate(['/offers'], { queryParams: { title: this.offerTitle } });
}
}
