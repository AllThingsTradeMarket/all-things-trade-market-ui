import { Component, Input, OnInit } from '@angular/core';
import { ExchangeOfferStatus, ExchangeOfferTileActionConfig } from '../../types/exchange_offer.types';
import { exchangeStatusses } from '../../constants/exchange-offer.constants';
import { ConfirmModalService } from '../../../shared/utils/confirm-modal.service';
import { ExchangeOfferDataService } from '../../data-access/exchange-offer-data.service';
import { LoadingService } from '../../../shared/utils/loading.service';

@Component({
  selector: 'tm-exchange-offer-tile-actions',
  templateUrl: './exchange-offer-tile-actions.component.html',
  styleUrls: ['./exchange-offer-tile-actions.component.scss']
})
export class ExchangeOfferTileActionsComponent implements OnInit {
  @Input() currentStatus!: ExchangeOfferStatus;
  @Input() isOfferToCurrentUser!: boolean;
  @Input() exchangeOfferId!: number;
  actionsConfig!: ExchangeOfferTileActionConfig[];
  readonly colors = {
    pending: 'yellow',
    accepted: 'green',
    rejected: 'red',
    canceled: 'red'
  };

  constructor(private confirmModalService: ConfirmModalService, private exchangeOfferDataService: ExchangeOfferDataService,
      private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.setActionsConfig();
  }

  setActionsConfig() {
    this.actionsConfig = [
      {
        text: 'Reject',
        color: this.colors[exchangeStatusses.REJECTED],
        onClick: () => {
          this.confirmModalService.openConfirmModal({
            text: 'Do You want to reject this offer?',
            onCancel: () => {
              this.confirmModalService.closeConfirmModal();
            },
            onConfirm: () => {
              this.confirmModalService.closeConfirmModal();
              this.updateExchangeOfferStatus(exchangeStatusses.REJECTED);
            }
          });
        },
        displayAction: this.currentStatus === exchangeStatusses.PENDING && this.isOfferToCurrentUser
      },
      {
        text: 'Accept',
        color: this.colors[exchangeStatusses.ACCEPTED],
        onClick: () => {
          this.confirmModalService.openConfirmModal({
            text: 'Do You want to accept this offer?',
            onCancel: () => {
              this.confirmModalService.closeConfirmModal();
            },
            onConfirm: () => {
              this.confirmModalService.closeConfirmModal();
              this.updateExchangeOfferStatus(exchangeStatusses.ACCEPTED);
            }
          });
        },
        displayAction: this.currentStatus === exchangeStatusses.PENDING && this.isOfferToCurrentUser
      },
      {
        text: 'Cancel',
        color: this.colors[exchangeStatusses.CANCELED],
        onClick: () => {
          this.confirmModalService.openConfirmModal({
            text: 'Do You want to cancel this offer?',
            onCancel: () => {
              this.confirmModalService.closeConfirmModal();
            },
            onConfirm: () => {
              this.confirmModalService.closeConfirmModal();
              this.updateExchangeOfferStatus(exchangeStatusses.CANCELED);
            }
          });
        },
        displayAction: this.currentStatus === exchangeStatusses.PENDING && !this.isOfferToCurrentUser
      }
    ]
  }

  getColorBasedOnStatus = () => this.colors[`${this.currentStatus}`];

  updateExchangeOfferStatus(status: ExchangeOfferStatus) {
    this.loadingService.setIsLoading(true);
    this.exchangeOfferDataService.updateExchangeOfferStatus(this.exchangeOfferId, status)
      .subscribe({
        next: () => {
          window.location.reload();
          this.loadingService.setIsLoading(false);
        },
        error: error => {
          console.error(error);
          this.loadingService.setIsLoading(false);
        }
      });
  }
}