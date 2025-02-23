import { Logo } from "./logo.model";

export interface PostCard {
  id: number;
  title: string;
  drawingJson: string;
  logos: Logo[];
}
