import { PlaceGallery } from "./place-gallery";

export interface PlaceInfo {
    review: string;
    about: string;
    destination: string;
    departure: string;
    departureTime: string;
    returnTime: string;
    dressCode: string;
    notIncluded: string[];
    included: string[];
    gallery: PlaceGallery;
}