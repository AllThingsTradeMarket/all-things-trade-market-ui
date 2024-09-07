import { Offer } from "../../offer/types/offer.types";
import { exchangeStatusses } from "../constants/exchange-offer.constants";

export type ExchangeOfferStatus = typeof exchangeStatusses[keyof typeof exchangeStatusses];

export type ExchangeOfferSearchParams = {
    receiverId?: string;
    senderId?: string;
    id?: string;
    status?: ExchangeOfferStatus;
};

export type ExchangeOffer = {
    id: string;
    senderId: string;
    receiverId: string;
    date: string;
    status: ExchangeOfferStatus;
    offeredCash?: number;
    offeredProducts?: Offer[];
    requestedProducts: Offer[];
};

export type SelcectableOfferTileOutput = {
    isSelected: boolean;
    offerId: string;
};

export type ExchangeOfferCreatorPayload = {
    offeredCash?: number;
    offeredProductsIds: string[];
};

