import { Injectable } from "@angular/core";
import { ApiService } from "../../shared/utils/apiService";
import { AuthService } from "../../my-account/utils/auth.service";
import { ExchangeOffer, ExchangeOfferSearchParams } from "../types/exchange_offer.types";
import { Observable } from "rxjs";
import { IdResponse } from "../../shared/model/shared.types";
import { CreateExchangeOfferDto } from "../dtos/exchange_offer.dtos";

@Injectable({
    providedIn: 'root'
})
export class ExchangeOfferDataService {
    private readonly endpoint = 'exchange_offers';

    constructor(private exchangeOfferApiService: ApiService<ExchangeOffer>, private authService: AuthService) { }

    createExchangeOffer(exchangeOffer: CreateExchangeOfferDto): Observable<IdResponse> {
        return this.exchangeOfferApiService.post<IdResponse, CreateExchangeOfferDto>(this.endpoint, exchangeOffer, undefined);
    }

    getExchangeOffersByParameters(params: ExchangeOfferSearchParams): Observable<ExchangeOffer[]> {
        return this.exchangeOfferApiService.get<ExchangeOffer[]>(this.endpoint, params);
    }
};
