import { Component } from '@angular/core';

@Component({
  selector: 'tm-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor() {};

  search() {
    console.log('searching');
  }
}
