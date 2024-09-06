import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/utils/apiService';
import { Offer } from '../../shared/model/offer.types';
import { CreateOfferDto } from '../dtos/offer.dtos';

@Injectable({
  providedIn: 'root'
})
export class OfferDataService {
  constructor(private offerApiService: ApiService<Offer>) { }

  createOffer(offer: CreateOfferDto) {

  }
}