import { Sticker } from "./sticker.model";

export interface Plakat {
  id: number;
  title: string;
  drawingJson: string;
  stickers: Sticker[];
}
