import { PlaceInfo } from "./place-info";

export interface Place {
  id: number;
  name: string;
  text: string;
  price: string;
  stars: string;
  date: string;
  people: string;
  image: string;
  info: PlaceInfo;
}
