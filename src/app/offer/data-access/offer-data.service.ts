import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/utils/apiService';
import { Offer } from '../../shared/model/offer.types';
import { CreateOfferDto } from '../dtos/offer.dtos';
import { AuthService } from '../../my-account/utils/auth.service';
import { Observable } from 'rxjs';
import { IdResponse } from '../../shared/model/shared.types';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferDataService {
  private readonly endpoint = 'offers';

  constructor(private offerApiService: ApiService<Offer>, private authService: AuthService) { }

  createOffer(offer: FormData): Observable<IdResponse> {
    offer.append('userId', this.authService.getCurrentUserId());
    return this.offerApiService.post<IdResponse, FormData>(this.endpoint, offer, undefined, new HttpHeaders());
  }

  getUserOffers(): Observable<Offer[]> {
    return this.offerApiService.get<Offer[]>(`${this.endpoint}/user/${this.authService.getCurrentUserId()}`);
  }
}