import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { BACKEND_APP_URL } from '../constants/constants';
import { socketEvents } from '../constants/sockets_events';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(BACKEND_APP_URL);
  }

  listenForNewOffers(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on(socketEvents.NEW_OFFER, () => {
        observer.next();
      });
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
