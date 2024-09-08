import { ExchangeOfferStatus } from "../types/exchange_offer.types";

export type CreateExchangeOfferDto = {
    senderId: string;
    receiverId: string;
    offeredCash?: number;
    offeredProductsIds?: string[];
    requestedProductsIds: string[];
}

export type UpdateExchangeOfferStatusDto = {
    status: ExchangeOfferStatus
};