import { Component, Input, OnInit } from '@angular/core';
import { ExchangeOffer } from '../../types/exchange_offer.types';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../my-account/utils/auth.service';
import { User, UserSearchParams } from '../../../my-account/types/user.types';

@Component({
  selector: 'tm-exchange-offer-tile',
  templateUrl: './exchange-offer-tile.component.html',
  styleUrls: ['./exchange-offer-tile.component.scss']
})
export class ExchangeOfferTileComponent implements OnInit{
  @Input() exchangeOffer!: ExchangeOffer;
  plusIcon = faPlus;
  sender!: User;
  receiver!: User;
  isOfferToCurrentUser!: boolean;
  tileConfig!: {
    title1: string,
    title2: string
  };
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const params: UserSearchParams = {
      ids: [this.exchangeOffer.senderId, this.exchangeOffer.receiverId]
    };
    this.authService.getUsersByParams(params).subscribe({
      next: users => {
        this.sender = users.find(user => user.id === this.exchangeOffer.senderId)!;
        this.receiver = users.find(user => user.id === this.exchangeOffer.receiverId)!;
        this.isOfferToCurrentUser = this.offerToCurrentUser();
        this.setTileConfig();
      },
      error: error => {
        console.error(error);
      }
    });
  }

  offerToCurrentUser = () => this.exchangeOffer.receiverId === this.authService.getCurrentUserId();

  setTileConfig() {
    if (this.isOfferToCurrentUser) {
      this.setTitles(`${this.sender.username} offered You`, `For`);
      return;
    }
    this.setTitles(`You offered ${this.receiver.username}`, `For`);
  }

  setTitles(title1: string, title2: string) {
    this.tileConfig = {
      title1: title1,
      title2: title2
    };
  }
}