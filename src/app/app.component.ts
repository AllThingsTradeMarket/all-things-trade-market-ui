import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './shared/utils/web-socket.service';
import { NotificationService } from './shared/utils/notification.service';
import { ExchangeOfferStatus } from './exchange-offer/types/exchange_offer.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private webSocketService: WebSocketService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.webSocketService.listenForNewExchangeOffers()
      .subscribe(() => {
        this.notificationService.displayNotification('Someone has offered you an exchange!\nGo to your exchanges tab to take a look at this.');
      });

    this.webSocketService.listenExchangeOffersUpdates()
      .subscribe((status: ExchangeOfferStatus) => {
        this.notificationService.displayNotification(`Someone has changed one of your exchange offers status to ${status}!\n
          Go to 'your exchanges' tab to take a look at this.`);
      });
  }
}
