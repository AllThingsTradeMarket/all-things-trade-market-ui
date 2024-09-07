export type Offer = {
    id: string,
    userId: string,
    title: string,
    description: string,
    dateCreated: Date;
    images: string[];
    price: number;
};

export type ImageContainerConfig = {
    imageFile?: File
}

export type OfferSearchParams = {
    title?: string;
    userId?: string;
}
