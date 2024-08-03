import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../model/home-page.types';

@Component({
  selector: 'tm-top-offers-bar',
  templateUrl: './top-offers-bar.component.html',
  styleUrl: './top-offers-bar.component.scss'
})
export class TopOffersBarComponent implements OnInit{
  @Input() topOffers!: Offer[];
  
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.topOffers);
  }
}
