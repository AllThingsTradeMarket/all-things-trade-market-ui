import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './shared/utils/web-socket.service';
import { NotificationService } from './shared/utils/notification.service';

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
  }
}
