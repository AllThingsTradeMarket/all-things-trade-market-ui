export type CreateOfferDto = {
    userId: string;
    title: string;
    description: string;
    images: File[];
    price: number;
}
