import { Component, Input, OnInit } from '@angular/core';
import { ExchangeOfferStatus, ExchangeOfferTileActionConfig } from '../../types/exchange_offer.types';
import { exchangeStatusses } from '../../constants/exchange-offer.constants';

@Component({
  selector: 'tm-exchange-offer-tile-actions',
  templateUrl: './exchange-offer-tile-actions.component.html',
  styleUrls: ['./exchange-offer-tile-actions.component.scss']
})
export class ExchangeOfferTileActionsComponent implements OnInit {
  @Input() currentStatus!: ExchangeOfferStatus;
  @Input() isOfferToCurrentUser!: boolean;
  actionsConfig!: ExchangeOfferTileActionConfig[];
  readonly colors = {
    pending: 'yellow',
    accepted: 'green',
    rejected: 'red'
  };

  ngOnInit(): void {
    this.setActionsConfig();
  }

  setActionsConfig() {
    this.actionsConfig = [
      {
        text: 'Reject',
        color: this.colors[exchangeStatusses.REJECTED],
        onClick: () => {
          console.log('Rejecting offer');
        },
        displayAction: this.currentStatus === exchangeStatusses.PENDING && this.isOfferToCurrentUser
      },
      {
        text: 'Accept',
        color: this.colors[exchangeStatusses.ACCEPTED],
        onClick: () => {
          console.log('Accepting offer');
        },
        displayAction: this.currentStatus === exchangeStatusses.PENDING && this.isOfferToCurrentUser
      },
      {
        text: 'Cancel',
        color: this.colors[exchangeStatusses.REJECTED],
        onClick: () => {
          console.log('Canceling offer');
        },
        displayAction: this.currentStatus === exchangeStatusses.PENDING && !this.isOfferToCurrentUser
      }
    ]
  }

  getColorBasedOnStatus = () => this.colors[`${this.currentStatus}`]; 
}