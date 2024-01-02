export class KommentarModel {
    id?: number; 
    title?: string; 
    comment?: string; 
    createdAt?: Date;
}

  export interface KommentarDisplayModel extends KommentarModel {
    position?: { x: number; y: number };
    style?: { [key: string]: string | number };
  }
  
