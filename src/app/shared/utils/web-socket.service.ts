import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { BACKEND_APP_URL } from '../constants/constants';
import { socketEvents } from '../constants/sockets_events';
import { AuthService } from '../../my-account/utils/auth.service';
import { ExchangeOffer } from '../../exchange-offer/types/exchange_offer.types';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: Socket;

  constructor(private authService: AuthService) {
    this.socket = io(BACKEND_APP_URL);
  }

  listenForNewOffers(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on(socketEvents.NEW_OFFER, () => {
        observer.next();
      });
    });
  }

  listenForNewExchangeOffers(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on(socketEvents.NEW_EXCHANGE_OFFER, (newOffer: ExchangeOffer) => {
        if (this.authService.userIsLogged() && newOffer.receiverId === this.authService.getCurrentUserId())
          observer.next();
      })
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
